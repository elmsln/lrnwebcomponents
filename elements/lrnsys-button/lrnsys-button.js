/**
 * Copyright 2018 The Pennsylvania State University
 * @license Apache-2.0, see License.md for full text.
 */
import { LitElement, html, css } from "lit";
import { materialCssStyles } from "@lrnwebcomponents/materializecss-styles/lib/colors.js";
import "@lrnwebcomponents/elmsln-apps/lib/elmsln-base-deps.js";
import "@lrnwebcomponents/simple-tooltip/simple-tooltip.js";
/**
 * `lrnsys-button`
 * `A simple button for use in systems`
 * @demo demo/index.html
 * @element lrnsys-button
 */
class LrnsysButton extends LitElement {
  static get styles() {
    return [
      materialCssStyles,
      css`
        :host {
          display: block;
          --lrnsys-button-height: 48px;
        }
        :host([raised]) {
          border: 2px solid black;
        }
        :host([disabled]) {
          pointer-events: none;
        }
        simple-icon.white-text {
          --simple-colors-default-theme-accent-12: white;
        }
        a {
          text-decoration: none;
          display: block;
          color: var(--lrnsys-button-link-color, #000000);
          display: flex;
        }
        button {
          padding: 0;
          margin: 0;
          min-width: 0.16px;
          height: inherit;
          -webkit-justify-content: flex-start;
          justify-content: flex-start;
          align-items: center;
          width: 100%;
          text-transform: unset;
          border-radius: unset;
          display: flex;
          background-color: transparent;
          border: none;
          cursor: pointer;
        }
        button:hover {
          cursor: pointer;
        }
        :host([no-padding]) button div.inner {
          padding: 0;
        }
        button simple-icon {
          --simple-icon-height: var(--lrnsys-button-height);
          margin: 0 4px;
        }
        button simple-icon:first-child {
          margin: 0 4px 0 0;
        }
        button simple-icon:last-child {
          margin: 0 0 0 4px;
        }
        button div.inner {
          height: var(--lrnsys-button-height);
          line-height: var(--lrnsys-button-height);
          display: flex;
          padding: 0 16px;
        }
        button span.label {
          height: var(--lrnsys-button-height);
          line-height: var(--lrnsys-button-height);
        }
        .no-margin {
          margin: 0 !important;
        }
        .no-right-padding {
          padding-right: 0 !important;
        }
        .no-left-padding {
          padding-left: 0 !important;
        }
      `,
    ];
  }
  constructor() {
    super();
    this.href = null;
    this.target = null;
    this.label = "";
    this.icon = "";
    this.alt = "";
    this.iconClass = "";
    this.buttonClass = "";
    this.color = "";
    this.textColor = "";
    this.focusState = false;
    this.disabled = false;
    setTimeout(() => {
      this.addEventListener("mousedown", this.tapEventOn.bind(this));
      this.addEventListener("mouseover", this.tapEventOn.bind(this));
      this.addEventListener("focusin", this.tapEventOn.bind(this));
      this.addEventListener("focusout", this.tapEventOff.bind(this));
      this.addEventListener("mouseout", this.tapEventOff.bind(this));
    }, 0);
  }
  firstUpdated(changedProperties) {
    this.updated(changedProperties);
  }
  updated(changedProperties) {
    changedProperties.forEach((oldvalue, propName) => {
      if (this.shadowRoot && ["href", "target"].includes(propName)) {
        if (this[propName]) {
          this.shadowRoot.querySelector("#lrnsys-button-link")[propName] =
            this[propName];
        } else {
          this.shadowRoot
            .querySelector("#lrnsys-button-link")
            .removeAttribute(propName);
        }
      }
    });
  }
  render() {
    return html`
      <a
        tabindex="-1"
        id="lrnsys-button-link"
        part="lrnsys-button-link"
        ?disabled="${this.disabled}"
      >
        <button
          id="button"
          title="${this.alt}"
          class="${this.buttonClass} ${this.color} ${this.textColor}"
          part="lrnsys-button-button"
          ?disabled="${this.disabled}"
          @focus-changed="${this.focusToggle}"
        >
          <div class="inner ${this.innerClass}" part="lrnsys-button-inner-div">
            <slot name="prefix"></slot>
            <simple-icon
              icon="${this.icon}"
              id="icon"
              ?dark="${this.dark}"
              accent-color="grey"
              contrast="4"
              class="${this.iconClass}"
              part="lrnsys-button-icon"
              ?hidden="${!this.icon}"
            ></simple-icon>
            <span
              class="label"
              part="lrnsys-button-label"
              ?hidden="${!this.label}"
            >
              ${this.label}
            </span>
            <slot></slot>
          </div>
        </button>
      </a>
      <simple-tooltip
        for="lrnsys-button-link"
        part="lrnsys-button-tooltip"
        animation-delay="0"
        ?hidden="${!this.alt}"
        >${this.alt}</simple-tooltip
      >
    `;
  }

