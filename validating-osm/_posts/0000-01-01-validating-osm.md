---
title: Validating OpenStreetMap Data
---

At Mapbox, we map as well as inspect the data that is coming into OpenStreetMap for quality. This is the definitive guide that we follow - from detecting potentially harmful changes to inspecting them and eventually fixing the map.

# Contents

1. [What is a problematic edit?](https://github.com/mapbox/mapping/wiki/Validating-OpenStreetMap#1-what-is-a-problematic-edit)
2. [Identifying problematic edits.](https://github.com/mapbox/mapping/wiki/Validating-OpenStreetMap#2-identifying-problematic-edits
)
 * OSMCha
 * OSM Lint
 * OSM Communication Channels
3. [Investigation.](https://github.com/mapbox/mapping/wiki/Validating-OpenStreetMap#3-investigation
)
 * Inspecting the change.
 * Understanding the user.
 * Inspecting the changeset.
4. [Response](https://github.com/mapbox/mapping/wiki/Validating-OpenStreetMap#4-response
)
5. [Common Scenarios](https://github.com/mapbox/mapping/wiki/Validating-OpenStreetMap#5-common-scenarios)


# 1. What is a problematic edit?

Every change to OpenStreetMap is contained in a [changeset](http://wiki.openstreetmap.org/wiki/Changeset). They consist of either additions (new feature), modifications (change existing tags, feature location, or location of a referred feature) or deletions by a mapper.

When working with data in OpenStreetMap, you sometimes come across places where another mapper might have added bad features or tags, changed or moved or deleted a large set of data or an important set of tags. Changes that spoil the quality of OpenStreetMap data are considered problematic edits.

There are several kinds of potentially problematic changes. For example:

* Use of proprietary data (like Google Maps) to add data in OpenStreetMap.
* Modification to significant tags like `place`, `boundary`,  `highway`, etc.
* Undocumented imports.
* Modifications with outdated imagery.
* Unintentional dragging of nodes in way, that result in geometry changes.

Creation and deletion of features, modification to tags and modification to a node's location, result in a `version` increment. Every change by every user is retained as a separate version of the object in the OpenStreetMap database. Changes to nodes within a way, or to members of a relation, result in displayed changes to the way/relation but do *not* increment `version`.

# 2. Identifying problematic edits.
 * **OSMCha**: Changeset level notification, giving an overview of how many objects were affected in a changeset. A set of suspects words automatically flag some suspicious changes. Custom filters can be used with chaneset comment, source, and other combinations to look for suspicious edits. Read more about [using OSMCha to identify and inspect OpenStreetMap data.](https://github.com/mapbox/mapping/wiki/Using-OSMCha-for-inspecting-changes-in-OpenStreetMap)
 * **Linting** 
 * **Map Feedback from Mapbox users**: Sometimes we receive notice through [Map feedback](https://www.mapbox.com/map-feedback/) where the Mapbox users report the changes.
 * **OSM communication channels.**

# 3. Investigation

After identifying potentially problematic data on the map, we want to determine few things to start - the *user* responsible, when - the *time* they made the edit and what made the changes -- the *changeset id*, and the *features edited*.

These information help you to investigate the change and identify the root cause and type of change. We'll follow an example of misaligned roads in New York City.

![screenshot 2016-04-14 12 56 09](https://cloud.githubusercontent.com/assets/3423533/14520241/0c277554-0241-11e6-8695-7a76c9cd0683.png)

## Inspecting the Change

- Open the area in `JOSM`.
- Select the problematic feature, and check the modified object's history using `Ctrl+H`.
- The History window displays how that selected object was changed over time by different mappers. The display will vary based on the type of object (node/way/relation) selected. The left panel shows the object's versions, modification dates, and responsible users.
  - The `Tags` tab of History window have history of tags changed between versions. 
  - The `Nodes` tab of History window have history of addition/deletion/modification of nodes associated with a way's  geometry between versions.
  - The `Coordinates` tab of history window have history of the object if its moved for a significant distance.

![history](https://cloud.githubusercontent.com/assets/3423533/15171329/52dca16a-176b-11e6-8b78-ce3220c62d40.png)

*JOSM History window*

In this example, a node was moved a significant distance. From the JOSM history window, we can see the change was made by user `osm_user_name`, in changeset `38544431`, dated `04/14/2016`.

## Understand the mapper

The mapper's OSM user profile and [HDYC](hdyc.neis-one.org) profile give an overview of the user's activity and reputation. New mappers are more likely to make unintentional changes; though sometimes a new user account is used for intentional edits that break the map. Experienced mappers might have more detailed, trustworthy knowledge of an area, or sometimes a history of bad edits.

Click on the OSM user name in the JOSM History window, and load the OpenStreetMap user page where you can view the user's `Edits` history, any `Active Blocks`, any other details on the user, and `Diary` entries.

A mapper's experience can also be gauged by looking at the number of project days, type of mapper and other points in [HDYC](http://hdyc.neis-one.org/).

![hdyc](https://cloud.githubusercontent.com/assets/3423533/15170921/ee9fbe6a-1767-11e6-8601-e74f7891a88f.png)

## Investigate the changeset

Click on the changeset ID in the JOSM History window to open the OpenStreetMap changeset page, and load details on how many objects were added/modified/deleted. You'll also see the changeset comment, which may contain more self reported details from the user, as well as information on the editor and sources used.

The OpenStreetMap changeset pages simply lists the objects touched by the user in that particular changeset, but it won't highlight the specific details of changed objects.

![screenshot 2016-04-14 17 35 26](https://cloud.githubusercontent.com/assets/3423533/14527442/b721eacc-0267-11e6-9fe4-807e6271ccf4.png)


This is where [Changeset Map](http://osmlab.github.io/changeset-map/) comes in handy. Changeset Map visualizes all specific features changes made to OpenStreetMap in a changeset.

- Submit the changeset id to changeset-map to see the changes affected in that changeset.

  `Example`: http://osmlab.github.io/changeset-map/#38544431

- Changeset Map shows the features added/modified/deleted or touched during the changeset. Identify all the problematic changed objects by exploring the edits. 

![vali](https://cloud.githubusercontent.com/assets/3423533/14984377/f28d4942-115f-11e6-9c28-956faab784a3.gif)

# 4. Response

At this point we know who, when and which changeset associated with the problematic change.

Most bad edits are accidental and the general strategy to respond to such changes is education. Work to share knowledge with the mapper about the mistake and how it can be avoided in future. Communicate feedback through public changeset comments, visible to all, or sometimes direct messages if more direct contact is helpful. This helps build our community and improve the quality of future contributions to the map.

In cases where it is determined that the intent of the mapper was to damage the map, an urgent response may be required by reverting the change and reporting the issue to an OSM administrator or DWG.

## Communicate

* Drop a comment on the changeset with a description of what was wrong and how it can be fixed. Link to OpenStreetMap wiki or help material that is relevant.
* If the user does not respond or fix non-urgent issues within a week, alert a nearby active mapper of the issue.
* Also look for help on IRC or the local forums or mailing list of the area.

## Repair

* For specific malicious changes, consider fixing the specific issue (and reporting it immediately).
* For a changeset that is wholly bad, revert it. Send a message to the mapper responsible and ask for a description of what happened.
* For simple issues, communicate with the mapper to discuss on how it should be fixed.

### Revert using the JOSM Plugin

The JOSM [Reverter Plugin](http://wiki.openstreetmap.org/wiki/JOSM/Plugins/Reverter) is a convenient way to revert changes in OpenStreetMap. After every revert, make sure you upload the changes by sharing a changeset comment on why this changeset was reverted.

Reverting changesets can be tricky, and you can unintentionally break things yourself. Attempt to revert a changeset if you are 100% sure that the changeset is bad and if something goes wrong -- you should be able to fix it.

![revert](https://cloud.githubusercontent.com/assets/3423533/14527229/25b55a52-0266-11e6-847d-b9601f8fae8d.gif)

*Using the revert plugin*

## Report

* For urgent issues that requires an experienced response, contact the [Data Working Group](http://wiki.openstreetmap.org/wiki/Data_working_group).

## How to assess urgency to respond

The level of response depends on how severe the change is to OpenStreetMap. Urgency is somewhat subjective, but here is some guidance.

1. Changes to significant features like the following should trigger an immediate repair.
  - Major boundaries
  - Highway connectivity
  - Highway hierarchy
  - Highways misalignment (like our NYC example)
  - Broken multipolygons (water/border) which effect admin boundaries
  - Landmarks

2. Changes to important but less critical features should start with communication, and repair later only if the user does not respond.
  - Land use features like forests
  - Buildings
  - Water bodies

3. If the mapper is using the proprietary data sources like Google, Bing Maps, Here Maps or other sources which are not open licensed then comment on the user changeset and mention [Copyright guidance for OpenStreetMap](http://www.openstreetmap.org/copyright). Encourage them to revert the changes and follow local knowledge, or stick to Bing and Mapbox Satellite Imagery.

# 5. Common Scenarios

Here are a few common scenarios of bad edits in OpenStreetMap.

### Mistakes by inexperienced mappers
New users are always welcome to edit OpenStreetMap! During their learning process sometimes they might mistakingly attempt to modify/delete major land features like boundaries, important place tags, highways, relations which causes faulty data. In cases like this its good to educate the users by directing them to proper guides, and instructions they need to follow while mapping and encourage them to correct their mistakes. Revert immediately if it's a serious error.

### Humanitarian OpenStreetMap Team projects
Many new mappers join OpenStreetMap during HOT Activation. HOT tasks have custom imagery; the changeset review should be done using them. If data added does not match either imagery or the custom imagery, or added data is not of good quality, comment on user changeset to help improve their edits and mapping skills.

### Intentional bad edits
There are few OSM users who intentionally add bad data to OpenStreetMap which should be reverted immediately.
One such example is shown below. Here the user `Andyt30` was intentionally adding family-names to towns, buildings and footpaths. (Changeset:[34155722](https://www.openstreetmap.org/changeset/34155722))

![screenshot 2016-05-03 18 47 00](https://cloud.githubusercontent.com/assets/3423533/14984342/d96fe7ee-115f-11e6-9af5-28ac515d9b28.png)

### Undocumented imports
Open data sets are can be imported into OpenStreetMap. Imports should follow the [Import Guidelines](http://wiki.openstreetmap.org/wiki/Import_guidelines) and add proper documentation to the [Imports catalogue](http://wiki.openstreetmap.org/wiki/Import/Catalogue), and use a dedicated import accounts. If any undocumented imports are seen, comment on the changeset to request documentation details.

### Automated edits
Automated edits are changes made to OpenStreetMap with less direct human involvement which involves bots, algorithmic imports etc.