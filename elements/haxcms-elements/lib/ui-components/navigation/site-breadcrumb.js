/**
 * Copyright 2019 The Pennsylvania State University
 * @license Apache-2.0, see License.md for full text.
 */
import { LitElement, html, css } from "lit";
import { store } from "@lrnwebcomponents/haxcms-elements/lib/core/haxcms-site-store.js";
import "@lrnwebcomponents/simple-icon/lib/simple-icon-lite.js";
import "@lrnwebcomponents/simple-icon/lib/simple-icons.js";
import { autorun, toJS } from "mobx";
import { DDD } from "@lrnwebcomponents/d-d-d/d-d-d.js";
/**
 * `site-breadcrumb`
 * `A basic breadcrumb of links based on the active state in HAXcms on JSON Outline Schema`
 *
 * @demo demo/index.html
 */
class SiteBreadcrumb extends DDD {
  static get styles() {
    return [
      css`
        :host {
          display: block;
        }
        .breadcrumb {
          font-weight: var(--ddd-font-navigation-light);
          margin: var(--ddd-spacing-6) 0;
          padding: 0;
          pointer-events: auto;
          list-style: "/ ";
          gap: var(--ddd-spacing-5);
          display: flex;
          flex-flow: row;
          color: var(--ddd-theme-polaris-link);
        }
        .breadcrumb li::marker {
          color: black;
          font-weight: var(--ddd-font-primary-regular);
        }
        .breadcrumb li:first-child {
          list-style: none;
        }
        .breadcrumb li a {
          padding-left: var(--ddd-spacing-1);
          font-family: var(--ddd-font-navigation);
          font-weight: var(--ddd-font-navigation-regular);
          text-decoration: none;
          font-size: var(
            --site-breadcrumb-font-size,
            var(--ddd-font-size-4xs, 16px)
          );
          color: var(
            --site-breadcrumb-color,
            var(--ddd-theme-polaris-link, #383f45)
          );
        }
        .breadcrumb li:first-child a {
          padding-left: 0;
        }
        .breadcrumb li:last-child a {
          color: var(--site-breadcrumb-color, black);
          pointer-events: none;
        }
        .breadcrumb li a:hover {
          text-decoration: underline;
          pointer-events: auto;
        }
      `,
    ];
  }
  /**
   * Store the tag name to make it easier to obtain directly.
   */
  static get tag() {
    return "site-breadcrumb";
  }
  constructor() {
    super();
    this.__disposer = [];
    this.items = [];
  }
  // render function
  render() {
    return html` ${this.items.length > 0
      ? html`
          <ul
            class="breadcrumb"
            itemscope
            itemtype="https://schema.org/BreadcrumbList"
          >
            ${this.items.map(
              (item) => html`<li><a href="${item.slug}">${item.title}</a></li>`
            )}
          </ul>
        `
      : ``}`;
  }

  static get properties() {
    return {
      items: { type: Array },
      editMode: { type: Boolean, reflect: true, attribute: "edit-mode" },
    };
  }

  firstUpdated(changedProperties) {
    if (super.firstUpdated) {
      super.firstUpdated(changedProperties);
    }
    // keep editMode in sync globally
    autorun((reaction) => {
      this.editMode = toJS(store.editMode);
      this.__disposer.push(reaction);
    });
    autorun((reaction) => {
      this._activeItemChanged(toJS(store.activeItem));
      this.__disposer.push(reaction);
    });
  }
  /**
   * Notice the change and build
   */
  _activeItemChanged(active) {
    const activeItem = active;
    if (activeItem && this.shadowRoot) {
      var items = [
        {
          title: activeItem.title,
          slug: activeItem.slug,
        },
      ];
      let itemBuilder = activeItem;
      let manifest = toJS(store.routerManifest);
      // walk back through parent tree
      while (itemBuilder && itemBuilder.parent != null) {
        itemBuilder = manifest.items.find((i) => i.id == itemBuilder.parent);
        // double check structure is sound
        if (itemBuilder) {
          items.unshift({
            title: itemBuilder.title,
            slug: itemBuilder.slug,
          });
        }
      }
      // don't display if we are the only thing in the trail bc there is no point
      if (items.length === 1) {
        this.items = [];
      } else {
        this.items = [...items];
      }
    }
  }
  disconnectedCallback() {
    for (var i in this.__disposer) {
      this.__disposer[i].dispose();
    }
    super.disconnectedCallback();
  }
}
customElements.define(SiteBreadcrumb.tag, SiteBreadcrumb);
export { SiteBreadcrumb };
