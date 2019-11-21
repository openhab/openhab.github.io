(window.webpackJsonp=window.webpackJsonp||[]).push([[321],{1062:function(t,e,s){"use strict";s.r(e);var a=s(1),n=Object(a.a)({},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[s("h1",{attrs:{id:"mqtt-binding"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mqtt-binding","aria-hidden":"true"}},[t._v("#")]),t._v(" MQTT Binding "),s("Badge",{attrs:{type:"warn",text:"v1"}})],1),t._v(" "),s("div",{staticClass:"danger custom-block"},[s("p",{staticClass:"custom-block-title"},[t._v("OBSOLETE BINDING")]),t._v(" "),s("p",[t._v("This 1.x binding is obsolete; it has been replaced by the 2.x "),s("router-link",{attrs:{to:"./../mqtt/"}},[t._v("mqtt")]),t._v(" binding which you should use instead.")],1)]),t._v(" "),s("AddonLogo"),t._v(" "),s("p",[t._v("This binding allows openHAB to act as an MQTT client, so that openHAB items\ncan send and receive "),s("a",{attrs:{href:"http://mqtt.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("MQTT"),s("OutboundLink")],1),t._v(" messages to/from an MQTT broker.\nIt does not provide MQTT broker functionality, for this you may want to have a\nlook at "),s("a",{attrs:{href:"http://mosquitto.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Mosquitto"),s("OutboundLink")],1),t._v(" or others. There are test servers\navailable at "),s("a",{attrs:{href:"http://m2m.eclipse.org",target:"_blank",rel:"noopener noreferrer"}},[t._v("m2m.eclipse.org"),s("OutboundLink")],1),t._v(" and "),s("a",{attrs:{href:"http://test.mosquitto.org",target:"_blank",rel:"noopener noreferrer"}},[t._v("test.mosquitto.org"),s("OutboundLink")],1),t._v(".")]),t._v(" "),s("p",[t._v("openHAB provides MQTT support on different levels. The table below gives a quick overview:")]),t._v(" "),t._m(0),t._v(" "),s("p",[t._v("The OwnTracks (formerly Mqttitude) binding is also available, which is an extension of this binding.")]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),s("p",[t._v("Example configuration of a simple broker connection:")]),t._v(" "),t._m(6),s("p",[t._v("Example configuration of an encrypted broker connection with authentication:")]),t._v(" "),t._m(7),t._m(8),t._v(" "),s("p",[t._v("Below you can see the structure of the inbound MQTT configuration string.\nInbound configurations allow you to receive MQTT messages into an openHAB\nitem. Every item is allowed to have multiple inbound (or outbound)\nconfigurations.")]),t._v(" "),t._m(9),s("p",[t._v("Since 1.6 it is possible to add an optional fifth configuration like:")]),t._v(" "),t._m(10),t._m(11),t._v(" "),t._m(12),t._v(" "),t._m(13),t._m(14),t._v(" "),s("p",[t._v("Below you can see the structure of the outbound MQTT configuration string.\nOutbound configurations allow you to publish (send) an MQTT message to the\nMQTT broker when an item receives a command or state update, and other MQTT\nclients that are subscribed to the given topic on the same broker, like\nArduino devices for example, will receive those messages.")]),t._v(" "),t._m(15),t._m(16),t._v(" "),s("p",[t._v("When the message content for an outbound message is created, the following variables are replaced with their respective values:")]),t._v(" "),t._m(17),t._v(" "),t._m(18),t._v(" "),t._m(19),t._m(20),t._v(" "),t._m(21),t._v(" "),t._m(22),t._v(" "),t._m(23),t._m(24),t._v(" "),t._m(25),t._v(" "),t._m(26),t._v(" "),s("p",[t._v("Example configuration for an event bus binding, which sends all commands to an\nMQTT broker and receives status updates from that broker. This scenario could\nbe used, for example, to link 2 openHAB instances together where the master\ninstance sends all commands to the slave instance and the slave instance sends\nall status updates back to the master. The example below shows an example\nconfiguration for the master node.")]),t._v(" "),t._m(27),t._m(28),t._v(" "),s("p",[t._v("When the default MQTT binding configuration options are not sufficient for\nyour needs, you can also use the MQTT transport bundle directly from within\nyour own binding.")]),t._v(" "),t._m(29),t._v(" "),s("p",[t._v("Using the MqttService, your binding can add custom message consumers and\npublishers to any of the defined MQTT brokers. You don't have to worry about\n(re)connection issues; all of this is done by the transport.mqtt bundle. The\nMqttService class is available to your binding through Declarative Services.\nA good example on how to use the MqttService can be found in the org.openhab.persistence.mqtt\nbundle.")]),t._v(" "),t._m(30),t._v(" "),s("p",[t._v("If the above service doesn't provide all the flexibility you need, you can\nalso use the Eclipse Paho library directly in your binding.  To make the\nlibrary available, it's sufficient to add a dependency to the org.openhab.io.transport.mqtt\nbundle and to add org.eclipse.paho.client.mqtttv3 to your list of imported packages.")]),t._v(" "),s("DocPreviousVersions"),t._v(" "),s("EditPageLink")],1)},[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("table",[s("thead",[s("tr",[s("th",[t._v("Level")]),t._v(" "),s("th",[t._v("Description")]),t._v(" "),s("th",[t._v("Usage")]),t._v(" "),s("th",[t._v("Configuration")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("strong",[t._v("Transport")])]),t._v(" "),s("td",[t._v("Shared transport functions for setting up MQTT broker connections.")]),t._v(" "),s("td",[t._v("Ideal if you want to roll your own binding using MQTT as the transport.")]),t._v(" "),s("td",[s("code",[t._v("services/mqtt.cfg")])])]),t._v(" "),s("tr",[s("td",[s("strong",[t._v("Item binding")])]),t._v(" "),s("td",[t._v("Allows MQTT publish/subscribe configuration on item level")]),t._v(" "),s("td",[t._v("Ideal for highly customized in and outbound message scenarios.")]),t._v(" "),s("td",[s("code",[t._v("items/*.items")])])]),t._v(" "),s("tr",[s("td",[s("strong",[t._v("Event bus binding")])]),t._v(" "),s("td",[t._v("Publish/receive all states/commmands directly on the openHAB eventbus.")]),t._v(" "),s("td",[t._v("Perfect for integrating multiple openHAB instances or broadcasting all events.")]),t._v(" "),s("td",[s("code",[t._v("services/mqtt-eventbus.cfg")])])]),t._v(" "),s("tr",[s("td",[s("strong",[t._v("Persistence")])]),t._v(" "),s("td",[t._v("Uses persistent strategies to push messages on change or a regular interval.")]),t._v(" "),s("td",[t._v("Perfect for persisting time series to a public service like Xively. (See MQTT persistence service.)")]),t._v(" "),s("td",[s("code",[t._v("persist/mqtt.persist")])])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"transport-configuration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#transport-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Transport Configuration")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("In order to consume or publish messages to an MQTT broker, you need to define all the brokers which you want to connect to, in your "),e("code",[this._v("services/mqtt.cfg")]),this._v(" file.")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("table",[s("thead",[s("tr",[s("th",[t._v("Property")]),t._v(" "),s("th",[t._v("Default")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("Required")]),t._v(" "),s("th",[t._v("Description")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("code",[t._v("<broker>")]),t._v(".url")]),t._v(" "),s("td"),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),s("td",[t._v("URL to the MQTT broker, e.g. tcp://localhost:1883 or ssl://localhost:8883")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("<broker>")]),t._v(".clientId")]),t._v(" "),s("td",[t._v("random")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("No*")]),t._v(" "),s("td",[t._v("Client ID to use when connecting to the broker. If not provided a random default is generated. Usually restricted to 23 characters in length. (see the "),s("code",[t._v("allowLongerClientIds")]),t._v(" setting)")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("<broker>")]),t._v(".user")]),t._v(" "),s("td"),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),s("td",[t._v("User ID to authenticate with the broker.")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("<broker>")]),t._v(".pwd")]),t._v(" "),s("td"),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),s("td",[t._v("Password to authenticate with the broker.")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("<broker>")]),t._v(".qos")]),t._v(" "),s("td",[t._v("0")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("No")]),t._v(" "),s("td",[t._v("Set the quality of service level for sending messages to this broker. Possible values are 0 (Deliver at most once), 1 (Deliver at least once) or 2 (Deliver exactly once).")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("<broker>")]),t._v(".retain")]),t._v(" "),s("td",[t._v("false")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("No")]),t._v(" "),s("td",[t._v("True or false. Defines if the broker should retain the messages sent to it.")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("<broker>")]),t._v(".async")]),t._v(" "),s("td",[t._v("true")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("No")]),t._v(" "),s("td",[t._v("True or false. Defines if messages are published asynchronously or synchronously.")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("<broker>")]),t._v(".keepAlive")]),t._v(" "),s("td",[t._v("60")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("No")]),t._v(" "),s("td",[t._v("Integer. Defines the keep alive interval in seconds.")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("<broker>")]),t._v(".allowLongerClientIds")]),t._v(" "),s("td",[t._v("false")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("No")]),t._v(" "),s("td",[t._v("True or false. If set to true, allows the use of clientId values up to 65535 characters long. NOTE: clientId values longer than 23 characters may not be supported by all MQTT servers. Check the server documentation.")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("code",[this._v("<broker>")]),this._v(" is an alias name for the MQTT broker.  This is the name you can use in the item binding configurations afterwards."),e("br"),this._v("\n* "),e("code",[this._v("<broker>")]),this._v(".clientId is not required to be provided because a random value will be generated if a value is not provided.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"example-configurations"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#example-configurations","aria-hidden":"true"}},[this._v("#")]),this._v(" Example Configurations")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("m2m-eclipse.url=tcp://m2m.eclipse.org:1883\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("mosquitto.url=ssl://test.mosquitto.org:8883\nmosquitto.user=administrator\nmosquitto.pwd=mysecret\nmosquitto.qos=1\nmosquitto.retain=true\nmosquitto.async=false\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"item-configuration-for-inbound-messages"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#item-configuration-for-inbound-messages","aria-hidden":"true"}},[this._v("#")]),this._v(" Item Configuration for Inbound Messages")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-dsl"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Item")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("myItem")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("mqtt"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"<direction>[<broker>:<topic>:<type>:<transformer>], <direction>[<broker>:<topic>:<type>:<transformation>], ..."')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" \n")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-dsl"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Item")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("myItem")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("mqtt"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"<direction>[<broker>:<topic>:<type>:<transformer>:<regex_filter>], <direction>[<broker>:<topic>:<type>:<transformation>], ..."')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" \n")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("table",[s("thead",[s("tr",[s("th",[t._v("Property")]),t._v(" "),s("th",[t._v("Description")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("direction")]),t._v(" "),s("td",[t._v('This is always "<" for inbound messages.')])]),t._v(" "),s("tr",[s("td",[t._v("broker")]),t._v(" "),s("td",[t._v("The broker alias as it is defined in the openHAB configuration.")])]),t._v(" "),s("tr",[s("td",[t._v("topic")]),t._v(" "),s("td",[t._v("The MQTT Topic to subscribe to. If a colon is part of the topic, use \\: to escape the colon.")])]),t._v(" "),s("tr",[s("td",[t._v("type")]),t._v(" "),s("td",[t._v("Describes what the message content contains: a status update or command. Allowed values are 'state' or 'command'.")])]),t._v(" "),s("tr",[s("td",[t._v("transformation")]),t._v(" "),s("td",[t._v("Rule defining how to transform the received message content into something openHAB recognizes. Transformations are defined in the format of TRANSFORMATION_NAME(transformation_function).  Allowed values are 'default' or any of the transformers provided in the org.openhab.core.transform bundle. Custom transformations can be contributed directly to the transform bundle by making the Transformation available through Declarative Services. Any value other than the above types will be interpreted as static text, in which case the actual content of the message is ignored.")])]),t._v(" "),s("tr",[s("td",[t._v("regex_filter (optional, since 1.6)")]),t._v(" "),s("td",[t._v('A string representing a regular expression. Only messages that match this expression will be further processed. All other messages will be dropped. Use Case: If multiple different data is sent over one topic (for example multiple sensors of one device), it is possible to distinguish the messages for different items. Example ".'),s("em",[t._v('" (excluding the quotes) will match every message, ".')]),t._v('"type"=2\\n.*" (excluding the quotes) will match every message including type=2.')])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"example-inbound-configurations"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#example-inbound-configurations","aria-hidden":"true"}},[this._v("#")]),this._v(" Example Inbound Configurations")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-dsl"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Number")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("temperature")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"temp [%.1f]"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("mqtt"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"<[publicweatherservice:london-city/temperature:state:default]"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Number")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("waterConsumption")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"consum [%d]"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("mqtt"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"<[mybroker:myHome/watermeter:state:XSLT(parse_water_message.xslt)]"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" \n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Switch")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("doorbell")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"bell [%s]"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("mqtt"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"<[mybroker:myHome/doorbell:command:ON]"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Number")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("mfase1")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"mfase1 [%.3f]"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("mqtt"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"<[flukso:sensor/9cf3d75543fa82a4662fe70df5bf4fde/gauge:state:REGEX(.*,(.*),.*)]"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Number")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("humidity")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"humidity [%.1f%%]"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("mqtt"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"<[broker:weatherstation/readings:state:JS(convertPercent.js):humidity=.*]"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"item-configuration-for-outbound-messages"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#item-configuration-for-outbound-messages","aria-hidden":"true"}},[this._v("#")]),this._v(" Item Configuration for Outbound Messages")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-dsl"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Item")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("itemName")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" mqtt"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"<direction>[<broker>:<topic>:<type>:<trigger>:<transformation>]"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("table",[s("thead",[s("tr",[s("th",[t._v("Property")]),t._v(" "),s("th",[t._v("Description")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("direction")]),t._v(" "),s("td",[t._v('This is always ">" for outbound messages.')])]),t._v(" "),s("tr",[s("td",[t._v("broker")]),t._v(" "),s("td",[t._v("The broker alias as it was defined in the openHAB configuration.")])]),t._v(" "),s("tr",[s("td",[t._v("topic")]),t._v(" "),s("td",[t._v("The MQTT Topic to publish messages to.")])]),t._v(" "),s("tr",[s("td",[t._v("type")]),t._v(" "),s("td",[t._v("'state' or 'command'. Indicates whether the receiving of a status update or command triggers the sending of an outbound message.")])]),t._v(" "),s("tr",[s("td",[t._v("trigger")]),t._v(" "),s("td",[t._v("Specifies an openHAB command or state (e.g. ON, OFF, a DecimalType, ..) which triggers the sending of an outbound message. Use "),s("code",[t._v("*")]),t._v(" to indicate that any command or state should trigger the sending.")])]),t._v(" "),s("tr",[s("td",[t._v("transformation")]),t._v(" "),s("td",[t._v("Rule defining how to create the message content. Transformations are defined in the format of TRANSFORMATION_NAME(transformation_function).  Allowed values are 'default' or any of the transformers provided in the org.openhab.core.transform bundle. Custom transformations can be contributed directly to the transform bundle by making the Transformation available through Declarative Services. Any value other than the above types will be interpreted as static text, in which case this text is used as the message content.")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("${itemName} : name of the item which triggered the sending")]),this._v(" "),e("li",[this._v("${state}    : current state of the item (only for type 'state')")]),this._v(" "),e("li",[this._v("${command}  : command which triggered the sending of the message (only for type 'command')")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"example-outbound-configurations"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#example-outbound-configurations","aria-hidden":"true"}},[this._v("#")]),this._v(" Example Outbound Configurations")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-dsl"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Switch")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("mySwitch")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("mqtt"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('">[mybroker:myhouse/office/light:command:ON:1],>[mybroker:myhouse/office/light:command:OFF:0]"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Switch")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("mySwitch")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("mqtt"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('">[mybroker:myhouse/office/light:command:ON:1],>[mybroker:myhouse/office/light:command:*:Switch ${itemName} was turned ${command}]"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"event-bus-binding-configuration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#event-bus-binding-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Event Bus Binding Configuration")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("In addition to configuring MQTT publish/subscribe options for specific openHAB\nitems, you can also define a generic configuration in the "),e("code",[this._v("services/mqtt-eventbus.cfg")]),this._v("\nfile which will act on "),e("strong",[this._v("ALL")]),this._v(" status updates or commands on the openHAB event\nbus.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("The following properties can be used to configure MQTT for the openHAB event\nbus in the file "),e("code",[this._v("services/mqtt-eventbus.cfg")]),this._v(":")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("broker=<broker>\nstatePublishTopic=<statePublishTopic>\ncommandPublishTopic=<commandPublishTopic>\nstateSubscribeTopic=<stateSubscribeTopic>\ncommandSubscribeTopic=<commandSubscribeTopic>\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("The properties indicated by "),e("code",[this._v("<...>")]),this._v(" need to be replaced with an actual value.\nThe table below lists the meaning of the different properties.")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("table",[s("thead",[s("tr",[s("th",[t._v("Property")]),t._v(" "),s("th",[t._v("Description")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("broker")]),t._v(" "),s("td",[t._v("Name of the broker as it is defined in the "),s("code",[t._v("services/mqtt.cfg")]),t._v(". If this property is not available, no event bus MQTT binding will be created.")])]),t._v(" "),s("tr",[s("td",[t._v("statePublishTopic")]),t._v(" "),s("td",[t._v("When available, all status updates which occur on the openHAB event bus are published to the provided topic. The message content will be the status. The variable ${item} will be replaced during publishing with the item name for which the state was received.")])]),t._v(" "),s("tr",[s("td",[t._v("commandPublishTopic")]),t._v(" "),s("td",[t._v("When available, all commands which occur on the openHAB event bus are published to the provided topic. The message content will be the command. The variable ${item} will be replaced during publishing with the item name for which the command was received.")])]),t._v(" "),s("tr",[s("td",[t._v("stateSubscribeTopic")]),t._v(" "),s("td",[t._v("When available, all status updates received on this topic will be posted to the openHAB event bus. The message content is assumed to be a string representation of the status. The topic should include the variable ${item} to indicate which part of the topic contains the item name which can be used for posting the received value to the event bus.")])]),t._v(" "),s("tr",[s("td",[t._v("commandSubscribeTopic")]),t._v(" "),s("td",[t._v("When available, all commands received on this topic will be posted to the openHAB event bus. The message content is assumed to be a string representation of the command. The topic should include the variable "),s("code",[t._v("${item}")]),t._v(" to indicate which part of the topic contains the item name which can be used for posting the received value to the event bus.")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"example-configurations-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#example-configurations-2","aria-hidden":"true"}},[this._v("#")]),this._v(" Example Configurations")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("broker=m2m-eclipse\ncommandPublishTopic=/openHAB/out/${item}/command\nstateSubscribeTopic=/openHAB/in/${item}/state\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"using-the-transport-org-openhab-io-transport-mqtt-bundle"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#using-the-transport-org-openhab-io-transport-mqtt-bundle","aria-hidden":"true"}},[this._v("#")]),this._v(" Using the transport (org.openhab.io.transport.mqtt) bundle")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"mqttservice"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#mqttservice","aria-hidden":"true"}},[this._v("#")]),this._v(" MqttService")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"eclipse-paho"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#eclipse-paho","aria-hidden":"true"}},[this._v("#")]),this._v(" Eclipse Paho")])}],!1,null,null,null);e.default=n.exports}}]);