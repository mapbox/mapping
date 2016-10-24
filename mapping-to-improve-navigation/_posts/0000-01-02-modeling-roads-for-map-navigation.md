---
title: Modeling Roads for Map Navigation
---

A navigation map is influenced by several road characteristics, such as the turn restrictions, improper way of road tracing and road classification. The most important ones among those are:

### Road geometry
Roads are the main features that are used for rendering a route in all navigational applications. Correct road mapping leads not only to the well-looking map but also to better  navigation experience. With the change in the shape of the traced road, the distance covered will be altered which affects the route. The common approach for road mapping is to trace roads following the center-line from satellite imagery.

![road_with_two_lanes](https://cloud.githubusercontent.com/assets/369696/13230189/1bc4b308-d9ad-11e5-88b7-f85fcd290926.png)

*Roads on satellite imagery*

### Road connectivity / topology:
If you want to travel from point A to point E as shown in the below image, you can either travel from `A to B, B to C and then C to E` or `A to B, B to D and then D to E`.

![screen shot 2016-08-30 at 6 51 58 pm](https://cloud.githubusercontent.com/assets/8401827/18090553/e4e4eabc-6ee2-11e6-9908-8c9064c833af.png)

But, if you have a restriction to enter D from A, the only possible route will be `A to B, B to C and then C to E`. This is where connectivity plays a major role in deciding the final route.

### Road attributes / properties:
If `A to C` is a primary road which is crossing through a service road `B to D` and you want to travel from `A to E`, the navigation map comes up with the route traveling from `A to B, B to C and then C to E` and completely avoids `A to B, B to D and then D to E` because the travel on Primary road is much efficient than a narrow service road. This is how the attributes / properties with which the road is assigned with plays a crucial role in deciding the final route.
 
![screen shot 2016-08-30 at 8 30 14 pm](https://cloud.githubusercontent.com/assets/8401827/18094299/9d9f5454-6ef0-11e6-85de-4f74a43d5657.png)

## OpenStreetMap data model:

The OpenStreetMap data model consists of nodes, ways, relations, and tags. A detailed description of the data model can be found in the [The OpenStreetMap Data Model](https://github.com/mapbox/mapping/wiki/The%20OpenStreetMap%20Data%20Model) guide.

Navigation data is similarly a combination of nodes, ways, relations, and tags. Some of the examples are illustrated below:

### Examples

* Nodes: 
 - Exit numbers: 

![screen shot 2016-08-30 at 5 20 44 pm](https://cloud.githubusercontent.com/assets/13744156/18088263/517c2cf0-6ed7-11e6-8485-2d2761c42e84.png)

* Ways: 
  - Highway=* 

![screen shot 2016-08-30 at 6 17 55 pm](https://cloud.githubusercontent.com/assets/13744156/18089616/6d060d0e-6ede-11e6-829d-47fc464a53a1.png)

*An way tagged with highway=secondary tag*

* Relations:
 - Turn restrictions are a combination of nodes, ways, tags, and relations. It consists of `from way` `via node` and `to way`, tied together by a `restriction=*` relation.
 

![tr_relation](https://cloud.githubusercontent.com/assets/13744156/18089141/0c296c9e-6edc-11e6-916f-716e41c9f685.gif)

* Tags: All the navigation features are differentiated and defined based on how they are tagged. Tags can be on any element: on nodes, ways, and relations.

Examples are: `destination=*`, `ref=*`, `turn:lanes=*`, `restriction=*`, etc.

## Tracing roads

Before tracing, we need to inspect the start and endpoints of the road segment. We need to identify the road direction, general numbers of lanes and the places where there are extra lanes. Based on this we choose our strategy for tracing.

We are not able to draw a road on its center line,  especially if roads join/fork or the number of lanes change. Imagine two roads which join: how would you draw the OSM-way around the point where the roads join?

  ![center_line](https://wiki.openstreetmap.org/w/images/4/47/Lane_Placement_2.png)

  _Center line tracing_

  ![main_direction](https://wiki.openstreetmap.org/w/images/e/e4/Lane_Placement_3.png)

  _Tracing based on road direction_
  
### Tracing roads with more than two lanes

There are two cases:
- Dual carriageway roads

  ![dual_carriageway_road](https://cloud.githubusercontent.com/assets/369696/13230427/fe21579c-d9ad-11e5-86ba-38107d469c54.png)

These are bidirectional roads which have a physical separation between the lanes in both the directions. Both the ways will be counted for lanes and will be tagged with `lanes=*`. Dual carriageways are always `oneway` roads.

![motorway](https://cloud.githubusercontent.com/assets/369696/13231932/5b417e00-d9b5-11e5-854e-dbed2d209d7c.png)
*Placement of nodes of the lines in each direction, opposite to each other*

- Roads which carry traffic in both directions (Bidirectional roads)

  ![bidirectional_road](https://cloud.githubusercontent.com/assets/369696/13230341/9f9db6c0-d9ad-11e5-9f5d-53dd80b40f67.png)
*Road carrying traffic in both directions*

