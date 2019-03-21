/**
 * Copyright 2018 The Pennsylvania State University
 * @license Apache-2.0, see License.md for full text.
 */
import { html, Polymer } from "@polymer/polymer/polymer-legacy.js";
import "@lrnwebcomponents/jwt-login/jwt-login.js";
import { pathFromUrl } from "@polymer/polymer/lib/utils/resolve-url.js";
/**
 * `haxcms-backend-php`
 * `a simple element to check for and fetch JWTs`
 *
 * @demo demo/index.html
 *
 * @microcopy - the mental model for this element
 * - jwt - a json web token which is an encrypted security token to talk
 */
Polymer({
  is: "haxcms-backend-php",
  _template: html`
    <style>
      :host {
        display: block;
      }
    </style>
    <jwt-login
      id="jwt"
      url="[[jwtLoginLocation]]"
      url-logout="[[jwtLogoutLocation]]"
      jwt="{{jwt}}"
    ></jwt-login>
  `,
  properties: {
    /**
     * Location of what endpoint to hit for
     */
    jwtLoginLocation: {
      type: String,
      value: function() {
        if (window.appSettings) {
          return window.appSettings.login;
        }
      }
    },
    /**
     * Location of what endpoint to hit for logging out
     */
    jwtLogoutLocation: {
      type: String,
      value: function() {
        if (window.appSettings) {
          return window.appSettings.logout;
        }
      }
    },
    /**
     * JSON Web token, it'll come from a global call if it's available
     */
    jwt: {
      type: String
    }
  },
  /**
   * created life cycle
   */
  created: function() {
    document.body.addEventListener("jwt-token", this._jwtTokenFired.bind(this));
  },
  /**
   * detached life cycle
   */
  detached: function() {
    document.body.removeEventListener(
      "jwt-token",
      this._jwtTokenFired.bind(this)
    );
  },
  /**
   * JWT token fired, let's capture it
   */
  _jwtTokenFired: function(e) {
    this.jwt = e.detail;
  },
  /**
   * Attached life cycle
   */
  attached: function() {
    if (this.jwt != null && typeof this.jwt == "string") {
      // attempt to dynamically import the hax cms site editor
      // which will appear to be injecting into the page
      // but because of this approach it should be non-blocking
      try {
        import(pathFromUrl(decodeURIComponent(import.meta.url)) +
          "../haxcms-site-editor.js").then(
          e => {
            let haxCmsSiteEditorElement = document.createElement(
              "haxcms-site-editor"
            );
            haxCmsSiteEditorElement.jwt = this.jwt;
            haxCmsSiteEditorElement.savePagePath =
              window.appSettings.savePagePath;
            haxCmsSiteEditorElement.saveManifestPath =
              window.appSettings.saveManifestPath;
            haxCmsSiteEditorElement.saveOutlinePath =
              window.appSettings.saveOutlinePath;
            haxCmsSiteEditorElement.getFieldsPath =
              window.appSettings.getFieldsPath;
            haxCmsSiteEditorElement.getFieldsToken =
              window.appSettings.getFieldsToken;
            haxCmsSiteEditorElement.publishSitePath =
              window.appSettings.publishSitePath;
            haxCmsSiteEditorElement.createPagePath =
              window.appSettings.createPagePath;
            haxCmsSiteEditorElement.deletePagePath =
              window.appSettings.deletePagePath;
            haxCmsSiteEditorElement.appStore = window.appSettings.appStore;
            window.cmsSiteEditor.instance.haxCmsSiteEditorElement = haxCmsSiteEditorElement;
            window.cmsSiteEditor.instance.appendTarget.appendChild(
              haxCmsSiteEditorElement
            );
          },
          e => {
            //import failed
          }
        );
      } catch (err) {
        // error in the event this is a double registration
      }
    }
  }
});
