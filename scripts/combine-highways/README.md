# Combine OSM highways

The script allows us to combine highways which are:

- Highways with version <=3
- Highways which use tags (motorway,trunk,primary,secondary,tertiary)
- Highways with the same direction
- Highways with the same tags
- Highways which are not in relation.
- Highways which form angles > 150 && angles < 210 with the next highway


##### How to set up

Use JOSM > 8945, install [scripting  plugin](http://wiki.openstreetmap.org/wiki/JOSM/Plugins/Scripting).

Activate JOSM support engine for *ECMAScript*

![d5450ba8-7cb9-11e5-8a82-05d0808ff381](https://cloud.githubusercontent.com/assets/1152236/10770537/d5450ba8-7cb9-11e5-8a82-05d0808ff381.png)

##### How to use the script

Load the [index.js](https://gist.github.com/Rub21/372728dd70153e1fef2d) from **menu/Scripting/run**

![scrpting](https://cloud.githubusercontent.com/assets/1152236/10769850/230f577a-7cb6-11e5-8043-c07fe9fc027b.gif)

For next , don't need to load again the script, just run from **Scripting/index.js**

![scrpting2](https://cloud.githubusercontent.com/assets/1152236/10769851/23146d82-7cb6-11e5-83a3-230051669cba.gif)
