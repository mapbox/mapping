---
title: Adding exit and destination signs
---

# Exit number and destination mapping

Exit numbers and destinations are used as a part of guidance in routing engine. They help the driver in navigation guidance through on-ramps and off-ramps while routing on major roads.

![image](https://user-images.githubusercontent.com/8401827/28310471-359dfff4-6bca-11e7-85a9-7f2a4942c9b6.png)

## What are exit numbers?

An exit number is a unique alpha-numeric identity assigned to a road junction, usually an exit from where a freeway starts. It is usually marked on the same sign as the destinations of the exit, as well as a sign in the [gore](https://en.wikipedia.org/wiki/Gore_(road)). OpenStreetMap based guidance systems such as OSRM can use exit numbers as a way to guide drivers to take the right exit during navigation.

![image](https://d2mxuefqeaa7sj.cloudfront.net/s_9E15E3C9473E7DCE0777B5A1E9261280CC984DAB5FF2C792D39F0C17D7C1920E_1499941784379_I-4_east_exits_111A-B.jpg)


### Different tags for mapping exit numbers:

- `highway=motorway_junction` → is used in representing the specific node as a junction where the exiting way starts
- `ref=*` → is used when the exit has a specific number assigned to it
  - Also tag `junction:ref=*` on the connecting `highway=motorway_link` way
- `noref=yes` → is used when the exit does not have any official number assigned to it

**In California**, exit number signage is inconsistent. The state is gradually adding exit numbers. In the meantime, it’s common for a freeway exit to lack any exit number sign, even if Wikipedia provides an exit number. If there’s already a `ref` tag on the `highway=motorway_junction` node but no exit number sign appears in Mapillary imagery from within the past year, replace the `ref` tag with `unsigned_ref`. Sometimes there’s no exit number at the exit, but an advance guide sign (the one that says “½ mile” or “1 mile”) does display an exit number. In that case, leave the exit number in `ref`, because a driver would be able to use that information while navigating.

## What are destinations?

Destination tags describe the content of road signposts or ground information indicating the names of the locations that a certain exit from the freeway or a highway is heading to, or that a certain entrance to the freeway is heading to. The `destination` tag refers to the place the entering/exiting way is leading to. Thus navigation systems can represent correct guidance with the respect to road signs that the driver actually sees when driving. The destination references are also  alpha-numeric identities which changes from state to state in US. For reference check [the shield dictionary](https://wiki.openstreetmap.org/wiki/United_States_roads_tagging/Routes) to understand how highway shields are represented in different states of US. If you can’t figure out how to map a particular highway shield, look at the `ref` tags on the way that the `motorway_link` way leads to.

![image](https://d2mxuefqeaa7sj.cloudfront.net/s_9E15E3C9473E7DCE0777B5A1E9261280CC984DAB5FF2C792D39F0C17D7C1920E_1499946385542_I-4_east_exits_111A-B+1.jpg)


### Different tags for mapping destination signs:

- `destination=*` → is referring to the place/street that the ramp (link way) leads to.
- `destination:ref=*` → is the route number of the roads that the ramp leads to
- `destination:ref:to=*` → is the route number of the roads that the ramp **indirectly** leads to
- `destination:street=*` → is an alternative name for the numbered route – **only use in Florida, Kentucky, and Maryland**
- `destination:lanes=*`, `destination:ref:lanes`, etc. → Often the destinations of a road differ from lane to lane. To specify those for every lane, `destination:lanes=*` is used.

### Cardinal direction:
Every dual carriage way has two oneways roads having traffic in opposite directions. Considering a dual carriage way as a destination, it is important to provide the cardinal direction of the way to which the route is navigating the user. To get this information we need to add cardinal directions to the `destination:ref` tags of the exit/entrance ways.

<img width="632" alt="screen shot 2017-09-13 at 10 55 21 am" src="https://user-images.githubusercontent.com/8401827/30361068-97d03028-9872-11e7-9f89-f62439cb9b27.png"> 

The [cardinal direction](https://en.wikipedia.org/wiki/Cardinal_direction) of the road is the direction in which a road is linearly-referenced in increasing order. It is an important feature in navigation and helps in guiding the user in write direction.

## How to map exit numbers and destinations?

Ground based imagery or a field survey is the only way one can verify freeway junctions and road signs. For imagery, Mapillary imagery can be used as a reference to verify and add exit numbers and destinations to mapped highways on OpenStreetMap. Sometimes [the pavement is marked with a route shield in each lane](http://www.knoxnews.com/story/news/traffic/2016/10/27/knoxville-road-shields-guide--40-drivers/92823646/), indicating the destination ref, in which case you can also use aerial imagery.

### Node:
Exit numbers are mapped as nodes at the junction's on highways where freeways have exit ways.

| S.No | Mapillary Image | JOSM representation | Tags
---- | ---- | ---- | ----
1| <img width="592" alt="screen shot 2017-07-18 at 11 23 16 am" src="https://user-images.githubusercontent.com/8401827/28302523-8b113ea2-6bab-11e7-9a01-6c61a5db1f60.png"> | <img width="534" alt="screen shot 2017-07-18 at 11 24 50 am" src="https://user-images.githubusercontent.com/8401827/28302567-c1062d1a-6bab-11e7-809e-5f6e4f245b44.png"> | {::nomarkdown}<ul><li><code>highway=motorway_junction</code></li><li><code>noref=yes</code></li></ul>{:/}
2| <img width="613" alt="screen shot 2017-07-18 at 11 48 11 am" src="https://user-images.githubusercontent.com/8401827/28303127-04873aae-6baf-11e7-843c-2f00c455c50d.png"> | <img width="468" alt="screen shot 2017-07-18 at 11 52 15 am" src="https://user-images.githubusercontent.com/8401827/28303220-97fb81aa-6baf-11e7-8f3a-77929984746e.png"> | {::nomarkdown}<ul><li><code>highway=motorway_junction</code></li><li><code>ref=414A</code></li></ul>{:/}
3| <img src="https://wiki.openstreetmap.org/w/images/2/2c/I-83_N_exit_51A-B.jpg" width="300" alt=""> | <img width="300" alt="" src="https://user-images.githubusercontent.com/1231218/28347318-3a747cda-6beb-11e7-8aa9-cf7ffa1e8d6b.png"> | {::nomarkdown}<ul><li><code>highway=motorway_junction</code></li><li><code>ref=51A;51B</code></li><li><code>ref:left=51A</code></li><li><code>ref:right=51B</code></li></ul>{:/}
4| <img width="411" alt="screen shot 2017-07-20 at 12 28 02 pm" src="https://user-images.githubusercontent.com/8401827/28404474-1d175cea-6d47-11e7-88be-ae06eb21af9e.png"> | <img width="279" alt="screen shot 2017-07-20 at 12 28 49 pm" src="https://user-images.githubusercontent.com/8401827/28404498-389d7224-6d47-11e7-9d24-b0f920ec3efe.png"> | {::nomarkdown}<ul><li><code>highway=motorway_junction</code></li><li><code>ref=56</code></li></ul>{:/} Note: Some times exit numbers are placed separately
5| <img width="800" alt="screen shot 2017-07-31 at 1 42 19 pm" src="https://user-images.githubusercontent.com/8401827/28768656-1d649778-75f6-11e7-9631-4cab102fefec.png"> |<img width="294" alt="screen shot 2017-07-31 at 5 18 22 pm" src="https://user-images.githubusercontent.com/8401827/28776451-51729e84-7614-11e7-929d-6e109ff52852.png">| {::nomarkdown}<ul><li><code>highway=motorway_junction</code></li><li><code>ref=236</code></li><li><code>name=Gettysburg Pike<code></li></ul>{:/}

### Way:
Destinations are mapped on the `highway=motorway_link` ways that start from the `highway=motorway_junction` node and connect with another road. These are called off-ramps or freeway exits. Destinations are also mapped on the `highway=motorway_link` ways that start from another road and end on the `highway=motorway` way (without a `highway=motorway_junction` node). These are called on-ramps or freeway entrances.

S.No| Mapillary Image | JOSM representation | OSM tags
---- | ---- | ---- | ----
1| <img width="613" alt="screen shot 2017-07-18 at 11 48 11 am" src="https://user-images.githubusercontent.com/8401827/28303127-04873aae-6baf-11e7-843c-2f00c455c50d.png"> | <img width="545" alt="screen shot 2017-07-18 at 11 49 17 am" src="https://user-images.githubusercontent.com/8401827/28303151-2d0189d0-6baf-11e7-94fe-787240e60159.png"> | {::nomarkdown}<ul><li><code>destination=Hillsdale Boulevard</code></li><li><code>junction:ref=414A</code></li></ul>{:/}
2| <img width="358" alt="screen shot 2017-07-18 at 12 25 22 pm" src="https://user-images.githubusercontent.com/8401827/28304206-3a4c352c-6bb4-11e7-82bd-f3bcbc7df1c8.png"> | <img width="460" alt="screen shot 2017-07-18 at 12 27 49 pm" src="https://user-images.githubusercontent.com/8401827/28304288-8e85011e-6bb4-11e7-8cce-a0cc5cd3e963.png"> | {::nomarkdown}<ul><li><code>destination=Woodward Avenue;Main Street;Detroit Zoo</code></li><li><code>destination:ref=M 1</code></li><li><code>junction:ref=16</code></li></ul>{:/} Note: `M` [represents](https://wiki.openstreetmap.org/wiki/United_States_roads_tagging/Routes#Michigan) that highway belongs to the state trunkline highways of Michigan state
3| <img width="133" alt="screen shot 2017-07-18 at 1 02 35 pm" src="https://user-images.githubusercontent.com/8401827/28305478-68f49838-6bb9-11e7-8277-95c99396fa65.png"> | <img width="425" alt="screen shot 2017-07-18 at 1 04 13 pm" src="https://user-images.githubusercontent.com/8401827/28305545-a0bdfe8a-6bb9-11e7-9e1f-a4be3a38b580.png"> | {::nomarkdown}<ul><li><code>destination:ref=I 71 North;US 50 East</code></li><li><code>destination:ref:to=I 471;US 52 East</code></li><li><code>junction:ref=1B</code></li></ul>{:/} Note: `I` [represents](https://wiki.openstreetmap.org/wiki/United_States_roads_tagging/Routes#Nationwide) Interstate highways and `US` represent U.S. Routes. North and East represent the [cardinal direction](https://wiki.openstreetmap.org/wiki/Highway_Directions_In_The_United_States) of the way. Only enter the cardinal direction that is used on the sign; do not guess based on the physical direction of the road.
4| <img width="172" alt="screen shot 2017-07-18 at 2 16 52 pm" src="https://user-images.githubusercontent.com/8401827/28308433-cec588ca-6bc3-11e7-8c5e-9b94e62e9244.png"> | <img width="441" alt="screen shot 2017-07-18 at 2 18 59 pm" src="https://user-images.githubusercontent.com/8401827/28308527-15a2906c-6bc4-11e7-991c-6881e7375526.png"> | {::nomarkdown}<ul><li><code>destination:ref=KY 1072</code></li><li><code>destination:street=Kyles Lane</code></li><li><code>destination=Fort Wright;Park Hills</code></li><li><code>junction:ref=189</code></li></ul>{:/} Note: `KY` comes from the state of Kentucky, where [oval shields represents state routes](https://wiki.openstreetmap.org/wiki/United_States_roads_tagging/Routes#Kentucky). The small letter font represents `destination:street` and are only available in limited US states
5| [![dearborn2](https://user-images.githubusercontent.com/1231218/27760810-277b9be8-5e05-11e7-8f14-6568f83b2e5c.jpg)](https://www.mapillary.com/map/im/mUDqicHyq4in0_OMpYYdkw) | <img width="172" alt="iD" src="https://user-images.githubusercontent.com/1231218/27760241-724e6ed8-5df7-11e7-974d-6b96aa70360f.png"> | {::nomarkdown}<ul><li><code>destination=Dearborn Street;James Street;Madison Street;Spokane</code></li><li><code>destination:lanes=Dearborn Street;James Street;Madison Street|Spokane</code></li><li><code>destination:ref=I 90 East</code></li><li><code>destination:ref:lanes=|I 90 East</code></li><li><code>junction:ref=164A</code></li></ul>{:/}
6| <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Idaho_40_western_terminus.jpg/320px-Idaho_40_western_terminus.jpg" width="172"> | <img width="703" alt="" src="https://user-images.githubusercontent.com/1231218/28347182-66f01f86-6bea-11e7-944d-5e7999ab0277.png"> | {::nomarkdown}<ul><li><code>destination=Pocatello</code></li><li><code>destination:ref=I 15 North</code></li></ul>{:/} Note: Make sure to split the `highway=motorway_link` way at the intersection, so that the on-ramp and off-ramp are represented by separate ways.
7| <img width="300" alt="" src="https://user-images.githubusercontent.com/1231218/28347522-793092d2-6bec-11e7-8c9e-95e1e3f1f32d.png"> | <img width="300" src="https://user-images.githubusercontent.com/1231218/28347552-a253fda2-6bec-11e7-97bb-5bb386d862fc.png"> | {::nomarkdown}<ul><li><code>destination:ref=I 275 West</code></li><li><code>destination:ref:to=I 74</code></li><li><code>destination=Indianapolis</code></li></ul>{:/}

**Note:**
* Cardinal direction can be found on the sigh boards but this is not the same in all cases. In case, the cardinal direction is missing on the sign board do look into the route relation of the connecting motorway of the exit/entrance way and get the cardinal direction.
* If you come across missing street level imagery, get the `destination` and `destination:ref` information from the connecting motorway of the exit/entrance way along with the cardinal direction of the way.

### References:
* Shield marks of state routes changes from state to state. Refer to the [shield dictionary](https://wiki.openstreetmap.org/wiki/United_States_roads_tagging/Routes).
* Use [checkautopista2](https://k1wiosm.github.io/checkautopista2/) for identifying missing junctions

### Short forms of common words on sign boards:

|  **Short-form** | **Full-form** |
|  ------ | ------ |
|  Rd | Road |
|  St | Street |
|  Dr | Drive |
|  Br | Bridge |
|  Ave | Avenue |
|  Blvd | Boulevard |
| Pt | Point |
| Pkwy | Parkway|
| Cr | Creek |
| Mtn | Mountain |
| Mt | Mount |
| Jct | Junction |
| Ft | Fort |
| AFB | Air Force Base|
| JR |Junior| 
| MLK | Martin Luther King |
| Co | County |
