var fs = require('fs');
var cities = require('./worldcities.json');
//console.log(cities.features.length);
var citiesArr =[];

cities.features.forEach(function(feature){
	//console.log(feature.geometry.coordinates);
	var tempFile = fs.createWriteStream(feature.properties.label+'.geojson');
    tempFile.on('open', function() {
        
                tempFile.write(JSON.stringify(feature));
           
                tempFile.end();
                
    
    });
    citiesArr.push(feature);

});
var citiesArrFile = fs.createWriteStream('citiesArr.json');
    citiesArrFile.on('open', function() {
        
                citiesArrFile.write(JSON.stringify(citiesArr));
           
                citiesArrFile.end();
                
    
});


