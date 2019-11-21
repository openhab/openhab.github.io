(window.webpackJsonp=window.webpackJsonp||[]).push([[346],{1101:function(t,e,n){"use strict";n.r(e);var a=n(1),s=Object(a.a)({},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content"},[n("h1",{attrs:{id:"network-time-protocol-ntp-binding"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#network-time-protocol-ntp-binding","aria-hidden":"true"}},[t._v("#")]),t._v(" Network Time Protocol (NTP) Binding "),n("Badge",{attrs:{type:"warn",text:"v1"}})],1),t._v(" "),n("div",{staticClass:"danger custom-block"},[n("p",{staticClass:"custom-block-title"},[t._v("OBSOLETE BINDING")]),t._v(" "),n("p",[t._v("This 1.x binding is obsolete; it has been replaced by the 2.x "),n("router-link",{attrs:{to:"./../ntp/"}},[t._v("ntp")]),t._v(" binding which you should use instead.")],1)]),t._v(" "),n("p",[t._v("The "),n("a",{attrs:{href:"https://en.wikipedia.org/wiki/Network_Time_Protocol",target:"_blank",rel:"noopener noreferrer"}},[t._v("Network Time Protocol"),n("OutboundLink")],1),t._v(" (NTP) Binding is used to query an NTP server you configure for the current time, within tens of milliseconds of accurary.  Items in openHAB will receive these updates.")]),t._v(" "),n("p",[t._v("There is also a binding specifically for openHAB 2 "),n("a",{attrs:{href:"https://www.openhab.org/addons/bindings/ntp/",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),n("OutboundLink")],1),t._v(".")]),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),n("table",[t._m(2),t._v(" "),n("tbody",[t._m(3),t._v(" "),n("tr",[n("td",[t._v("hostname")]),t._v(" "),n("td",[n("a",{attrs:{href:"http://ptbtime1.ptb.de",target:"_blank",rel:"noopener noreferrer"}},[t._v("ptbtime1.ptb.de"),n("OutboundLink")],1)]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("No")]),t._v(" "),n("td",[t._v("The NTP server host to query")])])])]),t._v(" "),t._m(4),t._v(" "),n("p",[t._v("The syntax for the NTP binding configuration string is explained here:")]),t._v(" "),t._m(5),t._m(6),t._v(" "),n("p",[t._v("Here are some examples of valid binding configuration strings:")]),t._v(" "),t._m(7),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),n("p",[t._v('DateTime    Date    "Date and Time: [%1$tA, %1$td.%1$tm.%1$tY %1$tT]"  (Status)    { ntp="Europe/Berlin:de_DE", knx="11.001:15/7/2, 10.001:15/7/1" }')]),t._v(" "),t._m(11),n("p",[n("a",{attrs:{href:"http://hostname=0.us.pool.ntp.org",target:"_blank",rel:"noopener noreferrer"}},[t._v("hostname=0.us.pool.ntp.org"),n("OutboundLink")],1)]),t._v(" "),t._m(12),n("p",[t._v('DateTime    Date    "Date [%1$tA, %1$td.%1$tm.%1$tY]"   (Status)    { ntp="" }')]),t._v(" "),t._m(13),t._m(14),t._v(" "),t._m(15)])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"binding-configuration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#binding-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Binding Configuration")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("This binding can be configured in the file "),e("code",[this._v("services/ntp.cfg")]),this._v(".")])},function(){var t=this.$createElement,e=this._self._c||t;return e("thead",[e("tr",[e("th",[this._v("Property")]),this._v(" "),e("th",[this._v("Default")]),this._v(" "),e("th",{staticStyle:{"text-align":"center"}},[this._v("Required")]),this._v(" "),e("th",[this._v("Description")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("tr",[n("td",[t._v("refresh")]),t._v(" "),n("td",[t._v("15")]),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("No")]),t._v(" "),n("td",[t._v("Frequency that queries will be made to the NTP server defined in "),n("code",[t._v("hostname")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"item-configuration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#item-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Item Configuration")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v('ntp="[<timeZone>][:<locale>]"\n')])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[t._v("where the parts in "),n("code",[t._v("[]")]),t._v(" are optional. If no or an incorrect "),n("code",[t._v("<timeZone>")]),t._v(" is configured it defaults to "),n("code",[t._v("TimeZone.getDefault()")]),t._v(". If no or an incorrect "),n("code",[t._v("<locale>")]),t._v(" is configured it defaults to "),n("code",[t._v("Locale.getDefault()")]),t._v(".")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v('ntp="America/Detroit:en_US"\nntp="Europe/Berlin:de_DE"\nntp="Europe/Berlin"\nntp=""\n')])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"examples"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#examples","aria-hidden":"true"}},[this._v("#")]),this._v(" Examples")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"simple"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#simple","aria-hidden":"true"}},[this._v("#")]),this._v(" Simple")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-dsl"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DateTime")]),t._v("    "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Date")]),t._v("    "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Date and Time: [%1$tA, %1$td.%1$tm.%1$tY %1$tT]"')]),t._v(" "),n("span",{pre:!0,attrs:{class:"token tag"}},[t._v(" (Status)")]),t._v("   "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" ntp"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Europe/Berlin:de_DE"')]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" \n``\n\n### Update to KNX Bus\n\nIf you would like to post the queried time "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("to")]),t._v(" the knx"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("bus your line might look like"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("\nwhere `11.001` is the KNX date type and `10.001` is the KNX time type\n\n### Full Example\n\nThis will use your system information to determine timezone and locale.\n\nservices/ntp.cfg\n\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("\nitems/example.items\n\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-dsl"}},[e("code",[this._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[this._v("sitemap")]),e("span",{pre:!0,attrs:{class:"token operator"}},[this._v("/")]),this._v("example"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[this._v(".")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[this._v("sitemap")]),this._v("\n\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("pre",[e("code",[this._v("sitemap example\n{\n    Text item=Date\n}\n")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("\n\n## Formatting\n\n[Here](http://docs.oracle.com/javase/7/docs/api/java/util/Formatter.html) is an overview of how you can format the output of date and time.\n\n<DocPreviousVersions/>\n<EditPageLink/>\n")])])])}],!1,null,null,null);e.default=s.exports}}]);