(window.webpackJsonp=window.webpackJsonp||[]).push([[237],{812:function(t,s,a){"use strict";a.r(s);var e=a(0),n=Object(e.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),a("p",[t._v("The openHAB Sapp binding connects to "),a("a",{attrs:{href:"http://www.sinthesi.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("Picnet"),a("OutboundLink")],1),t._v(" Home Automation installations. The binding supports multi master configuration as well.")]),t._v(" "),a("p",[t._v("The Sapp binding polls the bus in an configurable interval and support sapp over ethernet only,  so if you use an old master series without ethernet connection you need to use a Moxa 5110 in order to use it.")]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),a("p",[t._v("where:")]),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._m(7),t._v(" "),a("p",[t._v("The Picnet Master supports Input Output and Virtual address types.")]),t._v(" "),a("p",[t._v("In the binding we use:")]),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),a("p",[t._v("These values are accepted in order to get the status")]),t._v(" "),t._m(11),t._v(" "),t._m(12),t._v(" "),a("p",[t._v("It is a number and its value depends from the Status address type as described.")]),t._v(" "),t._m(13),t._v(" "),a("p",[t._v("These values are accepted in order to get the status")]),t._v(" "),t._m(14),t._v(" "),t._m(15),t._v(" "),a("p",[t._v("This values are accepted in order to control the status. Only Virtual is accepted.")]),t._v(" "),t._m(16),t._v(" "),t._m(17),t._v(" "),a("p",[t._v("It is a number and the value depends from the Status address type as described.")]),t._v(" "),t._m(18),t._v(" "),a("p",[t._v("These values are accepted in order to control the status")]),t._v(" "),t._m(19),t._v(" "),a("p",[t._v("The sapp binding support the following items and their use is listed here:")]),t._v(" "),t._m(20),t._v(" "),a("p",[t._v("Switch item syntax:")]),t._v(" "),t._m(21),t._m(22),t._v(" "),a("p",[t._v("In this example we control the status of module 60 Output 1 and we control it using Virtual 2001 bit 1 and we send 1 on ON and 1 on OFF command.\nThe Virtual 2001 is autoreset type on master program.")]),t._v(" "),t._m(23),t._m(24),t._v(" "),a("p",[t._v("There is a special switch that can stop and start polling in order to write the Master without stopping Openhab sw.")]),t._v(" "),t._m(25),t._v(" "),t._m(26),t._v(" "),a("p",[t._v("Contact item syntax:")]),t._v(" "),t._m(27),t._m(28),t._v(" "),a("p",[t._v("In this example we control the status of module 12 Input 7.")]),t._v(" "),t._m(29),a("p",[t._v("The contact status is by default inverted, so NC contact for is OPEN and NO is CLOSED. To invert the status just add :0 at the end of the string just like the example:")]),t._v(" "),t._m(30),t._m(31),t._v(" "),a("p",[t._v("Number item syntax:")]),t._v(" "),t._m(32),t._m(33),t._v(" "),a("p",[t._v("Number item come with scale system included. For example in order to scale a word value /10 you can use :0:6553 like example. Default scale depends on address type (0-65535 for word, 0-255 for L/H, 0-1 for bit).")]),t._v(" "),t._m(34),t._m(35),t._v(" "),a("p",[t._v("Rollershutter item syntax:")]),t._v(" "),t._m(36),t._m(37),t._v(" "),a("p",[t._v("In this example we control the status of Virtual 154 from 0 to 100 for percent status. Virtual 155 bit 1 is used for up command, Virtual 155 bit 2 is used for stop command, Virtual 155 bit 3 is used for down command.")]),t._v(" "),t._m(38),t._m(39),t._v(" "),a("p",[t._v("Dimmer item syntax:")]),t._v(" "),t._m(40),t._m(41),t._v(" "),a("p",[t._v("Dimmer item come with scale system included; use L or H in order to scale from 0 to 255 and * in order to scale from 0 to 65535. Here Virtual 25 has value from 0 to 255 with step to 10")]),t._v(" "),t._m(42),a("p",[t._v("If you want to use dimmer in sitemap you can use this definitions:")]),t._v(" "),t._m(43),t._m(44),t._v(" "),a("p",[t._v('The default openHAB code formatter has been modified in this binding just in the "maximum line width" parameter, allowing longer lines then the standard openHAB.\nThis is because the code would otherwise be quite unreadable being split over too many lines.')]),t._v(" "),a("DocPreviousVersions"),t._v(" "),a("EditPageLink")],1)},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"picnet-sapp-binding"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#picnet-sapp-binding","aria-hidden":"true"}},[this._v("#")]),this._v(" Picnet Sapp Binding")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"binding-configuration"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#binding-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Binding Configuration")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("This binding can be configured with the file "),s("code",[this._v("services/sapp.cfg")]),this._v(".")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("table",[a("thead",[a("tr",[a("th",[t._v("Property")]),t._v(" "),a("th",[t._v("Default")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("Required")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("refresh")]),t._v(" "),a("td",[t._v("100")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("No")]),t._v(" "),a("td",[t._v("refresh interval to Picnet polling service. Value is in milliseconds.")])]),t._v(" "),a("tr",[a("td",[t._v("pnmas.ids=home,office")]),t._v(" "),a("td"),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),a("td",[t._v("Examples: "),a("code",[t._v("home,office")])])]),t._v(" "),a("tr",[a("td",[t._v("pnmas."),a("code",[t._v("<id>")]),t._v(".ip")]),t._v(" "),a("td"),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),a("td",[t._v("Only the pnmas listed in "),a("code",[t._v("pnmas.ids")]),t._v(" are used")])]),t._v(" "),a("tr",[a("td",[t._v("pnmas."),a("code",[t._v("<id>")]),t._v(".port")]),t._v(" "),a("td"),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),a("td",[t._v("Only the pnmas listed in "),a("code",[t._v("pnmas.ids")]),t._v(" are used. Example: "),a("code",[t._v("7001")])])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[s("code",[this._v("<id>")]),this._v(" is a name you choose for an instance to control. You can specify multiple values for "),s("code",[this._v("<id>")]),this._v(".ip and "),s("code",[this._v("<id>")]),this._v(".port.")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"example-sapp-cfg"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#example-sapp-cfg","aria-hidden":"true"}},[this._v("#")]),this._v(" Example sapp.cfg")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("refresh=100\npnmas.ids=home,work\npnmas.home.ip=192.168.2.97\npnmas.home.port=7001\npnmas.work.ip=192.168.2.98\npnmas.work.port=4001\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"item-configuration"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#item-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Item Configuration")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("em",[s("strong",[this._v("pnmasid status")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("It is the "),s("code",[this._v("pnmas.ids")]),this._v(" name defined in binding configuration.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("em",[s("strong",[this._v("Status address type")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ul",[a("li",[a("strong",[a("code",[t._v("I")])]),t._v(": Input (valid numbers are from 1 to 250). This is the module address")]),t._v(" "),a("li",[a("strong",[a("code",[t._v("O")])]),t._v(": Output (valid numbers are from 1 to 250). This is the module address")]),t._v(" "),a("li",[a("strong",[a("code",[t._v("V")])]),t._v(": Virtual (valid numbers are from 1 to 2500). This is the virtual number")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("em",[s("strong",[this._v("Status address")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("em",[s("strong",[this._v("Status subaddress")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ul",[a("li",[a("strong",[a("code",[t._v("*")])]),t._v(": The word value")]),t._v(" "),a("li",[a("strong",[a("code",[t._v("H")])]),t._v(": The high byte value")]),t._v(" "),a("li",[a("strong",[a("code",[t._v("L")])]),t._v(": The low byte value")]),t._v(" "),a("li",[a("strong",[a("code",[t._v("1-16")])]),t._v(": The single bit value")]),t._v(" "),a("li",[a("strong",[a("code",[t._v("+")])]),t._v(": Signed word, -32768 to 32767")]),t._v(" "),a("li",[a("strong",[a("code",[t._v("H+")])]),t._v(": Signed high byte, -128 to 127")]),t._v(" "),a("li",[a("strong",[a("code",[t._v("L+")])]),t._v(": Signed low byte, -128 to 127")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("em",[s("strong",[this._v("Control address type")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[s("strong",[s("code",[this._v("V")])]),this._v(": Virtual valid numbers are from 1 to 2500. This is the virtual number")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("em",[s("strong",[this._v("Control address")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("em",[s("strong",[this._v("Control subaddress")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ul",[a("li",[a("strong",[a("code",[t._v("*")])]),t._v(": The word value")]),t._v(" "),a("li",[a("strong",[a("code",[t._v("H")])]),t._v(": The high byte value")]),t._v(" "),a("li",[a("strong",[a("code",[t._v("L")])]),t._v(": The low byte value")]),t._v(" "),a("li",[a("strong",[a("code",[t._v("1-16")])]),t._v(": The single bit value")]),t._v(" "),a("li",[a("strong",[a("code",[t._v("+")])]),t._v(": Signed word, -32768 to 32767")]),t._v(" "),a("li",[a("strong",[a("code",[t._v("H+")])]),t._v(": Signed high byte, -128 to 127")]),t._v(" "),a("li",[a("strong",[a("code",[t._v("L+")])]),t._v(": Signed low byte, -128 to 127")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"switch"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#switch","aria-hidden":"true"}},[this._v("#")]),this._v(" Switch")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("<pnmasid status>:<status address type, I/O/V>:<status address,1-250/1-250/1-2500>:<status subaddress, */H/L/1-16>:<on value>/<pnmasid control>:<status address type, only V>:<control address, 1-2500>:<control subaddress, */H/L/1-16>:<on value>:<off value>\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"switch-example"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#switch-example","aria-hidden":"true"}},[this._v("#")]),this._v(" Switch Example")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-dsl"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("Switch")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("LightDinner")]),t._v("  "),a("span",{attrs:{class:"token string"}},[t._v('"Dinner Light"')]),a("span",{attrs:{class:"token tag"}},[t._v(" (gLight)")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" sapp"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"home:O:60:1/home:V:2001:1:1:1"')]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("em",[s("strong",[this._v("How to start and stop polling using a switch item")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("code",[this._v('Switch PollerSwitch "PollerSwitch" { sapp="P" }')])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"contact"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#contact","aria-hidden":"true"}},[this._v("#")]),this._v(" Contact")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("// <pnmasid status>:<status address type, I/O/V>:<status address, 1-250/1-250/1-2500>:<status subaddress, */H/L/1-16>:<open value>\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"contact-example"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#contact-example","aria-hidden":"true"}},[this._v("#")]),this._v(" Contact Example")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-dsl"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("Contact")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("ContactWindowsBath")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"Bath Window"')]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" sapp"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"home:I:12:7"')]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-dsl"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("Contact")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("ContactWindowsBath")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"Bath Window"')]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" sapp"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"home:I:12:7:0"')]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"number"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#number","aria-hidden":"true"}},[this._v("#")]),this._v(" Number")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("<pnmasid status>:<status address type, I/O/V>:<status address, 1-250/1-250/1-2500>:<status subaddress, */H/L/1-16>\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"number-examples"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#number-examples","aria-hidden":"true"}},[this._v("#")]),this._v(" Number Examples")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-dsl"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("Number")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("SappNumber1")]),t._v("\t\t"),a("span",{attrs:{class:"token string"}},[t._v('"Sapp Number * : Value [%.1f]"')]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" sapp"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"home:V:200:*:1:1000"')]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("Number")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("SappNumber2")]),t._v("\t\t"),a("span",{attrs:{class:"token string"}},[t._v('"Sapp Number H : Value [%.1f]"')]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" sapp"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"home:V:200:H:0:2500"')]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("Number")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("SappNumber3")]),t._v("\t\t"),a("span",{attrs:{class:"token string"}},[t._v('"Sapp Number L : Value [%.1f]"')]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" sapp"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"home:V:200:L"')]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("Number")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("SappNumber4")]),t._v("\t\t"),a("span",{attrs:{class:"token string"}},[t._v('"Sapp Number 1 : Value [%.1f]"')]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" sapp"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"home:V:200:1"')]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("Number")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("SappNumber5")]),t._v("\t\t"),a("span",{attrs:{class:"token string"}},[t._v('"Sapp Number 2 : Value [%.1f]"')]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" sapp"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"home:V:200:2"')]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("Number")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("SappNumberX1")]),t._v("\t\t"),a("span",{attrs:{class:"token string"}},[t._v('"Sapp Number Setpoint : Value [%.1f]"')]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" sapp"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"home:V:230:*:0:6553"')]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("Number")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("SappNumberX2")]),t._v("\t\t"),a("span",{attrs:{class:"token string"}},[t._v('"Sapp Number Setpoint : Value [%.1f]"')]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" sapp"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"home:V:230:*"')]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"rollershutter"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#rollershutter","aria-hidden":"true"}},[this._v("#")]),this._v(" Rollershutter")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("<pnmasid status>:<status address type, only V>:<status address, 1-2500>:<status subaddress, */H/L/1-16>:<up value>:<down value>/<pnmasid up command>:<status address type, only V>:<control address, 1-2500>:<control subaddress, */H/L/1-16>:<up value>/<pnmasid down command>:<status address type, only V>:<control address, 1-2500>:<control subaddress, */H/L/1-16>:<down value>/<pnmasid stop command>:<status address type, only V>:<control address, 1-2500>:<control subaddress, */H/L/1-16>:<stop value>\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"rollershutter-example"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#rollershutter-example","aria-hidden":"true"}},[this._v("#")]),this._v(" Rollershutter Example")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-dsl"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("Rollershutter")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("BlindBath")]),t._v("\t \t"),a("span",{attrs:{class:"token string"}},[t._v('"Bath Blind"')]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" sapp"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"home:V:154:*:0:100/home:V:155:1:1/home:V:155:2:1/home:V:155:3:1"')]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"dimmer"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dimmer","aria-hidden":"true"}},[this._v("#")]),this._v(" Dimmer")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("<pnmasid status>:<status address type, only V>:<status address, 1-2500>:<status subaddress, */H/L/1-16>:<increment>\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h4",{attrs:{id:"dimmer-examples"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dimmer-examples","aria-hidden":"true"}},[this._v("#")]),this._v(" Dimmer Examples")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-dsl"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("Dimmer")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("dimmer1")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"dimmer [%d %%]"')]),a("span",{attrs:{class:"token tag"}},[t._v(" (gSapp1)")]),t._v("  "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" sapp"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"home:V:25:L:10"')]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-dsl"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("Switch")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("item")]),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("dimmer1 "),a("span",{attrs:{class:"token class-name"}},[t._v("mappings")]),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("INCREASE"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"+"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("DECREASE"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"-"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ON"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"ON"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" OFF"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"OFF"')]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("Switch")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("item")]),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("dimmer1 "),a("span",{attrs:{class:"token class-name"}},[t._v("mappings")]),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token number"}},[t._v("0")]),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"OFF"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("25")]),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"25"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("50")]),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"50"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("75")]),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"75"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("100")]),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"100"')]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("Slider")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("item")]),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("dimmer1 "),a("span",{attrs:{class:"token class-name"}},[t._v("sendFrequency")]),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token number"}},[t._v("100")]),t._v(" "),a("span",{attrs:{class:"token constant"}},[t._v("switchSupport")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"implementation-notes"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#implementation-notes","aria-hidden":"true"}},[this._v("#")]),this._v(" Implementation Notes")])}],!1,null,null,null);n.options.__file="readme.md";s.default=n.exports}}]);