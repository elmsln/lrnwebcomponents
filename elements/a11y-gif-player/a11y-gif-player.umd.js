!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("@lrnwebcomponents/simple-tooltip/simple-tooltip.js"),require("@lrnwebcomponents/a11y-details/a11y-details.js"),require("lit"),require("@lrnwebcomponents/schema-behaviors/schema-behaviors.js"),require("@lrnwebcomponents/intersection-element/lib/IntersectionObserverMixin.js"),require("@lrnwebcomponents/i18n-manager/lib/I18NMixin.js")):"function"==typeof define&&define.amd?define(["exports","@lrnwebcomponents/simple-tooltip/simple-tooltip.js","@lrnwebcomponents/a11y-details/a11y-details.js","lit","@lrnwebcomponents/schema-behaviors/schema-behaviors.js","@lrnwebcomponents/intersection-element/lib/IntersectionObserverMixin.js","@lrnwebcomponents/i18n-manager/lib/I18NMixin.js"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).A11yGifPlayer={},null,null,e.lit,e.schemaBehaviors_js,e.IntersectionObserverMixin_js,e.I18NMixin_js)}(this,(function(e,t,n,o,i,r,a){"use strict";function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){u(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e){return p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},p(e)}function f(e,t){return f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},f(e,t)}function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function y(e,t){if(t&&("object"==typeof t||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return d(e)}function b(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=p(e);if(t){var i=p(this).constructor;n=Reflect.construct(o,arguments,i)}else n=o.apply(this,arguments);return y(this,n)}}function g(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=p(e)););return e}function h(){return h="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var o=g(e,t);if(o){var i=Object.getOwnPropertyDescriptor(o,t);return i.get?i.get.call(arguments.length<3?e:n):i.value}},h.apply(this,arguments)}function m(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var v,w,_,O,j=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&f(e,t)}(a,e);var t,n,i,r=b(a);function a(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(e=r.call(this)).__gifLoaded=!1,e.disabled=!1,e.tooltip="",e.__playing=!1,e._updateFromSlot(),e.t={toggleAnimation:"Toggle animation"},e.registerLocalization({context:d(e),basePath:"undefined"==typeof document&&"undefined"==typeof location?new(require("url").URL)("file:"+__filename).href:"undefined"==typeof document?location.href:document.currentScript&&document.currentScript.src||new URL("a11y-gif-player.umd.js",document.baseURI).href,locales:["es"]}),e}return t=a,i=[{key:"styles",get:function(){return[o.css(O||(O=m(['\n        :host {\n          display: block;\n        }\n        :host([hidden]) {\n          display: none;\n        }\n        .sr-only {\n          position: absolute;\n          left: -9999999px;\n          top: 0;\n          width: 0;\n          overflow: hidden;\n        }\n        #container {\n          padding: 0;\n          margin: 0;\n          position: relative;\n          border: var(--a11y-gif-player-border, none);\n          border-radius: var(--a11y-gif-player-border-radius, 0);\n        }\n        img {\n          width: 100%;\n        }\n        button {\n          position: absolute;\n          width: 100%;\n          top: 0;\n          left: 0;\n          bottom: 0;\n          right: 0;\n          background-size: contain;\n          background-color: var(--a11y-gif-player-button-bg, #cccccc);\n        }\n        button:active,\n        button:focus,\n        button:hover {\n          border: var(--a11y-gif-player-focus-border, none);\n          outline: var(--a11y-gif-player-outline, 3px solid);\n        }\n        button[disabled] {\n          cursor: var(--a11y-gif-player-disabled-cursor, not-allowed);\n        }\n        button[aria-pressed="true"] {\n          opacity: 0;\n        }\n        svg {\n          position: absolute;\n          top: 35%;\n          left: 35%;\n          width: var(--a11y-gif-player-arrow-size, 30%);\n          height: var(--a11y-gif-player-arrow-size, 30%);\n        }\n        g {\n          opacity: var(--a11y-gif-player-arrow-opacity, 0.5);\n        }\n        button:not([disabled]):active g,\n        button:not([disabled]):hover g,\n        button:not([disabled]):focus g {\n          opacity: var(--a11y-gif-player-button-focus-opacity, 0.7);\n        }\n        polygon {\n          fill: var(--a11y-gif-player-button-color, #000000);\n          stroke: var(--a11y-gif-player-arrow-border-color, #ffffff);\n          stroke-width: var(--a11y-gif-player-arrow-border-width, 15px);\n        }\n        text {\n          fill: var(--a11y-gif-player-button-text-color, #ffffff);\n        }\n        #longdesc {\n          position: absolute;\n          left: 2px;\n          bottom: 2px;\n          width: calc(100% - 2px);\n          font-size: 80%;\n        }\n        simple-tooltip {\n          --simple-tooltip-background: #000000;\n          --simple-tooltip-opacity: 1;\n          --simple-tooltip-text-color: #ffffff;\n          --simple-tooltip-delay-in: 0;\n        }\n      '])))]}},{key:"tag",get:function(){return"a11y-gif-player"}},{key:"properties",get:function(){return s(s({},h(p(a),"properties",this)),{},{alt:{type:String},disabled:{type:Boolean},describedBy:{attribute:"described-by",type:String},longdesc:{type:String,attribute:"longdesc"},src:{type:String},srcWithoutAnimation:{type:String,attribute:"src-without-animation"},tooltip:{type:String},tooltipPlaying:{type:String,attribute:"tooltip-playing"},__playing:{type:Boolean},__gifLoaded:{type:Boolean}})}},{key:"haxProperties",get:function(){return decodeURIComponent("undefined"==typeof document&&"undefined"==typeof location?new(require("url").URL)("file:"+__filename).href:"undefined"==typeof document?location.href:document.currentScript&&document.currentScript.src||new URL("a11y-gif-player.umd.js",document.baseURI).href)+"/../lib/".concat(this.tag,".haxProperties.json")}}],(n=[{key:"__imageLoaded",value:function(e){this.__gifLoaded=!0}},{key:"render",value:function(){return o.html(v||(v=m([""," "])),this.elementVisible?o.html(w||(w=m(['\n          <div id="container">\n            <slot hidden></slot>\n            <img\n              src="','"\n              alt="','"\n              loading="lazy"\n              aria-describedby="'," ",'"\n              slot="summary"\n            />\n            ','\n\n            <button\n              id="button"\n              aria-controls="gif"\n              aria-pressed="','"\n              @click="','"\n              ?disabled="','"\n              .style="background-image: url(\'','\')"\n            >\n              <svg\n                id="svg"\n                aria-hidden="true"\n                xmlns="http://www.w3.org/2000/svg"\n                viewBox="0 0 200 200"\n              >\n                <g>\n                  <polygon points="30,20 30,180 170,100"></polygon>\n                  <text x="50" y="115" font-size="40px">GIF</text>\n                </g>\n              </svg>\n              <span class="sr-only">\n                ','\n              </span>\n            </button>\n            <a11y-details\n              id="longdesc"\n              ?hidden="','"\n              .style="opacity:','"\n            >\n              <div slot="summary">info</div>\n              <div slot="details">','</div>\n            </a11y-details>\n          </div>\n          <simple-tooltip for="button" offset="30" animation-delay="0">\n            ',"\n          </simple-tooltip>\n        "])),this.__gifLoaded&&this.__playing?this.src:this.srcWithoutAnimation,this.alt,this.longdesc?"longdesc":"",(this.describedBy||"").trim(),this.__playing?o.html(_||(_=m(['<img\n                  src="','"\n                  alt=""\n                  hidden\n                  slot="summary"\n                  @load="','"\n                />'])),this.src,this.__imageLoaded):o.nothing,this.__playing?"true":"false",this.toggle,this.disabled||!this.src,this.srcWithoutAnimation,this.__playing&&this.tooltipPlaying?this.tooltipPlaying:this.tooltip,!this.src||!this.longdesc,this.__playing?0:1,this.longdesc,this.__playing&&this.tooltipPlaying?this.tooltipPlaying:this.tooltip):o.nothing)}},{key:"updated",value:function(e){var t=this;h(p(a.prototype),"updated",this).call(this,e),e.forEach((function(e,n){"elementVisible"===n&&t[n]}))}},{key:"observer",get:function(){var e=this;return new MutationObserver((function(){return e._updateFromSlot()}))}},{key:"connectedCallback",value:function(){var e=this;h(p(a.prototype),"connectedCallback",this)&&h(p(a.prototype),"connectedCallback",this).call(this),this.observer.observe(this,{attributes:!1,childList:!0,subtree:!1}),window.addEventListener("beforeprint",(function(t){e.shadowRoot.querySelector("#longdesc").toggleOpen()})),window.addEventListener("afterprint",(function(t){e.shadowRoot.querySelector("#longdesc").toggleOpen()}))}},{key:"disconnectedCallback",value:function(){var e=this;h(p(a.prototype),"disconnectedCallback",this)&&h(p(a.prototype),"disconnectedCallback",this).call(this),this.observer.disconnect(),window.removeEventListener("beforeprint",(function(t){e.shadowRoot.querySelector("#longdesc").toggleOpen()})),window.removeEventListener("afterprint",(function(t){e.shadowRoot.querySelector("#longdesc").toggleOpen()}))}},{key:"play",value:function(){this.__playing=!0}},{key:"stop",value:function(){this.__playing=!1}},{key:"toggle",value:function(){this.__playing?this.stop():this.play()}},{key:"toggleAnimation",value:function(){this.__playing?this.stop():this.play()}},{key:"_updateFromSlot",value:function(){var e=this.querySelector("img"),t=e?e.src:void 0,n=e?e.alt:void 0;t&&(this.srcWithoutAnimation=t),n&&(this.alt=n)}}])&&c(t.prototype,n),i&&c(t,i),Object.defineProperty(t,"prototype",{writable:!1}),a}(a.I18NMixin(r.IntersectionObserverMixin(i.SchemaBehaviors(o.LitElement))));window.customElements.define(j.tag,j),e.A11yGifPlayer=j,Object.defineProperty(e,"__esModule",{value:!0})}));
