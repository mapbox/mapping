---
title: Mapping guide for turn lanes from imagery
---

## What is a turn lane

A turn lane is an auxiliary lane demarcated on the road to specify directions to ongoing vehicles.
Turn lanes serve two purposes:
 * Provide directional information to the ongoing vehicles and
 * Provide the lane information to be chosen for the vehicles changing their direction

## Types of turn lanes

There are a total of 12 different turn lanes demarcated on the roads. They are:

Turn Lane | Representation
--- | ---
left | ![left](https://cloud.githubusercontent.com/assets/8401827/13217928/1d2fc24e-d98c-11e5-9d20-c526fe6e7f01.jpg)
right | ![right](https://cloud.githubusercontent.com/assets/8401827/13217945/424f36e0-d98c-11e5-99e7-9d178f2529a1.jpg)
through | ![through](https://cloud.githubusercontent.com/assets/8401827/13214156/f885d4b4-d973-11e5-9fb7-e9ecb70a932b.jpg)
left_through | ![through left](https://cloud.githubusercontent.com/assets/8401827/13217986/80786072-d98c-11e5-99c6-db8665977550.png)
right_through | ![through_right](https://cloud.githubusercontent.com/assets/8401827/13218022/b8aa9352-d98c-11e5-87c2-d8c17ee68305.jpg)
left_through_right | ![leftthroughright](https://cloud.githubusercontent.com/assets/8401827/13218061/027e10ee-d98d-11e5-9747-c6867e0787b0.JPG)
left_right | ![left_right](https://cloud.githubusercontent.com/assets/8401827/13217579/8f833c66-d989-11e5-9b2c-dc98fdff09b2.png)
slight_left | ![slightleft](https://cloud.githubusercontent.com/assets/8401827/13218207/e450feaa-d98d-11e5-938c-a3956de2f7ba.png)
slight_right | ![slightright](https://cloud.githubusercontent.com/assets/8401827/13218219/07052b56-d98e-11e5-8fc0-82b945fb95c6.png)
merge_to_left | ![merge to left](https://cloud.githubusercontent.com/assets/8401827/13218244/2ca1fd6c-d98e-11e5-8be9-cb64271f5991.png)
merge_to_right | ![fahrbahn_2](https://cloud.githubusercontent.com/assets/8401827/13218183/bc5d0790-d98d-11e5-9781-307f80cc0732.png)
bothways | ![turn lanes both ways](https://cloud.githubusercontent.com/assets/8401827/13217721/a2594d48-d98a-11e5-87f1-11e11ebf57ec.png)

  ![](http://pdd.ua/r/r/EEB7A996-D8DC-40FC-87EA-01F3E115BC7C/m_1.18_4.jpg)
  _road markings on the ground_ - © [pdd.ua](http://pdd.ua/ua/34/1.18/)


## Other Markings apart from turn:lanes

### HOV

[HOV](http://wiki.openstreetmap.org/wiki/Key:hov) is a symbol demarcated on major roads generally used to indicate vehicle occupancy requirements.

  ![xyz](https://cloud.githubusercontent.com/assets/8401827/13495163/13ecbc06-e16f-11e5-90d4-1bd1c8bb8b5e.png)

In the above cases tag given to the road are `hov:lanes=designated|yes|yes|yes`

## Pre-requirements for mapping a turn lane in JOSM

Before mapping turn lanes activate the following preferences in JOSM to visualize the mapped turn lanes: `preferences > Map Settings`

* *`Map Paint Styles > Lane and road attributes`*

  ![lane_and_road_attributes](https://cloud.githubusercontent.com/assets/13744156/13218788/c55fab96-d991-11e5-89b2-b281986d704e.gif)

* *`Tagging Presets > lane attributes`*

  ![tagging_presets](https://cloud.githubusercontent.com/assets/13744156/13218902/ad15c902-d992-11e5-872b-1bde24f27f5b.gif)

* Filter out non road features with inverse filter: `boundary: | leisure: | landuse: | waterway: | amenity: | natural: | building:`

## Mapping a turn lane

* Check all roads in the imagery for turn lanes at junction points

  ![roads_markings](https://cloud.githubusercontent.com/assets/126868/11710074/b58b52e4-9f42-11e5-971a-000a699a0b6d.png)

* Split the road into segments based on the total number of lanes for the segment

  ![residential_road](https://cloud.githubusercontent.com/assets/369696/13223732/34cf7ffa-d98e-11e5-9a33-8f40f6498004.png)

* For each road segment tag the turn lanes based on the road markings in the direction of the way. Eg. `turn:lanes=left|left;through|through`. Check [OSM turn:lanes](http://wiki.openstreetmap.org/wiki/Key:turn:lanes) for reference.

  ![oneway_turn:lanes_tagging](https://cloud.githubusercontent.com/assets/8401827/13252110/a6bdea8a-da5a-11e5-8c79-aa15c0c15f68.gif)

* For bi-directional segments, use `turn:lanes:backward=` and `turn:lanes:forward=` to specify turn lanes in each direction.

  ![bidirectional_tagging](https://cloud.githubusercontent.com/assets/13744156/13219545/acd78f62-d996-11e5-85eb-3e05a7b79d3b.gif)

* Verify correct tagging using the `Lane attributes` style

  ![lane_attributes](https://cloud.githubusercontent.com/assets/8401827/13251884/ddcbdd54-da58-11e5-86ae-c4a2918c9577.gif)

## turn:lanes and relations

We use [relations](http://wiki.openstreetmap.org/wiki/Relation) for different purpose – for indicating [turn restriction](http://wiki.openstreetmap.org/wiki/Relation:restriction) or collect separate ways into solid [route](http://wiki.openstreetmap.org/wiki/Relation:route).
​
JOSM help us to handle them. But sometimes we are faced with not properly denoted relations. JOSM will inform about it while uploading our changes. You may [ignore messages of level "Warnings"](https://github.com/mapbox/mapping/issues/153#issuecomment-185679507) (if you only split ways and didn't edit relations manually) but you have to fix all "Errors".

## Further reading

* [Mapping turn lanes: OSM wiki](http://wiki.openstreetmap.org/wiki/Key:turn)
* [Mapping turn lanes in OpenStreetMap by Andrey Golovin](https://www.mapbox.com/blog/turn-lanes-mapping/)
* Diary post by @Andygol : [Mapping turn lanes in OpenStreetMap](http://www.openstreetmap.org/user/andygol/diary/35489#newcomment)
