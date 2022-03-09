!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports,require("lit")):"function"==typeof define&&define.amd?define(["exports","lit"],e):e((t="undefined"!=typeof globalThis?globalThis:t||self).UndoManager={},t.lit)}(this,(function(t,e){"use strict";function n(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function o(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?n(Object(o),!0).forEach((function(e){a(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function c(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function r(t,e,n){return e&&c(t.prototype,e),n&&c(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function u(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&d(t,e)}function s(t){return s=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},s(t)}function d(t,e){return d=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},d(t,e)}function l(t,e){if(e&&("object"==typeof e||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function h(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o=s(t);if(e){var i=s(this).constructor;n=Reflect.construct(o,arguments,i)}else n=o.apply(this,arguments);return l(this,n)}}function f(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=s(t)););return t}function p(){return p="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var o=f(t,e);if(o){var i=Object.getOwnPropertyDescriptor(o,e);return i.get?i.get.call(arguments.length<3?t:n):i.value}},p.apply(this,arguments)}var k,b=function(t){return function(t){u(n,t);var e=h(n);function n(){var t;return i(this,n),(t=e.call(this)).__StackDebounce,t.undoStackLimit=20,t.undoStackTimer=300,t.undoStackIgnore=!1,t.undoStackObserver=null,t.undoStackObserverProps={attributes:!0,attributeOldValue:!0,childList:!0,characterData:!0,characterDataOldValue:!0,subtree:!0},t.undoStackInitialValue=t.innerHTML,t.undoStackPrevValue=t.undoStackInitialValue,t}return r(n,[{key:"connectedCallback",value:function(){var t=this;this.undoStackObserver=new MutationObserver((function(e){clearTimeout(t.__StackDebounce),t.__StackDebounce=setTimeout((function(){t.undoStackIgnore?t.undoStackIgnore=!1:t.undoManagerStackLogic(e)}),t.undoStackTimer)})),this.undoStackObserver.observe(this,this.undoStackObserverProps),this.undoManagerStackLogic({}),p(s(n.prototype),"connectedCallback",this).call(this)}},{key:"undoManagerStackLogic",value:function(t){var e=this.innerHTML;this.undoStack&&""!=e&&e!=this.undoStackPrevValue&&this.undoStackInitialValue!=e&&(this.undoStack.execute(new S(this,this.undoStackPrevValue,e)),this.undoStackPrevValue=e,this.dispatchEvent(new CustomEvent("stack-changed",{detail:{value:this.undoStack},bubbles:!0,composed:!0})))}},{key:"disconnectedCallback",value:function(){this.undoStackObserver&&this.undoStackObserver.disconnect(),p(s(n.prototype),"disconnectedCallback",this).call(this)}},{key:"firstUpdated",value:function(t){var e=this;p(s(n.prototype),"firstUpdated",this)&&p(s(n.prototype),"firstUpdated",this).call(this,t),this.undoStack=new v,this.undoStack.undoStackLimit=this.undoStackLimit,this.undoStack.undoStackPosition=-1,this.undoStack.commands=[],this.undoStack.changed=function(t){e.canRedo=e.undoStack.canRedo(),e.canUndo=e.undoStack.canUndo()},this.undoStack.changed()}},{key:"updated",value:function(t){var e=this;p(s(n.prototype),"updated",this)&&p(s(n.prototype),"updated",this).call(this,t),t.forEach((function(t,n){"canUndo"==n&&e.dispatchEvent(new CustomEvent("can-undo-changed",{detail:{value:e[n]},bubbles:!0,composed:!0})),"canRedo"==n&&e.dispatchEvent(new CustomEvent("can-redo-changed",{detail:{value:e[n]},bubbles:!0,composed:!0}))}))}},{key:"undo",value:function(){return this.undoStack.undo()}},{key:"redo",value:function(){return this.undoStack.redo()}},{key:"commands",value:function(){return this.undoStack.commands}}],[{key:"properties",get:function(){return o(o({},p(s(n),"properties",this)),{},{canUndo:{type:Boolean,attribute:"can-undo"},canRedo:{type:Boolean,attribute:"can-redo"},undoStackObserverProps:{type:Object},target:{type:Object},stack:{type:Object}})}}]),n}(t)},y=function(t){u(o,t);var n=h(o);function o(){return i(this,o),n.apply(this,arguments)}return r(o,[{key:"render",value:function(){return e.html(k||(t=["<slot></slot>"],n||(n=t.slice(0)),k=Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(n)}}))));var t,n}}],[{key:"tag",get:function(){return"undo-manager"}}]),o}(b(e.LitElement));customElements.define("undo-manager",y);var v=function(){function t(){i(this,t),this.commands=[],this.undoStackPosition=-1,this.undoStackLimit=20}return r(t,[{key:"execute",value:function(t){this._clearRedo(),t.execute(),this.undoStackLimit==this.commands.length?this.commands.splice(Math.round(this.commands.length/3),1):this.undoStackPosition++,this.commands.push(t),this.changed()}},{key:"undo",value:function(){this.commands[this.undoStackPosition]&&(this.commands[this.undoStackPosition].undo(),this.undoStackPosition--,this.changed())}},{key:"canUndo",value:function(){return this.undoStackPosition>=0}},{key:"redo",value:function(){this.commands[this.undoStackPosition+1]&&(this.undoStackPosition++,this.commands[this.undoStackPosition].redo(),this.changed())}},{key:"canRedo",value:function(){return this.undoStackPosition<this.commands.length-1}},{key:"_clearRedo",value:function(){this.commands=this.commands.slice(0,this.undoStackPosition+1)}},{key:"changed",value:function(){}}]),t}(),S=function(){function t(e,n,o){i(this,t),this.el=e,this.oldValue=n,this.newValue=o}return r(t,[{key:"execute",value:function(){}},{key:"undo",value:function(){this.el.undoStackIgnore=!0,this.el.undoStack.commands&&this.el.undoStack.commands[this.el.undoStack.undoStackPosition-1]?this.el.innerHTML=this.el.undoStack.commands[this.el.undoStack.undoStackPosition-1].newValue:this.el.undoStack.commands&&0===this.el.undoStack.undoStackPosition?this.el.innerHTML=this.el.undoStackInitialValue:this.el.innerHTML=this.oldValue}},{key:"redo",value:function(){this.el.undoStackIgnore=!0,this.el.innerHTML=this.newValue}}]),t}();t.Undo=v,t.UndoManager=y,t.UndoManagerBehaviors=b,t.UndoManagerCommand=S,Object.defineProperty(t,"__esModule",{value:!0})}));
