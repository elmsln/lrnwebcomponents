!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("@polymer/polymer/polymer-legacy.js"),require("@polymer/paper-dropdown-menu/paper-dropdown-menu.js"),require("@polymer/paper-item/paper-item.js"),require("@polymer/paper-listbox/paper-listbox.js")):"function"==typeof define&&define.amd?define(["exports","@polymer/polymer/polymer-legacy.js","@polymer/paper-dropdown-menu/paper-dropdown-menu.js","@polymer/paper-item/paper-item.js","@polymer/paper-listbox/paper-listbox.js"],t):t(e.SelectMenu={},e.polymerLegacy_js)}(this,function(e,t){"use strict";function n(){var e,t,l=(e=['\n    <custom-style>\n      <style is="custom-style">\n        paper-dropdown-menu,\n        paper-listbox {\n          width: 250px;\n        }\n        paper-dropdown-menu {\n          height: 200px;\n          margin: auto;\n          display: block;\n        }\n      </style>\n    </custom-style>\n    <paper-dropdown-menu\n      id="menu"\n      label$="[[label]]"\n      on-tap="_menubuttonTap"\n      on-selected-item-changed="_setSelectedValue"\n    >\n      <paper-listbox\n        id="listbox"\n        slot="dropdown-content"\n        selected="{{selectedIndex}}"\n      >\n        <slot></slot>\n      </paper-listbox>\n    </paper-dropdown-menu>\n  '],(t=['\n    <custom-style>\n      <style is="custom-style">\n        paper-dropdown-menu,\n        paper-listbox {\n          width: 250px;\n        }\n        paper-dropdown-menu {\n          height: 200px;\n          margin: auto;\n          display: block;\n        }\n      </style>\n    </custom-style>\n    <paper-dropdown-menu\n      id="menu"\n      label\\$="[[label]]"\n      on-tap="_menubuttonTap"\n      on-selected-item-changed="_setSelectedValue"\n    >\n      <paper-listbox\n        id="listbox"\n        slot="dropdown-content"\n        selected="{{selectedIndex}}"\n      >\n        <slot></slot>\n      </paper-listbox>\n    </paper-dropdown-menu>\n  '])||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}})));return n=function(){return l},l}var l=t.Polymer({_template:t.html(n()),is:"select-menu",properties:{label:{type:String,value:"Select an option."},value:{type:String,value:null},selectedIndex:{type:Number,reflectToAttribute:!0,notify:!0,computed:"_getSelectedIndex()"}},_setSelectedValue:function(e){if(null!==e.detail.value){var t=e.detail.value.getAttribute("value");this.setAttribute("value",t),this.fire("change",{value:t})}},_getSelectedIndex:function(){this.__items=this.getElementsByTagName("paper-item");for(var e=0;e<this.__items.length;e++)if(console.log(this.value,this.__items[e],this.__items[e].getAttribute("value")),this.value==this.__items[e].getAttribute("value"))return e;return null}});e.SelectMenu=l,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=select-menu.umd.js.map
