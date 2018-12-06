!function(i,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("@polymer/polymer/polymer-legacy.js"),require("@polymer/iron-a11y-keys/iron-a11y-keys.js"),require("@polymer/iron-image/iron-image.js"),require("@lrnwebcomponents/hax-body-behaviors/lib/HAXWiring.js"),require("@lrnwebcomponents/schema-behaviors/schema-behaviors.js")):"function"==typeof define&&define.amd?define(["exports","@polymer/polymer/polymer-legacy.js","@polymer/iron-a11y-keys/iron-a11y-keys.js","@polymer/iron-image/iron-image.js","@lrnwebcomponents/hax-body-behaviors/lib/HAXWiring.js","@lrnwebcomponents/schema-behaviors/schema-behaviors.js"],t):t(i.A11YGifPlayer={},i.polymerLegacy_js)}(this,function(i,t){"use strict";function e(){var i,t,n=(i=['\n    <style>\n      :host {\n        display: block;\n      }\n      :host #gifbutton > * {\n        position: relative;\n      }\n      :host #svg {\n        position: absolute;\n        top: 35%;\n        left: 35%;\n      }\n      :host #gifbutton:active,\n      :host #gifbutton:focus,\n      :host #gifbutton:hover {\n        cursor: pointer;\n        outline: 1px solid blue;\n      }\n      :host #preload {\n        display: none;\n      }\n    </style>\n    <div id="gifbutton" aria-role="button" aria-controls="gif" tabindex="0">\n      <div>\n        <img\n          id="gif"\n          alt$="[[alt]]"\n          src$="[[srcWithoutAnimation]]"\n          style="width:100%;height:100%;"\n        />\n        <svg\n          id="svg"\n          xmlns="http://www.w3.org/2000/svg"\n          viewBox="0 0 200 200"\n          width="30%"\n          height="30%"\n        >\n          <g opacity=".5">\n            <polygon\n              points="30,20 30,180 170,100"\n              fill="#000000"\n              stroke="#ffffff"\n              stroke-width="15px"\n            ></polygon>\n            <text x="50" y="115" fill="#ffffff" font-size="40px">GIF</text>\n          </g>\n        </svg>\n      </div>\n    </div>\n    <iron-image id="preload" src$="[[src]]" hidden=""></iron-image>\n    <iron-a11y-keys\n      id="a11y"\n      keys="enter space"\n      on-keys-pressed="toggleAnimation"\n    ></iron-a11y-keys>\n  '],(t=['\n    <style>\n      :host {\n        display: block;\n      }\n      :host #gifbutton > * {\n        position: relative;\n      }\n      :host #svg {\n        position: absolute;\n        top: 35%;\n        left: 35%;\n      }\n      :host #gifbutton:active,\n      :host #gifbutton:focus,\n      :host #gifbutton:hover {\n        cursor: pointer;\n        outline: 1px solid blue;\n      }\n      :host #preload {\n        display: none;\n      }\n    </style>\n    <div id="gifbutton" aria-role="button" aria-controls="gif" tabindex="0">\n      <div>\n        <img\n          id="gif"\n          alt\\$="[[alt]]"\n          src\\$="[[srcWithoutAnimation]]"\n          style="width:100%;height:100%;"\n        />\n        <svg\n          id="svg"\n          xmlns="http://www.w3.org/2000/svg"\n          viewBox="0 0 200 200"\n          width="30%"\n          height="30%"\n        >\n          <g opacity=".5">\n            <polygon\n              points="30,20 30,180 170,100"\n              fill="#000000"\n              stroke="#ffffff"\n              stroke-width="15px"\n            ></polygon>\n            <text x="50" y="115" fill="#ffffff" font-size="40px">GIF</text>\n          </g>\n        </svg>\n      </div>\n    </div>\n    <iron-image id="preload" src\\$="[[src]]" hidden=""></iron-image>\n    <iron-a11y-keys\n      id="a11y"\n      keys="enter space"\n      on-keys-pressed="toggleAnimation"\n    ></iron-a11y-keys>\n  '])||(t=i.slice(0)),Object.freeze(Object.defineProperties(i,{raw:{value:Object.freeze(t)}})));return e=function(){return n},n}var n=t.Polymer({_template:t.html(e()),is:"a11y-gif-player",behaviors:[HAXBehaviors.PropertiesBehaviors,SchemaBehaviors.Schema],listeners:{tap:"toggleAnimation"},properties:{src:{type:String,value:null},srcWithoutAnimation:{type:String,value:null},alt:{type:String,value:null}},ready:function(){this.stop(),this.$.a11y.target=this.$.gifbutton},play:function(){this.__stopped=!0,this.toggleAnimation()},stop:function(){this.__stopped=!1,this.toggleAnimation()},toggleAnimation:function(){this.__stopped?(this.__stopped=!1,this.$.svg.style.visibility="hidden",null!=this.src&&(this.$.gif.src=this.src),this.$.gif.alt=this.alt+" (Stop animation.)"):(this.__stopped=!0,this.$.svg.style.visibility="visible",null!=this.srcWithoutAnimation&&(this.$.gif.src=this.srcWithoutAnimation),this.$.gif.alt=this.alt+" (Play animation.)")},attached:function(){this.setHaxProperties({canScale:!0,canPosition:!0,canEditSource:!1,gizmo:{title:"Accessible GIF",description:"Makes animated GIFs accessible.",icon:"gif",color:"grey",groups:["Images","Media"],handles:[{type:"image",source:"src",source2:"srcWithoutAnimation",alt:"alt"}],meta:{author:"LRNWebComponents"}},settings:{quick:[{property:"src",title:"Animated GIF",description:"The URL to your animated GIF.",inputMethod:"textfield",icon:"link",validationType:"url",required:!0},{property:"srcWithoutAnimation",title:"Still Image",description:"The URL to a still image version of your GIF.",inputMethod:"textfield",icon:"link",validationType:"url",required:!0},{property:"alt",title:"Alt Text",description:"Alternative text for the image.",inputMethod:"textfield",icon:"accessibility",required:!0}],configure:[{property:"src",title:"Animated GIF",description:"The URL to your animated GIF.",inputMethod:"textfield",icon:"link",validationType:"url",required:!0},{property:"srcWithoutAnimation",title:"Still Image",description:"The URL to a still image version of your GIF.",inputMethod:"textfield",icon:"link",validationType:"url",required:!0},{property:"alt",title:"Alt Text",description:"Alternative text for the image.",inputMethod:"textfield",icon:"accessibility",required:!0}],advanced:[]}})}});i.A11yGifPlayer=n,Object.defineProperty(i,"__esModule",{value:!0})});
//# sourceMappingURL=a11y-gif-player.umd.js.map
