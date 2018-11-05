define([
  "./node_modules/@polymer/polymer/polymer-legacy.js",
  "./node_modules/@polymer/polymer/lib/legacy/polymer.dom.js",
  "./node_modules/@polymer/iron-icons/editor-icons.js",
  "./node_modules/@polymer/marked-element/marked-element.js",
  "./node_modules/@polymer/paper-tooltip/paper-tooltip.js",
  "./node_modules/@polymer/paper-card/paper-card.js",
  "./node_modules/@polymer/paper-badge/paper-badge.js",
  "./node_modules/@lrnwebcomponents/moment-element/moment-element.js",
  "./node_modules/@lrnwebcomponents/materializecss-styles/lib/colors.js",
  "./node_modules/@lrnwebcomponents/mtz-marked-editor/mtz-marked-editor.js",
  "./node_modules/@lrnwebcomponents/mtz-marked-editor/lib/mtz-marked-control-generic-line.js",
  "./node_modules/@lrnwebcomponents/mtz-marked-editor/lib/mtz-marked-control-generic-wrap.js",
  "./node_modules/@lrnwebcomponents/mtz-marked-editor/lib/controls/mtz-marked-control-link.js",
  "./node_modules/@lrnwebcomponents/word-count/word-count.js",
  "./node_modules/@lrnwebcomponents/lrnsys-button/lrnsys-button.js",
  "./node_modules/@lrnwebcomponents/lrndesign-avatar/lrndesign-avatar.js"
], function(_polymerLegacy, _polymerDom) {
  "use strict";
  function _templateObject_f97788c0e11a11e8a816d1f4966df1a3() {
    var data = babelHelpers.taggedTemplateLiteral(
      [
        '\n    <style include="materializecss-styles-colors">\n      :host {\n        display: block;\n        padding: 10px 10px 10px 0px;\n      }\n      :host([disabled]) {\n        opacity: .5;\n        background-color: #cccccc;\n        pointer-events: none;\n      }\n      :host(:focus),\n      :host(:hover) {\n        z-index: 2;\n      }\n      :host(:focus) .comment-outer,\n      :host(:hover) .comment-outer {\n        border: 1px #0277bd solid;\n      }\n      .comment-outer {\n        display: table;\n        width: 100%;\n        border: 1px #ddd solid;\n        color: #444;\n      }\n      .comment-outer.new-comment {\n        border: 1px #d81b60 dashed;\n        color: #000;\n      }\n      .comment-inner {\n        display: table-row;\n      }\n      .comment-avatar {\n        padding: 0 7px;\n        width: 40px;\n      }\n      .comment-depth,\n      .comment-avatar, \n      .comment-content {\n        padding-top: 0.5em;\n        padding-bottom: 0.5em;\n        display: table-cell;\n        vertical-align: top;\n      }\n      .comment-content {\n        padding-right: 7px;\n      }\n      h1,\n      h2,\n      h3,\n      h4 {\n        text-align: left;\n        font-size: 1rem;\n        line-height: 1.25rem;\n      }\n      h1.comment-heading,\n      h2.comment-heading,\n      h3.comment-heading,\n      h4.comment-heading {\n        margin-top: 7px;\n      }\n      p {\n        font-size: 14px;\n        line-height: 18px;\n        text-align: left;\n      }\n      #edit-comment {\n        background-color: white;\n        padding: .25em;\n      }\n      marked-element {\n        line-height: 1rem;\n        font-size: 0.9rem;\n      }\n      .nowrap-me marked-element:hover {\n        box-shadow: -1px 0 0 0 black inset;\n        cursor: pointer;\n      }\n      .nowrap-me marked-element ::slotted(#content p.marked-element) {\n        height: 2em;\n        overflow: hidden;\n        text-overflow: ellipsis;\n        margin-bottom: 35px;\n      }\n      .nowrap-me marked-element ::slotted(#content p.marked-element:after) {\n        content: "see more";\n        position: absolute;\n        bottom: 65px;\n        right: 17px;\n        color: #1976d2;\n      }\n      .comment-depth-1 {\n        width: 0em;\n      }\n      .comment-depth-2 {\n        width: 54px;\n        border-right: 3px solid #ccc;\n      }\n      .comment-depth-3,\n      .comment-depth-4,\n      .comment-depth-5,\n      .comment-depth-6,\n      .comment-depth-7,\n      .comment-depth-8,\n      .comment-depth-9 {\n        width: 108px;\n        border-right: 3px solid #ccc;\n      }\n      .center {\n        padding: 0;\n      }\n      .circle {\n        border-radius: 50% !important;\n      }\n      .comment-actions {\n        margin: 0;\n        padding: 0;\n        display: block;\n        border-top: 1px solid #ddd;\n      }\n      .comment-actions lrnsys-button {\n        display: inline-flex;\n      }\n      .comment-actions .comment-actions-group {\n        margin: 0;\n        padding: 0;\n        display: block;\n      }\n      .comment-actions .comment-actions-group.left-actions {\n        float: left;\n      }\n      .comment-actions .comment-actions-group.right-actions {\n        float: right;\n      }\n      moment-element {\n        float: right;\n        font-size: 90%;\n        font-style: italic;\n        font-weight: normal;\n      }\n      paper-badge {\n        right: 0px;\n        top: 0px;\n      }\n      .like-icon-color {\n        color: #2196F3;\n      }\n      .element-invisible {\n        position: absolute;\n        left: -9999px;\n        top: 0;\n        width: 0;\n        height: 0;\n        overflow: hidden;\n      }\n    </style>\n    <div class$="comment-outer [[commentNew]]">\n      <div class="comment-inner">\n        <div class$="comment-depth comment-depth-[[comment.attributes.threadDepth]] grey lighten-3"></div>\n        <div class="comment-avatar">\n          <lrndesign-avatar id="avatar" label="[[comment.relationships.author.data.name]]" src="[[comment.relationships.author.data.avatar]]" class="float-left ferpa-protect"></lrndesign-avatar>\n          <paper-tooltip for="avatar" animation-delay="0" class="ferpa-protect">[[displayName]]</paper-tooltip>\n        </div>\n        <div class="comment-content">\n          <div class="comment-body">\n            <div id="bodyarea" class="nowrap-me">\n              <h4 class="ferpa-protect comment-heading">\n                <span class="element-invisible">At </span><moment-element datetime$="[[comment.attributes.created]]" output-format="MMM DD[,] YYYY"></moment-element>\n                [[comment.relationships.author.data.display_name]] <span class="element-invisible">[[comment.relationships.author.data.visual.label]]</span> said:\n              </h4>\n              <marked-element smartypants="" id="rendered-comment" markdown="[[comment.attributes.body]]">\n                <word-count class="markdown-html-slot" slot="markdown-html"></word-count>\n              </marked-element>\n            </div>\n            <mtz-marked-editor id="comment-editor" hidden="">\n              <div slot="controls">\n                <mtz-marked-control-generic-wrap icon="editor:format-bold" title="Bold" syntax-prefix="**" syntax-suffix="**" keys="ctrl+b"></mtz-marked-control-generic-wrap>\n                <mtz-marked-control-generic-wrap icon="editor:format-italic" title="Italic" syntax-prefix="_" syntax-suffix="_" keys="ctrl+i"></mtz-marked-control-generic-wrap>\n                <mtz-marked-control-generic-line icon="editor:format-size" title="Heading 3" syntax-prefix="### "></mtz-marked-control-generic-line>\n                <mtz-marked-control-generic-line icon="editor:format-list-numbered" title="Ordered List" syntax-prefix="1. "></mtz-marked-control-generic-line>\n                <mtz-marked-control-generic-line icon="editor:format-list-bulleted" title="Unordered List" syntax-prefix="- "></mtz-marked-control-generic-line>\n                <mtz-marked-control-link icon="editor:insert-link" title="Link"></mtz-marked-control-link>\n              </div>\n              <paper-textarea char-counter="" autofocus="" id="edit-comment" label="Comment" value="{{comment.attributes.body}}" slot="textarea"></paper-textarea>\n            </mtz-marked-editor>\n          </div>\n          <div class="comment-actions">\n            <div class="comment-actions-group left-actions">\n              <lrnsys-button on-click="actionHandler" id="reply" data-commentid="[[comment.id]]" alt="Reply" icon="reply" hover-class="[[hoverClass]]" icon-class="grey-text no-margin" hidden$="[[!comment.actions.reply]]"></lrnsys-button>\n              <lrnsys-button on-click="actionHandler" id="like" data-commentid="[[comment.id]]" alt="Like" icon="thumb-up" hover-class="[[hoverClass]]" icon-class="grey-text no-margin" hidden$="[[!comment.actions.like]]"></lrnsys-button>\n            </div>\n            <div class="comment-actions-group right-actions">\n              <lrnsys-button on-click="actionHandler" id="edit" data-commentid="[[comment.id]]" icon="create" alt="Edit" hover-class="[[hoverClass]]" icon-class="grey-text no-margin" hidden$="[[!comment.actions.edit]]"></lrnsys-button>\n              <lrnsys-button on-click="actionHandler" id="delete" data-commentid="[[comment.id]]" icon="delete-forever" alt="Delete" hover-class="[[hoverClass]]" icon-class="grey-text no-margin" hidden$="[[!comment.actions.delete]]"></lrnsys-button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <template is="dom-if" if="[[comment.relationships.author.data.visual.icon]]">\n      <paper-badge icon="[[comment.relationships.author.data.visual.icon]]" for="papercard" label="[[comment.relationships.author.data.visual.label]]">\n      </paper-badge>\n    </template>\n'
      ],
      [
        '\n    <style include="materializecss-styles-colors">\n      :host {\n        display: block;\n        padding: 10px 10px 10px 0px;\n      }\n      :host([disabled]) {\n        opacity: .5;\n        background-color: #cccccc;\n        pointer-events: none;\n      }\n      :host(:focus),\n      :host(:hover) {\n        z-index: 2;\n      }\n      :host(:focus) .comment-outer,\n      :host(:hover) .comment-outer {\n        border: 1px #0277bd solid;\n      }\n      .comment-outer {\n        display: table;\n        width: 100%;\n        border: 1px #ddd solid;\n        color: #444;\n      }\n      .comment-outer.new-comment {\n        border: 1px #d81b60 dashed;\n        color: #000;\n      }\n      .comment-inner {\n        display: table-row;\n      }\n      .comment-avatar {\n        padding: 0 7px;\n        width: 40px;\n      }\n      .comment-depth,\n      .comment-avatar, \n      .comment-content {\n        padding-top: 0.5em;\n        padding-bottom: 0.5em;\n        display: table-cell;\n        vertical-align: top;\n      }\n      .comment-content {\n        padding-right: 7px;\n      }\n      h1,\n      h2,\n      h3,\n      h4 {\n        text-align: left;\n        font-size: 1rem;\n        line-height: 1.25rem;\n      }\n      h1.comment-heading,\n      h2.comment-heading,\n      h3.comment-heading,\n      h4.comment-heading {\n        margin-top: 7px;\n      }\n      p {\n        font-size: 14px;\n        line-height: 18px;\n        text-align: left;\n      }\n      #edit-comment {\n        background-color: white;\n        padding: .25em;\n      }\n      marked-element {\n        line-height: 1rem;\n        font-size: 0.9rem;\n      }\n      .nowrap-me marked-element:hover {\n        box-shadow: -1px 0 0 0 black inset;\n        cursor: pointer;\n      }\n      .nowrap-me marked-element ::slotted(#content p.marked-element) {\n        height: 2em;\n        overflow: hidden;\n        text-overflow: ellipsis;\n        margin-bottom: 35px;\n      }\n      .nowrap-me marked-element ::slotted(#content p.marked-element:after) {\n        content: "see more";\n        position: absolute;\n        bottom: 65px;\n        right: 17px;\n        color: #1976d2;\n      }\n      .comment-depth-1 {\n        width: 0em;\n      }\n      .comment-depth-2 {\n        width: 54px;\n        border-right: 3px solid #ccc;\n      }\n      .comment-depth-3,\n      .comment-depth-4,\n      .comment-depth-5,\n      .comment-depth-6,\n      .comment-depth-7,\n      .comment-depth-8,\n      .comment-depth-9 {\n        width: 108px;\n        border-right: 3px solid #ccc;\n      }\n      .center {\n        padding: 0;\n      }\n      .circle {\n        border-radius: 50% !important;\n      }\n      .comment-actions {\n        margin: 0;\n        padding: 0;\n        display: block;\n        border-top: 1px solid #ddd;\n      }\n      .comment-actions lrnsys-button {\n        display: inline-flex;\n      }\n      .comment-actions .comment-actions-group {\n        margin: 0;\n        padding: 0;\n        display: block;\n      }\n      .comment-actions .comment-actions-group.left-actions {\n        float: left;\n      }\n      .comment-actions .comment-actions-group.right-actions {\n        float: right;\n      }\n      moment-element {\n        float: right;\n        font-size: 90%;\n        font-style: italic;\n        font-weight: normal;\n      }\n      paper-badge {\n        right: 0px;\n        top: 0px;\n      }\n      .like-icon-color {\n        color: #2196F3;\n      }\n      .element-invisible {\n        position: absolute;\n        left: -9999px;\n        top: 0;\n        width: 0;\n        height: 0;\n        overflow: hidden;\n      }\n    </style>\n    <div class\\$="comment-outer [[commentNew]]">\n      <div class="comment-inner">\n        <div class\\$="comment-depth comment-depth-[[comment.attributes.threadDepth]] grey lighten-3"></div>\n        <div class="comment-avatar">\n          <lrndesign-avatar id="avatar" label="[[comment.relationships.author.data.name]]" src="[[comment.relationships.author.data.avatar]]" class="float-left ferpa-protect"></lrndesign-avatar>\n          <paper-tooltip for="avatar" animation-delay="0" class="ferpa-protect">[[displayName]]</paper-tooltip>\n        </div>\n        <div class="comment-content">\n          <div class="comment-body">\n            <div id="bodyarea" class="nowrap-me">\n              <h4 class="ferpa-protect comment-heading">\n                <span class="element-invisible">At </span><moment-element datetime\\$="[[comment.attributes.created]]" output-format="MMM DD[,] YYYY"></moment-element>\n                [[comment.relationships.author.data.display_name]] <span class="element-invisible">[[comment.relationships.author.data.visual.label]]</span> said:\n              </h4>\n              <marked-element smartypants="" id="rendered-comment" markdown="[[comment.attributes.body]]">\n                <word-count class="markdown-html-slot" slot="markdown-html"></word-count>\n              </marked-element>\n            </div>\n            <mtz-marked-editor id="comment-editor" hidden="">\n              <div slot="controls">\n                <mtz-marked-control-generic-wrap icon="editor:format-bold" title="Bold" syntax-prefix="**" syntax-suffix="**" keys="ctrl+b"></mtz-marked-control-generic-wrap>\n                <mtz-marked-control-generic-wrap icon="editor:format-italic" title="Italic" syntax-prefix="_" syntax-suffix="_" keys="ctrl+i"></mtz-marked-control-generic-wrap>\n                <mtz-marked-control-generic-line icon="editor:format-size" title="Heading 3" syntax-prefix="### "></mtz-marked-control-generic-line>\n                <mtz-marked-control-generic-line icon="editor:format-list-numbered" title="Ordered List" syntax-prefix="1. "></mtz-marked-control-generic-line>\n                <mtz-marked-control-generic-line icon="editor:format-list-bulleted" title="Unordered List" syntax-prefix="- "></mtz-marked-control-generic-line>\n                <mtz-marked-control-link icon="editor:insert-link" title="Link"></mtz-marked-control-link>\n              </div>\n              <paper-textarea char-counter="" autofocus="" id="edit-comment" label="Comment" value="{{comment.attributes.body}}" slot="textarea"></paper-textarea>\n            </mtz-marked-editor>\n          </div>\n          <div class="comment-actions">\n            <div class="comment-actions-group left-actions">\n              <lrnsys-button on-click="actionHandler" id="reply" data-commentid="[[comment.id]]" alt="Reply" icon="reply" hover-class="[[hoverClass]]" icon-class="grey-text no-margin" hidden\\$="[[!comment.actions.reply]]"></lrnsys-button>\n              <lrnsys-button on-click="actionHandler" id="like" data-commentid="[[comment.id]]" alt="Like" icon="thumb-up" hover-class="[[hoverClass]]" icon-class="grey-text no-margin" hidden\\$="[[!comment.actions.like]]"></lrnsys-button>\n            </div>\n            <div class="comment-actions-group right-actions">\n              <lrnsys-button on-click="actionHandler" id="edit" data-commentid="[[comment.id]]" icon="create" alt="Edit" hover-class="[[hoverClass]]" icon-class="grey-text no-margin" hidden\\$="[[!comment.actions.edit]]"></lrnsys-button>\n              <lrnsys-button on-click="actionHandler" id="delete" data-commentid="[[comment.id]]" icon="delete-forever" alt="Delete" hover-class="[[hoverClass]]" icon-class="grey-text no-margin" hidden\\$="[[!comment.actions.delete]]"></lrnsys-button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <template is="dom-if" if="[[comment.relationships.author.data.visual.icon]]">\n      <paper-badge icon="[[comment.relationships.author.data.visual.icon]]" for="papercard" label="[[comment.relationships.author.data.visual.label]]">\n      </paper-badge>\n    </template>\n'
      ]
    );
    _templateObject_f97788c0e11a11e8a816d1f4966df1a3 = function() {
      return data;
    };
    return data;
  }
  (0, _polymerLegacy.Polymer)({
    _template: (0, _polymerLegacy.html)(
      _templateObject_f97788c0e11a11e8a816d1f4966df1a3()
    ),
    is: "lrnsys-comment",
    listeners: {
      "bodyarea.tap": "bodyToggle",
      "bodyarea.dblclick": "bodyToggleOn"
    },
    properties: {
      comment: { type: Object, notify: !0, observer: "_commentLoaded" },
      displayName: {
        type: String,
        notify: !0,
        computed:
          "_generateName(comment.relationships.author.data.display_name, comment.relationships.author.data.visual)"
      },
      commentNew: {
        type: String,
        notify: !0,
        computed: "_isCommentNew(comment.relationships.author.data.visual)"
      },
      hoverClass: { type: String, reflectToAttribute: !0 },
      editform: {
        type: Boolean,
        notify: !0,
        observer: "_editTrigger",
        reflectToAttribute: !0
      },
      disabled: { type: Boolean, notify: !0, reflectToAttribute: !0 }
    },
    _generateName: function _generateName(name, visual) {
      if (babelHelpers.typeof(visual) !== "undefined" && !1 !== visual.label) {
        return name + " (" + visual.label + ")";
      }
      return name;
    },
    _isCommentNew: function _isCommentNew(visual) {
      if (babelHelpers.typeof(visual) !== "undefined" && !1 !== visual.label) {
        return "new-comment";
      }
      return "";
    },
    _commentLoaded: function _commentLoaded() {
      var root = this;
      root.editform = root.comment.metadata.editing;
      root.disabled = root.comment.metadata.disabled;
      root.blockFirstState = !0;
    },
    actionHandler: function actionHandler(e) {
      var root = this,
        normalizedEvent = (0, _polymerDom.dom)(e),
        target = normalizedEvent.localTarget;
      if (null != target.dataCommentid && !target.disabled) {
        target.dataCommentid;
        if ("reply" == target.id) {
          root.fire("comment-reply", { comment: root.comment });
        } else if ("like" == target.id) {
          root.shadowRoot
            .querySelector("#like")
            .classList.toggle("like-icon-color");
          root.fire("comment-like", { comment: root.comment });
        } else if ("edit" == target.id) {
          root.editform = !root.editform;
        } else if ("delete" == target.id) {
          root.fire("comment-delete-dialog", { comment: root.comment });
        }
      }
    },
    _editTrigger: function _editTrigger() {
      var root = this;
      if (
        babelHelpers.typeof(root.comment) !== "undefined" &&
        root.comment.actions.edit
      ) {
        root.async(function() {
          root.shadowRoot.querySelector("#rendered-comment").hidden =
            root.editform;
          root.shadowRoot.querySelector(
            "#comment-editor"
          ).hidden = !root.editform;
          if (root.editform) {
            root.shadowRoot.querySelector("#edit").icon = "save";
            root.shadowRoot.querySelector("#edit").alt = "Save";
            root.shadowRoot.querySelector("#reply").disabled = !0;
            root.shadowRoot.querySelector("#edit-comment").focus();
            root.fire("comment-editing", { comment: root.comment });
            root.blockFirstState = !1;
          } else {
            if (!root.blockFirstState) {
              root.fire("comment-save", { comment: root.comment });
            } else {
              root.blockFirstState = !1;
            }
            root.shadowRoot.querySelector("#edit").icon = "create";
            root.shadowRoot.querySelector("#edit").alt = "Edit";
            root.shadowRoot.querySelector("#reply").disabled = !1;
          }
          document.querySelector("iron-list").fire("iron-resize");
        });
      }
    },
    bodyToggle: function bodyToggle() {
      var root = this;
      root.$.bodyarea.classList.remove("nowrap-me");
      document.querySelector("iron-list").fire("iron-resize");
    },
    bodyToggleOn: function bodyToggleOn() {
      var root = this;
      root.$.bodyarea.classList.toggle("nowrap-me");
      document.querySelector("iron-list").fire("iron-resize");
    }
  });
});
