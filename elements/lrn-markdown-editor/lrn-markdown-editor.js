/**
 * Copyright 2018 The Pennsylvania State University
 * @license Apache-2.0, see License.md for full text.
 */
import { LitElement, html, css } from "lit";
import "@haxtheweb/a11y-tabs/a11y-tabs.js";
import "@haxtheweb/a11y-tabs/lib/a11y-tab.js";
import "@polymer/marked-element/marked-element.js";
import "./lib/lrn-markdown-editor-editor.js";
/**
 * `lrn-markdown-editor`
 * @element lrn-markdown-editor
 * `Side by side markdown to HTML editor + preview pane`
 *
 * @microcopy - language worth noting:
 *  - often used for quick field editing interfaces w/ minimal input allowed
 * @polymer

 * @demo demo/index.html
 */
class LrnMarkdownEditor extends LitElement {
  /**
   * LitElement constructable styles enhancement
   */
  static get styles() {
    return [
      css`
        :host {
          display: block;
        }

        #split-pane {
          display: flex;
          width: 100%;
        }

        .split-pane > * {
          flex: 1 1 auto;
          min-height: 160px;
          width: calc(50% - 16px);
        }

        .preview-pane {
          background: lightblue;
        }

        div.pane {
          padding: 16px;
          width: calc(100% - 32px);
        }

        a11y-tabs {
          background: #f5f5f5;
          border-style: solid;
          border-color: #dcdcdc;
          border-width: 1px;
          min-width: 500px;
        }

        marked-element.lrn-markdown-editor {
          width: 100%;
          word-wrap: break-word;
        }

        .container-flex {
          display: flex;
          flex-wrap: nowrap;
        }

        .split-pane .container-flex > * {
          width: 50%;
        }

        .split-pane marked-element {
          width: calc(100% - 32px);
          min-width: 150px;
          margin: 0 16px;
          padding: 0 16px;
          background: #fff;
          border-left: solid #dcdcdc 1px;
        }
      `,
    ];
  }
  /**
   * LitElement render
   */
  render() {
    return html`
      <div class="mtz-toolbar">
        <a11y-tabs>
          <a11y-tab id="tab-0" label="Write">
            <div class="pane">
              <lrn-markdown-editor-editor
                content="${this.content}"
                @content-changed="${this.__contentChanged}"
              ></lrn-markdown-editor-editor>
            </div>
          </a11y-tab>
          <a11y-tab id="tab-1" label="Preview">
            <div class="pane">
              <marked-element
                markdown="${this.content}"
                @markdown-changed="${this.__contentChanged}"
              ></marked-element>
            </div>
          </a11y-tab>
          <a11y-tab id="tab-2" label="Split View">
            <div class="split-pane">
              <div class="pane">
                <div class="container-flex">
                  <lrn-markdown-editor-editor
                    content="${this.content}"
                    @content-changed="${this.__contentChanged}"
                  ></lrn-markdown-editor-editor>
                  <marked-element
                    class="preview-pane"
                    markdown="${this.content}"
                    @markdown-changed="${this.__contentChanged}"
                  ></marked-element>
                </div>
              </div>
            </div>
          </a11y-tab>
        </a11y-tabs>
      </div>
    `;
  }
  __contentChanged(e) {
    this.content = e.detail.value;
  }
  constructor() {
    super();
    this.layout = "0";
    this.content = "";
    this.cookies = true;
    this.elReady = false;
  }
  static get tag() {
    return "lrn-markdown-editor";
  }

  static get properties() {
    return {
      content: {
        type: String,
      },
      layout: {
        type: String,
      },
      cookies: {
        type: Boolean,
      },
      elReady: {
        type: Boolean,
        attribute: "el-ready",
      },
    };
  }
  /**
   * LitElement properties notice
   */
  updated(changedProperties) {
    changedProperties.forEach((oldValue, propName) => {
      if (propName === "content") {
        // notify
        this.dispatchEvent(
          new CustomEvent("content-changed", {
            detail: {
              value: this[propName],
            },
          }),
        );
      }
    });
  }

  _selectedChanged(selected) {
    var cookieName = this._getCookieName();
    // get current cookies
    // if the 'split-view' pane is selected
    if (selected === 2) {
      // add a cookie for lrn-markdown-editor-splitview
      this._createCookie(cookieName, "true", "30");
    } else if (selected !== 2 && this.elReady === true) {
      /**
       * @todo: this is erasing the cookie erroneously
       */
      this._eraseCookie(cookieName);
    }
  }

  _createCookie(name, value, days) {
    var expires = "";
    if (days) {
      var date = new Date();
      date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
      expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + value + expires + "; path=/";
  }

  _readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(";");
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == " ") c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
  }

  _eraseCookie(name) {
    this._createCookie(name, "", -1);
  }

  _getCookieName() {
    return "lrnmarkdowneditorsplitview";
  }

  firstUpdated(changedProperties) {
    // tell others we are ready
    this.elReady = true;
    // get the cookie for splitview
    var cookieName = this._getCookieName();
    var cookie = this._readCookie(cookieName);
    // if there is a cookie set for splitview
    if (cookie && cookie === "true") {
      // show splitview pane
      this.selected = 2;
    }
  }
}
customElements.define(LrnMarkdownEditor.tag, LrnMarkdownEditor);
export { LrnMarkdownEditor };
