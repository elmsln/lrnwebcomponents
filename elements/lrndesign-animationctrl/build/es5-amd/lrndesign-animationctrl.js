define([
  "./node_modules/@polymer/polymer/polymer-legacy.js",
  "./lib/lrndesign-animationctrl-button.js"
], function(_polymerLegacy) {
  "use strict";
  function _templateObject_59b5f890e11911e8a71213d990003c40() {
    var data = babelHelpers.taggedTemplateLiteral([
      '\n    <style>\n      :host {\n        display: block;\n        background: var(--animationctrl-bg-color);\n        --animationctrl-bg-color: #f5f5f5;\n      }\n      .buttons {\n        padding: 1em;\n        text-align: center;\n        display: flex;\n        justify-content: center;\n        align-items: stretch;\n        @apply --animationctrl-buttons;\n      }\n      :host ::shadow lrndesign-animationctrl-button {\n        display: flex;\n      }\n    </style>\n    <div class="buttons">\n      <slot></slot>\n    </div>\n'
    ]);
    _templateObject_59b5f890e11911e8a71213d990003c40 = function() {
      return data;
    };
    return data;
  }
  (0, _polymerLegacy.Polymer)({
    _template: (0, _polymerLegacy.html)(
      _templateObject_59b5f890e11911e8a71213d990003c40()
    ),
    is: "lrndesign-animationctrl",
    properties: {},
    listeners: { "lrndesign-animationctrl-button-click": "_buttonClicked" },
    _buttonClicked: function _buttonClicked() {},
    ready: function ready() {}
  });
});
