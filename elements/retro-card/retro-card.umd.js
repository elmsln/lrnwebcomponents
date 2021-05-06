!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("lit-element/lit-element.js"),require("@lrnwebcomponents/simple-colors/simple-colors.js")):"function"==typeof define&&define.amd?define(["exports","lit-element/lit-element.js","@lrnwebcomponents/simple-colors/simple-colors.js"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).RetroCard={},e.litElement_js,e.simpleColors_js)}(this,(function(e,t,r){"use strict";function n(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function l(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function d(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?l(e):t}function u(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=c(e);if(t){var o=c(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return d(this,r)}}function p(e,t,r){return(p="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,r){var n=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=c(e)););return e}(e,t);if(n){var o=Object.getOwnPropertyDescriptor(n,t);return o.get?o.get.call(r):o.value}})(e,t,r||e)}function f(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function h(e){return function(e){if(Array.isArray(e))return y(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return y(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return y(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function y(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var b,v,g,m=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}(y,e);var r,o,i,d=u(y);function y(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,y),(e=d.call(this)).__cardTags=[],e.hoverState=!1,setTimeout((function(){e.addEventListener("keypress",e._keyPress.bind(l(e))),e.addEventListener("mouseover",e._hoverStateOn.bind(l(e))),e.addEventListener("mouseout",e._hoverStateOff.bind(l(e))),e.addEventListener("focusin",e._hoverStateOn.bind(l(e))),e.addEventListener("focusout",e._hoverStateOff.bind(l(e)))}),0),e}return r=y,i=[{key:"styles",get:function(){return[].concat(h(p(c(y),"styles",this)),[t.css(g||(g=f(['\n:host {\n  display: block;\n  --retro-card-level-2 : var(--simple-colors-default-theme-accent-7, #b8a515);\n  --retro-card-level-1 : var(--simple-colors-default-theme-accent-6, #e5cd1b);\n  --retro-card-level-3 : var(--simple-colors-default-theme-accent-5, #ead749);\n  --retro-card-shadow: var(--simple-colors-default-theme-accent-8, rgba(229,205,27,0.2));\n  --retro-card-light-color: #F4F1D0;\n  --retro-card-dark-color: #212121;\n}\n\n:host([dark]) {\n  --retro-card-dark-color: #F4F1D0;\n  --retro-card-light-color: #212121;\n}\n\n:host([hidden]) {\n  display: none;\n}\n\n:host([hover-state])\n.link:nth-child(1n+0) {\n  box-shadow: 16px 16px 0px 0px var(--retro-card-shadow);\n  border: 16px solid var(--retro-card-level-2);\n  background-color: var(--retro-card-level-1);\n}\n\n:host([hover-state]) .link {\n  color: var(--retro-card-light-color);\n  text-decoration: underline;\n  padding: 1.25rem;\n  border: 16px var(--retro-card-level-1) solid;\n  box-shadow: 16px 16px 0px 0px var(--retro-card-shadow);\n  transition: background-color 0.2s ease-in-out 0s,padding 0.4s ease-in-out 0s,border 0.4s ease-in-out 0s,box-shadow 0.2s ease-in-out 0s;\n}\n\n.link:nth-child(1n+0) {\n  background-color: var(--retro-card-level-3);\n  box-shadow: 8px 8px 0px 0px var(--retro-card-level-1);\n  border: 4px var(--retro-card-level-1) solid;\n}\n\n.link {\n  display: block;\n  background-color: var(--retro-card-level-3);\n  border: 4px var(--retro-card-level-1) solid;\n  padding: 2rem;\n  box-shadow: 8px 8px 0px 0px var(--retro-card-level-1);\n  transition: padding 0.4s ease-in-out 0s,border 0.4s ease-in-out 0s,box-shadow 0.2s ease-in-out 0s;\n}\n\n.img {\n  -webkit-filter: grayscale(1);\n  filter: grayscale(1);\n  mix-blend-mode: screen;\n  border: 0;\n  max-width: 100%;\n  height: auto;\n  -ms-interpolation-mode: bicubic;\n  display: inline-block;\n  vertical-align: middle;\n  max-height: 200px;\n}\n\n.title {\n  display: block;\n  font-size: 1.5rem;\n  padding: 2rem 0 0 0;\n  text-transform: uppercase;\n  font-weight: 700;\n  text-align: center;\n}\n\n.description {\n  display: block;\n  font-size: 0.9rem;\n  padding: 0.75rem 1rem 0;\n}\n\n.card-tags {\n  line-height: 1.6;\n  text-align: center;\n  margin-bottom: 1rem;\n  text-rendering: optimizeLegibility;\n  font-weight: 300;\n}\n\n.project-tag {\n  font-size: 0.7rem;\n  padding: 0.25rem 0.5rem;\n  font-style: italic;\n  font-weight: 600;\n  color: var(--retro-card-light-color);\n  background: var(--retro-card-dark-color);\n  word-wrap: break-word;\n  padding: 0 0.5rem;\n  text-transform: uppercase;\n  margin-bottom: 2rem;\n  margin: 0 0.25rem 2rem 0;\n}\n\nhr {\n  border-bottom: 1px solid var(--retro-card-dark-color);\n  max-width: 75rem;\n  height: 0;\n  border-right: 0;\n  border-top: 0;\n  border-left: 0;\n  margin: 1.25rem auto;\n  clear: both;\n}\n\na {\n  text-align: center;\n  color: var(--retro-card-dark-color);\n  text-decoration: none;\n  line-height: inherit;\n  cursor: pointer;\n  font-family: "Roboto Mono", Consolas, Monospace;\n}\n      '])))])}},{key:"haxProperties",get:function(){return{canScale:!1,canPosition:!1,canEditSource:!0,gizmo:{title:"Retro card",description:"Simple card in a cool retro design",icon:"icons:android",color:"purple",groups:["Card"],handles:[{type:"image",source2:"mediaSource",source:"hoverSource",alt:"subtitle",title:"title",name:"title"}],meta:{author:"ELMS:LN",owner:"The Pennsylvania State University"}},settings:{configure:[{property:"title",title:"Title",description:"Main title of card",inputMethod:"textfield",required:!1,icon:"icons:android"},{property:"url",description:"Link to go to when clicking the card",inputMethod:"textfield",required:!1,icon:"icons:android",validationType:"url"},{property:"subtitle",title:"Sub-title",description:"Sub heading",inputMethod:"textfield",required:!1,icon:"icons:android"},{property:"tags",title:"Tags",description:"Comma separated tags",inputMethod:"textfield",required:!1,icon:"icons:android"},{property:"mediaSource",title:"Media source",description:"Primary media source",inputMethod:"haxupload",required:!0,icon:"icons:link",validationType:"url"},{property:"hoverSource",description:"When user hovers / activates the card",title:"Source on hover",inputMethod:"haxupload",required:!1,validationType:"url",icon:"icons:android"},{property:"accentColor",description:"An accent to apply evenly to the card",title:"Accent Color",inputMethod:"colorpicker",required:!1,icon:"icons:android"},{property:"dark",title:"Dark",description:"Sets base color to be dark mode",inputMethod:"boolean",required:!1}],advanced:[]},saveOptions:{unsetAttributes:["colors"]}}}},{key:"properties",get:function(){return a(a({},p(c(y),"properties",this)),{},{title:{type:String},subtitle:{type:String},tags:{type:String},mediaSource:{type:String,attribute:"media-source"},url:{type:String},hoverSource:{type:String,attribute:"hover-source"},hoverState:{type:Boolean,attribute:"hover-state",reflect:!0},__cardTags:{type:Array},__source:{type:String}})}},{key:"tag",get:function(){return"retro-card"}}],(o=[{key:"render",value:function(){return t.html(b||(b=f(['\n\n<a tabindex="-1" class="link ','" href="','" @click="','">\n    <img class="img" loading="lazy" src="','" alt="">\n    <span class="title">','</span>\n    <span class="name">','</span>\n    <span class="description"><slot></slot></span>\n    <hr/>\n    <div class="card-tags">\n        ',"\n    </div>\n</a>"])),this.color,this.url,this._clickCard,this.__source,this.title,this.subtitle,this.__cardTags.map((function(e){return t.html(v||(v=f(['<span class="project-tag">',"</span>"])),e.trim())})))}},{key:"_keyPress",value:function(e){switch(e.key){case"Enter":this.shadowRoot.querySelector("a").click()}}},{key:"_hoverStateOff",value:function(e){this.hoverState=!1}},{key:"_hoverStateOn",value:function(e){this.hoverState=!0}},{key:"firstUpdated",value:function(){this.setAttribute("tabindex",0),this.hoverSource||(this.hoverSource=this.mediaSource)}},{key:"haxHooks",value:function(){return{editModeChanged:"haxeditModeChanged",activeElementChanged:"haxactiveElementChanged"}}},{key:"haxactiveElementChanged",value:function(e,t){t&&(this._haxstate=t)}},{key:"haxeditModeChanged",value:function(e){this._haxstate=e}},{key:"_clickCard",value:function(e){this._haxstate&&(e.preventDefault(),e.stopPropagation(),e.stopImmediatePropagation())}},{key:"updated",value:function(e){var t=this;p(c(y.prototype),"updated",this)&&p(c(y.prototype),"updated",this).call(this,e),e.forEach((function(e,r){"tags"==r&&t._tagsChanged(t[r]),"source"==r&&(t.__source=t.mediaSource),"hoverState"==r&&(t.__source=t[r]?t.hoverSource:t.mediaSource)}))}},{key:"_tagsChanged",value:function(e){var t=e.split(",");this.__cardTags=h(t)}}])&&n(r.prototype,o),i&&n(r,i),y}(r.SimpleColors);customElements.define(m.tag,m),e.RetroCard=m,Object.defineProperty(e,"__esModule",{value:!0})}));
