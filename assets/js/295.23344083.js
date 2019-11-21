(window.webpackJsonp=window.webpackJsonp||[]).push([[295],{1020:function(t,e,s){"use strict";s.r(e);var a=s(1),r=Object(a.a)({},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),s("p",[t._v("This binding reads and analyzes log files. Search patterns are fully configurable, therefore different kind of log files should be possible to monitor by this binding.\nWhen certain log events are recognized, openHAB rules can be used to send notification about the event e.g by email for further analysis.")]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),s("p",[t._v("Search patterns follows Java regular expression syntax. See "),s("a",{attrs:{href:"https://docs.oracle.com/javase/8/docs/api/java/util/regex/Pattern.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://docs.oracle.com/javase/8/docs/api/java/util/regex/Pattern.html"),s("OutboundLink")],1),t._v(".")]),t._v(" "),t._m(7),t._v(" "),s("p",[t._v("List of channels")]),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),t._m(11),t._m(12),t._v(" "),t._m(13),t._m(14),t._v(" "),t._m(15),t._m(16),t._v(" "),t._m(17),s("p",[t._v("Use the rules with your Telegram Bot (need openHAB Telegram Action installed and configured)")]),t._v(" "),t._m(18),t._m(19),t._v(" "),t._m(20),t._v(" "),s("p",[t._v("Check thing status for errors.")]),t._v(" "),t._m(21),t._v(" "),s("p",[t._v("Enable DEBUG logging in karaf console to see more precise error messages:")]),t._v(" "),t._m(22),t._v(" "),s("p",[t._v("See "),s("a",{attrs:{href:"https://www.openhab.org/docs/administration/logging.html#defining-what-to-log",target:"_blank",rel:"noopener noreferrer"}},[t._v("openHAB2 logging docs"),s("OutboundLink")],1),t._v(" for more help.")]),t._v(" "),s("DocPreviousVersions"),t._v(" "),s("EditPageLink")],1)},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"log-reader-binding"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#log-reader-binding","aria-hidden":"true"}},[this._v("#")]),this._v(" Log Reader Binding")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"supported-things"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#supported-things","aria-hidden":"true"}},[this._v("#")]),this._v(" Supported Things")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("This binding supports one ThingType: "),e("code",[this._v("reader")]),this._v(".\nA reader supports 3 separate channels")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("One for errors")]),this._v(" "),e("li",[this._v("one for warnings")]),this._v(" "),e("li",[this._v("one custom channel for other purposes.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"thing-configuration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#thing-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Thing Configuration")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("The "),e("code",[this._v("reader")]),this._v(" Thing has the following configuration parameters:")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("table",[s("thead",[s("tr",[s("th",[t._v("Parameter")]),t._v(" "),s("th",[t._v("Type")]),t._v(" "),s("th",[t._v("Required")]),t._v(" "),s("th",[t._v("Default if omitted")]),t._v(" "),s("th",[t._v("Description")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("code",[t._v("filePath")])]),t._v(" "),s("td",[t._v("String")]),t._v(" "),s("td",[t._v("yes")]),t._v(" "),s("td",[s("code",[t._v("${OPENHAB_LOGDIR}/openhab.log")])]),t._v(" "),s("td",[t._v("Path to log file. ${OPENHAB_LOGDIR} is automatically replaced by the correct directory.")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("refreshRate")])]),t._v(" "),s("td",[t._v("integer")]),t._v(" "),s("td",[t._v("no")]),t._v(" "),s("td",[s("code",[t._v("1000")])]),t._v(" "),s("td",[t._v("Time in milliseconds between individual log reads.")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("errorPatterns")])]),t._v(" "),s("td",[t._v("String")]),t._v(" "),s("td",[t._v("no")]),t._v(" "),s("td",[s("code",[t._v("ERROR+")])]),t._v(" "),s("td",[t._v("Search patterns separated by | character for error events.")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("errorBlacklistingPatterns")])]),t._v(" "),s("td",[t._v("String")]),t._v(" "),s("td",[t._v("no")]),t._v(" "),s("td"),t._v(" "),s("td",[t._v("Search patterns for blacklisting unwanted error events separated by | character.")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("warningPatterns")])]),t._v(" "),s("td",[t._v("String")]),t._v(" "),s("td",[t._v("no")]),t._v(" "),s("td",[s("code",[t._v("WARN+")])]),t._v(" "),s("td",[t._v("Search patterns separated by | character for warning events.")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("warningBlacklistingPatterns")])]),t._v(" "),s("td",[t._v("String")]),t._v(" "),s("td",[t._v("no")]),t._v(" "),s("td"),t._v(" "),s("td",[t._v("Search patterns for blacklisting unwanted warning events separated by | character.")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("customPatterns")])]),t._v(" "),s("td",[t._v("String")]),t._v(" "),s("td",[t._v("no")]),t._v(" "),s("td"),t._v(" "),s("td",[t._v("Search patterns separated by | character for custom events.")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("customBlacklistingPatterns")])]),t._v(" "),s("td",[t._v("String")]),t._v(" "),s("td",[t._v("no")]),t._v(" "),s("td"),t._v(" "),s("td",[t._v("Search patterns for blacklisting unwanted custom events separated by | character.")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"channels"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#channels","aria-hidden":"true"}},[this._v("#")]),this._v(" Channels")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("table",[s("thead",[s("tr",[s("th",[t._v("Channel Type ID")]),t._v(" "),s("th",[t._v("Item Type")]),t._v(" "),s("th",[t._v("Description")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("code",[t._v("lastErrorEvent")])]),t._v(" "),s("td",[s("code",[t._v("String")])]),t._v(" "),s("td",[t._v("Displays content of last [ERROR] event")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("lastWarningEvent")])]),t._v(" "),s("td",[s("code",[t._v("String")])]),t._v(" "),s("td",[t._v("Displays content of last [WARN] event")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("lastCustomEvent")])]),t._v(" "),s("td",[s("code",[t._v("String")])]),t._v(" "),s("td",[t._v("Displays content of last [CUSTOM] event")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("errorEvents")])]),t._v(" "),s("td",[s("code",[t._v("Number")])]),t._v(" "),s("td",[t._v("Displays number of [ERROR] lines matched to search pattern")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("warningEvents")])]),t._v(" "),s("td",[s("code",[t._v("Number")])]),t._v(" "),s("td",[t._v("Displays number of [WARN] lines matched to search pattern")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("customEvents")])]),t._v(" "),s("td",[s("code",[t._v("Number")])]),t._v(" "),s("td",[t._v("Displays number of [CUSTOM] lines matched to search pattern")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("logRotated")])]),t._v(" "),s("td",[s("code",[t._v("DateTime")])]),t._v(" "),s("td",[t._v("Last time when log rotated recognized")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("newErrorEvent")])]),t._v(" "),s("td",[t._v("-")]),t._v(" "),s("td",[t._v("Trigger channel for last [ERROR] line")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("newWarningEvent")])]),t._v(" "),s("td",[t._v("-")]),t._v(" "),s("td",[t._v("Trigger channel for last [WARN] line")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("newCustomEvent")])]),t._v(" "),s("td",[t._v("-")]),t._v(" "),s("td",[t._v("Trigger channel for last [CUSTOM] line")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"examples"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#examples","aria-hidden":"true"}},[this._v("#")]),this._v(" Examples")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"example-things"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#example-things","aria-hidden":"true"}},[this._v("#")]),this._v(" example.things")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-xtend extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v('\nlogreader:reader:openhablog[ refreshRate=1000, errorPatterns="ERROR+", errorBlacklistingPatterns="annoying error which should be ignored|Another annoying error which should be ignored" ]\n\n')])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"example-items"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#example-items","aria-hidden":"true"}},[this._v("#")]),this._v(" example.items")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-xtend extra-class"},[s("pre",{pre:!0,attrs:{class:"language-dsl"}},[s("code",[t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DateTime")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("logreaderLogRotated")]),t._v("        "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Last Log Rotation [%1$tY.%1$tm.%1$te %1$tR]"')]),t._v("  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v(" <time>")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" channel"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"logreader:reader:openhablog:logRotated"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Number")]),t._v("   "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("logreaderErrors")]),t._v("            "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Error events matched [%d]"')]),t._v("                    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v(" <alarm>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" channel"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"logreader:reader:openhablog:errorEvents"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("String")]),t._v("   "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("logreaderLastError")]),t._v("         "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Last error [%s]"')]),t._v("                                       "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" channel"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"logreader:reader:openhablog:lastErrorEvent"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Number")]),t._v("   "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("logreaderWarnings")]),t._v("          "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Warning events matched [%d]"')]),t._v("                  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v(" <alarm>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" channel"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"logreader:reader:openhablog:warningEvents"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("String")]),t._v("   "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("logreaderLastWarning")]),t._v("       "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Last warning [%s]"')]),t._v("                                     "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" channel"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"logreader:reader:openhablog:lastWarningEvent"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Number")]),t._v("   "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("logreaderCustoms")]),t._v("           "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Custom events matched [%d]"')]),t._v("                   "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v(" <alarm>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" channel"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"logreader:reader:openhablog:customEvents"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("String")]),t._v("   "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("logreaderLastCustom")]),t._v("        "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Last Custom [%s]"')]),t._v("                                      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" channel"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"logreader:reader:openhablog:lastCustomEvent"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"example-sitemap"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#example-sitemap","aria-hidden":"true"}},[this._v("#")]),this._v(" example.sitemap")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-xtend extra-class"},[s("pre",{pre:!0,attrs:{class:"language-dsl"}},[s("code",[t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("sitemap")]),t._v(" logreader_example "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("label")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Example"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Frame")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("label")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"openHAB Log Reader"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Text")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("item")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("logreaderErrors\n\t\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Text")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("item")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("logreaderLastError\n\t\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Text")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("item")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("logreaderWarnings\n\t\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Text")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("item")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("logreaderLastWarning\n\t\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Text")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("item")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("logreaderCustoms\n\t\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Text")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("item")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("logreaderLastCustom\n\t\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Text")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("item")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("logreaderLogRotated\n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"example-rules"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#example-rules","aria-hidden":"true"}},[this._v("#")]),this._v(" example.rules")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-xtend extra-class"},[s("pre",{pre:!0,attrs:{class:"language-rules"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("rule")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"LogReader"')]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("when")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Channel")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"logreader:reader:openhablog:newErrorEvent"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("triggered")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("then")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// do something")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("end")]),t._v("\n")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-xtend extra-class"},[s("pre",{pre:!0,attrs:{class:"language-rules"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("rule")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"LogReader"')]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("when")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Channel")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'logreader:reader:openhablog:newErrorEvent'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("triggered")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("then")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// do something")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sendTelegram")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"bot3"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"*ERROR* LogReader Event!\\n%s Errors are in the log! Here is the last row of it:\\n`%s`"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" logreaderErrors"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("state"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("toString")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" logreaderLastError"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("state"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("toString")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("end")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Be careful when sending e.g. email notifications.\nYou could easily send thousand of "),e("em",[this._v("spam")]),this._v(" emails in short period if e.g. one binding is in error loop.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"thing-status"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#thing-status","aria-hidden":"true"}},[this._v("#")]),this._v(" Thing status")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"verbose-logging"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#verbose-logging","aria-hidden":"true"}},[this._v("#")]),this._v(" Verbose logging")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("code",[this._v("log:set DEBUG org.openhab.binding.logreader")])])}],!1,null,null,null);e.default=r.exports}}]);