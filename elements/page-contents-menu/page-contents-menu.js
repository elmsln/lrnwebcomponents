/**
 * Copyright 2020 The Pennsylvania State University
 * @license Apache-2.0, see License.md for full text.
 */
import { LitElement, html, css } from "lit";
import { normalizeEventPath } from "@lrnwebcomponents/utils/utils.js";
/**
 * `page-contents-menu`
 * `Links that jump you to the right place in the page&#39;s content`
 * @demo demo/index.html
 * @element page-contents-menu
 */
class PageContentsMenu extends LitElement {
  //styles function
  static get styles() {
    return [
      css`
        :host {
          display: block;
        }
        :host([is-empty][hide-if-empty]) {
          display: none;
        }
        :host([hidden]) {
          display: none;
        }
        [hidden] {
          display: none;
        }
        :host([mobile]) .wrapper,
        :host([mobile]) .header,
        :host([mobile]) .header .svg {
          padding: 0;
          margin: 0;
        }
        .wrapper {
          display: inline-block;
          padding: 8px;
        }
        .header {
          display: flex;
          color: var(--page-contents-menu-heading-color, #9daab6);
          padding: 0 24px 0 0;
          margin: 0 0 8px 0;
        }
        .header .svg {
          padding-right: 6px;
          display: inline-flex;
          color: var(--page-contents-menu-link, #74818d);
        }
        svg {
          width: 1em;
          height: 1em;
          vertical-align: middle;
        }
        .header .label {
          align-items: center;
          display: inline-flex;
          font-size: var(--page-contents-menu-heading-font-size, 10px);
          font-weight: var(--page-contents-menu-heading-font-weight, 700);
          padding: 0;
          margin: 0;
          font-family: Content-font, Roboto, sans-serif;
          line-height: 1;
          letter-spacing: 1.2px;
          text-transform: uppercase;
        }

        .contents {
          margin: 0;
          padding: 0;
          list-style-type: none;
        }
        .item {
          margin: 0;
          display: block;
          padding: 0;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }
        .link {
          font-family: Content-font, Roboto, sans-serif;
          line-height: 1.5;
          display: flex;
          padding: 4px 16px 4px 24px;
          font-size: var(--page-contents-menu-link-font-size, 12px);
          text-decoration: none;
          font-weight: var(--page-contents-menu-link-font-weight, 500);
          color: var(--page-contents-menu-link, #74818d);
          cursor: pointer;
          margin: 0;
          align-items: center;
          vertical-align: middle;
          -webkit-box-align: center;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }
        .link:hover,
        .link:focus,
        .link:active {
          text-decoration: underline;
          color: var(--page-contents-menu-link-hover, rgb(56, 132, 255));
        }
        .link:focus {
          outline: 1px solid var(--page-contents-menu-link, black);
          outline-offset: 4px;
        }
        .indent-1 {
          padding-left: 0px;
        }
        .indent-2 {
          padding-left: 16px;
        }
        .indent-3,
        .indent-4,
        .indent-5,
        .indent-6 {
          padding-left: 32px;
        }
        .active {
          font-weight: bold;
          border-left: black 2px solid;
        }
      `,
    ];
  }

