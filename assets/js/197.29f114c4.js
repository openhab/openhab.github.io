(window.webpackJsonp=window.webpackJsonp||[]).push([[197],{866:function(e,t,i){"use strict";i.r(t);var r=i(1),n=Object(r.a)({},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"content"},[i("h1",{attrs:{id:"diyonxbee-binding"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#diyonxbee-binding","aria-hidden":"true"}},[e._v("#")]),e._v(" DIYOnXBee Binding "),i("Badge",{attrs:{type:"warn",text:"v1"}})],1),e._v(" "),i("AddonLogo"),e._v(" "),i("p",[e._v("The openHAB DIYOnXBee binding allows interaction with self built (DIY) hardware that communicate via XBee modules.")]),e._v(" "),e._m(0),e._v(" "),i("p",[e._v("The XBee connected to openHAB has to be configured to run in API mode.")]),e._v(" "),e._m(1),e._v(" "),e._m(2),e._v(" "),e._m(3),e._v(" "),e._m(4),e._v(" "),e._m(5),e._v(" "),e._m(6),e._v(" "),e._m(7),e._v(" "),e._m(8),e._v(" "),e._m(9),e._v(" "),e._m(10),e._v(" "),e._m(11),e._v(" "),e._m(12),e._v(" "),i("p",[e._v("The protocol is text-based to allow simple development/debugging of the Arduino code\neven without using the XBee (any serial console will do).")]),e._v(" "),i("p",[e._v("For the pure sensors, the Arduino has to send lines conaining key=value. From the\nexample item configuration above, a valid message would be:")]),e._v(" "),e._m(13),e._v(" "),i("p",[e._v("For the actors, the Arduino has to send the received command back to the sender;\nthis ensures that the openHAB item state is only updated when the command was\ncorrectly understood.")]),e._v(" "),i("p",[e._v("Currently, RGB LED stripes (openHAB type Color), switches and dimmers are supported.")]),e._v(" "),e._m(14),e._v(" "),i("p",[e._v("There is an Arduino library with example "),i("a",{attrs:{href:"https://github.com/juri8/diyonxbee-library",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),i("OutboundLink")],1),e._v(".")]),e._v(" "),i("DocPreviousVersions"),e._v(" "),i("EditPageLink")],1)},[function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"prerequisites"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites","aria-hidden":"true"}},[this._v("#")]),this._v(" Prerequisites")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"binding-configuration"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#binding-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Binding Configuration")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("The binding may be configured in the file "),t("code",[this._v("services/diyonxbee.cfg")]),this._v(".")])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("table",[i("thead",[i("tr",[i("th",[e._v("Property")]),e._v(" "),i("th",[e._v("Default")]),e._v(" "),i("th",{staticStyle:{"text-align":"center"}},[e._v("Required")]),e._v(" "),i("th",[e._v("Description")])])]),e._v(" "),i("tbody",[i("tr",[i("td",[e._v("serialPort")]),e._v(" "),i("td"),e._v(" "),i("td",{staticStyle:{"text-align":"center"}},[e._v("Yes")]),e._v(" "),i("td",[e._v("The serial port on which to connect")])]),e._v(" "),i("tr",[i("td",[e._v("baudRate")]),e._v(" "),i("td",[e._v("9600")]),e._v(" "),i("td",{staticStyle:{"text-align":"center"}},[e._v("No")]),e._v(" "),i("td",[e._v("The baud rate to use")])])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"item-configuration"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#item-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Item Configuration")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("A binding beginning with "),t("code",[this._v("<")]),this._v(" defines an input, while a binding beginning with "),t("code",[this._v(">")]),this._v(" defines an output.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"examples"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#examples","aria-hidden":"true"}},[this._v("#")]),this._v(" Examples")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"diyonxbee-cfg"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#diyonxbee-cfg","aria-hidden":"true"}},[this._v("#")]),this._v(" diyonxbee.cfg")])},function(){var e=this.$createElement,t=this._self._c||e;return t("pre",[t("code",[this._v("serialPort=/dev/serial/by-id/usb-FTDI_FT232R_USB_UART_A702NX9M-if00-port0                                                                                \nbaudRate=9600                                                                                                                                            \n")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"items"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#items","aria-hidden":"true"}},[this._v("#")]),this._v(" Items")])},function(){var e=this.$createElement,t=this._self._c||e;return t("pre",[t("code",[this._v('Number  Living_Temperature      "Temperatur [%.1f °C]"          <temperature>   (GF_Living)     { diyonxbee="<0013A20040B40F18:Temperature" }\nSwitch  Living_Motion           "Bewegung [MAP(de.map):%s]"     <present>       (GF_Living,GPresence)   { diyonxbee="<0013A20040B40F18:MOTION" }\nColor   Living_Stripe           "Living RGB Stripe"          <lights>   (GF_Living)     { diyonxbee="<0013A20040B40F18:Stripe" }\n')])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"notes"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#notes","aria-hidden":"true"}},[this._v("#")]),this._v(" Notes")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"protocol"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#protocol","aria-hidden":"true"}},[this._v("#")]),this._v(" Protocol")])},function(){var e=this.$createElement,t=this._self._c||e;return t("pre",[t("code",[this._v("Temperature=21.3\nMOTION=ON\n")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"sample-arduino-sketch"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#sample-arduino-sketch","aria-hidden":"true"}},[this._v("#")]),this._v(" Sample Arduino Sketch")])}],!1,null,null,null);t.default=n.exports}}]);