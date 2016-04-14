---
title: Modelo de datos
---

OpenStreetMap se compone de tres **elementos** diferentes: *nodos*, *caminos* y *relaciones*. Cada uno de ellos puede tener una o más *etiquetas* dándoles un significado específico. Los nodos son el equivalente a un punto, los caminos son como las líneas que conectan los puntos y las relaciones son colecciones de puntos o caminos que representan un todo más grande. Esto es más fácil de entender con un par de ejemplos.

## Nodos 

Los nodos se utilizan para representar cualquier tipo de caracteristica de punto  o simplemente para designar un nombre para un punto de interés en la vecindad. He aquí un nodo que representa una cafetería:

![cafe](https://s3.amazonaws.com/f.cl.ly/items/2W2k3J2L1N1q1u3I3N0Y/Screen%20Shot%202014-12-16%20at%204.01.44%20PM.png)

y aquí está uno que representa a la ciudad de Nueva York:
    
![nueva york](https://s3.amazonaws.com/f.cl.ly/items/0G3O051s0S1M3s110L2o/Screen%20Shot%202014-12-12%20at%207.15.58%20PM.png)

## Caminos

Un camino es una caracteristica de línea *que conecta dos o más nodos* - como un camino aquí:

![camino con la carretera = residencial y una etiqueta con su nombre, también muestran la manera cómo los nodos en caminos  no tienen una etiqueta](https://s3.amazonaws.com/f.cl.ly/items/1F2r0Y0M1c0m0J1c371G/Screen%20Shot%202014-12-12%20at%207.24.55%20PM.png)

Si cierra un camino - mediante la conexión de su fin a su inicio, puedes mapear caracteristicas de tipo area  como este edificio aquí:
 
![](https://s3.amazonaws.com/f.cl.ly/items/1h190m2u0h3N1Q0Q2o1G/Screen%20Shot%202014-12-12%20at%207.28.47%20PM.png)

o este parque:
 
![](https://s3.amazonaws.com/f.cl.ly/items/2z0E1H041j0W0E1m0R2u/Screen%20Shot%202014-12-12%20at%207.31.44%20PM.png)

Los nodos son por lo general sólo los elementos que definen un camino. Pero los nodos que se sientan en un camino pueden tener su propio significado. En este ejemplo, el nodo es parte de la calle 14  R  y esto también denota que hay un semáforo.

![](https://s3.amazonaws.com/f.cl.ly/items/3V262D3F0h1L3J0V2m3B/trafficlight.gif)

## Etiquetas

Antes de que nos saltemos al tercer elemento al lado de los nodos y formas - relaciones, echemos un vistazo a las etiquetas. Usted los ha visto ahora ya un par de veces en los ejemplos anteriores, como en este nodo de café:

![](https://s3.amazonaws.com/f.cl.ly/items/3h0O2m3Y2c120h1M3p0h/Screen%20Shot%202014-12-16%20at%204.01.44%20PM.png)


Cualquier caracteristica de tipo de punto es un nodo. Ya sea que un nodo designe una cafetería, una escuela, una fuente de incendios, un árbol, un parque, un pico de montaña depende enteramente de cómo se etiqueta el nodo. Cualquier caracteristica de tipo de línea es un camino. Ya sea que el camino sea una carretera, un edificio, un lago, un ferrocarril, un ciclovia, es de nuevo definido por la forma en que se etiqueta.

Las etiquetas pueden estar en cualquier elemento: en nodos, caminos y relaciones.

## Relaciones

Las relaciones se utilizan para organizar múltiples nodos o caminos en un todo más grande. Tome aquí, por ejemplo, la ruta del autobús 23 que corre a través de 3 caminos diferentes.

![autobús](https://s3.amazonaws.com/f.cl.ly/items/2J0m3p1O0W1o1o2P3n0O/relations.gif)

El tipo de relación que  probablemente  lidiarás más  describen un área con agujeros perforados  - uno llamado *multipolígono*. He aquí un ejemplo de un edificio multipolígono con un patio. Consta de 2 caminos cada uno con multiples nodos. Una camino  describe la pared *exterior del edificio*, el otro *la pared interior*. Los caminos son parte de una relación del tipo `type = multipolygon`, la camino exterior tiene la función` outer` y el camino interno tiene la función `inner`. Nota: la etiqueta `edificio=yes` está en la relación (no en el camino).

Su editor de OpenStreetMap se encargará de crear multipolígonos para usted así que no te preocupes si esto parece denso por ahora. Si usted necesita  corregir un multipolígono, esta es una buena sección a regresar.

![Edificio Multipoligono, muestran cómo no hay etiquetas en los nodos y los caminos, sino en la relación] (https://s3.amazonaws.com/f.cl.ly/items/3G292J2S2D310i0t0Q13/multipolygon.gif)

## Lecturas adicionales

Para aprender más sobre la estructura de datos de OpenStreetMap, eche un vistazo a los siguientes recursos:

- Elementos OpenStreetMap http://wiki.openstreetmap.org/wiki/Elements
- Multipolígonos http://wiki.openstreetmap.org/wiki/Relation:multipolygon