(window.webpackJsonp=window.webpackJsonp||[]).push([[96],{233:function(t,e,s){t.exports=s.p+"assets/img/Accueil_Openhab_2.a571466a.png"},678:function(t,e,s){"use strict";s.r(e);var a=[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"installation-on-macos"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#installation-on-macos","aria-hidden":"true"}},[this._v("#")]),this._v(" Installation on macOS")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"table-of-contents"},[e("ul",[e("li",[e("a",{attrs:{href:"#installation"}},[this._v("Installation")])]),e("li",[e("a",{attrs:{href:"#launching-openhab"}},[this._v("Launching openHAB")])]),e("li",[e("a",{attrs:{href:"#updating-openhab"}},[this._v("Updating openHAB")]),e("ul",[e("li",[e("a",{attrs:{href:"#versions-2-1-0-and-above"}},[this._v("Versions 2.1.0 and Above")])]),e("li",[e("a",{attrs:{href:"#older-versions"}},[this._v("Older Versions")])])])]),e("li",[e("a",{attrs:{href:"#backup-and-restore"}},[this._v("Backup and Restore")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"installation"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#installation","aria-hidden":"true"}},[this._v("#")]),this._v(" Installation")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("Stable")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("Snapshot (Unstable)")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Choose a folder name to host your install. Be aware that the path to this folder "),e("strong",[this._v("must not contain any spaces")]),this._v(".\nThe path chosen here is "),e("code",[this._v("openhab")]),this._v(".")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[this._v("mkdir")]),this._v(" ~/openhab\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[this._v("cd")]),this._v(" ~/openhab\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Next, unzip the file downloaded earlier.\nAssuming that you have downloaded the "),e("strong",[this._v("stable")]),this._v(" build to your download folder, the command will be:")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[this._v("unzip")]),this._v(" ~/Downloads/openhab-2.x.x.zip -d "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[this._v(".")]),this._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Check that the zip extraction was successful by using the "),e("code",[this._v("ls")]),this._v(" command in order to check the contents of the folder.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[this._v("user:openhab $ "),e("span",{pre:!0,attrs:{class:"token function"}},[this._v("ls")]),this._v("\nLICENSE.TXT  conf     start.bat  start_debug.bat  userdata\naddons       runtime  start.sh   start_debug.sh\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"launching-openhab"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#launching-openhab","aria-hidden":"true"}},[this._v("#")]),this._v(" Launching openHAB")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[this._v("./start.sh\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v('The first run may take a while to process, wait until the "'),e("code",[this._v("openhab>")]),this._v('" prompt appears, for example:')])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-shell_session extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("user:openhab $ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" ./start.sh\nLaunching the openHAB runtime"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".\n\n                          __  _____    ____\n  ____  ____  ___  ____  / / / /   "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("  / __ "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n / __ "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("/ __ "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("/ _ "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("/ __ "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("/ /_/ / /"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" / __  "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n/ /_/ / /_/ /  __/ / / / __  / ___ "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("/ /_/ /\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("____/ .___/"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("___/_/ /_/_/ /_/_/  "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("_/_____/\n    /_/                        "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2.0")]),t._v(".0 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".\n\n\nHit "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'<tab>'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" a list of available commands\nand "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'[cmd] --help'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("help")]),t._v(" on a specific command.\nHit "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'<ctrl-d>'")]),t._v(" or "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("type")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'system:shutdown'")]),t._v(" or "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'logout'")]),t._v(" to "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("shutdown")]),t._v(" openHAB.\n\nopenhab"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:s(233),alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"updating-openhab"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#updating-openhab","aria-hidden":"true"}},[this._v("#")]),this._v(" Updating openHAB")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"versions-2-1-0-and-above"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#versions-2-1-0-and-above","aria-hidden":"true"}},[this._v("#")]),this._v(" Versions 2.1.0 and Above")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("From version 2.1.0, openHAB is distributed with the update script included.\nThis script should be called from within openHAB's root directory.\nAssuming the openHAB directory is in "),e("code",[this._v("~/openhab")]),this._v(", simply run the following commands to update to the next major version of openHAB:")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[this._v("cd")]),this._v(" ~/openhab\n"),e("span",{pre:!0,attrs:{class:"token function"}},[this._v("sudo")]),this._v(" runtime/bin/update\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[this._v("sudo")]),this._v(" runtime/bin/update "),e("span",{pre:!0,attrs:{class:"token number"}},[this._v("2.0")]),this._v(".0\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[this._v("sudo")]),this._v(" runtime/bin/update "),e("span",{pre:!0,attrs:{class:"token number"}},[this._v("2.2")]),this._v(".0-SNAPSHOT\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"older-versions"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#older-versions","aria-hidden":"true"}},[this._v("#")]),this._v(" Older Versions")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("If you're using a version earlier than 2.1.0, then you can use the following commands in Terminal to download the script and run it.\nAssuming the openHAB directory is in "),e("code",[this._v("~/openhab")]),this._v(" simply run the following commands to update to the next major version of openHAB:")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" ~/openhab\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sh")]),t._v(" -c "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"'),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$(")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" -fsSL https://raw.githubusercontent.com/openhab/openhab-distro/master/distributions/openhab/src/main/resources/bin/update"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v(")")])]),t._v('"')]),t._v(" -- "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2.1")]),t._v(".0\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"backup-and-restore"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#backup-and-restore","aria-hidden":"true"}},[this._v("#")]),this._v(" Backup and Restore")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("To make a backup of your openHAB 2 system, you need to retain your configuration and userdata files.\nAs of version 2.2.0, you can use openHAB's scripts for storing your configuration in a zip file. From the terminal:\nBy default, the script saves the zip file in "),e("code",[this._v("/var/lib/openhab2/backups")]),this._v(" for automatic installs and "),e("code",[this._v("openhab2/backups")]),this._v(" for manual installs.\nYou can change the default path by setting the $OPENHAB_BACKUPS environment variable.")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$OPENHAB_RUNTIME")]),t._v("/bin/backup\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## OR ##")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$OPENHAB_RUNTIME")]),t._v("/bin/backup /path/to/backups/folder/myBackup.zip\n")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$OPENHAB_HOME")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$OPENHAB_RUNTIME")]),t._v("/bin/restore "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$OPENHAB_BACKUPS")]),t._v("/myBackup.zip\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("If you're unsure how to use the above files, just use "),e("code",[this._v("--help")]),this._v(" or "),e("code",[this._v("-h")]),this._v(":")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token variable"}},[this._v("$OPENHAB_RUNTIME")]),this._v("/bin/backup --help\n")])])])}],n=s(1),r=Object(n.a)({},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),s("p",[t._v("This page is structured as follows:")]),t._v(" "),s("p"),t._m(1),s("p"),t._v(" "),s("p",[t._v("If you're unfamiliar with using the macOS terminal, then feel free to follow the many guides on the internet. For example:")]),t._v(" "),s("p",[s("a",{attrs:{href:"http://www.macworld.co.uk/feature/mac-software/how-use-terminal-on-mac-3608274/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Macworld: How to use Terminal on mac"),s("OutboundLink")],1)]),t._v(" "),t._m(2),t._v(" "),s("p",[t._v("openHAB is packaged as a platform independent "),s("code",[t._v("zip")]),t._v(" archive. Installation is as simple as unziping it into a unique folder.\nFirst, make sure that your system meets the "),s("router-link",{attrs:{to:"./index.html#prerequisites"}},[t._v("prerequisites")]),t._v(".")],1),t._v(" "),s("p",[t._v("You have the choice to use the current stable version or the latest snapshot build:")]),t._v(" "),s("ul",[s("li",[t._m(3),t._v(" "),s("p",[t._v("The stable builds have undergone testing, it is the recommended version to download.\nDownload the latest "),s("code",[t._v("openhab-2.x.x.zip")]),t._v(" "),s("a",{attrs:{href:"https://www.openhab.org/download/",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),s("OutboundLink")],1),t._v(".")])]),t._v(" "),s("li",[t._m(4),t._v(" "),s("p",[t._v("Snapshots are built daily, and contain the latest changes to openHAB's source code.\nThese changes haven't undergone the same amount of testing as the stable releases, so only use them if you "),s("strong",[t._v("need")]),t._v(" a new feature.\nDownload the latest "),s("code",[t._v("openhab-2.x.x-SNAPSHOT.zip")]),t._v(" "),s("a",{attrs:{href:"https://www.openhab.org/download/",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),s("OutboundLink")],1),t._v(".")])])]),t._v(" "),s("p",[t._v("The following instructions are performed in a terminal window. At first launch of the terminal, you will be inside your home directory.")]),t._v(" "),t._m(5),t._v(" "),t._m(6),t._m(7),t._v(" "),t._m(8),t._m(9),t._v(" "),t._m(10),s("p",[t._v("If you see something similar to the above, then you're all set to launch openHAB for the first time.")]),t._v(" "),t._m(11),t._v(" "),s("p",[t._v("From inside openHAB's root directory (e.g. `~/openhab/), run openHAB's startup script by using the following command.")]),t._v(" "),t._m(12),t._m(13),t._v(" "),t._m(14),s("p",[t._v("Without closing the terminal, open your favorite web browser and type the following URL: "),s("a",{attrs:{href:"http://localhost:8080",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://localhost:8080"),s("OutboundLink")],1),t._v(", you should see the openHAB welcome screen, and you're all set to "),s("router-link",{attrs:{to:"/docs/tutorial/1sttimesetup.html"}},[t._v("using openHAB")]),t._v(".")],1),t._v(" "),t._m(15),t._v(" "),t._m(16),t._v(" "),s("p",[t._v("openHAB can use a script to update to any other version, or from stable to snapshot and visa-versa.")]),t._v(" "),t._m(17),t._v(" "),t._m(18),t._v(" "),t._m(19),s("p",[t._v("You can also specify any version as a parameter. For example, to switch back to 2.0.0:")]),t._v(" "),t._m(20),s("p",[t._v('You may also change to openHAB\'s more frequent, but less stable snapshot builds.\nJust append "-SNAPSHOT" to the target version, e.g.:')]),t._v(" "),t._m(21),t._m(22),t._v(" "),t._m(23),t._v(" "),t._m(24),t._m(25),t._v(" "),t._m(26),t._v(" "),t._m(27),s("p",[t._v("To restore from these generated files:")]),t._v(" "),t._m(28),t._m(29),t._v(" "),t._m(30),s("DocPreviousVersions"),t._v(" "),s("EditPageLink")],1)},a,!1,null,null,null);e.default=r.exports}}]);