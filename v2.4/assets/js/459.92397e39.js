(window.webpackJsonp=window.webpackJsonp||[]).push([[459],{449:function(t,e,a){"use strict";a.r(e);var n=a(0),s=Object(n.a)({},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),a("p",[a("a",{attrs:{href:"https://eclipse.org/tycho/sitedocs/index.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Tycho"),a("OutboundLink")],1),t._v(" "),a("em",[t._v("is a set of "),a("a",{attrs:{href:"https://maven.apache.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Maven"),a("OutboundLink")],1),t._v(" plugins and extensions for building Eclipse plugins and OSGi bundles with Maven")]),t._v(" as it is described in the "),a("a",{attrs:{href:"https://eclipse.org/tycho/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Tycho project homepage"),a("OutboundLink")],1),t._v(". Tycho uses the Eclipse components metadata as much as possible (e.g. for plug-ins and bundles it determines the dependencies via the "),a("code",[t._v("MANIFEST.MF")]),t._v("file).")]),t._v(" "),t._m(2),t._v(" "),a("p",[t._v("openHAB project is building the bundles with Tycho, so knowledge about how is Tycho functioning can help you to integrate your work with the build.")]),t._v(" "),a("p",[t._v("Let's take a look at the pom.xml that is automatically generated, when you create a binding using the "),a("router-link",{attrs:{to:"./../development/bindings.html#creating-a-skeleton"}},[t._v("binding skeleton")]),t._v(":")],1),t._v(" "),t._m(3),a("p",[t._v("The generated pom file has done almost everything that is needed to integrate your new binding. We will use it as example to show several Tycho requirements in order to build your bundle:")]),t._v(" "),a("ul",[t._m(4),t._v(" "),t._m(5),t._v(" "),a("li",[t._v("include a "),a("code",[t._v("packaging")]),t._v(" attribute in the pom file. In this example the packaging type is set to "),a("code",[t._v("eclipse-plugin")]),t._v(" in the pom.xml file. For more information about the packing types that Tycho understands follow the "),a("a",{attrs:{href:"https://wiki.eclipse.org/Tycho/Packaging_Types",target:"_blank",rel:"noopener noreferrer"}},[t._v("link"),a("OutboundLink")],1),t._v(".")])]),t._v(" "),t._m(6),t._v(" "),a("p",[t._v("Only one thing must be done more in order to have your bundle included in the openHAB build. You will have to add your binding as a module to the parent pom as well.")]),t._v(" "),t._m(7),t._v(" "),a("p",[t._v("A Tycho build is configured via the standard Maven configuration files - the pom.xml files.")]),t._v(" "),a("p",[t._v("The openHAB project is divided into modules. In the pom, located in the root of the repository, there is a configuration of the Tycho plugins, that will be used from all modules. We will just mention a few settings that are applied there:")]),t._v(" "),t._m(8),t._v(" "),a("p",[t._v("If you are developing a new binding, you might want to override these settings or add a new confugiration for some of the Tycho plug-ins. A case when you have to configure Tycho individually for a project is when you want to implement a test plugin. Test plugins are executed with the "),a("a",{attrs:{href:"https://eclipse.org/tycho/sitedocs/tycho-surefire/tycho-surefire-plugin/test-mojo.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("tycho-surefire-plugin"),a("OutboundLink")],1),t._v(". You can find more information, how to implement a test plugin and configure the "),a("code",[t._v("tycho-surefire-plugin")]),t._v(" in the "),a("a",{attrs:{href:"http://www.eclipse.org/smarthome/documentation/development/testing.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Eclipse SmartHome documentation"),a("OutboundLink")],1),t._v(".")]),t._v(" "),t._m(9),t._v(" "),a("p",[t._v("You can check if all dependencies are resolved with:")]),t._v(" "),t._m(10),t._v(" "),a("p",[t._v("Tycho build is executed just like a standard Maven build. You can use:")]),t._v(" "),t._m(11),t._v(" "),a("p",[t._v("You can execute tests with:")]),t._v(" "),t._m(12),t._v(" "),a("p",[t._v("Tests are executed in a test runtime (based on "),a("router-link",{attrs:{to:"./osgi.html"}},[t._v("OSGi")]),t._v(").")],1),t._v(" "),t._m(13),t._v(" "),a("p",[a("router-link",{attrs:{to:"./targetplatform.html"}},[t._v("Target platform")]),t._v(" is the set of plug-ins which you can use for your development or your build process to resolve the project dependencies.")],1),t._v(" "),a("p",[t._v("If you are using a "),a("router-link",{attrs:{to:"./targetplatform.html#target-definition"}},[t._v("target definition file")]),t._v(', the file should contain only "Software site" locations (i.e. '),a("em",[t._v("location")]),t._v(" elements with "),a("em",[t._v('type="InstallableUnit"')]),t._v(").")],1),t._v(" "),t._m(14),t._v(" "),a("ul",[a("li",[t._v("all plug-ins included in the target platform with the Tycho configuration (the configuration is done in the pom files). Multiple approaches exist here, for more details, you can take a look in the "),a("a",{attrs:{href:"https://wiki.eclipse.org/Tycho/Target_Platform#Which_approach_shall_I_use_for_the_target_platform_of_my_project.3F",target:"_blank",rel:"noopener noreferrer"}},[t._v("Tycho Target platform documentation"),a("OutboundLink")],1),t._v(";")]),t._v(" "),a("li",[t._v("other artifacts from the same reactor (the Maven "),a("a",{attrs:{href:"https://maven.apache.org/guides/mini/guide-multiple-modules.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("reactor"),a("OutboundLink")],1),t._v(", i.e. everything that is built together in the same "),a("code",[t._v("mvn")]),t._v(" call);")]),t._v(" "),a("li",[t._v("locally built artifacts in the local Maven repository. Just like in a normal Maven build, a Tycho build uses artifacts that have been built locally and installed into the local Maven repository. They are implicitly added to the target platform.")])]),t._v(" "),t._m(15),t._v(" "),a("p",[t._v("If you develop a new bundle, you might have dependencies that can not be resolved from Tycho. In case of dependency resolution failure, Tycho will display an error message on the console. The message might be confusing, so we will take a look at one example:")]),t._v(" "),t._m(16),a("p",[t._v("Source: "),a("a",{attrs:{href:"https://wiki.eclipse.org/Tycho/Dependency_Resolution_Troubleshooting",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://wiki.eclipse.org/Tycho/Dependency_Resolution_Troubleshooting"),a("OutboundLink")],1)]),t._v(" "),t._m(17),t._v(" "),a("p",[t._v("For more detailed explanation of the error message take a look at - "),a("a",{attrs:{href:"https://wiki.eclipse.org/Tycho/Dependency_Resolution_Troubleshooting",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://wiki.eclipse.org/Tycho/Dependency_Resolution_Troubleshooting"),a("OutboundLink")],1),t._v(".")]),t._v(" "),t._m(18),t._v(" "),a("p",[t._v("This will display all the bundles that are available in the target platform for this module. In the displayed list you can search, if the required bundle has a mismatching version or it is missing at all.")]),t._v(" "),a("p",[t._v("In order to resolve the problem, you will have to include the bundle that is exporting the missing package (or the required bundle) to the effective content of the target platform.")]),t._v(" "),t._m(19),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://wiki.eclipse.org/Tycho/Target_Platform",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://wiki.eclipse.org/Tycho/Target_Platform"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://wiki.eclipse.org/Tycho/Packaging_Types",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://wiki.eclipse.org/Tycho/Packaging_Types"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/FTSRG/cheat-sheets/wiki/Maven-and-Eclipse#tycho",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/FTSRG/cheat-sheets/wiki/Maven-and-Eclipse#tycho"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"http://www.vogella.com/tutorials/EclipseTycho/article.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://www.vogella.com/tutorials/EclipseTycho/article.html"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"http://www.vogella.com/tutorials/EclipseTargetPlatform/article.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://www.vogella.com/tutorials/EclipseTargetPlatform/article.html"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://wiki.eclipse.org/PDE/Target_Definitions",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://wiki.eclipse.org/PDE/Target_Definitions"),a("OutboundLink")],1)])]),t._v(" "),a("DocPreviousVersions"),t._v(" "),a("EditPageLink")],1)},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"tycho"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#tycho","aria-hidden":"true"}},[this._v("#")]),this._v(" Tycho")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"introduction"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#introduction","aria-hidden":"true"}},[this._v("#")]),this._v(" Introduction")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"integrate-your-bundle-with-the-tycho-build"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#integrate-your-bundle-with-the-tycho-build","aria-hidden":"true"}},[this._v("#")]),this._v(" Integrate your bundle with the Tycho build")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language-xml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-xml"}},[a("code",[a("span",{attrs:{class:"token prolog"}},[t._v('<?xml version="1.0" encoding="UTF-8"?>')]),t._v("\n"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("project")]),t._v(" "),a("span",{attrs:{class:"token attr-name"}},[a("span",{attrs:{class:"token namespace"}},[t._v("xmlns:")]),t._v("xsi")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("http://www.w3.org/2001/XMLSchema-instance"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{attrs:{class:"token attr-name"}},[t._v("xmlns")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("http://maven.apache.org/POM/4.0.0"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{attrs:{class:"token attr-name"}},[a("span",{attrs:{class:"token namespace"}},[t._v("xsi:")]),t._v("schemaLocation")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("http://maven.apache.org/POM/4.0.0 http://maven.apache.org/maven-v4_0_0.xsd"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n  "),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("modelVersion")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("4.0.0"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("modelVersion")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n  "),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("parent")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("groupId")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("org.openhab.binding"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("groupId")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("artifactId")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("pom"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("artifactId")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("version")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("2.0.0-SNAPSHOT"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("version")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("parent")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n  "),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("groupId")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("org.openhab.binding"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("groupId")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("artifactId")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("org.openhab.binding.mybinding"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("artifactId")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("version")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("2.0.0-SNAPSHOT"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("version")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n  "),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("name")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("MyBidning Binding"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("name")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("packaging")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("eclipse-plugin"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("packaging")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("project")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[this._v("the "),e("code",[this._v("artifactId")]),this._v(" in the pom file must match the "),e("code",[this._v("Bundle-Sumbolic-Name")]),this._v(" from the "),e("code",[this._v("MANIFEST.MF")]),this._v(" file;")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",[t._v("the "),a("code",[t._v("version")]),t._v(" in the pom file must match the "),a("code",[t._v("Bundle-Version")]),t._v(" from the "),a("code",[t._v("MANIFEST.MF")]),t._v(" (Eclipse components use "),a("code",[t._v("qualifier")]),t._v(" as a suffix, Maven uses "),a("code",[t._v("SNAPSHOT")]),t._v(", but Tycho maps these values correctly);")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v('Notice that is also important to have a "link" between the pom file in your bundle and the parent pom (the '),e("code",[this._v("parent")]),this._v(" element).")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"configure-tycho"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#configure-tycho","aria-hidden":"true"}},[this._v("#")]),this._v(" Configure Tycho")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("Repositories are defined. This will be the place, where Tycho will search for dependencies;")]),this._v(" "),e("li",[this._v("Compiler is selected.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"executing-a-tycho-build"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#executing-a-tycho-build","aria-hidden":"true"}},[this._v("#")]),this._v(" Executing a Tycho build")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("code",[this._v("mvn clean verify")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("code",[this._v("mvn clean install")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("code",[this._v("mvn clean integration-test")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"target-platform"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#target-platform","aria-hidden":"true"}},[this._v("#")]),this._v(" Target platform")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("When you execute the build, the bundles that are available (can be used as dependencies) form the "),e("strong",[this._v("effective content of the target platform")]),this._v(". It consists of the following plug-ins:")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"dependency-resolution-troubleshooting"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#dependency-resolution-troubleshooting","aria-hidden":"true"}},[this._v("#")]),this._v(" Dependency resolution troubleshooting")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("[INFO] Resolving dependencies of MavenProject: com.mycorp:com.mycorp.myplugin:0.1.0-SNAPSHOT @ C:\\Source\\MyProject\\com.mycorp.myplugin\\pom.xml\n[INFO] {osgi.ws=win32, osgi.os=win32, osgi.arch=x86_64, org.eclipse.update.install.features=true}\n[ERROR] Cannot resolve project dependencies:\n[ERROR]   Software being installed: com.mycorp.myplugin 0.1.0.qualifier\n[ERROR]   Missing requirement: com.mycorp.mylib 0.1.0.qualifier requires 'package org.eclipse.someproject [1.8.2,2.0.0)' but it could not be found\n[ERROR]   Cannot satisfy dependency: com.mycorp.myplugin 0.1.0.qualifier depends on: bundle com.mycorp.mylib 0.0.0\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("This error message means that a mandatory dependency of the project can not be resolved. This can be either direct or transitive dependency. In case it is transitive you will see one or more rows like ("),e("code",[this._v("Cannot satisfy dependency: [artifact] depends on: [dependency]")]),this._v("), which will track the dependencies chain. Important is to note which package (in case of package dependency) or bundle(for plugin dependency) is missing. In this case this is the package "),e("code",[this._v("org.eclipse.someproject")]),this._v(" with version range [1.8.2,2.0.0).")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("In order to debug Tycho resolution problems run "),e("strong",[this._v("mvn")]),this._v(" with the flags\n"),e("strong",[this._v("-Dtycho.debug.resolver=true")]),this._v(" and "),e("strong",[this._v("-X")]),this._v(".")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"further-reading"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#further-reading","aria-hidden":"true"}},[this._v("#")]),this._v(" Further Reading")])}],!1,null,null,null);s.options.__file="tycho.md";e.default=s.exports}}]);