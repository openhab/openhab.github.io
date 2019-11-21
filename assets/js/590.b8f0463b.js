(window.webpackJsonp=window.webpackJsonp||[]).push([[590],{684:function(e,t,a){"use strict";a.r(t);var n=a(1),s=Object(n.a)({},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"content"},[e._m(0),e._v(" "),a("p",[e._v("Docker is the most popular among a collection of tools that provide containerization.\nContainerization allows one to run a server in its own isolated environment without the overhead of running a full virtual machine.")]),e._v(" "),a("p",[e._v("This page is structured as follows:")]),e._v(" "),a("p"),e._m(1),a("p"),e._v(" "),e._m(2),e._v(" "),a("p",[e._v("There are several reasons one would want to run openHAB in a Docker container.\nThese include:")]),e._v(" "),e._m(3),e._v(" "),a("p",[e._v("However, this flexibility comes at a cost.\nFor example, because openHAB is running in its own container with only enough installed to run openHAB, the Exec binding is very likely to be useless to you because the container will not have access to the programs and files you need.")]),e._v(" "),e._m(4),e._v(" "),e._m(5),e._v(" "),a("p",[e._v("The Image has a very minimal installation of Linux with no services running and just enough installed to allow openHAB to run.")]),e._v(" "),a("p",[e._v("At the time of this writing, the official image uses the latest snapshot version of openHAB 2.")]),e._v(" "),e._m(6),e._v(" "),e._m(7),e._v(" "),a("p",[a("a",{attrs:{href:"https://hub.docker.com/r/openhab/openhab/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Docker Hub"),a("OutboundLink")],1),e._v(" has the basic information necessary to acquire and run the Docker image.\nPlease review those instructions before continuing to select the correct image for your machine and download the image.")]),e._v(" "),e._m(8),e._v(" "),e._m(9),e._v(" "),e._m(10),e._m(11),e._v(" "),e._m(12),e._m(13),e._v(" "),e._m(14),e._v(" "),e._m(15),e._m(16),e._v(" "),a("p",[e._v("Note, always review the README on "),a("a",{attrs:{href:"https://hub.docker.com/r/openhab/openhab/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Docker Hub"),a("OutboundLink")],1),e._v(" for the most up to date set of recommended arguments and environment variables.\nServices can be run an maintained on a Linux machine one of two ways, using Docker or using the system's built in service management (e.g. systemd).\nIf using docker to manage the service, run the following command:")]),e._v(" "),e._m(17),a("p",[e._v("Where")]),e._v(" "),e._m(18),e._v(" "),e._m(19),e._v(" "),a("p",[e._v("See below for an explanation of the fields passed to Docker and potential additional fields.")]),e._v(" "),e._m(20),e._v(" "),e._m(21),e._v(" "),a("p",[e._v("To change the runtime parameters stop the container then execute the long command above with the new parameters.")]),e._v(" "),e._m(22),e._v(" "),a("p",[e._v("Note, always review the README on "),a("a",{attrs:{href:"https://hub.docker.com/r/openhab/openhab/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Docker Hub"),a("OutboundLink")],1),e._v(" for the most up to date set of recommended arguments and environment variables.\nIf running on a Systemd based Linux distro (Ubuntu 16.04 to be specific).\nThe following openhab2.service file will start a new openHAB 2 container every time it starts the service and destroy that container when the service stops.\nWhat that means is any data that you want to preserve between restarts of openHAB 2 (e.g. configuration, databases, etc.) must be mounted from your host file system into the container.")]),e._v(" "),a("p",[e._v("Creating a new container on every run greatly simplifies the upgrade and update process.\nIt also ensures that you start with a fresh install every time you run which can avoid some problems.")]),e._v(" "),e._m(23),e._m(24),e._v(" "),e._m(25),e._v(" "),e._m(26),e._v(" "),e._m(27),e._v(" "),e._m(28),e._v(" "),a("p",[e._v("Note, always review the README on "),a("a",{attrs:{href:"https://hub.docker.com/r/openhab/openhab/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Docker Hub"),a("OutboundLink")],1),e._v(" for the most up to date set of recommended arguments and environment variables.")]),e._v(" "),e._m(29),e._v(" "),e._m(30),e._v(" "),e._m(31),e._v(" "),a("p",[e._v("By default the openHAB user in the container is running with:")]),e._v(" "),e._m(32),e._v(" "),e._m(33),e._v(" "),a("p",[e._v("Stop the container:")]),e._v(" "),e._m(34),e._v(" "),a("p",[e._v("Delete the container:")]),e._v(" "),e._m(35),e._v(" "),a("p",[e._v("Pull down the latest image:")]),e._v(" "),e._m(36),e._m(37),e._v(" "),a("p",[e._v("Restart the container using the full command above.")]),e._v(" "),a("p",[e._v("The Docker image will automatically perform an upgrade on your mapped in userdata folder whenever it detects that your userdata version and the image's version differ.\nIt determines the versions are different by comparing userdata/etc/version.properties.\nAny changes between the two files will trigger and upgrade.")]),e._v(" "),a("p",[e._v("The upgrade process first creates a backup of the entire mapped in userdata folder (skipping the backup folder) and places it as a dated tar file into userdata/backup.\nIt then performs all the same steps that the upgrade script and which are performed by an apt-get/yum upgrade.")]),e._v(" "),a("DocPreviousVersions"),e._v(" "),a("EditPageLink")],1)},[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"openhab-2-inside-a-docker-container"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#openhab-2-inside-a-docker-container","aria-hidden":"true"}},[this._v("#")]),this._v(" openHAB 2 inside a Docker Container")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#why-docker"}},[e._v("Why Docker?")])]),a("li",[a("a",{attrs:{href:"#about-the-openhab-installed-in-the-image"}},[e._v("About the openHAB installed in the Image")])]),a("li",[a("a",{attrs:{href:"#installation-through-docker"}},[e._v("Installation through Docker")]),a("ul",[a("li",[a("a",{attrs:{href:"#obtaining-the-official-image-from-dockerhub"}},[e._v("Obtaining the Official image from DockerHub")])]),a("li",[a("a",{attrs:{href:"#create-the-openhab-user"}},[e._v("Create the openhab user")])]),a("li",[a("a",{attrs:{href:"#create-the-openhab-conf-userdata-and-addon-directories"}},[e._v("Create the openHAB conf, userdata, and addon directories")])]),a("li",[a("a",{attrs:{href:"#running-the-container-as-a-service-managed-by-docker"}},[e._v("Running the Container as a Service Managed by Docker")])]),a("li",[a("a",{attrs:{href:"#running-the-container-as-a-service-controlled-by-systemd"}},[e._v("Running the Container as a Service Controlled by Systemd")])])])]),a("li",[a("a",{attrs:{href:"#explanation-of-arguments-passed-to-docker"}},[e._v("Explanation of Arguments Passed to Docker")])]),a("li",[a("a",{attrs:{href:"#environment-variables"}},[e._v("Environment Variables")])]),a("li",[a("a",{attrs:{href:"#updating-the-image"}},[e._v("Updating the Image")])])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"why-docker"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#why-docker","aria-hidden":"true"}},[this._v("#")]),this._v(" Why Docker?")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ul",[a("li",[e._v("easily test out different versions")]),e._v(" "),a("li",[e._v("run multiple instances side by side")]),e._v(" "),a("li",[e._v("easily map the OH ports to other ports without modifying configs")]),e._v(" "),a("li",[e._v("isolate OH from the rest of your server environment (e.g. configure the container's networking so the only way it can be accessed is through a reverse proxy)")]),e._v(" "),a("li",[e._v("orchestration and automated deployment of OH and related servers")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"about-the-openhab-installed-in-the-image"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#about-the-openhab-installed-in-the-image","aria-hidden":"true"}},[this._v("#")]),this._v(" About the openHAB installed in the Image")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Inside the Docker Image, openHAB is installed to "),t("code",[this._v("/openhab")]),this._v(".\nThe install is a manual installation so all of the files are located here.\nThis is also set as the home directory of the "),t("code",[this._v("openhab")]),this._v(" user.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"installation-through-docker"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#installation-through-docker","aria-hidden":"true"}},[this._v("#")]),this._v(" Installation through Docker")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"obtaining-the-official-image-from-dockerhub"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#obtaining-the-official-image-from-dockerhub","aria-hidden":"true"}},[this._v("#")]),this._v(" Obtaining the Official image from DockerHub")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"create-the-openhab-user"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#create-the-openhab-user","aria-hidden":"true"}},[this._v("#")]),this._v(" Create the openhab user")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Just because one is running in an isolated container does not mean running as root is recommended.\nSo first create an "),t("code",[this._v("openhab")]),this._v(" user configured to be a system user with no home and no shell.\nThis can be done on Ubuntu and Raspbian with the command:")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[this._v("sudo")]),this._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[this._v("useradd")]),this._v(" -r -s /sbin/nologin openhab\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Add your regular user to the "),t("code",[this._v("openhab")]),this._v(" group.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[this._v("usermod")]),this._v(" -a -G openhab "),t("span",{pre:!0,attrs:{class:"token operator"}},[this._v("<")]),this._v("user"),t("span",{pre:!0,attrs:{class:"token operator"}},[this._v(">")]),this._v("\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"create-the-openhab-conf-userdata-and-addon-directories"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#create-the-openhab-conf-userdata-and-addon-directories","aria-hidden":"true"}},[this._v("#")]),this._v(" Create the openHAB conf, userdata, and addon directories")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("These directories will be mounted into the running Docker container and are where the configurations and persistence data will be stored.\nNote that the software running inside a Docker container cannot follow the symbolic links located in a mounted volume.\nMake sure the "),t("code",[this._v("openhab")]),this._v(" user owns these directories.")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[e._v("mkdir")]),e._v(" /opt/openhab\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("mkdir")]),e._v(" /opt/openhab/conf\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("mkdir")]),e._v(" /opt/openhab/userdata\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("mkdir")]),e._v(" /opt/openhab/addons\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("chown")]),e._v(" -R openhab:openhab /opt/openhab\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"running-the-container-as-a-service-managed-by-docker"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#running-the-container-as-a-service-managed-by-docker","aria-hidden":"true"}},[this._v("#")]),this._v(" Running the Container as a Service Managed by Docker")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("docker run "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n        --name openhab "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n        --net"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("host "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n        -v /etc/localtime:/etc/localtime:ro "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n        -v /etc/timezone:/etc/timezone:ro "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n        -v /opt/openhab/conf:/openhab/conf "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n        -v /opt/openhab/userdata:/openhab/userdata "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n        -v /opt/openhab/addons:/openhab/addons "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n        -d "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n        -e "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("USER_ID")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("uid"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n        -e "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("GROUP_ID")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("gid"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n        --restart"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("always "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n        openhab/openhab:"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("version"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("-"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("architecture"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("-"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("distribution"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n")])])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ul",[a("li",[a("code",[e._v("<uid>")]),e._v(" is the user ID number for the "),a("code",[e._v("openhab")]),e._v(" user which you can obtain using the command "),a("code",[e._v("id openhab")]),e._v(",")]),e._v(" "),a("li",[a("code",[e._v("<gid>")]),e._v(" is the group ID number for the "),a("code",[e._v("openhab")]),e._v(" user,")]),e._v(" "),a("li",[a("code",[e._v("<version>")]),e._v(" is the version of openHAB,")]),e._v(" "),a("li",[a("code",[e._v("<architecture>")]),e._v(" is the architecture of your system and")]),e._v(" "),a("li",[a("code",[e._v("<distribution>")]),e._v(" is the base system (debian or alpine).")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("It is important that the ID number is passed in.\nThe ID for the "),t("code",[this._v("openhab")]),this._v(" user inside the container will not match the ID of the user on your host system and file permissions may be a bit odd (e.g. why does www-data own my openHAB config files?).")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v('Once it successfully runs (it should be listed with a CREATED time that does not include "restarting" when running '),t("code",[this._v("docker ps")]),this._v("):")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ul",[a("li",[e._v("To stop the service run "),a("code",[e._v("docker stop openhab")])]),e._v(" "),a("li",[e._v("To restart the service run "),a("code",[e._v("docker restart openhab")])]),e._v(" "),a("li",[e._v("To start the service run "),a("code",[e._v("docker start openhab")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"running-the-container-as-a-service-controlled-by-systemd"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#running-the-container-as-a-service-controlled-by-systemd","aria-hidden":"true"}},[this._v("#")]),this._v(" Running the Container as a Service Controlled by Systemd")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("Unit"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("Description")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("openHAB "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("2")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("Requires")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("docker.service\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("After")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("docker.service\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("Service"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("Restart")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("always\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("ExecStart")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("/usr/bin/docker run --name"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("%n --net"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("host "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n  -v /etc/localtime:/etc/localtime:ro "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n  -v /etc/timezone:/etc/timezone:ro "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n  -v /opt/openhab/conf:/openhab/conf "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n  -v /opt/openhab/userdata:/openhab/userdata "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n  -v /opt/openhab/addons:/openhab/addons "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n  -v /opt/openhab/.java:/openhab/.java "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n  --device"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("/dev/ttyUSB0 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n  -e "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("USER_ID")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("uid_of_openhab"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n  -e "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("GROUP_ID")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("gid_of_openhab"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n  openhab/openhab:"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("version"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("-"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("architecture"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("-"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("distribution"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("ExecStop")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("/usr/bin/docker stop -t "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("2")]),e._v(" %n "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v(" /usr/bin/docker "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("rm")]),e._v(" -f %n\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("Install"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("WantedBy")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("multi-user.target\n")])])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",[e._v("Where "),a("code",[e._v("<uid>")]),e._v(" is the user ID number for the "),a("code",[e._v("openhab")]),e._v(" user which you can obtain using the command "),a("code",[e._v("id openhab")]),e._v(", "),a("code",[e._v("<version>")]),e._v(" is the version of openHAB, "),a("code",[e._v("<architecture>")]),e._v(" is the architecture of your system and "),a("code",[e._v("<distribution>")]),e._v(" is the base system (debian or alpine).\nIt is important that the ID number is passed in.\nThe ID for the "),a("code",[e._v("openhab")]),e._v(" user inside the container will not match the ID of the user on your host system and file permissions may be a bit odd (e.g. why does www-data own my openHAB config files?).")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Place this openhab2.service file into "),t("code",[this._v("/etc/systemd/system")]),this._v(".")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Then run "),t("code",[this._v("sudo systemctl enable openhab2.service")]),this._v(".")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Finally run "),t("code",[this._v("sudo systemctl start openhab2.service")]),this._v(" to start openHAB running.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"explanation-of-arguments-passed-to-docker"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#explanation-of-arguments-passed-to-docker","aria-hidden":"true"}},[this._v("#")]),this._v(" Explanation of Arguments Passed to Docker")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ul",[a("li",[a("code",[e._v("/usr/bin/docker run")]),e._v(" : create a new container from the passed in Image (last argument)")]),e._v(" "),a("li",[a("code",[e._v("--name=openhab")]),e._v(" : give the container a human remember able name")]),e._v(" "),a("li",[a("code",[e._v("--net=host")]),e._v(" : by default Docker will place a container into its own network stack. However, openHAB 2 requires UPnP discovery so this parameter makes the Docker container use the host's network stack.")]),e._v(" "),a("li",[a("code",[e._v("-v /etc/localtime:/etc/localtime:ro")]),e._v(" : ties the time of the container to the host's time, read only so the container cannot change the host's time")]),e._v(" "),a("li",[a("code",[e._v("-v /etc/timezone:/etc/timezone:ro")]),e._v(" : ties the timezone of the container to the host's time zone, read only so the container cannot change the host's time zone")]),e._v(" "),a("li",[a("code",[e._v("-v /opt/openhab/conf:/openhab/conf")]),e._v(" : location of the conf folder for openHAB configurations (NOTE: you must create these folders on the host before running the container)")]),e._v(" "),a("li",[a("code",[e._v("-v /opt/openhab/userdata:/openhab/userdata")]),e._v(" : location for logs, cache, persistence databases, etc.")]),e._v(" "),a("li",[a("code",[e._v("-v /opt/openhab/addons:/openhab/addons")]),e._v(" : only needed if installing addons unavailable via PaperUI or the Karaf Console")]),e._v(" "),a("li",[a("code",[e._v("-v /opt/openhab/.java:/openhab/.java")]),e._v(" : needed by the Nest 1.x binding (and others?), location of the security token")]),e._v(" "),a("li",[a("code",[e._v("--device=/dev/ttyUSB0")]),e._v(" : location of my zwave controller, change and/or add more --device tags to pass all your devices needed by openHAB to the container")]),e._v(" "),a("li",[a("code",[e._v("--restart=always")]),e._v(" : if the container crashes or the system reboots the container is restarted")]),e._v(" "),a("li",[a("code",[e._v("openhab/openhab:<version>-<architecture>-<distribution>")]),e._v(" : name of the Docker Image")]),e._v(" "),a("li",[a("code",[e._v("start_debug.sh")]),e._v(" : You can start the container with the command "),a("code",[e._v("docker run -it openhab/openhab:<version>-<architecture>-<distribution> ./start_debug.sh")]),e._v(" to get into the debug shell. You might need to mount additional volumes and parameters as described above.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"environment-variables"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#environment-variables","aria-hidden":"true"}},[this._v("#")]),this._v(" Environment Variables")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ul",[a("li",[a("code",[e._v("EXTRA_JAVA_OPTS")]),e._v('=""')]),e._v(" "),a("li",[a("code",[e._v("LC_ALL")]),e._v("=en_US.UTF-8")]),e._v(" "),a("li",[a("code",[e._v("LANG")]),e._v("=en_US.UTF-8")]),e._v(" "),a("li",[a("code",[e._v("LANGUAGE")]),e._v("=en_US.UTF-8")]),e._v(" "),a("li",[a("code",[e._v("OPENHAB_HTTP_PORT")]),e._v("=8080")]),e._v(" "),a("li",[a("code",[e._v("OPENHAB_HTTPS_PORT")]),e._v("=8443")]),e._v(" "),a("li",[a("code",[e._v("USER_ID")]),e._v("=9001")]),e._v(" "),a("li",[a("code",[e._v("GROUP_ID")]),e._v("=9001")]),e._v(" "),a("li",[a("code",[e._v("CRYPTO_POLICY")]),e._v("=limited")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[t("code",[this._v("uid=9001(openhab) gid=9001(openhab) groups=9001(openhab)")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"updating-the-image"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#updating-the-image","aria-hidden":"true"}},[this._v("#")]),this._v(" Updating the Image")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("code",[this._v("docker stop openhab")]),this._v(" or "),t("code",[this._v("sudo systemctl stop openhab")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("code",[this._v("docker rm openhab")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("docker pull openhab/openhab:"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("version"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("-"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("architecture"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("-"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("distribution"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("where "),t("code",[this._v("<version>")]),this._v(" is the version of openHAB, "),t("code",[this._v("<architecture>")]),this._v(" is your architecture and "),t("code",[this._v("<distribution>")]),this._v(" is the base system (debian or alpine).")])}],!1,null,null,null);t.default=s.exports}}]);