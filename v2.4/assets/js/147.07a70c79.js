(window.webpackJsonp=window.webpackJsonp||[]).push([[147],{691:function(t,s,n){"use strict";n.r(s);var a=n(0),e=Object(a.a)({},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"content"},[t._m(0),t._v(" "),n("p",[t._v("This binding supports the horizon mediabox used by cable companies in the Netherlands and some other countries. The box is manufactured by Samsung and known as SMT-G7400 and SMT-G7401. This binding is tested with the SMT-G7401 but should also work with the SMT-G7400. The binding only works when your box is connected to your home network. When you are able to use the HorizonGo remote control app, you should also be able to use this binding.")]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),n("p",[t._v("You can find the ip address of you box at menu->setting-> my homenetwork->status my homenetwork->IPv4 address")]),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),n("p",[t._v("It is not possible to query the box for current states. So you can only send commands to the box. This means the state of your items will not be updated when you send commands to the box with an other app or remote control. Therefor the most convenient way to configure items, is as pushbuttons as described "),n("a",{attrs:{href:"https://github.com/openhab/openhab1-addons/wiki/Samples-Item-Definitions#how-to-configure-a-switch-to-be-a-pushbutton",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),n("OutboundLink")],1),t._v(".")]),t._v(" "),n("p",[t._v("The commands correspond to the commands on your remote control. The following commands are available:")]),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),n("p",[t._v("services/horizon.cfg")]),t._v(" "),t._m(10),n("p",[t._v("items/horizon.items")]),t._v(" "),t._m(11),n("p",[t._v("There is an URL that is only reachable when the box is switched on and not in stand-by. This URL can be used to update the state of your power item as below:")]),t._v(" "),t._m(12),n("DocPreviousVersions"),t._v(" "),n("EditPageLink")],1)},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"horizon-mediabox-binding"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#horizon-mediabox-binding","aria-hidden":"true"}},[this._v("#")]),this._v(" Horizon mediabox Binding")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"binding-configuration"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#binding-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Binding Configuration")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("This binding can be configured in the file "),s("code",[this._v("services/horizon.cfg")]),this._v(".")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("table",[n("thead",[n("tr",[n("th",[t._v("Property")]),t._v(" "),n("th",[t._v("Default")]),t._v(" "),n("th",{staticStyle:{"text-align":"center"}},[t._v("Required")]),t._v(" "),n("th",[t._v("Description")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[n("code",[t._v("<instance>")]),t._v(".host")]),t._v(" "),n("td"),t._v(" "),n("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),n("td",[t._v("IP address of a horizon box")])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Where "),s("code",[this._v("<instance>")]),this._v(" is a name you choose, like "),s("code",[this._v("livingroom")]),this._v(".")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"item-configuration"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#item-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Item Configuration")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("All items use the format described below. The "),s("code",[this._v("<instance>")]),this._v(" in the items declaration has to be defined in the configuration first.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v('{ horizon="<openHAB-command>:<instance>:<device-command>" }\n')])])])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("table",[n("thead",[n("tr",[n("th",[t._v("Command")]),t._v(" "),n("th",[t._v("Description")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("POWER")]),t._v(" "),n("td",[t._v("Power")])]),t._v(" "),n("tr",[n("td",[t._v("OK")]),t._v(" "),n("td",[t._v("Ok")])]),t._v(" "),n("tr",[n("td",[t._v("BACK")]),t._v(" "),n("td",[t._v("Back")])]),t._v(" "),n("tr",[n("td",[t._v("CHANNEL_UP")]),t._v(" "),n("td",[t._v("Channel up")])]),t._v(" "),n("tr",[n("td",[t._v("CHANNEL_DOWN")]),t._v(" "),n("td",[t._v("Channel down")])]),t._v(" "),n("tr",[n("td",[t._v("HELP")]),t._v(" "),n("td",[t._v("Help")])]),t._v(" "),n("tr",[n("td",[t._v("MENU")]),t._v(" "),n("td",[t._v("Menu")])]),t._v(" "),n("tr",[n("td",[t._v("GUIDE")]),t._v(" "),n("td",[t._v("Guide")])]),t._v(" "),n("tr",[n("td",[t._v("INFO")]),t._v(" "),n("td",[t._v("Info")])]),t._v(" "),n("tr",[n("td",[t._v("TEXT")]),t._v(" "),n("td",[t._v("Text")])]),t._v(" "),n("tr",[n("td",[t._v("DPAD_UP")]),t._v(" "),n("td",[t._v("Up")])]),t._v(" "),n("tr",[n("td",[t._v("DPAD_DOWN")]),t._v(" "),n("td",[t._v("Down")])]),t._v(" "),n("tr",[n("td",[t._v("DPAD_LEF")]),t._v(" "),n("td",[t._v("Left")])]),t._v(" "),n("tr",[n("td",[t._v("DPAD_RIGHT")]),t._v(" "),n("td",[t._v("Right")])]),t._v(" "),n("tr",[n("td",[t._v("0")]),t._v(" "),n("td",[t._v("Digit 0")])]),t._v(" "),n("tr",[n("td",[t._v("1")]),t._v(" "),n("td",[t._v("Digit 1")])]),t._v(" "),n("tr",[n("td",[t._v("2")]),t._v(" "),n("td",[t._v("Digit 2")])]),t._v(" "),n("tr",[n("td",[t._v("3")]),t._v(" "),n("td",[t._v("Digit 3")])]),t._v(" "),n("tr",[n("td",[t._v("4")]),t._v(" "),n("td",[t._v("Digit 4")])]),t._v(" "),n("tr",[n("td",[t._v("5")]),t._v(" "),n("td",[t._v("Digit 5")])]),t._v(" "),n("tr",[n("td",[t._v("6")]),t._v(" "),n("td",[t._v("Digit 6")])]),t._v(" "),n("tr",[n("td",[t._v("7")]),t._v(" "),n("td",[t._v("Digit 7")])]),t._v(" "),n("tr",[n("td",[t._v("8")]),t._v(" "),n("td",[t._v("Digit 8")])]),t._v(" "),n("tr",[n("td",[t._v("9")]),t._v(" "),n("td",[t._v("Digit 9")])]),t._v(" "),n("tr",[n("td",[t._v("PAUSE")]),t._v(" "),n("td",[t._v("Play/Pause")])]),t._v(" "),n("tr",[n("td",[t._v("STOP")]),t._v(" "),n("td",[t._v("Stop")])]),t._v(" "),n("tr",[n("td",[t._v("RECORD")]),t._v(" "),n("td",[t._v("Record")])]),t._v(" "),n("tr",[n("td",[t._v("FWD")]),t._v(" "),n("td",[t._v("Forward")])]),t._v(" "),n("tr",[n("td",[t._v("RWD")]),t._v(" "),n("td",[t._v("Rewind")])]),t._v(" "),n("tr",[n("td",[t._v("ID")]),t._v(" "),n("td",[t._v("Id")])]),t._v(" "),n("tr",[n("td",[t._v("RC_PAIR")]),t._v(" "),n("td",[t._v("Remote Control pair")])]),t._v(" "),n("tr",[n("td",[t._v("ONDEMAND")]),t._v(" "),n("td",[t._v("On Demand")])]),t._v(" "),n("tr",[n("td",[t._v("DVR")]),t._v(" "),n("td",[t._v("DVR")])]),t._v(" "),n("tr",[n("td",[t._v("TV")]),t._v(" "),n("td",[t._v("TV")])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"examples"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#examples","aria-hidden":"true"}},[this._v("#")]),this._v(" Examples")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("livingroom.host=192.168.1.206\n")])])])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-dsl"}},[n("code",[n("span",{attrs:{class:"token keyword"}},[t._v("Switch")]),t._v("  "),n("span",{attrs:{class:"token class-name"}},[t._v("power")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("horizon"),n("span",{attrs:{class:"token operator"}},[t._v("=")]),n("span",{attrs:{class:"token string"}},[t._v('"ON:livingroom:POWER"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" autoupdate"),n("span",{attrs:{class:"token operator"}},[t._v("=")]),n("span",{attrs:{class:"token string"}},[t._v('"false"')]),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("Switch")]),t._v("  "),n("span",{attrs:{class:"token class-name"}},[t._v("ok")]),t._v("  "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("horizon"),n("span",{attrs:{class:"token operator"}},[t._v("=")]),n("span",{attrs:{class:"token string"}},[t._v('"ON:livingroom:OK"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" autoupdate"),n("span",{attrs:{class:"token operator"}},[t._v("=")]),n("span",{attrs:{class:"token string"}},[t._v('"false"')]),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("Switch")]),t._v("  "),n("span",{attrs:{class:"token class-name"}},[t._v("back")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("horizon"),n("span",{attrs:{class:"token operator"}},[t._v("=")]),n("span",{attrs:{class:"token string"}},[t._v('"ON:livingroom:BACK"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" autoupdate"),n("span",{attrs:{class:"token operator"}},[t._v("=")]),n("span",{attrs:{class:"token string"}},[t._v('"false"')]),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-rules"}},[n("code",[n("span",{attrs:{class:"token keyword"}},[t._v("rule")]),t._v(" horizon_state\n"),n("span",{attrs:{class:"token keyword"}},[t._v("when")]),t._v("  \n\t"),n("span",{attrs:{class:"token keyword"}},[t._v("Time cron")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v('"0 * * * * ?"')]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("then")]),t._v("\n\t"),n("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" ret_val "),n("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("sendHttpGetRequest")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token string"}},[t._v("'http://192.168.1.206:62137/DeviceDescription.xml'")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),n("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ret_val "),n("span",{attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),n("span",{attrs:{class:"token constant"}},[t._v("null")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),n("span",{attrs:{class:"token function"}},[t._v("postUpdate")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("horizon_power"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token constant"}},[t._v("ON")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),n("span",{attrs:{class:"token function"}},[t._v("postUpdate")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("horizon_power"),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token constant"}},[t._v("OFF")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("end")]),t._v("\n")])])])}],!1,null,null,null);e.options.__file="readme.md";s.default=e.exports}}]);