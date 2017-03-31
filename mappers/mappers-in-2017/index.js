'use strict';

var argv = require('minimist')(process.argv.slice(2));
var turf = require('@turf/turf');
var fs = require('fs');
var path = require('path');
var tileReduce = require('tile-reduce');
var queue = require('d3-queue').queue;
var csv = require('csv');

if (!argv.boundaries) {
    console.log('');
    console.log('node index.js OPTIONS');
    console.log('');
    console.log('  OPTIONS');
    console.log('    --osm osm-qa-tiles.mbtiles');
    console.log('    --boundaries boundaries.geojson');
    console.log('');
    return;
}

var fc = JSON.parse(fs.readFileSync(argv.boundaries));

var q = queue(1);
for (var i = 0; i < fc.features.length; i++) {
    var city = fc.features[i];
    q.defer(runTileReduce, city, argv.osm);
}
q.awaitAll(function (error, results) {
    if (error) console.log(error);
    csv.stringify(results, function (error, resultsAsString) {
        console.log(resultsAsString);
    })
});

function runTileReduce(city, mbtiles, callback) {
    var counts = {
        'users': 0,
        'features': 0,
        'city': city['properties']['label'],
        'country': city['properties']['country']
    };
    tileReduce({
        bbox: turf.bbox(city),
        zoom: 12,
        map: path.join(__dirname, 'count.js'),
        sources: [
            {
                name: 'osm',
                mbtiles: mbtiles
            }
        ]
    }).on('reduce', function (tempCounts) {
        counts['users'] += tempCounts['users'];
        counts['features'] += tempCounts['features'];
    }).on('end', function () {
        callback(null, counts);
    });
}
