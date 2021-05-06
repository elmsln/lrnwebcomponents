!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("@lrnwebcomponents/haxcms-elements/lib/ui-components/site/site-search.js"),require("@lrnwebcomponents/haxcms-elements/lib/ui-components/navigation/site-menu-button.js"),require("@lrnwebcomponents/haxcms-elements/lib/ui-components/layout/site-modal.js"),require("@lrnwebcomponents/haxcms-elements/lib/ui-components/navigation/site-breadcrumb.js"),require("@lrnwebcomponents/haxcms-elements/lib/ui-components/navigation/site-top-menu.js"),require("@polymer/polymer/polymer-element.js"),require("@lrnwebcomponents/haxcms-elements/lib/core/HAXCMSPolymerElementTheme.js"),require("@lrnwebcomponents/haxcms-elements/lib/core/haxcms-site-store.js"),require("mobx")):"function"==typeof define&&define.amd?define(["exports","@lrnwebcomponents/haxcms-elements/lib/ui-components/site/site-search.js","@lrnwebcomponents/haxcms-elements/lib/ui-components/navigation/site-menu-button.js","@lrnwebcomponents/haxcms-elements/lib/ui-components/layout/site-modal.js","@lrnwebcomponents/haxcms-elements/lib/ui-components/navigation/site-breadcrumb.js","@lrnwebcomponents/haxcms-elements/lib/ui-components/navigation/site-top-menu.js","@polymer/polymer/polymer-element.js","@lrnwebcomponents/haxcms-elements/lib/core/HAXCMSPolymerElementTheme.js","@lrnwebcomponents/haxcms-elements/lib/core/haxcms-site-store.js","mobx"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).ExampleHaxcmsTheme={},null,null,null,null,null,e.polymerElement_js,e.HAXCMSPolymerElementTheme_js,e.haxcmsSiteStore_js,e.mobx)}(this,(function(e,t,n,o,r,i,s,c,l,a){"use strict";function u(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function m(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){m(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function d(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function y(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=b(e);if(t){var r=b(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return d(this,n)}}function j(e,t,n){return(j="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var o=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=b(e)););return e}(e,t);if(o){var r=Object.getOwnPropertyDescriptor(o,t);return r.get?r.get.call(n):r.value}})(e,t,n||e)}var v,x=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}(i,e);var t,n,o,r=y(i);function i(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),(e=r.call(this)).__disposer=[],e}return t=i,o=[{key:"properties",get:function(){return f(f({},j(b(i),"properties",this)),{},{editMode:{name:"editMode",type:Boolean,reflectToAttribute:!0},activeManifestIndex:{name:"activeManifestIndex",type:Number}})}},{key:"tag",get:function(){return"example-haxcms-theme"}}],(n=[{key:"render",value:function(){return s.html(v||(e=['\n<style>\n:host {\n  display: block;\n\n  \n  --example-haxcms-theme-color: #222222;\n}\n\n\n:host([hidden]) {\n  display: none;\n}\n\n\n:host([edit-mode]) #slot {\n  display: none;\n}\n\n\n:host #slot ::slotted(*) {\n  color: var(--example-haxcms-theme-color);\n}\n        </style>\n<site-top-menu noink indicator="arrow" arrow-size="8">\n  <site-title slot="prefix" class="spacing"></site-title>\n  <site-modal slot="suffix" icon="icons:search" title="Search site" button-label="Search">\n    <site-search></site-search>\n  </site-modal>\n</site-top-menu>\n<site-breadcrumb></site-breadcrumb>\n<div id="contentcontainer">\n  <div id="slot">\n    <slot></slot>\n  </div>\n</div>\n<site-menu-button type="prev" position="top"></site-menu-button>\n<site-menu-button type="next" position="top"></site-menu-button>'],t||(t=e.slice(0)),v=Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))));var e,t}},{key:"connectedCallback",value:function(){var e=this;j(b(i.prototype),"connectedCallback",this).call(this),a.autorun((function(t){e.activeManifestIndex=a.toJS(l.store.activeManifestIndex),e.__disposer.push(t)})),a.autorun((function(t){e.editMode=a.toJS(l.store.editMode),e.__disposer.push(t)}))}},{key:"disconnectedCallback",value:function(){for(var e in this.__disposer)this.__disposer[e].dispose();j(b(i.prototype),"disconnectedCallback",this).call(this)}}])&&u(t.prototype,n),o&&u(t,o),i}(c.HAXCMSPolymerElementTheme);window.customElements.define(x.tag,x),e.ExampleHaxcmsTheme=x,Object.defineProperty(e,"__esModule",{value:!0})}));
