(window.webpackJsonp=window.webpackJsonp||[]).push([[209],{785:function(e,t,n){"use strict";n.r(t);var i=n(0),s=Object(i.a)({},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"content"},[e._m(0),e._v(" "),n("AddonLogo"),e._v(" "),e._m(1),e._v(" "),n("p",[e._v("MQTT is a server/client architecture.\nA server, also called broker is not provided within this binding,\nbut it allows to detect running brokers and to manage connections.\nThe hereby configured broker connections make it possible to link MQTT topics to Things and Channels.")]),e._v(" "),n("p",[e._v("It has the following extensions:")]),e._v(" "),n("ul",[n("li",[n("router-link",{attrs:{to:"./../mqtt.generic/"}},[e._v("MQTT Generic Thing Binding")])],1)]),e._v(" "),e._m(2),e._v(" "),e._m(3),e._v(" "),e._m(4),e._v(" "),n("p",[e._v("Required configuration parameters are:")]),e._v(" "),e._m(5),e._v(" "),n("p",[e._v("Additionally the following parameters can be set:")]),e._v(" "),e._m(6),e._v(" "),n("p",[e._v("Reconnect parameters are:")]),e._v(" "),e._m(7),e._v(" "),n("p",[e._v("An MQTT last will and testament can be configured:")]),e._v(" "),e._m(8),e._v(" "),n("p",[e._v("For more security, the following optional parameters can be altered:")]),e._v(" "),e._m(9),e._v(" "),e._m(10),e._v(" "),n("p",[e._v("You can extend your broker connection bridges with a channel:")]),e._v(" "),e._m(11),e._v(" "),n("p",[e._v("Configuration parameters are:")]),e._v(" "),e._m(12),e._v(" "),e._m(13),e._v(" "),n("p",[e._v('In a first example a very secure connection to a broker is defined. It pins the returned certificate and public key.\nIf someone tries a man in the middle attack later on, this broker connection will recognize it and refuse a connection.\nBe aware that if your brokers certificate changes, you need to remove the connection entry and add it again. Secure connections are default, if you do not provide the "secure" parameter.')]),e._v(" "),n("p",[e._v("The second connection is a plain, unsecured one. Use this only for local MQTT Brokers.")]),e._v(" "),n("p",[e._v("A third connection uses a username and password for authentication.\nThe credentials are plain values on the wire, therefore you should only use this on a secure connection.")]),e._v(" "),n("p",[e._v('In a forth connection, the public key pinning is enabled again.\nThis time, a public key hash is provided to pin the connection to a specific server.\nIt follows the form "hashname:hashvalue". Valid '),n("em",[e._v("hashnames")]),e._v(" are SHA-1, SHA-224, SHA-256, SHA-384, SHA-512 and all others listed\nin "),n("a",{attrs:{href:"https://docs.oracle.com/javase/9/docs/specs/security/standard-names.html#messagedigest-algorithms",target:"_blank",rel:"noopener noreferrer"}},[e._v("Java MessageDigest Algorithms"),n("OutboundLink")],1),e._v(".")]),e._v(" "),e._m(14),e._v(" "),e._m(15),n("DocPreviousVersions"),e._v(" "),n("EditPageLink")],1)},[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"mqtt-binding"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mqtt-binding","aria-hidden":"true"}},[this._v("#")]),this._v(" MQTT Binding")])},function(){var e=this.$createElement,t=this._self._c||e;return t("blockquote",[t("p",[this._v('MQTT is a machine-to-machine (M2M)/"Internet of Things" connectivity protocol.\nIt was designed as an extremely lightweight publish/subscribe messaging transport.')])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"supported-bridges"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#supported-bridges","aria-hidden":"true"}},[this._v("#")]),this._v(" Supported Bridges")])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("Broker: This bridge represents a MQTT Broker connection, configured and managed by this binding.")]),this._v(" "),t("li",[this._v("SystemBroker: A system configured broker cannot be changed by this binding and will be listed as read-only system-broker.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"bridge-configuration"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#bridge-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Bridge Configuration")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",[n("li",[n("strong",[e._v("host")]),e._v(": The IP/Hostname of the MQTT broker. Be aware that this binding allows only one bridge / one connection per unique host:port.")]),e._v(" "),n("li",[n("strong",[e._v("port")]),e._v(": The optional port of the MQTT broker. If none is provided, the typical ports 1883 and 8883 (SSL) are used. Be aware that this binding allows only one bridge / one connection per unique host:port.")]),e._v(" "),n("li",[n("strong",[e._v("secure")]),e._v(': Uses TLS/SSL to establish a secure connection to the broker. Can be "OFF","ON","AUTO". The AUTO setting prefers a secure connection but will fall-back to an insecure one. Default is ON.')])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",[n("li",[n("strong",[e._v("qos")]),e._v(": Quality of Service. Can be 0, 1 or 2. Please read the MQTT specification for details. Defaults to 0.")]),e._v(" "),n("li",[n("strong",[e._v("clientID")]),e._v(": Use a fixed client ID. Defaults to empty which means a user ID is generated for this connection.")]),e._v(" "),n("li",[n("strong",[e._v("retainMessages")]),e._v(": Retain messages. Defaults to false.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[t("strong",[this._v("reconnectTime")]),this._v(": Reconnect time in ms. If a connection is lost, the binding will wait this time before it tries to reconnect. Defaults to 60000 (60s).")]),this._v(" "),t("li",[t("strong",[this._v("keepAlive")]),this._v(": Keep alive / heartbeat timer in ms. It can take up to this time to determine if a server connection is lost. A lower value may keep the broker unnecessarily busy for no or little additional value. Defaults to 60000 (60s).")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",[n("li",[n("strong",[e._v("lwtMessage")]),e._v(": An optional last will and testament message. Defaults to empty.")]),e._v(" "),n("li",[n("strong",[e._v("lwtTopic")]),e._v(": The last will topic. Defaults to empty and therefore disables the last will.")]),e._v(" "),n("li",[n("strong",[e._v("lwtQos")]),e._v(": The optional qos of the last will. Defaults to 0.")]),e._v(" "),n("li",[n("strong",[e._v("lwtRetain")]),e._v(": Retain last will message. Defaults to false.")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",[n("li",[n("strong",[e._v("username")]),e._v(": The MQTT username (since MQTT 3.1). Defaults to empty.")]),e._v(" "),n("li",[n("strong",[e._v("password")]),e._v(": The MQTT password (since MQTT 3.1). Defaults to empty.")]),e._v(" "),n("li",[n("strong",[e._v("certificatepin")]),e._v(": If this is set: After the next connection has been successfully established, the certificate is pinned. The connection will be refused if another certificate is used. Clear "),n("strong",[e._v("certificate")]),e._v(" to allow a new certificate for the next connection attempt. This option will increase security.")]),e._v(" "),n("li",[n("strong",[e._v("publickeypin")]),e._v(": If this is set: After the next connection has been successfully established, the public key of the broker is pinned. The connection will be refused if another public key is used. Clear "),n("strong",[e._v("publickey")]),e._v(" to allow a new public key for the next connection attempt. This option will increase security.")]),e._v(" "),n("li",[n("strong",[e._v("certificate")]),e._v(": The certificate hash. If "),n("strong",[e._v("certificatepin")]),e._v(" is set this hash is used to verify the connection. Clear to allow a new certificate pinning on the next connection attempt. If empty will be filled automatically by the next successful connection. An example input would be "),n("code",[e._v("SHA-256:83F9171E06A313118889F7D79302BD1B7A2042EE0CFD029ABF8DD06FFA6CD9D3")]),e._v(".")]),e._v(" "),n("li",[n("strong",[e._v("publickey")]),e._v(": The public key hash. If "),n("strong",[e._v("publickeypin")]),e._v(" is set this hash is used to verify the connection. Clear to allow a new public key pinning on the next connection attempt. If empty will be filled automatically by the next successful connection. An example input would be "),n("code",[e._v("SHA-256:83F9171E06A313118889F7D79302BD1B7A2042EE0CFD029ABF8DD06FFA6CD9D3")]),e._v(".")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"supported-channels"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#supported-channels","aria-hidden":"true"}},[this._v("#")]),this._v(" Supported Channels")])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[t("strong",[this._v("publishTrigger")]),this._v(": This channel is triggered when a value is published to the configured MQTT topic on this broker connection. The event payload will be the received MQTT topic value.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[t("strong",[this._v("stateTopic")]),this._v(': This channel will trigger on this MQTT topic. This topic can contain wildcards like + and # for example "all/in/#" or "sensors/+/config".')]),this._v(" "),t("li",[t("strong",[this._v("payload")]),this._v(": An optional condition on the value of the MQTT topic that must match before this channel is triggered.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"full-example"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#full-example","aria-hidden":"true"}},[this._v("#")]),this._v(" Full Example")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("code",[this._v("mqttConnections.things")]),this._v(":")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language-xtend extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v('mqtt:broker:mySecureBroker [ host="192.168.0.41", secure=true, certificatepin=true, publickeypin=true ]\nmqtt:broker:myUnsecureBroker [ host="192.168.0.42",secure=false ]\n\nmqtt:broker:myAuthentificatedBroker [ host="192.168.0.43", secure=true, username="user", password="password" ]\n\nmqtt:broker:pinToPublicKey [ host="192.168.0.44", secure=true, publickeypin=true, publickey="SHA-256:9a6f30e67ae9723579da2575c35daf7da3b370b04ac0bde031f5e1f5e4617eb8" ]\n\n')])])])}],!1,null,null,null);s.options.__file="readme.md";t.default=s.exports}}]);