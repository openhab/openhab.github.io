(window.webpackJsonp=window.webpackJsonp||[]).push([[309],{651:function(e,t,s){"use strict";s.r(t);var r=s(0),i=Object(r.a)({},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"content"},[e._m(0),e._v(" "),s("p",[e._v("This service allows you to persist and query states using the "),s("a",{attrs:{href:"http://influxdb.org",target:"_blank",rel:"noopener noreferrer"}},[e._v("InfluxDB"),s("OutboundLink")],1),e._v(" time series database. The persisted values can be queried from within openHAB. There also are nice tools on the web for visualizing InfluxDB time series, such as "),s("a",{attrs:{href:"http://grafana.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Grafana"),s("OutboundLink")],1),e._v(".")]),e._v(" "),e._m(1),e._v(" "),e._m(2),e._v(" "),e._m(3),e._v(" "),s("p",[e._v('An example entry for an item with the name "AmbientLight" would look like this:')]),e._v(" "),e._m(4),e._v(" "),e._m(5),e._v(" "),s("p",[e._v("First of all you have to setup and run an InfluxDB server up to version 0.8.x. This is very easy and you will find good documentation on it on the "),s("a",{attrs:{href:"https://docs.influxdata.com/influxdb/v0.8/",target:"_blank",rel:"noopener noreferrer"}},[e._v("InfluxDB web site"),s("OutboundLink")],1),e._v(".")]),e._v(" "),e._m(6),e._v(" "),e._m(7),e._v(" "),e._m(8),e._v(" "),s("table",[e._m(9),e._v(" "),s("tbody",[s("tr",[s("td",[e._v("url")]),e._v(" "),s("td",[s("a",{attrs:{href:"http://127.0.0.1:8086",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://127.0.0.1:8086"),s("OutboundLink")],1)]),e._v(" "),s("td",{staticStyle:{"text-align":"center"}},[e._v("No")]),e._v(" "),s("td",[e._v("database URL")])]),e._v(" "),e._m(10),e._v(" "),e._m(11),e._v(" "),e._m(12)])]),e._v(" "),e._m(13),e._v(" "),s("DocPreviousVersions"),e._v(" "),s("EditPageLink")],1)},[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"influxdb-up-to-0-8-x-persistence"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#influxdb-up-to-0-8-x-persistence","aria-hidden":"true"}},[this._v("#")]),this._v(" InfluxDB (up to 0.8.x) Persistence")])},function(){var e=this.$createElement,t=this._self._c||e;return t("blockquote",[t("p",[this._v("There are two Influxdb persistence bundles which support different InfluxDB versions.  This service, named "),t("code",[this._v("influxdb08")]),this._v(", supports InfluxDB up to version 0.8.x, and the "),t("code",[this._v("influxdb")]),this._v(" service supports InfluxDB 0.9 and newer.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"database-structure"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#database-structure","aria-hidden":"true"}},[this._v("#")]),this._v(" Database Structure")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v('The states of an item are persisted in time series with names equal to the name of the item.  All values are stored in a field called "value" using integers or doubles, '),t("code",[this._v("OnOffType")]),this._v(" and "),t("code",[this._v("OpenClosedType")]),this._v(" values are stored using 0 or 1. The times for the entries are calculated by InfluxDB.")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("table",[s("thead",[s("tr",[s("th",[e._v("time")]),e._v(" "),s("th",[e._v("sequence_number")]),e._v(" "),s("th",[e._v("value")])])]),e._v(" "),s("tbody",[s("tr",[s("td",[e._v("1402243200072")]),e._v(" "),s("td",[e._v("79370001")]),e._v(" "),s("td",[e._v("6")])])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"prerequisites"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites","aria-hidden":"true"}},[this._v("#")]),this._v(" Prerequisites")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Then database and the user must be created. This can be done using the InfluxDB admin web interface. If you want to use the defaults, then create a database called "),t("code",[this._v("openhab")]),this._v(" and a user with write access on the database called "),t("code",[this._v("openhab")]),this._v(". Choose a password and remember it.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"configuration"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Configuration")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("This service can be configured in the file "),t("code",[this._v("services/influxdb08.cfg")]),this._v(".")])},function(){var e=this.$createElement,t=this._self._c||e;return t("thead",[t("tr",[t("th",[this._v("Property")]),this._v(" "),t("th",[this._v("Default")]),this._v(" "),t("th",{staticStyle:{"text-align":"center"}},[this._v("Required")]),this._v(" "),t("th",[this._v("Description")])])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("tr",[s("td",[e._v("user")]),e._v(" "),s("td",[e._v("openhab")]),e._v(" "),s("td",{staticStyle:{"text-align":"center"}},[e._v("No")]),e._v(" "),s("td",[e._v("name of the database user, e.g. "),s("code",[e._v("openhab")])])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("tr",[s("td",[e._v("password")]),e._v(" "),s("td"),e._v(" "),s("td",{staticStyle:{"text-align":"center"}},[e._v("Yes")]),e._v(" "),s("td",[e._v("password of the database user that you chose in "),s("a",{attrs:{href:"#prerequisites"}},[e._v("Prerequisites")]),e._v(" above")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("tr",[t("td",[this._v("db")]),this._v(" "),t("td",[this._v("openhab")]),this._v(" "),t("td",{staticStyle:{"text-align":"center"}},[this._v("No")]),this._v(" "),t("td",[this._v("name of the database")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("All item- and event-related configuration is defined in the file "),t("code",[this._v("persistence/influxdb08.persist")]),this._v(".")])}],!1,null,null,null);i.options.__file="readme.md";t.default=i.exports}}]);