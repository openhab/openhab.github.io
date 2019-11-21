(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{500:function(e,t,i){"use strict";i.r(t);var n=i(0),a=Object(n.a)({},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"content"},[e._m(0),e._v(" "),i("AddonLogo"),e._v(" "),i("p",[e._v("The Ecobee Action bundle provides actions such as setting and clearing program holds, sending a text message to the thermostat's display, renaming a remote wireless sensor, and other functions that cannot be performed by setting object properties.")]),e._v(" "),e._m(1),e._v(" "),i("p",[e._v("The Ecboee Action bundle requires that the Ecobee Binding (1.x) is also installed.  Read the "),i("a",{attrs:{href:"https://www.ecobee.com/home/developer/api/documentation/v1/functions/using-functions.shtml",target:"_blank",rel:"noopener noreferrer"}},[e._v("Ecobee function API documentation"),i("OutboundLink")],1),e._v(" to be sure you know the rules for calling these actions.")]),e._v(" "),e._m(2),e._v(" "),e._m(3),e._v(" "),e._m(4),e._v(" "),e._m(5),e._v(" "),i("DocPreviousVersions"),e._v(" "),i("EditPageLink")],1)},[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"ecobee-actions"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ecobee-actions","aria-hidden":"true"}},[this._v("#")]),this._v(" Ecobee Actions")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"prerequisites"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites","aria-hidden":"true"}},[this._v("#")]),this._v(" Prerequisites")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"actions"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#actions","aria-hidden":"true"}},[this._v("#")]),this._v(" Actions")])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ul",[i("li",[e._v("ecobeeAcknowledge(String selection, String thermostatIdentifier, String ackRef, String ackType, "),i("em",[e._v("Boolean remindMeLater")]),e._v(") - Acknowledge an alert.")]),e._v(" "),i("li",[e._v("ecobeeControlPlug(String selection, String plugName, String plugState, "),i("em",[e._v("Date startDateTime")]),e._v(", "),i("em",[e._v("Date endDateTime")]),e._v(", "),i("em",[e._v("String holdType")]),e._v(", "),i("em",[e._v("Number holdHours")]),e._v(") - Control the on/off state of a plug by setting a hold on the plug.")]),e._v(" "),i("li",[e._v("ecobeeCreateVacation(String selection, String name, Number coolHoldTemp, Number heatHoldTemp, "),i("em",[e._v("Date startDateTime")]),e._v(", "),i("em",[e._v("Date endDateTime")]),e._v(", "),i("em",[e._v("String fan")]),e._v(", "),i("em",[e._v("Number fanMinOnTime")]),e._v(") - Create a vacation event on the thermostat.")]),e._v(" "),i("li",[e._v("ecobeeDeleteVacation(String selection, String name) - Delete a vacation event from a thermostat.")]),e._v(" "),i("li",[e._v("ecobeeResetPreferences(String selection) - Set all user configurable settings back to the factory default values.")]),e._v(" "),i("li",[e._v("ecobeeResumeProgram(String selection, "),i("em",[e._v("Boolean resumeAll")]),e._v(") - Remove the currently running event providing the event is not a mandatory demand response event.")]),e._v(" "),i("li",[e._v("ecobeeSendMessage(String selection, String text) - Send an alert message to the thermostat.")]),e._v(" "),i("li",[e._v("ecobeeSetHold(String selection, "),i("em",[e._v("Number coolHoldTemp")]),e._v(", "),i("em",[e._v("Number heatHoldTemp")]),e._v(", "),i("em",[e._v("String holdClimateRef")]),e._v(", "),i("em",[e._v("Date startDateTime")]),e._v(", "),i("em",[e._v("Date endDateTime")]),e._v(", "),i("em",[e._v("String holdType")]),e._v(", "),i("em",[e._v("Number holdHours")]),e._v(") - Set the thermostat into a hold with the specified temperature.")]),e._v(" "),i("li",[e._v("ecobeeSetHold(String selection, "),i("code",[e._v("Map<String, Object>")]),e._v(" params, "),i("em",[e._v("Date startDateTime")]),e._v(", "),i("em",[e._v("Date endDateTime")]),e._v(", "),i("em",[e._v("String holdType")]),e._v(", "),i("em",[e._v("Number holdHours")]),e._v(") - Set the thermostat into a hold with the specified event params.")]),e._v(" "),i("li",[e._v("ecobeeSetOccupied(String selection, Boolean occupied, "),i("em",[e._v("Date startDateTime")]),e._v(", "),i("em",[e._v("Date endDateTime")]),e._v(", "),i("em",[e._v("String holdType")]),e._v(", "),i("em",[e._v("Number holdHours")]),e._v(") - Switches a (EMS model only) thermostat from occupied mode to unoccupied, or vice versa.")]),e._v(" "),i("li",[e._v("ecobeeUpdateSensor(String selection, String name, String deviceId, String sensorId) - Update the name of an ecobee3 remote sensor.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Parameters in "),t("em",[this._v("italics")]),this._v(" are optional, in which case each unused parameter must be replaced with "),t("code",[this._v("null")]),this._v(".")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("The "),t("code",[this._v("selection")]),this._v(" parameter is a string that identifies the thermostat(s) against which the action is performed, identical in format to "),t("code",[this._v("<thermostat>")]),this._v(" used in the Ecobee binding (1.x).")])}],!1,null,null,null);a.options.__file="readme.md";t.default=a.exports}}]);