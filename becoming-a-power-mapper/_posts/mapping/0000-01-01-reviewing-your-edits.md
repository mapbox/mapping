---
title: Reviewing your edits
---

## JOSM Validator

The easiest way to [fix common mapping issues](https://github.com/mapbox/mapping/wiki/Fixing-Common-Mapping-issues) is to use the inbuilt validator in JOSM. All edits made in a session are automatically validated and a warning will be displayed before upload if any suspicious data is found.

![screenshot 2015-12-11 14 30 37](https://cloud.githubusercontent.com/assets/126868/11739757/c77832c0-a013-11e5-8568-c6dd6624e127.png)

### Usage

* Select the data you want validated and press `Shift+V` or hit `Validate` from the Validator panel. If no data is selected, the Validator will run on all the data in the active layer.
* A *Validation errors* layer will be added to your *Layers* to highlight features with errors.
* The *Validation Results* panel will display all the detected errors.  Select any of the detected errors to fix. You can right click an entry and zoom to the location if needed.

![using validator]({{site.baseurl}}/images/validator_using.gif)

The **Validation Results** have several buttons activated to navigate and fix errors:
* **Select** – Select the objects of the selected error.
* **Lookup** – Looks up the selected primitives in the error list.
* **Validation** – Start validation process for current selection or all objects (when nothing selected).
* **Fix** – Fix an error (only when automatically fixable).
* **Ignore** – Ignore an error or a group of errors in future tests.

### Customizing error detection

By default the validator checks against a wide range of [data issues](https://josm.openstreetmap.de/wiki/Help/Preferences/Validator), many of which may not be important or may contain false positives. You can customize the settings from *Preferences > Data Validator*

![validator settings]({{site.baseurl}}/images/validator_settings.gif)


For more details check the [OSM Wiki](http://wiki.openstreetmap.org/wiki/JOSM/Validator) and the [LearnOSM Guide](http://learnosm.org/en/coordination/review/#data-validation)

## Overpass Turbo

You can quickly query and visualize OSM data live using **[Overpass Turbo](http://overpass-turbo.eu/s/ddp)**.

![screenshot 2015-12-11 16 14 31](https://cloud.githubusercontent.com/assets/126868/11741952/4795d602-a022-11e5-8043-0e7014baebbc.png)

### Usage

- [Browse the map](http://overpass-turbo.eu) to the area of interest or alternatively set a bounding box using the map tool on the left.
- Write an [Overpass Query](http://wiki.openstreetmap.org/wiki/Overpass_API/Overpass_QL) in the query editor or use the *Wizard* for simple tag queries like `highway=motorway or highway=trunk`
- Optionally add a [MapCSS](http://wiki.openstreetmap.org/wiki/Overpass_turbo/MapCSS) style to visualize the results
- Hit `Run` to execute the query on the OSM data and display the results.
*Tip: By default small ways are rendered as circles. To fix this check the `Don't display small features as POIs` option from `Settings > Map`*

For more details check the [OSM Wiki](http://wiki.openstreetmap.org/wiki/Overpass_turbo), [Learn Overpass](http://osmlab.github.io/learnoverpass//en/) or some common [example queries](https://gist.github.com/ramyaragupathy/ffb3f225ccba4545398f).
