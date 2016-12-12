var turf = require('turf');
var lineDistance = require('turf-line-distance');
var fs = require('fs');

var args = process.argv.slice(2);

fs.readFile(args[0], 'utf8', function (err,data) {
  if (err) {return console.log(err);}
  var content = JSON.parse(data);
  var length = 0;
  for (var i = 0; i < content.features.length; i++) {
    if (content.features[i].geometry.type === "LineString") {
        var coords = content.features[i].geometry.coordinates;
        length += turf.lineDistance(content.features[i], 'kilometers');
    }
  }
  console.log(length);
});
