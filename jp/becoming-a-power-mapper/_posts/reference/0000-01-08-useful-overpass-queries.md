---
title: Useful Overpass queries
---


Need | Query
---|---
特定日付より前| `[out:xml][timeout:600];(way["highway"](newer:"2015-05-30T07:00:00Z")({{bbox}}););out body;>;out skel qt;`
特定期間中の編集|`[out:xml][timeout:600];(way["highway"](changed:"2015-05-14T07:00:00Z","2015-05-30T07:01:00Z")({{bbox}}););out body;>;out skel qt;`
日時を2つ指定し、その間の差分を作成| `[diff: "2015-06-30T15:00:00Z","2015-09-21T15:00:00Z"][out:xml][timeout:25];(way["highway"]({{bbox}}););out body;>;out skel qt;`
特定ユーザによる編集抽出| `[out:json][timeout:25];(node(user:"ramyaragupathy")({{bbox}});way(user:"ramyaragupathy")({{bbox}});relation(user:"ramyaragupathy")({{bbox}}););out body;>;out skel qt;`
特定タグの抽出| `[out:json][timeout:25];(node["amenity"="hospital"]({{bbox}});way["amenity"="hospital"]({{bbox}});relation["amenity"="hospital"]({{bbox}}););out body;>;out skel qt;`
全てのamenityを抽出| `[out:json][timeout:25];(node["amenity"]({{bbox}});way["amenity"]({{bbox}});relation["amenity"]({{bbox}}););out body;>;out skel qt;`
特定のタグと一緒に、別の値やタグが付与されていない地物| `[out:json][timeout:25];(node["highway"="footway"]["footway"!~"."]({{bbox}});way["highway"="footway"]["footway"!~"."]({{bbox}});relation["highway"="footway"]["footway"!~"."]({{bbox}}););out body;>;out skel qt;`
クエリの中から再帰してクエリ| `[out:json][timeout:250];((way({{bbox}})[highway='primary'];relation({{bbox}})[highway='primary'])->.a;node.a[name='Sand Hill Road'];);out body;>;out skel qt;`
特定地域の中でタグ検索| `[out:json][timeout:250];(area[name="Palo Alto"];way(area)["building"];relation(area)["building"];);out body;>;out skel qt;`