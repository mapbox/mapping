---
title: Remodeling Dual-carriageways
---

![]({{site.baseurl}}/images/dual-carriageway/1200px-German_Autobahn_1936_1939.jpg)

_A German dual carriageway in the 1930s ([Wikipedia](https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/German_Autobahn_1936_1939.jpg/1200px-German_Autobahn_1936_1939.jpg))_

> A divided highway (also separated highway) is any highway where traffic flows are physically separated by a barrier (example : grass, concrete, steel), which prevents movements between said flows.
>
> [OpenStreetMap wiki](https://wiki.openstreetmap.org/wiki/Editing_Standards_and_Conventions#Divided_highways)

We oftentimes come across cases where a bi-directional highway should be mapped as a dual-carriageway to better represent what's on the ground. OpenStreetMap mappers have adopted different approaches to mapping dual-carriageways based on the source of data, local community best practices and personal preference.

Our basic rule of thumb are:

- Keep things simple, add complexity only when necessary.
- Dual-carriageway should have a physical barrier visible from imagery or a road marking that shows its illegal to pass on the other side.
- Enough length of the physical divider is present.
- During remapping, all other elements (for example, turn lanes, turn restrictions, route relation, etc.) associated to the road should be re-tagged based on remodelled road.

### Identifying highway separators from imagery

Satellite imagery is the common reference to identify the physical barriers present between highways. There are two types of separators identifiable in satellite imagery.

| Barrier type      | Satellite view                                               | Streetlevel view                                               |
| ----------------- | ------------------------------------------------------------ | -------------------------------------------------------------- |
| **Concrete pavement** - Is a reservation area which separates the traffic between two carriageways. These separators can be paved or are commonly used to place traffic sign boards or for decorative purposes like trees. | ![]({{site.baseurl}}/images/dual-carriageway/satellite1.png) | ![]({{site.baseurl}}/images/dual-carriageway/streetlevel2.png) |
| **Cement blocks** - Is a modular concrete or plastic blocks employed to separate between two carriageways.| ![]({{site.baseurl}}/images/dual-carriageway/satellite3.png) | ![]({{site.baseurl}}/images/dual-carriageway/streetlevel1.png) |

This guide distills best practices in identifying these road separators and improving road network in OpenStreetMap by re-mapping bi-directional highways to dual-carriageways under various scenarios of existing data.


## Mapping bi-directional highway to a dual-carriageway


### General approach

<!-- https://www.openstreetmap.org/#map=18/37.955426/-121.281075 -->

| Before                    | After                     |
| ------------------------- | ------------------------- |
| [![][4ae13b0b]][4ae13b0b] | [![][082fb704]][082fb704] |

[4ae13b0b]: {{site.baseurl}}/images/dual-carriageway/add-a-way-before.png "Click to enlarge"
[082fb704]: {{site.baseurl}}/images/dual-carriageway/add-a-way-after.png "Click to enlarge"

In the above example, physical barrier is present at East Weber Avenue from North Stanislaus to Aurora Street. This highway section should be modelled as dual-carriageway. As the highway don't have any special tags like turn lanes or turn restriction, re-mapping to a dual-carriageway is straightforward. There are two different ways to remap a bi-directional highway to a dual carriageway.

**Option 1**

1.  Select the bi-directional highway.
2.  Align the existing highway to one side of the dual-carriageway.
3.  Trace the other segment of the dual-carriageway.
4.  Copy the tags from the original highway to the newly created way.
5.  Add **`oneway=yes`** for both ways (mandatory).
6.  Make sure all the highways issues associated with remodelled road are fixed like - alignment based on Satellite imagery, crossing, overlapping or unconnected highways.

![]({{site.baseurl}}/images/dual-carriageway/simple-add-a-way.gif)

**Option 2**

<!-- ![]({{site.baseurl}}/images/dual-carriageway/parallel-way-icon.png) -->

1.  Align the existing highway to one side of the dual-carriageway.
2.  Select the original way.
3.  Use the **Make parallel copies of ways** - (<kbd>Shift</kbd>+<kbd>P</kbd>) to create parallel highways.
4.  Click the **Make parallel copies of ways** (<kbd>Shift</kbd>+<kbd>P</kbd>).
5.  Drag to create a new way parallel to the selected way. This copies all the tags from the reference way.
6.  Connect and align both ways to the road network. Use **Merge Nodes** (<kbd>M</kbd>) or **Join Node to Way** (<kbd>J</kbd>).
7.  Add **oneway=yes** to both ways.
8.  Reverse (<kbd>R</kbd>) way direction of the copied way.

![]({{site.baseurl}}/images/dual-carriageway/parallel-a-way.gif)

### When turn lanes are present

<!-- https://www.openstreetmap.org/#map=20/37.83716908954435/-122.30457356404747 -->

| Before                    | After                     |
| ------------------------- | ------------------------- |
| [![][a907d766]][a907d766] | [![][55088a6b]][55088a6b] |

[a907d766]: {{site.baseurl}}/images/dual-carriageway/turnlanes-before.png "Click to enlarge"
[55088a6b]: {{site.baseurl}}/images/dual-carriageway/turnlanes-after.png "Click to enlarge"

Powell street was mapped as a bi-directional road. Turn lanes were added later on as `turn:lanes:forward` and `turn:lanes:backward`. When re-mapping as dual-carriageway, we will change the `turn:lanes:forward` and `turn:lanes:backward` to `turn:lanes`. To visualize and edit turn lanes, we will use the [Lanes and road attributes](https://josm.openstreetmap.de/wiki/Styles) map style and the [Turnlanes tagging](https://github.com/JOSM/turnlanes-tagging) plugin in JOSM. Check our guide on how to [activate the style and plugin]({{site.baseurl}}/mapping-for-navigation/adding-turn-lanes/#pre-requirements-for-mapping-a-turn-lane-in-josm) in JOSM.

<!-- Should we add instructions for activating paint style and plugin? -->

1.  Change the bi-directional highway to a dual-carriageway using the **Make parallel copies of ways**
    (<kbd>Shift</kbd>+<kbd>P</kbd>). ![]({{site.baseurl}}/images/dual-carriageway/turnlanes-make-dual.gif)
2.  Remove `turn:lanes:\**` added before. ![]({{site.baseurl}}/images/dual-carriageway/turnlanes-delete-tags.gif)
3.  Add the `oneway=yes` tag. Reverse (<kbd>R</kbd>) the way direction to follow the traffic flow.
    ![]({{site.baseurl}}/images/dual-carriageway/turnlanes-oneway.gif)
4.  Select the highway that needs turn lanes update. In this example, we will add `turn:lanes=left||**`.
    ![]({{site.baseurl}}/images/dual-carriageway/turnlanes-leftpipepipe.png)
5.  In the menu, click **Data** > **Turn lanes tagging - editor** (<kbd>Cmd</kbd>+<kbd>T</kbd>) to activate the
    **Turn lanes editor** dialog. ![]({{site.baseurl}}/images/dual-carriageway/turnlanes-editor.gif)
6.  Use **Turn lanes editor** dialog to specify _Number of lanes_ and `turn:lanes` directions. Use the satellite imagery
    for the reference. ![]({{site.baseurl}}/images/dual-carriageway/turnlanes-addturnlanes.gif)
7.  Add the turn-lanes for all the other highways.

### When turn restrictions are present

<!-- https://www.openstreetmap.org/edit?editor=remote#map=18/26.06462/-80.25637 -->

| Before                    | After                     |
| ------------------------- | ------------------------- |
| [![][f132e206]][f132e206] | [![][07d20292]][07d20292] |

[f132e206]: {{site.baseurl}}/images/dual-carriageway/tr-before.png "Click to enlarge"
[07d20292]: {{site.baseurl}}/images/dual-carriageway/tr-after.png "Click to enlarge"

Taking a U-turn along Griffin Road is illegal. Griffin Road was mapped as bi-directional road with a `no_u_turn` restriction relation. After re-mapping as dual-carriageway, we need to make sure that the relation have the correct members and roles.

1.  Create the dual-carriageway by using the **Make parallel copies of ways** (<kbd>Shift</kbd>+<kbd>P</kbd>). Make sure all relevant tags are copied to the other way (i.e. **oneway=yes**). ![]({{site.baseurl}}/images/dual-carriageway/tr-make-dual.gif)
2.  Verify the turn-restrictions from street-level photos (i.e. [Mapillary plugin](https://blog.mapillary.com/update/2015/06/25/josm-mapillary.html)
    or OpenStreetCam plugin) in JOSM. ![]({{site.baseurl}}/images/dual-carriageway/tr-mapillary.gif)
3.  Edit the members of the turn-restriction relation. In this case, we make the recently created
    `highway=tertiary` as the new **`via`** and the `highway=primary` highway going east as the new **`to`** member.
4.  Select the relation in the list. In the **Relations** dialog, click the **Call relation editor for selected relation**
    to open the **Relation editor**. ![]({{site.baseurl}}/images/dual-carriageway/tr-rel-editor.gif)
5.  Delete the existing **`to`** and **`via`** members by selecting them in the **Members**. Click the
    **Remove the currently selected members from this relation** (<kbd>⌥</kbd>+<kbd>⌦</kbd>) to delete. ![]({{site.baseurl}}/images/dual-carriageway/tr-rel-delete-members.gif)
6.  Add the new members by selecting in the main map view to show in **Selection**.
    Click **Add all object selected ...** to include them in the relation. ![]({{site.baseurl}}/images/dual-carriageway/tr-rel-add-members.gif)
7.  In the **Members** dialog, add the roles. Once completed, click **OK**. ![]({{site.baseurl}}/images/dual-carriageway/tr-rel-add-roles.gif)

### When route relations are present

Route relation describes a predetermined route for different type of transport like state routes, bus routes, bicycle routes and many more ([OpenStreetMap Wiki](https://wiki.openstreetmap.org/wiki/Relation:route)).  These are oftentimes long and affects many feature along the route.

Before re-mapping any highway as dual-carriageway, check the tags and relations the highway is part of.

#### Check data for tags/relations

- Select the highway segment which needs remodeling as dual-carriageway and check the tags/relations highway contains.

![]({{site.baseurl}}/images/dual-carriageway/tags-relations.png)
<br>*Highway with a route relation*

- If the selected highway contains route/bus relations, download all the members of the relation.
  - **Right Click** on the relation.
  - Select **Download Members** from the options to download all the members which are part of selected relation.
![]({{site.baseurl}}/images/dual-carriageway/rel-download-members.png)

- Once all the members of relation are downloaded, extend the downloaded area around the intersections where re-mapping is required.
![]({{site.baseurl}}/images/dual-carriageway/remapping-section.png)

#### Re-mapping to dual-carriageway

- Change the bi-directional highway to a dual-carriageway using the **Make parallel copies of ways** (<kbd>Shift</kbd>+<kbd>P</kbd>).

<!-- https://www.openstreetmap.org/#map=19/36.11413/-115.06414 -->

| Before                                                            | After                                                            |
| ----------------------------------------------------------------- | ---------------------------------------------------------------- |
| ![]({{site.baseurl}}/images/dual-carriageway/rel-dual-before.png) | ![]({{site.baseurl}}/images/dual-carriageway/rel-dual-after.png) |

#### Fixing members of route relation after re-mapping

The re-mapping added new segments which should be part of the existing relation. All members of the relation should be connected and not broken in the middle.

**Examine the relation**

- Select the relation and inspect the start/end and the missing members in the middle.
  - **Right Click** on the highway segment with relation and select **Select Relation** from the options. This will select the relation and will be able to visualize the missing members in the relation which are breaking the continuity.

![]({{site.baseurl}}/images/dual-carriageway/rel-select-relation.png)

- Zoom out in the map view of Data Layer to see the selected relation.
- The highlighted pink segments are all the members which are part of the relation and all the segments in the middle are missing members of the relation.

![]({{site.baseurl}}/images/dual-carriageway/rel-missing-members.png)

**JOSM setup to fix relation**

- After identifying the missing members in the relation, download the area around the around the missing members to help in better relation fixing.
- Download [Relation Toolbox](https://wiki.openstreetmap.org/wiki/JOSM/Plugins/Relation_Toolbox) plugin which helps in interfacing with relation members.

![]({{site.baseurl}}/images/dual-carriageway/relation-toolbox.png)

**Add members to relation**

- In case of multiple relation, keep note of the relation `ref` and `name` to make sure members are added to right relation.
- Adding members
  - Select relation in Relation Toolbox to which new members to be added.
    ![]({{site.baseurl}}/images/dual-carriageway/rel-toolbox1.gif)
  - Select the above identified missing highway segments **one at a time** and click ➕ to add it into selected relation. Yellow halo around the highway indicated it to be part of select relation.
    ![]({{site.baseurl}}/images/dual-carriageway/rel-toolbox2.gif)
  - Follow the above step until you all the missing segments identified.
- After adding all missing members, select the relation and check if the there any any missing pieces.
- Completely connected relation.
  ![]({{site.baseurl}}/images/dual-carriageway/complete-relation.png)
- If there are more than one relation, make sure to follow the above steps by downloading each relation members and adding members to the right relation.

<!-- Need to add how to add member roles steps. Looking for example. -->

## Mapping crossroads

Dual-carriageway crossroads are important to provide turns where there are available turns in longer stretches of highways. If these roads are left unmapped the routing engine often recommends longer routes instead of using the crossroads to reach destination faster.

Crossroads found in areas that is not a intersection serves as a channel to take a U-turn or to connect to a nearby highway.

**Common type of crossroad**

|**With/without lane indications** - This type of crossroads are not connected to any other highway but acts as turning channel for drivers to make U-Turn. | ![]({{site.baseurl}}/images/dual-carriageway/cross-road1.png) ![]({{site.baseurl}}/images/dual-carriageway/cross-road2.png)|
**With/without directional lane bays** - This type of crossroads are often connected to service roads and have traffic island to separate the similar traffic flow from opposite direction. | ![]({{site.baseurl}}/images/dual-carriageway/cross-road-3.png) |

#### Mapping crossroads with/without lane indications

- Trace the road based on satellite imagery (refer to [Mapping roads and paths](https://www.mapbox.com/mapping/mapping-common-features/#tracing-roads) guide).
- Tagging of crossroad must follow the `*_link` of the highway it is connects.

  **Example** - If main highway is `highway=secondary`, the crossroad should be tagged with `highway=secondary_link`.

<!-- https://www.openstreetmap.org/#map=19/36.07452/-115.04567 -->

| Before                                                               | After                                                               |
| -------------------------------------------------------------------- | ------------------------------------------------------------------- |
| ![]({{site.baseurl}}/images/dual-carriageway/cross-road1-before.png) | ![]({{site.baseurl}}/images/dual-carriageway/cross-road1-after.png) |

#### Mapping crossroads with directional lane bays

- Trace the road based on satellite imagery.
- Directional lane bay crossroads must be oneway.
- Tagging of crossroad must follow the `*_link` of the highway it is connects.

  **Example** - If main highway is `highway=secondary`, the crossroad should be tagged with `highway=secondary_link`.

<!-- https://www.openstreetmap.org/#map=19/36.14601/-115.24267 -->

| Before                                                               | After                                                               |
| -------------------------------------------------------------------- | ------------------------------------------------------------------- |
| ![]({{site.baseurl}}/images/dual-carriageway/cross-road2-before.png) | ![]({{site.baseurl}}/images/dual-carriageway/cross-road2-after.png) |

## See also

- [Mapping Roads and paths](https://www.mapbox.com/mapping/mapping-common-features/#roads-and-paths)
- [Intersection Modelling]({{site.baseurl}}/mapping-for-navigation/modeling-intersections-for-map-navigation/)
- [Modeling Circular Junctions]({{site.baseurl}}/mapping-for-navigation/circular-junctions/)
