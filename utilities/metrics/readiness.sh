#!/usr/bin/env bash

uploadTo="s3://mapbox/worldcities"

#fetch continent pbfs


# continents=('north-america','europe','asia')
# states=('california',)
# for ((i=0; i < ${#continents[@]}; i++))
# do
#   echo wget -c http://download.geofabrik.de/${continents[$i]}-latest.osm.pbf
#   wget -c http://download.geofabrik.de/${continents[$i]}-latest.osm.pbf
# done


#install dependencies
sudo npm install -g minimist
sudo npm install -g geojson2poly
wget -O - http://m.m.i24.cc/osmconvert.c | cc -x c - -lz -O3 -o osmconvert
sudo apt-get install jq
git clone https://github.com/geohacker/osmlazer.git
cd osmlazer
git checkout readiness
npm install
cd ..

#generate geojsons
node readiness.js --mode setup

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
     if [ -f ${states[$i]}-latest.osm.pbf ]
      then
       ./osmconvert --complete-ways  --complex-ways ${states[$i]}-latest.osm.pbf -B=${cities[$i]}.geojson.poly -o=readiness/${cities[$i]}/${cities[$i]}.osm.pbf
      else
        wget -c http://download.geofabrik.de/${continents[$i]}/${countries[$i]}/${states[$i]}-latest.osm.pbf
       ./osmconvert --complete-ways  --complex-ways ${states[$i]}-latest.osm.pbf -B=${cities[$i]}.geojson.poly -o=readiness/${cities[$i]}/${cities[$i]}.osm.pbf
    fi 
  else
     if [ -f ${countries[$i]}-latest.osm.pbf ]
     then
      ./osmconvert --complete-ways  --complex-ways ${countries[$i]}-latest.osm.pbf -B=${cities[$i]}.geojson.poly -o=readiness/${cities[$i]}/${cities[$i]}.osm.pbf
     else
  	wget -c http://download.geofabrik.de/${continents[$i]}/${countries[$i]}-latest.osm.pbf
       ./osmconvert --complete-ways  --complex-ways ${countries[$i]}-latest.osm.pbf -B=${cities[$i]}.geojson.poly -o=readiness/${cities[$i]}/${cities[$i]}.osm.pbf
    fi
 fi
    echo aws s3 cp readiness/${cities[$i]}/${cities[$i]}.osm.pbf ${uploadTo}/${cities[$i]}/ --acl public-read
    aws s3 cp readiness/${cities[$i]}/${cities[$i]}.osm.pbf ${uploadTo}/${cities[$i]}/ --acl public-read
    echo node osmlazer/index.js --file readiness/${cities[$i]}/${cities[$i]}.osm.pbf --mode basemap > readiness/{${cities[$i]}/${cities[$i]}_basemap.json
    node osmlazer/index.js --file readiness/${cities[$i]}/${cities[$i]}.osm.pbf --mode basemap > readiness/${cities[$i]}/${cities[$i]}_basemap.json
    echo aws s3 cp readiness/${cities[$i]}/${cities[$i]}_basemap.json ${uploadTo}/${cities[$i]}/ --acl public-read
    aws s3 cp readiness/${cities[$i]}/${cities[$i]}_basemap.json ${uploadTo}/${cities[$i]}/ --acl public-read
    echo node osmlazer/index.js --file readiness/${cities[$i]}/${cities[$i]}.osm.pbf --mode poi > readiness/${cities[$i]}/${cities[$i]}_poi.json
    node osmlazer/index.js --file readiness/${cities[$i]}/${cities[$i]}.osm.pbf --mode poi > readiness/${cities[$i]}/${cities[$i]}_poi.json
    echo aws s3 cp readiness/${cities[$i]}/${cities[$i]}_poi.json ${uploadTo}/${cities[$i]}/ --acl public-read
    aws s3 cp readiness/${cities[$i]}/${cities[$i]}_poi.json ${uploadTo}/${cities[$i]}/ --acl public-read
    node osmlazer/index.js --file readiness/${cities[$i]}/${cities[$i]}.osm.pbf --mode address  > readiness/${cities[$i]}/${cities[$i]}_address.json
    aws s3 cp readiness/${cities[$i]}/${cities[$i]}_address.json ${uploadTo}/${cities[$i]}/ --acl public-read
    node readiness.js --mode aggregate
    
    
done

rm *.geojson
rm *.poly

