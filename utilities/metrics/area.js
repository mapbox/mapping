var fs = require('fs');
var turf = require('turf');
var cities = require('./worldcities.json');
//console.log(cities);
console.log('cities'+','+'area');
cities.features.forEach(function(item){

console.log(item.properties.label+','+turf.area(item)/1000000);
});
