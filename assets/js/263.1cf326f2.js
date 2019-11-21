(window.webpackJsonp=window.webpackJsonp||[]).push([[263],{968:function(t,e,s){"use strict";s.r(e);var a=s(1),r=Object(a.a)({},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[s("h1",{attrs:{id:"iec-62056-21-meter-binding"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#iec-62056-21-meter-binding","aria-hidden":"true"}},[t._v("#")]),t._v(" IEC 62056-21 Meter Binding "),s("Badge",{attrs:{type:"warn",text:"v1"}})],1),t._v(" "),s("p",[t._v("This binding is used to communicate to metering devices supporting serial communication according IEC 62056-21 mode C master. It can be used to read metering data from slaves such as gas, water, heat, or electricity meters.")]),t._v(" "),s("p",[t._v("For further information read Wiki page of "),s("a",{attrs:{href:"http://en.wikipedia.org/wiki/IEC_62056#IEC_62056-21",target:"_blank",rel:"noopener noreferrer"}},[t._v("IEC 62056-21"),s("OutboundLink")],1),t._v(".")]),t._v(" "),s("p",[t._v("Information received from the meter device are structured according IEC 62056-6-1:2013, Object identification system (OBIS). For further information read Wiki page of "),s("a",{attrs:{href:"http://de.wikipedia.org/wiki/OBIS-Kennzahlen",target:"_blank",rel:"noopener noreferrer"}},[t._v('OBIS ("Object Identification System")'),s("OutboundLink")],1),t._v(".")]),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),s("p",[t._v("The syntax of an item configuration is shown in the following line in general:")]),t._v(" "),t._m(5),t._m(6),t._v(" "),s("p",[t._v("If you do not know the available OBIS on your meter device, you can probably find them on the local HMI of you meter device. Please review you manual of the meter device or read the instruction of your utility.")]),t._v(" "),s("p",[t._v("You can also start openHAB in debug mode, the binding will then dump all available OBIS it receives from the meter device in the osgi console.")]),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),s("p",[t._v("Below is an example representing the current energy counter tarif values as numeric items.")]),t._v(" "),t._m(9),t._m(10),t._v(" "),s("p",[t._v("In order to calculate the daily accumulated energy consumption, below item and script will allow you to present a chart in your sitemap.")]),t._v(" "),s("p",[t._v("First create the necessary items:")]),t._v(" "),t._m(11),s("p",[t._v("Add the following to your rules:")]),t._v(" "),t._m(12),s("p",[t._v("Next, add below Frame to your sitemap:")]),t._v(" "),t._m(13),t._m(14),t._v(" "),s("p",[t._v("The binding has been successfully tested with below hardware configuration:")]),t._v(" "),s("ul",[s("li",[t._v("Landis & Gyr meter "),s("a",{attrs:{href:"http://www.landisgyr.ch/product/landisgyr-zmd120ar/",target:"_blank",rel:"noopener noreferrer"}},[t._v("ZMD120AR"),s("OutboundLink")],1),t._v("  connected with "),s("a",{attrs:{href:"http://wiki.volkszaehler.org/hardware/controllers/ir-schreib-lesekopf",target:"_blank",rel:"noopener noreferrer"}},[t._v("IR-Reader RS232"),s("OutboundLink")],1),t._v(" from open hardware project in "),s("a",{attrs:{href:"http://volkszaehler.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("volkszaehler"),s("OutboundLink")],1)]),t._v(" "),s("li",[t._v("Landis & Gyr meter "),s("a",{attrs:{href:"http://www.landisgyr.ch/product/landisgyr-e350-electricity-meter-new-generation/",target:"_blank",rel:"noopener noreferrer"}},[t._v("E350"),s("OutboundLink")],1),t._v("  connected with "),s("a",{attrs:{href:"http://wiki.volkszaehler.org/hardware/controllers/ir-schreib-lesekopf",target:"_blank",rel:"noopener noreferrer"}},[t._v("IR-Reader RS232"),s("OutboundLink")],1),t._v(" from open hardware project in "),s("a",{attrs:{href:"http://volkszaehler.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("volkszaehler"),s("OutboundLink")],1)]),t._v(" "),s("li",[t._v("Landis & Gyr meter connected the "),s("a",{attrs:{href:"http://wiki.volkszaehler.org/hardware/controllers/ir-schreib-lesekopf-usb-ausgang",target:"_blank",rel:"noopener noreferrer"}},[t._v("IR-Reader USB"),s("OutboundLink")],1),t._v(" from open hardware project in "),s("a",{attrs:{href:"http://volkszaehler.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("volkszaehler"),s("OutboundLink")],1)])]),t._v(" "),s("DocPreviousVersions"),t._v(" "),s("EditPageLink")],1)},[function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"binding-configuration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#binding-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Binding Configuration")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("This binding can be configured in the file "),e("code",[this._v("services/iec6205621meter.cfg")]),this._v(".  The configuration allows the definition of multiple meter devices.")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("table",[s("thead",[s("tr",[s("th",[t._v("Property")]),t._v(" "),s("th",[t._v("Default")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("Required")]),t._v(" "),s("th",[t._v("Description")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("code",[t._v("<meter-id1>")]),t._v(".serialPort")]),t._v(" "),s("td"),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),s("td",[t._v("the serial port to use for connecting to the metering device e.g. COM1 for Windows and /dev/ttyS0 or /dev/ttyUSB0 for Linux")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("<meter-id1>")]),t._v(".baudRateChangeDelay")]),t._v(" "),s("td",[t._v("0")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("No")]),t._v(" "),s("td",[t._v("Delay of baud rate change in ms. Default is 0. USB to serial converters often require a delay of up to 250ms")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("<meter-id1>")]),t._v(".echoHandling")]),t._v(" "),s("td",[t._v("true")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("No")]),t._v(" "),s("td",[t._v("Enable handling of echos caused by some optical tranceivers")])]),t._v(" "),s("tr",[s("td",[t._v("refresh")]),t._v(" "),s("td",[t._v("600")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("No")]),t._v(" "),s("td",[t._v("Perform a module status query every "),s("code",[t._v("refresh")]),t._v(" seconds")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("NOTE: the "),e("code",[this._v("<meter-id1>")]),this._v(" will be used in both the binding item configs and the action calls to defined which of your meter devices is connected to the item.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"item-configuration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#item-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Item Configuration")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v('iec6205621meter="<meter-id>;<OBIS>"\n')])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Where "),e("code",[this._v("<meter-id>")]),this._v(" matches one of the IDs defined in your "),e("code",[this._v("services/iec6205621meter.cfg")]),this._v(" file.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"examples"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#examples","aria-hidden":"true"}},[this._v("#")]),this._v(" Examples")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"items"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#items","aria-hidden":"true"}},[this._v("#")]),this._v(" Items")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-dsl"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* IEC 62056-21 Meter data */")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Number")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Tarif_Period")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Chart Period"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Number")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Tarif1")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"High price tarif [%d kwh]"')]),s("span",{pre:!0,attrs:{class:"token tag"}},[t._v(" (gEnergy)")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" iec6205621meter"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"meter1;1.8.1"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Number")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Tarif2")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Low price tarif [%d kwh]"')]),s("span",{pre:!0,attrs:{class:"token tag"}},[t._v(" (gEnergy)")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" iec6205621meter"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"meter1;1.8.2"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Number")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ActualEnergyConsumption")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Actual energy consumption [%.2f KW]"')]),s("span",{pre:!0,attrs:{class:"token tag"}},[t._v(" (gEnergy)")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" iec6205621meter"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"meter1;16.7"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"rules"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#rules","aria-hidden":"true"}},[this._v("#")]),this._v(" Rules")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-dsl"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Number")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Tarif1Today")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Daily Consumption High Price"')]),s("span",{pre:!0,attrs:{class:"token tag"}},[t._v(" (gEnergieConsumption)")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Number")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Tarif2Today")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Daily Consumption Low Price"')]),s("span",{pre:!0,attrs:{class:"token tag"}},[t._v(" (gEnergieConsumption)")]),t._v("\n")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-rules"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("rule")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Energy chart"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("when")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Item")]),t._v(" Tarif1 "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("changed")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("or")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Item")]),t._v(" Tarif2 "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("changed")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("then")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Number")]),t._v(" tmp\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Number")]),t._v(" stopTarif1\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Number")]),t._v(" stopTarif2\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Number")]),t._v(" startTarif1\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Number")]),t._v(" startTarif2\n        \n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token function-name"}},[t._v("Tarif1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("state "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("instanceof")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DecimalType")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function-name"}},[t._v("Tarif2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("state "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("instanceof")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DecimalType")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("   \n        stopTarif1  "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function-name"}},[t._v("Tarif1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("maximumSince")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("now"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("toDateMidnight"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("state "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DecimalType")]),t._v("\n        stopTarif2  "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function-name"}},[t._v("Tarif2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("maximumSince")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("now"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("toDateMidnight"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("state "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DecimalType")]),t._v("\n        \n            "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//Today")]),t._v("\n                startTarif1 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function-name"}},[t._v("Tarif1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("minimumSince")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("now"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("toDateMidnight"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("state "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DecimalType")]),t._v("\n                startTarif2 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function-name"}},[t._v("Tarif2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("minimumSince")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("now"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("toDateMidnight"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("state "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DecimalType")]),t._v("\n                \n                tmp "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" stopTarif1 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" startTarif1\n                "),s("span",{pre:!0,attrs:{class:"token function-name"}},[t._v("Tarif1Today")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("postUpdate")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("tmp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        \n                tmp "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" stopTarif2 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" startTarif2\n                "),s("span",{pre:!0,attrs:{class:"token function-name"}},[t._v("Tarif2Today")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("postUpdate")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("tmp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("end")]),t._v("\n")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-dsl"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Frame")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("label")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Energie"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Text")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("item")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("Tarif1 "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("icon")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"energy"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Frame")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Text")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("item")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("Tarif1 \n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Text")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("item")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("Tarif2\n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Chart")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("item")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("gEnergieConsumption "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("period")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("D "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("refresh")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("600")]),t._v(" \n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Chart")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("item")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("gEnergieConsumption "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("period")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("W "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("refresh")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3600")]),t._v("    \n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Text")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("item")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("ActualEnergyConsumption "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("icon")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"energy"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Frame")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                          "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Text")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("item")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("ActualEnergyConsumption\n                          "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Switch")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("item")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("ActualEnergyConsumption_Chart_Perdiod "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("label")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Period"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("mappings")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hour"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Day"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Week"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n                          "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Chart")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("item")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("ActualEnergyConsumption  "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("period")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("h "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("visibility")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("ActualEnergyConsumption_Period"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ActualUsage_Chart_Period"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v("Uninitialized "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n                          "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Chart")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("item")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("ActualEnergyConsumption  "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("period")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("D "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("visibility")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("ActualEnergyConsumption_Chart_Period"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n                          "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Chart")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("item")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("ActualEnergyConsumption  "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("period")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("W "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("visibility")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("ActualEnergyConsumption_Chart_Period"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("   \n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"tested-hardware"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#tested-hardware","aria-hidden":"true"}},[this._v("#")]),this._v(" Tested Hardware")])}],!1,null,null,null);e.default=r.exports}}]);