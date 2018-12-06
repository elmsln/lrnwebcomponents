!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("@polymer/polymer/polymer-legacy.js"),require("@lrnwebcomponents/materializecss-styles/materializecss-styles.js"),require("@lrnwebcomponents/hax-body-behaviors/lib/HAXWiring.js"),require("@lrnwebcomponents/schema-behaviors/schema-behaviors.js")):"function"==typeof define&&define.amd?define(["exports","@polymer/polymer/polymer-legacy.js","@lrnwebcomponents/materializecss-styles/materializecss-styles.js","@lrnwebcomponents/hax-body-behaviors/lib/HAXWiring.js","@lrnwebcomponents/schema-behaviors/schema-behaviors.js"],t):t(e.ParallaxImage={},e.polymerLegacy_js)}(this,function(e,t){"use strict";function n(){var e,t,a=(e=['\n    <style>\n      :host {\n        display: block;\n        --parallax-image-background: "";\n        --parallax-title-background: rgba(0, 0, 0, 0.3);\n        --parallax-title-font: #fff;\n      }\n\n      .parallax_container {\n        height: 400px;\n        width: 100%;\n        overflow: hidden;\n        display: flex;\n        justify-content: center;\n      }\n\n      .parallax {\n        background-image: var(--parallax-image-background);\n        background-attachment: fixed;\n        background-position: top center;\n        background-repeat: no-repeat;\n        background-size: cover;\n        width: 100%;\n        height: 100%;\n        justify-content: center;\n      }\n\n      #bgParallax {\n        display: flex;\n        align-items: center;\n      }\n\n      .title {\n        background: var(--parallax-title-background);\n        display: block;\n        padding: 20px 15px;\n        text-align: center;\n        width: 40%;\n        color: var(--parallax-title-font);\n        font-size: 32px;\n        position: absolute;\n        margin-top: 120px;\n      }\n\n      @media screen and (max-width: 900px) {\n        .title {\n          font-size: 16px;\n        }\n      }\n    </style>\n\n    <a href="[[url]]" target$="[[_urlTarget(url)]]">\n      <div class="parallax_container">\n        <div id="bgParallax" class="parallax">\n          <div class="title" id="titleParallax">\n            <slot name="parallax_heading"></slot>\n          </div>\n        </div>\n      </div>\n    </a>\n  '],t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}})));return n=function(){return a},a}var a=t.Polymer({_template:t.html(n()),is:"parallax-image",behaviors:[HAXBehaviors.PropertiesBehaviors,MaterializeCSSBehaviors.ColorBehaviors,SchemaBehaviors.Schema],properties:{imageBg:{type:String,value:"",reflectToAttribute:!0},url:{type:String,value:"",reflectToAttribute:!0}},observers:["__updateStyles(imageBg)"],_urlTarget:function(e){if(e&&this._outsideLink(e))return"_blank";return!1},_outsideLink:function(e){if(0!=e.indexOf("http"))return!1;var t=location.href,n=location.pathname,a=t.substring(0,t.indexOf(n));return 0!=e.indexOf(a)},attached:function(){this.setHaxProperties({canScale:!0,canPosition:!0,canEditSource:!1,gizmo:{title:"Sample gizmo",description:"The user will be able to see this for selection in a UI.",icon:"av:play-circle-filled",color:"grey",groups:["Video","Media"],handles:[{type:"video",url:"source"}],meta:{author:"Your organization on github"}},settings:{quick:[{property:"title",title:"Title",description:"The title of the element",inputMethod:"textfield",icon:"editor:title"}],configure:[{property:"title",title:"Title",description:"The title of the element",inputMethod:"textfield",icon:"editor:title"}],advanced:[]}})},__updateStyles:function(e){this.updateStyles({"--parallax-image-background":"url(".concat(e,")")})},ready:function(){var e=this.$.bgParallax,t=this.$.titleParallax;window.addEventListener("scroll",function(n){var a=-.2*window.scrollY,i=1.4*a;e.style.backgroundPosition="center ".concat(a,"px"),t.style.transform="translate3D(0, ".concat(i,"px, 0)")})}});e.ParallaxImage=a,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=parallax-image.umd.js.map
