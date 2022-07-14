define("8932616f-4ea5-429d-9866-f7498c557481_0.0.1", ["OrgChartPocWebPartStrings","@microsoft/sp-property-pane","@microsoft/sp-core-library","@microsoft/sp-webpart-base","react","react-dom"], function(__WEBPACK_EXTERNAL_MODULE__1K40__, __WEBPACK_EXTERNAL_MODULE__26ea__, __WEBPACK_EXTERNAL_MODULE_UWqr__, __WEBPACK_EXTERNAL_MODULE_br4S__, __WEBPACK_EXTERNAL_MODULE_cDcd__, __WEBPACK_EXTERNAL_MODULE_faye__) { return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "IB8v");
/******/ })
/************************************************************************/
/******/ ({

/***/ "1K40":
/*!********************************************!*\
  !*** external "OrgChartPocWebPartStrings" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__1K40__;

/***/ }),

/***/ "26ea":
/*!**********************************************!*\
  !*** external "@microsoft/sp-property-pane" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__26ea__;

/***/ }),

/***/ "8hAS":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src??postcss!./node_modules/react-orgchart/index.css ***!
  \********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../css-loader/dist/runtime/api.js */ "JPst")(false);
// Module
exports.push([module.i, ".reactOrgChart{margin:2px}.reactOrgChart .orgNodeChildGroup .node{border:1px solid #000;display:inline-block;padding:4px;width:100px}.reactOrgChart .orgNodeChildGroup .nodeCell{text-align:center}.reactOrgChart .orgNodeChildGroup .nodeGroupCell{vertical-align:top}.reactOrgChart .orgNodeChildGroup .nodeGroupLineVerticalMiddle{height:25px;width:50%;border-right:2px solid #000}.reactOrgChart .nodeLineBorderTop{border-top:2px solid #000}.reactOrgChart table{border-collapse:collapse;border:none;margin:0 auto}.reactOrgChart td{padding:0}.reactOrgChart table.nodeLineTable{width:100%}.reactOrgChart table td.nodeCell{width:50%}", ""]);


/***/ }),

/***/ "IB8v":
/*!********************************************************!*\
  !*** ./lib/webparts/orgChartPoc/OrgChartPocWebPart.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return OrgChartPocWebPart; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "faye");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _microsoft_sp_property_pane__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @microsoft/sp-property-pane */ "26ea");
/* harmony import */ var _microsoft_sp_property_pane__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_property_pane__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _microsoft_sp_webpart_base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @microsoft/sp-webpart-base */ "br4S");
/* harmony import */ var _microsoft_sp_webpart_base__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_webpart_base__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var OrgChartPocWebPartStrings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! OrgChartPocWebPartStrings */ "1K40");
/* harmony import */ var OrgChartPocWebPartStrings__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(OrgChartPocWebPartStrings__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_OrgChartPoc__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/OrgChartPoc */ "gTmJ");







