(window.webpackJsonp=window.webpackJsonp||[]).push([[6,27,28,29,30,36,37,54,55,56,57,59],{215:function(t,e,s){},216:function(t,e,s){},221:function(t,e,s){},222:function(t,e,s){},223:function(t,e,s){},224:function(t,e,s){},225:function(t,e,s){},226:function(t,e,s){},227:function(t,e,s){},228:function(t,e,s){},229:function(t,e,s){},231:function(t,e){let s=null;function a(t){if(!s){const e=document.createElement("script");e.setAttribute("src",t),document.body.appendChild(e),s=new Promise((t,s)=>{e.onload=()=>{t(window.twttr)}})}return s}const i={id:{type:String,requred:!0},sourceType:{type:String},options:Object};t.exports={addPlatformScript:a,twitterEmbedComponent:t=>({data:()=>({isLoaded:!1,isAvailable:!1}),props:Object.assign({},i,t.props),mounted(){let e=this.sourceType?{sourceType:this.sourceType,screenName:this.id}:this.id;Promise.resolve(window.twttr?window.twttr:a("//platform.twitter.com/widgets.js")).then(s=>t.embedComponent(s,e,this.$el,this.options)).then(t=>{this.isAvailable=void 0!==t,this.isLoaded=!0})},render(t){if(this.isLoaded&&this.isAvailable)return t("div",{class:this.$props.widgetClass});if(this.isLoaded&&!this.isAvailable&&this.$props.errorMessage){const e=t("div",{class:this.$props.errorMessageClass},this.$props.errorMessage);return t("div",[e])}return t("div",{class:this.$props.widgetClass},this.$slots.default)}})}},232:function(t,e,s){"use strict";var a=s(3),i=s(25),n=s(20),o=s(6),r=[].sort,l=[1,2,3];a(a.P+a.F*(o(function(){l.sort(void 0)})||!o(function(){l.sort(null)})||!s(21)(r)),"Array",{sort:function(t){return void 0===t?r.call(n(this)):r.call(n(this),i(t))}})},246:function(t,e,s){"use strict";var a=s(215);s.n(a).a},247:function(t,e,s){"use strict";var a=s(216);s.n(a).a},268:function(t,e,s){t.exports=s.p+"assets/img/lock-bkg.c7ba1522.png"},269:function(t,e,s){t.exports=s.p+"assets/img/cloud-bkg.5639ad84.png"},270:function(t,e,s){"use strict";var a=s(221);s.n(a).a},271:function(t,e,s){"use strict";var a=s(222);s.n(a).a},272:function(t,e,s){"use strict";var a=s(223);s.n(a).a},273:function(t,e,s){t.exports=s.p+"assets/img/rpi.05daaaba.jpg"},274:function(t,e,s){"use strict";var a=s(224);s.n(a).a},275:function(t,e,s){t.exports=s.p+"assets/img/esh-logo.8a8a90cb.png"},276:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAF0AAABTCAYAAAD9ewuzAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAACIdJREFUeNrsnd1x4kgQgIWLd+siWGWwcgQWEZitunekAK5sIjBEgF0XAPj9qpAjQBuB2Qisi2DZCLhpqnvdtEeakdAfnLpKZRuk+fnU09M9I7UHzgXIX/+MfPVjo47p339uVl1v7+CCgLv4UdR18FdnBHesDtcAHGSpPg976KcDB4hrAEzgM4Bz8OMe+mnAl/inz8CneOhkl/NdD91CFuJvAB8quw1gR+rYaoCP1PdbvGlu17T+HKCPECTJSgF9gl804D8BRxO07pKd7zx0BEjgAXjEgHLwSQZwv2sTbOMuIw71lODk2PF7hLjDzzz1eyqAbukmiOslcC6tu5RXNcL1DF6In+N3LxHYmml8qgEaqr+XBYB3QuNzoe/3e18dm5wjzNHUd945BtNBN28jYQMwHAErNCdTTfEPAiiADyyBFwIP/TP0369D06ETQc7hZVx3hz9vhW3mw3qqCXI2CB5Mxg1cg0HRhtnwmSgHzEXCyrAFYQPeM/Tf7ZJ5mSPUKUJ9YDBXGru6xg745CKCOWHmKOCuoyynBPBWTc2wBlsOmviImrpDmwsdm6jfR8z7AIgvOAK+IbSU3Sgqh5sRAu6ICXRSVuvwZq46Y9NLCvjQc4N3skTbfJhQmVs4whslgXPwDxq3cloSHLmb5+29oIt3reCsmUmZM6BgJ8dszvDI5uP38FksAiIuXzPqjQqCPwqkzho6QgsRLAGdkb+Nrh8FO2CTY427t9REojRpRjk33BZ8a8BrsemorTcwqWV1Cj//I8O++myNJWK+ulVQA+DB9uON7xxwG+g7DK+zJM3oeFpylW+KsF8IsAIYYeS5LXDjs8C3DryVZYCGlxyWDHxh4Cr4yZrQfy/GDQaD5BJXGU8xdRGLblvX8P+V6NaBbDV9ny9BT7diqQv6MKMyWlvIk5WyZ2kNHfXQ1fQto0yatNO89uDiVNEdpFvD95MS4JOyd5jEqwq0OhbqeN+fJu9YjpdRz8O+fZmdOpGGFcAGD+MdlwVOvYkelgPwlxK+GglPGUHXeUekBYADnLdTb5xBId7kmj+6eK2Cv2oJ+BKjT7fmqqB80PiFAL919BsklwkdgYcNV/uA9XLw4L8/XTx0NClhSwoWarYX504LDyVdNQj8965Qi3Lk2Sht3yH4RmVo8CVvLfx16w4XOBe0D5Z8f1mc+8XJ36/9ZOMdtnEBZibH9TX1H0zUv5X46QX89ZmllgeWPuxb2SgP67D1833LMmuJSJsyL/cW50CEe1Nm1Y65gjeO3SbGfZs2rnboShtci/A7UdCiU+tCGw2uoGk1cXzR0B27xyKiqipD8Kby3LIPCp0L9MYXzjD4SSpQhstaBmDyvaZyXy3WaS4Wuml5tK7gpLO7RBe9XddD76WH3kPvoffSQ++h99JD76E3HvyYxG2gDq+r0E2L/EFLkbCN7OqoowuaPqmpXuNyskUZxiViXLruHHRT5zzcsK5McEfLOxGozTkAvNK2V7ldZ9pG+1nV+ja+cGzcFixQ3tqivLCL3suLhcbAG8jjE4FD5zcWpz4XKPbV4pxlZaO1Qk13UZttZIOvh7uWZXvsdXIb+VnUDhfY8Ka2e1XALSqfOlZDHWUlLKF84y49tWs9wQwGg5nT/sZCgo/TFRJ1DTyDE59DcPSomRzbfFqWXocvK1FVSlP3RLrkZgZ36tsAD7FChPWXEtb2bdeh8xwv1Hho9E2DpuZQH9Z7kjDwSZehU9QmwafY+Dof3jw8HIpPjVU2sqAsdVDby5fbkGex0blq9ApMAZfSxnNaVPU+lIW7uijY9tmABRWThmzrVKd5eEMCXEQqE53C8zNb9DQaFwzsfItFsBenl1566aUeqTwLBqaCOghmluOfpeeQVL5uGdZQJk/VMROfgX/bQ29qzYMFKk4PvQFRJmXUoxbQWbIz8DFdppXPlOOW2WzduQf/M8teQwZRKhPT+ZGdv9b45OBvrzT1wqrlnSbq/E6pvfE8CIruRbmvWObOMB9R3+5EbAF9S9h5FNccGKH53LG+6cohpr+GOflpIVCBzKERy6eV9y8RnBx7HRhsvzz3UdS7cbKfGoCg5InBWGaUSck4dxnA8/oG+SBXLFOe53ykfg3xmsSinIA0nWeISzFi+uJ8vNnMM3TywuBcetfz+sQ1Eto+4+9tLlQHYtZB3j6Sr/QdKs9CKMC/rEx6eTjrfaQ161uCI+6aQQXwRxqP4qIGvzAF5tbiFcv5nTJx6Hw8qgCdv2H5yuEnDGkXsza7orCRabhaypZcS6x3jW2it/K4mZnnuJwBax/XSijzXdw8nZZ7zK0dse9+sNEzcT6vMM6ZazxmbYjV599YOb9odA/ZSTs0J/wOksgsQ88VAdfJM1MET3g8kJB4IuztMyZE87PiBSZZi2Bu1toIJlBe5lyfCE7GNZahaNBjgYWrRgTTeSdMS6W2jjH55pEN7oCTsrOBnubcndg5fmLqzjlxIT9HPJ3LiZMk/26Cf5MZ2on2/ihZ/7UYMV7JcvwsRkMcvmTTEs1EQZUnYjZ/qSjPoYuJkCm58aMcuph5eiXakzrH/3kgFjcuKmACU9G3Obs2FC6fKQik9oMHtmUJ9W859Lnzkc92g51JWeMPE4sY5tDJNygUNcxFP3VUUiN+Ylm+mGAT5skEOfZzK9pHZcrzwf7PRKrwEYKJ2QT+ju1xRT3PBlOYsH64yPPTeVeY1Tliw5P7oHJofdN0PHCqefvYF5oXZXgogfBUYpaZWrZPd36WROxaV/SLMmDbzGXGPdQhm6HjDIAxu5OHjVkcLrIjdJ5u33OeMwFTVOcxrY01QHRKcHSuoX0pg5FI0yKuHYvvY2GqkiynQpTDPUP6jzbtJThWjdpTBy5pbYb9jw0y02Q5yJylQ6eXqmXi5L/oMO3fOapetjmfw6Qd/yfAACRUjwY2qsu9AAAAAElFTkSuQmCC"},277:function(t,e,s){"use strict";var a=s(225);s.n(a).a},278:function(t,e,s){"use strict";var a=s(226);s.n(a).a},279:function(t,e,s){t.exports=s.p+"assets/img/shd.ad5d65bf.jpg"},280:function(t,e,s){"use strict";var a=s(227);s.n(a).a},281:function(t,e){t.exports="data:image/png;base64,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"},282:function(t,e,s){"use strict";var a=s(228);s.n(a).a},283:function(t,e,s){"use strict";s.r(e);var a=s(231);const i=Object(a.twitterEmbedComponent)({embedComponent:(t,...e)=>t.widgets.createTimeline(...e),props:{errorMessage:{type:String,default:"Whoops! We couldn't access this Timeline."},errorMessageClass:{type:String,required:!1},widgetClass:{type:String,required:!1}}});e.default=i},284:function(t,e,s){"use strict";var a=s(229);s.n(a).a},285:function(t,e,s){},316:function(t,e,s){"use strict";s.r(e);var a=s(0),i={mounted:function(){var t=this;this.$sr&&a.a.nextTick(function(){t.$sr.reveal(".cloud-left-bkg-img",{origin:"left",scale:1,distance:"120px",duration:1e3}),t.$sr.reveal(".cloud-right-bkg-img",{origin:"right",scale:1,distance:"120px",duration:1e3})})}},n=(s(270),s(1)),o=Object(n.a)(i,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"cloud-section"},[a("div",{staticClass:"cloud-text"},[a("div",{staticClass:"cloud-left"},[a("h2",{staticClass:"slide"},[t._v("No Cloud Required...")]),t._v(" "),a("p",{staticClass:"slide"},[t._v("\n        openHAB runs on your hardware, doesn't require any cloud service to work, keeps your data privately at home and talks directly to your local devices whenever possible.\n        At the core of our "),a("router-link",{attrs:{to:"/about/who-we-are.html"}},[t._v("philosophy")]),t._v(" is that you always remain in control.\n      ")],1)]),t._v(" "),t._m(0)]),t._v(" "),a("ClientOnly",[a("div",{staticClass:"cloud-bkg"},[a("div",{staticClass:"cloud-left-bkg"},[a("img",{staticClass:"cloud-left-bkg-img",attrs:{src:s(268)}})]),t._v(" "),a("div",{staticClass:"cloud-right-bkg"},[a("img",{staticClass:"cloud-right-bkg-img",attrs:{src:s(269)}})])])])],1)},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"cloud-right"},[e("h2",{staticClass:"slide"},[this._v("...but Cloud-Friendly")]),this._v(" "),e("p",{staticClass:"slide"},[this._v("\n        Integrations are available for the most popular cloud-based smart home platforms, including Google Assistant, Amazon Alexa, Apple HomeKit and IFTTT.\n        Use the openHAB Cloud connector with the free "),e("a",{attrs:{target:"_blank",href:"https://www.myopenhab.org/"}},[this._v("myopenhab.org")]),this._v(" service or host your own.\n      ")])])}],!1,null,null,null);e.default=o.exports},317:function(t,e,s){"use strict";s.r(e);var a=s(230),i={components:{parallax:s.n(a).a}},n=(s(271),s(1)),o=Object(n.a)(i,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"vscode-section"},[e("div",{staticStyle:{position:"relative",height:"380px",background:"transparent",width:"100%",overflow:"hidden"}},[e("ClientOnly",[e("parallax",{attrs:{fixed:""}},[e("img",{attrs:{src:"/vscode.png",alt:"coding rules"}})])],1),this._v(" "),this._m(0)],1)])},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"vscode-text"},[e("h2",{staticClass:"slide"},[this._v("Easy &"),e("br"),this._v("comfortable"),e("br"),this._v("configuration"),e("br"),this._v("editing.")]),this._v(" "),e("a",{staticClass:"get-extension-button slide",attrs:{target:"_blank",href:"https://marketplace.visualstudio.com/items?itemName=openhab.openhab"}},[this._v("Get the VS Code Extension ➜")])])}],!1,null,null,null);e.default=o.exports},318:function(t,e,s){"use strict";s.r(e);s(53);var a=s(0),i={data:function(){return{ready:!1}},computed:{featuredAddons:function(){return this.$site.pages.filter(function(t){return t.frontmatter&&t.frontmatter.logo&&"2x"===t.frontmatter.since})}},mounted:function(){var t=this;this.ready=!0,this.$sr&&a.a.nextTick(function(){t.$sr.reveal(".featured-logo",{})})}},n=(s(272),s(1)),o=Object(n.a)(i,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"featured-addons-section"},[e("h2",[this._v("More than 1500 supported things!")]),this._v(" "),e("ClientOnly",[e("div",{staticClass:"logos"},this._l(this.featuredAddons,function(t){return e("router-link",{key:t.path,staticClass:"logo-container",attrs:{to:t.path}},[e("img",{staticClass:"featured-logo",attrs:{src:t.frontmatter.logo.replace("images/addons/","/logos/")}})])}),1)]),this._v(" "),e("div",{staticClass:"addons-button-container"},[e("router-link",{staticClass:"all-addons-button slide",attrs:{to:"/addons/"}},[this._v("Browse All Add-ons ➜")])],1)],1)},[],!1,null,null,null);e.default=o.exports},319:function(t,e,s){"use strict";s.r(e);var a=s(230),i={components:{parallax:s.n(a).a}},n=(s(274),s(1)),o=Object(n.a)(i,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"openhabian-section"},[e("div",{staticClass:"openhabian-container"},[e("ClientOnly",[e("parallax",{attrs:{"speed-factor":.15}},[e("img",{attrs:{src:s(273),alt:"raspberry pi"}})])],1),this._v(" "),e("div",{staticClass:"openhabian-text"},[e("h2",{staticClass:"slide-seq"},[this._v("Set up your own openHAB system in just a few steps")]),this._v(" "),e("p",{staticClass:"slide-seq"},[this._v("\n        Try the provided hassle-free openHABian image for the Raspberry Pi, a widely used and recommended hardware choice.\n        Flash an SD card, boot, and enjoy your up-to-date openHAB setup with conveniently pre-configured system settings and software such as Samba, Grafana and Eclipse Mosquitto.\n      ")]),this._v(" "),e("router-link",{staticClass:"learn-how-button slide-seq",attrs:{to:"docs/installation/openhabian.html"}},[this._v("Learn How ➜")])],1)],1)])},[],!1,null,null,null);e.default=o.exports},320:function(t,e,s){"use strict";s.r(e);var a={data:function(){return{communityMembers:"22000+",communityTopics:"23000+",communityPosts:"240000+"}},mounted:function(){var t=this;fetch("https://community.openhab.org/about.json").then(function(e){e.json().then(function(e){e.about.stats&&(t.communityMembers=e.about.stats.user_count,t.communityTopics=e.about.stats.topic_count,t.communityPosts=e.about.stats.post_count)})}).catch(function(t){console.log("Failed fetching real-time stats from community.openhab.org - check above for CORS error messages")})}},i=(s(278),s(1)),n=Object(i.a)(a,function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"community"},[s("h2",{staticClass:"slide"},[s("svg",{staticStyle:{width:"72px",height:"72px"},attrs:{viewBox:"0 0 24 24"}},[s("path",{attrs:{fill:"#2c3e50",d:"M2.81,14.12L5.64,11.29L8.17,10.79C11.39,6.41 17.55,4.22 19.78,4.22C19.78,6.45 17.59,12.61 13.21,15.83L12.71,18.36L9.88,21.19L9.17,17.66C7.76,17.66 7.76,17.66 7.05,16.95C6.34,16.24 6.34,16.24 6.34,14.83L2.81,14.12M5.64,16.95L7.05,18.36L4.39,21.03H2.97V19.61L5.64,16.95M4.22,15.54L5.46,15.71L3,18.16V16.74L4.22,15.54M8.29,18.54L8.46,19.78L7.26,21H5.84L8.29,18.54M13,9.5A1.5,1.5 0 0,0 11.5,11A1.5,1.5 0 0,0 13,12.5A1.5,1.5 0 0,0 14.5,11A1.5,1.5 0 0,0 13,9.5Z"}})]),t._v(" "),s("br"),t._v("\n    Ready to join the community?")]),t._v(" "),s("p",{staticClass:"slide"},[t._v("The vibrant openHAB community contributes examples and tutorials on a daily basis and is happy to help you!")]),t._v(" "),s("div",{staticClass:"community-stats"},[s("div",{staticClass:"community-stat slide-seq2"},[s("div",{staticClass:"community-stat-icon"},[s("svg",{staticStyle:{width:"36px",height:"36px"},attrs:{viewBox:"0 0 24 24"}},[s("path",{attrs:{fill:"#2c3e50",d:"M17,12V3A1,1 0 0,0 16,2H3A1,1 0 0,0 2,3V17L6,13H16A1,1 0 0,0 17,12M21,6H19V15H6V17A1,1 0 0,0 7,18H18L22,22V7A1,1 0 0,0 21,6Z"}})])]),t._v(" "),s("div",{staticClass:"count"},[t._v(t._s(t.communityTopics))]),t._v(" "),s("div",{staticClass:"subtext"},[t._v("discussions")])]),t._v(" "),s("div",{staticClass:"community-stat slide-seq2"},[s("div",{staticClass:"community-stat-icon"},[s("svg",{staticStyle:{width:"36px",height:"36px"},attrs:{viewBox:"0 0 24 24"}},[s("path",{attrs:{fill:"#2c3e50",d:"M17,11H15V9H17M13,11H11V9H13M9,11H7V9H9M20,2H4A2,2 0 0,0 2,4V22L6,18H20A2,2 0 0,0 22,16V4C22,2.89 21.1,2 20,2Z"}})])]),t._v(" "),s("div",{staticClass:"count"},[t._v(t._s(t.communityPosts))]),t._v(" "),s("div",{staticClass:"subtext"},[t._v("posts")])]),t._v(" "),s("div",{staticClass:"community-stat slide-seq2"},[s("div",{staticClass:"community-stat-icon"},[s("svg",{staticStyle:{width:"36px",height:"36px"},attrs:{viewBox:"0 0 24 24"}},[s("path",{attrs:{fill:"#2c3e50",d:"M16,13C15.71,13 15.38,13 15.03,13.05C16.19,13.89 17,15 17,16.5V19H23V16.5C23,14.17 18.33,13 16,13M8,13C5.67,13 1,14.17 1,16.5V19H15V16.5C15,14.17 10.33,13 8,13M8,11A3,3 0 0,0 11,8A3,3 0 0,0 8,5A3,3 0 0,0 5,8A3,3 0 0,0 8,11M16,11A3,3 0 0,0 19,8A3,3 0 0,0 16,5A3,3 0 0,0 13,8A3,3 0 0,0 16,11Z"}})])]),t._v(" "),s("div",{staticClass:"count"},[t._v(t._s(t.communityMembers))]),t._v(" "),s("div",{staticClass:"subtext"},[t._v("members")])])]),t._v(" "),s("div",{staticClass:"join"},[s("router-link",{staticClass:"join-us-button slide-slow",attrs:{to:"about/showcase.html"}},[t._v("Showcase ➜")]),t._v(" "),s("a",{staticClass:"join-us-button slide-slow",attrs:{target:"_blank",href:"https://community.openhab.org"}},[t._v("Join Us ➜")])],1)])},[],!1,null,null,null);e.default=n.exports},321:function(t,e,s){"use strict";s.r(e);s(53),s(232);var a=s(230),i={components:{parallax:s.n(a).a},data:function(){return{events:[]}},mounted:function(){this.events=this.$site.pages.filter(function(t){return"Event"===t.frontmatter.layout&&t.frontmatter.end_date?new Date(t.frontmatter.end_date)>=new Date:new Date(t.frontmatter.date)>=new Date}).sort(function(t,e){return new Date(t.frontmatter.date)>new Date(e.frontmatter.date)}).slice(0,2)}},n=(s(280),s(1)),o=Object(n.a)(i,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{directives:[{name:"show",rawName:"v-show",value:t.events.length>0,expression:"events.length > 0"}],staticClass:"events-section"},[a("div",{staticClass:"events-container"},[a("ClientOnly",[a("parallax",{attrs:{"speed-factor":.15}},[a("img",{attrs:{src:s(279),alt:"event"}})])],1),t._v(" "),a("div",{staticClass:"events-text"},[a("h2",{staticClass:"slide-seq4"},[t._v("Let's Meet Up!")]),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:t.events.length>0,expression:"events.length > 0"}],staticClass:"upcoming-events"},[a("h3",{staticClass:"slide-seq4"},[t._v("Next event"+t._s(t.events.length>1?"s":""))]),t._v(" "),a("ul",{staticClass:"event-list slide-seq4"},t._l(t.events,function(e){return a("li",{staticClass:"event"},[a("div",{staticClass:"calendar"},[a("calendar-icon",{attrs:{date:e.frontmatter.date,"end-date":e.frontmatter.end_date}})],1),t._v(" "),a("div",{staticClass:"event-info"},[a("a",{attrs:{href:e.frontmatter.link,target:"_blank"}},[a("h3",{staticClass:"event-title"},[t._v(t._s(e.frontmatter.title))])]),t._v(" "),a("div",{staticClass:"event-location"},[t._v(t._s(e.frontmatter.location))])])])}),0)]),t._v(" "),a("router-link",{staticClass:"see-all-events-button slide-seq4",attrs:{to:"about/events.html"}},[t._v("See All Events ➜")])],1)],1)])},[],!1,null,null,null);e.default=o.exports},322:function(t,e,s){"use strict";s.r(e);var a=s(0),i={mounted:function(){var t=s(283).default;a.a.component("twitter-timeline",t)}},n=(s(284),s(1)),o=Object(n.a)(i,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"tweets"},[e("h2",{staticClass:"slide"},[this._v("Follow us on Twitter")]),this._v(" "),e("ClientOnly",[e("div",{staticClass:"timeline"},[e("twitter-timeline",{attrs:{id:"openhab","source-type":"profile",options:{linkColor:"#FF6600",tweetLimit:"10",dnt:!0}}})],1)])],1)},[],!1,null,null,null);e.default=o.exports},324:function(t,e,s){"use strict";s.r(e);s(246);var a=s(1),i=Object(a.a)({},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"jumbotron"},[s("div",{staticClass:"hero-image"}),t._v(" "),s("ClientOnly",[s("img",{staticClass:"jumbotron-pattern",attrs:{draggable:"false",src:"/pattern.png",alt:""}})]),t._v(" "),s("div",{staticClass:"hero-content"},[s("div",{staticClass:"white-logo"},[s("ClientOnly",[s("img",{staticClass:"white-logo",attrs:{src:"/logo-white.png"}})])],1),t._v(" "),s("h1",{staticClass:"hero"},[t._v("empowering the smart home")]),t._v(" "),s("h2",{staticClass:"lead"},[t._v("a vendor and technology agnostic open source automation software for your home")]),t._v(" "),s("router-link",{staticClass:"action-button",attrs:{to:"docs/"}},[t._v("Get Started ➜")]),t._v(" "),s("a",{staticClass:"demo-button",attrs:{target:"_blank",href:"http://demo.openhab.org:8080"}},[t._v("Demo ➜")])],1)],1)},[],!1,null,null,null);e.default=i.exports},325:function(t,e,s){"use strict";s.r(e);s(247);var a=s(1),i=Object(a.a)({},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"alert-banner"},[s("div",{staticClass:"alert"},[t._v("\n  "+t._s(t.$page.frontmatter.alert)+"\n  ")]),t._v(" "),s("div",{staticClass:"alert-button-container"},[t.$page.frontmatter.alert_link&&0===t.$page.frontmatter.alert_link.indexOf("http")?s("a",{staticClass:"alert-button slide",attrs:{href:t.$page.frontmatter.alert_link}},[t._v(t._s(t.$page.frontmatter.alert_label||"Read More")+" ➜")]):s("router-link",{staticClass:"alert-button slide",attrs:{to:t.$page.frontmatter.alert_link||"/blog/"}},[t._v(t._s(t.$page.frontmatter.alert_label||"Read the Blog")+" ➜")])],1)])},[],!1,null,null,null);e.default=i.exports},327:function(t,e,s){"use strict";s.r(e);s(277);var a=s(1),i=Object(a.a)({},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"section-opensource"},[e("div",{staticClass:"left"},[e("ClientOnly",[e("div",{staticClass:"eclipse-logos"},[e("a",{attrs:{target:"_blank",href:"https://eclipse.org/smarthome"}},[e("img",{staticClass:"esh-logo",attrs:{src:s(275)}})]),this._v(" "),e("a",{attrs:{target:"_blank",href:"https://iot.eclipse.org"}},[e("img",{staticClass:"iot-logo",attrs:{src:s(276)}})])])])],1),this._v(" "),this._m(0)])},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"right"},[e("h2",[e("div",{staticClass:"slide-seq3"},[this._v("100% Open Source.")]),this._v(" "),e("div",{staticClass:"slide-seq3 reliable"},[this._v("100% Reliable.")])]),this._v(" "),e("p",{staticClass:"slide"},[this._v("openHAB is built upon Eclipse SmartHome™, an industry-grade IoT framework for the household backed by the Eclipse Foundation."),e("br"),this._v("\n      It is actively maintained, absolutely vendor-neutral and will never lock you in.")])])}],!1,null,null,null);e.default=i.exports},328:function(t,e,s){"use strict";s.r(e);var a=[function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"alternativeto-banner"},[e("div",{staticClass:"text"},[this._v("\n    openHAB is the\n    "),e("a",{attrs:{target:"_blank",href:"https://alternativeto.net/tag/home-automation/?sort=likes"}},[this._v("Best home automation app")]),this._v("\n    according to crowdsourced software recommendations on\n  ")]),this._v(" "),e("a",{staticClass:"alternativeto-button",attrs:{target:"_blank",href:"https://alternativeto.net/software/openhab/about/"}},[e("img",{attrs:{src:s(281)}})])])}],i=(s(282),s(1)),n=Object(i.a)({},function(){var t=this.$createElement;this._self._c;return this._m(0)},a,!1,null,null,null);e.default=n.exports},346:function(t,e,s){"use strict";var a=s(285);s.n(a).a},632:function(t,e,s){"use strict";s.r(e);s(54);var a=s(75),i=s(324),n=s(325),o=s(618),r=s(316),l=s(317),c=s(318),u=s(319),d=s(327),v=s(320),h=s(321),m=s(328),f=s(322),p=null,g={name:"HomePage",components:{Jumbotron:i.default,AlertBannerSection:n.default,WhySection:o.default,CloudSection:r.default,VsCodeSection:l.default,FeaturedAddons:c.default,OpenhabianSection:u.default,OpenSourceSection:d.default,CommunitySection:v.default,EventsSection:h.default,TweetsSection:f.default,AlternativeToSection:m.default,Footer:a.default},mounted:function(){if(this.$sr){var t=this.$sr;t.reveal(".feature",{scale:1},200),t.reveal(".slide",{scale:1}),t.reveal(".slide-slow",{scale:1,duration:1e3,delay:500}),t.reveal(".slide-seq",{scale:1,duration:1e3},300),t.reveal(".slide-seq2",{scale:1,duration:1e3},300),t.reveal(".slide-seq3",{origin:"left",distance:"10px",scale:1,duration:1e3},600),t.reveal(".slide-seq4",{scale:1,viewFactor:0},200),t.reveal(".alert",{origin:"left",distance:"40px",duration:1200,scale:1})}var e=document.getElementsByTagName("header")[0];this.Headroom&&((p=new this.Headroom(e)).init(),setTimeout(function(){e.classList.remove("homepage")},1500)),this.$route.hash&&this.$route.hash.indexOf("token")>0&&(window.location="https://www.openhab.org/admin/"+this.$route.hash)},beforeDestroy:function(){p&&p.destroy()}},C=(s(346),s(1)),b=Object(C.a)(g,function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("jumbotron"),t._v(" "),s("div",{staticClass:"after-jumbotron"},[s("div",{staticClass:"placeholder"}),t._v(" "),t.$page.frontmatter.alert?s("alert-banner-section"):t._e(),t._v(" "),s("why-section"),t._v(" "),s("openhabian-section"),t._v(" "),s("cloud-section"),t._v(" "),s("vs-code-section"),t._v(" "),s("featured-addons"),t._v(" "),s("community-section"),t._v(" "),s("events-section"),t._v(" "),s("tweets-section"),t._v(" "),s("alternative-to-section")],1),t._v(" "),s("Footer")],1)},[],!1,null,null,null);e.default=b.exports}}]);