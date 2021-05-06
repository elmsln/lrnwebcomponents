!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports,require("@polymer/polymer/polymer-element.js"),require("@lrnwebcomponents/schema-behaviors/schema-behaviors.js"),require("@lrnwebcomponents/simple-icon/simple-icon.js"),require("@lrnwebcomponents/simple-icon/lib/simple-icons.js"),require("@lrnwebcomponents/simple-icon/lib/simple-icon-button.js")):"function"==typeof define&&define.amd?define(["exports","@polymer/polymer/polymer-element.js","@lrnwebcomponents/schema-behaviors/schema-behaviors.js","@lrnwebcomponents/simple-icon/simple-icon.js","@lrnwebcomponents/simple-icon/lib/simple-icons.js","@lrnwebcomponents/simple-icon/lib/simple-icon-button.js"],e):e((t="undefined"!=typeof globalThis?globalThis:t||self).PromoTile={},t.polymerElement_js,t.schemaBehaviors_js)}(this,(function(t,e,n){"use strict";function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function p(t,e){return(p=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function s(t,e){return!e||"object"!=typeof e&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function f(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o=c(t);if(e){var r=c(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return s(this,n)}}function u(t,e,n){return(u="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var o=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=c(t)););return t}(t,e);if(o){var r=Object.getOwnPropertyDescriptor(o,e);return r.get?r.get.call(n):r.value}})(t,e,n||t)}var d,h=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&p(t,e)}(h,t);var n,i,a,s=f(h);function h(){return o(this,h),s.apply(this,arguments)}return n=h,a=[{key:"template",get:function(){return e.html(d||(t=['\n      <style>\n        :host {\n          display: block;\n        }\n\n        a {\n          text-decoration: var(--promo-tile-a-text-decoration, none);\n          @apply --promo-tile-a;\n        }\n\n        #container {\n          width: var(--promo-tile-container-width, 100%);\n          height: var(--promo-tile-container-height, auto);\n          @apply --promo-tile-container;\n        }\n\n        .back_card {\n          background-color: var(\n            --promo-tile-back-card-background-color,\n            #e2801e\n          );\n          height: var(--promo-tile-back-card-height, 460px);\n          opacity: var(--promo-tile-back-card-opacity, 0);\n          display: var(--promo-tile-back-card-display, flex);\n          flex-direction: var(--promo-tile-back-card-flex-direction, column);\n          @apply --promo-tile-back-card;\n        }\n\n        :host([hover]) #container .back_card {\n          opacity: var(--promo-tile-container-back-card-hover-opacity, 0.9);\n          transition: var(\n            --promo-tile-container-back-card-hover-transition,\n            all 0.3s ease-in-out\n          );\n          @apply --promo-tile-container-back-card-hover;\n        }\n\n        :host([hover]) #container .front_card .front_title {\n          opacity: var(\n            --promo-tile-container-front-card-front-title-hover-opacity,\n            0\n          );\n          transition: var(\n            --promo-tile-container-front-card-front-title-hover-transition,\n            all 0.3s ease-in-out\n          );\n          @apply --promo-tile-container-front-card-hover;\n        }\n\n        .image {\n          display: var(--promo-tile-image-display, flex);\n          justify-content: var(--promo-tile-image-justify-content, center);\n          background-position: var(\n            --promo-tile-image-background-position,\n            top center\n          );\n          background-repeat: var(\n            --promo-tile-image-background-repeat,\n            no-repeat\n          );\n          background-size: var(--promo-tile-image-background-size, cover);\n          width: var(--promo-tile-image-width, 100%);\n          height: var(--promo-tile-image-height, 100%);\n          @apply --promo-tile-image;\n        }\n\n        .front_title {\n          opacity: var(--promo-tile-front-title-opacity, 1);\n          position: var(--promo-tile-front-title-position, absolute);\n          display: var(--promo-tile-front-title-display, flex);\n          align-self: var(--promo-tile-front-title-align-self, flex-end);\n          padding: var(--promo-tile-front-title-padding, 0 0 25px 0);\n          @apply --promo-tile-front-title;\n        }\n\n        .front_title h1 {\n          color: var(--promo-tile-front-title-h1-color, #ffffff);\n          font-size: var(--promo-tile-front-title-h1-font-size, 36px);\n          font-weight: var(--promo-tile-front-title-h1-font-weight, 400);\n          text-shadow: var(\n            --promo-tile-front-title-h1-text-shadow,\n            1px 1px 3px\n              var(--promo-tile-front-title-h1-text-shadow-color, #363533)\n          );\n          @apply --promo-title-front-title-h1;\n        }\n\n        .back_title {\n          opacity: var(--promo-tile-back-title-opacity, 1);\n          display: var(--promo-tile-back-title-display, flex);\n          justify-content: var(--promo-tile-back-title-justify-content, center);\n          padding: var(--promo-tile-back-title-padding, 20px 0 0 0);\n          @apply --promo-tile-back-title;\n        }\n\n        .back_title h1 {\n          color: var(--promo-tile-back-title-h1-color, #ffffff);\n          font-size: var(--promo-tile-back-title-h1-font-size, 36px);\n          font-weight: var(--promo-tile-back-title-h1-font-weight, 400);\n          @apply --promo-tile-back-title-h1;\n        }\n\n        .back_content {\n          color: var(--promo-tile-back-content-font-color, #ffffff);\n          font-size: var(--promo-tile-back-content-font-size, 18px);\n          font-weight: var(--promo-tile-back-content-font-weight, 300);\n          line-height: var(--promo-tile-back-content-line-height, 1.4);\n          padding: var(--promo-title-back-content-padding, 0 20px 0 20px);\n          text-align: justify;\n          @apply --promo-tile-back-content;\n        }\n\n        button#learn {\n          display: var(--promo-tile-button-learn-display, flex);\n          margin: var(--promo-tile-button-learn-margin, 140px auto 0 auto);\n          font-size: var(--promo-tile-button-learn-font-size, 18px);\n          color: var(--promo-tile-button-learn-font-color, #ffffff);\n          border: var(--promo-tile-button-learn-border, solid);\n          border-width: var(--promo-tile-button-learn-border-width, 1px);\n          border-color: var(--promo-tile-button-learn-border-color, #ffffff);\n          border-radius: var(--promo-tile-button-learn-border-radius, 0);\n          width: var(--promo-tile-button-learn-width, 50%);\n          @apply --promo-tile-button-learn;\n        }\n\n        button#learn:hover,\n        button#learn:focus {\n          background-color: var(\n            --promo-tile-button-learn-background-color-active,\n            #363533\n          );\n          @apply --promo-tile-button-learn-active;\n        }\n      </style>\n      <div id="container">\n        <div class="front_card">\n          <div\n            id="front_image"\n            class="image"\n            alt="[[alt]]"\n            style$="background-image:url([[image]])"\n          >\n            <div class="front_title">\n              <h1>[[title]]</h1>\n            </div>\n            <div class="back_card" id="cardBack" on-click="activateBtn">\n              <div class="back_title">\n                <h1>[[title]]</h1>\n              </div>\n              <div class="back_content">\n                <slot></slot>\n              </div>\n              <div class="learn_more">\n                <a\n                  tabindex="-1"\n                  href="[[url]]"\n                  id="link"\n                  target$="[[_urlTarget(url)]]"\n                >\n                  <button id="learn" no-ink>\n                    [[label]]\n                    <simple-icon icon="chevron-right"></simple-icon>\n                  </button>\n                </a>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    '],n||(n=t.slice(0)),d=Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(n)}}))));var t,n}},{key:"tag",get:function(){return"promo-tile"}},{key:"properties",get:function(){return l(l({},u(c(h),"properties",this)),{},{image:{type:String,value:"",reflectToAttribute:!0},alt:{type:String,value:"",reflectToAttribute:!0},label:{type:String,value:"",reflectToAttribute:!0},title:{type:String,value:"",reflectToAttribute:!0},url:{type:String,value:"",reflectToAttribute:!0},hover:{type:Boolean,value:!1,reflectToAttribute:!0}})}},{key:"haxProperties",get:function(){return{canScale:!0,canPosition:!0,canEditSource:!0,gizmo:{title:"Promo Tile",description:"A tile element for promoting content.",icon:"icons:dashboard",color:"orange",groups:["Content","Media"],handles:[{type:"content",source:"image",title:"citation",url:"source"}],meta:{author:"ELMS:LN"}},settings:{configure:[{property:"title",title:"Title",description:"The title of the tile",inputMethod:"textfield",icon:"editor:title"},{property:"image",title:"Image",description:"The image of the tile",inputMethod:"textfield",icon:"editor:insert-photo"},{property:"alt",title:"Alt",description:"The alt text for the image",inputMethod:"textfield",icon:"editor:mode-edit"},{property:"url",title:"Link",description:"The link of the tile",inputMethod:"textfield",icon:"editor:insert-link"},{property:"label",title:"Label",description:"The label for the button",inputMethod:"textfield",icon:"editor:title"}],advanced:[]}}}}],(i=[{key:"connectedCallback",value:function(){u(c(h.prototype),"connectedCallback",this).call(this),this.addEventListener("mouseover",this.__hoverIn.bind(this)),this.addEventListener("mouseout",this.__hoverOut.bind(this)),this.addEventListener("focusin",this.__hoverIn.bind(this)),this.addEventListener("focusout",this.__hoverOut.bind(this))}},{key:"disconnectedCallback",value:function(){this.removeEventListener("mouseover",this.__hoverIn.bind(this)),this.removeEventListener("mouseout",this.__hoverOut.bind(this)),this.removeEventListener("focusin",this.__hoverIn.bind(this)),this.removeEventListener("focusout",this.__hoverOut.bind(this)),u(c(h.prototype),"disconnectedCallback",this).call(this)}},{key:"_outsideLink",value:function(t){if(0!=t.indexOf("http"))return!1;var e=location.href,n=location.pathname,o=e.substring(0,e.indexOf(n));return 0!=t.indexOf(o)}},{key:"_urlTarget",value:function(t){return!(!t||!this._outsideLink(t))&&"_blank"}},{key:"activateBtn",value:function(){if(this.hover){var t=this.shadowRoot.querySelector("#link");window.innerWidth>700&&t.click()}}},{key:"__hoverIn",value:function(){this.hover=!0}},{key:"__hoverOut",value:function(){this.hover=!1}}])&&r(n.prototype,i),a&&r(n,a),h}(n.SchemaBehaviors(e.PolymerElement));window.customElements.define(h.tag,h),t.PromoTile=h,Object.defineProperty(t,"__esModule",{value:!0})}));
