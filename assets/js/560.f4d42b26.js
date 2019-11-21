(window.webpackJsonp=window.webpackJsonp||[]).push([[560],{699:function(t,e,s){"use strict";s.r(e);var a=s(1),n=Object(a.a)({},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),s("ol",[s("li",[s("p",[t._v("Item and Sitemap Labels")]),t._v(" "),s("p",[t._v("Transformations used in the "),s("router-link",{attrs:{to:"/docs/configuration/items.html#state-transformations"}},[t._v("state/value part")]),t._v(" of labels are applied "),s("strong",[t._v("on the fly")]),t._v(".\nWhile the "),s("strong",[t._v("transformed value")]),t._v(" will (for example) be visible on a Sitemap, the "),s("strong",[t._v("original value")]),t._v(" is stored in the Item.")],1),t._v(" "),s("p",[t._v('The following example shows a Map transformation (see below) used in the State part of an Item\'s label.\nThe technical state of a Contact Item (e.g. "CLOSED") is translated into a human readable representation in Spanish ("cerrado").')]),t._v(" "),t._m(6),s("p",[t._v("Usage of Transformations in the "),s("router-link",{attrs:{to:"/docs/configuration/sitemaps.html#element-type-text"}},[t._v("label parameter of Sitemap elements")]),t._v(" works the same way.")],1)]),t._v(" "),s("li",[s("p",[t._v("Rules")]),t._v(" "),s("p",[t._v("Transformations can also be "),s("router-link",{attrs:{to:"/docs/configuration/rules-dsl.html#transformations"}},[t._v("used in rules")]),t._v(" to transform/translate/convert data.\nThe following shows three examples:")],1),t._v(" "),t._m(7)])]),t._v(" "),t._m(8),t._v(" "),s("DocPreviousVersions"),t._v(" "),s("EditPageLink")],1)},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"transformation-services"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#transformation-services","aria-hidden":"true"}},[this._v("#")]),this._v(" Transformation Services")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Transformations are used to translate data from a cluttered or technical raw value to a processed or human-readable representation.\nThey are often useful, to "),e("strong",[this._v("interpret received Item values")]),this._v(", like sensor readings or state variables, and to translate them into a human-readable or better processible format.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("Examples:")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v('Translation of a technical Binding output, e.g., "CLOSED" can be translated to the Spanish translation "cerrado"')]),this._v(" "),e("li",[this._v("Processing of a raw Item value, e.g., Parsing a number from a JSON string, like "),e("code",[this._v('{ "temperature": 23.2 }')])]),this._v(" "),e("li",[this._v("Conversion of sensor readings, e.g., temperature in degree Celsius can be converted to degree Fahrenheit")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"usage"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#usage","aria-hidden":"true"}},[this._v("#")]),this._v(" Usage")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Transformations are applicable in Item and Sitemap element labels and inside DSL rules.\nThe relevant transformation service needs to be installed via the paperUI before use.\nBe aware, that some Transformation services rely on transformation files, while others work by directly providing the transformation logic.\nTransformation files need to be placed in the directory "),e("code",[this._v("$OPENHAB_CONF/transform")]),this._v(".")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-dsl"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Contact")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Livingroom_Window")]),t._v("        "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Window [MAP(window_esp.map):%s]"')]),t._v("               "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*Some Binding*/")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Number")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Kitchen_Temperature_C")]),t._v("    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Temperature [JSONPATH($.temperature):%.1f °C]"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*Some Binding*/")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Number")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Livingroom_Temperature_F")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Temperature [JS(convert-C-to-F.js):%.1f °F]"')]),t._v("   "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*Some Binding*/")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-rules"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" condition "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("transform")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"MAP"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"window_esp.map"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"CLOSED"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" temperature "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("transform")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"JSONPATH"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"$.temperature"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" jsonstring"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" fahrenheit "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("transform")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"JS"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"convert-C-to-F.js"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" temperature"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("To keep these examples simple, the contents of the referenced files "),e("code",[this._v("window_esp.map")]),this._v(" and "),e("code",[this._v("convert-C-to-F.js")]),this._v(" were left out.")])}],!1,null,null,null);e.default=n.exports}}]);