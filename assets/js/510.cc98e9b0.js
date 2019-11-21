(window.webpackJsonp=window.webpackJsonp||[]).push([[510],{643:function(e,t,s){"use strict";s.r(t);var a=s(1),r=Object(a.a)({},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"content"},[e._m(0),e._v(" "),s("p",[e._v("Transforms a source string on basis of the regular expression (regex) search pattern to a defined result string.")]),e._v(" "),e._m(1),e._v(" "),e._m(2),e._v(" "),s("p",[e._v("If the regular expression contains a "),s("a",{attrs:{href:"https://docs.oracle.com/javase/8/docs/api/java/util/regex/Pattern.html#cg",target:"_blank",rel:"noopener noreferrer"}},[e._v("capture group"),s("OutboundLink")],1),e._v(" defined by "),s("code",[e._v("()")]),e._v(", it returns the captured string.\nMultiple capture groups can be used to retrieve multiple strings and can be combined as a result string defined in the "),s("code",[e._v("substitution")]),e._v(".")]),e._v(" "),e._m(3),e._v(" "),e._m(4),e._v(" "),e._m(5),e._v(" "),e._m(6),e._v(" "),e._m(7),e._v(" "),e._m(8),e._v(" "),e._m(9),e._v(" "),e._m(10),s("p",[e._v("the regex transformation can be used to extract the value to display it on the label.")]),e._v(" "),e._m(11),e._v(" "),e._m(12),s("p",[e._v("The regex pattern is is defined as follows")]),e._v(" "),e._m(13),e._v(" "),e._m(14),e._v(" "),e._m(15),e._v(" "),e._m(16),s("p",[e._v("Now the resulting Number can also be used in the label to "),s("a",{attrs:{href:"https://docs.openhab.org/configuration/sitemaps.html#label-and-value-colors",target:"_blank",rel:"noopener noreferrer"}},[e._v("change the color"),s("OutboundLink")],1),e._v(" or in a rule as value for comparison.")]),e._v(" "),e._m(17),e._v(" "),e._m(18),e._v(" "),e._m(19),e._v(" "),e._m(20),e._v(" "),e._m(21),e._m(22),e._v(" "),s("p",[e._v("Please note: This profile is a one-way transformation, i.e. only values from a device towards the item are changed, the other direction is left untouched.")]),e._v(" "),e._m(23),e._v(" "),s("ul",[s("li",[e._v("A full "),s("a",{attrs:{href:"https://www.w3schools.com/jsref/jsref_obj_regexp.asp",target:"_blank",rel:"noopener noreferrer"}},[e._v("introduction"),s("OutboundLink")],1),e._v(" for regular expression is available at W3School.")]),e._v(" "),s("li",[e._v("Online validator help to check the syntax of a regex and give information how to design it.\n"),s("ul",[s("li",[s("a",{attrs:{href:"https://regex101.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Regex 101"),s("OutboundLink")],1)]),e._v(" "),s("li",[s("a",{attrs:{href:"https://regexr.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Regex R"),s("OutboundLink")],1)])])])]),e._v(" "),s("DocPreviousVersions"),e._v(" "),s("EditPageLink")],1)},[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"regex-transformation-service"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#regex-transformation-service","aria-hidden":"true"}},[this._v("#")]),this._v(" RegEx Transformation Service")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("p",[e._v("The simplest regex is in the form "),s("code",[e._v("<regex>")]),e._v(" and transforms the input string on basis of the regex pattern to a result string.\nA full regex is in the form "),s("code",[e._v("s/<regex>/<substitution>/g")]),e._v(" whereat the delimiter "),s("code",[e._v("s")]),e._v(" and the regex flag "),s("code",[e._v("g")]),e._v(" have a special meaning.")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("p",[e._v("The regular expression in the format "),s("code",[e._v("s/<regex>/result/g")]),e._v(", replaces all occurrences of "),s("code",[e._v("<regex>")]),e._v(" in the source string with "),s("code",[e._v("result")]),e._v(".\nThe regular expression in the format "),s("code",[e._v("s/<regex>/result/")]),e._v(" (without "),s("code",[e._v("g")]),e._v("), replaces the first occurrence of "),s("code",[e._v("<regex>")]),e._v(" in the source string with "),s("code",[e._v("result")]),e._v(".")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("p",[e._v("The transformation can be set to be restricted to only match if the input string begins with a character by prepending "),s("code",[e._v("^")]),e._v(" to the beginning of a pattern or to only match if the input string ends with a specified character by appending "),s("code",[e._v("$")]),e._v(" at the end.\nSo the regex "),s("code",[e._v("^I.*b$")]),e._v(" only matches when the input string starts with "),s("code",[e._v("I")]),e._v(" and ends with "),s("code",[e._v("b")]),e._v(", like in "),s("code",[e._v("I'm Bob")]),e._v(". Both can be used alone or in combination.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("The special characters "),t("code",[this._v("\\.[]{}()*+-?^$|")]),this._v(" have to be escaped when they should be used as literal characters.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"examples"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#examples","aria-hidden":"true"}},[this._v("#")]),this._v(" Examples")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"basic-examples"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#basic-examples","aria-hidden":"true"}},[this._v("#")]),this._v(" Basic Examples")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("table",[s("thead",[s("tr",[s("th",[e._v("Input String")]),e._v(" "),s("th",[e._v("Regular Expression")]),e._v(" "),s("th",[e._v("Output String")]),e._v(" "),s("th",[e._v("Explanation")])])]),e._v(" "),s("tbody",[s("tr",[s("td",[s("code",[e._v("My network does not work.")])]),e._v(" "),s("td",[s("code",[e._v("s/work/cast/g")])]),e._v(" "),s("td",[s("code",[e._v('"My netcast does not cast."')])]),e._v(" "),s("td",[e._v('Replaces all matches of the string "work" with the string "cast".')])]),e._v(" "),s("tr",[s("td",[s("code",[e._v("My network does not work.")])]),e._v(" "),s("td",[s("code",[e._v(".*(\\snot).*")])]),e._v(" "),s("td",[s("code",[e._v('" not"')])]),e._v(" "),s("td",[e._v('Returns only the first match and strips of the rest, "\\s" defines a  whitespace.')])]),e._v(" "),s("tr",[s("td",[s("code",[e._v("temp=44.0'C")])]),e._v(" "),s("td",[s("code",[e._v("temp=(.*?)'C)")])]),e._v(" "),s("td",[s("code",[e._v("44.0")])]),e._v(" "),s("td",[e._v("Matches whole string and returns the content of the captcha group "),s("code",[e._v("(.?)")]),e._v(".")])]),e._v(" "),s("tr",[s("td",[s("code",[e._v("48312")])]),e._v(" "),s("td",[s("code",[e._v("s/(.{2})(.{3})/$1.$2/g")])]),e._v(" "),s("td",[s("code",[e._v("48.312")])]),e._v(" "),s("td",[e._v("Captures 2 and 3 character, returns first capture group adds a dot and the second capture group. This divides by 1000.")])])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"example-in-setup"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#example-in-setup","aria-hidden":"true"}},[this._v("#")]),this._v(" Example In Setup")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("strong",[this._v("Input String")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[this._v("temp")]),t("span",{pre:!0,attrs:{class:"token operator"}},[this._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[this._v("44.0")]),this._v("'C\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("strong",[this._v(".items")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"language-csv extra-class"},[s("pre",{pre:!0,attrs:{class:"language-dsl"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("String")]),e._v("  "),s("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("Temperature_str")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"Temperature [REGEX(.*=(\\\\d*.\\\\d*).*):%s °C]"')]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("Number")]),e._v("  "),s("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("Temperature")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"Temperature [%.1f °C]"')]),e._v("\n")])])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ul",[s("li",[s("code",[e._v(".*")]),e._v(" match any character, zero and unlimited times")]),e._v(" "),s("li",[s("code",[e._v("=")]),e._v(" match the equal sign literally, used to find the position")]),e._v(" "),s("li",[s("code",[e._v("()")]),e._v(" capture group match\n"),s("ul",[s("li",[s("code",[e._v("\\d*")]),e._v(" match a digit (equal to [0-9]), zero and unlimited times, the backslash has to be escaped see "),s("a",{attrs:{href:"#Differences-to-plain-Regex"}},[e._v("string vs plain")])]),e._v(" "),s("li",[s("code",[e._v(".")]),e._v(" match the dot literally")]),e._v(" "),s("li",[s("code",[e._v("\\w*")]),e._v(" match a word character (equal to [a-zA-Z_0-9]), zero and unlimited times, the backslash has to be escaped see "),s("a",{attrs:{href:"#Differences-to-plain-Regex"}},[e._v("string vs plain")])])])]),e._v(" "),s("li",[s("code",[e._v(".*")]),e._v(" match any character, zero and unlimited times")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("The result will be "),t("code",[this._v("44.0")]),this._v(" and displayed on the label as "),t("code",[this._v("Temperature 44.0°C")]),this._v(".\nA better solution would be to use the regex on the result from the binding either in a rule or when the binding allows it on the output channel.\nThus the value "),t("code",[this._v("44.0")]),this._v(" would be saved as a number.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("strong",[this._v(".rules")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-rules"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("rule")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"Convert String to Item Number"')]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("when")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("Item")]),e._v(" Temperature_str "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("changed")]),e._v("\n "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("then")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// use the transformation service to retrieve the value")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("val")]),e._v(" newValue "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("transform")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"REGEX"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('".*=(\\\\d*.\\\\d*).*"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function-name"}},[e._v("Temperature_str")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("state"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("toString")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// post the new value to the Number Item")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token function-name"}},[e._v("Temperature")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("postUpdate")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v(" newValue "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("end")]),e._v("\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"differences-to-plain-regex"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#differences-to-plain-regex","aria-hidden":"true"}},[this._v("#")]),this._v(" Differences to plain Regex")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("p",[e._v("The regex is embedded in a string so when double quotes "),s("code",[e._v('"')]),e._v(" are used in a regex they need to be escaped "),s("code",[e._v('\\"')]),e._v(" to keep the string intact.\nAs the escape character of strings is the backslash this has to be escaped additionally.\nTo use a dot as literal in the regex it has to be escape "),s("code",[e._v("\\.")]),e._v(", but in a string it has to be escaped twice "),s("code",[e._v('"\\\\."')]),e._v(".\nThe first backslash escapes the second backslash in the string so it can be used in the regex.\nUsing a backslash in a Regex as literal "),s("code",[e._v("\\\\")]),e._v(" will have this form "),s("code",[e._v('"\\\\\\\\"')]),e._v(".")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"usage-as-a-profile"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#usage-as-a-profile","aria-hidden":"true"}},[this._v("#")]),this._v(" Usage as a Profile")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("p",[e._v("The functionality of this "),s("code",[e._v("TransformationService")]),e._v(" can be used in a "),s("code",[e._v("Profile")]),e._v(" on an "),s("code",[e._v("ItemChannelLink")]),e._v(" too.\nTo do so, it can be configured in the "),s("code",[e._v(".items")]),e._v(" file as follows:")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("String")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token generics"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("<")]),e._v("itemName"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(">")])]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v(" channel"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"<channelUID>"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("profile"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"transform:REGEX"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" function"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"<regex>"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" sourceFormat"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"<valueFormat>"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("p",[e._v("The regular expression to be executed has to be set in the "),s("code",[e._v("function")]),e._v(" parameter.\nThe parameter "),s("code",[e._v("sourceFormat")]),e._v(" is optional and can be used to format the input value "),s("strong",[e._v("before")]),e._v(" the transformation, i.e. "),s("code",[e._v("%.3f")]),e._v(".\nIf omitted the default is "),s("code",[e._v("%s")]),e._v(", so the input value will be put into the transformation without any format changes.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"further-reading"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#further-reading","aria-hidden":"true"}},[this._v("#")]),this._v(" Further Reading")])}],!1,null,null,null);t.default=r.exports}}]);