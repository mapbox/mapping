---
title: Mapping implicit turn-restriction
---


## What are implicit turns?

Turns on highways should never be sharp **less than ~90 degree**. An implicit turn is a turn which is legal with respect to junction modeling but is forbidden by the algorithm to avoid unwanted and dangerous turn recommendations. These junction have high chances of missing turn-restriction and adding these restriction makes routing engine to avoid such turns when calculating the route.

![](https://github.com/mapbox/mapping/blob/implicit-trs/images/implicit-trs/image1.png?raw=true) 

*Junction where link roads make sharp turns when getting on or off a major highway*

**Signages on road**

For implicit turns there are rare cases of presence of restriction pole in real world. When it comes to routing graph these are implicit and an absence of turn-restriction in these junction leads to turn recommendation to these highways. 

## Types of implicit turn-restriction

-- | --
<img width="400" src="https://github.com/mapbox/mapping/blob/implicit-trs/images/implicit-trs/image2.png?raw=true"> <img width="400" src="https://github.com/mapbox/mapping/blob/implicit-trs/images/implicit-trs/image3.png?raw=true">|**Sharp turns between ramps**
<img width="400" src="https://github.com/mapbox/mapping/blob/implicit-trs/images/implicit-trs/image4.png?raw=true"> <img width="400" src="https://github.com/mapbox/mapping/blob/implicit-trs/images/implicit-trs/image5.png?raw=true">|**Sharp turns onto a Single/Dual carriage transitions**
<img width="400" src="https://github.com/mapbox/mapping/blob/implicit-trs/images/implicit-trs/image6.png?raw=true">|**Implicit turns to/from ramps**
<img width="400" src="https://github.com/mapbox/mapping/blob/implicit-trs/images/implicit-trs/image7.png?raw=true">|**Implicit Turn in opposite direction**
<img width="400" src="https://github.com/mapbox/mapping/blob/implicit-trs/images/implicit-trs/image8.png?raw=true">|**Micro loops caused by slip roads and main highways in complex intersections**

## Mapping implicit turn-restriction

Mapping implicit turn-restriction is similar [adding a regular turn-restriction](https://www.mapbox.com/mapping/mapping-for-navigation/adding-turn-restrictions/). Depending on how the road geometry is modeled, you need to decide what kind of turn-restriction should be given and how to address them. 

Add an `implicit=yes` tag within the relation to differentiate between normal turn-restriction and an implicit turn-restriction.

![](https://github.com/mapbox/mapping/blob/implicit-trs/images/implicit-trs/image13.png?raw=true)

## Examples

**Case 1**
In the above case there is two ways of adding implicit turn-restriction to these ramps. 

Option 1 | Option 2
-- | --
<img width="400" src="https://github.com/mapbox/mapping/blob/implicit-trs/images/implicit-trs/image10.png?raw=true"> Add a `no_u_turn` via the node between `from` and `to`  ramps | <img width="400" src="https://github.com/mapbox/mapping/blob/implicit-trs/images/implicit-trs/image9.png?raw=true">  Add `only_straight_on` via the node.

**Case 2** 
There is no need to map turn-restriction in all the cases of implicit turns. In some junction the junction will be modeled in such way which enables these implicit turns. 

Before junction | Remodeled junction
-- | --
<img width="400" src="https://github.com/mapbox/mapping/blob/implicit-trs/images/implicit-trs/image11.png?raw=true"> | <img width="400" src="https://github.com/mapbox/mapping/blob/implicit-trs/images/implicit-trs/image12.png?raw=true">
