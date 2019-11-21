(window.webpackJsonp=window.webpackJsonp||[]).push([[399],{286:function(t,s,a){t.exports=a.p+"c083a50b5639820e5e2bfbe32ab15fe7.png"},287:function(t,s,a){t.exports=a.p+"fc5890227e67acb1ab11e222e77d094d.png"},288:function(t,s,a){t.exports=a.p+"2548cfc5cd3372ead5cd921358a9a69c.png"},603:function(t,s,a){"use strict";a.r(s);var n=[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"jsondb-storage"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#jsondb-storage","aria-hidden":"true"}},[this._v("#")]),this._v(" JsonDB Storage")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"technical-overview"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#technical-overview","aria-hidden":"true"}},[this._v("#")]),this._v(" Technical Overview")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("The system stores different data into separate tables.\nJsonDB maps these tables into separate files - in this way each file contains a different type of data (eg. Things, Items, Links).\nThe system also keeps a number of backups in a "),s("code",[this._v("backup")]),this._v(" folder.\nEach time a file is updated, the current version will be moved to the "),s("code",[this._v("backup")]),this._v(" folder and timestamped so that the system can retain the most recent files.\nBy default the last 5 copies of each file are retained.\nWhen the system loads data from the file system, should it find that a file is corrupted it will attempt to open the most recent backup - it will try each backup in turn until a file is correctly read, or the number of files is reached.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"manual-editing"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#manual-editing","aria-hidden":"true"}},[this._v("#")]),this._v(" Manual Editing")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("openHAB stores configuration information in JSON (JavaScript Object Notation) formatted (structured) text files located in the "),s("code",[this._v("OPENHAB_USERDATA/jsondb/")]),this._v(" directory.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"storage-scope"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#storage-scope","aria-hidden":"true"}},[this._v("#")]),this._v(" Storage Scope")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("All configuration information regarding "),s("em",[s("strong",[this._v("Items, Links, and Things")])]),this._v(" are defined via the User Interfaces (Paper UI, HABmin, REST) or via internal openHAB services.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Note: The JSON DB does NOT store information for manually configured "),s("em",[s("strong",[this._v("Items, Links, or Things")])]),this._v(", since these are already stored in files within the "),s("code",[this._v("OPENHAB_CONF")]),this._v(" sub-directories (e.g. "),s("code",[this._v("/etc/openhab2/items/")]),this._v(").")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"storage-purpose"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#storage-purpose","aria-hidden":"true"}},[this._v("#")]),this._v(" Storage Purpose")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ul",[a("li",[t._v("Backup: Maintains a copy of your configurations in the "),a("code",[t._v("OPENHAB_USERDATA/jsondb/backup")]),t._v(" directory")]),t._v(" "),a("li",[t._v("Troubleshooting: Allows the user to interact with the configurations that were automatically generated via the UIs")]),t._v(" "),a("li",[t._v("Advanced administration: Gives the possibility to manually define configuration parameters within the "),a("code",[t._v("*.json")]),t._v(" files")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"storage-use"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#storage-use","aria-hidden":"true"}},[this._v("#")]),this._v(" Storage Use")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("openHAB writes the "),s("code",[this._v("*.json")]),this._v(" files every time a change is made via the User Interfaces.\nopenHAB "),s("em",[s("strong",[this._v("reads the "),s("code",[this._v("*.json")]),this._v(" files only once at startup")])]),this._v(".  So, if you edit them manually, you should restart openHAB.")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ol",[s("li",[s("em",[this._v("Write delay")]),this._v(" (defaults to 500 ms): Sets the time to wait before writing changes to disk.\nThis can reduce the number of writes when many changes are being introduced within a short period, and")]),this._v(" "),s("li",[s("em",[this._v("Maximum write delay")]),this._v(" (defaults to 30000 ms): Sets the maximum period the service will wait to write data in cases where changes are happening continually.")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"storage-location"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#storage-location","aria-hidden":"true"}},[this._v("#")]),this._v(" Storage Location")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("The JsonDB Storage resides in the "),s("code",[this._v("OPENHAB_USERDATA/jsondb/")]),this._v(" directory.\nThe full directory path depends on the installation method:")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ul",[a("li",[t._v("Linux Repository Installation: "),a("code",[t._v("/var/lib/openhab2/jsondb/")])]),t._v(" "),a("li",[t._v("Linux Manual Installation: "),a("code",[t._v("/opt/openhab2/userdata/jsondb/")])]),t._v(" "),a("li",[t._v("Windows (Manual) Installation: "),a("code",[t._v("C:\\openHAB2\\userdata\\jsondb\\")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Within the "),s("code",[this._v("OPENHAB_USERDATA/jsondb/")]),this._v(" directory, you will find the following files:")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("table",[a("thead",[a("tr",[a("th",[t._v("Filename")]),t._v(" "),a("th",[a("em",[t._v("Contents")])])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("org.eclipse.smarthome.config.discovery."),a("strong",[t._v("DiscoveryResult.json")])]),t._v(" "),a("td",[a("em",[t._v("Results of Paper UI Discovery")])])]),t._v(" "),a("tr",[a("td",[t._v("org.eclipse.smarthome.core.items."),a("strong",[t._v("Item.json")])]),t._v(" "),a("td",[a("em",[t._v("Items configurations")])])]),t._v(" "),a("tr",[a("td",[t._v("org.eclipse.smarthome.core.thing.link."),a("strong",[t._v("ItemChannelLink.json")])]),t._v(" "),a("td",[a("em",[t._v("Item to Channel Link configurations")])])]),t._v(" "),a("tr",[a("td",[t._v("org.eclipse.smarthome.core.thing.link."),a("strong",[t._v("ItemThingLink.json")])]),t._v(" "),a("td",[a("em",[t._v("Item to Thing Link configurations")])])]),t._v(" "),a("tr",[a("td",[t._v("org.eclipse.smarthome.core.thing."),a("strong",[t._v("Thing.json")])]),t._v(" "),a("td",[a("em",[t._v("Things configurations")])])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"example-use"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#example-use","aria-hidden":"true"}},[this._v("#")]),this._v(" Example Use")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Step 1. Add new Thing (name: "),s("code",[this._v("ISP_Gateway")]),this._v(") from Paper UIs Inbox:\n"),s("img",{attrs:{src:a(286),alt:"Add_Thing_Paper_UI"}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Step 2. Check the contents of the "),s("code",[this._v("OPENHAB_USERDATA/jsondb/org.eclipse.smarthome.core.thing.Thing.json")]),this._v(" file:")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-rules"}},[a("code",[t._v("root@rpi3"),a("span",{attrs:{class:"token operator"}},[t._v(":")]),a("span",{attrs:{class:"token operator"}},[t._v("~")]),t._v("# more "),a("span",{attrs:{class:"token operator"}},[t._v("/")]),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),a("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("lib"),a("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("openhab2"),a("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("jsondb"),a("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("org"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("eclipse"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("smarthome"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("core"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("thing"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token keyword"}},[t._v("Thing")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("json\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token string"}},[t._v('"network:device:172_16_13_254"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token string"}},[t._v('"class"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"org.eclipse.smarthome.core.thing.internal.ThingImpl"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token string"}},[t._v('"value"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{attrs:{class:"token string"}},[t._v('"label"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"ISP_Gateway"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{attrs:{class:"token string"}},[t._v('"channels"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          "),a("span",{attrs:{class:"token string"}},[t._v('"acceptedItemType"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"Switch"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          "),a("span",{attrs:{class:"token string"}},[t._v('"kind"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"STATE"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          "),a("span",{attrs:{class:"token string"}},[t._v('"uid"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{attrs:{class:"token string"}},[t._v('"segments"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n              "),a("span",{attrs:{class:"token string"}},[t._v('"network"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n              "),a("span",{attrs:{class:"token string"}},[t._v('"device"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n              "),a("span",{attrs:{class:"token string"}},[t._v('"172_16_13_254"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n              "),a("span",{attrs:{class:"token string"}},[t._v('"online"')]),t._v("\n            "),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n          "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          "),a("span",{attrs:{class:"token string"}},[t._v('"channelTypeUID"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{attrs:{class:"token string"}},[t._v('"segments"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n              "),a("span",{attrs:{class:"token string"}},[t._v('"network"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n              "),a("span",{attrs:{class:"token string"}},[t._v('"online"')]),t._v("\n            "),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n          "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          "),a("span",{attrs:{class:"token string"}},[t._v('"configuration"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{attrs:{class:"token string"}},[t._v('"properties"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n          "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          "),a("span",{attrs:{class:"token string"}},[t._v('"properties"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          "),a("span",{attrs:{class:"token string"}},[t._v('"defaultTags"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          "),a("span",{attrs:{class:"token string"}},[t._v('"acceptedItemType"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"Number"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          "),a("span",{attrs:{class:"token string"}},[t._v('"kind"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"STATE"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          "),a("span",{attrs:{class:"token string"}},[t._v('"uid"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          "),a("span",{attrs:{class:"token string"}},[t._v('"segments"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n              "),a("span",{attrs:{class:"token string"}},[t._v('"network"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n              "),a("span",{attrs:{class:"token string"}},[t._v('"device"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n              "),a("span",{attrs:{class:"token string"}},[t._v('"172_16_13_254"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n              "),a("span",{attrs:{class:"token string"}},[t._v('"time"')]),t._v("\n            "),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n          "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          "),a("span",{attrs:{class:"token string"}},[t._v('"channelTypeUID"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{attrs:{class:"token string"}},[t._v('"segments"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n              "),a("span",{attrs:{class:"token string"}},[t._v('"network"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n              "),a("span",{attrs:{class:"token string"}},[t._v('"time"')]),t._v("\n            "),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n          "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          "),a("span",{attrs:{class:"token string"}},[t._v('"configuration"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{attrs:{class:"token string"}},[t._v('"properties"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n          "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          "),a("span",{attrs:{class:"token string"}},[t._v('"properties"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          "),a("span",{attrs:{class:"token string"}},[t._v('"defaultTags"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{attrs:{class:"token string"}},[t._v('"configuration"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{attrs:{class:"token string"}},[t._v('"properties"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          "),a("span",{attrs:{class:"token string"}},[t._v('"hostname"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"172.16.13.254"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          "),a("span",{attrs:{class:"token string"}},[t._v('"refresh_interval"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("60000")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          "),a("span",{attrs:{class:"token string"}},[t._v('"port"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("0")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          "),a("span",{attrs:{class:"token string"}},[t._v('"dhcplisten"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("false")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          "),a("span",{attrs:{class:"token string"}},[t._v('"retry"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          "),a("span",{attrs:{class:"token string"}},[t._v('"timeout"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("5000")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          "),a("span",{attrs:{class:"token string"}},[t._v('"use_system_ping"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{attrs:{class:"token string"}},[t._v('"properties"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{attrs:{class:"token string"}},[t._v('"uid"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          "),a("span",{attrs:{class:"token string"}},[t._v('"segments"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n          "),a("span",{attrs:{class:"token string"}},[t._v('"network"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          "),a("span",{attrs:{class:"token string"}},[t._v('"device"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          "),a("span",{attrs:{class:"token string"}},[t._v('"172_16_13_254"')]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n      "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{attrs:{class:"token string"}},[t._v('"thingTypeUID"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{attrs:{class:"token string"}},[t._v('"segments"')]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n          "),a("span",{attrs:{class:"token string"}},[t._v('"network"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          "),a("span",{attrs:{class:"token string"}},[t._v('"device"')]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n      "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Step 3. Using Paper UI ➡️ Configuration ➡️ Things, edit the new "),s("code",[this._v("ISP_Gateway")]),this._v(" Thing and modify the following parameters:")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("Location (from unset to "),s("code",[this._v("MyHome")]),this._v(")")]),this._v(" "),s("li",[this._v("Retry (from 1 to 3)")]),this._v(" "),s("li",[this._v("Timeout (from 5000 to 10000)\nand save:\n"),s("img",{attrs:{src:a(287),alt:"Edit_Thing_Paper_UI"}})])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Step 4. Check the configuration properties again in the "),s("code",[this._v("OPENHAB_USERDATA/jsondb/org.eclipse.smarthome.core.thing.Thing.json")]),this._v(" file:\n"),s("img",{attrs:{src:a(288),alt:"New_Json"}})])}],e=a(0),r=Object(e.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),a("p",[t._v("JsonDB provides a system database for storage of configuration data.\nAll configuration data stored into the system through the REST interface that is used by the user interfaces will be stored into the JsonDB.\nJsonDB provides a high performance, human readable data store that is primarily meant for system use but can be edited manually, or stored in a version control system such as Git.")]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),a("p",[t._v("To improve performance and reduce disk use all file writes are deferred for a few hundred milliseconds.\nThis ensures that if there are multiple updates of the database in a short time, the system will only write these updates to the file system after the group of updates completes.\nIf the system gets into a loop such that it is continually updating configuration information in the database, JsonDB will write a file every minute.\nThese timers can be configured by the user along with the number of backup files retained.")]),t._v(" "),a("p",[t._v("It is worth noting that data is only read from the file system when the table is first created - this is normally on system startup.\nAfter this the data is retained in memory and only written to file when there are changes.")]),t._v(" "),t._m(3),t._v(" "),a("p",[t._v('Data is stored in a "pretty" format to make it more human readable, and is sorted so ordering is not random (important when a version control system is used).\nIt is therefore editable by advanced users who might want to do a search and replace on item names etc.')]),t._v(" "),a("p",[t._v("If you manually edit the file you must take responsibility for ensuring it is correctly formatted.\nA Json format checker (such as "),a("a",{attrs:{href:"http://jsonlint.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("jsonlint.com"),a("OutboundLink")],1),t._v(") can be used to check the format and this should ensure that the file can be correctly read.\nIt doesn't however ensure that the correct format is used - users wanting to edit a specific table are advised to first configure the system with the UI and then use the format generated by the UI as a template for subsequent additions and changes.\nMost data stored in the database is written in a way that should be understandable by someone with good knowledge of the system.")]),t._v(" "),a("p",[t._v("As stated above, the files are only read during system startup - therefore if you change a file you will need to stop openHAB, make your changes and restart the system for the changes to take effect.")]),t._v(" "),a("hr"),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),a("p",[t._v("JSON DB Storage can be used for:")]),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),a("p",[t._v("The system employs two write mechanisms to improve performance where there are multiple writes in a short time. When the service is closed, all open services are written to disk.\nThe parameters for the two mechanisms may be modified in Paper UI ➡️ Configuration ➡️ System ➡️ Json Storage")]),t._v(" "),t._m(12),t._v(" "),a("p",[t._v("The service keeps up to five backups of each table.\nThe outdated file is copied to the backup folder and then that file is overwritten with the new content.")]),t._v(" "),t._m(13),t._v(" "),t._m(14),t._v(" "),t._m(15),t._v(" "),t._m(16),t._v(" "),t._m(17),t._v(" "),t._m(18),t._v(" "),a("p",[t._v("In this example, we will use the Network Binding (2.0) to Search for Things, add a new Thing to openHAB and then modify its parameters to check the information that is stored in the JsonDB.")]),t._v(" "),t._m(19),t._v(" "),t._m(20),t._v(" "),t._m(21),t._m(22),t._v(" "),t._m(23),t._v(" "),t._m(24),t._v(" "),a("DocPreviousVersions"),t._v(" "),a("EditPageLink")],1)},n,!1,null,null,null);r.options.__file="jsondb.md";s.default=r.exports}}]);