(window.webpackJsonp=window.webpackJsonp||[]).push([[488],{958:function(e,t,n){"use strict";n.r(t);var o=n(1),s=Object(o.a)({},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"content"},[e._m(0),e._v(" "),n("p",[e._v("The openHAB Cloud Connector allows connecting the local openHAB runtime to a remote "),n("a",{attrs:{href:"https://github.com/openhab/openhab-cloud/blob/master/README.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("openHAB Cloud"),n("OutboundLink")],1),e._v(" instance, such as "),n("a",{attrs:{href:"https://www.myopenHAB.org",target:"_blank",rel:"noopener noreferrer"}},[e._v("myopenHAB.org"),n("OutboundLink")],1),e._v(", which is an instance of the\nopenHAB Cloud service hosted by the "),n("a",{attrs:{href:"https://www.openhabfoundation.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("openHAB Foundation"),n("OutboundLink")],1),e._v(".")]),e._v(" "),e._m(1),e._v(" "),n("p",[e._v("The openHAB Cloud service (and thus the connector to it) is useful for different use cases:")]),e._v(" "),e._m(2),e._v(" "),e._m(3),e._v(" "),e._m(4),e._v(" "),n("p",[e._v("Location of UUID and Secret:")]),e._v(" "),e._m(5),e._v(" "),e._m(6),e._v(" "),e._m(7),e._v(" "),e._m(8),e._v(" "),n("p",[e._v("Please note, that you don't need to expose all your items in this settings dialog.\nYou just need to expose those items, which you want to be accessible by a third party service.")]),e._v(" "),e._m(9),e._v(" "),e._m(10),n("p",[e._v("Note: The exposed items will show up after they receive an update to their state.")]),e._v(" "),n("DocPreviousVersions"),e._v(" "),n("EditPageLink")],1)},[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"openhab-cloud-connector"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#openhab-cloud-connector","aria-hidden":"true"}},[this._v("#")]),this._v(" openHAB Cloud Connector")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"features"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#features","aria-hidden":"true"}},[this._v("#")]),this._v(" Features")])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("It allows remote access to local openHAB instances without having to expose ports to the Internet or to require a complex VPN setup.")]),this._v(" "),t("li",[this._v("It serves as a connector to Google Cloud Messaging (GCM) and Apple Push Notifications (APN) for pushing notifications to mobile phone apps.")]),this._v(" "),t("li",[this._v("It brings integration possibilities with services that require an OAuth2 authentication against a web server, such as IFTTT or Amazon Alexa Skills.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"uuid-and-secret"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#uuid-and-secret","aria-hidden":"true"}},[this._v("#")]),this._v(" UUID and Secret")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("To authenticate with the openHAB Cloud service the add-on generates two values when the add-on is installed.\nThese values need to be entered in your account settings of the openHAB Cloud service.\nThe first one is a unique identifier, which allows to identify your runtime.\nOne can think of it as something similar like a username for the cloud authentication.\nThe second one is a random secret key which serves as a password.\nBoth values are written to the local file system.\nIf you loose these files for some reason, openHAB will automatically generate new ones.\nYou will then have to reconfigure UUID and secret in the openHAB Cloud service under the "),t("em",[this._v("My account")]),this._v(" section.")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("table",[n("thead",[n("tr",[n("th",[e._v("File")]),e._v(" "),n("th",[e._v("Regular Installation")]),e._v(" "),n("th",[e._v("APT Installation")])])]),e._v(" "),n("tbody",[n("tr",[n("td",[e._v("UUID")]),e._v(" "),n("td",[e._v("userdata/uuid")]),e._v(" "),n("td",[e._v("/var/lib/openhab2/uuid")])]),e._v(" "),n("tr",[n("td",[e._v("Secret")]),e._v(" "),n("td",[e._v("userdata/openhabcloud/secret")]),e._v(" "),n("td",[e._v("/var/lib/openhab2/openhabcloud/secret")])])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"configuration"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Configuration")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("After installing this add-on, you will find configuration options in the Paper UI under "),t("em",[this._v("Configuration->Services->IO->openHAB Cloud")]),this._v(":")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("img",{attrs:{src:"contrib/doc/cfg.png",alt:"Configuration"}})])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Alternatively, you can configure the settings in the file "),t("code",[this._v("conf/services/openhabcloud.cfg")]),this._v(":")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("############################## openHAB Cloud Connector #############################\n\n# The URL of the openHAB Cloud service to connect to.\n# Optional, default is set to the service offered by the openHAB Foundation\n# (https://myopenhab.org/)\n#baseURL=\n\n# Defines the mode in which you want to operate the connector.\n# Possible values are:\n# - notification: Only push notifications are enabled, no remote access is allowed.\n# - remote: Push notifications and remote access are enabled.\n# Optional, default is 'remote'.\n#mode=\n\n# A comma-separated list of items to be exposed to external services like IFTTT. \n# Events of those items are pushed to the openHAB Cloud and commands received for\n# these items from the openHAB Cloud service are accepted and sent to the local bus.\n# Optional, default is an empty list.\n#expose=\n")])])])}],!1,null,null,null);t.default=s.exports}}]);