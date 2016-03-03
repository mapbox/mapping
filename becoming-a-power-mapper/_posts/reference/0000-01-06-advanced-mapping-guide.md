---
title: Advanced mapping guide
---

## Roads
**Neighborhood grid**
Residential buildings are usually located on a `residential` or `living_street` and has access to a road only on one side, and optionally on the backside via a `service alleyway`. A building with residential roads on multiple sides is a sign of mistaking building shadows for streets. The street grid in an an area will have repeating patterns that make it easy to guess how the roads are laid even if they are obscured by trees.
![untitled](https://cloud.githubusercontent.com/assets/126868/9808707/434854d4-587f-11e5-9132-c9e0824bd9e5.gif)

## Buildings
**Parallel buildings** can be traced using the [building tools plugin](). Select a building and using the tool align subsequent buildings to the first one in one step.
![untitled](https://cloud.githubusercontent.com/assets/126868/9729213/73f5971e-562b-11e5-8c86-a1fa91eb969e.gif)
You can use the area extrude tool (x), to quickly add details to the outlines by creating new nodes (double click) and then dragging the faces.
![untitled](https://cloud.githubusercontent.com/assets/126868/9730603/419f04bc-5635-11e5-8ab8-bda7b1223892.gif)

**Compound buildings** can be constructed using simple primitives and joining the overlapping areas (Shift+J)
![untitled](https://cloud.githubusercontent.com/assets/126868/9731646/c5816cd8-563b-11e5-84c4-497d9ac7536f.gif)

Read also the blog post [Fast building tracing with JOSM](https://www.mapbox.com/blog/fast-building-tracing/)

## Parking
**Individual parking spaces**
Draw a box enclosing the parking spaces and use the [terracer plugin](http://wiki.openstreetmap.org/wiki/JOSM/Plugins/Terracer) to create a grid. Replace the default `building=yes` tag with `amenity=parking_space`. If you created adjacent grids, you would want to use the validator to automatically merge the overlapping nodes.
![untitled](https://cloud.githubusercontent.com/assets/126868/9601159/7ae06fd6-50bd-11e5-85ac-4fc3d00d7fbb.gif)

## Tagging driveway through a building

![screen shot 2015-05-28 at 12 40 31 pm](https://cloud.githubusercontent.com/assets/10308123/7854419/f19e7898-0536-11e5-8e57-ffa455325588.png)

Relevant tagging option for building would be 

 `building=roof` and `layer=1`  

Highway road under the roof tagging options

```
covered=yes
highway=footway
highway=residential
highway=service
```

## Tagging stadium tracks

![image](https://cloud.githubusercontent.com/assets/369696/7835918/184508f2-0485-11e5-8378-b7b405c7c843.png)

Relevant tagging option for Stadium would be 

- trace centerline of track  as line (`leisure=track;area=no`)
- connect centerlines with surrounding foot paths or streets where possible