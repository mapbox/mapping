---
title: Getting started
---

To [get started editing OpenStreetMap using JOSM](https://www.mapbox.com/blog/making-the-most-josm/), set up your work environment with the tools you would need.

## Setting up an OpenStreetMap Account

1. Go to OpenStreetMap.org and create an account: [https://www.openstreetmap.org/user/new](https://www.openstreetmap.org/user/new).
2. **IMPORTANT** add a picture of yourself to your profile.
3. Add a profile description like below:

### Profile description

It is useful to include:

- The areas you are interested in mapping;
- A nice message that allows others to get in touch;
- Links to your homepage/twitter etc that allows people to follow you.

*(format in [Markdown]( http://en.wikipedia.org/wiki/Markdown))*

Here is a good example:
![osm-profile-description-example](images/osm-profile-description-example.png)
‍
## Installing JOSM

We are using the Java OpenStreetMap Editor (JOSM) for most tasks. Here's how to get set up.

### 1. Download and install JRE

JOSM requires the Java Runtime Environment - JRE. [Download and install JRE]( http://www.oracle.com/technetwork/java/javase/downloads/jre8-downloads-2133155.html).

### 2. Download JOSM

Go to the [JOSM website](https://josm.openstreetmap.de/wiki/Download) to download the `tested` version. Place it in a common location for applications on your operating system.

- OSX: `/Applications/`
- Windows: `C:\Program Files\`

### 3. Open JOSM

Open the JOSM application you downloaded with a double click.

If you want JOSM to use more memory and you're using [Linux](http://wiki.openstreetmap.org/wiki/JOSM/Linux) you can also run it with:

    ~$ java -Xmx1024M -DproxyHost=$PROXY -DproxyPort=8080 -jar josm-tested.jar

Once JOSM is up and running it looks like this. Go find the **Preferences** dialog, you'll need it for the next couple of steps. You can access it from under the light switch icon.
‍
![josm-preferences](images/josm-preferences.png)

### 4. Enable expert mode

Open the **Preferences** dialog and enable **Expert mode**.

![check-expert-mode](images/check-expert-mode.png)

### 5. Add user and password‍

Now it's time to connect to OpenStreetMap. Add the user name and password of the account you just created on OpenStreetMap to JOSM.

![set-osm-username-and-password](images/set-osm-username-and-password.png)

Now you should be able to retrieve data from OpenStreetMap by clicking on the button with the green down error in the top left:

![download-data](images/download-data.gif)

### 6. Enable Remote Control‍

Remote control allows you to launch JOSM directly from the map on OpenStreetMap.org. To enable Remote Control, check this box in the settings:
‍‍‍
![enable-remote-control](images/enable-remote-control.png)

Also check the **‍** option. Now you should be able to retrieve data directly starting on OpenStreetMap.org like this:

![retrieve-data](images/retrieve-data.gif)