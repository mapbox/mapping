---
title: Road Features Mapping Guide
---

*Detailed guide mapping features for navigation on the OpenStreetMap project. Before you start, please read the guide on [Mapping with OpenStreetMap](https://www.mapbox.com/mapping/)*

[Query OpenStreetMap for Navigation Data via Overpass](http://overpass-turbo.eu/s/iyB)

## Routing features

These are features that help the routing engine find the safest and fastest route between two points.


### 1. Functional Road Class

* `highway=*`
* [OSM Wiki](http://wiki.openstreetmap.org/wiki/Key:highway)

Roads are categorized  according to its order of importance. They are tagged with the `highway=*`. The general order of importance for way types are:

``` xml
highway= motorway > trunk > primary > secondary > ... > living streets > ... > footway
```
![screen shot 2016-08-29 at 1 50 04 pm](https://cloud.githubusercontent.com/assets/13744156/18045336/ff8f31ea-6def-11e6-8692-bb4e082b94b8.png)

*`highway=primary` in San Francisco*

The value of the key helps show the importance of the highway within the road network as a whole. The importance ranges from the most important `motorway` to the least important `service`. The routing engine takes into account this importance of classification when determining optimum routes.

Road classification may varies from country to country. The country specific use cases can be found in detail on separate wiki pages. For example, when mapping roads in India, the local community refer to the [India road tagging wiki](http://wiki.openstreetmap.org/wiki/India:Tags/Highway).

Examples:

* [US roads classification](http://wiki.openstreetmap.org/wiki/United_States_Road_Classification)
* [UK roads classification/numbering](https://en.wikipedia.org/wiki/Great_Britain_road_numbering_scheme)

For an example of an area with a good concentration of different classes of roads on OpenStreetMap, look at [San Francisco](https://www.openstreetmap.org/#map=14/37.7788/-122.4375) area. This [osm query](http://overpass-turbo.eu/s/i4y) can be used to extract and gather numbers of all the highways present in a given bounding box on OpenStreetMap.

[Department of Transportation](https://www.fhwa.dot.gov/about/webstate.cfm) websites and [wikipedia](https://en.wikipedia.org/wiki/United_States_Numbered_Highways) are some of the primary sources for highway information.

### 2. Oneways

* `oneway=yes`
* [OSM Wiki](http://wiki.openstreetmap.org/wiki/Key:oneway)

Oneways generally refer to road segments which allow traffic in only one direction. There are also streets which have oneway characteristics for only on certain times of the day to regulate traffic.

![screen shot 2016-08-29 at 5 47 47 pm](https://cloud.githubusercontent.com/assets/13744156/18051463/5fdc162c-6e12-11e6-8984-c48da11bf73f.png)

*`oneway=yes` shown in Mapillary*

The best source of mapping oneways are again street level photos.

[San Francisco](https://www.openstreetmap.org/#map=12/37.7574/-122.4845) is one area which has been well mapped for oneways in OpenStreetMap. This [overpass query](http://overpass-turbo.eu/s/i50) can be used to extract oneways from OpenStreetMap data.

### 3. Turn-Restrictions

* `type=restriction`
* [OSM Wiki](http://wiki.openstreetmap.org/wiki/Relation:restriction)
* [Mapping guide](/mapping/mapping-to-improve-navigation/mapping-guide-for-adding-turn-restrictions-using-mapillary/)

`type=restriction` is added to a relation in OpenStreetMap which is used to describe turn restrictions at junctions. The relation has a set of tags that describes the type of restriction, for example. `no_left_turn`, `no_right_turn`, `no_u_turn`, etc. These are traffic signs at junctions and this information must be present on the map to find the best route by the routing engine while planning a route.

![screen shot 2016-03-08 at 8 05 36 pm](https://cloud.githubusercontent.com/assets/8401827/13604633/ad8bff4a-e569-11e5-9198-3ac9c88e5619.png)

*Turn restriction denoting `no left turn` along with conditions: opening and closing times*

The main resource for turn restriction data is [street view level images](https://www.mapbox.com/blog/safer-market-street/), local mapping drives, [DOT websites](http://www1.toronto.ca/wps/portal/contentonly?vgnextoid=83f6e69ae554e410VgnVCM10000071d60f89RCRD)

![turn_restriction](https://cloud.githubusercontent.com/assets/13744156/18047415/7d9254c8-6dfa-11e6-94e6-9d85b58627c1.jpg)
*turn restriction which denotes `no right turn` at the junction*

[San Francisco](https://www.openstreetmap.org/#map=13/37.7696/-122.4891) in OpenStreetMap has an excellent coverage of turn by turn restrictions at junctions. This [overpass query](http://overpass-turbo.eu/s/i4G) can be used to extract current turn restriction in a bounding box.

### 4. Speed limits

* `maxspeed=60` or `maxpseed=40 mph`
* [OSM Wiki](http://wiki.openstreetmap.org/wiki/Key:maxspeed)

The `maxspeed=*` tag defines the maximum legal speed limit for general traffic on a particular road, railway or waterway. The max speed values will be interpreted as kilometers per hour by default. The `maxspeed=*` is an important part of routing as it is used in determining the shortest time taken by a specific route to reach a destination. In the case of two routes, the one with the shortest time (higher maxspeed) and shortest distance will be considered as the optimum route.


![maxspeed](https://cloud.githubusercontent.com/assets/13744156/18046639/6602224c-6df6-11e6-8884-18a58bf4835a.jpg)

*Maxspeed sign shown in Mapillary*

The main data sources for detecting maxspeed signs are: [street view photos](https://www.mapbox.com/blog/mapillary-mapping/), [wikipedia](https://en.wikipedia.org/wiki/Speed_limits_in_Canada), [DOT documents](http://www.qld.gov.au/transport/safety/rules/speed-limits/index.html).

The `maxspeed=*` data on OpenStreetMap (for example, in [London](https://www.openstreetmap.org/#map=14/51.5059/-0.1061)) in an area can be extracted by this [overpass query](http://overpass-turbo.eu/s/i4z).


### 5. Access-Restrictions

* `access=*`
* [OSM Wiki](http://wiki.openstreetmap.org/wiki/Key:access)

Apart from turn restrictions, there are access restrictions for different parts of highways. Some of these tags are `access=no`, `access=private` etc which will end up altering the route to be taken during the journey. For more information on the various kinds of `access=*` tags take a look at [Key:access](http://wiki.openstreetmap.org/wiki/Key:access) and [Conditional restrictions](http://wiki.openstreetmap.org/wiki/Conditional_restrictions) and [access restrictions](http://wiki.openstreetmap.org/wiki/OpenStreetMap_tags_for_routing/Access-Restrictions)

![749px-mutcd_r5-7](https://cloud.githubusercontent.com/assets/13744156/18048743/b688e696-6e01-11e6-80ae-e65ce6743830.png)

*An `access=no` for non-motorized traffic, ends up altering the route for bicycle profiles, source: US MUTDC*

All the `access=private` tags on OpenStreetMap ways, which will not allow that segment of the way to be used in a route can be extracted from this [overpass query](http://overpass-turbo.eu/s/i4J). An example of well-mapped access restrictions in OpenStreetMap can be found in [London](https://www.openstreetmap.org/#map=13/51.5061/-0.1366).

The sources for mapping access restrictions in OpenStreetMap are: [street view photos](http://blog.mapillary.com/update/2016/05/24/use-mapillary-editing-OpenStreetMap.html), local mapping drives.

### 6. Traffic signals

Traffic signals such as: `highway=traffic_signals`, `highway=stop` or `barrier=toll_booth` as well as `traffic_calming=*` are considered during routing. The `type=restriction` more commonly referred to as **turn restrictions** are traffic signage which prohibits certain turns in intersections are also a crucial part of a great `routing` engine. 

More details on mapping `traffic signals` for cars and pedestrians can be found in the [OpenStreetMap wiki](http://wiki.openstreetmap.org/wiki/Tag:highway%3Dtraffic_signals). 

Street view photos from Mapillary, local mapping drives using [OpenStreetMap tracker](http://wiki.openstreetmap.org/wiki/OpenStreetMapTracker_(Android)) can be used as sources to map traffic signals in OpenStreetMap.

![800px-led_traffic_lights](https://cloud.githubusercontent.com/assets/13744156/18049581/cc237796-6e06-11e6-8d51-b8d446b2c3dc.jpg)

*Traffic signal in a junction*


## Guidance features

## 1. Exit & destination signs

**What are exit numbers?**
   * An exit number is a number assigned to a road junction, usually an exit from a freeway. It is usually marked on the same sign as the destinations of the exit, as well as a sign in the gore.
   
  ![](https://slack-imgs.com/?c=1&url=https%3A%2F%2Fcloud.githubusercontent.com%2Fassets%2F17470597%2F15181512%2F4ff5546c-17a5-11e6-83ff-bea9cfa20493.jpg)
   
**Different tags for exit numbers:**
* `ref=*` is used when the exit has a specific number assigned to it.
* `noref=yes` is used when the exit doesn't have any official number assigned to it.

**What are destination tags?**

* Destination tags describe the content of signposts or ground writing indicating the names of the locations that a certain exit from the freeway or a highway is heading to. 
* The key `destination=*` describes where a certain exit leads to. Thus navigation systems can refer to road signs that the driver actually sees.

![24-wa_i-5_n_exit_164a__1_](https://cloud.githubusercontent.com/assets/17887418/15180428/2f96a4c4-179f-11e6-88ee-4b4e8857c441.jpg)

#### Different tags for destinations:
* `destination` tag refers to the place that the way exiting from the freeway leads to.
* `destination:ref` is the reference of the roads directly ahead. 
* `destination:ref:to` is to specify the reference of a major highway ahead.
* `destination:street` refers to the main street the way exiting from the freeway leads to. 

An example of a place with good exit/destination coverage in OpenStreetMap is [Ottawa, Canada](http://www.openstreetmap.org/#map=11/45.4283/-75.8331). These overpass queries for [destination](http://overpass-turbo.eu/s/i61) and [exit numbers](http://overpass-turbo.eu/s/i78) can be used to extract exit/destination data from OpenStreetMap.

The [detailed guide](/mapping/mapping-to-improve-navigation/mapping-guide-for-adding-exit-and-destination/) on adding exit and destination numbers can be followed for adding exit/destinations. This guide is specifically focused on North America (US/Canada) for now.

### 2. Turn Lanes

As discussed in `Modeling Roads for navigation` page, there are two types of roads: unidirectional and bidirectional. `lanes=*` tag is used to count the number of lanes in both these type of roads.

To set number of [lanes](http://wiki.openstreetmap.org/wiki/Key:lanes) for roads which carry traffic in both directions use [`:backward` and `:forward` suffixes](http://wiki.openstreetmap.org/wiki/Forward_%26_backward,_left_%26_right#Forward_and_backward)

`Forward` means the direction in which the way is drawn in OpenStreetMap, while `backward` means the opposite direction.

``` xml
Example:
  highway=tertiary
  lanes=5
  lanes:forward=3   
  lanes:backward=2
```

In the image below, the number of lanes is two - `lanes=2`. Orange line is the center line of bidirectional way which is the main way direction. When the extra lane starts in a bidirectional way, that segment is tagged as `lanes=3`+`lanes:forward=2`+`lanes:backward=1`. Optionally, we specify [placement](https://wiki.openstreetmap.org/wiki/Proposed_features/placement) of the lanes relative to the way.

 ![residential_road_2](https://cloud.githubusercontent.com/assets/369696/13228435/ae570094-d9a4-11e5-9f3c-4737112a7932.png)

The below image have two tagging variants:
  1. `lanes=2` - 1 lane for each direction, or
  2. `lanes=3` - denote middle lane for left turn as (:point_left: _this is [discussed](http://wiki.openstreetmap.org/wiki/Proposed_features/Suffix_both_ways)_)

  ```
highway=residential
lanes=3
lanes:forward=1
lanes:backward=1
lanes:both_ways=1
turn:lanes:both_ways=left
  ```
  ![residential_road_3](https://cloud.githubusercontent.com/assets/369696/13229045/ab01d6f0-d9a7-11e5-8d8a-1fe5518c84a5.png)

 IN case the number of lanes is even but numbers of lanes for each direction not equal. :point_down:

  ![trunk_link](https://cloud.githubusercontent.com/assets/369696/13229897/b09a811c-d9ab-11e5-935e-25906c94585b.png)

[Turn lanes](http://wiki.openstreetmap.org/wiki/Key:turn#Turning_indications_per_lane) have an influence on the path finding and are one of the most vital components for proper guidance. Choosing the correct turn lane can have a big influence in navigation. Oftentimes, they only help to illustrate a turn better but other times, they are vitally important. In guidance, the aim is to provide a set of instructions, like keep right or keep left by describing the optimum route found by the routing algorithm to a driver.

![screen shot 2016-03-08 at 7 51 36 pm](https://cloud.githubusercontent.com/assets/8401827/13604319/236e84dc-e568-11e5-850a-cf398719db11.png)

*How a driver views turn lanes from the car. For a single direction way, it will be tagged `turn:lanes=left|left;through` while for a bidirectional way it will be tagged `turn:lanes:forward/turn:lanes:backward=left|left|through` depending upon OpenStreetMap way direction*

There are three turn lanes tags in OpenStreetMap:

``` xml
turn:lanes=*
turn:lanes:forward=*
turn:lanes:backward=*
```

Turn lanes can be mapped from high-resolution satellite imagery sources and street level photos. An example of the high density turn lane area in OpenStreetMap is [Los Angeles](https://www.openstreetmap.org/#map=11/33.9883/-118.3303). This [overpass query](http://overpass-turbo.eu/s/ipk) can be used to extract turn lanes data from OpenStreetMap

[Mapping guide for mapping turn lanes](/mapping/mapping-to-improve-navigation/mapping-guide-for-adding-turn-lanes-from-imagery/): This is a detailed mapping guide for adding turn lanes in general with specific focus on the US. It will be updated as more and more countries are mapped for lane information in OpenStreetMap.


--

The other important attributes in besides `turn:lanes` and `exit/destination` data required to provide the better guidance using OpenStreetMap data are:
``` xml
lanes=*
name=*
ref=*
relation:route
```

Information for [lanes](http://wiki.openstreetmap.org/wiki/Key:lanes), [highway names](http://wiki.openstreetmap.org/wiki/Highways), [highway ref](http://wiki.openstreetmap.org/wiki/Key:ref) and [relation:route](http://wiki.openstreetmap.org/wiki/Relation:route) can be found in their respective OpenStreetMap  wikis.