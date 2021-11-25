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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/profile/[id].tsx");
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

/***/ "./components/UserCard/UserCard.module.scss":
/*!**************************************************!*\
  !*** ./components/UserCard/UserCard.module.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"userCard": "UserCard_userCard__2pULC",
	"userCard_avatar": "UserCard_userCard_avatar__tUB2O",
	"userCard_profile": "UserCard_userCard_profile__3KElZ",
	"userCard_user": "UserCard_userCard_user__1Pt0z",
	"userCard_dropDawn": "UserCard_userCard_dropDawn__VlOqk",
	"userCard_dots": "UserCard_userCard_dots__360dv",
	"userCard_dot": "UserCard_userCard_dot__3LDlL",
	"userCard_dawn": "UserCard_userCard_dawn__1el4A",
	"userCard_editing": "UserCard_userCard_editing__nX2vf",
	"userCard_description": "UserCard_userCard_description__1WI3p",
	"userCard_nickname": "UserCard_userCard_nickname__1y2T-",
	"userCard_info": "UserCard_userCard_info__1An75",
	"userCard_profession": "UserCard_userCard_profession__2kRdI",
	"userCard_status": "UserCard_userCard_status__1v324",
	"userCard_communication": "UserCard_userCard_communication__3ixAH",
	"userCard_socNetworks": "UserCard_userCard_socNetworks__cL6Z4",
	"userCard_workStatus": "UserCard_userCard_workStatus__3byql",
	"userCard_workNotAvailableStatus": "UserCard_userCard_workNotAvailableStatus__2HNUk",
	"userCard_sts": "UserCard_userCard_sts__2wiKZ",
	"userCard_sts_not_available": "UserCard_userCard_sts_not_available__1Qzej",
	"userCard_section": "UserCard_userCard_section__1h5dK",
	"userCard_articles": "UserCard_userCard_articles__11Rj9",
	"rotated": "UserCard_rotated__2gNlX",
	"userCard_newPop": "UserCard_userCard_newPop__1OcCo",
	"userCard_comments": "UserCard_userCard_comments__FIOgr"
};


/***/ }),

/***/ "./components/UserCard/index.tsx":
/*!***************************************!*\
  !*** ./components/UserCard/index.tsx ***!
  \***************************************/
/*! exports provided: ActiveSvg, PointSvg, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActiveSvg", function() { return ActiveSvg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PointSvg", function() { return PointSvg; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _UserCard_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UserCard.module.scss */ "./components/UserCard/UserCard.module.scss");
/* harmony import */ var _UserCard_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_UserCard_module_scss__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Projects\\projects\\frontend\\components\\UserCard\\index.tsx";


function ActiveSvg(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
    className: props.leak ? _UserCard_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.rotated : "",
    width: "9",
    height: "6",
    viewBox: "0 0 9 6",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M1 1L4.5 4.5L8 1",
      stroke: "#04C800",
      strokeWidth: "1.3"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 9
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 12
  }, this);
}
function PointSvg() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
    width: "13",
    height: "9",
    viewBox: "0 0 13 9",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M1 4L5 8L11.5 1.5",
      stroke: "#40D269",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 9
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 28,
    columnNumber: 12
  }, this);
}

const UserCard = ({
  nickname,
  profession,
  status,
  recognized,
  sinceDate,
  commentsCount,
  onChangeType,
  readyForWork,
  articleType,
  isAuthUser,
  avatar,
  postCount
}) => {
  const [visiable, setVisiable] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(false);
  const [leak, setLeak] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(false);
  const [isOwner, setIsOwner] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(false);
  const [type, setType] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(articleType);

  const toggleVisible = () => {
    setVisiable(!visiable);
  };

  const toggleLeak = () => {
    setLeak(!leak);
  };

  const handleChangeType = t => {
    onChangeType(t);
    setType(t);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _UserCard_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.userCard,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _UserCard_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.userCard_profile,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _UserCard_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.userCard_user,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _UserCard_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.userCard_avatar,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: avatar,
            alt: "Users"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 74,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _UserCard_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.userCard_description,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _UserCard_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.userCard_nickname,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
              children: nickname
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 78,
              columnNumber: 29
            }, undefined), recognized && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              src: "/star.svg",
              alt: "."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 79,
              columnNumber: 44
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 77,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _UserCard_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.userCard_info,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              className: _UserCard_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.userCard_registered,
              children: ["\u041D\u0430 Ingternet \u0441 ", sinceDate]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 82,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              className: _UserCard_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.userCard_profession,
              children: profession
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 83,
              columnNumber: 29
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 81,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _UserCard_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.userCard_status,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              children: status
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 86,
              columnNumber: 29
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 85,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _UserCard_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.userCard_communication,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _UserCard_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.userCard_socNetworks,
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                src: "/facebook.svg",
                alt: "facebook"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 90,
                columnNumber: 33
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                src: "/vk.svg",
                alt: "vk"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 91,
                columnNumber: 33
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                src: "/twitter.svg",
                alt: "twitter"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 92,
                columnNumber: 33
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 89,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: readyForWork ? _UserCard_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.userCard_workStatus : _UserCard_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.userCard_workNotAvailableStatus,
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: readyForWork ? _UserCard_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.userCard_sts : _UserCard_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.userCard_sts_not_available
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 95,
                columnNumber: 33
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                children: readyForWork ? 'Доступен для работы' : 'Не доступен для работы'
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 96,
                columnNumber: 33
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 94,
              columnNumber: 29
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 88,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 21
        }, undefined), isOwner === false ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _UserCard_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.userCard_dropDawn,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            onClick: () => toggleVisible(),
            className: _UserCard_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.userCard_dots,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _UserCard_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.userCard_dot
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 104,
              columnNumber: 37
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _UserCard_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.userCard_dot
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 105,
              columnNumber: 37
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _UserCard_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.userCard_dot
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 106,
              columnNumber: 37
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 103,
            columnNumber: 33
          }, undefined), visiable && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _UserCard_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.userCard_dawn,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                children: "\u041F\u043E\u0436\u0430\u043B\u043E\u0432\u0430\u0442\u044C\u0441\u044F"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 111,
                columnNumber: 41
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                children: "\u0417\u0430\u0431\u043B\u043E\u043A\u0438\u0440\u043E\u0432\u0430\u0442\u044C"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 112,
                columnNumber: 41
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 110,
              columnNumber: 37
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 109,
            columnNumber: 33
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 102,
          columnNumber: 30
        }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _UserCard_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.userCard_editing,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            src: "/edit.svg",
            alt: ""
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 118,
            columnNumber: 33
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 117,
          columnNumber: 29
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _UserCard_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.userCard_section,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          onClick: () => toggleLeak(),
          className: _UserCard_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.userCard_articles,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            children: [type === 'articles' ? 'Статьи' : 'Черновики', " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("b", {
              children: postCount
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 124,
              columnNumber: 78
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 124,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ActiveSvg, {
            leak: leak
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 125,
            columnNumber: 25
          }, undefined), leak && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _UserCard_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.userCard_newPop,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                onClick: () => handleChangeType('articles'),
                children: [type === 'articles' && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(PointSvg, {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 130,
                  columnNumber: 65
                }, undefined), "\u0421\u0442\u0430\u0442\u044C\u0438"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 129,
                columnNumber: 37
              }, undefined), isAuthUser && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                onClick: () => handleChangeType('drafts'),
                children: [type === 'drafts' && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(PointSvg, {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 133,
                  columnNumber: 121
                }, undefined), " \u0427\u0435\u0440\u043D\u043E\u0432\u0438\u043A\u0438"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 133,
                columnNumber: 52
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 128,
              columnNumber: 33
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 127,
            columnNumber: 37
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 123,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _UserCard_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.userCard_comments,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            children: ["\u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0438 ", commentsCount]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 138,
            columnNumber: 63
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 138,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 122,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 70,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (UserCard);

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

/***/ "./pages/profile/[id].tsx":
/*!********************************!*\
  !*** ./pages/profile/[id].tsx ***!
  \********************************/
/*! exports provided: default, getServerSideProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Profile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getServerSideProps", function() { return getServerSideProps; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _layouts_MainLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../layouts/MainLayout */ "./layouts/MainLayout.tsx");
/* harmony import */ var _components_UserCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/UserCard */ "./components/UserCard/index.tsx");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _services_api_PostApi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/api/PostApi */ "./services/api/PostApi.ts");
/* harmony import */ var _components_MiniPost__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/MiniPost */ "./components/MiniPost/index.tsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _redux_user_user_selector__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../redux/user/user.selector */ "./redux/user/user.selector.ts");
/* harmony import */ var _services_api_LikeApi__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/api/LikeApi */ "./services/api/LikeApi.ts");
/* harmony import */ var _services_api_UserApi__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../services/api/UserApi */ "./services/api/UserApi.ts");
/* harmony import */ var _services_api_CommentApi__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../services/api/CommentApi */ "./services/api/CommentApi.ts");
/* harmony import */ var _components_LoadMore__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/LoadMore */ "./components/LoadMore/index.tsx");

var _jsxFileName = "C:\\Projects\\projects\\frontend\\pages\\profile\\[id].tsx";












function Profile(props) {
  var _posts$meta, _posts$data;

  const {
    0: user,
    1: setUser
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(props.user);
  const authUser = Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["useSelector"])(_redux_user_user_selector__WEBPACK_IMPORTED_MODULE_8__["selectUserState"])['data'];
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])();
  const {
    id,
    type
  } = router.query;
  const types = {
    drafts: 'draft',
    articles: 'active'
  };
  const [posts, setPosts] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(props.posts);
  const [isLoading, setIsLoading] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(false);
  const [skipUseEffect, setSkipUseEffect] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(true);
  const {
    0: page,
    1: setPage
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(props.posts.meta.current_page);
  const {
    0: maxPage,
    1: setMaxPage
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(props.posts.meta.last_page);
  react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(() => {
    setSkipUseEffect(false);

    if (!skipUseEffect) {
      setIsLoading(true);

      const effect = async () => {
        const responsePosts = await Object(_services_api_PostApi__WEBPACK_IMPORTED_MODULE_5__["getPosts"])({
          user_ids: id,
          status: types[type],
          page
        });
        setPosts(responsePosts);
        setIsLoading(false);
      };

      effect();
    }
  }, [type, page]);

  const onTypeChange = async t => {
    const posts = await Object(_services_api_PostApi__WEBPACK_IMPORTED_MODULE_5__["getPosts"])({
      status: types[t]
    });
    setPosts(posts);
  };

  const handleSetLike = async (postId, like) => {
    await Object(_services_api_LikeApi__WEBPACK_IMPORTED_MODULE_9__["setLike"])(postId, 'post', like);
  };

  if (isLoading || posts === {}) {
    return null;
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_layouts_MainLayout__WEBPACK_IMPORTED_MODULE_2__["MainLayout"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_UserCard__WEBPACK_IMPORTED_MODULE_3__["default"], {
      nickname: user === null || user === void 0 ? void 0 : user.name,
      profession: user === null || user === void 0 ? void 0 : user.position,
      status: user === null || user === void 0 ? void 0 : user.description,
      sinceDate: user === null || user === void 0 ? void 0 : user.created_at,
      commentsCount: user === null || user === void 0 ? void 0 : user.comments_count,
      readyForWork: user === null || user === void 0 ? void 0 : user.ready_for_work,
      articleType: type || 'articles',
      onChangeType: onTypeChange,
      isAuthUser: (authUser === null || authUser === void 0 ? void 0 : authUser.id) === user.id,
      recognized: !!user.recognized,
      avatar: user.avatar,
      postCount: posts === null || posts === void 0 ? void 0 : (_posts$meta = posts.meta) === null || _posts$meta === void 0 ? void 0 : _posts$meta.total
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: 'content mt-15 m-15',
      children: [posts === null || posts === void 0 ? void 0 : (_posts$data = posts.data) === null || _posts$data === void 0 ? void 0 : _posts$data.map(post => {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_MiniPost__WEBPACK_IMPORTED_MODULE_6__["MiniPost"], {
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
          lineNumber: 82,
          columnNumber: 28
        }, this);
      }), !isLoading && page !== maxPage && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_LoadMore__WEBPACK_IMPORTED_MODULE_12__["LoadMore"], {
        onClick: () => setPage(page + 1)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 21
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 63,
    columnNumber: 9
  }, this);
}
async function getServerSideProps(ctx) {
  const posts = await Object(_services_api_PostApi__WEBPACK_IMPORTED_MODULE_5__["getPosts"])({
    user_ids: ctx.query.id
  });
  const comments = await _services_api_CommentApi__WEBPACK_IMPORTED_MODULE_11__["CommentApi"].get({
    user_ids: ctx.query.id
  });
  return {
    props: {
      user: await _services_api_UserApi__WEBPACK_IMPORTED_MODULE_10__["UserApi"].show(ctx.query.id),
      posts,
      comments
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0F1dGhEaWFsb2cvQXV0aERpYWxvZy5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0F1dGhEaWFsb2cvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQXZhaWxhYmxlRm9yV29yay9BdmFpbGFibGVGb3JXb3JrLm1vZHVsZS5zY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQXZhaWxhYmxlRm9yV29yay9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9CdXR0b24vQnV0dG9uLm1vZHVsZS5zY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQnV0dG9uL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NoZWNrYm94L0NoZWNrYm94Lm1vZHVsZS5zY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQ2hlY2tib3gvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSGVhZGVyL0hlYWRlci5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hlYWRlci9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9MaWtlQmxvY2svTGlrZUJsb2NrLm1vZHVsZS5zY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTGlrZUJsb2NrL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xvYWRNb3JlL0xvYWRNb3JlLm1vZHVsZS5zY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTG9hZE1vcmUvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTWVudUxpc3QvTWVudUxpc3QubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9NZW51TGlzdC9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9NaW5pUG9zdC9NaW5pUG9zdC5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL01pbmlQb3N0L2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL01vYmlsZVByb2ZpbGVQb3B1cC9Nb2JpbGVQcm9maWxlUG9wdXAubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Nb2JpbGVQcm9maWxlUG9wdXAvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTmF2aWdhdGlvbkRyYXdlci9OYXZpZ2F0aW9uLm1vZHVsZS5zY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTmF2aWdhdGlvbkRyYXdlci9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Ob3RpZmljYXRpb25Ecm9wZG93bi9Ob3RpZmljYXRpb25Ecm9wZG93bi5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL05vdGlmaWNhdGlvbkRyb3Bkb3duL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL05vdGlmaWNhdGlvbkRyb3Bkb3duL2l0ZW0udHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvUGFzdFRpbWVMYWJlbC9QYXN0VGltZUxhYmVsLm1vZHVsZS5zY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvUGFzdFRpbWVMYWJlbC9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Qcm9maWxlUG9wdXAvUHJvZmlsZVBvcHVwLm1vZHVsZS5zY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvUHJvZmlsZVBvcHVwL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1NlYXJjaFBvcHVwL0l0ZW0udHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvU2VhcmNoUG9wdXAvU2VhcmNoUG9wdXAubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9TZWFyY2hQb3B1cC9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9TaWRlQmxvY2svU2lkZUJsb2NrLm1vZHVsZS5zY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvU2lkZUJsb2NrL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1RhZ3MvVGFncy5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1RhZ3MvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvVXNlckNhcmQvVXNlckNhcmQubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Vc2VyQ2FyZC9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Vc2VyVmlld09uQ29udGVudC9Vc2VyVmlld09uQ29udGVudC5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1VzZXJWaWV3T25Db250ZW50L2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1ZpZXdzQW5kQ29tbWVudHMvVmlld3NBbmRDb21tZW50cy5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1ZpZXdzQW5kQ29tbWVudHMvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvaWNvbnMvQ29tbWVudEljb24udHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvaWNvbnMvRXllSWNvbi50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9pY29ucy9UaHVtYlVwSWNvbi50c3giLCJ3ZWJwYWNrOi8vLy4vY29yZS9heGlvcy50cyIsIndlYnBhY2s6Ly8vLi9sYXlvdXRzL01haW5MYXlvdXQudHN4Iiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvbGluay50c3giLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9ub3JtYWxpemUtdHJhaWxpbmctc2xhc2gudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9yZXF1ZXN0LWlkbGUtY2FsbGJhY2sudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9yb3V0ZS1sb2FkZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9yb3V0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC91c2UtaW50ZXJzZWN0aW9uLnRzeCIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3dpdGgtcm91dGVyLnRzeCIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL2kxOG4vbm9ybWFsaXplLWxvY2FsZS1wYXRoLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvbWl0dC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZm9ybWF0LXVybC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9pcy1keW5hbWljLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3BhcnNlLXJlbGF0aXZlLXVybC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9xdWVyeXN0cmluZy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yZXNvbHZlLXJld3JpdGVzLW5vb3AudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtbWF0Y2hlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yb3V0ZS1yZWdleC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3V0aWxzLnRzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvc2VydmVyL2Rlbm9ybWFsaXplLXBhZ2UtcGF0aC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9saW5rLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvcmVhY3QtaXMvY2pzL3JlYWN0LWlzLmRldmVsb3BtZW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9yZWFjdC1pcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9wcm9maWxlLy50c3giLCJ3ZWJwYWNrOi8vLy4vcmVkdXgvZGlyZWN0b3J5L2RpcmVjdG9yeS5zZWxlY3Rvci50cyIsIndlYnBhY2s6Ly8vLi9yZWR1eC91c2VyL3VzZXIuc2VsZWN0b3IudHMiLCJ3ZWJwYWNrOi8vLy4vc2VydmljZXMvYXBpL0NvbW1lbnRBcGkudHMiLCJ3ZWJwYWNrOi8vLy4vc2VydmljZXMvYXBpL0xpa2VBcGkudHMiLCJ3ZWJwYWNrOi8vLy4vc2VydmljZXMvYXBpL1Bvc3RBcGkudHMiLCJ3ZWJwYWNrOi8vLy4vc2VydmljZXMvYXBpL1NwZWNpYWxpc3RzQXBpLnRzIiwid2VicGFjazovLy8uL3NlcnZpY2VzL2FwaS9Vc2VyQXBpLnRzIiwid2VicGFjazovLy8uL3V0aWxzL3VzZUFsbE1RLnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvQXZhdGFyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvQmFja2Ryb3BcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9Db2xsYXBzZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0RpYWxvZ1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0RpYWxvZ0NvbnRlbnRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL0Nsb3NlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG11aS9tYXRlcmlhbC9JY29uQnV0dG9uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjbHN4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZGF0ZS1mbnNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJkYXRlLWZucy9sb2NhbGVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtcmVkdXhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJuYW1lcyI6WyJBdXRoRGlhbG9nIiwiY2hpbGRyZW4iLCJvcGVuIiwic2l6ZSIsIm9uQ2xvc2UiLCJjbGFzc05hbWUiLCJzdHlsZXMiLCJtb2RhbCIsImNvbG9yIiwidGhlbWUiLCJwYWxldHRlIiwiZ3JleSIsImFsaWduU2VsZiIsIm1hcmdpblRvcCIsIm1hcmdpblJpZ2h0IiwicGFkZGluZyIsImZvbnRTaXplIiwicGFkZGluZ1RvcCIsInBhZGRpbmdCb3R0b20iLCJjb250ZW50IiwidGl0bGUiLCJzdWJUaXRsZSIsIkFQSV9VUkwiLCJ0ZXh0IiwibGluayIsIkF2YWlsYWJsZUZvcldvcmsiLCJjaGVja2VkIiwib25DaGFuZ2UiLCJzZXRDaGVja2VkIiwiaXNMb2FkaW5nIiwiY2xzeCIsInVuY2hlY2tlZFRpdGxlIiwidW5jaGVja2VkIiwiY2hlY2tlZFRpdGxlIiwiQnV0dG9uIiwidmFyaWFudCIsInN0YXJ0SWNvbiIsImVuZEljb24iLCJvbkNsaWNrIiwiZnVsbFdpZHRoIiwiZGlzYWJsZWQiLCJ0eXBlIiwiYnV0dG9uIiwicm9vdCIsImNvbnRhaW5lZCIsIm91dGxpbmVkIiwiY29udGFpbmVkUHJpbWFyeSIsImNvbnRhaW5lZFNlY29uZGFyeSIsIm91dGxpbmVkUHJpbWFyeSIsIm91dGxpbmVkU2Vjb25kYXJ5IiwidGV4dFByaW1hcnkiLCJ0ZXh0U2Vjb25kYXJ5IiwiQ2hlY2tib3giLCJjaGVja2JveCIsInN3aXRjaEJhc2UiLCJ0aHVtYiIsInRyYWNrIiwiSGVhZGVyIiwib25DbGlja0hhbWJ1cmdlciIsInNldElzTG9hZGluZyIsInVzZVN0YXRlIiwidXNlciIsInVzZVNlbGVjdG9yIiwic2VsZWN0VXNlclN0YXRlIiwibXEiLCJ1c2VBbGxNUSIsInJvdXRlciIsInVzZVJvdXRlciIsImRhdGEiLCJyZWFkeV9mb3Jfd29yayIsImlzU2VhcmNoIiwic2V0SXNTZWFyY2giLCJpc01vYmlsZVBvcHVwIiwic2V0SXNNb2JpbGVQb3B1cCIsImlzVmlzaWJsZSIsInNldElzVmlzaWJsZSIsInNlYXJjaElucHV0Iiwic2V0U2VhcmNoSW5wdXQiLCJ1c2VFZmZlY3QiLCJkb2N1bWVudCIsImJvZHkiLCJjbGFzc0xpc3QiLCJhZGQiLCJub3Njcm9sbCIsInJlbW92ZSIsIm9uQ2hhbmdlQ2hlY2tib3giLCJldmVudCIsImhhbmRsZUNoYW5nZUNoZWNrYm94IiwidGFyZ2V0Iiwib25PcGVuU2VhcmNoIiwib25DbG9zZVNlYXJjaCIsImZsYWciLCJVc2VyQXBpIiwidXBkYXRlUHJvZmlsZSIsImlkIiwidGhlbiIsInIiLCJjYXRjaCIsImVyciIsIk9iamVjdCIsInZhbHVlcyIsInJlc3BvbnNlIiwiZXJyb3JzIiwiZm9yRWFjaCIsImUiLCJhbGVydCIsImZpbmFsbHkiLCJoYW5kbGVDbGljayIsInB1c2giLCJoZWFkZXIiLCJsb2dvIiwic2VhcmNoIiwiaW5wdXQiLCJ2YWx1ZSIsImJhY2tkcm9wIiwibWVudUJ1dHRvbiIsIm5hbWUiLCJhdmF0YXIiLCJpc1hTIiwiTGlrZUJsb2NrIiwibW9kZSIsImxpa2VzIiwiZGlzbGlrZXMiLCJ2b3RlIiwib25UaHVtYlVwQ2xpY2siLCJ1bmRlZmluZWQiLCJvblRodW1iRG93bkNsaWNrIiwibGlrZVZvdGVkIiwiZGlzbGlrZVZvdGVkIiwibm9Wb3RlcyIsImxpa2VCbG9jayIsImxpa2VCbG9ja0Z1bGwiLCJsaWtlQmxvY2tNaW5pIiwidXBCbG9jayIsImRvd25CbG9jayIsInJvdGF0ZSIsInRodW1iVXBDbGFzc05hbWUiLCJ0aHVtYkRvd25DbGFzc05hbWUiLCJMb2FkTW9yZSIsImxvYWRNb3JlIiwiTWVudUxpc3QiLCJpdGVtcyIsIml0ZW0iLCJtYXAiLCJ1cmwiLCJpc0FjdGl2ZSIsImljb24iLCJoYXNNb3JlIiwibmV3Q291bnQiLCJNaW5pUG9zdCIsInBvc3REYXRhIiwib25TZXRMaWtlIiwidGltZSIsInRhZ3MiLCJpbWFnZVVybCIsImRlc2NyaXB0aW9uIiwiY29tbWVudHNDb3VudCIsInZpZXdzQ291bnQiLCJsaWtlc0NvdW50IiwiZGlzbGlrZXNDb3VudCIsInNsdWciLCJsaWtlc0FuZERpc2xpa2VzIiwic2V0TGlrZXNBbmREaXNsaWtlcyIsIlJlYWN0IiwiaGFuZGxlU2V0TGlrZSIsImxpa2UiLCJwb3N0IiwiaW5mbyIsImdldFRpbWUiLCJ0YWciLCJpbWFnZSIsInBvcHVsYXJpdHkiLCJwb3B1bGFyaXR5X2xlZnQiLCJwb3B1bGFyaXR5X3JpZ2h0IiwibW9ja3VwIiwiYXV0aG9ycyIsImFydGljbGVzIiwiY29tbWVudHMiLCJwb2RjYXN0cyIsIk1vYmlsZVByb2ZpbGVQb3B1cCIsIm9uTG9nb3V0Iiwid2luZG93IiwiY29uZmlybSIsImNvb2tpZSIsImxvY2FsU3RvcmFnZSIsInJlbW92ZUl0ZW0iLCJsb2NhdGlvbiIsImhyZWYiLCJjb250YWluZXIiLCJoZWFkZXJfcHJvZmlsZSIsImF2YWlsYWJsZSIsInNlY3Rpb24yIiwiZGl2aWRlciIsIm1lZWx6IiwiYWJvdXQiLCJOYXZpZ2F0aW9uRHJhd2VyIiwibWVudU9wZW5lZCIsInNlbGVjdGVkVGhlbWVzIiwic2V0U2VsZWN0ZWRUaGVtZXMiLCJ0aGVtZXMiLCJzZWxlY3RUaGVtZXNTdGF0ZSIsImNhdGVnb3JpZXMiLCJzZWxlY3RDYXRlZ29yaWVzU3RhdGUiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwiaGFuZGxlTG9nb3V0IiwiaGFuZGxlU2VsZWN0VGhlbWUiLCJ0IiwicGFwZXIiLCJjbG9zZUJ1dHRvbiIsImNsb3NlSWNvbiIsImMiLCJsb2dvdXQiLCJOb3RpZmljYXRpb25Ecm9wZG93biIsImFuY2hvckVsIiwic2V0QW5jaG9yRWwiLCJCb29sZWFuIiwibm90aWZpY2F0aW9ucyIsInNlbGVjdFVzZXJOb3RpZmljYXRpb25zIiwidG9nZ2xlT3BlblBvcHVwIiwiY29uc29sZSIsImxvZyIsImN1cnJlbnRUYXJnZXQiLCJoYW5kbGVDbG9zZSIsIm5vdGlmaWNhdGlvbiIsIm5vdGlmaWNhdGlvblBvcHVwIiwidmVydGljYWwiLCJob3Jpem9udGFsIiwibm90aWZpY2F0aW9uTGlzdCIsImxlbmd0aCIsIkFkZENvbW1lbnRJdGVtIiwibGlzdENvbnRlbnQiLCJTZXRMaWtlT3JEaXNsaWtlSXRlbSIsImlzTGlrZSIsImxpa2VhYmxlX3R5cGUiLCJpbmNsdWRlcyIsImNvbW1lbnQiLCJJdGVtIiwiUGFzdFRpbWVMYWJlbCIsImxlZnRTaWRlUG9pbnQiLCJ0aW1lV2l0aExlZnRTaWRlUG9pbnQiLCJmb3JtYXREaXN0YW5jZVRvTm93IiwibG9jYWxlIiwicnUiLCJhZGRTdWZmaXgiLCJQcm9maWxlUG9wdXAiLCJwb3BvdmVyIiwic2VjdGlvbjEiLCJwIiwic2V0T3BlbiIsInNlYXJjaFRpdGxlSW5uZXIiLCJzZWFyY2hUaXRsZSIsInNob3dBbGwiLCJzdG9wUHJvcGFnYXRpb24iLCJzZWFyY2hJdGVtcyIsInNsaWNlIiwiZWwiLCJrZXkiLCJzZWFyY2hJdGVtIiwiU2VhcmNoUG9wdXAiLCJzZXRBdXRob3JzIiwicG9zdHMiLCJzZXRQb3N0cyIsInNldENvbW1lbnRzIiwiZmlsdGVyIiwiZ2V0U3BlY2lhbGlzdHMiLCJ1c2VycyIsIkNvbW1lbnRBcGkiLCJnZXQiLCJnZXRQb3N0cyIsImZvb3RlciIsIlNpZGVCbG9jayIsImJsb2NrIiwiVGFnIiwiYnRuIiwiYWN0aXZlIiwiVGFncyIsImhhbmRsZVNlbGVjdCIsInNlbGVjdGVkSXRlbXMiLCJvYmoiLCJmaW5kIiwiQWN0aXZlU3ZnIiwicHJvcHMiLCJsZWFrIiwicm90YXRlZCIsIlBvaW50U3ZnIiwiVXNlckNhcmQiLCJuaWNrbmFtZSIsInByb2Zlc3Npb24iLCJzdGF0dXMiLCJyZWNvZ25pemVkIiwic2luY2VEYXRlIiwib25DaGFuZ2VUeXBlIiwicmVhZHlGb3JXb3JrIiwiYXJ0aWNsZVR5cGUiLCJpc0F1dGhVc2VyIiwicG9zdENvdW50IiwidmlzaWFibGUiLCJzZXRWaXNpYWJsZSIsInNldExlYWsiLCJpc093bmVyIiwic2V0SXNPd25lciIsInNldFR5cGUiLCJ0b2dnbGVWaXNpYmxlIiwidG9nZ2xlTGVhayIsImhhbmRsZUNoYW5nZVR5cGUiLCJ1c2VyQ2FyZCIsInVzZXJDYXJkX3Byb2ZpbGUiLCJ1c2VyQ2FyZF91c2VyIiwidXNlckNhcmRfYXZhdGFyIiwidXNlckNhcmRfZGVzY3JpcHRpb24iLCJ1c2VyQ2FyZF9uaWNrbmFtZSIsInVzZXJDYXJkX2luZm8iLCJ1c2VyQ2FyZF9yZWdpc3RlcmVkIiwidXNlckNhcmRfcHJvZmVzc2lvbiIsInVzZXJDYXJkX3N0YXR1cyIsInVzZXJDYXJkX2NvbW11bmljYXRpb24iLCJ1c2VyQ2FyZF9zb2NOZXR3b3JrcyIsInVzZXJDYXJkX3dvcmtTdGF0dXMiLCJ1c2VyQ2FyZF93b3JrTm90QXZhaWxhYmxlU3RhdHVzIiwidXNlckNhcmRfc3RzIiwidXNlckNhcmRfc3RzX25vdF9hdmFpbGFibGUiLCJ1c2VyQ2FyZF9kcm9wRGF3biIsInVzZXJDYXJkX2RvdHMiLCJ1c2VyQ2FyZF9kb3QiLCJ1c2VyQ2FyZF9kYXduIiwidXNlckNhcmRfZWRpdGluZyIsInVzZXJDYXJkX3NlY3Rpb24iLCJ1c2VyQ2FyZF9hcnRpY2xlcyIsInVzZXJDYXJkX25ld1BvcCIsInVzZXJDYXJkX2NvbW1lbnRzIiwiVXNlclZpZXdPbkNvbnRlbnQiLCJhdmF0YXJVcmwiLCJ1c2VyX2F2YXRhciIsInVzZXJfYXZhdGFyX3dpdGhfdGltZSIsIndpZHRoIiwiaGVpZ2h0IiwidXNlcl9pbmZvIiwidXNlcl9pbmZvX3dpdGhfdGltZSIsInVzZXJfbmFtZSIsImdldEZ1bGxUaXRsZSIsIm51bSIsIm1haW5QYXJ0IiwibGFzdFBhcnRzIiwibGFzdERpZ2l0IiwicHJlTGFzdERpZ2l0IiwiTWF0aCIsImZsb29yIiwiVmlld3NBbmRDb21tZW50cyIsInZpZXdzIiwiY29tbWVudHNUaXRsZSIsInZpZXdzVGl0bGUiLCJ2aWV3c0FuZENvbW1lbnRzIiwiY291bnQiLCJDb21tZW50SWNvbiIsIkV5ZUljb24iLCJUaHVtYlVwSWNvbiIsImluc3RhbmNlIiwiQXhpb3MiLCJjcmVhdGUiLCJiYXNlVVJMIiwid2l0aENyZWRlbnRpYWxzIiwiaW50ZXJjZXB0b3JzIiwicmVxdWVzdCIsInVzZSIsImNvbmZpZyIsIk1haW5MYXlvdXQiLCJ0b2dnbGVNZW51T3BlbmVkIiwidXNlQ2FsbGJhY2siLCJwcmVmZXRjaGVkIiwiY3VyTG9jYWxlIiwib3B0aW9ucyIsIm5vZGVOYW1lIiwiaXNNb2RpZmllZEV2ZW50Iiwic2Nyb2xsIiwiYXMiLCJyZXBsYWNlIiwic3VjY2VzcyIsImFyZ3MiLCJleHBlY3RlZCIsImFjdHVhbCIsInJlcXVpcmVkUHJvcHNHdWFyZCIsInJlcXVpcmVkUHJvcHMiLCJjcmVhdGVQcm9wRXJyb3IiLCJfIiwib3B0aW9uYWxQcm9wc0d1YXJkIiwic2hhbGxvdyIsInBhc3NIcmVmIiwicHJlZmV0Y2giLCJvcHRpb25hbFByb3BzIiwidmFsVHlwZSIsImhhc1dhcm5lZCIsInBhdGhuYW1lIiwicmVzb2x2ZWRBcyIsImNoaWxkIiwiQ2hpbGRyZW4iLCJjaGlsZFJlZiIsInJvb3RNYXJnaW4iLCJzZXRSZWYiLCJzZXRJbnRlcnNlY3Rpb25SZWYiLCJzaG91bGRQcmVmZXRjaCIsImlzUHJlZmV0Y2hlZCIsImNoaWxkUHJvcHMiLCJyZWYiLCJsaW5rQ2xpY2tlZCIsInByaW9yaXR5IiwibG9jYWxlRG9tYWluIiwiTGluayIsInBhdGgiLCJub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCIsInByb2Nlc3MiLCJyZXF1ZXN0SWRsZUNhbGxiYWNrIiwic2VsZiIsInN0YXJ0IiwiRGF0ZSIsInNldFRpbWVvdXQiLCJjYiIsImRpZFRpbWVvdXQiLCJ0aW1lUmVtYWluaW5nIiwiY2FuY2VsSWRsZUNhbGxiYWNrIiwiY2xlYXJUaW1lb3V0IiwiTVNfTUFYX0lETEVfREVMQVkiLCJlbnRyeSIsIlByb21pc2UiLCJwcm9tIiwicmVzb2x2ZSIsInJlc29sdmVyIiwiZnV0dXJlIiwiZ2VuZXJhdG9yIiwiY2FuUHJlZmV0Y2giLCJoYXNQcmVmZXRjaCIsInJlcyIsIkFTU0VUX0xPQURfRVJST1IiLCJTeW1ib2wiLCJzY3JpcHQiLCJyZWplY3QiLCJtYXJrQXNzZXRFcnJvciIsInNyYyIsImNhbmNlbGxlZCIsIm9uQnVpbGRNYW5pZmVzdCIsInJlc29sdmVQcm9taXNlV2l0aFRpbWVvdXQiLCJzY3JpcHRzIiwiYXNzZXRQcmVmaXgiLCJlbmNvZGVVUkkiLCJjc3MiLCJnZXRDbGllbnRCdWlsZE1hbmlmZXN0IiwibWFuaWZlc3QiLCJyb3V0ZSIsImFsbEZpbGVzIiwidiIsImVudHJ5cG9pbnRzIiwibG9hZGVkU2NyaXB0cyIsInN0eWxlU2hlZXRzIiwicm91dGVzIiwiYXBwZW5kU2NyaXB0IiwiZmV0Y2giLCJ3aGVuRW50cnlwb2ludCIsIndpdGhGdXR1cmUiLCJvbkVudHJ5cG9pbnQiLCJmbiIsImV4cG9ydHMiLCJjb21wb25lbnQiLCJlcnJvciIsIm9sZCIsImxvYWRSb3V0ZSIsImdldEZpbGVzRm9yUm91dGUiLCJlbnRyeXBvaW50IiwiY24iLCJuYXZpZ2F0b3IiLCJvdXRwdXQiLCJwcmVmZXRjaFZpYURvbSIsImNyZWF0ZVJvdXRlTG9hZGVyIiwic2luZ2xldG9uUm91dGVyIiwicmVhZHlDYWxsYmFja3MiLCJyZWFkeSIsInVybFByb3BlcnR5RmllbGRzIiwicm91dGVyRXZlbnRzIiwiY29yZU1ldGhvZEZpZWxkcyIsIlJvdXRlciIsImZpZWxkIiwiZ2V0Um91dGVyIiwiZXZlbnRGaWVsZCIsIl9zaW5nbGV0b25Sb3V0ZXIiLCJtZXNzYWdlIiwic3RhY2siLCJSb3V0ZXJDb250ZXh0IiwiY3JlYXRlUm91dGVyIiwiX3JvdXRlciIsIkFycmF5IiwiaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJpc0Rpc2FibGVkIiwidW5vYnNlcnZlIiwib2JzZXJ2ZSIsInNldFZpc2libGUiLCJpZGxlQ2FsbGJhY2siLCJjcmVhdGVPYnNlcnZlciIsImVsZW1lbnRzIiwib2JzZXJ2ZXIiLCJvYnNlcnZlcnMiLCJlbnRyaWVzIiwiY2FsbGJhY2siLCJDb21wb3NlZENvbXBvbmVudCIsImdldEluaXRpYWxQcm9wcyIsIldpdGhSb3V0ZXJXcmFwcGVyIiwicGF0aG5hbWVQYXJ0cyIsImxvY2FsZXMiLCJkZXRlY3RlZExvY2FsZSIsImFsbCIsIm9uIiwib2ZmIiwiZW1pdCIsImhhbmRsZXIiLCJiYXNlUGF0aCIsInByZWZpeCIsInBhdGhOb1F1ZXJ5SGFzaCIsInF1ZXJ5SW5kZXgiLCJoYXNoSW5kZXgiLCJhZGRQYXRoUHJlZml4IiwibG9jYXRpb25PcmlnaW4iLCJyZXNvbHZlZCIsImhhc0Jhc2VQYXRoIiwiaW50ZXJwb2xhdGVkUm91dGUiLCJkeW5hbWljUmVnZXgiLCJkeW5hbWljR3JvdXBzIiwiZHluYW1pY01hdGNoZXMiLCJhc1BhdGhuYW1lIiwicGFyYW1zIiwicGFyYW0iLCJyZXBsYWNlZCIsInJlcGVhdCIsIm9wdGlvbmFsIiwic2VnbWVudCIsImVuY29kZVVSSUNvbXBvbmVudCIsInJlc3VsdCIsImZpbHRlcmVkUXVlcnkiLCJxdWVyeSIsImJhc2UiLCJ1cmxBc1N0cmluZyIsImlzTG9jYWxVUkwiLCJyZXNvbHZlQXMiLCJmaW5hbFVybCIsImludGVycG9sYXRlZEFzIiwiaW50ZXJwb2xhdGVBcyIsImhhc2giLCJvbWl0UGFybXNGcm9tUXVlcnkiLCJyZXNvbHZlZEhyZWYiLCJvcmlnaW4iLCJyZXNvbHZlSHJlZiIsImhyZWZIYWRPcmlnaW4iLCJhc0hhZE9yaWdpbiIsInN0cmlwT3JpZ2luIiwicHJlcGFyZWRVcmwiLCJhZGRCYXNlUGF0aCIsInByZXBhcmVkQXMiLCJhcHBseUJhc2VQYXRoIiwiY2xlYW5QYXRobmFtZSIsImRlbEJhc2VQYXRoIiwicGFnZXMiLCJwYWdlIiwicGFyc2VkSHJlZiIsIm1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uIiwiU1NHX0RBVEFfTk9UX0ZPVU5EIiwiY3JlZGVudGlhbHMiLCJhdHRlbXB0cyIsImZldGNoUmV0cnkiLCJub3RGb3VuZCIsImlzU2VydmVyUmVuZGVyIiwiY29uc3RydWN0b3IiLCJhc1BhdGgiLCJjb21wb25lbnRzIiwic2RjIiwic2RyIiwic3ViIiwiY2xjIiwicGFnZUxvYWRlciIsIl9icHMiLCJldmVudHMiLCJfd3JhcEFwcCIsImlzU3NyIiwiaXNGYWxsYmFjayIsIl9pbkZsaWdodFJvdXRlIiwiX3NoYWxsb3ciLCJkZWZhdWx0TG9jYWxlIiwiZG9tYWluTG9jYWxlcyIsImlzUmVhZHkiLCJpc1ByZXZpZXciLCJpc0xvY2FsZURvbWFpbiIsIl9pZHgiLCJzdGF0ZSIsImluaXRpYWwiLCJfX05fU1NHIiwiaW5pdGlhbFByb3BzIiwiX19OX1NTUCIsIkNvbXBvbmVudCIsImF1dG9FeHBvcnREeW5hbWljIiwicmVsb2FkIiwiYmFjayIsInByZXBhcmVVcmxBcyIsImxvY2FsZUNoYW5nZSIsIlNUIiwicGVyZm9ybWFuY2UiLCJyb3V0ZVByb3BzIiwiYWRkTG9jYWxlIiwiY2xlYW5lZEFzIiwiZGVsTG9jYWxlIiwicGFyc2VkIiwiX19yZXdyaXRlcyIsInJlc29sdmVEeW5hbWljUm91dGUiLCJtZXRob2QiLCJwYXJzZWRBcyIsInJvdXRlUmVnZXgiLCJyb3V0ZU1hdGNoIiwic2hvdWxkSW50ZXJwb2xhdGUiLCJtaXNzaW5nUGFyYW1zIiwicm91dGVJbmZvIiwiZGVzdGluYXRpb24iLCJub3RGb3VuZFJvdXRlIiwiYXBwQ29tcCIsImlzVmFsaWRTaGFsbG93Um91dGUiLCJmb3JjZWRTY3JvbGwiLCJ4IiwieSIsImNoYW5nZVN0YXRlIiwiX19OIiwiaWR4IiwiYnVpbGRDYW5jZWxsYXRpb25FcnJvciIsImV4aXN0aW5nUm91dGVJbmZvIiwiY2FjaGVkUm91dGVJbmZvIiwicmVxdWlyZSIsImlzVmFsaWRFbGVtZW50VHlwZSIsImRhdGFIcmVmIiwic2V0IiwiYmVmb3JlUG9wU3RhdGUiLCJvbmx5QUhhc2hDaGFuZ2UiLCJuZXdIYXNoIiwib2xkVXJsTm9IYXNoIiwib2xkSGFzaCIsInNjcm9sbFRvSGFzaCIsImlkRWwiLCJuYW1lRWwiLCJ1cmxJc05ldyIsImlzU3NnIiwiY2FuY2VsIiwiY29tcG9uZW50UmVzdWx0IiwiX2dldERhdGEiLCJfZ2V0U3RhdGljRGF0YSIsImZldGNoTmV4dERhdGEiLCJfZ2V0U2VydmVyRGF0YSIsIkFwcFRyZWUiLCJjdHgiLCJhYm9ydENvbXBvbmVudExvYWQiLCJub3RpZnkiLCJzbGFzaGVkUHJvdG9jb2xzIiwicHJvdG9jb2wiLCJ1cmxPYmoiLCJob3N0IiwiYXV0aCIsImhvc3RuYW1lIiwiU3RyaW5nIiwicXVlcnlzdHJpbmciLCJURVNUX1JPVVRFIiwiZ2xvYmFsQmFzZSIsInJlc29sdmVkQmFzZSIsInNlYXJjaFBhcmFtcyIsImlzTmFOIiwic3RyaW5naWZ5VXJsUXVlcnlQYXJhbSIsInNlYXJjaFBhcmFtc0xpc3QiLCJyZSIsImRlY29kZSIsImRlY29kZVVSSUNvbXBvbmVudCIsInNsdWdOYW1lIiwiZyIsImdyb3VwcyIsIm0iLCJzdHIiLCJzZWdtZW50cyIsIm5vcm1hbGl6ZWRSb3V0ZSIsImdyb3VwSW5kZXgiLCJwYXJhbWV0ZXJpemVkUm91dGUiLCJwYXJzZVBhcmFtZXRlciIsInBvcyIsImVzY2FwZVJlZ2V4Iiwicm91dGVLZXlDaGFyQ29kZSIsInJvdXRlS2V5Q2hhckxlbmd0aCIsImdldFNhZmVSb3V0ZUtleSIsInJvdXRlS2V5IiwiaSIsInJvdXRlS2V5cyIsIm5hbWVkUGFyYW1ldGVyaXplZFJvdXRlIiwiY2xlYW5lZEtleSIsImludmFsaWRLZXkiLCJwYXJzZUludCIsIm5hbWVkUmVnZXgiLCJ1c2VkIiwicG9ydCIsImdldExvY2F0aW9uT3JpZ2luIiwiQXBwIiwiZ2V0RGlzcGxheU5hbWUiLCJwYWdlUHJvcHMiLCJsb2FkR2V0SW5pdGlhbFByb3BzIiwiaXNSZXNTZW50IiwidXJsT2JqZWN0S2V5cyIsIlNQIiwiUHJvZmlsZSIsInNldFVzZXIiLCJhdXRoVXNlciIsInR5cGVzIiwiZHJhZnRzIiwic2tpcFVzZUVmZmVjdCIsInNldFNraXBVc2VFZmZlY3QiLCJzZXRQYWdlIiwibWV0YSIsImN1cnJlbnRfcGFnZSIsIm1heFBhZ2UiLCJzZXRNYXhQYWdlIiwibGFzdF9wYWdlIiwiZWZmZWN0IiwicmVzcG9uc2VQb3N0cyIsInVzZXJfaWRzIiwib25UeXBlQ2hhbmdlIiwicG9zdElkIiwic2V0TGlrZSIsInBvc2l0aW9uIiwiY3JlYXRlZF9hdCIsImNvbW1lbnRzX2NvdW50IiwidG90YWwiLCJkaXNsaWtlc19jb3VudCIsImxpa2VzX2NvdW50IiwiaW1nIiwidXBkYXRlZF9hdCIsImxpa2VkX3R5cGUiLCJnZXRTZXJ2ZXJTaWRlUHJvcHMiLCJzaG93IiwiZGlyZWN0b3J5IiwiYXhpb3MiLCJzYXZlIiwidG9Vc2VySWQiLCJwYXJlbnRDb21tZW50SWQiLCJjb21tZW50SWQiLCJwb3N0X2lkIiwidXNlcl9yZXBseV9pZCIsInBhcmVudF9pZCIsInB1dCIsInNhdmVJbWFnZSIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJhcHBlbmQiLCJzYXZlUG9zdCIsImNhdGVnb3J5IiwidG9rZW4iLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsImdldFRoZW1lcyIsInNhdmVCeVVybCIsInNob3dQb3N0IiwiZ2V0UG9zdENvbW1lbnRzIiwiYXBpVG9rZW4iLCJnZXRTcGVjaWFsaXN0Q2F0ZWdvcmllcyIsImxvZ2luIiwiZW1haWwiLCJwYXNzd29yZCIsIm1heFJlZGlyZWN0cyIsImdldE1lIiwiZ2V0Tm90aWZpY2F0aW9ucyIsImtleXMiLCJsaW5rcyIsImwiLCJwYXRjaCIsImdldENvb2tpZSIsInVzZVRoZW1lIiwidXNlTWVkaWFRdWVyeSIsImJyZWFrcG9pbnRzIiwiZG93biIsImlzU00iLCJpc01EIiwiaXNMRyJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztR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TTNNLFFBQVEsR0FBRyxNQUFNO0FBQzVCLFFBQU14RCxLQUFLLEdBQUd3dkIsa0VBQVEsRUFBdEI7QUFFQSxTQUFPO0FBQ0wzb0IsUUFBSSxFQUFFNG9CLHVFQUFhLENBQUN6dkIsS0FBSyxDQUFDMHZCLFdBQU4sQ0FBa0JDLElBQWxCLENBQXVCLElBQXZCLENBQUQsQ0FEZDtBQUVMQyxRQUFJLEVBQUVILHVFQUFhLENBQUN6dkIsS0FBSyxDQUFDMHZCLFdBQU4sQ0FBa0JDLElBQWxCLENBQXVCLElBQXZCLENBQUQsQ0FGZDtBQUdMRSxRQUFJLEVBQUVKLHVFQUFhLENBQUN6dkIsS0FBSyxDQUFDMHZCLFdBQU4sQ0FBa0JDLElBQWxCLENBQXVCLElBQXZCLENBQUQsQ0FIZDtBQUlMRyxRQUFJLEVBQUVMLHVFQUFhLENBQUN6dkIsS0FBSyxDQUFDMHZCLFdBQU4sQ0FBa0JDLElBQWxCLENBQXVCLElBQXZCLENBQUQ7QUFKZCxHQUFQO0FBTUQsQ0FUTSxDOzs7Ozs7Ozs7OztBQ0ZQLDhDOzs7Ozs7Ozs7OztBQ0FBLHFEOzs7Ozs7Ozs7OztBQ0FBLHVEOzs7Ozs7Ozs7OztBQ0FBLHFEOzs7Ozs7Ozs7OztBQ0FBLHVEOzs7Ozs7Ozs7OztBQ0FBLHFEOzs7Ozs7Ozs7OztBQ0FBLDREOzs7Ozs7Ozs7OztBQ0FBLHlEOzs7Ozs7Ozs7OztBQ0FBLHFEOzs7Ozs7Ozs7OztBQ0FBLHFEOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLGlDOzs7Ozs7Ozs7OztBQ0FBLHFDOzs7Ozs7Ozs7OztBQ0FBLDRDOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLGtEIiwiZmlsZSI6InBhZ2VzL3Byb2ZpbGUvW2lkXS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvcHJvZmlsZS9baWRdLnRzeFwiKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZS5qc1wiKTsiLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJtb2RhbFwiOiBcIkF1dGhEaWFsb2dfbW9kYWxfXzd2M1FMXCIsXG5cdFwiY29udGVudFwiOiBcIkF1dGhEaWFsb2dfY29udGVudF9fMnJJckxcIixcblx0XCJ0aXRsZVwiOiBcIkF1dGhEaWFsb2dfdGl0bGVfXzJaSUI4XCIsXG5cdFwic3ViVGl0bGVcIjogXCJBdXRoRGlhbG9nX3N1YlRpdGxlX19DTDdyMlwiLFxuXHRcInRleHRcIjogXCJBdXRoRGlhbG9nX3RleHRfXzFCNXNkXCIsXG5cdFwibGlua1wiOiBcIkF1dGhEaWFsb2dfbGlua19fMnZHeGpcIixcblx0XCJmdWxsV2lkdGhcIjogXCJBdXRoRGlhbG9nX2Z1bGxXaWR0aF9fMWFSRlpcIixcblx0XCJzY3JvbGxQYXBlclwiOiBcIkF1dGhEaWFsb2dfc2Nyb2xsUGFwZXJfXzI2Zk5IXCIsXG5cdFwicGFwZXJTY3JvbGxQYXBlclwiOiBcIkF1dGhEaWFsb2dfcGFwZXJTY3JvbGxQYXBlcl9fMi1GenZcIlxufTtcbiIsImltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJztcclxuaW1wb3J0IERpYWxvZyBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2cnO1xyXG5pbXBvcnQgRGlhbG9nQ29udGVudCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dDb250ZW50JztcclxuaW1wb3J0IERpYWxvZ1RpdGxlIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0RpYWxvZ1RpdGxlJztcclxuaW1wb3J0IENsb3NlSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvQ2xvc2UnO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgSWNvbkJ1dHRvbiBmcm9tICdAbXVpL21hdGVyaWFsL0ljb25CdXR0b24nO1xyXG5cclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0F1dGhEaWFsb2cubW9kdWxlLnNjc3MnO1xyXG5pbXBvcnQgeyBEaWFsb2dDb250ZW50VGV4dCwgVHlwb2dyYXBoeSB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuaW1wb3J0IHsgQVBJX1VSTCB9IGZyb20gJy4uLy4uL2NvcmUvYXhpb3MnO1xyXG5cclxuaW50ZXJmYWNlIE1vZGFsUHJvcHMge1xyXG4gIG9wZW4/OiBib29sZWFuO1xyXG4gIHNpemU/OiAneHMnIHwgJ3NtJyB8ICdtZCcgfCAnbGcnIHwgJ3hsJyB8IGZhbHNlO1xyXG4gIG9uQ2xvc2U6ICgpID0+IHZvaWQ7XHJcbiAgY2xhc3NOYW1lPzogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgQXV0aERpYWxvZzogUmVhY3QuRkM8TW9kYWxQcm9wcz4gPSAoe1xyXG4gIGNoaWxkcmVuLFxyXG4gIG9wZW4gPSBmYWxzZSxcclxuICBzaXplID0gJ3hzJyxcclxuICBvbkNsb3NlLFxyXG4gIGNsYXNzTmFtZSxcclxufSk6IFJlYWN0LlJlYWN0RWxlbWVudCA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxEaWFsb2dcclxuICAgICAgbWF4V2lkdGg9eyd4cyd9XHJcbiAgICAgIG9wZW49e29wZW59XHJcbiAgICAgIG9uQ2xvc2U9e29uQ2xvc2V9XHJcbiAgICAgIGZ1bGxXaWR0aFxyXG4gICAgICBQYXBlclByb3BzPXt7XHJcbiAgICAgICAgY2xhc3NOYW1lOiBzdHlsZXMubW9kYWwsXHJcbiAgICAgIH19XHJcbiAgICA+XHJcbiAgICAgIDxJY29uQnV0dG9uXHJcbiAgICAgICAgYXJpYS1sYWJlbD1cImNsb3NlXCJcclxuICAgICAgICBvbkNsaWNrPXtvbkNsb3NlfVxyXG4gICAgICAgIHN4PXt7XHJcbiAgICAgICAgICBjb2xvcjogKHRoZW1lKSA9PiB0aGVtZS5wYWxldHRlLmdyZXlbNTAwXSxcclxuICAgICAgICB9fVxyXG4gICAgICAgIHN0eWxlPXt7IGFsaWduU2VsZjogJ2ZsZXgtZW5kJywgbWFyZ2luVG9wOiAyMiwgbWFyZ2luUmlnaHQ6IDIwLCBwYWRkaW5nOiAwIH19XHJcbiAgICAgID5cclxuICAgICAgICA8Q2xvc2VJY29uIHN0eWxlPXt7IGZvbnRTaXplOiAyOCB9fSAvPlxyXG4gICAgICA8L0ljb25CdXR0b24+XHJcblxyXG4gICAgICA8RGlhbG9nQ29udGVudCBzdHlsZT17eyBwYWRkaW5nVG9wOiAxNCwgcGFkZGluZ0JvdHRvbTogNTAgfX0+XHJcbiAgICAgICAgPERpYWxvZ0NvbnRlbnRUZXh0IGNsYXNzTmFtZT1cIm1iLTBcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGVudH0+XHJcbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT4g0JTQvtCx0YDQviDQv9C+0LbQsNC70L7QstCw0YLRjCA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17c3R5bGVzLnN1YlRpdGxlfT4g0KDQsNC00Ysg0LLQuNC00LXRgtGMINCy0LDRgSDRgdC90L7QstCwISA8L1R5cG9ncmFwaHk+XHJcblxyXG4gICAgICAgICAgICA8TGluayBocmVmPXtgJHtBUElfVVJMfS9zb2NpYWwvdmtgfT5cclxuICAgICAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgICAgIDxCdXR0b24gZnVsbFdpZHRoPXt0cnVlfSB2YXJpYW50PXsnb3V0bGluZWQnfT5cclxuICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvdmsucG5nXCIgYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgICAg0JLQvtC50YLQuCDRh9C10YDQtdC3IFZLXHJcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj17YCR7QVBJX1VSTH0vc29jaWFsL2dvb2dsZWB9PlxyXG4gICAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBmdWxsV2lkdGg9e3RydWV9IHZhcmlhbnQ9eydvdXRsaW5lZCd9PlxyXG4gICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9nb29nbGUucG5nXCIgYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgICAg0JLQvtC50YLQuCDRh9C10YDQtdC3IEdvb2dsZVxyXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXJcIiBzdHlsZT17eyBtYXJnaW5Ub3A6IDQwIH19PlxyXG4gICAgICAgICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e3N0eWxlcy50ZXh0fT5cclxuICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgINC40LvQuCA8YSBjbGFzc05hbWU9e3N0eWxlcy5saW5rfT7RgdC+0LfQtNCw0YLRjCDQsNC60LrQsNGD0L3RgjwvYT5cclxuICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvRGlhbG9nQ29udGVudFRleHQ+XHJcbiAgICAgIDwvRGlhbG9nQ29udGVudD5cclxuICAgIDwvRGlhbG9nPlxyXG4gICk7XHJcbn07XHJcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNoZWNrZWRUaXRsZVwiOiBcIkF2YWlsYWJsZUZvcldvcmtfY2hlY2tlZFRpdGxlX18xYnloMlwiLFxuXHRcInVuY2hlY2tlZFRpdGxlXCI6IFwiQXZhaWxhYmxlRm9yV29ya191bmNoZWNrZWRUaXRsZV9fM2xXQUtcIixcblx0XCJjaGVja2VkXCI6IFwiQXZhaWxhYmxlRm9yV29ya19jaGVja2VkX19NcmloUVwiLFxuXHRcInVuY2hlY2tlZFwiOiBcIkF2YWlsYWJsZUZvcldvcmtfdW5jaGVja2VkX18zVkR1Y1wiXG59O1xuIiwiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCc7XHJcblxyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vQXZhaWxhYmxlRm9yV29yay5tb2R1bGUuc2Nzcyc7XHJcbmltcG9ydCB7IENoZWNrYm94IH0gZnJvbSAnLi4vQ2hlY2tib3gnO1xyXG5cclxuaW50ZXJmYWNlIEF2YWlsYWJsZUZvcldvcmtQcm9wcyB7XHJcbiAgY2hlY2tlZD86IGJvb2xlYW47XHJcbiAgb25DaGFuZ2U6IChldmVudDogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHZvaWQ7XHJcbiAgc2V0Q2hlY2tlZDogKHZhbHVlOiBib29sZWFuKSA9PiB2b2lkO1xyXG4gIGlzTG9hZGluZzogYm9vbGVhbjtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEF2YWlsYWJsZUZvcldvcms6IFJlYWN0LkZDPEF2YWlsYWJsZUZvcldvcmtQcm9wcz4gPSAoeyBjaGVja2VkLCBvbkNoYW5nZSwgc2V0Q2hlY2tlZCwgaXNMb2FkaW5nIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2Nsc3goJ2QtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyJyl9PlxyXG4gICAgICA8c3BhblxyXG4gICAgICAgIGNsYXNzTmFtZT17Y2xzeChzdHlsZXMudW5jaGVja2VkVGl0bGUsIGNoZWNrZWQgfHwgaXNMb2FkaW5nID8gc3R5bGVzLnVuY2hlY2tlZCA6IHN0eWxlcy5jaGVja2VkKX1cclxuICAgICAgICBvbkNsaWNrPXsoKSA9PiAhaXNMb2FkaW5nICYmIHNldENoZWNrZWQoZmFsc2UpfVxyXG4gICAgICA+XHJcbiAgICAgICAg0J3QtdC00L7RgdGC0YPQv9C10L1cclxuICAgICAgPC9zcGFuPlxyXG4gICAgICA8Q2hlY2tib3ggY2hlY2tlZD17Y2hlY2tlZH0gb25DaGFuZ2U9e29uQ2hhbmdlfSBkaXNhYmxlZD17aXNMb2FkaW5nfSAvPlxyXG4gICAgICA8c3BhblxyXG4gICAgICAgIGNsYXNzTmFtZT17Y2xzeChzdHlsZXMuY2hlY2tlZFRpdGxlLCBjaGVja2VkICYmICFpc0xvYWRpbmcgPyBzdHlsZXMuY2hlY2tlZCA6IHN0eWxlcy51bmNoZWNrZWQpfVxyXG4gICAgICAgIG9uQ2xpY2s9eygpID0+ICFpc0xvYWRpbmcgJiYgc2V0Q2hlY2tlZCh0cnVlKX1cclxuICAgICAgPlxyXG4gICAgICAgINCU0L7RgdGC0YPQv9C10L0g0LTQu9GPINGA0LDQsdC+0YLRi1xyXG4gICAgICA8L3NwYW4+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJidXR0b25cIjogXCJCdXR0b25fYnV0dG9uX18zLXU0UFwiLFxuXHRcInJvb3RcIjogXCJCdXR0b25fcm9vdF9fMkdDNTJcIixcblx0XCJjb250YWluZWRcIjogXCJCdXR0b25fY29udGFpbmVkX18xU1AyRVwiLFxuXHRcImNvbnRhaW5lZFByaW1hcnlcIjogXCJCdXR0b25fY29udGFpbmVkUHJpbWFyeV9fMVFPbW9cIixcblx0XCJjb250YWluZWRTZWNvbmRhcnlcIjogXCJCdXR0b25fY29udGFpbmVkU2Vjb25kYXJ5X18xY0RWMVwiLFxuXHRcIm91dGxpbmVkXCI6IFwiQnV0dG9uX291dGxpbmVkX18zajluWlwiLFxuXHRcIm91dGxpbmVkUHJpbWFyeVwiOiBcIkJ1dHRvbl9vdXRsaW5lZFByaW1hcnlfX0Ywa19LXCIsXG5cdFwib3V0bGluZWRTZWNvbmRhcnlcIjogXCJCdXR0b25fb3V0bGluZWRTZWNvbmRhcnlfXzNTakRiXCIsXG5cdFwidGV4dFByaW1hcnlcIjogXCJCdXR0b25fdGV4dFByaW1hcnlfX0RNMVRkXCIsXG5cdFwidGV4dFNlY29uZGFyeVwiOiBcIkJ1dHRvbl90ZXh0U2Vjb25kYXJ5X182WXRKQlwiXG59O1xuIiwiaW1wb3J0IFJlYWN0LCB7IFJlYWN0Tm9kZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQnV0dG9uIGFzIEJ1dHRvbkJhc2UgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9CdXR0b24ubW9kdWxlLnNjc3MnO1xyXG5cclxuaW50ZXJmYWNlIEJ1dHRvblByb3BzIHtcclxuICBjaGlsZHJlbjogUmVhY3ROb2RlO1xyXG4gIHZhcmlhbnQ/OiAndGV4dCcgfCAnb3V0bGluZWQnIHwgJ2NvbnRhaW5lZCc7XHJcbiAgY29sb3I/OiAnaW5oZXJpdCcgfCAncHJpbWFyeScgfCAnc2Vjb25kYXJ5JyB8ICdkZWZhdWx0JztcclxuICBmdWxsV2lkdGg/OiBib29sZWFuO1xyXG4gIHN0YXJ0SWNvbj86IFJlYWN0Tm9kZTtcclxuICBlbmRJY29uPzogUmVhY3ROb2RlO1xyXG4gIGNsYXNzTmFtZT86IHN0cmluZztcclxuICBvbkNsaWNrPzogKCkgPT4gdm9pZDtcclxuICBkaXNhYmxlZD86IGJvb2xlYW47XHJcbiAgdHlwZT86ICdidXR0b24nIHwgJ3N1Ym1pdCc7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBCdXR0b246IFJlYWN0LkZDPEJ1dHRvblByb3BzPiA9IChcclxuICAgIHtcclxuICAgICAgICBjbGFzc05hbWUsXHJcbiAgICAgICAgY2hpbGRyZW4sXHJcbiAgICAgICAgdmFyaWFudCxcclxuICAgICAgICBjb2xvcixcclxuICAgICAgICBzdGFydEljb24sXHJcbiAgICAgICAgZW5kSWNvbixcclxuICAgICAgICBvbkNsaWNrLFxyXG4gICAgICAgIGZ1bGxXaWR0aCxcclxuICAgICAgICBkaXNhYmxlZCxcclxuICAgICAgICB0eXBlXHJcbiAgICB9XHJcbikgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbn0+XHJcbiAgICAgICAgICAgIDxCdXR0b25CYXNlXHJcbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZX1cclxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9e3ZhcmlhbnR9XHJcbiAgICAgICAgICAgICAgICBjb2xvcj17Y29sb3J9XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtvbkNsaWNrfVxyXG4gICAgICAgICAgICAgICAgY2xhc3Nlcz17e1xyXG4gICAgICAgICAgICAgICAgICAgIHJvb3Q6IHN0eWxlcy5yb290LFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lZDogc3R5bGVzLmNvbnRhaW5lZCxcclxuICAgICAgICAgICAgICAgICAgICBvdXRsaW5lZDogc3R5bGVzLm91dGxpbmVkLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lZFByaW1hcnk6IHN0eWxlcy5jb250YWluZWRQcmltYXJ5LFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lZFNlY29uZGFyeTogc3R5bGVzLmNvbnRhaW5lZFNlY29uZGFyeSxcclxuICAgICAgICAgICAgICAgICAgICBvdXRsaW5lZFByaW1hcnk6IHN0eWxlcy5vdXRsaW5lZFByaW1hcnksXHJcbiAgICAgICAgICAgICAgICAgICAgb3V0bGluZWRTZWNvbmRhcnk6IHN0eWxlcy5vdXRsaW5lZFNlY29uZGFyeSxcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0UHJpbWFyeTogc3R5bGVzLnRleHRQcmltYXJ5LFxyXG4gICAgICAgICAgICAgICAgICAgIHRleHRTZWNvbmRhcnk6IHN0eWxlcy50ZXh0U2Vjb25kYXJ5LFxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIHN0YXJ0SWNvbj17c3RhcnRJY29ufVxyXG4gICAgICAgICAgICAgICAgZW5kSWNvbj17ZW5kSWNvbn1cclxuICAgICAgICAgICAgICAgIGZ1bGxXaWR0aD17ZnVsbFdpZHRoIHx8IGZhbHNlfVxyXG4gICAgICAgICAgICAgICAgdHlwZT17dHlwZX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgICAgICA8L0J1dHRvbkJhc2U+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjaGVja2JveFwiOiBcIkNoZWNrYm94X2NoZWNrYm94X18zcHdNNlwiLFxuXHRcInJvb3RcIjogXCJDaGVja2JveF9yb290X18yblBGOFwiLFxuXHRcInN3aXRjaEJhc2VcIjogXCJDaGVja2JveF9zd2l0Y2hCYXNlX18xbG14U1wiLFxuXHRcImNoZWNrZWRcIjogXCJDaGVja2JveF9jaGVja2VkX18xUDFvaFwiLFxuXHRcInRyYWNrXCI6IFwiQ2hlY2tib3hfdHJhY2tfXzNLbGVEXCIsXG5cdFwidGh1bWJcIjogXCJDaGVja2JveF90aHVtYl9fMTgwNWxcIlxufTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnO1xyXG5pbXBvcnQgeyBTd2l0Y2ggfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9DaGVja2JveC5tb2R1bGUuc2Nzcyc7XHJcblxyXG5pbnRlcmZhY2UgQ2hlY2tib3hQcm9wcyB7XHJcbiAgY2hlY2tlZDogYm9vbGVhbjtcclxuICBvbkNoYW5nZTogKGV2ZW50OiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4gdm9pZDtcclxuICBkaXNhYmxlZD86IGJvb2xlYW47XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBDaGVja2JveDogUmVhY3QuRkM8Q2hlY2tib3hQcm9wcz4gPSAoeyBjaGVja2VkLCBvbkNoYW5nZSwgZGlzYWJsZWQgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xzeChzdHlsZXMuY2hlY2tib3gsICdkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlcicpfT5cclxuICAgICAgPFN3aXRjaFxyXG4gICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnJvb3R9XHJcbiAgICAgICAgY2xhc3Nlcz17e1xyXG4gICAgICAgICAgcm9vdDogc3R5bGVzLnJvb3QsXHJcbiAgICAgICAgICBzd2l0Y2hCYXNlOiBzdHlsZXMuc3dpdGNoQmFzZSxcclxuICAgICAgICAgIHRodW1iOiBzdHlsZXMudGh1bWIsXHJcbiAgICAgICAgICB0cmFjazogc3R5bGVzLnRyYWNrLFxyXG4gICAgICAgICAgY2hlY2tlZDogc3R5bGVzLmNoZWNrZWQsXHJcbiAgICAgICAgfX1cclxuICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XHJcbiAgICAgICAgY2hlY2tlZD17Y2hlY2tlZH1cclxuICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2V9XHJcbiAgICAgIC8+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJoZWFkZXJcIjogXCJIZWFkZXJfaGVhZGVyX19Pa29ETFwiLFxuXHRcImJhY2tkcm9wXCI6IFwiSGVhZGVyX2JhY2tkcm9wX18zMFp3QlwiLFxuXHRcIm1lbnVCdXR0b25cIjogXCJIZWFkZXJfbWVudUJ1dHRvbl9fMVMxNVJcIixcblx0XCJzZWFyY2hcIjogXCJIZWFkZXJfc2VhcmNoX18yb3kzM1wiLFxuXHRcImlucHV0XCI6IFwiSGVhZGVyX2lucHV0X19MQXc1VlwiLFxuXHRcIm5vc2Nyb2xsXCI6IFwiSGVhZGVyX25vc2Nyb2xsX18yZFFDMFwiXG59O1xuIiwiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGUsIHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgY2xzeCBmcm9tICdjbHN4JztcclxuaW1wb3J0IFByb2ZpbGVQb3B1cCBmcm9tICcuLi9Qcm9maWxlUG9wdXAnO1xyXG5pbXBvcnQgU2VhcmNoUG9wdXAgZnJvbSAnLi4vU2VhcmNoUG9wdXAnO1xyXG5pbXBvcnQgQmFja2Ryb3AgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQmFja2Ryb3AnO1xyXG5cclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0hlYWRlci5tb2R1bGUuc2Nzcyc7XHJcbmltcG9ydCB7QXZhaWxhYmxlRm9yV29ya30gZnJvbSAnLi4vQXZhaWxhYmxlRm9yV29yayc7XHJcbmltcG9ydCB7QnV0dG9ufSBmcm9tICcuLi9CdXR0b24nO1xyXG5pbXBvcnQge3VzZVJvdXRlcn0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQge1VzZXJBcGl9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9hcGkvVXNlckFwaVwiO1xyXG5pbXBvcnQge3VzZVNlbGVjdG9yfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHtzZWxlY3RVc2VyU3RhdGV9IGZyb20gXCIuLi8uLi9yZWR1eC91c2VyL3VzZXIuc2VsZWN0b3JcIjtcclxuaW1wb3J0IHtBdXRoRGlhbG9nfSBmcm9tIFwiLi4vQXV0aERpYWxvZ1wiO1xyXG5pbXBvcnQge3VzZUFsbE1RfSBmcm9tIFwiLi4vLi4vdXRpbHMvdXNlQWxsTVFcIjtcclxuaW1wb3J0IE1vYmlsZVByb2ZpbGVQb3B1cCBmcm9tIFwiLi4vTW9iaWxlUHJvZmlsZVBvcHVwXCI7XHJcbmltcG9ydCBBdmF0YXIgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0F2YXRhclwiO1xyXG5pbXBvcnQge05vdGlmaWNhdGlvbkRyb3Bkb3dufSBmcm9tIFwiLi4vTm90aWZpY2F0aW9uRHJvcGRvd25cIjtcclxuXHJcbnR5cGUgUHJvcHMgPSB7XHJcbiAgICBvbkNsaWNrSGFtYnVyZ2VyOiAoKSA9PiB2b2lkXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBIZWFkZXIgPSAoeyBvbkNsaWNrSGFtYnVyZ2VyIH0gOiBQcm9wcykgPT4ge1xyXG4gICAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IHVzZXIgPSB1c2VTZWxlY3RvcihzZWxlY3RVc2VyU3RhdGUpO1xyXG4gICAgY29uc3QgbXEgPSB1c2VBbGxNUSgpXHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG5cclxuICAgIGNvbnN0IFtjaGVja2VkLCBzZXRDaGVja2VkXSA9IHVzZVN0YXRlKHVzZXI/LmRhdGE/LnJlYWR5X2Zvcl93b3JrIHx8IGZhbHNlKTtcclxuICAgIGNvbnN0IFtpc1NlYXJjaCwgc2V0SXNTZWFyY2hdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW2lzTW9iaWxlUG9wdXAsIHNldElzTW9iaWxlUG9wdXBdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuXHJcbiAgICBjb25zdCBbaXNWaXNpYmxlLCBzZXRJc1Zpc2libGVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICAgIGNvbnN0IFtzZWFyY2hJbnB1dCwgc2V0U2VhcmNoSW5wdXRdID0gdXNlU3RhdGU8c3RyaW5nPignJyk7XHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlzU2VhcmNoIHx8IGlzTW9iaWxlUG9wdXAgPyBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoc3R5bGVzLm5vc2Nyb2xsKSA6IGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZShzdHlsZXMubm9zY3JvbGwpO1xyXG4gICAgfSwgW2lzU2VhcmNoLCBpc01vYmlsZVBvcHVwXSk7XHJcblxyXG4gICAgY29uc3Qgb25DaGFuZ2VDaGVja2JveCA9IChldmVudDogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcclxuICAgICAgICBoYW5kbGVDaGFuZ2VDaGVja2JveChldmVudC50YXJnZXQuY2hlY2tlZClcclxuICAgIH07XHJcblxyXG4gICAgY29uc3Qgb25PcGVuU2VhcmNoID0gKCkgPT4ge1xyXG4gICAgICAgIHNldElzU2VhcmNoKHRydWUpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBvbkNsb3NlU2VhcmNoID0gKCkgPT4ge1xyXG4gICAgICAgIHNldFNlYXJjaElucHV0KCcnKTtcclxuICAgICAgICBzZXRJc1NlYXJjaChmYWxzZSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZUNoZWNrYm94ID0gKGZsYWc6IGJvb2xlYW4pID0+IHtcclxuICAgICAgICBzZXRDaGVja2VkKGZsYWcpO1xyXG4gICAgICAgIHNldElzTG9hZGluZyh0cnVlKVxyXG4gICAgICAgIFVzZXJBcGlcclxuICAgICAgICAgICAgLnVwZGF0ZVByb2ZpbGUoe3JlYWR5X2Zvcl93b3JrOiBmbGFnID8gdHJ1ZSA6IGZhbHNlfSwgdXNlci5kYXRhPy5pZClcclxuICAgICAgICAgICAgLnRoZW4oKHIpID0+IHtcclxuICAgICAgICAgICAgICAgIHNldENoZWNrZWQoZmxhZyk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgICAgICAgICAgT2JqZWN0LnZhbHVlcyhlcnI/LnJlc3BvbnNlPy5kYXRhPy5lcnJvcnMpLmZvckVhY2goZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQoZSlcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICBzZXRDaGVja2VkKGZhbHNlKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmZpbmFsbHkoKCkgPT4gc2V0SXNMb2FkaW5nKGZhbHNlKSlcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoYW5kbGVDbGljayA9ICgpID0+IHtcclxuICAgICAgICBpZiAoIXVzZXI/LmRhdGE/LmlkKSB7XHJcbiAgICAgICAgICAgIHNldElzVmlzaWJsZSh0cnVlKTtcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByb3V0ZXIucHVzaCgnL3dyaXRlJylcclxuICAgIH1cclxuXHJcbiAgICBpZiAoaXNTZWFyY2gpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8aGVhZGVyIGNsYXNzTmFtZT17Y2xzeChzdHlsZXMuaGVhZGVyLCAnZC1mbGV4Jyl9PlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj17Jy8nfT5cclxuICAgICAgICAgICAgICAgICAgICA8YT48aW1nIGNsYXNzTmFtZT17c3R5bGVzLmxvZ299IHNyYz1cIi9sb2dvLnN2Z1wiIGFsdD1cIkxvZ29cIi8+PC9hPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Nsc3goc3R5bGVzLnNlYXJjaCwgJ2QtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIgdzEwMCcpfT5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cIm1yLTE1XCIgc3JjPVwiL3NlYXJjaC5zdmdcIiBhbHQ9XCLQn9C+0LjRgdC6XCIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5pbnB1dH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLQn9C+0LjRgdC6XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3NlYXJjaElucHV0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFNlYXJjaElucHV0KGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICA+PC9pbnB1dD5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIG9uQ2xpY2s9e29uQ2xvc2VTZWFyY2h9IGNsYXNzTmFtZT1cIm1sLWF1dG8gY3Vyc29yLXBvaW50ZXJcIiBzcmM9XCIvY2xvc2Uuc3ZnXCIgYWx0PVwi0JfQsNC60YDRi9GC0YxcIi8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxCYWNrZHJvcCBjbGFzc2VzPXt7cm9vdDogc3R5bGVzLmJhY2tkcm9wfX0gb3Blbj17aXNTZWFyY2h9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxTZWFyY2hQb3B1cCBoYW5kbGVDbGljaz17b25DbG9zZVNlYXJjaH0gaXNTZWFyY2g9e2lzU2VhcmNofSBzZWFyY2hJbnB1dD17c2VhcmNoSW5wdXR9Lz5cclxuICAgICAgICAgICAgICAgIDwvQmFja2Ryb3A+XHJcbiAgICAgICAgICAgIDwvaGVhZGVyPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGlzTW9iaWxlUG9wdXApIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8aGVhZGVyIGNsYXNzTmFtZT17Y2xzeChzdHlsZXMuaGVhZGVyLCAnZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuJyl9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPXtzdHlsZXMubWVudUJ1dHRvbn0gb25DbGljaz17b25DbGlja0hhbWJ1cmdlcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgdmlld0JveD1cIjAgMCAyNiAxMVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMSAxSDE2LjVNMSAxMEgyNC41XCIgc3Ryb2tlV2lkdGg9XCIyXCIgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17Jy8nfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGE+PGltZyBjbGFzc05hbWU9e3N0eWxlcy5sb2dvfSBzcmM9XCIvbG9nby5zdmdcIiBhbHQ9XCJMb2dvXCIvPjwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJtbC0xMCBjdXJzb3ItcG9pbnRlclwiIHNyYz1cIi9zZWFyY2guc3ZnXCIgYWx0PVwi0J/QvtC40YHQulwiIG9uQ2xpY2s9e29uT3BlblNlYXJjaH0vPlxyXG4gICAgICAgICAgICAgICAgICAgIHsvKjxpbWcgY2xhc3NOYW1lPVwibWwtMTAgY3Vyc29yLXBvaW50ZXJcIiBzcmM9XCIvbm90aWZpY2F0aW9ucy5zdmdcIiBhbHQ9XCLQo9Cy0LXQtNC+0LzQu9C10L3QuNGPXCIvPiovfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J21sLTEwJ30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxBdmF0YXIgYWx0PXt1c2VyPy5kYXRhPy5uYW1lfSBzcmM9e3VzZXI/LmRhdGE/LmF2YXRhcn0gb25DbGljaz17KCkgPT4gc2V0SXNNb2JpbGVQb3B1cChmYWxzZSl9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJhY2tkcm9wIGNsYXNzZXM9e3tyb290OiBzdHlsZXMuYmFja2Ryb3B9fSBvcGVuPXtpc01vYmlsZVBvcHVwfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE1vYmlsZVByb2ZpbGVQb3B1cCBjaGVja2VkPXtjaGVja2VkfSBvbkNoYW5nZT17b25DaGFuZ2VDaGVja2JveH0gc2V0Q2hlY2tlZD17aGFuZGxlQ2hhbmdlQ2hlY2tib3h9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNMb2FkaW5nPXtpc0xvYWRpbmd9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9CYWNrZHJvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPC9oZWFkZXI+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBpZiAobXEuaXNYUykge1xyXG4gICAgICAgIHJldHVybiAoIDxoZWFkZXIgY2xhc3NOYW1lPXtjbHN4KHN0eWxlcy5oZWFkZXIsICdkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW4nKX0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiB3MTAwXCI+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9e3N0eWxlcy5tZW51QnV0dG9ufSBvbkNsaWNrPXtvbkNsaWNrSGFtYnVyZ2VyfT5cclxuICAgICAgICAgICAgICAgICAgICA8c3ZnIHZpZXdCb3g9XCIwIDAgMjYgMTFcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMSAxSDE2LjVNMSAxMEgyNC41XCIgc3Ryb2tlV2lkdGg9XCIyXCIgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9eycvJ30+XHJcbiAgICAgICAgICAgICAgICAgICAgPGE+PGltZyBjbGFzc05hbWU9e3N0eWxlcy5sb2dvfSBzcmM9XCIvbG9nby5zdmdcIiBhbHQ9XCJMb2dvXCIvPjwvYT5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwibWwtMTAgY3Vyc29yLXBvaW50ZXJcIiBzcmM9XCIvc2VhcmNoLnN2Z1wiIGFsdD1cItCf0L7QuNGB0LpcIiBvbkNsaWNrPXtvbk9wZW5TZWFyY2h9Lz5cclxuICAgICAgICAgICAgICAgICAgICA8Tm90aWZpY2F0aW9uRHJvcGRvd24gLz5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPFByb2ZpbGVQb3B1cCBvbkNsaWNrPXsoKSA9PiAhdXNlcj8uZGF0YT8uaWQgPyBzZXRJc1Zpc2libGUodHJ1ZSkgOiBzZXRJc01vYmlsZVBvcHVwKHRydWUpfSB1c2VyPXt1c2VyPy5kYXRhfS8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8QXV0aERpYWxvZyBzaXplPXsnbGcnfSAgb25DbG9zZT17KCkgPT4geyBzZXRJc1Zpc2libGUoZmFsc2UpIH19IG9wZW49e2lzVmlzaWJsZX0gLz5cclxuICAgICAgICA8L2hlYWRlcj4pXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8aGVhZGVyIGNsYXNzTmFtZT17Y2xzeChzdHlsZXMuaGVhZGVyLCAnZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuJyl9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9eycvJ30+XHJcbiAgICAgICAgICAgICAgICAgICAgPGE+PGltZyBjbGFzc05hbWU9e3N0eWxlcy5sb2dvfSBzcmM9XCIvbG9nby5zdmdcIiBhbHQ9XCJMb2dvXCIvPjwvYT5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvc3BlY2lhbGlzdHNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIG1sLTQ1XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwibXItMTBcIiBzcmM9XCIvdXNlcnMuc3ZnXCIgYWx0PVwi0KHQv9C10YbQuNCw0LvQuNGB0YLRi1wiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAg0KHQv9C10YbQuNCw0LvQuNGB0YLRi1xyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgPEF2YWlsYWJsZUZvcldvcmsgY2hlY2tlZD17Y2hlY2tlZH0gb25DaGFuZ2U9e29uQ2hhbmdlQ2hlY2tib3h9IHNldENoZWNrZWQ9e2hhbmRsZUNoYW5nZUNoZWNrYm94fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNMb2FkaW5nPXtpc0xvYWRpbmd9Lz5cclxuICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwibWwtNDUgY3Vyc29yLXBvaW50ZXJcIiBzcmM9XCIvc2VhcmNoLnN2Z1wiIGFsdD1cItCf0L7QuNGB0LpcIiBvbkNsaWNrPXtvbk9wZW5TZWFyY2h9Lz5cclxuICAgICAgICAgICAgICAgIDxOb3RpZmljYXRpb25Ecm9wZG93biAvPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtbC0zNVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHt1c2VyLmRhdGEgJiYgPFByb2ZpbGVQb3B1cCB1c2VyPXt1c2VyLmRhdGF9Lz59XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17aGFuZGxlQ2xpY2t9IHZhcmlhbnQ9XCJjb250YWluZWRcIiBjb2xvcj1cInNlY29uZGFyeVwiIGNsYXNzTmFtZT1cIm1sLTMwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAg0J3QsNC/0LjRgdCw0YLRjFxyXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuXHJcbiAgICAgICAgICAgIDxBdXRoRGlhbG9nICBzaXplPXsneHMnfSBvbkNsb3NlPXsoKSA9PiB7IHNldElzVmlzaWJsZShmYWxzZSkgfX0gb3Blbj17aXNWaXNpYmxlfSAvPlxyXG4gICAgICAgIDwvaGVhZGVyPlxyXG4gICAgKTtcclxufTtcclxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwibGlrZUJsb2NrXCI6IFwiTGlrZUJsb2NrX2xpa2VCbG9ja19fWDgtTnhcIixcblx0XCJ1cEJsb2NrXCI6IFwiTGlrZUJsb2NrX3VwQmxvY2tfXzFoS1o1XCIsXG5cdFwiZG93bkJsb2NrXCI6IFwiTGlrZUJsb2NrX2Rvd25CbG9ja19fMXZHR2lcIixcblx0XCJsaWtlQmxvY2tGdWxsXCI6IFwiTGlrZUJsb2NrX2xpa2VCbG9ja0Z1bGxfXzF3ak5NXCIsXG5cdFwibGlrZUJsb2NrTWluaVwiOiBcIkxpa2VCbG9ja19saWtlQmxvY2tNaW5pX18ySFJ6S1wiLFxuXHRcInJvdGF0ZVwiOiBcIkxpa2VCbG9ja19yb3RhdGVfXzE5TjFaXCIsXG5cdFwibGlrZVZvdGVkXCI6IFwiTGlrZUJsb2NrX2xpa2VWb3RlZF9fMnhpYUpcIixcblx0XCJkaXNsaWtlVm90ZWRcIjogXCJMaWtlQmxvY2tfZGlzbGlrZVZvdGVkX18yU2lNY1wiLFxuXHRcIm5vVm90ZXNcIjogXCJMaWtlQmxvY2tfbm9Wb3Rlc19fcmNkUkpcIlxufTtcbiIsImltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vTGlrZUJsb2NrLm1vZHVsZS5zY3NzJztcclxuaW1wb3J0IHsgVGh1bWJVcEljb24gfSBmcm9tICcuLi9pY29ucy9UaHVtYlVwSWNvbic7XHJcblxyXG5leHBvcnQgdHlwZSBMaWtlQmxvY2tWb3RlID0gJ2xpa2UnIHwgJ2Rpc2xpa2UnIHwgdW5kZWZpbmVkO1xyXG5cclxuaW50ZXJmYWNlIExpa2VCbG9ja1Byb3BzIHtcclxuICBtb2RlOiAnbWluaScgfCAnZnVsbCc7XHJcbiAgbGlrZXM6IG51bWJlcjtcclxuICBkaXNsaWtlczogbnVtYmVyO1xyXG4gIHZvdGU/OiBMaWtlQmxvY2tWb3RlO1xyXG4gIG9uQ2hhbmdlOiAocmVzdWx0OiBMaWtlQmxvY2tSZXN1bHQpID0+IHZvaWQ7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTGlrZUJsb2NrUmVzdWx0IHtcclxuICBsaWtlczogbnVtYmVyO1xyXG4gIGRpc2xpa2VzOiBudW1iZXI7XHJcbiAgdm90ZTogTGlrZUJsb2NrVm90ZTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IExpa2VCbG9jazogUmVhY3QuRkM8TGlrZUJsb2NrUHJvcHM+ID0gKHsgbW9kZSwgbGlrZXMsIGRpc2xpa2VzLCB2b3RlLCBvbkNoYW5nZSB9KSA9PiB7XHJcbiAgY29uc3Qgb25UaHVtYlVwQ2xpY2sgPSAoKSA9PiB7XHJcbiAgICBpZiAodm90ZSA9PT0gJ2xpa2UnKSB7XHJcbiAgICAgIG9uQ2hhbmdlKHsgbGlrZXM6IGxpa2VzIC0gMSwgZGlzbGlrZXMsIHZvdGU6IHVuZGVmaW5lZCB9KTtcclxuICAgIH0gZWxzZSBpZiAodm90ZSA9PT0gJ2Rpc2xpa2UnKSB7XHJcbiAgICAgIG9uQ2hhbmdlKHsgbGlrZXM6IGxpa2VzICsgMSwgZGlzbGlrZXM6IGRpc2xpa2VzIC0gMSwgdm90ZTogJ2xpa2UnIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgb25DaGFuZ2UoeyBsaWtlczogbGlrZXMgKyAxLCBkaXNsaWtlcywgdm90ZTogJ2xpa2UnIH0pO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgY29uc3Qgb25UaHVtYkRvd25DbGljayA9ICgpID0+IHtcclxuICAgIGlmICh2b3RlID09PSAnbGlrZScpIHtcclxuICAgICAgb25DaGFuZ2UoeyBsaWtlczogbGlrZXMgLSAxLCBkaXNsaWtlczogZGlzbGlrZXMgKyAxLCB2b3RlOiAnZGlzbGlrZScgfSk7XHJcbiAgICB9IGVsc2UgaWYgKHZvdGUgPT09ICdkaXNsaWtlJykge1xyXG4gICAgICBvbkNoYW5nZSh7IGxpa2VzLCBkaXNsaWtlczogZGlzbGlrZXMgLSAxLCB2b3RlOiB1bmRlZmluZWQgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBvbkNoYW5nZSh7IGxpa2VzLCBkaXNsaWtlczogZGlzbGlrZXMgKyAxLCB2b3RlOiAnZGlzbGlrZScgfSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qge1xyXG4gICAgbGlrZVZvdGVkLFxyXG4gICAgZGlzbGlrZVZvdGVkLFxyXG4gICAgbm9Wb3RlcyxcclxuICAgIGxpa2VCbG9jayxcclxuICAgIGxpa2VCbG9ja0Z1bGwsXHJcbiAgICBsaWtlQmxvY2tNaW5pLFxyXG4gICAgdXBCbG9jayxcclxuICAgIGRvd25CbG9jayxcclxuICAgIHJvdGF0ZSxcclxuICB9ID0gc3R5bGVzO1xyXG4gIGNvbnN0IHRodW1iVXBDbGFzc05hbWUgPSB2b3RlID09PSAnbGlrZScgPyBsaWtlVm90ZWQgOiBub1ZvdGVzO1xyXG4gIGNvbnN0IHRodW1iRG93bkNsYXNzTmFtZSA9IHZvdGUgPT09ICdkaXNsaWtlJyA/IGRpc2xpa2VWb3RlZCA6IG5vVm90ZXM7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17bGlrZUJsb2NrfT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e21vZGUgPT09ICdmdWxsJyA/IGxpa2VCbG9ja0Z1bGwgOiBsaWtlQmxvY2tNaW5pfT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xzeCh1cEJsb2NrLCB0aHVtYlVwQ2xhc3NOYW1lKX0gb25DbGljaz17b25UaHVtYlVwQ2xpY2t9PlxyXG4gICAgICAgICAgPFRodW1iVXBJY29uIGNsYXNzTmFtZT17dGh1bWJVcENsYXNzTmFtZX0gLz5cclxuICAgICAgICAgIDxzcGFuPntsaWtlc308L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Nsc3goZG93bkJsb2NrLCB0aHVtYkRvd25DbGFzc05hbWUpfSBvbkNsaWNrPXtvblRodW1iRG93bkNsaWNrfT5cclxuICAgICAgICAgIDxUaHVtYlVwSWNvbiBjbGFzc05hbWU9e2Nsc3godGh1bWJEb3duQ2xhc3NOYW1lLCByb3RhdGUpfSAvPlxyXG4gICAgICAgICAgPHNwYW4+e2Rpc2xpa2VzfTwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJsb2FkTW9yZVwiOiBcIkxvYWRNb3JlX2xvYWRNb3JlX18zQkx0alwiLFxuXHRcImJ1dHRvblwiOiBcIkxvYWRNb3JlX2J1dHRvbl9fcklnVzVcIlxufTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJy4uL0J1dHRvbic7XHJcblxyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vTG9hZE1vcmUubW9kdWxlLnNjc3MnO1xyXG5cclxudHlwZSBMb2FkTW9yZVByb3BzID0ge1xyXG4gICAgb25DbGljaz86ICgpID0+IHZvaWRcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IExvYWRNb3JlOiBSZWFjdC5GQzxMb2FkTW9yZVByb3BzPiA9ICh7IG9uQ2xpY2sgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxvYWRNb3JlfT5cclxuICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtvbkNsaWNrfSBjbGFzc05hbWU9e3N0eWxlcy5idXR0b259IHZhcmlhbnQ9XCJ0ZXh0XCI+XHJcbiAgICAgICAg0J/QvtC60LDQt9Cw0YLRjCDQtdGJ0LVcclxuICAgICAgPC9CdXR0b24+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJidXR0b25cIjogXCJNZW51TGlzdF9idXR0b25fX1FYVEl0XCIsXG5cdFwiaXRlbVwiOiBcIk1lbnVMaXN0X2l0ZW1fXzFibmR0XCIsXG5cdFwibmV3Q291bnRcIjogXCJNZW51TGlzdF9uZXdDb3VudF9fMnlQbWVcIixcblx0XCJpY29uXCI6IFwiTWVudUxpc3RfaWNvbl9fMmROSElcIlxufTtcbiIsImltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQge0J1dHRvbn0gZnJvbSAnLi4vQnV0dG9uJztcclxuXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9NZW51TGlzdC5tb2R1bGUuc2Nzcyc7XHJcblxyXG50eXBlIE1lbnVJdGVtID0geyBuYW1lOiBzdHJpbmc7IHVybDogc3RyaW5nOyBpY29uOiBzdHJpbmc7IG5ld0NvdW50PzogbnVtYmVyOyBoYXNNb3JlPzogYm9vbGVhbjsgaXNBY3RpdmU/OiBib29sZWFuLCBvbkNsaWNrPzogKCkgPT4gdm9pZCB9O1xyXG5cclxudHlwZSBNZW51TGlzdFByb3BzID0ge1xyXG4gICAgaXRlbXM6IE1lbnVJdGVtW107XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgTWVudUxpc3Q6IFJlYWN0LkZDPE1lbnVMaXN0UHJvcHM+ID0gKHtpdGVtc30pID0+IHtcclxuICAgIGNvbnN0IGhhbmRsZUNsaWNrID0gKGl0ZW06IE1lbnVJdGVtKSA9PiB7XHJcbiAgICAgICAgaWYgKGl0ZW0ub25DbGljaykge1xyXG4gICAgICAgICAgICBpdGVtLm9uQ2xpY2soKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDx1bCBjbGFzc05hbWU9XCJtYi00MFwiPlxyXG4gICAgICAgICAgICB7aXRlbXMubWFwKChpdGVtKSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8bGkga2V5PXtpdGVtLnVybCArIGl0ZW0ubmFtZX0gY2xhc3NOYW1lPXtzdHlsZXMuaXRlbX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17aXRlbS5vbkNsaWNrID8gJyMnIDogaXRlbS51cmx9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Nsc3goJ3cxMDAganVzdGlmeS1jb250ZW50LWJldHdlZW4nLCBzdHlsZXMuYnV0dG9uKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PXtpdGVtLmlzQWN0aXZlID8gJ2NvbnRhaW5lZCcgOiAndGV4dCd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGFydEljb249e2l0ZW0uaWNvbiAmJiA8aW1nIGNsYXNzTmFtZT17c3R5bGVzLmljb259IHNyYz17aXRlbS5pY29ufS8+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuZEljb249e2l0ZW0uaGFzTW9yZSAmJiA8aW1nIHNyYz1cIi9kb3RzLnN2Z1wiLz59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlQ2xpY2soaXRlbSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtci1hdXRvXCI+XHJcbiAgICAgICAgICAgICAgICAgIHtpdGVtLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAge2l0ZW0ubmV3Q291bnQgPyA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5uZXdDb3VudH0+K3tpdGVtLm5ld0NvdW50fTwvc3Bhbj4gOiAnJ31cclxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgPC91bD5cclxuICAgICk7XHJcbn07XHJcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcInBvc3RcIjogXCJNaW5pUG9zdF9wb3N0X18xRkxBb1wiLFxuXHRcImluZm9cIjogXCJNaW5pUG9zdF9pbmZvX18xUDRTVVwiLFxuXHRcInVzZXJcIjogXCJNaW5pUG9zdF91c2VyX18xZ002OFwiLFxuXHRcInVzZXJfYXZhdGFyXCI6IFwiTWluaVBvc3RfdXNlcl9hdmF0YXJfXzIyX2VSXCIsXG5cdFwidXNlcl9uYW1lXCI6IFwiTWluaVBvc3RfdXNlcl9uYW1lX19QdDlPYlwiLFxuXHRcInRpbWVcIjogXCJNaW5pUG9zdF90aW1lX18yNWw2dlwiLFxuXHRcInRhZ3NcIjogXCJNaW5pUG9zdF90YWdzX18xbHhpYVwiLFxuXHRcInRhZ1wiOiBcIk1pbmlQb3N0X3RhZ19fMnNZbmNcIixcblx0XCJpbWFnZVwiOiBcIk1pbmlQb3N0X2ltYWdlX18xSmpLUlwiLFxuXHRcInRpdGxlXCI6IFwiTWluaVBvc3RfdGl0bGVfXzJtUWllXCIsXG5cdFwiZGVzY3JpcHRpb25cIjogXCJNaW5pUG9zdF9kZXNjcmlwdGlvbl9fMTZDZV9cIixcblx0XCJwb3B1bGFyaXR5XCI6IFwiTWluaVBvc3RfcG9wdWxhcml0eV9fMWxoZFdcIixcblx0XCJwb3B1bGFyaXR5X2xlZnRcIjogXCJNaW5pUG9zdF9wb3B1bGFyaXR5X2xlZnRfXzFxTmhsXCIsXG5cdFwiY29tbWVudHNcIjogXCJNaW5pUG9zdF9jb21tZW50c19fM3FsUkVcIixcblx0XCJ2aWV3c1wiOiBcIk1pbmlQb3N0X3ZpZXdzX18yZll4TlwiLFxuXHRcImNvbW1lbnRzX2NvdW50XCI6IFwiTWluaVBvc3RfY29tbWVudHNfY291bnRfXzE3a0lMXCIsXG5cdFwidmlld3NfY291bnRcIjogXCJNaW5pUG9zdF92aWV3c19jb3VudF9fMTEwM05cIlxufTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCB7IGZvcm1hdERpc3RhbmNlVG9Ob3cgfSBmcm9tICdkYXRlLWZucyc7XHJcbmltcG9ydCB7IHJ1IH0gZnJvbSAnZGF0ZS1mbnMvbG9jYWxlJztcclxuaW1wb3J0IHsgQ29tbWVudEljb24gfSBmcm9tICcuLi9pY29ucy9Db21tZW50SWNvbic7XHJcbmltcG9ydCB7IEV5ZUljb24gfSBmcm9tICcuLi9pY29ucy9FeWVJY29uJztcclxuaW1wb3J0IHsgTGlrZUJsb2NrUmVzdWx0LCBMaWtlQmxvY2sgfSBmcm9tICcuLi9MaWtlQmxvY2snO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vTWluaVBvc3QubW9kdWxlLnNjc3MnO1xyXG5pbXBvcnQgeyBQYXN0VGltZUxhYmVsIH0gZnJvbSAnLi4vUGFzdFRpbWVMYWJlbCc7XHJcbmltcG9ydCB7IFVzZXJWaWV3T25Db250ZW50IH0gZnJvbSAnLi4vVXNlclZpZXdPbkNvbnRlbnQnO1xyXG5pbXBvcnQgeyBWaWV3c0FuZENvbW1lbnRzIH0gZnJvbSAnLi4vVmlld3NBbmRDb21tZW50cyc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIE1pbmlQb3N0RGF0YSB7XHJcbiAgaWQ6IG51bWJlcjtcclxuICB0aXRsZTogc3RyaW5nO1xyXG4gIHVzZXI6IHtcclxuICAgIGlkOiBudW1iZXI7XHJcbiAgICBuYW1lOiBzdHJpbmc7XHJcbiAgICBhdmF0YXJVcmw6IHN0cmluZztcclxuICB9O1xyXG4gIHNsdWc6IHN0cmluZztcclxuICB0YWdzOiBzdHJpbmdbXTtcclxuICB0aW1lOiBEYXRlO1xyXG4gIGRlc2NyaXB0aW9uOiBzdHJpbmc7XHJcbiAgaW1hZ2VVcmw6IHN0cmluZztcclxuICBjb21tZW50c0NvdW50OiBudW1iZXI7XHJcbiAgdmlld3NDb3VudDogbnVtYmVyO1xyXG4gIGxpa2VzQ291bnQ6IG51bWJlcjtcclxuICBkaXNsaWtlc0NvdW50OiBudW1iZXI7XHJcbiAgdm90ZT86ICdsaWtlJyB8ICdkaXNsaWtlJyB8IG51bGw7XHJcbn1cclxuXHJcbmludGVyZmFjZSBNaW5pUG9zdFByb3BzIHtcclxuICBwb3N0RGF0YTogTWluaVBvc3REYXRhO1xyXG4gIG9uU2V0TGlrZTogKHBvc3RJZDogbnVtYmVyLCBsaWtlOiB1bmtub3duKSA9PiB2b2lkXHJcblxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgTWluaVBvc3Q6IFJlYWN0LkZDPE1pbmlQb3N0UHJvcHM+ID0gKHsgcG9zdERhdGEsIG9uU2V0TGlrZSB9KSA9PiB7XHJcbiAgY29uc3Qge1xyXG4gICAgdXNlcixcclxuICAgIHRpdGxlLFxyXG4gICAgdGltZSxcclxuICAgIHRhZ3MsXHJcbiAgICBpbWFnZVVybCxcclxuICAgIGRlc2NyaXB0aW9uLFxyXG4gICAgY29tbWVudHNDb3VudCxcclxuICAgIHZpZXdzQ291bnQsXHJcbiAgICBsaWtlc0NvdW50LFxyXG4gICAgZGlzbGlrZXNDb3VudCxcclxuICAgIHNsdWcsXHJcbiAgICB2b3RlLFxyXG4gICAgaWRcclxuICB9ID0gcG9zdERhdGE7XHJcbiAgY29uc3QgW2xpa2VzQW5kRGlzbGlrZXMsIHNldExpa2VzQW5kRGlzbGlrZXNdID0gUmVhY3QudXNlU3RhdGU8TGlrZUJsb2NrUmVzdWx0Pih7XHJcbiAgICBsaWtlczogbGlrZXNDb3VudCxcclxuICAgIGRpc2xpa2VzOiBkaXNsaWtlc0NvdW50LFxyXG4gICAgdm90ZSxcclxuICB9KTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU2V0TGlrZSA9IChsaWtlOiBMaWtlQmxvY2tSZXN1bHQpID0+IHtcclxuICAgIHNldExpa2VzQW5kRGlzbGlrZXMobGlrZSlcclxuICAgIG9uU2V0TGlrZShpZCwgbGlrZS52b3RlKVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucG9zdH0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW5mb30+XHJcbiAgICAgICAgPFVzZXJWaWV3T25Db250ZW50IHVzZXI9e3VzZXJ9IC8+XHJcbiAgICAgICAgPFBhc3RUaW1lTGFiZWwgdGltZT17dGltZS5nZXRUaW1lKCl9IGxlZnRTaWRlUG9pbnQgLz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRhZ3N9PlxyXG4gICAgICAgICAge3RhZ3MubWFwKCh0YWcpID0+IChcclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMudGFnfT4je3RhZ308L3NwYW4+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIHtwb3N0RGF0YS5pbWFnZVVybCAmJiA8aW1nIGNsYXNzTmFtZT17c3R5bGVzLmltYWdlfSBzcmM9e2ltYWdlVXJsfSBhbHQ9XCLQl9C00LXRgdGMINC00L7Qu9C20L3QsCDQsdGL0LvQsCDQsdGL0YLRjCDQutCw0YDRgtC40L3QutCwLCDQvdC+INC10ZEg0L3QtdGCLi4uXCIgLz59XHJcbiAgICAgIDxoMiBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0+XHJcbiAgICAgICAgPExpbmsgaHJlZj17YC9wb3N0LyR7c2x1Z31gfT57dGl0bGV9PC9MaW5rPlxyXG4gICAgICA8L2gyPlxyXG4gICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5kZXNjcmlwdGlvbn0+e2Rlc2NyaXB0aW9ufTwvcD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wb3B1bGFyaXR5fT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnBvcHVsYXJpdHlfbGVmdH0+XHJcbiAgICAgICAgICA8Vmlld3NBbmRDb21tZW50cyBjb21tZW50cz17Y29tbWVudHNDb3VudH0gdmlld3M9e3ZpZXdzQ291bnR9IG1vZGU9XCJtaW5pXCIgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnBvcHVsYXJpdHlfcmlnaHR9PlxyXG4gICAgICAgICAgPExpa2VCbG9ja1xyXG4gICAgICAgICAgICB2b3RlPXtsaWtlc0FuZERpc2xpa2VzLnZvdGV9XHJcbiAgICAgICAgICAgIGxpa2VzPXtsaWtlc0FuZERpc2xpa2VzLmxpa2VzfVxyXG4gICAgICAgICAgICBkaXNsaWtlcz17bGlrZXNBbmREaXNsaWtlcy5kaXNsaWtlc31cclxuICAgICAgICAgICAgbW9kZT1cImZ1bGxcIlxyXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlU2V0TGlrZX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY29udGFpbmVyXCI6IFwiTW9iaWxlUHJvZmlsZVBvcHVwX2NvbnRhaW5lcl9fMklIYnFcIixcblx0XCJoZWFkZXJcIjogXCJNb2JpbGVQcm9maWxlUG9wdXBfaGVhZGVyX18zSFlYVFwiLFxuXHRcImhlYWRlcl9wcm9maWxlXCI6IFwiTW9iaWxlUHJvZmlsZVBvcHVwX2hlYWRlcl9wcm9maWxlX18yamt5QlwiLFxuXHRcIm5hbWVcIjogXCJNb2JpbGVQcm9maWxlUG9wdXBfbmFtZV9fOGdldVNcIixcblx0XCJhdmFpbGFibGVcIjogXCJNb2JpbGVQcm9maWxlUG9wdXBfYXZhaWxhYmxlX18zQ0JnVVwiLFxuXHRcInNlY3Rpb24yXCI6IFwiTW9iaWxlUHJvZmlsZVBvcHVwX3NlY3Rpb24yX181STUxNVwiLFxuXHRcImJvZHlcIjogXCJNb2JpbGVQcm9maWxlUG9wdXBfYm9keV9fMXRyYnhcIixcblx0XCJkaXZpZGVyXCI6IFwiTW9iaWxlUHJvZmlsZVBvcHVwX2RpdmlkZXJfXzNXZGQ5XCIsXG5cdFwic2VhcmNoVGl0bGVcIjogXCJNb2JpbGVQcm9maWxlUG9wdXBfc2VhcmNoVGl0bGVfX010b0dtXCIsXG5cdFwic2VhcmNoVGl0bGVJbm5lclwiOiBcIk1vYmlsZVByb2ZpbGVQb3B1cF9zZWFyY2hUaXRsZUlubmVyX18yYXJRTlwiLFxuXHRcInNlYXJjaEl0ZW1zXCI6IFwiTW9iaWxlUHJvZmlsZVBvcHVwX3NlYXJjaEl0ZW1zX18ySU5iN1wiLFxuXHRcInNlYXJjaEl0ZW1cIjogXCJNb2JpbGVQcm9maWxlUG9wdXBfc2VhcmNoSXRlbV9fMzQtaDRcIixcblx0XCJzaG93QWxsXCI6IFwiTW9iaWxlUHJvZmlsZVBvcHVwX3Nob3dBbGxfXzExdHR0XCIsXG5cdFwiZm9vdGVyXCI6IFwiTW9iaWxlUHJvZmlsZVBvcHVwX2Zvb3Rlcl9fbDJxUWhcIlxufTtcbiIsImltcG9ydCBSZWFjdCwge3VzZVN0YXRlfSBmcm9tICdyZWFjdCc7XHJcblxyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vTW9iaWxlUHJvZmlsZVBvcHVwLm1vZHVsZS5zY3NzJztcclxuaW1wb3J0IEl0ZW0gZnJvbSBcIi4uL1NlYXJjaFBvcHVwL0l0ZW1cIjtcclxuaW1wb3J0IGNsc3ggZnJvbSBcImNsc3hcIjtcclxuaW1wb3J0IHtBdmF0YXIsIERpdmlkZXIsIFR5cG9ncmFwaHl9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5pbXBvcnQge3VzZVNlbGVjdG9yfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHtzZWxlY3RVc2VyU3RhdGV9IGZyb20gXCIuLi8uLi9yZWR1eC91c2VyL3VzZXIuc2VsZWN0b3JcIjtcclxuaW1wb3J0IHtCdXR0b259IGZyb20gXCIuLi9CdXR0b25cIjtcclxuaW1wb3J0IHtBdmFpbGFibGVGb3JXb3JrfSBmcm9tIFwiLi4vQXZhaWxhYmxlRm9yV29ya1wiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB7dXNlUm91dGVyfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuXHJcbmludGVyZmFjZSBTZWFyY2hQb3B1cFByb3BzIHtcclxuICAgIGNoZWNrZWQ/OiBib29sZWFuO1xyXG4gICAgb25DaGFuZ2U6IChldmVudDogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHZvaWQ7XHJcbiAgICBzZXRDaGVja2VkOiAodmFsdWU6IGJvb2xlYW4pID0+IHZvaWQ7XHJcbiAgICBpc0xvYWRpbmc6IGJvb2xlYW47XHJcbn1cclxuXHJcbmNvbnN0IG1vY2t1cCA9IHtcclxuICAgIGF1dGhvcnM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlkOiAxLFxyXG4gICAgICAgICAgICBuYW1lOiAn0KXQsNGA0YbQsCDQm9C10LvQvtCy0LjRhycsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlkOiAyLFxyXG4gICAgICAgICAgICBuYW1lOiAn0J3QsNGF0LDQuyDQldGJ0LXRgtC+0YLQvtCy0LjRhycsXHJcbiAgICAgICAgfSxcclxuICAgIF0sXHJcbiAgICBhcnRpY2xlczogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWQ6IDMsXHJcbiAgICAgICAgICAgIG5hbWU6ICfQodC+0YXQsC3Qv9C+0LTQutCw0YHRgiDQvdCwIEluZ3Rlcm5ldCcsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlkOiA0LFxyXG4gICAgICAgICAgICBuYW1lOiAn0KXQsCDRhdCwINGF0LAsINCz0L7QstC+0YDRjiDRjyDQstGB0LXQvCwg0LrQvtC80YMg0L3QtSDRgdC80LXRiNC90L4hJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWQ6IDUsXHJcbiAgICAgICAgICAgIG5hbWU6ICfQryDRgdC40LbRgyDQvdCwINC60YPRhdC90LUsINGF0LDQstCw0Y4g0LHQvtGA0YnRjCcsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlkOiA2LFxyXG4gICAgICAgICAgICBuYW1lOiAn0K8g0YHQuNC20YMg0L3QsCDQutGD0YXQvdC1LCDRhdCw0LLQsNGOINCx0L7RgNGJ0YwnLFxyXG4gICAgICAgIH0sXHJcbiAgICBdLFxyXG4gICAgdGFnczogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWQ6IDcsXHJcbiAgICAgICAgICAgIG5hbWU6ICfQodC+0YXQsC3Qv9C+0LTQutCw0YHRgiDQvdCwIEluZ3Rlcm5ldCcsXHJcbiAgICAgICAgfSxcclxuICAgIF0sXHJcbiAgICBjb21tZW50czogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWQ6IDgsXHJcbiAgICAgICAgICAgIG5hbWU6ICfQodC+0YXQsC3Qv9C+0LTQutCw0YHRgiDQvdCwIEluZ3Rlcm5ldCcsXHJcbiAgICAgICAgfSxcclxuICAgIF0sXHJcbiAgICBwb2RjYXN0czogW10sXHJcbn07XHJcblxyXG5jb25zdCBNb2JpbGVQcm9maWxlUG9wdXA6IFJlYWN0LkZDPFNlYXJjaFBvcHVwUHJvcHM+ID0gKHsgY2hlY2tlZCwgc2V0Q2hlY2tlZCwgaXNMb2FkaW5nLCBvbkNoYW5nZSB9KSA9PiB7XHJcbiAgICBjb25zdCB1c2VyID0gdXNlU2VsZWN0b3Ioc2VsZWN0VXNlclN0YXRlKVsnZGF0YSddO1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG5cclxuICAgIGNvbnN0IGhhbmRsZUNsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgIHJvdXRlci5wdXNoKCcvd3JpdGUnKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBvbkxvZ291dCA9ICgpID0+IHtcclxuICAgICAgICBpZiAod2luZG93Py5jb25maXJtKCfQktGLINC00LXQudGB0YLQstC40YLQtdC70YzQvdC+INGF0L7RgtC40YLQtSDQv9C+0LrQuNC90YPRgtGMINGB0LDQudGCID8nKSkge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5jb29raWUgPSAnYXV0aF90b2tlbicgKyAnPTsgTWF4LUFnZT0wJztcclxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3Rva2VuJyk7XHJcbiAgICAgICAgICAgIGxvY2F0aW9uLmhyZWYgPSAnLyc7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJvZHl9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5oZWFkZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVyX3Byb2ZpbGV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QXZhdGFyIGNsYXNzTmFtZT17Y2xzeCgnY3Vyc29yLXBvaW50ZXInLCBzdHlsZXMucm9vdCl9IGFsdD17dXNlcj8ubmFtZX0gc3JjPXt1c2VyPy5hdmF0YXJ9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17c3R5bGVzLm5hbWV9Pnt1c2VyLm5hbWV9PC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfSB2YXJpYW50PVwiY29udGFpbmVkXCIgY29sb3I9XCJzZWNvbmRhcnlcIiBjbGFzc05hbWU9XCJtdC0xMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICDQndCw0L/QuNGB0LDRgtGMXHJcbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xzeCgnbXQtMTUnLCBzdHlsZXMuYXZhaWxhYmxlKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEF2YWlsYWJsZUZvcldvcmsgY2hlY2tlZD17Y2hlY2tlZH0gb25DaGFuZ2U9e29uQ2hhbmdlfSBzZXRDaGVja2VkPXtzZXRDaGVja2VkfSBpc0xvYWRpbmc9e2lzTG9hZGluZ30vPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Nsc3goc3R5bGVzLnNlY3Rpb24yLCAnZC1mbGV4IGZsZXgtY29sdW1uJyl9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvcHJvZmlsZS8ke3VzZXIuaWR9P3R5cGU9YXJ0aWNsZXNgfT48YSBjbGFzc05hbWU9XCJtYi0zXCI+0KHRgtCw0YLRjNC4PC9hPjwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgL3Byb2ZpbGUvJHt1c2VyLmlkfT90eXBlPWRyYWZ0c2B9PjxhIGNsYXNzTmFtZT1cIm1iLTNcIj7Qp9C10YDQvdC+0LLQuNC60Lg8L2E+PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9eycvcHJvZmlsZSd9PjxhIGNsYXNzTmFtZT1cIm1iLTNcIj7QndCw0YHRgtGA0L7QudC60Lg8L2E+PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPERpdmlkZXIgY2xhc3NOYW1lPXtzdHlsZXMuZGl2aWRlcn0gLz5cclxuXHJcbiAgICAgICAgICAgICAgICA8YSBvbkNsaWNrPXtvbkxvZ291dH0gY2xhc3NOYW1lPXtjbHN4KHN0eWxlcy5zZWN0aW9uMiwgJ2QtZmxleCBmbGV4LWNvbHVtbicpfT7QktGL0LnRgtC4PC9hPlxyXG5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTW9iaWxlUHJvZmlsZVBvcHVwO1xyXG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJwYXBlclwiOiBcIk5hdmlnYXRpb25fcGFwZXJfXzFhN0xiXCIsXG5cdFwicm9vdFwiOiBcIk5hdmlnYXRpb25fcm9vdF9fTTc0d3RcIixcblx0XCJtYWluTGlzdFwiOiBcIk5hdmlnYXRpb25fbWFpbkxpc3RfX1JpT1gzXCIsXG5cdFwiaXRlbVwiOiBcIk5hdmlnYXRpb25faXRlbV9fMjROOFFcIixcblx0XCJtYWluSXRlbUJvbGRUZXh0XCI6IFwiTmF2aWdhdGlvbl9tYWluSXRlbUJvbGRUZXh0X18ySWE0RlwiLFxuXHRcImNsb3NlQnV0dG9uXCI6IFwiTmF2aWdhdGlvbl9jbG9zZUJ1dHRvbl9fMlFuNE5cIixcblx0XCJjbG9zZUljb25cIjogXCJOYXZpZ2F0aW9uX2Nsb3NlSWNvbl9fMm80S2dcIixcblx0XCJsb2dvdXRcIjogXCJOYXZpZ2F0aW9uX2xvZ291dF9fMVlOU2ZcIlxufTtcbiIsImltcG9ydCB7IERpdmlkZXIsIERyYXdlciwgTWVudUl0ZW0gfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcblxyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vTmF2aWdhdGlvbi5tb2R1bGUuc2Nzcyc7XHJcbmltcG9ydCB7c2VsZWN0VXNlclN0YXRlfSBmcm9tIFwiLi4vLi4vcmVkdXgvdXNlci91c2VyLnNlbGVjdG9yXCI7XHJcbmltcG9ydCB7U2lkZUJsb2NrfSBmcm9tIFwiLi4vU2lkZUJsb2NrXCI7XHJcbmltcG9ydCB7TWVudUxpc3R9IGZyb20gXCIuLi9NZW51TGlzdFwiO1xyXG5pbXBvcnQge1RhZ3N9IGZyb20gXCIuLi9UYWdzXCI7XHJcbmltcG9ydCB7VGhlbWV9IGZyb20gXCIuLi8uLi9pbnRlcmZhY2VzXCI7XHJcbmltcG9ydCB7c2VsZWN0Q2F0ZWdvcmllc1N0YXRlLCBzZWxlY3RUaGVtZXNTdGF0ZX0gZnJvbSBcIi4uLy4uL3JlZHV4L2RpcmVjdG9yeS9kaXJlY3Rvcnkuc2VsZWN0b3JcIjtcclxuXHJcbmludGVyZmFjZSBOYXZpZ2F0aW9uUHJvcHMge1xyXG4gIG1lbnVPcGVuZWQ6IGJvb2xlYW47XHJcbiAgb25DbG9zZTogKCkgPT4gdm9pZDtcclxufVxyXG5cclxuY29uc3QgbWVlbHogPSBbXHJcbiAge1xyXG4gICAgdGl0bGU6ICdDaGVmcycsXHJcbiAgICBsaW5rOiAnL2NoZWZzJyxcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiAnRGVsaXZlcnkgTWVudScsXHJcbiAgICBsaW5rOiAnL21lbnUnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6ICdSZWNpcGUgQm94ZXMnLFxyXG4gICAgbGluazogJy9yZWNpcGVzJyxcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiAnQ2hlZnMgVGFibGUnLFxyXG4gICAgbGluazogJy9jaGVmcy10YWJsZScsXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogJ1N0b3JlJyxcclxuICAgIGxpbms6ICcvY2hlZnMtc3RvcmUnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6ICdNYXN0ZXJjbGFzc2VzJyxcclxuICAgIGxpbms6ICcvbWFzdGVyLWNsYXNzZXMnLFxyXG4gIH0sXHJcbl07XHJcblxyXG5jb25zdCBhYm91dCA9IFtcclxuICB7XHJcbiAgICB0aXRsZTogJ0Fib3V0IFVzJyxcclxuICAgIGxpbms6ICcvYWJvdXQnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6ICdDYXJlZXInLFxyXG4gICAgbGluazogJy9jYXJlZXInLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6ICdGQVFzJyxcclxuICAgIGxpbms6ICcvZmFxJyxcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiAnQ29udGFjdCB1cycsXHJcbiAgICBsaW5rOiAnL2NvbnRhY3RfdXMnLFxyXG4gIH0sXHJcbl07XHJcblxyXG5leHBvcnQgY29uc3QgTmF2aWdhdGlvbkRyYXdlcjogUmVhY3QuRkM8TmF2aWdhdGlvblByb3BzPiA9ICh7IG1lbnVPcGVuZWQsIG9uQ2xvc2UgfSk6IFJlYWN0LlJlYWN0RWxlbWVudCA9PiB7XHJcbiAgY29uc3QgdXNlciA9IHVzZVNlbGVjdG9yKHNlbGVjdFVzZXJTdGF0ZSlbJ2RhdGEnXTtcclxuICBjb25zdCBbc2VsZWN0ZWRUaGVtZXMsIHNldFNlbGVjdGVkVGhlbWVzXSA9IHVzZVN0YXRlPFRoZW1lW10+KFtdKTtcclxuICBjb25zdCB0aGVtZXMgPSB1c2VTZWxlY3RvcihzZWxlY3RUaGVtZXNTdGF0ZSk7XHJcbiAgY29uc3QgY2F0ZWdvcmllcyA9IHVzZVNlbGVjdG9yKHNlbGVjdENhdGVnb3JpZXNTdGF0ZSk7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gIGNvbnN0IGhhbmRsZUxvZ291dCA9ICgpOiB2b2lkID0+IHtcclxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuY29uZmlybSgnQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGxvZyBvdXQ/JykpIHtcclxuICAgICAgdHJ1ZVxyXG4gICAgfVxyXG4gIH07XHJcblxyXG5cclxuICBjb25zdCBoYW5kbGVTZWxlY3RUaGVtZSA9IGFzeW5jICh0OiBUaGVtZSkgPT4ge1xyXG4gICAgc2V0U2VsZWN0ZWRUaGVtZXMoKCkgPT4gWy4uLnNlbGVjdGVkVGhlbWVzLCB0XSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPERyYXdlciBlbGV2YXRpb249ezB9IGFuY2hvcj1cImxlZnRcIiBjbGFzc2VzPXt7IHBhcGVyOiBzdHlsZXMucGFwZXIgfX0gb3Blbj17bWVudU9wZW5lZH0gb25DbG9zZT17b25DbG9zZX0+XHJcbiAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuY2xvc2VCdXR0b259IG9uQ2xpY2s9e29uQ2xvc2V9PlxyXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmNsb3NlSWNvbn0gLz5cclxuICAgICAgPC9idXR0b24+XHJcbiAgICAgIDxuYXYgY2xhc3NOYW1lPXtzdHlsZXMucm9vdH0+XHJcblxyXG4gICAgICAgIDxMaW5rIGhyZWY9XCIvc3BlY2lhbGlzdHNcIj5cclxuICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImQtZmxleCBtYi0zIG1sLTEwXCI+XHJcbiAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwibXItMTBcIiBzcmM9XCIvdXNlcnMuc3ZnXCIgYWx0PVwi0KHQv9C10YbQuNCw0LvQuNGB0YLRi1wiLz5cclxuICAgICAgICAgICAg0KHQv9C10YbQuNCw0LvQuNGB0YLRi1xyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvTGluaz5cclxuXHJcbiAgICAgICAgPFNpZGVCbG9jayBuYW1lPVwi0JrQsNGC0LXQs9C+0YDQuNC4XCI+XHJcbiAgICAgICAgICA8TWVudUxpc3RcclxuICAgICAgICAgICAgICBpdGVtcz17Y2F0ZWdvcmllcy5tYXAoYyA9PiAoe1xyXG4gICAgICAgICAgICAgICAgbmFtZTogYy5uYW1lLFxyXG4gICAgICAgICAgICAgICAgdXJsOiBgL3RhZ3MvJHtjLnNsdWd9YCxcclxuICAgICAgICAgICAgICAgIGljb246IGAvJHtjLnNsdWd9LnBuZ2BcclxuICAgICAgICAgICAgICB9KSl9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvU2lkZUJsb2NrPlxyXG4gICAgICAgIDxTaWRlQmxvY2sgbmFtZT1cItCi0LXQvNGLXCI+XHJcbiAgICAgICAgICA8VGFnc1xyXG4gICAgICAgICAgICAgIGl0ZW1zPXt0aGVtZXN9XHJcbiAgICAgICAgICAgICAgaGFuZGxlU2VsZWN0PXtoYW5kbGVTZWxlY3RUaGVtZX1cclxuICAgICAgICAgICAgICBzZWxlY3RlZEl0ZW1zPXtzZWxlY3RlZFRoZW1lc31cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9TaWRlQmxvY2s+XHJcbiAgICAgICAge3VzZXIgJiYgKFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5sb2dvdXR9PlxyXG4gICAgICAgICAgICA8RGl2aWRlciAvPlxyXG4gICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgPE1lbnVJdGVtIGNsYXNzTmFtZT17c3R5bGVzLml0ZW19IG9uQ2xpY2s9e2hhbmRsZUxvZ291dH0+XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkxXCI+TG9nb3V0PC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApfVxyXG4gICAgICA8L25hdj5cclxuICAgIDwvRHJhd2VyPlxyXG4gICk7XHJcbn07XHJcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIm5vdGlmaWNhdGlvblwiOiBcIk5vdGlmaWNhdGlvbkRyb3Bkb3duX25vdGlmaWNhdGlvbl9fX2ZCZWhcIixcblx0XCJub3RpZmljYXRpb25MaXN0XCI6IFwiTm90aWZpY2F0aW9uRHJvcGRvd25fbm90aWZpY2F0aW9uTGlzdF9fMUp6Z3dcIixcblx0XCJsaXN0Q29udGVudFwiOiBcIk5vdGlmaWNhdGlvbkRyb3Bkb3duX2xpc3RDb250ZW50X18xV0VWb1wiLFxuXHRcInRpdGxlXCI6IFwiTm90aWZpY2F0aW9uRHJvcGRvd25fdGl0bGVfXzM0cklQXCIsXG5cdFwibm90aWZpY2F0aW9uUG9wdXBcIjogXCJOb3RpZmljYXRpb25Ecm9wZG93bl9ub3RpZmljYXRpb25Qb3B1cF9fN2MwcTRcIixcblx0XCJpdGVtXCI6IFwiTm90aWZpY2F0aW9uRHJvcGRvd25faXRlbV9fc2NsT29cIixcblx0XCJhdmF0YXJcIjogXCJOb3RpZmljYXRpb25Ecm9wZG93bl9hdmF0YXJfXzE3c2Q1XCIsXG5cdFwibGlrZUJsb2NrXCI6IFwiTm90aWZpY2F0aW9uRHJvcGRvd25fbGlrZUJsb2NrX18yWUlzWFwiXG59O1xuIiwiaW1wb3J0IHtBdmF0YXIsIEJhZGdlLCBJY29uQnV0dG9uLCBMaXN0LCBQb3BvdmVyLCBUeXBvZ3JhcGh5fSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcbmltcG9ydCBmb3JtYXQgZnJvbSAnZGF0ZS1mbnMvZm9ybWF0JztcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9Ob3RpZmljYXRpb25Ecm9wZG93bi5tb2R1bGUuc2Nzcyc7XHJcbmltcG9ydCB7Tm90aWZpY2F0aW9uLCBVc2VyfSBmcm9tIFwiLi4vLi4vaW50ZXJmYWNlc1wiO1xyXG5pbXBvcnQge3VzZVNlbGVjdG9yfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHtzZWxlY3RVc2VyTm90aWZpY2F0aW9uc30gZnJvbSBcIi4uLy4uL3JlZHV4L3VzZXIvdXNlci5zZWxlY3RvclwiO1xyXG5pbXBvcnQgSXRlbSBmcm9tIFwiLi9pdGVtXCI7XHJcblxyXG5leHBvcnQgY29uc3QgTm90aWZpY2F0aW9uRHJvcGRvd246IFJlYWN0LkZDID0gKCk6IFJlYWN0LlJlYWN0RWxlbWVudCA9PiB7XHJcbiAgICBjb25zdCBbYW5jaG9yRWwsIHNldEFuY2hvckVsXSA9IFJlYWN0LnVzZVN0YXRlPEhUTUxCdXR0b25FbGVtZW50IHwgbnVsbD4obnVsbCk7XHJcbiAgICBjb25zdCBvcGVuID0gQm9vbGVhbihhbmNob3JFbCk7XHJcbiAgICBjb25zdCBub3RpZmljYXRpb25zID0gdXNlU2VsZWN0b3Ioc2VsZWN0VXNlck5vdGlmaWNhdGlvbnMpO1xyXG5cclxuXHJcbiAgICBjb25zdCB0b2dnbGVPcGVuUG9wdXAgPSAoZXZlbnQ6IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTEJ1dHRvbkVsZW1lbnQ+KTogdm9pZCA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coMTIzMCk7XHJcbiAgICAgICAgc2V0QW5jaG9yRWwoYW5jaG9yRWwgPyBudWxsIDogZXZlbnQuY3VycmVudFRhcmdldCk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZUNsb3NlID0gKCk6IHZvaWQgPT4ge1xyXG4gICAgICAgIHNldEFuY2hvckVsKG51bGwpO1xyXG5cclxuICAgICAgICAvLyAoYXN5bmMgKCk6IFByb21pc2U8dm9pZD4gPT4ge1xyXG4gICAgICAgIC8vICAgYXdhaXQgQXhpb3MucHV0KGAke0VuZHBvaW50cy5OT1RJRklDQVRJT05TfS9yZWFkYCk7XHJcbiAgICAgICAgLy8gfSkoKTtcclxuICAgICAgICAvL1xyXG4gICAgICAgIC8vIGNvbnN0IG5ld0l0ZW1SZWFkID0gbmV3SXRlbS5tYXAoKGl0ZW0pID0+IHtcclxuICAgICAgICAvLyAgIGlmIChpdGVtLnJlYWRBdCA9PT0gbnVsbCkge1xyXG4gICAgICAgIC8vICAgICByZXR1cm4geyAuLi5pdGVtLCByZWFkQXQ6IG5ldyBEYXRlKCkgfTtcclxuICAgICAgICAvLyAgIH1cclxuICAgICAgICAvLyAgIHJldHVybiBpdGVtO1xyXG4gICAgICAgIC8vIH0pO1xyXG5cclxuICAgICAgICAvLyBzZXROZXdJdGVtKG5ld0l0ZW1SZWFkKTtcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm5vdGlmaWNhdGlvbn0+XHJcbiAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiBvbkNsaWNrPXt0b2dnbGVPcGVuUG9wdXB9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwibWwtMTAgY3Vyc29yLXBvaW50ZXJcIiBzcmM9XCIvbm90aWZpY2F0aW9ucy5zdmdcIiBhbHQ9XCLQo9Cy0LXQtNC+0LzQu9C10L3QuNGPXCIvPlxyXG4gICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxQb3BvdmVyXHJcbiAgICAgICAgICAgICAgICBlbGV2YXRpb249ezB9XHJcbiAgICAgICAgICAgICAgICBjbGFzc2VzPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFwZXI6IHN0eWxlcy5ub3RpZmljYXRpb25Qb3B1cCxcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICBvbkNsb3NlPXtoYW5kbGVDbG9zZX1cclxuICAgICAgICAgICAgICAgIGFuY2hvckVsPXthbmNob3JFbH1cclxuICAgICAgICAgICAgICAgIGFuY2hvck9yaWdpbj17e1xyXG4gICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsOiAnYm90dG9tJyxcclxuICAgICAgICAgICAgICAgICAgICBob3Jpem9udGFsOiAnbGVmdCcsXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtT3JpZ2luPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgdmVydGljYWw6ICd0b3AnLFxyXG4gICAgICAgICAgICAgICAgICAgIGhvcml6b250YWw6ICdjZW50ZXInLFxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIG9wZW49e29wZW59XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGwtMjUgcHItMjUgcGItMjVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0gdmFyaWFudD1cIm92ZXJsaW5lXCIgZGlzcGxheT1cImJsb2NrXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxiIGNsYXNzTmFtZT1cIm9wYWNpdHktNlwiPtCj0LLQtdC00L7QvNC70LXQvdC40Y88L2I+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm5vdGlmaWNhdGlvbkxpc3R9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGlzdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtub3RpZmljYXRpb25zLmxlbmd0aCA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3RpZmljYXRpb25zLm1hcCgobm90aWZpY2F0aW9uKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtub3RpZmljYXRpb24uaWR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEl0ZW0gaXRlbT17bm90aWZpY2F0aW9ufSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTQwIG10LTMwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE5PVCBGT1VORFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaXN0PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvUG9wb3Zlcj5cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbn07XHJcbiIsImltcG9ydCB7QXZhdGFyfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9Ob3RpZmljYXRpb25Ecm9wZG93bi5tb2R1bGUuc2Nzc1wiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7Q29tbWVudCwgTGlrZWFibGUsIE5vdGlmaWNhdGlvbiwgUG9zdERhdGF9IGZyb20gXCIuLi8uLi9pbnRlcmZhY2VzXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcblxyXG50eXBlIFByb3BzID0ge1xyXG4gICAgaXRlbTogTm90aWZpY2F0aW9uPExpa2VhYmxlIHwgUG9zdERhdGEgfCBDb21tZW50PixcclxufVxyXG5cclxuY29uc3QgQWRkQ29tbWVudEl0ZW0gPSAoe25vdGlmaWNhdGlvbn06IHsgbm90aWZpY2F0aW9uOiBOb3RpZmljYXRpb248Q29tbWVudD4gfSkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLml0ZW19PlxyXG4gICAgICAgICAgICA8QXZhdGFyIGFsdD17J1VzZXInfSBzcmM9e25vdGlmaWNhdGlvbi5kYXRhPy51c2VyPy5hdmF0YXJ9IGNsYXNzTmFtZT17c3R5bGVzLmF2YXRhcn0vPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxpc3RDb250ZW50fT5cclxuICAgICAgICAgICAgICAgIDxiPntub3RpZmljYXRpb24uZGF0YS51c2VyLm5hbWV9PC9iPiDQvdCw0L/QuNGB0LDQuyDQutC+0LzQvNC10L3RgtCw0YDQuNC5INC6INC30LDQv9C40YHQuCZuYnNwO1xyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj17JyMnfT5cclxuICAgICAgICAgICAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgICAgICAgICAgICAg4oCce25vdGlmaWNhdGlvbi5kYXRhLnBvc3QudGl0bGV94oCdXHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuY29uc3QgU2V0TGlrZU9yRGlzbGlrZUl0ZW0gPSAoe25vdGlmaWNhdGlvbn06IHsgbm90aWZpY2F0aW9uOiBOb3RpZmljYXRpb248TGlrZWFibGU+IH0pID0+IHtcclxuICAgIGNvbnN0IGlzTGlrZSA9IG5vdGlmaWNhdGlvbi5kYXRhLnR5cGUgPT09ICdsaWtlJ1xyXG5cclxuICAgIGlmIChub3RpZmljYXRpb24uZGF0YS5saWtlYWJsZV90eXBlLmluY2x1ZGVzKCdDb21tZW50JykpIHtcclxuICAgICAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pdGVtfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5saWtlQmxvY2t9PlxyXG4gICAgICAgICAgICAgICAgPEF2YXRhciBhbHQ9eydVc2VyJ30gc3JjPXtub3RpZmljYXRpb24uZGF0YT8udXNlcj8uYXZhdGFyfSBjbGFzc05hbWU9e3N0eWxlcy5hdmF0YXJ9Lz5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtpc0xpa2UgPyAnL2xpa2Uuc3ZnJyA6ICcvZGlzbGlrZS5zdmcnfSAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5saXN0Q29udGVudH0+XHJcbiAgICAgICAgICAgICAgICA8Yj57bm90aWZpY2F0aW9uLmRhdGEudXNlci5uYW1lfTwvYj4g0L/QvtGB0YLQsNCy0LjQuyB7aXNMaWtlID8gJ9C70LDQudC6JyA6ICfQtNC40LfQu9Cw0LnQuid9INC90LAg0LrQvtC80LXQvdGC0LDRgNC40LkmbmJzcDtcclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9eycjJ30+XHJcbiAgICAgICAgICAgICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIOKAnHtub3RpZmljYXRpb24uZGF0YS5jb21tZW50LnRleHR94oCdXHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaXRlbX0+XHJcbiAgICAgICAgICAgIDxBdmF0YXIgYWx0PXsnVXNlcid9IHNyYz17bm90aWZpY2F0aW9uLmRhdGE/LnVzZXI/LmF2YXRhcn0gY2xhc3NOYW1lPXtzdHlsZXMuYXZhdGFyfS8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubGlzdENvbnRlbnR9PlxyXG4gICAgICAgICAgICAgICAgPGI+e25vdGlmaWNhdGlvbi5kYXRhLnVzZXIubmFtZX08L2I+INC/0L7RgdGC0LDQstC40Lsge2lzTGlrZSA/ICfQu9Cw0LnQuicgOiAn0LTQuNC30LvQsNC50LonfSDQvdCwINC30LDQv9C40YHRjCZuYnNwO1xyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj17JyMnfT5cclxuICAgICAgICAgICAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgICAgICAgICAgICAg4oCce25vdGlmaWNhdGlvbi5kYXRhLnBvc3QudGl0bGV94oCdXHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEl0ZW0oe2l0ZW19OiBQcm9wcykge1xyXG5cclxuICAgIGlmIChpdGVtLnR5cGUuaW5jbHVkZXMoJ0FkZENvbW1lbnROb3RpZmljYXRpb24nKSkge1xyXG4gICAgICAgIHJldHVybiA8QWRkQ29tbWVudEl0ZW0gbm90aWZpY2F0aW9uPXtpdGVtIGFzIE5vdGlmaWNhdGlvbjxDb21tZW50Pn0vPlxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiA8U2V0TGlrZU9yRGlzbGlrZUl0ZW0gbm90aWZpY2F0aW9uPXtpdGVtIGFzIE5vdGlmaWNhdGlvbjxMaWtlYWJsZT59Lz5cclxufVxyXG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJ0aW1lXCI6IFwiUGFzdFRpbWVMYWJlbF90aW1lX19SdWpLQVwiLFxuXHRcInRpbWVXaXRoTGVmdFNpZGVQb2ludFwiOiBcIlBhc3RUaW1lTGFiZWxfdGltZVdpdGhMZWZ0U2lkZVBvaW50X18yMHd5eFwiXG59O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL1Bhc3RUaW1lTGFiZWwubW9kdWxlLnNjc3MnO1xyXG5pbXBvcnQgeyBmb3JtYXREaXN0YW5jZVRvTm93IH0gZnJvbSAnZGF0ZS1mbnMnO1xyXG5pbXBvcnQgeyBydSB9IGZyb20gJ2RhdGUtZm5zL2xvY2FsZSc7XHJcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnO1xyXG5cclxuaW50ZXJmYWNlIFBhc3RUaW1lTGFiZWxQcm9wcyB7XHJcbiAgdGltZTogbnVtYmVyO1xyXG4gIGxlZnRTaWRlUG9pbnQ/OiBib29sZWFuO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgUGFzdFRpbWVMYWJlbDogUmVhY3QuRkM8UGFzdFRpbWVMYWJlbFByb3BzPiA9ICh7IHRpbWUsIGxlZnRTaWRlUG9pbnQgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8c3BhbiBjbGFzc05hbWU9e2Nsc3goc3R5bGVzLnRpbWUsIHtbc3R5bGVzLnRpbWVXaXRoTGVmdFNpZGVQb2ludF06IGxlZnRTaWRlUG9pbnR9KX0+XHJcbiAgICAgIHtmb3JtYXREaXN0YW5jZVRvTm93KHRpbWUsIHsgbG9jYWxlOiBydSwgYWRkU3VmZml4OiB0cnVlIH0pfVxyXG4gICAgPC9zcGFuPlxyXG4gICk7XHJcbn07XHJcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcInBvcG92ZXJcIjogXCJQcm9maWxlUG9wdXBfcG9wb3Zlcl9fMnVhQVdcIixcblx0XCJwYXBlclwiOiBcIlByb2ZpbGVQb3B1cF9wYXBlcl9fMUUyeHRcIixcblx0XCJzZWN0aW9uMVwiOiBcIlByb2ZpbGVQb3B1cF9zZWN0aW9uMV9fMnJXczFcIixcblx0XCJzZWN0aW9uMlwiOiBcIlByb2ZpbGVQb3B1cF9zZWN0aW9uMl9fM1g4SGhcIixcblx0XCJkaXZpZGVyXCI6IFwiUHJvZmlsZVBvcHVwX2RpdmlkZXJfXzJZSms3XCIsXG5cdFwiYXZhdGFyXCI6IFwiUHJvZmlsZVBvcHVwX2F2YXRhcl9fMXJhaEVcIixcblx0XCJuYW1lXCI6IFwiUHJvZmlsZVBvcHVwX25hbWVfX25vdTBsXCIsXG5cdFwibG9naW5cIjogXCJQcm9maWxlUG9wdXBfbG9naW5fXzMxZkFmXCJcbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBQb3BvdmVyLCBBdmF0YXIsIERpdmlkZXIgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9Qcm9maWxlUG9wdXAubW9kdWxlLnNjc3MnO1xyXG5pbXBvcnQgY2xzeCBmcm9tICdjbHN4JztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHtVc2VyfSBmcm9tIFwiLi4vLi4vaW50ZXJmYWNlc1wiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBQb2ZpbGVQb3B1cFByb3BzIHtcclxuICBvbkNsaWNrPzogKCkgPT4gdm9pZDtcclxuICB1c2VyOiBVc2VyO1xyXG59XHJcblxyXG5jb25zdCBQcm9maWxlUG9wdXA6IFJlYWN0LkZDPFBvZmlsZVBvcHVwUHJvcHM+ID0gKHsgdXNlciwgb25DbGljayB9KSA9PiB7XHJcbiAgY29uc3QgW2FuY2hvckVsLCBzZXRBbmNob3JFbF0gPSBSZWFjdC51c2VTdGF0ZTxIVE1MRGl2RWxlbWVudCB8IG51bGw+KG51bGwpO1xyXG5cclxuICBjb25zdCBoYW5kbGVDbGljayA9IChldmVudDogUmVhY3QuTW91c2VFdmVudDxIVE1MRGl2RWxlbWVudD4pID0+IHtcclxuICAgIGlmIChvbkNsaWNrKSB7XHJcbiAgICAgIG9uQ2xpY2soKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRBbmNob3JFbChldmVudC5jdXJyZW50VGFyZ2V0KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVDbG9zZSA9ICgpID0+IHtcclxuICAgIHNldEFuY2hvckVsKG51bGwpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IG9wZW4gPSBCb29sZWFuKGFuY2hvckVsKTtcclxuXHJcbiAgY29uc3Qgb25Mb2dvdXQgPSAoKSA9PiB7XHJcbiAgICBpZiAod2luZG93Py5jb25maXJtKCfQktGLINC00LXQudGB0YLQstC40YLQtdC70YzQvdC+INGF0L7RgtC40YLQtSDQv9C+0LrQuNC90YPRgtGMINGB0LDQudGCID8nKSkge1xyXG4gICAgICBkb2N1bWVudC5jb29raWUgPSAnYXV0aF90b2tlbicgKyAnPTsgTWF4LUFnZT0wJztcclxuICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3Rva2VuJyk7XHJcbiAgICAgIGxvY2F0aW9uLmhyZWYgPSAnLyc7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEF2YXRhciBjbGFzc05hbWU9e2Nsc3goJ2N1cnNvci1wb2ludGVyJywgc3R5bGVzLnJvb3QpfSBhbHQ9e3VzZXI/Lm5hbWV9IHNyYz17dXNlcj8uYXZhdGFyfSBvbkNsaWNrPXtoYW5kbGVDbGlja30gLz5cclxuICAgICAge3VzZXI/LmlkICYmIChcclxuICAgICAgICAgIDxQb3BvdmVyXHJcbiAgICAgICAgICAgICAgb3Blbj17b3Blbn1cclxuICAgICAgICAgICAgICBhbmNob3JFbD17YW5jaG9yRWx9XHJcbiAgICAgICAgICAgICAgb25DbG9zZT17aGFuZGxlQ2xvc2V9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMucG9wb3Zlcn1cclxuICAgICAgICAgICAgICBjbGFzc2VzPXt7XHJcbiAgICAgICAgICAgICAgICByb290OiBzdHlsZXMucm9vdCxcclxuICAgICAgICAgICAgICAgIHBhcGVyOiBzdHlsZXMucGFwZXIsXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICBhbmNob3JPcmlnaW49e3tcclxuICAgICAgICAgICAgICAgIHZlcnRpY2FsOiAnYm90dG9tJyxcclxuICAgICAgICAgICAgICAgIGhvcml6b250YWw6ICdjZW50ZXInLFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgdHJhbnNmb3JtT3JpZ2luPXt7XHJcbiAgICAgICAgICAgICAgICB2ZXJ0aWNhbDogJ3RvcCcsXHJcbiAgICAgICAgICAgICAgICBob3Jpem9udGFsOiAnY2VudGVyJyxcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xzeChzdHlsZXMuc2VjdGlvbjEsICdkLWZsZXgnKX0+XHJcbiAgICAgICAgICAgICAgPEF2YXRhciBhbHQ9e3VzZXIubmFtZX0gc3JjPXt1c2VyLmF2YXRhcn0gY2xhc3NOYW1lPXtzdHlsZXMuYXZhdGFyfSAvPlxyXG4gICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9e3N0eWxlcy5uYW1lfT57dXNlci5uYW1lfTwvYT5cclxuICAgICAgICAgICAgICAgIHsvKjxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubG9naW59Pnt1c2VyLmxvZ2lufTwvZGl2PiovfVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPERpdmlkZXIgY2xhc3Nlcz17eyByb290OiBzdHlsZXMuZGl2aWRlciB9fSAvPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xzeChzdHlsZXMuc2VjdGlvbjIsICdkLWZsZXggZmxleC1jb2x1bW4nKX0+XHJcbiAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC9wcm9maWxlLyR7dXNlci5pZH0/dHlwZT1hcnRpY2xlc2B9PjxhIGNsYXNzTmFtZT1cIm1iLTNcIj7QodGC0LDRgtGM0Lg8L2E+PC9MaW5rPlxyXG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvcHJvZmlsZS8ke3VzZXIuaWR9P3R5cGU9ZHJhZnRzYH0+PGEgY2xhc3NOYW1lPVwibWItM1wiPtCn0LXRgNC90L7QstC40LrQuDwvYT48L0xpbms+XHJcbiAgICAgICAgICAgICAgPExpbmsgaHJlZj17Jy9wcm9maWxlJ30+PGEgY2xhc3NOYW1lPVwibWItM1wiPtCd0LDRgdGC0YDQvtC50LrQuDwvYT48L0xpbms+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8RGl2aWRlciBjbGFzc2VzPXt7IHJvb3Q6IHN0eWxlcy5kaXZpZGVyIH19IC8+XHJcbiAgICAgICAgICAgIDxhIG9uQ2xpY2s9e29uTG9nb3V0fSBjbGFzc05hbWU9e2Nsc3goc3R5bGVzLnNlY3Rpb24yLCAnZC1mbGV4IGZsZXgtY29sdW1uJyl9PtCS0YvQudGC0Lg8L2E+XHJcbiAgICAgICAgICA8L1BvcG92ZXI+XHJcbiAgICAgICl9XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvZmlsZVBvcHVwO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgQXZhdGFyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0F2YXRhcic7XHJcbmltcG9ydCBDb2xsYXBzZSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Db2xsYXBzZSc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9TZWFyY2hQb3B1cC5tb2R1bGUuc2Nzcyc7XHJcbmltcG9ydCB7IERpdmlkZXIgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5cclxuaW50ZXJmYWNlIEl0ZW1Qcm9wcyB7XHJcbiAgdGl0bGU6IHN0cmluZztcclxuICBkYXRhOiBBcnJheTx7XHJcbiAgICAgIG5hbWU6IHN0cmluZztcclxuICAgICAgbGluazogc3RyaW5nO1xyXG4gICAgICBpZDogbnVtYmVyIHwgc3RyaW5nO1xyXG4gIH0+O1xyXG4gIG9uQ2xvc2U6ICgpID0+IHZvaWRcclxufVxyXG5cclxuY29uc3QgSXRlbTogUmVhY3QuRkM8SXRlbVByb3BzPiA9IChwKSA9PiB7XHJcbiAgY29uc3QgW29wZW4sIHNldE9wZW5dID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKHAudGl0bGUgPT09ICfQkNCy0YLQvtGA0YsnIHx8IHAudGl0bGUgPT09ICfQn9GD0LHQu9C40LrQsNGG0LjQuCcpIHtcclxuICAgICAgc2V0T3Blbih0cnVlKTtcclxuICAgIH1cclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gKCkgPT4ge1xyXG4gICAgc2V0T3Blbighb3Blbik7XHJcbiAgfTtcclxuXHJcbiAgaWYgKHAudGl0bGUgPT09ICfQkNCy0YLQvtGA0YsnICYmIHAuZGF0YS5sZW5ndGggPiAwKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8PlxyXG4gICAgICAgIDxkaXYgb25DbGljaz17aGFuZGxlQ2xpY2t9IGNsYXNzTmFtZT17c3R5bGVzLnNlYXJjaFRpdGxlSW5uZXJ9PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zZWFyY2hUaXRsZX0+XHJcbiAgICAgICAgICAgIHtwLnRpdGxlfSAoe3AuZGF0YS5sZW5ndGh9KVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICB7cC5kYXRhLmxlbmd0aCA+IDMgJiYgKFxyXG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9e3N0eWxlcy5zaG93QWxsfSBvbkNsaWNrPXsoZSkgPT4gZS5zdG9wUHJvcGFnYXRpb24oKX0+XHJcbiAgICAgICAgICAgICAg0J/QvtC60LDQt9Cw0YLRjCDQstGB0LVcclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8RGl2aWRlciBjbGFzc2VzPXt7IHJvb3Q6IHN0eWxlcy5kaXZpZGVyIH19IC8+XHJcbiAgICAgICAgPENvbGxhcHNlIGluPXtvcGVufSB0aW1lb3V0PVwiYXV0b1wiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zZWFyY2hJdGVtc30+XHJcbiAgICAgICAgICAgIHtwLmRhdGEuc2xpY2UoMCwgMykubWFwKChlbCwga2V5KSA9PiAoXHJcbiAgICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXsgYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBhd2FpdCByb3V0ZXIucHVzaChlbC5saW5rKVxyXG4gICAgICAgICAgICAgICAgICBwLm9uQ2xvc2UoKVxyXG4gICAgICAgICAgICAgIH19IGtleT17YCR7cC50aXRsZX0tJHtrZXl9YH0gY2xhc3NOYW1lPXtzdHlsZXMuc2VhcmNoSXRlbX0+XHJcbiAgICAgICAgICAgICAgICA8QXZhdGFyIGNsYXNzTmFtZT1cIm1yLTEwXCIgLz5cclxuICAgICAgICAgICAgICAgIDxkaXY+e2VsLm5hbWV9PC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9Db2xsYXBzZT5cclxuICAgICAgPC8+XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgaWYgKHAudGl0bGUgIT09ICfQkNCy0YLQvtGA0YsnICYmIHAuZGF0YS5sZW5ndGggPiAwKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8PlxyXG4gICAgICAgIDxkaXYgb25DbGljaz17aGFuZGxlQ2xpY2t9IGNsYXNzTmFtZT17c3R5bGVzLnNlYXJjaFRpdGxlSW5uZXJ9PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zZWFyY2hUaXRsZX0+XHJcbiAgICAgICAgICAgIHtwLnRpdGxlfSAoe3AuZGF0YS5sZW5ndGh9KVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICB7cC5kYXRhLmxlbmd0aCA+IDMgJiYgKFxyXG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9e3N0eWxlcy5zaG93QWxsfSBvbkNsaWNrPXsoZSkgPT4gZS5zdG9wUHJvcGFnYXRpb24oKX0+XHJcbiAgICAgICAgICAgICAg0J/QvtC60LDQt9Cw0YLRjCDQstGB0LVcclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8RGl2aWRlciBjbGFzc2VzPXt7IHJvb3Q6IHN0eWxlcy5kaXZpZGVyIH19IC8+XHJcbiAgICAgICAgPENvbGxhcHNlIGluPXtvcGVufSB0aW1lb3V0PVwiYXV0b1wiIGRpc2FibGVTdHJpY3RNb2RlQ29tcGF0PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zZWFyY2hJdGVtc30+XHJcbiAgICAgICAgICAgIHtwLmRhdGEuc2xpY2UoMCwgMykubWFwKChlbCwga2V5KSA9PiAoXHJcbiAgICAgICAgICAgICAgPGRpdiBrZXk9e2Ake3AudGl0bGV9LSR7a2V5fWB9IGNsYXNzTmFtZT17c3R5bGVzLnNlYXJjaEl0ZW19PlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj17ZWwubGlua30+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgb25DbGljaz17KCkgPT4gcC5vbkNsb3NlKCl9PntlbC5uYW1lfTwvYT5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L0NvbGxhcHNlPlxyXG4gICAgICA8Lz5cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gbnVsbDtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEl0ZW07XHJcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbnRhaW5lclwiOiBcIlNlYXJjaFBvcHVwX2NvbnRhaW5lcl9fMnUtdmpcIixcblx0XCJib2R5XCI6IFwiU2VhcmNoUG9wdXBfYm9keV9fMUY2TjRcIixcblx0XCJkaXZpZGVyXCI6IFwiU2VhcmNoUG9wdXBfZGl2aWRlcl9fMkxQYjhcIixcblx0XCJzZWFyY2hUaXRsZVwiOiBcIlNlYXJjaFBvcHVwX3NlYXJjaFRpdGxlX18yNk1GRFwiLFxuXHRcInNlYXJjaFRpdGxlSW5uZXJcIjogXCJTZWFyY2hQb3B1cF9zZWFyY2hUaXRsZUlubmVyX18zd1NpMlwiLFxuXHRcInNlYXJjaEl0ZW1zXCI6IFwiU2VhcmNoUG9wdXBfc2VhcmNoSXRlbXNfXzNKTDV1XCIsXG5cdFwic2VhcmNoSXRlbVwiOiBcIlNlYXJjaFBvcHVwX3NlYXJjaEl0ZW1fXzJDVWFzXCIsXG5cdFwic2hvd0FsbFwiOiBcIlNlYXJjaFBvcHVwX3Nob3dBbGxfXzJoeTZDXCIsXG5cdFwiZm9vdGVyXCI6IFwiU2VhcmNoUG9wdXBfZm9vdGVyX19NWW44S1wiXG59O1xuIiwiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcclxuXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9TZWFyY2hQb3B1cC5tb2R1bGUuc2Nzcyc7XHJcbmltcG9ydCBJdGVtIGZyb20gJy4vSXRlbSc7XHJcbmltcG9ydCB7Z2V0U3BlY2lhbGlzdHN9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9hcGkvU3BlY2lhbGlzdHNBcGlcIjtcclxuaW1wb3J0IHtDb21tZW50LCBQb3N0RGF0YSwgVGhlbWUsIFVzZXJ9IGZyb20gXCIuLi8uLi9pbnRlcmZhY2VzXCI7XHJcbmltcG9ydCB7dXNlU2VsZWN0b3J9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQge3NlbGVjdFRoZW1lc1N0YXRlfSBmcm9tIFwiLi4vLi4vcmVkdXgvZGlyZWN0b3J5L2RpcmVjdG9yeS5zZWxlY3RvclwiO1xyXG5pbXBvcnQge0NvbW1lbnRBcGl9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9hcGkvQ29tbWVudEFwaVwiO1xyXG5pbXBvcnQge2dldFBvc3RzfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvYXBpL1Bvc3RBcGlcIjtcclxuXHJcbmludGVyZmFjZSBTZWFyY2hQb3B1cFByb3BzIHtcclxuICAgIGlzU2VhcmNoOiBib29sZWFuO1xyXG4gICAgc2VhcmNoSW5wdXQ6IHN0cmluZztcclxuICAgIGhhbmRsZUNsaWNrOiAoKSA9PiB2b2lkXHJcblxyXG59XHJcblxyXG5jb25zdCBTZWFyY2hQb3B1cDogUmVhY3QuRkM8U2VhcmNoUG9wdXBQcm9wcz4gPSAoe2lzU2VhcmNoLCBzZWFyY2hJbnB1dCwgaGFuZGxlQ2xpY2t9KSA9PiB7XHJcbiAgICBjb25zdCBbYXV0aG9ycywgc2V0QXV0aG9yc10gPSB1c2VTdGF0ZTxVc2VyW10+KFtdKVxyXG4gICAgY29uc3QgW3Bvc3RzLCBzZXRQb3N0c10gPSB1c2VTdGF0ZTxQb3N0RGF0YVtdPihbXSlcclxuICAgIGNvbnN0IFtjb21tZW50cywgc2V0Q29tbWVudHNdID0gdXNlU3RhdGU8Q29tbWVudFtdPihbXSlcclxuICAgIGNvbnN0IHRoZW1lcyA9IHVzZVNlbGVjdG9yKHNlbGVjdFRoZW1lc1N0YXRlKS5maWx0ZXIodGhlbWUgPT4gdGhlbWUubmFtZS5pbmNsdWRlcyhzZWFyY2hJbnB1dCkpO1xyXG5cclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKHNlYXJjaElucHV0Lmxlbmd0aCkge1xyXG4gICAgICAgICAgICBnZXRTcGVjaWFsaXN0cyh7bmFtZTogc2VhcmNoSW5wdXR9KS50aGVuKHVzZXJzID0+IHtcclxuICAgICAgICAgICAgICAgIHNldEF1dGhvcnModXNlcnMuZGF0YSlcclxuICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgIENvbW1lbnRBcGkuZ2V0KHt0ZXh0OiBzZWFyY2hJbnB1dH0pLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgc2V0Q29tbWVudHMocmVzcG9uc2UpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGdldFBvc3RzKHt0aXRsZTogc2VhcmNoSW5wdXR9KS50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgIHNldFBvc3RzKHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgfSwgW3NlYXJjaElucHV0XSlcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ib2R5fT5cclxuICAgICAgICAgICAgICAgIDxJdGVtIHRpdGxlPVwi0JDQstGC0L7RgNGLXCIgZGF0YT17YXV0aG9ycy5tYXAodXNlciA9PiAoe1xyXG4gICAgICAgICAgICAgICAgICAgIGlkOiB1c2VyLmlkLFxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IHVzZXIubmFtZSxcclxuICAgICAgICAgICAgICAgICAgICBsaW5rOiBgL3Byb2ZpbGUvJHt1c2VyLmlkfWBcclxuICAgICAgICAgICAgICAgIH0pKX1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsb3NlPXtoYW5kbGVDbGlja31cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8SXRlbSB0aXRsZT1cItCf0YPQsdC70LjQutCw0YbQuNC4XCIgZGF0YT17cG9zdHMubWFwKHBvc3QgPT4gKHtcclxuICAgICAgICAgICAgICAgICAgICBpZDogcG9zdC5pZCxcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBwb3N0LnRpdGxlLFxyXG4gICAgICAgICAgICAgICAgICAgIGxpbms6IGAvcG9zdC8ke3Bvc3Quc2x1Z31gXHJcbiAgICAgICAgICAgICAgICB9KSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsb3NlPXtoYW5kbGVDbGlja31cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8SXRlbSB0aXRsZT1cItCi0Y3Qs9C4XCIgZGF0YT17XHJcbiAgICAgICAgICAgICAgICAgICAgIXNlYXJjaElucHV0Lmxlbmd0aCA/IFtdIDogdGhlbWVzLm1hcCh0aGVtZSA9PiAoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogdGhlbWUuaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IHRoZW1lLm5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbms6ICcvdGhlbWVzJ1xyXG4gICAgICAgICAgICAgICAgICAgIH0pKX1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsb3NlPXtoYW5kbGVDbGlja31cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8SXRlbSB0aXRsZT1cItCa0L7QvNC10L3RgtCw0YDQuNC4XCIgZGF0YT17Y29tbWVudHMubWFwKGNvbW1lbnQgPT4gKHtcclxuICAgICAgICAgICAgICAgICAgICBpZDogY29tbWVudC5pZCxcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBjb21tZW50LnRleHQsXHJcbiAgICAgICAgICAgICAgICAgICAgbGluazogYC9wb3N0LyR7Y29tbWVudC5wb3N0LnNsdWd9YFxyXG4gICAgICAgICAgICAgICAgfSkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DbG9zZT17aGFuZGxlQ2xpY2t9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgey8qPEl0ZW0gdGl0bGU9XCLQkNCy0YLQvtGA0YtcIiBkYXRhPXtzZWFyY2hEYXRhLnBvZGNhc3RzfS8+Ki99XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZvb3Rlcn0+XHJcbiAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cIm1yLTEwXCIgc3JjPVwiL2Fycm93LWxpbmsuc3ZnXCIgYWx0PVwi0J/QvtC40YHQulwiLz5cclxuICAgICAgICAgICAgICAgIDxhPtCf0L7QutCw0LfQsNGC0Ywg0LLRgdC1INGA0LXQt9GD0LvRjNGC0LDRgtGLINC/0L4g0LfQsNC/0YDQvtGB0YMg4oCce3NlYXJjaElucHV0feKAnTwvYT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2VhcmNoUG9wdXA7XHJcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImJsb2NrXCI6IFwiU2lkZUJsb2NrX2Jsb2NrX18xYmFiVVwiXG59O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL1NpZGVCbG9jay5tb2R1bGUuc2Nzcyc7XHJcblxyXG50eXBlIFNpZGVCbG9ja1Byb3BzID0geyBuYW1lPzogc3RyaW5nIH07XHJcblxyXG5leHBvcnQgY29uc3QgU2lkZUJsb2NrOiBSZWFjdC5GQzxTaWRlQmxvY2tQcm9wcz4gPSAoeyBuYW1lLCBjaGlsZHJlbiB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYmxvY2t9PlxyXG4gICAgICB7bmFtZSAmJiA8aDQ+e25hbWV9PC9oND59XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcInRhZ1wiOiBcIlRhZ3NfdGFnX18xMjhPS1wiLFxuXHRcImJ0blwiOiBcIlRhZ3NfYnRuX196eFdNUVwiLFxuXHRcImFjdGl2ZVwiOiBcIlRhZ3NfYWN0aXZlX18xNThjX1wiXG59O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9UYWdzLm1vZHVsZS5zY3NzJztcclxuaW1wb3J0IHtUaGVtZX0gZnJvbSBcIi4uLy4uL2ludGVyZmFjZXNcIjtcclxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnLi4vQnV0dG9uJztcclxuaW1wb3J0IGNsc3ggZnJvbSBcImNsc3hcIjtcclxuXHJcbnR5cGUgVGFnSXRlbSA9IHsgdGhlbWU6IFRoZW1lLCBvbkNsaWNrPzogKHQ6IFRoZW1lKSA9PiB2b2lkLCBpc0FjdGl2ZTogYm9vbGVhbn07XHJcblxyXG5jb25zdCBUYWc6IFJlYWN0LkZDPFRhZ0l0ZW0+ID0gKHsgdGhlbWUsIG9uQ2xpY2ssIGlzQWN0aXZlIH0pID0+IChcclxuICA8TGluayBocmVmPXt0aGVtZS5uYW1lfT5cclxuICAgIDxhIG9uQ2xpY2s9eygpID0+IG9uQ2xpY2sodGhlbWUpfSBjbGFzc05hbWU9e3N0eWxlcy50YWd9PlxyXG4gICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPXtjbHN4KHN0eWxlcy5idG4sIGlzQWN0aXZlID8gc3R5bGVzLmFjdGl2ZSA6ICcnKX0gdmFyaWFudD17aXNBY3RpdmUgPyAndGV4dCcgOiAndGV4dCd9PlxyXG4gICAgICAgICAgICB7dGhlbWUubmFtZX1cclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgIDwvYT5cclxuICA8L0xpbms+XHJcbik7XHJcblxyXG5leHBvcnQgY29uc3QgVGFnczogUmVhY3QuRkM8eyBpdGVtczogVGhlbWVbXSwgc2VsZWN0ZWRJdGVtczogVGhlbWVbXSwgaGFuZGxlU2VsZWN0OiAodDogVGhlbWUpID0+IHZvaWQgfT4gPSAoeyBpdGVtcywgaGFuZGxlU2VsZWN0LCBzZWxlY3RlZEl0ZW1zIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAge2l0ZW1zLm1hcCgob2JqKSA9PiAoXHJcbiAgICAgICAgPFRhZyBrZXk9e29iai5uYW1lfSB0aGVtZT17b2JqfSBvbkNsaWNrPXtoYW5kbGVTZWxlY3R9IGlzQWN0aXZlPXshIXNlbGVjdGVkSXRlbXM/LmZpbmQodCA9PiArdC5pZCA9PT0gK29iai5pZCl9IC8+XHJcbiAgICAgICkpfVxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwidXNlckNhcmRcIjogXCJVc2VyQ2FyZF91c2VyQ2FyZF9fMnBVTENcIixcblx0XCJ1c2VyQ2FyZF9hdmF0YXJcIjogXCJVc2VyQ2FyZF91c2VyQ2FyZF9hdmF0YXJfX3RVQjJPXCIsXG5cdFwidXNlckNhcmRfcHJvZmlsZVwiOiBcIlVzZXJDYXJkX3VzZXJDYXJkX3Byb2ZpbGVfXzNLRWxaXCIsXG5cdFwidXNlckNhcmRfdXNlclwiOiBcIlVzZXJDYXJkX3VzZXJDYXJkX3VzZXJfXzFQdDB6XCIsXG5cdFwidXNlckNhcmRfZHJvcERhd25cIjogXCJVc2VyQ2FyZF91c2VyQ2FyZF9kcm9wRGF3bl9fVmxPcWtcIixcblx0XCJ1c2VyQ2FyZF9kb3RzXCI6IFwiVXNlckNhcmRfdXNlckNhcmRfZG90c19fMzYwZHZcIixcblx0XCJ1c2VyQ2FyZF9kb3RcIjogXCJVc2VyQ2FyZF91c2VyQ2FyZF9kb3RfXzNMRGxMXCIsXG5cdFwidXNlckNhcmRfZGF3blwiOiBcIlVzZXJDYXJkX3VzZXJDYXJkX2Rhd25fXzFlbDRBXCIsXG5cdFwidXNlckNhcmRfZWRpdGluZ1wiOiBcIlVzZXJDYXJkX3VzZXJDYXJkX2VkaXRpbmdfX25YMnZmXCIsXG5cdFwidXNlckNhcmRfZGVzY3JpcHRpb25cIjogXCJVc2VyQ2FyZF91c2VyQ2FyZF9kZXNjcmlwdGlvbl9fMVdJM3BcIixcblx0XCJ1c2VyQ2FyZF9uaWNrbmFtZVwiOiBcIlVzZXJDYXJkX3VzZXJDYXJkX25pY2tuYW1lX18xeTJULVwiLFxuXHRcInVzZXJDYXJkX2luZm9cIjogXCJVc2VyQ2FyZF91c2VyQ2FyZF9pbmZvX18xQW43NVwiLFxuXHRcInVzZXJDYXJkX3Byb2Zlc3Npb25cIjogXCJVc2VyQ2FyZF91c2VyQ2FyZF9wcm9mZXNzaW9uX18ya1JkSVwiLFxuXHRcInVzZXJDYXJkX3N0YXR1c1wiOiBcIlVzZXJDYXJkX3VzZXJDYXJkX3N0YXR1c19fMXYzMjRcIixcblx0XCJ1c2VyQ2FyZF9jb21tdW5pY2F0aW9uXCI6IFwiVXNlckNhcmRfdXNlckNhcmRfY29tbXVuaWNhdGlvbl9fM2l4QUhcIixcblx0XCJ1c2VyQ2FyZF9zb2NOZXR3b3Jrc1wiOiBcIlVzZXJDYXJkX3VzZXJDYXJkX3NvY05ldHdvcmtzX19jTDZaNFwiLFxuXHRcInVzZXJDYXJkX3dvcmtTdGF0dXNcIjogXCJVc2VyQ2FyZF91c2VyQ2FyZF93b3JrU3RhdHVzX18zYnlxbFwiLFxuXHRcInVzZXJDYXJkX3dvcmtOb3RBdmFpbGFibGVTdGF0dXNcIjogXCJVc2VyQ2FyZF91c2VyQ2FyZF93b3JrTm90QXZhaWxhYmxlU3RhdHVzX18ySE5Va1wiLFxuXHRcInVzZXJDYXJkX3N0c1wiOiBcIlVzZXJDYXJkX3VzZXJDYXJkX3N0c19fMndpS1pcIixcblx0XCJ1c2VyQ2FyZF9zdHNfbm90X2F2YWlsYWJsZVwiOiBcIlVzZXJDYXJkX3VzZXJDYXJkX3N0c19ub3RfYXZhaWxhYmxlX18xUXplalwiLFxuXHRcInVzZXJDYXJkX3NlY3Rpb25cIjogXCJVc2VyQ2FyZF91c2VyQ2FyZF9zZWN0aW9uX18xaDVkS1wiLFxuXHRcInVzZXJDYXJkX2FydGljbGVzXCI6IFwiVXNlckNhcmRfdXNlckNhcmRfYXJ0aWNsZXNfXzExUmo5XCIsXG5cdFwicm90YXRlZFwiOiBcIlVzZXJDYXJkX3JvdGF0ZWRfXzJnTmxYXCIsXG5cdFwidXNlckNhcmRfbmV3UG9wXCI6IFwiVXNlckNhcmRfdXNlckNhcmRfbmV3UG9wX18xT2NDb1wiLFxuXHRcInVzZXJDYXJkX2NvbW1lbnRzXCI6IFwiVXNlckNhcmRfdXNlckNhcmRfY29tbWVudHNfX0ZJT2dyXCJcbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcblxyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vVXNlckNhcmQubW9kdWxlLnNjc3MnO1xyXG5cclxuaW50ZXJmYWNlIFVzZXJDYXJkUHJvcHMge1xyXG4gICAgbmlja25hbWU6IHN0cmluZztcclxuICAgIHByb2Zlc3Npb246IHN0cmluZztcclxuICAgIHN0YXR1czogc3RyaW5nO1xyXG4gICAgc2luY2VEYXRlOiBzdHJpbmc7XHJcbiAgICBjb21tZW50c0NvdW50OiBudW1iZXI7XHJcbiAgICByZWFkeUZvcldvcms6IGJvb2xlYW47XHJcbiAgICBhcnRpY2xlVHlwZTogJ2FydGljbGVzJyB8ICdkcmFmdHMnIHwgc3RyaW5nO1xyXG4gICAgb25DaGFuZ2VUeXBlOiAodHlwZTogc3RyaW5nKSA9PiB2b2lkO1xyXG4gICAgcmVjb2duaXplZD86IGJvb2xlYW47XHJcbiAgICBpc0F1dGhVc2VyPzogYm9vbGVhbjtcclxuICAgIGF2YXRhcjogc3RyaW5nO1xyXG4gICAgcG9zdENvdW50OiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBBY3RpdmVTdmcocHJvcHM6IHsgbGVhazogYm9vbGVhbiB9KSB7XHJcbiAgICByZXR1cm4gPHN2ZyBjbGFzc05hbWU9e3Byb3BzLmxlYWsgPyBzdHlsZXMucm90YXRlZCA6IFwiXCJ9IHdpZHRoPVwiOVwiIGhlaWdodD1cIjZcIiB2aWV3Qm94PVwiMCAwIDkgNlwiIGZpbGw9XCJub25lXCJcclxuICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cclxuICAgICAgICA8cGF0aCBkPVwiTTEgMUw0LjUgNC41TDggMVwiIHN0cm9rZT1cIiMwNEM4MDBcIiBzdHJva2VXaWR0aD1cIjEuM1wiLz5cclxuICAgIDwvc3ZnPjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFBvaW50U3ZnKCkge1xyXG4gICAgcmV0dXJuIDxzdmcgd2lkdGg9XCIxM1wiIGhlaWdodD1cIjlcIiB2aWV3Qm94PVwiMCAwIDEzIDlcIiBmaWxsPVwibm9uZVwiXHJcbiAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XHJcbiAgICAgICAgPHBhdGggZD1cIk0xIDRMNSA4TDExLjUgMS41XCIgc3Ryb2tlPVwiIzQwRDI2OVwiIHN0cm9rZVdpZHRoPVwiMlwiXHJcbiAgICAgICAgICAgICAgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiLz5cclxuICAgIDwvc3ZnPjtcclxufVxyXG5cclxuY29uc3QgVXNlckNhcmQ6IFJlYWN0LkZDPFVzZXJDYXJkUHJvcHM+ID0gKFxyXG4gICAge1xyXG4gICAgICAgIG5pY2tuYW1lLFxyXG4gICAgICAgIHByb2Zlc3Npb24sXHJcbiAgICAgICAgc3RhdHVzLFxyXG4gICAgICAgIHJlY29nbml6ZWQsXHJcbiAgICAgICAgc2luY2VEYXRlLFxyXG4gICAgICAgIGNvbW1lbnRzQ291bnQsXHJcbiAgICAgICAgb25DaGFuZ2VUeXBlLFxyXG4gICAgICAgIHJlYWR5Rm9yV29yayxcclxuICAgICAgICBhcnRpY2xlVHlwZSxcclxuICAgICAgICBpc0F1dGhVc2VyLFxyXG4gICAgICAgIGF2YXRhcixcclxuICAgICAgICBwb3N0Q291bnQsXHJcbiAgICB9XHJcbikgPT4ge1xyXG5cclxuICAgIGNvbnN0IFt2aXNpYWJsZSwgc2V0VmlzaWFibGVdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW2xlYWssIHNldExlYWtdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW2lzT3duZXIsIHNldElzT3duZXJdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW3R5cGUsIHNldFR5cGVdID0gUmVhY3QudXNlU3RhdGUoYXJ0aWNsZVR5cGUpO1xyXG5cclxuICAgIGNvbnN0IHRvZ2dsZVZpc2libGUgPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0VmlzaWFibGUoIXZpc2lhYmxlKTtcclxuICAgIH1cclxuICAgIGNvbnN0IHRvZ2dsZUxlYWsgPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0TGVhayghbGVhayk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlVHlwZSA9ICh0OiBzdHJpbmcpID0+IHtcclxuICAgICAgICBvbkNoYW5nZVR5cGUodClcclxuICAgICAgICBzZXRUeXBlKHQpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy51c2VyQ2FyZH0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudXNlckNhcmRfcHJvZmlsZX0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnVzZXJDYXJkX3VzZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudXNlckNhcmRfYXZhdGFyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2F2YXRhcn0gYWx0PVwiVXNlcnNcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy51c2VyQ2FyZF9kZXNjcmlwdGlvbn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudXNlckNhcmRfbmlja25hbWV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgxPntuaWNrbmFtZX08L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3JlY29nbml6ZWQgJiYgPGltZyBzcmM9XCIvc3Rhci5zdmdcIiBhbHQ9XCIuXCIvPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudXNlckNhcmRfaW5mb30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy51c2VyQ2FyZF9yZWdpc3RlcmVkfT7QndCwIEluZ3Rlcm5ldCDRgSB7c2luY2VEYXRlfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLnVzZXJDYXJkX3Byb2Zlc3Npb259Pntwcm9mZXNzaW9ufTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudXNlckNhcmRfc3RhdHVzfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntzdGF0dXN9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy51c2VyQ2FyZF9jb21tdW5pY2F0aW9ufT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudXNlckNhcmRfc29jTmV0d29ya3N9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ZhY2Vib29rLnN2Z1wiIGFsdD1cImZhY2Vib29rXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL3ZrLnN2Z1wiIGFsdD1cInZrXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL3R3aXR0ZXIuc3ZnXCIgYWx0PVwidHdpdHRlclwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3JlYWR5Rm9yV29yayA/IHN0eWxlcy51c2VyQ2FyZF93b3JrU3RhdHVzIDogc3R5bGVzLnVzZXJDYXJkX3dvcmtOb3RBdmFpbGFibGVTdGF0dXN9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtyZWFkeUZvcldvcmsgPyBzdHlsZXMudXNlckNhcmRfc3RzIDogc3R5bGVzLnVzZXJDYXJkX3N0c19ub3RfYXZhaWxhYmxlfT48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57cmVhZHlGb3JXb3JrID8gJ9CU0L7RgdGC0YPQv9C10L0g0LTQu9GPINGA0LDQsdC+0YLRiycgOiAn0J3QtSDQtNC+0YHRgtGD0L/QtdC9INC00LvRjyDRgNCw0LHQvtGC0YsnfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzT3duZXIgPT09IGZhbHNlID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICg8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnVzZXJDYXJkX2Ryb3BEYXdufT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9eygpID0+IHRvZ2dsZVZpc2libGUoKX0gY2xhc3NOYW1lPXtzdHlsZXMudXNlckNhcmRfZG90c30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudXNlckNhcmRfZG90fT48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy51c2VyQ2FyZF9kb3R9PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnVzZXJDYXJkX2RvdH0+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Zpc2lhYmxlICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy51c2VyQ2FyZF9kYXdufT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPtCf0L7QttCw0LvQvtCy0LDRgtGM0YHRjzwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+0JfQsNCx0LvQvtC60LjRgNC+0LLQsNGC0Yw8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PikgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy51c2VyQ2FyZF9lZGl0aW5nfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9lZGl0LnN2Z1wiIGFsdD1cIlwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy51c2VyQ2FyZF9zZWN0aW9ufT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9eygpID0+IHRvZ2dsZUxlYWsoKX0gY2xhc3NOYW1lPXtzdHlsZXMudXNlckNhcmRfYXJ0aWNsZXN9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57dHlwZSA9PT0gJ2FydGljbGVzJyA/ICfQodGC0LDRgtGM0LgnIDogJ9Cn0LXRgNC90L7QstC40LrQuCd9IDxiPntwb3N0Q291bnR9PC9iPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEFjdGl2ZVN2ZyBsZWFrPXtsZWFrfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlYWsgJiYgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy51c2VyQ2FyZF9uZXdQb3B9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIG9uQ2xpY2s9eygpID0+IGhhbmRsZUNoYW5nZVR5cGUoJ2FydGljbGVzJyl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3R5cGUgPT09ICdhcnRpY2xlcycgJiYgPFBvaW50U3ZnLz59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDQodGC0LDRgtGM0LhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2lzQXV0aFVzZXIgJiYgPGxpIG9uQ2xpY2s9eygpID0+IGhhbmRsZUNoYW5nZVR5cGUoJ2RyYWZ0cycpfT57dHlwZSA9PT0gJ2RyYWZ0cycgJiYgPFBvaW50U3ZnIC8+fSDQp9C10YDQvdC+0LLQuNC60Lg8L2xpPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnVzZXJDYXJkX2NvbW1lbnRzfT48c3Bhbj7QmtC+0LzQvNC10L3RgtCw0YDQuNC4IHtjb21tZW50c0NvdW50fTwvc3Bhbj48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFVzZXJDYXJkO1xyXG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJ1c2VyXCI6IFwiVXNlclZpZXdPbkNvbnRlbnRfdXNlcl9fc2hXbW1cIixcblx0XCJ1c2VyX2F2YXRhclwiOiBcIlVzZXJWaWV3T25Db250ZW50X3VzZXJfYXZhdGFyX19fQVFWRlwiLFxuXHRcInVzZXJfYXZhdGFyX3dpdGhfdGltZVwiOiBcIlVzZXJWaWV3T25Db250ZW50X3VzZXJfYXZhdGFyX3dpdGhfdGltZV9fMUN4S1VcIixcblx0XCJ1c2VyX2luZm9cIjogXCJVc2VyVmlld09uQ29udGVudF91c2VyX2luZm9fXzF2WTJrXCIsXG5cdFwidXNlcl9pbmZvX3dpdGhfdGltZVwiOiBcIlVzZXJWaWV3T25Db250ZW50X3VzZXJfaW5mb193aXRoX3RpbWVfXzNwZUJKXCIsXG5cdFwidXNlcl9uYW1lXCI6IFwiVXNlclZpZXdPbkNvbnRlbnRfdXNlcl9uYW1lX18xeHVaMVwiXG59O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL1VzZXJWaWV3T25Db250ZW50Lm1vZHVsZS5zY3NzJztcclxuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCc7XHJcbmltcG9ydCB7IFBhc3RUaW1lTGFiZWwgfSBmcm9tICcuLi9QYXN0VGltZUxhYmVsJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHsgUG9wb3ZlciwgQXZhdGFyLCBEaXZpZGVyIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBVc2VyVmlld09uQ29udGVudFByb3BzIHtcclxuICB1c2VyOiB7XHJcbiAgICBpZDogbnVtYmVyO1xyXG4gICAgbmFtZTogc3RyaW5nO1xyXG4gICAgYXZhdGFyVXJsOiBzdHJpbmc7XHJcbiAgfTtcclxuICB0aW1lPzogbnVtYmVyO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgVXNlclZpZXdPbkNvbnRlbnQ6IFJlYWN0LkZDPFVzZXJWaWV3T25Db250ZW50UHJvcHM+ID0gKHsgdXNlciwgdGltZSB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxMaW5rIGhyZWY9e2AvcHJvZmlsZS8ke3VzZXIuaWR9YH0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudXNlcn0+XHJcbiAgICAgICAge3VzZXIuYXZhdGFyVXJsPy5sZW5ndGggJiYgPGltZ1xyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2Nsc3goc3R5bGVzLnVzZXJfYXZhdGFyLCB0aW1lID8gc3R5bGVzLnVzZXJfYXZhdGFyX3dpdGhfdGltZSA6ICcnKX1cclxuICAgICAgICAgICAgc3JjPXt1c2VyLmF2YXRhclVybH1cclxuICAgICAgICAgICAgYWx0PVwi0JDQstCw0YLQsNGAINC/0L7Qu9GM0LfQstC+0LDRgtC10LvRj1wiXHJcbiAgICAgICAgLz59XHJcblxyXG4gICAgICAgIHshdXNlci5hdmF0YXJVcmw/Lmxlbmd0aCAmJiA8QXZhdGFyIHN0eWxlPXt7d2lkdGg6IDIyLCBoZWlnaHQ6IDIyLCBtYXJnaW5SaWdodDogNn19IC8+fVxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xzeChzdHlsZXMudXNlcl9pbmZvLCB0aW1lID8gc3R5bGVzLnVzZXJfaW5mb193aXRoX3RpbWUgOiAnJyl9PlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMudXNlcl9uYW1lfT57dXNlci5uYW1lfTwvc3Bhbj5cclxuICAgICAgICAgIHt0aW1lID8gPFBhc3RUaW1lTGFiZWwgdGltZT17dGltZX0gLz4gOiBudWxsfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvTGluaz5cclxuICApO1xyXG59O1xyXG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJ2aWV3c0FuZENvbW1lbnRzXCI6IFwiVmlld3NBbmRDb21tZW50c192aWV3c0FuZENvbW1lbnRzX18zeHZZb1wiLFxuXHRcImNvdW50XCI6IFwiVmlld3NBbmRDb21tZW50c19jb3VudF9fMXcwNmRcIixcblx0XCJpY29uXCI6IFwiVmlld3NBbmRDb21tZW50c19pY29uX18yYzB0TVwiXG59O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9WaWV3c0FuZENvbW1lbnRzLm1vZHVsZS5zY3NzJztcclxuaW1wb3J0IHsgQ29tbWVudEljb24gfSBmcm9tICcuLi9pY29ucy9Db21tZW50SWNvbic7XHJcbmltcG9ydCB7IEV5ZUljb24gfSBmcm9tICcuLi9pY29ucy9FeWVJY29uJztcclxuXHJcbmludGVyZmFjZSBWaWV3c0FuZENvbW1lbnRzUHJvcHMge1xyXG4gIG1vZGU6ICdtaW5pJyB8ICdmdWxsJztcclxuICBjb21tZW50czogbnVtYmVyO1xyXG4gIHZpZXdzOiBudW1iZXI7XHJcbn1cclxuXHJcbmNvbnN0IGdldEZ1bGxUaXRsZSA9IChudW06IG51bWJlciwgbWFpblBhcnQ6IHN0cmluZywgbGFzdFBhcnRzOiBzdHJpbmdbXSkgPT4ge1xyXG4gIGxldCB0ZXh0ID0gbWFpblBhcnQ7XHJcbiAgY29uc3QgbGFzdERpZ2l0ID0gbnVtICUgMTA7XHJcbiAgY29uc3QgcHJlTGFzdERpZ2l0ID0gTWF0aC5mbG9vcihudW0gLyAxMCkgJSAxMDtcclxuICBpZiAobGFzdERpZ2l0ID09PSAxICYmIHByZUxhc3REaWdpdCAhPT0gMSkge1xyXG4gICAgdGV4dCArPSBsYXN0UGFydHNbMF07XHJcbiAgfSBlbHNlIGlmIChsYXN0RGlnaXQgPiAxICYmIGxhc3REaWdpdCA8PSA0ICYmIHByZUxhc3REaWdpdCAhPT0gMSkge1xyXG4gICAgdGV4dCArPSBsYXN0UGFydHNbMV07XHJcbiAgfSBlbHNlIHtcclxuICAgIHRleHQgKz0gbGFzdFBhcnRzWzJdO1xyXG4gIH1cclxuICByZXR1cm4gYCR7bnVtfSAke3RleHR9YDtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBWaWV3c0FuZENvbW1lbnRzOiBSZWFjdC5GQzxWaWV3c0FuZENvbW1lbnRzUHJvcHM+ID0gKHsgbW9kZSwgdmlld3MsIGNvbW1lbnRzIH0pID0+IHtcclxuICBjb25zdCBjb21tZW50c1RpdGxlID0gbW9kZSA9PT0gJ2Z1bGwnID8gZ2V0RnVsbFRpdGxlKGNvbW1lbnRzLCAn0LrQvtC80LzQtdC90YLQsNGAJywgWyfQuNC5JywgJ9C40Y8nLCAn0LjQtdCyJ10pIDogYCR7Y29tbWVudHN9YDtcclxuICBjb25zdCB2aWV3c1RpdGxlID0gbW9kZSA9PT0gJ2Z1bGwnID8gZ2V0RnVsbFRpdGxlKHZpZXdzLCAn0L/RgNC+0YHQvNC+0YLRgCcsIFsnJywgJ9CwJywgJ9C+0LInXSkgOiBgJHt2aWV3c31gO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xzeChzdHlsZXMudmlld3NBbmRDb21tZW50cywgJ2QtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXInKX0+XHJcbiAgICAgIDxDb21tZW50SWNvbiBjbGFzc05hbWU9e3N0eWxlcy5pY29ufSAvPlxyXG4gICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5jb3VudH0+e2NvbW1lbnRzVGl0bGV9PC9zcGFuPlxyXG4gICAgICA8RXllSWNvbiBjbGFzc05hbWU9e3N0eWxlcy5pY29ufSAvPlxyXG4gICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5jb3VudH0+e3ZpZXdzVGl0bGV9PC9zcGFuPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSWNvbiB7XHJcbiAgY2xhc3NOYW1lPzogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgQ29tbWVudEljb246IFJlYWN0LkZDPEljb24+ID0gKHsgY2xhc3NOYW1lIH0pID0+IChcclxuICA8c3ZnIGNsYXNzTmFtZT17Y2xhc3NOYW1lfSB3aWR0aD1cIjE0XCIgaGVpZ2h0PVwiMTNcIiB2aWV3Qm94PVwiMCAwIDE0IDEzXCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XHJcbiAgICA8cGF0aFxyXG4gICAgICBkPVwiTTAuNjAwMDk4IDEuODk5OTlDMC42MDAwOTggMS4zNDc3MSAxLjA0NzgxIDAuODk5OTk0IDEuNjAwMSAwLjg5OTk5NEgxMi40MDAxQzEyLjk1MjQgMC44OTk5OTQgMTMuNDAwMSAxLjM0NzcxIDEzLjQwMDEgMS44OTk5OVY3LjczOTk5QzEzLjQwMDEgOC4yOTIyOCAxMi45NTI0IDguNzM5OTkgMTIuNDAwMSA4LjczOTk5SDEwLjkzODZWMTIuMUw2LjAxNTQ4IDguNzM5OTlIMS42MDAxQzEuMDQ3ODEgOC43Mzk5OSAwLjYwMDA5OCA4LjI5MjI4IDAuNjAwMDk4IDcuNzM5OTlWMS44OTk5OVpcIlxyXG4gICAgICBzdHJva2U9XCIjOUM5Q0FBXCJcclxuICAgICAgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCJcclxuICAgICAgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiXHJcbiAgICAvPlxyXG4gIDwvc3ZnPlxyXG4pO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBJY29uIH0gZnJvbSAnLi9Db21tZW50SWNvbic7XHJcblxyXG5leHBvcnQgY29uc3QgRXllSWNvbjogUmVhY3QuRkM8SWNvbj4gPSAoeyBjbGFzc05hbWUgfSkgPT4gKFxyXG4gIDxzdmcgY2xhc3NOYW1lPXtjbGFzc05hbWV9IHdpZHRoPVwiMTZcIiBoZWlnaHQ9XCIxM1wiIHZpZXdCb3g9XCIwIDAgMTYgMTNcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cclxuICAgIDxwYXRoXHJcbiAgICAgIGQ9XCJNMTUuNDc4OCA2LjVDMTUuNDc4OCA2LjUgMTIuMTMwNSAxMi4wMjM0IDguMDAwMTUgMTIuMDIzNEMzLjg2OTggMTIuMDIzNCAwLjUyMTQ4NCA2LjUgMC41MjE0ODQgNi41QzAuNTIxNDg0IDYuNSAzLjg2OTggMC45NzY2MzkgOC4wMDAxNSAwLjk3NjYzOUMxMi4xMzA1IDAuOTc2NjM5IDE1LjQ3ODggNi41IDE1LjQ3ODggNi41WlwiXHJcbiAgICAgIHN0cm9rZT1cIiM5QzlDQUFcIlxyXG4gICAgLz5cclxuICAgIDxwYXRoXHJcbiAgICAgIGQ9XCJNMTAuMTk5OCA2LjVDMTAuMTk5OCA3LjY4NTc1IDkuMjE0OTYgOC42NDY5OSA4LjAwMDE1IDguNjQ2OTlDNi43ODUzNCA4LjY0Njk5IDUuODAwNTQgNy42ODU3NSA1LjgwMDU0IDYuNUM1LjgwMDU0IDUuMzE0MjYgNi43ODUzNCA0LjM1MzAyIDguMDAwMTUgNC4zNTMwMkM5LjIxNDk2IDQuMzUzMDIgMTAuMTk5OCA1LjMxNDI2IDEwLjE5OTggNi41WlwiXHJcbiAgICAgIHN0cm9rZT1cIiM5QzlDQUFcIlxyXG4gICAgLz5cclxuICA8L3N2Zz5cclxuKTtcclxuIiwiZXhwb3J0IGNvbnN0IFRodW1iVXBJY29uID0gKHsgY2xhc3NOYW1lIH0pID0+IChcclxuICA8c3ZnIGNsYXNzTmFtZT17Y2xhc3NOYW1lfSB3aWR0aD1cIjE5XCIgaGVpZ2h0PVwiMTdcIiB2aWV3Qm94PVwiMCAwIDE5IDE3XCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XHJcbiAgICA8cGF0aCBkPVwiTTUuMTU3OTQgMTQuODM2NVY2LjYyMTAzQzUuMTU3OTQgNS45MzkzMiA1LjMzOTk2IDUuMjY5OTcgNS42ODUyIDQuNjgyMTRMOC40OTg2MiAwLjI4NDEzNEM4LjYwMTk5IDAuMTA4MTI0IDguNzkwODQgMi4yNTk5NmUtMDUgOC45OTQ5NiAyLjI1OTk2ZS0wNUMxMC42NDEzIDIuMjU5OTZlLTA1IDExLjc1NTYgMS42Nzc2OSAxMS4xMTczIDMuMTk1MjNMMTAuMDkyNiA1LjU3OTlIMTUuODY4NkMxNy45MTg0IDUuNTc5OSAxOS4zMDgxIDcuNjY1OTQgMTguNTE4NCA5LjU1NzU3TDE2LjI1MjQgMTQuOTg1NUMxNS44MDYgMTYuMDU0NiAxNC43NjEgMTYuNzUwOCAxMy42MDI1IDE2Ljc1MDhINy4wNzIyNEM2LjAxNSAxNi43NTA4IDUuMTU3OTQgMTUuODkzNyA1LjE1Nzk0IDE0LjgzNjVaXCIgLz5cclxuICAgIDxwYXRoIGQ9XCJNMy41NDQ0MiAxNS4zOTUxVjYuOTM1NkMzLjU0NDQyIDYuMTg2ODYgMi45Mzc0NSA1LjU3OTkgMi4xODg3MSA1LjU3OTlDMS40Mzk5OCA1LjU3OTkgMC44MzMwMDggNi4xODY4NyAwLjgzMzAwOCA2LjkzNTZWMTUuMzk1MUMwLjgzMzAwOCAxNi4xNDM4IDEuNDM5OTggMTYuNzUwOCAyLjE4ODcxIDE2Ljc1MDhDMi45Mzc0NSAxNi43NTA4IDMuNTQ0NDIgMTYuMTQzOCAzLjU0NDQyIDE1LjM5NTFaXCIgLz5cclxuICA8L3N2Zz5cclxuKTtcclxuIiwiaW1wb3J0IEF4aW9zIGZyb20gJ2F4aW9zJztcclxuXHJcbmV4cG9ydCBjb25zdCBBUElfVVJMID0gJ2h0dHA6Ly9sb2NhbGhvc3QnO1xyXG5cclxuY29uc3QgaW5zdGFuY2UgPSBBeGlvcy5jcmVhdGUoe1xyXG4gIGJhc2VVUkw6IEFQSV9VUkwsXHJcbiAgd2l0aENyZWRlbnRpYWxzOiB0cnVlLFxyXG59KTtcclxuXHJcbmluc3RhbmNlLmludGVyY2VwdG9ycy5yZXF1ZXN0LnVzZSgoY29uZmlnKSA9PiB7XHJcbiAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cclxuICAgIGNvbmZpZy5oZWFkZXJzLkF1dGhvcml6YXRpb24gPSBgQmVhcmVyICR7d2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpPy5yZXBsYWNlKCclN0MnLCAnfCcpfWA7XHJcbiAgfVxyXG4gIHJldHVybiBjb25maWc7XHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgaW5zdGFuY2U7XHJcbiIsImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbmltcG9ydCBSZWFjdCwge3VzZVN0YXRlfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7SGVhZGVyfSBmcm9tICcuLi9jb21wb25lbnRzL0hlYWRlcic7XHJcbmltcG9ydCB7TmF2aWdhdGlvbkRyYXdlcn0gZnJvbSBcIi4uL2NvbXBvbmVudHMvTmF2aWdhdGlvbkRyYXdlclwiO1xyXG5cclxuaW50ZXJmYWNlIE1haW5MYXlvdXRQcm9wcyB7XHJcbiAgICB0aXRsZT86IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IE1haW5MYXlvdXQ6IFJlYWN0LkZDPE1haW5MYXlvdXRQcm9wcz4gPSAoe2NoaWxkcmVuLCB0aXRsZSA9ICdJbmd0ZXJuZXQnfSkgPT4ge1xyXG5cclxuICAgIGNvbnN0IFttZW51T3BlbmVkLCB0b2dnbGVNZW51T3BlbmVkXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcclxuICAgIGNvbnN0IG9uQ2xpY2tIYW1idXJnZXIgPSBSZWFjdC51c2VDYWxsYmFjaygoKSA9PiB0b2dnbGVNZW51T3BlbmVkKHRydWUpLCBbXSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgICAgIDx0aXRsZT57dGl0bGV9PC90aXRsZT5cclxuICAgICAgICAgICAgPC9IZWFkPlxyXG5cclxuXHJcbiAgICAgICAgICAgIDxIZWFkZXIgb25DbGlja0hhbWJ1cmdlcj17b25DbGlja0hhbWJ1cmdlcn0vPlxyXG5cclxuICAgICAgICAgICAgPE5hdmlnYXRpb25EcmF3ZXIgbWVudU9wZW5lZD17bWVudU9wZW5lZH0gb25DbG9zZT17KCk6IHZvaWQgPT4gdG9nZ2xlTWVudU9wZW5lZChmYWxzZSl9IC8+XHJcblxyXG4gICAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG59O1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgQ2hpbGRyZW4sIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHtcbiAgYWRkQmFzZVBhdGgsXG4gIGFkZExvY2FsZSxcbiAgZ2V0RG9tYWluTG9jYWxlLFxuICBpc0xvY2FsVVJMLFxuICBOZXh0Um91dGVyLFxuICBQcmVmZXRjaE9wdGlvbnMsXG4gIHJlc29sdmVIcmVmLFxufSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJy4vcm91dGVyJ1xuaW1wb3J0IHsgdXNlSW50ZXJzZWN0aW9uIH0gZnJvbSAnLi91c2UtaW50ZXJzZWN0aW9uJ1xuXG50eXBlIFVybCA9IHN0cmluZyB8IFVybE9iamVjdFxudHlwZSBSZXF1aXJlZEtleXM8VD4gPSB7XG4gIFtLIGluIGtleW9mIFRdLT86IHt9IGV4dGVuZHMgUGljazxULCBLPiA/IG5ldmVyIDogS1xufVtrZXlvZiBUXVxudHlwZSBPcHRpb25hbEtleXM8VD4gPSB7XG4gIFtLIGluIGtleW9mIFRdLT86IHt9IGV4dGVuZHMgUGljazxULCBLPiA/IEsgOiBuZXZlclxufVtrZXlvZiBUXVxuXG5leHBvcnQgdHlwZSBMaW5rUHJvcHMgPSB7XG4gIGhyZWY6IFVybFxuICBhcz86IFVybFxuICByZXBsYWNlPzogYm9vbGVhblxuICBzY3JvbGw/OiBib29sZWFuXG4gIHNoYWxsb3c/OiBib29sZWFuXG4gIHBhc3NIcmVmPzogYm9vbGVhblxuICBwcmVmZXRjaD86IGJvb2xlYW5cbiAgbG9jYWxlPzogc3RyaW5nIHwgZmFsc2Vcbn1cbnR5cGUgTGlua1Byb3BzUmVxdWlyZWQgPSBSZXF1aXJlZEtleXM8TGlua1Byb3BzPlxudHlwZSBMaW5rUHJvcHNPcHRpb25hbCA9IE9wdGlvbmFsS2V5czxMaW5rUHJvcHM+XG5cbmNvbnN0IHByZWZldGNoZWQ6IHsgW2NhY2hlS2V5OiBzdHJpbmddOiBib29sZWFuIH0gPSB7fVxuXG5mdW5jdGlvbiBwcmVmZXRjaChcbiAgcm91dGVyOiBOZXh0Um91dGVyLFxuICBocmVmOiBzdHJpbmcsXG4gIGFzOiBzdHJpbmcsXG4gIG9wdGlvbnM/OiBQcmVmZXRjaE9wdGlvbnNcbik6IHZvaWQge1xuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgfHwgIXJvdXRlcikgcmV0dXJuXG4gIGlmICghaXNMb2NhbFVSTChocmVmKSkgcmV0dXJuXG4gIC8vIFByZWZldGNoIHRoZSBKU09OIHBhZ2UgaWYgYXNrZWQgKG9ubHkgaW4gdGhlIGNsaWVudClcbiAgLy8gV2UgbmVlZCB0byBoYW5kbGUgYSBwcmVmZXRjaCBlcnJvciBoZXJlIHNpbmNlIHdlIG1heSBiZVxuICAvLyBsb2FkaW5nIHdpdGggcHJpb3JpdHkgd2hpY2ggY2FuIHJlamVjdCBidXQgd2UgZG9uJ3RcbiAgLy8gd2FudCB0byBmb3JjZSBuYXZpZ2F0aW9uIHNpbmNlIHRoaXMgaXMgb25seSBhIHByZWZldGNoXG4gIHJvdXRlci5wcmVmZXRjaChocmVmLCBhcywgb3B0aW9ucykuY2F0Y2goKGVycikgPT4ge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAvLyByZXRocm93IHRvIHNob3cgaW52YWxpZCBVUkwgZXJyb3JzXG4gICAgICB0aHJvdyBlcnJcbiAgICB9XG4gIH0pXG4gIGNvbnN0IGN1ckxvY2FsZSA9XG4gICAgb3B0aW9ucyAmJiB0eXBlb2Ygb3B0aW9ucy5sb2NhbGUgIT09ICd1bmRlZmluZWQnXG4gICAgICA/IG9wdGlvbnMubG9jYWxlXG4gICAgICA6IHJvdXRlciAmJiByb3V0ZXIubG9jYWxlXG5cbiAgLy8gSm9pbiBvbiBhbiBpbnZhbGlkIFVSSSBjaGFyYWN0ZXJcbiAgcHJlZmV0Y2hlZFtocmVmICsgJyUnICsgYXMgKyAoY3VyTG9jYWxlID8gJyUnICsgY3VyTG9jYWxlIDogJycpXSA9IHRydWVcbn1cblxuZnVuY3Rpb24gaXNNb2RpZmllZEV2ZW50KGV2ZW50OiBSZWFjdC5Nb3VzZUV2ZW50KTogYm9vbGVhbiB7XG4gIGNvbnN0IHsgdGFyZ2V0IH0gPSBldmVudC5jdXJyZW50VGFyZ2V0IGFzIEhUTUxBbmNob3JFbGVtZW50XG4gIHJldHVybiAoXG4gICAgKHRhcmdldCAmJiB0YXJnZXQgIT09ICdfc2VsZicpIHx8XG4gICAgZXZlbnQubWV0YUtleSB8fFxuICAgIGV2ZW50LmN0cmxLZXkgfHxcbiAgICBldmVudC5zaGlmdEtleSB8fFxuICAgIGV2ZW50LmFsdEtleSB8fCAvLyB0cmlnZ2VycyByZXNvdXJjZSBkb3dubG9hZFxuICAgIChldmVudC5uYXRpdmVFdmVudCAmJiBldmVudC5uYXRpdmVFdmVudC53aGljaCA9PT0gMilcbiAgKVxufVxuXG5mdW5jdGlvbiBsaW5rQ2xpY2tlZChcbiAgZTogUmVhY3QuTW91c2VFdmVudCxcbiAgcm91dGVyOiBOZXh0Um91dGVyLFxuICBocmVmOiBzdHJpbmcsXG4gIGFzOiBzdHJpbmcsXG4gIHJlcGxhY2U/OiBib29sZWFuLFxuICBzaGFsbG93PzogYm9vbGVhbixcbiAgc2Nyb2xsPzogYm9vbGVhbixcbiAgbG9jYWxlPzogc3RyaW5nIHwgZmFsc2Vcbik6IHZvaWQge1xuICBjb25zdCB7IG5vZGVOYW1lIH0gPSBlLmN1cnJlbnRUYXJnZXRcblxuICBpZiAobm9kZU5hbWUgPT09ICdBJyAmJiAoaXNNb2RpZmllZEV2ZW50KGUpIHx8ICFpc0xvY2FsVVJMKGhyZWYpKSkge1xuICAgIC8vIGlnbm9yZSBjbGljayBmb3IgYnJvd3NlcuKAmXMgZGVmYXVsdCBiZWhhdmlvclxuICAgIHJldHVyblxuICB9XG5cbiAgZS5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgLy8gIGF2b2lkIHNjcm9sbCBmb3IgdXJscyB3aXRoIGFuY2hvciByZWZzXG4gIGlmIChzY3JvbGwgPT0gbnVsbCkge1xuICAgIHNjcm9sbCA9IGFzLmluZGV4T2YoJyMnKSA8IDBcbiAgfVxuXG4gIC8vIHJlcGxhY2Ugc3RhdGUgaW5zdGVhZCBvZiBwdXNoIGlmIHByb3AgaXMgcHJlc2VudFxuICByb3V0ZXJbcmVwbGFjZSA/ICdyZXBsYWNlJyA6ICdwdXNoJ10oaHJlZiwgYXMsIHtcbiAgICBzaGFsbG93LFxuICAgIGxvY2FsZSxcbiAgICBzY3JvbGwsXG4gIH0pLnRoZW4oKHN1Y2Nlc3M6IGJvb2xlYW4pID0+IHtcbiAgICBpZiAoIXN1Y2Nlc3MpIHJldHVyblxuICAgIGlmIChzY3JvbGwpIHtcbiAgICAgIC8vIEZJWE1FOiBwcm9wZXIgcm91dGUgYW5ub3VuY2luZyBhdCBSb3V0ZXIgbGV2ZWwsIG5vdCBMaW5rOlxuICAgICAgZG9jdW1lbnQuYm9keS5mb2N1cygpXG4gICAgfVxuICB9KVxufVxuXG5mdW5jdGlvbiBMaW5rKHByb3BzOiBSZWFjdC5Qcm9wc1dpdGhDaGlsZHJlbjxMaW5rUHJvcHM+KSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgZnVuY3Rpb24gY3JlYXRlUHJvcEVycm9yKGFyZ3M6IHtcbiAgICAgIGtleTogc3RyaW5nXG4gICAgICBleHBlY3RlZDogc3RyaW5nXG4gICAgICBhY3R1YWw6IHN0cmluZ1xuICAgIH0pIHtcbiAgICAgIHJldHVybiBuZXcgRXJyb3IoXG4gICAgICAgIGBGYWlsZWQgcHJvcCB0eXBlOiBUaGUgcHJvcCBcXGAke2FyZ3Mua2V5fVxcYCBleHBlY3RzIGEgJHthcmdzLmV4cGVjdGVkfSBpbiBcXGA8TGluaz5cXGAsIGJ1dCBnb3QgXFxgJHthcmdzLmFjdHVhbH1cXGAgaW5zdGVhZC5gICtcbiAgICAgICAgICAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgICAgICAgID8gXCJcXG5PcGVuIHlvdXIgYnJvd3NlcidzIGNvbnNvbGUgdG8gdmlldyB0aGUgQ29tcG9uZW50IHN0YWNrIHRyYWNlLlwiXG4gICAgICAgICAgICA6ICcnKVxuICAgICAgKVxuICAgIH1cblxuICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgY29uc3QgcmVxdWlyZWRQcm9wc0d1YXJkOiBSZWNvcmQ8TGlua1Byb3BzUmVxdWlyZWQsIHRydWU+ID0ge1xuICAgICAgaHJlZjogdHJ1ZSxcbiAgICB9IGFzIGNvbnN0XG4gICAgY29uc3QgcmVxdWlyZWRQcm9wczogTGlua1Byb3BzUmVxdWlyZWRbXSA9IE9iamVjdC5rZXlzKFxuICAgICAgcmVxdWlyZWRQcm9wc0d1YXJkXG4gICAgKSBhcyBMaW5rUHJvcHNSZXF1aXJlZFtdXG4gICAgcmVxdWlyZWRQcm9wcy5mb3JFYWNoKChrZXk6IExpbmtQcm9wc1JlcXVpcmVkKSA9PiB7XG4gICAgICBpZiAoa2V5ID09PSAnaHJlZicpIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIHByb3BzW2tleV0gPT0gbnVsbCB8fFxuICAgICAgICAgICh0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ3N0cmluZycgJiYgdHlwZW9mIHByb3BzW2tleV0gIT09ICdvYmplY3QnKVxuICAgICAgICApIHtcbiAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgc3RyaW5nYCBvciBgb2JqZWN0YCcsXG4gICAgICAgICAgICBhY3R1YWw6IHByb3BzW2tleV0gPT09IG51bGwgPyAnbnVsbCcgOiB0eXBlb2YgcHJvcHNba2V5XSxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG4gICAgICAgIGNvbnN0IF86IG5ldmVyID0ga2V5XG4gICAgICB9XG4gICAgfSlcblxuICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgY29uc3Qgb3B0aW9uYWxQcm9wc0d1YXJkOiBSZWNvcmQ8TGlua1Byb3BzT3B0aW9uYWwsIHRydWU+ID0ge1xuICAgICAgYXM6IHRydWUsXG4gICAgICByZXBsYWNlOiB0cnVlLFxuICAgICAgc2Nyb2xsOiB0cnVlLFxuICAgICAgc2hhbGxvdzogdHJ1ZSxcbiAgICAgIHBhc3NIcmVmOiB0cnVlLFxuICAgICAgcHJlZmV0Y2g6IHRydWUsXG4gICAgICBsb2NhbGU6IHRydWUsXG4gICAgfSBhcyBjb25zdFxuICAgIGNvbnN0IG9wdGlvbmFsUHJvcHM6IExpbmtQcm9wc09wdGlvbmFsW10gPSBPYmplY3Qua2V5cyhcbiAgICAgIG9wdGlvbmFsUHJvcHNHdWFyZFxuICAgICkgYXMgTGlua1Byb3BzT3B0aW9uYWxbXVxuICAgIG9wdGlvbmFsUHJvcHMuZm9yRWFjaCgoa2V5OiBMaW5rUHJvcHNPcHRpb25hbCkgPT4ge1xuICAgICAgY29uc3QgdmFsVHlwZSA9IHR5cGVvZiBwcm9wc1trZXldXG5cbiAgICAgIGlmIChrZXkgPT09ICdhcycpIHtcbiAgICAgICAgaWYgKHByb3BzW2tleV0gJiYgdmFsVHlwZSAhPT0gJ3N0cmluZycgJiYgdmFsVHlwZSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgc3RyaW5nYCBvciBgb2JqZWN0YCcsXG4gICAgICAgICAgICBhY3R1YWw6IHZhbFR5cGUsXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChrZXkgPT09ICdsb2NhbGUnKSB7XG4gICAgICAgIGlmIChwcm9wc1trZXldICYmIHZhbFR5cGUgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgIGV4cGVjdGVkOiAnYHN0cmluZ2AnLFxuICAgICAgICAgICAgYWN0dWFsOiB2YWxUeXBlLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgIGtleSA9PT0gJ3JlcGxhY2UnIHx8XG4gICAgICAgIGtleSA9PT0gJ3Njcm9sbCcgfHxcbiAgICAgICAga2V5ID09PSAnc2hhbGxvdycgfHxcbiAgICAgICAga2V5ID09PSAncGFzc0hyZWYnIHx8XG4gICAgICAgIGtleSA9PT0gJ3ByZWZldGNoJ1xuICAgICAgKSB7XG4gICAgICAgIGlmIChwcm9wc1trZXldICE9IG51bGwgJiYgdmFsVHlwZSAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgIGV4cGVjdGVkOiAnYGJvb2xlYW5gJyxcbiAgICAgICAgICAgIGFjdHVhbDogdmFsVHlwZSxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG4gICAgICAgIGNvbnN0IF86IG5ldmVyID0ga2V5XG4gICAgICB9XG4gICAgfSlcblxuICAgIC8vIFRoaXMgaG9vayBpcyBpbiBhIGNvbmRpdGlvbmFsIGJ1dCB0aGF0IGlzIG9rIGJlY2F1c2UgYHByb2Nlc3MuZW52Lk5PREVfRU5WYCBuZXZlciBjaGFuZ2VzXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL3J1bGVzLW9mLWhvb2tzXG4gICAgY29uc3QgaGFzV2FybmVkID0gUmVhY3QudXNlUmVmKGZhbHNlKVxuICAgIGlmIChwcm9wcy5wcmVmZXRjaCAmJiAhaGFzV2FybmVkLmN1cnJlbnQpIHtcbiAgICAgIGhhc1dhcm5lZC5jdXJyZW50ID0gdHJ1ZVxuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAnTmV4dC5qcyBhdXRvLXByZWZldGNoZXMgYXV0b21hdGljYWxseSBiYXNlZCBvbiB2aWV3cG9ydC4gVGhlIHByZWZldGNoIGF0dHJpYnV0ZSBpcyBubyBsb25nZXIgbmVlZGVkLiBNb3JlOiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9wcmVmZXRjaC10cnVlLWRlcHJlY2F0ZWQnXG4gICAgICApXG4gICAgfVxuICB9XG4gIGNvbnN0IHAgPSBwcm9wcy5wcmVmZXRjaCAhPT0gZmFsc2VcblxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuICBjb25zdCBwYXRobmFtZSA9IChyb3V0ZXIgJiYgcm91dGVyLnBhdGhuYW1lKSB8fCAnLydcblxuICBjb25zdCB7IGhyZWYsIGFzIH0gPSBSZWFjdC51c2VNZW1vKCgpID0+IHtcbiAgICBjb25zdCBbcmVzb2x2ZWRIcmVmLCByZXNvbHZlZEFzXSA9IHJlc29sdmVIcmVmKHBhdGhuYW1lLCBwcm9wcy5ocmVmLCB0cnVlKVxuICAgIHJldHVybiB7XG4gICAgICBocmVmOiByZXNvbHZlZEhyZWYsXG4gICAgICBhczogcHJvcHMuYXNcbiAgICAgICAgPyByZXNvbHZlSHJlZihwYXRobmFtZSwgcHJvcHMuYXMpXG4gICAgICAgIDogcmVzb2x2ZWRBcyB8fCByZXNvbHZlZEhyZWYsXG4gICAgfVxuICB9LCBbcGF0aG5hbWUsIHByb3BzLmhyZWYsIHByb3BzLmFzXSlcblxuICBsZXQgeyBjaGlsZHJlbiwgcmVwbGFjZSwgc2hhbGxvdywgc2Nyb2xsLCBsb2NhbGUgfSA9IHByb3BzXG5cbiAgLy8gRGVwcmVjYXRlZC4gV2FybmluZyBzaG93biBieSBwcm9wVHlwZSBjaGVjay4gSWYgdGhlIGNoaWxkcmVuIHByb3ZpZGVkIGlzIGEgc3RyaW5nICg8TGluaz5leGFtcGxlPC9MaW5rPikgd2Ugd3JhcCBpdCBpbiBhbiA8YT4gdGFnXG4gIGlmICh0eXBlb2YgY2hpbGRyZW4gPT09ICdzdHJpbmcnKSB7XG4gICAgY2hpbGRyZW4gPSA8YT57Y2hpbGRyZW59PC9hPlxuICB9XG5cbiAgLy8gVGhpcyB3aWxsIHJldHVybiB0aGUgZmlyc3QgY2hpbGQsIGlmIG11bHRpcGxlIGFyZSBwcm92aWRlZCBpdCB3aWxsIHRocm93IGFuIGVycm9yXG4gIGNvbnN0IGNoaWxkOiBhbnkgPSBDaGlsZHJlbi5vbmx5KGNoaWxkcmVuKVxuICBjb25zdCBjaGlsZFJlZjogYW55ID0gY2hpbGQgJiYgdHlwZW9mIGNoaWxkID09PSAnb2JqZWN0JyAmJiBjaGlsZC5yZWZcblxuICBjb25zdCBbc2V0SW50ZXJzZWN0aW9uUmVmLCBpc1Zpc2libGVdID0gdXNlSW50ZXJzZWN0aW9uKHtcbiAgICByb290TWFyZ2luOiAnMjAwcHgnLFxuICB9KVxuICBjb25zdCBzZXRSZWYgPSBSZWFjdC51c2VDYWxsYmFjayhcbiAgICAoZWw6IEVsZW1lbnQpID0+IHtcbiAgICAgIHNldEludGVyc2VjdGlvblJlZihlbClcbiAgICAgIGlmIChjaGlsZFJlZikge1xuICAgICAgICBpZiAodHlwZW9mIGNoaWxkUmVmID09PSAnZnVuY3Rpb24nKSBjaGlsZFJlZihlbClcbiAgICAgICAgZWxzZSBpZiAodHlwZW9mIGNoaWxkUmVmID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgIGNoaWxkUmVmLmN1cnJlbnQgPSBlbFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBbY2hpbGRSZWYsIHNldEludGVyc2VjdGlvblJlZl1cbiAgKVxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHNob3VsZFByZWZldGNoID0gaXNWaXNpYmxlICYmIHAgJiYgaXNMb2NhbFVSTChocmVmKVxuICAgIGNvbnN0IGN1ckxvY2FsZSA9XG4gICAgICB0eXBlb2YgbG9jYWxlICE9PSAndW5kZWZpbmVkJyA/IGxvY2FsZSA6IHJvdXRlciAmJiByb3V0ZXIubG9jYWxlXG4gICAgY29uc3QgaXNQcmVmZXRjaGVkID1cbiAgICAgIHByZWZldGNoZWRbaHJlZiArICclJyArIGFzICsgKGN1ckxvY2FsZSA/ICclJyArIGN1ckxvY2FsZSA6ICcnKV1cbiAgICBpZiAoc2hvdWxkUHJlZmV0Y2ggJiYgIWlzUHJlZmV0Y2hlZCkge1xuICAgICAgcHJlZmV0Y2gocm91dGVyLCBocmVmLCBhcywge1xuICAgICAgICBsb2NhbGU6IGN1ckxvY2FsZSxcbiAgICAgIH0pXG4gICAgfVxuICB9LCBbYXMsIGhyZWYsIGlzVmlzaWJsZSwgbG9jYWxlLCBwLCByb3V0ZXJdKVxuXG4gIGNvbnN0IGNoaWxkUHJvcHM6IHtcbiAgICBvbk1vdXNlRW50ZXI/OiBSZWFjdC5Nb3VzZUV2ZW50SGFuZGxlclxuICAgIG9uQ2xpY2s6IFJlYWN0Lk1vdXNlRXZlbnRIYW5kbGVyXG4gICAgaHJlZj86IHN0cmluZ1xuICAgIHJlZj86IGFueVxuICB9ID0ge1xuICAgIHJlZjogc2V0UmVmLFxuICAgIG9uQ2xpY2s6IChlOiBSZWFjdC5Nb3VzZUV2ZW50KSA9PiB7XG4gICAgICBpZiAoY2hpbGQucHJvcHMgJiYgdHlwZW9mIGNoaWxkLnByb3BzLm9uQ2xpY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgY2hpbGQucHJvcHMub25DbGljayhlKVxuICAgICAgfVxuICAgICAgaWYgKCFlLmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgICAgbGlua0NsaWNrZWQoZSwgcm91dGVyLCBocmVmLCBhcywgcmVwbGFjZSwgc2hhbGxvdywgc2Nyb2xsLCBsb2NhbGUpXG4gICAgICB9XG4gICAgfSxcbiAgfVxuXG4gIGNoaWxkUHJvcHMub25Nb3VzZUVudGVyID0gKGU6IFJlYWN0Lk1vdXNlRXZlbnQpID0+IHtcbiAgICBpZiAoIWlzTG9jYWxVUkwoaHJlZikpIHJldHVyblxuICAgIGlmIChjaGlsZC5wcm9wcyAmJiB0eXBlb2YgY2hpbGQucHJvcHMub25Nb3VzZUVudGVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIoZSlcbiAgICB9XG4gICAgcHJlZmV0Y2gocm91dGVyLCBocmVmLCBhcywgeyBwcmlvcml0eTogdHJ1ZSB9KVxuICB9XG5cbiAgLy8gSWYgY2hpbGQgaXMgYW4gPGE+IHRhZyBhbmQgZG9lc24ndCBoYXZlIGEgaHJlZiBhdHRyaWJ1dGUsIG9yIGlmIHRoZSAncGFzc0hyZWYnIHByb3BlcnR5IGlzXG4gIC8vIGRlZmluZWQsIHdlIHNwZWNpZnkgdGhlIGN1cnJlbnQgJ2hyZWYnLCBzbyB0aGF0IHJlcGV0aXRpb24gaXMgbm90IG5lZWRlZCBieSB0aGUgdXNlclxuICBpZiAocHJvcHMucGFzc0hyZWYgfHwgKGNoaWxkLnR5cGUgPT09ICdhJyAmJiAhKCdocmVmJyBpbiBjaGlsZC5wcm9wcykpKSB7XG4gICAgY29uc3QgY3VyTG9jYWxlID1cbiAgICAgIHR5cGVvZiBsb2NhbGUgIT09ICd1bmRlZmluZWQnID8gbG9jYWxlIDogcm91dGVyICYmIHJvdXRlci5sb2NhbGVcblxuICAgIC8vIHdlIG9ubHkgcmVuZGVyIGRvbWFpbiBsb2NhbGVzIGlmIHdlIGFyZSBjdXJyZW50bHkgb24gYSBkb21haW4gbG9jYWxlXG4gICAgLy8gc28gdGhhdCBsb2NhbGUgbGlua3MgYXJlIHN0aWxsIHZpc2l0YWJsZSBpbiBkZXZlbG9wbWVudC9wcmV2aWV3IGVudnNcbiAgICBjb25zdCBsb2NhbGVEb21haW4gPVxuICAgICAgcm91dGVyICYmXG4gICAgICByb3V0ZXIuaXNMb2NhbGVEb21haW4gJiZcbiAgICAgIGdldERvbWFpbkxvY2FsZShcbiAgICAgICAgYXMsXG4gICAgICAgIGN1ckxvY2FsZSxcbiAgICAgICAgcm91dGVyICYmIHJvdXRlci5sb2NhbGVzLFxuICAgICAgICByb3V0ZXIgJiYgcm91dGVyLmRvbWFpbkxvY2FsZXNcbiAgICAgIClcblxuICAgIGNoaWxkUHJvcHMuaHJlZiA9XG4gICAgICBsb2NhbGVEb21haW4gfHxcbiAgICAgIGFkZEJhc2VQYXRoKGFkZExvY2FsZShhcywgY3VyTG9jYWxlLCByb3V0ZXIgJiYgcm91dGVyLmRlZmF1bHRMb2NhbGUpKVxuICB9XG5cbiAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChjaGlsZCwgY2hpbGRQcm9wcylcbn1cblxuZXhwb3J0IGRlZmF1bHQgTGlua1xuIiwiLyoqXG4gKiBSZW1vdmVzIHRoZSB0cmFpbGluZyBzbGFzaCBvZiBhIHBhdGggaWYgdGhlcmUgaXMgb25lLiBQcmVzZXJ2ZXMgdGhlIHJvb3QgcGF0aCBgL2AuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gcGF0aC5lbmRzV2l0aCgnLycpICYmIHBhdGggIT09ICcvJyA/IHBhdGguc2xpY2UoMCwgLTEpIDogcGF0aFxufVxuXG4vKipcbiAqIE5vcm1hbGl6ZXMgdGhlIHRyYWlsaW5nIHNsYXNoIG9mIGEgcGF0aCBhY2NvcmRpbmcgdG8gdGhlIGB0cmFpbGluZ1NsYXNoYCBvcHRpb25cbiAqIGluIGBuZXh0LmNvbmZpZy5qc2AuXG4gKi9cbmV4cG9ydCBjb25zdCBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCA9IHByb2Nlc3MuZW52Ll9fTkVYVF9UUkFJTElOR19TTEFTSFxuICA/IChwYXRoOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuICAgICAgaWYgKC9cXC5bXi9dK1xcLz8kLy50ZXN0KHBhdGgpKSB7XG4gICAgICAgIHJldHVybiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRoKVxuICAgICAgfSBlbHNlIGlmIChwYXRoLmVuZHNXaXRoKCcvJykpIHtcbiAgICAgICAgcmV0dXJuIHBhdGhcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBwYXRoICsgJy8nXG4gICAgICB9XG4gICAgfVxuICA6IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoXG4iLCJ0eXBlIFJlcXVlc3RJZGxlQ2FsbGJhY2tIYW5kbGUgPSBhbnlcbnR5cGUgUmVxdWVzdElkbGVDYWxsYmFja09wdGlvbnMgPSB7XG4gIHRpbWVvdXQ6IG51bWJlclxufVxudHlwZSBSZXF1ZXN0SWRsZUNhbGxiYWNrRGVhZGxpbmUgPSB7XG4gIHJlYWRvbmx5IGRpZFRpbWVvdXQ6IGJvb2xlYW5cbiAgdGltZVJlbWFpbmluZzogKCkgPT4gbnVtYmVyXG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIFdpbmRvdyB7XG4gICAgcmVxdWVzdElkbGVDYWxsYmFjazogKFxuICAgICAgY2FsbGJhY2s6IChkZWFkbGluZTogUmVxdWVzdElkbGVDYWxsYmFja0RlYWRsaW5lKSA9PiB2b2lkLFxuICAgICAgb3B0cz86IFJlcXVlc3RJZGxlQ2FsbGJhY2tPcHRpb25zXG4gICAgKSA9PiBSZXF1ZXN0SWRsZUNhbGxiYWNrSGFuZGxlXG4gICAgY2FuY2VsSWRsZUNhbGxiYWNrOiAoaWQ6IFJlcXVlc3RJZGxlQ2FsbGJhY2tIYW5kbGUpID0+IHZvaWRcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgcmVxdWVzdElkbGVDYWxsYmFjayA9XG4gICh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgJiYgc2VsZi5yZXF1ZXN0SWRsZUNhbGxiYWNrKSB8fFxuICBmdW5jdGlvbiAoXG4gICAgY2I6IChkZWFkbGluZTogUmVxdWVzdElkbGVDYWxsYmFja0RlYWRsaW5lKSA9PiB2b2lkXG4gICk6IE5vZGVKUy5UaW1lb3V0IHtcbiAgICBsZXQgc3RhcnQgPSBEYXRlLm5vdygpXG4gICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgY2Ioe1xuICAgICAgICBkaWRUaW1lb3V0OiBmYWxzZSxcbiAgICAgICAgdGltZVJlbWFpbmluZzogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBNYXRoLm1heCgwLCA1MCAtIChEYXRlLm5vdygpIC0gc3RhcnQpKVxuICAgICAgICB9LFxuICAgICAgfSlcbiAgICB9LCAxKVxuICB9XG5cbmV4cG9ydCBjb25zdCBjYW5jZWxJZGxlQ2FsbGJhY2sgPVxuICAodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnICYmIHNlbGYuY2FuY2VsSWRsZUNhbGxiYWNrKSB8fFxuICBmdW5jdGlvbiAoaWQ6IFJlcXVlc3RJZGxlQ2FsbGJhY2tIYW5kbGUpIHtcbiAgICByZXR1cm4gY2xlYXJUaW1lb3V0KGlkKVxuICB9XG4iLCJpbXBvcnQgeyBDb21wb25lbnRUeXBlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBDbGllbnRCdWlsZE1hbmlmZXN0IH0gZnJvbSAnLi4vYnVpbGQvd2VicGFjay9wbHVnaW5zL2J1aWxkLW1hbmlmZXN0LXBsdWdpbidcbmltcG9ydCBnZXRBc3NldFBhdGhGcm9tUm91dGUgZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlJ1xuaW1wb3J0IHsgcmVxdWVzdElkbGVDYWxsYmFjayB9IGZyb20gJy4vcmVxdWVzdC1pZGxlLWNhbGxiYWNrJ1xuXG4vLyAzLjhzIHdhcyBhcmJpdHJhcmlseSBjaG9zZW4gYXMgaXQncyB3aGF0IGh0dHBzOi8vd2ViLmRldi9pbnRlcmFjdGl2ZVxuLy8gY29uc2lkZXJzIGFzIFwiR29vZFwiIHRpbWUtdG8taW50ZXJhY3RpdmUuIFdlIG11c3QgYXNzdW1lIHNvbWV0aGluZyB3ZW50XG4vLyB3cm9uZyBiZXlvbmQgdGhpcyBwb2ludCwgYW5kIHRoZW4gZmFsbC1iYWNrIHRvIGEgZnVsbCBwYWdlIHRyYW5zaXRpb24gdG9cbi8vIHNob3cgdGhlIHVzZXIgc29tZXRoaW5nIG9mIHZhbHVlLlxuY29uc3QgTVNfTUFYX0lETEVfREVMQVkgPSAzODAwXG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIFdpbmRvdyB7XG4gICAgX19CVUlMRF9NQU5JRkVTVD86IENsaWVudEJ1aWxkTWFuaWZlc3RcbiAgICBfX0JVSUxEX01BTklGRVNUX0NCPzogRnVuY3Rpb25cbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIExvYWRlZEVudHJ5cG9pbnRTdWNjZXNzIHtcbiAgY29tcG9uZW50OiBDb21wb25lbnRUeXBlXG4gIGV4cG9ydHM6IGFueVxufVxuZXhwb3J0IGludGVyZmFjZSBMb2FkZWRFbnRyeXBvaW50RmFpbHVyZSB7XG4gIGVycm9yOiB1bmtub3duXG59XG5leHBvcnQgdHlwZSBSb3V0ZUVudHJ5cG9pbnQgPSBMb2FkZWRFbnRyeXBvaW50U3VjY2VzcyB8IExvYWRlZEVudHJ5cG9pbnRGYWlsdXJlXG5cbmV4cG9ydCBpbnRlcmZhY2UgUm91dGVTdHlsZVNoZWV0IHtcbiAgaHJlZjogc3RyaW5nXG4gIGNvbnRlbnQ6IHN0cmluZ1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIExvYWRlZFJvdXRlU3VjY2VzcyBleHRlbmRzIExvYWRlZEVudHJ5cG9pbnRTdWNjZXNzIHtcbiAgc3R5bGVzOiBSb3V0ZVN0eWxlU2hlZXRbXVxufVxuZXhwb3J0IGludGVyZmFjZSBMb2FkZWRSb3V0ZUZhaWx1cmUge1xuICBlcnJvcjogdW5rbm93blxufVxuZXhwb3J0IHR5cGUgUm91dGVMb2FkZXJFbnRyeSA9IExvYWRlZFJvdXRlU3VjY2VzcyB8IExvYWRlZFJvdXRlRmFpbHVyZVxuXG5leHBvcnQgdHlwZSBGdXR1cmU8Vj4gPSB7XG4gIHJlc29sdmU6IChlbnRyeXBvaW50OiBWKSA9PiB2b2lkXG4gIGZ1dHVyZTogUHJvbWlzZTxWPlxufVxuZnVuY3Rpb24gd2l0aEZ1dHVyZTxUPihcbiAga2V5OiBzdHJpbmcsXG4gIG1hcDogTWFwPHN0cmluZywgRnV0dXJlPFQ+IHwgVD4sXG4gIGdlbmVyYXRvcj86ICgpID0+IFByb21pc2U8VD5cbik6IFByb21pc2U8VD4ge1xuICBsZXQgZW50cnk6IEZ1dHVyZTxUPiB8IFQgfCB1bmRlZmluZWQgPSBtYXAuZ2V0KGtleSlcbiAgaWYgKGVudHJ5KSB7XG4gICAgaWYgKCdmdXR1cmUnIGluIGVudHJ5KSB7XG4gICAgICByZXR1cm4gZW50cnkuZnV0dXJlXG4gICAgfVxuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoZW50cnkpXG4gIH1cbiAgbGV0IHJlc29sdmVyOiAoZW50cnlwb2ludDogVCkgPT4gdm9pZFxuICBjb25zdCBwcm9tOiBQcm9taXNlPFQ+ID0gbmV3IFByb21pc2U8VD4oKHJlc29sdmUpID0+IHtcbiAgICByZXNvbHZlciA9IHJlc29sdmVcbiAgfSlcbiAgbWFwLnNldChrZXksIChlbnRyeSA9IHsgcmVzb2x2ZTogcmVzb2x2ZXIhLCBmdXR1cmU6IHByb20gfSkpXG4gIHJldHVybiBnZW5lcmF0b3JcbiAgICA/IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZXF1ZW5jZXNcbiAgICAgIGdlbmVyYXRvcigpLnRoZW4oKHZhbHVlKSA9PiAocmVzb2x2ZXIodmFsdWUpLCB2YWx1ZSkpXG4gICAgOiBwcm9tXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUm91dGVMb2FkZXIge1xuICB3aGVuRW50cnlwb2ludChyb3V0ZTogc3RyaW5nKTogUHJvbWlzZTxSb3V0ZUVudHJ5cG9pbnQ+XG4gIG9uRW50cnlwb2ludChyb3V0ZTogc3RyaW5nLCBleGVjdXRlOiAoKSA9PiB1bmtub3duKTogdm9pZFxuICBsb2FkUm91dGUocm91dGU6IHN0cmluZyk6IFByb21pc2U8Um91dGVMb2FkZXJFbnRyeT5cbiAgcHJlZmV0Y2gocm91dGU6IHN0cmluZyk6IFByb21pc2U8dm9pZD5cbn1cblxuZnVuY3Rpb24gaGFzUHJlZmV0Y2gobGluaz86IEhUTUxMaW5rRWxlbWVudCk6IGJvb2xlYW4ge1xuICB0cnkge1xuICAgIGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaW5rJylcbiAgICByZXR1cm4gKFxuICAgICAgLy8gZGV0ZWN0IElFMTEgc2luY2UgaXQgc3VwcG9ydHMgcHJlZmV0Y2ggYnV0IGlzbid0IGRldGVjdGVkXG4gICAgICAvLyB3aXRoIHJlbExpc3Quc3VwcG9ydFxuICAgICAgKCEhd2luZG93Lk1TSW5wdXRNZXRob2RDb250ZXh0ICYmICEhKGRvY3VtZW50IGFzIGFueSkuZG9jdW1lbnRNb2RlKSB8fFxuICAgICAgbGluay5yZWxMaXN0LnN1cHBvcnRzKCdwcmVmZXRjaCcpXG4gICAgKVxuICB9IGNhdGNoIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxufVxuXG5jb25zdCBjYW5QcmVmZXRjaDogYm9vbGVhbiA9IGhhc1ByZWZldGNoKClcblxuZnVuY3Rpb24gcHJlZmV0Y2hWaWFEb20oXG4gIGhyZWY6IHN0cmluZyxcbiAgYXM6IHN0cmluZyxcbiAgbGluaz86IEhUTUxMaW5rRWxlbWVudFxuKTogUHJvbWlzZTxhbnk+IHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXMsIHJlaikgPT4ge1xuICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBsaW5rW3JlbD1cInByZWZldGNoXCJdW2hyZWZePVwiJHtocmVmfVwiXWApKSB7XG4gICAgICByZXR1cm4gcmVzKClcbiAgICB9XG5cbiAgICBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGluaycpXG5cbiAgICAvLyBUaGUgb3JkZXIgb2YgcHJvcGVydHkgYXNzaWdubWVudCBoZXJlIGlzIGludGVudGlvbmFsOlxuICAgIGlmIChhcykgbGluayEuYXMgPSBhc1xuICAgIGxpbmshLnJlbCA9IGBwcmVmZXRjaGBcbiAgICBsaW5rIS5jcm9zc09yaWdpbiA9IHByb2Nlc3MuZW52Ll9fTkVYVF9DUk9TU19PUklHSU4hXG4gICAgbGluayEub25sb2FkID0gcmVzXG4gICAgbGluayEub25lcnJvciA9IHJlalxuXG4gICAgLy8gYGhyZWZgIHNob3VsZCBhbHdheXMgYmUgbGFzdDpcbiAgICBsaW5rIS5ocmVmID0gaHJlZlxuXG4gICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChsaW5rKVxuICB9KVxufVxuXG5jb25zdCBBU1NFVF9MT0FEX0VSUk9SID0gU3ltYm9sKCdBU1NFVF9MT0FEX0VSUk9SJylcbi8vIFRPRE86IHVuZXhwb3J0XG5leHBvcnQgZnVuY3Rpb24gbWFya0Fzc2V0RXJyb3IoZXJyOiBFcnJvcik6IEVycm9yIHtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlcnIsIEFTU0VUX0xPQURfRVJST1IsIHt9KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNBc3NldEVycm9yKGVycj86IEVycm9yKTogYm9vbGVhbiB8IHVuZGVmaW5lZCB7XG4gIHJldHVybiBlcnIgJiYgQVNTRVRfTE9BRF9FUlJPUiBpbiBlcnJcbn1cblxuZnVuY3Rpb24gYXBwZW5kU2NyaXB0KFxuICBzcmM6IHN0cmluZyxcbiAgc2NyaXB0PzogSFRNTFNjcmlwdEVsZW1lbnRcbik6IFByb21pc2U8dW5rbm93bj4ge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpXG5cbiAgICAvLyBUaGUgb3JkZXIgb2YgcHJvcGVydHkgYXNzaWdubWVudCBoZXJlIGlzIGludGVudGlvbmFsLlxuICAgIC8vIDEuIFNldHVwIHN1Y2Nlc3MvZmFpbHVyZSBob29rcyBpbiBjYXNlIHRoZSBicm93c2VyIHN5bmNocm9ub3VzbHlcbiAgICAvLyAgICBleGVjdXRlcyB3aGVuIGBzcmNgIGlzIHNldC5cbiAgICBzY3JpcHQub25sb2FkID0gcmVzb2x2ZVxuICAgIHNjcmlwdC5vbmVycm9yID0gKCkgPT5cbiAgICAgIHJlamVjdChtYXJrQXNzZXRFcnJvcihuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHNjcmlwdDogJHtzcmN9YCkpKVxuXG4gICAgLy8gMi4gQ29uZmlndXJlIHRoZSBjcm9zcy1vcmlnaW4gYXR0cmlidXRlIGJlZm9yZSBzZXR0aW5nIGBzcmNgIGluIGNhc2UgdGhlXG4gICAgLy8gICAgYnJvd3NlciBiZWdpbnMgdG8gZmV0Y2guXG4gICAgc2NyaXB0LmNyb3NzT3JpZ2luID0gcHJvY2Vzcy5lbnYuX19ORVhUX0NST1NTX09SSUdJTiFcblxuICAgIC8vIDMuIEZpbmFsbHksIHNldCB0aGUgc291cmNlIGFuZCBpbmplY3QgaW50byB0aGUgRE9NIGluIGNhc2UgdGhlIGNoaWxkXG4gICAgLy8gICAgbXVzdCBiZSBhcHBlbmRlZCBmb3IgZmV0Y2hpbmcgdG8gc3RhcnQuXG4gICAgc2NyaXB0LnNyYyA9IHNyY1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc2NyaXB0KVxuICB9KVxufVxuXG4vLyBSZXNvbHZlIGEgcHJvbWlzZSB0aGF0IHRpbWVzIG91dCBhZnRlciBnaXZlbiBhbW91bnQgb2YgbWlsbGlzZWNvbmRzLlxuZnVuY3Rpb24gcmVzb2x2ZVByb21pc2VXaXRoVGltZW91dDxUPihcbiAgcDogUHJvbWlzZTxUPixcbiAgbXM6IG51bWJlcixcbiAgZXJyOiBFcnJvclxuKTogUHJvbWlzZTxUPiB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlXG5cbiAgICBwLnRoZW4oKHIpID0+IHtcbiAgICAgIC8vIFJlc29sdmVkLCBjYW5jZWwgdGhlIHRpbWVvdXRcbiAgICAgIGNhbmNlbGxlZCA9IHRydWVcbiAgICAgIHJlc29sdmUocilcbiAgICB9KS5jYXRjaChyZWplY3QpXG5cbiAgICByZXF1ZXN0SWRsZUNhbGxiYWNrKCgpID0+XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgaWYgKCFjYW5jZWxsZWQpIHtcbiAgICAgICAgICByZWplY3QoZXJyKVxuICAgICAgICB9XG4gICAgICB9LCBtcylcbiAgICApXG4gIH0pXG59XG5cbi8vIFRPRE86IHN0b3AgZXhwb3J0aW5nIG9yIGNhY2hlIHRoZSBmYWlsdXJlXG4vLyBJdCdkIGJlIGJlc3QgdG8gc3RvcCBleHBvcnRpbmcgdGhpcy4gSXQncyBhbiBpbXBsZW1lbnRhdGlvbiBkZXRhaWwuIFdlJ3JlXG4vLyBvbmx5IGV4cG9ydGluZyBpdCBmb3IgYmFja3dhcmRzIGNvbXBhdGliaWx0eSB3aXRoIHRoZSBgcGFnZS1sb2FkZXJgLlxuLy8gT25seSBjYWNoZSB0aGlzIHJlc3BvbnNlIGFzIGEgbGFzdCByZXNvcnQgaWYgd2UgY2Fubm90IGVsaW1pbmF0ZSBhbGwgb3RoZXJcbi8vIGNvZGUgYnJhbmNoZXMgdGhhdCB1c2UgdGhlIEJ1aWxkIE1hbmlmZXN0IENhbGxiYWNrIGFuZCBwdXNoIHRoZW0gdGhyb3VnaFxuLy8gdGhlIFJvdXRlIExvYWRlciBpbnRlcmZhY2UuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCgpOiBQcm9taXNlPENsaWVudEJ1aWxkTWFuaWZlc3Q+IHtcbiAgaWYgKHNlbGYuX19CVUlMRF9NQU5JRkVTVCkge1xuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoc2VsZi5fX0JVSUxEX01BTklGRVNUKVxuICB9XG5cbiAgY29uc3Qgb25CdWlsZE1hbmlmZXN0OiBQcm9taXNlPENsaWVudEJ1aWxkTWFuaWZlc3Q+ID0gbmV3IFByb21pc2U8XG4gICAgQ2xpZW50QnVpbGRNYW5pZmVzdFxuICA+KChyZXNvbHZlKSA9PiB7XG4gICAgLy8gTWFuZGF0b3J5IGJlY2F1c2UgdGhpcyBpcyBub3QgY29uY3VycmVudCBzYWZlOlxuICAgIGNvbnN0IGNiID0gc2VsZi5fX0JVSUxEX01BTklGRVNUX0NCXG4gICAgc2VsZi5fX0JVSUxEX01BTklGRVNUX0NCID0gKCkgPT4ge1xuICAgICAgcmVzb2x2ZShzZWxmLl9fQlVJTERfTUFOSUZFU1QpXG4gICAgICBjYiAmJiBjYigpXG4gICAgfVxuICB9KVxuXG4gIHJldHVybiByZXNvbHZlUHJvbWlzZVdpdGhUaW1lb3V0PENsaWVudEJ1aWxkTWFuaWZlc3Q+KFxuICAgIG9uQnVpbGRNYW5pZmVzdCxcbiAgICBNU19NQVhfSURMRV9ERUxBWSxcbiAgICBtYXJrQXNzZXRFcnJvcihuZXcgRXJyb3IoJ0ZhaWxlZCB0byBsb2FkIGNsaWVudCBidWlsZCBtYW5pZmVzdCcpKVxuICApXG59XG5cbmludGVyZmFjZSBSb3V0ZUZpbGVzIHtcbiAgc2NyaXB0czogc3RyaW5nW11cbiAgY3NzOiBzdHJpbmdbXVxufVxuZnVuY3Rpb24gZ2V0RmlsZXNGb3JSb3V0ZShcbiAgYXNzZXRQcmVmaXg6IHN0cmluZyxcbiAgcm91dGU6IHN0cmluZ1xuKTogUHJvbWlzZTxSb3V0ZUZpbGVzPiB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoe1xuICAgICAgc2NyaXB0czogW1xuICAgICAgICBhc3NldFByZWZpeCArXG4gICAgICAgICAgJy9fbmV4dC9zdGF0aWMvY2h1bmtzL3BhZ2VzJyArXG4gICAgICAgICAgZW5jb2RlVVJJKGdldEFzc2V0UGF0aEZyb21Sb3V0ZShyb3V0ZSwgJy5qcycpKSxcbiAgICAgIF0sXG4gICAgICAvLyBTdHlsZXMgYXJlIGhhbmRsZWQgYnkgYHN0eWxlLWxvYWRlcmAgaW4gZGV2ZWxvcG1lbnQ6XG4gICAgICBjc3M6IFtdLFxuICAgIH0pXG4gIH1cbiAgcmV0dXJuIGdldENsaWVudEJ1aWxkTWFuaWZlc3QoKS50aGVuKChtYW5pZmVzdCkgPT4ge1xuICAgIGlmICghKHJvdXRlIGluIG1hbmlmZXN0KSkge1xuICAgICAgdGhyb3cgbWFya0Fzc2V0RXJyb3IobmV3IEVycm9yKGBGYWlsZWQgdG8gbG9va3VwIHJvdXRlOiAke3JvdXRlfWApKVxuICAgIH1cbiAgICBjb25zdCBhbGxGaWxlcyA9IG1hbmlmZXN0W3JvdXRlXS5tYXAoXG4gICAgICAoZW50cnkpID0+IGFzc2V0UHJlZml4ICsgJy9fbmV4dC8nICsgZW5jb2RlVVJJKGVudHJ5KVxuICAgIClcbiAgICByZXR1cm4ge1xuICAgICAgc2NyaXB0czogYWxsRmlsZXMuZmlsdGVyKCh2KSA9PiB2LmVuZHNXaXRoKCcuanMnKSksXG4gICAgICBjc3M6IGFsbEZpbGVzLmZpbHRlcigodikgPT4gdi5lbmRzV2l0aCgnLmNzcycpKSxcbiAgICB9XG4gIH0pXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVJvdXRlTG9hZGVyKGFzc2V0UHJlZml4OiBzdHJpbmcpOiBSb3V0ZUxvYWRlciB7XG4gIGNvbnN0IGVudHJ5cG9pbnRzOiBNYXA8XG4gICAgc3RyaW5nLFxuICAgIEZ1dHVyZTxSb3V0ZUVudHJ5cG9pbnQ+IHwgUm91dGVFbnRyeXBvaW50XG4gID4gPSBuZXcgTWFwKClcbiAgY29uc3QgbG9hZGVkU2NyaXB0czogTWFwPHN0cmluZywgUHJvbWlzZTx1bmtub3duPj4gPSBuZXcgTWFwKClcbiAgY29uc3Qgc3R5bGVTaGVldHM6IE1hcDxzdHJpbmcsIFByb21pc2U8Um91dGVTdHlsZVNoZWV0Pj4gPSBuZXcgTWFwKClcbiAgY29uc3Qgcm91dGVzOiBNYXA8XG4gICAgc3RyaW5nLFxuICAgIEZ1dHVyZTxSb3V0ZUxvYWRlckVudHJ5PiB8IFJvdXRlTG9hZGVyRW50cnlcbiAgPiA9IG5ldyBNYXAoKVxuXG4gIGZ1bmN0aW9uIG1heWJlRXhlY3V0ZVNjcmlwdChzcmM6IHN0cmluZyk6IFByb21pc2U8dW5rbm93bj4ge1xuICAgIGxldCBwcm9tOiBQcm9taXNlPHVua25vd24+IHwgdW5kZWZpbmVkID0gbG9hZGVkU2NyaXB0cy5nZXQoc3JjKVxuICAgIGlmIChwcm9tKSB7XG4gICAgICByZXR1cm4gcHJvbVxuICAgIH1cblxuICAgIC8vIFNraXAgZXhlY3V0aW5nIHNjcmlwdCBpZiBpdCdzIGFscmVhZHkgaW4gdGhlIERPTTpcbiAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihgc2NyaXB0W3NyY149XCIke3NyY31cIl1gKSkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpXG4gICAgfVxuXG4gICAgbG9hZGVkU2NyaXB0cy5zZXQoc3JjLCAocHJvbSA9IGFwcGVuZFNjcmlwdChzcmMpKSlcbiAgICByZXR1cm4gcHJvbVxuICB9XG5cbiAgZnVuY3Rpb24gZmV0Y2hTdHlsZVNoZWV0KGhyZWY6IHN0cmluZyk6IFByb21pc2U8Um91dGVTdHlsZVNoZWV0PiB7XG4gICAgbGV0IHByb206IFByb21pc2U8Um91dGVTdHlsZVNoZWV0PiB8IHVuZGVmaW5lZCA9IHN0eWxlU2hlZXRzLmdldChocmVmKVxuICAgIGlmIChwcm9tKSB7XG4gICAgICByZXR1cm4gcHJvbVxuICAgIH1cblxuICAgIHN0eWxlU2hlZXRzLnNldChcbiAgICAgIGhyZWYsXG4gICAgICAocHJvbSA9IGZldGNoKGhyZWYpXG4gICAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICBpZiAoIXJlcy5vaykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdHlsZXNoZWV0OiAke2hyZWZ9YClcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHJlcy50ZXh0KCkudGhlbigodGV4dCkgPT4gKHsgaHJlZjogaHJlZiwgY29udGVudDogdGV4dCB9KSlcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICB0aHJvdyBtYXJrQXNzZXRFcnJvcihlcnIpXG4gICAgICAgIH0pKVxuICAgIClcbiAgICByZXR1cm4gcHJvbVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICB3aGVuRW50cnlwb2ludChyb3V0ZTogc3RyaW5nKSB7XG4gICAgICByZXR1cm4gd2l0aEZ1dHVyZShyb3V0ZSwgZW50cnlwb2ludHMpXG4gICAgfSxcbiAgICBvbkVudHJ5cG9pbnQocm91dGU6IHN0cmluZywgZXhlY3V0ZTogKCkgPT4gdW5rbm93bikge1xuICAgICAgUHJvbWlzZS5yZXNvbHZlKGV4ZWN1dGUpXG4gICAgICAgIC50aGVuKChmbikgPT4gZm4oKSlcbiAgICAgICAgLnRoZW4oXG4gICAgICAgICAgKGV4cG9ydHM6IGFueSkgPT4gKHtcbiAgICAgICAgICAgIGNvbXBvbmVudDogKGV4cG9ydHMgJiYgZXhwb3J0cy5kZWZhdWx0KSB8fCBleHBvcnRzLFxuICAgICAgICAgICAgZXhwb3J0czogZXhwb3J0cyxcbiAgICAgICAgICB9KSxcbiAgICAgICAgICAoZXJyKSA9PiAoeyBlcnJvcjogZXJyIH0pXG4gICAgICAgIClcbiAgICAgICAgLnRoZW4oKGlucHV0OiBSb3V0ZUVudHJ5cG9pbnQpID0+IHtcbiAgICAgICAgICBjb25zdCBvbGQgPSBlbnRyeXBvaW50cy5nZXQocm91dGUpXG4gICAgICAgICAgZW50cnlwb2ludHMuc2V0KHJvdXRlLCBpbnB1dClcbiAgICAgICAgICBpZiAob2xkICYmICdyZXNvbHZlJyBpbiBvbGQpIG9sZC5yZXNvbHZlKGlucHV0KVxuICAgICAgICB9KVxuICAgIH0sXG4gICAgbG9hZFJvdXRlKHJvdXRlOiBzdHJpbmcpIHtcbiAgICAgIHJldHVybiB3aXRoRnV0dXJlPFJvdXRlTG9hZGVyRW50cnk+KHJvdXRlLCByb3V0ZXMsIGFzeW5jICgpID0+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBjb25zdCB7IHNjcmlwdHMsIGNzcyB9ID0gYXdhaXQgZ2V0RmlsZXNGb3JSb3V0ZShhc3NldFByZWZpeCwgcm91dGUpXG4gICAgICAgICAgY29uc3QgWywgc3R5bGVzXSA9IGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgICAgICAgIGVudHJ5cG9pbnRzLmhhcyhyb3V0ZSlcbiAgICAgICAgICAgICAgPyBbXVxuICAgICAgICAgICAgICA6IFByb21pc2UuYWxsKHNjcmlwdHMubWFwKG1heWJlRXhlY3V0ZVNjcmlwdCkpLFxuICAgICAgICAgICAgUHJvbWlzZS5hbGwoY3NzLm1hcChmZXRjaFN0eWxlU2hlZXQpKSxcbiAgICAgICAgICBdIGFzIGNvbnN0KVxuXG4gICAgICAgICAgY29uc3QgZW50cnlwb2ludDogUm91dGVFbnRyeXBvaW50ID0gYXdhaXQgcmVzb2x2ZVByb21pc2VXaXRoVGltZW91dChcbiAgICAgICAgICAgIHRoaXMud2hlbkVudHJ5cG9pbnQocm91dGUpLFxuICAgICAgICAgICAgTVNfTUFYX0lETEVfREVMQVksXG4gICAgICAgICAgICBtYXJrQXNzZXRFcnJvcihcbiAgICAgICAgICAgICAgbmV3IEVycm9yKGBSb3V0ZSBkaWQgbm90IGNvbXBsZXRlIGxvYWRpbmc6ICR7cm91dGV9YClcbiAgICAgICAgICAgIClcbiAgICAgICAgICApXG5cbiAgICAgICAgICBjb25zdCByZXM6IFJvdXRlTG9hZGVyRW50cnkgPSBPYmplY3QuYXNzaWduPFxuICAgICAgICAgICAgeyBzdHlsZXM6IFJvdXRlU3R5bGVTaGVldFtdIH0sXG4gICAgICAgICAgICBSb3V0ZUVudHJ5cG9pbnRcbiAgICAgICAgICA+KHsgc3R5bGVzIH0sIGVudHJ5cG9pbnQpXG4gICAgICAgICAgcmV0dXJuICdlcnJvcicgaW4gZW50cnlwb2ludCA/IGVudHJ5cG9pbnQgOiByZXNcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgcmV0dXJuIHsgZXJyb3I6IGVyciB9XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSxcbiAgICBwcmVmZXRjaChyb3V0ZTogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vR29vZ2xlQ2hyb21lTGFicy9xdWlja2xpbmsvYmxvYi80NTNhNjYxZmExZmE5NDBlMmQyZTA0NDQ1MjM5OGUzOGM2N2E5OGZiL3NyYy9pbmRleC5tanMjTDExNS1MMTE4XG4gICAgICAvLyBMaWNlbnNlOiBBcGFjaGUgMi4wXG4gICAgICBsZXQgY25cbiAgICAgIGlmICgoY24gPSAobmF2aWdhdG9yIGFzIGFueSkuY29ubmVjdGlvbikpIHtcbiAgICAgICAgLy8gRG9uJ3QgcHJlZmV0Y2ggaWYgdXNpbmcgMkcgb3IgaWYgU2F2ZS1EYXRhIGlzIGVuYWJsZWQuXG4gICAgICAgIGlmIChjbi5zYXZlRGF0YSB8fCAvMmcvLnRlc3QoY24uZWZmZWN0aXZlVHlwZSkpIHJldHVybiBQcm9taXNlLnJlc29sdmUoKVxuICAgICAgfVxuICAgICAgcmV0dXJuIGdldEZpbGVzRm9yUm91dGUoYXNzZXRQcmVmaXgsIHJvdXRlKVxuICAgICAgICAudGhlbigob3V0cHV0KSA9PlxuICAgICAgICAgIFByb21pc2UuYWxsKFxuICAgICAgICAgICAgY2FuUHJlZmV0Y2hcbiAgICAgICAgICAgICAgPyBvdXRwdXQuc2NyaXB0cy5tYXAoKHNjcmlwdCkgPT4gcHJlZmV0Y2hWaWFEb20oc2NyaXB0LCAnc2NyaXB0JykpXG4gICAgICAgICAgICAgIDogW11cbiAgICAgICAgICApXG4gICAgICAgIClcbiAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgIHJlcXVlc3RJZGxlQ2FsbGJhY2soKCkgPT4gdGhpcy5sb2FkUm91dGUocm91dGUpKVxuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goXG4gICAgICAgICAgLy8gc3dhbGxvdyBwcmVmZXRjaCBlcnJvcnNcbiAgICAgICAgICAoKSA9PiB7fVxuICAgICAgICApXG4gICAgfSxcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVSb3V0ZUxvYWRlclxuIiwiLyogZ2xvYmFsIHdpbmRvdyAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJvdXRlciwgeyBOZXh0Um91dGVyIH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQgeyBSb3V0ZXJDb250ZXh0IH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0J1xuXG50eXBlIENsYXNzQXJndW1lbnRzPFQ+ID0gVCBleHRlbmRzIG5ldyAoLi4uYXJnczogaW5mZXIgVSkgPT4gYW55ID8gVSA6IGFueVxuXG50eXBlIFJvdXRlckFyZ3MgPSBDbGFzc0FyZ3VtZW50czx0eXBlb2YgUm91dGVyPlxuXG50eXBlIFNpbmdsZXRvblJvdXRlckJhc2UgPSB7XG4gIHJvdXRlcjogUm91dGVyIHwgbnVsbFxuICByZWFkeUNhbGxiYWNrczogQXJyYXk8KCkgPT4gYW55PlxuICByZWFkeShjYjogKCkgPT4gYW55KTogdm9pZFxufVxuXG5leHBvcnQgeyBSb3V0ZXIsIE5leHRSb3V0ZXIgfVxuXG5leHBvcnQgdHlwZSBTaW5nbGV0b25Sb3V0ZXIgPSBTaW5nbGV0b25Sb3V0ZXJCYXNlICYgTmV4dFJvdXRlclxuXG5jb25zdCBzaW5nbGV0b25Sb3V0ZXI6IFNpbmdsZXRvblJvdXRlckJhc2UgPSB7XG4gIHJvdXRlcjogbnVsbCwgLy8gaG9sZHMgdGhlIGFjdHVhbCByb3V0ZXIgaW5zdGFuY2VcbiAgcmVhZHlDYWxsYmFja3M6IFtdLFxuICByZWFkeShjYjogKCkgPT4gdm9pZCkge1xuICAgIGlmICh0aGlzLnJvdXRlcikgcmV0dXJuIGNiKClcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRoaXMucmVhZHlDYWxsYmFja3MucHVzaChjYilcbiAgICB9XG4gIH0sXG59XG5cbi8vIENyZWF0ZSBwdWJsaWMgcHJvcGVydGllcyBhbmQgbWV0aG9kcyBvZiB0aGUgcm91dGVyIGluIHRoZSBzaW5nbGV0b25Sb3V0ZXJcbmNvbnN0IHVybFByb3BlcnR5RmllbGRzID0gW1xuICAncGF0aG5hbWUnLFxuICAncm91dGUnLFxuICAncXVlcnknLFxuICAnYXNQYXRoJyxcbiAgJ2NvbXBvbmVudHMnLFxuICAnaXNGYWxsYmFjaycsXG4gICdiYXNlUGF0aCcsXG4gICdsb2NhbGUnLFxuICAnbG9jYWxlcycsXG4gICdkZWZhdWx0TG9jYWxlJyxcbiAgJ2lzUmVhZHknLFxuICAnaXNQcmV2aWV3JyxcbiAgJ2lzTG9jYWxlRG9tYWluJyxcbl1cbmNvbnN0IHJvdXRlckV2ZW50cyA9IFtcbiAgJ3JvdXRlQ2hhbmdlU3RhcnQnLFxuICAnYmVmb3JlSGlzdG9yeUNoYW5nZScsXG4gICdyb3V0ZUNoYW5nZUNvbXBsZXRlJyxcbiAgJ3JvdXRlQ2hhbmdlRXJyb3InLFxuICAnaGFzaENoYW5nZVN0YXJ0JyxcbiAgJ2hhc2hDaGFuZ2VDb21wbGV0ZScsXG5dXG5jb25zdCBjb3JlTWV0aG9kRmllbGRzID0gW1xuICAncHVzaCcsXG4gICdyZXBsYWNlJyxcbiAgJ3JlbG9hZCcsXG4gICdiYWNrJyxcbiAgJ3ByZWZldGNoJyxcbiAgJ2JlZm9yZVBvcFN0YXRlJyxcbl1cblxuLy8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwgJ2V2ZW50cycsIHtcbiAgZ2V0KCkge1xuICAgIHJldHVybiBSb3V0ZXIuZXZlbnRzXG4gIH0sXG59KVxuXG51cmxQcm9wZXJ0eUZpZWxkcy5mb3JFYWNoKChmaWVsZDogc3RyaW5nKSA9PiB7XG4gIC8vIEhlcmUgd2UgbmVlZCB0byB1c2UgT2JqZWN0LmRlZmluZVByb3BlcnR5IGJlY2F1c2UsIHdlIG5lZWQgdG8gcmV0dXJuXG4gIC8vIHRoZSBwcm9wZXJ0eSBhc3NpZ25lZCB0byB0aGUgYWN0dWFsIHJvdXRlclxuICAvLyBUaGUgdmFsdWUgbWlnaHQgZ2V0IGNoYW5nZWQgYXMgd2UgY2hhbmdlIHJvdXRlcyBhbmQgdGhpcyBpcyB0aGVcbiAgLy8gcHJvcGVyIHdheSB0byBhY2Nlc3MgaXRcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwgZmllbGQsIHtcbiAgICBnZXQoKSB7XG4gICAgICBjb25zdCByb3V0ZXIgPSBnZXRSb3V0ZXIoKSBhcyBhbnlcbiAgICAgIHJldHVybiByb3V0ZXJbZmllbGRdIGFzIHN0cmluZ1xuICAgIH0sXG4gIH0pXG59KVxuXG5jb3JlTWV0aG9kRmllbGRzLmZvckVhY2goKGZpZWxkOiBzdHJpbmcpID0+IHtcbiAgLy8gV2UgZG9uJ3QgcmVhbGx5IGtub3cgdGhlIHR5cGVzIGhlcmUsIHNvIHdlIGFkZCB0aGVtIGxhdGVyIGluc3RlYWRcbiAgOyhzaW5nbGV0b25Sb3V0ZXIgYXMgYW55KVtmaWVsZF0gPSAoLi4uYXJnczogYW55W10pID0+IHtcbiAgICBjb25zdCByb3V0ZXIgPSBnZXRSb3V0ZXIoKSBhcyBhbnlcbiAgICByZXR1cm4gcm91dGVyW2ZpZWxkXSguLi5hcmdzKVxuICB9XG59KVxuXG5yb3V0ZXJFdmVudHMuZm9yRWFjaCgoZXZlbnQ6IHN0cmluZykgPT4ge1xuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHkoKCkgPT4ge1xuICAgIFJvdXRlci5ldmVudHMub24oZXZlbnQsICguLi5hcmdzKSA9PiB7XG4gICAgICBjb25zdCBldmVudEZpZWxkID0gYG9uJHtldmVudC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKX0ke2V2ZW50LnN1YnN0cmluZyhcbiAgICAgICAgMVxuICAgICAgKX1gXG4gICAgICBjb25zdCBfc2luZ2xldG9uUm91dGVyID0gc2luZ2xldG9uUm91dGVyIGFzIGFueVxuICAgICAgaWYgKF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0pIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKC4uLmFyZ3MpXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYEVycm9yIHdoZW4gcnVubmluZyB0aGUgUm91dGVyIGV2ZW50OiAke2V2ZW50RmllbGR9YClcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGAke2Vyci5tZXNzYWdlfVxcbiR7ZXJyLnN0YWNrfWApXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICB9KVxufSlcblxuZnVuY3Rpb24gZ2V0Um91dGVyKCk6IFJvdXRlciB7XG4gIGlmICghc2luZ2xldG9uUm91dGVyLnJvdXRlcikge1xuICAgIGNvbnN0IG1lc3NhZ2UgPVxuICAgICAgJ05vIHJvdXRlciBpbnN0YW5jZSBmb3VuZC5cXG4nICtcbiAgICAgICdZb3Ugc2hvdWxkIG9ubHkgdXNlIFwibmV4dC9yb3V0ZXJcIiBpbnNpZGUgdGhlIGNsaWVudCBzaWRlIG9mIHlvdXIgYXBwLlxcbidcbiAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgfVxuICByZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlclxufVxuXG4vLyBFeHBvcnQgdGhlIHNpbmdsZXRvblJvdXRlciBhbmQgdGhpcyBpcyB0aGUgcHVibGljIEFQSS5cbmV4cG9ydCBkZWZhdWx0IHNpbmdsZXRvblJvdXRlciBhcyBTaW5nbGV0b25Sb3V0ZXJcblxuLy8gUmVleHBvcnQgdGhlIHdpdGhSb3V0ZSBIT0NcbmV4cG9ydCB7IGRlZmF1bHQgYXMgd2l0aFJvdXRlciB9IGZyb20gJy4vd2l0aC1yb3V0ZXInXG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VSb3V0ZXIoKTogTmV4dFJvdXRlciB7XG4gIHJldHVybiBSZWFjdC51c2VDb250ZXh0KFJvdXRlckNvbnRleHQpXG59XG5cbi8vIElOVEVSTkFMIEFQSVNcbi8vIC0tLS0tLS0tLS0tLS1cbi8vIChkbyBub3QgdXNlIGZvbGxvd2luZyBleHBvcnRzIGluc2lkZSB0aGUgYXBwKVxuXG4vLyBDcmVhdGUgYSByb3V0ZXIgYW5kIGFzc2lnbiBpdCBhcyB0aGUgc2luZ2xldG9uIGluc3RhbmNlLlxuLy8gVGhpcyBpcyB1c2VkIGluIGNsaWVudCBzaWRlIHdoZW4gd2UgYXJlIGluaXRpbGl6aW5nIHRoZSBhcHAuXG4vLyBUaGlzIHNob3VsZCAqKm5vdCoqIHVzZSBpbnNpZGUgdGhlIHNlcnZlci5cbmV4cG9ydCBjb25zdCBjcmVhdGVSb3V0ZXIgPSAoLi4uYXJnczogUm91dGVyQXJncyk6IFJvdXRlciA9PiB7XG4gIHNpbmdsZXRvblJvdXRlci5yb3V0ZXIgPSBuZXcgUm91dGVyKC4uLmFyZ3MpXG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcy5mb3JFYWNoKChjYikgPT4gY2IoKSlcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzID0gW11cblxuICByZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlclxufVxuXG4vLyBUaGlzIGZ1bmN0aW9uIGlzIHVzZWQgdG8gY3JlYXRlIHRoZSBgd2l0aFJvdXRlcmAgcm91dGVyIGluc3RhbmNlXG5leHBvcnQgZnVuY3Rpb24gbWFrZVB1YmxpY1JvdXRlckluc3RhbmNlKHJvdXRlcjogUm91dGVyKTogTmV4dFJvdXRlciB7XG4gIGNvbnN0IF9yb3V0ZXIgPSByb3V0ZXIgYXMgYW55XG4gIGNvbnN0IGluc3RhbmNlID0ge30gYXMgYW55XG5cbiAgZm9yIChjb25zdCBwcm9wZXJ0eSBvZiB1cmxQcm9wZXJ0eUZpZWxkcykge1xuICAgIGlmICh0eXBlb2YgX3JvdXRlcltwcm9wZXJ0eV0gPT09ICdvYmplY3QnKSB7XG4gICAgICBpbnN0YW5jZVtwcm9wZXJ0eV0gPSBPYmplY3QuYXNzaWduKFxuICAgICAgICBBcnJheS5pc0FycmF5KF9yb3V0ZXJbcHJvcGVydHldKSA/IFtdIDoge30sXG4gICAgICAgIF9yb3V0ZXJbcHJvcGVydHldXG4gICAgICApIC8vIG1ha2VzIHN1cmUgcXVlcnkgaXMgbm90IHN0YXRlZnVsXG4gICAgICBjb250aW51ZVxuICAgIH1cblxuICAgIGluc3RhbmNlW3Byb3BlcnR5XSA9IF9yb3V0ZXJbcHJvcGVydHldXG4gIH1cblxuICAvLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG4gIGluc3RhbmNlLmV2ZW50cyA9IFJvdXRlci5ldmVudHNcblxuICBjb3JlTWV0aG9kRmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gICAgaW5zdGFuY2VbZmllbGRdID0gKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgICByZXR1cm4gX3JvdXRlcltmaWVsZF0oLi4uYXJncylcbiAgICB9XG4gIH0pXG5cbiAgcmV0dXJuIGluc3RhbmNlXG59XG4iLCJpbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQge1xuICByZXF1ZXN0SWRsZUNhbGxiYWNrLFxuICBjYW5jZWxJZGxlQ2FsbGJhY2ssXG59IGZyb20gJy4vcmVxdWVzdC1pZGxlLWNhbGxiYWNrJ1xuXG50eXBlIFVzZUludGVyc2VjdGlvbk9ic2VydmVySW5pdCA9IFBpY2s8SW50ZXJzZWN0aW9uT2JzZXJ2ZXJJbml0LCAncm9vdE1hcmdpbic+XG50eXBlIFVzZUludGVyc2VjdGlvbiA9IHsgZGlzYWJsZWQ/OiBib29sZWFuIH0gJiBVc2VJbnRlcnNlY3Rpb25PYnNlcnZlckluaXRcbnR5cGUgT2JzZXJ2ZUNhbGxiYWNrID0gKGlzVmlzaWJsZTogYm9vbGVhbikgPT4gdm9pZFxudHlwZSBPYnNlcnZlciA9IHtcbiAgaWQ6IHN0cmluZ1xuICBvYnNlcnZlcjogSW50ZXJzZWN0aW9uT2JzZXJ2ZXJcbiAgZWxlbWVudHM6IE1hcDxFbGVtZW50LCBPYnNlcnZlQ2FsbGJhY2s+XG59XG5cbmNvbnN0IGhhc0ludGVyc2VjdGlvbk9ic2VydmVyID0gdHlwZW9mIEludGVyc2VjdGlvbk9ic2VydmVyICE9PSAndW5kZWZpbmVkJ1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlSW50ZXJzZWN0aW9uPFQgZXh0ZW5kcyBFbGVtZW50Pih7XG4gIHJvb3RNYXJnaW4sXG4gIGRpc2FibGVkLFxufTogVXNlSW50ZXJzZWN0aW9uKTogWyhlbGVtZW50OiBUIHwgbnVsbCkgPT4gdm9pZCwgYm9vbGVhbl0ge1xuICBjb25zdCBpc0Rpc2FibGVkOiBib29sZWFuID0gZGlzYWJsZWQgfHwgIWhhc0ludGVyc2VjdGlvbk9ic2VydmVyXG5cbiAgY29uc3QgdW5vYnNlcnZlID0gdXNlUmVmPEZ1bmN0aW9uPigpXG4gIGNvbnN0IFt2aXNpYmxlLCBzZXRWaXNpYmxlXSA9IHVzZVN0YXRlKGZhbHNlKVxuXG4gIGNvbnN0IHNldFJlZiA9IHVzZUNhbGxiYWNrKFxuICAgIChlbDogVCB8IG51bGwpID0+IHtcbiAgICAgIGlmICh1bm9ic2VydmUuY3VycmVudCkge1xuICAgICAgICB1bm9ic2VydmUuY3VycmVudCgpXG4gICAgICAgIHVub2JzZXJ2ZS5jdXJyZW50ID0gdW5kZWZpbmVkXG4gICAgICB9XG5cbiAgICAgIGlmIChpc0Rpc2FibGVkIHx8IHZpc2libGUpIHJldHVyblxuXG4gICAgICBpZiAoZWwgJiYgZWwudGFnTmFtZSkge1xuICAgICAgICB1bm9ic2VydmUuY3VycmVudCA9IG9ic2VydmUoXG4gICAgICAgICAgZWwsXG4gICAgICAgICAgKGlzVmlzaWJsZSkgPT4gaXNWaXNpYmxlICYmIHNldFZpc2libGUoaXNWaXNpYmxlKSxcbiAgICAgICAgICB7IHJvb3RNYXJnaW4gfVxuICAgICAgICApXG4gICAgICB9XG4gICAgfSxcbiAgICBbaXNEaXNhYmxlZCwgcm9vdE1hcmdpbiwgdmlzaWJsZV1cbiAgKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFoYXNJbnRlcnNlY3Rpb25PYnNlcnZlcikge1xuICAgICAgaWYgKCF2aXNpYmxlKSB7XG4gICAgICAgIGNvbnN0IGlkbGVDYWxsYmFjayA9IHJlcXVlc3RJZGxlQ2FsbGJhY2soKCkgPT4gc2V0VmlzaWJsZSh0cnVlKSlcbiAgICAgICAgcmV0dXJuICgpID0+IGNhbmNlbElkbGVDYWxsYmFjayhpZGxlQ2FsbGJhY2spXG4gICAgICB9XG4gICAgfVxuICB9LCBbdmlzaWJsZV0pXG5cbiAgcmV0dXJuIFtzZXRSZWYsIHZpc2libGVdXG59XG5cbmZ1bmN0aW9uIG9ic2VydmUoXG4gIGVsZW1lbnQ6IEVsZW1lbnQsXG4gIGNhbGxiYWNrOiBPYnNlcnZlQ2FsbGJhY2ssXG4gIG9wdGlvbnM6IFVzZUludGVyc2VjdGlvbk9ic2VydmVySW5pdFxuKTogKCkgPT4gdm9pZCB7XG4gIGNvbnN0IHsgaWQsIG9ic2VydmVyLCBlbGVtZW50cyB9ID0gY3JlYXRlT2JzZXJ2ZXIob3B0aW9ucylcbiAgZWxlbWVudHMuc2V0KGVsZW1lbnQsIGNhbGxiYWNrKVxuXG4gIG9ic2VydmVyLm9ic2VydmUoZWxlbWVudClcbiAgcmV0dXJuIGZ1bmN0aW9uIHVub2JzZXJ2ZSgpOiB2b2lkIHtcbiAgICBlbGVtZW50cy5kZWxldGUoZWxlbWVudClcbiAgICBvYnNlcnZlci51bm9ic2VydmUoZWxlbWVudClcblxuICAgIC8vIERlc3Ryb3kgb2JzZXJ2ZXIgd2hlbiB0aGVyZSdzIG5vdGhpbmcgbGVmdCB0byB3YXRjaDpcbiAgICBpZiAoZWxlbWVudHMuc2l6ZSA9PT0gMCkge1xuICAgICAgb2JzZXJ2ZXIuZGlzY29ubmVjdCgpXG4gICAgICBvYnNlcnZlcnMuZGVsZXRlKGlkKVxuICAgIH1cbiAgfVxufVxuXG5jb25zdCBvYnNlcnZlcnMgPSBuZXcgTWFwPHN0cmluZywgT2JzZXJ2ZXI+KClcbmZ1bmN0aW9uIGNyZWF0ZU9ic2VydmVyKG9wdGlvbnM6IFVzZUludGVyc2VjdGlvbk9ic2VydmVySW5pdCk6IE9ic2VydmVyIHtcbiAgY29uc3QgaWQgPSBvcHRpb25zLnJvb3RNYXJnaW4gfHwgJydcbiAgbGV0IGluc3RhbmNlID0gb2JzZXJ2ZXJzLmdldChpZClcbiAgaWYgKGluc3RhbmNlKSB7XG4gICAgcmV0dXJuIGluc3RhbmNlXG4gIH1cblxuICBjb25zdCBlbGVtZW50cyA9IG5ldyBNYXA8RWxlbWVudCwgT2JzZXJ2ZUNhbGxiYWNrPigpXG4gIGNvbnN0IG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKChlbnRyaWVzKSA9PiB7XG4gICAgZW50cmllcy5mb3JFYWNoKChlbnRyeSkgPT4ge1xuICAgICAgY29uc3QgY2FsbGJhY2sgPSBlbGVtZW50cy5nZXQoZW50cnkudGFyZ2V0KVxuICAgICAgY29uc3QgaXNWaXNpYmxlID0gZW50cnkuaXNJbnRlcnNlY3RpbmcgfHwgZW50cnkuaW50ZXJzZWN0aW9uUmF0aW8gPiAwXG4gICAgICBpZiAoY2FsbGJhY2sgJiYgaXNWaXNpYmxlKSB7XG4gICAgICAgIGNhbGxiYWNrKGlzVmlzaWJsZSlcbiAgICAgIH1cbiAgICB9KVxuICB9LCBvcHRpb25zKVxuXG4gIG9ic2VydmVycy5zZXQoXG4gICAgaWQsXG4gICAgKGluc3RhbmNlID0ge1xuICAgICAgaWQsXG4gICAgICBvYnNlcnZlcixcbiAgICAgIGVsZW1lbnRzLFxuICAgIH0pXG4gIClcbiAgcmV0dXJuIGluc3RhbmNlXG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBOZXh0Q29tcG9uZW50VHlwZSwgTmV4dFBhZ2VDb250ZXh0IH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3V0aWxzJ1xuaW1wb3J0IHsgTmV4dFJvdXRlciwgdXNlUm91dGVyIH0gZnJvbSAnLi9yb3V0ZXInXG5cbmV4cG9ydCB0eXBlIFdpdGhSb3V0ZXJQcm9wcyA9IHtcbiAgcm91dGVyOiBOZXh0Um91dGVyXG59XG5cbmV4cG9ydCB0eXBlIEV4Y2x1ZGVSb3V0ZXJQcm9wczxQPiA9IFBpY2s8XG4gIFAsXG4gIEV4Y2x1ZGU8a2V5b2YgUCwga2V5b2YgV2l0aFJvdXRlclByb3BzPlxuPlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB3aXRoUm91dGVyPFxuICBQIGV4dGVuZHMgV2l0aFJvdXRlclByb3BzLFxuICBDID0gTmV4dFBhZ2VDb250ZXh0XG4+KFxuICBDb21wb3NlZENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8QywgYW55LCBQPlxuKTogUmVhY3QuQ29tcG9uZW50VHlwZTxFeGNsdWRlUm91dGVyUHJvcHM8UD4+IHtcbiAgZnVuY3Rpb24gV2l0aFJvdXRlcldyYXBwZXIocHJvcHM6IGFueSk6IEpTWC5FbGVtZW50IHtcbiAgICByZXR1cm4gPENvbXBvc2VkQ29tcG9uZW50IHJvdXRlcj17dXNlUm91dGVyKCl9IHsuLi5wcm9wc30gLz5cbiAgfVxuXG4gIFdpdGhSb3V0ZXJXcmFwcGVyLmdldEluaXRpYWxQcm9wcyA9IENvbXBvc2VkQ29tcG9uZW50LmdldEluaXRpYWxQcm9wc1xuICAvLyBUaGlzIGlzIG5lZWRlZCB0byBhbGxvdyBjaGVja2luZyBmb3IgY3VzdG9tIGdldEluaXRpYWxQcm9wcyBpbiBfYXBwXG4gIDsoV2l0aFJvdXRlcldyYXBwZXIgYXMgYW55KS5vcmlnR2V0SW5pdGlhbFByb3BzID0gKENvbXBvc2VkQ29tcG9uZW50IGFzIGFueSkub3JpZ0dldEluaXRpYWxQcm9wc1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGNvbnN0IG5hbWUgPVxuICAgICAgQ29tcG9zZWRDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9zZWRDb21wb25lbnQubmFtZSB8fCAnVW5rbm93bidcbiAgICBXaXRoUm91dGVyV3JhcHBlci5kaXNwbGF5TmFtZSA9IGB3aXRoUm91dGVyKCR7bmFtZX0pYFxuICB9XG5cbiAgcmV0dXJuIFdpdGhSb3V0ZXJXcmFwcGVyXG59XG4iLCJleHBvcnQgZnVuY3Rpb24gbm9ybWFsaXplTG9jYWxlUGF0aChcbiAgcGF0aG5hbWU6IHN0cmluZyxcbiAgbG9jYWxlcz86IHN0cmluZ1tdXG4pOiB7XG4gIGRldGVjdGVkTG9jYWxlPzogc3RyaW5nXG4gIHBhdGhuYW1lOiBzdHJpbmdcbn0ge1xuICBsZXQgZGV0ZWN0ZWRMb2NhbGU6IHN0cmluZyB8IHVuZGVmaW5lZFxuICAvLyBmaXJzdCBpdGVtIHdpbGwgYmUgZW1wdHkgc3RyaW5nIGZyb20gc3BsaXR0aW5nIGF0IGZpcnN0IGNoYXJcbiAgY29uc3QgcGF0aG5hbWVQYXJ0cyA9IHBhdGhuYW1lLnNwbGl0KCcvJylcblxuICA7KGxvY2FsZXMgfHwgW10pLnNvbWUoKGxvY2FsZSkgPT4ge1xuICAgIGlmIChwYXRobmFtZVBhcnRzWzFdLnRvTG93ZXJDYXNlKCkgPT09IGxvY2FsZS50b0xvd2VyQ2FzZSgpKSB7XG4gICAgICBkZXRlY3RlZExvY2FsZSA9IGxvY2FsZVxuICAgICAgcGF0aG5hbWVQYXJ0cy5zcGxpY2UoMSwgMSlcbiAgICAgIHBhdGhuYW1lID0gcGF0aG5hbWVQYXJ0cy5qb2luKCcvJykgfHwgJy8nXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2VcbiAgfSlcblxuICByZXR1cm4ge1xuICAgIHBhdGhuYW1lLFxuICAgIGRldGVjdGVkTG9jYWxlLFxuICB9XG59XG4iLCIvKlxuTUlUIExpY2Vuc2VcblxuQ29weXJpZ2h0IChjKSBKYXNvbiBNaWxsZXIgKGh0dHBzOi8vamFzb25mb3JtYXQuY29tLylcblxuUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuKi9cblxuLy8gVGhpcyBmaWxlIGlzIGJhc2VkIG9uIGh0dHBzOi8vZ2l0aHViLmNvbS9kZXZlbG9waXQvbWl0dC9ibG9iL3YxLjEuMy9zcmMvaW5kZXguanNcbi8vIEl0J3MgYmVlbiBlZGl0ZWQgZm9yIHRoZSBuZWVkcyBvZiB0aGlzIHNjcmlwdFxuLy8gU2VlIHRoZSBMSUNFTlNFIGF0IHRoZSB0b3Agb2YgdGhlIGZpbGVcblxudHlwZSBIYW5kbGVyID0gKC4uLmV2dHM6IGFueVtdKSA9PiB2b2lkXG5cbmV4cG9ydCB0eXBlIE1pdHRFbWl0dGVyID0ge1xuICBvbih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpOiB2b2lkXG4gIG9mZih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpOiB2b2lkXG4gIGVtaXQodHlwZTogc3RyaW5nLCAuLi5ldnRzOiBhbnlbXSk6IHZvaWRcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWl0dCgpOiBNaXR0RW1pdHRlciB7XG4gIGNvbnN0IGFsbDogeyBbczogc3RyaW5nXTogSGFuZGxlcltdIH0gPSBPYmplY3QuY3JlYXRlKG51bGwpXG5cbiAgcmV0dXJuIHtcbiAgICBvbih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpIHtcbiAgICAgIDsoYWxsW3R5cGVdIHx8IChhbGxbdHlwZV0gPSBbXSkpLnB1c2goaGFuZGxlcilcbiAgICB9LFxuXG4gICAgb2ZmKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcikge1xuICAgICAgaWYgKGFsbFt0eXBlXSkge1xuICAgICAgICBhbGxbdHlwZV0uc3BsaWNlKGFsbFt0eXBlXS5pbmRleE9mKGhhbmRsZXIpID4+PiAwLCAxKVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBlbWl0KHR5cGU6IHN0cmluZywgLi4uZXZ0czogYW55W10pIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBhcnJheS1jYWxsYmFjay1yZXR1cm5cbiAgICAgIDsoYWxsW3R5cGVdIHx8IFtdKS5zbGljZSgpLm1hcCgoaGFuZGxlcjogSGFuZGxlcikgPT4ge1xuICAgICAgICBoYW5kbGVyKC4uLmV2dHMpXG4gICAgICB9KVxuICAgIH0sXG4gIH1cbn1cbiIsIi8qIGdsb2JhbCBfX05FWFRfREFUQV9fICovXG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1jb25zb2xlXG5pbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgQ29tcG9uZW50VHlwZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHtcbiAgbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2gsXG4gIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoLFxufSBmcm9tICcuLi8uLi8uLi9jbGllbnQvbm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoJ1xuaW1wb3J0IHsgR29vZFBhZ2VDYWNoZSwgU3R5bGVTaGVldFR1cGxlIH0gZnJvbSAnLi4vLi4vLi4vY2xpZW50L3BhZ2UtbG9hZGVyJ1xuaW1wb3J0IHtcbiAgZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCxcbiAgaXNBc3NldEVycm9yLFxuICBtYXJrQXNzZXRFcnJvcixcbn0gZnJvbSAnLi4vLi4vLi4vY2xpZW50L3JvdXRlLWxvYWRlcidcbmltcG9ydCB7IERvbWFpbkxvY2FsZXMgfSBmcm9tICcuLi8uLi9zZXJ2ZXIvY29uZmlnJ1xuaW1wb3J0IHsgZGVub3JtYWxpemVQYWdlUGF0aCB9IGZyb20gJy4uLy4uL3NlcnZlci9kZW5vcm1hbGl6ZS1wYWdlLXBhdGgnXG5pbXBvcnQgeyBub3JtYWxpemVMb2NhbGVQYXRoIH0gZnJvbSAnLi4vaTE4bi9ub3JtYWxpemUtbG9jYWxlLXBhdGgnXG5pbXBvcnQgbWl0dCwgeyBNaXR0RW1pdHRlciB9IGZyb20gJy4uL21pdHQnXG5pbXBvcnQge1xuICBBcHBDb250ZXh0VHlwZSxcbiAgZm9ybWF0V2l0aFZhbGlkYXRpb24sXG4gIGdldExvY2F0aW9uT3JpZ2luLFxuICBnZXRVUkwsXG4gIGxvYWRHZXRJbml0aWFsUHJvcHMsXG4gIE5leHRQYWdlQ29udGV4dCxcbiAgU1QsXG4gIE5FWFRfREFUQSxcbn0gZnJvbSAnLi4vdXRpbHMnXG5pbXBvcnQgeyBpc0R5bmFtaWNSb3V0ZSB9IGZyb20gJy4vdXRpbHMvaXMtZHluYW1pYydcbmltcG9ydCB7IHBhcnNlUmVsYXRpdmVVcmwgfSBmcm9tICcuL3V0aWxzL3BhcnNlLXJlbGF0aXZlLXVybCdcbmltcG9ydCB7IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkgfSBmcm9tICcuL3V0aWxzL3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHJlc29sdmVSZXdyaXRlcyBmcm9tICcuL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXMnXG5pbXBvcnQgeyBnZXRSb3V0ZU1hdGNoZXIgfSBmcm9tICcuL3V0aWxzL3JvdXRlLW1hdGNoZXInXG5pbXBvcnQgeyBnZXRSb3V0ZVJlZ2V4IH0gZnJvbSAnLi91dGlscy9yb3V0ZS1yZWdleCdcblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgV2luZG93IHtcbiAgICAvKiBwcm9kICovXG4gICAgX19ORVhUX0RBVEFfXzogTkVYVF9EQVRBXG4gIH1cbn1cblxuaW50ZXJmYWNlIFJvdXRlUHJvcGVydGllcyB7XG4gIHNoYWxsb3c6IGJvb2xlYW5cbn1cblxuaW50ZXJmYWNlIFRyYW5zaXRpb25PcHRpb25zIHtcbiAgc2hhbGxvdz86IGJvb2xlYW5cbiAgbG9jYWxlPzogc3RyaW5nIHwgZmFsc2VcbiAgc2Nyb2xsPzogYm9vbGVhblxufVxuXG5pbnRlcmZhY2UgTmV4dEhpc3RvcnlTdGF0ZSB7XG4gIHVybDogc3RyaW5nXG4gIGFzOiBzdHJpbmdcbiAgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnNcbn1cblxudHlwZSBIaXN0b3J5U3RhdGUgPVxuICB8IG51bGxcbiAgfCB7IF9fTjogZmFsc2UgfVxuICB8ICh7IF9fTjogdHJ1ZTsgaWR4OiBudW1iZXIgfSAmIE5leHRIaXN0b3J5U3RhdGUpXG5cbmxldCBkZXRlY3REb21haW5Mb2NhbGU6IHR5cGVvZiBpbXBvcnQoJy4uL2kxOG4vZGV0ZWN0LWRvbWFpbi1sb2NhbGUnKS5kZXRlY3REb21haW5Mb2NhbGVcblxuaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgZGV0ZWN0RG9tYWluTG9jYWxlID0gcmVxdWlyZSgnLi4vaTE4bi9kZXRlY3QtZG9tYWluLWxvY2FsZScpXG4gICAgLmRldGVjdERvbWFpbkxvY2FsZVxufVxuXG5jb25zdCBiYXNlUGF0aCA9IChwcm9jZXNzLmVudi5fX05FWFRfUk9VVEVSX0JBU0VQQVRIIGFzIHN0cmluZykgfHwgJydcblxuZnVuY3Rpb24gYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpIHtcbiAgcmV0dXJuIE9iamVjdC5hc3NpZ24obmV3IEVycm9yKCdSb3V0ZSBDYW5jZWxsZWQnKSwge1xuICAgIGNhbmNlbGxlZDogdHJ1ZSxcbiAgfSlcbn1cblxuZnVuY3Rpb24gYWRkUGF0aFByZWZpeChwYXRoOiBzdHJpbmcsIHByZWZpeD86IHN0cmluZykge1xuICByZXR1cm4gcHJlZml4ICYmIHBhdGguc3RhcnRzV2l0aCgnLycpXG4gICAgPyBwYXRoID09PSAnLydcbiAgICAgID8gbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2gocHJlZml4KVxuICAgICAgOiBgJHtwcmVmaXh9JHtwYXRoTm9RdWVyeUhhc2gocGF0aCkgPT09ICcvJyA/IHBhdGguc3Vic3RyaW5nKDEpIDogcGF0aH1gXG4gICAgOiBwYXRoXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREb21haW5Mb2NhbGUoXG4gIHBhdGg6IHN0cmluZyxcbiAgbG9jYWxlPzogc3RyaW5nIHwgZmFsc2UsXG4gIGxvY2FsZXM/OiBzdHJpbmdbXSxcbiAgZG9tYWluTG9jYWxlcz86IERvbWFpbkxvY2FsZXNcbikge1xuICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgIGxvY2FsZSA9IGxvY2FsZSB8fCBub3JtYWxpemVMb2NhbGVQYXRoKHBhdGgsIGxvY2FsZXMpLmRldGVjdGVkTG9jYWxlXG5cbiAgICBjb25zdCBkZXRlY3RlZERvbWFpbiA9IGRldGVjdERvbWFpbkxvY2FsZShkb21haW5Mb2NhbGVzLCB1bmRlZmluZWQsIGxvY2FsZSlcblxuICAgIGlmIChkZXRlY3RlZERvbWFpbikge1xuICAgICAgcmV0dXJuIGBodHRwJHtkZXRlY3RlZERvbWFpbi5odHRwID8gJycgOiAncyd9Oi8vJHtkZXRlY3RlZERvbWFpbi5kb21haW59JHtcbiAgICAgICAgYmFzZVBhdGggfHwgJydcbiAgICAgIH0ke2xvY2FsZSA9PT0gZGV0ZWN0ZWREb21haW4uZGVmYXVsdExvY2FsZSA/ICcnIDogYC8ke2xvY2FsZX1gfSR7cGF0aH1gXG4gICAgfVxuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRMb2NhbGUoXG4gIHBhdGg6IHN0cmluZyxcbiAgbG9jYWxlPzogc3RyaW5nIHwgZmFsc2UsXG4gIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcbikge1xuICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgIHJldHVybiBsb2NhbGUgJiZcbiAgICAgIGxvY2FsZSAhPT0gZGVmYXVsdExvY2FsZSAmJlxuICAgICAgIXBhdGguc3RhcnRzV2l0aCgnLycgKyBsb2NhbGUgKyAnLycpICYmXG4gICAgICBwYXRoICE9PSAnLycgKyBsb2NhbGVcbiAgICAgID8gYWRkUGF0aFByZWZpeChwYXRoLCAnLycgKyBsb2NhbGUpXG4gICAgICA6IHBhdGhcbiAgfVxuICByZXR1cm4gcGF0aFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVsTG9jYWxlKHBhdGg6IHN0cmluZywgbG9jYWxlPzogc3RyaW5nKSB7XG4gIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgcmV0dXJuIGxvY2FsZSAmJlxuICAgICAgKHBhdGguc3RhcnRzV2l0aCgnLycgKyBsb2NhbGUgKyAnLycpIHx8IHBhdGggPT09ICcvJyArIGxvY2FsZSlcbiAgICAgID8gcGF0aC5zdWJzdHIobG9jYWxlLmxlbmd0aCArIDEpIHx8ICcvJ1xuICAgICAgOiBwYXRoXG4gIH1cbiAgcmV0dXJuIHBhdGhcbn1cblxuZnVuY3Rpb24gcGF0aE5vUXVlcnlIYXNoKHBhdGg6IHN0cmluZykge1xuICBjb25zdCBxdWVyeUluZGV4ID0gcGF0aC5pbmRleE9mKCc/JylcbiAgY29uc3QgaGFzaEluZGV4ID0gcGF0aC5pbmRleE9mKCcjJylcblxuICBpZiAocXVlcnlJbmRleCA+IC0xIHx8IGhhc2hJbmRleCA+IC0xKSB7XG4gICAgcGF0aCA9IHBhdGguc3Vic3RyaW5nKDAsIHF1ZXJ5SW5kZXggPiAtMSA/IHF1ZXJ5SW5kZXggOiBoYXNoSW5kZXgpXG4gIH1cbiAgcmV0dXJuIHBhdGhcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhhc0Jhc2VQYXRoKHBhdGg6IHN0cmluZyk6IGJvb2xlYW4ge1xuICBwYXRoID0gcGF0aE5vUXVlcnlIYXNoKHBhdGgpXG4gIHJldHVybiBwYXRoID09PSBiYXNlUGF0aCB8fCBwYXRoLnN0YXJ0c1dpdGgoYmFzZVBhdGggKyAnLycpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRCYXNlUGF0aChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICAvLyB3ZSBvbmx5IGFkZCB0aGUgYmFzZXBhdGggb24gcmVsYXRpdmUgdXJsc1xuICByZXR1cm4gYWRkUGF0aFByZWZpeChwYXRoLCBiYXNlUGF0aClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlbEJhc2VQYXRoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIHBhdGggPSBwYXRoLnNsaWNlKGJhc2VQYXRoLmxlbmd0aClcbiAgaWYgKCFwYXRoLnN0YXJ0c1dpdGgoJy8nKSkgcGF0aCA9IGAvJHtwYXRofWBcbiAgcmV0dXJuIHBhdGhcbn1cblxuLyoqXG4gKiBEZXRlY3RzIHdoZXRoZXIgYSBnaXZlbiB1cmwgaXMgcm91dGFibGUgYnkgdGhlIE5leHQuanMgcm91dGVyIChicm93c2VyIG9ubHkpLlxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNMb2NhbFVSTCh1cmw6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAvLyBwcmV2ZW50IGEgaHlkcmF0aW9uIG1pc21hdGNoIG9uIGhyZWYgZm9yIHVybCB3aXRoIGFuY2hvciByZWZzXG4gIGlmICh1cmwuc3RhcnRzV2l0aCgnLycpIHx8IHVybC5zdGFydHNXaXRoKCcjJykpIHJldHVybiB0cnVlXG4gIHRyeSB7XG4gICAgLy8gYWJzb2x1dGUgdXJscyBjYW4gYmUgbG9jYWwgaWYgdGhleSBhcmUgb24gdGhlIHNhbWUgb3JpZ2luXG4gICAgY29uc3QgbG9jYXRpb25PcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbigpXG4gICAgY29uc3QgcmVzb2x2ZWQgPSBuZXcgVVJMKHVybCwgbG9jYXRpb25PcmlnaW4pXG4gICAgcmV0dXJuIHJlc29sdmVkLm9yaWdpbiA9PT0gbG9jYXRpb25PcmlnaW4gJiYgaGFzQmFzZVBhdGgocmVzb2x2ZWQucGF0aG5hbWUpXG4gIH0gY2F0Y2ggKF8pIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxufVxuXG50eXBlIFVybCA9IFVybE9iamVjdCB8IHN0cmluZ1xuXG5leHBvcnQgZnVuY3Rpb24gaW50ZXJwb2xhdGVBcyhcbiAgcm91dGU6IHN0cmluZyxcbiAgYXNQYXRobmFtZTogc3RyaW5nLFxuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbikge1xuICBsZXQgaW50ZXJwb2xhdGVkUm91dGUgPSAnJ1xuXG4gIGNvbnN0IGR5bmFtaWNSZWdleCA9IGdldFJvdXRlUmVnZXgocm91dGUpXG4gIGNvbnN0IGR5bmFtaWNHcm91cHMgPSBkeW5hbWljUmVnZXguZ3JvdXBzXG4gIGNvbnN0IGR5bmFtaWNNYXRjaGVzID1cbiAgICAvLyBUcnkgdG8gbWF0Y2ggdGhlIGR5bmFtaWMgcm91dGUgYWdhaW5zdCB0aGUgYXNQYXRoXG4gICAgKGFzUGF0aG5hbWUgIT09IHJvdXRlID8gZ2V0Um91dGVNYXRjaGVyKGR5bmFtaWNSZWdleCkoYXNQYXRobmFtZSkgOiAnJykgfHxcbiAgICAvLyBGYWxsIGJhY2sgdG8gcmVhZGluZyB0aGUgdmFsdWVzIGZyb20gdGhlIGhyZWZcbiAgICAvLyBUT0RPOiBzaG91bGQgdGhpcyB0YWtlIHByaW9yaXR5OyBhbHNvIG5lZWQgdG8gY2hhbmdlIGluIHRoZSByb3V0ZXIuXG4gICAgcXVlcnlcblxuICBpbnRlcnBvbGF0ZWRSb3V0ZSA9IHJvdXRlXG4gIGNvbnN0IHBhcmFtcyA9IE9iamVjdC5rZXlzKGR5bmFtaWNHcm91cHMpXG5cbiAgaWYgKFxuICAgICFwYXJhbXMuZXZlcnkoKHBhcmFtKSA9PiB7XG4gICAgICBsZXQgdmFsdWUgPSBkeW5hbWljTWF0Y2hlc1twYXJhbV0gfHwgJydcbiAgICAgIGNvbnN0IHsgcmVwZWF0LCBvcHRpb25hbCB9ID0gZHluYW1pY0dyb3Vwc1twYXJhbV1cblxuICAgICAgLy8gc3VwcG9ydCBzaW5nbGUtbGV2ZWwgY2F0Y2gtYWxsXG4gICAgICAvLyBUT0RPOiBtb3JlIHJvYnVzdCBoYW5kbGluZyBmb3IgdXNlci1lcnJvciAocGFzc2luZyBgL2ApXG4gICAgICBsZXQgcmVwbGFjZWQgPSBgWyR7cmVwZWF0ID8gJy4uLicgOiAnJ30ke3BhcmFtfV1gXG4gICAgICBpZiAob3B0aW9uYWwpIHtcbiAgICAgICAgcmVwbGFjZWQgPSBgJHshdmFsdWUgPyAnLycgOiAnJ31bJHtyZXBsYWNlZH1dYFxuICAgICAgfVxuICAgICAgaWYgKHJlcGVhdCAmJiAhQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHZhbHVlID0gW3ZhbHVlXVxuXG4gICAgICByZXR1cm4gKFxuICAgICAgICAob3B0aW9uYWwgfHwgcGFyYW0gaW4gZHluYW1pY01hdGNoZXMpICYmXG4gICAgICAgIC8vIEludGVycG9sYXRlIGdyb3VwIGludG8gZGF0YSBVUkwgaWYgcHJlc2VudFxuICAgICAgICAoaW50ZXJwb2xhdGVkUm91dGUgPVxuICAgICAgICAgIGludGVycG9sYXRlZFJvdXRlIS5yZXBsYWNlKFxuICAgICAgICAgICAgcmVwbGFjZWQsXG4gICAgICAgICAgICByZXBlYXRcbiAgICAgICAgICAgICAgPyAodmFsdWUgYXMgc3RyaW5nW10pXG4gICAgICAgICAgICAgICAgICAubWFwKFxuICAgICAgICAgICAgICAgICAgICAvLyB0aGVzZSB2YWx1ZXMgc2hvdWxkIGJlIGZ1bGx5IGVuY29kZWQgaW5zdGVhZCBvZiBqdXN0XG4gICAgICAgICAgICAgICAgICAgIC8vIHBhdGggZGVsaW1pdGVyIGVzY2FwZWQgc2luY2UgdGhleSBhcmUgYmVpbmcgaW5zZXJ0ZWRcbiAgICAgICAgICAgICAgICAgICAgLy8gaW50byB0aGUgVVJMIGFuZCB3ZSBleHBlY3QgVVJMIGVuY29kZWQgc2VnbWVudHNcbiAgICAgICAgICAgICAgICAgICAgLy8gd2hlbiBwYXJzaW5nIGR5bmFtaWMgcm91dGUgcGFyYW1zXG4gICAgICAgICAgICAgICAgICAgIChzZWdtZW50KSA9PiBlbmNvZGVVUklDb21wb25lbnQoc2VnbWVudClcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIC5qb2luKCcvJylcbiAgICAgICAgICAgICAgOiBlbmNvZGVVUklDb21wb25lbnQodmFsdWUgYXMgc3RyaW5nKVxuICAgICAgICAgICkgfHwgJy8nKVxuICAgICAgKVxuICAgIH0pXG4gICkge1xuICAgIGludGVycG9sYXRlZFJvdXRlID0gJycgLy8gZGlkIG5vdCBzYXRpc2Z5IGFsbCByZXF1aXJlbWVudHNcblxuICAgIC8vIG4uYi4gV2UgaWdub3JlIHRoaXMgZXJyb3IgYmVjYXVzZSB3ZSBoYW5kbGUgd2FybmluZyBmb3IgdGhpcyBjYXNlIGluXG4gICAgLy8gZGV2ZWxvcG1lbnQgaW4gdGhlIGA8TGluaz5gIGNvbXBvbmVudCBkaXJlY3RseS5cbiAgfVxuICByZXR1cm4ge1xuICAgIHBhcmFtcyxcbiAgICByZXN1bHQ6IGludGVycG9sYXRlZFJvdXRlLFxuICB9XG59XG5cbmZ1bmN0aW9uIG9taXRQYXJtc0Zyb21RdWVyeShxdWVyeTogUGFyc2VkVXJsUXVlcnksIHBhcmFtczogc3RyaW5nW10pIHtcbiAgY29uc3QgZmlsdGVyZWRRdWVyeTogUGFyc2VkVXJsUXVlcnkgPSB7fVxuXG4gIE9iamVjdC5rZXlzKHF1ZXJ5KS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICBpZiAoIXBhcmFtcy5pbmNsdWRlcyhrZXkpKSB7XG4gICAgICBmaWx0ZXJlZFF1ZXJ5W2tleV0gPSBxdWVyeVtrZXldXG4gICAgfVxuICB9KVxuICByZXR1cm4gZmlsdGVyZWRRdWVyeVxufVxuXG4vKipcbiAqIFJlc29sdmVzIGEgZ2l2ZW4gaHlwZXJsaW5rIHdpdGggYSBjZXJ0YWluIHJvdXRlciBzdGF0ZSAoYmFzZVBhdGggbm90IGluY2x1ZGVkKS5cbiAqIFByZXNlcnZlcyBhYnNvbHV0ZSB1cmxzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVzb2x2ZUhyZWYoXG4gIGN1cnJlbnRQYXRoOiBzdHJpbmcsXG4gIGhyZWY6IFVybCxcbiAgcmVzb2x2ZUFzPzogYm9vbGVhblxuKTogc3RyaW5nIHtcbiAgLy8gd2UgdXNlIGEgZHVtbXkgYmFzZSB1cmwgZm9yIHJlbGF0aXZlIHVybHNcbiAgY29uc3QgYmFzZSA9IG5ldyBVUkwoY3VycmVudFBhdGgsICdodHRwOi8vbicpXG4gIGNvbnN0IHVybEFzU3RyaW5nID1cbiAgICB0eXBlb2YgaHJlZiA9PT0gJ3N0cmluZycgPyBocmVmIDogZm9ybWF0V2l0aFZhbGlkYXRpb24oaHJlZilcbiAgLy8gUmV0dXJuIGJlY2F1c2UgaXQgY2Fubm90IGJlIHJvdXRlZCBieSB0aGUgTmV4dC5qcyByb3V0ZXJcbiAgaWYgKCFpc0xvY2FsVVJMKHVybEFzU3RyaW5nKSkge1xuICAgIHJldHVybiAocmVzb2x2ZUFzID8gW3VybEFzU3RyaW5nXSA6IHVybEFzU3RyaW5nKSBhcyBzdHJpbmdcbiAgfVxuICB0cnkge1xuICAgIGNvbnN0IGZpbmFsVXJsID0gbmV3IFVSTCh1cmxBc1N0cmluZywgYmFzZSlcbiAgICBmaW5hbFVybC5wYXRobmFtZSA9IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoKGZpbmFsVXJsLnBhdGhuYW1lKVxuICAgIGxldCBpbnRlcnBvbGF0ZWRBcyA9ICcnXG5cbiAgICBpZiAoXG4gICAgICBpc0R5bmFtaWNSb3V0ZShmaW5hbFVybC5wYXRobmFtZSkgJiZcbiAgICAgIGZpbmFsVXJsLnNlYXJjaFBhcmFtcyAmJlxuICAgICAgcmVzb2x2ZUFzXG4gICAgKSB7XG4gICAgICBjb25zdCBxdWVyeSA9IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoZmluYWxVcmwuc2VhcmNoUGFyYW1zKVxuXG4gICAgICBjb25zdCB7IHJlc3VsdCwgcGFyYW1zIH0gPSBpbnRlcnBvbGF0ZUFzKFxuICAgICAgICBmaW5hbFVybC5wYXRobmFtZSxcbiAgICAgICAgZmluYWxVcmwucGF0aG5hbWUsXG4gICAgICAgIHF1ZXJ5XG4gICAgICApXG5cbiAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgaW50ZXJwb2xhdGVkQXMgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbih7XG4gICAgICAgICAgcGF0aG5hbWU6IHJlc3VsdCxcbiAgICAgICAgICBoYXNoOiBmaW5hbFVybC5oYXNoLFxuICAgICAgICAgIHF1ZXJ5OiBvbWl0UGFybXNGcm9tUXVlcnkocXVlcnksIHBhcmFtcyksXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gaWYgdGhlIG9yaWdpbiBkaWRuJ3QgY2hhbmdlLCBpdCBtZWFucyB3ZSByZWNlaXZlZCBhIHJlbGF0aXZlIGhyZWZcbiAgICBjb25zdCByZXNvbHZlZEhyZWYgPVxuICAgICAgZmluYWxVcmwub3JpZ2luID09PSBiYXNlLm9yaWdpblxuICAgICAgICA/IGZpbmFsVXJsLmhyZWYuc2xpY2UoZmluYWxVcmwub3JpZ2luLmxlbmd0aClcbiAgICAgICAgOiBmaW5hbFVybC5ocmVmXG5cbiAgICByZXR1cm4gKHJlc29sdmVBc1xuICAgICAgPyBbcmVzb2x2ZWRIcmVmLCBpbnRlcnBvbGF0ZWRBcyB8fCByZXNvbHZlZEhyZWZdXG4gICAgICA6IHJlc29sdmVkSHJlZikgYXMgc3RyaW5nXG4gIH0gY2F0Y2ggKF8pIHtcbiAgICByZXR1cm4gKHJlc29sdmVBcyA/IFt1cmxBc1N0cmluZ10gOiB1cmxBc1N0cmluZykgYXMgc3RyaW5nXG4gIH1cbn1cblxuZnVuY3Rpb24gc3RyaXBPcmlnaW4odXJsOiBzdHJpbmcpIHtcbiAgY29uc3Qgb3JpZ2luID0gZ2V0TG9jYXRpb25PcmlnaW4oKVxuXG4gIHJldHVybiB1cmwuc3RhcnRzV2l0aChvcmlnaW4pID8gdXJsLnN1YnN0cmluZyhvcmlnaW4ubGVuZ3RoKSA6IHVybFxufVxuXG5mdW5jdGlvbiBwcmVwYXJlVXJsQXMocm91dGVyOiBOZXh0Um91dGVyLCB1cmw6IFVybCwgYXM/OiBVcmwpIHtcbiAgLy8gSWYgdXJsIGFuZCBhcyBwcm92aWRlZCBhcyBhbiBvYmplY3QgcmVwcmVzZW50YXRpb24sXG4gIC8vIHdlJ2xsIGZvcm1hdCB0aGVtIGludG8gdGhlIHN0cmluZyB2ZXJzaW9uIGhlcmUuXG4gIGxldCBbcmVzb2x2ZWRIcmVmLCByZXNvbHZlZEFzXSA9IHJlc29sdmVIcmVmKHJvdXRlci5wYXRobmFtZSwgdXJsLCB0cnVlKVxuICBjb25zdCBvcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbigpXG4gIGNvbnN0IGhyZWZIYWRPcmlnaW4gPSByZXNvbHZlZEhyZWYuc3RhcnRzV2l0aChvcmlnaW4pXG4gIGNvbnN0IGFzSGFkT3JpZ2luID0gcmVzb2x2ZWRBcyAmJiByZXNvbHZlZEFzLnN0YXJ0c1dpdGgob3JpZ2luKVxuXG4gIHJlc29sdmVkSHJlZiA9IHN0cmlwT3JpZ2luKHJlc29sdmVkSHJlZilcbiAgcmVzb2x2ZWRBcyA9IHJlc29sdmVkQXMgPyBzdHJpcE9yaWdpbihyZXNvbHZlZEFzKSA6IHJlc29sdmVkQXNcblxuICBjb25zdCBwcmVwYXJlZFVybCA9IGhyZWZIYWRPcmlnaW4gPyByZXNvbHZlZEhyZWYgOiBhZGRCYXNlUGF0aChyZXNvbHZlZEhyZWYpXG4gIGNvbnN0IHByZXBhcmVkQXMgPSBhc1xuICAgID8gc3RyaXBPcmlnaW4ocmVzb2x2ZUhyZWYocm91dGVyLnBhdGhuYW1lLCBhcykpXG4gICAgOiByZXNvbHZlZEFzIHx8IHJlc29sdmVkSHJlZlxuXG4gIHJldHVybiB7XG4gICAgdXJsOiBwcmVwYXJlZFVybCxcbiAgICBhczogYXNIYWRPcmlnaW4gPyBwcmVwYXJlZEFzIDogYWRkQmFzZVBhdGgocHJlcGFyZWRBcyksXG4gIH1cbn1cblxuZnVuY3Rpb24gcmVzb2x2ZUR5bmFtaWNSb3V0ZShcbiAgcGFyc2VkSHJlZjogVXJsT2JqZWN0LFxuICBwYWdlczogc3RyaW5nW10sXG4gIGFwcGx5QmFzZVBhdGggPSB0cnVlXG4pIHtcbiAgY29uc3QgeyBwYXRobmFtZSB9ID0gcGFyc2VkSHJlZlxuICBjb25zdCBjbGVhblBhdGhuYW1lID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2goXG4gICAgZGVub3JtYWxpemVQYWdlUGF0aChhcHBseUJhc2VQYXRoID8gZGVsQmFzZVBhdGgocGF0aG5hbWUhKSA6IHBhdGhuYW1lISlcbiAgKVxuXG4gIGlmIChjbGVhblBhdGhuYW1lID09PSAnLzQwNCcgfHwgY2xlYW5QYXRobmFtZSA9PT0gJy9fZXJyb3InKSB7XG4gICAgcmV0dXJuIHBhcnNlZEhyZWZcbiAgfVxuXG4gIC8vIGhhbmRsZSByZXNvbHZpbmcgaHJlZiBmb3IgZHluYW1pYyByb3V0ZXNcbiAgaWYgKCFwYWdlcy5pbmNsdWRlcyhjbGVhblBhdGhuYW1lISkpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYXJyYXktY2FsbGJhY2stcmV0dXJuXG4gICAgcGFnZXMuc29tZSgocGFnZSkgPT4ge1xuICAgICAgaWYgKGlzRHluYW1pY1JvdXRlKHBhZ2UpICYmIGdldFJvdXRlUmVnZXgocGFnZSkucmUudGVzdChjbGVhblBhdGhuYW1lISkpIHtcbiAgICAgICAgcGFyc2VkSHJlZi5wYXRobmFtZSA9IGFwcGx5QmFzZVBhdGggPyBhZGRCYXNlUGF0aChwYWdlKSA6IHBhZ2VcbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIH1cbiAgICB9KVxuICB9XG4gIHBhcnNlZEhyZWYucGF0aG5hbWUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXJzZWRIcmVmLnBhdGhuYW1lISlcbiAgcmV0dXJuIHBhcnNlZEhyZWZcbn1cblxuZXhwb3J0IHR5cGUgQmFzZVJvdXRlciA9IHtcbiAgcm91dGU6IHN0cmluZ1xuICBwYXRobmFtZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBhc1BhdGg6IHN0cmluZ1xuICBiYXNlUGF0aDogc3RyaW5nXG4gIGxvY2FsZT86IHN0cmluZ1xuICBsb2NhbGVzPzogc3RyaW5nW11cbiAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xuICBkb21haW5Mb2NhbGVzPzogRG9tYWluTG9jYWxlc1xuICBpc0xvY2FsZURvbWFpbjogYm9vbGVhblxufVxuXG5leHBvcnQgdHlwZSBOZXh0Um91dGVyID0gQmFzZVJvdXRlciAmXG4gIFBpY2s8XG4gICAgUm91dGVyLFxuICAgIHwgJ3B1c2gnXG4gICAgfCAncmVwbGFjZSdcbiAgICB8ICdyZWxvYWQnXG4gICAgfCAnYmFjaydcbiAgICB8ICdwcmVmZXRjaCdcbiAgICB8ICdiZWZvcmVQb3BTdGF0ZSdcbiAgICB8ICdldmVudHMnXG4gICAgfCAnaXNGYWxsYmFjaydcbiAgICB8ICdpc1JlYWR5J1xuICAgIHwgJ2lzUHJldmlldydcbiAgPlxuXG5leHBvcnQgdHlwZSBQcmVmZXRjaE9wdGlvbnMgPSB7XG4gIHByaW9yaXR5PzogYm9vbGVhblxuICBsb2NhbGU/OiBzdHJpbmcgfCBmYWxzZVxufVxuXG5leHBvcnQgdHlwZSBQcml2YXRlUm91dGVJbmZvID1cbiAgfCAoT21pdDxDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm8sICdzdHlsZVNoZWV0cyc+ICYgeyBpbml0aWFsOiB0cnVlIH0pXG4gIHwgQ29tcGxldGVQcml2YXRlUm91dGVJbmZvXG5cbmV4cG9ydCB0eXBlIENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mbyA9IHtcbiAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlXG4gIHN0eWxlU2hlZXRzOiBTdHlsZVNoZWV0VHVwbGVbXVxuICBfX05fU1NHPzogYm9vbGVhblxuICBfX05fU1NQPzogYm9vbGVhblxuICBwcm9wcz86IFJlY29yZDxzdHJpbmcsIGFueT5cbiAgZXJyPzogRXJyb3JcbiAgZXJyb3I/OiBhbnlcbn1cblxuZXhwb3J0IHR5cGUgQXBwUHJvcHMgPSBQaWNrPENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mbywgJ0NvbXBvbmVudCcgfCAnZXJyJz4gJiB7XG4gIHJvdXRlcjogUm91dGVyXG59ICYgUmVjb3JkPHN0cmluZywgYW55PlxuZXhwb3J0IHR5cGUgQXBwQ29tcG9uZW50ID0gQ29tcG9uZW50VHlwZTxBcHBQcm9wcz5cblxudHlwZSBTdWJzY3JpcHRpb24gPSAoXG4gIGRhdGE6IFByaXZhdGVSb3V0ZUluZm8sXG4gIEFwcDogQXBwQ29tcG9uZW50LFxuICByZXNldFNjcm9sbDogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9IHwgbnVsbFxuKSA9PiBQcm9taXNlPHZvaWQ+XG5cbnR5cGUgQmVmb3JlUG9wU3RhdGVDYWxsYmFjayA9IChzdGF0ZTogTmV4dEhpc3RvcnlTdGF0ZSkgPT4gYm9vbGVhblxuXG50eXBlIENvbXBvbmVudExvYWRDYW5jZWwgPSAoKCkgPT4gdm9pZCkgfCBudWxsXG5cbnR5cGUgSGlzdG9yeU1ldGhvZCA9ICdyZXBsYWNlU3RhdGUnIHwgJ3B1c2hTdGF0ZSdcblxuY29uc3QgbWFudWFsU2Nyb2xsUmVzdG9yYXRpb24gPVxuICBwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OICYmXG4gIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmXG4gICdzY3JvbGxSZXN0b3JhdGlvbicgaW4gd2luZG93Lmhpc3RvcnkgJiZcbiAgISEoZnVuY3Rpb24gKCkge1xuICAgIHRyeSB7XG4gICAgICBsZXQgdiA9ICdfX25leHQnXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VxdWVuY2VzXG4gICAgICByZXR1cm4gc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSh2LCB2KSwgc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbSh2KSwgdHJ1ZVxuICAgIH0gY2F0Y2ggKG4pIHt9XG4gIH0pKClcblxuY29uc3QgU1NHX0RBVEFfTk9UX0ZPVU5EID0gU3ltYm9sKCdTU0dfREFUQV9OT1RfRk9VTkQnKVxuXG5mdW5jdGlvbiBmZXRjaFJldHJ5KHVybDogc3RyaW5nLCBhdHRlbXB0czogbnVtYmVyKTogUHJvbWlzZTxhbnk+IHtcbiAgcmV0dXJuIGZldGNoKHVybCwge1xuICAgIC8vIENvb2tpZXMgYXJlIHJlcXVpcmVkIHRvIGJlIHByZXNlbnQgZm9yIE5leHQuanMnIFNTRyBcIlByZXZpZXcgTW9kZVwiLlxuICAgIC8vIENvb2tpZXMgbWF5IGFsc28gYmUgcmVxdWlyZWQgZm9yIGBnZXRTZXJ2ZXJTaWRlUHJvcHNgLlxuICAgIC8vXG4gICAgLy8gPiBgZmV0Y2hgIHdvbuKAmXQgc2VuZCBjb29raWVzLCB1bmxlc3MgeW91IHNldCB0aGUgY3JlZGVudGlhbHMgaW5pdFxuICAgIC8vID4gb3B0aW9uLlxuICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9GZXRjaF9BUEkvVXNpbmdfRmV0Y2hcbiAgICAvL1xuICAgIC8vID4gRm9yIG1heGltdW0gYnJvd3NlciBjb21wYXRpYmlsaXR5IHdoZW4gaXQgY29tZXMgdG8gc2VuZGluZyAmXG4gICAgLy8gPiByZWNlaXZpbmcgY29va2llcywgYWx3YXlzIHN1cHBseSB0aGUgYGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nYFxuICAgIC8vID4gb3B0aW9uIGluc3RlYWQgb2YgcmVseWluZyBvbiB0aGUgZGVmYXVsdC5cbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vZ2l0aHViL2ZldGNoI2NhdmVhdHNcbiAgICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJyxcbiAgfSkudGhlbigocmVzKSA9PiB7XG4gICAgaWYgKCFyZXMub2spIHtcbiAgICAgIGlmIChhdHRlbXB0cyA+IDEgJiYgcmVzLnN0YXR1cyA+PSA1MDApIHtcbiAgICAgICAgcmV0dXJuIGZldGNoUmV0cnkodXJsLCBhdHRlbXB0cyAtIDEpXG4gICAgICB9XG4gICAgICBpZiAocmVzLnN0YXR1cyA9PT0gNDA0KSB7XG4gICAgICAgIHJldHVybiByZXMuanNvbigpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICBpZiAoZGF0YS5ub3RGb3VuZCkge1xuICAgICAgICAgICAgcmV0dXJuIHsgbm90Rm91bmQ6IFNTR19EQVRBX05PVF9GT1VORCB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc3RhdGljIHByb3BzYClcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc3RhdGljIHByb3BzYClcbiAgICB9XG4gICAgcmV0dXJuIHJlcy5qc29uKClcbiAgfSlcbn1cblxuZnVuY3Rpb24gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZjogc3RyaW5nLCBpc1NlcnZlclJlbmRlcjogYm9vbGVhbikge1xuICByZXR1cm4gZmV0Y2hSZXRyeShkYXRhSHJlZiwgaXNTZXJ2ZXJSZW5kZXIgPyAzIDogMSkuY2F0Y2goKGVycjogRXJyb3IpID0+IHtcbiAgICAvLyBXZSBzaG91bGQgb25seSB0cmlnZ2VyIGEgc2VydmVyLXNpZGUgdHJhbnNpdGlvbiBpZiB0aGlzIHdhcyBjYXVzZWRcbiAgICAvLyBvbiBhIGNsaWVudC1zaWRlIHRyYW5zaXRpb24uIE90aGVyd2lzZSwgd2UnZCBnZXQgaW50byBhbiBpbmZpbml0ZVxuICAgIC8vIGxvb3AuXG5cbiAgICBpZiAoIWlzU2VydmVyUmVuZGVyKSB7XG4gICAgICBtYXJrQXNzZXRFcnJvcihlcnIpXG4gICAgfVxuICAgIHRocm93IGVyclxuICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSb3V0ZXIgaW1wbGVtZW50cyBCYXNlUm91dGVyIHtcbiAgcm91dGU6IHN0cmluZ1xuICBwYXRobmFtZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBhc1BhdGg6IHN0cmluZ1xuICBiYXNlUGF0aDogc3RyaW5nXG5cbiAgLyoqXG4gICAqIE1hcCBvZiBhbGwgY29tcG9uZW50cyBsb2FkZWQgaW4gYFJvdXRlcmBcbiAgICovXG4gIGNvbXBvbmVudHM6IHsgW3BhdGhuYW1lOiBzdHJpbmddOiBQcml2YXRlUm91dGVJbmZvIH1cbiAgLy8gU3RhdGljIERhdGEgQ2FjaGVcbiAgc2RjOiB7IFthc1BhdGg6IHN0cmluZ106IG9iamVjdCB9ID0ge31cbiAgLy8gSW4tZmxpZ2h0IFNlcnZlciBEYXRhIFJlcXVlc3RzLCBmb3IgZGVkdXBpbmdcbiAgc2RyOiB7IFthc1BhdGg6IHN0cmluZ106IFByb21pc2U8b2JqZWN0PiB9ID0ge31cblxuICBzdWI6IFN1YnNjcmlwdGlvblxuICBjbGM6IENvbXBvbmVudExvYWRDYW5jZWxcbiAgcGFnZUxvYWRlcjogYW55XG4gIF9icHM6IEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2sgfCB1bmRlZmluZWRcbiAgZXZlbnRzOiBNaXR0RW1pdHRlclxuICBfd3JhcEFwcDogKEFwcDogQXBwQ29tcG9uZW50KSA9PiBhbnlcbiAgaXNTc3I6IGJvb2xlYW5cbiAgaXNGYWxsYmFjazogYm9vbGVhblxuICBfaW5GbGlnaHRSb3V0ZT86IHN0cmluZ1xuICBfc2hhbGxvdz86IGJvb2xlYW5cbiAgbG9jYWxlPzogc3RyaW5nXG4gIGxvY2FsZXM/OiBzdHJpbmdbXVxuICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG4gIGRvbWFpbkxvY2FsZXM/OiBEb21haW5Mb2NhbGVzXG4gIGlzUmVhZHk6IGJvb2xlYW5cbiAgaXNQcmV2aWV3OiBib29sZWFuXG4gIGlzTG9jYWxlRG9tYWluOiBib29sZWFuXG5cbiAgcHJpdmF0ZSBfaWR4OiBudW1iZXIgPSAwXG5cbiAgc3RhdGljIGV2ZW50czogTWl0dEVtaXR0ZXIgPSBtaXR0KClcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgICBhczogc3RyaW5nLFxuICAgIHtcbiAgICAgIGluaXRpYWxQcm9wcyxcbiAgICAgIHBhZ2VMb2FkZXIsXG4gICAgICBBcHAsXG4gICAgICB3cmFwQXBwLFxuICAgICAgQ29tcG9uZW50LFxuICAgICAgZXJyLFxuICAgICAgc3Vic2NyaXB0aW9uLFxuICAgICAgaXNGYWxsYmFjayxcbiAgICAgIGxvY2FsZSxcbiAgICAgIGxvY2FsZXMsXG4gICAgICBkZWZhdWx0TG9jYWxlLFxuICAgICAgZG9tYWluTG9jYWxlcyxcbiAgICAgIGlzUHJldmlldyxcbiAgICB9OiB7XG4gICAgICBzdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvblxuICAgICAgaW5pdGlhbFByb3BzOiBhbnlcbiAgICAgIHBhZ2VMb2FkZXI6IGFueVxuICAgICAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlXG4gICAgICBBcHA6IEFwcENvbXBvbmVudFxuICAgICAgd3JhcEFwcDogKEFwcDogQXBwQ29tcG9uZW50KSA9PiBhbnlcbiAgICAgIGVycj86IEVycm9yXG4gICAgICBpc0ZhbGxiYWNrOiBib29sZWFuXG4gICAgICBsb2NhbGU/OiBzdHJpbmdcbiAgICAgIGxvY2FsZXM/OiBzdHJpbmdbXVxuICAgICAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xuICAgICAgZG9tYWluTG9jYWxlcz86IERvbWFpbkxvY2FsZXNcbiAgICAgIGlzUHJldmlldz86IGJvb2xlYW5cbiAgICB9XG4gICkge1xuICAgIC8vIHJlcHJlc2VudHMgdGhlIGN1cnJlbnQgY29tcG9uZW50IGtleVxuICAgIHRoaXMucm91dGUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZSlcblxuICAgIC8vIHNldCB1cCB0aGUgY29tcG9uZW50IGNhY2hlIChieSByb3V0ZSBrZXlzKVxuICAgIHRoaXMuY29tcG9uZW50cyA9IHt9XG4gICAgLy8gV2Ugc2hvdWxkIG5vdCBrZWVwIHRoZSBjYWNoZSwgaWYgdGhlcmUncyBhbiBlcnJvclxuICAgIC8vIE90aGVyd2lzZSwgdGhpcyBjYXVzZSBpc3N1ZXMgd2hlbiB3aGVuIGdvaW5nIGJhY2sgYW5kXG4gICAgLy8gY29tZSBhZ2FpbiB0byB0aGUgZXJyb3JlZCBwYWdlLlxuICAgIGlmIChwYXRobmFtZSAhPT0gJy9fZXJyb3InKSB7XG4gICAgICB0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0gPSB7XG4gICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgaW5pdGlhbDogdHJ1ZSxcbiAgICAgICAgcHJvcHM6IGluaXRpYWxQcm9wcyxcbiAgICAgICAgZXJyLFxuICAgICAgICBfX05fU1NHOiBpbml0aWFsUHJvcHMgJiYgaW5pdGlhbFByb3BzLl9fTl9TU0csXG4gICAgICAgIF9fTl9TU1A6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTUCxcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10gPSB7XG4gICAgICBDb21wb25lbnQ6IEFwcCBhcyBDb21wb25lbnRUeXBlLFxuICAgICAgc3R5bGVTaGVldHM6IFtcbiAgICAgICAgLyogL19hcHAgZG9lcyBub3QgbmVlZCBpdHMgc3R5bGVzaGVldHMgbWFuYWdlZCAqL1xuICAgICAgXSxcbiAgICB9XG5cbiAgICAvLyBCYWNrd2FyZHMgY29tcGF0IGZvciBSb3V0ZXIucm91dGVyLmV2ZW50c1xuICAgIC8vIFRPRE86IFNob3VsZCBiZSByZW1vdmUgdGhlIGZvbGxvd2luZyBtYWpvciB2ZXJzaW9uIGFzIGl0IHdhcyBuZXZlciBkb2N1bWVudGVkXG4gICAgdGhpcy5ldmVudHMgPSBSb3V0ZXIuZXZlbnRzXG5cbiAgICB0aGlzLnBhZ2VMb2FkZXIgPSBwYWdlTG9hZGVyXG4gICAgdGhpcy5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgdGhpcy5xdWVyeSA9IHF1ZXJ5XG4gICAgLy8gaWYgYXV0byBwcmVyZW5kZXJlZCBhbmQgZHluYW1pYyByb3V0ZSB3YWl0IHRvIHVwZGF0ZSBhc1BhdGhcbiAgICAvLyB1bnRpbCBhZnRlciBtb3VudCB0byBwcmV2ZW50IGh5ZHJhdGlvbiBtaXNtYXRjaFxuICAgIGNvbnN0IGF1dG9FeHBvcnREeW5hbWljID1cbiAgICAgIGlzRHluYW1pY1JvdXRlKHBhdGhuYW1lKSAmJiBzZWxmLl9fTkVYVF9EQVRBX18uYXV0b0V4cG9ydFxuXG4gICAgdGhpcy5hc1BhdGggPSBhdXRvRXhwb3J0RHluYW1pYyA/IHBhdGhuYW1lIDogYXNcbiAgICB0aGlzLmJhc2VQYXRoID0gYmFzZVBhdGhcbiAgICB0aGlzLnN1YiA9IHN1YnNjcmlwdGlvblxuICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIHRoaXMuX3dyYXBBcHAgPSB3cmFwQXBwXG4gICAgLy8gbWFrZSBzdXJlIHRvIGlnbm9yZSBleHRyYSBwb3BTdGF0ZSBpbiBzYWZhcmkgb24gbmF2aWdhdGluZ1xuICAgIC8vIGJhY2sgZnJvbSBleHRlcm5hbCBzaXRlXG4gICAgdGhpcy5pc1NzciA9IHRydWVcblxuICAgIHRoaXMuaXNGYWxsYmFjayA9IGlzRmFsbGJhY2tcblxuICAgIHRoaXMuaXNSZWFkeSA9ICEhKFxuICAgICAgc2VsZi5fX05FWFRfREFUQV9fLmdzc3AgfHxcbiAgICAgIHNlbGYuX19ORVhUX0RBVEFfXy5naXAgfHxcbiAgICAgICghYXV0b0V4cG9ydER5bmFtaWMgJiYgIXNlbGYubG9jYXRpb24uc2VhcmNoKVxuICAgIClcbiAgICB0aGlzLmlzUHJldmlldyA9ICEhaXNQcmV2aWV3XG4gICAgdGhpcy5pc0xvY2FsZURvbWFpbiA9IGZhbHNlXG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgdGhpcy5sb2NhbGUgPSBsb2NhbGVcbiAgICAgIHRoaXMubG9jYWxlcyA9IGxvY2FsZXNcbiAgICAgIHRoaXMuZGVmYXVsdExvY2FsZSA9IGRlZmF1bHRMb2NhbGVcbiAgICAgIHRoaXMuZG9tYWluTG9jYWxlcyA9IGRvbWFpbkxvY2FsZXNcbiAgICAgIHRoaXMuaXNMb2NhbGVEb21haW4gPSAhIWRldGVjdERvbWFpbkxvY2FsZShcbiAgICAgICAgZG9tYWluTG9jYWxlcyxcbiAgICAgICAgc2VsZi5sb2NhdGlvbi5ob3N0bmFtZVxuICAgICAgKVxuICAgIH1cblxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gbWFrZSBzdXJlIFwiYXNcIiBkb2Vzbid0IHN0YXJ0IHdpdGggZG91YmxlIHNsYXNoZXMgb3IgZWxzZSBpdCBjYW5cbiAgICAgIC8vIHRocm93IGFuIGVycm9yIGFzIGl0J3MgY29uc2lkZXJlZCBpbnZhbGlkXG4gICAgICBpZiAoYXMuc3Vic3RyKDAsIDIpICE9PSAnLy8nKSB7XG4gICAgICAgIC8vIGluIG9yZGVyIGZvciBgZS5zdGF0ZWAgdG8gd29yayBvbiB0aGUgYG9ucG9wc3RhdGVgIGV2ZW50XG4gICAgICAgIC8vIHdlIGhhdmUgdG8gcmVnaXN0ZXIgdGhlIGluaXRpYWwgcm91dGUgdXBvbiBpbml0aWFsaXphdGlvblxuICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWU6IGFkZEJhc2VQYXRoKHBhdGhuYW1lKSwgcXVlcnkgfSksXG4gICAgICAgICAgZ2V0VVJMKCksXG4gICAgICAgICAgeyBsb2NhbGUgfVxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsIHRoaXMub25Qb3BTdGF0ZSlcblxuICAgICAgLy8gZW5hYmxlIGN1c3RvbSBzY3JvbGwgcmVzdG9yYXRpb24gaGFuZGxpbmcgd2hlbiBhdmFpbGFibGVcbiAgICAgIC8vIG90aGVyd2lzZSBmYWxsYmFjayB0byBicm93c2VyJ3MgZGVmYXVsdCBoYW5kbGluZ1xuICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pIHtcbiAgICAgICAgaWYgKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uKSB7XG4gICAgICAgICAgd2luZG93Lmhpc3Rvcnkuc2Nyb2xsUmVzdG9yYXRpb24gPSAnbWFudWFsJ1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgb25Qb3BTdGF0ZSA9IChlOiBQb3BTdGF0ZUV2ZW50KTogdm9pZCA9PiB7XG4gICAgY29uc3Qgc3RhdGUgPSBlLnN0YXRlIGFzIEhpc3RvcnlTdGF0ZVxuXG4gICAgaWYgKCFzdGF0ZSkge1xuICAgICAgLy8gV2UgZ2V0IHN0YXRlIGFzIHVuZGVmaW5lZCBmb3IgdHdvIHJlYXNvbnMuXG4gICAgICAvLyAgMS4gV2l0aCBvbGRlciBzYWZhcmkgKDwgOCkgYW5kIG9sZGVyIGNocm9tZSAoPCAzNClcbiAgICAgIC8vICAyLiBXaGVuIHRoZSBVUkwgY2hhbmdlZCB3aXRoICNcbiAgICAgIC8vXG4gICAgICAvLyBJbiB0aGUgYm90aCBjYXNlcywgd2UgZG9uJ3QgbmVlZCB0byBwcm9jZWVkIGFuZCBjaGFuZ2UgdGhlIHJvdXRlLlxuICAgICAgLy8gKGFzIGl0J3MgYWxyZWFkeSBjaGFuZ2VkKVxuICAgICAgLy8gQnV0IHdlIGNhbiBzaW1wbHkgcmVwbGFjZSB0aGUgc3RhdGUgd2l0aCB0aGUgbmV3IGNoYW5nZXMuXG4gICAgICAvLyBBY3R1YWxseSwgZm9yICgxKSB3ZSBkb24ndCBuZWVkIHRvIG5vdGhpbmcuIEJ1dCBpdCdzIGhhcmQgdG8gZGV0ZWN0IHRoYXQgZXZlbnQuXG4gICAgICAvLyBTbywgZG9pbmcgdGhlIGZvbGxvd2luZyBmb3IgKDEpIGRvZXMgbm8gaGFybS5cbiAgICAgIGNvbnN0IHsgcGF0aG5hbWUsIHF1ZXJ5IH0gPSB0aGlzXG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZTogYWRkQmFzZVBhdGgocGF0aG5hbWUpLCBxdWVyeSB9KSxcbiAgICAgICAgZ2V0VVJMKClcbiAgICAgIClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmICghc3RhdGUuX19OKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBsZXQgZm9yY2VkU2Nyb2xsOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH0gfCB1bmRlZmluZWRcbiAgICBjb25zdCB7IHVybCwgYXMsIG9wdGlvbnMsIGlkeCB9ID0gc3RhdGVcbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTikge1xuICAgICAgaWYgKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uKSB7XG4gICAgICAgIGlmICh0aGlzLl9pZHggIT09IGlkeCkge1xuICAgICAgICAgIC8vIFNuYXBzaG90IGN1cnJlbnQgc2Nyb2xsIHBvc2l0aW9uOlxuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFxuICAgICAgICAgICAgICAnX19uZXh0X3Njcm9sbF8nICsgdGhpcy5faWR4LFxuICAgICAgICAgICAgICBKU09OLnN0cmluZ2lmeSh7IHg6IHNlbGYucGFnZVhPZmZzZXQsIHk6IHNlbGYucGFnZVlPZmZzZXQgfSlcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9IGNhdGNoIHt9XG5cbiAgICAgICAgICAvLyBSZXN0b3JlIG9sZCBzY3JvbGwgcG9zaXRpb246XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHYgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdfX25leHRfc2Nyb2xsXycgKyBpZHgpXG4gICAgICAgICAgICBmb3JjZWRTY3JvbGwgPSBKU09OLnBhcnNlKHYhKVxuICAgICAgICAgIH0gY2F0Y2gge1xuICAgICAgICAgICAgZm9yY2VkU2Nyb2xsID0geyB4OiAwLCB5OiAwIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5faWR4ID0gaWR4XG5cbiAgICBjb25zdCB7IHBhdGhuYW1lIH0gPSBwYXJzZVJlbGF0aXZlVXJsKHVybClcblxuICAgIC8vIE1ha2Ugc3VyZSB3ZSBkb24ndCByZS1yZW5kZXIgb24gaW5pdGlhbCBsb2FkLFxuICAgIC8vIGNhbiBiZSBjYXVzZWQgYnkgbmF2aWdhdGluZyBiYWNrIGZyb20gYW4gZXh0ZXJuYWwgc2l0ZVxuICAgIGlmICh0aGlzLmlzU3NyICYmIGFzID09PSB0aGlzLmFzUGF0aCAmJiBwYXRobmFtZSA9PT0gdGhpcy5wYXRobmFtZSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIGRvd25zdHJlYW0gYXBwbGljYXRpb24gcmV0dXJucyBmYWxzeSwgcmV0dXJuLlxuICAgIC8vIFRoZXkgd2lsbCB0aGVuIGJlIHJlc3BvbnNpYmxlIGZvciBoYW5kbGluZyB0aGUgZXZlbnQuXG4gICAgaWYgKHRoaXMuX2JwcyAmJiAhdGhpcy5fYnBzKHN0YXRlKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5jaGFuZ2UoXG4gICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgIHVybCxcbiAgICAgIGFzLFxuICAgICAgT2JqZWN0LmFzc2lnbjx7fSwgVHJhbnNpdGlvbk9wdGlvbnMsIFRyYW5zaXRpb25PcHRpb25zPih7fSwgb3B0aW9ucywge1xuICAgICAgICBzaGFsbG93OiBvcHRpb25zLnNoYWxsb3cgJiYgdGhpcy5fc2hhbGxvdyxcbiAgICAgICAgbG9jYWxlOiBvcHRpb25zLmxvY2FsZSB8fCB0aGlzLmRlZmF1bHRMb2NhbGUsXG4gICAgICB9KSxcbiAgICAgIGZvcmNlZFNjcm9sbFxuICAgIClcbiAgfVxuXG4gIHJlbG9hZCgpOiB2b2lkIHtcbiAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKClcbiAgfVxuXG4gIC8qKlxuICAgKiBHbyBiYWNrIGluIGhpc3RvcnlcbiAgICovXG4gIGJhY2soKSB7XG4gICAgd2luZG93Lmhpc3RvcnkuYmFjaygpXG4gIH1cblxuICAvKipcbiAgICogUGVyZm9ybXMgYSBgcHVzaFN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICovXG4gIHB1c2godXJsOiBVcmwsIGFzPzogVXJsLCBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9ucyA9IHt9KSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pIHtcbiAgICAgIC8vIFRPRE86IHJlbW92ZSBpbiB0aGUgZnV0dXJlIHdoZW4gd2UgdXBkYXRlIGhpc3RvcnkgYmVmb3JlIHJvdXRlIGNoYW5nZVxuICAgICAgLy8gaXMgY29tcGxldGUsIGFzIHRoZSBwb3BzdGF0ZSBldmVudCBzaG91bGQgaGFuZGxlIHRoaXMgY2FwdHVyZS5cbiAgICAgIGlmIChtYW51YWxTY3JvbGxSZXN0b3JhdGlvbikge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFNuYXBzaG90IHNjcm9sbCBwb3NpdGlvbiByaWdodCBiZWZvcmUgbmF2aWdhdGluZyB0byBhIG5ldyBwYWdlOlxuICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oXG4gICAgICAgICAgICAnX19uZXh0X3Njcm9sbF8nICsgdGhpcy5faWR4LFxuICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkoeyB4OiBzZWxmLnBhZ2VYT2Zmc2V0LCB5OiBzZWxmLnBhZ2VZT2Zmc2V0IH0pXG4gICAgICAgICAgKVxuICAgICAgICB9IGNhdGNoIHt9XG4gICAgICB9XG4gICAgfVxuICAgIDsoeyB1cmwsIGFzIH0gPSBwcmVwYXJlVXJsQXModGhpcywgdXJsLCBhcykpXG4gICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdwdXNoU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKVxuICB9XG5cbiAgLyoqXG4gICAqIFBlcmZvcm1zIGEgYHJlcGxhY2VTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAqL1xuICByZXBsYWNlKHVybDogVXJsLCBhcz86IFVybCwgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnMgPSB7fSkge1xuICAgIDsoeyB1cmwsIGFzIH0gPSBwcmVwYXJlVXJsQXModGhpcywgdXJsLCBhcykpXG4gICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdyZXBsYWNlU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKVxuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBjaGFuZ2UoXG4gICAgbWV0aG9kOiBIaXN0b3J5TWV0aG9kLFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzOiBzdHJpbmcsXG4gICAgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnMsXG4gICAgZm9yY2VkU2Nyb2xsPzogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9XG4gICk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIGlmICghaXNMb2NhbFVSTCh1cmwpKSB7XG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHVybFxuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgLy8gZm9yIHN0YXRpYyBwYWdlcyB3aXRoIHF1ZXJ5IHBhcmFtcyBpbiB0aGUgVVJMIHdlIGRlbGF5XG4gICAgLy8gbWFya2luZyB0aGUgcm91dGVyIHJlYWR5IHVudGlsIGFmdGVyIHRoZSBxdWVyeSBpcyB1cGRhdGVkXG4gICAgaWYgKChvcHRpb25zIGFzIGFueSkuX2gpIHtcbiAgICAgIHRoaXMuaXNSZWFkeSA9IHRydWVcbiAgICB9XG5cbiAgICAvLyBEZWZhdWx0IHRvIHNjcm9sbCByZXNldCBiZWhhdmlvciB1bmxlc3MgZXhwbGljaXRseSBzcGVjaWZpZWQgdG8gYmVcbiAgICAvLyBgZmFsc2VgISBUaGlzIG1ha2VzIHRoZSBiZWhhdmlvciBiZXR3ZWVuIHVzaW5nIGBSb3V0ZXIjcHVzaGAgYW5kIGFcbiAgICAvLyBgPExpbmsgLz5gIGNvbnNpc3RlbnQuXG4gICAgb3B0aW9ucy5zY3JvbGwgPSAhIShvcHRpb25zLnNjcm9sbCA/PyB0cnVlKVxuXG4gICAgbGV0IGxvY2FsZUNoYW5nZSA9IG9wdGlvbnMubG9jYWxlICE9PSB0aGlzLmxvY2FsZVxuXG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgIHRoaXMubG9jYWxlID1cbiAgICAgICAgb3B0aW9ucy5sb2NhbGUgPT09IGZhbHNlXG4gICAgICAgICAgPyB0aGlzLmRlZmF1bHRMb2NhbGVcbiAgICAgICAgICA6IG9wdGlvbnMubG9jYWxlIHx8IHRoaXMubG9jYWxlXG5cbiAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5sb2NhbGUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIG9wdGlvbnMubG9jYWxlID0gdGhpcy5sb2NhbGVcbiAgICAgIH1cblxuICAgICAgY29uc3QgcGFyc2VkQXMgPSBwYXJzZVJlbGF0aXZlVXJsKGhhc0Jhc2VQYXRoKGFzKSA/IGRlbEJhc2VQYXRoKGFzKSA6IGFzKVxuICAgICAgY29uc3QgbG9jYWxlUGF0aFJlc3VsdCA9IG5vcm1hbGl6ZUxvY2FsZVBhdGgoXG4gICAgICAgIHBhcnNlZEFzLnBhdGhuYW1lLFxuICAgICAgICB0aGlzLmxvY2FsZXNcbiAgICAgIClcblxuICAgICAgaWYgKGxvY2FsZVBhdGhSZXN1bHQuZGV0ZWN0ZWRMb2NhbGUpIHtcbiAgICAgICAgdGhpcy5sb2NhbGUgPSBsb2NhbGVQYXRoUmVzdWx0LmRldGVjdGVkTG9jYWxlXG4gICAgICAgIHBhcnNlZEFzLnBhdGhuYW1lID0gYWRkQmFzZVBhdGgocGFyc2VkQXMucGF0aG5hbWUpXG4gICAgICAgIGFzID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkQXMpXG4gICAgICAgIHVybCA9IGFkZEJhc2VQYXRoKFxuICAgICAgICAgIG5vcm1hbGl6ZUxvY2FsZVBhdGgoXG4gICAgICAgICAgICBoYXNCYXNlUGF0aCh1cmwpID8gZGVsQmFzZVBhdGgodXJsKSA6IHVybCxcbiAgICAgICAgICAgIHRoaXMubG9jYWxlc1xuICAgICAgICAgICkucGF0aG5hbWVcbiAgICAgICAgKVxuICAgICAgfVxuICAgICAgbGV0IGRpZE5hdmlnYXRlID0gZmFsc2VcblxuICAgICAgLy8gd2UgbmVlZCB0byB3cmFwIHRoaXMgaW4gdGhlIGVudiBjaGVjayBhZ2FpbiBzaW5jZSByZWdlbmVyYXRvciBydW50aW1lXG4gICAgICAvLyBtb3ZlcyB0aGlzIG9uIGl0cyBvd24gZHVlIHRvIHRoZSByZXR1cm5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICAgIC8vIGlmIHRoZSBsb2NhbGUgaXNuJ3QgY29uZmlndXJlZCBoYXJkIG5hdmlnYXRlIHRvIHNob3cgNDA0IHBhZ2VcbiAgICAgICAgaWYgKCF0aGlzLmxvY2FsZXM/LmluY2x1ZGVzKHRoaXMubG9jYWxlISkpIHtcbiAgICAgICAgICBwYXJzZWRBcy5wYXRobmFtZSA9IGFkZExvY2FsZShwYXJzZWRBcy5wYXRobmFtZSwgdGhpcy5sb2NhbGUpXG4gICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWRBcylcbiAgICAgICAgICAvLyB0aGlzIHdhcyBwcmV2aW91c2x5IGEgcmV0dXJuIGJ1dCB3YXMgcmVtb3ZlZCBpbiBmYXZvclxuICAgICAgICAgIC8vIG9mIGJldHRlciBkZWFkIGNvZGUgZWxpbWluYXRpb24gd2l0aCByZWdlbmVyYXRvciBydW50aW1lXG4gICAgICAgICAgZGlkTmF2aWdhdGUgPSB0cnVlXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgY29uc3QgZGV0ZWN0ZWREb21haW4gPSBkZXRlY3REb21haW5Mb2NhbGUoXG4gICAgICAgIHRoaXMuZG9tYWluTG9jYWxlcyxcbiAgICAgICAgdW5kZWZpbmVkLFxuICAgICAgICB0aGlzLmxvY2FsZVxuICAgICAgKVxuXG4gICAgICAvLyB3ZSBuZWVkIHRvIHdyYXAgdGhpcyBpbiB0aGUgZW52IGNoZWNrIGFnYWluIHNpbmNlIHJlZ2VuZXJhdG9yIHJ1bnRpbWVcbiAgICAgIC8vIG1vdmVzIHRoaXMgb24gaXRzIG93biBkdWUgdG8gdGhlIHJldHVyblxuICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgICAgLy8gaWYgd2UgYXJlIG5hdmlnYXRpbmcgdG8gYSBkb21haW4gbG9jYWxlIGVuc3VyZSB3ZSByZWRpcmVjdCB0byB0aGVcbiAgICAgICAgLy8gY29ycmVjdCBkb21haW5cbiAgICAgICAgaWYgKFxuICAgICAgICAgICFkaWROYXZpZ2F0ZSAmJlxuICAgICAgICAgIGRldGVjdGVkRG9tYWluICYmXG4gICAgICAgICAgdGhpcy5pc0xvY2FsZURvbWFpbiAmJlxuICAgICAgICAgIHNlbGYubG9jYXRpb24uaG9zdG5hbWUgIT09IGRldGVjdGVkRG9tYWluLmRvbWFpblxuICAgICAgICApIHtcbiAgICAgICAgICBjb25zdCBhc05vQmFzZVBhdGggPSBkZWxCYXNlUGF0aChhcylcbiAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGBodHRwJHtkZXRlY3RlZERvbWFpbi5odHRwID8gJycgOiAncyd9Oi8vJHtcbiAgICAgICAgICAgIGRldGVjdGVkRG9tYWluLmRvbWFpblxuICAgICAgICAgIH0ke2FkZEJhc2VQYXRoKFxuICAgICAgICAgICAgYCR7XG4gICAgICAgICAgICAgIHRoaXMubG9jYWxlID09PSBkZXRlY3RlZERvbWFpbi5kZWZhdWx0TG9jYWxlXG4gICAgICAgICAgICAgICAgPyAnJ1xuICAgICAgICAgICAgICAgIDogYC8ke3RoaXMubG9jYWxlfWBcbiAgICAgICAgICAgIH0ke2FzTm9CYXNlUGF0aCA9PT0gJy8nID8gJycgOiBhc05vQmFzZVBhdGh9YCB8fCAnLydcbiAgICAgICAgICApfWBcbiAgICAgICAgICAvLyB0aGlzIHdhcyBwcmV2aW91c2x5IGEgcmV0dXJuIGJ1dCB3YXMgcmVtb3ZlZCBpbiBmYXZvclxuICAgICAgICAgIC8vIG9mIGJldHRlciBkZWFkIGNvZGUgZWxpbWluYXRpb24gd2l0aCByZWdlbmVyYXRvciBydW50aW1lXG4gICAgICAgICAgZGlkTmF2aWdhdGUgPSB0cnVlXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGRpZE5hdmlnYXRlKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgoKSA9PiB7fSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIShvcHRpb25zIGFzIGFueSkuX2gpIHtcbiAgICAgIHRoaXMuaXNTc3IgPSBmYWxzZVxuICAgIH1cbiAgICAvLyBtYXJraW5nIHJvdXRlIGNoYW5nZXMgYXMgYSBuYXZpZ2F0aW9uIHN0YXJ0IGVudHJ5XG4gICAgaWYgKFNUKSB7XG4gICAgICBwZXJmb3JtYW5jZS5tYXJrKCdyb3V0ZUNoYW5nZScpXG4gICAgfVxuXG4gICAgY29uc3QgeyBzaGFsbG93ID0gZmFsc2UgfSA9IG9wdGlvbnNcbiAgICBjb25zdCByb3V0ZVByb3BzID0geyBzaGFsbG93IH1cblxuICAgIGlmICh0aGlzLl9pbkZsaWdodFJvdXRlKSB7XG4gICAgICB0aGlzLmFib3J0Q29tcG9uZW50TG9hZCh0aGlzLl9pbkZsaWdodFJvdXRlLCByb3V0ZVByb3BzKVxuICAgIH1cblxuICAgIGFzID0gYWRkQmFzZVBhdGgoXG4gICAgICBhZGRMb2NhbGUoXG4gICAgICAgIGhhc0Jhc2VQYXRoKGFzKSA/IGRlbEJhc2VQYXRoKGFzKSA6IGFzLFxuICAgICAgICBvcHRpb25zLmxvY2FsZSxcbiAgICAgICAgdGhpcy5kZWZhdWx0TG9jYWxlXG4gICAgICApXG4gICAgKVxuICAgIGNvbnN0IGNsZWFuZWRBcyA9IGRlbExvY2FsZShcbiAgICAgIGhhc0Jhc2VQYXRoKGFzKSA/IGRlbEJhc2VQYXRoKGFzKSA6IGFzLFxuICAgICAgdGhpcy5sb2NhbGVcbiAgICApXG4gICAgdGhpcy5faW5GbGlnaHRSb3V0ZSA9IGFzXG5cbiAgICAvLyBJZiB0aGUgdXJsIGNoYW5nZSBpcyBvbmx5IHJlbGF0ZWQgdG8gYSBoYXNoIGNoYW5nZVxuICAgIC8vIFdlIHNob3VsZCBub3QgcHJvY2VlZC4gV2Ugc2hvdWxkIG9ubHkgY2hhbmdlIHRoZSBzdGF0ZS5cblxuICAgIC8vIFdBUk5JTkc6IGBfaGAgaXMgYW4gaW50ZXJuYWwgb3B0aW9uIGZvciBoYW5kaW5nIE5leHQuanMgY2xpZW50LXNpZGVcbiAgICAvLyBoeWRyYXRpb24uIFlvdXIgYXBwIHNob3VsZCBfbmV2ZXJfIHVzZSB0aGlzIHByb3BlcnR5LiBJdCBtYXkgY2hhbmdlIGF0XG4gICAgLy8gYW55IHRpbWUgd2l0aG91dCBub3RpY2UuXG4gICAgaWYgKCEob3B0aW9ucyBhcyBhbnkpLl9oICYmIHRoaXMub25seUFIYXNoQ2hhbmdlKGNsZWFuZWRBcykpIHtcbiAgICAgIHRoaXMuYXNQYXRoID0gY2xlYW5lZEFzXG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VTdGFydCcsIGFzLCByb3V0ZVByb3BzKVxuICAgICAgLy8gVE9ETzogZG8gd2UgbmVlZCB0aGUgcmVzb2x2ZWQgaHJlZiB3aGVuIG9ubHkgYSBoYXNoIGNoYW5nZT9cbiAgICAgIHRoaXMuY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zKVxuICAgICAgdGhpcy5zY3JvbGxUb0hhc2goY2xlYW5lZEFzKVxuICAgICAgdGhpcy5ub3RpZnkodGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdLCBudWxsKVxuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlQ29tcGxldGUnLCBhcywgcm91dGVQcm9wcylcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuXG4gICAgbGV0IHBhcnNlZCA9IHBhcnNlUmVsYXRpdmVVcmwodXJsKVxuICAgIGxldCB7IHBhdGhuYW1lLCBxdWVyeSB9ID0gcGFyc2VkXG5cbiAgICAvLyBUaGUgYnVpbGQgbWFuaWZlc3QgbmVlZHMgdG8gYmUgbG9hZGVkIGJlZm9yZSBhdXRvLXN0YXRpYyBkeW5hbWljIHBhZ2VzXG4gICAgLy8gZ2V0IHRoZWlyIHF1ZXJ5IHBhcmFtZXRlcnMgdG8gYWxsb3cgZW5zdXJpbmcgdGhleSBjYW4gYmUgcGFyc2VkIHByb3Blcmx5XG4gICAgLy8gd2hlbiByZXdyaXR0ZW4gdG9cbiAgICBsZXQgcGFnZXM6IGFueSwgcmV3cml0ZXM6IGFueVxuICAgIHRyeSB7XG4gICAgICBwYWdlcyA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5nZXRQYWdlTGlzdCgpXG4gICAgICA7KHsgX19yZXdyaXRlczogcmV3cml0ZXMgfSA9IGF3YWl0IGdldENsaWVudEJ1aWxkTWFuaWZlc3QoKSlcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIC8vIElmIHdlIGZhaWwgdG8gcmVzb2x2ZSB0aGUgcGFnZSBsaXN0IG9yIGNsaWVudC1idWlsZCBtYW5pZmVzdCwgd2UgbXVzdFxuICAgICAgLy8gZG8gYSBzZXJ2ZXItc2lkZSB0cmFuc2l0aW9uOlxuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBhc1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgcGFyc2VkID0gcmVzb2x2ZUR5bmFtaWNSb3V0ZShwYXJzZWQsIHBhZ2VzKSBhcyB0eXBlb2YgcGFyc2VkXG5cbiAgICBpZiAocGFyc2VkLnBhdGhuYW1lICE9PSBwYXRobmFtZSkge1xuICAgICAgcGF0aG5hbWUgPSBwYXJzZWQucGF0aG5hbWVcbiAgICAgIHVybCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZClcbiAgICB9XG5cbiAgICAvLyB1cmwgYW5kIGFzIHNob3VsZCBhbHdheXMgYmUgcHJlZml4ZWQgd2l0aCBiYXNlUGF0aCBieSB0aGlzXG4gICAgLy8gcG9pbnQgYnkgZWl0aGVyIG5leHQvbGluayBvciByb3V0ZXIucHVzaC9yZXBsYWNlIHNvIHN0cmlwIHRoZVxuICAgIC8vIGJhc2VQYXRoIGZyb20gdGhlIHBhdGhuYW1lIHRvIG1hdGNoIHRoZSBwYWdlcyBkaXIgMS10by0xXG4gICAgcGF0aG5hbWUgPSBwYXRobmFtZVxuICAgICAgPyByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChkZWxCYXNlUGF0aChwYXRobmFtZSkpXG4gICAgICA6IHBhdGhuYW1lXG5cbiAgICAvLyBJZiBhc2tlZCB0byBjaGFuZ2UgdGhlIGN1cnJlbnQgVVJMIHdlIHNob3VsZCByZWxvYWQgdGhlIGN1cnJlbnQgcGFnZVxuICAgIC8vIChub3QgbG9jYXRpb24ucmVsb2FkKCkgYnV0IHJlbG9hZCBnZXRJbml0aWFsUHJvcHMgYW5kIG90aGVyIE5leHQuanMgc3R1ZmZzKVxuICAgIC8vIFdlIGFsc28gbmVlZCB0byBzZXQgdGhlIG1ldGhvZCA9IHJlcGxhY2VTdGF0ZSBhbHdheXNcbiAgICAvLyBhcyB0aGlzIHNob3VsZCBub3QgZ28gaW50byB0aGUgaGlzdG9yeSAoVGhhdCdzIGhvdyBicm93c2VycyB3b3JrKVxuICAgIC8vIFdlIHNob3VsZCBjb21wYXJlIHRoZSBuZXcgYXNQYXRoIHRvIHRoZSBjdXJyZW50IGFzUGF0aCwgbm90IHRoZSB1cmxcbiAgICBpZiAoIXRoaXMudXJsSXNOZXcoY2xlYW5lZEFzKSAmJiAhbG9jYWxlQ2hhbmdlKSB7XG4gICAgICBtZXRob2QgPSAncmVwbGFjZVN0YXRlJ1xuICAgIH1cblxuICAgIGxldCByb3V0ZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKVxuXG4gICAgLy8gd2UgbmVlZCB0byByZXNvbHZlIHRoZSBhcyB2YWx1ZSB1c2luZyByZXdyaXRlcyBmb3IgZHluYW1pYyBTU0dcbiAgICAvLyBwYWdlcyB0byBhbGxvdyBidWlsZGluZyB0aGUgZGF0YSBVUkwgY29ycmVjdGx5XG4gICAgbGV0IHJlc29sdmVkQXMgPSBhc1xuXG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9IQVNfUkVXUklURVMgJiYgYXMuc3RhcnRzV2l0aCgnLycpKSB7XG4gICAgICBjb25zdCByZXdyaXRlc1Jlc3VsdCA9IHJlc29sdmVSZXdyaXRlcyhcbiAgICAgICAgYWRkQmFzZVBhdGgoYWRkTG9jYWxlKGRlbEJhc2VQYXRoKGFzKSwgdGhpcy5sb2NhbGUpKSxcbiAgICAgICAgcGFnZXMsXG4gICAgICAgIHJld3JpdGVzLFxuICAgICAgICBxdWVyeSxcbiAgICAgICAgKHA6IHN0cmluZykgPT4gcmVzb2x2ZUR5bmFtaWNSb3V0ZSh7IHBhdGhuYW1lOiBwIH0sIHBhZ2VzKS5wYXRobmFtZSEsXG4gICAgICAgIHRoaXMubG9jYWxlc1xuICAgICAgKVxuICAgICAgcmVzb2x2ZWRBcyA9IHJld3JpdGVzUmVzdWx0LmFzUGF0aFxuXG4gICAgICBpZiAocmV3cml0ZXNSZXN1bHQubWF0Y2hlZFBhZ2UgJiYgcmV3cml0ZXNSZXN1bHQucmVzb2x2ZWRIcmVmKSB7XG4gICAgICAgIC8vIGlmIHRoaXMgZGlyZWN0bHkgbWF0Y2hlcyBhIHBhZ2Ugd2UgbmVlZCB0byB1cGRhdGUgdGhlIGhyZWYgdG9cbiAgICAgICAgLy8gYWxsb3cgdGhlIGNvcnJlY3QgcGFnZSBjaHVuayB0byBiZSBsb2FkZWRcbiAgICAgICAgcm91dGUgPSByZXdyaXRlc1Jlc3VsdC5yZXNvbHZlZEhyZWZcbiAgICAgICAgcGF0aG5hbWUgPSByZXdyaXRlc1Jlc3VsdC5yZXNvbHZlZEhyZWZcbiAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICAgICAgdXJsID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghaXNMb2NhbFVSTChhcykpIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICBgSW52YWxpZCBocmVmOiBcIiR7dXJsfVwiIGFuZCBhczogXCIke2FzfVwiLCByZWNlaXZlZCByZWxhdGl2ZSBocmVmIGFuZCBleHRlcm5hbCBhc2AgK1xuICAgICAgICAgICAgYFxcblNlZSBtb3JlIGluZm86IGh0dHBzOi8vZXJyLnNoL25leHQuanMvaW52YWxpZC1yZWxhdGl2ZS11cmwtZXh0ZXJuYWwtYXNgXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBhc1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgcmVzb2x2ZWRBcyA9IGRlbExvY2FsZShkZWxCYXNlUGF0aChyZXNvbHZlZEFzKSwgdGhpcy5sb2NhbGUpXG5cbiAgICBpZiAoaXNEeW5hbWljUm91dGUocm91dGUpKSB7XG4gICAgICBjb25zdCBwYXJzZWRBcyA9IHBhcnNlUmVsYXRpdmVVcmwocmVzb2x2ZWRBcylcbiAgICAgIGNvbnN0IGFzUGF0aG5hbWUgPSBwYXJzZWRBcy5wYXRobmFtZVxuXG4gICAgICBjb25zdCByb3V0ZVJlZ2V4ID0gZ2V0Um91dGVSZWdleChyb3V0ZSlcbiAgICAgIGNvbnN0IHJvdXRlTWF0Y2ggPSBnZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleCkoYXNQYXRobmFtZSlcbiAgICAgIGNvbnN0IHNob3VsZEludGVycG9sYXRlID0gcm91dGUgPT09IGFzUGF0aG5hbWVcbiAgICAgIGNvbnN0IGludGVycG9sYXRlZEFzID0gc2hvdWxkSW50ZXJwb2xhdGVcbiAgICAgICAgPyBpbnRlcnBvbGF0ZUFzKHJvdXRlLCBhc1BhdGhuYW1lLCBxdWVyeSlcbiAgICAgICAgOiAoe30gYXMgeyByZXN1bHQ6IHVuZGVmaW5lZDsgcGFyYW1zOiB1bmRlZmluZWQgfSlcblxuICAgICAgaWYgKCFyb3V0ZU1hdGNoIHx8IChzaG91bGRJbnRlcnBvbGF0ZSAmJiAhaW50ZXJwb2xhdGVkQXMucmVzdWx0KSkge1xuICAgICAgICBjb25zdCBtaXNzaW5nUGFyYW1zID0gT2JqZWN0LmtleXMocm91dGVSZWdleC5ncm91cHMpLmZpbHRlcihcbiAgICAgICAgICAocGFyYW0pID0+ICFxdWVyeVtwYXJhbV1cbiAgICAgICAgKVxuXG4gICAgICAgIGlmIChtaXNzaW5nUGFyYW1zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgICBgJHtcbiAgICAgICAgICAgICAgICBzaG91bGRJbnRlcnBvbGF0ZVxuICAgICAgICAgICAgICAgICAgPyBgSW50ZXJwb2xhdGluZyBocmVmYFxuICAgICAgICAgICAgICAgICAgOiBgTWlzbWF0Y2hpbmcgXFxgYXNcXGAgYW5kIFxcYGhyZWZcXGBgXG4gICAgICAgICAgICAgIH0gZmFpbGVkIHRvIG1hbnVhbGx5IHByb3ZpZGUgYCArXG4gICAgICAgICAgICAgICAgYHRoZSBwYXJhbXM6ICR7bWlzc2luZ1BhcmFtcy5qb2luKFxuICAgICAgICAgICAgICAgICAgJywgJ1xuICAgICAgICAgICAgICAgICl9IGluIHRoZSBcXGBocmVmXFxgJ3MgXFxgcXVlcnlcXGBgXG4gICAgICAgICAgICApXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgKHNob3VsZEludGVycG9sYXRlXG4gICAgICAgICAgICAgID8gYFRoZSBwcm92aWRlZCBcXGBocmVmXFxgICgke3VybH0pIHZhbHVlIGlzIG1pc3NpbmcgcXVlcnkgdmFsdWVzICgke21pc3NpbmdQYXJhbXMuam9pbihcbiAgICAgICAgICAgICAgICAgICcsICdcbiAgICAgICAgICAgICAgICApfSkgdG8gYmUgaW50ZXJwb2xhdGVkIHByb3Blcmx5LiBgXG4gICAgICAgICAgICAgIDogYFRoZSBwcm92aWRlZCBcXGBhc1xcYCB2YWx1ZSAoJHthc1BhdGhuYW1lfSkgaXMgaW5jb21wYXRpYmxlIHdpdGggdGhlIFxcYGhyZWZcXGAgdmFsdWUgKCR7cm91dGV9KS4gYCkgK1xuICAgICAgICAgICAgICBgUmVhZCBtb3JlOiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy8ke1xuICAgICAgICAgICAgICAgIHNob3VsZEludGVycG9sYXRlXG4gICAgICAgICAgICAgICAgICA/ICdocmVmLWludGVycG9sYXRpb24tZmFpbGVkJ1xuICAgICAgICAgICAgICAgICAgOiAnaW5jb21wYXRpYmxlLWhyZWYtYXMnXG4gICAgICAgICAgICAgIH1gXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHNob3VsZEludGVycG9sYXRlKSB7XG4gICAgICAgIGFzID0gZm9ybWF0V2l0aFZhbGlkYXRpb24oXG4gICAgICAgICAgT2JqZWN0LmFzc2lnbih7fSwgcGFyc2VkQXMsIHtcbiAgICAgICAgICAgIHBhdGhuYW1lOiBpbnRlcnBvbGF0ZWRBcy5yZXN1bHQsXG4gICAgICAgICAgICBxdWVyeTogb21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5LCBpbnRlcnBvbGF0ZWRBcy5wYXJhbXMhKSxcbiAgICAgICAgICB9KVxuICAgICAgICApXG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBNZXJnZSBwYXJhbXMgaW50byBgcXVlcnlgLCBvdmVyd3JpdGluZyBhbnkgc3BlY2lmaWVkIGluIHNlYXJjaFxuICAgICAgICBPYmplY3QuYXNzaWduKHF1ZXJ5LCByb3V0ZU1hdGNoKVxuICAgICAgfVxuICAgIH1cblxuICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VTdGFydCcsIGFzLCByb3V0ZVByb3BzKVxuXG4gICAgdHJ5IHtcbiAgICAgIGxldCByb3V0ZUluZm8gPSBhd2FpdCB0aGlzLmdldFJvdXRlSW5mbyhcbiAgICAgICAgcm91dGUsXG4gICAgICAgIHBhdGhuYW1lLFxuICAgICAgICBxdWVyeSxcbiAgICAgICAgYXMsXG4gICAgICAgIHJlc29sdmVkQXMsXG4gICAgICAgIHJvdXRlUHJvcHNcbiAgICAgIClcbiAgICAgIGxldCB7IGVycm9yLCBwcm9wcywgX19OX1NTRywgX19OX1NTUCB9ID0gcm91dGVJbmZvXG5cbiAgICAgIC8vIGhhbmRsZSByZWRpcmVjdCBvbiBjbGllbnQtdHJhbnNpdGlvblxuICAgICAgaWYgKChfX05fU1NHIHx8IF9fTl9TU1ApICYmIHByb3BzKSB7XG4gICAgICAgIGlmICgocHJvcHMgYXMgYW55KS5wYWdlUHJvcHMgJiYgKHByb3BzIGFzIGFueSkucGFnZVByb3BzLl9fTl9SRURJUkVDVCkge1xuICAgICAgICAgIGNvbnN0IGRlc3RpbmF0aW9uID0gKHByb3BzIGFzIGFueSkucGFnZVByb3BzLl9fTl9SRURJUkVDVFxuXG4gICAgICAgICAgLy8gY2hlY2sgaWYgZGVzdGluYXRpb24gaXMgaW50ZXJuYWwgKHJlc29sdmVzIHRvIGEgcGFnZSkgYW5kIGF0dGVtcHRcbiAgICAgICAgICAvLyBjbGllbnQtbmF2aWdhdGlvbiBpZiBpdCBpcyBmYWxsaW5nIGJhY2sgdG8gaGFyZCBuYXZpZ2F0aW9uIGlmXG4gICAgICAgICAgLy8gaXQncyBub3RcbiAgICAgICAgICBpZiAoZGVzdGluYXRpb24uc3RhcnRzV2l0aCgnLycpKSB7XG4gICAgICAgICAgICBjb25zdCBwYXJzZWRIcmVmID0gcGFyc2VSZWxhdGl2ZVVybChkZXN0aW5hdGlvbilcbiAgICAgICAgICAgIHJlc29sdmVEeW5hbWljUm91dGUocGFyc2VkSHJlZiwgcGFnZXMsIGZhbHNlKVxuXG4gICAgICAgICAgICBpZiAocGFnZXMuaW5jbHVkZXMocGFyc2VkSHJlZi5wYXRobmFtZSkpIHtcbiAgICAgICAgICAgICAgY29uc3QgeyB1cmw6IG5ld1VybCwgYXM6IG5ld0FzIH0gPSBwcmVwYXJlVXJsQXMoXG4gICAgICAgICAgICAgICAgdGhpcyxcbiAgICAgICAgICAgICAgICBkZXN0aW5hdGlvbixcbiAgICAgICAgICAgICAgICBkZXN0aW5hdGlvblxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIHJldHVybiB0aGlzLmNoYW5nZShtZXRob2QsIG5ld1VybCwgbmV3QXMsIG9wdGlvbnMpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBkZXN0aW5hdGlvblxuICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgoKSA9PiB7fSlcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuaXNQcmV2aWV3ID0gISFwcm9wcy5fX05fUFJFVklFV1xuXG4gICAgICAgIC8vIGhhbmRsZSBTU0cgZGF0YSA0MDRcbiAgICAgICAgaWYgKHByb3BzLm5vdEZvdW5kID09PSBTU0dfREFUQV9OT1RfRk9VTkQpIHtcbiAgICAgICAgICBsZXQgbm90Rm91bmRSb3V0ZVxuXG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQoJy80MDQnKVxuICAgICAgICAgICAgbm90Rm91bmRSb3V0ZSA9ICcvNDA0J1xuICAgICAgICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgICAgIG5vdEZvdW5kUm91dGUgPSAnL19lcnJvcidcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByb3V0ZUluZm8gPSBhd2FpdCB0aGlzLmdldFJvdXRlSW5mbyhcbiAgICAgICAgICAgIG5vdEZvdW5kUm91dGUsXG4gICAgICAgICAgICBub3RGb3VuZFJvdXRlLFxuICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgICBhcyxcbiAgICAgICAgICAgIHJlc29sdmVkQXMsXG4gICAgICAgICAgICB7IHNoYWxsb3c6IGZhbHNlIH1cbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdiZWZvcmVIaXN0b3J5Q2hhbmdlJywgYXMsIHJvdXRlUHJvcHMpXG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucylcblxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgY29uc3QgYXBwQ29tcDogYW55ID0gdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudFxuICAgICAgICA7KHdpbmRvdyBhcyBhbnkpLm5leHQuaXNQcmVyZW5kZXJlZCA9XG4gICAgICAgICAgYXBwQ29tcC5nZXRJbml0aWFsUHJvcHMgPT09IGFwcENvbXAub3JpZ0dldEluaXRpYWxQcm9wcyAmJlxuICAgICAgICAgICEocm91dGVJbmZvLkNvbXBvbmVudCBhcyBhbnkpLmdldEluaXRpYWxQcm9wc1xuICAgICAgfVxuXG4gICAgICAvLyBzaGFsbG93IHJvdXRpbmcgaXMgb25seSBhbGxvd2VkIGZvciBzYW1lIHBhZ2UgVVJMIGNoYW5nZXMuXG4gICAgICBjb25zdCBpc1ZhbGlkU2hhbGxvd1JvdXRlID0gb3B0aW9ucy5zaGFsbG93ICYmIHRoaXMucm91dGUgPT09IHJvdXRlXG5cbiAgICAgIGlmIChcbiAgICAgICAgKG9wdGlvbnMgYXMgYW55KS5faCAmJlxuICAgICAgICBwYXRobmFtZSA9PT0gJy9fZXJyb3InICYmXG4gICAgICAgIHNlbGYuX19ORVhUX0RBVEFfXy5wcm9wcz8ucGFnZVByb3BzPy5zdGF0dXNDb2RlID09PSA1MDAgJiZcbiAgICAgICAgcHJvcHM/LnBhZ2VQcm9wc1xuICAgICAgKSB7XG4gICAgICAgIC8vIGVuc3VyZSBzdGF0dXNDb2RlIGlzIHN0aWxsIGNvcnJlY3QgZm9yIHN0YXRpYyA1MDAgcGFnZVxuICAgICAgICAvLyB3aGVuIHVwZGF0aW5nIHF1ZXJ5IGluZm9ybWF0aW9uXG4gICAgICAgIHByb3BzLnBhZ2VQcm9wcy5zdGF0dXNDb2RlID0gNTAwXG4gICAgICB9XG5cbiAgICAgIGF3YWl0IHRoaXMuc2V0KFxuICAgICAgICByb3V0ZSxcbiAgICAgICAgcGF0aG5hbWUhLFxuICAgICAgICBxdWVyeSxcbiAgICAgICAgY2xlYW5lZEFzLFxuICAgICAgICByb3V0ZUluZm8sXG4gICAgICAgIGZvcmNlZFNjcm9sbCB8fFxuICAgICAgICAgIChpc1ZhbGlkU2hhbGxvd1JvdXRlIHx8ICFvcHRpb25zLnNjcm9sbCA/IG51bGwgOiB7IHg6IDAsIHk6IDAgfSlcbiAgICAgICkuY2F0Y2goKGUpID0+IHtcbiAgICAgICAgaWYgKGUuY2FuY2VsbGVkKSBlcnJvciA9IGVycm9yIHx8IGVcbiAgICAgICAgZWxzZSB0aHJvdyBlXG4gICAgICB9KVxuXG4gICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgZXJyb3IsIGNsZWFuZWRBcywgcm91dGVQcm9wcylcbiAgICAgICAgdGhyb3cgZXJyb3JcbiAgICAgIH1cblxuICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgICAgaWYgKHRoaXMubG9jYWxlKSB7XG4gICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmxhbmcgPSB0aGlzLmxvY2FsZVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCBhcywgcm91dGVQcm9wcylcblxuICAgICAgcmV0dXJuIHRydWVcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGlmIChlcnIuY2FuY2VsbGVkKSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuICAgICAgdGhyb3cgZXJyXG4gICAgfVxuICB9XG5cbiAgY2hhbmdlU3RhdGUoXG4gICAgbWV0aG9kOiBIaXN0b3J5TWV0aG9kLFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzOiBzdHJpbmcsXG4gICAgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnMgPSB7fVxuICApOiB2b2lkIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgaWYgKHR5cGVvZiB3aW5kb3cuaGlzdG9yeSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkgaXMgbm90IGF2YWlsYWJsZS5gKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiB3aW5kb3cuaGlzdG9yeVttZXRob2RdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeS4ke21ldGhvZH0gaXMgbm90IGF2YWlsYWJsZWApXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChtZXRob2QgIT09ICdwdXNoU3RhdGUnIHx8IGdldFVSTCgpICE9PSBhcykge1xuICAgICAgdGhpcy5fc2hhbGxvdyA9IG9wdGlvbnMuc2hhbGxvd1xuICAgICAgd2luZG93Lmhpc3RvcnlbbWV0aG9kXShcbiAgICAgICAge1xuICAgICAgICAgIHVybCxcbiAgICAgICAgICBhcyxcbiAgICAgICAgICBvcHRpb25zLFxuICAgICAgICAgIF9fTjogdHJ1ZSxcbiAgICAgICAgICBpZHg6IHRoaXMuX2lkeCA9IG1ldGhvZCAhPT0gJ3B1c2hTdGF0ZScgPyB0aGlzLl9pZHggOiB0aGlzLl9pZHggKyAxLFxuICAgICAgICB9IGFzIEhpc3RvcnlTdGF0ZSxcbiAgICAgICAgLy8gTW9zdCBicm93c2VycyBjdXJyZW50bHkgaWdub3JlcyB0aGlzIHBhcmFtZXRlciwgYWx0aG91Z2ggdGhleSBtYXkgdXNlIGl0IGluIHRoZSBmdXR1cmUuXG4gICAgICAgIC8vIFBhc3NpbmcgdGhlIGVtcHR5IHN0cmluZyBoZXJlIHNob3VsZCBiZSBzYWZlIGFnYWluc3QgZnV0dXJlIGNoYW5nZXMgdG8gdGhlIG1ldGhvZC5cbiAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0hpc3RvcnkvcmVwbGFjZVN0YXRlXG4gICAgICAgICcnLFxuICAgICAgICBhc1xuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGhhbmRsZVJvdXRlSW5mb0Vycm9yKFxuICAgIGVycjogRXJyb3IgJiB7IGNvZGU6IGFueTsgY2FuY2VsbGVkOiBib29sZWFuIH0sXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gICAgYXM6IHN0cmluZyxcbiAgICByb3V0ZVByb3BzOiBSb3V0ZVByb3BlcnRpZXMsXG4gICAgbG9hZEVycm9yRmFpbD86IGJvb2xlYW5cbiAgKTogUHJvbWlzZTxDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm8+IHtcbiAgICBpZiAoZXJyLmNhbmNlbGxlZCkge1xuICAgICAgLy8gYnViYmxlIHVwIGNhbmNlbGxhdGlvbiBlcnJvcnNcbiAgICAgIHRocm93IGVyclxuICAgIH1cblxuICAgIGlmIChpc0Fzc2V0RXJyb3IoZXJyKSB8fCBsb2FkRXJyb3JGYWlsKSB7XG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBlcnIsIGFzLCByb3V0ZVByb3BzKVxuXG4gICAgICAvLyBJZiB3ZSBjYW4ndCBsb2FkIHRoZSBwYWdlIGl0IGNvdWxkIGJlIG9uZSBvZiBmb2xsb3dpbmcgcmVhc29uc1xuICAgICAgLy8gIDEuIFBhZ2UgZG9lc24ndCBleGlzdHNcbiAgICAgIC8vICAyLiBQYWdlIGRvZXMgZXhpc3QgaW4gYSBkaWZmZXJlbnQgem9uZVxuICAgICAgLy8gIDMuIEludGVybmFsIGVycm9yIHdoaWxlIGxvYWRpbmcgdGhlIHBhZ2VcblxuICAgICAgLy8gU28sIGRvaW5nIGEgaGFyZCByZWxvYWQgaXMgdGhlIHByb3BlciB3YXkgdG8gZGVhbCB3aXRoIHRoaXMuXG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGFzXG5cbiAgICAgIC8vIENoYW5naW5nIHRoZSBVUkwgZG9lc24ndCBibG9jayBleGVjdXRpbmcgdGhlIGN1cnJlbnQgY29kZSBwYXRoLlxuICAgICAgLy8gU28gbGV0J3MgdGhyb3cgYSBjYW5jZWxsYXRpb24gZXJyb3Igc3RvcCB0aGUgcm91dGluZyBsb2dpYy5cbiAgICAgIHRocm93IGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKVxuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICBsZXQgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlXG4gICAgICBsZXQgc3R5bGVTaGVldHM6IFN0eWxlU2hlZXRUdXBsZVtdXG4gICAgICBsZXQgcHJvcHM6IFJlY29yZDxzdHJpbmcsIGFueT4gfCB1bmRlZmluZWRcblxuICAgICAgaWYgKFxuICAgICAgICB0eXBlb2YgQ29tcG9uZW50ISA9PT0gJ3VuZGVmaW5lZCcgfHxcbiAgICAgICAgdHlwZW9mIHN0eWxlU2hlZXRzISA9PT0gJ3VuZGVmaW5lZCdcbiAgICAgICkge1xuICAgICAgICA7KHsgcGFnZTogQ29tcG9uZW50LCBzdHlsZVNoZWV0cyB9ID0gYXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudChcbiAgICAgICAgICAnL19lcnJvcidcbiAgICAgICAgKSlcbiAgICAgIH1cblxuICAgICAgY29uc3Qgcm91dGVJbmZvOiBDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm8gPSB7XG4gICAgICAgIHByb3BzLFxuICAgICAgICBDb21wb25lbnQsXG4gICAgICAgIHN0eWxlU2hlZXRzLFxuICAgICAgICBlcnIsXG4gICAgICAgIGVycm9yOiBlcnIsXG4gICAgICB9XG5cbiAgICAgIGlmICghcm91dGVJbmZvLnByb3BzKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgcm91dGVJbmZvLnByb3BzID0gYXdhaXQgdGhpcy5nZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LCB7XG4gICAgICAgICAgICBlcnIsXG4gICAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgIH0gYXMgYW55KVxuICAgICAgICB9IGNhdGNoIChnaXBFcnIpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiBlcnJvciBwYWdlIGBnZXRJbml0aWFsUHJvcHNgOiAnLCBnaXBFcnIpXG4gICAgICAgICAgcm91dGVJbmZvLnByb3BzID0ge31cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gcm91dGVJbmZvXG4gICAgfSBjYXRjaCAocm91dGVJbmZvRXJyKSB7XG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVSb3V0ZUluZm9FcnJvcihcbiAgICAgICAgcm91dGVJbmZvRXJyLFxuICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgcXVlcnksXG4gICAgICAgIGFzLFxuICAgICAgICByb3V0ZVByb3BzLFxuICAgICAgICB0cnVlXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgYXN5bmMgZ2V0Um91dGVJbmZvKFxuICAgIHJvdXRlOiBzdHJpbmcsXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogYW55LFxuICAgIGFzOiBzdHJpbmcsXG4gICAgcmVzb2x2ZWRBczogc3RyaW5nLFxuICAgIHJvdXRlUHJvcHM6IFJvdXRlUHJvcGVydGllc1xuICApOiBQcm9taXNlPFByaXZhdGVSb3V0ZUluZm8+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgZXhpc3RpbmdSb3V0ZUluZm86IFByaXZhdGVSb3V0ZUluZm8gfCB1bmRlZmluZWQgPSB0aGlzLmNvbXBvbmVudHNbXG4gICAgICAgIHJvdXRlXG4gICAgICBdXG4gICAgICBpZiAocm91dGVQcm9wcy5zaGFsbG93ICYmIGV4aXN0aW5nUm91dGVJbmZvICYmIHRoaXMucm91dGUgPT09IHJvdXRlKSB7XG4gICAgICAgIHJldHVybiBleGlzdGluZ1JvdXRlSW5mb1xuICAgICAgfVxuXG4gICAgICBjb25zdCBjYWNoZWRSb3V0ZUluZm86IENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mbyB8IHVuZGVmaW5lZCA9XG4gICAgICAgIGV4aXN0aW5nUm91dGVJbmZvICYmICdpbml0aWFsJyBpbiBleGlzdGluZ1JvdXRlSW5mb1xuICAgICAgICAgID8gdW5kZWZpbmVkXG4gICAgICAgICAgOiBleGlzdGluZ1JvdXRlSW5mb1xuICAgICAgY29uc3Qgcm91dGVJbmZvOiBDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm8gPSBjYWNoZWRSb3V0ZUluZm9cbiAgICAgICAgPyBjYWNoZWRSb3V0ZUluZm9cbiAgICAgICAgOiBhd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KHJvdXRlKS50aGVuKChyZXMpID0+ICh7XG4gICAgICAgICAgICBDb21wb25lbnQ6IHJlcy5wYWdlLFxuICAgICAgICAgICAgc3R5bGVTaGVldHM6IHJlcy5zdHlsZVNoZWV0cyxcbiAgICAgICAgICAgIF9fTl9TU0c6IHJlcy5tb2QuX19OX1NTRyxcbiAgICAgICAgICAgIF9fTl9TU1A6IHJlcy5tb2QuX19OX1NTUCxcbiAgICAgICAgICB9KSlcblxuICAgICAgY29uc3QgeyBDb21wb25lbnQsIF9fTl9TU0csIF9fTl9TU1AgfSA9IHJvdXRlSW5mb1xuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBjb25zdCB7IGlzVmFsaWRFbGVtZW50VHlwZSB9ID0gcmVxdWlyZSgncmVhY3QtaXMnKVxuICAgICAgICBpZiAoIWlzVmFsaWRFbGVtZW50VHlwZShDb21wb25lbnQpKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgYFRoZSBkZWZhdWx0IGV4cG9ydCBpcyBub3QgYSBSZWFjdCBDb21wb25lbnQgaW4gcGFnZTogXCIke3BhdGhuYW1lfVwiYFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsZXQgZGF0YUhyZWY6IHN0cmluZyB8IHVuZGVmaW5lZFxuXG4gICAgICBpZiAoX19OX1NTRyB8fCBfX05fU1NQKSB7XG4gICAgICAgIGRhdGFIcmVmID0gdGhpcy5wYWdlTG9hZGVyLmdldERhdGFIcmVmKFxuICAgICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWUsIHF1ZXJ5IH0pLFxuICAgICAgICAgIHJlc29sdmVkQXMsXG4gICAgICAgICAgX19OX1NTRyxcbiAgICAgICAgICB0aGlzLmxvY2FsZVxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHByb3BzID0gYXdhaXQgdGhpcy5fZ2V0RGF0YTxDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm8+KCgpID0+XG4gICAgICAgIF9fTl9TU0dcbiAgICAgICAgICA/IHRoaXMuX2dldFN0YXRpY0RhdGEoZGF0YUhyZWYhKVxuICAgICAgICAgIDogX19OX1NTUFxuICAgICAgICAgID8gdGhpcy5fZ2V0U2VydmVyRGF0YShkYXRhSHJlZiEpXG4gICAgICAgICAgOiB0aGlzLmdldEluaXRpYWxQcm9wcyhcbiAgICAgICAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICAgICAgICAvLyB3ZSBwcm92aWRlIEFwcFRyZWUgbGF0ZXIgc28gdGhpcyBuZWVkcyB0byBiZSBgYW55YFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgICAgICAgYXNQYXRoOiBhcyxcbiAgICAgICAgICAgICAgfSBhcyBhbnlcbiAgICAgICAgICAgIClcbiAgICAgIClcblxuICAgICAgcm91dGVJbmZvLnByb3BzID0gcHJvcHNcbiAgICAgIHRoaXMuY29tcG9uZW50c1tyb3V0ZV0gPSByb3V0ZUluZm9cbiAgICAgIHJldHVybiByb3V0ZUluZm9cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZVJvdXRlSW5mb0Vycm9yKGVyciwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgcm91dGVQcm9wcylcbiAgICB9XG4gIH1cblxuICBzZXQoXG4gICAgcm91dGU6IHN0cmluZyxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgICBhczogc3RyaW5nLFxuICAgIGRhdGE6IFByaXZhdGVSb3V0ZUluZm8sXG4gICAgcmVzZXRTY3JvbGw6IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfSB8IG51bGxcbiAgKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgdGhpcy5pc0ZhbGxiYWNrID0gZmFsc2VcblxuICAgIHRoaXMucm91dGUgPSByb3V0ZVxuICAgIHRoaXMucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgIHRoaXMucXVlcnkgPSBxdWVyeVxuICAgIHRoaXMuYXNQYXRoID0gYXNcbiAgICByZXR1cm4gdGhpcy5ub3RpZnkoZGF0YSwgcmVzZXRTY3JvbGwpXG4gIH1cblxuICAvKipcbiAgICogQ2FsbGJhY2sgdG8gZXhlY3V0ZSBiZWZvcmUgcmVwbGFjaW5nIHJvdXRlciBzdGF0ZVxuICAgKiBAcGFyYW0gY2IgY2FsbGJhY2sgdG8gYmUgZXhlY3V0ZWRcbiAgICovXG4gIGJlZm9yZVBvcFN0YXRlKGNiOiBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrKSB7XG4gICAgdGhpcy5fYnBzID0gY2JcbiAgfVxuXG4gIG9ubHlBSGFzaENoYW5nZShhczogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgaWYgKCF0aGlzLmFzUGF0aCkgcmV0dXJuIGZhbHNlXG4gICAgY29uc3QgW29sZFVybE5vSGFzaCwgb2xkSGFzaF0gPSB0aGlzLmFzUGF0aC5zcGxpdCgnIycpXG4gICAgY29uc3QgW25ld1VybE5vSGFzaCwgbmV3SGFzaF0gPSBhcy5zcGxpdCgnIycpXG5cbiAgICAvLyBNYWtlcyBzdXJlIHdlIHNjcm9sbCB0byB0aGUgcHJvdmlkZWQgaGFzaCBpZiB0aGUgdXJsL2hhc2ggYXJlIHRoZSBzYW1lXG4gICAgaWYgKG5ld0hhc2ggJiYgb2xkVXJsTm9IYXNoID09PSBuZXdVcmxOb0hhc2ggJiYgb2xkSGFzaCA9PT0gbmV3SGFzaCkge1xuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgdXJscyBhcmUgY2hhbmdlLCB0aGVyZSdzIG1vcmUgdGhhbiBhIGhhc2ggY2hhbmdlXG4gICAgaWYgKG9sZFVybE5vSGFzaCAhPT0gbmV3VXJsTm9IYXNoKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgaGFzaCBoYXMgY2hhbmdlZCwgdGhlbiBpdCdzIGEgaGFzaCBvbmx5IGNoYW5nZS5cbiAgICAvLyBUaGlzIGNoZWNrIGlzIG5lY2Vzc2FyeSB0byBoYW5kbGUgYm90aCB0aGUgZW50ZXIgYW5kXG4gICAgLy8gbGVhdmUgaGFzaCA9PT0gJycgY2FzZXMuIFRoZSBpZGVudGl0eSBjYXNlIGZhbGxzIHRocm91Z2hcbiAgICAvLyBhbmQgaXMgdHJlYXRlZCBhcyBhIG5leHQgcmVsb2FkLlxuICAgIHJldHVybiBvbGRIYXNoICE9PSBuZXdIYXNoXG4gIH1cblxuICBzY3JvbGxUb0hhc2goYXM6IHN0cmluZyk6IHZvaWQge1xuICAgIGNvbnN0IFssIGhhc2hdID0gYXMuc3BsaXQoJyMnKVxuICAgIC8vIFNjcm9sbCB0byB0b3AgaWYgdGhlIGhhc2ggaXMganVzdCBgI2Agd2l0aCBubyB2YWx1ZSBvciBgI3RvcGBcbiAgICAvLyBUbyBtaXJyb3IgYnJvd3NlcnNcbiAgICBpZiAoaGFzaCA9PT0gJycgfHwgaGFzaCA9PT0gJ3RvcCcpIHtcbiAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gRmlyc3Qgd2UgY2hlY2sgaWYgdGhlIGVsZW1lbnQgYnkgaWQgaXMgZm91bmRcbiAgICBjb25zdCBpZEVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaGFzaClcbiAgICBpZiAoaWRFbCkge1xuICAgICAgaWRFbC5zY3JvbGxJbnRvVmlldygpXG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgLy8gSWYgdGhlcmUncyBubyBlbGVtZW50IHdpdGggdGhlIGlkLCB3ZSBjaGVjayB0aGUgYG5hbWVgIHByb3BlcnR5XG4gICAgLy8gVG8gbWlycm9yIGJyb3dzZXJzXG4gICAgY29uc3QgbmFtZUVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoaGFzaClbMF1cbiAgICBpZiAobmFtZUVsKSB7XG4gICAgICBuYW1lRWwuc2Nyb2xsSW50b1ZpZXcoKVxuICAgIH1cbiAgfVxuXG4gIHVybElzTmV3KGFzUGF0aDogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuYXNQYXRoICE9PSBhc1BhdGhcbiAgfVxuXG4gIC8qKlxuICAgKiBQcmVmZXRjaCBwYWdlIGNvZGUsIHlvdSBtYXkgd2FpdCBmb3IgdGhlIGRhdGEgZHVyaW5nIHBhZ2UgcmVuZGVyaW5nLlxuICAgKiBUaGlzIGZlYXR1cmUgb25seSB3b3JrcyBpbiBwcm9kdWN0aW9uIVxuICAgKiBAcGFyYW0gdXJsIHRoZSBocmVmIG9mIHByZWZldGNoZWQgcGFnZVxuICAgKiBAcGFyYW0gYXNQYXRoIHRoZSBhcyBwYXRoIG9mIHRoZSBwcmVmZXRjaGVkIHBhZ2VcbiAgICovXG4gIGFzeW5jIHByZWZldGNoKFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzUGF0aDogc3RyaW5nID0gdXJsLFxuICAgIG9wdGlvbnM6IFByZWZldGNoT3B0aW9ucyA9IHt9XG4gICk6IFByb21pc2U8dm9pZD4ge1xuICAgIGxldCBwYXJzZWQgPSBwYXJzZVJlbGF0aXZlVXJsKHVybClcblxuICAgIGxldCB7IHBhdGhuYW1lIH0gPSBwYXJzZWRcblxuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICBpZiAob3B0aW9ucy5sb2NhbGUgPT09IGZhbHNlKSB7XG4gICAgICAgIHBhdGhuYW1lID0gbm9ybWFsaXplTG9jYWxlUGF0aCEocGF0aG5hbWUsIHRoaXMubG9jYWxlcykucGF0aG5hbWVcbiAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICAgICAgdXJsID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKVxuXG4gICAgICAgIGxldCBwYXJzZWRBcyA9IHBhcnNlUmVsYXRpdmVVcmwoYXNQYXRoKVxuICAgICAgICBjb25zdCBsb2NhbGVQYXRoUmVzdWx0ID0gbm9ybWFsaXplTG9jYWxlUGF0aCEoXG4gICAgICAgICAgcGFyc2VkQXMucGF0aG5hbWUsXG4gICAgICAgICAgdGhpcy5sb2NhbGVzXG4gICAgICAgIClcbiAgICAgICAgcGFyc2VkQXMucGF0aG5hbWUgPSBsb2NhbGVQYXRoUmVzdWx0LnBhdGhuYW1lXG4gICAgICAgIG9wdGlvbnMubG9jYWxlID0gbG9jYWxlUGF0aFJlc3VsdC5kZXRlY3RlZExvY2FsZSB8fCB0aGlzLmRlZmF1bHRMb2NhbGVcbiAgICAgICAgYXNQYXRoID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkQXMpXG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgcGFnZXMgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIuZ2V0UGFnZUxpc3QoKVxuXG4gICAgcGFyc2VkID0gcmVzb2x2ZUR5bmFtaWNSb3V0ZShwYXJzZWQsIHBhZ2VzLCBmYWxzZSkgYXMgdHlwZW9mIHBhcnNlZFxuXG4gICAgaWYgKHBhcnNlZC5wYXRobmFtZSAhPT0gcGF0aG5hbWUpIHtcbiAgICAgIHBhdGhuYW1lID0gcGFyc2VkLnBhdGhuYW1lXG4gICAgICB1cmwgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpXG4gICAgfVxuICAgIGxldCByb3V0ZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKVxuICAgIGxldCByZXNvbHZlZEFzID0gYXNQYXRoXG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0hBU19SRVdSSVRFUyAmJiBhc1BhdGguc3RhcnRzV2l0aCgnLycpKSB7XG4gICAgICBsZXQgcmV3cml0ZXM6IGFueVtdXG4gICAgICA7KHsgX19yZXdyaXRlczogcmV3cml0ZXMgfSA9IGF3YWl0IGdldENsaWVudEJ1aWxkTWFuaWZlc3QoKSlcblxuICAgICAgY29uc3QgcmV3cml0ZXNSZXN1bHQgPSByZXNvbHZlUmV3cml0ZXMoXG4gICAgICAgIGFkZEJhc2VQYXRoKGFkZExvY2FsZShkZWxCYXNlUGF0aChhc1BhdGgpLCB0aGlzLmxvY2FsZSkpLFxuICAgICAgICBwYWdlcyxcbiAgICAgICAgcmV3cml0ZXMsXG4gICAgICAgIHBhcnNlZC5xdWVyeSxcbiAgICAgICAgKHA6IHN0cmluZykgPT4gcmVzb2x2ZUR5bmFtaWNSb3V0ZSh7IHBhdGhuYW1lOiBwIH0sIHBhZ2VzKS5wYXRobmFtZSEsXG4gICAgICAgIHRoaXMubG9jYWxlc1xuICAgICAgKVxuXG4gICAgICBpZiAocmV3cml0ZXNSZXN1bHQubWF0Y2hlZFBhZ2UgJiYgcmV3cml0ZXNSZXN1bHQucmVzb2x2ZWRIcmVmKSB7XG4gICAgICAgIC8vIGlmIHRoaXMgZGlyZWN0bHkgbWF0Y2hlcyBhIHBhZ2Ugd2UgbmVlZCB0byB1cGRhdGUgdGhlIGhyZWYgdG9cbiAgICAgICAgLy8gYWxsb3cgdGhlIGNvcnJlY3QgcGFnZSBjaHVuayB0byBiZSBsb2FkZWRcbiAgICAgICAgcm91dGUgPSByZXdyaXRlc1Jlc3VsdC5yZXNvbHZlZEhyZWZcbiAgICAgICAgcGF0aG5hbWUgPSByZXdyaXRlc1Jlc3VsdC5yZXNvbHZlZEhyZWZcbiAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICAgICAgdXJsID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKVxuICAgICAgICByZXNvbHZlZEFzID0gcmV3cml0ZXNSZXN1bHQuYXNQYXRoXG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gUHJlZmV0Y2ggaXMgbm90IHN1cHBvcnRlZCBpbiBkZXZlbG9wbWVudCBtb2RlIGJlY2F1c2UgaXQgd291bGQgdHJpZ2dlciBvbi1kZW1hbmQtZW50cmllc1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgICB0aGlzLnBhZ2VMb2FkZXIuX2lzU3NnKHVybCkudGhlbigoaXNTc2c6IGJvb2xlYW4pID0+IHtcbiAgICAgICAgcmV0dXJuIGlzU3NnXG4gICAgICAgICAgPyB0aGlzLl9nZXRTdGF0aWNEYXRhKFxuICAgICAgICAgICAgICB0aGlzLnBhZ2VMb2FkZXIuZ2V0RGF0YUhyZWYoXG4gICAgICAgICAgICAgICAgdXJsLFxuICAgICAgICAgICAgICAgIHJlc29sdmVkQXMsXG4gICAgICAgICAgICAgICAgdHJ1ZSxcbiAgICAgICAgICAgICAgICB0eXBlb2Ygb3B0aW9ucy5sb2NhbGUgIT09ICd1bmRlZmluZWQnXG4gICAgICAgICAgICAgICAgICA/IG9wdGlvbnMubG9jYWxlXG4gICAgICAgICAgICAgICAgICA6IHRoaXMubG9jYWxlXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIClcbiAgICAgICAgICA6IGZhbHNlXG4gICAgICB9KSxcbiAgICAgIHRoaXMucGFnZUxvYWRlcltvcHRpb25zLnByaW9yaXR5ID8gJ2xvYWRQYWdlJyA6ICdwcmVmZXRjaCddKHJvdXRlKSxcbiAgICBdKVxuICB9XG5cbiAgYXN5bmMgZmV0Y2hDb21wb25lbnQocm91dGU6IHN0cmluZyk6IFByb21pc2U8R29vZFBhZ2VDYWNoZT4ge1xuICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZVxuICAgIGNvbnN0IGNhbmNlbCA9ICh0aGlzLmNsYyA9ICgpID0+IHtcbiAgICAgIGNhbmNlbGxlZCA9IHRydWVcbiAgICB9KVxuXG4gICAgY29uc3QgY29tcG9uZW50UmVzdWx0ID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmxvYWRQYWdlKHJvdXRlKVxuXG4gICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgY29uc3QgZXJyb3I6IGFueSA9IG5ldyBFcnJvcihcbiAgICAgICAgYEFib3J0IGZldGNoaW5nIGNvbXBvbmVudCBmb3Igcm91dGU6IFwiJHtyb3V0ZX1cImBcbiAgICAgIClcbiAgICAgIGVycm9yLmNhbmNlbGxlZCA9IHRydWVcbiAgICAgIHRocm93IGVycm9yXG4gICAgfVxuXG4gICAgaWYgKGNhbmNlbCA9PT0gdGhpcy5jbGMpIHtcbiAgICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIH1cblxuICAgIHJldHVybiBjb21wb25lbnRSZXN1bHRcbiAgfVxuXG4gIF9nZXREYXRhPFQ+KGZuOiAoKSA9PiBQcm9taXNlPFQ+KTogUHJvbWlzZTxUPiB7XG4gICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlXG4gICAgY29uc3QgY2FuY2VsID0gKCkgPT4ge1xuICAgICAgY2FuY2VsbGVkID0gdHJ1ZVxuICAgIH1cbiAgICB0aGlzLmNsYyA9IGNhbmNlbFxuICAgIHJldHVybiBmbigpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICAgIHRoaXMuY2xjID0gbnVsbFxuICAgICAgfVxuXG4gICAgICBpZiAoY2FuY2VsbGVkKSB7XG4gICAgICAgIGNvbnN0IGVycjogYW55ID0gbmV3IEVycm9yKCdMb2FkaW5nIGluaXRpYWwgcHJvcHMgY2FuY2VsbGVkJylcbiAgICAgICAgZXJyLmNhbmNlbGxlZCA9IHRydWVcbiAgICAgICAgdGhyb3cgZXJyXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBkYXRhXG4gICAgfSlcbiAgfVxuXG4gIF9nZXRTdGF0aWNEYXRhKGRhdGFIcmVmOiBzdHJpbmcpOiBQcm9taXNlPG9iamVjdD4ge1xuICAgIGNvbnN0IHsgaHJlZjogY2FjaGVLZXkgfSA9IG5ldyBVUkwoZGF0YUhyZWYsIHdpbmRvdy5sb2NhdGlvbi5ocmVmKVxuICAgIGlmIChcbiAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicgJiZcbiAgICAgICF0aGlzLmlzUHJldmlldyAmJlxuICAgICAgdGhpcy5zZGNbY2FjaGVLZXldXG4gICAgKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMuc2RjW2NhY2hlS2V5XSlcbiAgICB9XG4gICAgcmV0dXJuIGZldGNoTmV4dERhdGEoZGF0YUhyZWYsIHRoaXMuaXNTc3IpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIHRoaXMuc2RjW2NhY2hlS2V5XSA9IGRhdGFcbiAgICAgIHJldHVybiBkYXRhXG4gICAgfSlcbiAgfVxuXG4gIF9nZXRTZXJ2ZXJEYXRhKGRhdGFIcmVmOiBzdHJpbmcpOiBQcm9taXNlPG9iamVjdD4ge1xuICAgIGNvbnN0IHsgaHJlZjogcmVzb3VyY2VLZXkgfSA9IG5ldyBVUkwoZGF0YUhyZWYsIHdpbmRvdy5sb2NhdGlvbi5ocmVmKVxuICAgIGlmICh0aGlzLnNkcltyZXNvdXJjZUtleV0pIHtcbiAgICAgIHJldHVybiB0aGlzLnNkcltyZXNvdXJjZUtleV1cbiAgICB9XG4gICAgcmV0dXJuICh0aGlzLnNkcltyZXNvdXJjZUtleV0gPSBmZXRjaE5leHREYXRhKGRhdGFIcmVmLCB0aGlzLmlzU3NyKVxuICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgZGVsZXRlIHRoaXMuc2RyW3Jlc291cmNlS2V5XVxuICAgICAgICByZXR1cm4gZGF0YVxuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgIGRlbGV0ZSB0aGlzLnNkcltyZXNvdXJjZUtleV1cbiAgICAgICAgdGhyb3cgZXJyXG4gICAgICB9KSlcbiAgfVxuXG4gIGdldEluaXRpYWxQcm9wcyhcbiAgICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGUsXG4gICAgY3R4OiBOZXh0UGFnZUNvbnRleHRcbiAgKTogUHJvbWlzZTxhbnk+IHtcbiAgICBjb25zdCB7IENvbXBvbmVudDogQXBwIH0gPSB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ11cbiAgICBjb25zdCBBcHBUcmVlID0gdGhpcy5fd3JhcEFwcChBcHAgYXMgQXBwQ29tcG9uZW50KVxuICAgIGN0eC5BcHBUcmVlID0gQXBwVHJlZVxuICAgIHJldHVybiBsb2FkR2V0SW5pdGlhbFByb3BzPEFwcENvbnRleHRUeXBlPFJvdXRlcj4+KEFwcCwge1xuICAgICAgQXBwVHJlZSxcbiAgICAgIENvbXBvbmVudCxcbiAgICAgIHJvdXRlcjogdGhpcyxcbiAgICAgIGN0eCxcbiAgICB9KVxuICB9XG5cbiAgYWJvcnRDb21wb25lbnRMb2FkKGFzOiBzdHJpbmcsIHJvdXRlUHJvcHM6IFJvdXRlUHJvcGVydGllcyk6IHZvaWQge1xuICAgIGlmICh0aGlzLmNsYykge1xuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KFxuICAgICAgICAncm91dGVDaGFuZ2VFcnJvcicsXG4gICAgICAgIGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKSxcbiAgICAgICAgYXMsXG4gICAgICAgIHJvdXRlUHJvcHNcbiAgICAgIClcbiAgICAgIHRoaXMuY2xjKClcbiAgICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIH1cbiAgfVxuXG4gIG5vdGlmeShcbiAgICBkYXRhOiBQcml2YXRlUm91dGVJbmZvLFxuICAgIHJlc2V0U2Nyb2xsOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH0gfCBudWxsXG4gICk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiB0aGlzLnN1YihcbiAgICAgIGRhdGEsXG4gICAgICB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50IGFzIEFwcENvbXBvbmVudCxcbiAgICAgIHJlc2V0U2Nyb2xsXG4gICAgKVxuICB9XG59XG4iLCIvLyBGb3JtYXQgZnVuY3Rpb24gbW9kaWZpZWQgZnJvbSBub2RlanNcbi8vIENvcHlyaWdodCBKb3llbnQsIEluYy4gYW5kIG90aGVyIE5vZGUgY29udHJpYnV0b3JzLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhXG4vLyBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlXG4vLyBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmdcbi8vIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCxcbi8vIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXRcbi8vIHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZVxuLy8gZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWRcbi8vIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1Ncbi8vIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0Zcbi8vIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU5cbi8vIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLFxuLy8gREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SXG4vLyBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFXG4vLyBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0ICogYXMgcXVlcnlzdHJpbmcgZnJvbSAnLi9xdWVyeXN0cmluZydcblxuY29uc3Qgc2xhc2hlZFByb3RvY29scyA9IC9odHRwcz98ZnRwfGdvcGhlcnxmaWxlL1xuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0VXJsKHVybE9iajogVXJsT2JqZWN0KSB7XG4gIGxldCB7IGF1dGgsIGhvc3RuYW1lIH0gPSB1cmxPYmpcbiAgbGV0IHByb3RvY29sID0gdXJsT2JqLnByb3RvY29sIHx8ICcnXG4gIGxldCBwYXRobmFtZSA9IHVybE9iai5wYXRobmFtZSB8fCAnJ1xuICBsZXQgaGFzaCA9IHVybE9iai5oYXNoIHx8ICcnXG4gIGxldCBxdWVyeSA9IHVybE9iai5xdWVyeSB8fCAnJ1xuICBsZXQgaG9zdDogc3RyaW5nIHwgZmFsc2UgPSBmYWxzZVxuXG4gIGF1dGggPSBhdXRoID8gZW5jb2RlVVJJQ29tcG9uZW50KGF1dGgpLnJlcGxhY2UoLyUzQS9pLCAnOicpICsgJ0AnIDogJydcblxuICBpZiAodXJsT2JqLmhvc3QpIHtcbiAgICBob3N0ID0gYXV0aCArIHVybE9iai5ob3N0XG4gIH0gZWxzZSBpZiAoaG9zdG5hbWUpIHtcbiAgICBob3N0ID0gYXV0aCArICh+aG9zdG5hbWUuaW5kZXhPZignOicpID8gYFske2hvc3RuYW1lfV1gIDogaG9zdG5hbWUpXG4gICAgaWYgKHVybE9iai5wb3J0KSB7XG4gICAgICBob3N0ICs9ICc6JyArIHVybE9iai5wb3J0XG4gICAgfVxuICB9XG5cbiAgaWYgKHF1ZXJ5ICYmIHR5cGVvZiBxdWVyeSA9PT0gJ29iamVjdCcpIHtcbiAgICBxdWVyeSA9IFN0cmluZyhxdWVyeXN0cmluZy51cmxRdWVyeVRvU2VhcmNoUGFyYW1zKHF1ZXJ5IGFzIFBhcnNlZFVybFF1ZXJ5KSlcbiAgfVxuXG4gIGxldCBzZWFyY2ggPSB1cmxPYmouc2VhcmNoIHx8IChxdWVyeSAmJiBgPyR7cXVlcnl9YCkgfHwgJydcblxuICBpZiAocHJvdG9jb2wgJiYgcHJvdG9jb2wuc3Vic3RyKC0xKSAhPT0gJzonKSBwcm90b2NvbCArPSAnOidcblxuICBpZiAoXG4gICAgdXJsT2JqLnNsYXNoZXMgfHxcbiAgICAoKCFwcm90b2NvbCB8fCBzbGFzaGVkUHJvdG9jb2xzLnRlc3QocHJvdG9jb2wpKSAmJiBob3N0ICE9PSBmYWxzZSlcbiAgKSB7XG4gICAgaG9zdCA9ICcvLycgKyAoaG9zdCB8fCAnJylcbiAgICBpZiAocGF0aG5hbWUgJiYgcGF0aG5hbWVbMF0gIT09ICcvJykgcGF0aG5hbWUgPSAnLycgKyBwYXRobmFtZVxuICB9IGVsc2UgaWYgKCFob3N0KSB7XG4gICAgaG9zdCA9ICcnXG4gIH1cblxuICBpZiAoaGFzaCAmJiBoYXNoWzBdICE9PSAnIycpIGhhc2ggPSAnIycgKyBoYXNoXG4gIGlmIChzZWFyY2ggJiYgc2VhcmNoWzBdICE9PSAnPycpIHNlYXJjaCA9ICc/JyArIHNlYXJjaFxuXG4gIHBhdGhuYW1lID0gcGF0aG5hbWUucmVwbGFjZSgvWz8jXS9nLCBlbmNvZGVVUklDb21wb25lbnQpXG4gIHNlYXJjaCA9IHNlYXJjaC5yZXBsYWNlKCcjJywgJyUyMycpXG5cbiAgcmV0dXJuIGAke3Byb3RvY29sfSR7aG9zdH0ke3BhdGhuYW1lfSR7c2VhcmNofSR7aGFzaH1gXG59XG4iLCIvLyBJZGVudGlmeSAvW3BhcmFtXS8gaW4gcm91dGUgc3RyaW5nXG5jb25zdCBURVNUX1JPVVRFID0gL1xcL1xcW1teL10rP1xcXSg/PVxcL3wkKS9cblxuZXhwb3J0IGZ1bmN0aW9uIGlzRHluYW1pY1JvdXRlKHJvdXRlOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgcmV0dXJuIFRFU1RfUk9VVEUudGVzdChyb3V0ZSlcbn1cbiIsImltcG9ydCB7IGdldExvY2F0aW9uT3JpZ2luIH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5pbXBvcnQgeyBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5IH0gZnJvbSAnLi9xdWVyeXN0cmluZydcblxuLyoqXG4gKiBQYXJzZXMgcGF0aC1yZWxhdGl2ZSB1cmxzIChlLmcuIGAvaGVsbG8vd29ybGQ/Zm9vPWJhcmApLiBJZiB1cmwgaXNuJ3QgcGF0aC1yZWxhdGl2ZVxuICogKGUuZy4gYC4vaGVsbG9gKSB0aGVuIGF0IGxlYXN0IGJhc2UgbXVzdCBiZS5cbiAqIEFic29sdXRlIHVybHMgYXJlIHJlamVjdGVkIHdpdGggb25lIGV4Y2VwdGlvbiwgaW4gdGhlIGJyb3dzZXIsIGFic29sdXRlIHVybHMgdGhhdCBhcmUgb25cbiAqIHRoZSBjdXJyZW50IG9yaWdpbiB3aWxsIGJlIHBhcnNlZCBhcyByZWxhdGl2ZVxuICovXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VSZWxhdGl2ZVVybCh1cmw6IHN0cmluZywgYmFzZT86IHN0cmluZykge1xuICBjb25zdCBnbG9iYWxCYXNlID0gbmV3IFVSTChcbiAgICB0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyA/ICdodHRwOi8vbicgOiBnZXRMb2NhdGlvbk9yaWdpbigpXG4gIClcbiAgY29uc3QgcmVzb2x2ZWRCYXNlID0gYmFzZSA/IG5ldyBVUkwoYmFzZSwgZ2xvYmFsQmFzZSkgOiBnbG9iYWxCYXNlXG4gIGNvbnN0IHsgcGF0aG5hbWUsIHNlYXJjaFBhcmFtcywgc2VhcmNoLCBoYXNoLCBocmVmLCBvcmlnaW4gfSA9IG5ldyBVUkwoXG4gICAgdXJsLFxuICAgIHJlc29sdmVkQmFzZVxuICApXG4gIGlmIChvcmlnaW4gIT09IGdsb2JhbEJhc2Uub3JpZ2luKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBpbnZhcmlhbnQ6IGludmFsaWQgcmVsYXRpdmUgVVJMLCByb3V0ZXIgcmVjZWl2ZWQgJHt1cmx9YClcbiAgfVxuICByZXR1cm4ge1xuICAgIHBhdGhuYW1lLFxuICAgIHF1ZXJ5OiBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KHNlYXJjaFBhcmFtcyksXG4gICAgc2VhcmNoLFxuICAgIGhhc2gsXG4gICAgaHJlZjogaHJlZi5zbGljZShnbG9iYWxCYXNlLm9yaWdpbi5sZW5ndGgpLFxuICB9XG59XG4iLCJpbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuXG5leHBvcnQgZnVuY3Rpb24gc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShcbiAgc2VhcmNoUGFyYW1zOiBVUkxTZWFyY2hQYXJhbXNcbik6IFBhcnNlZFVybFF1ZXJ5IHtcbiAgY29uc3QgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5ID0ge31cbiAgc2VhcmNoUGFyYW1zLmZvckVhY2goKHZhbHVlLCBrZXkpID0+IHtcbiAgICBpZiAodHlwZW9mIHF1ZXJ5W2tleV0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBxdWVyeVtrZXldID0gdmFsdWVcbiAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkocXVlcnlba2V5XSkpIHtcbiAgICAgIDsocXVlcnlba2V5XSBhcyBzdHJpbmdbXSkucHVzaCh2YWx1ZSlcbiAgICB9IGVsc2Uge1xuICAgICAgcXVlcnlba2V5XSA9IFtxdWVyeVtrZXldIGFzIHN0cmluZywgdmFsdWVdXG4gICAgfVxuICB9KVxuICByZXR1cm4gcXVlcnlcbn1cblxuZnVuY3Rpb24gc3RyaW5naWZ5VXJsUXVlcnlQYXJhbShwYXJhbTogc3RyaW5nKTogc3RyaW5nIHtcbiAgaWYgKFxuICAgIHR5cGVvZiBwYXJhbSA9PT0gJ3N0cmluZycgfHxcbiAgICAodHlwZW9mIHBhcmFtID09PSAnbnVtYmVyJyAmJiAhaXNOYU4ocGFyYW0pKSB8fFxuICAgIHR5cGVvZiBwYXJhbSA9PT0gJ2Jvb2xlYW4nXG4gICkge1xuICAgIHJldHVybiBTdHJpbmcocGFyYW0pXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuICcnXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVybFF1ZXJ5VG9TZWFyY2hQYXJhbXMoXG4gIHVybFF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuKTogVVJMU2VhcmNoUGFyYW1zIHtcbiAgY29uc3QgcmVzdWx0ID0gbmV3IFVSTFNlYXJjaFBhcmFtcygpXG4gIE9iamVjdC5lbnRyaWVzKHVybFF1ZXJ5KS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgIHZhbHVlLmZvckVhY2goKGl0ZW0pID0+IHJlc3VsdC5hcHBlbmQoa2V5LCBzdHJpbmdpZnlVcmxRdWVyeVBhcmFtKGl0ZW0pKSlcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0LnNldChrZXksIHN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0odmFsdWUpKVxuICAgIH1cbiAgfSlcbiAgcmV0dXJuIHJlc3VsdFxufVxuXG5leHBvcnQgZnVuY3Rpb24gYXNzaWduKFxuICB0YXJnZXQ6IFVSTFNlYXJjaFBhcmFtcyxcbiAgLi4uc2VhcmNoUGFyYW1zTGlzdDogVVJMU2VhcmNoUGFyYW1zW11cbik6IFVSTFNlYXJjaFBhcmFtcyB7XG4gIHNlYXJjaFBhcmFtc0xpc3QuZm9yRWFjaCgoc2VhcmNoUGFyYW1zKSA9PiB7XG4gICAgQXJyYXkuZnJvbShzZWFyY2hQYXJhbXMua2V5cygpKS5mb3JFYWNoKChrZXkpID0+IHRhcmdldC5kZWxldGUoa2V5KSlcbiAgICBzZWFyY2hQYXJhbXMuZm9yRWFjaCgodmFsdWUsIGtleSkgPT4gdGFyZ2V0LmFwcGVuZChrZXksIHZhbHVlKSlcbiAgfSlcbiAgcmV0dXJuIHRhcmdldFxufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVzb2x2ZVJld3JpdGVzKCkge31cbiIsImltcG9ydCB7IGdldFJvdXRlUmVnZXggfSBmcm9tICcuL3JvdXRlLXJlZ2V4J1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Um91dGVNYXRjaGVyKHJvdXRlUmVnZXg6IFJldHVyblR5cGU8dHlwZW9mIGdldFJvdXRlUmVnZXg+KSB7XG4gIGNvbnN0IHsgcmUsIGdyb3VwcyB9ID0gcm91dGVSZWdleFxuICByZXR1cm4gKHBhdGhuYW1lOiBzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkKSA9PiB7XG4gICAgY29uc3Qgcm91dGVNYXRjaCA9IHJlLmV4ZWMocGF0aG5hbWUhKVxuICAgIGlmICghcm91dGVNYXRjaCkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgY29uc3QgZGVjb2RlID0gKHBhcmFtOiBzdHJpbmcpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQocGFyYW0pXG4gICAgICB9IGNhdGNoIChfKSB7XG4gICAgICAgIGNvbnN0IGVycjogRXJyb3IgJiB7IGNvZGU/OiBzdHJpbmcgfSA9IG5ldyBFcnJvcihcbiAgICAgICAgICAnZmFpbGVkIHRvIGRlY29kZSBwYXJhbSdcbiAgICAgICAgKVxuICAgICAgICBlcnIuY29kZSA9ICdERUNPREVfRkFJTEVEJ1xuICAgICAgICB0aHJvdyBlcnJcbiAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgcGFyYW1zOiB7IFtwYXJhbU5hbWU6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdIH0gPSB7fVxuXG4gICAgT2JqZWN0LmtleXMoZ3JvdXBzKS5mb3JFYWNoKChzbHVnTmFtZTogc3RyaW5nKSA9PiB7XG4gICAgICBjb25zdCBnID0gZ3JvdXBzW3NsdWdOYW1lXVxuICAgICAgY29uc3QgbSA9IHJvdXRlTWF0Y2hbZy5wb3NdXG4gICAgICBpZiAobSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHBhcmFtc1tzbHVnTmFtZV0gPSB+bS5pbmRleE9mKCcvJylcbiAgICAgICAgICA/IG0uc3BsaXQoJy8nKS5tYXAoKGVudHJ5KSA9PiBkZWNvZGUoZW50cnkpKVxuICAgICAgICAgIDogZy5yZXBlYXRcbiAgICAgICAgICA/IFtkZWNvZGUobSldXG4gICAgICAgICAgOiBkZWNvZGUobSlcbiAgICAgIH1cbiAgICB9KVxuICAgIHJldHVybiBwYXJhbXNcbiAgfVxufVxuIiwiZXhwb3J0IGludGVyZmFjZSBHcm91cCB7XG4gIHBvczogbnVtYmVyXG4gIHJlcGVhdDogYm9vbGVhblxuICBvcHRpb25hbDogYm9vbGVhblxufVxuXG4vLyB0aGlzIGlzbid0IGltcG9ydGluZyB0aGUgZXNjYXBlLXN0cmluZy1yZWdleCBtb2R1bGVcbi8vIHRvIHJlZHVjZSBieXRlc1xuZnVuY3Rpb24gZXNjYXBlUmVnZXgoc3RyOiBzdHJpbmcpIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC9bfFxcXFx7fSgpW1xcXV4kKyo/Li1dL2csICdcXFxcJCYnKVxufVxuXG5mdW5jdGlvbiBwYXJzZVBhcmFtZXRlcihwYXJhbTogc3RyaW5nKSB7XG4gIGNvbnN0IG9wdGlvbmFsID0gcGFyYW0uc3RhcnRzV2l0aCgnWycpICYmIHBhcmFtLmVuZHNXaXRoKCddJylcbiAgaWYgKG9wdGlvbmFsKSB7XG4gICAgcGFyYW0gPSBwYXJhbS5zbGljZSgxLCAtMSlcbiAgfVxuICBjb25zdCByZXBlYXQgPSBwYXJhbS5zdGFydHNXaXRoKCcuLi4nKVxuICBpZiAocmVwZWF0KSB7XG4gICAgcGFyYW0gPSBwYXJhbS5zbGljZSgzKVxuICB9XG4gIHJldHVybiB7IGtleTogcGFyYW0sIHJlcGVhdCwgb3B0aW9uYWwgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Um91dGVSZWdleChcbiAgbm9ybWFsaXplZFJvdXRlOiBzdHJpbmdcbik6IHtcbiAgcmU6IFJlZ0V4cFxuICBuYW1lZFJlZ2V4Pzogc3RyaW5nXG4gIHJvdXRlS2V5cz86IHsgW25hbWVkOiBzdHJpbmddOiBzdHJpbmcgfVxuICBncm91cHM6IHsgW2dyb3VwTmFtZTogc3RyaW5nXTogR3JvdXAgfVxufSB7XG4gIGNvbnN0IHNlZ21lbnRzID0gKG5vcm1hbGl6ZWRSb3V0ZS5yZXBsYWNlKC9cXC8kLywgJycpIHx8ICcvJylcbiAgICAuc2xpY2UoMSlcbiAgICAuc3BsaXQoJy8nKVxuXG4gIGNvbnN0IGdyb3VwczogeyBbZ3JvdXBOYW1lOiBzdHJpbmddOiBHcm91cCB9ID0ge31cbiAgbGV0IGdyb3VwSW5kZXggPSAxXG4gIGNvbnN0IHBhcmFtZXRlcml6ZWRSb3V0ZSA9IHNlZ21lbnRzXG4gICAgLm1hcCgoc2VnbWVudCkgPT4ge1xuICAgICAgaWYgKHNlZ21lbnQuc3RhcnRzV2l0aCgnWycpICYmIHNlZ21lbnQuZW5kc1dpdGgoJ10nKSkge1xuICAgICAgICBjb25zdCB7IGtleSwgb3B0aW9uYWwsIHJlcGVhdCB9ID0gcGFyc2VQYXJhbWV0ZXIoc2VnbWVudC5zbGljZSgxLCAtMSkpXG4gICAgICAgIGdyb3Vwc1trZXldID0geyBwb3M6IGdyb3VwSW5kZXgrKywgcmVwZWF0LCBvcHRpb25hbCB9XG4gICAgICAgIHJldHVybiByZXBlYXQgPyAob3B0aW9uYWwgPyAnKD86LyguKz8pKT8nIDogJy8oLis/KScpIDogJy8oW14vXSs/KSdcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBgLyR7ZXNjYXBlUmVnZXgoc2VnbWVudCl9YFxuICAgICAgfVxuICAgIH0pXG4gICAgLmpvaW4oJycpXG5cbiAgLy8gZGVhZCBjb2RlIGVsaW1pbmF0ZSBmb3IgYnJvd3NlciBzaW5jZSBpdCdzIG9ubHkgbmVlZGVkXG4gIC8vIHdoaWxlIGdlbmVyYXRpbmcgcm91dGVzLW1hbmlmZXN0XG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xuICAgIGxldCByb3V0ZUtleUNoYXJDb2RlID0gOTdcbiAgICBsZXQgcm91dGVLZXlDaGFyTGVuZ3RoID0gMVxuXG4gICAgLy8gYnVpbGRzIGEgbWluaW1hbCByb3V0ZUtleSB1c2luZyBvbmx5IGEteiBhbmQgbWluaW1hbCBudW1iZXIgb2YgY2hhcmFjdGVyc1xuICAgIGNvbnN0IGdldFNhZmVSb3V0ZUtleSA9ICgpID0+IHtcbiAgICAgIGxldCByb3V0ZUtleSA9ICcnXG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcm91dGVLZXlDaGFyTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgcm91dGVLZXkgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShyb3V0ZUtleUNoYXJDb2RlKVxuICAgICAgICByb3V0ZUtleUNoYXJDb2RlKytcblxuICAgICAgICBpZiAocm91dGVLZXlDaGFyQ29kZSA+IDEyMikge1xuICAgICAgICAgIHJvdXRlS2V5Q2hhckxlbmd0aCsrXG4gICAgICAgICAgcm91dGVLZXlDaGFyQ29kZSA9IDk3XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiByb3V0ZUtleVxuICAgIH1cblxuICAgIGNvbnN0IHJvdXRlS2V5czogeyBbbmFtZWQ6IHN0cmluZ106IHN0cmluZyB9ID0ge31cblxuICAgIGxldCBuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZSA9IHNlZ21lbnRzXG4gICAgICAubWFwKChzZWdtZW50KSA9PiB7XG4gICAgICAgIGlmIChzZWdtZW50LnN0YXJ0c1dpdGgoJ1snKSAmJiBzZWdtZW50LmVuZHNXaXRoKCddJykpIHtcbiAgICAgICAgICBjb25zdCB7IGtleSwgb3B0aW9uYWwsIHJlcGVhdCB9ID0gcGFyc2VQYXJhbWV0ZXIoc2VnbWVudC5zbGljZSgxLCAtMSkpXG4gICAgICAgICAgLy8gcmVwbGFjZSBhbnkgbm9uLXdvcmQgY2hhcmFjdGVycyBzaW5jZSB0aGV5IGNhbiBicmVha1xuICAgICAgICAgIC8vIHRoZSBuYW1lZCByZWdleFxuICAgICAgICAgIGxldCBjbGVhbmVkS2V5ID0ga2V5LnJlcGxhY2UoL1xcVy9nLCAnJylcbiAgICAgICAgICBsZXQgaW52YWxpZEtleSA9IGZhbHNlXG5cbiAgICAgICAgICAvLyBjaGVjayBpZiB0aGUga2V5IGlzIHN0aWxsIGludmFsaWQgYW5kIGZhbGxiYWNrIHRvIHVzaW5nIGEga25vd25cbiAgICAgICAgICAvLyBzYWZlIGtleVxuICAgICAgICAgIGlmIChjbGVhbmVkS2V5Lmxlbmd0aCA9PT0gMCB8fCBjbGVhbmVkS2V5Lmxlbmd0aCA+IDMwKSB7XG4gICAgICAgICAgICBpbnZhbGlkS2V5ID0gdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoIWlzTmFOKHBhcnNlSW50KGNsZWFuZWRLZXkuc3Vic3RyKDAsIDEpKSkpIHtcbiAgICAgICAgICAgIGludmFsaWRLZXkgPSB0cnVlXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGludmFsaWRLZXkpIHtcbiAgICAgICAgICAgIGNsZWFuZWRLZXkgPSBnZXRTYWZlUm91dGVLZXkoKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHJvdXRlS2V5c1tjbGVhbmVkS2V5XSA9IGtleVxuICAgICAgICAgIHJldHVybiByZXBlYXRcbiAgICAgICAgICAgID8gb3B0aW9uYWxcbiAgICAgICAgICAgICAgPyBgKD86Lyg/PCR7Y2xlYW5lZEtleX0+Lis/KSk/YFxuICAgICAgICAgICAgICA6IGAvKD88JHtjbGVhbmVkS2V5fT4uKz8pYFxuICAgICAgICAgICAgOiBgLyg/PCR7Y2xlYW5lZEtleX0+W14vXSs/KWBcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gYC8ke2VzY2FwZVJlZ2V4KHNlZ21lbnQpfWBcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5qb2luKCcnKVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHJlOiBuZXcgUmVnRXhwKGBeJHtwYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGApLFxuICAgICAgZ3JvdXBzLFxuICAgICAgcm91dGVLZXlzLFxuICAgICAgbmFtZWRSZWdleDogYF4ke25hbWVkUGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgLFxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgcmU6IG5ldyBSZWdFeHAoYF4ke3BhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCksXG4gICAgZ3JvdXBzLFxuICB9XG59XG4iLCJpbXBvcnQgeyBJbmNvbWluZ01lc3NhZ2UsIFNlcnZlclJlc3BvbnNlIH0gZnJvbSAnaHR0cCdcbmltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgeyBDb21wb25lbnRUeXBlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQgeyBmb3JtYXRVcmwgfSBmcm9tICcuL3JvdXRlci91dGlscy9mb3JtYXQtdXJsJ1xuaW1wb3J0IHsgTWFuaWZlc3RJdGVtIH0gZnJvbSAnLi4vc2VydmVyL2xvYWQtY29tcG9uZW50cydcbmltcG9ydCB7IE5leHRSb3V0ZXIgfSBmcm9tICcuL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQgeyBFbnYgfSBmcm9tICdAbmV4dC9lbnYnXG5pbXBvcnQgeyBCdWlsZE1hbmlmZXN0IH0gZnJvbSAnLi4vc2VydmVyL2dldC1wYWdlLWZpbGVzJ1xuaW1wb3J0IHsgRG9tYWluTG9jYWxlcyB9IGZyb20gJy4uL3NlcnZlci9jb25maWcnXG5cbi8qKlxuICogVHlwZXMgdXNlZCBieSBib3RoIG5leHQgYW5kIG5leHQtc2VydmVyXG4gKi9cblxuZXhwb3J0IHR5cGUgTmV4dENvbXBvbmVudFR5cGU8XG4gIEMgZXh0ZW5kcyBCYXNlQ29udGV4dCA9IE5leHRQYWdlQ29udGV4dCxcbiAgSVAgPSB7fSxcbiAgUCA9IHt9XG4+ID0gQ29tcG9uZW50VHlwZTxQPiAmIHtcbiAgLyoqXG4gICAqIFVzZWQgZm9yIGluaXRpYWwgcGFnZSBsb2FkIGRhdGEgcG9wdWxhdGlvbi4gRGF0YSByZXR1cm5lZCBmcm9tIGBnZXRJbml0aWFsUHJvcHNgIGlzIHNlcmlhbGl6ZWQgd2hlbiBzZXJ2ZXIgcmVuZGVyZWQuXG4gICAqIE1ha2Ugc3VyZSB0byByZXR1cm4gcGxhaW4gYE9iamVjdGAgd2l0aG91dCB1c2luZyBgRGF0ZWAsIGBNYXBgLCBgU2V0YC5cbiAgICogQHBhcmFtIGN0eCBDb250ZXh0IG9mIGBwYWdlYFxuICAgKi9cbiAgZ2V0SW5pdGlhbFByb3BzPyhjb250ZXh0OiBDKTogSVAgfCBQcm9taXNlPElQPlxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudFR5cGUgPSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgRG9jdW1lbnRDb250ZXh0LFxuICBEb2N1bWVudEluaXRpYWxQcm9wcyxcbiAgRG9jdW1lbnRQcm9wc1xuPiAmIHtcbiAgcmVuZGVyRG9jdW1lbnQoXG4gICAgRG9jdW1lbnQ6IERvY3VtZW50VHlwZSxcbiAgICBwcm9wczogRG9jdW1lbnRQcm9wc1xuICApOiBSZWFjdC5SZWFjdEVsZW1lbnRcbn1cblxuZXhwb3J0IHR5cGUgQXBwVHlwZSA9IE5leHRDb21wb25lbnRUeXBlPFxuICBBcHBDb250ZXh0VHlwZSxcbiAgQXBwSW5pdGlhbFByb3BzLFxuICBBcHBQcm9wc1R5cGVcbj5cblxuZXhwb3J0IHR5cGUgQXBwVHJlZVR5cGUgPSBDb21wb25lbnRUeXBlPFxuICBBcHBJbml0aWFsUHJvcHMgJiB7IFtuYW1lOiBzdHJpbmddOiBhbnkgfVxuPlxuXG4vKipcbiAqIFdlYiB2aXRhbHMgcHJvdmlkZWQgdG8gX2FwcC5yZXBvcnRXZWJWaXRhbHMgYnkgQ29yZSBXZWIgVml0YWxzIHBsdWdpbiBkZXZlbG9wZWQgYnkgR29vZ2xlIENocm9tZSB0ZWFtLlxuICogaHR0cHM6Ly9uZXh0anMub3JnL2Jsb2cvbmV4dC05LTQjaW50ZWdyYXRlZC13ZWItdml0YWxzLXJlcG9ydGluZ1xuICovXG5leHBvcnQgdHlwZSBOZXh0V2ViVml0YWxzTWV0cmljID0ge1xuICBpZDogc3RyaW5nXG4gIGxhYmVsOiBzdHJpbmdcbiAgbmFtZTogc3RyaW5nXG4gIHN0YXJ0VGltZTogbnVtYmVyXG4gIHZhbHVlOiBudW1iZXJcbn1cblxuZXhwb3J0IHR5cGUgRW5oYW5jZXI8Qz4gPSAoQ29tcG9uZW50OiBDKSA9PiBDXG5cbmV4cG9ydCB0eXBlIENvbXBvbmVudHNFbmhhbmNlciA9XG4gIHwge1xuICAgICAgZW5oYW5jZUFwcD86IEVuaGFuY2VyPEFwcFR5cGU+XG4gICAgICBlbmhhbmNlQ29tcG9uZW50PzogRW5oYW5jZXI8TmV4dENvbXBvbmVudFR5cGU+XG4gICAgfVxuICB8IEVuaGFuY2VyPE5leHRDb21wb25lbnRUeXBlPlxuXG5leHBvcnQgdHlwZSBSZW5kZXJQYWdlUmVzdWx0ID0ge1xuICBodG1sOiBzdHJpbmdcbiAgaGVhZD86IEFycmF5PEpTWC5FbGVtZW50IHwgbnVsbD5cbn1cblxuZXhwb3J0IHR5cGUgUmVuZGVyUGFnZSA9IChcbiAgb3B0aW9ucz86IENvbXBvbmVudHNFbmhhbmNlclxuKSA9PiBSZW5kZXJQYWdlUmVzdWx0IHwgUHJvbWlzZTxSZW5kZXJQYWdlUmVzdWx0PlxuXG5leHBvcnQgdHlwZSBCYXNlQ29udGV4dCA9IHtcbiAgcmVzPzogU2VydmVyUmVzcG9uc2VcbiAgW2s6IHN0cmluZ106IGFueVxufVxuXG5leHBvcnQgdHlwZSBORVhUX0RBVEEgPSB7XG4gIHByb3BzOiBSZWNvcmQ8c3RyaW5nLCBhbnk+XG4gIHBhZ2U6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYnVpbGRJZDogc3RyaW5nXG4gIGFzc2V0UHJlZml4Pzogc3RyaW5nXG4gIHJ1bnRpbWVDb25maWc/OiB7IFtrZXk6IHN0cmluZ106IGFueSB9XG4gIG5leHRFeHBvcnQ/OiBib29sZWFuXG4gIGF1dG9FeHBvcnQ/OiBib29sZWFuXG4gIGlzRmFsbGJhY2s/OiBib29sZWFuXG4gIGR5bmFtaWNJZHM/OiBzdHJpbmdbXVxuICBlcnI/OiBFcnJvciAmIHsgc3RhdHVzQ29kZT86IG51bWJlciB9XG4gIGdzcD86IGJvb2xlYW5cbiAgZ3NzcD86IGJvb2xlYW5cbiAgY3VzdG9tU2VydmVyPzogYm9vbGVhblxuICBnaXA/OiBib29sZWFuXG4gIGFwcEdpcD86IGJvb2xlYW5cbiAgbG9jYWxlPzogc3RyaW5nXG4gIGxvY2FsZXM/OiBzdHJpbmdbXVxuICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG4gIGRvbWFpbkxvY2FsZXM/OiBEb21haW5Mb2NhbGVzXG4gIHNjcmlwdExvYWRlcj86IGFueVtdXG4gIGlzUHJldmlldz86IGJvb2xlYW5cbn1cblxuLyoqXG4gKiBgTmV4dGAgY29udGV4dFxuICovXG5leHBvcnQgaW50ZXJmYWNlIE5leHRQYWdlQ29udGV4dCB7XG4gIC8qKlxuICAgKiBFcnJvciBvYmplY3QgaWYgZW5jb3VudGVyZWQgZHVyaW5nIHJlbmRlcmluZ1xuICAgKi9cbiAgZXJyPzogKEVycm9yICYgeyBzdGF0dXNDb2RlPzogbnVtYmVyIH0pIHwgbnVsbFxuICAvKipcbiAgICogYEhUVFBgIHJlcXVlc3Qgb2JqZWN0LlxuICAgKi9cbiAgcmVxPzogSW5jb21pbmdNZXNzYWdlXG4gIC8qKlxuICAgKiBgSFRUUGAgcmVzcG9uc2Ugb2JqZWN0LlxuICAgKi9cbiAgcmVzPzogU2VydmVyUmVzcG9uc2VcbiAgLyoqXG4gICAqIFBhdGggc2VjdGlvbiBvZiBgVVJMYC5cbiAgICovXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgLyoqXG4gICAqIFF1ZXJ5IHN0cmluZyBzZWN0aW9uIG9mIGBVUkxgIHBhcnNlZCBhcyBhbiBvYmplY3QuXG4gICAqL1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgLyoqXG4gICAqIGBTdHJpbmdgIG9mIHRoZSBhY3R1YWwgcGF0aCBpbmNsdWRpbmcgcXVlcnkuXG4gICAqL1xuICBhc1BhdGg/OiBzdHJpbmdcbiAgLyoqXG4gICAqIGBDb21wb25lbnRgIHRoZSB0cmVlIG9mIHRoZSBBcHAgdG8gdXNlIGlmIG5lZWRpbmcgdG8gcmVuZGVyIHNlcGFyYXRlbHlcbiAgICovXG4gIEFwcFRyZWU6IEFwcFRyZWVUeXBlXG59XG5cbmV4cG9ydCB0eXBlIEFwcENvbnRleHRUeXBlPFIgZXh0ZW5kcyBOZXh0Um91dGVyID0gTmV4dFJvdXRlcj4gPSB7XG4gIENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8TmV4dFBhZ2VDb250ZXh0PlxuICBBcHBUcmVlOiBBcHBUcmVlVHlwZVxuICBjdHg6IE5leHRQYWdlQ29udGV4dFxuICByb3V0ZXI6IFJcbn1cblxuZXhwb3J0IHR5cGUgQXBwSW5pdGlhbFByb3BzID0ge1xuICBwYWdlUHJvcHM6IGFueVxufVxuXG5leHBvcnQgdHlwZSBBcHBQcm9wc1R5cGU8XG4gIFIgZXh0ZW5kcyBOZXh0Um91dGVyID0gTmV4dFJvdXRlcixcbiAgUCA9IHt9XG4+ID0gQXBwSW5pdGlhbFByb3BzICYge1xuICBDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPE5leHRQYWdlQ29udGV4dCwgYW55LCBQPlxuICByb3V0ZXI6IFJcbiAgX19OX1NTRz86IGJvb2xlYW5cbiAgX19OX1NTUD86IGJvb2xlYW5cbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRDb250ZXh0ID0gTmV4dFBhZ2VDb250ZXh0ICYge1xuICByZW5kZXJQYWdlOiBSZW5kZXJQYWdlXG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50SW5pdGlhbFByb3BzID0gUmVuZGVyUGFnZVJlc3VsdCAmIHtcbiAgc3R5bGVzPzogUmVhY3QuUmVhY3RFbGVtZW50W10gfCBSZWFjdC5SZWFjdEZyYWdtZW50XG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50UHJvcHMgPSBEb2N1bWVudEluaXRpYWxQcm9wcyAmIHtcbiAgX19ORVhUX0RBVEFfXzogTkVYVF9EQVRBXG4gIGRhbmdlcm91c0FzUGF0aDogc3RyaW5nXG4gIGRvY0NvbXBvbmVudHNSZW5kZXJlZDoge1xuICAgIEh0bWw/OiBib29sZWFuXG4gICAgTWFpbj86IGJvb2xlYW5cbiAgICBIZWFkPzogYm9vbGVhblxuICAgIE5leHRTY3JpcHQ/OiBib29sZWFuXG4gIH1cbiAgYnVpbGRNYW5pZmVzdDogQnVpbGRNYW5pZmVzdFxuICBhbXBQYXRoOiBzdHJpbmdcbiAgaW5BbXBNb2RlOiBib29sZWFuXG4gIGh5YnJpZEFtcDogYm9vbGVhblxuICBpc0RldmVsb3BtZW50OiBib29sZWFuXG4gIGR5bmFtaWNJbXBvcnRzOiBNYW5pZmVzdEl0ZW1bXVxuICBhc3NldFByZWZpeD86IHN0cmluZ1xuICBjYW5vbmljYWxCYXNlOiBzdHJpbmdcbiAgaGVhZFRhZ3M6IGFueVtdXG4gIHVuc3RhYmxlX3J1bnRpbWVKUz86IGZhbHNlXG4gIHVuc3RhYmxlX0pzUHJlbG9hZD86IGZhbHNlXG4gIGRldk9ubHlDYWNoZUJ1c3RlclF1ZXJ5U3RyaW5nOiBzdHJpbmdcbiAgc2NyaXB0TG9hZGVyOiB7IGRlZmVyPzogc3RyaW5nW107IGVhZ2VyPzogYW55W10gfVxuICBsb2NhbGU/OiBzdHJpbmdcbn1cblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIHJlcXVlc3RcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBOZXh0QXBpUmVxdWVzdCBleHRlbmRzIEluY29taW5nTWVzc2FnZSB7XG4gIC8qKlxuICAgKiBPYmplY3Qgb2YgYHF1ZXJ5YCB2YWx1ZXMgZnJvbSB1cmxcbiAgICovXG4gIHF1ZXJ5OiB7XG4gICAgW2tleTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW11cbiAgfVxuICAvKipcbiAgICogT2JqZWN0IG9mIGBjb29raWVzYCBmcm9tIGhlYWRlclxuICAgKi9cbiAgY29va2llczoge1xuICAgIFtrZXk6IHN0cmluZ106IHN0cmluZ1xuICB9XG5cbiAgYm9keTogYW55XG5cbiAgZW52OiBFbnZcblxuICBwcmV2aWV3PzogYm9vbGVhblxuICAvKipcbiAgICogUHJldmlldyBkYXRhIHNldCBvbiB0aGUgcmVxdWVzdCwgaWYgYW55XG4gICAqICovXG4gIHByZXZpZXdEYXRhPzogYW55XG59XG5cbi8qKlxuICogU2VuZCBib2R5IG9mIHJlc3BvbnNlXG4gKi9cbnR5cGUgU2VuZDxUPiA9IChib2R5OiBUKSA9PiB2b2lkXG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSByZXNwb25zZVxuICovXG5leHBvcnQgdHlwZSBOZXh0QXBpUmVzcG9uc2U8VCA9IGFueT4gPSBTZXJ2ZXJSZXNwb25zZSAmIHtcbiAgLyoqXG4gICAqIFNlbmQgZGF0YSBgYW55YCBkYXRhIGluIHJlc3BvbnNlXG4gICAqL1xuICBzZW5kOiBTZW5kPFQ+XG4gIC8qKlxuICAgKiBTZW5kIGRhdGEgYGpzb25gIGRhdGEgaW4gcmVzcG9uc2VcbiAgICovXG4gIGpzb246IFNlbmQ8VD5cbiAgc3RhdHVzOiAoc3RhdHVzQ29kZTogbnVtYmVyKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cbiAgcmVkaXJlY3QodXJsOiBzdHJpbmcpOiBOZXh0QXBpUmVzcG9uc2U8VD5cbiAgcmVkaXJlY3Qoc3RhdHVzOiBudW1iZXIsIHVybDogc3RyaW5nKTogTmV4dEFwaVJlc3BvbnNlPFQ+XG5cbiAgLyoqXG4gICAqIFNldCBwcmV2aWV3IGRhdGEgZm9yIE5leHQuanMnIHByZXJlbmRlciBtb2RlXG4gICAqL1xuICBzZXRQcmV2aWV3RGF0YTogKFxuICAgIGRhdGE6IG9iamVjdCB8IHN0cmluZyxcbiAgICBvcHRpb25zPzoge1xuICAgICAgLyoqXG4gICAgICAgKiBTcGVjaWZpZXMgdGhlIG51bWJlciAoaW4gc2Vjb25kcykgZm9yIHRoZSBwcmV2aWV3IHNlc3Npb24gdG8gbGFzdCBmb3IuXG4gICAgICAgKiBUaGUgZ2l2ZW4gbnVtYmVyIHdpbGwgYmUgY29udmVydGVkIHRvIGFuIGludGVnZXIgYnkgcm91bmRpbmcgZG93bi5cbiAgICAgICAqIEJ5IGRlZmF1bHQsIG5vIG1heGltdW0gYWdlIGlzIHNldCBhbmQgdGhlIHByZXZpZXcgc2Vzc2lvbiBmaW5pc2hlc1xuICAgICAgICogd2hlbiB0aGUgY2xpZW50IHNodXRzIGRvd24gKGJyb3dzZXIgaXMgY2xvc2VkKS5cbiAgICAgICAqL1xuICAgICAgbWF4QWdlPzogbnVtYmVyXG4gICAgfVxuICApID0+IE5leHRBcGlSZXNwb25zZTxUPlxuICBjbGVhclByZXZpZXdEYXRhOiAoKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cbn1cblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIGhhbmRsZXJcbiAqL1xuZXhwb3J0IHR5cGUgTmV4dEFwaUhhbmRsZXI8VCA9IGFueT4gPSAoXG4gIHJlcTogTmV4dEFwaVJlcXVlc3QsXG4gIHJlczogTmV4dEFwaVJlc3BvbnNlPFQ+XG4pID0+IHZvaWQgfCBQcm9taXNlPHZvaWQ+XG5cbi8qKlxuICogVXRpbHNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGV4ZWNPbmNlPFQgZXh0ZW5kcyAoLi4uYXJnczogYW55W10pID0+IFJldHVyblR5cGU8VD4+KFxuICBmbjogVFxuKTogVCB7XG4gIGxldCB1c2VkID0gZmFsc2VcbiAgbGV0IHJlc3VsdDogUmV0dXJuVHlwZTxUPlxuXG4gIHJldHVybiAoKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgaWYgKCF1c2VkKSB7XG4gICAgICB1c2VkID0gdHJ1ZVxuICAgICAgcmVzdWx0ID0gZm4oLi4uYXJncylcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdFxuICB9KSBhcyBUXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRMb2NhdGlvbk9yaWdpbigpIHtcbiAgY29uc3QgeyBwcm90b2NvbCwgaG9zdG5hbWUsIHBvcnQgfSA9IHdpbmRvdy5sb2NhdGlvblxuICByZXR1cm4gYCR7cHJvdG9jb2x9Ly8ke2hvc3RuYW1lfSR7cG9ydCA/ICc6JyArIHBvcnQgOiAnJ31gXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRVUkwoKSB7XG4gIGNvbnN0IHsgaHJlZiB9ID0gd2luZG93LmxvY2F0aW9uXG4gIGNvbnN0IG9yaWdpbiA9IGdldExvY2F0aW9uT3JpZ2luKClcbiAgcmV0dXJuIGhyZWYuc3Vic3RyaW5nKG9yaWdpbi5sZW5ndGgpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREaXNwbGF5TmFtZTxQPihDb21wb25lbnQ6IENvbXBvbmVudFR5cGU8UD4pIHtcbiAgcmV0dXJuIHR5cGVvZiBDb21wb25lbnQgPT09ICdzdHJpbmcnXG4gICAgPyBDb21wb25lbnRcbiAgICA6IENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBDb21wb25lbnQubmFtZSB8fCAnVW5rbm93bidcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzUmVzU2VudChyZXM6IFNlcnZlclJlc3BvbnNlKSB7XG4gIHJldHVybiByZXMuZmluaXNoZWQgfHwgcmVzLmhlYWRlcnNTZW50XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2FkR2V0SW5pdGlhbFByb3BzPFxuICBDIGV4dGVuZHMgQmFzZUNvbnRleHQsXG4gIElQID0ge30sXG4gIFAgPSB7fVxuPihBcHA6IE5leHRDb21wb25lbnRUeXBlPEMsIElQLCBQPiwgY3R4OiBDKTogUHJvbWlzZTxJUD4ge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmIChBcHAucHJvdG90eXBlPy5nZXRJbml0aWFsUHJvcHMpIHtcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSBgXCIke2dldERpc3BsYXlOYW1lKFxuICAgICAgICBBcHBcbiAgICAgICl9LmdldEluaXRpYWxQcm9wcygpXCIgaXMgZGVmaW5lZCBhcyBhbiBpbnN0YW5jZSBtZXRob2QgLSB2aXNpdCBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9nZXQtaW5pdGlhbC1wcm9wcy1hcy1hbi1pbnN0YW5jZS1tZXRob2QgZm9yIG1vcmUgaW5mb3JtYXRpb24uYFxuICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gICAgfVxuICB9XG4gIC8vIHdoZW4gY2FsbGVkIGZyb20gX2FwcCBgY3R4YCBpcyBuZXN0ZWQgaW4gYGN0eGBcbiAgY29uc3QgcmVzID0gY3R4LnJlcyB8fCAoY3R4LmN0eCAmJiBjdHguY3R4LnJlcylcblxuICBpZiAoIUFwcC5nZXRJbml0aWFsUHJvcHMpIHtcbiAgICBpZiAoY3R4LmN0eCAmJiBjdHguQ29tcG9uZW50KSB7XG4gICAgICAvLyBAdHMtaWdub3JlIHBhZ2VQcm9wcyBkZWZhdWx0XG4gICAgICByZXR1cm4ge1xuICAgICAgICBwYWdlUHJvcHM6IGF3YWl0IGxvYWRHZXRJbml0aWFsUHJvcHMoY3R4LkNvbXBvbmVudCwgY3R4LmN0eCksXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB7fSBhcyBJUFxuICB9XG5cbiAgY29uc3QgcHJvcHMgPSBhd2FpdCBBcHAuZ2V0SW5pdGlhbFByb3BzKGN0eClcblxuICBpZiAocmVzICYmIGlzUmVzU2VudChyZXMpKSB7XG4gICAgcmV0dXJuIHByb3BzXG4gIH1cblxuICBpZiAoIXByb3BzKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9IGBcIiR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICBBcHBcbiAgICApfS5nZXRJbml0aWFsUHJvcHMoKVwiIHNob3VsZCByZXNvbHZlIHRvIGFuIG9iamVjdC4gQnV0IGZvdW5kIFwiJHtwcm9wc31cIiBpbnN0ZWFkLmBcbiAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgfVxuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKE9iamVjdC5rZXlzKHByb3BzKS5sZW5ndGggPT09IDAgJiYgIWN0eC5jdHgpIHtcbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgYCR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICAgICAgQXBwXG4gICAgICAgICl9IHJldHVybmVkIGFuIGVtcHR5IG9iamVjdCBmcm9tIFxcYGdldEluaXRpYWxQcm9wc1xcYC4gVGhpcyBkZS1vcHRpbWl6ZXMgYW5kIHByZXZlbnRzIGF1dG9tYXRpYyBzdGF0aWMgb3B0aW1pemF0aW9uLiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9lbXB0eS1vYmplY3QtZ2V0SW5pdGlhbFByb3BzYFxuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBwcm9wc1xufVxuXG5leHBvcnQgY29uc3QgdXJsT2JqZWN0S2V5cyA9IFtcbiAgJ2F1dGgnLFxuICAnaGFzaCcsXG4gICdob3N0JyxcbiAgJ2hvc3RuYW1lJyxcbiAgJ2hyZWYnLFxuICAncGF0aCcsXG4gICdwYXRobmFtZScsXG4gICdwb3J0JyxcbiAgJ3Byb3RvY29sJyxcbiAgJ3F1ZXJ5JyxcbiAgJ3NlYXJjaCcsXG4gICdzbGFzaGVzJyxcbl1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHVybDogVXJsT2JqZWN0KTogc3RyaW5nIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgaWYgKHVybCAhPT0gbnVsbCAmJiB0eXBlb2YgdXJsID09PSAnb2JqZWN0Jykge1xuICAgICAgT2JqZWN0LmtleXModXJsKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgaWYgKHVybE9iamVjdEtleXMuaW5kZXhPZihrZXkpID09PSAtMSkge1xuICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgIGBVbmtub3duIGtleSBwYXNzZWQgdmlhIHVybE9iamVjdCBpbnRvIHVybC5mb3JtYXQ6ICR7a2V5fWBcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZvcm1hdFVybCh1cmwpXG59XG5cbmV4cG9ydCBjb25zdCBTUCA9IHR5cGVvZiBwZXJmb3JtYW5jZSAhPT0gJ3VuZGVmaW5lZCdcbmV4cG9ydCBjb25zdCBTVCA9XG4gIFNQICYmXG4gIHR5cGVvZiBwZXJmb3JtYW5jZS5tYXJrID09PSAnZnVuY3Rpb24nICYmXG4gIHR5cGVvZiBwZXJmb3JtYW5jZS5tZWFzdXJlID09PSAnZnVuY3Rpb24nXG4iLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLm5vcm1hbGl6ZVBhdGhTZXA9bm9ybWFsaXplUGF0aFNlcDtleHBvcnRzLmRlbm9ybWFsaXplUGFnZVBhdGg9ZGVub3JtYWxpemVQYWdlUGF0aDtmdW5jdGlvbiBub3JtYWxpemVQYXRoU2VwKHBhdGgpe3JldHVybiBwYXRoLnJlcGxhY2UoL1xcXFwvZywnLycpO31mdW5jdGlvbiBkZW5vcm1hbGl6ZVBhZ2VQYXRoKHBhZ2Upe3BhZ2U9bm9ybWFsaXplUGF0aFNlcChwYWdlKTtpZihwYWdlLnN0YXJ0c1dpdGgoJy9pbmRleC8nKSl7cGFnZT1wYWdlLnNsaWNlKDYpO31lbHNlIGlmKHBhZ2U9PT0nL2luZGV4Jyl7cGFnZT0nLyc7fXJldHVybiBwYWdlO31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRlbm9ybWFsaXplLXBhZ2UtcGF0aC5qcy5tYXAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9jbGllbnQvbGluaycpXG4iLCJmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0OyIsInZhciBfdHlwZW9mID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mXCIpO1xuXG5mdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7XG4gIGlmICh0eXBlb2YgV2Vha01hcCAhPT0gXCJmdW5jdGlvblwiKSByZXR1cm4gbnVsbDtcbiAgdmFyIGNhY2hlID0gbmV3IFdlYWtNYXAoKTtcblxuICBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUgPSBmdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7XG4gICAgcmV0dXJuIGNhY2hlO1xuICB9O1xuXG4gIHJldHVybiBjYWNoZTtcbn1cblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7XG4gIGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHtcbiAgICByZXR1cm4gb2JqO1xuICB9XG5cbiAgaWYgKG9iaiA9PT0gbnVsbCB8fCBfdHlwZW9mKG9iaikgIT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIG9iaiAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgICB9O1xuICB9XG5cbiAgdmFyIGNhY2hlID0gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCk7XG5cbiAgaWYgKGNhY2hlICYmIGNhY2hlLmhhcyhvYmopKSB7XG4gICAgcmV0dXJuIGNhY2hlLmdldChvYmopO1xuICB9XG5cbiAgdmFyIG5ld09iaiA9IHt9O1xuICB2YXIgaGFzUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmRlZmluZVByb3BlcnR5ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbiAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7XG4gICAgICB2YXIgZGVzYyA9IGhhc1Byb3BlcnR5RGVzY3JpcHRvciA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBrZXkpIDogbnVsbDtcblxuICAgICAgaWYgKGRlc2MgJiYgKGRlc2MuZ2V0IHx8IGRlc2Muc2V0KSkge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobmV3T2JqLCBrZXksIGRlc2MpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmV3T2JqW2tleV0gPSBvYmpba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBuZXdPYmpbXCJkZWZhdWx0XCJdID0gb2JqO1xuXG4gIGlmIChjYWNoZSkge1xuICAgIGNhY2hlLnNldChvYmosIG5ld09iaik7XG4gIH1cblxuICByZXR1cm4gbmV3T2JqO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkOyIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBfdHlwZW9mKG9iaik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3R5cGVvZjsiLCIvKiogQGxpY2Vuc2UgUmVhY3QgdjE2LjEzLjFcbiAqIHJlYWN0LWlzLmRldmVsb3BtZW50LmpzXG4gKlxuICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5cblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAoZnVuY3Rpb24oKSB7XG4ndXNlIHN0cmljdCc7XG5cbi8vIFRoZSBTeW1ib2wgdXNlZCB0byB0YWcgdGhlIFJlYWN0RWxlbWVudC1saWtlIHR5cGVzLiBJZiB0aGVyZSBpcyBubyBuYXRpdmUgU3ltYm9sXG4vLyBub3IgcG9seWZpbGwsIHRoZW4gYSBwbGFpbiBudW1iZXIgaXMgdXNlZCBmb3IgcGVyZm9ybWFuY2UuXG52YXIgaGFzU3ltYm9sID0gdHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBTeW1ib2wuZm9yO1xudmFyIFJFQUNUX0VMRU1FTlRfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmVsZW1lbnQnKSA6IDB4ZWFjNztcbnZhciBSRUFDVF9QT1JUQUxfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnBvcnRhbCcpIDogMHhlYWNhO1xudmFyIFJFQUNUX0ZSQUdNRU5UX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5mcmFnbWVudCcpIDogMHhlYWNiO1xudmFyIFJFQUNUX1NUUklDVF9NT0RFX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5zdHJpY3RfbW9kZScpIDogMHhlYWNjO1xudmFyIFJFQUNUX1BST0ZJTEVSX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5wcm9maWxlcicpIDogMHhlYWQyO1xudmFyIFJFQUNUX1BST1ZJREVSX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5wcm92aWRlcicpIDogMHhlYWNkO1xudmFyIFJFQUNUX0NPTlRFWFRfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmNvbnRleHQnKSA6IDB4ZWFjZTsgLy8gVE9ETzogV2UgZG9uJ3QgdXNlIEFzeW5jTW9kZSBvciBDb25jdXJyZW50TW9kZSBhbnltb3JlLiBUaGV5IHdlcmUgdGVtcG9yYXJ5XG4vLyAodW5zdGFibGUpIEFQSXMgdGhhdCBoYXZlIGJlZW4gcmVtb3ZlZC4gQ2FuIHdlIHJlbW92ZSB0aGUgc3ltYm9scz9cblxudmFyIFJFQUNUX0FTWU5DX01PREVfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmFzeW5jX21vZGUnKSA6IDB4ZWFjZjtcbnZhciBSRUFDVF9DT05DVVJSRU5UX01PREVfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmNvbmN1cnJlbnRfbW9kZScpIDogMHhlYWNmO1xudmFyIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5mb3J3YXJkX3JlZicpIDogMHhlYWQwO1xudmFyIFJFQUNUX1NVU1BFTlNFX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5zdXNwZW5zZScpIDogMHhlYWQxO1xudmFyIFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnN1c3BlbnNlX2xpc3QnKSA6IDB4ZWFkODtcbnZhciBSRUFDVF9NRU1PX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5tZW1vJykgOiAweGVhZDM7XG52YXIgUkVBQ1RfTEFaWV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QubGF6eScpIDogMHhlYWQ0O1xudmFyIFJFQUNUX0JMT0NLX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5ibG9jaycpIDogMHhlYWQ5O1xudmFyIFJFQUNUX0ZVTkRBTUVOVEFMX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5mdW5kYW1lbnRhbCcpIDogMHhlYWQ1O1xudmFyIFJFQUNUX1JFU1BPTkRFUl9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QucmVzcG9uZGVyJykgOiAweGVhZDY7XG52YXIgUkVBQ1RfU0NPUEVfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnNjb3BlJykgOiAweGVhZDc7XG5cbmZ1bmN0aW9uIGlzVmFsaWRFbGVtZW50VHlwZSh0eXBlKSB7XG4gIHJldHVybiB0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycgfHwgdHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicgfHwgLy8gTm90ZTogaXRzIHR5cGVvZiBtaWdodCBiZSBvdGhlciB0aGFuICdzeW1ib2wnIG9yICdudW1iZXInIGlmIGl0J3MgYSBwb2x5ZmlsbC5cbiAgdHlwZSA9PT0gUkVBQ1RfRlJBR01FTlRfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9DT05DVVJSRU5UX01PREVfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9QUk9GSUxFUl9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1NUUklDVF9NT0RFX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1VTUEVOU0VfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEUgfHwgdHlwZW9mIHR5cGUgPT09ICdvYmplY3QnICYmIHR5cGUgIT09IG51bGwgJiYgKHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0xBWllfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9NRU1PX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfUFJPVklERVJfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9DT05URVhUX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9GVU5EQU1FTlRBTF9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX1JFU1BPTkRFUl9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX1NDT1BFX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfQkxPQ0tfVFlQRSk7XG59XG5cbmZ1bmN0aW9uIHR5cGVPZihvYmplY3QpIHtcbiAgaWYgKHR5cGVvZiBvYmplY3QgPT09ICdvYmplY3QnICYmIG9iamVjdCAhPT0gbnVsbCkge1xuICAgIHZhciAkJHR5cGVvZiA9IG9iamVjdC4kJHR5cGVvZjtcblxuICAgIHN3aXRjaCAoJCR0eXBlb2YpIHtcbiAgICAgIGNhc2UgUkVBQ1RfRUxFTUVOVF9UWVBFOlxuICAgICAgICB2YXIgdHlwZSA9IG9iamVjdC50eXBlO1xuXG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICAgIGNhc2UgUkVBQ1RfQVNZTkNfTU9ERV9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfQ09OQ1VSUkVOVF9NT0RFX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9GUkFHTUVOVF9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfUFJPRklMRVJfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX1NUUklDVF9NT0RFX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9TVVNQRU5TRV9UWVBFOlxuICAgICAgICAgICAgcmV0dXJuIHR5cGU7XG5cbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgdmFyICQkdHlwZW9mVHlwZSA9IHR5cGUgJiYgdHlwZS4kJHR5cGVvZjtcblxuICAgICAgICAgICAgc3dpdGNoICgkJHR5cGVvZlR5cGUpIHtcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9DT05URVhUX1RZUEU6XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRTpcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9MQVpZX1RZUEU6XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfTUVNT19UWVBFOlxuICAgICAgICAgICAgICBjYXNlIFJFQUNUX1BST1ZJREVSX1RZUEU6XG4gICAgICAgICAgICAgICAgcmV0dXJuICQkdHlwZW9mVHlwZTtcblxuICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybiAkJHR5cGVvZjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICAgIGNhc2UgUkVBQ1RfUE9SVEFMX1RZUEU6XG4gICAgICAgIHJldHVybiAkJHR5cGVvZjtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdW5kZWZpbmVkO1xufSAvLyBBc3luY01vZGUgaXMgZGVwcmVjYXRlZCBhbG9uZyB3aXRoIGlzQXN5bmNNb2RlXG5cbnZhciBBc3luY01vZGUgPSBSRUFDVF9BU1lOQ19NT0RFX1RZUEU7XG52YXIgQ29uY3VycmVudE1vZGUgPSBSRUFDVF9DT05DVVJSRU5UX01PREVfVFlQRTtcbnZhciBDb250ZXh0Q29uc3VtZXIgPSBSRUFDVF9DT05URVhUX1RZUEU7XG52YXIgQ29udGV4dFByb3ZpZGVyID0gUkVBQ1RfUFJPVklERVJfVFlQRTtcbnZhciBFbGVtZW50ID0gUkVBQ1RfRUxFTUVOVF9UWVBFO1xudmFyIEZvcndhcmRSZWYgPSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFO1xudmFyIEZyYWdtZW50ID0gUkVBQ1RfRlJBR01FTlRfVFlQRTtcbnZhciBMYXp5ID0gUkVBQ1RfTEFaWV9UWVBFO1xudmFyIE1lbW8gPSBSRUFDVF9NRU1PX1RZUEU7XG52YXIgUG9ydGFsID0gUkVBQ1RfUE9SVEFMX1RZUEU7XG52YXIgUHJvZmlsZXIgPSBSRUFDVF9QUk9GSUxFUl9UWVBFO1xudmFyIFN0cmljdE1vZGUgPSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFO1xudmFyIFN1c3BlbnNlID0gUkVBQ1RfU1VTUEVOU0VfVFlQRTtcbnZhciBoYXNXYXJuZWRBYm91dERlcHJlY2F0ZWRJc0FzeW5jTW9kZSA9IGZhbHNlOyAvLyBBc3luY01vZGUgc2hvdWxkIGJlIGRlcHJlY2F0ZWRcblxuZnVuY3Rpb24gaXNBc3luY01vZGUob2JqZWN0KSB7XG4gIHtcbiAgICBpZiAoIWhhc1dhcm5lZEFib3V0RGVwcmVjYXRlZElzQXN5bmNNb2RlKSB7XG4gICAgICBoYXNXYXJuZWRBYm91dERlcHJlY2F0ZWRJc0FzeW5jTW9kZSA9IHRydWU7IC8vIFVzaW5nIGNvbnNvbGVbJ3dhcm4nXSB0byBldmFkZSBCYWJlbCBhbmQgRVNMaW50XG5cbiAgICAgIGNvbnNvbGVbJ3dhcm4nXSgnVGhlIFJlYWN0SXMuaXNBc3luY01vZGUoKSBhbGlhcyBoYXMgYmVlbiBkZXByZWNhdGVkLCAnICsgJ2FuZCB3aWxsIGJlIHJlbW92ZWQgaW4gUmVhY3QgMTcrLiBVcGRhdGUgeW91ciBjb2RlIHRvIHVzZSAnICsgJ1JlYWN0SXMuaXNDb25jdXJyZW50TW9kZSgpIGluc3RlYWQuIEl0IGhhcyB0aGUgZXhhY3Qgc2FtZSBBUEkuJyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGlzQ29uY3VycmVudE1vZGUob2JqZWN0KSB8fCB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfQVNZTkNfTU9ERV9UWVBFO1xufVxuZnVuY3Rpb24gaXNDb25jdXJyZW50TW9kZShvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9DT05DVVJSRU5UX01PREVfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzQ29udGV4dENvbnN1bWVyKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0NPTlRFWFRfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzQ29udGV4dFByb3ZpZGVyKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX1BST1ZJREVSX1RZUEU7XG59XG5mdW5jdGlvbiBpc0VsZW1lbnQob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlb2Ygb2JqZWN0ID09PSAnb2JqZWN0JyAmJiBvYmplY3QgIT09IG51bGwgJiYgb2JqZWN0LiQkdHlwZW9mID09PSBSRUFDVF9FTEVNRU5UX1RZUEU7XG59XG5mdW5jdGlvbiBpc0ZvcndhcmRSZWYob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzRnJhZ21lbnQob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfRlJBR01FTlRfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzTGF6eShvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9MQVpZX1RZUEU7XG59XG5mdW5jdGlvbiBpc01lbW8ob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfTUVNT19UWVBFO1xufVxuZnVuY3Rpb24gaXNQb3J0YWwob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfUE9SVEFMX1RZUEU7XG59XG5mdW5jdGlvbiBpc1Byb2ZpbGVyKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX1BST0ZJTEVSX1RZUEU7XG59XG5mdW5jdGlvbiBpc1N0cmljdE1vZGUob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfU1RSSUNUX01PREVfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzU3VzcGVuc2Uob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfU1VTUEVOU0VfVFlQRTtcbn1cblxuZXhwb3J0cy5Bc3luY01vZGUgPSBBc3luY01vZGU7XG5leHBvcnRzLkNvbmN1cnJlbnRNb2RlID0gQ29uY3VycmVudE1vZGU7XG5leHBvcnRzLkNvbnRleHRDb25zdW1lciA9IENvbnRleHRDb25zdW1lcjtcbmV4cG9ydHMuQ29udGV4dFByb3ZpZGVyID0gQ29udGV4dFByb3ZpZGVyO1xuZXhwb3J0cy5FbGVtZW50ID0gRWxlbWVudDtcbmV4cG9ydHMuRm9yd2FyZFJlZiA9IEZvcndhcmRSZWY7XG5leHBvcnRzLkZyYWdtZW50ID0gRnJhZ21lbnQ7XG5leHBvcnRzLkxhenkgPSBMYXp5O1xuZXhwb3J0cy5NZW1vID0gTWVtbztcbmV4cG9ydHMuUG9ydGFsID0gUG9ydGFsO1xuZXhwb3J0cy5Qcm9maWxlciA9IFByb2ZpbGVyO1xuZXhwb3J0cy5TdHJpY3RNb2RlID0gU3RyaWN0TW9kZTtcbmV4cG9ydHMuU3VzcGVuc2UgPSBTdXNwZW5zZTtcbmV4cG9ydHMuaXNBc3luY01vZGUgPSBpc0FzeW5jTW9kZTtcbmV4cG9ydHMuaXNDb25jdXJyZW50TW9kZSA9IGlzQ29uY3VycmVudE1vZGU7XG5leHBvcnRzLmlzQ29udGV4dENvbnN1bWVyID0gaXNDb250ZXh0Q29uc3VtZXI7XG5leHBvcnRzLmlzQ29udGV4dFByb3ZpZGVyID0gaXNDb250ZXh0UHJvdmlkZXI7XG5leHBvcnRzLmlzRWxlbWVudCA9IGlzRWxlbWVudDtcbmV4cG9ydHMuaXNGb3J3YXJkUmVmID0gaXNGb3J3YXJkUmVmO1xuZXhwb3J0cy5pc0ZyYWdtZW50ID0gaXNGcmFnbWVudDtcbmV4cG9ydHMuaXNMYXp5ID0gaXNMYXp5O1xuZXhwb3J0cy5pc01lbW8gPSBpc01lbW87XG5leHBvcnRzLmlzUG9ydGFsID0gaXNQb3J0YWw7XG5leHBvcnRzLmlzUHJvZmlsZXIgPSBpc1Byb2ZpbGVyO1xuZXhwb3J0cy5pc1N0cmljdE1vZGUgPSBpc1N0cmljdE1vZGU7XG5leHBvcnRzLmlzU3VzcGVuc2UgPSBpc1N1c3BlbnNlO1xuZXhwb3J0cy5pc1ZhbGlkRWxlbWVudFR5cGUgPSBpc1ZhbGlkRWxlbWVudFR5cGU7XG5leHBvcnRzLnR5cGVPZiA9IHR5cGVPZjtcbiAgfSkoKTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC1pcy5wcm9kdWN0aW9uLm1pbi5qcycpO1xufSBlbHNlIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC1pcy5kZXZlbG9wbWVudC5qcycpO1xufVxuIiwiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtNYWluTGF5b3V0fSBmcm9tIFwiLi4vLi4vbGF5b3V0cy9NYWluTGF5b3V0XCI7XHJcbmltcG9ydCBVc2VyQ2FyZCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9Vc2VyQ2FyZFwiO1xyXG5pbXBvcnQge3VzZVJvdXRlcn0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7Z2V0UG9zdENvbW1lbnRzLCBnZXRQb3N0cywgc2hvd1Bvc3R9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9hcGkvUG9zdEFwaVwiO1xyXG5pbXBvcnQge01pbmlQb3N0fSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9NaW5pUG9zdFwiO1xyXG5pbXBvcnQge3VzZVNlbGVjdG9yfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHtzZWxlY3RVc2VyU3RhdGV9IGZyb20gXCIuLi8uLi9yZWR1eC91c2VyL3VzZXIuc2VsZWN0b3JcIjtcclxuaW1wb3J0IHtzZXRMaWtlfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvYXBpL0xpa2VBcGlcIjtcclxuaW1wb3J0IHtQYWdpbmF0aW9uLCBQb3N0RGF0YSwgVXNlcn0gZnJvbSBcIi4uLy4uL2ludGVyZmFjZXNcIjtcclxuaW1wb3J0IHtVc2VyQXBpfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvYXBpL1VzZXJBcGlcIjtcclxuaW1wb3J0IHtDb21tZW50QXBpfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvYXBpL0NvbW1lbnRBcGlcIjtcclxuaW1wb3J0IHtMb2FkTW9yZX0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvTG9hZE1vcmVcIjtcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9maWxlKHByb3BzKSB7XHJcbiAgICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VTdGF0ZTxVc2VyPihwcm9wcy51c2VyKTtcclxuICAgIGNvbnN0IGF1dGhVc2VyID0gdXNlU2VsZWN0b3Ioc2VsZWN0VXNlclN0YXRlKVsnZGF0YSddO1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuICAgIGNvbnN0IHtpZCwgdHlwZX0gPSByb3V0ZXIucXVlcnlcclxuICAgIGNvbnN0IHR5cGVzID0ge1xyXG4gICAgICAgIGRyYWZ0czogJ2RyYWZ0JyxcclxuICAgICAgICBhcnRpY2xlczogJ2FjdGl2ZSdcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBbcG9zdHMsIHNldFBvc3RzXSA9IFJlYWN0LnVzZVN0YXRlPFBhcnRpYWw8UGFnaW5hdGlvbjxQb3N0RGF0YT4+Pihwcm9wcy5wb3N0cylcclxuICAgIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbc2tpcFVzZUVmZmVjdCwgc2V0U2tpcFVzZUVmZmVjdF0gPSBSZWFjdC51c2VTdGF0ZSh0cnVlKTtcclxuXHJcbiAgICBjb25zdCBbcGFnZSwgc2V0UGFnZV0gPSB1c2VTdGF0ZShwcm9wcy5wb3N0cy5tZXRhLmN1cnJlbnRfcGFnZSlcclxuICAgIGNvbnN0IFttYXhQYWdlLCBzZXRNYXhQYWdlXSA9IHVzZVN0YXRlKHByb3BzLnBvc3RzLm1ldGEubGFzdF9wYWdlKVxyXG5cclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgc2V0U2tpcFVzZUVmZmVjdChmYWxzZSk7XHJcblxyXG4gICAgICAgIGlmICghc2tpcFVzZUVmZmVjdCkge1xyXG4gICAgICAgICAgICBzZXRJc0xvYWRpbmcodHJ1ZSlcclxuICAgICAgICAgICAgY29uc3QgZWZmZWN0ID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcmVzcG9uc2VQb3N0cyA9IGF3YWl0IGdldFBvc3RzKHt1c2VyX2lkczogaWQsIHN0YXR1czogdHlwZXNbdHlwZSBhcyBzdHJpbmddLCBwYWdlfSk7XHJcbiAgICAgICAgICAgICAgICBzZXRQb3N0cyhyZXNwb25zZVBvc3RzKVxyXG4gICAgICAgICAgICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZWZmZWN0KCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0sIFt0eXBlLCBwYWdlXSlcclxuXHJcbiAgICBjb25zdCBvblR5cGVDaGFuZ2UgPSBhc3luYyAodDogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgY29uc3QgcG9zdHMgPSBhd2FpdCBnZXRQb3N0cyh7c3RhdHVzOiB0eXBlc1t0XX0pO1xyXG4gICAgICAgIHNldFBvc3RzKHBvc3RzKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZVNldExpa2UgPSBhc3luYyAocG9zdElkOiBudW1iZXIsIGxpa2U/OiAnbGlrZScgfCAnZGlzbGlrZScpID0+IHtcclxuICAgICAgICBhd2FpdCBzZXRMaWtlKHBvc3RJZCwgJ3Bvc3QnLCBsaWtlKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoaXNMb2FkaW5nIHx8IHBvc3RzID09PSB7fSkge1xyXG4gICAgICAgIHJldHVybiBudWxsXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8TWFpbkxheW91dD5cclxuICAgICAgICAgICAgPFVzZXJDYXJkIG5pY2tuYW1lPXt1c2VyPy5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgcHJvZmVzc2lvbj17dXNlcj8ucG9zaXRpb259XHJcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0dXM9e3VzZXI/LmRlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgc2luY2VEYXRlPXt1c2VyPy5jcmVhdGVkX2F0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgY29tbWVudHNDb3VudD17dXNlcj8uY29tbWVudHNfY291bnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICByZWFkeUZvcldvcms9e3VzZXI/LnJlYWR5X2Zvcl93b3JrfVxyXG4gICAgICAgICAgICAgICAgICAgICAgYXJ0aWNsZVR5cGU9e3R5cGUgYXMgc3RyaW5nIHx8ICdhcnRpY2xlcycgYXMgc3RyaW5nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2VUeXBlPXtvblR5cGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICBpc0F1dGhVc2VyPXthdXRoVXNlcj8uaWQgPT09IHVzZXIuaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICByZWNvZ25pemVkPXshIXVzZXIucmVjb2duaXplZH1cclxuICAgICAgICAgICAgICAgICAgICAgIGF2YXRhcj17dXNlci5hdmF0YXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICBwb3N0Q291bnQ9e3Bvc3RzPy5tZXRhPy50b3RhbH1cclxuXHJcbiAgICAgICAgICAgIC8+XHJcblxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9eydjb250ZW50IG10LTE1IG0tMTUnfT5cclxuICAgICAgICAgICAgICAgIHtwb3N0cz8uZGF0YT8ubWFwKHBvc3QgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiA8TWluaVBvc3RcclxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtwb3N0LmlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3N0RGF0YT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tbWVudHNDb3VudDogcG9zdC5jb21tZW50c19jb3VudCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBwb3N0LmRlc2NyaXB0aW9uLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzbGlrZXNDb3VudDogcG9zdC5kaXNsaWtlc19jb3VudCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpa2VzQ291bnQ6IHBvc3QubGlrZXNfY291bnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogcG9zdC50aXRsZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZpZXdzQ291bnQ6IHBvc3Qudmlld3MsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbHVnOiBwb3N0LnNsdWcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2VyOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXZhdGFyVXJsOiBwb3N0LnVzZXIuYXZhdGFyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBwb3N0LnVzZXIuaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogcG9zdC51c2VyLm5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2VVcmw6IHBvc3QuaW1nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IHBvc3QuaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWdzOiBbXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpbWU6IG5ldyBEYXRlKHBvc3QudXBkYXRlZF9hdCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2b3RlOiBwb3N0Py5saWtlZF90eXBlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvblNldExpa2U9e2hhbmRsZVNldExpa2V9XHJcbiAgICAgICAgICAgICAgICAgICAgLz47XHJcbiAgICAgICAgICAgICAgICB9KX1cclxuXHJcbiAgICAgICAgICAgICAgICB7IWlzTG9hZGluZyAmJiBwYWdlICE9PSBtYXhQYWdlICYmIChcclxuICAgICAgICAgICAgICAgICAgICA8TG9hZE1vcmUgb25DbGljaz17KCkgPT4gc2V0UGFnZShwYWdlICsgMSl9Lz5cclxuICAgICAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPC9NYWluTGF5b3V0PlxyXG4gICAgKVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhjdHgpIHtcclxuICAgIGNvbnN0IHBvc3RzID0gYXdhaXQgZ2V0UG9zdHMoe3VzZXJfaWRzOiBjdHgucXVlcnkuaWR9KVxyXG4gICAgY29uc3QgY29tbWVudHMgPSBhd2FpdCBDb21tZW50QXBpLmdldCh7dXNlcl9pZHM6IGN0eC5xdWVyeS5pZH0pXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHByb3BzOiB7XHJcbiAgICAgICAgICAgIHVzZXI6IGF3YWl0IFVzZXJBcGkuc2hvdyhjdHgucXVlcnkuaWQpLFxyXG4gICAgICAgICAgICBwb3N0cyxcclxuICAgICAgICAgICAgY29tbWVudHMsXHJcbiAgICAgICAgfSxcclxuICAgIH1cclxufVxyXG5cclxuIiwiaW1wb3J0IHtEaXJlY3RvcnlTdGF0ZSwgUm9vdFN0YXRlLCBVc2VyU3RhdGV9IGZyb20gXCIuLi90eXBlc1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IHNlbGVjdFRoZW1lc1N0YXRlID0gKHN0YXRlOiBSb290U3RhdGUpOiBEaXJlY3RvcnlTdGF0ZVsnZGF0YSddWyd0aGVtZXMnXSA9PiB7XHJcbiAgICByZXR1cm4gc3RhdGUuZGlyZWN0b3J5LmRhdGEudGhlbWVzXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3Qgc2VsZWN0Q2F0ZWdvcmllc1N0YXRlID0gKHN0YXRlOiBSb290U3RhdGUpOiBEaXJlY3RvcnlTdGF0ZVsnZGF0YSddWydjYXRlZ29yaWVzJ10gPT4ge1xyXG4gICAgcmV0dXJuIHN0YXRlLmRpcmVjdG9yeS5kYXRhLmNhdGVnb3JpZXNcclxufTtcclxuIiwiaW1wb3J0IHtSb290U3RhdGUsIFVzZXJTdGF0ZX0gZnJvbSBcIi4uL3R5cGVzXCI7XHJcblxyXG5leHBvcnQgY29uc3Qgc2VsZWN0VXNlclN0YXRlID0gKHN0YXRlOiBSb290U3RhdGUpOiBVc2VyU3RhdGUgPT4ge1xyXG4gICAgcmV0dXJuIHN0YXRlLnVzZXJcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBzZWxlY3RVc2VyTm90aWZpY2F0aW9ucyA9IChzdGF0ZTogUm9vdFN0YXRlKTogVXNlclN0YXRlWydub3RpZmljYXRpb25zJ10gPT4ge1xyXG4gICAgcmV0dXJuIHN0YXRlLnVzZXIubm90aWZpY2F0aW9ucztcclxufTtcclxuIiwiaW1wb3J0IGF4aW9zIGZyb20gJy4uLy4uL2NvcmUvYXhpb3MnO1xyXG5pbXBvcnQge0NvbW1lbnR9IGZyb20gJy4uLy4uL2ludGVyZmFjZXMnO1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBDb21tZW50QXBpID0ge1xyXG4gICAgZ2V0OiBhc3luYyAocGFyYW1zID0ge30pOiBQcm9taXNlPENvbW1lbnRbXT4gPT4ge1xyXG4gICAgICAgIGNvbnN0IHtkYXRhfSA9IGF3YWl0IGF4aW9zLmdldCgnL2FwaS9jb21tZW50cycsIHtcclxuICAgICAgICAgIHBhcmFtc1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gZGF0YTtcclxuICAgIH0sXHJcblxyXG4gICAgc2F2ZTogYXN5bmMgKHBvc3RJZDogbnVtYmVyLCB0ZXh0OiBzdHJpbmcsIHRvVXNlcklkPzogbnVtYmVyLCBwYXJlbnRDb21tZW50SWQ/OiBudW1iZXIsIGNvbW1lbnRJZD86IG51bWJlcikgPT4ge1xyXG4gICAgICAgIGNvbnN0IGJvZHkgPSB7XHJcbiAgICAgICAgICAgIHBvc3RfaWQ6IHBvc3RJZCxcclxuICAgICAgICAgICAgdGV4dCxcclxuICAgICAgICAgICAgdXNlcl9yZXBseV9pZDogdG9Vc2VySWQsXHJcbiAgICAgICAgICAgIHBhcmVudF9pZDogcGFyZW50Q29tbWVudElkXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgaWYgKGNvbW1lbnRJZCkge1xyXG4gICAgICAgICAgICBjb25zdCB7ZGF0YX0gPSBhd2FpdCBheGlvcy5wdXQoYC9hcGkvY29tbWVudHMvJHtjb21tZW50SWR9YCwgYm9keSk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gZGF0YVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3Qge2RhdGF9ID0gYXdhaXQgYXhpb3MucG9zdChgL2FwaS9jb21tZW50c2AsIGJvZHkpO1xyXG5cclxuICAgICAgICByZXR1cm4gZGF0YVxyXG4gICAgfVxyXG5cclxufTtcclxuIiwiaW1wb3J0IGF4aW9zIGZyb20gXCIuLi8uLi9jb3JlL2F4aW9zXCI7XHJcblxyXG5leHBvcnQgY29uc3Qgc2V0TGlrZSA9IGFzeW5jIChpZDogbnVtYmVyLCB0eXBlID0gJ3Bvc3QnLCBsaWtlPzogJ2xpa2UnIHwgJ2Rpc2xpa2UnICkgPT4ge1xyXG4gICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBheGlvcy5wb3N0KCcvYXBpL2xpa2VzJywge1xyXG4gICAgICAgIHR5cGUsXHJcbiAgICAgICAgaWQsXHJcbiAgICAgICAgbGlrZTogbGlrZSA/IGxpa2UgOiBudWxsXHJcbiAgICB9KVxyXG59XHJcbiIsImltcG9ydCBheGlvcyBmcm9tICcuLi8uLi9jb3JlL2F4aW9zJztcclxuaW1wb3J0IHtDYXRlZ29yeSwgUGFnaW5hdGlvbiwgUG9zdERhdGEsIFRoZW1lfSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzJztcclxuaW1wb3J0IHtnZXRDb29raWV9IGZyb20gJy4vVXNlckFwaSc7XHJcblxyXG5leHBvcnQgY29uc3Qgc2F2ZUltYWdlID0gKGltYWdlOiBGaWxlKSA9PiB7XHJcbiAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgZm9ybURhdGEuYXBwZW5kKCdpbWFnZScsIGltYWdlKTtcclxuICAgIHJldHVybiBheGlvcy5wb3N0KCcvYXBpL3Bvc3RzL2ltYWdlLWJ5LXVybCcsIGZvcm1EYXRhKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBzYXZlUG9zdCA9IGFzeW5jIChwb3N0RGF0YToge1xyXG4gICAgdGl0bGU6IHN0cmluZztcclxuICAgIGJvZHk6IGFueTtcclxuICAgIHRoZW1lcz86IFRoZW1lW10sXHJcbiAgICBzdGF0dXM/OiBzdHJpbmcsXHJcbiAgICBjYXRlZ29yeT86IENhdGVnb3J5LFxyXG4gICAgaWQ/OiBudW1iZXIsXHJcbn0pID0+IHtcclxuICAgIGxldCBib2R5ID0ge1xyXG4gICAgICAgIGJvZHk6IHBvc3REYXRhLmJvZHksXHJcbiAgICAgICAgdGl0bGU6IHBvc3REYXRhLnRpdGxlLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnVGVzdCcsXHJcbiAgICAgICAgdGhlbWVzOiBwb3N0RGF0YS50aGVtZXMgfHwgW10sXHJcbiAgICAgICAgc3RhdHVzOiBwb3N0RGF0YT8uc3RhdHVzLFxyXG4gICAgICAgIGNhdGVnb3J5OiBwb3N0RGF0YS5jYXRlZ29yeSxcclxuICAgIH07XHJcblxyXG4gICAgaWYgKHBvc3REYXRhPy5pZCkge1xyXG4gICAgICAgIGNvbnN0IHtkYXRhfSA9IGF3YWl0IGF4aW9zLnB1dChgL2FwaS9wb3N0cy8ke3Bvc3REYXRhLmlkfWAsIGJvZHkpO1xyXG4gICAgICAgIHJldHVybiBkYXRhXHJcblxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zdCB7ZGF0YX0gPSBhd2FpdCBheGlvcy5wb3N0KGAvYXBpL3Bvc3RzYCwgYm9keSk7XHJcbiAgICAgICAgcmV0dXJuIGRhdGFcclxuICAgIH1cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRQb3N0cyA9IGFzeW5jIChwYXJhbXMgPSB7fSwgdG9rZW4/OiBzdHJpbmcpOiBQcm9taXNlPFBhZ2luYXRpb248UG9zdERhdGE+PiA9PiB7XHJcbiAgICBsZXQgaGVhZGVycyA9IHt9O1xyXG5cclxuICAgIGlmICh0b2tlbikge1xyXG4gICAgICAgIGhlYWRlcnMgPSB7XHJcbiAgICAgICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0b2tlbn1gXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHtkYXRhfSA9IGF3YWl0IGF4aW9zLmdldCgnL2FwaS9wb3N0cycsIHtcclxuICAgICAgICBwYXJhbXMsXHJcbiAgICAgICAgaGVhZGVyc1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIGRhdGE7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0VGhlbWVzID0gYXN5bmMgKCk6IFByb21pc2U8VGhlbWVbXT4gPT4ge1xyXG4gICAgY29uc3Qge2RhdGF9ID0gYXdhaXQgYXhpb3MuZ2V0KCcvYXBpL3Bvc3RzL3RoZW1lcycpO1xyXG5cclxuICAgIHJldHVybiBkYXRhO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHNhdmVCeVVybCA9IGFzeW5jICh1cmw6IHN0cmluZykgPT4ge1xyXG4gICAgcmV0dXJuIGF3YWl0IGF4aW9zLnBvc3QoJy9hcGkvcG9zdHMvaW1hZ2UtYnktdXJsJywge3VybH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHNob3dQb3N0ID0gYXN5bmMgKHNsdWc6IHN0cmluZywgdG9rZW4/OiBzdHJpbmcpID0+IHtcclxuICAgIGNvbnN0IHtkYXRhfSA9IGF3YWl0IGF4aW9zLmdldChgL2FwaS9wb3N0cy8ke3NsdWd9YCwge1xyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogdG9rZW4gPyBgQmVhcmVyICR7dG9rZW59YCA6ICcnXHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gZGF0YTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRQb3N0Q29tbWVudHMgPSBhc3luYyAoaWQ6IG51bWJlciwgYXBpVG9rZW4/OiBzdHJpbmcpID0+IHtcclxuICAgIGNvbnN0IHtkYXRhfSA9IGF3YWl0IGF4aW9zLmdldChgL2FwaS9wb3N0cy8ke2lkfS9jb21tZW50c2AsIHtcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgIEF1dGhvcml6YXRpb246IGFwaVRva2VuID8gYEJlYXJlciAke2FwaVRva2VufWAgOiAnJ1xyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbiAgICByZXR1cm4gZGF0YTtcclxufVxyXG5cclxuIiwiaW1wb3J0IGF4aW9zIGZyb20gXCIuLi8uLi9jb3JlL2F4aW9zXCI7XHJcbmltcG9ydCB7UGFnaW5hdGlvbiwgVXNlcn0gZnJvbSBcIi4uLy4uL2ludGVyZmFjZXNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTcGVjaWFsaXN0cyA9IGFzeW5jIChwYXJhbXMpOiBQcm9taXNlPFBhZ2luYXRpb248VXNlcj4+ID0+IHtcclxuICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXhpb3MuZ2V0KCcvYXBpL3VzZXJzJywgeyBwYXJhbXMgfSk7XHJcblxyXG4gICAgcmV0dXJuIGRhdGFcclxufVxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTcGVjaWFsaXN0Q2F0ZWdvcmllcyA9IGFzeW5jICgpID0+IHtcclxuICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXhpb3MuZ2V0KCcvYXBpL3VzZXJzL2NhdGVnb3JpZXMnKTtcclxuXHJcbiAgICByZXR1cm4gZGF0YTtcclxufVxyXG4iLCJpbXBvcnQgYXhpb3MgZnJvbSAnLi4vLi4vY29yZS9heGlvcyc7XHJcbmltcG9ydCB7VXNlcn0gZnJvbSBcIi4uLy4uL2ludGVyZmFjZXNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBVc2VyQXBpID0ge1xyXG4gIGxvZ2luOiBhc3luYyAoZW1haWw6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZyk6IFByb21pc2U8YW55PiA9PiB7XHJcbiAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgZm9ybURhdGEuYXBwZW5kKCdlbWFpbCcsIGVtYWlsKTtcclxuICAgIGZvcm1EYXRhLmFwcGVuZCgncGFzc3dvcmQnLCBwYXNzd29yZCk7XHJcbiAgICBmb3JtRGF0YS5hcHBlbmQoJ3JlbWVtYmVyJywgJzEnKTtcclxuXHJcbiAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGF4aW9zLnBvc3QoJy9sb2dpbicsIGZvcm1EYXRhLCB7XHJcbiAgICAgIG1heFJlZGlyZWN0czogMCxcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBkYXRhO1xyXG4gIH0sXHJcblxyXG4gIGdldE1lOiBhc3luYyAodG9rZW4/OiBzdHJpbmcpID0+IHtcclxuICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXhpb3MuZ2V0KCcvYXBpL3VzZXInLCB7XHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICBBdXRob3JpemF0aW9uOiB0b2tlbiA/IGBCZWFyZXIgJHt0b2tlbn1gIDogJydcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gZGF0YTtcclxuICB9LFxyXG5cclxuICBnZXROb3RpZmljYXRpb25zOiBhc3luYyAodG9rZW4/OiBzdHJpbmcpID0+IHtcclxuICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXhpb3MuZ2V0KCcvYXBpL3VzZXIvbm90aWZpY2F0aW9ucycsIHtcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIEF1dGhvcml6YXRpb246IHRva2VuID8gYEJlYXJlciAke3Rva2VufWAgOiAnJ1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIHJldHVybiBkYXRhO1xyXG4gIH0sXHJcblxyXG4gIHNob3c6IGFzeW5jIChpZDogbnVtYmVyKSA9PiB7XHJcbiAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGF4aW9zLmdldCgnL2FwaS91c2Vycy8nICsgaWQpO1xyXG4gICAgcmV0dXJuIGRhdGE7XHJcbiAgfSxcclxuXHJcbiAgdXBkYXRlUHJvZmlsZTogYXN5bmMgKGRhdGE6IFBhcnRpYWw8VXNlcj4sIGlkOiBudW1iZXIpID0+IHtcclxuICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcblxyXG4gICAgT2JqZWN0LmtleXMoZGF0YSkuZm9yRWFjaCgocGFyYW0pID0+IHtcclxuICAgICAgaWYgKHBhcmFtICE9PSAnbGlua3MnKSB7XHJcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKHBhcmFtLCBkYXRhW3BhcmFtXSk7XHJcbiAgICAgIH1cclxuICAgIH0pXHJcblxyXG4gICAgaWYgKGRhdGEubGlua3M/Lmxlbmd0aCkge1xyXG4gICAgICBkYXRhLmxpbmtzLm1hcCgobCwga2V5KSA9PiB7XHJcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKGBsaW5rc1ske2tleX1dYCwgbCk7XHJcbiAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgYXdhaXQgYXhpb3MucGF0Y2goYC9hcGkvdXNlci8ke2lkfWAsIGRhdGEpXHJcblxyXG4gIH1cclxuXHJcblxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldENvb2tpZSA9ICgpID0+IHtcclxuICByZXR1cm4gYXhpb3MuZ2V0KCcvc2FuY3R1bS9jc3JmLWNvb2tpZScpO1xyXG59O1xyXG4iLCJpbXBvcnQgeyB1c2VNZWRpYVF1ZXJ5LCB1c2VUaGVtZSB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcblxuZXhwb3J0IGNvbnN0IHVzZUFsbE1RID0gKCkgPT4ge1xuICBjb25zdCB0aGVtZSA9IHVzZVRoZW1lKCk7XG5cbiAgcmV0dXJuIHtcbiAgICBpc1hTOiB1c2VNZWRpYVF1ZXJ5KHRoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ3hzJykpLFxuICAgIGlzU006IHVzZU1lZGlhUXVlcnkodGhlbWUuYnJlYWtwb2ludHMuZG93bignc20nKSksXG4gICAgaXNNRDogdXNlTWVkaWFRdWVyeSh0aGVtZS5icmVha3BvaW50cy5kb3duKCdtZCcpKSxcbiAgICBpc0xHOiB1c2VNZWRpYVF1ZXJ5KHRoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ2xnJykpLFxuICB9O1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0F2YXRhclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9CYWNrZHJvcFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvQ29sbGFwc2VcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0RpYWxvZ0NvbnRlbnRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQ2xvc2VcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG11aS9tYXRlcmlhbC9JY29uQnV0dG9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNsc3hcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZGF0ZS1mbnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZGF0ZS1mbnMvbG9jYWxlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZWR1eFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==