  // render function
  render() {
    return html`
      <section class="wrapper" role="navigation">
        <div class="header">
          <a
            class="svg"
            @click="${this.toggleSettings}"
            @keypress="${this.keyToggle}"
            id="popovertarget"
            aria-label="${this.label}"
          >
            <svg
              preserveAspectRatio="xMidYMid meet"
              height="1em"
              width="1em"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke="currentColor"
              class="icon-7f6730be--text-3f89f380"
            >
              <g>
                <line x1="21" y1="10" x2="7" y2="10"></line>
                <line x1="21" y1="6" x2="3" y2="6"></line>
                <line x1="21" y1="14" x2="3" y2="14"></line>
                <line x1="21" y1="18" x2="7" y2="18"></line>
              </g>
            </svg>
          </a>
          <simple-tooltip
            for="popovertarget"
            offset="32"
            ?hidden="${!this.mobile || !this.hideSettings}"
          >
            ${this.label}
          </simple-tooltip>
          ${!this.mobile ? html` <h2 class="label">${this.label}</h2> ` : ``}
        </div>
        ${this.mobile
          ? html`
              <simple-popover
                class="dropdown pull-left font-settings js-toolbar-action settings-container"
                ?hidden="${this.hideSettings}"
                position="${this.position}"
                auto
              >
                <ol class="contents">
                  ${this.items.map((item, index) =>
                    this.renderItem(item, index)
                  )}
                </ol>
              </simple-popover>
            `
          : html`
              <ol class="contents">
                ${this.items.map((item, index) => this.renderItem(item, index))}
              </ol>
            `}
      </section>
    `;
  }
  keyToggle(e) {
    if (["Enter", "Space"].includes(e.key)) {
      this.toggleSettings(e);
    }
  }
  keyScroll(e) {
    if (e.key == "Enter") {
      this.scrollToObject(e);
    }
  }
  toggleSettings(e) {
    if (this.mobile) {
      this.hideSettings = !this.hideSettings;
    }
  }
  scrollToObject(e) {
    var target = normalizeEventPath(e)[0];
    if (target.getAttribute("data-index")) {
      e.preventDefault();
      e.stopPropagation();
      e.stopImmediatePropagation();
      this.items[
        parseInt(target.getAttribute("data-index"))
      ].object.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
      // keep state in history
      window.history.pushState({}, null, target.getAttribute("href"));
      // close menu
      this.hideSettings = true;
    }
  }
  renderItem(item, index) {
    if (item.link == null && item.object) {
      // tab index ensures browser treats it like a normal link
      return html`
        <li class="item">
          <a
            class="link indent-${item.indent} ${item.active}"
            tabindex="0"
            @click="${this.scrollToObject}"
            @keypress="${this.keyScroll}"
            data-index="${index}"
            >${item.title}</a
          >
        </li>
      `;
    }
    return html`
      <li class="item">
        <a
          class="link indent-${item.indent} ${item.active}"
          href="${item.link}"
          @click="${this.scrollToObject}"
          @keypress="${this.keyScroll}"
          data-index="${index}"
          >${item.title}</a
        >
      </li>
    `;
  }

  // properties available to the custom element for data binding
  static get properties() {
    return {
      contentContainer: {
        type: Object,
      },
      relationship: {
        type: String,
      },
      items: {
        type: Array,
      },
      position: {
        type: String,
      },
      mobile: {
        type: Boolean,
        reflect: true,
      },
      label: {
        type: String,
      },
      hideSettings: {
        type: Boolean,
      },
      hideIfEmpty: {
        type: Boolean,
        attribute: "hide-if-empty",
        reflect: true,
      },
      isEmpty: {
        type: Boolean,
        attribute: "is-empty",
        reflect: true,
      },
    };
  }

  /**
   * Convention we use
   */
  static get tag() {
    return "page-contents-menu";
  }

  /**
   * HTMLElement
   */
  constructor() {
    super();
    // default is to use the parent container unless a content container
    // is defined otherwise. This would imply usage of placing this at the TOP of
    // content area though next, pervious and none are valid
    this.relationship = null;
    this.fallbackText = {};
    this.items = [];
    this.isEmpty = true;
    this.hideIfEmpty = false;
    this.position = "left";
    this.contentContainer = null;
    this.mobile = false;
    // how long to wait between updating. 100ms default
    this.scrollPolling = 100;
    // only useful with mobile
    this.hideSettings = true;
    this.label = "Contents";
    // so we can close the menu
    window.addEventListener("click", this.checkMenuOpen.bind(this));
    // default to all hierarchy tags to obtain mini-menu
    // opens the door for us adding OTHER tags in the future
    this.hierarchyTags = ["h1", "h2", "h3", "h4", "h5", "h6"];
  }

