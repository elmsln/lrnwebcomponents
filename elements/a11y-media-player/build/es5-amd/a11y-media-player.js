define([
  "./node_modules/@polymer/polymer/polymer-legacy.js",
  "./node_modules/@polymer/paper-slider/paper-slider.js",
  "./node_modules/@lrnwebcomponents/simple-colors/simple-colors.js",
  "./lib/screenfull-lib.js",
  "./lib/a11y-media-behaviors.js",
  "./lib/a11y-media-video-loader.js",
  "./lib/a11y-media-play-button.js",
  "./lib/a11y-media-controls.js",
  "./lib/a11y-media-transcript.js",
  "./lib/a11y-media-transcript-controls.js",
  "./lib/a11y-media-utility.js",
  "./lib/a11y-media-youtube-utility.js"
], function(_polymerLegacy) {
  "use strict";
  var _Mathmax = Math.max;
  function _templateObject_e97f0300e11811e890362723497a45ce() {
    var data = babelHelpers.taggedTemplateLiteral(
      [
        '\n  <custom-style>\n    <style is="custom-style">\n      :host {  \n        width: 100%;\n        display: block;\n        color: var(--simple-colors-foreground1);\n        background-color: var(--simple-colors-background2);\n        outline: 1px solid var(--simple-colors-background3);\n      }\n      :host([dark]) {  \n        outline: 1px solid var(--simple-colors-background1);\n      }\n      :host #outerplayer, :host #outerplayer * {\n        --a11y-media-color: var(--simple-colors-foreground2);\n        --a11y-media-bg-color: var(--simple-colors-background2);\n        --a11y-media-hover-color: var(--simple-colors-foreground1);\n        --a11y-media-hover-bg-color: var(--simple-colors-background2);\n        --a11y-media-accent-color: var(--simple-colors-accent-foreground4);\n        --a11y-media-faded-accent-color: var(--simple-colors-accent-foreground5);\n\n        /* settings */\n        --a11y-media-settings-menu-color: var(--a11y-media-color);\n        --a11y-media-settings-menu-bg-color: var(--a11y-media-bg-color);\n        --a11y-media-settings-menu-hover-color: var(--a11y-media-hover-color);\n        --a11y-media-settings-menu-hover-bg-color: var(--a11y-media-hover-bg-color);\n        \n        /* buttons */\n        --a11y-media-button-color: var(--a11y-media-color);\n        --a11y-media-button-bg-color: var(--a11y-media-bg-color);\n        --a11y-media-button-hover-color: var(--a11y-media-accent-color);\n        --a11y-media-button-hover-bg-color: var(--a11y-media-hover-bg-color);\n        --a11y-media-button-toggle-color: var(--a11y-media-faded-accent-color);\n\n        /* toggle button */\n        --paper-toggle-button-unchecked-bar-color: var(--a11y-media-color);\n        --paper-toggle-button-unchecked-button-color: var(--a11y-media-color);\n        --paper-toggle-button-checked-bar-color: var(--a11y-media-accent-color);\n        --paper-toggle-button-checked-button-color: var(--a11y-media-accent-color);\n        \n        /* slider */\n        --paper-slider-active-color: var(--a11y-media-accent-color);\n        --paper-slider-secondary-color:  var(--a11y-media-faded-accent-color);\n        --paper-slider-pin-color: var(--a11y-media-faded-bg-color);\n        --paper-slider-pin-start-color: var(--a11y-media-faded-bg-color);\n        --paper-slider-pin-end-color: var(--a11y-media-faded-bg-color);\n        --paper-slider-knob-color: var(--a11y-media-accent-color);\n        --paper-slider-knob-start-color: var(--a11y-media-bg-color);\n        --paper-slider-knob-end-color: var(--a11y-media-bg-color);\n        --paper-slider-knob-border-color: var(--a11y-media-accent-color);\n        --paper-slider-knob-start-border-color: var(--a11y-media-bg-color);\n        --paper-slider-knob-end-border-color: var(--a11y-media-bg-color);\n      }\n      :host #outertranscript, :host #outertranscript *, :host #transcript {\n        --a11y-media-transcript-color: var(--simple-colors-foreground1);\n        --a11y-media-transcript-bg-color: var(--simple-colors-background1);\n        --a11y-media-transcript-accent-color: var(--simple-colors-accent-foreground5);\n        --a11y-media-transcript-faded-accent-color: var(--simple-colors-accent-foreground3);\n        --a11y-media-transcript-active-cue-color: var(--simple-colors-foreground1);\n        --a11y-media-transcript-active-cue-bg-color: var(--simple-colors-accent-background1);\n        --a11y-media-transcript-focused-cue-color: var(--simple-colors-foreground1);\n        --a11y-media-transcript-focused-cue-bg-color: var(--simple-colors-background2);\n        --a11y-media-transcript-match-color: var(--simple-colors-background1);\n        --a11y-media-transcript-match-bg-color: var(--simple-colors-accent-foreground3);\n        --a11y-media-transcript-match-border-color: var(--simple-colors-accent-foreground1);\n        --a11y-media-hover-color: var(--simple-colors-foreground1);\n        --a11y-media-hover-bg-color: var(--simple-colors-background2);\n      }\n      :host #player {\n        display: block;\n        max-width: 100%;\n        transition: position 0.5s ease, max-width 1s ease;\n        background-color: var(--simple-colors-background2);\n      }\n      :host #innerplayer {\n        z-index: 1;\n      }\n      :host #sources {\n        display: flex;\n        align-items: stretch;\n        position: relative;\n      }\n      :host([no-height]) #sources {\n        display: none;\n      }\n      :host #controls,\n      :host #slider, \n      :host #sources,\n      :host #sources > * {\n        width: 100%;\n      }\n      :host #loader, \n      :host #youtube,\n      :host #customcc,\n      :host #customcctxt {\n        position: absolute;\n        top: 0;\n        left: 0;\n      }\n      :host #youtube {\n        height: 100%;\n      }\n      :host #customcc {\n        font-size: 20px;\n        width: 100%;\n        height: 100%;\n        transition: font-size 0.25s;\n      }\n      :host([responsive-size*="lg"]) #customcc {\n        font-size: 14px;\n      }\n      :host([responsive-size*="md"]) #customcc {\n        font-size: 14px;\n      }\n      :host([responsive-size*="sm"]) #customcc {\n        font-size: 12px;\n      }\n      :host([responsive-size*="xs"]) #customcc {\n        font-size: 10px;\n      }\n      :host([sticky]:not([sticky-corner="none"])) #customcc {\n        display: none;\n      }\n      :host #customcctxt {\n        top: unset;\n        bottom: 0.5em;\n        display: inline-block;\n        margin: 0 10px;\n        color: white;\n        background-color: black;\n        background-color: rgba(0, 0, 0, 0.8);\n        padding: 0.15em 0.25em;\n      }\n      :host #customcctxt:empty {\n        display: none;\n      }\n      :host #innerplayer,\n      :host #sources > * {\n        max-height: 80vh;\n      }\n      :host #controls,\n      :host #slider {\n        z-index: 2 !important;\n      }\n      :host #audio-only {\n        text-align: center;\n        font-style: italic;\n        width: 100%;\n        line-height: 160%;\n      }\n      :host .media-caption:not(:empty) {\n        padding: 5px 15px;\n      }\n      :host #printthumb {\n        width: 100%;\n        margin: 0;\n        display: block;\n        border-top: 1px solid #aaaaaa; \n      }\n      :host .sr-only {\n        position: absolute;\n        left: -9999px;\n        font-size: 0;\n        height: 0;\n        width: 0;\n        overflow: hidden;\n      }\n      @media screen {\n        :host #printthumb {\n          display: none;\n        }\n        :host([flex-layout]:not([responsive-size*="s"])) {\n          display: inline-flex;\n          align-items: stretch;\n          outline: 1px solid;\n          color: var(--simple-colors-foreground1);\n          background-color: var(--simple-colors-background2);\n          outline-color: var(--simple-colors-background3);\n          padding: 0;\n        }\n        :host([dark][flex-layout]:not([responsive-size*="s"])) {\n          outline-color: var(--simple-colors-background1);\n        }\n        :host > div {\n          transition: all 0.5s;\n        }\n        :host([sticky]:not([sticky-corner="none"])) #player {\n          position: fixed;\n          top: 5px;\n          right: 5px;\n          width: 200px;\n          max-width: 200px;\n          z-index: 999999;\n          border: 1px solid;\n          box-shadow: 1px 1px 20px 1px rgba(125,125,125);\n          border-radius: 0.2em; \n          border-color: var(--a11y-media-bg-color);\n        }\n        :host([dark][sticky]:not([sticky-corner="none"])) #player {\n          border-color: var(--a11y-media-bg-color);\n        }\n        :host([sticky][sticky-corner="top-left"]) #player {\n          right: unset;\n          left: 5px;\n        }\n        :host([flex-layout]:not([responsive-size*="s"])) > div {\n          width: 50%;\n          flex-grow: 1;\n          flex-shrink: 1;\n        }\n        :host #innertranscript {\n          position: relative;\n          height: 100%;\n        }\n        :host([hide-transcript]) #outerplayer {\n          min-width: 50%;\n          max-width: 100%;\n        }\n        :host([hide-transcript]) #outertranscript {\n          display: none;\n        }\n        :host #transcript {\n          padding-top: 48px;\n        }\n        :host(:not([no-height]):not([stacked-layout]):not([responsive-size*="s"])) #transcript {\n          position: absolute;\n          top: 0; \n          left: 0;\n          right: 0; \n          bottom: 0;\n          overflow-y: scroll;\n        }\n        :host(:not([no-height]):not([stacked-layout]):not([responsive-size*="s"])) #player.totop {\n          position: absolute;\n          top:0;\n          left: 0;\n          width: 200px !important;\n          z-index: 9999;\n        }\n        :host #tcontrols {\n          z-index: 1000;\n          position: absolute;\n          top: 0;\n          left: 0;\n          width: 100%;\n          display: flex;\n        }\n        :host([sticky][sticky-corner="bottom-left"]) #player {\n          top: unset;\n          right: unset;\n          bottom: 5px;\n        }\n        :host([sticky][sticky-corner="bottom-right"]) #player {\n          top: unset;\n          bottom: 5px;\n        }\n        :host([sticky]:not([sticky-corner="none"]):not([no-height]):not([stacked-layout]):not([responsive-size*="s"])) #controls {\n          display: none;\n        }\n        :host .print-only {\n          display: none;\n        }\n        :host .media-caption:not(:empty) {\n          color: var(--simple-colors-background1);\n          background-color: var(--simple-colors-accent-foreground1);\n        }\n      }\n\n      @media print {\n        :host, :host([dark]) {\n          outline: 1px solid #aaaaaa; \n          background-color: #ffffff;\n        }\n        :host([sticky]:not([sticky-corner="none"])) #outerplayer {\n          height: unset !important;\n        }\n        :host .screen-only,\n        :host #player, \n        :host #printthumb:not([src]) {\n          display: none;\n        }\n        :host(:not([thumbnail-src])) #sources, \n        :host #slider, \n        :host #loader, \n        :host #youtube,\n        :host #controls {\n          display: none;\n        }\n        :host .media-type {\n          font-style: italic;\n        }\n        :host #searchbar {\n          display: none;\n        }\n        :host .media-caption:not(:empty) {\n          background-color: #cccccc;\n          color: #000000;\n          font-size: 120%;\n          padding: 5px 15px;\n        }\n      }\n    </style>\n  </custom-style>\n    <div class="sr-only">[[mediaCaption]]</div>\n    <div id="outerplayer" lang$="[[uiLanguage]]">\n      <div id="player">\n        <div id="innerplayer">\n          <div id="sources" hidden$="[[noHeight]]">\n            <a11y-media-play-button id="playbutton" audio-only$="[[audioOnly]]" disabled="true" hidden$="[[noPlayButton]]" disabled$="[[noPlayButton]]" pause-label$="[[pauseLabel]]" playing$="[[__playing]]" play-label$="[[playLabel]]">\n            </a11y-media-play-button>\n            <a11y-media-video-loader id="loader" autoplay$="[[autoplay]]" cc$="[[cc]]" crossorigin$="[[crossorigin]]" hidden$="[[isYoutube]]" lang$="[[lang]]" loop$="[[loop]]" muted$="[[muted]]" manifest$="[[manifest]]" playback-rate$="[[playbackRate]]" style$="[[_getThumbnailCSS(thumbnailSrc)]]" preload$="[[preload]]" volume$="[[volume]]">\n              <slot></slot>\n            </a11y-media-video-loader>\n            <div id="youtube" hidden$="[[!isYoutube]]" video-id$="[[videoId]]"></div>\n            <div id="customcc" hidden$="[[!showCustomCaptions]]"><span id="customcctxt"></span></div>\n          </div>\n        </div>\n        <paper-slider id="slider" max$="[[__duration]]" pin="" secondary-progress$="[[__buffered]]" value$="[[__elapsed]]">\n        </paper-slider>\n      </div>\n      <a11y-media-controls id="controls" audio-only$="[[audioOnly]]" audio-label$="[[audioLabel]]" captions-icon$="[[captionsIcon]]" captions-label$="[[captionsLabel]]" captions-menu-label$="[[captionsMenuLabel]]" captions-menu-off$="[[captionsMenuOff]]" cc$="[[cc]]" forward-icon$="[[forwardIcon]]" forward-label$="[[forwardLabel]]" fullscreen-icon$="[[fullscreenIcon]]" fullscreen-label$="[[fullscreenLabel]]" has-captions$="[[hasCaptions]]" has-transcript$="[[hasTranscript]]" lang$="[[uiLanguage]]" loop-icon$="[[loopIcon]]" loop-label$="[[loopLabel]]" mute-icon$="[[muteIcon]]" mute-label$="[[muteLabel]]" muted$="[[muted]]" pause-icon$="[[pauseIcon]]" pause-label$="[[pauseLabel]]" play-icon$="[[playIcon]]" play-label$="[[playLabel]]" playing$="[[__playing]]" restart-icon$="[[restartIcon]]" restart-label$="[[restartLabel]]" rewind-icon$="[[rewindIcon]]" rewind-label$="[[rewindLabel]]" search-transcript$="[[searchTranscript]]" settings-icon$="[[settingsIcon]]" settings-label$="[[settingsLabel]]" speed-label$="[[speedLabel]]" stand-alone$="[[standAlone]]" transcript-icon$="[[transcriptIcon]]" transcript-label$="[[transcriptLabel]]" transcript-menu-label$="[[transcriptMenuLabel]]" unmute-icon$="[[unmuteIcon]]" unmute-label$="[[unmuteLabel]]" video-label$="[[videoLabel]]" volume="[[__volume]]" volume-icon$="[[volumeIcon]]" volume-label$="[[volumeLabel]]">\n      </a11y-media-controls>\n      <div class="screen-only media-caption" aria-hidden="true">[[mediaCaption]]</div>\n      <div class="print-only media-caption">[[printCaption]]</div>\n    </div>\n    <img id="printthumb" aria-hidden="true" src$="[[thumbnailSrc]]">\n    <div id="outertranscript" hidden$="[[standAlone]]" lang$="[[uiLanguage]]">\n      <div id="innertranscript">\n        <a11y-media-transcript-controls id="tcontrols" accent-color$="[[accentColor]]" auto-scroll-icon$="[[autoScrollIcon]]" auto-scroll-label$="[[autoScrollLabel]]" dark$="[[darkTranscript]]" disable-print-button$="[[disablePrintButton]]" disable-scroll$="[[disableScroll]]" disable-search$="[[disableSearch]]" lang$="[[uiLanguage]]" print-icon$="[[printIcon]]" print-label$="[[printLabel]]" search-label$="[[searchLabel]]" search-prev-label$="[[searchPrevLabel]]" search-prev-icon$="[[searchPrevIcon]]" search-next-label$="[[searchNextLabel]]" search-next-icon$="[[searchNextIcon]]" skip-transcript-link$="[[skipTranscriptLink]]">\n        </a11y-media-transcript-controls>\n        <a11y-media-transcript id="transcript" accent-color$="[[accentColor]]" dark$="[[darkTranscript]]" disable-scroll$="[[disableScroll]]" disable-search$="[[disableSearch]]" disable-interactive$="[[disableInteractive]]" hide-timestamps$="[[hideTimestamps]]" search="[[search]]">\n        </a11y-media-transcript>\n      </div>\n    </div>\n'
      ],
      [
        '\n  <custom-style>\n    <style is="custom-style">\n      :host {  \n        width: 100%;\n        display: block;\n        color: var(--simple-colors-foreground1);\n        background-color: var(--simple-colors-background2);\n        outline: 1px solid var(--simple-colors-background3);\n      }\n      :host([dark]) {  \n        outline: 1px solid var(--simple-colors-background1);\n      }\n      :host #outerplayer, :host #outerplayer * {\n        --a11y-media-color: var(--simple-colors-foreground2);\n        --a11y-media-bg-color: var(--simple-colors-background2);\n        --a11y-media-hover-color: var(--simple-colors-foreground1);\n        --a11y-media-hover-bg-color: var(--simple-colors-background2);\n        --a11y-media-accent-color: var(--simple-colors-accent-foreground4);\n        --a11y-media-faded-accent-color: var(--simple-colors-accent-foreground5);\n\n        /* settings */\n        --a11y-media-settings-menu-color: var(--a11y-media-color);\n        --a11y-media-settings-menu-bg-color: var(--a11y-media-bg-color);\n        --a11y-media-settings-menu-hover-color: var(--a11y-media-hover-color);\n        --a11y-media-settings-menu-hover-bg-color: var(--a11y-media-hover-bg-color);\n        \n        /* buttons */\n        --a11y-media-button-color: var(--a11y-media-color);\n        --a11y-media-button-bg-color: var(--a11y-media-bg-color);\n        --a11y-media-button-hover-color: var(--a11y-media-accent-color);\n        --a11y-media-button-hover-bg-color: var(--a11y-media-hover-bg-color);\n        --a11y-media-button-toggle-color: var(--a11y-media-faded-accent-color);\n\n        /* toggle button */\n        --paper-toggle-button-unchecked-bar-color: var(--a11y-media-color);\n        --paper-toggle-button-unchecked-button-color: var(--a11y-media-color);\n        --paper-toggle-button-checked-bar-color: var(--a11y-media-accent-color);\n        --paper-toggle-button-checked-button-color: var(--a11y-media-accent-color);\n        \n        /* slider */\n        --paper-slider-active-color: var(--a11y-media-accent-color);\n        --paper-slider-secondary-color:  var(--a11y-media-faded-accent-color);\n        --paper-slider-pin-color: var(--a11y-media-faded-bg-color);\n        --paper-slider-pin-start-color: var(--a11y-media-faded-bg-color);\n        --paper-slider-pin-end-color: var(--a11y-media-faded-bg-color);\n        --paper-slider-knob-color: var(--a11y-media-accent-color);\n        --paper-slider-knob-start-color: var(--a11y-media-bg-color);\n        --paper-slider-knob-end-color: var(--a11y-media-bg-color);\n        --paper-slider-knob-border-color: var(--a11y-media-accent-color);\n        --paper-slider-knob-start-border-color: var(--a11y-media-bg-color);\n        --paper-slider-knob-end-border-color: var(--a11y-media-bg-color);\n      }\n      :host #outertranscript, :host #outertranscript *, :host #transcript {\n        --a11y-media-transcript-color: var(--simple-colors-foreground1);\n        --a11y-media-transcript-bg-color: var(--simple-colors-background1);\n        --a11y-media-transcript-accent-color: var(--simple-colors-accent-foreground5);\n        --a11y-media-transcript-faded-accent-color: var(--simple-colors-accent-foreground3);\n        --a11y-media-transcript-active-cue-color: var(--simple-colors-foreground1);\n        --a11y-media-transcript-active-cue-bg-color: var(--simple-colors-accent-background1);\n        --a11y-media-transcript-focused-cue-color: var(--simple-colors-foreground1);\n        --a11y-media-transcript-focused-cue-bg-color: var(--simple-colors-background2);\n        --a11y-media-transcript-match-color: var(--simple-colors-background1);\n        --a11y-media-transcript-match-bg-color: var(--simple-colors-accent-foreground3);\n        --a11y-media-transcript-match-border-color: var(--simple-colors-accent-foreground1);\n        --a11y-media-hover-color: var(--simple-colors-foreground1);\n        --a11y-media-hover-bg-color: var(--simple-colors-background2);\n      }\n      :host #player {\n        display: block;\n        max-width: 100%;\n        transition: position 0.5s ease, max-width 1s ease;\n        background-color: var(--simple-colors-background2);\n      }\n      :host #innerplayer {\n        z-index: 1;\n      }\n      :host #sources {\n        display: flex;\n        align-items: stretch;\n        position: relative;\n      }\n      :host([no-height]) #sources {\n        display: none;\n      }\n      :host #controls,\n      :host #slider, \n      :host #sources,\n      :host #sources > * {\n        width: 100%;\n      }\n      :host #loader, \n      :host #youtube,\n      :host #customcc,\n      :host #customcctxt {\n        position: absolute;\n        top: 0;\n        left: 0;\n      }\n      :host #youtube {\n        height: 100%;\n      }\n      :host #customcc {\n        font-size: 20px;\n        width: 100%;\n        height: 100%;\n        transition: font-size 0.25s;\n      }\n      :host([responsive-size*="lg"]) #customcc {\n        font-size: 14px;\n      }\n      :host([responsive-size*="md"]) #customcc {\n        font-size: 14px;\n      }\n      :host([responsive-size*="sm"]) #customcc {\n        font-size: 12px;\n      }\n      :host([responsive-size*="xs"]) #customcc {\n        font-size: 10px;\n      }\n      :host([sticky]:not([sticky-corner="none"])) #customcc {\n        display: none;\n      }\n      :host #customcctxt {\n        top: unset;\n        bottom: 0.5em;\n        display: inline-block;\n        margin: 0 10px;\n        color: white;\n        background-color: black;\n        background-color: rgba(0, 0, 0, 0.8);\n        padding: 0.15em 0.25em;\n      }\n      :host #customcctxt:empty {\n        display: none;\n      }\n      :host #innerplayer,\n      :host #sources > * {\n        max-height: 80vh;\n      }\n      :host #controls,\n      :host #slider {\n        z-index: 2 !important;\n      }\n      :host #audio-only {\n        text-align: center;\n        font-style: italic;\n        width: 100%;\n        line-height: 160%;\n      }\n      :host .media-caption:not(:empty) {\n        padding: 5px 15px;\n      }\n      :host #printthumb {\n        width: 100%;\n        margin: 0;\n        display: block;\n        border-top: 1px solid #aaaaaa; \n      }\n      :host .sr-only {\n        position: absolute;\n        left: -9999px;\n        font-size: 0;\n        height: 0;\n        width: 0;\n        overflow: hidden;\n      }\n      @media screen {\n        :host #printthumb {\n          display: none;\n        }\n        :host([flex-layout]:not([responsive-size*="s"])) {\n          display: inline-flex;\n          align-items: stretch;\n          outline: 1px solid;\n          color: var(--simple-colors-foreground1);\n          background-color: var(--simple-colors-background2);\n          outline-color: var(--simple-colors-background3);\n          padding: 0;\n        }\n        :host([dark][flex-layout]:not([responsive-size*="s"])) {\n          outline-color: var(--simple-colors-background1);\n        }\n        :host > div {\n          transition: all 0.5s;\n        }\n        :host([sticky]:not([sticky-corner="none"])) #player {\n          position: fixed;\n          top: 5px;\n          right: 5px;\n          width: 200px;\n          max-width: 200px;\n          z-index: 999999;\n          border: 1px solid;\n          box-shadow: 1px 1px 20px 1px rgba(125,125,125);\n          border-radius: 0.2em; \n          border-color: var(--a11y-media-bg-color);\n        }\n        :host([dark][sticky]:not([sticky-corner="none"])) #player {\n          border-color: var(--a11y-media-bg-color);\n        }\n        :host([sticky][sticky-corner="top-left"]) #player {\n          right: unset;\n          left: 5px;\n        }\n        :host([flex-layout]:not([responsive-size*="s"])) > div {\n          width: 50%;\n          flex-grow: 1;\n          flex-shrink: 1;\n        }\n        :host #innertranscript {\n          position: relative;\n          height: 100%;\n        }\n        :host([hide-transcript]) #outerplayer {\n          min-width: 50%;\n          max-width: 100%;\n        }\n        :host([hide-transcript]) #outertranscript {\n          display: none;\n        }\n        :host #transcript {\n          padding-top: 48px;\n        }\n        :host(:not([no-height]):not([stacked-layout]):not([responsive-size*="s"])) #transcript {\n          position: absolute;\n          top: 0; \n          left: 0;\n          right: 0; \n          bottom: 0;\n          overflow-y: scroll;\n        }\n        :host(:not([no-height]):not([stacked-layout]):not([responsive-size*="s"])) #player.totop {\n          position: absolute;\n          top:0;\n          left: 0;\n          width: 200px !important;\n          z-index: 9999;\n        }\n        :host #tcontrols {\n          z-index: 1000;\n          position: absolute;\n          top: 0;\n          left: 0;\n          width: 100%;\n          display: flex;\n        }\n        :host([sticky][sticky-corner="bottom-left"]) #player {\n          top: unset;\n          right: unset;\n          bottom: 5px;\n        }\n        :host([sticky][sticky-corner="bottom-right"]) #player {\n          top: unset;\n          bottom: 5px;\n        }\n        :host([sticky]:not([sticky-corner="none"]):not([no-height]):not([stacked-layout]):not([responsive-size*="s"])) #controls {\n          display: none;\n        }\n        :host .print-only {\n          display: none;\n        }\n        :host .media-caption:not(:empty) {\n          color: var(--simple-colors-background1);\n          background-color: var(--simple-colors-accent-foreground1);\n        }\n      }\n\n      @media print {\n        :host, :host([dark]) {\n          outline: 1px solid #aaaaaa; \n          background-color: #ffffff;\n        }\n        :host([sticky]:not([sticky-corner="none"])) #outerplayer {\n          height: unset !important;\n        }\n        :host .screen-only,\n        :host #player, \n        :host #printthumb:not([src]) {\n          display: none;\n        }\n        :host(:not([thumbnail-src])) #sources, \n        :host #slider, \n        :host #loader, \n        :host #youtube,\n        :host #controls {\n          display: none;\n        }\n        :host .media-type {\n          font-style: italic;\n        }\n        :host #searchbar {\n          display: none;\n        }\n        :host .media-caption:not(:empty) {\n          background-color: #cccccc;\n          color: #000000;\n          font-size: 120%;\n          padding: 5px 15px;\n        }\n      }\n    </style>\n  </custom-style>\n    <div class="sr-only">[[mediaCaption]]</div>\n    <div id="outerplayer" lang\\$="[[uiLanguage]]">\n      <div id="player">\n        <div id="innerplayer">\n          <div id="sources" hidden\\$="[[noHeight]]">\n            <a11y-media-play-button id="playbutton" audio-only\\$="[[audioOnly]]" disabled="true" hidden\\$="[[noPlayButton]]" disabled\\$="[[noPlayButton]]" pause-label\\$="[[pauseLabel]]" playing\\$="[[__playing]]" play-label\\$="[[playLabel]]">\n            </a11y-media-play-button>\n            <a11y-media-video-loader id="loader" autoplay\\$="[[autoplay]]" cc\\$="[[cc]]" crossorigin\\$="[[crossorigin]]" hidden\\$="[[isYoutube]]" lang\\$="[[lang]]" loop\\$="[[loop]]" muted\\$="[[muted]]" manifest\\$="[[manifest]]" playback-rate\\$="[[playbackRate]]" style\\$="[[_getThumbnailCSS(thumbnailSrc)]]" preload\\$="[[preload]]" volume\\$="[[volume]]">\n              <slot></slot>\n            </a11y-media-video-loader>\n            <div id="youtube" hidden\\$="[[!isYoutube]]" video-id\\$="[[videoId]]"></div>\n            <div id="customcc" hidden\\$="[[!showCustomCaptions]]"><span id="customcctxt"></span></div>\n          </div>\n        </div>\n        <paper-slider id="slider" max\\$="[[__duration]]" pin="" secondary-progress\\$="[[__buffered]]" value\\$="[[__elapsed]]">\n        </paper-slider>\n      </div>\n      <a11y-media-controls id="controls" audio-only\\$="[[audioOnly]]" audio-label\\$="[[audioLabel]]" captions-icon\\$="[[captionsIcon]]" captions-label\\$="[[captionsLabel]]" captions-menu-label\\$="[[captionsMenuLabel]]" captions-menu-off\\$="[[captionsMenuOff]]" cc\\$="[[cc]]" forward-icon\\$="[[forwardIcon]]" forward-label\\$="[[forwardLabel]]" fullscreen-icon\\$="[[fullscreenIcon]]" fullscreen-label\\$="[[fullscreenLabel]]" has-captions\\$="[[hasCaptions]]" has-transcript\\$="[[hasTranscript]]" lang\\$="[[uiLanguage]]" loop-icon\\$="[[loopIcon]]" loop-label\\$="[[loopLabel]]" mute-icon\\$="[[muteIcon]]" mute-label\\$="[[muteLabel]]" muted\\$="[[muted]]" pause-icon\\$="[[pauseIcon]]" pause-label\\$="[[pauseLabel]]" play-icon\\$="[[playIcon]]" play-label\\$="[[playLabel]]" playing\\$="[[__playing]]" restart-icon\\$="[[restartIcon]]" restart-label\\$="[[restartLabel]]" rewind-icon\\$="[[rewindIcon]]" rewind-label\\$="[[rewindLabel]]" search-transcript\\$="[[searchTranscript]]" settings-icon\\$="[[settingsIcon]]" settings-label\\$="[[settingsLabel]]" speed-label\\$="[[speedLabel]]" stand-alone\\$="[[standAlone]]" transcript-icon\\$="[[transcriptIcon]]" transcript-label\\$="[[transcriptLabel]]" transcript-menu-label\\$="[[transcriptMenuLabel]]" unmute-icon\\$="[[unmuteIcon]]" unmute-label\\$="[[unmuteLabel]]" video-label\\$="[[videoLabel]]" volume="[[__volume]]" volume-icon\\$="[[volumeIcon]]" volume-label\\$="[[volumeLabel]]">\n      </a11y-media-controls>\n      <div class="screen-only media-caption" aria-hidden="true">[[mediaCaption]]</div>\n      <div class="print-only media-caption">[[printCaption]]</div>\n    </div>\n    <img id="printthumb" aria-hidden="true" src\\$="[[thumbnailSrc]]">\n    <div id="outertranscript" hidden\\$="[[standAlone]]" lang\\$="[[uiLanguage]]">\n      <div id="innertranscript">\n        <a11y-media-transcript-controls id="tcontrols" accent-color\\$="[[accentColor]]" auto-scroll-icon\\$="[[autoScrollIcon]]" auto-scroll-label\\$="[[autoScrollLabel]]" dark\\$="[[darkTranscript]]" disable-print-button\\$="[[disablePrintButton]]" disable-scroll\\$="[[disableScroll]]" disable-search\\$="[[disableSearch]]" lang\\$="[[uiLanguage]]" print-icon\\$="[[printIcon]]" print-label\\$="[[printLabel]]" search-label\\$="[[searchLabel]]" search-prev-label\\$="[[searchPrevLabel]]" search-prev-icon\\$="[[searchPrevIcon]]" search-next-label\\$="[[searchNextLabel]]" search-next-icon\\$="[[searchNextIcon]]" skip-transcript-link\\$="[[skipTranscriptLink]]">\n        </a11y-media-transcript-controls>\n        <a11y-media-transcript id="transcript" accent-color\\$="[[accentColor]]" dark\\$="[[darkTranscript]]" disable-scroll\\$="[[disableScroll]]" disable-search\\$="[[disableSearch]]" disable-interactive\\$="[[disableInteractive]]" hide-timestamps\\$="[[hideTimestamps]]" search="[[search]]">\n        </a11y-media-transcript>\n      </div>\n    </div>\n'
      ]
    );
    _templateObject_e97f0300e11811e890362723497a45ce = function() {
      return data;
    };
    return data;
  }
  (0, _polymerLegacy.Polymer)({
    _template: (0, _polymerLegacy.html)(
      _templateObject_e97f0300e11811e890362723497a45ce()
    ),
    is: "a11y-media-player",
    listeners: {
      "controls-change": "_onControlsChanged",
      "play-button-tapped": "play"
    },
    properties: {
      mediaCaption: {
        type: String,
        computed: "_getMediaCaption(audioOnly,audioLabel,mediaTitle)"
      },
      printCaption: {
        type: String,
        computed: "_getPrintCaption(audioOnly,audioLabel,videoLabel,mediaTitle)"
      }
    },
    behaviors: [
      simpleColorsBehaviors,
      a11yMediaBehaviors.MediaProps,
      a11yMediaBehaviors.GeneralFunctions,
      a11yMediaBehaviors.PlayerBehaviors,
      a11yMediaBehaviors.TranscriptBehaviors
    ],
    attached: function attached() {
      this.__playerAttached = !0;
      window.SimpleColorsUtility.requestAvailability();
      window.A11yMediaUtility.requestAvailability();
      this._addResponsiveUtility();
      this.fire("a11y-player", this);
      if (this.isYoutube) {
        window.A11yMediaYoutubeUtility.requestAvailability();
        this._youTubeRequest();
      }
    },
    ready: function ready() {
      var _this = this,
        root = this;
      root.__playerReady = !0;
      root.__interactive = !root.disableInteractive;
      root.target = root.shadowRoot.querySelector("#transcript");
      root.__status = root.loadingLabel;
      root.__slider = root.$.slider;
      root.__volume = root.muted ? 0 : _Mathmax(this.volume, 10);
      root.__resumePlaying = !1;
      root.__showFullscreen = !this.disableFullscreen && screenfull.enabled;
      root.__duration = 0;
      root.$.controls.setStatus(root.__status);
      var aspect = 16 / 9;
      root.width = null !== root.width ? root.width : "100%";
      root.style.maxWidth = null !== root.width ? root.width : "100%";
      root.$.sources.style.paddingTop = 100 / aspect + "%";
      if (this.isYoutube) {
        root.disableInteractive = !0;
        this._youTubeRequest();
      } else {
        root.__media = root.$.loader;
        root.__media.addEventListener("media-loaded", function() {
          aspect = root.__media.aspectRatio;
          root.$.sources.style.paddingTop = 100 / aspect + "%";
          root.$.playbutton.removeAttribute("disabled");
          root.__duration =
            0 < root.__media.duration ? root.__media.duration : 0;
          root.__status =
            root._getHHMMSS(0, root.__media.duration) +
            "/" +
            root._getHHMMSS(root.__media.duration);
          root.$.controls.setStatus(root.__status);
          root._getTrackData(root.$.loader.media);
        });
      }
      root.$.tcontrols.addEventListener("searchbar-added", function(e) {
        root.search = e.detail;
      });
      root.$.tcontrols.addEventListener("toggle-scroll", function() {
        root.disableScroll = !root.disableScroll;
      });
      root.$.tcontrols.addEventListener("print-transcript", function() {
        this.fire("printing-transcript", this);
        root.$.transcript.print(root.mediaTitle);
      });
      root.$.transcript.setMedia(root.$.player);
      if (root.__showFullscreen) {
        screenfull.on("change", function() {
          _this.fullscreen = screenfull.isFullscreen;
        });
      }
      root.$.slider.addEventListener("dragging-changed", function() {
        _this._toggleSliderSeek(
          root.$.slider.dragging,
          root.$.slider.immediateValue
        );
      });
      root.$.slider.addEventListener("focused-changed", function() {
        _this._toggleSliderSeek(root.$.slider.focused, root.$.slider.value);
      });
    },
    _getThumbnailCSS: function _getThumbnailCSS(thumbnailSrc) {
      return null != thumbnailSrc
        ? "background-image: url(" + thumbnailSrc + "); background-size: cover;"
        : null;
    },
    _toggleSliderSeek: function _toggleSliderSeek(seeking, value) {
      if (seeking) {
        if (this.__playing) this.__resumePlaying = !0;
        this.pause();
      } else {
        this.seek(value);
        this.__resumePlaying = !1;
      }
    },
    _youTubeRequest: function _youTubeRequest() {
      var root = this;
      if (root.__playerAttached && root.__playerReady) {
        var options = {
            width: "100%",
            height: "100%",
            videoId: root.youtubeId
          },
          ytInit = function() {
            root.__media = window.A11yMediaYoutubeUtility.initYoutubePlayer(
              root.$.youtube,
              options
            );
            root._getTrackData(root.$.loader.media);
            root._updateCustomTacks();
            var int = setInterval(function() {
              if (root.__media.getDuration !== void 0) {
                clearInterval(int);
                root.__duration = root.__media.duration = root.__media.getDuration();
                root.__status =
                  root._getHHMMSS(0, root.__media.duration) +
                  "/" +
                  root._getHHMMSS(root.__media.duration);
                root.$.controls.setStatus(root.__status);
                root.disableInteractive = !root.__interactive;
              }
            }, 100);
          },
          checkApi = function() {
            if (window.A11yMediaYoutubeUtility.apiReady) {
              document.removeEventListener("youtube-api-ready", checkApi);
              ytInit();
            }
          };
        if (window.A11yMediaYoutubeUtility.apiReady) {
          ytInit();
        } else {
          document.addEventListener("youtube-api-ready", checkApi);
        }
      }
    },
    _updateCustomTacks: function _updateCustomTacks() {
      if (this.isYoutube && this.tracks !== void 0 && null !== this.tracks) {
        var root = this,
          track = root.tracks[this.$.transcript.selectedTranscript],
          active = [],
          caption = "";
        if (
          track !== void 0 &&
          null !== track &&
          track.cues !== void 0 &&
          null !== track.cues
        ) {
          for (var i = 0; i < track.cues.length; i++) {
            if (
              track.cues[i].seek < root.__elapsed &&
              track.cues[i].seekEnd > root.__elapsed
            ) {
              active.push(track.cues[i].order);
              caption = "" === caption ? track.cues[i].text : caption;
            }
          }
          root.$.customcctxt.innerText = caption;
          root.$.transcript.setActiveCues(active);
        }
      }
    },
    play: function play(e) {
      var root = this;
      root.__playing = !0;
      if (e === void 0 || e.detail === root.$.playbutton) {
        root.__playProgress = setInterval(function() {
          root.__elapsed =
            0 < root.__media.getCurrentTime()
              ? root.__media.getCurrentTime()
              : 0;
          root.__duration =
            0 < root.__media.duration ? root.__media.duration : 0;
          root._updateCustomTacks();
          root.__status =
            root._getHHMMSS(root.__media.getCurrentTime(), root.__duration) +
            "/" +
            root._getHHMMSS(root.__duration);
          root.$.controls.setStatus(root.__status);
          if (root.__elapsed === root.__duration && !root.loop) {
            root.__playing = !1;
            clearInterval(root.__playProgress);
          }
          root.__buffered = root.__media.getBufferedTime;
        }, 1);
        root.fire("a11y-player-playing", root);
        root.__media.play();
      }
    },
    pause: function pause() {
      var root = this;
      root.__playing = !1;
      root.__media.pause();
      clearInterval(root.__playProgress);
    },
    stop: function stop() {
      this.pause();
      this.seek(0);
    },
    restart: function restart() {
      this.seek(0);
      this.play();
    },
    rewind: function rewind(amt) {
      amt = amt !== void 0 ? amt : 1;
      this.seek(_Mathmax(this.__media.getCurrentTime() - amt, 0));
    },
    forward: function forward(amt) {
      amt = amt !== void 0 ? amt : 1;
      this.seek(Math.min(this.__media.getCurrentTime() + amt, this.__duration));
    },
    seek: function seek(time) {
      var seekable = this.__media.seekable;
      if (
        0 < seekable.length &&
        time >= seekable.start(0) &&
        time <= seekable.end(0)
      ) {
        this.__media.seek(time);
        this.__elapsed = time;
        this.__status =
          this._getHHMMSS(this.__media.getCurrentTime(), this.__duration) +
          "/" +
          this._getHHMMSS(this.__duration);
        this.$.controls.setStatus(this.__status);
        this._updateCustomTacks();
        if (this.__resumePlaying) this.play();
      }
    },
    toggleCC: function toggleCC(mode) {
      this.cc = mode === void 0 ? !this.cc : mode;
      this.$.loader.setCC(this.cc);
    },
    setVolume: function setVolume(value) {
      this.volume = null !== value ? value : 70;
      this.__media.setVolume(this.volume);
      this.muted = 0 === this.volume;
    },
    setPlaybackRate: function setPlaybackRate(value) {
      value = null !== value ? value : 1;
      this.__media.setPlaybackRate(value);
    },
    toggleAutoplay: function toggleAutoplay(mode) {
      if (!this.isYoutube) {
        this.autoplay = mode === void 0 ? !this.muted : mode;
        this.__media.setAutoplay(this.autoplay);
      }
    },
    toggleLoop: function toggleLoop(mode) {
      if (!this.isYoutube) {
        this.loop = mode === void 0 ? !this.loop : mode;
        this.__media.setLoop(this.loop);
      }
    },
    toggleMute: function toggleMute(mode) {
      this.muted = mode === void 0 ? !this.muted : mode;
      this.__volume = this.muted ? 0 : _Mathmax(this.volume, 10);
      this.__media.setMute(this.muted);
    },
    toggleSticky: function toggleSticky(mode) {
      mode = mode === void 0 ? !this.sticky : mode;
      this.sticky = mode;
      this.fire("player-sticky", this);
    },
    toggleTranscript: function toggleTranscript(mode) {
      mode = mode === void 0 ? this.hideTranscript : mode;
      this.hideTranscript = !mode;
      if (this.$.transcript !== void 0 && null !== this.$.transcript) {
        this.fire("transcript-toggle", this);
        this.$.transcript.toggleHidden(this.hideTranscript);
      }
    },
    selectTrack: function selectTrack(index) {
      this.$.loader.selectTrack(index);
      this.$.transcript.setActiveTranscript(index);
    },
    _getMediaCaption: function _getMediaCaption(
      audioOnly,
      audioLabel,
      mediaTitle
    ) {
      var hasMediaTitle =
        mediaTitle !== void 0 && null !== mediaTitle && "" !== mediaTitle;
      if (audioOnly && hasMediaTitle) {
        return mediaTitle + " (" + audioLabel + ")";
      } else if (audioOnly) {
        return audioLabel;
      } else if (hasMediaTitle) {
        return mediaTitle;
      } else {
        return null;
      }
    },
    _getPrintCaption: function _getPrintCaption(
      audioOnly,
      audioLabel,
      videoLabel,
      mediaTitle
    ) {
      var hasMediaTitle =
        mediaTitle !== void 0 && null !== mediaTitle && "" !== mediaTitle;
      if (audioOnly && hasMediaTitle) {
        return mediaTitle + " (" + audioLabel + ")";
      } else if (audioOnly) {
        return audioLabel;
      } else if (hasMediaTitle) {
        return mediaTitle + " (" + videoLabel + ")";
      } else {
        return videoLabel;
      }
    },
    _getTrackData: function _getTrackData() {
      var root = this,
        media = root.$.loader.media,
        tdata = [];
      root.hasTranscript = !root.standAlone;
      for (
        var _loop = function(i) {
            if (null !== media.textTracks[i]) {
              var track = media.textTracks[i],
                tidata = {},
                loaded = track.cues !== void 0,
                label = track.label,
                lang = track.language,
                text =
                  label !== void 0
                    ? label
                    : lang !== void 0
                      ? lang
                      : "Track " + i,
                loadCueData = setInterval(function() {
                  track.mode = "showing";
                  if (track.cues !== void 0 && 0 < track.cues.length) {
                    track.mode = "hidden";
                    getCueData();
                    clearInterval(loadCueData);
                  }
                }, 1),
                getCueData = function() {
                  track.mode = "hidden";
                  var cues = Object.keys(track.cues).map(function(key) {
                    return {
                      order:
                        "" !== track.cues[key].id ? track.cues[key].id : key,
                      seek: track.cues[key].startTime,
                      seekEnd: track.cues[key].endTime,
                      start: root._getHHMMSS(
                        track.cues[key].startTime,
                        root.media.duration
                      ),
                      end: root._getHHMMSS(
                        track.cues[key].endTime,
                        root.media.duration
                      ),
                      text: track.cues[key].text
                    };
                  });
                  tidata = { text: text, language: lang, value: i, cues: cues };
                  tdata.push(tidata);
                  root.set("tracks", tdata);
                  root.$.controls.setTracks(tdata);
                  root.$.transcript.setTracks(tdata);
                  root.selectTrack(track.default ? i : 0);
                  track.oncuechange = function(e) {
                    root.$.transcript.setActiveCues(
                      Object.keys(e.currentTarget.activeCues).map(function(
                        key
                      ) {
                        return e.currentTarget.activeCues[key].id;
                      })
                    );
                  };
                };
            }
          },
          i = 0;
        i < media.textTracks.length;
        i++
      ) {
        _loop(i);
      }
      if (0 < media.textTracks.length) {
        root.hasCaptions = !0;
      } else {
        root.standAlone = !0;
      }
      if (
        !root.standAlone &&
        root.$.transcript !== void 0 &&
        null !== root.$.transcript
      ) {
        root.$.transcript.addEventListener("cue-seek", function(e) {
          root.__resumePlaying = root.__playing;
          root.seek(e.detail.cue.seek);
        });
      }
    },
    _onControlsChanged: function _onControlsChanged(e) {
      var root = this,
        action = e.detail.label !== void 0 ? e.detail.label : e.detail.id;
      if ("backward" === action || action === root.rewindLabel) {
        root.rewind(root.__duration / 20);
      } else if (
        "closed captions" === action ||
        "captions" === action ||
        action === root.captionsLabel ||
        action === root.captionsMenuLabel
      ) {
        root.toggleCC();
      } else if (
        "transcript" === action ||
        "transcript-toggle" === action ||
        action === root.transcriptLabel ||
        action === root.transcriptMenuLabel
      ) {
        root.toggleTranscript();
      } else if ("tracks" === e.detail.id) {
        if ("" === e.detail.value) {
          root.toggleCC(!1);
        } else {
          root.toggleCC(!0);
          root.selectTrack(e.detail.value);
        }
      } else if ("forward" === action || action === root.forwardLabel) {
        root.forward(root.__duration / 20);
      } else if ("full screen" === action || action === root.fullscreenLabel) {
        this.toggleTranscript(this.fullscreen);
        screenfull.toggle(root.$.outerplayer);
      } else if ("loop" === action || action === root.loopLabel) {
        root.toggleLoop();
      } else if (
        "mute" === action ||
        "unmute" === action ||
        action === root.muteLabel ||
        action === root.unmuteLabel
      ) {
        root.toggleMute();
      } else if ("pause" === action || action === root.pauseLabel) {
        root.pause();
      } else if ("play" === action || action === root.playLabel) {
        root.play();
      } else if ("restart" === action || action === root.restartLabel) {
        root.seek(0);
        root.play();
      } else if ("speed" === action || action === root.speedLabel) {
        root.setPlaybackRate(e.detail.value);
      } else if ("volume" === action || action === root.volumeLabel) {
        root.setVolume(e.detail.value);
      }
    }
  });
});
