(window.webpackJsonp=window.webpackJsonp||[]).push([[314],{636:function(e,t,s){"use strict";s.r(t);var i=s(0),r=Object(i.a)({},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"content"},[e._m(0),e._v(" "),s("AddonLogo"),e._v(" "),s("p",[e._v("This service allows you to feed item states to an MQTT broker using the openHAB persistence strategies.  The destination broker, topic and messages are configurable.")]),e._v(" "),e._m(1),e._v(" "),e._m(2),e._v(" "),e._m(3),e._v(" "),e._m(4),e._v(" "),s("p",[e._v("Both the topic and message values are reformatted using String.format at the time of publishing.  During this reformat, the following parameters are provided to the format function:")]),e._v(" "),e._m(5),e._v(" "),e._m(6),e._v(" "),e._m(7),e._v(" "),e._m(8),e._v(" "),s("p",[e._v("The following is an example configuration that can be used to persist item states with Xively using the csv format.\nThe messages sent to Xively will have the format")]),e._v(" "),e._m(9),s("p",[e._v("For example:")]),e._v(" "),e._m(10),e._m(11),e._v(" "),e._m(12),e._m(13),e._v(" "),e._m(14),e._v(" "),e._m(15),e._m(16),e._v(" "),e._m(17),e._v(" "),e._m(18),s("p",[e._v("With this configuration, all items will persisted whenever their state changes and once per hour.")]),e._v(" "),s("DocPreviousVersions"),e._v(" "),s("EditPageLink")],1)},[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"mqtt-persistence"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mqtt-persistence","aria-hidden":"true"}},[this._v("#")]),this._v(" MQTT Persistence")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("This persistence service supports only writing information, and so features such as "),t("code",[this._v("restoreOnStartup")]),this._v(" and sitemap Chart widgets cannot be used with this service.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"configuration"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Configuration")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("This service can be configured in the file "),t("code",[this._v("services/mqtt-persistence.cfg")]),this._v(".")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("table",[s("thead",[s("tr",[s("th",[e._v("Property")]),e._v(" "),s("th",[e._v("Default")]),e._v(" "),s("th",{staticStyle:{"text-align":"center"}},[e._v("Required")]),e._v(" "),s("th",[e._v("Description")])])]),e._v(" "),s("tbody",[s("tr",[s("td",[e._v("broker")]),e._v(" "),s("td"),e._v(" "),s("td",{staticStyle:{"text-align":"center"}},[e._v("Yes")]),e._v(" "),s("td",[e._v("name of the broker as defined in the "),s("code",[e._v("<broker>")]),e._v(".url in "),s("code",[e._v("services/mqtt.cfg")]),e._v(".  See the MQTT Binding for more information on how to configure MQTT broker connections.")])]),e._v(" "),s("tr",[s("td",[e._v("topic")]),e._v(" "),s("td"),e._v(" "),s("td",{staticStyle:{"text-align":"center"}},[e._v("Yes")]),e._v(" "),s("td",[e._v("MQTT topic to which the persistence messages should be sent. This string may include parameters, see table below.")])]),e._v(" "),s("tr",[s("td",[e._v("message")]),e._v(" "),s("td"),e._v(" "),s("td",{staticStyle:{"text-align":"center"}},[e._v("Yes")]),e._v(" "),s("td",[e._v("string representing the persistence message content. This string may include parameters, see table below.")])])])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"center"}},[e._v("Parameter")]),e._v(" "),s("th",[e._v("Description")])])]),e._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"center"}},[e._v("1$")]),e._v(" "),s("td",[e._v("item name")])]),e._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[e._v("2$")]),e._v(" "),s("td",[e._v("item alias as defined in the "),s("code",[e._v("persistence/mqtt.persist")]),e._v(" file.")])]),e._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[e._v("3$")]),e._v(" "),s("td",[e._v("item state: a string representation of the item state. ON/OFF, OPEN/CLOSED and UP/DOWN states are transformed to 1/0 values, respectively.")])]),e._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[e._v("4$")]),e._v(" "),s("td",[e._v("current DateTime in long format.")])])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("All item- and event-related configuration is done in the file "),t("code",[this._v("persistence/mqtt.persist")]),this._v(".")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"examples"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#examples","aria-hidden":"true"}},[this._v("#")]),this._v(" Examples")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"configuration-for-xively"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#configuration-for-xively","aria-hidden":"true"}},[this._v("#")]),this._v(" Configuration for Xively")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("<openhab_item>, <item state>\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("light_office, 1\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("First, we need to define the MQTT broker connection in the "),t("code",[this._v("services/mqtt.cfg")]),this._v(" file:")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("xively.url=tcp://api.xively.com:1883\nxively.user=<device key>\nxively.pwd=<device key>\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("As "),t("code",[this._v("<device key>")]),this._v(", use the device/API key you get from Xively.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Next, we need to configure the MQTT persistence service. To do this, add the following entries to the "),t("code",[this._v("services/mqtt-persistence.cfg")]),this._v(" file:")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("broker=xively\ntopic=/v2/feeds/<feed id>.csv\nmessage=%1$s, %3$s\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("where "),t("code",[this._v("<feed id>")]),this._v(" is your Xively feed id.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("And finally, add a persistence strategy in the "),t("code",[this._v("persistence/mqtt.persist")]),this._v(" file:")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v('Strategies {\n        everyHour : "0 0 * * * ?"\n        default = everyChange\n}\nItems {\n        // persist all items every hour and on every change\n        * : strategy = everyChange, everyHour\n}\n')])])])}],!1,null,null,null);r.options.__file="readme.md";t.default=r.exports}}]);