define([
  "exports",
  "./node_modules/@polymer/polymer/polymer-element.js",
  "./node_modules/@lrnwebcomponents/hax-body-behaviors/lib/HAXWiring.js"
], function(_exports, _polymerElement, _HAXWiring) {
  "use strict";
  Object.defineProperty(_exports, "__esModule", { value: !0 });
  _exports.LrndesignAvatar = void 0;
  function _templateObject_dcfd8060d6f611e88c93571838b75e8a() {
    var data = babelHelpers.taggedTemplateLiteral([
      "\n<style>:host {\n  display: block;\n}\n\n:host([hidden]) {\n  display: none;\n}\n</style>\n<slot></slot>"
    ]);
    _templateObject_dcfd8060d6f611e88c93571838b75e8a = function() {
      return data;
    };
    return data;
  }
  var LrndesignAvatar = (function(_PolymerElement) {
    babelHelpers.inherits(LrndesignAvatar, _PolymerElement);
    function LrndesignAvatar() {
      babelHelpers.classCallCheck(this, LrndesignAvatar);
      return babelHelpers.possibleConstructorReturn(
        this,
        (
          LrndesignAvatar.__proto__ || Object.getPrototypeOf(LrndesignAvatar)
        ).apply(this, arguments)
      );
    }
    babelHelpers.createClass(
      LrndesignAvatar,
      [
        {
          key: "connectedCallback",
          value: function connectedCallback() {
            babelHelpers
              .get(
                LrndesignAvatar.prototype.__proto__ ||
                  Object.getPrototypeOf(LrndesignAvatar.prototype),
                "connectedCallback",
                this
              )
              .call(this);
            this.HAXWiring = new _HAXWiring.HAXWiring();
            this.HAXWiring.setHaxProperties(
              LrndesignAvatar.haxProperties,
              LrndesignAvatar.tag,
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
              _templateObject_dcfd8060d6f611e88c93571838b75e8a()
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
                title: "Lrndesign avatar",
                description: "Automated conversion of lrndesign-avatar/",
                icon: "icons:android",
                color: "green",
                groups: ["Avatar"],
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
            return "lrndesign-avatar";
          }
        }
      ]
    );
    return LrndesignAvatar;
  })(_polymerElement.PolymerElement);
  _exports.LrndesignAvatar = LrndesignAvatar;
  window.customElements.define(LrndesignAvatar.tag, LrndesignAvatar);
});
