(window.webpackJsonp=window.webpackJsonp||[]).push([[234],{921:function(t,e,r){"use strict";r.r(e);var a=r(1),n=Object(a.a)({},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"content"},[t._m(0),t._v(" "),r("AddonLogo"),t._v(" "),r("p",[t._v("This binding uses the "),r("a",{attrs:{href:"https://www.fronius.com/en/photovoltaics/products/all-products/system-monitoring/open-interfaces/fronius-solar-api-json-",target:"_blank",rel:"noopener noreferrer"}},[t._v("Fronius Solar API V1"),r("OutboundLink")],1),t._v(" to obtain data from a Fronius devices.")]),t._v(" "),t._m(1),t._v(" "),r("p",[t._v("Support Fronius Galvo, Fronius Symo inverters and other Fronius inverters in combination with the Fronius Datamanager 1.0 / 2.0 or Fronius Datalogger.\nYou can add multiple inverters that depend on the same datalogger with different device ids. ( Default 1 )")]),t._v(" "),t._m(2),t._v(" "),r("p",[t._v("There is no discovery implemented. You have to create your things manually and specify the IP of the Datalogger and the DeviceId.")]),t._v(" "),t._m(3),t._v(" "),r("p",[t._v("The binding has no configuration options, all configuration is done at Thing level.")]),t._v(" "),t._m(4),t._v(" "),r("p",[t._v("The thing has a few configuration parameters:")]),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),r("p",[t._v("demo.things:")]),t._v(" "),t._m(9),r("p",[t._v("demo.items:")]),t._v(" "),t._m(10),r("p",[t._v("Tested with a Fronius Symo 8.2-3-M")]),t._v(" "),r("DocPreviousVersions"),t._v(" "),r("EditPageLink")],1)},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"fronius-binding"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#fronius-binding","aria-hidden":"true"}},[this._v("#")]),this._v(" Fronius Binding")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"supported-things"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#supported-things","aria-hidden":"true"}},[this._v("#")]),this._v(" Supported Things")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"discovery"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#discovery","aria-hidden":"true"}},[this._v("#")]),this._v(" Discovery")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"binding-configuration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#binding-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Binding Configuration")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"thing-configuration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#thing-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Thing Configuration")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("table",[r("thead",[r("tr",[r("th",[t._v("Parameter")]),t._v(" "),r("th",[t._v("Description")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("Ip")]),t._v(" "),r("td",[t._v("the ip-address of your Fronius Datalogger")])]),t._v(" "),r("tr",[r("td",[t._v("DeviceId")]),t._v(" "),r("td",[t._v("The identifier of your device ( Default: 1)")])]),t._v(" "),r("tr",[r("td",[t._v("refresh")]),t._v(" "),r("td",[t._v("Refresh interval in seconds")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"channels"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#channels","aria-hidden":"true"}},[this._v("#")]),this._v(" Channels")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("table",[r("thead",[r("tr",[r("th",[t._v("Channel ID")]),t._v(" "),r("th",[t._v("Item Type")]),t._v(" "),r("th",[t._v("Description")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("day_energy")]),t._v(" "),r("td",[t._v("Number")]),t._v(" "),r("td",[t._v("Energy generated on current day")])]),t._v(" "),r("tr",[r("td",[t._v("pac")]),t._v(" "),r("td",[t._v("Number")]),t._v(" "),r("td",[t._v("AC powery")])]),t._v(" "),r("tr",[r("td",[t._v("total_energy")]),t._v(" "),r("td",[t._v("Number")]),t._v(" "),r("td",[t._v("Energy generated overall")])]),t._v(" "),r("tr",[r("td",[t._v("year_energy")]),t._v(" "),r("td",[t._v("Number")]),t._v(" "),r("td",[t._v("Energy generated in current year")])]),t._v(" "),r("tr",[r("td",[t._v("fac")]),t._v(" "),r("td",[t._v("Number")]),t._v(" "),r("td",[t._v("AC frequency")])]),t._v(" "),r("tr",[r("td",[t._v("iac")]),t._v(" "),r("td",[t._v("Number")]),t._v(" "),r("td",[t._v("AC current")])]),t._v(" "),r("tr",[r("td",[t._v("idc")]),t._v(" "),r("td",[t._v("Number")]),t._v(" "),r("td",[t._v("DC current")])]),t._v(" "),r("tr",[r("td",[t._v("uac")]),t._v(" "),r("td",[t._v("Number")]),t._v(" "),r("td",[t._v("AC voltage")])]),t._v(" "),r("tr",[r("td",[t._v("udc")]),t._v(" "),r("td",[t._v("Number")]),t._v(" "),r("td",[t._v("DC voltage")])]),t._v(" "),r("tr",[r("td",[t._v("pGrid")]),t._v(" "),r("td",[t._v("Number")]),t._v(" "),r("td",[t._v("Power + from grid, - to grid")])]),t._v(" "),r("tr",[r("td",[t._v("pLoad")]),t._v(" "),r("td",[t._v("Number")]),t._v(" "),r("td",[t._v("Power + generator, - consumer")])]),t._v(" "),r("tr",[r("td",[t._v("pAkku")]),t._v(" "),r("td",[t._v("Number")]),t._v(" "),r("td",[t._v("Power + charge, - discharge")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"full-example"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#full-example","aria-hidden":"true"}},[this._v("#")]),this._v(" Full Example")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-dsl"}},[r("code",[r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Bridge")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("fronius"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("bridge"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("mybridge")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("hostname"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"192.168.66.148"')]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("refreshInterval"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Thing")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("powerinverter")]),t._v(" myinverter "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" deviceId"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-dsl"}},[r("code",[r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Number")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AC_Powery")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" channel"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"fronius:powerinverter:mybridge:myinverter:inverterdatachannelpac"')]),t._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Number")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Day_Energy")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" channel"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"fronius:powerinverter:mybridge:myinverter:inverterdatachanneldayenergy"')]),t._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Number")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Total_Energy")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" channel"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"fronius:powerinverter:mybridge:myinverter:inverterdatachanneltotal"')]),t._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Number")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Year_Energy")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" channel"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"fronius:powerinverter:mybridge:myinverter:inverterdatachannelyear"')]),t._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Number")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("FAC")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" channel"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"fronius:powerinverter:mybridge:myinverter:inverterdatachannelfac"')]),t._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Number")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("IAC")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" channel"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"fronius:powerinverter:mybridge:myinverter:inverterdatachanneliac"')]),t._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Number")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("IDC")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" channel"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"fronius:powerinverter:mybridge:myinverter:inverterdatachannelidc"')]),t._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Number")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("UAC")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" channel"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"fronius:powerinverter:mybridge:myinverter:inverterdatachanneluac"')]),t._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Number")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("UDC")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" channel"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"fronius:powerinverter:mybridge:myinverter:inverterdatachanneludc"')]),t._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Number")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Grid_Power")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" channel"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"fronius:powerinverter:mybridge:myinverter:powerflowchannelpgrid"')]),t._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Number")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Load_Power")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" channel"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"fronius:powerinverter:mybridge:myinverter:powerflowchannelpload"')]),t._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),r("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Number")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Battery_Power")]),t._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" channel"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),r("span",{pre:!0,attrs:{class:"token string"}},[t._v('"fronius:powerinverter:mybridge:myinverter:powerflowchannelpakku"')]),t._v(" "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])}],!1,null,null,null);e.default=n.exports}}]);