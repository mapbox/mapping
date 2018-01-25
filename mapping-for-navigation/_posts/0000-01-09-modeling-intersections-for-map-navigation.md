---
title: Intersection Modeling
---

An Intersection is where two or more highways meet or cross each other. The traced highway should represent the traffic flow for a navigation software to provide turn-by-turn instruction.

![](https://upload.wikimedia.org/wikipedia/commons/7/75/Makati_intersection.jpg)
_Source Wikipedia By Mike Gonzalez [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0) via Wikimedia Commons_

Over the history of OpenStreetMap, mappers have used different approaches to model various types of intersections. The more the number of roads intersect, the more complex the intersection becomes. In this guide we are capturing different cases of intersections with some best practices and recommendations to follow during mapping.

## Intersection types

### Intersection of two bi-directional ways

A bi-directional highway allows traffic flow in both directions without any physical separation. All the ways passing through the intersection should intersect at a common point to form a junction.

| ✅ **Recommended**  | ❌ **Not recommended** |
|---|---|
| [![][efa2ef0b]][efa2ef0b] | [![][ba05460f]][ba05460f] |

  [efa2ef0b]: ../../images/intersection-modeling/simple_intersection.png "Simple intersection (fullsize view)"
  [ba05460f]: ../../images/intersection-modeling/simple_intersection_error.png "Not recommended drawing of the simple intersection (fullsize view)"
  [dbad8b6b]: ../../images/intersection-modeling/simple_intersection_wireframe.png "Simple intersection (wireframe view)"
  [a8c293d9]: ../../images/intersection-modeling/simple_intersection_wireframe_error.png "Not recommended drawing of the simple intersection (wireframe view)"

### Bi-directional intersection with traffic island

Bi-directional highway intersection with small traffic island do not require separation in the road geometry. Instead, add the [`traffic_calming=island`](https://wiki.openstreetmap.org/wiki/Tag:traffic_calming%3Disland) tag on the node where the divider begins.

| ✅ **Recommended**  | ❌ **Not recommended** |
|---|---|
| [![][76c562c6]][76c562c6] | [![][787f1fd3]][787f1fd3] |

  [76c562c6]: ../../images/intersection-modeling/simple_intersection_with_the_safety_islands.png "Simple intersection with the traffic islands (fullsize view)"
  [787f1fd3]: ../../images/intersection-modeling/simple_intersection_with_the_safety_islands_error.png "Not recommended drawing of the simple intersection with the traffic islands (fullsize view)"
  [b739583e]: ../../images/intersection-modeling/simple_intersection_with_the_safety_islands_wireframe.png "Simple intersection with the traffic islands (wireframe view)"
  [e0cba39d]: ../../images/intersection-modeling/simple_intersection_with_the_safety_islands_wireframe_error.png "Not recommended drawing of the simple intersection with the traffic islands (wireframe view)"

### Intersection between a bi-directional highway and dual-carriageway

A dual-carriageway is a physically divided highway where the traffic flows in opposite directions. When a dual-carriageway and a bi-directional highway 
intersect at a junction, they should be modeled to follow the traffic flow rule by intersecting in parallel and perpendicular to each other. Merging the highway nodes (in a sausage shape) in the middle of the junction leads to confusing turn announcement and route line.

| ✅ **Recommended**  | ❌ **Not recommended** |
|---|---|
| [![][ac1e486c]][ac1e486c] | [![][14300d5a]][14300d5a] |

  [ac1e486c]: ../../images/intersection-modeling/bi-dir_dual_carriageway_intersection.png "Intersection of a bidirectional and dual carriageway roads (fullsize view)"
  [7064e664]: ../../images/intersection-modeling/bi-dir_dual_carriageway_intersection_wireframe.png "Intersection of a bidirectional and dual carriageway roads (wireframe view)"
  [14300d5a]: ../../images/intersection-modeling/bi-dir_dual_carriageway_intersection_error.png "Not recommended drawing of the intersection of a bidirectional and dual carriageway roads (fullsize view)"
  [947d67cf]: ../../images/intersection-modeling/bi-dir_dual_carriageway_intersection_wireframe_error.png "Not recommended drawing of the intersection of a bidirectional and dual carriageway roads (wireframe view)"


### Intersection between dual-carriageways

An intersection where two dual-carriageways intersect should be perpendicular to each other (in the form of **`#`**). Avoid merging the two ways in the middle of the junction.

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

A three-way intersection has three arms meeting at a single point forming a **T-shape** (perpendicular connection) or **Y-shape** (non-perpendicular connection). It is not necessary that the highways meeting this junction should be perpendicular to each other but they should not be merged in the middle of the junction.

#### Y-shaped intersection

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

#### T-shaped intersection

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

## Merging after intersection

In the real world, there are dual-carriageway which becomes a bi-directional highway after crossing the junction. These intersectiona are tricky to map as there are many ways of modeling such intersection which will replicate the actual traffic  flow. After testing different models, merging the junction after crossing the intersection worked well in cases of turn announcement and guidance.

The merging of dual to bi-directional highway shouldn't make a sharp angle too close to junction - keep  a distance of 10-20 meters from the intersection. This type of modeling keeps the balance between cartography and navigation approach to mapping. (_Based on the [discussion in the US-Talk mailing list](https://lists.openstreetmap.org/pipermail/talk-us/2013-October/011899.html)_)

<!---
### Intersection between multiple dual-carriageways and multiple bi-directional highways

Intersection where multiple carriageways with different traffic flow meets gets complicated to decide on when and how to merge them after the junction. Best way to model these intersections is by keeping the **`#`** shaped junction in the middle of the intersection and based on the incoming carriageway types we need to decide on which roads need merging after crossing the junction.

Commenting for now, the examples below should be enough or until we provide good screenshot for more complex merging. 
-->

### Intersection between dual-carriageways and bi-directional highways

Here are several examples of highways changing from dual-carriageway to bi-directional highway. Best practice is to form a  **`#`** in the middle of the junction then merge the dual-carriageway afterwards.

| ✅ **Recommended**  | ❌ **Not recommended** |
|---|---|
| [![][eb9d8681]][eb9d8681] | [![][3a4e88da]][3a4e88da] |

  [eb9d8681]: ../../images/intersection-modeling/3way_bidir_and_dual_carriageway_intersection_squared.png "Three way T-shape dual carriageway and bi-directional roads double point intersection (fullsize view)"
  [3a4e88da]: ../../images/intersection-modeling/3way_bidir_and_dual_carriageway_intersection_double_point_err_2.png "Not recommended drawing of the three way T-shape dual carriageway and bi-directional roads double point intersection (fullsize view)"
  [884d750c]: ../../images/intersection-modeling/3way_bidir_and_dual_carriageway_intersection_squared.png "Three way T-shape dual carriageway and bi-directional roads squared intersection (fullsize view)"
  [41cb0f55]: ../../images/intersection-modeling/3way_bidir_and_dual_carriageway_intersection_squared_wireframe.png "Three way T-shape dual carriageway and bi-directional roads squared intersection (wireframe view)"
  [b5713acf]: ../../images/intersection-modeling/3way_bidir_and_dual_carriageway_intersection_double_point_wireframe_2.png "Three way T-shape dual carriageway and bi-directional roads double point intersection (wireframe view)"
  [bc59adb4]: ../../images/intersection-modeling/3way_bidir_and_dual_carriageway_intersection_double_point_wireframe_err_2.png "Not recommended drawing of the three way T-shape dual carriageway and bi-directional roads double point intersection (wireframe view)"

### Intersection between three dual-carriageways and one bi-directional road


| ✅ **Recommended**  | ❌ **Not recommended** |
|---|---|
| [![][dcb8bcea]][dcb8bcea] | [![][e5c6b7e5]][e5c6b7e5] |

  [dcb8bcea]: ../../images/intersection-modeling/4way_3dual_carriageways_and_bidir_square.png "Intersection of 3 dual carriageways and 1 bi-drectional road (fullsize view)"
  [e5c6b7e5]: ../../images/intersection-modeling/4way_3dual_carriageways_and_bidir_err.png "Not recommended drawing of the intersection of 3 dual carriageways and 1 bi-drectional road (fullsize view)"
  [fd01f060]: ../../images/intersection-modeling/4way_3dual_carriageways_and_bidir_square_wireframe.png "Intersection of 3 dual carriageways and 1 bi-drectional road (wireframe view)"
  [1ac0124a]: ../../images/intersection-modeling/4way_3dual_carriageways_and_bidir_wireframe_err.png "Not recommended drawing of the intersection of 3 dual carriageways and 1 bi-drectional road (wireframe view)"

### Intersection between two dual-carriageways and two bi-directional roads

On a four-way intersection where there are two dual-carriageways changing to a bi-directional highway, form a  **`#`** at the intersection then merge both the dual-carriageways after the crossing.

| ✅ **Recommended**  | ❌ **Not recommended** |
|---|---|
| [![][9099d2d8]][9099d2d8] | [ ![][057cf80b]][057cf80b] |

  [9099d2d8]: ../../images/intersection-modeling/4way_2dual_carriageways_and_2bidir.png "Intersection between two dual carriageways and two bidirectional road (fullsize view)"
  [057cf80b]: ../../images/intersection-modeling/4way_2dual_carriageways_and_2bidir_bowtie.png "1"
