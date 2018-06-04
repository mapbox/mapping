---
title: Explicit Turn Restrictions
permalink: /adding-turn-restrictions/
layout: post
---

## Turn restrictions
When navigating a street network, it is important to know which maneuver you are permitted to make. Turn restrictions are communicated through road signage and are placed to regulate traffic flow at intersections by restricting certain maneuver. When mapped in OpenStreetMap data, these restrictions have a dramatic impact on an OpenStreetMap based routing experience.

Example, the routing improvement when a missing Not Left Turn restriction (left), is added to the map (right):

![Impact of mapped turn restriction on routing experience.]({{site.baseurl}}/images/explicit-turn-restrictions/turn_restriction_example.png)

## Common turn restrictions found in the US

Turn restrictions come in many forms and combinations, and can vary from country to country. To start things off, this guide focuses on mapping turn restrictions in the United States.

Contrary to the name, turn restrictions are not limited to turns you are not allowed make. They can also be used to communicate the single maneuver you are allowed to make. We can categorize these two restriction types as mandatory (ex. you can only go straight) and prohibitory (ex. you cannot go straight).

In the US you will largely find prohibitory turn restriction signage and sometimes mandatory signs. Most often you will see one of these six signs:

| Sign | Meaning |
|---|---|
| ![]({{site.baseurl}}/images/explicit-turn-restrictions/no-right.png) | No right turn |
| ![]({{site.baseurl}}/images/explicit-turn-restrictions/no-left-turn.png) | No left turn |
| ![]({{site.baseurl}}/images/explicit-turn-restrictions/no-straight-on.png) | No straight on |
| ![]({{site.baseurl}}/images/explicit-turn-restrictions/no-turns.png) | No turns |
| ![]({{site.baseurl}}/images/explicit-turn-restrictions/no-u-turn.png) | No U turn |
| ![]({{site.baseurl}}/images/explicit-turn-restrictions/no-U-nor-left.png) | No U turn nor left turn |

In this guide we’ll focus on how to map the six most common US turn restrictions described above, then move into the mapping of conditional turn restrictions and a couple less non-standard turn restrictions you may see.

## Mapping an explicit turn restriction in the iD editor

#### Restriction as relation

**Every turn restriction is a relation made of ways and node**.

A turn restriction is a type of relation which should have a minimum of three members: `from`,  `via`  and `to`.

-   The **`from`** member is the **way** which represents driver’s is initial location.
-   The **`to`** member is the **way** which represents driver’s possible end location.
-   To drive from the **`from`** way to the **`to`** way a driver would pass through the **`via`** member, which can be either a **way** or **node** based on current road geometry.(Note: It is possible to have more than one via member in a turn restriction, but this doc will not detail these particular cases.)

For a turn restriction such as No Left Turn and No Right Turn the via member is typically a `node`. For No U Turn the via member can be both `way` and `node`.

---- | ----
<images width="300" alt="image" src="{{site.baseurl}}/images/explicit-turn-restrictions/no-left-members.png"> | <images width="300" alt="image" height="345" src="{{site.baseurl}}/images/explicit-turn-restrictions/no-right-turn-members.png">
Members of No Left Turn Relation | Members of No Right Turn Relation
<images width="350" alt="image" src="{{site.baseurl}}/images/explicit-turn-restrictions/no-u-way-members.png"> | <images width="350" height="400" alt="image" src="{{site.baseurl}}/images/explicit-turn-restrictions/no-u-node-members.png">
Members of No U Turn (via way) Relation | Members of No U Turn (via node) Relation

Once you have identified the location of an un-mapped turn restriction you are ready to create a turn restriction relation.

### Regular turn restrictions

#### No Left Turn / No Right Turn

![No Left Turn]({{site.baseurl}}/images/explicit-turn-restrictions/no-left-turn.png) 

![No Right Turn]({{site.baseurl}}/images/explicit-turn-restrictions/no-right.png)

*Note: Follow the same instructions listed below for both right and left turn restrictions, Make sure to match the direction of the mapping to the direction of the signage.*


