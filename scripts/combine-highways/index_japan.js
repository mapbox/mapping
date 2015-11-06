var util = require("josm/util");
var cmd = require("josm/command");
var con = require("josm/scriptingconsole");

var relation_ways = [];
var relation_nodes = [];
var endnodes = [];
var interways = [];
var interways_id = {};
//type of roads to take account
var preserve_type = {
    "motorway": true,
    "trunk": true,
    "primary": true,
    "secondary": true,
    "tertiary": true
};

var avoid_tags = [
    "yh:LINE_NAME",
    "yh:LINE_NUM",
    "yh:STRUCTURE",
    "yh:TOTYUMONO",
    "yh:TYPE",
    "yh:WIDTH",
    "yh:WIDTH_RANK",
];

function relations() {
    var layer = josm.layers.activeLayer;
    if (layer == null) return;
    var ds = layer.data;
    var result = ds.query("type:relation");
    for (j = 0; j < result.length; j++) {
        var relation = result[j];
        var members = relation.members;
        for (var i = 0; i < members.length; i++) {
            if (members[i].isWay()) {
                var way = members[i].getWay();
                relation_ways.push(way.id)
            } else if (members[i].isNode()) {
                var node = members[i].getNode();
                relation_nodes.push(node.id)
            }
        };
    }
}

function skip_ways(way) {
    var check = [];
    check.push((relation_ways.indexOf(way.id) < 0) ? true : false)
    check.push(preserve_type[way.tags.highway] || false);
    check.push(way.tags.bridge || true);
    check.push(way.tags.tunel || true);
    check.push((way.tags.layer || true) ? true : false);
    check.push((way.version <= 3) ? true : false); //version of way <=3 ,the most important
    return (check.every(function(a) {
        return a == true
    }));
}

function ways() {
    var layer = josm.layers.activeLayer;
    if (layer == null) return;
    var ds = layer.data;
    var result = ds.query("type:way");
    for (j = 0; j < result.length; j++) {
        var way = result[j];
        if (skip_ways(way)) {
            var w = {
                way_id: way.id,
                first: [way.getNode(0), way.getNode(1)],
                last: [way.getNode(way.nodesCount - 1), way.getNode(way.nodesCount - 2)]
            };
            endnodes.push(w);
        }
    }
}

function find_angle(Nlast, Nfirst) {
    //A first point
    //C second point
    //B center point
    var coordsA = Nlast[1].getCoor();
    var A = [coordsA.getY(), coordsA.getX()];
    var coordsB = Nlast[0].getCoor();
    var B = [coordsB.getY(), coordsB.getX()];
    var coordsC = Nfirst[1].getCoor();
    var C = [coordsC.getY(), coordsC.getX()];
    var pi = 3.14159265;
    var AB = Math.sqrt(Math.pow(B[0] - A[0], 2) + Math.pow(B[1] - A[1], 2));
    var BC = Math.sqrt(Math.pow(B[0] - C[0], 2) + Math.pow(B[1] - C[1], 2));
    var AC = Math.sqrt(Math.pow(C[0] - A[0], 2) + Math.pow(C[1] - A[1], 2));
    return Math.acos((BC * BC + AB * AB - AC * AC) / (2 * BC * AB)) * (180 / pi);
}

var rm_element = function(arr, elm) {
    var i = arr.length;
    while (i--)
        if (arr[i] === elm) arr.splice(i, 1);
}


function equal(x, y) {
    if (x && y && typeof x === 'object' && typeof y === 'object') {
        var x_keys = Object.keys(x);
        var y_keys = Object.keys(y);
        x_keys = Object.keys(x).filter(function(k, i) {
            if (avoid_tags.indexOf(k) < 0) {
                return Object.keys(x)[i]
            }
        });

        y_keys = Object.keys(y).filter(function(k, i) {
            if (avoid_tags.indexOf(k) < 0) {
                return Object.keys(y)[i]
            }
        });


        //===============================================
        var result = [];
        if (x_keys.length >= y_keys.length) {
            result = x_keys.filter(function(n) {
                return y_keys.indexOf(n) > -1;
            });
        } else {
            result = Object.keys(y).filter(function(n) {
                return x_keys.indexOf(n) > -1;
            });
        }
        con.println("==== X" + x_keys.length + "==== Y" + y_keys.length);
        con.println(result)
    }


    return (x && y && typeof x === 'object' && typeof y === 'object') ?
        (x_keys.length === y_keys.length) &&
        x_keys.reduce(function(isequal, key) {
            return isequal && equal(x[key], y[key]);
        }, true) : (x === y);

}

function merge() {
    var layer = josm.layers.activeLayer;
    if (layer == null) return;
    var ds = layer.data;
    for (j = 0; j < endnodes.length; j++) {
        var aw = endnodes[j]; //actual way
        for (var i = 0; i < endnodes.length; i++) {
            var sw = endnodes[i]; //sw = second way
            if (aw.way_id !== sw.way_id) {
                if (aw.last[0].id === sw.first[0].id) {
                    var angle = find_angle(aw.last, sw.first);
                    if (angle > 150 && angle < 210 && equal(ds.way(aw.way_id).tags, ds.way(sw.way_id).tags)) {
                        interways.push([aw.way_id, sw.way_id]);
                        interways_id[sw.way_id] = [aw.way_id, sw.way_id];
                    }
                }
            }
        }
    }

    var z = interways.length;
    while (z--) {
        for (var key in interways_id) {
            for (var i = 0; i < interways.length; i++) {
                if (interways_id[key] !== undefined) {
                    if (interways_id[key][interways_id[key].length - 1] === interways[i][0]) {
                        interways_id[key].push(interways[i][1]);
                        delete interways_id[interways[i][0]];
                        interways[i] = [];
                    }
                }
            }
        }
    }
    for (var key in interways_id) {
        var ways = [];
        for (var i = 0; i < interways_id[key].length; i++) {
            ways.push(ds.way(interways_id[key][i]));
        };
        cmd.combineWays(ways);
    }
}

relations();
//Execute the script 
var exe = true;
while (exe) {
    ways();
    merge();
    if (interways.length > 0) {
        exe = true;
        interways = [];
        interways_id = {};
        endnodes = [];
    } else {
        exe = false;
    }
}