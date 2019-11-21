(window.webpackJsonp=window.webpackJsonp||[]).push([[375],{1144:function(t,e,s){"use strict";s.r(e);var a=s(1),n=Object(a.a)({},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),s("p",[t._v("This binding allows you to control devices with "),s("a",{attrs:{href:"https://pjlink.jbmia.or.jp/english/",target:"_blank",rel:"noopener noreferrer"}},[t._v("PJLink"),s("OutboundLink")],1),t._v(" support.\nPJLink is a protocol that was developed to standardize IP control of digital projectors, but can also be used by other device types.")]),t._v(" "),s("p",[t._v("Aspects that can be controlled via PJLink are power on/off, input source selection and volume/mute setting.")]),t._v(" "),t._m(1),t._v(" "),s("p",[t._v("This binding supports devices which implement the PJLink protocol (Class 1).")]),t._v(" "),s("p",[t._v("Limitations at this point:")]),t._v(" "),t._m(2),t._v(" "),s("p",[t._v("The binding is tested with the PJLink device test tool (PJLinkTEST4CNT) and an Acer VL7680.")]),t._v(" "),t._m(3),t._v(" "),s("p",[t._v("Autodiscovery is checking all IP addressess of all class C IPv4 subnets connected to the openHAB system for devices which respond PJLink compliant on the PJLink standard port 4352.")]),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),s("p",[t._v("sample.things:")]),t._v(" "),t._m(10),s("p",[t._v("sample.items:")]),t._v(" "),t._m(11),s("p",[t._v("sample.sitemap:")]),t._v(" "),t._m(12),s("DocPreviousVersions"),t._v(" "),s("EditPageLink")],1)},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"pjlink-binding"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#pjlink-binding","aria-hidden":"true"}},[this._v("#")]),this._v(" PJLink Binding")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"supported-things"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#supported-things","aria-hidden":"true"}},[this._v("#")]),this._v(" Supported Things")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("only IPv4 connections are supported")]),this._v(" "),e("li",[this._v("only PJLink Class 1 commands are supported. Class 2 devices should work fine nevertheless, it is just the Class 2 features that will not work.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"discovery"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#discovery","aria-hidden":"true"}},[this._v("#")]),this._v(" Discovery")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"thing-configuration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#thing-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Thing Configuration")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("The "),e("em",[this._v("pjLinkDevice")]),this._v(" thing type has the following parameters:")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("table",[s("thead",[s("tr",[s("th",[t._v("Parameter")]),t._v(" "),s("th",[t._v("Description")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("ipAddress")]),t._v(" "),s("td",[t._v("the IPv4 address of the device  "),s("strong",[t._v("Mandatory")])])]),t._v(" "),s("tr",[s("td",[t._v("tcpPort")]),t._v(" "),s("td",[t._v("the listening TCP port of the devices. "),s("em",[t._v("Optional, the default value is 4352")])])]),t._v(" "),s("tr",[s("td",[t._v("adminPassword")]),t._v(" "),s("td",[t._v("the PJLink password of the device (should be left empty for devices without authentication). "),s("em",[t._v("Optional")])])]),t._v(" "),s("tr",[s("td",[t._v("refreshInterval")]),t._v(" "),s("td",[t._v("the polling interval (in seconds) to update the channel values from the device, can be set to 0 to disable polling. "),s("em",[t._v("Optional, the default value is 5")])])]),t._v(" "),s("tr",[s("td",[t._v("refreshPower")]),t._v(" "),s("td",[t._v("enables polling of the power status. "),s("em",[t._v("Optional, the default value is false")])])]),t._v(" "),s("tr",[s("td",[t._v("refreshMute")]),t._v(" "),s("td",[t._v("enables polling of the mute status. "),s("em",[t._v("Optional, the default value is false")])])]),t._v(" "),s("tr",[s("td",[t._v("refreshInputChannel")]),t._v(" "),s("td",[t._v("enables polling of the selected input channel. "),s("em",[t._v("Optional, the default value is false")])])]),t._v(" "),s("tr",[s("td",[t._v("autoReconnectInterval")]),t._v(" "),s("td",[t._v("seconds between connection retries when connection to the PJLink device has been lost, 0 means never retry, minimum 30s "),s("em",[t._v("Optional, the default value is 60")])])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"channels"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#channels","aria-hidden":"true"}},[this._v("#")]),this._v(" Channels")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("table",[s("thead",[s("tr",[s("th",[t._v("Channel")]),t._v(" "),s("th",[t._v("Description")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("power")]),t._v(" "),s("td",[t._v("Switches the device on/off")])]),t._v(" "),s("tr",[s("td",[t._v("input")]),t._v(" "),s("td",[t._v("Switches the input channel of the device")])]),t._v(" "),s("tr",[s("td",[t._v("audioMute")]),t._v(" "),s("td",[t._v("Mutes the device audio")])]),t._v(" "),s("tr",[s("td",[t._v("videoMute")]),t._v(" "),s("td",[t._v("Mutes the device video")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"full-example"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#full-example","aria-hidden":"true"}},[this._v("#")]),this._v(" Full Example")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v('pjLinkDevice:pjLinkDevice:MyProjector [ ipAddress="192.168.178.10" ]\n')])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-dsl"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Switch")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Projector_Power")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Projector Power"')]),t._v("          "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" channel"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"pjLinkDevice:pjLinkDevice:MyProjector:power"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("String")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Projector_Input")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Projector Input"')]),t._v("          "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" channel"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"pjLinkDevice:pjLinkDevice:MyProjector:input"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Switch")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Projector_AudioMute")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Projector Audio Mute"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" channel"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"pjLinkDevice:pjLinkDevice:MyProjector:audioMute"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Switch")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Projector_VideoMute")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Projector Video Mute"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" channel"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"pjLinkDevice:pjLinkDevice:MyProjector:videoMute"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-dsl"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("sitemap")]),t._v(" sample "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("label")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Main Menu"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Frame")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Switch")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("item")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("Projector_Power\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Selection")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("item")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("Projector_Input\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Switch")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("item")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("Projector_AudioMute\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Switch")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("item")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("Projector_VideoMute\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])}],!1,null,null,null);e.default=n.exports}}]);