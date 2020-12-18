!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("lit-element/lit-element.js")):"function"==typeof define&&define.amd?define(["exports","lit-element/lit-element.js"],t):t((e=e||self).FullWidthImage={},e.litElement_js)}(this,function(e,t){"use strict";function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach(function(t){o(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function a(e,t){return(a=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function l(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function f(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var n,r=u(e);if(t){var o=u(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return l(this,n)}}function s(e,t,n){return(s="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=u(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function p(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function d(){var e=p(["\n:host {\n  display: block;\n  background-color: #000000;\n  height: 300px;\n  margin: 0 !important;\n  padding: 0 !important;\n}\n\n:host([hidden]) {\n  display: none;\n}\n\n#image {\n  left: 0;\n  right: 0;\n  position: absolute;\n  background-repeat: no-repeat;\n  background-position: center center;\n  background-size: cover;\n  width: 100%;\n  text-align: center;\n}\n\n:host([hax-preview-mode]) #image {\n  left: unset;\n  right: unset;\n  position: unset;\n}\n\n.wrapper {\n  opacity: 1;\n  background-color: rgba(0,0,0,.6);\n  padding: 100px;\n  height: 100px;\n  transition: 0.5s all ease-in-out;\n  -webkit-transition: 0.5s all ease-in-out;\n  -moz-transition: 0.5s all ease-in-out;\n  -ms-transition: 0.5s all ease-in-out;\n  -o-transition: 0.5s all ease-in-out;\n}\n\n.wrapper:hover {\n  opacity: 0;\n  background-color: transparent;\n}\n\n.caption {\n  padding: 35px 0;\n  font-size: 25px;\n  line-height: 40px;\n  color: #fff;\n  font-style: italic;\n}\n      "]);return d=function(){return e},e}function y(){var e=p(['\n\n<div id="image">\n  <div class="wrapper">\n    <div class="caption">\n      ',"\n      <slot></slot>\n    </div>\n  </div>\n</div>"]);return y=function(){return e},e}var g=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&a(e,t)}(g,t.LitElement);var o,i,l,p=f(g);function g(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,g),p.apply(this,arguments)}return o=g,l=[{key:"styles",get:function(){return[t.css(d())]}},{key:"haxProperties",get:function(){return{canScale:!1,canPosition:!1,canEditSource:!0,gizmo:{title:"Full width-image",description:"full width image that flows beyond boundaries",icon:"image:image",color:"green",groups:["Width"],handles:[{type:"image",source:"source",caption:"caption",title:"caption"}],meta:{author:"btopro",owner:"The Pennsylvania State University"}},settings:{configure:[{property:"source",description:"",inputMethod:"haxupload",required:!0,icon:"icons:link",validationType:"url"},{property:"caption",description:"",inputMethod:"textfield"}],advanced:[]}}}},{key:"properties",get:function(){return c(c({},s(u(g),"properties",this)),{},{source:{type:String,reflect:!0},caption:{type:String,reflect:!0}})}},{key:"tag",get:function(){return"full-width-image"}}],(i=[{key:"render",value:function(){return t.html(y(),this.caption)}},{key:"updated",value:function(e){var t=this;e.forEach(function(e,n){"source"==n&&t._sourceChanged(t[n])})}},{key:"_sourceChanged",value:function(e){"undefined"!==n(e)&&(this.shadowRoot.querySelector("#image").style.backgroundImage='url("'.concat(e,'")'))}}])&&r(o.prototype,i),l&&r(o,l),g}();window.customElements.define("full-width-image",g),e.FullWidthImage=g,Object.defineProperty(e,"__esModule",{value:!0})});
