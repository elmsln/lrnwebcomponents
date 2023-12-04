/**
 * Copyright 2023 The Pennsylvania State University
 * @license Apache-2.0, see License.md for full text.
 */
import { html, css, render } from "lit";
import { HAXCMSLitElementTheme } from "@lrnwebcomponents/haxcms-elements/lib/core/HAXCMSLitElementTheme.js";
import { HAXCMSRememberRoute } from "@lrnwebcomponents/haxcms-elements/lib/core/utils/HAXCMSRememberRoute.js";
import { HAXCMSThemeParts } from "@lrnwebcomponents/haxcms-elements/lib/core/utils/HAXCMSThemeParts.js";
import { PrintBranchMixin } from "@lrnwebcomponents/haxcms-elements/lib/core/utils/PrintBranchMixin.js";
import { PDFPageMixin } from "@lrnwebcomponents/haxcms-elements/lib/core/utils/PDFPageMixin.js";
import { QRCodeMixin } from "@lrnwebcomponents/haxcms-elements/lib/core/utils/QRCodeMixin.js";
import { HAXCMSMobileMenuMixin } from "@lrnwebcomponents/haxcms-elements/lib/core/utils/HAXCMSMobileMenu.js";
import { HAXCMSOperationButtons } from "@lrnwebcomponents/haxcms-elements/lib/core/utils/HAXCMSOperationButtons.js";
import { varExists, varGet } from "@lrnwebcomponents/utils/utils.js";
import { store } from "@lrnwebcomponents/haxcms-elements/lib/core/haxcms-site-store.js";
import "@lrnwebcomponents/haxcms-elements/lib/ui-components/active-item/site-active-title.js";
import "@lrnwebcomponents/haxcms-elements/lib/ui-components/active-item/site-active-tags.js";
import "@lrnwebcomponents/haxcms-elements/lib/ui-components/navigation/site-breadcrumb.js";
import { autorun, toJS } from "mobx";
import "@lrnwebcomponents/simple-icon/simple-icon.js";
import "@lrnwebcomponents/simple-icon/lib/simple-icons.js";
import "@lrnwebcomponents/haxcms-elements/lib/ui-components/layout/site-region.js";
import "@lrnwebcomponents/haxcms-elements/lib/ui-components/navigation/site-top-menu.js";
import "@lrnwebcomponents/scroll-button/scroll-button.js";
import "./collections-theme-banner.js";

/**
 * `collections-theme`
 * `A theme for presenting collections of material`
 *
 * @microcopy - language worth noting:
 *  - HAXcms - A headless content management system
 *  - HAXCMSTheme - A super class that provides correct baseline wiring to build a new theme
 *
 * @demo demo/index.html
 * @element collections-theme
 */
