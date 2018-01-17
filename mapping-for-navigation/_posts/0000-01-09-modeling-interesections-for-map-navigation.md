---
title: Modeling Intersections for Map Navigation
---

Capturing the various cases of Intersection modelling in OSM and the best practices to follow. The aim of this document is not go into the technicalities of traffic flow in a junction but rather to give a mapper clear cut instructions on how to model different intersections in OSM. Aiming to keep this document simple and easy to follow.

### 1. Intersection of two bi-directional ways

| ✅ **That's right**  | ❌ **That's not right** |
|---|---|
| [![][efa2ef0b]][efa2ef0b] | [![][ba05460f]][ba05460f] |
| (_[fullsize][efa2ef0b]_ \| _[wireframe][dbad8b6b] view_) | (_[fullsize][ba05460f]_ \| _[wireframe][a8c293d9] view_)  |

  [efa2ef0b]: ../../images/intersection-modeling/simple_intersection.png "Simple intersection (fullsize view)"
  [ba05460f]: ../../images/intersection-modeling/simple_intersection_error.png "Incorrect drawing of the simple intersection (fullsize view)"
  [dbad8b6b]: ../../images/intersection-modeling/simple_intersection_wireframe.png "Simple intersection (wireframe view)"
  [a8c293d9]: ../../images/intersection-modeling/simple_intersection_wireframe_error.png "Incorrect drawing of the simple intersection (wireframe view)"

