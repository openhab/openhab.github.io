(window.webpackJsonp=window.webpackJsonp||[]).push([[192],{744:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),a("AddonLogo"),t._v(" "),a("p",[t._v("The Niko Home Control binding integrates with a "),a("a",{attrs:{href:"http://www.nikohomecontrol.be/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Niko Home Control"),a("OutboundLink")],1),t._v(" system through a Niko Home Control IP-interface.")]),t._v(" "),a("p",[t._v("The binding has been tested with a Niko Home Control IP-interface (550-00508).\nThis IP-interface provides access on the LAN.\nThe binding does not require a Niko Home Control Gateway (550-00580), but does work with it in the LAN.\nIt will not make a remote connection.\nIt has also been confirmed to work with the Niko Home Control Connected Controller (550-00003).")]),t._v(" "),a("p",[t._v("The binding exposes all actions from the Niko Home Control System that can be triggered from the smartphone/tablet interface, as defined in the Niko Home Control programming software.")]),t._v(" "),a("p",[t._v("Supported actions are types are switches, dimmers and rollershutters.\nNiko Home Control alarm and notice messages are retrieved and made available in the binding.")]),t._v(" "),t._m(1),t._v(" "),a("p",[t._v("The Niko Home Control Controller is represented as a bridge in the binding.\nConnected to a bridge, the Niko Home Control Binding supports on/off actions (e.g. for lights or groups of lights), dimmers and rollershutters or blinds.")]),t._v(" "),t._m(2),t._v(" "),a("p",[t._v("The bridge representing the Niko Home Control IP-interface needs to be added first in the things file or through Paper UI.\nA bridge can be auto-discovered or created manually.\nNo bridge configuration is required when using auto-discovery.")]),t._v(" "),a("p",[t._v("The IP-address and port can be set when manually creating the bridge.")]),t._v(" "),a("p",[t._v("If the IP-address is set, no attempt will be made to discover the correct IP-address.\nou are responsible to force a fixed IP address on the Niko Home Control IP-interface through settings in your DHCP server.")]),t._v(" "),a("p",[t._v("The port is set to 8000 by default and should match the port used by the Niko Home Control IP-interface.")]),t._v(" "),a("p",[t._v("An optional refresh interval will be used to restart the bridge at regular intervals (every 300 minutes by default).\nRestarting the bridge at regular times improves the connection stability and avoids loss of connection. It can be turned off completely.")]),t._v(" "),t._m(3),t._v(" "),a("p",[t._v("A discovery scan will first discover the Niko Home Control IP-interface in the network as a bridge.\nDefault parameters will be used.\nNote that this may fail to find the correct Niko Home Control IP-interface when there are multiple IP-interfaces in the network.")]),t._v(" "),a("p",[t._v("When the Niko Home Control bridge is added as a thing, from the discovery inbox or manually, system information will be read from the Niko Home Control Controller and will be put in the bridge properties, visible through Paper UI.")]),t._v(" "),a("p",[t._v("Subsequently, all defined actions that can be triggered from a smartphone/tablet in the Niko Home Control system will be discovered and put in the inbox.\nIt is possible to trigger a manual scan for things on the Niko Home Control bridge.")]),t._v(" "),a("p",[t._v("If the Niko Home Control system has locations configured, these will be copied to thing locations and grouped as such in PaperUI.\nLocations can subsequently be changed through the thing location paramter in PaperUI.")]),t._v(" "),t._m(4),t._v(" "),a("p",[t._v("Besides using PaperUI to manually configure things or adding automatically discovered things through PaperUI, you can add thing definitions in the things file.")]),t._v(" "),a("p",[t._v("The Thing configuration for the bridge uses the following syntax:")]),t._v(" "),t._m(5),t._m(6),t._v(" "),t._m(7),t._v(" "),a("p",[t._v("The thing configuration for the actions has the following syntax:")]),t._v(" "),t._m(8),a("p",[t._v("or nested in the bridge configuration:")]),t._v(" "),t._m(9),a("p",[t._v("The following thing types are valid for configuration:")]),t._v(" "),t._m(10),t._m(11),t._v(" "),t._m(12),t._v(" "),t._m(13),t._v(" "),t._m(14),t._v(" "),t._m(15),t._v(" "),t._m(16),t._v(" "),t._m(17),t._v(" "),t._m(18),t._v(" "),t._m(19),t._v(" "),t._m(20),t._v(" "),t._m(21),t._v(" "),a("p",[t._v("The binding has been tested with a Niko Home Control IP-interface (550-00508) and the Niko Home Control Connected Controller (550-00003).")]),t._v(" "),a("p",[t._v("The action events implemented are limited to onOff, dimmer and rollershutter or blinds.\nOther actions have not been implemented.\nIt is not possible to tilt the slats of venetian blinds.")]),t._v(" "),a("p",[t._v("Beyond action events, the Niko Home Control communication also supports thermostats, electricity usage data and alarms.\nThis has not been implemented.")]),t._v(" "),t._m(22),t._v(" "),a("p",[t._v(".things:")]),t._v(" "),t._m(23),a("p",[t._v(".items:")]),t._v(" "),t._m(24),a("p",[t._v(".sitemap:")]),t._v(" "),t._m(25),a("p",[t._v("Example trigger rule:")]),t._v(" "),t._m(26),a("DocPreviousVersions"),t._v(" "),a("EditPageLink")],1)},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"niko-home-control-binding"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#niko-home-control-binding","aria-hidden":"true"}},[this._v("#")]),this._v(" Niko Home Control Binding")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"supported-things"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#supported-things","aria-hidden":"true"}},[this._v("#")]),this._v(" Supported Things")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"binding-configuration"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#binding-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Binding Configuration")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"discovery"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#discovery","aria-hidden":"true"}},[this._v("#")]),this._v(" Discovery")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"thing-configuration"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#thing-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Thing Configuration")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-dsl"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("Bridge")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("nikohomecontrol"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("bridge"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")])]),a("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("bridgeId"),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" addr"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"<IP-address of IP-interface>"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" port"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("listening port"),a("span",{attrs:{class:"token operator"}},[t._v(">")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                                           "),a("span",{attrs:{class:"token constant"}},[t._v("refresh")]),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"<Refresh interval>"')]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("code",[this._v("bridgeId")]),this._v(" can have any value.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("code",[this._v("addr")]),this._v(" is the fixed Niko Home Control IP-interface address and is required.\n"),s("code",[this._v("port")]),this._v(" will be the port used to connect and is 8000 by default.\n"),s("code",[this._v("refresh")]),this._v(" is the interval to restart the communication in minutes (300 by default), if 0 or omitted the connection will not restart at regular intervals.")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-dsl"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("Thing")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("nikohomecontrol"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")])]),a("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("thing "),a("span",{attrs:{class:"token class-name"}},[t._v("type")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),a("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("bridgeId"),a("span",{attrs:{class:"token operator"}},[t._v(">")]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),a("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("thingId"),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"Label"')]),t._v(" @ "),a("span",{attrs:{class:"token string"}},[t._v('"Location"')]),t._v("\n                        "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" actionId"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("Niko Home Control action ID"),a("span",{attrs:{class:"token operator"}},[t._v(">")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                          "),a("span",{attrs:{class:"token constant"}},[t._v("step")]),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("dimmer "),a("span",{attrs:{class:"token class-name"}},[t._v("increase")]),a("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("decrease "),a("span",{attrs:{class:"token constant"}},[t._v("step")]),t._v(" value"),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-dsl"}},[a("code",[a("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("thing "),a("span",{attrs:{class:"token class-name"}},[t._v("type")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),a("span",{attrs:{class:"token function"}},[t._v(" <thingId>")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"Label"')]),t._v(" @ "),a("span",{attrs:{class:"token string"}},[t._v('"Location"')]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" actionId"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("Niko Home Control action ID"),a("span",{attrs:{class:"token operator"}},[t._v(">")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                         "),a("span",{attrs:{class:"token constant"}},[t._v("step")]),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("dimmer "),a("span",{attrs:{class:"token class-name"}},[t._v("increase")]),a("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("decrease "),a("span",{attrs:{class:"token constant"}},[t._v("step")]),t._v(" value"),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("onOff, dimmer, blind\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("code",[this._v("thingId")]),this._v(" can have any value, but will be set to the same value as the actionId parameter if discovery is used.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("code",[this._v('"Label"')]),this._v(" is een optional label for the thing.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("code",[this._v('@ "Location"')]),this._v(" is optional, and represents the location of the thing. Auto-discovery would have assigned a value automatically.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("The "),s("code",[this._v("actionId")]),this._v(" parameter is the unique ip Interface Object ID ("),s("code",[this._v("ipInterfaceObjectId")]),this._v(") as automatically assigned in the Niko Home Control Controller when programming the Niko Home Control system using the Niko Home Control programming software.\nIt is not directly visible in the Niko Home Control programming or user software, but will be detected and automatically set by openHAB discovery.\nFor textual configuration, you can be manually retrieve it from the content of the .nhcp configuration file created by the programming software.\nOpen the file with an unzip tool to read it's content.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("The "),s("code",[this._v("step")]),this._v(" parameter is only available for dimmers.\nIt sets a step value for dimmer increase/decrease actions. The parameter is optional and set to 10 by default.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"channels"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#channels","aria-hidden":"true"}},[this._v("#")]),this._v(" Channels")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("For thing type "),s("code",[this._v("onOff")]),this._v(" the supported channel is "),s("code",[this._v("switch")]),this._v(".\nOnOff command types are supported.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("For thing type "),s("code",[this._v("dimmer")]),this._v(" the supported channel is "),s("code",[this._v("brightness")]),this._v(".\nOnOff, IncreaseDecrease and Percent command types are supported.\nNote that sending an ON command will switch the dimmer to the value stored when last turning the dimmer off, or 100% depending on the configuration in the Niko Home Control Controller.\nThis can be changed with the Niko Home Control programming software.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("For thing type "),s("code",[this._v("blind")]),this._v(" the supported channel is "),s("code",[this._v("rollershutter")]),this._v(". UpDown, StopMove and Percent command types are supported.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("The bridge has two trigger channels "),s("code",[this._v("alarm")]),this._v(" and "),s("code",[this._v("notice")]),this._v(".\nIt can be used as a trigger to rules. The event message is the alarm or notice text coming from Niko Home Control.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"limitations"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#limitations","aria-hidden":"true"}},[this._v("#")]),this._v(" Limitations")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"example"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#example","aria-hidden":"true"}},[this._v("#")]),this._v(" Example")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-dsl"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("Bridge")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("nikohomecontrol"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("bridge"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("nhc1")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" addr"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"192.168.0.70"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" port"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token number"}},[t._v("8000")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token constant"}},[t._v("refresh")]),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token number"}},[t._v("300")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    onOff "),a("span",{attrs:{class:"token number"}},[t._v("1")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"LivingRoom"')]),t._v(" @ "),a("span",{attrs:{class:"token string"}},[t._v('"Downstairs"')]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" actionId"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token number"}},[t._v("1")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    dimmer "),a("span",{attrs:{class:"token class-name"}},[t._v("2")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"TVRoom"')]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" actionId"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token number"}},[t._v("2")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token constant"}},[t._v("step")]),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token number"}},[t._v("5")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    blind "),a("span",{attrs:{class:"token number"}},[t._v("3")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" actionId"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token number"}},[t._v("3")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("Bridge")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("nikohomecontrol"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("bridge"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("nhc2")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" addr"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"192.168.0.110"')]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    onOff "),a("span",{attrs:{class:"token number"}},[t._v("11")]),t._v(" @ "),a("span",{attrs:{class:"token string"}},[t._v('"Upstairs"')]),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" actionId"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token number"}},[t._v("11")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    dimmer "),a("span",{attrs:{class:"token class-name"}},[t._v("12")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" actionId"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token number"}},[t._v("12")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token constant"}},[t._v("step")]),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token number"}},[t._v("5")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    blind "),a("span",{attrs:{class:"token number"}},[t._v("13")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" actionId"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token number"}},[t._v("13")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-dsl"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("Switch")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("LivingRoom")]),t._v("       "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("channel"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"nikohomecontrol:onOff:nhc1:1:switch"')]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("          # "),a("span",{attrs:{class:"token keyword"}},[t._v("Switch")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("for")]),t._v(" onOff type "),a("span",{attrs:{class:"token class-name"}},[t._v("action")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("Dimmer")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("TVRoom")]),t._v("           "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("channel"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"nikohomecontrol:dimmer:nhc1:2:brightness"')]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("     # Changing brightness dimmer "),a("span",{attrs:{class:"token class-name"}},[t._v("type")]),t._v(" action\n"),a("span",{attrs:{class:"token keyword"}},[t._v("Rollershutter")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Kitchen")]),t._v("   "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("channel"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"nikohomecontrol:blind:nhc1:3:rollershutter"')]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("   # Controlling rollershutter "),a("span",{attrs:{class:"token class-name"}},[t._v("or")]),t._v(" blind type "),a("span",{attrs:{class:"token class-name"}},[t._v("action")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-dsl"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("Switch")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("item")]),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("LivingRoom\n"),a("span",{attrs:{class:"token keyword"}},[t._v("Slider")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("item")]),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("TVRoom\n"),a("span",{attrs:{class:"token keyword"}},[t._v("Switch")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("item")]),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("TVRoom          # allows switching "),a("span",{attrs:{class:"token class-name"}},[t._v("dimmer")]),t._v(" "),a("span",{attrs:{class:"token constant"}},[t._v("item")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("off")]),t._v(" or on"),a("span",{attrs:{class:"token tag"}},[t._v(" (with controller defined behavior)")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("Rollershutter")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("item")]),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("Kitchen\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-rules"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("rule")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"example trigger rule"')]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("when")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("Channel")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'nikohomecontrol:bridge:nhc1:alarm'")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("triggered")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("or")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("Channel")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'nikohomecontrol:bridge:nhc1:notice'")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("triggered")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("then")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" message "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" receivedEvent"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("getEvent")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{attrs:{class:"token function"}},[t._v("logInfo")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"nhcTriggerExample"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"Message: {}"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" message"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("end")]),t._v("\n")])])])}],!1,null,null,null);e.options.__file="readme.md";s.default=e.exports}}]);