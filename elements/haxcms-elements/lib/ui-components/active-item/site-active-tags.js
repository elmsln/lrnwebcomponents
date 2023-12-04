/**
 * Copyright 2023 The Pennsylvania State University
 * @license Apache-2.0, see License.md for full text.
 */
import { LitElement, html, css } from "lit";
import { store } from "@lrnwebcomponents/haxcms-elements/lib/core/haxcms-site-store.js";
import { autorun, toJS } from "mobx";
import "@lrnwebcomponents/simple-fields/lib/simple-tags.js";

/**
 * `site-active-tags`
 * `Tags of the active page`
 *
 * @demo demo/index.html
 */
class SiteActiveTags extends LitElement {
  /**
   * Store the tag name to make it easier to obtain directly.
   */
  static get tag() {
    return "site-active-tags";
  }

  static get styles() {
    return [
      css`
        :host {
          display: block;
        }
        a {
          text-decoration: none;
        }
        :host([edit-mode]) .tag-wrap {
          pointer-events: none;
        }
      `,
    ];
  }
  /**
   * LitElement
   */
  render() {
    return html`<div class="tag-wrap"></div>${
      this.tags && this.tags != ""
        ? this.tags.split(",").map(
            (tag) => html` <a
              @click="${this.testEditMode}"
              href="x/views?tags=${tag.trim()}"
            >
              <simple-tag
                ?auto-accent-color="${this.autoAccentColor}"
                value="${tag.trim()}"
                accent-color="${this.accentColor}"
              ></simple-tag>
            </a>`
          )
        : ``
    }</div>`;
  }

  testEditMode(e) {
    if (this.editMode) {
      e.preventDefault();
      e.stopPropagation();
      e.stopImmediatePropagation();
    }
  }
  /**
   * LitElement / popular convention
   */
  static get properties() {
    return {
      tags: {
        type: String,
      },
      autoAccentColor: {
        type: Boolean,
        attribute: "auto-accent-color",
      },
      accentColor: {
        type: String,
        attribute: "accent-color",
      },
      editMode: {
        type: Boolean,
        reflect: true,
        attribute: "edit-mode",
      },
    };
  }
  /**
   * HTMLElement
   */
  constructor() {
    super();
    this.autoAccentColor = false;
    this.accentColor = null;
    this.tags = null;
    this.__disposer = [];
    autorun((reaction) => {
      this.tags = toJS(store.activeTags);
      this.__disposer.push(reaction);
    });
    autorun((reaction) => {
      this.editMode = toJS(store.editMode);
      this.__disposer.push(reaction);
    });
  }
  /**
   * HTMLElement
   */
  disconnectedCallback() {
    // clean up state
    for (var i in this.__disposer) {
      this.__disposer[i].dispose();
    }
    super.disconnectedCallback();
  }
}
customElements.define(SiteActiveTags.tag, SiteActiveTags);
export { SiteActiveTags };