class OrgChartPocWebPart extends _microsoft_sp_webpart_base__WEBPACK_IMPORTED_MODULE_4__["BaseClientSideWebPart"] {
    constructor() {
        super(...arguments);
        this._isDarkTheme = false;
        this._environmentMessage = '';
    }
    onInit() {
        this._environmentMessage = this._getEnvironmentMessage();
        return super.onInit();
    }
    render() {
        const element = react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_OrgChartPoc__WEBPACK_IMPORTED_MODULE_6__["default"], {
            description: this.properties.description,
            isDarkTheme: this._isDarkTheme,
            environmentMessage: this._environmentMessage,
            hasTeamsContext: !!this.context.sdks.microsoftTeams,
            userDisplayName: this.context.pageContext.user.displayName
        });
        react_dom__WEBPACK_IMPORTED_MODULE_1__["render"](element, this.domElement);
    }
    _getEnvironmentMessage() {
        if (!!this.context.sdks.microsoftTeams) { // running in Teams
            return this.context.isServedFromLocalhost ? OrgChartPocWebPartStrings__WEBPACK_IMPORTED_MODULE_5__["AppLocalEnvironmentTeams"] : OrgChartPocWebPartStrings__WEBPACK_IMPORTED_MODULE_5__["AppTeamsTabEnvironment"];
        }
        return this.context.isServedFromLocalhost ? OrgChartPocWebPartStrings__WEBPACK_IMPORTED_MODULE_5__["AppLocalEnvironmentSharePoint"] : OrgChartPocWebPartStrings__WEBPACK_IMPORTED_MODULE_5__["AppSharePointEnvironment"];
    }
    onThemeChanged(currentTheme) {
        if (!currentTheme) {
            return;
        }
        this._isDarkTheme = !!currentTheme.isInverted;
        const { semanticColors } = currentTheme;
        this.domElement.style.setProperty('--bodyText', semanticColors.bodyText);
        this.domElement.style.setProperty('--link', semanticColors.link);
        this.domElement.style.setProperty('--linkHovered', semanticColors.linkHovered);
    }
    onDispose() {
        react_dom__WEBPACK_IMPORTED_MODULE_1__["unmountComponentAtNode"](this.domElement);
    }
    get dataVersion() {
        return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_2__["Version"].parse('1.0');
    }
    getPropertyPaneConfiguration() {
        return {
            pages: [
                {
                    header: {
                        description: OrgChartPocWebPartStrings__WEBPACK_IMPORTED_MODULE_5__["PropertyPaneDescription"]
                    },
                    groups: [
                        {
                            groupName: OrgChartPocWebPartStrings__WEBPACK_IMPORTED_MODULE_5__["BasicGroupName"],
                            groupFields: [
                                Object(_microsoft_sp_property_pane__WEBPACK_IMPORTED_MODULE_3__["PropertyPaneTextField"])('description', {
                                    label: OrgChartPocWebPartStrings__WEBPACK_IMPORTED_MODULE_5__["DescriptionFieldLabel"]
                                })
                            ]
                        }
                    ]
                }
            ]
        };
    }
}


/***/ }),

/***/ "JPst":
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
        return "@media ".concat(item[2], "{").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      // eslint-disable-next-line prefer-destructuring
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = modules[_i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = "(".concat(item[2], ") and (").concat(mediaQuery, ")");
        }

        list.push(item);
      }
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
      return "/*# sourceURL=".concat(cssMapping.sourceRoot).concat(source, " */");
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

/***/ "NOuv":
/*!***********************************************!*\
  !*** ./node_modules/react-orgchart/index.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../css-loader/dist/cjs.js!../postcss-loader/src??postcss!./index.css */ "8hAS");
var loader = __webpack_require__(/*! ./node_modules/@microsoft/loader-load-themed-styles/node_modules/@microsoft/load-themed-styles/lib/index.js */ "ruv1");

if(typeof content === "string") content = [[module.i, content]];

// add the styles to the DOM
for (var i = 0; i < content.length; i++) loader.loadStyles(content[i][1], true);

if(content.locals) module.exports = content.locals;

/***/ }),

/***/ "UWqr":
/*!*********************************************!*\
  !*** external "@microsoft/sp-core-library" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_UWqr__;

/***/ }),

