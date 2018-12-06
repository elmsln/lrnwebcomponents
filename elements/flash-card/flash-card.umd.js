!function(e,i){"object"==typeof exports&&"undefined"!=typeof module?i(exports,require("@polymer/polymer/polymer-legacy.js"),require("@polymer/paper-card/paper-card.js"),require("@lrnwebcomponents/materializecss-styles/materializecss-styles.js"),require("@lrnwebcomponents/hax-body-behaviors/lib/HAXWiring.js"),require("@lrnwebcomponents/schema-behaviors/schema-behaviors.js")):"function"==typeof define&&define.amd?define(["exports","@polymer/polymer/polymer-legacy.js","@polymer/paper-card/paper-card.js","@lrnwebcomponents/materializecss-styles/materializecss-styles.js","@lrnwebcomponents/hax-body-behaviors/lib/HAXWiring.js","@lrnwebcomponents/schema-behaviors/schema-behaviors.js"],i):i(e.FlashCard={},e.polymerLegacy_js)}(this,function(e,i){"use strict";function t(){var e,i,r=(e=['\n    <style include="materializecss-styles-colors">\n      :host {\n        display: block;\n      }\n      paper-card {\n        -webkit-perspective: 800;\n        width: 400px;\n        height: 300px;\n        position: relative;\n        padding: 0;\n        margin: 0;\n      }\n      paper-card.flipped {\n        -webkit-transform: rotatex(-180deg);\n      }\n      paper-card.flipped .back {\n        z-index: 3;\n      }\n      paper-card {\n        -webkit-transform-style: preserve-3d;\n        -webkit-transition: 0.5s;\n      }\n      paper-card .face {\n        width: 100%;\n        height: 100%;\n        padding: 0;\n        margin: 0;\n        cursor: pointer;\n        position: absolute;\n        -webkit-backface-visibility: hidden;\n        z-index: 2;\n        font-family: Georgia;\n        font-size: 48px;\n        text-align: center;\n        line-height: 200px;\n      }\n      paper-card .front {\n        position: absolute;\n        z-index: 1;\n      }\n      paper-card .back {\n        -webkit-transform: rotatex(-180deg);\n      }\n    </style>\n    <paper-card id="card" animated-shadow="true">\n      <div class="face front white black-text">Front</div>\n      <div class="face back black white-text">Back</div>\n    </paper-card>\n  '],i||(i=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(i)}})));return t=function(){return r},r}var r=i.Polymer({_template:i.html(t()),is:"flash-card",behaviors:[HAXBehaviors.PropertiesBehaviors,MaterializeCSSBehaviors.ColorBehaviors,SchemaBehaviors.Schema],listeners:{mouseenter:"_flipup",mouseleave:"_flipback"},properties:{title:{type:String}},attached:function(){this.setHaxProperties({canScale:!0,canPosition:!0,canEditSource:!1,gizmo:{title:"Sample gizmo",description:"The user will be able to see this for selection in a UI.",icon:"av:play-circle-filled",color:"grey",groups:["Video","Media"],handles:[{type:"video",url:"source"}],meta:{author:"Your organization on github"}},settings:{quick:[{property:"title",title:"Title",description:"The title of the element",inputMethod:"textfield",icon:"editor:title"}],configure:[{property:"title",title:"Title",description:"The title of the element",inputMethod:"textfield",icon:"editor:title"}],advanced:[]}})},_flipup:function(e){this.$.card.classList.add("flipped")},_flipback:function(e){this.$.card.classList.remove("flipped")}});e.FlashCard=r,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=flash-card.umd.js.map
