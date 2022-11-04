!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("lit"),require("@lrnwebcomponents/schema-behaviors/schema-behaviors.js"),require("@lrnwebcomponents/es-global-bridge/es-global-bridge.js")):"function"==typeof define&&define.amd?define(["exports","lit","@lrnwebcomponents/schema-behaviors/schema-behaviors.js","@lrnwebcomponents/es-global-bridge/es-global-bridge.js"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).AframePlayer={},e.lit,e.schemaBehaviors_js)}(this,(function(e,t,n){"use strict";function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i(e)}function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e){return l=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},l(e)}function s(e,t){return s=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},s(e,t)}function u(e,t){if(t&&("object"==typeof t||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function p(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=l(e);if(t){var o=l(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return u(this,n)}}function f(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=l(e)););return e}function y(){return y="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=f(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},y.apply(this,arguments)}function d(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var h,b,m=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&s(e,t)}(f,e);var n,r,a,u=p(f);function f(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,f),(e=u.call(this)).course="",e.height="480px",e.width="640px",e.skyColor="#DCDCDC",e.ar=!1,e.x="0",e.y="0",e.z="0",e.position={},e}return n=f,a=[{key:"styles",get:function(){return[t.css(b||(b=d(["\n        :host {\n          display: block;\n          position: relative;\n        }\n        .a-hidden {\n          display: hidden;\n        }\n      "])))]}},{key:"tag",get:function(){return"aframe-player"}},{key:"properties",get:function(){return o(o({},y(l(f),"properties",this)),{},{source:{type:String},height:{type:String},width:{type:String},skyColor:{type:String,attribute:"sky-color"},ar:{type:Boolean},x:{type:String},y:{type:String},z:{type:String},position:{type:Object}})}},{key:"haxProperties",get:function(){return{canScale:!1,canPosition:!1,canEditSource:!0,gizmo:{title:"3D player",description:"A 3D file / augmented reality player.",icon:"av:play-circle-filled",color:"amber",groups:["3D","Augmented reality"],handles:[{type:"3d",source:"source"}],meta:{author:"HAXTheWeb core team"}},settings:{configure:[{property:"source",title:"Source",description:"The URL for this AR file.",inputMethod:"textfield",type:"bar",icon:"link",required:!0},{property:"x",title:"X",description:"X position of the element in AR.",inputMethod:"textfield",type:"bar",icon:"communication:location-on",required:!0},{property:"y",title:"Y",description:"Y position of the element in AR.",inputMethod:"textfield",type:"bar",icon:"communication:location-on",required:!0},{property:"z",title:"Z",description:"Z position of the element in AR.",inputMethod:"textfield",type:"bar",icon:"communication:location-on",required:!0},{property:"skyColor",title:"Sky color",description:"Select the color of the sky in the scene.",inputMethod:"colorpicker",type:"bar",icon:"editor:format-color-fill"}],advanced:[]}}}}],(r=[{key:"render",value:function(){return t.html(h||(h=d(['\n      <a-scene\n        id="scene"\n        class="embedded"\n        embedded\n        ?arjs="','"\n        style="height:',";width:",';"\n      >\n        <a-sky color="','"></a-sky>\n        <a-marker-camera preset="hiro"></a-marker-camera>\n      </a-scene>\n    '])),this.ar,this.height,this.width,this.skyColor)}},{key:"updated",value:function(e){var t=this;e.forEach((function(e,n){["x","y","z","width","height"].includes(n)&&(t.position=t._computePosition(t.x,t.y,t.z,t.width,t.height)),"position"==n&&t._positionChanged(t[n])}))}},{key:"createRenderRoot",value:function(){return this}},{key:"disconnectedCallback",value:function(){window.removeEventListener("es-bridge-aframePlayer-loaded",this._aframeLoaded.bind(this)),y(l(f.prototype),"disconnectedCallback",this).call(this)}},{key:"connectedCallback",value:function(){y(l(f.prototype),"connectedCallback",this).call(this),"object"===("undefined"==typeof TWEEN?"undefined":i(TWEEN))&&this._aframeLoaded.bind(this),window.addEventListener("es-bridge-aframePlayer-loaded",this._aframeLoaded.bind(this)),window.ESGlobalBridge.requestAvailability().load("aframePlayer","https://aframe.io/releases/0.9.2/aframe.min.js")}},{key:"_aframeLoaded",value:function(e){this.querySelector("#scene").removeFullScreenStyles(),this.__entity=document.createElement("a-entity"),this.__entity.setAttribute("gltf-model","url("+this.source+")"),this._positionChanged(this.position),this.querySelector("#scene").appendChild(this.__entity)}},{key:"_computePosition",value:function(e,t,n,r,o){return{x:e,y:t,z:n}}},{key:"_positionChanged",value:function(e){void 0!==this.__entity&&this.__entity.setAttribute("position",e)}}])&&c(n.prototype,r),a&&c(n,a),Object.defineProperty(n,"prototype",{writable:!1}),f}(n.SchemaBehaviors(t.LitElement));customElements.define(m.tag,m),e.AframePlayer=m,Object.defineProperty(e,"__esModule",{value:!0})}));
