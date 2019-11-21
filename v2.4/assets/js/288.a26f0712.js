(window.webpackJsonp=window.webpackJsonp||[]).push([[288],{903:function(t,e,s){"use strict";s.r(e);var a=s(0),r=Object(a.a)({},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),s("p",[t._v("The Serial binding allows openHAB to communicate over serial ports attached to the openHAB server.")]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),s("p",[t._v("In most cases it will not be needed to perform special steps to access serial ports, but these notes might be helpful.")]),t._v(" "),t._m(3),t._v(" "),s("ul",[s("li",[t._v("When using "),s("strong",[t._v("non standard serial ports")]),t._v(", adapt "),s("a",{attrs:{href:"http://start.sh",target:"_blank",rel:"noopener noreferrer"}},[t._v("start.sh"),s("OutboundLink")],1),t._v(" to have the serial port included. The "),s("code",[t._v("java")]),t._v(" command line should then include the following parameters:")])]),t._v(" "),t._m(4),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),s("p",[t._v("The user will need to logout from all login instances and log back in to see their new group added.  If the user added to this group still cannot get permission, rebooting the box to ensure the new group permission is attached to the user is suggested.")]),t._v(" "),t._m(8),t._v(" "),s("p",[t._v("example:")]),t._v(" "),t._m(9),t._m(10),t._v(" "),s("p",[t._v("When working with a Mac, it may be necessary to install a driver for the USB-RS232 converter (e.g. "),s("a",{attrs:{href:"http://osx-pl2303.sourceforge.net/",target:"_blank",rel:"noopener noreferrer"}},[t._v("osx-pl2303"),s("OutboundLink")],1),t._v(" or "),s("a",{attrs:{href:"http://mac.softpedia.com/get/Drivers/PL2303-OS-X-driver.shtml",target:"_blank",rel:"noopener noreferrer"}},[t._v("pl2303"),s("OutboundLink")],1),t._v(") and create the /var/lock folder; see the "),s("a",{attrs:{href:"http://rxtx.qbang.org/wiki/index.php/Trouble_shooting#Mac_OS_X_users",target:"_blank",rel:"noopener noreferrer"}},[t._v("rxtx troubleshooting guide"),s("OutboundLink")],1),t._v(".")]),t._v(" "),t._m(11),t._v(" "),s("p",[t._v("This binding does not have a configuration.")]),t._v(" "),t._m(12),t._v(" "),s("p",[t._v("The format has the following variations:")]),t._v(" "),t._m(13),s("p",[t._v("where:")]),t._v(" "),s("ul",[t._m(14),t._v(" "),t._m(15),t._v(" "),s("li",[s("code",[t._v("REGEX(\\<regular expression\\>)")]),t._v(' allows parsing for special strings or numbers in the serial stream. A capture group (e.g. REGEX(Position:([0-9.]*)) can be used to capture "12" in '),s("code",[t._v("Position:12")]),t._v(' or substitution (e.g. REGEX(s/Position:100/ON/) or REGEX(s/Position:100/ON/g)) to replace (FIRST or ALL) "Position:100" strings in response with "ON". This is based on the '),s("a",{attrs:{href:"https://github.com/openhab/openhab1-addons/wiki/Transformations#regex-transformation-service",target:"_blank",rel:"noopener noreferrer"}},[t._v("RegEx Service"),s("OutboundLink")],1),t._v(" and "),s("a",{attrs:{href:"https://github.com/eclipse/smarthome/tree/master/extensions/transform/org.eclipse.smarthome.transform.regex",target:"_blank",rel:"noopener noreferrer"}},[t._v("ESH RegExTransformationService"),s("OutboundLink")],1),t._v(". This is optional.")]),t._v(" "),t._m(16),t._v(" "),t._m(17),t._v(" "),t._m(18),t._v(" "),t._m(19)]),t._v(" "),t._m(20),t._v(" "),t._m(21),t._m(22),t._v(" "),s("p",[t._v("As a result, lines in the items file might look like these:")]),t._v(" "),t._m(23),s("DocPreviousVersions"),t._v(" "),s("EditPageLink")],1)},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"serial-binding"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#serial-binding","aria-hidden":"true"}},[this._v("#")]),this._v(" Serial Binding")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("table",[s("thead",[s("tr",[s("th",[t._v("Item Type")]),t._v(" "),s("th",[t._v("Function")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("Switch")]),t._v(" "),s("td",[t._v("the item will update its state to "),s("code",[t._v("ON")]),t._v(" or "),s("code",[t._v("OFF")]),t._v(" whenever data becomes available on the serial interface (or simply by short-cutting pins 2 and 7 on the RS-232 interface)")])]),t._v(" "),s("tr",[s("td",[t._v("String")]),t._v(" "),s("td",[t._v("the item will update its state to a string that is the data received from the serial interface.  Sending a command to the String item will be sent out as data through the serial interface.")])]),t._v(" "),s("tr",[s("td",[t._v("Number")]),t._v(" "),s("td",[t._v("the item will receive the RegEx result and attempt to convert the string to a number.")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"port-configuration-notes"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#port-configuration-notes","aria-hidden":"true"}},[this._v("#")]),this._v(" Port Configuration Notes")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"linux-users"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#linux-users","aria-hidden":"true"}},[this._v("#")]),this._v(" Linux Users")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("-Dgnu.io.rxtx.SerialPorts=/dev/ttyAMA0\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("where "),e("code",[this._v("/dev/ttyAMA0")]),this._v(" is the path to the serial port. Remember to change all scripts used for startup (debug, automatic start in Linux, etc.).")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("A Linux distro might require adding the "),e("code",[this._v("openhab")]),this._v(" user to the "),e("code",[this._v("dialout")]),this._v(" group to grant permission to read/write to the serial port.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("sudo usermod -a -G dialout openhab\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("When using more than one USB serial converter like FTDI or CP2102, it may happen that the /dev/ttyUSB0 device is named /dev/ttyUSB1 after a reboot. To prevent this problem, alias names can be assigned to serial devices by adding them to "),e("code",[this._v("/etc/udev/rules.d/99-com.rules")]),this._v(".")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v('SUBSYSTEM=="tty", ATTRS{idVendor}=="0403", ATTRS{idProduct}=="6001", ATTRS{serial}=="AE01F0PD", SYMLINK+="ttyMySensors"\nSUBSYSTEM=="tty", ATTRS{idVendor}=="10c4", ATTRS{idProduct}=="ea60", ATTRS{serial}=="0001", SYMLINK+="ttyCulStick"\n')])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"mac-users"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#mac-users","aria-hidden":"true"}},[this._v("#")]),this._v(" Mac Users")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"binding-configuration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#binding-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Binding Configuration")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"item-configuration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#item-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Item Configuration")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v('serial="<port>@<baudrate>" \nserial="<port>@<baudrate>,REGEX(\\<regular expression\\>)" \nserial="<port>@<baudrate>,BASE64"\nserial="<port>@<baudrate>,ON(<On string>),OFF(<Off string>)" \nserial="<port>@<baudrate>,REGEX(\\<regular expression\\>), UP(<Up string>),DOWN(<Down string>), STOP(<Stop string>)" \n')])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("li",[s("code",[t._v("<port>")]),t._v(" is the identification of the serial port on the host system, e.g. "),s("code",[t._v("COM1")]),t._v(" on Windows, "),s("code",[t._v("/dev/ttyS0")]),t._v(" on Linux or "),s("code",[t._v("/dev/tty.PL2303-0000103D")]),t._v(" on Mac.  The same "),s("code",[t._v("<port>")]),t._v(" can be bound to multiple items.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("code",[this._v("<baudrate>")]),this._v(" is the baud rate of the port. If no baud rate is specified, the binding defaults to 9600 baud.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("code",[this._v("BASE64()")]),this._v(" enables the Base64 mode. With this mode all data received on the serial port is saved in Base64 format. All data that is sent to the serial port also has to be Base64 encoded. (This was implemented because some serial devices are using bytes that are not supported by the REST interface).")])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("code",[this._v("ON(<On string>),OFF(<Off string>)")]),this._v(" used in conjunction with a Switch, this mapping will send specific commands to serial port and also match a serial command to specific ON/OFF state. This makes it unnecessary to use a rule to send a command to serial.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("code",[this._v("UP(<Up string>),DOWN(<Down string>),STOP(<Stop string>)")]),this._v(" used in conjunction with a Rollershutter, this mapping will send specific commands to serial port. Use REGEX to parse Rollershutter postion (0-100%) coming as feedback over serial link.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("code",[this._v("CHARSET(<charset>)")]),this._v(" set's the charset to be used for converting to a String and back to bytes when writing. (e.g. UTF-8, ISO-8859-1, etc.)")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Base64 can be decoded in the rules by importing "),e("code",[this._v("javax.xml.bind.DatatypeConverter")]),this._v(" and then decoding the value like this:")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("DatatypeConverter::parseBase64Binary(ITEM.state.toString)\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("For encoding, use the "),e("code",[this._v("printBase64Binary")]),this._v(" method of the "),e("code",[this._v("DatatypeConverter")]),this._v(". This is optional.")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-dsl"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("Switch")]),t._v("         "),s("span",{attrs:{class:"token class-name"}},[t._v("HardwareButton")]),t._v("     "),s("span",{attrs:{class:"token string"}},[t._v('"Bell"')]),t._v("             "),s("span",{attrs:{class:"token tag"}},[t._v(" (Entrance)")]),t._v("      "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" serial"),s("span",{attrs:{class:"token operator"}},[t._v("=")]),s("span",{attrs:{class:"token string"}},[t._v('"/dev/ttyS0"')]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("String")]),t._v("         "),s("span",{attrs:{class:"token class-name"}},[t._v("AVR")]),t._v("                "),s("span",{attrs:{class:"token string"}},[t._v('"Surround System"')]),t._v("  "),s("span",{attrs:{class:"token tag"}},[t._v(" (Multimedia)")]),t._v("    "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" serial"),s("span",{attrs:{class:"token operator"}},[t._v("=")]),s("span",{attrs:{class:"token string"}},[t._v('"/dev/ttyS1@115200"')]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" \n"),s("span",{attrs:{class:"token keyword"}},[t._v("Number")]),t._v("         "),s("span",{attrs:{class:"token class-name"}},[t._v("Temperature")]),t._v("        "),s("span",{attrs:{class:"token string"}},[t._v('"My Temp. Sensor"')]),t._v("  "),s("span",{attrs:{class:"token tag"}},[t._v(" (Weather)")]),t._v("       "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" serial"),s("span",{attrs:{class:"token operator"}},[t._v("=")]),s("span",{attrs:{class:"token string"}},[t._v('"/dev/ttyS1@115200,REGEX(ID:2.*,T:([0-9.]*))"')]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" \n"),s("span",{attrs:{class:"token keyword"}},[t._v("Switch")]),t._v("         "),s("span",{attrs:{class:"token class-name"}},[t._v("SerialRelay")]),t._v("        "),s("span",{attrs:{class:"token string"}},[t._v('"Relay Q1"')]),t._v("         "),s("span",{attrs:{class:"token tag"}},[t._v(" (Entrance)")]),t._v("      "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" serial"),s("span",{attrs:{class:"token operator"}},[t._v("=")]),s("span",{attrs:{class:"token string"}},[t._v('"/dev/ttyS0,ON(Q1_ON\\n),OFF(Q1_OFF\\n)"')]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("Rollershutter")]),t._v("  "),s("span",{attrs:{class:"token class-name"}},[t._v("SerialRollo")]),t._v("        "),s("span",{attrs:{class:"token string"}},[t._v('"Entrance Rollo"')]),t._v("   "),s("span",{attrs:{class:"token tag"}},[t._v(" (Entrance)")]),t._v("      "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" serial"),s("span",{attrs:{class:"token operator"}},[t._v("=")]),s("span",{attrs:{class:"token string"}},[t._v('"/dev/ttyS0,REGEX(Position:([0-9.]*)),UP(Rollo_UP\\n),DOWN(Rollo_Down\\n),STOP(Rollo_Stop\\n)"')]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("Switch")]),t._v("         "),s("span",{attrs:{class:"token class-name"}},[t._v("RoloAt100")]),t._v("          "),s("span",{attrs:{class:"token string"}},[t._v('"Rolo at 100"')]),t._v("      "),s("span",{attrs:{class:"token tag"}},[t._v(" (Entrance)")]),t._v("      "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" serial"),s("span",{attrs:{class:"token operator"}},[t._v("=")]),s("span",{attrs:{class:"token string"}},[t._v('"/dev/ttyS0,REGEX(s/Position:100/ON/)"')]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])}],!1,null,null,null);r.options.__file="readme.md";e.default=r.exports}}]);