(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{569:function(e,t,a){"use strict";a.r(t);var n=a(0),i=Object(n.a)({},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"content"},[e._m(0),e._v(" "),a("p",[e._v("This binding can be used to connect through the CalDAV Interface to calendars.\nFirst of all you need to add the org.openhab.io.caldav-version.jar to the addons folder.")]),e._v(" "),e._m(1),e._v(" "),a("p",[e._v("openhab.cfg")]),e._v(" "),e._m(2),e._v(" "),e._m(3),e._v(" "),e._m(4),e._v(" "),e._m(5),e._v(" "),a("p",[e._v("The CalDAV binding is compatible with openHAB 2 just like any other openHAB 1.x binding. There is currently just one bug in the way the configuration file is parsed. Create the configuration file "),a("code",[e._v("caldavio.cfg")]),e._v(" with the additional prefix "),a("code",[e._v("caldavio:")]),e._v(". Do the same for "),a("code",[e._v("caldavCommand.cfg")]),e._v(" and "),a("code",[e._v("caldavCommandPersonal.cfg")]),e._v(".\nFor more details see the "),a("a",{attrs:{href:"https://github.com/openhab/openhab/issues/4074#issuecomment-202737544",target:"_blank",rel:"noopener noreferrer"}},[e._v("discussion here"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("hr"),e._v(" "),e._m(6),e._v(" "),a("p",[e._v("Binding file: org.openhab.binding.caldav-command-version.jar")]),e._v(" "),e._m(7),e._v(" "),e._m(8),e._v(" "),e._m(9),e._v(" "),e._m(10),e._v(" "),e._m(11),e._v(" "),e._m(12),e._v(" "),e._m(13),e._v(" "),a("p",[e._v("This is really nice to use in combination with a rule such as used for "),a("a",{attrs:{href:"https://github.com/openhab/openhab/wiki/Controlling-openHAB-with-your-voice",target:"_blank",rel:"noopener noreferrer"}},[e._v("voice control"),a("OutboundLink")],1),e._v(" - set the default item to: "),a("code",[e._v("caldavCommand:defaultItemOnBegin=VoiceCommand")])]),e._v(" "),a("p",[e._v("Then you can use the very same logic of your voice commands also in your calendar events.")]),e._v(" "),a("p",[e._v("Depending on your rule implementation, it is possible to use event entries like these:")]),e._v(" "),e._m(14),e._v(" "),a("hr"),e._v(" "),e._m(15),e._v(" "),a("p",[e._v("Binding file: org.openhab.binding.caldav-personal-version.jar")]),e._v(" "),e._m(16),e._v(" "),e._m(17),e._v(" "),e._m(18),e._v(" "),e._m(19),e._v(" "),e._m(20),e._v(" "),e._m(21),e._v(" "),a("p",[e._v("You've got the option to show just specific events.")]),e._v(" "),e._m(22),e._v(" "),e._m(23),e._v(" "),e._m(24),e._v(" "),e._m(25),e._v(" "),e._m(26),e._v(" "),e._m(27),e._v(" "),e._m(28),e._v(" "),e._m(29),e._v(" "),e._m(30),e._v(" "),e._m(31),e._v(" "),a("p",[e._v("As far as i know are these")]),e._v(" "),e._m(32),e._v(" "),e._m(33),e._v(" "),e._m(34),e._v(" "),e._m(35),e._v(" "),e._m(36),e._v(" "),e._m(37),e._v(" "),e._m(38),e._v(" "),e._m(39),e._v(" "),a("p",[e._v("This site may help to find the Calendar URL (i.e. Google Shared Calendars):\n"),a("a",{attrs:{href:"http://www.ict4g.net/adolfo/notes/2015/07/04/determingurlofcaldav.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://www.ict4g.net/adolfo/notes/2015/07/04/determingurlofcaldav.html"),a("OutboundLink")],1)]),e._v(" "),e._m(40),e._v(" "),a("p",[e._v("If 2-factor authentication has been enabled, create an application password using "),a("a",{attrs:{href:"https://support.google.com/accounts/answer/185833?hl=en",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://support.google.com/accounts/answer/185833?hl=en"),a("OutboundLink")],1),e._v(" Use this password instead of your account password.")]),e._v(" "),e._m(41),e._v(" "),e._m(42),e._v(" "),a("p",[e._v("Saves the events to the calendar named history with a length of 10 minutes")]),e._v(" "),e._m(43),e._v(" "),a("p",[e._v("You can simulate presence with this binding.\nTo do this you have to")]),e._v(" "),e._m(44),e._v(" "),e._m(45),e._v(" "),e._m(46),e._v(" "),e._m(47),e._v(" "),a("p",[e._v("There are three calendars defined. One of them is used just for executing commands in openhab (Command-kalender). The others are used to show the upcoming events (Müllkalender, Dienstlicher/privater Kalender).\nIn every case, the binding org.openhab.io.caldav-<version>.jar is needed. For executing commands the additional binding org.openhab.binding.caldav-command-<version>.jar is needed. For upcoming events or presence simulation the binding org.openhab.binding.caldav-personal-<version>.jar needs to be included.")]),e._v(" "),a("p",[e._v("openhab.cfg")]),e._v(" "),e._m(48),e._v(" "),a("p",[e._v("The items-File:")]),e._v(" "),e._m(49),e._v(" "),a("DocPreviousVersions"),e._v(" "),a("EditPageLink")],1)},[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"caldav-command-binding"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#caldav-command-binding","aria-hidden":"true"}},[this._v("#")]),this._v(" CalDAV Command Binding")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("strong",[this._v("Newest")]),this._v("\nNewest Version can be downloaded from the build-agent")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ul",[a("li",[a("code",[e._v("caldavio:<calendar-id>:url=")])]),e._v(" "),a("li",[a("code",[e._v("caldavio:<calendar-id>:username=")])]),e._v(" "),a("li",[a("code",[e._v("caldavio:<calendar-id>:password=")])]),e._v(" "),a("li",[a("code",[e._v("caldavio:<calendar-id>:reloadInterval=<minutes>")])]),e._v(" "),a("li",[a("code",[e._v("caldavio:<calendar-id>:preloadTime=<minutes>")])]),e._v(" "),a("li",[a("code",[e._v("caldavio:<calendar-id>:historicLoadTime=<minutes>")])]),e._v(" "),a("li",[a("code",[e._v("caldavio:<calendar-id>:disableCertificateVerification=<true|false>")])]),e._v(" "),a("li",[a("code",[e._v("caldavio:<calendar-id>:charset=<well formed charset name>")])]),e._v(" "),a("li",[a("code",[e._v("caldavio:timeZone=<Timezone>")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("strong",[this._v("Restrictions")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("The calendar-id must be just upper- and lowercase characters. (e. g. private or work, something like 1 or private-home is not allowed)")]),this._v(" "),t("li",[this._v("disableCertificateVerification can just be set to true (default is false) if ssl is used.")]),this._v(" "),t("li",[this._v("timeZone must just be used if the local timezone of the pc is not the correct one. E. g. if you are living in Berlin and your calendar timezone is Berlin and your local pc timezone is Berlin you must not define this setting")]),this._v(" "),t("li",[this._v("'' for item configurations are optional (eventNr:1 and eventNr:'1' is the same). I prefer to use ''")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"note-for-openhab-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#note-for-openhab-2","aria-hidden":"true"}},[this._v("#")]),this._v(" Note for openHAB 2")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"caldav-command"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#caldav-command","aria-hidden":"true"}},[this._v("#")]),this._v(" CalDAV Command")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Used to execute commands through an event, triggered at the start or the end of an event.\nThe event summary is free selectable. The event description must fullfill special syntax.\nSyntax is "),t("code",[this._v("<BEGIN|END>:<Item-Name>:<Command>")]),this._v('.\nEach item trigger must be a single line without linebreaks. Every line which starts with "BEGIN" will be executed at the begin of the event. Each line with an "END" will be executed at the end of the event. You can define multiple lines, which must not be ordered. For example:\n'),t("pre",[this._v("BEGIN:Heater_Livingroom:22\nBEGIN:Heater_Corridor:22\nEND:Heater_Livingroom:16\nEND:Heater_Corridor:16\nEND:Notification_Dummy:Heizung heruntergefahren")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Additionaly you can define an item to listen to upcoming changes of an item (which will be triggered through an event). Two types are available the command which will be set and the trigger time.\nSyntax is "),t("code",[this._v('caldavCommand="itemName:<Item-Name to listen to> type:<VALUE|DATE>"')]),this._v("\nFurthermore a switch can be defined to disable the automatic execution (through calendar) of an item.\nSyntax is "),t("code",[this._v('caldavCommand="itemName:<Item-Name to listen to> type:<DISABLE>"')])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("openhab.cfg\n"),t("code",[this._v("caldavCommand:readCalendars=<calendar-id>")]),this._v(" (multiple calendars can be seperated by commas)")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"description-of-type"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#description-of-type","aria-hidden":"true"}},[this._v("#")]),this._v(" Description of type")])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("VALUE: the value which will send to the command (can be of any type, depends on command in event and accepted commands of item)")]),this._v(" "),t("li",[this._v("DATE: the time on which the event occurs (item type: DateTime)")]),this._v(" "),t("li",[this._v("DISABLE: can turn off the automatic execution of the given item (item type: Switch)")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"default-item"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#default-item","aria-hidden":"true"}},[this._v("#")]),this._v(" Default item")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Since 1.9.0, the CalDAV Command binding also supports a default item which may optionally be added to openhab.cfg:\n"),t("pre",[this._v("caldavCommand:defaultItemOnBegin=<item>")]),this._v("\nIf the command calendar contains items whose description does not follow the "),t("code",[this._v("BEGIN/END:<item>:<value>")]),this._v(" pattern AND a default item is specified, then the respective lines are interpreted as "),t("code",[this._v("BEGIN:<defaultItemOnBegin>:<line>")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v('"Swtich on light in kitchen"')]),this._v(" "),t("li",[this._v('"Switch off radio"')]),this._v(" "),t("li",[this._v('"Close roller shutter on first floor" etc.')])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"caldav-personal"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#caldav-personal","aria-hidden":"true"}},[this._v("#")]),this._v(" CalDAV Personal")])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("Used to detect presence through calendar events.")]),this._v(" "),t("li",[this._v("Used to show upcoming/active events in openhab.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"openhab-cfg"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#openhab-cfg","aria-hidden":"true"}},[this._v("#")]),this._v(" openhab.cfg")])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[t("code",[this._v("caldavPersonal:usedCalendars=<calendar-id>")]),this._v(" (multiple calendars can be seperated by commas)")]),this._v(" "),t("li",[t("code",[this._v("caldavPersonal:homeIdentifiers=<values seperated by commans>")]),this._v(" (if one of these identifiers can be found inside the place of the event, this event will not be used for presence)")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"items"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#items","aria-hidden":"true"}},[this._v("#")]),this._v(" items")])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[t("code",[this._v("caldavPersonal=\"calendar:'<calendar-ids, comma separated>' type:'<UPCOMING|ACTIVE|EVENT>' eventNr:'<event-nr, first one is 1>' value:'<NAME|DESCRIPTION|PLACE|START|END|TIME>\"'")])]),this._v(" "),t("li",[t("code",[this._v("caldavPersonal=\"calendar:'<calendar-ids>' type:'PRESENCE'\" (type must be Switch)")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"filtering"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#filtering","aria-hidden":"true"}},[this._v("#")]),this._v(" filtering")])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[t("code",[this._v("filter-name:'\\<regular expression\\>'")])]),this._v(" "),t("li",[t("code",[this._v("filter-category:'<categories, comma separated>'")]),this._v("  (your caldav event must contain at least ALL the categories you specify here)")]),this._v(" "),t("li",[t("code",[this._v("filter-category-any:'<categories, comma separated>'")]),this._v(" (your caldav event must at least contain one of the categories you specify here)")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"example-for-filtering"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#example-for-filtering","aria-hidden":"true"}},[this._v("#")]),this._v(" Example for filtering")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ul",[a("li",[e._v("just showing upcoming free days\n"),a("code",[e._v("caldavPersonal=\"calendar:'robert,common' type:'EVENT' eventNr:'1' value:'START' filter-name:'Gleittag|Urlaub|Frei'\"")])]),e._v(" "),a("li",[e._v("just showing events for the next garbage pick-up\n"),a("code",[e._v("caldavPersonal=\"calendar:'common' type:'EVENT' eventNr:'1' value:'START' filter-category:'Müllabholung'\"")])]),e._v(" "),a("li",[e._v("item config showing the next event in which we are sending a heat event to the bathroom :"),a("br"),e._v(" "),a("code",[e._v("DateTime bathroom_NextEventDate \"bathriil next evt. [%1$tT, %1$td.%1$tm.%1$tY]\" <calendar> { caldavPersonal=\"calendar:chauffagecmd type:UPCOMING eventNr:1 value:'START' filter-category-any:'bathroom,wholefloor'\"}")]),a("br"),e._v('\n==> if you have one event at 8pm with 1 category "bathroom" (setting heater on), and another event at 9pm with category "wholefloor" (setting heaterS on), then this item will match both events.')])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"description-of-type-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#description-of-type-2","aria-hidden":"true"}},[this._v("#")]),this._v(" Description of type")])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("UPCOMING: the next upcoming events, not the active ones")]),this._v(" "),t("li",[this._v("ACTIVE: events which are currently on (internally used for presence detection)")]),this._v(" "),t("li",[this._v("EVENT: all events, active as well as upcoming")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"description-of-value"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#description-of-value","aria-hidden":"true"}},[this._v("#")]),this._v(" Description of value")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ul",[a("li",[e._v("NAME: Name of the event (itemtype: String)")]),e._v(" "),a("li",[e._v("DESCRIPTION: Event content (itemtype: String)")]),e._v(" "),a("li",[e._v("PLACE: Place of event (itemtype: String)")]),e._v(" "),a("li",[e._v("START: start time (itemtype: DateTime)")]),e._v(" "),a("li",[e._v("END: end time (itemtype: DateTime)")]),e._v(" "),a("li",[e._v("TIME: start/end time (itemtype: String)")]),e._v(" "),a("li",[e._v("NAMEANDTIME: name and start- to end time (itemtype:String)")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"logging"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#logging","aria-hidden":"true"}},[this._v("#")]),this._v(" Logging")])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[t("code",[this._v('<logger name="org.openhab.binding.caldav_personal" level="TRACE"/>')])]),this._v(" "),t("li",[t("code",[this._v('<logger name="org.openhab.binding.caldav_command" level="TRACE"/>')])]),this._v(" "),t("li",[t("code",[this._v('<logger name="org.openhab.io.caldav" level="TRACE"/>')])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"tested-caldav-servers-with-examples"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tested-caldav-servers-with-examples","aria-hidden":"true"}},[this._v("#")]),this._v(" Tested calDAV Servers with examples")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"owncloud-my-reference-implementation"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#owncloud-my-reference-implementation","aria-hidden":"true"}},[this._v("#")]),this._v(" ownCloud (my reference implementation)")])},function(){var e=this.$createElement,t=this._self._c||e;return t("pre",[t("code",[this._v("caldavio:openhab_tasks:url=http://server.de/owncloud/remote.php/caldav/calendars/openHAB/tasks\ncaldavio:openhab_tasks:username=username\ncaldavio:openhab_tasks:password=password\ncaldavio:openhab_tasks:reloadInterval=10\ncaldavio:openhab_tasks:preloadTime=20000\n")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"baikal"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#baikal","aria-hidden":"true"}},[this._v("#")]),this._v(" baikal")])},function(){var e=this.$createElement,t=this._self._c||e;return t("pre",[t("code",[this._v("caldavio:kalendername:url=https://server_ip/baikal/cal.php/calendars/username/kalender_id  \ncaldavio:kalendername:username=username  \ncaldavio:kalendername:password=password  \ncaldavio:kalendername:reloadInterval=10  \ncaldavio:kalendername:preloadTime=20000\n")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"google-performance-issue-because-the-timestamp-of-files-is-not-correct"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#google-performance-issue-because-the-timestamp-of-files-is-not-correct","aria-hidden":"true"}},[this._v("#")]),this._v(" google (performance issue, because the timestamp of files is not correct)")])},function(){var e=this.$createElement,t=this._self._c||e;return t("pre",[t("code",[this._v("caldavio:openhab_tasks:url=https://www.google.com/calendar/dav/email@gmail.com/events\ncaldavio:openhab_tasks:username=email@gmail.com\ncaldavio:openhab_tasks:password=password\ncaldavio:openhab_tasks:reloadInterval=10\ncaldavio:openhab_tasks:preloadTime=20000\n")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"zarafa"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#zarafa","aria-hidden":"true"}},[this._v("#")]),this._v(" (zarafa?)")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"locate-url"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#locate-url","aria-hidden":"true"}},[this._v("#")]),this._v(" Locate URL")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"google-2-factor-authentication"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#google-2-factor-authentication","aria-hidden":"true"}},[this._v("#")]),this._v(" Google 2-factor authentication")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"persistence"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#persistence","aria-hidden":"true"}},[this._v("#")]),this._v(" Persistence")])},function(){var e=this.$createElement,t=this._self._c||e;return t("pre",[t("code",[this._v("caldav-persistence:calendarId=history\ncaldav-persistence:duration=10\ncaldav-persistence:singleEvents=false\n")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"presence-simulation"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#presence-simulation","aria-hidden":"true"}},[this._v("#")]),this._v(" Presence Simulation")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ul",[a("li",[e._v("enable the caldav-command binding")]),e._v(" "),a("li",[e._v("enbale the caldav-persistence binding")]),e._v(" "),a("li",[e._v("configure the Items you need for simulation for caldav persistence")]),e._v(" "),a("li",[e._v("configure the caldav persistence to singleEvents=true and an offset you want. One week or two make sense.")]),e._v(" "),a("li",[e._v("keep openHAB running for a week or more and the persistent events will occur again in the future regarding the offset you set up")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"known-problems-or-limitations"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#known-problems-or-limitations","aria-hidden":"true"}},[this._v("#")]),this._v(" Known Problems (or limitations)")])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("If you are using multiple calendars you have to set the thread count for quartz to this calendar amount or higher otherwise some calendars will not be loaded.")]),this._v(" "),t("li",[this._v("You have to set the preloadInterval to a higher or equal value as the recurring events in the calendar exists.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"example-configuration"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#example-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Example configuration")])},function(){var e=this.$createElement,t=this._self._c||e;return t("pre",[t("code",[this._v("################################ CalDav Binding #######################################\n#\n#caldavio:<calendar-id>:url=\n#caldavio:<calendar-id>:username=\n#caldavio:<calendar-id>:password=\n#caldavio:<calendar-id>:reloadInterval=<minutes>\n#caldavio:<calendar-id>:preloadTime=<minutes>\n#caldavio:timeZone=<e. g. Europe/Berlin>\n\n# Dienstlicher/privater Kalender\ncaldavio:dienstlich:url=http://192.168.2.5/owncloud/remote.php/caldav/calendars/user/pers%C3%B6nlich\ncaldavio:dienstlich:username=user\ncaldavio:dienstlich:password=password\ncaldavio:dienstlich:reloadInterval=60\ncaldavio:dienstlich:preloadTime=2880\ncaldavio:timeZone=Europe/Berlin\n\n# Müllkalender\ncaldavio:muell:url=http://192.168.2.5/owncloud/remote.php/caldav/calendars/user/m%C3%BCll\ncaldavio:muell:username=user\ncaldavio:muell:password=password\ncaldavio:muell:reloadInterval=1440\ncaldavio:muell:preloadTime=2880\ncaldavio:timeZone=Europe/Berlin\n\n# Command-kalender``\ncaldavio:command:url=http://192.168.2.5/owncloud/remote.php/caldav/calendars/user/command\ncaldavio:command:username=user\ncaldavio:command:password=password\ncaldavio:command:reloadInterval=10\ncaldavio:command:preloadTime=1440\ncaldavio:timeZone=Europe/Berlin\n\n# Additionally needed binding: org.openhab.binding.caldav-command-&lt;version&gt;.jar\n# used to execute commands by a triggered event\n# multiple calendars (calerdar-id) can be seperated by commas\n#caldavCommand:readCalendars=<calendar-id>\ncaldavCommand:readCalendars=command\n\n# Additionally needed binding: org.openhab.binding.caldav-personal-&lt;version&gt;.jar\n# used to record and simulate presence and to show upcoming/active events\n# multiple calendars (calerdar-id) can be seperated by commas\n#caldavPersonal:usedCalendars=<calendar-id>\ncaldavPersonal:usedCalendars=dienstlich,muell\n\n# If one of these identifiers can be found inside the place of the event, \n# this event will not be used for presence\n#caldavPersonal:homeIdentifiers=<values seperated by commas>\n")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("pre",[t("code",[this._v('String OfficeCalName0\t"Termin jetzt [%s]"\t\t<calendar>\t{ caldavPersonal="calendar:dienstlich type:ACTIVE eventNr:1 value:NAME" } //eventNr for concurrent events\nDateTime OfficeCalTime0\t"Beginn [%1$tT, %1$td.%1$tm.%1$tY]"\t\t\t<calendar>\t{ caldavPersonal="calendar:dienstlich type:ACTIVE eventNr:1 value:START" } //eventNr for concurrent events\nString OfficeCalName1\t"nächster Termin [%s]"\t<calendar>\t{ caldavPersonal="calendar:dienstlich type:UPCOMING eventNr:1 value:NAME" }\nDateTime OfficeCalTime1\t"Beginn [%1$tT, %1$td.%1$tm.%1$tY]"\t\t\t<calendar>\t{ caldavPersonal="calendar:dienstlich type:UPCOMING eventNr:1 value:START" }\nString OfficeCalName2\t"übernächster Termin [%s]" <calendar> { caldavPersonal="calendar:dienstlich type:UPCOMING eventNr:2 value:NAME" }\nDateTime OfficeCalTime2\t"Beginn [%1$tT, %1$td.%1$tm.%1$tY]" \t\t\t<calendar> { caldavPersonal="calendar:dienstlich type:UPCOMING eventNr:2 value:START" }\n')])])}],!1,null,null,null);i.options.__file="readme.md";t.default=i.exports}}]);