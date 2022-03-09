!function(e,o){"object"==typeof exports&&"undefined"!=typeof module?o(exports):"function"==typeof define&&define.amd?define(["exports"],o):o((e="undefined"!=typeof globalThis?globalThis:e||self).MediaBehaviors={})}(this,(function(e){"use strict";function o(e,o){if(!(e instanceof o))throw new TypeError("Cannot call a class as a function")}function t(e,o){for(var t=0;t<o.length;t++){var r=o[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function r(e){return r=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},r(e)}function i(e,o){return i=Object.setPrototypeOf||function(e,o){return e.__proto__=o,e},i(e,o)}function n(e,o){if(o&&("object"==typeof o||"function"==typeof o))return o;if(void 0!==o)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function u(e){var o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,i=r(e);if(o){var u=r(this).constructor;t=Reflect.construct(i,arguments,u)}else t=i.apply(this,arguments);return n(this,t)}}window.MediaBehaviors=window.MediaBehaviors||{},window.MediaBehaviors.Video={_sourceIsIframe:function(e){return"local"!=this.getVideoType(e)},cleanVideoSource:function(e,o){if("local"!=o&&"string"==typeof e){var t=e.split("?"),r="";if(e=t[0],2==t.length){var i=t[1].split("&"),n=i[0].split("="),u=Array.isArray(i.shift())?i.shift().join(""):i.shift();if("v"==n[0]){var f=void 0!==u&&""!==u?"?"+u:"";r=n[1]+f}}if(-1==e.indexOf("player.vimeo.com")&&-1!=e.indexOf("vimeo.com"))return-1!=e.indexOf("/videos/")&&(e=e.replace("/videos/","/")),e.replace("vimeo.com/","player.vimeo.com/video/");if(-1!=e.indexOf("youtube.com/watch"))return e.replace("youtube.com/watch","youtube.com/embed/")+r;if(-1!=e.indexOf("youtube-no-cookie.com/"))return e.replace("youtube-no-cookie.com/","youtube.com/")+r;if(-1!=e.indexOf("youtu.be"))return e.replace("youtu.be/","www.youtube.com/embed/")+r;if(-1!=e.indexOf("sketchfab.com")&&-1==e.indexOf("/embed"))return e+"/embed";if(-1!=e.indexOf("dailymotion.com")&&-1==e.indexOf("/embed"))return e.replace("/video/","/embed/video/")}return e},getVideoType:function(e){var o=["aac","flac","mov","mp3","mp4","oga","ogg","ogv","wav","webm"],t=!1;if(-1!=e.indexOf("vimeo"))return"vimeo";if(-1!=e.indexOf("youtube")||-1!=e.indexOf("youtu.be"))return"youtube";if(-1!=e.indexOf("sketchfab.com"))return"sketchfab";if(-1!=e.indexOf("dailymotion.com"))return"dailymotion";for(var r=0;r<o.length;r++)!t&&e.toLowerCase().indexOf("."+o[r])>-1&&(t=!0);return t?"local":"external"}};e.MediaBehaviorsVideo=function(e){return function(e){!function(e,o){if("function"!=typeof o&&null!==o)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(o&&o.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),o&&i(e,o)}(a,e);var r,n,f,c=u(a);function a(){return o(this,a),c.apply(this,arguments)}return r=a,(n=[{key:"_sourceIsIframe",value:function(e){return"local"!=this.getVideoType(e)}},{key:"cleanVideoSource",value:function(e,o){if("local"!=o){var t=e.split("?"),r="";if(e=t[0],2==t.length){var i=t[1].split("&"),n=i[0].split("="),u=Array.isArray(i.shift())?i.shift().join(""):i.shift();if("v"==n[0]){var f=void 0!==u&&""!==u?"?"+u:"";r=n[1]+f}}if(-1==e.indexOf("player.vimeo.com")&&-1!=e.indexOf("vimeo.com"))return-1!=e.indexOf("/videos/")&&(e=e.replace("/videos/","/")),e.replace("vimeo.com/","player.vimeo.com/video/");if(-1!=e.indexOf("youtube.com/watch"))return e.replace("youtube.com/watch","youtube.com/embed/")+r;if(-1!=e.indexOf("youtube-no-cookie.com/"))return e.replace("youtube-no-cookie.com/","youtube.com/")+r;if(-1!=e.indexOf("youtu.be"))return e.replace("youtu.be/","www.youtube.com/embed/")+r;if(-1!=e.indexOf("sketchfab.com")&&-1==e.indexOf("/embed"))return e+"/embed";if(-1!=e.indexOf("dailymotion.com")&&-1==e.indexOf("/embed"))return e.replace("/video/","/embed/video/")}return e}},{key:"getVideoType",value:function(e){var o=["aac","flac","mov","mp3","mp4","oga","ogg","ogv","wav","webm"],t=!1;if(-1!=e.indexOf("vimeo"))return"vimeo";if(-1!=e.indexOf("youtube")||-1!=e.indexOf("youtu.be"))return"youtube";if(-1!=e.indexOf("sketchfab.com"))return"sketchfab";if(-1!=e.indexOf("dailymotion.com"))return"dailymotion";for(var r=0;r<o.length;r++)!t&&e.toLowerCase().indexOf("."+o[r])>-1&&(t=!0);return t?"local":"external"}}])&&t(r.prototype,n),f&&t(r,f),Object.defineProperty(r,"prototype",{writable:!1}),a}(e)},Object.defineProperty(e,"__esModule",{value:!0})}));
