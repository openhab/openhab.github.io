(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{242:function(t,s,i){},341:function(t,s,i){"use strict";var o=i(242);i.n(o).a},628:function(t,s,i){"use strict";i.r(s);i(54);var o={data:function(){return{discourseData:null,showTopics:!0}},computed:{topics:function(){return this.discourseData?this.discourseData.topic_list.topics:[]}},mounted:function(){var t=this,s=0===window.location.host.indexOf("localhost")?"/all.json":"https://community.openhab.org/c/tutorials-examples/l/top/all.json";fetch(s).then(function(s){s.json().then(function(s){s.topic_list&&(t.discourseData=s)})}).catch(function(t){console.log("Failed fetching topic list from community.openhab.org - check above for CORS error messages")})}},a=(i(341),i(1)),e=Object(a.a)(o,function(){var t=this,s=t.$createElement,i=t._self._c||s;return t.discourseData?i("div",{directives:[{name:"show",rawName:"v-show",value:t.showTopics,expression:"showTopics"}],staticClass:"topics"},t._l(t.topics,function(s){return i("article",{staticClass:"topic"},[i("a",{staticClass:"topic-link",attrs:{target:"_blank",href:"https://community.openhab.org/t/"+s.id}},[i("h3",{staticClass:"post-title"},[t._v(t._s(s.title))]),t._v(" "),s.image_url&&s.image_url.indexOf("favicon.ico")<0?i("img",{attrs:{src:s.image_url}}):t._e(),t._v(" "),i("div",{staticClass:"post-stats"},[t._v(t._s(s.views)+" views - "+t._s(s.posts_count)+" posts")]),t._v(" "),i("ul",{staticClass:"tags"},t._l(s.tags,function(s){return i("li",{staticClass:"tag"},[i("a",{attrs:{target:"_blank",href:"https://community.openhab.org/tags/"+s}},[t._v(t._s(s))])])}),0),t._v(" "),t._m(0,!0)])])}),0):t._e()},[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"read-more"},[s("div",{staticClass:"read-more-button"},[this._v("Read more ➜")])])}],!1,null,null,null);s.default=e.exports}}]);