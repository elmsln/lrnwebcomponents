import { html, Polymer } from "@polymer/polymer/polymer-legacy.js";
import * as async from "@polymer/polymer/lib/utils/async.js";
import "@polymer/iron-flex-layout/iron-flex-layout-classes.js";
import { AppLocalizeBehavior } from "@polymer/app-localize-behavior/app-localize-behavior.js";
import "@polymer/paper-button/paper-button.js";
import "@polymer/paper-input/paper-input.js";
import "@polymer/iron-icon/iron-icon.js";
import "@polymer/iron-icons/iron-icons.js";
/**
`eco-json-schema-file` takes in a JSON schema of type number and string and
contains a `paper-input`, exposing a `value` property that represents the schema.

Validation is handled for strings and number/integers by mapping JSON schema
validation keywords to `paper-input` attributes; form elements will automatically
try and validate themselves as users provide input:

Please see the `eco-json-schema-object` documentation for further information.

@group eco Elements
@element eco-json-schema-file
@demo demo/index.html
*/
Polymer({
  is: "eco-json-schema-file",
  _template: html`
    <style is="custom-style" include="iron-flex iron-flex-alignment">
      paper-input {
        padding: 2px;
        --paper-input-container-label: {
          white-space: normal;
          position: static;
          font-size: 22px;
          color: #212121;
        }
      }

      :host {
        display: inline-block;
      }

      .enabled {
        border: 1px dashed #555;
        @apply --file-upload-upload-border-enabled;
      }

      .hover {
        opacity: 0.7;
        border: 1px dashed #111;
        @apply --file-upload-upload-border-hover;
      }

      #UploadBorder {
        vertical-align: middle;
        color: #555;
        padding: 20px;
        max-height: 300px;
        overflow-y: auto;
        display: inline-block;
        @apply --file-upload-upload-border;
      }

      #dropArea {
        text-align: center;
        @apply --file-upload-drop-area;
      }

      paper-button#button {
        margin-bottom: 20px;
        @apply --file-upload-button;
      }

      .file {
        padding: 10px 0px;
        @apply --file-upload-file;
      }

      .commands {
        float: right;
        @apply --file-upload-commands;
      }

      .commands iron-icon:not([icon="check-circle"]) {
        cursor: pointer;
        opacity: 0.9;
        @apply --file-upload-commands-faded;
      }

      .commands iron-icon:hover {
        opacity: 1;
        @apply --file-upload-commands-hovered;
      }

      [hidden] {
        display: none;
      }

      .error {
        color: #f40303;
        font-size: 11px;
        margin-top: 2px;
        @apply --file-upload-error;
      }

      .progress-bar {
        margin-top: 2px;
      }

      paper-progress {
        --paper-progress-active-color: #03a9f4;
      }

      paper-progress[error] {
        --paper-progress-active-color: #f40303;
      }
    </style>

    <div class="layout horizontal nowrap">
      <div>
        <paper-button
          id="button"
          on-click="_fileClick"
          alt="{{paperButtonAlt}}"
          raised=""
        >
          <iron-icon icon="editor:attach-file"></iron-icon
          >{{paperButtonTitle}}</paper-button
        >
        <div id="UploadBorder">
          <div id="dropArea" hidden\$="{{!_shownDropText}}">{{dropText}}</div>
          <template is="dom-repeat" items="{{files}}">
            <div class="file">
              <div class="name">
                <span>{{item.name}}</span>
                <div class="commands">
                  <iron-icon
                    icon="autorenew"
                    title="{{retryText}}"
                    on-click="_retryUpload"
                    hidden\$="{{!item.error}}"
                  ></iron-icon>
                  <iron-icon
                    icon="cancel"
                    title="{{removeText}}"
                    on-click="_cancelUpload"
                    hidden\$="{{item.complete}}"
                  ></iron-icon>
                  <iron-icon
                    icon="check-circle"
                    title="{{successText}}"
                    hidden\$="{{!item.complete}}"
                  ></iron-icon>
                </div>
              </div>
              <div class="error" hidden\$="{{!item.error}}">{{errorText}}</div>
            </div>
          </template>
        </div>
      </div>
      <input
        type="file"
        id="fileInput"
        on-change="_fileChange"
        hidden=""
        multiple="{{multi}}"
        accept="{{accept}}"
      />
    </div>
  `,
  behaviors: [AppLocalizeBehavior],

  properties: {
    language: {
      value: "en",
      notify: true
    },
    resources: {
      value: function() {
        return {};
      },
      notify: true
    },
    schema: {
      type: Object,
      observer: "_schemaChanged"
    },
    value: {
      type: Object,
      notify: true,
      value: function() {
        return {};
      },
      observer: "_valueChanged"
    },
    /**
    error: {
      type: String,
      observer: '_errorChanged',
      value: null
    },
    */

    /**
     * `target` is the target url to upload the files to.
     * Additionally by adding '<name>' in your url, it will be replaced by
     * the file name.
     */
    target: {
      type: String,
      value: ""
    },

    /**
     * `accept` is the set of comma separated file extensions or mime types
     * to filter as accepted.
     */
    accept: {
      type: String,
      value: ""
    },

    /**
     * `droppable` indicates whether or not to allow file drop.
     */
    droppable: {
      type: Boolean,
      value: false
    },

    /**
     * `dropText` is the  text to display in the file drop area.
     */
    dropText: {
      type: String,
      value: "Drop Files Here"
    },

    /**
     * `multi` indicates whether or not to allow multiple files to be uploaded.
     */
    multi: {
      type: Boolean,
      value: true
    },

    /**
     * `files` is the list of files to be uploaded
     */
    files: {
      type: Array,
      notify: true,
      value: function() {
        return [];
      }
    },

    /**
     * `raised` indicates whether or not the button should be raised
     */
    raised: {
      type: Boolean,
      value: true
    },

    /**
     * `noink` indicates that the button should not have an ink effect
     */
    noink: {
      type: Boolean,
      value: false
    },

    /**
     * `headers` is a key value map of header names and values
     */
    headers: {
      type: Object,
      value: {}
    },

    /**
     * `retryText` is the text for the tooltip to retry an upload
     */
    retryText: {
      type: String,
      value: "Retry Upload"
    },

    /**
     * `removeText` is the text for the tooltip to remove an upload
     */
    removeText: {
      type: String,
      value: "Remove"
    },

    /**
     * `successText` is the text for the tooltip of a successful upload
     */
    successText: {
      type: String,
      value: "Success"
    },

    /**
     * `errorText` is the text to display for a failed upload
     */
    errorText: {
      type: String,
      value: "Error uploading file..."
    },

    /**
     * `_shownDropText` indicates whether or not the drop text should be shown
     */
    _shownDropText: {
      type: Boolean,
      value: false
    },

    /**
     * `additional` object of key-pair values to send additional values along with file.
     */
    additional: {
      type: Object,
      value: {}
    },

    /**
     * `fileDataName` is the name for the file data in the `formData` object.
     */
    fileDataName: {
      type: String,
      value: "file"
    },

    /**
     * `paperButtonAlt` allows changing the alt property on the paper button
     */
    paperButtonAlt: {
      type: String,
      value: ""
    },

    /**
     * `paperButtonTitle` allows changing the title property on the paper button
     */
    paperButtonTitle: {
      type: String,
      value: ""
    }
  },
  /**
   * Clears the list of files
   */
  clear: function() {
    this.set("files", []);
    this.$.fileInput.value = "";
    this._showDropText();
  },

  ready: function() {
    if (this.raised) {
      this.toggleAttribute("raised", true, this.$.button);
    }
    if (this.noink) {
      this.toggleAttribute("noink", true, this.$.button);
    }
    if (this.droppable) {
      this._showDropText();
      this.setupDrop();
    }
  },

  /**
   * A function to set up a drop area for drag-and-drop file uploads
   */
  setupDrop: function() {
    var uploadBorder = this.$.UploadBorder;
    this.toggleClass("enabled", true, uploadBorder);

    this.ondragover = function(e) {
      e.stopPropagation();
      this.toggleClass("hover", true, uploadBorder);

      // Workaround for allowgin drop from Chome's download footer on OSX
      // See https://bugs.chromium.org/p/chromium/issues/detail?id=234931
      var effect = e.dataTransfer && e.dataTransfer.dropEffect;
      var effectAllowed = e.dataTransfer && e.dataTransfer.effectAllowed;
      if (effect === "none" && effectAllowed !== "none") {
        e.dataTransfer.dropEffect = effectAllowed === "move" ? "move" : "copy";
      }
      // end of workaround

      return false;
    };

    this.ondragleave = function() {
      this.toggleClass("hover", false, uploadBorder);
      return false;
    };

    this.ondrop = function(event) {
      this.toggleClass("hover", false, uploadBorder);
      event.preventDefault();

      // Check if multiple upload is allowed
      if (!this.multi && this.files.length !== 0) {
        return;
      }

      var length = event.dataTransfer.files.length;
      for (var i = 0; i < length; i++) {
        var file = event.dataTransfer.files[i];
        //if (this.value.indexOf(window.btoa(unescape(encodeURIComponent(file.name)))) >= 0 ) {
        //  continue;
        //}
        // Check if filetype is accepted
        var mimeType =
          file.type !== "" ? file.type.match(/^[^\/]*\//)[0] : null;
        var fileType = file.name.match(/\.[^\.]*$/)[0];
        if (
          this.accept !== "" &&
          !(
            this.accept.indexOf(mimeType) > -1 ||
            this.accept.indexOf(fileType) > -1
          )
        ) {
          continue;
        }

        file.progress = 0;
        file.error = false;
        file.complete = false;
        this.push("files", file);
        this.uploadFile(file);
      }
    };
  },

  /**
   * Clicks the invisible file input
   */
  _fileClick: function() {
    var elem = this.$.fileInput;
    if (elem && document.createEvent) {
      // sanity check
      var evt = document.createEvent("MouseEvents");
      evt.initEvent("click", true, false);
      elem.dispatchEvent(evt);
    }
  },

  /**
   * Called whenever the list of selected files changes
   *
   * @param {object} e An event object
   */
  _fileChange: function(e) {
    var length = e.target.files.length;
    for (var i = 0; i < length; i++) {
      var file = e.target.files[i];
      file.progress = 0;
      file.error = false;
      file.complete = false;
      this.push("files", file);
      if (!this.multi && this.files.length !== 0) {
        this.set("files", []);
        this.set("value", {});
      }
      this.uploadFile(file);
    }
  },

  /**
   * Cancels the file upload for a specific file
   *
   * @param {object} file An element of the files array
   */
  cancel: function(file) {
    if (file) {
      if (file.xhr) {
        file.xhr.abort();
      }
      this.splice("files", this.files.indexOf(file), 1);
      this._showDropText();
    }
  },

  /**
   * Cancels the file upload
   *
   * @param {object} e An event object
   */
  _cancelUpload: function(e) {
    this.cancel(e.model.__data__.item);
  },

  /**
   * Retries to upload the file
   *
   * @param {object} e An event object
   */
  _retryUpload: function(e) {
    e.model.set("item.error", false);
    e.model.set("item.progress", 0);
    // The async helps give visual feedback of a retry occurring, even though it's less efficient.
    var self = this;
    async.microTask.run(() => {
      self.uploadFile(e.model.__data__.item);
    });
  },

  /**
   * Whether or not to display the drop text
   */
  _showDropText: function() {
    this.set("_shownDropText", !this.files.length && this.droppable);
  },

  /**
   * Uploads a file
   *
   * @param {object} file An element of the files array
   */
  uploadFile: function(file) {
    if (!file) {
      return;
    }
    this.fire("before-upload");
    this._showDropText();
    var prefix = "files." + this.files.indexOf(file);
    var self = this;

    var reader = new FileReader();

    reader.addEventListener(
      "load",
      function() {
        var r = reader.result;
        //self.push('value', {"name": unescape(encodeURIComponent( file.name )),"content":r});
        //self.value.push({"name": unescape(encodeURIComponent( file.name )),"content":r});
        //console.log('value.'+self.files.indexOf(file));
        self.set(
          "value." +
            self.attributes.name.value +
            "." +
            self.files.indexOf(file),
          r
        );
        //self.notifyPath('value');
      },
      false
    );

    if (!self.value.hasOwnProperty(self.attributes.name.value)) {
      this.set("value." + self.attributes.name.value, {});
    }
    reader.readAsDataURL(file);
  },
  _valueChanged: function() {
    console.log("this.value: " + JSON.stringify(this.value));
  },
  _schemaChanged: function() {
    var schema = this.schema;
    /*
    var inputEl = this.$.fileInput;
    if (schema.required) {
      inputEl.required = true;
    }
    //inputEl.type = 'file';

    if (schema.component && schema.component.properties) {
      Object.keys(schema.component.properties).forEach(function(prop) {
        inputEl[prop] = schema.component.properties[prop];
      });
    }
    */

    /*
    inputEl.alwaysFloatLabel = true; // label doesn't float when value not set

    if (schema.title) {
      inputEl.label = schema.title;
    }
    */
  },
  /*
  _errorChanged: function() {
    if (this.error) {
      this.$.fileInput.errorMessage = this.error;
      this.$.fileInput.invalid = true;
    } else {
      this.$.fileInput.invalid = false;
      this.$.fileInput.errorMessage = null;
    }
  },
  */
  _isSchemaValue: function(type) {
    return this._isSchemaFile(type);
  },
  _isSchemaFile: function(type) {
    if (Array.isArray(type)) {
      return type.indexOf("file") !== -1;
    } else {
      return type === "file";
    }
  },
  _isSchemaBoolean: function(type) {
    if (Array.isArray(type)) {
      return type.indexOf("boolean") !== -1;
    } else {
      return type === "boolean";
    }
  },
  _isSchemaNumber: function(type) {
    if (Array.isArray(type)) {
      return type.indexOf("number") !== -1 || type.indexOf("integer") !== -1;
    } else {
      return type === "number" || type === "integer";
    }
  },
  _isSchemaString: function(type) {
    if (Array.isArray(type)) {
      return type.indexOf("string") !== -1;
    } else {
      return type === "string";
    }
  },
  _isSchemaObject: function(type) {
    return type === "object";
  },
  _isSchemaArray: function(type) {
    return type === "array";
  },
  stringify: function(s) {
    return JSON.stringify(s);
  }
});
