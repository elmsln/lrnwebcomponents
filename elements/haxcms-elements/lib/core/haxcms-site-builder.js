import { LitElement, html, css } from "lit";
import {
  encapScript,
  findTagsInHTML,
  wipeSlot,
  varExists,
} from "@lrnwebcomponents/utils/utils.js";
import { autorun, toJS } from "mobx";
import { store, HAXcmsStore } from "./haxcms-site-store.js";
import "@lrnwebcomponents/simple-progress/simple-progress.js";
import "@lrnwebcomponents/replace-tag/replace-tag.js";
import { I18NMixin } from "@lrnwebcomponents/i18n-manager/lib/I18NMixin.js";
/**
 * `haxcms-site-builder`
 * `build the site and everything off of this`
 * @microcopy - the mental model for this element
 * - This is a factory element, it doesn't do much on its own visually
 * - it loads a site.json file and then utilizes this data in order to construct
 *   what theme it should load (element) in order to get everything off and running
 */
class HAXCMSSiteBuilder extends I18NMixin(LitElement) {
  static get styles() {
    return [
      css`
        :host {
          display: block;
          position: relative;
        }
        :host #slot {
          background-color: var(--haxcms-color, white);
          opacity: 0.2;
          visibility: hidden;
        }
        :host([dashboard-opened]) {
          display: inline-block !important;
          margin-left: 50vw;
          height: 100vh;
          pointer-events: none;
          opacity: 0.5;
          width: 100vw;
        }
        :host([theme-loaded]) #slot {
          opacity: 1;
          visibility: visible;
        }
        simple-progress {
          display: block;
          width: 100%;
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          background-color: transparent;
          z-index: 1000;
          --simple-progress-active-color: var(
            --haxcms-color,
            rgba(255, 255, 255, 0.5)
          );
        }
        simple-progress[disabled] {
          display: none;
        }
      `,
    ];
  }
  /**
   * Store the tag name to make it easier to obtain directly.
   */
  static get tag() {
    return "haxcms-site-builder";
  }
  // render function
  render() {
    return html`
      <haxcms-site-router base-uri="${this.baseURI}"></haxcms-site-router>
      <simple-progress .disabled="${!this.loading}"></simple-progress>
      <div id="slot"><slot></slot></div>
      <slot name="haxcms-site-editor-ui-prefix-avatar"></slot>
      <slot name="haxcms-site-editor-ui-prefix-buttons"></slot>
      <slot name="haxcms-site-editor-ui-suffix-buttons"></slot>
      <simple-colors-polymer></simple-colors-polymer>
    `;
  }
  /**
   * Simple "two way" data binding from the element below via events
   */
  _updateManifest(data) {
    this.manifest = { ...data };
  }
  _updateLoading(e) {
    this.loading = e.detail.value;
  }
  hashCode(s) {
    return s.split("").reduce((a, b) => {
      a = (a << 5) - a + b.charCodeAt(0);
      return a & a;
    }, 0);
  }
  // normalize the application of IDs so that we can target parts
  // of the page for scroll and referencing in general via URL hash
  nodeNormalizeIDs(node) {
    if (
      node.tagName &&
      node.getAttribute("id") == null &&
      ["H1", "H2", "H3", "H4", "H5", "H6"].includes(node.tagName)
    ) {
      if (node.getAttribute("resource")) {
        node.setAttribute("id", node.getAttribute("resource"));
      } else {
        let id =
          node.tagName.toLowerCase() + "-" + this.hashCode(node.innerText);
        node.setAttribute("id", id);
      }
    }
  }
  _updateActiveItemContent(data) {
    let tmp = document.createElement("div");
    tmp.innerHTML = data;
    tmp.childNodes.forEach((node) => {
      this.nodeNormalizeIDs(node);
    });
    data = tmp.innerHTML;
    this.activeItemContent = data;
  }
  /**
   * Load Page data
   */
  async loadPageData() {
    // file required or we have nothing; other two mixed in for pathing
    if (this.activeItemLocation) {
      this.loading = true;
      let url = `${this.outlineLocation}${this.activeItemLocation}`;
      if (this._timeStamp != "") {
        if (url.indexOf("?") != -1) {
          url += `&${this._timeStamp}`;
        } else {
          url += `?${this._timeStamp}`;
        }
      }
      await fetch(url)
        .then((response) => {
          if (response.ok) {
            return response.text();
          } else {
            this.lastErrorChanged(err);
          }
        })
        .then((data) => {
          this._updateActiveItemContent(data);
          this.loading = false;
        })
        .catch((err) => {
          this.lastErrorChanged(err);
        });
    }
  }
  /**
   * Load JSON Outline Schema / site.json format
   */
  async loadJOSData() {
    // file required or we have nothing; other two mixed in for pathing
    if (this.file) {
      this.loading = true;
      let url = `${this.outlineLocation}${this.file}`;
      try {
        // if this is successful it means we were handed a JSON blob of the site itself
        let data = JSON.parse(this.file);
        this._updateManifest(data);
        this.loading = false;
      } catch (e) {
        // weird looking but this is the typical use-case in which
        // we got a file path and try to load it because the above silently failed
        if (this._timeStamp && this._timeStamp != "") {
          if (url.indexOf("?") != -1) {
            url += `&${this._timeStamp}`;
          } else {
            url += `?${this._timeStamp}`;
          }
        }
        var headers = { cache: "no-cache" };
        await fetch(url, headers)
          .then((response) => {
            if (response.ok) {
              return response.json();
            } else {
              this.lastErrorChanged(err);
            }
          })
          .then((data) => {
            this._updateManifest(data);
            this.loading = false;
          })
          .catch((err) => {
            this.lastErrorChanged(err);
          });
      }
    }
  }
  /**
   * life cycle updated
   */
  updated(changedProperties) {
    // track these so we can debounce if multiple values updated at once
    let loadOutline = false;
    let loadPage = false;
    changedProperties.forEach((oldValue, propName) => {
      if (
        ["outlineLocation", "activeItemLocation"].includes(propName) &&
        this[propName] != ""
      ) {
        loadPage = true;
      }
      if (
        ["outlineLocation", "file"].includes(propName) &&
        this[propName] != ""
      ) {
        loadOutline = true;
      }
      if (propName == "_timeStamp") {
        loadOutline = true;
        loadPage = true;
      }
      if (propName == "dashboardOpened") {
        this._dashboardOpenedChanged(this[propName], oldValue);
      } else if (propName == "themeData") {
        this._themeChanged(this[propName], oldValue);
      } else if (propName == "themeName") {
        this._themeNameChanged(this[propName], oldValue);
      } else if (propName == "outlineLocation") {
        // fire an to match notify
        this.dispatchEvent(
          new CustomEvent("outline-location-changed", {
            bubbles: true,
            cancelable: true,
            composed: true,
            detail: this[propName],
          })
        );
      } else if (propName == "manifest") {
        // fire an to match notify
        this.dispatchEvent(
          new CustomEvent("manifest-changed", {
            bubbles: true,
            cancelable: true,
            composed: true,
            detail: this[propName],
          })
        );
        this._manifestChanged(this[propName], oldValue);
      } else if (propName == "activeItem") {
        // fire an to match notify
        this.dispatchEvent(
          new CustomEvent("active-item-changed", {
            bubbles: true,
            cancelable: true,
            composed: true,
            detail: this[propName],
          })
        );
        this._activeItemChanged(this[propName], oldValue);
      } else if (propName == "activeItemContent") {
        // fire an to match notify
        this.dispatchEvent(
          new CustomEvent("active-item-content-changed", {
            bubbles: true,
            cancelable: true,
            composed: true,
            detail: this[propName],
          })
        );
        this._activeItemContentChanged(this[propName], oldValue);
      }
    });
    if (loadOutline && this.__ready) {
      this.loadJOSData();
    }
    if (loadPage && this.__ready) {
      this.loadPageData();
    }
  }
  static get properties() {
    return {
      activeItemLocation: {
        type: String,
        attribute: "active-item-location",
      },
      _timeStamp: {
        type: String,
      },
      dashboardOpened: {
        type: Boolean,
        reflect: true,
        attribute: "dashboard-opened",
      },
      /**
       * queryParams
       */
      queryParams: {
        type: Object,
      },
      /**
       * Loading status of the page to render.
       */
      loading: {
        type: Boolean,
        reflect: true,
      },
      /**
       * support for alternate locations.
       */
      outlineLocation: {
        type: String,
        attribute: "outline-location",
      },
      /**
       * Manifest from file
       */
      manifest: {
        type: Object,
      },
      /**
       * Theme, used to boot a design element
       */
      themeData: {
        type: Object,
      },
      /**
       * Theme name, which we then use to setup the theme
       */
      themeName: {
        type: String,
      },
      /**
       * Imported items so we can allow theme flipping dynamically
       */
      __imported: {
        type: Object,
      },
      /**
       * theme loaded to indicate to the theme we have a theme ready to go
       */
      themeLoaded: {
        type: Boolean,
        reflect: true,
        attribute: "theme-loaded",
      },
      /**
       * Active item which is in JSON Outline Schema
       */
      activeItem: {
        type: Object,
      },
      /**
       * Active item content
       */
      activeItemContent: {
        type: String,
      },
      /**
       * Location of the site.json file
       */
      file: {
        type: String,
      },
      /**
       * Injected by HAXcms
       */
      baseURI: {
        type: String,
        attribute: "base-uri",
      },
    };
  }
  _themeNameChanged(newValue) {
    if (newValue) {
      // drop old theme element if there is one
      if (store.themeElement) {
        store.themeElement.remove();
      }
      // wipe out what we got
      wipeSlot(this, "*");
      store.themeElement = document.createElement(newValue);
      // apply a class so that we can write generic CSS selectors in integrations
      store.themeElement.classList.add("haxcms-theme-element");
      this.appendChild(store.themeElement);
    }
  }
  /**
   * Alert there was an internal error in getting the file
   */
  lastErrorChanged(e) {
    if (e) {
      console.error(e);
      // not every error has a value if it just failed
      if (e.detail && e.detail.value) {
        // if we force reloads then let's do it now
        if (
          window &&
          window.location &&
          window.appSettings &&
          window.appSettings.reloadOnError
        ) {
          window.location.reload();
        }
        const evt = new CustomEvent("simple-toast-show", {
          bubbles: true,
          composed: true,
          cancelable: false,
          detail: {
            text: e.detail.value.status + " " + e.detail.value.statusText,
          },
        });
        window.dispatchEvent(evt);
      } else {
        // no detail is bad, this implies a server level connection error
        // if we force reloads then let's do it now
        if (
          window &&
          window.location &&
          window.appSettings &&
          window.appSettings.reloadOnError
        ) {
          window.location.reload();
        }
      }
    }
  }
  /**
   * ready life cycle
   */
  constructor() {
    super();
    this.registerLocalization({
      context: this,
      namespace: "haxcms",
      localesPath: new URL("./locales", import.meta.url).href,
      locales: ["es"],
    });
    this.__disposer = [];
    this.queryParams = {};
    this.loading = false;
    this.__imported = {};
    this.themeLoaded = false;
    this.outlineLocation = "";
    this.activeItemLocation = "";
    import("./haxcms-site-router.js").then(() => {
      HAXcmsStore.storePieces.siteBuilder = this;
    });
    window.addEventListener("hax-store-ready", this.storeReady.bind(this));
    window.addEventListener(
      "haxcms-trigger-update",
      this._triggerUpdatedData.bind(this)
    );
    window.addEventListener(
      "haxcms-trigger-update-node",
      this._triggerUpdatedNode.bind(this)
    );
  }
  firstUpdated(changedProperties) {
    if (super.firstUpdated) {
      super.firstUpdated(changedProperties);
    }
    this.__ready = true;
    window.dispatchEvent(
      new CustomEvent("haxcms-ready", {
        bubbles: true,
        composed: true,
        cancelable: false,
        detail: this,
      })
    );
    // support initial setup stuff with slots
    for (var i in this.children) {
      if (this.children[i].tagName && this.children[i].getAttribute("slot")) {
        const item = this.children[i].cloneNode(true);
        let key = item.getAttribute("slot");
        switch (key) {
          case "haxcms-site-editor-ui-prefix-avatar":
          case "haxcms-site-editor-ui-prefix-buttons":
          case "haxcms-site-editor-ui-suffix-buttons":
            store.setupSlots[key] = item;
            break;
        }
      }
    }
    // dyanmcially import the editor builder which figures out if we should have one
    // prettier-ignore
    import(
      "@lrnwebcomponents/haxcms-elements/lib/core/haxcms-editor-builder.js"
    )
      .then((response) => {
        import("@lrnwebcomponents/simple-toast/simple-toast.js");
        this.editorBuilder = document.createElement("haxcms-editor-builder");
        // attach editor builder after we've appended to the screen
        document.body.appendChild(this.editorBuilder);
        // get fresh data if not published / demo which is a form of published
        if (
          HAXcmsStore.getApplicationContext() !==
          "published"
        ) {
          this._timeStamp = Math.floor(Date.now() / 1000);
        } else {
          this._timeStamp = "";
        }
      })
      .catch((error) => {
        /* Error handling */
        console.warn(error);
      });
    window.dispatchEvent(new Event("resize"));
    setTimeout(() => {
      autorun((reaction) => {
        this.dashboardOpened = toJS(store.dashboardOpened);
        this.__disposer.push(reaction);
      });
      autorun((reaction) => {
        this.themeData = toJS(store.themeData);
        if (this.themeData) {
          // special support for "format" in the URL dictating the possible output format
          // this is for a11y, mobile, print and other possible output modes
          const urlParams = new URLSearchParams(window.location.search);
          const format = urlParams.get("format");
          if (format != null) {
            switch (format) {
              case "print-page":
                this.themeData.element = "haxcms-blank-theme";
                break;
            }
          }
        }
        if (this.themeData && this.themeData.element !== this.themeName) {
          this.themeName = this.themeData.element;
        }
        this.__disposer.push(reaction);
      });
      autorun((reaction) => {
        this.activeItem = toJS(store.activeItem);
        if (this.activeItem && this.activeItem.location) {
          this.activeItemLocation = this.activeItem.location;
        }
        this.__disposer.push(reaction);
      });
    }, 0);
  }
  _dashboardOpenedChanged(newValue, oldValue) {
    if (newValue) {
      this.setAttribute("aria-hidden", "aria-hidden");
      this.setAttribute("tabindex", "-1");
    } else if (!newValue && oldValue) {
      this.removeAttribute("aria-hidden");
      this.removeAttribute("tabindex");
    }
  }
  /**
   * Detached life cycle
   */
  disconnectedCallback() {
    for (var i in this.__disposer) {
      this.__disposer[i].dispose();
    }
    window.removeEventListener("hax-store-ready", this.storeReady.bind(this));
    window.removeEventListener(
      "haxcms-trigger-update",
      this._triggerUpdatedData.bind(this)
    );
    window.removeEventListener(
      "haxcms-trigger-update-node",
      this._triggerUpdatedNode.bind(this)
    );
    super.disconnectedCallback();
  }
  storeReady(e) {
    // append UI element to body to avoid stack order issues
    if (
      store.cmsSiteEditor &&
      store.cmsSiteEditor.instance &&
      window.HaxStore.requestAvailability().activeHaxBody &&
      store.activeItemContent
    ) {
      window.HaxStore.requestAvailability().activeHaxBody.importContent(
        store.activeItemContent
      );
    }
  }
  /**
   * Find custom element tags and replace with replace-tag for performance gains based on device context
   */
  replaceTagReplacement(html) {
    // all closing tags
    var myRegexp = /\<(\w+?\-\w*.*)\s*?\>/gim;
    // execute 1st match
    var match = myRegexp.exec(html);
    while (match != null) {
      let tag = match[1].replace("<", "").replace(">", "");
      if (tag.indexOf(" ")) {
        tag = tag.split(" ")[0];
      }
      // replace the matching custom element tag name with replace-tag
      if (tag.indexOf("-") != -1) {
        // shift the replacement over to with; leave everything else the same
        html = html.replace("<" + tag, '<replace-tag with="' + tag + '" ');
        // ensure a matching closing tag is also updated
        html = html.replace("</" + tag + ">", "</replace-tag>");
      }
      // execute again, which processes the next tag
      match = myRegexp.exec(html);
    }
    return html;
  }
  /**
   * React to content being loaded from a page.
   */
  _activeItemContentChanged(newValue, oldValue) {
    if (newValue) {
      var html = newValue;
      // only append if not empty
      if (html !== null) {
        wipeSlot(store.themeElement, "*");
        // force a page break w/ the relevant details in code
        // this allows the UI to be modified
        newValue = `<page-break
        title="${store.activeItem.title}"
        parent="${store.activeItem.parent}"
        item-id="${store.activeItem.id}"
        slug="${store.activeItem.slug}"
        order="${store.activeItem.order}"
        break-type="site"
        path-auto
        ${store.activeItem.metadata.locked ? "locked" : ""}
        ${store.activeItem.metadata.published === false ? "" : "published"}
        ></page-break>${newValue}`;
        html = encapScript(newValue);
        // set in the store
        store.activeItemContent = html;
        // insert the content as quickly as possible, then work on the dynamic imports
        setTimeout(() => {
          if (store.themeElement.childNodes.length === 0) {
            let frag = document
              .createRange()
              .createContextualFragment(this.replaceTagReplacement(html));
            store.themeElement.appendChild(frag);
            this.dispatchEvent(
              new CustomEvent("json-outline-schema-active-body-changed", {
                bubbles: true,
                composed: true,
                cancelable: false,
                detail: html,
              })
            );
          }
          // if there are, dynamically import them but only if we don't have a global manager
          if (
            !window.WCAutoload &&
            varExists(this.manifest, "metadata.node.dynamicElementLoader")
          ) {
            let tagsFound = findTagsInHTML(html);
            const basePath = new URL("./locales", import.meta.url).href;
            for (var i in tagsFound) {
              const tagName = tagsFound[i];
              if (
                this.manifest.metadata.node.dynamicElementLoader[tagName] &&
                !window.customElements.get(tagName)
              ) {
                // prettier-ignore
                import(
                  `${basePath}../../../../${this.manifest.metadata.node.dynamicElementLoader[tagName]}`
                )
                  .then((response) => {
                    //console.warn(tagName + ' dynamic import');
                  })
                  .catch((error) => {
                    /* Error handling */
                    console.warn(error);
                  });
              }
            }
          } else if (window.WCAutoload) {
            setTimeout(() => {
              window.WCAutoload.process();
            }, 0);
          }
        }, 5);
      }
    }
  }
  /**
   * Active item updated, let's request the content from it
   */
  _activeItemChanged(newValue, oldValue) {
    if (
      this.shadowRoot &&
      newValue &&
      typeof newValue.id !== typeof undefined
    ) {
      this.queryParams.nodeId = newValue.id;
    }
    // we had something, now we don't. wipe out the content area of the theme
    else if (oldValue && !newValue) {
      // fire event w/ nothing, this is because there is no content
      this.dispatchEvent(
        new CustomEvent("json-outline-schema-active-body-changed", {
          bubbles: true,
          composed: true,
          cancelable: false,
          detail: null,
        })
      );
    }
  }

