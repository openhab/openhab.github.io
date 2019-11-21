(window.webpackJsonp=window.webpackJsonp||[]).push([[400],{473:function(t,e,n){"use strict";n.r(e);var s=n(0),i=Object(s.a)({},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content"},[t._m(0),t._v(" "),n("p",[n("router-link",{attrs:{to:"/docs/concepts/things.html"}},[t._v("Things")]),t._v(" represent the physical layer of an openHAB system.\nFrom a configuration standpoint, Things tell openHAB which "),n("strong",[t._v("physical entities")]),t._v(" (devices, web services, information sources, etc.) are to be managed by the system.")],1),t._v(" "),n("p",[t._v("Things are connected to openHAB through "),n("router-link",{attrs:{to:"/docs/addons/bindings.html"}},[t._v("bindings")]),t._v(".\nIn order to add a Thing to the system, you must first identify the appropriate binding which will provide the type of Thing you wish to add.\nFor example, before adding a Thing for a Z-Wave device, the Z-Wave binding must first be installed.")],1),t._v(" "),n("p",[t._v("Each Thing provides one or more "),n("strong",[t._v("Channels")]),t._v(" to access its functionality.\nThese Channels can be linked to "),n("router-link",{attrs:{to:"/docs/concepts/items.html"}},[t._v("items")]),t._v(".\nItems are used to control Things and consume their information.\nUltimately, when Items are linked to Channels on a Thing, they become available to the various user interfaces and to the rules engine.")],1),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),n("p",[t._v("Things are the starting point for configuring physical entities in openHAB.\nWhen you wish to add a new one to the system, you always start by defining a Thing.\nOnce a Thing has been defined and configured, you are done setting up the connection to the physical layer.\nFrom then on, everything else is configured at the application layer for that entity.")]),t._v(" "),n("p",[t._v("From start to finish, the process for fully configuring a physical entity represented by a Thing looks like this:")]),t._v(" "),n("ol",[n("li",[t._v("Identify the binding required for the Thing")]),t._v(" "),n("li",[t._v("Install the binding if it has not already been installed")]),t._v(" "),n("li",[t._v("Define and configure the Thing")]),t._v(" "),n("li",[t._v("Identify the Channels provided by the Thing")]),t._v(" "),n("li",[n("router-link",{attrs:{to:"/docs/configuration/items.html"}},[t._v("Add Items")]),t._v(" and link them to the Thing's Channels")],1),t._v(" "),n("li",[t._v("At this point Items can be used to control the Thing or consume its information in e.g. "),n("router-link",{attrs:{to:"/docs/configuration/sitemaps.html"}},[t._v("Sitemaps")]),t._v(" or "),n("router-link",{attrs:{to:"/docs/configuration/rules-dsl.html"}},[t._v("Rules")])],1)]),t._v(" "),n("p",[t._v("There are two methods for defining Things provided by the various bindings:\nthrough "),n("router-link",{attrs:{to:"/docs/concepts/discovery.html"}},[t._v("discovery")]),t._v(" or by manual definition in configuration text files.")],1),t._v(" "),n("p",[n("em",[t._v("Note:")]),t._v(" Some bindings do not fully support auto-discovery, others are hard to manually cover by the file based approach.\nPlease consult the documentation for each binding to determine the best way to add that binding's Things and Items to openHAB.\nFor some bindings (such as the "),n("router-link",{attrs:{to:"/docs/addons/bindings/yahooweather/readme.html"}},[t._v("YahooWeater")]),t._v(" binding), manual Thing definitions are required.\nOther bindings (such as the "),n("router-link",{attrs:{to:"/docs/addons/bindings/zwave/readme.html"}},[t._v("ZWave")]),t._v(" binding) currently prefer or require the discovery method.")],1),t._v(" "),t._m(3),t._v(" "),n("p",[t._v("Things can be added to the system using "),n("router-link",{attrs:{to:"/docs/concepts/discovery.html"}},[t._v("discovery")]),t._v(", which allows Things to be discovered automatically if the appropriate binding has been installed and configured.\nWhen a Thing has been discovered, it appears in the discovery inbox.\nNewly discovered Things can be added to the system from the inbox using the "),n("router-link",{attrs:{to:"/docs/configuration/paperui.html"}},[t._v("Paper UI")]),t._v(".")],1),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),n("p",[t._v("See the "),n("router-link",{attrs:{to:"/docs/tutorial/configuration.html"}},[t._v("configuration tutorial")]),t._v(" for a step-by-step guide on how to configure Things using discovery.")],1),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),n("p",[t._v("Benefits of defining Things, Items and other aspects of openHAB in configuration text files are, that they are statically defined, unambiguous, flexible and easy to backup and restore.\nThe main downsides of configuration files are the effort needed to compose them and the probability for typing errors.")]),t._v(" "),t._m(8),t._v(" "),t._m(9),t._m(10),t._v(" "),t._m(11),n("p",[t._v("Looking at the first example:")]),t._v(" "),n("ul",[n("li",[t._v('the binding ID is "network" (using the '),n("router-link",{attrs:{to:"/docs/addons/bindings/network/readme.html"}},[t._v("Network Binding")]),t._v(")")],1),t._v(" "),n("li",[t._v('the type ID is "device", indicating the Thing is a device')]),t._v(" "),n("li",[t._v('the Thing ID is "webcam", which is an ID to uniquely identify the Thing')]),t._v(" "),n("li",[t._v('the label is "Webcam", this is how the Thing will be named in the various user interfaces')]),t._v(" "),n("li",[t._v('the physical location of the Thing is "Living Room"')]),t._v(" "),t._m(12)]),t._v(" "),n("p",[t._v("Please check each individual binding's "),n("router-link",{attrs:{to:"/docs/addons/bindings.html"}},[t._v("documentation")]),t._v(" for details on what and how to define Things using the "),n("code",[t._v("*.things")]),t._v(" configuration text files.")],1),t._v(" "),t._m(13),t._v(" "),n("p",[t._v("Items can be linked to Channels of discovered or manually defined Things inside Paper UI or inside configuration files.\nFor more details about Item definition and usage, please refer to the "),n("router-link",{attrs:{to:"/docs/configuration/items.html"}},[t._v("Items configuration article")]),t._v(".")],1),t._v(" "),t._m(14),t._v(" "),t._m(15),t._m(16),t._v(" "),t._m(17),n("DocPreviousVersions"),t._v(" "),n("EditPageLink")],1)},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"things"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#things","aria-hidden":"true"}},[this._v("#")]),this._v(" Things")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("em",[this._v("Note:")]),this._v(" Things are a new concept in openHAB 2, Things definitions are not needed for 1.x bindings.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"defining-things"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#defining-things","aria-hidden":"true"}},[this._v("#")]),this._v(" Defining Things")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"defining-things-using-discovery"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#defining-things-using-discovery","aria-hidden":"true"}},[this._v("#")]),this._v(" Defining Things Using Discovery")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Things that are added to openHAB from the inbox are maintained in an internal database as opposed to a manually defined "),e("code",[this._v(".things")]),this._v(" file (see below).\nUnlike manually defined Things, if a Thing has configurable properties, these properties can be set through a user interface.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("Attention:")]),this._v(" It has to be noted, that Things and Items added through Paper UI / discovery to the internal database will "),e("strong",[this._v("not")]),this._v(" be written to configuration files.\nThings and Items definitions can be distributed and mixed among the internal database and manually defined text files.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"defining-things-using-files"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#defining-things-using-files","aria-hidden":"true"}},[this._v("#")]),this._v(" Defining Things Using Files")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[t._v("Things can also be defined manually by creating "),n("code",[t._v(".things")]),t._v(" configuration text files.\nThese files are stored in the "),n("code",[t._v("things")]),t._v(" folder under the openHAB configuration path, e.g. "),n("code",[t._v("/etc/openhab2/things/")]),t._v(" or "),n("code",[t._v("openhab2/conf/things")]),t._v(".")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("The syntax for "),e("code",[this._v(".things")]),this._v(" files is defined as follows (parts in "),e("code",[this._v("<..>")]),this._v(" are required):")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"language-xtend extra-class"},[n("pre",{pre:!0,attrs:{class:"language-dsl"}},[n("code",[n("span",{attrs:{class:"token keyword"}},[t._v("Thing")]),n("span",{attrs:{class:"token function"}},[t._v(" <binding_id>")]),n("span",{attrs:{class:"token operator"}},[t._v(":")]),n("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("type_id"),n("span",{attrs:{class:"token operator"}},[t._v(">")]),n("span",{attrs:{class:"token operator"}},[t._v(":")]),n("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("thing_id"),n("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v('"Label"')]),t._v(" @ "),n("span",{attrs:{class:"token string"}},[t._v('"Location"')]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{attrs:{class:"token function"}},[t._v(" <parameters>")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("Examples:")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"language-xtend extra-class"},[n("pre",{pre:!0,attrs:{class:"language-dsl"}},[n("code",[n("span",{attrs:{class:"token keyword"}},[t._v("Thing")]),t._v(" "),n("span",{attrs:{class:"token class-name"}},[t._v("network"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("device"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("webcam")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v('"Webcam"')]),t._v(" @ "),n("span",{attrs:{class:"token string"}},[t._v('"Living Room"')]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" hostname"),n("span",{attrs:{class:"token operator"}},[t._v("=")]),n("span",{attrs:{class:"token string"}},[t._v('"192.168.0.2"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" timeout"),n("span",{attrs:{class:"token operator"}},[t._v("=")]),n("span",{attrs:{class:"token string"}},[t._v('"5000"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("Thing")]),t._v(" "),n("span",{attrs:{class:"token class-name"}},[t._v("astro"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("moon"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("home")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" geolocation"),n("span",{attrs:{class:"token operator"}},[t._v("=")]),n("span",{attrs:{class:"token string"}},[t._v('"50.12345,10.98765"')]),n("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" interval"),n("span",{attrs:{class:"token operator"}},[t._v("=")]),n("span",{attrs:{class:"token number"}},[t._v("300")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),n("span",{attrs:{class:"token keyword"}},[t._v("Thing")]),t._v(" "),n("span",{attrs:{class:"token class-name"}},[t._v("ntp"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("ntp"),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("local")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" hostname"),n("span",{attrs:{class:"token operator"}},[t._v("=")]),n("span",{attrs:{class:"token string"}},[t._v('"de.pool.ntp.org"')]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[this._v("the values inside the "),e("code",[this._v("[]")]),this._v(" brackets are the Thing's configuration parameters, these are partly mandatory and optional")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"linking-items"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#linking-items","aria-hidden":"true"}},[this._v("#")]),this._v(" Linking Items")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("It is important to note, that Channels of discovered Things can also be linked to Items defined in "),e("code",[this._v(".items")]),this._v(" files.\nIn order to link a Thing to an Item in an "),e("code",[this._v(".items")]),this._v(" file, open the Thing in Paper UI under "),e("em",[this._v("Configuration → Things")]),this._v(".\nIn the list of Thing Channels, look for the Channel you wish to link to an Item and copy the Channel's ID.\nFor instance, a Z-Wave switch might have a Switch Channel that has an ID like this:")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-xtend extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("zwave:device:1a2b3c4d:node2:switch_binary\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("To bind that Channel to an Item in an "),e("code",[this._v(".items")]),this._v(" file, you can define an Item in the file like so:")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"language-xtend extra-class"},[n("pre",{pre:!0,attrs:{class:"language-dsl"}},[n("code",[n("span",{attrs:{class:"token keyword"}},[t._v("Switch")]),t._v(" "),n("span",{attrs:{class:"token class-name"}},[t._v("Kitchen_Light_Switch")]),t._v(" "),n("span",{attrs:{class:"token string"}},[t._v('"Kitchen Light"')]),n("span",{attrs:{class:"token tag"}},[t._v(" (Indoor_Lights)")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" channel"),n("span",{attrs:{class:"token operator"}},[t._v("=")]),n("span",{attrs:{class:"token string"}},[t._v('"zwave:device:1a2b3c4d:node2:switch_binary"')]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])}],!1,null,null,null);i.options.__file="things.md";e.default=i.exports}}]);