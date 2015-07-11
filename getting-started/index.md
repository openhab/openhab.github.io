---
layout: page-sidebar
title: Getting Started
redirect_from:
  - /gettingstarted.html
---
## Requirements

---

1.  You will need to install Java if not already installed. Go to [http://java.com/](http://java.com/) to get it.
2.  openHAB runtime, this is the server.
3.  Any additional bindings you may need to support your devices and technologies from addons package
4.  OPTIONAL: You may want to download a tool to configure the items, sitemap and so on. If so, download openHAB Designer for your specific platform. This will give you syntax validation, content-assist and more on your configuration files.

All openHAB files are available in the [Downloads](/getting-started/downloads.html) section.


## Installing the openHAB runtime

---

The openHAB runtime comes as a platform-independent zip file. To install it, follow these simple steps:

1.  Unzip the `distribution-<version>-runtime.zip` to where it is intended to be running from, e.g. `C:\openhab` or `/opt/openhab`.
2.  Next, add the bindings you need from addons package. Unzip the previously downloaded `distribution-<version>-addons.zip` into a separate directory and then copy bundles which you need (every bundle resides in a separate `.jar` file) to the "addons" directory of openHAB.
3.  Create a personal configuration file `configurations/openhab.cfg` and add the appropriate configuration parameters from `configurations/openhab_default.cfg` (depending on the bindings you've copied).


## Installing the openHAB demo (optional)

---

The openHAB comes with a demo package which have all the configuration to play with a model of a house with some rooms, lights, heating and all the stuff. It also includes some demo rules to explore the possibilities of openHAB. To install it, follow these simple steps:

1.  Unzip the `distribution-<version>-demo-configuration.zip` to same directory, you've installed openHAB e.g. `C:\openhab` or `/opt/openhab`.
2.  Launch the runtime by executing the script `start.bat` or `start.sh`
3.  Point your browser to `http://<openHAB address or hostname>:8080/openhab.app?sitemap=demo`


## Installing the openHAB designer (optional)

---

The openHAB designer comes as a platform-_dependent_ zip, so choose the right one for your platform. To install it, follow these simple steps:

1.  Unzip the `distribution-<version>-designer-<platform>.zip` to some directory, e.g. `C:\openhab-designer` resp. `/opt/openhab-designer`
2.  Launch it by the executable `openHAB-Designer.exe` (resp. `openHAB-Designer` if you are on a Mac or Linux)
3.  Select the "configurations" folder of your runtime installation in the folder dialog that is shown when selecting the "open folder" toolbar icon.


## Configuring the server

---

The configuration files are text files that may be edited with any text editor you wish. Nevertheless, you may use the openHAB designer to edit them, and you will get info about any syntax error. Note that the expected file encoding is UTF-8.


### The openhab.cfg file

*   `openhab.cfg` is the main configuration file of openHAB. It specifies generic system settings as well as specific parameters for different bundles. Those options are specified in the following format: `<bundle name>:<parameter name>=<parameter value>`
*   All bundle specific configuration parameters are available on bundles documentation pages in the [openHAB Wiki](https://github.com/openhab/openhab/wiki)


### The yourname.items file

The next thing we must do is to tell openHAB which items we have. To do so, go to the "configurations/items" directory and create a new file called thenameyouwish.items. You have a demo.items sample file to see which is the syntax of this file.

In this file we define groups and items. Groups might be into groups, and items may be into none, one or more groups. For example:

*   `Group gGF (All)` This statement defines de gGF group and states that it belongs to the All group.
*   `Group GF_Living "Living room" <video> (gGF)` This statement defines de group GF_Living, defines that the user interface will show it as "Living room", defines the icon to be shown and states that it belongs to (gGF). Notice that the gGF group belongs to the ALL group, hence GF_Living inherits that group, and it belongs to the All group too.
*   `Group:Number:AVG Lighting "Average lighting [Lux](%.2f)" <switch> (Status)`: this statement means that there is a group called Lighting, which has a value calculated as an average of all its members, and its value is a float with two decimals. It will show a switch icon and it belongs to the Status group.

The items may include the KNX group address to use them. They might be actively read by openHAB or not. They look like this:

*   `Number Lighting_Room_Sensor "Lighting in the Room [Lux](%.2f)" <switch> (Room,Lighting) { knx = "<0/1/1" }`: This is a sensor item. It uses the 0/1/1 group address and openHAB will ask for its value periodically because there is a "<" sign before the address. It is a number item, called Lighting_Room_Sensor, and belongs to Room and Lighting groups.
*   `Switch Light_Room_Table "Table Light" (Room, Lights) { knx = "<0/1/10+0/1/30"}`: This is a switch item that has two addresses. openHAB may respond to events in any of them, but may actively read the first one.

For more info about other options have a look at the demo.items file.


### The yourname.sitemap

In this file we tell openHAB how we want the items to be shown in the user interface. First, create a new thenameyouwish.sitemap file in the "configurations/sitemap" directory. We might define here:

*   `sitemap demo label="Main Menu"`: This will be the first line. It is mandatory and it states the name of your sitemap (demo) and the title of the main screen.
*   You may find descriptions like:

        Frame label="Demo" {
                          Text label="Group Demo" icon="1stfloor" {
                          Switch item=Lights mappings=[OFF="All Off"]
                          Group item=Heating
                          Group item=Windows
                          Text item=Temperature
                          }
                          Text label="Multimedia" icon="video" {
                          Selection item=Radio_Station mappings=[0=off, 1=HR3, 2=SWR3, 3=FFH, 4=Charivari]
                          Slider item=Volume
                          }
                          }

*   This means that you want a frame with a visual label "Demo". Then, inside you want two elements:
*   An item called Group Demo with 1stfloor icon that contains 4 items.
*   The first one is the group Lights, that has a mapping. It means that when it receives a value of OFF, it might show a "All off" text.
*   The second one will be the Heating group.
*   etc.
*   An item called Multimedia with icon video. It has two elements:
*   The Radio_station item that has several mappings
*   The Volume item, shown as an Slider.

For more info about other options have a look at the demo.sitemap file.

NOTE: Items and sitemap may be changed in runtime as needed.


## Start the server!

---

1.  Launch the runtime by executing the script `start.bat` or `start.sh`


## Go test it!

---

openHAB comes with a built-in user interface. It works on all webkit-based browsers like Chrome, Safari, etc. Point your browser to `http://<openHAB address or hostname>:8080/openhab.app?sitemap=demo` and you should be looking at your sitemap.