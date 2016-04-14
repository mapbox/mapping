---
title: Características comunes
---


Este es un tutorial de las características más importantes que usted querrá mapear en OSM. Esta es una introducción para empezar a mapear pero no quiere decir que sea completo. Vamos a utilizar algunos términos específicos de OpenStreetMap aquí, si usted no está familiarizado con lo que son "nodos", "caminos" y "relaciones" , primero lea las guías anteriores.

*¿Cómo puedo mapear X?*

Nos estamos centrando en esta sección sobre las características más comunes de los mapas. Para una documentación completa, consulte la guía [OpenStreetMap Mapa Funciones](http://wiki.openstreetmap.org/wiki/Map_Features). Para buscar una rápida caracteristica específica de mapa , por ejemplo, cómo mapear una estación de ferrocarril, googlear con una consulta como "tag bus stop site:wiki.openstreetmap.org":

![](Https://s3.amazonaws.com/f.cl.ly/items/3C3A0S3k011k1P3b2J0N/google.gif)

Un valioso recurso complementario es [taginfo.openstreetmap.org](http://taginfo.openstreetmap.org/).Tag info muestra el número de veces que una etiqueta específica se ha utilizado que te permite encontrar cuan establecido esta la etiqueta.

## Carreteras y caminos

Las carreteras son algunos de los rasgos más significativos que mapeamos. Si bien los caminos son fáciles de rastrear de las imágenes de satélite hay un amplio vocabulario para clasificar los diferentes tipos de carreteras.

### Trazando Carreteras

Trazar una carretera es sencillo. Utilice la herramienta de dibujo (A) en JOSM o la herramienta de línea de iD y dibujar el camino siguiendo su curso. El truco es usar la cantidad correcta de nodos para describir un camino. Pocos nodos hacen el camino aparecer muy irregular. Demasiados son datos innecesarios y hacen que el camino sea difícil de editar más adelante.

Mira la foto de abajo, el primer ejemplo fue trazado con muy pocos nodos y es demasiado irregular, el segundo ejemplo fue trazado con demasiados nodos añadiendo información redundante, la última es trazada correctamente:

![Muy pocos / mucha cantidad / la cantitdad correcta de nodos es una curba](https://s3.amazonaws.com/f.cl.ly/items/2h33142Q181p071C1O14/Screen%20Shot%202015-01-04%20at%208.32.37%20PM.png)

Los caminos deben estar conectados en el que se cruzan. A la izquierda se puede ver dos caminos cruzando entre sí, a la derecha note cómo un nodo conecta los dos caminos. Esto es importante para la navegación, donde los vehículos deben ser capaces de ser guiados desde un camino a  otro.

![](https://s3.amazonaws.com/f.cl.ly/items/180r0E2l0P2H0m0Z3m07/Screen%20Shot%202015-01-04%20at%208.55.14%20PM.png)

Y siga el flujo de las carreteras en lo posible. A la izquierda el camino fue trazado con un "desvío" por ninguna razón aparente. A la derecha se ve cómo el trazado de ruta sigue el flujo lógico de la carretera.

![Equivocada: "mapa alrededor de las esquinas",  derecha: siga el flujo](https://s3.amazonaws.com/f.cl.ly/items/0k1F3Y0m0y081H3v0W07/Screen%20Shot%202015-01-04%20at%208.48.54%20PM.png)

Trace cada linea *fisicamente* separada como un camino separado. Véase, por ejemplo esta autovía (naranja):

![Camino de doble via](https://s3.amazonaws.com/f.cl.ly/items/0f0z0i391l0C0e0X3d0b/Screen%20Shot%202015-01-04%20at%209.01.42%20PM.png)

Al mapear un camino de doble via, asegúrese de que las carreteras que conectan esten conectandos correctamente a ambos carriles *si* esta conexión es posible en la realidad:

![ muestra 2 ejemplos de conexion de caminos  que llevan a un camino de carro: una que conecta a los dos carriles, uno a solo una linea](https://s3.amazonaws.com/f.cl.ly/items/07043M2U0H093c2q1r3m/Screen%20Shot%202015-01-04%20at%209.01.4222%20PM.png)

### Todo es un camino

No importa si se trata de un camino de tierra, una calle de la ciudad, un camino a pie o un ciclovia, lo encontrará etiquetado con la tecla `highway`. Estos son algunos ejemplos de etiquetas comunes:

- `highway = residential` - una calle residencial en una ciudad
- `highway = motorway` - un camino rapido de acceso restringido 
- `highway = footway` - un camino a pie
- `highway = cycleway` - un ciclovia

Las carreteras a menudo vienen con etiquetas secundarias, especificando además el tipo o atributo de un camino:

- `oneway = yes` dice el camino es de una sola via
- `lines = 2` dice cuántos carriles tiene una carretera 
- `Name = Broadway` designa un nombre de la calle
- `Access = private|permissive` describe el nivel de acceso en el  camino
- `Service = parking_aisle|driveway` ademas especifica el tipo de `highway = service`

### De una sola via

caminos de una sola via se asignan simplemente añadiendo una etiqueta 'oneway = yes`  para el camino de la carretera. Tenga en cuenta que los caminos tienen una direccionalidad. Así que el camino será de un solo sentido en la dirección del camino. Si necesita cambiar el flujo  de "una sola via", usted tiene dos opciones:

- Cambie la dirección del camino (Tool > Revers ways in JOSM o el `<<` context icon on iD)
- O etiquete con  `oneway = -1` - utilizar este enfoque donde la direccionalidad de los caminos ya gobiernan otros atributos como rutas de autobús.

![tagging a oneway](https://s3.amazonaws.com/f.cl.ly/items/1W0M081C2W3K0j0p1I2r/oneway.gif)

OpenStreetMap Wiki: [key:oneway](http://wiki.openstreetmap.org/wiki/Key:oneway)

### Restricciones de Giro

Las restricciones de giro son reglas que no permiten ciertas maniobras de giro. He aquí, por ejemplo, una señal de "prohibido girar a la derecha".

![](Https://farm3.staticflickr.com/2900/14360050862_ef35f7ffa8_b.jpg)

Para mapear restricciones de giro en JOSM, utilice el plugin de **turnrestrictions**. Una vez habilitado, se puede activar un nuevo panel de restricción de giro del menú `Windows > Turn Restriction`.

Una vez habilitado, crear nuevas restricciones de giro o  edite  aquellos existentes en el panel. He aquí un ejemplo de cómo crear una simple restricción "sin giro a la derecha". Estamos seleccionando el modo en que no podemos tomar el giro a la derecha desde  el objeto "from", la forma en que no podemos tomar el giro a la derecha como el objeto  "to"  y luego especificamos que la restricción es una restricción de   "no girar a la derecha ". Como sabemos el diálogo de turnrestrictions nos advierte que no hay ningún objeto definido "via" definido. No es estrictamente necesario tener uno, pero es una buena práctica, por lo que definimos uno.

![](Https://s3.amazonaws.com/f.cl.ly/items/24173W1U033a193q2l1F/turn.gif)

Las restricciones de jiro pueden tornarse complejas rápidamente, así que antes de crear o editar las restricciones de giro, asegúrese de leer y entender toda la documentación disponible en el wiki de OpenStreetMap.

Vídeo: [Cómo editar restricciones de giro en JOSM](https://www.youtube.com/watch?v=0SdixDJAED0)

OpenStreetMap Wiki: [Relación: restricción] (http://wiki.openstreetmap.org/wiki/Relation:restriction)

### Guía de clasificación simple

Una de las habilidades más sutiles a aprender en OpenStreetMap es cómo clasificar correctamente las carreteras. La etiqueta `highway` tiene más de ocho valores para carreteras, otro cinco más para el tráfico no vehicular, y una serie de etiquetas secundarias. Es mas las clasificaciones de "highway" son muy espcificos a  países y siguen diferentes convenciones de país en país.

Aquí hay una guía rápida sobre cómo trabajar con las clasificaciones de caminos en OpenStreetMap.

1. Siga las clasificaciones existentes. No cambie las clasificaciones y siga las convenciones que se ve en el mapa local para nuevos datos.
2. Los caminos más pequeños en una red son los más fáciles de identificar y también aquellos que terminaras añadiendo más. Para carreteras secundarias, prefiera `highway = residential` en zonas residenciales contruidas,` highway = unclassified` para todo lo demás.
3. Para todos los demás casos, utilice `highway = road`

Para una referencia completa en la cartografía de carreteras, mirar la [entrada wiki para la etiqueta de  carreteras](http://wiki.openstreetmap.org/wiki/Key:highway).

### Intersecciones

La intersección entre unos caminos y otra característica siempre se debe definir. ¿Dónde se encuentran, o bien hay una intersección, un túnel o un puente.

#### Intersecciones simples entre dos caminos

Para crear un simple intersección entre dos caminos, sólo asegúrese de conectar las dos carreteras con un nodo.

![2 muestran cómo las carreteras conectan](https://s3.amazonaws.com/f.cl.ly/items/1b0K0E2b401E0U2U1H1A/intersect.gif)

#### Túnel

Un túnel lleva la etiqueta de  'túnnel = yes` y un `layer=` que es uno más bajo que la etiqueta  `layer=`  de las caracteristicas con las que intersectan  (por defecto el valor del `layer` es 0). El camino  *no* esta conectado con las otras caracteristicas. Corte los caminos donde empiezan los tuneles.
 
![Muestra cómo mapear un túnel](https://s3.amazonaws.com/f.cl.ly/items/0e3S3F3j1N000w1R1d2x/tunnel.gif)

Un pasaje de edificio es un tipo especial de túnel que pasa a través de un edificio. Para mapear un pasaje de edificio, conecte el camino donde se cruza con el esquema de construcción con los nodos, y luego etiquetar la parte de la carretera que cruza con el edificio con `túnel = building_passage`.

![Mapear un pasaje de edificio](https://s3.amazonaws.com/f.cl.ly/items/1v1E0Z2P0C3X1K1h0Q1M/building-passage.gif)

OpenStreetMap Wiki: [Key: Túnel](http://wiki.openstreetmap.org/wiki/Key:tunnel)

#### Puente

Además de las etiquetas de los caminos `highway=*`, un puente lleva el `bridge = yes` y una etiqueta `layer=` que es uno más superior que las etiquetas `layer=` de las caracteristicas que intersectan con (default `layer` value is 0).

![Mostrar cómo mapear un puente](https://s3.amazonaws.com/f.cl.ly/items/1v1P2S3P35292a1m2a0m/bridge.gif)

OpenStreetMap Wiki: [Key: Puente](http://wiki.openstreetmap.org/wiki/Key:bridge)

#### Cruce ferroviario

Mapear una cruce de ferrocarril es similar a una intersección entre dos caminos conectando la carretera y el ferrocarril con un nodo. Entonces etiquetar el nodo con `railway=level_crossing`. No hay que confundir esta etiqueta con `railway=crossing` que es sólo para los pasos de peatones.

![Mapear un paso a nivel](https://s3.amazonaws.com/f.cl.ly/items/1q3o381b0K3r3x291J0E/level_crossing.gif)

OpenStreetMap Wiki: [Tag:railway=level_crossing](http://wiki.openstreetmap.org/wiki/Tag:railway%3Dlevel_crossing)

#### Rotondas

Mapee una rotonda trazando el camino circular y etiquetarlo con `junction = roundabout`. Para la clasificación de carreteras, utilice la clasificación más superiores de todos los caminos conectados a la rotonda. La etiqueta `junction=roundabout` implica un solo sentido - asegúrese de que la direccionalidad de la forma es correcta.

![Cómo mapear una rotonda](https://s3.amazonaws.com/f.cl.ly/items/1d0z472I3x2i2v2q0G2y/Screen%20Shot%202015-01-04%20at%2010.27.09%20PM.png)

#### intersecciones complejas

En un cruce complejo que involucra múltiples formas de transporte trace los caminos de manera que reflejen el flujo a lo largo de los principales carriles y asegúrese de que los "oneways" tengan sentido.

![](https://s3.amazonaws.com/f.cl.ly/items/0M3S232n2V342Y3T2n1Y/Screen%20Shot%202015-01-04%20at%2010.34.51%20PM.png)

## Edificios

El rastreo de edificios toman buenas imágenes y paciencia. Tómese su tiempo y preste atención a la angularidad, la alineación entre los edificios y que refleja las regularidades entre los edificios. Los edificios se trazaron como contornos de  *donde los edificios hacen contacto con la tierra*. Esta última pieza es importante. El contorno del techo es a menudo más fácil de ver en las imágenes de lo que encontrarás a menudo trazados en OpenStreetMap pero  está mal y necesita ser cambiado con el contorno del suelo.

![505kyfalbo](https://cloud.githubusercontent.com/assets/126868/6914386/8d115556-d7a7-11e4-9f04-7291331e7ef8.gif)

El principal reto en rastrear edificios es la falta de detalle en las imágenes. Cuando no encuentres suficientes buenas imagenes para trazar un edificio, simplemente no lo traces.

Aquí hay un par de consejos específicos JOSM  para trazar edificios con eficacia.

Para trazar los edificios, utiliza el **buildings plugin**. Una vez activada, una nueva herramienta de construcción estará disponible en la barra de herramientas de edición de la izquierda. La herramienta de creación "** B **" dibujará formas rectangulares etiquetando `building = yes` para usted. Para dibujar edificios paralelos entre sí, dibuja el primer edificio, seleccionalo, luego dibuja edificios subsiguientes.

![](Https://s3.amazonaws.com/f.cl.ly/items/3A2T0l0Y3x0N030w090F/building.gif)

Si dibuja caminos cerradas con manos libre, utiliza `Tools > Orthogonalize Shape` o presione "**Q**" para cuadrar construcciones de este modo:

![](https://s3.amazonaws.com/f.cl.ly/items/3U3c1S1V2X1Q1h3s0845/Screen%20Shot%202014-12-15%20at%206.35.04%20PM.png)

Utilize líneas auxiliares para alinear partes salientes de un edificio:

![](Https://s3.amazonaws.com/f.cl.ly/items/0s3G3T200b1C3d3i0x2Y/buildingalignment.gif)

Para alinear los edificios previamente trazadas, cuidadosamente seleccionalos y a continuación, seleccione dos nodos de referencia para crear un eje de alineación y orthoganalize la selección con "**Q**".

![3zpk8nxbdt](https://cloud.githubusercontent.com/assets/126868/6900081/d65cf23c-d721-11e4-82f9-7084b11bb41f.gif)

Puede utilizar partir edificios temporalmente con`Tools > Split Way` o presionando "**P**" para ortogonalizar porciones de un edificio antes de reconectarse con `Tools > Connect Way` or pressing "**C**":

![](Https://s3.amazonaws.com/f.cl.ly/items/151R161W3i2c043q1z0B/straightenc.gif)

He aquí un rápido final para terminar el tutorial de cómo trazar un edificio:

![](Https://s3.amazonaws.com/f.cl.ly/items/3T0Y0h390L3l19000s2h/buildings.gif)

OpenStreetMap Wiki: [Key: Edificio](http://wiki.openstreetmap.org/wiki/Key:building)

Vídeo: [Trazando edificios con JOSM](https://www.youtube.com/watch?v=9GRIHSAAkSs)

## puntos de interés

"Puntos de interés" es un término general para una característica del mundo real como punto lo suficientemente notable para incluirlo en un mapa. Algunos ejemplos son los restaurantes, cafeterías, tiendas, bancos, iglesias, baños públicos y fuentes de agua. No hay una clave de etiqueta única para puntos de interés en OpenStreetMap sino una variedad que pueden ser usados para el mapeo de un punto de interés: `amenity=`, `shop=`, `tourism=` son algunos ejemplos.

OpenStreetMap Wiki: [Key:amenity](http://wiki.openstreetmap.org/wiki/Key:amenity), [Key:tourism](http://wiki.openstreetmap.org/wiki/Key:tourism), [Key:shop](http://wiki.openstreetmap.org/wiki/Key:shop), [Key:leisure](http://wiki.openstreetmap.org/wiki/Key:leisure)

### Punto de interés simple

La forma más sencilla de mapear un punto de interés es crear un nodo y agregar etiquetas correspondientes. He aquí un ejemplo de una fuente mapeada en OpenStreetMap:

![](Https://s3.amazonaws.com/f.cl.ly/items/2a0E2w0u2U0D0t2b1Z3Y/fountain.gif)

He aquí un ejemplo de un restaurante:

![](Https://s3.amazonaws.com/f.cl.ly/items/1R3K0A1p0C1G043n1o3d/komi.gif)

### Áreas como puntos de interés

Dondequiera que usted puede determinar claramente el grado de un "punto" de interés, mapeelo. Un buen ejemplo son los parques, aquí está Folger Park en Washington DC. El Parque se mapea como una forma cerrada etiquetado como `leisure=park`. Nótese cómo el camino sigue el contorno exacto del parque.

![](https://s3.amazonaws.com/f.cl.ly/items/0V2N0n290Z1L0H1h2b1e/Screen%20Shot%202015-01-10%20at%208.29.39%20AM.png)

### Edificio como punto de interés

A veces, el edificio en sí es considerado el punto de interés. Piense, por ejemplo un restaurante McDonalds en un edificio de usos múltiples urbano frente a un MacDonalds que conduce a  un centro comercial suburbano. O - a menudo fáciles de detectar a partir de imágenes de satélite - piensa en un lugar de culto como una iglesia. En tales casos, el edificio en sí debe ser etiquetado como un punto de interés. Aquí hay una iglesia que primero ha sido trazado como un único nodo en un edificio. El ejemplo muestra cómo se transfieren todas las etiquetas del nodo al edificio y luego se elimina el nodo.

![](Https://s3.amazonaws.com/f.cl.ly/items/2m0k0v333M1H0i1t3p1V/church.gif)

### escuelas y universidades

Escuelas solo se pueden asignar como un nodo sencillo etiquetado  como `amenity=school`. Pero a menudo las escuelas ocupan un edificio entero o un pedazo de tierra. Terrenos de la escuela, el terreno sobre el que se encuentra una escuela, se asignan como `amenity=school`. Los edificios de una escuela se mapean como `building=school`. Mapear escuelas sólo como un simple nodo es bueno. Sin embargo, siempre que sea apropiado, mapee del suelo de una escuela y edificios como caminos.

Un ejemplo en el que una escuela *no* ocupa todo el edificio:

![](https://s3.amazonaws.com/f.cl.ly/items/0H2W3b401X3H0r0O011s/Screen%20Shot%202015-01-09%20at%206.09.01%20PM.png)

Un ejemplo en el que una escuela *si* ocupan un edificio entero:

![](https://s3.amazonaws.com/f.cl.ly/items/0r3q0C0w2L0C3n3d2f11/Screen%20Shot%202015-01-09%20at%206.18.28%20PM.png)

Un ejemplo en el que una escuela ocupa un terreno propio de la escuela:

![](Https://s3.amazonaws.com/f.cl.ly/items/1W1A1p0U3z3D3E3g183M/highschool.gif)

Las universidades son similares:

![](Https://s3.amazonaws.com/f.cl.ly/items/102S1D1Z472x213M2b0Y/university.gif)

OpenStreetMap Wiki: [Tag:amenity=school](http://wiki.openstreetmap.org/wiki/Tag:amenity%3Dschool), [Tag:building=school](http://wiki.openstreetmap.org/wiki/Tag:building%3Dschool), [Tag:amenity=university](http://wiki.openstreetmap.org/wiki/Tag:amenity%3Duniversity), [Tag:building=university](http://wiki.openstreetmap.org/wiki/Tag:building%3Duniversity), [Tag:amenity=college](http://wiki.openstreetmap.org/wiki/Tag:amenity%3Dcollege)

## arroyos y ríos

Traza pequeños arroyos sólo como una forma etiquetada con `waterway=stream`. La dirección de los caminos señala la dirección en la que fluye el agua. Para los ríos más grandes, rastrear el centro del río como `waterway=river` y además las orillas del río con etiquetas `natural=water` y `water=river`. El nombre del río siempre se sienta en la vía acuática. Vea aquí un ejemplo:

![](Https://s3.amazonaws.com/f.cl.ly/items/460R352M0H301L2Y1Q3T/river.gif)

Islas en ríos se mapean como relaciones de `type = multipolygon`. Observe cómo en una etiqueta multipolígono `natural = water` y `water =river` sientan en la relación multipolígono y no en el camino(way):

![](Https://s3.amazonaws.com/f.cl.ly/items/0t0A0q06130m0O1c3I19/multiriver.gif)

Video: [Map a river island](http://cl.ly/0M0m2C2t2T3g)

OpenStreetMap Wiki: [Tag: canal = río](http://wiki.openstreetmap.org/wiki/Tag:waterway%3Driver)

## Próximamente

- Paseos en bicicleta y senderos
- Lugares (ciudades versus pueblo versus suburbio versus barrios)
- Lagos