---
title: Guía de mapeo avanzado 
---

## Carreteras

**Redes de Barrio**
Los edificios residenciales por lo general se encuentra en un `residential` o `living_street` y tiene acceso a una carretera de un solo lado, y opcionalmente, a la parte trasera de la via `service alleyway`. Un edificio con calles residenciales en varios lados es una señal de trazados de caminos inexistentes debido a las sombras de las construcciones.
![untitled](https://cloud.githubusercontent.com/assets/126868/9808707/434854d4-587f-11e5-9132-c9e0824bd9e5.gif)

## Edificios

**Edificios paralelos** puede ser trazados usando el [el plugin de herramientas de construcción ](). Seleccione un edificio y  usando  la herramienta de alinear edificios subsecuentes a la primera en un solo paso.
![untitled](https://cloud.githubusercontent.com/assets/126868/9729213/73f5971e-562b-11e5-8c86-a1fa91eb969e.gif)
Puede utilizar la herramienta de área de extrusión (x), para agregar rápidamente detalles de las líneas mediante la creación de nuevos nodos (doble clic) y luego arrastrando las caras.
![untitled](https://cloud.githubusercontent.com/assets/126868/9730603/419f04bc-5635-11e5-8ab8-bda7b1223892.gif)

**Edificios compuestos** se pueden construir utilizando primitivas simples y uniendo las áreas superpuestas (Shift + J)
![untitled](https://cloud.githubusercontent.com/assets/126868/9731646/c5816cd8-563b-11e5-84c4-497d9ac7536f.gif)

## Estacionamiento

** Espacios de parqueos ndividuales**
Dibuje un cuadro que encierra las plazas de aparcamiento y use el [Plugin terracer] (http://wiki.openstreetmap.org/wiki/JOSM/Plugins/Terracer) para crear una cuadrícula. Sustituya el valor por defecto `tag edificio = yes` con` equipamiento = parking_space`. Si ha creado redes adyacentes, querras utilizar el validador de fusionar automáticamente los nodos superpuestos.
![untitled](https://cloud.githubusercontent.com/assets/126868/9601159/7ae06fd6-50bd-11e5-85ac-4fc3d00d7fbb.gif)