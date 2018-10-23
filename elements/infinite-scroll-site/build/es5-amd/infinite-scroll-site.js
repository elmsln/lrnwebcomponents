define([
  "exports",
  "./node_modules/@polymer/polymer/polymer-element.js",
  "./node_modules/@lrnwebcomponents/hax-body-behaviors/lib/HAXWiring.js"
], function(_exports, _polymerElement, _HAXWiring) {
  "use strict";
  Object.defineProperty(_exports, "__esModule", { value: !0 });
  _exports.InfiniteScrollSite = void 0;
  function _templateObject_6efd3dc0d6f211e883c9b185f45169ac() {
    var data = babelHelpers.taggedTemplateLiteral([
      "\n<style>:host {\n  display: block;\n}\n\n:host([hidden]) {\n  display: none;\n}\n</style>\n<slot></slot>"
    ]);
    _templateObject_6efd3dc0d6f211e883c9b185f45169ac = function() {
      return data;
    };
    return data;
  }
  var InfiniteScrollSite = (function(_PolymerElement) {
    babelHelpers.inherits(InfiniteScrollSite, _PolymerElement);
    function InfiniteScrollSite() {
      babelHelpers.classCallCheck(this, InfiniteScrollSite);
      return babelHelpers.possibleConstructorReturn(
        this,
        (
          InfiniteScrollSite.__proto__ ||
          Object.getPrototypeOf(InfiniteScrollSite)
        ).apply(this, arguments)
      );
    }
    babelHelpers.createClass(
      InfiniteScrollSite,
      [
        {
          key: "connectedCallback",
          value: function connectedCallback() {
            babelHelpers
              .get(
                InfiniteScrollSite.prototype.__proto__ ||
                  Object.getPrototypeOf(InfiniteScrollSite.prototype),
                "connectedCallback",
                this
              )
              .call(this);
            this.HAXWiring = new _HAXWiring.HAXWiring();
            this.HAXWiring.setHaxProperties(
              InfiniteScrollSite.haxProperties,
              InfiniteScrollSite.tag,
              this
            );
          }
        }
      ],
      [
        {
          key: "template",
          get: function get() {
            return (0, _polymerElement.html)(
              _templateObject_6efd3dc0d6f211e883c9b185f45169ac()
            );
          }
        },
        {
          key: "haxProperties",
          get: function get() {
            return {
              canScale: !0,
              canPosition: !0,
              canEditSource: !1,
              gizmo: {
                title: "Infinite scroll-site",
                description: "Automated conversion of infinite-scroll-site/",
                icon: "icons:android",
                color: "green",
                groups: ["Scroll"],
                handles: [{ type: "todo:read-the-docs-for-usage" }],
                meta: {
                  author: "btopro",
                  owner: "The Pennsylvania State University"
                }
              },
              settings: { quick: [], configure: [], advanced: [] }
            };
          }
        },
        {
          key: "properties",
          get: function get() {
            return {};
          }
        },
        {
          key: "tag",
          get: function get() {
            return "infinite-scroll-site";
          }
        }
      ]
    );
    return InfiniteScrollSite;
  })(_polymerElement.PolymerElement);
  _exports.InfiniteScrollSite = InfiniteScrollSite;
  window.customElements.define(InfiniteScrollSite.tag, InfiniteScrollSite);
});
