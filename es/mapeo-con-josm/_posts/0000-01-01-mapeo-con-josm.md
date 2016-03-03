---
title: Mapeo con JOSM
---

Este es un tutorial de las características más importantes que utilizará en JOSM para la edición de OpenStreetMap. Tenga en cuenta que esta sección sólo se centra en la mecánica de la edición con JOSM.

## Descarga de OpenStreetMap

Para empezar a editar, descargar un área de OpenStreetMap con el botón verde en la parte superior derecha.

## Uso de las imágenes

Usaras rutinariamente imágenes para el mapeo. JOSM viene con una variedad de capas de imágenes de satélite preconfigurados - las capas de Bing y Mapbox son las más populares. Sólo tiene que seleccionar uno de ellos desde el menú de imagen y ya está listo.

![](Https://s3.amazonaws.com/f.cl.ly/items/0E463a191T1R182t0o09/imagery.gif)

Cuando se usa las imágenes, tenga en cuenta que las imágenes puede ser compensadas. Es decir, las características de las imágenes puede no estar en el mismo lugar, como son en realidad. Como referencia, comprobar las características existentes en el mapa y compararlas con las imágenes o descargar rutas GPS. Para descargar rutas GPS de OpenStreetMap, marque la casilla "Raw GPS" en el diálogo de descarga. Si observa un desplazamiento en las imágenes, se puede corregir seleccionando la opción "Nuevo offset" en el menú "Imágenes".

## Creación de datos

Haga clic en el botón de "nodos dibujados" para ingresar en el nodo de la creación de datos. Clics subsecuentes en el mapa establecerán nodos conectados por un camino. Haga doble clic para terminar de dibujar el camino. Para dibujar  nodos individuales, simplemente haga doble clic en el mapa. Para dibujar un camino cerrado, termina el camino con un clic en el primer nodo que dibujó.

![](Https://s3.amazonaws.com/f.cl.ly/items/1w3i0p411R2b0s0y1r2R/trace.gif)

## Modificación de datos

Haga clic en el botón "Select" para seleccionar los nodos o caminos existentes. Para mover nodos o caminos haga clic en ellos, mantenga el botón del ratón pulsado y arrastrarlos. A continuación, suelte el botón del ratón donde desea colocarlos.

![](Https://s3.amazonaws.com/f.cl.ly/items/2r3h0m1E262s3j3M191q/edit.gif)

Para borrar los datos, utilice la tecla `del`  de su teclado o en un Mac, use `fn+delete`.

Los caminos pueden ser conectados entre sí. En el vocabulario de JOSM, usted puede pegar, despegar, dividir y combinarlos. Esto es útil para crear conexiones lógicas entre por ejemplo carreteras de un tipo diferente.

![](Https://s3.amazonaws.com/f.cl.ly/items/2p3Y2x461o390V3q1E22/split.gif)

## Etiquetado 

Usted puede agregar, modificar o eliminar etiquetas directamente en el panel de etiquetado en la barra lateral de JOSM. Si por alguna razón este panel no está visible, puede activarlo en el menú "Window". El siguiente ejemplo etiqueta  dos caminos al mismo tiempo. Sólo tiene que mantener presionado  "Shift" para seleccionar varios objetos.

![Captura de pantalla de 11/24/2014 16 15 10](https://s3.amazonaws.com/f.cl.ly/items/0C2X2O3I0l2K0X3G2P00/tagging.gif)

**Presets** son etiquetas comunes o combinaciones de etiquetas que se pueden aplicar a los objetos. Se pueden encontrar en el menú "Presets" en el que se organizan en categorías lógicas. Trate de añadir un preset y luego revisar las modificaciones en el panel de etiquetado.

![ssasa](https://cloud.githubusercontent.com/assets/1152236/5173525/5bf9022a-73f7-11e4-97b8-89203488adca.png)

* Copiar y pegar etiquetas *

Usted puede copiar y pegar las etiquetas de un objeto a otro. Sólo tienes que seleccionar un objeto, copiar con `ctr + c`. A continuación, seleccione otro objeto y pegar con `Ctrl + Shift + V`. Esto copiará solo las etiquetas no la geometría.

## Subida a OpenStreetMap

Para cargar los datos, haga clic en el botón con la flecha hacia arriba de la izquierda en la barra de menú. Esto activará automáticamente la *validación*. Revise todas las advertencias de validación y resolver todos los errores antes de subirlo. Si hay algún error o advertencia, hacer lo mejor para solucionarlos. Antes de subir, **añadir un comentario adecuado al conjunto de cambios y especificar la fuente que utilizó**. Esto es importante, ya que esto mostrara a los demas usuarios quienes ven tus cambios, que cambios pretendiste modificarlos y de donde se tomó la información que se muestra.

La carga tardará unos segundos. Los datos están en vivo en OpenStreetMap inmediatamente. El mapa generalmente toma un par de minutos para borrarse a través de todos los cachés.

![](Https://s3.amazonaws.com/f.cl.ly/items/390y0t3A1M2i260F2n0k/upload.gif)

Una vez que ha cargado los datos, Ud y todos los demás puede ver una entrada correspondiente en su perfil de usuario OpenStreetMap en "My Edits":

![](https://s3.amazonaws.com/f.cl.ly/items/3T141H1W1b1y1m301T0v/Screen%20Shot%202014-12-16%20at%2011.44.27%20AM.png)

## consejos de productividad

### Filtros

Los filtros son muy poderosos y pueden acelerar su trabajo enormemente. Echa un vistazo a la [documentación filtro JOSM] (https://josm.openstreetmap.de/wiki/Help/Dialog/Filter) y en [el blog de AJ's acerca de los filtros](https://www.mapbox.com/blog / 2012-08-15-usando-filtros-JOSM /) para aprender cómo funcionan.

Éstos son algunos de los selectores de filtro más comunes que utilizamos para la edición:

`boundary: | leisure: |  landuse:  | waterway: | amenity: | natural: | building:`

### Saque clasificaciones comunes de highways en la barra de herramientas

Cuando se trabaja en OpenStreetMap, utilizará mucho clasificaciones de carretera, llevalos a todos a la barra de herramientas:

   ![Captura de pantalla de 11/24/2014 15 59 41](https://cloud.githubusercontent.com/assets/1152236/5173024/fd25da56-73f2-11e4-805f-ff3a321ca15a.png)

### Utilice los atajos de teclado

Cuando estás editando, usted será mucho más rápido utilizando atajos de teclado. Tómese un momento para familiarizarse con ellos y empezar a usarlas! Usted puede encontrar los atajos de teclado en los menús como en la siguiente imagen, pero también hay [una referencia completa de los métodos abreviados de teclado en el sitio web JOSM](https://josm.openstreetmap.de/wiki/Shortcuts) ([en español](https://josm.openstreetmap.de/wiki/Es%3AShortcuts)).

![Captura de pantalla de 11/25/2014 22 25 06](https://cloud.githubusercontent.com/assets/1152236/5195894/23afd078-74f2-11e4-9735-640cefcbfe0c.png)

### Plugins

Hay muchos plugins JOSM que nos ayudan a hacer nuestro trabajo más rápido. Aquí hay un par que utilizamos con más frecuencia. Encontrará todos los plugins en el panel de configuración, como aquí:

![](Https://s3.amazonaws.com/f.cl.ly/items/3Q2T452P2j0H3t2F1h1b/plugins.gif)

**Plugins de edificios**

Para trazar los edificios, siempre use el plugin de edificios. Se acelera la edición mediante la creación de cajas rectangulares con una etiqueta `building = yes` por defecto. Para dibujar rápidamente edificios que están alineados entre sí, dibujar el primer edificio, seleccionarlo, y dibujar posteriores edificios paralelos.

![](Https://s3.amazonaws.com/f.cl.ly/items/0Y2T1s0x0M2t3C24363A/buildings.gif)

Para alinear los edificios existentes cuidadosamente, puede seleccionar varios edificios, luego dos nodos adicionales para establecer el eje de alineación y [orthoganalize shape(q)](http://josm.openstreetmap.de/wiki/Help/Action/OrthogonalizeShape)

![3zpk8nxbdt](https://cloud.githubusercontent.com/assets/126868/6900081/d65cf23c-d721-11e4-82f9-7084b11bb41f.gif)

*Plugin de restricciones de giro*

Este plugin hace que sea muy fácil de agregar restricciones de giro  a las carreteras como "prohibido girar a la izquierda".

**Plugin de dibujo rapido**

Este plugin es ideal para zonas de rastreo como forests, lakes, waterways, landuse y las características lineales como carreteras.

Para empezar, pulse `shift + f`, a continuación, haga clic con el ratón para empezar a dibujar. Siempre que desea configurar un nodo, pulse la barra espaciadora. Para el dibujo a mano alzada, mantenga la barra espaciadora o el botón del ratón pulsado.

![untitled](https://cloud.githubusercontent.com/assets/126868/8275787/b1ffb342-18bd-11e5-8262-c2fba62b05b9.gif)

Para eliminar los nodos de más reciente creación, simplemente pulse `backspace`.

Para determinar el número de nodos que se establecen automáticamente en el modo de manos libres, utilice las flecha de arriba y abajo.

Para terminar el dibujo, pulse enter para entrar en el modo de simplificación (amarillo), pulse la flecha arriba o abajo para el nivel deseado de simplificación y pulse Enter de nuevo para crear el camino.

*[Video Tutorial](https://www.youtube.com/watch?v=xqDd-Crk3o4) *

**Utilsplugin2** 

Utilsplugin2 viene con una serie de herramientas que todos ustedes pueden encontrar en el nuevo menú "More tools" después de instalar el plugin. La que más utilizamos es "Añadir nodos en las intersecciones", que le da una forma rápida de añadir nodos en los lugares donde se cruzan caminos en la selección actual.

![Captura de pantalla de 11/25/2014 17 03 51](https://cloud.githubusercontent.com/assets/1152236/5193091/698be05e-74cb-11e4-8dcb-1a1a228daa07.png)

*[Video] (https://www.youtube.com/watch?v=F5NsYpKC6G4)*

**Notas**

Las notas son una gran manera de enviar preguntas para otros en el mapa. Cuando en la cartografía, observar las notas que otros dejaron en la zona y si usted tiene una pregunta específica o una sugerencia sobre cómo se puede mejorar el mapa, considere dejar una nota.

Activar el plugin de notas:

![Captura de pantalla de 11/25/2014 16 49 25](https://cloud.githubusercontent.com/assets/1152236/5192168/3f6704c8-74c3-11e4-9c69-d214b95d78cc.png)

Ahora usted debería ver una lista de las notas en la barra lateral de la zona que está mapeando:

![Captura de pantalla de 11/25/2014 16 52 11](https://cloud.githubusercontent.com/assets/1152236/5192216/8abfc5f4-74c3-11e4-8a5d-89bce76c7039.png)

### Validación

JOSM valida automáticamente los datos cuando se sube, pero se puede ejecutar la validación en cualquier momento haciendo clic en "validate" en el panel de validación.

![](Https://s3.amazonaws.com/f.cl.ly/items/2i0I3E3I3m0r3u2F1f2x/validate.gif)

### Configuración de estilos de dibujo

A veces es útil para ajustar los estilos de dibujo, ayudar a mejorar la visibilidad de ciertas características.

Por ejemplo, si usted está trabajando con direcciones, active "Address Tags Validator":

![Captura de pantalla de 11/25/2014 15 10 03](https://cloud.githubusercontent.com/assets/1152236/5190603/3fcd89a4-74b5-11e4-8513-62c3747ddb2c.png)

O si desea ver claramente lo que haya editado en la sesión, active "Address Tags Validator":

![Captura de pantalla de 11/25/2014 15 13 59](https://cloud.githubusercontent.com/assets/1152236/5190658/d136243c-74b5-11e4-9218-092e402179ed.png)

Pruebe diferentes estilos de dibujo  y averiguar cuáles le ayudan a hacer su trabajo mejor.

### Imágenes personalizadas

También puede agregar imágenes personalizadas de Tile Map Service (TMS) o de  Web Map Service (WMS) endpoints. Aquí se ve cómo:

- [Adding a TMS imagery endpoint](https://www.youtube.com/watch?v=JvM0aP3vVr0)
`http://{switch:a,b,c}.tile.thunderforest.com/cycle/{zoom}/{x}/{y}.png`
- [Adding a WMS imagery endpoint](https://www.youtube.com/watch?v=VJqVsV0MXpw) `http://www.geosur.info/arcgis/services/maps/GeoSUR_WMS_hidrografia/MapServer/WMSServer`
 
### Resolución de conflictos

Si subes un cambio en OpenStreetMap y alguien ha cambiado la misma zona, mientras tanto, se producirá un conflicto. En este caso OpenStreetMap rechazará los cambios. Siga estos pasos para resolver los conflictos:

1. Descargar nuevos datos de OpenStreetMap para la zona en que se produjo el conflicto.
2. Ejecutar la validación y revise los conflictos.
3. Arreglalos.
4. Intentar subir de nuevo.

Como último recurso, puede intentar cargar los cambios uno por uno. Aunque esto no es recomendable.

![Captura de pantalla de 11/25/2014 16 43 40](https://cloud.githubusercontent.com/assets/1152236/5192070/3e43555c-74c2-11e4-9c7a-87bb52120ddc.png)

### Scripting JOSM

Puedes hacer un script a JOSM para automatizar ciertos flujos de trabajo. Por ejemplo:

- Expandir abreviaturas (US): https://gist.github.com/Rub21/feb83f57a727ac0d8a34
- Poner en mayuscula nombres y eliminar "name = S / N": https://gist.github.com/Rub21/47838797856566a8b6ba
- Expandir abreviaturas (Perú): https://gist.github.com/Rub21/cc055320c925c855926e

**[Video] (https://www.youtube.com/watch?v=Cpi_5dB1NLQ)**

## Lecturas adicionales y preguntas

Para más información, echa un vistazo a la [JOSM ayuda](https://josm.openstreetmap.de/wiki/Help).