1.  Check the **`to`** way to ensure that it is not a oneway.
    -   If a oneway exists which prohibits travel down the road in the way the turn restriction sign prohibits, mapping turn restriction is **not necessary**.
2.  Select the **`via`** node in the map view panel to activate the **Turn Restrictions editor** on the side bar.

    ![]({{site.baseurl}}/images/explicit-turn-restrictions/Left-2.gif)

3.  Select the **`from`** way in the **Turn Restrictions editor**.

    ![]({{site.baseurl}}/images/explicit-turn-restrictions/Left-3.gif)

4.  Select the arrow pointing left for the road where the restriction exists.

    ![]({{site.baseurl}}/images/explicit-turn-restrictions/Left-4.gif)

5.  Check that your relation has been added by scrolling down to **All relations** and clicking on  **`No Left Turn`**. There should be three members.

    ![]({{site.baseurl}}/images/explicit-turn-restrictions/Left-5.gif)

6.  If all looks good click **Save** to upload your turn restriction relation.

    ![]({{site.baseurl}}/images/explicit-turn-restrictions/SAVE.png)

    *Note: do not close your iD tab until the data has been fully uploaded to OSM. Wait until the "Uploading changes to OpenStreetMap..." window disappears.*

    ![]({{site.baseurl}}/images/explicit-turn-restrictions/upload-changes.png)

#### No Straight On

![]({{site.baseurl}}/images/explicit-turn-restrictions/no-straight-on.png)

1. Check the **`to`** way to ensure that it is not a oneway.
    -   If a oneway exists which prohibits travel down the road in the way the turn restriction sign prohibits, mapping turn restriction is **not necessary**.
2.  Select the **`via`** node in the map view panel to activate the **Turn Restrictions editor** on the side bar.

    ![]({{site.baseurl}}/images/explicit-turn-restrictions/No-straight-on-1.gif)

3.  Select the **`from`** way in the **Turn Restrictions editor**.

    ![]({{site.baseurl}}/images/explicit-turn-restrictions/No-straight-on-2.gif)

4.  Select the straight on arrow.

    ![]({{site.baseurl}}/images/explicit-turn-restrictions/StraightOn-3.gif)

5.  Check that your relation has been added by scrolling down to **All relations**, clicking on **`No Straight On`** and inspecting the relation members.

    ![]({{site.baseurl}}/images/explicit-turn-restrictions/StraightOn-4.gif)

6.  If all looks good click **Save** to upload your turn restriction relation.

    ![]({{site.baseurl}}/images/explicit-turn-restrictions/SAVE.png)

    *Note: do not close your iD tab until the data has been fully uploaded to OSM. Wait until the "Uploading changes to OpenStreetMap..." window disappears.*

    ![]({{site.baseurl}}/images/explicit-turn-restrictions/upload-changes.png)

#### No Turns / Only Straight On

![]({{site.baseurl}}/images/explicit-turn-restrictions/no-turns.png)


1. **No Turns** means **Only Straight On** restriction.
2. Check the **`to`** way to ensure that it is not a oneway.
    -   If a oneway exists which prohibits travel down the road in the way the turn restriction sign prohibits, mapping turn restriction is **not necessary**.
3.  Select the **`via`** node in the map view panel to activate the Turn Restrictions editor on the side bar.

    ![]({{site.baseurl}}/images/explicit-turn-restrictions/Only-straight-on-1.gif)

4.  Select the from way in the **Turn Restrictions** editor.

    ![]({{site.baseurl}}/images/explicit-turn-restrictions/Only-straight-on-2.gif)

5.  Select the straight on arrow.

    ![]({{site.baseurl}}/images/explicit-turn-restrictions/Only-straight-on-3.gif)

6.  Select the straight on arrow again to change `no_straight_on` to `only_straight_on` relation. 

    ![]({{site.baseurl}}/images/explicit-turn-restrictions/StraightOnOnly-4.gif)

