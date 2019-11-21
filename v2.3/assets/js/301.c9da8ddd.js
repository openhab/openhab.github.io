(window.webpackJsonp=window.webpackJsonp||[]).push([[301],{769:function(t,e,a){"use strict";a.r(e);var s=a(0),n=Object(s.a)({},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),a("p",[t._v("The WAGO Binding provides an interface to Ethernet-enabled Modbus-Controllers from WAGO.")]),t._v(" "),a("p",[t._v("It polls the controller in a configurable interval.")]),t._v(" "),a("p",[t._v("It fetches the configuration xml-file from the WAGO-Controller and derives the used modules, their position and their type from it.")]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._m(6),t._v(" "),a("p",[t._v('Example for a simple switch item bound to coil 3 of module 1 of "slave2":<')]),t._v(" "),t._m(7),a("DocPreviousVersions"),t._v(" "),a("EditPageLink")],1)},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"wago-binding"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#wago-binding","aria-hidden":"true"}},[this._v("#")]),this._v(" WAGO Binding")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"binding-configuration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#binding-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Binding Configuration")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("This binding can be configured in the file "),e("code",[this._v("services/wago.cfg")]),this._v(".")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("table",[a("thead",[a("tr",[a("th",[t._v("Property")]),t._v(" "),a("th",[t._v("Default")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("Required")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("refresh")]),t._v(" "),a("td",[t._v("???")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("No")]),t._v(" "),a("td",[t._v("poll interval in milliseconds")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("<slave-name>")]),t._v(".ip")]),t._v(" "),a("td"),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),a("td",[t._v("Modbus slave IP address")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("<slave-name>")]),t._v(".username")]),t._v(" "),a("td"),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),a("td",[t._v("Modbus slave username")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("<slave-name>")]),t._v(".password")]),t._v(" "),a("td"),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),a("td",[t._v("Modbus slave password")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"item-configuration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#item-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Item Configuration")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v('{wago="<slave-name>:<module>:<coil>"}\n')])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"example"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#example","aria-hidden":"true"}},[this._v("#")]),this._v(" Example")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-dsl"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("Switch")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("MySwitch")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"My WAGO Switch"')]),a("span",{attrs:{class:"token tag"}},[t._v(" (ALL)")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("wago"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"slave2:1:3"')]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])}],!1,null,null,null);n.options.__file="readme.md";e.default=n.exports}}]);