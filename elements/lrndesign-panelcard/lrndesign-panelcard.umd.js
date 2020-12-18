!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("@polymer/polymer/polymer-element.js"),require("@lrnwebcomponents/simple-colors/lib/simple-colors-polymer.js")):"function"==typeof define&&define.amd?define(["exports","@polymer/polymer/polymer-element.js","@lrnwebcomponents/simple-colors/lib/simple-colors-polymer.js"],t):t((e=e||self).LrndesignPanelcard={},e.polymerElement_js,e.simpleColorsPolymer_js)}(this,function(e,t,n){"use strict";function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach(function(t){o(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function a(e,t){return(a=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function s(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function p(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var n,r=c(e);if(t){var o=c(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return s(this,n)}}function u(e,t,n){return(u="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=c(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function f(){var e,t,n=(e=['\n      <style include="simple-colors-shared-styles-polymer">\n        :host {\n          display: inline-block;\n          position: relative;\n          box-sizing: border-box;\n          --lrndesign-panelcard-text-color: var(\n            --simple-colors-default-theme-grey-12\n          );\n          --lrndesign-panelcard-color: var(\n            --simple-colors-default-theme-accent-1\n          );\n        }\n        :host([dark]:not([accent-color="grey"])) {\n          --lrndesign-panelcard-color: var(\n            --simple-colors-default-theme-accent-3\n          );\n        }\n        :host([colored-text]) {\n          --lrndesign-panelcard-text-color: var(\n            --simple-colors-default-theme-accent-9\n          );\n          --lrndesign-panelcard-color: var(\n            --simple-colors-default-theme-grey-1\n          );\n        }\n        .card-panel {\n          transition: box-shadow 0.25s;\n          padding: 24px;\n          margin: 0;\n          border-radius: 2px;\n          color: var(--lrndesign-panelcard-text-color);\n          background-color: var(--lrndesign-panelcard-color);\n          box-shadow: 0 5px 5px rgba(0, 0, 0, 0.7);\n        }\n\n        h3 {\n          padding: 0;\n          margin: 0 0 8px 0;\n        }\n      </style>\n      <aside>\n        <div class="card-panel">\n          <h3>[[title]]</h3>\n          <span><slot></slot></span>\n        </div>\n      </aside>\n    '],t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}})));return f=function(){return n},n}var d=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&a(e,t)}(y,n.SimpleColorsPolymer);var o,i,s,d=p(y);function y(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,y),d.call(this)}return o=y,s=[{key:"template",get:function(){return t.html(f())}},{key:"tag",get:function(){return"lrndesign-panelcard"}},{key:"properties",get:function(){return l(l({},u(c(y),"properties",this)),{},{title:{type:String,value:"Block heading",reflectToAttribute:!0},elevation:{type:Number,value:2,reflectToAttribute:!0},coloredText:{type:Boolean,value:!1,reflectToAttribute:!0}})}},{key:"haxProperties",get:function(){return{canScale:!0,canPosition:!0,canEditSource:!0,gizmo:{title:"Note card",description:"A small note to offset text used for asides.",icon:"icons:check-box-outline-blank",color:"grey",groups:["Content","Visual Treatment"],handles:[{type:"text",text:"title"}],meta:{author:"ELMS:LN"}},settings:{configure:[{property:"title",title:"Title",description:"The heading for this sticky note",inputMethod:"textfield",icon:"editor:title"},{slot:"",title:"Text",description:"The text for our sticky note",inputMethod:"textarea",icon:"editor:title",required:!1,validationType:"text"},{property:"accentColor",title:"Accent color",description:"Select the accent color use",inputMethod:"colorpicker",icon:"editor:format-color-fill"},{property:"dark",title:"Dark",description:"Use dark theme",inputMethod:"boolean",icon:"invert-colors"},{property:"coloredText",title:"Colored Text",description:"Apply color to text instead of background.",inputMethod:"boolean",icon:"editor:format-color-text"},{property:"elevation",title:"Elevation",description:"Visually how high this is off the page",inputMethod:"select",options:{0:"0",1:"1",2:"2",3:"3",4:"4",5:"5"}}],advanced:[]}}}}],(i=null)&&r(o.prototype,i),s&&r(o,s),y}();window.customElements.define(d.tag,d),e.LrndesignPanelcard=d,Object.defineProperty(e,"__esModule",{value:!0})});
