
---
title: Implicit maneuvers
---

## What are Implicit turns?

Turns on highways should never be sharp **less than ~90 degree**. An implicit turn is a turn which is legal with respect to junction modeling but is forbidden by the algorithm to avoid unwanted and dangerous turn recommendations. These junction have high chances of missing turn-restriction and adding these restriction makes routing engine to avoid such turns when calculating the route.

![](https://github.com/mapbox/mapping/blob/implicit-trs/images/implicit-trs/image1.png?raw=true) 

*Image showing junction where* *link roads make sharp turns when getting on or off a major highway*

### Signages on Road

For implicit turns there are rare cases of presence of restriction pole in real world. When it comes to routing graph these are implicit and an absence of turn-restriction in these junction leads to turn recommendation to these highways. 

## Types of Implicit turn-restriction

- **Sharp turns between ramps**

| |
-- | --
![](https://github.com/mapbox/mapping/blob/implicit-trs/images/implicit-trs/image2.png?raw=true) | ![](https://github.com/mapbox/mapping/blob/implicit-trs/images/implicit-trs/image3.png?raw=true)

- **Sharp turns onto a Single/Dual carriage transitions**

| |
-- | --
![](https://github.com/mapbox/mapping/blob/implicit-trs/images/implicit-trs/image4.png?raw=true) | ![](https://github.com/mapbox/mapping/blob/implicit-trs/images/implicit-trs/image5.png?raw=true)

- **Implicit turns to/from ramps**

![](https://github.com/mapbox/mapping/blob/implicit-trs/images/implicit-trs/image6.png?raw=true)

- **Implicit Turn in opposite direction**

![](https://github.com/mapbox/mapping/blob/implicit-trs/images/implicit-trs/image7.png?raw=true)

- **Micro loops caused by slip roads and main highways in complex intersections**

![](https://github.com/mapbox/mapping/blob/implicit-trs/images/implicit-trs/image8.png?raw=true)

## Mapping Implicit turn-restriction

Mapping implicit turn-restriction is nothing different from [adding a regular turn-restriction](https://www.mapbox.com/mapping/mapping-for-navigation/adding-turn-restrictions/). Depending on how the road geometry is modeled, you need to decide what kind of turn-restriction should be given and how to address them. 

To differentiate between normal turn-restriction and an implicit turn-restriction we will be using `implicit=yes` tag inside the relation to mark the present of implicit restriction. 

![](https://github.com/mapbox/mapping/blob/implicit-trs/images/implicit-trs/image13.png?raw=true)

## Examples of Mapping

**Case 1:**

Option 1 | Option 2
-- | --
![](https://github.com/mapbox/mapping/blob/implicit-trs/images/implicit-trs/image10.png?raw=true) | ![](https://github.com/mapbox/mapping/blob/implicit-trs/images/implicit-trs/image9.png?raw=true)

In the above case there is two ways of adding implicit turn-restriction to these ramps. 

- **Option 1** : `**no-u-turn**` ****- Adding a no-u-turn via the node between `from` and `to`  ramps
- **Option 2** : `**only-straight-on**` ****- Adding only-straight via the node

**Case 2 :** 
There is no need to map turn-restriction in all the cases of implicit turns. In some junction the junction will be modeled in such way which enables these implicit turns. 

Before junction | Remodeled junction
-- | --
![](https://github.com/mapbox/mapping/blob/implicit-trs/images/implicit-trs/image11.png?raw=true) | ![](https://github.com/mapbox/mapping/blob/implicit-trs/images/implicit-trs/image12.png?raw=true)




