(window.webpackJsonp=window.webpackJsonp||[]).push([[380],{353:function(e,t,n){e.exports=n.p+"66242aaf2c7c6078e1e9b2b04d4ae438.png"},354:function(e,t,n){e.exports=n.p+"4084b4555150c535edadcf3776b126be.png"},444:function(e,t,n){"use strict";n.r(t);var o=[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"setting-up-an-ide-for-openhab"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#setting-up-an-ide-for-openhab","aria-hidden":"true"}},[this._v("#")]),this._v(" Setting up an IDE for openHAB")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"prerequisites"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites","aria-hidden":"true"}},[this._v("#")]),this._v(" Prerequisites")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"installation"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#installation","aria-hidden":"true"}},[this._v("#")]),this._v(" Installation")])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",[this._v('Launch the Eclipse Installer and switch to "Advanced Mode" in the top right menu:\n'),t("img",{attrs:{src:n(353),alt:"Step 0"}})])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",[this._v('Choose the "Eclipse IDE for Java Developers" and select "Next":\n'),t("img",{attrs:{src:n(354),alt:"Step 1"}})])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v('Note that you will find the sources in a subfolder called "git" within your selected installation folder. You can use any kind of git client here, if you do not want to use the git support from within the Eclipse IDE.\nIf you want to push changes, you need to do so to your personal fork of the repository in order to create a pull request. You will find more details in the '),t("a",{attrs:{href:"../contributing/contributing"}},[this._v('"How to contribute"')]),this._v(" documentation.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"building-running-and-debugging"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#building-running-and-debugging","aria-hidden":"true"}},[this._v("#")]),this._v(" Building, Running and Debugging")])},function(){var e=this.$createElement,t=this._self._c||e;return t("pre",[t("code",[this._v('logger.debug("Initializing YahooWeather handler.");\n')])])}],i=n(0),a=Object(i.a)({},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"content"},[e._m(0),e._v(" "),n("p",[e._v("If you are a developer yourself, you might want to setup a development environment, so that you can debug and develop openHAB yourself.")]),e._v(" "),n("p",[e._v('Note that the project build is completely mavenized - so running "mvn install" on any repository root will nicely build all artifacts. For development and debugging, we recommend using an Eclipse IDE though. It should be possible to use other IDEs (e.g. NetBeans or IntelliJ), but you will have to work out how to resolve OSGi dependencies etc. yourself. So unless you have a strong reason to go for another IDE, we recommend using Eclipse.')]),e._v(" "),e._m(1),e._v(" "),n("p",[e._v("Please ensure that you have the following prerequisites installed on your machine:")]),e._v(" "),n("ol",[n("li",[n("a",{attrs:{href:"https://git-scm.com/downloads",target:"_blank",rel:"noopener noreferrer"}},[e._v("Git"),n("OutboundLink")],1)]),e._v(" "),n("li",[n("a",{attrs:{href:"https://maven.apache.org/download.cgi",target:"_blank",rel:"noopener noreferrer"}},[e._v("Maven 3.x"),n("OutboundLink")],1),e._v(" (optional, Eclipse m2e can also be used)")]),e._v(" "),n("li",[n("a",{attrs:{href:"http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Oracle JDK 8"),n("OutboundLink")],1)])]),e._v(" "),e._m(2),e._v(" "),n("p",[e._v("The Eclipse IDE is used for openHAB developments. The Eclipse Installer automatically prepares the IDE so that it comes with all required plug-ins, the correct workspace encoding settings, pre-configured code formatters and more. Simply follow these steps:")]),e._v(" "),n("ol",[n("li",[e._v("Download the "),n("a",{attrs:{href:"https://wiki.eclipse.org/Eclipse_Installer",target:"_blank",rel:"noopener noreferrer"}},[e._v("Eclipse Installer"),n("OutboundLink")],1)]),e._v(" "),e._m(3),e._v(" "),e._m(4),e._v(" "),n("li",[e._v('Expand the "'),n("a",{attrs:{href:"http://Github.com/openHAB",target:"_blank",rel:"noopener noreferrer"}},[e._v("Github.com/openHAB"),n("OutboundLink")],1),e._v('" entry, double click "openHAB Development" (the double click is important: The entry has to appear in the empty table at the bottom). Furthermore double-click all entries that you would want to have available in your workspace (you can select multiple/all of them). Make sure that all of them are listed in the table at the bottom and select "Next".')]),e._v(" "),n("li",[e._v('Now provide an installation folder (don\'t use spaces in the path on Windows!) and your Github id (used to push your changesets to) and select "Next".')]),e._v(" "),n("li",[e._v('The installation will now begin when pressing "Finish".')]),e._v(" "),n("li",[e._v('Once it is done, you will see the Eclipse Welcome Screen, which you can close by clicking "Workbench" on the top right. You will see that the installer not only set up an Eclipse IDE instance for you, but also checked out all selected git repositories and imported all projects into the workspace.')]),e._v(" "),n("li",[e._v('Your workspace should now fully compile and you can start the runtime by launching the "openHAB_Runtime" launch configuration.')])]),e._v(" "),e._m(5),e._v(" "),e._m(6),e._v(" "),n("p",[e._v("Now that you have the development environment set up, let's try to build, run and debug.")]),e._v(" "),n("p",[e._v("Building:")]),e._v(" "),n("p",[e._v('Building for the purpose of running is done from within eclipse. First take a look at the problems tab and check for existing errors. If you see something there after a clean install, do Help > Perform Setup Tasks. If errors remain, try to find them in the project. In my case a couple of bindings were failing to compile for unknown reasons. Simply right click on the offenders and "close project" them.')]),e._v(" "),n("p",[e._v("Let's do a Clean/Build cycle. Project > Clean ... > Clean all projects/Start build immediately. Eclipse should now take a short time to build everything. Check the Problems tab for errors. All errors should now be gone, and we can proceed to running.")]),e._v(" "),n("p",[e._v("Note, that if you wish to produce a distribution binary that you will later copy to a different machine, you will need to build in a different manner. Distribution builds are done with maven. Go into the root directory of the project and run 'mvn install'")]),e._v(" "),n("p",[e._v("Running:")]),e._v(" "),n("p",[e._v('In the Package Explorer tab you will see the OpenHAB components that were installed. Open the "Infrastructure > launch" folder. Right click on openHAB_Runtime.launch, select "Run as > openHAB_Runtime". You should now begin to see output in the console window.')]),e._v(" "),n("p",[e._v("Debugging:")]),e._v(" "),n("p",[e._v('For this exercise we will need the "ESH Extensions" package installed. Go into "ESH Extensions/org.eclipse.smarthome.binding.yahooweather" folder. This is the yahoo weather binding and we will use it as an example. Let\'s add a small change to the code, and put a breakpoint on the location so that we can see our changes show up in the debugger.')]),e._v(" "),n("p",[e._v("Open YahooWeatherHandler.java and take a look at line 60. It is the log print from the initialize function.")]),e._v(" "),e._m(7),e._v(" "),n("p",[e._v("Add some text to the string and save the file. Now put a breakpoint on this line. Build as above.")]),e._v(" "),n("p",[e._v("Debugging is done in the same way as running, but instead of Run as, select \"Debug as > openHAB_Runtime\". OpenHAB will launch, and the debugger will stop at the breakpoint, but our change won't be there. To fix this we need to let eclipse know that we've made changes to this binding.")]),e._v(" "),n("p",[e._v('Right click on openHAB_Runtime.launch > Run as > Run configurations ... Go to the Plug-ins tab. Notice that under "Target Platform" org.eclipse.smarthome.binding.yahooweather is checked. But, under Workspace the same org.eclipse.smarthome.binding.yahooweather is not checked. Do so now. Try the debug session again. You should now see the modified code show up in the debugger.')]),e._v(" "),n("DocPreviousVersions"),e._v(" "),n("EditPageLink")],1)},o,!1,null,null,null);a.options.__file="ide.md";t.default=a.exports}}]);