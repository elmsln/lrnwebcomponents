!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports,require("lit-element/lit-element.js"),require("@lrnwebcomponents/schema-behaviors/schema-behaviors.js"),require("@lrnwebcomponents/a11y-compare-image/a11y-compare-image.js"),require("@lrnwebcomponents/simple-colors/simple-colors.js")):"function"==typeof define&&define.amd?define(["exports","lit-element/lit-element.js","@lrnwebcomponents/schema-behaviors/schema-behaviors.js","@lrnwebcomponents/a11y-compare-image/a11y-compare-image.js","@lrnwebcomponents/simple-colors/simple-colors.js"],e):e((t=t||self).ImageCompareSlider={},t.litElement_js,t.schemaBehaviors_js,null,t.simpleColors_js)}(this,function(t,e,o,r,i){"use strict";function n(t,e){for(var o=0;o<e.length;o++){var r=e[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function a(t,e,o){return e&&n(t.prototype,e),o&&n(t,o),t}function c(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}function p(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),o.push.apply(o,r)}return o}function s(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?p(Object(o),!0).forEach(function(e){c(t,e,o[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):p(Object(o)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))})}return t}function l(t){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function u(t,e){return(u=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function d(t,e){return!e||"object"!=typeof e&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function m(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}();return function(){var o,r=l(t);if(e){var i=l(this).constructor;o=Reflect.construct(r,arguments,i)}else o=r.apply(this,arguments);return d(this,o)}}function h(t,e,o){return(h="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,o){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=l(t)););return t}(t,e);if(r){var i=Object.getOwnPropertyDescriptor(r,e);return i.get?i.get.call(o):i.value}})(t,e,o||t)}function f(t,e){return e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}function y(){var t=f([" <h2>","</h2> "]);return y=function(){return t},t}function b(){var t=f(['\n      <a11y-compare-image\n        accent-color="','"\n        ?dark="','"\n        ?opacity="','"\n        position="','"\n      >\n        <div slot="heading">\n          ','\n          <slot name="heading"></slot>\n        </div>\n        <div slot="description"><slot name="description"></slot></div>\n        <img\n          slot="bottom"\n          src="','"\n          alt="','"\n          aria-describedby="','"\n        />\n        <img\n          slot="top"\n          src="','"\n          alt="','"\n          aria-describedby="','"\n        />\n      </a11y-compare-image>\n    ']);return b=function(){return t},t}function g(){var t=f(["\n        :host {\n          display: inline-flex;\n        }\n        :host([hidden]) {\n          display: none !important;\n        }\n      "]);return g=function(){return t},t}var w=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&u(t,e)}(n,o.SchemaBehaviors(i.SimpleColors));var r=m(n);function n(){var t;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n),(t=r.call(this)).opacity=!1,t.position=50,t.accentColor="blue",t}return a(n,null,[{key:"styles",get:function(){return[e.css(g())]}}]),a(n,[{key:"render",value:function(){return e.html(b(),this.accentColor,this.dark,this.opacity,this.position,this.title?e.html(y(),this.title):"",this.bottomSrc,this.bottomAlt,this.bottomDescriptionId||"description",this.topSrc,this.topAlt,this.topDescriptionId||"description")}}],[{key:"tag",get:function(){return"image-compare-slider"}},{key:"properties",get:function(){return s(s({},h(l(n),"properties",this)),{},{bottomAlt:{type:String,attribute:"bottom-alt"},bottomDescriptionId:{type:String,attribute:"bottom-description-id"},bottomSrc:{type:String,attribute:"bottom-src"},opacity:{type:Boolean},position:{type:Number},title:{type:String},topAlt:{type:String,attribute:"top-alt"},topDescriptionId:{type:String,attribute:"top-description-id"},topSrc:{type:String,attribute:"top-src"}})}},{key:"haxProperties",get:function(){return{canScale:!0,canPosition:!0,canEditSource:!1,gizmo:{title:"Image comparison",description:"Simple element to allow one image to swipe over top of the other.",icon:"image:compare",color:"orange",groups:["Image","Media"],handles:[{type:"image",source:"bottomSrc",source2:"topSrc",title:"title"}],meta:{author:"ELMS:LN"}},settings:{configure:[{property:"opacity",title:"Slider Behavior",description:"Do you want the slider to wipe the top image across the bottom one (default), or to adjust the opacity of the top image?",inputMethod:"boolean",icon:"image:compare"},{property:"accentColor",title:"Slider Accent Color",inputMethod:"colorpicker"},{property:"dark",title:"Slider Accent Color, Dark",inputMethod:"boolean"},{slot:"heading",title:"Title",inputMethod:"textfield"},{slot:"description",title:"Description",description:"Recommended description for accessibility.",inputMethod:"code-editor"},{property:"topSrc",title:"Top image",description:"The base image to swipe over",inputMethod:"haxupload",validationType:"url",required:!0},{property:"topAlt",title:"Top image alt text",description:"Required alternate text for accessibility",inputMethod:"alt",required:!0},{property:"bottomSrc",title:"Bottom image",description:"The base image to swipe over",inputMethod:"haxupload",validationType:"url",required:!0},{property:"bottomAlt",title:"Bottom image alt text",description:"Required alternate text for accessibility",inputMethod:"alt",required:!0},{property:"position",title:"Slider's Initial Position",description:"Number from 0 to 100",inputMethod:"Number",min:0,max:100}],advanced:[{property:"title",title:"Title (Deprecated)",description:"Use heading instead",inputMethod:"textfield"},{property:"topDescriptionId",title:"Top aria-decsribedby",description:"Space-separated id list for long descriptions that appear elsewhere",inputMethod:"textfield"},{property:"bottomDescriptionId",title:"Bottom aria-decsribedby",description:"Space-separated id list for long descriptions that appear elsewhere",inputMethod:"textfield"}]},demoSchema:[{tag:"image-compare-slider",properties:{accentColor:"blue",dark:!1,opacity:!1,topSrc:"./demo/images/Matterhorn02.png",topAlt:"Matterhorn no snow.",topDescription:"cloudy",bottomSrc:"./demo/images/Matterhorn01.png",bottomAlt:"Matterhorn with snow.",bottomDescription:"snowy",style:"width:100%;max-width:400px"},content:'<h2 slot="heading">Image Compare Slider Default</h2><p slot="description">The image on the top or when slider is moved all the way to the right is the <span id="cloudy">Matterhorn on a cloudy day without snow</span>. As you move the slider to the left, the image below it reveals the <span id="snowy">Matterhorn on a clear day with snow</span>.</p>'},{tag:"image-compare-slider",properties:{accentColor:"indigo",dark:!0,opacity:!0,topSrc:"./demo/images/Matterhorn02.png",topAlt:"Matterhorn no snow.",topDescriptionId:"cloudy",bottomSrc:"./demo/images/Matterhorn01.png",bottomAlt:"Matterhorn with snow.",bottomDescriptionId:"snowy",style:"width:100%;max-width:400px"},content:'<h2 slot="heading">Image Compare Slider Opacity</h2>\n            <div slot="description">\n              The slider will fade away the top image\n              <span id="cloudy">(Matterhorn on a cloudy day without snow)</span> \n              to reveal the bottom image\n              <span id="snowy">(Matterhorn on a clear day with snow)</span>.\n            </div>'}]}}}]),n}();window.customElements.define(w.tag,w),t.ImageCompareSlider=w,Object.defineProperty(t,"__esModule",{value:!0})});
