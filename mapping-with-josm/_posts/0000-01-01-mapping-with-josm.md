---
title: Mapping with JOSM
---

This guide will get you started [mapping with the Java OpenStreetMap editor (JOSM)](https://www.mapbox.com/blog/making-the-most-josm/) - a powerful and popular desktop editor for OpenStreetMap. Another popular editor is [iD](https://www.mapbox.com/blog/new-map-editor-launches-openstreetmap/), commonly used for short and simple, browser based editing sessions. Note that this section only focuses on the mechanics of editing with JOSM.

## Downloading from OpenStreetMap

To start editing, download an area from OpenStreetMap by using the green down-arrow button on the left in the menu bar.

## Using imagery

You will routinely use imagery for mapping. JOSM comes with a variety of pre-configured satellite imagery layers - the Bing and Mapbox layers being the most popular ones. Bing and Mapbox may have different levels of detail and clarity in different places, so often worth checking both. Simply select one of them from the imagery menu and you're ready to go.

![](https://s3.amazonaws.com/f.cl.ly/items/0E463a191T1R182t0o09/imagery.gif)

When using imagery, keep in mind that imagery may be offset. That is, due to complexities in processing satellite imagery, features on imagery may not be at the same location as they are in the real world. For reference, check existing features on the map and compare them with the imagery or download GPS tracks. To download GPS tracks from OpenStreetMap, check the "Raw GPS" box in the download dialog. If you observe an offset in the imagery, you can correct for it by selecting the "New offset" item in the "Imagery" menu.

## Creating data

Click the "Draw nodes" button to enter the data creation mode. Subsequent clicks on the map will set nodes connected by a way. Double click to finish drawing the way. For drawing single nodes, simply double click on the map. To draw a closed way, finish a way with a click on the first node you drew.

![](https://s3.amazonaws.com/f.cl.ly/items/1w3i0p411R2b0s0y1r2R/trace.gif)

## Modifying data

Click the "Select" button to select existing nodes or ways. To move nodes or ways click on them, hold the mouse button pressed and drag them. Then release the mouse button where you'd like to drop them.

![](https://s3.amazonaws.com/f.cl.ly/items/2r3h0m1E262s3j3M191q/edit.gif)

To delete data, use the `del` key of your keyboard or on a mac, use `fn+delete`.

If you ever make a mistake, `ctrl+Z`, or `command+Z` on mac, will undo the last change.

Ways can be connected to each other. In JOSM speak, you can glue, unglue, split and combine them. This is useful to create logical connections, for instance between roads of different type. To prevent ways from connecting when drawing, say when drawing a road close to buildings, hold the `ctrl` key, while clicking the mouse.

![](https://s3.amazonaws.com/f.cl.ly/items/2p3Y2x461o390V3q1E22/split.gif)

## Tagging

You can add, modify or delete tags directly in the tagging panel in JOSM's side bar. If for some reason this panel is not visible, you can enabled it under the "Windows" menu. The example below tags two ways at the same time. Simply hold shift to select multiple objects.

![screenshot from 2014-11-24 16 15 10](https://s3.amazonaws.com/f.cl.ly/items/0C2X2O3I0l2K0X3G2P00/tagging.gif)

**Presets** are common tags or tagging combinations that can be applied to objects. They can be found in the "Presets" menu where they are organized into logical categories. Try adding a preset and then review the modifications in the tagging panel.

![ssasa](https://cloud.githubusercontent.com/assets/1152236/5173525/5bf9022a-73f7-11e4-97b8-89203488adca.png)

** Copy & pasting tags **

You can copy and paste tags from one object to another. Just select one object, copying with `ctr + c`. Then select the other object and paste with `ctrl + shift + v`. This will copy _only tags_ - not the geometry.

## Uploading to OpenStreetMap

To upload the data, click on the green up-arrow button on the left in the menu bar. This will automatically trigger *validation*. Review all validation warnings and resolve all errors before you upload. If there are any errors or warnings, do your best to fix them. Before you upload, **add a proper changeset comment and specify what source you used**. This is important as it will show other users who see your changesets what this changeset was intended to modify and from where you took the information.

The upload will take a few seconds. The data is live on OpenStreetMap immediately. The map usually takes a couple of minutes to clear through all caches.

![](https://s3.amazonaws.com/f.cl.ly/items/390y0t3A1M2i260F2n0k/upload.gif)

Once you uploaded the data, you and everyone else can see a corresponding entry on your OpenStreetMap user profile under "My Edits":

![](https://s3.amazonaws.com/f.cl.ly/items/3T141H1W1b1y1m301T0v/Screen%20Shot%202014-12-16%20at%2011.44.27%20AM.png)

## Productivity tips

### Filters

Filters are very powerful and can speed up your work tremendously. Take a look at the [JOSM filter documentation](https://josm.openstreetmap.de/wiki/Help/Dialog/Filter) and at [AJ's blog post about filters](https://www.mapbox.com/blog/2012-08-15-using-filters-josm/) to learn how they work.

Here are some of the most common filter selectors in use for editing:

`boundary: | leisure: |  landuse:  | waterway: | amenity: | natural: | building:`

### Pull out common highway classifications into toolbar

When you work on OpenStreetMap, you will use highway classifications a lot, bring them all into the toolbar:

   ![screenshot from 2014-11-24 15 59 41](https://cloud.githubusercontent.com/assets/1152236/5173024/fd25da56-73f2-11e4-805f-ff3a321ca15a.png)

### Use keyboard shortcuts

When you're editing, you will be a lot faster using keyboard short cuts. Take a moment to familiarize yourself with them and start using them! You can find keyboard shortcuts in the menus like in the screenshot below, but there's also [a full reference of keyboard shortcuts on the JOSM web site](https://josm.openstreetmap.de/wiki/Shortcuts) ([en español](https://josm.openstreetmap.de/wiki/Es%3AShortcuts)).

![screenshot from 2014-11-25 22 25 06](https://cloud.githubusercontent.com/assets/1152236/5195894/23afd078-74f2-11e4-9735-640cefcbfe0c.png)

### Plugins

There are many JOSM plugins that will help you to map faster. Here are a couple that used most commonly. You find all plugins in the settings panel:

![](https://s3.amazonaws.com/f.cl.ly/items/3Q2T452P2j0H3t2F1h1b/plugins.gif)

**Buildings plugin**

For tracing buildings, always use the buildings plugin. It speeds up editing by creating rectangular boxes with a tag `building=yes` by default. To quickly draw buildings that are aligned to each other, draw the first building, select it, and draw subsequent parallel buildings.

![](https://s3.amazonaws.com/f.cl.ly/items/0Y2T1s0x0M2t3C24363A/buildings.gif)

To align existing buildings neatly, you can select multiple buildings, then two extra nodes to set the alignment axis and [orthoganalize shape (keyboard shortcut `q`)](http://josm.openstreetmap.de/wiki/Help/Action/OrthogonalizeShape)

![3zpk8nxbdt](https://cloud.githubusercontent.com/assets/126868/6900081/d65cf23c-d721-11e4-82f9-7084b11bb41f.gif)

**turnrestrictions plugin**

This plugin makes it really easy to add [turn restrictions](http://wiki.openstreetmap.org/wiki/Relation:restriction) such as "no left turn" to roads.

![edit a new turn restriction in layer data layer 1 2015-12-11 17-02-26](https://cloud.githubusercontent.com/assets/369696/11742854/fb630938-a028-11e5-88cf-c03a6e175abf.png)

Read more in JOSM help - https://josm.openstreetmap.de/wiki/Help/Plugin/TurnRestrictions

**Fast draw plugin**

This plugin is great for tracing areas like forests, lakes, waterways or landuse and linear features like roads.

To start, press `shift + f`, then click with the mouse to start drawing. Whenever you'd like to set a node, press the space bar. For free hand drawing, keep the space bar or mouse button pressed.

![untitled](https://cloud.githubusercontent.com/assets/126868/8275787/b1ffb342-18bd-11e5-8262-c2fba62b05b9.gif)

To delete the latest created nodes, just hit `backspace`.

To determine how many nodes are set automatically in freehand mode, use the up and down arrow keys. 

To finish drawing, press enter to go into the simplification mode (feature will turn yellow), press the up or down arrow for the desired level of simplification and press enter again to create the way.

While tracing you can press `Q` to set some preferences for "FastDraw" 

![fastdraw configuration 2015-12-14 22-55-16](https://cloud.githubusercontent.com/assets/369696/11788197/c9ec99d4-a2b5-11e5-9ab7-9c0c3530d963.png)

*[Video Tutorial](https://www.youtube.com/watch?v=xqDd-Crk3o4)*

**Utilsplugin2**

Utilsplugin2 comes with a series of tools that you can all find in the new menu "More tools", after the plugin is installed. The most used one is "Add nodes at Intersections" which gives you a fast way to add nodes at places where ways intersect in the current selection.

![screenshot from 2014-11-25 17 03 51](https://cloud.githubusercontent.com/assets/1152236/5193091/698be05e-74cb-11e4-8dcb-1a1a228daa07.png)

*[Video Tutorial](https://www.youtube.com/watch?v=F5NsYpKC6G4)*

**Notes**

Notes are a great way to post questions for others on the map. When mapping, observe notes that others left in the area and if you have a specific question or a suggestion on how the map could be improved, consider leaving a note.

Activate the notes plugin:

![screenshot from 2014-11-25 16 49 25](https://cloud.githubusercontent.com/assets/1152236/5192168/3f6704c8-74c3-11e4-9c69-d214b95d78cc.png)

Now you should see a list of notes in the side bar for the area you're mapping in:

![screenshot from 2014-11-25 16 52 11](https://cloud.githubusercontent.com/assets/1152236/5192216/8abfc5f4-74c3-11e4-8a5d-89bce76c7039.png)

### Validation

JOSM automatically validates your data when uploading, but you can run validation at any point by clicking 'Validation' in the Validation panel.

![](https://s3.amazonaws.com/f.cl.ly/items/2i0I3E3I3m0r3u2F1f2x/validate.gif)

### Configuring drawing styles

Sometimes it's useful to tweak drawing stiles to help improve visibility of certain features.

For example, if you're working with addresses, activate "Address Tags Validator":

![screenshot from 2014-11-25 15 10 03](https://cloud.githubusercontent.com/assets/1152236/5190603/3fcd89a4-74b5-11e4-8513-62c3747ddb2c.png)

Or if you'd like to see clearly what you've edited in your session, activate "Modified objects":

![screenshot from 2014-11-25 15 13 59](https://cloud.githubusercontent.com/assets/1152236/5190658/d136243c-74b5-11e4-9218-092e402179ed.png)

Try different drawing styles yourself and figure out which ones help you do your work better.

#### Highlight data freshness

You can use [this style](https://raw.githubusercontent.com/Andygol/josm-styles/master/created_in_2015.mapcss) to highlight features that are created or modified in 2015. To configure this:

![](https://cloud.githubusercontent.com/assets/369696/9634340/e596f890-5199-11e5-8335-55d63a9b11d2.gif)

### Custom imagery

You can also add custom imagery from Tile Map Service (TMS) or Web Map Service (WMS) endpoints. Here is how:

- [Adding a TMS imagery endpoint](https://www.youtube.com/watch?v=JvM0aP3vVr0)
`http://{switch:a,b,c}.tile.thunderforest.com/cycle/{zoom}/{x}/{y}.png`
- [Adding a WMS imagery endpoint](https://www.youtube.com/watch?v=VJqVsV0MXpw) `http://www.geosur.info/arcgis/services/maps/GeoSUR_WMS_hidrografia/MapServer/WMSServer`
 
### Resolving conflicts

If you upload a change to OpenStreetMap and someone has changed one of the same features in the meantime, a conflict will occur. In this case OpenStreetMap will refuse your changes. Follow these steps to resolve the conflicts:

1. Download new data from OpenStreetMap for the area in which the conflict occured.
2. Run validation and review the conflicts.
3. Fix them.
4. Attempt upload again.

As a last resort, you can attempt to upload changes one by one. This is not recommended though.

![screenshot from 2014-11-25 16 43 40](https://cloud.githubusercontent.com/assets/1152236/5192070/3e43555c-74c2-11e4-9c7a-87bb52120ddc.png)

### Scripting JOSM

You can script JOSM to automate certain workflows. For example:

- Expand abbreviations (US): https://gist.github.com/Rub21/feb83f57a727ac0d8a34
- Capitalize names and eliminate "name=S/N": https://gist.github.com/Rub21/47838797856566a8b6ba
- Expand abbreviations (Peru): https://gist.github.com/Rub21/cc055320c925c855926e

**[Video](https://www.youtube.com/watch?v=Cpi_5dB1NLQ)**

## Further reading and questions

For further information, take a look at the [JOSM help](https://josm.openstreetmap.de/wiki/Help).