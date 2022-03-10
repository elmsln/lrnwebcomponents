/**
 * Copyright 2019 The Pennsylvania State University
 * @license Apache-2.0, see License.md for full text.
 */
import { LitElement, html, css } from "lit";
import "@lrnwebcomponents/simple-icon/lib/simple-icons.js";
import "@lrnwebcomponents/simple-icon/lib/simple-icon-lite.js";
import "@lrnwebcomponents/simple-icon/lib/simple-icon-button-lite.js";
import "web-dialog/index.js";

const SimpleModalCssVars = [
  "--simple-modal-resize",
  "--simple-modal-width",
  "--simple-modal-z-index",
  "--simple-modal-height",
  "--simple-modal-min-width",
  "--simple-modal-min-height",
  "--simple-modal-max-width",
  "--simple-modal-max-height",
  "--simple-modal-titlebar-color",
  "--simple-modal-titlebar-height",
  "--simple-modal-titlebar-line-height",
  "--simple-modal-titlebar-background",
  "--simple-modal-titlebar-padding",
  "--simple-modal-header-color",
  "--simple-modal-header-background",
  "--simple-modal-header-padding",
  "--simple-modal-content-container-color",
  "--simple-modal-content-container-background",
  "--simple-modal-content-container-overflow",
  "--simple-modal-content-padding",
  "--simple-modal-buttons-color",
  "--simple-modal-buttons-background",
  "--simple-modal-buttons-padding",
  "--simple-modal-button-color",
  "--simple-modal-button-background",
];
/**
 * `simple-modal`
 * `A simple modal that ensures accessibility and stack order context appropriately`
 * 
 * ### Styling
`<simple-fields>` provides following custom properties
for styling:

Custom property | Description | Default
----------------|-------------|--------
--simple-modal-resize | whether modal can be resized by user (see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/resize}) | unset
--simple-modal-titlebar-color | color for modal's titlebar | #444
--simple-modal-titlebar-background | background color for modal's titlebar | #ddd
--simple-modal-titlebar-padding | padding for modal's titlebar | 0px 16px
--simple-modal-titlebar-height | height for modal's titlebar | unset
--simple-modal-titlebar-line-height | text's line height for modal's titlebar | unset
--simple-modal-header-color | text color for modal's header | #222
--simple-modal-header-background | background color for modal's header | #ccc
--simple-modal-header-padding | padding for modal's header | 0px 16px
--simple-modal-content-container-color | text color for modal's content | #222;
--simple-modal-content-container-background | text color for modal's content | #fff 
--simple-modal-content-container-overflow | whether content overflow should be visible or scroll | unset
--simple-modal-content-padding | text color for modal's content | 8px 16px
--simple-modal-buttons-color | text color for modal's buttons | unset
--simple-modal-buttons-background | background color for modal's buttons | unset
--simple-modal-buttons-padding | padding for modal's buttons | 0
--simple-modal-button-color | text color for modal's buttons | var(--simple-modal-buttons-color)
--simple-modal-button-background | background color for modal's buttons | var(--simple-modal-buttons-background-color)
--simple-modal-z-index | z-index for modal | 1000
--simple-modal-width | width of modal | 75vw
--simple-modal-height | height of modal | auto;
--simple-modal-min-width | min-width of modal | unset
--simple-modal-min-height | min-height of modal | unset
--simple-modal-max-width | max-width of modal | unset
--simple-modal-max-height | max-height of modal | unset
 * 
 * @demo ./demo/index.html demo
 * @demo ./demo/css.html styling simple-modal via CSS
 * @demo ./demo/details.html styling simple-modal via event details
 * @demo ./demo/template.html using simple-modal-template
 * @element simple-modal
 */
