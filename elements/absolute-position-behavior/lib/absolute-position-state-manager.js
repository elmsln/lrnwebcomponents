/**
 * Copyright 2018 The Pennsylvania State University
 * @license Apache-2.0, see License.md for full text.
 */
import { LitElement } from "lit";

// register globally so we can make sure there is only one
window.AbsolutePositionStateManager = window.AbsolutePositionStateManager || {};
// request if this exists. This helps invoke element existing in dom
// as well as that there is only one of them. That way we can ensure everything
// is rendered through same modal
window.AbsolutePositionStateManager.requestAvailability = () => {
  if (!window.AbsolutePositionStateManager.instance) {
    window.AbsolutePositionStateManager.instance = document.createElement(
      "absolute-position-state-manager"
    );
    let instance = window.AbsolutePositionStateManager.instance;
    document.body.appendChild(instance);
  }
  return window.AbsolutePositionStateManager.instance;
};
/**
 * `absolute-position-state-manager`
 * manages state of multiple absolute-positioned elements on a page
 *
 * @element absolute-position-state-manager
 */
class AbsolutePositionStateManager extends LitElement {
  /**
   * Store tag name to make it easier to obtain directly.
   */
  static get tag() {
    return "absolute-position-state-manager";
  }

  // properties available to custom element for data binding
  static get properties() {
    return {
      /**
       * Stores an array of all elements using manager.
       */
      elements: {
        type: Array,
      },
      /**
       * mutation observer
       */
      __observer: {
        type: Object,
      },
      /**
       * resize timeout
       */
      __timeout: {
        type: Object,
      },
    };
  }

  /**
   * Makes sure there is a utility ready and listening for elements.
   */
  constructor() {
    super();
    this.elements = [];
    this.__timeout = false;
    this.__observer = new MutationObserver((mutations) =>
      this.checkMutations(mutations)
    );
  }

  /**
   * Loads element into array
   * @param {object} element to be added
   */
  loadElement(el) {
    //only have event listeners when there are elements using manager
    if (this.elements.length < 1) {
      this.__observer.observe(document, {
        attributes: true,
        childList: true,
        subtree: true,
        characterData: true,
      });
      this.updateElements();
      document.addEventListener("load", this.updateElements);
      window.addEventListener("resize", this._handleResize);
    }
    this.elements.push(el);
    el.style.top = 0;
    el.style.left = 0;
    this.positionElement(el);
  }

  /**
   * Unloads element from array
   * @param {object} element to be removed
   */
  unloadElement(el) {
    this.elements.filter((element) => element === el);
    if (this.elements.length < 1) this.removeEventListeners();
  }

  /**
   * handles resize event
   */
  _handleResize() {
    if (this.__timeout) clearTimeout(this.__timeout);
    this.__timeout = setTimeout(
      window.AbsolutePositionStateManager.instance.updateElements(),
      250
    );
  }

  /**
   * Checks if there are any chances other than to
   * element's position and updates accordioning.
   * This is needed so that positioning elements
   * doesn't trigger an infinite loop of updates.
   *
   * @param {array} mutation records
   * @return {void}
   */
  checkMutations(mutations) {
    let update = false;

    mutations.forEach((mutation) => {
      if (update) return;
      update =
        update ||
        !(
          mutation.type === "attributes" &&
          mutation.attributeName === "style" &&
          this.elements.includes(mutation.target)
        );
    });
    if (update) this.updateElements();
  }

  /**
   * Returns target element that this element is anchored to. It is
   * either element given by `for` attribute, or immediate parent
   * of element.
   *
   * Uses `target` object if specified.
   * If not, queries document for elements with id specified in `for` attribute.
   * If there is more than one element that matches, gets closest matching element.
   *
   * @param {object} element using absolute-position behavior
   * @return {object} target element for positioning
   */
  findTarget(el) {
    let selector = "#" + el.for,
      target = el.target,
      ancestor = el;

    while (
      !!el.for &&
      !target &&
      !!ancestor &&
      !!ancestor.parentNode &&
      ancestor !== document
    ) {
      ancestor = ancestor.parentNode;
      target = ancestor ? ancestor.querySelector(selector) : undefined;
      if (ancestor.nodeType === 11) ancestor = ancestor.host;
      target = !target && ancestor ? ancestor.querySelector(selector) : target;
    }
    return target;
  }

  /**
   * Removes event listeners
   * @return {void}
   */
  removeEventListeners() {
    if (this.__observer && this.__observer.disconnect)
      this.__observer.disconnect();
    document.removeEventListener("load", this.updateElements);
    window.removeEventListener("resize", this._handleResize);
  }

