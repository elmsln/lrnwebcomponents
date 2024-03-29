import { PageContentsMenu } from "@lrnwebcomponents/page-contents-menu/page-contents-menu.js";
import { HAXCMSThemeParts } from "@lrnwebcomponents/haxcms-elements/lib/core/utils/HAXCMSThemeParts.js";
import { store } from "@lrnwebcomponents/haxcms-elements/lib/core/haxcms-site-store.js";
import "@lrnwebcomponents/simple-icon/lib/simple-icon-button-lite.js";
import { autorun, toJS } from "mobx";
import { css, html } from "lit";

class SiteMenuContent extends HAXCMSThemeParts(PageContentsMenu) {
  static get tag() {
    return "site-menu-content";
  }
  constructor() {
    super();
    this.hierarchyTags = [
      "h1",
      "h2",
      "h3",
      "h4",
      "h5",
      "h6",
      "relative-heading",
      "video-player",
      "audio-player",
    ];
    this.fallbackText = {
      "video-player": "Video",
      "audio-player": "Audio",
    };
    this.hideIfEmpty = true;
    this.__disposer = this.__disposer ? this.__disposer : [];
    autorun((reaction) => {
      this.contentContainer = store.themeElement;
      // target container if we have a fixed UI layout
      if (
        this.contentContainer &&
        this.contentContainer.HAXCMSThemeSettings &&
        this.contentContainer.HAXCMSThemeSettings.scrollTarget
      ) {
        this.contentContainer.HAXCMSThemeSettings.scrollTarget.addEventListener(
          "scroll",
          this._applyScrollDetect.bind(this),
        );
      }
      setTimeout(() => {
        this.updateMenu();
      }, 10);
      this.__disposer.push(reaction);
    });
    autorun((reaction) => {
      // forces a menu rebuild on content change
      let content = toJS(store.activeItemContent);
      setTimeout(() => {
        this.updateMenu();
      }, 10);
      this.__disposer.push(reaction);
    });
  }

  backToTop() {
    this.contentContainer.HAXCMSThemeSettings.scrollTarget.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }
  /**
   * wrap the base render function in a part that demonstrates edit mode
   */
  render() {
    return html`
      <div .part="${this.editMode ? `edit-mode-active` : ``}">
        ${super.render()}
        <simple-icon-button-lite
          icon="icons:arrow-upward"
          @click="${this.backToTop}"
          ><span>Back to top</span></simple-icon-button-lite
        >
      </div>
    `;
  }
  static get styles() {
    return [
      super.styles,
      css`
        span {
          font-family: var(--ddd-font-navigation);
          font-weight: var(--ddd-font-navigation-bold);
        }
        simple-icon-button-lite {
          color: inherit;
          display: table;
        }
        simple-icon-button-lite:focus,
        simple-icon-button-lite:hover {
          color: var(--ddd-theme-default-link);
        }
        .contents {
          max-height: 80vh;
          padding: 8px;
          border-bottom: var(--ddd-border-xs);
        }
        @media screen and (max-width: 600px) {
          .indent-1,
          .indent-2,
          .indent-3,
          .indent-4,
          .indent-5,
          .indent-6 {
            padding-left: 4px;
          }
        }
        :host([hide-if-empty][is-empty]) {
          display: none !important;
        }
        :host([mobile]) .item {
          max-width: 300px;
        }
        :host([mobile]) {
          --page-contents-menu-link-font-size: var(--ddd-font-size-4xs);
          --page-contents-menu-link-font-size-active: var(--ddd-font-size-4xs);
          --page-contents-menu-link-font-size-focus: var(--ddd-font-size-4xs);
        }
        :host([mobile]) simple-popover {
          --simple-popover-max-height: 300px;
          --simple-popover-max-width: 340px;
          overflow: hidden;
          top: 0px !important;
        }
        :host([mobile]) simple-icon-button-lite {
          display: none;
        }
      `,
    ];
  }
}

customElements.define(SiteMenuContent.tag, SiteMenuContent);
export { SiteMenuContent };
