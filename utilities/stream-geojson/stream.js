var fs = require('fs');
var JSONStream = require('JSONStream');
var es = require('event-stream');
var turf = require('turf');
var argv = require('minimist')(process.argv.slice(2));

var length = 0;

var stream = fs
  .createReadStream(args[0])
  .pipe(JSONStream.parse('features.*'))
  .pipe(
    es.mapSync(function(data) {
      return data;
    })
  );

stream.on('data', function(data) {
  if (data.geometry.type === 'LineString') {
    length += turf.lineDistance(data, 'kilometers');
  }
});

stream.on('close', function() {
  console.log(length);
});