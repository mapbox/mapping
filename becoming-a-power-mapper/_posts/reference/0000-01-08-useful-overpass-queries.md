---
title: Useful Overpass queries
---


Need | Query
---|---
Newer than a given date| `[out:xml][timeout:600];(way["highway"](newer:"2015-05-30T07:00:00Z")({{bbox}}););out body;>;out skel qt;`
Changes in a given time period|`[out:xml][timeout:600];(way["highway"](changed:"2015-05-14T07:00:00Z","2015-05-30T07:01:00Z")({{bbox}}););out body;>;out skel qt;`
provide two dates and generate a difference between the two| `[diff: "2015-06-30T15:00:00Z","2015-09-21T15:00:00Z"][out:xml][timeout:25];(way["highway"]({{bbox}}););out body;>;out skel qt;`
extract edits of a user| `[out:json][timeout:25];(node(user:"ramyaragupathy")({{bbox}});way(user:"ramyaragupathy")({{bbox}});relation(user:"ramyaragupathy")({{bbox}}););out body;>;out skel qt;`
extract a particular tag| `[out:json][timeout:25];(node["amenity"="hospital"]({{bbox}});way["amenity"="hospital"]({{bbox}});relation["amenity"="hospital"]({{bbox}}););out body;>;out skel qt;`
extract all amenities| `[out:json][timeout:25];(node["amenity"]({{bbox}});way["amenity"]({{bbox}});relation["amenity"]({{bbox}}););out body;>;out skel qt;`
find a particular tag without someother key value| `[out:json][timeout:25];(node["highway"="footway"]["footway"!~"."]({{bbox}});way["highway"="footway"]["footway"!~"."]({{bbox}});relation["highway"="footway"]["footway"!~"."]({{bbox}}););out body;>;out skel qt;`
query within query| `[out:json][timeout:250];((way({{bbox}})[highway='primary'];relation({{bbox}})[highway='primary'])->.a;node.a[name='Sand Hill Road'];);out body;>;out skel qt;`
search for a tag in an area| `[out:json][timeout:250];(area[name="Palo Alto"];way(area)["building"];relation(area)["building"];);out body;>;out skel qt;`