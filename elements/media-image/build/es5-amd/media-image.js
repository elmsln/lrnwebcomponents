define([
  "./node_modules/@polymer/polymer/polymer-legacy.js",
  "./node_modules/@lrnwebcomponents/hax-body-behaviors/lib/HAXWiring.js",
  "./node_modules/@lrnwebcomponents/schema-behaviors/schema-behaviors.js",
  "./node_modules/@polymer/iron-image/iron-image.js",
  "./node_modules/@polymer/iron-icons/iron-icons.js"
], function(_polymerLegacy) {
  "use strict";
  function _templateObject_a95b11f0e11911e8a07fe16986b29a2d() {
    var data = babelHelpers.taggedTemplateLiteral(
      [
        '\n    <style is="custom-style">\n      :host {\n        display: block;\n        font-family: "Roboto", sans-serif;\n        width: 100%;\n        --box-background-color: #f7f6ef;\n      }\n\n      :host([card]) {\n        box-shadow: 0 1px 5px rgba(0, 0, 0, 0.14);\n        padding: 20px;\n      }\n\n      :host([box]) {\n        background-color:var(--box-background-color);\n        padding: 20px;\n      }\n\n      :host([round]) iron-image {\n        border-radius: 50%;\n      }\n\n      @media screen and (min-width: 450px) {\n        :host([size="small"]) {\n          max-width: 50%;\n        }\n      }\n\n      @media screen and (min-width: 650px) {\n        :host([size="small"]) {\n          max-width: 35%;\n        }\n      }\n\n      @media screen and (min-width: 900px) {\n        :host([size="small"]) {\n          max-width: 25%;\n        }\n      }\n\n      .citation {\n        font-size: .8rem;\n        font-style: italic;\n        color: #4c4c4c;\n        margin: 15px 0 15px;\n      }\n\n      .caption {\n        padding-bottom: 25px;\n        border-bottom: dashed 2px lightgray;\n        margin-bottom: 25px;\n        line-height: 1.5;\n        font-size: 18px;\n      }\n\n      iron-image {\n        width: 100%;\n        --iron-image-width: 100%;\n      }\n    </style>\n\n    <iron-image resource$="[[schemaResourceID]]-image" src$="[[source]]" alt$="[[alt]]"></iron-image>\n    <div class="citation">[[citation]]<slot name="citation"></slot></div>\n    <div class="caption">[[caption]]<slot name="caption"></slot></div>\n'
      ],
      [
        '\n    <style is="custom-style">\n      :host {\n        display: block;\n        font-family: "Roboto", sans-serif;\n        width: 100%;\n        --box-background-color: #f7f6ef;\n      }\n\n      :host([card]) {\n        box-shadow: 0 1px 5px rgba(0, 0, 0, 0.14);\n        padding: 20px;\n      }\n\n      :host([box]) {\n        background-color:var(--box-background-color);\n        padding: 20px;\n      }\n\n      :host([round]) iron-image {\n        border-radius: 50%;\n      }\n\n      @media screen and (min-width: 450px) {\n        :host([size="small"]) {\n          max-width: 50%;\n        }\n      }\n\n      @media screen and (min-width: 650px) {\n        :host([size="small"]) {\n          max-width: 35%;\n        }\n      }\n\n      @media screen and (min-width: 900px) {\n        :host([size="small"]) {\n          max-width: 25%;\n        }\n      }\n\n      .citation {\n        font-size: .8rem;\n        font-style: italic;\n        color: #4c4c4c;\n        margin: 15px 0 15px;\n      }\n\n      .caption {\n        padding-bottom: 25px;\n        border-bottom: dashed 2px lightgray;\n        margin-bottom: 25px;\n        line-height: 1.5;\n        font-size: 18px;\n      }\n\n      iron-image {\n        width: 100%;\n        --iron-image-width: 100%;\n      }\n    </style>\n\n    <iron-image resource\\$="[[schemaResourceID]]-image" src\\$="[[source]]" alt\\$="[[alt]]"></iron-image>\n    <div class="citation">[[citation]]<slot name="citation"></slot></div>\n    <div class="caption">[[caption]]<slot name="caption"></slot></div>\n'
      ]
    );
    _templateObject_a95b11f0e11911e8a07fe16986b29a2d = function() {
      return data;
    };
    return data;
  }
  (0, _polymerLegacy.Polymer)({
    _template: (0, _polymerLegacy.html)(
      _templateObject_a95b11f0e11911e8a07fe16986b29a2d()
    ),
    is: "media-image",
    behaviors: [HAXBehaviors.PropertiesBehaviors, SchemaBehaviors.Schema],
    properties: {
      source: { type: String, value: "" },
      citation: { type: String, value: "" },
      caption: { type: String, value: "" },
      alt: { type: String, value: "" },
      size: { type: String, value: "wide", reflectToAttribute: !0 },
      round: { type: Boolean, value: !1, reflectToAttribute: !0 },
      card: { type: Boolean, value: !1, reflectToAttribute: !0 },
      box: { type: Boolean, value: !1, reflectToAttribute: !0 }
    },
    ready: function ready() {
      this.setHaxProperties({
        canScale: !0,
        canPosition: !0,
        canEditSource: !1,
        gizmo: {
          title: "Styled image",
          descrption:
            "An image gizmo with the ability to provide simple, consistent styling and accessibility options.",
          icon: "editor:insert-photo",
          color: "indigo",
          groups: ["Image", "Media"],
          handles: [
            {
              type: "image",
              source: "source",
              title: "alt",
              alt: "alt",
              citation: "citation",
              caption: "caption"
            }
          ],
          meta: { author: "LRNWebComponents" }
        },
        settings: {
          quick: [
            {
              property: "source",
              title: "Source",
              description: "The URL for the image.",
              inputMethod: "textfield",
              icon: "link",
              required: !0
            },
            {
              property: "alt",
              title: "Alternative text",
              description: "Text to describe the image to non-sighted users.",
              inputMethod: "alt",
              icon: "accessibility",
              required: !0
            }
          ],
          configure: [
            {
              property: "source",
              title: "Source",
              description: "The URL for the image.",
              inputMethod: "textfield",
              icon: "link",
              required: !0
            },
            {
              property: "caption",
              title: "Caption",
              description: "A caption to describe the image usage",
              inputMethod: "textarea",
              icon: "av:call-to-action"
            },
            {
              property: "alt",
              title: "Alternative text",
              description: "Text to describe the image to non-sighted users.",
              inputMethod: "alt",
              icon: "accessibility",
              required: !0
            },
            {
              property: "round",
              title: "Round image",
              description: "Crops the image appearance to be circle in shape.",
              inputMethod: "boolean",
              icon: "account",
              required: !1
            },
            {
              property: "card",
              title: "Card",
              description:
                "Apply a drop shadow to give the appearance of being a raised card.",
              inputMethod: "boolean",
              icon: "check-box-outline-blank",
              required: !1
            },
            {
              property: "box",
              title: "Box",
              description: "Apply a visual box around the image.",
              inputMethod: "boolean",
              icon: "image:crop-square",
              required: !1
            }
          ],
          advanced: [
            {
              property: "citation",
              title: "Citation",
              description: "Citation for the image.",
              inputMethod: "textfield",
              icon: "text-format",
              required: !1
            }
          ]
        }
      });
    }
  });
});
