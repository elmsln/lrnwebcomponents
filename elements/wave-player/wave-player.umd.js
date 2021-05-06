!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("@polymer/paper-material/paper-material.js"),require("lit-element/lit-element.js"),require("@lrnwebcomponents/schema-behaviors/schema-behaviors.js"),require("@lrnwebcomponents/es-global-bridge/es-global-bridge.js"),require("@lrnwebcomponents/simple-icon/simple-icon.js"),require("@lrnwebcomponents/simple-icon/lib/simple-icons.js"),require("@lrnwebcomponents/simple-icon/lib/simple-icon-button.js")):"function"==typeof define&&define.amd?define(["exports","@polymer/paper-material/paper-material.js","lit-element/lit-element.js","@lrnwebcomponents/schema-behaviors/schema-behaviors.js","@lrnwebcomponents/es-global-bridge/es-global-bridge.js","@lrnwebcomponents/simple-icon/simple-icon.js","@lrnwebcomponents/simple-icon/lib/simple-icons.js","@lrnwebcomponents/simple-icon/lib/simple-icon-button.js"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).WavePlayer={},null,e.litElement_js,e.schemaBehaviors_js)}(this,(function(e,t,n,o){"use strict";function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function p(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function d(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?p(e):t}function f(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=c(e);if(t){var r=c(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return d(this,n)}}function h(e,t,n){return(h="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var o=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=c(e)););return e}(e,t);if(o){var r=Object.getOwnPropertyDescriptor(o,t);return r.get?r.get.call(n):r.value}})(e,t,n||e)}function v(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var b,y,m=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)}(d,e);var t,o,a,s=f(d);function d(){var e;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,d),(e=s.call(this)).title="",e.subtitle="",e.coverart="",e.lean="left",e.wavecolor="#ffffff",e.progresscolor="#CFD8DC",setTimeout((function(){}),0);var t=e.pathFromUrl(decodeURIComponent("undefined"==typeof document?new(require("url").URL)("file:"+__filename).href:document.currentScript&&document.currentScript.src||new URL("wave-player.umd.js",document.baseURI).href)),n="".concat(t,"lib/wavesurferjs/dist/wavesurfer.js");return window.addEventListener("es-bridge-wavesurfer-loaded",e._wavesurferLoaded.bind(p(e))),window.ESGlobalBridge.requestAvailability(),window.ESGlobalBridge.instance.load("wavesurfer",n),e}return t=d,a=[{key:"styles",get:function(){return[n.css(y||(y=v(["\n        :host {\n          height: 150px;\n          background-color: var(--dark-primary-color);\n          display: block;\n        }\n\n        simple-icon-button {\n          position: absolute;\n        }\n\n        .title,\n        .subtitle {\n          transition: all 0.5s ease;\n          padding: 10px 10px 10px 0;\n          left: 160px;\n          position: absolute;\n        }\n\n        .subtitle {\n          bottom: 0;\n        }\n\n        .controls {\n          height: 50px;\n          width: 100%;\n          top: 0;\n          background: var(--accent-color);\n          z-index: 20;\n        }\n\n        simple-icon-button.fab {\n          transition: all 0.5s ease;\n          top: -25px;\n          z-index: 25;\n          border-radius: 0;\n        }\n\n        .albuminfo {\n          position: relative;\n          transition: all 0.5s ease;\n          top: -156px;\n          margin-bottom: -150px;\n          z-index: 20;\n          height: 150px;\n          background-color: rgba(0, 0, 0, 0.4);\n          color: #fff;\n          font-family: Roboto, sans-serif;\n        }\n\n        .albuminfoActive {\n          top: -25;\n          height: 25px;\n          width: 100%;\n          margin-bottom: -19px;\n        }\n\n        .waveContainer {\n          top: -31px;\n          transition: all 0.5s ease;\n          background-color: var(--dark-primary-color);\n          transform: scaleY(1.5);\n        }\n\n        .circleAnimation {\n          border-radius: 50%;\n          overflow: auto;\n          -moz-box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.4);\n          box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.4);\n        }\n\n        .circleAnimation:active {\n          -moz-box-shadow: 0 8px 17px 0 rgba(0, 0, 0, 0.2);\n          box-shadow: 0 8px 17px 0 rgba(0, 0, 0, 0.2);\n        }\n\n        .playActive {\n          top: 0;\n          width: 100%;\n          height: 50px;\n        }\n\n        .waveActive {\n          top: 0px;\n          transform: scaleY(1);\n        }\n\n        .centred,\n        .titleActive {\n          transform: scaleY(0);\n        }\n\n        .titleActive {\n          opacity: 0;\n        }\n\n        #playbutton {\n          transition: all 0.5s ease;\n        }\n\n        .coverart {\n          transition: all 0.5s ease;\n          width: 150px;\n          height: 150px;\n        }\n\n        .title {\n          font-size: 24px;\n        }\n\n        .coverartActive {\n          width: 25px;\n          height: 25px;\n        }\n\n        .nameActive {\n          font-size: 19px;\n          padding: 3px 3px 3px 0;\n          left: 30px;\n        }\n\n        .centred {\n          top: calc(50% - 20px);\n          left: calc(50% - 20px);\n          transition: all 0.3s ease;\n        }\n\n        .left,\n        .middle,\n        .right {\n          transform: scale(1);\n        }\n\n        .left {\n          left: calc(25% - 20px);\n        }\n\n        .right {\n          left: calc(75% - 20px);\n        }\n        .hidden {\n          display: none;\n        }\n        @media only screen and (max-width: 500px) {\n          .albuminfo {\n            width: 100%;\n          }\n        }\n      "])))]}},{key:"tag",get:function(){return"wave-player"}},{key:"properties",get:function(){return l(l({},h(c(d),"properties",this)),{},{src:{type:String},title:{type:String},subtitle:{type:String},coverart:{type:String},wavesurfer:{type:Object},lean:{type:String},wavecolor:{type:String},progresscolor:{type:String}})}},{key:"haxProperties",get:function(){return{canScale:!0,canPosition:!0,canEditSource:!0,gizmo:{title:"Audio player",description:"Audio that is just like spotify.",icon:"av:play-circle-filled",color:"purple",groups:["Audio","Media"],handles:[{type:"audio",source:"src",title:"title",caption:"subtitle"}],meta:{author:"ELMS:LN"}},settings:{configure:[{property:"src",title:"Source",description:"The URL for this video.",inputMethod:"textfield",icon:"link",required:!0,validationType:"url"},{property:"title",title:"Title",description:"A simple title",inputMethod:"textfield",icon:"av:video-label",required:!1,validationType:"text"}],advanced:[]}}}}],(o=[{key:"render",value:function(){return n.html(b||(b=v(['\n      <simple-icon-button\n        id="playbutton"\n        class="circleAnimation fab"\n        disabled=""\n        icon="av:play-arrow"\n        @click="','"\n      ></simple-icon-button>\n      <paper-material id="controls" class="controls hidden" elevation="2">\n        <simple-icon-button\n          class="centred middle"\n          style="color: white;"\n          icon="av:pause"\n          @click="','"\n        ></simple-icon-button>\n        <simple-icon-button\n          id="replay"\n          class="centred"\n          style="color: white;"\n          icon="av:replay-30"\n          @click="','"\n        ></simple-icon-button>\n        <simple-icon-button\n          id="mute"\n          class="centred"\n          style="color: white;"\n          icon="av:volume-up"\n          @click="','"\n        ></simple-icon-button>\n      </paper-material>\n      <div id="container" class="waveContainer" elevation="0"></div>\n      <div id="albuminfo" class="albuminfo">\n        <img loading="lazy" class="coverart" src="','" />\n        <span class="title">','</span>\n        <span class="subtitle">',"</span>\n      </div>\n    "])),this.togglePlay,this.togglePlay,this.throwBack,this.toggleMute,this.coverart,this.title,this.subtitle)}},{key:"updated",value:function(e){var t=this;e.forEach((function(e,n){if(["src","title","subtitle","coverart","lean","wavecolor","progresscolor"].includes(n)){var o="".concat(n.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g,"$1-$2").toLowerCase(),"-changed");t.dispatchEvent(new CustomEvent(o,{detail:{value:t[n]}}))}"src"==n&&t._srcChanged(t[n],e)}))}},{key:"_srcChanged",value:function(e,t){"undefined"!==r(e)&&this.__wavesurfer&&window.wavesurferobject.load(e)}},{key:"disconnectedCallback",value:function(){window.removeEventListener("es-bridge-wavesurfer-loaded",this._wavesurferLoaded.bind(this)),h(c(d.prototype),"disconnectedCallback",this).call(this)}},{key:"firstUpdated",value:function(){if("right"===this.lean?(this.shadowRoot.querySelector("#playbutton").style.right="25",this.shadowRoot.querySelector("#controls").style.right="0"):(this.shadowRoot.querySelector("#playbutton").style.left="25",this.shadowRoot.querySelector("#controls").style.left="0"),""===this.name&&this.shadowRoot.querySelector("#albuminfo").classList.add("hidden"),""===this.coverart){var e=this.pathFromUrl(decodeURIComponent("undefined"==typeof document?new(require("url").URL)("file:"+__filename).href:document.currentScript&&document.currentScript.src||new URL("wave-player.umd.js",document.baseURI).href));this.coverart="".concat(e,"lib/art.jpg")}}},{key:"pathFromUrl",value:function(e){return e.substring(0,e.lastIndexOf("/")+1)}},{key:"_wavesurferLoaded",value:function(){this.__wavesurfer=!0,window.removeEventListener("es-bridge-wavesurfer-loaded",this._wavesurferLoaded.bind(this)),this.initWaveSurfer()}},{key:"activateAnimation",value:function(){var e=this.shadowRoot.querySelector("#container"),t=this.shadowRoot.querySelector("#playbutton"),n=this.shadowRoot.querySelector("#controls"),o=this.shadowRoot.querySelector("#mute"),r=this.shadowRoot.querySelector("#replay"),i=this.shadowRoot.querySelector("#albuminfo"),a=i.querySelector(".coverart"),s=i.querySelector(".title"),l=i.querySelector(".subtitle");t.setAttribute("icon","av:pause"),t.classList.remove("circleAnimation"),t.classList.add("playActive"),i.classList.add("albuminfoActive"),a.classList.add("coverartActive"),s.classList.add("nameActive"),l.classList.add("titleActive"),"right"===this.lean?this.shadowRoot.querySelector("#playbutton").style.right="0":this.shadowRoot.querySelector("#playbutton").style.left="0",e.classList.add("waveActive"),setTimeout((function(){n.classList.remove("hidden"),t.classList.add("hidden")}),500),setTimeout((function(){o.classList.add("right"),r.classList.add("left")}),600)}},{key:"deactivateAnimation",value:function(){var e=this,t=this.shadowRoot.querySelector("#container"),n=this.shadowRoot.querySelector("#playbutton"),o=this.shadowRoot.querySelector("#controls"),r=this.shadowRoot.querySelector("#mute"),i=this.shadowRoot.querySelector("#replay"),a=this.shadowRoot.querySelector("#albuminfo"),s=a.querySelector(".coverart"),l=a.querySelector(".title"),c=a.querySelector(".subtitle");r.classList.remove("right"),i.classList.remove("left"),setTimeout((function(){o.classList.add("hidden"),n.classList.remove("hidden")}),100),setTimeout((function(){n.setAttribute("icon","av:play-arrow"),n.classList.add("circleAnimation"),n.classList.remove("playActive"),a.classList.remove("albuminfoActive"),s.classList.remove("coverartActive"),l.classList.remove("nameActive"),c.classList.remove("titleActive"),"right"===e.lean?n.style.right="25":n.style.left="25",t.classList.remove("waveActive")}),200)}},{key:"initWaveSurfer",value:function(){var e=this;window.wavesurferobject=new WaveSurfer({container:this.shadowRoot.querySelector("#container"),waveColor:this.wavecolor,progressColor:this.progresscolor,fillParent:!0,height:100}),window.wavesurferobject.init(),"undefined"!==r(this.src)&&window.wavesurferobject.load(this.src),window.wavesurferobject.on("ready",(function(){e.shadowRoot.querySelector("#playbutton").removeAttribute("disabled")})),window.wavesurferobject.on("finish",(function(){e.deactivateAnimation()}))}},{key:"togglePlay",value:function(e){window.wavesurferobject.playPause(),"av:play-arrow"===this.shadowRoot.querySelector("#playbutton").getAttribute("icon")?this.activateAnimation():this.deactivateAnimation()}},{key:"toggleMute",value:function(e){var t=this.shadowRoot.querySelector("#mute"),n=t.getAttribute("icon");window.wavesurferobject.toggleMute(),"av:volume-up"===n?t.setAttribute("icon","av:volume-off"):t.setAttribute("icon","av:volume-up")}},{key:"throwBack",value:function(e){window.wavesurferobject.skipBackward(30)}}])&&i(t.prototype,o),a&&i(t,a),d}(o.SchemaBehaviors(n.LitElement));window.customElements.define(m.tag,m),e.WavePlayer=m,Object.defineProperty(e,"__esModule",{value:!0})}));
