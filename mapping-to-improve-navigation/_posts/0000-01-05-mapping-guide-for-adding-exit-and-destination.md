---
title: Mapping guide for exit and destination
---

![5138660996_1957ee06ed_o](https://cloud.githubusercontent.com/assets/17887418/15180552/ec541b64-179f-11e6-88d7-4b3074f161e4.jpg)

## What are exit numbers?
   * An exit number is a number assigned to a road junction, usually an exit from a freeway. It is usually marked on the same sign as the destinations of the exit, as well as a sign in the gore.
   
  ![](https://slack-imgs.com/?c=1&url=https%3A%2F%2Fcloud.githubusercontent.com%2Fassets%2F17470597%2F15181512%2F4ff5546c-17a5-11e6-83ff-bea9cfa20493.jpg)
   
### Different tags for exit numbers:
* `ref=*` is used when the exit has a specific number assigned to it.
* `noref=yes` is used when the exit doesn't have any official number assigned to it.
  
## How to add exit numbers?

* Open [checkautopista2](http://k1wiosm.github.io/checkautopista2) and zoom to the assigned state. In the search tab (top left corner) click on `search in map` button to load all the visible highways in the bounding box.

* Select the assigned highway from the dropdown and click on the `download` button.

 ![che](https://cloud.githubusercontent.com/assets/12744420/14307643/5ab948c2-fbee-11e5-9965-87541edee1a5.gif)
 
### Verify the exits on the route for missing information

* Load the route in JOSM

![che1](https://cloud.githubusercontent.com/assets/12744420/14307716/ccdb6296-fbee-11e5-823a-d55b2e66fc6c.gif)
 
  ![screen shot 2016-04-05 at 6 47 15 pm](https://cloud.githubusercontent.com/assets/12744420/14283008/e09e6a7a-fb5e-11e5-9f24-4f3f5110f3d7.png)

  * Browse along the route and check the ways on both directions at every exit location for the following:
 - There is a `motorway_junction` at the start of every `motorway_link` exiting the highway
  - The `motorway_junction` has a correct exit number `ref` value as per the source. 
 - The exit number on both directions are the same
 - There is only one exit in a direction for every exit number
 
**Add missing exit numbers**

* Download the data and mapillary layer to locate a  [signboard](https://en.wikipedia.org/wiki/Road_signs_in_the_United_States#Interchange_signs) around the blue marker in the imagery.

* Use a combination of Mapillary, Department of Transportation (DoT) documents and Wikipedia to add the `ref=*` tag on `highway=motorway_junction` (stick to using Mapillary and DoT doc as primary source and move to others in case of unavailability of information)

* If it is confirmed there is no exit number for the `motorway_junction` add another tag `noref=yes` to indicate the exit does not have an official reference number.



## Analyzing signboards in mapillary

Look out of Highway sign boards on imagery. They may look something like this-

![fotorcreated](https://cloud.githubusercontent.com/assets/12744420/13744230/6d841f7a-ea0c-11e5-8fdc-3758c39816a9.jpg)

Places to look for-
- near a `motorway_junction`
- near **start** of a `motorway_link`

![screen shot 2016-03-11 at 4 56 14 pm](https://cloud.githubusercontent.com/assets/12744420/13700961/3b7559f4-e7aa-11e5-9b57-519a5f7ee070.png)



### Do's and don'ts 
- It is not necessary that  exit numbers are sequential. It might find 45 after 41.
- There are some `motorway_junction` which don't have any associated exit number. Add `noref=yes` on these nodes.
![no ref](https://cloud.githubusercontent.com/assets/17470597/15071466/65aff514-13a9-11e6-9392-3677c8b193a0.jpg)

- If there are multiple exits on the same [signboard](https://en.wikipedia.org/wiki/Road_signs_in_the_United_States#Interchange_signs) then you can tag them as `ref=* ; *` instead of `ref:left=*` and `ref:right=*` until you are confirmed with that.

- In the case of discrepancy between mapillary and DoT document, look out for the recent change in exit numbers on the web. Many states changes/in a process to change the exit numbers.
- **Ignore the `highway=motorway_junction` where the traffic flow is towards the motorway**


## What are destination tags?

* Destination tags describe the content of signposts or ground writing indicating the names of the locations that a certain exit from the freeway or a highway is heading to. 
* The key `destination=*` describes where a certain exit leads to. Thus navigation systems can refer to road signs that the driver actually sees.

![24-wa_i-5_n_exit_164a__1_](https://cloud.githubusercontent.com/assets/17887418/15180428/2f96a4c4-179f-11e6-88ee-4b4e8857c441.jpg)

### Different tags for destinations:
* `destination` tag refers to the place that the way exiting from the freeway leads to.
* `destination:ref` is the reference of the roads directly ahead. 
* `destination:ref:to` is to specify the reference of a major highway ahead.
* `destination:street` refers to the main street the way exiting from the freeway leads to. 

## How to add destination tags?

### Assign a highway and use Checkautopista2 to map features

1. Open the destination reference document for your assigned city area. Pick a highway to check and assign it on the spreadsheet to avoid conflict.

2. Open [checkautopista2](http://k1wiosm.github.io/checkautopista2) and zoom to the assigned state. In the search tab (top left corner) click on `search in map` button to load all the visible highways in the bounding box.

3. Select the assigned highway from the dropdown and click on the `download` button.

 ![che](https://cloud.githubusercontent.com/assets/12744420/14307643/5ab948c2-fbee-11e5-9965-87541edee1a5.gif)


4. Look out for red outer circle for missing destination. Use `open in JOSM` button to open the node in JOSM. Orange outer circle represents `exit_to` tag and we don't need to add destination tags in the way. Green outer circle represent that the concern way already has destination tag.
 
 
  ![che1](https://cloud.githubusercontent.com/assets/12744420/14307716/ccdb6296-fbee-11e5-823a-d55b2e66fc6c.gif)
 
  ![screen shot 2016-04-05 at 6 47 15 pm](https://cloud.githubusercontent.com/assets/12744420/14283008/e09e6a7a-fb5e-11e5-9f24-4f3f5110f3d7.png)


5. Download the data around the `motorway_junction` and mapillary layer to locate a  [signboard](https://en.wikipedia.org/wiki/Road_signs_in_the_United_States#Interchange_signs).

7. Use combination Mapillary images, DoT documents, and Wikipedia to add destination as `destination=*` on `motorway_link` ways and the destination highway as `destination:ref=*`.
 **Below is a an example**
 ![screen shot 2016-03-14 at 6 28 27 pm](https://cloud.githubusercontent.com/assets/12744420/13745188/a12098bc-ea12-11e5-8ffc-9fb839ed5aa2.png)
 **On the `highway=motorway_link`(represented by red line) add `destination=Daly City` and `destination:ref=I 280 South`. This can be confirmed with [DoT document](http://www.dot.ca.gov/hq/traffops/engineering/calnexus/pdf/101.pdf) and [wikipedia](https://en.wikipedia.org/wiki/U.S._Route_101_in_California) while searching for exit number 431**

8. Add any highway missing in the highway spreadsheet. Mark the highway done if all destination tags are mapped/review



## Analyzing signboards in mapillary

Look out of Highway sign boards on imagery. They may look something like this-

![fotorcreated](https://cloud.githubusercontent.com/assets/12744420/13744230/6d841f7a-ea0c-11e5-8fdc-3758c39816a9.jpg)

Places to look for-
- near a `motorway_junction`
- near **start** of a `motorway_link`

![screen shot 2016-03-11 at 4 56 14 pm](https://cloud.githubusercontent.com/assets/12744420/13700961/3b7559f4-e7aa-11e5-9b57-519a5f7ee070.png)



### Do's and don'ts 
- Use `;` to separate multiple destination and refs.
-  Read more on [Highway intersection](https://en.wikipedia.org/wiki/Interchange_(road)) to understand them better.

