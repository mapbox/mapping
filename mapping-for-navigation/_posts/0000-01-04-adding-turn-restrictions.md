---
title: Adding turn restrictions
---
## What are turn restrictions?

A turn restriction at a junction is represented by a [relation](http://wiki.openstreetmap.org/wiki/Relation) that has a set of tags describing the type of turn restriction. Turn restrictions, like `No-left-turn` and `No-U-turn`, regulate traffic flow at intersections and accurately mapping them is critical for calculating valid routes on a map. 

![image](https://cloud.githubusercontent.com/assets/3423533/15504805/5d678d70-21de-11e6-8290-d20db2380d4d.png)

### How to interpret turn restriction:

**The best practice to interpret a TR is always to assume you as a rider.** 
This helps in analysing the TR board quickly . The below table explains how to understand the turn restriction and what are components we need to tag in relation.

**from** : It indicates the road where you are driving.

**via** : The  junction or road where you need to cross for making turn.

**to**: The street you want to go. 



🔴  - Red indicates the route where you should not proceed.

🔵  - Blue indicates the route where you can proceed.


| Turn restriction | Sign |  Restriction modelling | Tagging schema   | Node/Way/Relation | 
|------------------|------|---|---|-----------|
| **no_left_turn**     | ![image](https://user-images.githubusercontent.com/20293098/34515970-c23d843e-f09a-11e7-8c39-ae1aee945b45.png) | ![image](https://user-images.githubusercontent.com/20293098/34552143-c9d89188-f145-11e7-8f20-8c8d3cef0f47.png) |<ul><li>**from**:`X-Road`</li><li>**via**:`Y-node`</li><li>**to**:`Z-Road`</li> <li>**restriction**=`no_left_turn`</li><li>**type**=`restriction`</li></ul> |[Relation](https://wiki.openstreetmap.org/wiki/Relation)|
| **no_right_turn**    | ![image](https://user-images.githubusercontent.com/20293098/34516051-298ada7e-f09b-11e7-99ca-ff011e6fca20.png) | ![image](https://user-images.githubusercontent.com/20293098/34519854-198b5840-f0ac-11e7-85b5-882c558cee70.png) | <ul><li>**from**:`X-Road`</li><li>**via**:`Y-node`</li><li>**to**:`Z-Road` </li> <li>**restriction**=`no_right_turn`</li><li>**type**=`restriction`</li></ul>|[Relation](https://wiki.openstreetmap.org/wiki/Relation)|
| **no_u_turn**        | ![image](https://user-images.githubusercontent.com/20293098/34516091-60d7ec6a-f09b-11e7-8c8e-580b9ddeac83.png) |  ![image](https://user-images.githubusercontent.com/20293098/34519894-50bcaaf8-f0ac-11e7-986e-da81b5e993f3.png) ![image](https://user-images.githubusercontent.com/20293098/34519907-6681e7b8-f0ac-11e7-995d-5e347a30c578.png) | <ul><li>**from**:`X-Road`</li><li>**via**:`Y-node`</li><li>**to**: `X-Road`</li> <li>**restriction**=`no_u_turn`</li><li>**type**=`restriction`</li></br><li>**from**: `X-Road`</li><li> **via**: `Y-Road` </li><li>**to**: `Z-Road`</li><li>**restriction**=`no_u_turn`</li><li>**type**=`restriction`</li></ul> |[Relation](https://wiki.openstreetmap.org/wiki/Relation)|
| **no_straight_on**   | ![image](https://user-images.githubusercontent.com/20293098/34516148-c35afb8e-f09b-11e7-8a49-b89764c9f4e5.png) | ![image](https://user-images.githubusercontent.com/20293098/34519965-ac4fe632-f0ac-11e7-8956-df3cfc2933f8.png) | <ul><li>**from**:`X-Road`</li><li>**via**:`Y-node`</li><li>**to**:`Z-Road`</li><li>**restriction**=`no_straight_on`</li><li>**type**=`restriction`</li></ul>|[Relation](https://wiki.openstreetmap.org/wiki/Relation)|
| **no_turns**         | ![image](https://user-images.githubusercontent.com/20293098/34516200-0f55d9dc-f09c-11e7-81b7-153e0bacc22a.png) | ![image](https://user-images.githubusercontent.com/20293098/34550551-e83205f0-f137-11e7-8ce4-866e292b2dbb.png)  | <ul><li>**from**: `X-Road` </li><li> **via**: `Y-node` </li><li> **to**: `Z-Road` </li> <li>**restriction**=`only_straight_on`</li><li>**type**=`restriction`</li></ul> | [Relation](https://wiki.openstreetmap.org/wiki/Relation)|
| **no_left_or_u_turn**| ![image](https://user-images.githubusercontent.com/20293098/34516234-2edbddd8-f09c-11e7-8f07-2ac9214f3a0c.png) |  ![image](https://user-images.githubusercontent.com/20293098/34550597-490fc3e4-f138-11e7-9e6b-9c1f206ee187.png) |  <ul><li> **from**: `X-Road` </li><li> **via**: `Y-node` </li><li> **to**: `Y-Road` </li><li>**restriction**=`no_left_turn`</li><li>**type**=`restriction`</li></br><li>**from**: `X-Road`</li><li> **via**: `Y-Road`</li><li> **to**: `Z-Road`</li><li>**restriction**=`no_u_turn`</li><li>**type**=`restriction`</li></ul>| [Relation](https://wiki.openstreetmap.org/wiki/Relation)|




## Using OSM Navigation Map

The [Navigation map](http://mapbox.github.io/osm-navigation-map/) helps us in recognizing the detected signage overlay from Mapillary on the map. These signage are represented using small circles in 3 colours:

- **Green** - to be validated
- **Blue** - Reviewed and found valid
- **Yellow** - Reviewed and found redundant
- **Red** - Reviewed and found invalid

When we click on the green circle, the area is automatically opened in JOSM and popup to select the review is opened in the Navigation map. The same can be opened in iD editor by clicking on **Edit Map** button on top right of the popup. Once done with the review, please add your OSM username.

![](https://cloud.githubusercontent.com/assets/126868/16987647/ffa78c4a-4eaa-11e6-8bfd-b509b20e482b.gif)


## Mapping turn restrictions with iD editor

The new version of iD, the web editor for OpenStreetMap, makes it even simpler to add turn restrictions to OpenStreetMap.

### Adding Absolute Turn Restriction:
![epl4xsg](https://cloud.githubusercontent.com/assets/17887418/17285386/fe7453f6-57df-11e6-9d1d-e65ba060bc0b.gif)

### Adding Conditional Turn Restriction:
 ![conditional tr](https://cloud.githubusercontent.com/assets/17887418/17285391/055b6240-57e0-11e6-9c9f-16880b5c6cd2.gif)

#### Mapillary overlay and Traffic Sign Overlay:
 Mapillary has an efficient tool in iD that helps in seeing detected restrictions. Here's how you enable it:
 
 ![traffic overlay mapillary](https://cloud.githubusercontent.com/assets/17887418/17285393/069163a8-57e0-11e6-9564-293d91b276bc.gif)

#### Pain Points in adding Turn Restrictions in iD editor:
* iD editor provides no way of adding a `no_u_turn` restrictions via way. If there is a via way `no_u_turn`, you have to add it using JOSM editor.
 
 ![image](https://cloud.githubusercontent.com/assets/17887418/17285567/1a145830-57e1-11e6-8e2f-0581bc16695e.png)

* In certain cases, adding [no_u_turn turn via node](https://github.com/mapbox/mapping/issues/213#issuecomment-234221535) is also not possible. For such cases, it is better to add it using JOSM.


# Mapping turn restrictions with JOSM

In order to be able to map traffic data easily, there are some plugins that JOSM needs to be configured with:

  - **Plugins to be downloaded**:
      - [Mapillary plugin for JOSM](http://blog.mapillary.com/update/2015/06/25/josm-mapillary.html): This plugin allows the user to view mapillary images in JOSM.
      - [Turn restrictions plugin for JOSM](http://wiki.openstreetmap.org/wiki/JOSM/Plugins/Turnrestrictions): This plugin allows to add turn restrictions to the selected roads with ease.

  ![mapi_plugins](https://cloud.githubusercontent.com/assets/1933377/11438854/cf4768fa-951d-11e5-819a-737d2e03342c.gif)
  
  - **Map-paint styles to be added**:
      - traffic_signs: It displays all the existing traffic signs that have been already mapped on OSM.

  ![mapi_paint](https://cloud.githubusercontent.com/assets/1933377/11442184/3493f780-9539-11e5-985a-ac6a9095dcee.gif)

## Guide to use the mapillary and turn restriction plugins
  
  **Using the Mapillary plugin** 
  
  - The Mapillary imagery can be added by clicking on `imagery -> Mapillary` in JOSM. This will add the mapillary layer 
      over the dataset layer.
  - The explanation for how the plugin works can be found [here](http://blog.mapillary.com/update/2015/06/25/josm-mapillary.html).
 
    **Note**: Every time a new data layer is added, you need to delete the existing **Mapillary layer** and add a new one

**Using the turn restriction plugin**
  - The explanation for how the turn restriction plugin works
      can be found [here](http://overpass-turbo.eu/s/gTO).


## Start mapping Turn Restrictions

- This **[Over-pass query](http://overpass-turbo.eu/s/grv)** can be used to get the current count of turn-restrictions present in a city that one is going to work on. This will help us in determining the current state of restrictions and further help in calculating the number of restrictions added by the team.

**Note:** Change the city name in the above query

- Use the **[navigation data coverage on OSM](http://mapbox.github.io/osm-navigation-map/#9.56/37.8188/-122.5575) map** to spot the Mapillary signage detections.
- Turn on the `Turn Restrictions`, `Oneways` and `Mapillary Street Photos` layers in the above map
- Click on the turn-restriction traffic symbols detected by Mapillary (which are denoted by green dots on the map) for it to open in JOSM.

  ![navigation](https://cloud.githubusercontent.com/assets/4470913/15466843/26bd5588-20f9-11e6-9eaa-0126e5c83c39.gif)

- In the Mapillary layer in JOSM, detected traffic signs are represented by a tiny `red triangle` next to the green arrow. Please note that this layer might not be up-to-date.

  ![screen shot 2015-11-27 at 1 41 55 pm](https://cloud.githubusercontent.com/assets/4470913/11436699/1fa70b72-950d-11e5-8e05-9e09013c1f64.png)

- Probe the previous and next images as well as the satellite imagery data to get a clear idea of the surroundings and then compare them with the existing Mapillary image to find the exact location of the `traffic-sign`.

  ![turn_res](https://cloud.githubusercontent.com/assets/1933377/11443497/a109430c-9543-11e5-8ef9-6907269d6145.gif)

- Be cautious while adding an `U-turn` via a way in OSM, here is how you add it:
  - Select the participating ways
  - Go to `Presets -> Relations -> Turn Restrictions`
  - Select `no_u_turn` in the `Restriction` field from the drop-down and click on `New Relation`
  - In the `Members` section add the respective roles for all the ways enlisted


  ![u-turn](https://cloud.githubusercontent.com/assets/4470913/15538899/ae22ff9c-229c-11e6-8d82-08b9e18c5540.gif)


 **Note**
  - To get a better idea about the area/road and to see the clear image, always inspect multiple consecutive images.
  - With the help of the plugins, look for **traffic restrictions icons** at junctions which are already present on the road/area.
  - We should avoid adding `turn restriction` to roads that are leading to one-ways going in the opposite direction, like the example below. It will only result in redundant data:
  
   ![screen_shot_2015-11-30_at_11_36_26_pm](https://cloud.githubusercontent.com/assets/4470913/11480317/deeac0c6-97bc-11e5-8d0a-852e3ae2f69f.png)
  _Here we should avoid adding `turn-restriction` as it will result in redundant data_
   ![screen shot 2016-05-24 at 6 37 06 pm](https://cloud.githubusercontent.com/assets/4470913/15538956/1a068350-229d-11e6-9931-56770c643131.png)
  _This situation is a clear indication of a redundant restriction_
  - Add a conditional restrictions when specific conditions are written on the turn-restriction sign-board.
     - On certain times of the day. eg. Restriction during peak hours 7AM-10AM
     - On a certain day of the year. eg. Restriction on baseball game days only

## Adding Conditional turn restrictions

**Special cases**
* [Conditional restrictions](http://wiki.openstreetmap.org/wiki/Conditional_restrictions) during peak hours are common in SF. Tag them as `restriction:conditional=no_left_turn @ (Mo-Sa 07:00-09:00,16:00-18:00)`<br>![](https://cloud.githubusercontent.com/assets/4470913/14850426/9d4643f8-0c96-11e6-8c0c-dc94887e1613.png)
* Conditional restriction during baseball games. Ignore<br>
<img width="205" alt="screenshot 2016-04-27 16 51 33" src="https://cloud.githubusercontent.com/assets/126868/14850687/6208c57a-0c98-11e6-8535-2d434b9bf8fe.png">

* In the case below, we are leaning towards adding this as a regular `restriction` since it applies for all regular personal vehicles.

  ![screenshot 2016-05-02 12 01 18](https://cloud.githubusercontent.com/assets/12103383/14948422/b9f1838a-105d-11e6-9604-2781de0d6d96.png)

* If you come across the below instance where the restriction is applicable only on `School Days`. Per discussion we will be adding the restriction for `Monday - Friday`

  ![screen shot 2016-05-06 at 2 57 43 pm](https://cloud.githubusercontent.com/assets/1933377/15074787/7c6594d4-13be-11e6-9c01-1d277070960e.png)

## QA for turn restrictions

During turn restrictions mapping in various cities, we have come across certain special cases where we need to pay more attention while mapping. These cases are noted down here for your reference.

----

# Be cautious when you come across these turn restrictions

**1. Restrictions on Red**

Be careful with interpreting signage and always verify Mapillary signage overlay with the image and the kind of restriction. The image below shows a sign for no free right that Mapillary interpreted as `no-right-turn`. This is NOT a turn restriction. If you are not sure, consult the community before mapping. 
<br><img width="232" alt="screenshot 2016-04-26 21 39 06" src="https://cloud.githubusercontent.com/assets/126868/14825399/67567b40-0bf7-11e6-9b61-dc875160ccc1.png">

A similar restriction found in Canada depicts that **left turn** cannot be taken when the signal is red, otherwise it is permitted to turn left. We are **not** adding such turn restrictions.

![no_right_turn_on_red_sign](https://cloud.githubusercontent.com/assets/4470913/17021102/28acf658-4f63-11e6-8266-b380071706c4.jpeg)
_Picture by Share Bear - Own work - [Public Domain](https://commons.wikimedia.org/w/index.php?curid=8626974)_

**2. Location and bearing of Mapillary Signage overlay**

The location and bearing of the Mapillary photo is not reliable and is prone to usual GPS errors. Cross check the photograph with the map to confirm you are looking at the intersection from the correct bearing. This photograph is facing the reverse of actual heading.
<br><img width="835" alt="screenshot 2016-04-27 12 28 12" src="https://cloud.githubusercontent.com/assets/126868/14844241/91873ce8-0c73-11e6-9785-a591f8534f89.png">

**3. Single restriction per image detection**

Mapillary will detect only one sign type per image. Lookout for multiple restrictions in the image<br>
<img width="178" alt="screenshot 2016-04-27 17 49 34" src="https://cloud.githubusercontent.com/assets/126868/14851913/a6235e66-0ca0-11e6-8180-366006e7fc7b.png">

**4.  Careful with Turn restrictions plugin in JOSM**

Sometimes the **Turn restrictions plugin** does not detect the correct signs i.e. even though it's a `no-right-turn`, the plugin detects it as `no-left-turn`. So be extra sure before adding the restriction
![turn_restrictions_plugin_bug](https://cloud.githubusercontent.com/assets/4470913/15529626/4f438044-226c-11e6-919e-02481acb5ad1.gif)

**5. Advantage of previous/next images**

There might be an offset in the Mapillary images, that is the image may appear after/before the actual location. It is ideal to inspect the previous and next images and also look for road names and other clues from the satellite imagery to verify it's exact location and bearing.
![offset_mapillary](https://cloud.githubusercontent.com/assets/4470913/15539155/712f0296-229e-11e6-8675-fecc95f4be51.png)

**6. Temporary turn restrictions**

When the roads are in construction or under repair, you might see temporary turn restrictions placed similar to shown in the below image. We are not adding temporary turn restrictions.
![pjimage](https://cloud.githubusercontent.com/assets/8921295/17290390/d8808ac2-57fb-11e6-8816-d681033e2a8f.jpg)



**7. Restriction-ahead warnings**

In the below image, there is a no_left_turn sign board as detected from the Mapillary image. This sign board means that there is a ```no_turn_restriction``` ahead. But this signage itself is **not** a turn restriction, so we do not map this.
[![screenshot 2016-07-26 15 31 15](https://cloud.githubusercontent.com/assets/8921295/17133998/03bf2e10-5346-11e6-949f-dcd4f554560b.png)](https://cloud.githubusercontent.com/assets/8921295/17133964/e83159fc-5345-11e6-935a-5b535390f730.jpg)


# Different conventions for turn restrictions in different countries

### Canada

**Case:1**

The image below shows two signages, the first one is in French and translates to 'Wait for arrow to turn left' and the second one is a `no_u_turn`. In such cases, we ignore the the first signage and go ahead mapping `no_u_turn`.

[![screenshot 2016-07-26 14 34 36](https://cloud.githubusercontent.com/assets/8921295/17132558/efc2a398-533f-11e6-93d7-7dc0e87978ae.png)](https://d1cuyjsrcm0gby.cloudfront.net/4ZA3OT0nHoDQ7F7JILG-pg/thumb-2048.jpg)


**Case:2**


In the below image, the first board for ```no_left_turn``` says Monday to Friday 8am-10am and 3pm-7pm (Lun-Ven 8h-10h,15h-19h in French). The second board is a ```no_u_turn``` **except authorized vehicles**. In this case, first one would be a conditional turn restriction; second, an absolute ```no_u_turn``` turn restriction.

[![screenshot 2016-07-26 14 48 15](https://cloud.githubusercontent.com/assets/8921295/17132580/093ab860-5340-11e6-9863-ffe150f7c8c8.png)](https://d1cuyjsrcm0gby.cloudfront.net/IYi6WjwOQDnPW1HTTGyh8A/thumb-2048.jpg)

**Case:3**

The below image indicates that all the drivers (no matter the lane they are on) must follow this/these direction(s) at the intersection. This means that the driver needs to only turn right/left on the days mentioned in the sign and during that duration of the day.

![image](https://cloud.githubusercontent.com/assets/3423533/17128539/0b5166e0-532b-11e6-96e6-69d21603f183.png)

**Syntax to be used:** `restriction:conditional=only_right_turn @ (Mo-Fr 07:00-09:00,16:00-18:00)`

### Germany

In Germany, instead of signages to prohibit turns, the signages describe the legally allowed turns at the junction. Hence a signage for a no right turn will indicate only turns for left and straight.

![screen shot 2016-08-17 at 4 12 05 pm](https://cloud.githubusercontent.com/assets/11845908/17733853/568ce2b6-6496-11e6-8665-8983fe1c94db.png)

_An example of a `restriction=no_right_turn` traffic sign in Germany_

### Turn restriction signs of Germany and what it means:

![screen shot 2016-08-17 at 4 27 33 pm](https://cloud.githubusercontent.com/assets/11845908/17734070/a6125f5e-6497-11e6-8d70-d55248e938ec.png)

*Courtesy: [German wiki](http://wiki.openstreetmap.org/wiki/DE:Relation:restriction)*
 

**Reference**

- OSM tags for routing http://wiki.openstreetmap.org/wiki/OSM_tags_for_routing
- Turn restrictions http://wiki.openstreetmap.org/wiki/Relation:restriction
- Access restrictions http://wiki.openstreetmap.org/wiki/Key:access
- Conditional restrictions http://wiki.openstreetmap.org/wiki/Conditional_restrictions

**Spanish version [here](https://github.com/mapbox/mapping/wiki/Gu%C3%ADa-de-mapeo-para-a%C3%B1adir-restricciones-de-giro-utilizando-mapillary)!**