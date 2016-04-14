---
title: Configuración
---


Para empezar, configurar su entorno de trabajo con las herramientas que puedas necesitar. Esta guía le guiará a través de la creación de una cuenta en OpenStreetMap.org y configurar el editor para empezar a mapear.

## Crear una cuenta en OpenStreetMap

1. Ir a OpenStreetMap.org y crear una cuenta: [https://www.openstreetmap.org/user/new](https://www.openstreetmap.org/user/new)
2. **IMPORTANTE** agregar una foto suya en su perfil si usted es un ser humano
3. Añadir una descripción personal, como a continuación

### Descripción del perfil

Es útil incluir:

- Las áreas en las que estas interesado en mapear
- Un mensaje agradable que permite a otros a ponerse en contacto
- Enlaces a su página de inicio/twitter etc que permita a la gente seguirte

*(Formato en [Markdown](http://en.wikipedia.org/wiki/Markdown))*

He aquí un buen ejemplo:

![](https://s3.amazonaws.com/f.cl.ly/items/0h1C3r251C081I0n2t3x/Screen%20Shot%202014-12-12%20at%205.11.43%20PM.png)

## Instale JOSM

Estamos usando el editor de OpenStreetMap Java (JOSM) para la mayoría de tareas. Así es como nos configuramos.

### 1. Descargue e instale JRE

Para ejecutar JOSM  necesitará JRE - Java Runtime Environment. [Descargar e instalar JRE](http://www.oracle.com/technetwork/java/javase/downloads/server-jre8-downloads-2133154.html).

### 2. Descargue JOSM

[Anda a la página web de JOSM](https://josm.openstreetmap.de/wiki/Download) para descargar la última versión probada de JOSM. Colóquelo en un lugar común para las aplicaciones de su sistema operativo.

- OSX: `/ Aplicaciones /`
- Windows: `C: \ Archivos de programa \`

### 3. Abra JOSM

Ahora puedes abrir la aplicación JOSM que descargaste con un doble clic.

Si quieres que JOSM utilice más memoria y está utilizando [Linux](http://wiki.openstreetmap.org/wiki/JOSM/Linux) también puedes ejecutar con:


    ~$ java -Xmx1024M -DproxyHost=$PROXY -DproxyPort=8080 -jar josm-tested.jar


Una vez que JOSM está en funcionamiento es algo parecido a esto. Ir a buscar el diálogo de preferencias, lo necesitarás para el próximo par de pasos. Puede acceder a él desde la parte baja del icono de interruptor de  luz.

![](https://s3.amazonaws.com/f.cl.ly/items/1u073X3U3E371c122f22/Screen%20Shot%202014-12-12%20at%203.23.22%20PM.png)

### 4. Habilite el modo experto

Abra el diálogo de preferencias y active el "modo experto".

![Captura de pantalla de 10/22/2014 16 55 02](https://cloud.githubusercontent.com/assets/1152236/4744166/b9266700-5a2d-11e4-9f96-ecd7ec8b4faa.png)

### 5. Agregar usuario y contraseña

Ahora es el momento de conectarse a OpenStreetMap. Añada el nombre de usuario y la contraseña de la cuenta que acaba de crear en OpenStreetMap para JOSM.

![Captura de pantalla de 10/22/2014 16 52 05](https://cloud.githubusercontent.com/assets/1152236/4744256/bd2ced6e-5a2e-11e4-9db2-bcd198c082a6.png)

Ahora usted debería ser capaz de recoger datos de OpenStreetMap haciendo clic en el botón verde hacia abajo de la parte superior izquierda:

![](Https://s3.amazonaws.com/f.cl.ly/items/1o2A3Y383P1d2Z0c283d/josm.gif)

### 6. Active  el Control Remoto

El control remoto te permite lanzar JOSM directamente desde el mapa en OpenStreetMap.org. Para activar el Control remoto, marque esta casilla en los ajustes:

![Pantalla 05/08/2015 15 37 58](https://cloud.githubusercontent.com/assets/126868/7534456/69ced7c6-f598-11e4-8a57-d0bf2df339d9.png)

También has un check a la  opción 'Descargar objetos a una nueva capa'. Ahora usted debería ser capaz de obtener los datos directamente iniciando en OpenStreetMap.org así:

![](https://s3.amazonaws.com/f.cl.ly/items/3R0Q3Y3W1b0h3j0k242e/josm.gif)