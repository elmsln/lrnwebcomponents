import { LitElement, html, css } from "lit";
import "@lrnwebcomponents/simple-icon/lib/simple-icon-button-lite.js";
import "@lrnwebcomponents/simple-icon/lib/simple-icons.js";
import "@lrnwebcomponents/absolute-position-behavior/absolute-position-behavior.js";

const SimpleListboxProperties = {
  /**
   * id of active option
   */
  activeDescendant: {
    type: String,
  },
  /**
   * whether listbox is aligned on the right edge
   */
  alignRight: {
    type: Boolean,
    reflect: true,
    attribute: "align-right",
  },
  /**
   * Hint for form autofill feature: "none", "both", "list"
   */
  autocomplete: {
    type: String,
    attribute: "autocomplete",
  },
  /**
   * demo mode for debugging, "items", or "groups"
   */
  demoMode: {
    attribute: "demo-mode",
    type: String,
    reflect: true,
  },
  /**
   * Whether the form control is disabled
   */
  disabled: {
    type: Boolean,
    reflect: true,
  },
  /**
   * Whether field has errors
   */
  error: {
    type: Boolean,
    reflect: true,
  },
  /**
   * whether listbox is expanded
   */
  expanded: {
    type: Boolean,
    reflect: true,
  },
  /**
   * aray of filtered listbox option first characters
   */
  firstChars: {
    type: Array,
  },
  /**
   * aray of filtered listbox options
   */
  filteredOptions: {
    type: Array,
  },
  /**
   * Whether the field is hidden
   */
  hidden: {
    type: Boolean,
    reflect: true,
  },
  /**
   * input text to filter listbox options
   */
  id: {
    type: String,
    reflect: true,
    attribute: "id"
  },
  /**
   * input text to filter listbox options
   */
  filter: {
    type: String,
  },
  /**
   * whether listbox is hidden
   */
  hidden: {
    type: Boolean,
  },
  /**
   * hover state pegged to attribute
   */
  hovered: {
    type: Boolean,
    reflect: true,
  },
  /**
   * option that is hovered
   */
  hoveredOption: {
    type: Object,
  },
  /**
   * whether input has focus
   */
  inputFocus: {
    type: Boolean,
  },
  /**
   * whether input is hovered
   */
  inputHover: {
    type: Boolean,
  },
  /**
   * array of options [{value: "key", text: "Text"}] for select, radio options, and checkboxes,
   * so that they can appear in a prescribed order,
   * eg. [{value: "b", text: "Option B"}, {value: "a", text: "Option A"}, {value: "c", text: "Option C"}]
   */
  itemsList: {
    type: Array,
    attribute: "items-list",
  },
  /**
   * whether listbox is full-width
   */
  justify: {
    type: Boolean,
    reflect: true,
  },
  /**
   * whether list has focus
   */
  listFocus: {
    type: Boolean,
  },
  /**
   * whether list is hovered
   */
  listHover: {
    type: Boolean,
  },
  /**
   * options {value: "Text"}  for select, radio options, and checkboxes,
   * which are sorted by key,
   * eg. {a: "Option A", b: "Option B", c: "Option C"}
   */
  options: {
    type: Object,
  },
  /**
   * Content to be appear in the form control when the form control is empty
   */
  placeholder: {
    type: String,
  },
  /**
   * if options are grouped, displays them as tabs
   */
  tabs: {
    type: Boolean,
    reflect: true,
  },
  /**
   * Value is not editable
   */
  readonly: {
    type: Boolean,
    reflect: true,
  },
  /**
   * Whether field is required
   */
  required: {
    type: Boolean,
    reflect: true,
  },
  /**
   * Current value of the form control. Submitted with the form as part of a name/value pair.
   */
  value: {
    reflect: true,
  },
  
  /**
   * are options grouped
   */
  __groupOptions: {
    type: Boolean,
  }
};

