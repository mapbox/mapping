---
title: Using OSMCha for inspecting changes in OpenStreetMap
---

## Finding suspicious map edits using OSMCha

**[OSM Changeset Analyzer](http://osmcha.mapbox.com/)** or OSMCha is a tool to filter and analyze changesets on OpenStreetMap using the [changeset metadata](https://www.openstreetmap.org/api/0.6/changeset/41775489/download). The tool has a live listing of every changeset on the map, flags potentially suspicious edits and has various filters to find changesets that match a certain criteria.

![screenshot 2016-09-06 16 00 06](https://cloud.githubusercontent.com/assets/8921295/18270541/0de8330c-744b-11e6-8582-7e49d6acec9d.png)
_Latest changesets listed in OSMCha_

The changeset is shown with id, date and time of creation, OSM user, creations in green, modification in yellow, deletions in red, a keyword describing if the changeset fits any set behaviors along with a cross mark to signify that the changeset is unreviewed.

### Filtering changesets

The filters available in OSMCha allow various combination of searches to help find problematic edits.

![screenshot 2016-08-30 16 37 31](https://cloud.githubusercontent.com/assets/8921295/18086930/1a28da0c-6ed0-11e6-8eed-5a0b7ee6cf72.png)
_OSMCha filter dialog_

OSMCha automatically tags changeset with certain parameters like `Mass creations` or `Possible import`.

![screenshot 2016-08-30 16 48 17](https://cloud.githubusercontent.com/assets/8921295/18087208/932c74c6-6ed1-11e6-8176-d6a1a6bb9f93.png)<br>
_Filter based on automatic flagging_


### Examining the quality of the changeset

OSMCha uses [Changeset map](https://github.com/osmlab/changeset-map/) to visually represent the features that were added, modified and deleted along with tag changes. This help check the quality of the edits for obvious mistakes.

<img width="408" alt="screenshot 2016-08-22 15 16 17" src="https://cloud.githubusercontent.com/assets/126868/17850564/66919236-687b-11e6-8fe7-85a5605ec04f.png"><br>
_A [changeset](http://osmlab.github.io/changeset-map/#41576998/way/24464264) showing a object that incorrectly made into a circle_

### Workflow to find suspicious changes

#### Suspicious editing behavior

**Inexperienced users, deletions and imports**
- [Edits from Maps.me editor](http://osmcha.mapbox.com/?editor__icontains=Maps.Me&is_suspect=False&is_whitelisted=True&harmful=False&checked=False)
- [Mass deletions](http://osmcha.mapbox.com/?is_suspect=False&is_whitelisted=True&harmful=False&checked=False&reasons=3)
- [Mass deletions + iD editor](http://osmcha.mapbox.com/?editor__icontains=iD&is_suspect=False&is_whitelisted=True&harmful=False&checked=False&reasons=3)
- [Mass modifications + iD editor](http://osmcha.mapbox.com/?editor__icontains=iD&is_suspect=False&is_whitelisted=True&harmful=False&checked=False&reasons=4)
- [Mass creations + iD editor](http://osmcha.mapbox.com/?editor__icontains=iD&is_suspect=False&is_whitelisted=True&harmful=False&checked=False&reasons=2)/ [Possible import](http://osmcha.mapbox.com/?is_suspect=False&is_whitelisted=True&harmful=False&checked=False&reasons=2)

**Strategy for filters**

1. iD editor is targeted towards simple editing from new users and any advanced editing happens in JOSM. So, if a mass deletion takes place using iD editor, there is a probability that the user could be inexperienced and the deletions unreasonable. [Example harmful changeset](http://osmcha.mapbox.com/41628531/)

2. Maps.me users tend to be new to OSM. It is suggested to look for changesets that added unreasonable amount of similar POIs in one area. This could be due to lack experience of the user in mapping coupled with lack of amenities available through the app preset. [Example harmful changeset](http://osmcha.mapbox.com/40927770/)

 Edits from Maps.me editor are automatically uploaded through the app. The app generates an automatic changeset comment based on the kind of amenities that were added. Filtering Maps.me edits with most creations first as sort order helped us in finding most of the bad edits from Maps.me users so far. 

3. This is similar to the first assumption. Mass modifications using iD editor could be a suspicious changeset. Mass modification could be 2 scenarios. When the user modifies tags of a long way(coastline, administrative boundaries,long motorway...) and polygons, these edits are registered to the way/polygon and all the nodes in the feature object.

 The second scenario is when the user changes geometry of an object on OSM, even though only one node is added the whole way/polygon is updated to be modified. [Example harmful changeset](http://osmcha.mapbox.com/41991749/)

4. Mass creations can also be coupled with iD editor in the filters. The idea is to review changesets which have most creations and see if all the editions fall under the [OSM editing standards and conventions](http://wiki.openstreetmap.org/wiki/Editing_Standards_and_Conventions). [Example harmful changeset](http://osmcha.mapbox.com/38282141/)

5. Sometimes, we were able to detect suspicious changesets by going through reason filters such as `edited an object with a significant place tag`, 'edited an object with a significant tag', `edited a wikipedia landmark`. [Example harmful changeset](http://osmcha.mapbox.com/38534916/)

6. Clever acts of vandalism are hard to detect as the changesets may not be big. We can verify these modifications to `name` tags, deletion of tags from [small changesets that are iD editor contributions](http://osmcha.mapbox.com/?modify__lte=50&editor__icontains=iD&is_suspect=False&is_whitelisted=True&harmful=False&checked=False) or through [random search in OSMCha](http://osmcha.mapbox.com/). Example harmful changeset [1](http://www.openstreetmap.org/node/4331919989), [2](http://www.openstreetmap.org/node/4353068192/history).


#### Suspicious changeset keywords

There are [certain keywords we have stored](https://docs.google.com/spreadsheets/d/1dqIKycRCwzrEnp-mFv6wnfPc0-V3XjOcm07BrI6kqkw/edit#gid=626639085) to quickly look through changesets that have these words in the changeset comments. For example: Google, Cuss words.


#### Finding vandalism detected by the community and reverted by DWG

Community is very active in finding and commenting on suspicious changesets. If the edits in the changesets are destructive to the map, community informs DWG, DWG reverts these changesets with a changeset comment.


- Using **Keywords**
  - Using keywords such as `revert`, `cleanup`, `fix` in changeset comment filter, we can find most of the changesets community has taken action on. This list in OSMCha includes fixes, reverts DWG as well.


- Using [**OSM - comments**](https://www.mapbox.com/osm-comments/)
  - OSM-comments API allows querying changesets with specific parameters
   - Link to see changeset comments from all users in OSM - [URL for webview](https://www.mapbox.com/osm-comments/#/changesets/?q=users%3A%2A)

Currently there is no direct way of using OSM-Comments-API to see all the changesets on which DWG members have commented. [Issue #44](https://github.com/mapbox/osm-comments-api/issues/44)

**Finding reverts by DWG**

![documentations1](https://cloud.githubusercontent.com/assets/8921295/18270714/0cc820da-744c-11e6-8db8-71421c956e07.gif)
_Finding DWG reverts using OSMCha_


- OSMCha allows us to query changesets from specific users.

- We can query all changesets from revert accounts of DWG members such Woodpeck_repair, pnorman_mechanical etc.

See more about the [full validation workflow here](https://github.com/mapbox/mapping/wiki/Validating-OpenStreetMap).