  static get tag() {
    return "lrnsys-button";
  }

  static get properties() {
    return {
      /**
       * Standard href pass down
       */
      href: {
        type: String,
        reflect: true,
      },
      /**
       * If the button should be visually lifted off the UI.
       */
      raised: {
        type: Boolean,
        reflect: true,
      },
      /**
       * Label to place in the text area
       */
      label: {
        type: String,
      },
      /**
       * Support for target to open in new windows.
       */
      target: {
        type: String,
      },
      /**
       * simple-icon to use (with iconset if needed)
       */
      icon: {
        type: String,
        reflect: true,
      },
      /**
       * Classes to add / subtract based on the item being hovered.
       */
      hoverClass: {
        type: String,
        reflect: true,
        attribute: "hover-class",
      },
      /**
       * Button class.
       */
      buttonClass: {
        type: String,
        attribute: "button-class",
      },
      /**
       * Icon class in the event you want it to look different from the text.
       */
      iconClass: {
        type: String,
        attribute: "icon-class",
      },
      /**
       * Inner container classes.
       */
      innerClass: {
        type: String,
        attribute: "inner-class",
      },
      /**
       * Color class work to apply
       */
      color: {
        type: String,
        reflect: true,
      },
      /**
       * materializeCSS color class for text
       */
      textColor: {
        type: String,
        attribute: "text-color",
      },
      /**
       * Alt via tooltip.
       */
      alt: {
        type: String,
      },
      /**
       * Disabled state.
       */
      disabled: {
        type: Boolean,
      },
      /**
       * dark state.
       */
      dark: {
        type: Boolean,
        reflect: true,
      },
      /**
       * Tracks if focus state is applied
       */
      focusState: {
        type: Boolean,
        attribute: "focus-state",
      },
    };
  }
  /**
   * Class processing on un-tap / hover
   */
  tapEventOn(e) {
    if (typeof this.hoverClass !== typeof undefined && !this.disabled) {
      // break class into array
      var classes = this.hoverClass.split(" ");
      // run through each and add or remove classes
      classes.forEach((item, index) => {
        if (item != "") {
          this.shadowRoot.querySelector("#button").classList.add(item);
          if (item.indexOf("-") != -1) {
            this.shadowRoot.querySelector("#icon").classList.add(item);
          }
        }
      });
    }
  }

  /**
   * Undo class processing on un-tap / hover
   */
  tapEventOff(e) {
    if (typeof this.hoverClass !== typeof undefined && !this.disabled) {
      // break class into array
      var classes = this.hoverClass.split(" ");
      // run through each and add or remove classes
      classes.forEach((item, index) => {
        if (item != "") {
          this.shadowRoot.querySelector("#button").classList.remove(item);
          if (item.indexOf("-") != -1) {
            this.shadowRoot.querySelector("#icon").classList.remove(item);
          }
        }
      });
    }
  }
  /**
   * Handle toggle for mouse class and manage classList array for button.
   */
  focusToggle(e) {
    // weird but reality... focus event is the button inside of here
    if (typeof this.hoverClass !== typeof undefined && !this.disabled) {
      // break class into array
      var classes = this.hoverClass.split(" ");
      // run through each and add or remove classes
      classes.forEach((item, index) => {
        if (item != "") {
          if (!this.focusState) {
            this.shadowRoot.querySelector("#button").classList.add(item);
            if (item.indexOf("-") != -1) {
              this.shadowRoot.querySelector("#icon").classList.add(item);
            }
          } else {
            this.shadowRoot.querySelector("#button").classList.remove(item);
            if (item.indexOf("-") != -1) {
              this.shadowRoot.querySelector("#icon").classList.remove(item);
            }
          }
        }
      });
    }
    this.focusState = !this.focusState;
  }
}
window.customElements.define(LrnsysButton.tag, LrnsysButton);
export { LrnsysButton };
