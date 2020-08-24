/**
 * Copyright 2019 Penn State University
 * @license Apache-2.0, see License.md for full text.
 */
import { html, css } from "lit-element/lit-element.js";
import { SimplePicker } from "@lrnwebcomponents/simple-picker/simple-picker.js";

/**
 * `simple-emoji-picker`
 * @element simple-emoji-picker
 * Uses simple-picker to create an icon picker
 *

 * @demo ./demo/index.html
 */
class SimpleEmojiPicker extends SimplePicker {
  //styles function
  static get styles() {
    return [...super.styles, 
      css`
        simple-picker-option {
          justify-content: space-around;
        }
      `
    ];
  }

  // properties available to the custom element for data binding
  static get properties() {
    return {
      ...super.properties,

      /**
       * emoji types to include
       */
      emojiTypes: {
        name: "emojiTypes",
        type: Array
      }
    };
  }

  /**
   * Store the tag name to make it easier to obtain directly.
   * @notice function name must be here for tooling to operate correctly
   */
  static get tag() {
    return "simple-emoji-picker";
  }

  constructor() {
    super();
    this.emojiTypes = [
      "emotions",
      "people",
      "nature",
      "food",
      "travel",
      "activities",
      "objects",
      "symbols",
      "flags"
    ];
    this.icon = "editor:insert-emoticon";
    this.label = "Emoji";
    this.titleAsHtml = true;
    import("@polymer/iron-icons/editor-icons.js");
  }
  /**
   * LitElement life cycle - ready callback
   */
  firstUpdated(changedProperties) {
    if (super.firstUpdated) {
      super.firstUpdated(changedProperties);
    }
    let optData = [{ alt: null, icon: this.icon, value: null }];
    this.emojiTypes.forEach(type =>
      window.SimplePickerEmojis[type].forEach(emoji => optData.push(emoji))
    );
    optData = this._setPickerOptions(optData);
    this.options = optData;
  }

