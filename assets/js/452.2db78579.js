(window.webpackJsonp=window.webpackJsonp||[]).push([[452],{1079:function(t,s,e){"use strict";e.r(s);var a=e(1),n=Object(a.a)({},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"content"},[e("h1",{attrs:{id:"video-disk-recorder-vdr-binding"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#video-disk-recorder-vdr-binding","aria-hidden":"true"}},[t._v("#")]),t._v(" Video Disk Recorder (VDR) Binding "),e("Badge",{attrs:{type:"warn",text:"v1"}})],1),t._v(" "),e("p",[t._v("The Video Disk Recorder (VDR) binding allows openHAB to control your own digital satellite receiver and "),e("a",{attrs:{href:"http://www.tvdr.de",target:"_blank",rel:"noopener noreferrer"}},[t._v("Video Disk Recorder"),e("OutboundLink")],1),t._v(".")]),t._v(" "),e("p",[t._v("If you have any suggestions or questions don't hesitate to contact me ("),e("a",{attrs:{href:"http://groups.google.com/groups/profile?enc_user=2fum3R0AAACkAo_xkzjYxXMLRwdKLvZ72A6NcFQ3yZH-XCKBlyRD_Q",target:"_blank",rel:"noopener noreferrer"}},[t._v("iwow"),e("OutboundLink")],1),t._v(").")]),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),e("p",[t._v("The syntax for the VDR binding configuration string is explained here:")]),t._v(" "),t._m(4),t._m(5),t._v(" "),e("p",[t._v("Command must be one of the following:")]),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),e("p",[t._v("Binding Configuration:")]),t._v(" "),t._m(9),t._m(10),t._v(" "),e("p",[t._v("Here are some examples for valid binding configuration strings:")]),t._v(" "),e("p",[t._v("For Switch items:")]),t._v(" "),t._m(11),e("p",[t._v("For String items:")]),t._v(" "),t._m(12),e("p",[t._v("As a result, your lines in the items file might look like the following:")]),t._v(" "),t._m(13),t._m(14),t._v(" "),e("p",[t._v("This example requires TV with LAN connection.")]),t._v(" "),e("p",[t._v("First you need two items with NetworkHealthBinding")]),t._v(" "),t._m(15),e("p",[t._v("A rule for the openHAB rule engine can look like this:")]),t._v(" "),t._m(16),t._m(17),t._v(" "),e("p",[t._v("Same requirements and prerequisites as VDR PC on use-case above.")]),t._v(" "),e("p",[t._v("A rule for the openHAB rule engine (not drools) can look like this:")]),t._v(" "),t._m(18),e("DocPreviousVersions"),t._v(" "),e("EditPageLink")],1)},[function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"binding-configuration"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#binding-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Binding Configuration")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("This binding can be configured in the file "),s("code",[this._v("services/vdr.cfg")]),this._v(".")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("table",[e("thead",[e("tr",[e("th",[t._v("Property")]),t._v(" "),e("th",[t._v("Default")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("Required")]),t._v(" "),e("th",[t._v("Description")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("host")]),t._v(" "),e("td",[t._v("none")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("yes")]),t._v(" "),e("td",[t._v("VDR's IP address or name")])]),t._v(" "),e("tr",[e("td",[t._v("port")]),t._v(" "),e("td",[t._v("6419")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("no")]),t._v(" "),e("td",[t._v("The port SVDRP is listening")])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"item-configuration"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#item-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Item Configuration")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v('vdr="<VDR-ID>:<command>[,<VDR-ID>:<command>][,..]"\n')])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("The parts in brackets "),s("code",[this._v("[]")]),this._v(" signify an optional information.")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ul",[e("li",[e("code",[t._v("message")]),t._v(": show message on OSD; must be bound to a String item")]),t._v(" "),e("li",[e("code",[t._v("powerOff")]),t._v(": switch VDR off (same as hit power on remote control); must be bound to a Switch item")]),t._v(" "),e("li",[e("code",[t._v("recording")]),t._v(": recording state; must be bound to a Switch item")]),t._v(" "),e("li",[e("code",[t._v("channel")]),t._v(": channel up / down; can be bound to a Switch item(ON=increase, OFF=decrease) or a number item")]),t._v(" "),e("li",[e("code",[t._v("volume")]),t._v(": volume up / down; can be bound to a Switch item (ON=increase, OFF=decrease) or a number item (value between 0 and 255)")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"examples"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#examples","aria-hidden":"true"}},[this._v("#")]),this._v(" Examples")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"basic-examples"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#basic-examples","aria-hidden":"true"}},[this._v("#")]),this._v(" Basic Examples")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("vdr:LivingRoom.host=vdr.local\nvdr:LivingRoom.port=6419\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("The VDR-ID defined here, e.g. "),s("code",[this._v("LivingRoom")]),this._v(", shall be used in all items configurations and rules.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v('vdr="LivingRoom:powerOff"\nvdr="LivingRoom:recording"\n')])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v('vdr="LivingRoom:message"\n')])])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-dsl"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Switch")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("VDR_LivingroomPower")]),t._v("          "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"VDR (livingroom) Power"')]),t._v("         "),e("span",{pre:!0,attrs:{class:"token tag"}},[t._v(" (VDR)")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("vdr"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"LivingRoom:powerOff"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("wol"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"192.168.1.2#F4:6D:15:32:F3:F7"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("String")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("VDR_LivingroomOSDMessage")]),t._v("     "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"VDR (livingroom) OSD message"')]),t._v("          "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("vdr"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"LivingRoom:message"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Switch")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("VDR_LivingroomChannelUpDown")]),t._v("  "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"VDR Livingroom Channel Up/Down"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token tag"}},[t._v(" (VDR)")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("vdr"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"LivingRoom:channel"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Number")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("VDR_LivingroomChannel")]),t._v("        "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"VDR Livingroom Channel"')]),t._v("         "),e("span",{pre:!0,attrs:{class:"token tag"}},[t._v(" (VDR)")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("vdr"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"LivingRoom:channel"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Switch")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("VDR_LivingroomVolumeUpDown")]),t._v("   "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"VDR Livingroom Volume Up/Down"')]),t._v("  "),e("span",{pre:!0,attrs:{class:"token tag"}},[t._v(" (VDR)")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("vdr"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"LivingRoom:volume"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Number")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("VDR_LivingroomVolume")]),t._v("         "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"VDR Livingroom Volume"')]),t._v("          "),e("span",{pre:!0,attrs:{class:"token tag"}},[t._v(" (VDR)")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("vdr"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"LivingRoom:volume"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Switch")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("VDR_LivingroomRecording")]),t._v("      "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"VDR (livingroom) Recording"')]),t._v("     "),e("span",{pre:!0,attrs:{class:"token tag"}},[t._v(" (VDR)")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("vdr"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"LivingRoom:recording"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"switch-vdr-pc-on-if-tv-switch-on"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#switch-vdr-pc-on-if-tv-switch-on","aria-hidden":"true"}},[this._v("#")]),this._v(" Switch VDR PC on if TV switch on:")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-dsl"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Switch")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TV_PowerState")]),t._v("                "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"TV Power State"')]),t._v("    "),e("span",{pre:!0,attrs:{class:"token tag"}},[t._v(" (VDR)")]),t._v("   "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("nh"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"192.168.1.2"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Switch")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("VDR_LIVINGROOM_POWER_STATUS")]),t._v("  "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"VDR Power Status"')]),t._v("  "),e("span",{pre:!0,attrs:{class:"token tag"}},[t._v(" (VDR)")]),t._v("   "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("nh"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"192.168.1.3"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" \n")])])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-rules"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("rule")]),t._v(" CheckTVStateOn\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("when")]),t._v("\n\t"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Item")]),t._v(" TV_PowerState "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("changed")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("to")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("ON")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("then")]),t._v("\n\t"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("VDR_LIVINGROOM_POWER_STATUS"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("state"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("OFF")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),e("span",{pre:!0,attrs:{class:"token function-name"}},[t._v("VDR_LivingroomPower")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sendCommand")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("ON")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("end")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"switch-vdr-pc-off-if-tv-switch-off"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#switch-vdr-pc-off-if-tv-switch-off","aria-hidden":"true"}},[this._v("#")]),this._v(" Switch VDR PC off if TV switch off")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-rules"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("rule")]),t._v(" CheckTVStateOff\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("when")]),t._v("\n\t"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Item")]),t._v(" TV_PowerState "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("changed")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("to")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("OFF")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("then")]),t._v("\n\t"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("VDR_LIVINGROOM_POWER_STATUS"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("state"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("ON")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("VDR_LivingroomRecording"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("state"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("OFF")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\t"),e("span",{pre:!0,attrs:{class:"token function-name"}},[t._v("VDR_LivingroomPower")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sendCommand")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("OFF")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("end")]),t._v("\n")])])])}],!1,null,null,null);s.default=n.exports}}]);