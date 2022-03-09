!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("lit"),require("@lrnwebcomponents/simple-colors/simple-colors.js"),require("@lrnwebcomponents/intersection-element/lib/IntersectionObserverMixin.js"),require("@lrnwebcomponents/simple-icon/simple-icon.js"),require("@lrnwebcomponents/simple-icon/lib/simple-icons.js")):"function"==typeof define&&define.amd?define(["exports","lit","@lrnwebcomponents/simple-colors/simple-colors.js","@lrnwebcomponents/intersection-element/lib/IntersectionObserverMixin.js","@lrnwebcomponents/simple-icon/simple-icon.js","@lrnwebcomponents/simple-icon/lib/simple-icons.js"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).ProductOffering={},e.lit,e.simpleColors_js,e.IntersectionObserverMixin_js)}(this,(function(e,t,n,r){"use strict";function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e){return l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},l(e)}function a(e,t){return a=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},a(e,t)}function p(e,t){if(t&&("object"==typeof t||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function u(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=l(e);if(t){var i=l(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return p(this,n)}}function f(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=l(e)););return e}function d(){return d="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=f(e,t);if(r){var i=Object.getOwnPropertyDescriptor(r,t);return i.get?i.get.call(arguments.length<3?e:n):i.value}},d.apply(this,arguments)}function y(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function b(e){return function(e){if(Array.isArray(e))return g(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return g(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return g(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function g(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var h,m,v,O=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&a(e,t)}(p,e);var n,r,i,s=u(p);function p(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,p),(e=s.call(this)).alt="",e.accentColor="blue",e}return n=p,i=[{key:"styles",get:function(){var e=[];return d(l(p),"styles",this)&&(e=d(l(p),"styles",this)),[].concat(b(e),[t.css(v||(v=y(["\n        :host {\n          display: block;\n          padding: var(--product-offering-padding, 25px);\n          color: var(--product-offering-text-color, #000);\n          font-family: var(--product-offering-font-family, Verdana, sans-serif);\n        }\n        .container {\n          padding: 5%;\n          display: grid;\n          grid-template-columns: 25% 75%;\n        }\n        .image {\n          height: var(--product-offering-image-height, 150px);\n          width: var(--product-offering-image-width, 200px);\n          border-radius: 2%;\n        }\n        simple-icon {\n          padding: 8px;\n          height: 30px;\n          width: 30px;\n        }\n        .icon-background {\n          background-color: var(\n            --simple-colors-default-theme-accent-12,\n            #eeeeee\n          );\n          border-radius: 50%;\n          padding: 2px;\n          margin: 5px;\n          margin-right: 10px;\n          box-shadow: 10px 10px 25px 0 rgb(0 0 0 / 10%);\n        }\n        .squareTitle {\n          display: flex;\n        }\n        .underline {\n          border-bottom: 5px solid orange;\n          display: inline-block;\n        }\n        .sqaureDescription {\n          color: var(--simple-colors-default-theme-accent-12, #eeeeee);\n          font-size: 12pt;\n          padding: 20px;\n          padding-left: 60px;\n          margin: 0;\n        }\n      "])))])}},{key:"tag",get:function(){return"product-offering"}},{key:"properties",get:function(){return o(o({},d(l(p),"properties",this)),{},{alt:{type:String},source:{type:String},icon:{type:String},title:{type:String},_titleOne:{type:String},_titleTwo:{type:String},description:{type:String}})}}],(r=[{key:"render",value:function(){return t.html(h||(h=y(["\n      ","\n    "])),this.elementVisible?t.html(m||(m=y([' \x3c!-- Container --\x3e\n            <div class="container">\n              <img\n                class="image"\n                src="','"\n                alt="','"\n                loading="lazy"\n              />\n\n              <div class="square">\n                \x3c!-- Icon, Header --\x3e\n                <div class="squareTitle">\n                  \x3c!-- icon --\x3e\n                  <div class="icon-background">\n                    <simple-icon\n                      accent-color="','"\n                      ?dark="','"\n                      .icon="','"\n                    ></simple-icon>\n                  </div>\n                  \x3c!-- header --\x3e\n                  <h4>\n                    <span class="underline">',"</span>&nbsp;<span\n                      >",'</span\n                    >\n                  </h4>\n                </div>\n\n                \x3c!-- descripton --\x3e\n                <div class="sqaureDescription">\n                  <slot name="description">',"</slot>\n                </div>\n              </div>\n            </div>"])),this.source,this.alt,this.accentColor,this.dark,this.icon,this._titleOne,this._titleTwo,this.description):"")}},{key:"firstUpdated",value:function(e){d(l(p.prototype),"firstUpdated",this)&&d(l(p.prototype),"firstUpdated",this).call(this,e)}},{key:"updated",value:function(e){var t=this;d(l(p.prototype),"updated",this)&&d(l(p.prototype),"updated",this).call(this,e),e.forEach((function(e,n){if("title"===n)if(t.title.split(" ").length>1){var r=t.title.split(" ");t._titleOne=r.shift(),t._titleTwo=r.join(" ")}else t._titleOne=t.title}))}}])&&c(n.prototype,r),i&&c(n,i),Object.defineProperty(n,"prototype",{writable:!1}),p}(r.IntersectionObserverMixin(n.SimpleColors));
/**
   * Copyright 2021 The Pennsylvania State University
   * @license Apache-2.0, see License.md for full text.
   */customElements.define(O.tag,O),e.ProductOffering=O,Object.defineProperty(e,"__esModule",{value:!0})}));
