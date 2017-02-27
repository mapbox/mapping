var fs = require('fs');
var argv = require('minimist')(process.argv.slice(2));
var path = require('path');
var cities = require('./worldcities.json');
var basePath = 'readiness';
var turf = require('turf');




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

var boundaryCoverage ={"type":"FeatureCollection", "features":[]};

function getFolders(srcpath) {
  
  return fs.readdirSync(srcpath).filter(function(file) {
    return fs.statSync(path.join(srcpath, file)).isDirectory();
  });
}

  
  var projFolders = getFolders(basePath);
  console.log("boundary"+','+
            "buildings"+','+
            "3D_buildings"+','+
            "exit"+','+
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
            "poi"+','+
            "waterway"+','+
            "named_waterway"+','+
            "park" +','+
            "named_park"

            );


  
  projFolders.forEach(function(projFolder){
    var feature ={};
    feature.boundary = projFolder;
    cities.features.forEach(function(item){
       if(item.properties.label=== projFolder){
         feature.area = turf.area(item)/1000000;

       }
      
    });
    
    

    
    if (projFolder!='node_modules' ){
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
        feature["buildings coverage"] = baseMapData.buildings/feature.area;
        feature["trunk to motorway coverage"] = (baseMapData["l_trunk"] + baseMapData["l_trunk_link"]+ baseMapData["l_motorway"]+baseMapData["l_motorway_link"])/feature.area;
        feature["tertiary to primary road coverage"] = (baseMapData["l_primary"] + baseMapData["l_primary_link"]+
                                                       baseMapData["l_secondary"] + baseMapData["l_secondary_link"]+
                                                       baseMapData["l_tertiary"] + baseMapData["l_tertiary_link"])/feature.area;
        feature["residential road coverage"]  = baseMapData["l_residential"]/feature.area;
        feature["cities + town names"] = (baseMapData["city"] + baseMapData["town"] )/feature.area;                                                  
        feature["village + hamlet + neighborhoods"] =(baseMapData["village"]+baseMapData["suburb"]+baseMapData["neighbourhood"]+baseMapData["hamlet"])/feature.area;
        feature["waterway coverage"] = baseMapData["waterway"]/feature.area;
        feature["park"] = baseMapData["park"]/feature.area;
        feature["POI density"] = poiCount/feature.area;
        feature["motorable_length"] = baseMapData["motorable_length"];
        feature["percent_named_major"] = (baseMapData["named_motorway"]+baseMapData["named_motorway_link"]+
                                          baseMapData["named_trunk"]+baseMapData["named_trunk_link"]+
                                          baseMapData["named_primary"]+baseMapData["named_primary_link"]+
                                          baseMapData["named_secondary"]+baseMapData["named_secondary_link"]+
                                          baseMapData["named_tertiary"]+baseMapData["named_tertiary_link"])/
                                         (baseMapData["l_motorway"]+baseMapData["l_motorway_link"]+
                                          baseMapData["l_trunk"]+baseMapData["l_trunk_link"]+
                                          baseMapData["l_primary"]+baseMapData["l_primary_link"]+
                                          baseMapData["l_secondary"]+baseMapData["l_secondary_link"]+
                                          baseMapData["l_tertiary"]+baseMapData["l_tertiary_link"]);
        feature["percent_oneway_major"] = (baseMapData["oneway_motorway"]+baseMapData["oneway_motorway_link"]+
                                           baseMapData["oneway_trunk"]+baseMapData["oneway_trunk_link"]+
                                           baseMapData["oneway_primary"]+baseMapData["oneway_primary_link"]+
                                           baseMapData["oneway_secondary"]+baseMapData["oneway_secondary_link"]+
                                           baseMapData["oneway_tertiary"]+baseMapData["oneway_tertiary_link"])/
                                         (baseMapData["l_motorway"]+baseMapData["l_motorway_link"]+
                                          baseMapData["l_trunk"]+baseMapData["l_trunk_link"]+
                                          baseMapData["l_primary"]+baseMapData["l_primary_link"]+
                                          baseMapData["l_secondary"]+baseMapData["l_secondary_link"]+
                                          baseMapData["l_tertiary"]+baseMapData["l_tertiary_link"]);
        feature["percent_named_motorable"] = (baseMapData["named_motorway"]+baseMapData["named_motorway_link"]+
                                          baseMapData["named_trunk"]+baseMapData["named_trunk_link"]+
                                          baseMapData["named_primary"]+baseMapData["named_primary_link"]+
                                          baseMapData["named_secondary"]+baseMapData["named_secondary_link"]+
                                          baseMapData["named_tertiary"]+baseMapData["named_tertiary_link"]+
                                          baseMapData["named_residential"]+
                                          baseMapData["named_unclassified"]+
                                          baseMapData["named_service"])/baseMapData["motorable_length"];
        feature["percent_oneway_motorable"] = (baseMapData["oneway_motorway"]+baseMapData["oneway_motorway_link"]+
                                           baseMapData["oneway_trunk"]+baseMapData["oneway_trunk_link"]+
                                           baseMapData["oneway_primary"]+baseMapData["oneway_primary_link"]+
                                           baseMapData["oneway_secondary"]+baseMapData["oneway_secondary_link"]+
                                           baseMapData["oneway_tertiary"]+baseMapData["oneway_tertiary_link"]+
                                           baseMapData["oneway_residential"]+
                                           baseMapData["oneway_unclassified"]+
                                           baseMapData["oneway_service"])/baseMapData["motorable_length"];                                         
        feature["percent_oneway_motorway"] = (baseMapData["oneway_motorway"]+baseMapData["oneway_motorway_link"])/(baseMapData["l_motorway"]+baseMapData["l_motorway_link"]);
        feature["percent_named_motorway"] = (baseMapData["named_motorway"]+baseMapData["named_motorway_link"])/(baseMapData["l_motorway"]+baseMapData["l_motorway_link"]);
        feature["percent_oneway_trunk"] = (baseMapData["oneway_trunk"]+baseMapData["oneway_trunk_link"])/(baseMapData["l_trunk"]+baseMapData["l_trunk_link"]);
        feature["percent_named_trunk"] = (baseMapData["named_trunk"]+baseMapData["named_trunk_link"])/(baseMapData["l_trunk"]+baseMapData["l_trunk_link"]);
        feature["percent_oneway_primary"] = (baseMapData["oneway_primary"]+baseMapData["oneway_primary_link"])/(baseMapData["l_primary"]+baseMapData["l_primary_link"]);
        feature["percent_named_primary"] = (baseMapData["named_primary"]+baseMapData["named_primary_link"])/(baseMapData["l_primary"]+baseMapData["l_primary_link"]);
        feature["percent_oneway_secondary"] = (baseMapData["oneway_secondary"]+baseMapData["oneway_secondary_link"])/(baseMapData["l_secondary"]+baseMapData["l_secondary_link"]);
        feature["percent_named_secondary"] = (baseMapData["named_secondary"]+baseMapData["named_secondary_link"])/(baseMapData["l_secondary"]+baseMapData["l_secondary_link"]);
        feature["percent_oneway_tertiary"] = (baseMapData["oneway_tertiary"]+baseMapData["oneway_tertiary_link"])/(baseMapData["l_tertiary"]+baseMapData["l_tertiary_link"]);
        feature["percent_named_tertiary"] = (baseMapData["named_tertiary"]+baseMapData["named_tertiary_link"])/(baseMapData["l_tertiary"]+baseMapData["l_tertiary_link"]);
        
        feature["TR coverage"] = baseMapData["restriction"]/feature["motorable_length"];
        feature["TL coverage"] = baseMapData["turn_lanes"]/feature["motorable_length"];
        feature["exit + destination coverage"] = (baseMapData.exit+baseMapData.destination)/feature["motorable_length"];
        boundaryCoverage.features.push(feature);
    console.log(projFolder+','+
            baseMapData.buildings+','+
            baseMapData["3D_buildings"]+','+
            baseMapData.exit+','+
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
            poiCount+','+
            baseMapData["waterway"]+','+
            baseMapData["named_waterway"]+','+
            baseMapData["park"]+','+
            baseMapData["named_park"]

            );

     }
 }
   
});
fs.writeFile('coverage.json', JSON.stringify(boundaryCoverage), (err) => {
  if (err) throw err;
  // console.log('It\'s saved!');
}); 
var coverageCSV ='';
var properties = Object.keys(boundaryCoverage.features[0]);
properties.forEach(function(item,index){
    if(index!=[properties.length]-1){
        coverageCSV += item+',';

    } else{
        coverageCSV += item;
    }
  
});
 
    

