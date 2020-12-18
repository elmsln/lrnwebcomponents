!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports,require("@lrnwebcomponents/chartist-render/chartist-render.js"),require("@polymer/iron-flex-layout/iron-flex-layout.js"),require("@polymer/app-layout/app-toolbar/app-toolbar.js"),require("@polymer/app-layout/app-header/app-header.js"),require("@polymer/app-layout/app-drawer/app-drawer.js"),require("@lrnwebcomponents/responsive-grid/lib/responsive-grid-col.js"),require("@lrnwebcomponents/responsive-grid/lib/responsive-grid-row.js"),require("@polymer/polymer/polymer-element.js"),require("@polymer/polymer/lib/mixins/mutable-data.js"),require("@lrnwebcomponents/utils/utils.js"),require("@lrnwebcomponents/simple-toast/simple-toast.js"),require("@polymer/iron-ajax/iron-ajax.js"),require("@lrnwebcomponents/simple-colors/lib/simple-colors-polymer.js"),require("@vaadin/vaadin-split-layout/vaadin-split-layout.js"),require("@lrnwebcomponents/multiple-choice/multiple-choice.js"),require("@polymer/paper-dialog/paper-dialog.js"),require("lit-element/lit-element.js"),require("@lrnwebcomponents/simple-icon/simple-icon.js"),require("@lrnwebcomponents/simple-icon/lib/simple-icons.js")):"function"==typeof define&&define.amd?define(["exports","@lrnwebcomponents/chartist-render/chartist-render.js","@polymer/iron-flex-layout/iron-flex-layout.js","@polymer/app-layout/app-toolbar/app-toolbar.js","@polymer/app-layout/app-header/app-header.js","@polymer/app-layout/app-drawer/app-drawer.js","@lrnwebcomponents/responsive-grid/lib/responsive-grid-col.js","@lrnwebcomponents/responsive-grid/lib/responsive-grid-row.js","@polymer/polymer/polymer-element.js","@polymer/polymer/lib/mixins/mutable-data.js","@lrnwebcomponents/utils/utils.js","@lrnwebcomponents/simple-toast/simple-toast.js","@polymer/iron-ajax/iron-ajax.js","@lrnwebcomponents/simple-colors/lib/simple-colors-polymer.js","@vaadin/vaadin-split-layout/vaadin-split-layout.js","@lrnwebcomponents/multiple-choice/multiple-choice.js","@polymer/paper-dialog/paper-dialog.js","lit-element/lit-element.js","@lrnwebcomponents/simple-icon/simple-icon.js","@lrnwebcomponents/simple-icon/lib/simple-icons.js"],e):e((t=t||self).GameShowQuiz={},null,null,null,null,null,null,null,t.polymerElement_js,t.mutableData_js,t.utils_js,null,null,null,null,null,null,t.litElement_js)}(this,function(t,e,n,i,o,a,s,r,l,d,c,p,u,h,m,g,b,y){"use strict";function v(t){return(v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function f(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function w(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function _(t,e,n){return e&&w(t.prototype,e),n&&w(t,n),t}function x(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&k(t,e)}function q(t){return(q=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function k(t,e){return(k=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function j(t,e){return!e||"object"!=typeof e&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function S(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}();return function(){var n,i=q(t);if(e){var o=q(this).constructor;n=Reflect.construct(i,arguments,o)}else n=i.apply(this,arguments);return j(this,n)}}function T(t,e,n){return(T="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var i=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=q(t)););return t}(t,e);if(i){var o=Object.getOwnPropertyDescriptor(i,e);return o.get?o.get.call(n):o.value}})(t,e,n||t)}function D(t,e){return e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}function R(){var t=D(["\n      <paper-dialog modal>\n        <h2>",'</h2>\n        <div class="content"><slot name="content"></slot></div>\n        <div class="buttons"><slot name="buttons"></slot></div>\n      </paper-dialog>\n    ']);return R=function(){return t},t}function E(){var t=D(["\n        :host {\n          display: block;\n        }\n        paper-dialog:not(:defined) {\n          display: none;\n        }\n        paper-dialog {\n          min-width: 60%;\n          top: 2%;\n          bottom: 2%;\n          margin: 0;\n          padding: 0;\n          left: 8%;\n          right: 8%;\n          position: fixed;\n          overflow: hidden;\n        }\n        .content {\n          font-size: 16px;\n          overflow: scroll;\n          min-height: 60vh;\n          height: 80vh;\n          margin: 0;\n          padding: 0;\n        }\n        h2 {\n          font-size: 24px;\n          background-color: var(--game-show-bg-color);\n          color: var(--game-show-text-color);\n          margin: 0;\n          padding: 8px;\n          text-align: center;\n        }\n        .buttons {\n          font-size: 20px;\n          font-weight: bold;\n          background-color: var(--game-show-bg-color);\n          bottom: 0;\n          position: absolute;\n          left: 0;\n          right: 0;\n        }\n        .buttons ::slotted(*) {\n          width: 50%;\n          margin: 0 auto;\n          color: var(--game-show-bg-color);\n          background-color: var(--game-show-text-color);\n        }\n        .buttons ::slotted(*[disabled]) {\n          background: #eaeaea;\n          color: #a8a8a8;\n        }\n        .buttons ::slotted(#continue) {\n          color: var(--simple-colors-default-theme-blue-11);\n          background-color: var(--simple-colors-default-theme-blue-1);\n        }\n        @media screen and (max-width: 600px) {\n          paper-dialog {\n            top: 0;\n            bottom: 0;\n            left: 0;\n            right: 0;\n          }\n          h2 {\n            font-size: 20px;\n          }\n          .buttons {\n            font-size: 12px;\n          }\n          .buttons ::slotted(*) {\n            width: 100%;\n          }\n          .content {\n            font-size: 12px;\n          }\n        }\n      "]);return E=function(){return t},t}var B=function(t){x(n,y.LitElement);var e=S(n);function n(){return f(this,n),e.call(this)}return _(n,null,[{key:"styles",get:function(){return[y.css(E())]}},{key:"tag",get:function(){return"game-show-quiz-modal"}},{key:"properties",get:function(){return{title:{type:String}}}}]),_(n,[{key:"render",value:function(){return y.html(R(),this.title)}},{key:"toggle",value:function(){this.shadowRoot.querySelector("paper-dialog").toggle(),setTimeout(function(){var t=document.createEvent("UIEvents");t.initUIEvent("resize",!0,!1,window,0),window.dispatchEvent(t)},100)}}]),n}();function A(){var t=D(['\n      <style>\n        :host {\n          display: block;\n          --game-show-bg-color: var(--simple-colors-default-theme-blue-11);\n          --game-show-text-color: var(--simple-colors-default-theme-blue-1);\n        }\n        chartist-render#piechart {\n          width: 300px;\n          height: 300px;\n          display: inline-block;\n        }\n        chartist-render.mini-chart {\n          width: 132px;\n          height: 132px;\n          display: inline-block;\n          --chartist-color-1: green;\n          --chartist-color-2: red;\n        }\n        app-toolbar {\n          background-color: var(--game-show-bg-color);\n          color: var(--game-show-text-color);\n          font-size: 24px;\n          display: flex;\n        }\n        simple-icon {\n          display: inline-block;\n        }\n        table {\n          width: 90%;\n        }\n        tr {\n          outline: 1px solid black;\n        }\n        td {\n          border-left: 1px solid black;\n          padding: 16px;\n          text-align: center;\n        }\n        .chart-row td {\n          padding: 0;\n        }\n\n        button {\n          text-transform: none;\n          display: block;\n        }\n        #helpbutton {\n          text-align: center;\n          padding: 8px;\n          font-size: 12px;\n          vertical-align: middle;\n          display: inline-flex;\n        }\n        button + [main-title] {\n          margin-left: 24px;\n          display: inline-flex;\n        }\n        app-header {\n          color: var(--game-show-text-color);\n          --app-header-background-rear-layer: {\n            background-color: #ef6c00;\n          }\n        }\n        responsive-grid-row {\n          --responsive-grid-row-inner-margin-left: 0;\n          --responsive-grid-row-inner-margin-right: 0;\n        }\n        responsive-grid-col {\n          --responsive-grid-col-inner-padding-left: 0;\n          --responsive-grid-col-inner-padding-right: 0;\n        }\n        #contentcontainer {\n          margin: 0 auto;\n          font-size: 16px;\n        }\n        .grid-button {\n          width: 100%;\n          height: 80px;\n          font-size: 24px;\n          text-align: center;\n          min-width: unset;\n          padding: 0;\n          margin: 0;\n          align-items: center;\n          display: flex;\n        }\n        .status-icon {\n          border-radius: 50%;\n          width: 48px;\n          height: 48px;\n          opacity: 0.5;\n          right: 0;\n          bottom: 0;\n          position: absolute;\n        }\n        .correct {\n          color: var(--simple-colors-default-theme-green-6);\n          background-color: var(--simple-colors-default-theme-green-11);\n        }\n        .incorrect {\n          color: var(--simple-colors-default-theme-red-6);\n          background-color: var(--simple-colors-default-theme-red-11);\n        }\n        .row-0 button[disabled] {\n          font-weight: bold;\n          font-size: 16px;\n        }\n        .grid-button[data-type="bonus"] {\n          display: inline-flex;\n          position: absolute;\n          outline: 1px solid #dddddd;\n        }\n        .grid-button[data-type="bonus"][data-display-points="1"] {\n          height: 320px;\n        }\n        .grid-button[data-type="bonus"][data-display-points="2"] {\n          height: 160px;\n        }\n        @media screen and (max-width: 600px) {\n          app-toolbar {\n            font-size: 14px;\n          }\n          button {\n            padding: 0;\n            margin: 0;\n            width: 16px;\n            height: 16px;\n            min-width: unset;\n          }\n          game-show-quiz-modal button {\n            height: 48px;\n            width: 100%;\n          }\n          .grid-button {\n            font-size: 14px;\n          }\n          .status-icon {\n            width: 24px;\n            height: 24px;\n            opacity: 1;\n            display: inline-block;\n          }\n          .row-0 button[disabled] {\n            font-weight: bold;\n            font-size: 10px;\n          }\n        }\n      </style>\n      <app-header>\n        <app-toolbar>\n          <button id="scorebutton" on-click="scoreBoardToggle">\n            <simple-icon icon="editor:pie-chart"></simple-icon\n            ><label for="scorebutton">Score board</label>\n          </button>\n          <div main-title>[[title]]</div>\n          <button id="helpbutton" on-click="directionsToggle">\n            <simple-icon icon="help"></simple-icon\n            ><label for="helpbutton">Directions</label>\n          </button>\n        </app-toolbar>\n      </app-header>\n      <div id="contentcontainer">\n        <div style="font-size: 24px;" hidden$="[[!remainingAttempts]]">\n          Points Remaining to Attempt:\n          <strong>[[remainingAttempts]]</strong>\n        </div>\n        <template is="dom-repeat" items="[[gameBoard]]" as="row" mutable-data>\n          <responsive-grid-row gutter="0" class$="row row-[[index]]">\n            <template\n              is="dom-repeat"\n              items="[[row.cols]]"\n              as="col"\n              mutable-data\n            >\n              <responsive-grid-col xl="2" lg="2" md="2" sm="2" xs="2">\n                <button\n                  class="grid-button"\n                  raised="[[!col.notRaised]]"\n                  data-question-uuid$="[[col.uuid]]"\n                  data-value$="[[col.points]]"\n                  data-display-points$="[[col.displayPoints]]"\n                  data-is-bonus$="[[col.isBonus]]"\n                  data-type$="[[col.type]]"\n                  disabled$="[[col.disabled]]"\n                >\n                  [[col.title]]<br />[[col.displayPoints]]\n                </button>\n              </responsive-grid-col>\n            </template>\n          </responsive-grid-row>\n        </template>\n      </div>\n      <game-show-quiz-modal id="scoreboard" title="Score board">\n        <div slot="content">\n          <div style="padding: 32px;">\n            <chartist-render\n              id="piechart"\n              chart-title="Breakdown of attempts"\n              data="[[attemptsData.overall]]"\n              type="pie"\n              scale="ct-square"\n            >\n            </chartist-render>\n            <table style="margin: 16px auto;">\n              <tbody>\n                <tr>\n                  <th></th>\n                  <th>Slide ID</th>\n                  <th>Terms</th>\n                  <th>Reading</th>\n                  <th>Lecture</th>\n                  <th>Total</th>\n                </tr>\n                <tr>\n                  <th>Points Earned</th>\n                  <td>[[points.slideid.earned]]</td>\n                  <td>[[points.terminology.earned]]</td>\n                  <td>[[points.reading.earned]]</td>\n                  <td>[[points.lecture.earned]]</td>\n                  <td>[[points.total.earned]]</td>\n                </tr>\n                <tr>\n                  <th>Points Attempted</th>\n                  <td>[[points.slideid.attempted]]</td>\n                  <td>[[points.terminology.attempted]]</td>\n                  <td>[[points.reading.attempted]]</td>\n                  <td>[[points.lecture.attempted]]</td>\n                  <td>[[points.total.attempted]]</td>\n                </tr>\n                <tr>\n                  <th>Category Percentage</th>\n                  <td>[[points.slideid.percent]]</td>\n                  <td>[[points.terminology.percent]]</td>\n                  <td>[[points.reading.percent]]</td>\n                  <td>[[points.lecture.percent]]</td>\n                  <td>[[points.total.percent]]</td>\n                </tr>\n                <tr class="chart-row">\n                  <th>Pie chart</th>\n                  <td>\n                    <chartist-render\n                      class="mini-chart"\n                      chart-title="Slide ID percentage"\n                      data="[[attemptsData.slideid]]"\n                      type="pie"\n                      scale="ct-square"\n                    ></chartist-render>\n                  </td>\n                  <td>\n                    <chartist-render\n                      class="mini-chart"\n                      chart-title="Terminology percentage"\n                      data="[[attemptsData.terminology]]"\n                      type="pie"\n                      scale="ct-square"\n                    ></chartist-render>\n                  </td>\n                  <td>\n                    <chartist-render\n                      class="mini-chart"\n                      chart-title="Reading percentage"\n                      data="[[attemptsData.reading]]"\n                      type="pie"\n                      scale="ct-square"\n                    ></chartist-render>\n                  </td>\n                  <td>\n                    <chartist-render\n                      class="mini-chart"\n                      chart-title="Lecture percentage"\n                      data="[[attemptsData.lecture]]"\n                      type="pie"\n                      scale="ct-square"\n                    ></chartist-render>\n                  </td>\n                  <td>\n                    <chartist-render\n                      class="mini-chart"\n                      chart-title="Total percentage"\n                      data="[[attemptsData.total]]"\n                      type="pie"\n                      scale="ct-square"\n                    ></chartist-render>\n                  </td>\n                </tr>\n              </tbody>\n            </table>\n            <div style="font-size: 24px;" hidden$="[[!remainingAttempts]]">\n              Points Remaining to Attempt:\n              <strong>[[remainingAttempts]]</strong>\n            </div>\n          </div>\n        </div>\n        <button\n          aria-label="Close score board and return to game"\n          slot="buttons"\n          id="dismiss"\n          dialog-confirm\n          raised\n        >\n          Return to game board\n        </button>\n      </game-show-quiz-modal>\n      <game-show-quiz-modal id="directions" title="[[directionsTitle]]">\n        <div slot="content"><slot></slot></div>\n        <button\n          aria-label="Close directions dialog and return to game"\n          slot="buttons"\n          id="dismiss"\n          dialog-confirm\n          raised\n        >\n          Good luck!\n        </button>\n      </game-show-quiz-modal>\n      <game-show-quiz-modal\n        id="dialog"\n        title="[[questionTitle]] [[__activeQuestionDetails.points]] point, [[__activeQuestionDetails.type]] question."\n      >\n        <vaadin-split-layout slot="content" style="height:80vh;">\n          <div id="col1" style="width:70%;min-width: 30%;">\n            <img\n              style="min-width:100px; width:100%; min-height:50vh; height:75vh;"\n              loading="lazy"\n              src$="[[activeQuestion.image]]"\n            />\n          </div>\n          <div id="col2" style="width:30%;min-width: 30%;">\n            <multiple-choice\n              randomize\n              single-option\n              id="question"\n              hide-buttons\n              title="[[activeQuestion.title]]"\n              answers="[[activeQuestion.data]]"\n            ></multiple-choice>\n            <div hidden$="[[!activeQuestion.wrong]]" aria-hidden="true">\n              <h3>Feedback</h3>\n              <p>[[activeQuestion.feedback]]</p>\n            </div>\n          </div>\n        </vaadin-split-layout>\n        <button\n          slot="buttons"\n          hidden$="[[activeQuestion.submitted]]"\n          id="submit"\n          raised=""\n          disabled$="[[__submitDisabled]]"\n        >\n          Submit answer\n          <simple-icon\n            hidden$="[[__submitDisabled]]"\n            icon="icons:touch-app"\n          ></simple-icon>\n        </button>\n        <button\n          slot="buttons"\n          id="continue"\n          hidden$="[[!activeQuestion.submitted]]"\n          dialog-confirm\n          raised\n          aria-disabled$="[[activeQuestion.submitted]]"\n          aria-label="Return to game board"\n        >\n          Continue <simple-icon icon="icons:arrow-forward"></simple-icon>\n        </button>\n      </game-show-quiz-modal>\n      <iron-ajax\n        auto\n        id="gamedata"\n        url="[[gameData]]"\n        handle-as="json"\n        last-response="{{gameBoardData}}"\n      ></iron-ajax>\n      <iron-ajax\n        auto\n        id="gamedirections"\n        url="[[gameDirectionsData]]"\n        handle-as="text"\n        last-response="{{gameDirections}}"\n      ></iron-ajax>\n      <iron-ajax id="gamebackend" hand-as="json"></iron-ajax>\n    ']);return A=function(){return t},t}window.customElements.define(B.tag,B);var P=function(t){x(n,d.MutableData(l.PolymerElement));var e=S(n);function n(){var t;return f(this,n),t=e.call(this),window.SimpleToast.requestAvailability(),t}return _(n,null,[{key:"tag",get:function(){return"game-show-quiz"}}]),_(n,[{key:"_gameDirectionsChanged",value:function(t){if(t){c.wipeSlot(this);var e=document.createElement("div");e.style="padding: 16px;",e.innerHTML=t,this.appendChild(e.cloneNode(!0))}}},{key:"directionsToggle",value:function(t){this.shadowRoot.querySelector("#directions").toggle()}},{key:"scoreBoardToggle",value:function(t){this.shadowRoot.querySelector("#scoreboard").toggle()}},{key:"continueGameTap",value:function(t){"undefined"!==v(this.__activeTap)&&null!=this.__activeTap.parentNode.nextElementSibling.firstElementChild&&(this.__activeTap.parentNode.nextElementSibling.firstElementChild.focus(),delete this.__activeTap)}},{key:"registerTap",value:function(t){var e=!0;for(var n in this.shadowRoot.querySelector("#question").answers)this.shadowRoot.querySelector("#question").answers[n].userGuess&&(e=!1);this.__submitDisabled=e}},{key:"submitAnswer",value:function(t){var e=this,n=this.attemptsData;this.set("activeQuestion.submitted",!0),this.notifyPath("activeQuestion.submitted"),this.shadowRoot.querySelector("#continue").focus(),this.__activeTap.disabled=!0;var i=document.createElement("iron-icon");i.classList.add("status-icon");var o=0;if("bonus"!=this.__activeType&&!this.__activeQuestionDetails.isBonus){var a=parseInt(this.points[this.__activeType].attempted)+parseInt(this.__activeValue);this.set("points."+this.__activeType+".attempted",a),this.notifyPath("points."+this.__activeType+".attempted"),o=parseInt(this.points.total.attempted)+parseInt(this.__activeValue),this.set("points.total.attempted",o),this.notifyPath("points.total.attempted"),this.remainingAttempts=this.remainingAttempts-parseInt(this.__activeValue)}if(!this.__activeQuestionDetails.isBonus){var s=0,r=100,l=0;for(var d in this._gameBoardFlat)!this._gameBoardFlat[d].isBonus&&this._gameBoardFlat[d].question.submitted&&this._gameBoardFlat[d].points===this.__activeQuestionDetails.points&&(s+=this.__activeQuestionDetails.points);switch(this.__activeQuestionDetails.points){case 1:r=16,l=1;break;case 2:r=16,l=5;break;case 3:r=12,l=7}s===r&&this.shadowRoot.querySelectorAll('responsive-grid-col button[data-type="bonus"][data-display-points="'+this.__activeQuestionDetails.points+'"]').forEach(function(t){t.removeAttribute("disabled");var n=t.getAttribute("data-question-uuid");e.gameBoard[l].cols.find(function(t){return t.uuid==n}).disabled=!1,e._gameBoardFlat[n].disabled=!1})}if(11!=this.points[this.__activeType].attempted||this.__activeQuestionDetails.isBonus||this.shadowRoot.querySelectorAll('responsive-grid-col button[data-is-bonus][data-type="'+this.__activeType+'"]').forEach(function(t){t.removeAttribute("disabled");var n=t.getAttribute("data-question-uuid");e.gameBoard[e.gameBoard.length-1].cols.find(function(t){return t.uuid==n}).disabled=!1,e._gameBoardFlat[n].disabled=!1}),this.shadowRoot.querySelector("#question").checkAnswers()){var c=new CustomEvent("simple-toast-show",{bubbles:!0,cancelable:!0,composed:!0,detail:{text:"Correct!",duration:4e3}});this.dispatchEvent(c);var p=parseInt(this.points[this.__activeType].earned)+parseInt(this.__activeValue);this.set("points."+this.__activeType+".earned",p),this.notifyPath("points."+this.__activeType+".earned"),i.icon="icons:check-circle",i.classList.add("correct"),o=parseInt(this.points.total.earned)+parseInt(this.__activeValue),this.set("points.total.earned",o),this.notifyPath("points.total.earned")}else{this.set("activeQuestion.wrong",!0);var u=new CustomEvent("simple-toast-show",{bubbles:!0,cancelable:!0,composed:!0,detail:{text:":( You got it wrong",duration:4e3}});this.dispatchEvent(u),i.icon="icons:cancel",i.classList.add("incorrect")}var h=(parseInt(this.points[this.__activeType].earned)/parseInt(this.points[this.__activeType].attempted)*100).toFixed(1);if(this.set("points."+this.__activeType+".percent",h),this.notifyPath("points."+this.__activeType+".percent"),o=(parseInt(this.points.total.earned)/parseInt(this.points.total.attempted)*100).toFixed(1),this.set("points.total.percent",o),this.notifyPath("points.total.percent"),n[this.__activeType].series=[this.points[this.__activeType].earned,this.points[this.__activeType].attempted-this.points[this.__activeType].earned],this.points[this.__activeType].attempted<this.points[this.__activeType].earned&&(n[this.__activeType].series=[this.points[this.__activeType].earned,0]),n.total.series=[this.points.total.earned,this.points.total.attempted-this.points.total.earned],this.points.total.attempted<this.points.total.earned&&(n.total.series=[this.points.total.earned,0]),n.overall.series=[this.points.slideid.attempted,this.points.terminology.attempted,this.points.reading.attempted,this.points.lecture.attempted],this.set("attemptsData",{}),this.set("attemptsData",n),this.__activeTap.appendChild(i),2===this.remainingAttempts&&this.shadowRoot.querySelectorAll("responsive-grid-col button[data-value='3']:not([disabled]):not([data-is-bonus])").forEach(function(t){t.setAttribute("disabled","disabled")}),1===this.remainingAttempts&&(this.shadowRoot.querySelectorAll("responsive-grid-col button[data-value='2']:not([disabled]):not([data-is-bonus])").forEach(function(t){t.setAttribute("disabled","disabled")}),this.shadowRoot.querySelectorAll('responsive-grid-col button[data-value="3"]:not([disabled]):not([data-is-bonus])').forEach(function(t){t.setAttribute("disabled","disabled")})),this.remainingAttempts<=0&&(this.shadowRoot.querySelectorAll("responsive-grid-col button:not([disabled]):not([data-is-bonus])").forEach(function(t){t.setAttribute("disabled","disabled")}),this.remainingAttempts=0,0===this.shadowRoot.querySelectorAll("responsive-grid-col button[data-is-bonus]:not([disabled])").length)){this.shadowRoot.querySelector("#dialog").toggle(),this.shadowRoot.querySelector("#scoreboard").title="Your final score for the game",this.scoreBoardToggle({});var m=new CustomEvent("simple-toast-show",{bubbles:!0,cancelable:!0,composed:!0,detail:{text:"Game over!",duration:5e3}});this.dispatchEvent(m),this.dispatchEvent(new CustomEvent("game-show-quiz-game-over",{bubbles:!0,cancelable:!0,composed:!0,detail:{game:this.title,score:this.points.total.earned}})),this.gameScoreBoardBackend&&(this.shadowRoot.querySelector("#gamebackend").url="".concat(this.gameScoreBoardBackend,"/").concat(this.title,"/").concat(this.points.total.earned,"?token=").concat(this.token),this.shadowRoot.querySelector("#gamebackend").generateRequest())}}},{key:"_gameBoardTap",value:function(t){var e=this,n=t.target;if(null!=n.getAttribute("data-question-uuid")){this.__submitDisabled=!0,this.__activeTap=n,this.__activeType=n.getAttribute("data-type"),this.__activeValue=n.getAttribute("data-value");var i=n.getAttribute("data-question-uuid");this.__activeQuestionDetails=this._gameBoardFlat[i],this.set("activeQuestion",{}),this.set("activeQuestion",this.__activeQuestionDetails.question),this.notifyPath("activeQuestion.*"),this.notifyPath("activeQuestion.data.*"),this.shadowRoot.querySelector("#col1").style.flex="",this.shadowRoot.querySelector("#col2").style.flex="",this.shadowRoot.querySelector("#question").resetAnswers(),setTimeout(function(){e.shadowRoot.querySelector("#dialog").toggle()},100)}}},{key:"_gameBoardDataChanged",value:function(t,e){var n=this;if(t){this._gameBoardFlat={};var i=[{cols:[{title:"Slide id",points:"",notRaised:!0,disabled:!0},{title:"Terms",points:"",notRaised:!0,disabled:!0},{title:"Reading",points:"",notRaised:!0,disabled:!0},{title:"Lecture",points:"",notRaised:!0,disabled:!0},{title:"Bonus",points:"",notRaised:!0,disabled:!0}]}],o={},a=Object.assign({},t),s=Object.keys(a),r=0,l={1:4,2:2,3:1,bonus:1};for(var d in l)for(r=0;r<l[d];){for(var c in r++,o={cols:[]},s){var p=a[s[c]][d];if(p&&p.questions.length>0){var u=Math.floor(Math.random()*p.questions.length),h={uuid:this.generateUUID(),type:p.type,title:p.title,points:p.points,displayPoints:p.points,isBonus:!1,question:Object.assign({},p.questions[u])};a[s[c]][d].questions.splice(u,1),"bonus"===s[c]?(a[s[c]][d].questions=[],h.disabled=!0,h.isBonus=!0,h.points=d,h.displayPoints=d):"bonus"===d&&(h.disabled=!0,h.isBonus=!0),o.cols.push(h),this._gameBoardFlat[h.uuid]=h}}i.push(o)}this.set("gameBoard",[]),setTimeout(function(){n.set("gameBoard",i),n.notifyPath("gameBoard.*")},100)}}},{key:"generateUUID",value:function(){return"item-sss-ss-ss".replace(/s/g,this._uuidPart)}},{key:"_uuidPart",value:function(){return Math.floor(65536*(1+Math.random())).toString(16).substring(1)}},{key:"resetFocus",value:function(t){this.shadowRoot.querySelector("#helpbutton").focus()}},{key:"connectedCallback",value:function(){var t=this;T(q(n.prototype),"connectedCallback",this).call(this),setTimeout(function(){window.Drupal&&window.Drupal.settings&&window.Drupal.settings.elmslnCore&&window.Drupal.settings.elmslnCore.uname&&(t.gameScoreBoardBackend=window.Drupal.settings.basePath+"apps/game-show-scoreboard/save-score",t.token=btoa(window.Drupal.settings.elmslnCore.uname),t.gameDirectionsData=window.Drupal.settings.basePath+"apps/game-show-scoreboard/load-directions"),t.shadowRoot.querySelector("#dismiss").addEventListener("click",t.resetFocus.bind(t)),t.shadowRoot.querySelector("#contentcontainer").addEventListener("click",t._gameBoardTap.bind(t)),t.shadowRoot.querySelector("#submit").addEventListener("click",t.submitAnswer.bind(t)),t.shadowRoot.querySelector("#continue").addEventListener("click",t.continueGameTap.bind(t)),t.shadowRoot.querySelector("#question").addEventListener("click",t.registerTap.bind(t))},0)}},{key:"disconnectedCallback",value:function(){this.shadowRoot.querySelector("#dismiss").removeEventListener("click",this.resetFocus.bind(this)),this.shadowRoot.querySelector("#contentcontainer").removeEventListener("click",this._gameBoardTap.bind(this)),this.shadowRoot.querySelector("#submit").removeEventListener("click",this.submitAnswer.bind(this)),this.shadowRoot.querySelector("#continue").removeEventListener("click",this.continueGameTap.bind(this)),this.shadowRoot.querySelector("#question").removeEventListener("click",this.registerTap.bind(this)),T(q(n.prototype),"disconnectedCallback",this).call(this)}}],[{key:"template",get:function(){return l.html(A())}},{key:"properties",get:function(){return{title:{type:String},gameDirectionsData:{type:String},gameDirections:{type:String,observer:"_gameDirectionsChanged"},token:{type:String},attemptsData:{type:Object,value:{overall:{labels:["Slide ID","Terminology","Reading","Lecture"],series:[0,0,0,0]},slideid:{labels:["Correct","Incorrect"],series:[0,0]},terminology:{labels:["Correct","Incorrect"],series:[0,0]},reading:{labels:["Correct","Incorrect"],series:[0,0]},lecture:{labels:["Correct","Incorrect"],series:[0,0]},bonus:{labels:["Correct","Incorrect"],series:[0,0]},total:{labels:["Correct","Incorrect"],series:[0,0]}}},points:{type:Object,value:{slideid:{attempted:0,earned:0,percent:0},terminology:{attempted:0,earned:0,percent:0},reading:{attempted:0,earned:0,percent:0},lecture:{attempted:0,earned:0,percent:0},bonus:{attempted:0,earned:0,percent:0},total:{attempted:0,earned:0,percent:0}}},remainingAttempts:{type:Number,value:30},directionsTitle:{type:String,value:"Directions"},questionTitle:{type:String,value:"Answer the following"},gameBoard:{type:Array},gameBoardData:{type:Object,observer:"_gameBoardDataChanged"},gameData:{type:String},gameScoreBoardBackend:{type:String},activeQuestion:{type:Object}}}},{key:"haxProperties",get:function(){return{canScale:!0,canPosition:!0,canEditSource:!0,gizmo:{title:"Game show",description:"Tweak the game show options",icon:"av:play-circle-filled",color:"grey",groups:["Education","Interactive"],handles:[],meta:{author:"ELMS:LN"}},settings:{configure:[{property:"title",title:"Title",description:"The title of the game",inputMethod:"textfield",icon:"editor:title"},{property:"gameData",title:"Source of the game data data",description:"The title of the game",inputMethod:"textfield",icon:"icons:link"}],advanced:[]},saveOptions:{unsetAttributes:["attempts-data","points","game-board","question-title","remaining-attempts"]}}}}]),n}();window.customElements.define(P.tag,P),t.GameShowQuiz=P,Object.defineProperty(t,"__esModule",{value:!0})});
