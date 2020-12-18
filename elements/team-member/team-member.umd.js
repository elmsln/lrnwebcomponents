!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports,require("@polymer/polymer/polymer-element.js"),require("@lrnwebcomponents/schema-behaviors/schema-behaviors.js"),require("@lrnwebcomponents/simple-icon/simple-icon.js"),require("@lrnwebcomponents/hax-iconset/lib/simple-hax-iconset.js")):"function"==typeof define&&define.amd?define(["exports","@polymer/polymer/polymer-element.js","@lrnwebcomponents/schema-behaviors/schema-behaviors.js","@lrnwebcomponents/simple-icon/simple-icon.js","@lrnwebcomponents/hax-iconset/lib/simple-hax-iconset.js"],n):n((e=e||self).TeamMember={},e.polymerElement_js,e.schemaBehaviors_js)}(this,function(e,n,t){"use strict";function i(e,n){for(var t=0;t<n.length;t++){var i=n[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),t.push.apply(t,i)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach(function(n){r(e,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})}return e}function a(e){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function l(e,n){return(l=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}function s(e,n){return!n||"object"!=typeof n&&"function"!=typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}function p(e){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var t,i=a(e);if(n){var r=a(this).constructor;t=Reflect.construct(i,arguments,r)}else t=i.apply(this,arguments);return s(this,t)}}function u(e,n,t){return(u="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,n,t){var i=function(e,n){for(;!Object.prototype.hasOwnProperty.call(e,n)&&null!==(e=a(e)););return e}(e,n);if(i){var r=Object.getOwnPropertyDescriptor(i,n);return r.get?r.get.call(t):r.value}})(e,n,t||e)}function m(){var e,n,t=(e=['\n      <style>\n        :host {\n          display: block;\n          --team-member-circle: #1e407d;\n          --team-member-border: white;\n        }\n        .team-member {\n          text-align: center;\n          padding: 8px;\n        }\n        img.image {\n          background-color: var(--team-member-color);\n          height: 165px;\n          width: 165px;\n          margin: 0 auto;\n          border: 7px solid var(--team-member-border);\n          border-radius: 50%;\n        }\n        .name {\n          text-transform: none;\n          font-size: 16px;\n        }\n        .line1 {\n          font-size: 12px;\n          margin: 0;\n          padding: 4px 0;\n          line-height: 22px;\n        }\n        .line2 {\n          font-size: 12px;\n          margin: 0;\n          padding: 4px 0;\n          line-height: 18px;\n        }\n        .social {\n          display: inline-block;\n          padding-left: 5px;\n          padding-right: 5px;\n        }\n        simple-icon {\n          color: var(--team-member-color);\n        }\n      </style>\n      <div class="team-member">\n        <img class="image" src="[[image]]" loading="lazy" alt="" />\n        <div class="name">[[fullName]]</div>\n        <div hidden$="[[!firstLine]]" class="line1">[[firstLine]]</div>\n        <div hidden$="[[!secondLine]]" class="line2">[[secondLine]]</div>\n        <div class="social">\n          <a tabindex="-1" href$="[[dribble]]" hidden$="[[!dribble]]"\n            ><simple-icon icon="mdi-social:dribble"></simple-icon\n          ></a>\n          <a tabindex="-1" href$="[[facebook]]" hidden$="[[!facebook]]"\n            ><simple-icon icon="mdi-social:facebook-box"></simple-icon\n          ></a>\n          <a tabindex="-1" href$="[[github]]" hidden$="[[!github]]"\n            ><simple-icon icon="mdi-social:github-circle"></simple-icon\n          ></a>\n          <a tabindex="-1" href$="[[google]]" hidden$="[[!google]]"\n            ><simple-icon icon="mdi-social:google-plus"></simple-icon\n          ></a>\n          <a tabindex="-1" href$="[[instagram]]" hidden$="[[!instagram]]"\n            ><simple-icon icon="mdi-social:instagram"></simple-icon\n          ></a>\n          <a tabindex="-1" href$="[[linkedin]]" hidden$="[[!linkedin]]"\n            ><simple-icon icon="mdi-social:linkedin"></simple-icon\n          ></a>\n          <a tabindex="-1" href$="[[pinterest]]" hidden$="[[!pinterest]]"\n            ><simple-icon icon="mdi-social:pinterest"></simple-icon\n          ></a>\n          <a tabindex="-1" href$="[[tumblr]]" hidden$="[[!tumblr]]"\n            ><simple-icon icon="mdi-social:tumblr"></simple-icon\n          ></a>\n          <a tabindex="-1" href$="[[twitch]]" hidden$="[[!twitch]]"\n            ><simple-icon icon="mdi-social:twitch"></simple-icon\n          ></a>\n          <a tabindex="-1" href$="[[twitter]]" hidden$="[[!twitter]]"\n            ><simple-icon icon="mdi-social:twitter"></simple-icon\n          ></a>\n          <a tabindex="-1" href$="[[whatsapp]]" hidden$="[[!whatsapp]]"\n            ><simple-icon icon="mdi-social:whatsapp"></simple-icon\n          ></a>\n        </div>\n      </div>\n    '],n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}})));return m=function(){return t},t}var f=function(e){!function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&l(e,n)}(d,t.SchemaBehaviors(n.PolymerElement));var r,o,s,f=p(d);function d(){return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,d),f.apply(this,arguments)}return r=d,s=[{key:"template",get:function(){return n.html(m())}},{key:"tag",get:function(){return"team-member"}},{key:"haxProperties",get:function(){return{canScale:!0,canPosition:!0,canEditSource:!0,gizmo:{title:"Team Member",description:"The user will be able to see this for selection in a UI.",icon:"av:play-circle-filled",color:"grey",groups:["Content","Presentation"],handles:[],meta:{author:"ELMS:LN"}},settings:{configure:[{property:"title",title:"Title",description:"The title of the element",inputMethod:"textfield",icon:"editor:title"}],advanced:[]}}}},{key:"properties",get:function(){return c(c({},u(a(d),"properties",this)),{},{image:{type:String},fullName:{type:String},firstLine:{type:String,value:!1},secondLine:{type:String,value:!1},dribble:{type:String,value:!1},facebook:{type:String,value:!1},github:{type:String,value:!1},google:{type:String,value:!1},instagram:{type:String,value:!1},linkedin:{type:String,value:!1},pinterest:{type:String,value:!1},tumblr:{type:String,value:!1},twitch:{type:String,value:!1},twitter:{type:String,value:!1},whatsapp:{type:String,value:!1}})}}],(o=null)&&i(r.prototype,o),s&&i(r,s),d}();window.customElements.define(f.tag,f),e.TeamMember=f,Object.defineProperty(e,"__esModule",{value:!0})});
