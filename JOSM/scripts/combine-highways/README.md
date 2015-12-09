# Combine OSM highways

The script allows us to combine highways which are:

- Highways with version <=3
- Highways tagged as `motorway,trunk,primary,secondary,tertiary`
- Highways with similar direction
- Highways with similar tags
- Highways which are not part of any relations
- Highway intersections with an angle of > 150 && < 210 degrees


##### How to set up

Use JOSM > v8945, install [Scripting  plugin](http://wiki.openstreetmap.org/wiki/JOSM/Plugins/Scripting).

Activate JOSM support engine for *ECMAScript*

![d5450ba8-7cb9-11e5-8a82-05d0808ff381](https://cloud.githubusercontent.com/assets/1152236/10770537/d5450ba8-7cb9-11e5-8a82-05d0808ff381.png)

##### How to use the script

Load the [index.js](https://gist.github.com/Rub21/372728dd70153e1fef2d) from **Scripting > Run**

![scripting](https://cloud.githubusercontent.com/assets/1152236/11653643/88bb9bee-9dc5-11e5-9e96-5df06fe697ca.gif)

Once loaded, you can use the script again from the list of loaded scripts, in the  **Scripting** menu.

![scrpting2](https://cloud.githubusercontent.com/assets/1152236/10769851/23146d82-7cb6-11e5-83a3-230051669cba.gif)
