!function(n,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports,require("@polymer/polymer/polymer-legacy.js"),require("@polymer/paper-progress/paper-progress.js"),require("@polymer/paper-icon-button/paper-icon-button.js"),require("@polymer/paper-ripple/paper-ripple.js"),require("@polymer/iron-a11y-keys-behavior/iron-a11y-keys-behavior.js"),require("@polymer/iron-icon/iron-icon.js"),require("@polymer/iron-iconset-svg/iron-iconset-svg.js")):"function"==typeof define&&define.amd?define(["exports","@polymer/polymer/polymer-legacy.js","@polymer/paper-progress/paper-progress.js","@polymer/paper-icon-button/paper-icon-button.js","@polymer/paper-ripple/paper-ripple.js","@polymer/iron-a11y-keys-behavior/iron-a11y-keys-behavior.js","@polymer/iron-icon/iron-icon.js","@polymer/iron-iconset-svg/iron-iconset-svg.js"],e):e(n.LrndesignAudioPlayer={},n.polymerLegacy_js,null,null,null,n.ironA11yKeysBehavior_js)}(this,function(n,e,i,t,r,o){"use strict";var a=document.createElement("div");function l(){var n,e,i=(n=['\n    <style>\n      :host {\n        display: block;\n        /*margin: auto 10px;\n        width: 100%;*/\n        box-sizing: border-box;\n        font-family: "Roboto Mono", "Helvetica Neue", Arial, sans-serif;\n      }\n\n      #wrapper {\n        position: relative;\n        cursor: pointer;\n        height: 50px;\n        box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);\n      }\n\n      #left,\n      #right {\n        height: 50px;\n        width: 50px;\n        position: relative;\n      }\n\n      #left {\n        background-color: var(--lrndesign-audio-player-color, blueviolet);\n      }\n\n      #right {\n        background-color: rgba(255, 255, 255, 0.75);\n      }\n\n      paper-icon-button,\n      iron-icon {\n        color: #fff;\n      }\n\n      #duration,\n      #title,\n      #progress2 {\n        text-align: center;\n        line-height: 50px;\n      }\n\n      #duration {\n        font-size: 11px;\n        color: var(--lrndesign-audio-player-color, blueviolet);\n      }\n\n      paper-icon-button,\n      iron-icon {\n        margin: auto;\n      }\n\n      #replay {\n        opacity: 0;\n        color: var(--lrndesign-audio-player-color, blueviolet);\n      }\n\n      #title,\n      #progress2 {\n        pointer-events: none;\n        font-size: 15px;\n      }\n\n      #title {\n        z-index: 2;\n        color: var(--lrndesign-audio-player-color, blueviolet);\n      }\n\n      #progress2 {\n        width: 0px;\n        z-index: 5;\n        color: #fff;\n        overflow: hidden;\n      }\n\n      #center {\n        position: relative;\n        overflow: hidden;\n        background-color: rgba(255, 255, 255, 0.75);\n      }\n\n      #progress {\n        width: 100%;\n        transform-origin: left;\n        transform: scaleX(0);\n        background-color: var(--lrndesign-audio-player-color, blueviolet);\n      }\n\n      paper-ripple {\n        color: var(--lrndesign-audio-player-color, blueviolet);\n      }\n\n      /* On hover */\n\n      :host(:not(.cantplay)) #right:hover #replay {\n        opacity: 1;\n      }\n\n      #right:hover #duration {\n        opacity: 0;\n      }\n\n      #left:hover #play,\n      #left:hover #pause {\n        transform: scale3d(1.1, 1.1, 1.1);\n        -ms-transform: scale3d(1.1, 1.1, 1.1);\n        -webkit-transform: scale3d(1.1, 1.1, 1.1);\n      }\n\n      /* On Error */\n\n      :host(.cantplay) #title {\n        font-size: 12px;\n      }\n\n      :host(.cantplay) #wrapper {\n        cursor: default;\n      }\n\n      :host(.cantplay) #play {\n        opacity: 0;\n      }\n\n      /* Flexbox Helpers */\n\n      .layout-horizontal {\n        display: flex;\n        display: -webkit-flex;\n        display: -ms-flexbox;\n        -ms-flex-direction: row;\n        -webkit-flex-direction: row;\n        flex-direction: row;\n      }\n\n      .flex {\n        -ms-flex: 1;\n        -webkit-flex: 1;\n        flex: 1;\n      }\n\n      .fit {\n        position: absolute;\n        top: 0;\n        right: 0;\n        bottom: 0;\n        left: 0;\n      }\n\n      .self-start {\n        -ms-align-self: flex-start;\n        -webkit-align-self: flex-start;\n        align-self: flex-start;\n      }\n\n      .self-end {\n        -ms-align-self: flex-end;\n        -webkit-align-self: flex-end;\n        align-self: flex-end;\n      }\n    </style>\n\n    <div id="wrapper" class="layout-horizontal">\n      <div id="left" class="self-start" on-tap="playPause">\n        \x3c!-- Icon --\x3e\n        <paper-icon-button\n          id="play"\n          icon="lrndesign-audio-player-icons:play-arrow"\n          class="fit"\n          hidden$="{{ _hidePlayIcon(isPlaying, canBePlayed) }}"\n          role="button"\n          aria-label="Play Audio"\n          tabindex="-1"\n        ></paper-icon-button>\n        <paper-icon-button\n          id="pause"\n          icon="lrndesign-audio-player-icons:pause"\n          class="fit"\n          hidden$="{{ !isPlaying }}"\n          role="button"\n          aria-label="Pause Audio"\n          tabindex="-1"\n        ></paper-icon-button>\n        <iron-icon\n          id="error"\n          icon="lrndesign-audio-player-icons:error-outline"\n          class="fit"\n          hidden$="{{ !error }}"\n        ></iron-icon>\n      </div>\n\n      <div id="center" class="flex" on-down="_onDown">\n        \x3c!-- Title --\x3e\n        <div id="title" class="fit" role="alert">{{ title }}</div>\n\n        \x3c!-- Audio HTML5 element --\x3e\n        <audio\n          id="audio"\n          src="{{ src }}"\n          preload="{{ _setPreload(autoPlay, preload) }}"\n        ></audio>\n\n        \x3c!-- Progress bar --\x3e\n        <div id="progress" class="fit"></div>\n\n        <paper-ripple></paper-ripple>\n\n        \x3c!-- Secondary white title --\x3e\n        <div id="progress2" class="fit">\n          <div id="title2" aria-hidden="true">{{ title }}</div>\n        </div>\n      </div>\n\n      <div id="right" class="self-end" on-click="restart">\n        \x3c!-- Duration --\x3e\n        <div id="duration" class="fit" hidden$="{{ ended }}">\n          <span class="fit" role="timer" aria-label="Audio Track Length"\n            >{{ _convertSecToMin(timeLeft) }}</span\n          >\n        </div>\n\n        \x3c!-- Icon --\x3e\n        <paper-icon-button\n          id="replay"\n          class="fit"\n          icon="lrndesign-audio-player-icons:replay"\n          tabindex="-1"\n          role="button"\n          aria-label="Replay Audio"\n        ></paper-icon-button>\n      </div>\n    </div>\n  '],(e=['\n    <style>\n      :host {\n        display: block;\n        /*margin: auto 10px;\n        width: 100%;*/\n        box-sizing: border-box;\n        font-family: "Roboto Mono", "Helvetica Neue", Arial, sans-serif;\n      }\n\n      #wrapper {\n        position: relative;\n        cursor: pointer;\n        height: 50px;\n        box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);\n      }\n\n      #left,\n      #right {\n        height: 50px;\n        width: 50px;\n        position: relative;\n      }\n\n      #left {\n        background-color: var(--lrndesign-audio-player-color, blueviolet);\n      }\n\n      #right {\n        background-color: rgba(255, 255, 255, 0.75);\n      }\n\n      paper-icon-button,\n      iron-icon {\n        color: #fff;\n      }\n\n      #duration,\n      #title,\n      #progress2 {\n        text-align: center;\n        line-height: 50px;\n      }\n\n      #duration {\n        font-size: 11px;\n        color: var(--lrndesign-audio-player-color, blueviolet);\n      }\n\n      paper-icon-button,\n      iron-icon {\n        margin: auto;\n      }\n\n      #replay {\n        opacity: 0;\n        color: var(--lrndesign-audio-player-color, blueviolet);\n      }\n\n      #title,\n      #progress2 {\n        pointer-events: none;\n        font-size: 15px;\n      }\n\n      #title {\n        z-index: 2;\n        color: var(--lrndesign-audio-player-color, blueviolet);\n      }\n\n      #progress2 {\n        width: 0px;\n        z-index: 5;\n        color: #fff;\n        overflow: hidden;\n      }\n\n      #center {\n        position: relative;\n        overflow: hidden;\n        background-color: rgba(255, 255, 255, 0.75);\n      }\n\n      #progress {\n        width: 100%;\n        transform-origin: left;\n        transform: scaleX(0);\n        background-color: var(--lrndesign-audio-player-color, blueviolet);\n      }\n\n      paper-ripple {\n        color: var(--lrndesign-audio-player-color, blueviolet);\n      }\n\n      /* On hover */\n\n      :host(:not(.cantplay)) #right:hover #replay {\n        opacity: 1;\n      }\n\n      #right:hover #duration {\n        opacity: 0;\n      }\n\n      #left:hover #play,\n      #left:hover #pause {\n        transform: scale3d(1.1, 1.1, 1.1);\n        -ms-transform: scale3d(1.1, 1.1, 1.1);\n        -webkit-transform: scale3d(1.1, 1.1, 1.1);\n      }\n\n      /* On Error */\n\n      :host(.cantplay) #title {\n        font-size: 12px;\n      }\n\n      :host(.cantplay) #wrapper {\n        cursor: default;\n      }\n\n      :host(.cantplay) #play {\n        opacity: 0;\n      }\n\n      /* Flexbox Helpers */\n\n      .layout-horizontal {\n        display: flex;\n        display: -webkit-flex;\n        display: -ms-flexbox;\n        -ms-flex-direction: row;\n        -webkit-flex-direction: row;\n        flex-direction: row;\n      }\n\n      .flex {\n        -ms-flex: 1;\n        -webkit-flex: 1;\n        flex: 1;\n      }\n\n      .fit {\n        position: absolute;\n        top: 0;\n        right: 0;\n        bottom: 0;\n        left: 0;\n      }\n\n      .self-start {\n        -ms-align-self: flex-start;\n        -webkit-align-self: flex-start;\n        align-self: flex-start;\n      }\n\n      .self-end {\n        -ms-align-self: flex-end;\n        -webkit-align-self: flex-end;\n        align-self: flex-end;\n      }\n    </style>\n\n    <div id="wrapper" class="layout-horizontal">\n      <div id="left" class="self-start" on-tap="playPause">\n        \x3c!-- Icon --\x3e\n        <paper-icon-button\n          id="play"\n          icon="lrndesign-audio-player-icons:play-arrow"\n          class="fit"\n          hidden\\$="{{ _hidePlayIcon(isPlaying, canBePlayed) }}"\n          role="button"\n          aria-label="Play Audio"\n          tabindex="-1"\n        ></paper-icon-button>\n        <paper-icon-button\n          id="pause"\n          icon="lrndesign-audio-player-icons:pause"\n          class="fit"\n          hidden\\$="{{ !isPlaying }}"\n          role="button"\n          aria-label="Pause Audio"\n          tabindex="-1"\n        ></paper-icon-button>\n        <iron-icon\n          id="error"\n          icon="lrndesign-audio-player-icons:error-outline"\n          class="fit"\n          hidden\\$="{{ !error }}"\n        ></iron-icon>\n      </div>\n\n      <div id="center" class="flex" on-down="_onDown">\n        \x3c!-- Title --\x3e\n        <div id="title" class="fit" role="alert">{{ title }}</div>\n\n        \x3c!-- Audio HTML5 element --\x3e\n        <audio\n          id="audio"\n          src="{{ src }}"\n          preload="{{ _setPreload(autoPlay, preload) }}"\n        ></audio>\n\n        \x3c!-- Progress bar --\x3e\n        <div id="progress" class="fit"></div>\n\n        <paper-ripple></paper-ripple>\n\n        \x3c!-- Secondary white title --\x3e\n        <div id="progress2" class="fit">\n          <div id="title2" aria-hidden="true">{{ title }}</div>\n        </div>\n      </div>\n\n      <div id="right" class="self-end" on-click="restart">\n        \x3c!-- Duration --\x3e\n        <div id="duration" class="fit" hidden\\$="{{ ended }}">\n          <span class="fit" role="timer" aria-label="Audio Track Length"\n            >{{ _convertSecToMin(timeLeft) }}</span\n          >\n        </div>\n\n        \x3c!-- Icon --\x3e\n        <paper-icon-button\n          id="replay"\n          class="fit"\n          icon="lrndesign-audio-player-icons:replay"\n          tabindex="-1"\n          role="button"\n          aria-label="Replay Audio"\n        ></paper-icon-button>\n      </div>\n    </div>\n  '])||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}})));return l=function(){return i},i}a.setAttribute("style","display: none;"),a.innerHTML='<iron-iconset-svg name="lrndesign-audio-player-icons" size="24">\n    <svg>\n        <defs>\n            <g id="error-outline"><path d="M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path></g>\n            <g id="play-arrow"><path d="M8 5v14l11-7z"></path></g>\n            <g id="replay"><path d="M12 5V1L7 6l5 5V7c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6H4c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8z"></path></g>\n            <g id="pause"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"></path></g>\n        </defs>\n    </svg>\n</iron-iconset-svg>',document.head.appendChild(a);var s=e.Polymer({_template:e.html(l()),is:"lrndesign-audio-player",behaviors:[o.IronA11yKeysBehavior],hostAttributes:{tabindex:0,role:"application","aria-label":"Audio Player","aria-describedby":"title"},properties:{src:{type:String,observer:"_srcChanged"},title:{type:String,value:"Click to play this audio file"},color:{type:String,observer:"_changeColor"},autoPlay:{type:Boolean,value:!1},preload:{type:String,value:"auto"},currentTime:{type:Number,value:0,notify:!0},timeLeft:{type:Number,value:0},smallSkip:{type:Number,value:15},largeSkip:{type:Number,value:60},error:{type:Boolean},timeOffset:{type:Number,value:0}},keyBindings:{space:"playPause",enter:"playPause",left:"_skipReverseByInterval",right:"_skipReverseByInterval",down:"_skipReverseByInterval",up:"_skipReverseByInterval"},ready:function(){this.canBePlayed=!1,this.isPlaying=!1,this.ended=!1,this.error=!1,this.$.audio.currentTime=this.timeOffset},attached:function(){this.$.audio.addEventListener("loadedmetadata",this._onCanPlay.bind(this)),this.$.audio.addEventListener("playing",this._onPlaying.bind(this)),this.$.audio.addEventListener("pause",this._onPause.bind(this)),this.$.audio.addEventListener("ended",this._onEnd.bind(this)),this.$.audio.addEventListener("error",this._onError.bind(this))},detached:function(){this.$.audio.removeEventListener("loadedmetadata",this._onCanPlay.bind(this)),this.$.audio.removeEventListener("playing",this._onPlaying.bind(this)),this.$.audio.removeEventListener("pause",this._onPause.bind(this)),this.$.audio.removeEventListener("ended",this._onEnd.bind(this)),this.$.audio.removeEventListener("error",this._onError.bind(this))},playPause:function(n){n&&n.preventDefault();if(this.canBePlayed)return this.isPlaying?this.$.audio.pause():this.$.audio.play();"none"===this.preload&&(this.$.audio.load(),this.$.audio.play())},restart:function(n){n&&n.preventDefault();this.$.audio.currentTime=0,this.isPlaying||this.$.audio.play()},_onCanPlay:function(){if(this.canBePlayed=!0,this.timeLeft=this.$.audio.duration,this.timeOffset>0){var n=this.timeOffset/this.$.audio.duration;this._updateVisualProgress(n)}this.autoPlay&&this.$.audio.play()},_onPlaying:function(){this.ended=!1,this.isPlaying=!0,this.$.replay.style="",this._startProgressTimer()},_skipReverseByInterval:function(n){n&&n.preventDefault();var e=0;switch(n.detail.key){case"up":this.largeSkip<this.timeLeft&&(e=this.currentTime+this.largeSkip);break;case"down":this.currentTime-this.largeSkip>0&&(e=this.currentTime-this.largeSkip);break;case"right":this.smallSkip<this.timeLeft&&(e=this.currentTime+this.smallSkip);break;default:this.currentTime-this.smallSkip>0&&(e=this.currentTime-this.smallSkip)}this._updatePlayPosition(e),this.isPlaying||this.$.audio.play()},_startProgressTimer:function(){var n=this;n.timer={},n.timer.sliderUpdateInterval&&clearInterval(n.timer.sliderUpdateInterval),n.timer.sliderUpdateInterval=setInterval(function(){if(n.isPlaying){n.currentTime=n.$.audio.currentTime,n.timeLeft=n.$.audio.duration-n.currentTime;var e=n.currentTime/n.$.audio.duration;n._updateVisualProgress(e)}else clearInterval(n.timer.sliderUpdateInterval)},60)},_onPause:function(){this.isPlaying=!1},_onEnd:function(){this.ended=!0,this.isPlaying=!1,this.$.replay.style.opacity=1},_onError:function(){this.classList.add("cantplay"),this.title="Sorry, can't play track: "+this.title,this.error=!0,this.setAttribute("aria-invalid","true")},_convertSecToMin:function(n){if(0===n)return"";var e=Math.floor(n/60),i=Math.floor(n%60)+"";return e+":"+(i.length<2?"0"+i:i)},_onDown:function(n){n.preventDefault();var e=this;e.canBePlayed?(e._updateProgressBar(n),e.isPlaying||e.$.audio.play()):"none"===e.preload&&(e.$.audio.load(),e.$.audio.addEventListener("loadedmetadata",function(){e._updateProgressBar(n),e.isPlaying||e.$.audio.play()},!1))},_updateProgressBar:function(n){var e=(n.detail.x-this.$.center.getBoundingClientRect().left)/this.$.center.getBoundingClientRect().width*this.$.audio.duration;this._updatePlayPosition(e)},_updatePlayPosition:function(n){this.currentTime=this.$.audio.currentTime=n;var e=this.currentTime/this.$.audio.duration;this._updateVisualProgress(e)},_updateVisualProgress:function(n){this.$.progress.style.transform="scaleX("+n+")",this.$.progress2.style.width=100*n+"%",this.$.title2.style.width=1/n*100+"%"},_srcChanged:function(n,e){this.isPlaying&&(this.$.audio.pause(),this.$.audio.play())},_changeColor:function(n){this.$.left.style.backgroundColor=n,this.$.title.style.color=n,this.$.duration.style.color=n,this.$.progress.style.backgroundColor=n,this.$.replay.style.color=n},_hidePlayIcon:function(n,e){return!!n||!(e||"none"===this.preload)},_setPreload:function(n,e){return n?"auto":e}});n.LrndesignAudioPlayer=s,Object.defineProperty(n,"__esModule",{value:!0})});
//# sourceMappingURL=lrndesign-audio-player.umd.js.map
