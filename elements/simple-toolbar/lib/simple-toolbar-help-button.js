/**
 * Copyright 2019 Penn State University
 * @license Apache-2.0, see License.md for full text.
 */
import { LitElement, html, css } from "lit";
import { SimpleToolbarModalButtonBehaviors } from "./simple-toolbar-modal-button.js";
import "./simple-toolbar-help-docs.js";

/**
 * @extends SimpleToolbarModalButtonBehaviors
 */
const SimpleToolbarHelpButtonBehaviors = function (SuperClass) {
  return class extends SimpleToolbarModalButtonBehaviors(SuperClass) {
    /**
     * Store the tag name to make it easier to obtain directly.
     */
    static get tag() {
      return "simple-toolbar-help-button";
    }
    static get styles() {
      return [
        ...super.styles,
        css``,
      ];
    }

    constructor() {
      super();
      this.icon = "help-outline";
      this.toggled = false;
      this.toggles = true;
      this.label = "Help";
      this.tooltipDirection = "left";
      this.disabled = false;
      this.shortcutKeys = "F1";
    }

    get docs(){
      return this.shadowRoot 
        && this.shadowRoot.querySelector('simple-toolbar-help-docs') 
        ? this.shadowRoot.querySelector('simple-toolbar-help-docs') 
        : undefined;
    }

    get modalTemplate(){
      return html`<simple-toolbar-help-docs hidden></simple-toolbar-help-docs>`;
    }

    openModal(){
      let styles = this._getModalStyles(this), 
        content = this.docs.cloneNode(true);
        
      content.hidden = false;
      content.contents = this.docs.contents;
      this.dispatchEvent(
        new CustomEvent("simple-modal-show", {
          bubbles: true,
          cancelable: true,
          detail: {
            title: this.title || this.label,
            elements: { content: content },
            styles: styles,
            invokedBy: this,
          }
        })
      );
    }
  };
};

/**
 * `simple-toolbar-help-button`
 * a more button to toggle collapsed buttons in the rich text editor
 *
 * @customElement
 * @extends SimpleToolbarHelpButtonBehaviors
 * @extends LitElement
 * @lit-html
 * @lit-element
 * @demo ./demo/buttons.html
 */
class SimpleToolbarHelpButton extends SimpleToolbarHelpButtonBehaviors(LitElement) {}

window.customElements.define(
  SimpleToolbarHelpButton.tag,
  SimpleToolbarHelpButton
);
export { SimpleToolbarHelpButton, SimpleToolbarHelpButtonBehaviors };
