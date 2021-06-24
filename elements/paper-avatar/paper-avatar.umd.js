!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports,require("lit"),require("@lrnwebcomponents/es-global-bridge/es-global-bridge.js"),require("@lrnwebcomponents/simple-icon/lib/simple-icon-lite.js"),require("@lrnwebcomponents/simple-icon/lib/simple-icons.js"),require("crypto"),require("buffer")):"function"==typeof define&&define.amd?define(["exports","lit","@lrnwebcomponents/es-global-bridge/es-global-bridge.js","@lrnwebcomponents/simple-icon/lib/simple-icon-lite.js","@lrnwebcomponents/simple-icon/lib/simple-icons.js","crypto","buffer"],e):e((t="undefined"!=typeof globalThis?globalThis:t||self).PaperAvatar={},t.lit,null,null,null,t.require$$0,t.require$$1)}(this,(function(t,e,n,r,i,o,a){"use strict";function s(t){return t&&"object"==typeof t&&"default"in t?t:{default:t}}var l=s(o),c=s(a);function f(t){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function h(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function u(t){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function d(t,e){return(d=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function p(t,e){return!e||"object"!=typeof e&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function y(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=u(t);if(e){var i=u(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return p(this,n)}}function b(t,e,n){return(b="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=u(t)););return t}(t,e);if(r){var i=Object.getOwnPropertyDescriptor(r,e);return i.get?i.get.call(n):i.value}})(t,e,n||t)}function v(t,e){return e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}var w,g,m,x,j,_="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};!function(t){var e={exports:{}};t(e,e.exports)}((function(t){!function(){function e(t){if(t)p[0]=p[16]=p[1]=p[2]=p[3]=p[4]=p[5]=p[6]=p[7]=p[8]=p[9]=p[10]=p[11]=p[12]=p[13]=p[14]=p[15]=0,this.blocks=p,this.buffer8=i;else if(a){var e=new ArrayBuffer(68);this.buffer8=new Uint8Array(e),this.blocks=new Uint32Array(e)}else this.blocks=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];this.h0=this.h1=this.h2=this.h3=this.start=this.bytes=0,this.finalized=this.hashed=!1,this.first=!0}var n="object"==("undefined"==typeof window?"undefined":f(window))?window:{},r=!n.JS_MD5_NO_NODE_JS&&"object"==("undefined"==typeof process?"undefined":f(process))&&process.versions&&process.versions.node;r&&(n=_);var i,o=!n.JS_MD5_NO_COMMON_JS&&t.exports,a=!n.JS_MD5_NO_ARRAY_BUFFER&&"undefined"!=typeof ArrayBuffer,s="0123456789abcdef".split(""),h=[128,32768,8388608,-2147483648],u=[0,8,16,24],d=["hex","array","digest","buffer","arrayBuffer"],p=[];if(a){var y=new ArrayBuffer(68);i=new Uint8Array(y),p=new Uint32Array(y)}var b=function(t){return function(n){return new e(!0).update(n)[t]()}},v=function(t){var e=l.default,n=c.default.Buffer;return function(r){if("string"==typeof r)return e.createHash("md5").update(r,"utf8").digest("hex");if(r.constructor===ArrayBuffer)r=new Uint8Array(r);else if(void 0===r.length)return t(r);return e.createHash("md5").update(new n(r)).digest("hex")}};e.prototype.update=function(t){if(!this.finalized){var e="string"!=typeof t;e&&t.constructor==n.ArrayBuffer&&(t=new Uint8Array(t));for(var r,i,o=0,s=t.length||0,l=this.blocks,c=this.buffer8;s>o;){if(this.hashed&&(this.hashed=!1,l[0]=l[16],l[16]=l[1]=l[2]=l[3]=l[4]=l[5]=l[6]=l[7]=l[8]=l[9]=l[10]=l[11]=l[12]=l[13]=l[14]=l[15]=0),e)if(a)for(i=this.start;s>o&&64>i;++o)c[i++]=t[o];else for(i=this.start;s>o&&64>i;++o)l[i>>2]|=t[o]<<u[3&i++];else if(a)for(i=this.start;s>o&&64>i;++o)128>(r=t.charCodeAt(o))?c[i++]=r:2048>r?(c[i++]=192|r>>6,c[i++]=128|63&r):55296>r||r>=57344?(c[i++]=224|r>>12,c[i++]=128|r>>6&63,c[i++]=128|63&r):(r=65536+((1023&r)<<10|1023&t.charCodeAt(++o)),c[i++]=240|r>>18,c[i++]=128|r>>12&63,c[i++]=128|r>>6&63,c[i++]=128|63&r);else for(i=this.start;s>o&&64>i;++o)128>(r=t.charCodeAt(o))?l[i>>2]|=r<<u[3&i++]:2048>r?(l[i>>2]|=(192|r>>6)<<u[3&i++],l[i>>2]|=(128|63&r)<<u[3&i++]):55296>r||r>=57344?(l[i>>2]|=(224|r>>12)<<u[3&i++],l[i>>2]|=(128|r>>6&63)<<u[3&i++],l[i>>2]|=(128|63&r)<<u[3&i++]):(r=65536+((1023&r)<<10|1023&t.charCodeAt(++o)),l[i>>2]|=(240|r>>18)<<u[3&i++],l[i>>2]|=(128|r>>12&63)<<u[3&i++],l[i>>2]|=(128|r>>6&63)<<u[3&i++],l[i>>2]|=(128|63&r)<<u[3&i++]);this.lastByteIndex=i,this.bytes+=i-this.start,i>=64?(this.start=i-64,this.hash(),this.hashed=!0):this.start=i}return this}},e.prototype.finalize=function(){if(!this.finalized){this.finalized=!0;var t=this.blocks,e=this.lastByteIndex;t[e>>2]|=h[3&e],e>=56&&(this.hashed||this.hash(),t[0]=t[16],t[16]=t[1]=t[2]=t[3]=t[4]=t[5]=t[6]=t[7]=t[8]=t[9]=t[10]=t[11]=t[12]=t[13]=t[14]=t[15]=0),t[14]=this.bytes<<3,this.hash()}},e.prototype.hash=function(){var t,e,n,r,i,o,a=this.blocks;this.first?e=((e=((t=((t=a[0]-680876937)<<7|t>>>25)-271733879<<0)^(n=((n=(-271733879^(r=((r=(-1732584194^2004318071&t)+a[1]-117830708)<<12|r>>>20)+t<<0)&(-271733879^t))+a[2]-1126478375)<<17|n>>>15)+r<<0)&(r^t))+a[3]-1316259209)<<22|e>>>10)+n<<0:(t=this.h0,e=this.h1,n=this.h2,e=((e+=((t=((t+=((r=this.h3)^e&(n^r))+a[0]-680876936)<<7|t>>>25)+e<<0)^(n=((n+=(e^(r=((r+=(n^t&(e^n))+a[1]-389564586)<<12|r>>>20)+t<<0)&(t^e))+a[2]+606105819)<<17|n>>>15)+r<<0)&(r^t))+a[3]-1044525330)<<22|e>>>10)+n<<0),e=((e+=((t=((t+=(r^e&(n^r))+a[4]-176418897)<<7|t>>>25)+e<<0)^(n=((n+=(e^(r=((r+=(n^t&(e^n))+a[5]+1200080426)<<12|r>>>20)+t<<0)&(t^e))+a[6]-1473231341)<<17|n>>>15)+r<<0)&(r^t))+a[7]-45705983)<<22|e>>>10)+n<<0,e=((e+=((t=((t+=(r^e&(n^r))+a[8]+1770035416)<<7|t>>>25)+e<<0)^(n=((n+=(e^(r=((r+=(n^t&(e^n))+a[9]-1958414417)<<12|r>>>20)+t<<0)&(t^e))+a[10]-42063)<<17|n>>>15)+r<<0)&(r^t))+a[11]-1990404162)<<22|e>>>10)+n<<0,e=((e+=((t=((t+=(r^e&(n^r))+a[12]+1804603682)<<7|t>>>25)+e<<0)^(n=((n+=(e^(r=((r+=(n^t&(e^n))+a[13]-40341101)<<12|r>>>20)+t<<0)&(t^e))+a[14]-1502002290)<<17|n>>>15)+r<<0)&(r^t))+a[15]+1236535329)<<22|e>>>10)+n<<0,e=((e+=((r=((r+=(e^n&((t=((t+=(n^r&(e^n))+a[1]-165796510)<<5|t>>>27)+e<<0)^e))+a[6]-1069501632)<<9|r>>>23)+t<<0)^t&((n=((n+=(t^e&(r^t))+a[11]+643717713)<<14|n>>>18)+r<<0)^r))+a[0]-373897302)<<20|e>>>12)+n<<0,e=((e+=((r=((r+=(e^n&((t=((t+=(n^r&(e^n))+a[5]-701558691)<<5|t>>>27)+e<<0)^e))+a[10]+38016083)<<9|r>>>23)+t<<0)^t&((n=((n+=(t^e&(r^t))+a[15]-660478335)<<14|n>>>18)+r<<0)^r))+a[4]-405537848)<<20|e>>>12)+n<<0,e=((e+=((r=((r+=(e^n&((t=((t+=(n^r&(e^n))+a[9]+568446438)<<5|t>>>27)+e<<0)^e))+a[14]-1019803690)<<9|r>>>23)+t<<0)^t&((n=((n+=(t^e&(r^t))+a[3]-187363961)<<14|n>>>18)+r<<0)^r))+a[8]+1163531501)<<20|e>>>12)+n<<0,e=((e+=((r=((r+=(e^n&((t=((t+=(n^r&(e^n))+a[13]-1444681467)<<5|t>>>27)+e<<0)^e))+a[2]-51403784)<<9|r>>>23)+t<<0)^t&((n=((n+=(t^e&(r^t))+a[7]+1735328473)<<14|n>>>18)+r<<0)^r))+a[12]-1926607734)<<20|e>>>12)+n<<0,e=((e+=((o=(r=((r+=((i=e^n)^(t=((t+=(i^r)+a[5]-378558)<<4|t>>>28)+e<<0))+a[8]-2022574463)<<11|r>>>21)+t<<0)^t)^(n=((n+=(o^e)+a[11]+1839030562)<<16|n>>>16)+r<<0))+a[14]-35309556)<<23|e>>>9)+n<<0,e=((e+=((o=(r=((r+=((i=e^n)^(t=((t+=(i^r)+a[1]-1530992060)<<4|t>>>28)+e<<0))+a[4]+1272893353)<<11|r>>>21)+t<<0)^t)^(n=((n+=(o^e)+a[7]-155497632)<<16|n>>>16)+r<<0))+a[10]-1094730640)<<23|e>>>9)+n<<0,e=((e+=((o=(r=((r+=((i=e^n)^(t=((t+=(i^r)+a[13]+681279174)<<4|t>>>28)+e<<0))+a[0]-358537222)<<11|r>>>21)+t<<0)^t)^(n=((n+=(o^e)+a[3]-722521979)<<16|n>>>16)+r<<0))+a[6]+76029189)<<23|e>>>9)+n<<0,e=((e+=((o=(r=((r+=((i=e^n)^(t=((t+=(i^r)+a[9]-640364487)<<4|t>>>28)+e<<0))+a[12]-421815835)<<11|r>>>21)+t<<0)^t)^(n=((n+=(o^e)+a[15]+530742520)<<16|n>>>16)+r<<0))+a[2]-995338651)<<23|e>>>9)+n<<0,e=((e+=((r=((r+=(e^((t=((t+=(n^(e|~r))+a[0]-198630844)<<6|t>>>26)+e<<0)|~n))+a[7]+1126891415)<<10|r>>>22)+t<<0)^((n=((n+=(t^(r|~e))+a[14]-1416354905)<<15|n>>>17)+r<<0)|~t))+a[5]-57434055)<<21|e>>>11)+n<<0,e=((e+=((r=((r+=(e^((t=((t+=(n^(e|~r))+a[12]+1700485571)<<6|t>>>26)+e<<0)|~n))+a[3]-1894986606)<<10|r>>>22)+t<<0)^((n=((n+=(t^(r|~e))+a[10]-1051523)<<15|n>>>17)+r<<0)|~t))+a[1]-2054922799)<<21|e>>>11)+n<<0,e=((e+=((r=((r+=(e^((t=((t+=(n^(e|~r))+a[8]+1873313359)<<6|t>>>26)+e<<0)|~n))+a[15]-30611744)<<10|r>>>22)+t<<0)^((n=((n+=(t^(r|~e))+a[6]-1560198380)<<15|n>>>17)+r<<0)|~t))+a[13]+1309151649)<<21|e>>>11)+n<<0,e=((e+=((r=((r+=(e^((t=((t+=(n^(e|~r))+a[4]-145523070)<<6|t>>>26)+e<<0)|~n))+a[11]-1120210379)<<10|r>>>22)+t<<0)^((n=((n+=(t^(r|~e))+a[2]+718787259)<<15|n>>>17)+r<<0)|~t))+a[9]-343485551)<<21|e>>>11)+n<<0,this.first?(this.h0=t+1732584193<<0,this.h1=e-271733879<<0,this.h2=n-1732584194<<0,this.h3=r+271733878<<0,this.first=!1):(this.h0=this.h0+t<<0,this.h1=this.h1+e<<0,this.h2=this.h2+n<<0,this.h3=this.h3+r<<0)},e.prototype.hex=function(){this.finalize();var t=this.h0,e=this.h1,n=this.h2,r=this.h3;return s[t>>4&15]+s[15&t]+s[t>>12&15]+s[t>>8&15]+s[t>>20&15]+s[t>>16&15]+s[t>>28&15]+s[t>>24&15]+s[e>>4&15]+s[15&e]+s[e>>12&15]+s[e>>8&15]+s[e>>20&15]+s[e>>16&15]+s[e>>28&15]+s[e>>24&15]+s[n>>4&15]+s[15&n]+s[n>>12&15]+s[n>>8&15]+s[n>>20&15]+s[n>>16&15]+s[n>>28&15]+s[n>>24&15]+s[r>>4&15]+s[15&r]+s[r>>12&15]+s[r>>8&15]+s[r>>20&15]+s[r>>16&15]+s[r>>28&15]+s[r>>24&15]},e.prototype.toString=e.prototype.hex,e.prototype.digest=function(){this.finalize();var t=this.h0,e=this.h1,n=this.h2,r=this.h3;return[255&t,t>>8&255,t>>16&255,t>>24&255,255&e,e>>8&255,e>>16&255,e>>24&255,255&n,n>>8&255,n>>16&255,n>>24&255,255&r,r>>8&255,r>>16&255,r>>24&255]},e.prototype.array=e.prototype.digest,e.prototype.arrayBuffer=function(){this.finalize();var t=new ArrayBuffer(16),e=new Uint32Array(t);return e[0]=this.h0,e[1]=this.h1,e[2]=this.h2,e[3]=this.h3,t},e.prototype.buffer=e.prototype.arrayBuffer;var w=function(){var t=b("hex");r&&(t=v(t)),t.create=function(){return new e},t.update=function(e){return t.create().update(e)};for(var n=0;n<d.length;++n){var i=d[n];t[i]=b(i)}return t}();o?t.exports=w:n.md5=w}()}));var k=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&d(t,e)}(a,t);var n,r,i,o=y(a);function a(){var t;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,a),(t=o.call(this)).dark=!1,t.label=null,t.src=null,t.jdenticonExists=!1,t.twoChars=!1,t.jdenticon=!1,t}return n=a,i=[{key:"styles",get:function(){return[e.css(j||(j=v(['\n        :host {\n          display: inline-block;\n          box-sizing: border-box;\n          position: relative;\n          width: var(--paper-avatar-width, 40px);\n          height: var(--paper-avatar-width, 40px);\n          border-radius: 50%;\n          cursor: default;\n          -webkit-user-select: none;\n          -moz-user-select: none;\n          -ms-user-select: none;\n          user-select: none;\n          color: var(--paper-avatar-text-color, #ffffff);\n          background-color: var(\n            --paper-avatar-color,\n            var(--paper-avatar-calculated-bg, #000)\n          );\n        }\n\n        :host > * {\n          pointer-events: none;\n        }\n        img {\n          width: var(--paper-avatar-width, 40px);\n          height: var(--paper-avatar-width, 40px);\n        }\n        #label,\n        #img,\n        #jdenticon {\n          position: absolute;\n          top: 0;\n          left: 0;\n          right: 0;\n          bottom: 0;\n          width: 100%;\n          height: 100%;\n          border-radius: 50%;\n        }\n        #label {\n          overflow: hidden;\n          display: -ms-flexbox;\n          display: -webkit-flex;\n          display: flex;\n          -webkit-flex-direction: row;\n          -ms-flex-direction: row;\n          flex-direction: row;\n          -webkit-align-items: center;\n          -ms-flex-align: center;\n          align-items: center;\n          --simple-icon-width: calc(var(--paper-avatar-width, 40px) * 0.9);\n          --simple-icon-height: calc(var(--paper-avatar-width, 40px) * 0.9);\n        }\n        #label[hidden] {\n          display: none;\n        }\n        #label span {\n          display: block;\n          width: 100%;\n          font-weight: 400;\n          color: var(--paper-avatar-text-color, #ffffff);\n          text-transform: capitalize;\n          font-family: "Roboto", "Noto", sans-serif;\n          -webkit-font-smoothing: antialiased;\n          text-align: center;\n          font-size: calc(var(--paper-avatar-width, 40px) * 0.7);\n          opacity: 0.8;\n        }\n        #label span[two-chars] {\n          font-size: calc(var(--paper-avatar-width, 40px) * 0.5);\n        }\n        #label simple-icon-lite {\n          margin: 0 auto;\n          opacity: 0.8;\n        }\n        #jdenticon {\n          width: var(--paper-avatar-width, 40px);\n          height: var(--paper-avatar-width, 40px);\n        }\n        #jdenticon * {\n          fill: var(--paper-avatar-text-color, #ffffff);\n          opacity: 0.8;\n        }\n        :host #jdenticon ::slotted(*) {\n          fill: var(--paper-avatar-text-color, #ffffff);\n          opacity: 0.8;\n        }\n      '])))]}},{key:"tag",get:function(){return"paper-avatar"}},{key:"properties",get:function(){return{accentColor:{type:String,attribute:"accent-color"},dark:{type:Boolean},icon:{type:String},src:{type:String},label:{type:String},jdenticonExists:{type:Boolean},twoChars:{type:Boolean,attribute:"two-chars"},colors:{type:Array},jdenticon:{type:Boolean}}}}],(r=[{key:"render",value:function(){return e.html(w||(w=v(['\n      <svg id="jdenticon" width="40" height="40"><slot></slot></svg>\n      <div\n        id="label"\n        title="','"\n        ?hidden="','"\n      >\n        ',"\n      </div>\n      ","\n    "])),this.label,this.jdenticonExists&&this.jdenticon,this.icon?e.html(g||(g=v([' <simple-icon-lite icon="','"></simple-icon-lite> '])),this.icon):e.html(m||(m=v(['\n              <span ?two-chars="','"\n                >',"\n              </span>\n            "])),this.twoChars,this._label(this.label)),this.src?e.html(x||(x=v(['\n            <img\n              id="img"\n              loading="lazy"\n              .src="','"\n              @load="','"\n              @error="','"\n              aria-hidden="true"\n            />\n          '])),this.src||"",this._onImgLoad,this._onImgError):"")}},{key:"updated",value:function(t){var e=this;t.forEach((function(t,n){"label"==n&&e._observerLabel(e[n])}))}},{key:"_observerLabel",value:function(t){t&&(this.jdenticonExists&&this.jdenticon&&(this.shadowRoot.querySelector("#label").hidden=!0,window.jdenticon.update(this.shadowRoot.querySelector("#jdenticon"),window.md5(t))),this.accentColor||this.style.setProperty("--paper-avatar-calculated-bg",this._parseColor(t)))}},{key:"pathFromUrl",value:function(t){return t.substring(0,t.lastIndexOf("/")+1)}},{key:"firstUpdated",value:function(t){var e=this.pathFromUrl(decodeURIComponent("undefined"==typeof document?new(require("url").URL)("file:"+__filename).href:document.currentScript&&document.currentScript.src||new URL("paper-avatar.umd.js",document.baseURI).href)),n="".concat(e,"lib/jdenticon-1.4.0.min.js");window.addEventListener("es-bridge-jdenticon-loaded",this._jdenticonLoaded.bind(this)),window.ESGlobalBridge.requestAvailability().load("jdenticon",n)}},{key:"disconnectedCallback",value:function(){window.removeEventListener("es-bridge-jdenticon-loaded",this._jdenticonLoaded.bind(this)),b(u(a.prototype),"disconnectedCallback",this).call(this)}},{key:"_jdenticonLoaded",value:function(t){this.jdenticonExists=!0,this._observerLabel(this.label)}},{key:"_label",value:function(t){if(!t)return"";if(this.twoChars){if(this.label.indexOf(" ")>-1){var e=this.label.match(/\b(\w)/g);return e[0]+e[1]}return t.substring(0,2)}return t.charAt(0)}},{key:"_onImgLoad",value:function(t){t.currentTarget.hidden=!1}},{key:"_onImgError",value:function(t){t.currentTarget.hidden=!0}},{key:"_parseColor",value:function(t){for(var e=this.colors?this.colors:["#F44336","#E91E63","#9C27B0","#673AB7","#3F51B5","#2196F3","#03A9F4","#00BCD4","#795548","#009688","#4CAF50","#8BC34A","#CDDC39","#FFEB3B","#FFC107","#FF9800","#FF5722","#9E9E9E","#607D8B"],n=0,r=0;r<t.length;r++)n+=t.charCodeAt(r)<<5;return n>=e.length?e[n%e.length]:e[n]}}])&&h(n.prototype,r),i&&h(n,i),a}(e.LitElement);window.customElements.define(k.tag,k),t.PaperAvatar=k,Object.defineProperty(t,"__esModule",{value:!0})}));
