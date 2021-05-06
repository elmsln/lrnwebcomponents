!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports,require("lit-element/lit-element.js")):"function"==typeof define&&define.amd?define(["exports","lit-element/lit-element.js"],e):e((t="undefined"!=typeof globalThis?globalThis:t||self).JwtLogin={},t.litElement_js)}(this,(function(t,e){"use strict";function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function r(t){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function i(t,e){return(i=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function l(t,e){return!e||"object"!=typeof e&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function u(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o=r(t);if(e){var i=r(this).constructor;n=Reflect.construct(o,arguments,i)}else n=o.apply(this,arguments);return l(this,n)}}function s(t,e,n){return(s="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var o=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=r(t)););return t}(t,e);if(o){var i=Object.getOwnPropertyDescriptor(o,e);return i.get?i.get.call(n):i.value}})(t,e,n||t)}function c(t){return function(t){if(Array.isArray(t))return a(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return a(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return a(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,o=new Array(e);n<e;n++)o[n]=t[n];return o}var f=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&i(t,e)}(d,t);var e,l,a,f=u(d);function d(){var t;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,d),(t=f.call(this)).auto=!1,t.method="GET",t.body={},t.key="jwt",t.jwt=null,t.ready=!1,t}return e=d,a=[{key:"tag",get:function(){return"jwt-login"}},{key:"properties",get:function(){return{auto:{type:Boolean},refreshUrl:{type:String,attribute:"refresh-url"},redirectUrl:{type:String,attribute:"redirect-url"},logoutUrl:{type:String,attribute:"logout-url"},url:{type:String},method:{type:String},body:{type:Object},key:{type:String},jwt:{type:String}}}}],(l=[{key:"lastErrorChanged",value:function(t){t&&(console.error(t),this.dispatchEvent(new CustomEvent("jwt-login-refresh-error",{composed:!0,bubbles:!0,cancelable:!1,detail:{value:t}})))}},{key:"updated",value:function(t){var e=this;s(r(d.prototype),"updated",this)&&s(r(d.prototype),"updated",this).call(this,t),t.forEach((function(t,n){["auto","method","url"].includes(n)&&e.url&&!e.jwt&&e.ready&&(clearTimeout(e.__debounce),e.__debounce=setTimeout((function(){e.generateRequest(e.url,e.body)}),0)),"jwt"==n&&(e._jwtChanged(e[n],t),e.dispatchEvent(new CustomEvent("jwt-changed",{detail:{value:e[n]}})))}))}},{key:"_jwtChanged",value:function(t,e){null!=t&&""!=t&&"null"!=t||"undefined"===n(e)?t&&(localStorage.setItem(this.key,t),this.dispatchEvent(new CustomEvent("jwt-token",{bubbles:!0,cancelable:!0,composed:!0,detail:t})),this.dispatchEvent(new CustomEvent("jwt-logged-in",{bubbles:!0,cancelable:!0,composed:!0,detail:!0}))):(localStorage.removeItem(this.key),this.dispatchEvent(new CustomEvent("jwt-logged-in",{bubbles:!0,cancelable:!0,composed:!0,detail:!1})))}},{key:"connectedCallback",value:function(){s(r(d.prototype),"connectedCallback",this).call(this),window.addEventListener("jwt-login-refresh-token",this.requestRefreshToken.bind(this)),window.addEventListener("jwt-login-toggle",this.toggleLogin.bind(this)),window.addEventListener("jwt-login-login",this.loginRequest.bind(this)),window.addEventListener("jwt-login-logout",this.logoutRequest.bind(this))}},{key:"disconnectedCallback",value:function(){window.removeEventListener("jwt-login-refresh-token",this.requestRefreshToken.bind(this)),window.removeEventListener("jwt-login-login",this.loginRequest.bind(this)),window.removeEventListener("jwt-login-toggle",this.toggleLogin.bind(this)),window.removeEventListener("jwt-login-logout",this.logoutRequest.bind(this)),s(r(d.prototype),"disconnectedCallback",this).call(this)}},{key:"firstUpdated",value:function(t){s(r(d.prototype),"firstUpdated",this)&&s(r(d.prototype),"firstUpdated",this).call(this,t),this.ready=!0,this.jwt=localStorage.getItem(this.key)}},{key:"requestRefreshToken",value:function(t){this.__context="refresh",t.detail.element&&(this.__element=t.detail.element),this.generateRequest(this.refreshUrl)}},{key:"generateRequest",value:function(t){var e=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o={method:this.method,headers:{"Content-Type":"application/json"}};"GET"!=this.method&&(o.body=JSON.stringify(n)),fetch(t,o).then((function(t){if(t.ok)return t.json();"logout"==e.__context&&e.__redirect&&e.redirectUrl&&setTimeout((function(){window.location.href=e.redirectUrl}),100),e.lastErrorChanged(t)})).then((function(t){try{e.loginResponse(t)}catch(t){console.warn(t)}}))}},{key:"toggleLogin",value:function(t){null==this.jwt?this.loginRequest(t):this.logoutRequest(t)}},{key:"loginRequest",value:function(t){this.__context="login",this.body=t.detail,this.generateRequest(this.url,this.body)}},{key:"logoutRequest",value:function(t){this.__context="logout",this.__redirect=t.detail.redirect,this.body={},this.jwt=null,this.generateRequest(this.logoutUrl)}},{key:"loginResponse",value:function(t){var e=this;switch(this.__context){case"login":this.jwt=t;break;case"refresh":var n;this.jwt=t,this.__element&&((n=this.__element.obj)[this.__element.callback].apply(n,[this.jwt].concat(c(this.__element.params))),this.__element=!1);break;case"logout":this.__redirect&&this.redirectUrl&&setTimeout((function(){window.location.href=e.redirectUrl}),100)}}}])&&o(e.prototype,l),a&&o(e,a),d}(e.LitElement);window.customElements.define(f.tag,f),t.JwtLogin=f,Object.defineProperty(t,"__esModule",{value:!0})}));