  /**
   * gets a list of icons and load them in a format
   * that simple-picker can take;
   * if no icons are provided, loads a list from iron-meta
   *
   * @param {array} a list of custom icons for picker
   * @returns {array}
   */
  _setPickerOptions(options = this.options || []) {
    let items = [],
      cols =
        Math.sqrt(options.length) < 11
          ? Math.ceil(Math.sqrt(options.length))
          : 10;
    options.forEach((option, i) => {
      let row = Math.floor(i / cols),
        col = i - row * cols;
      if (!items[row]) items[row] = [];
      items[row][col] = option;
    });
    return items;
  }
  /**
   * Don't set the selection option until there are options rendered
   */
  _setSelectedOption() {
    if (this.options.length > 1) super._setSelectedOption();
  }
}
window.SimplePickerEmojis = window.SimplePickerEmojis || {
  emotions: [
    { value: "&#x1F600;", alt: "&#x1F600;", descripton: "grinning face" },
    {
      value: "&#x1F603;",
      alt: "&#x1F603;",
      descripton: "grinning face with big eyes"
    },
    {
      value: "&#x1F604;",
      alt: "&#x1F604;",
      descripton: "grinning face with smiling eyes"
    },
    {
      value: "&#x1F601;",
      alt: "&#x1F601;",
      descripton: "beaming face with smiling eyes"
    },
    {
      value: "&#x1F606;",
      alt: "&#x1F606;",
      descripton: "grinning squinting face"
    },
    {
      value: "&#x1F605;",
      alt: "&#x1F605;",
      descripton: "grinning face with sweat"
    },
    {
      value: "&#x1F923;",
      alt: "&#x1F923;",
      descripton: "rolling on the floor laughing"
    },
    {
      value: "&#x1F602;",
      alt: "&#x1F602;",
      descripton: "face with tears of joy"
    },
    {
      value: "&#x1F642;",
      alt: "&#x1F642;",
      descripton: "slightly smiling face"
    },
    {
      value: "&#x1F643;",
      alt: "&#x1F643;",
      descripton: "upside-down face"
    },
    { value: "&#x1F609;", alt: "&#x1F609;", descripton: "winking face" },
    {
      value: "&#x1F60A;",
      alt: "&#x1F60A;",
      descripton: "smiling face with smiling eyes"
    },
    {
      value: "&#x1F607;",
      alt: "&#x1F607;",
      descripton: "smiling face with halo"
    },
    {
      value: "&#x1F970;",
      alt: "&#x1F970;",
      descripton: "smiling face with hearts"
    },
    {
      value: "&#x1F60D;",
      alt: "&#x1F60D;",
      descripton: "smiling face with heart-eyes"
    },
    { value: "&#x1F929;", alt: "&#x1F929;", descripton: "star-struck" },
    {
      value: "&#x1F618;",
      alt: "&#x1F618;",
      descripton: "face blowing a kiss"
    },
    { value: "&#x1F617;", alt: "&#x1F617;", descripton: "kissing face" },
    { value: "&#x263A;", alt: "&#x263A;", descripton: "smiling face" },
    {
      value: "&#x1F61A;",
      alt: "&#x1F61A;",
      descripton: "kissing face with closed eyes"
    },
    {
      value: "&#x1F619;",
      alt: "&#x1F619;",
      descripton: "kissing face with smiling eyes"
    },
    {
      value: "&#x1F60B;",
      alt: "&#x1F60B;",
      descripton: "face savoring food"
    },
    {
      value: "&#x1F61B;",
      alt: "&#x1F61B;",
      descripton: "face with tongue"
    },
    {
      value: "&#x1F61C;",
      alt: "&#x1F61C;",
      descripton: "winking face with tongue"
    },
    { value: "&#x1F92A;", alt: "&#x1F92A;", descripton: "zany face" },
    {
      value: "&#x1F61D;",
      alt: "&#x1F61D;",
      descripton: "squinting face with tongue"
    },
    {
      value: "&#x1F911;",
      alt: "&#x1F911;",
      descripton: "money-mouth face"
    },
    { value: "&#x1F917;", alt: "&#x1F917;", descripton: "hugging face" },
    {
      value: "&#x1F92D;",
      alt: "&#x1F92D;",
      descripton: "face with hand over mouth"
    },
    { value: "&#x1F92B;", alt: "&#x1F92B;", descripton: "shushing face" },
    { value: "&#x1F914;", alt: "&#x1F914;", descripton: "thinking face" },
    {
      value: "&#x1F910;",
      alt: "&#x1F910;",
      descripton: "zipper-mouth face"
    },
    {
      value: "&#x1F928;",
      alt: "&#x1F928;",
      descripton: "face with raised eyebrow"
    },
    { value: "&#x1F610;", alt: "&#x1F610;", descripton: "neutral face" },
    {
      value: "&#x1F611;",
      alt: "&#x1F611;",
      descripton: "expressionless face"
    },
    {
      value: "&#x1F636;",
      alt: "&#x1F636;",
      descripton: "face without mouth"
    },
    { value: "&#x1F60F;", alt: "&#x1F60F;", descripton: "smirking face" },
    { value: "&#x1F612;", alt: "&#x1F612;", descripton: "unamused face" },
    {
      value: "&#x1F644;",
      alt: "&#x1F644;",
      descripton: "face with rolling eyes"
    },
    { value: "&#x1F62C;", alt: "&#x1F62C;", descripton: "grimacing face" },
    { value: "&#x1F925;", alt: "&#x1F925;", descripton: "lying face" },
    { value: "&#x1F60C;", alt: "&#x1F60C;", descripton: "relieved face" },
    { value: "&#x1F614;", alt: "&#x1F614;", descripton: "pensive face" },
    { value: "&#x1F62A;", alt: "&#x1F62A;", descripton: "sleepy face" },
    { value: "&#x1F924;", alt: "&#x1F924;", descripton: "drooling face" },
    { value: "&#x1F634;", alt: "&#x1F634;", descripton: "sleeping face" },
    {
      value: "&#x1F637;",
      alt: "&#x1F637;",
      descripton: "face with medical mask"
    },
    {
      value: "&#x1F912;",
      alt: "&#x1F912;",
      descripton: "face with thermometer"
    },
    {
      value: "&#x1F915;",
      alt: "&#x1F915;",
      descripton: "face with head-bandage"
    },
    { value: "&#x1F922;", alt: "&#x1F922;", descripton: "nauseated face" },
    { value: "&#x1F92E;", alt: "&#x1F92E;", descripton: "face vomiting" },
    { value: "&#x1F927;", alt: "&#x1F927;", descripton: "sneezing face" },
    { value: "&#x1F975;", alt: "&#x1F975;", descripton: "hot face" },
    { value: "&#x1F976;", alt: "&#x1F976;", descripton: "cold face" },
    { value: "&#x1F974;", alt: "&#x1F974;", descripton: "woozy face" },
    { value: "&#x1F635;", alt: "&#x1F635;", descripton: "dizzy face" },
    { value: "&#x1F92F;", alt: "&#x1F92F;", descripton: "exploding head" },
    { value: "&#x1F920;", alt: "&#x1F920;", descripton: "cowboy hat face" },
    { value: "&#x1F973;", alt: "&#x1F973;", descripton: "partying face" },
    {
      value: "&#x1F60E;",
      alt: "&#x1F60E;",
      descripton: "smiling face with sunglasses"
    },
    { value: "&#x1F913;", alt: "&#x1F913;", descripton: "nerd face" },
    {
      value: "&#x1F9D0;",
      alt: "&#x1F9D0;",
      descripton: "face with monocle"
    },
    { value: "&#x1F615;", alt: "&#x1F615;", descripton: "confused face" },
    { value: "&#x1F61F;", alt: "&#x1F61F;", descripton: "worried face" },
    {
      value: "&#x1F641;",
      alt: "&#x1F641;",
      descripton: "slightly frowning face"
    },
    { value: "&#x2639;", alt: "&#x2639;", descripton: "frowning face" },
    {
      value: "&#x1F62E;",
      alt: "&#x1F62E;",
      descripton: "face with open mouth"
    },
    { value: "&#x1F62F;", alt: "&#x1F62F;", descripton: "hushed face" },
    { value: "&#x1F632;", alt: "&#x1F632;", descripton: "astonished face" },
    { value: "&#x1F633;", alt: "&#x1F633;", descripton: "flushed face" },
    { value: "&#x1F97A;", alt: "&#x1F97A;", descripton: "pleading face" },
    {
      value: "&#x1F626;",
      alt: "&#x1F626;",
      descripton: "frowning face with open mouth"
    },
    { value: "&#x1F627;", alt: "&#x1F627;", descripton: "anguished face" },
    { value: "&#x1F628;", alt: "&#x1F628;", descripton: "fearful face" },
    {
      value: "&#x1F630;",
      alt: "&#x1F630;",
      descripton: "anxious face with sweat"
    },
    {
      value: "&#x1F625;",
      alt: "&#x1F625;",
      descripton: "sad but relieved face"
    },
    { value: "&#x1F622;", alt: "&#x1F622;", descripton: "crying face" },
    {
      value: "&#x1F62D;",
      alt: "&#x1F62D;",
      descripton: "loudly crying face"
    },
    {
      value: "&#x1F631;",
      alt: "&#x1F631;",
      descripton: "face screaming in fear"
    },
    { value: "&#x1F616;", alt: "&#x1F616;", descripton: "confounded face" },
    {
      value: "&#x1F623;",
      alt: "&#x1F623;",
      descripton: "persevering face"
    },
    {
      value: "&#x1F61E;",
      alt: "&#x1F61E;",
      descripton: "disappointed face"
    },
    {
      value: "&#x1F613;",
      alt: "&#x1F613;",
      descripton: "downcast face with sweat"
    },
    { value: "&#x1F629;", alt: "&#x1F629;", descripton: "weary face" },
    { value: "&#x1F62B;", alt: "&#x1F62B;", descripton: "tired face" },
    { value: "&#x1F971;", alt: "&#x1F971;", descripton: "yawning face" },
    {
      value: "&#x1F624;",
      alt: "&#x1F624;",
      descripton: "face with steam from nose"
    },
    { value: "&#x1F621;", alt: "&#x1F621;", descripton: "pouting face" },
    { value: "&#x1F620;", alt: "&#x1F620;", descripton: "angry face" },
    {
      value: "&#x1F92C;",
      alt: "&#x1F92C;",
      descripton: "face with symbols on mouth"
    },
    {
      value: "&#x1F608;",
      alt: "&#x1F608;",
      descripton: "smiling face with horns"
    },
    {
      value: "&#x1F47F;",
      alt: "&#x1F47F;",
      descripton: "angry face with horns"
    },
    { value: "&#x1F480;", alt: "&#x1F480;", descripton: "skull" },
    {
      value: "&#x2620;",
      alt: "&#x2620;",
      descripton: "skull and crossbones"
    },
    { value: "&#x1F4A9;", alt: "&#x1F4A9;", descripton: "pile of poo" },
    { value: "&#x1F921;", alt: "&#x1F921;", descripton: "clown face" },
    { value: "&#x1F479;", alt: "&#x1F479;", descripton: "ogre" },
    { value: "&#x1F47A;", alt: "&#x1F47A;", descripton: "goblin" },
    { value: "&#x1F47B;", alt: "&#x1F47B;", descripton: "ghost" },
    { value: "&#x1F47D;", alt: "&#x1F47D;", descripton: "alien" },
    { value: "&#x1F47E;", alt: "&#x1F47E;", descripton: "alien monster" },
    { value: "&#x1F916;", alt: "&#x1F916;", descripton: "robot" },
    { value: "&#x1F63A;", alt: "&#x1F63A;", descripton: "grinning cat" },
    {
      value: "&#x1F638;",
      alt: "&#x1F638;",
      descripton: "grinning cat with smiling eyes"
    },
    {
      value: "&#x1F639;",
      alt: "&#x1F639;",
      descripton: "cat with tears of joy"
    },
    {
      value: "&#x1F63B;",
      alt: "&#x1F63B;",
      descripton: "smiling cat with heart-eyes"
    },
    {
      value: "&#x1F63C;",
      alt: "&#x1F63C;",
      descripton: "cat with wry smile"
    },
    { value: "&#x1F63D;", alt: "&#x1F63D;", descripton: "kissing cat" },
    { value: "&#x1F640;", alt: "&#x1F640;", descripton: "weary cat" },
    { value: "&#x1F63F;", alt: "&#x1F63F;", descripton: "crying cat" },
    { value: "&#x1F63E;", alt: "&#x1F63E;", descripton: "pouting cat" },
    {
      value: "&#x1F648;",
      alt: "&#x1F648;",
      descripton: "see-no-evil monkey"
    },
    {
      value: "&#x1F649;",
      alt: "&#x1F649;",
      descripton: "hear-no-evil monkey"
    },
    {
      value: "&#x1F64A;",
      alt: "&#x1F64A;",
      descripton: "speak-no-evil monkey"
    },
    { value: "&#x1F48B;", alt: "&#x1F48B;", descripton: "kiss mark" },
    { value: "&#x1F48C;", alt: "&#x1F48C;", descripton: "love letter" },
    {
      value: "&#x1F498;",
      alt: "&#x1F498;",
      descripton: "heart with arrow"
    },
    {
      value: "&#x1F49D;",
      alt: "&#x1F49D;",
      descripton: "heart with ribbon"
    },
    { value: "&#x1F496;", alt: "&#x1F496;", descripton: "sparkling heart" },
    { value: "&#x1F497;", alt: "&#x1F497;", descripton: "growing heart" },
    { value: "&#x1F493;", alt: "&#x1F493;", descripton: "beating heart" },
    {
      value: "&#x1F49E;",
      alt: "&#x1F49E;",
      descripton: "revolving hearts"
    },
    { value: "&#x1F495;", alt: "&#x1F495;", descripton: "two hearts" },
    {
      value: "&#x1F49F;",
      alt: "&#x1F49F;",
      descripton: "heart decoration"
    },
    { value: "&#x2763;", alt: "&#x2763;", descripton: "heart exclamation" },
    { value: "&#x1F494;", alt: "&#x1F494;", descripton: "broken heart" },
    { value: "&#x2764;", alt: "&#x2764;", descripton: "red heart" },
    { value: "&#x1F9E1;", alt: "&#x1F9E1;", descripton: "orange heart" },
    { value: "&#x1F49B;", alt: "&#x1F49B;", descripton: "yellow heart" },
    { value: "&#x1F49A;", alt: "&#x1F49A;", descripton: "green heart" },
    { value: "&#x1F499;", alt: "&#x1F499;", descripton: "blue heart" },
    { value: "&#x1F49C;", alt: "&#x1F49C;", descripton: "purple heart" },
    { value: "&#x1F90E;", alt: "&#x1F90E;", descripton: "brown heart" },
    { value: "&#x1F5A4;", alt: "&#x1F5A4;", descripton: "black heart" },
    { value: "&#x1F90D;", alt: "&#x1F90D;", descripton: "white heart" },
    { value: "&#x1F4AF;", alt: "&#x1F4AF;", descripton: "hundred points" },
    { value: "&#x1F4A2;", alt: "&#x1F4A2;", descripton: "anger symbol" },
    { value: "&#x1F4A5;", alt: "&#x1F4A5;", descripton: "collision" },
    { value: "&#x1F4AB;", alt: "&#x1F4AB;", descripton: "dizzy" },
    { value: "&#x1F4A6;", alt: "&#x1F4A6;", descripton: "sweat droplets" },
    { value: "&#x1F4A8;", alt: "&#x1F4A8;", descripton: "dashing away" },
    { value: "&#x1F573;", alt: "&#x1F573;", descripton: "hole" },
    { value: "&#x1F4A3;", alt: "&#x1F4A3;", descripton: "bomb" },
    { value: "&#x1F4AC;", alt: "&#x1F4AC;", descripton: "speech balloon" },
    {
      value: "&#x1F5E8;",
      alt: "&#x1F5E8;",
      descripton: "left speech bubble"
    },
    {
      value: "&#x1F5EF;",
      alt: "&#x1F5EF;",
      descripton: "right anger bubble"
    },
    { value: "&#x1F4AD;", alt: "&#x1F4AD;", descripton: "thought balloon" },
    { value: "&#x1F4A4;", alt: "&#x1F4A4;", descripton: "zzz" }
  ],
  people: [
    { value: "&#x1F44B;", alt: "&#x1F44B;", descripton: "waving hand" },
    {
      value: "&#x1F91A;",
      alt: "&#x1F91A;",
      descripton: "raised back of hand"
    },
    {
      value: "&#x1F590;",
      alt: "&#x1F590;",
      descripton: "hand with fingers splayed"
    },
    { value: "&#x270B;", alt: "&#x270B;", descripton: "raised hand" },
    { value: "&#x1F596;", alt: "&#x1F596;", descripton: "vulcan salute" },
    { value: "&#x1F44C;", alt: "&#x1F44C;", descripton: "OK hand" },
    { value: "&#x1F90F;", alt: "&#x1F90F;", descripton: "pinching hand" },
    { value: "&#x270C;", alt: "&#x270C;", descripton: "victory hand" },
    { value: "&#x1F91E;", alt: "&#x1F91E;", descripton: "crossed fingers" },
    {
      value: "&#x1F91F;",
      alt: "&#x1F91F;",
      descripton: "love-you gesture"
    },
    {
      value: "&#x1F918;",
      alt: "&#x1F918;",
      descripton: "sign of the horns"
    },
    { value: "&#x1F919;", alt: "&#x1F919;", descripton: "call me hand" },
    {
      value: "&#x1F448;",
      alt: "&#x1F448;",
      descripton: "backhand index pointing left"
    },
    {
      value: "&#x1F449;",
      alt: "&#x1F449;",
      descripton: "backhand index pointing right"
    },
    {
      value: "&#x1F446;",
      alt: "&#x1F446;",
      descripton: "backhand index pointing up"
    },
    { value: "&#x1F595;", alt: "&#x1F595;", descripton: "middle finger" },
    {
      value: "&#x1F447;",
      alt: "&#x1F447;",
      descripton: "backhand index pointing down"
    },
    { value: "&#x261D;", alt: "&#x261D;", descripton: "index pointing up" },
    { value: "&#x1F44D;", alt: "&#x1F44D;", descripton: "thumbs up" },
    { value: "&#x1F44E;", alt: "&#x1F44E;", descripton: "thumbs down" },
    { value: "&#x270A;", alt: "&#x270A;", descripton: "raised fist" },
    { value: "&#x1F44A;", alt: "&#x1F44A;", descripton: "oncoming fist" },
    {
      value: "&#x1F91B;",
      alt: "&#x1F91B;",
      descripton: "left-facing fist"
    },
    {
      value: "&#x1F91C;",
      alt: "&#x1F91C;",
      descripton: "right-facing fist"
    },
    { value: "&#x1F44F;", alt: "&#x1F44F;", descripton: "clapping hands" },
    { value: "&#x1F64C;", alt: "&#x1F64C;", descripton: "raising hands" },
    { value: "&#x1F450;", alt: "&#x1F450;", descripton: "open hands" },
    {
      value: "&#x1F932;",
      alt: "&#x1F932;",
      descripton: "palms up together"
    },
    { value: "&#x1F91D;", alt: "&#x1F91D;", descripton: "handshake" },
    { value: "&#x1F64F;", alt: "&#x1F64F;", descripton: "folded hands" },
    { value: "&#x270D;", alt: "&#x270D;", descripton: "writing hand" },
    { value: "&#x1F485;", alt: "&#x1F485;", descripton: "nail polish" },
    { value: "&#x1F933;", alt: "&#x1F933;", descripton: "selfie" },
    { value: "&#x1F4AA;", alt: "&#x1F4AA;", descripton: "flexed biceps" },
    { value: "&#x1F9BE;", alt: "&#x1F9BE;", descripton: "mechanical arm" },
    { value: "&#x1F9BF;", alt: "&#x1F9BF;", descripton: "mechanical leg" },
    { value: "&#x1F9B5;", alt: "&#x1F9B5;", descripton: "leg" },
    { value: "&#x1F9B6;", alt: "&#x1F9B6;", descripton: "foot" },
    { value: "&#x1F442;", alt: "&#x1F442;", descripton: "ear" },
    {
      value: "&#x1F9BB;",
      alt: "&#x1F9BB;",
      descripton: "ear with hearing aid"
    },
    { value: "&#x1F443;", alt: "&#x1F443;", descripton: "nose" },
    { value: "&#x1F9E0;", alt: "&#x1F9E0;", descripton: "brain" },
    { value: "&#x1F9B7;", alt: "&#x1F9B7;", descripton: "tooth" },
    { value: "&#x1F9B4;", alt: "&#x1F9B4;", descripton: "bone" },
    { value: "&#x1F440;", alt: "&#x1F440;", descripton: "eyes" },
    { value: "&#x1F441;", alt: "&#x1F441;", descripton: "eye" },
    { value: "&#x1F445;", alt: "&#x1F445;", descripton: "tongue" },
    { value: "&#x1F444;", alt: "&#x1F444;", descripton: "mouth" },
    { value: "&#x1F476;", alt: "&#x1F476;", descripton: "baby" },
    { value: "&#x1F9D2;", alt: "&#x1F9D2;", descripton: "child" },
    { value: "&#x1F466;", alt: "&#x1F466;", descripton: "boy" },
    { value: "&#x1F467;", alt: "&#x1F467;", descripton: "girl" },
    { value: "&#x1F9D1;", alt: "&#x1F9D1;", descripton: "person" },
    {
      value: "&#x1F471;",
      alt: "&#x1F471;",
      descripton: "person: blond hair"
    },
    { value: "&#x1F468;", alt: "&#x1F468;", descripton: "man" },
    { value: "&#x1F9D4;", alt: "&#x1F9D4;", descripton: "man: beard" },
    { value: "&#x1F469;", alt: "&#x1F469;", descripton: "woman" },
    { value: "&#x1F9D3;", alt: "&#x1F9D3;", descripton: "older person" },
    { value: "&#x1F474;", alt: "&#x1F474;", descripton: "old man" },
    { value: "&#x1F475;", alt: "&#x1F475;", descripton: "old woman" },
    { value: "&#x1F64D;", alt: "&#x1F64D;", descripton: "person frowning" },
    { value: "&#x1F64E;", alt: "&#x1F64E;", descripton: "person pouting" },
    {
      value: "&#x1F645;",
      alt: "&#x1F645;",
      descripton: "person gesturing NO"
    },
    {
      value: "&#x1F646;",
      alt: "&#x1F646;",
      descripton: "person gesturing OK"
    },
    {
      value: "&#x1F481;",
      alt: "&#x1F481;",
      descripton: "person tipping hand"
    },
    {
      value: "&#x1F64B;",
      alt: "&#x1F64B;",
      descripton: "person raising hand"
    },
    { value: "&#x1F9CF;", alt: "&#x1F9CF;", descripton: "deaf person" },
    { value: "&#x1F647;", alt: "&#x1F647;", descripton: "person bowing" },
    {
      value: "&#x1F926;",
      alt: "&#x1F926;",
      descripton: "person facepalming"
    },
    {
      value: "&#x1F937;",
      alt: "&#x1F937;",
      descripton: "person shrugging"
    },
    { value: "&#x1F46E;", alt: "&#x1F46E;", descripton: "police officer" },
    { value: "&#x1F575;", alt: "&#x1F575;", descripton: "detective" },
    { value: "&#x1F482;", alt: "&#x1F482;", descripton: "guard" },
    {
      value: "&#x1F477;",
      alt: "&#x1F477;",
      descripton: "construction worker"
    },
    { value: "&#x1F934;", alt: "&#x1F934;", descripton: "prince" },
    { value: "&#x1F478;", alt: "&#x1F478;", descripton: "princess" },
    {
      value: "&#x1F473;",
      alt: "&#x1F473;",
      descripton: "person wearing turban"
    },
    {
      value: "&#x1F472;",
      alt: "&#x1F472;",
      descripton: "man with Chinese cap"
    },
    {
      value: "&#x1F9D5;",
      alt: "&#x1F9D5;",
      descripton: "woman with headscarf"
    },
    { value: "&#x1F935;", alt: "&#x1F935;", descripton: "man in tuxedo" },
    { value: "&#x1F470;", alt: "&#x1F470;", descripton: "bride with veil" },
    { value: "&#x1F930;", alt: "&#x1F930;", descripton: "pregnant woman" },
    { value: "&#x1F931;", alt: "&#x1F931;", descripton: "breast-feeding" },
    { value: "&#x1F47C;", alt: "&#x1F47C;", descripton: "baby angel" },
    { value: "&#x1F385;", alt: "&#x1F385;", descripton: "Santa Claus" },
    { value: "&#x1F936;", alt: "&#x1F936;", descripton: "Mrs. Claus" },
    { value: "&#x1F9B8;", alt: "&#x1F9B8;", descripton: "superhero" },
    { value: "&#x1F9B9;", alt: "&#x1F9B9;", descripton: "supervillain" },
    { value: "&#x1F9D9;", alt: "&#x1F9D9;", descripton: "mage" },
    { value: "&#x1F9DA;", alt: "&#x1F9DA;", descripton: "fairy" },
    { value: "&#x1F9DB;", alt: "&#x1F9DB;", descripton: "vampire" },
    { value: "&#x1F9DC;", alt: "&#x1F9DC;", descripton: "merperson" },
    { value: "&#x1F9DD;", alt: "&#x1F9DD;", descripton: "elf" },
    { value: "&#x1F9DE;", alt: "&#x1F9DE;", descripton: "genie" },
    { value: "&#x1F9DF;", alt: "&#x1F9DF;", descripton: "zombie" },
    {
      value: "&#x1F486;",
      alt: "&#x1F486;",
      descripton: "person getting massage"
    },
    {
      value: "&#x1F487;",
      alt: "&#x1F487;",
      descripton: "person getting haircut"
    },
    { value: "&#x1F6B6;", alt: "&#x1F6B6;", descripton: "person walking" },
    { value: "&#x1F9CD;", alt: "&#x1F9CD;", descripton: "person standing" },
    { value: "&#x1F9CE;", alt: "&#x1F9CE;", descripton: "person kneeling" },
    { value: "&#x1F3C3;", alt: "&#x1F3C3;", descripton: "person running" },
    { value: "&#x1F483;", alt: "&#x1F483;", descripton: "woman dancing" },
    { value: "&#x1F57A;", alt: "&#x1F57A;", descripton: "man dancing" },
    {
      value: "&#x1F574;",
      alt: "&#x1F574;",
      descripton: "man in suit levitating"
    },
    {
      value: "&#x1F46F;",
      alt: "&#x1F46F;",
      descripton: "people with bunny ears"
    },
    {
      value: "&#x1F9D6;",
      alt: "&#x1F9D6;",
      descripton: "person in steamy room"
    },
    { value: "&#x1F9D7;", alt: "&#x1F9D7;", descripton: "person climbing" },
    { value: "&#x1F93A;", alt: "&#x1F93A;", descripton: "person fencing" },
    { value: "&#x1F3C7;", alt: "&#x1F3C7;", descripton: "horse racing" },
    { value: "&#x26F7;", alt: "&#x26F7;", descripton: "skier" },
    { value: "&#x1F3C2;", alt: "&#x1F3C2;", descripton: "snowboarder" },
    { value: "&#x1F3CC;", alt: "&#x1F3CC;", descripton: "person golfing" },
    { value: "&#x1F3C4;", alt: "&#x1F3C4;", descripton: "person surfing" },
    {
      value: "&#x1F6A3;",
      alt: "&#x1F6A3;",
      descripton: "person rowing boat"
    },
    { value: "&#x1F3CA;", alt: "&#x1F3CA;", descripton: "person swimming" },
    {
      value: "&#x26F9;",
      alt: "&#x26F9;",
      descripton: "person bouncing ball"
    },
    {
      value: "&#x1F3CB;",
      alt: "&#x1F3CB;",
      descripton: "person lifting weights"
    },
    { value: "&#x1F6B4;", alt: "&#x1F6B4;", descripton: "person biking" },
    {
      value: "&#x1F6B5;",
      alt: "&#x1F6B5;",
      descripton: "person mountain biking"
    },
    {
      value: "&#x1F938;",
      alt: "&#x1F938;",
      descripton: "person cartwheeling"
    },
    {
      value: "&#x1F93C;",
      alt: "&#x1F93C;",
      descripton: "people wrestling"
    },
    {
      value: "&#x1F93D;",
      alt: "&#x1F93D;",
      descripton: "person playing water polo"
    },
    {
      value: "&#x1F93E;",
      alt: "&#x1F93E;",
      descripton: "person playing handball"
    },
    { value: "&#x1F939;", alt: "&#x1F939;", descripton: "person juggling" },
    {
      value: "&#x1F9D8;",
      alt: "&#x1F9D8;",
      descripton: "person in lotus position"
    },
    {
      value: "&#x1F6C0;",
      alt: "&#x1F6C0;",
      descripton: "person taking bath"
    },
    { value: "&#x1F6CC;", alt: "&#x1F6CC;", descripton: "person in bed" },
    {
      value: "&#x1F46D;",
      alt: "&#x1F46D;",
      descripton: "women holding hands"
    },
    {
      value: "&#x1F46B;",
      alt: "&#x1F46B;",
      descripton: "woman and man holding hands"
    },
    {
      value: "&#x1F46C;",
      alt: "&#x1F46C;",
      descripton: "men holding hands"
    },
    { value: "&#x1F48F;", alt: "&#x1F48F;", descripton: "kiss" },
    {
      value: "&#x1F491;",
      alt: "&#x1F491;",
      descripton: "couple with heart"
    },
    { value: "&#x1F46A;", alt: "&#x1F46A;", descripton: "family" },
    { value: "&#x1F5E3;", alt: "&#x1F5E3;", descripton: "speaking head" },
    {
      value: "&#x1F464;",
      alt: "&#x1F464;",
      descripton: "bust in silhouette"
    },
    {
      value: "&#x1F465;",
      alt: "&#x1F465;",
      descripton: "busts in silhouette"
    },
    { value: "&#x1F463;", alt: "&#x1F463;", descripton: "footprints" },
    { value: "&#x1F9B0;", alt: "&#x1F9B0;", descripton: "red hair" },
    { value: "&#x1F9B1;", alt: "&#x1F9B1;", descripton: "curly hair" },
    { value: "&#x1F9B3;", alt: "&#x1F9B3;", descripton: "white hair" },
    { value: "&#x1F9B2;", alt: "&#x1F9B2;", descripton: "bald" }
  ],
  nature: [
    { value: "&#x1F435;", alt: "&#x1F435;", descripton: "monkey face" },
    { value: "&#x1F412;", alt: "&#x1F412;", descripton: "monkey" },
    { value: "&#x1F98D;", alt: "&#x1F98D;", descripton: "gorilla" },
    { value: "&#x1F9A7;", alt: "&#x1F9A7;", descripton: "orangutan" },
    { value: "&#x1F436;", alt: "&#x1F436;", descripton: "dog face" },
    { value: "&#x1F415;", alt: "&#x1F415;", descripton: "dog" },
    { value: "&#x1F9AE;", alt: "&#x1F9AE;", descripton: "guide dog" },
    { value: "&#x1F429;", alt: "&#x1F429;", descripton: "poodle" },
    { value: "&#x1F43A;", alt: "&#x1F43A;", descripton: "wolf" },
    { value: "&#x1F98A;", alt: "&#x1F98A;", descripton: "fox" },
    { value: "&#x1F99D;", alt: "&#x1F99D;", descripton: "raccoon" },
    { value: "&#x1F431;", alt: "&#x1F431;", descripton: "cat face" },
    { value: "&#x1F408;", alt: "&#x1F408;", descripton: "cat" },
    { value: "&#x1F981;", alt: "&#x1F981;", descripton: "lion" },
    { value: "&#x1F42F;", alt: "&#x1F42F;", descripton: "tiger face" },
    { value: "&#x1F405;", alt: "&#x1F405;", descripton: "tiger" },
    { value: "&#x1F406;", alt: "&#x1F406;", descripton: "leopard" },
    { value: "&#x1F434;", alt: "&#x1F434;", descripton: "horse face" },
    { value: "&#x1F40E;", alt: "&#x1F40E;", descripton: "horse" },
    { value: "&#x1F984;", alt: "&#x1F984;", descripton: "unicorn" },
    { value: "&#x1F993;", alt: "&#x1F993;", descripton: "zebra" },
    { value: "&#x1F98C;", alt: "&#x1F98C;", descripton: "deer" },
    { value: "&#x1F42E;", alt: "&#x1F42E;", descripton: "cow face" },
    { value: "&#x1F402;", alt: "&#x1F402;", descripton: "ox" },
    { value: "&#x1F403;", alt: "&#x1F403;", descripton: "water buffalo" },
    { value: "&#x1F404;", alt: "&#x1F404;", descripton: "cow" },
    { value: "&#x1F437;", alt: "&#x1F437;", descripton: "pig face" },
    { value: "&#x1F416;", alt: "&#x1F416;", descripton: "pig" },
    { value: "&#x1F417;", alt: "&#x1F417;", descripton: "boar" },
    { value: "&#x1F43D;", alt: "&#x1F43D;", descripton: "pig nose" },
    { value: "&#x1F40F;", alt: "&#x1F40F;", descripton: "ram" },
    { value: "&#x1F411;", alt: "&#x1F411;", descripton: "ewe" },
    { value: "&#x1F410;", alt: "&#x1F410;", descripton: "goat" },
    { value: "&#x1F42A;", alt: "&#x1F42A;", descripton: "camel" },
    { value: "&#x1F42B;", alt: "&#x1F42B;", descripton: "two-hump camel" },
    { value: "&#x1F999;", alt: "&#x1F999;", descripton: "llama" },
    { value: "&#x1F992;", alt: "&#x1F992;", descripton: "giraffe" },
    { value: "&#x1F418;", alt: "&#x1F418;", descripton: "elephant" },
    { value: "&#x1F98F;", alt: "&#x1F98F;", descripton: "rhinoceros" },
    { value: "&#x1F99B;", alt: "&#x1F99B;", descripton: "hippopotamus" },
    { value: "&#x1F42D;", alt: "&#x1F42D;", descripton: "mouse face" },
    { value: "&#x1F401;", alt: "&#x1F401;", descripton: "mouse" },
    { value: "&#x1F400;", alt: "&#x1F400;", descripton: "rat" },
    { value: "&#x1F439;", alt: "&#x1F439;", descripton: "hamster" },
    { value: "&#x1F430;", alt: "&#x1F430;", descripton: "rabbit face" },
    { value: "&#x1F407;", alt: "&#x1F407;", descripton: "rabbit" },
    { value: "&#x1F43F;", alt: "&#x1F43F;", descripton: "chipmunk" },
    { value: "&#x1F994;", alt: "&#x1F994;", descripton: "hedgehog" },
    { value: "&#x1F987;", alt: "&#x1F987;", descripton: "bat" },
    { value: "&#x1F43B;", alt: "&#x1F43B;", descripton: "bear" },
    { value: "&#x1F428;", alt: "&#x1F428;", descripton: "koala" },
    { value: "&#x1F43C;", alt: "&#x1F43C;", descripton: "panda" },
    { value: "&#x1F9A5;", alt: "&#x1F9A5;", descripton: "sloth" },
    { value: "&#x1F9A6;", alt: "&#x1F9A6;", descripton: "otter" },
    { value: "&#x1F9A8;", alt: "&#x1F9A8;", descripton: "skunk" },
    { value: "&#x1F998;", alt: "&#x1F998;", descripton: "kangaroo" },
    { value: "&#x1F9A1;", alt: "&#x1F9A1;", descripton: "badger" },
    { value: "&#x1F43E;", alt: "&#x1F43E;", descripton: "paw prints" },
    { value: "&#x1F983;", alt: "&#x1F983;", descripton: "turkey" },
    { value: "&#x1F414;", alt: "&#x1F414;", descripton: "chicken" },
    { value: "&#x1F413;", alt: "&#x1F413;", descripton: "rooster" },
    { value: "&#x1F423;", alt: "&#x1F423;", descripton: "hatching chick" },
    { value: "&#x1F424;", alt: "&#x1F424;", descripton: "baby chick" },
    {
      value: "&#x1F425;",
      alt: "&#x1F425;",
      descripton: "front-facing baby chick"
    },
    { value: "&#x1F426;", alt: "&#x1F426;", descripton: "bird" },
    { value: "&#x1F427;", alt: "&#x1F427;", descripton: "penguin" },
    { value: "&#x1F54A;", alt: "&#x1F54A;", descripton: "dove" },
    { value: "&#x1F985;", alt: "&#x1F985;", descripton: "eagle" },
    { value: "&#x1F986;", alt: "&#x1F986;", descripton: "duck" },
    { value: "&#x1F9A2;", alt: "&#x1F9A2;", descripton: "swan" },
    { value: "&#x1F989;", alt: "&#x1F989;", descripton: "owl" },
    { value: "&#x1F9A9;", alt: "&#x1F9A9;", descripton: "flamingo" },
    { value: "&#x1F99A;", alt: "&#x1F99A;", descripton: "peacock" },
    { value: "&#x1F99C;", alt: "&#x1F99C;", descripton: "parrot" },
    { value: "&#x1F438;", alt: "&#x1F438;", descripton: "frog" },
    { value: "&#x1F40A;", alt: "&#x1F40A;", descripton: "crocodile" },
    { value: "&#x1F422;", alt: "&#x1F422;", descripton: "turtle" },
    { value: "&#x1F98E;", alt: "&#x1F98E;", descripton: "lizard" },
    { value: "&#x1F40D;", alt: "&#x1F40D;", descripton: "snake" },
    { value: "&#x1F432;", alt: "&#x1F432;", descripton: "dragon face" },
    { value: "&#x1F409;", alt: "&#x1F409;", descripton: "dragon" },
    { value: "&#x1F995;", alt: "&#x1F995;", descripton: "sauropod" },
    { value: "&#x1F996;", alt: "&#x1F996;", descripton: "T-Rex" },
    { value: "&#x1F433;", alt: "&#x1F433;", descripton: "spouting whale" },
    { value: "&#x1F40B;", alt: "&#x1F40B;", descripton: "whale" },
    { value: "&#x1F42C;", alt: "&#x1F42C;", descripton: "dolphin" },
    { value: "&#x1F41F;", alt: "&#x1F41F;", descripton: "fish" },
    { value: "&#x1F420;", alt: "&#x1F420;", descripton: "tropical fish" },
    { value: "&#x1F421;", alt: "&#x1F421;", descripton: "blowfish" },
    { value: "&#x1F988;", alt: "&#x1F988;", descripton: "shark" },
    { value: "&#x1F419;", alt: "&#x1F419;", descripton: "octopus" },
    { value: "&#x1F41A;", alt: "&#x1F41A;", descripton: "spiral shell" },
    { value: "&#x1F40C;", alt: "&#x1F40C;", descripton: "snail" },
    { value: "&#x1F98B;", alt: "&#x1F98B;", descripton: "butterfly" },
    { value: "&#x1F41B;", alt: "&#x1F41B;", descripton: "bug" },
    { value: "&#x1F41C;", alt: "&#x1F41C;", descripton: "ant" },
    { value: "&#x1F41D;", alt: "&#x1F41D;", descripton: "honeybee" },
    { value: "&#x1F41E;", alt: "&#x1F41E;", descripton: "lady beetle" },
    { value: "&#x1F997;", alt: "&#x1F997;", descripton: "cricket" },
    { value: "&#x1F577;", alt: "&#x1F577;", descripton: "spider" },
    { value: "&#x1F578;", alt: "&#x1F578;", descripton: "spider web" },
    { value: "&#x1F982;", alt: "&#x1F982;", descripton: "scorpion" },
    { value: "&#x1F99F;", alt: "&#x1F99F;", descripton: "mosquito" },
    { value: "&#x1F9A0;", alt: "&#x1F9A0;", descripton: "microbe" },
    { value: "&#x1F490;", alt: "&#x1F490;", descripton: "bouquet" },
    { value: "&#x1F338;", alt: "&#x1F338;", descripton: "cherry blossom" },
    { value: "&#x1F4AE;", alt: "&#x1F4AE;", descripton: "white flower" },
    { value: "&#x1F3F5;", alt: "&#x1F3F5;", descripton: "rosette" },
    { value: "&#x1F339;", alt: "&#x1F339;", descripton: "rose" },
    { value: "&#x1F940;", alt: "&#x1F940;", descripton: "wilted flower" },
    { value: "&#x1F33A;", alt: "&#x1F33A;", descripton: "hibiscus" },
    { value: "&#x1F33B;", alt: "&#x1F33B;", descripton: "sunflower" },
    { value: "&#x1F33C;", alt: "&#x1F33C;", descripton: "blossom" },
    { value: "&#x1F337;", alt: "&#x1F337;", descripton: "tulip" },
    { value: "&#x1F331;", alt: "&#x1F331;", descripton: "seedling" },
    { value: "&#x1F332;", alt: "&#x1F332;", descripton: "evergreen tree" },
    { value: "&#x1F333;", alt: "&#x1F333;", descripton: "deciduous tree" },
    { value: "&#x1F334;", alt: "&#x1F334;", descripton: "palm tree" },
    { value: "&#x1F335;", alt: "&#x1F335;", descripton: "cactus" },
    { value: "&#x1F33E;", alt: "&#x1F33E;", descripton: "sheaf of rice" },
    { value: "&#x1F33F;", alt: "&#x1F33F;", descripton: "herb" },
    { value: "&#x2618;", alt: "&#x2618;", descripton: "shamrock" },
    {
      value: "&#x1F340;",
      alt: "&#x1F340;",
      descripton: "four leaf clover"
    },
    { value: "&#x1F341;", alt: "&#x1F341;", descripton: "maple leaf" },
    { value: "&#x1F342;", alt: "&#x1F342;", descripton: "fallen leaf" },
    {
      value: "&#x1F343;",
      alt: "&#x1F343;",
      descripton: "leaf fluttering in wind"
    }
  ],
  food: [
    { value: "&#x1F347;", alt: "&#x1F347;", descripton: "grapes" },
    { value: "&#x1F348;", alt: "&#x1F348;", descripton: "melon" },
    { value: "&#x1F349;", alt: "&#x1F349;", descripton: "watermelon" },
    { value: "&#x1F34A;", alt: "&#x1F34A;", descripton: "tangerine" },
    { value: "&#x1F34B;", alt: "&#x1F34B;", descripton: "lemon" },
    { value: "&#x1F34C;", alt: "&#x1F34C;", descripton: "banana" },
    { value: "&#x1F34D;", alt: "&#x1F34D;", descripton: "pineapple" },
    { value: "&#x1F96D;", alt: "&#x1F96D;", descripton: "mango" },
    { value: "&#x1F34E;", alt: "&#x1F34E;", descripton: "red apple" },
    { value: "&#x1F34F;", alt: "&#x1F34F;", descripton: "green apple" },
    { value: "&#x1F350;", alt: "&#x1F350;", descripton: "pear" },
    { value: "&#x1F351;", alt: "&#x1F351;", descripton: "peach" },
    { value: "&#x1F352;", alt: "&#x1F352;", descripton: "cherries" },
    { value: "&#x1F353;", alt: "&#x1F353;", descripton: "strawberry" },
    { value: "&#x1F95D;", alt: "&#x1F95D;", descripton: "kiwi fruit" },
    { value: "&#x1F345;", alt: "&#x1F345;", descripton: "tomato" },
    { value: "&#x1F965;", alt: "&#x1F965;", descripton: "coconut" },
    { value: "&#x1F951;", alt: "&#x1F951;", descripton: "avocado" },
    { value: "&#x1F346;", alt: "&#x1F346;", descripton: "eggplant" },
    { value: "&#x1F954;", alt: "&#x1F954;", descripton: "potato" },
    { value: "&#x1F955;", alt: "&#x1F955;", descripton: "carrot" },
    { value: "&#x1F33D;", alt: "&#x1F33D;", descripton: "ear of corn" },
    { value: "&#x1F336;", alt: "&#x1F336;", descripton: "hot pepper" },
    { value: "&#x1F952;", alt: "&#x1F952;", descripton: "cucumber" },
    { value: "&#x1F96C;", alt: "&#x1F96C;", descripton: "leafy green" },
    { value: "&#x1F966;", alt: "&#x1F966;", descripton: "broccoli" },
    { value: "&#x1F9C4;", alt: "&#x1F9C4;", descripton: "garlic" },
    { value: "&#x1F9C5;", alt: "&#x1F9C5;", descripton: "onion" },
    { value: "&#x1F344;", alt: "&#x1F344;", descripton: "mushroom" },
    { value: "&#x1F95C;", alt: "&#x1F95C;", descripton: "peanuts" },
    { value: "&#x1F330;", alt: "&#x1F330;", descripton: "chestnut" },
    { value: "&#x1F35E;", alt: "&#x1F35E;", descripton: "bread" },
    { value: "&#x1F950;", alt: "&#x1F950;", descripton: "croissant" },
    { value: "&#x1F956;", alt: "&#x1F956;", descripton: "baguette bread" },
    { value: "&#x1F968;", alt: "&#x1F968;", descripton: "pretzel" },
    { value: "&#x1F96F;", alt: "&#x1F96F;", descripton: "bagel" },
    { value: "&#x1F95E;", alt: "&#x1F95E;", descripton: "pancakes" },
    { value: "&#x1F9C7;", alt: "&#x1F9C7;", descripton: "waffle" },
    { value: "&#x1F9C0;", alt: "&#x1F9C0;", descripton: "cheese wedge" },
    { value: "&#x1F356;", alt: "&#x1F356;", descripton: "meat on bone" },
    { value: "&#x1F357;", alt: "&#x1F357;", descripton: "poultry leg" },
    { value: "&#x1F969;", alt: "&#x1F969;", descripton: "cut of meat" },
    { value: "&#x1F953;", alt: "&#x1F953;", descripton: "bacon" },
    { value: "&#x1F354;", alt: "&#x1F354;", descripton: "hamburger" },
    { value: "&#x1F35F;", alt: "&#x1F35F;", descripton: "french fries" },
    { value: "&#x1F355;", alt: "&#x1F355;", descripton: "pizza" },
    { value: "&#x1F32D;", alt: "&#x1F32D;", descripton: "hot dog" },
    { value: "&#x1F96A;", alt: "&#x1F96A;", descripton: "sandwich" },
    { value: "&#x1F32E;", alt: "&#x1F32E;", descripton: "taco" },
    { value: "&#x1F32F;", alt: "&#x1F32F;", descripton: "burrito" },
    {
      value: "&#x1F959;",
      alt: "&#x1F959;",
      descripton: "stuffed flatbread"
    },
    { value: "&#x1F9C6;", alt: "&#x1F9C6;", descripton: "falafel" },
    { value: "&#x1F95A;", alt: "&#x1F95A;", descripton: "egg" },
    { value: "&#x1F373;", alt: "&#x1F373;", descripton: "cooking" },
    {
      value: "&#x1F958;",
      alt: "&#x1F958;",
      descripton: "shallow pan of food"
    },
    { value: "&#x1F372;", alt: "&#x1F372;", descripton: "pot of food" },
    { value: "&#x1F963;", alt: "&#x1F963;", descripton: "bowl with spoon" },
    { value: "&#x1F957;", alt: "&#x1F957;", descripton: "green salad" },
    { value: "&#x1F37F;", alt: "&#x1F37F;", descripton: "popcorn" },
    { value: "&#x1F9C8;", alt: "&#x1F9C8;", descripton: "butter" },
    { value: "&#x1F9C2;", alt: "&#x1F9C2;", descripton: "salt" },
    { value: "&#x1F96B;", alt: "&#x1F96B;", descripton: "canned food" },
    { value: "&#x1F371;", alt: "&#x1F371;", descripton: "bento box" },
    { value: "&#x1F358;", alt: "&#x1F358;", descripton: "rice cracker" },
    { value: "&#x1F359;", alt: "&#x1F359;", descripton: "rice ball" },
    { value: "&#x1F35A;", alt: "&#x1F35A;", descripton: "cooked rice" },
    { value: "&#x1F35B;", alt: "&#x1F35B;", descripton: "curry rice" },
    { value: "&#x1F35C;", alt: "&#x1F35C;", descripton: "steaming bowl" },
    { value: "&#x1F35D;", alt: "&#x1F35D;", descripton: "spaghetti" },
    {
      value: "&#x1F360;",
      alt: "&#x1F360;",
      descripton: "roasted sweet potato"
    },
    { value: "&#x1F362;", alt: "&#x1F362;", descripton: "oden" },
    { value: "&#x1F363;", alt: "&#x1F363;", descripton: "sushi" },
    { value: "&#x1F364;", alt: "&#x1F364;", descripton: "fried shrimp" },
    {
      value: "&#x1F365;",
      alt: "&#x1F365;",
      descripton: "fish cake with swirl"
    },
    { value: "&#x1F96E;", alt: "&#x1F96E;", descripton: "moon cake" },
    { value: "&#x1F361;", alt: "&#x1F361;", descripton: "dango" },
    { value: "&#x1F95F;", alt: "&#x1F95F;", descripton: "dumpling" },
    { value: "&#x1F960;", alt: "&#x1F960;", descripton: "fortune cookie" },
    { value: "&#x1F961;", alt: "&#x1F961;", descripton: "takeout box" },
    { value: "&#x1F980;", alt: "&#x1F980;", descripton: "crab" },
    { value: "&#x1F99E;", alt: "&#x1F99E;", descripton: "lobster" },
    { value: "&#x1F990;", alt: "&#x1F990;", descripton: "shrimp" },
    { value: "&#x1F991;", alt: "&#x1F991;", descripton: "squid" },
    { value: "&#x1F9AA;", alt: "&#x1F9AA;", descripton: "oyster" },
    { value: "&#x1F366;", alt: "&#x1F366;", descripton: "soft ice cream" },
    { value: "&#x1F367;", alt: "&#x1F367;", descripton: "shaved ice" },
    { value: "&#x1F368;", alt: "&#x1F368;", descripton: "ice cream" },
    { value: "&#x1F369;", alt: "&#x1F369;", descripton: "doughnut" },
    { value: "&#x1F36A;", alt: "&#x1F36A;", descripton: "cookie" },
    { value: "&#x1F382;", alt: "&#x1F382;", descripton: "birthday cake" },
    { value: "&#x1F370;", alt: "&#x1F370;", descripton: "shortcake" },
    { value: "&#x1F9C1;", alt: "&#x1F9C1;", descripton: "cupcake" },
    { value: "&#x1F967;", alt: "&#x1F967;", descripton: "pie" },
    { value: "&#x1F36B;", alt: "&#x1F36B;", descripton: "chocolate bar" },
    { value: "&#x1F36C;", alt: "&#x1F36C;", descripton: "candy" },
    { value: "&#x1F36D;", alt: "&#x1F36D;", descripton: "lollipop" },
    { value: "&#x1F36E;", alt: "&#x1F36E;", descripton: "custard" },
    { value: "&#x1F36F;", alt: "&#x1F36F;", descripton: "honey pot" },
    { value: "&#x1F37C;", alt: "&#x1F37C;", descripton: "baby bottle" },
    { value: "&#x1F95B;", alt: "&#x1F95B;", descripton: "glass of milk" },
    { value: "&#x2615;", alt: "&#x2615;", descripton: "hot beverage" },
    {
      value: "&#x1F375;",
      alt: "&#x1F375;",
      descripton: "teacup without handle"
    },
    { value: "&#x1F376;", alt: "&#x1F376;", descripton: "sake" },
    {
      value: "&#x1F37E;",
      alt: "&#x1F37E;",
      descripton: "bottle with popping cork"
    },
    { value: "&#x1F377;", alt: "&#x1F377;", descripton: "wine glass" },
    { value: "&#x1F378;", alt: "&#x1F378;", descripton: "cocktail glass" },
    { value: "&#x1F379;", alt: "&#x1F379;", descripton: "tropical drink" },
    { value: "&#x1F37A;", alt: "&#x1F37A;", descripton: "beer mug" },
    {
      value: "&#x1F37B;",
      alt: "&#x1F37B;",
      descripton: "clinking beer mugs"
    },
    {
      value: "&#x1F942;",
      alt: "&#x1F942;",
      descripton: "clinking glasses"
    },
    { value: "&#x1F943;", alt: "&#x1F943;", descripton: "tumbler glass" },
    { value: "&#x1F964;", alt: "&#x1F964;", descripton: "cup with straw" },
    { value: "&#x1F9C3;", alt: "&#x1F9C3;", descripton: "beverage box" },
    { value: "&#x1F9C9;", alt: "&#x1F9C9;", descripton: "mate" },
    { value: "&#x1F9CA;", alt: "&#x1F9CA;", descripton: "ice cube" },
    { value: "&#x1F962;", alt: "&#x1F962;", descripton: "chopsticks" },
    {
      value: "&#x1F37D;",
      alt: "&#x1F37D;",
      descripton: "fork and knife with plate"
    },
    { value: "&#x1F374;", alt: "&#x1F374;", descripton: "fork and knife" },
    { value: "&#x1F944;", alt: "&#x1F944;", descripton: "spoon" },
    { value: "&#x1F52A;", alt: "&#x1F52A;", descripton: "kitchen knife" },
    { value: "&#x1F3FA;", alt: "&#x1F3FA;", descripton: "amphora" }
  ],
  travel: [
    {
      value: "&#x1F30D;",
      alt: "&#x1F30D;",
      descripton: "globe showing Europe-Africa"
    },
    {
      value: "&#x1F30E;",
      alt: "&#x1F30E;",
      descripton: "globe showing Americas"
    },
    {
      value: "&#x1F30F;",
      alt: "&#x1F30F;",
      descripton: "globe showing Asia-Australia"
    },
    {
      value: "&#x1F310;",
      alt: "&#x1F310;",
      descripton: "globe with meridians"
    },
    { value: "&#x1F5FA;", alt: "&#x1F5FA;", descripton: "world map" },
    { value: "&#x1F5FE;", alt: "&#x1F5FE;", descripton: "map of Japan" },
    { value: "&#x1F9ED;", alt: "&#x1F9ED;", descripton: "compass" },
    {
      value: "&#x1F3D4;",
      alt: "&#x1F3D4;",
      descripton: "snow-capped mountain"
    },
    { value: "&#x26F0;", alt: "&#x26F0;", descripton: "mountain" },
    { value: "&#x1F30B;", alt: "&#x1F30B;", descripton: "volcano" },
    { value: "&#x1F5FB;", alt: "&#x1F5FB;", descripton: "mount fuji" },
    { value: "&#x1F3D5;", alt: "&#x1F3D5;", descripton: "camping" },
    {
      value: "&#x1F3D6;",
      alt: "&#x1F3D6;",
      descripton: "beach with umbrella"
    },
    { value: "&#x1F3DC;", alt: "&#x1F3DC;", descripton: "desert" },
    { value: "&#x1F3DD;", alt: "&#x1F3DD;", descripton: "desert island" },
    { value: "&#x1F3DE;", alt: "&#x1F3DE;", descripton: "national park" },
    { value: "&#x1F3DF;", alt: "&#x1F3DF;", descripton: "stadium" },
    {
      value: "&#x1F3DB;",
      alt: "&#x1F3DB;",
      descripton: "classical building"
    },
    {
      value: "&#x1F3D7;",
      alt: "&#x1F3D7;",
      descripton: "building construction"
    },
    { value: "&#x1F9F1;", alt: "&#x1F9F1;", descripton: "brick" },
    { value: "&#x1F3D8;", alt: "&#x1F3D8;", descripton: "houses" },
    { value: "&#x1F3DA;", alt: "&#x1F3DA;", descripton: "derelict house" },
    { value: "&#x1F3E0;", alt: "&#x1F3E0;", descripton: "house" },
    {
      value: "&#x1F3E1;",
      alt: "&#x1F3E1;",
      descripton: "house with garden"
    },
    { value: "&#x1F3E2;", alt: "&#x1F3E2;", descripton: "office building" },
    {
      value: "&#x1F3E3;",
      alt: "&#x1F3E3;",
      descripton: "Japanese post office"
    },
    { value: "&#x1F3E4;", alt: "&#x1F3E4;", descripton: "post office" },
    { value: "&#x1F3E5;", alt: "&#x1F3E5;", descripton: "hospital" },
    { value: "&#x1F3E6;", alt: "&#x1F3E6;", descripton: "bank" },
    { value: "&#x1F3E8;", alt: "&#x1F3E8;", descripton: "hotel" },
    { value: "&#x1F3E9;", alt: "&#x1F3E9;", descripton: "love hotel" },
    {
      value: "&#x1F3EA;",
      alt: "&#x1F3EA;",
      descripton: "convenience store"
    },
    { value: "&#x1F3EB;", alt: "&#x1F3EB;", descripton: "school" },
    {
      value: "&#x1F3EC;",
      alt: "&#x1F3EC;",
      descripton: "department store"
    },
    { value: "&#x1F3ED;", alt: "&#x1F3ED;", descripton: "factory" },
    { value: "&#x1F3EF;", alt: "&#x1F3EF;", descripton: "Japanese castle" },
    { value: "&#x1F3F0;", alt: "&#x1F3F0;", descripton: "castle" },
    { value: "&#x1F492;", alt: "&#x1F492;", descripton: "wedding" },
    { value: "&#x1F5FC;", alt: "&#x1F5FC;", descripton: "Tokyo tower" },
    {
      value: "&#x1F5FD;",
      alt: "&#x1F5FD;",
      descripton: "Statue of Liberty"
    },
    { value: "&#x26EA;", alt: "&#x26EA;", descripton: "church" },
    { value: "&#x1F54C;", alt: "&#x1F54C;", descripton: "mosque" },
    { value: "&#x1F6D5;", alt: "&#x1F6D5;", descripton: "hindu temple" },
    { value: "&#x1F54D;", alt: "&#x1F54D;", descripton: "synagogue" },
    { value: "&#x26E9;", alt: "&#x26E9;", descripton: "shinto shrine" },
    { value: "&#x1F54B;", alt: "&#x1F54B;", descripton: "kaaba" },
    { value: "&#x26F2;", alt: "&#x26F2;", descripton: "fountain" },
    { value: "&#x26FA;", alt: "&#x26FA;", descripton: "tent" },
    { value: "&#x1F301;", alt: "&#x1F301;", descripton: "foggy" },
    {
      value: "&#x1F303;",
      alt: "&#x1F303;",
      descripton: "night with stars"
    },
    { value: "&#x1F3D9;", alt: "&#x1F3D9;", descripton: "cityscape" },
    {
      value: "&#x1F304;",
      alt: "&#x1F304;",
      descripton: "sunrise over mountains"
    },
    { value: "&#x1F305;", alt: "&#x1F305;", descripton: "sunrise" },
    {
      value: "&#x1F306;",
      alt: "&#x1F306;",
      descripton: "cityscape at dusk"
    },
    { value: "&#x1F307;", alt: "&#x1F307;", descripton: "sunset" },
    { value: "&#x1F309;", alt: "&#x1F309;", descripton: "bridge at night" },
    { value: "&#x2668;", alt: "&#x2668;", descripton: "hot springs" },
    { value: "&#x1F3A0;", alt: "&#x1F3A0;", descripton: "carousel horse" },
    { value: "&#x1F3A1;", alt: "&#x1F3A1;", descripton: "ferris wheel" },
    { value: "&#x1F3A2;", alt: "&#x1F3A2;", descripton: "roller coaster" },
    { value: "&#x1F488;", alt: "&#x1F488;", descripton: "barber pole" },
    { value: "&#x1F3AA;", alt: "&#x1F3AA;", descripton: "circus tent" },
    { value: "&#x1F682;", alt: "&#x1F682;", descripton: "locomotive" },
    { value: "&#x1F683;", alt: "&#x1F683;", descripton: "railway car" },
    {
      value: "&#x1F684;",
      alt: "&#x1F684;",
      descripton: "high-speed train"
    },
    { value: "&#x1F685;", alt: "&#x1F685;", descripton: "bullet train" },
    { value: "&#x1F686;", alt: "&#x1F686;", descripton: "train" },
    { value: "&#x1F687;", alt: "&#x1F687;", descripton: "metro" },
    { value: "&#x1F688;", alt: "&#x1F688;", descripton: "light rail" },
    { value: "&#x1F689;", alt: "&#x1F689;", descripton: "station" },
    { value: "&#x1F68A;", alt: "&#x1F68A;", descripton: "tram" },
    { value: "&#x1F69D;", alt: "&#x1F69D;", descripton: "monorail" },
    {
      value: "&#x1F69E;",
      alt: "&#x1F69E;",
      descripton: "mountain railway"
    },
    { value: "&#x1F68B;", alt: "&#x1F68B;", descripton: "tram car" },
    { value: "&#x1F68C;", alt: "&#x1F68C;", descripton: "bus" },
    { value: "&#x1F68D;", alt: "&#x1F68D;", descripton: "oncoming bus" },
    { value: "&#x1F68E;", alt: "&#x1F68E;", descripton: "trolleybus" },
    { value: "&#x1F690;", alt: "&#x1F690;", descripton: "minibus" },
    { value: "&#x1F691;", alt: "&#x1F691;", descripton: "ambulance" },
    { value: "&#x1F692;", alt: "&#x1F692;", descripton: "fire engine" },
    { value: "&#x1F693;", alt: "&#x1F693;", descripton: "police car" },
    {
      value: "&#x1F694;",
      alt: "&#x1F694;",
      descripton: "oncoming police car"
    },
    { value: "&#x1F695;", alt: "&#x1F695;", descripton: "taxi" },
    { value: "&#x1F696;", alt: "&#x1F696;", descripton: "oncoming taxi" },
    { value: "&#x1F697;", alt: "&#x1F697;", descripton: "automobile" },
    {
      value: "&#x1F698;",
      alt: "&#x1F698;",
      descripton: "oncoming automobile"
    },
    {
      value: "&#x1F699;",
      alt: "&#x1F699;",
      descripton: "sport utility vehicle"
    },
    { value: "&#x1F69A;", alt: "&#x1F69A;", descripton: "delivery truck" },
    {
      value: "&#x1F69B;",
      alt: "&#x1F69B;",
      descripton: "articulated lorry"
    },
    { value: "&#x1F69C;", alt: "&#x1F69C;", descripton: "tractor" },
    { value: "&#x1F3CE;", alt: "&#x1F3CE;", descripton: "racing car" },
    { value: "&#x1F3CD;", alt: "&#x1F3CD;", descripton: "motorcycle" },
    { value: "&#x1F6F5;", alt: "&#x1F6F5;", descripton: "motor scooter" },
    {
      value: "&#x1F9BD;",
      alt: "&#x1F9BD;",
      descripton: "manual wheelchair"
    },
    {
      value: "&#x1F9BC;",
      alt: "&#x1F9BC;",
      descripton: "motorized wheelchair"
    },
    { value: "&#x1F6FA;", alt: "&#x1F6FA;", descripton: "auto rickshaw" },
    { value: "&#x1F6B2;", alt: "&#x1F6B2;", descripton: "bicycle" },
    { value: "&#x1F6F4;", alt: "&#x1F6F4;", descripton: "kick scooter" },
    { value: "&#x1F6F9;", alt: "&#x1F6F9;", descripton: "skateboard" },
    { value: "&#x1F68F;", alt: "&#x1F68F;", descripton: "bus stop" },
    { value: "&#x1F6E3;", alt: "&#x1F6E3;", descripton: "motorway" },
    { value: "&#x1F6E4;", alt: "&#x1F6E4;", descripton: "railway track" },
    { value: "&#x1F6E2;", alt: "&#x1F6E2;", descripton: "oil drum" },
    { value: "&#x26FD;", alt: "&#x26FD;", descripton: "fuel pump" },
    {
      value: "&#x1F6A8;",
      alt: "&#x1F6A8;",
      descripton: "police car light"
    },
    {
      value: "&#x1F6A5;",
      alt: "&#x1F6A5;",
      descripton: "horizontal traffic light"
    },
    {
      value: "&#x1F6A6;",
      alt: "&#x1F6A6;",
      descripton: "vertical traffic light"
    },
    { value: "&#x1F6D1;", alt: "&#x1F6D1;", descripton: "stop sign" },
    { value: "&#x1F6A7;", alt: "&#x1F6A7;", descripton: "construction" },
    { value: "&#x2693;", alt: "&#x2693;", descripton: "anchor" },
    { value: "&#x26F5;", alt: "&#x26F5;", descripton: "sailboat" },
    { value: "&#x1F6F6;", alt: "&#x1F6F6;", descripton: "canoe" },
    { value: "&#x1F6A4;", alt: "&#x1F6A4;", descripton: "speedboat" },
    { value: "&#x1F6F3;", alt: "&#x1F6F3;", descripton: "passenger ship" },
    { value: "&#x26F4;", alt: "&#x26F4;", descripton: "ferry" },
    { value: "&#x1F6E5;", alt: "&#x1F6E5;", descripton: "motor boat" },
    { value: "&#x1F6A2;", alt: "&#x1F6A2;", descripton: "ship" },
    { value: "&#x2708;", alt: "&#x2708;", descripton: "airplane" },
    { value: "&#x1F6E9;", alt: "&#x1F6E9;", descripton: "small airplane" },
    {
      value: "&#x1F6EB;",
      alt: "&#x1F6EB;",
      descripton: "airplane departure"
    },
    {
      value: "&#x1F6EC;",
      alt: "&#x1F6EC;",
      descripton: "airplane arrival"
    },
    { value: "&#x1FA82;", alt: "&#x1FA82;", descripton: "parachute" },
    { value: "&#x1F4BA;", alt: "&#x1F4BA;", descripton: "seat" },
    { value: "&#x1F681;", alt: "&#x1F681;", descripton: "helicopter" },
    {
      value: "&#x1F69F;",
      alt: "&#x1F69F;",
      descripton: "suspension railway"
    },
    {
      value: "&#x1F6A0;",
      alt: "&#x1F6A0;",
      descripton: "mountain cableway"
    },
    { value: "&#x1F6A1;", alt: "&#x1F6A1;", descripton: "aerial tramway" },
    { value: "&#x1F6F0;", alt: "&#x1F6F0;", descripton: "satellite" },
    { value: "&#x1F680;", alt: "&#x1F680;", descripton: "rocket" },
    { value: "&#x1F6F8;", alt: "&#x1F6F8;", descripton: "flying saucer" },
    { value: "&#x1F6CE;", alt: "&#x1F6CE;", descripton: "bellhop bell" },
    { value: "&#x1F9F3;", alt: "&#x1F9F3;", descripton: "luggage" },
    { value: "&#x231B;", alt: "&#x231B;", descripton: "hourglass done" },
    {
      value: "&#x23F3;",
      alt: "&#x23F3;",
      descripton: "hourglass not done"
    },
    { value: "&#x231A;", alt: "&#x231A;", descripton: "watch" },
    { value: "&#x23F0;", alt: "&#x23F0;", descripton: "alarm clock" },
    { value: "&#x23F1;", alt: "&#x23F1;", descripton: "stopwatch" },
    { value: "&#x23F2;", alt: "&#x23F2;", descripton: "timer clock" },
    {
      value: "&#x1F570;",
      alt: "&#x1F570;",
      descripton: "mantelpiece clock"
    },
    { value: "&#x1F55B;", alt: "&#x1F55B;", descripton: "twelve o’clock" },
    { value: "&#x1F567;", alt: "&#x1F567;", descripton: "twelve-thirty" },
    { value: "&#x1F550;", alt: "&#x1F550;", descripton: "one o’clock" },
    { value: "&#x1F55C;", alt: "&#x1F55C;", descripton: "one-thirty" },
    { value: "&#x1F551;", alt: "&#x1F551;", descripton: "two o’clock" },
    { value: "&#x1F55D;", alt: "&#x1F55D;", descripton: "two-thirty" },
    { value: "&#x1F552;", alt: "&#x1F552;", descripton: "three o’clock" },
    { value: "&#x1F55E;", alt: "&#x1F55E;", descripton: "three-thirty" },
    { value: "&#x1F553;", alt: "&#x1F553;", descripton: "four o’clock" },
    { value: "&#x1F55F;", alt: "&#x1F55F;", descripton: "four-thirty" },
    { value: "&#x1F554;", alt: "&#x1F554;", descripton: "five o’clock" },
    { value: "&#x1F560;", alt: "&#x1F560;", descripton: "five-thirty" },
    { value: "&#x1F555;", alt: "&#x1F555;", descripton: "six o’clock" },
    { value: "&#x1F561;", alt: "&#x1F561;", descripton: "six-thirty" },
    { value: "&#x1F556;", alt: "&#x1F556;", descripton: "seven o’clock" },
    { value: "&#x1F562;", alt: "&#x1F562;", descripton: "seven-thirty" },
    { value: "&#x1F557;", alt: "&#x1F557;", descripton: "eight o’clock" },
    { value: "&#x1F563;", alt: "&#x1F563;", descripton: "eight-thirty" },
    { value: "&#x1F558;", alt: "&#x1F558;", descripton: "nine o’clock" },
    { value: "&#x1F564;", alt: "&#x1F564;", descripton: "nine-thirty" },
    { value: "&#x1F559;", alt: "&#x1F559;", descripton: "ten o’clock" },
    { value: "&#x1F565;", alt: "&#x1F565;", descripton: "ten-thirty" },
    { value: "&#x1F55A;", alt: "&#x1F55A;", descripton: "eleven o’clock" },
    { value: "&#x1F566;", alt: "&#x1F566;", descripton: "eleven-thirty" },
    { value: "&#x1F311;", alt: "&#x1F311;", descripton: "new moon" },
    {
      value: "&#x1F312;",
      alt: "&#x1F312;",
      descripton: "waxing crescent moon"
    },
    {
      value: "&#x1F313;",
      alt: "&#x1F313;",
      descripton: "first quarter moon"
    },
    {
      value: "&#x1F314;",
      alt: "&#x1F314;",
      descripton: "waxing gibbous moon"
    },
    { value: "&#x1F315;", alt: "&#x1F315;", descripton: "full moon" },
    {
      value: "&#x1F316;",
      alt: "&#x1F316;",
      descripton: "waning gibbous moon"
    },
    {
      value: "&#x1F317;",
      alt: "&#x1F317;",
      descripton: "last quarter moon"
    },
    {
      value: "&#x1F318;",
      alt: "&#x1F318;",
      descripton: "waning crescent moon"
    },
    { value: "&#x1F319;", alt: "&#x1F319;", descripton: "crescent moon" },
    { value: "&#x1F31A;", alt: "&#x1F31A;", descripton: "new moon face" },
    {
      value: "&#x1F31B;",
      alt: "&#x1F31B;",
      descripton: "first quarter moon face"
    },
    {
      value: "&#x1F31C;",
      alt: "&#x1F31C;",
      descripton: "last quarter moon face"
    },
    { value: "&#x1F321;", alt: "&#x1F321;", descripton: "thermometer" },
    { value: "&#x2600;", alt: "&#x2600;", descripton: "sun" },
    { value: "&#x1F31D;", alt: "&#x1F31D;", descripton: "full moon face" },
    { value: "&#x1F31E;", alt: "&#x1F31E;", descripton: "sun with face" },
    { value: "&#x1FA90;", alt: "&#x1FA90;", descripton: "ringed planet" },
    { value: "&#x2B50;", alt: "&#x2B50;", descripton: "star" },
    { value: "&#x1F31F;", alt: "&#x1F31F;", descripton: "glowing star" },
    { value: "&#x1F320;", alt: "&#x1F320;", descripton: "shooting star" },
    { value: "&#x1F30C;", alt: "&#x1F30C;", descripton: "milky way" },
    { value: "&#x2601;", alt: "&#x2601;", descripton: "cloud" },
    { value: "&#x26C5;", alt: "&#x26C5;", descripton: "sun behind cloud" },
    {
      value: "&#x26C8;",
      alt: "&#x26C8;",
      descripton: "cloud with lightning and rain"
    },
    {
      value: "&#x1F324;",
      alt: "&#x1F324;",
      descripton: "sun behind small cloud"
    },
    {
      value: "&#x1F325;",
      alt: "&#x1F325;",
      descripton: "sun behind large cloud"
    },
    {
      value: "&#x1F326;",
      alt: "&#x1F326;",
      descripton: "sun behind rain cloud"
    },
    { value: "&#x1F327;", alt: "&#x1F327;", descripton: "cloud with rain" },
    { value: "&#x1F328;", alt: "&#x1F328;", descripton: "cloud with snow" },
    {
      value: "&#x1F329;",
      alt: "&#x1F329;",
      descripton: "cloud with lightning"
    },
    { value: "&#x1F32A;", alt: "&#x1F32A;", descripton: "tornado" },
    { value: "&#x1F32B;", alt: "&#x1F32B;", descripton: "fog" },
    { value: "&#x1F32C;", alt: "&#x1F32C;", descripton: "wind face" },
    { value: "&#x1F300;", alt: "&#x1F300;", descripton: "cyclone" },
    { value: "&#x1F308;", alt: "&#x1F308;", descripton: "rainbow" },
    { value: "&#x1F302;", alt: "&#x1F302;", descripton: "closed umbrella" },
    { value: "&#x2602;", alt: "&#x2602;", descripton: "umbrella" },
    {
      value: "&#x2614;",
      alt: "&#x2614;",
      descripton: "umbrella with rain drops"
    },
    {
      value: "&#x26F1;",
      alt: "&#x26F1;",
      descripton: "umbrella on ground"
    },
    { value: "&#x26A1;", alt: "&#x26A1;", descripton: "high voltage" },
    { value: "&#x2744;", alt: "&#x2744;", descripton: "snowflake" },
    { value: "&#x2603;", alt: "&#x2603;", descripton: "snowman" },
    {
      value: "&#x26C4;",
      alt: "&#x26C4;",
      descripton: "snowman without snow"
    },
    { value: "&#x2604;", alt: "&#x2604;", descripton: "comet" },
    { value: "&#x1F525;", alt: "&#x1F525;", descripton: "fire" },
    { value: "&#x1F4A7;", alt: "&#x1F4A7;", descripton: "droplet" },
    { value: "&#x1F30A;", alt: "&#x1F30A;", descripton: "water wave" }
  ],
  activities: [
    { value: "&#x1F383;", alt: "&#x1F383;", descripton: "jack-o-lantern" },
    { value: "&#x1F384;", alt: "&#x1F384;", descripton: "Christmas tree" },
    { value: "&#x1F386;", alt: "&#x1F386;", descripton: "fireworks" },
    { value: "&#x1F387;", alt: "&#x1F387;", descripton: "sparkler" },
    { value: "&#x1F9E8;", alt: "&#x1F9E8;", descripton: "firecracker" },
    { value: "&#x2728;", alt: "&#x2728;", descripton: "sparkles" },
    { value: "&#x1F388;", alt: "&#x1F388;", descripton: "balloon" },
    { value: "&#x1F389;", alt: "&#x1F389;", descripton: "party popper" },
    { value: "&#x1F38A;", alt: "&#x1F38A;", descripton: "confetti ball" },
    { value: "&#x1F38B;", alt: "&#x1F38B;", descripton: "tanabata tree" },
    { value: "&#x1F38D;", alt: "&#x1F38D;", descripton: "pine decoration" },
    { value: "&#x1F38E;", alt: "&#x1F38E;", descripton: "Japanese dolls" },
    { value: "&#x1F38F;", alt: "&#x1F38F;", descripton: "carp streamer" },
    { value: "&#x1F390;", alt: "&#x1F390;", descripton: "wind chime" },
    {
      value: "&#x1F391;",
      alt: "&#x1F391;",
      descripton: "moon viewing ceremony"
    },
    { value: "&#x1F9E7;", alt: "&#x1F9E7;", descripton: "red envelope" },
    { value: "&#x1F380;", alt: "&#x1F380;", descripton: "ribbon" },
    { value: "&#x1F381;", alt: "&#x1F381;", descripton: "wrapped gift" },
    { value: "&#x1F397;", alt: "&#x1F397;", descripton: "reminder ribbon" },
    {
      value: "&#x1F39F;",
      alt: "&#x1F39F;",
      descripton: "admission tickets"
    },
    { value: "&#x1F3AB;", alt: "&#x1F3AB;", descripton: "ticket" },
    { value: "&#x1F396;", alt: "&#x1F396;", descripton: "military medal" },
    { value: "&#x1F3C6;", alt: "&#x1F3C6;", descripton: "trophy" },
    { value: "&#x1F3C5;", alt: "&#x1F3C5;", descripton: "sports medal" },
    { value: "&#x1F947;", alt: "&#x1F947;", descripton: "1st place medal" },
    { value: "&#x1F948;", alt: "&#x1F948;", descripton: "2nd place medal" },
    { value: "&#x1F949;", alt: "&#x1F949;", descripton: "3rd place medal" },
    { value: "&#x26BD;", alt: "&#x26BD;", descripton: "soccer ball" },
    { value: "&#x26BE;", alt: "&#x26BE;", descripton: "baseball" },
    { value: "&#x1F94E;", alt: "&#x1F94E;", descripton: "softball" },
    { value: "&#x1F3C0;", alt: "&#x1F3C0;", descripton: "basketball" },
    { value: "&#x1F3D0;", alt: "&#x1F3D0;", descripton: "volleyball" },
    {
      value: "&#x1F3C8;",
      alt: "&#x1F3C8;",
      descripton: "american football"
    },
    { value: "&#x1F3C9;", alt: "&#x1F3C9;", descripton: "rugby football" },
    { value: "&#x1F3BE;", alt: "&#x1F3BE;", descripton: "tennis" },
    { value: "&#x1F94F;", alt: "&#x1F94F;", descripton: "flying disc" },
    { value: "&#x1F3B3;", alt: "&#x1F3B3;", descripton: "bowling" },
    { value: "&#x1F3CF;", alt: "&#x1F3CF;", descripton: "cricket game" },
    { value: "&#x1F3D1;", alt: "&#x1F3D1;", descripton: "field hockey" },
    { value: "&#x1F3D2;", alt: "&#x1F3D2;", descripton: "ice hockey" },
    { value: "&#x1F94D;", alt: "&#x1F94D;", descripton: "lacrosse" },
    { value: "&#x1F3D3;", alt: "&#x1F3D3;", descripton: "ping pong" },
    { value: "&#x1F3F8;", alt: "&#x1F3F8;", descripton: "badminton" },
    { value: "&#x1F94A;", alt: "&#x1F94A;", descripton: "boxing glove" },
    {
      value: "&#x1F94B;",
      alt: "&#x1F94B;",
      descripton: "martial arts uniform"
    },
    { value: "&#x1F945;", alt: "&#x1F945;", descripton: "goal net" },
    { value: "&#x26F3;", alt: "&#x26F3;", descripton: "flag in hole" },
    { value: "&#x26F8;", alt: "&#x26F8;", descripton: "ice skate" },
    { value: "&#x1F3A3;", alt: "&#x1F3A3;", descripton: "fishing pole" },
    { value: "&#x1F93F;", alt: "&#x1F93F;", descripton: "diving mask" },
    { value: "&#x1F3BD;", alt: "&#x1F3BD;", descripton: "running shirt" },
    { value: "&#x1F3BF;", alt: "&#x1F3BF;", descripton: "skis" },
    { value: "&#x1F6F7;", alt: "&#x1F6F7;", descripton: "sled" },
    { value: "&#x1F94C;", alt: "&#x1F94C;", descripton: "curling stone" },
    { value: "&#x1F3AF;", alt: "&#x1F3AF;", descripton: "direct hit" },
    { value: "&#x1FA80;", alt: "&#x1FA80;", descripton: "yo-yo" },
    { value: "&#x1FA81;", alt: "&#x1FA81;", descripton: "kite" },
    { value: "&#x1F3B1;", alt: "&#x1F3B1;", descripton: "pool 8 ball" },
    { value: "&#x1F52E;", alt: "&#x1F52E;", descripton: "crystal ball" },
    { value: "&#x1F9FF;", alt: "&#x1F9FF;", descripton: "nazar amulet" },
    { value: "&#x1F3AE;", alt: "&#x1F3AE;", descripton: "video game" },
    { value: "&#x1F579;", alt: "&#x1F579;", descripton: "joystick" },
    { value: "&#x1F3B0;", alt: "&#x1F3B0;", descripton: "slot machine" },
    { value: "&#x1F3B2;", alt: "&#x1F3B2;", descripton: "game die" },
    { value: "&#x1F9E9;", alt: "&#x1F9E9;", descripton: "puzzle piece" },
    { value: "&#x1F9F8;", alt: "&#x1F9F8;", descripton: "teddy bear" },
    { value: "&#x2660;", alt: "&#x2660;", descripton: "spade suit" },
    { value: "&#x2665;", alt: "&#x2665;", descripton: "heart suit" },
    { value: "&#x2666;", alt: "&#x2666;", descripton: "diamond suit" },
    { value: "&#x2663;", alt: "&#x2663;", descripton: "club suit" },
    { value: "&#x265F;", alt: "&#x265F;", descripton: "chess pawn" },
    { value: "&#x1F0CF;", alt: "&#x1F0CF;", descripton: "joker" },
    {
      value: "&#x1F004;",
      alt: "&#x1F004;",
      descripton: "mahjong red dragon"
    },
    {
      value: "&#x1F3B4;",
      alt: "&#x1F3B4;",
      descripton: "flower playing cards"
    },
    { value: "&#x1F3AD;", alt: "&#x1F3AD;", descripton: "performing arts" },
    { value: "&#x1F5BC;", alt: "&#x1F5BC;", descripton: "framed picture" },
    { value: "&#x1F3A8;", alt: "&#x1F3A8;", descripton: "artist palette" },
    { value: "&#x1F9F5;", alt: "&#x1F9F5;", descripton: "thread" },
    { value: "&#x1F9F6;", alt: "&#x1F9F6;", descripton: "yarn" }
  ],
  objects: [
    { value: "&#x1F453;", alt: "&#x1F453;", descripton: "glasses" },
    { value: "&#x1F576;", alt: "&#x1F576;", descripton: "sunglasses" },
    { value: "&#x1F97D;", alt: "&#x1F97D;", descripton: "goggles" },
    { value: "&#x1F97C;", alt: "&#x1F97C;", descripton: "lab coat" },
    { value: "&#x1F9BA;", alt: "&#x1F9BA;", descripton: "safety vest" },
    { value: "&#x1F454;", alt: "&#x1F454;", descripton: "necktie" },
    { value: "&#x1F455;", alt: "&#x1F455;", descripton: "t-shirt" },
    { value: "&#x1F456;", alt: "&#x1F456;", descripton: "jeans" },
    { value: "&#x1F9E3;", alt: "&#x1F9E3;", descripton: "scarf" },
    { value: "&#x1F9E4;", alt: "&#x1F9E4;", descripton: "gloves" },
    { value: "&#x1F9E5;", alt: "&#x1F9E5;", descripton: "coat" },
    { value: "&#x1F9E6;", alt: "&#x1F9E6;", descripton: "socks" },
    { value: "&#x1F457;", alt: "&#x1F457;", descripton: "dress" },
    { value: "&#x1F458;", alt: "&#x1F458;", descripton: "kimono" },
    { value: "&#x1F97B;", alt: "&#x1F97B;", descripton: "sari" },
    {
      value: "&#x1FA71;",
      alt: "&#x1FA71;",
      descripton: "one-piece swimsuit"
    },
    { value: "&#x1FA72;", alt: "&#x1FA72;", descripton: "briefs" },
    { value: "&#x1FA73;", alt: "&#x1FA73;", descripton: "shorts" },
    { value: "&#x1F459;", alt: "&#x1F459;", descripton: "bikini" },
    { value: "&#x1F45A;", alt: "&#x1F45A;", descripton: "woman’s clothes" },
    { value: "&#x1F45B;", alt: "&#x1F45B;", descripton: "purse" },
    { value: "&#x1F45C;", alt: "&#x1F45C;", descripton: "handbag" },
    { value: "&#x1F45D;", alt: "&#x1F45D;", descripton: "clutch bag" },
    { value: "&#x1F6CD;", alt: "&#x1F6CD;", descripton: "shopping bags" },
    { value: "&#x1F392;", alt: "&#x1F392;", descripton: "backpack" },
    { value: "&#x1F45E;", alt: "&#x1F45E;", descripton: "man’s shoe" },
    { value: "&#x1F45F;", alt: "&#x1F45F;", descripton: "running shoe" },
    { value: "&#x1F97E;", alt: "&#x1F97E;", descripton: "hiking boot" },
    { value: "&#x1F97F;", alt: "&#x1F97F;", descripton: "flat shoe" },
    {
      value: "&#x1F460;",
      alt: "&#x1F460;",
      descripton: "high-heeled shoe"
    },
    { value: "&#x1F461;", alt: "&#x1F461;", descripton: "woman’s sandal" },
    { value: "&#x1FA70;", alt: "&#x1FA70;", descripton: "ballet shoes" },
    { value: "&#x1F462;", alt: "&#x1F462;", descripton: "woman’s boot" },
    { value: "&#x1F451;", alt: "&#x1F451;", descripton: "crown" },
    { value: "&#x1F452;", alt: "&#x1F452;", descripton: "woman’s hat" },
    { value: "&#x1F3A9;", alt: "&#x1F3A9;", descripton: "top hat" },
    { value: "&#x1F393;", alt: "&#x1F393;", descripton: "graduation cap" },
    { value: "&#x1F9E2;", alt: "&#x1F9E2;", descripton: "billed cap" },
    {
      value: "&#x26D1;",
      alt: "&#x26D1;",
      descripton: "rescue worker’s helmet"
    },
    { value: "&#x1F4FF;", alt: "&#x1F4FF;", descripton: "prayer beads" },
    { value: "&#x1F484;", alt: "&#x1F484;", descripton: "lipstick" },
    { value: "&#x1F48D;", alt: "&#x1F48D;", descripton: "ring" },
    { value: "&#x1F48E;", alt: "&#x1F48E;", descripton: "gem stone" },
    { value: "&#x1F507;", alt: "&#x1F507;", descripton: "muted speaker" },
    {
      value: "&#x1F508;",
      alt: "&#x1F508;",
      descripton: "speaker low volume"
    },
    {
      value: "&#x1F509;",
      alt: "&#x1F509;",
      descripton: "speaker medium volume"
    },
    {
      value: "&#x1F50A;",
      alt: "&#x1F50A;",
      descripton: "speaker high volume"
    },
    { value: "&#x1F4E2;", alt: "&#x1F4E2;", descripton: "loudspeaker" },
    { value: "&#x1F4E3;", alt: "&#x1F4E3;", descripton: "megaphone" },
    { value: "&#x1F4EF;", alt: "&#x1F4EF;", descripton: "postal horn" },
    { value: "&#x1F514;", alt: "&#x1F514;", descripton: "bell" },
    { value: "&#x1F515;", alt: "&#x1F515;", descripton: "bell with slash" },
    { value: "&#x1F3BC;", alt: "&#x1F3BC;", descripton: "musical score" },
    { value: "&#x1F3B5;", alt: "&#x1F3B5;", descripton: "musical note" },
    { value: "&#x1F3B6;", alt: "&#x1F3B6;", descripton: "musical notes" },
    {
      value: "&#x1F399;",
      alt: "&#x1F399;",
      descripton: "studio microphone"
    },
    { value: "&#x1F39A;", alt: "&#x1F39A;", descripton: "level slider" },
    { value: "&#x1F39B;", alt: "&#x1F39B;", descripton: "control knobs" },
    { value: "&#x1F3A4;", alt: "&#x1F3A4;", descripton: "microphone" },
    { value: "&#x1F3A7;", alt: "&#x1F3A7;", descripton: "headphone" },
    { value: "&#x1F4FB;", alt: "&#x1F4FB;", descripton: "radio" },
    { value: "&#x1F3B7;", alt: "&#x1F3B7;", descripton: "saxophone" },
    { value: "&#x1F3B8;", alt: "&#x1F3B8;", descripton: "guitar" },
    {
      value: "&#x1F3B9;",
      alt: "&#x1F3B9;",
      descripton: "musical keyboard"
    },
    { value: "&#x1F3BA;", alt: "&#x1F3BA;", descripton: "trumpet" },
    { value: "&#x1F3BB;", alt: "&#x1F3BB;", descripton: "violin" },
    { value: "&#x1FA95;", alt: "&#x1FA95;", descripton: "banjo" },
    { value: "&#x1F941;", alt: "&#x1F941;", descripton: "drum" },
    { value: "&#x1F4F1;", alt: "&#x1F4F1;", descripton: "mobile phone" },
    {
      value: "&#x1F4F2;",
      alt: "&#x1F4F2;",
      descripton: "mobile phone with arrow"
    },
    { value: "&#x260E;", alt: "&#x260E;", descripton: "telephone" },
    {
      value: "&#x1F4DE;",
      alt: "&#x1F4DE;",
      descripton: "telephone receiver"
    },
    { value: "&#x1F4DF;", alt: "&#x1F4DF;", descripton: "pager" },
    { value: "&#x1F4E0;", alt: "&#x1F4E0;", descripton: "fax machine" },
    { value: "&#x1F50B;", alt: "&#x1F50B;", descripton: "battery" },
    { value: "&#x1F50C;", alt: "&#x1F50C;", descripton: "electric plug" },
    { value: "&#x1F4BB;", alt: "&#x1F4BB;", descripton: "laptop computer" },
    {
      value: "&#x1F5A5;",
      alt: "&#x1F5A5;",
      descripton: "desktop computer"
    },
    { value: "&#x1F5A8;", alt: "&#x1F5A8;", descripton: "printer" },
    { value: "&#x2328;", alt: "&#x2328;", descripton: "keyboard" },
    { value: "&#x1F5B1;", alt: "&#x1F5B1;", descripton: "computer mouse" },
    { value: "&#x1F5B2;", alt: "&#x1F5B2;", descripton: "trackball" },
    { value: "&#x1F4BD;", alt: "&#x1F4BD;", descripton: "computer disk" },
    { value: "&#x1F4BE;", alt: "&#x1F4BE;", descripton: "floppy disk" },
    { value: "&#x1F4BF;", alt: "&#x1F4BF;", descripton: "optical disk" },
    { value: "&#x1F4C0;", alt: "&#x1F4C0;", descripton: "dvd" },
    { value: "&#x1F9EE;", alt: "&#x1F9EE;", descripton: "abacus" },
    { value: "&#x1F3A5;", alt: "&#x1F3A5;", descripton: "movie camera" },
    { value: "&#x1F39E;", alt: "&#x1F39E;", descripton: "film frames" },
    { value: "&#x1F4FD;", alt: "&#x1F4FD;", descripton: "film projector" },
    { value: "&#x1F3AC;", alt: "&#x1F3AC;", descripton: "clapper board" },
    { value: "&#x1F4FA;", alt: "&#x1F4FA;", descripton: "television" },
    { value: "&#x1F4F7;", alt: "&#x1F4F7;", descripton: "camera" },
    {
      value: "&#x1F4F8;",
      alt: "&#x1F4F8;",
      descripton: "camera with flash"
    },
    { value: "&#x1F4F9;", alt: "&#x1F4F9;", descripton: "video camera" },
    { value: "&#x1F4FC;", alt: "&#x1F4FC;", descripton: "videocassette" },
    {
      value: "&#x1F50D;",
      alt: "&#x1F50D;",
      descripton: "magnifying glass tilted left"
    },
    {
      value: "&#x1F50E;",
      alt: "&#x1F50E;",
      descripton: "magnifying glass tilted right"
    },
    { value: "&#x1F56F;", alt: "&#x1F56F;", descripton: "candle" },
    { value: "&#x1F4A1;", alt: "&#x1F4A1;", descripton: "light bulb" },
    { value: "&#x1F526;", alt: "&#x1F526;", descripton: "flashlight" },
    {
      value: "&#x1F3EE;",
      alt: "&#x1F3EE;",
      descripton: "red paper lantern"
    },
    { value: "&#x1FA94;", alt: "&#x1FA94;", descripton: "diya lamp" },
    {
      value: "&#x1F4D4;",
      alt: "&#x1F4D4;",
      descripton: "notebook with decorative cover"
    },
    { value: "&#x1F4D5;", alt: "&#x1F4D5;", descripton: "closed book" },
    { value: "&#x1F4D6;", alt: "&#x1F4D6;", descripton: "open book" },
    { value: "&#x1F4D7;", alt: "&#x1F4D7;", descripton: "green book" },
    { value: "&#x1F4D8;", alt: "&#x1F4D8;", descripton: "blue book" },
    { value: "&#x1F4D9;", alt: "&#x1F4D9;", descripton: "orange book" },
    { value: "&#x1F4DA;", alt: "&#x1F4DA;", descripton: "books" },
    { value: "&#x1F4D3;", alt: "&#x1F4D3;", descripton: "notebook" },
    { value: "&#x1F4D2;", alt: "&#x1F4D2;", descripton: "ledger" },
    { value: "&#x1F4C3;", alt: "&#x1F4C3;", descripton: "page with curl" },
    { value: "&#x1F4DC;", alt: "&#x1F4DC;", descripton: "scroll" },
    { value: "&#x1F4C4;", alt: "&#x1F4C4;", descripton: "page facing up" },
    { value: "&#x1F4F0;", alt: "&#x1F4F0;", descripton: "newspaper" },
    {
      value: "&#x1F5DE;",
      alt: "&#x1F5DE;",
      descripton: "rolled-up newspaper"
    },
    { value: "&#x1F4D1;", alt: "&#x1F4D1;", descripton: "bookmark tabs" },
    { value: "&#x1F516;", alt: "&#x1F516;", descripton: "bookmark" },
    { value: "&#x1F3F7;", alt: "&#x1F3F7;", descripton: "label" },
    { value: "&#x1F4B0;", alt: "&#x1F4B0;", descripton: "money bag" },
    { value: "&#x1F4B4;", alt: "&#x1F4B4;", descripton: "yen banknote" },
    { value: "&#x1F4B5;", alt: "&#x1F4B5;", descripton: "dollar banknote" },
    { value: "&#x1F4B6;", alt: "&#x1F4B6;", descripton: "euro banknote" },
    { value: "&#x1F4B7;", alt: "&#x1F4B7;", descripton: "pound banknote" },
    {
      value: "&#x1F4B8;",
      alt: "&#x1F4B8;",
      descripton: "money with wings"
    },
    { value: "&#x1F4B3;", alt: "&#x1F4B3;", descripton: "credit card" },
    { value: "&#x1F9FE;", alt: "&#x1F9FE;", descripton: "receipt" },
    {
      value: "&#x1F4B9;",
      alt: "&#x1F4B9;",
      descripton: "chart increasing with yen"
    },
    {
      value: "&#x1F4B1;",
      alt: "&#x1F4B1;",
      descripton: "currency exchange"
    },
    {
      value: "&#x1F4B2;",
      alt: "&#x1F4B2;",
      descripton: "heavy dollar sign"
    },
    { value: "&#x2709;", alt: "&#x2709;", descripton: "envelope" },
    { value: "&#x1F4E7;", alt: "&#x1F4E7;", descripton: "e-mail" },
    {
      value: "&#x1F4E8;",
      alt: "&#x1F4E8;",
      descripton: "incoming envelope"
    },
    {
      value: "&#x1F4E9;",
      alt: "&#x1F4E9;",
      descripton: "envelope with arrow"
    },
    { value: "&#x1F4E4;", alt: "&#x1F4E4;", descripton: "outbox tray" },
    { value: "&#x1F4E5;", alt: "&#x1F4E5;", descripton: "inbox tray" },
    { value: "&#x1F4E6;", alt: "&#x1F4E6;", descripton: "package" },
    {
      value: "&#x1F4EB;",
      alt: "&#x1F4EB;",
      descripton: "closed mailbox with raised flag"
    },
    {
      value: "&#x1F4EA;",
      alt: "&#x1F4EA;",
      descripton: "closed mailbox with lowered flag"
    },
    {
      value: "&#x1F4EC;",
      alt: "&#x1F4EC;",
      descripton: "open mailbox with raised flag"
    },
    {
      value: "&#x1F4ED;",
      alt: "&#x1F4ED;",
      descripton: "open mailbox with lowered flag"
    },
    { value: "&#x1F4EE;", alt: "&#x1F4EE;", descripton: "postbox" },
    {
      value: "&#x1F5F3;",
      alt: "&#x1F5F3;",
      descripton: "ballot box with ballot"
    },
    { value: "&#x270F;", alt: "&#x270F;", descripton: "pencil" },
    { value: "&#x2712;", alt: "&#x2712;", descripton: "black nib" },
    { value: "&#x1F58B;", alt: "&#x1F58B;", descripton: "fountain pen" },
    { value: "&#x1F58A;", alt: "&#x1F58A;", descripton: "pen" },
    { value: "&#x1F58C;", alt: "&#x1F58C;", descripton: "paintbrush" },
    { value: "&#x1F58D;", alt: "&#x1F58D;", descripton: "crayon" },
    { value: "&#x1F4DD;", alt: "&#x1F4DD;", descripton: "memo" },
    { value: "&#x1F4BC;", alt: "&#x1F4BC;", descripton: "briefcase" },
    { value: "&#x1F4C1;", alt: "&#x1F4C1;", descripton: "file folder" },
    {
      value: "&#x1F4C2;",
      alt: "&#x1F4C2;",
      descripton: "open file folder"
    },
    {
      value: "&#x1F5C2;",
      alt: "&#x1F5C2;",
      descripton: "card index dividers"
    },
    { value: "&#x1F4C5;", alt: "&#x1F4C5;", descripton: "calendar" },
    {
      value: "&#x1F4C6;",
      alt: "&#x1F4C6;",
      descripton: "tear-off calendar"
    },
    { value: "&#x1F5D2;", alt: "&#x1F5D2;", descripton: "spiral notepad" },
    { value: "&#x1F5D3;", alt: "&#x1F5D3;", descripton: "spiral calendar" },
    { value: "&#x1F4C7;", alt: "&#x1F4C7;", descripton: "card index" },
    {
      value: "&#x1F4C8;",
      alt: "&#x1F4C8;",
      descripton: "chart increasing"
    },
    {
      value: "&#x1F4C9;",
      alt: "&#x1F4C9;",
      descripton: "chart decreasing"
    },
    { value: "&#x1F4CA;", alt: "&#x1F4CA;", descripton: "bar chart" },
    { value: "&#x1F4CB;", alt: "&#x1F4CB;", descripton: "clipboard" },
    { value: "&#x1F4CC;", alt: "&#x1F4CC;", descripton: "pushpin" },
    { value: "&#x1F4CD;", alt: "&#x1F4CD;", descripton: "round pushpin" },
    { value: "&#x1F4CE;", alt: "&#x1F4CE;", descripton: "paperclip" },
    {
      value: "&#x1F587;",
      alt: "&#x1F587;",
      descripton: "linked paperclips"
    },
    { value: "&#x1F4CF;", alt: "&#x1F4CF;", descripton: "straight ruler" },
    {
      value: "&#x1F4D0;",
      alt: "&#x1F4D0;",
      descripton: "triangular ruler"
    },
    { value: "&#x2702;", alt: "&#x2702;", descripton: "scissors" },
    { value: "&#x1F5C3;", alt: "&#x1F5C3;", descripton: "card file box" },
    { value: "&#x1F5C4;", alt: "&#x1F5C4;", descripton: "file cabinet" },
    { value: "&#x1F5D1;", alt: "&#x1F5D1;", descripton: "wastebasket" },
    { value: "&#x1F512;", alt: "&#x1F512;", descripton: "locked" },
    { value: "&#x1F513;", alt: "&#x1F513;", descripton: "unlocked" },
    { value: "&#x1F50F;", alt: "&#x1F50F;", descripton: "locked with pen" },
    { value: "&#x1F510;", alt: "&#x1F510;", descripton: "locked with key" },
    { value: "&#x1F511;", alt: "&#x1F511;", descripton: "key" },
    { value: "&#x1F5DD;", alt: "&#x1F5DD;", descripton: "old key" },
    { value: "&#x1F528;", alt: "&#x1F528;", descripton: "hammer" },
    { value: "&#x1FA93;", alt: "&#x1FA93;", descripton: "axe" },
    { value: "&#x26CF;", alt: "&#x26CF;", descripton: "pick" },
    { value: "&#x2692;", alt: "&#x2692;", descripton: "hammer and pick" },
    {
      value: "&#x1F6E0;",
      alt: "&#x1F6E0;",
      descripton: "hammer and wrench"
    },
    { value: "&#x1F5E1;", alt: "&#x1F5E1;", descripton: "dagger" },
    { value: "&#x2694;", alt: "&#x2694;", descripton: "crossed swords" },
    { value: "&#x1F52B;", alt: "&#x1F52B;", descripton: "pistol" },
    { value: "&#x1F3F9;", alt: "&#x1F3F9;", descripton: "bow and arrow" },
    { value: "&#x1F6E1;", alt: "&#x1F6E1;", descripton: "shield" },
    { value: "&#x1F527;", alt: "&#x1F527;", descripton: "wrench" },
    { value: "&#x1F529;", alt: "&#x1F529;", descripton: "nut and bolt" },
    { value: "&#x2699;", alt: "&#x2699;", descripton: "gear" },
    { value: "&#x1F5DC;", alt: "&#x1F5DC;", descripton: "clamp" },
    { value: "&#x2696;", alt: "&#x2696;", descripton: "balance scale" },
    { value: "&#x1F9AF;", alt: "&#x1F9AF;", descripton: "probing cane" },
    { value: "&#x1F517;", alt: "&#x1F517;", descripton: "link" },
    { value: "&#x26D3;", alt: "&#x26D3;", descripton: "chains" },
    { value: "&#x1F9F0;", alt: "&#x1F9F0;", descripton: "toolbox" },
    { value: "&#x1F9F2;", alt: "&#x1F9F2;", descripton: "magnet" },
    { value: "&#x2697;", alt: "&#x2697;", descripton: "alembic" },
    { value: "&#x1F9EA;", alt: "&#x1F9EA;", descripton: "test tube" },
    { value: "&#x1F9EB;", alt: "&#x1F9EB;", descripton: "petri dish" },
    { value: "&#x1F9EC;", alt: "&#x1F9EC;", descripton: "dna" },
    { value: "&#x1F52C;", alt: "&#x1F52C;", descripton: "microscope" },
    { value: "&#x1F52D;", alt: "&#x1F52D;", descripton: "telescope" },
    {
      value: "&#x1F4E1;",
      alt: "&#x1F4E1;",
      descripton: "satellite antenna"
    },
    { value: "&#x1F489;", alt: "&#x1F489;", descripton: "syringe" },
    { value: "&#x1FA78;", alt: "&#x1FA78;", descripton: "drop of blood" },
    { value: "&#x1F48A;", alt: "&#x1F48A;", descripton: "pill" },
    {
      value: "&#x1FA79;",
      alt: "&#x1FA79;",
      descripton: "adhesive bandage"
    },
    { value: "&#x1FA7A;", alt: "&#x1FA7A;", descripton: "stethoscope" },
    { value: "&#x1F6AA;", alt: "&#x1F6AA;", descripton: "door" },
    { value: "&#x1F6CF;", alt: "&#x1F6CF;", descripton: "bed" },
    { value: "&#x1F6CB;", alt: "&#x1F6CB;", descripton: "couch and lamp" },
    { value: "&#x1FA91;", alt: "&#x1FA91;", descripton: "chair" },
    { value: "&#x1F6BD;", alt: "&#x1F6BD;", descripton: "toilet" },
    { value: "&#x1F6BF;", alt: "&#x1F6BF;", descripton: "shower" },
    { value: "&#x1F6C1;", alt: "&#x1F6C1;", descripton: "bathtub" },
    { value: "&#x1FA92;", alt: "&#x1FA92;", descripton: "razor" },
    { value: "&#x1F9F4;", alt: "&#x1F9F4;", descripton: "lotion bottle" },
    { value: "&#x1F9F7;", alt: "&#x1F9F7;", descripton: "safety pin" },
    { value: "&#x1F9F9;", alt: "&#x1F9F9;", descripton: "broom" },
    { value: "&#x1F9FA;", alt: "&#x1F9FA;", descripton: "basket" },
    { value: "&#x1F9FB;", alt: "&#x1F9FB;", descripton: "roll of paper" },
    { value: "&#x1F9FC;", alt: "&#x1F9FC;", descripton: "soap" },
    { value: "&#x1F9FD;", alt: "&#x1F9FD;", descripton: "sponge" },
    {
      value: "&#x1F9EF;",
      alt: "&#x1F9EF;",
      descripton: "fire extinguisher"
    },
    { value: "&#x1F6D2;", alt: "&#x1F6D2;", descripton: "shopping cart" },
    { value: "&#x1F6AC;", alt: "&#x1F6AC;", descripton: "cigarette" },
    { value: "&#x26B0;", alt: "&#x26B0;", descripton: "coffin" },
    { value: "&#x26B1;", alt: "&#x26B1;", descripton: "funeral urn" },
    { value: "&#x1F5FF;", alt: "&#x1F5FF;", descripton: "moai" }
  ],
  symbols: [
    { value: "&#x1F3E7;", alt: "&#x1F3E7;", descripton: "ATM sign" },
    {
      value: "&#x1F6AE;",
      alt: "&#x1F6AE;",
      descripton: "litter in bin sign"
    },
    { value: "&#x1F6B0;", alt: "&#x1F6B0;", descripton: "potable water" },
    { value: "&#x267F;", alt: "&#x267F;", descripton: "wheelchair symbol" },
    { value: "&#x1F6B9;", alt: "&#x1F6B9;", descripton: "men’s room" },
    { value: "&#x1F6BA;", alt: "&#x1F6BA;", descripton: "women’s room" },
    { value: "&#x1F6BB;", alt: "&#x1F6BB;", descripton: "restroom" },
    { value: "&#x1F6BC;", alt: "&#x1F6BC;", descripton: "baby symbol" },
    { value: "&#x1F6BE;", alt: "&#x1F6BE;", descripton: "water closet" },
    {
      value: "&#x1F6C2;",
      alt: "&#x1F6C2;",
      descripton: "passport control"
    },
    { value: "&#x1F6C3;", alt: "&#x1F6C3;", descripton: "customs" },
    { value: "&#x1F6C4;", alt: "&#x1F6C4;", descripton: "baggage claim" },
    { value: "&#x1F6C5;", alt: "&#x1F6C5;", descripton: "left luggage" },
    { value: "&#x26A0;", alt: "&#x26A0;", descripton: "warning" },
    {
      value: "&#x1F6B8;",
      alt: "&#x1F6B8;",
      descripton: "children crossing"
    },
    { value: "&#x26D4;", alt: "&#x26D4;", descripton: "no entry" },
    { value: "&#x1F6AB;", alt: "&#x1F6AB;", descripton: "prohibited" },
    { value: "&#x1F6B3;", alt: "&#x1F6B3;", descripton: "no bicycles" },
    { value: "&#x1F6AD;", alt: "&#x1F6AD;", descripton: "no smoking" },
    { value: "&#x1F6AF;", alt: "&#x1F6AF;", descripton: "no littering" },
    {
      value: "&#x1F6B1;",
      alt: "&#x1F6B1;",
      descripton: "non-potable water"
    },
    { value: "&#x1F6B7;", alt: "&#x1F6B7;", descripton: "no pedestrians" },
    {
      value: "&#x1F4F5;",
      alt: "&#x1F4F5;",
      descripton: "no mobile phones"
    },
    {
      value: "&#x1F51E;",
      alt: "&#x1F51E;",
      descripton: "no one under eighteen"
    },
    { value: "&#x2622;", alt: "&#x2622;", descripton: "radioactive" },
    { value: "&#x2623;", alt: "&#x2623;", descripton: "biohazard" },
    { value: "&#x2B06;", alt: "&#x2B06;", descripton: "up arrow" },
    { value: "&#x2197;", alt: "&#x2197;", descripton: "up-right arrow" },
    { value: "&#x27A1;", alt: "&#x27A1;", descripton: "right arrow" },
    { value: "&#x2198;", alt: "&#x2198;", descripton: "down-right arrow" },
    { value: "&#x2B07;", alt: "&#x2B07;", descripton: "down arrow" },
    { value: "&#x2199;", alt: "&#x2199;", descripton: "down-left arrow" },
    { value: "&#x2B05;", alt: "&#x2B05;", descripton: "left arrow" },
    { value: "&#x2196;", alt: "&#x2196;", descripton: "up-left arrow" },
    { value: "&#x2195;", alt: "&#x2195;", descripton: "up-down arrow" },
    { value: "&#x2194;", alt: "&#x2194;", descripton: "left-right arrow" },
    {
      value: "&#x21A9;",
      alt: "&#x21A9;",
      descripton: "right arrow curving left"
    },
    {
      value: "&#x21AA;",
      alt: "&#x21AA;",
      descripton: "left arrow curving right"
    },
    {
      value: "&#x2934;",
      alt: "&#x2934;",
      descripton: "right arrow curving up"
    },
    {
      value: "&#x2935;",
      alt: "&#x2935;",
      descripton: "right arrow curving down"
    },
    {
      value: "&#x1F503;",
      alt: "&#x1F503;",
      descripton: "clockwise vertical arrows"
    },
    {
      value: "&#x1F504;",
      alt: "&#x1F504;",
      descripton: "counterclockwise arrows button"
    },
    { value: "&#x1F519;", alt: "&#x1F519;", descripton: "BACK arrow" },
    { value: "&#x1F51A;", alt: "&#x1F51A;", descripton: "END arrow" },
    { value: "&#x1F51B;", alt: "&#x1F51B;", descripton: "ON! arrow" },
    { value: "&#x1F51C;", alt: "&#x1F51C;", descripton: "SOON arrow" },
    { value: "&#x1F51D;", alt: "&#x1F51D;", descripton: "TOP arrow" },
    {
      value: "&#x1F6D0;",
      alt: "&#x1F6D0;",
      descripton: "place of worship"
    },
    { value: "&#x269B;", alt: "&#x269B;", descripton: "atom symbol" },
    { value: "&#x1F549;", alt: "&#x1F549;", descripton: "om" },
    { value: "&#x2721;", alt: "&#x2721;", descripton: "star of David" },
    { value: "&#x2638;", alt: "&#x2638;", descripton: "wheel of dharma" },
    { value: "&#x262F;", alt: "&#x262F;", descripton: "yin yang" },
    { value: "&#x271D;", alt: "&#x271D;", descripton: "latin cross" },
    { value: "&#x2626;", alt: "&#x2626;", descripton: "orthodox cross" },
    { value: "&#x262A;", alt: "&#x262A;", descripton: "star and crescent" },
    { value: "&#x262E;", alt: "&#x262E;", descripton: "peace symbol" },
    { value: "&#x1F54E;", alt: "&#x1F54E;", descripton: "menorah" },
    {
      value: "&#x1F52F;",
      alt: "&#x1F52F;",
      descripton: "dotted six-pointed star"
    },
    { value: "&#x2648;", alt: "&#x2648;", descripton: "Aries" },
    { value: "&#x2649;", alt: "&#x2649;", descripton: "Taurus" },
    { value: "&#x264A;", alt: "&#x264A;", descripton: "Gemini" },
    { value: "&#x264B;", alt: "&#x264B;", descripton: "Cancer" },
    { value: "&#x264C;", alt: "&#x264C;", descripton: "Leo" },
    { value: "&#x264D;", alt: "&#x264D;", descripton: "Virgo" },
    { value: "&#x264E;", alt: "&#x264E;", descripton: "Libra" },
    { value: "&#x264F;", alt: "&#x264F;", descripton: "Scorpio" },
    { value: "&#x2650;", alt: "&#x2650;", descripton: "Sagittarius" },
    { value: "&#x2651;", alt: "&#x2651;", descripton: "Capricorn" },
    { value: "&#x2652;", alt: "&#x2652;", descripton: "Aquarius" },
    { value: "&#x2653;", alt: "&#x2653;", descripton: "Pisces" },
    { value: "&#x26CE;", alt: "&#x26CE;", descripton: "Ophiuchus" },
    {
      value: "&#x1F500;",
      alt: "&#x1F500;",
      descripton: "shuffle tracks button"
    },
    { value: "&#x1F501;", alt: "&#x1F501;", descripton: "repeat button" },
    {
      value: "&#x1F502;",
      alt: "&#x1F502;",
      descripton: "repeat single button"
    },
    { value: "&#x25B6;", alt: "&#x25B6;", descripton: "play button" },
    {
      value: "&#x23E9;",
      alt: "&#x23E9;",
      descripton: "fast-forward button"
    },
    { value: "&#x23ED;", alt: "&#x23ED;", descripton: "next track button" },
    {
      value: "&#x23EF;",
      alt: "&#x23EF;",
      descripton: "play or pause button"
    },
    { value: "&#x25C0;", alt: "&#x25C0;", descripton: "reverse button" },
    {
      value: "&#x23EA;",
      alt: "&#x23EA;",
      descripton: "fast reverse button"
    },
    { value: "&#x23EE;", alt: "&#x23EE;", descripton: "last track button" },
    { value: "&#x1F53C;", alt: "&#x1F53C;", descripton: "upwards button" },
    { value: "&#x23EB;", alt: "&#x23EB;", descripton: "fast up button" },
    {
      value: "&#x1F53D;",
      alt: "&#x1F53D;",
      descripton: "downwards button"
    },
    { value: "&#x23EC;", alt: "&#x23EC;", descripton: "fast down button" },
    { value: "&#x23F8;", alt: "&#x23F8;", descripton: "pause button" },
    { value: "&#x23F9;", alt: "&#x23F9;", descripton: "stop button" },
    { value: "&#x23FA;", alt: "&#x23FA;", descripton: "record button" },
    { value: "&#x23CF;", alt: "&#x23CF;", descripton: "eject button" },
    { value: "&#x1F3A6;", alt: "&#x1F3A6;", descripton: "cinema" },
    { value: "&#x1F505;", alt: "&#x1F505;", descripton: "dim button" },
    { value: "&#x1F506;", alt: "&#x1F506;", descripton: "bright button" },
    { value: "&#x1F4F6;", alt: "&#x1F4F6;", descripton: "antenna bars" },
    { value: "&#x1F4F3;", alt: "&#x1F4F3;", descripton: "vibration mode" },
    {
      value: "&#x1F4F4;",
      alt: "&#x1F4F4;",
      descripton: "mobile phone off"
    },
    { value: "&#x2640;", alt: "&#x2640;", descripton: "female sign" },
    { value: "&#x2642;", alt: "&#x2642;", descripton: "male sign" },
    { value: "&#x2695;", alt: "&#x2695;", descripton: "medical symbol" },
    { value: "&#x267E;", alt: "&#x267E;", descripton: "infinity" },
    { value: "&#x267B;", alt: "&#x267B;", descripton: "recycling symbol" },
    { value: "&#x269C;", alt: "&#x269C;", descripton: "fleur-de-lis" },
    { value: "&#x1F531;", alt: "&#x1F531;", descripton: "trident emblem" },
    { value: "&#x1F4DB;", alt: "&#x1F4DB;", descripton: "name badge" },
    {
      value: "&#x1F530;",
      alt: "&#x1F530;",
      descripton: "Japanese symbol for beginner"
    },
    { value: "&#x2B55;", alt: "&#x2B55;", descripton: "hollow red circle" },
    { value: "&#x2705;", alt: "&#x2705;", descripton: "check mark button" },
    {
      value: "&#x2611;",
      alt: "&#x2611;",
      descripton: "check box with check"
    },
    { value: "&#x2714;", alt: "&#x2714;", descripton: "check mark" },
    {
      value: "&#x2716;",
      alt: "&#x2716;",
      descripton: "multiplication sign"
    },
    { value: "&#x274C;", alt: "&#x274C;", descripton: "cross mark" },
    { value: "&#x274E;", alt: "&#x274E;", descripton: "cross mark button" },
    { value: "&#x2795;", alt: "&#x2795;", descripton: "plus sign" },
    { value: "&#x2796;", alt: "&#x2796;", descripton: "minus sign" },
    { value: "&#x2797;", alt: "&#x2797;", descripton: "division sign" },
    { value: "&#x27B0;", alt: "&#x27B0;", descripton: "curly loop" },
    { value: "&#x27BF;", alt: "&#x27BF;", descripton: "double curly loop" },
    {
      value: "&#x303D;",
      alt: "&#x303D;",
      descripton: "part alternation mark"
    },
    {
      value: "&#x2733;",
      alt: "&#x2733;",
      descripton: "eight-spoked asterisk"
    },
    {
      value: "&#x2734;",
      alt: "&#x2734;",
      descripton: "eight-pointed star"
    },
    { value: "&#x2747;", alt: "&#x2747;", descripton: "sparkle" },
    {
      value: "&#x203C;",
      alt: "&#x203C;",
      descripton: "double exclamation mark"
    },
    {
      value: "&#x2049;",
      alt: "&#x2049;",
      descripton: "exclamation question mark"
    },
    { value: "&#x2753;", alt: "&#x2753;", descripton: "question mark" },
    {
      value: "&#x2754;",
      alt: "&#x2754;",
      descripton: "white question mark"
    },
    {
      value: "&#x2755;",
      alt: "&#x2755;",
      descripton: "white exclamation mark"
    },
    { value: "&#x2757;", alt: "&#x2757;", descripton: "exclamation mark" },
    { value: "&#x3030;", alt: "&#x3030;", descripton: "wavy dash" },
    { value: "&#x00A9;", alt: "&#x00A9;", descripton: "copyright" },
    { value: "&#x00AE;", alt: "&#x00AE;", descripton: "registered" },
    { value: "&#x2122;", alt: "&#x2122;", descripton: "trade mark" },
    { value: "&#x1F51F;", alt: "&#x1F51F;", descripton: "keycap: 10" },
    {
      value: "&#x1F520;",
      alt: "&#x1F520;",
      descripton: "input latin uppercase"
    },
    {
      value: "&#x1F521;",
      alt: "&#x1F521;",
      descripton: "input latin lowercase"
    },
    { value: "&#x1F522;", alt: "&#x1F522;", descripton: "input numbers" },
    { value: "&#x1F523;", alt: "&#x1F523;", descripton: "input symbols" },
    {
      value: "&#x1F524;",
      alt: "&#x1F524;",
      descripton: "input latin letters"
    },
    {
      value: "&#x1F170;",
      alt: "&#x1F170;",
      descripton: "A button (blood type)"
    },
    {
      value: "&#x1F18E;",
      alt: "&#x1F18E;",
      descripton: "AB button (blood type)"
    },
    {
      value: "&#x1F171;",
      alt: "&#x1F171;",
      descripton: "B button (blood type)"
    },
    { value: "&#x1F191;", alt: "&#x1F191;", descripton: "CL button" },
    { value: "&#x1F192;", alt: "&#x1F192;", descripton: "COOL button" },
    { value: "&#x1F193;", alt: "&#x1F193;", descripton: "FREE button" },
    { value: "&#x2139;", alt: "&#x2139;", descripton: "information" },
    { value: "&#x1F194;", alt: "&#x1F194;", descripton: "ID button" },
    { value: "&#x24C2;", alt: "&#x24C2;", descripton: "circled M" },
    { value: "&#x1F195;", alt: "&#x1F195;", descripton: "NEW button" },
    { value: "&#x1F196;", alt: "&#x1F196;", descripton: "NG button" },
    {
      value: "&#x1F17E;",
      alt: "&#x1F17E;",
      descripton: "O button (blood type)"
    },
    { value: "&#x1F197;", alt: "&#x1F197;", descripton: "OK button" },
    { value: "&#x1F17F;", alt: "&#x1F17F;", descripton: "P button" },
    { value: "&#x1F198;", alt: "&#x1F198;", descripton: "SOS button" },
    { value: "&#x1F199;", alt: "&#x1F199;", descripton: "UP! button" },
    { value: "&#x1F19A;", alt: "&#x1F19A;", descripton: "VS button" },
    {
      value: "&#x1F201;",
      alt: "&#x1F201;",
      descripton: "Japanese “here” button"
    },
    {
      value: "&#x1F202;",
      alt: "&#x1F202;",
      descripton: "Japanese “service charge” button"
    },
    {
      value: "&#x1F237;",
      alt: "&#x1F237;",
      descripton: "Japanese “monthly amount” button"
    },
    {
      value: "&#x1F236;",
      alt: "&#x1F236;",
      descripton: "Japanese “not free of charge” button"
    },
    {
      value: "&#x1F22F;",
      alt: "&#x1F22F;",
      descripton: "Japanese “reserved” button"
    },
    {
      value: "&#x1F250;",
      alt: "&#x1F250;",
      descripton: "Japanese “bargain” button"
    },
    {
      value: "&#x1F239;",
      alt: "&#x1F239;",
      descripton: "Japanese “discount” button"
    },
    {
      value: "&#x1F21A;",
      alt: "&#x1F21A;",
      descripton: "Japanese “free of charge” button"
    },
    {
      value: "&#x1F232;",
      alt: "&#x1F232;",
      descripton: "Japanese “prohibited” button"
    },
    {
      value: "&#x1F251;",
      alt: "&#x1F251;",
      descripton: "Japanese “acceptable” button"
    },
    {
      value: "&#x1F238;",
      alt: "&#x1F238;",
      descripton: "Japanese “application” button"
    },
    {
      value: "&#x1F234;",
      alt: "&#x1F234;",
      descripton: "Japanese “passing grade” button"
    },
    {
      value: "&#x1F233;",
      alt: "&#x1F233;",
      descripton: "Japanese “vacancy” button"
    },
    {
      value: "&#x3297;",
      alt: "&#x3297;",
      descripton: "Japanese “congratulations” button"
    },
    {
      value: "&#x3299;",
      alt: "&#x3299;",
      descripton: "Japanese “secret” button"
    },
    {
      value: "&#x1F23A;",
      alt: "&#x1F23A;",
      descripton: "Japanese “open for business” button"
    },
    {
      value: "&#x1F235;",
      alt: "&#x1F235;",
      descripton: "Japanese “no vacancy” button"
    },
    { value: "&#x1F534;", alt: "&#x1F534;", descripton: "red circle" },
    { value: "&#x1F7E0;", alt: "&#x1F7E0;", descripton: "orange circle" },
    { value: "&#x1F7E1;", alt: "&#x1F7E1;", descripton: "yellow circle" },
    { value: "&#x1F7E2;", alt: "&#x1F7E2;", descripton: "green circle" },
    { value: "&#x1F535;", alt: "&#x1F535;", descripton: "blue circle" },
    { value: "&#x1f7e3;", alt: "&#x1f7e3;", descripton: "purple circle" },
    { value: "&#x1f7e4;", alt: "&#x1f7e4;", descripton: "brown circle" },
    { value: "&#x26AB;", alt: "&#x26AB;", descripton: "black circle" },
    { value: "&#x26AA;", alt: "&#x26AA;", descripton: "white circle" },
    { value: "&#x1F7E5;", alt: "&#x1F7E5;", descripton: "red square" },
    { value: "&#x1F7E7;", alt: "&#x1F7E7;", descripton: "orange square" },
    { value: "&#x1F7E8;", alt: "&#x1F7E8;", descripton: "yellow square" },
    { value: "&#x1F7E9;", alt: "&#x1F7E9;", descripton: "green square" },
    { value: "&#x1F7E6;", alt: "&#x1F7E6;", descripton: "blue square" },
    { value: "&#x1F7EA;", alt: "&#x1F7EA;", descripton: "purple square" },
    { value: "&#x1F7EB;", alt: "&#x1F7EB;", descripton: "brown square" },
    {
      value: "&#x2B1B;",
      alt: "&#x2B1B;",
      descripton: "black large square"
    },
    {
      value: "&#x2B1C;",
      alt: "&#x2B1C;",
      descripton: "white large square"
    },
    {
      value: "&#x25FC;",
      alt: "&#x25FC;",
      descripton: "black medium square"
    },
    {
      value: "&#x25FB;",
      alt: "&#x25FB;",
      descripton: "white medium square"
    },
    {
      value: "&#x25FE;",
      alt: "&#x25FE;",
      descripton: "black medium-small square"
    },
    {
      value: "&#x25FD;",
      alt: "&#x25FD;",
      descripton: "white medium-small square"
    },
    {
      value: "&#x25AA;",
      alt: "&#x25AA;",
      descripton: "black small square"
    },
    {
      value: "&#x25AB;",
      alt: "&#x25AB;",
      descripton: "white small square"
    },
    {
      value: "&#x1F536;",
      alt: "&#x1F536;",
      descripton: "large orange diamond"
    },
    {
      value: "&#x1F537;",
      alt: "&#x1F537;",
      descripton: "large blue diamond"
    },
    {
      value: "&#x1F538;",
      alt: "&#x1F538;",
      descripton: "small orange diamond"
    },
    {
      value: "&#x1F539;",
      alt: "&#x1F539;",
      descripton: "small blue diamond"
    },
    {
      value: "&#x1F53A;",
      alt: "&#x1F53A;",
      descripton: "red triangle pointed up"
    },
    {
      value: "&#x1F53B;",
      alt: "&#x1F53B;",
      descripton: "red triangle pointed down"
    },
    {
      value: "&#x1F4A0;",
      alt: "&#x1F4A0;",
      descripton: "diamond with a dot"
    },
    { value: "&#x1F518;", alt: "&#x1F518;", descripton: "radio button" },
    {
      value: "&#x1F533;",
      alt: "&#x1F533;",
      descripton: "white square button"
    },
    {
      value: "&#x1F532;",
      alt: "&#x1F532;",
      descripton: "black square button"
    }
  ],
  flags: [
    { value: "&#x1F3C1;", alt: "&#x1F3C1;", descripton: "chequered flag" },
    { value: "&#x1F6A9;", alt: "&#x1F6A9;", descripton: "triangular flag" },
    { value: "&#x1F38C;", alt: "&#x1F38C;", descripton: "crossed flags" },
    { value: "&#x1F3F4;", alt: "&#x1F3F4;", descripton: "black flag" },
    { value: "&#x1F3F3;", alt: "&#x1F3F3;", descripton: "white flag" }
  ]
};

window.customElements.define(SimpleEmojiPicker.tag, SimpleEmojiPicker);
export { SimpleEmojiPicker };
