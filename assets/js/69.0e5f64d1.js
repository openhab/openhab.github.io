(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{456:function(e,t,i){e.exports=i.p+"assets/img/audio.f51e7140.png"},457:function(e,t,i){e.exports=i.p+"assets/img/hli.4fa91ebe.png"},787:function(e,t,i){"use strict";i.r(t);var s=[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"audio-voice"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#audio-voice","aria-hidden":"true"}},[this._v("#")]),this._v(" Audio & Voice")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("openHAB comes with a very modular architecture that enables all kinds of different use cases.\nAt its core, there is the notion of an "),t("em",[this._v("audio stream")]),this._v(".\nAudio streams are provided by "),t("em",[this._v("audio sources")]),this._v(" and consumed by "),t("em",[this._v("audio sinks")]),this._v(".")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("img",{attrs:{src:i(456),alt:""}})])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ul",[i("li",[i("em",[e._v("Audio Streams")]),e._v(" are essentially a byte stream with a given "),i("em",[e._v("audio format")]),e._v(".\nThey do not need to be limited in size, i.e. it is also allowed to have continuous streams, e.g. the input from a microphone or from an Internet radio station.")]),e._v(" "),i("li",[i("em",[e._v("Audio Formats")]),e._v(" define the container (e.g. WAV), encoding, bit rate, sample frequency and depth and the bit order (little or big endian).")]),e._v(" "),i("li",[i("em",[e._v("Audio Sources")]),e._v(" are services that are capable of producing audio streams.\nThey can support different formats and provide a stream in a requested format upon request.\nTypical audio source services are microphones. Typically, a continuous stream is expected from them.")]),e._v(" "),i("li",[i("em",[e._v("Audio Sinks")]),e._v(" are services that accept audio streams of certain formats.\nTypically, these are expected to play the audio stream, i.e. they are some kind of speaker or media device.")]),e._v(" "),i("li",[i("em",[e._v("Text-to-Speech")]),e._v(" (TTS) services are similar to audio sources with respect to the ability to create audio streams.\nThe difference is that they take a string as an input and will synthesize this string to a spoken text using a given voice.\nTTS services can provide information about the voices that they support and the locale that those voices are associated with.\nEach voice supports exactly one locale.")]),e._v(" "),i("li",[i("em",[e._v("Speech-to-Text")]),e._v(" (STT) services are similar to audio sinks, but they do not simply play back the stream, but convert it to a plain string.\nThey provide information about supported formats and locales.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("As plain text from an STT service is often not very useful, there is additionally the concept of a "),t("em",[this._v("human language interpreter")]),this._v(":")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("img",{attrs:{src:i(457),alt:""}})])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("A "),t("em",[this._v("Human Language Interpreter")]),this._v(" takes a string as an input.\nIt then derives actions from it (like sending commands to devices) and/or replies with a string, which opens the possibility to realize conversations.\nAs such an interpreter is not directly linked to audio streams, but operates on strings only, this can be the basis for any kind of assistant, e.g. for chat bots using the console, XMPP, Twitter or other messaging services.")])}],a=i(1),n=Object(a.a)({},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"content"},[e._m(0),e._v(" "),i("p",[e._v("Audio and voice features are an important aspect of any smart home solution as it is a very natural way to interact with the user.")]),e._v(" "),e._m(1),e._v(" "),e._m(2),e._v(" "),e._m(3),e._v(" "),e._m(4),e._v(" "),e._m(5),e._v(" "),e._m(6),e._v(" "),i("p",[e._v("Applications can dynamically choose which services to use, so that different sinks can be used for different use cases.\nDefaults can be set as a configuration for all those services in case an application does not ask for any specific service.")]),e._v(" "),i("DocPreviousVersions"),e._v(" "),i("EditPageLink")],1)},s,!1,null,null,null);t.default=n.exports}}]);