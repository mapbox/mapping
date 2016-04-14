---
title: Understanding navigation
---

Navigation is a service which helps people to get from one place to another by using the best route. For a navigation system to work it should have two important components, routing and guidance. To most people, these may appear to be the same, but each has a unique function. Routing is the process of selecting the best path in a network of roads. Guidance describes routing in the form of a human-readable list of instructions.

The navigation part looks at the road network as a form of connections and an expected travel time along the segments in between. In this part, turn restrictions, the shape of the road, or even traffic signals can influence the navigation. Everything that modifies the expected travel time along a road influences the navigation.

## Routing Profile

A navigation engine supports various *routing profiles*. These are the configurations, representing different routing behaviours for (typically) different transport modes. A profile describes whether we are supposed to route along a particular type of way, or over a particular node in the OpenStreetMap data, and also how quickly we'll be travelling when we follow its instructions. This feeds into the way the routing graph is created and thus influences the output routes. Examples of the most common routing profiles includes: car, bicycle and foot.

## Routing

Routing is used to **find an optimum path in a map**. There are some key OpenStreetMap tags which influence navigation, such as the `type=restriction`, which prohibits the access to certain kinds of turns at junctions, `maxspeed=*`, which defines the default-speed to be followed in the path and so on.

The most important attributes required to provide the optimum route using OpenStreetMap data are:

### 1. Road types

The way types are considered according to their order of importance. They are tagged with `highway=*` tag. The general order of importance for way types are:

    major highways > main roads > streets > footpaths

### 2. Maxspeed limits

The `maxspeed=*` tag is used to define the maximum legal speed limit for general traffic on a particular road, railway or waterway. The max speed values will be interpreted as kilometers per hour by default. The `maxspeed=*` is an important part of routing as it is used in determining the shortest time taken by a specific route to reach a destination. In case of two routes, the one with the shortest time take(higher maxspeed) and shortest distance will be the optimum route.

### 3. Turn-Restrictions

`type=restriction` is the relation in OSM which is used to describe turn restrictions at junctions. The relation has a set of tags, e.g. `no_left_turn`, `no_right_turn`, `no_u_turn`, etc which describes the type of turn restriction. These are traffic signage at junctions and this information must be present on the map to find the best route by the routing engine while planning the journey.

![screen shot 2016-03-08 at 8 05 36 pm](https://cloud.githubusercontent.com/assets/8401827/13604633/ad8bff4a-e569-11e5-9198-3ac9c88e5619.png)

### 4. Access-Restrictions

Apart from turn restrictions, there are access restrictions for different parts of highways. Some of these tags are `access=no`, `access=private` etc which will end up altering the route to be taken during the journey. For more information on the various king of `access=*` tags take a look at [Key:access](http://wiki.openstreetmap.org/wiki/Key:access) and [Conditional restrictions](http://wiki.openstreetmap.org/wiki/Conditional_restrictions).

### 5. Traffic signals

Traffic signals such as: `highway=traffic_signals`, `highway=stop` or `barrier=toll_booth` as well as `traffic_calming=*` are considered during routing. The `type=restriction` more commonly referred to as **turn restrictions** are traffic signage which prohibits certain turns in intersections are also a crucial component of a great `routing` engine. 

### 6. Other attributes

Everything that modifies the expected travel time along a road influences the navigation. Considering this, there are some other tags apart from the above mentioned tags which play a significant role in routing. They are:

    oneway=yes
    oneway=reversible
    junction=roundabout
    bridge=yes
    tunnel=yes
    surface=*
    access=*

Overall the selection of a particular route or the optimum route depends on a variety of factors which are taken into account by the routing engine: 

* Personal factors: fastest route, most scenic route, quietest route, shortest route, facilities requirement
* Vehicle factors: mode of transport, physical category of vehicle, optimum traveling speed, riding surface requirements,    fueling requirements
* Route factors (static): classification of road, access restrictions, speed limits, turn restrictions, oneway rules,        number of lanes
* Traffic factors (dynamic): traffic conditions, traffic signal cycle duration, weather conditions
* Riding surface factors: surface material, smoothness, barriers, speed breakers, road width, lane width, age

## Lane Guidance

![screen shot 2016-03-08 at 7 51 36 pm](https://cloud.githubusercontent.com/assets/8401827/13604319/236e84dc-e568-11e5-850a-cf398719db11.png)

*How a driver views turn lanes from the car*

Guidance is used to **lead a person through the determined optimum path**. Once the routing algorithm determines the feasible optimum path, that route is converted into a set of human-readable instructions known as guidance. For proper guidance, there are some key OSM tags being used in OpenStreetMap,such as `turn:lanes=*` tag to specify the lane to be chosen in the routing path and so on.  

Turn lanes have an influence on the path finding and are one of the most vital components for proper guidance. Choosing the correct turn lane can have a big influence in navigation. In many cases, they only help to illustrate a turn better but other times, they are vitally important. In guidance, the aim is to provide a set of instructions, like keep right or keep left by describing the optimum route found by the routing algorithm to a driver.

These tags also influence the travel times, such as lanes information which in the form of HOV lanes can both positively and negatively influence travel times.

The most important attributes required to provide the better guidance using OpenStreetMap data are:

    lanes=*
    turn:lanes=*
    name=*
    ref=*
    relation:route
