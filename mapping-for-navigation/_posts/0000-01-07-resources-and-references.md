---
title: Resources and References
---

**Mapbox navigation mapping projects**

Navigation mapping forms a large part of Mapbox's mapping sprints in recent times. Given below are a few examples of some of the latest navigation mapping efforts across US, Canada, and Europe. To get an idea about all our historical mapping projects related to navigation in OSM, look into the [mapping repository](https://github.com/mapbox/mapping/issues). Our mapping projects are conducted in the open with active participation, feedback, and validation from the community.

#### Examples

Location | Description|Start|End(ETA)|Validation
---|---|---|---|---|
[Mapping turn lanes in 30 US cities](https://github.com/mapbox/mapping/issues/180)| Mapping all the turn lanes from satellite imagery in 30 US cities from secondary and above|04/05/2016|Continuing|Continuing
[Updating turn restrictions in Germany](https://github.com/mapbox/mapping/issues/226)| Updating missing turn restriction coverage in 3 german cities: Berlin, Stuttgart, Wolfsburg|29/08/2016|Continuing|Continuing
[Mapping turn restrictions in Canada](https://github.com/mapbox/mapping/issues/213)|Mapping turn restrictions from mapillary in top 5 cities in Canada|22/07/2016|05/08/2016|Completed
[Exit and destination mapping in Canada](https://github.com/mapbox/mapping/issues/220)|Map the exit and destination numbers in top 5 Canada cities using mapillary|11/08/2016|17/08/2016|Completed

**Navigation data tools**

* [Mapillary Explorer](https://www.mapillary.com/app/?lat=37.7722684544772&lng=-122.42339365639796&z=15.45924850796377&signs=true&trafficSign%5B%5D=information--highway-exit--g1&trafficSign%5B%5D=information--highway-interchange--g1&trafficSign%5B%5D=information--street-name--g1&trafficSign%5B%5D=regulatory--no-left-or-u-turn--g1&trafficSign%5B%5D=regulatory--no-left-turn--g1&trafficSign%5B%5D=regulatory--no-right-turn--g1&trafficSign%5B%5D=regulatory--no-left-turn--g2&trafficSign%5B%5D=regulatory--no-right-turn--g2&trafficSign%5B%5D=regulatory--no-straight-through--g1&trafficSign%5B%5D=regulatory--no-u-turn--g3&trafficSign%5B%5D=regulatory--no-u-turn--g1&trafficSign%5B%5D=regulatory--dual-lanes-turn-left-or-straight--g1&trafficSign%5B%5D=regulatory--dual-lanes-turn-right-or-straight--g1&trafficSign%5B%5D=regulatory--go-straight-or-turn-left--g2&trafficSign%5B%5D=regulatory--go-straight-or-turn-right--g2&trafficSign%5B%5D=regulatory--triple-lanes-go-straight-center-lane--g1&trafficSign%5B%5D=regulatory--triple-lanes-turn-left-center-lane--g1&trafficSign%5B%5D=regulatory--triple-lanes-turn-right-center-lane--g1&trafficSign%5B%5D=regulatory--go-straight--g1&trafficSign%5B%5D=regulatory--go-straight-or-turn-left--g1&trafficSign%5B%5D=regulatory--go-straight-or-turn-right--g1&focus=map&x=0.5198323295648553&y=0.5878565770107547&zoom=0.84549356223176): Explore navigation related traffic signs automatically detected from crowdsourced street level imagery.
* [OpenStreetMap navigation map](http://mapbox.github.io/osm-navigation-map/#11.63/37.7896/-122.4363): This map is used to add turn restrictions in OSM. It has a detected signage mapillary layer for easy detection of turn restrictions, oneways and a dataset which displays all the valid, invalid and redundant turn restrictions added. Get more [instructions](https://github.com/mapbox/osm-navigation-map/blob/gh-pages/MAPPING.md) on `how to use the OSM navigation map`.
* [CheckAutopista2](http://k1wiosm.github.io/checkautopista2/): It is a tool to investigate and add highway signboard features on motorways and freeways. For more details look into the [github repository](https://github.com/k1wiosm/checkautopista2) for `checkautopista`.
* [Overpass](https://overpass-turbo.eu/): The place to query and extract all OSM data related to a specific feature. It has a simple query builder feature that helps in querying each and every feature in OSM. Details about [overpass](http://wiki.openstreetmap.org/wiki/Overpass_turbo) can be found [here](http://wiki.openstreetmap.org/wiki/Overpass_API) and [here](http://wiki.openstreetmap.org/wiki/Overpass_API/Language_Guide).
* [Knife tool](https://www.mapbox.com/blog/knife-tool/): The knife tool can be used for quick splitting of ways while adding navigation features such as turn lanes. For more details, look [here](https://github.com/mapbox/auto-tools/tree/split)
* [Turn lanes tagging plugin](https://www.mapbox.com/blog/turnlanes-tagging/): With this plugin, you can add complex tag combinations for turn lanes at road junctions with ease, and minimize errors. For more details, look [here](https://github.com/JOSM/turnlanes-tagging)



**Country specific navigation guide**
 - Images of traffic signs and road markings : Traffic signs and road markings may undergo small changes and specific cases when mapping turn restrictions using Mapillary. There are subtle differences in turn restrictions between Canada, US, and Germany. *(This section is to be kept updated with new signages every time mapping is done in a separate country with new conventions)*
 
1. **[Turn restriction images in US](https://gist.github.com/abhisheksaikia/7c9329a985816c128aabcba092747816)**
 
2. **[Turn restrictions images in Germany](https://gist.github.com/abhisheksaikia/646b918fc64f9d8109b5d62a8137e86a)**

3. **[Turn restrictions in Canada](https://gist.github.com/abhisheksaikia/bcfbf4ea0dc1e100337244867b2524fc)**

4. **[Turn restrictions in France](https://gist.github.com/jothirnadh/3d0245816dabbf395c447130877c538c)**
 

For more details on cases for turn restrictions and signages in different countries take a look at [QA for mapping turn restrictions](https://gist.github.com/abhisheksaikia/6e12973daa5be78da3ef9ba6d21b8562)

**Data sources and references for navigation data**

* [Mapillary](https://www.mapillary.com/)

* [OpenStreetView](http://openstreetview.org/map/)
- **DOT documents/websites**: Local official websites, documents released by local `Department of Transportation` bodies.
- **Wikipedia**: Exit and destination numbers, highways, highway refs. *(must be verified on ground or with official sources)*
- High resolution satellite imagery: Bing, Mapbox, USGS, open satellite datasets ([Landsat](http://landsat.usgs.gov/), [Sentinel2](http://www.esa.int/Our_Activities/Observing_the_Earth/Copernicus/Sentinel-2/Data_products), [LISS](http://bhuvan.nrsc.gov.in/data/download/index.php), government opendata portals).
