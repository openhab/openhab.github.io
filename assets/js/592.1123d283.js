(window.webpackJsonp=window.webpackJsonp||[]).push([[592],{671:function(e,t,n){"use strict";n.r(t);var a=n(1),r=Object(a.a)({},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"content"},[e._m(0),e._v(" "),n("p",[e._v("The "),n("a",{attrs:{href:"https://www.qnap.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("QNAP NAS"),n("OutboundLink")],1),e._v(" is a NAS server solution for your home, allowing the installation of additional packages.\nPlease find all details about the openHAB package for QNAP "),n("a",{attrs:{href:"https://github.com/openhab/openhab-qnap-qpkg",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),n("OutboundLink")],1),e._v(".")]),e._v(" "),e._m(1),e._v(" "),e._m(2),e._v(" "),n("p",[e._v("Check that your NAS has the most recent firmware version.\nFollow the instructions shown if a new version is announced when opening the admin GUI.")]),e._v(" "),n("ol",[n("li",[n("p",[e._v("Download the QPKG from the "),n("a",{attrs:{href:"https://github.com/openhab/openhab-qnap-qpkg/releases",target:"_blank",rel:"noopener noreferrer"}},[e._v("releases section over on GitHub"),n("OutboundLink")],1),e._v(".")])]),e._v(" "),e._m(3),e._v(" "),e._m(4),e._v(" "),e._m(5),e._v(" "),e._m(6),e._v(" "),e._m(7),e._v(" "),e._m(8),e._v(" "),e._m(9)]),e._v(" "),e._m(10),e._v(" "),n("p",[e._v("If you want to keep configuration files, copy them to a save place outside of the openhab-path.")]),e._v(" "),e._m(11),e._v(" "),e._m(12),e._v(" "),n("ul",[n("li",[e._v("Please check our issue tracker: "),n("a",{attrs:{href:"https://github.com/openhab/openhab-qnap-qpkg/issues",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/openhab/openhab-qnap-qpkg/issues"),n("OutboundLink")],1)])]),e._v(" "),n("DocPreviousVersions"),e._v(" "),n("EditPageLink")],1)},[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"qnap-nas"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#qnap-nas","aria-hidden":"true"}},[this._v("#")]),this._v(" QNAP NAS")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("img",{attrs:{src:"https://github.com/openhab/openhab-qnap-qpkg/raw/master/docs/QTS_4.2.0_AppCenter%20enabled.png",alt:"AppCenter enabled"}})])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"how-to-install"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#how-to-install","aria-hidden":"true"}},[this._v("#")]),this._v(" How to install")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("li",[n("p",[e._v("Create a directory for your addons, configurations and userdata, by either")]),e._v(" "),n("ul",[n("li",[e._v('Creating a share called "openHAB" (recommended)')]),e._v(" "),n("li",[e._v('Creating a folder called "openHAB" inside the "Public" share')]),e._v(" "),n("li",[e._v("Not creating any of them and therefore using "),n("code",[e._v(".qpkg/openHAB2/distribution")]),e._v(" for all data (for testing or demonstration)")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",[t("p",[this._v('Go to your NAS\'s App Center and make sure you have got "JRE" (for x86-CPU based NAS) or "JRE_ARM" (for ARM-CPU based NAS) installed.\nIf that is not the case, go to the "Developer-Tools" section of the App Center, install the appropriate version and wait for a while until the Java installation has finished.')])])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",[t("p",[this._v('Open the "Install manually" dialog in the App Center by clicking the gear-wheel on the upper-right corner of the App Center and choose the '),t("code",[this._v("qpkg")]),this._v(" you have downloaded.")]),this._v(" "),t("p",[t("img",{attrs:{src:"https://github.com/openhab/openhab-qnap-qpkg/raw/master/docs/QTS_4.2.0_AppCenter%20choose.png",alt:"AppCenter choose"}})])])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",[t("p",[this._v("Confirm the installation")]),this._v(" "),t("p",[t("img",{attrs:{src:"https://github.com/openhab/openhab-qnap-qpkg/raw/master/docs/QTS_4.2.0_AppCenter%20confirm.png",alt:"AppCenter confirm"}})])])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",[t("p",[this._v("Wait while the package is being installed")]),this._v(" "),t("p",[t("img",{attrs:{src:"https://github.com/openhab/openhab-qnap-qpkg/raw/master/docs/QTS_4.2.0_AppCenter%20installing.png",alt:"AppCenter installing"}})])])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",[t("p",[this._v("When finished just close the dialog and wait for a while until openHAB has completely started.\nThis may take several minutes.")]),this._v(" "),t("p",[t("img",{attrs:{src:"https://github.com/openhab/openhab-qnap-qpkg/raw/master/docs/QTS_4.2.0_AppCenter%20finished.png",alt:"AppCenter finished"}})])])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",[t("p",[this._v('Access openHAB via "'),t("a",{attrs:{href:"#"}},[this._v("http://NAS_IP_or_DNS_address:8090")]),this._v('".\nIf the interface does not start, retry after another minute.\nThe initial startup takes some time.')])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"how-to-uninstall"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#how-to-uninstall","aria-hidden":"true"}},[this._v("#")]),this._v(" How to uninstall")])},function(){var e=this.$createElement,t=this._self._c||e;return t("ol",[t("li",[t("p",[this._v('Go to the "App Center" and remove the app like any other.')])]),this._v(" "),t("li",[t("p",[this._v('Additionally if wanted or needed, please remove the folders "addons", "conf" and "userdata" from the your directory, eg. "openHAB2" share or "Public"/openHAB2\nIf you have installed openHAB2 to '),t("code",[this._v(".qpkg")]),this._v(' (see "How to install", third option) then all files get removed automatically.')])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"known-issues"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#known-issues","aria-hidden":"true"}},[this._v("#")]),this._v(" Known issues")])}],!1,null,null,null);t.default=r.exports}}]);