!function(n,e){"object"==typeof exports&&"undefined"!=typeof module?e(require("@polymer/iron-collapse/iron-collapse.js"),require("@polymer/iron-icon/iron-icon.js"),require("@polymer/app-layout/app-toolbar/app-toolbar.js"),require("@lrnwebcomponents/lrn-icons/lrn-icons.js"),require("@lrnwebcomponents/simple-modal/simple-modal.js"),require("@polymer/neon-animation/neon-animation.js"),require("@polymer/neon-animation/neon-animations.js"),require("@polymer/polymer/polymer-legacy.js"),require("@polymer/polymer/lib/legacy/polymer.dom.js"),require("@lrnwebcomponents/simple-colors/simple-colors.js"),require("@lrnwebcomponents/simple-drawer/simple-drawer.js"),require("@lrnwebcomponents/paper-avatar/paper-avatar.js"),require("@polymer/app-layout/app-layout.js"),require("@polymer/paper-tooltip/paper-tooltip.js"),require("@polymer/paper-button/paper-button.js"),require("@polymer/iron-icons/iron-icons.js")):"function"==typeof define&&define.amd?define(["@polymer/iron-collapse/iron-collapse.js","@polymer/iron-icon/iron-icon.js","@polymer/app-layout/app-toolbar/app-toolbar.js","@lrnwebcomponents/lrn-icons/lrn-icons.js","@lrnwebcomponents/simple-modal/simple-modal.js","@polymer/neon-animation/neon-animation.js","@polymer/neon-animation/neon-animations.js","@polymer/polymer/polymer-legacy.js","@polymer/polymer/lib/legacy/polymer.dom.js","@lrnwebcomponents/simple-colors/simple-colors.js","@lrnwebcomponents/simple-drawer/simple-drawer.js","@lrnwebcomponents/paper-avatar/paper-avatar.js","@polymer/app-layout/app-layout.js","@polymer/paper-tooltip/paper-tooltip.js","@polymer/paper-button/paper-button.js","@polymer/iron-icons/iron-icons.js"],e):e(null,null,null,null,null,null,null,n.polymerLegacy_js,n.polymer_dom_js)}(this,function(n,e,t,o,l,a,r,i,s){"use strict";function p(n){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}function c(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}function d(){var n=c(['\n    <style>\n      :host {\n        display: block;\n      }\n      :host > div > * {\n        vertical-align: middle;\n      }\n      .text-label {\n        margin-left: 8px;\n      }\n      .text-label-only {\n        margin-left: 0;\n      }\n    </style>\n    <div>\n      <template is="dom-if" if="[[avatar]]">\n        <paper-avatar src$="[[avatar]]"></paper-avatar>\n      </template>\n      <template is="dom-if" if="[[icon]]">\n        <lrn-icon icon="[[icon]]"></lrn-icon>\n      </template>\n      <template is="dom-if" if="[[text]]">\n        <span class$="[[_getTextLabelClass()]]">[[text]]</span>\n      </template>\n    </div>\n    <div><slot name="button"></slot><slot></slot></div>\n  '],['\n    <style>\n      :host {\n        display: block;\n      }\n      :host > div > * {\n        vertical-align: middle;\n      }\n      .text-label {\n        margin-left: 8px;\n      }\n      .text-label-only {\n        margin-left: 0;\n      }\n    </style>\n    <div>\n      <template is="dom-if" if="[[avatar]]">\n        <paper-avatar src\\$="[[avatar]]"></paper-avatar>\n      </template>\n      <template is="dom-if" if="[[icon]]">\n        <lrn-icon icon="[[icon]]"></lrn-icon>\n      </template>\n      <template is="dom-if" if="[[text]]">\n        <span class\\$="[[_getTextLabelClass()]]">[[text]]</span>\n      </template>\n    </div>\n    <div><slot name="button"></slot><slot></slot></div>\n  ']);return d=function(){return n},n}function u(){var n=c(['\n    <style>\n      :host {\n        display: block;\n        color: var(--lrnsys-collapselist-text-color, #000);\n      }\n      paper-button {\n        height: 48px;\n        padding: 0;\n        margin: 0;\n        min-width: 0.16px;\n        -webkit-justify-content: flex-start;\n        justify-content: flex-start;\n        align-items: center;\n        width: 100%;\n        text-transform: unset;\n        border-radius: 0;\n        background-color: var(--lrnsys-collapselist-item-color, #fff);\n      }\n      paper-button span {\n        pointer-events: none;\n      }\n      .collapse-label {\n        padding: 12px 8px 4px 8px;\n        width: 100%;\n        height: 32px;\n      }\n      :host([opened]) #collapse {\n        border-top: 1px solid var(--lrnsys-collapselist-item-border, #bbb);\n        background-color: var(--lrnsys-collapselist-item-active-color, #eee);\n      }\n      :host([opened]) .collapse-label {\n        font-weight: bold;\n        background-color: var(--lrnsys-collapselist-item-active-color, #eee);\n      }\n      .collapse-content {\n        padding: 16px;\n      }\n    </style>\n    <paper-button\n      on-tap="collapseToggle"\n      id="collapse-trigger"\n      aria-controls="collapse"\n    >\n      <span class="collapse-label"> <slot name="label"></slot> </span>\n    </paper-button>\n    <iron-collapse id="collapse" opened="{{opened}}">\n      <div class="collapse-content"><slot name="content"></slot></div>\n    </iron-collapse>\n  ']);return u=function(){return n},n}function y(){var n=c(['\n    <style is="custom-style" include="simple-colors">\n      :host {\n        display: block;\n        background-color: var(--simple-colors-background1);\n        --lrnsys-collapselist-text-color: var(--simple-colors-foreground1);\n        --lrnsys-collapselist-item-color: var(--simple-colors-background1);\n        --lrnsys-collapselist-item-active-color: var(\n          --simple-colors-background2\n        );\n        --lrnsys-collapselist-item-border: var(--simple-colors-background5);\n      }\n      ul {\n        list-style-type: none;\n        margin: 0;\n        padding: 0;\n      }\n      ul li {\n        width: 100%;\n        border: 1px solid var(--lrnsys-collapselist-item-border);\n        margin-bottom: -1px;\n      }\n      ul li paper-button {\n        height: 32px;\n        padding: 8px;\n        margin: 0;\n        min-width: 0.16px;\n        -webkit-justify-content: flex-start;\n        justify-content: flex-start;\n        align-items: center;\n        width: 100%;\n        text-transform: unset;\n        border-radius: 0;\n      }\n      ul li paper-button iron-icon,\n      ul li paper-button span {\n        pointer-events: none;\n      }\n      iron-icon {\n        display: inline-block;\n      }\n      .collapse-label {\n        margin-left: 8px;\n      }\n      .collapse-content {\n        padding: 16px;\n      }\n    </style>\n    <ul>\n      <template is="dom-repeat" items="{{items}}" as="row">\n        <li>\n          <lrnsys-collapselist-item>\n            <span slot="label">\n              <iron-icon icon="[[row.icon]]"></iron-icon>\n              <span class="collapse-label">[[row.label]]</span>\n            </span>\n            <span slot="content"> [[row.content]] </span>\n          </lrnsys-collapselist-item>\n        </li>\n      </template>\n    </ul>\n  ']);return y=function(){return n},n}function m(){var n=c(['\n    <style>\n      :host {\n        display: inline-block;\n      }\n      iron-icon {\n        display: inline-block;\n        height: 16px;\n        width: 16px;\n      }\n    </style>\n    <paper-button raisedon-tap="_onTap" id$="[[id]]" aria-label$="[[title]]">\n      <iron-icon icon="[[icon]]"></iron-icon> [[title]]\n    </paper-button>\n    <paper-tooltip for$="[[id]]" animation-delay="200">[[title]]</paper-tooltip>\n  ']);return m=function(){return n},n}function b(){var n=c(['\n    <style is="custom-style">\n      :host {\n        display: block;\n        --app-toolbar-primary-height: 40px;\n        --app-toolbar-secondary-height: 50px;\n        --app-toolbar-secondary-color: var(\n          --lrnsys-dialog-secondary-background-color\n        );\n        --app-toolbar-primary-color: var(\n          --lrnsys-dialog-toolbar-background-color\n        );\n        position: relative;\n        margin: 0;\n        padding: 0;\n      }\n      app-toolbar#primary {\n        color: var(--lrnsys-dialog-color, #000);\n        background-color: var(--app-toolbar-primary-color);\n        z-index: 10;\n        position: relative;\n        height: var(--app-toolbar-primary-height);\n      }\n      app-toolbar#secondary {\n        color: var(--lrnsys-dialog-color, #000);\n        background-color: var(--app-toolbar-secondary-color);\n        z-index: 5;\n        position: absolute;\n        width: 100%;\n        transform: translateY(-100%);\n        transition: all 0.3s ease-in;\n        height: var(--app-toolbar-primary-height);\n        display: flex;\n        justify-content: center;\n        padding: 0;\n      }\n      :host([secondary-visible]) #secondary {\n        transform: translateY(0);\n        height: var(--app-toolbar-secondary-height);\n      }\n      .secondary-buttons {\n        display: flex;\n      }\n      .secondary-buttons ::slotted(*) {\n        display: inline-flex;\n      }\n    </style>\n    <app-toolbar id="primary">\n      <slot name="primary"></slot>\n      <div main-title=""></div>\n      <lrnsys-dialog-toolbar-button\n        icon="close"\n        id="close"\n        title="close dialog"\n      ></lrnsys-dialog-toolbar-button>\n    </app-toolbar>\n    <app-toolbar id="secondary" hidden$="[[!_secondaryHasChildren]]">\n      <div class="secondary-buttons">\n        <slot name="secondary" id="secondary-slot"></slot>\n      </div>\n    </app-toolbar>\n  '],['\n    <style is="custom-style">\n      :host {\n        display: block;\n        --app-toolbar-primary-height: 40px;\n        --app-toolbar-secondary-height: 50px;\n        --app-toolbar-secondary-color: var(\n          --lrnsys-dialog-secondary-background-color\n        );\n        --app-toolbar-primary-color: var(\n          --lrnsys-dialog-toolbar-background-color\n        );\n        position: relative;\n        margin: 0;\n        padding: 0;\n      }\n      app-toolbar#primary {\n        color: var(--lrnsys-dialog-color, #000);\n        background-color: var(--app-toolbar-primary-color);\n        z-index: 10;\n        position: relative;\n        height: var(--app-toolbar-primary-height);\n      }\n      app-toolbar#secondary {\n        color: var(--lrnsys-dialog-color, #000);\n        background-color: var(--app-toolbar-secondary-color);\n        z-index: 5;\n        position: absolute;\n        width: 100%;\n        transform: translateY(-100%);\n        transition: all 0.3s ease-in;\n        height: var(--app-toolbar-primary-height);\n        display: flex;\n        justify-content: center;\n        padding: 0;\n      }\n      :host([secondary-visible]) #secondary {\n        transform: translateY(0);\n        height: var(--app-toolbar-secondary-height);\n      }\n      .secondary-buttons {\n        display: flex;\n      }\n      .secondary-buttons ::slotted(*) {\n        display: inline-flex;\n      }\n    </style>\n    <app-toolbar id="primary">\n      <slot name="primary"></slot>\n      <div main-title=""></div>\n      <lrnsys-dialog-toolbar-button\n        icon="close"\n        id="close"\n        title="close dialog"\n      ></lrnsys-dialog-toolbar-button>\n    </app-toolbar>\n    <app-toolbar id="secondary" hidden\\$="[[!_secondaryHasChildren]]">\n      <div class="secondary-buttons">\n        <slot name="secondary" id="secondary-slot"></slot>\n      </div>\n    </app-toolbar>\n  ']);return b=function(){return n},n}function g(){var n=c(['\n    <custom-style>\n      <style is="custom-style" include="simple-colors">\n        :host {\n          display: inline-block;\n          --lrnsys-dialog-color: var(--simple-colors-foreground1, #000);\n          --lrnsys-dialog-background-color: var(--simple-colors-background1);\n          --lrnsys-dialog-toolbar-background-color: var(\n            --simple-colors-background3\n          );\n          --lrnsys-dialog-secondary-background-color: rgba(255, 255, 255, 0.7);\n        }\n        :host([dark]) {\n          --lrnsys-dialog-toolbar-background-color: var(\n            --simple-colors-background1\n          );\n          --lrnsys-dialog-background-color: var(--simple-colors-background3);\n          --lrnsys-dialog-secondary-background-color: rgba(0, 0, 0, 0.7);\n        }\n        #dialogtrigger {\n          display: inline-block;\n        }\n      </style>\n    </custom-style>\n    <paper-button\n      class$="[[class]]"\n      id="dialogtrigger"\n      on-tap="openDialog"\n      raised="[[raised]]"\n      disabled$="[[disabled]]"\n      title="[[alt]]"\n      aria-label$="[[alt]]"\n    >\n      <lrnsys-button-inner\n        avatar$="[[avatar]]"\n        icon$="[[icon]]"\n        text$="[[text]]"\n      >\n        <slot name="button" slot="button"></slot>\n      </lrnsys-button-inner>\n    </paper-button>\n    <paper-tooltip for="dialogtrigger" animation-delay="0" hidden$="[[!alt]]"\n      >[[alt]]</paper-tooltip\n    >\n  ']);return g=function(){return n},n}function f(){var n=c(['\n    <style is="custom-style" include="simple-colors">\n      :host {\n        display: block;\n        --lrnsys-drawer-color: var(--simple-colors-foreground1);\n        --lrnsys-drawer-background-color: var(--simple-colors-background1);\n      }\n      paper-button {\n        display: inline-block;\n      }\n    </style>\n    <paper-button\n      class$="[[class]]"\n      id="flyouttrigger"\n      on-tap="toggleDrawer"\n      raised="[[raised]]"\n      disabled$="[[disabled]]"\n      title="[[alt]]"\n    >\n      <lrnsys-button-inner avatar="[[avatar]]" icon="[[icon]]" text="[[text]]">\n        <slot name="button"></slot>\n      </lrnsys-button-inner>\n    </paper-button>\n    <paper-tooltip for="flyouttrigger" animation-delay="0"\n      >[[alt]]</paper-tooltip\n    >\n  '],['\n    <style is="custom-style" include="simple-colors">\n      :host {\n        display: block;\n        --lrnsys-drawer-color: var(--simple-colors-foreground1);\n        --lrnsys-drawer-background-color: var(--simple-colors-background1);\n      }\n      paper-button {\n        display: inline-block;\n      }\n    </style>\n    <paper-button\n      class\\$="[[class]]"\n      id="flyouttrigger"\n      on-tap="toggleDrawer"\n      raised="[[raised]]"\n      disabled\\$="[[disabled]]"\n      title="[[alt]]"\n    >\n      <lrnsys-button-inner avatar="[[avatar]]" icon="[[icon]]" text="[[text]]">\n        <slot name="button"></slot>\n      </lrnsys-button-inner>\n    </paper-button>\n    <paper-tooltip for="flyouttrigger" animation-delay="0"\n      >[[alt]]</paper-tooltip\n    >\n  ']);return f=function(){return n},n}i.Polymer({_template:i.html(d()),is:"lrnsys-button-inner",properties:{icon:{type:String},avatar:{type:String},text:{type:String}},_getTextLabelClass:function(){return this.avatar||this.icon?"text-label":"text-label-only"}}),i.Polymer({_template:i.html(u()),is:"lrnsys-collapselist-item",properties:{opened:{type:Boolean,value:!1,reflectToAttribute:!0,notify:!0}},collapseToggle:function(n){this.$.collapse.toggle()}}),i.Polymer({_template:i.html(y()),is:"lrnsys-collapselist",properties:{items:{type:Array}}}),i.Polymer({_template:i.html(m()),is:"lrnsys-dialog-toolbar-button",properties:{title:{type:String},icon:{type:String},id:{type:String}},ready:function(){this.fire("button-initialized",{id:this.id})},_onTap:function(n){var e=s.dom(n).localTarget.getAttribute("id");this.fire("dialog-toolbar-button-tapped",{id:e})}}),i.Polymer({_template:i.html(b()),is:"lrnsys-dialog-toolbar",listeners:{"dialog-toolbar-button-tapped":"_tapHandler"},properties:{_secondaryHasChildren:{type:Boolean,value:!1}},_tapHandler:function(n){this.fire("button-clicked",n.detail)},ready:function(){var n=this;this.$.secondary.addEventListener("button-initialized",function(e){n._secondaryHasChildren=!0})}}),i.Polymer({_template:i.html(g()),is:"lrnsys-dialog",listeners:{mousedown:"tapEventOn",mouseover:"tapEventOn",mouseout:"tapEventOff"},properties:{icon:{type:String},raised:{type:Boolean},avatar:{type:String},text:{type:String},alt:{type:String,reflectToAttribute:!0},header:{type:String},disabled:{type:Boolean,value:!1},hoverClass:{type:String},headingClass:{type:String,value:"white-text black"},dynamicImages:{type:Boolean,value:!1},focusState:{type:Boolean,value:!1}},tapEventOn:function(n){var e=this;"undefined"!==p(e.hoverClass)&&e.hoverClass.split(" ").forEach(function(n,t){""!=n&&e.$.dialogtrigger.classList.add(n)})},tapEventOff:function(n){var e=this;"undefined"!==p(e.hoverClass)&&e.hoverClass.split(" ").forEach(function(n,t){""!=n&&e.$.dialogtrigger.classList.remove(n)})},openDialog:function(){var n=s.dom(this).getEffectiveChildNodes(),e=document.createElement("span"),t=document.createElement("span"),o={};for(var l in n)if("undefined"!==p(n[l].tagName))switch(n[l].getAttribute("slot")){case"toolbar-primary":case"toolbar-secondary":case"toolbar":case"header":o=n[l].cloneNode(!0),e.appendChild(o);break;case"button":break;default:o=n[l].cloneNode(!0),this.dynamicImages&&"IRON-IMAGE"===o.tagName&&(o.preventLoad=!1,o.removeAttribute("prevent-load")),t.appendChild(o)}var a=new CustomEvent("simple-modal-show",{bubbles:!0,cancelable:!0,detail:{title:this.header,elements:{header:e,content:t},invokedBy:this.$.dialogtrigger}});this.dispatchEvent(a)},focusToggle:function(n){var e=this;(e.fire("focus-changed",{focus:e.focusState}),"undefined"!==p(e.hoverClass))&&e.hoverClass.split(" ").forEach(function(n,t){""!=n&&(e.focusState?e.$.dialogtrigger.classList.add(n):e.$.dialogtrigger.classList.remove(n))});e.focusState=!e.focusState},ready:function(){this.__modal=window.simpleModal.requestAvailability()},attached:function(){this.$.dialogtrigger.addEventListener("focused-changed",this.focusToggle.bind(this))},detached:function(){this.$.dialogtrigger.removeEventListener("focused-changed",this.focusToggle.bind(this))}}),i.Polymer({_template:i.html(f()),is:"lrnsys-drawer",listeners:{mousedown:"tapEventOn",mouseover:"tapEventOn",mouseout:"tapEventOff"},properties:{opened:{type:Boolean,value:!1,reflectToAttribute:!0},raised:{type:Boolean,reflectToAttribute:!0},icon:{type:String},avatar:{type:String},text:{type:String},align:{type:String,value:"left"},alt:{type:String,reflectToAttribute:!0},header:{type:String},disabled:{type:Boolean,value:!1,reflectToAttribute:!0},hoverClass:{type:String},headingClass:{type:String,value:"white-text black"},focusState:{type:Boolean,value:!1}},ready:function(){this.__modal=window.simpleDrawer.requestAvailability()},attached:function(){this.$.flyouttrigger.addEventListener("focused-changed",this.focusToggle.bind(this))},detached:function(){this.$.flyouttrigger.removeEventListener("focused-changed",this.focusToggle.bind(this))},tapEventOn:function(n){var e=this;"undefined"!==p(this.hoverClass)&&this.hoverClass.split(" ").forEach(function(n,t){""!=n&&e.$.flyouttrigger.classList.add(n)})},tapEventOff:function(n){var e=this;"undefined"!==p(this.hoverClass)&&this.hoverClass.split(" ").forEach(function(n,t){""!=n&&e.$.flyouttrigger.classList.remove(n)})},toggleDrawer:function(){var n=s.dom(this).getEffectiveChildNodes(),e=document.createElement("span"),t=document.createElement("span");for(var o in n)if("undefined"!==p(n[o].tagName))switch(n[o].getAttribute("slot")){case"header":e.appendChild(n[o].cloneNode(!0));break;default:t.appendChild(n[o].cloneNode(!0))}var l=new CustomEvent("simple-drawer-show",{bubbles:!0,cancelable:!0,detail:{title:this.header,elements:{content:t,header:e},invokedBy:this.$.flyouttrigger,align:this.align,size:"30%",clone:!1}});this.dispatchEvent(l)},focusToggle:function(n){var e=this;(this.fire("focus-changed",{focus:this.focusState}),"undefined"!==p(this.hoverClass))&&this.hoverClass.split(" ").forEach(function(n,t){""!=n&&(e.focusState?e.$.flyouttrigger.classList.add(n):e.$.flyouttrigger.classList.remove(n))});this.focusState=!this.focusState},_getTextLabelClass:function(){return this.avatar||this.icon?"text-label":"text-label-only"}})});
//# sourceMappingURL=lrnsys-layout.umd.js.map