coverageCSV += '\n';



boundaryCoverage.features.forEach(function(item){
   var properties = Object.keys(item);
   properties.forEach(function(property,index){
    if(index!=[properties.length]-1){
        coverageCSV += item[property]+',';

    } else{
        coverageCSV += item[property];
    }
  
});
 
    

coverageCSV += '\n';

});

fs.writeFile('coverage.csv', coverageCSV, (err) => {
  if (err) throw err;
  // console.log('It\'s saved!');
}); 
} else if (argv.mode === 'baseline'){

    

    var baseline ={"type":"FeatureCollection","features":[]};
    var north_america_highways =["NewYork_exterior_NY", "Washington_exterior_DC", "SFCity_exterior_CA", "Los_Angeles_exterior_CA"];
    var north_america_buildings =["NewYork_exterior_NY", "Washington_core_DC","SFCity_exterior_CA","Boston_exterior_MA"];
    var north_america_tr = ["Montreal_CA","Ottawa_CA","SFCity_exterior_CA"];
    var north_america_tl = ["Oklahoma_exterior_OK","San_Diego_exterior_CA","SFbay_exterior_CA"];
    var north_america_exit = ["NewYork_exterior_NY","Washington_exterior_DC","SFCity_exterior_CA","Los_Angeles_exterior_CA"];
    var europe_highways = ["Berlin_GE","London","Paris_exterior","Munich_GE"];
    var europe_buildings = ["Berlin_GE","London","Paris_exterior","Munich_GE"];
    var europe_tr =["Berlin_GE","London","Paris_exterior","Munich_GE"];
    var europe_tl=["Berlin_GE","London","Paris_exterior","Munich_GE"];
    var europe_exit =["Berlin_GE","London","Paris_exterior","Munich_GE"];
    var asia_highways=["Manila_exterior","KualaLumpur_exterior","Bangkok_exterior","Singapore_exterior","Jakarta_exterior"];
    var asia_buildings = ["Manila_exterior","KualaLumpur_exterior","Singapore_exterior"];
    var asia_tr=["Manila_exterior","KualaLumpur_exterior","Bangkok_exterior","Singapore_exterior","Jakarta_exterior"];
    var asia_tl=["Manila_exterior","KualaLumpur_exterior","Bangkok_exterior","Singapore_exterior","Jakarta_exterior"];
    var asia_exit =["Manila_exterior","KualaLumpur_exterior","Bangkok_exterior","Singapore_exterior","Jakarta_exterior"];

    var baselineFeature ={}





} else if (argv.mode === 'coverage'){

}
