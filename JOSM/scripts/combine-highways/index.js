var util = require("josm/util");
var cmd = require("josm/command");

var num_ways_actual = 0;
var num_ways_combined = 0;
var is_counting_ways = true;
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
    check.push((way.version <= 3) ? true : false);
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

function equal(x, y) {
    var x_keys = [];
    var y_keys = [];
    if (x && y && typeof x === 'object' && typeof y === 'object') {
        x_keys = Object.keys(x);
        y_keys = Object.keys(y);
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
    }
    return (x_keys.length === y_keys.length) && (x_keys.length !== 0) && (y_keys.length !== 0) ?
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

    if (is_counting_ways) {
        num_ways = interways.length;
        is_counting_ways = false;
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
        interways = [];
        interways_id = {};
        endnodes = [];
    } else {
        josm.alert(num_ways + " highways were combined into " + josm.layers.activeLayer.data.query("modified  type:way").length);
        exe = false;
    }
}
