---
title: The OpenStreetMap data model
---

In OpenStreetMap, each feature is described as one or more geometries (think for instance of a river's shape) with attached attribute data (think of the river's name). Geometries are described with three different *elements*: *nodes*, *ways* and *relations*. Attributes are described as *tags* that can be part of a node, a way or a relation.

Nodes are the equivalent of a point, ways are like lines that connect points and relations are collections of points or ways that represent a larger whole. This is easiest to understand with a couple of examples.

## Nodes

Nodes are used to represent any kind of point type feature or just to designate a name for a point of interest in the vicinity. Here's a node representing a café:

![node-example1]({{site.baseurl}}/images/node-example1.png)

and here's one representing New York City:

![node-example-2]({{site.baseurl}}/images/node-example-2.png)

## Ways

A way is a line feature *connecting two or more nodes* - like a road here:

![way-example-1]({{site.baseurl}}/images/way-example-1.png)

If you close a way - by connecting its end to its start, you can map area type features like this building here:

![way-example-2]({{site.baseurl}}/images/way-example-2.png)

or this park:

![way-example-3]({{site.baseurl}}/images/way-example-3.png)

Nodes are usually just the items that define a way. But nodes sitting on a way can have their own significance. In this example the node is part of 10th Street and M Street and it also denotes that there's a traffic light.

![way-example-4]({{site.baseurl}}/images/way-example-4.gif)

## Tags

Before we hop to the third element next to nodes and ways - relations, let's look at tags. You've seen them now already a couple of times in the examples above, like in this café node:

![osm-tag]({{site.baseurl}}/images/osm-tag.png)

Any point type feature is a node. Whether the node designates a café, a school, a fire hydrant, a tree, a park, a mountain peak is entirely up to how the node is tagged. Any line type feature is a way. Whether the way is a road, a building, a lake, a railway, a cycleway is again, defined by how it is tagged.

Tags can be on any element: on nodes, ways and relations.

## Relations

Relations are used to organize multiple nodes or ways into a larger whole. Take here for instance the bus route 23 running through 3 different ways.

![relations]({{site.baseurl}}/images/relations.gif)

The type of relation that you'll probably deal most with describes an area with punched out holes - a so called *multipolygon*.  Here is an example of a multipolygon building with a yard. It consists of 2 ways with each multiple nodes. One way describes the *outer* wall of the building, the other one the *inner* wall. The ways are part of a relation of the type `type=multipolygon`, the outer way has the role `outer` and the inner way has the role `inner`. Note: the `building=yes` tag is on the relation (not on the way).

Your OpenStreetMap editor will take care of creating multipolygons for you so don't worry if this seems dense for now. If you need to fix a multipolygon, this is a good section to come back and review.

![multipolygon]({{site.baseurl}}/images/multipolygon.gif)

## Further reading

To learn more about the OpenStreetMap data structure, take a look at these resources:

-   OpenStreetMap Elements <http://wiki.openstreetmap.org/wiki/Elements>
-   Multipolygons <http://wiki.openstreetmap.org/wiki/Relation:multipolygon>