  checkMenuOpen(e) {
    var target = normalizeEventPath(e)[0];
    if (
      this.mobile &&
      !this.hideSettings &&
      target.includes &&
      !target.includes(this.__toggleTarget) &&
      !target.includes(this.shadowRoot.querySelector("simple-popover"))
    ) {
      this.hideSettings = true;
    }
  }
  firstUpdated() {
    // if we are told to use the parent and we're connected...
    if (this.relationship == "parent") {
      // which will kick that off
      this.contentContainer = this.parentElement;
    } else if (this.relationship == "next") {
      // which will kick that off
      this.contentContainer = this.nextElementSibling;
    } else if (this.relationship == "previous") {
      // which will kick that off
      this.contentContainer = this.previousElementSibling;
    }
    // anything else we ignore sot hat contentContainer can be set manually
    else {
    }
  }
  /**
   * LitElement life cycle - property changed
   */
  updated(changedProperties) {
    changedProperties.forEach((oldValue, propName) => {
      // fire a "scroll" processing event if the list of items updated
      // this ensures if something else changes the available items that we are
      // still trying to mark something as active
      if (propName == "items" && this[propName] && this[propName].length > 0) {
        setTimeout(() => {
          this.scrollFinished();
        }, 0);
      }
      if (propName == "contentContainer") {
        this._contentContainerChanged(this[propName]);
      }
      // dynamic import pop over if we go mobile mode
      if (propName == "mobile") {
        if (this[propName]) {
          import("@lrnwebcomponents/simple-popover/simple-popover.js").then(
            (module) => {
              setTimeout(() => {
                // hook up the pop over menu
                this.__toggleTarget =
                  this.shadowRoot.querySelector("#popovertarget");
                this.__toggleTarget.setAttribute("tabindex", "0");
                this.shadowRoot.querySelector("simple-popover").target =
                  this.__toggleTarget;
              }, 0);
            }
          );
          import("@lrnwebcomponents/simple-tooltip/simple-tooltip.js");
        } else if (oldValue && !this[propName]) {
          this.__toggleTarget.removeAttribute("tabindex");
        }
      }
    });
  }
  /**
   * Update the menu. This can be run manually to easily wire into mutationobservers
   * or other events that modify what's in the content container node without
   * constantly monitoring it for changes.
   */
  updateMenu() {
    const validTags = this.hierarchyTags;
    let items = [];
    // loop over the new nodes
    for (var i = 0; i < this.contentContainer.childNodes.length; i++) {
      // verify this tag is a valid one
      let item = this.contentContainer.childNodes[i];
      if (
        typeof item.tagName !== typeof undefined &&
        validTags.includes(item.tagName.toLowerCase())
      ) {
        let title = item.innerText;
        if (
          item.innerText == "" &&
          this.fallbackText[item.tagName.toLowerCase()]
        ) {
          title = this.fallbackText[item.tagName.toLowerCase()];
        }
        let reference = {
          title: title,
          link: item.id ? document.location.pathname + "#" + item.id : null,
          object: item,
          indent: parseInt(item.tagName.toLowerCase().replace("h", "")),
          active: "",
        };
        items.push(reference);
      }
    }
    if (items.length === 0) {
      this.isEmpty = true;
    } else {
      this.isEmpty = false;
    }
    this.items = [...items];
  }
  /**
   * Event listener for scrolling
   */
  _applyScrollDetect() {
    clearTimeout(this.__debounce);
    this.__debounce = setTimeout(() => {
      this.scrollFinished();
    }, this.scrollPolling);
  }
  /**
   * Scrolling has paused, re-evaluate what's visible
   */
  scrollFinished() {
    if (this.items) {
      // ensure only 1 thing is active and it'll always be the 1st item found from top to bottom
      let activeFound = false;
      // viewport height
      let browserViewport =
        window.innerHeight || document.documentElement.clientHeight;
      this.items.forEach((value, i) => {
        let itemTop = this.items[i].object.getBoundingClientRect().top - 100;
        let itemBottom = 0;
        // ensure bottom is ACTUALLY set to the top of the NEXT item
        if (i !== this.items.length - 1) {
          itemBottom =
            this.items[i + 1].object.getBoundingClientRect().top - 100;
        } else {
          itemBottom = browserViewport;
        }
        // we are in viewport or at least 100 px within it and NOT past it
        if (itemTop <= browserViewport && itemBottom > 0 && !activeFound) {
          activeFound = true;
          this.items[i].active = "active";
        } else {
          this.items[i].active = "";
        }
      });
      // account for potentially not finding ANYTHING yet having a "bottom" or top element
      if (!activeFound && this.items && this.items.length > 0) {
        // if we are ABOVE the 1st item, assume top; otherwise it's end
        if (
          this.items[0].object.getBoundingClientRect().top >= browserViewport
        ) {
          this.items[0].active = "active";
        } else {
          this.items[this.items.length - 1].active = "active";
        }
      }
      this.requestUpdate();
    }
  }
  /**
   * When our content container changes, process the hierarchy in question
   */
  _contentContainerChanged(newValue) {
    // simple test that this has content in it to parse
    if (newValue && newValue.childNodes && newValue.childNodes.length > 0) {
      this.updateMenu();
    }
  }

  connectedCallback() {
    if (super.connectedCallback) {
      super.connectedCallback();
    }
    document.addEventListener("scroll", this._applyScrollDetect.bind(this));
  }

  disconnectedCallback() {
    if (super.disconnectedCallback) {
      super.disconnectedCallback();
    }
    document.removeEventListener("scroll", this._applyScrollDetect.bind(this));
  }
}
customElements.define(PageContentsMenu.tag, PageContentsMenu);
export { PageContentsMenu };
