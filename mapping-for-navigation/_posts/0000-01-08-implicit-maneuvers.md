---
title: Mapping implicit turn-restriction
---


## What are Implicit turn-restriction ?

Implicit turn restrictions are turn restrictions that do not explicitly forbid certain turns with respect to a physical or painted sign, but are generally respected as restrictions because they forbid undesirable or dangerous manoeuvres. When a junction is missing an implicit turn restriction, a routing engine may not avoid such unwanted turns when calculating the route.

![](https://github.com/mapbox/mapping/blob/implicit-trs/images/implicit-trs/image1.png?raw=true) 

*Junction where link roads make sharp turns when getting on or off a major highway*

**Signposted Restriction**

For implicit turn-restriction there are rare cases of presence of restriction pole in real world. When it comes to routing graph these are implicit and an absence of turn-restriction in these junction leads to turn recommendation to these highways. 

## Types of implicit turn-restrictions

-- | --
<img width="400" src="https://github.com/mapbox/mapping/blob/implicit-trs/images/implicit-trs/image2.png?raw=true"> <img width="400" src="https://github.com/mapbox/mapping/blob/implicit-trs/images/implicit-trs/image3.png?raw=true">| **Sharp turns between ramps**
<img width="400" src="https://github.com/mapbox/mapping/blob/implicit-trs/images/implicit-trs/image4.png?raw=true"> <img width="400" src="https://github.com/mapbox/mapping/blob/implicit-trs/images/implicit-trs/image5.png?raw=true">| **Sharp turns onto a Single/Dual carriage transitions**
<img width="400" src="https://github.com/mapbox/mapping/blob/implicit-trs/images/implicit-trs/image6.png?raw=true">| **Implicit turn-restriction to/from ramps**
<img width="400" src="https://github.com/mapbox/mapping/blob/implicit-trs/images/implicit-trs/image7.png?raw=true">| **Implicit turn-restriction in opposite direction**
<img width="400" src="https://github.com/mapbox/mapping/blob/implicit-trs/images/implicit-trs/image8.png?raw=true">| **Micro loops caused by slip roads and main highways in complex intersections**

## Mapping implicit turn-restrictions

Mapping implicit turn restrictions is similar to [adding a regular turn-restriction](https://www.mapbox.com/mapping/mapping-for-navigation/adding-turn-restrictions/), but with an extra implicit=yes tag to differentiate normal and implicit restrictions. Depending on how the road geometry is modelled, you need to decide what kind of turn restriction to tag.

![](https://github.com/mapbox/mapping/blob/implicit-trs/images/implicit-trs/image13.png?raw=true)

## Examples

**Case 1**
In the above case there is two ways of adding implicit turn-restriction to these ramps. 

Option 1 | Option 2
-- | --
<img width="400" src="https://github.com/mapbox/mapping/blob/implicit-trs/images/implicit-trs/image10.png?raw=true"> Add a `no_u_turn` via the node between `from` and `to`  ramps | <img width="400" src="https://github.com/mapbox/mapping/blob/implicit-trs/images/implicit-trs/image9.png?raw=true">  Add `only_straight_on` via the node.

**Case 2** 
Sometimes it is unnecessary to map an implicit turn restriction because a junction is modelled in such a way that the implicit turn is already obvious. 

Before junction | Remodeled junction
-- | --
<img width="400" src="https://github.com/mapbox/mapping/blob/implicit-trs/images/implicit-trs/image11.png?raw=true"> | <img width="400" src="https://github.com/mapbox/mapping/blob/implicit-trs/images/implicit-trs/image12.png?raw=true">


Implicit turn restriction detection gallery 

- Between ramp implicit turn-restriction
![image](https://user-images.githubusercontent.com/3423533/32295704-79662492-bf20-11e7-9279-3c8c7c279541.png)

- Sharp turn between Dual carriage ways
![image](https://user-images.githubusercontent.com/3423533/32295985-45503d72-bf21-11e7-8e20-8a9c3e71c100.png)