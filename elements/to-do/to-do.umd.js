!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("@polymer/polymer/polymer-element.js"),require("@lrnwebcomponents/schema-behaviors/schema-behaviors.js"),require("@lrnwebcomponents/simple-fields/lib/simple-fields-field.js")):"function"==typeof define&&define.amd?define(["exports","@polymer/polymer/polymer-element.js","@lrnwebcomponents/schema-behaviors/schema-behaviors.js","@lrnwebcomponents/simple-fields/lib/simple-fields-field.js"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).ToDo={},e.polymerElement_js,e.schemaBehaviors_js)}(this,(function(e,t,n){"use strict";function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function u(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function p(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=c(e);if(t){var r=c(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return u(this,n)}}function d(e,t,n){return(d="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var o=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=c(e)););return e}(e,t);if(o){var r=Object.getOwnPropertyDescriptor(o,t);return r.get?r.get.call(n):r.value}})(e,t,n||e)}var m,y=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(y,e);var n,l,s,u=p(y);function y(){return r(this,y),u.apply(this,arguments)}return n=y,s=[{key:"template",get:function(){return t.html(m||(e=['\n      <style>\n        :host {\n          display: block;\n        }\n        :host([hide-form]) ul {\n          border: 1px solid black;\n        }\n        div.card {\n          width: 100%;\n          padding: 8px;\n        }\n        .task-list-wrapper {\n          width: 100%;\n          height: 100%;\n          border: 2px solid black;\n          list-style: none;\n          padding: 0;\n        }\n        .task-list-wrapper li {\n          padding: 8px;\n        }\n        .task-list-wrapper li:nth-child(even) {\n          background-color: #f5f5f5;\n        }\n        .task-list-wrapper li:nth-child(odd) {\n          background-color: #e5e5e5;\n        }\n        .task-list-wrapper li:hover {\n          background-color: #ffffff;\n        }\n        .task-list-wrapper li:active {\n          background-color: #ffffff;\n        }\n        .task-list-wrapper li:focus {\n          background-color: #ffffff;\n        }\n        h3 {\n          margin: 4px;\n          padding: 0;\n          font-size: 20px;\n        }\n      </style>\n      <div class="card">\n        <h3>[[name]]</h3>\n        <div class="card-content">\n          <div hidden$="[[hideForm]]">\n            <simple-fields-field\n              label="Task to accomplish"\n              id="itemtext"\n            ></simple-fields-field>\n            <button raised="" id="itembutton" on-click="_addItemToList">\n              Add item\n            </button>\n          </div>\n          <ul class="task-list-wrapper">\n            <template is="dom-repeat" items="[[items]]" as="item">\n              <li data-item-id$="[[item.id]]">\n                <simple-fields-field\n                  type="checkbox"\n                  value="{{item.value}}"\n                  disabled="[[item.disabled]]"\n                  label="[[item.label]]"\n                ></simple-fields-field>\n              </li>\n            </template>\n          </ul>\n        </div>\n      </div>\n    '],n||(n=e.slice(0)),m=Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))));var e,n}},{key:"tag",get:function(){return"to-do"}},{key:"observers",get:function(){return["_valueChanged(items.*)"]}},{key:"properties",get:function(){return a(a({},d(c(y),"properties",this)),{},{hideForm:{type:Boolean,value:!1,reflectToAttribute:!0},disabledList:{type:Boolean,value:!1,reflectToAttribute:!0},name:{type:String,value:"To do list"},items:{type:Array,value:[],notify:!0}})}},{key:"haxProperties",get:function(){return{canScale:!0,canPosition:!0,canEditSource:!0,gizmo:{title:"To do list",description:"A list of things to do so people can keep calm.",icon:"icons:list",color:"grey",groups:["List"],handles:[],meta:{author:"ELMS:LN"}},settings:{configure:[{property:"name",title:"Name",description:"The name of this to do list",inputMethod:"textfield",icon:"editor:title"},{property:"items",title:"List of items",description:"List of items to display in our list.",inputMethod:"array",itemLabel:"label",properties:[{property:"label",title:"Task",description:"Name of the task",inputMethod:"textfield",required:!0},{property:"value",title:"Done",description:"Completion state",inputMethod:"boolean"}]}],advanced:[]}}}}],(l=[{key:"_valueChanged",value:function(e){for(var t in e.base)for(var n in e.base[t])this.notifyPath("items."+t+"."+n)}},{key:"_addItemToList",value:function(e){""!=this.shadowRoot.querySelector("#itemtext").value&&"undefined"!==o(this.shadowRoot.querySelector("#itemtext").value)&&(this.push("items",{label:this.shadowRoot.querySelector("#itemtext").value,value:!1,disabled:this.disabledList,id:"item-id-"+this.items.length}),this.shadowRoot.querySelector("#itemtext").value="")}}])&&i(n.prototype,l),s&&i(n,s),y}(n.SchemaBehaviors(t.PolymerElement));window.customElements.define(y.tag,y),e.ToDo=y,Object.defineProperty(e,"__esModule",{value:!0})}));
