(window.webpackJsonp=window.webpackJsonp||[]).push([[306],{1036:function(t,e,s){"use strict";s.r(e);var a=s(1),r=Object(a.a)({},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),s("p",[t._v("The meteoblue binding uses the "),s("a",{attrs:{href:"https://content.meteoblue.com/en/content/view/full/4511",target:"_blank",rel:"noopener noreferrer"}},[t._v("meteoblue weather service"),s("OutboundLink")],1),t._v("\nto provide weather information.")]),t._v(" "),t._m(1),t._v(" "),s("p",[t._v("The binding has two thing types.")]),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),s("p",[t._v("Each of the following channels is supported in all of the channel groups.")]),t._v(" "),s("table",[t._m(12),t._v(" "),s("tbody",[t._m(13),t._v(" "),t._m(14),t._v(" "),t._m(15),t._v(" "),t._m(16),t._v(" "),t._m(17),t._v(" "),t._m(18),t._v(" "),t._m(19),t._v(" "),t._m(20),t._v(" "),t._m(21),t._v(" "),t._m(22),t._v(" "),t._m(23),t._v(" "),t._m(24),t._v(" "),t._m(25),t._v(" "),t._m(26),t._v(" "),t._m(27),t._v(" "),t._m(28),t._v(" "),t._m(29),t._v(" "),t._m(30),t._v(" "),t._m(31),t._v(" "),t._m(32),t._v(" "),t._m(33),t._v(" "),t._m(34),t._v(" "),t._m(35),t._v(" "),t._m(36),t._v(" "),t._m(37),t._v(" "),t._m(38),t._v(" "),t._m(39),t._v(" "),s("tr",[s("td"),t._v(" "),s("td"),t._v(" "),s("td",[t._v("Valid values range from 1 - 17 (see the "),s("a",{attrs:{href:"https://content.meteoblue.com/nl/service-specifications/standards/symbols-and-pictograms#eztoc14635_1_6",target:"_blank",rel:"noopener noreferrer"}},[t._v("meteoblue docs"),s("OutboundLink")],1),t._v(")")])]),t._v(" "),t._m(40),t._v(" "),t._m(41),t._v(" "),t._m(42),t._v(" "),t._m(43),t._v(" "),t._m(44),t._v(" "),t._m(45)])]),t._v(" "),t._m(46),t._v(" "),s("p",[t._v("To show the weather image icons in the UI, the "),s("a",{attrs:{href:"https://content.meteoblue.com/hu/service-specifications/standards/symbols-and-pictograms",target:"_blank",rel:"noopener noreferrer"}},[t._v("image files"),s("OutboundLink")],1),t._v(" need to be downloaded and installed in the "),s("code",[t._v("conf/icons/classic")]),t._v(" folder.")]),t._v(" "),t._m(47),t._v(" "),s("p",[t._v('The files to extract from the zip file and install in the folder will be named "iday*.png" or "iday*.svg".')]),t._v(" "),t._m(48),t._v(" "),s("p",[t._v("demo.things:")]),t._v(" "),t._m(49),s("p",[t._v("demo.items:")]),t._v(" "),t._m(50),s("p",[t._v("demo.sitemap:")]),t._v(" "),t._m(51),s("DocPreviousVersions"),t._v(" "),s("EditPageLink")],1)},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"meteoblue-binding"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#meteoblue-binding","aria-hidden":"true"}},[this._v("#")]),this._v(" meteoblue Binding")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"supported-things"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#supported-things","aria-hidden":"true"}},[this._v("#")]),this._v(" Supported Things")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("The first thing type is the weather thing. Each weather thing has the ID "),e("code",[this._v("weather")]),this._v(" and retrieves weather data for one location.\nThe second thing type is the bridge thing. The bridge thing, which has the ID "),e("code",[this._v("bridge")]),this._v(", holds the API key to be used for all of\nits child things.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"thing-configuration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#thing-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Thing Configuration")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"bridge-thing-configuration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#bridge-thing-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Bridge Thing Configuration")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("table",[s("thead",[s("tr",[s("th",[t._v("Property")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("Default Value")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("Required?")]),t._v(" "),s("th",[t._v("Description")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("apiKey")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}}),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),s("td",[t._v("The api key to be used with the meteoblue service")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"weather-thing-configuration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#weather-thing-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Weather Thing Configuration")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("table",[s("thead",[s("tr",[s("th",[t._v("Property")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("Default Value")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("Required?")]),t._v(" "),s("th",[t._v("Description")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("location")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}}),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),s("td",[t._v("The latitude, longitude, and optionally altitude of the location, separated by commas (e.g. 45.6,45.7,45.8). Altitude, if given, should be in meters.")])]),t._v(" "),s("tr",[s("td",[t._v("refresh")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("240")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("No")]),t._v(" "),s("td",[t._v("The time between calls to refresh the weather data, in minutes")])]),t._v(" "),s("tr",[s("td",[t._v("serviceType")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("NonCommercial")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("No")]),t._v(" "),s("td",[t._v("The service type to be used.  Either 'Commercial' or 'NonCommercial'")])]),t._v(" "),s("tr",[s("td",[t._v("timeZone")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}}),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("No")]),t._v(" "),s("td",[t._v("The time zone to use for the location. Optional, but the service recommends it be specified. The service gets the time zone from a database if not specified.")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"channels"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#channels","aria-hidden":"true"}},[this._v("#")]),this._v(" Channels")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"channel-groups"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#channel-groups","aria-hidden":"true"}},[this._v("#")]),this._v(" Channel Groups")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("table",[s("thead",[s("tr",[s("th",[t._v("Group Name")]),t._v(" "),s("th",[t._v("Description")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("forecastToday")]),t._v(" "),s("td",[t._v("Today's forecast")])]),t._v(" "),s("tr",[s("td",[t._v("forecastTomorrow")]),t._v(" "),s("td",[t._v("Tomorrow's forecast")])]),t._v(" "),s("tr",[s("td",[t._v("forecastDay2")]),t._v(" "),s("td",[t._v("Forecast 2 days out")])]),t._v(" "),s("tr",[s("td",[t._v("forecastDay3")]),t._v(" "),s("td",[t._v("Forecast 3 days out")])]),t._v(" "),s("tr",[s("td",[t._v("forecastDay4")]),t._v(" "),s("td",[t._v("Forecast 4 days out")])]),t._v(" "),s("tr",[s("td",[t._v("forecastDay5")]),t._v(" "),s("td",[t._v("Forecast 5 days out")])]),t._v(" "),s("tr",[s("td",[t._v("forecastDay6")]),t._v(" "),s("td",[t._v("Forecast 6 days out")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"channels-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#channels-2","aria-hidden":"true"}},[this._v("#")]),this._v(" Channels")])},function(){var t=this.$createElement,e=this._self._c||t;return e("thead",[e("tr",[e("th",[this._v("Channel")]),this._v(" "),e("th",[this._v("Item Type")]),this._v(" "),e("th",[this._v("Description")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",[this._v("height")]),this._v(" "),e("td",[this._v("Number:Length")]),this._v(" "),e("td",[this._v("Altitude above sea-level of the location (in meters)")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",[this._v("forecastDate")]),this._v(" "),e("td",[this._v("DateTime")]),this._v(" "),e("td",[this._v("Forecast date")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",[this._v("UVIndex")]),this._v(" "),e("td",[this._v("Number")]),this._v(" "),e("td",[this._v("UltraViolet radiation index at ground level (0-16)")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",[this._v("minTemperature")]),this._v(" "),e("td",[this._v("Number:Temperature")]),this._v(" "),e("td",[this._v("Low temperature")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",[this._v("maxTemperature")]),this._v(" "),e("td",[this._v("Number:Temperature")]),this._v(" "),e("td",[this._v("High temperature")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",[this._v("meanTemperature")]),this._v(" "),e("td",[this._v("Number:Temperature")]),this._v(" "),e("td",[this._v("Mean temperature")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",[this._v("feltTemperatureMin")]),this._v(" "),e("td",[this._v("Number:Temperature")]),this._v(" "),e("td",[this._v('Low "feels like" temperature')])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",[this._v("feltTemperatureMax")]),this._v(" "),e("td",[this._v("Number:Temperature")]),this._v(" "),e("td",[this._v('High "feels like" temperature')])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",[this._v("relativeHumidityMin")]),this._v(" "),e("td",[this._v("Number")]),this._v(" "),e("td",[this._v("Low relative humidity")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",[this._v("relativeHumidityMax")]),this._v(" "),e("td",[this._v("Number")]),this._v(" "),e("td",[this._v("High relative humidity")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",[this._v("relativeHumidityMean")]),this._v(" "),e("td",[this._v("Number")]),this._v(" "),e("td",[this._v("Mean relative humidity")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",[this._v("precipitationProbability")]),this._v(" "),e("td",[this._v("Number")]),this._v(" "),e("td",[this._v("Percentage probability of precipitation")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",[this._v("precipitation")]),this._v(" "),e("td",[this._v("Number:Length")]),this._v(" "),e("td",[this._v("Total precipitation (water amount)")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",[this._v("convectivePrecipitation")]),this._v(" "),e("td",[this._v("Number:Length")]),this._v(" "),e("td",[this._v("Total rainfall (water amount)")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",[this._v("rainSpot")]),this._v(" "),e("td",[this._v("String")]),this._v(" "),e("td",[this._v("Precipitation distribution around the location")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",[this._v("rainArea")]),this._v(" "),e("td",[this._v("Image")]),this._v(" "),e("td",[this._v("Color-coded image generated from rainSpot")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",[this._v("snowFraction")]),this._v(" "),e("td",[this._v("Number")]),this._v(" "),e("td",[this._v("Percentage of precipitation falling as snow")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",[this._v("snowFall")]),this._v(" "),e("td",[this._v("Number:Length")]),this._v(" "),e("td",[this._v("Total snowfall (calculated)")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",[this._v("cardinalWindDirection")]),this._v(" "),e("td",[this._v("String")]),this._v(" "),e("td",[this._v("Name of the wind direction (eg. N, S, E, W, etc.)")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",[this._v("windDirection")]),this._v(" "),e("td",[this._v("Number")]),this._v(" "),e("td",[this._v("Wind direction (in degrees)")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",[this._v("minWindSpeed")]),this._v(" "),e("td",[this._v("Number:Speed")]),this._v(" "),e("td",[this._v("Low wind speed")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",[this._v("maxWindSpeed")]),this._v(" "),e("td",[this._v("Number:Speed")]),this._v(" "),e("td",[this._v("High wind speed")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",[this._v("meanWindSpeed")]),this._v(" "),e("td",[this._v("Number:Speed")]),this._v(" "),e("td",[this._v("Mean wind speed")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",[this._v("minSeaLevelPressure")]),this._v(" "),e("td",[this._v("Number:Pressure")]),this._v(" "),e("td",[this._v("Low sea level pressure")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",[this._v("maxSeaLevelPressure")]),this._v(" "),e("td",[this._v("Number:Pressure")]),this._v(" "),e("td",[this._v("High sea level pressure")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",[this._v("meanSeaLevelPressure")]),this._v(" "),e("td",[this._v("Number:Pressure")]),this._v(" "),e("td",[this._v("Mean sea level pressure")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",[this._v("condition")]),this._v(" "),e("td",[this._v("String")]),this._v(" "),e("td",[this._v("A brief description of the forecast weather condition (e.g. 'Overcast')")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",[this._v("icon")]),this._v(" "),e("td",[this._v("Image")]),this._v(" "),e("td",[this._v("Image used to represent the forecast (calculated)")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td"),this._v(" "),e("td"),this._v(" "),e("td",[this._v("see "),e("a",{attrs:{href:"#image-icons"}},[this._v("Image icons")]),this._v(" below")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",[this._v("predictability")]),this._v(" "),e("td",[this._v("Number")]),this._v(" "),e("td",[this._v("Estimated certainty of the forecast (percentage)")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",[this._v("predictabilityClass")]),this._v(" "),e("td",[this._v("Number")]),this._v(" "),e("td",[this._v("Range 0-5 (0=very low, 5=very high)")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",[this._v("precipitationHours")]),this._v(" "),e("td",[this._v("Number")]),this._v(" "),e("td",[this._v("Total hours of the day with precipitation")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",[this._v("humidityGreater90Hours")]),this._v(" "),e("td",[this._v("Number")]),this._v(" "),e("td",[this._v("Total hours of the day with relative humidity greater than 90%")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"image-icons"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#image-icons","aria-hidden":"true"}},[this._v("#")]),this._v(" Image Icons")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v('In the "Downloads" section at the bottom of the page, download the file named '),e("code",[this._v("meteoblue_weather_pictograms_<date>.zip")]),this._v(".")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"full-example"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#full-example","aria-hidden":"true"}},[this._v("#")]),this._v(" Full Example")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-dsl"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Bridge")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("meteoblue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("bridge"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("metBridge")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"metBridge"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" apiKey"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"XXXXXXXXXXXX"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Thing")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("weather")]),t._v(" A51 "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Area 51"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" serviceType"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"NonCommercial"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" location"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"37.23,-115.5,1360"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" timeZone"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"America/Los_Angeles"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("refresh")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("240")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-dsl"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ----------------- meteoblue GROUPS ------------------------------------------")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Group")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("weatherDay0")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Today\'s Weather"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Group")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("weatherDay1")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Tomorrow\'s Weather"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Group")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("weatherDay2")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Weather in 2 days"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Group")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("weatherDay3")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Weather in 3 days"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Group")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("weatherDay4")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Weather in 4 days"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Group")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("weatherDay5")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Weather in 5 days"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Group")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("weatherDay6")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Weather in 6 days"')]),t._v("\n\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ----------------- meteoblue ITEMS -------------------------------------------")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DateTime")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("todayForecastDate")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Forecast for [%1$tY/%1$tm/%1$td]"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v(" <calendar>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token tag"}},[t._v(" (weatherDay0)")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("channel"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"meteoblue:weather:metBridge:A51:forecastToday#forecastDate"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("String")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("todayPCode")]),t._v("    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Pictocode [%d]"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v(" <iday>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token tag"}},[t._v(" (weatherDay0)")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("channel"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"meteoblue:weather:metBridge:A51:forecastToday#condition"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("String")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("todayCond")]),t._v("     "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Condition [%s]"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v(" <iday>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token tag"}},[t._v(" (weatherDay0)")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("channel"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"meteoblue:weather:metBridge:A51:forecastToday#condition"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("String")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("todayIcon")]),t._v("     "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Icon [%s]"')]),t._v("      "),s("span",{pre:!0,attrs:{class:"token tag"}},[t._v(" (weatherDay0)")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("channel"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"meteoblue:weather:metBridge:A51:forecastToday#icon"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Number")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("todayUV")]),t._v("       "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"UV Index [%d]"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token tag"}},[t._v(" (weatherDay0)")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("channel"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"meteoblue:weather:metBridge:A51:forecastToday#UVIndex"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Number")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Temperature")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("todayTempL")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Low Temp [%.2f �F]"')]),t._v("  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v(" <temperature>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token tag"}},[t._v(" (weatherDay0)")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("channel"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"meteoblue:weather:metBridge:A51:forecastToday#minTemperature"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Number")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Temperature")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("todayTempH")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"High Temp [%.2f �F]"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v(" <temperature>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token tag"}},[t._v(" (weatherDay0)")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("channel"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"meteoblue:weather:metBridge:A51:forecastToday#maxTemperature"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Number")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("todayHumM")]),t._v("     "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Mean Humidity [%d %%]"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v(" <humidity>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token tag"}},[t._v(" (weatherDay0)")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("channel"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"meteoblue:weather:metBridge:A51:forecastToday#relativeHumidityMean"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Number")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("todayPrecPr")]),t._v("   "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Prec. Prob. [%d %%]"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token tag"}},[t._v(" (weatherDay0)")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("channel"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"meteoblue:weather:metBridge:A51:forecastToday#precipitationProbability"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Number")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Length")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("todayPrec")]),t._v("     "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Total Prec. [%.2f in]"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v(" <rain>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token tag"}},[t._v(" (weatherDay0)")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("channel"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"meteoblue:weather:metBridge:A51:forecastToday#precipitation"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Number")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Length")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("todayRain")]),t._v("     "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Rainfall [%.2f in]"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v(" <rain>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token tag"}},[t._v(" (weatherDay0)")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("channel"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"meteoblue:weather:metBridge:A51:forecastToday#convectivePrecipitation"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Image")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("todayRainArea")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Rain area"')]),t._v("  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v(" <rain>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token tag"}},[t._v(" (weatherDay0)")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("channel"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"meteoblue:weather:metBridge:A51:forecastToday#rainArea"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Number")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("todaySnowF")]),t._v("    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Snow fraction [%.2f]"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v(" <climate>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token tag"}},[t._v(" (weatherDay0)")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("channel"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"meteoblue:weather:metBridge:A51:forecastToday#snowFraction"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Number")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Length")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("todaySnow")]),t._v("     "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Snowfall [%.2f in]"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v(" <rain>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token tag"}},[t._v(" (weatherDay0)")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("channel"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"meteoblue:weather:metBridge:A51:forecastToday#snowFall"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Number")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Pressure")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("todayPressL")]),t._v("   "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Low Pressure [%d %unit%]"')]),t._v("  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v(" <pressure>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token tag"}},[t._v(" (weatherDay0)")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("channel"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"meteoblue:weather:metBridge:A51:forecastToday#minSeaLevelPressure"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Number")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Pressure")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("todayPressH")]),t._v("   "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"High Pressure [%d %unit%]"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v(" <pressure>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token tag"}},[t._v(" (weatherDay0)")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("channel"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"meteoblue:weather:metBridge:A51:forecastToday#maxSeaLevelPressure"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Number")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("todayWindDir")]),t._v("   "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Wind Direction [%d]"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v(" <wind>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token tag"}},[t._v(" (weatherDay0)")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("channel"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"meteoblue:weather:metBridge:A51:forecastToday#windDirection"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("String")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("todayCWindDir")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Cardinal Wind Direction [%s]"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v(" <wind>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token tag"}},[t._v(" (weatherDay0)")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("channel"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"meteoblue:weather:metBridge:A51:forecastToday#cardinalWindDirection"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Number")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Speed")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("todayWindSpL")]),t._v("   "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Low Wind Speed [%.2f mph]"')]),t._v("  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v(" <wind>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token tag"}},[t._v(" (weatherDay0)")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("channel"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"meteoblue:weather:metBridge:A51:forecastToday#minWindSpeed"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Number")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Speed")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("todayWindSpH")]),t._v("   "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"High Wind Speed [%.2f mph]"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v(" <wind>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token tag"}},[t._v(" (weatherDay0)")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("channel"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"meteoblue:weather:metBridge:A51:forecastToday#maxWindSpeed"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-dsl"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("sitemap")]),t._v(" weather "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("label")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Weather"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Frame")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("label")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Weather"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Group")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("item")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("weatherDay0\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Group")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("item")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("weatherDay1\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Group")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("item")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("weatherDay2\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Group")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("item")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("weatherDay3\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Group")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("item")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("weatherDay4\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Group")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("item")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("weatherDay5\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Group")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("item")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("weatherDay6\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])}],!1,null,null,null);e.default=r.exports}}]);