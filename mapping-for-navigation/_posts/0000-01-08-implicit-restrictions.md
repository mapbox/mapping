---
title: Mapping implicit turn-restrictions
---

## What are implicit turn-restrictions?

Implicit turn restrictions are turn restrictions that are _implied_ by local laws, safe driving norms, or the real-world physical layout of roads, but are not accompanied by explicit signs (posts or roadpaint). When a junction is missing an implicit turn restriction, a routing engine may direct the driver to make an illegal or dangerous maneuver.

## Types of implicit turn-restrictions

### Sharp turns between ramps or slip roads

Where highway exit ramps join a road implicit turn restrictions are often need. Often a highway _off-ramp_ enters a road from one direction, and an _on-ramp_ branches off in the opposite direction at the same spot or very close by. In these situations, it is sometimes logically possible in the road network to navigate from an offramp directly onto an opposing on ramp:

<img width="400" src="https://github.com/mapbox/mapping/blob/implicit-trs/images/implicit-trs/image3.png?raw=true">

A similar situation can occur at the node where slip roads from a dual carraigeway intersect a single carraigeway:

<img width="400" src="https://github.com/mapbox/mapping/blob/implicit-trs/images/implicit-trs/image2.png?raw=true"> 

In these situations a turn-restriction is needed to prevent us from routhing from one ramp or slip-road directly onto the other. This maneuver is almost never legal or safe.

Here's another example, where the highway off-ramp and the on-ramp meet the road from the same direction. 

![image](https://user-images.githubusercontent.com/3423533/32295704-79662492-bf20-11e7-9279-3c8c7c279541.png)

### Sharp turns against the grain of a slip road

Where a slip road leaves or meets a main road, you will usually need to add up to two turn restrictions. 

The first restriction is _from_ the _slip_ road _to_ the _main_ road to prevent the sharp turn counter to the intended use of the slip road -- for example, a left from a right-hand-turn slip road.

The second restriction is _from_ the _main_ road _to_ the _slip_ road to prevent the sharp turn against the intended direction of the slip road -- for example, driving past an intersection, and then taking a sharp left/U-turn onto a slip road intended for use from the opposite direction:

These are a little tricky, make sure you understand both restrictions in the diagrams below. 

<img width="400" src="https://github.com/mapbox/mapping/blob/implicit-trs/images/implicit-trs/image6.png?raw=true">

<img width="400" src="https://github.com/mapbox/mapping/blob/implicit-trs/images/implicit-trs/image7.png?raw=true">

### Single/dual carriageway transitions

In general, U-turns are allowed on dual carraigeways. However, things get a little tricky when dual carraigeways transition to single carraigeways.

#### Transitions elsewhere than an intersection

Sometimes a dual carraigeway transitions to a single carraigewecause without a real intersection -- the road is simply narrowing. In these cases a routing engine will interprest the node as an intersection and allow U-turns. We need to override that behavior by mapping a no-u-turn restriction at the intersection.

![image](https://user-images.githubusercontent.com/3423533/32295985-45503d72-bf21-11e7-8e20-8a9c3e71c100.png)

#### Transitions at an intersection

In contrast, where a dual carraigeway becomes a single carraigeway at an intersection with other roads, it is treated just like any other dual carraigeway intersection. In these cases, no implicit turn restriction is needed.

<img width="400" src="https://github.com/mapbox/mapping/blob/implicit-trs/images/implicit-trs/image5.png?raw=true">

#### "Sausage Roads"

Sometimes, dual carraigeway intersections as modeled like "sausage links" -- a mapper has collapsed the road down to a single link at each intersection. This looks like a dual-carraigeway to single-carraigeway transition, but really nothing has changed.

We should remodel these as proper dual-carraigeway intersections. 

*Before remodeling*
<img width="400" src="https://github.com/mapbox/mapping/blob/implicit-trs/images/implicit-trs/image11.png?raw=true"> | 

*After remodeling*
<img width="400" src="https://github.com/mapbox/mapping/blob/implicit-trs/images/implicit-trs/image12.png?raw=true">

Once the road has been remodeled, apply turn restrictions for highway ramps and slip roads as normal.

### Complex intersections and microloops

Where multiple dual carraigeways, ramps, slip roads, and/or single carraigeways join, the complex network of crossing ways can create unpredictable routes. For example, "microloops" can enable unintended U-turn options:

<img width="400" src="https://github.com/mapbox/mapping/blob/implicit-trs/images/implicit-trs/image8.png?raw=true">

When working with an intersection like this, keep a close eye on all possible maneuvers at each node, and see if each should be permitted or restricted. Test you work in the routing engine to make sure it behaves as you expect, and don't hesitate to ask for a second set of eyes.

## Mapping implicit turn-restrictions

Mapping implicit turn restrictions is the same as [adding a regular turn-restriction](https://www.mapbox.com/mapping/mapping-for-navigation/adding-turn-restrictions/) with one addition: we add an extra `implicit=yes` tag to implicit turn restrictions to differentiate them from explicitly signed restrictions.

![](https://github.com/mapbox/mapping/blob/implicit-trs/images/implicit-trs/image13.png?raw=true)

Just as for regular turn restrictions, there are situations where implicit turn0restrictions can be added as either `no` or `only` restrictions. In these circumstances, feel to free to use whichever approach you find clearer.

Option 1 | Option 2
-- | --
<img width="400" src="https://github.com/mapbox/mapping/blob/implicit-trs/images/implicit-trs/image10.png?raw=true"> Add a `no_u_turn` via the node between `from` and `to`  ramps | <img width="400" src="https://github.com/mapbox/mapping/blob/implicit-trs/images/implicit-trs/image9.png?raw=true">  Add `only_straight_on` via the node.



