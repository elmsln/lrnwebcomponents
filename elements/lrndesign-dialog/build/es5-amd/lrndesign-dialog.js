define([
  "./node_modules/@polymer/polymer/polymer-legacy.js",
  "./node_modules/@polymer/paper-dialog-behavior/paper-dialog-behavior.js",
  "./node_modules/@polymer/paper-dialog-behavior/paper-dialog-shared-styles.js"
], function(_polymerLegacy, _paperDialogBehavior) {
  "use strict";
  function _templateObject_8eb0db60e11811e8bcf049857298e679() {
    var data = babelHelpers.taggedTemplateLiteral([
      '\n    <style include="paper-dialog-shared-styles"></style>\n    <slot></slot>\n'
    ]);
    _templateObject_8eb0db60e11811e8bcf049857298e679 = function() {
      return data;
    };
    return data;
  }
  (0, _polymerLegacy.Polymer)({
    _template: (0, _polymerLegacy.html)(
      _templateObject_8eb0db60e11811e8bcf049857298e679()
    ),
    is: "lrndesign-dialog",
    behaviors: [_paperDialogBehavior.PaperDialogBehavior]
  });
});
