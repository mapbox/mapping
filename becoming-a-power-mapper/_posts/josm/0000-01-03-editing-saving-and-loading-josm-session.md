---
title: Saving and loading a JOSM session
---

It is possible to save a JOSM session similar most GIS software (in QGIS we call it a project file).  The JOSM session saves your current map view, OSM data and loaded layers such as imagery. 

The JOSM session is available in **File** menu.  You need to be in **Expert mode** to access this feature.  
To activate Expert mode, go to JOSM Preferences, activate **Expert mode** by clicking the checkbox.

## Saving a JOSM session

Load any of your preferred layers in JOSM.  
Save the JOSM session file clicking, **File > Session > Save session as ...**
Select any layers you want loaded when you start a new JOSM session.

![josm_session_save2]({{site.baseurl}}/images/saving-a-josm-session.gif)

## Loading a JOSM session

To load a previously saved JOSM session, click **File > Session > Load session**.
Select the `.jos` you saved.

![josm_session_load2]({{site.baseurl}}/images/loading-a-josm-session.gif)

NOTE: Do not save any OSM data within your `.jos` file.  Always load new data to avoid data conflicts. 

Examples of session files we use in the [/mapping repo](https://github.com/mapbox/mapping/tree/master/JOSM/sessions).

