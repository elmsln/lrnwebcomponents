!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("lit-element/lit-element.js"),require("@lrnwebcomponents/simple-icon/simple-icon.js"),require("@lrnwebcomponents/simple-icon/lib/simple-icons.js")):"function"==typeof define&&define.amd?define(["exports","lit-element/lit-element.js","@lrnwebcomponents/simple-icon/simple-icon.js","@lrnwebcomponents/simple-icon/lib/simple-icons.js"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).VoiceRecorder={},e.litElement_js)}(this,(function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function i(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}function a(e){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function o(e,t){return(o=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function s(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function c(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?s(e):t}function l(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=a(e);if(t){var i=a(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return c(this,n)}}function u(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function d(e){return(e|=0)<10?"0".concat(e):"".concat(Math.min(e,99))}function h(){function e(e,t){return new Promise((function(n,r){var i=new XMLHttpRequest;i.open("GET",e),i.responseType="arraybuffer",i.onload=function(){n(WebAssembly.instantiate(i.response,t))},i.onerror=r,i.send()}))}var t=null,n=5242880;function r(e){var t=n;return n+=e,t}function i(e){postMessage({type:"internal-error",data:e})}var a=null,o=null,s=null;onmessage=function(n){var c,l=n.data;switch(l.type){case"init":var u=l.data,d=u.wasmURL,h=u.shimURL;Promise.resolve().then((function(){var e,n;return self.WebAssembly&&(e=new Uint8Array([0,97,115,109,1,0,0,0,1,6,1,96,1,127,1,127,3,2,1,0,5,3,1,0,1,7,8,1,4,116,101,115,116,0,0,10,16,1,14,0,32,0,65,1,54,2,0,32,0,40,2,0,11]),n=new WebAssembly.Module(e),0===new WebAssembly.Instance(n,{}).exports.test(4))&&delete self.WebAssembly,self.WebAssembly||importScripts(h),{memory:t=new WebAssembly.Memory({initial:256,maximum:256}),pow:Math.pow,exit:i,powf:Math.pow,exp:Math.exp,sqrtf:Math.sqrt,cos:Math.cos,log:Math.log,sin:Math.sin,sbrk:r}})).then((function(t){return function(t,n){if(!WebAssembly.instantiateStreaming)return e(t,n);var r=fetch(t,{credentials:"same-origin"});return WebAssembly.instantiateStreaming(r,n).catch((function(r){if(r.message&&r.message.indexOf("Argument 0 must be provided and must be a Response")>0)return e(t,n);throw r}))}(d,{env:t})})).then((function(e){a=e.instance.exports,postMessage({type:"init",data:null})})).catch((function(e){postMessage({type:"init-error",data:e.toString()})}));break;case"start":if(!function(e){if(!(o=a.vmsg_init(e)))return!1;var n=new Uint32Array(t.buffer,o,1)[0];return s=new Float32Array(t.buffer,n),!0}(l.data))return postMessage({type:"error",data:"vmsg_init"});break;case"data":if(c=l.data,s.set(c),!(a.vmsg_encode(o,c.length)>=0))return postMessage({type:"error",data:"vmsg_encode"});break;case"stop":var f=function(){if(a.vmsg_flush(o)<0)return null;var e=new Uint32Array(t.buffer,o+4,1)[0],n=new Uint32Array(t.buffer,o+8,1)[0],r=new Uint8Array(t.buffer,e,n),i=new Blob([r],{type:"audio/mpeg"});return a.vmsg_free(o),o=null,s=null,i}();if(!f)return postMessage({type:"error",data:"vmsg_flush"});postMessage({type:"stop",data:f})}}}var f=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;n(this,e),this.wasmURL=new URL(t.wasmURL||"/static/js/vmsg.wasm",location).href,this.shimURL=new URL(t.shimURL||"/static/js/wasm-polyfill.js",location).href,this.onStop=r,this.pitch=t.pitch||0,this.stream=null,this.audioCtx=null,this.gainNode=null,this.pitchFX=null,this.encNode=null,this.worker=null,this.workerURL=null,this.blob=null,this.blobURL=null,this.resolve=null,this.reject=null,Object.seal(this)}return i(e,[{key:"close",value:function(){this.encNode&&this.encNode.disconnect(),this.encNode&&(this.encNode.onaudioprocess=null),this.stream&&this.stopTracks(),this.audioCtx&&this.audioCtx.close(),this.worker&&this.worker.terminate(),this.workerURL&&URL.revokeObjectURL(this.workerURL),this.blobURL&&URL.revokeObjectURL(this.blobURL)}},{key:"initAudio",value:function(){var e=this;return(navigator.mediaDevices&&navigator.mediaDevices.getUserMedia?function(e){return navigator.mediaDevices.getUserMedia(e)}:function(e){var t=navigator.webkitGetUserMedia||navigator.mozGetUserMedia;return t?new Promise((function(n,r){t.call(navigator,e,n,r)})):Promise.reject(new Error("getUserMedia is not implemented in this browser"))})({audio:!0}).then((function(t){e.stream=t;var n=e.audioCtx=new(window.AudioContext||window.webkitAudioContext),r=n.createMediaStreamSource(t),i=e.gainNode=(n.createGain||n.createGainNode).call(n);i.gain.value=1,r.connect(i);var a=e.pitchFX=new R(n);a.setPitchOffset(e.pitch);var o=e.encNode=(n.createScriptProcessor||n.createJavaScriptNode).call(n,0,1,1);a.output.connect(o),i.connect(0===e.pitch?o:a.input)}))}},{key:"initWorker",value:function(){var e=this;if(!this.stream)throw new Error("missing audio initialization");var t=new Blob(["(",h.toString(),")()"],{type:"application/javascript"}),n=this.workerURL=URL.createObjectURL(t),r=this.worker=new Worker(n),i=this.wasmURL,a=this.shimURL;return r.postMessage({type:"init",data:{wasmURL:i,shimURL:a}}),new Promise((function(t,n){r.onmessage=function(r){var i=r.data;switch(i.type){case"init":t();break;case"init-error":n(new Error(i.data));break;case"error":case"internal-error":console.error("Worker error:",i.data),e.reject&&e.reject(i.data);break;case"stop":e.blob=i.data,e.blobURL=URL.createObjectURL(i.data),e.onStop&&e.onStop(),e.resolve&&e.resolve(e.blob)}}}))}},{key:"init",value:function(){return this.initAudio().then(this.initWorker.bind(this))}},{key:"startRecording",value:function(){var e=this;if(!this.stream)throw new Error("missing audio initialization");if(!this.worker)throw new Error("missing worker initialization");this.blob=null,this.blobURL&&URL.revokeObjectURL(this.blobURL),this.blobURL=null,this.resolve=null,this.reject=null,this.worker.postMessage({type:"start",data:this.audioCtx.sampleRate}),this.encNode.onaudioprocess=function(t){var n=t.inputBuffer.getChannelData(0);e.worker.postMessage({type:"data",data:n})},this.encNode.connect(this.audioCtx.destination)}},{key:"stopRecording",value:function(){var e=this;if(!this.stream)throw new Error("missing audio initialization");if(!this.worker)throw new Error("missing worker initialization");return this.encNode.disconnect(),this.encNode.onaudioprocess=null,this.stopTracks(),this.worker.postMessage({type:"stop",data:null}),new Promise((function(t,n){e.resolve=t,e.reject=n}))}},{key:"stopTracks",value:function(){this.stream.getTracks&&this.stream.getTracks().forEach((function(e){return e.stop()}))}}]),e}(),p=function(){function e(){var t=this,r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document.body,a=arguments.length>2?arguments[2]:void 0,o=arguments.length>3?arguments[3]:void 0;n(this,e),this.recorder=new f(r,this.onStop.bind(this)),this.resolve=a,this.reject=o,this.target=i,this.renderArea=null,this.recordBtn=null,this.stopBtn=null,this.timer=null,this.audio=null,this.saveBtn=null,this.tid=0,this.start=0,Object.seal(this),this.recorder.initAudio().then((function(){return t.drawInit()})).then((function(){return t.recorder.initWorker()})).then((function(){return t.drawAll()})).catch((function(e){return t.drawError(e)}))}return i(e,[{key:"drawInit",value:function(){var e=this.renderArea=document.createElement("div");e.className="vmsg-popup",e.addEventListener("click",(function(e){return e.stopPropagation()}));var t=document.createElement("div");t.className="vmsg-progress";for(var n=0;n<3;n++){var r=document.createElement("div");r.className="vmsg-progress-dot",t.appendChild(r)}e.appendChild(t),this.target.appendChild(e)}},{key:"drawTime",value:function(e){var t=Math.round(e/1e3);this.timer.textContent=d(t/60)+":"+d(t%60)}},{key:"drawAll",value:function(){var e=this;this.drawInit(),this.clearAll();var t=document.createElement("div");t.className="vmsg-record-row",this.renderArea.appendChild(t);var n=this.recordBtn=document.createElement("button");n.className="vmsg-button vmsg-record-button",n.textContent="●",n.addEventListener("click",(function(){return e.startRecording()})),t.appendChild(n);var r=this.stopBtn=document.createElement("button");r.className="vmsg-button vmsg-stop-button",r.style.display="none",r.textContent="■",r.addEventListener("click",(function(){return e.stopRecording()})),t.appendChild(r);var i=this.audio=new Audio;i.autoplay=!0;var a=this.timer=document.createElement("span");a.className="vmsg-timer",a.addEventListener("click",(function(){i.paused?e.recorder.blobURL&&(i.src=e.recorder.blobURL):i.pause()})),this.drawTime(0),t.appendChild(a);var o=this.saveBtn=document.createElement("button");o.className="vmsg-button vmsg-save-button",o.textContent="✓",o.disabled=!0,o.addEventListener("click",(function(){return e.close(e.recorder.blob)})),t.appendChild(o);var s=document.createElement("div");s.className="vmsg-slider-wrapper vmsg-gain-slider-wrapper";var c=document.createElement("input");c.className="vmsg-slider vmsg-gain-slider",c.setAttribute("type","range"),c.min=0,c.max=2,c.step=.2,c.value=1,c.onchange=function(){var t=+c.value;e.recorder.gainNode.gain.value=t},s.appendChild(c),this.renderArea.appendChild(s);var l=document.createElement("div");l.className="vmsg-slider-wrapper vmsg-pitch-slider-wrapper";var u=document.createElement("input");u.className="vmsg-slider vmsg-pitch-slider",u.setAttribute("type","range"),u.min=-1,u.max=1,u.step=.2,u.value=this.recorder.pitch,u.onchange=function(){var t=+u.value;e.recorder.pitchFX.setPitchOffset(t),e.recorder.gainNode.disconnect(),e.recorder.gainNode.connect(0===t?e.recorder.encNode:e.recorder.pitchFX.input)},l.appendChild(u),this.renderArea.appendChild(l),this.target.dispatchEvent(new CustomEvent("vmsg-ready",{detail:{value:!0}}))}},{key:"drawError",value:function(e){console.error(e),this.drawInit(),this.clearAll();var t=document.createElement("div");t.className="vmsg-error",t.textContent=e.toString(),this.renderArea.appendChild(t)}},{key:"clearAll",value:function(){this.renderArea&&(this.renderArea.innerHTML="")}},{key:"close",value:function(e){this.audio&&this.audio.pause(),this.tid&&clearTimeout(this.tid),this.recorder.close(),e?this.resolve(e):this.reject(new Error("No record made"))}},{key:"onStop",value:function(){this.recordBtn.style.display="",this.stopBtn.style.display="none",this.stopBtn.disabled=!1,this.saveBtn.disabled=!1}},{key:"startRecording",value:function(){this.audio.pause(),this.start=Date.now(),this.updateTime(),this.recordBtn.style.display="none",this.stopBtn.style.display="",this.saveBtn.disabled=!0,this.recorder.startRecording()}},{key:"stopRecording",value:function(){clearTimeout(this.tid),this.tid=0,this.stopBtn.disabled=!0,this.recorder.stopRecording()}},{key:"updateTime",value:function(){var e=this;this.drawTime(Date.now()-this.start),this.tid=setTimeout((function(){return e.updateTime()}),300)}}]),e}(),m=!1;var v,g,b=.05,y=.1;function w(e,t,n,r){for(var i=t*e.sampleRate,a=i+(t-2*n)*e.sampleRate,o=e.createBuffer(1,a,e.sampleRate),s=o.getChannelData(0),c=0;c<i;++c)s[c]=r?(i-c)/a:c/i;for(c=i;c<a;++c)s[c]=0;return o}function R(e){this.context=e;var t=(e.createGain||e.createGainNode).call(e),n=(e.createGain||e.createGainNode).call(e);this.input=t,this.output=n;var r=e.createBufferSource(),i=e.createBufferSource(),a=e.createBufferSource(),o=e.createBufferSource();this.shiftDownBuffer=w(e,y,b,!1),this.shiftUpBuffer=w(e,y,b,!0),r.buffer=this.shiftDownBuffer,i.buffer=this.shiftDownBuffer,a.buffer=this.shiftUpBuffer,o.buffer=this.shiftUpBuffer,r.loop=!0,i.loop=!0,a.loop=!0,o.loop=!0;var s=(e.createGain||e.createGainNode).call(e),c=(e.createGain||e.createGainNode).call(e),l=(e.createGain||e.createGainNode).call(e);l.gain.value=0;var u=(e.createGain||e.createGainNode).call(e);u.gain.value=0,r.connect(s),i.connect(c),a.connect(l),o.connect(u);var d=(e.createGain||e.createGainNode).call(e),h=(e.createGain||e.createGainNode).call(e),f=(e.createDelay||e.createDelayNode).call(e),p=(e.createDelay||e.createDelayNode).call(e);s.connect(d),c.connect(h),l.connect(d),u.connect(h),d.connect(f.delayTime),h.connect(p.delayTime);var m=e.createBufferSource(),v=e.createBufferSource(),g=function(e,t,n){for(var r=t*e.sampleRate,i=r+(t-2*n)*e.sampleRate,a=e.createBuffer(1,i,e.sampleRate),o=a.getChannelData(0),s=n*e.sampleRate,c=s,l=r-s,u=0;u<r;++u){var d;d=u<c?Math.sqrt(u/s):u>=l?Math.sqrt(1-(u-l)/s):1,o[u]=d}for(u=r;u<i;++u)o[u]=0;return a}(e,y,b);m.buffer=g,v.buffer=g,m.loop=!0,v.loop=!0;var R=(e.createGain||e.createGainNode).call(e),k=(e.createGain||e.createGainNode).call(e);R.gain.value=0,k.gain.value=0,m.connect(R.gain),v.connect(k.gain),t.connect(f),t.connect(p),f.connect(R),p.connect(k),R.connect(n),k.connect(n);var U=e.currentTime+.05,L=U+y-b;r.start(U),i.start(L),a.start(U),o.start(L),m.start(U),v.start(L),this.mod1=r,this.mod2=i,this.mod1Gain=s,this.mod2Gain=c,this.mod3Gain=l,this.mod4Gain=u,this.modGain1=d,this.modGain2=h,this.fade1=m,this.fade2=v,this.mix1=R,this.mix2=k,this.delay1=f,this.delay2=p,this.setDelay(.1)}R.prototype.setDelay=function(e){this.modGain1.gain.setTargetAtTime(.5*e,0,.01),this.modGain2.gain.setTargetAtTime(.5*e,0,.01)},R.prototype.setPitchOffset=function(e){e>0?(this.mod1Gain.gain.value=0,this.mod2Gain.gain.value=0,this.mod3Gain.gain.value=1,this.mod4Gain.gain.value=1):(this.mod1Gain.gain.value=1,this.mod2Gain.gain.value=1,this.mod3Gain.gain.value=0,this.mod4Gain.gain.value=0),this.setDelay(.1*Math.abs(e))};var k=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&o(e,t)}(a,e);var r=l(a);function a(){var e;return n(this,a),(e=r.call(this)).recording=!1,setTimeout((function(){e.addEventListener("vmsg-ready",e.vmsgReady.bind(s(e)))}),0),e}return i(a,[{key:"render",value:function(){return t.html(v||(v=u(['\n      <button @click="','">\n        <simple-icon icon="','"></simple-icon>',"\n      </button>\n      <slot></slot>\n    "])),this.recordState,this.iconState,this.textState)}},{key:"recordState",value:function(e){this.recording=!this.recording}},{key:"updated",value:function(e){var t=this;e.forEach((function(e,n){"recording"==n&&(t[n]?(t.textState="stop",t.iconState="av:stop"):(t.textState="Record",t.iconState="av:play-arrow"),t.toggleRecording(t[n],e))}))}},{key:"vmsgReady",value:function(e){console.warn(e.detail.value)}},{key:"toggleRecording",value:function(e,t){var n,r,i=this;e&&(n={wasmURL:this.pathFromUrl(decodeURIComponent("undefined"==typeof document?new(require("url").URL)("file:"+__filename).href:document.currentScript&&document.currentScript.src||new URL("voice-recorder.umd.js",document.baseURI).href))+"../../node_modules/vmsg/vmsg.wasm"},r=this,new Promise((function(e,t){if(m)throw new Error("Record form is already opened");m=!0,new p(n,r,e,t)})).then((function(e){return m=!1,e}),(function(e){throw m=!1,e}))).then((function(e){i.dispatchEvent(new CustomEvent("voice-recorder-recording",{value:e}))}))}},{key:"pathFromUrl",value:function(e){return e.substring(0,e.lastIndexOf("/")+1)}}],[{key:"styles",get:function(){return[t.css(g||(g=u(["\n        :host {\n          display: inline-flex;\n        }\n      "])))]}},{key:"properties",get:function(){return{iconState:{type:String},textState:{type:String},recording:{type:Boolean}}}},{key:"tag",get:function(){return"voice-recorder"}}]),a}(t.LitElement);customElements.define(k.tag,k),e.VoiceRecorder=k,Object.defineProperty(e,"__esModule",{value:!0})}));
