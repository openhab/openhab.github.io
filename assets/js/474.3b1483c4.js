(window.webpackJsonp=window.webpackJsonp||[]).push([[474],{1010:function(t,e,s){"use strict";s.r(e);var a=s(1),n=Object(a.a)({},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),s("AddonLogo"),t._v(" "),s("p",[t._v("This binding integrates the "),s("a",{attrs:{href:"https://www.yeelight.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Yeelight Lighting Product"),s("OutboundLink")],1),t._v(".")]),t._v(" "),t._m(1),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://www.yeelight.com/zh_CN/product/wifi-led-w",target:"_blank",rel:"noopener noreferrer"}},[t._v("Yeelight LED White Bulb"),s("OutboundLink")],1),t._v(" (Thing type "),s("code",[t._v("dolphin")]),t._v(")")]),t._v(" "),s("li",[s("a",{attrs:{href:"https://www.yeelight.com/zh_CN/product/wifi-led-c",target:"_blank",rel:"noopener noreferrer"}},[t._v("Yeelight LED Color Bulb"),s("OutboundLink")],1),t._v("(Thing type "),s("code",[t._v("wonder")]),t._v(")")]),t._v(" "),s("li",[s("a",{attrs:{href:"https://www.yeelight.com/zh_CN/product/pitaya",target:"_blank",rel:"noopener noreferrer"}},[t._v("Yeelight LED Color Stripe"),s("OutboundLink")],1),t._v(" (Thing type "),s("code",[t._v("stripe")]),t._v(")")]),t._v(" "),s("li",[s("a",{attrs:{href:"https://www.yeelight.com/en_US/product/luna",target:"_blank",rel:"noopener noreferrer"}},[t._v("Yeelight LED Ceiling Light"),s("OutboundLink")],1),t._v(" (Thing type "),s("code",[t._v("ceiling")]),t._v(")")])]),t._v(" "),t._m(2),t._v(" "),s("p",[t._v("To control Yeelight devices with this binding, you need to connect the device to your local network at first with the Yeelight app.\nThis app is available in the iOS AppStore and on Google Play.")]),t._v(" "),s("p",[t._v("Then you need to activate LAN control mode by enable Developer Mode in device settings, after which it will become discoverable by openHAB.")]),t._v(" "),t._m(3),t._v(" "),s("p",[t._v("Yeelight smart LED devices announce themselves on the network through UPnP, so that they can be discovered.")]),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),s("p",[t._v("All devices support some of the following channels:")]),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),s("p",[t._v("Things:")]),t._v(" "),t._m(10),s("p",[t._v("Items:")]),t._v(" "),t._m(11),s("p",[t._v("Rules:")]),t._v(" "),t._m(12),t._m(13),t._v(" "),s("p",[t._v("Full list of commands can be found "),s("a",{attrs:{href:"https://www.yeelight.com/download/Yeelight_Inter-Operation_Spec.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),s("OutboundLink")],1),t._v(".")]),t._v(" "),s("DocPreviousVersions"),t._v(" "),s("EditPageLink")],1)},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"yeelight-binding"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#yeelight-binding","aria-hidden":"true"}},[this._v("#")]),this._v(" Yeelight Binding")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"supported-things"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#supported-things","aria-hidden":"true"}},[this._v("#")]),this._v(" Supported Things")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"preconditions"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#preconditions","aria-hidden":"true"}},[this._v("#")]),this._v(" Preconditions")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"discovery"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#discovery","aria-hidden":"true"}},[this._v("#")]),this._v(" Discovery")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"thing-configuration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#thing-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Thing Configuration")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("All Yeelight things require the "),e("code",[this._v("deviceId")]),this._v(" from the device as a configuration parameter. This table shows all available parameters:")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("table",[s("thead",[s("tr",[s("th",[t._v("Parameter")]),t._v(" "),s("th",[t._v("Values")]),t._v(" "),s("th",[t._v("Mandatory")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("deviceId")]),t._v(" "),s("td",[t._v("ID of the Yeelight device")]),t._v(" "),s("td",[t._v("Yes")])]),t._v(" "),s("tr",[s("td",[t._v("duration")]),t._v(" "),s("td",[t._v("Duration for changing between different states")]),t._v(" "),s("td",[t._v("No")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"channels"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#channels","aria-hidden":"true"}},[this._v("#")]),this._v(" Channels")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("table",[s("thead",[s("tr",[s("th",[t._v("Channel")]),t._v(" "),s("th",[t._v("Item Type")]),t._v(" "),s("th",[t._v("Description")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("code",[t._v("brightness")])]),t._v(" "),s("td",[s("code",[t._v("Dimmer")])]),t._v(" "),s("td",[t._v("This channel supports adjusting the brightness value, it is available on "),s("code",[t._v("dolphin")]),t._v(" and "),s("code",[t._v("ceiling")]),t._v(".")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("color")])]),t._v(" "),s("td",[s("code",[t._v("Color")])]),t._v(" "),s("td",[t._v("This channel supports color control, it is available on "),s("code",[t._v("wonder")]),t._v(" and "),s("code",[t._v("stripe")]),t._v(".")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("colorTemperature")])]),t._v(" "),s("td",[s("code",[t._v("Dimmer")])]),t._v(" "),s("td",[t._v("This channel supports adjusting the color temperature, it is available on "),s("code",[t._v("wonder")]),t._v(" and "),s("code",[t._v("stripe")]),t._v(" and "),s("code",[t._v("ceiling")]),t._v(".")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("command")])]),t._v(" "),s("td",[s("code",[t._v("String")])]),t._v(" "),s("td",[t._v("This channel sends a command directly to the device, it is available on all Yeelight Things.")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"full-example"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#full-example","aria-hidden":"true"}},[this._v("#")]),this._v(" Full Example")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-dsl"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Thing")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("yeelight"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("stripe"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("1")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" deviceId"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0x000000000321a1bc"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" duration"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-dsl"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Color")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("YeelightLEDColor")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" channel"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"yeelight:stripe:1:color"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Switch")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("YeelightLEDSwitch")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" channel"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"yeelight:stripe:1:color"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("String")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("YeelightLEDCommand")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" channel"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"yeelight:stripe:1:command"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-rules"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("rule")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Yeelight Custom Command"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("when")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Time is noon")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("then")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token function-name"}},[t._v("YeelightLEDCommand")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sendCommand")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"set_power;\\"on\\",\\"smooth\\",2000"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("end")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Note that "),e("code",[this._v("set_power")]),this._v(" is the command, then a separator "),e("code",[this._v(";")]),this._v(" must be used. "),e("code",[this._v('\\"on\\",\\"smooth\\",2000')]),this._v(" are the parameters.")])}],!1,null,null,null);e.default=n.exports}}]);