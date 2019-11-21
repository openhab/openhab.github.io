(window.webpackJsonp=window.webpackJsonp||[]).push([[484],{976:function(e,t,n){"use strict";n.r(t);var a=n(1),s=Object(a.a)({},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"content"},[n("h1",{attrs:{id:"google-calendar-scheduler"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#google-calendar-scheduler","aria-hidden":"true"}},[e._v("#")]),e._v(" Google Calendar Scheduler "),n("Badge",{attrs:{type:"warn",text:"v1"}})],1),e._v(" "),n("AddonLogo"),e._v(" "),n("p",[e._v("The Google Calendar Scheduler allows you to control items in openHAB at scheduled times in the future.  It will send commands to items or update the state of items when defined on one of your Google Calendars.")]),e._v(" "),n("p",[e._v("An additional persistence service, the Google Calendar Presence Simulator, writes item state changes as events on the calendar that will occur again some number of days in the future, to simulate your activity at home (such as turning lights on and off) when on vacation.")]),e._v(" "),e._m(0),e._v(" "),e._m(1),e._v(" "),e._m(2),e._v(" "),n("p",[e._v("Before you can integrate this service with your Google Calendar, you must have a Google API Console project.")]),e._v(" "),n("ul",[n("li",[e._v("Login to your "),n("a",{attrs:{href:"https://console.developers.google.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("Google API Manager"),n("OutboundLink")],1),e._v(".")]),e._v(" "),e._m(3),e._v(" "),n("li",[e._v('In the sidebar under "API Manager", select Credentials, then select the OAuth consent screen tab.')]),e._v(" "),e._m(4),e._v(" "),e._m(5),e._v(" "),e._m(6),e._v(" "),e._m(7),e._v(" "),e._m(8)]),e._v(" "),e._m(9),e._v(" "),e._m(10),e._v(" "),e._m(11),e._v(" "),e._m(12),e._v(" "),e._m(13),e._m(14),e._v(" "),e._m(15),e._v(" "),n("p",[e._v("When creating or modifying an event on the calendar, its title can be anything, and its event description must contain the instructions in the following format:")]),e._v(" "),e._m(16),n("p",[e._v("or just")]),e._v(" "),e._m(17),e._m(18),e._v(" "),n("p",[e._v("As a result, your lines in a calendar event might look like this:")]),e._v(" "),e._m(19),n("p",[e._v("or just:")]),e._v(" "),e._m(20),n("p",[e._v("If the event description is entirely blank, then the event's start and end times are used to exclude that time period from processing.")]),e._v(" "),e._m(21),e._v(" "),e._m(22),e._v(" "),e._m(23),e._v(" "),e._m(24),e._v(" "),n("p",[e._v("To make use of Presence Simulation you have to walk through these configuration steps:")]),e._v(" "),n("ul",[e._m(25),e._v(" "),e._m(26),e._v(" "),e._m(27),e._v(" "),n("li",[e._v("make sure the referenced Google Calendar is writeable by the given user at "),n("a",{attrs:{href:"http://google.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("google.com"),n("OutboundLink")],1),e._v(".")])]),e._v(" "),n("p",[e._v("Note: you also need to configure the Google Calendar Scheduler to be able to read the entries from the calendar and act on them.")]),e._v(" "),e._m(28),e._v(" "),e._m(29),e._v(" "),e._m(30),e._m(31),e._v(" "),e._m(32),e._v(" "),e._m(33),e._m(34),e._v(" "),e._m(35),e._v(" "),n("DocPreviousVersions"),e._v(" "),n("EditPageLink")],1)},[function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"table-of-contents"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#table-of-contents","aria-hidden":"true"}},[this._v("#")]),this._v(" Table of Contents")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",[n("li",[n("a",{attrs:{href:"#obtaining-credentials"}},[e._v("Obtaining Credentials")])]),e._v(" "),n("li",[n("a",{attrs:{href:"#service-configuration"}},[e._v("Service Configuration")])]),e._v(" "),n("li",[n("a",{attrs:{href:"#calendar-event-configuration"}},[e._v("Calendar Event Configuration")])]),e._v(" "),n("li",[n("a",{attrs:{href:"#presence-simulation"}},[e._v("Presence Simulation")]),e._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"#solving-google-calendar-presence-simulation-errors"}},[e._v("Solving Google Calendar Presence Simulation errors")])])])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"obtaining-credentials"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#obtaining-credentials","aria-hidden":"true"}},[this._v("#")]),this._v(" Obtaining Credentials")])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",[this._v("From the project drop-down, select an existing project or create a new one by selecting "),t("strong",[this._v("Create project")]),this._v(".")])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",[this._v("Choose an "),t("strong",[this._v("Email Address")]),this._v(", specify a "),t("strong",[this._v("Product Name")]),this._v(", and press Save.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",[this._v("In the Credentials tab, select the Create credentials drop-down list, and choose "),t("strong",[this._v("OAuth client ID")]),this._v(".")])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",[this._v("Under "),t("strong",[this._v("Application type")]),this._v(", select "),t("strong",[this._v("Other")]),this._v(".")])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",[this._v("Put "),t("strong",[this._v("Name")]),this._v(" and press the "),t("strong",[this._v("Create")]),this._v(" button.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",[this._v("Copy "),t("strong",[this._v("client id")]),this._v(" and "),t("strong",[this._v("client secret")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"service-configuration"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#service-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Service Configuration")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("This service can be configured in the file "),t("code",[this._v("services/gcal.cfg")]),this._v(".")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("table",[n("thead",[n("tr",[n("th",[e._v("Property")]),e._v(" "),n("th",[e._v("Default")]),e._v(" "),n("th",{staticStyle:{"text-align":"center"}},[e._v("Required")]),e._v(" "),n("th",[e._v("Description")])])]),e._v(" "),n("tbody",[n("tr",[n("td",[e._v("client_id")]),e._v(" "),n("td"),e._v(" "),n("td",{staticStyle:{"text-align":"center"}},[e._v("Yes")]),e._v(" "),n("td",[e._v('Copied from the "Client ID" field on the Credentials page as described above in '),n("a",{attrs:{href:"#obtaining-credentials"}},[e._v("Obtaining Credentials")])])]),e._v(" "),n("tr",[n("td",[e._v("client_secret")]),e._v(" "),n("td"),e._v(" "),n("td",{staticStyle:{"text-align":"center"}},[e._v("Yes")]),e._v(" "),n("td",[e._v('Copied from the "Client secret" field on the Credentials page as described above in '),n("a",{attrs:{href:"#obtaining-credentials"}},[e._v("Obtaining Credentials")])])]),e._v(" "),n("tr",[n("td",[e._v("calendar_name")]),e._v(" "),n("td"),e._v(" "),n("td",{staticStyle:{"text-align":"center"}},[e._v("Yes")]),e._v(" "),n("td",[e._v("This is the name you gave to your Google Calendar, or the word 'primary' if you want to use your default Google calendar (not recommended).  The service will download calendar events from this calendar.")])]),e._v(" "),n("tr",[n("td",[e._v("filter")]),e._v(" "),n("td"),e._v(" "),n("td",{staticStyle:{"text-align":"center"}},[e._v("No")]),e._v(" "),n("td",[e._v("The filter criteria by which calendar events are searched. The Google Calendar API will do a text search to find calendar events that match the supplied terms. All calendar event fields are searched, except for extended properties.")])]),e._v(" "),n("tr",[n("td",[e._v("refresh")]),e._v(" "),n("td",[e._v("900000")]),e._v(" "),n("td",{staticStyle:{"text-align":"center"}},[e._v("No")]),e._v(" "),n("td",[e._v("the frequency (in milliseconds) with which the Google calendar will be checked for calendar events (900000 milliseconds is 15 minutes).  If you change this value, you must restart the service.")])])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("After the first start, you need to authorize openHAB to allow use your calendar. Follow the instructions that appear in the openHAB log.  At the "),t("code",[this._v("openhab>")]),this._v(" prompt, enter "),t("code",[this._v("log:tail")]),this._v(", or at the shell prompt enter "),t("code",[this._v("tail -f /path/to/your/openhab.log")]),this._v(".")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-dsl"}},[n("code",[n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("INFO "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("g"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("internal"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("GCalEventDownloader"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("################################################################################################\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("INFO "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("g"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("internal"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("GCalEventDownloader"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v(" # Google"),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("Integration"),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" U S E R   I N T E R A C T I O N   R E Q U I R E D "),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v("!")]),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v("!")]),e._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("INFO "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("g"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("internal"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("GCalEventDownloader"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v(" # "),n("span",{pre:!0,attrs:{class:"token number"}},[e._v("1.")]),e._v(" Open URL "),n("span",{pre:!0,attrs:{class:"token string"}},[e._v("'https://www.google.com/device'")]),e._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("INFO "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("g"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("internal"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("GCalEventDownloader"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v(" # "),n("span",{pre:!0,attrs:{class:"token number"}},[e._v("2.")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("Type")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("provided")]),e._v(" code ZPWT"),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("UVXXS \n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("INFO "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("g"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("internal"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("GCalEventDownloader"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v(" # "),n("span",{pre:!0,attrs:{class:"token number"}},[e._v("3.")]),e._v(" Grant openHAB access to your Google calendar\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("INFO "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("g"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("internal"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("GCalEventDownloader"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v(" # "),n("span",{pre:!0,attrs:{class:"token number"}},[e._v("4.")]),e._v(" openHAB will automatically detect the permissions and complete the authentication process\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("INFO "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("g"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("internal"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("GCalEventDownloader"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v(" # NOTE"),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" You will only have "),n("span",{pre:!0,attrs:{class:"token number"}},[e._v("1800")]),e._v(" mins before openHAB gives up waiting for the access"),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v("!")]),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v("!")]),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v("!")]),e._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("INFO "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("g"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("internal"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("GCalEventDownloader"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("################################################################################################\n")])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("blockquote",[n("p",[e._v("If you later change your "),n("code",[e._v("client_id")]),e._v(" and "),n("code",[e._v("client_secret")]),e._v(" in the configuration, you will have to locate and delete the file "),n("code",[e._v("gcal_oauth2_token")]),e._v(", and stop and restart the service.  This is because the Google Calendar Scheduler does not detect that the OAuth token is no longer valid.  On openHAB 2.0.0 installed via "),n("code",[e._v("apt-get")]),e._v(", this file is located in the directory "),n("code",[e._v("/var/lib/openhab2/gcal")]),e._v(".")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"calendar-event-configuration"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#calendar-event-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Calendar Event Configuration")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("start {\n  send|update <item> <state>\n}\nend {\n  send|update <item> <state>\n}\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("send|update <item> <state>\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("The commands in the "),t("code",[this._v("start")]),this._v(" section will be executed at the event start time and the "),t("code",[this._v("end")]),this._v(" section at the event end time. If these sections are not present, the commands will be executed at the event start time.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("start {\n  send Light_Garden ON\n  send Pump_Garden ON\n}\nend {\n  send Light_Garden OFF\n  send Pump_Garden OFF\n}\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("send Light_Garden ON\nsend Pump_Garden ON\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("blockquote",[t("p",[this._v("⚠️ The calendar must not contain any events that do not conform to the above description, including public holidays, birthdays, any all-day events at all, personal calendar entries, etc.  It is recommended that you create a Google Calendar that is dedicated to the use of the Google Calendar Scheduler service.  Alternatively, careful use of the "),t("code",[this._v("filter")]),this._v(" configuration parameter can be used to select only a subset of matching events on the calendar.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"presence-simulation"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#presence-simulation","aria-hidden":"true"}},[this._v("#")]),this._v(" Presence Simulation")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("The Google Calendar Presence Simulator is an openHAB Persistence service can be used to realize a simple but effective presence simulation feature (thanks Ralf for providing the concept). Every single change of an item that belongs to a certain group is posted as new calendar entry in the future. By default each entry is posted with an offset of 14 days (If you'd like to change the offset please change the parameter "),t("code",[this._v("offset")]),this._v(" in your "),t("code",[this._v("services/gcal-persistence.cfg")]),this._v(" file). Each calendar entry looks like the following:")])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("title: "),t("code",[this._v("[PresenceSimulation] <itemname>")])]),this._v(" "),t("li",[this._v("content: "),t("code",[this._v("send <itemname> <value>")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",[this._v("configure the gcal-persistence bundle by adding the appropriate configuration. You must add only calendar_name. If you want to use your primary calendar just use the keyword "),t("code",[this._v("primary")]),this._v(". All other credentials are shared from Google Calendar Scheduler configuration.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",[this._v("make sure your items file contains items that belong to the group "),t("code",[this._v("G_PresenceSimulation")]),this._v(" - if you would like to change the group name, change it in "),t("code",[this._v("persistence/gcal.persist")]),this._v(".")])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",[this._v("make sure one of your items files contains an item called "),t("code",[this._v("PresenceSimulation")]),this._v(".  If you would like to change the group name please change the parameter "),t("code",[this._v("executescript")]),this._v(" in your "),t("code",[this._v("services/gcal-persistence.cfg")]),this._v(" file.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("To activate the Presence Simulation simply set "),t("code",[this._v("PresenceSimulation")]),this._v(" to "),t("code",[this._v("ON")]),this._v(" and the already downloaded events are being executed. Items in your smart home will then behave like they did 14 days earlier.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("A sample "),t("code",[this._v("persist/gcal.persist")]),this._v(" file looks like this:")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("Strategies {\n\tdefault = everyChange\n}\n\nItems {\n\tG_PresenceSimulation* : strategy = everyChange\n}\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"solving-google-calendar-presence-simulation-errors"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#solving-google-calendar-presence-simulation-errors","aria-hidden":"true"}},[this._v("#")]),this._v(" Solving Google Calendar Presence Simulation errors")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("To solve any issues with any service bundle, increase the logging. At the "),t("code",[this._v("openhab>")]),this._v(" prompt you can enter:")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[this._v("log:set TRACE org.openhab.persistence.gcal\nlog:set TRACE org.openhab.io.gcal\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("You can later return them to "),t("code",[this._v("DEFAULT")]),this._v(" or "),t("code",[this._v("INFO")]),this._v(" level.")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",[n("li",[n("p",[e._v('"GCal PresenceSimulation Service isn\'t initialized properly! No entries will be uploaded to your Google Calendar"')]),e._v(" "),n("p",[e._v("The persistence configuration is not correct; check that the "),n("code",[e._v("client_id")]),e._v(" and "),n("code",[e._v("client_secret")]),e._v(" are correct in the gcal configuration.")])]),e._v(" "),n("li",[n("p",[e._v('"creating a new calendar entry throws an exception: Forbidden"')]),e._v(" "),n("p",[e._v("This can have several causes:")]),e._v(" "),n("ul",[n("li",[n("p",[e._v("The "),n("code",[e._v("client_id")]),e._v(" or "),n("code",[e._v("client_secret")]),e._v(" might not be correct.")])]),e._v(" "),n("li",[n("p",[e._v("The calendar name is not correct.")])]),e._v(" "),n("li",[n("p",[e._v("If your not using your own calendar, make sure the sharing settings are correct and the user has sufficient rights to create calendar entries.")])])])])])}],!1,null,null,null);t.default=s.exports}}]);