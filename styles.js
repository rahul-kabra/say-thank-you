(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/styles.scss":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--14-1!./node_modules/postcss-loader/src??embedded!./node_modules/resolve-url-loader??ref--14-3!./node_modules/sass-loader/dist/cjs.js??ref--14-4!./src/styles.scss ***!
  \*********************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(true);
// Module
exports.push([module.i, "/* You can add global styles to this file, and also import other style files */\n:root {\n  /* Site styles */\n  --bg: #F17A7E;\n  --color: #fff;\n  --font: \"Quando\", serif;\n  --sunshine: #FFF0A3;\n  --steel: #4a6163;\n  --cherry: #E45865;\n  /* Floating input styles */\n  --color-accent: #4a6163;\n  --input-border: rgba(0, 0, 0, 0.42);\n  --label-color: #222;\n}\n/* Firefox Scrollbar Hack */\n* {\n  scrollbar-width: thin;\n  scrollbar-color: var(--steel) var(--sunshine);\n}\n/* Chrome/Edge/Safari Scrollbar Hack */\n*::-webkit-scrollbar {\n  width: 12px;\n}\n*::-webkit-scrollbar-track {\n  background: var(--sunshine);\n}\n*::-webkit-scrollbar-thumb {\n  background-color: var(--steel);\n  border-radius: 20px;\n  border: 3px solid var(--sunshine);\n}\nhtml {\n  height: 95%;\n}\nbody {\n  background: var(--bg);\n  color: var(--color);\n  font-family: var(--font);\n  height: 95%;\n}\nhr.center-square {\n  border-top: 1px solid var(--sunshine);\n  width: 25%;\n  margin: 30px auto;\n  color: var(--sunshine);\n}\nhr.center-square::after {\n  background: none repeat scroll 0% 0% var(--sunshine);\n  content: \"\";\n  height: 10px;\n  left: 50%;\n  margin: -5px auto auto -5px;\n  position: absolute;\n  transform: rotate(45deg);\n  width: 10px;\n}\n.floating {\n  margin-bottom: 3px;\n  transition: background-color 0.2s ease;\n}\n.floating-input {\n  padding: 0.8rem 1rem 0.6rem;\n  font-size: 1rem;\n  border-bottom: 0.1rem solid var(--input-border);\n  transition: border-color 0.2s ease;\n  caret-color: var(--color-accent);\n  width: 50%;\n  text-align: center;\n}\n.floating-input {\n  outline: none !important;\n}\n.floating-input::placeholder {\n  color: rgba(0, 0, 0, 0);\n}\n.floating-label {\n  display: block;\n  position: relative;\n  max-height: 0;\n  font-weight: 500;\n  pointer-events: none;\n}\n.floating-label::before {\n  color: var(--label-color);\n  content: attr(data-content);\n  display: inline-block;\n  filter: blur(0);\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  transform-origin: top;\n  transition: transform 0.2s ease;\n  position: relative;\n}\n.floating-label::after {\n  bottom: 1rem;\n  content: \"\";\n  height: 0.1rem;\n  position: absolute;\n  transition: transform 180ms cubic-bezier(0.4, 0, 0.2, 1), opacity 180ms cubic-bezier(0.4, 0, 0.2, 1), background-color 0.3s ease;\n  opacity: 0;\n  left: 0;\n  top: 100%;\n  margin-top: -0.1rem;\n  transform: scale3d(0, 1, 1);\n  width: 100%;\n  background-color: var(--color-accent);\n}\n.floating-input:focus + .floating-label::after {\n  transform: scale3d(1, 1, 1);\n  opacity: 1;\n}\n.floating-input:placeholder-shown + .floating-label::before {\n  transform: translate3d(0, -2.2rem, 0) scale3d(1, 1, 1);\n}\n.floating-label::before,\n.floating-input:focus + .floating-label::before {\n  transform: translate3d(0, -3.12rem, 0) scale3d(0.82, 0.82, 1);\n}\n.floating__input:focus + .floating__label::before {\n  color: var(--color-accent);\n}\ninput {\n  background: none;\n  border-width: 0;\n}\n.form-input {\n  display: grid;\n  grid-template-columns: 1fr;\n  justify-items: center;\n  text-align: center;\n  max-width: 900px;\n  margin: 0 auto;\n}\n.btn {\n  background: var(--steel);\n  border: solid 2px var(--cherry);\n  color: var(--sunshine);\n  width: 105px;\n  height: 40px;\n  font-size: 15px;\n  font-weight: bold;\n  cursor: pointer;\n  margin-top: 5px;\n}\n.btn:hover {\n  background: var(--sunshine);\n  color: var(--steel);\n}\n.flair {\n  width: 65%;\n  height: 30px;\n  border-style: double;\n  border-color: var(--sunshine);\n  border-width: 3px 0 0 0;\n}\n.custom-top-margin {\n  margin-top: 50px;\n}\n.highlight {\n  line-height: 1.2;\n  text-decoration: none;\n  color: inherit;\n  position: relative;\n  cursor: pointer;\n}\n.highlight:before {\n  content: \"\";\n  display: inline-block;\n  height: 25%;\n  width: 75%;\n  top: 18px;\n  position: absolute;\n  background-color: var(--sunshine);\n  z-index: -1;\n  transition: 0.5s width cubic-bezier(0.25, 0.46, 0.45, 0.94);\n}\n.highlight:hover:before {\n  width: 100%;\n}", "",{"version":3,"sources":["styles.scss"],"names":[],"mappings":"AAAA,8EAAA;AACA;EACI,gBAAA;EACA,aAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,gBAAA;EACA,iBAAA;EAEA,0BAAA;EACA,uBAAA;EACA,mCAAA;EACA,mBAAA;AAAJ;AAGA,2BAAA;AACA;EACI,qBAAA;EACA,6CAAA;AAAJ;AAGA,sCAAA;AACA;EACI,WAAA;AAAJ;AAGA;EACI,2BAAA;AAAJ;AAGA;EACI,8BAAA;EACA,mBAAA;EACA,iCAAA;AAAJ;AAGA;EACI,WAAA;AAAJ;AAGA;EACI,qBAAA;EACA,mBAAA;EACA,wBAAA;EACA,WAAA;AAAJ;AAGA;EACI,qCAAA;EACA,UAAA;EACA,iBAAA;EACA,sBAAA;AAAJ;AAEI;EACI,oDAAA;EACA,WAAA;EACA,YAAA;EACA,SAAA;EACA,2BAAA;EACA,kBAAA;EACA,wBAAA;EACA,WAAA;AAAR;AAIA;EACI,kBAAA;EACA,sCAAA;AADJ;AAIA;EACI,2BAAA;EACA,eAAA;EACA,+CAAA;EACA,kCAAA;EACA,gCAAA;EACA,UAAA;EACA,kBAAA;AADJ;AAIA;EACI,wBAAA;AADJ;AAIA;EACI,uBAAA;AADJ;AAIA;EACI,cAAA;EACA,kBAAA;EACA,aAAA;EACA,gBAAA;EACA,oBAAA;AADJ;AAIA;EACI,yBAAA;EACA,2BAAA;EACA,qBAAA;EACA,eAAA;EACA,mCAAA;UAAA,2BAAA;EACA,qBAAA;EACA,+BAAA;EACA,kBAAA;AADJ;AAIA;EACI,YAAA;EACA,WAAA;EACA,cAAA;EACA,kBAAA;EACA,gIAAA;EAEA,UAAA;EACA,OAAA;EACA,SAAA;EACA,mBAAA;EACA,2BAAA;EACA,WAAA;EACA,qCAAA;AAFJ;AAKA;EACI,2BAAA;EACA,UAAA;AAFJ;AAKA;EACI,sDAAA;AAFJ;AAKA;;EAEI,6DAAA;AAFJ;AAKA;EACI,0BAAA;AAFJ;AAKA;EACI,gBAAA;EACA,eAAA;AAFJ;AAKA;EACI,aAAA;EACA,0BAAA;EACA,qBAAA;EACA,kBAAA;EACA,gBAAA;EACA,cAAA;AAFJ;AAKA;EACI,wBAAA;EACA,+BAAA;EACA,sBAAA;EACA,YAAA;EACA,YAAA;EACA,eAAA;EACA,iBAAA;EACA,eAAA;EACA,eAAA;AAFJ;AAII;EACI,2BAAA;EACA,mBAAA;AAFR;AAMA;EACI,UAAA;EACA,YAAA;EACA,oBAAA;EACA,6BAAA;EACA,uBAAA;AAHJ;AAMA;EACI,gBAAA;AAHJ;AAMA;EACI,gBAAA;EACA,qBAAA;EACA,cAAA;EACA,kBAAA;EACA,eAAA;AAHJ;AAKI;EACI,WAAA;EACA,qBAAA;EACA,WAAA;EACA,UAAA;EACA,SAAA;EACA,kBAAA;EACA,iCAAA;EACA,WAAA;EACA,2DAAA;AAHR;AAMI;EACI,WAAA;AAJR","file":"styles.scss","sourcesContent":["/* You can add global styles to this file, and also import other style files */\n:root {\n    /* Site styles */\n    --bg: #F17A7E;\n    --color: #fff;\n    --font: 'Quando', serif;\n    --sunshine: #FFF0A3;\n    --steel: #4a6163;\n    --cherry: #E45865;\n\n    /* Floating input styles */\n    --color-accent: #4a6163;\n    --input-border: rgba(0, 0, 0, 0.42);\n    --label-color: #222;\n}\n\n/* Firefox Scrollbar Hack */\n* {\n    scrollbar-width: thin;\n    scrollbar-color: var(--steel) var(--sunshine);\n}\n\n/* Chrome/Edge/Safari Scrollbar Hack */\n*::-webkit-scrollbar {\n    width: 12px;\n}\n\n*::-webkit-scrollbar-track {\n    background: var(--sunshine);\n}\n\n*::-webkit-scrollbar-thumb {\n    background-color: var(--steel);\n    border-radius: 20px;\n    border: 3px solid var(--sunshine);\n}\n\nhtml {\n    height: 95%;\n}\n\nbody {\n    background: var(--bg);\n    color: var(--color);\n    font-family: var(--font);\n    height: 95%;\n}\n\nhr.center-square {\n    border-top: 1px solid var(--sunshine);\n    width: 25%;\n    margin: 30px auto;\n    color: var(--sunshine);\n\n    &::after {\n        background: none repeat scroll 0% 0% var(--sunshine);\n        content: \"\";\n        height: 10px;\n        left: 50%;\n        margin: -5px auto auto -5px;\n        position: absolute;\n        transform: rotate(45deg);\n        width: 10px;\n    }\n}\n\n.floating {\n    margin-bottom: 3px;\n    transition: background-color 0.2s ease;\n}\n\n.floating-input {\n    padding: 0.8rem 1rem 0.6rem;\n    font-size: 1rem;\n    border-bottom: 0.1rem solid var(--input-border);\n    transition: border-color 0.2s ease;\n    caret-color: var(--color-accent);\n    width: 50%;\n    text-align: center;\n}\n\n.floating-input {\n    outline: none !important;\n}\n\n.floating-input::placeholder {\n    color: rgba(0, 0, 0, 0);\n}\n\n.floating-label {\n    display: block;\n    position: relative;\n    max-height: 0;\n    font-weight: 500;\n    pointer-events: none;\n}\n\n.floating-label::before {\n    color: var(--label-color);\n    content: attr(data-content);\n    display: inline-block;\n    filter: blur(0);\n    backface-visibility: hidden;\n    transform-origin: top;\n    transition: transform 0.2s ease;\n    position: relative;\n}\n\n.floating-label::after {\n    bottom: 1rem;\n    content: \"\";\n    height: 0.1rem;\n    position: absolute;\n    transition: transform 180ms cubic-bezier(0.4, 0, 0.2, 1),\n        opacity 180ms cubic-bezier(0.4, 0, 0.2, 1), background-color 0.3s ease;\n    opacity: 0;\n    left: 0;\n    top: 100%;\n    margin-top: -0.1rem;\n    transform: scale3d(0, 1, 1);\n    width: 100%;\n    background-color: var(--color-accent);\n}\n\n.floating-input:focus+.floating-label::after {\n    transform: scale3d(1, 1, 1);\n    opacity: 1;\n}\n\n.floating-input:placeholder-shown+.floating-label::before {\n    transform: translate3d(0, -2.2rem, 0) scale3d(1, 1, 1);\n}\n\n.floating-label::before,\n.floating-input:focus+.floating-label::before {\n    transform: translate3d(0, -3.12rem, 0) scale3d(0.82, 0.82, 1);\n}\n\n.floating__input:focus+.floating__label::before {\n    color: var(--color-accent);\n}\n\ninput {\n    background: none;\n    border-width: 0;\n}\n\n.form-input {\n    display: grid;\n    grid-template-columns: 1fr;\n    justify-items: center;\n    text-align: center;\n    max-width: 900px;\n    margin: 0 auto;\n}\n\n.btn {\n    background: var(--steel);\n    border: solid 2px var(--cherry);\n    color: var(--sunshine);\n    width: 105px;\n    height: 40px;\n    font-size: 15px;\n    font-weight: bold;\n    cursor: pointer;\n    margin-top: 5px;\n\n    &:hover {\n        background: var(--sunshine);\n        color: var(--steel);\n    }\n}\n\n.flair {\n    width: 65%;\n    height: 30px;\n    border-style: double;\n    border-color: var(--sunshine);\n    border-width: 3px 0 0 0;\n}\n\n.custom-top-margin {\n    margin-top: 50px;\n}\n\n.highlight {\n    line-height: 1.2;\n    text-decoration: none;\n    color: inherit;\n    position: relative;\n    cursor: pointer;\n\n    &:before {\n        content: \"\";\n        display: inline-block;\n        height: 25%;\n        width: 75%;\n        top: 18px;\n        position: absolute;\n        background-color: var(--sunshine);\n        z-index: -1;\n        transition: 0.5s width cubic-bezier(0.25, 0.46, 0.45, 0.94);\n    }\n\n    &:hover:before {\n        width: 100%;\n    }\n}"]}]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/styles.scss":
/*!*************************!*\
  !*** ./src/styles.scss ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--14-1!../node_modules/postcss-loader/src??embedded!../node_modules/resolve-url-loader??ref--14-3!../node_modules/sass-loader/dist/cjs.js??ref--14-4!./styles.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/styles.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ 2:
/*!*******************************!*\
  !*** multi ./src/styles.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/travis/build/rahul-kabra/say-thank-you/src/styles.scss */"./src/styles.scss");


/***/ })

},[[2,"runtime"]]]);
//# sourceMappingURL=styles.js.map