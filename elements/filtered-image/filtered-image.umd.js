!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports,require("lit"),require("@lrnwebcomponents/simple-colors/simple-colors.js")):"function"==typeof define&&define.amd?define(["exports","lit","@lrnwebcomponents/simple-colors/simple-colors.js"],e):e((t="undefined"!=typeof globalThis?globalThis:t||self).FilteredImage={},t.lit,t.simpleColors_js)}(this,(function(t,e,r){"use strict";function n(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?n(Object(r),!0).forEach((function(e){s(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function o(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function s(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function c(t){return c=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},c(t)}function u(t,e){return u=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},u(t,e)}function a(t,e){if(e&&("object"==typeof e||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function l(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=c(t);if(e){var i=c(this).constructor;r=Reflect.construct(n,arguments,i)}else r=n.apply(this,arguments);return a(this,r)}}function f(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=c(t)););return t}function p(){return p="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,r){var n=f(t,e);if(n){var i=Object.getOwnPropertyDescriptor(n,e);return i.get?i.get.call(arguments.length<3?t:r):i.value}},p.apply(this,arguments)}function h(t,e){return e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}function g(t){return function(t){if(Array.isArray(t))return y(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return y(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return y(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function y(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var d,b,m=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&u(t,e)}(f,t);var r,n,s,a=l(f);function f(){var t;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,f),(t=a.call(this)).src="",t.alt="",t.height="",t.width="",t.color="#ffffff",t.strength=1,t.contrast=0,t}return r=f,s=[{key:"styles",get:function(){return[].concat(g(p(c(f),"styles",this)),[e.css(b||(b=h(["\n        :host {\n          display: block;\n        }\n\n        :host([hidden]) {\n          display: none;\n        }\n      "])))])}},{key:"haxProperties",get:function(){return{canScale:!0,canPosition:!0,canEditSource:!0,gizmo:{title:"Filtered image",description:"An image using an SVG filter. Can be used to make background images have more contrast with text.",icon:"icons:android",color:"green",groups:["Image"],handles:[],meta:{author:"HAXTheWeb core team",owner:"The Pennsylvania State University"}},settings:{configure:[{property:"src",description:"",inputMethod:"textfield",required:!0,icon:"icons:link",validationType:"url"},{property:"alt",description:"",inputMethod:"alt",required:!0,icon:"icons:accessibility"}],advanced:[]},saveOptions:{unsetAttributes:["colors"]}}}},{key:"properties",get:function(){return i(i({},p(c(f),"properties",this)),{},{src:{type:String},__id:{type:String},alt:{type:String},height:{type:String},width:{type:String},color:{type:String},strength:{type:Number},contrast:{type:Number},__matrix:{type:Array}})}},{key:"tag",get:function(){return"filtered-image"}}],(n=[{key:"render",value:function(){return e.html(d||(d=h([' <svg id="svg" viewBox="0 0 '," ",'">\n      <rect id="rect" x="0" y="0"></rect>\n      <filter id="','">\n        <feColorMatrix\n          id="matrix"\n          type="matrix"\n          values=" 1   0   0   0   0\n                0   1   0   0   0\n                0   0   1   0   0\n                0   0   0   1   0 "\n        />\n      </filter>\n      <image id="image" filter="url(#',')" x="0" y="0"></image>\n    </svg>'])),this.width,this.height,this.__id,this.__id)}},{key:"updated",value:function(t){var e=this;t.forEach((function(t,r){"src"==r&&e._srcChanged(e[r]),"height"==r&&e._heightChanged(e[r]),"width"==r&&e._widthChanged(e[r]),["src","matrix"].includes(r)&&(e.__id=e._getID(e.src,e.matrix)),["color","contrast","strength"].includes(r)&&(e.__matrix=e._getMatrix(e.color,e.contrast,e.strength))}))}},{key:"_heightChanged",value:function(){var t=this.shadowRoot.querySelector("#svg"),e=t.querySelector("#image"),r=t.querySelector("#rect");t.setAttribute("height",this.height),e.setAttribute("height",this.height),r.setAttribute("height",this.height)}},{key:"_widthChanged",value:function(){var t=this.shadowRoot.querySelector("#svg"),e=t.querySelector("#image"),r=t.querySelector("#rect");t.setAttribute("width",this.width),e.setAttribute("width",this.width),r.setAttribute("width",this.width)}},{key:"_srcChanged",value:function(){var t=this.shadowRoot.querySelector("#svg").querySelector("#image");t.setAttribute("href",this.src),t.setAttribute("xlink:href",this.src)}},{key:"_getMatrix",value:function(t,e,r){var n=[[1,0,0,0,0],[0,1,0,0,0],[0,0,1,0,0],[0,0,0,1,0]],i=this.shadowRoot.querySelector("#svg").querySelector("#matrix"),o=null;return t.startsWith("#")&&t.length>6?(7===t.length&&(t+="ff"),n[0][0]=parseInt(t.substring(1,3),16)/255,n[1][1]=parseInt(t.substring(3,5),16)/255,n[2][2]=parseInt(t.substring(5,7),16)/255,n[3][3]=parseInt(t.substring(7,9),16)/255):t.startsWith("#")?(4===t.length&&(t+="f"),n[0][0]=parseInt(t.substring(1,2)+t.substring(1,2),16)/255,n[1][1]=parseInt(t.substring(2,3)+t.substring(2,3),16)/255,n[2][2]=parseInt(t.substring(3,4)+t.substring(3,4),16)/255,n[3][3]=parseInt(t.substring(4,5)+t.substring(4,5),16)/255):t.startsWith("rgb")&&(o=t.replace(/rgba?\(/g,"").replace(/\)/g,"").split(","),n[0][0]=parseInt(o[0]/255),n[1][1]=parseInt(o[1]/255),n[2][2]=parseInt(o[2]/255),n[3][3]=n[3][3]||"1"),0!==e&&(n[0][3]=n[0][0]*e/100,n[1][3]=n[1][1]*e/100,n[2][3]=n[2][2]*e/100),1!==r&&(n[0][0]=n[0][0]+(1-r)*(1-n[0][0]),n[1][1]=n[1][1]+(1-r)*(1-n[1][1]),n[2][2]=n[2][2]+(1-r)*(1-n[2][2])),i.setAttribute("values",JSON.stringify(n).replace(/[,\[\]]/g," ")),n}},{key:"_getID",value:function(t,e){return("svg"+Math.random()).replace(/0./g,"-")}}])&&o(r.prototype,n),s&&o(r,s),Object.defineProperty(r,"prototype",{writable:!1}),f}(r.SimpleColors);customElements.define(m.tag,m),t.FilteredImage=m,Object.defineProperty(t,"__esModule",{value:!0})}));
