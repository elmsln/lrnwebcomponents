!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports,require("lit-element/lit-element.js"),require("@lrnwebcomponents/es-global-bridge/es-global-bridge.js")):"function"==typeof define&&define.amd?define(["exports","lit-element/lit-element.js","@lrnwebcomponents/es-global-bridge/es-global-bridge.js"],n):n((e=e||self).BarcodeReader={},e.litElement_js)}(this,function(e,n){"use strict";function t(e,n,t,o,r,i,a){try{var d=e[i](a),c=d.value}catch(e){return void t(e)}d.done?n(c):Promise.resolve(c).then(o,r)}function o(e){return function(){var n=this,o=arguments;return new Promise(function(r,i){var a=e.apply(n,o);function d(e){t(a,r,i,d,c,"next",e)}function c(e){t(a,r,i,d,c,"throw",e)}d(void 0)})}}function r(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function i(e,n,t){return n&&r(e.prototype,n),t&&r(e,t),e}function a(e){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e,n){return(d=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}function c(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function s(e){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var t,o,r,i=a(e);if(n){var d=a(this).constructor;t=Reflect.construct(i,arguments,d)}else t=i.apply(this,arguments);return o=this,!(r=t)||"object"!=typeof r&&"function"!=typeof r?c(o):r}}function u(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}function l(){var e=u(["\n      :host {\n        display: block;\n        position: relative;\n      }\n      canvas {\n        display: none;\n      }\n      video {\n        width: 100%;\n        height: 100%;\n      }\n      #overlay {\n        position: absolute;\n        top: 0;\n        left: 0;\n        bottom: 70px;\n        right: 0;\n        background-color: transparent;\n        border-style: solid;\n        border-color: rgba(0, 0, 0, 0.5);\n        pointer-events: none;\n        z-index: 20;\n        border-width: 2em;\n      }\n\n      #hidden {\n        display: none;\n      }\n      #hidden2 {\n        display: none;\n      }\n    "]);return l=function(){return e},e}function f(){var e=u(['\n      <div id="hidden">\n        <div id="overlay"></div>\n        <div>\n          <video muted autoplay id="video" playsinline="true"></video>\n          <canvas\n            id="canvas"\n            width="640"\n            height="480"\n            style="display: none; float: bottom;"\n          ></canvas>\n        </div>\n      </div>\n      <div>\n        Result: <span><input type="text" id="resultElem" /> </span\n        ><button id="render">Show scanner</button>\n      </div>\n      <div id="hidden2">\n        <div class="select">\n          <label for="videoSource">Video source: </label>\n          <select id="videoSource"></select>\n        </div>\n        <button id="go">Scan</button>\n      </div>\n    ']);return f=function(){return e},e}var h,v=function(e){!function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&d(e,n)}(r,n.LitElement);var t=s(r);function r(){var e;return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,r),e=t.call(this),window.ESGlobalBridge.requestAvailability(),window.ESGlobalBridge.instance.load("ZXing",decodeURIComponent("undefined"==typeof document?new(require("url").URL)("file:"+__filename).href:document.currentScript&&document.currentScript.src||new URL("barcode-reader.umd.js",document.baseURI).href)+"/../lib/zxing.js"),window.addEventListener("es-bridge-zxing-loaded",e._control.bind(c(e))),e}return i(r,[{key:"render",value:function(){return n.html(f())}}],[{key:"styles",get:function(){return n.css(l())}}]),i(r,[{key:"_control",value:function(){var e=this.shadowRoot.querySelector("#video"),n=this.shadowRoot.querySelector("#canvas"),t=n.getContext("2d"),o=this.shadowRoot.querySelector("select#videoSource"),r=(this.shadowRoot.getElementById("videoOption"),this.shadowRoot.getElementById("go")),i=this.shadowRoot.getElementById("resultElem"),a=640,d=480,c=240,s=320,u=!0,l=null,f=null;!function e(){window.ZXing?(console.log("loaded zxing instance"),l=new window.ZXing,f=l.Runtime.addFunction(E)):setTimeout(e,100)}();var v,p,m,y,w,g,b,_,R,E=function(e,n,t,o){var a=new Uint8Array(l.HEAPU8.buffer,e,n);i.value=String.fromCharCode.apply(null,a),r.disabled=!1};function x(){if(i.textContent="",null==l)return r.disabled=!1,void alert("Barcode Reader is not ready!");var n=null,o=0,v=0;u?(n=t,o=a,v=d):(n=mobileCtx,o=c,v=s),n.drawImage(e,0,0,o,v);var p=document.createElement("canvas");p.width=h.videoWidth,p.height=h.videoHeight;var m=p.getContext("2d"),y=h.videoWidth,w=h.videoHeight;m.drawImage(e,0,0,y,w);var g=m.getImageData(0,0,y,w).data,b=l._resize(y,w);console.time("decode barcode");for(var _=0,R=0;_<g.length;_+=4,R++)l.HEAPU8[b+R]=g[_];var E=l._decode_any(f);console.timeEnd("decode barcode"),-2==E&&setTimeout(x,30),-3==E&&(console.error("error code: ",E),this._control())}u="pc"==(v=navigator.userAgent.toLowerCase(),p="ipad"==v.match(/ipad/i),m="iphone os"==v.match(/iphone os/i),y="midp"==v.match(/midp/i),w="rv:1.2.3.4"==v.match(/rv:1.2.3.4/i),g="ucweb"==v.match(/ucweb/i),b="android"==v.match(/android/i),_="windows ce"==v.match(/windows ce/i),R="windows mobile"==v.match(/windows mobile/i),p||m||y||w||g||b||_||R?"phone":"pc"),r.onclick=function(){n.style.display="none",x(),r.disabled=!0};o=this.shadowRoot.querySelector("select#videoSource");function S(){r.disabled=!1,window.stream&&window.stream.getTracks().forEach(function(e){e.stop()});var e={video:{deviceId:{exact:o.value}}};navigator.mediaDevices.getUserMedia(e).then(j).catch(k)}function j(n){window.stream=n,e.srcObject=n}function k(e){console.error("Error: ",e)}navigator.mediaDevices.enumerateDevices().then(function(e){for(var n=e.length-1;n>=0;--n){var t=e[n],r=document.createElement("option");r.value=t.deviceId,"videoinput"===t.kind?(r.text=t.label||"camera "+(o.length+1),o.appendChild(r)):console.log("Found one other kind of source/device: ",t)}}).then(S).catch(k),o.onchange=S}},{key:"firstUpdated",value:function(){this.start().then(function(e){return console.log()}),this.__context=this.shadowRoot.querySelector("canvas").getContext("2d"),this.__video=this.shadowRoot.querySelector("video"),this.__videoInputSelector=this.shadowRoot.querySelector("#videoInput"),h=this.shadowRoot.getElementById("video"),this._renderVideo()}},{key:"_onFrame",value:function(){var e=o(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:this.__video.videoWidth>0&&this._drawFrame(this.__video),this.__animationFrameId=requestAnimationFrame(this._onFrame.bind(this));case 2:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"_drawFrame",value:function(e){this.__context.drawImage(e,0,0,640,480,0,0,640,480),this._processFrame().then(function(e){return console.log()})}},{key:"start",value:function(){var e=o(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:this._control();case 1:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"_renderVideo",value:function(){var e=o(regeneratorRuntime.mark(function e(){var n=this;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:this.shadowRoot.getElementById("render").addEventListener("click",function(e){var t=n.shadowRoot.getElementById("hidden"),o=n.shadowRoot.getElementById("render"),r=n.shadowRoot.getElementById("hidden2");"none"===t.style.display?(t.style.display="inline",o.innerHTML="Hide Scanner",r.style.display="inline"):(t.style.display="none",o.innerHTML="Show Scanner",r.style.display="none")});case 1:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()}],[{key:"tag",get:function(){return"barcode-reader"}}]),r}();customElements.define(v.tag,v),e.BarcodeReader=v,Object.defineProperty(e,"__esModule",{value:!0})});