---
title: Validating OpenStreetMap Data
---

At Mapbox, we map as well as inspect the data that is coming into OpenStreetMap for quality. This is the definitive guide that we follow - from detecting potentially harmful changes to inspecting them and eventually fixing the map.

## What is a problematic edit?

Every change to OpenStreetMap is contained in a [changeset](http://wiki.openstreetmap.org/wiki/Changeset). They consist of either additions (new feature), modifications (change existing tags, feature location, or location of a referred feature) or deletions by a mapper.

When working with data in OpenStreetMap, you sometimes come across places where another mapper might have added bad features or tags, changed or moved or deleted a large set of data or an important set of tags. Changes that spoil the quality of OpenStreetMap data are considered problematic edits.

There are several kinds of potentially problematic changes. For example:

* Use of proprietary data (like Google Maps) to add data in OpenStreetMap.
* Modification to significant tags like `place`, `boundary`,  `highway`, etc.
* Undocumented imports.
* Modifications with outdated imagery.
* Unintentional dragging of nodes in way that results in geometry changes.

Creation and deletion of features, modification to tags and modification to a node's location, result in a `version` increment. Every change by every user is retained as a separate version of the object in the OpenStreetMap database. Changes to nodes within a way, or to members of a relation, result in displayed changes to the way/relation but do *not* increment `version`.

## Identifying problematic edits.

 * **OSMCha**: Changeset level notification, giving an overview of how many objects were affected in a changeset. A set of suspects words automatically flag some suspicious changes. Custom filters can be used with changeset comment, source, and other combinations to look for suspicious edits. Read more about [using OSMCha to identify and inspect OpenStreetMap data.](#finding-suspicious-map-edits-using-osmcha)
 * **Linting**
 * **Map Feedback from Mapbox users**: Sometimes we receive notice through [Map feedback](https://www.mapbox.com/map-feedback/) where the Mapbox users report the changes.
 * **OSM communication channels.**

## Investigation

After identifying potentially problematic data on the map, you will want to determine few things to start:

* the *user* responsible
* the *time* they made the edit
* what made the changes - the *changeset id*
* the *features edited*

This information will help us investigate the change and identify the cause and type of change. Let's follow an example of misaligned roads in New York City.

![screenshot 2016-04-14 12 56 09](https://cloud.githubusercontent.com/assets/3423533/14520241/0c277554-0241-11e6-8695-7a76c9cd0683.png)

### Inspecting the change

1. Open the area in `JOSM`.
2. Select the problematic feature, and check the modified object's history using `Ctrl+H`.
3. The History window displays how that selected object was changed over time by different mappers. The display will vary based on the type of object (node/way/relation) selected. The left panel shows the object's versions, modification dates, and responsible users.
  - The `Tags` tab of History window has the history of tags changed between versions.
  - The `Nodes` tab of History window has the history of addition/deletion/modification of nodes associated with a way's  geometry between versions.
  - The `Coordinates` tab of history window has the history of the object if its moved for a significant distance.

![history](https://cloud.githubusercontent.com/assets/3423533/15171329/52dca16a-176b-11e6-8b78-ce3220c62d40.png)

*JOSM History window*

In this example, someone moved a node a significant distance. From the JOSM history window, you can see the change was made by user `osm_user_name`, in changeset `38544431`, dated `04/14/2016`.

### Understand the mapper

The mapper's OSM user profile and [HDYC](http://hdyc.neis-one.org) profile gives an overview of the user's activity and reputation. New mappers are more likely to make unintentional changes; though sometimes a new user account is used for intentional edits that break the map. Experienced mappers might have more detailed, trustworthy knowledge of an area, or sometimes a history of bad edits.

Click on the OSM username in the JOSM History window, and load the OSM user page where you can view the user's `Edits` history, any `Active Blocks`, any other details on the user, and `Diary` entries.

You cal also gauge a mapper's experience by looking at the number of project days, type of mapper and other points in [HDYC](http://hdyc.neis-one.org/).

![hdyc](https://cloud.githubusercontent.com/assets/3423533/15170921/ee9fbe6a-1767-11e6-8601-e74f7891a88f.png)

### Investigate the changeset

Click on the changeset ID in the JOSM History window to open the OpenStreetMap changeset page, and load details on how many objects were added/modified/deleted. You'll also see the changeset comment, which may contain more self-reported details from the user, as well as information on the editor and sources used.

The OpenStreetMap changeset pages list the objects touched by the user in that particular changeset, but it won't highlight the specific details of changed objects.

![screenshot 2016-04-14 17 35 26](https://cloud.githubusercontent.com/assets/3423533/14527442/b721eacc-0267-11e6-9fe4-807e6271ccf4.png)


This is where [Changeset Map](http://osmlab.github.io/changeset-map/) comes in handy. Changeset Map visualizes all specific features changes made to OpenStreetMap in a changeset.

- Submit the changeset id to changeset-map to see the changes affected in that changeset.

  `Example`: <http://osmlab.github.io/changeset-map/#38544431>

- Changeset Map shows the features added/modified/deleted or touched during the changeset. Identify all the problematic changed objects by exploring the edits.

![vali](https://cloud.githubusercontent.com/assets/3423533/14984377/f28d4942-115f-11e6-9c28-956faab784a3.gif)

## Response

At this point, you know who, when, and which changeset are associated with the problematic change.

Most bad edits are accidental, and the general strategy to respond to such changes is education. Work to share knowledge with the mapper about the mistake and how they can avoid the mistake in the future. Communicate feedback through public changeset comments, visible to all, or sometimes direct messages if more direct contact is helpful. This helps build our community and improve the quality of future contributions to the map.

In cases where it is determined that the intent of the mapper was to damage the map, an urgent response may be required by reverting the change and reporting the issue to an OSM administrator or Data Working Group.

### Communicate

* Leave a comment on the changeset with a description of what was wrong and how it can be fixed. Link to an OpenStreetMap wiki or link to help material that is relevant.
* If the user does not respond or fix non-urgent issues within a week, alert a nearby active mapper of the issue.
* Also look for help on IRC or the local forums or mailing list of the area.

### Repair

* For specific malicious changes, consider fixing the issue (and reporting it immediately).
* For a changeset that is wholly inaccurate, revert it. Send a message to the mapper responsible and ask for a description of what happened.
* For simple issues, communicate with the mapper to discuss on how they can fix it.

#### Revert using the JOSM Plugin

The JOSM [Reverter Plugin](http://wiki.openstreetmap.org/wiki/JOSM/Plugins/Reverter) is a convenient way to revert changes in OpenStreetMap. After every revert, make sure you upload the changes by sharing a changeset comment on why you reverted the changeset.

Reverting changesets can be tricky, and you can unintentionally break things yourself. Attempt to revert a changeset if you are 100% sure that the changeset is bad and if something goes wrong -- you should be able to fix it.

![revert](https://cloud.githubusercontent.com/assets/3423533/14527229/25b55a52-0266-11e6-847d-b9601f8fae8d.gif)

*Using the revert plugin*

### Report

* For urgent issues that require an experienced response, contact the [Data Working Group](http://wiki.openstreetmap.org/wiki/Data_working_group).

### How to assess urgency to respond

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

## Common Scenarios

Here are a few common scenarios of bad edits in OpenStreetMap.

#### Mistakes by inexperienced mappers

New users are always welcome to edit OpenStreetMap! During their learning process sometimes they may mistakingly attempt to modify/delete major land features like boundaries, important place tags, highways, and relations which can cause faulty data. In cases like this it's good to educate the users by directing them to proper guides, and instructions they need to follow while mapping and encourage them to correct their mistakes. Revert immediately if it's a serious error.

#### Humanitarian OpenStreetMap Team projects

Many new mappers join OpenStreetMap during HOT Activation. HOT tasks have custom imagery; the changeset review should be done using them. If data added does not match either imagery or the custom imagery, or added data is not of good quality, comment on user changeset to help improve their edits and mapping skills.

#### Intentional bad edits

There are few users who intentionally add bad data to OpenStreetMap which should be reverted immediately.
One such example is shown below. Here the user intentionally added family names to towns, buildings, and footpaths.

![screenshot 2016-05-03 18 47 00](https://cloud.githubusercontent.com/assets/3423533/14984342/d96fe7ee-115f-11e6-9af5-28ac515d9b28.png)

#### Undocumented imports

You can import open datasets into OpenStreetMap. Imports should follow the [Import Guidelines](http://wiki.openstreetmap.org/wiki/Import_guidelines) and add proper documentation to the [Imports catalogue](http://wiki.openstreetmap.org/wiki/Import/Catalogue), and use a dedicated import accounts. If you see any undocumented imports, comment on the changeset to request documentation details.

#### Automated edits

Automated edits are changes made to OpenStreetMap with less direct human involvement which involves bots, algorithmic imports, etc.


## Finding suspicious map edits using OSMCha

**[OSM Changeset Analyzer](http://osmcha.mapbox.com/)** or OSMCha is a tool to filter and analyze changesets on OpenStreetMap using the [changeset metadata](https://www.openstreetmap.org/api/0.6/changeset/41775489/download). The tool has a live listing of every changeset on the map, flags potentially suspicious edits and has various filters to find changesets that match certain criteria.

![screenshot 2016-09-06 16 00 06](https://cloud.githubusercontent.com/assets/8921295/18270541/0de8330c-744b-11e6-8582-7e49d6acec9d.png)
_Latest changesets listed in OSMCha_

The changeset is shown with id, date and time of creation, OSM user, creations in green, modification in yellow, deletions in red, a keyword describing if the changeset fits any set behaviors along with a cross mark to signify that the changeset is unreviewed.

### Filtering changesets

The filters available in OSMCha allow for a various combination of searches to help find problematic edits.

![screenshot 2016-08-30 16 37 31](https://cloud.githubusercontent.com/assets/8921295/18086930/1a28da0c-6ed0-11e6-8eed-5a0b7ee6cf72.png)
_OSMCha filter dialog_

OSMCha automatically tags changeset with certain parameters like `Mass creations` or `Possible import`.

![screenshot 2016-08-30 16 48 17](https://cloud.githubusercontent.com/assets/8921295/18087208/932c74c6-6ed1-11e6-8176-d6a1a6bb9f93.png)<br>
_Filter based on automatic flagging_


### Examining the quality of the changeset

OSMCha uses [Changeset map](https://github.com/osmlab/changeset-map/) to visually represent the features that were added, modified and deleted along with tag changes. This helps check the quality of the edits for obvious mistakes.

<img width="408" alt="screenshot 2016-08-22 15 16 17" src="https://cloud.githubusercontent.com/assets/126868/17850564/66919236-687b-11e6-8fe7-85a5605ec04f.png"><br>
_A [changeset](http://osmlab.github.io/changeset-map/#41576998/way/24464264) showing an object that incorrectly made into a circle_

### Workflow to find suspicious changes

#### Suspicious editing behavior

Inexperienced users, deletions, and imports:

- [Edits from Maps.me editor](http://osmcha.mapbox.com/?editor__icontains=Maps.Me&is_suspect=False&is_whitelisted=True&harmful=False&checked=False)
- [Mass deletions](http://osmcha.mapbox.com/?is_suspect=False&is_whitelisted=True&harmful=False&checked=False&reasons=3)
- [Mass deletions + iD editor](http://osmcha.mapbox.com/?editor__icontains=iD&is_suspect=False&is_whitelisted=True&harmful=False&checked=False&reasons=3)
- [Mass modifications + iD editor](http://osmcha.mapbox.com/?editor__icontains=iD&is_suspect=False&is_whitelisted=True&harmful=False&checked=False&reasons=4)
- [Mass creations + iD editor](http://osmcha.mapbox.com/?editor__icontains=iD&is_suspect=False&is_whitelisted=True&harmful=False&checked=False&reasons=2)/ [Possible import](http://osmcha.mapbox.com/?is_suspect=False&is_whitelisted=True&harmful=False&checked=False&reasons=2)

Strategy for filters:

1. iD editor is targeted towards simple editing from new users, and any advanced editing happens in JOSM. So, if a mass deletion takes place using iD editor, there is a probability that the user could be inexperienced and the deletions unreasonable. [Example of a harmful changeset.](http://osmcha.mapbox.com/41628531/)
2. Maps.me users tend to be new to OSM. It is suggested to look for changesets that add an unreasonable amount of similar POIs in one area. This could be due to a lack experience of the user in mapping coupled with a lack of amenities available through the app preset. [Example of a harmful changeset.](http://osmcha.mapbox.com/40927770/)
  - Edits from Maps.me editor are automatically uploaded through the app. The app generates an automatic changeset comment based on the kind of amenities that were added. Filtering Maps.me edits with most creations first as sort order helped us in finding most of the bad edits from Maps.me users so far.
3. This is similar to the first assumption. Mass modifications using iD editor could be a suspicious changeset. Mass modification could be two scenarios:
  - When the user modifies tags of a long way (coastline, administrative boundaries, long motorway, etc.) and polygons, these edits are registered to the way/polygon and all the nodes in the feature object.
  - When the user changes the geometry of an object on OSM, even though only one node is added the whole way/polygon is updated to be modified. [Example of a harmful changeset.](http://osmcha.mapbox.com/41991749/)
4. Mass creations can also be coupled with the iD editor in the filters. The idea is to review changesets which have most creations and see if all the editions fall under the [OSM editing standards and conventions](http://wiki.openstreetmap.org/wiki/Editing_Standards_and_Conventions). [Example of a harmful changeset.](http://osmcha.mapbox.com/38282141/)
5. Sometimes, we were able to detect suspicious changesets by going through reason filters such as `edited an object with a significant place tag`, `edited an object with a significant tag`, `edited a wikipedia landmark`. [Example of a harmful changeset.](http://osmcha.mapbox.com/38534916/)
6. Clever acts of vandalism are hard to detect as the changesets may not be big. We can verify these modifications to `name` tags, deletion of tags from [small changesets that are iD editor contributions](http://osmcha.mapbox.com/?modify__lte=50&editor__icontains=iD&is_suspect=False&is_whitelisted=True&harmful=False&checked=False) or through [random search in OSMCha](http://osmcha.mapbox.com/). Examples harmful changesets: [1](http://www.openstreetmap.org/node/4331919989), [2](http://www.openstreetmap.org/node/4353068192/history).


#### Suspicious changeset keywords

There are [certain keywords we have stored](https://docs.google.com/spreadsheets/d/1dqIKycRCwzrEnp-mFv6wnfPc0-V3XjOcm07BrI6kqkw/edit#gid=626639085) to quickly look through changesets that have these words in the changeset comments. For example "Google" and any profane language.


#### Finding vandalism detected by the community and reverted by Data Working Group

The community is very active in finding and commenting on suspicious changesets. If the edits in the changesets are destructive to the map then the community will inform Data Working Group and Data Working Group will revert these changesets with a changeset comment.


- Using **Keywords**
  - Using keywords such as `revert`, `cleanup`, `fix` in changeset comment filter, we can find most of the changesets community has taken action on. This list in OSMCha includes fixes, reverts Data Working Group as well.

- Using [**OSM - comments**](https://www.mapbox.com/osm-comments/)
  - OSM-comments API allows querying changesets with specific parameters
  - Link to see changeset comments from all users in OSM - [URL for web view](https://www.mapbox.com/osm-comments/#/changesets/?q=users%3A%2A)

Currently, there is no direct way of using OSM-Comments-API to see all the changesets on which Data Working Group members have commented. [Issue #44](https://github.com/mapbox/osm-comments-api/issues/44)

**Finding reverts by Data Working Group**

![documentations1](https://cloud.githubusercontent.com/assets/8921295/18270714/0cc820da-744c-11e6-8db8-71421c956e07.gif)
_Finding Data Working Group reverts using OSMCha_

- OSMCha allows us to query changesets from specific users.
- We can query all changesets from revert accounts of Data Working Group members such `Woodpeck_repair`, `pnorman_mechanical`, etc.