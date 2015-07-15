---
layout: page-sidebar
title: User Interface
redirect_from:
  - /features-ui.html
---
## Overview

---

One of the uniq features of openHAB is a unified user experience when interacting with different technologies and devices connected to openHAB. It doesn't depend on exact home automation system or any other component type. You always get a plain unified view of your home.


## Android

---

Android UI is implemented as a native Android application which is available in Google Play for free! Both phones and tablets are supported in this application.

<p>
  <a href="https://play.google.com/store/apps/details?id=org.openhab.habdroid"><img class='app-link' src="//steverichey.github.io/google-play-badge-svg/img/en_get.svg"></a>
  <div class="img-wrapper"><img alt="project title" src="/assets/images/ui/android-screens.png"></div>
</p>


## iOS

---

iOS UI is implemented as a native iOS 7 application which is available in AppStore for free! Both phones and tablets are supported in this application.

<p>
  <a href="https://itunes.apple.com/app/id492054521"><img class='app-link' src="//devimages.apple.com.edgekey.net/app-store/marketing/guidelines/images/badge-download-on-the-app-store.svg"></a>
  <div class="img-wrapper"><img alt="project title" src="/assets/images/ui/ios-screens.png"></div>
</p>


## Classic UI

---

Classic UI is first generation of openHAB user interface. It is a web interface based on [WebApp.Net](http://webapp-net.com/) framework and can be accessed through any (webkit-based) web browser.

Although WebApp.Net is a pure HTML/JS solution, it mimicks an iPhone app and is optimized for touch operation. It not only works on iPhone/iPod touch, but also perfectly on Android. Even Symbian and Blackberrys are supported, and of course the !WebKit-based web browsers. So where ever you are and whatever device you have available, you should be able to access the UI to operate your home.

<div class="img-wrapper"><img alt="project title" src="/assets/images/ui/classicui.png"></div>


## GreenT

---

The GreenT UI is a web-app developed with Sencha 2.0 !JavaScript Framework. The communication between the GreenT UI and the openHAB runtime is achieved via the openHAB REST API over websockets, HTTP streaming or HTTP long-polling. This allows instantaneous communication, without any negative network impact.

GreenT runs on Safari, Chrome, iOS, Android OS, other Webkit browsers and systems. Three types of devices are supported - Phone, Tablet and PC. The app automatically detects the device type and renders the appropriate interface.

<div class="img-wrapper"><img alt="project title" src="/assets/images/ui/greent.jpeg"></div>


## Comet Visu

---

openHAB has a built in backend for the web based visualization [CometVisu](http://www.cometvisu.org/) CometVisu is a highly customizable visualization, that runs in any browser. Despite the existing browser based UI´s in openHAB, the CometVisu does not read the sitemaps. The layout is defined with an XML-based configuration file.

<div class="img-wrapper"><img alt="project title" src="/assets/images/ui/cometvisu.jpg"></div>