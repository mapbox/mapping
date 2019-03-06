---
title: Useful Overpass queries
---


## Newer than a given date

```css
{% raw %}
[out:xml][timeout:600];
(
  way["highway"](newer:"2015-05-30T07:00:00Z")({{bbox}});
);
out body;
>;
out skel qt;
{% endraw %}
```

## Changes in a given time period

```css
{% raw %}
[out:xml][timeout:600];
(
  way["highway"](changed:"2015-05-14T07:00:00Z","2015-05-30T07:01:00Z")({{bbox}});
);
out body;
>;
out skel qt;
{% endraw %}
```

## Provide two dates and generate a difference between the two

```css
{% raw %}
[diff: "2015-06-30T15:00:00Z","2015-09-21T15:00:00Z"][out:xml][timeout:25];
(
  way["highway"]({{bbox}});
);
out body;
>;
out skel qt;
{% endraw %}
```

## Extract edits of a user

```css
{% raw %}
[out:json][timeout:25];
(
  node(user:"ramyaragupathy")({{bbox}});
  way(user:"ramyaragupathy")({{bbox}});
  relation(user:"ramyaragupathy")({{bbox}});
);
out body;
>;
out skel qt;
{% endraw %}
```

## Extract a particular tag

```css
{% raw %}
[out:json][timeout:25];
(
  node["amenity"="hospital"]({{bbox}});
  way["amenity"="hospital"]({{bbox}});
  relation["amenity"="hospital"]({{bbox}});
);
out body;
>;
out skel qt;
{% endraw %}
```

## Extract all amenities

```css
{% raw %}
[out:json][timeout:25];
(
  node["amenity"]({{bbox}});
  way["amenity"]({{bbox}});
  relation["amenity"]({{bbox}});
);
out body;
>;
out skel qt;
{% endraw %}
```

## Find a particular tag without someother key value

```css
{% raw %}
[out:json][timeout:25];
(
  node["highway"="footway"]["footway"!~"."]({{bbox}});
  way["highway"="footway"]["footway"!~"."]({{bbox}});
  relation["highway"="footway"]["footway"!~"."]({{bbox}});
);
out body;
>;
out skel qt;
{% endraw %}
```

## Query within query

```css
{% raw %}
[out:json][timeout:250];
(
  (
    way({{bbox}})[highway='primary'];
    relation({{bbox}})[highway='primary'];
  )->.a;
  node.a[name='Sand Hill Road'];
);
out body;
>;
out skel qt;
{% endraw %}
```

## Search for a tag in an area

```css
{% raw %}
[out:json][timeout:250];
(
  area[name="Palo Alto"];
  way(area)["building"];
  relation(area)["building"];
);
out body;
>;
out skel qt;
{% endraw %}
```
