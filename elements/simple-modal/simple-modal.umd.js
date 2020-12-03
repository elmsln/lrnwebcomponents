!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("lit-element/lit-element.js"),require("@lrnwebcomponents/simple-icon/lib/simple-icons.js"),require("@lrnwebcomponents/simple-icon/lib/simple-icon-lite.js"),require("@lrnwebcomponents/simple-icon/lib/simple-icon-button-lite.js"),require("web-dialog/index.js")):"function"==typeof define&&define.amd?define(["exports","lit-element/lit-element.js","@lrnwebcomponents/simple-icon/lib/simple-icons.js","@lrnwebcomponents/simple-icon/lib/simple-icon-lite.js","@lrnwebcomponents/simple-icon/lib/simple-icon-button-lite.js","web-dialog/index.js"],t):t((e=e||self).SimpleModal={},e.litElement_js)}(this,function(e,t){"use strict";function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function i(e,t,n){return t&&o(e.prototype,t),n&&o(e,n),e}function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach(function(t){l(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function c(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function p(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var n,o=s(e);if(t){var i=s(this).constructor;n=Reflect.construct(o,arguments,i)}else n=o.apply(this,arguments);return c(this,n)}}function u(e,t,n){return(u="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var o=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=s(e)););return e}(e,t);if(o){var i=Object.getOwnPropertyDescriptor(o,t);return i.get?i.get.call(n):i.value}})(e,t,n||e)}function m(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function b(){var e=m(["\n        :host {\n          display: block;\n        }\n\n        :host([hidden]) {\n          display: none;\n        }\n\n        :host web-dialog ::slotted(*) {\n          font-size: 14px;\n          width: 100%;\n        }\n\n        #titlebar {\n          margin-top: 0;\n          padding: var(--simple-modal-titlebar-padding, 0px 16px);\n          display: flex;\n          align-items: center;\n          justify-content: space-between;\n          color: var(--simple-modal-titlebar-color, #444);\n          background-color: var(--simple-modal-titlebar-background, #ddd);\n          border-radius: 0;\n          height: var(--simple-modal-titlebar-height, unset);\n          line-height: var(--simple-modal-titlebar-line-height, unset);\n        }\n\n        #headerbar {\n          margin: 0;\n          padding: var(--simple-modal-header-padding, 0px 16px);\n          color: var(--simple-modal-header-color, #222);\n          background-color: var(--simple-modal-header-background, #ccc);\n        }\n\n        h2 {\n          margin-right: 8px;\n          padding: 0;\n          margin: 0;\n          flex: auto;\n          font-size: 18px;\n          line-height: 18px;\n        }\n\n        #close {\n          top: 0;\n          border: var(--simple-modal-titlebar-button-border, none);\n          padding: var(--simple-modal-titlebar-button-padding, 10px 0);\n          min-width: unset;\n          text-transform: none;\n          color: var(--simple-modal-titlebar-color, #444);\n          background-color: transparent;\n        }\n\n        #close:focus {\n          opacity: 0.7;\n          outline: var(--simple-modal-titlebar-button-outline, 2px dotted grey);\n          outline-offset: var(\n            --simple-modal-titlebar-button-outline-offset,\n            2px\n          );\n        }\n\n        #close simple-icon-lite {\n          --simple-icon-height: var(--simple-modal-titlebar-icon-height, 16px);\n          --simple-icon-width: var(--simple-modal-titlebar-icon-width, 16px);\n          color: var(--simple-modal-titlebar-color, #444);\n        }\n\n        #simple-modal-content {\n          flex-grow: 1;\n          padding: var(--simple-modal-content-padding, 8px 16px);\n          margin: 0;\n          color: var(--simple-modal-content-container-color, #222);\n          background-color: var(\n            --simple-modal-content-container-background,\n            #fff\n          );\n        }\n\n        .buttons {\n          padding: 0;\n          padding: var(--simple-modal-buttons-padding, 0);\n          margin: 0;\n          color: var(--simple-modal-buttons-color, unset);\n          background-color: var(--simple-modal-buttons-background, unset);\n        }\n\n        .buttons ::slotted(*) {\n          padding: 0;\n          margin: 0;\n          color: var(--simple-modal-button-color, --simple-modal-buttons-color);\n          background-color: var(\n            --simple-modal-button-background,\n            --simple-modal-buttons-background\n          );\n        }\n        web-dialog {\n          --dialog-border-radius: var(--simple-modal-border-radius, 2px);\n        }\n        web-dialog::part(dialog) {\n          border: 1px solid var(--simple-modal-border-color, #222);\n          padding: 0;\n        }\n      "]);return b=function(){return e},e}function f(){var e=m(['<web-dialog\n      id="dialog"\n      center\n      role="dialog"\n      aria-describedby="simple-modal-content"\n      aria-label="','"\n      aria-labelledby="','"\n      aria-modal="true"\n      ?open="','"\n      @open="','"\n      @close="','"\n    >\n      <div id="titlebar">\n        <h2 id="simple-modal-title" ?hidden="','">','</h2>\n        <div></div>\n        <simple-icon-button-lite\n          id="close"\n          dark\n          icon="','"\n          @click="','"\n          label="','"\n        >\n        </simple-icon-button-lite>\n      </div>\n      <div id="headerbar"><slot name="header"></slot></div>\n      <div id="simple-modal-content">\n        <slot name="content"></slot>\n      </div>\n      <div class="buttons">\n        <slot name="buttons"></slot>\n      </div>\n    </web-dialog>']);return f=function(){return e},e}var h=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(l,t.LitElement);var o=p(l);function l(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,l),(e=o.call(this)).title="",e.opened=!1,e.closeLabel="Close",e.closeIcon="close",e.modal=!1,e}return i(l,[{key:"render",value:function(){return t.html(f(),this._getAriaLabel(this.title),this._getAriaLabelledby(this.title),this.opened,this.open,this.close,!this.title,this.title,this.closeIcon,this.close,this.closeLabel)}}],[{key:"styles",get:function(){return[t.css(b())]}},{key:"properties",get:function(){return a(a({},u(s(l),"properties",this)),{},{title:{type:String},opened:{type:Boolean,reflect:!0},closeLabel:{attribute:"close-label",type:String},closeIcon:{type:String,attribute:"close-icon"},invokedBy:{type:Object},modal:{type:Boolean}})}},{key:"tag",get:function(){return"simple-modal"}}]),i(l,[{key:"updated",value:function(e){var t=this;e.forEach(function(e,n){"opened"==n&&t._openedChanged(t[n])})}},{key:"connectedCallback",value:function(){var e=this;u(s(l.prototype),"connectedCallback",this).call(this),setTimeout(function(){window.addEventListener("simple-modal-hide",e.close.bind(e)),window.addEventListener("simple-modal-show",e.showEvent.bind(e))},0)}},{key:"disconnectedCallback",value:function(){window.removeEventListener("simple-modal-hide",this.close.bind(this)),window.removeEventListener("simple-modal-show",this.showEvent.bind(this)),u(s(l.prototype),"disconnectedCallback",this).call(this)}},{key:"showEvent",value:function(e){var t=this;window.dispatchEvent(new CustomEvent("simple-toast-hide",{bubbles:!0,composed:!0,cancelable:!1,detail:!1})),this.opened?(this.innerHTML="",setTimeout(function(){t.show(e.detail.title,e.detail.elements,e.detail.invokedBy,e.detail.id,e.detail.modalClass,e.detail.styles,e.detail.clone,e.detail.modal)},0)):this.show(e.detail.title,e.detail.elements,e.detail.invokedBy,e.detail.id,e.detail.modalClass,e.detail.styles,e.detail.clone,e.detail.modal)}},{key:"show",value:function(e,t,n){var o,i=this,l=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null,a=arguments.length>5&&void 0!==arguments[5]?arguments[5]:null,s=arguments.length>6&&void 0!==arguments[6]&&arguments[6],d=arguments.length>7&&void 0!==arguments[7]&&arguments[7];this.invokedBy=n,this.modal=d,this.title=e;var c=["header","content","buttons"];for(var p in l?this.setAttribute("id",l):this.removeAttribute("id"),this.setAttribute("style",""),a&&["--simple-modal-width","--simple-modal-z-index","--simple-modal-height","--simple-modal-min-width","--simple-modal-min-height","--simple-modal-max-width","--simple-modal-max-height","--simple-modal-titlebar-color","--simple-modal-titlebar-height","--simple-modal-titlebar-line-height","--simple-modal-titlebar-background","--simple-modal-titlebar-padding","--simple-modal-header-color","--simple-modal-header-background","--simple-modal-header-padding","--simple-modal-content-container-color","--simple-modal-content-container-background","--simple-modal-content-padding","--simple-modal-buttons-color","--simple-modal-buttons-background","--simple-modal-buttons-padding","--simple-modal-button-color","--simple-modal-button-background"].forEach(function(e){i.style.setProperty(e,a[e]||"unset")}),r?this.setAttribute("class",r):this.removeAttribute("class"),c)t[c[p]]&&((o=s?t[c[p]].cloneNode(!0):t[c[p]]).setAttribute("slot",c[p]),this.appendChild(o));this.opened=!0}},{key:"close",value:function(){this.opened=!1}},{key:"open",value:function(){this.opened=!0}},{key:"_openedChanged",value:function(e){var t=this;if("undefined"===n(e)||e){if(e){this.querySelectorAll("[dialog-dismiss],[dialog-confirm]").forEach(function(e){e.addEventListener("click",function(e){t.close()})});var o=new CustomEvent("simple-modal-opened",{bubbles:!0,cancelable:!0,detail:{opened:!0,invokedBy:this.invokedBy}});this.dispatchEvent(o)}}else{for(this.title="";null!==this.firstChild;)this.removeChild(this.firstChild);this.invokedBy&&setTimeout(function(){t.invokedBy.focus()},500);var i=new CustomEvent("simple-modal-closed",{bubbles:!0,cancelable:!0,detail:{opened:!1,invokedBy:this.invokedBy}});this.dispatchEvent(i)}}},{key:"_getAriaLabelledby",value:function(e){return e?"simple-modal-title":null}},{key:"_getAriaLabel",value:function(e){return e?null:"Modal Dialog"}}]),l}();window.customElements.define(h.tag,h),window.SimpleModal=window.SimpleModal||{},window.SimpleModal.requestAvailability=function(){return window.SimpleModal.instance||(window.SimpleModal.instance=document.createElement("simple-modal"),document.body.appendChild(window.SimpleModal.instance)),window.SimpleModal.instance};var v=window.SimpleModal.requestAvailability();e.SimpleModal=h,e.SimpleModalStore=v,Object.defineProperty(e,"__esModule",{value:!0})});
