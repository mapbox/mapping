---
title: Introduction
---

The most basic use of a map is to find out where one is located. After that, one usually wants to use the map to find the best route to another location. On a [digital map](https://en.wikipedia.org/wiki/Digital_mapping), this is usually provided with [turn by turn navigation](https://en.wikipedia.org/wiki/Turn-by-turn_navigation) using a [navigation device](https://en.wikipedia.org/wiki/GPS_navigation_device).

![navigation_optimized](https://cloud.githubusercontent.com/assets/13744156/18119269/76493c6c-6f77-11e6-8c18-a1daf7845f0b.gif)
_Let the computer find the best route for you!_

## Components of map navigation

A navigations system has user facing components that interact with the user and back end components that computes the best route based on the user input and available data. In this guide we will focus on the back end components that rely on map data.

**User facing components**
- User interface controls for setting the the origin and destination
- Map display that visually represents the route to take
- Turn by turn instructions that accurately describe the navigation maneuvers at the appropriate time
- Route status that includes current progress and the estimated time of arrival (ETA) at the destination

**Back end components**
- A navigation profile that describes the mode of transport to use for the routing algorithm (eg. truck, cycle or foot) 
- A route finder that finds the best possible route between the origin and destination for the selected navigation profile
- A guidance system that converts the route into instructions for turn by turn navigation

### Navigation profile

The navigation profile accurately describes the preferred types of roads to take based on the mode of transport used. A walking profile will have a fairly constant walking speed on any type of road, while a car profile will have avery high traveling speed on a motorway and will be much slower on a residential road. This has a large influence on the route finder.

![screenshot_20160831-124644](https://cloud.githubusercontent.com/assets/8401827/18120537/b392baac-6f7d-11e6-9e36-480b3145c429.png)

*Different routing profiles: cars, walking, bicycle.*

### Routing

[Routing](http://wiki.openstreetmap.org/wiki/Routing) is the process of selecting the best path in a network interconnected of roads on the map. Every road segment on the map has a traveling speed calculated based on various road factors, and the fastest and safest route is selected from all possible combinations.

![](https://farm4.staticflickr.com/3814/12241013316_df99a4ff83_o.png)<br>
_Finding the route between two points involves complex calculations on a [routing graph](https://www.mapbox.com/blog/smart-directions-with-osrm-graph-model/)_

The calculation of an accurate route depends on a variety of factors which are taken into account by the routing algorithm:

* Personal factors: fastest route, most scenic route, quietest route, shortest route, facilities needed, toll rates
* Vehicle factors: mode of transport, physical category of vehicle, optimum traveling speed, riding surface requirements, fueling requirements
* Route factors (static): classification of road, access restrictions, speed limits, turn restrictions, oneway rules, number of lanes
* Traffic factors (dynamic): traffic conditions, traffic signal cycle duration, weather conditions
* Riding surface factors: surface material, smoothness, barriers, speed breakers, road width, lane width, age

### Guidance

![](https://cloud.githubusercontent.com/assets/12932279/16989362/402b3f44-4e94-11e6-8e8a-a60cf0b08705.png)
_A route is converted into a series of easy to follow instructions for the user_

Route guidance is used to lead a person through the determined path. Once the routing algorithm determines the best path, that route is converted into a set of human-readable instructions known as guidance. The guidance represents the street names, the turn lanes marked on the roads, exit numbers, and destinations shown on sign boards. Accurate and relevant guidance can greatly enhance the user experience of using the map for navigation.

## Navigating the future

Providing accurate navigation using maps is dependent on having detailed and updated data about the world. The world is transforming every second and the next generation of navigation will need to have the latest information about the world that will come from various sources.

### Telemetry

<img width="798" alt="screenshot 2016-09-15 21 27 43" src="https://cloud.githubusercontent.com/assets/126868/18557117/46f4f328-7b8b-11e6-856d-c545e21c49ef.png">
_Telemetry traces of Strava users from [Strava Globalheatmap](http://labs.strava.com/heatmap/#14/-74.02871/40.70159/blue/both)_

Telemetry is the remote collection of data which can be physical, environmental or biological. Most internet and GPS enabled phones collect location and other environmental data and reports it to a central service that can aggregate the data to determine traffic conditions on a road. 


### Forward facing cameras & Street-view

![untitled2](https://cloud.githubusercontent.com/assets/126868/18557457/a667474c-7b8c-11e6-844b-e308c650a8b1.gif)
_Crowdsourced streetview photographs from [narrow alleys in India using Mapillary](https://www.mapillary.com/app/?lat=23.018631999999997&lng=72.595325&z=17&pKey=4tjlrGmABA2sxmLLmAIq9Q&focus=photo)_

Street view images from dashcams, mounted cameras in vehicles using apps gives highly detailed 360° view of streets. This can help detect traffic signage, access restrictions, traffic signals, road markings to help add and confirm ground features into a map. Opensource street view photos include [Mapillary](https://www.mapillary.com/) and [OpenStreetView](http://openstreetview.com/).

### Live Aerial & Drone Imagery

<img width="676" alt="screenshot 2016-09-15 21 34 33" src="https://cloud.githubusercontent.com/assets/126868/18557357/364ae05e-7b8c-11e6-81b4-dc9ff629c7a5.png"><br>
_High resolution imagery captured from [UAVs in Srilanka](https://www.mapbox.com/blog/sri-lanka-drone-imagery/)_

[Aerial imagery](https://en.wikipedia.org/wiki/Aerial_photography) using drones can capture the changing surface of the earth at a much higher resolution and lower cost compared to traditional satellite imagery that is expensive to acquire and are updated less frequently.

### Machine learning and image recognition

![untitled2](https://cloud.githubusercontent.com/assets/126868/18557642/4fba4e8e-7b8d-11e6-85fb-c30092aac39b.gif)<br>
_Automatic image segmentation by [Mapillary](http://blog.mapillary.com/update/2016/05/19/austria.html)_

Advances in [machine learning](https://en.wikipedia.org/wiki/Machine_learning) opens up opportunities to automate manual tasks like [digitization of roads from satellite](http://stateofthemap.us/2016/skynet/) imagery and can accelerate the creation and maintenance of map data.