7.  Check that your relation has been added by scrolling down to **All relations**, clicking on `Only Straight On` and inspecting the relation members.

    ![]({{site.baseurl}}/images/explicit-turn-restrictions/StraightOnOnly-5.gif)

8.  If all looks good click **Save** to upload your turn restriction relation.

    ![]({{site.baseurl}}/images/explicit-turn-restrictions/SAVE.png)

    *Note: do not close your iD tab until the data has been fully uploaded to OpenStreetMap. Wait until the "Uploading changes to OpenStreetMap..." window disappears.*

    ![]({{site.baseurl}}/images/explicit-turn-restrictions/upload-changes.png)


#### No U Turn

---- | ----
![Classic No U Turn signage]({{site.baseurl}}/images/explicit-turn-restrictions/no-u-turn.png)  ![Alternate No U Turn signage]({{site.baseurl}}/images/explicit-turn-restrictions/Alt-No-U-Turn.png)  ![Alternate No U Turn signage]({{site.baseurl}}/images/explicit-turn-restrictions/alt-u-turn-2.png) | ![new u turn]({{site.baseurl}}/images/explicit-turn-restrictions/no-u-turn-left.png)

Inspect the existing road geometry, if it is a [dual carriageway](https://en.wikipedia.org/wiki/Bidirectional_traffic), Follow below steps to add `no_u_turn` restriction where **`via`** will be **`way`**.

1.  Select the node which connects the **`to`** way and **`via`** way to activate **Turn Restrictions editor** on the side bar.

    ![]({{site.baseurl}}/images/explicit-turn-restrictions/UTurn-1.gif)

2.  Select the **`from`** way in the **Turn Restrictions editor**.

    ![]({{site.baseurl}}/images/explicit-turn-restrictions/UTurn-2.gif)

3.  Select the **`to`** way in the **Turn Restrictions editor**.

    ![]({{site.baseurl}}/images/explicit-turn-restrictions/UTurn-3.gif)

4.  Check that your relation has been added by selecting the **`from`** way, scrolling down to **All relations**, and clicking on `No U Turn`.

    ![]({{site.baseurl}}/images/explicit-turn-restrictions/UTurn-4.gif)

5.  If all looks good click **Save** to upload your turn restriction relation.

    ![]({{site.baseurl}}/images/explicit-turn-restrictions/SAVE.png)

    *Note: do not close your iD tab until the data has been fully uploaded to OSM. Wait until the "Uploading changes to OpenStreetMap..." window disappears.*

    ![]({{site.baseurl}}/images/explicit-turn-restrictions/upload-changes.png)

Inspect the existing road geometry, if it is a [bidirectional way](https://en.wikipedia.org/wiki/Dual_carriageway), Follow below steps to add `no_u_turn` restriction where **`via`** will be a **node**.

1.  Select the node which connects the **`to`** way and **`via`** way to activate Turn Restrictions editor on the side bar.

    ![]({{site.baseurl}}/images/explicit-turn-restrictions/viaNode-uTurn1.gif)

2.  Select the from way in the **Turn Restrictions editor**.

    ![]({{site.baseurl}}/images/explicit-turn-restrictions/viaNode-uTurn2.gif)

3.  Click the u-turn icon at the junction to apply the restriction.

    ![]({{site.baseurl}}/images/explicit-turn-restrictions/viaNode-uTurn3.gif)

4.  Check that your relation has been added by selecting the from way, scrolling down to **All relations**, and clicking on `No U Turn`.

    ![]({{site.baseurl}}/images/explicit-turn-restrictions/viaNode-uTurn4.gif)

5.  If all looks good click **Save** to upload your turn restriction relation.

    ![]({{site.baseurl}}/images/explicit-turn-restrictions/SAVE.png)

    *Note: do not close your iD tab until the data has been fully uploaded to OSM. Wait until the "Uploading changes to OpenStreetMap..." window disappears.*

    ![]({{site.baseurl}}/images/explicit-turn-restrictions/upload-changes.png)

#### No U Turn nor Left Turn

![No U Turn nor Left Turn]({{site.baseurl}}/images/explicit-turn-restrictions/no-U-nor-left.png)

When you encounter multiple turn restrictions contained within a single sign, it should be mapped as two separate restriction relations. In the case of No U Turn nor Left Turn, first create a no U Turn Relation, then create a No Left Turn relation.

1. Check the **`to`** way to ensure that it is not a oneway.
    -   If a oneway exists which prohibits travel down the road in the way the turn restriction sign prohibits, mapping turn restriction is **not necessary**.
    - Only add No U Turn restriction.
1.  Select the node which connects the **`to`** way and **`via`** way to activate the Turn Restrictions editor on the side bar.

    ![]({{site.baseurl}}/images/explicit-turn-restrictions/UTurn-1.gif)

2.  Select the **`from`** way in the **Turn Restrictions** editor.

    ![]({{site.baseurl}}/images/explicit-turn-restrictions/UTurn-2.gif)

3.  Select the **`to`** way in the **Turn Restrictions** editor.

    ![]({{site.baseurl}}/images/explicit-turn-restrictions/UTurn-3.gif)

4.  Click on the left arrow of the U turn relation.

    ![]({{site.baseurl}}/images/explicit-turn-restrictions/UTurn_and_left.gif)

5.  Check that your relations have been added by selecting the from way, scrolling down to **All relations**, and clicking on `No Left Turn` and `No U Turn`.

6.  If all looks good click **Save** to upload your turn restriction relations.

    ![]({{site.baseurl}}/images/explicit-turn-restrictions/SAVE.png)

    *Note: do not close your iD tab until the data has been fully uploaded to OSM. Wait until the "Uploading changes to OpenStreetMap..." window disappears.*

    ![]({{site.baseurl}}/images/explicit-turn-restrictions/upload-changes.png)


### Conditional turn restrictions

Some turn restrictions are only applicable under certain conditions. The most common conditions are:

-   day(s)
-   time(s)
-   vehicle type(s)
-   traffic signal
-   vehicle weight/height

Day, time, weight, height based conditions should be mapped, while traffic signal based conditions should not be mapped.

For all conditional restrictions you map the restriction as you would for a regular restriction. After regular restriction is mapped add the conditions to the tags. The general structure of a conditional turn restriction tag looks like:

`restriction:conditional`=`<regular restriction name> @ <condition>`

#### Day/Time Conditions

**Day Conditions**

A turn restriction containing a day condition specifies on which day(s) the restriction applies and some signage lists the day(s) does not apply. Day conditions are tagged using a single schema regardless of how the signage is phrased.

Day conditions are tagged using the Monday through Sunday calendar and are noted by two-character abbreviations:

| Day       | Abbreviation |
| --------- | ------------ |
| Monday    | Mo           |
| Tuesday   | Tu           |
| Wednesday | We           |
| Thursday  | Th           |
| Friday    | Fr           |
| Saturday  | Sa           |
| Sunday    | Su           |

You may also encounter signage which specifies Holiday. In the US this refers to Public Holidays and is abbreviated using `PH`.

When you come across signage which lists `School Days` or `When children are present` (if near a school) tag using `Mo-Fr` as in the US this is typically when school is in session.

**Time Conditions**

Conditional turn restrictions sign sometimes list time(s) along with day(s). When no particular days are listed you must include `Mo-Su` in the tag to specify that the restriction applies throughout the week.

Time conditions are tagged using the [**24 hour clock format**](https://en.wikipedia.org/wiki/24-hour_clock).

Seperators used in conditional turn-restriction syntax -

- When sign has sequence of day(s) mentioned, separate the day(s) range with `-` (Example - `Mo-Su`). 
- Use `-` to separate individiual time ranges and `,` to separate multiple time ranges (Example - `07:30-09:00,14:00-16:00`).
- Use `;` to list exception days after specifying day and time ranges (Example - `07:30-09:00,14:00-16:00; SH off`).
- **Note** - Give extra space while separating between `<days>` `<time>` and `<exception days>` after separator symbol. 

The basic syntax of a day/time conditional turn restriction is as follows:

`restriction:conditional=<regular restriction type> @ (<day(s)-day(s)> <time-time>,<time-time>; <exceptional days>,<>exceptional days>)`

| Sign<br />*(Source: Mapillary)* | Sign Type | Turn restriction type | Tag |
|------|---|----|---|
| ![]({{site.baseurl}}/images/explicit-turn-restrictions/no-Left-time.png) | No Left Turn | 7AM-9AM<br />3:30PM-5:30PM | `restriction:conditional=no_left_turn @ (Mo-Su 07:00-09:00,15:30-17:30)` |
| ![]({{site.baseurl}}/images/explicit-turn-restrictions/no-right-nightly.png) | No Right Turn | 11 PM-6 AM<br />Nightly | `restriction:conditional=no_right_turn @ (Mo-Su 23:00-06:00)` |
| ![]({{site.baseurl}}/images/explicit-turn-restrictions/no-left-double.png) | No Left Turn | Monday-Friday<br />7AM-9AM,<br />2PM-4PM<br />Sunday 5AM-5PM | `restriction:conditional=no_left_turn @ (Mo-Fr 07:00-09:00,14:00-16:00; Su 05:00-17:00`) |
| ![]({{site.baseurl}}/images/explicit-turn-restrictions/no-left-school-days.png) | No Left Turn | School days - Monday-Friday <br /> <br /> Wednesday - 7:30AM-8:15AM, 12:05PM-12:30PM and <br /> <br /> Monday,Tuesday, Thursday,Friday - 2:15PM-3PM | `restriction:conditional=no_left_turn @ (Mo-Tu 14:15-15:00; Th-Fr 14:15-15:00; We 07:30-08:15,12:05-12:50)` |
| ![]({{site.baseurl}}/images/explicit-turn-restrictions/no-right-nightly.png) | No Right Turn | 11PM-6AM<br />Nightly | `restriction:conditional=no_right_turn @ (Mo-Su 23:00-06:00)` |
| ![]({{site.baseurl}}/images/explicit-turn-restrictions/no-left-u-SH-edgecase.png) | No Left Turn and No U Turn (August to June is school academic year - school days are off) | Monday-Friday<br />7:30AM-9:30AM,<br />1:30PM-3:30PM | `restriction:conditional=no_u_turn @ (Mo-Fr 07:30-09:30,13:30-15:30; SH off)` and `restriction:conditional=no_left_turn @ (Mo-Fr 07:30-09:30,13:30-15:30; SH off)` |
| ![]({{site.baseurl}}/images/explicit-turn-restrictions/no-left-s-s-ph.png) | No Left Turn | Saturday, Sunday & (Public) Holidays | `restriction:conditional=no_left_turn @ (Sa-Su; PH)` |
| ![]({{site.baseurl}}/images/explicit-turn-restrictions/no-U-school.png) | No U Turn | 7AM-8:30AM,<br />2:30PM-3:30PM<br />on School days | `restriction:conditional=no_u_turn @ (Mo-Fr 07:00-08:30,14:30-15:30; SH off)` |
| ![]({{site.baseurl}}/images/explicit-turn-restrictions/no-left-day-exception.png) | No Left Turn | 7AM-6PM<br />except Sunday and Public Holiday | `restriction:conditional=no_left_turn @ (Mo-Sa 07:00-18:00; PH off)` |
| ![]({{site.baseurl}}/images/explicit-turn-restrictions/no-right-sa-su-ph.png) | No Right Turn | 7AM-9AM<br />except Sunday, Saturday and Holidays | `restriction:conditional=no_right_turn @ (Mo-Fr 07:00-09:00; PH off)` |

#### Vehicle Type Conditions

Occasionally you will find signs that specify that a particular vehicle type is excluded from signed turn restriction. In these cases you must add an additional `except=<vehicle type>` tag.

Vehicle types allowed under `except` tag are
- `psv` - Public service vehicles
- `bicycle`
- `hgv` - Heavy goods vehicles
- `taxi`
- `school_bus`
- `commercial_vehicle`

**Adding vehicle exceptions in restriction**

1. Select the added relation
    
    ![]({{site.baseurl}}/images/explicit-turn-restrictions/select-TR.gif)

2. Click on ➕ to add the `except` tags listed in the sign.

    ![]({{site.baseurl}}/images/explicit-turn-restrictions/add-except-tag.png)

3. Add the vehicle type as exception per shown in the sign. Use `;` to separate multiple vehicle types.
_Note : `bus`, `metro` vehicle types are classified as `psv`._

    ![]({{site.baseurl}}/images/explicit-turn-restrictions/except-tag-mapping.gif)


| Sign<br />(Source: Mapillary) | Turn Restriction Type | Condition | Tag |
|---|---|---|---|
| ![]({{site.baseurl}}/images/explicit-turn-restrictions/no-right-school-buses.png) | No Right Turn | 6-9 AM,<br />4-7 PM<br />except School Buses | `restriction:conditional=no_right_turn @ (Mo-Su 06:00-09:00,16:00-19:00)`<br />`except=school_bus` |
| ![]({{site.baseurl}}/images/explicit-turn-restrictions/no-left-commercial.png) | No Left Turn | except Commercial Vehicles | `restriction:conditional=no_left_turn`<br />`except=commercial_vehicle` |
| ![]({{site.baseurl}}/images/explicit-turn-restrictions/no-right-school-buses.png) | No Right Turn | 6-9 AM, 4-7 PM<br />except School Buses | `restriction:conditional = no_right_turn @ (Mo-Su 06:00-09:00,16:00-17:00)`<br />`except=school_bus` |
| ![]({{site.baseurl}}/images/explicit-turn-restrictions/no-left-commercial.png) | No Left Turn | except Commercial Vehicles | `restriction:conditional=no_left_turn`<br />`except=commercial_vehicle` |
| ![]({{site.baseurl}}/images/explicit-turn-restrictions/exceptbusandtaxi.png) | No Left Turn | except buses and taxis | `restriction=no_left_turn`<br />`except=bus;taxi`
| ![]({{site.baseurl}}/images/explicit-turn-restrictions/exceptmultiple.png) | No Left Turn | except buses, taxis, bicycles and commercial vehicles | `restriction=no_left_turn`<br />`except=bus;bicycle;taxi;commercial_vehicle` |
| ![]({{site.baseurl}}/images/explicit-turn-restrictions/exceptmuni.png) | No Left Turn | except MUNI | `restriction=no_left_turn`<br />`except=psv` |

#### Traffic Signal conditions

In the US there are many situations where a right turn is generally permitted except for when the traffic signal is red. We do not map these turn restrictions.

| Sign<br />(Source: Mapillary) | Turn Restriction Type | Condition | Tag |
|---|---|---|---|
| ![]({{site.baseurl}}/images/explicit-turn-restrictions/right-on-red.png) | No Right Turn | On Red | DO NOT MAP |
| ![]({{site.baseurl}}/images/explicit-turn-restrictions/right-on-red-alt.png) | No Right Turn | On Red | DO NOT MAP |

#### Vehicle Weight/Height Conditions

Weight and height conditions are used to restrict the access of large vehicles, notably trucks from certain roads. The vehicle weight and height will be limited by specifying the number in units which the country follows. This guide more focused on car based restriction. Do not map turn restrictions which limits for height or weight of any vehicle type.

| Sign<br />(Source: Mapillary) | Turn Restriction Type | Condition | Tag |
|---|---|---|---|
|  ![]({{site.baseurl}}/images/explicit-turn-restrictions/over-3-4.png) | No U Turn | Over 3/4 Ton | DO NOT MAP |
| ![]({{site.baseurl}}/images/explicit-turn-restrictions/no-right-vehicles.png) | No Right Turn | For vehicles over 40 feet | DO NOT MAP |
| ![]({{site.baseurl}}/images/explicit-turn-restrictions/no-right-truck.png) | No Right Turn | For vehicles over 12,000 lbs | DO NOT MAP |


### Look out for

#### Redundant turn restrictions

Redundant turn restriction can exist in two ways -

**Restriction to oneway street**

![]({{site.baseurl}}/images/explicit-turn-restrictions/no-right-oneway.png){:width="100"}

There are some situation where both restriction and oneway are signed together. In such situation, if **`to`** way is a `oneway` then there is no need to add turn restriction.

**Multiple prohibitory = single mandatory turn restriction**

To avoid redundant relations it is important to note and check what are the existing turn-restrictions at the junction -

Example - For No Left Turn and No Right Turn 

There are cases where Only Straight Turn is added, In such cases there is no need to delete existing restriction as it implies the same.

_Note : Always map what is signed at the intersection and do not imply turn restriction. If implied turn restriction is already present, do not delete it and also do not map._


#### Lane-specific restrictions


| Sign<br />(Source: Mapillary) | Turn Restriction Type | Condition | Tag |
|---|---|---|---|
| ![]({{site.baseurl}}/images/explicit-turn-restrictions/lanes-turn.png) | No U Turn | Right lane | DO NOT MAP |


#### Gate Conditions


| Sign<br />(Source: Mapillary) | Turn Restriction Type | Condition | Tag |
|---|---|---|---|
| ![]({{site.baseurl}}/images/explicit-turn-restrictions/gate-cond.png) | No Right Turn | When gate is closed. | DO NOT MAP |


#### Specified to way


| Sign<br />(Source: Mapillary) | Turn Restriction Type | Condition | Tag |
|---|---|---|---|
| ![]({{site.baseurl}}/images/explicit-turn-restrictions/to-way.png) | No Right Turn | to Virgil Avenue | `restriction=no_left_turn`<br />Virgil Avenue is mapped as the `to` way |


#### Temporary Turn Restrictions


| Sign<br />(Source: Mapillary) | Turn Restriction Type | Condition | Tag |
|---|---|---|---|
| ![]({{site.baseurl}}/images/explicit-turn-restrictions/temp-1.png) | No Left Turn | temporary | DO NOT MAP |
| ![]({{site.baseurl}}/images/explicit-turn-restrictions/temp-2.png) | No Right Turn | temporary | DO NOT MAP |


#### Restriction-ahead Warnings


| Sign<br />(Source: Mapillary) | Turn Restriction Type | Condition | Tag |
|---|---|---|---|
| ![]({{site.baseurl}}/images/explicit-turn-restrictions/ahead-1.png) | No Left Turn | ahead | DO NOT MAP |

#### Event-Specific Turn Restrictions

| Sign<br />(Source: Mapillary) | Turn Restriction Type | Condition | Tag |
|---|---|---|---|
| ![]({{site.baseurl}}/images/explicit-turn-restrictions/event.png) | No Left Turn | After Ball Park Events<br />Except Taxis | DO NOT MAP |


#### Removing an explicit turn restriction in the iD editor

Occasionally you'll find an incorrect turn restriction relation. To remove an incorrect relation you must make sure to delete each member of the relation.

1.  Click on the relation node to open the **Turn Restrictions editor** in the sidebar.

    ![]({{site.baseurl}}/images/explicit-turn-restrictions/removal-1.gif)

2.  Click on the relation  you want to delete in the **All Relation** list.

    ![]({{site.baseurl}}/images/explicit-turn-restrictions/removal-2.gif)

3.  Delete each member of the relation.

    ![]({{site.baseurl}}/images/explicit-turn-restrictions/removal-3.gif)

4.  Click on the relation node in the map view and inspect the **Turn Restrictions editor** to ensure that the relation has been fully removed.

    ![]({{site.baseurl}}/images/explicit-turn-restrictions/removal-4.gif)

5.  If all looks good, click **Save** to upload your changes.

    ![]({{site.baseurl}}/images/explicit-turn-restrictions/SAVE.png)

    *Note: do not close your iD tab until the data has been fully uploaded to OSM. Wait until the "Uploading changes to OpenStreetMap..." window disappears.*

    ![]({{site.baseurl}}/images/explicit-turn-restrictions/upload-changes.png)
