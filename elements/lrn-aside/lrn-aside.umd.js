!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports,require("@lrnwebcomponents/lrndesign-panelcard/lrndesign-panelcard.js"),require("lit")):"function"==typeof define&&define.amd?define(["exports","@lrnwebcomponents/lrndesign-panelcard/lrndesign-panelcard.js","lit"],e):e((t="undefined"!=typeof globalThis?globalThis:t||self).LrnAside={},null,t.lit)}(this,(function(t,e,n){"use strict";function o(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function r(t){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function i(t,e){return(i=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function c(t,e){return!e||"object"!=typeof e&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function l(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o=r(t);if(e){var i=r(this).constructor;n=Reflect.construct(o,arguments,i)}else n=o.apply(this,arguments);return c(this,n)}}function s(t,e){return e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}var u,f,a=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&i(t,e)}(p,t);var e,r,c,a=l(p);function p(){var t;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,p),(t=a.call(this)).title="Related content",t.sticky=!1,t.direction="",setTimeout((function(){}),0),t}return e=p,c=[{key:"styles",get:function(){return[n.css(f||(f=s(['\n        :host {\n          display: flex;\n          padding: 8px;\n        }\n        :host([sticky]) {\n          top: 0;\n          position: sticky;\n        }\n        :host([direction="left"]) {\n          float: left;\n          max-width: 480px;\n        }\n        :host([direction="right"]) {\n          float: right;\n          max-width: 480px;\n        }\n      '])))]}},{key:"tag",get:function(){return"lrn-aside"}},{key:"properties",get:function(){return{title:{type:String},sticky:{type:Boolean,reflect:!0},direction:{type:String,reflect:!0}}}},{key:"haxProperties",get:function(){return{canScale:!0,canPosition:!0,canEditSource:!0,gizmo:{title:"Sticky note",description:"A sticky note to present some basic info offset on the page.",icon:"av:note",color:"yellow",groups:["Content"],handles:[{type:"text",title:"title"}],meta:{author:"ELMS:LN"}},settings:{configure:[{property:"title",title:"Title",description:"Enter title for sticky note.",inputMethod:"textfield",required:!0},{slot:"",title:"Content",description:"Content of the sticky note",inputMethod:"code-editor",required:!0},{property:"sticky",title:"Stick to page on scroll",description:"Appear sticky when the user scrolls past it",inputMethod:"boolean"},{property:"direction",title:"Direction to hang",description:"Location of the sticky note to hang",inputMethod:"select",options:{"":"none",right:"Right",left:"Left"}}],advanced:[]}}}}],(r=[{key:"render",value:function(){return n.html(u||(u=s(['\n      <aside>\n        <lrndesign-panelcard title="','">\n          <slot></slot>\n        </lrndesign-panelcard>\n      </aside>\n    '])),this.title)}}])&&o(e.prototype,r),c&&o(e,c),p}(n.LitElement);window.customElements.define(a.tag,a),t.LrnAside=a,Object.defineProperty(t,"__esModule",{value:!0})}));
