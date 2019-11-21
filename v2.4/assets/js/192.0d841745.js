(window.webpackJsonp=window.webpackJsonp||[]).push([[192],{759:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),a("p",[t._v("This binding allows you to have native access for MCP23017 I/O expander on I2C bus.\nIt was tested with Raspberry PI 2 and Raspberry PI 3, but probably should work with other devices supported by pi4j library.")]),t._v(" "),a("p",[t._v('On Raspberry PI user on which openHAB is running (default user name is "openhab") needs to be added to groups "i2c" and  "gpio".')]),t._v(" "),t._m(1),t._v(" "),a("p",[t._v("This binding supports one thing type:")]),t._v(" "),a("p",[t._v("mcp23017 - which is a mcp23017 chip connected to a I2C bus on specified HEX address and bus number")]),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),a("p",[t._v("mcp23017 supports 16 channels in 2 groups:")]),t._v(" "),t._m(6),t._v(" "),a("p",[t._v("Channel determines MCP23017 PIN we want to use.")]),t._v(" "),a("p",[t._v("Group determines mode in which PIN shoud work.")]),t._v(" "),a("p",[t._v('When PIN should work as DIGITAL_INPUT, channel from group "input" should be used.')]),t._v(" "),a("p",[t._v('When PIN should work as DIGITAL_OUTPUT, channel from group "output" should be used.')]),t._v(" "),t._m(7),t._v(" "),a("p",[t._v("Let's imagine a setup with:")]),t._v(" "),t._m(8),t._v(" "),a("p",[t._v("Pressing (and releasing) a wall switch should notify openHAB, and then openHAB should change state of relay to on/off the light.\nYour pin B1 should work as DIGITAL_INPUT, because it READS state of a PIN (state of wall switch). Your pin A0 should work as DIGITAL_OUTPUT\nbecause openHAB will SET state of this PIN. So your config should look like this:")]),t._v(" "),t._m(9),t._v(" "),a("p",[t._v("Minimal configuration:")]),t._v(" "),t._m(10),a("p",[t._v("Configuration with default_state and pull_mode:")]),t._v(" "),t._m(11),t._m(12),t._v(" "),t._m(13),t._m(14),t._v(" "),t._m(15),a("DocPreviousVersions"),t._v(" "),a("EditPageLink")],1)},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"mcp23017-binding"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mcp23017-binding","aria-hidden":"true"}},[this._v("#")]),this._v(" MCP23017 Binding")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"supported-things"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#supported-things","aria-hidden":"true"}},[this._v("#")]),this._v(" Supported Things")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"thing-configuration"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#thing-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Thing Configuration")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("Required configuration for mcp23017 thing:")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("table",[a("thead",[a("tr",[a("th",[t._v("Parameter")]),t._v(" "),a("th",[t._v("Description")]),t._v(" "),a("th",[t._v("Default value")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("address")]),t._v(" "),a("td",[t._v('MCP23017 I2C bus address. On Raspberry PI it can be checked as a result of command: "i2cdetect -y 1". Value should be set in HEX.')]),t._v(" "),a("td",[t._v('"20"')])]),t._v(" "),a("tr",[a("td",[t._v("bus_number")]),t._v(" "),a("td",[t._v('a bus number to which mcp23017 is connected. On RPI2 and RPI3 it will be "1", on RPI1 it will be "0".')]),t._v(" "),a("td",[t._v('"1"')])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"channels"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#channels","aria-hidden":"true"}},[this._v("#")]),this._v(" Channels")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("table",[a("thead",[a("tr",[a("th",[t._v("Group")]),t._v(" "),a("th",[t._v("Channels")]),t._v(" "),a("th",[t._v("Additional parameters")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("input")]),t._v(" "),a("td",[t._v("A0, A1, A2, A3, A4, A5, A6, A7, B0, B1, B2, B3, B4, B5, B6, B7")]),t._v(" "),a("td",[t._v("pull_mode (OFF, PULL_UP), default is OFF")])]),t._v(" "),a("tr",[a("td",[t._v("output")]),t._v(" "),a("td",[t._v("A0, A1, A2, A3, A4, A5, A6, A7, B0, B1, B2, B3, B4, B5, B6, B7")]),t._v(" "),a("td",[t._v("default_state (LOW, HIGH), default is LOW")])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"full-example"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#full-example","aria-hidden":"true"}},[this._v("#")]),this._v(" Full Example")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ol",[s("li",[this._v("a wall switch connected to pin B1 on the MCP23017 chip which should turn on/off your LED light when pressed (released).")]),this._v(" "),s("li",[this._v("a relay which is connected to pin A0 on the MCP23017 chip. This relay takes care of turning on/off your light.")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("Things:")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-dsl"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("Thing")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("mcp23017"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("mcp23017"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("chipA")]),t._v("  "),a("span",{attrs:{class:"token string"}},[t._v('"MCP23017 chip A"')]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("address"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token number"}},[t._v("20")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("bus"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-dsl"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("Thing")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("mcp23017"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("mcp23017"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("chipA")]),t._v("  "),a("span",{attrs:{class:"token string"}},[t._v('"MCP23017 chip A"')]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("address"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token number"}},[t._v("20")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("bus"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("Type")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("output_pin")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" output#A0 "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("default_state"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"HIGH"')]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("Type")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("output_pin")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" output#A1 "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("default_state"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"LOW"')]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("Type")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("input_pin")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" input#B0 "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("pull_mode"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"PULL_UP"')]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("Type")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("input_pin")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" input#B1 "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("pull_mode"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"OFF"')]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("Items:")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-dsl"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("Switch")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("living_room_led_switch")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"Living room led switch"')]),t._v("  "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("channel"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"mcp23017:mcp23017:chipA:output#A0"')]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("Contact")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("living_room_led_contact")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"Living room led contact"')]),t._v("  "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("channel"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"mcp23017:mcp23017:chipA:input#B1"')]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("Rules:")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-rules"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("rule")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"living_room_led contact"')]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("when")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("Item")]),t._v(" living_room_led_contact "),a("span",{attrs:{class:"token keyword"}},[t._v("changed")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("to")]),t._v(" "),a("span",{attrs:{class:"token constant"}},[t._v("OPEN")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("then")]),t._v("\n    living_room_led_switch"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("sendCommand")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("living_room_led_switch"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("state "),a("span",{attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),a("span",{attrs:{class:"token constant"}},[t._v("ON")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("?")]),t._v(" "),a("span",{attrs:{class:"token constant"}},[t._v("ON")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token constant"}},[t._v("OFF")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("end")]),t._v("\n\n")])])])}],!1,null,null,null);e.options.__file="readme.md";s.default=e.exports}}]);