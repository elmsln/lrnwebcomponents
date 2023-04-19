!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("lit")):"function"==typeof define&&define.amd?define(["exports","lit"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).SimpleFilter={},e.lit)}(this,(function(e,t){"use strict";function r(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function n(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,v(n.key),n)}}function c(e,t,r){return t&&u(e.prototype,t),r&&u(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}function l(e,t,r){return(t=v(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function f(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&s(e,t)}function a(e){return a=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},a(e)}function s(e,t){return s=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},s(e,t)}function p(e,t){if(t&&("object"==typeof t||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function y(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=a(e);if(t){var o=a(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return p(this,r)}}function b(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=a(e)););return e}function d(){return d="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,r){var n=b(e,t);if(n){var o=Object.getOwnPropertyDescriptor(n,t);return o.get?o.get.call(arguments.length<3?e:r):o.value}},d.apply(this,arguments)}function h(e){return function(e){if(Array.isArray(e))return m(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return m(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return m(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function v(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}var g=function(e){return function(e){f(r,e);var t=y(r);function r(){var e;return i(this,r),(e=t.call(this)).caseSensitive=!1,e.filtered=[],e.multiMatch=!1,e.resetList(),e}return c(r,[{key:"resetList",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];this.items=h(e),this.where="title",this.value="",this.like=""}},{key:"update",value:function(e){var t=this;d(a(r.prototype),"update",this).call(this,e),e.forEach((function(e,r){["items","where","like","caseSensitive","multiMatch"].includes(r)&&t.shadowRoot&&(clearTimeout(t.__debounce),t.__debounce=setTimeout((function(){t.filtered=t._computeFiltered(t.items,t.where,t.like,t.caseSensitive,t.multiMatch)}),250)),"filtered"==r&&t.shadowRoot&&(t.dispatchEvent(new CustomEvent("filter",{bubbles:!0,cancelable:!0,composed:!0,detail:!0})),t.dispatchEvent(new CustomEvent("filtered-changed",{bubbles:!0,cancelable:!0,composed:!0,detail:{value:t.filtered}})))}))}},{key:"filter",value:function(){this.where=""}},{key:"escapeRegExp",value:function(e){return e.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&")}},{key:"_computeFiltered",value:function(e,t,r,n,i){var u=this;r=this.escapeRegExp(r);var c=null;if(i){var l=r.split("\\ "),f=[];l.forEach((function(e){(e=e.replace("\\","").replace("\\?","").replace("\\.","").replace("\\!","")).length>0&&f.push("(\\s".concat(e,"|^").concat(e,")"))})),r=f.join("|")}return e.filter((function(e){if(c=null,c=n?new RegExp(r,"g"):new RegExp(r,"ig"),"object"==o(e)){var i=u._decomposeWhere(t,e);return void 0===i&&""!=t&&console.warn("simple-filter was unable to find a property in '"+t+"'"),c.test(i)}return"string"==typeof e?c.test(e):"number"==typeof e?c.test(e.toString()):void 0}))}},{key:"_decomposeWhere",value:function(e,t){return e.split(".").reduce((function(e,t){return e&&e[t]}),t)}}],[{key:"properties",get:function(){return n(n({},d(a(r),"properties",this)),{},{items:{type:Array},like:{type:String},where:{type:String},caseSensitive:{type:Boolean,attribute:"case-sensitive",reflect:!0},multiMatch:{type:Boolean,attribute:"multi-match"},filtered:{type:Array}})}}]),r}(e)},O=function(e){f(r,e);var t=y(r);function r(){return i(this,r),t.call(this)}return c(r,null,[{key:"tag",get:function(){return"simple-filter"}}]),r}(g(t.LitElement));e.SimpleFilter=O,e.SimpleFilterMixin=g,Object.defineProperty(e,"__esModule",{value:!0})}));
