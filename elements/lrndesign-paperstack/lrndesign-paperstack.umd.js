!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports,require("lit-element/lit-element.js"),require("@lrnwebcomponents/simple-colors/simple-colors.js"),require("@lrnwebcomponents/simple-icon/lib/simple-icon-lite.js"),require("@lrnwebcomponents/simple-icon/lib/simple-icons.js"),require("@lrnwebcomponents/hax-iconset/lib/simple-hax-iconset.js")):"function"==typeof define&&define.amd?define(["exports","lit-element/lit-element.js","@lrnwebcomponents/simple-colors/simple-colors.js","@lrnwebcomponents/simple-icon/lib/simple-icon-lite.js","@lrnwebcomponents/simple-icon/lib/simple-icons.js","@lrnwebcomponents/hax-iconset/lib/simple-hax-iconset.js"],n):n((e=e||self).LrndesignPaperstack={},e.litElement_js,e.simpleColors_js)}(this,function(e,n,t){"use strict";function r(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach(function(n){o(e,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})}return e}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function s(e,n){return(s=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}function l(e,n){return!n||"object"!=typeof n&&"function"!=typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}function p(e){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var t,r=c(e);if(n){var o=c(this).constructor;t=Reflect.construct(r,arguments,o)}else t=r.apply(this,arguments);return l(this,t)}}function d(e,n,t){return(d="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,n,t){var r=function(e,n){for(;!Object.prototype.hasOwnProperty.call(e,n)&&null!==(e=c(e)););return e}(e,n);if(r){var o=Object.getOwnPropertyDescriptor(r,n);return o.get?o.get.call(t):o.value}})(e,n,t||e)}function f(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}function u(e){return function(e){if(Array.isArray(e))return g(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,n){if(!e)return;if("string"==typeof e)return g(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return g(e,n)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function g(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function m(){var e=f(["\n        :host {\n          display: block;\n          font-family: var(--lrndesign-paperstack-font-family, unset);\n          font-family: var(--lrndesign-paperstack-font-size, 14px);\n        }\n        .stack {\n          width: 100%;\n          position: relative;\n          margin: 24px 0;\n        }\n        .paper {\n          width: calc(100% - 48px);\n          padding: 12px 24px;\n          position: absolute;\n          box-shadow: 0 0 1px\n            var(\n              --lrndesign-paperstack-shadow,\n              var(--simple-colors-default-theme-grey-12)\n            );\n          border: 1px solid\n            var(\n              --lrndesign-paperstack-border,\n              var(--simple-colors-default-theme-grey-4)\n            );\n        }\n        :host([dark]) .paper {\n          box-shadow: 0 0 1px\n            var(\n              --lrndesign-paperstack-shadow,\n              var(--simple-colors-default-theme-grey-1)\n            );\n          border: 1px solid\n            var(\n              --lrndesign-paperstack-border,\n              var(--simple-colors-default-theme-grey-1)\n            );\n        }\n        .paper:first-of-type {\n          left: -0.32px;\n          top: 0.32px;\n          bottom: -0.32px;\n          right: 0.32px;\n          transform: rotate(-2.5deg);\n          background-color: var(\n            --lrndesign-paperstack-faded-bg,\n            var(--simple-colors-default-theme-grey-2)\n          );\n        }\n        .paper:nth-of-type(2) {\n          right: -0.32px;\n          top: 1.6px;\n          left: 0.32px;\n          right: -1.6px;\n          transform: rotate(1.4deg);\n          background-color: var(\n            --lrndesign-paperstack-faded-bg,\n            var(--simple-colors-default-theme-grey-2)\n          );\n        }\n        :host([dark]) .paper:first-of-type,\n        :host([dark]) .paper:nth-of-type(2) {\n          background-color: var(\n            --lrndesign-paperstack-faded-bg,\n            var(--simple-colors-default-theme-grey-1)\n          );\n        }\n        .front {\n          position: relative;\n          left: 0;\n          top: 0;\n          bottom: 0;\n          right: 0;\n          background-color: var(\n            --lrndesign-paperstack-bg,\n            var(--simple-colors-default-theme-grey-1)\n          );\n          color: var(\n            --lrndesign-paperstack-text,\n            var(--simple-colors-default-theme-grey-12)\n          );\n        }\n        :host([dark]) .front {\n          background-color: var(\n            --lrndesign-paperstack-bg,\n            var(--simple-colors-default-theme-grey-3)\n          );\n        }\n        simple-icon-lite {\n          --simple-icon-width: calc(\n            var(--lrndesign-paperstack-icon-size, 32px) - 2 *\n              var(--lrndesign-paperstack-icon-padding, 4px)\n          );\n          --simple-icon-height: calc(\n            var(--lrndesign-paperstack-icon-size, 32px) - 2 *\n              var(--lrndesign-paperstack-icon-padding, 4px)\n          );\n        }\n        .heading {\n          display: flex;\n          align-items: center;\n        }\n        .icon-container {\n          width: calc(\n            var(--lrndesign-paperstack-icon-size, 32px) - 2 *\n              var(--lrndesign-paperstack-icon-padding, 4px)\n          );\n          height: calc(\n            var(--lrndesign-paperstack-icon-size, 32px) - 2 *\n              var(--lrndesign-paperstack-icon-padding, 4px)\n          );\n          border-radius: 50%;\n          background-color: var(\n            --lrndesign-paperstack-accent,\n            var(--simple-colors-default-theme-accent-8)\n          );\n          display: flex;\n          align-items: center;\n          padding: var(--lrndesign-paperstack-icon-padding, 4px);\n          color: var(\n            --lrndesign-paperstack-bg,\n            var(--simple-colors-default-theme-grey-1)\n          );\n          margin-right: calc(2 * var(--lrndesign-paperstack-icon-padding, 2px));\n        }\n        :host([dark]) .icon-container {\n          color: var(\n            --lrndesign-paperstack-bg,\n            var(--simple-colors-default-theme-grey-1)\n          );\n          background-color: var(\n            --lrndesign-paperstack-accent,\n            var(--simple-colors-default-theme-accent-9)\n          );\n        }\n        .title {\n          font-size: 16px;\n          color: var(\n            --lrndesign-paperstack-accent,\n            var(--simple-colors-default-theme-accent-8)\n          );\n          font-family: var(--lrndesign-paperstack-heading-font-family, cursive);\n          font-family: var(--lrndesign-paperstack-heading-font-size, 16px);\n        }\n        :host([dark]) .title {\n          color: var(\n            --lrndesign-paperstack-accent,\n            var(--simple-colors-default-theme-grey-12)\n          );\n        }\n      "]);return m=function(){return e},e}function y(){var e=f(['\n      <div class="stack">\n        <div class="paper"></div>\n        <div class="paper"></div>\n        <div class="front paper">\n          <div class="heading">\n            <div class="icon-container circle">\n              <simple-icon-lite icon="','"></simple-icon-lite>\n            </div>\n            <span class="title">',"</span>\n          </div>\n          <p><slot></slot></p>\n        </div>\n      </div>\n    "]);return y=function(){return e},e}var h=function(e){!function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&s(e,n)}(g,t.SimpleColors);var o,i,l,f=p(g);function g(){var e;return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,g),(e=f.call(this)).icon="lrn:assignment",e}return o=g,l=[{key:"styles",get:function(){return[].concat(u(d(c(g),"styles",this)),[n.css(m())])}},{key:"tag",get:function(){return"lrndesign-paperstack"}},{key:"properties",get:function(){return a(a({},d(c(g),"properties",this)),{},{title:{type:String},icon:{type:String}})}},{key:"haxProperties",get:function(){return{canScale:!0,canPosition:!0,canEditSource:!0,gizmo:{title:"Paper stack",description:"A stack of papers",icon:"icons:content-copy",color:"grey",groups:["Content","Layout"],handles:[],meta:{author:"ELMS:LN"}},settings:{configure:[{property:"title",title:"Title",description:"Title of the cards",inputMethod:"boolean"},{property:"accentColor",title:"Accent Color",description:"Select the accent color use",inputMethod:"colorpicker",icon:"editor:format-color-fill"},{property:"dark",title:"Dark",description:"Use dark theme",inputMethod:"boolean",icon:"invert-colors"},{property:"icon",title:"Icon",description:"Icon for the card",inputMethod:"iconpicker"},{slot:"",title:"Contents",description:"card contents",inputMethod:"code-editor"}],advanced:[]}}}}],(i=[{key:"render",value:function(){return n.html(y(),this.icon,this.title)}}])&&r(o.prototype,i),l&&r(o,l),g}();window.customElements.define(h.tag,h),e.LrndesignPaperstack=h,Object.defineProperty(e,"__esModule",{value:!0})});
