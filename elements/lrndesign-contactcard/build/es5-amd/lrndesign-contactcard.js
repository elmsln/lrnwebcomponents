define([
  "./node_modules/@polymer/polymer/polymer-legacy.js",
  "./node_modules/@polymer/paper-card/paper-card.js",
  "./node_modules/@polymer/paper-button/paper-button.js",
  "./node_modules/@lrnwebcomponents/lrn-icons/lrn-icons.js",
  "./node_modules/@polymer/iron-icons/iron-icons.js",
  "./node_modules/@polymer/iron-icons/maps-icons.js",
  "./node_modules/@polymer/iron-icons/hardware-icons.js",
  "./node_modules/@polymer/paper-tooltip/paper-tooltip.js",
  "./node_modules/@lrnwebcomponents/social-media-icons/social-media-icons.js"
], function(_polymerLegacy) {
  "use strict";
  function _templateObject_5f143800e11a11e88632e1119f9f1b65() {
    var data = babelHelpers.taggedTemplateLiteral(
      [
        '\n    <style>\n      :host {\n        display: block;\n        --contactcard-icons-hover-color: gray;\n        --contactcard-icons-fill-color: #aeaeae;\n      }\n\n      .name {\n        text-align: center;\n        min-height: 1em;\n      }\n\n      #img_wrap {\n        display: flex;\n        justify-content: center;\n        align-items: flex-start;\n      }\n\n      .profile-image {\n        background-color: #aeaeae;\n        padding: 4px;\n        border-radius: 50%;\n        width: 50%;\n        min-height: 10em;\n        margin-top: 25px;\n      }\n\n      .position {\n        text-align: center;\n        font-style: italic;\n        font-size: 16px;\n        margin: -10px 0 10px;\n      }\n\n      .organization {\n        text-align: center;\n        font-size: 14px;\n        margin: -8px 0 10px;\n      }\n\n      .mail_icon {\n        width: 35px;\n        height: 35px;\n        color: var(--contactcard-icons-fill-color);\n      }\n\n      .mail_icon:hover {\n        color: var(--contactcard-icons-hover-color);\n      }\n\n      .phone_icon {\n        width: 35px;\n        height: 35px;\n        color: var(--contactcard-icons-fill-color);\n      }\n\n      .phone_icon:hover {\n        color: var(--contactcard-icons-hover-color);\n      }\n\n      .computer_icon {\n        width: 35px;\n        height: 35px;\n        color: var(--contactcard-icons-fill-color);\n      }\n\n      .computer_icon:hover {\n        color: var(--contactcard-icons-hover-color);\n      }\n\n      #group_icons {\n        width: 70%;\n        margin-left: auto;\n        margin-right: auto;\n        margin-bottom: 10px;\n        border-top: 2px #aeaeae solid;\n        padding-top: 5px;\n      }\n\n      social-media-icons {\n        --social-media-icons-hover-color: var(--contactcard-icons-hover-color);\n        margin-left: .5em;\n      }\n\n      .icons {\n        display: flex;\n        justify-content: center;\n        align-items: flext-start;\n        padding-top: 5px;\n      }\n\n      paper-button {\n        padding: 0;\n        margin: 0;\n        min-width: 1rem;\n      }\n    </style>\n    <paper-card>\n      <div id="img_wrap"><img class="profile-image" src="[[image]]"></div>\n      <div class="name">\n        <template is="dom-if" if="[[name]]">\n        <h2>[[name]]</h2>\n        </template>\n      </div>\n      <div class="position">[[position]]</div>\n      <div class="organization">[[organization]]</div>\n      <div id="group_icons">\n        <div class="icons">\n        <template is="dom-if" if="[[email]]">\n          <a href$="mailto:[[email]]">\n            <paper-button id="mail">\n              <iron-icon icon="mail" class="mail_icon"></iron-icon>\n            </paper-button>\n          </a>\n          <paper-tooltip for="mail">Email</paper-tooltip>\n        </template>\n        <template is="dom-if" if="[[phone]]">\n          <a href$="tel:[[phone]]">\n            <paper-button id="phone">\n              <iron-icon icon="maps:local-phone" class="phone_icon"></iron-icon>\n              </paper-button>\n          </a>\n          <paper-tooltip for="phone">Call</paper-tooltip>\n        </template>\n        <template is="dom-if" if="[[website]]">\n          <a href$="[[website]]">\n            <paper-button id="website">\n              <iron-icon icon="hardware:desktop-windows" class="computer_icon"></iron-icon>\n              </paper-button>\n          </a>\n          <paper-tooltip for="website">Visit</paper-tooltip>\n        </template>\n        <template is="dom-if" if="[[twitter]]">\n          <a href$="[[twitter]]">\n            <paper-button id="twitter">\n              <social-media-icons icon="twitter" color="#aeaeae" size="35" class="twitter_icon"></social-media-icons>\n              </paper-button>\n          </a>\n          <paper-tooltip for="twitter">Connect</paper-tooltip>\n        </template>\n        </div>\n      </div>\n    </paper-card>\n'
      ],
      [
        '\n    <style>\n      :host {\n        display: block;\n        --contactcard-icons-hover-color: gray;\n        --contactcard-icons-fill-color: #aeaeae;\n      }\n\n      .name {\n        text-align: center;\n        min-height: 1em;\n      }\n\n      #img_wrap {\n        display: flex;\n        justify-content: center;\n        align-items: flex-start;\n      }\n\n      .profile-image {\n        background-color: #aeaeae;\n        padding: 4px;\n        border-radius: 50%;\n        width: 50%;\n        min-height: 10em;\n        margin-top: 25px;\n      }\n\n      .position {\n        text-align: center;\n        font-style: italic;\n        font-size: 16px;\n        margin: -10px 0 10px;\n      }\n\n      .organization {\n        text-align: center;\n        font-size: 14px;\n        margin: -8px 0 10px;\n      }\n\n      .mail_icon {\n        width: 35px;\n        height: 35px;\n        color: var(--contactcard-icons-fill-color);\n      }\n\n      .mail_icon:hover {\n        color: var(--contactcard-icons-hover-color);\n      }\n\n      .phone_icon {\n        width: 35px;\n        height: 35px;\n        color: var(--contactcard-icons-fill-color);\n      }\n\n      .phone_icon:hover {\n        color: var(--contactcard-icons-hover-color);\n      }\n\n      .computer_icon {\n        width: 35px;\n        height: 35px;\n        color: var(--contactcard-icons-fill-color);\n      }\n\n      .computer_icon:hover {\n        color: var(--contactcard-icons-hover-color);\n      }\n\n      #group_icons {\n        width: 70%;\n        margin-left: auto;\n        margin-right: auto;\n        margin-bottom: 10px;\n        border-top: 2px #aeaeae solid;\n        padding-top: 5px;\n      }\n\n      social-media-icons {\n        --social-media-icons-hover-color: var(--contactcard-icons-hover-color);\n        margin-left: .5em;\n      }\n\n      .icons {\n        display: flex;\n        justify-content: center;\n        align-items: flext-start;\n        padding-top: 5px;\n      }\n\n      paper-button {\n        padding: 0;\n        margin: 0;\n        min-width: 1rem;\n      }\n    </style>\n    <paper-card>\n      <div id="img_wrap"><img class="profile-image" src="[[image]]"></div>\n      <div class="name">\n        <template is="dom-if" if="[[name]]">\n        <h2>[[name]]</h2>\n        </template>\n      </div>\n      <div class="position">[[position]]</div>\n      <div class="organization">[[organization]]</div>\n      <div id="group_icons">\n        <div class="icons">\n        <template is="dom-if" if="[[email]]">\n          <a href\\$="mailto:[[email]]">\n            <paper-button id="mail">\n              <iron-icon icon="mail" class="mail_icon"></iron-icon>\n            </paper-button>\n          </a>\n          <paper-tooltip for="mail">Email</paper-tooltip>\n        </template>\n        <template is="dom-if" if="[[phone]]">\n          <a href\\$="tel:[[phone]]">\n            <paper-button id="phone">\n              <iron-icon icon="maps:local-phone" class="phone_icon"></iron-icon>\n              </paper-button>\n          </a>\n          <paper-tooltip for="phone">Call</paper-tooltip>\n        </template>\n        <template is="dom-if" if="[[website]]">\n          <a href\\$="[[website]]">\n            <paper-button id="website">\n              <iron-icon icon="hardware:desktop-windows" class="computer_icon"></iron-icon>\n              </paper-button>\n          </a>\n          <paper-tooltip for="website">Visit</paper-tooltip>\n        </template>\n        <template is="dom-if" if="[[twitter]]">\n          <a href\\$="[[twitter]]">\n            <paper-button id="twitter">\n              <social-media-icons icon="twitter" color="#aeaeae" size="35" class="twitter_icon"></social-media-icons>\n              </paper-button>\n          </a>\n          <paper-tooltip for="twitter">Connect</paper-tooltip>\n        </template>\n        </div>\n      </div>\n    </paper-card>\n'
      ]
    );
    _templateObject_5f143800e11a11e88632e1119f9f1b65 = function() {
      return data;
    };
    return data;
  }
  (0, _polymerLegacy.Polymer)({
    _template: (0, _polymerLegacy.html)(
      _templateObject_5f143800e11a11e88632e1119f9f1b65()
    ),
    is: "lrndesign-contactcard",
    properties: {
      image: { type: String },
      email: { type: String },
      name: { type: String },
      position: { type: String },
      organization: { type: String },
      phone: { type: String },
      website: { type: String },
      twitter: { type: String }
    }
  });
});
