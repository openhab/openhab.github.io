(window.webpackJsonp=window.webpackJsonp||[]).push([[334],{670:function(e,t,i){"use strict";i.r(t);var a=i(0),s=Object(a.a)({},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"content"},[e._m(0),e._v(" "),i("p",[e._v("db4o is a pure Java object database, which uses a simple database file for persistence.")]),e._v(" "),i("p",[e._v("This persistence service supports writing information to the database as well as querying from it.")]),e._v(" "),i("p",[e._v("It keeps all data that you ask it to persist, so the database is growing over time. Please take this into account when defining the items and the strategies for persistence with this service.")]),e._v(" "),i("p",[e._v("As it can happen that the (single) database file is corrupted if the runtime is shutdown ungracefully, this persistence service offers automatic backup management, so that you can revert at least to an earlier version in case of data corruption.")]),e._v(" "),i("p",[e._v("Additionally, a commit interval can be configured for the database, so that you can optimize the write access to the file system.")]),e._v(" "),e._m(1),e._v(" "),e._m(2),e._v(" "),e._m(3),e._v(" "),e._m(4),e._v(" "),i("DocPreviousVersions"),e._v(" "),i("EditPageLink")],1)},[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"db4o-persistence"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#db4o-persistence","aria-hidden":"true"}},[this._v("#")]),this._v(" db4o Persistence")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"configuration"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Configuration")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("This service can be configured in the file "),t("code",[this._v("services/db4o.cfg")]),this._v(".")])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("table",[i("thead",[i("tr",[i("th",[e._v("Property")]),e._v(" "),i("th",[e._v("Default")]),e._v(" "),i("th",{staticStyle:{"text-align":"center"}},[e._v("Required")]),e._v(" "),i("th",[e._v("Description")])])]),e._v(" "),i("tbody",[i("tr",[i("td",[e._v("backupinterval")]),e._v(" "),i("td",[i("code",[e._v("0 0 1 * * ?")])]),e._v(" "),i("td",{staticStyle:{"text-align":"center"}},[e._v("No")]),e._v(" "),i("td",[e._v("A Cron-like expression that defines the interval at which to create a backup of the database.  The default defines a backup is to back place every morning at 01:00.")])]),e._v(" "),i("tr",[i("td",[e._v("commitinterval")]),e._v(" "),i("td",[e._v("5")]),e._v(" "),i("td",{staticStyle:{"text-align":"center"}},[e._v("No")]),e._v(" "),i("td",[e._v("commit interval, in seconds")])]),e._v(" "),i("tr",[i("td",[e._v("maxbackups")]),e._v(" "),i("td",[e._v("7")]),e._v(" "),i("td",{staticStyle:{"text-align":"center"}},[e._v("No")]),e._v(" "),i("td",[e._v("number of backup files allowed in the database folder.  The defaults provide for a week of daily backups.")])])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("All item and event related configuration is done in the file "),t("code",[this._v("persistence/db4o.persist")]),this._v(".  Aliases do not have any special meaning for the db4o persistence service.")])}],!1,null,null,null);s.options.__file="readme.md";t.default=s.exports}}]);