-   This place ☝️ [on the map](https://www.openstreetmap.org/edit#map=20.00/37.75213/-122.48172) 🗺

Each way is a bidirectional road, the movement along which is possible in two directions simultaneously. The point at which the ways intersect denotes the intersection. Crossing ways without a common point make it impossible to build a route between the points that are at the ends of these ways.

### 1a. Intersection and safety islands

| ✅ **That's right**  | ❌ **That's not right** |
|---|---|
| [![][76c562c6]][76c562c6] | [![][787f1fd3]][787f1fd3] |
| (_[fullsize][76c562c6]_ \| _[wireframe][b739583e] view_) | (_[fullsize][787f1fd3]_ \| _[wireframe][e0cba39d] view_) |

  [76c562c6]: ../../images/intersection-modeling/simple_intersection_with_the_safety_islands.png "Simple intersection with the safety islands (fullsize view)"
  [787f1fd3]: ../../images/intersection-modeling/simple_intersection_with_the_safety_islands_error.png "Incorrect drawing of the simple intersection with the safety islands (fullsize view)"
  [b739583e]: ../../images/intersection-modeling/simple_intersection_with_the_safety_islands_wireframe.png "Simple intersection with the safety islands (wireframe view)"
  [e0cba39d]: ../../images/intersection-modeling/simple_intersection_with_the_safety_islands_wireframe_error.png "Incorrect drawing of the simple intersection with the safety islands (wireframe view)"

-   This place ☝️ [on the map](https://www.openstreetmap.org/edit#map=20.00/37.75405/-122.48078) 🗺

In the presence of safety islands, located just before the crossroads, there is no need to divide the road onto dual carriageway. Set the nodes for safety islands and tag them as **`traffic_calming=island`**.

### 2. Intersection of a bidirectional and dual carriageway roads.

| ✅ **That's right**  | ❌ **That's not right** |
|---|---|
| [![][ac1e486c]][ac1e486c] | [![][14300d5a]][14300d5a] |
| (_[fullsize][ac1e486c]_ \| _[wireframe][7064e664] view_) | (_[fullsize][14300d5a]_ \| _[wireframe][947d67cf] view_) |

  [ac1e486c]: ../../images/intersection-modeling/bi-dir_dual_carriageway_intersection.png "Intersection of a bidirectional and dual carriageway roads (fullsize view)"
  [7064e664]: ../../images/intersection-modeling/bi-dir_dual_carriageway_intersection_wireframe.png "Intersection of a bidirectional and dual carriageway roads (wireframe view)"
  [14300d5a]: ../../images/intersection-modeling/bi-dir_dual_carriageway_intersection_error.png "Incorrect drawing of the intersection of a bidirectional and dual carriageway roads (fullsize view)"
  [947d67cf]: ../../images/intersection-modeling/bi-dir_dual_carriageway_intersection_wireframe_error.png "Incorrect drawing of the intersection of a bidirectional and dual carriageway roads (wireframe view)"

-   This place ☝️ [on the map](https://www.openstreetmap.org/edit#map=20/37.75984/-122.47683) 🗺

No need to squeeze everything into one node bow-tie intersection to have sausage roads.

Some GIS provides bow-tie or sausage roads approach for mapping complex intersections due to system limitations or historical reasons. We don't encourage you to follow this approach. OSRM routing enging supports turn restrictions which have a way as `via`-member of turn restrictions.

### 3. Intersection of dual carriageway roads.

| ✅ **That's right**  | ❌ **That's not right** |
|---|---|
| [![][7b8dcb18]][7b8dcb18] | [![][0c2aea64]][0c2aea64] [![][07cf7615]][07cf7615] |
| (_[fullsize][7b8dcb18]_ \| _[wireframe][e14b208e] view_) | (_1st example [fullsize][0c2aea64]_ \| _[wireframe][992e769f] view_)<br/>(_2nd example [fullsize][07cf7615]_ \| _[wireframe][9c7914ff] view_)  |

  [7b8dcb18]: ../../images/intersection-modeling/2x_dual_carriageway_intersection.png "Intersection of dual carriageway roads (fullsize view)"
  [0c2aea64]: ../../images/intersection-modeling/2x_dual_carriageway_intersection_error.png "1st case of incorrect drawing of the intersection of dual carriageway roads (fullsize view)"
  [07cf7615]: ../../images/intersection-modeling/2x_dual_carriageway_intersection_error_1.png "2nd case of incorrect drawing of the intersection of dual carriageway roads (fullsize view)"
  [e14b208e]: ../../images/intersection-modeling/2x_dual_carriageway_intersection_wireframe.png "Intersection of dual carriageway roads (wireframe view)"
  [992e769f]: ../../images/intersection-modeling/2x_dual_carriageway_intersection_wireframe_error.png "1st case of incorrect drawing of the intersection of dual carriageway roads (wireframe view)"
  [9c7914ff]: ../../images/intersection-modeling/2x_dual_carriageway_intersection_wireframe_error_1.png "2nd case of incorrect drawing of the intersection of dual carriageway roads (wireframe view)"

-   This place ☝️ [on the map](https://www.openstreetmap.org/edit#map=19/37.73463/-122.47508) 🗺

Make sure to change any sausage style collapses to a simple intersection type

### 4. 3-way T-shape intersection (dual carriageway roads)

| ✅ **That's right**  | ❌ **That's not right** |
|---|---|
| [![][59eb0e4e]][59eb0e4e] | [![][a2e66349]][a2e66349] |
| (_[fullsize][59eb0e4e]_ \| _[wireframe][343cf126] view_) | (_[fullsize][a2e66349]_ \| _[wireframe][7b6d1a81] view_) |

  [59eb0e4e]: ../../images/intersection-modeling/3way_dual_carriageway_intersection.png "Three way T-shape dual carriageway intersection (fullsize view)"
  [a2e66349]: ../../images/intersection-modeling/3way_dual_carriageway_intersection_error.png "Incorrect drawing of the three way T-shape dual carriageway intersection (fullsize view)"
  [343cf126]: ../../images/intersection-modeling/3way_dual_carriageway_intersection_wireframe.png "Three way T-shape dual carriageway intersection (wireframe view)"
  [7b6d1a81]: ../../images/intersection-modeling/3way_dual_carriageway_intersection_wireframe_error.png "Incorrect drawing of the three way T-shape dual carriageway intersection (wireframe view)"

-   This place ☝️ [on the map](https://www.openstreetmap.org/edit#map=19/33.95362/-118.16388) 🗺

This should be mapped as two parallel dual carriageway roads making a square junction.

### 5. 3-way T-shape intersection (dual carriageway and bi-directional roads)

| ✅ **That's right**  | ❌ **That's not right** |
|---|---|
| [![][371b1405]][371b1405] | [![][fd18165a]][fd18165a] |
| (_[fullsize][371b1405]_ \| _[wireframe][1f05b9a7] view_) | (_[fullsize][fd18165a]_ \| _[wireframe][595e07f7] view_) |

  [371b1405]: ../../images/intersection-modeling/3way_bidir_and_dual_carriageway_intersection.png "Three way T-shape dual carriageway and bi-directional roads intersection (fullsize view)"
  [fd18165a]: ../../images/intersection-modeling/3way_bidir_and_dual_carriageway_intersection_error.png "Incorrect drawing of the three way T-shape dual carriageway and bi-directional roads intersection (fullsize view)"
  [1f05b9a7]: ../../images/intersection-modeling/3way_bidir_and_dual_carriageway_intersection_wireframe.png "Three way T-shape dual carriageway and bi-directional roads intersection (wireframe view)"
  [595e07f7]: ../../images/intersection-modeling/3way_bidir_and_dual_carriageway_intersection_wireframe_error.png "Incorrect drawing of the three way T-shape dual carriageway and bi-directional roads intersection (wireframe view)"

-   This place ☝️ [on the map](https://www.openstreetmap.org/edit#map=19/33.95899/-118.18513) 🗺

The same as for intersection of a dual carriageway and bi-directional roads, no need to squeeze everything into one node bow-tie intersection to have sausage roads. Keep ways that represnt dual carriageway road straight. Draw internal edge of the bi-directional road between ways of dual carriageway lines on the intersection area parallel to one of the pedestrian crossing paths to form right intersection geometry.

### 6. 3-way T-shape intersection (dual carriageway and bi-directional roads single point ⤫)

| ✅ **That's right**  | ❌ **That's not right** |
|---|---|
| [![][3178c41e]][3178c41e] | [![][e20d4278]][e20d4278] |
| (_[fullsize][3178c41e]_ \| _[wireframe][b37286cb] view_) | (_[fullsize][e20d4278]_ \| _[wireframe][050b1dfe] view_)  |

  [3178c41e]: ../../images/intersection-modeling/3way_bidir_and_dual_carriageway_intersection_single_point.png "Three way T-shape dual carriageway and bi-directional roads single point intersection (fullsize view)"
  [e20d4278]: ../../images/intersection-modeling/3way_bidir_and_dual_carriageway_intersection_single_point_err.png "Incorrect drawing of the three way T-shape dual carriageway and bi-directional roads single point intersection (fullsize view)"
  [b37286cb]: ../../images/intersection-modeling/3way_bidir_and_dual_carriageway_intersection_single_point_wireframe.png "Three way T-shape dual carriageway and bi-directional roads single point intersection (wireframe view)"
  [050b1dfe]: ../../images/intersection-modeling/3way_bidir_and_dual_carriageway_intersection_single_point_wireframe_err.png "Incorrect drawing of the three way T-shape dual carriageway and bi-directional roads single point intersection (wireframe view)"

-   This place ☝️ [on the map](https://www.openstreetmap.org/edit#map=19/33.95841/-118.18493) 🗺

Place the node of the intersection on the average center. Connect all incoming ways to this node. No need to create a triangle that would require adding a bunch of implicit turn restriction relation to specify mandatory and prohibited directions of movement.
