(window.webpackJsonp=window.webpackJsonp||[]).push([[462],{1046:function(t,e,a){"use strict";a.r(e);var s=a(1),n=Object(s.a)({},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),a("p",[t._v("This binding is used to control LED strips connected by WiFi.\nThese devices are sold with different names, i.e. Magic Home LED, UFO LED, LED NET controller, etc.")]),t._v(" "),t._m(1),t._v(" "),a("p",[t._v("The following table shows a list of RGBW(W) LED devices supported by this binding.")]),t._v(" "),a("p",[t._v("Device table with supported channels:")]),t._v(" "),t._m(2),t._v(" "),a("p",[t._v("Other LD*** devices might work but probably need some small adaptations.")]),t._v(" "),t._m(3),t._v(" "),a("p",[t._v("The LED WiFi Controllers can be discovered by triggering a search in openHAB's inbox.\nYour device needs to be connected to your local network (i.e. by using the WiFi PBC connection method or the native App shipped with the device).\nRead the device manual for more information about how to connect your device to your network.")]),t._v(" "),t._m(4),t._v(" "),a("p",[t._v("No binding configuration required.")]),t._v(" "),t._m(5),t._v(" "),a("p",[t._v("The thing can be configured through the Paper UI.\nUse the configuration if you have devices of type LD382 or LD686, want to enable color fading,\nor if the device discovery does not find your LED controller automatically.")]),t._v(" "),t._m(6),t._v(" "),a("p",[t._v("You can choose between two drivers with different functionality:")]),t._v(" "),t._m(7),t._v(" "),a("p",[t._v("While the CLASSIC driver let you choose and run device internal programs (e.g. alternating blue),\nall normal operations (turn on or off, switch color, set brightness, ...) are performed immediately\nand without any fading effect.")]),t._v(" "),a("p",[t._v('If you prefer to switch colors smoothly and to turn your light on and off by slightly rising/decreasing the brightness\nyou should try the FADING driver.\nIf selected you can also set the number of fading steps and the fading duration in the thing configuration.\nNote that each fading step will at least take 10 ms for being processed.\nThis natural limit is given by the speed of the LED controller and your network speed.\nThus, a color fading with a configured fading duration of 0s might still take some time (count with more than 1 second for 100 steps).\nIF the "FADING" driver is chosen the program channel and the programSpeed channel will not have any effect.')]),t._v(" "),a("p",[t._v("The polling period is a parameter only used by the CLASSIC driver and specifies a the time in seconds after the LED state is refreshed in openHAB.")]),t._v(" "),t._m(8),t._v(" "),a("p",[t._v("If the automatic discovery fails you have to set the IP address and the port of your device manually.\nMoreover, make sure that the device protocol matches you device type.")]),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),a("p",[t._v("Usually, there is no need to define your WiFi LED controllers via configuration files.\nHowever, if you like to do it, here is an example.")]),t._v(" "),a("p",[t._v("wifiled.things:")]),t._v(" "),t._m(12),a("p",[t._v("wifiled.items:")]),t._v(" "),t._m(13),a("DocPreviousVersions"),t._v(" "),a("EditPageLink")],1)},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"wifi-led-binding"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#wifi-led-binding","aria-hidden":"true"}},[this._v("#")]),this._v(" WiFi LED Binding")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"supported-things"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#supported-things","aria-hidden":"true"}},[this._v("#")]),this._v(" Supported Things")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("table",[a("thead",[a("tr",[a("th",[t._v("Device Type")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("power")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("color")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("white")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("white2")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("program")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("programSpeed")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("LD382")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("✓")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("✓")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("✓")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("✓")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("✓")])]),t._v(" "),a("tr",[a("td",[t._v("LD382A")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("✓")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("✓")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("✓")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("✓")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("✓")])]),t._v(" "),a("tr",[a("td",[t._v("LD686")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("✓")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("✓")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("✓")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("✓")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("✓")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("✓")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"discovery"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#discovery","aria-hidden":"true"}},[this._v("#")]),this._v(" Discovery")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"binding-configuration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#binding-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Binding Configuration")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"thing-configuration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#thing-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Thing Configuration")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"drivers"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#drivers","aria-hidden":"true"}},[this._v("#")]),this._v(" Drivers")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("table",[a("thead",[a("tr",[a("th",[t._v("Driver")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("Supports Color Fading")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("Supports Programs")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("Polls LED State")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("CLASSIC")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("✓")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("✓")])]),t._v(" "),a("tr",[a("td",[t._v("FADING")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("✓")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",{staticStyle:{"text-align":"center"}})])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"device-discovery"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#device-discovery","aria-hidden":"true"}},[this._v("#")]),this._v(" Device Discovery")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"channels"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#channels","aria-hidden":"true"}},[this._v("#")]),this._v(" Channels")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("table",[a("thead",[a("tr",[a("th",[t._v("Channel Type ID")]),t._v(" "),a("th",[t._v("Item Type")]),t._v(" "),a("th",[t._v("Description")]),t._v(" "),a("th",[t._v("Access")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("power")]),t._v(" "),a("td",[t._v("Switch")]),t._v(" "),a("td",[t._v("Power state of the LEDs (ON/OFF)")]),t._v(" "),a("td",[t._v("R/W")])]),t._v(" "),a("tr",[a("td",[t._v("color")]),t._v(" "),a("td",[t._v("Color")]),t._v(" "),a("td",[t._v("Color of the RGB LEDs")]),t._v(" "),a("td",[t._v("R/W")])]),t._v(" "),a("tr",[a("td",[t._v("white")]),t._v(" "),a("td",[t._v("Dimmer")]),t._v(" "),a("td",[t._v("Brightness of the first (warm) white LEDs (min=0, max=100)")]),t._v(" "),a("td",[t._v("R/W")])]),t._v(" "),a("tr",[a("td",[t._v("white2")]),t._v(" "),a("td",[t._v("Dimmer")]),t._v(" "),a("td",[t._v("Brightness of the second (warm) white LEDs (min=0, max=100)")]),t._v(" "),a("td",[t._v("R/W")])]),t._v(" "),a("tr",[a("td",[t._v("program")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v("Program to run by the controller (i.e. color cross fade, strobe, etc.)")]),t._v(" "),a("td",[t._v("R/W")])]),t._v(" "),a("tr",[a("td",[t._v("programSpeed")]),t._v(" "),a("td",[t._v("Dimmer")]),t._v(" "),a("td",[t._v("Speed of the program")]),t._v(" "),a("td",[t._v("R/W")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"example"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#example","aria-hidden":"true"}},[this._v("#")]),this._v(" Example")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-dsl"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Thing")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("wifiled"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("wifiled"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("F0FE6B19CB2A")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" ip"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"192.168.178.91"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" port"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5577")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" pollingPeriod"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" protocol"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"LD686"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" driver"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"CLASSIC"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" fadeDurationInMs"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" fadeSteps"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-dsl"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Switch")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MyWiFiLight_power")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Power"')]),a("span",{pre:!0,attrs:{class:"token tag"}},[t._v(" (Light)")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("channel"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"wifiled:wifiled:F0FE6B19CB2A:power"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Dimmer")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MyWiFiLight_white")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"White"')]),a("span",{pre:!0,attrs:{class:"token tag"}},[t._v(" (Light)")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("channel"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"wifiled:wifiled:F0FE6B19CB2A:white"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Color")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MyWiFiLight_color")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Color"')]),a("span",{pre:!0,attrs:{class:"token tag"}},[t._v(" (Light)")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("channel"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"wifiled:wifiled:F0FE6B19CB2A:color"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])}],!1,null,null,null);e.default=n.exports}}]);