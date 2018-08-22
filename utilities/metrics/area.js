const fs = require('fs')
const turf = require('turf')
const cities = require('./worldcities.json')
console.log('cities' + ',' + 'area')
cities.features.forEach(function (item) {
  console.log(item.properties.label + ',' + turf.area(item) / 1000000)
})
