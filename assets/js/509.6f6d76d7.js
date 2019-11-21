(window.webpackJsonp=window.webpackJsonp||[]).push([[509],{895:function(t,e,a){"use strict";a.r(e);var s=a(1),n=Object(s.a)({},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),a("p",[t._v('This file should be in property syntax, i.e. simple lines with "key=value" pairs.\nThe file format is documented '),a("a",{attrs:{href:"https://docs.oracle.com/javase/8/docs/api/java/util/Properties.html#load-java.io.Reader-",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),a("OutboundLink")],1),t._v(".\nTo organize the various transformations one might use subfolders.")]),t._v(" "),a("p",[t._v('A default value can be provided if no matching entry is found by using "=value" syntax')]),t._v(" "),t._m(2),t._v(" "),a("p",[t._v("transform/binary.map:")]),t._v(" "),t._m(3),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._m(8),t._v(" "),a("p",[t._v("Please note: This profile is a one-way transformation, i.e. only values from a device towards the item are changed, the other direction is left untouched.")]),t._v(" "),a("DocPreviousVersions"),t._v(" "),a("EditPageLink")],1)},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"map-transformation-service"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#map-transformation-service","aria-hidden":"true"}},[this._v("#")]),this._v(" Map Transformation Service")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Transforms the input by mapping it to another string. It expects the mappings to be read from a file which is stored under the "),e("code",[this._v("transform")]),this._v(" folder.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"example"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#example","aria-hidden":"true"}},[this._v("#")]),this._v(" Example")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language-properties extra-class"},[a("pre",{pre:!0,attrs:{class:"language-properties"}},[a("code",[a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("key")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("value")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("ON")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("OFF")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("ON")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("1")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("OFF")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("0")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v("default\n")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("table",[a("thead",[a("tr",[a("th",[t._v("input")]),t._v(" "),a("th",[t._v("output")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("code",[t._v("1")])]),t._v(" "),a("td",[a("code",[t._v("ON")])])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("OFF")])]),t._v(" "),a("td",[a("code",[t._v("0")])])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("key")])]),t._v(" "),a("td",[a("code",[t._v("value")])])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("anything")])]),t._v(" "),a("td",[a("code",[t._v("default")])])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"usage-as-a-profile"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#usage-as-a-profile","aria-hidden":"true"}},[this._v("#")]),this._v(" Usage as a Profile")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[t._v("The functionality of this "),a("code",[t._v("TransformationService")]),t._v(" can be used in a "),a("code",[t._v("Profile")]),t._v(" on an "),a("code",[t._v("ItemChannelLink")]),t._v(" too.\nTo do so, it can be configured in the "),a("code",[t._v(".items")]),t._v(" file as follows:")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token generics"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("itemName"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" channel"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"<channelUID>"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("profile"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"transform:MAP"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" function"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"<filename>"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" sourceFormat"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"<valueFormat>"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[t._v("The mapping filename (within the "),a("code",[t._v("transform")]),t._v(" folder) has to be set in the "),a("code",[t._v("function")]),t._v(" parameter.\nThe parameter "),a("code",[t._v("sourceFormat")]),t._v(" is optional and can be used to format the input value "),a("strong",[t._v("before")]),t._v(" the transformation, i.e. "),a("code",[t._v("%.3f")]),t._v(".\nIf omitted the default is "),a("code",[t._v("%s")]),t._v(", so the input value will be put into the transformation without any format changes.")])}],!1,null,null,null);e.default=n.exports}}]);