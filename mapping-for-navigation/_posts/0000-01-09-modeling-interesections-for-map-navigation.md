---
title: Modeling Intersections for Map Navigation
---

Capturing the various cases of Intersection modelling in OSM and the best practices to follow. The aim of this document is not go into the technicalities of traffic flow in a junction but rather to give a mapper clear cut instructions on how to model different intersections in OSM. Aiming to keep this document simple and easy to follow.

### Case 1


When a transitioning dual carriageway intersects a bi-directional way. It has four ways in which the intersection can be designed :point_down:

![1(a)](https://user-images.githubusercontent.com/13744156/34767764-f09db5c2-f61e-11e7-8720-dc920acbb458.png)
*1(a)*

![1(b)](https://user-images.githubusercontent.com/13744156/34767776-fbc70e80-f61e-11e7-8296-9d1a37d57548.png)
*1(b)*

![1(c)](https://user-images.githubusercontent.com/13744156/34767825-1b2d1c42-f61f-11e7-8628-4ddb673fcc28.png)
*1(c)*

So in case a dual carriageway intersects a bi-directional way to form a 4 way junction,1(b) variant is preferential for OSRM as it introduces less single-node intersections and for 1(d) additional turn restrictions are required to remove ambiguity in U-turns.

For a transitioning divided way (dual carriageway) intersecting a single carriageway , this is the recommended model :point_down:

![image](https://user-images.githubusercontent.com/13744156/34767973-8b83f65a-f61f-11e7-8bec-f2f7e811634b.png)

Note: 

- Keep the geometry smooth. Don’t follow the centreline too rigorously as it might cause sharp turns


### Case 2

When a transitioning dual carriageway intersects another dual carriageway, there are two methods to draw that intersection:

#### Method 1:

Collapse the dual carriageway after/before the intersection (Triangle after/before the intersection)


![image](https://user-images.githubusercontent.com/13744156/34769147-048046fa-f623-11e7-889a-4977cf64d867.png)
*2(a)*

Triangle before the intersection:

![image](https://user-images.githubusercontent.com/13744156/34770557-79afb51a-f627-11e7-820e-ceccc5ebe4c7.png)
*2(b)*

**Pros**: Helps in lane guidance as this parses the turn lane information much more accurately in OSRM.

**Cons**: The downside of this modeling is that it results in unintuitive rendering. 


#### Method 2: Triangle inside the intersection


![image](https://user-images.githubusercontent.com/13744156/34770758-1205e488-f628-11e7-8cdd-14f372fa64bc.png)
*2(c)*


**2(c)** is the best approach from the cartography standpoint. 2(a) and 2(b) is mapping for navigation like leads to bad rendering.


### Case 3: When a dual carriageway intersects a bi-directional road

#### Bow Tie Intersections/Sausage roads:

In terms of these intersections, Waze recommends following the bow tie method

![image](https://user-images.githubusercontent.com/13744156/34770951-d1db8876-f628-11e7-89f1-80308d36c53d.png)
*3(a)*

Pros:

- Allows greater control over u turns and left turns

Cons:

- Awkward appearance which causes the map to look bad
- The angles will cause the routing engine to ask drivers to take `slight right` or `slight left` if they are not carefull constructed

**OR**

A divided road intersecting a 2-way road. A dual carriageway intersecting a bi-directional road can also be modelled this way :point_down:

![image](https://user-images.githubusercontent.com/13744156/34771066-40c4f6f0-f629-11e7-8692-c3582c86a9c5.png)
*3(b)*


- Simplicity dictates that the mapper follows the **3(b)** form of intersection modelling.
- Again there should not be any sausage road (braided street) type collapses in these cases. If you come across any, change it to this simpler intersection :point_up:

### Case 4: When two dual carriageways intersect each other: A divided road intersecting a divided road


![image](https://user-images.githubusercontent.com/13744156/34771167-a05941de-f629-11e7-9a36-75f58fb8e124.png)
*4(a)*

Make sure to change any sausage style collapses to a simple intersection type :point_up: 

Wrong :point_down:

![image](https://user-images.githubusercontent.com/13744156/34771198-c12430cc-f629-11e7-8470-05e7fb47574e.png)
*4(b) In these cases of "suasage" type collapses, make sure the intersection is remodelled back to 4(a)*

### Examples of sausage type intersections and how to handle them

#### Example 1

 Wrong :point_down:

 ![image](https://user-images.githubusercontent.com/13744156/34771394-7cd72efa-f62a-11e7-8576-3da6c665ccf8.png)

 Correct :point_down:

![image](https://user-images.githubusercontent.com/13744156/34771425-92cd333a-f62a-11e7-87f3-42866ac420c5.png)

#### Example 2 

Wrong :point_down:


![image](https://user-images.githubusercontent.com/13744156/34771482-b5078202-f62a-11e7-8cec-afd3b7f9b1d7.png)

Correct :point_down: 


![image](https://user-images.githubusercontent.com/13744156/34771511-cd8a0ac0-f62a-11e7-960c-f0efd53d13b8.png)

#### Example 3 : 

Wrong :point_down: 


![image](https://user-images.githubusercontent.com/13744156/34771584-0a40ba54-f62b-11e7-86ff-14bb785a8ca1.png)

Correct :point_down: 


![image](https://user-images.githubusercontent.com/13744156/34771610-20ab4bec-f62b-11e7-928d-2fb2aa858841.png)

#### Example 4

Wrong :point_down: 

![image](https://user-images.githubusercontent.com/13744156/34771634-3d40293a-f62b-11e7-8948-9647fcae90ea.png)

Correct :point_down:

![image](https://user-images.githubusercontent.com/13744156/34771663-5bb60dd0-f62b-11e7-9cee-51cfdd5fdc6f.png)

#### Example 5

Wrong :point_down:

![image](https://user-images.githubusercontent.com/13744156/34771739-a89ea896-f62b-11e7-9032-03f4be3cf0ac.png)

Correct :point_down:

![image](https://user-images.githubusercontent.com/13744156/34771764-bcdd5b04-f62b-11e7-9675-d192baa63914.png)


### SPUI/Spider/ Diamond Intersections

#### 1a. Spider ( 🕷 ).
This option most accurately reflects the flows of traffic. Traffic flows directed towards each other do not overlap. To avoid adding implicit turn restrictions, crossed `motorway_links` do not have shared nodes. Only entry&exit nodes for `motorway_links` are required implicit turn restrictions. Has a lot of excessive details. A constructed route for emergency vehicles 🚒 🚑 🚓 will look a little bit weird as a zig-zag ⚡️ when the destination is on the other side of the junction.

![image](https://user-images.githubusercontent.com/13744156/34771890-21cdc0c6-f62c-11e7-866c-86ddef165dcb.png)

#### 1b Diamond ( ♦️ ). 
The same as 1a :point_up: but without accurate reflection of traffic flows. Reduces clutter on a rendered map. Something between accuracy and simplicity.

![image](https://user-images.githubusercontent.com/13744156/34771980-748f30ce-f62c-11e7-9c11-bbde7a30b42f.png)

#### 2. SPI ( 🔘 )- single point intersection. 

Simplest junction representation. Segments of motorway_link inside of the intersection are tagged with oneway=no tag. This approach helps to reduce numbers of ways in twice. By sacrificing the exact representation of traffic flows, we still have enough data to accurately construct the route and we have an uncluttered map for eyeballing. 🗺 👀


![image](https://user-images.githubusercontent.com/13744156/34772017-a23d9da8-f62c-11e7-9cec-78eca49c312d.png)

To decrease the numbers of implicit turn restrictions suggested to use only_* type of restriction with way-members with role via. All ways that are inside the lemon-colored box play role via in all turn restriction. There is need to tag only 6 only_* TRs to describe all allowed maneuvres (by the number of possible exits from the junction)

![image](https://user-images.githubusercontent.com/13744156/34772040-bced0e7c-f62c-11e7-8be0-2a072580ba50.png)

### Continuous-flow intersection (CFI)


![image](https://user-images.githubusercontent.com/13744156/34772077-dbfb220e-f62c-11e7-8de7-3d263abf3c26.png)


### Diverging diamond interchange (DDI)


![image](https://user-images.githubusercontent.com/13744156/34772120-f8338b96-f62c-11e7-81ed-44f01c43e855.png)


### How to split roads with relations while remodelling intersections

Reference: 
https://www.openstreetmap.org/user/Jothirnadh/diary/41613

Presently, iD by design does not allow disconnect and split option specially when a stretch of road has route relations. For this scenario’s use the diary above 👆  to know how to split roads with relations and for now, use JOSM as splitting roads and relations is JOSM is much more convenient right now.










 
