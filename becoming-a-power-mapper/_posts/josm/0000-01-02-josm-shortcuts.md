---
title: JOSM shortcuts
---

As you draw using the JOSM editor, or correct map errors on to-fix, keyboard shortcuts can save help you save a great deal of time and increase the quality of your mapping [strokes replaced] if used correctly. Here we'll cover keyboard shortcuts on JOSM - default settings, how you can customize these to suit your preferences, and shortcuts most popular with the data team.

![](https://scontent-frt3-1.xx.fbcdn.net/hphotos-xfl1/t31.0-8/920735_554891274669057_2113729309314231818_o.jpg)
*Use the [JOSM cheatsheet](http://www.openstreetmap.org/user/baditaflorin/diary/37606) by user:baditaflorin*


## Basic Shortcuts [Default]

By default, the JOSM editor comes pre-loaded with approximately 100+ shortcuts which cover everything from downloading/uploading map data from the OpenStreetMap server, adding/editing/deleting tags, validating results, and working with nodes, ways, and polygons. See the [Common Keyboard Shortcuts](https://josm.openstreetmap.de/wiki/Presets/CommonKeyboardShortcuts) on the JOSM wiki for more details.

![image](https://cloud.githubusercontent.com/assets/8562256/7113237/5beb62a8-e1ef-11e4-832d-0fa5e827503e.png)

_Under **Tools** on the menu bar, you can see some of the basic default shortcuts on JOSM_

The default shortcuts on JOSM are a great way to get started, but once you are familiar and start speed mapping, you may want to consider customizing the JOSM shortcuts to fit your mapping preferences. For example, you can customize shortcuts to allow you to map quickly without having to take your right hand off the mouse.

Action | Keyboard Shortcut
---- | ----
Uploading the edit | <kbd>`</kbd><!--`-->
Downloading data | <kbd>Q</kbd>
Deleting data | <kbd>D</kbd>

To access the Shortcuts Menu, go to **Preferences** on the JOSM menu bar. Within **Preferences**, click **Options**  on the left (seventh button).

![configure_image_shortcuts](https://cloud.githubusercontent.com/assets/353700/11626533/8cbfdb90-9d09-11e5-8641-8a1260e232a8.png)


Here is a comprehensive categorized list of shortcuts everyone should be familiar with. 

### JOSM Shortcuts

#### DATA

ACTION | DESCRIPTION | Mac | Win/Linux
---- | ---- | ---- | ----
OPEN | open a file | `Cmd+O` |
SAVE | save current data | `Cmd+S` |
DATA DOWNLOAD | download map data from OSM server | `Cmd+Shift+Down` |
DATA UPLOAD | upload all changes in the active data layer to the OSM server | `Cmd+Shift+Up` |

-----

### Basic map editing

ACTION | DESCRIPTION | Mac | Win/Linux
---- | ---- | ---- | ----
SELECTION | select, move, scale, and rotate objects | `S`| `S`
NODES | draw nodes | `A`| `A`
BUILDINGS | draw building | `B`| `B`
DRAW | fast drawing mode | `Shift + F` |
ZOOM | zoom and move map | `Z`| `Z` 
DELETE | delete nodes or ways | `Cmd + D`
SPLIT WAY | split a way at a selected node | `P`| `P`
COMBINE WAY | combine several ways into one | `C`| `C`
REVERSE WAY | reverse the direction of all selected ways | `R`| `R`
SIMPLIFY WAY | delete unnecessary nodes from a way | `Shift+Y`
ALIGN NODES IN CIRCLE | move the selected nodes into a circle | `O`| `O`
ALIGN NODES IN LINE | move the selected nodes into a line | `L`| `L`
MIRROR | mirror selected nodes and ways | `Shift+M` |
FOLLOW LINE | continues drawing a line that shares nodes with another line | `F`| `F`
ADD NODE | add a node by adding latitude/longitude or easting/northing | `Shift+D` |
CREATE CIRCLE | create a circle from three selected nodes | `Shift+O` |
MERGE NODES | merge nodes into the oldest one | `M`| `M`
JOIN NODE TO WAY | include a node into the nearest way segment | `J`| `J`
MOVE NODE INTO WAY | move node into the nearest way segments and include it | `N`| `N`
DISCONNECT NODE FROM WAY | disconnect nodes from a way they currently belong to | `Alt+J` |
UNGLUE WAYS | duplicate nodes that are used by multiple ways | `G`| `G`
JOIN OVERLAPPING AREAS | join areas that overlap each other | `Shift+J` |
CREATE MULTIPOLYGON | create a multipolygon | `Cmd + B` |
UPDATE MULTIPOLYGON | update a multipolygon | `Cmd+Shift+B` |

----

## Accuracy & precision

ACTION | DESCRIPTION | SHORTCUT
---- | ---- | ----
PARALLEL WAYS | make parallel copies of ways | `Shift+P`
WAY ACCURACY | improve the accuracy of ways | `W`
ORTHOGONALIZE SHAPE | move nodes so all angles are 90 or 180 degrees | `Q`
DISTRIBUTE NODES | distribute the selected nodes to equal distances along a line | `Shift+B`
EXTRUSION | create areas | `X`
BUILDING SIZE | set building size | `Cmd+Alt+B`

----

## Presets

ACTION | DESCRIPTION | SHORTCUT
---- | ---- | ----
SEARCH PRESETS | show preset search dialogue | `F3`


## User interface

ACTION | DESCRIPTION | SHORTCUT
---- | ---- | ----
PREFERENCES | open a preferences dialogue for global settings | `Cmd + ,`
LAYERS WINDOW | open a list of all loaded layers | `Alt+Shift+L`
TAGS/MEMBERSHP WINDOW | open tags window for selected objects | `Alt+Shift+P`
SELECTION WINDOW | open a selection list window | `Alt+Shift+T`
RELATIONS WINDOW | open a list of all relations | `Alt+Shift+R`
WIREFRAME VIEW | enable/disable rendering the map as wireframe only | `Cmd+W`

----

## Imagery

ACTION | DESCRIPTION | SHORTCUT
---- | ---- | ----
IMAGERY OFFSET | download offset for current imagery from a server | `Cmd+Alt+I` 

----

## Conflicts resolution

ACTION | DESCRIPTION | SHORTCUT
---- | ---- | ----
CHECK AUTHOR | open list of people working on a selected object | `Alt+Shift+A`
RESOLVE CONFLICT | resolve a conflict | `Alt+Shift+C`

----

## Review/validation

ACTION | DESCRIPTION | SHORTCUT
---- | ---- | ----
CHANGESET MANAGER | toggle visibility of changeset manager window | `Cmd+Alt+C`
VALIDATION WINDOW | open validation window | `Alt+Shift+V`
VALIDATE | performs data validation | `Shift+V`
FILTERS | filter objects and hide/disable them | `Alt+Shift+F`
HISTORY JOSM | check history of an object | `Ctrl+H`
HISTORY WEB | check the history of object on web | `Cmd+Shift+H`