/***/ "VFyW":
/*!*****************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src??postcss!./lib/webparts/orgChartPoc/components/OrgChartPoc.module.css ***!
  \*****************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "JPst")(false);
// Module
exports.push([module.i, ".orgChartPoc_3727f90f .orgTree_3727f90f{margin-bottom:20px}.orgChartPoc_3727f90f .orgTree_3727f90f .orgTreeHeader_3727f90f{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;-ms-flex-direction:column;flex-direction:column;width:100%}.orgChartPoc_3727f90f .orgTree_3727f90f .orgTreeRoot_3727f90f{width:300px;border:1px solid #000}.orgChartPoc_3727f90f .orgTree_3727f90f .orgTreeNodes_3727f90f,.orgChartPoc_3727f90f .orgTree_3727f90f .orgTreeRoot_3727f90f{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center}.orgChartPoc_3727f90f .orgTree_3727f90f .orgTreeNodes_3727f90f{width:90%}.orgChartPoc_3727f90f .orgTree_3727f90f .orgTreeNode_3727f90f{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:200px;border:1px solid #000}.orgChartPoc_3727f90f .orgTree_3727f90f .orgTreeNodeAvatar_3727f90f,.orgChartPoc_3727f90f .orgTree_3727f90f .orgTreeNodeName_3727f90f{display:-ms-flexbox;display:flex}.orgChartPoc_3727f90f .orgTree_3727f90f .complement_3727f90f,.orgChartPoc_3727f90f .orgTree_3727f90f .line_3727f90f,.orgChartPoc_3727f90f .orgTree_3727f90f .linecontainer1_3727f90f{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:20px}.orgChartPoc_3727f90f .orgTree_3727f90f .line_3727f90f{border-left:1px solid #000}.orgChartPoc_3727f90f .orgTree_3727f90f .linecontainer2_3727f90f{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:20px}.orgChartPoc_3727f90f .orgTree_3727f90f .lineLeft_3727f90f{border-top:1px solid #000;border-top-left-radius:5px;border-left:1px solid #000}.orgChartPoc_3727f90f .orgTree_3727f90f .lineLeft_3727f90f,.orgChartPoc_3727f90f .orgTree_3727f90f .lineRight_3727f90f{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:20px}.orgChartPoc_3727f90f .orgTree_3727f90f .lineRight_3727f90f{border-top:1px solid #000;border-top-right-radius:5px;border-right:1px solid #000}", ""]);


/***/ }),

/***/ "YdYU":
/*!************************************************************************!*\
  !*** ./lib/webparts/orgChartPoc/components/OrgChartPoc.module.scss.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* tslint:disable */
__webpack_require__(/*! ./OrgChartPoc.module.css */ "dewn");
const styles = {
    orgChartPoc: 'orgChartPoc_3727f90f',
    orgTree: 'orgTree_3727f90f',
    orgTreeHeader: 'orgTreeHeader_3727f90f',
    orgTreeRoot: 'orgTreeRoot_3727f90f',
    orgTreeNodes: 'orgTreeNodes_3727f90f',
    orgTreeNode: 'orgTreeNode_3727f90f',
    orgTreeNodeAvatar: 'orgTreeNodeAvatar_3727f90f',
    orgTreeNodeName: 'orgTreeNodeName_3727f90f',
    linecontainer1: 'linecontainer1_3727f90f',
    complement: 'complement_3727f90f',
    line: 'line_3727f90f',
    linecontainer2: 'linecontainer2_3727f90f',
    lineLeft: 'lineLeft_3727f90f',
    lineRight: 'lineRight_3727f90f'
};
/* harmony default export */ __webpack_exports__["default"] = (styles);
/* tslint:enable */ 


/***/ }),

/***/ "br4S":
/*!*********************************************!*\
  !*** external "@microsoft/sp-webpart-base" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_br4S__;

/***/ }),

/***/ "cDcd":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_cDcd__;

/***/ }),

/***/ "dewn":
/*!********************************************************************!*\
  !*** ./lib/webparts/orgChartPoc/components/OrgChartPoc.module.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/postcss-loader/src??postcss!./OrgChartPoc.module.css */ "VFyW");
var loader = __webpack_require__(/*! ./node_modules/@microsoft/loader-load-themed-styles/node_modules/@microsoft/load-themed-styles/lib/index.js */ "ruv1");

if(typeof content === "string") content = [[module.i, content]];

// add the styles to the DOM
for (var i = 0; i < content.length; i++) loader.loadStyles(content[i][1], true);

if(content.locals) module.exports = content.locals;

/***/ }),

/***/ "faye":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_faye__;

/***/ }),

/***/ "gTmJ":
/*!************************************************************!*\
  !*** ./lib/webparts/orgChartPoc/components/OrgChartPoc.js ***!
  \************************************************************/
