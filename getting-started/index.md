---
layout: page-sidebar
title: Getting Started
redirect_from:
  - /gettingstarted.html
---
## Requirements

---

You will need:

1.  A computer running Windows, MacOS or Linux, with a working version of Java
2.  The openHAB runtime core zip file from the [Downloads](/getting-started/downloads.html) page
3.  The openHAB addons zip file from the [Downloads](/getting-started/downloads.html) page
4.  OPTIONAL: The openHAB Designer, Demo and mobile apps are all optional, but may make it easier to get you up and running.


## Installing the openHAB runtime

---

_openHAB needs the Java runtime 1.7 or higher installed in order to work - if it's not already installed go to [http://java.com/](http://java.com/) to download the right installer for your operating system, and install that first.  The instructions are on that website too._

The openHAB runtime comes as a platform-independent zip file. To install it, follow these simple steps:

1.  Locate the `distribution-<version>-runtime.zip` you downloaded above.
2.  Unzip or Extract the zip file into a new directory of your choice.  On Windows we recommend `C:\openhab`, or on Mac/Linux or other systems `/opt/openhab`.
3.  Within the new directory, there'll be a folder called `configurations`. Within this folder create a copy of the default configuration file `openhab_default.cfg` and name it `openhab.cfg`.  This is where you'll store all your settings for openHAB and any bindings you need.


## Picking your bindings

---

1.  Locate the `distribution-<version>-addons.zip` you downloaded above.
2.  Unzip or Extract the zip file into a new directory (e.g. `all_addons`) within the `openhab` directory you chose above.
3.  Find any bundles (each bundle resides in a separate `.jar` file) that correspond to the technologies or devices you own \*, and copy their `.jar` file into the `addons` directory of openHAB.  For example, if you have any z-wave devices, you'll want to copy `org.openhab.binding.zwave-<version>.jar` into your addons directory.
4.  Most bindings will need some configuration in your `openhab.cfg` file.  Look through this file, and un-comment and configure any sections relating to the bindings you've picked.  Check the [Wiki](https://github.com/openhab/openhab/wiki) for more details on each binding.

\* Note: Don't copy all the addons into the addons directory otherwise openHAB performance will be impacted.


## Installing the openHAB demo (optional)

---

The openHAB comes with a demo package which have all the configuration to play with a model of a house with some rooms, lights, heating and all the stuff. It also includes some demo rules to explore the possibilities of openHAB. To install it, follow these simple steps:

1.  Locate the `distribution-<version>-demo-configuration.zip` you downloaded above.
2.  Unzip or Extract the zip file to same directory you've installed openHAB to e.g. `C:\openhab` or `/opt/openhab`.


## Installing the openHAB designer (optional)

---

You may want to download a tool to configure the items, sitemap and so on. If so, download openHAB Designer for your specific platform. This will give you syntax validation, content-assist and more on your configuration files.


The openHAB designer comes as a platform-_dependent_ zip, so choose the right one for your platform. To install it, follow these simple steps:

1.  Unzip the `distribution-<version>-designer-<platform>.zip` to some directory, e.g. `C:\openhab-designer` on Windows, or `/opt/openhab-designer` on other systems (Linux, etc)
2.  Launch it by the executable `openHAB-Designer.exe` (or `openHAB-Designer` if you are on a Mac or Linux)
3.  Select the "configurations" folder of your runtime installation in the folder dialog that is shown when selecting the "open folder" toolbar icon.
4.  When you've made a change to a file, you can use the keyboard shortcut Ctrl-S to save it.


## Configuring the server

---

The configuration files are text files that may be edited with any good text editor \*  Alternatively, you may use the openHAB designer to edit them, and you will get feedback about any syntax errors. 

\* Note that the expected file encoding is UTF-8.  For this reason we don't recommend Windows Notepad as it doesn't deal well with file encodings and line endings.

### The openhab.cfg file