const SimpleListboxInputStyles = [
  css`
    #field {
      display: flex;
      align-items: center;
    }
    input {
      flex: 1 1 auto;
      padding-right: calc(2px + var(--simple-icon-height, 24px));
      min-height: calc(var(--simple-icon-height, 24px) - 4px);
      line-height: calc(var(--simple-icon-height, 24px) - 4px);
    }
    simple-icon-button-lite {
      margin-left: calc(-2px - var(--simple-icon-height, 24px));
      margin-right: 2px;
    }
  `
];

const SimpleListboxStyles = [
  css`
    :host {
      display: inline-block;
      overflow: hidden;
    }
    :host([expanded]) {
      overflow: auto;
    }
    :host(:focus-within),
    :host(:hover),
    ul:hover,
    li:hover {
      z-index: 2;
    }
    :host([expanded]),
    :host([expanded]) ul[role="listbox"],
    :host([expanded]) li,
    :host(:focus-within) {
      z-index: 3;
    }
    absolute-position-behavior {
      display:inline-block;
      max-width: 100%;
    }
    ul[role="listbox"] {
      opacity: 0;
      list-style: none;
      max-height: 0;
      overflow: hidden;
      margin: 0;
      padding: 0;
      margin-block-end: 0;
      margin-block-start: 0;
      padding-inline-start: 0;
      padding-inline-end: 0;
      transition: 0.5s ease-in-out max-height;
    }
    :host([expanded]) ul[role="listbox"] {
      outline: 1px solid #ddd;
    }
    :host([expanded]:hover) ul[role="listbox"],
    :host([expanded]:focus-within) ul[role="listbox"] {
      opacity: 1;
      overflow: auto;
      max-height: 12em;
    }
    ul[role="listbox"]{
      background-color: white;
    }

    ul[role="listbox"] li[role] {
      font-family: sans-serif;
      margin: 0;
      padding: 0.25em;
      border-top: 1px solid transparent;
      border-bottom: 1px solid transparent;
      display: block;
      font-size: 100%;
    }

    ul[role="listbox"] li[role="presentation"] {
      color: #444;
      background-color: #f8f8f8;
    }

    ul[role="listbox"] li[role="option"][aria-selected="true"] {
      background-color: #eeeeee;
    }

    ul[role="listbox"].focus li[role="option"][aria-selected="true"] {
      background-color: #d9eaff;
      border-color: #3f51b5;
    }

    ul[role="listbox"] li[role="option"]:hover {
      background-color: #d9eaff;
    }
  `
];