/*! exports provided: IOrgChartPocState, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IOrgChartPocState", function() { return IOrgChartPocState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return OrgChartPoc; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_orgchart_index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-orgchart/index.css */ "NOuv");
/* harmony import */ var react_orgchart_index_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_orgchart_index_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _OrgChartPoc_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./OrgChartPoc.module.scss */ "YdYU");



class IOrgChartPocState {
}
class OrgChartPoc extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
    constructor(props) {
        super(props);
        this.avatarPersonnel = (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", { width: "96", height: "96", viewBox: "0 0 96 96", xmlns: "http://www.w3.org/2000/svg" },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("defs", null,
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("rect", { id: "a", width: "96", height: "96", rx: "48" })),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", { fill: "none", "fill-rule": "evenodd" },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("use", { fill: "#E8F6FC" }),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", { d: "M62.297 53.094c1.666.416 3.034 1.302 4.101 2.656C67.466 57.104 68 58.64 68 60.36v2.89c0 1.042-.365 1.927-1.094 2.656-.729.73-1.614 1.094-2.656 1.094h-32.5c-1.042 0-1.927-.365-2.656-1.094-.73-.729-1.094-1.614-1.094-2.656v-2.89c0-1.72.534-3.256 1.602-4.61 1.067-1.354 2.434-2.24 4.101-2.656l5.547-1.406c2.448 1.77 5.208 2.708 8.281 2.812 3.386.104 6.459-.833 9.219-2.812l5.547 1.406zM48 24c2.24 0 4.323.56 6.25 1.68a12.411 12.411 0 0 1 4.57 4.57 12.227 12.227 0 0 1 1.68 6.25c0 2.24-.56 4.323-1.68 6.25a12.411 12.411 0 0 1-4.57 4.57A12.227 12.227 0 0 1 48 49c-2.24 0-4.323-.56-6.25-1.68a12.411 12.411 0 0 1-4.57-4.57 12.227 12.227 0 0 1-1.68-6.25c0-2.24.56-4.323 1.68-6.25a12.411 12.411 0 0 1 4.57-4.57A12.227 12.227 0 0 1 48 24z", stroke: "#767676", "stroke-width": "4" }))));
        this.state = {
            data: [
                {
                    name: "Child 1",
                } /*
                {
                  name: "Child 2",
                },
                {
                  name: "Child 3",
                },*/,
            ],
        };
    }
    render() {
        const { description, isDarkTheme, environmentMessage, hasTeamsContext, userDisplayName, } = this.props;
        const nodeWidth = 200;
        const marginWidth = 20;
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("section", { className: `${_OrgChartPoc_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].orgChartPoc}` },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: _OrgChartPoc_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].orgTree },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: _OrgChartPoc_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].orgTreeHeader },
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: _OrgChartPoc_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].orgTreeRoot }, "Root"),
                    this.state.data.length === 1 && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: _OrgChartPoc_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].linecontainer1 },
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: _OrgChartPoc_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].complement }),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: _OrgChartPoc_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].line }))),
                    this.state.data.length === 2 && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: _OrgChartPoc_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].linecontainer1 },
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: _OrgChartPoc_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].complement }),
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: _OrgChartPoc_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].line })),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: _OrgChartPoc_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].linecontainer2 },
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: _OrgChartPoc_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].complement }),
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: _OrgChartPoc_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].lineLeft, style: {
                                    width: nodeWidth + marginWidth * 3,
                                } }),
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: _OrgChartPoc_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].lineRight, style: {
                                    width: nodeWidth + marginWidth * 3,
                                } }),
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: _OrgChartPoc_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].complement })))),
                    this.state.data.length === 3 && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: _OrgChartPoc_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].linecontainer1 },
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: _OrgChartPoc_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].complement }),
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: _OrgChartPoc_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].line })),
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: _OrgChartPoc_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].linecontainer2 },
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: _OrgChartPoc_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].complement }),
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: _OrgChartPoc_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].lineLeft, style: {
                                    width: nodeWidth + marginWidth,
                                } }),
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: _OrgChartPoc_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].linecontainer1, style: { width: nodeWidth * this.state.data.length - 1 } },
                                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: _OrgChartPoc_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].complement, style: {
                                        borderTop: "1px solid #000",
                                        width: nodeWidth / 2 +
                                            marginWidth * this.state.data.length -
                                            1,
                                    } }),
                                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: _OrgChartPoc_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].line, style: {
                                        borderTop: "1px solid #000",
                                        width: nodeWidth / 2 +
                                            marginWidth * this.state.data.length -
                                            1,
                                    } })),
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: _OrgChartPoc_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].lineRight, style: {
                                    width: nodeWidth + marginWidth,
                                } }),
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: _OrgChartPoc_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].complement })))),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: _OrgChartPoc_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].orgTreeNodes }, this.state.data.map((node, index) => (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
                        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: _OrgChartPoc_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].orgTreeNode, style: {
                                width: nodeWidth - 1,
                                marginLeft: marginWidth,
                                marginRight: marginWidth,
                            } },
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: _OrgChartPoc_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].orgTreeNodeAvatar }, this.avatarPersonnel),
                            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: _OrgChartPoc_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].orgTreeNodeName }, node.name))))))))));
    }
}


