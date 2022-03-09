!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).RadioBehaviors={})}(this,(function(e){"use strict";function t(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function n(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?t(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):t(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e){return o=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},o(e)}function c(e,t){return c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},c(e,t)}function s(e,t){if(t&&("object"==typeof t||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function l(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=o(e);if(t){var i=o(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return s(this,n)}}function u(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=o(e)););return e}function a(){return a="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=u(e,t);if(r){var i=Object.getOwnPropertyDescriptor(r,t);return i.get?i.get.call(arguments.length<3?e:n):i.value}},a.apply(this,arguments)}
/**
   * Copyright 2018 The Pennsylvania State University
   * @license Apache-2.0, see License.md for full text.
   */e.RadioBehaviors=function(e){return function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&c(e,t)}(f,e);var t,i,s,u=l(f);function f(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,f),(e=u.call(this)).addEventListener(e.__selectEvent,e._handleSelectItem),e}return t=f,i=[{key:"render",value:function(){return""}},{key:"connectedCallback",value:function(){a(o(f.prototype),"connectedCallback",this).call(this),this.__observer.observe(this,{attributes:!0,childList:!0,subtree:!0})}},{key:"disconnectedCallback",value:function(){this.__observer&&this.__observer.disconnect&&this.__observer.disconnect(),this.removeEventListener(this.__selectEvent,this._handleSelectItem),a(o(f.prototype),"disconnectedCallback",this).call(this)}},{key:"firstUpdated",value:function(e){a(o(f.prototype),"firstUpdated",this)&&a(o(f.prototype),"firstUpdated",this).call(this,e),this.selectItem(this.selection)}},{key:"updated",value:function(e){var t=this;a(o(f.prototype),"updated",this)&&a(o(f.prototype),"updated",this).call(this,e),e.forEach((function(e,n){"selection"===n&&t.selection!==e&&t.selectItem(t.selection)}))}},{key:"selectedIndex",get:function(){var e=this,t=this.itemData.filter((function(t){return t.id===e.selection}));return t&&t[0]?t[0].index:0}},{key:"__observer",get:function(){var e=this;return new MutationObserver((function(t,n){return e._handleItemChange(t,n)}))}},{key:"__allowNull",get:function(){return!1}},{key:"__query",get:function(){return"> item"}},{key:"__selected",get:function(){return"selected"}},{key:"__selectEvent",get:function(){return"select-item"}},{key:"selectItem",value:function(e){e="string"==typeof e&&e.trim().length>0?this._getItemById(e):"integer"==typeof e?this._getItemByIndex(e):e,this.__allowNull||e&&!e.disabled||(e=this.selection&&this._getItemByQuery("#".concat(this.selection))?this._getItemByQuery("#".concat(this.selection)):this.__selected&&this._getItemByQuery("[".concat(this.__selected,"]"))?this._getItemByQuery("[".concat(this.__selected,"]")):this._getItemByQuery()),e&&!this._isItemSelected(e)?(e.id=e.id||this._generateUUID(),this.selection=e.id,this._handleSelectionChange()):!e&&this.__allowNull&&this.selection&&(this.selection=void 0,this._handleSelectionChange()),this._updateItemData()}},{key:"_getDataFromItems",value:function(){var e=this,t=this.querySelectorAll("".concat(this.__query));return Object.keys(t||{}).map((function(n){return e._getDataFromItem(t[n],n,e.__selected)}))}},{key:"_getDataFromItem",value:function(e,t,n){return(!e.id||e.id.trim().length<1)&&(e.id=this._generateUUID()),{id:e.id,index:parseInt(t),node:e,innerHTML:e.innerHTML,selected:e.getAttribute(n)}}},{key:"_generateUUID",value:function(){return"item-ss-s-s-s-sss".replace(/s/g,Math.floor(65536*(1+Math.random())).toString(16).substring(1))}},{key:"_getItemById",value:function(e){return this._getItemByQuery("#".concat(e))}},{key:"_getItemByIndex",value:function(e){var t=this.querySelectorAll(this.__query);return t&&t[e]&&!t[e].disabled?t[e]:void 0}},{key:"_getItemByQuery",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=this.querySelector("".concat(this.__query).concat(e));return t&&!t.disabled?t:void 0}},{key:"_handleItemChange",value:function(e,t){var n=this,r=!1;e.forEach((function(e){var t="childList"===e.type&&e.addedNodes.length>0,i="childList"===e.type&&e.removedNodes.length>0&&Object.keys(e.removedNodes||{}).filter((function(t){return e.removedNodes[t].id===n.selection})).length>0,o="attributes"===e.type&&"id"===e.attributeName;r=r||t||i||o})),r&&(this.querySelectorAll("".concat(this.__query)).forEach((function(e){e.id||(e.id=n._generateUUID())})),this.selectItem(this.selection)),this._updateItemData()}},{key:"_handleSelectItem",value:function(e){e.stopPropagation&&e.stopPropagation(),this.selectItem(e.detail.controls)}},{key:"_handleSelectionChange",value:function(){var e=this;this.querySelectorAll("".concat(this.__query)).forEach((function(t){return e._setItemSelected(t)})),this.dispatchEvent(new CustomEvent("selection-changed",{bubbles:!1,cancelable:!0,composed:!0,detail:this}))}},{key:"_isItemSelected",value:function(e){return e&&(e.id&&e.id===this.selection||e.hasAttribute(this.__selected))}},{key:"_setItemSelected",value:function(e){e.id!==this.selection?e.removeAttribute(this.__selected):e.setAttribute(this.__selected,!0)}},{key:"_updateItemData",value:function(){this.itemData=this._getDataFromItems(),this.render&&this.render()}}],s=[{key:"properties",get:function(){return n(n({},a(o(f),"properties",this)),{},{itemData:{type:Array},selection:{type:String,attribute:"selection"}})}}],i&&r(t.prototype,i),s&&r(t,s),Object.defineProperty(t,"prototype",{writable:!1}),f}(e)},Object.defineProperty(e,"__esModule",{value:!0})}));
