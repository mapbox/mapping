---
title: QA for turn lane data
---

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

In case of bi-directional ways, the key [turn:lanes:forward=*](http://wiki.openstreetmap.org/wiki/Forward_%26_backward,_left_%26_right) describes only the turning indications on the lanes in the same direction as the osm-way; while adding this we must view the road in the direction to the osm-way (**on the direction where the osm-way arrow is pointing**).

  ![turn:lanes:forward](https://cloud.githubusercontent.com/assets/8401827/13175904/c5c922fc-d733-11e5-91b1-c0f9e5181fda.gif)

### 6. Turn lane backward

In case of bi-directional ways, the key [turn:lanes:backward=*](http://wiki.openstreetmap.org/wiki/Forward_%26_backward,_left_%26_right) describes only the turning indications on the lanes in the opposite direction as the osm-way; while adding this we must view the road in the opposite direction to the osm-way (**opposite to direction where the osm-way arrow is pointing**).

  ![turn:lanes:backward](https://cloud.githubusercontent.com/assets/13744156/13172709/859957c4-d71f-11e5-8cd9-ea154ad5d2e8.gif)

  *Adding a `turn:lanes:backward` tag*

### 7. Adding dual carriageways:

When finding roads mapped as single carriageway while the imagery shows clear separation between roads, split the road where the physical separation starts and add dual carriageways.

![dualcarriageway](https://cloud.githubusercontent.com/assets/8401827/13393542/117b59aa-df08-11e5-8fd3-21a931531f84.png)


**When to add dual carriageway?**
- Add Dual-carriage when
  - you see physical separation betweens roads
  - **no relation is attached to the way.**
- Add `turn:lanes` tag to both the ways.


### 8. Bicycle lanes and road shoulders

Road shoulders and bicycle lanes are ignored from the lane count. Both these roads are `lanes=2`

  ![bicycle+shoulders](https://cloud.githubusercontent.com/assets/126868/11715007/628dd90a-9f64-11e5-9e22-58614d2afbf6.png)

  ![bicycle_lanes](https://cloud.githubusercontent.com/assets/13744156/13172922/adc69f08-d720-11e5-8600-7a606d2e9bae.png)

  *lanes=3 for the above example, ignoring the two cycle ways*

* Ignore bicycle lanes even though they are in the middle;example below:

  ![xyz2](https://cloud.githubusercontent.com/assets/8401827/13495220/79a65aca-e16f-11e5-83e7-24d3e4f53ad0.png)

  *The middle way is also a biclcle lane which is not counted while adding the `lanes` tag*

* Additionally, `Strava global-heat cycle` layer can used to verify if a particular lane is a cycle-way.
`tms[16]:http://globalheat.strava.com/tiles/cycling/color3/{zoom}/{x}/{y}.png`

### 9. Lane marked as a separate way

Do not add turn lanes in these cases where the only turn lane is already a mapped as a separate way.

  ![lane_as_separate_way](https://cloud.githubusercontent.com/assets/13744156/13173428/6694c468-d723-11e5-96be-b95502b9f58a.png)

### 10. Bidirectional turn lanes

These are the lanes marked with symbol representing both directions at a time.

  ![turn:lanes:both_ways](https://cloud.githubusercontent.com/assets/8401827/12642951/0162ff9c-c5df-11e5-8a14-a41f263ae086.png)

Tag used for such lanes are `turn:lanes:both_ways=*`

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

These are the lanes specifically categorised to take U-turn or reverse-turn.

![screen shot 2016-03-14 at 2 25 28 pm](https://cloud.githubusercontent.com/assets/8401827/13776502/84944b6c-ead0-11e5-92fa-0bb2951760ef.png)
