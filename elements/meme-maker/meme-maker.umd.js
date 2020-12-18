!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports,require("lit-element/lit-element.js")):"function"==typeof define&&define.amd?define(["exports","lit-element/lit-element.js"],e):e((t=t||self).MemeMaker={},t.litElement_js)}(this,function(t,e){"use strict";function n(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function o(t,e,o){return e&&n(t.prototype,e),o&&n(t,o),t}function i(t){return(i=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function r(t,e){return(r=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function a(t,e){return!e||"object"!=typeof e&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function c(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}();return function(){var n,o=i(t);if(e){var r=i(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return a(this,n)}}function s(t,e){return e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}function l(){var t=s(['\n        :host {\n          display: block;\n        }\n        * {\n          box-sizing: border-box;\n        }\n        figure {\n          position: relative;\n          width: 100%;\n          margin: 0;\n          padding: 0;\n          font-size: 20px;\n        }\n        img {\n          width: 100%;\n          height: auto;\n        }\n        .top-text,\n        .bottom-text {\n          position: absolute;\n          left: 0;\n          width: 100%;\n          padding: 3% 2%;\n          text-align: center;\n          text-transform: uppercase;\n          font-weight: 900;\n          font-family: "Impact", "Arial Black", "sans serif";\n          line-height: 1.2;\n          font-size: var(--meme-maker-font-size, 36px);\n          color: white;\n          text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,\n            1px 1px 0 #000;\n          letter-spacing: 2px;\n        }\n        .top-text {\n          top: 0;\n        }\n        .bottom-text {\n          bottom: 0;\n        }\n        @media (max-width: 800px) {\n          .top-text,\n          .bottom-text {\n            font-size: var(--meme-maker-font-size-medium, 20px);\n          }\n        }\n        @media (max-width: 600px) {\n          .top-text,\n          .bottom-text {\n            font-size: var(--meme-maker-font-size-small, 20px);\n          }\n        }\n      ']);return l=function(){return t},t}function u(){var t=s(['\n      <figure>\n        <img\n          loading="lazy"\n          src="','"\n          .alt="','"\n          aria-describedby="','"\n        />\n        <figcaption class="top-text">','</figcaption>\n        <figcaption class="bottom-text">',"</figcaption>\n      </figure>\n    "]);return u=function(){return t},t}var p=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&r(t,e)}(i,e.LitElement);var n=c(i);function i(){var t;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,i),(t=n.call(this)).alt="",t}return o(i,[{key:"render",value:function(){return e.html(u(),this.imageUrl,this.alt,this.describedBy||"",this.topText,this.bottomText)}}],[{key:"styles",get:function(){return[e.css(l())]}},{key:"tag",get:function(){return"meme-maker"}}]),o(i,[{key:"haxHooks",value:function(){return{activeElementChanged:"haxactiveElementChanged",progressiveEnhancement:"haxprogressiveEnhancement"}}},{key:"haxactiveElementChanged",value:function(t,e){var n=this.shadowRoot.querySelectorAll("figcaption");if(e)for(var o=0;o<n.length;o++)n[o].setAttribute("contenteditable",!0);else{for(o=0;o<n.length;o++)n[o].removeAttribute("contenteditable");this.topText=this.shadowRoot.querySelector(".top-text").innerText,this.bottomText=this.shadowRoot.querySelector(".bottom-text").innerText}return!1}},{key:"haxprogressiveEnhancement",value:function(t){return"\n    ".concat(this.topText?"<div>".concat(this.topText,"</div>"):"",'\n      <img src="').concat(this.imageUrl,'" alt="').concat(this.alt,'" preload="lazy" aria-describedby="').concat(this.describedBy||"",'"/>\n    ').concat(this.bottomText?"<div>".concat(this.bottomText,"</div>"):"")}}],[{key:"properties",get:function(){return{alt:{type:String},describedBy:{type:String,attribute:"described-by"},imageUrl:{type:String,attribute:"image-url",reflect:!0},topText:{type:String,attribute:"top-text",reflect:!0},bottomText:{type:String,attribute:"bottom-text",reflect:!0}}}},{key:"haxProperties",get:function(){return{canScale:!0,canPosition:!0,canEditSource:!0,gizmo:{title:"Meme",description:"Make a meme out of an image",icon:"hax:meme",color:"orange",groups:["Media","Funny"],handles:[{type:"image",source:"imageUrl",title:"topText",author:"bottomText",alt:"alt",ariaDescribedby:"describedBy"}],meta:{author:"ELMS:LN"}},settings:{configure:[{property:"imageUrl",title:"Source",description:"The source url for the element this is citing.",inputMethod:"haxupload",icon:"link"},{property:"topText",title:"Top text",description:"Top text of the meme.",inputMethod:"textfield",icon:"editor:title"},{property:"bottomText",title:"Bottom text",description:"The date this was accessed.",inputMethod:"textfield",icon:"editor:title"}],advanced:[{property:"describedBy",title:"aria-describedby",description:"Space-separated list of IDs for elements that describe the image.",inputMethod:"textfield"}]},saveOptions:{wipeSlot:!0},demoSchema:[{tag:"meme-maker",content:"",properties:{alt:"Cat stalking a small toy",imageUrl:"https://cdn2.thecatapi.com/images/9j5.jpg",topText:"I bring you",bottomText:"the death"}}]}}}]),i}();window.customElements.define(p.tag,p),t.MemeMaker=p,Object.defineProperty(t,"__esModule",{value:!0})});
