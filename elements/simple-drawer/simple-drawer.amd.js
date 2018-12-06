define(["exports","./node_modules/@polymer/polymer/polymer-element.js","./node_modules/@polymer/polymer/lib/legacy/polymer.dom.js","./node_modules/@polymer/polymer/lib/utils/async.js","./node_modules/@lrnwebcomponents/simple-colors/simple-colors.js","./node_modules/@polymer/app-layout/app-drawer/app-drawer.js","./node_modules/@polymer/neon-animation/neon-animation.js","./node_modules/@polymer/paper-button/paper-button.js","./node_modules/@polymer/iron-icons/iron-icons.js","./node_modules/@polymer/iron-icon/iron-icon.js"],function(_exports,_polymerElement,_polymerDom,async,_simpleColors,_appDrawer,_neonAnimation,_paperButton,_ironIcons,_ironIcon){"use strict";Object.defineProperty(_exports,"__esModule",{value:!0});_exports.SimpleDrawer=void 0;async=babelHelpers.interopRequireWildcard(async);function _templateObject_60c7e970f8ea11e8b11acb27c081eb1f(){var data=babelHelpers.taggedTemplateLiteral(["\n<style>:host {\n  display: block;\n  z-index: 1000;\n}\n:host([hidden]) {\n  display: none;\n}\n\napp-drawer {\n  --app-drawer-width: var(--simple-drawer-width, 256px);\n  --app-drawer-content-container: {\n    padding: 0;\n    overflow-y: scroll;\n    position: fixed;\n    color: var(--simple-drawer-color, #222222);\n    background-color: var(--simple-drawer-background-color, #FFFFFF);\n  }\n}\n:host ::slotted(*) {\n  font-size: 14px;\n  @apply --simple-drawer-content;\n}\n\n.content {\n  text-align: left;\n  padding: 8px 24px;\n  @apply --simple-drawer-content-container;\n}\n\n.top ::slotted(*) {\n  font-size: 24px;\n  margin: 0;\n  padding: 0 15px;\n  height: 40px;\n  line-height: 48px;\n}\n\n#close {\n  position: absolute;\n  right: 8px;\n  top: 8px;\n  padding: 4px;\n  margin: 0;\n  text-transform: none;\n  float: right;\n  font-size: 12px;\n  color: var(--simple-drawer-header-color, #ffffff);\n  background-color: transparent;\n  min-width: unset;\n}\n\n#close iron-icon {\n  display: inline-block;\n  width: 16px;\n  height: 16px;\n  margin-right: 2px;\n}\n\n.top {\n  font-size: 24px;\n  margin: 0 0 8px 0;\n  padding: 0 16px;\n  height: 40px;\n  line-height: 48px;\n  display: flex;\n  text-align: left;\n  justify-content: space-between;\n  background-color: var(--simple-drawer-header-background, #20427b);\n  color: var(--simple-drawer-header-color, #ffffff);\n  @apply --simple-drawer-header;\n}\n\n.top h2 {\n  flex: auto;\n  color: var(--simple-drawer-header-color, #ffffff);\n  font-size: 24px;\n  padding: 0;\n  line-height: 32px;\n  margin: 8px;\n  @apply --simple-drawer-heading;\n}</style>\n<style is=\"custom-style\" include=\"simple-colors\"></style>\n<app-drawer tabindex=\"0\" id=\"drawer\" opened=\"{{opened}}\" align=\"[[align]]\" role=\"dialog\">\n  <div class=\"wrapper\">\n    <div class=\"top\">\n      <h2 hidden$=\"[[!title]]\">[[title]]</h2>\n      <slot name=\"header\"></slot>\n    </div>\n    <div class=\"content\">\n      <slot name=\"content\"></slot>\n    </div>\n    <paper-button id=\"close\" on-tap=\"close\">\n      <iron-icon icon=\"[[closeIcon]]\"></iron-icon> [[closeLabel]]\n    </paper-button>\n  </div>\n</app-drawer>"]);_templateObject_60c7e970f8ea11e8b11acb27c081eb1f=function _templateObject_60c7e970f8ea11e8b11acb27c081eb1f(){return data};return data}window.simpleDrawer=window.simpleDrawer||{};window.simpleDrawer.requestAvailability=function(){if(!window.simpleDrawer.instance){window.simpleDrawer.instance=document.createElement("simple-drawer");document.body.appendChild(window.simpleDrawer.instance)}return window.simpleDrawer.instance};var SimpleDrawer=function(_PolymerElement){babelHelpers.inherits(SimpleDrawer,_PolymerElement);function SimpleDrawer(){babelHelpers.classCallCheck(this,SimpleDrawer);return babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(SimpleDrawer).apply(this,arguments))}babelHelpers.createClass(SimpleDrawer,[{key:"connectedCallback",value:function connectedCallback(){babelHelpers.get(babelHelpers.getPrototypeOf(SimpleDrawer.prototype),"connectedCallback",this).call(this);window.addEventListener("simple-drawer-hide",this.close.bind(this));window.addEventListener("simple-drawer-show",this.showEvent.bind(this))}},{key:"_resizeContent",value:function _resizeContent(e){async.microTask.run(function(){window.dispatchEvent(new Event("resize"))})}},{key:"showEvent",value:function showEvent(e){var _this=this;if(this.opened){while(null!==(0,_polymerDom.dom)(this).firstChild){(0,_polymerDom.dom)(this).removeChild((0,_polymerDom.dom)(this).firstChild)}setTimeout(function(){_this.show(e.detail.title,e.detail.elements,e.detail.invokedBy,e.detail.align,e.detail.clone)},100)}else{this.show(e.detail.title,e.detail.elements,e.detail.invokedBy,e.detail.align,e.detail.size,e.detail.clone)}}},{key:"show",value:function show(title,elements,invokedBy){var _this2=this,align=3<arguments.length&&arguments[3]!==void 0?arguments[3]:"left",size=4<arguments.length&&arguments[4]!==void 0?arguments[4]:"256px",clone=5<arguments.length&&arguments[5]!==void 0?arguments[5]:!1;this.set("invokedBy",invokedBy);this.title=title;this.align=align;this.updateStyles({"--simple-drawer-width":size});var element,slots=["header","content"];for(var i in slots){if(elements[slots[i]]){if(clone){element=elements[slots[i]].cloneNode(!0)}else{element=elements[slots[i]]}element.setAttribute("slot",slots[i]);(0,_polymerDom.dom)(this).appendChild(element)}}setTimeout(function(){_this2.opened=!0;_this2._resizeContent()},100)}},{key:"animationEnded",value:function animationEnded(e){var _this3=this;this.title="";while(null!==(0,_polymerDom.dom)(this).firstChild){(0,_polymerDom.dom)(this).removeChild((0,_polymerDom.dom)(this).firstChild)}if(this.invokedBy){async.microTask.run(function(){setTimeout(function(){_this3.invokedBy.focus()},500)})}}},{key:"close",value:function close(){this.$.drawer.close()}},{key:"_openedChanged",value:function _openedChanged(newValue,oldValue){if(babelHelpers.typeof(newValue)!==("undefined"===typeof void 0?"undefined":babelHelpers.typeof(void 0))&&!newValue){this.animationEnded();var evt=new CustomEvent("simple-drawer-closed",{bubbles:!0,cancelable:!0,detail:{opened:!1,invokedBy:this.invokedBy}});this.dispatchEvent(evt)}else if(newValue){var _evt=new CustomEvent("simple-drawer-opened",{bubbles:!0,cancelable:!0,detail:{opened:!0,invokedBy:this.invokedBy}});this.dispatchEvent(_evt)}}},{key:"disconnectedCallback",value:function disconnectedCallback(){babelHelpers.get(babelHelpers.getPrototypeOf(SimpleDrawer.prototype),"disconnectedCallback",this).call(this);window.removeEventListener("simple-drawer-hide",this.close.bind(this));window.removeEventListener("simple-drawer-show",this.showEvent.bind(this))}}],[{key:"template",get:function get(){return(0,_polymerElement.html)(_templateObject_60c7e970f8ea11e8b11acb27c081eb1f())}},{key:"properties",get:function get(){return{title:{name:"title",type:String,value:""},align:{name:"align",type:String,value:"left"},opened:{name:"opened",type:Boolean,value:!1,reflectToAttribute:!0,observer:"_openedChanged"},closeLabel:{name:"closeLabel",type:String,value:"Close"},closeIcon:{name:"closeIcon",type:String,value:"cancel"},invokedBy:{name:"invokedBy",type:Object}}}},{key:"tag",get:function get(){return"simple-drawer"}}]);return SimpleDrawer}(_polymerElement.PolymerElement);_exports.SimpleDrawer=SimpleDrawer;window.customElements.define(SimpleDrawer.tag,SimpleDrawer)});