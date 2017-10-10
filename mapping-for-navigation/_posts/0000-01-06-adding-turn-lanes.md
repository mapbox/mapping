---
title: Adding turn lanes
---

## What is a turn lane

A turn lane is an auxiliary lane demarcated on the road to specify directions to ongoing vehicles.
Turn lanes serve two purposes:
*   Provide directional information to the ongoing vehicles and
*   Provide the lane information to be chosen for the vehicles changing their direction

### Types of turn lanes

There are a total of 12 different turn lanes demarcated on the roads. They are:

Turn Lane | Representation
--- | ---
turn:lanes = left | ![left](https://cloud.githubusercontent.com/assets/8401827/13217928/1d2fc24e-d98c-11e5-9d20-c526fe6e7f01.jpg)
turn:lanes = right | ![right](https://cloud.githubusercontent.com/assets/8401827/13217945/424f36e0-d98c-11e5-99e7-9d178f2529a1.jpg)
turn:lanes = through | ![through](https://cloud.githubusercontent.com/assets/8401827/13214156/f885d4b4-d973-11e5-9fb7-e9ecb70a932b.jpg)
turn:lanes = left;through | ![through left](https://cloud.githubusercontent.com/assets/8401827/13217986/80786072-d98c-11e5-99c6-db8665977550.png)
turn:lanes = right;through | ![through_right](https://cloud.githubusercontent.com/assets/8401827/13218022/b8aa9352-d98c-11e5-87c2-d8c17ee68305.jpg)
turn:lanes = left;through;right| ![leftthroughright](https://cloud.githubusercontent.com/assets/8401827/13218061/027e10ee-d98d-11e5-9747-c6867e0787b0.JPG)
turn:lanes = left;right | ![left_right](https://cloud.githubusercontent.com/assets/8401827/13217579/8f833c66-d989-11e5-9b2c-dc98fdff09b2.png)
turn:lanes = slight_left | ![slightleft](https://cloud.githubusercontent.com/assets/8401827/13218207/e450feaa-d98d-11e5-938c-a3956de2f7ba.png)
turn:lanes = slight_right | ![slightright](https://cloud.githubusercontent.com/assets/8401827/13218219/07052b56-d98e-11e5-8fc0-82b945fb95c6.png)
turn:lanes = merge_to_left | ![merge to left](https://cloud.githubusercontent.com/assets/8401827/13218244/2ca1fd6c-d98e-11e5-8be9-cb64271f5991.png)
turn:lanes = merge_to_right | ![fahrbahn_2](https://cloud.githubusercontent.com/assets/8401827/13218183/bc5d0790-d98d-11e5-9781-307f80cc0732.png)
<<<<<<< HEAD
turn:lanes:bothways = * |![turn lanes both ways](https://cloud.githubusercontent.com/assets/8401827/13217721/a2594d48-d98a-11e5-87f1-11e11ebf57ec.png)
=======
turn:lanes:both_ways = * | ![turn lanes both ways](https://cloud.githubusercontent.com/assets/8401827/13217721/a2594d48-d98a-11e5-87f1-11e11ebf57ec.png)
>>>>>>> mb-pages

  ![](http://pdd.ua/r/r/EEB7A996-D8DC-40FC-87EA-01F3E115BC7C/m_1.18_4.jpg)
  _road markings on the ground_ - © [pdd.ua](http://pdd.ua/ua/34/1.18/)

### Pre-requirements for mapping a turn lane in JOSM

Before mapping turn lanes activate the following preferences in JOSM to visualize the mapped turn lanes: `preferences > Map Settings`
*   _`Map Paint Styles > Lane and road attributes`_

    ![lane_and_road_attributes](https://cloud.githubusercontent.com/assets/13744156/13218788/c55fab96-d991-11e5-89b2-b281986d704e.gif)

*   _`Tagging Presets > lane attributes`_

     ![tagging_presets](https://cloud.githubusercontent.com/assets/13744156/13218902/ad15c902-d992-11e5-872b-1bde24f27f5b.gif)

*   Filter out non-road features with inverse filter: `boundary: | leisure: | landuse: | waterway: | amenity: | natural: | building:`

**Plugins**

*   Knife-tool: <https://gist.github.com/jothirnadh/a10daeaef1498537ea56f0a65f7fdbc2>
*   TurnLanes-tagging plugin: `JOSM Preferences > Plugins > turnlanes-tagging`

### Mapping a turn lane

*   Check all roads in the imagery for turn lanes at junction points

    ![roads_markings](https://cloud.githubusercontent.com/assets/126868/11710074/b58b52e4-9f42-11e5-971a-000a699a0b6d.png)

*   Split the road into segments based on the total number of lanes for the segment. The easiest way for splitting the road is by using [Knife_tool](https://gist.github.com/jothirnadh/a10daeaef1498537ea56f0a65f7fdbc2)

    ![residential_road](https://cloud.githubusercontent.com/assets/369696/13223732/34cf7ffa-d98e-11e5-9a33-8f40f6498004.png)

*   For each road segment tag the turn lanes based on the road markings in the direction of the way. Eg. `turn:lanes=left|left;through|through`. Check [OSM turn:lanes](http://wiki.openstreetmap.org/wiki/Key:turn:lanes) for reference.

    ![oneway_turn:lanes_tagging](https://cloud.githubusercontent.com/assets/8401827/13252110/a6bdea8a-da5a-11e5-8c79-aa15c0c15f68.gif)

*   For bi-directional segments, use `turn:lanes:backward=` and `turn:lanes:forward=` to specify turn lanes in each direction.

    ![bidirectional_tagging](https://cloud.githubusercontent.com/assets/13744156/13219545/acd78f62-d996-11e5-85eb-3e05a7b79d3b.gif)

*   Verify correct tagging using the `Lane attributes` style

    ![lane_attributes](https://cloud.githubusercontent.com/assets/8401827/13251884/ddcbdd54-da58-11e5-86ae-c4a2918c9577.gif)

*   The simplest way to add turn lanes is by using **[turnlanes-tagging plugin](https://www.mapbox.com/blog/turnlanes-tagging/)**

![turnlenes](https://cloud.githubusercontent.com/assets/8401827/17246767/d086ef48-55ab-11e6-8bce-46c434cb9005.gif)

### `turn:lanes` and relations

We use [relations](http://wiki.openstreetmap.org/wiki/Relation) for different purpose – for indicating [turn restriction](http://wiki.openstreetmap.org/wiki/Relation:restriction) or collect separate ways into solid [route](http://wiki.openstreetmap.org/wiki/Relation:route).
​
JOSM help us to handle them. But sometimes we are faced with not properly denoted relations. JOSM will inform about it while uploading our changes. You may [ignore messages of level "Warnings"](https://github.com/mapbox/mapping/issues/153#issuecomment-185679507) (if you only split ways and didn't edit relations manually) but you have to fix all "Errors".

## QA for turn lanes mapping

While mapping turn lanes, there are a lot of scenarios are encountered in [#153](https://github.com/mapbox/mapping/issues/153) and [#144](https://github.com/mapbox/mapping/issues/144) mapping repos. All these scenarios are drafted in one place for validation purposes.

## Different scenarios we came across while mapping

### 1. Parking lanes

In the U.S., when parallel parking spaces are marked, they are marked in one of [three ways](http://mutcd.fhwa.dot.gov/htm/2009/part3/fig3b_21_longdesc.htm):

  ![parking_lanes](https://cloud.githubusercontent.com/assets/8401827/13172245/326a7bb6-d71d-11e5-8617-a2516f75144b.png)

Here’s an example of the box marking style:

  [![boxes](https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/J.S._Shingler_Bldg_%28East_face%29%2C_McLendon_St%2C_Ashburn.JPG/320px-J.S._Shingler_Bldg_%28East_face%29%2C_McLendon_St%2C_Ashburn.JPG)](https://commons.wikimedia.org/wiki/File:J.S._Shingler_Bldg_%28East_face%29,_McLendon_St,_Ashburn.JPG)

### 2. Counting number of turn lanes

If there are no clear cut demarcations on the road and yet cars are parked on either sides of the road, consider them as drive lanes. Case below:

 ![number_of_lanes](https://cloud.githubusercontent.com/assets/8401827/13142482/5b26d0a0-d663-11e5-90cd-4a65d75e7248.png)

### 3. Starting a turn lane

 Turn lanes should begin exactly as per the marking in the imagery, not before or after.

  ![turn:lanes_start](https://cloud.githubusercontent.com/assets/8401827/13110125/0fe83ad0-d5a4-11e5-82ff-00245d0ba043.png)

### 4. Ending a turn lane

Turn lanes should terminate at the first highway junction after the start of the turn lane.

  ![turn:lanes_end](https://cloud.githubusercontent.com/assets/8401827/13143057/4ff2b3c6-d667-11e5-8069-b028fabf7587.png)

### 5. Turn lane forward

In case of bi-directional ways, the key [turn:lanes:forward=*](http://wiki.openstreetmap.org/wiki/Forward_%26_backward,_left_%26_right) describes only the turning indications on the lanes in the same direction as the osm-way; while adding this we must view the road in the direction to the osm-way(**on the direction where the osm-way arrow is pointing**).

  ![turn:lanes:forward](https://cloud.githubusercontent.com/assets/8401827/13175904/c5c922fc-d733-11e5-91b1-c0f9e5181fda.gif)

### 6. Turn lane backward

In case of bi-directional ways, the key [turn:lanes:backward=*](http://wiki.openstreetmap.org/wiki/Forward_%26_backward,_left_%26_right) describes only the turning indications on the lanes in the opposite direction as the osm-way; while adding this we must view the road in the oppoiste direction to the osm-way(**opposite to direction where the osm-way arrow is pointing**).

  ![turn:lanes:backward](https://cloud.githubusercontent.com/assets/13744156/13172709/859957c4-d71f-11e5-8cd9-ea154ad5d2e8.gif)

  _Adding a `turn:lanes:backward` tag_

### 7. Adding dual carriageways:

When finding roads mapped as single carriageway while the imagery shows clear separation between roads, split the road where the physical separation starts and add dual carriageways.

![dualcarriageway](https://cloud.githubusercontent.com/assets/8401827/13393542/117b59aa-df08-11e5-8fd3-21a931531f84.png)


**When to add dual carriageway?**
-   Add Dual-carriage when
    -   you see physical separation betweens roads
    -   **no relation is attached to the way.**
-   Add `turn:lanes` tag to both the ways.


### 8. Bicycle lanes and road shoulders

Road shoulders and bicycle lanes are ignored from the lane count. Both these roads are `lanes=2`

  ![bicycle+shoulders](https://cloud.githubusercontent.com/assets/126868/11715007/628dd90a-9f64-11e5-9e22-58614d2afbf6.png)

  ![bicycle_lanes](https://cloud.githubusercontent.com/assets/13744156/13172922/adc69f08-d720-11e5-8600-7a606d2e9bae.png)

  _lanes=3 for the above example, ignoring the two cycle ways_

*   Ignore bicycle lanes even though they are in the middle;example below:

    ![xyz2](https://cloud.githubusercontent.com/assets/8401827/13495220/79a65aca-e16f-11e5-83e7-24d3e4f53ad0.png)

    _The middle way is also a bicycle lane which is not counted while adding the `lanes` tag_

*   Additionally, `Strava global-heat cycle` layer can used to verify if a particular lane is a cycle-way.
`tms[16]:http://globalheat.strava.com/tiles/cycling/color3/{zoom}/{x}/{y}.png`

### 9. Lane marked as a separate way

Do not add turn lanes in these cases where the only turn lane is already a mapped as a separate way.

  ![lane_as_separate_way](https://cloud.githubusercontent.com/assets/13744156/13173428/6694c468-d723-11e5-96be-b95502b9f58a.png)

### 10. Bidirectional turn lanes

These are the lanes marked with symbol representing both directions at a time.

  ![turn:lanes:both_ways](https://cloud.githubusercontent.com/assets/8401827/12642951/0162ff9c-c5df-11e5-8a14-a41f263ae086.png)

Tag used for such lanes are `turn:lanes:both_ways=*`

Yellow lines on both sides of a lane also gives an indication of `turn:lanes:both_ways=*`

![screen shot 2016-05-16 at 4 12 49 pm](https://cloud.githubusercontent.com/assets/1933377/15287587/8dd24396-1b81-11e6-8527-b84814804175.png)

![screen shot 2016-05-16 at 4 13 00 pm](https://cloud.githubusercontent.com/assets/1933377/15287591/9165c50a-1b81-11e6-9521-93cea4b7be16.png)
### 11. Mapillary Plugin to verify turn lanes

The imagery at some places is not very clear and at-times the turn-lanes are covered by cars. In situations like these `Mapillary plugin` can be used. If there is Mapillary imagery coverage in that area, they can used to verify the presence of turn-lanes.

**Name of the plugin:** Mapillary

  ![turnlanes_mapillary](https://cloud.githubusercontent.com/assets/4470913/12884912/6b405d1e-ce87-11e5-8d0f-cd8a8a8b3dfd.gif)

### 12. Lanes with restricted access

These are the areas on streets which are restricted for vehicular traffic.

![screen shot 2016-03-15 at 3 36 36 pm](https://cloud.githubusercontent.com/assets/8401827/13776503/84c34002-ead0-11e5-911d-0581fe9173b7.png)

![screen shot 2016-03-14 at 4 46 03 pm](https://cloud.githubusercontent.com/assets/8401827/13776504/84e64138-ead0-11e5-81f0-7918311ec6dc.png)

![screen shot 2016-03-14 at 4 46 29 pm](https://cloud.githubusercontent.com/assets/8401827/13776505/84e71888-ead0-11e5-9135-553c11d99d12.png)

In the above cases the areas with markings on the roads are not considered as a lane

### 13. Reverse direction turn lanes

These are the lanes specifically categorized to take U-turn or reverse-turn.

![screen shot 2016-03-14 at 2 25 28 pm](https://cloud.githubusercontent.com/assets/8401827/13776502/84944b6c-ead0-11e5-92fa-0bb2951760ef.png)

### 14. The order of the directions and valid combinations of values

-   `none` itself is valid value but **not** in conjunction with other
    -   ✅ `turn:lanes=none|right` is equal to `turn:lanes=|right` - we use `none` for "_better readability_"
    -   👎  `turn:lanes=left||none|merge_to_right` - this combination of values is valid but there is mixing `none` and `||` (empty) - this is not good choice.
    -   👍  `turn:lanes=left|none|none|merge_to_right` or `turn:lanes=left|||merge_to_right`
    -   ❎ `turn:lanes=none|none|none` or `turn:lanes=||` - in this case `turn:lanes=*` tag is redundant, just specify `lanes=3` or real number of lanes
    -   ❎ `turn:lanes=none|none;slight_right` - isn't valid combination - "_there are no turn indications_"  on the rightmost lane. Instead, must be used (based on <https://github.com/mapbox/mapping/issues/180#issuecomment-225574666>)
```
lanes=2
turn:lanes=none|through;slight_right
transit:lanes=continue|new_on_right
```

-   using `*right` | `*left` values
    -   ✅ `turn:lanes=left|none|none` or `turn:lanes=||right` or `turn:lanes=merge_to_right||` or `turn:lanes=left|left;through|none|slight_right|right|right`- 👍
    -   ❎  `turn:lanes=|right|left|` or `turn:lanes=none|right|left|through` or `turn:lanes=none|left|none`- 👎  lanes that go in one direction should not cross with each other

-   using `reverse` value
    -   `reverse` (u-turn) have to be on the leftmost lane for right-hand traffic or on the rightmost lane for right-hand

### 15.

_to be continued …_

### Further reading:
*   [Mapping turn lanes: OSM wiki](http://wiki.openstreetmap.org/wiki/Key:turn)
*   [Mapping turn lanes in OpenStreetMap by Andrey Golovin](https://www.mapbox.com/blog/turn-lanes-mapping/)
*   Diary post by @Andygol : [Mapping turn lanes in OpenStreetMap](http://www.openstreetmap.org/user/andygol/diary/35489#)
