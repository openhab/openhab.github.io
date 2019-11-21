(window.webpackJsonp=window.webpackJsonp||[]).push([[258],{959:function(t,e,a){"use strict";a.r(e);var s=a(1),n=Object(s.a)({},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"http-binding"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#http-binding","aria-hidden":"true"}},[t._v("#")]),t._v(" HTTP Binding "),a("Badge",{attrs:{type:"warn",text:"v1"}})],1),t._v(" "),a("AddonLogo"),t._v(" "),a("p",[t._v("If you want to have openHAB request a URL when commands are sent to items, or have it poll a given URL frequently and update items' states, install and configure this binding.")]),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._m(5),t._v(" "),t._m(6),t._m(7),t._v(" "),a("p",[t._v("The syntax for the HTTP binding configuration string is given below.")]),t._v(" "),a("p",[t._v('Receive repeated updates from a URL ("in" binding):')]),t._v(" "),t._m(8),a("p",[t._v('Send commands to a URL ("out" binding):')]),t._v(" "),t._m(9),t._m(10),t._v(" "),a("p",[t._v('For the "out" binding, there are two special commands available:')]),t._v(" "),t._m(11),t._v(" "),a("p",[t._v("Here are some examples of valid binding configuration strings:")]),t._v(" "),t._m(12),a("p",[t._v("Here are full item examples of sending content in the body of a POST method (new in 1.9.0):")]),t._v(" "),t._m(13),a("p",[t._v("As a result, lines in the items file might look like the following:")]),t._v(" "),t._m(14),t._m(15),t._v(" "),a("p",[t._v("The given URL can be enhanced using the well known Syntax of the "),a("a",{attrs:{href:"http://docs.oracle.com/javase/6/docs/api/java/util/Formatter.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("java.util.Formatter"),a("OutboundLink")],1),t._v(". The binding currently adds these parameters to the "),a("code",[t._v("String.format()")]),t._v(" automatically:")]),t._v(" "),t._m(16),t._v(" "),a("p",[t._v("To reference these values the indexed format syntax is used. A well prepared URL looks like this:")]),t._v(" "),t._m(17),t._m(18),t._v(" "),t._m(19),t._v(" "),t._m(20),t._v(" "),a("p",[t._v("Example:")]),t._v(" "),t._m(21),t._m(22),t._v(" "),a("p",[t._v("It is possible to use optional HTTP Basic authentication to provide a username and password for a request. There is a very good article on Wikipedia for "),a("a",{attrs:{href:"https://en.wikipedia.org/wiki/Basic_access_authentication",target:"_blank",rel:"noopener noreferrer"}},[t._v("Basic access authentication"),a("OutboundLink")],1),t._v(". In the earlier days it was possible to prepend "),a("code",[t._v("username:password@")]),t._v(" to the hostname in the url. The use of this format is deprecated since RFC 3986.")]),t._v(" "),t._m(23),t._v(" "),a("p",[t._v("When your username or password contains reserved characters like an "),a("code",[t._v("@")]),t._v(" or a "),a("code",[t._v(":")]),t._v(" symbol you should encode the username and password in Base64 and use a HTTP header. The header's value is the base64-encoding of "),a("code",[t._v("username:password")]),t._v(" (which results in "),a("code",[t._v("dXNlcm5hbWU6cGFzc3dvcmQ=")]),t._v("). There is an online decoder/encoder "),a("a",{attrs:{href:"https://www.base64encode.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("p",[t._v("Example:")]),t._v(" "),t._m(24),t._m(25),t._v(" "),a("p",[t._v("You can use the JavaScript transformation:")]),t._v(" "),t._m(26),t._m(27),t._v(" "),t._m(28),a("p",[t._v("You can also use the JsonPath transformation, which allows a direct query of JSON data:")]),t._v(" "),t._m(29),a("p",[a("a",{attrs:{href:"http://jsonpath.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("jsonpath.com"),a("OutboundLink")],1),t._v(" is a handy tool to create the JSONPATH transformation.")]),t._v(" "),a("DocPreviousVersions"),t._v(" "),a("EditPageLink")],1)},[function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"binding-configuration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#binding-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Binding Configuration")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("The HTTP binding can be configured in the file "),e("code",[this._v("services/http.cfg")]),this._v(".  However, all configuration properties are optional.")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("table",[a("thead",[a("tr",[a("th",[t._v("Property")]),t._v(" "),a("th",[t._v("Default")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("timeout")]),t._v(" "),a("td",[t._v("5000")]),t._v(" "),a("td",[t._v("the binding waits for HTTP responses for up to five seconds (5000 milliseconds).  For example, to wait up to 20 seconds for responses, change this value to 20000")])]),t._v(" "),a("tr",[a("td",[t._v("granularity")]),t._v(" "),a("td",[t._v("1000")]),t._v(" "),a("td",[t._v("the binding checks once every second (1000 milliseconds) to see if any bound items should be retrieved.  For example, to only check once every five seconds, change this value to 5000")])]),t._v(" "),a("tr",[a("td",[t._v("format")]),t._v(" "),a("td",[t._v("true")]),t._v(" "),a("td",[t._v("the binding will format the URL to include the current state or command, or the current date/time as described "),a("a",{attrs:{href:"#dynamic-urls"}},[t._v("below")]),t._v(" However, there may be cases where you want to include the special formatting characters in the URL and suppress the formatting, in which case change this value to "),a("code",[t._v("false")])])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("<cacheItemName1>")]),t._v(".url")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("URL of the first cache item: the binding supports page caching. Caching is usable when multiple items could be parsed from the same URL.  Choose a convenient name for "),a("code",[t._v("<cacheItemName1>")]),t._v(" and this can be used in item binding strings (described below)")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("<cacheItemName1>")]),t._v(".updateInterval")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("Update interval in milliseconds for first cache item: how often the binding will retrieve the URL specified in "),a("code",[t._v("<cacheItemName1>")]),t._v(".url")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("<cacheItemName2>")]),t._v(".url")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("URL of the second cache item: the binding supports page caching. Caching is usable when multiple items could be parsed from the same URL.  Choose a convenient name for "),a("code",[t._v("<cacheItemName1>")]),t._v(" and this can be used in item binding strings (described below)")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("<cacheItemName2>")]),t._v(".updateInterval")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("Update interval in milliseconds for second cache item: how often the binding will retrieve the URL specified in "),a("code",[t._v("<cacheItemName1>")]),t._v(".url")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"example-of-how-to-configure-an-http-cache-item"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#example-of-how-to-configure-an-http-cache-item","aria-hidden":"true"}},[this._v("#")]),this._v(" Example of how to configure an HTTP cache item")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("weatherCache.url=http://weather.yahooapis.com/forecastrss?w=566473&u=c\nweatherCache.updateInterval=60000\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("You can use "),e("code",[this._v("weatherCache")]),this._v(" in your items like this:")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-dsl"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Number")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("temperature")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" http"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"<[weatherCache:10000:XSLT(demo_yahoo_weather_temperature.xsl)]"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Number")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("windSpeed")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" http"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"<[weatherCache:10000:XSLT(demo_yahoo_weather_wind_speed.xsl)]"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"item-configuration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#item-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Item Configuration")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v('http="<[<url>:<refreshintervalinmilliseconds>:<transformationrule>]"\n')])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v('http=">[<command>:<httpmethod>:<url>:<postcontent>]"\n')])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[t._v("The "),a("code",[t._v(":<postcontent>")]),t._v(" section is optional, new in version 1.9.0, and only applies when "),a("code",[t._v("<httpmethod>")]),t._v(" is "),a("code",[t._v("POST")]),t._v(".  The media type used is always "),a("code",[t._v("text/plain")]),t._v(".  "),a("code",[t._v("<postcontent>")]),t._v(" can be a literal string, the special keyword "),a("code",[t._v("default")]),t._v(" which means the string version of the command, or a transformation like "),a("code",[t._v("MAP(my.map)")]),t._v(".")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[e("code",[this._v("*")]),this._v(" - this means the following URL is called regardless of which command has been issued")]),this._v(" "),e("li",[e("code",[this._v("CHANGED")]),this._v(" - this means the following URL is called whenever the state of the given item has changed")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v('http=">[ON:POST:http://www.domain.org/home/lights/23871/?status=on&type=text] >[OFF:POST:http://www.domain.org/home/lights/23871/?status=off]"\nhttp="<[http://www.domain.org/weather/openhabcity/daily:60000:REGEX(.*?<title>(.*?)</title>.*)]"\nhttp=">[ON:POST:http://www.domain.org/home/lights/23871/?status=on&type=text] >[OFF:POST:http://www.domain.org/home/lights/23871/?status=off]"\nhttp=">[*:POST:http://www.domain.org/home/lights/23871/?status=%2$s&type=text] <[http://www.domain.org/weather/openhabcity/daily:60000:REGEX(.*?<title>(.*?)</title>.*)]"\nhttp=">[CHANGED:POST:http://www.domain.org/home/lights/23871/?status=%2$s&date=%1$tY-%1$tm-%1$td]"\n')])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-dsl"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Switch")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MyItem1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" http"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('">[ON:POST:http://sample.com/myitem1:on] >[OFF:POST:http://sample.com/myitem1:off]"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Switch")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MyItem2")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" http"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('">[*:POST:http://sample.com/myitem2:default]"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Switch")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MyItem3")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" http"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('">[*:POST:http://sample.com/myitem3:MAP(onoff.map)]"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-dsl"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Number")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Weather_Temperature")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Temperature [%.1f °C]"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v(" <temperature>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token tag"}},[t._v(" (Weather)")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" http"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"<[http://weather.yahooapis.com/forecastrss?w=638242&u=c:60000:XSLT(demo_yahoo_weather.xsl)]"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"dynamic-urls"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#dynamic-urls","aria-hidden":"true"}},[this._v("#")]),this._v(" Dynamic URLs")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ol",[e("li",[this._v("the current date (as java.util.Date)")]),this._v(" "),e("li",[this._v("the current Command or State")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("http://www.domain.org/home/lights/23871/?status=%2$s&date=%1$tY-%1$tm-%1$td\n")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[t._v("Each format string starts with '%' followed by an optional index e.g. "),a("code",[t._v("2$")]),t._v(", where "),a("code",[t._v("2")]),t._v(" is the index of the parameter arg given to the format(format, args...) method. Besides the index you have to specify the format to be applied to the argument. eg. "),a("code",[t._v("s")]),t._v(" to format a String in the given example or "),a("code",[t._v("d")]),t._v(" to format an Integer, or "),a("code",[t._v(".1f")]),t._v(" to format a floating point number with one decimal place.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"http-headers"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#http-headers","aria-hidden":"true"}},[this._v("#")]),this._v(" HTTP headers")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("It is possible to define optional HTTP headers which will be sent during the HTTP method call. Those optional headers can be added to the url in the form "),e("code",[this._v("header1=value1&header2=value2...")]),this._v(". This headers string should be enclosed in curly brackets right after the url itself (before the separation colon).")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v('http="<[https://www.flukso.net/api/sensor/xxxx?interval=daily{X-Token=mytoken&X-version=1.0}:60000:REGEX(.*?<title>(.*?)</title>(.*))]"\n')])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"http-basic-authentication"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#http-basic-authentication","aria-hidden":"true"}},[this._v("#")]),this._v(" HTTP Basic authentication")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"authorization-header"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#authorization-header","aria-hidden":"true"}},[this._v("#")]),this._v(" Authorization header")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v('http="<[http://sample.com{Authorization=Basic dXNlcm5hbWU6cGFzc3dvcmQ=}]"\n')])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"handling-json"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#handling-json","aria-hidden":"true"}},[this._v("#")]),this._v(" Handling JSON")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-dsl"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("String")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DirecTV1_Ch")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Current Channel"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" http"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"<[http://10.90.30.100:8080/tv/getTuned:30000:JS(getValue.js)]"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Then create the file "),e("code",[this._v("transform/getValue.js")]),this._v(":")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("JSON.parse(input).title;\n")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-dsl"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Number")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Weather_OutTemp")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Value: [%.1f °C]"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" http"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"<[http://weewx/now.json:60000:JSONPATH($.stats.current.outTemp)]"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])}],!1,null,null,null);e.default=n.exports}}]);