class CollectionsTheme extends HAXCMSOperationButtons(
  HAXCMSRememberRoute(
    PDFPageMixin(
      PrintBranchMixin(
        QRCodeMixin(
          HAXCMSThemeParts(HAXCMSMobileMenuMixin(HAXCMSLitElementTheme))
        )
      )
    )
  )
) {
  static get properties() {
    return {
      ...super.properties,
      image: { type: String },
      title: { type: String },
      color: { type: String },
      icon: { type: String },
      activeTitle: { type: String },
    };
  }
  HAXCMSGlobalStyleSheetEditModeContent() {
    return [
      ...super.HAXCMSGlobalStyleSheetEditModeContent(),
      css`
        #bodycontainer ::slotted(*) {
          font-family: "Roboto", sans-serif;
          font-weight: 300;
        }
        #bodycontainer ::slotted(h1),
        #bodycontainer ::slotted(h2),
        #bodycontainer ::slotted(h3),
        #bodycontainer ::slotted(h4),
        #bodycontainer ::slotted(h5),
        #bodycontainer ::slotted(h6) {
          font-family: "Roboto", sans-serif;
          font-weight: 400;
        }
        #bodycontainer ::slotted(p),
        #bodycontainer ::slotted(ul),
        #bodycontainer ::slotted(ol),
        #bodycontainer ::slotted(blockquote) {
          font-size: 18px;
          margin-block-start: 16px;
          margin-block-end: 16px;
        }
      `,
    ];
  }
  HAXCMSGlobalStyleSheetContent() {
    return [
      ...super.HAXCMSGlobalStyleSheetContent(),
      css`
        collections-theme {
          font-family: "Roboto", sans-serif;
          font-weight: 300;
        }
        collections-theme h1,
        collections-theme h2,
        collections-theme h3,
        collections-theme h4,
        collections-theme h5,
        collections-theme h6 {
          font-family: "Roboto", sans-serif;
          font-weight: 400;
        }
        collections-theme p,
        collections-theme ul,
        collections-theme ol,
        collections-theme blockquote {
          font-size: 18px;
          margin-block-start: 16px;
          margin-block-end: 16px;
        }
      `,
    ];
  }
  //styles function
  static get styles() {
    return [
      ...super.styles,
      css`
        :host {
          --bg-color: #ffffff;
          --content-bg-color: #ffffff;
          --nav-link-color: #363533;
          --icon-color: #363533;
          --header-bg-color: var(--haxcms-color, var(--simple-colors-default-theme-orange-6, #e2801e));
          --nav-bg-color: var(--haxcms-color, var(--simple-colors-default-theme-orange-6, #e2801e));
          --footer-secondary-bg-color: var(--haxcms-color, var(--simple-colors-default-theme-orange-6, #e2801e));
          --footer-primary-bg-color: var(--haxcms-color, var(--simple-colors-default-theme-orange-6, #e2801e));
          
          display: block;
          font-size: 18px;
          font-family: "Open Sans","Helvetica Neue",Helvetica,Arial,sans-serif;
          letter-spacing: normal;
          line-height: 28.8px;
          background-color: var(--bg-color);
          --haxcms-base-styles-body-font-size:18px;
          --hax-base-styles-a-font-size: 18px;
          --hax-base-styles-p-font-size: 18px;
          --hax-base-styles-list-font-size: 18px;
          --haxcms-base-styles-body-font-family: "Open Sans","Helvetica Neue",Helvetica,Arial,sans-serif;
          --haxcms-base-styles-body-line-height: 28.8px;
          --hax-base-styles-list-line-height: 28.8px
          --hax-base-styles-p-line-height: 28.8px;
          --hax-base-styles-p-letter-spacing: normal;
          --haxcms-base-styles-body-letter-spacing : normal;
          --hax-base-styles-p-min-height: auto;
          --hax-base-styles-list-max-width: auto;
          --haxcms-base-styles-p-min-height: auto;
          --hax-base-styles-list-padding-bottom: auto;
          --hax-base-styles-h1-font-size: inherit;
          --hax-base-styles-h2-font-size: inherit;
          --hax-base-styles-h3-font-size: inherit;
          --hax-base-styles-h4-font-size: inherit;
          --hax-base-styles-h5-font-size: inherit;
          --hax-base-styles-h6-font-size: inherit;
          --simple-tooltip-background: #000000;
          --simple-tooltip-opacity: 1;
          --simple-tooltip-text-color: #ffffff;
          --simple-tooltip-delay-in: 0;
          --simple-tooltip-border-radius: 0;
          --hax-base-styles-a-color-visited:  var(--haxcms-color, var(--simple-colors-default-theme-orange-6));
          --hax-base-styles-a-color: var(--haxcms-color, var(--simple-colors-default-theme-orange-6));
          --hax-base-styles-a-color-active: #000000;
          --site-search-result-background-color: transparent;
          --site-search-result-background-color-hover: #F5F5F5;
          --site-search-link-color-hover: #252737;
          --site-search-link-text-color: #252737;
          --site-search-link-color: #252737;
          --site-search-result-color: #252737;
        }

        #contentcontainer {
          width: 68%;
          margin: 0 auto 24px;
        }

        :host([edit-mode]) #contentcontainer {
          width: 68%;
          margin: 0 336px 24px;
        }

        #nav {
          display: flex;
          justify-content: flex-end;
          background-color: var(--nav-bg-color);
        }
        site-top-menu {
          font-family: "Roboto", sans-serif;
          --site-top-menu-wrapper-justify-content: end;
          --site-top-menu-bg: var(--nav-bg-color);
          --site-top-menu-indicator-color: #ffffff;
          --site-top-menu-link-active-color: #ffffff;
          --site-top-menu-link-color: #ffffff;
          --site-top-menu-link-bg-color: var(--nav-link-color);
          --site-top-menu-link-color-hover: var(--nav-bg-color);
          --site-top-menu-link-bg-color-hover: var(--nav-link-color);
          clear: both;
          font-weight: 300;
          line-height: 1.5;
          width: 100%;
        }
        site-top-menu::part(button) {
          font-size: 18px;
          padding: 16px;
          font-family: "Roboto", sans-serif;
          font-weight: 300;
          text-decoration: none;
          text-transform: uppercase;
        }
        site-top-menu::part(indicator) {
          margin-top: -4px;
          border-bottom-width: 4px;
        }

        @media only screen and (max-width: 700px) {
          .link a {
            font-size: 16px;
            padding: 4px;
          }
        }


        main {
          padding-top: 100px;
          font-family: "Roboto", sans-serif;
        }

        @media only screen and (max-width: 1600px) {
          main {
            padding-top: 90px;
          }
        }

        @media only screen and (max-width: 1200px) {
          main {
            padding-top: 60px;
          }
        }

        @media only screen and (max-width: 800px) {
          main {
            padding-top: 50px;
          }
        }
        scroll-button {
          --scroll-button-color: var(--haxcms-user-styles-color-theme-color-1);
          --scroll-button-active-color: var(--haxcms-user-styles-color-theme-color-1, #e2801e);
          --scroll-button-background-color: var(--haxcms-user-styles-color-theme-color-2, #e2801e);
          --scroll-button-tooltip-background-color:var(--haxcms-user-styles-color-theme-color-1);
          --scroll-button-tooltip-color: var(--haxcms-user-styles-color-theme-color-2);
          --simple-icon-height: 24px;
          --simple-icon-width: 24px;
          position: fixed;
          right: 0;
          bottom: 64px;
          margin-right: 24px;
        }
        header {
          padding: 4px;
          margin-top: 2px;
        }
        footer {
          display: block;
        }
        footer .wrap {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          background-color: var(--footer-primary-bg-color);
          min-height: 200px;
          margin: 0;
          padding: 0;
        }
        footer .site-region-wrapper .footer-secondary
        footer .site-region-wrapper .footer-primary {
          display: flex;
        }
        .footer-primary {
          font-family: "Roboto", sans-serif;
          color: #ffffff;
          font-weight: 300;
          font-size: 18px;
          line-height: 1.2;
          text-align: center;
          margin: 0;
          padding: 0;
        }
        .footer-secondary {
          font-family: "Roboto", sans-serif;
          font-size: 18px;
          color: #ffffff;
          font-weight: 300;
          line-height: 1.2;
          margin: 24px 0 0 0;
          padding: 0;
        }
        .legal-statement {
          display: flex;
          margin: 0;
          padding: 10px 0px 0px;
        }
        .legal-item {
          color: #ffffff;
          padding: 0px 8px 24px;
          border-right: 2px solid #ffffff;
          height: 0px;
          margin: 0;
        }
        .legal-item:last-child {
          border: none;
        }
        .legal-item a {
          text-decoration: none;
          color: #ffffff;
        }
        .legal-item a:focus,
        .legal-item a:hover {
          color: #000000;
        }
        .legal-item a:focus {
          outline-offset: 4px;
        }
        .mark a {
          display: flex;
          background-color: var(--footer-primary-bg-color);
          border: 2px solid #ffffff;
          border-radius: 50%;
          padding: 8px;
          opacity: 0.4;
        }
        .mark {
          margin: 24px 0px 16px;
          padding: 0;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
`,
    ];
  }

  /**
   * life cycle, element is afixed to the DOM
   */
  firstUpdated(changedProperties) {
    if (super.firstUpdated) {
      super.firstUpdated(changedProperties);
    }
    this.__link = document.createElement("link");
    this.__link.rel = "stylesheet";
    this.__link.href =
      "https://fonts.googleapis.com/css2?family=Caveat&family=Lato:wght@300;700&family=Open+Sans&display=swap";
    document.head.appendChild(this.__link);
    this.HAXCMSThemeSettings.scrollTarget =
      this.shadowRoot.querySelector("#contentcontainer");
    window.AbsolutePositionStateManager.requestAvailability().scrollTarget =
      this.HAXCMSThemeSettings.scrollTarget;

    // hook up the scroll target
    this.shadowRoot.querySelector("scroll-button").target =
      this.shadowRoot.querySelector("#haxcms-theme-top");
  }

  // render function
  render() {
    return html`
      <header itemtype="http://schema.org/WPHeader">
        <site-region name="header"></site-region>
      </header>
      <nav
        id="nav"
        part="site-top-menu"
        itemtype="http://schema.org/SiteNavigationElement"
      >
        <site-top-menu
          .part="${this.editMode ? `edit-mode-active` : ``}"
          indicator="line"
        ></site-top-menu>
      </nav>
      <collections-theme-banner
        image="${this.image}"
        sitename="${this.title}"
        pagetitle="${this.activeTitle}"
        logo="${this.logo}"
      >
      </collections-theme-banner>
      <div id="haxcms-theme-top"></div>
      <main>
        <article id="contentcontainer">
          <section id="slot">
            <slot></slot>
          </section>
        </article>
      </main>
      <footer
        itemtype="http://schema.org/WPFooter"
        .part="${this.editMode ? `edit-mode-active` : ``}"
      >
        <section class="footer">
          <div class="wrap">
            <div class="footer-secondary">
              <slot name="footer-secondary"></slot>
              <site-region name="footerSecondary"></site-region>
            </div>
            <div class="footer-primary">
              <slot name="footer-primary"></slot>
              <site-region name="footerPrimary"></site-region>
            </div>
          </div>
        </section>
        <scroll-button
          .part="${this.editMode ? `edit-mode-active` : ``}"
        ></scroll-button>
      </footer>
    `;
  }

  /**
   * Store the tag name to make it easier to obtain directly.
   * @notice function name must be here for tooling to operate correctly
   */
  static get tag() {
    return "collections-theme";
  }
  /**
   * Add elements to cheat on initial paint here
   */
  constructor() {
    super();
    this.HAXCMSThemeSettings.autoScroll = true;
    autorun(() => {
      const badDevice = toJS(store.badDevice);
      // good device, we can inject font we use
      if (badDevice === false) {
        const link = document.createElement("link");
        link.setAttribute(
          "href",
          "https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400&display=swap"
        );
        link.setAttribute("rel", "stylesheet");
        link.setAttribute("fetchpriority", "low");
        document.head.appendChild(link);
      }
    });
    autorun((reaction) => {
      let manifest = toJS(store.manifest);
      this.color = this._getColor(manifest);
      this.title = varGet(manifest, "title", "");
      this.image = varGet(
        manifest,
        "metadata.theme.variables.image",
        "assets/banner.jpg"
      );
      this.logo = varGet(manifest, "metadata.site.logo", "assets/banner.jpg");
      this.__disposer.push(reaction);
    });
    autorun((reaction) => {
      this.activeTitle = toJS(store.activeTitle);
      this.__disposer.push(reaction);
    });
  }
  _getColor(manifest) {
    if (
      manifest &&
      varExists(manifest, "metadata.theme.variables.cssVariable")
    ) {
      return manifest.metadata.theme.variables.cssVariable
        .replace("--simple-colors-default-theme-", "")
        .replace("-7", "");
    }
  }
}
customElements.define(CollectionsTheme.tag, CollectionsTheme);
export { CollectionsTheme };
