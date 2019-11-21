(window.webpackJsonp=window.webpackJsonp||[]).push([[298],{1024:function(t,e,s){"use strict";s.r(e);var a=s(1),n=Object(a.a)({},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),s("p",[t._v("The Mail binding provides support for sending mails from rules.")]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),t._m(12),t._v(" "),t._m(13),t._v(" "),t._m(14),t._v(" "),t._m(15),t._v(" "),t._m(16),t._v(" "),t._m(17),t._v(" "),s("p",[t._v("mail.things:")]),t._v(" "),t._m(18),s("p",[t._v("mail.items:")]),t._v(" "),t._m(19),s("p",[t._v("mail.sitemap:")]),t._v(" "),t._m(20),t._m(21),t._v(" "),s("p",[t._v("This binding includes rule actions for sending mail.\nSix different actions available:")]),t._v(" "),t._m(22),t._v(" "),t._m(23),t._v(" "),t._m(24),t._v(" "),t._m(25),t._v(" "),s("p",[t._v("Please note: all strings are expected to be UTF-8 encoded.\nUsing different character sets may produce unwanted results.")]),t._v(" "),s("p",[t._v("Examples:")]),t._v(" "),t._m(26),t._m(27),s("DocPreviousVersions"),t._v(" "),s("EditPageLink")],1)},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"mail-binding"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#mail-binding","aria-hidden":"true"}},[this._v("#")]),this._v(" Mail Binding")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"supported-things"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#supported-things","aria-hidden":"true"}},[this._v("#")]),this._v(" Supported Things")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("There are three things: "),e("code",[this._v("smtp")]),this._v(", "),e("code",[this._v("imap")]),this._v(" and "),e("code",[this._v("pop3")]),this._v(" which represents respective servers.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"thing-configuration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#thing-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Thing Configuration")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"smtp-server-smtp"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#smtp-server-smtp","aria-hidden":"true"}},[this._v("#")]),this._v(" SMTP server ("),e("code",[this._v("smtp")]),this._v(")")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("There are two mandatory parameters "),e("code",[this._v("hostname")]),this._v(" and "),e("code",[this._v("sender")]),this._v(".")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("The "),e("code",[this._v("hostname")]),this._v(" may contain an IP address or a FQDN like "),e("code",[this._v("smtp.gmail.com")]),this._v(".\nThe "),e("code",[this._v("sender")]),this._v(" must be a valid mail address used as sender address for mails.")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[t._v("The "),s("code",[t._v("security")]),t._v(", "),s("code",[t._v("port")]),t._v(", "),s("code",[t._v("username")]),t._v(" and "),s("code",[t._v("password")]),t._v(" parameters are optional.")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[t._v("The "),s("code",[t._v("security")]),t._v(" parameter defines the transport security and can be set to "),s("code",[t._v("PLAIN")]),t._v(" (default), "),s("code",[t._v("SSL")]),t._v(" or "),s("code",[t._v("TLS")]),t._v(".\nThe "),s("code",[t._v("port")]),t._v(" parameter is used to change the default ports for the SMTP server.\nDefault ports are "),s("code",[t._v("25")]),t._v(" (for "),s("code",[t._v("PLAIN")]),t._v(" and "),s("code",[t._v("TLS")]),t._v(") and "),s("code",[t._v("465")]),t._v(" (for "),s("code",[t._v("SSL")]),t._v(").\nFor authentication, "),s("code",[t._v("username")]),t._v(" and "),s("code",[t._v("password")]),t._v(" can be supplied.\nIf one or both are empty, no authentication data is provided to the SMTP server during connect.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"imap-server-imap-pop3-server-pop3"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#imap-server-imap-pop3-server-pop3","aria-hidden":"true"}},[this._v("#")]),this._v(" IMAP server ("),e("code",[this._v("imap")]),this._v(") / POP3 server ("),e("code",[this._v("pop3")]),this._v(")")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[t._v("There is one mandatory parameter: "),s("code",[t._v("hostname")]),t._v(", "),s("code",[t._v("username")]),t._v(", "),s("code",[t._v("password")]),t._v(".\nThe "),s("code",[t._v("hostname")]),t._v(" may contain an IP address or a FQDN like "),s("code",[t._v("mail.gmail.com")]),t._v(".\nFor authentication "),s("code",[t._v("username")]),t._v(" and "),s("code",[t._v("password")]),t._v(" need to be supplied.")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[t._v("The "),s("code",[t._v("refresh")]),t._v(", "),s("code",[t._v("security")]),t._v(", "),s("code",[t._v("port")]),t._v(", "),s("code",[t._v("username")]),t._v(" and "),s("code",[t._v("password")]),t._v(" parameters are optional.")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[t._v("The "),s("code",[t._v("refresh")]),t._v(" parameter is the time in seconds between two refreshes of the thing"),s("code",[t._v("s channels. If omitted, the default of 60s is used. The")]),t._v("security"),s("code",[t._v("parameter defines the transport security and can be set to")]),t._v("PLAIN"),s("code",[t._v("(default),")]),t._v("SSL"),s("code",[t._v("or")]),t._v("TLS"),s("code",[t._v(". The")]),t._v("port"),s("code",[t._v("parameter is used to change the default ports for the SMTP server. Default ports are")]),t._v("143"),s("code",[t._v("(for")]),t._v("PLAIN"),s("code",[t._v("and")]),t._v("TLS"),s("code",[t._v(") and")]),t._v("993"),s("code",[t._v("(for")]),t._v("SSL"),s("code",[t._v(") in the case of")]),t._v("imap"),s("code",[t._v("or")]),t._v("110"),s("code",[t._v("(for")]),t._v("PLAIN"),s("code",[t._v("and")]),t._v("TLS"),s("code",[t._v(") and")]),t._v("995"),s("code",[t._v("(for")]),t._v("SSL"),s("code",[t._v(") in the case of")]),t._v("pop3`.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"channels"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#channels","aria-hidden":"true"}},[this._v("#")]),this._v(" Channels")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[t._v("There are no channels for the "),s("code",[t._v("smtp")]),t._v(" thing.\nThe "),s("code",[t._v("imap")]),t._v(" and "),s("code",[t._v("pop3")]),t._v(" things can be extended with "),s("code",[t._v("mailcount")]),t._v("-type channels.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"type-mailcount"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#type-mailcount","aria-hidden":"true"}},[this._v("#")]),this._v(" Type "),e("code",[this._v("mailcount")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[t._v("Each channel has two parameters: "),s("code",[t._v("folder")]),t._v(" and "),s("code",[t._v("type")]),t._v(".\nThe "),s("code",[t._v("folder")]),t._v(' is mandatory and denotes the folder name on the given account.\nYou can either use the root folder like (e.g. "INBOX") or a sub directory of your structure (e.g. "INBOX.Sent" or "INBOX.Junk").\nThe '),s("code",[t._v("type")]),t._v(" parameter can be "),s("code",[t._v("UNREAD")]),t._v(" or "),s("code",[t._v("TOTAL")]),t._v(" (default).\nChannels with type "),s("code",[t._v("UNREAD")]),t._v(" give the number on unread mails in that folder.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"full-example"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#full-example","aria-hidden":"true"}},[this._v("#")]),this._v(" Full Example")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-dsl"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Thing")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("mail"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("smtp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("samplesmtp")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" hostname"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"smtp.example.com"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" sender"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"mail@example.com"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" security"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"TLS"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" username"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"user"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" password"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"pass"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Thing")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("mail"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("imap"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("sampleimap")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" hostname"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"imap.example.com"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" security"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"SSL"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" username"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"user"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" password"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"pass"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Channels")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Type")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("mailcount")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" inbox_total "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" folder"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"INBOX"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" type"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"TOTAL"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Type")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("mailcount")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" inbox_unread "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" folder"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"INBOX"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" type"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"UNREAD"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-dsl"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Number")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("InboxTotal")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"INBOX [%d]"')]),t._v("        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" channel"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"mail:imap:sampleimap:inbox_total"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Number")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("InboxUnread")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"INBOX Unread [%d]"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" channel"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"mail:imap:sampleimap:inbox_unread"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-dsl"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("sitemap")]),t._v(" demo "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("label")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Main Menu"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Frame")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Text")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("item")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("InboxTotal\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Text")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("item")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("InboxUnread\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"rule-action"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#rule-action","aria-hidden":"true"}},[this._v("#")]),this._v(" Rule Action")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",[s("li",[s("code",[t._v("sendMail(String recipient, String subject, String text)")])]),t._v(" "),s("li",[s("code",[t._v("sendMail(String recipient, String subject, String text, String URL)")])]),t._v(" "),s("li",[s("code",[t._v("sendMail(String recipient, String subject, String text, List<String> URL)")])]),t._v(" "),s("li",[s("code",[t._v("sendHtmlMail(String recipient, String subject, String htmlContent)")])]),t._v(" "),s("li",[s("code",[t._v("sendHtmlMail(String recipient, String subject, String htmlContent, String URL)")])]),t._v(" "),s("li",[s("code",[t._v("sendHtmlMail(String recipient, String subject, String htmlContent, List<String> URL)")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("The "),e("code",[this._v("sendMail(...)")]),this._v(" send a plain text mail (with attachments if supplied).\nThe "),e("code",[this._v("sendHtmlMail(...)")]),this._v(" send a HTML mail (with attachments if supplied).")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("code",[this._v("recipient")]),this._v(" can be a single address ("),e("code",[this._v("mail@example.com")]),this._v(") or a list of addresses, concatenated by a comma ("),e("code",[this._v("mail@example.com, mail2@example.com")]),this._v(").")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Since there is a separate rule action instance for each "),e("code",[this._v("smtp")]),this._v(" thing, this needs to be retrieved through "),e("code",[this._v("getActions(scope, thingUID)")]),this._v(".\nThe first parameter always has to be "),e("code",[this._v("mail")]),this._v(" and the second is the full Thing UID of the SMTP server that should be used.\nOnce this action instance is retrieved, you can invoke the action method on it.")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-rules"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("val")]),t._v(" mailActions "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getActions")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"mail"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"mail:smtp:sampleserver"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nmailActions"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sendMail")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"mail@example.com"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Test subject"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"This is the mail content."')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nmailActions"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sendMail")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"mail1@example.com, mail2@example.com"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Test subject"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"This is the mail content sent to multiple recipients."')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-rules"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" java"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("util"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("List")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("val")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("List")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("String"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" attachmentUrlList "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("newArrayList")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://some.web/site/snap.jpg&param=value"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"file:///tmp/201601011031.jpg"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("val")]),t._v(" mailActions "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getActions")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"mail"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"mail:smtp:sampleserver"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nmailActions"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sendHtmlMail")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"mail@example.com"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Test subject"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"<h1>Header</h1>This is the mail content."')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" attachmentUrlList"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])}],!1,null,null,null);e.default=n.exports}}]);