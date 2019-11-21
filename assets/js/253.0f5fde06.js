(window.webpackJsonp=window.webpackJsonp||[]).push([[253],{951:function(e,t,s){"use strict";s.r(t);var r=s(1),a=Object(r.a)({},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"content"},[s("h1",{attrs:{id:"hms-binding"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#hms-binding","aria-hidden":"true"}},[e._v("#")]),e._v(" HMS Binding "),s("Badge",{attrs:{type:"warn",text:"v1"}})],1),e._v(" "),s("p",[e._v("This binding enables support of receiving HMS messages via the CUL transport.")]),e._v(" "),e._m(0),e._v(" "),e._m(1),e._v(" "),e._m(2),e._v(" "),s("p",[e._v("When using a serial port, you may need to add "),s("code",[e._v("-Dgnu.io.rxtx.SerialPorts=/dev/ttyACM0")]),e._v(" in your server startup.  Please consult the "),s("a",{attrs:{href:"https://community.openhab.org",target:"_blank",rel:"noopener noreferrer"}},[e._v("forum"),s("OutboundLink")],1),e._v(" for the latest information.")]),e._v(" "),e._m(3),e._v(" "),e._m(4),e._m(5),e._v(" "),e._m(6),e._v(" "),s("p",[e._v("This binding can only handle HMS components returning temperature or humidity values. Since these values are of type number, it only makes sence to use items of type Number or Text. In your items configuration file this could look like")]),e._v(" "),e._m(7),e._m(8),e._v(" "),e._m(9),e._v(" "),e._m(10),s("DocPreviousVersions"),e._v(" "),s("EditPageLink")],1)},[function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"binding-configuration"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#binding-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Binding Configuration")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("This binding can be configured in the "),t("code",[this._v("services/hms.cfg")]),this._v(" file.")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("table",[s("thead",[s("tr",[s("th",[e._v("Property")]),e._v(" "),s("th",[e._v("Default")]),e._v(" "),s("th",{staticStyle:{"text-align":"center"}},[e._v("Required")]),e._v(" "),s("th",[e._v("Description")])])]),e._v(" "),s("tbody",[s("tr",[s("td",[e._v("device")]),e._v(" "),s("td"),e._v(" "),s("td",{staticStyle:{"text-align":"center"}},[e._v("Yes")]),e._v(" "),s("td",[e._v("in the form "),s("code",[e._v("serial:<device>")]),e._v(", where "),s("code",[e._v("<device>")]),e._v(" is a local serial port, or"),s("br"),e._v(" "),s("code",[e._v("network:<host>:<port>")]),e._v(", where "),s("code",[e._v("<host>")]),e._v(" is the host name or IP address and "),s("code",[e._v("<port>")]),e._v(" is the port number.  The "),s("code",[e._v("network")]),e._v(" option works with ser2net from a tuxnet device")])]),e._v(" "),s("tr",[s("td",[e._v("baudrate")]),e._v(" "),s("td"),e._v(" "),s("td",{staticStyle:{"text-align":"center"}},[e._v("No")]),e._v(" "),s("td",[e._v("one of 75, 110, 300, 1200, 2400, 4800, 9600, 19200, 38400, 57600, 115200")])]),e._v(" "),s("tr",[s("td",[e._v("parity")]),e._v(" "),s("td"),e._v(" "),s("td",{staticStyle:{"text-align":"center"}},[e._v("No")]),e._v(" "),s("td",[e._v("one of EVEN, ODD, MARK, NONE, SPACE")])])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("To use a networked CUL device for HMS from ser2net, this line in "),t("code",[this._v("/etc/ser2net.conf")]),this._v(" on the remote "),t("code",[this._v("<host>")]),this._v(" will publish the serial interface (replace /dev/ttySP1 with whatever is appropriate):")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("3333:raw:0:/dev/ttySP1:38400 8DATABITS NONE 1STOPBIT\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("From the above, your "),t("code",[this._v("device")]),this._v(" property would be "),t("code",[this._v("network:<host>:3333")]),this._v(".")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"item-configuration"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#item-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Item configuration")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-dsl"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("Number")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("Temperature_Outdoor")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"Temp [%.1f °C]"')]),e._v("    "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v(" <temperature>")]),e._v("  "),s("span",{pre:!0,attrs:{class:"token tag"}},[e._v(" (Weather)")]),e._v("   "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v(" hms"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"address=A1DB;datapoint=TEMPERATURE"')]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("Number")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("Humidity_Outdoor")]),e._v("    "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"Humidity [%.1f %%]"')]),s("span",{pre:!0,attrs:{class:"token function"}},[e._v(" <humidity>")]),e._v("     "),s("span",{pre:!0,attrs:{class:"token tag"}},[e._v(" (Weather)")]),e._v("   "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v(" hms"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"address=A1DB;datapoint=HUMIDITY"')]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("p",[e._v("In the example, above the address of the HMS device is "),s("code",[e._v("A1DB")]),e._v(". By use of the attribute "),s("code",[e._v("datapoint")]),e._v(" one can either assign the "),s("code",[e._v("HUMIDITY")]),e._v(" or the "),s("code",[e._v("TEMPERATURE")]),e._v(" value to a device.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("If you don't know the address of your HMS device, simply search for lines like the following in your "),t("code",[this._v("openhab.log")]),this._v(", where the device address is printed out every time a new value is received. Keep in mind that new values are only reported every 5 minutes.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("HMSBinding[:124]- device: A1DB, T:  14.5,    H: 77.5, Bat.: ok\n")])])])}],!1,null,null,null);t.default=a.exports}}]);