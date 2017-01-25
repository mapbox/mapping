var fs = require('fs');
var argv = require('minimist')(process.argv.slice(2));
var path = require('path');
var cities = require('./worldcities.json');
var basePath = 'readiness';


var citiesArr =[];

if(argv.mode === 'setup'){
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
} else if (argv.mode === 'aggregate'){

  
function getFolders(srcpath) {
  
  return fs.readdirSync(srcpath).filter(function(file) {
    return fs.statSync(path.join(srcpath, file)).isDirectory();
  });
}

  
  var projFolders = getFolders(basePath);
  console.log("boundary"+','+"exit"+','+
            "destination"+','+
            "restriction"+','+
            "turn_lanes"+','+
            "oneway"+','+
           "l_oneway"+','+
            "motorable_length"+','+
            "nonmotorable_length"+','+
            "motorable_name"+','+
            "named_highway"+','+
            "l_named_highway"+','+
            "motorway"+','+
            "l_motorway"+','+
            "named_motorway"+','+
            "motorway_link"+','+
            "l_motorway_link"+','+
            "named_motorway_link"+','+
            "trunk"+','+
          "l_trunk"+','+
            "named_trunk" +','+
            "trunk_link"+','+
            "l_trunk_link"+','+
            "named_trunk_link"+','+
            "primary"+','+
            "l_primary"+','+
            "named_primary"+','+
            "primary_link"+','+
            "l_primary_link"+','+
           "named_primary_link"+','+
            "secondary"+','+
           "l_secondary"+','+
            "named_secondary"+','+
            "secondary_link"+','+
            "l_secondary_link"+','+
            "named_secondary_link"+','+
            "tertiary"+','+
            "l_tertiary"+','+
            "named_tertiary"+','+
            "tertiary_link"+','+
           "l_tertiary_link"+','+
            "named_tertiary_link"+','+
            "residential"+','+
            "l_residential"+','+
            "named_residential"+','+
            "unclassified"+','+
            "l_unclassified"+','+
            "named_unclassified"+','+
            "service"+','+
            "l_service"+','+
           "named_service"+','+
          "living_street"+','+
            "l_living_street"+','+
            "named_living_street"+','+
            "footway"+','+
            "l_footway"+','+
            "named_footway"+','+
            "track"+','+
            "l_track"+','+
            "named_track"+','+
            "path"+','+
            "l_path"+','+
            "named_path"+','+
            "wikidata"+','+
            "city"+','+
            "town"+','+
            "neighbourhood"+','+
            "hamlet"+','+
            "suburb"+','+
            "village"+','+
            "poi"
            );


  
  projFolders.forEach(function(projFolder){
    
    if (projFolder!='node_modules' && projFolder!= 'Phoenix_exterior_AZ' ){
        var feature = {"type":"feature","properties":{}};
        var stats = fs.statSync('./'+basePath+'/'+projFolder+'/'+projFolder+'_basemap.json')
        var basemapFileSizeInBytes = stats["size"];
        var stats = fs.statSync('./'+basePath+'/'+projFolder+'/'+projFolder+'_basemap.json')
        var poiFileSizeInBytes = stats["size"];
        
       if (basemapFileSizeInBytes!=0 && poiFileSizeInBytes!=0)
       {

       
        var baseMapData = require('./'+basePath+'/'+projFolder+'/'+projFolder+'_basemap.json');
        var poiData = require('./'+basePath+'/'+projFolder+'/'+projFolder+'_poi.json');
        var poiList =["transport","amenities","shopping","leisure","infrastructure",
                      "tourism","namedBuildings","natural","landuse"];
        var poiCount =0;
        poiList.forEach(function(item){
         if(poiData.hasOwnProperty(item)){
          poiCount = poiCount + poiData[item];

         }

        });
        
    console.log(projFolder+','+baseMapData.exit+','+
            baseMapData.destination+','+
            baseMapData.restriction+','+
            baseMapData["turn_lanes"]+','+
            baseMapData["oneway"]+','+
            baseMapData["l_oneway"]+','+
            baseMapData["motorable_length"]+','+
            baseMapData["nonmotorable_length"]+','+
            baseMapData["motorable_name"]+','+
            baseMapData["named_highway"]+','+
            baseMapData["l_named_highway"]+','+
            baseMapData["motorway"]+','+
            baseMapData["l_motorway"]+','+
            baseMapData["named_motorway"]+','+
            baseMapData["motorway_link"]+','+
            baseMapData["l_motorway_link"]+','+
            baseMapData["named_motorway_link"]+','+
            baseMapData["trunk"]+','+
            baseMapData["l_trunk"]+','+
            baseMapData["named_trunk"] +','+
            baseMapData["trunk_link"]+','+
            baseMapData["l_trunk_link"]+','+
            baseMapData["named_trunk_link"]+','+
            baseMapData["primary"]+','+
            baseMapData["l_primary"]+','+
            baseMapData["named_primary"]+','+
            baseMapData["primary_link"]+','+
            baseMapData["l_primary_link"]+','+
            baseMapData["named_primary_link"]+','+
            baseMapData["secondary"]+','+
            baseMapData["l_secondary"]+','+
            baseMapData["named_secondary"]+','+
            baseMapData["secondary_link"]+','+
            baseMapData["l_secondary_link"]+','+
            baseMapData["named_secondary_link"]+','+
            baseMapData["tertiary"]+','+
            baseMapData["l_tertiary"]+','+
            baseMapData["named_tertiary"]+','+
            baseMapData["tertiary_link"]+','+
            baseMapData["l_tertiary_link"]+','+
            baseMapData["named_tertiary_link"]+','+
            baseMapData["residential"]+','+
            baseMapData["l_residential"]+','+
            baseMapData["named_residential"]+','+
            baseMapData["unclassified"]+','+
            baseMapData["l_unclassified"]+','+
            baseMapData["named_unclassified"]+','+
            baseMapData["service"]+','+
            baseMapData["l_service"]+','+
            baseMapData["named_service"]+','+
            baseMapData["living_street"]+','+
            baseMapData["l_living_street"]+','+
            baseMapData["named_living_street"]+','+
            baseMapData["footway"]+','+
            baseMapData["l_footway"]+','+
            baseMapData["named_footway"]+','+
            baseMapData["track"]+','+
            baseMapData["l_track"]+','+
            baseMapData["named_track"]+','+
            baseMapData["path"]+','+
            baseMapData["l_path"]+','+
            baseMapData["named_path"]+','+
            baseMapData["wikidata"]+','+
            baseMapData["city"]+','+
            baseMapData["town"]+','+
            baseMapData["neighbourhood"]+','+
            baseMapData["hamlet"]+','+
            baseMapData["suburb"]+','+
            baseMapData["village"]+','+
            poiCount

            );

     }
 }
   
});

   
} 

