!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("lit-element/lit-element.js"),require("@lrnwebcomponents/simple-colors/simple-colors.js"),require("@lrnwebcomponents/simple-icon/simple-icon.js"),require("@lrnwebcomponents/simple-icon/lib/simple-icons.js")):"function"==typeof define&&define.amd?define(["exports","lit-element/lit-element.js","@lrnwebcomponents/simple-colors/simple-colors.js","@lrnwebcomponents/simple-icon/simple-icon.js","@lrnwebcomponents/simple-icon/lib/simple-icons.js"],t):t((e=e||self).LrndesignSidenote={},e.litElement_js,e.simpleColors_js)}(this,function(e,t,n){"use strict";function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function o(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach(function(t){i(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function a(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function f(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var n,r=s(e);if(t){var o=s(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return a(this,n)}}function p(e,t,n){return(p="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=s(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function d(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function b(e){return function(e){if(Array.isArray(e))return m(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return m(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return m(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function y(){var e=d(["\n        :host {\n          display: block;\n        }\n\n        #container {\n          display: block;\n          background-color: var(\n            --simple-colors-default-theme-accent-1,\n            #ffffff\n          );\n          padding: var(--lrndesign-sidenote-container-padding, 16px);\n          margin-left: var(--lrndesign-sidenote-container-margin-left, 0px);\n          color: var(--simple-colors-default-theme-accent-12, #000);\n        }\n\n        #header {\n          display: flex;\n          align-items: center;\n        }\n\n        #icon {\n          margin-right: 8px;\n        }\n\n        #label {\n          font-size: 20.8px;\n          margin: 12.8px 0;\n          flex: 1 1 auto;\n        }\n      "]);return y=function(){return e},e}function h(){var e=d(['\n      <div id="container">\n        <div id="header">\n          <simple-icon id="icon" icon=','></simple-icon>\n          <div id="label">',"</div>\n        </div>\n        <slot></slot>\n      </div>\n    "]);return h=function(){return e},e}var g=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)}(i,n.SimpleColors);var r=f(i);function i(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),(e=r.call(this)).label="",e.icon="",e}return o(i,null,[{key:"properties",get:function(){return l(l({},p(s(i),"properties",this)),{},{label:{type:String},icon:{type:String}})}},{key:"haxProperties",get:function(){return{canScale:!1,canPosition:!0,canEditSource:!0,gizmo:{title:"Side-Note",description:"A .",icon:"icons:bookmark",color:"blue",groups:[""],meta:{author:"ELMS:LN"}},settings:{configure:[{property:"label",title:"Label",description:"The label of the sidenote.",inputMethod:"textfield",icon:"editor:title"},{property:"dark",title:"Dark",inputMethod:"boolean"},{property:"icon",title:"Icon",description:"The icon of the sidenote.",inputMethod:"iconpicker",options:["icons:announcement","icons:book","icons:bookmark","icons:check-circle","icons:feedback","icons:thumb-down","icons:thumb-up","icons:warning"]},{property:"accentColor",title:"Color",description:"The background color of the sidenote.",inputMethod:"colorpicker",icon:"editor:format-color-fill"},{slot:"",title:"Content",description:"Content of the side note.",inputMethod:"code-editor"}],advanced:[]},saveOptions:{unsetAttributes:["colors"]},demoSchema:[{tag:"lrndesign-sidenote",content:"<p>Content goes here...</p>",properties:{label:"Label",icon:"bookmark"}}]}}}]),o(i,[{key:"render",value:function(){return t.html(h(),this.icon,this.label)}}],[{key:"styles",get:function(){return[].concat(b(p(s(i),"styles",this)),[t.css(y())])}},{key:"tag",get:function(){return"lrndesign-sidenote"}}]),i}();customElements.define("lrndesign-sidenote",g),e.LrndesignSidenote=g,Object.defineProperty(e,"__esModule",{value:!0})});
