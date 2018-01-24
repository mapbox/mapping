---
title: Intersection Modelling
---

An Intersection is point where multiple roads meet or cross each other. The traced roads should represent the traffic flow of that intersection for a navigation software to provide turn-by-turn instruction, especially in turn announcements.

![](https://upload.wikimedia.org/wikipedia/commons/7/75/Makati_intersection.jpg)
_Source Wikipedia By Mike Gonzalez [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0) via Wikimedia Commons_

Over the history of OpenStreetMap, mappers have used different approaches to modelling various types of intersections. The more the number of roads join, more complex the intersection becomes. In this guide we are capturing differnt cases of intersections with some best practices and recommendation to follow during mapping.

## Intersection types

### Intersection of two bi-directional ways

A bidirectional road divides the traffic into two streams without any physical seperation. All the ways which passes through the junction should intersect at a common point to form a junction.

| ✅ **Recommended**  | ❌ **Not recommended** |
|---|---|
| [![][efa2ef0b]][efa2ef0b] | [![][ba05460f]][ba05460f] |

  [efa2ef0b]: ../../images/intersection-modeling/simple_intersection.png "Simple intersection (fullsize view)"
  [ba05460f]: ../../images/intersection-modeling/simple_intersection_error.png "Not recommended drawing of the simple intersection (fullsize view)"
  [dbad8b6b]: ../../images/intersection-modeling/simple_intersection_wireframe.png "Simple intersection (wireframe view)"
  [a8c293d9]: ../../images/intersection-modeling/simple_intersection_wireframe_error.png "Not recommended drawing of the simple intersection (wireframe view)"

### Intersection and traffic islands

Bidirectional highway intersection with small traffic island is not required to be mapped separate junction. In such cases adding [`traffic_calming=island`](https://wiki.openstreetmap.org/wiki/Tag:traffic_calming%3Disland) node at the place of the divider will be better way to model it.

| ✅ **Recommended**  | ❌ **Not recommended** |
|---|---|
| [![][76c562c6]][76c562c6] | [![][787f1fd3]][787f1fd3] |

  [76c562c6]: ../../images/intersection-modeling/simple_intersection_with_the_safety_islands.png "Simple intersection with the traffic islands (fullsize view)"
  [787f1fd3]: ../../images/intersection-modeling/simple_intersection_with_the_safety_islands_error.png "Not recommended drawing of the simple intersection with the traffic islands (fullsize view)"
  [b739583e]: ../../images/intersection-modeling/simple_intersection_with_the_safety_islands_wireframe.png "Simple intersection with the traffic islands (wireframe view)"
  [e0cba39d]: ../../images/intersection-modeling/simple_intersection_with_the_safety_islands_wireframe_error.png "Not recommended drawing of the simple intersection with the traffic islands (wireframe view)"

### Intersection between a bidirectional road and dual carriageway

A dual carriageway is a divided highway which carries traffic in opposite direction and is divided by a phisical separation. When a dual carriageway and a bidirectional highway meet at a junction, they should be modelled to follow the traffic flow rule by intersecting parallely and perpendicularly to each other. Merging the highway nodes (in a sausage shape) in the middle of the junction is not a best practice as they lead to confusing turn announcement.

| ✅ **Recommended**  | ❌ **Not recommended** |
|---|---|
| [![][ac1e486c]][ac1e486c] | [![][14300d5a]][14300d5a] |

  [ac1e486c]: ../../images/intersection-modeling/bi-dir_dual_carriageway_intersection.png "Intersection of a bidirectional and dual carriageway roads (fullsize view)"
  [7064e664]: ../../images/intersection-modeling/bi-dir_dual_carriageway_intersection_wireframe.png "Intersection of a bidirectional and dual carriageway roads (wireframe view)"
  [14300d5a]: ../../images/intersection-modeling/bi-dir_dual_carriageway_intersection_error.png "Not recommended drawing of the intersection of a bidirectional and dual carriageway roads (fullsize view)"
  [947d67cf]: ../../images/intersection-modeling/bi-dir_dual_carriageway_intersection_wireframe_error.png "Not recommended drawing of the intersection of a bidirectional and dual carriageway roads (wireframe view)"


### Intersection between dual carriageways

An intersection where two dual carriageway meets should be modelled perpendicular to each other without merging the dual ways in the middle of the junction.

| ✅ **Recommended**  | ❌ **Not recommended** |
|---|---|
| [![][7b8dcb18]][7b8dcb18] | [![][0c2aea64]][0c2aea64] [![][07cf7615]][07cf7615] |

  [7b8dcb18]: ../../images/intersection-modeling/2x_dual_carriageway_intersection.png "Intersection of dual carriageway roads (fullsize view)"
  [0c2aea64]: ../../images/intersection-modeling/2x_dual_carriageway_intersection_error.png "1st case of not recommended drawing of the intersection of dual carriageway roads (fullsize view)"
  [07cf7615]: ../../images/intersection-modeling/2x_dual_carriageway_intersection_error_1.png "2nd case of not recommended drawing of the intersection of dual carriageway roads (fullsize view)"
  [e14b208e]: ../../images/intersection-modeling/2x_dual_carriageway_intersection_wireframe.png "Intersection of dual carriageway roads (wireframe view)"
  [992e769f]: ../../images/intersection-modeling/2x_dual_carriageway_intersection_wireframe_error.png "1st case of not recommended drawing of the intersection of dual carriageway roads (wireframe view)"
  [9c7914ff]: ../../images/intersection-modeling/2x_dual_carriageway_intersection_wireframe_error_1.png "2nd case of not recommended drawing of the intersection of dual carriageway roads (wireframe view)"

### Three-way intersection

A three-way intersection has three arms meeting at a single point and can be either in **T-shape** (forming a perpendicular connection) or **Y-shape** (forming a non-perpendicular connection). It is not necessary that the highways meeting this junction should be perpendicular to each other but they should not be merged in the middle of the junction.

### Y-shaped intersection

| ✅ **Recommended**  | ❌ **Not recommended** |
|---|---|
| [![][59eb0e4e]][59eb0e4e] | [![][a2e66349]][a2e66349] |

  [59eb0e4e]: ../../images/intersection-modeling/3way_dual_carriageway_intersection.png "Three way T-shape dual carriageway intersection (fullsize view)"
  [a2e66349]: ../../images/intersection-modeling/3way_dual_carriageway_intersection_error.png "Not recommended drawing of the three way T-shape dual carriageway intersection (fullsize view)"
  [343cf126]: ../../images/intersection-modeling/3way_dual_carriageway_intersection_wireframe.png "Three way T-shape dual carriageway intersection (wireframe view)"
  [7b6d1a81]: ../../images/intersection-modeling/3way_dual_carriageway_intersection_wireframe_error.png "Not recommended drawing of the three way T-shape dual carriageway intersection (wireframe view)"


| ✅ **Recommended**  | ❌ **Not recommended** |
|---|---|
| [![][371b1405]][371b1405] | [![][fd18165a]][fd18165a] |

  [371b1405]: ../../images/intersection-modeling/3way_bidir_and_dual_carriageway_intersection.png "Three way T-shape dual carriageway and bi-directional roads intersection (fullsize view)"
  [fd18165a]: ../../images/intersection-modeling/3way_bidir_and_dual_carriageway_intersection_error.png "Not recommended drawing of the three way T-shape dual carriageway and bi-directional roads intersection (fullsize view)"
  [1f05b9a7]: ../../images/intersection-modeling/3way_bidir_and_dual_carriageway_intersection_wireframe.png "Three way T-shape dual carriageway and bi-directional roads intersection (wireframe view)"
  [595e07f7]: ../../images/intersection-modeling/3way_bidir_and_dual_carriageway_intersection_wireframe_error.png "Not recommended drawing of the three way T-shape dual carriageway and bi-directional roads intersection (wireframe view)"

| ✅ **Recommended**  | ❌ **Not recommended** |
|---|---|
| [![][3178c41e]][3178c41e] | [![][e20d4278]][e20d4278] |

  [3178c41e]: ../../images/intersection-modeling/3way_bidir_and_dual_carriageway_intersection_single_point.png "Three way T-shape dual carriageway and bi-directional roads single point intersection (fullsize view)"
  [e20d4278]: ../../images/intersection-modeling/3way_bidir_and_dual_carriageway_intersection_single_point_err.png "Not recommended drawing of the three way T-shape dual carriageway and bi-directional roads single point intersection (fullsize view)"
  [b37286cb]: ../../images/intersection-modeling/3way_bidir_and_dual_carriageway_intersection_single_point_wireframe.png "Three way T-shape dual carriageway and bi-directional roads single point intersection (wireframe view)"
  [050b1dfe]: ../../images/intersection-modeling/3way_bidir_and_dual_carriageway_intersection_single_point_wireframe_err.png "Not recommended drawing of the three way T-shape dual carriageway and bi-directional roads single point intersection (wireframe view)"

| ✅ **Recommended**  | ❌ **Not recommended** |
|---|---|
| [![][56845a9e]][56845a9e] | [![][b739d579]][b739d579] |

  [56845a9e]: ../../images/intersection-modeling/3way_bidir_and_dual_carriageway_intersection_double_point.png "Three way T-shape dual carriageway and bi-directional roads double point intersection (fullsize view)"
  [b739d579]: ../../images/intersection-modeling/3way_bidir_and_dual_carriageway_intersection_double_point_err.png "Not recommended drawing of the three way T-shape dual carriageway and bi-directional roads double point intersection (fullsize view)"
  [d74d5782]: ../../images/intersection-modeling/3way_bidir_and_dual_carriageway_intersection_double_point_wireframe.png "Three way T-shape dual carriageway and bi-directional roads double point intersection (wireframe view)"
  [53488b50]: ../../images/intersection-modeling/3way_bidir_and_dual_carriageway_intersection_double_point_wireframe_err.png "Not recommended drawing of the three way T-shape dual carriageway and bi-directional roads double point intersection (wireframe view)"

### T-shaped intersection

| ✅ **Recommended**  | ❌ **Not recommended** |
|---|---|
| [![][509c01d0]][509c01d0] | [![][51fbf7c8]][51fbf7c8] |

  [509c01d0]: ../../images/intersection-modeling/3way_dual_carriageway_intersection_1.png "Three way T-shape dual carriageway intersection (fullsize view)"
  [51fbf7c8]: ../../images/intersection-modeling/3way_dual_carriageway_intersection_error_1.png "Not recommended drawing of the three way T-shape dual carriageway intersection (fullsize view)"
  [93eeba9d]: ../../images/intersection-modeling/3way_dual_carriageway_intersection_wireframe_1.png "Three way T-shape dual carriageway intersection (wireframe view)"
  [1fc051e1]: ../../images/intersection-modeling/3way_dual_carriageway_intersection_wireframe_error_1.png "Not recommended drawing of the three way T-shape dual carriageway intersection (wireframe view)"

| ✅ **Recommended**  | ❌ **Not recommended** |
|---|---|
| [![][fae561f7]][fae561f7] | [![][902f4aee]][902f4aee] |

  [fae561f7]: ../../images/intersection-modeling/3way_bidir_and_dual_carriageway_intersection_double_point_1.png "Three way T-shape dual carriageway and bi-directional roads intersection (fullsize view)"
  [902f4aee]: ../../images/intersection-modeling/3way_bidir_and_dual_carriageway_intersection_double_point_err_1.png "Not recommended drawing of the three way T-shape dual carriageway and bi-directional roads intersection (fullsize view)"
  [641c8040]: ../../images/intersection-modeling/3way_bidir_and_dual_carriageway_intersection_double_point_wireframe_1.png "Three way T-shape dual carriageway and bi-directional roads intersection (wireframe view)"
  [e606f9b6]: ../../images/intersection-modeling/3way_bidir_and_dual_carriageway_intersection_double_point_wireframe_err_1.png "Not recommended drawing of the three way T-shape dual carriageway and bi-directional roads intersection (wireframe view)"

### Merging after intersection

In real world there are dual carriageway which becomes a bidirectional highway after crossing the junction. These intersection are tricky to map as they are many ways of modelling such intersection which will replicate the real world vehicle flow. After testing different models, merging the junction after crossing the intersection worked well in cases of turn announcement and guidance.

The merging of dual to bidirectional highway should not may sharp angle close to junction but better to keep it at a distance of 10-20 meters from the intersection. Through this type of modelling it keeps balance between cartography and navigation approach to mapping. This method works best between both and helps to keep visual and algorithmical simplicity of the data. (_Based on the [discussion in the US-Talk mailing list](https://lists.openstreetmap.org/pipermail/talk-us/2013-October/011899.html])_)

### Intersection between dual carriageways and bi-directional roads

| ✅ **Recommended**  | ❌ **Not recommended** |
|---|---|
| [![][eb9d8681]][eb9d8681] | [![][3a4e88da]][3a4e88da] |

  [eb9d8681]: ../../images/intersection-modeling/3way_bidir_and_dual_carriageway_intersection_squared.png "Three way T-shape dual carriageway and bi-directional roads double point intersection (fullsize view)"
  [3a4e88da]: ../../images/intersection-modeling/3way_bidir_and_dual_carriageway_intersection_double_point_err_2.png "Not recommended drawing of the three way T-shape dual carriageway and bi-directional roads double point intersection (fullsize view)"
  [884d750c]: ../../images/intersection-modeling/3way_bidir_and_dual_carriageway_intersection_squared.png "Three way T-shape dual carriageway and bi-directional roads squared intersection (fullsize view)"
  [41cb0f55]: ../../images/intersection-modeling/3way_bidir_and_dual_carriageway_intersection_squared_wireframe.png "Three way T-shape dual carriageway and bi-directional roads squared intersection (wireframe view)"
  [b5713acf]: ../../images/intersection-modeling/3way_bidir_and_dual_carriageway_intersection_double_point_wireframe_2.png "Three way T-shape dual carriageway and bi-directional roads double point intersection (wireframe view)"
  [bc59adb4]: ../../images/intersection-modeling/3way_bidir_and_dual_carriageway_intersection_double_point_wireframe_err_2.png "Not recommended drawing of the three way T-shape dual carriageway and bi-directional roads double point intersection (wireframe view)"

### Intersection between three dual carriageways and one bidrectional road

| ✅ **Recommended**  | ❌ **Not recommended** |
|---|---|
| [![][dcb8bcea]][dcb8bcea] | [![][e5c6b7e5]][e5c6b7e5] |

  [dcb8bcea]: ../../images/intersection-modeling/4way_3dual_carriageways_and_bidir_square.png "Intersection of 3 dual carriageways and 1 bi-drectional road (fullsize view)"
  [e5c6b7e5]: ../../images/intersection-modeling/4way_3dual_carriageways_and_bidir_err.png "Not recommended drawing of the intersection of 3 dual carriageways and 1 bi-drectional road (fullsize view)"
  [fd01f060]: ../../images/intersection-modeling/4way_3dual_carriageways_and_bidir_square_wireframe.png "Intersection of 3 dual carriageways and 1 bi-drectional road (wireframe view)"
  [1ac0124a]: ../../images/intersection-modeling/4way_3dual_carriageways_and_bidir_wireframe_err.png "Not recommended drawing of the intersection of 3 dual carriageways and 1 bi-drectional road (wireframe view)"

### Intersection between two dual carriageways and two bidirectional roads

| ✅ **Recommended**  | ❌ **Not recommended** |
|---|---|
| [![][9099d2d8]][9099d2d8] | [ ![][057cf80b]][057cf80b] |

  [9099d2d8]: ../../images/intersection-modeling/4way_2dual_carriageways_and_2bidir.png "Intersection between two dual carriageways and two bidirectional road (fullsize view)"
  [057cf80b]: ../../images/intersection-modeling/4way_2dual_carriageways_and_2bidir_bowtie.png "1"
