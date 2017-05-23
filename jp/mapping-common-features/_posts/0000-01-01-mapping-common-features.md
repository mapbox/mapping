---
title: Mapping common features
---

This is a walkthrough of how to create and edit the most common features on OpenStreetMap. It's an introduction to get you started mapping but not meant to be comprehensive. We're going to use some OpenStreetMap specific terms here, if you're not familiar with what "nodes", "way" and "relations" are, read the previous guides first.

## How do I map X?

We're focusing in this section on the most common map features. For full documentation, refer to the [OpenStreetMap Map Features](http://wiki.openstreetmap.org/wiki/Map_Features) guide or [Feature categories](http://wiki.openstreetmap.org/wiki/Category:Features). To look up a specific map feature fast, for instance how to map a bus stop, google with a query like "tag bus stop site:wiki.openstreetmap.org":

![](https://s3.amazonaws.com/f.cl.ly/items/3C3A0S3k011k1P3b2J0N/google.gif)

A valuable complimentary resource is [taginfo.openstreetmap.org](http://taginfo.openstreetmap.org/). Tag info shows you the number of times a specific tag has been used, which lets you find out how established a tag is.

## Roads and paths

Roads are some of the most significant features we map. While roads are easy to trace off of Satellite imagery there is a large vocabulary for classifying different types of roads.

### Tracing roads

Tracing a road is simple. Use the **Draw** (`A`) tool in JOSM or the **Line** tool in iD and draw the road following its course. The trick is to use the right amount of nodes to describe a way. Too few make the road appear very jagged. Too many are unnecessary data and make the road hard to edit later.

Look at the picture below, the first example was traced with too few nodes, it is too jagged; the second example was traced with too many nodes adding redundant information; the last one is traced right:

![mapbox guide big](https://cloud.githubusercontent.com/assets/693781/10158378/f3a4b3fc-6691-11e5-9738-58ad86a5a525.png)

Roads must be connected where they intersect. On the left you can see two roads just crossing each other, on the right note how a node connects the two roads. This is important for navigation, where vehicles must be guided from one road to the other. 

![](https://s3.amazonaws.com/f.cl.ly/items/180r0E2l0P2H0m0Z3m07/Screen%20Shot%202015-01-04%20at%208.55.14%20PM.png)

And follow the flow of roads where possible. On the left, the road was traced with a "detour" for no apparent reason. On the right you see how the road tracing follows the logical flow of the road.

![wrong: "map around corners", right: follow flow](https://s3.amazonaws.com/f.cl.ly/items/0k1F3Y0m0y081H3v0W07/Screen%20Shot%202015-01-04%20at%208.48.54%20PM.png)

Trace every *physically* separated lane as a separate way. See for example this dual carriage way (orange):

![dual carriage way](https://s3.amazonaws.com/f.cl.ly/items/0f0z0i391l0C0e0X3d0b/Screen%20Shot%202015-01-04%20at%209.01.42%20PM.png)

When mapping a dual carriage way, make sure that connecting roads are properly connecting to both carriages *if* this connection is possible in reality:

![show 2 examples of connecting roads to a carriage way: one connecting to both lanes, one to only one lane](https://s3.amazonaws.com/f.cl.ly/items/07043M2U0H093c2q1r3m/Screen%20Shot%202015-01-04%20at%209.01.4222%20PM.png)

### Everything's a highway

No matter whether it's an overland road, a city street, a foot path or a cycleway, you'll find it tagged with the `highway` key. Here are some examples of common tags:

- `highway=residential` - a residential road in a city
- `highway=motorway` - a fast restricted access road
- `highway=footway` - a foot path
- `highway=cycleway` - a cycleway

Roads often come with secondary tags, further specifying type or attribute of a road:

- `oneway=yes` says a road is a one way
- `lanes=2` says how many lanes a road has
- `name=Broadway` designates a street name
- `access=private|permissive` describes the level of access on a road
- `service=parking_aisle|driveway` further specifies the type of `highway=service`

### Oneways

Oneways are mapped by simply adding a `oneway=yes` tag to the road's way. Keep in mind that ways have a directionality. So the road will be a oneway in the direction of the way. If you need to change the flow of the one way, you have two options:

- Change the direction of the way (`Tool > Reverse Ways` in JOSM or the `<<` context icon on iD)
- Or tag with `oneway=-1` - use this approach where the way's directionality already governs another attribute such as bus route.

![tagging a oneway](https://s3.amazonaws.com/f.cl.ly/items/1W0M081C2W3K0j0p1I2r/oneway.gif)

OpenStreetMap Wiki: [Key:oneway](http://wiki.openstreetmap.org/wiki/Key:oneway)

### Turn restrictions

Turn restrictions are rules that disallow certain turn maneuvers. Here's for instance a "no right turn" sign.

![](https://farm3.staticflickr.com/2900/14360050862_ef35f7ffa8_b.jpg)

To map turn restrictions in JOSM, use the **turnrestrictions** plugin. Once enabled, you can activate a new turn restriction panel from the `Windows > Turn Restriction` menu item.

Once enabled, create new turn restrictions or edit existing ones from the panel. Here is an example of how to create a simple "no right turn" restriction. We're selecting the way we can't take the right turn from as "from" object, the way we can't take the right turn to as "to" object and then we specify that the restriction is a "no right turn" restriction. As we save the turnrestrictions dialog warns us that there is no "via" object defined. It is not strictly required to have one, but is good practice, so we define one.

![](https://s3.amazonaws.com/f.cl.ly/items/24173W1U033a193q2l1F/turn.gif)

Turn restrictions can get more complex quickly, so before you create or edit turn restrictions, make sure you read through and understand all available documentation on the OpenStreetMap wiki.

*Video: [How to edit turn restrictions in JOSM](https://www.youtube.com/watch?v=0SdixDJAED0)*

*OpenStreetMap Wiki: [Relation:restriction](http://wiki.openstreetmap.org/wiki/Relation:restriction)*

### Simple classification guide

One of the more subtle skills to learn in OpenStreetMap is how to properly classify roads. The `highway` tag has more than eight values for roads, another five-plus for non-vehicular traffic, and a series of secondary tags. What's more, highway classifications are highly country specific and follow different conventions on a country by country basis.

Here's a quick guide on how to go about working with road classifications in OpenStreetMap.

1. Follow existing classifications. Don't change classifications and follow the conventions you see on the local map for new data.
2. The smallest roads in a network are the easiest ones to identify and also the ones you'll wind up adding most. For minor roads, prefer `highway=residential` in built up residential areas, `highway=unclassified` for everything else.
3. For all other cases, use `highway=road`

For a full reference on highway mapping, look at the *[wiki entry for the highway tag](http://wiki.openstreetmap.org/wiki/Key:highway)*.

### Intersections

The intersection between a road and another feature must always be defined. Where they meet, there is either an intersection, a tunnel or a bridge.

#### Simple intersections between two roads

To create a simple intersection between two roads, just make sure to connect the two roads with a node.

![show how 2 roads connect](https://s3.amazonaws.com/f.cl.ly/items/1b0K0E2b401E0U2U1H1A/intersect.gif)

#### Tunnel

A tunnel carries the `tunnel=yes` and a `layer=` tag that is one lower than the `layer=` tag of the feature it intersects with (default `layer` value is 0). The road is *not* connected with the other feature. Split ways where the tunnel starts

![show how to map a tunnel](https://s3.amazonaws.com/f.cl.ly/items/0e3S3F3j1N000w1R1d2x/tunnel.gif)

A building passage is a special type of tunnel that passes through a building. To map a building passage, connect the road where it intersects with the building outline with nodes, then tag the portion of the road that intersects with the building with `tunnel=building_passage`.

![map a building passage](https://s3.amazonaws.com/f.cl.ly/items/1v1E0Z2P0C3X1K1h0Q1M/building-passage.gif)

*OpenStreetMap Wiki: [Key:tunnel](http://wiki.openstreetmap.org/wiki/Key:tunnel)*

#### Bridge

In addition to the road's `highway=*` tag, a bridge carries the `bridge=yes` and a `layer=` tag that is one higher than the `layer=` tag of the feature it intersects with (default `layer` value is 0).

![show how to map a bridge](https://s3.amazonaws.com/f.cl.ly/items/1v1P2S3P35292a1m2a0m/bridge.gif)

*OpenStreetMap Wiki: [Key:bridge](http://wiki.openstreetmap.org/wiki/Key:bridge)*

#### Railroad crossing

Map a railroad crossing similar to an intersection between two roads by connecting the road and the railroad with a node. Then tag the node with `railway=level_crossing`. Do not confuse this tag with `railway=crossing` which is only for pedestrian crossings.

![map a level crossing](https://s3.amazonaws.com/f.cl.ly/items/1q3o381b0K3r3x291J0E/level_crossing.gif)

*OpenStreetMap Wiki: [Tag:railway=level_crossing](http://wiki.openstreetmap.org/wiki/Tag:railway%3Dlevel_crossing)*

#### Roundabouts

Map a roundabout by tracing the circular road and tag it with `junction=roundabout`. For the road classification, use the highest classification of all roads connected to the roundabout. The `junction=roundabout` tag implies a oneway - make sure that the directionality of the way is correct.

![ezgif-1791703736](https://cloud.githubusercontent.com/assets/12744420/10310207/745ec272-6c5e-11e5-8d4c-5727e8b5d42e.gif))

#### Complex intersections

In a complex intersection involving multiple carriage ways trace the roads so that they reflect the flow along the main carriages and make sure that oneways make sense.

![](https://s3.amazonaws.com/f.cl.ly/items/0M3S232n2V342Y3T2n1Y/Screen%20Shot%202015-01-04%20at%2010.34.51%20PM.png)

## Buildings

Tracing buildings takes good imagery and patience. Take your time and pay attention to angularity, alignment between buildings and reflecting the regularities between buildings. Buildings are traced as outlines of *where the building meets the ground*. This last piece is important. The roof outline is often easier to see in the imagery so you'll find it often traced in OpenStreetMap but it's wrong and needs to be shifted to the ground outline.

![505kyfalbo](https://cloud.githubusercontent.com/assets/126868/6914386/8d115556-d7a7-11e4-9f04-7291331e7ef8.gif)

The main challenge with tracing buildings is lack of detail in imagery. Where you don't find good enough imagery for tracing a building, just don't trace it. 

Here are a couple of JOSM specific tips to trace buildings effectively.

For tracing buildings, use the **buildings plugin**. Once enabled, a new building tool will be available in the edit toolbar on the left. The building tool `B` will draw rectangular shapes tagged `building=yes` for you. To draw buildings parallel to each other, draw the first building, select it, then draw subsequent buildings.

![](https://s3.amazonaws.com/f.cl.ly/items/3A2T0l0Y3x0N030w090F/building.gif)

If you draw closed ways free hand, use `Tools > Orthogonalize Shape` or press `Q` to square out buildings like so:

![](https://s3.amazonaws.com/f.cl.ly/items/3U3c1S1V2X1Q1h3s0845/Screen%20Shot%202014-12-15%20at%206.35.04%20PM.png)

Use auxiliary lines to align protruding portions of a building:

![](https://s3.amazonaws.com/f.cl.ly/items/0s3G3T200b1C3d3i0x2Y/buildingalignment.gif)

To align previously traced buildings neatly, select them, and then select two reference nodes to create an alignment axis and orthoganalize `Q` the selection.

![3zpk8nxbdt](https://cloud.githubusercontent.com/assets/126868/6900081/d65cf23c-d721-11e4-82f9-7084b11bb41f.gif)

You can use split buildings temporarily with `Tools > Split Way` or pressing `P` to orthogonalize portions of a building before reconnecting the with `Tools > Connect Way` or pressing `C`:

![](https://s3.amazonaws.com/f.cl.ly/items/151R161W3i2c043q1z0B/straightenc.gif)

Here is a quick end to end walkthrough of how to trace a building:

![](https://s3.amazonaws.com/f.cl.ly/items/3T0Y0h390L3l19000s2h/buildings.gif)

*OpenStreetMap Wiki: [Key:building](http://wiki.openstreetmap.org/wiki/Key:building)*

*Video: [Tracing buildings with JOSM](https://www.youtube.com/watch?v=9GRIHSAAkSs)*

## Points of interest

"Point of interest" is a general term for a real world point-like feature noteworthy enough to include it on a map. Some examples are restaurants, cafés, shops, banks, churches, public toilets and water fountains. There's not a single point of interest tag key in OpenStreetMap but a variety that can be used for mapping a point of interest: `amenity=`, `shop=`, `tourism=` are some examples.

*OpenStreetMap Wiki: [Key:amenity](http://wiki.openstreetmap.org/wiki/Key:amenity), [Key:tourism](http://wiki.openstreetmap.org/wiki/Key:tourism), [Key:shop](http://wiki.openstreetmap.org/wiki/Key:shop), [Key:leisure](http://wiki.openstreetmap.org/wiki/Key:leisure)*

### Simple point of interest

The simplest way to map a point of interest is to create a single node and add corresponding tags. Here's an example of a fountain mapped in OpenStreetMap:

![](https://s3.amazonaws.com/f.cl.ly/items/2a0E2w0u2U0D0t2b1Z3Y/fountain.gif)

Here's an example of a restaurant:

![](https://s3.amazonaws.com/f.cl.ly/items/1R3K0A1p0C1G043n1o3d/komi.gif)

### Areas as points of interest

Wherever you can clearly determine the extent of a "point" of interest, map it. A good example are parks, here is Folger Park in Washington DC. The Park is mapped as a closed way tagged `leisure=park`. Note how the way follows the exact outline of the park.

![](https://s3.amazonaws.com/f.cl.ly/items/0V2N0n290Z1L0H1h2b1e/Screen%20Shot%202015-01-10%20at%208.29.39%20AM.png)

### Building as point of interest

Sometimes the building itself is considered the point of interest. Think for instance of a MacDonalds restaurant in an urban multi-use building versus a MacDonalds drive through in a suburban strip mall. Or - often easy to spot from satellite imagery - think of a place of worship like a church. In such cases the building itself should be tagged as a point of interest. Here's a church that has first been mapped as a single node in a building. The example shows how all tags from the node are transferred to the building and then the node is removed.

![](https://s3.amazonaws.com/f.cl.ly/items/2m0k0v333M1H0i1t3p1V/church.gif)

### Schools and universities

Schools can just be mapped as a simple node tagged `amenity=school`. But often schools occupy an entire building or a piece of land. School grounds, the terrain on which a school sits, are mapped as `amenity=school`. The buildings of a school are mapped as `building=school`. Mapping schools as just a simple node is fine. However, wherever appropriate, map a school's ground and buildings as ways.

An example where a school *does not* occupy the entire building:

![](https://s3.amazonaws.com/f.cl.ly/items/0H2W3b401X3H0r0O011s/Screen%20Shot%202015-01-09%20at%206.09.01%20PM.png)

An example where a school *does* occupy an entire building:

![](https://s3.amazonaws.com/f.cl.ly/items/0r3q0C0w2L0C3n3d2f11/Screen%20Shot%202015-01-09%20at%206.18.28%20PM.png)

An example where a school occupies its own school grounds:

![](https://s3.amazonaws.com/f.cl.ly/items/1W1A1p0U3z3D3E3g183M/highschool.gif)

Universities are similar:

![](https://s3.amazonaws.com/f.cl.ly/items/102S1D1Z472x213M2b0Y/university.gif)

*OpenStreetMap Wiki: [Tag:amenity=school](http://wiki.openstreetmap.org/wiki/Tag:amenity%3Dschool), [Tag:building=school](http://wiki.openstreetmap.org/wiki/Tag:building%3Dschool), [Tag:amenity=university](http://wiki.openstreetmap.org/wiki/Tag:amenity%3Duniversity), [Tag:building=university](http://wiki.openstreetmap.org/wiki/Tag:building%3Duniversity), [Tag:amenity=college](http://wiki.openstreetmap.org/wiki/Tag:amenity%3Dcollege)*

## Streams and Rivers

Trace small streams as just a way tagged with `waterway=stream`. The way's direction signals the direction in which the water flows. For larger rivers, trace the center of the river as `waterway=river` and in addition the river banks with `natural=water` and `water=river` tags. The name of the river always sits on the waterway. See here for an example:

![](https://s3.amazonaws.com/f.cl.ly/items/460R352M0H301L2Y1Q3T/river.gif)

Islands in rivers are mapped as relations of `type=multipolygon`. Observe how on a multipolygon the `natural=water` and `water=river` tags sit on the multipolygon relation and not on the way:

![](https://s3.amazonaws.com/f.cl.ly/items/0t0A0q06130m0O1c3I19/multiriver.gif)

*Video: [Map a river island](http://cl.ly/0M0m2C2t2T3g)*

*OpenStreetMap Wiki: [Tag:waterway=river](http://wiki.openstreetmap.org/wiki/Tag:waterway%3Driver)*

## Coming soon

- Walking and cycling paths
- Places (city versus village versus suburb versus neighborhood)
- Lakes
- Tracing highway areas