*   `openhab.cfg` is the main configuration file of openHAB. It specifies generic system settings as well as specific parameters for different bundles. Those options are specified in the following format: `<bundle name>:<parameter name>=<parameter value>`
*   All bundle specific configuration parameters are available on bundles documentation pages in the [openHAB Wiki](https://github.com/openhab/openhab/wiki)


### The .items file

The next thing we must do is to tell openHAB which items we have. To do so, go to the "configurations/items" directory and create a new file called thenameyouwish.items. If you've downloaded the demo above you will have a demo.items sample file to see which is the syntax of this file.

In this file we define groups and items. Groups might be in other groups, and items may be into none, one or more groups. For example:

*   `Group gGF (All)` This statement defines a group named gGF and states that it belongs to the All group. Many users prefer to prefix their group names with "g".
*   `Group GF_Living "Living room" <video> (gGF)` This statement defines the group GF_Living, defines that the user interface will show it as "Living room", defines the icon to be shown and states that it belongs to (gGF). Notice that the gGF group belongs to the ALL group, hence GF_Living inherits that group, and so it belongs to the All group too.
*   `Group:Number:AVG Lighting "Average lighting [Lux](%.2f)" <switch> (Status)`: this statement means that there is a group called Lighting, which has a value calculated as an average of all its members, and its value is a float with two decimals. It will show a switch icon and it belongs to the Status group.

The items may also link the item to a binding (e.g. a physical object).  The below example demonstrates the KNX binding:

*   `Number Lighting_Room_Sensor "Lighting in the Room [Lux](%.2f)" <switch> (Room,Lighting) { knx = "<0/1/1" }`: This is a sensor item. It uses the 0/1/1 group address and openHAB will ask for its value periodically because there is a "<" sign before the address. It is a number item, called Lighting_Room_Sensor, and belongs to Room and Lighting groups.
*   `Switch Light_Room_Table "Table Light" (Room, Lights) { knx = "<0/1/10+0/1/30"}`: This is a switch item that has two addresses. openHAB may respond to events in any of them, but may actively read the first one.

For more info about other options have a look at the demo.items file.


### The .sitemap file

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
*   An item called Group Demo with "1stfloor" icon that contains 4 child items.
    1.   The first one is the group Lights, that has a mapping. It means that when it receives a value of OFF, it will show an "All Off" text.
    2.   The second one will be the Heating group, etc.
*   An item called Multimedia with icon video. It has two elements:
    1.   The Radio_station item that has several mappings
    2.   The Volume item, shown as an Slider.

For more info about other options have a look at the demo.sitemap file.

NOTE: You can make changes to items and sitemap files at any time, and the runtime will pick them up shortly afterwards and reflect your changes in the user interface.


## Start the server!

---

1.  Launch the runtime by executing the script `start.bat` (if you're running Windows) or `start.sh` (if you're on Linux or Mac).  After a few seconds (depending on the speed of your computer), openHAB should be up and running.
2.  If things don't go as planned, you can execute the debug scripts instead (e.g. `start_debug.sh`) which will give you more information on any errors that may occur.


## Go test it!

---

openHAB comes with a built-in user interface. It works on all webkit-based browsers like Chrome, Safari, etc. Point your browser to `http://<openHAB address or hostname>:8080/openhab.app?sitemap=demo` and you should be looking at your sitemap.  Replace "demo" in the URL with the name of your newly-created sitemap file.


## Go mobile!

---

openHAB has an app in the App Store on Android and iOS.  In the settings of the app, the openHAB URL should just be `http://<openHAB address or hostname>:8080` - you don't need the last part of the URL.

If you want to have access to your openHAB installation outside your home network, you'll need to set up [MyOpenHAB](https://my.openhab.org/) or configure a [VPN](https://en.wikipedia.org/wiki/Virtual_private_network).


## How to get help

---

There is much more detail available on the openHAB [Wiki](https://github.com/openhab/openhab/wiki), and a friendly and active [user forum](https://community.openhab.org) if you get stuck.

