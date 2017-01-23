#!/usr/bin/env bash

uploadTo="s3://mapbox/playground/ramyaragupathy/worldcities"

#fetch continent pbfs


# continents=('north-america','europe','asia')
# states=('california',)
# for ((i=0; i < ${#continents[@]}; i++))
# do
#   echo wget -c http://download.geofabrik.de/${continents[$i]}-latest.osm.pbf
#   wget -c http://download.geofabrik.de/${continents[$i]}-latest.osm.pbf
# done


#install dependencies
npm install -g geojson2poly
wget -O - http://m.m.i24.cc/osmconvert.c | cc -x c - -lz -O3 -o osmconvert
sudo apt-get install jq
git clone https://github.com/geohacker/osmlazer.git
cd osmlazer
git checkout readiness
npm install
cd ..

#generate geojsons
node readiness.js

#generate poly files
for city in *.geojson
do
 echo "reading file ${city}"
 geojson2poly ${city} ${city}.poly
 
done

continents=( $(jq -r '.[].properties.is_in' citiesArr.json) )
countries=( $(jq -r '.[].properties.country' citiesArr.json) )
states=( $(jq -r '.[].properties.state' citiesArr.json) )
cities=( $(jq -r '.[].properties.label' citiesArr.json) )

for ((i=0; i < ${#cities[@]}; i++))
do
  if [ ${states[$i]} != "null" ]
  then
     wget -c http://download.geofabrik.de/${continents[$i]}/${countries[$i]}/${states[$i]}-latest.osm.pbf
    ./osmconvert --complete-ways  --complex-ways ${states[$i]}-latest.osm.pbf -B=${cities[$i]}.geojson.poly -o=${cities[$i]}.osm.pbf
  else
    wget -c http://download.geofabrik.de/${continents[$i]}/${countries[$i]}-latest.osm.pbf
    ./osmconvert --complete-ways  --complex-ways ${countries[$i]}-latest.osm.pbf -B=${cities[$i]}.geojson.poly -o=${cities[$i]}.osm.pbf
  fi
    echo aws s3 cp ${cities[$i]}.osm.pbf ${uploadTo}/${cities[$i]}/
    aws s3 cp ${cities[$i]}.osm.pbf ${uploadTo}/${cities[$i]}/
    echo node osmlazer/index.js --file ${cities[$i]}.osm.pbf --mode basemap > ${cities[$i]}_basemap.json
    node osmlazer/index.js --file ${cities[$i]}.osm.pbf --mode basemap > ${cities[$i]}_basemap.json
    echo aws s3 cp ${cities[$i]}_basemap.json ${uploadTo}/${cities[$i]}/
    aws s3 cp ${cities[$i]}_basemap.json ${uploadTo}/${cities[$i]}/
    echo node osmlazer/index.js --file ${cities[$i]}.osm.pbf --mode poi > ${cities[$i]}_poi.json
    node osmlazer/index.js --file ${cities[$i]}.osm.pbf --mode poi > ${cities[$i]}_poi.json
    echo aws s3 cp ${cities[$i]}_poi.json ${uploadTo}/${cities[$i]}/
    aws s3 cp ${cities[$i]}_poi.json ${uploadTo}/${cities[$i]}/
    node osmlazer/index.js --file ${cities[$i]}.osm.pbf --mode address  > ${cities[$i]}_address.json
    aws s3 cp ${cities[$i]}_address.json ${uploadTo}/${cities[$i]}/
    rm ${cities[$i]}.osm.pbf
    
  
done

rm *.geojson
rm *.poly

