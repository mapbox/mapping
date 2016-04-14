---
title: Trabajando con to-fix
---

[To-fix](http://osmlab.github.io/to-fix/) es una herramienta QA y un gestor de tareas de OpenStreetMap. Los problemas sistemáticos en las geometrías de los mapa y las etiquetas inconsistentes son procesados con regularidad y cargados en to-fix como tareas simples que pueden ser rápidamente recorridos  y corregidos por cartógrafos si es posible.

## Tareas
- Unconnected major: geometrías no conectados en carreteras transitables por carros.
- Unconnected minor: geometrías no conectados en senderos y pistas
- Impossible oneway: camino de una sola via sin entrada o salida correspondiente
- Broken polygons: áreas no cerradas
- Highway intersects highway: Carreteras que se superponen sin una intersección
- Highway intersects water: Carreteras que se superponen con las características del agua sin una intersección

## Ajustes
- Después de loguearse en su id de OSM, ud puede configurar el editor de OSM para usar. Se recomienda utilizar JOSM.
- Si se utiliza JOSM, prueba el [plugin de josm-to fix] () para la integración directa del editor.

## Instrucciones
* Una vez que un área se ha mejorado en OSM, marque el asunto como arreglado  para eliminarlo de la cola
* Si usted siente la zona es poco clara y desea una tarea diferente, precione Skip
* También puedes agregar una nota para conseguir la claridad de los contribuyentes en la zona
* Si el problema fue marcado incorrectamente como un error, presiona "not an error"  para eliminarlo de la cola



## Arreglando problemas comunes

### Impossible Oneways

Direcciones y oneways etiquetados incorrectamente puede quebrar el enrutamiento si resulta en una trampa de una sola via desde donde no es posible salir a la red principal de carreteras.

**Invertir oneways incorrectos**
Verifique la dirección de los coches o señalización vial de la imagen y invertir el oneway
![untitled](https://cloud.githubusercontent.com/assets/126868/8327474/5b4d587c-1a86-11e5-9831-f93172b6d1e9.gif)