  /**
   * Updates position for all elements on page.
   * @return {void}
   */
  updateElements() {
    this.elements.forEach((element) => this.positionElement(element));
  }

  _getParentNode(node) {
    let parent = node.parentNode;
    if (
      parent !== undefined &&
      parent !== null &&
      parent.nodeType === Node.DOCUMENT_FRAGMENT_NODE
    ) {
      parent = parent.host;
    }
    return parent;
  }

  /**
   * Gets an updated position based on target.
   * @param {object} element using absolute-position behavior
   * @return {void}
   */
  positionElement(el) {
    if (!el.position) {
      el.position = "bottom";
    }
    let target = this.findTarget(el),
      parent = el.offsetParent,
      t = !target || target.getBoundingClientRect();
    if (!target || !parent) return;
    if (el.justify) el.style.width = `${t.width}px`;
    let offset = parseFloat(el.offset),
      w = document.body.getBoundingClientRect(),
      p = parent.getBoundingClientRect(),
      e = el.getBoundingClientRect(),
      //place element before vertically?
      vertical = (pos = el.position) => pos !== "left" && pos !== "right",
      //place element before target?
      before = (pos = el.position) => pos === "left" || pos === "top",
      /**
       * aligns horizontally if position is vertical
       * or aligns vertically if position is horizontal
       */
      setAlign = (v = vertical(el.position)) => {
        //fits element within parent's boundaries
        let pxToNum = (px) => parseFloat(px.replace("px", "")),
          min = v
            ? pxToNum(el.style.left) - e.left
            : pxToNum(el.style.top) - e.top,
          startAt = v ? "left" : "top",
          distance = (rect) => (v ? rect.width : rect.height),
          max = min + distance(w) - distance(e),
          align = min;
        if (el.positionAlign === "end") {
          align += t[startAt] - distance(e) + distance(t);
        } else if (el.positionAlign === "start") {
          align += t[startAt];
        } else {
          align += t[startAt] - distance(e) / 2 + distance(t) / 2;
        }
        return el.fitToVisibleBounds
          ? Math.max(min, Math.min(max, align)) + "px"
          : align + "px"; //if element size > parent, align where parent begins
      },
      getCoord = (pos = el.position) => {
        let pxToNum = (px) => parseFloat(px.replace("px", "")),
          adjust = vertical(pos)
            ? pxToNum(el.style.top) - e.top
            : pxToNum(el.style.left) - e.left,
          eh =
            window.getComputedStyle(el, null).overflowY == "visible"
              ? Math.max(e.height, el.scrollHeight)
              : e.height,
          ew =
            window.getComputedStyle(el, null).overflowX == "visible"
              ? Math.max(e.width, el.scrollWidth)
              : e.width;
        return pos === "top"
          ? t.top + adjust - eh - offset + "px"
          : pos === "left"
          ? t.left + adjust - ew - offset + "px"
          : t[pos] + adjust + offset + "px";
      },
      isFit = (pos = el.position) => {
        //determines if room for element between parent and target
        let distance = (rect) =>
          vertical(pos) ? e.height + offset : e.width + offset;
        return before(pos)
          ? t[pos] - w[pos] > distance
          : w[pos] - t[pos] > distance; //if no room, return original position
      },
      flip = el.fitToVisibleBounds !== false && !isFit(el.position),
      flipData = {
        top: ["bottom", "left", "right"],
        left: ["right", "top", "bottom"],
        bottom: ["top", "right", "left"],
        right: ["left", "bottom", "top"],
      };
    el.style.position = "absolute";
    /*
     * fits element according to specified postion,
     * or finds an alternative position that fits
     */
    if (flip && isFit(flipData[el.position][0])) {
      el.position = flipData[el.position][0];
    } else if (flip && isFit(flipData[el.position][1])) {
      el.position = flipData[el.position][1];
    } else if (flip && isFit(flipData[el.position][2])) {
      el.position = flipData[el.position][2];
    } else {
      el.style.top = vertical(el.position) ? getCoord() : setAlign();
      el.style.left = vertical(el.position) ? setAlign() : getCoord();
      //provide positions for element and target (in case furthor positioning adjustments are needed)
      el.__positions = {
        self: e,
        parent: p,
        target: t,
      };
    }
  }

  /**
   * life cycle, element is removed from DOM
   */
  disconnectedCallback() {
    this.removeEventListeners();
    super.disconnectedCallback();
  }
}
window.customElements.define(
  AbsolutePositionStateManager.tag,
  AbsolutePositionStateManager
);
export { AbsolutePositionStateManager };
