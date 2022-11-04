!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("lit")):"function"==typeof define&&define.amd?define(["exports","lit"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).MicroCopyHeading={},e.lit)}(this,(function(e,t){"use strict";function n(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function r(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e){return c=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},c(e)}function a(e,t){return a=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},a(e,t)}function u(e,t){if(t&&("object"==typeof t||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function p(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=c(e);if(t){var o=c(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return u(this,n)}}function f(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=c(e)););return e}function l(){return l="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=f(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},l.apply(this,arguments)}function s(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var d,y,h=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&a(e,t)}(h,e);var n,i,u,f=p(h);function h(){var e;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,h),(e=f.call(this)).tag=h.tag;var t=h.properties;for(var n in t)t.hasOwnProperty(n)&&(e.hasAttribute(n)?e[n]=e.getAttribute(n):(e.setAttribute(n,t[n].value),e[n]=t[n].value));return e}return n=h,u=[{key:"styles",get:function(){return[t.css(y||(y=s(["\n        :host {\n          display: block;\n          margin: 16px 0;\n        }\n\n        :host([hidden]) {\n          display: none;\n        }\n\n        span {\n          margin-left: 8px;\n        }\n\n        h2 {\n          display: inline-flex;\n          margin: unset;\n          padding: unset;\n          font-size: 0.75em;\n          color: var(--simple-colors-default-theme-red-5, #de2654);\n          border: 2px solid var(--simple-colors-default-theme-red-5, #de2654);\n          line-height: 12px;\n          margin-right: 10px;\n          text-transform: uppercase;\n          font-weight: 500;\n          letter-spacing: 0.09em;\n          padding: 6px 16px;\n        }\n      "])))]}},{key:"haxProperties",get:function(){return{canScale:!0,canPosition:!0,canEditSource:!0,gizmo:{title:"Micro copy-heading",description:"small call to action / attention that acts as a heading too",icon:"icons:android",color:"green",groups:["Copy"],handles:[],meta:{author:"HAXTheWeb",owner:"The Pennsylvania State University"}},settings:{configure:[{property:"heading",description:"",inputMethod:"textfield",required:!1,icon:"icons:android"},{property:"endCap",description:"",inputMethod:"textfield",required:!1,icon:"icons:android"}],advanced:[]}}}},{key:"properties",get:function(){return r(r({},l(c(h),"properties",this)),{},{heading:{name:"heading",type:String,value:"Telling our story"},endcap:{name:"endcap",type:String,value:"//"}})}},{key:"tag",get:function(){return"micro-copy-heading"}}],(i=[{key:"render",value:function(){return t.html(d||(d=s([" <h2>\n      ",'<span aria-hidden="true">',"</span>\n    </h2>"])),this.heading,this.endcap)}}])&&o(n.prototype,i),u&&o(n,u),Object.defineProperty(n,"prototype",{writable:!1}),h}(t.LitElement);customElements.define(h.tag,h),e.MicroCopyHeading=h,Object.defineProperty(e,"__esModule",{value:!0})}));
