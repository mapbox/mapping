---
title: Mapping Dual-carriageways
---

<!-- Stub for Mapping dual carriageways -->

# Context

## Simple bi-direction to dual-carriageway

_blah blah_
<!-- location: https://www.openstreetmap.org/#map=18/37.955426/-121.281075 -->

|Before | After|
|---|---|
|![]({{site.baseurl}}/images/dual-carriageway/add-a-way-before.png) |![]({{site.baseurl}}/images/dual-carriageway/add-a-way-after.png) |

**Option 1**

1. Select the bi-directional road and check if there are no special tags (such as turn-lanes, route relations, etc)
2. Align the original highway to one side of the dual-carriageway.
3. Trace the other segement of the dual-carriageway.
4. Copy the tags from the original highway to the newly created way.
5. Add oneway=yes for both ways.
6.  Check for alignments and, etc. ![]({{site.baseurl}}/images/dual-carriageway/simple-add-a-way.gif)

**Option 2**

1. Align the original highway to one side of the dual-carriageway.
2. Select the original way. 
3. Click the  **Make parallel copies of ways** (`Shift + P`) then drag to create a new way parallel to the selected way.  This copies all the tags from the reference way.
4. Connect and align both ways to the road network. Use **Merge Nodes** (`M`) or **Join Node to Way** (`J`).
5. Add `oneway=yes` to both ways.
6. Reverse (`R`)way direction of the copied way. ![]({{site.baseurl}}/images/dual-carriageway/parallel-a-way.gif)

## Fix turn lanes

<!--
https://www.openstreetmap.org/#map=20/34.00868689767381/-118.20529590304008
https://www.openstreetmap.org/node/1768185976/history
https://www.openstreetmap.org/#map=20/37.83716908954435/-122.30457356404747

-->

|Before | After|
|---|---|
|![]({{site.baseurl}}/images/dual-carriageway/turnlanes-before.gif) |![]({{site.baseurl}}/images/dual-carriageway/turnlanes-after.gif) |

For this we need the [Lanes and road attributes](https://josm.openstreetmap.de/wiki/Styles) map style and the [Turnlanes tagging](https://github.com/JOSM/turnlanes-tagging) plugin in JOSM.  Check this guide on how to [activate the style and plugin](http://127.0.0.1:4000/mapping/mapping-for-navigation/adding-turn-lanes/#pre-requirements-for-mapping-a-turn-lane-in-josm) in JOSM.

<!-- Should we add instructions for activating paint style and plugin? -->

1. Create the dual-carriageway and the primary tags.
2. Select the highway than needs turn lans update.
3. Activate the turnlanes-tagging pugin dialog by typeing `Cmd + T`
4. Use turnlanes plugin to update the lanes tag by:
   * Selecting the road as uni-directional
   * Add the turn lanes based on the satellite.
5. Check the other highways on the intersection to verify if other highways needs turn lanes update or deletion.



## With TR

|Before | After|
|---|---|
|![]({{site.baseurl}}/images/dual-carriageway/turnlanes-before.png) |![]({{site.baseurl}}/images/dual-carriageway/turnlanes-after.png) |


1. Create the dual-carriageway
2. Verify TR from streetlevel photos
3. Edit the membership of the relations

## Route relations

|Before | After|
|---|---|
|![]({{site.baseurl}}/images/dual-carriageway/turnlanes-before.png) |![]({{site.baseurl}}/images/dual-carriageway/turnlanes-after.png) |



## Etc

