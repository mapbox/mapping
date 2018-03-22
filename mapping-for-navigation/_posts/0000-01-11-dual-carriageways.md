---
title: Remodeling Dual-carriageways
---

![]({{site.baseurl}}/images/dual-carriageway/1200px-German_Autobahn_1936_1939.jpg)

*A German dual carriageway in the 1930s ([Wikipedia](https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/German_Autobahn_1936_1939.jpg/1200px-German_Autobahn_1936_1939.jpg))*

> A divided highway (also separated highway) is any highway where traffic flows are physically separated by a barrier (e.g., grass, concrete, steel), which prevents movements between said flows.
>
> [OpenStreetMap wiki]( https://wiki.openstreetmap.org/wiki/Editing_Standards_and_Conventions#Divided_highways)

We oftentimes encounter cases where a bi-directional highway should be mapped as a dual-carriageway to better
represent what's on the ground. OpenStreetMap mappers have adopted different approaches to mapping dual-carriageways
based on the source of data, local community best practices and personal preference. This guide distills best
practices on how to improve road network data in OpenStreetMap by re-mapping bi-directional highways to dual-carriageways.  

Our basic rule of thumb are:

*   Keep things simple, add complexity only when necessary.
*   Dual-carriageway should have a physical barrier visible from imagery or in some cases road marking that show its illegal to pass on the other side (MUTCD).
*   There is enough length from the physical divider (~20 meters?).
*   During remapping, all other elements associated to the road should be re-tagged (for example, turn lanes, turn restrictions, route relation, etc.)

*For other approaches to mapping intersection, refer to our [Intersection modelling guide]({{site.baseurl}}/mapping-for-navigation/modeling-intersections-for-map-navigation/)*

## Changing from a simple bi-direction to a dual-carriageway

<!-- https://www.openstreetmap.org/#map=18/37.955426/-121.281075 -->

|Before|After|
|---|---|
|[![][4ae13b0b]][4ae13b0b]|[![][082fb704]][082fb704]|

  [4ae13b0b]: {{site.baseurl}}/images/dual-carriageway/add-a-way-before.png "Click to enlarge"
  [082fb704]: {{site.baseurl}}/images/dual-carriageway/add-a-way-after.png "Click to enlarge"

In the above example, there is physical at East Weber Avenue from North Stanislaus to Aurora Street. This section of the highway should be a dual-carriageway.  The highway don't have any special tags like turn lanes or turn restrictions.  Re-mapping to a dual-carriageway is straightforward.

**Option 1**

1.  Select the bi-directional road and check if there are no special tags (such as turn-lanes, route relations, etc).
2.  Align the original highway to one side of the dual-carriageway.
3.  Trace the other segment of the dual-carriageway.
4.  Copy the tags from the original highway to the newly created way.
5.  Add **oneway=yes** for both ways.
6.  Check for other issues such as, alignment from imagery, crossing, overlapping or unconnected highways. ![]({{site.baseurl}}/images/dual-carriageway/simple-add-a-way.gif)

**Option 2**

1.  Align the original highway to one side of the dual-carriageway.
2.  Select the original way.
3.  Click the  **Make parallel copies of ways** (<kbd>Shift</kbd>+<kbd>P</kbd>).
4.  Drag to create a new way parallel to the selected way.  This copies all the tags from the reference way.
5.  Connect and align both ways to the road network. Use **Merge Nodes** (<kbd>M</kbd>) or **Join Node to Way** (<kbd>J</kbd>).
5.  Add **oneway=yes** to both ways.
6.  Reverse (<kbd>R</kbd>) way direction of the copied way. ![]({{site.baseurl}}/images/dual-carriageway/parallel-a-way.gif)

## Fixing turn lanes

<!-- https://www.openstreetmap.org/#map=20/37.83716908954435/-122.30457356404747 -->

|Before|After|
|---|---|
|[![][a907d766]][a907d766]|[![][55088a6b]][55088a6b]|

  [a907d766]: {{site.baseurl}}/images/dual-carriageway/turnlanes-before.png "Click to enlarge"
  [55088a6b]: {{site.baseurl}}/images/dual-carriageway/turnlanes-after.png "Click to enlarge"

Powell street was mapped as a bi-deirectional road.  Turn lanes were added later on as `turn:lanes:forward` and `turn:lanes:backward`. When re-mapping as dual-carriageway, we will modify the `turn:lanes:forward` and `turn:lanes:backward` to `turn:lanes`. In order to visualize and edit turn lanes, we will use the [Lanes and road attributes](https://josm.openstreetmap.de/wiki/Styles) map style and the [Turnlanes tagging](https://github.com/JOSM/turnlanes-tagging) plugin in JOSM. Check our  guide on how to [activate the style and plugin]({{site.baseurl}}/mapping-for-navigation/adding-turn-lanes/#pre-requirements-for-mapping-a-turn-lane-in-josm) in JOSM.

<!-- Should we add instructions for activating paint style and plugin? -->

1.  Change the bidirectional highway to a dual-carriageway using the **Make parallel copies of ways**
(<kbd>Shift</kbd>+<kbd>P</kbd>). ![]({{site.baseurl}}/images/dual-carriageway/turnlanes-make-dual.gif)
2.  Remove previously added **turn:lanes:\***. ![]({{site.baseurl}}/images/dual-carriageway/turnlanes-delete-tags.gif)
3.  Add the **oneway=yes** tag. Reverse (<kbd>R</kbd>) the way direction to follow the traffic flow.
![]({{site.baseurl}}/images/dual-carriageway/turnlanes-oneway.gif)
4.  Select the highway that needs turn lanes update.  In this example, we will add **turn:lanes=left||**.
![]({{site.baseurl}}/images/dual-carriageway/turnlanes-leftpipepipe.png)
5.  In the menu, click **Data** > **Turn lanes tagging - editor** (<kbd>Cmd</kbd>+<kbd>T</kbd>) to activate the
**Turn lanes editor** dialog. ![]({{site.baseurl}}/images/dual-carriageway/turnlanes-editor.gif)
6.  Use **Turn lanes editor** dialog to specify *Number of lanes* and **turn:lanes** directions. Use the satellite imagery
for the reference. ![]({{site.baseurl}}/images/dual-carriageway/turnlanes-addturnlanes.gif)
7.  Add the turn-lanes for all the other highways.

## Fixing turn restrictions
<!-- https://www.openstreetmap.org/edit?editor=remote#map=18/26.06462/-80.25637 -->

|Before|After|
|---|---|
|[![][f132e206]][f132e206]|[![][07d20292]][07d20292]|

  [f132e206]: {{site.baseurl}}/images/dual-carriageway/tr-before.png "Click to enlarge"
  [07d20292]: {{site.baseurl}}/images/dual-carriageway/tr-after.png "Click to enlarge"

Taking a U-turn along Griffin Road is illegal. Griffin Road was mapped as bi-directional road with a `no_u_turn` restriction relation.  After re-mapping as dual-carriageway, we need to make sure that the relation have the correct mebers and roles.

1.  Create the dual-carriageway by using the **Make parallel copies of ways** (<kbd>Shift</kbd>+<kbd>P</kbd>).
Make sure all relevant tags are copied to the other way (i.e. **oneway=yes**). ![]({{site.baseurl}}/images/dual-carriageway/tr-make-dual.gif)
2.  Verify the turn-restrictions from street-level photos (i.e. [Mapillary](https://blog.mapillary.com/update/2015/06/25/josm-mapillary.html)
or OpenStreetCam plugin in JOSM). ![]({{site.baseurl}}/images/dual-carriageway/tr-mapillary.gif)
3.  Edit the members of the turn-restriction relation.  In this case, we make the recently created
**highway=tertiary** as the new `via` and the **highway=primary** highway going east as the new `to` member.
4.  Select the relation in the list. In the **Relations** dialog, click the **Call relation editor for selected relation**
to open the **Relation editor**. ![]({{site.baseurl}}/images/dual-carriageway/tr-rel-editor.gif)
5.  Delete the previous `to` and `via` members by selecting them in the **Members**.  Click the
**Remove the currently selected members from this relation** (<kbd>⌥</kbd>+<kbd>⌦</kbd>) to delete. ![]({{site.baseurl}}/images/dual-carriageway/tr-rel-delete-members.gif)
6.  Add the new members by selecting in the main map view to show in **Selection**.
Click **Add all object selected ...** to include them in the relation. ![]({{site.baseurl}}/images/dual-carriageway/tr-rel-add-members.gif)
7.  In the **Members** dialog, add the roles.  Once completed, click **OK**. ![]({{site.baseurl}}/images/dual-carriageway/tr-rel-add-roles.gif)


<!-- WIP

## Fixing route relations

|Before|After|
|---|---|
|![]({{site.baseurl}}/images/dual-carriageway/-before.png)|![]({{site.baseurl}}/images/dual-carriageway/-after.png)|


## Etc
-->