  /**
   * got a message that we need to update our json manifest data
   */
  _triggerUpdatedData(e) {
    // get fresh data if not published
    if (this.editorBuilder) {
      this._timeStamp = Math.floor(Date.now() / 1000);
    } else {
      this._timeStamp = "";
    }
  }

  /**
   * got a message that we need to update our page content
   */
  _triggerUpdatedNode(e) {
    // ensure we don't get a miss on initial load
    if (this.activeItem.location) {
      this.loadPageData();
    }
  }
  /**
   * notice manifest changes and ensure slot is rebuilt.
   */
  _manifestChanged(newValue, oldValue) {
    if (newValue && newValue.metadata && newValue.items) {
      store.loadManifest(newValue, this);
    }
  }
  /**
   * notice theme changes and ensure slot is rebuilt.
   */
  _themeChanged(newValue, oldValue) {
    if (newValue) {
      this.themeLoaded = false;
      let theme = newValue;
      // create the 'theme' as a new element
      // weird but definition already here so we should be able
      // to just use this without an import, it's possible..
      if (typeof this.__imported[theme.element] !== typeof undefined) {
        this.themeLoaded = true;
      } else {
        // global will handle this
        if (window.WCAutoload) {
          this.__imported[theme.element] = theme.element;
          this.themeLoaded = true;
          setTimeout(() => {
            window.WCAutoload.process();
          }, 5);
        } else {
          // import the reference to the item dynamically, if we can
          try {
            // prettier-ignore
            import(new URL("./../../../../" + newValue.path, import.meta.url).href).then((e) => {
              // add it into ourselves so it unpacks and we kick this off!
              this.__imported[theme.element] = theme.element;
              this.themeLoaded = true;
            });
          } catch (err) {
            // error in the event this is a double registration
            // also strange to be able to reach this but technically possible
            this.themeLoaded = true;
          }
        }
      }
    }
  }
}
// this global allows a backdoor into activating the HAXcms editor UI
// this is only going to be visually enabled but it won't actually
// be able to talk to the backend correctly bc the JWT won't exist
// the endpoints are also fictional. also useful for testing purposes
window.HAXme = function (context = null) {
  if (context == null) {
    // fake a demo
    context = "demo";
    // fake endpoints
    window.appSettings = {
      login: "dist/dev/login.json",
      logout: "dist/dev/logout.json",
      saveNodePath: "dist/dev/saveNode.json",
      saveManifestPath: "dist/dev/saveManifestPath.json",
      createNodePath: "dist/dev/saveNode.json",
      deleteNodePath: "dist/dev/saveNode.json",
      saveOutlinePath: "dist/dev/saveNode.json",
      publishSitePath: "dist/dev/saveNode.json",
      syncSitePath: "dist/dev/saveNode.json",
      getNodeFieldsPath: "dist/dev/getNodeFieldsPath.json",
      getSiteFieldsPath: "dist/dev/getSiteFieldsPath.json",
      revertSitePath: "dist/dev/saveNode.json",
      getFormToken: "adskjadshjudfu823u823u8fu8fij",
      appStore: {
        url: "dist/dev/appstore.json",
      },
      // add your custom theme here if testing locally and wanting to emulate the theme selector
      // this isn't really nessecary though
      themes: {
        "haxcms-dev-theme": {
          element: "haxcms-dev-theme",
          path: "@lrnwebcomponents/haxcms-elements/lib/haxcms-dev-theme.js",
          name: "Developer theme",
        },
      },
    };
  }
  if (context == "demo") {
    window.HAXCMSContext = true;
  }
  // apply context
  if (document.body) {
    document.body.getElementsByTagName(
      "haxcms-editor-builder"
    )[0].__appliedContext = false;
    document.body
      .getElementsByTagName("haxcms-editor-builder")[0]
      .applyContext(context);
  }
};

window.customElements.define(HAXCMSSiteBuilder.tag, HAXCMSSiteBuilder);
export { HAXCMSSiteBuilder };
