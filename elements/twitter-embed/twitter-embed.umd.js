!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("lit")):"function"==typeof define&&define.amd?define(["exports","lit"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).TwitterEmbed={},e.lit)}(this,(function(e,t){"use strict";function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(i=r.key,o=void 0,"symbol"==typeof(o=function(e,t){if("object"!=typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(i,"string"))?o:String(o)),r)}var i,o}function r(e){return r=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},r(e)}function i(e,t){return i=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},i(e,t)}function o(e,t){if(t&&("object"==typeof t||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function a(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,i=r(e);if(t){var a=r(this).constructor;n=Reflect.construct(i,arguments,a)}else n=i.apply(this,arguments);return o(this,n)}}var u,l=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&i(e,t)}(d,e);var r,o,l,c=a(d);function d(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,d),(e=c.call(this)).lang=document.body.getAttribute("xml:lang")||document.body.getAttribute("lang")||document.documentElement.getAttribute("xml:lang")||document.documentElement.getAttribute("lang")||navigator.language||"en",e.dataWidth="550px",e.dataTheme="light",e.tweet=null,e.tweetId=null,e.allowPopups="allow-popups",e}return r=d,l=[{key:"tag",get:function(){return"twitter-embed"}},{key:"properties",get:function(){return{tweet:{type:String},_haxstate:{type:Boolean},lang:{type:String},dataWidth:{type:String,attribute:"data-width"},dataTheme:{type:String,attribute:"data-theme"},tweetId:{type:String,attribute:"tweet-id"},noPopups:{type:Boolean,attribute:"no-popups"},allowPopups:{type:String}}}},{key:"haxProperties",get:function(){return new URL("./lib/".concat(this.tag,".haxProperties.json"),"undefined"==typeof document&&"undefined"==typeof location?new(require("url").URL)("file:"+__filename).href:"undefined"==typeof document?location.href:document.currentScript&&document.currentScript.src||new URL("twitter-embed.umd.js",document.baseURI).href).href}}],(o=[{key:"haxHooks",value:function(){return{gizmoRegistration:"haxgizmoRegistration",editModeChanged:"haxeditModeChanged",activeElementChanged:"haxactiveElementChanged"}}},{key:"haxgizmoRegistration",value:function(e){window.dispatchEvent(new CustomEvent("i18n-manager-register-element",{detail:{namespace:"twitter-embed.haxProperties",localesPath:new URL("./locales","undefined"==typeof document&&"undefined"==typeof location?new(require("url").URL)("file:"+__filename).href:"undefined"==typeof document?location.href:document.currentScript&&document.currentScript.src||new URL("twitter-embed.umd.js",document.baseURI).href).href,locales:["es"]}}))}},{key:"haxactiveElementChanged",value:function(e,t){t&&(this._haxstate=t)}},{key:"haxeditModeChanged",value:function(e){this._haxstate=e}},{key:"_clickPrevent",value:function(e){this._haxstate&&(e.preventDefault(),e.stopPropagation(),e.stopImmediatePropagation())}},{key:"updated",value:function(e){var t=this;e.forEach((function(e,n){"noPopups"===n&&(t[n]?t.allowPopups="":t.allowPopups="allow-popups"),"tweet"===n&&t[n]&&t[n].includes("twitter.com")&&(t.tweetId=t[n].split("/").pop())}))}},{key:"render",value:function(){return t.html(u||(e=['\n      <div\n        @click="','"\n        class="twitter-tweet twitter-tweet-rendered"\n        style="display: flex; max-width: ',"; width: 100%; margin-top: 10px; margin-bottom: 10px; pointer-events:",'"\n      >\n        <iframe\n          .sandbox="allow-same-origin allow-scripts ','"\n          scrolling="no"\n          frameborder="0"\n          loading="lazy"\n          allowtransparency="true"\n          allowfullscreen\n          style="position: static; visibility: visible; width: ','; height: 498px; display: block; flex-grow: 1;"\n          title="Twitter Tweet"\n          src="https://platform.twitter.com/embed/index.html?dnt=true&amp;frame=false&amp;hideCard=false&amp;hideThread=false&amp;id=',"&amp;lang=","&amp;theme=","&amp;widgetsVersion=223fc1c4%3A1596143124634&amp;width=",'"\n          data-tweet-id="','"\n        >\n        </iframe>\n      </div>\n    '],n||(n=e.slice(0)),u=Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))),this._clickPrevent,this.dataWidth,this._haxstate?"none":"inherit",this.allowPopups,this.dataWidth,this.tweetId,this.lang,this.dataTheme,this.dataWidth,this.tweetId);var e,n}}])&&n(r.prototype,o),l&&n(r,l),Object.defineProperty(r,"prototype",{writable:!1}),d}(t.LitElement);customElements.define(l.tag,l),e.TwitterEmbed=l,Object.defineProperty(e,"__esModule",{value:!0})}));
