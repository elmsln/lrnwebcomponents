!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("@lrnwebcomponents/simple-fields/lib/simple-fields-container.js"),require("lit"),require("@lrnwebcomponents/simple-picker/simple-picker.js")):"function"==typeof define&&define.amd?define(["exports","@lrnwebcomponents/simple-fields/lib/simple-fields-container.js","lit","@lrnwebcomponents/simple-picker/simple-picker.js"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).DropdownSelect={},null,e.lit)}(this,(function(e,t,n){"use strict";function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function r(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function i(e){return(i=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function l(e,t){return(l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function s(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function c(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?s(e):t}function u(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=i(e);if(t){var r=i(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return c(this,n)}}function a(e,t,n){return(a="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var o=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=i(e)););return e}(e,t);if(o){var r=Object.getOwnPropertyDescriptor(o,t);return r.get?r.get.call(n):r.value}})(e,t,n||e)}function p(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var f,d,b=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&l(e,t)}(y,e);var t,c,b,h=u(y);function y(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,y),(e=h.call(this)).label="Select an option.",e.options=[[]],e.opened=!1,e.setOptions(),e.observer.observe(s(e),{attributes:!1,childList:!0,subtree:!1}),e}return t=y,b=[{key:"styles",get:function(){return[n.css(d||(d=p(["\n        :host {\n          display: block;\n          --simple-picker-border-width: 0;\n          --simple-picker-options-border-width: 1px;\n          --simple-picker-options-border-color: var(\n            --simple-fields-accent-color\n          );\n          --simple-picker-background-color: rgba(255, 255, 255, 0);\n        }\n        :host([hidden]) {\n          display: none;\n        }\n      "])))]}},{key:"tag",get:function(){return"dropdown-select"}},{key:"properties",get:function(){return{errorMessage:{attribute:"error-message",type:String},label:{type:String},opened:{type:Boolean},options:{type:Array},selectedItem:{attribute:"selected-item",type:Object},selectedItemIndex:{attribute:"selected-item-index",type:Number},selectedItemLabel:{attribute:"selected-item-label",type:String},value:{type:String,reflect:!0}}}}],(c=[{key:"render",value:function(){return n.html(f||(f=p(['\n      <simple-fields-container\n        id="menu"\n        .error-message="','"\n        .label="','"\n      >\n        <simple-picker\n          id="picker"\n          slot="field"\n          value="','"\n          @expand="','"\n          @collapse="','"\n          @changed="','"\n        >\n        </simple-picker>\n      </simple-fields-container>\n      <slot id="content" hidden></slot>\n    '])),this.errorMessage,this.label,this.value,this._onOpen,this.onClose,this._dropDownChanged)}},{key:"disconnectedCallback",value:function(){this.observer.disconnect(),a(i(y.prototype),"disconnectedCallback",this).call(this)}},{key:"observer",get:function(){var e=this;return new MutationObserver((function(){return e.setOptions()}))}},{key:"setOptions",value:function(){var e=[];this.querySelectorAll("paper-item").forEach((function(t,n){e.push([{alt:t.innerHTML,style:t.getAttribute("style")||void 0,icon:t.querySelector("[icon]")?t.querySelector("[icon]").getAttribute("icon"):void 0,value:t.getAttribute("value")||t.getAttribute("id")||n}])})),e===[]&&(e=[[]]),this.options=e}},{key:"updated",value:function(e){var t=this,n=this.shadowRoot&&this.shadowRoot.querySelector("#picker")?this.shadowRoot.querySelector("#picker"):void 0;e.forEach((function(e,o){"value"===o&&t._valueChanged(t.value,e),"options"===o&&t.options!==e&&(n.options=t.options)})),this.dispatchEvent(new CustomEvent("change",{bubbles:!0,cancelable:!0,composed:!0,detail:this}))}},{key:"_onOpen",value:function(){this.opened=!0,this.dispatchEvent(new CustomEvent("open",{bubbles:!0,cancelable:!0,composed:!0,detail:this}))}},{key:"_onClose",value:function(){this.opened=!1,this.dispatchEvent(new CustomEvent("close",{bubbles:!0,cancelable:!0,composed:!0,detail:this}))}},{key:"_dropDownChanged",value:function(e){var t=this.shadowRoot&&this.shadowRoot.querySelector("#picker")?this.shadowRoot.querySelector("#picker"):void 0;this.value=t.value}},{key:"_valueChanged",value:function(e,t){var n=this,r=null,i=null,l=-1;this.selectedItem=this.value,this.options.forEach((function(e){return e.forEach((function(e){n.value===e.value&&(r=e.alt||e.value,i=l++)}))})),this.selectedItemLabel=r,this.selectedItemIndex=i,"undefined"!==o(t)&&(this.dispatchEvent(new CustomEvent("value-changed",{bubbles:!0,cancelable:!0,composed:!0,target:this,detail:{value:e,oldValue:t}})),this.dispatchEvent(new CustomEvent("dropdown-select-changed",{bubbles:!0,cancelable:!0,composed:!0,detail:this})))}}])&&r(t.prototype,c),b&&r(t,b),y}(n.LitElement);window.customElements.define(b.tag,b),e.DropdownSelect=b,Object.defineProperty(e,"__esModule",{value:!0})}));
