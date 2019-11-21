(window.webpackJsonp=window.webpackJsonp||[]).push([[237],{926:function(t,e,a){"use strict";a.r(e);var s=a(1),r=Object(s.a)({},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),a("AddonLogo"),t._v(" "),a("p",[t._v("This binding integrates internet radios based on the "),a("a",{attrs:{href:"https://www.frontier-silicon.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Frontier Silicon chipset"),a("OutboundLink")],1),t._v(".")]),t._v(" "),t._m(1),t._v(" "),a("p",[t._v("Successfully tested are internet radios:")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://de.hama.com/00054823/hama-internetradio-ir110",target:"_blank",rel:"noopener noreferrer"}},[t._v("Hama IR100"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"http://internetradio.medion.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Medion MD87180, MD86988, MD86955, MD87528"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://www.silvercrest-multiroom.de/en/products/stereo-internet-radio/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Silvercrest SMRS18A1, SMRS30A1, SMRS35A1, SIRD 14 C2"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://www.robertsradio.com/uk/products/radio/smart-radio/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Roberts Stream 83i and 93i"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://www.auna.de/Radios/Internetradios/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Auna Connect 150, Auna KR200"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://www.technisat.com/en_XX/DAB+-Radios-with-Internetradio/352-10996/",target:"_blank",rel:"noopener noreferrer"}},[t._v("TechniSat DIGITRADIO 350 IR and 850"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://www.ttmicro.no/radio",target:"_blank",rel:"noopener noreferrer"}},[t._v("TTMicro AS Pinell Supersound"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://revo.co.uk/products/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Revo SuperConnect"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"http://sg.sangean.com.tw/products/product_category.asp?cid=2",target:"_blank",rel:"noopener noreferrer"}},[t._v("Sangean WFR-28C"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://soundbridge.roku.com/soundbridge/index.php",target:"_blank",rel:"noopener noreferrer"}},[t._v("Roku SoundBridge M1001"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://www.dual.de/produkte/digitalradio/radio-station-ir-3a/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Dual IR 3a"),a("OutboundLink")],1)])]),t._v(" "),a("p",[t._v("But in principle, all internet radios based on the "),a("a",{attrs:{href:"https://www.frontier-silicon.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Frontier Silicon chipset"),a("OutboundLink")],1),t._v(" should be supported because they share the same API.\nSo It is very likely that other internet radio models of the same manufacturers do also work.")]),t._v(" "),t._m(2),t._v(" "),a("p",[t._v("For discussions and questions about supported radios, check out "),a("a",{attrs:{href:"https://community.openhab.org/t/internet-radio-i-need-your-help/2131",target:"_blank",rel:"noopener noreferrer"}},[t._v("this thread"),a("OutboundLink")],1),t._v(".")]),t._v(" "),t._m(3),t._v(" "),a("p",[t._v("The radios are discovered through UPnP in the local network.")]),t._v(" "),t._m(4),t._v(" "),a("p",[t._v("If this is the case, please "),a("a",{attrs:{href:"https://github.com/openhab/openhab2-addons/edit/master/bundles/org.openhab.binding.fsinternetradio/README.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("add your model to this documentation"),a("OutboundLink")],1),t._v(" and/or provide discovery information in "),a("a",{attrs:{href:"https://community.openhab.org/t/internet-radio-i-need-your-help/2131",target:"_blank",rel:"noopener noreferrer"}},[t._v("this thread"),a("OutboundLink")],1),t._v(".")]),t._v(" "),t._m(5),t._v(" "),a("p",[t._v("The binding itself does not need a configuration.")]),t._v(" "),t._m(6),t._v(" "),a("p",[t._v("Each radio must be configured via its ip address, port, pin, and a refresh rate.")]),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),a("p",[t._v("All devices support some of the following channels:")]),t._v(" "),t._m(9),t._v(" "),a("p",[t._v("The radio mode depends on the internet radio model (and its firmware version!).\nThis list is just an example how the mapping looks like for some of the devices, please try it out and adjust your sitemap for your particular radio.")]),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),a("p",[t._v("demo.things:")]),t._v(" "),t._m(12),a("p",[t._v("demo.items:")]),t._v(" "),t._m(13),a("p",[t._v("demo.sitemap:")]),t._v(" "),t._m(14),a("DocPreviousVersions"),t._v(" "),a("EditPageLink")],1)},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"fs-internet-radio-binding"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#fs-internet-radio-binding","aria-hidden":"true"}},[this._v("#")]),this._v(" FS Internet Radio Binding")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"supported-things"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#supported-things","aria-hidden":"true"}},[this._v("#")]),this._v(" Supported Things")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"community"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#community","aria-hidden":"true"}},[this._v("#")]),this._v(" Community")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"discovery"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#discovery","aria-hidden":"true"}},[this._v("#")]),this._v(" Discovery")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("If your radio is not discovered, please try to access its API via: "),e("code",[this._v("http://<radio-ip>/fsapi/CREATE_SESSION?pin=1234")]),this._v(" (1234 is default pin, if you get a 403 error, check the radio menu for the correct pin)."),e("br"),this._v("\nIf you get a 404 error, maybe a different port than the standard port 80 is used by your radio; try scanning the open ports of your radio."),e("br"),this._v("\nIf you get a result like "),e("code",[this._v("FS_OK 1902014387")]),this._v(", your radio is supported.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"binding-configuration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#binding-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Binding Configuration")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"thing-configuration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#thing-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Thing Configuration")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",[a("li",[t._v("If the ip address is not discovered automatically, it must be manually set.")]),t._v(" "),a("li",[t._v("The default port is "),a("code",[t._v("80")]),t._v(" which should work for most radios.")]),t._v(" "),a("li",[t._v("The default pin is "),a("code",[t._v("1234")]),t._v(" for most radios, but if it does not work or if it was changed, look it up in the on-screen menu of the radio.")]),t._v(" "),a("li",[t._v("The default refresh rate for the radio items is "),a("code",[t._v("60")]),t._v(" seconds; "),a("code",[t._v("0")]),t._v(" disables periodic refresh.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"channels"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#channels","aria-hidden":"true"}},[this._v("#")]),this._v(" Channels")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("table",[a("thead",[a("tr",[a("th",[t._v("Channel Type ID")]),t._v(" "),a("th",[t._v("Item Type")]),t._v(" "),a("th",[t._v("Description")]),t._v(" "),a("th",[t._v("Access")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("power")]),t._v(" "),a("td",[t._v("Switch")]),t._v(" "),a("td",[t._v("Switch the radio on or off")]),t._v(" "),a("td",[t._v("R/W")])]),t._v(" "),a("tr",[a("td",[t._v("volume-percent")]),t._v(" "),a("td",[t._v("Dimmer")]),t._v(" "),a("td",[t._v("Radio volume (min=0, max=100)")]),t._v(" "),a("td",[t._v("R/W")])]),t._v(" "),a("tr",[a("td",[t._v("volume-absolute")]),t._v(" "),a("td",[t._v("Number")]),t._v(" "),a("td",[t._v("Radio volume (min=0, max=32)")]),t._v(" "),a("td",[t._v("R/W")])]),t._v(" "),a("tr",[a("td",[t._v("mute")]),t._v(" "),a("td",[t._v("Switch")]),t._v(" "),a("td",[t._v("Mute the radio")]),t._v(" "),a("td",[t._v("R/W")])]),t._v(" "),a("tr",[a("td",[t._v("mode")]),t._v(" "),a("td",[t._v("Number")]),t._v(" "),a("td",[t._v("The radio mode, e.g. FM radio, internet radio, AUX, etc. (model-specific, see list below)")]),t._v(" "),a("td",[t._v("R/W")])]),t._v(" "),a("tr",[a("td",[t._v("preset")]),t._v(" "),a("td",[t._v("Number")]),t._v(" "),a("td",[t._v("Preset radio stations configured in the radio (write-only)")]),t._v(" "),a("td",[t._v("W")])]),t._v(" "),a("tr",[a("td",[t._v("play-info-name")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v("The name of the current radio station or track")]),t._v(" "),a("td",[t._v("R")])]),t._v(" "),a("tr",[a("td",[t._v("play-info-text")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v("Additional information e.g. of the current radio station")]),t._v(" "),a("td",[t._v("R")])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("table",[a("thead",[a("tr",[a("th",[t._v("Radio Mode")]),t._v(" "),a("th",[t._v("0")]),t._v(" "),a("th",[t._v("1")]),t._v(" "),a("th",[t._v("2")]),t._v(" "),a("th",[t._v("3")]),t._v(" "),a("th",[t._v("4")]),t._v(" "),a("th",[t._v("5")]),t._v(" "),a("th",[t._v("6")]),t._v(" "),a("th",[t._v("7")]),t._v(" "),a("th",[t._v("8")]),t._v(" "),a("th",[t._v("9")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("Hama IR110")]),t._v(" "),a("td",[t._v("Internet Radio")]),t._v(" "),a("td",[t._v("Spotify")]),t._v(" "),a("td",[t._v("Player")]),t._v(" "),a("td",[t._v("AUX in")]),t._v(" "),a("td",[t._v("-")]),t._v(" "),a("td",[t._v("-")]),t._v(" "),a("td",[t._v("-")]),t._v(" "),a("td",[t._v("-")]),t._v(" "),a("td",[t._v("-")]),t._v(" "),a("td",[t._v("-")])]),t._v(" "),a("tr",[a("td",[t._v("Medion MD87180")]),t._v(" "),a("td",[t._v("Internet Radio")]),t._v(" "),a("td",[t._v("Music Player (USB, LAN)")]),t._v(" "),a("td",[t._v("DAB Radio")]),t._v(" "),a("td",[t._v("FM Radio")]),t._v(" "),a("td",[t._v("AUX in")]),t._v(" "),a("td",[t._v("-")]),t._v(" "),a("td",[t._v("-")]),t._v(" "),a("td",[t._v("-")]),t._v(" "),a("td",[t._v("-")]),t._v(" "),a("td",[t._v("-")])]),t._v(" "),a("tr",[a("td",[t._v("Medion MD 86988")]),t._v(" "),a("td",[t._v("Internet Radio")]),t._v(" "),a("td",[t._v("Music Player")]),t._v(" "),a("td",[t._v("FM Radio")]),t._v(" "),a("td",[t._v("AUX in")]),t._v(" "),a("td",[t._v("-")]),t._v(" "),a("td",[t._v("-")]),t._v(" "),a("td",[t._v("-")]),t._v(" "),a("td",[t._v("-")]),t._v(" "),a("td",[t._v("-")]),t._v(" "),a("td",[t._v("-")])]),t._v(" "),a("tr",[a("td",[t._v("Technisat DigitRadio 580")]),t._v(" "),a("td",[t._v("Internet Radio")]),t._v(" "),a("td",[t._v("Spotify")]),t._v(" "),a("td",[t._v("-")]),t._v(" "),a("td",[t._v("Music Player")]),t._v(" "),a("td",[t._v("DAB Radio")]),t._v(" "),a("td",[t._v("FM Radio")]),t._v(" "),a("td",[t._v("AUX in")]),t._v(" "),a("td",[t._v("CD")]),t._v(" "),a("td",[t._v("Bluetooth")]),t._v(" "),a("td",[t._v("-")])]),t._v(" "),a("tr",[a("td",[t._v("Dual IR 3a")]),t._v(" "),a("td",[t._v("Internet Radio")]),t._v(" "),a("td",[t._v("Spotify")]),t._v(" "),a("td",[t._v("-")]),t._v(" "),a("td",[t._v("Music Player")]),t._v(" "),a("td",[t._v("DAB Radio")]),t._v(" "),a("td",[t._v("FM Radio")]),t._v(" "),a("td",[t._v("Bluetooth")]),t._v(" "),a("td",[t._v("-")]),t._v(" "),a("td",[t._v("-")]),t._v(" "),a("td",[t._v("-")])]),t._v(" "),a("tr",[a("td",[t._v("Silvercrest SIRD 14 C2")]),t._v(" "),a("td",[t._v("Internet Radio")]),t._v(" "),a("td",[t._v("TIDAL")]),t._v(" "),a("td",[t._v("Deezer")]),t._v(" "),a("td",[t._v("Qobuz")]),t._v(" "),a("td",[t._v("Spotify")]),t._v(" "),a("td",[t._v("-")]),t._v(" "),a("td",[t._v("Music Player")]),t._v(" "),a("td",[t._v("DAB Radio")]),t._v(" "),a("td",[t._v("FM Radio")]),t._v(" "),a("td",[t._v("AUX in")])]),t._v(" "),a("tr",[a("td",[t._v("Auna KR200 Kitchen Radio")]),t._v(" "),a("td",[t._v("Internet Radio")]),t._v(" "),a("td",[t._v("Spotify")]),t._v(" "),a("td",[t._v("-")]),t._v(" "),a("td",[t._v("Music Player")]),t._v(" "),a("td",[t._v("DAB Radio")]),t._v(" "),a("td",[t._v("FM Radio")]),t._v(" "),a("td",[t._v("AUX in")]),t._v(" "),a("td",[t._v("-")]),t._v(" "),a("td",[t._v("-")]),t._v(" "),a("td",[t._v("-")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"full-example"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#full-example","aria-hidden":"true"}},[this._v("#")]),this._v(" Full Example")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v('fsinternetradio:radio:radioInKitchen [ ip="192.168.0.42" ]\n')])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-dsl"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Switch")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("RadioPower")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Radio Power"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" channel"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"fsinternetradio:radio:radioInKitchen:power"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Switch")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("RadioMute")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Radio Mute"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" channel"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"fsinternetradio:radio:radioInKitchen:mute"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Dimmer")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("RadioVolume")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Radio Volume"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" channel"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"fsinternetradio:radio:radioInKitchen:volume-percent"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Number")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("RadioMode")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Radio Mode"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" channel"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"fsinternetradio:radio:radioInKitchen:mode"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Number")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("RadioPreset")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Radio Stations"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" channel"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"fsinternetradio:radio:radioInKitchen:preset"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("String")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("RadioInfo1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Radio Info1"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" channel"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"fsinternetradio:radio:radioInKitchen:play-info-name"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("String")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("RadioInfo2")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Radio Info2"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" channel"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"fsinternetradio:radio:radioInKitchen:play-info-text"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-dsl"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("sitemap")]),t._v(" demo "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("label")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Main Menu"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Frame")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Switch")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("item")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("RadioPower\n\t\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Slider")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("visibility")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("RadioPower"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v("ON"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("item")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("RadioVolume\n\t\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Switch")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("visibility")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("RadioPower"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v("ON"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("item")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("RadioMute\n\t\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Selection")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("visibility")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("RadioPower"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v("ON"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("item")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("RadioPreset "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("mappings")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Favourit 1"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Favourit 2"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Favourit 3"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Favourit 4"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Selection")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("visibility")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("RadioPower"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v("ON"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("item")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("RadioMode "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("mappings")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Internet Radio"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Musik Player"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"DAB"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"FM"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"AUX"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Text")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("visibility")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("RadioPower"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v("ON"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("item")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("RadioInfo1\n\t\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Text")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("visibility")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("RadioPower"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v("ON"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("item")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("RadioInfo2\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])}],!1,null,null,null);e.default=r.exports}}]);