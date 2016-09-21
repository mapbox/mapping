var turf = require('turf');
var lineDistance = require('turf-line-distance');
var fs = require('fs');
var argv = require('minimist')(process.argv.slice(2));

fs.readFile("tw_z17_sample.geojson", 'utf8', function (err,data) {
  if (err) {return console.log(err);}
  var content = JSON.parse(data);
  var length = 0;
  for (var i = 0; i < content.features.length; i++) {
  	var coords = content.features[i].geometry.coordinates;
  	length += turf.lineDistance(content.features[i], 'kilometers');
  }
  console.log(length);
});
