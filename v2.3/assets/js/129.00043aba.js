(window.webpackJsonp=window.webpackJsonp||[]).push([[129],{650:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),a("p",[t._v("The Harmony Hub binding is used to enable communication between openHAB2 and multiple Logitech Harmony Hub devices.\nThe API exposed by the Harmony Hub is relatively limited, but it does allow for reading the current activity as well as setting the activity and sending device commands.")]),t._v(" "),t._m(1),t._v(" "),a("p",[t._v('The Harmony binding represents a "Hub" as a bridge thing type and "Devices" as things connected to the bridge.')]),t._v(" "),t._m(2),t._v(" "),a("p",[t._v('A hub (bridge thing) represents a physical Harmony Hub.\nThe hub possesses a single channel with the id "activity" which is a StringType set to the name of the current activity.\nThis channel is dynamically generated with the possible activity strings listed as channel state options.')]),t._v(" "),t._m(3),t._v(" "),a("p",[t._v('Devices are dynamically created.\nThere is a single device thing for every physical device configured on the harmony hub.\nEach device has a single channel with the id "button" which sends a string with the name of the button to press on the device.\nThis channel is dynamically generated with the possible button press strings listed as channel state options.')]),t._v(" "),t._m(4),t._v(" "),a("p",[t._v("The Harmony binding will automatically find all Harmony Hubs on the local network and add them to the inbox.\nOnce a Hub has been added, any connected devices will also added to the Inbox.")]),t._v(" "),t._m(5),t._v(" "),a("p",[t._v("The binding requires no special configuration")]),t._v(" "),t._m(6),t._v(" "),a("p",[t._v("This is optional, it is recommended to let the binding discover and add hubs and devices.")]),t._v(" "),a("p",[t._v('To manually configure a Harmony Hub thing you may specify its host name  ("host") as well as an optional search timeout value in seconds ("discoveryTimeout") and optional heart beat interval (heartBeatInterval) in seconds.')]),t._v(" "),a("p",[t._v("In the thing file, this looks e.g. like")]),t._v(" "),t._m(7),a("p",[t._v('To manually configure a Harmony device thing you may specify its numeric id ("id") or its name ("name"), but not both.\nNote that this is prefixed by the hub the device is controlled from.')]),t._v(" "),a("p",[t._v("In the thing file, this looks e.g. like")]),t._v(" "),t._m(8),a("p",[t._v("or")]),t._v(" "),t._m(9),t._m(10),t._v(" "),a("p",[t._v("Hubs can report and change the current activity:")]),t._v(" "),a("p",[t._v("items:")]),t._v(" "),t._m(11),a("p",[t._v("Devices can send button presses")]),t._v(" "),t._m(12),a("p",[t._v("Hubs can also trigger events when a new activity is starting (activityStarting channel) and after it is started (activityStarted channel).")]),t._v(" "),a("p",[t._v("The name of the event is equal to the activity name, with all non-alphanumeric characters replaced with underscore.")]),t._v(" "),a("p",[t._v("rules:")]),t._v(" "),t._m(13),t._m(14),t._v(" "),a("p",[t._v("Using the above things channels and items\nSitemap:")]),t._v(" "),t._m(15),a("p",[t._v('Possible values for the "buttonPress" channel can be determined via the REST API for channel-types, '),a("a",{attrs:{href:"http://YourServer:8080/rest/channel-types",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://YourServer:8080/rest/channel-types"),a("OutboundLink")],1),t._v('.\nSearch the JSON for "harmonyhub:device".')]),t._v(" "),a("DocPreviousVersions"),t._v(" "),a("EditPageLink")],1)},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"logitech-harmony-hub-binding"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#logitech-harmony-hub-binding","aria-hidden":"true"}},[this._v("#")]),this._v(" Logitech Harmony Hub Binding")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"overview"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#overview","aria-hidden":"true"}},[this._v("#")]),this._v(" Overview")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"hub"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#hub","aria-hidden":"true"}},[this._v("#")]),this._v(" Hub")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"devices"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#devices","aria-hidden":"true"}},[this._v("#")]),this._v(" Devices")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"discovery"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#discovery","aria-hidden":"true"}},[this._v("#")]),this._v(" Discovery")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"binding-configuration"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#binding-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Binding Configuration")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"thing-configuration"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#thing-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Thing Configuration")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-dsl"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("Bridge")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("harmonyhub"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("hub"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("GreatRoom")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" host"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"192.168.1.100"')]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-dsl"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("Bridge")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("harmonyhub"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("hub"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("great")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" name"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"Great Room"')]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    device denon "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" name"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"Denon AV Receiver"')]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-dsl"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("Bridge")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("harmonyhub"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("hub"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("great")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" name"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"Great Room"')]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    device denon "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" id"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token number"}},[t._v("176254")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"channels"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#channels","aria-hidden":"true"}},[this._v("#")]),this._v(" Channels")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[t._v("String HarmonyGreatRoomActivity              "),a("span",{attrs:{class:"token string"}},[t._v('"Current Activity [%s]"')]),t._v("  "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("gMain"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" channel"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"harmonyhub:hub:GreatRoom:currentActivity"')]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[t._v("String HarmonyGreatRoomDenon            "),a("span",{attrs:{class:"token string"}},[t._v('"Denon Button Press"')]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("gMain"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" channel"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"harmonyhub:device:GreatRoom:29529817:buttonPress"')]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-rules"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("rule")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"Starting TV"')]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("when")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("Channel")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"harmonyhub:hub:GreatRoom:activityStarting"')]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("triggered")]),t._v(" Watch_TV\n"),a("span",{attrs:{class:"token keyword"}},[t._v("then")]),t._v("\n    "),a("span",{attrs:{class:"token function"}},[t._v("logInfo")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"Harmony"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"TV is starting..."')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("end")]),t._v("\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("rule")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"TV started"')]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("when")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("Channel")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"harmonyhub:hub:GreatRoom:activityStarted"')]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("triggered")]),t._v(" Watch_TV\n"),a("span",{attrs:{class:"token keyword"}},[t._v("then")]),t._v("\n    "),a("span",{attrs:{class:"token function"}},[t._v("logInfo")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"Harmony"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"TV is started"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("end")]),t._v("\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("rule")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"Going off"')]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("when")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("Channel")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"harmonyhub:hub:GreatRoom:activityStarting"')]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("triggered")]),t._v(" PowerOff\n"),a("span",{attrs:{class:"token keyword"}},[t._v("then")]),t._v("\n    "),a("span",{attrs:{class:"token function"}},[t._v("logInfo")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"Harmony"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"Hub is going off..."')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("end")]),t._v("\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("rule")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"Hub off"')]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("when")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("Channel")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"harmonyhub:hub:GreatRoom:activityStarted"')]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("triggered")]),t._v(" PowerOff\n"),a("span",{attrs:{class:"token keyword"}},[t._v("then")]),t._v("\n    "),a("span",{attrs:{class:"token function"}},[t._v("logInfo")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"Harmony"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"Hub is off - no activity"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("end")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"example-sitemap"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#example-sitemap","aria-hidden":"true"}},[this._v("#")]),this._v(" Example Sitemap")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-perl extra-class"},[a("pre",{pre:!0,attrs:{class:"language-dsl"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("sitemap")]),t._v(" demo "),a("span",{attrs:{class:"token constant"}},[t._v("label")]),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"Main Menu"')]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("Frame")]),t._v("  "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),a("span",{attrs:{class:"token keyword"}},[t._v("Switch")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("item")]),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("HarmonyGreatRoomActivity "),a("span",{attrs:{class:"token constant"}},[t._v("mappings")]),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("PowerOff"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"PowerOff"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" TIVO"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"TIVO"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Music"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"Music"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{attrs:{class:"token string"}},[t._v('"APPLE TV"')]),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"APPLE TV"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" NETFLIX"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"NETFLIX"')]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n                "),a("span",{attrs:{class:"token keyword"}},[t._v("Switch")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("item")]),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("HarmonyGreatRoomDenon "),a("span",{attrs:{class:"token constant"}},[t._v("mappings")]),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token string"}},[t._v('"Volume Up"')]),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"Volume Up"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{attrs:{class:"token string"}},[t._v('"Volume Down"')]),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"Volume Down"')]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])}],!1,null,null,null);e.options.__file="readme.md";s.default=e.exports}}]);