class SimpleModal extends LitElement {
  //styles function
  static get styles() {
    return [
      css`
        :host {
          display: block;
        }

        :host([hidden]) {
          display: none;
        }

        :host web-dialog ::slotted(*) {
          font-size: 14px;
        }

        #titlebar {
          margin-top: 0;
          padding: var(--simple-modal-titlebar-padding, 0px 16px);
          display: flex;
          align-items: center;
          justify-content: space-between;
          color: var(--simple-modal-titlebar-color, #444);
          background-color: var(--simple-modal-titlebar-background, #ddd);
          border-radius: 0;
          height: var(--simple-modal-titlebar-height, unset);
          line-height: var(--simple-modal-titlebar-line-height, unset);
        }

        #headerbar {
          margin: 0;
          padding: var(--simple-modal-header-padding, 0px 16px);
          color: var(--simple-modal-header-color, #222);
          background-color: var(--simple-modal-header-background, #ccc);
        }

        h2 {
          margin-right: 8px;
          padding: 0;
          margin: 0;
          flex: auto;
          font-size: 18px;
          line-height: 18px;
        }

        #close {
          top: 0;
          border: var(--simple-modal-titlebar-button-border, none);
          padding: var(--simple-modal-titlebar-button-padding, 10px 0);
          min-width: unset;
          text-transform: none;
          color: var(--simple-modal-titlebar-color, #444);
          background-color: transparent;
        }

        #close:focus {
          opacity: 0.7;
          outline: var(--simple-modal-titlebar-button-outline, 2px dotted grey);
          outline-offset: var(
            --simple-modal-titlebar-button-outline-offset,
            2px
          );
        }

        #close simple-icon-lite {
          --simple-icon-height: var(--simple-modal-titlebar-icon-height, 16px);
          --simple-icon-width: var(--simple-modal-titlebar-icon-width, 16px);
          color: var(--simple-modal-titlebar-color, #444);
        }

        #simple-modal-content {
          flex-grow: 1;
          padding: var(--simple-modal-content-padding, 8px 16px);
          margin: 0;
          color: var(--simple-modal-content-container-color, #222);
          background-color: var(
            --simple-modal-content-container-background,
            #fff
          );
          overflow: var(--simple-modal-content-container-overflow, unset);
        }

        .buttons {
          padding: 0;
          padding: var(--simple-modal-buttons-padding, 0);
          margin: 0;
          color: var(--simple-modal-buttons-color, blue);
          background-color: var(--simple-modal-buttons-background, #fff);
        }

        .buttons ::slotted(*) {
          padding: 0;
          margin: 0;
          color: var(--simple-modal-button-color, --simple-modal-buttons-color);
          background-color: var(
            --simple-modal-button-background,
            --simple-modal-buttons-background
          );
        }
        web-dialog {
          --dialog-border-radius: var(--simple-modal-border-radius, 2px);
          z-index: var(--simple-modal-z-index, 1) !important;
          padding: 0;
        }
        web-dialog::part(dialog) {
          border: 1px solid var(--simple-modal-border-color, #222);
          min-height: var(--simple-modal-min-height, unset);
          min-width: var(--simple-modal-min-width, unset);
          z-index: var(--simple-modal-z-index, 1000);
          resize: var(--simple-modal-resize, unset);
          padding: 0;
          --dialog-height: var(--simple-modal-height, auto);
          --dialog-width: var(--simple-modal-width, 75vw);
          --dialog-max-width: var(--simple-modal-max-width, 100vw);
          --dialog-max-height: var(--simple-modal-max-height, 100vh);
        }
        web-dialog.style-scope.simple-modal {
          display: none !important;
        }
        web-dialog[open].style-scope.simple-modal {
          display: flex !important;
          position: fixed !important;
          margin: auto;
        }
        :host([resize="none"]) web-dialog[open].style-scope.simple-modal,
        :host([resize="horizontal"]) web-dialog[open].style-scope.simple-modal {
          top: calc(50% - var(--simple-modal-height, auto) / 2);
        }
        :host([resize="none"]) web-dialog[open].style-scope.simple-modal,
        :host([resize="vertical"]) web-dialog[open].style-scope.simple-modal {
          left: calc(50% - var(--simple-modal-width, 75vw) / 2);
        }
      `,
    ];
  }
  render() {
    return html`<web-dialog
      id="dialog"
      center
      role="dialog"
      part="dialog"
      aria-describedby="simple-modal-content"
      aria-label="${this._getAriaLabel(this.title)}"
      aria-labelledby="${this._getAriaLabelledby(this.title)}"
      aria-modal="true"
      ?open="${this.opened}"
      @open="${this.open}"
      @close="${this.close}"
    >
      <div id="titlebar" part="titlebar">
        <h2 id="simple-modal-title" ?hidden="${!this.title}" part="title">
          ${this.title}
        </h2>
        <div></div>
        <simple-icon-button-lite
          id="close"
          dark
          icon="${this.closeIcon}"
          @click="${this.close}"
          label="${this.closeLabel}"
          part="close"
        >
        </simple-icon-button-lite>
      </div>
      <div id="headerbar" part="headerbar"><slot name="header"></slot></div>
      <div id="simple-modal-content" part="content">
        <slot name="content"></slot>
      </div>
      <slot name="custom" part="custom"></slot>
      <div class="buttons" part="buttons">
        <slot name="buttons"></slot>
      </div>
    </web-dialog>`;
  }

