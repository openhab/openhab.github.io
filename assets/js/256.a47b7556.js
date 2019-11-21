(window.webpackJsonp=window.webpackJsonp||[]).push([[256],{956:function(t,e,s){"use strict";s.r(e);var n=s(1),a=Object(n.a)({},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[s("h1",{attrs:{id:"horizon-mediabox-binding"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#horizon-mediabox-binding","aria-hidden":"true"}},[t._v("#")]),t._v(" Horizon mediabox Binding "),s("Badge",{attrs:{type:"warn",text:"v1"}})],1),t._v(" "),s("p",[t._v("This binding supports the horizon mediabox used by cable companies in the Netherlands and some other countries. The box is manufactured by Samsung and known as SMT-G7400 and SMT-G7401. This binding is tested with the SMT-G7401 but should also work with the SMT-G7400. The binding only works when your box is connected to your home network. When you are able to use the HorizonGo remote control app, you should also be able to use this binding.")]),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),s("p",[t._v("You can find the ip address of you box at menu->setting-> my homenetwork->status my homenetwork->IPv4 address")]),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),s("p",[t._v("It is not possible to query the box for current states. So you can only send commands to the box. This means the state of your items will not be updated when you send commands to the box with an other app or remote control. Therefor the most convenient way to configure items, is as pushbuttons as described "),s("a",{attrs:{href:"https://github.com/openhab/openhab1-addons/wiki/Samples-Item-Definitions#how-to-configure-a-switch-to-be-a-pushbutton",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),s("OutboundLink")],1),t._v(".")]),t._v(" "),s("p",[t._v("The commands correspond to the commands on your remote control. The following commands are available:")]),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),s("p",[t._v("services/horizon.cfg")]),t._v(" "),t._m(9),s("p",[t._v("items/horizon.items")]),t._v(" "),t._m(10),s("p",[t._v("There is an URL that is only reachable when the box is switched on and not in stand-by. This URL can be used to update the state of your power item as below:")]),t._v(" "),t._m(11),s("DocPreviousVersions"),t._v(" "),s("EditPageLink")],1)},[function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"binding-configuration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#binding-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Binding Configuration")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("This binding can be configured in the file "),e("code",[this._v("services/horizon.cfg")]),this._v(".")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("table",[s("thead",[s("tr",[s("th",[t._v("Property")]),t._v(" "),s("th",[t._v("Default")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("Required")]),t._v(" "),s("th",[t._v("Description")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("code",[t._v("<instance>")]),t._v(".host")]),t._v(" "),s("td"),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),s("td",[t._v("IP address of a horizon box")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Where "),e("code",[this._v("<instance>")]),this._v(" is a name you choose, like "),e("code",[this._v("livingroom")]),this._v(".")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"item-configuration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#item-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Item Configuration")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("All items use the format described below. The "),e("code",[this._v("<instance>")]),this._v(" in the items declaration has to be defined in the configuration first.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v('{ horizon="<openHAB-command>:<instance>:<device-command>" }\n')])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("table",[s("thead",[s("tr",[s("th",[t._v("Command")]),t._v(" "),s("th",[t._v("Description")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("POWER")]),t._v(" "),s("td",[t._v("Power")])]),t._v(" "),s("tr",[s("td",[t._v("OK")]),t._v(" "),s("td",[t._v("Ok")])]),t._v(" "),s("tr",[s("td",[t._v("BACK")]),t._v(" "),s("td",[t._v("Back")])]),t._v(" "),s("tr",[s("td",[t._v("CHANNEL_UP")]),t._v(" "),s("td",[t._v("Channel up")])]),t._v(" "),s("tr",[s("td",[t._v("CHANNEL_DOWN")]),t._v(" "),s("td",[t._v("Channel down")])]),t._v(" "),s("tr",[s("td",[t._v("HELP")]),t._v(" "),s("td",[t._v("Help")])]),t._v(" "),s("tr",[s("td",[t._v("MENU")]),t._v(" "),s("td",[t._v("Menu")])]),t._v(" "),s("tr",[s("td",[t._v("GUIDE")]),t._v(" "),s("td",[t._v("Guide")])]),t._v(" "),s("tr",[s("td",[t._v("INFO")]),t._v(" "),s("td",[t._v("Info")])]),t._v(" "),s("tr",[s("td",[t._v("TEXT")]),t._v(" "),s("td",[t._v("Text")])]),t._v(" "),s("tr",[s("td",[t._v("DPAD_UP")]),t._v(" "),s("td",[t._v("Up")])]),t._v(" "),s("tr",[s("td",[t._v("DPAD_DOWN")]),t._v(" "),s("td",[t._v("Down")])]),t._v(" "),s("tr",[s("td",[t._v("DPAD_LEF")]),t._v(" "),s("td",[t._v("Left")])]),t._v(" "),s("tr",[s("td",[t._v("DPAD_RIGHT")]),t._v(" "),s("td",[t._v("Right")])]),t._v(" "),s("tr",[s("td",[t._v("0")]),t._v(" "),s("td",[t._v("Digit 0")])]),t._v(" "),s("tr",[s("td",[t._v("1")]),t._v(" "),s("td",[t._v("Digit 1")])]),t._v(" "),s("tr",[s("td",[t._v("2")]),t._v(" "),s("td",[t._v("Digit 2")])]),t._v(" "),s("tr",[s("td",[t._v("3")]),t._v(" "),s("td",[t._v("Digit 3")])]),t._v(" "),s("tr",[s("td",[t._v("4")]),t._v(" "),s("td",[t._v("Digit 4")])]),t._v(" "),s("tr",[s("td",[t._v("5")]),t._v(" "),s("td",[t._v("Digit 5")])]),t._v(" "),s("tr",[s("td",[t._v("6")]),t._v(" "),s("td",[t._v("Digit 6")])]),t._v(" "),s("tr",[s("td",[t._v("7")]),t._v(" "),s("td",[t._v("Digit 7")])]),t._v(" "),s("tr",[s("td",[t._v("8")]),t._v(" "),s("td",[t._v("Digit 8")])]),t._v(" "),s("tr",[s("td",[t._v("9")]),t._v(" "),s("td",[t._v("Digit 9")])]),t._v(" "),s("tr",[s("td",[t._v("PAUSE")]),t._v(" "),s("td",[t._v("Play/Pause")])]),t._v(" "),s("tr",[s("td",[t._v("STOP")]),t._v(" "),s("td",[t._v("Stop")])]),t._v(" "),s("tr",[s("td",[t._v("RECORD")]),t._v(" "),s("td",[t._v("Record")])]),t._v(" "),s("tr",[s("td",[t._v("FWD")]),t._v(" "),s("td",[t._v("Forward")])]),t._v(" "),s("tr",[s("td",[t._v("RWD")]),t._v(" "),s("td",[t._v("Rewind")])]),t._v(" "),s("tr",[s("td",[t._v("ID")]),t._v(" "),s("td",[t._v("Id")])]),t._v(" "),s("tr",[s("td",[t._v("RC_PAIR")]),t._v(" "),s("td",[t._v("Remote Control pair")])]),t._v(" "),s("tr",[s("td",[t._v("ONDEMAND")]),t._v(" "),s("td",[t._v("On Demand")])]),t._v(" "),s("tr",[s("td",[t._v("DVR")]),t._v(" "),s("td",[t._v("DVR")])]),t._v(" "),s("tr",[s("td",[t._v("TV")]),t._v(" "),s("td",[t._v("TV")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"examples"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#examples","aria-hidden":"true"}},[this._v("#")]),this._v(" Examples")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("livingroom.host=192.168.1.206\n")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-dsl"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Switch")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("power")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("horizon"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ON:livingroom:POWER"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" autoupdate"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"false"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Switch")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ok")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("horizon"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ON:livingroom:OK"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" autoupdate"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"false"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Switch")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("back")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("horizon"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ON:livingroom:BACK"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" autoupdate"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"false"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-rules"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("rule")]),t._v(" horizon_state\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("when")]),t._v("  \n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Time cron")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0 * * * * ?"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("then")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" ret_val "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sendHttpGetRequest")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http://192.168.1.206:62137/DeviceDescription.xml'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ret_val "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\thorizon_power"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("postUpdate")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("ON")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\thorizon_power"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("postUpdate")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("OFF")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("end")]),t._v("\n")])])])}],!1,null,null,null);e.default=a.exports}}]);