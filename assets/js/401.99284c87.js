(window.webpackJsonp=window.webpackJsonp||[]).push([[401],{1185:function(t,e,r){"use strict";r.r(e);var n=r(1),s=Object(n.a)({},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"content"},[t._m(0),t._v(" "),r("AddonLogo"),t._v(" "),r("p",[t._v("This binding integrates the "),r("a",{attrs:{href:"https://www.samsung.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("Samsung TV's"),r("OutboundLink")],1),t._v(".")]),t._v(" "),t._m(1),t._v(" "),r("p",[t._v("Samsung TV C (2010), D (2011), E (2012) and F (2013) models should be supported.\nAlso support added for TVs using websocket remote interface (2016+ models)\nBecause Samsung does not publish any documentation about the TV's UPnP interface, there could be differences between different TV models, which could lead to mismatch problems.")]),t._v(" "),r("p",[t._v("Tested TV models:")]),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),r("p",[t._v("The TV's are discovered through UPnP protocol in the local network and all devices are put in the Inbox.")]),t._v(" "),t._m(4),t._v(" "),r("p",[t._v("The binding does not require any special configuration.")]),t._v(" "),t._m(5),t._v(" "),r("p",[t._v("The Samsung TV Thing requires the host name and port address as a configuration value in order for the binding to know how to access it.\nSamsung TV publish several UPnP devices and hostname is used to recognize those UPnP devices.\nPort address is used for remote control emulation protocol.\nAdditionally, a refresh interval can be configured in milliseconds to specify how often TV resources are polled.")]),t._v(" "),r("p",[t._v("E.g.")]),t._v(" "),t._m(6),t._m(7),t._v(" "),r("p",[t._v("TVs support the following channels:")]),t._v(" "),t._m(8),t._v(" "),r("p",[t._v("E.g.")]),t._v(" "),t._m(9),r("DocPreviousVersions"),t._v(" "),r("EditPageLink")],1)},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"samsung-tv-binding"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#samsung-tv-binding","aria-hidden":"true"}},[this._v("#")]),this._v(" Samsung TV Binding")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"supported-things"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#supported-things","aria-hidden":"true"}},[this._v("#")]),this._v(" Supported Things")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("table",[r("thead",[r("tr",[r("th",[t._v("Model")]),t._v(" "),r("th",[t._v("State")]),t._v(" "),r("th",[t._v("Notes")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("UE48J5670SU")]),t._v(" "),r("td",[t._v("PARTIAL")]),t._v(" "),r("td",[t._v("Supported channels: "),r("code",[t._v("volume")]),t._v(", "),r("code",[t._v("sourceName")])])]),t._v(" "),r("tr",[r("td",[t._v("UE46E5505")]),t._v(" "),r("td",[t._v("OK")]),t._v(" "),r("td",[t._v("Initial contribution is done by this model")])]),t._v(" "),r("tr",[r("td",[t._v("UE46D5700")]),t._v(" "),r("td",[t._v("PARTIAL")]),t._v(" "),r("td",[t._v("Supports at my home only commands via the fake remote, no discovery")])]),t._v(" "),r("tr",[r("td",[t._v("UE40F6500")]),t._v(" "),r("td",[t._v("OK")]),t._v(" "),r("td",[t._v("All channels except "),r("code",[t._v("colorTemperature")]),t._v(", "),r("code",[t._v("programTitle")]),t._v(" and "),r("code",[t._v("channelName")]),t._v(" are working")])]),t._v(" "),r("tr",[r("td",[t._v("UN50J5200")]),t._v(" "),r("td",[t._v("PARTIAL")]),t._v(" "),r("td",[t._v("Status is retrieved (confirmed "),r("code",[t._v("power")]),t._v(", "),r("code",[t._v("media title")]),t._v("). Operating device seems not working.")])]),t._v(" "),r("tr",[r("td",[t._v("LE40D579")]),t._v(" "),r("td",[t._v("PARTIAL")]),t._v(" "),r("td",[t._v("Supported channels: "),r("code",[t._v("volume")]),t._v(", "),r("code",[t._v("mute")]),t._v(", "),r("code",[t._v("channel")]),t._v(", "),r("code",[t._v("keyCode")]),t._v(", "),r("code",[t._v("sourceName")]),t._v(",  "),r("code",[t._v("programTitle")]),t._v(", "),r("code",[t._v("channelName")]),t._v(",  "),r("code",[t._v("power")])])]),t._v(" "),r("tr",[r("td",[t._v("LE40C650")]),t._v(" "),r("td",[t._v("PARTIAL")]),t._v(" "),r("td",[t._v("Supported channels: "),r("code",[t._v("volume")]),t._v(", "),r("code",[t._v("mute")]),t._v(", "),r("code",[t._v("channel")]),t._v(", "),r("code",[t._v("keyCode")]),t._v(", "),r("code",[t._v("brightness")]),t._v(", "),r("code",[t._v("contrast")]),t._v(", "),r("code",[t._v("colorTemperature")]),t._v(", "),r("code",[t._v("power")]),t._v(" (only power off, unable to power on)")])]),t._v(" "),r("tr",[r("td",[t._v("UE55LS003")]),t._v(" "),r("td",[t._v("PARTIAL")]),t._v(" "),r("td",[t._v("Supported channels: "),r("code",[t._v("volume")]),t._v(", "),r("code",[t._v("mute")]),t._v(", "),r("code",[t._v("sourceApp")]),t._v(", "),r("code",[t._v("url")]),t._v(", "),r("code",[t._v("keyCode")]),t._v(", "),r("code",[t._v("power")]),t._v(", "),r("code",[t._v("artMode")])])]),t._v(" "),r("tr",[r("td",[t._v("UE43MU6199")]),t._v(" "),r("td",[t._v("PARTIAL")]),t._v(" "),r("td",[t._v("Supported channels: "),r("code",[t._v("volume")]),t._v(", "),r("code",[t._v("mute")]),t._v(", "),r("code",[t._v("power")]),t._v(" (at least)")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"discovery"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#discovery","aria-hidden":"true"}},[this._v("#")]),this._v(" Discovery")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"binding-configuration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#binding-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Binding Configuration")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"thing-configuration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#thing-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Thing Configuration")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-dsl"}},[r("code",[r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Thing")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("samsungtv"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("tv"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("livingroom")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" hostName"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"192.168.1.10"')]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" port"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("55000")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" refreshInterval"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"channels"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#channels","aria-hidden":"true"}},[this._v("#")]),this._v(" Channels")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("table",[r("thead",[r("tr",[r("th",[t._v("Channel Type ID")]),t._v(" "),r("th",[t._v("Item Type")]),t._v(" "),r("th",[t._v("Description")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("volume")]),t._v(" "),r("td",[t._v("Dimmer")]),t._v(" "),r("td",[t._v("Volume level of the TV.")])]),t._v(" "),r("tr",[r("td",[t._v("mute")]),t._v(" "),r("td",[t._v("Switch")]),t._v(" "),r("td",[t._v("Mute state of the TV.")])]),t._v(" "),r("tr",[r("td",[t._v("brightness")]),t._v(" "),r("td",[t._v("Dimmer")]),t._v(" "),r("td",[t._v("Brightness of the TV picture.")])]),t._v(" "),r("tr",[r("td",[t._v("contrast")]),t._v(" "),r("td",[t._v("Dimmer")]),t._v(" "),r("td",[t._v("Contrast of the TV picture.")])]),t._v(" "),r("tr",[r("td",[t._v("sharpness")]),t._v(" "),r("td",[t._v("Dimmer")]),t._v(" "),r("td",[t._v("Sharpness of the TV picture.")])]),t._v(" "),r("tr",[r("td",[t._v("colorTemperature")]),t._v(" "),r("td",[t._v("Number")]),t._v(" "),r("td",[t._v("Color temperature of the TV picture. Minimum value is 0 and maximum 4.")])]),t._v(" "),r("tr",[r("td",[t._v("sourceName")]),t._v(" "),r("td",[t._v("String")]),t._v(" "),r("td",[t._v("Name of the current source.")])]),t._v(" "),r("tr",[r("td",[t._v("sourceId")]),t._v(" "),r("td",[t._v("Number")]),t._v(" "),r("td",[t._v("Id of the current source.")])]),t._v(" "),r("tr",[r("td",[t._v("channel")]),t._v(" "),r("td",[t._v("Number")]),t._v(" "),r("td",[t._v("Selected TV channel number.")])]),t._v(" "),r("tr",[r("td",[t._v("programTitle")]),t._v(" "),r("td",[t._v("String")]),t._v(" "),r("td",[t._v("Program title of the current channel.")])]),t._v(" "),r("tr",[r("td",[t._v("channelName")]),t._v(" "),r("td",[t._v("String")]),t._v(" "),r("td",[t._v("Name of the current TV channel.")])]),t._v(" "),r("tr",[r("td",[t._v("url")]),t._v(" "),r("td",[t._v("String")]),t._v(" "),r("td",[t._v("Start TV web browser and go the given web page.")])]),t._v(" "),r("tr",[r("td",[t._v("stopBrowser")]),t._v(" "),r("td",[t._v("Switch")]),t._v(" "),r("td",[t._v("Stop TV's web browser and go back to TV mode.")])]),t._v(" "),r("tr",[r("td",[t._v("power")]),t._v(" "),r("td",[t._v("Switch")]),t._v(" "),r("td",[t._v("TV power. Some of the Samsung TV models doesn't allow to set Power ON remotely.")])]),t._v(" "),r("tr",[r("td",[t._v("artMode")]),t._v(" "),r("td",[t._v("Switch")]),t._v(" "),r("td",[t._v("TV art mode for e.g. Samsung The Frame TV's. Only relevant if power=off. If set to on when power=on, the power will be switched off")])]),t._v(" "),r("tr",[r("td",[t._v("sourceApp")]),t._v(" "),r("td",[t._v("String")]),t._v(" "),r("td",[t._v("Currently active App.")])]),t._v(" "),r("tr",[r("td",[t._v("keyCode")]),t._v(" "),r("td",[t._v("String")]),t._v(" "),r("td",[t._v("The key code channel emulates the infrared remote controller and allows to send virtual button presses.")])])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-dsl"}},[r("code",[r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Dimmer")]),t._v("  "),r("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TV_Volume")]),t._v("   "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" channel"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"samsungtv:tv:livingroom:volume"')]),t._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Switch")]),t._v("  "),r("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TV_Mute")]),t._v("     "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" channel"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"samsungtv:tv:livingroom:mute"')]),t._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("String")]),t._v("  "),r("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TV_KeyCode")]),t._v("  "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" channel"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"samsungtv:tv:livingroom:keyCode"')]),t._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])}],!1,null,null,null);e.default=s.exports}}]);