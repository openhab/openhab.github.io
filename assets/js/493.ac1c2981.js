(window.webpackJsonp=window.webpackJsonp||[]).push([[493],{943:function(e,t,s){"use strict";s.r(t);var r=s(1),i=Object(r.a)({},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"content"},[s("h1",{attrs:{id:"exec-persistence"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#exec-persistence","aria-hidden":"true"}},[e._v("#")]),e._v(" Exec Persistence "),s("Badge",{attrs:{type:"warn",text:"v1"}})],1),e._v(" "),e._m(0),e._v(" "),e._m(1),e._v(" "),e._m(2),e._v(" "),s("p",[e._v("This service does not have a configuration.")]),e._v(" "),e._m(3),e._v(" "),s("p",[e._v("Aliases have special meaning because they contain the command line to execute e.g. like")]),e._v(" "),e._m(4),s("p",[e._v("To enhance the given command line with the current state or the current date, the service incorporates the "),s("a",{attrs:{href:"https://docs.oracle.com/javase/7/docs/api/java/util/Formatter.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("String.format()"),s("OutboundLink")],1),e._v(" method. The first parameter is always the state of the particular item, the second parameter is the current date.")]),e._v(" "),s("DocPreviousVersions"),e._v(" "),s("EditPageLink")],1)},[function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("This service allows you to execute commands in the underlying OS to persist item states. It could be used to, for example, call the original "),t("code",[this._v("rrdtool")]),this._v(" CLI tool.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("This persistence service supports only writing information, and so features such as "),t("code",[this._v("restoreOnStartup")]),this._v(" and sitemap Chart widgets cannot be used with this service.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"configuration"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Configuration")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("All item- and event-related configuration is done in the file "),t("code",[this._v("persistence/exec.persist")]),this._v(".")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v('"echo \\"%2$tY-%2$tm-%2$td %2$tT : %1$s\\""\n')])])])}],!1,null,null,null);t.default=i.exports}}]);