---
title: Modeling roads in OSM for navigation
---

## Roads
Roads are the main map features that we use for rendering navigational applications. Accurate roads representation leads not only to the well-looking map but also to a more precise navigation.

For now, most common approach for road mapping is to trace roads following their centroid. This way of tracing looks good for 2-lanes roads like unclassified and residential roads or for tracing over low-res imagery.

![road_with_two_lanes](https://cloud.githubusercontent.com/assets/369696/13230189/1bc4b308-d9ad-11e5-88b7-f85fcd290926.png)

## What is a Way

A Way in OSM represents road as a complex feature. First of all, it is a line that represents an object (road), which covers a specific **area** on the ground.  In order to show the shape  and contours of the road we may to draw a polygon and mark it accordingly. (See [`area:highway`=`*`](http://wiki.openstreetmap.org/wiki/Key:area:highway),  [description](http://wiki.openstreetmap.org/wiki/Proposed_features/Street_area) and [comprehensive mapping guide](http://wiki.openstreetmap.org/wiki/Proposed_features/area_highway/mapping_guidelines) in Wiki OSM)

## What is a lane

To understand the complexity of a Way, the width of the road is divided into absolute (meters) or in relative number of lanes units of measurement. Numbers of lanes on the road will help us to make our driving decisions. At least road has one lane for  driving in both directions. This is a rough assumption. As a general rule, the road has two or more lanes for vehicular traffic.

![residential_road](https://cloud.githubusercontent.com/assets/369696/13223732/34cf7ffa-d98e-11e5-9a33-8f40f6498004.png)

Use the `lanes=*` key to tag how many full-width traffic lanes there are on a highway.

### Roads with more than two lanes

There are two cases:
- Roads which carry traffic in both directions and

  ![bidirectional_road](https://cloud.githubusercontent.com/assets/369696/13230341/9f9db6c0-d9ad-11e5-9f5d-53dd80b40f67.png)

- Dual carriageway roads.

  ![dual_carriageway_road](https://cloud.githubusercontent.com/assets/369696/13230427/fe21579c-d9ad-11e5-86ba-38107d469c54.png)

To set number of lanes for roads which carry traffic in both directions use [`:backward` and `:forward` suffixes](http://wiki.openstreetmap.org/wiki/Forward_%26_backward,_left_%26_right#Forward_and_backward)

`Forward` means the direction in which the way is drawn in OpenStreetMap, while `backward` means the opposite direction.

    Example:
      highway=tertiary
      lanes=5
      lanes:forward=3   
      lanes:backward=2

Roads with an even number of lanes tend to have an equal number of lanes in each direction by default and thus we may omit `:forward` and `:backward` tagging.

In opposite case, when numbers of lanes for each directions don't match, we have to explicitly denote their numbers with `lanes:forward=*`+`lanes:backward=*` along with overall numbers of `lanes=*`.

We are not able to draw a road on its center line,  especially if roads join/fork or the number of lanes change. Imagine two roads which join: how would you draw the OSM-way around the point where the roads join?

  ![center_line](https://wiki.openstreetmap.org/w/images/4/47/Lane_Placement_2.png)

  _center line tracing_

  ![main_direction](https://wiki.openstreetmap.org/w/images/e/e4/Lane_Placement_3.png)

  _tracing main direction_

Our decision is to trace **main direction**!

Before tracing (fix previous tracing), we need to inspect the start and end points of the road segments. We need to identify the road direction, general numbers of lanes and the places where there are extra lanes. Based on this we choose our strategy.

### Bidirectional roads

At the image below general number of lanes is two - `lanes=2`. Orange line is the center line of bidirectional way which represents main movement direction. We don't change its flow when extra lanes are appeared. Just set `lanes=3`+`lanes:forward=2`+`lanes:backward=1` tags for the segment at right low corner with extra lane for turn to right. Optionally we may specify [placement](https://wiki.openstreetmap.org/wiki/Proposed_features/placement) of the lanes relatively to the our OSM-way.

  ![residential_road](https://cloud.githubusercontent.com/assets/369696/13223732/34cf7ffa-d98e-11e5-9a33-8f40f6498004.png)

  ![residential_road_2](https://cloud.githubusercontent.com/assets/369696/13228435/ae570094-d9a4-11e5-9f3c-4737112a7932.png)

Look to the below image. There is we have two tagging variants:

1. `lanes=2` - 1 lane for each direction, or

2. `lanes=3` - denote middle lane for left turn as (:point_left: _this is [discussed](http://wiki.openstreetmap.org/wiki/Proposed_features/Suffix_both_ways)_)

        highway=residential
        lanes=3
        lanes:forward=1
        lanes:backward=1
        lanes:both_ways=1
        turn:lanes:both_ways=left

  ![residential_road_3](https://cloud.githubusercontent.com/assets/369696/13229045/ab01d6f0-d9a7-11e5-8d8a-1fe5518c84a5.png)

  Case when number of lanes is even but numbers of lanes for each direction not equal. :point_down:

  ![trunk_link](https://cloud.githubusercontent.com/assets/369696/13229897/b09a811c-d9ab-11e5-935e-25906c94585b.png)

### Dual carriageway roads

Trace ways for dual carriageways road for each direction as close as possible to their outermost edge. There is some reasons for such way of tracing:
  - In lower zoom levels we will be able to distinguish dual carriageways road from bidirectional one just glimpsing on the map
  - GPS devices will associate their position with right road segments even in bad signal reception conditions
  - Link roads which join to or fork from main highway will look good and will be connected in right places
  - We are able to adjust position of the lanes on the road using `placement=right_of:3` tagging if needed.

Place nodes of the lines in each direction, opposite to each other, which will get a good view of the road on the map
  ![motorway](https://cloud.githubusercontent.com/assets/369696/13231932/5b417e00-d9b5-11e5-854e-dbed2d209d7c.png)
  
## Further reading

* Adding lanes in OSM: [OSM wiki](http://wiki.openstreetmap.org/wiki/Key:lanes)
* Specifying placement of the OSM-way relative to the road it represents: [Proposal in OSM wiki](http://wiki.openstreetmap.org/wiki/Proposed_features/placement)
* Specifying lanes or similar features running in both directions of the OSM way: [Proposal in OSM wiki](http://wiki.openstreetmap.org/wiki/Proposed_features/Suffix_both_ways)