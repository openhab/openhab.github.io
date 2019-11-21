(window.webpackJsonp=window.webpackJsonp||[]).push([[216],{894:function(t,e,s){"use strict";s.r(e);var a=s(1),n=Object(a.a)({},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),s("p",[t._v("This binding gets Norwegian public transport real-time (estimated) data from the "),s("a",{attrs:{href:"https://developer.entur.org/pages-intro-overview",target:"_blank",rel:"noopener noreferrer"}},[t._v("Entur.org API"),s("OutboundLink")],1),t._v(".")]),t._v(" "),t._m(1),t._v(" "),s("p",[t._v("As for now, binding supports only one thing "),s("code",[t._v("linestop")]),t._v(".\nIt can change in the future as "),s("a",{attrs:{href:"http://entur.no",target:"_blank",rel:"noopener noreferrer"}},[t._v("entur.no"),s("OutboundLink")],1),t._v(" exposes API for access of different type public transport data, for example: journey planing, stop information etc.")]),t._v(" "),t._m(2),t._v(" "),s("p",[t._v("Entur timetable provides information about departures for chosen line/service of public transport in Norway and chosen stop place.\nIt contains informationabout stop place (id, name, transport mode) and real-time departures from that place.\n"),s("strong",[t._v("It is worth noting that binding is thought to be primarily used for busdepartures (can work for other supported by "),s("a",{attrs:{href:"https://developer.entur.org/pages-intro-overview",target:"_blank",rel:"noopener noreferrer"}},[t._v("entur.org"),s("OutboundLink")],1),t._v(" transport types).\nTwo Direction channel groups are consequence of that assumption.\nThat will say that usually for stop place of a given name there are two bus stops for same line going in opposite directions.")]),t._v("\nEach "),s("strong",[t._v("Direction")]),t._v(" channel group contains information about direction,line code, 5 coming departures, and whether given departure time is real-time (estimated) or not.")]),t._v(" "),t._m(3),t._v(" "),s("p",[t._v("Since thing needs to be explicitly configured for stop id and line, no auto discovery is available.")]),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),s("table",[t._m(6),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("stopPlaceId (Stop code)")]),t._v(" "),s("td",[t._v("Unique id of stop place that can be get from "),s("a",{attrs:{href:"https://en-tur.no",target:"_blank",rel:"noopener noreferrer"}},[t._v("en-tur.no"),s("OutboundLink")],1),t._v(" after selecting bus stop. Information will be displayed in link. Example: "),s("a",{attrs:{href:"https://en-tur.no/nearby-stop-place-detail?id=NSR:StopPlace:30848",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://en-tur.no/nearby-stop-place-detail?id=NSR:StopPlace:30848"),s("OutboundLink")],1),t._v(" stopPlaceId is "),s("strong",[t._v("NSR:StopPlace:30848")]),t._v(" in this case")])]),t._v(" "),t._m(7)])]),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),t._m(12),t._v(" "),t._m(13),t._v(" "),t._m(14),t._v(" "),s("p",[t._v("demo.things")]),t._v(" "),t._m(15),t._m(16),t._v(" "),s("p",[t._v("demo.items")]),t._v(" "),t._m(17),s("DocPreviousVersions"),t._v(" "),s("EditPageLink")],1)},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"enturno-binding"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#enturno-binding","aria-hidden":"true"}},[this._v("#")]),this._v(" EnturNo Binding")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"supported-things"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#supported-things","aria-hidden":"true"}},[this._v("#")]),this._v(" Supported Things")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"entur-timetable"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#entur-timetable","aria-hidden":"true"}},[this._v("#")]),this._v(" Entur Timetable")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"discovery"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#discovery","aria-hidden":"true"}},[this._v("#")]),this._v(" Discovery")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"thing-configuration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#thing-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Thing Configuration")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"entur-timetable-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#entur-timetable-2","aria-hidden":"true"}},[this._v("#")]),this._v(" Entur Timetable")])},function(){var t=this.$createElement,e=this._self._c||t;return e("thead",[e("tr",[e("th",[this._v("Parameter")]),this._v(" "),e("th",[this._v("Description")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",[this._v("lineCode (Line code)")]),this._v(" "),e("td",[this._v("Code (name or numeber) of line used by public transport provider. Examples: 3, 3E, 4, 21")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"channels"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#channels","aria-hidden":"true"}},[this._v("#")]),this._v(" Channels")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"stop-place"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#stop-place","aria-hidden":"true"}},[this._v("#")]),this._v(" Stop Place")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("table",[s("thead",[s("tr",[s("th",[t._v("Channel Group ID")]),t._v(" "),s("th",[t._v("Channel ID")]),t._v(" "),s("th",[t._v("Item Type")]),t._v(" "),s("th",[t._v("Description")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("stopPlace")]),t._v(" "),s("td",[t._v("id")]),t._v(" "),s("td",[t._v("String")]),t._v(" "),s("td",[t._v("Id of the stop place.")])]),t._v(" "),s("tr",[s("td",[t._v("stopPlace")]),t._v(" "),s("td",[t._v("name")]),t._v(" "),s("td",[t._v("String")]),t._v(" "),s("td",[t._v("Name of the stop place.")])]),t._v(" "),s("tr",[s("td",[t._v("stopPlace")]),t._v(" "),s("td",[t._v("transportMode")]),t._v(" "),s("td",[t._v("String")]),t._v(" "),s("td",[t._v("Type of transport served from bus stop bus/train/plane etc.")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"line-direction"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#line-direction","aria-hidden":"true"}},[this._v("#")]),this._v(" Line Direction")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("table",[s("thead",[s("tr",[s("th",[t._v("Channel Group ID")]),t._v(" "),s("th",[t._v("Channel ID")]),t._v(" "),s("th",[t._v("Item Type")]),t._v(" "),s("th",[t._v("Description")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("direction")]),t._v(" "),s("td",[t._v("lineCode")]),t._v(" "),s("td",[t._v("String")]),t._v(" "),s("td",[t._v("Code (usually number) of the public transport line.")])]),t._v(" "),s("tr",[s("td",[t._v("direction")]),t._v(" "),s("td",[t._v("frontDisplayText")]),t._v(" "),s("td",[t._v("String")]),t._v(" "),s("td",[t._v("Text of front display of the public transport line (usually direction)")])]),t._v(" "),s("tr",[s("td",[t._v("direction")]),t._v(" "),s("td",[t._v("departure01, departure02, departure03, departure04, departure05")]),t._v(" "),s("td",[t._v("DateTime")]),t._v(" "),s("td",[t._v("Times of next five departures.")])]),t._v(" "),s("tr",[s("td",[t._v("direction")]),t._v(" "),s("td",[t._v("estimatedFlag01, estimatedFlag02, estimatedFlag03, estimatedFlag04, estimatedFlag05")]),t._v(" "),s("td",[t._v("String")]),t._v(" "),s("td",[t._v("Values (true/false) saying that corresponding departure is real-time (estimated - true) or departure from timetable. Values (true/false) can be parsed to boolean.")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"full-example"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#full-example","aria-hidden":"true"}},[this._v("#")]),this._v(" Full Example")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"things"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#things","aria-hidden":"true"}},[this._v("#")]),this._v(" Things")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-dsl"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Thing")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("enturno"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("linestop"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("1")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Småstrandgaten line nr 2"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("stopPlaceId"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"NSR:StopPlace:30848"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" lineCode"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"items"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#items","aria-hidden":"true"}},[this._v("#")]),this._v(" Items")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Stop place")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v("      "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("StopId")]),t._v("                          "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"StopId"')]),t._v("                        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("channel"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"enturno:linestop:1:stopPlace#id"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("               \n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v("      "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("StopPlaceName")]),t._v("                   "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Stop Place [%s]"')]),t._v("               "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("channel"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"enturno:linestop:1:stopPlace#name"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v("      "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("LineCode")]),t._v("                        "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Line [%s]"')]),t._v("                     "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("channel"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"enturno:linestop:1:Direction01#lineCode"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" \n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v("      "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TransportMode")]),t._v("                   "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"TransportMode [%s]"')]),t._v("            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("channel"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"enturno:linestop:1:stopPlace#transportMode"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" \n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Direction01")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v("      "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Direction01_FrontDisplay")]),t._v("        "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Direction01 front display [%s]"')]),t._v("    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("channel"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"enturno:linestop:1:Direction01#frontDisplayText"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" \n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DateTime")]),t._v("    "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("RealTime_Departure01_Time1")]),t._v("      "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Departure01 time"')]),t._v("                  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("channel"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"enturno:linestop:1:Direction01#departure01"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("     \n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DateTime")]),t._v("    "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("RealTime_Departure02_Time2")]),t._v("      "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Departure02 time"')]),t._v("                  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("channel"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"enturno:linestop:1:Direction01#departure02"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("     \n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DateTime")]),t._v("    "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("RealTime_Departure03_Time3")]),t._v("      "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Departure03 time"')]),t._v("                  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("channel"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"enturno:linestop:1:Direction01#departure03"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("     \n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DateTime")]),t._v("    "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("RealTime_Departure04_Time4")]),t._v("      "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Departure04 time"')]),t._v("                  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("channel"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"enturno:linestop:1:Direction01#departure04"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("     \n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DateTime")]),t._v("    "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("RealTime_Departure05_Time5")]),t._v("      "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Departure05 time"')]),t._v("                  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("channel"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"enturno:linestop:1:Direction01#departure05"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("     \n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v("      "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("RealTime_Departure01_IsReal1")]),t._v("    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Departure01 is real-time"')]),t._v("          "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("channel"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"enturno:linestop:1:Direction01#estimatedFlag01"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" \n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v("      "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("RealTime_Departure02_IsReal2")]),t._v("    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Departure02 is real-time"')]),t._v("          "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("channel"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"enturno:linestop:1:Direction01#estimatedFlag02"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" \n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v("      "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("RealTime_Departure03_IsReal3")]),t._v("    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Departure03 is real-time"')]),t._v("          "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("channel"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"enturno:linestop:1:Direction01#estimatedFlag03"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" \n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v("      "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("RealTime_Departure04_IsReal4")]),t._v("    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Departure04 is real-time"')]),t._v("          "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("channel"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"enturno:linestop:1:Direction01#estimatedFlag04"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" \n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v("      "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("RealTime_Departure05_IsReal5")]),t._v("    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Departure05 is real-time"')]),t._v("          "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("channel"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"enturno:linestop:1:Direction01#estimatedFlag05"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" \n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//Direction02")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v("      "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Direction02_FrontDisplay")]),t._v("        "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Direction02 front display [%s]"')]),t._v("    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("channel"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"enturno:linestop:1:Direction02#frontDisplayText"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DateTime")]),t._v("    "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("RealTime_Departure01_Time1")]),t._v("      "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Departure01 time"')]),t._v("                  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("channel"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"enturno:linestop:1:Direction02#departure01"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("    \n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DateTime")]),t._v("    "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("RealTime_Departure02_Time2")]),t._v("      "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Departure02 time"')]),t._v("                  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("channel"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"enturno:linestop:1:Direction02#departure02"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("    \n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DateTime")]),t._v("    "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("RealTime_Departure03_Time3")]),t._v("      "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Departure03 time"')]),t._v("                  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("channel"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"enturno:linestop:1:Direction02#departure03"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("    \n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DateTime")]),t._v("    "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("RealTime_Departure04_Time4")]),t._v("      "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Departure04 time"')]),t._v("                  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("channel"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"enturno:linestop:1:Direction02#departure04"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("    \n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DateTime")]),t._v("    "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("RealTime_Departure05_Time5")]),t._v("      "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Departure05 time"')]),t._v("                  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("channel"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"enturno:linestop:1:Direction02#departure05"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("    \n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v("      "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("RealTime_Departure01_IsReal1")]),t._v("    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Departure01 is real-time"')]),t._v("          "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("channel"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"enturno:linestop:1:Direction02#estimatedFlag01"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v("      "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("RealTime_Departure02_IsReal2")]),t._v("    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Departure02 is real-time"')]),t._v("          "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("channel"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"enturno:linestop:1:Direction02#estimatedFlag02"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v("      "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("RealTime_Departure03_IsReal3")]),t._v("    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Departure03 is real-time"')]),t._v("          "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("channel"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"enturno:linestop:1:Direction02#estimatedFlag03"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v("      "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("RealTime_Departure04_IsReal4")]),t._v("    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Departure04 is real-time"')]),t._v("          "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("channel"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"enturno:linestop:1:Direction02#estimatedFlag04"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v("      "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("RealTime_Departure05_IsReal5")]),t._v("    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Departure05 is real-time"')]),t._v("          "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("channel"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"enturno:linestop:1:Direction02#estimatedFlag05"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])}],!1,null,null,null);e.default=n.exports}}]);