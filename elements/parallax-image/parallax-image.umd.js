!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("lit-element/lit-element.js"),require("@lrnwebcomponents/schema-behaviors/schema-behaviors.js")):"function"==typeof define&&define.amd?define(["exports","lit-element/lit-element.js","@lrnwebcomponents/schema-behaviors/schema-behaviors.js"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).ParallaxImage={},e.litElement_js,e.schemaBehaviors_js)}(this,(function(e,t,n){"use strict";function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function l(e,t){return(l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function s(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function u(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=c(e);if(t){var a=c(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return s(this,n)}}function f(e,t,n){return(f="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=c(e)););return e}(e,t);if(r){var a=Object.getOwnPropertyDescriptor(r,t);return a.get?a.get.call(n):a.value}})(e,t,n||e)}function p(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var d,b,g=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&l(e,t)}(g,e);var n,a,i,s=u(g);function g(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,g),(e=s.call(this)).imageBg="",e}return n=g,i=[{key:"styles",get:function(){return[t.css(b||(b=p(['\n        :host {\n          display: block;\n          --parallax-image-background: "";\n          --parallax-title-background: rgba(0, 0, 0, 0.3);\n          --parallax-title-font: #fff;\n        }\n\n        .parallax_container {\n          height: 400px;\n          width: 100%;\n          overflow: hidden;\n          display: flex;\n          justify-content: center;\n        }\n\n        .parallax {\n          background-image: var(--parallax-image-background);\n          background-attachment: fixed;\n          background-position: top center;\n          background-repeat: no-repeat;\n          background-size: cover;\n          width: 100%;\n          height: 100%;\n          justify-content: center;\n        }\n\n        #bgParallax {\n          display: flex;\n          align-items: center;\n        }\n\n        .title {\n          background: var(--parallax-title-background);\n          display: block;\n          padding: 20px 15px;\n          text-align: center;\n          width: 40%;\n          color: var(--parallax-title-font);\n          font-size: 32px;\n          position: absolute;\n          margin-top: 120px;\n        }\n\n        @media screen and (max-width: 900px) {\n          .title {\n            font-size: 16px;\n          }\n        }\n      '])))]}},{key:"tag",get:function(){return"parallax-image"}},{key:"properties",get:function(){return o(o({},f(c(g),"properties",this)),{},{imageBg:{type:String,attribute:"image-bg",reflect:!0},describedBy:{type:String,attribute:"described-by"}})}},{key:"haxProperties",get:function(){return{canScale:!0,canPosition:!0,canEditSource:!0,gizmo:{title:"Parallax image",description:"Image scroll by",icon:"av:play-circle-filled",color:"grey",groups:["Image","Media"],handles:[{type:"image",url:"source",ariaDescribedby:"describedBy"}],meta:{author:"ELMS:LN"}},settings:{configure:[{property:"imageBg",title:"Image",description:"image to be involved in the background",inputMethod:"haxupload"},{slot:"parallax_heading",title:"Heading area",description:"Heading text area",inputMethod:"textarea"}],advanced:[{property:"describedBy",title:"aria-describedby",description:"Space-separated list of IDs for elements that describe the image.",inputMethod:"textfield"}]}}}}],(a=[{key:"render",value:function(){return t.html(d||(d=p(['\n      <div\n        class="parallax_container"\n        aria-describedby="','"\n      >\n        <div id="bgParallax" class="parallax">\n          <div class="title" id="titleParallax">\n            <slot name="parallax_heading"></slot>\n          </div>\n        </div>\n      </div>\n    '])),this.describedBy||"")}},{key:"updated",value:function(e){var t=this;e.forEach((function(e,n){"imageBg"==n&&t.style.setProperty("--parallax-image-background","url(".concat(t.imageBg,")"))}))}},{key:"scrollBy",value:function(e){var t=this.shadowRoot.querySelector("#bgParallax"),n=this.shadowRoot.querySelector("#titleParallax"),r=-.2*window.scrollY,a=1.4*r;t.style.backgroundPosition="center ".concat(r,"px"),n.style.transform="translate3D(0, ".concat(a,"px, 0)")}},{key:"connectedCallback",value:function(){var e=this;f(c(g.prototype),"connectedCallback",this).call(this),setTimeout((function(){window.addEventListener("scroll",e.scrollBy.bind(e))}),0)}},{key:"disconnectedCallback",value:function(){window.removeEventListener("scroll",this.scrollBy.bind(this)),f(c(g.prototype),"disconnectedCallback",this).call(this)}}])&&r(n.prototype,a),i&&r(n,i),g}(n.SchemaBehaviors(t.LitElement));window.customElements.define(g.tag,g),e.ParallaxImage=g,Object.defineProperty(e,"__esModule",{value:!0})}));