  // properties available to the custom element for data binding
  static get properties() {
    return {
      ...super.properties,
      /**
       * heading / label of the modal
       */
      title: {
        type: String,
      },
      /**
       * open state
       */
      opened: {
        type: Boolean,
        reflect: true,
      },
      /**
       * Close label
       */
      closeLabel: {
        attribute: "close-label",
        type: String,
      },
      /**
       * Close icon
       */
      closeIcon: {
        type: String,
        attribute: "close-icon",
      },
      /**
       * The element that invoked this. This way we can track our way back accessibly
       */
      invokedBy: {
        type: Object,
      },
      /**
       * support for modal flag
       */
      modal: {
        type: Boolean,
      },
      /**
       * can add a custom string to style modal based on what is calling it
       */
      mode: {
        type: String,
        reflect: true,
      },
    };
  }

  /**
   * convention
   */
  static get tag() {
    return "simple-modal";
  }
  /**
   * HTMLElement
   */
  constructor() {
    super();
    this.title = "";
    this.opened = false;
    this.closeLabel = "Close";
    this.closeIcon = "close";
    this.modal = false;
  }
  /**
   * LitElement
   */
  updated(changedProperties) {
    changedProperties.forEach((oldValue, propName) => {
      if (propName == "opened") {
        this._openedChanged(this[propName]);
      }
    });
  }
  /**
   * HTMLElement
   */
  connectedCallback() {
    super.connectedCallback();
    setTimeout(() => {
      window.addEventListener("simple-modal-hide", this.close.bind(this));
      window.addEventListener("simple-modal-show", this.showEvent.bind(this));
    }, 0);
  }
  /**
   * HTMLElement
   */
  disconnectedCallback() {
    window.removeEventListener("simple-modal-hide", this.close.bind(this));
    window.removeEventListener("simple-modal-show", this.showEvent.bind(this));
    super.disconnectedCallback();
  }
  /**
   * show event call to open the modal and display it's content
   *
   */
  showEvent(e) {
    // if we're already opened and we get told to open again....
    // swap out the contents
    // ensure things don't conflict w/ the modal if its around
    window.dispatchEvent(
      new CustomEvent("simple-toast-hide", {
        bubbles: true,
        composed: true,
        cancelable: false,
        detail: false,
      })
    );
    if (this.opened) {
      // wipe the slot of our modal
      this.innerHTML = "";
      setTimeout(() => {
        this.show(
          e.detail.title,
          e.detail.mode,
          e.detail.elements,
          e.detail.invokedBy,
          e.detail.id,
          e.detail.modalClass,
          e.detail.styles,
          e.detail.clone,
          e.detail.modal
        );
      }, 0);
    } else {
      this.show(
        e.detail.title,
        e.detail.mode,
        e.detail.elements,
        e.detail.invokedBy,
        e.detail.id,
        e.detail.modalClass,
        e.detail.styles,
        e.detail.clone,
        e.detail.modal
      );
    }
  }
  /**
   * Show the modal and display the material
   */
  show(
    title,
    mode,
    elements,
    invokedBy,
    id = null,
    modalClass = null,
    styles = null,
    clone = false,
    modal = false
  ) {
    this.invokedBy = invokedBy;
    this.modal = modal;
    this.title = title;
    this.mode = mode;
    let element;
    // append element areas into the appropriate slots
    // ensuring they are set if it wasn't previously
    let slots = ["header", "content", "buttons", "custom"];
    if (id) {
      this.setAttribute("id", id);
    } else {
      this.removeAttribute("id");
    }
    this.setAttribute("style", "");
    if (styles) {
      SimpleModalCssVars.forEach((prop) => {
        this.style.setProperty(prop, styles[prop] || "inherit");
      });
    }
    if (modalClass) {
      this.setAttribute("class", modalClass);
    } else {
      this.removeAttribute("class");
    }
    for (var i in slots) {
      if (elements[slots[i]]) {
        if (clone) {
          element = elements[slots[i]].cloneNode(true);
        } else {
          element = elements[slots[i]];
        }
        element.setAttribute("slot", slots[i]);
        this.appendChild(element);
      }
    }
    // minor delay to help the above happen prior to opening
    this.opened = true;
  }
  /**
   * Close the modal and do some clean up
   */
  close() {
    this.opened = false;
    if (window.ShadyCSS && !window.ShadyCSS.nativeShadow) {
      this.shadowRoot
        .querySelector("web-dialog")
        .shadowRoot.querySelector("#backdrop").style.position = "relative";
    }
  }
  open() {
    this.opened = true;
    if (window.ShadyCSS && !window.ShadyCSS.nativeShadow) {
      this.shadowRoot
        .querySelector("web-dialog")
        .shadowRoot.querySelector("#backdrop").style.position = "fixed";
      this.shadowRoot
        .querySelector("web-dialog")
        .shadowRoot.querySelector("#backdrop").style.top = 0;
      this.shadowRoot
        .querySelector("web-dialog")
        .shadowRoot.querySelector("#backdrop").style.bottom = 0;
      this.shadowRoot
        .querySelector("web-dialog")
        .shadowRoot.querySelector("#backdrop").style.left = 0;
      this.shadowRoot
        .querySelector("web-dialog")
        .shadowRoot.querySelector("#backdrop").style.right = 0;
    }
  }
  // Observer opened for changes
  _openedChanged(newValue) {
    if (typeof newValue !== typeof undefined && !newValue) {
      // wipe the slot of our modal
      this.title = "";
      while (this.firstChild !== null) {
        this.removeChild(this.firstChild);
      }
      if (this.invokedBy) {
        setTimeout(() => {
          this.invokedBy.focus();
        }, 500);
      }
      const evt = new CustomEvent("simple-modal-closed", {
        bubbles: true,
        cancelable: true,
        detail: {
          opened: false,
          invokedBy: this.invokedBy,
        },
      });
      this.dispatchEvent(evt);
    } else if (newValue) {
      // p dialog backport; a nice, simple solution for close buttons
      let dismiss = this.querySelectorAll("[dialog-dismiss]");
      dismiss.forEach((el) => {
        el.addEventListener("click", (e) => {
          const evt = new CustomEvent("simple-modal-dismissed", {
            bubbles: true,
            composed: true,
            cancelable: true,
            detail: {
              opened: false,
              invokedBy: this.invokedBy,
            },
          });
          this.dispatchEvent(evt);
          this.close();
        });
      });
      let confirm = this.querySelectorAll("[dialog-confirm]");
      confirm.forEach((el) => {
        el.addEventListener("click", (e) => {
          const evt = new CustomEvent("simple-modal-confirmed", {
            composed: true,
            bubbles: true,
            cancelable: true,
            detail: {
              opened: false,
              invokedBy: this.invokedBy,
            },
          });
          this.dispatchEvent(evt);
          this.close();
        });
      });
      const evt = new CustomEvent("simple-modal-opened", {
        bubbles: true,
        composed: true,
        cancelable: true,
        detail: {
          opened: true,
          invokedBy: this.invokedBy,
        },
      });
      this.dispatchEvent(evt);
    }
  }
  /**
   * If there is a title, aria-labelledby should point to #simple-modal-title
   */
  _getAriaLabelledby(title) {
    return !title ? null : "simple-modal-title";
  }
  /**
   * If there is no title, supply a generic aria-label
   */
  _getAriaLabel(title) {
    return !title ? "Modal Dialog" : null;
  }
}
window.customElements.define(SimpleModal.tag, SimpleModal);
export { SimpleModal, SimpleModalCssVars };

// register globally so we can make sure there is only one
window.SimpleModal = window.SimpleModal || {};
// request if this exists. This helps invoke the element existing in the dom
// as well as that there is only one of them. That way we can ensure everything
// is rendered through the same modal
window.SimpleModal.requestAvailability = () => {
  if (!window.SimpleModal.instance) {
    window.SimpleModal.instance = document.createElement("simple-modal");
    document.body.appendChild(window.SimpleModal.instance);
  }
  return window.SimpleModal.instance;
};

export const SimpleModalStore = window.SimpleModal.requestAvailability();