const SimpleListBoxBehaviors = function (SuperClass) {
  return class extends SuperClass {
    static get styles() {
      return [
        ...(super.styles ? super.styles : []),
        ...SimpleListboxStyles,
        ...SimpleListboxInputStyles,
      ];
    }
  
    static get properties() {
      return {
        ...(super.properties ? super.properties : {}),
        ...SimpleListboxProperties,
      };
    }
    constructor() {
      super();
      this.expanded = false;
      this.filter = "";
      this.filteredOptions = [];
      this.inputFocus = false;
      this.inputHover = false;
      this.isNone = true;
      this.isList = false;
      this.isBoth = false;
      this.listFocus = false;
      this.listHover = false;
      this.option = false;
      this.autofocus = false;
      this.autocomplete = "none";
      this.readonly = false;
      this.itemsList = [];
      this.options = {};
      this.hovered = false;
    }

    render(){
      return html`
        <div id="field">
          ${this.labelTemplate}
          ${this.inputTemplate}
          ${this.expandButtonTemplate}
        </div>
        <absolute-position-behavior 
          for="field" 
          auto
          fit-to-visible-bounds 
          position="bottom" 
          position-align="${this.alignRight ? 'end' : 'start'}"
          ?justify="${this.justify}">
          ${this.listboxTemplate}
        </absolute-position-behavior>
      `;
    }

    get stateInfo() {
      return {
        activeDescendant: this.activeDescendant,
        filteredOptions: this.filteredOptions,
        filter: this.filter,
        option: this.option,
        _selectedOption: this._selectedOption,
        value: this.value,
        firstOption: this.firstOption,
        lastOption: this.lastOption,
        input: !this.input ? false : this.input.value,
      };
    }
    get fieldElementTag() {
      return "input";
    }
  
    firstUpdated(changedProperties) {
      if (super.firstUpdated) super.firstUpdated(changedProperties);
      this.filter = !!this.value ? this.value : "";
      this.filterOptions(this.filter, this.option);
    }
  
    updated(changedProperties) {
      if (super.updated) super.updated(changedProperties);
      changedProperties.forEach((oldValue, propName) => {
        if (propName === "autocomplete") this.autocompleteChanged();
        if (propName === "expanded" && this.absolutePosition) this.absolutePosition.updatePosition();
        if (propName === "value" && this.value !== oldValue)
          this.fieldValueChanged();
        if (propName === "itemsList" || propName === "options" || propName == "demoMode")
          this.filterOptions(this.filter, this.option);
      });
    }
  
    fieldValueChanged() {
      if (this.input && this.input.value !== this.value)
        this.input.value = this.value;
      this._fireValueChanged();
    }

    _fireValueChanged(){

    }
  
    autocompleteChanged() {
      if (typeof this.autocomplete === "string") {
        let autocomplete = this.autocomplete.toLowerCase();
        this.isNone = autocomplete === "none";
        this.isList = autocomplete === "list";
        this.isBoth = autocomplete === "both";
      } else {
        this.isNone = true;
      }
    }

    get demoItems(){
      return [
        "Arryn",
        "Baratheon",
        "Bolton",
        "Florent",
        "Frey",
        "Greyjoy",
        "Hightower",
        "Lannister",
        "Martell",
        "Mormont",
        "Redwyne",
        "Seaworth",
        "Selmy",
        "Stark",
        "Targaryen",
        "Tarley",
        "Tully",
        "Tyrell",
        "Umber",
      ];
    }

    get demoGroups(){
      return [
        {
          group: "Vale of Arryn",
          itemsList: [
            "Arryn"
          ]
        }, 
        {
          group: "Crownlands",
          itemsList: [
            "Baratheon",
            "Targaryen"
          ]
        }, 
        {
          group: "North",
          itemsList: [
            "Bolton",
            "Mormont",
            "Stark",
            "Umber"
          ]
        }, 
        {
          group: "Reach",
          itemsList: [
            "Florent",
            "Hightower",
            "Redwyne",
            "Tarley",
            "Tyrell"
          ]
        },
        {
          group: "Riverlands",
          itemsList: [
            "Frey",
            "Tully"
          ]
        },
        {
          group: "Iron Islands",
          itemsList: [
            "Greyjoy"
          ]
        },
        {
          group: "Westerlands",
          itemsList: [
            "Lannister"
          ]
        },
        {
          group: "Dorne",
          itemsList: [
            "Martell"
          ]
        },
        {
          group: "Stormlands",
          itemsList: [
            "Seaworth",
            "Selmy"
          ]
        },
      ];
    }

    /**
     * gets field's id
     *
     * @readonly
     * @returns {string}
     * @memberof SimpleFieldsContainer
     */
    get fieldId() {
      return `${this.id || "listbox"}-input`;
    }

    /**
     * gets field's id
     *
     * @readonly
     * @returns {string}
     * @memberof SimpleFieldsContainer
     */
    get labelId() {
      return `${this.id || "input"}-label`;
    }

    /**
     * gets field's id
     *
     * @readonly
     * @returns {string}
     * @memberof SimpleFieldsContainer
     */
    get listboxId() {
      return `${this.id || "input"}-listbox`;
    }
    /**
     * listbox from shadowRoot
     *
     * @readonly
     */
    get listbox() {
      if (!this._listbox)
        this._listbox =
          this.shadowRoot && this.shadowRoot.querySelector(`#${this.listboxId}`)
            ? this.shadowRoot.querySelector(`#${this.listboxId}`)
            : undefined;
      return this._listbox;
    }

    get absolutePosition(){
      if (!this._abs)
        this._abs =
          this.shadowRoot && this.shadowRoot.querySelector(`absolute-position-behavior`)
            ? this.shadowRoot.querySelector(`absolute-position-behavior`)
            : undefined;
      return this._abs;

    }

    /**
     * input from shadowRoot
     *
     * @readonly
     */
    get input() {
      if (!this._input)
        this._input = this.field
          ? this.field
          : this.shadowRoot && this.shadowRoot.querySelector(`input`)
          ? this.shadowRoot.querySelector(`input`)
          : undefined;
      return this._input;
    }

    /**
     * template for slotted or shadow DOM label
     *
     * @readonly
     * @returns {object}
     * @memberof SimpleFieldsContainer
     */
    get labelTemplate() {
      return html`
        <label
          id="${this.labelId}"
          for="${this.fieldId}"
          class="label-main"
          ?hidden="${this.type === "fieldset"}"
          part="label"
        >
          <slot name="label-prefix"></slot>
          <slot name="label"></slot>
          ${this.error || this.required ? "*" : ""}
        </label>
      `;
    }
  
    /**
     * input
     *
     * @readonly
     */
    get inputTemplate() {
      return html`
        <input
          .aria-activedescendant="${this.activeDescendant}"
          .aria-autocomplete="${this.autocomplete}"
          .aria-descrbedby="${this.describedBy}"
          .aria-expanded="${this.expanded}"
          aria-haspopup="true"
          .aria-invalid="${this.error ? "true" : "false"}"
          .aria-owns="${this.listboxId}"
          ?autofocus="${this.autofocus}"
          @blur="${this._onInputBlur}"
          @change="${this._handleFieldChange}"
          class="input ${this.inputFocus ? "focus" : ""}"
          @click="${this._onInputClick}"
          ?disabled="${this.disabled}"
          @focus="${this._onInputFocus}"
          id="${this.fieldId}"
          @keydown="${this._onInputKeydown}"
          @keyup="${this._onInputKeyup}"
          name="${this.fieldId}"
          .placeholder="${this.placeholder || ""}"
          part="option-input"
          ?readonly="${this.readonly}"
          ?required="${this.required}"
          tabindex="0"
          type="text"
          value="${this.value || ""}"
        />
      `;
    }
    /**
     * button to expand listbox
     *
     * @readonly
     */
    get expandButtonTemplate() {
      return html`
        <simple-icon-button-lite
          icon="arrow-drop-down"
          ?hidden="${this.sortedOptions.length < 1}"
          label="open"
          @click="${this._onButtonClick}"
          part="option-icon"
          tabindex="-1"
          controls="${this.listboxId}"
        >
        </simple-icon-button-lite>
      `;
    }
    /**
     * listbox
     *
     * @readonly
     */
    get listboxTemplate() {
      return html`
        <ul
          .aria-labelledBy="${this.fieldId}-label"
          class="${this.listFocus ? "focus" : ""}"
          data-items="${this.itemsList.join()}"
          data-options="${this.filteredOptions
            .map((option) => option.value)
            .join()}"
          ?hidden="${this.isListboxHidden}"
          id="${this.listboxId}"
          @mouseout="${this._onListboxMouseout}"
          @mouseover="${this._onListboxMouseover}"
          role="listbox"
          part="listbox"
        >
          ${this.listboxInnerTemplate}
        </ul>
      `;
    }
    /**
     * listbox options
     *
     * @readonly
     */
    get listboxInnerTemplate() {
      return (this.filteredOptions || []).map((option) =>
        this.getListItem(option)
      );
    }
  
    /**
     * determines if listbox is hidden
     *
     * @readonly
     * @memberof SimpleFieldsCombo
     */
    get isListboxHidden() {
      return this.hidden || !this.expanded || !this.hasOptions;
    }
    /**
     * list item for a given option
     * @param {object} option object representing option with id and value properties
     * @returns 
     */
    getListItem(option) {
      return !option.group 
        ? html`
          <li
            aria-selected="${this._isSelected(option)}"
            id="option${option.id}"
            role="option"
            part="listbox-li"
            @click="${(e) => this._onOptionClick(e, option)}"
            @mouseout="${(e) => this._onOptionMouseout(e, option)}"
            @mouseover="${(e) => this._onOptionMouseover(e, option)}"
          >
            ${this.getListItemInner(option)}
          </li>` 
        : html`
          <li
            id="option${option.id}"
            role="presentation"
            part="listbox-group"
          >
            ${option.group}
          </li>`;
    }
  
    /**
     * text content of a list item option
     * @param {object} option object representing option with id and value properties
     * @returns 
     */
    getListItemInner(option) {
      return option.value;
    }
    /**
     * sets aria-activeDescendant
     *
     * @param {object} option
     * @memberof SimpleFieldsCombo
     */
    setActiveDescendant(option) {
      if (option && this.listFocus) {
        this.activeDescendant = `option${option.id}`;
      } else {
        this.activeDescendant = "";
      }
    }
    /**
     * sets the combobox value
     *
     * @param {*} value
     * @memberof SimpleFieldsCombo
     */
    setValue(value) {
      this.filter = value;
      this.input.setSelectionRange(this.filter.length, this.filter.length);
      if (this.isList || this.isBoth) {
        this.value = this.filterOptions(this.filter, this.option).value;
      }
    }
    /**
     * sets the selected option
     *
     * @param {object} option
     * @param {string} flag
     * @memberof SimpleFieldsCombo
     */
    setOption(option, flag = false) {
      if (option) {
        this.option = option;
        this.setCurrentOptionStyle(this.option);
        this.setActiveDescendant(this.option);
  
        if (this.isBoth) {
          this.value = this.option.value;
          this.input.value = this.option.value;
          if (flag) {
            setTimeout(() => {
              this.input.setSelectionRange(
                option.value.length,
                option.value.length
              );
            }, 0);
          } else {
            setTimeout(() => {
              this.input.setSelectionRange(
                this.filter.length,
                option.value.length
              );
            }, 0);
          }
        }
      }
    }
    /**
     * switches focus to input
     *
     * @memberof SimpleFieldsCombo
     */
    setVisualFocusTextbox() {
      this.listFocus = false;
      this.inputFocus = true;
      this.setActiveDescendant(false);
    }
    /**
     * switches focus to listbox
     *
     * @memberof SimpleFieldsCombo
     */
    setVisualFocusListbox() {
      this.inputFocus = false;
      this.listFocus = true;
      this.setActiveDescendant(this.option);
    }
    /**
     * switches focus from text box and listbox
     *
     * @memberof SimpleFieldsCombo
     */
    removeVisualFocusAll() {
      this.inputFocus = false;
      this.listFocus = true; //??
      this.option = false;
      this.setActiveDescendant(false);
    }
    /**
     * handles the dropdown button click
     *
     * @param {event} event
     * @memberof SimpleFieldsCombo
     */
    _onButtonClick(event) {
      if (this.expanded) {
        this.close(true);
      } else {
        this.open();
      }
      this.input.focus();
      this.setVisualFocusTextbox();
    }
    /**
     * handles input click
     *
     * @param {event} event
     * @memberof SimpleFieldsCombo
     */
    _onInputClick(event) {
      if (this.expanded) {
        this.close(true);
      } else {
        this.open();
      }
    }
    /**
     * handles input blur
     *
     * @param {event} event
     * @memberof SimpleFieldsCombo
     */
    _onInputBlur(event) {
      if (!!this.hoveredOption) return;
      this.listFocus = false;
      this.setCurrentOptionStyle(null);
      this.removeVisualFocusAll();
      setTimeout(this.close(false), 300);
    }
    /**
     * handles input focus
     *
     * @param {event} event
     * @memberof SimpleFieldsCombo
     */
    _onInputFocus(event) {
      this.setVisualFocusTextbox();
      this.option = false;
      this.setCurrentOptionStyle(null);
    }
    /**
     * handles input keydown
     *
     * @param {event} event
     * @memberof SimpleFieldsCombo
     */
    _onInputKeydown(event) {
      var flag = false,
        altKey = event.altKey;
  
      switch (event.keyCode) {
        case this.keyCode.RETURN:
          if ((this.listFocus || this.isBoth) && this.option) {
            this.setValue(this.option.value);
          }
          this.close(true);
          flag = true;
          break;
  
        case this.keyCode.DOWN:
          if (this.hasOptions) {
            if (this.listFocus || (this.isBoth && this.option)) {
              this.setOption(this.nextItem, true);
            } else {
              this.open();
              if (!altKey) {
                this.setOption(this.firstItem, true);
              }
            }
            this.setVisualFocusListbox();
          }
          flag = true;
          break;
  
        case this.keyCode.UP:
          if (this.hasOptions) {
            if (this.listFocus || (this.isBoth && this.option)) {
              this.setOption(this.previousItem, true);
            } else {
              this.open();
              if (!altKey) {
                this.setOption(this.lastItem, true);
              }
            }
            this.setVisualFocusListbox();
          }
          flag = true;
          break;
  
        case this.keyCode.ESC:
          this.close(true);
          this.setVisualFocusTextbox();
          this.setValue("");
          this.option = false;
          flag = true;
          break;
  
        case this.keyCode.TAB:
          this.close(true);
          if (this.listFocus) {
            if (this.option) {
              this.setValue(this.option.value);
            }
          }
          break;
  
        default:
          break;
      }
  
      if (flag) {
        event.stopPropagation();
        event.preventDefault();
      }
    }
    /**
     * handles input keyup
     *
     * @param {event} event
     * @memberof SimpleFieldsCombo
     */
    _onInputKeyup(event) {
      this.dispatchEvent(
        new CustomEvent("combo-input-keyup", {
          bubbles: true,
          cancelable: true,
          composed: true,
          detail: event,
        })
      );
  
      var flag = false,
        option = false,
        char = event.key || "";
  
      function isPrintableCharacter(str) {
        return str.length === 1 && str.match(/\S/);
      }
  
      if (isPrintableCharacter(char)) {
        this.filter += char;
      }
  
      // this is for the case when a selection in the textbox has been deleted
      if (this.input && (this.input.value || "").length < this.filter.length) {
        this.filter = this.input.value || "";
        this.option = false;
      }
  
      if (event.keyCode === this.keyCode.ESC) {
        return;
      }
  
      switch (event.keyCode) {
        case this.keyCode.BACKSPACE:
          this.setValue(this.input.value);
          this.setVisualFocusTextbox();
          this.setCurrentOptionStyle(false);
          this.option = false;
          flag = true;
          break;
  
        case this.keyCode.LEFT:
        case this.keyCode.RIGHT:
        case this.keyCode.HOME:
        case this.keyCode.END:
          if (this.isBoth) {
            this.filter = this.input.value;
          } else {
            this.option = false;
            this.setCurrentOptionStyle(false);
          }
  
          this.setVisualFocusTextbox();
          flag = true;
          break;
  
        default:
          if (isPrintableCharacter(char)) {
            this.setVisualFocusTextbox();
            this.setCurrentOptionStyle(false);
            flag = true;
          }
  
          break;
      }
  
      if (event.keyCode !== this.keyCode.RETURN) {
        if (this.isList || this.isBoth) {
          option = this.filterOptions(this.filter, this.option);
          if (option) {
            if (!this.expanded && (this.input.value || "").length) this.open();
  
            if (
              option.textComparison.indexOf(
                (this.input.value || "").toLowerCase()
              ) === 0
            ) {
              this.option = option;
              if (this.isBoth || this.listFocus) {
                this.setCurrentOptionStyle(option);
                if (this.isBoth && isPrintableCharacter(char)) {
                  this.setOption(option);
                }
              }
            } else {
              this.option = false;
              this.setCurrentOptionStyle(false);
            }
          } else {
            this.close();
            this.option = false;
            this.setActiveDescendant(false);
          }
        } else {
          if (this.input && (this.input.value || "").length) {
            this.open();
          }
        }
      }
  
      if (flag) {
        event.stopPropagation();
        event.preventDefault();
      }
    }
    /**
     * gets a sorted list of option
     *
     * @readonly
     * @memberof SimpleFieldsField
     */
    get sortedOptions() {
      let list = !this.demoMode 
          ? this.itemsList 
          : this.demoMode == "groups" 
          ? this.demoGroups 
          : this.demoItems,
        sorted = (list || []).map((item, i) => typeof item !== "object" ? { id: i, value: item } : item), 
        isGroup = false,
        flattened = [];
      Object.keys(this.options || {})
        .sort((a, b) => (a > b ? 1 : -1))
        .forEach((key) =>
          sorted.push({ id: key, value: this.options[key] })
        );
      sorted.forEach((item,i)=>{
        if(!item.itemsList){
          flattened.push(item)
        } else {
          let id = (item.id || item.group || i).replace(/\W/g,'-').toLowerCase()
          flattened.push({id: id, group: item.group || item.id});
          isGroup = true;
          item.itemsList.sort((a, b) => (a > b ? 1 : -1)).forEach((subitem,j)=>flattened.push(typeof subitem !== "object" ? { id: `${id}-${j}`, value: subitem } : subitem));
        }
      });
      this.__groupOptions = isGroup;
      return flattened;
    }
    /**
     * updates options list
     *
     * @param {event} event
     * @memberof SimpleFieldsCombo
     */
    filterOptions(filter, currentOption) {
      if (typeof filter !== "string") {
        filter = "";
      }
  
      var i,
        option,
        textContent, lastGroup;
  
      filter = filter.toLowerCase();
  
      this.filteredOptions = [];
      this.firstChars = [];
  
      for (i = 0; i < this.sortedOptions.length; i++) {
        option = this.sortedOptions[i];
        option.id = i;
        option.textComparison = !option.group ? (option.value || "").toLowerCase() : undefined;
        if(!!option.group){
          lastGroup = option;
        } else if (filter.length === 0 || option.textComparison.indexOf(filter) === 0) {
          if(!!lastGroup) {
            this.filteredOptions.push(lastGroup);
            lastGroup = undefined;
          }
          this.filteredOptions.push(option);
          textContent = (option.value || '').trim();
          if(!option.group) this.firstChars.push(textContent.substring(0, 1).toLowerCase());
        }
      }
  
      if(!this.hasOptions) return false;
      let filteredText = this.filteredOptions.filter(o=>!!o.textComparison).map((o) => o.textComparison);
      if (
        !currentOption.group,
        currentOption &&
        currentOption.textComparison &&
        filteredText.includes(currentOption.textComparison)
      ) {
        option = currentOption;
      } else {
        option = this.firstOption;
      }
      return option;
    }
  
    setCurrentOptionStyle(option) {
      this._selectedOption = option;
      if (
        !!this.listbox &&
        !!option &&
        !!this.shadowRoot &&
        !!this.shadowRoot.querySelector(`#option${option.id}`)
      )
        this.listbox.scrollTop = this.shadowRoot.querySelector(
          `#option${option.id}`
        ).offsetTop;
    }
    _isSelected(option) {
      return option &&
        this._selectedOption &&
        option.textComparison === this._selectedOption.textComparison
        ? "true"
        : "false";
    }
    _onListboxMouseover(event) {
      this.listHover = true;
    }
    _onListboxMouseout(event) {
      this.listHover = false;
      this.hoveredOption = undefined;
      setTimeout(this.close(false), 300);
    }
    open() {
      if (!this.exapanded) this.expanded = true;
    }
    close(force) {
      //return;
      if (typeof force !== "boolean") {
        force = false;
      }
  
      if (force || (!this.inputFocus && !this.hasHover && !this.hasHover)) {
        this.setCurrentOptionStyle(false);
        this.expanded = false;
        this.setActiveDescendant(false);
      }
    }
    /**
     * handles option click
     * @param {event} event 
     * @param {option data} option 
     */
    _onOptionClick(event, option) {
      if (option) {
        this.setOption(option);
        this.setValue(option.value);
      }
      this.close(true);
    }
    /**
     * handles option click
     * @param {event} event 
     * @param {option data} option 
     */
    _onOptionMouseover(event, option) {
      this.hoveredOption = option;
      this.listHover = true;
      this.open();
    }
    /**
     * handles option click
     * @param {event} event 
     * @param {option data} option 
     */
    _onOptionMouseout(event, option) {
      this.listHover = false;
      this.hoveredOption = undefined;
      setTimeout(this.close(false), 300);
    }

    /**
     * filters out group text from list of options 
     *
     * @readonly
     */
    get optionsOnly(){
      return (this.filteredOptions || []).filter(option=>!option.group);
    }

  
    /**
     * whether or not list has options
     *
     * @readonly
     */
    get hasOptions() {
      return this.optionsOnly.length > 0;
    }
  
    get firstOption(){
      return this.hasOptions ? this.optionsOnly[0] : false;
    }
  
    get lastOption(){
      return this.hasOptions ? this.optionsOnly[this.optionsOnly.length - 1] : false;
    }
  
    get previousItem() {
      var index,
        optionText = !this.option ? undefined : this.option.textComparison,
        firstText = !this.firstOption
          ? undefined
          : this.firstOption.textComparison,
        filteredtext = this.optionsOnly.map((o) => o.textComparison);
      if (optionText !== firstText) {
        index = filteredtext.indexOf(optionText);
        return this.optionsOnly[index - 1];
      }
      return this.lastOption;
    }
    get nextItem() {
      var index,
        optionText = !this.option ? undefined : this.option.textComparison,
        lastText = !this.lastOption ? undefined : this.lastOption.textComparison,
        filteredtext = this.optionsOnly.map((o) => o.textComparison);
      if (optionText !== lastText) {
        index = filteredtext.indexOf(optionText);
        return this.optionsOnly[index + 1];
      }
      return this.firstOption;
    }
    get keyCode() {
      return {
        BACKSPACE: 8,
        TAB: 9,
        RETURN: 13,
        ESC: 27,
        SPACE: 32,
        PAGEUP: 33,
        PAGEDOWN: 34,
        END: 35,
        HOME: 36,
        LEFT: 37,
        UP: 38,
        RIGHT: 39,
        DOWN: 40,
      };
    }
  
    
  };
}
/**
 *`simple-listbox`
 * input tags and validate an array of input
 * can return as a string or object based on
 * requirements of the implementing element
 *
 * @customElement
 * @class SimpleListbox
 * @extends {SimpleListBoxBehaviors(LitElement)}
 * @demo ./demo/index.html Demo
 */
class SimpleListbox extends SimpleListBoxBehaviors(LitElement) {
  static get tag() {
    return "simple-listbox";
  }
}
window.customElements.define(SimpleListbox.tag, SimpleListbox);
export { SimpleListbox };
