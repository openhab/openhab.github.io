(window.webpackJsonp=window.webpackJsonp||[]).push([[247],{827:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),a("p",[t._v("This binding integrates with "),a("a",{attrs:{href:"http://www.sonance.com/electronics/amplifiers/dsp",target:"_blank",rel:"noopener noreferrer"}},[t._v("Sonance DSP Amplifiers"),a("OutboundLink")],1),t._v(". It supports all three models (DSP 2-150, DSP 8-130 and DSP 2-750) but for now it's only tested with the DSP 8-130.  For each group you can enable or disable sound (toggle mute) or set the volume.")]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),a("p",[t._v("Please see the examples below.")]),t._v(" "),t._m(5),t._v(" "),a("p",[t._v("items/sonancedemo.items")]),t._v(" "),t._m(6),a("p",[t._v("sitemaps/sonancedemo.sitemap.fragment")]),t._v(" "),t._m(7),t._m(8),t._v(" "),a("p",[t._v("In order to diagnose issues with the binding set the binding's rooter logger "),a("code",[t._v("org.openhab.binding.sonance")]),t._v(" to "),a("code",[t._v("DEBUG")]),t._v(" or "),a("code",[t._v("TRACE")]),t._v(" and request assistance at the "),a("a",{attrs:{href:"https://community.openhab.org",target:"_blank",rel:"noopener noreferrer"}},[t._v("openHAB Community"),a("OutboundLink")],1),t._v(".")]),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),a("DocPreviousVersions"),t._v(" "),a("EditPageLink")],1)},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"sonance-binding"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sonance-binding","aria-hidden":"true"}},[this._v("#")]),this._v(" Sonance Binding")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"binding-configuration"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#binding-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Binding Configuration")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("This binding can be configured in the file "),s("code",[this._v("services/sonance.cfg")]),this._v(".")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("table",[a("thead",[a("tr",[a("th",[t._v("Property")]),t._v(" "),a("th",[t._v("Default")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("Required")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("refresh")]),t._v(" "),a("td",[t._v("60000")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("No")]),t._v(" "),a("td",[t._v("refresh rate in milliseconds. 60000 is one minute.  When a command for a new volume or mute toggle is pressed, the value is updated immediately. So their is no need to lower the refresh rate to get a faster response.")])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"item-configuration"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#item-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Item Configuration")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"examples"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#examples","aria-hidden":"true"}},[this._v("#")]),this._v(" Examples")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-dsl"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("/* Sonance items*/")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("Switch")]),t._v(" \t "),a("span",{attrs:{class:"token class-name"}},[t._v("Sonance")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"Amplifier"')]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("sonance"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"10.0.0.8:52000:power"')]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("Switch")]),t._v(" \t "),a("span",{attrs:{class:"token class-name"}},[t._v("Sonance_bedroom_mute")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"Bedroom"')]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("sonance"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"10.0.0.8:52000:mute:00"')]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("Number")]),t._v(" \t "),a("span",{attrs:{class:"token class-name"}},[t._v("Sonance_bedroom_volume")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"Volume [%.0f db]"')]),a("span",{attrs:{class:"token function"}},[t._v(" <chart>")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("sonance"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"10.0.0.8:52000:volume:00"')]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("Switch")]),t._v(" \t "),a("span",{attrs:{class:"token class-name"}},[t._v("Sonance_bathroom_mute")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"Bathroom"')]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("sonance"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"10.0.0.8:52000:mute:01"')]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("Number")]),t._v(" \t "),a("span",{attrs:{class:"token class-name"}},[t._v("Sonance_bathroom_volume")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"Volume [%.0f db]"')]),a("span",{attrs:{class:"token function"}},[t._v(" <chart>")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("sonance"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"10.0.0.8:52000:volume:01"')]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("Switch")]),t._v(" \t "),a("span",{attrs:{class:"token class-name"}},[t._v("Sonance_spare_room_mute")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"Spare room"')]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("sonance"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"10.0.0.8:52000:mute:02"')]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("Number")]),t._v(" \t "),a("span",{attrs:{class:"token class-name"}},[t._v("Sonance_spare_room_volume")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"Volume [%.0f db]"')]),a("span",{attrs:{class:"token function"}},[t._v(" <chart>")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("sonance"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"10.0.0.8:52000:volume:02"')]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("Switch")]),t._v(" \t "),a("span",{attrs:{class:"token class-name"}},[t._v("Sonance_office_mute")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"Office"')]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("sonance"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"10.0.0.8:52000:mute:03"')]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("Number")]),t._v(" \t "),a("span",{attrs:{class:"token class-name"}},[t._v("Sonance_office_volume")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"Volume [%.0f db]"')]),a("span",{attrs:{class:"token function"}},[t._v(" <chart>")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("sonance"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"10.0.0.8:52000:volume:03"')]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-dsl"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("Frame")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("label")]),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"Amplifier"')]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),a("span",{attrs:{class:"token keyword"}},[t._v("Switch")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("item")]),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("Sonance\n\n\t"),a("span",{attrs:{class:"token keyword"}},[t._v("Switch")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("item")]),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("Sonance_bedroom_mute\n\t"),a("span",{attrs:{class:"token keyword"}},[t._v("Setpoint")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("item")]),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("Sonance_bedroom_volume "),a("span",{attrs:{class:"token constant"}},[t._v("minValue")]),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token operator"}},[t._v("-")]),a("span",{attrs:{class:"token number"}},[t._v("70.0")]),t._v(" "),a("span",{attrs:{class:"token constant"}},[t._v("maxValue")]),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token number"}},[t._v("12")]),t._v("\n\t\n\t"),a("span",{attrs:{class:"token keyword"}},[t._v("Switch")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("item")]),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("Sonance_office_mute\n\t"),a("span",{attrs:{class:"token keyword"}},[t._v("Setpoint")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("item")]),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("Sonance_office_volume "),a("span",{attrs:{class:"token constant"}},[t._v("minValue")]),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token operator"}},[t._v("-")]),a("span",{attrs:{class:"token number"}},[t._v("70.0")]),t._v(" "),a("span",{attrs:{class:"token constant"}},[t._v("maxValue")]),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token number"}},[t._v("12")]),t._v("\n\t\n\t"),a("span",{attrs:{class:"token keyword"}},[t._v("Switch")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("item")]),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("Sonance_bathroom_mute\n\t"),a("span",{attrs:{class:"token keyword"}},[t._v("Setpoint")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("item")]),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("Sonance_bathroom_volume "),a("span",{attrs:{class:"token constant"}},[t._v("minValue")]),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token operator"}},[t._v("-")]),a("span",{attrs:{class:"token number"}},[t._v("70.0")]),t._v(" "),a("span",{attrs:{class:"token constant"}},[t._v("maxValue")]),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token number"}},[t._v("12")]),t._v("\n\n\t"),a("span",{attrs:{class:"token keyword"}},[t._v("Switch")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("item")]),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("Sonance_spare_room_mute\n\t"),a("span",{attrs:{class:"token keyword"}},[t._v("Setpoint")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("item")]),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("Sonance_spare_room_volume "),a("span",{attrs:{class:"token constant"}},[t._v("minValue")]),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token operator"}},[t._v("-")]),a("span",{attrs:{class:"token number"}},[t._v("70.0")]),t._v(" "),a("span",{attrs:{class:"token constant"}},[t._v("maxValue")]),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token number"}},[t._v("12")]),t._v("\t\t\t\t\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\t\t\t\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"troubleshooting"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#troubleshooting","aria-hidden":"true"}},[this._v("#")]),this._v(" Troubleshooting")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"known-issues"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#known-issues","aria-hidden":"true"}},[this._v("#")]),this._v(" Known Issues")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ol",[s("li",[this._v("Getting current power status from the amplifier fails because of a bug in the Sonance software version 2.31. This is fixed in the Sonance firmware version 2.39.")]),this._v(" "),s("li",[this._v('The auto on method "music" doesn\'t work when using an digital input module. Sonance reports this is a hardware limitation which will never be fixed.')]),this._v(" "),s("li",[this._v("Absolute commands to directly set a volume (so not relative like UP and DOWN) need firmware version v2.51 or higher. Most GUI's make the change directly (like the Android app and the web GUI).")])])}],!1,null,null,null);e.options.__file="readme.md";s.default=e.exports}}]);