/***/ }),

/***/ "ruv1":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/@microsoft/loader-load-themed-styles/node_modules/@microsoft/load-themed-styles/lib/index.js ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {
// Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license.
// See LICENSE in the project root for license information.
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.splitStyles = exports.detokenize = exports.clearStyles = exports.loadTheme = exports.flush = exports.configureRunMode = exports.configureLoadStyles = exports.loadStyles = void 0;
// Store the theming state in __themeState__ global scope for reuse in the case of duplicate
// load-themed-styles hosted on the page.
var _root = typeof window === 'undefined' ? global : window; // eslint-disable-line @typescript-eslint/no-explicit-any
// Nonce string to inject into script tag if one provided. This is used in CSP (Content Security Policy).
var _styleNonce = _root && _root.CSPSettings && _root.CSPSettings.nonce;
var _themeState = initializeThemeState();
/**
 * Matches theming tokens. For example, "[theme: themeSlotName, default: #FFF]" (including the quotes).
 */
var _themeTokenRegex = /[\'\"]\[theme:\s*(\w+)\s*(?:\,\s*default:\s*([\\"\']?[\.\,\(\)\#\-\s\w]*[\.\,\(\)\#\-\w][\"\']?))?\s*\][\'\"]/g;
var now = function () {
    return typeof performance !== 'undefined' && !!performance.now ? performance.now() : Date.now();
};
function measure(func) {
    var start = now();
    func();
    var end = now();
    _themeState.perf.duration += end - start;
}
/**
 * initialize global state object
 */
function initializeThemeState() {
    var state = _root.__themeState__ || {
        theme: undefined,
        lastStyleElement: undefined,
        registeredStyles: []
    };
    if (!state.runState) {
        state = __assign(__assign({}, state), { perf: {
                count: 0,
                duration: 0
            }, runState: {
                flushTimer: 0,
                mode: 0 /* sync */,
                buffer: []
            } });
    }
    if (!state.registeredThemableStyles) {
        state = __assign(__assign({}, state), { registeredThemableStyles: [] });
    }
    _root.__themeState__ = state;
    return state;
}
/**
 * Loads a set of style text. If it is registered too early, we will register it when the window.load
 * event is fired.
 * @param {string | ThemableArray} styles Themable style text to register.
 * @param {boolean} loadAsync When true, always load styles in async mode, irrespective of current sync mode.
 */
function loadStyles(styles, loadAsync) {
    if (loadAsync === void 0) { loadAsync = false; }
    measure(function () {
        var styleParts = Array.isArray(styles) ? styles : splitStyles(styles);
        var _a = _themeState.runState, mode = _a.mode, buffer = _a.buffer, flushTimer = _a.flushTimer;
        if (loadAsync || mode === 1 /* async */) {
            buffer.push(styleParts);
            if (!flushTimer) {
                _themeState.runState.flushTimer = asyncLoadStyles();
            }
        }
        else {
            applyThemableStyles(styleParts);
        }
    });
}
exports.loadStyles = loadStyles;
/**
 * Allows for customizable loadStyles logic. e.g. for server side rendering application
 * @param {(processedStyles: string, rawStyles?: string | ThemableArray) => void}
 * a loadStyles callback that gets called when styles are loaded or reloaded
 */
function configureLoadStyles(loadStylesFn) {
    _themeState.loadStyles = loadStylesFn;
}
exports.configureLoadStyles = configureLoadStyles;
/**
 * Configure run mode of load-themable-styles
 * @param mode load-themable-styles run mode, async or sync
 */
function configureRunMode(mode) {
    _themeState.runState.mode = mode;
}
exports.configureRunMode = configureRunMode;
/**
 * external code can call flush to synchronously force processing of currently buffered styles
 */
function flush() {
    measure(function () {
        var styleArrays = _themeState.runState.buffer.slice();
        _themeState.runState.buffer = [];
        var mergedStyleArray = [].concat.apply([], styleArrays);
        if (mergedStyleArray.length > 0) {
            applyThemableStyles(mergedStyleArray);
        }
    });
}
exports.flush = flush;
/**
 * register async loadStyles
 */
function asyncLoadStyles() {
    return setTimeout(function () {
        _themeState.runState.flushTimer = 0;
        flush();
    }, 0);
}
/**
 * Loads a set of style text. If it is registered too early, we will register it when the window.load event
 * is fired.
 * @param {string} styleText Style to register.
 * @param {IStyleRecord} styleRecord Existing style record to re-apply.
 */
function applyThemableStyles(stylesArray, styleRecord) {
    if (_themeState.loadStyles) {
        _themeState.loadStyles(resolveThemableArray(stylesArray).styleString, stylesArray);
    }
    else {
        registerStyles(stylesArray);
    }
}
/**
 * Registers a set theme tokens to find and replace. If styles were already registered, they will be
 * replaced.
 * @param {theme} theme JSON object of theme tokens to values.
 */
function loadTheme(theme) {
    _themeState.theme = theme;
    // reload styles.
    reloadStyles();
}
exports.loadTheme = loadTheme;
/**
 * Clear already registered style elements and style records in theme_State object
 * @param option - specify which group of registered styles should be cleared.
 * Default to be both themable and non-themable styles will be cleared
 */
function clearStyles(option) {
    if (option === void 0) { option = 3 /* all */; }
    if (option === 3 /* all */ || option === 2 /* onlyNonThemable */) {
        clearStylesInternal(_themeState.registeredStyles);
        _themeState.registeredStyles = [];
    }
    if (option === 3 /* all */ || option === 1 /* onlyThemable */) {
        clearStylesInternal(_themeState.registeredThemableStyles);
        _themeState.registeredThemableStyles = [];
    }
}
exports.clearStyles = clearStyles;
function clearStylesInternal(records) {
    records.forEach(function (styleRecord) {
        var styleElement = styleRecord && styleRecord.styleElement;
        if (styleElement && styleElement.parentElement) {
            styleElement.parentElement.removeChild(styleElement);
        }
    });
}
/**
 * Reloads styles.
 */
function reloadStyles() {
    if (_themeState.theme) {
        var themableStyles = [];
        for (var _i = 0, _a = _themeState.registeredThemableStyles; _i < _a.length; _i++) {
            var styleRecord = _a[_i];
            themableStyles.push(styleRecord.themableStyle);
        }
        if (themableStyles.length > 0) {
            clearStyles(1 /* onlyThemable */);
            applyThemableStyles([].concat.apply([], themableStyles));
        }
    }
}
/**
 * Find theme tokens and replaces them with provided theme values.
 * @param {string} styles Tokenized styles to fix.
 */
function detokenize(styles) {
    if (styles) {
        styles = resolveThemableArray(splitStyles(styles)).styleString;
    }
    return styles;
}
exports.detokenize = detokenize;
/**
 * Resolves ThemingInstruction objects in an array and joins the result into a string.
 * @param {ThemableArray} splitStyleArray ThemableArray to resolve and join.
 */
function resolveThemableArray(splitStyleArray) {
    var theme = _themeState.theme;
    var themable = false;
    // Resolve the array of theming instructions to an array of strings.
    // Then join the array to produce the final CSS string.
    var resolvedArray = (splitStyleArray || []).map(function (currentValue) {
        var themeSlot = currentValue.theme;
        if (themeSlot) {
            themable = true;
            // A theming annotation. Resolve it.
            var themedValue = theme ? theme[themeSlot] : undefined;
            var defaultValue = currentValue.defaultValue || 'inherit';
            // Warn to console if we hit an unthemed value even when themes are provided, but only if "DEBUG" is true.
            // Allow the themedValue to be undefined to explicitly request the default value.
            if (theme &&
                !themedValue &&
                console &&
                !(themeSlot in theme) &&
                "boolean" !== 'undefined' &&
                true) {
                console.warn("Theming value not provided for \"".concat(themeSlot, "\". Falling back to \"").concat(defaultValue, "\"."));
            }
            return themedValue || defaultValue;
        }
        else {
            // A non-themable string. Preserve it.
            return currentValue.rawString;
        }
    });
    return {
        styleString: resolvedArray.join(''),
        themable: themable
    };
}
/**
 * Split tokenized CSS into an array of strings and theme specification objects
 * @param {string} styles Tokenized styles to split.
 */
function splitStyles(styles) {
    var result = [];
    if (styles) {
        var pos = 0; // Current position in styles.
        var tokenMatch = void 0;
        while ((tokenMatch = _themeTokenRegex.exec(styles))) {
            var matchIndex = tokenMatch.index;
            if (matchIndex > pos) {
                result.push({
                    rawString: styles.substring(pos, matchIndex)
                });
            }
            result.push({
                theme: tokenMatch[1],
                defaultValue: tokenMatch[2] // May be undefined
            });
            // index of the first character after the current match
            pos = _themeTokenRegex.lastIndex;
        }
        // Push the rest of the string after the last match.
        result.push({
            rawString: styles.substring(pos)
        });
    }
    return result;
}
exports.splitStyles = splitStyles;
/**
 * Registers a set of style text. If it is registered too early, we will register it when the
 * window.load event is fired.
 * @param {ThemableArray} styleArray Array of IThemingInstruction objects to register.
 * @param {IStyleRecord} styleRecord May specify a style Element to update.
 */
function registerStyles(styleArray) {
    if (typeof document === 'undefined') {
        return;
    }
    var head = document.getElementsByTagName('head')[0];
    var styleElement = document.createElement('style');
    var _a = resolveThemableArray(styleArray), styleString = _a.styleString, themable = _a.themable;
    styleElement.setAttribute('data-load-themed-styles', 'true');
    if (_styleNonce) {
        styleElement.setAttribute('nonce', _styleNonce);
    }
    styleElement.appendChild(document.createTextNode(styleString));
    _themeState.perf.count++;
    head.appendChild(styleElement);
    var ev = document.createEvent('HTMLEvents');
    ev.initEvent('styleinsert', true /* bubbleEvent */, false /* cancelable */);
    ev.args = {
        newStyle: styleElement
    };
    document.dispatchEvent(ev);
    var record = {
        styleElement: styleElement,
        themableStyle: styleArray
    };
    if (themable) {
        _themeState.registeredThemableStyles.push(record);
    }
    else {
        _themeState.registeredStyles.push(record);
    }
}
//# sourceMappingURL=index.js.map
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../webpack/buildin/global.js */ "yLpj")))

/***/ }),

/***/ "yLpj":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ })

/******/ })});;
//# sourceMappingURL=org-chart-poc-web-part.js.map