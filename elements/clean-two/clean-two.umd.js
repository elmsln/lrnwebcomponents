!function(n,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports,require("@lrnwebcomponents/haxcms-elements/lib/ui-components/site/site-search.js"),require("lit-element/lit-element.js"),require("@lrnwebcomponents/haxcms-elements/lib/core/HAXCMSLitElementTheme.js"),require("@lrnwebcomponents/haxcms-elements/lib/core/utils/HAXCMSThemeParts.js"),require("@lrnwebcomponents/haxcms-elements/lib/core/utils/HAXCMSMobileMenu.js"),require("@lrnwebcomponents/haxcms-elements/lib/core/haxcms-site-store.js"),require("mobx"),require("@lrnwebcomponents/simple-icon/simple-icon.js"),require("@lrnwebcomponents/simple-icon/lib/simple-icons.js"),require("@lrnwebcomponents/utils/utils.js")):"function"==typeof define&&define.amd?define(["exports","@lrnwebcomponents/haxcms-elements/lib/ui-components/site/site-search.js","lit-element/lit-element.js","@lrnwebcomponents/haxcms-elements/lib/core/HAXCMSLitElementTheme.js","@lrnwebcomponents/haxcms-elements/lib/core/utils/HAXCMSThemeParts.js","@lrnwebcomponents/haxcms-elements/lib/core/utils/HAXCMSMobileMenu.js","@lrnwebcomponents/haxcms-elements/lib/core/haxcms-site-store.js","mobx","@lrnwebcomponents/simple-icon/simple-icon.js","@lrnwebcomponents/simple-icon/lib/simple-icons.js","@lrnwebcomponents/utils/utils.js"],e):e((n="undefined"!=typeof globalThis?globalThis:n||self).CleanTwo={},n.$$0,n.litElement_js,n.HAXCMSLitElementTheme_js,n.HAXCMSThemeParts_js,n.HAXCMSMobileMenu_js,n.haxcmsSiteStore_js,n.mobx,null,null,n.utils_js)}(this,(function(n,e,t,i,o,r,a,s,l,c,p){"use strict";function d(n){if(n&&n.__esModule)return n;var e=Object.create(null);return n&&Object.keys(n).forEach((function(t){if("default"!==t){var i=Object.getOwnPropertyDescriptor(n,t);Object.defineProperty(e,t,i.get?i:{enumerable:!0,get:function(){return n[t]}})}})),e.default=n,Object.freeze(e)}var m,u,b,h,f=d(e);function x(n,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}function g(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function w(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,i)}return t}function y(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?w(Object(t),!0).forEach((function(e){g(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):w(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function v(n){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)})(n)}function k(n,e){return(k=Object.setPrototypeOf||function(n,e){return n.__proto__=e,n})(n,e)}function j(n,e){return!e||"object"!=typeof e&&"function"!=typeof e?function(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}(n):e}function O(n){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(n){return!1}}();return function(){var t,i=v(n);if(e){var o=v(this).constructor;t=Reflect.construct(i,arguments,o)}else t=i.apply(this,arguments);return j(this,t)}}function z(n,e,t){return(z="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(n,e,t){var i=function(n,e){for(;!Object.prototype.hasOwnProperty.call(n,e)&&null!==(n=v(n)););return n}(n,e);if(i){var o=Object.getOwnPropertyDescriptor(i,e);return o.get?o.get.call(t):o.value}})(n,e,t||n)}function _(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}function P(n){return function(n){if(Array.isArray(n))return C(n)}(n)||function(n){if("undefined"!=typeof Symbol&&null!=n[Symbol.iterator]||null!=n["@@iterator"])return Array.from(n)}(n)||function(n,e){if(!n)return;if("string"==typeof n)return C(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);"Object"===t&&n.constructor&&(t=n.constructor.name);if("Map"===t||"Set"===t)return Array.from(n);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return C(n,e)}(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function C(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,i=new Array(e);t<e;t++)i[t]=n[t];return i}var S=function(n){!function(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),e&&k(n,e)}(l,n);var e,i,o,r=O(l);function l(){var n;return function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,l),(n=r.call(this)).HAXCMSThemeSettings.autoScroll=!0,n.searchTerm="",n.__disposer=n.__disposer?n.__disposer:[],s.autorun((function(e){n.activeManifestIndex=s.toJS(a.store.activeManifestIndex),n.__disposer.push(e)})),s.autorun((function(e){a.store.activeItem&&a.store.activeItem.metadata&&a.store.activeItem.metadata.updated&&(n.pageTimestamp=s.toJS(a.store.activeItem.metadata.updated)),n.__disposer.push(e)})),n}return e=l,o=[{key:"styles",get:function(){return[].concat(P(z(v(l),"styles",this)),[t.css(h||(h=_(['\n        :host {\n          display: block;\n          font-size: 16px;\n          --haxcms-base-styles-body-font-size:16px;\n          --hax-base-styles-a-font-size: 16px;\n          --hax-base-styles-p-font-size: 16px;\n          --hax-base-styles-list-font-size: 16px;\n          --haxcms-base-styles-body-font-family: "Helvetica Neue",Helvetica,Arial,sans-serif\n          --haxcms-base-styles-body-line-height: 1.7;\n          --hax-base-styles-list-line-height: 1.7;\n          --hax-base-styles-p-line-height: 1.7;\n          --hax-base-styles-p-letter-spacing: .2px;\n          --haxcms-base-styles-body-letter-spacing : .2px;\n          --hax-base-styles-p-min-height: auto;\n          --hax-base-styles-list-max-width: auto;\n          --haxcms-base-styles-p-min-height: auto;\n          --hax-base-styles-list-padding-bottom: auto;\n          --hax-base-styles-h1-font-size: inherit;\n          --hax-base-styles-h2-font-size: inherit;\n          --hax-base-styles-h3-font-size: inherit;\n          --hax-base-styles-h4-font-size: inherit;\n          --hax-base-styles-h5-font-size: inherit;\n          --hax-base-styles-h6-font-size: inherit;\n          --simple-tooltip-background: #000000;\n          --simple-tooltip-opacity: 1;\n          --simple-tooltip-text-color: #ffffff;\n          --simple-tooltip-delay-in: 0;\n          --simple-tooltip-border-radius: 0;\n          --hax-base-styles-a-color-visited:  var(--haxcms-color, var(--simple-colors-default-theme-purple-7));\n          --hax-base-styles-a-color: var(--haxcms-color, var(--simple-colors-default-theme-purple-7));\n          --hax-base-styles-a-color-active: #000000;\n          --site-search-result-background-color: transparent;\n          --site-search-result-background-color-hover: #F5F5F5;\n          --site-search-link-color-hover: #252737;\n          --site-search-link-text-color: #252737;\n          --site-search-link-color: #252737;\n          --site-search-result-color: #252737;\n        }\n        .link-actions {\n          margin: 0;\n          display: block;\n          padding: 0;\n          border-top: 2px solid #E6ECF1;\n          margin-top: 24px;\n          align-items: center;\n          padding-top: 24px;\n          flex-direction: row;\n          -webkit-box-align: center;\n          -webkit-box-orient: horizontal;\n          -webkit-box-direction: normal;\n        }\n        .link-actions .inner {\n          width: auto;\n          margin: 0;\n          display: grid;\n          padding: 0;\n          -ms-grid-rows: auto;\n          grid-column-gap: 24px;\n          -ms-grid-columns: 1fr 1fr;\n          grid-template-rows: auto;\n          grid-template-areas: "previous next";\n          grid-template-columns: 1fr 1fr;\n        }\n        site-menu-button {\n          --site-menu-button-link-decoration: none;\n          --site-menu-button-button-hover-color: var(--haxcms-color, var(--simple-colors-default-theme-purple-7));\n          color: #242A31;\n          border: 1px solid #E6ECF1;\n          margin: 0;\n          display: block;\n          padding: 0;\n          position: relative;\n          align-self: stretch;\n          box-shadow: 0 3px 8px 0 rgba(116, 129, 141, 0.1);\n          transition: border 250ms ease;\n          align-items: center;\n          justify-self: stretch;\n          text-overflow: ellipsis;\n          border-radius: 3px;\n          flex-direction: row;\n          -moz-transition: border 250ms ease;\n          text-decoration: none;\n          background-color: #FFFFFF;\n          -webkit-box-align: center;\n          page-break-inside: avoid;\n          -ms-grid-row-align: stretch;\n          -webkit-box-orient: horizontal;\n          -webkit-transition: border 250ms ease;\n          -ms-grid-column-align: stretch;\n          -webkit-box-direction: normal;\n        }\n        replace-tag[with="site-git-corner"],\n        site-git-corner {\n          height: 40px;\n          width: 40px;\n          margin:0;\n          padding:0;\n          --site-git-corner-color: black;\n          --site-git-corner-background: transparent;\n          background-color: transparent;\n          color: black;\n        }\n        site-menu-button[edit-mode][disabled] {\n          display: block;\n        }\n        site-menu-button[type="prev"] {\n          grid-area: previous;\n        }\n        site-menu-button[type="next"] {\n          grid-area: next;\n        }\n        site-menu-button div.wrapper {\n          flex: 1;\n          margin: 0;\n          display: block;\n          padding: 16px;\n          text-overflow: ellipsis;\n          text-decoration: none;\n          font-size: 16px;\n          font-family: Content-font, Roboto, sans-serif;\n          font-weight: 500;\n          line-height: 1.5;\n          text-transform: none;\n        }\n        site-menu-button div .top {\n          font-size: 12px;\n          font-family: Content-font, Roboto, sans-serif;\n          font-weight: 400;\n          line-height: 1.625;\n          color: #444444;\n        }\n        simple-datetime {\n          color: #444444;\n        }\n        site-menu-button div .bottom {\n          font-size: 16px;\n          font-family: Content-font, Roboto, sans-serif;\n          font-weight: 500;\n          line-height: 1.5;\n        }\n        site-menu-button[type="next"] div {\n         text-align: left; \n        }\n        site-menu-button[type="prev"] div {\n         text-align: right; \n        }\n        site-active-title {\n          padding: 2px 0px;\n          flex-wrap: wrap;\n          align-items: baseline;\n          flex-direction: row;\n          -webkit-box-align: baseline;\n          -webkit-box-lines: multiple;\n          -webkit-box-orient: horizontal;\n          -webkit-box-direction: normal;\n          flex: auto;\n          margin: 0;\n          display: flex;\n          background-color: white;\n          --site-active-title-font-size: 22px;\n          --site-active-title-line-height: 22px;\n          font-size: 22px;\n          line-height: 22px;\n        }\n\n        .body-wrapper {\n          flex: 1;\n          height: auto;\n          min-height: 100vh;\n          font-size: 16px;\n          color: #3B454E;\n          background-color: #ffffff;\n          width: auto;\n          margin: 0 auto;\n          display: flex;\n          padding: 0;\n          transition: margin-bottom 250ms ease;\n          align-items: stretch;\n          -moz-transition: margin-bottom 250ms ease;\n          -webkit-box-align: stretch;\n          -webkit-transition: margin-bottom 250ms ease;\n        }\n        :host([is-logged-in][menu-open]) .body-wrapper {\n          margin-left: 48px;\n        }\n        :host([menu-open]) .body-wrapper .left-col {\n          display: -webkit-box;\n          display: -moz-box;\n          display: -ms-flexbox;\n          display: -webkit-flex;\n          display: flex;\n        }\n\n        :host([is-logged-in][menu-open]) .body-wrapper nav {\n          margin-left: 48px;\n        }\n        :host([is-logged-in][menu-open]) .body-wrapper .content-wrapper {\n          margin-left: 0;\n        }\n        :host([is-logged-in]) .body-wrapper .content-wrapper {\n          margin-left: 48px;\n        }\n        .body-wrapper .content-wrapper .content {\n          margin: 0;\n          padding: 32px 64px;\n        }\n        \n        nav {\n          display: -webkit-box;\n          display: -moz-box;\n          display: -ms-flexbox;\n          display: -webkit-flex;\n          flex: 0 0 auto;\n          padding-left: calc((100vw - 1448px) / 3);\n          display: flex;\n          z-index: 15;\n          min-width: 300px;\n          background: #F5F7F9;\n          align-items: stretch;\n          border-right: 1px solid #E6ECF1;\n          flex-direction: column;\n          -webkit-box-align: stretch;\n          -webkit-box-orient: vertical;\n          -webkit-box-direction: normal;\n        }\n        .left-col {\n          flex: 1;\n          margin: 0;\n          padding: 0;\n          display: none;\n          background-color: #F5F7F9;\n        }\n        @media screen and (min-width: 1024px){\n          .left-col {\n            flex: 0 0 auto;\n            width: auto;\n            z-index: 15;\n            width: 300px;\n            align-items: stretch;\n            border-right: 1px solid #E6ECF1;\n            flex-direction: column;\n            -webkit-box-align: stretch;\n            -webkit-box-orient: vertical;\n            -webkit-box-direction: normal;\n          }\n        }\n        site-menu {\n          --site-menu-font-size: 15px;\n          --site-menu-color: #000000;\n          --site-menu-active-color: #E6ECF1;\n          --site-menu-item-active-item-color: var(--haxcms-color, var(--simple-colors-default-theme-purple-7));\n          overflow-y: auto;\n          flex: 1 1 auto;\n          height: 100vh;\n          width: 300px;\n          left: 0;\n          margin: 32px 0 32px 0;\n          display: block;\n          padding: 0;\n          position: fixed;\n          font-size: 15px;\n          overflow-x: hidden;\n          -webkit-overflow-scrolling: touch;\n        }\n\n        :host([is-logged-in][menu-open]) site-menu {\n          left: 48px;\n        }\n\n        .content-wrapper {\n          max-width: 100%;\n          flex: 1 1 auto;\n          margin: 0;\n          display: flex;\n          padding: 0;\n          background-color: #ffffff;\n          flex-direction: column;\n          -webkit-box-orient: vertical;\n          -webkit-box-direction: normal;\n        }\n        .header {\n          position: sticky;\n          top: 0;\n          width: 100%;\n          padding: 0;\n          margin: 0;\n          z-index: 2;\n          height: 40px;\n        }\n        .header #haxcmsmobilemenubutton {\n          float: left;\n          margin-left: -52px\n        }\n        .header site-menu-content {\n          display: inline-flex;\n          float: right;\n          color: black;\n          font-size: 1.5em;\n          margin-right: -52px;\n        }\n        .content {\n          flex: 1 1 auto;\n          margin: 0px 16px;\n          display: block;\n          padding: 0;\n          width: 600px;\n        }\n        @media screen and (max-width: 400px) {\n          .content {\n            width: 200px;\n          }\n          .body-wrapper {\n            overflow-x: hidden;\n          }\n          .header site-menu-content {\n            margin-right: -40px;\n          }\n          site-menu {\n            width: 250px;\n          }\n          #haxcmsmobilemenunav {\n            min-width: 250px;\n            margin-left: 0px;\n          }\n          :host([menu-open]) #haxcmsmobilemenubutton{\n            margin-left: -52px;\n          }\n          .link-actions .inner {\n            display: block;\n          }\n          site-menu-button {\n            margin: 10px 0;\n          }\n          #slot ::slotted(iframe) {\n            width: auto;\n          } \n        }\n        @media screen and (min-width: 400px) and (max-width: 600px) {\n          .header site-menu-content {\n            margin-right: -40px;\n          }\n          .link-actions .inner {\n            display: block;\n          }\n          site-menu-button {\n            margin: 10px 0;\n          }\n          #slot ::slotted(iframe) {\n            width: auto;\n          }\n          .content {\n            width: 350px;\n          }\n        }\n        @media screen and (min-width: 1024px) {\n          .content-wrapper {\n            margin: 0px 88px;\n          }\n          .content {\n            width: 750px;\n          }\n        }\n        @media screen and (min-width: 1514px) {\n          .body-wrapper .content-wrapper .content {\n            padding: 32px 64px;\n          }\n        }\n        .right-col {\n          margin: 0;\n          padding: 0;\n          position: relative;\n          margin-right: auto;\n          max-width: 100%;\n          background-color: #ffffff;\n          flex-direction: column;\n          -webkit-box-orient: vertical;\n          -webkit-box-direction: normal;\n          min-height: 100%;\n          color: #3B454E;\n        }\n        .site-menu-content-wrapper {\n          display: -webkit-box;\n          display: -moz-box;\n          display: -ms-flexbox;\n          display: -webkit-flex;\n          flex: 0 0 auto;\n          min-width: 300px;\n          padding-right: calc((100vw - 1448px) / 3);\n          flex: 1;\n          margin: 0;\n          display: block;\n          max-width: 100%;\n          max-height: 976px;\n          z-index: 1;\n          display: -webkit-box;\n          display: -moz-box;\n          display: -ms-flexbox;\n          display: -webkit-flex;\n          height: 100%;\n          margin: 0;\n          display: flex;\n          padding-top: 40px;\n          flex-direction: column;\n          padding-bottom: 40px;\n          -webkit-box-orient: vertical;\n          -webkit-box-direction: normal;\n        }\n        .right-col site-menu-content {\n          flex: 1;\n          margin: 0;\n          display: flex;\n          padding: 0;\n          overflow: hidden;\n          position: fixed;\n          min-width: 224px;\n          counter-reset: toc;\n          flex-direction: column;\n          -webkit-box-orient: vertical;\n          -webkit-box-direction: normal;\n        }\n        .right-col site-menu-content::before {\n          top: 0;\n          left: 0;\n          height: 100%;\n          content: " ";\n          position: absolute;\n          border-left: 1px solid #E6ECF1;\n        }\n        .footer {\n          margin: 0;\n          display: flex;\n          padding: 0;\n          border-top: 2px solid #E6ECF1;\n          margin-top: 24px;\n          align-items: center;\n          padding-top: 24px;\n          flex-direction: row;\n          -webkit-box-align: center;\n          -webkit-box-orient: horizontal;\n          -webkit-box-direction: normal;\n        }\n        .footer-left {\n          flex: 1;\n          margin: 0;\n          display: block;\n          padding: 0;\n          font-size: 12px;\n          color: #444444;\n        }\n        .footer-right {\n          display: flex;\n          align-items: center;\n          flex-direction: row;\n          -webkit-box-align: center;\n          -webkit-box-orient: horizontal;\n          -webkit-box-direction: normal;\n          margin: 0px;\n          padding: 0px;\n        }\n        simple-icon-button,\n        site-rss-button,\n        replace-tag[with="site-rss-button"],\n        replace-tag[with="site-print-button"],\n        site-print-button {\n          color: black;\n          --haxcms-tooltip-color: #F5F5F5;\n          --haxcms-tooltip-background-color: #252737;\n        }\n      '])))])}},{key:"properties",get:function(){return y(y({},z(v(l),"properties",this)),{},{searchTerm:{type:String},prevPage:{type:String},nextPage:{type:String},pageTimestamp:{type:Number}})}},{key:"tag",get:function(){return"clean-two"}}],(i=[{key:"searchItemSelected",value:function(n){this.searchTerm=""}},{key:"searchChanged",value:function(n){var e=this,t=p.normalizeEventPath(n)[0];t.value?Promise.resolve(f).then((function(){e.searchTerm=t.value})):this.searchTerm=""}},{key:"render",value:function(){return t.html(m||(m=_(['\n      <div class="body-wrapper">\n        <div class="left-col">','</div>\n        <div class="content-wrapper">\n          <div class="content">\n            <header class="header">\n              ',"\n              ",'\n              <replace-tag with="site-active-title" import-only></replace-tag>\n              <site-active-title></site-active-title>\n            </header>\n            <site-search\n              hide-input\n              search="','"\n              @search-item-selected="','"\n              ?hidden="','"\n            ></site-search>\n            <main>\n              <article\n                id="contentcontainer"\n                ?hidden="','"\n              >\n                <section id="slot">\n                  <slot></slot>\n                </section>\n              </article>\n            </main>\n            <footer>\n              <div class="link-actions">\n                <div class="inner">\n                  <replace-tag\n                    with="site-menu-button"\n                    import-only\n                  ></replace-tag>\n                  <site-menu-button\n                    hide-label\n                    type="prev"\n                    position="right"\n                    class="navigation"\n                    @label-changed="','"\n                  >\n                    <div slot="suffix" class="wrapper">\n                      <div class="top">Previous</div>\n                      <div class="bottom">','</div>\n                    </div>\n                  </site-menu-button>\n                  <site-menu-button\n                    hide-label\n                    type="next"\n                    position="left"\n                    class="navigation"\n                    @label-changed="','"\n                  >\n                    <div slot="prefix" class="wrapper">\n                      <div class="top">Next</div>\n                      <div class="bottom">','</div>\n                    </div>\n                  </site-menu-button>\n                </div>\n              </div>\n              <div class="footer">\n                <div class="footer-left">\n                  Last updated\n                  <replace-tag with="simple-datetime" import-only></replace-tag>\n                  <simple-datetime\n                    unix\n                    .timestamp="','"\n                  ></simple-datetime>\n                </div>\n                <div class="footer-right">\n                  <replace-tag\n                    with="site-print-button"\n                    class="btn js-toolbar-action"\n                    import-method="view"\n                  ></replace-tag>\n                  <replace-tag\n                    with="site-rss-button"\n                    type="rss"\n                    import-method="view"\n                  ></replace-tag>\n                  <replace-tag\n                    with="site-git-corner"\n                    size="small"\n                    circle\n                    import-method="view"\n                  ></replace-tag>\n                </div>\n              </div>\n            </footer>\n          </div>\n        </div>\n        ',"\n      </div>\n    "])),this.HAXCMSMobileMenu(),this.HAXCMSMobileMenuButton(),"xl"!=this.responsiveSize?t.html(u||(u=_(['\n                    <replace-tag\n                      with="site-menu-content"\n                      import-only\n                    ></replace-tag>\n                    <site-menu-content\n                      .part="','"\n                      mobile\n                    ></site-menu-content>\n                  '])),this.editMode?"edit-mode-active":""):"",this.searchTerm,this.searchItemSelected,""==this.searchTerm,""!=this.searchTerm,this.__prevPageLabelChanged,this.prevPage,this.__nextPageLabelChanged,this.nextPage,this.pageTimestamp,"xl"==this.responsiveSize?t.html(b||(b=_(['\n              <div class="right-col">\n                <div class="site-menu-content-wrapper">\n                  <replace-tag\n                    with="site-menu-content"\n                    import-only\n                  ></replace-tag>\n                  <site-menu-content\n                    .part="','"\n                  ></site-menu-content>\n                </div>\n              </div>\n            '])),this.editMode?"edit-mode-active":""):"")}},{key:"__prevPageLabelChanged",value:function(n){this.prevPage=n.detail.value}},{key:"__nextPageLabelChanged",value:function(n){this.nextPage=n.detail.value}},{key:"disconnectedCallback",value:function(){for(var n in this.__disposer)this.__disposer[n].dispose();z(v(l.prototype),"disconnectedCallback",this).call(this)}}])&&x(e.prototype,i),o&&x(e,o),l}(o.HAXCMSThemeParts(r.HAXCMSMobileMenuMixin(i.HAXCMSLitElementTheme)));window.customElements.define(S.tag,S),n.CleanTwo=S,Object.defineProperty(n,"__esModule",{value:!0})}));
