(window.webpackJsonp=window.webpackJsonp||[]).push([[249],{831:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),a("p",[t._v("Connects to a Rotel RA11 or RA12 integrated amplifier via a serial (RS232) interface.\nThe Rotel amplifiers supported by this binding also include an integrated DAC unit.\nTo use the binding, connect a serial cable between the amplifier and the computer running openHAB.")]),t._v(" "),t._m(1),t._v(" "),a("p",[t._v("This binding implements the serial protocol specified by Rotel in their documentation.\nThe protocol allows one to control the amplifier, to query its state, and to receive live updates of changed values.\nFor example, when turning the volume knob, the unit sends updates as different volumes are set.")]),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),a("p",[t._v("Auto-discovery is not supported; things can be added manually.")]),t._v(" "),t._m(5),t._v(" "),a("p",[t._v("The thing has the following configuration parameter:")]),t._v(" "),a("p",[t._v("| Parameter      | Parameter name |  Description                                                                                      |\n|----------------|--------------------------------------------------------------------------------------------------------------------|\n| Serial port    | port           | Specifies the name of the serial port used to communicate with the device. (String)               |\n| Maximum volume | maximum-volume | This is the value to send to the amplifier when the volume channel is set to 100 % (1). (Integer) |")]),t._v(" "),a("p",[t._v("(1) The RA11's max. volume is 96, but it is still supported to use 100 as the maximum volume, only the volume will not increase when going beyond 96 %.")]),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),a("p",[t._v("All channels are updated in real time if modified by other means, e.g. by the remote control.")]),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),a("p",[t._v("demo.things")]),t._v(" "),t._m(10),a("p",[t._v("demo.items")]),t._v(" "),t._m(11),a("p",[t._v("demo.sitemap:")]),t._v(" "),t._m(12),t._m(13),t._v(" "),a("p",[t._v("Rotel serial protocol is available here: "),a("a",{attrs:{href:"http://www.rotel.com/sites/default/files/product/rs232/RA12%20Protocol.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://www.rotel.com/sites/default/files/product/rs232/RA12 Protocol.pdf"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("DocPreviousVersions"),t._v(" "),a("EditPageLink")],1)},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"rotel-amplifier-binding"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#rotel-amplifier-binding","aria-hidden":"true"}},[this._v("#")]),this._v(" Rotel Amplifier Binding")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"overview"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#overview","aria-hidden":"true"}},[this._v("#")]),this._v(" Overview")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"supported-things"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#supported-things","aria-hidden":"true"}},[this._v("#")]),this._v(" Supported things")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("Rotel Amplifier. Each thing represent an amplifier unit, connected over an RS232 connection.")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"discovery"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#discovery","aria-hidden":"true"}},[this._v("#")]),this._v(" Discovery")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"thing-configuration"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#thing-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Thing configuration")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"channel-summary"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#channel-summary","aria-hidden":"true"}},[this._v("#")]),this._v(" Channel summary")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("table",[a("thead",[a("tr",[a("th",[t._v("Channel ID")]),t._v(" "),a("th",[t._v("Item Type")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("power")]),t._v(" "),a("td",[t._v("Switch")]),t._v(" "),a("td",[t._v("Controls and reports the power state (soft on/off)")])]),t._v(" "),a("tr",[a("td",[t._v("volume")]),t._v(" "),a("td",[t._v("Dimmer")]),t._v(" "),a("td",[t._v("Volume control")])]),t._v(" "),a("tr",[a("td",[t._v("mute")]),t._v(" "),a("td",[t._v("Switch")]),t._v(" "),a("td",[t._v("Enable / disable mute")])]),t._v(" "),a("tr",[a("td",[t._v("source")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v("Selects from a list of input sources (see options)")])]),t._v(" "),a("tr",[a("td",[t._v("frequency")]),t._v(" "),a("td",[t._v("Number")]),t._v(" "),a("td",[t._v("Reports the current sampling frequency if playing from a digital input")])]),t._v(" "),a("tr",[a("td",[t._v("brightness")]),t._v(" "),a("td",[t._v("Dimmer")]),t._v(" "),a("td",[t._v("Sets the backlight level of the display. Maps from percentage to 6 levels (can't be turned off)")])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"configuration-example"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#configuration-example","aria-hidden":"true"}},[this._v("#")]),this._v(" Configuration example")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("The following lines can be added to the configuration files in order to set up an amplifier at serial port "),s("code",[this._v("/dev/ttyS0")]),this._v(".")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-dsl"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("Thing")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("rotelra1x"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("amp"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("living_room_amp")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" port"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"/dev/ttyS0"')]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-dsl"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("Switch")]),t._v("  "),a("span",{attrs:{class:"token class-name"}},[t._v("Amp_Power")]),t._v("      "),a("span",{attrs:{class:"token string"}},[t._v('"On/off"')]),t._v("                       "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" channel"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"rotelra1x:amp:living_room_amp:power"')]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("Dimmer")]),t._v("  "),a("span",{attrs:{class:"token class-name"}},[t._v("Amp_Volume")]),t._v("     "),a("span",{attrs:{class:"token string"}},[t._v('"Volume"')]),t._v("            "),a("span",{attrs:{class:"token function"}},[t._v(" <sound>")]),t._v("   "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" channel"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"rotelra1x:amp:living_room_amp:volume"')]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("Switch")]),t._v("  "),a("span",{attrs:{class:"token class-name"}},[t._v("Amp_Mute")]),t._v("       "),a("span",{attrs:{class:"token string"}},[t._v('"Mute"')]),t._v("              "),a("span",{attrs:{class:"token function"}},[t._v(" <mute>")]),t._v("    "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" channel"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"rotelra1x:amp:living_room_amp:mute"')]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("String")]),t._v("  "),a("span",{attrs:{class:"token class-name"}},[t._v("Amp_Source")]),t._v("     "),a("span",{attrs:{class:"token string"}},[t._v('"Input"')]),t._v("                        "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" channel"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"rotelra1x:amp:living_room_amp:source"')]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("Number")]),t._v("  "),a("span",{attrs:{class:"token class-name"}},[t._v("Amp_Frequency")]),t._v("  "),a("span",{attrs:{class:"token string"}},[t._v('"Frequency"')]),t._v("                    "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" channel"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"rotelra1x:amp:living_room_amp:frequency"')]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("Dimmer")]),t._v("  "),a("span",{attrs:{class:"token class-name"}},[t._v("Amp_Brightness")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"Display brightness"')]),a("span",{attrs:{class:"token function"}},[t._v(" <light>")]),t._v("   "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" channel"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"rotelra1x:amp:living_room_amp:brightness"')]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-dsl"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("sitemap")]),t._v(" demo "),a("span",{attrs:{class:"token constant"}},[t._v("label")]),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"Main Menu"')]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("Frame")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("label")]),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"LG TV"')]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("Switch")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("item")]),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("Amp_Power\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("Switch")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("item")]),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("Amp_Mute\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("Slider")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("item")]),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("Amp_Volume\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("Switch")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("item")]),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("Amp_Source "),a("span",{attrs:{class:"token constant"}},[t._v("mappings")]),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token string"}},[t._v('"cd"')]),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"CD"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"coax1"')]),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"Coax 1"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"coax2"')]),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"Coax 2"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"opt1"')]),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"Opt 1"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"opt2"')]),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"Opt 2"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"tuner"')]),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"Tuner"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"phono"')]),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"Phono"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"usb"')]),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"USB"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"aux1"')]),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"Aux 1"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"aux2"')]),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token string"}},[t._v('"Aux 2"')]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("Text")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("item")]),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("Amp_Frequency\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("Slider")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("item")]),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("Amp_Brightness\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"references"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#references","aria-hidden":"true"}},[this._v("#")]),this._v(" References")])}],!1,null,null,null);e.options.__file="readme.md";s.default=e.exports}}]);