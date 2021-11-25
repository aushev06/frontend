module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/tags/[slug].tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "../next-server/lib/router/utils/get-asset-path-from-route":
/*!**************************************************************************************!*\
  !*** external "next/dist/next-server/lib/router/utils/get-asset-path-from-route.js" ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ "./components/AuthDialog/AuthDialog.module.scss":
/*!******************************************************!*\
  !*** ./components/AuthDialog/AuthDialog.module.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"modal": "AuthDialog_modal__7v3QL",
	"content": "AuthDialog_content__2rIrL",
	"title": "AuthDialog_title__2ZIB8",
	"subTitle": "AuthDialog_subTitle__CL7r2",
	"text": "AuthDialog_text__1B5sd",
	"link": "AuthDialog_link__2vGxj",
	"fullWidth": "AuthDialog_fullWidth__1aRFZ",
	"scrollPaper": "AuthDialog_scrollPaper__26fNH",
	"paperScrollPaper": "AuthDialog_paperScrollPaper__2-Fzv"
};


/***/ }),

/***/ "./components/AuthDialog/index.tsx":
/*!*****************************************!*\
  !*** ./components/AuthDialog/index.tsx ***!
  \*****************************************/
/*! exports provided: AuthDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthDialog", function() { return AuthDialog; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Dialog */ "@material-ui/core/Dialog");
/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/DialogContent */ "@material-ui/core/DialogContent");
/* harmony import */ var _material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/Close */ "@material-ui/icons/Close");
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/IconButton */ "@mui/material/IconButton");
/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _AuthDialog_module_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./AuthDialog.module.scss */ "./components/AuthDialog/AuthDialog.module.scss");
/* harmony import */ var _AuthDialog_module_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_AuthDialog_module_scss__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _core_axios__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../core/axios */ "./core/axios.ts");

var _jsxFileName = "C:\\Projects\\projects\\frontend\\components\\AuthDialog\\index.tsx";










const AuthDialog = ({
  children,
  open = false,
  size = 'xs',
  onClose,
  className
}) => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_2___default.a, {
    maxWidth: 'xs',
    open: open,
    onClose: onClose,
    fullWidth: true,
    PaperProps: {
      className: _AuthDialog_module_scss__WEBPACK_IMPORTED_MODULE_8___default.a.modal
    },
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_7___default.a, {
      "aria-label": "close",
      onClick: onClose,
      sx: {
        color: theme => theme.palette.grey[500]
      },
      style: {
        alignSelf: 'flex-end',
        marginTop: 22,
        marginRight: 20,
        padding: 0
      },
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_4___default.a, {
        style: {
          fontSize: 28
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_3___default.a, {
      style: {
        paddingTop: 14,
        paddingBottom: 50
      },
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["DialogContentText"], {
        className: "mb-0",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _AuthDialog_module_scss__WEBPACK_IMPORTED_MODULE_8___default.a.content,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["Typography"], {
            className: _AuthDialog_module_scss__WEBPACK_IMPORTED_MODULE_8___default.a.title,
            children: " \u0414\u043E\u0431\u0440\u043E \u043F\u043E\u0436\u0430\u043B\u043E\u0432\u0430\u0442\u044C "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 52,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["Typography"], {
            className: _AuthDialog_module_scss__WEBPACK_IMPORTED_MODULE_8___default.a.subTitle,
            children: " \u0420\u0430\u0434\u044B \u0432\u0438\u0434\u0435\u0442\u044C \u0432\u0430\u0441 \u0441\u043D\u043E\u0432\u0430! "
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 53,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
            href: `${_core_axios__WEBPACK_IMPORTED_MODULE_10__["API_URL"]}/social/vk`,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1___default.a, {
                fullWidth: true,
                variant: 'outlined',
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                  src: "/vk.png",
                  alt: ""
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 58,
                  columnNumber: 19
                }, undefined), "\u0412\u043E\u0439\u0442\u0438 \u0447\u0435\u0440\u0435\u0437 VK"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 57,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 56,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 55,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
            href: `${_core_axios__WEBPACK_IMPORTED_MODULE_10__["API_URL"]}/social/google`,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1___default.a, {
                fullWidth: true,
                variant: 'outlined',
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                  src: "/google.png",
                  alt: ""
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 66,
                  columnNumber: 19
                }, undefined), "\u0412\u043E\u0439\u0442\u0438 \u0447\u0435\u0440\u0435\u0437 Google"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 65,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 64,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 63,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "d-flex justify-content-center",
          style: {
            marginTop: 40
          },
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__["Typography"], {
            className: _AuthDialog_module_scss__WEBPACK_IMPORTED_MODULE_8___default.a.text,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              children: ["\u0438\u043B\u0438 ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                className: _AuthDialog_module_scss__WEBPACK_IMPORTED_MODULE_8___default.a.link,
                children: "\u0441\u043E\u0437\u0434\u0430\u0442\u044C \u0430\u043A\u043A\u0430\u0443\u043D\u0442"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 75,
                columnNumber: 21
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 74,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 73,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 29,
    columnNumber: 5
  }, undefined);
};

/***/ }),

/***/ "./components/AvailableForWork/AvailableForWork.module.scss":
/*!******************************************************************!*\
  !*** ./components/AvailableForWork/AvailableForWork.module.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"checkedTitle": "AvailableForWork_checkedTitle__1byh2",
	"uncheckedTitle": "AvailableForWork_uncheckedTitle__3lWAK",
	"checked": "AvailableForWork_checked__MrihQ",
	"unchecked": "AvailableForWork_unchecked__3VDuc"
};


/***/ }),

/***/ "./components/AvailableForWork/index.tsx":
/*!***********************************************!*\
  !*** ./components/AvailableForWork/index.tsx ***!
  \***********************************************/
/*! exports provided: AvailableForWork */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AvailableForWork", function() { return AvailableForWork; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! clsx */ "clsx");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _AvailableForWork_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AvailableForWork.module.scss */ "./components/AvailableForWork/AvailableForWork.module.scss");
/* harmony import */ var _AvailableForWork_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_AvailableForWork_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Checkbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Checkbox */ "./components/Checkbox/index.tsx");

var _jsxFileName = "C:\\Projects\\projects\\frontend\\components\\AvailableForWork\\index.tsx";




const AvailableForWork = ({
  checked,
  onChange,
  setChecked,
  isLoading
}) => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: clsx__WEBPACK_IMPORTED_MODULE_2___default()('d-flex justify-content-center'),
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
      className: clsx__WEBPACK_IMPORTED_MODULE_2___default()(_AvailableForWork_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.uncheckedTitle, checked || isLoading ? _AvailableForWork_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.unchecked : _AvailableForWork_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.checked),
      onClick: () => !isLoading && setChecked(false),
      children: "\u041D\u0435\u0434\u043E\u0441\u0442\u0443\u043F\u0435\u043D"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Checkbox__WEBPACK_IMPORTED_MODULE_4__["Checkbox"], {
      checked: checked,
      onChange: onChange,
      disabled: isLoading
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
      className: clsx__WEBPACK_IMPORTED_MODULE_2___default()(_AvailableForWork_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.checkedTitle, checked && !isLoading ? _AvailableForWork_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.checked : _AvailableForWork_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.unchecked),
      onClick: () => !isLoading && setChecked(true),
      children: "\u0414\u043E\u0441\u0442\u0443\u043F\u0435\u043D \u0434\u043B\u044F \u0440\u0430\u0431\u043E\u0442\u044B"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 5
  }, undefined);
};

/***/ }),

/***/ "./components/Button/Button.module.scss":
/*!**********************************************!*\
  !*** ./components/Button/Button.module.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"button": "Button_button__3-u4P",
	"root": "Button_root__2GC52",
	"contained": "Button_contained__1SP2E",
	"containedPrimary": "Button_containedPrimary__1QOmo",
	"containedSecondary": "Button_containedSecondary__1cDV1",
	"outlined": "Button_outlined__3j9nZ",
	"outlinedPrimary": "Button_outlinedPrimary__F0k_K",
	"outlinedSecondary": "Button_outlinedSecondary__3SjDb",
	"textPrimary": "Button_textPrimary__DM1Td",
	"textSecondary": "Button_textSecondary__6YtJB"
};


/***/ }),

/***/ "./components/Button/index.tsx":
/*!*************************************!*\
  !*** ./components/Button/index.tsx ***!
  \*************************************/
/*! exports provided: Button */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return Button; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Button_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Button.module.scss */ "./components/Button/Button.module.scss");
/* harmony import */ var _Button_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Button_module_scss__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "C:\\Projects\\projects\\frontend\\components\\Button\\index.tsx";



const Button = ({
  className,
  children,
  variant,
  color,
  startIcon,
  endIcon,
  onClick,
  fullWidth,
  disabled,
  type
}) => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _Button_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.button,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Button"], {
      disabled: disabled,
      className: className,
      variant: variant,
      color: color,
      onClick: onClick,
      classes: {
        root: _Button_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.root,
        contained: _Button_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.contained,
        outlined: _Button_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.outlined,
        containedPrimary: _Button_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.containedPrimary,
        containedSecondary: _Button_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.containedSecondary,
        outlinedPrimary: _Button_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.outlinedPrimary,
        outlinedSecondary: _Button_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.outlinedSecondary,
        textPrimary: _Button_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.textPrimary,
        textSecondary: _Button_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.textSecondary
      },
      startIcon: startIcon,
      endIcon: endIcon,
      fullWidth: fullWidth || false,
      type: type,
      children: children
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 33,
    columnNumber: 9
  }, undefined);
};

/***/ }),

/***/ "./components/Checkbox/Checkbox.module.scss":
/*!**************************************************!*\
  !*** ./components/Checkbox/Checkbox.module.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"checkbox": "Checkbox_checkbox__3pwM6",
	"root": "Checkbox_root__2nPF8",
	"switchBase": "Checkbox_switchBase__1lmxS",
	"checked": "Checkbox_checked__1P1oh",
	"track": "Checkbox_track__3KleD",
	"thumb": "Checkbox_thumb__1805l"
};


/***/ }),

/***/ "./components/Checkbox/index.tsx":
/*!***************************************!*\
  !*** ./components/Checkbox/index.tsx ***!
  \***************************************/
/*! exports provided: Checkbox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Checkbox", function() { return Checkbox; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! clsx */ "clsx");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Checkbox_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Checkbox.module.scss */ "./components/Checkbox/Checkbox.module.scss");
/* harmony import */ var _Checkbox_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Checkbox_module_scss__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "C:\\Projects\\projects\\frontend\\components\\Checkbox\\index.tsx";




const Checkbox = ({
  checked,
  onChange,
  disabled
}) => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: clsx__WEBPACK_IMPORTED_MODULE_2___default()(_Checkbox_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.checkbox, 'd-flex justify-content-center'),
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Switch"], {
      className: _Checkbox_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.root,
      classes: {
        root: _Checkbox_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.root,
        switchBase: _Checkbox_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.switchBase,
        thumb: _Checkbox_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.thumb,
        track: _Checkbox_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.track,
        checked: _Checkbox_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.checked
      },
      disabled: disabled,
      checked: checked,
      onChange: onChange
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 5
  }, undefined);
};

/***/ }),

/***/ "./components/Header/Header.module.scss":
/*!**********************************************!*\
  !*** ./components/Header/Header.module.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"header": "Header_header__OkoDL",
	"backdrop": "Header_backdrop__30ZwB",
	"menuButton": "Header_menuButton__1S15R",
	"search": "Header_search__2oy33",
	"input": "Header_input__LAw5V",
	"noscroll": "Header_noscroll__2dQC0"
};


/***/ }),

/***/ "./components/Header/index.tsx":
/*!*************************************!*\
  !*** ./components/Header/index.tsx ***!
  \*************************************/
/*! exports provided: Header */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Header", function() { return Header; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! clsx */ "clsx");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ProfilePopup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ProfilePopup */ "./components/ProfilePopup/index.tsx");
/* harmony import */ var _SearchPopup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../SearchPopup */ "./components/SearchPopup/index.tsx");
/* harmony import */ var _material_ui_core_Backdrop__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Backdrop */ "@material-ui/core/Backdrop");
/* harmony import */ var _material_ui_core_Backdrop__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Backdrop__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Header_module_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Header.module.scss */ "./components/Header/Header.module.scss");
/* harmony import */ var _Header_module_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_Header_module_scss__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _AvailableForWork__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../AvailableForWork */ "./components/AvailableForWork/index.tsx");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Button */ "./components/Button/index.tsx");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _services_api_UserApi__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../services/api/UserApi */ "./services/api/UserApi.ts");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _redux_user_user_selector__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../redux/user/user.selector */ "./redux/user/user.selector.ts");
/* harmony import */ var _AuthDialog__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../AuthDialog */ "./components/AuthDialog/index.tsx");
/* harmony import */ var _utils_useAllMQ__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../utils/useAllMQ */ "./utils/useAllMQ.ts");
/* harmony import */ var _MobileProfilePopup__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../MobileProfilePopup */ "./components/MobileProfilePopup/index.tsx");
/* harmony import */ var _material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/core/Avatar */ "@material-ui/core/Avatar");
/* harmony import */ var _material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _NotificationDropdown__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../NotificationDropdown */ "./components/NotificationDropdown/index.tsx");

var _jsxFileName = "C:\\Projects\\projects\\frontend\\components\\Header\\index.tsx";


















const Header = ({
  onClickHamburger
}) => {
  var _user$data;

  const {
    0: isLoading,
    1: setIsLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const user = Object(react_redux__WEBPACK_IMPORTED_MODULE_12__["useSelector"])(_redux_user_user_selector__WEBPACK_IMPORTED_MODULE_13__["selectUserState"]);
  const mq = Object(_utils_useAllMQ__WEBPACK_IMPORTED_MODULE_15__["useAllMQ"])();
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_10__["useRouter"])();
  const {
    0: checked,
    1: setChecked
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])((user === null || user === void 0 ? void 0 : (_user$data = user.data) === null || _user$data === void 0 ? void 0 : _user$data.ready_for_work) || false);
  const {
    0: isSearch,
    1: setIsSearch
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: isMobilePopup,
    1: setIsMobilePopup
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: isVisible,
    1: setIsVisible
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: searchInput,
    1: setSearchInput
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('');
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    isSearch || isMobilePopup ? document.body.classList.add(_Header_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.noscroll) : document.body.classList.remove(_Header_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.noscroll);
  }, [isSearch, isMobilePopup]);

  const onChangeCheckbox = event => {
    handleChangeCheckbox(event.target.checked);
  };

  const onOpenSearch = () => {
    setIsSearch(true);
  };

  const onCloseSearch = () => {
    setSearchInput('');
    setIsSearch(false);
  };

  const handleChangeCheckbox = flag => {
    var _user$data2;

    setChecked(flag);
    setIsLoading(true);
    _services_api_UserApi__WEBPACK_IMPORTED_MODULE_11__["UserApi"].updateProfile({
      ready_for_work: flag ? true : false
    }, (_user$data2 = user.data) === null || _user$data2 === void 0 ? void 0 : _user$data2.id).then(r => {
      setChecked(flag);
    }).catch(err => {
      var _err$response, _err$response$data;

      Object.values(err === null || err === void 0 ? void 0 : (_err$response = err.response) === null || _err$response === void 0 ? void 0 : (_err$response$data = _err$response.data) === null || _err$response$data === void 0 ? void 0 : _err$response$data.errors).forEach(e => {
        alert(e);
      });
      setChecked(false);
    }).finally(() => setIsLoading(false));
  };

  const handleClick = () => {
    var _user$data3;

    if (!(user !== null && user !== void 0 && (_user$data3 = user.data) !== null && _user$data3 !== void 0 && _user$data3.id)) {
      setIsVisible(true);
      return;
    }

    router.push('/write');
  };

  if (isSearch) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("header", {
      className: clsx__WEBPACK_IMPORTED_MODULE_3___default()(_Header_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.header, 'd-flex'),
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
        href: '/',
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            className: _Header_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.logo,
            src: "/logo.svg",
            alt: "Logo"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 86,
            columnNumber: 24
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: clsx__WEBPACK_IMPORTED_MODULE_3___default()(_Header_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.search, 'd-flex align-items-center w100'),
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          className: "mr-15",
          src: "/search.svg",
          alt: "\u041F\u043E\u0438\u0441\u043A"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 89,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          className: _Header_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.input,
          placeholder: "\u041F\u043E\u0438\u0441\u043A",
          value: searchInput,
          onChange: e => setSearchInput(e.target.value)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          onClick: onCloseSearch,
          className: "ml-auto cursor-pointer",
          src: "/close.svg",
          alt: "\u0417\u0430\u043A\u0440\u044B\u0442\u044C"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 96,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Backdrop__WEBPACK_IMPORTED_MODULE_6___default.a, {
        classes: {
          root: _Header_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.backdrop
        },
        open: isSearch,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_SearchPopup__WEBPACK_IMPORTED_MODULE_5__["default"], {
          handleClick: onCloseSearch,
          isSearch: isSearch,
          searchInput: searchInput
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 99,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 13
    }, undefined);
  }

  if (isMobilePopup) {
    var _user$data4, _user$data5;

    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("header", {
      className: clsx__WEBPACK_IMPORTED_MODULE_3___default()(_Header_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.header, 'd-flex justify-content-between'),
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "d-flex align-items-center",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          type: "button",
          className: _Header_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.menuButton,
          onClick: onClickHamburger,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
            viewBox: "0 0 26 11",
            xmlns: "http://www.w3.org/2000/svg",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
              d: "M1 1H16.5M1 10H24.5",
              strokeWidth: "2",
              strokeLinecap: "round"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 111,
              columnNumber: 29
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 110,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 109,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
          href: '/',
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              className: _Header_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.logo,
              src: "/logo.svg",
              alt: "Logo"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 115,
              columnNumber: 28
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 115,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 114,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          className: "ml-10 cursor-pointer",
          src: "/search.svg",
          alt: "\u041F\u043E\u0438\u0441\u043A",
          onClick: onOpenSearch
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 117,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: 'ml-10',
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_17___default.a, {
            alt: user === null || user === void 0 ? void 0 : (_user$data4 = user.data) === null || _user$data4 === void 0 ? void 0 : _user$data4.name,
            src: user === null || user === void 0 ? void 0 : (_user$data5 = user.data) === null || _user$data5 === void 0 ? void 0 : _user$data5.avatar,
            onClick: () => setIsMobilePopup(false)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 121,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 120,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Backdrop__WEBPACK_IMPORTED_MODULE_6___default.a, {
          classes: {
            root: _Header_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.backdrop
          },
          open: isMobilePopup,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_MobileProfilePopup__WEBPACK_IMPORTED_MODULE_16__["default"], {
            checked: checked,
            onChange: onChangeCheckbox,
            setChecked: handleChangeCheckbox,
            isLoading: isLoading
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 124,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 123,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 13
    }, undefined);
  }

  if (mq.isXS) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("header", {
      className: clsx__WEBPACK_IMPORTED_MODULE_3___default()(_Header_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.header, 'd-flex justify-content-between'),
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "d-flex align-items-center justify-content-between w100",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          type: "button",
          className: _Header_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.menuButton,
          onClick: onClickHamburger,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
            viewBox: "0 0 26 11",
            xmlns: "http://www.w3.org/2000/svg",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
              d: "M1 1H16.5M1 10H24.5",
              strokeWidth: "2",
              strokeLinecap: "round"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 139,
              columnNumber: 25
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 138,
            columnNumber: 21
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 137,
          columnNumber: 17
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
          href: '/',
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              className: _Header_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.logo,
              src: "/logo.svg",
              alt: "Logo"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 144,
              columnNumber: 24
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 144,
            columnNumber: 21
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 143,
          columnNumber: 17
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          className: "ml-10 cursor-pointer",
          src: "/search.svg",
          alt: "\u041F\u043E\u0438\u0441\u043A",
          onClick: onOpenSearch
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 146,
          columnNumber: 17
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_NotificationDropdown__WEBPACK_IMPORTED_MODULE_18__["NotificationDropdown"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 147,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ProfilePopup__WEBPACK_IMPORTED_MODULE_4__["default"], {
            onClick: () => {
              var _user$data6;

              return !(user !== null && user !== void 0 && (_user$data6 = user.data) !== null && _user$data6 !== void 0 && _user$data6.id) ? setIsVisible(true) : setIsMobilePopup(true);
            },
            user: user === null || user === void 0 ? void 0 : user.data
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 149,
            columnNumber: 21
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 148,
          columnNumber: 17
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 136,
        columnNumber: 13
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_AuthDialog__WEBPACK_IMPORTED_MODULE_14__["AuthDialog"], {
        size: 'lg',
        onClose: () => {
          setIsVisible(false);
        },
        open: isVisible
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 153,
        columnNumber: 13
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 18
    }, undefined);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("header", {
    className: clsx__WEBPACK_IMPORTED_MODULE_3___default()(_Header_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.header, 'd-flex justify-content-between'),
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "d-flex align-items-center",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
        href: '/',
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            className: _Header_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.logo,
            src: "/logo.svg",
            alt: "Logo"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 161,
            columnNumber: 24
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 161,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 160,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
        href: "/specialists",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          className: "d-flex align-items-center ml-45",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            className: "mr-10",
            src: "/users.svg",
            alt: "\u0421\u043F\u0435\u0446\u0438\u0430\u043B\u0438\u0441\u0442\u044B"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 165,
            columnNumber: 25
          }, undefined), "\u0421\u043F\u0435\u0446\u0438\u0430\u043B\u0438\u0441\u0442\u044B"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 164,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 163,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "d-flex align-items-center",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_AvailableForWork__WEBPACK_IMPORTED_MODULE_8__["AvailableForWork"], {
        checked: checked,
        onChange: onChangeCheckbox,
        setChecked: handleChangeCheckbox,
        isLoading: isLoading
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 171,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
        className: "ml-45 cursor-pointer",
        src: "/search.svg",
        alt: "\u041F\u043E\u0438\u0441\u043A",
        onClick: onOpenSearch
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 173,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_NotificationDropdown__WEBPACK_IMPORTED_MODULE_18__["NotificationDropdown"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 174,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "ml-35",
        children: user.data && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ProfilePopup__WEBPACK_IMPORTED_MODULE_4__["default"], {
          user: user.data
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 176,
          columnNumber: 35
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 175,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Button__WEBPACK_IMPORTED_MODULE_9__["Button"], {
        onClick: handleClick,
        variant: "contained",
        color: "secondary",
        className: "ml-30",
        children: "\u041D\u0430\u043F\u0438\u0441\u0430\u0442\u044C"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 178,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 170,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_AuthDialog__WEBPACK_IMPORTED_MODULE_14__["AuthDialog"], {
      size: 'xs',
      onClose: () => {
        setIsVisible(false);
      },
      open: isVisible
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 184,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 158,
    columnNumber: 9
  }, undefined);
};

/***/ }),

/***/ "./components/LikeBlock/LikeBlock.module.scss":
/*!****************************************************!*\
  !*** ./components/LikeBlock/LikeBlock.module.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"likeBlock": "LikeBlock_likeBlock__X8-Nx",
	"upBlock": "LikeBlock_upBlock__1hKZ5",
	"downBlock": "LikeBlock_downBlock__1vGGi",
	"likeBlockFull": "LikeBlock_likeBlockFull__1wjNM",
	"likeBlockMini": "LikeBlock_likeBlockMini__2HRzK",
	"rotate": "LikeBlock_rotate__19N1Z",
	"likeVoted": "LikeBlock_likeVoted__2xiaJ",
	"dislikeVoted": "LikeBlock_dislikeVoted__2SiMc",
	"noVotes": "LikeBlock_noVotes__rcdRJ"
};


/***/ }),

/***/ "./components/LikeBlock/index.tsx":
/*!****************************************!*\
  !*** ./components/LikeBlock/index.tsx ***!
  \****************************************/
/*! exports provided: LikeBlock */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LikeBlock", function() { return LikeBlock; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ "clsx");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _LikeBlock_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LikeBlock.module.scss */ "./components/LikeBlock/LikeBlock.module.scss");
/* harmony import */ var _LikeBlock_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_LikeBlock_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _icons_ThumbUpIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../icons/ThumbUpIcon */ "./components/icons/ThumbUpIcon.tsx");

var _jsxFileName = "C:\\Projects\\projects\\frontend\\components\\LikeBlock\\index.tsx";



const LikeBlock = ({
  mode,
  likes,
  dislikes,
  vote,
  onChange
}) => {
  const onThumbUpClick = () => {
    if (vote === 'like') {
      onChange({
        likes: likes - 1,
        dislikes,
        vote: undefined
      });
    } else if (vote === 'dislike') {
      onChange({
        likes: likes + 1,
        dislikes: dislikes - 1,
        vote: 'like'
      });
    } else {
      onChange({
        likes: likes + 1,
        dislikes,
        vote: 'like'
      });
    }
  };

  const onThumbDownClick = () => {
    if (vote === 'like') {
      onChange({
        likes: likes - 1,
        dislikes: dislikes + 1,
        vote: 'dislike'
      });
    } else if (vote === 'dislike') {
      onChange({
        likes,
        dislikes: dislikes - 1,
        vote: undefined
      });
    } else {
      onChange({
        likes,
        dislikes: dislikes + 1,
        vote: 'dislike'
      });
    }
  };

  const {
    likeVoted,
    dislikeVoted,
    noVotes,
    likeBlock,
    likeBlockFull,
    likeBlockMini,
    upBlock,
    downBlock,
    rotate
  } = _LikeBlock_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a;
  const thumbUpClassName = vote === 'like' ? likeVoted : noVotes;
  const thumbDownClassName = vote === 'dislike' ? dislikeVoted : noVotes;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: likeBlock,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: mode === 'full' ? likeBlockFull : likeBlockMini,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: clsx__WEBPACK_IMPORTED_MODULE_1___default()(upBlock, thumbUpClassName),
        onClick: onThumbUpClick,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_icons_ThumbUpIcon__WEBPACK_IMPORTED_MODULE_3__["ThumbUpIcon"], {
          className: thumbUpClassName
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          children: likes
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: clsx__WEBPACK_IMPORTED_MODULE_1___default()(downBlock, thumbDownClassName),
        onClick: onThumbDownClick,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_icons_ThumbUpIcon__WEBPACK_IMPORTED_MODULE_3__["ThumbUpIcon"], {
          className: clsx__WEBPACK_IMPORTED_MODULE_1___default()(thumbDownClassName, rotate)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          children: dislikes
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 56,
    columnNumber: 5
  }, undefined);
};

/***/ }),

/***/ "./components/LoadMore/LoadMore.module.scss":
/*!**************************************************!*\
  !*** ./components/LoadMore/LoadMore.module.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"loadMore": "LoadMore_loadMore__3BLtj",
	"button": "LoadMore_button__rIgW5"
};


/***/ }),

/***/ "./components/LoadMore/index.tsx":
/*!***************************************!*\
  !*** ./components/LoadMore/index.tsx ***!
  \***************************************/
/*! exports provided: LoadMore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadMore", function() { return LoadMore; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Button */ "./components/Button/index.tsx");
/* harmony import */ var _LoadMore_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./LoadMore.module.scss */ "./components/LoadMore/LoadMore.module.scss");
/* harmony import */ var _LoadMore_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_LoadMore_module_scss__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "C:\\Projects\\projects\\frontend\\components\\LoadMore\\index.tsx";



const LoadMore = ({
  onClick
}) => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _LoadMore_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.loadMore,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Button__WEBPACK_IMPORTED_MODULE_2__["Button"], {
      onClick: onClick,
      className: _LoadMore_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.button,
      variant: "text",
      children: "\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u0435\u0449\u0435"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 5
  }, undefined);
};

/***/ }),

/***/ "./components/MenuList/MenuList.module.scss":
/*!**************************************************!*\
  !*** ./components/MenuList/MenuList.module.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"button": "MenuList_button__QXTIt",
	"item": "MenuList_item__1bndt",
	"newCount": "MenuList_newCount__2yPme",
	"icon": "MenuList_icon__2dNHI"
};


/***/ }),

/***/ "./components/MenuList/index.tsx":
/*!***************************************!*\
  !*** ./components/MenuList/index.tsx ***!
  \***************************************/
/*! exports provided: MenuList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuList", function() { return MenuList; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ "clsx");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Button */ "./components/Button/index.tsx");
/* harmony import */ var _MenuList_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./MenuList.module.scss */ "./components/MenuList/MenuList.module.scss");
/* harmony import */ var _MenuList_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_MenuList_module_scss__WEBPACK_IMPORTED_MODULE_5__);

var _jsxFileName = "C:\\Projects\\projects\\frontend\\components\\MenuList\\index.tsx";





const MenuList = ({
  items
}) => {
  const handleClick = item => {
    if (item.onClick) {
      item.onClick();
    }
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
    className: "mb-40",
    children: items.map(item => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
      className: _MenuList_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.item,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
        href: item.onClick ? '#' : item.url,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Button__WEBPACK_IMPORTED_MODULE_4__["Button"], {
            className: clsx__WEBPACK_IMPORTED_MODULE_1___default()('w100 justify-content-between', _MenuList_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.button),
            variant: item.isActive ? 'contained' : 'text',
            color: "primary",
            startIcon: item.icon && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              className: _MenuList_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.icon,
              src: item.icon
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 31,
              columnNumber: 57
            }, undefined),
            endIcon: item.hasMore && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              src: "/dots.svg"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 32,
              columnNumber: 58
            }, undefined),
            onClick: () => handleClick(item),
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              className: "mr-auto",
              children: [item.name, item.newCount ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                className: _MenuList_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.newCount,
                children: ["+", item.newCount]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 37,
                columnNumber: 38
              }, undefined) : '']
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 35,
              columnNumber: 17
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 27,
            columnNumber: 29
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 25
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 21
      }, undefined)
    }, item.url + item.name, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 17
    }, undefined))
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 9
  }, undefined);
};

/***/ }),

/***/ "./components/MiniPost/MiniPost.module.scss":
/*!**************************************************!*\
  !*** ./components/MiniPost/MiniPost.module.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"post": "MiniPost_post__1FLAo",
	"info": "MiniPost_info__1P4SU",
	"user": "MiniPost_user__1gM68",
	"user_avatar": "MiniPost_user_avatar__22_eR",
	"user_name": "MiniPost_user_name__Pt9Ob",
	"time": "MiniPost_time__25l6v",
	"tags": "MiniPost_tags__1lxia",
	"tag": "MiniPost_tag__2sYnc",
	"image": "MiniPost_image__1JjKR",
	"title": "MiniPost_title__2mQie",
	"description": "MiniPost_description__16Ce_",
	"popularity": "MiniPost_popularity__1lhdW",
	"popularity_left": "MiniPost_popularity_left__1qNhl",
	"comments": "MiniPost_comments__3qlRE",
	"views": "MiniPost_views__2fYxN",
	"comments_count": "MiniPost_comments_count__17kIL",
	"views_count": "MiniPost_views_count__1103N"
};


/***/ }),

/***/ "./components/MiniPost/index.tsx":
/*!***************************************!*\
  !*** ./components/MiniPost/index.tsx ***!
  \***************************************/
/*! exports provided: MiniPost */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MiniPost", function() { return MiniPost; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _LikeBlock__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../LikeBlock */ "./components/LikeBlock/index.tsx");
/* harmony import */ var _MiniPost_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./MiniPost.module.scss */ "./components/MiniPost/MiniPost.module.scss");
/* harmony import */ var _MiniPost_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_MiniPost_module_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _PastTimeLabel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../PastTimeLabel */ "./components/PastTimeLabel/index.tsx");
/* harmony import */ var _UserViewOnContent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../UserViewOnContent */ "./components/UserViewOnContent/index.tsx");
/* harmony import */ var _ViewsAndComments__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../ViewsAndComments */ "./components/ViewsAndComments/index.tsx");

var _jsxFileName = "C:\\Projects\\projects\\frontend\\components\\MiniPost\\index.tsx";







const MiniPost = ({
  postData,
  onSetLike
}) => {
  const {
    user,
    title,
    time,
    tags,
    imageUrl,
    description,
    commentsCount,
    viewsCount,
    likesCount,
    dislikesCount,
    slug,
    vote,
    id
  } = postData;
  const [likesAndDislikes, setLikesAndDislikes] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState({
    likes: likesCount,
    dislikes: dislikesCount,
    vote
  });

  const handleSetLike = like => {
    setLikesAndDislikes(like);
    onSetLike(id, like.vote);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _MiniPost_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.post,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _MiniPost_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.info,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_UserViewOnContent__WEBPACK_IMPORTED_MODULE_6__["UserViewOnContent"], {
        user: user
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_PastTimeLabel__WEBPACK_IMPORTED_MODULE_5__["PastTimeLabel"], {
        time: time.getTime(),
        leftSidePoint: true
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _MiniPost_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.tags,
        children: tags.map(tag => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          className: _MiniPost_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.tag,
          children: ["#", tag]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 13
        }, undefined))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 7
    }, undefined), postData.imageUrl && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
      className: _MiniPost_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.image,
      src: imageUrl,
      alt: "\u0417\u0434\u0435\u0441\u044C \u0434\u043E\u043B\u0436\u043D\u0430 \u0431\u044B\u043B\u0430 \u0431\u044B\u0442\u044C \u043A\u0430\u0440\u0442\u0438\u043D\u043A\u0430, \u043D\u043E \u0435\u0451 \u043D\u0435\u0442..."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 29
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
      className: _MiniPost_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.title,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
        href: `/post/${slug}`,
        children: title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      className: _MiniPost_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.description,
      children: description
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _MiniPost_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.popularity,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _MiniPost_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.popularity_left,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ViewsAndComments__WEBPACK_IMPORTED_MODULE_7__["ViewsAndComments"], {
          comments: commentsCount,
          views: viewsCount,
          mode: "mini"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 84,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _MiniPost_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.popularity_right,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_LikeBlock__WEBPACK_IMPORTED_MODULE_3__["LikeBlock"], {
          vote: likesAndDislikes.vote,
          likes: likesAndDislikes.likes,
          dislikes: likesAndDislikes.dislikes,
          mode: "full",
          onChange: handleSetLike
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 87,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 67,
    columnNumber: 5
  }, undefined);
};

/***/ }),

/***/ "./components/MobileProfilePopup/MobileProfilePopup.module.scss":
/*!**********************************************************************!*\
  !*** ./components/MobileProfilePopup/MobileProfilePopup.module.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"container": "MobileProfilePopup_container__2IHbq",
	"header": "MobileProfilePopup_header__3HYXT",
	"header_profile": "MobileProfilePopup_header_profile__2jkyB",
	"name": "MobileProfilePopup_name__8geuS",
	"available": "MobileProfilePopup_available__3CBgU",
	"section2": "MobileProfilePopup_section2__5I515",
	"body": "MobileProfilePopup_body__1trbx",
	"divider": "MobileProfilePopup_divider__3Wdd9",
	"searchTitle": "MobileProfilePopup_searchTitle__MtoGm",
	"searchTitleInner": "MobileProfilePopup_searchTitleInner__2arQN",
	"searchItems": "MobileProfilePopup_searchItems__2INb7",
	"searchItem": "MobileProfilePopup_searchItem__34-h4",
	"showAll": "MobileProfilePopup_showAll__11ttt",
	"footer": "MobileProfilePopup_footer__l2qQh"
};


/***/ }),

/***/ "./components/MobileProfilePopup/index.tsx":
/*!*************************************************!*\
  !*** ./components/MobileProfilePopup/index.tsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _MobileProfilePopup_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MobileProfilePopup.module.scss */ "./components/MobileProfilePopup/MobileProfilePopup.module.scss");
/* harmony import */ var _MobileProfilePopup_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_MobileProfilePopup_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! clsx */ "clsx");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _redux_user_user_selector__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../redux/user/user.selector */ "./redux/user/user.selector.ts");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Button */ "./components/Button/index.tsx");
/* harmony import */ var _AvailableForWork__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../AvailableForWork */ "./components/AvailableForWork/index.tsx");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_10__);

var _jsxFileName = "C:\\Projects\\projects\\frontend\\components\\MobileProfilePopup\\index.tsx";










const mockup = {
  authors: [{
    id: 1,
    name: 'Харца Лелович'
  }, {
    id: 2,
    name: 'Нахал Ещетотович'
  }],
  articles: [{
    id: 3,
    name: 'Соха-подкаст на Ingternet'
  }, {
    id: 4,
    name: 'Ха ха ха, говорю я всем, кому не смешно!'
  }, {
    id: 5,
    name: 'Я сижу на кухне, хаваю борщь'
  }, {
    id: 6,
    name: 'Я сижу на кухне, хаваю борщь'
  }],
  tags: [{
    id: 7,
    name: 'Соха-подкаст на Ingternet'
  }],
  comments: [{
    id: 8,
    name: 'Соха-подкаст на Ingternet'
  }],
  podcasts: []
};

const MobileProfilePopup = ({
  checked,
  setChecked,
  isLoading,
  onChange
}) => {
  const user = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["useSelector"])(_redux_user_user_selector__WEBPACK_IMPORTED_MODULE_6__["selectUserState"])['data'];
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_10__["useRouter"])();

  const handleClick = () => {
    router.push('/write');
  };

  const onLogout = () => {
    var _window;

    if ((_window = window) !== null && _window !== void 0 && _window.confirm('Вы действительно хотите покинуть сайт ?')) {
      document.cookie = 'auth_token' + '=; Max-Age=0';
      localStorage.removeItem('token');
      location.href = '/';
    }
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _MobileProfilePopup_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.container,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _MobileProfilePopup_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.body,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _MobileProfilePopup_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.header,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _MobileProfilePopup_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.header_profile,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Avatar"], {
            className: clsx__WEBPACK_IMPORTED_MODULE_3___default()('cursor-pointer', _MobileProfilePopup_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.root),
            alt: user === null || user === void 0 ? void 0 : user.name,
            src: user === null || user === void 0 ? void 0 : user.avatar
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 87,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Typography"], {
            className: _MobileProfilePopup_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.name,
            children: user.name
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 88,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Button__WEBPACK_IMPORTED_MODULE_7__["Button"], {
          onClick: handleClick,
          variant: "contained",
          color: "secondary",
          className: "mt-10",
          children: "\u041D\u0430\u043F\u0438\u0441\u0430\u0442\u044C"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 91,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: clsx__WEBPACK_IMPORTED_MODULE_3___default()('mt-15', _MobileProfilePopup_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.available),
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_AvailableForWork__WEBPACK_IMPORTED_MODULE_8__["AvailableForWork"], {
          checked: checked,
          onChange: onChange,
          setChecked: setChecked,
          isLoading: isLoading
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 97,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: clsx__WEBPACK_IMPORTED_MODULE_3___default()(_MobileProfilePopup_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.section2, 'd-flex flex-column'),
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
          href: `/profile/${user.id}?type=articles`,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            className: "mb-3",
            children: "\u0421\u0442\u0430\u0442\u044C\u0438"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 101,
            columnNumber: 70
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 101,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
          href: `/profile/${user.id}?type=drafts`,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            className: "mb-3",
            children: "\u0427\u0435\u0440\u043D\u043E\u0432\u0438\u043A\u0438"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 102,
            columnNumber: 68
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 102,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
          href: '/profile',
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            className: "mb-3",
            children: "\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 103,
            columnNumber: 45
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 103,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Divider"], {
        className: _MobileProfilePopup_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.divider
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
        onClick: onLogout,
        className: clsx__WEBPACK_IMPORTED_MODULE_3___default()(_MobileProfilePopup_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.section2, 'd-flex flex-column'),
        children: "\u0412\u044B\u0439\u0442\u0438"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 83,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (MobileProfilePopup);

/***/ }),

/***/ "./components/NavigationDrawer/Navigation.module.scss":
/*!************************************************************!*\
  !*** ./components/NavigationDrawer/Navigation.module.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"paper": "Navigation_paper__1a7Lb",
	"root": "Navigation_root__M74wt",
	"mainList": "Navigation_mainList__RiOX3",
	"item": "Navigation_item__24N8Q",
	"mainItemBoldText": "Navigation_mainItemBoldText__2Ia4F",
	"closeButton": "Navigation_closeButton__2Qn4N",
	"closeIcon": "Navigation_closeIcon__2o4Kg",
	"logout": "Navigation_logout__1YNSf"
};


/***/ }),

/***/ "./components/NavigationDrawer/index.tsx":
/*!***********************************************!*\
  !*** ./components/NavigationDrawer/index.tsx ***!
  \***********************************************/
/*! exports provided: NavigationDrawer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationDrawer", function() { return NavigationDrawer; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Navigation_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Navigation.module.scss */ "./components/NavigationDrawer/Navigation.module.scss");
/* harmony import */ var _Navigation_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_Navigation_module_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _redux_user_user_selector__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../redux/user/user.selector */ "./redux/user/user.selector.ts");
/* harmony import */ var _SideBlock__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../SideBlock */ "./components/SideBlock/index.tsx");
/* harmony import */ var _MenuList__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../MenuList */ "./components/MenuList/index.tsx");
/* harmony import */ var _Tags__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../Tags */ "./components/Tags/index.tsx");
/* harmony import */ var _redux_directory_directory_selector__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../redux/directory/directory.selector */ "./redux/directory/directory.selector.ts");

var _jsxFileName = "C:\\Projects\\projects\\frontend\\components\\NavigationDrawer\\index.tsx";











const meelz = [{
  title: 'Chefs',
  link: '/chefs'
}, {
  title: 'Delivery Menu',
  link: '/menu'
}, {
  title: 'Recipe Boxes',
  link: '/recipes'
}, {
  title: 'Chefs Table',
  link: '/chefs-table'
}, {
  title: 'Store',
  link: '/chefs-store'
}, {
  title: 'Masterclasses',
  link: '/master-classes'
}];
const about = [{
  title: 'About Us',
  link: '/about'
}, {
  title: 'Career',
  link: '/career'
}, {
  title: 'FAQs',
  link: '/faq'
}, {
  title: 'Contact us',
  link: '/contact_us'
}];
const NavigationDrawer = ({
  menuOpened,
  onClose
}) => {
  const user = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["useSelector"])(_redux_user_user_selector__WEBPACK_IMPORTED_MODULE_7__["selectUserState"])['data'];
  const {
    0: selectedThemes,
    1: setSelectedThemes
  } = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])([]);
  const themes = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["useSelector"])(_redux_directory_directory_selector__WEBPACK_IMPORTED_MODULE_11__["selectThemesState"]);
  const categories = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["useSelector"])(_redux_directory_directory_selector__WEBPACK_IMPORTED_MODULE_11__["selectCategoriesState"]);
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["useDispatch"])();

  const handleLogout = () => {
    if (false) {}
  };

  const handleSelectTheme = async t => {
    setSelectedThemes(() => [...selectedThemes, t]);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Drawer"], {
    elevation: 0,
    anchor: "left",
    classes: {
      paper: _Navigation_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.paper
    },
    open: menuOpened,
    onClose: onClose,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
      className: _Navigation_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.closeButton,
      onClick: onClose,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        className: _Navigation_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.closeIcon
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("nav", {
      className: _Navigation_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.root,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
        href: "/specialists",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          className: "d-flex mb-3 ml-10",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            className: "mr-10",
            src: "/users.svg",
            alt: "\u0421\u043F\u0435\u0446\u0438\u0430\u043B\u0438\u0441\u0442\u044B"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 92,
            columnNumber: 13
          }, undefined), "\u0421\u043F\u0435\u0446\u0438\u0430\u043B\u0438\u0441\u0442\u044B"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 91,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_SideBlock__WEBPACK_IMPORTED_MODULE_8__["SideBlock"], {
        name: "\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u0438",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_MenuList__WEBPACK_IMPORTED_MODULE_9__["MenuList"], {
          items: categories.map(c => ({
            name: c.name,
            url: `/tags/${c.slug}`,
            icon: `/${c.slug}.png`
          }))
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 98,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_SideBlock__WEBPACK_IMPORTED_MODULE_8__["SideBlock"], {
        name: "\u0422\u0435\u043C\u044B",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Tags__WEBPACK_IMPORTED_MODULE_10__["Tags"], {
          items: themes,
          handleSelect: handleSelectTheme,
          selectedItems: selectedThemes
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 107,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 9
      }, undefined), user && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _Navigation_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.logout,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Divider"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 115,
          columnNumber: 13
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["MenuItem"], {
            className: _Navigation_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.item,
            onClick: handleLogout,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2___default.a, {
                variant: "body1",
                children: "Logout"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 119,
                columnNumber: 19
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 118,
              columnNumber: 17
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 117,
            columnNumber: 15
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 116,
          columnNumber: 13
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 114,
        columnNumber: 11
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 84,
    columnNumber: 5
  }, undefined);
};

/***/ }),

/***/ "./components/NotificationDropdown/NotificationDropdown.module.scss":
/*!**************************************************************************!*\
  !*** ./components/NotificationDropdown/NotificationDropdown.module.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"notification": "NotificationDropdown_notification___fBeh",
	"notificationList": "NotificationDropdown_notificationList__1Jzgw",
	"listContent": "NotificationDropdown_listContent__1WEVo",
	"title": "NotificationDropdown_title__34rIP",
	"notificationPopup": "NotificationDropdown_notificationPopup__7c0q4",
	"item": "NotificationDropdown_item__sclOo",
	"avatar": "NotificationDropdown_avatar__17sd5",
	"likeBlock": "NotificationDropdown_likeBlock__2YIsX"
};


/***/ }),

/***/ "./components/NotificationDropdown/index.tsx":
/*!***************************************************!*\
  !*** ./components/NotificationDropdown/index.tsx ***!
  \***************************************************/
/*! exports provided: NotificationDropdown */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationDropdown", function() { return NotificationDropdown; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _NotificationDropdown_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./NotificationDropdown.module.scss */ "./components/NotificationDropdown/NotificationDropdown.module.scss");
/* harmony import */ var _NotificationDropdown_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_NotificationDropdown_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _redux_user_user_selector__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../redux/user/user.selector */ "./redux/user/user.selector.ts");
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./item */ "./components/NotificationDropdown/item.tsx");


var _jsxFileName = "C:\\Projects\\projects\\frontend\\components\\NotificationDropdown\\index.tsx";






const NotificationDropdown = () => {
  const [anchorEl, setAnchorEl] = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(null);
  const open = Boolean(anchorEl);
  const notifications = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(_redux_user_user_selector__WEBPACK_IMPORTED_MODULE_5__["selectUserNotifications"]);

  const toggleOpenPopup = event => {
    console.log(1230);
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null); // (async (): Promise<void> => {
    //   await Axios.put(`${Endpoints.NOTIFICATIONS}/read`);
    // })();
    //
    // const newItemRead = newItem.map((item) => {
    //   if (item.readAt === null) {
    //     return { ...item, readAt: new Date() };
    //   }
    //   return item;
    // });
    // setNewItem(newItemRead);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _NotificationDropdown_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.notification,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["IconButton"], {
        onClick: toggleOpenPopup,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          className: "ml-10 cursor-pointer",
          src: "/notifications.svg",
          alt: "\u0423\u0432\u0435\u0434\u043E\u043C\u043B\u0435\u043D\u0438\u044F"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Popover"], {
      elevation: 0,
      classes: {
        paper: _NotificationDropdown_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.notificationPopup
      },
      onClose: handleClose,
      anchorEl: anchorEl,
      anchorOrigin: {
        vertical: 'bottom',
        horizontal: 'left'
      },
      transformOrigin: {
        vertical: 'top',
        horizontal: 'center'
      },
      open: open,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "pl-25 pr-25 pb-25",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
          className: _NotificationDropdown_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.title,
          variant: "overline",
          display: "block",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("b", {
            className: "opacity-6",
            children: "\u0423\u0432\u0435\u0434\u043E\u043C\u043B\u0435\u043D\u0438\u044F"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 66,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _NotificationDropdown_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.notificationList,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["List"], {
            children: notifications.length ? notifications.map(notification => {
              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_item__WEBPACK_IMPORTED_MODULE_6__["default"], {
                  item: notification
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 75,
                  columnNumber: 44
                }, undefined)
              }, notification.id, false, {
                fileName: _jsxFileName,
                lineNumber: 74,
                columnNumber: 41
              }, undefined);
            }) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "mb-40 mt-30",
              children: "NOT FOUND"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 80,
              columnNumber: 33
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 70,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 13
    }, undefined)]
  }, void 0, true);
};

/***/ }),

/***/ "./components/NotificationDropdown/item.tsx":
/*!**************************************************!*\
  !*** ./components/NotificationDropdown/item.tsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Item; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _NotificationDropdown_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NotificationDropdown.module.scss */ "./components/NotificationDropdown/NotificationDropdown.module.scss");
/* harmony import */ var _NotificationDropdown_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_NotificationDropdown_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "C:\\Projects\\projects\\frontend\\components\\NotificationDropdown\\item.tsx";





const AddCommentItem = ({
  notification
}) => {
  var _notification$data, _notification$data$us;

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _NotificationDropdown_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.item,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Avatar"], {
      alt: 'User',
      src: (_notification$data = notification.data) === null || _notification$data === void 0 ? void 0 : (_notification$data$us = _notification$data.user) === null || _notification$data$us === void 0 ? void 0 : _notification$data$us.avatar,
      className: _NotificationDropdown_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.avatar
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _NotificationDropdown_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.listContent,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("b", {
        children: notification.data.user.name
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 17
      }, undefined), " \u043D\u0430\u043F\u0438\u0441\u0430\u043B \u043A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439 \u043A \u0437\u0430\u043F\u0438\u0441\u0438\xA0", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
        href: '#',
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          children: ["\u201C", notification.data.post.title, "\u201D"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 9
  }, undefined);
};

const SetLikeOrDislikeItem = ({
  notification
}) => {
  var _notification$data3, _notification$data3$u;

  const isLike = notification.data.type === 'like';

  if (notification.data.likeable_type.includes('Comment')) {
    var _notification$data2, _notification$data2$u;

    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _NotificationDropdown_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.item,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _NotificationDropdown_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.likeBlock,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Avatar"], {
          alt: 'User',
          src: (_notification$data2 = notification.data) === null || _notification$data2 === void 0 ? void 0 : (_notification$data2$u = _notification$data2.user) === null || _notification$data2$u === void 0 ? void 0 : _notification$data2$u.avatar,
          className: _NotificationDropdown_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.avatar
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 17
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          src: isLike ? '/like.svg' : '/dislike.svg'
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 17
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 13
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _NotificationDropdown_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.listContent,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("b", {
          children: notification.data.user.name
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 17
        }, undefined), " \u043F\u043E\u0441\u0442\u0430\u0432\u0438\u043B ", isLike ? 'лайк' : 'дизлайк', " \u043D\u0430 \u043A\u043E\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439\xA0", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
          href: '#',
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            children: ["\u201C", notification.data.comment.text, "\u201D"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 39,
            columnNumber: 21
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 17
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 13
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 16
    }, undefined);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _NotificationDropdown_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.item,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Avatar"], {
      alt: 'User',
      src: (_notification$data3 = notification.data) === null || _notification$data3 === void 0 ? void 0 : (_notification$data3$u = _notification$data3.user) === null || _notification$data3$u === void 0 ? void 0 : _notification$data3$u.avatar,
      className: _NotificationDropdown_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.avatar
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _NotificationDropdown_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.listContent,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("b", {
        children: notification.data.user.name
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 17
      }, undefined), " \u043F\u043E\u0441\u0442\u0430\u0432\u0438\u043B ", isLike ? 'лайк' : 'дизлайк', " \u043D\u0430 \u0437\u0430\u043F\u0438\u0441\u044C\xA0", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
        href: '#',
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          children: ["\u201C", notification.data.post.title, "\u201D"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 48,
    columnNumber: 9
  }, undefined);
};

function Item({
  item
}) {
  if (item.type.includes('AddCommentNotification')) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(AddCommentItem, {
      notification: item
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 16
    }, this);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(SetLikeOrDislikeItem, {
    notification: item
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 69,
    columnNumber: 12
  }, this);
}

/***/ }),

/***/ "./components/PastTimeLabel/PastTimeLabel.module.scss":
/*!************************************************************!*\
  !*** ./components/PastTimeLabel/PastTimeLabel.module.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"time": "PastTimeLabel_time__RujKA",
	"timeWithLeftSidePoint": "PastTimeLabel_timeWithLeftSidePoint__20wyx"
};


/***/ }),

/***/ "./components/PastTimeLabel/index.tsx":
/*!********************************************!*\
  !*** ./components/PastTimeLabel/index.tsx ***!
  \********************************************/
/*! exports provided: PastTimeLabel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PastTimeLabel", function() { return PastTimeLabel; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _PastTimeLabel_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PastTimeLabel.module.scss */ "./components/PastTimeLabel/PastTimeLabel.module.scss");
/* harmony import */ var _PastTimeLabel_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_PastTimeLabel_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns */ "date-fns");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var date_fns_locale__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! date-fns/locale */ "date-fns/locale");
/* harmony import */ var date_fns_locale__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(date_fns_locale__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! clsx */ "clsx");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_5__);

var _jsxFileName = "C:\\Projects\\projects\\frontend\\components\\PastTimeLabel\\index.tsx";





const PastTimeLabel = ({
  time,
  leftSidePoint
}) => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
    className: clsx__WEBPACK_IMPORTED_MODULE_5___default()(_PastTimeLabel_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.time, {
      [_PastTimeLabel_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.timeWithLeftSidePoint]: leftSidePoint
    }),
    children: Object(date_fns__WEBPACK_IMPORTED_MODULE_3__["formatDistanceToNow"])(time, {
      locale: date_fns_locale__WEBPACK_IMPORTED_MODULE_4__["ru"],
      addSuffix: true
    })
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 5
  }, undefined);
};

/***/ }),

/***/ "./components/ProfilePopup/ProfilePopup.module.scss":
/*!**********************************************************!*\
  !*** ./components/ProfilePopup/ProfilePopup.module.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"popover": "ProfilePopup_popover__2uaAW",
	"paper": "ProfilePopup_paper__1E2xt",
	"section1": "ProfilePopup_section1__2rWs1",
	"section2": "ProfilePopup_section2__3X8Hh",
	"divider": "ProfilePopup_divider__2YJk7",
	"avatar": "ProfilePopup_avatar__1rahE",
	"name": "ProfilePopup_name__nou0l",
	"login": "ProfilePopup_login__31fAf"
};


/***/ }),

/***/ "./components/ProfilePopup/index.tsx":
/*!*******************************************!*\
  !*** ./components/ProfilePopup/index.tsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ProfilePopup_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ProfilePopup.module.scss */ "./components/ProfilePopup/ProfilePopup.module.scss");
/* harmony import */ var _ProfilePopup_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ProfilePopup_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ "clsx");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);


var _jsxFileName = "C:\\Projects\\projects\\frontend\\components\\ProfilePopup\\index.tsx";






const ProfilePopup = ({
  user,
  onClick
}) => {
  const [anchorEl, setAnchorEl] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(null);

  const handleClick = event => {
    if (onClick) {
      onClick();
    }

    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  const onLogout = () => {
    var _window;

    if ((_window = window) !== null && _window !== void 0 && _window.confirm('Вы действительно хотите покинуть сайт ?')) {
      document.cookie = 'auth_token' + '=; Max-Age=0';
      localStorage.removeItem('token');
      location.href = '/';
    }
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Avatar"], {
      className: clsx__WEBPACK_IMPORTED_MODULE_4___default()('cursor-pointer', _ProfilePopup_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.root),
      alt: user === null || user === void 0 ? void 0 : user.name,
      src: user === null || user === void 0 ? void 0 : user.avatar,
      onClick: handleClick
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }, undefined), (user === null || user === void 0 ? void 0 : user.id) && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Popover"], {
      open: open,
      anchorEl: anchorEl,
      onClose: handleClose,
      className: _ProfilePopup_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.popover,
      classes: {
        root: _ProfilePopup_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.root,
        paper: _ProfilePopup_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.paper
      },
      anchorOrigin: {
        vertical: 'bottom',
        horizontal: 'center'
      },
      transformOrigin: {
        vertical: 'top',
        horizontal: 'center'
      },
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: clsx__WEBPACK_IMPORTED_MODULE_4___default()(_ProfilePopup_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.section1, 'd-flex'),
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Avatar"], {
          alt: user.name,
          src: user.avatar,
          className: _ProfilePopup_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.avatar
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 15
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            className: _ProfilePopup_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.name,
            children: user.name
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 63,
            columnNumber: 17
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 15
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 13
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Divider"], {
        classes: {
          root: _ProfilePopup_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.divider
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 13
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: clsx__WEBPACK_IMPORTED_MODULE_4___default()(_ProfilePopup_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.section2, 'd-flex flex-column'),
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
          href: `/profile/${user.id}?type=articles`,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            className: "mb-3",
            children: "\u0421\u0442\u0430\u0442\u044C\u0438"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 69,
            columnNumber: 64
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 15
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
          href: `/profile/${user.id}?type=drafts`,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            className: "mb-3",
            children: "\u0427\u0435\u0440\u043D\u043E\u0432\u0438\u043A\u0438"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 70,
            columnNumber: 62
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 15
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
          href: '/profile',
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            className: "mb-3",
            children: "\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 71,
            columnNumber: 39
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 15
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 13
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Divider"], {
        classes: {
          root: _ProfilePopup_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.divider
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 13
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
        onClick: onLogout,
        className: clsx__WEBPACK_IMPORTED_MODULE_4___default()(_ProfilePopup_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.section2, 'd-flex flex-column'),
        children: "\u0412\u044B\u0439\u0442\u0438"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 13
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 11
    }, undefined)]
  }, void 0, true);
};

/* harmony default export */ __webpack_exports__["default"] = (ProfilePopup);

/***/ }),

/***/ "./components/SearchPopup/Item.tsx":
/*!*****************************************!*\
  !*** ./components/SearchPopup/Item.tsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Avatar */ "@material-ui/core/Avatar");
/* harmony import */ var _material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Collapse__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Collapse */ "@material-ui/core/Collapse");
/* harmony import */ var _material_ui_core_Collapse__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Collapse__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _SearchPopup_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SearchPopup.module.scss */ "./components/SearchPopup/SearchPopup.module.scss");
/* harmony import */ var _SearchPopup_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_SearchPopup_module_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);


var _jsxFileName = "C:\\Projects\\projects\\frontend\\components\\SearchPopup\\Item.tsx";








const Item = p => {
  const [open, setOpen] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(false);
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_7__["useRouter"])();
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    if (p.title === 'Авторы' || p.title === 'Публикации') {
      setOpen(true);
    }
  }, []);

  const handleClick = () => {
    setOpen(!open);
  };

  if (p.title === 'Авторы' && p.data.length > 0) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        onClick: handleClick,
        className: _SearchPopup_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.searchTitleInner,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _SearchPopup_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.searchTitle,
          children: [p.title, " (", p.data.length, ")"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 11
        }, undefined), p.data.length > 3 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          className: _SearchPopup_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.showAll,
          onClick: e => e.stopPropagation(),
          children: "\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u0432\u0441\u0435"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 13
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Divider"], {
        classes: {
          root: _SearchPopup_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.divider
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Collapse__WEBPACK_IMPORTED_MODULE_3___default.a, {
        in: open,
        timeout: "auto",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _SearchPopup_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.searchItems,
          children: p.data.slice(0, 3).map((el, key) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            onClick: async () => {
              await router.push(el.link);
              p.onClose();
            },
            className: _SearchPopup_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.searchItem,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_2___default.a, {
              className: "mr-10"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 54,
              columnNumber: 17
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              children: el.name
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 55,
              columnNumber: 17
            }, undefined)]
          }, `${p.title}-${key}`, true, {
            fileName: _jsxFileName,
            lineNumber: 50,
            columnNumber: 15
          }, undefined))
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 9
      }, undefined)]
    }, void 0, true);
  }

  if (p.title !== 'Авторы' && p.data.length > 0) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        onClick: handleClick,
        className: _SearchPopup_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.searchTitleInner,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _SearchPopup_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.searchTitle,
          children: [p.title, " (", p.data.length, ")"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 11
        }, undefined), p.data.length > 3 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          className: _SearchPopup_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.showAll,
          onClick: e => e.stopPropagation(),
          children: "\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u0432\u0441\u0435"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 13
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Divider"], {
        classes: {
          root: _SearchPopup_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.divider
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Collapse__WEBPACK_IMPORTED_MODULE_3___default.a, {
        in: open,
        timeout: "auto",
        disableStrictModeCompat: true,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _SearchPopup_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.searchItems,
          children: p.data.slice(0, 3).map((el, key) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _SearchPopup_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.searchItem,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
              href: el.link,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                onClick: () => p.onClose(),
                children: el.name
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 83,
                columnNumber: 21
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 82,
              columnNumber: 17
            }, undefined)
          }, `${p.title}-${key}`, false, {
            fileName: _jsxFileName,
            lineNumber: 81,
            columnNumber: 15
          }, undefined))
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 9
      }, undefined)]
    }, void 0, true);
  }

  return null;
};

/* harmony default export */ __webpack_exports__["default"] = (Item);

/***/ }),

/***/ "./components/SearchPopup/SearchPopup.module.scss":
/*!********************************************************!*\
  !*** ./components/SearchPopup/SearchPopup.module.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"container": "SearchPopup_container__2u-vj",
	"body": "SearchPopup_body__1F6N4",
	"divider": "SearchPopup_divider__2LPb8",
	"searchTitle": "SearchPopup_searchTitle__26MFD",
	"searchTitleInner": "SearchPopup_searchTitleInner__3wSi2",
	"searchItems": "SearchPopup_searchItems__3JL5u",
	"searchItem": "SearchPopup_searchItem__2CUas",
	"showAll": "SearchPopup_showAll__2hy6C",
	"footer": "SearchPopup_footer__MYn8K"
};


/***/ }),

/***/ "./components/SearchPopup/index.tsx":
/*!******************************************!*\
  !*** ./components/SearchPopup/index.tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _SearchPopup_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SearchPopup.module.scss */ "./components/SearchPopup/SearchPopup.module.scss");
/* harmony import */ var _SearchPopup_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_SearchPopup_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Item__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Item */ "./components/SearchPopup/Item.tsx");
/* harmony import */ var _services_api_SpecialistsApi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/api/SpecialistsApi */ "./services/api/SpecialistsApi.ts");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _redux_directory_directory_selector__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../redux/directory/directory.selector */ "./redux/directory/directory.selector.ts");
/* harmony import */ var _services_api_CommentApi__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/api/CommentApi */ "./services/api/CommentApi.ts");
/* harmony import */ var _services_api_PostApi__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/api/PostApi */ "./services/api/PostApi.ts");

var _jsxFileName = "C:\\Projects\\projects\\frontend\\components\\SearchPopup\\index.tsx";









const SearchPopup = ({
  isSearch,
  searchInput,
  handleClick
}) => {
  const {
    0: authors,
    1: setAuthors
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]);
  const {
    0: posts,
    1: setPosts
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]);
  const {
    0: comments,
    1: setComments
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]);
  const themes = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["useSelector"])(_redux_directory_directory_selector__WEBPACK_IMPORTED_MODULE_6__["selectThemesState"]).filter(theme => theme.name.includes(searchInput));
  react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(() => {
    if (searchInput.length) {
      Object(_services_api_SpecialistsApi__WEBPACK_IMPORTED_MODULE_4__["getSpecialists"])({
        name: searchInput
      }).then(users => {
        setAuthors(users.data);
      });
      _services_api_CommentApi__WEBPACK_IMPORTED_MODULE_7__["CommentApi"].get({
        text: searchInput
      }).then(response => {
        setComments(response);
      });
      Object(_services_api_PostApi__WEBPACK_IMPORTED_MODULE_8__["getPosts"])({
        title: searchInput
      }).then(response => {
        setPosts(response.data);
      });
    }
  }, [searchInput]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _SearchPopup_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.container,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _SearchPopup_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.body,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Item__WEBPACK_IMPORTED_MODULE_3__["default"], {
        title: "\u0410\u0432\u0442\u043E\u0440\u044B",
        data: authors.map(user => ({
          id: user.id,
          name: user.name,
          link: `/profile/${user.id}`
        })),
        onClose: handleClick
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Item__WEBPACK_IMPORTED_MODULE_3__["default"], {
        title: "\u041F\u0443\u0431\u043B\u0438\u043A\u0430\u0446\u0438\u0438",
        data: posts.map(post => ({
          id: post.id,
          name: post.title,
          link: `/post/${post.slug}`
        })),
        onClose: handleClick
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Item__WEBPACK_IMPORTED_MODULE_3__["default"], {
        title: "\u0422\u044D\u0433\u0438",
        data: !searchInput.length ? [] : themes.map(theme => ({
          id: theme.id,
          name: theme.name,
          link: '/themes'
        })),
        onClose: handleClick
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Item__WEBPACK_IMPORTED_MODULE_3__["default"], {
        title: "\u041A\u043E\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0438",
        data: comments.map(comment => ({
          id: comment.id,
          name: comment.text,
          link: `/post/${comment.post.slug}`
        })),
        onClose: handleClick
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _SearchPopup_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.footer,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
        className: "mr-10",
        src: "/arrow-link.svg",
        alt: "\u041F\u043E\u0438\u0441\u043A"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
        children: ["\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u0432\u0441\u0435 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u044B \u043F\u043E \u0437\u0430\u043F\u0440\u043E\u0441\u0443 \u201C", searchInput, "\u201D"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 44,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (SearchPopup);

/***/ }),

/***/ "./components/SideBlock/SideBlock.module.scss":
/*!****************************************************!*\
  !*** ./components/SideBlock/SideBlock.module.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"block": "SideBlock_block__1babU"
};


/***/ }),

/***/ "./components/SideBlock/index.tsx":
/*!****************************************!*\
  !*** ./components/SideBlock/index.tsx ***!
  \****************************************/
/*! exports provided: SideBlock */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SideBlock", function() { return SideBlock; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _SideBlock_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SideBlock.module.scss */ "./components/SideBlock/SideBlock.module.scss");
/* harmony import */ var _SideBlock_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_SideBlock_module_scss__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Projects\\projects\\frontend\\components\\SideBlock\\index.tsx";


const SideBlock = ({
  name,
  children
}) => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _SideBlock_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.block,
    children: [name && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
      children: name
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 16
    }, undefined), children]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 5
  }, undefined);
};

/***/ }),

/***/ "./components/Tags/Tags.module.scss":
/*!******************************************!*\
  !*** ./components/Tags/Tags.module.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"tag": "Tags_tag__128OK",
	"btn": "Tags_btn__zxWMQ",
	"active": "Tags_active__158c_"
};


/***/ }),

/***/ "./components/Tags/index.tsx":
/*!***********************************!*\
  !*** ./components/Tags/index.tsx ***!
  \***********************************/
/*! exports provided: Tags */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tags", function() { return Tags; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Tags_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Tags.module.scss */ "./components/Tags/Tags.module.scss");
/* harmony import */ var _Tags_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Tags_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Button */ "./components/Button/index.tsx");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! clsx */ "clsx");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_5__);


var _jsxFileName = "C:\\Projects\\projects\\frontend\\components\\Tags\\index.tsx";






const Tag = ({
  theme,
  onClick,
  isActive
}) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
  href: theme.name,
  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
    onClick: () => onClick(theme),
    className: _Tags_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.tag,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Button__WEBPACK_IMPORTED_MODULE_4__["Button"], {
      className: clsx__WEBPACK_IMPORTED_MODULE_5___default()(_Tags_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.btn, isActive ? _Tags_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.active : ''),
      variant: isActive ? 'text' : 'text',
      children: theme.name
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 5
  }, undefined)
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 12,
  columnNumber: 3
}, undefined);

const Tags = ({
  items,
  handleSelect,
  selectedItems
}) => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: items.map(obj => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Tag, {
      theme: obj,
      onClick: handleSelect,
      isActive: !!(selectedItems !== null && selectedItems !== void 0 && selectedItems.find(t => +t.id === +obj.id))
    }, obj.name, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }, undefined))
  }, void 0, false);
};

/***/ }),

/***/ "./components/UserViewOnContent/UserViewOnContent.module.scss":
/*!********************************************************************!*\
  !*** ./components/UserViewOnContent/UserViewOnContent.module.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"user": "UserViewOnContent_user__shWmm",
	"user_avatar": "UserViewOnContent_user_avatar___AQVF",
	"user_avatar_with_time": "UserViewOnContent_user_avatar_with_time__1CxKU",
	"user_info": "UserViewOnContent_user_info__1vY2k",
	"user_info_with_time": "UserViewOnContent_user_info_with_time__3peBJ",
	"user_name": "UserViewOnContent_user_name__1xuZ1"
};


/***/ }),

/***/ "./components/UserViewOnContent/index.tsx":
/*!************************************************!*\
  !*** ./components/UserViewOnContent/index.tsx ***!
  \************************************************/
/*! exports provided: UserViewOnContent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserViewOnContent", function() { return UserViewOnContent; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _UserViewOnContent_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UserViewOnContent.module.scss */ "./components/UserViewOnContent/UserViewOnContent.module.scss");
/* harmony import */ var _UserViewOnContent_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_UserViewOnContent_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! clsx */ "clsx");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _PastTimeLabel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../PastTimeLabel */ "./components/PastTimeLabel/index.tsx");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__);

var _jsxFileName = "C:\\Projects\\projects\\frontend\\components\\UserViewOnContent\\index.tsx";






const UserViewOnContent = ({
  user,
  time
}) => {
  var _user$avatarUrl, _user$avatarUrl2;

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
    href: `/profile/${user.id}`,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _UserViewOnContent_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.user,
      children: [((_user$avatarUrl = user.avatarUrl) === null || _user$avatarUrl === void 0 ? void 0 : _user$avatarUrl.length) && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
        className: clsx__WEBPACK_IMPORTED_MODULE_3___default()(_UserViewOnContent_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.user_avatar, time ? _UserViewOnContent_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.user_avatar_with_time : ''),
        src: user.avatarUrl,
        alt: "\u0410\u0432\u0430\u0442\u0430\u0440 \u043F\u043E\u043B\u044C\u0437\u0432\u043E\u0430\u0442\u0435\u043B\u044F"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 36
      }, undefined), !((_user$avatarUrl2 = user.avatarUrl) !== null && _user$avatarUrl2 !== void 0 && _user$avatarUrl2.length) && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Avatar"], {
        style: {
          width: 22,
          height: 22,
          marginRight: 6
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 37
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: clsx__WEBPACK_IMPORTED_MODULE_3___default()(_UserViewOnContent_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.user_info, time ? _UserViewOnContent_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.user_info_with_time : ''),
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          className: _UserViewOnContent_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.user_name,
          children: user.name
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 11
        }, undefined), time ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_PastTimeLabel__WEBPACK_IMPORTED_MODULE_4__["PastTimeLabel"], {
          time: time
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 19
        }, undefined) : null]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 5
  }, undefined);
};

/***/ }),

/***/ "./components/ViewsAndComments/ViewsAndComments.module.scss":
/*!******************************************************************!*\
  !*** ./components/ViewsAndComments/ViewsAndComments.module.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"viewsAndComments": "ViewsAndComments_viewsAndComments__3xvYo",
	"count": "ViewsAndComments_count__1w06d",
	"icon": "ViewsAndComments_icon__2c0tM"
};


/***/ }),

/***/ "./components/ViewsAndComments/index.tsx":
/*!***********************************************!*\
  !*** ./components/ViewsAndComments/index.tsx ***!
  \***********************************************/
/*! exports provided: ViewsAndComments */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewsAndComments", function() { return ViewsAndComments; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! clsx */ "clsx");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ViewsAndComments_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ViewsAndComments.module.scss */ "./components/ViewsAndComments/ViewsAndComments.module.scss");
/* harmony import */ var _ViewsAndComments_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ViewsAndComments_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _icons_CommentIcon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../icons/CommentIcon */ "./components/icons/CommentIcon.tsx");
/* harmony import */ var _icons_EyeIcon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../icons/EyeIcon */ "./components/icons/EyeIcon.tsx");

var _jsxFileName = "C:\\Projects\\projects\\frontend\\components\\ViewsAndComments\\index.tsx";






const getFullTitle = (num, mainPart, lastParts) => {
  let text = mainPart;
  const lastDigit = num % 10;
  const preLastDigit = Math.floor(num / 10) % 10;

  if (lastDigit === 1 && preLastDigit !== 1) {
    text += lastParts[0];
  } else if (lastDigit > 1 && lastDigit <= 4 && preLastDigit !== 1) {
    text += lastParts[1];
  } else {
    text += lastParts[2];
  }

  return `${num} ${text}`;
};

const ViewsAndComments = ({
  mode,
  views,
  comments
}) => {
  const commentsTitle = mode === 'full' ? getFullTitle(comments, 'комментар', ['ий', 'ия', 'иев']) : `${comments}`;
  const viewsTitle = mode === 'full' ? getFullTitle(views, 'просмотр', ['', 'а', 'ов']) : `${views}`;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: clsx__WEBPACK_IMPORTED_MODULE_2___default()(_ViewsAndComments_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.viewsAndComments, 'd-flex align-items-center'),
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_icons_CommentIcon__WEBPACK_IMPORTED_MODULE_4__["CommentIcon"], {
      className: _ViewsAndComments_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.icon
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
      className: _ViewsAndComments_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.count,
      children: commentsTitle
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_icons_EyeIcon__WEBPACK_IMPORTED_MODULE_5__["EyeIcon"], {
      className: _ViewsAndComments_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.icon
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
      className: _ViewsAndComments_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.count,
      children: viewsTitle
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 31,
    columnNumber: 5
  }, undefined);
};

/***/ }),

/***/ "./components/icons/CommentIcon.tsx":
/*!******************************************!*\
  !*** ./components/icons/CommentIcon.tsx ***!
  \******************************************/
/*! exports provided: CommentIcon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentIcon", function() { return CommentIcon; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Projects\\projects\\frontend\\components\\icons\\CommentIcon.tsx";

const CommentIcon = ({
  className
}) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
  className: className,
  width: "14",
  height: "13",
  viewBox: "0 0 14 13",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
    d: "M0.600098 1.89999C0.600098 1.34771 1.04781 0.899994 1.6001 0.899994H12.4001C12.9524 0.899994 13.4001 1.34771 13.4001 1.89999V7.73999C13.4001 8.29228 12.9524 8.73999 12.4001 8.73999H10.9386V12.1L6.01548 8.73999H1.6001C1.04781 8.73999 0.600098 8.29228 0.600098 7.73999V1.89999Z",
    stroke: "#9C9CAA",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 5
  }, undefined)
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 8,
  columnNumber: 3
}, undefined);

/***/ }),

/***/ "./components/icons/EyeIcon.tsx":
/*!**************************************!*\
  !*** ./components/icons/EyeIcon.tsx ***!
  \**************************************/
/*! exports provided: EyeIcon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EyeIcon", function() { return EyeIcon; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Projects\\projects\\frontend\\components\\icons\\EyeIcon.tsx";

const EyeIcon = ({
  className
}) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
  className: className,
  width: "16",
  height: "13",
  viewBox: "0 0 16 13",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
    d: "M15.4788 6.5C15.4788 6.5 12.1305 12.0234 8.00015 12.0234C3.8698 12.0234 0.521484 6.5 0.521484 6.5C0.521484 6.5 3.8698 0.976639 8.00015 0.976639C12.1305 0.976639 15.4788 6.5 15.4788 6.5Z",
    stroke: "#9C9CAA"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
    d: "M10.1998 6.5C10.1998 7.68575 9.21496 8.64699 8.00015 8.64699C6.78534 8.64699 5.80054 7.68575 5.80054 6.5C5.80054 5.31426 6.78534 4.35302 8.00015 4.35302C9.21496 4.35302 10.1998 5.31426 10.1998 6.5Z",
    stroke: "#9C9CAA"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 5
  }, undefined)]
}, void 0, true, {
  fileName: _jsxFileName,
  lineNumber: 5,
  columnNumber: 3
}, undefined);

/***/ }),

/***/ "./components/icons/ThumbUpIcon.tsx":
/*!******************************************!*\
  !*** ./components/icons/ThumbUpIcon.tsx ***!
  \******************************************/
/*! exports provided: ThumbUpIcon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThumbUpIcon", function() { return ThumbUpIcon; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);

var _jsxFileName = "C:\\Projects\\projects\\frontend\\components\\icons\\ThumbUpIcon.tsx";
const ThumbUpIcon = ({
  className
}) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
  className: className,
  width: "19",
  height: "17",
  viewBox: "0 0 19 17",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
    d: "M5.15794 14.8365V6.62103C5.15794 5.93932 5.33996 5.26997 5.6852 4.68214L8.49862 0.284134C8.60199 0.108124 8.79084 2.25996e-05 8.99496 2.25996e-05C10.6413 2.25996e-05 11.7556 1.67769 11.1173 3.19523L10.0926 5.5799H15.8686C17.9184 5.5799 19.3081 7.66594 18.5184 9.55757L16.2524 14.9855C15.806 16.0546 14.761 16.7508 13.6025 16.7508H7.07224C6.015 16.7508 5.15794 15.8937 5.15794 14.8365Z"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 3,
    columnNumber: 5
  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
    d: "M3.54442 15.3951V6.9356C3.54442 6.18686 2.93745 5.5799 2.18871 5.5799C1.43998 5.5799 0.833008 6.18687 0.833008 6.9356V15.3951C0.833008 16.1438 1.43998 16.7508 2.18871 16.7508C2.93745 16.7508 3.54442 16.1438 3.54442 15.3951Z"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 4,
    columnNumber: 5
  }, undefined)]
}, void 0, true, {
  fileName: _jsxFileName,
  lineNumber: 2,
  columnNumber: 3
}, undefined);

/***/ }),

/***/ "./core/axios.ts":
/*!***********************!*\
  !*** ./core/axios.ts ***!
  \***********************/
/*! exports provided: API_URL, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_URL", function() { return API_URL; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

const API_URL = 'http://localhost';
const instance = axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({
  baseURL: API_URL,
  withCredentials: true
});
instance.interceptors.request.use(config => {
  if (false) { var _window$localStorage$; }

  return config;
});
/* harmony default export */ __webpack_exports__["default"] = (instance);

/***/ }),

/***/ "./layouts/MainLayout.tsx":
/*!********************************!*\
  !*** ./layouts/MainLayout.tsx ***!
  \********************************/
/*! exports provided: MainLayout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainLayout", function() { return MainLayout; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Header */ "./components/Header/index.tsx");
/* harmony import */ var _components_NavigationDrawer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/NavigationDrawer */ "./components/NavigationDrawer/index.tsx");


var _jsxFileName = "C:\\Projects\\projects\\frontend\\layouts\\MainLayout.tsx";




const MainLayout = ({
  children,
  title = 'Ingternet'
}) => {
  const {
    0: menuOpened,
    1: toggleMenuOpened
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false);
  const onClickHamburger = react__WEBPACK_IMPORTED_MODULE_2___default.a.useCallback(() => toggleMenuOpened(true), []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Header__WEBPACK_IMPORTED_MODULE_3__["Header"], {
      onClickHamburger: onClickHamburger
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_NavigationDrawer__WEBPACK_IMPORTED_MODULE_4__["NavigationDrawer"], {
      menuOpened: menuOpened,
      onClose: () => toggleMenuOpened(false)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 13
    }, undefined), children]
  }, void 0, true);
};

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js");

var _router2 = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

var _useIntersection = __webpack_require__(/*! ./use-intersection */ "./node_modules/next/dist/client/use-intersection.js");

const prefetched = {};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router.isLocalURL)(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (true) {
      // rethrow to show invalid URL errors
      throw err;
    }
  });
  const curLocale = options && typeof options.locale !== 'undefined' ? options.locale : router && router.locale; // Join on an invalid URI character

  prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')] = true;
}

function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
  event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll, locale) {
  const {
    nodeName
  } = e.currentTarget;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router.isLocalURL)(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null) {
    scroll = as.indexOf('#') < 0;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow,
    locale,
    scroll
  }).then(success => {
    if (!success) return;

    if (scroll) {
      // FIXME: proper route announcing at Router level, not Link:
      document.body.focus();
    }
  });
}

function Link(props) {
  if (true) {
    function createPropError(args) {
      return new Error(`Failed prop type: The prop \`${args.key}\` expects a ${args.expected} in \`<Link>\`, but got \`${args.actual}\` instead.` + (false ? undefined : ''));
    } // TypeScript trick for type-guarding:


    const requiredPropsGuard = {
      href: true
    };
    const requiredProps = Object.keys(requiredPropsGuard);
    requiredProps.forEach(key => {
      if (key === 'href') {
        if (props[key] == null || typeof props[key] !== 'string' && typeof props[key] !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: props[key] === null ? 'null' : typeof props[key]
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // TypeScript trick for type-guarding:

    const optionalPropsGuard = {
      as: true,
      replace: true,
      scroll: true,
      shallow: true,
      passHref: true,
      prefetch: true,
      locale: true
    };
    const optionalProps = Object.keys(optionalPropsGuard);
    optionalProps.forEach(key => {
      const valType = typeof props[key];

      if (key === 'as') {
        if (props[key] && valType !== 'string' && valType !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: valType
          });
        }
      } else if (key === 'locale') {
        if (props[key] && valType !== 'string') {
          throw createPropError({
            key,
            expected: '`string`',
            actual: valType
          });
        }
      } else if (key === 'replace' || key === 'scroll' || key === 'shallow' || key === 'passHref' || key === 'prefetch') {
        if (props[key] != null && valType !== 'boolean') {
          throw createPropError({
            key,
            expected: '`boolean`',
            actual: valType
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // This hook is in a conditional but that is ok because `process.env.NODE_ENV` never changes
    // eslint-disable-next-line react-hooks/rules-of-hooks

    const hasWarned = _react.default.useRef(false);

    if (props.prefetch && !hasWarned.current) {
      hasWarned.current = true;
      console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/vercel/next.js/prefetch-true-deprecated');
    }
  }

  const p = props.prefetch !== false;
  const router = (0, _router2.useRouter)();
  const pathname = router && router.pathname || '/';

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const [resolvedHref, resolvedAs] = (0, _router.resolveHref)(pathname, props.href, true);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router.resolveHref)(pathname, props.as) : resolvedAs || resolvedHref
    };
  }, [pathname, props.href, props.as]);

  let {
    children,
    replace,
    shallow,
    scroll,
    locale
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  const child = _react.Children.only(children);

  const childRef = child && typeof child === 'object' && child.ref;
  const [setIntersectionRef, isVisible] = (0, _useIntersection.useIntersection)({
    rootMargin: '200px'
  });

  const setRef = _react.default.useCallback(el => {
    setIntersectionRef(el);

    if (childRef) {
      if (typeof childRef === 'function') childRef(el);else if (typeof childRef === 'object') {
        childRef.current = el;
      }
    }
  }, [childRef, setIntersectionRef]);

  (0, _react.useEffect)(() => {
    const shouldPrefetch = isVisible && p && (0, _router.isLocalURL)(href);
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale;
    const isPrefetched = prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')];

    if (shouldPrefetch && !isPrefetched) {
      prefetch(router, href, as, {
        locale: curLocale
      });
    }
  }, [as, href, isVisible, locale, p, router]);
  const childProps = {
    ref: setRef,
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll, locale);
      }
    }
  };

  childProps.onMouseEnter = e => {
    if (!(0, _router.isLocalURL)(href)) return;

    if (child.props && typeof child.props.onMouseEnter === 'function') {
      child.props.onMouseEnter(e);
    }

    prefetch(router, href, as, {
      priority: true
    });
  }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale; // we only render domain locales if we are currently on a domain locale
    // so that locale links are still visitable in development/preview envs

    const localeDomain = router && router.isLocaleDomain && (0, _router.getDomainLocale)(as, curLocale, router && router.locales, router && router.domainLocales);
    childProps.href = localeDomain || (0, _router.addBasePath)((0, _router.addLocale)(as, curLocale, router && router.defaultLocale));
  }

  return /*#__PURE__*/_react.default.cloneElement(child, childProps);
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/normalize-trailing-slash.js":
/*!*******************************************************************!*\
  !*** ./node_modules/next/dist/client/normalize-trailing-slash.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;
/**
* Removes the trailing slash of a path if there is one. Preserves the root path `/`.
*/

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}
/**
* Normalizes the trailing slash of a path according to the `trailingSlash` option
* in `next.config.js`.
*/


const normalizePathTrailingSlash =  false ? undefined : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "./node_modules/next/dist/client/request-idle-callback.js":
/*!****************************************************************!*\
  !*** ./node_modules/next/dist/client/request-idle-callback.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.cancelIdleCallback = exports.requestIdleCallback = void 0;

const requestIdleCallback = typeof self !== 'undefined' && self.requestIdleCallback || function (cb) {
  let start = Date.now();
  return setTimeout(function () {
    cb({
      didTimeout: false,
      timeRemaining: function () {
        return Math.max(0, 50 - (Date.now() - start));
      }
    });
  }, 1);
};

exports.requestIdleCallback = requestIdleCallback;

const cancelIdleCallback = typeof self !== 'undefined' && self.cancelIdleCallback || function (id) {
  return clearTimeout(id);
};

exports.cancelIdleCallback = cancelIdleCallback;

/***/ }),

/***/ "./node_modules/next/dist/client/route-loader.js":
/*!*******************************************************!*\
  !*** ./node_modules/next/dist/client/route-loader.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.markAssetError = markAssetError;
exports.isAssetError = isAssetError;
exports.getClientBuildManifest = getClientBuildManifest;
exports.default = void 0;

var _getAssetPathFromRoute = _interopRequireDefault(__webpack_require__(/*! ../next-server/lib/router/utils/get-asset-path-from-route */ "../next-server/lib/router/utils/get-asset-path-from-route"));

var _requestIdleCallback = __webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js"); // 3.8s was arbitrarily chosen as it's what https://web.dev/interactive
// considers as "Good" time-to-interactive. We must assume something went
// wrong beyond this point, and then fall-back to a full page transition to
// show the user something of value.


const MS_MAX_IDLE_DELAY = 3800;

function withFuture(key, map, generator) {
  let entry = map.get(key);

  if (entry) {
    if ('future' in entry) {
      return entry.future;
    }

    return Promise.resolve(entry);
  }

  let resolver;
  const prom = new Promise(resolve => {
    resolver = resolve;
  });
  map.set(key, entry = {
    resolve: resolver,
    future: prom
  });
  return generator ? // eslint-disable-next-line no-sequences
  generator().then(value => (resolver(value), value)) : prom;
}

function hasPrefetch(link) {
  try {
    link = document.createElement('link');
    return (// detect IE11 since it supports prefetch but isn't detected
      // with relList.support
      !!window.MSInputMethodContext && !!document.documentMode || link.relList.supports('prefetch')
    );
  } catch (_unused) {
    return false;
  }
}

const canPrefetch = hasPrefetch();

function prefetchViaDom(href, as, link) {
  return new Promise((res, rej) => {
    if (document.querySelector(`link[rel="prefetch"][href^="${href}"]`)) {
      return res();
    }

    link = document.createElement('link'); // The order of property assignment here is intentional:

    if (as) link.as = as;
    link.rel = `prefetch`;
    link.crossOrigin = undefined;
    link.onload = res;
    link.onerror = rej; // `href` should always be last:

    link.href = href;
    document.head.appendChild(link);
  });
}

const ASSET_LOAD_ERROR = Symbol('ASSET_LOAD_ERROR'); // TODO: unexport

function markAssetError(err) {
  return Object.defineProperty(err, ASSET_LOAD_ERROR, {});
}

function isAssetError(err) {
  return err && ASSET_LOAD_ERROR in err;
}

function appendScript(src, script) {
  return new Promise((resolve, reject) => {
    script = document.createElement('script'); // The order of property assignment here is intentional.
    // 1. Setup success/failure hooks in case the browser synchronously
    //    executes when `src` is set.

    script.onload = resolve;

    script.onerror = () => reject(markAssetError(new Error(`Failed to load script: ${src}`))); // 2. Configure the cross-origin attribute before setting `src` in case the
    //    browser begins to fetch.


    script.crossOrigin = undefined; // 3. Finally, set the source and inject into the DOM in case the child
    //    must be appended for fetching to start.

    script.src = src;
    document.body.appendChild(script);
  });
} // Resolve a promise that times out after given amount of milliseconds.


function resolvePromiseWithTimeout(p, ms, err) {
  return new Promise((resolve, reject) => {
    let cancelled = false;
    p.then(r => {
      // Resolved, cancel the timeout
      cancelled = true;
      resolve(r);
    }).catch(reject);
    (0, _requestIdleCallback.requestIdleCallback)(() => setTimeout(() => {
      if (!cancelled) {
        reject(err);
      }
    }, ms));
  });
} // TODO: stop exporting or cache the failure
// It'd be best to stop exporting this. It's an implementation detail. We're
// only exporting it for backwards compatibilty with the `page-loader`.
// Only cache this response as a last resort if we cannot eliminate all other
// code branches that use the Build Manifest Callback and push them through
// the Route Loader interface.


function getClientBuildManifest() {
  if (self.__BUILD_MANIFEST) {
    return Promise.resolve(self.__BUILD_MANIFEST);
  }

  const onBuildManifest = new Promise(resolve => {
    // Mandatory because this is not concurrent safe:
    const cb = self.__BUILD_MANIFEST_CB;

    self.__BUILD_MANIFEST_CB = () => {
      resolve(self.__BUILD_MANIFEST);
      cb && cb();
    };
  });
  return resolvePromiseWithTimeout(onBuildManifest, MS_MAX_IDLE_DELAY, markAssetError(new Error('Failed to load client build manifest')));
}

function getFilesForRoute(assetPrefix, route) {
  if (true) {
    return Promise.resolve({
      scripts: [assetPrefix + '/_next/static/chunks/pages' + encodeURI((0, _getAssetPathFromRoute.default)(route, '.js'))],
      // Styles are handled by `style-loader` in development:
      css: []
    });
  }

  return getClientBuildManifest().then(manifest => {
    if (!(route in manifest)) {
      throw markAssetError(new Error(`Failed to lookup route: ${route}`));
    }

    const allFiles = manifest[route].map(entry => assetPrefix + '/_next/' + encodeURI(entry));
    return {
      scripts: allFiles.filter(v => v.endsWith('.js')),
      css: allFiles.filter(v => v.endsWith('.css'))
    };
  });
}

function createRouteLoader(assetPrefix) {
  const entrypoints = new Map();
  const loadedScripts = new Map();
  const styleSheets = new Map();
  const routes = new Map();

  function maybeExecuteScript(src) {
    let prom = loadedScripts.get(src);

    if (prom) {
      return prom;
    } // Skip executing script if it's already in the DOM:


    if (document.querySelector(`script[src^="${src}"]`)) {
      return Promise.resolve();
    }

    loadedScripts.set(src, prom = appendScript(src));
    return prom;
  }

  function fetchStyleSheet(href) {
    let prom = styleSheets.get(href);

    if (prom) {
      return prom;
    }

    styleSheets.set(href, prom = fetch(href).then(res => {
      if (!res.ok) {
        throw new Error(`Failed to load stylesheet: ${href}`);
      }

      return res.text().then(text => ({
        href: href,
        content: text
      }));
    }).catch(err => {
      throw markAssetError(err);
    }));
    return prom;
  }

  return {
    whenEntrypoint(route) {
      return withFuture(route, entrypoints);
    },

    onEntrypoint(route, execute) {
      Promise.resolve(execute).then(fn => fn()).then(exports => ({
        component: exports && exports.default || exports,
        exports: exports
      }), err => ({
        error: err
      })).then(input => {
        const old = entrypoints.get(route);
        entrypoints.set(route, input);
        if (old && 'resolve' in old) old.resolve(input);
      });
    },

    loadRoute(route) {
      return withFuture(route, routes, async () => {
        try {
          const {
            scripts,
            css
          } = await getFilesForRoute(assetPrefix, route);
          const [, styles] = await Promise.all([entrypoints.has(route) ? [] : Promise.all(scripts.map(maybeExecuteScript)), Promise.all(css.map(fetchStyleSheet))]);
          const entrypoint = await resolvePromiseWithTimeout(this.whenEntrypoint(route), MS_MAX_IDLE_DELAY, markAssetError(new Error(`Route did not complete loading: ${route}`)));
          const res = Object.assign({
            styles
          }, entrypoint);
          return 'error' in entrypoint ? entrypoint : res;
        } catch (err) {
          return {
            error: err
          };
        }
      });
    },

    prefetch(route) {
      // https://github.com/GoogleChromeLabs/quicklink/blob/453a661fa1fa940e2d2e044452398e38c67a98fb/src/index.mjs#L115-L118
      // License: Apache 2.0
      let cn;

      if (cn = navigator.connection) {
        // Don't prefetch if using 2G or if Save-Data is enabled.
        if (cn.saveData || /2g/.test(cn.effectiveType)) return Promise.resolve();
      }

      return getFilesForRoute(assetPrefix, route).then(output => Promise.all(canPrefetch ? output.scripts.map(script => prefetchViaDom(script, 'script')) : [])).then(() => {
        (0, _requestIdleCallback.requestIdleCallback)(() => this.loadRoute(route));
      }).catch( // swallow prefetch errors
      () => {});
    }

  };
}

var _default = createRouteLoader;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "../next-server/lib/router-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath', 'locale', 'locales', 'defaultLocale', 'isReady', 'isPreview', 'isLocaleDomain'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          console.error(`Error when running the Router event: ${eventField}`);
          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign(Array.isArray(_router[property]) ? [] : {}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/use-intersection.js":
/*!***********************************************************!*\
  !*** ./node_modules/next/dist/client/use-intersection.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.useIntersection = useIntersection;

var _react = __webpack_require__(/*! react */ "react");

var _requestIdleCallback = __webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js");

const hasIntersectionObserver = typeof IntersectionObserver !== 'undefined';

function useIntersection({
  rootMargin,
  disabled
}) {
  const isDisabled = disabled || !hasIntersectionObserver;
  const unobserve = (0, _react.useRef)();
  const [visible, setVisible] = (0, _react.useState)(false);
  const setRef = (0, _react.useCallback)(el => {
    if (unobserve.current) {
      unobserve.current();
      unobserve.current = undefined;
    }

    if (isDisabled || visible) return;

    if (el && el.tagName) {
      unobserve.current = observe(el, isVisible => isVisible && setVisible(isVisible), {
        rootMargin
      });
    }
  }, [isDisabled, rootMargin, visible]);
  (0, _react.useEffect)(() => {
    if (!hasIntersectionObserver) {
      if (!visible) {
        const idleCallback = (0, _requestIdleCallback.requestIdleCallback)(() => setVisible(true));
        return () => (0, _requestIdleCallback.cancelIdleCallback)(idleCallback);
      }
    }
  }, [visible]);
  return [setRef, visible];
}

function observe(element, callback, options) {
  const {
    id,
    observer,
    elements
  } = createObserver(options);
  elements.set(element, callback);
  observer.observe(element);
  return function unobserve() {
    elements.delete(element);
    observer.unobserve(element); // Destroy observer when there's nothing left to watch:

    if (elements.size === 0) {
      observer.disconnect();
      observers.delete(id);
    }
  };
}

const observers = new Map();

function createObserver(options) {
  const id = options.rootMargin || '';
  let instance = observers.get(id);

  if (instance) {
    return instance;
  }

  const elements = new Map();
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const callback = elements.get(entry.target);
      const isVisible = entry.isIntersecting || entry.intersectionRatio > 0;

      if (callback && isVisible) {
        callback(isVisible);
      }
    });
  }, options);
  observers.set(id, instance = {
    id,
    observer,
    elements
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = `withRouter(${name})`;
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.normalizeLocalePath = normalizeLocalePath;

function normalizeLocalePath(pathname, locales) {
  let detectedLocale; // first item will be empty string from splitting at first char

  const pathnameParts = pathname.split('/');
  (locales || []).some(locale => {
    if (pathnameParts[1].toLowerCase() === locale.toLowerCase()) {
      detectedLocale = locale;
      pathnameParts.splice(1, 1);
      pathname = pathnameParts.join('/') || '/';
      return true;
    }

    return false;
  });
  return {
    pathname,
    detectedLocale
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getDomainLocale = getDomainLocale;
exports.addLocale = addLocale;
exports.delLocale = delLocale;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.interpolateAs = interpolateAs;
exports.resolveHref = resolveHref;
exports.default = void 0;

var _normalizeTrailingSlash = __webpack_require__(/*! ../../../client/normalize-trailing-slash */ "./node_modules/next/dist/client/normalize-trailing-slash.js");

var _routeLoader = __webpack_require__(/*! ../../../client/route-loader */ "./node_modules/next/dist/client/route-loader.js");

var _denormalizePagePath = __webpack_require__(/*! ../../server/denormalize-page-path */ "./node_modules/next/dist/next-server/server/denormalize-page-path.js");

var _normalizeLocalePath = __webpack_require__(/*! ../i18n/normalize-locale-path */ "./node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js");

var _mitt = _interopRequireDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

var _utils = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _isDynamic = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

var _parseRelativeUrl = __webpack_require__(/*! ./utils/parse-relative-url */ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js");

var _querystring = __webpack_require__(/*! ./utils/querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");

var _resolveRewrites = _interopRequireDefault(__webpack_require__(/*! ./utils/resolve-rewrites */ "./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites-noop.js"));

var _routeMatcher = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

var _routeRegex = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/* global __NEXT_DATA__ */
// tslint:disable:no-console


let detectDomainLocale;

if (false) {}

const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function addPathPrefix(path, prefix) {
  return prefix && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(prefix) : `${prefix}${pathNoQueryHash(path) === '/' ? path.substring(1) : path}` : path;
}

function getDomainLocale(path, locale, locales, domainLocales) {
  if (false) {}

  return false;
}

function addLocale(path, locale, defaultLocale) {
  if (false) {}

  return path;
}

function delLocale(path, locale) {
  if (false) {}

  return path;
}

function pathNoQueryHash(path) {
  const queryIndex = path.indexOf('?');
  const hashIndex = path.indexOf('#');

  if (queryIndex > -1 || hashIndex > -1) {
    path = path.substring(0, queryIndex > -1 ? queryIndex : hashIndex);
  }

  return path;
}

function hasBasePath(path) {
  path = pathNoQueryHash(path);
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return addPathPrefix(path, basePath);
}

function delBasePath(path) {
  path = path.slice(basePath.length);
  if (!path.startsWith('/')) path = `/${path}`;
  return path;
}
/**
* Detects whether a given url is routable by the Next.js router (browser only).
*/


function isLocalURL(url) {
  // prevent a hydration mismatch on href for url with anchor refs
  if (url.startsWith('/') || url.startsWith('#')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils.getLocationOrigin)();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}

function interpolateAs(route, asPathname, query) {
  let interpolatedRoute = '';
  const dynamicRegex = (0, _routeRegex.getRouteRegex)(route);
  const dynamicGroups = dynamicRegex.groups;
  const dynamicMatches = // Try to match the dynamic route against the asPath
  (asPathname !== route ? (0, _routeMatcher.getRouteMatcher)(dynamicRegex)(asPathname) : '') || // Fall back to reading the values from the href
  // TODO: should this take priority; also need to change in the router.
  query;
  interpolatedRoute = route;
  const params = Object.keys(dynamicGroups);

  if (!params.every(param => {
    let value = dynamicMatches[param] || '';
    const {
      repeat,
      optional
    } = dynamicGroups[param]; // support single-level catch-all
    // TODO: more robust handling for user-error (passing `/`)

    let replaced = `[${repeat ? '...' : ''}${param}]`;

    if (optional) {
      replaced = `${!value ? '/' : ''}[${replaced}]`;
    }

    if (repeat && !Array.isArray(value)) value = [value];
    return (optional || param in dynamicMatches) && ( // Interpolate group into data URL if present
    interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map( // these values should be fully encoded instead of just
    // path delimiter escaped since they are being inserted
    // into the URL and we expect URL encoded segments
    // when parsing dynamic route params
    segment => encodeURIComponent(segment)).join('/') : encodeURIComponent(value)) || '/');
  })) {
    interpolatedRoute = ''; // did not satisfy all requirements
    // n.b. We ignore this error because we handle warning for this case in
    // development in the `<Link>` component directly.
  }

  return {
    params,
    result: interpolatedRoute
  };
}

function omitParmsFromQuery(query, params) {
  const filteredQuery = {};
  Object.keys(query).forEach(key => {
    if (!params.includes(key)) {
      filteredQuery[key] = query[key];
    }
  });
  return filteredQuery;
}
/**
* Resolves a given hyperlink with a certain router state (basePath not included).
* Preserves absolute urls.
*/


function resolveHref(currentPath, href, resolveAs) {
  // we use a dummy base url for relative urls
  const base = new URL(currentPath, 'http://n');
  const urlAsString = typeof href === 'string' ? href : (0, _utils.formatWithValidation)(href); // Return because it cannot be routed by the Next.js router

  if (!isLocalURL(urlAsString)) {
    return resolveAs ? [urlAsString] : urlAsString;
  }

  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(finalUrl.pathname);
    let interpolatedAs = '';

    if ((0, _isDynamic.isDynamicRoute)(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
      const query = (0, _querystring.searchParamsToUrlQuery)(finalUrl.searchParams);
      const {
        result,
        params
      } = interpolateAs(finalUrl.pathname, finalUrl.pathname, query);

      if (result) {
        interpolatedAs = (0, _utils.formatWithValidation)({
          pathname: result,
          hash: finalUrl.hash,
          query: omitParmsFromQuery(query, params)
        });
      }
    } // if the origin didn't change, it means we received a relative href


    const resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
    return resolveAs ? [resolvedHref, interpolatedAs || resolvedHref] : resolvedHref;
  } catch (_) {
    return resolveAs ? [urlAsString] : urlAsString;
  }
}

function stripOrigin(url) {
  const origin = (0, _utils.getLocationOrigin)();
  return url.startsWith(origin) ? url.substring(origin.length) : url;
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  let [resolvedHref, resolvedAs] = resolveHref(router.pathname, url, true);
  const origin = (0, _utils.getLocationOrigin)();
  const hrefHadOrigin = resolvedHref.startsWith(origin);
  const asHadOrigin = resolvedAs && resolvedAs.startsWith(origin);
  resolvedHref = stripOrigin(resolvedHref);
  resolvedAs = resolvedAs ? stripOrigin(resolvedAs) : resolvedAs;
  const preparedUrl = hrefHadOrigin ? resolvedHref : addBasePath(resolvedHref);
  const preparedAs = as ? stripOrigin(resolveHref(router.pathname, as)) : resolvedAs || resolvedHref;
  return {
    url: preparedUrl,
    as: asHadOrigin ? preparedAs : addBasePath(preparedAs)
  };
}

function resolveDynamicRoute(parsedHref, pages, applyBasePath = true) {
  const {
    pathname
  } = parsedHref;
  const cleanPathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)((0, _denormalizePagePath.denormalizePagePath)(applyBasePath ? delBasePath(pathname) : pathname));

  if (cleanPathname === '/404' || cleanPathname === '/_error') {
    return parsedHref;
  } // handle resolving href for dynamic routes


  if (!pages.includes(cleanPathname)) {
    // eslint-disable-next-line array-callback-return
    pages.some(page => {
      if ((0, _isDynamic.isDynamicRoute)(page) && (0, _routeRegex.getRouteRegex)(page).re.test(cleanPathname)) {
        parsedHref.pathname = applyBasePath ? addBasePath(page) : page;
        return true;
      }
    });
  }

  parsedHref.pathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)(parsedHref.pathname);
  return parsedHref;
}

const manualScrollRestoration =  false && false;
const SSG_DATA_NOT_FOUND = Symbol('SSG_DATA_NOT_FOUND');

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      if (res.status === 404) {
        return res.json().then(data => {
          if (data.notFound) {
            return {
              notFound: SSG_DATA_NOT_FOUND
            };
          }

          throw new Error(`Failed to load static props`);
        });
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      (0, _routeLoader.markAssetError)(err);
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  // In-flight Server Data Requests, for deduping
  constructor(_pathname, _query, _as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback,
    locale,
    locales,
    defaultLocale,
    domainLocales,
    isPreview
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sdr = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;
    this._inFlightRoute = void 0;
    this._shallow = void 0;
    this.locale = void 0;
    this.locales = void 0;
    this.defaultLocale = void 0;
    this.domainLocales = void 0;
    this.isReady = void 0;
    this.isPreview = void 0;
    this.isLocaleDomain = void 0;
    this._idx = 0;

    this.onPopState = e => {
      const state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: addBasePath(pathname),
          query
        }), (0, _utils.getURL)());
        return;
      }

      if (!state.__N) {
        return;
      }

      let forcedScroll;
      const {
        url,
        as,
        options,
        idx
      } = state;

      if (false) {}

      this._idx = idx;
      const {
        pathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as === this.asPath && pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(state)) {
        return;
      }

      this.change('replaceState', url, as, Object.assign({}, options, {
        shallow: options.shallow && this._shallow,
        locale: options.locale || this.defaultLocale
      }), forcedScroll);
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        initial: true,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App,
      styleSheets: [
        /* /_app does not need its stylesheets managed */
      ]
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    const autoExportDynamic = (0, _isDynamic.isDynamicRoute)(_pathname) && self.__NEXT_DATA__.autoExport;

    this.asPath = autoExportDynamic ? _pathname : _as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;
    this.isReady = !!(self.__NEXT_DATA__.gssp || self.__NEXT_DATA__.gip || !autoExportDynamic && !self.location.search);
    this.isPreview = !!isPreview;
    this.isLocaleDomain = false;

    if (false) {}

    if (false) {}
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as, options = {}) {
    if (false) {}

    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options, forcedScroll) {
    var _options$scroll;

    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    } // for static pages with query params in the URL we delay
    // marking the router ready until after the query is updated


    if (options._h) {
      this.isReady = true;
    } // Default to scroll reset behavior unless explicitly specified to be
    // `false`! This makes the behavior between using `Router#push` and a
    // `<Link />` consistent.


    options.scroll = !!((_options$scroll = options.scroll) != null ? _options$scroll : true);
    let localeChange = options.locale !== this.locale;

    if (false) { var _this$locales; }

    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    }

    const {
      shallow = false
    } = options;
    const routeProps = {
      shallow
    };

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute, routeProps);
    }

    as = addBasePath(addLocale(hasBasePath(as) ? delBasePath(as) : as, options.locale, this.defaultLocale));
    const cleanedAs = delLocale(hasBasePath(as) ? delBasePath(as) : as, this.locale);
    this._inFlightRoute = as; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs)) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as, routeProps); // TODO: do we need the resolved href when only a hash change?

      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route], null);
      Router.events.emit('hashChangeComplete', as, routeProps);
      return true;
    }

    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname,
      query
    } = parsed; // The build manifest needs to be loaded before auto-static dynamic pages
    // get their query parameters to allow ensuring they can be parsed properly
    // when rewritten to

    let pages, rewrites;

    try {
      pages = await this.pageLoader.getPageList();
      ({
        __rewrites: rewrites
      } = await (0, _routeLoader.getClientBuildManifest)());
    } catch (err) {
      // If we fail to resolve the page list or client-build manifest, we must
      // do a server-side transition:
      window.location.href = as;
      return false;
    }

    parsed = resolveDynamicRoute(parsed, pages);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1


    pathname = pathname ? (0, _normalizeTrailingSlash.removePathTrailingSlash)(delBasePath(pathname)) : pathname; // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url

    if (!this.urlIsNew(cleanedAs) && !localeChange) {
      method = 'replaceState';
    }

    let route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname); // we need to resolve the as value using rewrites for dynamic SSG
    // pages to allow building the data URL correctly

    let resolvedAs = as;

    if (false) {}

    if (!isLocalURL(as)) {
      if (true) {
        throw new Error(`Invalid href: "${url}" and as: "${as}", received relative href and external as` + `\nSee more info: https://err.sh/next.js/invalid-relative-url-external-as`);
      }

      window.location.href = as;
      return false;
    }

    resolvedAs = delLocale(delBasePath(resolvedAs), this.locale);

    if ((0, _isDynamic.isDynamicRoute)(route)) {
      const parsedAs = (0, _parseRelativeUrl.parseRelativeUrl)(resolvedAs);
      const asPathname = parsedAs.pathname;
      const routeRegex = (0, _routeRegex.getRouteRegex)(route);
      const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);
      const shouldInterpolate = route === asPathname;
      const interpolatedAs = shouldInterpolate ? interpolateAs(route, asPathname, query) : {};

      if (!routeMatch || shouldInterpolate && !interpolatedAs.result) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

        if (missingParams.length > 0) {
          if (true) {
            console.warn(`${shouldInterpolate ? `Interpolating href` : `Mismatching \`as\` and \`href\``} failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
          }

          throw new Error((shouldInterpolate ? `The provided \`href\` (${url}) value is missing query values (${missingParams.join(', ')}) to be interpolated properly. ` : `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). `) + `Read more: https://err.sh/vercel/next.js/${shouldInterpolate ? 'href-interpolation-failed' : 'incompatible-href-as'}`);
        }
      } else if (shouldInterpolate) {
        as = (0, _utils.formatWithValidation)(Object.assign({}, parsedAs, {
          pathname: interpolatedAs.result,
          query: omitParmsFromQuery(query, interpolatedAs.params)
        }));
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as, routeProps);

    try {
      var _self$__NEXT_DATA__$p, _self$__NEXT_DATA__$p2;

      let routeInfo = await this.getRouteInfo(route, pathname, query, as, resolvedAs, routeProps);
      let {
        error,
        props,
        __N_SSG,
        __N_SSP
      } = routeInfo; // handle redirect on client-transition

      if ((__N_SSG || __N_SSP) && props) {
        if (props.pageProps && props.pageProps.__N_REDIRECT) {
          const destination = props.pageProps.__N_REDIRECT; // check if destination is internal (resolves to a page) and attempt
          // client-navigation if it is falling back to hard navigation if
          // it's not

          if (destination.startsWith('/')) {
            const parsedHref = (0, _parseRelativeUrl.parseRelativeUrl)(destination);
            resolveDynamicRoute(parsedHref, pages, false);

            if (pages.includes(parsedHref.pathname)) {
              const {
                url: newUrl,
                as: newAs
              } = prepareUrlAs(this, destination, destination);
              return this.change(method, newUrl, newAs, options);
            }
          }

          window.location.href = destination;
          return new Promise(() => {});
        }

        this.isPreview = !!props.__N_PREVIEW; // handle SSG data 404

        if (props.notFound === SSG_DATA_NOT_FOUND) {
          let notFoundRoute;

          try {
            await this.fetchComponent('/404');
            notFoundRoute = '/404';
          } catch (_) {
            notFoundRoute = '/_error';
          }

          routeInfo = await this.getRouteInfo(notFoundRoute, notFoundRoute, query, as, resolvedAs, {
            shallow: false
          });
        }
      }

      Router.events.emit('beforeHistoryChange', as, routeProps);
      this.changeState(method, url, as, options);

      if (true) {
        const appComp = this.components['/_app'].Component;
        window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
      } // shallow routing is only allowed for same page URL changes.


      const isValidShallowRoute = options.shallow && this.route === route;

      if (options._h && pathname === '/_error' && ((_self$__NEXT_DATA__$p = self.__NEXT_DATA__.props) == null ? void 0 : (_self$__NEXT_DATA__$p2 = _self$__NEXT_DATA__$p.pageProps) == null ? void 0 : _self$__NEXT_DATA__$p2.statusCode) === 500 && props != null && props.pageProps) {
        // ensure statusCode is still correct for static 500 page
        // when updating query information
        props.pageProps.statusCode = 500;
      }

      await this.set(route, pathname, query, cleanedAs, routeInfo, forcedScroll || (isValidShallowRoute || !options.scroll ? null : {
        x: 0,
        y: 0
      })).catch(e => {
        if (e.cancelled) error = error || e;else throw e;
      });

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs, routeProps);
        throw error;
      }

      if (false) {}

      Router.events.emit('routeChangeComplete', as, routeProps);
      return true;
    } catch (err) {
      if (err.cancelled) {
        return false;
      }

      throw err;
    }
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      this._shallow = options.shallow;
      window.history[method]({
        url,
        as,
        options,
        __N: true,
        idx: this._idx = method !== 'pushState' ? this._idx : this._idx + 1
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, routeProps, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if ((0, _routeLoader.isAssetError)(err) || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as, routeProps); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      let Component;
      let styleSheets;
      let props;

      if (typeof Component === 'undefined' || typeof styleSheets === 'undefined') {
        ;
        ({
          page: Component,
          styleSheets
        } = await this.fetchComponent('/_error'));
      }

      const routeInfo = {
        props,
        Component,
        styleSheets,
        err,
        error: err
      };

      if (!routeInfo.props) {
        try {
          routeInfo.props = await this.getInitialProps(Component, {
            err,
            pathname,
            query
          });
        } catch (gipErr) {
          console.error('Error in error page `getInitialProps`: ', gipErr);
          routeInfo.props = {};
        }
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, routeProps, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, resolvedAs, routeProps) {
    try {
      const existingRouteInfo = this.components[route];

      if (routeProps.shallow && existingRouteInfo && this.route === route) {
        return existingRouteInfo;
      }

      const cachedRouteInfo = existingRouteInfo && 'initial' in existingRouteInfo ? undefined : existingRouteInfo;
      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        styleSheets: res.styleSheets,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "./node_modules/next/node_modules/react-is/index.js");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils.formatWithValidation)({
          pathname,
          query
        }), resolvedAs, __N_SSG, this.locale);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err) {
      return this.handleRouteInfoError(err, pathname, query, as, routeProps);
    }
  }

  set(route, pathname, query, as, data, resetScroll) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data, resetScroll);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value or `#top`
    // To mirror browsers

    if (hash === '' || hash === 'top') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname
    } = parsed;

    if (false) {}

    const pages = await this.pageLoader.getPageList();
    parsed = resolveDynamicRoute(parsed, pages, false);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    }

    let route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    let resolvedAs = asPath;

    if (false) {} // Prefetch is not supported in development mode because it would trigger on-demand-entries


    if (true) {
      return;
    }

    await Promise.all([this.pageLoader._isSsg(url).then(isSsg => {
      return isSsg ? this._getStaticData(this.pageLoader.getDataHref(url, resolvedAs, true, typeof options.locale !== 'undefined' ? options.locale : this.locale)) : false;
    }), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if (false) {}

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    const {
      href: resourceKey
    } = new URL(dataHref, window.location.href);

    if (this.sdr[resourceKey]) {
      return this.sdr[resourceKey];
    }

    return this.sdr[resourceKey] = fetchNextData(dataHref, this.isSsr).then(data => {
      delete this.sdr[resourceKey];
      return data;
    }).catch(err => {
      delete this.sdr[resourceKey];
      throw err;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as, routeProps) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as, routeProps);
      this.clc();
      this.clc = null;
    }
  }

  notify(data, resetScroll) {
    return this.sub(data, this.components['/_app'].Component, resetScroll);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/format-url.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.formatUrl = formatUrl;

var querystring = _interopRequireWildcard(__webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
} // Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


const slashedProtocols = /https?|ftp|gopher|file/;

function formatUrl(urlObj) {
  let {
    auth,
    hostname
  } = urlObj;
  let protocol = urlObj.protocol || '';
  let pathname = urlObj.pathname || '';
  let hash = urlObj.hash || '';
  let query = urlObj.query || '';
  let host = false;
  auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';

  if (urlObj.host) {
    host = auth + urlObj.host;
  } else if (hostname) {
    host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);

    if (urlObj.port) {
      host += ':' + urlObj.port;
    }
  }

  if (query && typeof query === 'object') {
    query = String(querystring.urlQueryToSearchParams(query));
  }

  let search = urlObj.search || query && `?${query}` || '';
  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash[0] !== '#') hash = '#' + hash;
  if (search && search[0] !== '?') search = '?' + search;
  pathname = pathname.replace(/[?#]/g, encodeURIComponent);
  search = search.replace('#', '%23');
  return `${protocol}${host}${pathname}${search}${hash}`;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;

var _utils = __webpack_require__(/*! ../../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _querystring = __webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");
/**
* Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
* (e.g. `./hello`) then at least base must be.
* Absolute urls are rejected with one exception, in the browser, absolute urls that are on
* the current origin will be parsed as relative
*/


function parseRelativeUrl(url, base) {
  const globalBase = new URL(true ? 'http://n' : undefined);
  const resolvedBase = base ? new URL(base, globalBase) : globalBase;
  const {
    pathname,
    searchParams,
    search,
    hash,
    href,
    origin
  } = new URL(url, resolvedBase);

  if (origin !== globalBase.origin) {
    throw new Error(`invariant: invalid relative URL, router received ${url}`);
  }

  return {
    pathname,
    query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
    search,
    hash,
    href: href.slice(globalBase.origin.length)
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/querystring.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.searchParamsToUrlQuery = searchParamsToUrlQuery;
exports.urlQueryToSearchParams = urlQueryToSearchParams;
exports.assign = assign;

function searchParamsToUrlQuery(searchParams) {
  const query = {};
  searchParams.forEach((value, key) => {
    if (typeof query[key] === 'undefined') {
      query[key] = value;
    } else if (Array.isArray(query[key])) {
      ;
      query[key].push(value);
    } else {
      query[key] = [query[key], value];
    }
  });
  return query;
}

function stringifyUrlQueryParam(param) {
  if (typeof param === 'string' || typeof param === 'number' && !isNaN(param) || typeof param === 'boolean') {
    return String(param);
  } else {
    return '';
  }
}

function urlQueryToSearchParams(urlQuery) {
  const result = new URLSearchParams();
  Object.entries(urlQuery).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach(item => result.append(key, stringifyUrlQueryParam(item)));
    } else {
      result.set(key, stringifyUrlQueryParam(value));
    }
  });
  return result;
}

function assign(target, ...searchParamsList) {
  searchParamsList.forEach(searchParams => {
    Array.from(searchParams.keys()).forEach(key => target.delete(key));
    searchParams.forEach((value, key) => target.append(key, value));
  });
  return target;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites-noop.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites-noop.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = resolveRewrites;

function resolveRewrites() {}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function parseParameter(param) {
  const optional = param.startsWith('[') && param.endsWith(']');

  if (optional) {
    param = param.slice(1, -1);
  }

  const repeat = param.startsWith('...');

  if (repeat) {
    param = param.slice(3);
  }

  return {
    key: param,
    repeat,
    optional
  };
}

function getRouteRegex(normalizedRoute) {
  const segments = (normalizedRoute.replace(/\/$/, '') || '/').slice(1).split('/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = segments.map(segment => {
    if (segment.startsWith('[') && segment.endsWith(']')) {
      const {
        key,
        optional,
        repeat
      } = parseParameter(segment.slice(1, -1));
      groups[key] = {
        pos: groupIndex++,
        repeat,
        optional
      };
      return repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
    } else {
      return `/${escapeRegex(segment)}`;
    }
  }).join(''); // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    let routeKeyCharCode = 97;
    let routeKeyCharLength = 1; // builds a minimal routeKey using only a-z and minimal number of characters

    const getSafeRouteKey = () => {
      let routeKey = '';

      for (let i = 0; i < routeKeyCharLength; i++) {
        routeKey += String.fromCharCode(routeKeyCharCode);
        routeKeyCharCode++;

        if (routeKeyCharCode > 122) {
          routeKeyCharLength++;
          routeKeyCharCode = 97;
        }
      }

      return routeKey;
    };

    const routeKeys = {};
    let namedParameterizedRoute = segments.map(segment => {
      if (segment.startsWith('[') && segment.endsWith(']')) {
        const {
          key,
          optional,
          repeat
        } = parseParameter(segment.slice(1, -1)); // replace any non-word characters since they can break
        // the named regex

        let cleanedKey = key.replace(/\W/g, '');
        let invalidKey = false; // check if the key is still invalid and fallback to using a known
        // safe key

        if (cleanedKey.length === 0 || cleanedKey.length > 30) {
          invalidKey = true;
        }

        if (!isNaN(parseInt(cleanedKey.substr(0, 1)))) {
          invalidKey = true;
        }

        if (invalidKey) {
          cleanedKey = getSafeRouteKey();
        }

        routeKeys[cleanedKey] = key;
        return repeat ? optional ? `(?:/(?<${cleanedKey}>.+?))?` : `/(?<${cleanedKey}>.+?)` : `/(?<${cleanedKey}>[^/]+?)`;
      } else {
        return `/${escapeRegex(segment)}`;
      }
    }).join('');
    return {
      re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
      groups,
      routeKeys,
      namedRegex: `^${namedParameterizedRoute}(?:/)?$`
    };
  }

  return {
    re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
    groups
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _formatUrl = __webpack_require__(/*! ./router/utils/format-url */ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (true) {
    var _App$prototype;

    if ((_App$prototype = App.prototype) != null && _App$prototype.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/vercel/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/vercel/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return (0, _formatUrl.formatUrl)(url);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "./node_modules/next/dist/next-server/server/denormalize-page-path.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/server/denormalize-page-path.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.normalizePathSep=normalizePathSep;exports.denormalizePagePath=denormalizePagePath;function normalizePathSep(path){return path.replace(/\\/g,'/');}function denormalizePagePath(page){page=normalizePathSep(page);if(page.startsWith('/index/')){page=page.slice(6);}else if(page==='/index'){page='/';}return page;}
//# sourceMappingURL=denormalize-page-path.js.map

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js":
/*!*************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/next/node_modules/react-is/cjs/react-is.development.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/next/node_modules/react-is/cjs/react-is.development.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
exports.isValidElementType = isValidElementType;
exports.typeOf = typeOf;
  })();
}


/***/ }),

/***/ "./node_modules/next/node_modules/react-is/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/next/node_modules/react-is/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/next/node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./pages/tags/[slug].tsx":
/*!*******************************!*\
  !*** ./pages/tags/[slug].tsx ***!
  \*******************************/
/*! exports provided: default, getServerSideProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getServerSideProps", function() { return getServerSideProps; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_useAllMQ__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/useAllMQ */ "./utils/useAllMQ.ts");
/* harmony import */ var _services_api_LikeApi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/api/LikeApi */ "./services/api/LikeApi.ts");
/* harmony import */ var _layouts_MainLayout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../layouts/MainLayout */ "./layouts/MainLayout.tsx");
/* harmony import */ var _components_MiniPost__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/MiniPost */ "./components/MiniPost/index.tsx");
/* harmony import */ var _services_api_PostApi__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/api/PostApi */ "./services/api/PostApi.ts");
/* harmony import */ var _components_LoadMore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/LoadMore */ "./components/LoadMore/index.tsx");

var _jsxFileName = "C:\\Projects\\projects\\frontend\\pages\\tags\\[slug].tsx";







function Home(props) {
  const {
    0: isLoading,
    1: setIsLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const mq = Object(_utils_useAllMQ__WEBPACK_IMPORTED_MODULE_2__["useAllMQ"])();

  const handleSetLike = async (postId, like) => {
    await Object(_services_api_LikeApi__WEBPACK_IMPORTED_MODULE_3__["setLike"])(postId, 'post', like);
  };

  const {
    0: posts,
    1: setPosts
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(props.posts);
  const {
    0: page,
    1: setPage
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(props.posts.meta.current_page);
  const {
    0: maxPage,
    1: setMaxPage
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(props.posts.meta.last_page);
  react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(() => {
    const runEffect = async () => {
      setPosts(await Object(_services_api_PostApi__WEBPACK_IMPORTED_MODULE_6__["getPosts"])({
        page
      }));
    };

    runEffect();
  }, [page]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("main", {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_layouts_MainLayout__WEBPACK_IMPORTED_MODULE_4__["MainLayout"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "wrapper",
        children: [!mq.isXS && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "left-side"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "content",
          children: [isLoading && 'Загрука...', !isLoading && (posts === null || posts === void 0 ? void 0 : posts.data.map((post, key) => {
            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_MiniPost__WEBPACK_IMPORTED_MODULE_5__["MiniPost"], {
              postData: {
                commentsCount: post.comments_count,
                description: post.description,
                dislikesCount: post.dislikes_count,
                likesCount: post.likes_count,
                title: post.title,
                viewsCount: post.views,
                slug: post.slug,
                user: {
                  avatarUrl: post.user.avatar,
                  id: post.user.id,
                  name: post.user.name
                },
                imageUrl: post.img,
                id: post.id,
                tags: [],
                time: new Date(post.updated_at),
                vote: post === null || post === void 0 ? void 0 : post.liked_type
              },
              onSetLike: handleSetLike
            }, post.id, false, {
              fileName: _jsxFileName,
              lineNumber: 52,
              columnNumber: 36
            }, this);
          })), !isLoading && page !== maxPage && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_LoadMore__WEBPACK_IMPORTED_MODULE_7__["LoadMore"], {
            onClick: () => setPage(page + 1)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 78,
            columnNumber: 29
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 21
        }, this), !mq.isXS && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "right-side"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 83,
          columnNumber: 25
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 36,
    columnNumber: 9
  }, this);
}
async function getServerSideProps(ctx) {
  var _ctx$query, _ctx$req$cookies;

  const posts = await Object(_services_api_PostApi__WEBPACK_IMPORTED_MODULE_6__["getPosts"])({
    categories: (_ctx$query = ctx.query) === null || _ctx$query === void 0 ? void 0 : _ctx$query.slug
  }, (_ctx$req$cookies = ctx.req.cookies) === null || _ctx$req$cookies === void 0 ? void 0 : _ctx$req$cookies.auth_token);
  return {
    props: {
      posts
    }
  };
}

/***/ }),

/***/ "./redux/directory/directory.selector.ts":
/*!***********************************************!*\
  !*** ./redux/directory/directory.selector.ts ***!
  \***********************************************/
/*! exports provided: selectThemesState, selectCategoriesState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectThemesState", function() { return selectThemesState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectCategoriesState", function() { return selectCategoriesState; });
const selectThemesState = state => {
  return state.directory.data.themes;
};
const selectCategoriesState = state => {
  return state.directory.data.categories;
};

/***/ }),

/***/ "./redux/user/user.selector.ts":
/*!*************************************!*\
  !*** ./redux/user/user.selector.ts ***!
  \*************************************/
/*! exports provided: selectUserState, selectUserNotifications */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectUserState", function() { return selectUserState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectUserNotifications", function() { return selectUserNotifications; });
const selectUserState = state => {
  return state.user;
};
const selectUserNotifications = state => {
  return state.user.notifications;
};

/***/ }),

/***/ "./services/api/CommentApi.ts":
/*!************************************!*\
  !*** ./services/api/CommentApi.ts ***!
  \************************************/
/*! exports provided: CommentApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentApi", function() { return CommentApi; });
/* harmony import */ var _core_axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/axios */ "./core/axios.ts");

const CommentApi = {
  get: async (params = {}) => {
    const {
      data
    } = await _core_axios__WEBPACK_IMPORTED_MODULE_0__["default"].get('/api/comments', {
      params
    });
    return data;
  },
  save: async (postId, text, toUserId, parentCommentId, commentId) => {
    const body = {
      post_id: postId,
      text,
      user_reply_id: toUserId,
      parent_id: parentCommentId
    };

    if (commentId) {
      const {
        data
      } = await _core_axios__WEBPACK_IMPORTED_MODULE_0__["default"].put(`/api/comments/${commentId}`, body);
      return data;
    }

    const {
      data
    } = await _core_axios__WEBPACK_IMPORTED_MODULE_0__["default"].post(`/api/comments`, body);
    return data;
  }
};

/***/ }),

/***/ "./services/api/LikeApi.ts":
/*!*********************************!*\
  !*** ./services/api/LikeApi.ts ***!
  \*********************************/
/*! exports provided: setLike */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setLike", function() { return setLike; });
/* harmony import */ var _core_axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/axios */ "./core/axios.ts");

const setLike = async (id, type = 'post', like) => {
  const {
    data
  } = await _core_axios__WEBPACK_IMPORTED_MODULE_0__["default"].post('/api/likes', {
    type,
    id,
    like: like ? like : null
  });
};

/***/ }),

/***/ "./services/api/PostApi.ts":
/*!*********************************!*\
  !*** ./services/api/PostApi.ts ***!
  \*********************************/
/*! exports provided: saveImage, savePost, getPosts, getThemes, saveByUrl, showPost, getPostComments */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveImage", function() { return saveImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "savePost", function() { return savePost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPosts", function() { return getPosts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getThemes", function() { return getThemes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveByUrl", function() { return saveByUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showPost", function() { return showPost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPostComments", function() { return getPostComments; });
/* harmony import */ var _core_axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/axios */ "./core/axios.ts");

const saveImage = image => {
  const formData = new FormData();
  formData.append('image', image);
  return _core_axios__WEBPACK_IMPORTED_MODULE_0__["default"].post('/api/posts/image-by-url', formData);
};
const savePost = async (postData) => {
  let body = {
    body: postData.body,
    title: postData.title,
    description: 'Test',
    themes: postData.themes || [],
    status: postData === null || postData === void 0 ? void 0 : postData.status,
    category: postData.category
  };

  if (postData !== null && postData !== void 0 && postData.id) {
    const {
      data
    } = await _core_axios__WEBPACK_IMPORTED_MODULE_0__["default"].put(`/api/posts/${postData.id}`, body);
    return data;
  } else {
    const {
      data
    } = await _core_axios__WEBPACK_IMPORTED_MODULE_0__["default"].post(`/api/posts`, body);
    return data;
  }
};
const getPosts = async (params = {}, token) => {
  let headers = {};

  if (token) {
    headers = {
      Authorization: `Bearer ${token}`
    };
  }

  const {
    data
  } = await _core_axios__WEBPACK_IMPORTED_MODULE_0__["default"].get('/api/posts', {
    params,
    headers
  });
  return data;
};
const getThemes = async () => {
  const {
    data
  } = await _core_axios__WEBPACK_IMPORTED_MODULE_0__["default"].get('/api/posts/themes');
  return data;
};
const saveByUrl = async url => {
  return await _core_axios__WEBPACK_IMPORTED_MODULE_0__["default"].post('/api/posts/image-by-url', {
    url
  });
};
const showPost = async (slug, token) => {
  const {
    data
  } = await _core_axios__WEBPACK_IMPORTED_MODULE_0__["default"].get(`/api/posts/${slug}`, {
    headers: {
      Authorization: token ? `Bearer ${token}` : ''
    }
  });
  return data;
};
const getPostComments = async (id, apiToken) => {
  const {
    data
  } = await _core_axios__WEBPACK_IMPORTED_MODULE_0__["default"].get(`/api/posts/${id}/comments`, {
    headers: {
      Authorization: apiToken ? `Bearer ${apiToken}` : ''
    }
  });
  return data;
};

/***/ }),

/***/ "./services/api/SpecialistsApi.ts":
/*!****************************************!*\
  !*** ./services/api/SpecialistsApi.ts ***!
  \****************************************/
/*! exports provided: getSpecialists, getSpecialistCategories */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSpecialists", function() { return getSpecialists; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSpecialistCategories", function() { return getSpecialistCategories; });
/* harmony import */ var _core_axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/axios */ "./core/axios.ts");

const getSpecialists = async params => {
  const {
    data
  } = await _core_axios__WEBPACK_IMPORTED_MODULE_0__["default"].get('/api/users', {
    params
  });
  return data;
};
const getSpecialistCategories = async () => {
  const {
    data
  } = await _core_axios__WEBPACK_IMPORTED_MODULE_0__["default"].get('/api/users/categories');
  return data;
};

/***/ }),

/***/ "./services/api/UserApi.ts":
/*!*********************************!*\
  !*** ./services/api/UserApi.ts ***!
  \*********************************/
/*! exports provided: UserApi, getCookie */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserApi", function() { return UserApi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCookie", function() { return getCookie; });
/* harmony import */ var _core_axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/axios */ "./core/axios.ts");

const UserApi = {
  login: async (email, password) => {
    const formData = new FormData();
    formData.append('email', email);
    formData.append('password', password);
    formData.append('remember', '1');
    const {
      data
    } = await _core_axios__WEBPACK_IMPORTED_MODULE_0__["default"].post('/login', formData, {
      maxRedirects: 0
    });
    return data;
  },
  getMe: async token => {
    const {
      data
    } = await _core_axios__WEBPACK_IMPORTED_MODULE_0__["default"].get('/api/user', {
      headers: {
        Authorization: token ? `Bearer ${token}` : ''
      }
    });
    return data;
  },
  getNotifications: async token => {
    const {
      data
    } = await _core_axios__WEBPACK_IMPORTED_MODULE_0__["default"].get('/api/user/notifications', {
      headers: {
        Authorization: token ? `Bearer ${token}` : ''
      }
    });
    return data;
  },
  show: async id => {
    const {
      data
    } = await _core_axios__WEBPACK_IMPORTED_MODULE_0__["default"].get('/api/users/' + id);
    return data;
  },
  updateProfile: async (data, id) => {
    var _data$links;

    const formData = new FormData();
    Object.keys(data).forEach(param => {
      if (param !== 'links') {
        formData.append(param, data[param]);
      }
    });

    if ((_data$links = data.links) !== null && _data$links !== void 0 && _data$links.length) {
      data.links.map((l, key) => {
        formData.append(`links[${key}]`, l);
      });
    }

    await _core_axios__WEBPACK_IMPORTED_MODULE_0__["default"].patch(`/api/user/${id}`, data);
  }
};
const getCookie = () => {
  return _core_axios__WEBPACK_IMPORTED_MODULE_0__["default"].get('/sanctum/csrf-cookie');
};

/***/ }),

/***/ "./utils/useAllMQ.ts":
/*!***************************!*\
  !*** ./utils/useAllMQ.ts ***!
  \***************************/
/*! exports provided: useAllMQ */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useAllMQ", function() { return useAllMQ; });
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__);

const useAllMQ = () => {
  const theme = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["useTheme"])();
  return {
    isXS: Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["useMediaQuery"])(theme.breakpoints.down('xs')),
    isSM: Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["useMediaQuery"])(theme.breakpoints.down('sm')),
    isMD: Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["useMediaQuery"])(theme.breakpoints.down('md')),
    isLG: Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_0__["useMediaQuery"])(theme.breakpoints.down('lg'))
  };
};

/***/ }),

/***/ "@material-ui/core":
/*!************************************!*\
  !*** external "@material-ui/core" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core");

/***/ }),

/***/ "@material-ui/core/Avatar":
/*!*******************************************!*\
  !*** external "@material-ui/core/Avatar" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Avatar");

/***/ }),

/***/ "@material-ui/core/Backdrop":
/*!*********************************************!*\
  !*** external "@material-ui/core/Backdrop" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Backdrop");

/***/ }),

/***/ "@material-ui/core/Button":
/*!*******************************************!*\
  !*** external "@material-ui/core/Button" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Button");

/***/ }),

/***/ "@material-ui/core/Collapse":
/*!*********************************************!*\
  !*** external "@material-ui/core/Collapse" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Collapse");

/***/ }),

/***/ "@material-ui/core/Dialog":
/*!*******************************************!*\
  !*** external "@material-ui/core/Dialog" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Dialog");

/***/ }),

/***/ "@material-ui/core/DialogContent":
/*!**************************************************!*\
  !*** external "@material-ui/core/DialogContent" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/DialogContent");

/***/ }),

/***/ "@material-ui/core/Typography":
/*!***********************************************!*\
  !*** external "@material-ui/core/Typography" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Typography");

/***/ }),

/***/ "@material-ui/icons/Close":
/*!*******************************************!*\
  !*** external "@material-ui/icons/Close" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Close");

/***/ }),

/***/ "@mui/material/IconButton":
/*!*******************************************!*\
  !*** external "@mui/material/IconButton" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@mui/material/IconButton");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "clsx":
/*!***********************!*\
  !*** external "clsx" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("clsx");

/***/ }),

/***/ "date-fns":
/*!***************************!*\
  !*** external "date-fns" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("date-fns");

/***/ }),

/***/ "date-fns/locale":
/*!**********************************!*\
  !*** external "date-fns/locale" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("date-fns/locale");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0F1dGhEaWFsb2cvQXV0aERpYWxvZy5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0F1dGhEaWFsb2cvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQXZhaWxhYmxlRm9yV29yay9BdmFpbGFibGVGb3JXb3JrLm1vZHVsZS5zY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQXZhaWxhYmxlRm9yV29yay9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9CdXR0b24vQnV0dG9uLm1vZHVsZS5zY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQnV0dG9uL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NoZWNrYm94L0NoZWNrYm94Lm1vZHVsZS5zY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQ2hlY2tib3gvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSGVhZGVyL0hlYWRlci5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hlYWRlci9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9MaWtlQmxvY2svTGlrZUJsb2NrLm1vZHVsZS5zY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTGlrZUJsb2NrL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xvYWRNb3JlL0xvYWRNb3JlLm1vZHVsZS5zY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTG9hZE1vcmUvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTWVudUxpc3QvTWVudUxpc3QubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9NZW51TGlzdC9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9NaW5pUG9zdC9NaW5pUG9zdC5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL01pbmlQb3N0L2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL01vYmlsZVByb2ZpbGVQb3B1cC9Nb2JpbGVQcm9maWxlUG9wdXAubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Nb2JpbGVQcm9maWxlUG9wdXAvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTmF2aWdhdGlvbkRyYXdlci9OYXZpZ2F0aW9uLm1vZHVsZS5zY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTmF2aWdhdGlvbkRyYXdlci9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Ob3RpZmljYXRpb25Ecm9wZG93bi9Ob3RpZmljYXRpb25Ecm9wZG93bi5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL05vdGlmaWNhdGlvbkRyb3Bkb3duL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL05vdGlmaWNhdGlvbkRyb3Bkb3duL2l0ZW0udHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvUGFzdFRpbWVMYWJlbC9QYXN0VGltZUxhYmVsLm1vZHVsZS5zY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvUGFzdFRpbWVMYWJlbC9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Qcm9maWxlUG9wdXAvUHJvZmlsZVBvcHVwLm1vZHVsZS5zY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvUHJvZmlsZVBvcHVwL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1NlYXJjaFBvcHVwL0l0ZW0udHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvU2VhcmNoUG9wdXAvU2VhcmNoUG9wdXAubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9TZWFyY2hQb3B1cC9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9TaWRlQmxvY2svU2lkZUJsb2NrLm1vZHVsZS5zY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvU2lkZUJsb2NrL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1RhZ3MvVGFncy5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1RhZ3MvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvVXNlclZpZXdPbkNvbnRlbnQvVXNlclZpZXdPbkNvbnRlbnQubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Vc2VyVmlld09uQ29udGVudC9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9WaWV3c0FuZENvbW1lbnRzL1ZpZXdzQW5kQ29tbWVudHMubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9WaWV3c0FuZENvbW1lbnRzL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2ljb25zL0NvbW1lbnRJY29uLnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2ljb25zL0V5ZUljb24udHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvaWNvbnMvVGh1bWJVcEljb24udHN4Iiwid2VicGFjazovLy8uL2NvcmUvYXhpb3MudHMiLCJ3ZWJwYWNrOi8vLy4vbGF5b3V0cy9NYWluTGF5b3V0LnRzeCIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L2xpbmsudHN4Iiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvbm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvcmVxdWVzdC1pZGxlLWNhbGxiYWNrLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvcm91dGUtbG9hZGVyLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvcm91dGVyLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvdXNlLWludGVyc2VjdGlvbi50c3giLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC93aXRoLXJvdXRlci50c3giLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9pMThuL25vcm1hbGl6ZS1sb2NhbGUtcGF0aC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL21pdHQudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2Zvcm1hdC11cmwudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvaXMtZHluYW1pYy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9wYXJzZS1yZWxhdGl2ZS11cmwudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcXVlcnlzdHJpbmcudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcmVzb2x2ZS1yZXdyaXRlcy1ub29wLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLW1hdGNoZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtcmVnZXgudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi91dGlscy50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL3NlcnZlci9kZW5vcm1hbGl6ZS1wYWdlLXBhdGguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbGluay5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL3JlYWN0LWlzL2Nqcy9yZWFjdC1pcy5kZXZlbG9wbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvcmVhY3QtaXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvdGFncy9bc2x1Z10udHN4Iiwid2VicGFjazovLy8uL3JlZHV4L2RpcmVjdG9yeS9kaXJlY3Rvcnkuc2VsZWN0b3IudHMiLCJ3ZWJwYWNrOi8vLy4vcmVkdXgvdXNlci91c2VyLnNlbGVjdG9yLnRzIiwid2VicGFjazovLy8uL3NlcnZpY2VzL2FwaS9Db21tZW50QXBpLnRzIiwid2VicGFjazovLy8uL3NlcnZpY2VzL2FwaS9MaWtlQXBpLnRzIiwid2VicGFjazovLy8uL3NlcnZpY2VzL2FwaS9Qb3N0QXBpLnRzIiwid2VicGFjazovLy8uL3NlcnZpY2VzL2FwaS9TcGVjaWFsaXN0c0FwaS50cyIsIndlYnBhY2s6Ly8vLi9zZXJ2aWNlcy9hcGkvVXNlckFwaS50cyIsIndlYnBhY2s6Ly8vLi91dGlscy91c2VBbGxNUS50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0F2YXRhclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0JhY2tkcm9wXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvQ29sbGFwc2VcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dDb250ZW50XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9DbG9zZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtdWkvbWF0ZXJpYWwvSWNvbkJ1dHRvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY2xzeFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImRhdGUtZm5zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZGF0ZS1mbnMvbG9jYWxlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJlZHV4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwibmFtZXMiOlsiQXV0aERpYWxvZyIsImNoaWxkcmVuIiwib3BlbiIsInNpemUiLCJvbkNsb3NlIiwiY2xhc3NOYW1lIiwic3R5bGVzIiwibW9kYWwiLCJjb2xvciIsInRoZW1lIiwicGFsZXR0ZSIsImdyZXkiLCJhbGlnblNlbGYiLCJtYXJnaW5Ub3AiLCJtYXJnaW5SaWdodCIsInBhZGRpbmciLCJmb250U2l6ZSIsInBhZGRpbmdUb3AiLCJwYWRkaW5nQm90dG9tIiwiY29udGVudCIsInRpdGxlIiwic3ViVGl0bGUiLCJBUElfVVJMIiwidGV4dCIsImxpbmsiLCJBdmFpbGFibGVGb3JXb3JrIiwiY2hlY2tlZCIsIm9uQ2hhbmdlIiwic2V0Q2hlY2tlZCIsImlzTG9hZGluZyIsImNsc3giLCJ1bmNoZWNrZWRUaXRsZSIsInVuY2hlY2tlZCIsImNoZWNrZWRUaXRsZSIsIkJ1dHRvbiIsInZhcmlhbnQiLCJzdGFydEljb24iLCJlbmRJY29uIiwib25DbGljayIsImZ1bGxXaWR0aCIsImRpc2FibGVkIiwidHlwZSIsImJ1dHRvbiIsInJvb3QiLCJjb250YWluZWQiLCJvdXRsaW5lZCIsImNvbnRhaW5lZFByaW1hcnkiLCJjb250YWluZWRTZWNvbmRhcnkiLCJvdXRsaW5lZFByaW1hcnkiLCJvdXRsaW5lZFNlY29uZGFyeSIsInRleHRQcmltYXJ5IiwidGV4dFNlY29uZGFyeSIsIkNoZWNrYm94IiwiY2hlY2tib3giLCJzd2l0Y2hCYXNlIiwidGh1bWIiLCJ0cmFjayIsIkhlYWRlciIsIm9uQ2xpY2tIYW1idXJnZXIiLCJzZXRJc0xvYWRpbmciLCJ1c2VTdGF0ZSIsInVzZXIiLCJ1c2VTZWxlY3RvciIsInNlbGVjdFVzZXJTdGF0ZSIsIm1xIiwidXNlQWxsTVEiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJkYXRhIiwicmVhZHlfZm9yX3dvcmsiLCJpc1NlYXJjaCIsInNldElzU2VhcmNoIiwiaXNNb2JpbGVQb3B1cCIsInNldElzTW9iaWxlUG9wdXAiLCJpc1Zpc2libGUiLCJzZXRJc1Zpc2libGUiLCJzZWFyY2hJbnB1dCIsInNldFNlYXJjaElucHV0IiwidXNlRWZmZWN0IiwiZG9jdW1lbnQiLCJib2R5IiwiY2xhc3NMaXN0IiwiYWRkIiwibm9zY3JvbGwiLCJyZW1vdmUiLCJvbkNoYW5nZUNoZWNrYm94IiwiZXZlbnQiLCJoYW5kbGVDaGFuZ2VDaGVja2JveCIsInRhcmdldCIsIm9uT3BlblNlYXJjaCIsIm9uQ2xvc2VTZWFyY2giLCJmbGFnIiwiVXNlckFwaSIsInVwZGF0ZVByb2ZpbGUiLCJpZCIsInRoZW4iLCJyIiwiY2F0Y2giLCJlcnIiLCJPYmplY3QiLCJ2YWx1ZXMiLCJyZXNwb25zZSIsImVycm9ycyIsImZvckVhY2giLCJlIiwiYWxlcnQiLCJmaW5hbGx5IiwiaGFuZGxlQ2xpY2siLCJwdXNoIiwiaGVhZGVyIiwibG9nbyIsInNlYXJjaCIsImlucHV0IiwidmFsdWUiLCJiYWNrZHJvcCIsIm1lbnVCdXR0b24iLCJuYW1lIiwiYXZhdGFyIiwiaXNYUyIsIkxpa2VCbG9jayIsIm1vZGUiLCJsaWtlcyIsImRpc2xpa2VzIiwidm90ZSIsIm9uVGh1bWJVcENsaWNrIiwidW5kZWZpbmVkIiwib25UaHVtYkRvd25DbGljayIsImxpa2VWb3RlZCIsImRpc2xpa2VWb3RlZCIsIm5vVm90ZXMiLCJsaWtlQmxvY2siLCJsaWtlQmxvY2tGdWxsIiwibGlrZUJsb2NrTWluaSIsInVwQmxvY2siLCJkb3duQmxvY2siLCJyb3RhdGUiLCJ0aHVtYlVwQ2xhc3NOYW1lIiwidGh1bWJEb3duQ2xhc3NOYW1lIiwiTG9hZE1vcmUiLCJsb2FkTW9yZSIsIk1lbnVMaXN0IiwiaXRlbXMiLCJpdGVtIiwibWFwIiwidXJsIiwiaXNBY3RpdmUiLCJpY29uIiwiaGFzTW9yZSIsIm5ld0NvdW50IiwiTWluaVBvc3QiLCJwb3N0RGF0YSIsIm9uU2V0TGlrZSIsInRpbWUiLCJ0YWdzIiwiaW1hZ2VVcmwiLCJkZXNjcmlwdGlvbiIsImNvbW1lbnRzQ291bnQiLCJ2aWV3c0NvdW50IiwibGlrZXNDb3VudCIsImRpc2xpa2VzQ291bnQiLCJzbHVnIiwibGlrZXNBbmREaXNsaWtlcyIsInNldExpa2VzQW5kRGlzbGlrZXMiLCJSZWFjdCIsImhhbmRsZVNldExpa2UiLCJsaWtlIiwicG9zdCIsImluZm8iLCJnZXRUaW1lIiwidGFnIiwiaW1hZ2UiLCJwb3B1bGFyaXR5IiwicG9wdWxhcml0eV9sZWZ0IiwicG9wdWxhcml0eV9yaWdodCIsIm1vY2t1cCIsImF1dGhvcnMiLCJhcnRpY2xlcyIsImNvbW1lbnRzIiwicG9kY2FzdHMiLCJNb2JpbGVQcm9maWxlUG9wdXAiLCJvbkxvZ291dCIsIndpbmRvdyIsImNvbmZpcm0iLCJjb29raWUiLCJsb2NhbFN0b3JhZ2UiLCJyZW1vdmVJdGVtIiwibG9jYXRpb24iLCJocmVmIiwiY29udGFpbmVyIiwiaGVhZGVyX3Byb2ZpbGUiLCJhdmFpbGFibGUiLCJzZWN0aW9uMiIsImRpdmlkZXIiLCJtZWVseiIsImFib3V0IiwiTmF2aWdhdGlvbkRyYXdlciIsIm1lbnVPcGVuZWQiLCJzZWxlY3RlZFRoZW1lcyIsInNldFNlbGVjdGVkVGhlbWVzIiwidGhlbWVzIiwic2VsZWN0VGhlbWVzU3RhdGUiLCJjYXRlZ29yaWVzIiwic2VsZWN0Q2F0ZWdvcmllc1N0YXRlIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsImhhbmRsZUxvZ291dCIsImhhbmRsZVNlbGVjdFRoZW1lIiwidCIsInBhcGVyIiwiY2xvc2VCdXR0b24iLCJjbG9zZUljb24iLCJjIiwibG9nb3V0IiwiTm90aWZpY2F0aW9uRHJvcGRvd24iLCJhbmNob3JFbCIsInNldEFuY2hvckVsIiwiQm9vbGVhbiIsIm5vdGlmaWNhdGlvbnMiLCJzZWxlY3RVc2VyTm90aWZpY2F0aW9ucyIsInRvZ2dsZU9wZW5Qb3B1cCIsImNvbnNvbGUiLCJsb2ciLCJjdXJyZW50VGFyZ2V0IiwiaGFuZGxlQ2xvc2UiLCJub3RpZmljYXRpb24iLCJub3RpZmljYXRpb25Qb3B1cCIsInZlcnRpY2FsIiwiaG9yaXpvbnRhbCIsIm5vdGlmaWNhdGlvbkxpc3QiLCJsZW5ndGgiLCJBZGRDb21tZW50SXRlbSIsImxpc3RDb250ZW50IiwiU2V0TGlrZU9yRGlzbGlrZUl0ZW0iLCJpc0xpa2UiLCJsaWtlYWJsZV90eXBlIiwiaW5jbHVkZXMiLCJjb21tZW50IiwiSXRlbSIsIlBhc3RUaW1lTGFiZWwiLCJsZWZ0U2lkZVBvaW50IiwidGltZVdpdGhMZWZ0U2lkZVBvaW50IiwiZm9ybWF0RGlzdGFuY2VUb05vdyIsImxvY2FsZSIsInJ1IiwiYWRkU3VmZml4IiwiUHJvZmlsZVBvcHVwIiwicG9wb3ZlciIsInNlY3Rpb24xIiwicCIsInNldE9wZW4iLCJzZWFyY2hUaXRsZUlubmVyIiwic2VhcmNoVGl0bGUiLCJzaG93QWxsIiwic3RvcFByb3BhZ2F0aW9uIiwic2VhcmNoSXRlbXMiLCJzbGljZSIsImVsIiwia2V5Iiwic2VhcmNoSXRlbSIsIlNlYXJjaFBvcHVwIiwic2V0QXV0aG9ycyIsInBvc3RzIiwic2V0UG9zdHMiLCJzZXRDb21tZW50cyIsImZpbHRlciIsImdldFNwZWNpYWxpc3RzIiwidXNlcnMiLCJDb21tZW50QXBpIiwiZ2V0IiwiZ2V0UG9zdHMiLCJmb290ZXIiLCJTaWRlQmxvY2siLCJibG9jayIsIlRhZyIsImJ0biIsImFjdGl2ZSIsIlRhZ3MiLCJoYW5kbGVTZWxlY3QiLCJzZWxlY3RlZEl0ZW1zIiwib2JqIiwiZmluZCIsIlVzZXJWaWV3T25Db250ZW50IiwiYXZhdGFyVXJsIiwidXNlcl9hdmF0YXIiLCJ1c2VyX2F2YXRhcl93aXRoX3RpbWUiLCJ3aWR0aCIsImhlaWdodCIsInVzZXJfaW5mbyIsInVzZXJfaW5mb193aXRoX3RpbWUiLCJ1c2VyX25hbWUiLCJnZXRGdWxsVGl0bGUiLCJudW0iLCJtYWluUGFydCIsImxhc3RQYXJ0cyIsImxhc3REaWdpdCIsInByZUxhc3REaWdpdCIsIk1hdGgiLCJmbG9vciIsIlZpZXdzQW5kQ29tbWVudHMiLCJ2aWV3cyIsImNvbW1lbnRzVGl0bGUiLCJ2aWV3c1RpdGxlIiwidmlld3NBbmRDb21tZW50cyIsImNvdW50IiwiQ29tbWVudEljb24iLCJFeWVJY29uIiwiVGh1bWJVcEljb24iLCJpbnN0YW5jZSIsIkF4aW9zIiwiY3JlYXRlIiwiYmFzZVVSTCIsIndpdGhDcmVkZW50aWFscyIsImludGVyY2VwdG9ycyIsInJlcXVlc3QiLCJ1c2UiLCJjb25maWciLCJNYWluTGF5b3V0IiwidG9nZ2xlTWVudU9wZW5lZCIsInVzZUNhbGxiYWNrIiwicHJlZmV0Y2hlZCIsImN1ckxvY2FsZSIsIm9wdGlvbnMiLCJub2RlTmFtZSIsImlzTW9kaWZpZWRFdmVudCIsInNjcm9sbCIsImFzIiwicmVwbGFjZSIsInN1Y2Nlc3MiLCJhcmdzIiwiZXhwZWN0ZWQiLCJhY3R1YWwiLCJyZXF1aXJlZFByb3BzR3VhcmQiLCJyZXF1aXJlZFByb3BzIiwicHJvcHMiLCJjcmVhdGVQcm9wRXJyb3IiLCJfIiwib3B0aW9uYWxQcm9wc0d1YXJkIiwic2hhbGxvdyIsInBhc3NIcmVmIiwicHJlZmV0Y2giLCJvcHRpb25hbFByb3BzIiwidmFsVHlwZSIsImhhc1dhcm5lZCIsInBhdGhuYW1lIiwicmVzb2x2ZWRBcyIsImNoaWxkIiwiQ2hpbGRyZW4iLCJjaGlsZFJlZiIsInJvb3RNYXJnaW4iLCJzZXRSZWYiLCJzZXRJbnRlcnNlY3Rpb25SZWYiLCJzaG91bGRQcmVmZXRjaCIsImlzUHJlZmV0Y2hlZCIsImNoaWxkUHJvcHMiLCJyZWYiLCJsaW5rQ2xpY2tlZCIsInByaW9yaXR5IiwibG9jYWxlRG9tYWluIiwiTGluayIsInBhdGgiLCJub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCIsInByb2Nlc3MiLCJyZXF1ZXN0SWRsZUNhbGxiYWNrIiwic2VsZiIsInN0YXJ0IiwiRGF0ZSIsInNldFRpbWVvdXQiLCJjYiIsImRpZFRpbWVvdXQiLCJ0aW1lUmVtYWluaW5nIiwiY2FuY2VsSWRsZUNhbGxiYWNrIiwiY2xlYXJUaW1lb3V0IiwiTVNfTUFYX0lETEVfREVMQVkiLCJlbnRyeSIsIlByb21pc2UiLCJwcm9tIiwicmVzb2x2ZSIsInJlc29sdmVyIiwiZnV0dXJlIiwiZ2VuZXJhdG9yIiwiY2FuUHJlZmV0Y2giLCJoYXNQcmVmZXRjaCIsInJlcyIsIkFTU0VUX0xPQURfRVJST1IiLCJTeW1ib2wiLCJzY3JpcHQiLCJyZWplY3QiLCJtYXJrQXNzZXRFcnJvciIsInNyYyIsImNhbmNlbGxlZCIsIm9uQnVpbGRNYW5pZmVzdCIsInJlc29sdmVQcm9taXNlV2l0aFRpbWVvdXQiLCJzY3JpcHRzIiwiYXNzZXRQcmVmaXgiLCJlbmNvZGVVUkkiLCJjc3MiLCJnZXRDbGllbnRCdWlsZE1hbmlmZXN0IiwibWFuaWZlc3QiLCJyb3V0ZSIsImFsbEZpbGVzIiwidiIsImVudHJ5cG9pbnRzIiwibG9hZGVkU2NyaXB0cyIsInN0eWxlU2hlZXRzIiwicm91dGVzIiwiYXBwZW5kU2NyaXB0IiwiZmV0Y2giLCJ3aGVuRW50cnlwb2ludCIsIndpdGhGdXR1cmUiLCJvbkVudHJ5cG9pbnQiLCJmbiIsImV4cG9ydHMiLCJjb21wb25lbnQiLCJlcnJvciIsIm9sZCIsImxvYWRSb3V0ZSIsImdldEZpbGVzRm9yUm91dGUiLCJlbnRyeXBvaW50IiwiY24iLCJuYXZpZ2F0b3IiLCJvdXRwdXQiLCJwcmVmZXRjaFZpYURvbSIsImNyZWF0ZVJvdXRlTG9hZGVyIiwic2luZ2xldG9uUm91dGVyIiwicmVhZHlDYWxsYmFja3MiLCJyZWFkeSIsInVybFByb3BlcnR5RmllbGRzIiwicm91dGVyRXZlbnRzIiwiY29yZU1ldGhvZEZpZWxkcyIsIlJvdXRlciIsImZpZWxkIiwiZ2V0Um91dGVyIiwiZXZlbnRGaWVsZCIsIl9zaW5nbGV0b25Sb3V0ZXIiLCJtZXNzYWdlIiwic3RhY2siLCJSb3V0ZXJDb250ZXh0IiwiY3JlYXRlUm91dGVyIiwiX3JvdXRlciIsIkFycmF5IiwiaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJpc0Rpc2FibGVkIiwidW5vYnNlcnZlIiwib2JzZXJ2ZSIsInNldFZpc2libGUiLCJpZGxlQ2FsbGJhY2siLCJjcmVhdGVPYnNlcnZlciIsImVsZW1lbnRzIiwib2JzZXJ2ZXIiLCJvYnNlcnZlcnMiLCJlbnRyaWVzIiwiY2FsbGJhY2siLCJDb21wb3NlZENvbXBvbmVudCIsImdldEluaXRpYWxQcm9wcyIsIldpdGhSb3V0ZXJXcmFwcGVyIiwicGF0aG5hbWVQYXJ0cyIsImxvY2FsZXMiLCJkZXRlY3RlZExvY2FsZSIsImFsbCIsIm9uIiwib2ZmIiwiZW1pdCIsImhhbmRsZXIiLCJiYXNlUGF0aCIsInByZWZpeCIsInBhdGhOb1F1ZXJ5SGFzaCIsInF1ZXJ5SW5kZXgiLCJoYXNoSW5kZXgiLCJhZGRQYXRoUHJlZml4IiwibG9jYXRpb25PcmlnaW4iLCJyZXNvbHZlZCIsImhhc0Jhc2VQYXRoIiwiaW50ZXJwb2xhdGVkUm91dGUiLCJkeW5hbWljUmVnZXgiLCJkeW5hbWljR3JvdXBzIiwiZHluYW1pY01hdGNoZXMiLCJhc1BhdGhuYW1lIiwicGFyYW1zIiwicGFyYW0iLCJyZXBsYWNlZCIsInJlcGVhdCIsIm9wdGlvbmFsIiwic2VnbWVudCIsImVuY29kZVVSSUNvbXBvbmVudCIsInJlc3VsdCIsImZpbHRlcmVkUXVlcnkiLCJxdWVyeSIsImJhc2UiLCJ1cmxBc1N0cmluZyIsImlzTG9jYWxVUkwiLCJyZXNvbHZlQXMiLCJmaW5hbFVybCIsImludGVycG9sYXRlZEFzIiwiaW50ZXJwb2xhdGVBcyIsImhhc2giLCJvbWl0UGFybXNGcm9tUXVlcnkiLCJyZXNvbHZlZEhyZWYiLCJvcmlnaW4iLCJyZXNvbHZlSHJlZiIsImhyZWZIYWRPcmlnaW4iLCJhc0hhZE9yaWdpbiIsInN0cmlwT3JpZ2luIiwicHJlcGFyZWRVcmwiLCJhZGRCYXNlUGF0aCIsInByZXBhcmVkQXMiLCJhcHBseUJhc2VQYXRoIiwiY2xlYW5QYXRobmFtZSIsImRlbEJhc2VQYXRoIiwicGFnZXMiLCJwYWdlIiwicGFyc2VkSHJlZiIsIm1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uIiwiU1NHX0RBVEFfTk9UX0ZPVU5EIiwiY3JlZGVudGlhbHMiLCJhdHRlbXB0cyIsImZldGNoUmV0cnkiLCJub3RGb3VuZCIsImlzU2VydmVyUmVuZGVyIiwiY29uc3RydWN0b3IiLCJhc1BhdGgiLCJjb21wb25lbnRzIiwic2RjIiwic2RyIiwic3ViIiwiY2xjIiwicGFnZUxvYWRlciIsIl9icHMiLCJldmVudHMiLCJfd3JhcEFwcCIsImlzU3NyIiwiaXNGYWxsYmFjayIsIl9pbkZsaWdodFJvdXRlIiwiX3NoYWxsb3ciLCJkZWZhdWx0TG9jYWxlIiwiZG9tYWluTG9jYWxlcyIsImlzUmVhZHkiLCJpc1ByZXZpZXciLCJpc0xvY2FsZURvbWFpbiIsIl9pZHgiLCJzdGF0ZSIsImluaXRpYWwiLCJfX05fU1NHIiwiaW5pdGlhbFByb3BzIiwiX19OX1NTUCIsIkNvbXBvbmVudCIsImF1dG9FeHBvcnREeW5hbWljIiwicmVsb2FkIiwiYmFjayIsInByZXBhcmVVcmxBcyIsImxvY2FsZUNoYW5nZSIsIlNUIiwicGVyZm9ybWFuY2UiLCJyb3V0ZVByb3BzIiwiYWRkTG9jYWxlIiwiY2xlYW5lZEFzIiwiZGVsTG9jYWxlIiwicGFyc2VkIiwiX19yZXdyaXRlcyIsInJlc29sdmVEeW5hbWljUm91dGUiLCJtZXRob2QiLCJwYXJzZWRBcyIsInJvdXRlUmVnZXgiLCJyb3V0ZU1hdGNoIiwic2hvdWxkSW50ZXJwb2xhdGUiLCJtaXNzaW5nUGFyYW1zIiwicm91dGVJbmZvIiwiZGVzdGluYXRpb24iLCJub3RGb3VuZFJvdXRlIiwiYXBwQ29tcCIsImlzVmFsaWRTaGFsbG93Um91dGUiLCJmb3JjZWRTY3JvbGwiLCJ4IiwieSIsImNoYW5nZVN0YXRlIiwiX19OIiwiaWR4IiwiYnVpbGRDYW5jZWxsYXRpb25FcnJvciIsImV4aXN0aW5nUm91dGVJbmZvIiwiY2FjaGVkUm91dGVJbmZvIiwicmVxdWlyZSIsImlzVmFsaWRFbGVtZW50VHlwZSIsImRhdGFIcmVmIiwic2V0IiwiYmVmb3JlUG9wU3RhdGUiLCJvbmx5QUhhc2hDaGFuZ2UiLCJuZXdIYXNoIiwib2xkVXJsTm9IYXNoIiwib2xkSGFzaCIsInNjcm9sbFRvSGFzaCIsImlkRWwiLCJuYW1lRWwiLCJ1cmxJc05ldyIsImlzU3NnIiwiY2FuY2VsIiwiY29tcG9uZW50UmVzdWx0IiwiX2dldERhdGEiLCJfZ2V0U3RhdGljRGF0YSIsImZldGNoTmV4dERhdGEiLCJfZ2V0U2VydmVyRGF0YSIsIkFwcFRyZWUiLCJjdHgiLCJhYm9ydENvbXBvbmVudExvYWQiLCJub3RpZnkiLCJzbGFzaGVkUHJvdG9jb2xzIiwicHJvdG9jb2wiLCJ1cmxPYmoiLCJob3N0IiwiYXV0aCIsImhvc3RuYW1lIiwiU3RyaW5nIiwicXVlcnlzdHJpbmciLCJURVNUX1JPVVRFIiwiZ2xvYmFsQmFzZSIsInJlc29sdmVkQmFzZSIsInNlYXJjaFBhcmFtcyIsImlzTmFOIiwic3RyaW5naWZ5VXJsUXVlcnlQYXJhbSIsInNlYXJjaFBhcmFtc0xpc3QiLCJyZSIsImRlY29kZSIsImRlY29kZVVSSUNvbXBvbmVudCIsInNsdWdOYW1lIiwiZyIsImdyb3VwcyIsIm0iLCJzdHIiLCJzZWdtZW50cyIsIm5vcm1hbGl6ZWRSb3V0ZSIsImdyb3VwSW5kZXgiLCJwYXJhbWV0ZXJpemVkUm91dGUiLCJwYXJzZVBhcmFtZXRlciIsInBvcyIsImVzY2FwZVJlZ2V4Iiwicm91dGVLZXlDaGFyQ29kZSIsInJvdXRlS2V5Q2hhckxlbmd0aCIsImdldFNhZmVSb3V0ZUtleSIsInJvdXRlS2V5IiwiaSIsInJvdXRlS2V5cyIsIm5hbWVkUGFyYW1ldGVyaXplZFJvdXRlIiwiY2xlYW5lZEtleSIsImludmFsaWRLZXkiLCJwYXJzZUludCIsIm5hbWVkUmVnZXgiLCJ1c2VkIiwicG9ydCIsImdldExvY2F0aW9uT3JpZ2luIiwiQXBwIiwiZ2V0RGlzcGxheU5hbWUiLCJwYWdlUHJvcHMiLCJsb2FkR2V0SW5pdGlhbFByb3BzIiwiaXNSZXNTZW50IiwidXJsT2JqZWN0S2V5cyIsIlNQIiwiSG9tZSIsInBvc3RJZCIsInNldExpa2UiLCJzZXRQYWdlIiwibWV0YSIsImN1cnJlbnRfcGFnZSIsIm1heFBhZ2UiLCJzZXRNYXhQYWdlIiwibGFzdF9wYWdlIiwicnVuRWZmZWN0IiwiY29tbWVudHNfY291bnQiLCJkaXNsaWtlc19jb3VudCIsImxpa2VzX2NvdW50IiwiaW1nIiwidXBkYXRlZF9hdCIsImxpa2VkX3R5cGUiLCJnZXRTZXJ2ZXJTaWRlUHJvcHMiLCJyZXEiLCJjb29raWVzIiwiYXV0aF90b2tlbiIsImRpcmVjdG9yeSIsImF4aW9zIiwic2F2ZSIsInRvVXNlcklkIiwicGFyZW50Q29tbWVudElkIiwiY29tbWVudElkIiwicG9zdF9pZCIsInVzZXJfcmVwbHlfaWQiLCJwYXJlbnRfaWQiLCJwdXQiLCJzYXZlSW1hZ2UiLCJmb3JtRGF0YSIsIkZvcm1EYXRhIiwiYXBwZW5kIiwic2F2ZVBvc3QiLCJzdGF0dXMiLCJjYXRlZ29yeSIsInRva2VuIiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJnZXRUaGVtZXMiLCJzYXZlQnlVcmwiLCJzaG93UG9zdCIsImdldFBvc3RDb21tZW50cyIsImFwaVRva2VuIiwiZ2V0U3BlY2lhbGlzdENhdGVnb3JpZXMiLCJsb2dpbiIsImVtYWlsIiwicGFzc3dvcmQiLCJtYXhSZWRpcmVjdHMiLCJnZXRNZSIsImdldE5vdGlmaWNhdGlvbnMiLCJzaG93Iiwia2V5cyIsImxpbmtzIiwibCIsInBhdGNoIiwiZ2V0Q29va2llIiwidXNlVGhlbWUiLCJ1c2VNZWRpYVF1ZXJ5IiwiYnJlYWtwb2ludHMiLCJkb3duIiwiaXNTTSIsImlzTUQiLCJpc0xHIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FB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TUQsQ0FUTSxDOzs7Ozs7Ozs7OztBQ0ZQLDhDOzs7Ozs7Ozs7OztBQ0FBLHFEOzs7Ozs7Ozs7OztBQ0FBLHVEOzs7Ozs7Ozs7OztBQ0FBLHFEOzs7Ozs7Ozs7OztBQ0FBLHVEOzs7Ozs7Ozs7OztBQ0FBLHFEOzs7Ozs7Ozs7OztBQ0FBLDREOzs7Ozs7Ozs7OztBQ0FBLHlEOzs7Ozs7Ozs7OztBQ0FBLHFEOzs7Ozs7Ozs7OztBQ0FBLHFEOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLGlDOzs7Ozs7Ozs7OztBQ0FBLHFDOzs7Ozs7Ozs7OztBQ0FBLDRDOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLGtEIiwiZmlsZSI6InBhZ2VzL3RhZ3MvW3NsdWddLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi8uLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy90YWdzL1tzbHVnXS50c3hcIik7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIik7IiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwibW9kYWxcIjogXCJBdXRoRGlhbG9nX21vZGFsX183djNRTFwiLFxuXHRcImNvbnRlbnRcIjogXCJBdXRoRGlhbG9nX2NvbnRlbnRfXzJySXJMXCIsXG5cdFwidGl0bGVcIjogXCJBdXRoRGlhbG9nX3RpdGxlX18yWklCOFwiLFxuXHRcInN1YlRpdGxlXCI6IFwiQXV0aERpYWxvZ19zdWJUaXRsZV9fQ0w3cjJcIixcblx0XCJ0ZXh0XCI6IFwiQXV0aERpYWxvZ190ZXh0X18xQjVzZFwiLFxuXHRcImxpbmtcIjogXCJBdXRoRGlhbG9nX2xpbmtfXzJ2R3hqXCIsXG5cdFwiZnVsbFdpZHRoXCI6IFwiQXV0aERpYWxvZ19mdWxsV2lkdGhfXzFhUkZaXCIsXG5cdFwic2Nyb2xsUGFwZXJcIjogXCJBdXRoRGlhbG9nX3Njcm9sbFBhcGVyX18yNmZOSFwiLFxuXHRcInBhcGVyU2Nyb2xsUGFwZXJcIjogXCJBdXRoRGlhbG9nX3BhcGVyU2Nyb2xsUGFwZXJfXzItRnp2XCJcbn07XG4iLCJpbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbic7XHJcbmltcG9ydCBEaWFsb2cgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nJztcclxuaW1wb3J0IERpYWxvZ0NvbnRlbnQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nQ29udGVudCc7XHJcbmltcG9ydCBEaWFsb2dUaXRsZSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dUaXRsZSc7XHJcbmltcG9ydCBDbG9zZUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0Nsb3NlJztcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IEljb25CdXR0b24gZnJvbSAnQG11aS9tYXRlcmlhbC9JY29uQnV0dG9uJztcclxuXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9BdXRoRGlhbG9nLm1vZHVsZS5zY3NzJztcclxuaW1wb3J0IHsgRGlhbG9nQ29udGVudFRleHQsIFR5cG9ncmFwaHkgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcbmltcG9ydCB7IEFQSV9VUkwgfSBmcm9tICcuLi8uLi9jb3JlL2F4aW9zJztcclxuXHJcbmludGVyZmFjZSBNb2RhbFByb3BzIHtcclxuICBvcGVuPzogYm9vbGVhbjtcclxuICBzaXplPzogJ3hzJyB8ICdzbScgfCAnbWQnIHwgJ2xnJyB8ICd4bCcgfCBmYWxzZTtcclxuICBvbkNsb3NlOiAoKSA9PiB2b2lkO1xyXG4gIGNsYXNzTmFtZT86IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEF1dGhEaWFsb2c6IFJlYWN0LkZDPE1vZGFsUHJvcHM+ID0gKHtcclxuICBjaGlsZHJlbixcclxuICBvcGVuID0gZmFsc2UsXHJcbiAgc2l6ZSA9ICd4cycsXHJcbiAgb25DbG9zZSxcclxuICBjbGFzc05hbWUsXHJcbn0pOiBSZWFjdC5SZWFjdEVsZW1lbnQgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8RGlhbG9nXHJcbiAgICAgIG1heFdpZHRoPXsneHMnfVxyXG4gICAgICBvcGVuPXtvcGVufVxyXG4gICAgICBvbkNsb3NlPXtvbkNsb3NlfVxyXG4gICAgICBmdWxsV2lkdGhcclxuICAgICAgUGFwZXJQcm9wcz17e1xyXG4gICAgICAgIGNsYXNzTmFtZTogc3R5bGVzLm1vZGFsLFxyXG4gICAgICB9fVxyXG4gICAgPlxyXG4gICAgICA8SWNvbkJ1dHRvblxyXG4gICAgICAgIGFyaWEtbGFiZWw9XCJjbG9zZVwiXHJcbiAgICAgICAgb25DbGljaz17b25DbG9zZX1cclxuICAgICAgICBzeD17e1xyXG4gICAgICAgICAgY29sb3I6ICh0aGVtZSkgPT4gdGhlbWUucGFsZXR0ZS5ncmV5WzUwMF0sXHJcbiAgICAgICAgfX1cclxuICAgICAgICBzdHlsZT17eyBhbGlnblNlbGY6ICdmbGV4LWVuZCcsIG1hcmdpblRvcDogMjIsIG1hcmdpblJpZ2h0OiAyMCwgcGFkZGluZzogMCB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgPENsb3NlSWNvbiBzdHlsZT17eyBmb250U2l6ZTogMjggfX0gLz5cclxuICAgICAgPC9JY29uQnV0dG9uPlxyXG5cclxuICAgICAgPERpYWxvZ0NvbnRlbnQgc3R5bGU9e3sgcGFkZGluZ1RvcDogMTQsIHBhZGRpbmdCb3R0b206IDUwIH19PlxyXG4gICAgICAgIDxEaWFsb2dDb250ZW50VGV4dCBjbGFzc05hbWU9XCJtYi0wXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRlbnR9PlxyXG4gICAgICAgICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0+INCU0L7QsdGA0L4g0L/QvtC20LDQu9C+0LLQsNGC0YwgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e3N0eWxlcy5zdWJUaXRsZX0+INCg0LDQtNGLINCy0LjQtNC10YLRjCDQstCw0YEg0YHQvdC+0LLQsCEgPC9UeXBvZ3JhcGh5PlxyXG5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj17YCR7QVBJX1VSTH0vc29jaWFsL3ZrYH0+XHJcbiAgICAgICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIGZ1bGxXaWR0aD17dHJ1ZX0gdmFyaWFudD17J291dGxpbmVkJ30+XHJcbiAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL3ZrLnBuZ1wiIGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgINCS0L7QudGC0Lgg0YfQtdGA0LXQtyBWS1xyXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9e2Ake0FQSV9VUkx9L3NvY2lhbC9nb29nbGVgfT5cclxuICAgICAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgICAgIDxCdXR0b24gZnVsbFdpZHRoPXt0cnVlfSB2YXJpYW50PXsnb3V0bGluZWQnfT5cclxuICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvZ29vZ2xlLnBuZ1wiIGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgINCS0L7QudGC0Lgg0YfQtdGA0LXQtyBHb29nbGVcclxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCIgc3R5bGU9e3sgbWFyZ2luVG9wOiA0MCB9fT5cclxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgY2xhc3NOYW1lPXtzdHlsZXMudGV4dH0+XHJcbiAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICDQuNC70LggPGEgY2xhc3NOYW1lPXtzdHlsZXMubGlua30+0YHQvtC30LTQsNGC0Ywg0LDQutC60LDRg9C90YI8L2E+XHJcbiAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L0RpYWxvZ0NvbnRlbnRUZXh0PlxyXG4gICAgICA8L0RpYWxvZ0NvbnRlbnQ+XHJcbiAgICA8L0RpYWxvZz5cclxuICApO1xyXG59O1xyXG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjaGVja2VkVGl0bGVcIjogXCJBdmFpbGFibGVGb3JXb3JrX2NoZWNrZWRUaXRsZV9fMWJ5aDJcIixcblx0XCJ1bmNoZWNrZWRUaXRsZVwiOiBcIkF2YWlsYWJsZUZvcldvcmtfdW5jaGVja2VkVGl0bGVfXzNsV0FLXCIsXG5cdFwiY2hlY2tlZFwiOiBcIkF2YWlsYWJsZUZvcldvcmtfY2hlY2tlZF9fTXJpaFFcIixcblx0XCJ1bmNoZWNrZWRcIjogXCJBdmFpbGFibGVGb3JXb3JrX3VuY2hlY2tlZF9fM1ZEdWNcIlxufTtcbiIsImltcG9ydCBSZWFjdCwge3VzZVN0YXRlfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnO1xyXG5cclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0F2YWlsYWJsZUZvcldvcmsubW9kdWxlLnNjc3MnO1xyXG5pbXBvcnQgeyBDaGVja2JveCB9IGZyb20gJy4uL0NoZWNrYm94JztcclxuXHJcbmludGVyZmFjZSBBdmFpbGFibGVGb3JXb3JrUHJvcHMge1xyXG4gIGNoZWNrZWQ/OiBib29sZWFuO1xyXG4gIG9uQ2hhbmdlOiAoZXZlbnQ6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB2b2lkO1xyXG4gIHNldENoZWNrZWQ6ICh2YWx1ZTogYm9vbGVhbikgPT4gdm9pZDtcclxuICBpc0xvYWRpbmc6IGJvb2xlYW47XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBBdmFpbGFibGVGb3JXb3JrOiBSZWFjdC5GQzxBdmFpbGFibGVGb3JXb3JrUHJvcHM+ID0gKHsgY2hlY2tlZCwgb25DaGFuZ2UsIHNldENoZWNrZWQsIGlzTG9hZGluZyB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbHN4KCdkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlcicpfT5cclxuICAgICAgPHNwYW5cclxuICAgICAgICBjbGFzc05hbWU9e2Nsc3goc3R5bGVzLnVuY2hlY2tlZFRpdGxlLCBjaGVja2VkIHx8IGlzTG9hZGluZyA/IHN0eWxlcy51bmNoZWNrZWQgOiBzdHlsZXMuY2hlY2tlZCl9XHJcbiAgICAgICAgb25DbGljaz17KCkgPT4gIWlzTG9hZGluZyAmJiBzZXRDaGVja2VkKGZhbHNlKX1cclxuICAgICAgPlxyXG4gICAgICAgINCd0LXQtNC+0YHRgtGD0L/QtdC9XHJcbiAgICAgIDwvc3Bhbj5cclxuICAgICAgPENoZWNrYm94IGNoZWNrZWQ9e2NoZWNrZWR9IG9uQ2hhbmdlPXtvbkNoYW5nZX0gZGlzYWJsZWQ9e2lzTG9hZGluZ30gLz5cclxuICAgICAgPHNwYW5cclxuICAgICAgICBjbGFzc05hbWU9e2Nsc3goc3R5bGVzLmNoZWNrZWRUaXRsZSwgY2hlY2tlZCAmJiAhaXNMb2FkaW5nID8gc3R5bGVzLmNoZWNrZWQgOiBzdHlsZXMudW5jaGVja2VkKX1cclxuICAgICAgICBvbkNsaWNrPXsoKSA9PiAhaXNMb2FkaW5nICYmIHNldENoZWNrZWQodHJ1ZSl9XHJcbiAgICAgID5cclxuICAgICAgICDQlNC+0YHRgtGD0L/QtdC9INC00LvRjyDRgNCw0LHQvtGC0YtcclxuICAgICAgPC9zcGFuPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiYnV0dG9uXCI6IFwiQnV0dG9uX2J1dHRvbl9fMy11NFBcIixcblx0XCJyb290XCI6IFwiQnV0dG9uX3Jvb3RfXzJHQzUyXCIsXG5cdFwiY29udGFpbmVkXCI6IFwiQnV0dG9uX2NvbnRhaW5lZF9fMVNQMkVcIixcblx0XCJjb250YWluZWRQcmltYXJ5XCI6IFwiQnV0dG9uX2NvbnRhaW5lZFByaW1hcnlfXzFRT21vXCIsXG5cdFwiY29udGFpbmVkU2Vjb25kYXJ5XCI6IFwiQnV0dG9uX2NvbnRhaW5lZFNlY29uZGFyeV9fMWNEVjFcIixcblx0XCJvdXRsaW5lZFwiOiBcIkJ1dHRvbl9vdXRsaW5lZF9fM2o5blpcIixcblx0XCJvdXRsaW5lZFByaW1hcnlcIjogXCJCdXR0b25fb3V0bGluZWRQcmltYXJ5X19GMGtfS1wiLFxuXHRcIm91dGxpbmVkU2Vjb25kYXJ5XCI6IFwiQnV0dG9uX291dGxpbmVkU2Vjb25kYXJ5X18zU2pEYlwiLFxuXHRcInRleHRQcmltYXJ5XCI6IFwiQnV0dG9uX3RleHRQcmltYXJ5X19ETTFUZFwiLFxuXHRcInRleHRTZWNvbmRhcnlcIjogXCJCdXR0b25fdGV4dFNlY29uZGFyeV9fNll0SkJcIlxufTtcbiIsImltcG9ydCBSZWFjdCwgeyBSZWFjdE5vZGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEJ1dHRvbiBhcyBCdXR0b25CYXNlIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vQnV0dG9uLm1vZHVsZS5zY3NzJztcclxuXHJcbmludGVyZmFjZSBCdXR0b25Qcm9wcyB7XHJcbiAgY2hpbGRyZW46IFJlYWN0Tm9kZTtcclxuICB2YXJpYW50PzogJ3RleHQnIHwgJ291dGxpbmVkJyB8ICdjb250YWluZWQnO1xyXG4gIGNvbG9yPzogJ2luaGVyaXQnIHwgJ3ByaW1hcnknIHwgJ3NlY29uZGFyeScgfCAnZGVmYXVsdCc7XHJcbiAgZnVsbFdpZHRoPzogYm9vbGVhbjtcclxuICBzdGFydEljb24/OiBSZWFjdE5vZGU7XHJcbiAgZW5kSWNvbj86IFJlYWN0Tm9kZTtcclxuICBjbGFzc05hbWU/OiBzdHJpbmc7XHJcbiAgb25DbGljaz86ICgpID0+IHZvaWQ7XHJcbiAgZGlzYWJsZWQ/OiBib29sZWFuO1xyXG4gIHR5cGU/OiAnYnV0dG9uJyB8ICdzdWJtaXQnO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgQnV0dG9uOiBSZWFjdC5GQzxCdXR0b25Qcm9wcz4gPSAoXHJcbiAgICB7XHJcbiAgICAgICAgY2xhc3NOYW1lLFxyXG4gICAgICAgIGNoaWxkcmVuLFxyXG4gICAgICAgIHZhcmlhbnQsXHJcbiAgICAgICAgY29sb3IsXHJcbiAgICAgICAgc3RhcnRJY29uLFxyXG4gICAgICAgIGVuZEljb24sXHJcbiAgICAgICAgb25DbGljayxcclxuICAgICAgICBmdWxsV2lkdGgsXHJcbiAgICAgICAgZGlzYWJsZWQsXHJcbiAgICAgICAgdHlwZVxyXG4gICAgfVxyXG4pID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5idXR0b259PlxyXG4gICAgICAgICAgICA8QnV0dG9uQmFzZVxyXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkfVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWV9XHJcbiAgICAgICAgICAgICAgICB2YXJpYW50PXt2YXJpYW50fVxyXG4gICAgICAgICAgICAgICAgY29sb3I9e2NvbG9yfVxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17b25DbGlja31cclxuICAgICAgICAgICAgICAgIGNsYXNzZXM9e3tcclxuICAgICAgICAgICAgICAgICAgICByb290OiBzdHlsZXMucm9vdCxcclxuICAgICAgICAgICAgICAgICAgICBjb250YWluZWQ6IHN0eWxlcy5jb250YWluZWQsXHJcbiAgICAgICAgICAgICAgICAgICAgb3V0bGluZWQ6IHN0eWxlcy5vdXRsaW5lZCxcclxuICAgICAgICAgICAgICAgICAgICBjb250YWluZWRQcmltYXJ5OiBzdHlsZXMuY29udGFpbmVkUHJpbWFyeSxcclxuICAgICAgICAgICAgICAgICAgICBjb250YWluZWRTZWNvbmRhcnk6IHN0eWxlcy5jb250YWluZWRTZWNvbmRhcnksXHJcbiAgICAgICAgICAgICAgICAgICAgb3V0bGluZWRQcmltYXJ5OiBzdHlsZXMub3V0bGluZWRQcmltYXJ5LFxyXG4gICAgICAgICAgICAgICAgICAgIG91dGxpbmVkU2Vjb25kYXJ5OiBzdHlsZXMub3V0bGluZWRTZWNvbmRhcnksXHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dFByaW1hcnk6IHN0eWxlcy50ZXh0UHJpbWFyeSxcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0U2Vjb25kYXJ5OiBzdHlsZXMudGV4dFNlY29uZGFyeSxcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICBzdGFydEljb249e3N0YXJ0SWNvbn1cclxuICAgICAgICAgICAgICAgIGVuZEljb249e2VuZEljb259XHJcbiAgICAgICAgICAgICAgICBmdWxsV2lkdGg9e2Z1bGxXaWR0aCB8fCBmYWxzZX1cclxuICAgICAgICAgICAgICAgIHR5cGU9e3R5cGV9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICAgICAgPC9CdXR0b25CYXNlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY2hlY2tib3hcIjogXCJDaGVja2JveF9jaGVja2JveF9fM3B3TTZcIixcblx0XCJyb290XCI6IFwiQ2hlY2tib3hfcm9vdF9fMm5QRjhcIixcblx0XCJzd2l0Y2hCYXNlXCI6IFwiQ2hlY2tib3hfc3dpdGNoQmFzZV9fMWxteFNcIixcblx0XCJjaGVja2VkXCI6IFwiQ2hlY2tib3hfY2hlY2tlZF9fMVAxb2hcIixcblx0XCJ0cmFja1wiOiBcIkNoZWNrYm94X3RyYWNrX18zS2xlRFwiLFxuXHRcInRodW1iXCI6IFwiQ2hlY2tib3hfdGh1bWJfXzE4MDVsXCJcbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgY2xzeCBmcm9tICdjbHN4JztcclxuaW1wb3J0IHsgU3dpdGNoIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vQ2hlY2tib3gubW9kdWxlLnNjc3MnO1xyXG5cclxuaW50ZXJmYWNlIENoZWNrYm94UHJvcHMge1xyXG4gIGNoZWNrZWQ6IGJvb2xlYW47XHJcbiAgb25DaGFuZ2U6IChldmVudDogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHZvaWQ7XHJcbiAgZGlzYWJsZWQ/OiBib29sZWFuO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgQ2hlY2tib3g6IFJlYWN0LkZDPENoZWNrYm94UHJvcHM+ID0gKHsgY2hlY2tlZCwgb25DaGFuZ2UsIGRpc2FibGVkIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2Nsc3goc3R5bGVzLmNoZWNrYm94LCAnZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXInKX0+XHJcbiAgICAgIDxTd2l0Y2hcclxuICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5yb290fVxyXG4gICAgICAgIGNsYXNzZXM9e3tcclxuICAgICAgICAgIHJvb3Q6IHN0eWxlcy5yb290LFxyXG4gICAgICAgICAgc3dpdGNoQmFzZTogc3R5bGVzLnN3aXRjaEJhc2UsXHJcbiAgICAgICAgICB0aHVtYjogc3R5bGVzLnRodW1iLFxyXG4gICAgICAgICAgdHJhY2s6IHN0eWxlcy50cmFjayxcclxuICAgICAgICAgIGNoZWNrZWQ6IHN0eWxlcy5jaGVja2VkLFxyXG4gICAgICAgIH19XHJcbiAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkfVxyXG4gICAgICAgIGNoZWNrZWQ9e2NoZWNrZWR9XHJcbiAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlfVxyXG4gICAgICAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiaGVhZGVyXCI6IFwiSGVhZGVyX2hlYWRlcl9fT2tvRExcIixcblx0XCJiYWNrZHJvcFwiOiBcIkhlYWRlcl9iYWNrZHJvcF9fMzBad0JcIixcblx0XCJtZW51QnV0dG9uXCI6IFwiSGVhZGVyX21lbnVCdXR0b25fXzFTMTVSXCIsXG5cdFwic2VhcmNoXCI6IFwiSGVhZGVyX3NlYXJjaF9fMm95MzNcIixcblx0XCJpbnB1dFwiOiBcIkhlYWRlcl9pbnB1dF9fTEF3NVZcIixcblx0XCJub3Njcm9sbFwiOiBcIkhlYWRlcl9ub3Njcm9sbF9fMmRRQzBcIlxufTtcbiIsImltcG9ydCBSZWFjdCwge3VzZVN0YXRlLCB1c2VFZmZlY3R9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCc7XHJcbmltcG9ydCBQcm9maWxlUG9wdXAgZnJvbSAnLi4vUHJvZmlsZVBvcHVwJztcclxuaW1wb3J0IFNlYXJjaFBvcHVwIGZyb20gJy4uL1NlYXJjaFBvcHVwJztcclxuaW1wb3J0IEJhY2tkcm9wIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0JhY2tkcm9wJztcclxuXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9IZWFkZXIubW9kdWxlLnNjc3MnO1xyXG5pbXBvcnQge0F2YWlsYWJsZUZvcldvcmt9IGZyb20gJy4uL0F2YWlsYWJsZUZvcldvcmsnO1xyXG5pbXBvcnQge0J1dHRvbn0gZnJvbSAnLi4vQnV0dG9uJztcclxuaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHtVc2VyQXBpfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvYXBpL1VzZXJBcGlcIjtcclxuaW1wb3J0IHt1c2VTZWxlY3Rvcn0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7c2VsZWN0VXNlclN0YXRlfSBmcm9tIFwiLi4vLi4vcmVkdXgvdXNlci91c2VyLnNlbGVjdG9yXCI7XHJcbmltcG9ydCB7QXV0aERpYWxvZ30gZnJvbSBcIi4uL0F1dGhEaWFsb2dcIjtcclxuaW1wb3J0IHt1c2VBbGxNUX0gZnJvbSBcIi4uLy4uL3V0aWxzL3VzZUFsbE1RXCI7XHJcbmltcG9ydCBNb2JpbGVQcm9maWxlUG9wdXAgZnJvbSBcIi4uL01vYmlsZVByb2ZpbGVQb3B1cFwiO1xyXG5pbXBvcnQgQXZhdGFyIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9BdmF0YXJcIjtcclxuaW1wb3J0IHtOb3RpZmljYXRpb25Ecm9wZG93bn0gZnJvbSBcIi4uL05vdGlmaWNhdGlvbkRyb3Bkb3duXCI7XHJcblxyXG50eXBlIFByb3BzID0ge1xyXG4gICAgb25DbGlja0hhbWJ1cmdlcjogKCkgPT4gdm9pZFxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgSGVhZGVyID0gKHsgb25DbGlja0hhbWJ1cmdlciB9IDogUHJvcHMpID0+IHtcclxuICAgIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCB1c2VyID0gdXNlU2VsZWN0b3Ioc2VsZWN0VXNlclN0YXRlKTtcclxuICAgIGNvbnN0IG1xID0gdXNlQWxsTVEoKVxyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuXHJcbiAgICBjb25zdCBbY2hlY2tlZCwgc2V0Q2hlY2tlZF0gPSB1c2VTdGF0ZSh1c2VyPy5kYXRhPy5yZWFkeV9mb3Jfd29yayB8fCBmYWxzZSk7XHJcbiAgICBjb25zdCBbaXNTZWFyY2gsIHNldElzU2VhcmNoXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtpc01vYmlsZVBvcHVwLCBzZXRJc01vYmlsZVBvcHVwXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcblxyXG4gICAgY29uc3QgW2lzVmlzaWJsZSwgc2V0SXNWaXNpYmxlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgICBjb25zdCBbc2VhcmNoSW5wdXQsIHNldFNlYXJjaElucHV0XSA9IHVzZVN0YXRlPHN0cmluZz4oJycpO1xyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpc1NlYXJjaCB8fCBpc01vYmlsZVBvcHVwID8gZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKHN0eWxlcy5ub3Njcm9sbCkgOiBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoc3R5bGVzLm5vc2Nyb2xsKTtcclxuICAgIH0sIFtpc1NlYXJjaCwgaXNNb2JpbGVQb3B1cF0pO1xyXG5cclxuICAgIGNvbnN0IG9uQ2hhbmdlQ2hlY2tib3ggPSAoZXZlbnQ6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XHJcbiAgICAgICAgaGFuZGxlQ2hhbmdlQ2hlY2tib3goZXZlbnQudGFyZ2V0LmNoZWNrZWQpXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IG9uT3BlblNlYXJjaCA9ICgpID0+IHtcclxuICAgICAgICBzZXRJc1NlYXJjaCh0cnVlKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3Qgb25DbG9zZVNlYXJjaCA9ICgpID0+IHtcclxuICAgICAgICBzZXRTZWFyY2hJbnB1dCgnJyk7XHJcbiAgICAgICAgc2V0SXNTZWFyY2goZmFsc2UpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVDaGFuZ2VDaGVja2JveCA9IChmbGFnOiBib29sZWFuKSA9PiB7XHJcbiAgICAgICAgc2V0Q2hlY2tlZChmbGFnKTtcclxuICAgICAgICBzZXRJc0xvYWRpbmcodHJ1ZSlcclxuICAgICAgICBVc2VyQXBpXHJcbiAgICAgICAgICAgIC51cGRhdGVQcm9maWxlKHtyZWFkeV9mb3Jfd29yazogZmxhZyA/IHRydWUgOiBmYWxzZX0sIHVzZXIuZGF0YT8uaWQpXHJcbiAgICAgICAgICAgIC50aGVuKChyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBzZXRDaGVja2VkKGZsYWcpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgICAgICAgIE9iamVjdC52YWx1ZXMoZXJyPy5yZXNwb25zZT8uZGF0YT8uZXJyb3JzKS5mb3JFYWNoKGUgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGFsZXJ0KGUpXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgc2V0Q2hlY2tlZChmYWxzZSk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5maW5hbGx5KCgpID0+IHNldElzTG9hZGluZyhmYWxzZSkpXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYgKCF1c2VyPy5kYXRhPy5pZCkge1xyXG4gICAgICAgICAgICBzZXRJc1Zpc2libGUodHJ1ZSk7XHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcm91dGVyLnB1c2goJy93cml0ZScpXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGlzU2VhcmNoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGhlYWRlciBjbGFzc05hbWU9e2Nsc3goc3R5bGVzLmhlYWRlciwgJ2QtZmxleCcpfT5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9eycvJ30+XHJcbiAgICAgICAgICAgICAgICAgICAgPGE+PGltZyBjbGFzc05hbWU9e3N0eWxlcy5sb2dvfSBzcmM9XCIvbG9nby5zdmdcIiBhbHQ9XCJMb2dvXCIvPjwvYT5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbHN4KHN0eWxlcy5zZWFyY2gsICdkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIHcxMDAnKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJtci0xNVwiIHNyYz1cIi9zZWFyY2guc3ZnXCIgYWx0PVwi0J/QvtC40YHQulwiLz5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuaW5wdXR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi0J/QvtC40YHQulwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtzZWFyY2hJbnB1dH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRTZWFyY2hJbnB1dChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgPjwvaW5wdXQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBvbkNsaWNrPXtvbkNsb3NlU2VhcmNofSBjbGFzc05hbWU9XCJtbC1hdXRvIGN1cnNvci1wb2ludGVyXCIgc3JjPVwiL2Nsb3NlLnN2Z1wiIGFsdD1cItCX0LDQutGA0YvRgtGMXCIvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8QmFja2Ryb3AgY2xhc3Nlcz17e3Jvb3Q6IHN0eWxlcy5iYWNrZHJvcH19IG9wZW49e2lzU2VhcmNofT5cclxuICAgICAgICAgICAgICAgICAgICA8U2VhcmNoUG9wdXAgaGFuZGxlQ2xpY2s9e29uQ2xvc2VTZWFyY2h9IGlzU2VhcmNoPXtpc1NlYXJjaH0gc2VhcmNoSW5wdXQ9e3NlYXJjaElucHV0fS8+XHJcbiAgICAgICAgICAgICAgICA8L0JhY2tkcm9wPlxyXG4gICAgICAgICAgICA8L2hlYWRlcj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChpc01vYmlsZVBvcHVwKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGhlYWRlciBjbGFzc05hbWU9e2Nsc3goc3R5bGVzLmhlYWRlciwgJ2QtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbicpfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT17c3R5bGVzLm1lbnVCdXR0b259IG9uQ2xpY2s9e29uQ2xpY2tIYW1idXJnZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIHZpZXdCb3g9XCIwIDAgMjYgMTFcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTEgMUgxNi41TTEgMTBIMjQuNVwiIHN0cm9rZVdpZHRoPVwiMlwiIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9eycvJ30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhPjxpbWcgY2xhc3NOYW1lPXtzdHlsZXMubG9nb30gc3JjPVwiL2xvZ28uc3ZnXCIgYWx0PVwiTG9nb1wiLz48L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwibWwtMTAgY3Vyc29yLXBvaW50ZXJcIiBzcmM9XCIvc2VhcmNoLnN2Z1wiIGFsdD1cItCf0L7QuNGB0LpcIiBvbkNsaWNrPXtvbk9wZW5TZWFyY2h9Lz5cclxuICAgICAgICAgICAgICAgICAgICB7Lyo8aW1nIGNsYXNzTmFtZT1cIm1sLTEwIGN1cnNvci1wb2ludGVyXCIgc3JjPVwiL25vdGlmaWNhdGlvbnMuc3ZnXCIgYWx0PVwi0KPQstC10LTQvtC80LvQtdC90LjRj1wiLz4qL31cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9eydtbC0xMCd9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QXZhdGFyIGFsdD17dXNlcj8uZGF0YT8ubmFtZX0gc3JjPXt1c2VyPy5kYXRhPy5hdmF0YXJ9IG9uQ2xpY2s9eygpID0+IHNldElzTW9iaWxlUG9wdXAoZmFsc2UpfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxCYWNrZHJvcCBjbGFzc2VzPXt7cm9vdDogc3R5bGVzLmJhY2tkcm9wfX0gb3Blbj17aXNNb2JpbGVQb3B1cH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxNb2JpbGVQcm9maWxlUG9wdXAgY2hlY2tlZD17Y2hlY2tlZH0gb25DaGFuZ2U9e29uQ2hhbmdlQ2hlY2tib3h9IHNldENoZWNrZWQ9e2hhbmRsZUNoYW5nZUNoZWNrYm94fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzTG9hZGluZz17aXNMb2FkaW5nfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQmFja2Ryb3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDwvaGVhZGVyPlxyXG4gICAgICAgIClcclxuICAgIH1cclxuXHJcblxyXG4gICAgaWYgKG1xLmlzWFMpIHtcclxuICAgICAgICByZXR1cm4gKCA8aGVhZGVyIGNsYXNzTmFtZT17Y2xzeChzdHlsZXMuaGVhZGVyLCAnZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuJyl9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIganVzdGlmeS1jb250ZW50LWJldHdlZW4gdzEwMFwiPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPXtzdHlsZXMubWVudUJ1dHRvbn0gb25DbGljaz17b25DbGlja0hhbWJ1cmdlcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPHN2ZyB2aWV3Qm94PVwiMCAwIDI2IDExXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTEgMUgxNi41TTEgMTBIMjQuNVwiIHN0cm9rZVdpZHRoPVwiMlwiIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuXHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPXsnLyd9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxhPjxpbWcgY2xhc3NOYW1lPXtzdHlsZXMubG9nb30gc3JjPVwiL2xvZ28uc3ZnXCIgYWx0PVwiTG9nb1wiLz48L2E+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cIm1sLTEwIGN1cnNvci1wb2ludGVyXCIgc3JjPVwiL3NlYXJjaC5zdmdcIiBhbHQ9XCLQn9C+0LjRgdC6XCIgb25DbGljaz17b25PcGVuU2VhcmNofS8+XHJcbiAgICAgICAgICAgICAgICAgICAgPE5vdGlmaWNhdGlvbkRyb3Bkb3duIC8+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxQcm9maWxlUG9wdXAgb25DbGljaz17KCkgPT4gIXVzZXI/LmRhdGE/LmlkID8gc2V0SXNWaXNpYmxlKHRydWUpIDogc2V0SXNNb2JpbGVQb3B1cCh0cnVlKX0gdXNlcj17dXNlcj8uZGF0YX0vPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPEF1dGhEaWFsb2cgc2l6ZT17J2xnJ30gIG9uQ2xvc2U9eygpID0+IHsgc2V0SXNWaXNpYmxlKGZhbHNlKSB9fSBvcGVuPXtpc1Zpc2libGV9IC8+XHJcbiAgICAgICAgPC9oZWFkZXI+KVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGhlYWRlciBjbGFzc05hbWU9e2Nsc3goc3R5bGVzLmhlYWRlciwgJ2QtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbicpfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPXsnLyd9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxhPjxpbWcgY2xhc3NOYW1lPXtzdHlsZXMubG9nb30gc3JjPVwiL2xvZ28uc3ZnXCIgYWx0PVwiTG9nb1wiLz48L2E+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3NwZWNpYWxpc3RzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBtbC00NVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cIm1yLTEwXCIgc3JjPVwiL3VzZXJzLnN2Z1wiIGFsdD1cItCh0L/QtdGG0LjQsNC70LjRgdGC0YtcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgINCh0L/QtdGG0LjQsNC70LjRgdGC0YtcclxuICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgIDxBdmFpbGFibGVGb3JXb3JrIGNoZWNrZWQ9e2NoZWNrZWR9IG9uQ2hhbmdlPXtvbkNoYW5nZUNoZWNrYm94fSBzZXRDaGVja2VkPXtoYW5kbGVDaGFuZ2VDaGVja2JveH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzTG9hZGluZz17aXNMb2FkaW5nfS8+XHJcbiAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cIm1sLTQ1IGN1cnNvci1wb2ludGVyXCIgc3JjPVwiL3NlYXJjaC5zdmdcIiBhbHQ9XCLQn9C+0LjRgdC6XCIgb25DbGljaz17b25PcGVuU2VhcmNofS8+XHJcbiAgICAgICAgICAgICAgICA8Tm90aWZpY2F0aW9uRHJvcGRvd24gLz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWwtMzVcIj5cclxuICAgICAgICAgICAgICAgICAgICB7dXNlci5kYXRhICYmIDxQcm9maWxlUG9wdXAgdXNlcj17dXNlci5kYXRhfS8+fVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfSB2YXJpYW50PVwiY29udGFpbmVkXCIgY29sb3I9XCJzZWNvbmRhcnlcIiBjbGFzc05hbWU9XCJtbC0zMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgINCd0LDQv9C40YHQsNGC0YxcclxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcblxyXG4gICAgICAgICAgICA8QXV0aERpYWxvZyAgc2l6ZT17J3hzJ30gb25DbG9zZT17KCkgPT4geyBzZXRJc1Zpc2libGUoZmFsc2UpIH19IG9wZW49e2lzVmlzaWJsZX0gLz5cclxuICAgICAgICA8L2hlYWRlcj5cclxuICAgICk7XHJcbn07XHJcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImxpa2VCbG9ja1wiOiBcIkxpa2VCbG9ja19saWtlQmxvY2tfX1g4LU54XCIsXG5cdFwidXBCbG9ja1wiOiBcIkxpa2VCbG9ja191cEJsb2NrX18xaEtaNVwiLFxuXHRcImRvd25CbG9ja1wiOiBcIkxpa2VCbG9ja19kb3duQmxvY2tfXzF2R0dpXCIsXG5cdFwibGlrZUJsb2NrRnVsbFwiOiBcIkxpa2VCbG9ja19saWtlQmxvY2tGdWxsX18xd2pOTVwiLFxuXHRcImxpa2VCbG9ja01pbmlcIjogXCJMaWtlQmxvY2tfbGlrZUJsb2NrTWluaV9fMkhSektcIixcblx0XCJyb3RhdGVcIjogXCJMaWtlQmxvY2tfcm90YXRlX18xOU4xWlwiLFxuXHRcImxpa2VWb3RlZFwiOiBcIkxpa2VCbG9ja19saWtlVm90ZWRfXzJ4aWFKXCIsXG5cdFwiZGlzbGlrZVZvdGVkXCI6IFwiTGlrZUJsb2NrX2Rpc2xpa2VWb3RlZF9fMlNpTWNcIixcblx0XCJub1ZvdGVzXCI6IFwiTGlrZUJsb2NrX25vVm90ZXNfX3JjZFJKXCJcbn07XG4iLCJpbXBvcnQgY2xzeCBmcm9tICdjbHN4JztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0xpa2VCbG9jay5tb2R1bGUuc2Nzcyc7XHJcbmltcG9ydCB7IFRodW1iVXBJY29uIH0gZnJvbSAnLi4vaWNvbnMvVGh1bWJVcEljb24nO1xyXG5cclxuZXhwb3J0IHR5cGUgTGlrZUJsb2NrVm90ZSA9ICdsaWtlJyB8ICdkaXNsaWtlJyB8IHVuZGVmaW5lZDtcclxuXHJcbmludGVyZmFjZSBMaWtlQmxvY2tQcm9wcyB7XHJcbiAgbW9kZTogJ21pbmknIHwgJ2Z1bGwnO1xyXG4gIGxpa2VzOiBudW1iZXI7XHJcbiAgZGlzbGlrZXM6IG51bWJlcjtcclxuICB2b3RlPzogTGlrZUJsb2NrVm90ZTtcclxuICBvbkNoYW5nZTogKHJlc3VsdDogTGlrZUJsb2NrUmVzdWx0KSA9PiB2b2lkO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIExpa2VCbG9ja1Jlc3VsdCB7XHJcbiAgbGlrZXM6IG51bWJlcjtcclxuICBkaXNsaWtlczogbnVtYmVyO1xyXG4gIHZvdGU6IExpa2VCbG9ja1ZvdGU7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBMaWtlQmxvY2s6IFJlYWN0LkZDPExpa2VCbG9ja1Byb3BzPiA9ICh7IG1vZGUsIGxpa2VzLCBkaXNsaWtlcywgdm90ZSwgb25DaGFuZ2UgfSkgPT4ge1xyXG4gIGNvbnN0IG9uVGh1bWJVcENsaWNrID0gKCkgPT4ge1xyXG4gICAgaWYgKHZvdGUgPT09ICdsaWtlJykge1xyXG4gICAgICBvbkNoYW5nZSh7IGxpa2VzOiBsaWtlcyAtIDEsIGRpc2xpa2VzLCB2b3RlOiB1bmRlZmluZWQgfSk7XHJcbiAgICB9IGVsc2UgaWYgKHZvdGUgPT09ICdkaXNsaWtlJykge1xyXG4gICAgICBvbkNoYW5nZSh7IGxpa2VzOiBsaWtlcyArIDEsIGRpc2xpa2VzOiBkaXNsaWtlcyAtIDEsIHZvdGU6ICdsaWtlJyB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIG9uQ2hhbmdlKHsgbGlrZXM6IGxpa2VzICsgMSwgZGlzbGlrZXMsIHZvdGU6ICdsaWtlJyB9KTtcclxuICAgIH1cclxuICB9O1xyXG4gIGNvbnN0IG9uVGh1bWJEb3duQ2xpY2sgPSAoKSA9PiB7XHJcbiAgICBpZiAodm90ZSA9PT0gJ2xpa2UnKSB7XHJcbiAgICAgIG9uQ2hhbmdlKHsgbGlrZXM6IGxpa2VzIC0gMSwgZGlzbGlrZXM6IGRpc2xpa2VzICsgMSwgdm90ZTogJ2Rpc2xpa2UnIH0pO1xyXG4gICAgfSBlbHNlIGlmICh2b3RlID09PSAnZGlzbGlrZScpIHtcclxuICAgICAgb25DaGFuZ2UoeyBsaWtlcywgZGlzbGlrZXM6IGRpc2xpa2VzIC0gMSwgdm90ZTogdW5kZWZpbmVkIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgb25DaGFuZ2UoeyBsaWtlcywgZGlzbGlrZXM6IGRpc2xpa2VzICsgMSwgdm90ZTogJ2Rpc2xpa2UnIH0pO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IHtcclxuICAgIGxpa2VWb3RlZCxcclxuICAgIGRpc2xpa2VWb3RlZCxcclxuICAgIG5vVm90ZXMsXHJcbiAgICBsaWtlQmxvY2ssXHJcbiAgICBsaWtlQmxvY2tGdWxsLFxyXG4gICAgbGlrZUJsb2NrTWluaSxcclxuICAgIHVwQmxvY2ssXHJcbiAgICBkb3duQmxvY2ssXHJcbiAgICByb3RhdGUsXHJcbiAgfSA9IHN0eWxlcztcclxuICBjb25zdCB0aHVtYlVwQ2xhc3NOYW1lID0gdm90ZSA9PT0gJ2xpa2UnID8gbGlrZVZvdGVkIDogbm9Wb3RlcztcclxuICBjb25zdCB0aHVtYkRvd25DbGFzc05hbWUgPSB2b3RlID09PSAnZGlzbGlrZScgPyBkaXNsaWtlVm90ZWQgOiBub1ZvdGVzO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2xpa2VCbG9ja30+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXttb2RlID09PSAnZnVsbCcgPyBsaWtlQmxvY2tGdWxsIDogbGlrZUJsb2NrTWluaX0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Nsc3godXBCbG9jaywgdGh1bWJVcENsYXNzTmFtZSl9IG9uQ2xpY2s9e29uVGh1bWJVcENsaWNrfT5cclxuICAgICAgICAgIDxUaHVtYlVwSWNvbiBjbGFzc05hbWU9e3RodW1iVXBDbGFzc05hbWV9IC8+XHJcbiAgICAgICAgICA8c3Bhbj57bGlrZXN9PC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbHN4KGRvd25CbG9jaywgdGh1bWJEb3duQ2xhc3NOYW1lKX0gb25DbGljaz17b25UaHVtYkRvd25DbGlja30+XHJcbiAgICAgICAgICA8VGh1bWJVcEljb24gY2xhc3NOYW1lPXtjbHN4KHRodW1iRG93bkNsYXNzTmFtZSwgcm90YXRlKX0gLz5cclxuICAgICAgICAgIDxzcGFuPntkaXNsaWtlc308L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwibG9hZE1vcmVcIjogXCJMb2FkTW9yZV9sb2FkTW9yZV9fM0JMdGpcIixcblx0XCJidXR0b25cIjogXCJMb2FkTW9yZV9idXR0b25fX3JJZ1c1XCJcbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICcuLi9CdXR0b24nO1xyXG5cclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0xvYWRNb3JlLm1vZHVsZS5zY3NzJztcclxuXHJcbnR5cGUgTG9hZE1vcmVQcm9wcyA9IHtcclxuICAgIG9uQ2xpY2s/OiAoKSA9PiB2b2lkXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBMb2FkTW9yZTogUmVhY3QuRkM8TG9hZE1vcmVQcm9wcz4gPSAoeyBvbkNsaWNrIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5sb2FkTW9yZX0+XHJcbiAgICAgIDxCdXR0b24gb25DbGljaz17b25DbGlja30gY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9ufSB2YXJpYW50PVwidGV4dFwiPlxyXG4gICAgICAgINCf0L7QutCw0LfQsNGC0Ywg0LXRidC1XHJcbiAgICAgIDwvQnV0dG9uPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiYnV0dG9uXCI6IFwiTWVudUxpc3RfYnV0dG9uX19RWFRJdFwiLFxuXHRcIml0ZW1cIjogXCJNZW51TGlzdF9pdGVtX18xYm5kdFwiLFxuXHRcIm5ld0NvdW50XCI6IFwiTWVudUxpc3RfbmV3Q291bnRfXzJ5UG1lXCIsXG5cdFwiaWNvblwiOiBcIk1lbnVMaXN0X2ljb25fXzJkTkhJXCJcbn07XG4iLCJpbXBvcnQgY2xzeCBmcm9tICdjbHN4JztcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHtCdXR0b259IGZyb20gJy4uL0J1dHRvbic7XHJcblxyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vTWVudUxpc3QubW9kdWxlLnNjc3MnO1xyXG5cclxudHlwZSBNZW51SXRlbSA9IHsgbmFtZTogc3RyaW5nOyB1cmw6IHN0cmluZzsgaWNvbjogc3RyaW5nOyBuZXdDb3VudD86IG51bWJlcjsgaGFzTW9yZT86IGJvb2xlYW47IGlzQWN0aXZlPzogYm9vbGVhbiwgb25DbGljaz86ICgpID0+IHZvaWQgfTtcclxuXHJcbnR5cGUgTWVudUxpc3RQcm9wcyA9IHtcclxuICAgIGl0ZW1zOiBNZW51SXRlbVtdO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IE1lbnVMaXN0OiBSZWFjdC5GQzxNZW51TGlzdFByb3BzPiA9ICh7aXRlbXN9KSA9PiB7XHJcbiAgICBjb25zdCBoYW5kbGVDbGljayA9IChpdGVtOiBNZW51SXRlbSkgPT4ge1xyXG4gICAgICAgIGlmIChpdGVtLm9uQ2xpY2spIHtcclxuICAgICAgICAgICAgaXRlbS5vbkNsaWNrKClcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8dWwgY2xhc3NOYW1lPVwibWItNDBcIj5cclxuICAgICAgICAgICAge2l0ZW1zLm1hcCgoaXRlbSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgPGxpIGtleT17aXRlbS51cmwgKyBpdGVtLm5hbWV9IGNsYXNzTmFtZT17c3R5bGVzLml0ZW19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2l0ZW0ub25DbGljayA/ICcjJyA6IGl0ZW0udXJsfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbHN4KCd3MTAwIGp1c3RpZnktY29udGVudC1iZXR3ZWVuJywgc3R5bGVzLmJ1dHRvbil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD17aXRlbS5pc0FjdGl2ZSA/ICdjb250YWluZWQnIDogJ3RleHQnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnRJY29uPXtpdGVtLmljb24gJiYgPGltZyBjbGFzc05hbWU9e3N0eWxlcy5pY29ufSBzcmM9e2l0ZW0uaWNvbn0vPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmRJY29uPXtpdGVtLmhhc01vcmUgJiYgPGltZyBzcmM9XCIvZG90cy5zdmdcIi8+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZUNsaWNrKGl0ZW0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibXItYXV0b1wiPlxyXG4gICAgICAgICAgICAgICAgICB7aXRlbS5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgIHtpdGVtLm5ld0NvdW50ID8gPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMubmV3Q291bnR9Pit7aXRlbS5uZXdDb3VudH08L3NwYW4+IDogJyd9XHJcbiAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvdWw+XHJcbiAgICApO1xyXG59O1xyXG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJwb3N0XCI6IFwiTWluaVBvc3RfcG9zdF9fMUZMQW9cIixcblx0XCJpbmZvXCI6IFwiTWluaVBvc3RfaW5mb19fMVA0U1VcIixcblx0XCJ1c2VyXCI6IFwiTWluaVBvc3RfdXNlcl9fMWdNNjhcIixcblx0XCJ1c2VyX2F2YXRhclwiOiBcIk1pbmlQb3N0X3VzZXJfYXZhdGFyX18yMl9lUlwiLFxuXHRcInVzZXJfbmFtZVwiOiBcIk1pbmlQb3N0X3VzZXJfbmFtZV9fUHQ5T2JcIixcblx0XCJ0aW1lXCI6IFwiTWluaVBvc3RfdGltZV9fMjVsNnZcIixcblx0XCJ0YWdzXCI6IFwiTWluaVBvc3RfdGFnc19fMWx4aWFcIixcblx0XCJ0YWdcIjogXCJNaW5pUG9zdF90YWdfXzJzWW5jXCIsXG5cdFwiaW1hZ2VcIjogXCJNaW5pUG9zdF9pbWFnZV9fMUpqS1JcIixcblx0XCJ0aXRsZVwiOiBcIk1pbmlQb3N0X3RpdGxlX18ybVFpZVwiLFxuXHRcImRlc2NyaXB0aW9uXCI6IFwiTWluaVBvc3RfZGVzY3JpcHRpb25fXzE2Q2VfXCIsXG5cdFwicG9wdWxhcml0eVwiOiBcIk1pbmlQb3N0X3BvcHVsYXJpdHlfXzFsaGRXXCIsXG5cdFwicG9wdWxhcml0eV9sZWZ0XCI6IFwiTWluaVBvc3RfcG9wdWxhcml0eV9sZWZ0X18xcU5obFwiLFxuXHRcImNvbW1lbnRzXCI6IFwiTWluaVBvc3RfY29tbWVudHNfXzNxbFJFXCIsXG5cdFwidmlld3NcIjogXCJNaW5pUG9zdF92aWV3c19fMmZZeE5cIixcblx0XCJjb21tZW50c19jb3VudFwiOiBcIk1pbmlQb3N0X2NvbW1lbnRzX2NvdW50X18xN2tJTFwiLFxuXHRcInZpZXdzX2NvdW50XCI6IFwiTWluaVBvc3Rfdmlld3NfY291bnRfXzExMDNOXCJcbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgeyBmb3JtYXREaXN0YW5jZVRvTm93IH0gZnJvbSAnZGF0ZS1mbnMnO1xyXG5pbXBvcnQgeyBydSB9IGZyb20gJ2RhdGUtZm5zL2xvY2FsZSc7XHJcbmltcG9ydCB7IENvbW1lbnRJY29uIH0gZnJvbSAnLi4vaWNvbnMvQ29tbWVudEljb24nO1xyXG5pbXBvcnQgeyBFeWVJY29uIH0gZnJvbSAnLi4vaWNvbnMvRXllSWNvbic7XHJcbmltcG9ydCB7IExpa2VCbG9ja1Jlc3VsdCwgTGlrZUJsb2NrIH0gZnJvbSAnLi4vTGlrZUJsb2NrJztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL01pbmlQb3N0Lm1vZHVsZS5zY3NzJztcclxuaW1wb3J0IHsgUGFzdFRpbWVMYWJlbCB9IGZyb20gJy4uL1Bhc3RUaW1lTGFiZWwnO1xyXG5pbXBvcnQgeyBVc2VyVmlld09uQ29udGVudCB9IGZyb20gJy4uL1VzZXJWaWV3T25Db250ZW50JztcclxuaW1wb3J0IHsgVmlld3NBbmRDb21tZW50cyB9IGZyb20gJy4uL1ZpZXdzQW5kQ29tbWVudHMnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBNaW5pUG9zdERhdGEge1xyXG4gIGlkOiBudW1iZXI7XHJcbiAgdGl0bGU6IHN0cmluZztcclxuICB1c2VyOiB7XHJcbiAgICBpZDogbnVtYmVyO1xyXG4gICAgbmFtZTogc3RyaW5nO1xyXG4gICAgYXZhdGFyVXJsOiBzdHJpbmc7XHJcbiAgfTtcclxuICBzbHVnOiBzdHJpbmc7XHJcbiAgdGFnczogc3RyaW5nW107XHJcbiAgdGltZTogRGF0ZTtcclxuICBkZXNjcmlwdGlvbjogc3RyaW5nO1xyXG4gIGltYWdlVXJsOiBzdHJpbmc7XHJcbiAgY29tbWVudHNDb3VudDogbnVtYmVyO1xyXG4gIHZpZXdzQ291bnQ6IG51bWJlcjtcclxuICBsaWtlc0NvdW50OiBudW1iZXI7XHJcbiAgZGlzbGlrZXNDb3VudDogbnVtYmVyO1xyXG4gIHZvdGU/OiAnbGlrZScgfCAnZGlzbGlrZScgfCBudWxsO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgTWluaVBvc3RQcm9wcyB7XHJcbiAgcG9zdERhdGE6IE1pbmlQb3N0RGF0YTtcclxuICBvblNldExpa2U6IChwb3N0SWQ6IG51bWJlciwgbGlrZTogdW5rbm93bikgPT4gdm9pZFxyXG5cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IE1pbmlQb3N0OiBSZWFjdC5GQzxNaW5pUG9zdFByb3BzPiA9ICh7IHBvc3REYXRhLCBvblNldExpa2UgfSkgPT4ge1xyXG4gIGNvbnN0IHtcclxuICAgIHVzZXIsXHJcbiAgICB0aXRsZSxcclxuICAgIHRpbWUsXHJcbiAgICB0YWdzLFxyXG4gICAgaW1hZ2VVcmwsXHJcbiAgICBkZXNjcmlwdGlvbixcclxuICAgIGNvbW1lbnRzQ291bnQsXHJcbiAgICB2aWV3c0NvdW50LFxyXG4gICAgbGlrZXNDb3VudCxcclxuICAgIGRpc2xpa2VzQ291bnQsXHJcbiAgICBzbHVnLFxyXG4gICAgdm90ZSxcclxuICAgIGlkXHJcbiAgfSA9IHBvc3REYXRhO1xyXG4gIGNvbnN0IFtsaWtlc0FuZERpc2xpa2VzLCBzZXRMaWtlc0FuZERpc2xpa2VzXSA9IFJlYWN0LnVzZVN0YXRlPExpa2VCbG9ja1Jlc3VsdD4oe1xyXG4gICAgbGlrZXM6IGxpa2VzQ291bnQsXHJcbiAgICBkaXNsaWtlczogZGlzbGlrZXNDb3VudCxcclxuICAgIHZvdGUsXHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVNldExpa2UgPSAobGlrZTogTGlrZUJsb2NrUmVzdWx0KSA9PiB7XHJcbiAgICBzZXRMaWtlc0FuZERpc2xpa2VzKGxpa2UpXHJcbiAgICBvblNldExpa2UoaWQsIGxpa2Uudm90ZSlcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnBvc3R9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmluZm99PlxyXG4gICAgICAgIDxVc2VyVmlld09uQ29udGVudCB1c2VyPXt1c2VyfSAvPlxyXG4gICAgICAgIDxQYXN0VGltZUxhYmVsIHRpbWU9e3RpbWUuZ2V0VGltZSgpfSBsZWZ0U2lkZVBvaW50IC8+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50YWdzfT5cclxuICAgICAgICAgIHt0YWdzLm1hcCgodGFnKSA9PiAoXHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLnRhZ30+I3t0YWd9PC9zcGFuPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICB7cG9zdERhdGEuaW1hZ2VVcmwgJiYgPGltZyBjbGFzc05hbWU9e3N0eWxlcy5pbWFnZX0gc3JjPXtpbWFnZVVybH0gYWx0PVwi0JfQtNC10YHRjCDQtNC+0LvQttC90LAg0LHRi9C70LAg0LHRi9GC0Ywg0LrQsNGA0YLQuNC90LrQsCwg0L3QviDQtdGRINC90LXRgi4uLlwiIC8+fVxyXG4gICAgICA8aDIgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9PlxyXG4gICAgICAgIDxMaW5rIGhyZWY9e2AvcG9zdC8ke3NsdWd9YH0+e3RpdGxlfTwvTGluaz5cclxuICAgICAgPC9oMj5cclxuICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuZGVzY3JpcHRpb259PntkZXNjcmlwdGlvbn08L3A+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucG9wdWxhcml0eX0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wb3B1bGFyaXR5X2xlZnR9PlxyXG4gICAgICAgICAgPFZpZXdzQW5kQ29tbWVudHMgY29tbWVudHM9e2NvbW1lbnRzQ291bnR9IHZpZXdzPXt2aWV3c0NvdW50fSBtb2RlPVwibWluaVwiIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wb3B1bGFyaXR5X3JpZ2h0fT5cclxuICAgICAgICAgIDxMaWtlQmxvY2tcclxuICAgICAgICAgICAgdm90ZT17bGlrZXNBbmREaXNsaWtlcy52b3RlfVxyXG4gICAgICAgICAgICBsaWtlcz17bGlrZXNBbmREaXNsaWtlcy5saWtlc31cclxuICAgICAgICAgICAgZGlzbGlrZXM9e2xpa2VzQW5kRGlzbGlrZXMuZGlzbGlrZXN9XHJcbiAgICAgICAgICAgIG1vZGU9XCJmdWxsXCJcclxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZVNldExpa2V9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbnRhaW5lclwiOiBcIk1vYmlsZVByb2ZpbGVQb3B1cF9jb250YWluZXJfXzJJSGJxXCIsXG5cdFwiaGVhZGVyXCI6IFwiTW9iaWxlUHJvZmlsZVBvcHVwX2hlYWRlcl9fM0hZWFRcIixcblx0XCJoZWFkZXJfcHJvZmlsZVwiOiBcIk1vYmlsZVByb2ZpbGVQb3B1cF9oZWFkZXJfcHJvZmlsZV9fMmpreUJcIixcblx0XCJuYW1lXCI6IFwiTW9iaWxlUHJvZmlsZVBvcHVwX25hbWVfXzhnZXVTXCIsXG5cdFwiYXZhaWxhYmxlXCI6IFwiTW9iaWxlUHJvZmlsZVBvcHVwX2F2YWlsYWJsZV9fM0NCZ1VcIixcblx0XCJzZWN0aW9uMlwiOiBcIk1vYmlsZVByb2ZpbGVQb3B1cF9zZWN0aW9uMl9fNUk1MTVcIixcblx0XCJib2R5XCI6IFwiTW9iaWxlUHJvZmlsZVBvcHVwX2JvZHlfXzF0cmJ4XCIsXG5cdFwiZGl2aWRlclwiOiBcIk1vYmlsZVByb2ZpbGVQb3B1cF9kaXZpZGVyX18zV2RkOVwiLFxuXHRcInNlYXJjaFRpdGxlXCI6IFwiTW9iaWxlUHJvZmlsZVBvcHVwX3NlYXJjaFRpdGxlX19NdG9HbVwiLFxuXHRcInNlYXJjaFRpdGxlSW5uZXJcIjogXCJNb2JpbGVQcm9maWxlUG9wdXBfc2VhcmNoVGl0bGVJbm5lcl9fMmFyUU5cIixcblx0XCJzZWFyY2hJdGVtc1wiOiBcIk1vYmlsZVByb2ZpbGVQb3B1cF9zZWFyY2hJdGVtc19fMklOYjdcIixcblx0XCJzZWFyY2hJdGVtXCI6IFwiTW9iaWxlUHJvZmlsZVBvcHVwX3NlYXJjaEl0ZW1fXzM0LWg0XCIsXG5cdFwic2hvd0FsbFwiOiBcIk1vYmlsZVByb2ZpbGVQb3B1cF9zaG93QWxsX18xMXR0dFwiLFxuXHRcImZvb3RlclwiOiBcIk1vYmlsZVByb2ZpbGVQb3B1cF9mb290ZXJfX2wycVFoXCJcbn07XG4iLCJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xyXG5cclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL01vYmlsZVByb2ZpbGVQb3B1cC5tb2R1bGUuc2Nzcyc7XHJcbmltcG9ydCBJdGVtIGZyb20gXCIuLi9TZWFyY2hQb3B1cC9JdGVtXCI7XHJcbmltcG9ydCBjbHN4IGZyb20gXCJjbHN4XCI7XHJcbmltcG9ydCB7QXZhdGFyLCBEaXZpZGVyLCBUeXBvZ3JhcGh5fSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuaW1wb3J0IHt1c2VTZWxlY3Rvcn0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7c2VsZWN0VXNlclN0YXRlfSBmcm9tIFwiLi4vLi4vcmVkdXgvdXNlci91c2VyLnNlbGVjdG9yXCI7XHJcbmltcG9ydCB7QnV0dG9ufSBmcm9tIFwiLi4vQnV0dG9uXCI7XHJcbmltcG9ydCB7QXZhaWxhYmxlRm9yV29ya30gZnJvbSBcIi4uL0F2YWlsYWJsZUZvcldvcmtcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQge3VzZVJvdXRlcn0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcblxyXG5pbnRlcmZhY2UgU2VhcmNoUG9wdXBQcm9wcyB7XHJcbiAgICBjaGVja2VkPzogYm9vbGVhbjtcclxuICAgIG9uQ2hhbmdlOiAoZXZlbnQ6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB2b2lkO1xyXG4gICAgc2V0Q2hlY2tlZDogKHZhbHVlOiBib29sZWFuKSA9PiB2b2lkO1xyXG4gICAgaXNMb2FkaW5nOiBib29sZWFuO1xyXG59XHJcblxyXG5jb25zdCBtb2NrdXAgPSB7XHJcbiAgICBhdXRob3JzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZDogMSxcclxuICAgICAgICAgICAgbmFtZTogJ9Cl0LDRgNGG0LAg0JvQtdC70L7QstC40YcnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZDogMixcclxuICAgICAgICAgICAgbmFtZTogJ9Cd0LDRhdCw0Lsg0JXRidC10YLQvtGC0L7QstC40YcnLFxyXG4gICAgICAgIH0sXHJcbiAgICBdLFxyXG4gICAgYXJ0aWNsZXM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlkOiAzLFxyXG4gICAgICAgICAgICBuYW1lOiAn0KHQvtGF0LAt0L/QvtC00LrQsNGB0YIg0L3QsCBJbmd0ZXJuZXQnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZDogNCxcclxuICAgICAgICAgICAgbmFtZTogJ9Cl0LAg0YXQsCDRhdCwLCDQs9C+0LLQvtGA0Y4g0Y8g0LLRgdC10LwsINC60L7QvNGDINC90LUg0YHQvNC10YjQvdC+IScsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlkOiA1LFxyXG4gICAgICAgICAgICBuYW1lOiAn0K8g0YHQuNC20YMg0L3QsCDQutGD0YXQvdC1LCDRhdCw0LLQsNGOINCx0L7RgNGJ0YwnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZDogNixcclxuICAgICAgICAgICAgbmFtZTogJ9CvINGB0LjQttGDINC90LAg0LrRg9GF0L3QtSwg0YXQsNCy0LDRjiDQsdC+0YDRidGMJyxcclxuICAgICAgICB9LFxyXG4gICAgXSxcclxuICAgIHRhZ3M6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlkOiA3LFxyXG4gICAgICAgICAgICBuYW1lOiAn0KHQvtGF0LAt0L/QvtC00LrQsNGB0YIg0L3QsCBJbmd0ZXJuZXQnLFxyXG4gICAgICAgIH0sXHJcbiAgICBdLFxyXG4gICAgY29tbWVudHM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlkOiA4LFxyXG4gICAgICAgICAgICBuYW1lOiAn0KHQvtGF0LAt0L/QvtC00LrQsNGB0YIg0L3QsCBJbmd0ZXJuZXQnLFxyXG4gICAgICAgIH0sXHJcbiAgICBdLFxyXG4gICAgcG9kY2FzdHM6IFtdLFxyXG59O1xyXG5cclxuY29uc3QgTW9iaWxlUHJvZmlsZVBvcHVwOiBSZWFjdC5GQzxTZWFyY2hQb3B1cFByb3BzPiA9ICh7IGNoZWNrZWQsIHNldENoZWNrZWQsIGlzTG9hZGluZywgb25DaGFuZ2UgfSkgPT4ge1xyXG4gICAgY29uc3QgdXNlciA9IHVzZVNlbGVjdG9yKHNlbGVjdFVzZXJTdGF0ZSlbJ2RhdGEnXTtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuXHJcbiAgICBjb25zdCBoYW5kbGVDbGljayA9ICgpID0+IHtcclxuICAgICAgICByb3V0ZXIucHVzaCgnL3dyaXRlJyk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgb25Mb2dvdXQgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYgKHdpbmRvdz8uY29uZmlybSgn0JLRiyDQtNC10LnRgdGC0LLQuNGC0LXQu9GM0L3QviDRhdC+0YLQuNGC0LUg0L/QvtC60LjQvdGD0YLRjCDRgdCw0LnRgiA/JykpIHtcclxuICAgICAgICAgICAgZG9jdW1lbnQuY29va2llID0gJ2F1dGhfdG9rZW4nICsgJz07IE1heC1BZ2U9MCc7XHJcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCd0b2tlbicpO1xyXG4gICAgICAgICAgICBsb2NhdGlvbi5ocmVmID0gJy8nO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ib2R5fT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVyfT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmhlYWRlcl9wcm9maWxlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEF2YXRhciBjbGFzc05hbWU9e2Nsc3goJ2N1cnNvci1wb2ludGVyJywgc3R5bGVzLnJvb3QpfSBhbHQ9e3VzZXI/Lm5hbWV9IHNyYz17dXNlcj8uYXZhdGFyfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e3N0eWxlcy5uYW1lfT57dXNlci5uYW1lfTwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVDbGlja30gdmFyaWFudD1cImNvbnRhaW5lZFwiIGNvbG9yPVwic2Vjb25kYXJ5XCIgY2xhc3NOYW1lPVwibXQtMTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAg0J3QsNC/0LjRgdCw0YLRjFxyXG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Nsc3goJ210LTE1Jywgc3R5bGVzLmF2YWlsYWJsZSl9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxBdmFpbGFibGVGb3JXb3JrIGNoZWNrZWQ9e2NoZWNrZWR9IG9uQ2hhbmdlPXtvbkNoYW5nZX0gc2V0Q2hlY2tlZD17c2V0Q2hlY2tlZH0gaXNMb2FkaW5nPXtpc0xvYWRpbmd9Lz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbHN4KHN0eWxlcy5zZWN0aW9uMiwgJ2QtZmxleCBmbGV4LWNvbHVtbicpfT5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgL3Byb2ZpbGUvJHt1c2VyLmlkfT90eXBlPWFydGljbGVzYH0+PGEgY2xhc3NOYW1lPVwibWItM1wiPtCh0YLQsNGC0YzQuDwvYT48L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC9wcm9maWxlLyR7dXNlci5pZH0/dHlwZT1kcmFmdHNgfT48YSBjbGFzc05hbWU9XCJtYi0zXCI+0KfQtdGA0L3QvtCy0LjQutC4PC9hPjwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXsnL3Byb2ZpbGUnfT48YSBjbGFzc05hbWU9XCJtYi0zXCI+0J3QsNGB0YLRgNC+0LnQutC4PC9hPjwvTGluaz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxEaXZpZGVyIGNsYXNzTmFtZT17c3R5bGVzLmRpdmlkZXJ9IC8+XHJcblxyXG4gICAgICAgICAgICAgICAgPGEgb25DbGljaz17b25Mb2dvdXR9IGNsYXNzTmFtZT17Y2xzeChzdHlsZXMuc2VjdGlvbjIsICdkLWZsZXggZmxleC1jb2x1bW4nKX0+0JLRi9C50YLQuDwvYT5cclxuXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1vYmlsZVByb2ZpbGVQb3B1cDtcclxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwicGFwZXJcIjogXCJOYXZpZ2F0aW9uX3BhcGVyX18xYTdMYlwiLFxuXHRcInJvb3RcIjogXCJOYXZpZ2F0aW9uX3Jvb3RfX003NHd0XCIsXG5cdFwibWFpbkxpc3RcIjogXCJOYXZpZ2F0aW9uX21haW5MaXN0X19SaU9YM1wiLFxuXHRcIml0ZW1cIjogXCJOYXZpZ2F0aW9uX2l0ZW1fXzI0TjhRXCIsXG5cdFwibWFpbkl0ZW1Cb2xkVGV4dFwiOiBcIk5hdmlnYXRpb25fbWFpbkl0ZW1Cb2xkVGV4dF9fMklhNEZcIixcblx0XCJjbG9zZUJ1dHRvblwiOiBcIk5hdmlnYXRpb25fY2xvc2VCdXR0b25fXzJRbjROXCIsXG5cdFwiY2xvc2VJY29uXCI6IFwiTmF2aWdhdGlvbl9jbG9zZUljb25fXzJvNEtnXCIsXG5cdFwibG9nb3V0XCI6IFwiTmF2aWdhdGlvbl9sb2dvdXRfXzFZTlNmXCJcbn07XG4iLCJpbXBvcnQgeyBEaXZpZGVyLCBEcmF3ZXIsIE1lbnVJdGVtIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5JztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5cclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL05hdmlnYXRpb24ubW9kdWxlLnNjc3MnO1xyXG5pbXBvcnQge3NlbGVjdFVzZXJTdGF0ZX0gZnJvbSBcIi4uLy4uL3JlZHV4L3VzZXIvdXNlci5zZWxlY3RvclwiO1xyXG5pbXBvcnQge1NpZGVCbG9ja30gZnJvbSBcIi4uL1NpZGVCbG9ja1wiO1xyXG5pbXBvcnQge01lbnVMaXN0fSBmcm9tIFwiLi4vTWVudUxpc3RcIjtcclxuaW1wb3J0IHtUYWdzfSBmcm9tIFwiLi4vVGFnc1wiO1xyXG5pbXBvcnQge1RoZW1lfSBmcm9tIFwiLi4vLi4vaW50ZXJmYWNlc1wiO1xyXG5pbXBvcnQge3NlbGVjdENhdGVnb3JpZXNTdGF0ZSwgc2VsZWN0VGhlbWVzU3RhdGV9IGZyb20gXCIuLi8uLi9yZWR1eC9kaXJlY3RvcnkvZGlyZWN0b3J5LnNlbGVjdG9yXCI7XHJcblxyXG5pbnRlcmZhY2UgTmF2aWdhdGlvblByb3BzIHtcclxuICBtZW51T3BlbmVkOiBib29sZWFuO1xyXG4gIG9uQ2xvc2U6ICgpID0+IHZvaWQ7XHJcbn1cclxuXHJcbmNvbnN0IG1lZWx6ID0gW1xyXG4gIHtcclxuICAgIHRpdGxlOiAnQ2hlZnMnLFxyXG4gICAgbGluazogJy9jaGVmcycsXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogJ0RlbGl2ZXJ5IE1lbnUnLFxyXG4gICAgbGluazogJy9tZW51JyxcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiAnUmVjaXBlIEJveGVzJyxcclxuICAgIGxpbms6ICcvcmVjaXBlcycsXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogJ0NoZWZzIFRhYmxlJyxcclxuICAgIGxpbms6ICcvY2hlZnMtdGFibGUnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6ICdTdG9yZScsXHJcbiAgICBsaW5rOiAnL2NoZWZzLXN0b3JlJyxcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiAnTWFzdGVyY2xhc3NlcycsXHJcbiAgICBsaW5rOiAnL21hc3Rlci1jbGFzc2VzJyxcclxuICB9LFxyXG5dO1xyXG5cclxuY29uc3QgYWJvdXQgPSBbXHJcbiAge1xyXG4gICAgdGl0bGU6ICdBYm91dCBVcycsXHJcbiAgICBsaW5rOiAnL2Fib3V0JyxcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiAnQ2FyZWVyJyxcclxuICAgIGxpbms6ICcvY2FyZWVyJyxcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiAnRkFRcycsXHJcbiAgICBsaW5rOiAnL2ZhcScsXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogJ0NvbnRhY3QgdXMnLFxyXG4gICAgbGluazogJy9jb250YWN0X3VzJyxcclxuICB9LFxyXG5dO1xyXG5cclxuZXhwb3J0IGNvbnN0IE5hdmlnYXRpb25EcmF3ZXI6IFJlYWN0LkZDPE5hdmlnYXRpb25Qcm9wcz4gPSAoeyBtZW51T3BlbmVkLCBvbkNsb3NlIH0pOiBSZWFjdC5SZWFjdEVsZW1lbnQgPT4ge1xyXG4gIGNvbnN0IHVzZXIgPSB1c2VTZWxlY3RvcihzZWxlY3RVc2VyU3RhdGUpWydkYXRhJ107XHJcbiAgY29uc3QgW3NlbGVjdGVkVGhlbWVzLCBzZXRTZWxlY3RlZFRoZW1lc10gPSB1c2VTdGF0ZTxUaGVtZVtdPihbXSk7XHJcbiAgY29uc3QgdGhlbWVzID0gdXNlU2VsZWN0b3Ioc2VsZWN0VGhlbWVzU3RhdGUpO1xyXG4gIGNvbnN0IGNhdGVnb3JpZXMgPSB1c2VTZWxlY3RvcihzZWxlY3RDYXRlZ29yaWVzU3RhdGUpO1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICBjb25zdCBoYW5kbGVMb2dvdXQgPSAoKTogdm9pZCA9PiB7XHJcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LmNvbmZpcm0oJ0FyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBsb2cgb3V0PycpKSB7XHJcbiAgICAgIHRydWVcclxuICAgIH1cclxuICB9O1xyXG5cclxuXHJcbiAgY29uc3QgaGFuZGxlU2VsZWN0VGhlbWUgPSBhc3luYyAodDogVGhlbWUpID0+IHtcclxuICAgIHNldFNlbGVjdGVkVGhlbWVzKCgpID0+IFsuLi5zZWxlY3RlZFRoZW1lcywgdF0pO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxEcmF3ZXIgZWxldmF0aW9uPXswfSBhbmNob3I9XCJsZWZ0XCIgY2xhc3Nlcz17eyBwYXBlcjogc3R5bGVzLnBhcGVyIH19IG9wZW49e21lbnVPcGVuZWR9IG9uQ2xvc2U9e29uQ2xvc2V9PlxyXG4gICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmNsb3NlQnV0dG9ufSBvbkNsaWNrPXtvbkNsb3NlfT5cclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5jbG9zZUljb259IC8+XHJcbiAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8bmF2IGNsYXNzTmFtZT17c3R5bGVzLnJvb3R9PlxyXG5cclxuICAgICAgICA8TGluayBocmVmPVwiL3NwZWNpYWxpc3RzXCI+XHJcbiAgICAgICAgICA8YSBjbGFzc05hbWU9XCJkLWZsZXggbWItMyBtbC0xMFwiPlxyXG4gICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cIm1yLTEwXCIgc3JjPVwiL3VzZXJzLnN2Z1wiIGFsdD1cItCh0L/QtdGG0LjQsNC70LjRgdGC0YtcIi8+XHJcbiAgICAgICAgICAgINCh0L/QtdGG0LjQsNC70LjRgdGC0YtcclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICA8L0xpbms+XHJcblxyXG4gICAgICAgIDxTaWRlQmxvY2sgbmFtZT1cItCa0LDRgtC10LPQvtGA0LjQuFwiPlxyXG4gICAgICAgICAgPE1lbnVMaXN0XHJcbiAgICAgICAgICAgICAgaXRlbXM9e2NhdGVnb3JpZXMubWFwKGMgPT4gKHtcclxuICAgICAgICAgICAgICAgIG5hbWU6IGMubmFtZSxcclxuICAgICAgICAgICAgICAgIHVybDogYC90YWdzLyR7Yy5zbHVnfWAsXHJcbiAgICAgICAgICAgICAgICBpY29uOiBgLyR7Yy5zbHVnfS5wbmdgXHJcbiAgICAgICAgICAgICAgfSkpfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L1NpZGVCbG9jaz5cclxuICAgICAgICA8U2lkZUJsb2NrIG5hbWU9XCLQotC10LzRi1wiPlxyXG4gICAgICAgICAgPFRhZ3NcclxuICAgICAgICAgICAgICBpdGVtcz17dGhlbWVzfVxyXG4gICAgICAgICAgICAgIGhhbmRsZVNlbGVjdD17aGFuZGxlU2VsZWN0VGhlbWV9XHJcbiAgICAgICAgICAgICAgc2VsZWN0ZWRJdGVtcz17c2VsZWN0ZWRUaGVtZXN9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvU2lkZUJsb2NrPlxyXG4gICAgICAgIHt1c2VyICYmIChcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubG9nb3V0fT5cclxuICAgICAgICAgICAgPERpdmlkZXIgLz5cclxuICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgIDxNZW51SXRlbSBjbGFzc05hbWU9e3N0eWxlcy5pdGVtfSBvbkNsaWNrPXtoYW5kbGVMb2dvdXR9PlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MVwiPkxvZ291dDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9uYXY+XHJcbiAgICA8L0RyYXdlcj5cclxuICApO1xyXG59O1xyXG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJub3RpZmljYXRpb25cIjogXCJOb3RpZmljYXRpb25Ecm9wZG93bl9ub3RpZmljYXRpb25fX19mQmVoXCIsXG5cdFwibm90aWZpY2F0aW9uTGlzdFwiOiBcIk5vdGlmaWNhdGlvbkRyb3Bkb3duX25vdGlmaWNhdGlvbkxpc3RfXzFKemd3XCIsXG5cdFwibGlzdENvbnRlbnRcIjogXCJOb3RpZmljYXRpb25Ecm9wZG93bl9saXN0Q29udGVudF9fMVdFVm9cIixcblx0XCJ0aXRsZVwiOiBcIk5vdGlmaWNhdGlvbkRyb3Bkb3duX3RpdGxlX18zNHJJUFwiLFxuXHRcIm5vdGlmaWNhdGlvblBvcHVwXCI6IFwiTm90aWZpY2F0aW9uRHJvcGRvd25fbm90aWZpY2F0aW9uUG9wdXBfXzdjMHE0XCIsXG5cdFwiaXRlbVwiOiBcIk5vdGlmaWNhdGlvbkRyb3Bkb3duX2l0ZW1fX3NjbE9vXCIsXG5cdFwiYXZhdGFyXCI6IFwiTm90aWZpY2F0aW9uRHJvcGRvd25fYXZhdGFyX18xN3NkNVwiLFxuXHRcImxpa2VCbG9ja1wiOiBcIk5vdGlmaWNhdGlvbkRyb3Bkb3duX2xpa2VCbG9ja19fMllJc1hcIlxufTtcbiIsImltcG9ydCB7QXZhdGFyLCBCYWRnZSwgSWNvbkJ1dHRvbiwgTGlzdCwgUG9wb3ZlciwgVHlwb2dyYXBoeX0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5pbXBvcnQgZm9ybWF0IGZyb20gJ2RhdGUtZm5zL2Zvcm1hdCc7XHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vTm90aWZpY2F0aW9uRHJvcGRvd24ubW9kdWxlLnNjc3MnO1xyXG5pbXBvcnQge05vdGlmaWNhdGlvbiwgVXNlcn0gZnJvbSBcIi4uLy4uL2ludGVyZmFjZXNcIjtcclxuaW1wb3J0IHt1c2VTZWxlY3Rvcn0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7c2VsZWN0VXNlck5vdGlmaWNhdGlvbnN9IGZyb20gXCIuLi8uLi9yZWR1eC91c2VyL3VzZXIuc2VsZWN0b3JcIjtcclxuaW1wb3J0IEl0ZW0gZnJvbSBcIi4vaXRlbVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IE5vdGlmaWNhdGlvbkRyb3Bkb3duOiBSZWFjdC5GQyA9ICgpOiBSZWFjdC5SZWFjdEVsZW1lbnQgPT4ge1xyXG4gICAgY29uc3QgW2FuY2hvckVsLCBzZXRBbmNob3JFbF0gPSBSZWFjdC51c2VTdGF0ZTxIVE1MQnV0dG9uRWxlbWVudCB8IG51bGw+KG51bGwpO1xyXG4gICAgY29uc3Qgb3BlbiA9IEJvb2xlYW4oYW5jaG9yRWwpO1xyXG4gICAgY29uc3Qgbm90aWZpY2F0aW9ucyA9IHVzZVNlbGVjdG9yKHNlbGVjdFVzZXJOb3RpZmljYXRpb25zKTtcclxuXHJcblxyXG4gICAgY29uc3QgdG9nZ2xlT3BlblBvcHVwID0gKGV2ZW50OiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxCdXR0b25FbGVtZW50Pik6IHZvaWQgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKDEyMzApO1xyXG4gICAgICAgIHNldEFuY2hvckVsKGFuY2hvckVsID8gbnVsbCA6IGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVDbG9zZSA9ICgpOiB2b2lkID0+IHtcclxuICAgICAgICBzZXRBbmNob3JFbChudWxsKTtcclxuXHJcbiAgICAgICAgLy8gKGFzeW5jICgpOiBQcm9taXNlPHZvaWQ+ID0+IHtcclxuICAgICAgICAvLyAgIGF3YWl0IEF4aW9zLnB1dChgJHtFbmRwb2ludHMuTk9USUZJQ0FUSU9OU30vcmVhZGApO1xyXG4gICAgICAgIC8vIH0pKCk7XHJcbiAgICAgICAgLy9cclxuICAgICAgICAvLyBjb25zdCBuZXdJdGVtUmVhZCA9IG5ld0l0ZW0ubWFwKChpdGVtKSA9PiB7XHJcbiAgICAgICAgLy8gICBpZiAoaXRlbS5yZWFkQXQgPT09IG51bGwpIHtcclxuICAgICAgICAvLyAgICAgcmV0dXJuIHsgLi4uaXRlbSwgcmVhZEF0OiBuZXcgRGF0ZSgpIH07XHJcbiAgICAgICAgLy8gICB9XHJcbiAgICAgICAgLy8gICByZXR1cm4gaXRlbTtcclxuICAgICAgICAvLyB9KTtcclxuXHJcbiAgICAgICAgLy8gc2V0TmV3SXRlbShuZXdJdGVtUmVhZCk7XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ub3RpZmljYXRpb259PlxyXG4gICAgICAgICAgICAgICAgPEljb25CdXR0b24gb25DbGljaz17dG9nZ2xlT3BlblBvcHVwfT5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cIm1sLTEwIGN1cnNvci1wb2ludGVyXCIgc3JjPVwiL25vdGlmaWNhdGlvbnMuc3ZnXCIgYWx0PVwi0KPQstC10LTQvtC80LvQtdC90LjRj1wiLz5cclxuICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8UG9wb3ZlclxyXG4gICAgICAgICAgICAgICAgZWxldmF0aW9uPXswfVxyXG4gICAgICAgICAgICAgICAgY2xhc3Nlcz17e1xyXG4gICAgICAgICAgICAgICAgICAgIHBhcGVyOiBzdHlsZXMubm90aWZpY2F0aW9uUG9wdXAsXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgb25DbG9zZT17aGFuZGxlQ2xvc2V9XHJcbiAgICAgICAgICAgICAgICBhbmNob3JFbD17YW5jaG9yRWx9XHJcbiAgICAgICAgICAgICAgICBhbmNob3JPcmlnaW49e3tcclxuICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbDogJ2JvdHRvbScsXHJcbiAgICAgICAgICAgICAgICAgICAgaG9yaXpvbnRhbDogJ2xlZnQnLFxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybU9yaWdpbj17e1xyXG4gICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsOiAndG9wJyxcclxuICAgICAgICAgICAgICAgICAgICBob3Jpem9udGFsOiAnY2VudGVyJyxcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICBvcGVuPXtvcGVufVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBsLTI1IHByLTI1IHBiLTI1XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9IHZhcmlhbnQ9XCJvdmVybGluZVwiIGRpc3BsYXk9XCJibG9ja1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YiBjbGFzc05hbWU9XCJvcGFjaXR5LTZcIj7Qo9Cy0LXQtNC+0LzQu9C10L3QuNGPPC9iPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ub3RpZmljYXRpb25MaXN0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpc3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bm90aWZpY2F0aW9ucy5sZW5ndGggPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm90aWZpY2F0aW9ucy5tYXAoKG5vdGlmaWNhdGlvbikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17bm90aWZpY2F0aW9uLmlkfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJdGVtIGl0ZW09e25vdGlmaWNhdGlvbn0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi00MCBtdC0zMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBOT1QgRk9VTkRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGlzdD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L1BvcG92ZXI+XHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG59O1xyXG4iLCJpbXBvcnQge0F2YXRhcn0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vTm90aWZpY2F0aW9uRHJvcGRvd24ubW9kdWxlLnNjc3NcIjtcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge0NvbW1lbnQsIExpa2VhYmxlLCBOb3RpZmljYXRpb24sIFBvc3REYXRhfSBmcm9tIFwiLi4vLi4vaW50ZXJmYWNlc1wiO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5cclxudHlwZSBQcm9wcyA9IHtcclxuICAgIGl0ZW06IE5vdGlmaWNhdGlvbjxMaWtlYWJsZSB8IFBvc3REYXRhIHwgQ29tbWVudD4sXHJcbn1cclxuXHJcbmNvbnN0IEFkZENvbW1lbnRJdGVtID0gKHtub3RpZmljYXRpb259OiB7IG5vdGlmaWNhdGlvbjogTm90aWZpY2F0aW9uPENvbW1lbnQ+IH0pID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pdGVtfT5cclxuICAgICAgICAgICAgPEF2YXRhciBhbHQ9eydVc2VyJ30gc3JjPXtub3RpZmljYXRpb24uZGF0YT8udXNlcj8uYXZhdGFyfSBjbGFzc05hbWU9e3N0eWxlcy5hdmF0YXJ9Lz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5saXN0Q29udGVudH0+XHJcbiAgICAgICAgICAgICAgICA8Yj57bm90aWZpY2F0aW9uLmRhdGEudXNlci5uYW1lfTwvYj4g0L3QsNC/0LjRgdCw0Lsg0LrQvtC80LzQtdC90YLQsNGA0LjQuSDQuiDQt9Cw0L/QuNGB0LgmbmJzcDtcclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9eycjJ30+XHJcbiAgICAgICAgICAgICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIOKAnHtub3RpZmljYXRpb24uZGF0YS5wb3N0LnRpdGxlfeKAnVxyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmNvbnN0IFNldExpa2VPckRpc2xpa2VJdGVtID0gKHtub3RpZmljYXRpb259OiB7IG5vdGlmaWNhdGlvbjogTm90aWZpY2F0aW9uPExpa2VhYmxlPiB9KSA9PiB7XHJcbiAgICBjb25zdCBpc0xpa2UgPSBub3RpZmljYXRpb24uZGF0YS50eXBlID09PSAnbGlrZSdcclxuXHJcbiAgICBpZiAobm90aWZpY2F0aW9uLmRhdGEubGlrZWFibGVfdHlwZS5pbmNsdWRlcygnQ29tbWVudCcpKSB7XHJcbiAgICAgICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaXRlbX0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubGlrZUJsb2NrfT5cclxuICAgICAgICAgICAgICAgIDxBdmF0YXIgYWx0PXsnVXNlcid9IHNyYz17bm90aWZpY2F0aW9uLmRhdGE/LnVzZXI/LmF2YXRhcn0gY2xhc3NOYW1lPXtzdHlsZXMuYXZhdGFyfS8+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz17aXNMaWtlID8gJy9saWtlLnN2ZycgOiAnL2Rpc2xpa2Uuc3ZnJ30gLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubGlzdENvbnRlbnR9PlxyXG4gICAgICAgICAgICAgICAgPGI+e25vdGlmaWNhdGlvbi5kYXRhLnVzZXIubmFtZX08L2I+INC/0L7RgdGC0LDQstC40Lsge2lzTGlrZSA/ICfQu9Cw0LnQuicgOiAn0LTQuNC30LvQsNC50LonfSDQvdCwINC60L7QvNC10L3RgtCw0YDQuNC5Jm5ic3A7XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPXsnIyd9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICDigJx7bm90aWZpY2F0aW9uLmRhdGEuY29tbWVudC50ZXh0feKAnVxyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLml0ZW19PlxyXG4gICAgICAgICAgICA8QXZhdGFyIGFsdD17J1VzZXInfSBzcmM9e25vdGlmaWNhdGlvbi5kYXRhPy51c2VyPy5hdmF0YXJ9IGNsYXNzTmFtZT17c3R5bGVzLmF2YXRhcn0vPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxpc3RDb250ZW50fT5cclxuICAgICAgICAgICAgICAgIDxiPntub3RpZmljYXRpb24uZGF0YS51c2VyLm5hbWV9PC9iPiDQv9C+0YHRgtCw0LLQuNC7IHtpc0xpa2UgPyAn0LvQsNC50LonIDogJ9C00LjQt9C70LDQudC6J30g0L3QsCDQt9Cw0L/QuNGB0YwmbmJzcDtcclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9eycjJ30+XHJcbiAgICAgICAgICAgICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIOKAnHtub3RpZmljYXRpb24uZGF0YS5wb3N0LnRpdGxlfeKAnVxyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJdGVtKHtpdGVtfTogUHJvcHMpIHtcclxuXHJcbiAgICBpZiAoaXRlbS50eXBlLmluY2x1ZGVzKCdBZGRDb21tZW50Tm90aWZpY2F0aW9uJykpIHtcclxuICAgICAgICByZXR1cm4gPEFkZENvbW1lbnRJdGVtIG5vdGlmaWNhdGlvbj17aXRlbSBhcyBOb3RpZmljYXRpb248Q29tbWVudD59Lz5cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gPFNldExpa2VPckRpc2xpa2VJdGVtIG5vdGlmaWNhdGlvbj17aXRlbSBhcyBOb3RpZmljYXRpb248TGlrZWFibGU+fS8+XHJcbn1cclxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwidGltZVwiOiBcIlBhc3RUaW1lTGFiZWxfdGltZV9fUnVqS0FcIixcblx0XCJ0aW1lV2l0aExlZnRTaWRlUG9pbnRcIjogXCJQYXN0VGltZUxhYmVsX3RpbWVXaXRoTGVmdFNpZGVQb2ludF9fMjB3eXhcIlxufTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9QYXN0VGltZUxhYmVsLm1vZHVsZS5zY3NzJztcclxuaW1wb3J0IHsgZm9ybWF0RGlzdGFuY2VUb05vdyB9IGZyb20gJ2RhdGUtZm5zJztcclxuaW1wb3J0IHsgcnUgfSBmcm9tICdkYXRlLWZucy9sb2NhbGUnO1xyXG5pbXBvcnQgY2xzeCBmcm9tICdjbHN4JztcclxuXHJcbmludGVyZmFjZSBQYXN0VGltZUxhYmVsUHJvcHMge1xyXG4gIHRpbWU6IG51bWJlcjtcclxuICBsZWZ0U2lkZVBvaW50PzogYm9vbGVhbjtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFBhc3RUaW1lTGFiZWw6IFJlYWN0LkZDPFBhc3RUaW1lTGFiZWxQcm9wcz4gPSAoeyB0aW1lLCBsZWZ0U2lkZVBvaW50IH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPHNwYW4gY2xhc3NOYW1lPXtjbHN4KHN0eWxlcy50aW1lLCB7W3N0eWxlcy50aW1lV2l0aExlZnRTaWRlUG9pbnRdOiBsZWZ0U2lkZVBvaW50fSl9PlxyXG4gICAgICB7Zm9ybWF0RGlzdGFuY2VUb05vdyh0aW1lLCB7IGxvY2FsZTogcnUsIGFkZFN1ZmZpeDogdHJ1ZSB9KX1cclxuICAgIDwvc3Bhbj5cclxuICApO1xyXG59O1xyXG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJwb3BvdmVyXCI6IFwiUHJvZmlsZVBvcHVwX3BvcG92ZXJfXzJ1YUFXXCIsXG5cdFwicGFwZXJcIjogXCJQcm9maWxlUG9wdXBfcGFwZXJfXzFFMnh0XCIsXG5cdFwic2VjdGlvbjFcIjogXCJQcm9maWxlUG9wdXBfc2VjdGlvbjFfXzJyV3MxXCIsXG5cdFwic2VjdGlvbjJcIjogXCJQcm9maWxlUG9wdXBfc2VjdGlvbjJfXzNYOEhoXCIsXG5cdFwiZGl2aWRlclwiOiBcIlByb2ZpbGVQb3B1cF9kaXZpZGVyX18yWUprN1wiLFxuXHRcImF2YXRhclwiOiBcIlByb2ZpbGVQb3B1cF9hdmF0YXJfXzFyYWhFXCIsXG5cdFwibmFtZVwiOiBcIlByb2ZpbGVQb3B1cF9uYW1lX19ub3UwbFwiLFxuXHRcImxvZ2luXCI6IFwiUHJvZmlsZVBvcHVwX2xvZ2luX18zMWZBZlwiXG59O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgUG9wb3ZlciwgQXZhdGFyLCBEaXZpZGVyIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vUHJvZmlsZVBvcHVwLm1vZHVsZS5zY3NzJztcclxuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCB7VXNlcn0gZnJvbSBcIi4uLy4uL2ludGVyZmFjZXNcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUG9maWxlUG9wdXBQcm9wcyB7XHJcbiAgb25DbGljaz86ICgpID0+IHZvaWQ7XHJcbiAgdXNlcjogVXNlcjtcclxufVxyXG5cclxuY29uc3QgUHJvZmlsZVBvcHVwOiBSZWFjdC5GQzxQb2ZpbGVQb3B1cFByb3BzPiA9ICh7IHVzZXIsIG9uQ2xpY2sgfSkgPT4ge1xyXG4gIGNvbnN0IFthbmNob3JFbCwgc2V0QW5jaG9yRWxdID0gUmVhY3QudXNlU3RhdGU8SFRNTERpdkVsZW1lbnQgfCBudWxsPihudWxsKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoZXZlbnQ6IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTERpdkVsZW1lbnQ+KSA9PiB7XHJcbiAgICBpZiAob25DbGljaykge1xyXG4gICAgICBvbkNsaWNrKCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0QW5jaG9yRWwoZXZlbnQuY3VycmVudFRhcmdldCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2xvc2UgPSAoKSA9PiB7XHJcbiAgICBzZXRBbmNob3JFbChudWxsKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBvcGVuID0gQm9vbGVhbihhbmNob3JFbCk7XHJcblxyXG4gIGNvbnN0IG9uTG9nb3V0ID0gKCkgPT4ge1xyXG4gICAgaWYgKHdpbmRvdz8uY29uZmlybSgn0JLRiyDQtNC10LnRgdGC0LLQuNGC0LXQu9GM0L3QviDRhdC+0YLQuNGC0LUg0L/QvtC60LjQvdGD0YLRjCDRgdCw0LnRgiA/JykpIHtcclxuICAgICAgZG9jdW1lbnQuY29va2llID0gJ2F1dGhfdG9rZW4nICsgJz07IE1heC1BZ2U9MCc7XHJcbiAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCd0b2tlbicpO1xyXG4gICAgICBsb2NhdGlvbi5ocmVmID0gJy8nO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxBdmF0YXIgY2xhc3NOYW1lPXtjbHN4KCdjdXJzb3ItcG9pbnRlcicsIHN0eWxlcy5yb290KX0gYWx0PXt1c2VyPy5uYW1lfSBzcmM9e3VzZXI/LmF2YXRhcn0gb25DbGljaz17aGFuZGxlQ2xpY2t9IC8+XHJcbiAgICAgIHt1c2VyPy5pZCAmJiAoXHJcbiAgICAgICAgICA8UG9wb3ZlclxyXG4gICAgICAgICAgICAgIG9wZW49e29wZW59XHJcbiAgICAgICAgICAgICAgYW5jaG9yRWw9e2FuY2hvckVsfVxyXG4gICAgICAgICAgICAgIG9uQ2xvc2U9e2hhbmRsZUNsb3NlfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnBvcG92ZXJ9XHJcbiAgICAgICAgICAgICAgY2xhc3Nlcz17e1xyXG4gICAgICAgICAgICAgICAgcm9vdDogc3R5bGVzLnJvb3QsXHJcbiAgICAgICAgICAgICAgICBwYXBlcjogc3R5bGVzLnBhcGVyLFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgYW5jaG9yT3JpZ2luPXt7XHJcbiAgICAgICAgICAgICAgICB2ZXJ0aWNhbDogJ2JvdHRvbScsXHJcbiAgICAgICAgICAgICAgICBob3Jpem9udGFsOiAnY2VudGVyJyxcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgIHRyYW5zZm9ybU9yaWdpbj17e1xyXG4gICAgICAgICAgICAgICAgdmVydGljYWw6ICd0b3AnLFxyXG4gICAgICAgICAgICAgICAgaG9yaXpvbnRhbDogJ2NlbnRlcicsXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Nsc3goc3R5bGVzLnNlY3Rpb24xLCAnZC1mbGV4Jyl9PlxyXG4gICAgICAgICAgICAgIDxBdmF0YXIgYWx0PXt1c2VyLm5hbWV9IHNyYz17dXNlci5hdmF0YXJ9IGNsYXNzTmFtZT17c3R5bGVzLmF2YXRhcn0gLz5cclxuICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtzdHlsZXMubmFtZX0+e3VzZXIubmFtZX08L2E+XHJcbiAgICAgICAgICAgICAgICB7Lyo8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxvZ2lufT57dXNlci5sb2dpbn08L2Rpdj4qL31cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxEaXZpZGVyIGNsYXNzZXM9e3sgcm9vdDogc3R5bGVzLmRpdmlkZXIgfX0gLz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Nsc3goc3R5bGVzLnNlY3Rpb24yLCAnZC1mbGV4IGZsZXgtY29sdW1uJyl9PlxyXG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvcHJvZmlsZS8ke3VzZXIuaWR9P3R5cGU9YXJ0aWNsZXNgfT48YSBjbGFzc05hbWU9XCJtYi0zXCI+0KHRgtCw0YLRjNC4PC9hPjwvTGluaz5cclxuICAgICAgICAgICAgICA8TGluayBocmVmPXtgL3Byb2ZpbGUvJHt1c2VyLmlkfT90eXBlPWRyYWZ0c2B9PjxhIGNsYXNzTmFtZT1cIm1iLTNcIj7Qp9C10YDQvdC+0LLQuNC60Lg8L2E+PC9MaW5rPlxyXG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9eycvcHJvZmlsZSd9PjxhIGNsYXNzTmFtZT1cIm1iLTNcIj7QndCw0YHRgtGA0L7QudC60Lg8L2E+PC9MaW5rPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPERpdmlkZXIgY2xhc3Nlcz17eyByb290OiBzdHlsZXMuZGl2aWRlciB9fSAvPlxyXG4gICAgICAgICAgICA8YSBvbkNsaWNrPXtvbkxvZ291dH0gY2xhc3NOYW1lPXtjbHN4KHN0eWxlcy5zZWN0aW9uMiwgJ2QtZmxleCBmbGV4LWNvbHVtbicpfT7QktGL0LnRgtC4PC9hPlxyXG4gICAgICAgICAgPC9Qb3BvdmVyPlxyXG4gICAgICApfVxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2ZpbGVQb3B1cDtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEF2YXRhciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9BdmF0YXInO1xyXG5pbXBvcnQgQ29sbGFwc2UgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ29sbGFwc2UnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vU2VhcmNoUG9wdXAubW9kdWxlLnNjc3MnO1xyXG5pbXBvcnQgeyBEaXZpZGVyIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCB7dXNlUm91dGVyfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuXHJcbmludGVyZmFjZSBJdGVtUHJvcHMge1xyXG4gIHRpdGxlOiBzdHJpbmc7XHJcbiAgZGF0YTogQXJyYXk8e1xyXG4gICAgICBuYW1lOiBzdHJpbmc7XHJcbiAgICAgIGxpbms6IHN0cmluZztcclxuICAgICAgaWQ6IG51bWJlciB8IHN0cmluZztcclxuICB9PjtcclxuICBvbkNsb3NlOiAoKSA9PiB2b2lkXHJcbn1cclxuXHJcbmNvbnN0IEl0ZW06IFJlYWN0LkZDPEl0ZW1Qcm9wcz4gPSAocCkgPT4ge1xyXG4gIGNvbnN0IFtvcGVuLCBzZXRPcGVuXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChwLnRpdGxlID09PSAn0JDQstGC0L7RgNGLJyB8fCBwLnRpdGxlID09PSAn0J/Rg9Cx0LvQuNC60LDRhtC40LgnKSB7XHJcbiAgICAgIHNldE9wZW4odHJ1ZSk7XHJcbiAgICB9XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBoYW5kbGVDbGljayA9ICgpID0+IHtcclxuICAgIHNldE9wZW4oIW9wZW4pO1xyXG4gIH07XHJcblxyXG4gIGlmIChwLnRpdGxlID09PSAn0JDQstGC0L7RgNGLJyAmJiBwLmRhdGEubGVuZ3RoID4gMCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPD5cclxuICAgICAgICA8ZGl2IG9uQ2xpY2s9e2hhbmRsZUNsaWNrfSBjbGFzc05hbWU9e3N0eWxlcy5zZWFyY2hUaXRsZUlubmVyfT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2VhcmNoVGl0bGV9PlxyXG4gICAgICAgICAgICB7cC50aXRsZX0gKHtwLmRhdGEubGVuZ3RofSlcclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAge3AuZGF0YS5sZW5ndGggPiAzICYmIChcclxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtzdHlsZXMuc2hvd0FsbH0gb25DbGljaz17KGUpID0+IGUuc3RvcFByb3BhZ2F0aW9uKCl9PlxyXG4gICAgICAgICAgICAgINCf0L7QutCw0LfQsNGC0Ywg0LLRgdC1XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPERpdmlkZXIgY2xhc3Nlcz17eyByb290OiBzdHlsZXMuZGl2aWRlciB9fSAvPlxyXG4gICAgICAgIDxDb2xsYXBzZSBpbj17b3Blbn0gdGltZW91dD1cImF1dG9cIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2VhcmNoSXRlbXN9PlxyXG4gICAgICAgICAgICB7cC5kYXRhLnNsaWNlKDAsIDMpLm1hcCgoZWwsIGtleSkgPT4gKFxyXG4gICAgICAgICAgICAgIDxkaXYgb25DbGljaz17IGFzeW5jICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgYXdhaXQgcm91dGVyLnB1c2goZWwubGluaylcclxuICAgICAgICAgICAgICAgICAgcC5vbkNsb3NlKClcclxuICAgICAgICAgICAgICB9fSBrZXk9e2Ake3AudGl0bGV9LSR7a2V5fWB9IGNsYXNzTmFtZT17c3R5bGVzLnNlYXJjaEl0ZW19PlxyXG4gICAgICAgICAgICAgICAgPEF2YXRhciBjbGFzc05hbWU9XCJtci0xMFwiIC8+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PntlbC5uYW1lfTwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvQ29sbGFwc2U+XHJcbiAgICAgIDwvPlxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIGlmIChwLnRpdGxlICE9PSAn0JDQstGC0L7RgNGLJyAmJiBwLmRhdGEubGVuZ3RoID4gMCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPD5cclxuICAgICAgICA8ZGl2IG9uQ2xpY2s9e2hhbmRsZUNsaWNrfSBjbGFzc05hbWU9e3N0eWxlcy5zZWFyY2hUaXRsZUlubmVyfT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2VhcmNoVGl0bGV9PlxyXG4gICAgICAgICAgICB7cC50aXRsZX0gKHtwLmRhdGEubGVuZ3RofSlcclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAge3AuZGF0YS5sZW5ndGggPiAzICYmIChcclxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtzdHlsZXMuc2hvd0FsbH0gb25DbGljaz17KGUpID0+IGUuc3RvcFByb3BhZ2F0aW9uKCl9PlxyXG4gICAgICAgICAgICAgINCf0L7QutCw0LfQsNGC0Ywg0LLRgdC1XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPERpdmlkZXIgY2xhc3Nlcz17eyByb290OiBzdHlsZXMuZGl2aWRlciB9fSAvPlxyXG4gICAgICAgIDxDb2xsYXBzZSBpbj17b3Blbn0gdGltZW91dD1cImF1dG9cIiBkaXNhYmxlU3RyaWN0TW9kZUNvbXBhdD5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2VhcmNoSXRlbXN9PlxyXG4gICAgICAgICAgICB7cC5kYXRhLnNsaWNlKDAsIDMpLm1hcCgoZWwsIGtleSkgPT4gKFxyXG4gICAgICAgICAgICAgIDxkaXYga2V5PXtgJHtwLnRpdGxlfS0ke2tleX1gfSBjbGFzc05hbWU9e3N0eWxlcy5zZWFyY2hJdGVtfT5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2VsLmxpbmt9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIG9uQ2xpY2s9eygpID0+IHAub25DbG9zZSgpfT57ZWwubmFtZX08L2E+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9Db2xsYXBzZT5cclxuICAgICAgPC8+XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIG51bGw7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJdGVtO1xyXG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjb250YWluZXJcIjogXCJTZWFyY2hQb3B1cF9jb250YWluZXJfXzJ1LXZqXCIsXG5cdFwiYm9keVwiOiBcIlNlYXJjaFBvcHVwX2JvZHlfXzFGNk40XCIsXG5cdFwiZGl2aWRlclwiOiBcIlNlYXJjaFBvcHVwX2RpdmlkZXJfXzJMUGI4XCIsXG5cdFwic2VhcmNoVGl0bGVcIjogXCJTZWFyY2hQb3B1cF9zZWFyY2hUaXRsZV9fMjZNRkRcIixcblx0XCJzZWFyY2hUaXRsZUlubmVyXCI6IFwiU2VhcmNoUG9wdXBfc2VhcmNoVGl0bGVJbm5lcl9fM3dTaTJcIixcblx0XCJzZWFyY2hJdGVtc1wiOiBcIlNlYXJjaFBvcHVwX3NlYXJjaEl0ZW1zX18zSkw1dVwiLFxuXHRcInNlYXJjaEl0ZW1cIjogXCJTZWFyY2hQb3B1cF9zZWFyY2hJdGVtX18yQ1Vhc1wiLFxuXHRcInNob3dBbGxcIjogXCJTZWFyY2hQb3B1cF9zaG93QWxsX18yaHk2Q1wiLFxuXHRcImZvb3RlclwiOiBcIlNlYXJjaFBvcHVwX2Zvb3Rlcl9fTVluOEtcIlxufTtcbiIsImltcG9ydCBSZWFjdCwge3VzZVN0YXRlfSBmcm9tICdyZWFjdCc7XHJcblxyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vU2VhcmNoUG9wdXAubW9kdWxlLnNjc3MnO1xyXG5pbXBvcnQgSXRlbSBmcm9tICcuL0l0ZW0nO1xyXG5pbXBvcnQge2dldFNwZWNpYWxpc3RzfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvYXBpL1NwZWNpYWxpc3RzQXBpXCI7XHJcbmltcG9ydCB7Q29tbWVudCwgUG9zdERhdGEsIFRoZW1lLCBVc2VyfSBmcm9tIFwiLi4vLi4vaW50ZXJmYWNlc1wiO1xyXG5pbXBvcnQge3VzZVNlbGVjdG9yfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHtzZWxlY3RUaGVtZXNTdGF0ZX0gZnJvbSBcIi4uLy4uL3JlZHV4L2RpcmVjdG9yeS9kaXJlY3Rvcnkuc2VsZWN0b3JcIjtcclxuaW1wb3J0IHtDb21tZW50QXBpfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvYXBpL0NvbW1lbnRBcGlcIjtcclxuaW1wb3J0IHtnZXRQb3N0c30gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2FwaS9Qb3N0QXBpXCI7XHJcblxyXG5pbnRlcmZhY2UgU2VhcmNoUG9wdXBQcm9wcyB7XHJcbiAgICBpc1NlYXJjaDogYm9vbGVhbjtcclxuICAgIHNlYXJjaElucHV0OiBzdHJpbmc7XHJcbiAgICBoYW5kbGVDbGljazogKCkgPT4gdm9pZFxyXG5cclxufVxyXG5cclxuY29uc3QgU2VhcmNoUG9wdXA6IFJlYWN0LkZDPFNlYXJjaFBvcHVwUHJvcHM+ID0gKHtpc1NlYXJjaCwgc2VhcmNoSW5wdXQsIGhhbmRsZUNsaWNrfSkgPT4ge1xyXG4gICAgY29uc3QgW2F1dGhvcnMsIHNldEF1dGhvcnNdID0gdXNlU3RhdGU8VXNlcltdPihbXSlcclxuICAgIGNvbnN0IFtwb3N0cywgc2V0UG9zdHNdID0gdXNlU3RhdGU8UG9zdERhdGFbXT4oW10pXHJcbiAgICBjb25zdCBbY29tbWVudHMsIHNldENvbW1lbnRzXSA9IHVzZVN0YXRlPENvbW1lbnRbXT4oW10pXHJcbiAgICBjb25zdCB0aGVtZXMgPSB1c2VTZWxlY3RvcihzZWxlY3RUaGVtZXNTdGF0ZSkuZmlsdGVyKHRoZW1lID0+IHRoZW1lLm5hbWUuaW5jbHVkZXMoc2VhcmNoSW5wdXQpKTtcclxuXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmIChzZWFyY2hJbnB1dC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgZ2V0U3BlY2lhbGlzdHMoe25hbWU6IHNlYXJjaElucHV0fSkudGhlbih1c2VycyA9PiB7XHJcbiAgICAgICAgICAgICAgICBzZXRBdXRob3JzKHVzZXJzLmRhdGEpXHJcbiAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICBDb21tZW50QXBpLmdldCh7dGV4dDogc2VhcmNoSW5wdXR9KS50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgIHNldENvbW1lbnRzKHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBnZXRQb3N0cyh7dGl0bGU6IHNlYXJjaElucHV0fSkudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBzZXRQb3N0cyhyZXNwb25zZS5kYXRhKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgIH0sIFtzZWFyY2hJbnB1dF0pXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYm9keX0+XHJcbiAgICAgICAgICAgICAgICA8SXRlbSB0aXRsZT1cItCQ0LLRgtC+0YDRi1wiIGRhdGE9e2F1dGhvcnMubWFwKHVzZXIgPT4gKHtcclxuICAgICAgICAgICAgICAgICAgICBpZDogdXNlci5pZCxcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiB1c2VyLm5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgbGluazogYC9wcm9maWxlLyR7dXNlci5pZH1gXHJcbiAgICAgICAgICAgICAgICB9KSl9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DbG9zZT17aGFuZGxlQ2xpY2t9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPEl0ZW0gdGl0bGU9XCLQn9GD0LHQu9C40LrQsNGG0LjQuFwiIGRhdGE9e3Bvc3RzLm1hcChwb3N0ID0+ICh7XHJcbiAgICAgICAgICAgICAgICAgICAgaWQ6IHBvc3QuaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogcG9zdC50aXRsZSxcclxuICAgICAgICAgICAgICAgICAgICBsaW5rOiBgL3Bvc3QvJHtwb3N0LnNsdWd9YFxyXG4gICAgICAgICAgICAgICAgfSkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DbG9zZT17aGFuZGxlQ2xpY2t9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPEl0ZW0gdGl0bGU9XCLQotGN0LPQuFwiIGRhdGE9e1xyXG4gICAgICAgICAgICAgICAgICAgICFzZWFyY2hJbnB1dC5sZW5ndGggPyBbXSA6IHRoZW1lcy5tYXAodGhlbWUgPT4gKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IHRoZW1lLmlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiB0aGVtZS5uYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5rOiAnL3RoZW1lcydcclxuICAgICAgICAgICAgICAgICAgICB9KSl9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DbG9zZT17aGFuZGxlQ2xpY2t9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPEl0ZW0gdGl0bGU9XCLQmtC+0LzQtdC90YLQsNGA0LjQuFwiIGRhdGE9e2NvbW1lbnRzLm1hcChjb21tZW50ID0+ICh7XHJcbiAgICAgICAgICAgICAgICAgICAgaWQ6IGNvbW1lbnQuaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogY29tbWVudC50ZXh0LFxyXG4gICAgICAgICAgICAgICAgICAgIGxpbms6IGAvcG9zdC8ke2NvbW1lbnQucG9zdC5zbHVnfWBcclxuICAgICAgICAgICAgICAgIH0pKX1cclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xvc2U9e2hhbmRsZUNsaWNrfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIHsvKjxJdGVtIHRpdGxlPVwi0JDQstGC0L7RgNGLXCIgZGF0YT17c2VhcmNoRGF0YS5wb2RjYXN0c30vPiovfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mb290ZXJ9PlxyXG4gICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJtci0xMFwiIHNyYz1cIi9hcnJvdy1saW5rLnN2Z1wiIGFsdD1cItCf0L7QuNGB0LpcIi8+XHJcbiAgICAgICAgICAgICAgICA8YT7Qn9C+0LrQsNC30LDRgtGMINCy0YHQtSDRgNC10LfRg9C70YzRgtCw0YLRiyDQv9C+INC30LDQv9GA0L7RgdGDIOKAnHtzZWFyY2hJbnB1dH3igJ08L2E+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNlYXJjaFBvcHVwO1xyXG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJibG9ja1wiOiBcIlNpZGVCbG9ja19ibG9ja19fMWJhYlVcIlxufTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9TaWRlQmxvY2subW9kdWxlLnNjc3MnO1xyXG5cclxudHlwZSBTaWRlQmxvY2tQcm9wcyA9IHsgbmFtZT86IHN0cmluZyB9O1xyXG5cclxuZXhwb3J0IGNvbnN0IFNpZGVCbG9jazogUmVhY3QuRkM8U2lkZUJsb2NrUHJvcHM+ID0gKHsgbmFtZSwgY2hpbGRyZW4gfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJsb2NrfT5cclxuICAgICAge25hbWUgJiYgPGg0PntuYW1lfTwvaDQ+fVxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJ0YWdcIjogXCJUYWdzX3RhZ19fMTI4T0tcIixcblx0XCJidG5cIjogXCJUYWdzX2J0bl9fenhXTVFcIixcblx0XCJhY3RpdmVcIjogXCJUYWdzX2FjdGl2ZV9fMTU4Y19cIlxufTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcblxyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vVGFncy5tb2R1bGUuc2Nzcyc7XHJcbmltcG9ydCB7VGhlbWV9IGZyb20gXCIuLi8uLi9pbnRlcmZhY2VzXCI7XHJcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJy4uL0J1dHRvbic7XHJcbmltcG9ydCBjbHN4IGZyb20gXCJjbHN4XCI7XHJcblxyXG50eXBlIFRhZ0l0ZW0gPSB7IHRoZW1lOiBUaGVtZSwgb25DbGljaz86ICh0OiBUaGVtZSkgPT4gdm9pZCwgaXNBY3RpdmU6IGJvb2xlYW59O1xyXG5cclxuY29uc3QgVGFnOiBSZWFjdC5GQzxUYWdJdGVtPiA9ICh7IHRoZW1lLCBvbkNsaWNrLCBpc0FjdGl2ZSB9KSA9PiAoXHJcbiAgPExpbmsgaHJlZj17dGhlbWUubmFtZX0+XHJcbiAgICA8YSBvbkNsaWNrPXsoKSA9PiBvbkNsaWNrKHRoZW1lKX0gY2xhc3NOYW1lPXtzdHlsZXMudGFnfT5cclxuICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT17Y2xzeChzdHlsZXMuYnRuLCBpc0FjdGl2ZSA/IHN0eWxlcy5hY3RpdmUgOiAnJyl9IHZhcmlhbnQ9e2lzQWN0aXZlID8gJ3RleHQnIDogJ3RleHQnfT5cclxuICAgICAgICAgICAge3RoZW1lLm5hbWV9XHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICA8L2E+XHJcbiAgPC9MaW5rPlxyXG4pO1xyXG5cclxuZXhwb3J0IGNvbnN0IFRhZ3M6IFJlYWN0LkZDPHsgaXRlbXM6IFRoZW1lW10sIHNlbGVjdGVkSXRlbXM6IFRoZW1lW10sIGhhbmRsZVNlbGVjdDogKHQ6IFRoZW1lKSA9PiB2b2lkIH0+ID0gKHsgaXRlbXMsIGhhbmRsZVNlbGVjdCwgc2VsZWN0ZWRJdGVtcyB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIHtpdGVtcy5tYXAoKG9iaikgPT4gKFxyXG4gICAgICAgIDxUYWcga2V5PXtvYmoubmFtZX0gdGhlbWU9e29ian0gb25DbGljaz17aGFuZGxlU2VsZWN0fSBpc0FjdGl2ZT17ISFzZWxlY3RlZEl0ZW1zPy5maW5kKHQgPT4gK3QuaWQgPT09ICtvYmouaWQpfSAvPlxyXG4gICAgICApKX1cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcInVzZXJcIjogXCJVc2VyVmlld09uQ29udGVudF91c2VyX19zaFdtbVwiLFxuXHRcInVzZXJfYXZhdGFyXCI6IFwiVXNlclZpZXdPbkNvbnRlbnRfdXNlcl9hdmF0YXJfX19BUVZGXCIsXG5cdFwidXNlcl9hdmF0YXJfd2l0aF90aW1lXCI6IFwiVXNlclZpZXdPbkNvbnRlbnRfdXNlcl9hdmF0YXJfd2l0aF90aW1lX18xQ3hLVVwiLFxuXHRcInVzZXJfaW5mb1wiOiBcIlVzZXJWaWV3T25Db250ZW50X3VzZXJfaW5mb19fMXZZMmtcIixcblx0XCJ1c2VyX2luZm9fd2l0aF90aW1lXCI6IFwiVXNlclZpZXdPbkNvbnRlbnRfdXNlcl9pbmZvX3dpdGhfdGltZV9fM3BlQkpcIixcblx0XCJ1c2VyX25hbWVcIjogXCJVc2VyVmlld09uQ29udGVudF91c2VyX25hbWVfXzF4dVoxXCJcbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vVXNlclZpZXdPbkNvbnRlbnQubW9kdWxlLnNjc3MnO1xyXG5pbXBvcnQgY2xzeCBmcm9tICdjbHN4JztcclxuaW1wb3J0IHsgUGFzdFRpbWVMYWJlbCB9IGZyb20gJy4uL1Bhc3RUaW1lTGFiZWwnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgeyBQb3BvdmVyLCBBdmF0YXIsIERpdmlkZXIgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFVzZXJWaWV3T25Db250ZW50UHJvcHMge1xyXG4gIHVzZXI6IHtcclxuICAgIGlkOiBudW1iZXI7XHJcbiAgICBuYW1lOiBzdHJpbmc7XHJcbiAgICBhdmF0YXJVcmw6IHN0cmluZztcclxuICB9O1xyXG4gIHRpbWU/OiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBVc2VyVmlld09uQ29udGVudDogUmVhY3QuRkM8VXNlclZpZXdPbkNvbnRlbnRQcm9wcz4gPSAoeyB1c2VyLCB0aW1lIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPExpbmsgaHJlZj17YC9wcm9maWxlLyR7dXNlci5pZH1gfT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy51c2VyfT5cclxuICAgICAgICB7dXNlci5hdmF0YXJVcmw/Lmxlbmd0aCAmJiA8aW1nXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xzeChzdHlsZXMudXNlcl9hdmF0YXIsIHRpbWUgPyBzdHlsZXMudXNlcl9hdmF0YXJfd2l0aF90aW1lIDogJycpfVxyXG4gICAgICAgICAgICBzcmM9e3VzZXIuYXZhdGFyVXJsfVxyXG4gICAgICAgICAgICBhbHQ9XCLQkNCy0LDRgtCw0YAg0L/QvtC70YzQt9Cy0L7QsNGC0LXQu9GPXCJcclxuICAgICAgICAvPn1cclxuXHJcbiAgICAgICAgeyF1c2VyLmF2YXRhclVybD8ubGVuZ3RoICYmIDxBdmF0YXIgc3R5bGU9e3t3aWR0aDogMjIsIGhlaWdodDogMjIsIG1hcmdpblJpZ2h0OiA2fX0gLz59XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbHN4KHN0eWxlcy51c2VyX2luZm8sIHRpbWUgPyBzdHlsZXMudXNlcl9pbmZvX3dpdGhfdGltZSA6ICcnKX0+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy51c2VyX25hbWV9Pnt1c2VyLm5hbWV9PC9zcGFuPlxyXG4gICAgICAgICAge3RpbWUgPyA8UGFzdFRpbWVMYWJlbCB0aW1lPXt0aW1lfSAvPiA6IG51bGx9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9MaW5rPlxyXG4gICk7XHJcbn07XHJcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcInZpZXdzQW5kQ29tbWVudHNcIjogXCJWaWV3c0FuZENvbW1lbnRzX3ZpZXdzQW5kQ29tbWVudHNfXzN4dllvXCIsXG5cdFwiY291bnRcIjogXCJWaWV3c0FuZENvbW1lbnRzX2NvdW50X18xdzA2ZFwiLFxuXHRcImljb25cIjogXCJWaWV3c0FuZENvbW1lbnRzX2ljb25fXzJjMHRNXCJcbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgY2xzeCBmcm9tICdjbHN4JztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL1ZpZXdzQW5kQ29tbWVudHMubW9kdWxlLnNjc3MnO1xyXG5pbXBvcnQgeyBDb21tZW50SWNvbiB9IGZyb20gJy4uL2ljb25zL0NvbW1lbnRJY29uJztcclxuaW1wb3J0IHsgRXllSWNvbiB9IGZyb20gJy4uL2ljb25zL0V5ZUljb24nO1xyXG5cclxuaW50ZXJmYWNlIFZpZXdzQW5kQ29tbWVudHNQcm9wcyB7XHJcbiAgbW9kZTogJ21pbmknIHwgJ2Z1bGwnO1xyXG4gIGNvbW1lbnRzOiBudW1iZXI7XHJcbiAgdmlld3M6IG51bWJlcjtcclxufVxyXG5cclxuY29uc3QgZ2V0RnVsbFRpdGxlID0gKG51bTogbnVtYmVyLCBtYWluUGFydDogc3RyaW5nLCBsYXN0UGFydHM6IHN0cmluZ1tdKSA9PiB7XHJcbiAgbGV0IHRleHQgPSBtYWluUGFydDtcclxuICBjb25zdCBsYXN0RGlnaXQgPSBudW0gJSAxMDtcclxuICBjb25zdCBwcmVMYXN0RGlnaXQgPSBNYXRoLmZsb29yKG51bSAvIDEwKSAlIDEwO1xyXG4gIGlmIChsYXN0RGlnaXQgPT09IDEgJiYgcHJlTGFzdERpZ2l0ICE9PSAxKSB7XHJcbiAgICB0ZXh0ICs9IGxhc3RQYXJ0c1swXTtcclxuICB9IGVsc2UgaWYgKGxhc3REaWdpdCA+IDEgJiYgbGFzdERpZ2l0IDw9IDQgJiYgcHJlTGFzdERpZ2l0ICE9PSAxKSB7XHJcbiAgICB0ZXh0ICs9IGxhc3RQYXJ0c1sxXTtcclxuICB9IGVsc2Uge1xyXG4gICAgdGV4dCArPSBsYXN0UGFydHNbMl07XHJcbiAgfVxyXG4gIHJldHVybiBgJHtudW19ICR7dGV4dH1gO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IFZpZXdzQW5kQ29tbWVudHM6IFJlYWN0LkZDPFZpZXdzQW5kQ29tbWVudHNQcm9wcz4gPSAoeyBtb2RlLCB2aWV3cywgY29tbWVudHMgfSkgPT4ge1xyXG4gIGNvbnN0IGNvbW1lbnRzVGl0bGUgPSBtb2RlID09PSAnZnVsbCcgPyBnZXRGdWxsVGl0bGUoY29tbWVudHMsICfQutC+0LzQvNC10L3RgtCw0YAnLCBbJ9C40LknLCAn0LjRjycsICfQuNC10LInXSkgOiBgJHtjb21tZW50c31gO1xyXG4gIGNvbnN0IHZpZXdzVGl0bGUgPSBtb2RlID09PSAnZnVsbCcgPyBnZXRGdWxsVGl0bGUodmlld3MsICfQv9GA0L7RgdC80L7RgtGAJywgWycnLCAn0LAnLCAn0L7QsiddKSA6IGAke3ZpZXdzfWA7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbHN4KHN0eWxlcy52aWV3c0FuZENvbW1lbnRzLCAnZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlcicpfT5cclxuICAgICAgPENvbW1lbnRJY29uIGNsYXNzTmFtZT17c3R5bGVzLmljb259IC8+XHJcbiAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmNvdW50fT57Y29tbWVudHNUaXRsZX08L3NwYW4+XHJcbiAgICAgIDxFeWVJY29uIGNsYXNzTmFtZT17c3R5bGVzLmljb259IC8+XHJcbiAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmNvdW50fT57dmlld3NUaXRsZX08L3NwYW4+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJY29uIHtcclxuICBjbGFzc05hbWU/OiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBDb21tZW50SWNvbjogUmVhY3QuRkM8SWNvbj4gPSAoeyBjbGFzc05hbWUgfSkgPT4gKFxyXG4gIDxzdmcgY2xhc3NOYW1lPXtjbGFzc05hbWV9IHdpZHRoPVwiMTRcIiBoZWlnaHQ9XCIxM1wiIHZpZXdCb3g9XCIwIDAgMTQgMTNcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cclxuICAgIDxwYXRoXHJcbiAgICAgIGQ9XCJNMC42MDAwOTggMS44OTk5OUMwLjYwMDA5OCAxLjM0NzcxIDEuMDQ3ODEgMC44OTk5OTQgMS42MDAxIDAuODk5OTk0SDEyLjQwMDFDMTIuOTUyNCAwLjg5OTk5NCAxMy40MDAxIDEuMzQ3NzEgMTMuNDAwMSAxLjg5OTk5VjcuNzM5OTlDMTMuNDAwMSA4LjI5MjI4IDEyLjk1MjQgOC43Mzk5OSAxMi40MDAxIDguNzM5OTlIMTAuOTM4NlYxMi4xTDYuMDE1NDggOC43Mzk5OUgxLjYwMDFDMS4wNDc4MSA4LjczOTk5IDAuNjAwMDk4IDguMjkyMjggMC42MDAwOTggNy43Mzk5OVYxLjg5OTk5WlwiXHJcbiAgICAgIHN0cm9rZT1cIiM5QzlDQUFcIlxyXG4gICAgICBzdHJva2VMaW5lY2FwPVwicm91bmRcIlxyXG4gICAgICBzdHJva2VMaW5lam9pbj1cInJvdW5kXCJcclxuICAgIC8+XHJcbiAgPC9zdmc+XHJcbik7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEljb24gfSBmcm9tICcuL0NvbW1lbnRJY29uJztcclxuXHJcbmV4cG9ydCBjb25zdCBFeWVJY29uOiBSZWFjdC5GQzxJY29uPiA9ICh7IGNsYXNzTmFtZSB9KSA9PiAoXHJcbiAgPHN2ZyBjbGFzc05hbWU9e2NsYXNzTmFtZX0gd2lkdGg9XCIxNlwiIGhlaWdodD1cIjEzXCIgdmlld0JveD1cIjAgMCAxNiAxM1wiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxyXG4gICAgPHBhdGhcclxuICAgICAgZD1cIk0xNS40Nzg4IDYuNUMxNS40Nzg4IDYuNSAxMi4xMzA1IDEyLjAyMzQgOC4wMDAxNSAxMi4wMjM0QzMuODY5OCAxMi4wMjM0IDAuNTIxNDg0IDYuNSAwLjUyMTQ4NCA2LjVDMC41MjE0ODQgNi41IDMuODY5OCAwLjk3NjYzOSA4LjAwMDE1IDAuOTc2NjM5QzEyLjEzMDUgMC45NzY2MzkgMTUuNDc4OCA2LjUgMTUuNDc4OCA2LjVaXCJcclxuICAgICAgc3Ryb2tlPVwiIzlDOUNBQVwiXHJcbiAgICAvPlxyXG4gICAgPHBhdGhcclxuICAgICAgZD1cIk0xMC4xOTk4IDYuNUMxMC4xOTk4IDcuNjg1NzUgOS4yMTQ5NiA4LjY0Njk5IDguMDAwMTUgOC42NDY5OUM2Ljc4NTM0IDguNjQ2OTkgNS44MDA1NCA3LjY4NTc1IDUuODAwNTQgNi41QzUuODAwNTQgNS4zMTQyNiA2Ljc4NTM0IDQuMzUzMDIgOC4wMDAxNSA0LjM1MzAyQzkuMjE0OTYgNC4zNTMwMiAxMC4xOTk4IDUuMzE0MjYgMTAuMTk5OCA2LjVaXCJcclxuICAgICAgc3Ryb2tlPVwiIzlDOUNBQVwiXHJcbiAgICAvPlxyXG4gIDwvc3ZnPlxyXG4pO1xyXG4iLCJleHBvcnQgY29uc3QgVGh1bWJVcEljb24gPSAoeyBjbGFzc05hbWUgfSkgPT4gKFxyXG4gIDxzdmcgY2xhc3NOYW1lPXtjbGFzc05hbWV9IHdpZHRoPVwiMTlcIiBoZWlnaHQ9XCIxN1wiIHZpZXdCb3g9XCIwIDAgMTkgMTdcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cclxuICAgIDxwYXRoIGQ9XCJNNS4xNTc5NCAxNC44MzY1VjYuNjIxMDNDNS4xNTc5NCA1LjkzOTMyIDUuMzM5OTYgNS4yNjk5NyA1LjY4NTIgNC42ODIxNEw4LjQ5ODYyIDAuMjg0MTM0QzguNjAxOTkgMC4xMDgxMjQgOC43OTA4NCAyLjI1OTk2ZS0wNSA4Ljk5NDk2IDIuMjU5OTZlLTA1QzEwLjY0MTMgMi4yNTk5NmUtMDUgMTEuNzU1NiAxLjY3NzY5IDExLjExNzMgMy4xOTUyM0wxMC4wOTI2IDUuNTc5OUgxNS44Njg2QzE3LjkxODQgNS41Nzk5IDE5LjMwODEgNy42NjU5NCAxOC41MTg0IDkuNTU3NTdMMTYuMjUyNCAxNC45ODU1QzE1LjgwNiAxNi4wNTQ2IDE0Ljc2MSAxNi43NTA4IDEzLjYwMjUgMTYuNzUwOEg3LjA3MjI0QzYuMDE1IDE2Ljc1MDggNS4xNTc5NCAxNS44OTM3IDUuMTU3OTQgMTQuODM2NVpcIiAvPlxyXG4gICAgPHBhdGggZD1cIk0zLjU0NDQyIDE1LjM5NTFWNi45MzU2QzMuNTQ0NDIgNi4xODY4NiAyLjkzNzQ1IDUuNTc5OSAyLjE4ODcxIDUuNTc5OUMxLjQzOTk4IDUuNTc5OSAwLjgzMzAwOCA2LjE4Njg3IDAuODMzMDA4IDYuOTM1NlYxNS4zOTUxQzAuODMzMDA4IDE2LjE0MzggMS40Mzk5OCAxNi43NTA4IDIuMTg4NzEgMTYuNzUwOEMyLjkzNzQ1IDE2Ljc1MDggMy41NDQ0MiAxNi4xNDM4IDMuNTQ0NDIgMTUuMzk1MVpcIiAvPlxyXG4gIDwvc3ZnPlxyXG4pO1xyXG4iLCJpbXBvcnQgQXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFQSV9VUkwgPSAnaHR0cDovL2xvY2FsaG9zdCc7XHJcblxyXG5jb25zdCBpbnN0YW5jZSA9IEF4aW9zLmNyZWF0ZSh7XHJcbiAgYmFzZVVSTDogQVBJX1VSTCxcclxuICB3aXRoQ3JlZGVudGlhbHM6IHRydWUsXHJcbn0pO1xyXG5cclxuaW5zdGFuY2UuaW50ZXJjZXB0b3JzLnJlcXVlc3QudXNlKChjb25maWcpID0+IHtcclxuICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxyXG4gICAgY29uZmlnLmhlYWRlcnMuQXV0aG9yaXphdGlvbiA9IGBCZWFyZXIgJHt3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJyk/LnJlcGxhY2UoJyU3QycsICd8Jyl9YDtcclxuICB9XHJcbiAgcmV0dXJuIGNvbmZpZztcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBpbnN0YW5jZTtcclxuIiwiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtIZWFkZXJ9IGZyb20gJy4uL2NvbXBvbmVudHMvSGVhZGVyJztcclxuaW1wb3J0IHtOYXZpZ2F0aW9uRHJhd2VyfSBmcm9tIFwiLi4vY29tcG9uZW50cy9OYXZpZ2F0aW9uRHJhd2VyXCI7XHJcblxyXG5pbnRlcmZhY2UgTWFpbkxheW91dFByb3BzIHtcclxuICAgIHRpdGxlPzogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgTWFpbkxheW91dDogUmVhY3QuRkM8TWFpbkxheW91dFByb3BzPiA9ICh7Y2hpbGRyZW4sIHRpdGxlID0gJ0luZ3Rlcm5ldCd9KSA9PiB7XHJcblxyXG4gICAgY29uc3QgW21lbnVPcGVuZWQsIHRvZ2dsZU1lbnVPcGVuZWRdID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xyXG4gICAgY29uc3Qgb25DbGlja0hhbWJ1cmdlciA9IFJlYWN0LnVzZUNhbGxiYWNrKCgpID0+IHRvZ2dsZU1lbnVPcGVuZWQodHJ1ZSksIFtdKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICAgICAgPHRpdGxlPnt0aXRsZX08L3RpdGxlPlxyXG4gICAgICAgICAgICA8L0hlYWQ+XHJcblxyXG5cclxuICAgICAgICAgICAgPEhlYWRlciBvbkNsaWNrSGFtYnVyZ2VyPXtvbkNsaWNrSGFtYnVyZ2VyfS8+XHJcblxyXG4gICAgICAgICAgICA8TmF2aWdhdGlvbkRyYXdlciBtZW51T3BlbmVkPXttZW51T3BlbmVkfSBvbkNsb3NlPXsoKTogdm9pZCA9PiB0b2dnbGVNZW51T3BlbmVkKGZhbHNlKX0gLz5cclxuXHJcbiAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbn07XHJcbiIsImltcG9ydCBSZWFjdCwgeyBDaGlsZHJlbiwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQge1xuICBhZGRCYXNlUGF0aCxcbiAgYWRkTG9jYWxlLFxuICBnZXREb21haW5Mb2NhbGUsXG4gIGlzTG9jYWxVUkwsXG4gIE5leHRSb3V0ZXIsXG4gIFByZWZldGNoT3B0aW9ucyxcbiAgcmVzb2x2ZUhyZWYsXG59IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnLi9yb3V0ZXInXG5pbXBvcnQgeyB1c2VJbnRlcnNlY3Rpb24gfSBmcm9tICcuL3VzZS1pbnRlcnNlY3Rpb24nXG5cbnR5cGUgVXJsID0gc3RyaW5nIHwgVXJsT2JqZWN0XG50eXBlIFJlcXVpcmVkS2V5czxUPiA9IHtcbiAgW0sgaW4ga2V5b2YgVF0tPzoge30gZXh0ZW5kcyBQaWNrPFQsIEs+ID8gbmV2ZXIgOiBLXG59W2tleW9mIFRdXG50eXBlIE9wdGlvbmFsS2V5czxUPiA9IHtcbiAgW0sgaW4ga2V5b2YgVF0tPzoge30gZXh0ZW5kcyBQaWNrPFQsIEs+ID8gSyA6IG5ldmVyXG59W2tleW9mIFRdXG5cbmV4cG9ydCB0eXBlIExpbmtQcm9wcyA9IHtcbiAgaHJlZjogVXJsXG4gIGFzPzogVXJsXG4gIHJlcGxhY2U/OiBib29sZWFuXG4gIHNjcm9sbD86IGJvb2xlYW5cbiAgc2hhbGxvdz86IGJvb2xlYW5cbiAgcGFzc0hyZWY/OiBib29sZWFuXG4gIHByZWZldGNoPzogYm9vbGVhblxuICBsb2NhbGU/OiBzdHJpbmcgfCBmYWxzZVxufVxudHlwZSBMaW5rUHJvcHNSZXF1aXJlZCA9IFJlcXVpcmVkS2V5czxMaW5rUHJvcHM+XG50eXBlIExpbmtQcm9wc09wdGlvbmFsID0gT3B0aW9uYWxLZXlzPExpbmtQcm9wcz5cblxuY29uc3QgcHJlZmV0Y2hlZDogeyBbY2FjaGVLZXk6IHN0cmluZ106IGJvb2xlYW4gfSA9IHt9XG5cbmZ1bmN0aW9uIHByZWZldGNoKFxuICByb3V0ZXI6IE5leHRSb3V0ZXIsXG4gIGhyZWY6IHN0cmluZyxcbiAgYXM6IHN0cmluZyxcbiAgb3B0aW9ucz86IFByZWZldGNoT3B0aW9uc1xuKTogdm9pZCB7XG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyB8fCAhcm91dGVyKSByZXR1cm5cbiAgaWYgKCFpc0xvY2FsVVJMKGhyZWYpKSByZXR1cm5cbiAgLy8gUHJlZmV0Y2ggdGhlIEpTT04gcGFnZSBpZiBhc2tlZCAob25seSBpbiB0aGUgY2xpZW50KVxuICAvLyBXZSBuZWVkIHRvIGhhbmRsZSBhIHByZWZldGNoIGVycm9yIGhlcmUgc2luY2Ugd2UgbWF5IGJlXG4gIC8vIGxvYWRpbmcgd2l0aCBwcmlvcml0eSB3aGljaCBjYW4gcmVqZWN0IGJ1dCB3ZSBkb24ndFxuICAvLyB3YW50IHRvIGZvcmNlIG5hdmlnYXRpb24gc2luY2UgdGhpcyBpcyBvbmx5IGEgcHJlZmV0Y2hcbiAgcm91dGVyLnByZWZldGNoKGhyZWYsIGFzLCBvcHRpb25zKS5jYXRjaCgoZXJyKSA9PiB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIC8vIHJldGhyb3cgdG8gc2hvdyBpbnZhbGlkIFVSTCBlcnJvcnNcbiAgICAgIHRocm93IGVyclxuICAgIH1cbiAgfSlcbiAgY29uc3QgY3VyTG9jYWxlID1cbiAgICBvcHRpb25zICYmIHR5cGVvZiBvcHRpb25zLmxvY2FsZSAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgID8gb3B0aW9ucy5sb2NhbGVcbiAgICAgIDogcm91dGVyICYmIHJvdXRlci5sb2NhbGVcblxuICAvLyBKb2luIG9uIGFuIGludmFsaWQgVVJJIGNoYXJhY3RlclxuICBwcmVmZXRjaGVkW2hyZWYgKyAnJScgKyBhcyArIChjdXJMb2NhbGUgPyAnJScgKyBjdXJMb2NhbGUgOiAnJyldID0gdHJ1ZVxufVxuXG5mdW5jdGlvbiBpc01vZGlmaWVkRXZlbnQoZXZlbnQ6IFJlYWN0Lk1vdXNlRXZlbnQpOiBib29sZWFuIHtcbiAgY29uc3QgeyB0YXJnZXQgfSA9IGV2ZW50LmN1cnJlbnRUYXJnZXQgYXMgSFRNTEFuY2hvckVsZW1lbnRcbiAgcmV0dXJuIChcbiAgICAodGFyZ2V0ICYmIHRhcmdldCAhPT0gJ19zZWxmJykgfHxcbiAgICBldmVudC5tZXRhS2V5IHx8XG4gICAgZXZlbnQuY3RybEtleSB8fFxuICAgIGV2ZW50LnNoaWZ0S2V5IHx8XG4gICAgZXZlbnQuYWx0S2V5IHx8IC8vIHRyaWdnZXJzIHJlc291cmNlIGRvd25sb2FkXG4gICAgKGV2ZW50Lm5hdGl2ZUV2ZW50ICYmIGV2ZW50Lm5hdGl2ZUV2ZW50LndoaWNoID09PSAyKVxuICApXG59XG5cbmZ1bmN0aW9uIGxpbmtDbGlja2VkKFxuICBlOiBSZWFjdC5Nb3VzZUV2ZW50LFxuICByb3V0ZXI6IE5leHRSb3V0ZXIsXG4gIGhyZWY6IHN0cmluZyxcbiAgYXM6IHN0cmluZyxcbiAgcmVwbGFjZT86IGJvb2xlYW4sXG4gIHNoYWxsb3c/OiBib29sZWFuLFxuICBzY3JvbGw/OiBib29sZWFuLFxuICBsb2NhbGU/OiBzdHJpbmcgfCBmYWxzZVxuKTogdm9pZCB7XG4gIGNvbnN0IHsgbm9kZU5hbWUgfSA9IGUuY3VycmVudFRhcmdldFxuXG4gIGlmIChub2RlTmFtZSA9PT0gJ0EnICYmIChpc01vZGlmaWVkRXZlbnQoZSkgfHwgIWlzTG9jYWxVUkwoaHJlZikpKSB7XG4gICAgLy8gaWdub3JlIGNsaWNrIGZvciBicm93c2Vy4oCZcyBkZWZhdWx0IGJlaGF2aW9yXG4gICAgcmV0dXJuXG4gIH1cblxuICBlLnByZXZlbnREZWZhdWx0KClcblxuICAvLyAgYXZvaWQgc2Nyb2xsIGZvciB1cmxzIHdpdGggYW5jaG9yIHJlZnNcbiAgaWYgKHNjcm9sbCA9PSBudWxsKSB7XG4gICAgc2Nyb2xsID0gYXMuaW5kZXhPZignIycpIDwgMFxuICB9XG5cbiAgLy8gcmVwbGFjZSBzdGF0ZSBpbnN0ZWFkIG9mIHB1c2ggaWYgcHJvcCBpcyBwcmVzZW50XG4gIHJvdXRlcltyZXBsYWNlID8gJ3JlcGxhY2UnIDogJ3B1c2gnXShocmVmLCBhcywge1xuICAgIHNoYWxsb3csXG4gICAgbG9jYWxlLFxuICAgIHNjcm9sbCxcbiAgfSkudGhlbigoc3VjY2VzczogYm9vbGVhbikgPT4ge1xuICAgIGlmICghc3VjY2VzcykgcmV0dXJuXG4gICAgaWYgKHNjcm9sbCkge1xuICAgICAgLy8gRklYTUU6IHByb3BlciByb3V0ZSBhbm5vdW5jaW5nIGF0IFJvdXRlciBsZXZlbCwgbm90IExpbms6XG4gICAgICBkb2N1bWVudC5ib2R5LmZvY3VzKClcbiAgICB9XG4gIH0pXG59XG5cbmZ1bmN0aW9uIExpbmsocHJvcHM6IFJlYWN0LlByb3BzV2l0aENoaWxkcmVuPExpbmtQcm9wcz4pIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBmdW5jdGlvbiBjcmVhdGVQcm9wRXJyb3IoYXJnczoge1xuICAgICAga2V5OiBzdHJpbmdcbiAgICAgIGV4cGVjdGVkOiBzdHJpbmdcbiAgICAgIGFjdHVhbDogc3RyaW5nXG4gICAgfSkge1xuICAgICAgcmV0dXJuIG5ldyBFcnJvcihcbiAgICAgICAgYEZhaWxlZCBwcm9wIHR5cGU6IFRoZSBwcm9wIFxcYCR7YXJncy5rZXl9XFxgIGV4cGVjdHMgYSAke2FyZ3MuZXhwZWN0ZWR9IGluIFxcYDxMaW5rPlxcYCwgYnV0IGdvdCBcXGAke2FyZ3MuYWN0dWFsfVxcYCBpbnN0ZWFkLmAgK1xuICAgICAgICAgICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJ1xuICAgICAgICAgICAgPyBcIlxcbk9wZW4geW91ciBicm93c2VyJ3MgY29uc29sZSB0byB2aWV3IHRoZSBDb21wb25lbnQgc3RhY2sgdHJhY2UuXCJcbiAgICAgICAgICAgIDogJycpXG4gICAgICApXG4gICAgfVxuXG4gICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICBjb25zdCByZXF1aXJlZFByb3BzR3VhcmQ6IFJlY29yZDxMaW5rUHJvcHNSZXF1aXJlZCwgdHJ1ZT4gPSB7XG4gICAgICBocmVmOiB0cnVlLFxuICAgIH0gYXMgY29uc3RcbiAgICBjb25zdCByZXF1aXJlZFByb3BzOiBMaW5rUHJvcHNSZXF1aXJlZFtdID0gT2JqZWN0LmtleXMoXG4gICAgICByZXF1aXJlZFByb3BzR3VhcmRcbiAgICApIGFzIExpbmtQcm9wc1JlcXVpcmVkW11cbiAgICByZXF1aXJlZFByb3BzLmZvckVhY2goKGtleTogTGlua1Byb3BzUmVxdWlyZWQpID0+IHtcbiAgICAgIGlmIChrZXkgPT09ICdocmVmJykge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgcHJvcHNba2V5XSA9PSBudWxsIHx8XG4gICAgICAgICAgKHR5cGVvZiBwcm9wc1trZXldICE9PSAnc3RyaW5nJyAmJiB0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ29iamVjdCcpXG4gICAgICAgICkge1xuICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBleHBlY3RlZDogJ2BzdHJpbmdgIG9yIGBvYmplY3RgJyxcbiAgICAgICAgICAgIGFjdHVhbDogcHJvcHNba2V5XSA9PT0gbnVsbCA/ICdudWxsJyA6IHR5cGVvZiBwcm9wc1trZXldLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbiAgICAgICAgY29uc3QgXzogbmV2ZXIgPSBrZXlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICBjb25zdCBvcHRpb25hbFByb3BzR3VhcmQ6IFJlY29yZDxMaW5rUHJvcHNPcHRpb25hbCwgdHJ1ZT4gPSB7XG4gICAgICBhczogdHJ1ZSxcbiAgICAgIHJlcGxhY2U6IHRydWUsXG4gICAgICBzY3JvbGw6IHRydWUsXG4gICAgICBzaGFsbG93OiB0cnVlLFxuICAgICAgcGFzc0hyZWY6IHRydWUsXG4gICAgICBwcmVmZXRjaDogdHJ1ZSxcbiAgICAgIGxvY2FsZTogdHJ1ZSxcbiAgICB9IGFzIGNvbnN0XG4gICAgY29uc3Qgb3B0aW9uYWxQcm9wczogTGlua1Byb3BzT3B0aW9uYWxbXSA9IE9iamVjdC5rZXlzKFxuICAgICAgb3B0aW9uYWxQcm9wc0d1YXJkXG4gICAgKSBhcyBMaW5rUHJvcHNPcHRpb25hbFtdXG4gICAgb3B0aW9uYWxQcm9wcy5mb3JFYWNoKChrZXk6IExpbmtQcm9wc09wdGlvbmFsKSA9PiB7XG4gICAgICBjb25zdCB2YWxUeXBlID0gdHlwZW9mIHByb3BzW2tleV1cblxuICAgICAgaWYgKGtleSA9PT0gJ2FzJykge1xuICAgICAgICBpZiAocHJvcHNba2V5XSAmJiB2YWxUeXBlICE9PSAnc3RyaW5nJyAmJiB2YWxUeXBlICE9PSAnb2JqZWN0Jykge1xuICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBleHBlY3RlZDogJ2BzdHJpbmdgIG9yIGBvYmplY3RgJyxcbiAgICAgICAgICAgIGFjdHVhbDogdmFsVHlwZSxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGtleSA9PT0gJ2xvY2FsZScpIHtcbiAgICAgICAgaWYgKHByb3BzW2tleV0gJiYgdmFsVHlwZSAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgc3RyaW5nYCcsXG4gICAgICAgICAgICBhY3R1YWw6IHZhbFR5cGUsXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAga2V5ID09PSAncmVwbGFjZScgfHxcbiAgICAgICAga2V5ID09PSAnc2Nyb2xsJyB8fFxuICAgICAgICBrZXkgPT09ICdzaGFsbG93JyB8fFxuICAgICAgICBrZXkgPT09ICdwYXNzSHJlZicgfHxcbiAgICAgICAga2V5ID09PSAncHJlZmV0Y2gnXG4gICAgICApIHtcbiAgICAgICAgaWYgKHByb3BzW2tleV0gIT0gbnVsbCAmJiB2YWxUeXBlICE9PSAnYm9vbGVhbicpIHtcbiAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgYm9vbGVhbmAnLFxuICAgICAgICAgICAgYWN0dWFsOiB2YWxUeXBlLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbiAgICAgICAgY29uc3QgXzogbmV2ZXIgPSBrZXlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgLy8gVGhpcyBob29rIGlzIGluIGEgY29uZGl0aW9uYWwgYnV0IHRoYXQgaXMgb2sgYmVjYXVzZSBgcHJvY2Vzcy5lbnYuTk9ERV9FTlZgIG5ldmVyIGNoYW5nZXNcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvcnVsZXMtb2YtaG9va3NcbiAgICBjb25zdCBoYXNXYXJuZWQgPSBSZWFjdC51c2VSZWYoZmFsc2UpXG4gICAgaWYgKHByb3BzLnByZWZldGNoICYmICFoYXNXYXJuZWQuY3VycmVudCkge1xuICAgICAgaGFzV2FybmVkLmN1cnJlbnQgPSB0cnVlXG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICdOZXh0LmpzIGF1dG8tcHJlZmV0Y2hlcyBhdXRvbWF0aWNhbGx5IGJhc2VkIG9uIHZpZXdwb3J0LiBUaGUgcHJlZmV0Y2ggYXR0cmlidXRlIGlzIG5vIGxvbmdlciBuZWVkZWQuIE1vcmU6IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL3ByZWZldGNoLXRydWUtZGVwcmVjYXRlZCdcbiAgICAgIClcbiAgICB9XG4gIH1cbiAgY29uc3QgcCA9IHByb3BzLnByZWZldGNoICE9PSBmYWxzZVxuXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gIGNvbnN0IHBhdGhuYW1lID0gKHJvdXRlciAmJiByb3V0ZXIucGF0aG5hbWUpIHx8ICcvJ1xuXG4gIGNvbnN0IHsgaHJlZiwgYXMgfSA9IFJlYWN0LnVzZU1lbW8oKCkgPT4ge1xuICAgIGNvbnN0IFtyZXNvbHZlZEhyZWYsIHJlc29sdmVkQXNdID0gcmVzb2x2ZUhyZWYocGF0aG5hbWUsIHByb3BzLmhyZWYsIHRydWUpXG4gICAgcmV0dXJuIHtcbiAgICAgIGhyZWY6IHJlc29sdmVkSHJlZixcbiAgICAgIGFzOiBwcm9wcy5hc1xuICAgICAgICA/IHJlc29sdmVIcmVmKHBhdGhuYW1lLCBwcm9wcy5hcylcbiAgICAgICAgOiByZXNvbHZlZEFzIHx8IHJlc29sdmVkSHJlZixcbiAgICB9XG4gIH0sIFtwYXRobmFtZSwgcHJvcHMuaHJlZiwgcHJvcHMuYXNdKVxuXG4gIGxldCB7IGNoaWxkcmVuLCByZXBsYWNlLCBzaGFsbG93LCBzY3JvbGwsIGxvY2FsZSB9ID0gcHJvcHNcblxuICAvLyBEZXByZWNhdGVkLiBXYXJuaW5nIHNob3duIGJ5IHByb3BUeXBlIGNoZWNrLiBJZiB0aGUgY2hpbGRyZW4gcHJvdmlkZWQgaXMgYSBzdHJpbmcgKDxMaW5rPmV4YW1wbGU8L0xpbms+KSB3ZSB3cmFwIGl0IGluIGFuIDxhPiB0YWdcbiAgaWYgKHR5cGVvZiBjaGlsZHJlbiA9PT0gJ3N0cmluZycpIHtcbiAgICBjaGlsZHJlbiA9IDxhPntjaGlsZHJlbn08L2E+XG4gIH1cblxuICAvLyBUaGlzIHdpbGwgcmV0dXJuIHRoZSBmaXJzdCBjaGlsZCwgaWYgbXVsdGlwbGUgYXJlIHByb3ZpZGVkIGl0IHdpbGwgdGhyb3cgYW4gZXJyb3JcbiAgY29uc3QgY2hpbGQ6IGFueSA9IENoaWxkcmVuLm9ubHkoY2hpbGRyZW4pXG4gIGNvbnN0IGNoaWxkUmVmOiBhbnkgPSBjaGlsZCAmJiB0eXBlb2YgY2hpbGQgPT09ICdvYmplY3QnICYmIGNoaWxkLnJlZlxuXG4gIGNvbnN0IFtzZXRJbnRlcnNlY3Rpb25SZWYsIGlzVmlzaWJsZV0gPSB1c2VJbnRlcnNlY3Rpb24oe1xuICAgIHJvb3RNYXJnaW46ICcyMDBweCcsXG4gIH0pXG4gIGNvbnN0IHNldFJlZiA9IFJlYWN0LnVzZUNhbGxiYWNrKFxuICAgIChlbDogRWxlbWVudCkgPT4ge1xuICAgICAgc2V0SW50ZXJzZWN0aW9uUmVmKGVsKVxuICAgICAgaWYgKGNoaWxkUmVmKSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2hpbGRSZWYgPT09ICdmdW5jdGlvbicpIGNoaWxkUmVmKGVsKVxuICAgICAgICBlbHNlIGlmICh0eXBlb2YgY2hpbGRSZWYgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgY2hpbGRSZWYuY3VycmVudCA9IGVsXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIFtjaGlsZFJlZiwgc2V0SW50ZXJzZWN0aW9uUmVmXVxuICApXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3Qgc2hvdWxkUHJlZmV0Y2ggPSBpc1Zpc2libGUgJiYgcCAmJiBpc0xvY2FsVVJMKGhyZWYpXG4gICAgY29uc3QgY3VyTG9jYWxlID1cbiAgICAgIHR5cGVvZiBsb2NhbGUgIT09ICd1bmRlZmluZWQnID8gbG9jYWxlIDogcm91dGVyICYmIHJvdXRlci5sb2NhbGVcbiAgICBjb25zdCBpc1ByZWZldGNoZWQgPVxuICAgICAgcHJlZmV0Y2hlZFtocmVmICsgJyUnICsgYXMgKyAoY3VyTG9jYWxlID8gJyUnICsgY3VyTG9jYWxlIDogJycpXVxuICAgIGlmIChzaG91bGRQcmVmZXRjaCAmJiAhaXNQcmVmZXRjaGVkKSB7XG4gICAgICBwcmVmZXRjaChyb3V0ZXIsIGhyZWYsIGFzLCB7XG4gICAgICAgIGxvY2FsZTogY3VyTG9jYWxlLFxuICAgICAgfSlcbiAgICB9XG4gIH0sIFthcywgaHJlZiwgaXNWaXNpYmxlLCBsb2NhbGUsIHAsIHJvdXRlcl0pXG5cbiAgY29uc3QgY2hpbGRQcm9wczoge1xuICAgIG9uTW91c2VFbnRlcj86IFJlYWN0Lk1vdXNlRXZlbnRIYW5kbGVyXG4gICAgb25DbGljazogUmVhY3QuTW91c2VFdmVudEhhbmRsZXJcbiAgICBocmVmPzogc3RyaW5nXG4gICAgcmVmPzogYW55XG4gIH0gPSB7XG4gICAgcmVmOiBzZXRSZWYsXG4gICAgb25DbGljazogKGU6IFJlYWN0Lk1vdXNlRXZlbnQpID0+IHtcbiAgICAgIGlmIChjaGlsZC5wcm9wcyAmJiB0eXBlb2YgY2hpbGQucHJvcHMub25DbGljayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBjaGlsZC5wcm9wcy5vbkNsaWNrKGUpXG4gICAgICB9XG4gICAgICBpZiAoIWUuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgICBsaW5rQ2xpY2tlZChlLCByb3V0ZXIsIGhyZWYsIGFzLCByZXBsYWNlLCBzaGFsbG93LCBzY3JvbGwsIGxvY2FsZSlcbiAgICAgIH1cbiAgICB9LFxuICB9XG5cbiAgY2hpbGRQcm9wcy5vbk1vdXNlRW50ZXIgPSAoZTogUmVhY3QuTW91c2VFdmVudCkgPT4ge1xuICAgIGlmICghaXNMb2NhbFVSTChocmVmKSkgcmV0dXJuXG4gICAgaWYgKGNoaWxkLnByb3BzICYmIHR5cGVvZiBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGNoaWxkLnByb3BzLm9uTW91c2VFbnRlcihlKVxuICAgIH1cbiAgICBwcmVmZXRjaChyb3V0ZXIsIGhyZWYsIGFzLCB7IHByaW9yaXR5OiB0cnVlIH0pXG4gIH1cblxuICAvLyBJZiBjaGlsZCBpcyBhbiA8YT4gdGFnIGFuZCBkb2Vzbid0IGhhdmUgYSBocmVmIGF0dHJpYnV0ZSwgb3IgaWYgdGhlICdwYXNzSHJlZicgcHJvcGVydHkgaXNcbiAgLy8gZGVmaW5lZCwgd2Ugc3BlY2lmeSB0aGUgY3VycmVudCAnaHJlZicsIHNvIHRoYXQgcmVwZXRpdGlvbiBpcyBub3QgbmVlZGVkIGJ5IHRoZSB1c2VyXG4gIGlmIChwcm9wcy5wYXNzSHJlZiB8fCAoY2hpbGQudHlwZSA9PT0gJ2EnICYmICEoJ2hyZWYnIGluIGNoaWxkLnByb3BzKSkpIHtcbiAgICBjb25zdCBjdXJMb2NhbGUgPVxuICAgICAgdHlwZW9mIGxvY2FsZSAhPT0gJ3VuZGVmaW5lZCcgPyBsb2NhbGUgOiByb3V0ZXIgJiYgcm91dGVyLmxvY2FsZVxuXG4gICAgLy8gd2Ugb25seSByZW5kZXIgZG9tYWluIGxvY2FsZXMgaWYgd2UgYXJlIGN1cnJlbnRseSBvbiBhIGRvbWFpbiBsb2NhbGVcbiAgICAvLyBzbyB0aGF0IGxvY2FsZSBsaW5rcyBhcmUgc3RpbGwgdmlzaXRhYmxlIGluIGRldmVsb3BtZW50L3ByZXZpZXcgZW52c1xuICAgIGNvbnN0IGxvY2FsZURvbWFpbiA9XG4gICAgICByb3V0ZXIgJiZcbiAgICAgIHJvdXRlci5pc0xvY2FsZURvbWFpbiAmJlxuICAgICAgZ2V0RG9tYWluTG9jYWxlKFxuICAgICAgICBhcyxcbiAgICAgICAgY3VyTG9jYWxlLFxuICAgICAgICByb3V0ZXIgJiYgcm91dGVyLmxvY2FsZXMsXG4gICAgICAgIHJvdXRlciAmJiByb3V0ZXIuZG9tYWluTG9jYWxlc1xuICAgICAgKVxuXG4gICAgY2hpbGRQcm9wcy5ocmVmID1cbiAgICAgIGxvY2FsZURvbWFpbiB8fFxuICAgICAgYWRkQmFzZVBhdGgoYWRkTG9jYWxlKGFzLCBjdXJMb2NhbGUsIHJvdXRlciAmJiByb3V0ZXIuZGVmYXVsdExvY2FsZSkpXG4gIH1cblxuICByZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkLCBjaGlsZFByb3BzKVxufVxuXG5leHBvcnQgZGVmYXVsdCBMaW5rXG4iLCIvKipcbiAqIFJlbW92ZXMgdGhlIHRyYWlsaW5nIHNsYXNoIG9mIGEgcGF0aCBpZiB0aGVyZSBpcyBvbmUuIFByZXNlcnZlcyB0aGUgcm9vdCBwYXRoIGAvYC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBwYXRoLmVuZHNXaXRoKCcvJykgJiYgcGF0aCAhPT0gJy8nID8gcGF0aC5zbGljZSgwLCAtMSkgOiBwYXRoXG59XG5cbi8qKlxuICogTm9ybWFsaXplcyB0aGUgdHJhaWxpbmcgc2xhc2ggb2YgYSBwYXRoIGFjY29yZGluZyB0byB0aGUgYHRyYWlsaW5nU2xhc2hgIG9wdGlvblxuICogaW4gYG5leHQuY29uZmlnLmpzYC5cbiAqL1xuZXhwb3J0IGNvbnN0IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoID0gcHJvY2Vzcy5lbnYuX19ORVhUX1RSQUlMSU5HX1NMQVNIXG4gID8gKHBhdGg6IHN0cmluZyk6IHN0cmluZyA9PiB7XG4gICAgICBpZiAoL1xcLlteL10rXFwvPyQvLnRlc3QocGF0aCkpIHtcbiAgICAgICAgcmV0dXJuIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGgpXG4gICAgICB9IGVsc2UgaWYgKHBhdGguZW5kc1dpdGgoJy8nKSkge1xuICAgICAgICByZXR1cm4gcGF0aFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHBhdGggKyAnLydcbiAgICAgIH1cbiAgICB9XG4gIDogcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2hcbiIsInR5cGUgUmVxdWVzdElkbGVDYWxsYmFja0hhbmRsZSA9IGFueVxudHlwZSBSZXF1ZXN0SWRsZUNhbGxiYWNrT3B0aW9ucyA9IHtcbiAgdGltZW91dDogbnVtYmVyXG59XG50eXBlIFJlcXVlc3RJZGxlQ2FsbGJhY2tEZWFkbGluZSA9IHtcbiAgcmVhZG9ubHkgZGlkVGltZW91dDogYm9vbGVhblxuICB0aW1lUmVtYWluaW5nOiAoKSA9PiBudW1iZXJcbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgV2luZG93IHtcbiAgICByZXF1ZXN0SWRsZUNhbGxiYWNrOiAoXG4gICAgICBjYWxsYmFjazogKGRlYWRsaW5lOiBSZXF1ZXN0SWRsZUNhbGxiYWNrRGVhZGxpbmUpID0+IHZvaWQsXG4gICAgICBvcHRzPzogUmVxdWVzdElkbGVDYWxsYmFja09wdGlvbnNcbiAgICApID0+IFJlcXVlc3RJZGxlQ2FsbGJhY2tIYW5kbGVcbiAgICBjYW5jZWxJZGxlQ2FsbGJhY2s6IChpZDogUmVxdWVzdElkbGVDYWxsYmFja0hhbmRsZSkgPT4gdm9pZFxuICB9XG59XG5cbmV4cG9ydCBjb25zdCByZXF1ZXN0SWRsZUNhbGxiYWNrID1cbiAgKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyAmJiBzZWxmLnJlcXVlc3RJZGxlQ2FsbGJhY2spIHx8XG4gIGZ1bmN0aW9uIChcbiAgICBjYjogKGRlYWRsaW5lOiBSZXF1ZXN0SWRsZUNhbGxiYWNrRGVhZGxpbmUpID0+IHZvaWRcbiAgKTogTm9kZUpTLlRpbWVvdXQge1xuICAgIGxldCBzdGFydCA9IERhdGUubm93KClcbiAgICByZXR1cm4gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICBjYih7XG4gICAgICAgIGRpZFRpbWVvdXQ6IGZhbHNlLFxuICAgICAgICB0aW1lUmVtYWluaW5nOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIE1hdGgubWF4KDAsIDUwIC0gKERhdGUubm93KCkgLSBzdGFydCkpXG4gICAgICAgIH0sXG4gICAgICB9KVxuICAgIH0sIDEpXG4gIH1cblxuZXhwb3J0IGNvbnN0IGNhbmNlbElkbGVDYWxsYmFjayA9XG4gICh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgJiYgc2VsZi5jYW5jZWxJZGxlQ2FsbGJhY2spIHx8XG4gIGZ1bmN0aW9uIChpZDogUmVxdWVzdElkbGVDYWxsYmFja0hhbmRsZSkge1xuICAgIHJldHVybiBjbGVhclRpbWVvdXQoaWQpXG4gIH1cbiIsImltcG9ydCB7IENvbXBvbmVudFR5cGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IENsaWVudEJ1aWxkTWFuaWZlc3QgfSBmcm9tICcuLi9idWlsZC93ZWJwYWNrL3BsdWdpbnMvYnVpbGQtbWFuaWZlc3QtcGx1Z2luJ1xuaW1wb3J0IGdldEFzc2V0UGF0aEZyb21Sb3V0ZSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUnXG5pbXBvcnQgeyByZXF1ZXN0SWRsZUNhbGxiYWNrIH0gZnJvbSAnLi9yZXF1ZXN0LWlkbGUtY2FsbGJhY2snXG5cbi8vIDMuOHMgd2FzIGFyYml0cmFyaWx5IGNob3NlbiBhcyBpdCdzIHdoYXQgaHR0cHM6Ly93ZWIuZGV2L2ludGVyYWN0aXZlXG4vLyBjb25zaWRlcnMgYXMgXCJHb29kXCIgdGltZS10by1pbnRlcmFjdGl2ZS4gV2UgbXVzdCBhc3N1bWUgc29tZXRoaW5nIHdlbnRcbi8vIHdyb25nIGJleW9uZCB0aGlzIHBvaW50LCBhbmQgdGhlbiBmYWxsLWJhY2sgdG8gYSBmdWxsIHBhZ2UgdHJhbnNpdGlvbiB0b1xuLy8gc2hvdyB0aGUgdXNlciBzb21ldGhpbmcgb2YgdmFsdWUuXG5jb25zdCBNU19NQVhfSURMRV9ERUxBWSA9IDM4MDBcblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgV2luZG93IHtcbiAgICBfX0JVSUxEX01BTklGRVNUPzogQ2xpZW50QnVpbGRNYW5pZmVzdFxuICAgIF9fQlVJTERfTUFOSUZFU1RfQ0I/OiBGdW5jdGlvblxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTG9hZGVkRW50cnlwb2ludFN1Y2Nlc3Mge1xuICBjb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgZXhwb3J0czogYW55XG59XG5leHBvcnQgaW50ZXJmYWNlIExvYWRlZEVudHJ5cG9pbnRGYWlsdXJlIHtcbiAgZXJyb3I6IHVua25vd25cbn1cbmV4cG9ydCB0eXBlIFJvdXRlRW50cnlwb2ludCA9IExvYWRlZEVudHJ5cG9pbnRTdWNjZXNzIHwgTG9hZGVkRW50cnlwb2ludEZhaWx1cmVcblxuZXhwb3J0IGludGVyZmFjZSBSb3V0ZVN0eWxlU2hlZXQge1xuICBocmVmOiBzdHJpbmdcbiAgY29udGVudDogc3RyaW5nXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTG9hZGVkUm91dGVTdWNjZXNzIGV4dGVuZHMgTG9hZGVkRW50cnlwb2ludFN1Y2Nlc3Mge1xuICBzdHlsZXM6IFJvdXRlU3R5bGVTaGVldFtdXG59XG5leHBvcnQgaW50ZXJmYWNlIExvYWRlZFJvdXRlRmFpbHVyZSB7XG4gIGVycm9yOiB1bmtub3duXG59XG5leHBvcnQgdHlwZSBSb3V0ZUxvYWRlckVudHJ5ID0gTG9hZGVkUm91dGVTdWNjZXNzIHwgTG9hZGVkUm91dGVGYWlsdXJlXG5cbmV4cG9ydCB0eXBlIEZ1dHVyZTxWPiA9IHtcbiAgcmVzb2x2ZTogKGVudHJ5cG9pbnQ6IFYpID0+IHZvaWRcbiAgZnV0dXJlOiBQcm9taXNlPFY+XG59XG5mdW5jdGlvbiB3aXRoRnV0dXJlPFQ+KFxuICBrZXk6IHN0cmluZyxcbiAgbWFwOiBNYXA8c3RyaW5nLCBGdXR1cmU8VD4gfCBUPixcbiAgZ2VuZXJhdG9yPzogKCkgPT4gUHJvbWlzZTxUPlxuKTogUHJvbWlzZTxUPiB7XG4gIGxldCBlbnRyeTogRnV0dXJlPFQ+IHwgVCB8IHVuZGVmaW5lZCA9IG1hcC5nZXQoa2V5KVxuICBpZiAoZW50cnkpIHtcbiAgICBpZiAoJ2Z1dHVyZScgaW4gZW50cnkpIHtcbiAgICAgIHJldHVybiBlbnRyeS5mdXR1cmVcbiAgICB9XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShlbnRyeSlcbiAgfVxuICBsZXQgcmVzb2x2ZXI6IChlbnRyeXBvaW50OiBUKSA9PiB2b2lkXG4gIGNvbnN0IHByb206IFByb21pc2U8VD4gPSBuZXcgUHJvbWlzZTxUPigocmVzb2x2ZSkgPT4ge1xuICAgIHJlc29sdmVyID0gcmVzb2x2ZVxuICB9KVxuICBtYXAuc2V0KGtleSwgKGVudHJ5ID0geyByZXNvbHZlOiByZXNvbHZlciEsIGZ1dHVyZTogcHJvbSB9KSlcbiAgcmV0dXJuIGdlbmVyYXRvclxuICAgID8gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlcXVlbmNlc1xuICAgICAgZ2VuZXJhdG9yKCkudGhlbigodmFsdWUpID0+IChyZXNvbHZlcih2YWx1ZSksIHZhbHVlKSlcbiAgICA6IHByb21cbn1cblxuZXhwb3J0IGludGVyZmFjZSBSb3V0ZUxvYWRlciB7XG4gIHdoZW5FbnRyeXBvaW50KHJvdXRlOiBzdHJpbmcpOiBQcm9taXNlPFJvdXRlRW50cnlwb2ludD5cbiAgb25FbnRyeXBvaW50KHJvdXRlOiBzdHJpbmcsIGV4ZWN1dGU6ICgpID0+IHVua25vd24pOiB2b2lkXG4gIGxvYWRSb3V0ZShyb3V0ZTogc3RyaW5nKTogUHJvbWlzZTxSb3V0ZUxvYWRlckVudHJ5PlxuICBwcmVmZXRjaChyb3V0ZTogc3RyaW5nKTogUHJvbWlzZTx2b2lkPlxufVxuXG5mdW5jdGlvbiBoYXNQcmVmZXRjaChsaW5rPzogSFRNTExpbmtFbGVtZW50KTogYm9vbGVhbiB7XG4gIHRyeSB7XG4gICAgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKVxuICAgIHJldHVybiAoXG4gICAgICAvLyBkZXRlY3QgSUUxMSBzaW5jZSBpdCBzdXBwb3J0cyBwcmVmZXRjaCBidXQgaXNuJ3QgZGV0ZWN0ZWRcbiAgICAgIC8vIHdpdGggcmVsTGlzdC5zdXBwb3J0XG4gICAgICAoISF3aW5kb3cuTVNJbnB1dE1ldGhvZENvbnRleHQgJiYgISEoZG9jdW1lbnQgYXMgYW55KS5kb2N1bWVudE1vZGUpIHx8XG4gICAgICBsaW5rLnJlbExpc3Quc3VwcG9ydHMoJ3ByZWZldGNoJylcbiAgICApXG4gIH0gY2F0Y2gge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG59XG5cbmNvbnN0IGNhblByZWZldGNoOiBib29sZWFuID0gaGFzUHJlZmV0Y2goKVxuXG5mdW5jdGlvbiBwcmVmZXRjaFZpYURvbShcbiAgaHJlZjogc3RyaW5nLFxuICBhczogc3RyaW5nLFxuICBsaW5rPzogSFRNTExpbmtFbGVtZW50XG4pOiBQcm9taXNlPGFueT4ge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlcywgcmVqKSA9PiB7XG4gICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYGxpbmtbcmVsPVwicHJlZmV0Y2hcIl1baHJlZl49XCIke2hyZWZ9XCJdYCkpIHtcbiAgICAgIHJldHVybiByZXMoKVxuICAgIH1cblxuICAgIGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaW5rJylcblxuICAgIC8vIFRoZSBvcmRlciBvZiBwcm9wZXJ0eSBhc3NpZ25tZW50IGhlcmUgaXMgaW50ZW50aW9uYWw6XG4gICAgaWYgKGFzKSBsaW5rIS5hcyA9IGFzXG4gICAgbGluayEucmVsID0gYHByZWZldGNoYFxuICAgIGxpbmshLmNyb3NzT3JpZ2luID0gcHJvY2Vzcy5lbnYuX19ORVhUX0NST1NTX09SSUdJTiFcbiAgICBsaW5rIS5vbmxvYWQgPSByZXNcbiAgICBsaW5rIS5vbmVycm9yID0gcmVqXG5cbiAgICAvLyBgaHJlZmAgc2hvdWxkIGFsd2F5cyBiZSBsYXN0OlxuICAgIGxpbmshLmhyZWYgPSBocmVmXG5cbiAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKGxpbmspXG4gIH0pXG59XG5cbmNvbnN0IEFTU0VUX0xPQURfRVJST1IgPSBTeW1ib2woJ0FTU0VUX0xPQURfRVJST1InKVxuLy8gVE9ETzogdW5leHBvcnRcbmV4cG9ydCBmdW5jdGlvbiBtYXJrQXNzZXRFcnJvcihlcnI6IEVycm9yKTogRXJyb3Ige1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KGVyciwgQVNTRVRfTE9BRF9FUlJPUiwge30pXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0Fzc2V0RXJyb3IoZXJyPzogRXJyb3IpOiBib29sZWFuIHwgdW5kZWZpbmVkIHtcbiAgcmV0dXJuIGVyciAmJiBBU1NFVF9MT0FEX0VSUk9SIGluIGVyclxufVxuXG5mdW5jdGlvbiBhcHBlbmRTY3JpcHQoXG4gIHNyYzogc3RyaW5nLFxuICBzY3JpcHQ/OiBIVE1MU2NyaXB0RWxlbWVudFxuKTogUHJvbWlzZTx1bmtub3duPiB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0JylcblxuICAgIC8vIFRoZSBvcmRlciBvZiBwcm9wZXJ0eSBhc3NpZ25tZW50IGhlcmUgaXMgaW50ZW50aW9uYWwuXG4gICAgLy8gMS4gU2V0dXAgc3VjY2Vzcy9mYWlsdXJlIGhvb2tzIGluIGNhc2UgdGhlIGJyb3dzZXIgc3luY2hyb25vdXNseVxuICAgIC8vICAgIGV4ZWN1dGVzIHdoZW4gYHNyY2AgaXMgc2V0LlxuICAgIHNjcmlwdC5vbmxvYWQgPSByZXNvbHZlXG4gICAgc2NyaXB0Lm9uZXJyb3IgPSAoKSA9PlxuICAgICAgcmVqZWN0KG1hcmtBc3NldEVycm9yKG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc2NyaXB0OiAke3NyY31gKSkpXG5cbiAgICAvLyAyLiBDb25maWd1cmUgdGhlIGNyb3NzLW9yaWdpbiBhdHRyaWJ1dGUgYmVmb3JlIHNldHRpbmcgYHNyY2AgaW4gY2FzZSB0aGVcbiAgICAvLyAgICBicm93c2VyIGJlZ2lucyB0byBmZXRjaC5cbiAgICBzY3JpcHQuY3Jvc3NPcmlnaW4gPSBwcm9jZXNzLmVudi5fX05FWFRfQ1JPU1NfT1JJR0lOIVxuXG4gICAgLy8gMy4gRmluYWxseSwgc2V0IHRoZSBzb3VyY2UgYW5kIGluamVjdCBpbnRvIHRoZSBET00gaW4gY2FzZSB0aGUgY2hpbGRcbiAgICAvLyAgICBtdXN0IGJlIGFwcGVuZGVkIGZvciBmZXRjaGluZyB0byBzdGFydC5cbiAgICBzY3JpcHQuc3JjID0gc3JjXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzY3JpcHQpXG4gIH0pXG59XG5cbi8vIFJlc29sdmUgYSBwcm9taXNlIHRoYXQgdGltZXMgb3V0IGFmdGVyIGdpdmVuIGFtb3VudCBvZiBtaWxsaXNlY29uZHMuXG5mdW5jdGlvbiByZXNvbHZlUHJvbWlzZVdpdGhUaW1lb3V0PFQ+KFxuICBwOiBQcm9taXNlPFQ+LFxuICBtczogbnVtYmVyLFxuICBlcnI6IEVycm9yXG4pOiBQcm9taXNlPFQ+IHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2VcblxuICAgIHAudGhlbigocikgPT4ge1xuICAgICAgLy8gUmVzb2x2ZWQsIGNhbmNlbCB0aGUgdGltZW91dFxuICAgICAgY2FuY2VsbGVkID0gdHJ1ZVxuICAgICAgcmVzb2x2ZShyKVxuICAgIH0pLmNhdGNoKHJlamVjdClcblxuICAgIHJlcXVlc3RJZGxlQ2FsbGJhY2soKCkgPT5cbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBpZiAoIWNhbmNlbGxlZCkge1xuICAgICAgICAgIHJlamVjdChlcnIpXG4gICAgICAgIH1cbiAgICAgIH0sIG1zKVxuICAgIClcbiAgfSlcbn1cblxuLy8gVE9ETzogc3RvcCBleHBvcnRpbmcgb3IgY2FjaGUgdGhlIGZhaWx1cmVcbi8vIEl0J2QgYmUgYmVzdCB0byBzdG9wIGV4cG9ydGluZyB0aGlzLiBJdCdzIGFuIGltcGxlbWVudGF0aW9uIGRldGFpbC4gV2UncmVcbi8vIG9ubHkgZXhwb3J0aW5nIGl0IGZvciBiYWNrd2FyZHMgY29tcGF0aWJpbHR5IHdpdGggdGhlIGBwYWdlLWxvYWRlcmAuXG4vLyBPbmx5IGNhY2hlIHRoaXMgcmVzcG9uc2UgYXMgYSBsYXN0IHJlc29ydCBpZiB3ZSBjYW5ub3QgZWxpbWluYXRlIGFsbCBvdGhlclxuLy8gY29kZSBicmFuY2hlcyB0aGF0IHVzZSB0aGUgQnVpbGQgTWFuaWZlc3QgQ2FsbGJhY2sgYW5kIHB1c2ggdGhlbSB0aHJvdWdoXG4vLyB0aGUgUm91dGUgTG9hZGVyIGludGVyZmFjZS5cbmV4cG9ydCBmdW5jdGlvbiBnZXRDbGllbnRCdWlsZE1hbmlmZXN0KCk6IFByb21pc2U8Q2xpZW50QnVpbGRNYW5pZmVzdD4ge1xuICBpZiAoc2VsZi5fX0JVSUxEX01BTklGRVNUKSB7XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShzZWxmLl9fQlVJTERfTUFOSUZFU1QpXG4gIH1cblxuICBjb25zdCBvbkJ1aWxkTWFuaWZlc3Q6IFByb21pc2U8Q2xpZW50QnVpbGRNYW5pZmVzdD4gPSBuZXcgUHJvbWlzZTxcbiAgICBDbGllbnRCdWlsZE1hbmlmZXN0XG4gID4oKHJlc29sdmUpID0+IHtcbiAgICAvLyBNYW5kYXRvcnkgYmVjYXVzZSB0aGlzIGlzIG5vdCBjb25jdXJyZW50IHNhZmU6XG4gICAgY29uc3QgY2IgPSBzZWxmLl9fQlVJTERfTUFOSUZFU1RfQ0JcbiAgICBzZWxmLl9fQlVJTERfTUFOSUZFU1RfQ0IgPSAoKSA9PiB7XG4gICAgICByZXNvbHZlKHNlbGYuX19CVUlMRF9NQU5JRkVTVClcbiAgICAgIGNiICYmIGNiKClcbiAgICB9XG4gIH0pXG5cbiAgcmV0dXJuIHJlc29sdmVQcm9taXNlV2l0aFRpbWVvdXQ8Q2xpZW50QnVpbGRNYW5pZmVzdD4oXG4gICAgb25CdWlsZE1hbmlmZXN0LFxuICAgIE1TX01BWF9JRExFX0RFTEFZLFxuICAgIG1hcmtBc3NldEVycm9yKG5ldyBFcnJvcignRmFpbGVkIHRvIGxvYWQgY2xpZW50IGJ1aWxkIG1hbmlmZXN0JykpXG4gIClcbn1cblxuaW50ZXJmYWNlIFJvdXRlRmlsZXMge1xuICBzY3JpcHRzOiBzdHJpbmdbXVxuICBjc3M6IHN0cmluZ1tdXG59XG5mdW5jdGlvbiBnZXRGaWxlc0ZvclJvdXRlKFxuICBhc3NldFByZWZpeDogc3RyaW5nLFxuICByb3V0ZTogc3RyaW5nXG4pOiBQcm9taXNlPFJvdXRlRmlsZXM+IHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh7XG4gICAgICBzY3JpcHRzOiBbXG4gICAgICAgIGFzc2V0UHJlZml4ICtcbiAgICAgICAgICAnL19uZXh0L3N0YXRpYy9jaHVua3MvcGFnZXMnICtcbiAgICAgICAgICBlbmNvZGVVUkkoZ2V0QXNzZXRQYXRoRnJvbVJvdXRlKHJvdXRlLCAnLmpzJykpLFxuICAgICAgXSxcbiAgICAgIC8vIFN0eWxlcyBhcmUgaGFuZGxlZCBieSBgc3R5bGUtbG9hZGVyYCBpbiBkZXZlbG9wbWVudDpcbiAgICAgIGNzczogW10sXG4gICAgfSlcbiAgfVxuICByZXR1cm4gZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCgpLnRoZW4oKG1hbmlmZXN0KSA9PiB7XG4gICAgaWYgKCEocm91dGUgaW4gbWFuaWZlc3QpKSB7XG4gICAgICB0aHJvdyBtYXJrQXNzZXRFcnJvcihuZXcgRXJyb3IoYEZhaWxlZCB0byBsb29rdXAgcm91dGU6ICR7cm91dGV9YCkpXG4gICAgfVxuICAgIGNvbnN0IGFsbEZpbGVzID0gbWFuaWZlc3Rbcm91dGVdLm1hcChcbiAgICAgIChlbnRyeSkgPT4gYXNzZXRQcmVmaXggKyAnL19uZXh0LycgKyBlbmNvZGVVUkkoZW50cnkpXG4gICAgKVxuICAgIHJldHVybiB7XG4gICAgICBzY3JpcHRzOiBhbGxGaWxlcy5maWx0ZXIoKHYpID0+IHYuZW5kc1dpdGgoJy5qcycpKSxcbiAgICAgIGNzczogYWxsRmlsZXMuZmlsdGVyKCh2KSA9PiB2LmVuZHNXaXRoKCcuY3NzJykpLFxuICAgIH1cbiAgfSlcbn1cblxuZnVuY3Rpb24gY3JlYXRlUm91dGVMb2FkZXIoYXNzZXRQcmVmaXg6IHN0cmluZyk6IFJvdXRlTG9hZGVyIHtcbiAgY29uc3QgZW50cnlwb2ludHM6IE1hcDxcbiAgICBzdHJpbmcsXG4gICAgRnV0dXJlPFJvdXRlRW50cnlwb2ludD4gfCBSb3V0ZUVudHJ5cG9pbnRcbiAgPiA9IG5ldyBNYXAoKVxuICBjb25zdCBsb2FkZWRTY3JpcHRzOiBNYXA8c3RyaW5nLCBQcm9taXNlPHVua25vd24+PiA9IG5ldyBNYXAoKVxuICBjb25zdCBzdHlsZVNoZWV0czogTWFwPHN0cmluZywgUHJvbWlzZTxSb3V0ZVN0eWxlU2hlZXQ+PiA9IG5ldyBNYXAoKVxuICBjb25zdCByb3V0ZXM6IE1hcDxcbiAgICBzdHJpbmcsXG4gICAgRnV0dXJlPFJvdXRlTG9hZGVyRW50cnk+IHwgUm91dGVMb2FkZXJFbnRyeVxuICA+ID0gbmV3IE1hcCgpXG5cbiAgZnVuY3Rpb24gbWF5YmVFeGVjdXRlU2NyaXB0KHNyYzogc3RyaW5nKTogUHJvbWlzZTx1bmtub3duPiB7XG4gICAgbGV0IHByb206IFByb21pc2U8dW5rbm93bj4gfCB1bmRlZmluZWQgPSBsb2FkZWRTY3JpcHRzLmdldChzcmMpXG4gICAgaWYgKHByb20pIHtcbiAgICAgIHJldHVybiBwcm9tXG4gICAgfVxuXG4gICAgLy8gU2tpcCBleGVjdXRpbmcgc2NyaXB0IGlmIGl0J3MgYWxyZWFkeSBpbiB0aGUgRE9NOlxuICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBzY3JpcHRbc3JjXj1cIiR7c3JjfVwiXWApKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKClcbiAgICB9XG5cbiAgICBsb2FkZWRTY3JpcHRzLnNldChzcmMsIChwcm9tID0gYXBwZW5kU2NyaXB0KHNyYykpKVxuICAgIHJldHVybiBwcm9tXG4gIH1cblxuICBmdW5jdGlvbiBmZXRjaFN0eWxlU2hlZXQoaHJlZjogc3RyaW5nKTogUHJvbWlzZTxSb3V0ZVN0eWxlU2hlZXQ+IHtcbiAgICBsZXQgcHJvbTogUHJvbWlzZTxSb3V0ZVN0eWxlU2hlZXQ+IHwgdW5kZWZpbmVkID0gc3R5bGVTaGVldHMuZ2V0KGhyZWYpXG4gICAgaWYgKHByb20pIHtcbiAgICAgIHJldHVybiBwcm9tXG4gICAgfVxuXG4gICAgc3R5bGVTaGVldHMuc2V0KFxuICAgICAgaHJlZixcbiAgICAgIChwcm9tID0gZmV0Y2goaHJlZilcbiAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgIGlmICghcmVzLm9rKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0eWxlc2hlZXQ6ICR7aHJlZn1gKVxuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gcmVzLnRleHQoKS50aGVuKCh0ZXh0KSA9PiAoeyBocmVmOiBocmVmLCBjb250ZW50OiB0ZXh0IH0pKVxuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgIHRocm93IG1hcmtBc3NldEVycm9yKGVycilcbiAgICAgICAgfSkpXG4gICAgKVxuICAgIHJldHVybiBwcm9tXG4gIH1cblxuICByZXR1cm4ge1xuICAgIHdoZW5FbnRyeXBvaW50KHJvdXRlOiBzdHJpbmcpIHtcbiAgICAgIHJldHVybiB3aXRoRnV0dXJlKHJvdXRlLCBlbnRyeXBvaW50cylcbiAgICB9LFxuICAgIG9uRW50cnlwb2ludChyb3V0ZTogc3RyaW5nLCBleGVjdXRlOiAoKSA9PiB1bmtub3duKSB7XG4gICAgICBQcm9taXNlLnJlc29sdmUoZXhlY3V0ZSlcbiAgICAgICAgLnRoZW4oKGZuKSA9PiBmbigpKVxuICAgICAgICAudGhlbihcbiAgICAgICAgICAoZXhwb3J0czogYW55KSA9PiAoe1xuICAgICAgICAgICAgY29tcG9uZW50OiAoZXhwb3J0cyAmJiBleHBvcnRzLmRlZmF1bHQpIHx8IGV4cG9ydHMsXG4gICAgICAgICAgICBleHBvcnRzOiBleHBvcnRzLFxuICAgICAgICAgIH0pLFxuICAgICAgICAgIChlcnIpID0+ICh7IGVycm9yOiBlcnIgfSlcbiAgICAgICAgKVxuICAgICAgICAudGhlbigoaW5wdXQ6IFJvdXRlRW50cnlwb2ludCkgPT4ge1xuICAgICAgICAgIGNvbnN0IG9sZCA9IGVudHJ5cG9pbnRzLmdldChyb3V0ZSlcbiAgICAgICAgICBlbnRyeXBvaW50cy5zZXQocm91dGUsIGlucHV0KVxuICAgICAgICAgIGlmIChvbGQgJiYgJ3Jlc29sdmUnIGluIG9sZCkgb2xkLnJlc29sdmUoaW5wdXQpXG4gICAgICAgIH0pXG4gICAgfSxcbiAgICBsb2FkUm91dGUocm91dGU6IHN0cmluZykge1xuICAgICAgcmV0dXJuIHdpdGhGdXR1cmU8Um91dGVMb2FkZXJFbnRyeT4ocm91dGUsIHJvdXRlcywgYXN5bmMgKCkgPT4ge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGNvbnN0IHsgc2NyaXB0cywgY3NzIH0gPSBhd2FpdCBnZXRGaWxlc0ZvclJvdXRlKGFzc2V0UHJlZml4LCByb3V0ZSlcbiAgICAgICAgICBjb25zdCBbLCBzdHlsZXNdID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgICAgICAgZW50cnlwb2ludHMuaGFzKHJvdXRlKVxuICAgICAgICAgICAgICA/IFtdXG4gICAgICAgICAgICAgIDogUHJvbWlzZS5hbGwoc2NyaXB0cy5tYXAobWF5YmVFeGVjdXRlU2NyaXB0KSksXG4gICAgICAgICAgICBQcm9taXNlLmFsbChjc3MubWFwKGZldGNoU3R5bGVTaGVldCkpLFxuICAgICAgICAgIF0gYXMgY29uc3QpXG5cbiAgICAgICAgICBjb25zdCBlbnRyeXBvaW50OiBSb3V0ZUVudHJ5cG9pbnQgPSBhd2FpdCByZXNvbHZlUHJvbWlzZVdpdGhUaW1lb3V0KFxuICAgICAgICAgICAgdGhpcy53aGVuRW50cnlwb2ludChyb3V0ZSksXG4gICAgICAgICAgICBNU19NQVhfSURMRV9ERUxBWSxcbiAgICAgICAgICAgIG1hcmtBc3NldEVycm9yKFxuICAgICAgICAgICAgICBuZXcgRXJyb3IoYFJvdXRlIGRpZCBub3QgY29tcGxldGUgbG9hZGluZzogJHtyb3V0ZX1gKVxuICAgICAgICAgICAgKVxuICAgICAgICAgIClcblxuICAgICAgICAgIGNvbnN0IHJlczogUm91dGVMb2FkZXJFbnRyeSA9IE9iamVjdC5hc3NpZ248XG4gICAgICAgICAgICB7IHN0eWxlczogUm91dGVTdHlsZVNoZWV0W10gfSxcbiAgICAgICAgICAgIFJvdXRlRW50cnlwb2ludFxuICAgICAgICAgID4oeyBzdHlsZXMgfSwgZW50cnlwb2ludClcbiAgICAgICAgICByZXR1cm4gJ2Vycm9yJyBpbiBlbnRyeXBvaW50ID8gZW50cnlwb2ludCA6IHJlc1xuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICByZXR1cm4geyBlcnJvcjogZXJyIH1cbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9LFxuICAgIHByZWZldGNoKHJvdXRlOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9Hb29nbGVDaHJvbWVMYWJzL3F1aWNrbGluay9ibG9iLzQ1M2E2NjFmYTFmYTk0MGUyZDJlMDQ0NDUyMzk4ZTM4YzY3YTk4ZmIvc3JjL2luZGV4Lm1qcyNMMTE1LUwxMThcbiAgICAgIC8vIExpY2Vuc2U6IEFwYWNoZSAyLjBcbiAgICAgIGxldCBjblxuICAgICAgaWYgKChjbiA9IChuYXZpZ2F0b3IgYXMgYW55KS5jb25uZWN0aW9uKSkge1xuICAgICAgICAvLyBEb24ndCBwcmVmZXRjaCBpZiB1c2luZyAyRyBvciBpZiBTYXZlLURhdGEgaXMgZW5hYmxlZC5cbiAgICAgICAgaWYgKGNuLnNhdmVEYXRhIHx8IC8yZy8udGVzdChjbi5lZmZlY3RpdmVUeXBlKSkgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpXG4gICAgICB9XG4gICAgICByZXR1cm4gZ2V0RmlsZXNGb3JSb3V0ZShhc3NldFByZWZpeCwgcm91dGUpXG4gICAgICAgIC50aGVuKChvdXRwdXQpID0+XG4gICAgICAgICAgUHJvbWlzZS5hbGwoXG4gICAgICAgICAgICBjYW5QcmVmZXRjaFxuICAgICAgICAgICAgICA/IG91dHB1dC5zY3JpcHRzLm1hcCgoc2NyaXB0KSA9PiBwcmVmZXRjaFZpYURvbShzY3JpcHQsICdzY3JpcHQnKSlcbiAgICAgICAgICAgICAgOiBbXVxuICAgICAgICAgIClcbiAgICAgICAgKVxuICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgcmVxdWVzdElkbGVDYWxsYmFjaygoKSA9PiB0aGlzLmxvYWRSb3V0ZShyb3V0ZSkpXG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaChcbiAgICAgICAgICAvLyBzd2FsbG93IHByZWZldGNoIGVycm9yc1xuICAgICAgICAgICgpID0+IHt9XG4gICAgICAgIClcbiAgICB9LFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVJvdXRlTG9hZGVyXG4iLCIvKiBnbG9iYWwgd2luZG93ICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUm91dGVyLCB7IE5leHRSb3V0ZXIgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IFJvdXRlckNvbnRleHQgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQnXG5cbnR5cGUgQ2xhc3NBcmd1bWVudHM8VD4gPSBUIGV4dGVuZHMgbmV3ICguLi5hcmdzOiBpbmZlciBVKSA9PiBhbnkgPyBVIDogYW55XG5cbnR5cGUgUm91dGVyQXJncyA9IENsYXNzQXJndW1lbnRzPHR5cGVvZiBSb3V0ZXI+XG5cbnR5cGUgU2luZ2xldG9uUm91dGVyQmFzZSA9IHtcbiAgcm91dGVyOiBSb3V0ZXIgfCBudWxsXG4gIHJlYWR5Q2FsbGJhY2tzOiBBcnJheTwoKSA9PiBhbnk+XG4gIHJlYWR5KGNiOiAoKSA9PiBhbnkpOiB2b2lkXG59XG5cbmV4cG9ydCB7IFJvdXRlciwgTmV4dFJvdXRlciB9XG5cbmV4cG9ydCB0eXBlIFNpbmdsZXRvblJvdXRlciA9IFNpbmdsZXRvblJvdXRlckJhc2UgJiBOZXh0Um91dGVyXG5cbmNvbnN0IHNpbmdsZXRvblJvdXRlcjogU2luZ2xldG9uUm91dGVyQmFzZSA9IHtcbiAgcm91dGVyOiBudWxsLCAvLyBob2xkcyB0aGUgYWN0dWFsIHJvdXRlciBpbnN0YW5jZVxuICByZWFkeUNhbGxiYWNrczogW10sXG4gIHJlYWR5KGNiOiAoKSA9PiB2b2lkKSB7XG4gICAgaWYgKHRoaXMucm91dGVyKSByZXR1cm4gY2IoKVxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhpcy5yZWFkeUNhbGxiYWNrcy5wdXNoKGNiKVxuICAgIH1cbiAgfSxcbn1cblxuLy8gQ3JlYXRlIHB1YmxpYyBwcm9wZXJ0aWVzIGFuZCBtZXRob2RzIG9mIHRoZSByb3V0ZXIgaW4gdGhlIHNpbmdsZXRvblJvdXRlclxuY29uc3QgdXJsUHJvcGVydHlGaWVsZHMgPSBbXG4gICdwYXRobmFtZScsXG4gICdyb3V0ZScsXG4gICdxdWVyeScsXG4gICdhc1BhdGgnLFxuICAnY29tcG9uZW50cycsXG4gICdpc0ZhbGxiYWNrJyxcbiAgJ2Jhc2VQYXRoJyxcbiAgJ2xvY2FsZScsXG4gICdsb2NhbGVzJyxcbiAgJ2RlZmF1bHRMb2NhbGUnLFxuICAnaXNSZWFkeScsXG4gICdpc1ByZXZpZXcnLFxuICAnaXNMb2NhbGVEb21haW4nLFxuXVxuY29uc3Qgcm91dGVyRXZlbnRzID0gW1xuICAncm91dGVDaGFuZ2VTdGFydCcsXG4gICdiZWZvcmVIaXN0b3J5Q2hhbmdlJyxcbiAgJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLFxuICAncm91dGVDaGFuZ2VFcnJvcicsXG4gICdoYXNoQ2hhbmdlU3RhcnQnLFxuICAnaGFzaENoYW5nZUNvbXBsZXRlJyxcbl1cbmNvbnN0IGNvcmVNZXRob2RGaWVsZHMgPSBbXG4gICdwdXNoJyxcbiAgJ3JlcGxhY2UnLFxuICAncmVsb2FkJyxcbiAgJ2JhY2snLFxuICAncHJlZmV0Y2gnLFxuICAnYmVmb3JlUG9wU3RhdGUnLFxuXVxuXG4vLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLCAnZXZlbnRzJywge1xuICBnZXQoKSB7XG4gICAgcmV0dXJuIFJvdXRlci5ldmVudHNcbiAgfSxcbn0pXG5cbnVybFByb3BlcnR5RmllbGRzLmZvckVhY2goKGZpZWxkOiBzdHJpbmcpID0+IHtcbiAgLy8gSGVyZSB3ZSBuZWVkIHRvIHVzZSBPYmplY3QuZGVmaW5lUHJvcGVydHkgYmVjYXVzZSwgd2UgbmVlZCB0byByZXR1cm5cbiAgLy8gdGhlIHByb3BlcnR5IGFzc2lnbmVkIHRvIHRoZSBhY3R1YWwgcm91dGVyXG4gIC8vIFRoZSB2YWx1ZSBtaWdodCBnZXQgY2hhbmdlZCBhcyB3ZSBjaGFuZ2Ugcm91dGVzIGFuZCB0aGlzIGlzIHRoZVxuICAvLyBwcm9wZXIgd2F5IHRvIGFjY2VzcyBpdFxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLCBmaWVsZCwge1xuICAgIGdldCgpIHtcbiAgICAgIGNvbnN0IHJvdXRlciA9IGdldFJvdXRlcigpIGFzIGFueVxuICAgICAgcmV0dXJuIHJvdXRlcltmaWVsZF0gYXMgc3RyaW5nXG4gICAgfSxcbiAgfSlcbn0pXG5cbmNvcmVNZXRob2RGaWVsZHMuZm9yRWFjaCgoZmllbGQ6IHN0cmluZykgPT4ge1xuICAvLyBXZSBkb24ndCByZWFsbHkga25vdyB0aGUgdHlwZXMgaGVyZSwgc28gd2UgYWRkIHRoZW0gbGF0ZXIgaW5zdGVhZFxuICA7KHNpbmdsZXRvblJvdXRlciBhcyBhbnkpW2ZpZWxkXSA9ICguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgIGNvbnN0IHJvdXRlciA9IGdldFJvdXRlcigpIGFzIGFueVxuICAgIHJldHVybiByb3V0ZXJbZmllbGRdKC4uLmFyZ3MpXG4gIH1cbn0pXG5cbnJvdXRlckV2ZW50cy5mb3JFYWNoKChldmVudDogc3RyaW5nKSA9PiB7XG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeSgoKSA9PiB7XG4gICAgUm91dGVyLmV2ZW50cy5vbihldmVudCwgKC4uLmFyZ3MpID0+IHtcbiAgICAgIGNvbnN0IGV2ZW50RmllbGQgPSBgb24ke2V2ZW50LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpfSR7ZXZlbnQuc3Vic3RyaW5nKFxuICAgICAgICAxXG4gICAgICApfWBcbiAgICAgIGNvbnN0IF9zaW5nbGV0b25Sb3V0ZXIgPSBzaW5nbGV0b25Sb3V0ZXIgYXMgYW55XG4gICAgICBpZiAoX3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0oLi4uYXJncylcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihgRXJyb3Igd2hlbiBydW5uaW5nIHRoZSBSb3V0ZXIgZXZlbnQ6ICR7ZXZlbnRGaWVsZH1gKVxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYCR7ZXJyLm1lc3NhZ2V9XFxuJHtlcnIuc3RhY2t9YClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gIH0pXG59KVxuXG5mdW5jdGlvbiBnZXRSb3V0ZXIoKTogUm91dGVyIHtcbiAgaWYgKCFzaW5nbGV0b25Sb3V0ZXIucm91dGVyKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9XG4gICAgICAnTm8gcm91dGVyIGluc3RhbmNlIGZvdW5kLlxcbicgK1xuICAgICAgJ1lvdSBzaG91bGQgb25seSB1c2UgXCJuZXh0L3JvdXRlclwiIGluc2lkZSB0aGUgY2xpZW50IHNpZGUgb2YgeW91ciBhcHAuXFxuJ1xuICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICB9XG4gIHJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyXG59XG5cbi8vIEV4cG9ydCB0aGUgc2luZ2xldG9uUm91dGVyIGFuZCB0aGlzIGlzIHRoZSBwdWJsaWMgQVBJLlxuZXhwb3J0IGRlZmF1bHQgc2luZ2xldG9uUm91dGVyIGFzIFNpbmdsZXRvblJvdXRlclxuXG4vLyBSZWV4cG9ydCB0aGUgd2l0aFJvdXRlIEhPQ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB3aXRoUm91dGVyIH0gZnJvbSAnLi93aXRoLXJvdXRlcidcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZVJvdXRlcigpOiBOZXh0Um91dGVyIHtcbiAgcmV0dXJuIFJlYWN0LnVzZUNvbnRleHQoUm91dGVyQ29udGV4dClcbn1cblxuLy8gSU5URVJOQUwgQVBJU1xuLy8gLS0tLS0tLS0tLS0tLVxuLy8gKGRvIG5vdCB1c2UgZm9sbG93aW5nIGV4cG9ydHMgaW5zaWRlIHRoZSBhcHApXG5cbi8vIENyZWF0ZSBhIHJvdXRlciBhbmQgYXNzaWduIGl0IGFzIHRoZSBzaW5nbGV0b24gaW5zdGFuY2UuXG4vLyBUaGlzIGlzIHVzZWQgaW4gY2xpZW50IHNpZGUgd2hlbiB3ZSBhcmUgaW5pdGlsaXppbmcgdGhlIGFwcC5cbi8vIFRoaXMgc2hvdWxkICoqbm90KiogdXNlIGluc2lkZSB0aGUgc2VydmVyLlxuZXhwb3J0IGNvbnN0IGNyZWF0ZVJvdXRlciA9ICguLi5hcmdzOiBSb3V0ZXJBcmdzKTogUm91dGVyID0+IHtcbiAgc2luZ2xldG9uUm91dGVyLnJvdXRlciA9IG5ldyBSb3V0ZXIoLi4uYXJncylcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzLmZvckVhY2goKGNiKSA9PiBjYigpKVxuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3MgPSBbXVxuXG4gIHJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyXG59XG5cbi8vIFRoaXMgZnVuY3Rpb24gaXMgdXNlZCB0byBjcmVhdGUgdGhlIGB3aXRoUm91dGVyYCByb3V0ZXIgaW5zdGFuY2VcbmV4cG9ydCBmdW5jdGlvbiBtYWtlUHVibGljUm91dGVySW5zdGFuY2Uocm91dGVyOiBSb3V0ZXIpOiBOZXh0Um91dGVyIHtcbiAgY29uc3QgX3JvdXRlciA9IHJvdXRlciBhcyBhbnlcbiAgY29uc3QgaW5zdGFuY2UgPSB7fSBhcyBhbnlcblxuICBmb3IgKGNvbnN0IHByb3BlcnR5IG9mIHVybFByb3BlcnR5RmllbGRzKSB7XG4gICAgaWYgKHR5cGVvZiBfcm91dGVyW3Byb3BlcnR5XSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIGluc3RhbmNlW3Byb3BlcnR5XSA9IE9iamVjdC5hc3NpZ24oXG4gICAgICAgIEFycmF5LmlzQXJyYXkoX3JvdXRlcltwcm9wZXJ0eV0pID8gW10gOiB7fSxcbiAgICAgICAgX3JvdXRlcltwcm9wZXJ0eV1cbiAgICAgICkgLy8gbWFrZXMgc3VyZSBxdWVyeSBpcyBub3Qgc3RhdGVmdWxcbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuXG4gICAgaW5zdGFuY2VbcHJvcGVydHldID0gX3JvdXRlcltwcm9wZXJ0eV1cbiAgfVxuXG4gIC8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbiAgaW5zdGFuY2UuZXZlbnRzID0gUm91dGVyLmV2ZW50c1xuXG4gIGNvcmVNZXRob2RGaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgICBpbnN0YW5jZVtmaWVsZF0gPSAoLi4uYXJnczogYW55W10pID0+IHtcbiAgICAgIHJldHVybiBfcm91dGVyW2ZpZWxkXSguLi5hcmdzKVxuICAgIH1cbiAgfSlcblxuICByZXR1cm4gaW5zdGFuY2Vcbn1cbiIsImltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7XG4gIHJlcXVlc3RJZGxlQ2FsbGJhY2ssXG4gIGNhbmNlbElkbGVDYWxsYmFjayxcbn0gZnJvbSAnLi9yZXF1ZXN0LWlkbGUtY2FsbGJhY2snXG5cbnR5cGUgVXNlSW50ZXJzZWN0aW9uT2JzZXJ2ZXJJbml0ID0gUGljazxJbnRlcnNlY3Rpb25PYnNlcnZlckluaXQsICdyb290TWFyZ2luJz5cbnR5cGUgVXNlSW50ZXJzZWN0aW9uID0geyBkaXNhYmxlZD86IGJvb2xlYW4gfSAmIFVzZUludGVyc2VjdGlvbk9ic2VydmVySW5pdFxudHlwZSBPYnNlcnZlQ2FsbGJhY2sgPSAoaXNWaXNpYmxlOiBib29sZWFuKSA9PiB2b2lkXG50eXBlIE9ic2VydmVyID0ge1xuICBpZDogc3RyaW5nXG4gIG9ic2VydmVyOiBJbnRlcnNlY3Rpb25PYnNlcnZlclxuICBlbGVtZW50czogTWFwPEVsZW1lbnQsIE9ic2VydmVDYWxsYmFjaz5cbn1cblxuY29uc3QgaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgPSB0eXBlb2YgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgIT09ICd1bmRlZmluZWQnXG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VJbnRlcnNlY3Rpb248VCBleHRlbmRzIEVsZW1lbnQ+KHtcbiAgcm9vdE1hcmdpbixcbiAgZGlzYWJsZWQsXG59OiBVc2VJbnRlcnNlY3Rpb24pOiBbKGVsZW1lbnQ6IFQgfCBudWxsKSA9PiB2b2lkLCBib29sZWFuXSB7XG4gIGNvbnN0IGlzRGlzYWJsZWQ6IGJvb2xlYW4gPSBkaXNhYmxlZCB8fCAhaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXJcblxuICBjb25zdCB1bm9ic2VydmUgPSB1c2VSZWY8RnVuY3Rpb24+KClcbiAgY29uc3QgW3Zpc2libGUsIHNldFZpc2libGVdID0gdXNlU3RhdGUoZmFsc2UpXG5cbiAgY29uc3Qgc2V0UmVmID0gdXNlQ2FsbGJhY2soXG4gICAgKGVsOiBUIHwgbnVsbCkgPT4ge1xuICAgICAgaWYgKHVub2JzZXJ2ZS5jdXJyZW50KSB7XG4gICAgICAgIHVub2JzZXJ2ZS5jdXJyZW50KClcbiAgICAgICAgdW5vYnNlcnZlLmN1cnJlbnQgPSB1bmRlZmluZWRcbiAgICAgIH1cblxuICAgICAgaWYgKGlzRGlzYWJsZWQgfHwgdmlzaWJsZSkgcmV0dXJuXG5cbiAgICAgIGlmIChlbCAmJiBlbC50YWdOYW1lKSB7XG4gICAgICAgIHVub2JzZXJ2ZS5jdXJyZW50ID0gb2JzZXJ2ZShcbiAgICAgICAgICBlbCxcbiAgICAgICAgICAoaXNWaXNpYmxlKSA9PiBpc1Zpc2libGUgJiYgc2V0VmlzaWJsZShpc1Zpc2libGUpLFxuICAgICAgICAgIHsgcm9vdE1hcmdpbiB9XG4gICAgICAgIClcbiAgICAgIH1cbiAgICB9LFxuICAgIFtpc0Rpc2FibGVkLCByb290TWFyZ2luLCB2aXNpYmxlXVxuICApXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIWhhc0ludGVyc2VjdGlvbk9ic2VydmVyKSB7XG4gICAgICBpZiAoIXZpc2libGUpIHtcbiAgICAgICAgY29uc3QgaWRsZUNhbGxiYWNrID0gcmVxdWVzdElkbGVDYWxsYmFjaygoKSA9PiBzZXRWaXNpYmxlKHRydWUpKVxuICAgICAgICByZXR1cm4gKCkgPT4gY2FuY2VsSWRsZUNhbGxiYWNrKGlkbGVDYWxsYmFjaylcbiAgICAgIH1cbiAgICB9XG4gIH0sIFt2aXNpYmxlXSlcblxuICByZXR1cm4gW3NldFJlZiwgdmlzaWJsZV1cbn1cblxuZnVuY3Rpb24gb2JzZXJ2ZShcbiAgZWxlbWVudDogRWxlbWVudCxcbiAgY2FsbGJhY2s6IE9ic2VydmVDYWxsYmFjayxcbiAgb3B0aW9uczogVXNlSW50ZXJzZWN0aW9uT2JzZXJ2ZXJJbml0XG4pOiAoKSA9PiB2b2lkIHtcbiAgY29uc3QgeyBpZCwgb2JzZXJ2ZXIsIGVsZW1lbnRzIH0gPSBjcmVhdGVPYnNlcnZlcihvcHRpb25zKVxuICBlbGVtZW50cy5zZXQoZWxlbWVudCwgY2FsbGJhY2spXG5cbiAgb2JzZXJ2ZXIub2JzZXJ2ZShlbGVtZW50KVxuICByZXR1cm4gZnVuY3Rpb24gdW5vYnNlcnZlKCk6IHZvaWQge1xuICAgIGVsZW1lbnRzLmRlbGV0ZShlbGVtZW50KVxuICAgIG9ic2VydmVyLnVub2JzZXJ2ZShlbGVtZW50KVxuXG4gICAgLy8gRGVzdHJveSBvYnNlcnZlciB3aGVuIHRoZXJlJ3Mgbm90aGluZyBsZWZ0IHRvIHdhdGNoOlxuICAgIGlmIChlbGVtZW50cy5zaXplID09PSAwKSB7XG4gICAgICBvYnNlcnZlci5kaXNjb25uZWN0KClcbiAgICAgIG9ic2VydmVycy5kZWxldGUoaWQpXG4gICAgfVxuICB9XG59XG5cbmNvbnN0IG9ic2VydmVycyA9IG5ldyBNYXA8c3RyaW5nLCBPYnNlcnZlcj4oKVxuZnVuY3Rpb24gY3JlYXRlT2JzZXJ2ZXIob3B0aW9uczogVXNlSW50ZXJzZWN0aW9uT2JzZXJ2ZXJJbml0KTogT2JzZXJ2ZXIge1xuICBjb25zdCBpZCA9IG9wdGlvbnMucm9vdE1hcmdpbiB8fCAnJ1xuICBsZXQgaW5zdGFuY2UgPSBvYnNlcnZlcnMuZ2V0KGlkKVxuICBpZiAoaW5zdGFuY2UpIHtcbiAgICByZXR1cm4gaW5zdGFuY2VcbiAgfVxuXG4gIGNvbnN0IGVsZW1lbnRzID0gbmV3IE1hcDxFbGVtZW50LCBPYnNlcnZlQ2FsbGJhY2s+KClcbiAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoKGVudHJpZXMpID0+IHtcbiAgICBlbnRyaWVzLmZvckVhY2goKGVudHJ5KSA9PiB7XG4gICAgICBjb25zdCBjYWxsYmFjayA9IGVsZW1lbnRzLmdldChlbnRyeS50YXJnZXQpXG4gICAgICBjb25zdCBpc1Zpc2libGUgPSBlbnRyeS5pc0ludGVyc2VjdGluZyB8fCBlbnRyeS5pbnRlcnNlY3Rpb25SYXRpbyA+IDBcbiAgICAgIGlmIChjYWxsYmFjayAmJiBpc1Zpc2libGUpIHtcbiAgICAgICAgY2FsbGJhY2soaXNWaXNpYmxlKVxuICAgICAgfVxuICAgIH0pXG4gIH0sIG9wdGlvbnMpXG5cbiAgb2JzZXJ2ZXJzLnNldChcbiAgICBpZCxcbiAgICAoaW5zdGFuY2UgPSB7XG4gICAgICBpZCxcbiAgICAgIG9ic2VydmVyLFxuICAgICAgZWxlbWVudHMsXG4gICAgfSlcbiAgKVxuICByZXR1cm4gaW5zdGFuY2Vcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IE5leHRDb21wb25lbnRUeXBlLCBOZXh0UGFnZUNvbnRleHQgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvdXRpbHMnXG5pbXBvcnQgeyBOZXh0Um91dGVyLCB1c2VSb3V0ZXIgfSBmcm9tICcuL3JvdXRlcidcblxuZXhwb3J0IHR5cGUgV2l0aFJvdXRlclByb3BzID0ge1xuICByb3V0ZXI6IE5leHRSb3V0ZXJcbn1cblxuZXhwb3J0IHR5cGUgRXhjbHVkZVJvdXRlclByb3BzPFA+ID0gUGljazxcbiAgUCxcbiAgRXhjbHVkZTxrZXlvZiBQLCBrZXlvZiBXaXRoUm91dGVyUHJvcHM+XG4+XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHdpdGhSb3V0ZXI8XG4gIFAgZXh0ZW5kcyBXaXRoUm91dGVyUHJvcHMsXG4gIEMgPSBOZXh0UGFnZUNvbnRleHRcbj4oXG4gIENvbXBvc2VkQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxDLCBhbnksIFA+XG4pOiBSZWFjdC5Db21wb25lbnRUeXBlPEV4Y2x1ZGVSb3V0ZXJQcm9wczxQPj4ge1xuICBmdW5jdGlvbiBXaXRoUm91dGVyV3JhcHBlcihwcm9wczogYW55KTogSlNYLkVsZW1lbnQge1xuICAgIHJldHVybiA8Q29tcG9zZWRDb21wb25lbnQgcm91dGVyPXt1c2VSb3V0ZXIoKX0gey4uLnByb3BzfSAvPlxuICB9XG5cbiAgV2l0aFJvdXRlcldyYXBwZXIuZ2V0SW5pdGlhbFByb3BzID0gQ29tcG9zZWRDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzXG4gIC8vIFRoaXMgaXMgbmVlZGVkIHRvIGFsbG93IGNoZWNraW5nIGZvciBjdXN0b20gZ2V0SW5pdGlhbFByb3BzIGluIF9hcHBcbiAgOyhXaXRoUm91dGVyV3JhcHBlciBhcyBhbnkpLm9yaWdHZXRJbml0aWFsUHJvcHMgPSAoQ29tcG9zZWRDb21wb25lbnQgYXMgYW55KS5vcmlnR2V0SW5pdGlhbFByb3BzXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgY29uc3QgbmFtZSA9XG4gICAgICBDb21wb3NlZENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBDb21wb3NlZENvbXBvbmVudC5uYW1lIHx8ICdVbmtub3duJ1xuICAgIFdpdGhSb3V0ZXJXcmFwcGVyLmRpc3BsYXlOYW1lID0gYHdpdGhSb3V0ZXIoJHtuYW1lfSlgXG4gIH1cblxuICByZXR1cm4gV2l0aFJvdXRlcldyYXBwZXJcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBub3JtYWxpemVMb2NhbGVQYXRoKFxuICBwYXRobmFtZTogc3RyaW5nLFxuICBsb2NhbGVzPzogc3RyaW5nW11cbik6IHtcbiAgZGV0ZWN0ZWRMb2NhbGU/OiBzdHJpbmdcbiAgcGF0aG5hbWU6IHN0cmluZ1xufSB7XG4gIGxldCBkZXRlY3RlZExvY2FsZTogc3RyaW5nIHwgdW5kZWZpbmVkXG4gIC8vIGZpcnN0IGl0ZW0gd2lsbCBiZSBlbXB0eSBzdHJpbmcgZnJvbSBzcGxpdHRpbmcgYXQgZmlyc3QgY2hhclxuICBjb25zdCBwYXRobmFtZVBhcnRzID0gcGF0aG5hbWUuc3BsaXQoJy8nKVxuXG4gIDsobG9jYWxlcyB8fCBbXSkuc29tZSgobG9jYWxlKSA9PiB7XG4gICAgaWYgKHBhdGhuYW1lUGFydHNbMV0udG9Mb3dlckNhc2UoKSA9PT0gbG9jYWxlLnRvTG93ZXJDYXNlKCkpIHtcbiAgICAgIGRldGVjdGVkTG9jYWxlID0gbG9jYWxlXG4gICAgICBwYXRobmFtZVBhcnRzLnNwbGljZSgxLCAxKVxuICAgICAgcGF0aG5hbWUgPSBwYXRobmFtZVBhcnRzLmpvaW4oJy8nKSB8fCAnLydcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuICAgIHJldHVybiBmYWxzZVxuICB9KVxuXG4gIHJldHVybiB7XG4gICAgcGF0aG5hbWUsXG4gICAgZGV0ZWN0ZWRMb2NhbGUsXG4gIH1cbn1cbiIsIi8qXG5NSVQgTGljZW5zZVxuXG5Db3B5cmlnaHQgKGMpIEphc29uIE1pbGxlciAoaHR0cHM6Ly9qYXNvbmZvcm1hdC5jb20vKVxuXG5QZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5UaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG4qL1xuXG4vLyBUaGlzIGZpbGUgaXMgYmFzZWQgb24gaHR0cHM6Ly9naXRodWIuY29tL2RldmVsb3BpdC9taXR0L2Jsb2IvdjEuMS4zL3NyYy9pbmRleC5qc1xuLy8gSXQncyBiZWVuIGVkaXRlZCBmb3IgdGhlIG5lZWRzIG9mIHRoaXMgc2NyaXB0XG4vLyBTZWUgdGhlIExJQ0VOU0UgYXQgdGhlIHRvcCBvZiB0aGUgZmlsZVxuXG50eXBlIEhhbmRsZXIgPSAoLi4uZXZ0czogYW55W10pID0+IHZvaWRcblxuZXhwb3J0IHR5cGUgTWl0dEVtaXR0ZXIgPSB7XG4gIG9uKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcik6IHZvaWRcbiAgb2ZmKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcik6IHZvaWRcbiAgZW1pdCh0eXBlOiBzdHJpbmcsIC4uLmV2dHM6IGFueVtdKTogdm9pZFxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtaXR0KCk6IE1pdHRFbWl0dGVyIHtcbiAgY29uc3QgYWxsOiB7IFtzOiBzdHJpbmddOiBIYW5kbGVyW10gfSA9IE9iamVjdC5jcmVhdGUobnVsbClcblxuICByZXR1cm4ge1xuICAgIG9uKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcikge1xuICAgICAgOyhhbGxbdHlwZV0gfHwgKGFsbFt0eXBlXSA9IFtdKSkucHVzaChoYW5kbGVyKVxuICAgIH0sXG5cbiAgICBvZmYodHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKSB7XG4gICAgICBpZiAoYWxsW3R5cGVdKSB7XG4gICAgICAgIGFsbFt0eXBlXS5zcGxpY2UoYWxsW3R5cGVdLmluZGV4T2YoaGFuZGxlcikgPj4+IDAsIDEpXG4gICAgICB9XG4gICAgfSxcblxuICAgIGVtaXQodHlwZTogc3RyaW5nLCAuLi5ldnRzOiBhbnlbXSkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGFycmF5LWNhbGxiYWNrLXJldHVyblxuICAgICAgOyhhbGxbdHlwZV0gfHwgW10pLnNsaWNlKCkubWFwKChoYW5kbGVyOiBIYW5kbGVyKSA9PiB7XG4gICAgICAgIGhhbmRsZXIoLi4uZXZ0cylcbiAgICAgIH0pXG4gICAgfSxcbiAgfVxufVxuIiwiLyogZ2xvYmFsIF9fTkVYVF9EQVRBX18gKi9cbi8vIHRzbGludDpkaXNhYmxlOm5vLWNvbnNvbGVcbmltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgeyBDb21wb25lbnRUeXBlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQge1xuICBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCxcbiAgcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gsXG59IGZyb20gJy4uLy4uLy4uL2NsaWVudC9ub3JtYWxpemUtdHJhaWxpbmctc2xhc2gnXG5pbXBvcnQgeyBHb29kUGFnZUNhY2hlLCBTdHlsZVNoZWV0VHVwbGUgfSBmcm9tICcuLi8uLi8uLi9jbGllbnQvcGFnZS1sb2FkZXInXG5pbXBvcnQge1xuICBnZXRDbGllbnRCdWlsZE1hbmlmZXN0LFxuICBpc0Fzc2V0RXJyb3IsXG4gIG1hcmtBc3NldEVycm9yLFxufSBmcm9tICcuLi8uLi8uLi9jbGllbnQvcm91dGUtbG9hZGVyJ1xuaW1wb3J0IHsgRG9tYWluTG9jYWxlcyB9IGZyb20gJy4uLy4uL3NlcnZlci9jb25maWcnXG5pbXBvcnQgeyBkZW5vcm1hbGl6ZVBhZ2VQYXRoIH0gZnJvbSAnLi4vLi4vc2VydmVyL2Rlbm9ybWFsaXplLXBhZ2UtcGF0aCdcbmltcG9ydCB7IG5vcm1hbGl6ZUxvY2FsZVBhdGggfSBmcm9tICcuLi9pMThuL25vcm1hbGl6ZS1sb2NhbGUtcGF0aCdcbmltcG9ydCBtaXR0LCB7IE1pdHRFbWl0dGVyIH0gZnJvbSAnLi4vbWl0dCdcbmltcG9ydCB7XG4gIEFwcENvbnRleHRUeXBlLFxuICBmb3JtYXRXaXRoVmFsaWRhdGlvbixcbiAgZ2V0TG9jYXRpb25PcmlnaW4sXG4gIGdldFVSTCxcbiAgbG9hZEdldEluaXRpYWxQcm9wcyxcbiAgTmV4dFBhZ2VDb250ZXh0LFxuICBTVCxcbiAgTkVYVF9EQVRBLFxufSBmcm9tICcuLi91dGlscydcbmltcG9ydCB7IGlzRHluYW1pY1JvdXRlIH0gZnJvbSAnLi91dGlscy9pcy1keW5hbWljJ1xuaW1wb3J0IHsgcGFyc2VSZWxhdGl2ZVVybCB9IGZyb20gJy4vdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsJ1xuaW1wb3J0IHsgc2VhcmNoUGFyYW1zVG9VcmxRdWVyeSB9IGZyb20gJy4vdXRpbHMvcXVlcnlzdHJpbmcnXG5pbXBvcnQgcmVzb2x2ZVJld3JpdGVzIGZyb20gJy4vdXRpbHMvcmVzb2x2ZS1yZXdyaXRlcydcbmltcG9ydCB7IGdldFJvdXRlTWF0Y2hlciB9IGZyb20gJy4vdXRpbHMvcm91dGUtbWF0Y2hlcidcbmltcG9ydCB7IGdldFJvdXRlUmVnZXggfSBmcm9tICcuL3V0aWxzL3JvdXRlLXJlZ2V4J1xuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBXaW5kb3cge1xuICAgIC8qIHByb2QgKi9cbiAgICBfX05FWFRfREFUQV9fOiBORVhUX0RBVEFcbiAgfVxufVxuXG5pbnRlcmZhY2UgUm91dGVQcm9wZXJ0aWVzIHtcbiAgc2hhbGxvdzogYm9vbGVhblxufVxuXG5pbnRlcmZhY2UgVHJhbnNpdGlvbk9wdGlvbnMge1xuICBzaGFsbG93PzogYm9vbGVhblxuICBsb2NhbGU/OiBzdHJpbmcgfCBmYWxzZVxuICBzY3JvbGw/OiBib29sZWFuXG59XG5cbmludGVyZmFjZSBOZXh0SGlzdG9yeVN0YXRlIHtcbiAgdXJsOiBzdHJpbmdcbiAgYXM6IHN0cmluZ1xuICBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9uc1xufVxuXG50eXBlIEhpc3RvcnlTdGF0ZSA9XG4gIHwgbnVsbFxuICB8IHsgX19OOiBmYWxzZSB9XG4gIHwgKHsgX19OOiB0cnVlOyBpZHg6IG51bWJlciB9ICYgTmV4dEhpc3RvcnlTdGF0ZSlcblxubGV0IGRldGVjdERvbWFpbkxvY2FsZTogdHlwZW9mIGltcG9ydCgnLi4vaTE4bi9kZXRlY3QtZG9tYWluLWxvY2FsZScpLmRldGVjdERvbWFpbkxvY2FsZVxuXG5pZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICBkZXRlY3REb21haW5Mb2NhbGUgPSByZXF1aXJlKCcuLi9pMThuL2RldGVjdC1kb21haW4tbG9jYWxlJylcbiAgICAuZGV0ZWN0RG9tYWluTG9jYWxlXG59XG5cbmNvbnN0IGJhc2VQYXRoID0gKHByb2Nlc3MuZW52Ll9fTkVYVF9ST1VURVJfQkFTRVBBVEggYXMgc3RyaW5nKSB8fCAnJ1xuXG5mdW5jdGlvbiBidWlsZENhbmNlbGxhdGlvbkVycm9yKCkge1xuICByZXR1cm4gT2JqZWN0LmFzc2lnbihuZXcgRXJyb3IoJ1JvdXRlIENhbmNlbGxlZCcpLCB7XG4gICAgY2FuY2VsbGVkOiB0cnVlLFxuICB9KVxufVxuXG5mdW5jdGlvbiBhZGRQYXRoUHJlZml4KHBhdGg6IHN0cmluZywgcHJlZml4Pzogc3RyaW5nKSB7XG4gIHJldHVybiBwcmVmaXggJiYgcGF0aC5zdGFydHNXaXRoKCcvJylcbiAgICA/IHBhdGggPT09ICcvJ1xuICAgICAgPyBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaChwcmVmaXgpXG4gICAgICA6IGAke3ByZWZpeH0ke3BhdGhOb1F1ZXJ5SGFzaChwYXRoKSA9PT0gJy8nID8gcGF0aC5zdWJzdHJpbmcoMSkgOiBwYXRofWBcbiAgICA6IHBhdGhcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldERvbWFpbkxvY2FsZShcbiAgcGF0aDogc3RyaW5nLFxuICBsb2NhbGU/OiBzdHJpbmcgfCBmYWxzZSxcbiAgbG9jYWxlcz86IHN0cmluZ1tdLFxuICBkb21haW5Mb2NhbGVzPzogRG9tYWluTG9jYWxlc1xuKSB7XG4gIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgbG9jYWxlID0gbG9jYWxlIHx8IG5vcm1hbGl6ZUxvY2FsZVBhdGgocGF0aCwgbG9jYWxlcykuZGV0ZWN0ZWRMb2NhbGVcblxuICAgIGNvbnN0IGRldGVjdGVkRG9tYWluID0gZGV0ZWN0RG9tYWluTG9jYWxlKGRvbWFpbkxvY2FsZXMsIHVuZGVmaW5lZCwgbG9jYWxlKVxuXG4gICAgaWYgKGRldGVjdGVkRG9tYWluKSB7XG4gICAgICByZXR1cm4gYGh0dHAke2RldGVjdGVkRG9tYWluLmh0dHAgPyAnJyA6ICdzJ306Ly8ke2RldGVjdGVkRG9tYWluLmRvbWFpbn0ke1xuICAgICAgICBiYXNlUGF0aCB8fCAnJ1xuICAgICAgfSR7bG9jYWxlID09PSBkZXRlY3RlZERvbWFpbi5kZWZhdWx0TG9jYWxlID8gJycgOiBgLyR7bG9jYWxlfWB9JHtwYXRofWBcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICByZXR1cm4gZmFsc2Vcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZExvY2FsZShcbiAgcGF0aDogc3RyaW5nLFxuICBsb2NhbGU/OiBzdHJpbmcgfCBmYWxzZSxcbiAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xuKSB7XG4gIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgcmV0dXJuIGxvY2FsZSAmJlxuICAgICAgbG9jYWxlICE9PSBkZWZhdWx0TG9jYWxlICYmXG4gICAgICAhcGF0aC5zdGFydHNXaXRoKCcvJyArIGxvY2FsZSArICcvJykgJiZcbiAgICAgIHBhdGggIT09ICcvJyArIGxvY2FsZVxuICAgICAgPyBhZGRQYXRoUHJlZml4KHBhdGgsICcvJyArIGxvY2FsZSlcbiAgICAgIDogcGF0aFxuICB9XG4gIHJldHVybiBwYXRoXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxMb2NhbGUocGF0aDogc3RyaW5nLCBsb2NhbGU/OiBzdHJpbmcpIHtcbiAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICByZXR1cm4gbG9jYWxlICYmXG4gICAgICAocGF0aC5zdGFydHNXaXRoKCcvJyArIGxvY2FsZSArICcvJykgfHwgcGF0aCA9PT0gJy8nICsgbG9jYWxlKVxuICAgICAgPyBwYXRoLnN1YnN0cihsb2NhbGUubGVuZ3RoICsgMSkgfHwgJy8nXG4gICAgICA6IHBhdGhcbiAgfVxuICByZXR1cm4gcGF0aFxufVxuXG5mdW5jdGlvbiBwYXRoTm9RdWVyeUhhc2gocGF0aDogc3RyaW5nKSB7XG4gIGNvbnN0IHF1ZXJ5SW5kZXggPSBwYXRoLmluZGV4T2YoJz8nKVxuICBjb25zdCBoYXNoSW5kZXggPSBwYXRoLmluZGV4T2YoJyMnKVxuXG4gIGlmIChxdWVyeUluZGV4ID4gLTEgfHwgaGFzaEluZGV4ID4gLTEpIHtcbiAgICBwYXRoID0gcGF0aC5zdWJzdHJpbmcoMCwgcXVlcnlJbmRleCA+IC0xID8gcXVlcnlJbmRleCA6IGhhc2hJbmRleClcbiAgfVxuICByZXR1cm4gcGF0aFxufVxuXG5leHBvcnQgZnVuY3Rpb24gaGFzQmFzZVBhdGgocGF0aDogc3RyaW5nKTogYm9vbGVhbiB7XG4gIHBhdGggPSBwYXRoTm9RdWVyeUhhc2gocGF0aClcbiAgcmV0dXJuIHBhdGggPT09IGJhc2VQYXRoIHx8IHBhdGguc3RhcnRzV2l0aChiYXNlUGF0aCArICcvJylcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZEJhc2VQYXRoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIC8vIHdlIG9ubHkgYWRkIHRoZSBiYXNlcGF0aCBvbiByZWxhdGl2ZSB1cmxzXG4gIHJldHVybiBhZGRQYXRoUHJlZml4KHBhdGgsIGJhc2VQYXRoKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVsQmFzZVBhdGgocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcGF0aCA9IHBhdGguc2xpY2UoYmFzZVBhdGgubGVuZ3RoKVxuICBpZiAoIXBhdGguc3RhcnRzV2l0aCgnLycpKSBwYXRoID0gYC8ke3BhdGh9YFxuICByZXR1cm4gcGF0aFxufVxuXG4vKipcbiAqIERldGVjdHMgd2hldGhlciBhIGdpdmVuIHVybCBpcyByb3V0YWJsZSBieSB0aGUgTmV4dC5qcyByb3V0ZXIgKGJyb3dzZXIgb25seSkuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc0xvY2FsVVJMKHVybDogc3RyaW5nKTogYm9vbGVhbiB7XG4gIC8vIHByZXZlbnQgYSBoeWRyYXRpb24gbWlzbWF0Y2ggb24gaHJlZiBmb3IgdXJsIHdpdGggYW5jaG9yIHJlZnNcbiAgaWYgKHVybC5zdGFydHNXaXRoKCcvJykgfHwgdXJsLnN0YXJ0c1dpdGgoJyMnKSkgcmV0dXJuIHRydWVcbiAgdHJ5IHtcbiAgICAvLyBhYnNvbHV0ZSB1cmxzIGNhbiBiZSBsb2NhbCBpZiB0aGV5IGFyZSBvbiB0aGUgc2FtZSBvcmlnaW5cbiAgICBjb25zdCBsb2NhdGlvbk9yaWdpbiA9IGdldExvY2F0aW9uT3JpZ2luKClcbiAgICBjb25zdCByZXNvbHZlZCA9IG5ldyBVUkwodXJsLCBsb2NhdGlvbk9yaWdpbilcbiAgICByZXR1cm4gcmVzb2x2ZWQub3JpZ2luID09PSBsb2NhdGlvbk9yaWdpbiAmJiBoYXNCYXNlUGF0aChyZXNvbHZlZC5wYXRobmFtZSlcbiAgfSBjYXRjaCAoXykge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG59XG5cbnR5cGUgVXJsID0gVXJsT2JqZWN0IHwgc3RyaW5nXG5cbmV4cG9ydCBmdW5jdGlvbiBpbnRlcnBvbGF0ZUFzKFxuICByb3V0ZTogc3RyaW5nLFxuICBhc1BhdGhuYW1lOiBzdHJpbmcsXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuKSB7XG4gIGxldCBpbnRlcnBvbGF0ZWRSb3V0ZSA9ICcnXG5cbiAgY29uc3QgZHluYW1pY1JlZ2V4ID0gZ2V0Um91dGVSZWdleChyb3V0ZSlcbiAgY29uc3QgZHluYW1pY0dyb3VwcyA9IGR5bmFtaWNSZWdleC5ncm91cHNcbiAgY29uc3QgZHluYW1pY01hdGNoZXMgPVxuICAgIC8vIFRyeSB0byBtYXRjaCB0aGUgZHluYW1pYyByb3V0ZSBhZ2FpbnN0IHRoZSBhc1BhdGhcbiAgICAoYXNQYXRobmFtZSAhPT0gcm91dGUgPyBnZXRSb3V0ZU1hdGNoZXIoZHluYW1pY1JlZ2V4KShhc1BhdGhuYW1lKSA6ICcnKSB8fFxuICAgIC8vIEZhbGwgYmFjayB0byByZWFkaW5nIHRoZSB2YWx1ZXMgZnJvbSB0aGUgaHJlZlxuICAgIC8vIFRPRE86IHNob3VsZCB0aGlzIHRha2UgcHJpb3JpdHk7IGFsc28gbmVlZCB0byBjaGFuZ2UgaW4gdGhlIHJvdXRlci5cbiAgICBxdWVyeVxuXG4gIGludGVycG9sYXRlZFJvdXRlID0gcm91dGVcbiAgY29uc3QgcGFyYW1zID0gT2JqZWN0LmtleXMoZHluYW1pY0dyb3VwcylcblxuICBpZiAoXG4gICAgIXBhcmFtcy5ldmVyeSgocGFyYW0pID0+IHtcbiAgICAgIGxldCB2YWx1ZSA9IGR5bmFtaWNNYXRjaGVzW3BhcmFtXSB8fCAnJ1xuICAgICAgY29uc3QgeyByZXBlYXQsIG9wdGlvbmFsIH0gPSBkeW5hbWljR3JvdXBzW3BhcmFtXVxuXG4gICAgICAvLyBzdXBwb3J0IHNpbmdsZS1sZXZlbCBjYXRjaC1hbGxcbiAgICAgIC8vIFRPRE86IG1vcmUgcm9idXN0IGhhbmRsaW5nIGZvciB1c2VyLWVycm9yIChwYXNzaW5nIGAvYClcbiAgICAgIGxldCByZXBsYWNlZCA9IGBbJHtyZXBlYXQgPyAnLi4uJyA6ICcnfSR7cGFyYW19XWBcbiAgICAgIGlmIChvcHRpb25hbCkge1xuICAgICAgICByZXBsYWNlZCA9IGAkeyF2YWx1ZSA/ICcvJyA6ICcnfVske3JlcGxhY2VkfV1gXG4gICAgICB9XG4gICAgICBpZiAocmVwZWF0ICYmICFBcnJheS5pc0FycmF5KHZhbHVlKSkgdmFsdWUgPSBbdmFsdWVdXG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIChvcHRpb25hbCB8fCBwYXJhbSBpbiBkeW5hbWljTWF0Y2hlcykgJiZcbiAgICAgICAgLy8gSW50ZXJwb2xhdGUgZ3JvdXAgaW50byBkYXRhIFVSTCBpZiBwcmVzZW50XG4gICAgICAgIChpbnRlcnBvbGF0ZWRSb3V0ZSA9XG4gICAgICAgICAgaW50ZXJwb2xhdGVkUm91dGUhLnJlcGxhY2UoXG4gICAgICAgICAgICByZXBsYWNlZCxcbiAgICAgICAgICAgIHJlcGVhdFxuICAgICAgICAgICAgICA/ICh2YWx1ZSBhcyBzdHJpbmdbXSlcbiAgICAgICAgICAgICAgICAgIC5tYXAoXG4gICAgICAgICAgICAgICAgICAgIC8vIHRoZXNlIHZhbHVlcyBzaG91bGQgYmUgZnVsbHkgZW5jb2RlZCBpbnN0ZWFkIG9mIGp1c3RcbiAgICAgICAgICAgICAgICAgICAgLy8gcGF0aCBkZWxpbWl0ZXIgZXNjYXBlZCBzaW5jZSB0aGV5IGFyZSBiZWluZyBpbnNlcnRlZFxuICAgICAgICAgICAgICAgICAgICAvLyBpbnRvIHRoZSBVUkwgYW5kIHdlIGV4cGVjdCBVUkwgZW5jb2RlZCBzZWdtZW50c1xuICAgICAgICAgICAgICAgICAgICAvLyB3aGVuIHBhcnNpbmcgZHluYW1pYyByb3V0ZSBwYXJhbXNcbiAgICAgICAgICAgICAgICAgICAgKHNlZ21lbnQpID0+IGVuY29kZVVSSUNvbXBvbmVudChzZWdtZW50KVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgLmpvaW4oJy8nKVxuICAgICAgICAgICAgICA6IGVuY29kZVVSSUNvbXBvbmVudCh2YWx1ZSBhcyBzdHJpbmcpXG4gICAgICAgICAgKSB8fCAnLycpXG4gICAgICApXG4gICAgfSlcbiAgKSB7XG4gICAgaW50ZXJwb2xhdGVkUm91dGUgPSAnJyAvLyBkaWQgbm90IHNhdGlzZnkgYWxsIHJlcXVpcmVtZW50c1xuXG4gICAgLy8gbi5iLiBXZSBpZ25vcmUgdGhpcyBlcnJvciBiZWNhdXNlIHdlIGhhbmRsZSB3YXJuaW5nIGZvciB0aGlzIGNhc2UgaW5cbiAgICAvLyBkZXZlbG9wbWVudCBpbiB0aGUgYDxMaW5rPmAgY29tcG9uZW50IGRpcmVjdGx5LlxuICB9XG4gIHJldHVybiB7XG4gICAgcGFyYW1zLFxuICAgIHJlc3VsdDogaW50ZXJwb2xhdGVkUm91dGUsXG4gIH1cbn1cblxuZnVuY3Rpb24gb21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSwgcGFyYW1zOiBzdHJpbmdbXSkge1xuICBjb25zdCBmaWx0ZXJlZFF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSA9IHt9XG5cbiAgT2JqZWN0LmtleXMocXVlcnkpLmZvckVhY2goKGtleSkgPT4ge1xuICAgIGlmICghcGFyYW1zLmluY2x1ZGVzKGtleSkpIHtcbiAgICAgIGZpbHRlcmVkUXVlcnlba2V5XSA9IHF1ZXJ5W2tleV1cbiAgICB9XG4gIH0pXG4gIHJldHVybiBmaWx0ZXJlZFF1ZXJ5XG59XG5cbi8qKlxuICogUmVzb2x2ZXMgYSBnaXZlbiBoeXBlcmxpbmsgd2l0aCBhIGNlcnRhaW4gcm91dGVyIHN0YXRlIChiYXNlUGF0aCBub3QgaW5jbHVkZWQpLlxuICogUHJlc2VydmVzIGFic29sdXRlIHVybHMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZXNvbHZlSHJlZihcbiAgY3VycmVudFBhdGg6IHN0cmluZyxcbiAgaHJlZjogVXJsLFxuICByZXNvbHZlQXM/OiBib29sZWFuXG4pOiBzdHJpbmcge1xuICAvLyB3ZSB1c2UgYSBkdW1teSBiYXNlIHVybCBmb3IgcmVsYXRpdmUgdXJsc1xuICBjb25zdCBiYXNlID0gbmV3IFVSTChjdXJyZW50UGF0aCwgJ2h0dHA6Ly9uJylcbiAgY29uc3QgdXJsQXNTdHJpbmcgPVxuICAgIHR5cGVvZiBocmVmID09PSAnc3RyaW5nJyA/IGhyZWYgOiBmb3JtYXRXaXRoVmFsaWRhdGlvbihocmVmKVxuICAvLyBSZXR1cm4gYmVjYXVzZSBpdCBjYW5ub3QgYmUgcm91dGVkIGJ5IHRoZSBOZXh0LmpzIHJvdXRlclxuICBpZiAoIWlzTG9jYWxVUkwodXJsQXNTdHJpbmcpKSB7XG4gICAgcmV0dXJuIChyZXNvbHZlQXMgPyBbdXJsQXNTdHJpbmddIDogdXJsQXNTdHJpbmcpIGFzIHN0cmluZ1xuICB9XG4gIHRyeSB7XG4gICAgY29uc3QgZmluYWxVcmwgPSBuZXcgVVJMKHVybEFzU3RyaW5nLCBiYXNlKVxuICAgIGZpbmFsVXJsLnBhdGhuYW1lID0gbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2goZmluYWxVcmwucGF0aG5hbWUpXG4gICAgbGV0IGludGVycG9sYXRlZEFzID0gJydcblxuICAgIGlmIChcbiAgICAgIGlzRHluYW1pY1JvdXRlKGZpbmFsVXJsLnBhdGhuYW1lKSAmJlxuICAgICAgZmluYWxVcmwuc2VhcmNoUGFyYW1zICYmXG4gICAgICByZXNvbHZlQXNcbiAgICApIHtcbiAgICAgIGNvbnN0IHF1ZXJ5ID0gc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShmaW5hbFVybC5zZWFyY2hQYXJhbXMpXG5cbiAgICAgIGNvbnN0IHsgcmVzdWx0LCBwYXJhbXMgfSA9IGludGVycG9sYXRlQXMoXG4gICAgICAgIGZpbmFsVXJsLnBhdGhuYW1lLFxuICAgICAgICBmaW5hbFVybC5wYXRobmFtZSxcbiAgICAgICAgcXVlcnlcbiAgICAgIClcblxuICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICBpbnRlcnBvbGF0ZWRBcyA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHtcbiAgICAgICAgICBwYXRobmFtZTogcmVzdWx0LFxuICAgICAgICAgIGhhc2g6IGZpbmFsVXJsLmhhc2gsXG4gICAgICAgICAgcXVlcnk6IG9taXRQYXJtc0Zyb21RdWVyeShxdWVyeSwgcGFyYW1zKSxcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBpZiB0aGUgb3JpZ2luIGRpZG4ndCBjaGFuZ2UsIGl0IG1lYW5zIHdlIHJlY2VpdmVkIGEgcmVsYXRpdmUgaHJlZlxuICAgIGNvbnN0IHJlc29sdmVkSHJlZiA9XG4gICAgICBmaW5hbFVybC5vcmlnaW4gPT09IGJhc2Uub3JpZ2luXG4gICAgICAgID8gZmluYWxVcmwuaHJlZi5zbGljZShmaW5hbFVybC5vcmlnaW4ubGVuZ3RoKVxuICAgICAgICA6IGZpbmFsVXJsLmhyZWZcblxuICAgIHJldHVybiAocmVzb2x2ZUFzXG4gICAgICA/IFtyZXNvbHZlZEhyZWYsIGludGVycG9sYXRlZEFzIHx8IHJlc29sdmVkSHJlZl1cbiAgICAgIDogcmVzb2x2ZWRIcmVmKSBhcyBzdHJpbmdcbiAgfSBjYXRjaCAoXykge1xuICAgIHJldHVybiAocmVzb2x2ZUFzID8gW3VybEFzU3RyaW5nXSA6IHVybEFzU3RyaW5nKSBhcyBzdHJpbmdcbiAgfVxufVxuXG5mdW5jdGlvbiBzdHJpcE9yaWdpbih1cmw6IHN0cmluZykge1xuICBjb25zdCBvcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbigpXG5cbiAgcmV0dXJuIHVybC5zdGFydHNXaXRoKG9yaWdpbikgPyB1cmwuc3Vic3RyaW5nKG9yaWdpbi5sZW5ndGgpIDogdXJsXG59XG5cbmZ1bmN0aW9uIHByZXBhcmVVcmxBcyhyb3V0ZXI6IE5leHRSb3V0ZXIsIHVybDogVXJsLCBhcz86IFVybCkge1xuICAvLyBJZiB1cmwgYW5kIGFzIHByb3ZpZGVkIGFzIGFuIG9iamVjdCByZXByZXNlbnRhdGlvbixcbiAgLy8gd2UnbGwgZm9ybWF0IHRoZW0gaW50byB0aGUgc3RyaW5nIHZlcnNpb24gaGVyZS5cbiAgbGV0IFtyZXNvbHZlZEhyZWYsIHJlc29sdmVkQXNdID0gcmVzb2x2ZUhyZWYocm91dGVyLnBhdGhuYW1lLCB1cmwsIHRydWUpXG4gIGNvbnN0IG9yaWdpbiA9IGdldExvY2F0aW9uT3JpZ2luKClcbiAgY29uc3QgaHJlZkhhZE9yaWdpbiA9IHJlc29sdmVkSHJlZi5zdGFydHNXaXRoKG9yaWdpbilcbiAgY29uc3QgYXNIYWRPcmlnaW4gPSByZXNvbHZlZEFzICYmIHJlc29sdmVkQXMuc3RhcnRzV2l0aChvcmlnaW4pXG5cbiAgcmVzb2x2ZWRIcmVmID0gc3RyaXBPcmlnaW4ocmVzb2x2ZWRIcmVmKVxuICByZXNvbHZlZEFzID0gcmVzb2x2ZWRBcyA/IHN0cmlwT3JpZ2luKHJlc29sdmVkQXMpIDogcmVzb2x2ZWRBc1xuXG4gIGNvbnN0IHByZXBhcmVkVXJsID0gaHJlZkhhZE9yaWdpbiA/IHJlc29sdmVkSHJlZiA6IGFkZEJhc2VQYXRoKHJlc29sdmVkSHJlZilcbiAgY29uc3QgcHJlcGFyZWRBcyA9IGFzXG4gICAgPyBzdHJpcE9yaWdpbihyZXNvbHZlSHJlZihyb3V0ZXIucGF0aG5hbWUsIGFzKSlcbiAgICA6IHJlc29sdmVkQXMgfHwgcmVzb2x2ZWRIcmVmXG5cbiAgcmV0dXJuIHtcbiAgICB1cmw6IHByZXBhcmVkVXJsLFxuICAgIGFzOiBhc0hhZE9yaWdpbiA/IHByZXBhcmVkQXMgOiBhZGRCYXNlUGF0aChwcmVwYXJlZEFzKSxcbiAgfVxufVxuXG5mdW5jdGlvbiByZXNvbHZlRHluYW1pY1JvdXRlKFxuICBwYXJzZWRIcmVmOiBVcmxPYmplY3QsXG4gIHBhZ2VzOiBzdHJpbmdbXSxcbiAgYXBwbHlCYXNlUGF0aCA9IHRydWVcbikge1xuICBjb25zdCB7IHBhdGhuYW1lIH0gPSBwYXJzZWRIcmVmXG4gIGNvbnN0IGNsZWFuUGF0aG5hbWUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChcbiAgICBkZW5vcm1hbGl6ZVBhZ2VQYXRoKGFwcGx5QmFzZVBhdGggPyBkZWxCYXNlUGF0aChwYXRobmFtZSEpIDogcGF0aG5hbWUhKVxuICApXG5cbiAgaWYgKGNsZWFuUGF0aG5hbWUgPT09ICcvNDA0JyB8fCBjbGVhblBhdGhuYW1lID09PSAnL19lcnJvcicpIHtcbiAgICByZXR1cm4gcGFyc2VkSHJlZlxuICB9XG5cbiAgLy8gaGFuZGxlIHJlc29sdmluZyBocmVmIGZvciBkeW5hbWljIHJvdXRlc1xuICBpZiAoIXBhZ2VzLmluY2x1ZGVzKGNsZWFuUGF0aG5hbWUhKSkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBhcnJheS1jYWxsYmFjay1yZXR1cm5cbiAgICBwYWdlcy5zb21lKChwYWdlKSA9PiB7XG4gICAgICBpZiAoaXNEeW5hbWljUm91dGUocGFnZSkgJiYgZ2V0Um91dGVSZWdleChwYWdlKS5yZS50ZXN0KGNsZWFuUGF0aG5hbWUhKSkge1xuICAgICAgICBwYXJzZWRIcmVmLnBhdGhuYW1lID0gYXBwbHlCYXNlUGF0aCA/IGFkZEJhc2VQYXRoKHBhZ2UpIDogcGFnZVxuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgfVxuICAgIH0pXG4gIH1cbiAgcGFyc2VkSHJlZi5wYXRobmFtZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhcnNlZEhyZWYucGF0aG5hbWUhKVxuICByZXR1cm4gcGFyc2VkSHJlZlxufVxuXG5leHBvcnQgdHlwZSBCYXNlUm91dGVyID0ge1xuICByb3V0ZTogc3RyaW5nXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGFzUGF0aDogc3RyaW5nXG4gIGJhc2VQYXRoOiBzdHJpbmdcbiAgbG9jYWxlPzogc3RyaW5nXG4gIGxvY2FsZXM/OiBzdHJpbmdbXVxuICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG4gIGRvbWFpbkxvY2FsZXM/OiBEb21haW5Mb2NhbGVzXG4gIGlzTG9jYWxlRG9tYWluOiBib29sZWFuXG59XG5cbmV4cG9ydCB0eXBlIE5leHRSb3V0ZXIgPSBCYXNlUm91dGVyICZcbiAgUGljazxcbiAgICBSb3V0ZXIsXG4gICAgfCAncHVzaCdcbiAgICB8ICdyZXBsYWNlJ1xuICAgIHwgJ3JlbG9hZCdcbiAgICB8ICdiYWNrJ1xuICAgIHwgJ3ByZWZldGNoJ1xuICAgIHwgJ2JlZm9yZVBvcFN0YXRlJ1xuICAgIHwgJ2V2ZW50cydcbiAgICB8ICdpc0ZhbGxiYWNrJ1xuICAgIHwgJ2lzUmVhZHknXG4gICAgfCAnaXNQcmV2aWV3J1xuICA+XG5cbmV4cG9ydCB0eXBlIFByZWZldGNoT3B0aW9ucyA9IHtcbiAgcHJpb3JpdHk/OiBib29sZWFuXG4gIGxvY2FsZT86IHN0cmluZyB8IGZhbHNlXG59XG5cbmV4cG9ydCB0eXBlIFByaXZhdGVSb3V0ZUluZm8gPVxuICB8IChPbWl0PENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mbywgJ3N0eWxlU2hlZXRzJz4gJiB7IGluaXRpYWw6IHRydWUgfSlcbiAgfCBDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm9cblxuZXhwb3J0IHR5cGUgQ29tcGxldGVQcml2YXRlUm91dGVJbmZvID0ge1xuICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgc3R5bGVTaGVldHM6IFN0eWxlU2hlZXRUdXBsZVtdXG4gIF9fTl9TU0c/OiBib29sZWFuXG4gIF9fTl9TU1A/OiBib29sZWFuXG4gIHByb3BzPzogUmVjb3JkPHN0cmluZywgYW55PlxuICBlcnI/OiBFcnJvclxuICBlcnJvcj86IGFueVxufVxuXG5leHBvcnQgdHlwZSBBcHBQcm9wcyA9IFBpY2s8Q29tcGxldGVQcml2YXRlUm91dGVJbmZvLCAnQ29tcG9uZW50JyB8ICdlcnInPiAmIHtcbiAgcm91dGVyOiBSb3V0ZXJcbn0gJiBSZWNvcmQ8c3RyaW5nLCBhbnk+XG5leHBvcnQgdHlwZSBBcHBDb21wb25lbnQgPSBDb21wb25lbnRUeXBlPEFwcFByb3BzPlxuXG50eXBlIFN1YnNjcmlwdGlvbiA9IChcbiAgZGF0YTogUHJpdmF0ZVJvdXRlSW5mbyxcbiAgQXBwOiBBcHBDb21wb25lbnQsXG4gIHJlc2V0U2Nyb2xsOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH0gfCBudWxsXG4pID0+IFByb21pc2U8dm9pZD5cblxudHlwZSBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrID0gKHN0YXRlOiBOZXh0SGlzdG9yeVN0YXRlKSA9PiBib29sZWFuXG5cbnR5cGUgQ29tcG9uZW50TG9hZENhbmNlbCA9ICgoKSA9PiB2b2lkKSB8IG51bGxcblxudHlwZSBIaXN0b3J5TWV0aG9kID0gJ3JlcGxhY2VTdGF0ZScgfCAncHVzaFN0YXRlJ1xuXG5jb25zdCBtYW51YWxTY3JvbGxSZXN0b3JhdGlvbiA9XG4gIHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04gJiZcbiAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgJ3Njcm9sbFJlc3RvcmF0aW9uJyBpbiB3aW5kb3cuaGlzdG9yeSAmJlxuICAhIShmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgIGxldCB2ID0gJ19fbmV4dCdcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZXF1ZW5jZXNcbiAgICAgIHJldHVybiBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKHYsIHYpLCBzZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKHYpLCB0cnVlXG4gICAgfSBjYXRjaCAobikge31cbiAgfSkoKVxuXG5jb25zdCBTU0dfREFUQV9OT1RfRk9VTkQgPSBTeW1ib2woJ1NTR19EQVRBX05PVF9GT1VORCcpXG5cbmZ1bmN0aW9uIGZldGNoUmV0cnkodXJsOiBzdHJpbmcsIGF0dGVtcHRzOiBudW1iZXIpOiBQcm9taXNlPGFueT4ge1xuICByZXR1cm4gZmV0Y2godXJsLCB7XG4gICAgLy8gQ29va2llcyBhcmUgcmVxdWlyZWQgdG8gYmUgcHJlc2VudCBmb3IgTmV4dC5qcycgU1NHIFwiUHJldmlldyBNb2RlXCIuXG4gICAgLy8gQ29va2llcyBtYXkgYWxzbyBiZSByZXF1aXJlZCBmb3IgYGdldFNlcnZlclNpZGVQcm9wc2AuXG4gICAgLy9cbiAgICAvLyA+IGBmZXRjaGAgd29u4oCZdCBzZW5kIGNvb2tpZXMsIHVubGVzcyB5b3Ugc2V0IHRoZSBjcmVkZW50aWFscyBpbml0XG4gICAgLy8gPiBvcHRpb24uXG4gICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0ZldGNoX0FQSS9Vc2luZ19GZXRjaFxuICAgIC8vXG4gICAgLy8gPiBGb3IgbWF4aW11bSBicm93c2VyIGNvbXBhdGliaWxpdHkgd2hlbiBpdCBjb21lcyB0byBzZW5kaW5nICZcbiAgICAvLyA+IHJlY2VpdmluZyBjb29raWVzLCBhbHdheXMgc3VwcGx5IHRoZSBgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbidgXG4gICAgLy8gPiBvcHRpb24gaW5zdGVhZCBvZiByZWx5aW5nIG9uIHRoZSBkZWZhdWx0LlxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9naXRodWIvZmV0Y2gjY2F2ZWF0c1xuICAgIGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nLFxuICB9KS50aGVuKChyZXMpID0+IHtcbiAgICBpZiAoIXJlcy5vaykge1xuICAgICAgaWYgKGF0dGVtcHRzID4gMSAmJiByZXMuc3RhdHVzID49IDUwMCkge1xuICAgICAgICByZXR1cm4gZmV0Y2hSZXRyeSh1cmwsIGF0dGVtcHRzIC0gMSlcbiAgICAgIH1cbiAgICAgIGlmIChyZXMuc3RhdHVzID09PSA0MDQpIHtcbiAgICAgICAgcmV0dXJuIHJlcy5qc29uKCkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgIGlmIChkYXRhLm5vdEZvdW5kKSB7XG4gICAgICAgICAgICByZXR1cm4geyBub3RGb3VuZDogU1NHX0RBVEFfTk9UX0ZPVU5EIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdGF0aWMgcHJvcHNgKVxuICAgICAgICB9KVxuICAgICAgfVxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdGF0aWMgcHJvcHNgKVxuICAgIH1cbiAgICByZXR1cm4gcmVzLmpzb24oKVxuICB9KVxufVxuXG5mdW5jdGlvbiBmZXRjaE5leHREYXRhKGRhdGFIcmVmOiBzdHJpbmcsIGlzU2VydmVyUmVuZGVyOiBib29sZWFuKSB7XG4gIHJldHVybiBmZXRjaFJldHJ5KGRhdGFIcmVmLCBpc1NlcnZlclJlbmRlciA/IDMgOiAxKS5jYXRjaCgoZXJyOiBFcnJvcikgPT4ge1xuICAgIC8vIFdlIHNob3VsZCBvbmx5IHRyaWdnZXIgYSBzZXJ2ZXItc2lkZSB0cmFuc2l0aW9uIGlmIHRoaXMgd2FzIGNhdXNlZFxuICAgIC8vIG9uIGEgY2xpZW50LXNpZGUgdHJhbnNpdGlvbi4gT3RoZXJ3aXNlLCB3ZSdkIGdldCBpbnRvIGFuIGluZmluaXRlXG4gICAgLy8gbG9vcC5cblxuICAgIGlmICghaXNTZXJ2ZXJSZW5kZXIpIHtcbiAgICAgIG1hcmtBc3NldEVycm9yKGVycilcbiAgICB9XG4gICAgdGhyb3cgZXJyXG4gIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJvdXRlciBpbXBsZW1lbnRzIEJhc2VSb3V0ZXIge1xuICByb3V0ZTogc3RyaW5nXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGFzUGF0aDogc3RyaW5nXG4gIGJhc2VQYXRoOiBzdHJpbmdcblxuICAvKipcbiAgICogTWFwIG9mIGFsbCBjb21wb25lbnRzIGxvYWRlZCBpbiBgUm91dGVyYFxuICAgKi9cbiAgY29tcG9uZW50czogeyBbcGF0aG5hbWU6IHN0cmluZ106IFByaXZhdGVSb3V0ZUluZm8gfVxuICAvLyBTdGF0aWMgRGF0YSBDYWNoZVxuICBzZGM6IHsgW2FzUGF0aDogc3RyaW5nXTogb2JqZWN0IH0gPSB7fVxuICAvLyBJbi1mbGlnaHQgU2VydmVyIERhdGEgUmVxdWVzdHMsIGZvciBkZWR1cGluZ1xuICBzZHI6IHsgW2FzUGF0aDogc3RyaW5nXTogUHJvbWlzZTxvYmplY3Q+IH0gPSB7fVxuXG4gIHN1YjogU3Vic2NyaXB0aW9uXG4gIGNsYzogQ29tcG9uZW50TG9hZENhbmNlbFxuICBwYWdlTG9hZGVyOiBhbnlcbiAgX2JwczogQmVmb3JlUG9wU3RhdGVDYWxsYmFjayB8IHVuZGVmaW5lZFxuICBldmVudHM6IE1pdHRFbWl0dGVyXG4gIF93cmFwQXBwOiAoQXBwOiBBcHBDb21wb25lbnQpID0+IGFueVxuICBpc1NzcjogYm9vbGVhblxuICBpc0ZhbGxiYWNrOiBib29sZWFuXG4gIF9pbkZsaWdodFJvdXRlPzogc3RyaW5nXG4gIF9zaGFsbG93PzogYm9vbGVhblxuICBsb2NhbGU/OiBzdHJpbmdcbiAgbG9jYWxlcz86IHN0cmluZ1tdXG4gIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcbiAgZG9tYWluTG9jYWxlcz86IERvbWFpbkxvY2FsZXNcbiAgaXNSZWFkeTogYm9vbGVhblxuICBpc1ByZXZpZXc6IGJvb2xlYW5cbiAgaXNMb2NhbGVEb21haW46IGJvb2xlYW5cblxuICBwcml2YXRlIF9pZHg6IG51bWJlciA9IDBcblxuICBzdGF0aWMgZXZlbnRzOiBNaXR0RW1pdHRlciA9IG1pdHQoKVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICAgIGFzOiBzdHJpbmcsXG4gICAge1xuICAgICAgaW5pdGlhbFByb3BzLFxuICAgICAgcGFnZUxvYWRlcixcbiAgICAgIEFwcCxcbiAgICAgIHdyYXBBcHAsXG4gICAgICBDb21wb25lbnQsXG4gICAgICBlcnIsXG4gICAgICBzdWJzY3JpcHRpb24sXG4gICAgICBpc0ZhbGxiYWNrLFxuICAgICAgbG9jYWxlLFxuICAgICAgbG9jYWxlcyxcbiAgICAgIGRlZmF1bHRMb2NhbGUsXG4gICAgICBkb21haW5Mb2NhbGVzLFxuICAgICAgaXNQcmV2aWV3LFxuICAgIH06IHtcbiAgICAgIHN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uXG4gICAgICBpbml0aWFsUHJvcHM6IGFueVxuICAgICAgcGFnZUxvYWRlcjogYW55XG4gICAgICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgICAgIEFwcDogQXBwQ29tcG9uZW50XG4gICAgICB3cmFwQXBwOiAoQXBwOiBBcHBDb21wb25lbnQpID0+IGFueVxuICAgICAgZXJyPzogRXJyb3JcbiAgICAgIGlzRmFsbGJhY2s6IGJvb2xlYW5cbiAgICAgIGxvY2FsZT86IHN0cmluZ1xuICAgICAgbG9jYWxlcz86IHN0cmluZ1tdXG4gICAgICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG4gICAgICBkb21haW5Mb2NhbGVzPzogRG9tYWluTG9jYWxlc1xuICAgICAgaXNQcmV2aWV3PzogYm9vbGVhblxuICAgIH1cbiAgKSB7XG4gICAgLy8gcmVwcmVzZW50cyB0aGUgY3VycmVudCBjb21wb25lbnQga2V5XG4gICAgdGhpcy5yb3V0ZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKVxuXG4gICAgLy8gc2V0IHVwIHRoZSBjb21wb25lbnQgY2FjaGUgKGJ5IHJvdXRlIGtleXMpXG4gICAgdGhpcy5jb21wb25lbnRzID0ge31cbiAgICAvLyBXZSBzaG91bGQgbm90IGtlZXAgdGhlIGNhY2hlLCBpZiB0aGVyZSdzIGFuIGVycm9yXG4gICAgLy8gT3RoZXJ3aXNlLCB0aGlzIGNhdXNlIGlzc3VlcyB3aGVuIHdoZW4gZ29pbmcgYmFjayBhbmRcbiAgICAvLyBjb21lIGFnYWluIHRvIHRoZSBlcnJvcmVkIHBhZ2UuXG4gICAgaWYgKHBhdGhuYW1lICE9PSAnL19lcnJvcicpIHtcbiAgICAgIHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSA9IHtcbiAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICBpbml0aWFsOiB0cnVlLFxuICAgICAgICBwcm9wczogaW5pdGlhbFByb3BzLFxuICAgICAgICBlcnIsXG4gICAgICAgIF9fTl9TU0c6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTRyxcbiAgICAgICAgX19OX1NTUDogaW5pdGlhbFByb3BzICYmIGluaXRpYWxQcm9wcy5fX05fU1NQLFxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuY29tcG9uZW50c1snL19hcHAnXSA9IHtcbiAgICAgIENvbXBvbmVudDogQXBwIGFzIENvbXBvbmVudFR5cGUsXG4gICAgICBzdHlsZVNoZWV0czogW1xuICAgICAgICAvKiAvX2FwcCBkb2VzIG5vdCBuZWVkIGl0cyBzdHlsZXNoZWV0cyBtYW5hZ2VkICovXG4gICAgICBdLFxuICAgIH1cblxuICAgIC8vIEJhY2t3YXJkcyBjb21wYXQgZm9yIFJvdXRlci5yb3V0ZXIuZXZlbnRzXG4gICAgLy8gVE9ETzogU2hvdWxkIGJlIHJlbW92ZSB0aGUgZm9sbG93aW5nIG1ham9yIHZlcnNpb24gYXMgaXQgd2FzIG5ldmVyIGRvY3VtZW50ZWRcbiAgICB0aGlzLmV2ZW50cyA9IFJvdXRlci5ldmVudHNcblxuICAgIHRoaXMucGFnZUxvYWRlciA9IHBhZ2VMb2FkZXJcbiAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICB0aGlzLnF1ZXJ5ID0gcXVlcnlcbiAgICAvLyBpZiBhdXRvIHByZXJlbmRlcmVkIGFuZCBkeW5hbWljIHJvdXRlIHdhaXQgdG8gdXBkYXRlIGFzUGF0aFxuICAgIC8vIHVudGlsIGFmdGVyIG1vdW50IHRvIHByZXZlbnQgaHlkcmF0aW9uIG1pc21hdGNoXG4gICAgY29uc3QgYXV0b0V4cG9ydER5bmFtaWMgPVxuICAgICAgaXNEeW5hbWljUm91dGUocGF0aG5hbWUpICYmIHNlbGYuX19ORVhUX0RBVEFfXy5hdXRvRXhwb3J0XG5cbiAgICB0aGlzLmFzUGF0aCA9IGF1dG9FeHBvcnREeW5hbWljID8gcGF0aG5hbWUgOiBhc1xuICAgIHRoaXMuYmFzZVBhdGggPSBiYXNlUGF0aFxuICAgIHRoaXMuc3ViID0gc3Vic2NyaXB0aW9uXG4gICAgdGhpcy5jbGMgPSBudWxsXG4gICAgdGhpcy5fd3JhcEFwcCA9IHdyYXBBcHBcbiAgICAvLyBtYWtlIHN1cmUgdG8gaWdub3JlIGV4dHJhIHBvcFN0YXRlIGluIHNhZmFyaSBvbiBuYXZpZ2F0aW5nXG4gICAgLy8gYmFjayBmcm9tIGV4dGVybmFsIHNpdGVcbiAgICB0aGlzLmlzU3NyID0gdHJ1ZVxuXG4gICAgdGhpcy5pc0ZhbGxiYWNrID0gaXNGYWxsYmFja1xuXG4gICAgdGhpcy5pc1JlYWR5ID0gISEoXG4gICAgICBzZWxmLl9fTkVYVF9EQVRBX18uZ3NzcCB8fFxuICAgICAgc2VsZi5fX05FWFRfREFUQV9fLmdpcCB8fFxuICAgICAgKCFhdXRvRXhwb3J0RHluYW1pYyAmJiAhc2VsZi5sb2NhdGlvbi5zZWFyY2gpXG4gICAgKVxuICAgIHRoaXMuaXNQcmV2aWV3ID0gISFpc1ByZXZpZXdcbiAgICB0aGlzLmlzTG9jYWxlRG9tYWluID0gZmFsc2VcblxuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICB0aGlzLmxvY2FsZSA9IGxvY2FsZVxuICAgICAgdGhpcy5sb2NhbGVzID0gbG9jYWxlc1xuICAgICAgdGhpcy5kZWZhdWx0TG9jYWxlID0gZGVmYXVsdExvY2FsZVxuICAgICAgdGhpcy5kb21haW5Mb2NhbGVzID0gZG9tYWluTG9jYWxlc1xuICAgICAgdGhpcy5pc0xvY2FsZURvbWFpbiA9ICEhZGV0ZWN0RG9tYWluTG9jYWxlKFxuICAgICAgICBkb21haW5Mb2NhbGVzLFxuICAgICAgICBzZWxmLmxvY2F0aW9uLmhvc3RuYW1lXG4gICAgICApXG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBtYWtlIHN1cmUgXCJhc1wiIGRvZXNuJ3Qgc3RhcnQgd2l0aCBkb3VibGUgc2xhc2hlcyBvciBlbHNlIGl0IGNhblxuICAgICAgLy8gdGhyb3cgYW4gZXJyb3IgYXMgaXQncyBjb25zaWRlcmVkIGludmFsaWRcbiAgICAgIGlmIChhcy5zdWJzdHIoMCwgMikgIT09ICcvLycpIHtcbiAgICAgICAgLy8gaW4gb3JkZXIgZm9yIGBlLnN0YXRlYCB0byB3b3JrIG9uIHRoZSBgb25wb3BzdGF0ZWAgZXZlbnRcbiAgICAgICAgLy8gd2UgaGF2ZSB0byByZWdpc3RlciB0aGUgaW5pdGlhbCByb3V0ZSB1cG9uIGluaXRpYWxpemF0aW9uXG4gICAgICAgIHRoaXMuY2hhbmdlU3RhdGUoXG4gICAgICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZTogYWRkQmFzZVBhdGgocGF0aG5hbWUpLCBxdWVyeSB9KSxcbiAgICAgICAgICBnZXRVUkwoKSxcbiAgICAgICAgICB7IGxvY2FsZSB9XG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJywgdGhpcy5vblBvcFN0YXRlKVxuXG4gICAgICAvLyBlbmFibGUgY3VzdG9tIHNjcm9sbCByZXN0b3JhdGlvbiBoYW5kbGluZyB3aGVuIGF2YWlsYWJsZVxuICAgICAgLy8gb3RoZXJ3aXNlIGZhbGxiYWNrIHRvIGJyb3dzZXIncyBkZWZhdWx0IGhhbmRsaW5nXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTikge1xuICAgICAgICBpZiAobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24pIHtcbiAgICAgICAgICB3aW5kb3cuaGlzdG9yeS5zY3JvbGxSZXN0b3JhdGlvbiA9ICdtYW51YWwnXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBvblBvcFN0YXRlID0gKGU6IFBvcFN0YXRlRXZlbnQpOiB2b2lkID0+IHtcbiAgICBjb25zdCBzdGF0ZSA9IGUuc3RhdGUgYXMgSGlzdG9yeVN0YXRlXG5cbiAgICBpZiAoIXN0YXRlKSB7XG4gICAgICAvLyBXZSBnZXQgc3RhdGUgYXMgdW5kZWZpbmVkIGZvciB0d28gcmVhc29ucy5cbiAgICAgIC8vICAxLiBXaXRoIG9sZGVyIHNhZmFyaSAoPCA4KSBhbmQgb2xkZXIgY2hyb21lICg8IDM0KVxuICAgICAgLy8gIDIuIFdoZW4gdGhlIFVSTCBjaGFuZ2VkIHdpdGggI1xuICAgICAgLy9cbiAgICAgIC8vIEluIHRoZSBib3RoIGNhc2VzLCB3ZSBkb24ndCBuZWVkIHRvIHByb2NlZWQgYW5kIGNoYW5nZSB0aGUgcm91dGUuXG4gICAgICAvLyAoYXMgaXQncyBhbHJlYWR5IGNoYW5nZWQpXG4gICAgICAvLyBCdXQgd2UgY2FuIHNpbXBseSByZXBsYWNlIHRoZSBzdGF0ZSB3aXRoIHRoZSBuZXcgY2hhbmdlcy5cbiAgICAgIC8vIEFjdHVhbGx5LCBmb3IgKDEpIHdlIGRvbid0IG5lZWQgdG8gbm90aGluZy4gQnV0IGl0J3MgaGFyZCB0byBkZXRlY3QgdGhhdCBldmVudC5cbiAgICAgIC8vIFNvLCBkb2luZyB0aGUgZm9sbG93aW5nIGZvciAoMSkgZG9lcyBubyBoYXJtLlxuICAgICAgY29uc3QgeyBwYXRobmFtZSwgcXVlcnkgfSA9IHRoaXNcbiAgICAgIHRoaXMuY2hhbmdlU3RhdGUoXG4gICAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgICBmb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lOiBhZGRCYXNlUGF0aChwYXRobmFtZSksIHF1ZXJ5IH0pLFxuICAgICAgICBnZXRVUkwoKVxuICAgICAgKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKCFzdGF0ZS5fX04pIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGxldCBmb3JjZWRTY3JvbGw6IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfSB8IHVuZGVmaW5lZFxuICAgIGNvbnN0IHsgdXJsLCBhcywgb3B0aW9ucywgaWR4IH0gPSBzdGF0ZVxuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKSB7XG4gICAgICBpZiAobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24pIHtcbiAgICAgICAgaWYgKHRoaXMuX2lkeCAhPT0gaWR4KSB7XG4gICAgICAgICAgLy8gU25hcHNob3QgY3VycmVudCBzY3JvbGwgcG9zaXRpb246XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oXG4gICAgICAgICAgICAgICdfX25leHRfc2Nyb2xsXycgKyB0aGlzLl9pZHgsXG4gICAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KHsgeDogc2VsZi5wYWdlWE9mZnNldCwgeTogc2VsZi5wYWdlWU9mZnNldCB9KVxuICAgICAgICAgICAgKVxuICAgICAgICAgIH0gY2F0Y2gge31cblxuICAgICAgICAgIC8vIFJlc3RvcmUgb2xkIHNjcm9sbCBwb3NpdGlvbjpcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgdiA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ19fbmV4dF9zY3JvbGxfJyArIGlkeClcbiAgICAgICAgICAgIGZvcmNlZFNjcm9sbCA9IEpTT04ucGFyc2UodiEpXG4gICAgICAgICAgfSBjYXRjaCB7XG4gICAgICAgICAgICBmb3JjZWRTY3JvbGwgPSB7IHg6IDAsIHk6IDAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLl9pZHggPSBpZHhcblxuICAgIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHBhcnNlUmVsYXRpdmVVcmwodXJsKVxuXG4gICAgLy8gTWFrZSBzdXJlIHdlIGRvbid0IHJlLXJlbmRlciBvbiBpbml0aWFsIGxvYWQsXG4gICAgLy8gY2FuIGJlIGNhdXNlZCBieSBuYXZpZ2F0aW5nIGJhY2sgZnJvbSBhbiBleHRlcm5hbCBzaXRlXG4gICAgaWYgKHRoaXMuaXNTc3IgJiYgYXMgPT09IHRoaXMuYXNQYXRoICYmIHBhdGhuYW1lID09PSB0aGlzLnBhdGhuYW1lKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgZG93bnN0cmVhbSBhcHBsaWNhdGlvbiByZXR1cm5zIGZhbHN5LCByZXR1cm4uXG4gICAgLy8gVGhleSB3aWxsIHRoZW4gYmUgcmVzcG9uc2libGUgZm9yIGhhbmRsaW5nIHRoZSBldmVudC5cbiAgICBpZiAodGhpcy5fYnBzICYmICF0aGlzLl9icHMoc3RhdGUpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLmNoYW5nZShcbiAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgdXJsLFxuICAgICAgYXMsXG4gICAgICBPYmplY3QuYXNzaWduPHt9LCBUcmFuc2l0aW9uT3B0aW9ucywgVHJhbnNpdGlvbk9wdGlvbnM+KHt9LCBvcHRpb25zLCB7XG4gICAgICAgIHNoYWxsb3c6IG9wdGlvbnMuc2hhbGxvdyAmJiB0aGlzLl9zaGFsbG93LFxuICAgICAgICBsb2NhbGU6IG9wdGlvbnMubG9jYWxlIHx8IHRoaXMuZGVmYXVsdExvY2FsZSxcbiAgICAgIH0pLFxuICAgICAgZm9yY2VkU2Nyb2xsXG4gICAgKVxuICB9XG5cbiAgcmVsb2FkKCk6IHZvaWQge1xuICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKVxuICB9XG5cbiAgLyoqXG4gICAqIEdvIGJhY2sgaW4gaGlzdG9yeVxuICAgKi9cbiAgYmFjaygpIHtcbiAgICB3aW5kb3cuaGlzdG9yeS5iYWNrKClcbiAgfVxuXG4gIC8qKlxuICAgKiBQZXJmb3JtcyBhIGBwdXNoU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi9cbiAgcHVzaCh1cmw6IFVybCwgYXM/OiBVcmwsIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zID0ge30pIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTikge1xuICAgICAgLy8gVE9ETzogcmVtb3ZlIGluIHRoZSBmdXR1cmUgd2hlbiB3ZSB1cGRhdGUgaGlzdG9yeSBiZWZvcmUgcm91dGUgY2hhbmdlXG4gICAgICAvLyBpcyBjb21wbGV0ZSwgYXMgdGhlIHBvcHN0YXRlIGV2ZW50IHNob3VsZCBoYW5kbGUgdGhpcyBjYXB0dXJlLlxuICAgICAgaWYgKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gU25hcHNob3Qgc2Nyb2xsIHBvc2l0aW9uIHJpZ2h0IGJlZm9yZSBuYXZpZ2F0aW5nIHRvIGEgbmV3IHBhZ2U6XG4gICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShcbiAgICAgICAgICAgICdfX25leHRfc2Nyb2xsXycgKyB0aGlzLl9pZHgsXG4gICAgICAgICAgICBKU09OLnN0cmluZ2lmeSh7IHg6IHNlbGYucGFnZVhPZmZzZXQsIHk6IHNlbGYucGFnZVlPZmZzZXQgfSlcbiAgICAgICAgICApXG4gICAgICAgIH0gY2F0Y2gge31cbiAgICAgIH1cbiAgICB9XG4gICAgOyh7IHVybCwgYXMgfSA9IHByZXBhcmVVcmxBcyh0aGlzLCB1cmwsIGFzKSlcbiAgICByZXR1cm4gdGhpcy5jaGFuZ2UoJ3B1c2hTdGF0ZScsIHVybCwgYXMsIG9wdGlvbnMpXG4gIH1cblxuICAvKipcbiAgICogUGVyZm9ybXMgYSBgcmVwbGFjZVN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICovXG4gIHJlcGxhY2UodXJsOiBVcmwsIGFzPzogVXJsLCBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9ucyA9IHt9KSB7XG4gICAgOyh7IHVybCwgYXMgfSA9IHByZXBhcmVVcmxBcyh0aGlzLCB1cmwsIGFzKSlcbiAgICByZXR1cm4gdGhpcy5jaGFuZ2UoJ3JlcGxhY2VTdGF0ZScsIHVybCwgYXMsIG9wdGlvbnMpXG4gIH1cblxuICBwcml2YXRlIGFzeW5jIGNoYW5nZShcbiAgICBtZXRob2Q6IEhpc3RvcnlNZXRob2QsXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYXM6IHN0cmluZyxcbiAgICBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9ucyxcbiAgICBmb3JjZWRTY3JvbGw/OiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH1cbiAgKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgaWYgKCFpc0xvY2FsVVJMKHVybCkpIHtcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdXJsXG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICAvLyBmb3Igc3RhdGljIHBhZ2VzIHdpdGggcXVlcnkgcGFyYW1zIGluIHRoZSBVUkwgd2UgZGVsYXlcbiAgICAvLyBtYXJraW5nIHRoZSByb3V0ZXIgcmVhZHkgdW50aWwgYWZ0ZXIgdGhlIHF1ZXJ5IGlzIHVwZGF0ZWRcbiAgICBpZiAoKG9wdGlvbnMgYXMgYW55KS5faCkge1xuICAgICAgdGhpcy5pc1JlYWR5ID0gdHJ1ZVxuICAgIH1cblxuICAgIC8vIERlZmF1bHQgdG8gc2Nyb2xsIHJlc2V0IGJlaGF2aW9yIHVubGVzcyBleHBsaWNpdGx5IHNwZWNpZmllZCB0byBiZVxuICAgIC8vIGBmYWxzZWAhIFRoaXMgbWFrZXMgdGhlIGJlaGF2aW9yIGJldHdlZW4gdXNpbmcgYFJvdXRlciNwdXNoYCBhbmQgYVxuICAgIC8vIGA8TGluayAvPmAgY29uc2lzdGVudC5cbiAgICBvcHRpb25zLnNjcm9sbCA9ICEhKG9wdGlvbnMuc2Nyb2xsID8/IHRydWUpXG5cbiAgICBsZXQgbG9jYWxlQ2hhbmdlID0gb3B0aW9ucy5sb2NhbGUgIT09IHRoaXMubG9jYWxlXG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgdGhpcy5sb2NhbGUgPVxuICAgICAgICBvcHRpb25zLmxvY2FsZSA9PT0gZmFsc2VcbiAgICAgICAgICA/IHRoaXMuZGVmYXVsdExvY2FsZVxuICAgICAgICAgIDogb3B0aW9ucy5sb2NhbGUgfHwgdGhpcy5sb2NhbGVcblxuICAgICAgaWYgKHR5cGVvZiBvcHRpb25zLmxvY2FsZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgb3B0aW9ucy5sb2NhbGUgPSB0aGlzLmxvY2FsZVxuICAgICAgfVxuXG4gICAgICBjb25zdCBwYXJzZWRBcyA9IHBhcnNlUmVsYXRpdmVVcmwoaGFzQmFzZVBhdGgoYXMpID8gZGVsQmFzZVBhdGgoYXMpIDogYXMpXG4gICAgICBjb25zdCBsb2NhbGVQYXRoUmVzdWx0ID0gbm9ybWFsaXplTG9jYWxlUGF0aChcbiAgICAgICAgcGFyc2VkQXMucGF0aG5hbWUsXG4gICAgICAgIHRoaXMubG9jYWxlc1xuICAgICAgKVxuXG4gICAgICBpZiAobG9jYWxlUGF0aFJlc3VsdC5kZXRlY3RlZExvY2FsZSkge1xuICAgICAgICB0aGlzLmxvY2FsZSA9IGxvY2FsZVBhdGhSZXN1bHQuZGV0ZWN0ZWRMb2NhbGVcbiAgICAgICAgcGFyc2VkQXMucGF0aG5hbWUgPSBhZGRCYXNlUGF0aChwYXJzZWRBcy5wYXRobmFtZSlcbiAgICAgICAgYXMgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWRBcylcbiAgICAgICAgdXJsID0gYWRkQmFzZVBhdGgoXG4gICAgICAgICAgbm9ybWFsaXplTG9jYWxlUGF0aChcbiAgICAgICAgICAgIGhhc0Jhc2VQYXRoKHVybCkgPyBkZWxCYXNlUGF0aCh1cmwpIDogdXJsLFxuICAgICAgICAgICAgdGhpcy5sb2NhbGVzXG4gICAgICAgICAgKS5wYXRobmFtZVxuICAgICAgICApXG4gICAgICB9XG4gICAgICBsZXQgZGlkTmF2aWdhdGUgPSBmYWxzZVxuXG4gICAgICAvLyB3ZSBuZWVkIHRvIHdyYXAgdGhpcyBpbiB0aGUgZW52IGNoZWNrIGFnYWluIHNpbmNlIHJlZ2VuZXJhdG9yIHJ1bnRpbWVcbiAgICAgIC8vIG1vdmVzIHRoaXMgb24gaXRzIG93biBkdWUgdG8gdGhlIHJldHVyblxuICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgICAgLy8gaWYgdGhlIGxvY2FsZSBpc24ndCBjb25maWd1cmVkIGhhcmQgbmF2aWdhdGUgdG8gc2hvdyA0MDQgcGFnZVxuICAgICAgICBpZiAoIXRoaXMubG9jYWxlcz8uaW5jbHVkZXModGhpcy5sb2NhbGUhKSkge1xuICAgICAgICAgIHBhcnNlZEFzLnBhdGhuYW1lID0gYWRkTG9jYWxlKHBhcnNlZEFzLnBhdGhuYW1lLCB0aGlzLmxvY2FsZSlcbiAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZEFzKVxuICAgICAgICAgIC8vIHRoaXMgd2FzIHByZXZpb3VzbHkgYSByZXR1cm4gYnV0IHdhcyByZW1vdmVkIGluIGZhdm9yXG4gICAgICAgICAgLy8gb2YgYmV0dGVyIGRlYWQgY29kZSBlbGltaW5hdGlvbiB3aXRoIHJlZ2VuZXJhdG9yIHJ1bnRpbWVcbiAgICAgICAgICBkaWROYXZpZ2F0ZSA9IHRydWVcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBjb25zdCBkZXRlY3RlZERvbWFpbiA9IGRldGVjdERvbWFpbkxvY2FsZShcbiAgICAgICAgdGhpcy5kb21haW5Mb2NhbGVzLFxuICAgICAgICB1bmRlZmluZWQsXG4gICAgICAgIHRoaXMubG9jYWxlXG4gICAgICApXG5cbiAgICAgIC8vIHdlIG5lZWQgdG8gd3JhcCB0aGlzIGluIHRoZSBlbnYgY2hlY2sgYWdhaW4gc2luY2UgcmVnZW5lcmF0b3IgcnVudGltZVxuICAgICAgLy8gbW92ZXMgdGhpcyBvbiBpdHMgb3duIGR1ZSB0byB0aGUgcmV0dXJuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgICAvLyBpZiB3ZSBhcmUgbmF2aWdhdGluZyB0byBhIGRvbWFpbiBsb2NhbGUgZW5zdXJlIHdlIHJlZGlyZWN0IHRvIHRoZVxuICAgICAgICAvLyBjb3JyZWN0IGRvbWFpblxuICAgICAgICBpZiAoXG4gICAgICAgICAgIWRpZE5hdmlnYXRlICYmXG4gICAgICAgICAgZGV0ZWN0ZWREb21haW4gJiZcbiAgICAgICAgICB0aGlzLmlzTG9jYWxlRG9tYWluICYmXG4gICAgICAgICAgc2VsZi5sb2NhdGlvbi5ob3N0bmFtZSAhPT0gZGV0ZWN0ZWREb21haW4uZG9tYWluXG4gICAgICAgICkge1xuICAgICAgICAgIGNvbnN0IGFzTm9CYXNlUGF0aCA9IGRlbEJhc2VQYXRoKGFzKVxuICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYGh0dHAke2RldGVjdGVkRG9tYWluLmh0dHAgPyAnJyA6ICdzJ306Ly8ke1xuICAgICAgICAgICAgZGV0ZWN0ZWREb21haW4uZG9tYWluXG4gICAgICAgICAgfSR7YWRkQmFzZVBhdGgoXG4gICAgICAgICAgICBgJHtcbiAgICAgICAgICAgICAgdGhpcy5sb2NhbGUgPT09IGRldGVjdGVkRG9tYWluLmRlZmF1bHRMb2NhbGVcbiAgICAgICAgICAgICAgICA/ICcnXG4gICAgICAgICAgICAgICAgOiBgLyR7dGhpcy5sb2NhbGV9YFxuICAgICAgICAgICAgfSR7YXNOb0Jhc2VQYXRoID09PSAnLycgPyAnJyA6IGFzTm9CYXNlUGF0aH1gIHx8ICcvJ1xuICAgICAgICAgICl9YFxuICAgICAgICAgIC8vIHRoaXMgd2FzIHByZXZpb3VzbHkgYSByZXR1cm4gYnV0IHdhcyByZW1vdmVkIGluIGZhdm9yXG4gICAgICAgICAgLy8gb2YgYmV0dGVyIGRlYWQgY29kZSBlbGltaW5hdGlvbiB3aXRoIHJlZ2VuZXJhdG9yIHJ1bnRpbWVcbiAgICAgICAgICBkaWROYXZpZ2F0ZSA9IHRydWVcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoZGlkTmF2aWdhdGUpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKCgpID0+IHt9KVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghKG9wdGlvbnMgYXMgYW55KS5faCkge1xuICAgICAgdGhpcy5pc1NzciA9IGZhbHNlXG4gICAgfVxuICAgIC8vIG1hcmtpbmcgcm91dGUgY2hhbmdlcyBhcyBhIG5hdmlnYXRpb24gc3RhcnQgZW50cnlcbiAgICBpZiAoU1QpIHtcbiAgICAgIHBlcmZvcm1hbmNlLm1hcmsoJ3JvdXRlQ2hhbmdlJylcbiAgICB9XG5cbiAgICBjb25zdCB7IHNoYWxsb3cgPSBmYWxzZSB9ID0gb3B0aW9uc1xuICAgIGNvbnN0IHJvdXRlUHJvcHMgPSB7IHNoYWxsb3cgfVxuXG4gICAgaWYgKHRoaXMuX2luRmxpZ2h0Um91dGUpIHtcbiAgICAgIHRoaXMuYWJvcnRDb21wb25lbnRMb2FkKHRoaXMuX2luRmxpZ2h0Um91dGUsIHJvdXRlUHJvcHMpXG4gICAgfVxuXG4gICAgYXMgPSBhZGRCYXNlUGF0aChcbiAgICAgIGFkZExvY2FsZShcbiAgICAgICAgaGFzQmFzZVBhdGgoYXMpID8gZGVsQmFzZVBhdGgoYXMpIDogYXMsXG4gICAgICAgIG9wdGlvbnMubG9jYWxlLFxuICAgICAgICB0aGlzLmRlZmF1bHRMb2NhbGVcbiAgICAgIClcbiAgICApXG4gICAgY29uc3QgY2xlYW5lZEFzID0gZGVsTG9jYWxlKFxuICAgICAgaGFzQmFzZVBhdGgoYXMpID8gZGVsQmFzZVBhdGgoYXMpIDogYXMsXG4gICAgICB0aGlzLmxvY2FsZVxuICAgIClcbiAgICB0aGlzLl9pbkZsaWdodFJvdXRlID0gYXNcblxuICAgIC8vIElmIHRoZSB1cmwgY2hhbmdlIGlzIG9ubHkgcmVsYXRlZCB0byBhIGhhc2ggY2hhbmdlXG4gICAgLy8gV2Ugc2hvdWxkIG5vdCBwcm9jZWVkLiBXZSBzaG91bGQgb25seSBjaGFuZ2UgdGhlIHN0YXRlLlxuXG4gICAgLy8gV0FSTklORzogYF9oYCBpcyBhbiBpbnRlcm5hbCBvcHRpb24gZm9yIGhhbmRpbmcgTmV4dC5qcyBjbGllbnQtc2lkZVxuICAgIC8vIGh5ZHJhdGlvbi4gWW91ciBhcHAgc2hvdWxkIF9uZXZlcl8gdXNlIHRoaXMgcHJvcGVydHkuIEl0IG1heSBjaGFuZ2UgYXRcbiAgICAvLyBhbnkgdGltZSB3aXRob3V0IG5vdGljZS5cbiAgICBpZiAoIShvcHRpb25zIGFzIGFueSkuX2ggJiYgdGhpcy5vbmx5QUhhc2hDaGFuZ2UoY2xlYW5lZEFzKSkge1xuICAgICAgdGhpcy5hc1BhdGggPSBjbGVhbmVkQXNcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZVN0YXJ0JywgYXMsIHJvdXRlUHJvcHMpXG4gICAgICAvLyBUT0RPOiBkbyB3ZSBuZWVkIHRoZSByZXNvbHZlZCBocmVmIHdoZW4gb25seSBhIGhhc2ggY2hhbmdlP1xuICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMpXG4gICAgICB0aGlzLnNjcm9sbFRvSGFzaChjbGVhbmVkQXMpXG4gICAgICB0aGlzLm5vdGlmeSh0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0sIG51bGwpXG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VDb21wbGV0ZScsIGFzLCByb3V0ZVByb3BzKVxuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG5cbiAgICBsZXQgcGFyc2VkID0gcGFyc2VSZWxhdGl2ZVVybCh1cmwpXG4gICAgbGV0IHsgcGF0aG5hbWUsIHF1ZXJ5IH0gPSBwYXJzZWRcblxuICAgIC8vIFRoZSBidWlsZCBtYW5pZmVzdCBuZWVkcyB0byBiZSBsb2FkZWQgYmVmb3JlIGF1dG8tc3RhdGljIGR5bmFtaWMgcGFnZXNcbiAgICAvLyBnZXQgdGhlaXIgcXVlcnkgcGFyYW1ldGVycyB0byBhbGxvdyBlbnN1cmluZyB0aGV5IGNhbiBiZSBwYXJzZWQgcHJvcGVybHlcbiAgICAvLyB3aGVuIHJld3JpdHRlbiB0b1xuICAgIGxldCBwYWdlczogYW55LCByZXdyaXRlczogYW55XG4gICAgdHJ5IHtcbiAgICAgIHBhZ2VzID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmdldFBhZ2VMaXN0KClcbiAgICAgIDsoeyBfX3Jld3JpdGVzOiByZXdyaXRlcyB9ID0gYXdhaXQgZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCgpKVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgLy8gSWYgd2UgZmFpbCB0byByZXNvbHZlIHRoZSBwYWdlIGxpc3Qgb3IgY2xpZW50LWJ1aWxkIG1hbmlmZXN0LCB3ZSBtdXN0XG4gICAgICAvLyBkbyBhIHNlcnZlci1zaWRlIHRyYW5zaXRpb246XG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGFzXG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBwYXJzZWQgPSByZXNvbHZlRHluYW1pY1JvdXRlKHBhcnNlZCwgcGFnZXMpIGFzIHR5cGVvZiBwYXJzZWRcblxuICAgIGlmIChwYXJzZWQucGF0aG5hbWUgIT09IHBhdGhuYW1lKSB7XG4gICAgICBwYXRobmFtZSA9IHBhcnNlZC5wYXRobmFtZVxuICAgICAgdXJsID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKVxuICAgIH1cblxuICAgIC8vIHVybCBhbmQgYXMgc2hvdWxkIGFsd2F5cyBiZSBwcmVmaXhlZCB3aXRoIGJhc2VQYXRoIGJ5IHRoaXNcbiAgICAvLyBwb2ludCBieSBlaXRoZXIgbmV4dC9saW5rIG9yIHJvdXRlci5wdXNoL3JlcGxhY2Ugc28gc3RyaXAgdGhlXG4gICAgLy8gYmFzZVBhdGggZnJvbSB0aGUgcGF0aG5hbWUgdG8gbWF0Y2ggdGhlIHBhZ2VzIGRpciAxLXRvLTFcbiAgICBwYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgICA/IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKGRlbEJhc2VQYXRoKHBhdGhuYW1lKSlcbiAgICAgIDogcGF0aG5hbWVcblxuICAgIC8vIElmIGFza2VkIHRvIGNoYW5nZSB0aGUgY3VycmVudCBVUkwgd2Ugc2hvdWxkIHJlbG9hZCB0aGUgY3VycmVudCBwYWdlXG4gICAgLy8gKG5vdCBsb2NhdGlvbi5yZWxvYWQoKSBidXQgcmVsb2FkIGdldEluaXRpYWxQcm9wcyBhbmQgb3RoZXIgTmV4dC5qcyBzdHVmZnMpXG4gICAgLy8gV2UgYWxzbyBuZWVkIHRvIHNldCB0aGUgbWV0aG9kID0gcmVwbGFjZVN0YXRlIGFsd2F5c1xuICAgIC8vIGFzIHRoaXMgc2hvdWxkIG5vdCBnbyBpbnRvIHRoZSBoaXN0b3J5IChUaGF0J3MgaG93IGJyb3dzZXJzIHdvcmspXG4gICAgLy8gV2Ugc2hvdWxkIGNvbXBhcmUgdGhlIG5ldyBhc1BhdGggdG8gdGhlIGN1cnJlbnQgYXNQYXRoLCBub3QgdGhlIHVybFxuICAgIGlmICghdGhpcy51cmxJc05ldyhjbGVhbmVkQXMpICYmICFsb2NhbGVDaGFuZ2UpIHtcbiAgICAgIG1ldGhvZCA9ICdyZXBsYWNlU3RhdGUnXG4gICAgfVxuXG4gICAgbGV0IHJvdXRlID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUpXG5cbiAgICAvLyB3ZSBuZWVkIHRvIHJlc29sdmUgdGhlIGFzIHZhbHVlIHVzaW5nIHJld3JpdGVzIGZvciBkeW5hbWljIFNTR1xuICAgIC8vIHBhZ2VzIHRvIGFsbG93IGJ1aWxkaW5nIHRoZSBkYXRhIFVSTCBjb3JyZWN0bHlcbiAgICBsZXQgcmVzb2x2ZWRBcyA9IGFzXG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0hBU19SRVdSSVRFUyAmJiBhcy5zdGFydHNXaXRoKCcvJykpIHtcbiAgICAgIGNvbnN0IHJld3JpdGVzUmVzdWx0ID0gcmVzb2x2ZVJld3JpdGVzKFxuICAgICAgICBhZGRCYXNlUGF0aChhZGRMb2NhbGUoZGVsQmFzZVBhdGgoYXMpLCB0aGlzLmxvY2FsZSkpLFxuICAgICAgICBwYWdlcyxcbiAgICAgICAgcmV3cml0ZXMsXG4gICAgICAgIHF1ZXJ5LFxuICAgICAgICAocDogc3RyaW5nKSA9PiByZXNvbHZlRHluYW1pY1JvdXRlKHsgcGF0aG5hbWU6IHAgfSwgcGFnZXMpLnBhdGhuYW1lISxcbiAgICAgICAgdGhpcy5sb2NhbGVzXG4gICAgICApXG4gICAgICByZXNvbHZlZEFzID0gcmV3cml0ZXNSZXN1bHQuYXNQYXRoXG5cbiAgICAgIGlmIChyZXdyaXRlc1Jlc3VsdC5tYXRjaGVkUGFnZSAmJiByZXdyaXRlc1Jlc3VsdC5yZXNvbHZlZEhyZWYpIHtcbiAgICAgICAgLy8gaWYgdGhpcyBkaXJlY3RseSBtYXRjaGVzIGEgcGFnZSB3ZSBuZWVkIHRvIHVwZGF0ZSB0aGUgaHJlZiB0b1xuICAgICAgICAvLyBhbGxvdyB0aGUgY29ycmVjdCBwYWdlIGNodW5rIHRvIGJlIGxvYWRlZFxuICAgICAgICByb3V0ZSA9IHJld3JpdGVzUmVzdWx0LnJlc29sdmVkSHJlZlxuICAgICAgICBwYXRobmFtZSA9IHJld3JpdGVzUmVzdWx0LnJlc29sdmVkSHJlZlxuICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgICAgICB1cmwgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCFpc0xvY2FsVVJMKGFzKSkge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgIGBJbnZhbGlkIGhyZWY6IFwiJHt1cmx9XCIgYW5kIGFzOiBcIiR7YXN9XCIsIHJlY2VpdmVkIHJlbGF0aXZlIGhyZWYgYW5kIGV4dGVybmFsIGFzYCArXG4gICAgICAgICAgICBgXFxuU2VlIG1vcmUgaW5mbzogaHR0cHM6Ly9lcnIuc2gvbmV4dC5qcy9pbnZhbGlkLXJlbGF0aXZlLXVybC1leHRlcm5hbC1hc2BcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGFzXG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICByZXNvbHZlZEFzID0gZGVsTG9jYWxlKGRlbEJhc2VQYXRoKHJlc29sdmVkQXMpLCB0aGlzLmxvY2FsZSlcblxuICAgIGlmIChpc0R5bmFtaWNSb3V0ZShyb3V0ZSkpIHtcbiAgICAgIGNvbnN0IHBhcnNlZEFzID0gcGFyc2VSZWxhdGl2ZVVybChyZXNvbHZlZEFzKVxuICAgICAgY29uc3QgYXNQYXRobmFtZSA9IHBhcnNlZEFzLnBhdGhuYW1lXG5cbiAgICAgIGNvbnN0IHJvdXRlUmVnZXggPSBnZXRSb3V0ZVJlZ2V4KHJvdXRlKVxuICAgICAgY29uc3Qgcm91dGVNYXRjaCA9IGdldFJvdXRlTWF0Y2hlcihyb3V0ZVJlZ2V4KShhc1BhdGhuYW1lKVxuICAgICAgY29uc3Qgc2hvdWxkSW50ZXJwb2xhdGUgPSByb3V0ZSA9PT0gYXNQYXRobmFtZVxuICAgICAgY29uc3QgaW50ZXJwb2xhdGVkQXMgPSBzaG91bGRJbnRlcnBvbGF0ZVxuICAgICAgICA/IGludGVycG9sYXRlQXMocm91dGUsIGFzUGF0aG5hbWUsIHF1ZXJ5KVxuICAgICAgICA6ICh7fSBhcyB7IHJlc3VsdDogdW5kZWZpbmVkOyBwYXJhbXM6IHVuZGVmaW5lZCB9KVxuXG4gICAgICBpZiAoIXJvdXRlTWF0Y2ggfHwgKHNob3VsZEludGVycG9sYXRlICYmICFpbnRlcnBvbGF0ZWRBcy5yZXN1bHQpKSB7XG4gICAgICAgIGNvbnN0IG1pc3NpbmdQYXJhbXMgPSBPYmplY3Qua2V5cyhyb3V0ZVJlZ2V4Lmdyb3VwcykuZmlsdGVyKFxuICAgICAgICAgIChwYXJhbSkgPT4gIXF1ZXJ5W3BhcmFtXVxuICAgICAgICApXG5cbiAgICAgICAgaWYgKG1pc3NpbmdQYXJhbXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICAgIGAke1xuICAgICAgICAgICAgICAgIHNob3VsZEludGVycG9sYXRlXG4gICAgICAgICAgICAgICAgICA/IGBJbnRlcnBvbGF0aW5nIGhyZWZgXG4gICAgICAgICAgICAgICAgICA6IGBNaXNtYXRjaGluZyBcXGBhc1xcYCBhbmQgXFxgaHJlZlxcYGBcbiAgICAgICAgICAgICAgfSBmYWlsZWQgdG8gbWFudWFsbHkgcHJvdmlkZSBgICtcbiAgICAgICAgICAgICAgICBgdGhlIHBhcmFtczogJHttaXNzaW5nUGFyYW1zLmpvaW4oXG4gICAgICAgICAgICAgICAgICAnLCAnXG4gICAgICAgICAgICAgICAgKX0gaW4gdGhlIFxcYGhyZWZcXGAncyBcXGBxdWVyeVxcYGBcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICAoc2hvdWxkSW50ZXJwb2xhdGVcbiAgICAgICAgICAgICAgPyBgVGhlIHByb3ZpZGVkIFxcYGhyZWZcXGAgKCR7dXJsfSkgdmFsdWUgaXMgbWlzc2luZyBxdWVyeSB2YWx1ZXMgKCR7bWlzc2luZ1BhcmFtcy5qb2luKFxuICAgICAgICAgICAgICAgICAgJywgJ1xuICAgICAgICAgICAgICAgICl9KSB0byBiZSBpbnRlcnBvbGF0ZWQgcHJvcGVybHkuIGBcbiAgICAgICAgICAgICAgOiBgVGhlIHByb3ZpZGVkIFxcYGFzXFxgIHZhbHVlICgke2FzUGF0aG5hbWV9KSBpcyBpbmNvbXBhdGlibGUgd2l0aCB0aGUgXFxgaHJlZlxcYCB2YWx1ZSAoJHtyb3V0ZX0pLiBgKSArXG4gICAgICAgICAgICAgIGBSZWFkIG1vcmU6IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzLyR7XG4gICAgICAgICAgICAgICAgc2hvdWxkSW50ZXJwb2xhdGVcbiAgICAgICAgICAgICAgICAgID8gJ2hyZWYtaW50ZXJwb2xhdGlvbi1mYWlsZWQnXG4gICAgICAgICAgICAgICAgICA6ICdpbmNvbXBhdGlibGUtaHJlZi1hcydcbiAgICAgICAgICAgICAgfWBcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoc2hvdWxkSW50ZXJwb2xhdGUpIHtcbiAgICAgICAgYXMgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihcbiAgICAgICAgICBPYmplY3QuYXNzaWduKHt9LCBwYXJzZWRBcywge1xuICAgICAgICAgICAgcGF0aG5hbWU6IGludGVycG9sYXRlZEFzLnJlc3VsdCxcbiAgICAgICAgICAgIHF1ZXJ5OiBvbWl0UGFybXNGcm9tUXVlcnkocXVlcnksIGludGVycG9sYXRlZEFzLnBhcmFtcyEpLFxuICAgICAgICAgIH0pXG4gICAgICAgIClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIE1lcmdlIHBhcmFtcyBpbnRvIGBxdWVyeWAsIG92ZXJ3cml0aW5nIGFueSBzcGVjaWZpZWQgaW4gc2VhcmNoXG4gICAgICAgIE9iamVjdC5hc3NpZ24ocXVlcnksIHJvdXRlTWF0Y2gpXG4gICAgICB9XG4gICAgfVxuXG4gICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZVN0YXJ0JywgYXMsIHJvdXRlUHJvcHMpXG5cbiAgICB0cnkge1xuICAgICAgbGV0IHJvdXRlSW5mbyA9IGF3YWl0IHRoaXMuZ2V0Um91dGVJbmZvKFxuICAgICAgICByb3V0ZSxcbiAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgIHF1ZXJ5LFxuICAgICAgICBhcyxcbiAgICAgICAgcmVzb2x2ZWRBcyxcbiAgICAgICAgcm91dGVQcm9wc1xuICAgICAgKVxuICAgICAgbGV0IHsgZXJyb3IsIHByb3BzLCBfX05fU1NHLCBfX05fU1NQIH0gPSByb3V0ZUluZm9cblxuICAgICAgLy8gaGFuZGxlIHJlZGlyZWN0IG9uIGNsaWVudC10cmFuc2l0aW9uXG4gICAgICBpZiAoKF9fTl9TU0cgfHwgX19OX1NTUCkgJiYgcHJvcHMpIHtcbiAgICAgICAgaWYgKChwcm9wcyBhcyBhbnkpLnBhZ2VQcm9wcyAmJiAocHJvcHMgYXMgYW55KS5wYWdlUHJvcHMuX19OX1JFRElSRUNUKSB7XG4gICAgICAgICAgY29uc3QgZGVzdGluYXRpb24gPSAocHJvcHMgYXMgYW55KS5wYWdlUHJvcHMuX19OX1JFRElSRUNUXG5cbiAgICAgICAgICAvLyBjaGVjayBpZiBkZXN0aW5hdGlvbiBpcyBpbnRlcm5hbCAocmVzb2x2ZXMgdG8gYSBwYWdlKSBhbmQgYXR0ZW1wdFxuICAgICAgICAgIC8vIGNsaWVudC1uYXZpZ2F0aW9uIGlmIGl0IGlzIGZhbGxpbmcgYmFjayB0byBoYXJkIG5hdmlnYXRpb24gaWZcbiAgICAgICAgICAvLyBpdCdzIG5vdFxuICAgICAgICAgIGlmIChkZXN0aW5hdGlvbi5zdGFydHNXaXRoKCcvJykpIHtcbiAgICAgICAgICAgIGNvbnN0IHBhcnNlZEhyZWYgPSBwYXJzZVJlbGF0aXZlVXJsKGRlc3RpbmF0aW9uKVxuICAgICAgICAgICAgcmVzb2x2ZUR5bmFtaWNSb3V0ZShwYXJzZWRIcmVmLCBwYWdlcywgZmFsc2UpXG5cbiAgICAgICAgICAgIGlmIChwYWdlcy5pbmNsdWRlcyhwYXJzZWRIcmVmLnBhdGhuYW1lKSkge1xuICAgICAgICAgICAgICBjb25zdCB7IHVybDogbmV3VXJsLCBhczogbmV3QXMgfSA9IHByZXBhcmVVcmxBcyhcbiAgICAgICAgICAgICAgICB0aGlzLFxuICAgICAgICAgICAgICAgIGRlc3RpbmF0aW9uLFxuICAgICAgICAgICAgICAgIGRlc3RpbmF0aW9uXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2hhbmdlKG1ldGhvZCwgbmV3VXJsLCBuZXdBcywgb3B0aW9ucylcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGRlc3RpbmF0aW9uXG4gICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKCgpID0+IHt9KVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5pc1ByZXZpZXcgPSAhIXByb3BzLl9fTl9QUkVWSUVXXG5cbiAgICAgICAgLy8gaGFuZGxlIFNTRyBkYXRhIDQwNFxuICAgICAgICBpZiAocHJvcHMubm90Rm91bmQgPT09IFNTR19EQVRBX05PVF9GT1VORCkge1xuICAgICAgICAgIGxldCBub3RGb3VuZFJvdXRlXG5cbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudCgnLzQwNCcpXG4gICAgICAgICAgICBub3RGb3VuZFJvdXRlID0gJy80MDQnXG4gICAgICAgICAgfSBjYXRjaCAoXykge1xuICAgICAgICAgICAgbm90Rm91bmRSb3V0ZSA9ICcvX2Vycm9yJ1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJvdXRlSW5mbyA9IGF3YWl0IHRoaXMuZ2V0Um91dGVJbmZvKFxuICAgICAgICAgICAgbm90Rm91bmRSb3V0ZSxcbiAgICAgICAgICAgIG5vdEZvdW5kUm91dGUsXG4gICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICAgIGFzLFxuICAgICAgICAgICAgcmVzb2x2ZWRBcyxcbiAgICAgICAgICAgIHsgc2hhbGxvdzogZmFsc2UgfVxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLCBhcywgcm91dGVQcm9wcylcbiAgICAgIHRoaXMuY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zKVxuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBjb25zdCBhcHBDb21wOiBhbnkgPSB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50XG4gICAgICAgIDsod2luZG93IGFzIGFueSkubmV4dC5pc1ByZXJlbmRlcmVkID1cbiAgICAgICAgICBhcHBDb21wLmdldEluaXRpYWxQcm9wcyA9PT0gYXBwQ29tcC5vcmlnR2V0SW5pdGlhbFByb3BzICYmXG4gICAgICAgICAgIShyb3V0ZUluZm8uQ29tcG9uZW50IGFzIGFueSkuZ2V0SW5pdGlhbFByb3BzXG4gICAgICB9XG5cbiAgICAgIC8vIHNoYWxsb3cgcm91dGluZyBpcyBvbmx5IGFsbG93ZWQgZm9yIHNhbWUgcGFnZSBVUkwgY2hhbmdlcy5cbiAgICAgIGNvbnN0IGlzVmFsaWRTaGFsbG93Um91dGUgPSBvcHRpb25zLnNoYWxsb3cgJiYgdGhpcy5yb3V0ZSA9PT0gcm91dGVcblxuICAgICAgaWYgKFxuICAgICAgICAob3B0aW9ucyBhcyBhbnkpLl9oICYmXG4gICAgICAgIHBhdGhuYW1lID09PSAnL19lcnJvcicgJiZcbiAgICAgICAgc2VsZi5fX05FWFRfREFUQV9fLnByb3BzPy5wYWdlUHJvcHM/LnN0YXR1c0NvZGUgPT09IDUwMCAmJlxuICAgICAgICBwcm9wcz8ucGFnZVByb3BzXG4gICAgICApIHtcbiAgICAgICAgLy8gZW5zdXJlIHN0YXR1c0NvZGUgaXMgc3RpbGwgY29ycmVjdCBmb3Igc3RhdGljIDUwMCBwYWdlXG4gICAgICAgIC8vIHdoZW4gdXBkYXRpbmcgcXVlcnkgaW5mb3JtYXRpb25cbiAgICAgICAgcHJvcHMucGFnZVByb3BzLnN0YXR1c0NvZGUgPSA1MDBcbiAgICAgIH1cblxuICAgICAgYXdhaXQgdGhpcy5zZXQoXG4gICAgICAgIHJvdXRlLFxuICAgICAgICBwYXRobmFtZSEsXG4gICAgICAgIHF1ZXJ5LFxuICAgICAgICBjbGVhbmVkQXMsXG4gICAgICAgIHJvdXRlSW5mbyxcbiAgICAgICAgZm9yY2VkU2Nyb2xsIHx8XG4gICAgICAgICAgKGlzVmFsaWRTaGFsbG93Um91dGUgfHwgIW9wdGlvbnMuc2Nyb2xsID8gbnVsbCA6IHsgeDogMCwgeTogMCB9KVxuICAgICAgKS5jYXRjaCgoZSkgPT4ge1xuICAgICAgICBpZiAoZS5jYW5jZWxsZWQpIGVycm9yID0gZXJyb3IgfHwgZVxuICAgICAgICBlbHNlIHRocm93IGVcbiAgICAgIH0pXG5cbiAgICAgIGlmIChlcnJvcikge1xuICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBlcnJvciwgY2xlYW5lZEFzLCByb3V0ZVByb3BzKVxuICAgICAgICB0aHJvdyBlcnJvclxuICAgICAgfVxuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgICBpZiAodGhpcy5sb2NhbGUpIHtcbiAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQubGFuZyA9IHRoaXMubG9jYWxlXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VDb21wbGV0ZScsIGFzLCByb3V0ZVByb3BzKVxuXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgaWYgKGVyci5jYW5jZWxsZWQpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG4gICAgICB0aHJvdyBlcnJcbiAgICB9XG4gIH1cblxuICBjaGFuZ2VTdGF0ZShcbiAgICBtZXRob2Q6IEhpc3RvcnlNZXRob2QsXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYXM6IHN0cmluZyxcbiAgICBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9ucyA9IHt9XG4gICk6IHZvaWQge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeSBpcyBub3QgYXZhaWxhYmxlLmApXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5LiR7bWV0aG9kfSBpcyBub3QgYXZhaWxhYmxlYClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG1ldGhvZCAhPT0gJ3B1c2hTdGF0ZScgfHwgZ2V0VVJMKCkgIT09IGFzKSB7XG4gICAgICB0aGlzLl9zaGFsbG93ID0gb3B0aW9ucy5zaGFsbG93XG4gICAgICB3aW5kb3cuaGlzdG9yeVttZXRob2RdKFxuICAgICAgICB7XG4gICAgICAgICAgdXJsLFxuICAgICAgICAgIGFzLFxuICAgICAgICAgIG9wdGlvbnMsXG4gICAgICAgICAgX19OOiB0cnVlLFxuICAgICAgICAgIGlkeDogdGhpcy5faWR4ID0gbWV0aG9kICE9PSAncHVzaFN0YXRlJyA/IHRoaXMuX2lkeCA6IHRoaXMuX2lkeCArIDEsXG4gICAgICAgIH0gYXMgSGlzdG9yeVN0YXRlLFxuICAgICAgICAvLyBNb3N0IGJyb3dzZXJzIGN1cnJlbnRseSBpZ25vcmVzIHRoaXMgcGFyYW1ldGVyLCBhbHRob3VnaCB0aGV5IG1heSB1c2UgaXQgaW4gdGhlIGZ1dHVyZS5cbiAgICAgICAgLy8gUGFzc2luZyB0aGUgZW1wdHkgc3RyaW5nIGhlcmUgc2hvdWxkIGJlIHNhZmUgYWdhaW5zdCBmdXR1cmUgY2hhbmdlcyB0byB0aGUgbWV0aG9kLlxuICAgICAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvSGlzdG9yeS9yZXBsYWNlU3RhdGVcbiAgICAgICAgJycsXG4gICAgICAgIGFzXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgYXN5bmMgaGFuZGxlUm91dGVJbmZvRXJyb3IoXG4gICAgZXJyOiBFcnJvciAmIHsgY29kZTogYW55OyBjYW5jZWxsZWQ6IGJvb2xlYW4gfSxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgICBhczogc3RyaW5nLFxuICAgIHJvdXRlUHJvcHM6IFJvdXRlUHJvcGVydGllcyxcbiAgICBsb2FkRXJyb3JGYWlsPzogYm9vbGVhblxuICApOiBQcm9taXNlPENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mbz4ge1xuICAgIGlmIChlcnIuY2FuY2VsbGVkKSB7XG4gICAgICAvLyBidWJibGUgdXAgY2FuY2VsbGF0aW9uIGVycm9yc1xuICAgICAgdGhyb3cgZXJyXG4gICAgfVxuXG4gICAgaWYgKGlzQXNzZXRFcnJvcihlcnIpIHx8IGxvYWRFcnJvckZhaWwpIHtcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGVyciwgYXMsIHJvdXRlUHJvcHMpXG5cbiAgICAgIC8vIElmIHdlIGNhbid0IGxvYWQgdGhlIHBhZ2UgaXQgY291bGQgYmUgb25lIG9mIGZvbGxvd2luZyByZWFzb25zXG4gICAgICAvLyAgMS4gUGFnZSBkb2Vzbid0IGV4aXN0c1xuICAgICAgLy8gIDIuIFBhZ2UgZG9lcyBleGlzdCBpbiBhIGRpZmZlcmVudCB6b25lXG4gICAgICAvLyAgMy4gSW50ZXJuYWwgZXJyb3Igd2hpbGUgbG9hZGluZyB0aGUgcGFnZVxuXG4gICAgICAvLyBTbywgZG9pbmcgYSBoYXJkIHJlbG9hZCBpcyB0aGUgcHJvcGVyIHdheSB0byBkZWFsIHdpdGggdGhpcy5cbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYXNcblxuICAgICAgLy8gQ2hhbmdpbmcgdGhlIFVSTCBkb2Vzbid0IGJsb2NrIGV4ZWN1dGluZyB0aGUgY3VycmVudCBjb2RlIHBhdGguXG4gICAgICAvLyBTbyBsZXQncyB0aHJvdyBhIGNhbmNlbGxhdGlvbiBlcnJvciBzdG9wIHRoZSByb3V0aW5nIGxvZ2ljLlxuICAgICAgdGhyb3cgYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpXG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIGxldCBDb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgICAgIGxldCBzdHlsZVNoZWV0czogU3R5bGVTaGVldFR1cGxlW11cbiAgICAgIGxldCBwcm9wczogUmVjb3JkPHN0cmluZywgYW55PiB8IHVuZGVmaW5lZFxuXG4gICAgICBpZiAoXG4gICAgICAgIHR5cGVvZiBDb21wb25lbnQhID09PSAndW5kZWZpbmVkJyB8fFxuICAgICAgICB0eXBlb2Ygc3R5bGVTaGVldHMhID09PSAndW5kZWZpbmVkJ1xuICAgICAgKSB7XG4gICAgICAgIDsoeyBwYWdlOiBDb21wb25lbnQsIHN0eWxlU2hlZXRzIH0gPSBhd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KFxuICAgICAgICAgICcvX2Vycm9yJ1xuICAgICAgICApKVxuICAgICAgfVxuXG4gICAgICBjb25zdCByb3V0ZUluZm86IENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mbyA9IHtcbiAgICAgICAgcHJvcHMsXG4gICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgc3R5bGVTaGVldHMsXG4gICAgICAgIGVycixcbiAgICAgICAgZXJyb3I6IGVycixcbiAgICAgIH1cblxuICAgICAgaWYgKCFyb3V0ZUluZm8ucHJvcHMpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSBhd2FpdCB0aGlzLmdldEluaXRpYWxQcm9wcyhDb21wb25lbnQsIHtcbiAgICAgICAgICAgIGVycixcbiAgICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgfSBhcyBhbnkpXG4gICAgICAgIH0gY2F0Y2ggKGdpcEVycikge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIGVycm9yIHBhZ2UgYGdldEluaXRpYWxQcm9wc2A6ICcsIGdpcEVycilcbiAgICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSB7fVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiByb3V0ZUluZm9cbiAgICB9IGNhdGNoIChyb3V0ZUluZm9FcnIpIHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZVJvdXRlSW5mb0Vycm9yKFxuICAgICAgICByb3V0ZUluZm9FcnIsXG4gICAgICAgIHBhdGhuYW1lLFxuICAgICAgICBxdWVyeSxcbiAgICAgICAgYXMsXG4gICAgICAgIHJvdXRlUHJvcHMsXG4gICAgICAgIHRydWVcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICBhc3luYyBnZXRSb3V0ZUluZm8oXG4gICAgcm91dGU6IHN0cmluZyxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBhbnksXG4gICAgYXM6IHN0cmluZyxcbiAgICByZXNvbHZlZEFzOiBzdHJpbmcsXG4gICAgcm91dGVQcm9wczogUm91dGVQcm9wZXJ0aWVzXG4gICk6IFByb21pc2U8UHJpdmF0ZVJvdXRlSW5mbz4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBleGlzdGluZ1JvdXRlSW5mbzogUHJpdmF0ZVJvdXRlSW5mbyB8IHVuZGVmaW5lZCA9IHRoaXMuY29tcG9uZW50c1tcbiAgICAgICAgcm91dGVcbiAgICAgIF1cbiAgICAgIGlmIChyb3V0ZVByb3BzLnNoYWxsb3cgJiYgZXhpc3RpbmdSb3V0ZUluZm8gJiYgdGhpcy5yb3V0ZSA9PT0gcm91dGUpIHtcbiAgICAgICAgcmV0dXJuIGV4aXN0aW5nUm91dGVJbmZvXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGNhY2hlZFJvdXRlSW5mbzogQ29tcGxldGVQcml2YXRlUm91dGVJbmZvIHwgdW5kZWZpbmVkID1cbiAgICAgICAgZXhpc3RpbmdSb3V0ZUluZm8gJiYgJ2luaXRpYWwnIGluIGV4aXN0aW5nUm91dGVJbmZvXG4gICAgICAgICAgPyB1bmRlZmluZWRcbiAgICAgICAgICA6IGV4aXN0aW5nUm91dGVJbmZvXG4gICAgICBjb25zdCByb3V0ZUluZm86IENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mbyA9IGNhY2hlZFJvdXRlSW5mb1xuICAgICAgICA/IGNhY2hlZFJvdXRlSW5mb1xuICAgICAgICA6IGF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQocm91dGUpLnRoZW4oKHJlcykgPT4gKHtcbiAgICAgICAgICAgIENvbXBvbmVudDogcmVzLnBhZ2UsXG4gICAgICAgICAgICBzdHlsZVNoZWV0czogcmVzLnN0eWxlU2hlZXRzLFxuICAgICAgICAgICAgX19OX1NTRzogcmVzLm1vZC5fX05fU1NHLFxuICAgICAgICAgICAgX19OX1NTUDogcmVzLm1vZC5fX05fU1NQLFxuICAgICAgICAgIH0pKVxuXG4gICAgICBjb25zdCB7IENvbXBvbmVudCwgX19OX1NTRywgX19OX1NTUCB9ID0gcm91dGVJbmZvXG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGNvbnN0IHsgaXNWYWxpZEVsZW1lbnRUeXBlIH0gPSByZXF1aXJlKCdyZWFjdC1pcycpXG4gICAgICAgIGlmICghaXNWYWxpZEVsZW1lbnRUeXBlKENvbXBvbmVudCkpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICBgVGhlIGRlZmF1bHQgZXhwb3J0IGlzIG5vdCBhIFJlYWN0IENvbXBvbmVudCBpbiBwYWdlOiBcIiR7cGF0aG5hbWV9XCJgXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxldCBkYXRhSHJlZjogc3RyaW5nIHwgdW5kZWZpbmVkXG5cbiAgICAgIGlmIChfX05fU1NHIHx8IF9fTl9TU1ApIHtcbiAgICAgICAgZGF0YUhyZWYgPSB0aGlzLnBhZ2VMb2FkZXIuZ2V0RGF0YUhyZWYoXG4gICAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZSwgcXVlcnkgfSksXG4gICAgICAgICAgcmVzb2x2ZWRBcyxcbiAgICAgICAgICBfX05fU1NHLFxuICAgICAgICAgIHRoaXMubG9jYWxlXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgY29uc3QgcHJvcHMgPSBhd2FpdCB0aGlzLl9nZXREYXRhPENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mbz4oKCkgPT5cbiAgICAgICAgX19OX1NTR1xuICAgICAgICAgID8gdGhpcy5fZ2V0U3RhdGljRGF0YShkYXRhSHJlZiEpXG4gICAgICAgICAgOiBfX05fU1NQXG4gICAgICAgICAgPyB0aGlzLl9nZXRTZXJ2ZXJEYXRhKGRhdGFIcmVmISlcbiAgICAgICAgICA6IHRoaXMuZ2V0SW5pdGlhbFByb3BzKFxuICAgICAgICAgICAgICBDb21wb25lbnQsXG4gICAgICAgICAgICAgIC8vIHdlIHByb3ZpZGUgQXBwVHJlZSBsYXRlciBzbyB0aGlzIG5lZWRzIHRvIGJlIGBhbnlgXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICAgICAgICBhc1BhdGg6IGFzLFxuICAgICAgICAgICAgICB9IGFzIGFueVxuICAgICAgICAgICAgKVxuICAgICAgKVxuXG4gICAgICByb3V0ZUluZm8ucHJvcHMgPSBwcm9wc1xuICAgICAgdGhpcy5jb21wb25lbnRzW3JvdXRlXSA9IHJvdXRlSW5mb1xuICAgICAgcmV0dXJuIHJvdXRlSW5mb1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlUm91dGVJbmZvRXJyb3IoZXJyLCBwYXRobmFtZSwgcXVlcnksIGFzLCByb3V0ZVByb3BzKVxuICAgIH1cbiAgfVxuXG4gIHNldChcbiAgICByb3V0ZTogc3RyaW5nLFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICAgIGFzOiBzdHJpbmcsXG4gICAgZGF0YTogUHJpdmF0ZVJvdXRlSW5mbyxcbiAgICByZXNldFNjcm9sbDogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9IHwgbnVsbFxuICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICB0aGlzLmlzRmFsbGJhY2sgPSBmYWxzZVxuXG4gICAgdGhpcy5yb3V0ZSA9IHJvdXRlXG4gICAgdGhpcy5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgdGhpcy5xdWVyeSA9IHF1ZXJ5XG4gICAgdGhpcy5hc1BhdGggPSBhc1xuICAgIHJldHVybiB0aGlzLm5vdGlmeShkYXRhLCByZXNldFNjcm9sbClcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxsYmFjayB0byBleGVjdXRlIGJlZm9yZSByZXBsYWNpbmcgcm91dGVyIHN0YXRlXG4gICAqIEBwYXJhbSBjYiBjYWxsYmFjayB0byBiZSBleGVjdXRlZFxuICAgKi9cbiAgYmVmb3JlUG9wU3RhdGUoY2I6IEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2spIHtcbiAgICB0aGlzLl9icHMgPSBjYlxuICB9XG5cbiAgb25seUFIYXNoQ2hhbmdlKGFzOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICBpZiAoIXRoaXMuYXNQYXRoKSByZXR1cm4gZmFsc2VcbiAgICBjb25zdCBbb2xkVXJsTm9IYXNoLCBvbGRIYXNoXSA9IHRoaXMuYXNQYXRoLnNwbGl0KCcjJylcbiAgICBjb25zdCBbbmV3VXJsTm9IYXNoLCBuZXdIYXNoXSA9IGFzLnNwbGl0KCcjJylcblxuICAgIC8vIE1ha2VzIHN1cmUgd2Ugc2Nyb2xsIHRvIHRoZSBwcm92aWRlZCBoYXNoIGlmIHRoZSB1cmwvaGFzaCBhcmUgdGhlIHNhbWVcbiAgICBpZiAobmV3SGFzaCAmJiBvbGRVcmxOb0hhc2ggPT09IG5ld1VybE5vSGFzaCAmJiBvbGRIYXNoID09PSBuZXdIYXNoKSB7XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cblxuICAgIC8vIElmIHRoZSB1cmxzIGFyZSBjaGFuZ2UsIHRoZXJlJ3MgbW9yZSB0aGFuIGEgaGFzaCBjaGFuZ2VcbiAgICBpZiAob2xkVXJsTm9IYXNoICE9PSBuZXdVcmxOb0hhc2gpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIC8vIElmIHRoZSBoYXNoIGhhcyBjaGFuZ2VkLCB0aGVuIGl0J3MgYSBoYXNoIG9ubHkgY2hhbmdlLlxuICAgIC8vIFRoaXMgY2hlY2sgaXMgbmVjZXNzYXJ5IHRvIGhhbmRsZSBib3RoIHRoZSBlbnRlciBhbmRcbiAgICAvLyBsZWF2ZSBoYXNoID09PSAnJyBjYXNlcy4gVGhlIGlkZW50aXR5IGNhc2UgZmFsbHMgdGhyb3VnaFxuICAgIC8vIGFuZCBpcyB0cmVhdGVkIGFzIGEgbmV4dCByZWxvYWQuXG4gICAgcmV0dXJuIG9sZEhhc2ggIT09IG5ld0hhc2hcbiAgfVxuXG4gIHNjcm9sbFRvSGFzaChhczogc3RyaW5nKTogdm9pZCB7XG4gICAgY29uc3QgWywgaGFzaF0gPSBhcy5zcGxpdCgnIycpXG4gICAgLy8gU2Nyb2xsIHRvIHRvcCBpZiB0aGUgaGFzaCBpcyBqdXN0IGAjYCB3aXRoIG5vIHZhbHVlIG9yIGAjdG9wYFxuICAgIC8vIFRvIG1pcnJvciBicm93c2Vyc1xuICAgIGlmIChoYXNoID09PSAnJyB8fCBoYXNoID09PSAndG9wJykge1xuICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBGaXJzdCB3ZSBjaGVjayBpZiB0aGUgZWxlbWVudCBieSBpZCBpcyBmb3VuZFxuICAgIGNvbnN0IGlkRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChoYXNoKVxuICAgIGlmIChpZEVsKSB7XG4gICAgICBpZEVsLnNjcm9sbEludG9WaWV3KClcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICAvLyBJZiB0aGVyZSdzIG5vIGVsZW1lbnQgd2l0aCB0aGUgaWQsIHdlIGNoZWNrIHRoZSBgbmFtZWAgcHJvcGVydHlcbiAgICAvLyBUbyBtaXJyb3IgYnJvd3NlcnNcbiAgICBjb25zdCBuYW1lRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZShoYXNoKVswXVxuICAgIGlmIChuYW1lRWwpIHtcbiAgICAgIG5hbWVFbC5zY3JvbGxJbnRvVmlldygpXG4gICAgfVxuICB9XG5cbiAgdXJsSXNOZXcoYXNQYXRoOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5hc1BhdGggIT09IGFzUGF0aFxuICB9XG5cbiAgLyoqXG4gICAqIFByZWZldGNoIHBhZ2UgY29kZSwgeW91IG1heSB3YWl0IGZvciB0aGUgZGF0YSBkdXJpbmcgcGFnZSByZW5kZXJpbmcuXG4gICAqIFRoaXMgZmVhdHVyZSBvbmx5IHdvcmtzIGluIHByb2R1Y3Rpb24hXG4gICAqIEBwYXJhbSB1cmwgdGhlIGhyZWYgb2YgcHJlZmV0Y2hlZCBwYWdlXG4gICAqIEBwYXJhbSBhc1BhdGggdGhlIGFzIHBhdGggb2YgdGhlIHByZWZldGNoZWQgcGFnZVxuICAgKi9cbiAgYXN5bmMgcHJlZmV0Y2goXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYXNQYXRoOiBzdHJpbmcgPSB1cmwsXG4gICAgb3B0aW9uczogUHJlZmV0Y2hPcHRpb25zID0ge31cbiAgKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgbGV0IHBhcnNlZCA9IHBhcnNlUmVsYXRpdmVVcmwodXJsKVxuXG4gICAgbGV0IHsgcGF0aG5hbWUgfSA9IHBhcnNlZFxuXG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgIGlmIChvcHRpb25zLmxvY2FsZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgcGF0aG5hbWUgPSBub3JtYWxpemVMb2NhbGVQYXRoIShwYXRobmFtZSwgdGhpcy5sb2NhbGVzKS5wYXRobmFtZVxuICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgICAgICB1cmwgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpXG5cbiAgICAgICAgbGV0IHBhcnNlZEFzID0gcGFyc2VSZWxhdGl2ZVVybChhc1BhdGgpXG4gICAgICAgIGNvbnN0IGxvY2FsZVBhdGhSZXN1bHQgPSBub3JtYWxpemVMb2NhbGVQYXRoIShcbiAgICAgICAgICBwYXJzZWRBcy5wYXRobmFtZSxcbiAgICAgICAgICB0aGlzLmxvY2FsZXNcbiAgICAgICAgKVxuICAgICAgICBwYXJzZWRBcy5wYXRobmFtZSA9IGxvY2FsZVBhdGhSZXN1bHQucGF0aG5hbWVcbiAgICAgICAgb3B0aW9ucy5sb2NhbGUgPSBsb2NhbGVQYXRoUmVzdWx0LmRldGVjdGVkTG9jYWxlIHx8IHRoaXMuZGVmYXVsdExvY2FsZVxuICAgICAgICBhc1BhdGggPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWRBcylcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBwYWdlcyA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5nZXRQYWdlTGlzdCgpXG5cbiAgICBwYXJzZWQgPSByZXNvbHZlRHluYW1pY1JvdXRlKHBhcnNlZCwgcGFnZXMsIGZhbHNlKSBhcyB0eXBlb2YgcGFyc2VkXG5cbiAgICBpZiAocGFyc2VkLnBhdGhuYW1lICE9PSBwYXRobmFtZSkge1xuICAgICAgcGF0aG5hbWUgPSBwYXJzZWQucGF0aG5hbWVcbiAgICAgIHVybCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZClcbiAgICB9XG4gICAgbGV0IHJvdXRlID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUpXG4gICAgbGV0IHJlc29sdmVkQXMgPSBhc1BhdGhcblxuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSEFTX1JFV1JJVEVTICYmIGFzUGF0aC5zdGFydHNXaXRoKCcvJykpIHtcbiAgICAgIGxldCByZXdyaXRlczogYW55W11cbiAgICAgIDsoeyBfX3Jld3JpdGVzOiByZXdyaXRlcyB9ID0gYXdhaXQgZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCgpKVxuXG4gICAgICBjb25zdCByZXdyaXRlc1Jlc3VsdCA9IHJlc29sdmVSZXdyaXRlcyhcbiAgICAgICAgYWRkQmFzZVBhdGgoYWRkTG9jYWxlKGRlbEJhc2VQYXRoKGFzUGF0aCksIHRoaXMubG9jYWxlKSksXG4gICAgICAgIHBhZ2VzLFxuICAgICAgICByZXdyaXRlcyxcbiAgICAgICAgcGFyc2VkLnF1ZXJ5LFxuICAgICAgICAocDogc3RyaW5nKSA9PiByZXNvbHZlRHluYW1pY1JvdXRlKHsgcGF0aG5hbWU6IHAgfSwgcGFnZXMpLnBhdGhuYW1lISxcbiAgICAgICAgdGhpcy5sb2NhbGVzXG4gICAgICApXG5cbiAgICAgIGlmIChyZXdyaXRlc1Jlc3VsdC5tYXRjaGVkUGFnZSAmJiByZXdyaXRlc1Jlc3VsdC5yZXNvbHZlZEhyZWYpIHtcbiAgICAgICAgLy8gaWYgdGhpcyBkaXJlY3RseSBtYXRjaGVzIGEgcGFnZSB3ZSBuZWVkIHRvIHVwZGF0ZSB0aGUgaHJlZiB0b1xuICAgICAgICAvLyBhbGxvdyB0aGUgY29ycmVjdCBwYWdlIGNodW5rIHRvIGJlIGxvYWRlZFxuICAgICAgICByb3V0ZSA9IHJld3JpdGVzUmVzdWx0LnJlc29sdmVkSHJlZlxuICAgICAgICBwYXRobmFtZSA9IHJld3JpdGVzUmVzdWx0LnJlc29sdmVkSHJlZlxuICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgICAgICB1cmwgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpXG4gICAgICAgIHJlc29sdmVkQXMgPSByZXdyaXRlc1Jlc3VsdC5hc1BhdGhcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBQcmVmZXRjaCBpcyBub3Qgc3VwcG9ydGVkIGluIGRldmVsb3BtZW50IG1vZGUgYmVjYXVzZSBpdCB3b3VsZCB0cmlnZ2VyIG9uLWRlbWFuZC1lbnRyaWVzXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgIHRoaXMucGFnZUxvYWRlci5faXNTc2codXJsKS50aGVuKChpc1NzZzogYm9vbGVhbikgPT4ge1xuICAgICAgICByZXR1cm4gaXNTc2dcbiAgICAgICAgICA/IHRoaXMuX2dldFN0YXRpY0RhdGEoXG4gICAgICAgICAgICAgIHRoaXMucGFnZUxvYWRlci5nZXREYXRhSHJlZihcbiAgICAgICAgICAgICAgICB1cmwsXG4gICAgICAgICAgICAgICAgcmVzb2x2ZWRBcyxcbiAgICAgICAgICAgICAgICB0cnVlLFxuICAgICAgICAgICAgICAgIHR5cGVvZiBvcHRpb25zLmxvY2FsZSAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgICAgICAgICAgICAgID8gb3B0aW9ucy5sb2NhbGVcbiAgICAgICAgICAgICAgICAgIDogdGhpcy5sb2NhbGVcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKVxuICAgICAgICAgIDogZmFsc2VcbiAgICAgIH0pLFxuICAgICAgdGhpcy5wYWdlTG9hZGVyW29wdGlvbnMucHJpb3JpdHkgPyAnbG9hZFBhZ2UnIDogJ3ByZWZldGNoJ10ocm91dGUpLFxuICAgIF0pXG4gIH1cblxuICBhc3luYyBmZXRjaENvbXBvbmVudChyb3V0ZTogc3RyaW5nKTogUHJvbWlzZTxHb29kUGFnZUNhY2hlPiB7XG4gICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlXG4gICAgY29uc3QgY2FuY2VsID0gKHRoaXMuY2xjID0gKCkgPT4ge1xuICAgICAgY2FuY2VsbGVkID0gdHJ1ZVxuICAgIH0pXG5cbiAgICBjb25zdCBjb21wb25lbnRSZXN1bHQgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIubG9hZFBhZ2Uocm91dGUpXG5cbiAgICBpZiAoY2FuY2VsbGVkKSB7XG4gICAgICBjb25zdCBlcnJvcjogYW55ID0gbmV3IEVycm9yKFxuICAgICAgICBgQWJvcnQgZmV0Y2hpbmcgY29tcG9uZW50IGZvciByb3V0ZTogXCIke3JvdXRlfVwiYFxuICAgICAgKVxuICAgICAgZXJyb3IuY2FuY2VsbGVkID0gdHJ1ZVxuICAgICAgdGhyb3cgZXJyb3JcbiAgICB9XG5cbiAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbXBvbmVudFJlc3VsdFxuICB9XG5cbiAgX2dldERhdGE8VD4oZm46ICgpID0+IFByb21pc2U8VD4pOiBQcm9taXNlPFQ+IHtcbiAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2VcbiAgICBjb25zdCBjYW5jZWwgPSAoKSA9PiB7XG4gICAgICBjYW5jZWxsZWQgPSB0cnVlXG4gICAgfVxuICAgIHRoaXMuY2xjID0gY2FuY2VsXG4gICAgcmV0dXJuIGZuKCkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgaWYgKGNhbmNlbCA9PT0gdGhpcy5jbGMpIHtcbiAgICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgICB9XG5cbiAgICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgICAgY29uc3QgZXJyOiBhbnkgPSBuZXcgRXJyb3IoJ0xvYWRpbmcgaW5pdGlhbCBwcm9wcyBjYW5jZWxsZWQnKVxuICAgICAgICBlcnIuY2FuY2VsbGVkID0gdHJ1ZVxuICAgICAgICB0aHJvdyBlcnJcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGRhdGFcbiAgICB9KVxuICB9XG5cbiAgX2dldFN0YXRpY0RhdGEoZGF0YUhyZWY6IHN0cmluZyk6IFByb21pc2U8b2JqZWN0PiB7XG4gICAgY29uc3QgeyBocmVmOiBjYWNoZUtleSB9ID0gbmV3IFVSTChkYXRhSHJlZiwgd2luZG93LmxvY2F0aW9uLmhyZWYpXG4gICAgaWYgKFxuICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyAmJlxuICAgICAgIXRoaXMuaXNQcmV2aWV3ICYmXG4gICAgICB0aGlzLnNkY1tjYWNoZUtleV1cbiAgICApIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5zZGNbY2FjaGVLZXldKVxuICAgIH1cbiAgICByZXR1cm4gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZiwgdGhpcy5pc1NzcikudGhlbigoZGF0YSkgPT4ge1xuICAgICAgdGhpcy5zZGNbY2FjaGVLZXldID0gZGF0YVxuICAgICAgcmV0dXJuIGRhdGFcbiAgICB9KVxuICB9XG5cbiAgX2dldFNlcnZlckRhdGEoZGF0YUhyZWY6IHN0cmluZyk6IFByb21pc2U8b2JqZWN0PiB7XG4gICAgY29uc3QgeyBocmVmOiByZXNvdXJjZUtleSB9ID0gbmV3IFVSTChkYXRhSHJlZiwgd2luZG93LmxvY2F0aW9uLmhyZWYpXG4gICAgaWYgKHRoaXMuc2RyW3Jlc291cmNlS2V5XSkge1xuICAgICAgcmV0dXJuIHRoaXMuc2RyW3Jlc291cmNlS2V5XVxuICAgIH1cbiAgICByZXR1cm4gKHRoaXMuc2RyW3Jlc291cmNlS2V5XSA9IGZldGNoTmV4dERhdGEoZGF0YUhyZWYsIHRoaXMuaXNTc3IpXG4gICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICBkZWxldGUgdGhpcy5zZHJbcmVzb3VyY2VLZXldXG4gICAgICAgIHJldHVybiBkYXRhXG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgZGVsZXRlIHRoaXMuc2RyW3Jlc291cmNlS2V5XVxuICAgICAgICB0aHJvdyBlcnJcbiAgICAgIH0pKVxuICB9XG5cbiAgZ2V0SW5pdGlhbFByb3BzKFxuICAgIENvbXBvbmVudDogQ29tcG9uZW50VHlwZSxcbiAgICBjdHg6IE5leHRQYWdlQ29udGV4dFxuICApOiBQcm9taXNlPGFueT4ge1xuICAgIGNvbnN0IHsgQ29tcG9uZW50OiBBcHAgfSA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXVxuICAgIGNvbnN0IEFwcFRyZWUgPSB0aGlzLl93cmFwQXBwKEFwcCBhcyBBcHBDb21wb25lbnQpXG4gICAgY3R4LkFwcFRyZWUgPSBBcHBUcmVlXG4gICAgcmV0dXJuIGxvYWRHZXRJbml0aWFsUHJvcHM8QXBwQ29udGV4dFR5cGU8Um91dGVyPj4oQXBwLCB7XG4gICAgICBBcHBUcmVlLFxuICAgICAgQ29tcG9uZW50LFxuICAgICAgcm91dGVyOiB0aGlzLFxuICAgICAgY3R4LFxuICAgIH0pXG4gIH1cblxuICBhYm9ydENvbXBvbmVudExvYWQoYXM6IHN0cmluZywgcm91dGVQcm9wczogUm91dGVQcm9wZXJ0aWVzKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuY2xjKSB7XG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoXG4gICAgICAgICdyb3V0ZUNoYW5nZUVycm9yJyxcbiAgICAgICAgYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpLFxuICAgICAgICBhcyxcbiAgICAgICAgcm91dGVQcm9wc1xuICAgICAgKVxuICAgICAgdGhpcy5jbGMoKVxuICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgfVxuICB9XG5cbiAgbm90aWZ5KFxuICAgIGRhdGE6IFByaXZhdGVSb3V0ZUluZm8sXG4gICAgcmVzZXRTY3JvbGw6IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfSB8IG51bGxcbiAgKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIHRoaXMuc3ViKFxuICAgICAgZGF0YSxcbiAgICAgIHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnQgYXMgQXBwQ29tcG9uZW50LFxuICAgICAgcmVzZXRTY3JvbGxcbiAgICApXG4gIH1cbn1cbiIsIi8vIEZvcm1hdCBmdW5jdGlvbiBtb2RpZmllZCBmcm9tIG5vZGVqc1xuLy8gQ29weXJpZ2h0IEpveWVudCwgSW5jLiBhbmQgb3RoZXIgTm9kZSBjb250cmlidXRvcnMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcbi8vIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcbi8vIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZ1xuLy8gd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxuLy8gZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdFxuLy8gcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlXG4vLyBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZFxuLy8gaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTU1xuLy8gT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuLy8gTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTlxuLy8gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sXG4vLyBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1Jcbi8vIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEVcbi8vIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgKiBhcyBxdWVyeXN0cmluZyBmcm9tICcuL3F1ZXJ5c3RyaW5nJ1xuXG5jb25zdCBzbGFzaGVkUHJvdG9jb2xzID0gL2h0dHBzP3xmdHB8Z29waGVyfGZpbGUvXG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRVcmwodXJsT2JqOiBVcmxPYmplY3QpIHtcbiAgbGV0IHsgYXV0aCwgaG9zdG5hbWUgfSA9IHVybE9ialxuICBsZXQgcHJvdG9jb2wgPSB1cmxPYmoucHJvdG9jb2wgfHwgJydcbiAgbGV0IHBhdGhuYW1lID0gdXJsT2JqLnBhdGhuYW1lIHx8ICcnXG4gIGxldCBoYXNoID0gdXJsT2JqLmhhc2ggfHwgJydcbiAgbGV0IHF1ZXJ5ID0gdXJsT2JqLnF1ZXJ5IHx8ICcnXG4gIGxldCBob3N0OiBzdHJpbmcgfCBmYWxzZSA9IGZhbHNlXG5cbiAgYXV0aCA9IGF1dGggPyBlbmNvZGVVUklDb21wb25lbnQoYXV0aCkucmVwbGFjZSgvJTNBL2ksICc6JykgKyAnQCcgOiAnJ1xuXG4gIGlmICh1cmxPYmouaG9zdCkge1xuICAgIGhvc3QgPSBhdXRoICsgdXJsT2JqLmhvc3RcbiAgfSBlbHNlIGlmIChob3N0bmFtZSkge1xuICAgIGhvc3QgPSBhdXRoICsgKH5ob3N0bmFtZS5pbmRleE9mKCc6JykgPyBgWyR7aG9zdG5hbWV9XWAgOiBob3N0bmFtZSlcbiAgICBpZiAodXJsT2JqLnBvcnQpIHtcbiAgICAgIGhvc3QgKz0gJzonICsgdXJsT2JqLnBvcnRcbiAgICB9XG4gIH1cblxuICBpZiAocXVlcnkgJiYgdHlwZW9mIHF1ZXJ5ID09PSAnb2JqZWN0Jykge1xuICAgIHF1ZXJ5ID0gU3RyaW5nKHF1ZXJ5c3RyaW5nLnVybFF1ZXJ5VG9TZWFyY2hQYXJhbXMocXVlcnkgYXMgUGFyc2VkVXJsUXVlcnkpKVxuICB9XG5cbiAgbGV0IHNlYXJjaCA9IHVybE9iai5zZWFyY2ggfHwgKHF1ZXJ5ICYmIGA/JHtxdWVyeX1gKSB8fCAnJ1xuXG4gIGlmIChwcm90b2NvbCAmJiBwcm90b2NvbC5zdWJzdHIoLTEpICE9PSAnOicpIHByb3RvY29sICs9ICc6J1xuXG4gIGlmIChcbiAgICB1cmxPYmouc2xhc2hlcyB8fFxuICAgICgoIXByb3RvY29sIHx8IHNsYXNoZWRQcm90b2NvbHMudGVzdChwcm90b2NvbCkpICYmIGhvc3QgIT09IGZhbHNlKVxuICApIHtcbiAgICBob3N0ID0gJy8vJyArIChob3N0IHx8ICcnKVxuICAgIGlmIChwYXRobmFtZSAmJiBwYXRobmFtZVswXSAhPT0gJy8nKSBwYXRobmFtZSA9ICcvJyArIHBhdGhuYW1lXG4gIH0gZWxzZSBpZiAoIWhvc3QpIHtcbiAgICBob3N0ID0gJydcbiAgfVxuXG4gIGlmIChoYXNoICYmIGhhc2hbMF0gIT09ICcjJykgaGFzaCA9ICcjJyArIGhhc2hcbiAgaWYgKHNlYXJjaCAmJiBzZWFyY2hbMF0gIT09ICc/Jykgc2VhcmNoID0gJz8nICsgc2VhcmNoXG5cbiAgcGF0aG5hbWUgPSBwYXRobmFtZS5yZXBsYWNlKC9bPyNdL2csIGVuY29kZVVSSUNvbXBvbmVudClcbiAgc2VhcmNoID0gc2VhcmNoLnJlcGxhY2UoJyMnLCAnJTIzJylcblxuICByZXR1cm4gYCR7cHJvdG9jb2x9JHtob3N0fSR7cGF0aG5hbWV9JHtzZWFyY2h9JHtoYXNofWBcbn1cbiIsIi8vIElkZW50aWZ5IC9bcGFyYW1dLyBpbiByb3V0ZSBzdHJpbmdcbmNvbnN0IFRFU1RfUk9VVEUgPSAvXFwvXFxbW14vXSs/XFxdKD89XFwvfCQpL1xuXG5leHBvcnQgZnVuY3Rpb24gaXNEeW5hbWljUm91dGUocm91dGU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICByZXR1cm4gVEVTVF9ST1VURS50ZXN0KHJvdXRlKVxufVxuIiwiaW1wb3J0IHsgZ2V0TG9jYXRpb25PcmlnaW4gfSBmcm9tICcuLi8uLi91dGlscydcbmltcG9ydCB7IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkgfSBmcm9tICcuL3F1ZXJ5c3RyaW5nJ1xuXG4vKipcbiAqIFBhcnNlcyBwYXRoLXJlbGF0aXZlIHVybHMgKGUuZy4gYC9oZWxsby93b3JsZD9mb289YmFyYCkuIElmIHVybCBpc24ndCBwYXRoLXJlbGF0aXZlXG4gKiAoZS5nLiBgLi9oZWxsb2ApIHRoZW4gYXQgbGVhc3QgYmFzZSBtdXN0IGJlLlxuICogQWJzb2x1dGUgdXJscyBhcmUgcmVqZWN0ZWQgd2l0aCBvbmUgZXhjZXB0aW9uLCBpbiB0aGUgYnJvd3NlciwgYWJzb2x1dGUgdXJscyB0aGF0IGFyZSBvblxuICogdGhlIGN1cnJlbnQgb3JpZ2luIHdpbGwgYmUgcGFyc2VkIGFzIHJlbGF0aXZlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVJlbGF0aXZlVXJsKHVybDogc3RyaW5nLCBiYXNlPzogc3RyaW5nKSB7XG4gIGNvbnN0IGdsb2JhbEJhc2UgPSBuZXcgVVJMKFxuICAgIHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnID8gJ2h0dHA6Ly9uJyA6IGdldExvY2F0aW9uT3JpZ2luKClcbiAgKVxuICBjb25zdCByZXNvbHZlZEJhc2UgPSBiYXNlID8gbmV3IFVSTChiYXNlLCBnbG9iYWxCYXNlKSA6IGdsb2JhbEJhc2VcbiAgY29uc3QgeyBwYXRobmFtZSwgc2VhcmNoUGFyYW1zLCBzZWFyY2gsIGhhc2gsIGhyZWYsIG9yaWdpbiB9ID0gbmV3IFVSTChcbiAgICB1cmwsXG4gICAgcmVzb2x2ZWRCYXNlXG4gIClcbiAgaWYgKG9yaWdpbiAhPT0gZ2xvYmFsQmFzZS5vcmlnaW4pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYGludmFyaWFudDogaW52YWxpZCByZWxhdGl2ZSBVUkwsIHJvdXRlciByZWNlaXZlZCAke3VybH1gKVxuICB9XG4gIHJldHVybiB7XG4gICAgcGF0aG5hbWUsXG4gICAgcXVlcnk6IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoc2VhcmNoUGFyYW1zKSxcbiAgICBzZWFyY2gsXG4gICAgaGFzaCxcbiAgICBocmVmOiBocmVmLnNsaWNlKGdsb2JhbEJhc2Uub3JpZ2luLmxlbmd0aCksXG4gIH1cbn1cbiIsImltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5cbmV4cG9ydCBmdW5jdGlvbiBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KFxuICBzZWFyY2hQYXJhbXM6IFVSTFNlYXJjaFBhcmFtc1xuKTogUGFyc2VkVXJsUXVlcnkge1xuICBjb25zdCBxdWVyeTogUGFyc2VkVXJsUXVlcnkgPSB7fVxuICBzZWFyY2hQYXJhbXMuZm9yRWFjaCgodmFsdWUsIGtleSkgPT4ge1xuICAgIGlmICh0eXBlb2YgcXVlcnlba2V5XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHF1ZXJ5W2tleV0gPSB2YWx1ZVxuICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShxdWVyeVtrZXldKSkge1xuICAgICAgOyhxdWVyeVtrZXldIGFzIHN0cmluZ1tdKS5wdXNoKHZhbHVlKVxuICAgIH0gZWxzZSB7XG4gICAgICBxdWVyeVtrZXldID0gW3F1ZXJ5W2tleV0gYXMgc3RyaW5nLCB2YWx1ZV1cbiAgICB9XG4gIH0pXG4gIHJldHVybiBxdWVyeVxufVxuXG5mdW5jdGlvbiBzdHJpbmdpZnlVcmxRdWVyeVBhcmFtKHBhcmFtOiBzdHJpbmcpOiBzdHJpbmcge1xuICBpZiAoXG4gICAgdHlwZW9mIHBhcmFtID09PSAnc3RyaW5nJyB8fFxuICAgICh0eXBlb2YgcGFyYW0gPT09ICdudW1iZXInICYmICFpc05hTihwYXJhbSkpIHx8XG4gICAgdHlwZW9mIHBhcmFtID09PSAnYm9vbGVhbidcbiAgKSB7XG4gICAgcmV0dXJuIFN0cmluZyhwYXJhbSlcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gJydcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdXJsUXVlcnlUb1NlYXJjaFBhcmFtcyhcbiAgdXJsUXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4pOiBVUkxTZWFyY2hQYXJhbXMge1xuICBjb25zdCByZXN1bHQgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKClcbiAgT2JqZWN0LmVudHJpZXModXJsUXVlcnkpLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xuICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgdmFsdWUuZm9yRWFjaCgoaXRlbSkgPT4gcmVzdWx0LmFwcGVuZChrZXksIHN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0oaXRlbSkpKVxuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHQuc2V0KGtleSwgc3RyaW5naWZ5VXJsUXVlcnlQYXJhbSh2YWx1ZSkpXG4gICAgfVxuICB9KVxuICByZXR1cm4gcmVzdWx0XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhc3NpZ24oXG4gIHRhcmdldDogVVJMU2VhcmNoUGFyYW1zLFxuICAuLi5zZWFyY2hQYXJhbXNMaXN0OiBVUkxTZWFyY2hQYXJhbXNbXVxuKTogVVJMU2VhcmNoUGFyYW1zIHtcbiAgc2VhcmNoUGFyYW1zTGlzdC5mb3JFYWNoKChzZWFyY2hQYXJhbXMpID0+IHtcbiAgICBBcnJheS5mcm9tKHNlYXJjaFBhcmFtcy5rZXlzKCkpLmZvckVhY2goKGtleSkgPT4gdGFyZ2V0LmRlbGV0ZShrZXkpKVxuICAgIHNlYXJjaFBhcmFtcy5mb3JFYWNoKCh2YWx1ZSwga2V5KSA9PiB0YXJnZXQuYXBwZW5kKGtleSwgdmFsdWUpKVxuICB9KVxuICByZXR1cm4gdGFyZ2V0XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXNvbHZlUmV3cml0ZXMoKSB7fVxuIiwiaW1wb3J0IHsgZ2V0Um91dGVSZWdleCB9IGZyb20gJy4vcm91dGUtcmVnZXgnXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleDogUmV0dXJuVHlwZTx0eXBlb2YgZ2V0Um91dGVSZWdleD4pIHtcbiAgY29uc3QgeyByZSwgZ3JvdXBzIH0gPSByb3V0ZVJlZ2V4XG4gIHJldHVybiAocGF0aG5hbWU6IHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWQpID0+IHtcbiAgICBjb25zdCByb3V0ZU1hdGNoID0gcmUuZXhlYyhwYXRobmFtZSEpXG4gICAgaWYgKCFyb3V0ZU1hdGNoKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBjb25zdCBkZWNvZGUgPSAocGFyYW06IHN0cmluZykgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChwYXJhbSlcbiAgICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgY29uc3QgZXJyOiBFcnJvciAmIHsgY29kZT86IHN0cmluZyB9ID0gbmV3IEVycm9yKFxuICAgICAgICAgICdmYWlsZWQgdG8gZGVjb2RlIHBhcmFtJ1xuICAgICAgICApXG4gICAgICAgIGVyci5jb2RlID0gJ0RFQ09ERV9GQUlMRUQnXG4gICAgICAgIHRocm93IGVyclxuICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBwYXJhbXM6IHsgW3BhcmFtTmFtZTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW10gfSA9IHt9XG5cbiAgICBPYmplY3Qua2V5cyhncm91cHMpLmZvckVhY2goKHNsdWdOYW1lOiBzdHJpbmcpID0+IHtcbiAgICAgIGNvbnN0IGcgPSBncm91cHNbc2x1Z05hbWVdXG4gICAgICBjb25zdCBtID0gcm91dGVNYXRjaFtnLnBvc11cbiAgICAgIGlmIChtICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcGFyYW1zW3NsdWdOYW1lXSA9IH5tLmluZGV4T2YoJy8nKVxuICAgICAgICAgID8gbS5zcGxpdCgnLycpLm1hcCgoZW50cnkpID0+IGRlY29kZShlbnRyeSkpXG4gICAgICAgICAgOiBnLnJlcGVhdFxuICAgICAgICAgID8gW2RlY29kZShtKV1cbiAgICAgICAgICA6IGRlY29kZShtKVxuICAgICAgfVxuICAgIH0pXG4gICAgcmV0dXJuIHBhcmFtc1xuICB9XG59XG4iLCJleHBvcnQgaW50ZXJmYWNlIEdyb3VwIHtcbiAgcG9zOiBudW1iZXJcbiAgcmVwZWF0OiBib29sZWFuXG4gIG9wdGlvbmFsOiBib29sZWFuXG59XG5cbi8vIHRoaXMgaXNuJ3QgaW1wb3J0aW5nIHRoZSBlc2NhcGUtc3RyaW5nLXJlZ2V4IG1vZHVsZVxuLy8gdG8gcmVkdWNlIGJ5dGVzXG5mdW5jdGlvbiBlc2NhcGVSZWdleChzdHI6IHN0cmluZykge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoL1t8XFxcXHt9KClbXFxdXiQrKj8uLV0vZywgJ1xcXFwkJicpXG59XG5cbmZ1bmN0aW9uIHBhcnNlUGFyYW1ldGVyKHBhcmFtOiBzdHJpbmcpIHtcbiAgY29uc3Qgb3B0aW9uYWwgPSBwYXJhbS5zdGFydHNXaXRoKCdbJykgJiYgcGFyYW0uZW5kc1dpdGgoJ10nKVxuICBpZiAob3B0aW9uYWwpIHtcbiAgICBwYXJhbSA9IHBhcmFtLnNsaWNlKDEsIC0xKVxuICB9XG4gIGNvbnN0IHJlcGVhdCA9IHBhcmFtLnN0YXJ0c1dpdGgoJy4uLicpXG4gIGlmIChyZXBlYXQpIHtcbiAgICBwYXJhbSA9IHBhcmFtLnNsaWNlKDMpXG4gIH1cbiAgcmV0dXJuIHsga2V5OiBwYXJhbSwgcmVwZWF0LCBvcHRpb25hbCB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSb3V0ZVJlZ2V4KFxuICBub3JtYWxpemVkUm91dGU6IHN0cmluZ1xuKToge1xuICByZTogUmVnRXhwXG4gIG5hbWVkUmVnZXg/OiBzdHJpbmdcbiAgcm91dGVLZXlzPzogeyBbbmFtZWQ6IHN0cmluZ106IHN0cmluZyB9XG4gIGdyb3VwczogeyBbZ3JvdXBOYW1lOiBzdHJpbmddOiBHcm91cCB9XG59IHtcbiAgY29uc3Qgc2VnbWVudHMgPSAobm9ybWFsaXplZFJvdXRlLnJlcGxhY2UoL1xcLyQvLCAnJykgfHwgJy8nKVxuICAgIC5zbGljZSgxKVxuICAgIC5zcGxpdCgnLycpXG5cbiAgY29uc3QgZ3JvdXBzOiB7IFtncm91cE5hbWU6IHN0cmluZ106IEdyb3VwIH0gPSB7fVxuICBsZXQgZ3JvdXBJbmRleCA9IDFcbiAgY29uc3QgcGFyYW1ldGVyaXplZFJvdXRlID0gc2VnbWVudHNcbiAgICAubWFwKChzZWdtZW50KSA9PiB7XG4gICAgICBpZiAoc2VnbWVudC5zdGFydHNXaXRoKCdbJykgJiYgc2VnbWVudC5lbmRzV2l0aCgnXScpKSB7XG4gICAgICAgIGNvbnN0IHsga2V5LCBvcHRpb25hbCwgcmVwZWF0IH0gPSBwYXJzZVBhcmFtZXRlcihzZWdtZW50LnNsaWNlKDEsIC0xKSlcbiAgICAgICAgZ3JvdXBzW2tleV0gPSB7IHBvczogZ3JvdXBJbmRleCsrLCByZXBlYXQsIG9wdGlvbmFsIH1cbiAgICAgICAgcmV0dXJuIHJlcGVhdCA/IChvcHRpb25hbCA/ICcoPzovKC4rPykpPycgOiAnLyguKz8pJykgOiAnLyhbXi9dKz8pJ1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGAvJHtlc2NhcGVSZWdleChzZWdtZW50KX1gXG4gICAgICB9XG4gICAgfSlcbiAgICAuam9pbignJylcblxuICAvLyBkZWFkIGNvZGUgZWxpbWluYXRlIGZvciBicm93c2VyIHNpbmNlIGl0J3Mgb25seSBuZWVkZWRcbiAgLy8gd2hpbGUgZ2VuZXJhdGluZyByb3V0ZXMtbWFuaWZlc3RcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgbGV0IHJvdXRlS2V5Q2hhckNvZGUgPSA5N1xuICAgIGxldCByb3V0ZUtleUNoYXJMZW5ndGggPSAxXG5cbiAgICAvLyBidWlsZHMgYSBtaW5pbWFsIHJvdXRlS2V5IHVzaW5nIG9ubHkgYS16IGFuZCBtaW5pbWFsIG51bWJlciBvZiBjaGFyYWN0ZXJzXG4gICAgY29uc3QgZ2V0U2FmZVJvdXRlS2V5ID0gKCkgPT4ge1xuICAgICAgbGV0IHJvdXRlS2V5ID0gJydcblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByb3V0ZUtleUNoYXJMZW5ndGg7IGkrKykge1xuICAgICAgICByb3V0ZUtleSArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKHJvdXRlS2V5Q2hhckNvZGUpXG4gICAgICAgIHJvdXRlS2V5Q2hhckNvZGUrK1xuXG4gICAgICAgIGlmIChyb3V0ZUtleUNoYXJDb2RlID4gMTIyKSB7XG4gICAgICAgICAgcm91dGVLZXlDaGFyTGVuZ3RoKytcbiAgICAgICAgICByb3V0ZUtleUNoYXJDb2RlID0gOTdcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHJvdXRlS2V5XG4gICAgfVxuXG4gICAgY29uc3Qgcm91dGVLZXlzOiB7IFtuYW1lZDogc3RyaW5nXTogc3RyaW5nIH0gPSB7fVxuXG4gICAgbGV0IG5hbWVkUGFyYW1ldGVyaXplZFJvdXRlID0gc2VnbWVudHNcbiAgICAgIC5tYXAoKHNlZ21lbnQpID0+IHtcbiAgICAgICAgaWYgKHNlZ21lbnQuc3RhcnRzV2l0aCgnWycpICYmIHNlZ21lbnQuZW5kc1dpdGgoJ10nKSkge1xuICAgICAgICAgIGNvbnN0IHsga2V5LCBvcHRpb25hbCwgcmVwZWF0IH0gPSBwYXJzZVBhcmFtZXRlcihzZWdtZW50LnNsaWNlKDEsIC0xKSlcbiAgICAgICAgICAvLyByZXBsYWNlIGFueSBub24td29yZCBjaGFyYWN0ZXJzIHNpbmNlIHRoZXkgY2FuIGJyZWFrXG4gICAgICAgICAgLy8gdGhlIG5hbWVkIHJlZ2V4XG4gICAgICAgICAgbGV0IGNsZWFuZWRLZXkgPSBrZXkucmVwbGFjZSgvXFxXL2csICcnKVxuICAgICAgICAgIGxldCBpbnZhbGlkS2V5ID0gZmFsc2VcblxuICAgICAgICAgIC8vIGNoZWNrIGlmIHRoZSBrZXkgaXMgc3RpbGwgaW52YWxpZCBhbmQgZmFsbGJhY2sgdG8gdXNpbmcgYSBrbm93blxuICAgICAgICAgIC8vIHNhZmUga2V5XG4gICAgICAgICAgaWYgKGNsZWFuZWRLZXkubGVuZ3RoID09PSAwIHx8IGNsZWFuZWRLZXkubGVuZ3RoID4gMzApIHtcbiAgICAgICAgICAgIGludmFsaWRLZXkgPSB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICghaXNOYU4ocGFyc2VJbnQoY2xlYW5lZEtleS5zdWJzdHIoMCwgMSkpKSkge1xuICAgICAgICAgICAgaW52YWxpZEtleSA9IHRydWVcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoaW52YWxpZEtleSkge1xuICAgICAgICAgICAgY2xlYW5lZEtleSA9IGdldFNhZmVSb3V0ZUtleSgpXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcm91dGVLZXlzW2NsZWFuZWRLZXldID0ga2V5XG4gICAgICAgICAgcmV0dXJuIHJlcGVhdFxuICAgICAgICAgICAgPyBvcHRpb25hbFxuICAgICAgICAgICAgICA/IGAoPzovKD88JHtjbGVhbmVkS2V5fT4uKz8pKT9gXG4gICAgICAgICAgICAgIDogYC8oPzwke2NsZWFuZWRLZXl9Pi4rPylgXG4gICAgICAgICAgICA6IGAvKD88JHtjbGVhbmVkS2V5fT5bXi9dKz8pYFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBgLyR7ZXNjYXBlUmVnZXgoc2VnbWVudCl9YFxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmpvaW4oJycpXG5cbiAgICByZXR1cm4ge1xuICAgICAgcmU6IG5ldyBSZWdFeHAoYF4ke3BhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCksXG4gICAgICBncm91cHMsXG4gICAgICByb3V0ZUtleXMsXG4gICAgICBuYW1lZFJlZ2V4OiBgXiR7bmFtZWRQYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGAsXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICByZTogbmV3IFJlZ0V4cChgXiR7cGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgKSxcbiAgICBncm91cHMsXG4gIH1cbn1cbiIsImltcG9ydCB7IEluY29taW5nTWVzc2FnZSwgU2VydmVyUmVzcG9uc2UgfSBmcm9tICdodHRwJ1xuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCB7IENvbXBvbmVudFR5cGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7IGZvcm1hdFVybCB9IGZyb20gJy4vcm91dGVyL3V0aWxzL2Zvcm1hdC11cmwnXG5pbXBvcnQgeyBNYW5pZmVzdEl0ZW0gfSBmcm9tICcuLi9zZXJ2ZXIvbG9hZC1jb21wb25lbnRzJ1xuaW1wb3J0IHsgTmV4dFJvdXRlciB9IGZyb20gJy4vcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IEVudiB9IGZyb20gJ0BuZXh0L2VudidcbmltcG9ydCB7IEJ1aWxkTWFuaWZlc3QgfSBmcm9tICcuLi9zZXJ2ZXIvZ2V0LXBhZ2UtZmlsZXMnXG5pbXBvcnQgeyBEb21haW5Mb2NhbGVzIH0gZnJvbSAnLi4vc2VydmVyL2NvbmZpZydcblxuLyoqXG4gKiBUeXBlcyB1c2VkIGJ5IGJvdGggbmV4dCBhbmQgbmV4dC1zZXJ2ZXJcbiAqL1xuXG5leHBvcnQgdHlwZSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgQyBleHRlbmRzIEJhc2VDb250ZXh0ID0gTmV4dFBhZ2VDb250ZXh0LFxuICBJUCA9IHt9LFxuICBQID0ge31cbj4gPSBDb21wb25lbnRUeXBlPFA+ICYge1xuICAvKipcbiAgICogVXNlZCBmb3IgaW5pdGlhbCBwYWdlIGxvYWQgZGF0YSBwb3B1bGF0aW9uLiBEYXRhIHJldHVybmVkIGZyb20gYGdldEluaXRpYWxQcm9wc2AgaXMgc2VyaWFsaXplZCB3aGVuIHNlcnZlciByZW5kZXJlZC5cbiAgICogTWFrZSBzdXJlIHRvIHJldHVybiBwbGFpbiBgT2JqZWN0YCB3aXRob3V0IHVzaW5nIGBEYXRlYCwgYE1hcGAsIGBTZXRgLlxuICAgKiBAcGFyYW0gY3R4IENvbnRleHQgb2YgYHBhZ2VgXG4gICAqL1xuICBnZXRJbml0aWFsUHJvcHM/KGNvbnRleHQ6IEMpOiBJUCB8IFByb21pc2U8SVA+XG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50VHlwZSA9IE5leHRDb21wb25lbnRUeXBlPFxuICBEb2N1bWVudENvbnRleHQsXG4gIERvY3VtZW50SW5pdGlhbFByb3BzLFxuICBEb2N1bWVudFByb3BzXG4+ICYge1xuICByZW5kZXJEb2N1bWVudChcbiAgICBEb2N1bWVudDogRG9jdW1lbnRUeXBlLFxuICAgIHByb3BzOiBEb2N1bWVudFByb3BzXG4gICk6IFJlYWN0LlJlYWN0RWxlbWVudFxufVxuXG5leHBvcnQgdHlwZSBBcHBUeXBlID0gTmV4dENvbXBvbmVudFR5cGU8XG4gIEFwcENvbnRleHRUeXBlLFxuICBBcHBJbml0aWFsUHJvcHMsXG4gIEFwcFByb3BzVHlwZVxuPlxuXG5leHBvcnQgdHlwZSBBcHBUcmVlVHlwZSA9IENvbXBvbmVudFR5cGU8XG4gIEFwcEluaXRpYWxQcm9wcyAmIHsgW25hbWU6IHN0cmluZ106IGFueSB9XG4+XG5cbi8qKlxuICogV2ViIHZpdGFscyBwcm92aWRlZCB0byBfYXBwLnJlcG9ydFdlYlZpdGFscyBieSBDb3JlIFdlYiBWaXRhbHMgcGx1Z2luIGRldmVsb3BlZCBieSBHb29nbGUgQ2hyb21lIHRlYW0uXG4gKiBodHRwczovL25leHRqcy5vcmcvYmxvZy9uZXh0LTktNCNpbnRlZ3JhdGVkLXdlYi12aXRhbHMtcmVwb3J0aW5nXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRXZWJWaXRhbHNNZXRyaWMgPSB7XG4gIGlkOiBzdHJpbmdcbiAgbGFiZWw6IHN0cmluZ1xuICBuYW1lOiBzdHJpbmdcbiAgc3RhcnRUaW1lOiBudW1iZXJcbiAgdmFsdWU6IG51bWJlclxufVxuXG5leHBvcnQgdHlwZSBFbmhhbmNlcjxDPiA9IChDb21wb25lbnQ6IEMpID0+IENcblxuZXhwb3J0IHR5cGUgQ29tcG9uZW50c0VuaGFuY2VyID1cbiAgfCB7XG4gICAgICBlbmhhbmNlQXBwPzogRW5oYW5jZXI8QXBwVHlwZT5cbiAgICAgIGVuaGFuY2VDb21wb25lbnQ/OiBFbmhhbmNlcjxOZXh0Q29tcG9uZW50VHlwZT5cbiAgICB9XG4gIHwgRW5oYW5jZXI8TmV4dENvbXBvbmVudFR5cGU+XG5cbmV4cG9ydCB0eXBlIFJlbmRlclBhZ2VSZXN1bHQgPSB7XG4gIGh0bWw6IHN0cmluZ1xuICBoZWFkPzogQXJyYXk8SlNYLkVsZW1lbnQgfCBudWxsPlxufVxuXG5leHBvcnQgdHlwZSBSZW5kZXJQYWdlID0gKFxuICBvcHRpb25zPzogQ29tcG9uZW50c0VuaGFuY2VyXG4pID0+IFJlbmRlclBhZ2VSZXN1bHQgfCBQcm9taXNlPFJlbmRlclBhZ2VSZXN1bHQ+XG5cbmV4cG9ydCB0eXBlIEJhc2VDb250ZXh0ID0ge1xuICByZXM/OiBTZXJ2ZXJSZXNwb25zZVxuICBbazogc3RyaW5nXTogYW55XG59XG5cbmV4cG9ydCB0eXBlIE5FWFRfREFUQSA9IHtcbiAgcHJvcHM6IFJlY29yZDxzdHJpbmcsIGFueT5cbiAgcGFnZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBidWlsZElkOiBzdHJpbmdcbiAgYXNzZXRQcmVmaXg/OiBzdHJpbmdcbiAgcnVudGltZUNvbmZpZz86IHsgW2tleTogc3RyaW5nXTogYW55IH1cbiAgbmV4dEV4cG9ydD86IGJvb2xlYW5cbiAgYXV0b0V4cG9ydD86IGJvb2xlYW5cbiAgaXNGYWxsYmFjaz86IGJvb2xlYW5cbiAgZHluYW1pY0lkcz86IHN0cmluZ1tdXG4gIGVycj86IEVycm9yICYgeyBzdGF0dXNDb2RlPzogbnVtYmVyIH1cbiAgZ3NwPzogYm9vbGVhblxuICBnc3NwPzogYm9vbGVhblxuICBjdXN0b21TZXJ2ZXI/OiBib29sZWFuXG4gIGdpcD86IGJvb2xlYW5cbiAgYXBwR2lwPzogYm9vbGVhblxuICBsb2NhbGU/OiBzdHJpbmdcbiAgbG9jYWxlcz86IHN0cmluZ1tdXG4gIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcbiAgZG9tYWluTG9jYWxlcz86IERvbWFpbkxvY2FsZXNcbiAgc2NyaXB0TG9hZGVyPzogYW55W11cbiAgaXNQcmV2aWV3PzogYm9vbGVhblxufVxuXG4vKipcbiAqIGBOZXh0YCBjb250ZXh0XG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTmV4dFBhZ2VDb250ZXh0IHtcbiAgLyoqXG4gICAqIEVycm9yIG9iamVjdCBpZiBlbmNvdW50ZXJlZCBkdXJpbmcgcmVuZGVyaW5nXG4gICAqL1xuICBlcnI/OiAoRXJyb3IgJiB7IHN0YXR1c0NvZGU/OiBudW1iZXIgfSkgfCBudWxsXG4gIC8qKlxuICAgKiBgSFRUUGAgcmVxdWVzdCBvYmplY3QuXG4gICAqL1xuICByZXE/OiBJbmNvbWluZ01lc3NhZ2VcbiAgLyoqXG4gICAqIGBIVFRQYCByZXNwb25zZSBvYmplY3QuXG4gICAqL1xuICByZXM/OiBTZXJ2ZXJSZXNwb25zZVxuICAvKipcbiAgICogUGF0aCBzZWN0aW9uIG9mIGBVUkxgLlxuICAgKi9cbiAgcGF0aG5hbWU6IHN0cmluZ1xuICAvKipcbiAgICogUXVlcnkgc3RyaW5nIHNlY3Rpb24gb2YgYFVSTGAgcGFyc2VkIGFzIGFuIG9iamVjdC5cbiAgICovXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICAvKipcbiAgICogYFN0cmluZ2Agb2YgdGhlIGFjdHVhbCBwYXRoIGluY2x1ZGluZyBxdWVyeS5cbiAgICovXG4gIGFzUGF0aD86IHN0cmluZ1xuICAvKipcbiAgICogYENvbXBvbmVudGAgdGhlIHRyZWUgb2YgdGhlIEFwcCB0byB1c2UgaWYgbmVlZGluZyB0byByZW5kZXIgc2VwYXJhdGVseVxuICAgKi9cbiAgQXBwVHJlZTogQXBwVHJlZVR5cGVcbn1cblxuZXhwb3J0IHR5cGUgQXBwQ29udGV4dFR5cGU8UiBleHRlbmRzIE5leHRSb3V0ZXIgPSBOZXh0Um91dGVyPiA9IHtcbiAgQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxOZXh0UGFnZUNvbnRleHQ+XG4gIEFwcFRyZWU6IEFwcFRyZWVUeXBlXG4gIGN0eDogTmV4dFBhZ2VDb250ZXh0XG4gIHJvdXRlcjogUlxufVxuXG5leHBvcnQgdHlwZSBBcHBJbml0aWFsUHJvcHMgPSB7XG4gIHBhZ2VQcm9wczogYW55XG59XG5cbmV4cG9ydCB0eXBlIEFwcFByb3BzVHlwZTxcbiAgUiBleHRlbmRzIE5leHRSb3V0ZXIgPSBOZXh0Um91dGVyLFxuICBQID0ge31cbj4gPSBBcHBJbml0aWFsUHJvcHMgJiB7XG4gIENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8TmV4dFBhZ2VDb250ZXh0LCBhbnksIFA+XG4gIHJvdXRlcjogUlxuICBfX05fU1NHPzogYm9vbGVhblxuICBfX05fU1NQPzogYm9vbGVhblxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudENvbnRleHQgPSBOZXh0UGFnZUNvbnRleHQgJiB7XG4gIHJlbmRlclBhZ2U6IFJlbmRlclBhZ2Vcbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRJbml0aWFsUHJvcHMgPSBSZW5kZXJQYWdlUmVzdWx0ICYge1xuICBzdHlsZXM/OiBSZWFjdC5SZWFjdEVsZW1lbnRbXSB8IFJlYWN0LlJlYWN0RnJhZ21lbnRcbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRQcm9wcyA9IERvY3VtZW50SW5pdGlhbFByb3BzICYge1xuICBfX05FWFRfREFUQV9fOiBORVhUX0RBVEFcbiAgZGFuZ2Vyb3VzQXNQYXRoOiBzdHJpbmdcbiAgZG9jQ29tcG9uZW50c1JlbmRlcmVkOiB7XG4gICAgSHRtbD86IGJvb2xlYW5cbiAgICBNYWluPzogYm9vbGVhblxuICAgIEhlYWQ/OiBib29sZWFuXG4gICAgTmV4dFNjcmlwdD86IGJvb2xlYW5cbiAgfVxuICBidWlsZE1hbmlmZXN0OiBCdWlsZE1hbmlmZXN0XG4gIGFtcFBhdGg6IHN0cmluZ1xuICBpbkFtcE1vZGU6IGJvb2xlYW5cbiAgaHlicmlkQW1wOiBib29sZWFuXG4gIGlzRGV2ZWxvcG1lbnQ6IGJvb2xlYW5cbiAgZHluYW1pY0ltcG9ydHM6IE1hbmlmZXN0SXRlbVtdXG4gIGFzc2V0UHJlZml4Pzogc3RyaW5nXG4gIGNhbm9uaWNhbEJhc2U6IHN0cmluZ1xuICBoZWFkVGFnczogYW55W11cbiAgdW5zdGFibGVfcnVudGltZUpTPzogZmFsc2VcbiAgdW5zdGFibGVfSnNQcmVsb2FkPzogZmFsc2VcbiAgZGV2T25seUNhY2hlQnVzdGVyUXVlcnlTdHJpbmc6IHN0cmluZ1xuICBzY3JpcHRMb2FkZXI6IHsgZGVmZXI/OiBzdHJpbmdbXTsgZWFnZXI/OiBhbnlbXSB9XG4gIGxvY2FsZT86IHN0cmluZ1xufVxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgcmVxdWVzdFxuICovXG5leHBvcnQgaW50ZXJmYWNlIE5leHRBcGlSZXF1ZXN0IGV4dGVuZHMgSW5jb21pbmdNZXNzYWdlIHtcbiAgLyoqXG4gICAqIE9iamVjdCBvZiBgcXVlcnlgIHZhbHVlcyBmcm9tIHVybFxuICAgKi9cbiAgcXVlcnk6IHtcbiAgICBba2V5OiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXVxuICB9XG4gIC8qKlxuICAgKiBPYmplY3Qgb2YgYGNvb2tpZXNgIGZyb20gaGVhZGVyXG4gICAqL1xuICBjb29raWVzOiB7XG4gICAgW2tleTogc3RyaW5nXTogc3RyaW5nXG4gIH1cblxuICBib2R5OiBhbnlcblxuICBlbnY6IEVudlxuXG4gIHByZXZpZXc/OiBib29sZWFuXG4gIC8qKlxuICAgKiBQcmV2aWV3IGRhdGEgc2V0IG9uIHRoZSByZXF1ZXN0LCBpZiBhbnlcbiAgICogKi9cbiAgcHJldmlld0RhdGE/OiBhbnlcbn1cblxuLyoqXG4gKiBTZW5kIGJvZHkgb2YgcmVzcG9uc2VcbiAqL1xudHlwZSBTZW5kPFQ+ID0gKGJvZHk6IFQpID0+IHZvaWRcblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIHJlc3BvbnNlXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRBcGlSZXNwb25zZTxUID0gYW55PiA9IFNlcnZlclJlc3BvbnNlICYge1xuICAvKipcbiAgICogU2VuZCBkYXRhIGBhbnlgIGRhdGEgaW4gcmVzcG9uc2VcbiAgICovXG4gIHNlbmQ6IFNlbmQ8VD5cbiAgLyoqXG4gICAqIFNlbmQgZGF0YSBganNvbmAgZGF0YSBpbiByZXNwb25zZVxuICAgKi9cbiAganNvbjogU2VuZDxUPlxuICBzdGF0dXM6IChzdGF0dXNDb2RlOiBudW1iZXIpID0+IE5leHRBcGlSZXNwb25zZTxUPlxuICByZWRpcmVjdCh1cmw6IHN0cmluZyk6IE5leHRBcGlSZXNwb25zZTxUPlxuICByZWRpcmVjdChzdGF0dXM6IG51bWJlciwgdXJsOiBzdHJpbmcpOiBOZXh0QXBpUmVzcG9uc2U8VD5cblxuICAvKipcbiAgICogU2V0IHByZXZpZXcgZGF0YSBmb3IgTmV4dC5qcycgcHJlcmVuZGVyIG1vZGVcbiAgICovXG4gIHNldFByZXZpZXdEYXRhOiAoXG4gICAgZGF0YTogb2JqZWN0IHwgc3RyaW5nLFxuICAgIG9wdGlvbnM/OiB7XG4gICAgICAvKipcbiAgICAgICAqIFNwZWNpZmllcyB0aGUgbnVtYmVyIChpbiBzZWNvbmRzKSBmb3IgdGhlIHByZXZpZXcgc2Vzc2lvbiB0byBsYXN0IGZvci5cbiAgICAgICAqIFRoZSBnaXZlbiBudW1iZXIgd2lsbCBiZSBjb252ZXJ0ZWQgdG8gYW4gaW50ZWdlciBieSByb3VuZGluZyBkb3duLlxuICAgICAgICogQnkgZGVmYXVsdCwgbm8gbWF4aW11bSBhZ2UgaXMgc2V0IGFuZCB0aGUgcHJldmlldyBzZXNzaW9uIGZpbmlzaGVzXG4gICAgICAgKiB3aGVuIHRoZSBjbGllbnQgc2h1dHMgZG93biAoYnJvd3NlciBpcyBjbG9zZWQpLlxuICAgICAgICovXG4gICAgICBtYXhBZ2U/OiBudW1iZXJcbiAgICB9XG4gICkgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG4gIGNsZWFyUHJldmlld0RhdGE6ICgpID0+IE5leHRBcGlSZXNwb25zZTxUPlxufVxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgaGFuZGxlclxuICovXG5leHBvcnQgdHlwZSBOZXh0QXBpSGFuZGxlcjxUID0gYW55PiA9IChcbiAgcmVxOiBOZXh0QXBpUmVxdWVzdCxcbiAgcmVzOiBOZXh0QXBpUmVzcG9uc2U8VD5cbikgPT4gdm9pZCB8IFByb21pc2U8dm9pZD5cblxuLyoqXG4gKiBVdGlsc1xuICovXG5leHBvcnQgZnVuY3Rpb24gZXhlY09uY2U8VCBleHRlbmRzICguLi5hcmdzOiBhbnlbXSkgPT4gUmV0dXJuVHlwZTxUPj4oXG4gIGZuOiBUXG4pOiBUIHtcbiAgbGV0IHVzZWQgPSBmYWxzZVxuICBsZXQgcmVzdWx0OiBSZXR1cm5UeXBlPFQ+XG5cbiAgcmV0dXJuICgoLi4uYXJnczogYW55W10pID0+IHtcbiAgICBpZiAoIXVzZWQpIHtcbiAgICAgIHVzZWQgPSB0cnVlXG4gICAgICByZXN1bHQgPSBmbiguLi5hcmdzKVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0XG4gIH0pIGFzIFRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldExvY2F0aW9uT3JpZ2luKCkge1xuICBjb25zdCB7IHByb3RvY29sLCBob3N0bmFtZSwgcG9ydCB9ID0gd2luZG93LmxvY2F0aW9uXG4gIHJldHVybiBgJHtwcm90b2NvbH0vLyR7aG9zdG5hbWV9JHtwb3J0ID8gJzonICsgcG9ydCA6ICcnfWBcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFVSTCgpIHtcbiAgY29uc3QgeyBocmVmIH0gPSB3aW5kb3cubG9jYXRpb25cbiAgY29uc3Qgb3JpZ2luID0gZ2V0TG9jYXRpb25PcmlnaW4oKVxuICByZXR1cm4gaHJlZi5zdWJzdHJpbmcob3JpZ2luLmxlbmd0aClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldERpc3BsYXlOYW1lPFA+KENvbXBvbmVudDogQ29tcG9uZW50VHlwZTxQPikge1xuICByZXR1cm4gdHlwZW9mIENvbXBvbmVudCA9PT0gJ3N0cmluZydcbiAgICA/IENvbXBvbmVudFxuICAgIDogQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IENvbXBvbmVudC5uYW1lIHx8ICdVbmtub3duJ1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNSZXNTZW50KHJlczogU2VydmVyUmVzcG9uc2UpIHtcbiAgcmV0dXJuIHJlcy5maW5pc2hlZCB8fCByZXMuaGVhZGVyc1NlbnRcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxvYWRHZXRJbml0aWFsUHJvcHM8XG4gIEMgZXh0ZW5kcyBCYXNlQ29udGV4dCxcbiAgSVAgPSB7fSxcbiAgUCA9IHt9XG4+KEFwcDogTmV4dENvbXBvbmVudFR5cGU8QywgSVAsIFA+LCBjdHg6IEMpOiBQcm9taXNlPElQPiB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKEFwcC5wcm90b3R5cGU/LmdldEluaXRpYWxQcm9wcykge1xuICAgICAgY29uc3QgbWVzc2FnZSA9IGBcIiR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICAgIEFwcFxuICAgICAgKX0uZ2V0SW5pdGlhbFByb3BzKClcIiBpcyBkZWZpbmVkIGFzIGFuIGluc3RhbmNlIG1ldGhvZCAtIHZpc2l0IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2dldC1pbml0aWFsLXByb3BzLWFzLWFuLWluc3RhbmNlLW1ldGhvZCBmb3IgbW9yZSBpbmZvcm1hdGlvbi5gXG4gICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgICB9XG4gIH1cbiAgLy8gd2hlbiBjYWxsZWQgZnJvbSBfYXBwIGBjdHhgIGlzIG5lc3RlZCBpbiBgY3R4YFxuICBjb25zdCByZXMgPSBjdHgucmVzIHx8IChjdHguY3R4ICYmIGN0eC5jdHgucmVzKVxuXG4gIGlmICghQXBwLmdldEluaXRpYWxQcm9wcykge1xuICAgIGlmIChjdHguY3R4ICYmIGN0eC5Db21wb25lbnQpIHtcbiAgICAgIC8vIEB0cy1pZ25vcmUgcGFnZVByb3BzIGRlZmF1bHRcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHBhZ2VQcm9wczogYXdhaXQgbG9hZEdldEluaXRpYWxQcm9wcyhjdHguQ29tcG9uZW50LCBjdHguY3R4KSxcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHt9IGFzIElQXG4gIH1cblxuICBjb25zdCBwcm9wcyA9IGF3YWl0IEFwcC5nZXRJbml0aWFsUHJvcHMoY3R4KVxuXG4gIGlmIChyZXMgJiYgaXNSZXNTZW50KHJlcykpIHtcbiAgICByZXR1cm4gcHJvcHNcbiAgfVxuXG4gIGlmICghcHJvcHMpIHtcbiAgICBjb25zdCBtZXNzYWdlID0gYFwiJHtnZXREaXNwbGF5TmFtZShcbiAgICAgIEFwcFxuICAgICl9LmdldEluaXRpYWxQcm9wcygpXCIgc2hvdWxkIHJlc29sdmUgdG8gYW4gb2JqZWN0LiBCdXQgZm91bmQgXCIke3Byb3BzfVwiIGluc3RlYWQuYFxuICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICB9XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoT2JqZWN0LmtleXMocHJvcHMpLmxlbmd0aCA9PT0gMCAmJiAhY3R4LmN0eCkge1xuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICBgJHtnZXREaXNwbGF5TmFtZShcbiAgICAgICAgICBBcHBcbiAgICAgICAgKX0gcmV0dXJuZWQgYW4gZW1wdHkgb2JqZWN0IGZyb20gXFxgZ2V0SW5pdGlhbFByb3BzXFxgLiBUaGlzIGRlLW9wdGltaXplcyBhbmQgcHJldmVudHMgYXV0b21hdGljIHN0YXRpYyBvcHRpbWl6YXRpb24uIGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2VtcHR5LW9iamVjdC1nZXRJbml0aWFsUHJvcHNgXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHByb3BzXG59XG5cbmV4cG9ydCBjb25zdCB1cmxPYmplY3RLZXlzID0gW1xuICAnYXV0aCcsXG4gICdoYXNoJyxcbiAgJ2hvc3QnLFxuICAnaG9zdG5hbWUnLFxuICAnaHJlZicsXG4gICdwYXRoJyxcbiAgJ3BhdGhuYW1lJyxcbiAgJ3BvcnQnLFxuICAncHJvdG9jb2wnLFxuICAncXVlcnknLFxuICAnc2VhcmNoJyxcbiAgJ3NsYXNoZXMnLFxuXVxuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0V2l0aFZhbGlkYXRpb24odXJsOiBVcmxPYmplY3QpOiBzdHJpbmcge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICBpZiAodXJsICE9PSBudWxsICYmIHR5cGVvZiB1cmwgPT09ICdvYmplY3QnKSB7XG4gICAgICBPYmplY3Qua2V5cyh1cmwpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICBpZiAodXJsT2JqZWN0S2V5cy5pbmRleE9mKGtleSkgPT09IC0xKSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgYFVua25vd24ga2V5IHBhc3NlZCB2aWEgdXJsT2JqZWN0IGludG8gdXJsLmZvcm1hdDogJHtrZXl9YFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZm9ybWF0VXJsKHVybClcbn1cblxuZXhwb3J0IGNvbnN0IFNQID0gdHlwZW9mIHBlcmZvcm1hbmNlICE9PSAndW5kZWZpbmVkJ1xuZXhwb3J0IGNvbnN0IFNUID1cbiAgU1AgJiZcbiAgdHlwZW9mIHBlcmZvcm1hbmNlLm1hcmsgPT09ICdmdW5jdGlvbicgJiZcbiAgdHlwZW9mIHBlcmZvcm1hbmNlLm1lYXN1cmUgPT09ICdmdW5jdGlvbidcbiIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMubm9ybWFsaXplUGF0aFNlcD1ub3JtYWxpemVQYXRoU2VwO2V4cG9ydHMuZGVub3JtYWxpemVQYWdlUGF0aD1kZW5vcm1hbGl6ZVBhZ2VQYXRoO2Z1bmN0aW9uIG5vcm1hbGl6ZVBhdGhTZXAocGF0aCl7cmV0dXJuIHBhdGgucmVwbGFjZSgvXFxcXC9nLCcvJyk7fWZ1bmN0aW9uIGRlbm9ybWFsaXplUGFnZVBhdGgocGFnZSl7cGFnZT1ub3JtYWxpemVQYXRoU2VwKHBhZ2UpO2lmKHBhZ2Uuc3RhcnRzV2l0aCgnL2luZGV4LycpKXtwYWdlPXBhZ2Uuc2xpY2UoNik7fWVsc2UgaWYocGFnZT09PScvaW5kZXgnKXtwYWdlPScvJzt9cmV0dXJuIHBhZ2U7fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGVub3JtYWxpemUtcGFnZS1wYXRoLmpzLm1hcCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L2NsaWVudC9saW5rJylcbiIsImZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgXCJkZWZhdWx0XCI6IG9ialxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ7IiwidmFyIF90eXBlb2YgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2ZcIik7XG5cbmZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgaWYgKHR5cGVvZiBXZWFrTWFwICE9PSBcImZ1bmN0aW9uXCIpIHJldHVybiBudWxsO1xuICB2YXIgY2FjaGUgPSBuZXcgV2Vha01hcCgpO1xuXG4gIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSA9IGZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgICByZXR1cm4gY2FjaGU7XG4gIH07XG5cbiAgcmV0dXJuIGNhY2hlO1xufVxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHtcbiAgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkge1xuICAgIHJldHVybiBvYmo7XG4gIH1cblxuICBpZiAob2JqID09PSBudWxsIHx8IF90eXBlb2Yob2JqKSAhPT0gXCJvYmplY3RcIiAmJiB0eXBlb2Ygb2JqICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgXCJkZWZhdWx0XCI6IG9ialxuICAgIH07XG4gIH1cblxuICB2YXIgY2FjaGUgPSBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKTtcblxuICBpZiAoY2FjaGUgJiYgY2FjaGUuaGFzKG9iaikpIHtcbiAgICByZXR1cm4gY2FjaGUuZ2V0KG9iaik7XG4gIH1cblxuICB2YXIgbmV3T2JqID0ge307XG4gIHZhciBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkgJiYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxuICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHtcbiAgICAgIHZhciBkZXNjID0gaGFzUHJvcGVydHlEZXNjcmlwdG9yID8gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSkgOiBudWxsO1xuXG4gICAgICBpZiAoZGVzYyAmJiAoZGVzYy5nZXQgfHwgZGVzYy5zZXQpKSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdPYmosIGtleSwgZGVzYyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuZXdPYmpba2V5XSA9IG9ialtrZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG5ld09ialtcImRlZmF1bHRcIl0gPSBvYmo7XG5cbiAgaWYgKGNhY2hlKSB7XG4gICAgY2FjaGUuc2V0KG9iaiwgbmV3T2JqKTtcbiAgfVxuXG4gIHJldHVybiBuZXdPYmo7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQ7IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF90eXBlb2Yob2JqKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mOyIsIi8qKiBAbGljZW5zZSBSZWFjdCB2MTYuMTMuMVxuICogcmVhY3QtaXMuZGV2ZWxvcG1lbnQuanNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cblxuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gIChmdW5jdGlvbigpIHtcbid1c2Ugc3RyaWN0JztcblxuLy8gVGhlIFN5bWJvbCB1c2VkIHRvIHRhZyB0aGUgUmVhY3RFbGVtZW50LWxpa2UgdHlwZXMuIElmIHRoZXJlIGlzIG5vIG5hdGl2ZSBTeW1ib2xcbi8vIG5vciBwb2x5ZmlsbCwgdGhlbiBhIHBsYWluIG51bWJlciBpcyB1c2VkIGZvciBwZXJmb3JtYW5jZS5cbnZhciBoYXNTeW1ib2wgPSB0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIFN5bWJvbC5mb3I7XG52YXIgUkVBQ1RfRUxFTUVOVF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuZWxlbWVudCcpIDogMHhlYWM3O1xudmFyIFJFQUNUX1BPUlRBTF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QucG9ydGFsJykgOiAweGVhY2E7XG52YXIgUkVBQ1RfRlJBR01FTlRfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmZyYWdtZW50JykgOiAweGVhY2I7XG52YXIgUkVBQ1RfU1RSSUNUX01PREVfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnN0cmljdF9tb2RlJykgOiAweGVhY2M7XG52YXIgUkVBQ1RfUFJPRklMRVJfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnByb2ZpbGVyJykgOiAweGVhZDI7XG52YXIgUkVBQ1RfUFJPVklERVJfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnByb3ZpZGVyJykgOiAweGVhY2Q7XG52YXIgUkVBQ1RfQ09OVEVYVF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuY29udGV4dCcpIDogMHhlYWNlOyAvLyBUT0RPOiBXZSBkb24ndCB1c2UgQXN5bmNNb2RlIG9yIENvbmN1cnJlbnRNb2RlIGFueW1vcmUuIFRoZXkgd2VyZSB0ZW1wb3Jhcnlcbi8vICh1bnN0YWJsZSkgQVBJcyB0aGF0IGhhdmUgYmVlbiByZW1vdmVkLiBDYW4gd2UgcmVtb3ZlIHRoZSBzeW1ib2xzP1xuXG52YXIgUkVBQ1RfQVNZTkNfTU9ERV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuYXN5bmNfbW9kZScpIDogMHhlYWNmO1xudmFyIFJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuY29uY3VycmVudF9tb2RlJykgOiAweGVhY2Y7XG52YXIgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmZvcndhcmRfcmVmJykgOiAweGVhZDA7XG52YXIgUkVBQ1RfU1VTUEVOU0VfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnN1c3BlbnNlJykgOiAweGVhZDE7XG52YXIgUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3Quc3VzcGVuc2VfbGlzdCcpIDogMHhlYWQ4O1xudmFyIFJFQUNUX01FTU9fVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0Lm1lbW8nKSA6IDB4ZWFkMztcbnZhciBSRUFDVF9MQVpZX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5sYXp5JykgOiAweGVhZDQ7XG52YXIgUkVBQ1RfQkxPQ0tfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmJsb2NrJykgOiAweGVhZDk7XG52YXIgUkVBQ1RfRlVOREFNRU5UQUxfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmZ1bmRhbWVudGFsJykgOiAweGVhZDU7XG52YXIgUkVBQ1RfUkVTUE9OREVSX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5yZXNwb25kZXInKSA6IDB4ZWFkNjtcbnZhciBSRUFDVF9TQ09QRV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3Quc2NvcGUnKSA6IDB4ZWFkNztcblxuZnVuY3Rpb24gaXNWYWxpZEVsZW1lbnRUeXBlKHR5cGUpIHtcbiAgcmV0dXJuIHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJyB8fCB0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJyB8fCAvLyBOb3RlOiBpdHMgdHlwZW9mIG1pZ2h0IGJlIG90aGVyIHRoYW4gJ3N5bWJvbCcgb3IgJ251bWJlcicgaWYgaXQncyBhIHBvbHlmaWxsLlxuICB0eXBlID09PSBSRUFDVF9GUkFHTUVOVF9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1BST0ZJTEVSX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1RSSUNUX01PREVfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9TVVNQRU5TRV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRSB8fCB0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcgJiYgdHlwZSAhPT0gbnVsbCAmJiAodHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTEFaWV9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX01FTU9fVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9QUk9WSURFUl9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0NPTlRFWFRfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0ZVTkRBTUVOVEFMX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfUkVTUE9OREVSX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfU0NPUEVfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9CTE9DS19UWVBFKTtcbn1cblxuZnVuY3Rpb24gdHlwZU9mKG9iamVjdCkge1xuICBpZiAodHlwZW9mIG9iamVjdCA9PT0gJ29iamVjdCcgJiYgb2JqZWN0ICE9PSBudWxsKSB7XG4gICAgdmFyICQkdHlwZW9mID0gb2JqZWN0LiQkdHlwZW9mO1xuXG4gICAgc3dpdGNoICgkJHR5cGVvZikge1xuICAgICAgY2FzZSBSRUFDVF9FTEVNRU5UX1RZUEU6XG4gICAgICAgIHZhciB0eXBlID0gb2JqZWN0LnR5cGU7XG5cbiAgICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgICAgY2FzZSBSRUFDVF9BU1lOQ19NT0RFX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9DT05DVVJSRU5UX01PREVfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX0ZSQUdNRU5UX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9QUk9GSUxFUl9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfU1RSSUNUX01PREVfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX1NVU1BFTlNFX1RZUEU6XG4gICAgICAgICAgICByZXR1cm4gdHlwZTtcblxuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICB2YXIgJCR0eXBlb2ZUeXBlID0gdHlwZSAmJiB0eXBlLiQkdHlwZW9mO1xuXG4gICAgICAgICAgICBzd2l0Y2ggKCQkdHlwZW9mVHlwZSkge1xuICAgICAgICAgICAgICBjYXNlIFJFQUNUX0NPTlRFWFRfVFlQRTpcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFOlxuICAgICAgICAgICAgICBjYXNlIFJFQUNUX0xBWllfVFlQRTpcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9NRU1PX1RZUEU6XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfUFJPVklERVJfVFlQRTpcbiAgICAgICAgICAgICAgICByZXR1cm4gJCR0eXBlb2ZUeXBlO1xuXG4gICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuICQkdHlwZW9mO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgICAgY2FzZSBSRUFDVF9QT1JUQUxfVFlQRTpcbiAgICAgICAgcmV0dXJuICQkdHlwZW9mO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB1bmRlZmluZWQ7XG59IC8vIEFzeW5jTW9kZSBpcyBkZXByZWNhdGVkIGFsb25nIHdpdGggaXNBc3luY01vZGVcblxudmFyIEFzeW5jTW9kZSA9IFJFQUNUX0FTWU5DX01PREVfVFlQRTtcbnZhciBDb25jdXJyZW50TW9kZSA9IFJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFO1xudmFyIENvbnRleHRDb25zdW1lciA9IFJFQUNUX0NPTlRFWFRfVFlQRTtcbnZhciBDb250ZXh0UHJvdmlkZXIgPSBSRUFDVF9QUk9WSURFUl9UWVBFO1xudmFyIEVsZW1lbnQgPSBSRUFDVF9FTEVNRU5UX1RZUEU7XG52YXIgRm9yd2FyZFJlZiA9IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU7XG52YXIgRnJhZ21lbnQgPSBSRUFDVF9GUkFHTUVOVF9UWVBFO1xudmFyIExhenkgPSBSRUFDVF9MQVpZX1RZUEU7XG52YXIgTWVtbyA9IFJFQUNUX01FTU9fVFlQRTtcbnZhciBQb3J0YWwgPSBSRUFDVF9QT1JUQUxfVFlQRTtcbnZhciBQcm9maWxlciA9IFJFQUNUX1BST0ZJTEVSX1RZUEU7XG52YXIgU3RyaWN0TW9kZSA9IFJFQUNUX1NUUklDVF9NT0RFX1RZUEU7XG52YXIgU3VzcGVuc2UgPSBSRUFDVF9TVVNQRU5TRV9UWVBFO1xudmFyIGhhc1dhcm5lZEFib3V0RGVwcmVjYXRlZElzQXN5bmNNb2RlID0gZmFsc2U7IC8vIEFzeW5jTW9kZSBzaG91bGQgYmUgZGVwcmVjYXRlZFxuXG5mdW5jdGlvbiBpc0FzeW5jTW9kZShvYmplY3QpIHtcbiAge1xuICAgIGlmICghaGFzV2FybmVkQWJvdXREZXByZWNhdGVkSXNBc3luY01vZGUpIHtcbiAgICAgIGhhc1dhcm5lZEFib3V0RGVwcmVjYXRlZElzQXN5bmNNb2RlID0gdHJ1ZTsgLy8gVXNpbmcgY29uc29sZVsnd2FybiddIHRvIGV2YWRlIEJhYmVsIGFuZCBFU0xpbnRcblxuICAgICAgY29uc29sZVsnd2FybiddKCdUaGUgUmVhY3RJcy5pc0FzeW5jTW9kZSgpIGFsaWFzIGhhcyBiZWVuIGRlcHJlY2F0ZWQsICcgKyAnYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiBSZWFjdCAxNysuIFVwZGF0ZSB5b3VyIGNvZGUgdG8gdXNlICcgKyAnUmVhY3RJcy5pc0NvbmN1cnJlbnRNb2RlKCkgaW5zdGVhZC4gSXQgaGFzIHRoZSBleGFjdCBzYW1lIEFQSS4nKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gaXNDb25jdXJyZW50TW9kZShvYmplY3QpIHx8IHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9BU1lOQ19NT0RFX1RZUEU7XG59XG5mdW5jdGlvbiBpc0NvbmN1cnJlbnRNb2RlKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFO1xufVxuZnVuY3Rpb24gaXNDb250ZXh0Q29uc3VtZXIob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfQ09OVEVYVF9UWVBFO1xufVxuZnVuY3Rpb24gaXNDb250ZXh0UHJvdmlkZXIob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfUFJPVklERVJfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzRWxlbWVudChvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVvZiBvYmplY3QgPT09ICdvYmplY3QnICYmIG9iamVjdCAhPT0gbnVsbCAmJiBvYmplY3QuJCR0eXBlb2YgPT09IFJFQUNUX0VMRU1FTlRfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzRm9yd2FyZFJlZihvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFO1xufVxuZnVuY3Rpb24gaXNGcmFnbWVudChvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9GUkFHTUVOVF9UWVBFO1xufVxuZnVuY3Rpb24gaXNMYXp5KG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0xBWllfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzTWVtbyhvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9NRU1PX1RZUEU7XG59XG5mdW5jdGlvbiBpc1BvcnRhbChvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9QT1JUQUxfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzUHJvZmlsZXIob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfUFJPRklMRVJfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzU3RyaWN0TW9kZShvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFO1xufVxuZnVuY3Rpb24gaXNTdXNwZW5zZShvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9TVVNQRU5TRV9UWVBFO1xufVxuXG5leHBvcnRzLkFzeW5jTW9kZSA9IEFzeW5jTW9kZTtcbmV4cG9ydHMuQ29uY3VycmVudE1vZGUgPSBDb25jdXJyZW50TW9kZTtcbmV4cG9ydHMuQ29udGV4dENvbnN1bWVyID0gQ29udGV4dENvbnN1bWVyO1xuZXhwb3J0cy5Db250ZXh0UHJvdmlkZXIgPSBDb250ZXh0UHJvdmlkZXI7XG5leHBvcnRzLkVsZW1lbnQgPSBFbGVtZW50O1xuZXhwb3J0cy5Gb3J3YXJkUmVmID0gRm9yd2FyZFJlZjtcbmV4cG9ydHMuRnJhZ21lbnQgPSBGcmFnbWVudDtcbmV4cG9ydHMuTGF6eSA9IExhenk7XG5leHBvcnRzLk1lbW8gPSBNZW1vO1xuZXhwb3J0cy5Qb3J0YWwgPSBQb3J0YWw7XG5leHBvcnRzLlByb2ZpbGVyID0gUHJvZmlsZXI7XG5leHBvcnRzLlN0cmljdE1vZGUgPSBTdHJpY3RNb2RlO1xuZXhwb3J0cy5TdXNwZW5zZSA9IFN1c3BlbnNlO1xuZXhwb3J0cy5pc0FzeW5jTW9kZSA9IGlzQXN5bmNNb2RlO1xuZXhwb3J0cy5pc0NvbmN1cnJlbnRNb2RlID0gaXNDb25jdXJyZW50TW9kZTtcbmV4cG9ydHMuaXNDb250ZXh0Q29uc3VtZXIgPSBpc0NvbnRleHRDb25zdW1lcjtcbmV4cG9ydHMuaXNDb250ZXh0UHJvdmlkZXIgPSBpc0NvbnRleHRQcm92aWRlcjtcbmV4cG9ydHMuaXNFbGVtZW50ID0gaXNFbGVtZW50O1xuZXhwb3J0cy5pc0ZvcndhcmRSZWYgPSBpc0ZvcndhcmRSZWY7XG5leHBvcnRzLmlzRnJhZ21lbnQgPSBpc0ZyYWdtZW50O1xuZXhwb3J0cy5pc0xhenkgPSBpc0xhenk7XG5leHBvcnRzLmlzTWVtbyA9IGlzTWVtbztcbmV4cG9ydHMuaXNQb3J0YWwgPSBpc1BvcnRhbDtcbmV4cG9ydHMuaXNQcm9maWxlciA9IGlzUHJvZmlsZXI7XG5leHBvcnRzLmlzU3RyaWN0TW9kZSA9IGlzU3RyaWN0TW9kZTtcbmV4cG9ydHMuaXNTdXNwZW5zZSA9IGlzU3VzcGVuc2U7XG5leHBvcnRzLmlzVmFsaWRFbGVtZW50VHlwZSA9IGlzVmFsaWRFbGVtZW50VHlwZTtcbmV4cG9ydHMudHlwZU9mID0gdHlwZU9mO1xuICB9KSgpO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3JlYWN0LWlzLnByb2R1Y3Rpb24ubWluLmpzJyk7XG59IGVsc2Uge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3JlYWN0LWlzLmRldmVsb3BtZW50LmpzJyk7XG59XG4iLCJpbXBvcnQgUmVhY3QsIHt1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7dXNlQWxsTVF9IGZyb20gXCIuLi8uLi91dGlscy91c2VBbGxNUVwiO1xyXG5pbXBvcnQge3NldExpa2V9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9hcGkvTGlrZUFwaVwiO1xyXG5pbXBvcnQge01haW5MYXlvdXR9IGZyb20gXCIuLi8uLi9sYXlvdXRzL01haW5MYXlvdXRcIjtcclxuaW1wb3J0IHtNaW5pUG9zdH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvTWluaVBvc3RcIjtcclxuaW1wb3J0IHtQYWdpbmF0aW9uLCBQb3N0RGF0YX0gZnJvbSBcIi4uLy4uL2ludGVyZmFjZXNcIjtcclxuaW1wb3J0IHtnZXRQb3N0cywgc2hvd1Bvc3R9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9hcGkvUG9zdEFwaVwiO1xyXG5pbXBvcnQge2dldENhdGVnb3JpZXN9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9hcGkvQ2F0ZWdvcnlBcGlcIjtcclxuaW1wb3J0IHtMb2FkTW9yZX0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvTG9hZE1vcmVcIjtcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKHByb3BzKSB7XHJcbiAgICBjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgbXEgPSB1c2VBbGxNUSgpXHJcblxyXG4gICAgY29uc3QgaGFuZGxlU2V0TGlrZSA9IGFzeW5jIChwb3N0SWQ6IG51bWJlciwgbGlrZT86ICdsaWtlJyB8ICdkaXNsaWtlJykgPT4ge1xyXG4gICAgICAgIGF3YWl0IHNldExpa2UocG9zdElkLCAncG9zdCcsIGxpa2UpXHJcbiAgICB9XHJcblxyXG5cclxuICAgIGNvbnN0IFtwb3N0cywgc2V0UG9zdHNdID0gdXNlU3RhdGU8UGFnaW5hdGlvbjxQb3N0RGF0YT4+KHByb3BzLnBvc3RzKTtcclxuICAgIGNvbnN0IFtwYWdlLCBzZXRQYWdlXSA9IHVzZVN0YXRlKHByb3BzLnBvc3RzLm1ldGEuY3VycmVudF9wYWdlKVxyXG4gICAgY29uc3QgW21heFBhZ2UsIHNldE1heFBhZ2VdID0gdXNlU3RhdGUocHJvcHMucG9zdHMubWV0YS5sYXN0X3BhZ2UpXHJcblxyXG5cclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgcnVuRWZmZWN0ID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgICBzZXRQb3N0cyhhd2FpdCBnZXRQb3N0cyh7cGFnZX0pKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcnVuRWZmZWN0KCk7XHJcblxyXG4gICAgfSwgW3BhZ2VdKVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPG1haW4+XHJcbiAgICAgICAgICAgIDxNYWluTGF5b3V0PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3cmFwcGVyXCI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHshbXEuaXNYUyAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGVmdC1zaWRlXCI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICApfVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7aXNMb2FkaW5nICYmICfQl9Cw0LPRgNGD0LrQsC4uLid9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IWlzTG9hZGluZyAmJiBwb3N0cz8uZGF0YS5tYXAoKHBvc3QsIGtleSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxNaW5pUG9zdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17cG9zdC5pZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3N0RGF0YT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21tZW50c0NvdW50OiBwb3N0LmNvbW1lbnRzX2NvdW50LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogcG9zdC5kZXNjcmlwdGlvbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzbGlrZXNDb3VudDogcG9zdC5kaXNsaWtlc19jb3VudCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGlrZXNDb3VudDogcG9zdC5saWtlc19jb3VudCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IHBvc3QudGl0bGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZpZXdzQ291bnQ6IHBvc3Qudmlld3MsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsdWc6IHBvc3Quc2x1ZyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlcjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXZhdGFyVXJsOiBwb3N0LnVzZXIuYXZhdGFyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IHBvc3QudXNlci5pZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IHBvc3QudXNlci5uYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWFnZVVybDogcG9zdC5pbWcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBwb3N0LmlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWdzOiBbXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGltZTogbmV3IERhdGUocG9zdC51cGRhdGVkX2F0KSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdm90ZTogcG9zdD8ubGlrZWRfdHlwZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uU2V0TGlrZT17aGFuZGxlU2V0TGlrZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KX1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHshaXNMb2FkaW5nICYmIHBhZ2UgIT09IG1heFBhZ2UgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExvYWRNb3JlIG9uQ2xpY2s9eygpID0+IHNldFBhZ2UocGFnZSArIDEpfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIHshbXEuaXNYUyAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmlnaHQtc2lkZVwiPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L01haW5MYXlvdXQ+XHJcbiAgICAgICAgPC9tYWluPlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhjdHgpIHtcclxuICAgIGNvbnN0IHBvc3RzID0gYXdhaXQgZ2V0UG9zdHMoe2NhdGVnb3JpZXM6IGN0eC5xdWVyeT8uc2x1Z30sIGN0eC5yZXEuY29va2llcz8uYXV0aF90b2tlbik7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBwcm9wczoge1xyXG4gICAgICAgICAgICBwb3N0c1xyXG4gICAgICAgIH0sXHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHtEaXJlY3RvcnlTdGF0ZSwgUm9vdFN0YXRlLCBVc2VyU3RhdGV9IGZyb20gXCIuLi90eXBlc1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IHNlbGVjdFRoZW1lc1N0YXRlID0gKHN0YXRlOiBSb290U3RhdGUpOiBEaXJlY3RvcnlTdGF0ZVsnZGF0YSddWyd0aGVtZXMnXSA9PiB7XHJcbiAgICByZXR1cm4gc3RhdGUuZGlyZWN0b3J5LmRhdGEudGhlbWVzXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3Qgc2VsZWN0Q2F0ZWdvcmllc1N0YXRlID0gKHN0YXRlOiBSb290U3RhdGUpOiBEaXJlY3RvcnlTdGF0ZVsnZGF0YSddWydjYXRlZ29yaWVzJ10gPT4ge1xyXG4gICAgcmV0dXJuIHN0YXRlLmRpcmVjdG9yeS5kYXRhLmNhdGVnb3JpZXNcclxufTtcclxuIiwiaW1wb3J0IHtSb290U3RhdGUsIFVzZXJTdGF0ZX0gZnJvbSBcIi4uL3R5cGVzXCI7XHJcblxyXG5leHBvcnQgY29uc3Qgc2VsZWN0VXNlclN0YXRlID0gKHN0YXRlOiBSb290U3RhdGUpOiBVc2VyU3RhdGUgPT4ge1xyXG4gICAgcmV0dXJuIHN0YXRlLnVzZXJcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBzZWxlY3RVc2VyTm90aWZpY2F0aW9ucyA9IChzdGF0ZTogUm9vdFN0YXRlKTogVXNlclN0YXRlWydub3RpZmljYXRpb25zJ10gPT4ge1xyXG4gICAgcmV0dXJuIHN0YXRlLnVzZXIubm90aWZpY2F0aW9ucztcclxufTtcclxuIiwiaW1wb3J0IGF4aW9zIGZyb20gJy4uLy4uL2NvcmUvYXhpb3MnO1xyXG5pbXBvcnQge0NvbW1lbnR9IGZyb20gJy4uLy4uL2ludGVyZmFjZXMnO1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBDb21tZW50QXBpID0ge1xyXG4gICAgZ2V0OiBhc3luYyAocGFyYW1zID0ge30pOiBQcm9taXNlPENvbW1lbnRbXT4gPT4ge1xyXG4gICAgICAgIGNvbnN0IHtkYXRhfSA9IGF3YWl0IGF4aW9zLmdldCgnL2FwaS9jb21tZW50cycsIHtcclxuICAgICAgICAgIHBhcmFtc1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gZGF0YTtcclxuICAgIH0sXHJcblxyXG4gICAgc2F2ZTogYXN5bmMgKHBvc3RJZDogbnVtYmVyLCB0ZXh0OiBzdHJpbmcsIHRvVXNlcklkPzogbnVtYmVyLCBwYXJlbnRDb21tZW50SWQ/OiBudW1iZXIsIGNvbW1lbnRJZD86IG51bWJlcikgPT4ge1xyXG4gICAgICAgIGNvbnN0IGJvZHkgPSB7XHJcbiAgICAgICAgICAgIHBvc3RfaWQ6IHBvc3RJZCxcclxuICAgICAgICAgICAgdGV4dCxcclxuICAgICAgICAgICAgdXNlcl9yZXBseV9pZDogdG9Vc2VySWQsXHJcbiAgICAgICAgICAgIHBhcmVudF9pZDogcGFyZW50Q29tbWVudElkXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgaWYgKGNvbW1lbnRJZCkge1xyXG4gICAgICAgICAgICBjb25zdCB7ZGF0YX0gPSBhd2FpdCBheGlvcy5wdXQoYC9hcGkvY29tbWVudHMvJHtjb21tZW50SWR9YCwgYm9keSk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gZGF0YVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3Qge2RhdGF9ID0gYXdhaXQgYXhpb3MucG9zdChgL2FwaS9jb21tZW50c2AsIGJvZHkpO1xyXG5cclxuICAgICAgICByZXR1cm4gZGF0YVxyXG4gICAgfVxyXG5cclxufTtcclxuIiwiaW1wb3J0IGF4aW9zIGZyb20gXCIuLi8uLi9jb3JlL2F4aW9zXCI7XHJcblxyXG5leHBvcnQgY29uc3Qgc2V0TGlrZSA9IGFzeW5jIChpZDogbnVtYmVyLCB0eXBlID0gJ3Bvc3QnLCBsaWtlPzogJ2xpa2UnIHwgJ2Rpc2xpa2UnICkgPT4ge1xyXG4gICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBheGlvcy5wb3N0KCcvYXBpL2xpa2VzJywge1xyXG4gICAgICAgIHR5cGUsXHJcbiAgICAgICAgaWQsXHJcbiAgICAgICAgbGlrZTogbGlrZSA/IGxpa2UgOiBudWxsXHJcbiAgICB9KVxyXG59XHJcbiIsImltcG9ydCBheGlvcyBmcm9tICcuLi8uLi9jb3JlL2F4aW9zJztcclxuaW1wb3J0IHtDYXRlZ29yeSwgUGFnaW5hdGlvbiwgUG9zdERhdGEsIFRoZW1lfSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzJztcclxuaW1wb3J0IHtnZXRDb29raWV9IGZyb20gJy4vVXNlckFwaSc7XHJcblxyXG5leHBvcnQgY29uc3Qgc2F2ZUltYWdlID0gKGltYWdlOiBGaWxlKSA9PiB7XHJcbiAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgZm9ybURhdGEuYXBwZW5kKCdpbWFnZScsIGltYWdlKTtcclxuICAgIHJldHVybiBheGlvcy5wb3N0KCcvYXBpL3Bvc3RzL2ltYWdlLWJ5LXVybCcsIGZvcm1EYXRhKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBzYXZlUG9zdCA9IGFzeW5jIChwb3N0RGF0YToge1xyXG4gICAgdGl0bGU6IHN0cmluZztcclxuICAgIGJvZHk6IGFueTtcclxuICAgIHRoZW1lcz86IFRoZW1lW10sXHJcbiAgICBzdGF0dXM/OiBzdHJpbmcsXHJcbiAgICBjYXRlZ29yeT86IENhdGVnb3J5LFxyXG4gICAgaWQ/OiBudW1iZXIsXHJcbn0pID0+IHtcclxuICAgIGxldCBib2R5ID0ge1xyXG4gICAgICAgIGJvZHk6IHBvc3REYXRhLmJvZHksXHJcbiAgICAgICAgdGl0bGU6IHBvc3REYXRhLnRpdGxlLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnVGVzdCcsXHJcbiAgICAgICAgdGhlbWVzOiBwb3N0RGF0YS50aGVtZXMgfHwgW10sXHJcbiAgICAgICAgc3RhdHVzOiBwb3N0RGF0YT8uc3RhdHVzLFxyXG4gICAgICAgIGNhdGVnb3J5OiBwb3N0RGF0YS5jYXRlZ29yeSxcclxuICAgIH07XHJcblxyXG4gICAgaWYgKHBvc3REYXRhPy5pZCkge1xyXG4gICAgICAgIGNvbnN0IHtkYXRhfSA9IGF3YWl0IGF4aW9zLnB1dChgL2FwaS9wb3N0cy8ke3Bvc3REYXRhLmlkfWAsIGJvZHkpO1xyXG4gICAgICAgIHJldHVybiBkYXRhXHJcblxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zdCB7ZGF0YX0gPSBhd2FpdCBheGlvcy5wb3N0KGAvYXBpL3Bvc3RzYCwgYm9keSk7XHJcbiAgICAgICAgcmV0dXJuIGRhdGFcclxuICAgIH1cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRQb3N0cyA9IGFzeW5jIChwYXJhbXMgPSB7fSwgdG9rZW4/OiBzdHJpbmcpOiBQcm9taXNlPFBhZ2luYXRpb248UG9zdERhdGE+PiA9PiB7XHJcbiAgICBsZXQgaGVhZGVycyA9IHt9O1xyXG5cclxuICAgIGlmICh0b2tlbikge1xyXG4gICAgICAgIGhlYWRlcnMgPSB7XHJcbiAgICAgICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0b2tlbn1gXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHtkYXRhfSA9IGF3YWl0IGF4aW9zLmdldCgnL2FwaS9wb3N0cycsIHtcclxuICAgICAgICBwYXJhbXMsXHJcbiAgICAgICAgaGVhZGVyc1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIGRhdGE7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0VGhlbWVzID0gYXN5bmMgKCk6IFByb21pc2U8VGhlbWVbXT4gPT4ge1xyXG4gICAgY29uc3Qge2RhdGF9ID0gYXdhaXQgYXhpb3MuZ2V0KCcvYXBpL3Bvc3RzL3RoZW1lcycpO1xyXG5cclxuICAgIHJldHVybiBkYXRhO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHNhdmVCeVVybCA9IGFzeW5jICh1cmw6IHN0cmluZykgPT4ge1xyXG4gICAgcmV0dXJuIGF3YWl0IGF4aW9zLnBvc3QoJy9hcGkvcG9zdHMvaW1hZ2UtYnktdXJsJywge3VybH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHNob3dQb3N0ID0gYXN5bmMgKHNsdWc6IHN0cmluZywgdG9rZW4/OiBzdHJpbmcpID0+IHtcclxuICAgIGNvbnN0IHtkYXRhfSA9IGF3YWl0IGF4aW9zLmdldChgL2FwaS9wb3N0cy8ke3NsdWd9YCwge1xyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogdG9rZW4gPyBgQmVhcmVyICR7dG9rZW59YCA6ICcnXHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gZGF0YTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRQb3N0Q29tbWVudHMgPSBhc3luYyAoaWQ6IG51bWJlciwgYXBpVG9rZW4/OiBzdHJpbmcpID0+IHtcclxuICAgIGNvbnN0IHtkYXRhfSA9IGF3YWl0IGF4aW9zLmdldChgL2FwaS9wb3N0cy8ke2lkfS9jb21tZW50c2AsIHtcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgIEF1dGhvcml6YXRpb246IGFwaVRva2VuID8gYEJlYXJlciAke2FwaVRva2VufWAgOiAnJ1xyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbiAgICByZXR1cm4gZGF0YTtcclxufVxyXG5cclxuIiwiaW1wb3J0IGF4aW9zIGZyb20gXCIuLi8uLi9jb3JlL2F4aW9zXCI7XHJcbmltcG9ydCB7UGFnaW5hdGlvbiwgVXNlcn0gZnJvbSBcIi4uLy4uL2ludGVyZmFjZXNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTcGVjaWFsaXN0cyA9IGFzeW5jIChwYXJhbXMpOiBQcm9taXNlPFBhZ2luYXRpb248VXNlcj4+ID0+IHtcclxuICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXhpb3MuZ2V0KCcvYXBpL3VzZXJzJywgeyBwYXJhbXMgfSk7XHJcblxyXG4gICAgcmV0dXJuIGRhdGFcclxufVxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTcGVjaWFsaXN0Q2F0ZWdvcmllcyA9IGFzeW5jICgpID0+IHtcclxuICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXhpb3MuZ2V0KCcvYXBpL3VzZXJzL2NhdGVnb3JpZXMnKTtcclxuXHJcbiAgICByZXR1cm4gZGF0YTtcclxufVxyXG4iLCJpbXBvcnQgYXhpb3MgZnJvbSAnLi4vLi4vY29yZS9heGlvcyc7XHJcbmltcG9ydCB7VXNlcn0gZnJvbSBcIi4uLy4uL2ludGVyZmFjZXNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBVc2VyQXBpID0ge1xyXG4gIGxvZ2luOiBhc3luYyAoZW1haWw6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZyk6IFByb21pc2U8YW55PiA9PiB7XHJcbiAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgZm9ybURhdGEuYXBwZW5kKCdlbWFpbCcsIGVtYWlsKTtcclxuICAgIGZvcm1EYXRhLmFwcGVuZCgncGFzc3dvcmQnLCBwYXNzd29yZCk7XHJcbiAgICBmb3JtRGF0YS5hcHBlbmQoJ3JlbWVtYmVyJywgJzEnKTtcclxuXHJcbiAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGF4aW9zLnBvc3QoJy9sb2dpbicsIGZvcm1EYXRhLCB7XHJcbiAgICAgIG1heFJlZGlyZWN0czogMCxcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBkYXRhO1xyXG4gIH0sXHJcblxyXG4gIGdldE1lOiBhc3luYyAodG9rZW4/OiBzdHJpbmcpID0+IHtcclxuICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXhpb3MuZ2V0KCcvYXBpL3VzZXInLCB7XHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBBdXRob3JpemF0aW9uOiB0b2tlbiA/IGBCZWFyZXIgJHt0b2tlbn1gIDogJydcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gZGF0YTtcclxuICB9LFxyXG5cclxuICBnZXROb3RpZmljYXRpb25zOiBhc3luYyAodG9rZW4/OiBzdHJpbmcpID0+IHtcclxuICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXhpb3MuZ2V0KCcvYXBpL3VzZXIvbm90aWZpY2F0aW9ucycsIHtcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIEF1dGhvcml6YXRpb246IHRva2VuID8gYEJlYXJlciAke3Rva2VufWAgOiAnJ1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIHJldHVybiBkYXRhO1xyXG4gIH0sXHJcblxyXG4gIHNob3c6IGFzeW5jIChpZDogbnVtYmVyKSA9PiB7XHJcbiAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGF4aW9zLmdldCgnL2FwaS91c2Vycy8nICsgaWQpO1xyXG4gICAgcmV0dXJuIGRhdGE7XHJcbiAgfSxcclxuXHJcbiAgdXBkYXRlUHJvZmlsZTogYXN5bmMgKGRhdGE6IFBhcnRpYWw8VXNlcj4sIGlkOiBudW1iZXIpID0+IHtcclxuICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcblxyXG4gICAgT2JqZWN0LmtleXMoZGF0YSkuZm9yRWFjaCgocGFyYW0pID0+IHtcclxuICAgICAgaWYgKHBhcmFtICE9PSAnbGlua3MnKSB7XHJcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKHBhcmFtLCBkYXRhW3BhcmFtXSk7XHJcbiAgICAgIH1cclxuICAgIH0pXHJcblxyXG4gICAgaWYgKGRhdGEubGlua3M/Lmxlbmd0aCkge1xyXG4gICAgICBkYXRhLmxpbmtzLm1hcCgobCwga2V5KSA9PiB7XHJcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKGBsaW5rc1ske2tleX1dYCwgbCk7XHJcbiAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgYXdhaXQgYXhpb3MucGF0Y2goYC9hcGkvdXNlci8ke2lkfWAsIGRhdGEpXHJcblxyXG4gIH1cclxuXHJcblxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldENvb2tpZSA9ICgpID0+IHtcclxuICByZXR1cm4gYXhpb3MuZ2V0KCcvc2FuY3R1bS9jc3JmLWNvb2tpZScpO1xyXG59O1xyXG4iLCJpbXBvcnQgeyB1c2VNZWRpYVF1ZXJ5LCB1c2VUaGVtZSB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcblxuZXhwb3J0IGNvbnN0IHVzZUFsbE1RID0gKCkgPT4ge1xuICBjb25zdCB0aGVtZSA9IHVzZVRoZW1lKCk7XG5cbiAgcmV0dXJuIHtcbiAgICBpc1hTOiB1c2VNZWRpYVF1ZXJ5KHRoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ3hzJykpLFxuICAgIGlzU006IHVzZU1lZGlhUXVlcnkodGhlbWUuYnJlYWtwb2ludHMuZG93bignc20nKSksXG4gICAgaXNNRDogdXNlTWVkaWFRdWVyeSh0aGVtZS5icmVha3BvaW50cy5kb3duKCdtZCcpKSxcbiAgICBpc0xHOiB1c2VNZWRpYVF1ZXJ5KHRoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ2xnJykpLFxuICB9O1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0F2YXRhclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9CYWNrZHJvcFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvQ29sbGFwc2VcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0RpYWxvZ0NvbnRlbnRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQ2xvc2VcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG11aS9tYXRlcmlhbC9JY29uQnV0dG9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNsc3hcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZGF0ZS1mbnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZGF0ZS1mbnMvbG9jYWxlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZWR1eFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==