import { css, html } from "lit";
import { normalizeEventPath } from "@lrnwebcomponents/utils/utils.js";

const BootstrapUserStylesMenuMixin = function (SuperClass) {
  return class extends SuperClass {
    constructor() {
      super();
      this.hideUserStylesMenu = true;
      this.fontSize = 1;
      this.fontFamily = 0;
      this.colorTheme = "0";
      let basePath = this.getBasePath(decodeURIComponent(import.meta.url));
      this._bootstrapPath = basePath + "bootstrap/dist/css/bootstrap.min.css";
      this.addEventListener("click", this.checkUserStylesMenuOpen.bind(this));
    }
    static get styles() {
      let styles = [];
      if (super.styles) {
        styles = super.styles;
      }
      return [
        ...styles,
        css`
          /* bootstrap defaults */
          :host([font-family="0"]) {
            font-family: var(--font-family-sans-serif);
          }
          :host([font-family="1"]) {
            font-family: var(--font-family-monospace);
          }
          :host([font-size="0"]) {
            --haxcms-base-styles-body-font-size: 1.2rem;
            --hax-base-styles-p-font-size: 1.2rem;
            --hax-base-styles-list-font-size: 1.2rem;
            --hax-base-styles-a-font-size: 1.2rem;
            --hax-base-styles-h1-font-size: 2.2rem;
            --hax-base-styles-h2-font-size: 2rem;
            --hax-base-styles-h3-font-size: 1.8rem;
            --hax-base-styles-h4-font-size: 1.6rem;
            --hax-base-styles-h5-font-size: 1.4rem;
            --hax-base-styles-h6-font-size: 1.2rem;
          }
          :host([font-size="1"]) {
            --haxcms-base-styles-body-font-size: 1.4rem;
            --hax-base-styles-p-font-size: 1.4rem;
            --hax-base-styles-list-font-size: 1.4rem;
            --hax-base-styles-a-font-size: 1.4rem;
            --hax-base-styles-h1-font-size: 2.4rem;
            --hax-base-styles-h2-font-size: 2.2rem;
            --hax-base-styles-h3-font-size: 2rem;
            --hax-base-styles-h4-font-size: 1.8rem;
            --hax-base-styles-h5-font-size: 1.6rem;
            --hax-base-styles-h6-font-size: 1.4rem;
          }
          :host([font-size="2"]) {
            --haxcms-base-styles-body-font-size: 1.6rem;
            --hax-base-styles-p-font-size: 1.6rem;
            --hax-base-styles-list-font-size: 1.6rem;
            --hax-base-styles-a-font-size: 1.6rem;
            --hax-base-styles-h1-font-size: 2.6rem;
            --hax-base-styles-h2-font-size: 2.4rem;
            --hax-base-styles-h3-font-size: 2.2rem;
            --hax-base-styles-h4-font-size: 2rem;
            --hax-base-styles-h5-font-size: 1.8rem;
            --hax-base-styles-h6-font-size: 1.6rem;
          }
          :host([font-size="3"]) {
            --haxcms-base-styles-body-font-size: 1.8rem;
            --hax-base-styles-p-font-size: 1.8rem;
            --hax-base-styles-list-font-size: 1.8rem;
            --hax-base-styles-a-font-size: 1.8rem;
            --hax-base-styles-h1-font-size: 2.8rem;
            --hax-base-styles-h2-font-size: 2.6rem;
            --hax-base-styles-h3-font-size: 2.4rem;
            --hax-base-styles-h4-font-size: 2.2rem;
            --hax-base-styles-h5-font-size: 2rem;
            --hax-base-styles-h6-font-size: 1.8rem;
          }
          :host([font-size="4"]) {
            --haxcms-base-styles-body-font-size: 2rem;
            --hax-base-styles-p-font-size: 2rem;
            --hax-base-styles-list-font-size: 2rem;
            --hax-base-styles-a-font-size: 2rem;
            --hax-base-styles-h1-font-size: 3rem;
            --hax-base-styles-h2-font-size: 2.8rem;
            --hax-base-styles-h3-font-size: 2.6rem;
            --hax-base-styles-h4-font-size: 2.4rem;
            --hax-base-styles-h5-font-size: 2.2rem;
            --hax-base-styles-h6-font-size: 2rem;
          }
          :host([color-theme="0"]) {
            --haxcms-user-styles-color-theme-color-color: #000000;
            --haxcms-user-styles-color-theme-color-background: #ffffff;
            --haxcms-user-styles-color-theme-color-1: #252737;
            --haxcms-user-styles-color-theme-color-2: #f5f5f5;
            --haxcms-user-styles-color-theme-color-3: #f5f5f5;
            --haxcms-user-styles-color-theme-color-4: var(
              --simple-colors-default-theme-blue-8,
              #4183c4
            );
            --hax-base-styles-a-color-visited: var(
              --simple-colors-default-theme-blue-7,
              #4183c4
            );
            --hax-base-styles-a-color: var(
              --simple-colors-default-theme-blue-7,
              #4183c4
            );
            --hax-base-styles-a-color-active: #000000;
          }

          :host([color-theme="0"]) .hcusm {
            border-color: #222222;
          }
          :host([color-theme="0"]) .hcusm simple-popover {
            --simple-popover-color: #222222;
            --simple-popover-background-color: #fafafa;
          }
          #slot ::slotted(*) {
            font-size: var(--haxcms-base-styles-body-font-size, 1em);
            color: var(--haxcms-user-styles-color-theme-color-color);
          }
          simple-icon-button-lite:not(:defined),
          simple-popover:not(:defined) {
            display: none;
          }
          simple-popover {
            padding: 2px;
          }

          .hcusm.open {
            display: block;
          }
          .hcusm {
            min-width: 160px;
            padding: 0;
            margin: 2px 0 0;
            list-style: none;
            font-size: 14px;
            background-color: transparent;
          }

          .hcusm button,
          .hcusm select {
            text-transform: none;
          }
          .hcusm button,
          .hcusm input {
            line-height: normal;
          }
          .hcusm button,
          .hcusm input,
          .hcusm select,
          .hcusm textarea {
            font-family: inherit;
            font-size: 100%;
            margin: 0;
          }

          .hcusm-settings-container[hidden] {
            display: none;
          }

          /*
          * Light Theme
          */
          .btn-size,
          .btn-font {
            background-color: var(
              --bootstrap-theme-light-secondary-background-color
            );
            color: var(--bootstrap-theme-light-color);
          }

          .btn-size.size-2 {
            font-size: 16px;
          }

          /*
          * Dark Theme
          */

          :host([color-theme="1"]) {
            --haxcms-user-styles-color-theme-color-color: #ffffff;
            --haxcms-user-styles-color-theme-color-background: #343a40;
            --haxcms-user-styles-color-theme-color-1: #ffffff;
            --haxcms-user-styles-color-theme-color-2: #343a40;
            --haxcms-user-styles-color-theme-color-3: #1c1c1c;
            --haxcms-user-styles-color-theme-color-4: #eee8e0;
            --hax-base-styles-a-color-visited: #551a8b;
            --hax-base-styles-a-color: #704214;
            --hax-base-styles-a-color-active: #000000;
          }

          :host([color-theme="1"]) .hcusm {
            border-color: #222222;
          }

          :host([color-theme="1"])
            .btn-group
            .btn[type="size"]
            .btn[type="font"] {
            background-color: var(
              --bootstrap-theme-light-secondary-background-color
            );
            color: var(--bootstrap-theme-dark-color) !important;
          }

          :host([color-theme="1"]) simple-popover {
            --simple-popover-color: white;
            --simple-popover-background-color: var(
              --bootstrap-theme-dark-secondary-background-color
            );
          }
          :host([color-theme="1"]) .hcusm .dropdown-caret .caret-inner {
            border-bottom: 9px solid
              var(--bootstrap-dark-theme-secondary-background-color);
          }
          :host([color-theme="1"]) .hcusm .hcusm-buttons {
            border-color: #7e888b;
          }
          :host([color-theme="1"]) .hcusm .hcusm-button {
            color: white;
          }
          :host([color-theme="1"]) .hcusm .hcusm-button:hover,
          :host([color-theme="1"]) .hcusm .hcusm-button:focus,
          :host([color-theme="1"]) .hcusm .hcusm-button:active {
            color: #eee8e0;
          }

          /* palenight theme */
          :host([color-theme="2"]) {
            --haxcms-user-styles-color-theme-color-color: var(
              --simple-colors-default-theme-light-blue-1,
              #cfd4e3
            );
            --haxcms-user-styles-color-theme-color-background: #1c1f2b;
            --haxcms-user-styles-color-theme-color-1: #a6a6a6;
            --haxcms-user-styles-color-theme-color-2: #252737;
            --haxcms-user-styles-color-theme-color-3: #252737;
            --haxcms-user-styles-color-theme-color-4: #f4f4f5;
            --hax-base-styles-a-color-visited: var(
              --simple-colors-default-theme-light-blue-2,
              #3eb1d0
            );
            --hax-base-styles-a-color: var(
              --simple-colors-default-theme-light-blue-2,
              #3eb1d0
            );
            --hax-base-styles-a-color-active: #ffffff;
          }

          :host([color-theme="2"]) .hcusm {
            border-color: var(--bootstrap-theme-palenight-background-color);
          }

          :host([color-theme="2"]) .btn[type="size"] .btn[type="font"] {
            background-color: var(
              --bootstrap-theme-light-secondary-background-color
            );
            color: var(--bootstrap-theme-palenight-background-color);
          }

          :host([color-theme="2"]) simple-popover {
            --simple-popover-color: white;
            --simple-popover-background-color: var(
              --bootstrap-theme-palenight-secondary-background-color
            );
          }

          :host([color-theme="2"]) .hcusm .dropdown-caret .caret-inner {
            border-bottom: 9px solid
              var(--bootstrap-theme-palenight-secondary-background-color);
          }

          simple-icon-button-lite {
            color: inherit;
          }

          .open {
            text-align: center;
          }

          .btn-group-title {
            font-weight: bold;
          }

          .btn-palenight {
            background-color: var(
              --bootstrap-theme-palenight-secondary-background-color
            );
            color: var(--bootstrap-theme-palenight-color);
          }

          /* override bootstrap default */
          .btn-palenight:hover {
            color: var(--bootstrap-theme-palenight-color);
          }

          .btn-dark {
            background-color: var(
              --bootstrap-theme-dark-secondary-background-color
            );
          }

          .btn-light {
            background-color: var(
              --bootstrap-theme-light-secondary-background-color
            );
          }
        `,
      ];
    }
    BootstrapUserStylesMenu() {
      import("@lrnwebcomponents/simple-icon/simple-icon.js");
      import("@lrnwebcomponents/simple-icon/lib/simple-icons.js");
      import("@lrnwebcomponents/simple-icon/lib/simple-icon-button-lite.js");
      import("@lrnwebcomponents/simple-popover/simple-popover.js");
      import("@lrnwebcomponents/simple-tooltip/simple-tooltip.js");
      return html`
        <link rel="stylesheet" href="${this._bootstrapPath}" />
        <simple-icon-button-lite
          .part="${this.editMode ? `edit-mode-active` : ``}"
          class="btn"
          aria-label="Text settings"
          icon="editor:format-size"
          @click="${this.toggleUserStylesMenu}"
          id="haxcmsuserstylesmenupopover"
        ></simple-icon-button-lite>
        <simple-tooltip for="haxcmsuserstylesmenupopover">
          Text settings
        </simple-tooltip>
        <simple-popover
          class="hcusm pull-left font-settings js-toolbar-action hcusm-settings-container"
          ?hidden="${this.hideUserStylesMenu}"
          id="haxcmsuserstylesmenu"
          auto
        >
          <div class="open">
            <div class="hcusm-caret">
              <span class="hcusm-caret-outer"></span>
              <span class="hcusm-caret-inner"></span>
            </div>
            <div class="btn-group-title">Font Size</div>
            <div class="btn-group" role="group">
              <button class="btn btn-size" @click="${this.UserStylesSizeDown}">
                A
              </button>
              <button
                class="btn btn-size size-2"
                @click="${this.UserStylesSizeUp}"
              >
                A
              </button>
            </div>
            <div class="btn-group-title">Font Family</div>
            <div class="btn-group" role="group">
              <button
                class="btn btn-font"
                data-font="0"
                @click="${this.UserStylesFontFamilyChange}"
              >
                Sans
              </button>
              <button
                class="btn btn-font"
                data-font="1"
                @click="${this.UserStylesFontFamilyChange}"
              >
                Monospace
              </button>
            </div>
            <div class="btn-group-title">Theme Color</div>
            <div class="btn-group">
              <button
                class="btn btn-light"
                data-theme="0"
                @click="${this.UserStylesColorThemeChange}"
              >
                Light
              </button>
              <button
                class="btn btn-palenight"
                data-theme="2"
                @click="${this.UserStylesColorThemeChange}"
              >
                Palenight
              </button>
              <button
                class="btn btn-dark"
                data-theme="1"
                @click="${this.UserStylesColorThemeChange}"
              >
                Dark
              </button>
            </div>
          </div>
        </simple-popover>
      `;
    }
    static get properties() {
      let props = super.properties || {};
      return {
        ...props,
        hideUserStylesMenu: {
          type: Boolean,
        },
        fontSize: {
          type: Number,
          reflect: true,
          attribute: "font-size",
        },
        fontFamily: {
          type: Number,
          reflect: true,
          attribute: "font-family",
        },
        colorTheme: {
          type: Number,
          reflect: true,
          attribute: "color-theme",
        },
      };
    }
    checkUserStylesMenuOpen(e) {
      var target = normalizeEventPath(e);
      if (
        !this.hideUserStylesMenu &&
        !target.includes(this.toggleUserStylesMenuTarget) &&
        !target.includes(
          this.shadowRoot.querySelector("#haxcmsuserstylesmenu")
        ) &&
        target.tagName !== "BUTTON"
      ) {
        this.hideUserStylesMenu = true;
      }
    }
    updated(changedProperties) {
      if (super.updated) {
        super.updated(changedProperties);
      }
      changedProperties.forEach((oldValue, propName) => {
        if (propName == "editMode" && this[propName]) {
          // edit mode has been activated
          this.hideUserStylesMenu = true;
        }
      });
    }
    /**
     * life cycle, element is afixed to the DOM
     */
    firstUpdated(changedProperties) {
      if (super.firstUpdated) {
        super.firstUpdated(changedProperties);
      }
      this.toggleUserStylesMenuTarget = this.shadowRoot.querySelector(
        "#haxcmsuserstylesmenupopover"
      );
      // hook up the pop over menu
      this.shadowRoot.querySelector("#haxcmsuserstylesmenu").target =
        this.toggleUserStylesMenuTarget;
    }
    toggleUserStylesMenu(e) {
      this.hideUserStylesMenu = !this.hideUserStylesMenu;
    }
    UserStylesSizeDown(e) {
      if (this.fontSize > 0) {
        this.fontSize = this.fontSize - 1;
      }
    }
    UserStylesSizeUp(e) {
      if (this.fontSize < 4) {
        this.fontSize = this.fontSize + 1;
      }
    }
    UserStylesFontFamilyChange(e) {
      var target = normalizeEventPath(e)[0];
      this.fontFamily = parseInt(target.getAttribute("data-font"));
    }
    UserStylesColorThemeChange(e) {
      var target = normalizeEventPath(e)[0];
      this.colorTheme = parseInt(target.getAttribute("data-theme"));
    }
  };
};

export { BootstrapUserStylesMenuMixin };
