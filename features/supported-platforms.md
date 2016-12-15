---
layout: page-sidebar
title: Supported Platforms
redirect_from:
  - /features-platforms.html
---
## Environment

---

openHAB is a pure java based platform so it can be run anywhere where java runs. Of course it has certain requirements for the environment it runs in to provide a comfortable level of performance but this doesn't limit its usage on embedded platforms.


## Requirements

---

openHAB runs at any standard Windows, MacOS X or Linux machine with Java 1.7.

openHAB has been tested and known to run on the following embedded platforms: [Raspberry Pi](http://www.raspberrypi.org/) , [BeagleBone Black](http://www.beaglebone.org/) , [UDOO](http://www.udoo.org/) , [Cubietruck](http://cubieboard.org/) .

openHAB has also been tested and known to run on the following NAS platforms: [Synology Diskstation](http://www.synology.com/) and [QNAP](http://www.qnap.com/) .


## Windows x64

The following workaround may be necessary to get Designer running on 64-bit Windows (as reported [here](https://github.com/openhab/openhab/issues/1714)).

    Go to Oracle's website and download the JRE: (eg. jre-8u25-windows-i586.tar.gz)
    http://www.oracle.com/technetwork/java/javase/downloads/jre8-downloads-2133155.html
    
    Extract the archive into your folder of the openHAB designer.
    You should have the content
    ...
    jre1.8.0_25 (folder)
    openHAB-Designer.exe
    
    Create a shortcut of openHAB-Designer.exe
    
    Edit the shortcut (Properties -> Shotcut -> Target) and add the following
    -vm jre1.8.0_25\bin\javaw.exe
    
    Start openHAB Designer with the shortcut. It should use the "embedded" x86 JRE.

