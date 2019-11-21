(window.webpackJsonp=window.webpackJsonp||[]).push([[229],{914:function(t,s,a){"use strict";a.r(s);var e=a(1),n=Object(e.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"freebox-binding"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#freebox-binding","aria-hidden":"true"}},[t._v("#")]),t._v(" Freebox Binding "),a("Badge",{attrs:{type:"warn",text:"v1"}})],1),t._v(" "),a("div",{staticClass:"danger custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("OBSOLETE BINDING")]),t._v(" "),a("p",[t._v("This 1.x binding is obsolete; it has been replaced by the 2.x "),a("router-link",{attrs:{to:"./../freebox/"}},[t._v("freebox")]),t._v(" binding which you should use instead.")],1)]),t._v(" "),a("AddonLogo"),t._v(" "),a("p",[t._v("This binding is intended for users of the French DSL operator Free, using Freebox Revolution (v6).")]),t._v(" "),a("p",[t._v("Currently, it's able to report:")]),t._v(" "),t._m(0),t._v(" "),a("p",[t._v("And act on:")]),t._v(" "),t._m(1),t._v(" "),a("p",[t._v("There is also a binding specifically for openHAB 2 "),a("a",{attrs:{href:"https://www.openhab.org/addons/bindings/freebox/",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),a("OutboundLink")],1),t._v(".")]),t._v(" "),t._m(2),t._v(" "),a("table",[t._m(3),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("server")]),t._v(" "),a("td",[a("a",{attrs:{href:"http://mafreebox.freebox.fr",target:"_blank",rel:"noopener noreferrer"}},[t._v("mafreebox.freebox.fr"),a("OutboundLink")],1)]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",[t._v("Freebox server IP address")])]),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6)])]),t._v(" "),a("p",[t._v("You'll have to authorise openHAB to connect to your Freebox. Here is the process described :")]),t._v(" "),t._m(7),t._v(" "),t._m(8),a("p",[t._v("(password is habopen by default)")]),t._v(" "),a("p",[t._v("You should see something in your log that looks like:")]),t._v(" "),t._m(9),a("p",[t._v("Now run near your Freebox and approve the pairing request for openHAB Freebox Binding that is displayed on the Freebox screen.")]),t._v(" "),t._m(10),t._v(" "),t._m(11),a("p",[t._v("(specifically, the token printed to the log)")]),t._v(" "),a("p",[t._v("Restart openHAB.  The authentification of the freebox shall go on automatically.")]),t._v(" "),a("p",[t._v("Optionally, you can log in your freebox admin console to allocate needed rights to openHAB.")]),t._v(" "),t._m(12),t._v(" "),a("p",[t._v("Here are the list of items you can put in your .items file in order to use binding functionalities :")]),t._v(" "),t._m(13),a("p",[t._v("The following items are available for read/write actions:")]),t._v(" "),t._m(14),t._v(" "),a("DocPreviousVersions"),t._v(" "),a("EditPageLink")],1)},[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ul",[a("li",[t._v("System informations (Version number, uptime, different cpu temperature, fan speed)")]),t._v(" "),a("li",[t._v("Connection Status informations (line status, public ip address, upload/download rate, up/downloaded volumes)")]),t._v(" "),a("li",[t._v("Last phone call (number, duration, status)")]),t._v(" "),a("li",[t._v("Last accepted phone call (from v1.7)")]),t._v(" "),a("li",[t._v("Last missed phone call (from v1.7)")]),t._v(" "),a("li",[t._v("Last outgoing phone call (from v1.7)")]),t._v(" "),a("li",[t._v("Caller name when contact entry is defined and number is not masked (from v1.7)")]),t._v(" "),a("li",[t._v("network devices reachable status (from v1.7)")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ul",[a("li",[t._v("wifi network status")]),t._v(" "),a("li",[t._v("FTP server status (from v1.7)")]),t._v(" "),a("li",[t._v("UPnP AV status (from v1.7)")]),t._v(" "),a("li",[t._v("AirMedia status (from v1.7)")]),t._v(" "),a("li",[t._v("Windows file sharing status (from v1.7)")]),t._v(" "),a("li",[t._v("Windows printer sharing status (from v1.7)")]),t._v(" "),a("li",[t._v("Reboot")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"binding-configuration"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#binding-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Binding Configuration")])},function(){var t=this.$createElement,s=this._self._c||t;return s("thead",[s("tr",[s("th",[this._v("Property")]),this._v(" "),s("th",[this._v("Default")]),this._v(" "),s("th",{staticStyle:{"text-align":"center"}},[this._v("Required")]),this._v(" "),s("th",[this._v("Description")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("tr",[s("td",[this._v("apptoken")]),this._v(" "),s("td"),this._v(" "),s("td",{staticStyle:{"text-align":"center"}},[this._v("Empty at first launch; fill it with the provided token")]),this._v(" "),s("td",[this._v("Application token generated by the Freebox server")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("tr",[s("td",[this._v("device")]),this._v(" "),s("td"),this._v(" "),s("td",{staticStyle:{"text-align":"center"}}),this._v(" "),s("td",[this._v("Device name, for example "),s("code",[this._v("openhabsrv")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("tr",[s("td",[this._v("refresh")]),this._v(" "),s("td",[this._v("60000")]),this._v(" "),s("td",{staticStyle:{"text-align":"center"}},[this._v("No")]),this._v(" "),s("td",[this._v("refresh interval in milliseconds")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Enter the openHAB console or view the end of your "),s("code",[this._v("openhab.log")]),this._v(" file."),s("br"),this._v("\nDepending on how you started openHAB and its version, this might be achieved by entering:")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-rules"}},[a("code",[t._v("tail "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("log"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("openhab2"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("openhab"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("log\nssh openhab@localhost "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("p "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8101")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v('####################################################################\n# Please accept activation request directly on your freebox        # <Badge type="warn" text="v1"/>\n# Once done, record current Apptoken in your \'openhab.cfg\'         # <Badge type="warn" text="v1"/>\n# bEK7a7O8GkxxxxxxxxxxXBsKu/xxxttttwj5bXSssd5gUvSXs4vrpuhZwelEo804 # <Badge type="warn" text="v1"/>\n####################################################################\n')])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Now update your "),s("code",[this._v("services/freebox.cfg")]),this._v(" file to set:")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("apptoken=bEK7a7O8GkxxxxxxxxxxXBsKu/xxxttttwj5bXSssd5gUvSXs4vrpuhZwelEo804\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"item-configuration"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#item-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Item Configuration")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-dsl"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Group")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("gFreebox")]),t._v("                      \n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Group")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("gfbSys")]),t._v("                "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"System"')]),t._v("                    "),a("span",{pre:!0,attrs:{class:"token tag"}},[t._v(" (gFreebox)")]),t._v("              \n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Group")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("gfbCS")]),t._v("                 "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Connection Status"')]),t._v("         "),a("span",{pre:!0,attrs:{class:"token tag"}},[t._v(" (gFreebox)")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Group")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("gfbCalls")]),t._v("              "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Calls"')]),t._v("                     "),a("span",{pre:!0,attrs:{class:"token tag"}},[t._v(" (gFreebox)")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Group")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("gfbWifi")]),t._v("               "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Wifi"')]),t._v("                      "),a("span",{pre:!0,attrs:{class:"token tag"}},[t._v(" (gFreebox)")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Group")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("gfbLCD")]),t._v("                "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"LCD"')]),t._v("                       "),a("span",{pre:!0,attrs:{class:"token tag"}},[t._v(" (gFreebox)")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Group")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("gfbXdsl")]),t._v("               "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"xDsl Status"')]),t._v("               "),a("span",{pre:!0,attrs:{class:"token tag"}},[t._v(" (gFreebox)")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Wifi Entries")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Switch")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("freebox_wifi")]),t._v("         "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Wifi"')]),t._v("                      "),a("span",{pre:!0,attrs:{class:"token tag"}},[t._v(" (gfbWifi)")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("freebox"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"wifi_status"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" autoupdate"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"false"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// (from v1.7) FTP server, UPnP AV, AirMedia and Windows sharings status")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Switch")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("FreeboxFTP")]),t._v("           "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"FTP"')]),t._v("                       "),a("span",{pre:!0,attrs:{class:"token tag"}},[t._v(" (gFreebox)")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("freebox"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ftp_status"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" autoupdate"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"false"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Switch")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("FreeboxUPnPAV")]),t._v("        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"UPnP AV"')]),t._v("                   "),a("span",{pre:!0,attrs:{class:"token tag"}},[t._v(" (gFreebox)")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("freebox"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"upnpav_status"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" autoupdate"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"false"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Switch")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("FreeboxAirMedia")]),t._v("      "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"AirMedia"')]),t._v("                  "),a("span",{pre:!0,attrs:{class:"token tag"}},[t._v(" (gFreebox)")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("freebox"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"airmedia_status"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" autoupdate"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"false"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Switch")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("FreeboxSambaFiles")]),t._v("    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Partage fichiers Win"')]),t._v("      "),a("span",{pre:!0,attrs:{class:"token tag"}},[t._v(" (gFreebox)")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("freebox"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"sambafileshare_status"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" autoupdate"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"false"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Switch")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("FreeboxSambaPrinters")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Partage imprimantes Win"')]),t._v("   "),a("span",{pre:!0,attrs:{class:"token tag"}},[t._v(" (gFreebox)")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("freebox"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"sambaprintershare_status"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" autoupdate"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"false"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Call Entries")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("String")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("freebox_call_lastnum")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Last call [%s]"')]),t._v("            "),a("span",{pre:!0,attrs:{class:"token tag"}},[t._v(" (gfbCalls)")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("freebox"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"call_number"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Number")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("freebox_call_duration")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Duration [%d sec]"')]),t._v("        "),a("span",{pre:!0,attrs:{class:"token tag"}},[t._v(" (gfbCalls)")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("freebox"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"call_duration"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DateTime")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("freebox_call_ts")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"TimeStamp [%1$tA, %1$td.%1$tm.%1$tY]"')]),a("span",{pre:!0,attrs:{class:"token tag"}},[t._v(" (gfbCalls)")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("freebox"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"call_timestamp"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("String")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("freebox_call_status")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Status [%s]"')]),t._v("                "),a("span",{pre:!0,attrs:{class:"token tag"}},[t._v(" (gfbCalls)")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("freebox"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"call_status"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Connection Status Items")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("String")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("freebox_cs_state")]),t._v("       "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"State [%s]"')]),t._v("              "),a("span",{pre:!0,attrs:{class:"token tag"}},[t._v(" (gfbCS)")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("freebox"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"line_status"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("String")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("freebox_cs_ipv4")]),t._v("        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ipV4 [%s]"')]),t._v("               "),a("span",{pre:!0,attrs:{class:"token tag"}},[t._v(" (gfbCS)")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("freebox"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ipv4"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Number")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("freebox_cs_rate_up")]),t._v("     "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Upload rate [%d b/s]"')]),t._v("    "),a("span",{pre:!0,attrs:{class:"token tag"}},[t._v(" (gfbCS)")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("freebox"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"rate_up"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Number")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("freebox_cs_rate_down")]),t._v("   "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Download rate [%d b/s]"')]),t._v("  "),a("span",{pre:!0,attrs:{class:"token tag"}},[t._v(" (gfbCS)")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("freebox"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"rate_down"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Number")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("freebox_cs_bytes_up")]),t._v("    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Uploaded [%d bytes]"')]),t._v("     "),a("span",{pre:!0,attrs:{class:"token tag"}},[t._v(" (gfbCS)")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("freebox"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"bytes_up"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Number")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("freebox_cs_bytes_down")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Downloaded [%d bytes]"')]),t._v("   "),a("span",{pre:!0,attrs:{class:"token tag"}},[t._v(" (gfbCS)")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("freebox"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"bytes_down"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// System Items")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("String")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("freebox_sys_firmware_version")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Version [%s]"')]),t._v("      "),a("span",{pre:!0,attrs:{class:"token tag"}},[t._v(" (gfbSys)")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("freebox"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"fw_version"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Switch")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("freebox_reboot")]),t._v("               "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Reboot freebox"')]),t._v("    "),a("span",{pre:!0,attrs:{class:"token tag"}},[t._v(" (gfbSys)")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("freebox"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"reboot"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Number")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("freebox_sys_uptime")]),t._v("           "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Uptime [%d sec]"')]),t._v("   "),a("span",{pre:!0,attrs:{class:"token tag"}},[t._v(" (gfbSys)")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("freebox"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"uptime"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Number")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("freebox_sys_temp_cpum")]),t._v("        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Temp cpum [%d °C]"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v(" <temperature>")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token tag"}},[t._v(" (gfbSys)")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("freebox"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"temp_cpum"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Number")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("freebox_sys_temp_cpub")]),t._v("        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Temp cpub [%d °C]"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v(" <temperature>")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token tag"}},[t._v(" (gfbSys)")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("freebox"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"temp_cpub"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Number")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("freebox_sys_temp_sw")]),t._v("          "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Temp sw [%d °C]"')]),t._v("   "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v(" <temperature>")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token tag"}},[t._v(" (gfbSys)")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("freebox"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"temp_sw"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Number")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("freebox_sys_fan_rpm")]),t._v("          "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Fan [%d rpm]"')]),t._v("      "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v(" <fan>")]),t._v("          "),a("span",{pre:!0,attrs:{class:"token tag"}},[t._v(" (gfbSys)")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("freebox"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"fan"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// LCD Configuration Items")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Number")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("freebox_lcd_brightness")]),t._v("       "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Brightness [%d %%]"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token tag"}},[t._v(" (gfbLCD)")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("freebox"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"lcd_brightness"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Number")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("freebox_lcd_orientation")]),t._v("      "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Orientation [%d °]"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token tag"}},[t._v(" (gfbLCD)")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("freebox"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"lcd_orientation"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Switch")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("freebox_lcd_forced")]),t._v("           "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"LCD Forced"')]),t._v("         "),a("span",{pre:!0,attrs:{class:"token tag"}},[t._v(" (gfbLCD)")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("freebox"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"lcd_forced"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// xDSL Status Items")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("String")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("freebox_xdsl_status")]),t._v("      "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Status [%s]"')]),t._v("            "),a("span",{pre:!0,attrs:{class:"token tag"}},[t._v(" (gfbXdsl)")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("freebox"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"xdsl_status"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// (from v1.7) Network devices reachable status")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Switch")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("NetDevice1")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Net device (MAC)"')]),t._v("  "),a("span",{pre:!0,attrs:{class:"token tag"}},[t._v(" (gFreebox)")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("freebox"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"reachable_mac/00:1B:D2:D5:97:01"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" autoupdate"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"false"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Switch")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("NetDevice2")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Net device (IP)"')]),t._v("   "),a("span",{pre:!0,attrs:{class:"token tag"}},[t._v(" (gFreebox)")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("freebox"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"reachable_ip/192.168.0.50"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" autoupdate"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"false"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Switch")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("NetDevice3")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Net device (name)"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token tag"}},[t._v(" (gFreebox)")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("freebox"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"reachable_name/Téléviseur"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" autoupdate"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"false"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ul",[a("li",[t._v("switch on/off wifi")]),t._v(" "),a("li",[t._v("switch on/off FTP server (from v1.7)")]),t._v(" "),a("li",[t._v("switch on/off UPnP AV (from v1.7)")]),t._v(" "),a("li",[t._v("switch on/off AirMedia (from v1.7)")]),t._v(" "),a("li",[t._v("switch on/off Windows file sharing (from v1.7)")]),t._v(" "),a("li",[t._v("switch on/off Windows printer sharing (from v1.7)")]),t._v(" "),a("li",[t._v("switch to reboot the freebox")]),t._v(" "),a("li",[t._v("switch to force lcd orientation")]),t._v(" "),a("li",[t._v("lcd orientation to use (0,90,180,270).")]),t._v(" "),a("li",[t._v("lcd brightness (0 to 100)")])])}],!1,null,null,null);s.default=n.exports}}]);