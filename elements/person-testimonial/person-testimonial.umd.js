!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("lit"),require("@lrnwebcomponents/simple-colors/simple-colors.js")):"function"==typeof define&&define.amd?define(["exports","lit","@lrnwebcomponents/simple-colors/simple-colors.js"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).PersonTestimonial={},e.lit,e.simpleColors_js)}(this,(function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function c(e,t){return(c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function p(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function u(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=l(e);if(t){var o=l(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return p(this,n)}}function d(e,t,n){return(d="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=l(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function f(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function m(e){return function(e){if(Array.isArray(e))return h(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return h(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return h(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function h(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var g,y,b=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&c(e,t)}(h,e);var n,i,a,p=u(h);function h(){return r(this,h),p.apply(this,arguments)}return n=h,a=[{key:"styles",get:function(){return[].concat(m(d(l(h),"styles",this)),[t.css(y||(y=f(["\n        :host {\n          display: block;\n          --person-testimonial-font-family: sans-serif;\n          --person-testimonial-bg: var(--simple-colors-default-theme-grey-1);\n          --person-testimonial-color: var(\n            --simple-colors-default-theme-accent-7\n          );\n          --person-testimonial-text: var(--simple-colors-default-theme-grey-12);\n        }\n\n        div.card {\n          display: inline-flex;\n          background-color: var(--person-testimonial-bg);\n          color: var(--person-testimonial-text);\n          font-family: var(--person-testimonial-font-family);\n          box-shadow: 0 2px 2px rgba(59, 43, 91, 0.7);\n        }\n\n        .image img {\n          display: block;\n          width: 150px;\n          height: 100%;\n        }\n        .image img {\n          max-width: 200px;\n        }\n        .image {\n          padding-right: 5px;\n          background-color: var(--person-testimonial-color);\n        }\n\n        svg {\n          fill: var(--person-testimonial-color);\n          height: 24px;\n          width: 24px;\n        }\n\n        .wrap {\n          margin: 15px;\n        }\n\n        .testimonial {\n          line-height: 24px;\n          font-size: 16px;\n          font-style: italic;\n        }\n\n        .name {\n          font-size: 21px;\n          text-transform: uppercase;\n          font-weight: bold;\n          margin-top: 20px;\n        }\n\n        .position {\n          font-size: 14px;\n          margin-top: 5px;\n        }\n\n        .arrow_right {\n          width: 0;\n          height: 0;\n          border-top: 15px solid var(--person-testimonial-bg);\n          border-bottom: 15px solid var(--person-testimonial-bg);\n          border-left: solid 15px transparent;\n          background-color: var(--person-testimonial-color);\n          position: relative;\n          top: 55px;\n        }\n\n        #quotestart {\n          display: inline-flex;\n          transform: rotateY(180deg);\n        }\n\n        #quoteend {\n          display: inline-flex;\n        }\n        @media screen and (max-width: 850px) {\n          div.card {\n            display: flex;\n            flex-wrap: wrap;\n          }\n          .image img {\n            display: block;\n            border-radius: 50%;\n            width: 200px;\n            height: 200px;\n          }\n          .image {\n            margin-top: 25px;\n            border-radius: 50%;\n            padding: 5px;\n            margin-left: auto;\n            margin-right: auto;\n          }\n          .arrow_right {\n            display: none;\n          }\n          .name,\n          .position {\n            text-align: center;\n          }\n        }\n        @media screen and (max-width: 600px) {\n          .image img {\n            width: 150px;\n            height: 150px;\n          }\n        }\n      "])))])}},{key:"tag",get:function(){return"person-testimonial"}},{key:"properties",get:function(){return s(s({},d(l(h),"properties",this)),{},{describedBy:{type:String,attribute:"described-by"},image:{type:String},name:{type:String},position:{type:String}})}},{key:"haxProperties",get:function(){return{canScale:!0,canPosition:!0,canEditSource:!0,gizmo:{title:"Testimonial",description:"A person saying a nice thing about us",icon:"editor:format-quote",color:"orange",groups:["Content","Presentation"],handles:[{type:"image",source:"image",title:"name",caption:"position",ariaDescribedby:"describedBy"}],meta:{author:"EberlyODL / LRNWebComponents"}},settings:{configure:[{property:"image",title:"Image",description:"Adds image to testimonial",inputMethod:"haxupload",icon:"editor:insert-photo"},{property:"accentColor",title:"Accent color",description:"Select the accent color use",inputMethod:"colorpicker",icon:"editor:format-color-fill"},{property:"dark",title:"Dark",description:"Use dark theme",inputMethod:"boolean",icon:"invert-colors"},{property:"name",title:"Full Name",description:"Credit the person making the testimonial",inputMethod:"textfield",icon:"account-circle"},{property:"position",title:"Position or Job Title",description:"List the position and job title",inputMethod:"textfield",icon:"icons:work"},{slot:"",title:"User's testimonial:",description:"This is where you enter your testimonial.",inputMethod:"code-editor",required:!0}],advanced:[{property:"describedBy",title:"aria-describedby",description:"Space-separated list of IDs for elements that describe the image.",inputMethod:"textfield"}]}}}}],(i=[{key:"render",value:function(){return t.html(g||(g=f(['\n      <div class="card">\n        <div class="image">\n          <img\n            src="','"\n            loading="lazy"\n            aria-describedby="','"\n          />\n        </div>\n        <div class="arrow_right"></div>\n        <div class="wrap">\n          <div class="testimonial">\n            <svg id="quotestart">\n              <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"></path>\n            </svg>\n            <slot></slot>\n            <svg id="quoteend">\n              <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"></path>\n            </svg>\n          </div>\n          <div class="name">','</div>\n          <div class="position">',"</div>\n        </div>\n      </div>\n    "])),this.image,this.describedBy,this.name,this.position)}}])&&o(n.prototype,i),a&&o(n,a),h}(n.SimpleColors);window.customElements.define(b.tag,b),e.PersonTestimonial=b,Object.defineProperty(e,"__esModule",{value:!0})}));
