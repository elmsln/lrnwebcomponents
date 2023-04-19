!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("@lrnwebcomponents/micro-frontend-registry/micro-frontend-registry.js"),require("@lrnwebcomponents/a11y-details/a11y-details.js"),require("lit"),require("@lrnwebcomponents/schema-behaviors/schema-behaviors.js"),require("@lrnwebcomponents/intersection-element/lib/IntersectionObserverMixin.js"),require("@lrnwebcomponents/i18n-manager/lib/I18NMixin.js")):"function"==typeof define&&define.amd?define(["exports","@lrnwebcomponents/micro-frontend-registry/micro-frontend-registry.js","@lrnwebcomponents/a11y-details/a11y-details.js","lit","@lrnwebcomponents/schema-behaviors/schema-behaviors.js","@lrnwebcomponents/intersection-element/lib/IntersectionObserverMixin.js","@lrnwebcomponents/i18n-manager/lib/I18NMixin.js"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).A11yGifPlayer={},e.$$0,null,e.lit,e.schemaBehaviors_js,e.IntersectionObserverMixin_js,e.I18NMixin_js)}(this,(function(e,t,n,r,i,o,a){"use strict";function s(e){if(e&&e.__esModule)return e;var t=Object.create(null);return e&&Object.keys(e).forEach((function(n){if("default"!==n){var r=Object.getOwnPropertyDescriptor(e,n);Object.defineProperty(t,n,r.get?r:{enumerable:!0,get:function(){return e[n]}})}})),t.default=e,Object.freeze(t)}var l,c,u,f,d=s(t);function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){g(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,P(r.key),r)}}function g(e,t,n){return(t=P(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function h(e){return h=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},h(e)}function v(e,t){return v=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},v(e,t)}function m(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function w(e,t){if(t&&("object"==typeof t||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return m(e)}function O(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=h(e);if(t){var i=h(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return w(this,n)}}function _(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=h(e)););return e}function j(){return j="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=_(e,t);if(r){var i=Object.getOwnPropertyDescriptor(r,t);return i.get?i.get.call(arguments.length<3?e:n):i.value}},j.apply(this,arguments)}function k(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function P(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}var S=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&v(e,t)}(a,e);var t,n,i,o=O(a);function a(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(e=o.call(this)).__gifLoaded=!1,e.disabled=!1,e.__playing=!1,e._updateFromSlot(),e.t={toggleAnimation:"Toggle animation"},e.registerLocalization({context:m(e),basePath:"undefined"==typeof document&&"undefined"==typeof location?new(require("url").URL)("file:"+__filename).href:"undefined"==typeof document?location.href:document.currentScript&&document.currentScript.src||new URL("a11y-gif-player.umd.js",document.baseURI).href,locales:["es"]}),e}return t=a,i=[{key:"styles",get:function(){return[r.css(f||(f=k(['\n        :host {\n          display: block;\n        }\n        :host([hidden]) {\n          display: none;\n        }\n        .sr-only {\n          position: absolute;\n          left: -9999999px;\n          top: 0;\n          width: 0;\n          overflow: hidden;\n        }\n        #container {\n          padding: 0;\n          margin: 0;\n          position: relative;\n          border: var(--a11y-gif-player-border, none);\n          border-radius: var(--a11y-gif-player-border-radius, 0);\n        }\n        img {\n          width: 100%;\n        }\n        button {\n          position: absolute;\n          width: 100%;\n          top: 0;\n          left: 0;\n          bottom: 0;\n          right: 0;\n          background-size: contain;\n          background-color: var(--a11y-gif-player-button-bg, #cccccc);\n        }\n        button:active,\n        button:focus,\n        button:hover {\n          border: var(--a11y-gif-player-focus-border, none);\n          outline: var(--a11y-gif-player-outline, 3px solid);\n        }\n        button[disabled] {\n          cursor: var(--a11y-gif-player-disabled-cursor, not-allowed);\n        }\n        button[aria-pressed="true"] {\n          opacity: 0;\n        }\n        svg {\n          position: absolute;\n          top: 35%;\n          left: 35%;\n          width: var(--a11y-gif-player-arrow-size, 30%);\n          height: var(--a11y-gif-player-arrow-size, 30%);\n        }\n        g {\n          opacity: var(--a11y-gif-player-arrow-opacity, 0.5);\n        }\n        button:not([disabled]):active g,\n        button:not([disabled]):hover g,\n        button:not([disabled]):focus g {\n          opacity: var(--a11y-gif-player-button-focus-opacity, 0.7);\n        }\n        polygon {\n          fill: var(--a11y-gif-player-button-color, #000000);\n          stroke: var(--a11y-gif-player-arrow-border-color, #ffffff);\n          stroke-width: var(--a11y-gif-player-arrow-border-width, 15px);\n        }\n        text {\n          fill: var(--a11y-gif-player-button-text-color, #ffffff);\n        }\n        #longdesc {\n          position: absolute;\n          left: 2px;\n          bottom: 2px;\n          width: calc(100% - 2px);\n          font-size: 80%;\n        }\n      '])))]}},{key:"tag",get:function(){return"a11y-gif-player"}},{key:"properties",get:function(){return y(y({},j(h(a),"properties",this)),{},{alt:{type:String},disabled:{type:Boolean},describedBy:{attribute:"described-by",type:String},longdesc:{type:String,attribute:"longdesc"},src:{type:String},srcWithoutAnimation:{type:String,attribute:"src-without-animation"},__playing:{type:Boolean},__gifLoaded:{type:Boolean}})}},{key:"haxProperties",get:function(){return new URL("./lib/".concat(this.tag,".haxProperties.json"),"undefined"==typeof document&&"undefined"==typeof location?new(require("url").URL)("file:"+__filename).href:"undefined"==typeof document?location.href:document.currentScript&&document.currentScript.src||new URL("a11y-gif-player.umd.js",document.baseURI).href).href}}],(n=[{key:"__imageLoaded",value:function(e){this.__gifLoaded=!0}},{key:"render",value:function(){return r.html(l||(l=k([""," "])),this.elementVisible?r.html(c||(c=k(['\n          <div id="container">\n            <slot hidden></slot>\n            <img\n              src="','"\n              alt="','"\n              loading="lazy"\n              aria-describedby="'," ",'"\n              slot="summary"\n            />\n            ','\n\n            <button\n              id="button"\n              aria-controls="gif"\n              aria-pressed="','"\n              @click="','"\n              ?disabled="','"\n              .style="background-image: url(\'','\')"\n            >\n              <svg\n                id="svg"\n                aria-hidden="true"\n                xmlns="http://www.w3.org/2000/svg"\n                viewBox="0 0 200 200"\n              >\n                <g>\n                  <polygon points="30,20 30,180 170,100"></polygon>\n                  <text x="50" y="115" font-size="40px">GIF</text>\n                </g>\n              </svg>\n            </button>\n            <a11y-details\n              id="longdesc"\n              ?hidden="','"\n              .style="opacity:','"\n            >\n              <div slot="summary">info</div>\n              <div slot="details">',"</div>\n            </a11y-details>\n          </div>\n        "])),this.__gifLoaded&&this.__playing?this.src:this.srcWithoutAnimation,this.alt,this.longdesc?"longdesc":"",(this.describedBy||"").trim(),this.__playing?r.html(u||(u=k(['<img\n                  src="','"\n                  alt=""\n                  hidden\n                  slot="summary"\n                  @load="','"\n                />'])),this.src,this.__imageLoaded):"",this.__playing?"true":"false",this.toggle,this.disabled||!this.src,this.srcWithoutAnimation,!this.src||!this.longdesc,this.__playing?0:1,this.longdesc):"")}},{key:"updated",value:function(e){var t=this;j(h(a.prototype),"updated",this).call(this,e),e.forEach((function(e,n){"elementVisible"===n&&t[n]&&t.shadowRoot&&!t.srcWithoutAnimation&&t.src&&Promise.resolve(d).then((function(){t._automaticStill=!0,t.srcWithoutAnimation=t.generateStill(t.src)})),t.shadowRoot&&"src"===n&&t[n]&&t.elementVisible&&t._automaticStill&&(t.srcWithoutAnimation=t.generateStill(t.src))}))}},{key:"generateStill",value:function(e){var t=window.MicroFrontendRegistry.requestAvailability();return t.enableServices(["core"]),t.url("@core/imgManipulate",{quality:50,src:e})}},{key:"observer",get:function(){var e=this;return new MutationObserver((function(){return e._updateFromSlot()}))}},{key:"connectedCallback",value:function(){var e=this;j(h(a.prototype),"connectedCallback",this)&&j(h(a.prototype),"connectedCallback",this).call(this),this.observer.observe(this,{attributes:!1,childList:!0,subtree:!0}),window.addEventListener("beforeprint",(function(t){e.shadowRoot.querySelector("#longdesc").toggleOpen()})),window.addEventListener("afterprint",(function(t){e.shadowRoot.querySelector("#longdesc").toggleOpen()}))}},{key:"disconnectedCallback",value:function(){var e=this;j(h(a.prototype),"disconnectedCallback",this)&&j(h(a.prototype),"disconnectedCallback",this).call(this),this.observer.disconnect(),window.removeEventListener("beforeprint",(function(t){e.shadowRoot.querySelector("#longdesc").toggleOpen()})),window.removeEventListener("afterprint",(function(t){e.shadowRoot.querySelector("#longdesc").toggleOpen()}))}},{key:"play",value:function(){this.__playing=!0}},{key:"stop",value:function(){this.__playing=!1}},{key:"toggle",value:function(){this.__playing?this.stop():this.play()}},{key:"toggleAnimation",value:function(){this.__playing?this.stop():this.play()}},{key:"_updateFromSlot",value:function(){var e=this.querySelector("img");if(e){var t=e.src||null,n=e.alt||null;t&&(this.srcWithoutAnimation=t),n&&(this.alt=n)}if(e=this.querySelector("simple-img")){var r=e.srcconverted||null,i=e.alt||null;r&&(this.srcWithoutAnimation=r),i&&(this.alt=i)}}}])&&b(t.prototype,n),i&&b(t,i),Object.defineProperty(t,"prototype",{writable:!1}),a}(a.I18NMixin(o.IntersectionObserverMixin(i.SchemaBehaviors(r.LitElement))));customElements.define(S.tag,S),e.A11yGifPlayer=S,Object.defineProperty(e,"__esModule",{value:!0})}));
