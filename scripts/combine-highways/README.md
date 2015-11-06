# Combine OSM highways

The script allow combine highways which are: 

- Highways with version =1
- Highways which use tag (motorway,trunk,primary,secondary,tertiary)
- Highways with same direction
- Highways with same tags
- Highways wich are not in Relations.

##### How to set up

Use JOSM > 8945, install [scripting  plugin](http://wiki.openstreetmap.org/wiki/JOSM/Plugins/Scripting).

Active the JOSM support engine for *ECMAScript*

![screenshot from 2015-10-27 14 30 24](https://cloud.githubusercontent.com/assets/1152236/10770537/d5450ba8-7cb9-11e5-8a82-05d0808ff381.png)

##### How to use the script

Load the [index.js](https://github.com/mapbox/data/blob/master/combine-highways/index.js) from **menu/Scripting/run**

![scrpting](https://cloud.githubusercontent.com/assets/1152236/10769850/230f577a-7cb6-11e5-8043-c07fe9fc027b.gif)

For next , don't need to load again the script, just run from **Scripting/index.js**
![scrpting2](https://cloud.githubusercontent.com/assets/1152236/10769851/23146d82-7cb6-11e5-83a3-230051669cba.gif)