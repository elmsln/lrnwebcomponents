!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports,require("lit-element/lit-element.js"),require("@lrnwebcomponents/intersection-element/lib/IntersectionObserverMixin.js")):"function"==typeof define&&define.amd?define(["exports","lit-element/lit-element.js","@lrnwebcomponents/intersection-element/lib/IntersectionObserverMixin.js"],e):e((t="undefined"!=typeof globalThis?globalThis:t||self).CountUpElement={},t.litElement_js,t.IntersectionObserverMixin_js)}(this,(function(t,e,n){"use strict";function i(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function l(t,e){return(l=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function u(t,e){return!e||"object"!=typeof e&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function p(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,i=s(t);if(e){var r=s(this).constructor;n=Reflect.construct(i,arguments,r)}else n=i.apply(this,arguments);return u(this,n)}}function c(t,e,n){return(c="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var i=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=s(t)););return t}(t,e);if(i){var r=Object.getOwnPropertyDescriptor(i,e);return r.get?r.get.call(n):r.value}})(t,e,n||t)}function h(t,e){return e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}var f,d,m=function(){return(m=Object.assign||function(t){for(var e,n=1,i=arguments.length;n<i;n++)for(var r in e=arguments[n])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t}).apply(this,arguments)},g=function(){function t(t,e,n){var i=this;this.target=t,this.endVal=e,this.options=n,this.version="2.0.4",this.defaults={startVal:0,decimalPlaces:0,duration:2,useEasing:!0,useGrouping:!0,smartEasingThreshold:999,smartEasingAmount:333,separator:",",decimal:".",prefix:"",suffix:""},this.finalEndVal=null,this.useEasing=!0,this.countDown=!1,this.error="",this.startVal=0,this.paused=!0,this.count=function(t){i.startTime||(i.startTime=t);var e=t-i.startTime;i.remaining=i.duration-e,i.useEasing?i.countDown?i.frameVal=i.startVal-i.easingFn(e,0,i.startVal-i.endVal,i.duration):i.frameVal=i.easingFn(e,i.startVal,i.endVal-i.startVal,i.duration):i.countDown?i.frameVal=i.startVal-(i.startVal-i.endVal)*(e/i.duration):i.frameVal=i.startVal+(i.endVal-i.startVal)*(e/i.duration),i.countDown?i.frameVal=i.frameVal<i.endVal?i.endVal:i.frameVal:i.frameVal=i.frameVal>i.endVal?i.endVal:i.frameVal,i.frameVal=Math.round(i.frameVal*i.decimalMult)/i.decimalMult,i.printValue(i.frameVal),e<i.duration?i.rAF=requestAnimationFrame(i.count):null!==i.finalEndVal?i.update(i.finalEndVal):i.callback&&i.callback()},this.formatNumber=function(t){var e,n,r,a,o,s=t<0?"-":"";if(e=Math.abs(t).toFixed(i.options.decimalPlaces),r=(n=(e+="").split("."))[0],a=n.length>1?i.options.decimal+n[1]:"",i.options.useGrouping){o="";for(var l=0,u=r.length;l<u;++l)0!==l&&l%3==0&&(o=i.options.separator+o),o=r[u-l-1]+o;r=o}return i.options.numerals&&i.options.numerals.length&&(r=r.replace(/[0-9]/g,(function(t){return i.options.numerals[+t]})),a=a.replace(/[0-9]/g,(function(t){return i.options.numerals[+t]}))),s+i.options.prefix+r+a+i.options.suffix},this.easeOutExpo=function(t,e,n,i){return n*(1-Math.pow(2,-10*t/i))*1024/1023+e},this.options=m({},this.defaults,n),this.formattingFn=this.options.formattingFn?this.options.formattingFn:this.formatNumber,this.easingFn=this.options.easingFn?this.options.easingFn:this.easeOutExpo,this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.endVal=this.validateValue(e),this.options.decimalPlaces=Math.max(this.options.decimalPlaces),this.decimalMult=Math.pow(10,this.options.decimalPlaces),this.resetDuration(),this.options.separator=String(this.options.separator),this.useEasing=this.options.useEasing,""===this.options.separator&&(this.options.useGrouping=!1),this.el="string"==typeof t?document.getElementById(t):t,this.el?this.printValue(this.startVal):this.error="[CountUp] target is null or undefined"}return t.prototype.determineDirectionAndSmartEasing=function(){var t=this.finalEndVal?this.finalEndVal:this.endVal;this.countDown=this.startVal>t;var e=t-this.startVal;if(Math.abs(e)>this.options.smartEasingThreshold){this.finalEndVal=t;var n=this.countDown?1:-1;this.endVal=t+n*this.options.smartEasingAmount,this.duration=this.duration/2}else this.endVal=t,this.finalEndVal=null;this.finalEndVal?this.useEasing=!1:this.useEasing=this.options.useEasing},t.prototype.start=function(t){this.error||(this.callback=t,this.duration>0?(this.determineDirectionAndSmartEasing(),this.paused=!1,this.rAF=requestAnimationFrame(this.count)):this.printValue(this.endVal))},t.prototype.pauseResume=function(){this.paused?(this.startTime=null,this.duration=this.remaining,this.startVal=this.frameVal,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count)):cancelAnimationFrame(this.rAF),this.paused=!this.paused},t.prototype.reset=function(){cancelAnimationFrame(this.rAF),this.paused=!0,this.resetDuration(),this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.printValue(this.startVal)},t.prototype.update=function(t){cancelAnimationFrame(this.rAF),this.startTime=null,this.endVal=this.validateValue(t),this.endVal!==this.frameVal&&(this.startVal=this.frameVal,this.finalEndVal||this.resetDuration(),this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count))},t.prototype.printValue=function(t){var e=this.formattingFn(t);"INPUT"===this.el.tagName?this.el.value=e:"text"===this.el.tagName||"tspan"===this.el.tagName?this.el.textContent=e:this.el.innerHTML=e},t.prototype.ensureNumber=function(t){return"number"==typeof t&&!isNaN(t)},t.prototype.validateValue=function(t){var e=Number(t);return this.ensureNumber(e)?e:(this.error="[CountUp] invalid start or end value: "+t,null)},t.prototype.resetDuration=function(){this.startTime=null,this.duration=1e3*Number(this.options.duration),this.remaining=this.duration},t}(),y=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&l(t,e)}(m,t);var n,r,a,u=p(m);function m(){var t;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,m),(t=u.call(this)).start=0,t.end=100,t.duration=2.5,t.noeasing=!1,t.decimalplaces=0,t.separator=",",t.decimal=".",t.prefixtext=" ",t.suffixtext=" ",t}return n=m,a=[{key:"styles",get:function(){return[e.css(d||(d=h(["\n:host {\n  display: inline-flex;\n  --count-up-color: #000000;\n}\n\n:host([hidden]) {\n  display: none;\n}\n\n.wrapper {\n  display: block;\n  text-align: center;\n  width: 100%;\n  height: 100%;\n}\n\n#counter {\n  color: var(--count-up-color);\n  font-weight: var(--count-up-number-font-weight);\n  font-size: var(--count-up-number-font-size);\n}\n      "])))]}},{key:"haxProperties",get:function(){return{canScale:!0,canPosition:!0,canEditSource:!0,gizmo:{title:"Count up",description:"count up js wrapper with minimal styling",icon:"icons:android",color:"green",groups:["Up"],handles:[{type:"todo:read-the-docs-for-usage"}],meta:{author:"btopro",owner:"The Pennsylvania State University"}},settings:{configure:[{property:"start",description:"",inputMethod:"textfield"},{property:"end",description:"",inputMethod:"textfield"},{property:"duration",description:"",inputMethod:"textfield"},{property:"noeasing",description:"",inputMethod:"boolean"},{property:"decimalplaces",description:"",inputMethod:"textfield"},{property:"separator",description:"",inputMethod:"textfield"},{property:"decimal",description:"",inputMethod:"textfield"},{property:"prefix",description:"",inputMethod:"textfield"},{property:"suffix",description:"",inputMethod:"textfield"}],advanced:[]},saveOptions:{unsetAttributes:["element-visible"]}}}},{key:"properties",get:function(){return o(o({},c(s(m),"properties",this)),{},{start:{type:Number},end:{type:Number},duration:{type:Number},noeasing:{type:Boolean},decimalplaces:{type:Number},separator:{type:String},decimal:{type:String},prefixtext:{type:String},suffixtext:{type:String},thresholds:{type:Array},rootMargin:{type:String,attribute:"root-margin"},ratio:{type:Number,reflect:!0},elementVisible:{type:Boolean}})}},{key:"tag",get:function(){return"count-up"}}],(r=[{key:"render",value:function(){return e.html(f||(f=h(['\n\n<div class="wrapper">\n  <slot name="prefix"></slot>\n  <div id="counter"></div>\n  <slot name="suffix"></slot>\n</div>'])))}},{key:"firstUpdated",value:function(){var t={startVal:this.start,decimalPlaces:this.decimalplaces,duration:this.duration,useEasing:!this.noeasing,separator:this.separator,decimal:this.decimal,prefix:this.prefixtext,suffix:this.suffixtext};this._countUp=new g(this.shadowRoot.querySelector("#counter"),this.end,t)}},{key:"updated",value:function(t){var e=this;t.forEach((function(t,n){"elementVisible"==n&&e[n]&&e._countUp.start()}))}}])&&i(n.prototype,r),a&&i(n,a),m}(n.IntersectionObserverMixin(e.LitElement));customElements.define(y.tag,y),t.CountUp=g,t.CountUpElement=y,Object.defineProperty(t,"__esModule",{value:!0})}));
