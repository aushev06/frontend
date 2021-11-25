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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/post/[slug].tsx");
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

/***/ "./components/AddCommentBlock/CommentBlock.module.scss":
/*!*************************************************************!*\
  !*** ./components/AddCommentBlock/CommentBlock.module.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"comment": "CommentBlock_comment__1kYN_",
	"fieldRoot": "CommentBlock_fieldRoot__2P7gC",
	"addButton": "CommentBlock_addButton__3vp3Q"
};


/***/ }),

/***/ "./components/AddCommentBlock/index.tsx":
/*!**********************************************!*\
  !*** ./components/AddCommentBlock/index.tsx ***!
  \**********************************************/
/*! exports provided: AddCommentBlock */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCommentBlock", function() { return AddCommentBlock; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _CommentBlock_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CommentBlock.module.scss */ "./components/AddCommentBlock/CommentBlock.module.scss");
/* harmony import */ var _CommentBlock_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_CommentBlock_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material_Input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/Input */ "@mui/material/Input");
/* harmony import */ var _mui_material_Input__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Input__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/Button */ "@mui/material/Button");
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Button__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "C:\\Projects\\projects\\frontend\\components\\AddCommentBlock\\index.tsx";




const AddCommentBlock = ({
  onAddComment,
  toUser,
  parentComment,
  comment,
  onCloseInput
}) => {
  const {
    0: isClicked,
    1: setIsClicked
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: text,
    1: setText
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(comment !== null && comment !== void 0 && comment.id ? comment.text : toUser ? `@${toUser.name},` : '');

  const handleAddComment = () => {
    onAddComment(text, toUser === null || toUser === void 0 ? void 0 : toUser.id, (parentComment === null || parentComment === void 0 ? void 0 : parentComment.parent_id) || (parentComment === null || parentComment === void 0 ? void 0 : parentComment.id), comment === null || comment === void 0 ? void 0 : comment.id);
    onCloseInput && onCloseInput();
    setText('');
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _CommentBlock_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.comment,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_mui_material_Input__WEBPACK_IMPORTED_MODULE_3___default.a, {
      onFocus: () => setIsClicked(true),
      classes: {
        root: _CommentBlock_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.fieldRoot
      },
      multiline: true,
      placeholder: 'Написать комментарий...',
      fullWidth: true,
      minRows: !isClicked ? 1 : 5,
      onChange: e => setText(e.target.value),
      value: text
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 13
    }, undefined), isClicked && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_mui_material_Button__WEBPACK_IMPORTED_MODULE_4___default.a, {
      onClick: handleAddComment,
      color: 'secondary',
      className: _CommentBlock_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.addButton,
      children: "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 27
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 9
  }, undefined);
};

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

/***/ "./components/CommentList/index.tsx":
/*!******************************************!*\
  !*** ./components/CommentList/index.tsx ***!
  \******************************************/
/*! exports provided: CommentList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentList", function() { return CommentList; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _PostComment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../PostComment */ "./components/PostComment/index.tsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _redux_user_user_selector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../redux/user/user.selector */ "./redux/user/user.selector.ts");

var _jsxFileName = "C:\\Projects\\projects\\frontend\\components\\CommentList\\index.tsx";




const CommentList = ({
  comments,
  onReplyComment,
  onSetLike
}) => {
  const user = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(_redux_user_user_selector__WEBPACK_IMPORTED_MODULE_4__["selectUserState"])['data'];
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: comments.map(comment => {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_PostComment__WEBPACK_IMPORTED_MODULE_2__["PostComment"], {
          onReplyComment: onReplyComment,
          comment: comment,
          onSetLike: onSetLike,
          isMyComment: comment.user.id === (user === null || user === void 0 ? void 0 : user.id)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 25
        }, undefined), comment.comments.map(childrenComment => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_PostComment__WEBPACK_IMPORTED_MODULE_2__["PostComment"], {
          onSetLike: onSetLike,
          isChildren: true,
          comment: childrenComment,
          onReplyComment: onReplyComment,
          isMyComment: childrenComment.user.id === (user === null || user === void 0 ? void 0 : user.id)
        }, childrenComment.id, false, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 66
        }, undefined))]
      }, comment.id, true, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 21
      }, undefined);
    })
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 9
  }, undefined);
};

/***/ }),

/***/ "./components/Dropdown/Dropdown.module.scss":
/*!**************************************************!*\
  !*** ./components/Dropdown/Dropdown.module.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"root": "Dropdown_root__3WC7p",
	"popper": "Dropdown_popper__3-ZGj",
	"paper": "Dropdown_paper__2IFEW"
};


/***/ }),

/***/ "./components/Dropdown/index.tsx":
/*!***************************************!*\
  !*** ./components/Dropdown/index.tsx ***!
  \***************************************/
/*! exports provided: Dropdown */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dropdown", function() { return Dropdown; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_ClickAwayListener__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/ClickAwayListener */ "@material-ui/core/ClickAwayListener");
/* harmony import */ var _material_ui_core_ClickAwayListener__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ClickAwayListener__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Grow__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Grow */ "@material-ui/core/Grow");
/* harmony import */ var _material_ui_core_Grow__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grow__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_MenuList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/MenuList */ "@material-ui/core/MenuList");
/* harmony import */ var _material_ui_core_MenuList__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_MenuList__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Paper */ "@material-ui/core/Paper");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Popper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Popper */ "@material-ui/core/Popper");
/* harmony import */ var _material_ui_core_Popper__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Popper__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! clsx */ "clsx");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Dropdown_module_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Dropdown.module.scss */ "./components/Dropdown/Dropdown.module.scss");
/* harmony import */ var _Dropdown_module_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_Dropdown_module_scss__WEBPACK_IMPORTED_MODULE_8__);


var _jsxFileName = "C:\\Projects\\projects\\frontend\\components\\Dropdown\\index.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









const Dropdown = ({
  children,
  classes,
  overlay,
  placement = 'bottom-end'
}) => {
  const [open, setOpen] = react__WEBPACK_IMPORTED_MODULE_7___default.a.useState(false);
  const anchorRef = react__WEBPACK_IMPORTED_MODULE_7___default.a.useRef(null);

  const handleToggle = () => {
    setOpen(prevOpen => !prevOpen);
  };

  const handleClose = event => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    }
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      ref: anchorRef,
      onClick: handleToggle,
      tabIndex: 0,
      onKeyDown: handleToggle,
      role: "button",
      "aria-pressed": "false",
      className: clsx__WEBPACK_IMPORTED_MODULE_6___default()(_Dropdown_module_scss__WEBPACK_IMPORTED_MODULE_8___default.a.root),
      children: overlay
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Popper__WEBPACK_IMPORTED_MODULE_5___default.a, {
      open: open,
      anchorEl: anchorRef.current,
      className: clsx__WEBPACK_IMPORTED_MODULE_6___default()(_Dropdown_module_scss__WEBPACK_IMPORTED_MODULE_8___default.a.popper, classes === null || classes === void 0 ? void 0 : classes.popper),
      role: undefined,
      transition: true,
      disablePortal: true,
      placement: placement,
      children: ({
        TransitionProps
      }) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grow__WEBPACK_IMPORTED_MODULE_2___default.a, _objectSpread(_objectSpread({}, TransitionProps), {}, {
        style: {
          transformOrigin: 'center top'
        },
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_4___default.a, {
          elevation: 0,
          className: clsx__WEBPACK_IMPORTED_MODULE_6___default()(_Dropdown_module_scss__WEBPACK_IMPORTED_MODULE_8___default.a.paper, classes === null || classes === void 0 ? void 0 : classes.paper),
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_ClickAwayListener__WEBPACK_IMPORTED_MODULE_1___default.a, {
            onClickAway: handleClose,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_MenuList__WEBPACK_IMPORTED_MODULE_3___default.a, {
              autoFocusItem: open,
              id: "menu-list-grow",
              onKeyDown: handleListKeyDown,
              onClick: handleClose,
              children: children
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 76,
              columnNumber: 17
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 75,
            columnNumber: 15
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 13
        }, undefined)
      }), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 11
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 7
    }, undefined)]
  }, void 0, true);
};

/***/ }),

/***/ "./components/FullPost/Post.module.scss":
/*!**********************************************!*\
  !*** ./components/FullPost/Post.module.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"postWrapper": "Post_postWrapper__3CdQP",
	"post": "Post_post__NYH03",
	"postInfo": "Post_postInfo__1JnJK",
	"postHeader": "Post_postHeader__3IKYX",
	"postShare": "Post_postShare__nnlL4",
	"postShareIcon": "Post_postShareIcon__3hscA",
	"postSharePopup": "Post_postSharePopup__1JHjY",
	"postShareSocial": "Post_postShareSocial__1gbM_",
	"postShareSocialIcon": "Post_postShareSocialIcon__1e82r",
	"postFooter": "Post_postFooter__2m0fE",
	"postFooterIcons": "Post_postFooterIcons__2qY30",
	"postFooterIcon": "Post_postFooterIcon__24-2W",
	"postFooterIconHover": "Post_postFooterIconHover__2A_9V",
	"postFooterComplain": "Post_postFooterComplain__33EhM",
	"postFooterComplainIcon": "Post_postFooterComplainIcon__34nKM",
	"header": "Post_header__3VB8H",
	"paragraph": "Post_paragraph__2CXh7",
	"list": "Post_list__1U7VN",
	"listItem": "Post_listItem__3wxvH",
	"image": "Post_image__3c-9e",
	"imagePicture": "Post_imagePicture__UY9AO",
	"imagePictureVisible": "Post_imagePictureVisible__12jQp",
	"imagePreloader": "Post_imagePreloader__2IBIJ",
	"imagePreloaderVisible": "Post_imagePreloaderVisible__33gyd",
	"image-preloader-spin": "Post_image-preloader-spin__2ArGB",
	"delimiter": "Post_delimiter__2WxvS",
	"unknown": "Post_unknown__2TN0U",
	"unknownTitle": "Post_unknownTitle__3HIkD",
	"unknownDescription": "Post_unknownDescription__33ZO-"
};


/***/ }),

/***/ "./components/FullPost/PostViewer/Delimiter.tsx":
/*!******************************************************!*\
  !*** ./components/FullPost/PostViewer/Delimiter.tsx ***!
  \******************************************************/
/*! exports provided: DelimiterBlock */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DelimiterBlock", function() { return DelimiterBlock; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Post_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Post.module.scss */ "./components/FullPost/Post.module.scss");
/* harmony import */ var _Post_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Post_module_scss__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Projects\\projects\\frontend\\components\\FullPost\\PostViewer\\Delimiter.tsx";


const DelimiterBlock = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _Post_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.delimiter
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 10
  }, undefined);
};

/***/ }),

/***/ "./components/FullPost/PostViewer/Header.tsx":
/*!***************************************************!*\
  !*** ./components/FullPost/PostViewer/Header.tsx ***!
  \***************************************************/
/*! exports provided: HeaderBlock */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderBlock", function() { return HeaderBlock; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Post_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Post.module.scss */ "./components/FullPost/Post.module.scss");
/* harmony import */ var _Post_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Post_module_scss__WEBPACK_IMPORTED_MODULE_1__);


const HeaderBlock = ({
  block
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(`h${block.data.level}`, {
    className: _Post_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.header
  }, block.data.text);
};

/***/ }),

/***/ "./components/FullPost/PostViewer/Image.tsx":
/*!**************************************************!*\
  !*** ./components/FullPost/PostViewer/Image.tsx ***!
  \**************************************************/
/*! exports provided: ImageBlock */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageBlock", function() { return ImageBlock; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ "clsx");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Post_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Post.module.scss */ "./components/FullPost/Post.module.scss");
/* harmony import */ var _Post_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Post_module_scss__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "C:\\Projects\\projects\\frontend\\components\\FullPost\\PostViewer\\Image.tsx";



const ImageBlock = ({
  block
}) => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _Post_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.image,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
      className: clsx__WEBPACK_IMPORTED_MODULE_1___default()(_Post_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.imagePicture),
      src: block.data.file.url,
      alt: block.data.caption
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 5
  }, undefined);
};

/***/ }),

/***/ "./components/FullPost/PostViewer/List.tsx":
/*!*************************************************!*\
  !*** ./components/FullPost/PostViewer/List.tsx ***!
  \*************************************************/
/*! exports provided: ListBlock */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListBlock", function() { return ListBlock; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Post_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Post.module.scss */ "./components/FullPost/Post.module.scss");
/* harmony import */ var _Post_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Post_module_scss__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Projects\\projects\\frontend\\components\\FullPost\\PostViewer\\List.tsx";


const ListBlock = ({
  block
}) => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
    className: _Post_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.list,
    children: block.data.items.map((item, index) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
      className: _Post_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.listItem,
      children: item
    }, index, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }, undefined))
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 5
  }, undefined);
};

/***/ }),

/***/ "./components/FullPost/PostViewer/Paragraph.tsx":
/*!******************************************************!*\
  !*** ./components/FullPost/PostViewer/Paragraph.tsx ***!
  \******************************************************/
/*! exports provided: ParagraphBlock */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParagraphBlock", function() { return ParagraphBlock; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Post_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Post.module.scss */ "./components/FullPost/Post.module.scss");
/* harmony import */ var _Post_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Post_module_scss__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Projects\\projects\\frontend\\components\\FullPost\\PostViewer\\Paragraph.tsx";


const ParagraphBlock = ({
  block
}) => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _Post_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.paragraph,
    dangerouslySetInnerHTML: {
      __html: block.data.text
    }
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 10
  }, undefined);
};

/***/ }),

/***/ "./components/FullPost/PostViewer/Unknown.tsx":
/*!****************************************************!*\
  !*** ./components/FullPost/PostViewer/Unknown.tsx ***!
  \****************************************************/
/*! exports provided: Unknown */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Unknown", function() { return Unknown; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Post_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Post.module.scss */ "./components/FullPost/Post.module.scss");
/* harmony import */ var _Post_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Post_module_scss__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Projects\\projects\\frontend\\components\\FullPost\\PostViewer\\Unknown.tsx";


const Unknown = ({
  type
}) => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _Post_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.unknown,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
      className: _Post_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.unknownTitle,
      children: ["\u0411\u043B\u043E\u043A \"", type[0].toUpperCase() + type.slice(1), "\" \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D"]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _Post_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.unknownDescription,
      children: "\u0420\u0435\u0430\u043B\u0438\u0437\u0443\u0439\u0442\u0435 \u043D\u043E\u0432\u044B\u0439 \u0431\u043B\u043E\u043A \u0432 \u043F\u0430\u043F\u043A\u0435 PostViewer \u0438 \u0434\u043E\u0431\u0430\u0432\u044C\u0442\u0435 \u0435\u0433\u043E \u0432 switch-case \u0432 \u044D\u0442\u043E\u0439 \u0436\u0435 \u043F\u0430\u043F\u043A\u0435"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 5
  }, undefined);
};

/***/ }),

/***/ "./components/FullPost/PostViewer/index.tsx":
/*!**************************************************!*\
  !*** ./components/FullPost/PostViewer/index.tsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getBlockHTML; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Delimiter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Delimiter */ "./components/FullPost/PostViewer/Delimiter.tsx");
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Header */ "./components/FullPost/PostViewer/Header.tsx");
/* harmony import */ var _Image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Image */ "./components/FullPost/PostViewer/Image.tsx");
/* harmony import */ var _List__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./List */ "./components/FullPost/PostViewer/List.tsx");
/* harmony import */ var _Paragraph__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Paragraph */ "./components/FullPost/PostViewer/Paragraph.tsx");
/* harmony import */ var _Unknown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Unknown */ "./components/FullPost/PostViewer/Unknown.tsx");

var _jsxFileName = "C:\\Projects\\projects\\frontend\\components\\FullPost\\PostViewer\\index.tsx";






function getBlockHTML(block) {
  switch (block.type) {
    case 'header':
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Header__WEBPACK_IMPORTED_MODULE_2__["HeaderBlock"], {
        block: block
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 14
      }, this);

    case 'paragraph':
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Paragraph__WEBPACK_IMPORTED_MODULE_5__["ParagraphBlock"], {
        block: block
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 14
      }, this);

    case 'list':
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_List__WEBPACK_IMPORTED_MODULE_4__["ListBlock"], {
        block: block
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 14
      }, this);

    case 'image':
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Image__WEBPACK_IMPORTED_MODULE_3__["ImageBlock"], {
        block: block
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 14
      }, this);

    case 'delimiter':
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Delimiter__WEBPACK_IMPORTED_MODULE_1__["DelimiterBlock"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 14
      }, this);

    default:
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Unknown__WEBPACK_IMPORTED_MODULE_6__["Unknown"], {
        type: 'TEST'
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 14
      }, this);
  }
}

/***/ }),

/***/ "./components/FullPost/index.tsx":
/*!***************************************!*\
  !*** ./components/FullPost/index.tsx ***!
  \***************************************/
/*! exports provided: FullPost */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FullPost", function() { return FullPost; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Post_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Post.module.scss */ "./components/FullPost/Post.module.scss");
/* harmony import */ var _Post_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Post_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _icons_ShareIcon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../icons/ShareIcon */ "./components/icons/ShareIcon.tsx");
/* harmony import */ var _icons_FacebookIcon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../icons/FacebookIcon */ "./components/icons/FacebookIcon.tsx");
/* harmony import */ var _icons_VkIcon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../icons/VkIcon */ "./components/icons/VkIcon.tsx");
/* harmony import */ var _icons_TwitterIcon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../icons/TwitterIcon */ "./components/icons/TwitterIcon.tsx");
/* harmony import */ var _icons_TelegramIcon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../icons/TelegramIcon */ "./components/icons/TelegramIcon.tsx");
/* harmony import */ var _icons_WhatsappIcon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../icons/WhatsappIcon */ "./components/icons/WhatsappIcon.tsx");
/* harmony import */ var _LikeBlock__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../LikeBlock */ "./components/LikeBlock/index.tsx");
/* harmony import */ var _UserViewOnContent__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../UserViewOnContent */ "./components/UserViewOnContent/index.tsx");
/* harmony import */ var _ViewsAndComments__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../ViewsAndComments */ "./components/ViewsAndComments/index.tsx");
/* harmony import */ var _PostViewer__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./PostViewer */ "./components/FullPost/PostViewer/index.tsx");
/* harmony import */ var _icons_WarningIcon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../icons/WarningIcon */ "./components/icons/WarningIcon.tsx");
/* harmony import */ var _utils_useAllMQ__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../utils/useAllMQ */ "./utils/useAllMQ.ts");

var _jsxFileName = "C:\\Projects\\projects\\frontend\\components\\FullPost\\index.tsx";















const FullPost = ({
  post,
  onSetLike
}) => {
  const mq = Object(_utils_useAllMQ__WEBPACK_IMPORTED_MODULE_15__["useAllMQ"])();
  const [postData, setPostData] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(post);
  const [anchorEl, setAnchorEl] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(null);
  const [likesAndDislikes, setLikesAndDislikes] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState({
    likes: postData.likes_count,
    dislikes: postData.dislikes_count,
    vote: post === null || post === void 0 ? void 0 : post.liked_type
  });

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleSetLike = async like => {
    setLikesAndDislikes(like);
    await onSetLike(post.id, like === null || like === void 0 ? void 0 : like.vote);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _Post_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.post,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_UserViewOnContent__WEBPACK_IMPORTED_MODULE_11__["UserViewOnContent"], {
      user: {
        id: post.user.id,
        name: post.user.name,
        avatarUrl: post.user.avatar
      },
      time: new Date(post.created_at).getTime()
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _Post_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.postInfo,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _Post_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.postDetails,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
          className: _Post_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.postHeader,
          children: post.title
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ViewsAndComments__WEBPACK_IMPORTED_MODULE_12__["ViewsAndComments"], {
          comments: post.comments_count,
          views: post.views,
          mode: "full"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 9
      }, undefined), !mq.isXS && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _Post_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.postActions,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_LikeBlock__WEBPACK_IMPORTED_MODULE_10__["LikeBlock"], {
          likes: likesAndDislikes.likes,
          dislikes: likesAndDislikes.dislikes,
          mode: "mini",
          onChange: handleSetLike,
          vote: likesAndDislikes.vote
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 15
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _Post_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.postShare,
          onClick: handleClick,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_icons_ShareIcon__WEBPACK_IMPORTED_MODULE_4__["ShareIcon"], {
            className: _Post_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.postShareIcon
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 63,
            columnNumber: 17
          }, undefined), "\u041F\u043E\u0434\u0435\u043B\u0438\u0442\u044C\u0441\u044F"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 15
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Popover"], {
          open: !!anchorEl,
          anchorEl: anchorEl,
          onClose: () => setAnchorEl(null),
          classes: {
            paper: _Post_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.postSharePopup
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
            className: _Post_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.postShareSocial,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_icons_FacebookIcon__WEBPACK_IMPORTED_MODULE_5__["FacebookIcon"], {
              className: _Post_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.postShareSocialIcon
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 83,
              columnNumber: 19
            }, undefined), "Facebook"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 82,
            columnNumber: 17
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _Post_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.postShareSocial,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_icons_VkIcon__WEBPACK_IMPORTED_MODULE_6__["VkIcon"], {
              className: _Post_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.postShareSocialIcon
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 87,
              columnNumber: 19
            }, undefined), "\u0412\u043A\u043E\u043D\u0442\u0430\u043A\u0442\u0435"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 86,
            columnNumber: 17
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _Post_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.postShareSocial,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_icons_TwitterIcon__WEBPACK_IMPORTED_MODULE_7__["TwitterIcon"], {
              className: _Post_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.postShareSocialIcon
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 91,
              columnNumber: 19
            }, undefined), "Twitter"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 90,
            columnNumber: 17
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _Post_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.postShareSocial,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_icons_TelegramIcon__WEBPACK_IMPORTED_MODULE_8__["TelegramIcon"], {
              className: _Post_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.postShareSocialIcon
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 95,
              columnNumber: 19
            }, undefined), "Telegram"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 94,
            columnNumber: 17
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _Post_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.postShareSocial,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_icons_WhatsappIcon__WEBPACK_IMPORTED_MODULE_9__["WhatsappIcon"], {
              className: _Post_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.postShareSocialIcon
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 99,
              columnNumber: 19
            }, undefined), "Whatsapp"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 98,
            columnNumber: 17
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 15
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 13
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _Post_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.postWrapper,
      children: postData.body.map((block, idx) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: Object(_PostViewer__WEBPACK_IMPORTED_MODULE_13__["default"])(block)
      }, 'block-' + idx, false, {
        fileName: _jsxFileName,
        lineNumber: 107,
        columnNumber: 56
      }, undefined))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 9
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _Post_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.postFooter,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _Post_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.postFooterIcons,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_icons_FacebookIcon__WEBPACK_IMPORTED_MODULE_5__["FacebookIcon"], {
          className: _Post_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.postFooterIcon,
          hoverClassName: _Post_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.postFooterIconHover
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 113,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_icons_VkIcon__WEBPACK_IMPORTED_MODULE_6__["VkIcon"], {
          className: _Post_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.postFooterIcon,
          hoverClassName: _Post_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.postFooterIconHover
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 114,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_icons_TwitterIcon__WEBPACK_IMPORTED_MODULE_7__["TwitterIcon"], {
          className: _Post_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.postFooterIcon,
          hoverClassName: _Post_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.postFooterIconHover
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 115,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_icons_TelegramIcon__WEBPACK_IMPORTED_MODULE_8__["TelegramIcon"], {
          className: _Post_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.postFooterIcon,
          hoverClassName: _Post_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.postFooterIconHover
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 116,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_icons_WhatsappIcon__WEBPACK_IMPORTED_MODULE_9__["WhatsappIcon"], {
          className: _Post_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.postFooterIcon,
          hoverClassName: _Post_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.postFooterIconHover
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 117,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 112,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        className: _Post_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.postFooterComplain,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_icons_WarningIcon__WEBPACK_IMPORTED_MODULE_14__["WarningIcon"], {
          className: _Post_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.postFooterComplainIcon
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 120,
          columnNumber: 11
        }, undefined), "\u041F\u043E\u0436\u0430\u043B\u043E\u0432\u0430\u0442\u044C\u0441\u044F"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 119,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 39,
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

const ReplyToCommentItem = ({
  notification
}) => {
  var _notification$data2, _notification$data2$u;

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _NotificationDropdown_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.item,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Avatar"], {
      alt: 'User',
      src: (_notification$data2 = notification.data) === null || _notification$data2 === void 0 ? void 0 : (_notification$data2$u = _notification$data2.user) === null || _notification$data2$u === void 0 ? void 0 : _notification$data2$u.avatar,
      className: _NotificationDropdown_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.avatar
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _NotificationDropdown_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.listContent,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("b", {
        children: notification.data.user.name
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 17
      }, undefined), " \u043E\u0442\u0432\u0435\u0442\u0438\u043B \u043D\u0430 \u0412\u0430\u0448 \u043A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439 \u043A \u0437\u0430\u043F\u0438\u0441\u0438\xA0", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
        href: '#',
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          children: ["\u201C", notification.data.post.title, "\u201D"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 29,
    columnNumber: 9
  }, undefined);
};

const SetLikeOrDislikeItem = ({
  notification
}) => {
  var _notification$data4, _notification$data4$u;

  const isLike = notification.data.type === 'like';

  if (notification.data.likeable_type.includes('Comment')) {
    var _notification$data3, _notification$data3$u;

    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _NotificationDropdown_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.item,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _NotificationDropdown_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.likeBlock,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Avatar"], {
          alt: 'User',
          src: (_notification$data3 = notification.data) === null || _notification$data3 === void 0 ? void 0 : (_notification$data3$u = _notification$data3.user) === null || _notification$data3$u === void 0 ? void 0 : _notification$data3$u.avatar,
          className: _NotificationDropdown_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.avatar
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 17
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          src: isLike ? '/like.svg' : '/dislike.svg'
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 17
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 13
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _NotificationDropdown_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.listContent,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("b", {
          children: notification.data.user.name
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 17
        }, undefined), " \u043F\u043E\u0441\u0442\u0430\u0432\u0438\u043B ", isLike ? 'лайк' : 'дизлайк', " \u043D\u0430 \u043A\u043E\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439\xA0", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
          href: '#',
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            children: ["\u201C", notification.data.comment.text, "\u201D"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 55,
            columnNumber: 21
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 17
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 13
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 16
    }, undefined);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _NotificationDropdown_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.item,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Avatar"], {
      alt: 'User',
      src: (_notification$data4 = notification.data) === null || _notification$data4 === void 0 ? void 0 : (_notification$data4$u = _notification$data4.user) === null || _notification$data4$u === void 0 ? void 0 : _notification$data4$u.avatar,
      className: _NotificationDropdown_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.avatar
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _NotificationDropdown_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.listContent,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("b", {
        children: notification.data.user.name
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 17
      }, undefined), " \u043F\u043E\u0441\u0442\u0430\u0432\u0438\u043B ", isLike ? 'лайк' : 'дизлайк', " \u043D\u0430 \u0437\u0430\u043F\u0438\u0441\u044C\xA0", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
        href: '#',
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          children: ["\u201C", notification.data.post.title, "\u201D"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 64,
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
      lineNumber: 82,
      columnNumber: 16
    }, this);
  }

  if (item.type.includes('ReplyToCommentNotification')) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ReplyToCommentItem, {
      notification: item
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 16
    }, this);
  }

  if (item.type.includes('SetLikeOrDislikeNotification')) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(SetLikeOrDislikeItem, {
      notification: item
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 16
    }, this);
  }

  return null;
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

/***/ "./components/PostComment/PostCommentList.module.scss":
/*!************************************************************!*\
  !*** ./components/PostComment/PostCommentList.module.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"comment": "PostCommentList_comment__1Mkxi",
	"commentFlex": "PostCommentList_commentFlex__2Brzi",
	"text": "PostCommentList_text__T-eJj",
	"reply": "PostCommentList_reply__198Df"
};


/***/ }),

/***/ "./components/PostComment/index.tsx":
/*!******************************************!*\
  !*** ./components/PostComment/index.tsx ***!
  \******************************************/
/*! exports provided: PostComment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostComment", function() { return PostComment; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _PostCommentList_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PostCommentList.module.scss */ "./components/PostComment/PostCommentList.module.scss");
/* harmony import */ var _PostCommentList_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_PostCommentList_module_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _UserViewOnContent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../UserViewOnContent */ "./components/UserViewOnContent/index.tsx");
/* harmony import */ var _LikeBlock__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../LikeBlock */ "./components/LikeBlock/index.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _AddCommentBlock__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../AddCommentBlock */ "./components/AddCommentBlock/index.tsx");
/* harmony import */ var _Dropdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Dropdown */ "./components/Dropdown/index.tsx");
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/MenuItem */ "@material-ui/core/MenuItem");
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_7__);

var _jsxFileName = "C:\\Projects\\projects\\frontend\\components\\PostComment\\index.tsx";







function PostComment({
  comment,
  onReplyComment,
  isChildren,
  onSetLike,
  isMyComment
}) {
  const {
    0: showReply,
    1: setShowReply
  } = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false);
  const {
    0: showChange,
    1: setShowChange
  } = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false);
  const [likesAndDislikes, setLikesAndDislikes] = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState({
    likes: comment.likes_count,
    dislikes: comment.dislikes_count,
    vote: comment === null || comment === void 0 ? void 0 : comment.liked_type
  });

  const handleCommentSetLike = like => {
    setLikesAndDislikes(like);
    onSetLike(comment.id, like.vote);
  };

  const onCloseInput = () => {
    setShowChange(false);
  };

  const onSaveComment = async (text, userId, parentId, commentId) => {
    await onReplyComment(text, userId, parentId, commentId);
    onCloseInput();
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _PostCommentList_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.comment,
    style: {
      marginLeft: isChildren ? 10 : 0
    },
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _PostCommentList_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.commentFlex,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _PostCommentList_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.user,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_UserViewOnContent__WEBPACK_IMPORTED_MODULE_2__["UserViewOnContent"], {
          time: new Date(comment.created_at).getTime(),
          user: {
            name: comment.user.name,
            id: comment.user.id,
            avatarUrl: comment.user.avatar
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 17
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 13
      }, this), isMyComment && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _PostCommentList_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.actions,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "ml-10",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Dropdown__WEBPACK_IMPORTED_MODULE_6__["Dropdown"], {
            overlay: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                src: "/dots.svg"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 62,
                columnNumber: 32
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 62,
              columnNumber: 29
            }, this),
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_7___default.a, {
              disabled: false,
              onClick: () => setShowChange(true),
              children: "\u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 65,
              columnNumber: 25
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_7___default.a, {
              disabled: false,
              onClick: () => {},
              children: "\u0423\u0434\u0430\u043B\u0438\u0442\u044C"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 69,
              columnNumber: 25
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 60,
            columnNumber: 21
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 17
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 31
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _PostCommentList_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.text,
      children: !showChange ? comment.text : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_AddCommentBlock__WEBPACK_IMPORTED_MODULE_5__["AddCommentBlock"], {
        comment: comment,
        onAddComment: onSaveComment,
        toUser: comment.user,
        parentComment: comment
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 43
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _PostCommentList_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.commentFlex,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        className: _PostCommentList_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.reply,
        onClick: () => setShowReply(!showReply),
        children: "\u041E\u0442\u0432\u0435\u0442\u0438\u0442\u044C"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 13
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_LikeBlock__WEBPACK_IMPORTED_MODULE_3__["LikeBlock"], {
          vote: likesAndDislikes.vote,
          likes: likesAndDislikes.likes,
          dislikes: likesAndDislikes.dislikes,
          mode: "full",
          onChange: handleCommentSetLike
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 96,
          columnNumber: 17
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 13
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 9
    }, this), showReply && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_AddCommentBlock__WEBPACK_IMPORTED_MODULE_5__["AddCommentBlock"], {
      onAddComment: onSaveComment,
      toUser: comment.user,
      parentComment: comment
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 23
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 43,
    columnNumber: 12
  }, this);
}

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

/***/ "./components/icons/FacebookIcon.tsx":
/*!*******************************************!*\
  !*** ./components/icons/FacebookIcon.tsx ***!
  \*******************************************/
/*! exports provided: FacebookIcon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FacebookIcon", function() { return FacebookIcon; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ "clsx");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Projects\\projects\\frontend\\components\\icons\\FacebookIcon.tsx";


const FacebookIcon = ({
  className,
  hoverClassName
}) => {
  const [classes, setClasses] = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(className);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
    className: classes,
    onMouseOver: () => setClasses(clsx__WEBPACK_IMPORTED_MODULE_1___default()(className, hoverClassName)),
    onMouseLeave: () => setClasses(className),
    width: "9",
    height: "20",
    viewBox: "0 0 9 20",
    xmlns: "http://www.w3.org/2000/svg",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M5.95921 6.29691V4.64105C5.95921 4.39248 5.97065 4.19994 5.99389 4.06393C6.01704 3.92771 6.06973 3.79375 6.1515 3.66149C6.23315 3.52932 6.36536 3.43808 6.54793 3.38751C6.73075 3.33687 6.97369 3.31163 7.277 3.31163H8.93277V0H6.28572C4.75407 0 3.65402 0.363388 2.9854 1.09017C2.31687 1.81711 1.98265 2.88787 1.98265 4.30287V6.29687H0V9.60874H1.98252V19.2175H5.95917V9.60878H8.60606L8.95593 6.29691H5.95921Z"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 5
  }, undefined);
};

/***/ }),

/***/ "./components/icons/ShareIcon.tsx":
/*!****************************************!*\
  !*** ./components/icons/ShareIcon.tsx ***!
  \****************************************/
/*! exports provided: ShareIcon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShareIcon", function() { return ShareIcon; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Projects\\projects\\frontend\\components\\icons\\ShareIcon.tsx";

const ShareIcon = ({
  className
}) => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
    className: className,
    width: "20",
    height: "18",
    viewBox: "0 0 20 18",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M19 8.99458L11.5195 1V5.76971C6 6.5 1 10.4384 1 17C3.82589 13.9818 7 12 11.5195 12.2194V16.9892L19 8.99458Z",
      stroke: "#9C9CAA",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 5
  }, undefined);
};

/***/ }),

/***/ "./components/icons/TelegramIcon.tsx":
/*!*******************************************!*\
  !*** ./components/icons/TelegramIcon.tsx ***!
  \*******************************************/
/*! exports provided: TelegramIcon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TelegramIcon", function() { return TelegramIcon; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ "clsx");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Projects\\projects\\frontend\\components\\icons\\TelegramIcon.tsx";


const TelegramIcon = ({
  className,
  hoverClassName
}) => {
  const [classes, setClasses] = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(className);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
    className: classes,
    onMouseOver: () => setClasses(clsx__WEBPACK_IMPORTED_MODULE_1___default()(className, hoverClassName)),
    onMouseLeave: () => setClasses(className),
    width: "20",
    height: "17",
    viewBox: "0 0 20 17",
    xmlns: "http://www.w3.org/2000/svg",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M0.353259 8.15144L4.96167 9.83061L6.7454 15.4309C6.85953 15.7896 7.3088 15.9222 7.607 15.6842L10.1758 13.6397C10.4451 13.4255 10.8286 13.4149 11.11 13.6143L15.7432 16.8982C16.0622 17.1246 16.5141 16.9539 16.5941 16.5776L19.9882 0.639092C20.0756 0.22802 19.6618 -0.114909 19.2609 0.0364773L0.347859 7.15936C-0.118874 7.33509 -0.114808 7.9802 0.353259 8.15144ZM6.45793 8.93674L15.4645 3.52128C15.6263 3.42424 15.7929 3.63791 15.6539 3.76379L8.22087 10.5091C7.9596 10.7465 7.79107 11.0643 7.74334 11.4092L7.49014 13.241C7.4566 13.4856 7.10467 13.5099 7.03553 13.2732L6.06173 9.93273C5.9502 9.55173 6.11273 9.14475 6.45793 8.93674Z"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 5
  }, undefined);
};

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

/***/ "./components/icons/TwitterIcon.tsx":
/*!******************************************!*\
  !*** ./components/icons/TwitterIcon.tsx ***!
  \******************************************/
/*! exports provided: TwitterIcon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TwitterIcon", function() { return TwitterIcon; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ "clsx");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Projects\\projects\\frontend\\components\\icons\\TwitterIcon.tsx";


const TwitterIcon = ({
  className,
  hoverClassName
}) => {
  const [classes, setClasses] = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(className);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
    className: classes,
    onMouseOver: () => setClasses(clsx__WEBPACK_IMPORTED_MODULE_1___default()(className, hoverClassName)),
    onMouseLeave: () => setClasses(className),
    width: "20",
    height: "16",
    viewBox: "0 0 20 16",
    xmlns: "http://www.w3.org/2000/svg",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M20 1.89415C19.2563 2.21538 18.4637 2.42831 17.6375 2.53169C18.4875 2.032 19.1363 1.24677 19.4412 0.300308C18.6488 0.765538 17.7738 1.09415 16.8412 1.27754C16.0887 0.488616 15.0162 0 13.8462 0C11.5763 0 9.74875 1.81415 9.74875 4.03815C9.74875 4.35815 9.77625 4.66585 9.84375 4.95877C6.435 4.79508 3.41875 3.18646 1.3925 0.736C1.03875 1.34031 0.83125 2.032 0.83125 2.77662C0.83125 4.17477 1.5625 5.41415 2.6525 6.13169C1.99375 6.11938 1.3475 5.93108 0.8 5.63446C0.8 5.64677 0.8 5.66277 0.8 5.67877C0.8 7.64062 2.22125 9.27015 4.085 9.64554C3.75125 9.73538 3.3875 9.77846 3.01 9.77846C2.7475 9.77846 2.4825 9.76369 2.23375 9.70954C2.765 11.3083 4.2725 12.4837 6.065 12.5218C4.67 13.5963 2.89875 14.2437 0.98125 14.2437C0.645 14.2437 0.3225 14.2289 0 14.1883C1.81625 15.3415 3.96875 16 6.29 16C13.835 16 17.96 9.84615 17.96 4.512C17.96 4.33354 17.9538 4.16123 17.945 3.99015C18.7588 3.42154 19.4425 2.71138 20 1.89415Z"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 5
  }, undefined);
};

/***/ }),

/***/ "./components/icons/VkIcon.tsx":
/*!*************************************!*\
  !*** ./components/icons/VkIcon.tsx ***!
  \*************************************/
/*! exports provided: VkIcon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VkIcon", function() { return VkIcon; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ "clsx");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Projects\\projects\\frontend\\components\\icons\\VkIcon.tsx";


const VkIcon = ({
  className,
  hoverClassName
}) => {
  const [classes, setClasses] = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(className);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
    className: classes,
    onMouseOver: () => setClasses(clsx__WEBPACK_IMPORTED_MODULE_1___default()(className, hoverClassName)),
    onMouseLeave: () => setClasses(className),
    width: "23",
    height: "14",
    viewBox: "0 0 23 14",
    xmlns: "http://www.w3.org/2000/svg",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M22.6788 11.7479C22.6512 11.6884 22.6255 11.639 22.6016 11.5995C22.206 10.887 21.4501 10.0126 20.3342 8.97582L20.3107 8.95208L20.2988 8.94044L20.2869 8.92851H20.2749C19.7685 8.44574 19.4478 8.12114 19.3135 7.95496C19.0678 7.63838 19.0128 7.31794 19.147 6.99325C19.2419 6.74794 19.5983 6.22988 20.2154 5.43836C20.54 5.01888 20.7971 4.68268 20.987 4.42938C22.3562 2.60909 22.9498 1.4459 22.7677 0.939358L22.6969 0.820986C22.6494 0.749721 22.5268 0.684526 22.3291 0.625069C22.1311 0.565737 21.8779 0.555925 21.5692 0.595466L18.1505 0.619082C18.0951 0.599457 18.016 0.601287 17.913 0.625069C17.8101 0.648852 17.7586 0.660785 17.7586 0.660785L17.6991 0.690513L17.6519 0.726229C17.6123 0.749845 17.5687 0.791382 17.5212 0.850756C17.4739 0.909921 17.4344 0.979356 17.4028 1.05848C17.0306 2.01606 16.6074 2.90638 16.1325 3.72937C15.8396 4.22012 15.5707 4.64542 15.3251 5.00553C15.0798 5.36551 14.8741 5.63074 14.708 5.80075C14.5417 5.97093 14.3916 6.10727 14.2568 6.21026C14.1222 6.31329 14.0195 6.35682 13.9483 6.34089C13.877 6.32497 13.8099 6.30917 13.7463 6.29337C13.6356 6.2221 13.5465 6.12519 13.4794 6.00253C13.4119 5.87988 13.3665 5.7255 13.3428 5.53952C13.3192 5.35341 13.3052 5.19334 13.3012 5.05875C13.2975 4.92433 13.2992 4.73419 13.3072 4.48888C13.3155 4.24344 13.3192 4.07738 13.3192 3.99032C13.3192 3.68954 13.325 3.36311 13.3368 3.01095C13.3488 2.65878 13.3585 2.37975 13.3666 2.17419C13.3746 1.96842 13.3784 1.75071 13.3784 1.5212C13.3784 1.29169 13.3644 1.1117 13.3368 0.981061C13.3095 0.850589 13.2677 0.723942 13.2125 0.601162C13.157 0.478507 13.0757 0.383626 12.9691 0.316269C12.8623 0.248996 12.7295 0.195609 12.5715 0.155944C12.152 0.061021 11.6178 0.00967206 10.9688 0.00168906C9.49685 -0.0141106 8.55108 0.0809367 8.13164 0.286707C7.96545 0.373647 7.81506 0.492435 7.6806 0.642698C7.53811 0.816869 7.51824 0.911917 7.6211 0.92755C8.09601 0.998691 8.43221 1.16887 8.63008 1.43792L8.70138 1.58049C8.75685 1.68336 8.81223 1.86547 8.86765 2.12658C8.92299 2.38769 8.95871 2.67653 8.97443 2.99294C9.01392 3.57075 9.01392 4.06537 8.97443 4.47682C8.9348 4.88845 8.89738 5.20889 8.86167 5.4384C8.82595 5.66791 8.77256 5.85389 8.70138 5.99629C8.63008 6.13874 8.58264 6.22581 8.55885 6.2574C8.53511 6.289 8.51532 6.30892 8.4996 6.31674C8.39674 6.35615 8.28976 6.37624 8.17904 6.37624C8.06815 6.37624 7.93368 6.32077 7.77544 6.20992C7.61723 6.09908 7.45304 5.94682 7.28286 5.7529C7.11268 5.55893 6.92076 5.28789 6.70701 4.93971C6.49342 4.59154 6.27181 4.18004 6.0423 3.70522L5.85241 3.36087C5.7337 3.13934 5.57155 2.81678 5.36578 2.39347C5.15988 1.97 4.9779 1.56037 4.81969 1.16467C4.75645 0.998482 4.66145 0.871961 4.53484 0.784896L4.47543 0.74918C4.43593 0.717581 4.37252 0.684027 4.28554 0.64827C4.19843 0.612554 4.10754 0.586942 4.01249 0.571184L0.759881 0.594801C0.427506 0.594801 0.201986 0.670098 0.0832394 0.820486L0.0357156 0.891626C0.0119745 0.93125 0 0.994532 0 1.08164C0 1.1687 0.0237411 1.27556 0.0712649 1.40208C0.546087 2.51804 1.06245 3.59429 1.62034 4.63099C2.17824 5.6677 2.66304 6.5028 3.07445 7.13553C3.48595 7.76873 3.90539 8.36633 4.33277 8.92805C4.76015 9.48998 5.04305 9.85009 5.18146 10.0083C5.32004 10.1668 5.42889 10.2853 5.50802 10.3644L5.80484 10.6493C5.99477 10.8392 6.27368 11.0667 6.64169 11.3318C7.00978 11.597 7.41728 11.8581 7.86441 12.1156C8.31163 12.3725 8.8319 12.5823 9.42551 12.7445C10.019 12.9068 10.5967 12.972 11.1586 12.9405H12.5238C12.8007 12.9166 13.0105 12.8296 13.153 12.6793L13.2003 12.6198C13.232 12.5726 13.2618 12.4992 13.2892 12.4004C13.317 12.3015 13.3308 12.1926 13.3308 12.074C13.3227 11.7338 13.3486 11.4271 13.4078 11.1541C13.4669 10.8812 13.5344 10.6755 13.6098 10.5369C13.6852 10.3984 13.7703 10.2816 13.8649 10.1869C13.9598 10.0919 14.0274 10.0344 14.0671 10.0147C14.1065 9.99474 14.138 9.98122 14.1617 9.97311C14.3516 9.90983 14.5752 9.97112 14.8326 10.1573C15.0899 10.3432 15.3311 10.5729 15.5568 10.8458C15.7824 11.119 16.0534 11.4254 16.3699 11.7657C16.6866 12.106 16.9635 12.359 17.2008 12.5255L17.4381 12.6679C17.5966 12.763 17.8024 12.85 18.0557 12.9292C18.3085 13.0082 18.5301 13.028 18.7203 12.9885L21.7591 12.9411C22.0597 12.9411 22.2936 12.8913 22.4595 12.7926C22.6257 12.6937 22.7244 12.5847 22.7563 12.4661C22.788 12.3475 22.7897 12.2128 22.7623 12.0623C22.7342 11.9122 22.7064 11.8072 22.6788 11.7479Z"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 5
  }, undefined);
};

/***/ }),

/***/ "./components/icons/WarningIcon.tsx":
/*!******************************************!*\
  !*** ./components/icons/WarningIcon.tsx ***!
  \******************************************/
/*! exports provided: WarningIcon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WarningIcon", function() { return WarningIcon; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Projects\\projects\\frontend\\components\\icons\\WarningIcon.tsx";

const WarningIcon = ({
  className
}) => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
    className: className,
    width: "18",
    height: "18",
    viewBox: "0 0 18 18",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M9 4.25V9.76772M17 9C17 13.4183 13.4183 17 9 17C4.58172 17 1 13.4183 1 9C1 4.58172 4.58172 1 9 1C13.4183 1 17 4.58172 17 9ZM9 13.3277C8.72386 13.3277 8.5 13.1039 8.5 12.8277C8.5 12.5516 8.72386 12.3277 9 12.3277C9.27614 12.3277 9.5 12.5516 9.5 12.8277C9.5 13.1039 9.27614 13.3277 9 13.3277Z",
      stroke: "#9C9CAA",
      strokeLinecap: "round"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 5
  }, undefined);
};

/***/ }),

/***/ "./components/icons/WhatsappIcon.tsx":
/*!*******************************************!*\
  !*** ./components/icons/WhatsappIcon.tsx ***!
  \*******************************************/
/*! exports provided: WhatsappIcon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WhatsappIcon", function() { return WhatsappIcon; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ "clsx");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Projects\\projects\\frontend\\components\\icons\\WhatsappIcon.tsx";


const WhatsappIcon = ({
  className,
  hoverClassName
}) => {
  const [classes, setClasses] = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(className);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
    className: classes,
    onMouseOver: () => setClasses(clsx__WEBPACK_IMPORTED_MODULE_1___default()(className, hoverClassName)),
    onMouseLeave: () => setClasses(className),
    width: "18",
    height: "18",
    viewBox: "0 0 18 18",
    xmlns: "http://www.w3.org/2000/svg",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M9.00225 0H8.99775C4.03538 0 0 4.0365 0 9C0 10.9688 0.6345 12.7935 1.71337 14.2751L0.59175 17.6186L4.05113 16.5128C5.47425 17.4555 7.17188 18 9.00225 18C13.9646 18 18 13.9624 18 9C18 4.03763 13.9646 0 9.00225 0ZM14.2391 12.7091C14.022 13.3223 13.1602 13.8307 12.4729 13.9792C12.0026 14.0794 11.3884 14.1593 9.32063 13.302C6.67575 12.2063 4.9725 9.51862 4.83975 9.34425C4.71263 9.16988 3.771 7.92112 3.771 6.62963C3.771 5.33813 4.42688 4.70925 4.69125 4.43925C4.90838 4.21763 5.26725 4.11637 5.6115 4.11637C5.72288 4.11637 5.823 4.122 5.913 4.1265C6.17737 4.13775 6.31012 4.1535 6.4845 4.57088C6.70162 5.094 7.23037 6.3855 7.29338 6.51825C7.3575 6.651 7.42163 6.831 7.33162 7.00538C7.24725 7.18538 7.173 7.26525 7.04025 7.41825C6.9075 7.57125 6.7815 7.68825 6.64875 7.8525C6.52725 7.99538 6.39 8.14838 6.543 8.41275C6.696 8.6715 7.22475 9.53437 8.00325 10.2274C9.00787 11.1217 9.82237 11.4075 10.1137 11.529C10.3309 11.619 10.5896 11.5976 10.7483 11.4289C10.9496 11.2118 11.1982 10.8518 11.4514 10.4974C11.6314 10.2431 11.8586 10.2116 12.0971 10.3016C12.3401 10.386 13.626 11.0216 13.8904 11.1532C14.1547 11.286 14.3291 11.349 14.3932 11.4604C14.4562 11.5718 14.4562 12.0949 14.2391 12.7091Z"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 5
  }, undefined);
};

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

/***/ "./hooks/useAlert.ts":
/*!***************************!*\
  !*** ./hooks/useAlert.ts ***!
  \***************************/
/*! exports provided: AlertContext, useAlert */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertContext", function() { return AlertContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useAlert", function() { return useAlert; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const AlertContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext({});
const useAlert = () => {
  return Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(AlertContext);
};

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

/***/ "./pages/post/[slug].tsx":
/*!*******************************!*\
  !*** ./pages/post/[slug].tsx ***!
  \*******************************/
/*! exports provided: PostContext, default, getServerSideProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostContext", function() { return PostContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Post; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getServerSideProps", function() { return getServerSideProps; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _layouts_MainLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../layouts/MainLayout */ "./layouts/MainLayout.tsx");
/* harmony import */ var _components_FullPost__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/FullPost */ "./components/FullPost/index.tsx");
/* harmony import */ var _services_api_PostApi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/api/PostApi */ "./services/api/PostApi.ts");
/* harmony import */ var _components_AddCommentBlock__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/AddCommentBlock */ "./components/AddCommentBlock/index.tsx");
/* harmony import */ var _services_api_CommentApi__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/api/CommentApi */ "./services/api/CommentApi.ts");
/* harmony import */ var _components_CommentList__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/CommentList */ "./components/CommentList/index.tsx");
/* harmony import */ var _services_api_LikeApi__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/api/LikeApi */ "./services/api/LikeApi.ts");
/* harmony import */ var _components_SideBlock__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/SideBlock */ "./components/SideBlock/index.tsx");
/* harmony import */ var _components_MenuList__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/MenuList */ "./components/MenuList/index.tsx");
/* harmony import */ var _components_Tags__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/Tags */ "./components/Tags/index.tsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _redux_directory_directory_selector__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../redux/directory/directory.selector */ "./redux/directory/directory.selector.ts");
/* harmony import */ var _utils_useAllMQ__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../utils/useAllMQ */ "./utils/useAllMQ.ts");
/* harmony import */ var _utils_echo__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../utils/echo */ "./utils/echo.ts");
/* harmony import */ var _hooks_useAlert__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../hooks/useAlert */ "./hooks/useAlert.ts");
/* harmony import */ var _redux_user_user_selector__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../redux/user/user.selector */ "./redux/user/user.selector.ts");

var _jsxFileName = "C:\\Projects\\projects\\frontend\\pages\\post\\[slug].tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


















const PostContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createContext({});
function Post({
  post,
  serverSideComments
}) {
  const mq = Object(_utils_useAllMQ__WEBPACK_IMPORTED_MODULE_14__["useAllMQ"])();
  const {
    0: selectedThemes,
    1: setSelectedThemes
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]);
  const {
    0: comments,
    1: setComments
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(serverSideComments);
  const themes = Object(react_redux__WEBPACK_IMPORTED_MODULE_12__["useSelector"])(_redux_directory_directory_selector__WEBPACK_IMPORTED_MODULE_13__["selectThemesState"]);
  const categories = Object(react_redux__WEBPACK_IMPORTED_MODULE_12__["useSelector"])(_redux_directory_directory_selector__WEBPACK_IMPORTED_MODULE_13__["selectCategoriesState"]);
  const {
    openAlert
  } = Object(_hooks_useAlert__WEBPACK_IMPORTED_MODULE_16__["useAlert"])();
  const user = Object(react_redux__WEBPACK_IMPORTED_MODULE_12__["useSelector"])(_redux_user_user_selector__WEBPACK_IMPORTED_MODULE_17__["selectUserState"])['data'];

  const handleSelectTheme = async t => {
    setSelectedThemes(() => [...selectedThemes, t]);
  };

  const onAddComment = async (text, toUserId, parentId, commentId) => {
    await _services_api_CommentApi__WEBPACK_IMPORTED_MODULE_6__["CommentApi"].save(post.id, text, toUserId, parentId, commentId);
  };

  const handleCommentSetLike = async (id, like) => {
    await Object(_services_api_LikeApi__WEBPACK_IMPORTED_MODULE_8__["setLike"])(id, 'comment', like);
  };

  const handleSetLike = async (postId, like) => {
    await Object(_services_api_LikeApi__WEBPACK_IMPORTED_MODULE_8__["setLike"])(postId, 'post', like);
  };

  react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(() => {
    if (false) {}

    return () => {
      Object(_utils_echo__WEBPACK_IMPORTED_MODULE_15__["echo"])().leave('laravel_database_comments_' + (post === null || post === void 0 ? void 0 : post.id));
    };
  });
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("main", {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_layouts_MainLayout__WEBPACK_IMPORTED_MODULE_2__["MainLayout"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "wrapper-center",
        children: [!mq.isXS && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: 'left-side-no-margin',
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_SideBlock__WEBPACK_IMPORTED_MODULE_9__["SideBlock"], {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_MenuList__WEBPACK_IMPORTED_MODULE_10__["MenuList"], {
              items: [{
                name: 'Популярное',
                url: '/popular',
                icon: '/fire.svg',
                isActive: true,
                hasMore: true
              }, {
                name: 'Новое',
                url: '/new',
                icon: '/news.svg'
              }]
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 93,
              columnNumber: 33
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 92,
            columnNumber: 29
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_SideBlock__WEBPACK_IMPORTED_MODULE_9__["SideBlock"], {
            name: "\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u0438",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_MenuList__WEBPACK_IMPORTED_MODULE_10__["MenuList"], {
              items: categories.map(c => ({
                name: c.name,
                url: `/tags/${c.slug}`,
                icon: `/${c.slug}.png`
              }))
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 107,
              columnNumber: 33
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 106,
            columnNumber: 29
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_SideBlock__WEBPACK_IMPORTED_MODULE_9__["SideBlock"], {
            name: "\u0422\u0435\u043C\u044B",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Tags__WEBPACK_IMPORTED_MODULE_11__["Tags"], {
              items: themes,
              handleSelect: handleSelectTheme,
              selectedItems: selectedThemes
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 116,
              columnNumber: 33
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 115,
            columnNumber: 29
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 91,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "content",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_FullPost__WEBPACK_IMPORTED_MODULE_3__["FullPost"], {
            post: post,
            onSetLike: handleSetLike
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 126,
            columnNumber: 25
          }, this), post.status === 'active' && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: 'comments',
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_AddCommentBlock__WEBPACK_IMPORTED_MODULE_5__["AddCommentBlock"], {
              onAddComment: onAddComment
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 130,
              columnNumber: 33
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              style: {
                marginTop: 15
              },
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_CommentList__WEBPACK_IMPORTED_MODULE_7__["CommentList"], {
                onSetLike: handleCommentSetLike,
                comments: comments,
                onReplyComment: onAddComment
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 133,
                columnNumber: 37
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 132,
              columnNumber: 33
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 129,
            columnNumber: 29
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 125,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 86,
    columnNumber: 9
  }, this);
}
async function getServerSideProps(ctx) {
  var _ctx$req$cookies;

  const response = await Object(_services_api_PostApi__WEBPACK_IMPORTED_MODULE_4__["showPost"])(ctx.query.slug, (_ctx$req$cookies = ctx.req.cookies) === null || _ctx$req$cookies === void 0 ? void 0 : _ctx$req$cookies.auth_token);
  const responseComments = await Object(_services_api_PostApi__WEBPACK_IMPORTED_MODULE_4__["getPostComments"])(response.data.id, ctx.req.cookies.auth_token);
  return {
    props: {
      post: response.data,
      serverSideComments: responseComments
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

/***/ "./utils/echo.ts":
/*!***********************!*\
  !*** ./utils/echo.ts ***!
  \***********************/
/*! exports provided: echo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "echo", function() { return echo; });
/* harmony import */ var laravel_echo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! laravel-echo */ "laravel-echo");
/* harmony import */ var laravel_echo__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(laravel_echo__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var pusher_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! pusher-js */ "pusher-js");
/* harmony import */ var pusher_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(pusher_js__WEBPACK_IMPORTED_MODULE_1__);



if (false) {}

const echo = () => {
  return new laravel_echo__WEBPACK_IMPORTED_MODULE_0___default.a({
    broadcaster: "pusher",
    key: "b7cf3da93e80dff2db63",
    cluster: "ap2"
  });
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

/***/ "@material-ui/core/ClickAwayListener":
/*!******************************************************!*\
  !*** external "@material-ui/core/ClickAwayListener" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ClickAwayListener");

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

/***/ "@material-ui/core/Grow":
/*!*****************************************!*\
  !*** external "@material-ui/core/Grow" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Grow");

/***/ }),

/***/ "@material-ui/core/MenuItem":
/*!*********************************************!*\
  !*** external "@material-ui/core/MenuItem" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/MenuItem");

/***/ }),

/***/ "@material-ui/core/MenuList":
/*!*********************************************!*\
  !*** external "@material-ui/core/MenuList" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/MenuList");

/***/ }),

/***/ "@material-ui/core/Paper":
/*!******************************************!*\
  !*** external "@material-ui/core/Paper" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Paper");

/***/ }),

/***/ "@material-ui/core/Popper":
/*!*******************************************!*\
  !*** external "@material-ui/core/Popper" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Popper");

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

/***/ "@mui/material/Button":
/*!***************************************!*\
  !*** external "@mui/material/Button" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@mui/material/Button");

/***/ }),

/***/ "@mui/material/IconButton":
/*!*******************************************!*\
  !*** external "@mui/material/IconButton" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@mui/material/IconButton");

/***/ }),

/***/ "@mui/material/Input":
/*!**************************************!*\
  !*** external "@mui/material/Input" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@mui/material/Input");

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

/***/ "laravel-echo":
/*!*******************************!*\
  !*** external "laravel-echo" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("laravel-echo");

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

/***/ "pusher-js":
/*!****************************!*\
  !*** external "pusher-js" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("pusher-js");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0FkZENvbW1lbnRCbG9jay9Db21tZW50QmxvY2subW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9BZGRDb21tZW50QmxvY2svaW5kZXgudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQXV0aERpYWxvZy9BdXRoRGlhbG9nLm1vZHVsZS5zY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQXV0aERpYWxvZy9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9BdmFpbGFibGVGb3JXb3JrL0F2YWlsYWJsZUZvcldvcmsubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9BdmFpbGFibGVGb3JXb3JrL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0J1dHRvbi9CdXR0b24ubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9CdXR0b24vaW5kZXgudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQ2hlY2tib3gvQ2hlY2tib3gubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9DaGVja2JveC9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Db21tZW50TGlzdC9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Ecm9wZG93bi9Ecm9wZG93bi5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0Ryb3Bkb3duL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0Z1bGxQb3N0L1Bvc3QubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9GdWxsUG9zdC9Qb3N0Vmlld2VyL0RlbGltaXRlci50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9GdWxsUG9zdC9Qb3N0Vmlld2VyL0hlYWRlci50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9GdWxsUG9zdC9Qb3N0Vmlld2VyL0ltYWdlLnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0Z1bGxQb3N0L1Bvc3RWaWV3ZXIvTGlzdC50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9GdWxsUG9zdC9Qb3N0Vmlld2VyL1BhcmFncmFwaC50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9GdWxsUG9zdC9Qb3N0Vmlld2VyL1Vua25vd24udHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvRnVsbFBvc3QvUG9zdFZpZXdlci9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9GdWxsUG9zdC9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9IZWFkZXIvSGVhZGVyLm1vZHVsZS5zY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSGVhZGVyL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xpa2VCbG9jay9MaWtlQmxvY2subW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9MaWtlQmxvY2svaW5kZXgudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTWVudUxpc3QvTWVudUxpc3QubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9NZW51TGlzdC9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Nb2JpbGVQcm9maWxlUG9wdXAvTW9iaWxlUHJvZmlsZVBvcHVwLm1vZHVsZS5zY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTW9iaWxlUHJvZmlsZVBvcHVwL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL05hdmlnYXRpb25EcmF3ZXIvTmF2aWdhdGlvbi5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL05hdmlnYXRpb25EcmF3ZXIvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTm90aWZpY2F0aW9uRHJvcGRvd24vTm90aWZpY2F0aW9uRHJvcGRvd24ubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Ob3RpZmljYXRpb25Ecm9wZG93bi9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Ob3RpZmljYXRpb25Ecm9wZG93bi9pdGVtLnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1Bhc3RUaW1lTGFiZWwvUGFzdFRpbWVMYWJlbC5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1Bhc3RUaW1lTGFiZWwvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvUG9zdENvbW1lbnQvUG9zdENvbW1lbnRMaXN0Lm1vZHVsZS5zY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvUG9zdENvbW1lbnQvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvUHJvZmlsZVBvcHVwL1Byb2ZpbGVQb3B1cC5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1Byb2ZpbGVQb3B1cC9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9TZWFyY2hQb3B1cC9JdGVtLnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1NlYXJjaFBvcHVwL1NlYXJjaFBvcHVwLm1vZHVsZS5zY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvU2VhcmNoUG9wdXAvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvU2lkZUJsb2NrL1NpZGVCbG9jay5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1NpZGVCbG9jay9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9UYWdzL1RhZ3MubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9UYWdzL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1VzZXJWaWV3T25Db250ZW50L1VzZXJWaWV3T25Db250ZW50Lm1vZHVsZS5zY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvVXNlclZpZXdPbkNvbnRlbnQvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvVmlld3NBbmRDb21tZW50cy9WaWV3c0FuZENvbW1lbnRzLm1vZHVsZS5zY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvVmlld3NBbmRDb21tZW50cy9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9pY29ucy9Db21tZW50SWNvbi50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9pY29ucy9FeWVJY29uLnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2ljb25zL0ZhY2Vib29rSWNvbi50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9pY29ucy9TaGFyZUljb24udHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvaWNvbnMvVGVsZWdyYW1JY29uLnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2ljb25zL1RodW1iVXBJY29uLnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2ljb25zL1R3aXR0ZXJJY29uLnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2ljb25zL1ZrSWNvbi50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9pY29ucy9XYXJuaW5nSWNvbi50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9pY29ucy9XaGF0c2FwcEljb24udHN4Iiwid2VicGFjazovLy8uL2NvcmUvYXhpb3MudHMiLCJ3ZWJwYWNrOi8vLy4vaG9va3MvdXNlQWxlcnQudHMiLCJ3ZWJwYWNrOi8vLy4vbGF5b3V0cy9NYWluTGF5b3V0LnRzeCIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L2xpbmsudHN4Iiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvbm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvcmVxdWVzdC1pZGxlLWNhbGxiYWNrLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvcm91dGUtbG9hZGVyLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvcm91dGVyLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvdXNlLWludGVyc2VjdGlvbi50c3giLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC93aXRoLXJvdXRlci50c3giLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9pMThuL25vcm1hbGl6ZS1sb2NhbGUtcGF0aC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL21pdHQudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2Zvcm1hdC11cmwudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvaXMtZHluYW1pYy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9wYXJzZS1yZWxhdGl2ZS11cmwudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcXVlcnlzdHJpbmcudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcmVzb2x2ZS1yZXdyaXRlcy1ub29wLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLW1hdGNoZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtcmVnZXgudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi91dGlscy50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL3NlcnZlci9kZW5vcm1hbGl6ZS1wYWdlLXBhdGguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbGluay5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL3JlYWN0LWlzL2Nqcy9yZWFjdC1pcy5kZXZlbG9wbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvcmVhY3QtaXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvcG9zdC9bc2x1Z10udHN4Iiwid2VicGFjazovLy8uL3JlZHV4L2RpcmVjdG9yeS9kaXJlY3Rvcnkuc2VsZWN0b3IudHMiLCJ3ZWJwYWNrOi8vLy4vcmVkdXgvdXNlci91c2VyLnNlbGVjdG9yLnRzIiwid2VicGFjazovLy8uL3NlcnZpY2VzL2FwaS9Db21tZW50QXBpLnRzIiwid2VicGFjazovLy8uL3NlcnZpY2VzL2FwaS9MaWtlQXBpLnRzIiwid2VicGFjazovLy8uL3NlcnZpY2VzL2FwaS9Qb3N0QXBpLnRzIiwid2VicGFjazovLy8uL3NlcnZpY2VzL2FwaS9TcGVjaWFsaXN0c0FwaS50cyIsIndlYnBhY2s6Ly8vLi9zZXJ2aWNlcy9hcGkvVXNlckFwaS50cyIsIndlYnBhY2s6Ly8vLi91dGlscy9lY2hvLnRzIiwid2VicGFjazovLy8uL3V0aWxzL3VzZUFsbE1RLnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvQXZhdGFyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvQmFja2Ryb3BcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9DbGlja0F3YXlMaXN0ZW5lclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0NvbGxhcHNlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nQ29udGVudFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0dyb3dcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9NZW51SXRlbVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL01lbnVMaXN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvUGFwZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9Qb3BwZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL0Nsb3NlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG11aS9tYXRlcmlhbC9CdXR0b25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbXVpL21hdGVyaWFsL0ljb25CdXR0b25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbXVpL21hdGVyaWFsL0lucHV0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjbHN4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZGF0ZS1mbnNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJkYXRlLWZucy9sb2NhbGVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJsYXJhdmVsLWVjaG9cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInB1c2hlci1qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtcmVkdXhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJuYW1lcyI6WyJBZGRDb21tZW50QmxvY2siLCJvbkFkZENvbW1lbnQiLCJ0b1VzZXIiLCJwYXJlbnRDb21tZW50IiwiY29tbWVudCIsIm9uQ2xvc2VJbnB1dCIsImlzQ2xpY2tlZCIsInNldElzQ2xpY2tlZCIsInVzZVN0YXRlIiwidGV4dCIsInNldFRleHQiLCJpZCIsIm5hbWUiLCJoYW5kbGVBZGRDb21tZW50IiwicGFyZW50X2lkIiwic3R5bGVzIiwicm9vdCIsImZpZWxkUm9vdCIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImFkZEJ1dHRvbiIsIkF1dGhEaWFsb2ciLCJjaGlsZHJlbiIsIm9wZW4iLCJzaXplIiwib25DbG9zZSIsImNsYXNzTmFtZSIsIm1vZGFsIiwiY29sb3IiLCJ0aGVtZSIsInBhbGV0dGUiLCJncmV5IiwiYWxpZ25TZWxmIiwibWFyZ2luVG9wIiwibWFyZ2luUmlnaHQiLCJwYWRkaW5nIiwiZm9udFNpemUiLCJwYWRkaW5nVG9wIiwicGFkZGluZ0JvdHRvbSIsImNvbnRlbnQiLCJ0aXRsZSIsInN1YlRpdGxlIiwiQVBJX1VSTCIsImxpbmsiLCJBdmFpbGFibGVGb3JXb3JrIiwiY2hlY2tlZCIsIm9uQ2hhbmdlIiwic2V0Q2hlY2tlZCIsImlzTG9hZGluZyIsImNsc3giLCJ1bmNoZWNrZWRUaXRsZSIsInVuY2hlY2tlZCIsImNoZWNrZWRUaXRsZSIsIkJ1dHRvbiIsInZhcmlhbnQiLCJzdGFydEljb24iLCJlbmRJY29uIiwib25DbGljayIsImZ1bGxXaWR0aCIsImRpc2FibGVkIiwidHlwZSIsImJ1dHRvbiIsImNvbnRhaW5lZCIsIm91dGxpbmVkIiwiY29udGFpbmVkUHJpbWFyeSIsImNvbnRhaW5lZFNlY29uZGFyeSIsIm91dGxpbmVkUHJpbWFyeSIsIm91dGxpbmVkU2Vjb25kYXJ5IiwidGV4dFByaW1hcnkiLCJ0ZXh0U2Vjb25kYXJ5IiwiQ2hlY2tib3giLCJjaGVja2JveCIsInN3aXRjaEJhc2UiLCJ0aHVtYiIsInRyYWNrIiwiQ29tbWVudExpc3QiLCJjb21tZW50cyIsIm9uUmVwbHlDb21tZW50Iiwib25TZXRMaWtlIiwidXNlciIsInVzZVNlbGVjdG9yIiwic2VsZWN0VXNlclN0YXRlIiwibWFwIiwiY2hpbGRyZW5Db21tZW50IiwiRHJvcGRvd24iLCJjbGFzc2VzIiwib3ZlcmxheSIsInBsYWNlbWVudCIsInNldE9wZW4iLCJSZWFjdCIsImFuY2hvclJlZiIsInVzZVJlZiIsImhhbmRsZVRvZ2dsZSIsInByZXZPcGVuIiwiaGFuZGxlQ2xvc2UiLCJldmVudCIsImN1cnJlbnQiLCJjb250YWlucyIsImhhbmRsZUxpc3RLZXlEb3duIiwia2V5IiwicHJldmVudERlZmF1bHQiLCJwb3BwZXIiLCJ1bmRlZmluZWQiLCJUcmFuc2l0aW9uUHJvcHMiLCJ0cmFuc2Zvcm1PcmlnaW4iLCJwYXBlciIsIkRlbGltaXRlckJsb2NrIiwiZGVsaW1pdGVyIiwiSGVhZGVyQmxvY2siLCJibG9jayIsImNyZWF0ZUVsZW1lbnQiLCJkYXRhIiwibGV2ZWwiLCJoZWFkZXIiLCJJbWFnZUJsb2NrIiwiaW1hZ2UiLCJpbWFnZVBpY3R1cmUiLCJmaWxlIiwidXJsIiwiY2FwdGlvbiIsIkxpc3RCbG9jayIsImxpc3QiLCJpdGVtcyIsIml0ZW0iLCJpbmRleCIsImxpc3RJdGVtIiwiUGFyYWdyYXBoQmxvY2siLCJwYXJhZ3JhcGgiLCJfX2h0bWwiLCJVbmtub3duIiwidW5rbm93biIsInVua25vd25UaXRsZSIsInRvVXBwZXJDYXNlIiwic2xpY2UiLCJ1bmtub3duRGVzY3JpcHRpb24iLCJnZXRCbG9ja0hUTUwiLCJGdWxsUG9zdCIsInBvc3QiLCJtcSIsInVzZUFsbE1RIiwicG9zdERhdGEiLCJzZXRQb3N0RGF0YSIsImFuY2hvckVsIiwic2V0QW5jaG9yRWwiLCJsaWtlc0FuZERpc2xpa2VzIiwic2V0TGlrZXNBbmREaXNsaWtlcyIsImxpa2VzIiwibGlrZXNfY291bnQiLCJkaXNsaWtlcyIsImRpc2xpa2VzX2NvdW50Iiwidm90ZSIsImxpa2VkX3R5cGUiLCJoYW5kbGVDbGljayIsImN1cnJlbnRUYXJnZXQiLCJoYW5kbGVTZXRMaWtlIiwibGlrZSIsImF2YXRhclVybCIsImF2YXRhciIsIkRhdGUiLCJjcmVhdGVkX2F0IiwiZ2V0VGltZSIsInBvc3RJbmZvIiwicG9zdERldGFpbHMiLCJwb3N0SGVhZGVyIiwiY29tbWVudHNfY291bnQiLCJ2aWV3cyIsImlzWFMiLCJwb3N0QWN0aW9ucyIsInBvc3RTaGFyZSIsInBvc3RTaGFyZUljb24iLCJwb3N0U2hhcmVQb3B1cCIsInZlcnRpY2FsIiwiaG9yaXpvbnRhbCIsInBvc3RTaGFyZVNvY2lhbCIsInBvc3RTaGFyZVNvY2lhbEljb24iLCJwb3N0V3JhcHBlciIsImJvZHkiLCJpZHgiLCJwb3N0Rm9vdGVyIiwicG9zdEZvb3Rlckljb25zIiwicG9zdEZvb3Rlckljb24iLCJwb3N0Rm9vdGVySWNvbkhvdmVyIiwicG9zdEZvb3RlckNvbXBsYWluIiwicG9zdEZvb3RlckNvbXBsYWluSWNvbiIsIkhlYWRlciIsIm9uQ2xpY2tIYW1idXJnZXIiLCJzZXRJc0xvYWRpbmciLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJyZWFkeV9mb3Jfd29yayIsImlzU2VhcmNoIiwic2V0SXNTZWFyY2giLCJpc01vYmlsZVBvcHVwIiwic2V0SXNNb2JpbGVQb3B1cCIsImlzVmlzaWJsZSIsInNldElzVmlzaWJsZSIsInNlYXJjaElucHV0Iiwic2V0U2VhcmNoSW5wdXQiLCJ1c2VFZmZlY3QiLCJkb2N1bWVudCIsImNsYXNzTGlzdCIsImFkZCIsIm5vc2Nyb2xsIiwicmVtb3ZlIiwib25DaGFuZ2VDaGVja2JveCIsImhhbmRsZUNoYW5nZUNoZWNrYm94Iiwib25PcGVuU2VhcmNoIiwib25DbG9zZVNlYXJjaCIsImZsYWciLCJVc2VyQXBpIiwidXBkYXRlUHJvZmlsZSIsInRoZW4iLCJyIiwiY2F0Y2giLCJlcnIiLCJPYmplY3QiLCJ2YWx1ZXMiLCJyZXNwb25zZSIsImVycm9ycyIsImZvckVhY2giLCJhbGVydCIsImZpbmFsbHkiLCJwdXNoIiwibG9nbyIsInNlYXJjaCIsImlucHV0IiwiYmFja2Ryb3AiLCJtZW51QnV0dG9uIiwiTGlrZUJsb2NrIiwibW9kZSIsIm9uVGh1bWJVcENsaWNrIiwib25UaHVtYkRvd25DbGljayIsImxpa2VWb3RlZCIsImRpc2xpa2VWb3RlZCIsIm5vVm90ZXMiLCJsaWtlQmxvY2siLCJsaWtlQmxvY2tGdWxsIiwibGlrZUJsb2NrTWluaSIsInVwQmxvY2siLCJkb3duQmxvY2siLCJyb3RhdGUiLCJ0aHVtYlVwQ2xhc3NOYW1lIiwidGh1bWJEb3duQ2xhc3NOYW1lIiwiTWVudUxpc3QiLCJpc0FjdGl2ZSIsImljb24iLCJoYXNNb3JlIiwibmV3Q291bnQiLCJtb2NrdXAiLCJhdXRob3JzIiwiYXJ0aWNsZXMiLCJ0YWdzIiwicG9kY2FzdHMiLCJNb2JpbGVQcm9maWxlUG9wdXAiLCJvbkxvZ291dCIsIndpbmRvdyIsImNvbmZpcm0iLCJjb29raWUiLCJsb2NhbFN0b3JhZ2UiLCJyZW1vdmVJdGVtIiwibG9jYXRpb24iLCJocmVmIiwiY29udGFpbmVyIiwiaGVhZGVyX3Byb2ZpbGUiLCJhdmFpbGFibGUiLCJzZWN0aW9uMiIsImRpdmlkZXIiLCJtZWVseiIsImFib3V0IiwiTmF2aWdhdGlvbkRyYXdlciIsIm1lbnVPcGVuZWQiLCJzZWxlY3RlZFRoZW1lcyIsInNldFNlbGVjdGVkVGhlbWVzIiwidGhlbWVzIiwic2VsZWN0VGhlbWVzU3RhdGUiLCJjYXRlZ29yaWVzIiwic2VsZWN0Q2F0ZWdvcmllc1N0YXRlIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsImhhbmRsZUxvZ291dCIsImhhbmRsZVNlbGVjdFRoZW1lIiwidCIsImNsb3NlQnV0dG9uIiwiY2xvc2VJY29uIiwiYyIsInNsdWciLCJsb2dvdXQiLCJOb3RpZmljYXRpb25Ecm9wZG93biIsIkJvb2xlYW4iLCJub3RpZmljYXRpb25zIiwic2VsZWN0VXNlck5vdGlmaWNhdGlvbnMiLCJ0b2dnbGVPcGVuUG9wdXAiLCJjb25zb2xlIiwibG9nIiwibm90aWZpY2F0aW9uIiwibm90aWZpY2F0aW9uUG9wdXAiLCJub3RpZmljYXRpb25MaXN0IiwibGVuZ3RoIiwiQWRkQ29tbWVudEl0ZW0iLCJsaXN0Q29udGVudCIsIlJlcGx5VG9Db21tZW50SXRlbSIsIlNldExpa2VPckRpc2xpa2VJdGVtIiwiaXNMaWtlIiwibGlrZWFibGVfdHlwZSIsImluY2x1ZGVzIiwiSXRlbSIsIlBhc3RUaW1lTGFiZWwiLCJ0aW1lIiwibGVmdFNpZGVQb2ludCIsInRpbWVXaXRoTGVmdFNpZGVQb2ludCIsImZvcm1hdERpc3RhbmNlVG9Ob3ciLCJsb2NhbGUiLCJydSIsImFkZFN1ZmZpeCIsIlBvc3RDb21tZW50IiwiaXNDaGlsZHJlbiIsImlzTXlDb21tZW50Iiwic2hvd1JlcGx5Iiwic2V0U2hvd1JlcGx5Iiwic2hvd0NoYW5nZSIsInNldFNob3dDaGFuZ2UiLCJoYW5kbGVDb21tZW50U2V0TGlrZSIsIm9uU2F2ZUNvbW1lbnQiLCJ1c2VySWQiLCJwYXJlbnRJZCIsImNvbW1lbnRJZCIsIm1hcmdpbkxlZnQiLCJjb21tZW50RmxleCIsImFjdGlvbnMiLCJyZXBseSIsIlByb2ZpbGVQb3B1cCIsInBvcG92ZXIiLCJzZWN0aW9uMSIsInAiLCJzZWFyY2hUaXRsZUlubmVyIiwic2VhcmNoVGl0bGUiLCJzaG93QWxsIiwic3RvcFByb3BhZ2F0aW9uIiwic2VhcmNoSXRlbXMiLCJlbCIsInNlYXJjaEl0ZW0iLCJTZWFyY2hQb3B1cCIsInNldEF1dGhvcnMiLCJwb3N0cyIsInNldFBvc3RzIiwic2V0Q29tbWVudHMiLCJmaWx0ZXIiLCJnZXRTcGVjaWFsaXN0cyIsInVzZXJzIiwiQ29tbWVudEFwaSIsImdldCIsImdldFBvc3RzIiwiZm9vdGVyIiwiU2lkZUJsb2NrIiwiVGFnIiwidGFnIiwiYnRuIiwiYWN0aXZlIiwiVGFncyIsImhhbmRsZVNlbGVjdCIsInNlbGVjdGVkSXRlbXMiLCJvYmoiLCJmaW5kIiwiVXNlclZpZXdPbkNvbnRlbnQiLCJ1c2VyX2F2YXRhciIsInVzZXJfYXZhdGFyX3dpdGhfdGltZSIsIndpZHRoIiwiaGVpZ2h0IiwidXNlcl9pbmZvIiwidXNlcl9pbmZvX3dpdGhfdGltZSIsInVzZXJfbmFtZSIsImdldEZ1bGxUaXRsZSIsIm51bSIsIm1haW5QYXJ0IiwibGFzdFBhcnRzIiwibGFzdERpZ2l0IiwicHJlTGFzdERpZ2l0IiwiTWF0aCIsImZsb29yIiwiVmlld3NBbmRDb21tZW50cyIsImNvbW1lbnRzVGl0bGUiLCJ2aWV3c1RpdGxlIiwidmlld3NBbmRDb21tZW50cyIsImNvdW50IiwiQ29tbWVudEljb24iLCJFeWVJY29uIiwiRmFjZWJvb2tJY29uIiwiaG92ZXJDbGFzc05hbWUiLCJzZXRDbGFzc2VzIiwiU2hhcmVJY29uIiwiVGVsZWdyYW1JY29uIiwiVGh1bWJVcEljb24iLCJUd2l0dGVySWNvbiIsIlZrSWNvbiIsIldhcm5pbmdJY29uIiwiV2hhdHNhcHBJY29uIiwiaW5zdGFuY2UiLCJBeGlvcyIsImNyZWF0ZSIsImJhc2VVUkwiLCJ3aXRoQ3JlZGVudGlhbHMiLCJpbnRlcmNlcHRvcnMiLCJyZXF1ZXN0IiwidXNlIiwiY29uZmlnIiwiQWxlcnRDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZUFsZXJ0IiwidXNlQ29udGV4dCIsIk1haW5MYXlvdXQiLCJ0b2dnbGVNZW51T3BlbmVkIiwidXNlQ2FsbGJhY2siLCJwcmVmZXRjaGVkIiwiY3VyTG9jYWxlIiwib3B0aW9ucyIsIm5vZGVOYW1lIiwiaXNNb2RpZmllZEV2ZW50Iiwic2Nyb2xsIiwiYXMiLCJyZXBsYWNlIiwic3VjY2VzcyIsImFyZ3MiLCJleHBlY3RlZCIsImFjdHVhbCIsInJlcXVpcmVkUHJvcHNHdWFyZCIsInJlcXVpcmVkUHJvcHMiLCJwcm9wcyIsImNyZWF0ZVByb3BFcnJvciIsIl8iLCJvcHRpb25hbFByb3BzR3VhcmQiLCJzaGFsbG93IiwicGFzc0hyZWYiLCJwcmVmZXRjaCIsIm9wdGlvbmFsUHJvcHMiLCJ2YWxUeXBlIiwiaGFzV2FybmVkIiwicGF0aG5hbWUiLCJyZXNvbHZlZEFzIiwiY2hpbGQiLCJDaGlsZHJlbiIsImNoaWxkUmVmIiwicm9vdE1hcmdpbiIsInNldFJlZiIsInNldEludGVyc2VjdGlvblJlZiIsInNob3VsZFByZWZldGNoIiwiaXNQcmVmZXRjaGVkIiwiY2hpbGRQcm9wcyIsInJlZiIsImxpbmtDbGlja2VkIiwicHJpb3JpdHkiLCJsb2NhbGVEb21haW4iLCJMaW5rIiwicGF0aCIsIm5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoIiwicHJvY2VzcyIsInJlcXVlc3RJZGxlQ2FsbGJhY2siLCJzZWxmIiwic3RhcnQiLCJzZXRUaW1lb3V0IiwiY2IiLCJkaWRUaW1lb3V0IiwidGltZVJlbWFpbmluZyIsImNhbmNlbElkbGVDYWxsYmFjayIsImNsZWFyVGltZW91dCIsIk1TX01BWF9JRExFX0RFTEFZIiwiZW50cnkiLCJQcm9taXNlIiwicHJvbSIsInJlc29sdmUiLCJyZXNvbHZlciIsImZ1dHVyZSIsImdlbmVyYXRvciIsImNhblByZWZldGNoIiwiaGFzUHJlZmV0Y2giLCJyZXMiLCJBU1NFVF9MT0FEX0VSUk9SIiwiU3ltYm9sIiwic2NyaXB0IiwicmVqZWN0IiwibWFya0Fzc2V0RXJyb3IiLCJzcmMiLCJjYW5jZWxsZWQiLCJvbkJ1aWxkTWFuaWZlc3QiLCJyZXNvbHZlUHJvbWlzZVdpdGhUaW1lb3V0Iiwic2NyaXB0cyIsImFzc2V0UHJlZml4IiwiZW5jb2RlVVJJIiwiY3NzIiwiZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCIsIm1hbmlmZXN0Iiwicm91dGUiLCJhbGxGaWxlcyIsInYiLCJlbnRyeXBvaW50cyIsImxvYWRlZFNjcmlwdHMiLCJzdHlsZVNoZWV0cyIsInJvdXRlcyIsImFwcGVuZFNjcmlwdCIsImZldGNoIiwid2hlbkVudHJ5cG9pbnQiLCJ3aXRoRnV0dXJlIiwib25FbnRyeXBvaW50IiwiZm4iLCJleHBvcnRzIiwiY29tcG9uZW50IiwiZXJyb3IiLCJvbGQiLCJsb2FkUm91dGUiLCJnZXRGaWxlc0ZvclJvdXRlIiwiZW50cnlwb2ludCIsImNuIiwibmF2aWdhdG9yIiwib3V0cHV0IiwicHJlZmV0Y2hWaWFEb20iLCJjcmVhdGVSb3V0ZUxvYWRlciIsInNpbmdsZXRvblJvdXRlciIsInJlYWR5Q2FsbGJhY2tzIiwicmVhZHkiLCJ1cmxQcm9wZXJ0eUZpZWxkcyIsInJvdXRlckV2ZW50cyIsImNvcmVNZXRob2RGaWVsZHMiLCJSb3V0ZXIiLCJmaWVsZCIsImdldFJvdXRlciIsImV2ZW50RmllbGQiLCJfc2luZ2xldG9uUm91dGVyIiwibWVzc2FnZSIsInN0YWNrIiwiUm91dGVyQ29udGV4dCIsImNyZWF0ZVJvdXRlciIsIl9yb3V0ZXIiLCJBcnJheSIsImhhc0ludGVyc2VjdGlvbk9ic2VydmVyIiwiaXNEaXNhYmxlZCIsInVub2JzZXJ2ZSIsIm9ic2VydmUiLCJzZXRWaXNpYmxlIiwiaWRsZUNhbGxiYWNrIiwiY3JlYXRlT2JzZXJ2ZXIiLCJlbGVtZW50cyIsIm9ic2VydmVyIiwib2JzZXJ2ZXJzIiwiZW50cmllcyIsImNhbGxiYWNrIiwiQ29tcG9zZWRDb21wb25lbnQiLCJnZXRJbml0aWFsUHJvcHMiLCJXaXRoUm91dGVyV3JhcHBlciIsInBhdGhuYW1lUGFydHMiLCJsb2NhbGVzIiwiZGV0ZWN0ZWRMb2NhbGUiLCJhbGwiLCJvbiIsIm9mZiIsImVtaXQiLCJoYW5kbGVyIiwiYmFzZVBhdGgiLCJwcmVmaXgiLCJwYXRoTm9RdWVyeUhhc2giLCJxdWVyeUluZGV4IiwiaGFzaEluZGV4IiwiYWRkUGF0aFByZWZpeCIsImxvY2F0aW9uT3JpZ2luIiwicmVzb2x2ZWQiLCJoYXNCYXNlUGF0aCIsImludGVycG9sYXRlZFJvdXRlIiwiZHluYW1pY1JlZ2V4IiwiZHluYW1pY0dyb3VwcyIsImR5bmFtaWNNYXRjaGVzIiwiYXNQYXRobmFtZSIsInBhcmFtcyIsInBhcmFtIiwicmVwbGFjZWQiLCJyZXBlYXQiLCJvcHRpb25hbCIsInNlZ21lbnQiLCJlbmNvZGVVUklDb21wb25lbnQiLCJyZXN1bHQiLCJmaWx0ZXJlZFF1ZXJ5IiwicXVlcnkiLCJiYXNlIiwidXJsQXNTdHJpbmciLCJpc0xvY2FsVVJMIiwicmVzb2x2ZUFzIiwiZmluYWxVcmwiLCJpbnRlcnBvbGF0ZWRBcyIsImludGVycG9sYXRlQXMiLCJoYXNoIiwib21pdFBhcm1zRnJvbVF1ZXJ5IiwicmVzb2x2ZWRIcmVmIiwib3JpZ2luIiwicmVzb2x2ZUhyZWYiLCJocmVmSGFkT3JpZ2luIiwiYXNIYWRPcmlnaW4iLCJzdHJpcE9yaWdpbiIsInByZXBhcmVkVXJsIiwiYWRkQmFzZVBhdGgiLCJwcmVwYXJlZEFzIiwiYXBwbHlCYXNlUGF0aCIsImNsZWFuUGF0aG5hbWUiLCJkZWxCYXNlUGF0aCIsInBhZ2VzIiwicGFnZSIsInBhcnNlZEhyZWYiLCJtYW51YWxTY3JvbGxSZXN0b3JhdGlvbiIsIlNTR19EQVRBX05PVF9GT1VORCIsImNyZWRlbnRpYWxzIiwiYXR0ZW1wdHMiLCJmZXRjaFJldHJ5Iiwibm90Rm91bmQiLCJpc1NlcnZlclJlbmRlciIsImNvbnN0cnVjdG9yIiwiYXNQYXRoIiwiY29tcG9uZW50cyIsInNkYyIsInNkciIsInN1YiIsImNsYyIsInBhZ2VMb2FkZXIiLCJfYnBzIiwiZXZlbnRzIiwiX3dyYXBBcHAiLCJpc1NzciIsImlzRmFsbGJhY2siLCJfaW5GbGlnaHRSb3V0ZSIsIl9zaGFsbG93IiwiZGVmYXVsdExvY2FsZSIsImRvbWFpbkxvY2FsZXMiLCJpc1JlYWR5IiwiaXNQcmV2aWV3IiwiaXNMb2NhbGVEb21haW4iLCJfaWR4Iiwic3RhdGUiLCJpbml0aWFsIiwiX19OX1NTRyIsImluaXRpYWxQcm9wcyIsIl9fTl9TU1AiLCJDb21wb25lbnQiLCJhdXRvRXhwb3J0RHluYW1pYyIsInJlbG9hZCIsImJhY2siLCJwcmVwYXJlVXJsQXMiLCJsb2NhbGVDaGFuZ2UiLCJTVCIsInBlcmZvcm1hbmNlIiwicm91dGVQcm9wcyIsImFkZExvY2FsZSIsImNsZWFuZWRBcyIsImRlbExvY2FsZSIsInBhcnNlZCIsIl9fcmV3cml0ZXMiLCJyZXNvbHZlRHluYW1pY1JvdXRlIiwibWV0aG9kIiwicGFyc2VkQXMiLCJyb3V0ZVJlZ2V4Iiwicm91dGVNYXRjaCIsInNob3VsZEludGVycG9sYXRlIiwibWlzc2luZ1BhcmFtcyIsInJvdXRlSW5mbyIsImRlc3RpbmF0aW9uIiwibm90Rm91bmRSb3V0ZSIsImFwcENvbXAiLCJpc1ZhbGlkU2hhbGxvd1JvdXRlIiwiZm9yY2VkU2Nyb2xsIiwieCIsInkiLCJjaGFuZ2VTdGF0ZSIsIl9fTiIsImJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IiLCJleGlzdGluZ1JvdXRlSW5mbyIsImNhY2hlZFJvdXRlSW5mbyIsInJlcXVpcmUiLCJpc1ZhbGlkRWxlbWVudFR5cGUiLCJkYXRhSHJlZiIsInNldCIsImJlZm9yZVBvcFN0YXRlIiwib25seUFIYXNoQ2hhbmdlIiwibmV3SGFzaCIsIm9sZFVybE5vSGFzaCIsIm9sZEhhc2giLCJzY3JvbGxUb0hhc2giLCJpZEVsIiwibmFtZUVsIiwidXJsSXNOZXciLCJpc1NzZyIsImNhbmNlbCIsImNvbXBvbmVudFJlc3VsdCIsIl9nZXREYXRhIiwiX2dldFN0YXRpY0RhdGEiLCJmZXRjaE5leHREYXRhIiwiX2dldFNlcnZlckRhdGEiLCJBcHBUcmVlIiwiY3R4IiwiYWJvcnRDb21wb25lbnRMb2FkIiwibm90aWZ5Iiwic2xhc2hlZFByb3RvY29scyIsInByb3RvY29sIiwidXJsT2JqIiwiaG9zdCIsImF1dGgiLCJob3N0bmFtZSIsIlN0cmluZyIsInF1ZXJ5c3RyaW5nIiwiVEVTVF9ST1VURSIsImdsb2JhbEJhc2UiLCJyZXNvbHZlZEJhc2UiLCJzZWFyY2hQYXJhbXMiLCJpc05hTiIsInN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0iLCJzZWFyY2hQYXJhbXNMaXN0IiwicmUiLCJkZWNvZGUiLCJkZWNvZGVVUklDb21wb25lbnQiLCJzbHVnTmFtZSIsImciLCJncm91cHMiLCJtIiwic3RyIiwic2VnbWVudHMiLCJub3JtYWxpemVkUm91dGUiLCJncm91cEluZGV4IiwicGFyYW1ldGVyaXplZFJvdXRlIiwicGFyc2VQYXJhbWV0ZXIiLCJwb3MiLCJlc2NhcGVSZWdleCIsInJvdXRlS2V5Q2hhckNvZGUiLCJyb3V0ZUtleUNoYXJMZW5ndGgiLCJnZXRTYWZlUm91dGVLZXkiLCJyb3V0ZUtleSIsImkiLCJyb3V0ZUtleXMiLCJuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZSIsImNsZWFuZWRLZXkiLCJpbnZhbGlkS2V5IiwicGFyc2VJbnQiLCJuYW1lZFJlZ2V4IiwidXNlZCIsInBvcnQiLCJnZXRMb2NhdGlvbk9yaWdpbiIsIkFwcCIsImdldERpc3BsYXlOYW1lIiwicGFnZVByb3BzIiwibG9hZEdldEluaXRpYWxQcm9wcyIsImlzUmVzU2VudCIsInVybE9iamVjdEtleXMiLCJTUCIsIlBvc3RDb250ZXh0IiwiUG9zdCIsInNlcnZlclNpZGVDb21tZW50cyIsIm9wZW5BbGVydCIsInRvVXNlcklkIiwic2F2ZSIsInNldExpa2UiLCJwb3N0SWQiLCJlY2hvIiwibGVhdmUiLCJzdGF0dXMiLCJnZXRTZXJ2ZXJTaWRlUHJvcHMiLCJzaG93UG9zdCIsInJlcSIsImNvb2tpZXMiLCJhdXRoX3Rva2VuIiwicmVzcG9uc2VDb21tZW50cyIsImdldFBvc3RDb21tZW50cyIsImRpcmVjdG9yeSIsImF4aW9zIiwicGFyZW50Q29tbWVudElkIiwicG9zdF9pZCIsInVzZXJfcmVwbHlfaWQiLCJwdXQiLCJzYXZlSW1hZ2UiLCJmb3JtRGF0YSIsIkZvcm1EYXRhIiwiYXBwZW5kIiwic2F2ZVBvc3QiLCJkZXNjcmlwdGlvbiIsImNhdGVnb3J5IiwidG9rZW4iLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsImdldFRoZW1lcyIsInNhdmVCeVVybCIsImFwaVRva2VuIiwiZ2V0U3BlY2lhbGlzdENhdGVnb3JpZXMiLCJsb2dpbiIsImVtYWlsIiwicGFzc3dvcmQiLCJtYXhSZWRpcmVjdHMiLCJnZXRNZSIsImdldE5vdGlmaWNhdGlvbnMiLCJzaG93Iiwia2V5cyIsImxpbmtzIiwibCIsInBhdGNoIiwiZ2V0Q29va2llIiwiRWNobyIsImJyb2FkY2FzdGVyIiwiY2x1c3RlciIsInVzZVRoZW1lIiwidXNlTWVkaWFRdWVyeSIsImJyZWFrcG9pbnRzIiwiZG93biIsImlzU00iLCJpc01EIiwiaXNMRyJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7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Ozs7QUNBQSx1RDs7Ozs7Ozs7Ozs7QUNBQSxxRDs7Ozs7Ozs7Ozs7QUNBQSxnRTs7Ozs7Ozs7Ozs7QUNBQSx1RDs7Ozs7Ozs7Ozs7QUNBQSxxRDs7Ozs7Ozs7Ozs7QUNBQSw0RDs7Ozs7Ozs7Ozs7QUNBQSxtRDs7Ozs7Ozs7Ozs7QUNBQSx1RDs7Ozs7Ozs7Ozs7QUNBQSx1RDs7Ozs7Ozs7Ozs7QUNBQSxvRDs7Ozs7Ozs7Ozs7QUNBQSxxRDs7Ozs7Ozs7Ozs7QUNBQSx5RDs7Ozs7Ozs7Ozs7QUNBQSxxRDs7Ozs7Ozs7Ozs7QUNBQSxpRDs7Ozs7Ozs7Ozs7QUNBQSxxRDs7Ozs7Ozs7Ozs7QUNBQSxnRDs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxpQzs7Ozs7Ozs7Ozs7QUNBQSxxQzs7Ozs7Ozs7Ozs7QUNBQSw0Qzs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxrRCIsImZpbGUiOiJwYWdlcy9wb3N0L1tzbHVnXS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvcG9zdC9bc2x1Z10udHN4XCIpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlLmpzXCIpOyIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbW1lbnRcIjogXCJDb21tZW50QmxvY2tfY29tbWVudF9fMWtZTl9cIixcblx0XCJmaWVsZFJvb3RcIjogXCJDb21tZW50QmxvY2tfZmllbGRSb290X18yUDdnQ1wiLFxuXHRcImFkZEJ1dHRvblwiOiBcIkNvbW1lbnRCbG9ja19hZGRCdXR0b25fXzN2cDNRXCJcbn07XG4iLCJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9Db21tZW50QmxvY2subW9kdWxlLnNjc3MnO1xyXG5pbXBvcnQgSW5wdXQgZnJvbSBcIkBtdWkvbWF0ZXJpYWwvSW5wdXRcIjtcclxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiQG11aS9tYXRlcmlhbC9CdXR0b25cIjtcclxuaW1wb3J0IHtDb21tZW50LCBVc2VyfSBmcm9tIFwiLi4vLi4vaW50ZXJmYWNlc1wiO1xyXG5cclxudHlwZSBQcm9wcyA9IHtcclxuICAgIG9uQWRkQ29tbWVudDogKGRhdGE6IHN0cmluZywgdXNlcklkPzogbnVtYmVyLCBwYXJlbnRDb21tZW50SWQ/OiBudW1iZXIsIGNvbW1lbnRJZD86IG51bWJlcikgPT4gdm9pZDtcclxuICAgIHRvVXNlcj86IFVzZXI7XHJcbiAgICBwYXJlbnRDb21tZW50PzogQ29tbWVudDtcclxuICAgIGNvbW1lbnQ/OiBDb21tZW50O1xyXG4gICAgb25DbG9zZUlucHV0PzogKCkgPT4gdm9pZFxyXG59XHJcbmV4cG9ydCBjb25zdCBBZGRDb21tZW50QmxvY2s6IFJlYWN0LkZDPFByb3BzPiA9ICh7IG9uQWRkQ29tbWVudCwgdG9Vc2VyLCBwYXJlbnRDb21tZW50LCBjb21tZW50LCBvbkNsb3NlSW5wdXQgfSkgPT4ge1xyXG4gICAgY29uc3QgW2lzQ2xpY2tlZCwgc2V0SXNDbGlja2VkXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gICAgY29uc3QgW3RleHQsIHNldFRleHRdID0gdXNlU3RhdGUoY29tbWVudD8uaWQgPyBjb21tZW50LnRleHQgOiB0b1VzZXIgPyBgQCR7dG9Vc2VyLm5hbWV9LGAgOiAnJyk7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlQWRkQ29tbWVudCA9ICgpID0+IHtcclxuICAgICAgICBvbkFkZENvbW1lbnQodGV4dCwgdG9Vc2VyPy5pZCwgcGFyZW50Q29tbWVudD8ucGFyZW50X2lkIHx8IHBhcmVudENvbW1lbnQ/LmlkLCBjb21tZW50Py5pZClcclxuICAgICAgICBvbkNsb3NlSW5wdXQgJiYgb25DbG9zZUlucHV0KClcclxuICAgICAgICBzZXRUZXh0KCcnKVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb21tZW50fT5cclxuICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgICBvbkZvY3VzPXsoKSA9PiBzZXRJc0NsaWNrZWQodHJ1ZSl9XHJcbiAgICAgICAgICAgICAgICBjbGFzc2VzPXt7cm9vdDogc3R5bGVzLmZpZWxkUm9vdH19IG11bHRpbGluZSBwbGFjZWhvbGRlcj17J9Cd0LDQv9C40YHQsNGC0Ywg0LrQvtC80LzQtdC90YLQsNGA0LjQuS4uLid9XHJcbiAgICAgICAgICAgICAgICBmdWxsV2lkdGhcclxuICAgICAgICAgICAgICAgIG1pblJvd3M9eyFpc0NsaWNrZWQgPyAxIDogNX1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHNldFRleHQoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e3RleHR9XHJcbiAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICB7aXNDbGlja2VkICYmIDxCdXR0b24gb25DbGljaz17aGFuZGxlQWRkQ29tbWVudH0gY29sb3I9eydzZWNvbmRhcnknfSBjbGFzc05hbWU9e3N0eWxlcy5hZGRCdXR0b259PtCe0YLQv9GA0LDQstC40YLRjDwvQnV0dG9uPn1cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJtb2RhbFwiOiBcIkF1dGhEaWFsb2dfbW9kYWxfXzd2M1FMXCIsXG5cdFwiY29udGVudFwiOiBcIkF1dGhEaWFsb2dfY29udGVudF9fMnJJckxcIixcblx0XCJ0aXRsZVwiOiBcIkF1dGhEaWFsb2dfdGl0bGVfXzJaSUI4XCIsXG5cdFwic3ViVGl0bGVcIjogXCJBdXRoRGlhbG9nX3N1YlRpdGxlX19DTDdyMlwiLFxuXHRcInRleHRcIjogXCJBdXRoRGlhbG9nX3RleHRfXzFCNXNkXCIsXG5cdFwibGlua1wiOiBcIkF1dGhEaWFsb2dfbGlua19fMnZHeGpcIixcblx0XCJmdWxsV2lkdGhcIjogXCJBdXRoRGlhbG9nX2Z1bGxXaWR0aF9fMWFSRlpcIixcblx0XCJzY3JvbGxQYXBlclwiOiBcIkF1dGhEaWFsb2dfc2Nyb2xsUGFwZXJfXzI2Zk5IXCIsXG5cdFwicGFwZXJTY3JvbGxQYXBlclwiOiBcIkF1dGhEaWFsb2dfcGFwZXJTY3JvbGxQYXBlcl9fMi1GenZcIlxufTtcbiIsImltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJztcclxuaW1wb3J0IERpYWxvZyBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2cnO1xyXG5pbXBvcnQgRGlhbG9nQ29udGVudCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dDb250ZW50JztcclxuaW1wb3J0IERpYWxvZ1RpdGxlIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0RpYWxvZ1RpdGxlJztcclxuaW1wb3J0IENsb3NlSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvQ2xvc2UnO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgSWNvbkJ1dHRvbiBmcm9tICdAbXVpL21hdGVyaWFsL0ljb25CdXR0b24nO1xyXG5cclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0F1dGhEaWFsb2cubW9kdWxlLnNjc3MnO1xyXG5pbXBvcnQgeyBEaWFsb2dDb250ZW50VGV4dCwgVHlwb2dyYXBoeSB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuaW1wb3J0IHsgQVBJX1VSTCB9IGZyb20gJy4uLy4uL2NvcmUvYXhpb3MnO1xyXG5cclxuaW50ZXJmYWNlIE1vZGFsUHJvcHMge1xyXG4gIG9wZW4/OiBib29sZWFuO1xyXG4gIHNpemU/OiAneHMnIHwgJ3NtJyB8ICdtZCcgfCAnbGcnIHwgJ3hsJyB8IGZhbHNlO1xyXG4gIG9uQ2xvc2U6ICgpID0+IHZvaWQ7XHJcbiAgY2xhc3NOYW1lPzogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgQXV0aERpYWxvZzogUmVhY3QuRkM8TW9kYWxQcm9wcz4gPSAoe1xyXG4gIGNoaWxkcmVuLFxyXG4gIG9wZW4gPSBmYWxzZSxcclxuICBzaXplID0gJ3hzJyxcclxuICBvbkNsb3NlLFxyXG4gIGNsYXNzTmFtZSxcclxufSk6IFJlYWN0LlJlYWN0RWxlbWVudCA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxEaWFsb2dcclxuICAgICAgbWF4V2lkdGg9eyd4cyd9XHJcbiAgICAgIG9wZW49e29wZW59XHJcbiAgICAgIG9uQ2xvc2U9e29uQ2xvc2V9XHJcbiAgICAgIGZ1bGxXaWR0aFxyXG4gICAgICBQYXBlclByb3BzPXt7XHJcbiAgICAgICAgY2xhc3NOYW1lOiBzdHlsZXMubW9kYWwsXHJcbiAgICAgIH19XHJcbiAgICA+XHJcbiAgICAgIDxJY29uQnV0dG9uXHJcbiAgICAgICAgYXJpYS1sYWJlbD1cImNsb3NlXCJcclxuICAgICAgICBvbkNsaWNrPXtvbkNsb3NlfVxyXG4gICAgICAgIHN4PXt7XHJcbiAgICAgICAgICBjb2xvcjogKHRoZW1lKSA9PiB0aGVtZS5wYWxldHRlLmdyZXlbNTAwXSxcclxuICAgICAgICB9fVxyXG4gICAgICAgIHN0eWxlPXt7IGFsaWduU2VsZjogJ2ZsZXgtZW5kJywgbWFyZ2luVG9wOiAyMiwgbWFyZ2luUmlnaHQ6IDIwLCBwYWRkaW5nOiAwIH19XHJcbiAgICAgID5cclxuICAgICAgICA8Q2xvc2VJY29uIHN0eWxlPXt7IGZvbnRTaXplOiAyOCB9fSAvPlxyXG4gICAgICA8L0ljb25CdXR0b24+XHJcblxyXG4gICAgICA8RGlhbG9nQ29udGVudCBzdHlsZT17eyBwYWRkaW5nVG9wOiAxNCwgcGFkZGluZ0JvdHRvbTogNTAgfX0+XHJcbiAgICAgICAgPERpYWxvZ0NvbnRlbnRUZXh0IGNsYXNzTmFtZT1cIm1iLTBcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGVudH0+XHJcbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT4g0JTQvtCx0YDQviDQv9C+0LbQsNC70L7QstCw0YLRjCA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17c3R5bGVzLnN1YlRpdGxlfT4g0KDQsNC00Ysg0LLQuNC00LXRgtGMINCy0LDRgSDRgdC90L7QstCwISA8L1R5cG9ncmFwaHk+XHJcblxyXG4gICAgICAgICAgICA8TGluayBocmVmPXtgJHtBUElfVVJMfS9zb2NpYWwvdmtgfT5cclxuICAgICAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgICAgIDxCdXR0b24gZnVsbFdpZHRoPXt0cnVlfSB2YXJpYW50PXsnb3V0bGluZWQnfT5cclxuICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvdmsucG5nXCIgYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgICAg0JLQvtC50YLQuCDRh9C10YDQtdC3IFZLXHJcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj17YCR7QVBJX1VSTH0vc29jaWFsL2dvb2dsZWB9PlxyXG4gICAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBmdWxsV2lkdGg9e3RydWV9IHZhcmlhbnQ9eydvdXRsaW5lZCd9PlxyXG4gICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9nb29nbGUucG5nXCIgYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgICAg0JLQvtC50YLQuCDRh9C10YDQtdC3IEdvb2dsZVxyXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXJcIiBzdHlsZT17eyBtYXJnaW5Ub3A6IDQwIH19PlxyXG4gICAgICAgICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e3N0eWxlcy50ZXh0fT5cclxuICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgINC40LvQuCA8YSBjbGFzc05hbWU9e3N0eWxlcy5saW5rfT7RgdC+0LfQtNCw0YLRjCDQsNC60LrQsNGD0L3RgjwvYT5cclxuICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvRGlhbG9nQ29udGVudFRleHQ+XHJcbiAgICAgIDwvRGlhbG9nQ29udGVudD5cclxuICAgIDwvRGlhbG9nPlxyXG4gICk7XHJcbn07XHJcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNoZWNrZWRUaXRsZVwiOiBcIkF2YWlsYWJsZUZvcldvcmtfY2hlY2tlZFRpdGxlX18xYnloMlwiLFxuXHRcInVuY2hlY2tlZFRpdGxlXCI6IFwiQXZhaWxhYmxlRm9yV29ya191bmNoZWNrZWRUaXRsZV9fM2xXQUtcIixcblx0XCJjaGVja2VkXCI6IFwiQXZhaWxhYmxlRm9yV29ya19jaGVja2VkX19NcmloUVwiLFxuXHRcInVuY2hlY2tlZFwiOiBcIkF2YWlsYWJsZUZvcldvcmtfdW5jaGVja2VkX18zVkR1Y1wiXG59O1xuIiwiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCc7XHJcblxyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vQXZhaWxhYmxlRm9yV29yay5tb2R1bGUuc2Nzcyc7XHJcbmltcG9ydCB7IENoZWNrYm94IH0gZnJvbSAnLi4vQ2hlY2tib3gnO1xyXG5cclxuaW50ZXJmYWNlIEF2YWlsYWJsZUZvcldvcmtQcm9wcyB7XHJcbiAgY2hlY2tlZD86IGJvb2xlYW47XHJcbiAgb25DaGFuZ2U6IChldmVudDogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHZvaWQ7XHJcbiAgc2V0Q2hlY2tlZDogKHZhbHVlOiBib29sZWFuKSA9PiB2b2lkO1xyXG4gIGlzTG9hZGluZzogYm9vbGVhbjtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEF2YWlsYWJsZUZvcldvcms6IFJlYWN0LkZDPEF2YWlsYWJsZUZvcldvcmtQcm9wcz4gPSAoeyBjaGVja2VkLCBvbkNoYW5nZSwgc2V0Q2hlY2tlZCwgaXNMb2FkaW5nIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2Nsc3goJ2QtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyJyl9PlxyXG4gICAgICA8c3BhblxyXG4gICAgICAgIGNsYXNzTmFtZT17Y2xzeChzdHlsZXMudW5jaGVja2VkVGl0bGUsIGNoZWNrZWQgfHwgaXNMb2FkaW5nID8gc3R5bGVzLnVuY2hlY2tlZCA6IHN0eWxlcy5jaGVja2VkKX1cclxuICAgICAgICBvbkNsaWNrPXsoKSA9PiAhaXNMb2FkaW5nICYmIHNldENoZWNrZWQoZmFsc2UpfVxyXG4gICAgICA+XHJcbiAgICAgICAg0J3QtdC00L7RgdGC0YPQv9C10L1cclxuICAgICAgPC9zcGFuPlxyXG4gICAgICA8Q2hlY2tib3ggY2hlY2tlZD17Y2hlY2tlZH0gb25DaGFuZ2U9e29uQ2hhbmdlfSBkaXNhYmxlZD17aXNMb2FkaW5nfSAvPlxyXG4gICAgICA8c3BhblxyXG4gICAgICAgIGNsYXNzTmFtZT17Y2xzeChzdHlsZXMuY2hlY2tlZFRpdGxlLCBjaGVja2VkICYmICFpc0xvYWRpbmcgPyBzdHlsZXMuY2hlY2tlZCA6IHN0eWxlcy51bmNoZWNrZWQpfVxyXG4gICAgICAgIG9uQ2xpY2s9eygpID0+ICFpc0xvYWRpbmcgJiYgc2V0Q2hlY2tlZCh0cnVlKX1cclxuICAgICAgPlxyXG4gICAgICAgINCU0L7RgdGC0YPQv9C10L0g0LTQu9GPINGA0LDQsdC+0YLRi1xyXG4gICAgICA8L3NwYW4+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJidXR0b25cIjogXCJCdXR0b25fYnV0dG9uX18zLXU0UFwiLFxuXHRcInJvb3RcIjogXCJCdXR0b25fcm9vdF9fMkdDNTJcIixcblx0XCJjb250YWluZWRcIjogXCJCdXR0b25fY29udGFpbmVkX18xU1AyRVwiLFxuXHRcImNvbnRhaW5lZFByaW1hcnlcIjogXCJCdXR0b25fY29udGFpbmVkUHJpbWFyeV9fMVFPbW9cIixcblx0XCJjb250YWluZWRTZWNvbmRhcnlcIjogXCJCdXR0b25fY29udGFpbmVkU2Vjb25kYXJ5X18xY0RWMVwiLFxuXHRcIm91dGxpbmVkXCI6IFwiQnV0dG9uX291dGxpbmVkX18zajluWlwiLFxuXHRcIm91dGxpbmVkUHJpbWFyeVwiOiBcIkJ1dHRvbl9vdXRsaW5lZFByaW1hcnlfX0Ywa19LXCIsXG5cdFwib3V0bGluZWRTZWNvbmRhcnlcIjogXCJCdXR0b25fb3V0bGluZWRTZWNvbmRhcnlfXzNTakRiXCIsXG5cdFwidGV4dFByaW1hcnlcIjogXCJCdXR0b25fdGV4dFByaW1hcnlfX0RNMVRkXCIsXG5cdFwidGV4dFNlY29uZGFyeVwiOiBcIkJ1dHRvbl90ZXh0U2Vjb25kYXJ5X182WXRKQlwiXG59O1xuIiwiaW1wb3J0IFJlYWN0LCB7IFJlYWN0Tm9kZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQnV0dG9uIGFzIEJ1dHRvbkJhc2UgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9CdXR0b24ubW9kdWxlLnNjc3MnO1xyXG5cclxuaW50ZXJmYWNlIEJ1dHRvblByb3BzIHtcclxuICBjaGlsZHJlbjogUmVhY3ROb2RlO1xyXG4gIHZhcmlhbnQ/OiAndGV4dCcgfCAnb3V0bGluZWQnIHwgJ2NvbnRhaW5lZCc7XHJcbiAgY29sb3I/OiAnaW5oZXJpdCcgfCAncHJpbWFyeScgfCAnc2Vjb25kYXJ5JyB8ICdkZWZhdWx0JztcclxuICBmdWxsV2lkdGg/OiBib29sZWFuO1xyXG4gIHN0YXJ0SWNvbj86IFJlYWN0Tm9kZTtcclxuICBlbmRJY29uPzogUmVhY3ROb2RlO1xyXG4gIGNsYXNzTmFtZT86IHN0cmluZztcclxuICBvbkNsaWNrPzogKCkgPT4gdm9pZDtcclxuICBkaXNhYmxlZD86IGJvb2xlYW47XHJcbiAgdHlwZT86ICdidXR0b24nIHwgJ3N1Ym1pdCc7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBCdXR0b246IFJlYWN0LkZDPEJ1dHRvblByb3BzPiA9IChcclxuICAgIHtcclxuICAgICAgICBjbGFzc05hbWUsXHJcbiAgICAgICAgY2hpbGRyZW4sXHJcbiAgICAgICAgdmFyaWFudCxcclxuICAgICAgICBjb2xvcixcclxuICAgICAgICBzdGFydEljb24sXHJcbiAgICAgICAgZW5kSWNvbixcclxuICAgICAgICBvbkNsaWNrLFxyXG4gICAgICAgIGZ1bGxXaWR0aCxcclxuICAgICAgICBkaXNhYmxlZCxcclxuICAgICAgICB0eXBlXHJcbiAgICB9XHJcbikgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbn0+XHJcbiAgICAgICAgICAgIDxCdXR0b25CYXNlXHJcbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZX1cclxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9e3ZhcmlhbnR9XHJcbiAgICAgICAgICAgICAgICBjb2xvcj17Y29sb3J9XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtvbkNsaWNrfVxyXG4gICAgICAgICAgICAgICAgY2xhc3Nlcz17e1xyXG4gICAgICAgICAgICAgICAgICAgIHJvb3Q6IHN0eWxlcy5yb290LFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lZDogc3R5bGVzLmNvbnRhaW5lZCxcclxuICAgICAgICAgICAgICAgICAgICBvdXRsaW5lZDogc3R5bGVzLm91dGxpbmVkLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lZFByaW1hcnk6IHN0eWxlcy5jb250YWluZWRQcmltYXJ5LFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lZFNlY29uZGFyeTogc3R5bGVzLmNvbnRhaW5lZFNlY29uZGFyeSxcclxuICAgICAgICAgICAgICAgICAgICBvdXRsaW5lZFByaW1hcnk6IHN0eWxlcy5vdXRsaW5lZFByaW1hcnksXHJcbiAgICAgICAgICAgICAgICAgICAgb3V0bGluZWRTZWNvbmRhcnk6IHN0eWxlcy5vdXRsaW5lZFNlY29uZGFyeSxcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0UHJpbWFyeTogc3R5bGVzLnRleHRQcmltYXJ5LFxyXG4gICAgICAgICAgICAgICAgICAgIHRleHRTZWNvbmRhcnk6IHN0eWxlcy50ZXh0U2Vjb25kYXJ5LFxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIHN0YXJ0SWNvbj17c3RhcnRJY29ufVxyXG4gICAgICAgICAgICAgICAgZW5kSWNvbj17ZW5kSWNvbn1cclxuICAgICAgICAgICAgICAgIGZ1bGxXaWR0aD17ZnVsbFdpZHRoIHx8IGZhbHNlfVxyXG4gICAgICAgICAgICAgICAgdHlwZT17dHlwZX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgICAgICA8L0J1dHRvbkJhc2U+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjaGVja2JveFwiOiBcIkNoZWNrYm94X2NoZWNrYm94X18zcHdNNlwiLFxuXHRcInJvb3RcIjogXCJDaGVja2JveF9yb290X18yblBGOFwiLFxuXHRcInN3aXRjaEJhc2VcIjogXCJDaGVja2JveF9zd2l0Y2hCYXNlX18xbG14U1wiLFxuXHRcImNoZWNrZWRcIjogXCJDaGVja2JveF9jaGVja2VkX18xUDFvaFwiLFxuXHRcInRyYWNrXCI6IFwiQ2hlY2tib3hfdHJhY2tfXzNLbGVEXCIsXG5cdFwidGh1bWJcIjogXCJDaGVja2JveF90aHVtYl9fMTgwNWxcIlxufTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnO1xyXG5pbXBvcnQgeyBTd2l0Y2ggfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9DaGVja2JveC5tb2R1bGUuc2Nzcyc7XHJcblxyXG5pbnRlcmZhY2UgQ2hlY2tib3hQcm9wcyB7XHJcbiAgY2hlY2tlZDogYm9vbGVhbjtcclxuICBvbkNoYW5nZTogKGV2ZW50OiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4gdm9pZDtcclxuICBkaXNhYmxlZD86IGJvb2xlYW47XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBDaGVja2JveDogUmVhY3QuRkM8Q2hlY2tib3hQcm9wcz4gPSAoeyBjaGVja2VkLCBvbkNoYW5nZSwgZGlzYWJsZWQgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xzeChzdHlsZXMuY2hlY2tib3gsICdkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlcicpfT5cclxuICAgICAgPFN3aXRjaFxyXG4gICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnJvb3R9XHJcbiAgICAgICAgY2xhc3Nlcz17e1xyXG4gICAgICAgICAgcm9vdDogc3R5bGVzLnJvb3QsXHJcbiAgICAgICAgICBzd2l0Y2hCYXNlOiBzdHlsZXMuc3dpdGNoQmFzZSxcclxuICAgICAgICAgIHRodW1iOiBzdHlsZXMudGh1bWIsXHJcbiAgICAgICAgICB0cmFjazogc3R5bGVzLnRyYWNrLFxyXG4gICAgICAgICAgY2hlY2tlZDogc3R5bGVzLmNoZWNrZWQsXHJcbiAgICAgICAgfX1cclxuICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XHJcbiAgICAgICAgY2hlY2tlZD17Y2hlY2tlZH1cclxuICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2V9XHJcbiAgICAgIC8+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7UG9zdENvbW1lbnR9IGZyb20gXCIuLi9Qb3N0Q29tbWVudFwiO1xyXG5pbXBvcnQge0NvbW1lbnR9IGZyb20gXCIuLi8uLi9pbnRlcmZhY2VzXCI7XHJcbmltcG9ydCB7dXNlU2VsZWN0b3J9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQge3NlbGVjdFVzZXJTdGF0ZX0gZnJvbSBcIi4uLy4uL3JlZHV4L3VzZXIvdXNlci5zZWxlY3RvclwiO1xyXG5cclxudHlwZSBQcm9wcyA9IHtcclxuICAgIGNvbW1lbnRzOiBDb21tZW50W107XHJcbiAgICBvblJlcGx5Q29tbWVudDogKHRleHQ6IHN0cmluZywgdXNlcklkOiBudW1iZXIsIHBhcmVudElkOiBudW1iZXIpID0+IHZvaWQ7XHJcbiAgICBvblNldExpa2U6IChjb21tZW50SWQ6IG51bWJlciwgbGlrZTogdW5rbm93bikgPT4gdm9pZFxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgQ29tbWVudExpc3QgPSAoe2NvbW1lbnRzLCBvblJlcGx5Q29tbWVudCwgb25TZXRMaWtlfTogUHJvcHMpID0+IHtcclxuICAgIGNvbnN0IHVzZXIgPSB1c2VTZWxlY3RvcihzZWxlY3RVc2VyU3RhdGUpWydkYXRhJ107XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIHtjb21tZW50cy5tYXAoY29tbWVudCA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtjb21tZW50LmlkfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFBvc3RDb21tZW50IG9uUmVwbHlDb21tZW50PXtvblJlcGx5Q29tbWVudH0gY29tbWVudD17Y29tbWVudH0gb25TZXRMaWtlPXtvblNldExpa2V9IGlzTXlDb21tZW50PXtjb21tZW50LnVzZXIuaWQgPT09IHVzZXI/LmlkfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtjb21tZW50LmNvbW1lbnRzLm1hcChjaGlsZHJlbkNvbW1lbnQgPT4gPFBvc3RDb21tZW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblNldExpa2U9e29uU2V0TGlrZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17Y2hpbGRyZW5Db21tZW50LmlkfSBpc0NoaWxkcmVuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21tZW50PXtjaGlsZHJlbkNvbW1lbnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblJlcGx5Q29tbWVudD17b25SZXBseUNvbW1lbnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc015Q29tbWVudD17Y2hpbGRyZW5Db21tZW50LnVzZXIuaWQgPT09IHVzZXI/LmlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPil9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH0pfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcInJvb3RcIjogXCJEcm9wZG93bl9yb290X18zV0M3cFwiLFxuXHRcInBvcHBlclwiOiBcIkRyb3Bkb3duX3BvcHBlcl9fMy1aR2pcIixcblx0XCJwYXBlclwiOiBcIkRyb3Bkb3duX3BhcGVyX18ySUZFV1wiXG59O1xuIiwiaW1wb3J0IENsaWNrQXdheUxpc3RlbmVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NsaWNrQXdheUxpc3RlbmVyJztcclxuaW1wb3J0IEdyb3cgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvR3Jvdyc7XHJcbmltcG9ydCBNZW51TGlzdCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9NZW51TGlzdCc7XHJcbmltcG9ydCBQYXBlciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9QYXBlcic7XHJcbmltcG9ydCBQb3BwZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvUG9wcGVyJztcclxuaW1wb3J0IHsgUG9wcGVyUGxhY2VtZW50VHlwZSB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1BvcHBlci9Qb3BwZXInO1xyXG5pbXBvcnQgY2xzeCBmcm9tICdjbHN4JztcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9Ecm9wZG93bi5tb2R1bGUuc2Nzcyc7XHJcblxyXG5pbnRlcmZhY2UgRHJvcGRvd25Qcm9wcyB7XHJcbiAgY2xhc3Nlcz86IHtcclxuICAgIHBhcGVyPzogc3RyaW5nO1xyXG4gICAgcG9wcGVyPzogc3RyaW5nO1xyXG4gICAgcm9vdD86IHN0cmluZztcclxuICB9O1xyXG4gIG92ZXJsYXk6IFJlYWN0LlJlYWN0RWxlbWVudDtcclxuICBwbGFjZW1lbnQ/OiBQb3BwZXJQbGFjZW1lbnRUeXBlO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgRHJvcGRvd246IFJlYWN0LkZDPERyb3Bkb3duUHJvcHM+ID0gKHtcclxuICBjaGlsZHJlbixcclxuICBjbGFzc2VzLFxyXG4gIG92ZXJsYXksXHJcbiAgcGxhY2VtZW50ID0gJ2JvdHRvbS1lbmQnLFxyXG59KTogUmVhY3QuUmVhY3RFbGVtZW50ID0+IHtcclxuICBjb25zdCBbb3Blbiwgc2V0T3Blbl0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgYW5jaG9yUmVmID0gUmVhY3QudXNlUmVmPEhUTUxEaXZFbGVtZW50PihudWxsKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlVG9nZ2xlID0gKCk6IHZvaWQgPT4ge1xyXG4gICAgc2V0T3BlbigocHJldk9wZW4pID0+ICFwcmV2T3Blbik7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2xvc2UgPSAoZXZlbnQ6IFJlYWN0Lk1vdXNlRXZlbnQ8RXZlbnRUYXJnZXQ+KTogdm9pZCA9PiB7XHJcbiAgICBpZiAoYW5jaG9yUmVmLmN1cnJlbnQgJiYgYW5jaG9yUmVmLmN1cnJlbnQuY29udGFpbnMoZXZlbnQudGFyZ2V0IGFzIEhUTUxFbGVtZW50KSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgc2V0T3BlbihmYWxzZSk7XHJcbiAgfTtcclxuXHJcbiAgZnVuY3Rpb24gaGFuZGxlTGlzdEtleURvd24oZXZlbnQ6IFJlYWN0LktleWJvYXJkRXZlbnQpOiB2b2lkIHtcclxuICAgIGlmIChldmVudC5rZXkgPT09ICdUYWInKSB7XHJcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIHNldE9wZW4oZmFsc2UpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxkaXZcclxuICAgICAgICByZWY9e2FuY2hvclJlZn1cclxuICAgICAgICBvbkNsaWNrPXtoYW5kbGVUb2dnbGV9XHJcbiAgICAgICAgdGFiSW5kZXg9ezB9XHJcbiAgICAgICAgb25LZXlEb3duPXtoYW5kbGVUb2dnbGV9XHJcbiAgICAgICAgcm9sZT1cImJ1dHRvblwiXHJcbiAgICAgICAgYXJpYS1wcmVzc2VkPVwiZmFsc2VcIlxyXG4gICAgICAgIGNsYXNzTmFtZT17Y2xzeChzdHlsZXMucm9vdCl9XHJcbiAgICAgID5cclxuICAgICAgICB7b3ZlcmxheX1cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxQb3BwZXJcclxuICAgICAgICBvcGVuPXtvcGVufVxyXG4gICAgICAgIGFuY2hvckVsPXthbmNob3JSZWYuY3VycmVudH1cclxuICAgICAgICBjbGFzc05hbWU9e2Nsc3goc3R5bGVzLnBvcHBlciwgY2xhc3Nlcz8ucG9wcGVyKX1cclxuICAgICAgICByb2xlPXt1bmRlZmluZWR9XHJcbiAgICAgICAgdHJhbnNpdGlvblxyXG4gICAgICAgIGRpc2FibGVQb3J0YWxcclxuICAgICAgICBwbGFjZW1lbnQ9e3BsYWNlbWVudH1cclxuICAgICAgPlxyXG4gICAgICAgIHsoeyBUcmFuc2l0aW9uUHJvcHMgfSk6IFJlYWN0LlJlYWN0RWxlbWVudCA9PiAoXHJcbiAgICAgICAgICA8R3JvdyB7Li4uVHJhbnNpdGlvblByb3BzfSBzdHlsZT17eyB0cmFuc2Zvcm1PcmlnaW46ICdjZW50ZXIgdG9wJyB9fT5cclxuICAgICAgICAgICAgPFBhcGVyIGVsZXZhdGlvbj17MH0gY2xhc3NOYW1lPXtjbHN4KHN0eWxlcy5wYXBlciwgY2xhc3Nlcz8ucGFwZXIpfT5cclxuICAgICAgICAgICAgICA8Q2xpY2tBd2F5TGlzdGVuZXIgb25DbGlja0F3YXk9e2hhbmRsZUNsb3NlfT5cclxuICAgICAgICAgICAgICAgIDxNZW51TGlzdCBhdXRvRm9jdXNJdGVtPXtvcGVufSBpZD1cIm1lbnUtbGlzdC1ncm93XCIgb25LZXlEb3duPXtoYW5kbGVMaXN0S2V5RG93bn0gb25DbGljaz17aGFuZGxlQ2xvc2V9PlxyXG4gICAgICAgICAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgICAgICAgICA8L01lbnVMaXN0PlxyXG4gICAgICAgICAgICAgIDwvQ2xpY2tBd2F5TGlzdGVuZXI+XHJcbiAgICAgICAgICAgIDwvUGFwZXI+XHJcbiAgICAgICAgICA8L0dyb3c+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9Qb3BwZXI+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJwb3N0V3JhcHBlclwiOiBcIlBvc3RfcG9zdFdyYXBwZXJfXzNDZFFQXCIsXG5cdFwicG9zdFwiOiBcIlBvc3RfcG9zdF9fTllIMDNcIixcblx0XCJwb3N0SW5mb1wiOiBcIlBvc3RfcG9zdEluZm9fXzFKbkpLXCIsXG5cdFwicG9zdEhlYWRlclwiOiBcIlBvc3RfcG9zdEhlYWRlcl9fM0lLWVhcIixcblx0XCJwb3N0U2hhcmVcIjogXCJQb3N0X3Bvc3RTaGFyZV9fbm5sTDRcIixcblx0XCJwb3N0U2hhcmVJY29uXCI6IFwiUG9zdF9wb3N0U2hhcmVJY29uX18zaHNjQVwiLFxuXHRcInBvc3RTaGFyZVBvcHVwXCI6IFwiUG9zdF9wb3N0U2hhcmVQb3B1cF9fMUpIallcIixcblx0XCJwb3N0U2hhcmVTb2NpYWxcIjogXCJQb3N0X3Bvc3RTaGFyZVNvY2lhbF9fMWdiTV9cIixcblx0XCJwb3N0U2hhcmVTb2NpYWxJY29uXCI6IFwiUG9zdF9wb3N0U2hhcmVTb2NpYWxJY29uX18xZTgyclwiLFxuXHRcInBvc3RGb290ZXJcIjogXCJQb3N0X3Bvc3RGb290ZXJfXzJtMGZFXCIsXG5cdFwicG9zdEZvb3Rlckljb25zXCI6IFwiUG9zdF9wb3N0Rm9vdGVySWNvbnNfXzJxWTMwXCIsXG5cdFwicG9zdEZvb3Rlckljb25cIjogXCJQb3N0X3Bvc3RGb290ZXJJY29uX18yNC0yV1wiLFxuXHRcInBvc3RGb290ZXJJY29uSG92ZXJcIjogXCJQb3N0X3Bvc3RGb290ZXJJY29uSG92ZXJfXzJBXzlWXCIsXG5cdFwicG9zdEZvb3RlckNvbXBsYWluXCI6IFwiUG9zdF9wb3N0Rm9vdGVyQ29tcGxhaW5fXzMzRWhNXCIsXG5cdFwicG9zdEZvb3RlckNvbXBsYWluSWNvblwiOiBcIlBvc3RfcG9zdEZvb3RlckNvbXBsYWluSWNvbl9fMzRuS01cIixcblx0XCJoZWFkZXJcIjogXCJQb3N0X2hlYWRlcl9fM1ZCOEhcIixcblx0XCJwYXJhZ3JhcGhcIjogXCJQb3N0X3BhcmFncmFwaF9fMkNYaDdcIixcblx0XCJsaXN0XCI6IFwiUG9zdF9saXN0X18xVTdWTlwiLFxuXHRcImxpc3RJdGVtXCI6IFwiUG9zdF9saXN0SXRlbV9fM3d4dkhcIixcblx0XCJpbWFnZVwiOiBcIlBvc3RfaW1hZ2VfXzNjLTllXCIsXG5cdFwiaW1hZ2VQaWN0dXJlXCI6IFwiUG9zdF9pbWFnZVBpY3R1cmVfX1VZOUFPXCIsXG5cdFwiaW1hZ2VQaWN0dXJlVmlzaWJsZVwiOiBcIlBvc3RfaW1hZ2VQaWN0dXJlVmlzaWJsZV9fMTJqUXBcIixcblx0XCJpbWFnZVByZWxvYWRlclwiOiBcIlBvc3RfaW1hZ2VQcmVsb2FkZXJfXzJJQklKXCIsXG5cdFwiaW1hZ2VQcmVsb2FkZXJWaXNpYmxlXCI6IFwiUG9zdF9pbWFnZVByZWxvYWRlclZpc2libGVfXzMzZ3lkXCIsXG5cdFwiaW1hZ2UtcHJlbG9hZGVyLXNwaW5cIjogXCJQb3N0X2ltYWdlLXByZWxvYWRlci1zcGluX18yQXJHQlwiLFxuXHRcImRlbGltaXRlclwiOiBcIlBvc3RfZGVsaW1pdGVyX18yV3h2U1wiLFxuXHRcInVua25vd25cIjogXCJQb3N0X3Vua25vd25fXzJUTjBVXCIsXG5cdFwidW5rbm93blRpdGxlXCI6IFwiUG9zdF91bmtub3duVGl0bGVfXzNISWtEXCIsXG5cdFwidW5rbm93bkRlc2NyaXB0aW9uXCI6IFwiUG9zdF91bmtub3duRGVzY3JpcHRpb25fXzMzWk8tXCJcbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL1Bvc3QubW9kdWxlLnNjc3MnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBQb3N0RGVsaW1pdGVyQmxvY2sge1xyXG4gIHR5cGU6ICdkZWxpbWl0ZXInO1xyXG4gIGRhdGE6IHt9O1xyXG59XHJcblxyXG5pbnRlcmZhY2UgRGVsaW1pdGVyQmxvY2tQcm9wcyB7fVxyXG5cclxuZXhwb3J0IGNvbnN0IERlbGltaXRlckJsb2NrOiBSZWFjdC5GQzxEZWxpbWl0ZXJCbG9ja1Byb3BzPiA9ICgpID0+IHtcclxuICByZXR1cm4gPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5kZWxpbWl0ZXJ9PjwvZGl2PjtcclxufTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9Qb3N0Lm1vZHVsZS5zY3NzJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUG9zdEhlYWRlckJsb2NrIHtcclxuICB0eXBlOiAnaGVhZGVyJztcclxuICBkYXRhOiB7XHJcbiAgICB0ZXh0OiBzdHJpbmc7XHJcbiAgICBsZXZlbDogMSB8IDIgfCAzIHwgNCB8IDUgfCA2O1xyXG4gIH07XHJcbn1cclxuXHJcbmludGVyZmFjZSBIZWFkZXJCbG9ja1Byb3BzIHtcclxuICBibG9jazogUG9zdEhlYWRlckJsb2NrO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgSGVhZGVyQmxvY2s6IFJlYWN0LkZDPEhlYWRlckJsb2NrUHJvcHM+ID0gKHsgYmxvY2sgfSkgPT4ge1xyXG4gIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KGBoJHtibG9jay5kYXRhLmxldmVsfWAsIHsgY2xhc3NOYW1lOiBzdHlsZXMuaGVhZGVyIH0sIGJsb2NrLmRhdGEudGV4dCk7XHJcbn07XHJcbiIsImltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vUG9zdC5tb2R1bGUuc2Nzcyc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFBvc3RJbWFnZUJsb2NrIHtcclxuICB0eXBlOiAnaW1hZ2UnO1xyXG4gIGRhdGE6IHtcclxuICAgIGZpbGU6IHtcclxuICAgICAgdXJsOiBzdHJpbmc7XHJcbiAgICB9O1xyXG4gICAgY2FwdGlvbjogc3RyaW5nO1xyXG4gICAgd2l0aEJvcmRlcjogYm9vbGVhbjtcclxuICAgIHN0cmV0Y2hlZDogYm9vbGVhbjtcclxuICAgIHdpdGhCYWNrZ3JvdW5kOiBib29sZWFuO1xyXG4gIH07XHJcbn1cclxuXHJcbmludGVyZmFjZSBJbWFnZUJsb2NrUHJvcHMge1xyXG4gIGJsb2NrOiBQb3N0SW1hZ2VCbG9jaztcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEltYWdlQmxvY2s6IFJlYWN0LkZDPEltYWdlQmxvY2tQcm9wcz4gPSAoeyBibG9jayB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW1hZ2V9PlxyXG4gICAgICA8aW1nXHJcbiAgICAgICAgY2xhc3NOYW1lPXtjbHN4KHN0eWxlcy5pbWFnZVBpY3R1cmUpfVxyXG4gICAgICAgIHNyYz17YmxvY2suZGF0YS5maWxlLnVybH1cclxuICAgICAgICBhbHQ9e2Jsb2NrLmRhdGEuY2FwdGlvbn1cclxuICAgICAgLz5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vUG9zdC5tb2R1bGUuc2Nzcyc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFBvc3RMaXN0QmxvY2sge1xyXG4gIHR5cGU6ICdsaXN0JztcclxuICBkYXRhOiB7XHJcbiAgICBzdHlsZTogJ3Vub3JkZXJlZCc7XHJcbiAgICBpdGVtczogc3RyaW5nW107XHJcbiAgfTtcclxufVxyXG5cclxuaW50ZXJmYWNlIExpc3RCbG9ja1Byb3BzIHtcclxuICBibG9jazogUG9zdExpc3RCbG9jaztcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IExpc3RCbG9jazogUmVhY3QuRkM8TGlzdEJsb2NrUHJvcHM+ID0gKHsgYmxvY2sgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8dWwgY2xhc3NOYW1lPXtzdHlsZXMubGlzdH0+XHJcbiAgICAgIHtibG9jay5kYXRhLml0ZW1zLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcclxuICAgICAgICA8bGkga2V5PXtpbmRleH0gY2xhc3NOYW1lPXtzdHlsZXMubGlzdEl0ZW19PntpdGVtfTwvbGk+XHJcbiAgICAgICkpfVxyXG4gICAgPC91bD5cclxuICApO1xyXG59O1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL1Bvc3QubW9kdWxlLnNjc3MnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBQb3N0UGFyYWdyYXBoQmxvY2sge1xyXG4gIHR5cGU6ICdwYXJhZ3JhcGgnO1xyXG4gIGRhdGE6IHtcclxuICAgIHRleHQ6IHN0cmluZztcclxuICB9O1xyXG59XHJcblxyXG5pbnRlcmZhY2UgUGFyYWdyYXBoQmxvY2tQcm9wcyB7XHJcbiAgYmxvY2s6IFBvc3RQYXJhZ3JhcGhCbG9jaztcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFBhcmFncmFwaEJsb2NrOiBSZWFjdC5GQzxQYXJhZ3JhcGhCbG9ja1Byb3BzPiA9ICh7IGJsb2NrIH0pID0+IHtcclxuICByZXR1cm4gPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wYXJhZ3JhcGh9IGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogYmxvY2suZGF0YS50ZXh0IH19PjwvZGl2PjtcclxufTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9Qb3N0Lm1vZHVsZS5zY3NzJztcclxuXHJcbmludGVyZmFjZSBVbmtub3duQmxvY2tQcm9wcyB7XHJcbiAgdHlwZTogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgVW5rbm93bjogUmVhY3QuRkM8VW5rbm93bkJsb2NrUHJvcHM+ID0gKHsgdHlwZSB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudW5rbm93bn0+XHJcbiAgICAgIDxoMiBjbGFzc05hbWU9e3N0eWxlcy51bmtub3duVGl0bGV9PtCR0LvQvtC6IFwie3R5cGVbMF0udG9VcHBlckNhc2UoKSArIHR5cGUuc2xpY2UoMSl9XCIg0L3QtSDQvdCw0LnQtNC10L08L2gyPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnVua25vd25EZXNjcmlwdGlvbn0+XHJcbiAgICAgICAg0KDQtdCw0LvQuNC30YPQudGC0LUg0L3QvtCy0YvQuSDQsdC70L7QuiDQsiDQv9Cw0L/QutC1IFBvc3RWaWV3ZXIg0Lgg0LTQvtCx0LDQstGM0YLQtSDQtdCz0L4g0LIgc3dpdGNoLWNhc2Ug0LIg0Y3RgtC+0Lkg0LbQtSDQv9Cw0L/QutC1XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuIiwiaW1wb3J0IHsgRGVsaW1pdGVyQmxvY2ssIFBvc3REZWxpbWl0ZXJCbG9jayB9IGZyb20gJy4vRGVsaW1pdGVyJztcclxuaW1wb3J0IHsgSGVhZGVyQmxvY2ssIFBvc3RIZWFkZXJCbG9jayB9IGZyb20gJy4vSGVhZGVyJztcclxuaW1wb3J0IHsgSW1hZ2VCbG9jaywgUG9zdEltYWdlQmxvY2sgfSBmcm9tICcuL0ltYWdlJztcclxuaW1wb3J0IHsgTGlzdEJsb2NrLCBQb3N0TGlzdEJsb2NrIH0gZnJvbSAnLi9MaXN0JztcclxuaW1wb3J0IHsgUGFyYWdyYXBoQmxvY2ssIFBvc3RQYXJhZ3JhcGhCbG9jayB9IGZyb20gJy4vUGFyYWdyYXBoJztcclxuaW1wb3J0IHsgVW5rbm93biB9IGZyb20gJy4vVW5rbm93bic7XHJcblxyXG5leHBvcnQgdHlwZSBCbG9jayA9IFBvc3RIZWFkZXJCbG9jayB8IFBvc3RQYXJhZ3JhcGhCbG9jayB8IFBvc3RMaXN0QmxvY2sgfCBQb3N0SW1hZ2VCbG9jayB8IFBvc3REZWxpbWl0ZXJCbG9jaztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldEJsb2NrSFRNTChibG9jazogQmxvY2spOiBKU1guRWxlbWVudCB7XHJcbiAgc3dpdGNoIChibG9jay50eXBlKSB7XHJcbiAgICBjYXNlICdoZWFkZXInOlxyXG4gICAgICByZXR1cm4gPEhlYWRlckJsb2NrIGJsb2NrPXtibG9ja30gLz47XHJcbiAgICBjYXNlICdwYXJhZ3JhcGgnOlxyXG4gICAgICByZXR1cm4gPFBhcmFncmFwaEJsb2NrIGJsb2NrPXtibG9ja30gLz47XHJcbiAgICBjYXNlICdsaXN0JzpcclxuICAgICAgcmV0dXJuIDxMaXN0QmxvY2sgYmxvY2s9e2Jsb2NrfSAvPjtcclxuICAgIGNhc2UgJ2ltYWdlJzpcclxuICAgICAgcmV0dXJuIDxJbWFnZUJsb2NrIGJsb2NrPXtibG9ja30gLz47XHJcbiAgICBjYXNlICdkZWxpbWl0ZXInOlxyXG4gICAgICByZXR1cm4gPERlbGltaXRlckJsb2NrIC8+O1xyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIDxVbmtub3duIHR5cGU9eydURVNUJ30gLz47XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9Qb3N0Lm1vZHVsZS5zY3NzJztcclxuaW1wb3J0IHsgUG9wb3ZlciB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuaW1wb3J0IHsgU2hhcmVJY29uIH0gZnJvbSAnLi4vaWNvbnMvU2hhcmVJY29uJztcclxuaW1wb3J0IHsgRmFjZWJvb2tJY29uIH0gZnJvbSAnLi4vaWNvbnMvRmFjZWJvb2tJY29uJztcclxuaW1wb3J0IHsgVmtJY29uIH0gZnJvbSAnLi4vaWNvbnMvVmtJY29uJztcclxuaW1wb3J0IHsgVHdpdHRlckljb24gfSBmcm9tICcuLi9pY29ucy9Ud2l0dGVySWNvbic7XHJcbmltcG9ydCB7IFRlbGVncmFtSWNvbiB9IGZyb20gJy4uL2ljb25zL1RlbGVncmFtSWNvbic7XHJcbmltcG9ydCB7IFdoYXRzYXBwSWNvbiB9IGZyb20gJy4uL2ljb25zL1doYXRzYXBwSWNvbic7XHJcbmltcG9ydCB7IExpa2VCbG9jayB9IGZyb20gJy4uL0xpa2VCbG9jayc7XHJcbmltcG9ydCB7IFVzZXJWaWV3T25Db250ZW50IH0gZnJvbSAnLi4vVXNlclZpZXdPbkNvbnRlbnQnO1xyXG5pbXBvcnQgeyBWaWV3c0FuZENvbW1lbnRzIH0gZnJvbSAnLi4vVmlld3NBbmRDb21tZW50cyc7XHJcbmltcG9ydCB7IExpa2VCbG9ja1Jlc3VsdCB9IGZyb20gJy4uL0xpa2VCbG9jayc7XHJcbmltcG9ydCBnZXRCbG9ja0hUTUwsIHsgQmxvY2sgfSBmcm9tICcuL1Bvc3RWaWV3ZXInO1xyXG5pbXBvcnQgeyBXYXJuaW5nSWNvbiB9IGZyb20gJy4uL2ljb25zL1dhcm5pbmdJY29uJztcclxuaW1wb3J0IHtQb3N0RGF0YX0gZnJvbSBcIi4uLy4uL2ludGVyZmFjZXNcIjtcclxuaW1wb3J0IHt1c2VBbGxNUX0gZnJvbSBcIi4uLy4uL3V0aWxzL3VzZUFsbE1RXCI7XHJcblxyXG5leHBvcnQgY29uc3QgRnVsbFBvc3Q6IFJlYWN0LkZDPHtwb3N0OiBQb3N0RGF0YSwgb25TZXRMaWtlOiAocG9zdElkOiBudW1iZXIsIGxpa2U6IHVua25vd24pID0+IHZvaWR9PiA9ICh7cG9zdCwgb25TZXRMaWtlfSkgPT4ge1xyXG4gIGNvbnN0IG1xID0gdXNlQWxsTVEoKTtcclxuICBjb25zdCBbcG9zdERhdGEsIHNldFBvc3REYXRhXSA9IFJlYWN0LnVzZVN0YXRlKHBvc3QpO1xyXG4gIGNvbnN0IFthbmNob3JFbCwgc2V0QW5jaG9yRWxdID0gUmVhY3QudXNlU3RhdGU8SFRNTERpdkVsZW1lbnQgfCBudWxsPihudWxsKTtcclxuICBjb25zdCBbbGlrZXNBbmREaXNsaWtlcywgc2V0TGlrZXNBbmREaXNsaWtlc10gPSBSZWFjdC51c2VTdGF0ZTxMaWtlQmxvY2tSZXN1bHQ+KHtcclxuICAgIGxpa2VzOiBwb3N0RGF0YS5saWtlc19jb3VudCxcclxuICAgIGRpc2xpa2VzOiBwb3N0RGF0YS5kaXNsaWtlc19jb3VudCxcclxuICAgIHZvdGU6IHBvc3Q/Lmxpa2VkX3R5cGUsXHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gKGV2ZW50OiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxEaXZFbGVtZW50PikgPT4ge1xyXG4gICAgc2V0QW5jaG9yRWwoZXZlbnQuY3VycmVudFRhcmdldCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU2V0TGlrZSA9YXN5bmMgKGxpa2U6IExpa2VCbG9ja1Jlc3VsdCkgPT4ge1xyXG4gICAgc2V0TGlrZXNBbmREaXNsaWtlcyhsaWtlKTtcclxuICAgIGF3YWl0IG9uU2V0TGlrZShwb3N0LmlkLCBsaWtlPy52b3RlKVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucG9zdH0+XHJcbiAgICAgIDxVc2VyVmlld09uQ29udGVudFxyXG4gICAgICAgIHVzZXI9e3tcclxuICAgICAgICAgIGlkOiBwb3N0LnVzZXIuaWQsXHJcbiAgICAgICAgICBuYW1lOiBwb3N0LnVzZXIubmFtZSxcclxuICAgICAgICAgIGF2YXRhclVybDogcG9zdC51c2VyLmF2YXRhcixcclxuICAgICAgICB9fVxyXG4gICAgICAgIHRpbWU9e25ldyBEYXRlKHBvc3QuY3JlYXRlZF9hdCkuZ2V0VGltZSgpfVxyXG4gICAgICAvPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnBvc3RJbmZvfT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnBvc3REZXRhaWxzfT5cclxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9e3N0eWxlcy5wb3N0SGVhZGVyfT57cG9zdC50aXRsZX08L2gxPlxyXG4gICAgICAgICAgPFZpZXdzQW5kQ29tbWVudHMgY29tbWVudHM9e3Bvc3QuY29tbWVudHNfY291bnR9IHZpZXdzPXtwb3N0LnZpZXdzfSBtb2RlPVwiZnVsbFwiIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgeyFtcS5pc1hTICYmIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wb3N0QWN0aW9uc30+XHJcbiAgICAgICAgICAgICAgPExpa2VCbG9ja1xyXG4gICAgICAgICAgICAgICAgICBsaWtlcz17bGlrZXNBbmREaXNsaWtlcy5saWtlc31cclxuICAgICAgICAgICAgICAgICAgZGlzbGlrZXM9e2xpa2VzQW5kRGlzbGlrZXMuZGlzbGlrZXN9XHJcbiAgICAgICAgICAgICAgICAgIG1vZGU9XCJtaW5pXCJcclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZVNldExpa2V9XHJcbiAgICAgICAgICAgICAgICAgIHZvdGU9e2xpa2VzQW5kRGlzbGlrZXMudm90ZX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucG9zdFNoYXJlfSBvbkNsaWNrPXtoYW5kbGVDbGlja30+XHJcbiAgICAgICAgICAgICAgICA8U2hhcmVJY29uIGNsYXNzTmFtZT17c3R5bGVzLnBvc3RTaGFyZUljb259IC8+XHJcbiAgICAgICAgICAgICAgICDQn9C+0LTQtdC70LjRgtGM0YHRj1xyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxQb3BvdmVyXHJcbiAgICAgICAgICAgICAgICAgIG9wZW49eyEhYW5jaG9yRWx9XHJcbiAgICAgICAgICAgICAgICAgIGFuY2hvckVsPXthbmNob3JFbH1cclxuICAgICAgICAgICAgICAgICAgb25DbG9zZT17KCkgPT4gc2V0QW5jaG9yRWwobnVsbCl9XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzZXM9e3tcclxuICAgICAgICAgICAgICAgICAgICBwYXBlcjogc3R5bGVzLnBvc3RTaGFyZVBvcHVwLFxyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICBhbmNob3JPcmlnaW49e3tcclxuICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbDogJ2JvdHRvbScsXHJcbiAgICAgICAgICAgICAgICAgICAgaG9yaXpvbnRhbDogJ2NlbnRlcicsXHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybU9yaWdpbj17e1xyXG4gICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsOiAndG9wJyxcclxuICAgICAgICAgICAgICAgICAgICBob3Jpem9udGFsOiAnY2VudGVyJyxcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnBvc3RTaGFyZVNvY2lhbH0+XHJcbiAgICAgICAgICAgICAgICAgIDxGYWNlYm9va0ljb24gY2xhc3NOYW1lPXtzdHlsZXMucG9zdFNoYXJlU29jaWFsSWNvbn0gLz5cclxuICAgICAgICAgICAgICAgICAgRmFjZWJvb2tcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wb3N0U2hhcmVTb2NpYWx9PlxyXG4gICAgICAgICAgICAgICAgICA8VmtJY29uIGNsYXNzTmFtZT17c3R5bGVzLnBvc3RTaGFyZVNvY2lhbEljb259IC8+XHJcbiAgICAgICAgICAgICAgICAgINCS0LrQvtC90YLQsNC60YLQtVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnBvc3RTaGFyZVNvY2lhbH0+XHJcbiAgICAgICAgICAgICAgICAgIDxUd2l0dGVySWNvbiBjbGFzc05hbWU9e3N0eWxlcy5wb3N0U2hhcmVTb2NpYWxJY29ufSAvPlxyXG4gICAgICAgICAgICAgICAgICBUd2l0dGVyXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucG9zdFNoYXJlU29jaWFsfT5cclxuICAgICAgICAgICAgICAgICAgPFRlbGVncmFtSWNvbiBjbGFzc05hbWU9e3N0eWxlcy5wb3N0U2hhcmVTb2NpYWxJY29ufSAvPlxyXG4gICAgICAgICAgICAgICAgICBUZWxlZ3JhbVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnBvc3RTaGFyZVNvY2lhbH0+XHJcbiAgICAgICAgICAgICAgICAgIDxXaGF0c2FwcEljb24gY2xhc3NOYW1lPXtzdHlsZXMucG9zdFNoYXJlU29jaWFsSWNvbn0gLz5cclxuICAgICAgICAgICAgICAgICAgV2hhdHNhcHBcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvUG9wb3Zlcj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wb3N0V3JhcHBlcn0+XHJcbiAgICAgICAgICAgIHtwb3N0RGF0YS5ib2R5Lm1hcCgoYmxvY2s6IEJsb2NrLCBpZHgpID0+ICg8ZGl2IGtleT17J2Jsb2NrLScgKyBpZHh9PlxyXG4gICAgICAgICAgICB7Z2V0QmxvY2tIVE1MKGJsb2NrKX1cclxuICAgICAgPC9kaXY+KSl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucG9zdEZvb3Rlcn0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wb3N0Rm9vdGVySWNvbnN9PlxyXG4gICAgICAgICAgPEZhY2Vib29rSWNvbiBjbGFzc05hbWU9e3N0eWxlcy5wb3N0Rm9vdGVySWNvbn0gaG92ZXJDbGFzc05hbWU9e3N0eWxlcy5wb3N0Rm9vdGVySWNvbkhvdmVyfSAvPlxyXG4gICAgICAgICAgPFZrSWNvbiBjbGFzc05hbWU9e3N0eWxlcy5wb3N0Rm9vdGVySWNvbn0gaG92ZXJDbGFzc05hbWU9e3N0eWxlcy5wb3N0Rm9vdGVySWNvbkhvdmVyfSAvPlxyXG4gICAgICAgICAgPFR3aXR0ZXJJY29uIGNsYXNzTmFtZT17c3R5bGVzLnBvc3RGb290ZXJJY29ufSBob3ZlckNsYXNzTmFtZT17c3R5bGVzLnBvc3RGb290ZXJJY29uSG92ZXJ9IC8+XHJcbiAgICAgICAgICA8VGVsZWdyYW1JY29uIGNsYXNzTmFtZT17c3R5bGVzLnBvc3RGb290ZXJJY29ufSBob3ZlckNsYXNzTmFtZT17c3R5bGVzLnBvc3RGb290ZXJJY29uSG92ZXJ9IC8+XHJcbiAgICAgICAgICA8V2hhdHNhcHBJY29uIGNsYXNzTmFtZT17c3R5bGVzLnBvc3RGb290ZXJJY29ufSBob3ZlckNsYXNzTmFtZT17c3R5bGVzLnBvc3RGb290ZXJJY29uSG92ZXJ9IC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMucG9zdEZvb3RlckNvbXBsYWlufT5cclxuICAgICAgICAgIDxXYXJuaW5nSWNvbiBjbGFzc05hbWU9e3N0eWxlcy5wb3N0Rm9vdGVyQ29tcGxhaW5JY29ufSAvPlxyXG4gICAgICAgICAg0J/QvtC20LDQu9C+0LLQsNGC0YzRgdGPXHJcbiAgICAgICAgPC9zcGFuPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImhlYWRlclwiOiBcIkhlYWRlcl9oZWFkZXJfX09rb0RMXCIsXG5cdFwiYmFja2Ryb3BcIjogXCJIZWFkZXJfYmFja2Ryb3BfXzMwWndCXCIsXG5cdFwibWVudUJ1dHRvblwiOiBcIkhlYWRlcl9tZW51QnV0dG9uX18xUzE1UlwiLFxuXHRcInNlYXJjaFwiOiBcIkhlYWRlcl9zZWFyY2hfXzJveTMzXCIsXG5cdFwiaW5wdXRcIjogXCJIZWFkZXJfaW5wdXRfX0xBdzVWXCIsXG5cdFwibm9zY3JvbGxcIjogXCJIZWFkZXJfbm9zY3JvbGxfXzJkUUMwXCJcbn07XG4iLCJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnO1xyXG5pbXBvcnQgUHJvZmlsZVBvcHVwIGZyb20gJy4uL1Byb2ZpbGVQb3B1cCc7XHJcbmltcG9ydCBTZWFyY2hQb3B1cCBmcm9tICcuLi9TZWFyY2hQb3B1cCc7XHJcbmltcG9ydCBCYWNrZHJvcCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CYWNrZHJvcCc7XHJcblxyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vSGVhZGVyLm1vZHVsZS5zY3NzJztcclxuaW1wb3J0IHtBdmFpbGFibGVGb3JXb3JrfSBmcm9tICcuLi9BdmFpbGFibGVGb3JXb3JrJztcclxuaW1wb3J0IHtCdXR0b259IGZyb20gJy4uL0J1dHRvbic7XHJcbmltcG9ydCB7dXNlUm91dGVyfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCB7VXNlckFwaX0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2FwaS9Vc2VyQXBpXCI7XHJcbmltcG9ydCB7dXNlU2VsZWN0b3J9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQge3NlbGVjdFVzZXJTdGF0ZX0gZnJvbSBcIi4uLy4uL3JlZHV4L3VzZXIvdXNlci5zZWxlY3RvclwiO1xyXG5pbXBvcnQge0F1dGhEaWFsb2d9IGZyb20gXCIuLi9BdXRoRGlhbG9nXCI7XHJcbmltcG9ydCB7dXNlQWxsTVF9IGZyb20gXCIuLi8uLi91dGlscy91c2VBbGxNUVwiO1xyXG5pbXBvcnQgTW9iaWxlUHJvZmlsZVBvcHVwIGZyb20gXCIuLi9Nb2JpbGVQcm9maWxlUG9wdXBcIjtcclxuaW1wb3J0IEF2YXRhciBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQXZhdGFyXCI7XHJcbmltcG9ydCB7Tm90aWZpY2F0aW9uRHJvcGRvd259IGZyb20gXCIuLi9Ob3RpZmljYXRpb25Ecm9wZG93blwiO1xyXG5cclxudHlwZSBQcm9wcyA9IHtcclxuICAgIG9uQ2xpY2tIYW1idXJnZXI6ICgpID0+IHZvaWRcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEhlYWRlciA9ICh7IG9uQ2xpY2tIYW1idXJnZXIgfSA6IFByb3BzKSA9PiB7XHJcbiAgICBjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgdXNlciA9IHVzZVNlbGVjdG9yKHNlbGVjdFVzZXJTdGF0ZSk7XHJcbiAgICBjb25zdCBtcSA9IHVzZUFsbE1RKClcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcblxyXG4gICAgY29uc3QgW2NoZWNrZWQsIHNldENoZWNrZWRdID0gdXNlU3RhdGUodXNlcj8uZGF0YT8ucmVhZHlfZm9yX3dvcmsgfHwgZmFsc2UpO1xyXG4gICAgY29uc3QgW2lzU2VhcmNoLCBzZXRJc1NlYXJjaF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbaXNNb2JpbGVQb3B1cCwgc2V0SXNNb2JpbGVQb3B1cF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG5cclxuICAgIGNvbnN0IFtpc1Zpc2libGUsIHNldElzVmlzaWJsZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gICAgY29uc3QgW3NlYXJjaElucHV0LCBzZXRTZWFyY2hJbnB1dF0gPSB1c2VTdGF0ZTxzdHJpbmc+KCcnKTtcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaXNTZWFyY2ggfHwgaXNNb2JpbGVQb3B1cCA/IGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZChzdHlsZXMubm9zY3JvbGwpIDogZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKHN0eWxlcy5ub3Njcm9sbCk7XHJcbiAgICB9LCBbaXNTZWFyY2gsIGlzTW9iaWxlUG9wdXBdKTtcclxuXHJcbiAgICBjb25zdCBvbkNoYW5nZUNoZWNrYm94ID0gKGV2ZW50OiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xyXG4gICAgICAgIGhhbmRsZUNoYW5nZUNoZWNrYm94KGV2ZW50LnRhcmdldC5jaGVja2VkKVxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBvbk9wZW5TZWFyY2ggPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0SXNTZWFyY2godHJ1ZSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IG9uQ2xvc2VTZWFyY2ggPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0U2VhcmNoSW5wdXQoJycpO1xyXG4gICAgICAgIHNldElzU2VhcmNoKGZhbHNlKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlQ2hlY2tib3ggPSAoZmxhZzogYm9vbGVhbikgPT4ge1xyXG4gICAgICAgIHNldENoZWNrZWQoZmxhZyk7XHJcbiAgICAgICAgc2V0SXNMb2FkaW5nKHRydWUpXHJcbiAgICAgICAgVXNlckFwaVxyXG4gICAgICAgICAgICAudXBkYXRlUHJvZmlsZSh7cmVhZHlfZm9yX3dvcms6IGZsYWcgPyB0cnVlIDogZmFsc2V9LCB1c2VyLmRhdGE/LmlkKVxyXG4gICAgICAgICAgICAudGhlbigocikgPT4ge1xyXG4gICAgICAgICAgICAgICAgc2V0Q2hlY2tlZChmbGFnKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgICAgICAgICBPYmplY3QudmFsdWVzKGVycj8ucmVzcG9uc2U/LmRhdGE/LmVycm9ycykuZm9yRWFjaChlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBhbGVydChlKVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIHNldENoZWNrZWQoZmFsc2UpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuZmluYWxseSgoKSA9PiBzZXRJc0xvYWRpbmcoZmFsc2UpKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZUNsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgIGlmICghdXNlcj8uZGF0YT8uaWQpIHtcclxuICAgICAgICAgICAgc2V0SXNWaXNpYmxlKHRydWUpO1xyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJvdXRlci5wdXNoKCcvd3JpdGUnKVxyXG4gICAgfVxyXG5cclxuICAgIGlmIChpc1NlYXJjaCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPXtjbHN4KHN0eWxlcy5oZWFkZXIsICdkLWZsZXgnKX0+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPXsnLyd9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxhPjxpbWcgY2xhc3NOYW1lPXtzdHlsZXMubG9nb30gc3JjPVwiL2xvZ28uc3ZnXCIgYWx0PVwiTG9nb1wiLz48L2E+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xzeChzdHlsZXMuc2VhcmNoLCAnZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciB3MTAwJyl9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwibXItMTVcIiBzcmM9XCIvc2VhcmNoLnN2Z1wiIGFsdD1cItCf0L7QuNGB0LpcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmlucHV0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cItCf0L7QuNGB0LpcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c2VhcmNoSW5wdXR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0U2VhcmNoSW5wdXQoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgID48L2lucHV0PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgb25DbGljaz17b25DbG9zZVNlYXJjaH0gY2xhc3NOYW1lPVwibWwtYXV0byBjdXJzb3ItcG9pbnRlclwiIHNyYz1cIi9jbG9zZS5zdmdcIiBhbHQ9XCLQl9Cw0LrRgNGL0YLRjFwiLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPEJhY2tkcm9wIGNsYXNzZXM9e3tyb290OiBzdHlsZXMuYmFja2Ryb3B9fSBvcGVuPXtpc1NlYXJjaH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPFNlYXJjaFBvcHVwIGhhbmRsZUNsaWNrPXtvbkNsb3NlU2VhcmNofSBpc1NlYXJjaD17aXNTZWFyY2h9IHNlYXJjaElucHV0PXtzZWFyY2hJbnB1dH0vPlxyXG4gICAgICAgICAgICAgICAgPC9CYWNrZHJvcD5cclxuICAgICAgICAgICAgPC9oZWFkZXI+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoaXNNb2JpbGVQb3B1cCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPXtjbHN4KHN0eWxlcy5oZWFkZXIsICdkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW4nKX0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9e3N0eWxlcy5tZW51QnV0dG9ufSBvbkNsaWNrPXtvbkNsaWNrSGFtYnVyZ2VyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHN2ZyB2aWV3Qm94PVwiMCAwIDI2IDExXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0xIDFIMTYuNU0xIDEwSDI0LjVcIiBzdHJva2VXaWR0aD1cIjJcIiBzdHJva2VMaW5lY2FwPVwicm91bmRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXsnLyd9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YT48aW1nIGNsYXNzTmFtZT17c3R5bGVzLmxvZ299IHNyYz1cIi9sb2dvLnN2Z1wiIGFsdD1cIkxvZ29cIi8+PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cIm1sLTEwIGN1cnNvci1wb2ludGVyXCIgc3JjPVwiL3NlYXJjaC5zdmdcIiBhbHQ9XCLQn9C+0LjRgdC6XCIgb25DbGljaz17b25PcGVuU2VhcmNofS8+XHJcbiAgICAgICAgICAgICAgICAgICAgey8qPGltZyBjbGFzc05hbWU9XCJtbC0xMCBjdXJzb3ItcG9pbnRlclwiIHNyYz1cIi9ub3RpZmljYXRpb25zLnN2Z1wiIGFsdD1cItCj0LLQtdC00L7QvNC70LXQvdC40Y9cIi8+Ki99XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsnbWwtMTAnfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEF2YXRhciBhbHQ9e3VzZXI/LmRhdGE/Lm5hbWV9IHNyYz17dXNlcj8uZGF0YT8uYXZhdGFyfSBvbkNsaWNrPXsoKSA9PiBzZXRJc01vYmlsZVBvcHVwKGZhbHNlKX0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8QmFja2Ryb3AgY2xhc3Nlcz17e3Jvb3Q6IHN0eWxlcy5iYWNrZHJvcH19IG9wZW49e2lzTW9iaWxlUG9wdXB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TW9iaWxlUHJvZmlsZVBvcHVwIGNoZWNrZWQ9e2NoZWNrZWR9IG9uQ2hhbmdlPXtvbkNoYW5nZUNoZWNrYm94fSBzZXRDaGVja2VkPXtoYW5kbGVDaGFuZ2VDaGVja2JveH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0xvYWRpbmc9e2lzTG9hZGluZ30gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0JhY2tkcm9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8L2hlYWRlcj5cclxuICAgICAgICApXHJcbiAgICB9XHJcblxyXG5cclxuICAgIGlmIChtcS5pc1hTKSB7XHJcbiAgICAgICAgcmV0dXJuICggPGhlYWRlciBjbGFzc05hbWU9e2Nsc3goc3R5bGVzLmhlYWRlciwgJ2QtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbicpfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIGp1c3RpZnktY29udGVudC1iZXR3ZWVuIHcxMDBcIj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT17c3R5bGVzLm1lbnVCdXR0b259IG9uQ2xpY2s9e29uQ2xpY2tIYW1idXJnZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxzdmcgdmlld0JveD1cIjAgMCAyNiAxMVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0xIDFIMTYuNU0xIDEwSDI0LjVcIiBzdHJva2VXaWR0aD1cIjJcIiBzdHJva2VMaW5lY2FwPVwicm91bmRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcblxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj17Jy8nfT5cclxuICAgICAgICAgICAgICAgICAgICA8YT48aW1nIGNsYXNzTmFtZT17c3R5bGVzLmxvZ299IHNyYz1cIi9sb2dvLnN2Z1wiIGFsdD1cIkxvZ29cIi8+PC9hPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJtbC0xMCBjdXJzb3ItcG9pbnRlclwiIHNyYz1cIi9zZWFyY2guc3ZnXCIgYWx0PVwi0J/QvtC40YHQulwiIG9uQ2xpY2s9e29uT3BlblNlYXJjaH0vPlxyXG4gICAgICAgICAgICAgICAgICAgIDxOb3RpZmljYXRpb25Ecm9wZG93biAvPlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8UHJvZmlsZVBvcHVwIG9uQ2xpY2s9eygpID0+ICF1c2VyPy5kYXRhPy5pZCA/IHNldElzVmlzaWJsZSh0cnVlKSA6IHNldElzTW9iaWxlUG9wdXAodHJ1ZSl9IHVzZXI9e3VzZXI/LmRhdGF9Lz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxBdXRoRGlhbG9nIHNpemU9eydsZyd9ICBvbkNsb3NlPXsoKSA9PiB7IHNldElzVmlzaWJsZShmYWxzZSkgfX0gb3Blbj17aXNWaXNpYmxlfSAvPlxyXG4gICAgICAgIDwvaGVhZGVyPilcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPXtjbHN4KHN0eWxlcy5oZWFkZXIsICdkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW4nKX0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj17Jy8nfT5cclxuICAgICAgICAgICAgICAgICAgICA8YT48aW1nIGNsYXNzTmFtZT17c3R5bGVzLmxvZ299IHNyYz1cIi9sb2dvLnN2Z1wiIGFsdD1cIkxvZ29cIi8+PC9hPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9zcGVjaWFsaXN0c1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIgbWwtNDVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJtci0xMFwiIHNyYz1cIi91c2Vycy5zdmdcIiBhbHQ9XCLQodC/0LXRhtC40LDQu9C40YHRgtGLXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICDQodC/0LXRhtC40LDQu9C40YHRgtGLXHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8QXZhaWxhYmxlRm9yV29yayBjaGVja2VkPXtjaGVja2VkfSBvbkNoYW5nZT17b25DaGFuZ2VDaGVja2JveH0gc2V0Q2hlY2tlZD17aGFuZGxlQ2hhbmdlQ2hlY2tib3h9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0xvYWRpbmc9e2lzTG9hZGluZ30vPlxyXG4gICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJtbC00NSBjdXJzb3ItcG9pbnRlclwiIHNyYz1cIi9zZWFyY2guc3ZnXCIgYWx0PVwi0J/QvtC40YHQulwiIG9uQ2xpY2s9e29uT3BlblNlYXJjaH0vPlxyXG4gICAgICAgICAgICAgICAgPE5vdGlmaWNhdGlvbkRyb3Bkb3duIC8+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1sLTM1XCI+XHJcbiAgICAgICAgICAgICAgICAgICAge3VzZXIuZGF0YSAmJiA8UHJvZmlsZVBvcHVwIHVzZXI9e3VzZXIuZGF0YX0vPn1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVDbGlja30gdmFyaWFudD1cImNvbnRhaW5lZFwiIGNvbG9yPVwic2Vjb25kYXJ5XCIgY2xhc3NOYW1lPVwibWwtMzBcIj5cclxuICAgICAgICAgICAgICAgICAgICDQndCw0L/QuNGB0LDRgtGMXHJcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG5cclxuICAgICAgICAgICAgPEF1dGhEaWFsb2cgIHNpemU9eyd4cyd9IG9uQ2xvc2U9eygpID0+IHsgc2V0SXNWaXNpYmxlKGZhbHNlKSB9fSBvcGVuPXtpc1Zpc2libGV9IC8+XHJcbiAgICAgICAgPC9oZWFkZXI+XHJcbiAgICApO1xyXG59O1xyXG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJsaWtlQmxvY2tcIjogXCJMaWtlQmxvY2tfbGlrZUJsb2NrX19YOC1OeFwiLFxuXHRcInVwQmxvY2tcIjogXCJMaWtlQmxvY2tfdXBCbG9ja19fMWhLWjVcIixcblx0XCJkb3duQmxvY2tcIjogXCJMaWtlQmxvY2tfZG93bkJsb2NrX18xdkdHaVwiLFxuXHRcImxpa2VCbG9ja0Z1bGxcIjogXCJMaWtlQmxvY2tfbGlrZUJsb2NrRnVsbF9fMXdqTk1cIixcblx0XCJsaWtlQmxvY2tNaW5pXCI6IFwiTGlrZUJsb2NrX2xpa2VCbG9ja01pbmlfXzJIUnpLXCIsXG5cdFwicm90YXRlXCI6IFwiTGlrZUJsb2NrX3JvdGF0ZV9fMTlOMVpcIixcblx0XCJsaWtlVm90ZWRcIjogXCJMaWtlQmxvY2tfbGlrZVZvdGVkX18yeGlhSlwiLFxuXHRcImRpc2xpa2VWb3RlZFwiOiBcIkxpa2VCbG9ja19kaXNsaWtlVm90ZWRfXzJTaU1jXCIsXG5cdFwibm9Wb3Rlc1wiOiBcIkxpa2VCbG9ja19ub1ZvdGVzX19yY2RSSlwiXG59O1xuIiwiaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9MaWtlQmxvY2subW9kdWxlLnNjc3MnO1xyXG5pbXBvcnQgeyBUaHVtYlVwSWNvbiB9IGZyb20gJy4uL2ljb25zL1RodW1iVXBJY29uJztcclxuXHJcbmV4cG9ydCB0eXBlIExpa2VCbG9ja1ZvdGUgPSAnbGlrZScgfCAnZGlzbGlrZScgfCB1bmRlZmluZWQ7XHJcblxyXG5pbnRlcmZhY2UgTGlrZUJsb2NrUHJvcHMge1xyXG4gIG1vZGU6ICdtaW5pJyB8ICdmdWxsJztcclxuICBsaWtlczogbnVtYmVyO1xyXG4gIGRpc2xpa2VzOiBudW1iZXI7XHJcbiAgdm90ZT86IExpa2VCbG9ja1ZvdGU7XHJcbiAgb25DaGFuZ2U6IChyZXN1bHQ6IExpa2VCbG9ja1Jlc3VsdCkgPT4gdm9pZDtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBMaWtlQmxvY2tSZXN1bHQge1xyXG4gIGxpa2VzOiBudW1iZXI7XHJcbiAgZGlzbGlrZXM6IG51bWJlcjtcclxuICB2b3RlOiBMaWtlQmxvY2tWb3RlO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgTGlrZUJsb2NrOiBSZWFjdC5GQzxMaWtlQmxvY2tQcm9wcz4gPSAoeyBtb2RlLCBsaWtlcywgZGlzbGlrZXMsIHZvdGUsIG9uQ2hhbmdlIH0pID0+IHtcclxuICBjb25zdCBvblRodW1iVXBDbGljayA9ICgpID0+IHtcclxuICAgIGlmICh2b3RlID09PSAnbGlrZScpIHtcclxuICAgICAgb25DaGFuZ2UoeyBsaWtlczogbGlrZXMgLSAxLCBkaXNsaWtlcywgdm90ZTogdW5kZWZpbmVkIH0pO1xyXG4gICAgfSBlbHNlIGlmICh2b3RlID09PSAnZGlzbGlrZScpIHtcclxuICAgICAgb25DaGFuZ2UoeyBsaWtlczogbGlrZXMgKyAxLCBkaXNsaWtlczogZGlzbGlrZXMgLSAxLCB2b3RlOiAnbGlrZScgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBvbkNoYW5nZSh7IGxpa2VzOiBsaWtlcyArIDEsIGRpc2xpa2VzLCB2b3RlOiAnbGlrZScgfSk7XHJcbiAgICB9XHJcbiAgfTtcclxuICBjb25zdCBvblRodW1iRG93bkNsaWNrID0gKCkgPT4ge1xyXG4gICAgaWYgKHZvdGUgPT09ICdsaWtlJykge1xyXG4gICAgICBvbkNoYW5nZSh7IGxpa2VzOiBsaWtlcyAtIDEsIGRpc2xpa2VzOiBkaXNsaWtlcyArIDEsIHZvdGU6ICdkaXNsaWtlJyB9KTtcclxuICAgIH0gZWxzZSBpZiAodm90ZSA9PT0gJ2Rpc2xpa2UnKSB7XHJcbiAgICAgIG9uQ2hhbmdlKHsgbGlrZXMsIGRpc2xpa2VzOiBkaXNsaWtlcyAtIDEsIHZvdGU6IHVuZGVmaW5lZCB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIG9uQ2hhbmdlKHsgbGlrZXMsIGRpc2xpa2VzOiBkaXNsaWtlcyArIDEsIHZvdGU6ICdkaXNsaWtlJyB9KTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCB7XHJcbiAgICBsaWtlVm90ZWQsXHJcbiAgICBkaXNsaWtlVm90ZWQsXHJcbiAgICBub1ZvdGVzLFxyXG4gICAgbGlrZUJsb2NrLFxyXG4gICAgbGlrZUJsb2NrRnVsbCxcclxuICAgIGxpa2VCbG9ja01pbmksXHJcbiAgICB1cEJsb2NrLFxyXG4gICAgZG93bkJsb2NrLFxyXG4gICAgcm90YXRlLFxyXG4gIH0gPSBzdHlsZXM7XHJcbiAgY29uc3QgdGh1bWJVcENsYXNzTmFtZSA9IHZvdGUgPT09ICdsaWtlJyA/IGxpa2VWb3RlZCA6IG5vVm90ZXM7XHJcbiAgY29uc3QgdGh1bWJEb3duQ2xhc3NOYW1lID0gdm90ZSA9PT0gJ2Rpc2xpa2UnID8gZGlzbGlrZVZvdGVkIDogbm9Wb3RlcztcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtsaWtlQmxvY2t9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17bW9kZSA9PT0gJ2Z1bGwnID8gbGlrZUJsb2NrRnVsbCA6IGxpa2VCbG9ja01pbml9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbHN4KHVwQmxvY2ssIHRodW1iVXBDbGFzc05hbWUpfSBvbkNsaWNrPXtvblRodW1iVXBDbGlja30+XHJcbiAgICAgICAgICA8VGh1bWJVcEljb24gY2xhc3NOYW1lPXt0aHVtYlVwQ2xhc3NOYW1lfSAvPlxyXG4gICAgICAgICAgPHNwYW4+e2xpa2VzfTwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xzeChkb3duQmxvY2ssIHRodW1iRG93bkNsYXNzTmFtZSl9IG9uQ2xpY2s9e29uVGh1bWJEb3duQ2xpY2t9PlxyXG4gICAgICAgICAgPFRodW1iVXBJY29uIGNsYXNzTmFtZT17Y2xzeCh0aHVtYkRvd25DbGFzc05hbWUsIHJvdGF0ZSl9IC8+XHJcbiAgICAgICAgICA8c3Bhbj57ZGlzbGlrZXN9PC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImJ1dHRvblwiOiBcIk1lbnVMaXN0X2J1dHRvbl9fUVhUSXRcIixcblx0XCJpdGVtXCI6IFwiTWVudUxpc3RfaXRlbV9fMWJuZHRcIixcblx0XCJuZXdDb3VudFwiOiBcIk1lbnVMaXN0X25ld0NvdW50X18yeVBtZVwiLFxuXHRcImljb25cIjogXCJNZW51TGlzdF9pY29uX18yZE5ISVwiXG59O1xuIiwiaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCc7XHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCB7QnV0dG9ufSBmcm9tICcuLi9CdXR0b24nO1xyXG5cclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL01lbnVMaXN0Lm1vZHVsZS5zY3NzJztcclxuXHJcbnR5cGUgTWVudUl0ZW0gPSB7IG5hbWU6IHN0cmluZzsgdXJsOiBzdHJpbmc7IGljb246IHN0cmluZzsgbmV3Q291bnQ/OiBudW1iZXI7IGhhc01vcmU/OiBib29sZWFuOyBpc0FjdGl2ZT86IGJvb2xlYW4sIG9uQ2xpY2s/OiAoKSA9PiB2b2lkIH07XHJcblxyXG50eXBlIE1lbnVMaXN0UHJvcHMgPSB7XHJcbiAgICBpdGVtczogTWVudUl0ZW1bXTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBNZW51TGlzdDogUmVhY3QuRkM8TWVudUxpc3RQcm9wcz4gPSAoe2l0ZW1zfSkgPT4ge1xyXG4gICAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoaXRlbTogTWVudUl0ZW0pID0+IHtcclxuICAgICAgICBpZiAoaXRlbS5vbkNsaWNrKSB7XHJcbiAgICAgICAgICAgIGl0ZW0ub25DbGljaygpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm1iLTQwXCI+XHJcbiAgICAgICAgICAgIHtpdGVtcy5tYXAoKGl0ZW0pID0+IChcclxuICAgICAgICAgICAgICAgIDxsaSBrZXk9e2l0ZW0udXJsICsgaXRlbS5uYW1lfSBjbGFzc05hbWU9e3N0eWxlcy5pdGVtfT5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtpdGVtLm9uQ2xpY2sgPyAnIycgOiBpdGVtLnVybH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xzeCgndzEwMCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbicsIHN0eWxlcy5idXR0b24pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9e2l0ZW0uaXNBY3RpdmUgPyAnY29udGFpbmVkJyA6ICd0ZXh0J31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0SWNvbj17aXRlbS5pY29uICYmIDxpbWcgY2xhc3NOYW1lPXtzdHlsZXMuaWNvbn0gc3JjPXtpdGVtLmljb259Lz59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5kSWNvbj17aXRlbS5oYXNNb3JlICYmIDxpbWcgc3JjPVwiL2RvdHMuc3ZnXCIvPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVDbGljayhpdGVtKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1yLWF1dG9cIj5cclxuICAgICAgICAgICAgICAgICAge2l0ZW0ubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICB7aXRlbS5uZXdDb3VudCA/IDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLm5ld0NvdW50fT4re2l0ZW0ubmV3Q291bnR9PC9zcGFuPiA6ICcnfVxyXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICA8L3VsPlxyXG4gICAgKTtcclxufTtcclxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY29udGFpbmVyXCI6IFwiTW9iaWxlUHJvZmlsZVBvcHVwX2NvbnRhaW5lcl9fMklIYnFcIixcblx0XCJoZWFkZXJcIjogXCJNb2JpbGVQcm9maWxlUG9wdXBfaGVhZGVyX18zSFlYVFwiLFxuXHRcImhlYWRlcl9wcm9maWxlXCI6IFwiTW9iaWxlUHJvZmlsZVBvcHVwX2hlYWRlcl9wcm9maWxlX18yamt5QlwiLFxuXHRcIm5hbWVcIjogXCJNb2JpbGVQcm9maWxlUG9wdXBfbmFtZV9fOGdldVNcIixcblx0XCJhdmFpbGFibGVcIjogXCJNb2JpbGVQcm9maWxlUG9wdXBfYXZhaWxhYmxlX18zQ0JnVVwiLFxuXHRcInNlY3Rpb24yXCI6IFwiTW9iaWxlUHJvZmlsZVBvcHVwX3NlY3Rpb24yX181STUxNVwiLFxuXHRcImJvZHlcIjogXCJNb2JpbGVQcm9maWxlUG9wdXBfYm9keV9fMXRyYnhcIixcblx0XCJkaXZpZGVyXCI6IFwiTW9iaWxlUHJvZmlsZVBvcHVwX2RpdmlkZXJfXzNXZGQ5XCIsXG5cdFwic2VhcmNoVGl0bGVcIjogXCJNb2JpbGVQcm9maWxlUG9wdXBfc2VhcmNoVGl0bGVfX010b0dtXCIsXG5cdFwic2VhcmNoVGl0bGVJbm5lclwiOiBcIk1vYmlsZVByb2ZpbGVQb3B1cF9zZWFyY2hUaXRsZUlubmVyX18yYXJRTlwiLFxuXHRcInNlYXJjaEl0ZW1zXCI6IFwiTW9iaWxlUHJvZmlsZVBvcHVwX3NlYXJjaEl0ZW1zX18ySU5iN1wiLFxuXHRcInNlYXJjaEl0ZW1cIjogXCJNb2JpbGVQcm9maWxlUG9wdXBfc2VhcmNoSXRlbV9fMzQtaDRcIixcblx0XCJzaG93QWxsXCI6IFwiTW9iaWxlUHJvZmlsZVBvcHVwX3Nob3dBbGxfXzExdHR0XCIsXG5cdFwiZm9vdGVyXCI6IFwiTW9iaWxlUHJvZmlsZVBvcHVwX2Zvb3Rlcl9fbDJxUWhcIlxufTtcbiIsImltcG9ydCBSZWFjdCwge3VzZVN0YXRlfSBmcm9tICdyZWFjdCc7XHJcblxyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vTW9iaWxlUHJvZmlsZVBvcHVwLm1vZHVsZS5zY3NzJztcclxuaW1wb3J0IEl0ZW0gZnJvbSBcIi4uL1NlYXJjaFBvcHVwL0l0ZW1cIjtcclxuaW1wb3J0IGNsc3ggZnJvbSBcImNsc3hcIjtcclxuaW1wb3J0IHtBdmF0YXIsIERpdmlkZXIsIFR5cG9ncmFwaHl9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5pbXBvcnQge3VzZVNlbGVjdG9yfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHtzZWxlY3RVc2VyU3RhdGV9IGZyb20gXCIuLi8uLi9yZWR1eC91c2VyL3VzZXIuc2VsZWN0b3JcIjtcclxuaW1wb3J0IHtCdXR0b259IGZyb20gXCIuLi9CdXR0b25cIjtcclxuaW1wb3J0IHtBdmFpbGFibGVGb3JXb3JrfSBmcm9tIFwiLi4vQXZhaWxhYmxlRm9yV29ya1wiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB7dXNlUm91dGVyfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuXHJcbmludGVyZmFjZSBTZWFyY2hQb3B1cFByb3BzIHtcclxuICAgIGNoZWNrZWQ/OiBib29sZWFuO1xyXG4gICAgb25DaGFuZ2U6IChldmVudDogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHZvaWQ7XHJcbiAgICBzZXRDaGVja2VkOiAodmFsdWU6IGJvb2xlYW4pID0+IHZvaWQ7XHJcbiAgICBpc0xvYWRpbmc6IGJvb2xlYW47XHJcbn1cclxuXHJcbmNvbnN0IG1vY2t1cCA9IHtcclxuICAgIGF1dGhvcnM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlkOiAxLFxyXG4gICAgICAgICAgICBuYW1lOiAn0KXQsNGA0YbQsCDQm9C10LvQvtCy0LjRhycsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlkOiAyLFxyXG4gICAgICAgICAgICBuYW1lOiAn0J3QsNGF0LDQuyDQldGJ0LXRgtC+0YLQvtCy0LjRhycsXHJcbiAgICAgICAgfSxcclxuICAgIF0sXHJcbiAgICBhcnRpY2xlczogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWQ6IDMsXHJcbiAgICAgICAgICAgIG5hbWU6ICfQodC+0YXQsC3Qv9C+0LTQutCw0YHRgiDQvdCwIEluZ3Rlcm5ldCcsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlkOiA0LFxyXG4gICAgICAgICAgICBuYW1lOiAn0KXQsCDRhdCwINGF0LAsINCz0L7QstC+0YDRjiDRjyDQstGB0LXQvCwg0LrQvtC80YMg0L3QtSDRgdC80LXRiNC90L4hJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWQ6IDUsXHJcbiAgICAgICAgICAgIG5hbWU6ICfQryDRgdC40LbRgyDQvdCwINC60YPRhdC90LUsINGF0LDQstCw0Y4g0LHQvtGA0YnRjCcsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlkOiA2LFxyXG4gICAgICAgICAgICBuYW1lOiAn0K8g0YHQuNC20YMg0L3QsCDQutGD0YXQvdC1LCDRhdCw0LLQsNGOINCx0L7RgNGJ0YwnLFxyXG4gICAgICAgIH0sXHJcbiAgICBdLFxyXG4gICAgdGFnczogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWQ6IDcsXHJcbiAgICAgICAgICAgIG5hbWU6ICfQodC+0YXQsC3Qv9C+0LTQutCw0YHRgiDQvdCwIEluZ3Rlcm5ldCcsXHJcbiAgICAgICAgfSxcclxuICAgIF0sXHJcbiAgICBjb21tZW50czogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWQ6IDgsXHJcbiAgICAgICAgICAgIG5hbWU6ICfQodC+0YXQsC3Qv9C+0LTQutCw0YHRgiDQvdCwIEluZ3Rlcm5ldCcsXHJcbiAgICAgICAgfSxcclxuICAgIF0sXHJcbiAgICBwb2RjYXN0czogW10sXHJcbn07XHJcblxyXG5jb25zdCBNb2JpbGVQcm9maWxlUG9wdXA6IFJlYWN0LkZDPFNlYXJjaFBvcHVwUHJvcHM+ID0gKHsgY2hlY2tlZCwgc2V0Q2hlY2tlZCwgaXNMb2FkaW5nLCBvbkNoYW5nZSB9KSA9PiB7XHJcbiAgICBjb25zdCB1c2VyID0gdXNlU2VsZWN0b3Ioc2VsZWN0VXNlclN0YXRlKVsnZGF0YSddO1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG5cclxuICAgIGNvbnN0IGhhbmRsZUNsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgIHJvdXRlci5wdXNoKCcvd3JpdGUnKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBvbkxvZ291dCA9ICgpID0+IHtcclxuICAgICAgICBpZiAod2luZG93Py5jb25maXJtKCfQktGLINC00LXQudGB0YLQstC40YLQtdC70YzQvdC+INGF0L7RgtC40YLQtSDQv9C+0LrQuNC90YPRgtGMINGB0LDQudGCID8nKSkge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5jb29raWUgPSAnYXV0aF90b2tlbicgKyAnPTsgTWF4LUFnZT0wJztcclxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3Rva2VuJyk7XHJcbiAgICAgICAgICAgIGxvY2F0aW9uLmhyZWYgPSAnLyc7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJvZHl9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5oZWFkZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVyX3Byb2ZpbGV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QXZhdGFyIGNsYXNzTmFtZT17Y2xzeCgnY3Vyc29yLXBvaW50ZXInLCBzdHlsZXMucm9vdCl9IGFsdD17dXNlcj8ubmFtZX0gc3JjPXt1c2VyPy5hdmF0YXJ9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17c3R5bGVzLm5hbWV9Pnt1c2VyLm5hbWV9PC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfSB2YXJpYW50PVwiY29udGFpbmVkXCIgY29sb3I9XCJzZWNvbmRhcnlcIiBjbGFzc05hbWU9XCJtdC0xMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICDQndCw0L/QuNGB0LDRgtGMXHJcbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xzeCgnbXQtMTUnLCBzdHlsZXMuYXZhaWxhYmxlKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEF2YWlsYWJsZUZvcldvcmsgY2hlY2tlZD17Y2hlY2tlZH0gb25DaGFuZ2U9e29uQ2hhbmdlfSBzZXRDaGVja2VkPXtzZXRDaGVja2VkfSBpc0xvYWRpbmc9e2lzTG9hZGluZ30vPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Nsc3goc3R5bGVzLnNlY3Rpb24yLCAnZC1mbGV4IGZsZXgtY29sdW1uJyl9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvcHJvZmlsZS8ke3VzZXIuaWR9P3R5cGU9YXJ0aWNsZXNgfT48YSBjbGFzc05hbWU9XCJtYi0zXCI+0KHRgtCw0YLRjNC4PC9hPjwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgL3Byb2ZpbGUvJHt1c2VyLmlkfT90eXBlPWRyYWZ0c2B9PjxhIGNsYXNzTmFtZT1cIm1iLTNcIj7Qp9C10YDQvdC+0LLQuNC60Lg8L2E+PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9eycvcHJvZmlsZSd9PjxhIGNsYXNzTmFtZT1cIm1iLTNcIj7QndCw0YHRgtGA0L7QudC60Lg8L2E+PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPERpdmlkZXIgY2xhc3NOYW1lPXtzdHlsZXMuZGl2aWRlcn0gLz5cclxuXHJcbiAgICAgICAgICAgICAgICA8YSBvbkNsaWNrPXtvbkxvZ291dH0gY2xhc3NOYW1lPXtjbHN4KHN0eWxlcy5zZWN0aW9uMiwgJ2QtZmxleCBmbGV4LWNvbHVtbicpfT7QktGL0LnRgtC4PC9hPlxyXG5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTW9iaWxlUHJvZmlsZVBvcHVwO1xyXG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJwYXBlclwiOiBcIk5hdmlnYXRpb25fcGFwZXJfXzFhN0xiXCIsXG5cdFwicm9vdFwiOiBcIk5hdmlnYXRpb25fcm9vdF9fTTc0d3RcIixcblx0XCJtYWluTGlzdFwiOiBcIk5hdmlnYXRpb25fbWFpbkxpc3RfX1JpT1gzXCIsXG5cdFwiaXRlbVwiOiBcIk5hdmlnYXRpb25faXRlbV9fMjROOFFcIixcblx0XCJtYWluSXRlbUJvbGRUZXh0XCI6IFwiTmF2aWdhdGlvbl9tYWluSXRlbUJvbGRUZXh0X18ySWE0RlwiLFxuXHRcImNsb3NlQnV0dG9uXCI6IFwiTmF2aWdhdGlvbl9jbG9zZUJ1dHRvbl9fMlFuNE5cIixcblx0XCJjbG9zZUljb25cIjogXCJOYXZpZ2F0aW9uX2Nsb3NlSWNvbl9fMm80S2dcIixcblx0XCJsb2dvdXRcIjogXCJOYXZpZ2F0aW9uX2xvZ291dF9fMVlOU2ZcIlxufTtcbiIsImltcG9ydCB7IERpdmlkZXIsIERyYXdlciwgTWVudUl0ZW0gfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcblxyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vTmF2aWdhdGlvbi5tb2R1bGUuc2Nzcyc7XHJcbmltcG9ydCB7c2VsZWN0VXNlclN0YXRlfSBmcm9tIFwiLi4vLi4vcmVkdXgvdXNlci91c2VyLnNlbGVjdG9yXCI7XHJcbmltcG9ydCB7U2lkZUJsb2NrfSBmcm9tIFwiLi4vU2lkZUJsb2NrXCI7XHJcbmltcG9ydCB7TWVudUxpc3R9IGZyb20gXCIuLi9NZW51TGlzdFwiO1xyXG5pbXBvcnQge1RhZ3N9IGZyb20gXCIuLi9UYWdzXCI7XHJcbmltcG9ydCB7VGhlbWV9IGZyb20gXCIuLi8uLi9pbnRlcmZhY2VzXCI7XHJcbmltcG9ydCB7c2VsZWN0Q2F0ZWdvcmllc1N0YXRlLCBzZWxlY3RUaGVtZXNTdGF0ZX0gZnJvbSBcIi4uLy4uL3JlZHV4L2RpcmVjdG9yeS9kaXJlY3Rvcnkuc2VsZWN0b3JcIjtcclxuXHJcbmludGVyZmFjZSBOYXZpZ2F0aW9uUHJvcHMge1xyXG4gIG1lbnVPcGVuZWQ6IGJvb2xlYW47XHJcbiAgb25DbG9zZTogKCkgPT4gdm9pZDtcclxufVxyXG5cclxuY29uc3QgbWVlbHogPSBbXHJcbiAge1xyXG4gICAgdGl0bGU6ICdDaGVmcycsXHJcbiAgICBsaW5rOiAnL2NoZWZzJyxcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiAnRGVsaXZlcnkgTWVudScsXHJcbiAgICBsaW5rOiAnL21lbnUnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6ICdSZWNpcGUgQm94ZXMnLFxyXG4gICAgbGluazogJy9yZWNpcGVzJyxcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiAnQ2hlZnMgVGFibGUnLFxyXG4gICAgbGluazogJy9jaGVmcy10YWJsZScsXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogJ1N0b3JlJyxcclxuICAgIGxpbms6ICcvY2hlZnMtc3RvcmUnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6ICdNYXN0ZXJjbGFzc2VzJyxcclxuICAgIGxpbms6ICcvbWFzdGVyLWNsYXNzZXMnLFxyXG4gIH0sXHJcbl07XHJcblxyXG5jb25zdCBhYm91dCA9IFtcclxuICB7XHJcbiAgICB0aXRsZTogJ0Fib3V0IFVzJyxcclxuICAgIGxpbms6ICcvYWJvdXQnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6ICdDYXJlZXInLFxyXG4gICAgbGluazogJy9jYXJlZXInLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6ICdGQVFzJyxcclxuICAgIGxpbms6ICcvZmFxJyxcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiAnQ29udGFjdCB1cycsXHJcbiAgICBsaW5rOiAnL2NvbnRhY3RfdXMnLFxyXG4gIH0sXHJcbl07XHJcblxyXG5leHBvcnQgY29uc3QgTmF2aWdhdGlvbkRyYXdlcjogUmVhY3QuRkM8TmF2aWdhdGlvblByb3BzPiA9ICh7IG1lbnVPcGVuZWQsIG9uQ2xvc2UgfSk6IFJlYWN0LlJlYWN0RWxlbWVudCA9PiB7XHJcbiAgY29uc3QgdXNlciA9IHVzZVNlbGVjdG9yKHNlbGVjdFVzZXJTdGF0ZSlbJ2RhdGEnXTtcclxuICBjb25zdCBbc2VsZWN0ZWRUaGVtZXMsIHNldFNlbGVjdGVkVGhlbWVzXSA9IHVzZVN0YXRlPFRoZW1lW10+KFtdKTtcclxuICBjb25zdCB0aGVtZXMgPSB1c2VTZWxlY3RvcihzZWxlY3RUaGVtZXNTdGF0ZSk7XHJcbiAgY29uc3QgY2F0ZWdvcmllcyA9IHVzZVNlbGVjdG9yKHNlbGVjdENhdGVnb3JpZXNTdGF0ZSk7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gIGNvbnN0IGhhbmRsZUxvZ291dCA9ICgpOiB2b2lkID0+IHtcclxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuY29uZmlybSgnQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGxvZyBvdXQ/JykpIHtcclxuICAgICAgdHJ1ZVxyXG4gICAgfVxyXG4gIH07XHJcblxyXG5cclxuICBjb25zdCBoYW5kbGVTZWxlY3RUaGVtZSA9IGFzeW5jICh0OiBUaGVtZSkgPT4ge1xyXG4gICAgc2V0U2VsZWN0ZWRUaGVtZXMoKCkgPT4gWy4uLnNlbGVjdGVkVGhlbWVzLCB0XSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPERyYXdlciBlbGV2YXRpb249ezB9IGFuY2hvcj1cImxlZnRcIiBjbGFzc2VzPXt7IHBhcGVyOiBzdHlsZXMucGFwZXIgfX0gb3Blbj17bWVudU9wZW5lZH0gb25DbG9zZT17b25DbG9zZX0+XHJcbiAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuY2xvc2VCdXR0b259IG9uQ2xpY2s9e29uQ2xvc2V9PlxyXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmNsb3NlSWNvbn0gLz5cclxuICAgICAgPC9idXR0b24+XHJcbiAgICAgIDxuYXYgY2xhc3NOYW1lPXtzdHlsZXMucm9vdH0+XHJcblxyXG4gICAgICAgIDxMaW5rIGhyZWY9XCIvc3BlY2lhbGlzdHNcIj5cclxuICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImQtZmxleCBtYi0zIG1sLTEwXCI+XHJcbiAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwibXItMTBcIiBzcmM9XCIvdXNlcnMuc3ZnXCIgYWx0PVwi0KHQv9C10YbQuNCw0LvQuNGB0YLRi1wiLz5cclxuICAgICAgICAgICAg0KHQv9C10YbQuNCw0LvQuNGB0YLRi1xyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvTGluaz5cclxuXHJcbiAgICAgICAgPFNpZGVCbG9jayBuYW1lPVwi0JrQsNGC0LXQs9C+0YDQuNC4XCI+XHJcbiAgICAgICAgICA8TWVudUxpc3RcclxuICAgICAgICAgICAgICBpdGVtcz17Y2F0ZWdvcmllcy5tYXAoYyA9PiAoe1xyXG4gICAgICAgICAgICAgICAgbmFtZTogYy5uYW1lLFxyXG4gICAgICAgICAgICAgICAgdXJsOiBgL3RhZ3MvJHtjLnNsdWd9YCxcclxuICAgICAgICAgICAgICAgIGljb246IGAvJHtjLnNsdWd9LnBuZ2BcclxuICAgICAgICAgICAgICB9KSl9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvU2lkZUJsb2NrPlxyXG4gICAgICAgIDxTaWRlQmxvY2sgbmFtZT1cItCi0LXQvNGLXCI+XHJcbiAgICAgICAgICA8VGFnc1xyXG4gICAgICAgICAgICAgIGl0ZW1zPXt0aGVtZXN9XHJcbiAgICAgICAgICAgICAgaGFuZGxlU2VsZWN0PXtoYW5kbGVTZWxlY3RUaGVtZX1cclxuICAgICAgICAgICAgICBzZWxlY3RlZEl0ZW1zPXtzZWxlY3RlZFRoZW1lc31cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9TaWRlQmxvY2s+XHJcbiAgICAgICAge3VzZXIgJiYgKFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5sb2dvdXR9PlxyXG4gICAgICAgICAgICA8RGl2aWRlciAvPlxyXG4gICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgPE1lbnVJdGVtIGNsYXNzTmFtZT17c3R5bGVzLml0ZW19IG9uQ2xpY2s9e2hhbmRsZUxvZ291dH0+XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkxXCI+TG9nb3V0PC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApfVxyXG4gICAgICA8L25hdj5cclxuICAgIDwvRHJhd2VyPlxyXG4gICk7XHJcbn07XHJcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIm5vdGlmaWNhdGlvblwiOiBcIk5vdGlmaWNhdGlvbkRyb3Bkb3duX25vdGlmaWNhdGlvbl9fX2ZCZWhcIixcblx0XCJub3RpZmljYXRpb25MaXN0XCI6IFwiTm90aWZpY2F0aW9uRHJvcGRvd25fbm90aWZpY2F0aW9uTGlzdF9fMUp6Z3dcIixcblx0XCJsaXN0Q29udGVudFwiOiBcIk5vdGlmaWNhdGlvbkRyb3Bkb3duX2xpc3RDb250ZW50X18xV0VWb1wiLFxuXHRcInRpdGxlXCI6IFwiTm90aWZpY2F0aW9uRHJvcGRvd25fdGl0bGVfXzM0cklQXCIsXG5cdFwibm90aWZpY2F0aW9uUG9wdXBcIjogXCJOb3RpZmljYXRpb25Ecm9wZG93bl9ub3RpZmljYXRpb25Qb3B1cF9fN2MwcTRcIixcblx0XCJpdGVtXCI6IFwiTm90aWZpY2F0aW9uRHJvcGRvd25faXRlbV9fc2NsT29cIixcblx0XCJhdmF0YXJcIjogXCJOb3RpZmljYXRpb25Ecm9wZG93bl9hdmF0YXJfXzE3c2Q1XCIsXG5cdFwibGlrZUJsb2NrXCI6IFwiTm90aWZpY2F0aW9uRHJvcGRvd25fbGlrZUJsb2NrX18yWUlzWFwiXG59O1xuIiwiaW1wb3J0IHtBdmF0YXIsIEJhZGdlLCBJY29uQnV0dG9uLCBMaXN0LCBQb3BvdmVyLCBUeXBvZ3JhcGh5fSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcbmltcG9ydCBmb3JtYXQgZnJvbSAnZGF0ZS1mbnMvZm9ybWF0JztcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9Ob3RpZmljYXRpb25Ecm9wZG93bi5tb2R1bGUuc2Nzcyc7XHJcbmltcG9ydCB7Tm90aWZpY2F0aW9uLCBVc2VyfSBmcm9tIFwiLi4vLi4vaW50ZXJmYWNlc1wiO1xyXG5pbXBvcnQge3VzZVNlbGVjdG9yfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHtzZWxlY3RVc2VyTm90aWZpY2F0aW9uc30gZnJvbSBcIi4uLy4uL3JlZHV4L3VzZXIvdXNlci5zZWxlY3RvclwiO1xyXG5pbXBvcnQgSXRlbSBmcm9tIFwiLi9pdGVtXCI7XHJcblxyXG5leHBvcnQgY29uc3QgTm90aWZpY2F0aW9uRHJvcGRvd246IFJlYWN0LkZDID0gKCk6IFJlYWN0LlJlYWN0RWxlbWVudCA9PiB7XHJcbiAgICBjb25zdCBbYW5jaG9yRWwsIHNldEFuY2hvckVsXSA9IFJlYWN0LnVzZVN0YXRlPEhUTUxCdXR0b25FbGVtZW50IHwgbnVsbD4obnVsbCk7XHJcbiAgICBjb25zdCBvcGVuID0gQm9vbGVhbihhbmNob3JFbCk7XHJcbiAgICBjb25zdCBub3RpZmljYXRpb25zID0gdXNlU2VsZWN0b3Ioc2VsZWN0VXNlck5vdGlmaWNhdGlvbnMpO1xyXG5cclxuXHJcbiAgICBjb25zdCB0b2dnbGVPcGVuUG9wdXAgPSAoZXZlbnQ6IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTEJ1dHRvbkVsZW1lbnQ+KTogdm9pZCA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coMTIzMCk7XHJcbiAgICAgICAgc2V0QW5jaG9yRWwoYW5jaG9yRWwgPyBudWxsIDogZXZlbnQuY3VycmVudFRhcmdldCk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZUNsb3NlID0gKCk6IHZvaWQgPT4ge1xyXG4gICAgICAgIHNldEFuY2hvckVsKG51bGwpO1xyXG5cclxuICAgICAgICAvLyAoYXN5bmMgKCk6IFByb21pc2U8dm9pZD4gPT4ge1xyXG4gICAgICAgIC8vICAgYXdhaXQgQXhpb3MucHV0KGAke0VuZHBvaW50cy5OT1RJRklDQVRJT05TfS9yZWFkYCk7XHJcbiAgICAgICAgLy8gfSkoKTtcclxuICAgICAgICAvL1xyXG4gICAgICAgIC8vIGNvbnN0IG5ld0l0ZW1SZWFkID0gbmV3SXRlbS5tYXAoKGl0ZW0pID0+IHtcclxuICAgICAgICAvLyAgIGlmIChpdGVtLnJlYWRBdCA9PT0gbnVsbCkge1xyXG4gICAgICAgIC8vICAgICByZXR1cm4geyAuLi5pdGVtLCByZWFkQXQ6IG5ldyBEYXRlKCkgfTtcclxuICAgICAgICAvLyAgIH1cclxuICAgICAgICAvLyAgIHJldHVybiBpdGVtO1xyXG4gICAgICAgIC8vIH0pO1xyXG5cclxuICAgICAgICAvLyBzZXROZXdJdGVtKG5ld0l0ZW1SZWFkKTtcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm5vdGlmaWNhdGlvbn0+XHJcbiAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiBvbkNsaWNrPXt0b2dnbGVPcGVuUG9wdXB9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwibWwtMTAgY3Vyc29yLXBvaW50ZXJcIiBzcmM9XCIvbm90aWZpY2F0aW9ucy5zdmdcIiBhbHQ9XCLQo9Cy0LXQtNC+0LzQu9C10L3QuNGPXCIvPlxyXG4gICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxQb3BvdmVyXHJcbiAgICAgICAgICAgICAgICBlbGV2YXRpb249ezB9XHJcbiAgICAgICAgICAgICAgICBjbGFzc2VzPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFwZXI6IHN0eWxlcy5ub3RpZmljYXRpb25Qb3B1cCxcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICBvbkNsb3NlPXtoYW5kbGVDbG9zZX1cclxuICAgICAgICAgICAgICAgIGFuY2hvckVsPXthbmNob3JFbH1cclxuICAgICAgICAgICAgICAgIGFuY2hvck9yaWdpbj17e1xyXG4gICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsOiAnYm90dG9tJyxcclxuICAgICAgICAgICAgICAgICAgICBob3Jpem9udGFsOiAnbGVmdCcsXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtT3JpZ2luPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgdmVydGljYWw6ICd0b3AnLFxyXG4gICAgICAgICAgICAgICAgICAgIGhvcml6b250YWw6ICdjZW50ZXInLFxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIG9wZW49e29wZW59XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGwtMjUgcHItMjUgcGItMjVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0gdmFyaWFudD1cIm92ZXJsaW5lXCIgZGlzcGxheT1cImJsb2NrXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxiIGNsYXNzTmFtZT1cIm9wYWNpdHktNlwiPtCj0LLQtdC00L7QvNC70LXQvdC40Y88L2I+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm5vdGlmaWNhdGlvbkxpc3R9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGlzdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtub3RpZmljYXRpb25zLmxlbmd0aCA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3RpZmljYXRpb25zLm1hcCgobm90aWZpY2F0aW9uKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtub3RpZmljYXRpb24uaWR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEl0ZW0gaXRlbT17bm90aWZpY2F0aW9ufSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTQwIG10LTMwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE5PVCBGT1VORFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaXN0PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvUG9wb3Zlcj5cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbn07XHJcbiIsImltcG9ydCB7QXZhdGFyfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9Ob3RpZmljYXRpb25Ecm9wZG93bi5tb2R1bGUuc2Nzc1wiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7Q29tbWVudCwgTGlrZWFibGUsIE5vdGlmaWNhdGlvbiwgUG9zdERhdGF9IGZyb20gXCIuLi8uLi9pbnRlcmZhY2VzXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcblxyXG50eXBlIFByb3BzID0ge1xyXG4gICAgaXRlbTogTm90aWZpY2F0aW9uPExpa2VhYmxlIHwgUG9zdERhdGEgfCBDb21tZW50PixcclxufVxyXG5cclxuY29uc3QgQWRkQ29tbWVudEl0ZW0gPSAoe25vdGlmaWNhdGlvbn06IHsgbm90aWZpY2F0aW9uOiBOb3RpZmljYXRpb248Q29tbWVudD4gfSkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLml0ZW19PlxyXG4gICAgICAgICAgICA8QXZhdGFyIGFsdD17J1VzZXInfSBzcmM9e25vdGlmaWNhdGlvbi5kYXRhPy51c2VyPy5hdmF0YXJ9IGNsYXNzTmFtZT17c3R5bGVzLmF2YXRhcn0vPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxpc3RDb250ZW50fT5cclxuICAgICAgICAgICAgICAgIDxiPntub3RpZmljYXRpb24uZGF0YS51c2VyLm5hbWV9PC9iPiDQvdCw0L/QuNGB0LDQuyDQutC+0LzQvNC10L3RgtCw0YDQuNC5INC6INC30LDQv9C40YHQuCZuYnNwO1xyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj17JyMnfT5cclxuICAgICAgICAgICAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgICAgICAgICAgICAg4oCce25vdGlmaWNhdGlvbi5kYXRhLnBvc3QudGl0bGV94oCdXHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuY29uc3QgUmVwbHlUb0NvbW1lbnRJdGVtID0gKHtub3RpZmljYXRpb259OiB7IG5vdGlmaWNhdGlvbjogTm90aWZpY2F0aW9uPENvbW1lbnQ+IH0pID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pdGVtfT5cclxuICAgICAgICAgICAgPEF2YXRhciBhbHQ9eydVc2VyJ30gc3JjPXtub3RpZmljYXRpb24uZGF0YT8udXNlcj8uYXZhdGFyfSBjbGFzc05hbWU9e3N0eWxlcy5hdmF0YXJ9Lz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5saXN0Q29udGVudH0+XHJcbiAgICAgICAgICAgICAgICA8Yj57bm90aWZpY2F0aW9uLmRhdGEudXNlci5uYW1lfTwvYj4g0L7RgtCy0LXRgtC40Lsg0L3QsCDQktCw0Ygg0LrQvtC80LzQtdC90YLQsNGA0LjQuSDQuiDQt9Cw0L/QuNGB0LgmbmJzcDtcclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9eycjJ30+XHJcbiAgICAgICAgICAgICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIOKAnHtub3RpZmljYXRpb24uZGF0YS5wb3N0LnRpdGxlfeKAnVxyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmNvbnN0IFNldExpa2VPckRpc2xpa2VJdGVtID0gKHtub3RpZmljYXRpb259OiB7IG5vdGlmaWNhdGlvbjogTm90aWZpY2F0aW9uPExpa2VhYmxlPiB9KSA9PiB7XHJcbiAgICBjb25zdCBpc0xpa2UgPSBub3RpZmljYXRpb24uZGF0YS50eXBlID09PSAnbGlrZSdcclxuXHJcbiAgICBpZiAobm90aWZpY2F0aW9uLmRhdGEubGlrZWFibGVfdHlwZS5pbmNsdWRlcygnQ29tbWVudCcpKSB7XHJcbiAgICAgICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaXRlbX0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubGlrZUJsb2NrfT5cclxuICAgICAgICAgICAgICAgIDxBdmF0YXIgYWx0PXsnVXNlcid9IHNyYz17bm90aWZpY2F0aW9uLmRhdGE/LnVzZXI/LmF2YXRhcn0gY2xhc3NOYW1lPXtzdHlsZXMuYXZhdGFyfS8+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz17aXNMaWtlID8gJy9saWtlLnN2ZycgOiAnL2Rpc2xpa2Uuc3ZnJ30gLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubGlzdENvbnRlbnR9PlxyXG4gICAgICAgICAgICAgICAgPGI+e25vdGlmaWNhdGlvbi5kYXRhLnVzZXIubmFtZX08L2I+INC/0L7RgdGC0LDQstC40Lsge2lzTGlrZSA/ICfQu9Cw0LnQuicgOiAn0LTQuNC30LvQsNC50LonfSDQvdCwINC60L7QvNC10L3RgtCw0YDQuNC5Jm5ic3A7XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPXsnIyd9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICDigJx7bm90aWZpY2F0aW9uLmRhdGEuY29tbWVudC50ZXh0feKAnVxyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLml0ZW19PlxyXG4gICAgICAgICAgICA8QXZhdGFyIGFsdD17J1VzZXInfSBzcmM9e25vdGlmaWNhdGlvbi5kYXRhPy51c2VyPy5hdmF0YXJ9IGNsYXNzTmFtZT17c3R5bGVzLmF2YXRhcn0vPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxpc3RDb250ZW50fT5cclxuICAgICAgICAgICAgICAgIDxiPntub3RpZmljYXRpb24uZGF0YS51c2VyLm5hbWV9PC9iPiDQv9C+0YHRgtCw0LLQuNC7IHtpc0xpa2UgPyAn0LvQsNC50LonIDogJ9C00LjQt9C70LDQudC6J30g0L3QsCDQt9Cw0L/QuNGB0YwmbmJzcDtcclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9eycjJ30+XHJcbiAgICAgICAgICAgICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIOKAnHtub3RpZmljYXRpb24uZGF0YS5wb3N0LnRpdGxlfeKAnVxyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJdGVtKHtpdGVtfTogUHJvcHMpIHtcclxuXHJcbiAgICBpZiAoaXRlbS50eXBlLmluY2x1ZGVzKCdBZGRDb21tZW50Tm90aWZpY2F0aW9uJykpIHtcclxuICAgICAgICByZXR1cm4gPEFkZENvbW1lbnRJdGVtIG5vdGlmaWNhdGlvbj17aXRlbSBhcyBOb3RpZmljYXRpb248Q29tbWVudD59Lz5cclxuICAgIH1cclxuXHJcbiAgICBpZiAoaXRlbS50eXBlLmluY2x1ZGVzKCdSZXBseVRvQ29tbWVudE5vdGlmaWNhdGlvbicpKSB7XHJcbiAgICAgICAgcmV0dXJuIDxSZXBseVRvQ29tbWVudEl0ZW0gbm90aWZpY2F0aW9uPXtpdGVtIGFzIE5vdGlmaWNhdGlvbjxDb21tZW50Pn0vPlxyXG4gICAgfVxyXG5cclxuICAgIGlmIChpdGVtLnR5cGUuaW5jbHVkZXMoJ1NldExpa2VPckRpc2xpa2VOb3RpZmljYXRpb24nKSkge1xyXG4gICAgICAgIHJldHVybiA8U2V0TGlrZU9yRGlzbGlrZUl0ZW0gbm90aWZpY2F0aW9uPXtpdGVtIGFzIE5vdGlmaWNhdGlvbjxMaWtlYWJsZT59Lz5cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gbnVsbDtcclxuXHJcbn1cclxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwidGltZVwiOiBcIlBhc3RUaW1lTGFiZWxfdGltZV9fUnVqS0FcIixcblx0XCJ0aW1lV2l0aExlZnRTaWRlUG9pbnRcIjogXCJQYXN0VGltZUxhYmVsX3RpbWVXaXRoTGVmdFNpZGVQb2ludF9fMjB3eXhcIlxufTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9QYXN0VGltZUxhYmVsLm1vZHVsZS5zY3NzJztcclxuaW1wb3J0IHsgZm9ybWF0RGlzdGFuY2VUb05vdyB9IGZyb20gJ2RhdGUtZm5zJztcclxuaW1wb3J0IHsgcnUgfSBmcm9tICdkYXRlLWZucy9sb2NhbGUnO1xyXG5pbXBvcnQgY2xzeCBmcm9tICdjbHN4JztcclxuXHJcbmludGVyZmFjZSBQYXN0VGltZUxhYmVsUHJvcHMge1xyXG4gIHRpbWU6IG51bWJlcjtcclxuICBsZWZ0U2lkZVBvaW50PzogYm9vbGVhbjtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFBhc3RUaW1lTGFiZWw6IFJlYWN0LkZDPFBhc3RUaW1lTGFiZWxQcm9wcz4gPSAoeyB0aW1lLCBsZWZ0U2lkZVBvaW50IH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPHNwYW4gY2xhc3NOYW1lPXtjbHN4KHN0eWxlcy50aW1lLCB7W3N0eWxlcy50aW1lV2l0aExlZnRTaWRlUG9pbnRdOiBsZWZ0U2lkZVBvaW50fSl9PlxyXG4gICAgICB7Zm9ybWF0RGlzdGFuY2VUb05vdyh0aW1lLCB7IGxvY2FsZTogcnUsIGFkZFN1ZmZpeDogdHJ1ZSB9KX1cclxuICAgIDwvc3Bhbj5cclxuICApO1xyXG59O1xyXG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjb21tZW50XCI6IFwiUG9zdENvbW1lbnRMaXN0X2NvbW1lbnRfXzFNa3hpXCIsXG5cdFwiY29tbWVudEZsZXhcIjogXCJQb3N0Q29tbWVudExpc3RfY29tbWVudEZsZXhfXzJCcnppXCIsXG5cdFwidGV4dFwiOiBcIlBvc3RDb21tZW50TGlzdF90ZXh0X19ULWVKalwiLFxuXHRcInJlcGx5XCI6IFwiUG9zdENvbW1lbnRMaXN0X3JlcGx5X18xOThEZlwiXG59O1xuIiwiaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9Qb3N0Q29tbWVudExpc3QubW9kdWxlLnNjc3NcIjtcclxuaW1wb3J0IHtVc2VyVmlld09uQ29udGVudH0gZnJvbSBcIi4uL1VzZXJWaWV3T25Db250ZW50XCI7XHJcbmltcG9ydCB7TGlrZUJsb2NrLCBMaWtlQmxvY2tSZXN1bHR9IGZyb20gXCIuLi9MaWtlQmxvY2tcIjtcclxuaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge0NvbW1lbnR9IGZyb20gXCIuLi8uLi9pbnRlcmZhY2VzXCI7XHJcbmltcG9ydCB7QWRkQ29tbWVudEJsb2NrfSBmcm9tIFwiLi4vQWRkQ29tbWVudEJsb2NrXCI7XHJcbmltcG9ydCB7RHJvcGRvd259IGZyb20gXCIuLi9Ecm9wZG93blwiO1xyXG5pbXBvcnQgTXVpTWVudUl0ZW0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTWVudUl0ZW0nO1xyXG5cclxudHlwZSBQcm9wcyA9IHtcclxuICAgIGNvbW1lbnQ6IENvbW1lbnQ7XHJcbiAgICBvblJlcGx5Q29tbWVudDogKHRleHQ6IHN0cmluZywgdXNlcklkOiBudW1iZXIsIHBhcmVudElkOiBudW1iZXIsIGNvbW1lbnRJZD86IG51bWJlcikgPT4gdm9pZDtcclxuICAgIGlzQ2hpbGRyZW4/OiBib29sZWFuO1xyXG4gICAgdXNlckNhbkNoYW5nZUNvbW1lbnQ/OiBib29sZWFuO1xyXG4gICAgb25TZXRMaWtlOiAocG9zdElkOiBudW1iZXIsIGxpa2U6IHVua25vd24pID0+IHZvaWQ7XHJcbiAgICBpc015Q29tbWVudDogYm9vbGVhbjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFBvc3RDb21tZW50KHtjb21tZW50LCBvblJlcGx5Q29tbWVudCwgaXNDaGlsZHJlbiwgb25TZXRMaWtlLCBpc015Q29tbWVudH06IFByb3BzKSB7XHJcbiAgICBjb25zdCBbc2hvd1JlcGx5LCBzZXRTaG93UmVwbHldID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW3Nob3dDaGFuZ2UsIHNldFNob3dDaGFuZ2VdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW2xpa2VzQW5kRGlzbGlrZXMsIHNldExpa2VzQW5kRGlzbGlrZXNdID0gUmVhY3QudXNlU3RhdGU8TGlrZUJsb2NrUmVzdWx0Pih7XHJcbiAgICAgICAgbGlrZXM6IGNvbW1lbnQubGlrZXNfY291bnQsXHJcbiAgICAgICAgZGlzbGlrZXM6IGNvbW1lbnQuZGlzbGlrZXNfY291bnQsXHJcbiAgICAgICAgdm90ZTogY29tbWVudD8ubGlrZWRfdHlwZSxcclxuICAgIH0pO1xyXG5cclxuXHJcbiAgICBjb25zdCBoYW5kbGVDb21tZW50U2V0TGlrZSA9IChsaWtlOiBMaWtlQmxvY2tSZXN1bHQpID0+IHtcclxuICAgICAgICBzZXRMaWtlc0FuZERpc2xpa2VzKGxpa2UpO1xyXG4gICAgICAgIG9uU2V0TGlrZShjb21tZW50LmlkLCBsaWtlLnZvdGUpXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgb25DbG9zZUlucHV0ID0gKCkgPT4ge1xyXG4gICAgICAgIHNldFNob3dDaGFuZ2UoZmFsc2UpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IG9uU2F2ZUNvbW1lbnQgPSBhc3luYyAodGV4dDogc3RyaW5nLCB1c2VySWQ6IG51bWJlciwgcGFyZW50SWQ/OiBudW1iZXIsIGNvbW1lbnRJZD86IG51bWJlcikgPT4ge1xyXG4gICAgICAgIGF3YWl0IG9uUmVwbHlDb21tZW50KHRleHQsIHVzZXJJZCwgcGFyZW50SWQsIGNvbW1lbnRJZClcclxuICAgICAgICBvbkNsb3NlSW5wdXQoKVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbW1lbnR9IHN0eWxlPXt7bWFyZ2luTGVmdDogaXNDaGlsZHJlbiA/IDEwIDogMH19PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29tbWVudEZsZXh9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnVzZXJ9PlxyXG4gICAgICAgICAgICAgICAgPFVzZXJWaWV3T25Db250ZW50XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRpbWU9e25ldyBEYXRlKGNvbW1lbnQuY3JlYXRlZF9hdCkuZ2V0VGltZSgpfVxyXG4gICAgICAgICAgICAgICAgICAgIHVzZXI9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogY29tbWVudC51c2VyLm5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBjb21tZW50LnVzZXIuaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGF2YXRhclVybDogY29tbWVudC51c2VyLmF2YXRhclxyXG4gICAgICAgICAgICAgICAgICAgIH19Lz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICB7aXNNeUNvbW1lbnQgJiYgKCA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmFjdGlvbnN9PlxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1sLTEwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJsYXk9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+PGltZyBzcmM9e1wiL2RvdHMuc3ZnXCJ9Lz48L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxNdWlNZW51SXRlbSBkaXNhYmxlZD17ZmFsc2V9IG9uQ2xpY2s9eygpID0+IHNldFNob3dDaGFuZ2UodHJ1ZSl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAg0JjQt9C80LXQvdC40YLRjFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L011aU1lbnVJdGVtPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE11aU1lbnVJdGVtIGRpc2FibGVkPXtmYWxzZX0gb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgINCj0LTQsNC70LjRgtGMXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTXVpTWVudUl0ZW0+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDwvRHJvcGRvd24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDwvZGl2Pil9XHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRleHR9PlxyXG4gICAgICAgICAgICB7IXNob3dDaGFuZ2UgPyBjb21tZW50LnRleHQgOiA8QWRkQ29tbWVudEJsb2NrXHJcbiAgICAgICAgICAgICAgICBjb21tZW50PXtjb21tZW50fVxyXG4gICAgICAgICAgICAgICAgb25BZGRDb21tZW50PXtvblNhdmVDb21tZW50fVxyXG4gICAgICAgICAgICAgICAgdG9Vc2VyPXtjb21tZW50LnVzZXJ9XHJcbiAgICAgICAgICAgICAgICBwYXJlbnRDb21tZW50PXtjb21tZW50fVxyXG5cclxuICAgICAgICAgICAgLz59XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbW1lbnRGbGV4fT5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMucmVwbHl9IG9uQ2xpY2s9eygpID0+IHNldFNob3dSZXBseSghc2hvd1JlcGx5KX0+0J7RgtCy0LXRgtC40YLRjDwvc3Bhbj5cclxuXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8TGlrZUJsb2NrXHJcbiAgICAgICAgICAgICAgICAgICAgdm90ZT17bGlrZXNBbmREaXNsaWtlcy52b3RlfVxyXG4gICAgICAgICAgICAgICAgICAgIGxpa2VzPXtsaWtlc0FuZERpc2xpa2VzLmxpa2VzfVxyXG4gICAgICAgICAgICAgICAgICAgIGRpc2xpa2VzPXtsaWtlc0FuZERpc2xpa2VzLmRpc2xpa2VzfVxyXG4gICAgICAgICAgICAgICAgICAgIG1vZGU9XCJmdWxsXCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ29tbWVudFNldExpa2V9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIHtzaG93UmVwbHkgJiYgPEFkZENvbW1lbnRCbG9jayBvbkFkZENvbW1lbnQ9e29uU2F2ZUNvbW1lbnR9IHRvVXNlcj17Y29tbWVudC51c2VyfSBwYXJlbnRDb21tZW50PXtjb21tZW50fS8+fVxyXG5cclxuICAgIDwvZGl2PjtcclxufVxyXG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJwb3BvdmVyXCI6IFwiUHJvZmlsZVBvcHVwX3BvcG92ZXJfXzJ1YUFXXCIsXG5cdFwicGFwZXJcIjogXCJQcm9maWxlUG9wdXBfcGFwZXJfXzFFMnh0XCIsXG5cdFwic2VjdGlvbjFcIjogXCJQcm9maWxlUG9wdXBfc2VjdGlvbjFfXzJyV3MxXCIsXG5cdFwic2VjdGlvbjJcIjogXCJQcm9maWxlUG9wdXBfc2VjdGlvbjJfXzNYOEhoXCIsXG5cdFwiZGl2aWRlclwiOiBcIlByb2ZpbGVQb3B1cF9kaXZpZGVyX18yWUprN1wiLFxuXHRcImF2YXRhclwiOiBcIlByb2ZpbGVQb3B1cF9hdmF0YXJfXzFyYWhFXCIsXG5cdFwibmFtZVwiOiBcIlByb2ZpbGVQb3B1cF9uYW1lX19ub3UwbFwiLFxuXHRcImxvZ2luXCI6IFwiUHJvZmlsZVBvcHVwX2xvZ2luX18zMWZBZlwiXG59O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgUG9wb3ZlciwgQXZhdGFyLCBEaXZpZGVyIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vUHJvZmlsZVBvcHVwLm1vZHVsZS5zY3NzJztcclxuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCB7VXNlcn0gZnJvbSBcIi4uLy4uL2ludGVyZmFjZXNcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUG9maWxlUG9wdXBQcm9wcyB7XHJcbiAgb25DbGljaz86ICgpID0+IHZvaWQ7XHJcbiAgdXNlcjogVXNlcjtcclxufVxyXG5cclxuY29uc3QgUHJvZmlsZVBvcHVwOiBSZWFjdC5GQzxQb2ZpbGVQb3B1cFByb3BzPiA9ICh7IHVzZXIsIG9uQ2xpY2sgfSkgPT4ge1xyXG4gIGNvbnN0IFthbmNob3JFbCwgc2V0QW5jaG9yRWxdID0gUmVhY3QudXNlU3RhdGU8SFRNTERpdkVsZW1lbnQgfCBudWxsPihudWxsKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoZXZlbnQ6IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTERpdkVsZW1lbnQ+KSA9PiB7XHJcbiAgICBpZiAob25DbGljaykge1xyXG4gICAgICBvbkNsaWNrKCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0QW5jaG9yRWwoZXZlbnQuY3VycmVudFRhcmdldCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2xvc2UgPSAoKSA9PiB7XHJcbiAgICBzZXRBbmNob3JFbChudWxsKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBvcGVuID0gQm9vbGVhbihhbmNob3JFbCk7XHJcblxyXG4gIGNvbnN0IG9uTG9nb3V0ID0gKCkgPT4ge1xyXG4gICAgaWYgKHdpbmRvdz8uY29uZmlybSgn0JLRiyDQtNC10LnRgdGC0LLQuNGC0LXQu9GM0L3QviDRhdC+0YLQuNGC0LUg0L/QvtC60LjQvdGD0YLRjCDRgdCw0LnRgiA/JykpIHtcclxuICAgICAgZG9jdW1lbnQuY29va2llID0gJ2F1dGhfdG9rZW4nICsgJz07IE1heC1BZ2U9MCc7XHJcbiAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCd0b2tlbicpO1xyXG4gICAgICBsb2NhdGlvbi5ocmVmID0gJy8nO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxBdmF0YXIgY2xhc3NOYW1lPXtjbHN4KCdjdXJzb3ItcG9pbnRlcicsIHN0eWxlcy5yb290KX0gYWx0PXt1c2VyPy5uYW1lfSBzcmM9e3VzZXI/LmF2YXRhcn0gb25DbGljaz17aGFuZGxlQ2xpY2t9IC8+XHJcbiAgICAgIHt1c2VyPy5pZCAmJiAoXHJcbiAgICAgICAgICA8UG9wb3ZlclxyXG4gICAgICAgICAgICAgIG9wZW49e29wZW59XHJcbiAgICAgICAgICAgICAgYW5jaG9yRWw9e2FuY2hvckVsfVxyXG4gICAgICAgICAgICAgIG9uQ2xvc2U9e2hhbmRsZUNsb3NlfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnBvcG92ZXJ9XHJcbiAgICAgICAgICAgICAgY2xhc3Nlcz17e1xyXG4gICAgICAgICAgICAgICAgcm9vdDogc3R5bGVzLnJvb3QsXHJcbiAgICAgICAgICAgICAgICBwYXBlcjogc3R5bGVzLnBhcGVyLFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgYW5jaG9yT3JpZ2luPXt7XHJcbiAgICAgICAgICAgICAgICB2ZXJ0aWNhbDogJ2JvdHRvbScsXHJcbiAgICAgICAgICAgICAgICBob3Jpem9udGFsOiAnY2VudGVyJyxcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgIHRyYW5zZm9ybU9yaWdpbj17e1xyXG4gICAgICAgICAgICAgICAgdmVydGljYWw6ICd0b3AnLFxyXG4gICAgICAgICAgICAgICAgaG9yaXpvbnRhbDogJ2NlbnRlcicsXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Nsc3goc3R5bGVzLnNlY3Rpb24xLCAnZC1mbGV4Jyl9PlxyXG4gICAgICAgICAgICAgIDxBdmF0YXIgYWx0PXt1c2VyLm5hbWV9IHNyYz17dXNlci5hdmF0YXJ9IGNsYXNzTmFtZT17c3R5bGVzLmF2YXRhcn0gLz5cclxuICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtzdHlsZXMubmFtZX0+e3VzZXIubmFtZX08L2E+XHJcbiAgICAgICAgICAgICAgICB7Lyo8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxvZ2lufT57dXNlci5sb2dpbn08L2Rpdj4qL31cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxEaXZpZGVyIGNsYXNzZXM9e3sgcm9vdDogc3R5bGVzLmRpdmlkZXIgfX0gLz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Nsc3goc3R5bGVzLnNlY3Rpb24yLCAnZC1mbGV4IGZsZXgtY29sdW1uJyl9PlxyXG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvcHJvZmlsZS8ke3VzZXIuaWR9P3R5cGU9YXJ0aWNsZXNgfT48YSBjbGFzc05hbWU9XCJtYi0zXCI+0KHRgtCw0YLRjNC4PC9hPjwvTGluaz5cclxuICAgICAgICAgICAgICA8TGluayBocmVmPXtgL3Byb2ZpbGUvJHt1c2VyLmlkfT90eXBlPWRyYWZ0c2B9PjxhIGNsYXNzTmFtZT1cIm1iLTNcIj7Qp9C10YDQvdC+0LLQuNC60Lg8L2E+PC9MaW5rPlxyXG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9eycvcHJvZmlsZSd9PjxhIGNsYXNzTmFtZT1cIm1iLTNcIj7QndCw0YHRgtGA0L7QudC60Lg8L2E+PC9MaW5rPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPERpdmlkZXIgY2xhc3Nlcz17eyByb290OiBzdHlsZXMuZGl2aWRlciB9fSAvPlxyXG4gICAgICAgICAgICA8YSBvbkNsaWNrPXtvbkxvZ291dH0gY2xhc3NOYW1lPXtjbHN4KHN0eWxlcy5zZWN0aW9uMiwgJ2QtZmxleCBmbGV4LWNvbHVtbicpfT7QktGL0LnRgtC4PC9hPlxyXG4gICAgICAgICAgPC9Qb3BvdmVyPlxyXG4gICAgICApfVxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2ZpbGVQb3B1cDtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEF2YXRhciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9BdmF0YXInO1xyXG5pbXBvcnQgQ29sbGFwc2UgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ29sbGFwc2UnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vU2VhcmNoUG9wdXAubW9kdWxlLnNjc3MnO1xyXG5pbXBvcnQgeyBEaXZpZGVyIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCB7dXNlUm91dGVyfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuXHJcbmludGVyZmFjZSBJdGVtUHJvcHMge1xyXG4gIHRpdGxlOiBzdHJpbmc7XHJcbiAgZGF0YTogQXJyYXk8e1xyXG4gICAgICBuYW1lOiBzdHJpbmc7XHJcbiAgICAgIGxpbms6IHN0cmluZztcclxuICAgICAgaWQ6IG51bWJlciB8IHN0cmluZztcclxuICB9PjtcclxuICBvbkNsb3NlOiAoKSA9PiB2b2lkXHJcbn1cclxuXHJcbmNvbnN0IEl0ZW06IFJlYWN0LkZDPEl0ZW1Qcm9wcz4gPSAocCkgPT4ge1xyXG4gIGNvbnN0IFtvcGVuLCBzZXRPcGVuXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChwLnRpdGxlID09PSAn0JDQstGC0L7RgNGLJyB8fCBwLnRpdGxlID09PSAn0J/Rg9Cx0LvQuNC60LDRhtC40LgnKSB7XHJcbiAgICAgIHNldE9wZW4odHJ1ZSk7XHJcbiAgICB9XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBoYW5kbGVDbGljayA9ICgpID0+IHtcclxuICAgIHNldE9wZW4oIW9wZW4pO1xyXG4gIH07XHJcblxyXG4gIGlmIChwLnRpdGxlID09PSAn0JDQstGC0L7RgNGLJyAmJiBwLmRhdGEubGVuZ3RoID4gMCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPD5cclxuICAgICAgICA8ZGl2IG9uQ2xpY2s9e2hhbmRsZUNsaWNrfSBjbGFzc05hbWU9e3N0eWxlcy5zZWFyY2hUaXRsZUlubmVyfT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2VhcmNoVGl0bGV9PlxyXG4gICAgICAgICAgICB7cC50aXRsZX0gKHtwLmRhdGEubGVuZ3RofSlcclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAge3AuZGF0YS5sZW5ndGggPiAzICYmIChcclxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtzdHlsZXMuc2hvd0FsbH0gb25DbGljaz17KGUpID0+IGUuc3RvcFByb3BhZ2F0aW9uKCl9PlxyXG4gICAgICAgICAgICAgINCf0L7QutCw0LfQsNGC0Ywg0LLRgdC1XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPERpdmlkZXIgY2xhc3Nlcz17eyByb290OiBzdHlsZXMuZGl2aWRlciB9fSAvPlxyXG4gICAgICAgIDxDb2xsYXBzZSBpbj17b3Blbn0gdGltZW91dD1cImF1dG9cIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2VhcmNoSXRlbXN9PlxyXG4gICAgICAgICAgICB7cC5kYXRhLnNsaWNlKDAsIDMpLm1hcCgoZWwsIGtleSkgPT4gKFxyXG4gICAgICAgICAgICAgIDxkaXYgb25DbGljaz17IGFzeW5jICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgYXdhaXQgcm91dGVyLnB1c2goZWwubGluaylcclxuICAgICAgICAgICAgICAgICAgcC5vbkNsb3NlKClcclxuICAgICAgICAgICAgICB9fSBrZXk9e2Ake3AudGl0bGV9LSR7a2V5fWB9IGNsYXNzTmFtZT17c3R5bGVzLnNlYXJjaEl0ZW19PlxyXG4gICAgICAgICAgICAgICAgPEF2YXRhciBjbGFzc05hbWU9XCJtci0xMFwiIC8+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PntlbC5uYW1lfTwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvQ29sbGFwc2U+XHJcbiAgICAgIDwvPlxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIGlmIChwLnRpdGxlICE9PSAn0JDQstGC0L7RgNGLJyAmJiBwLmRhdGEubGVuZ3RoID4gMCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPD5cclxuICAgICAgICA8ZGl2IG9uQ2xpY2s9e2hhbmRsZUNsaWNrfSBjbGFzc05hbWU9e3N0eWxlcy5zZWFyY2hUaXRsZUlubmVyfT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2VhcmNoVGl0bGV9PlxyXG4gICAgICAgICAgICB7cC50aXRsZX0gKHtwLmRhdGEubGVuZ3RofSlcclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAge3AuZGF0YS5sZW5ndGggPiAzICYmIChcclxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtzdHlsZXMuc2hvd0FsbH0gb25DbGljaz17KGUpID0+IGUuc3RvcFByb3BhZ2F0aW9uKCl9PlxyXG4gICAgICAgICAgICAgINCf0L7QutCw0LfQsNGC0Ywg0LLRgdC1XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPERpdmlkZXIgY2xhc3Nlcz17eyByb290OiBzdHlsZXMuZGl2aWRlciB9fSAvPlxyXG4gICAgICAgIDxDb2xsYXBzZSBpbj17b3Blbn0gdGltZW91dD1cImF1dG9cIiBkaXNhYmxlU3RyaWN0TW9kZUNvbXBhdD5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2VhcmNoSXRlbXN9PlxyXG4gICAgICAgICAgICB7cC5kYXRhLnNsaWNlKDAsIDMpLm1hcCgoZWwsIGtleSkgPT4gKFxyXG4gICAgICAgICAgICAgIDxkaXYga2V5PXtgJHtwLnRpdGxlfS0ke2tleX1gfSBjbGFzc05hbWU9e3N0eWxlcy5zZWFyY2hJdGVtfT5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2VsLmxpbmt9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIG9uQ2xpY2s9eygpID0+IHAub25DbG9zZSgpfT57ZWwubmFtZX08L2E+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9Db2xsYXBzZT5cclxuICAgICAgPC8+XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIG51bGw7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJdGVtO1xyXG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjb250YWluZXJcIjogXCJTZWFyY2hQb3B1cF9jb250YWluZXJfXzJ1LXZqXCIsXG5cdFwiYm9keVwiOiBcIlNlYXJjaFBvcHVwX2JvZHlfXzFGNk40XCIsXG5cdFwiZGl2aWRlclwiOiBcIlNlYXJjaFBvcHVwX2RpdmlkZXJfXzJMUGI4XCIsXG5cdFwic2VhcmNoVGl0bGVcIjogXCJTZWFyY2hQb3B1cF9zZWFyY2hUaXRsZV9fMjZNRkRcIixcblx0XCJzZWFyY2hUaXRsZUlubmVyXCI6IFwiU2VhcmNoUG9wdXBfc2VhcmNoVGl0bGVJbm5lcl9fM3dTaTJcIixcblx0XCJzZWFyY2hJdGVtc1wiOiBcIlNlYXJjaFBvcHVwX3NlYXJjaEl0ZW1zX18zSkw1dVwiLFxuXHRcInNlYXJjaEl0ZW1cIjogXCJTZWFyY2hQb3B1cF9zZWFyY2hJdGVtX18yQ1Vhc1wiLFxuXHRcInNob3dBbGxcIjogXCJTZWFyY2hQb3B1cF9zaG93QWxsX18yaHk2Q1wiLFxuXHRcImZvb3RlclwiOiBcIlNlYXJjaFBvcHVwX2Zvb3Rlcl9fTVluOEtcIlxufTtcbiIsImltcG9ydCBSZWFjdCwge3VzZVN0YXRlfSBmcm9tICdyZWFjdCc7XHJcblxyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vU2VhcmNoUG9wdXAubW9kdWxlLnNjc3MnO1xyXG5pbXBvcnQgSXRlbSBmcm9tICcuL0l0ZW0nO1xyXG5pbXBvcnQge2dldFNwZWNpYWxpc3RzfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvYXBpL1NwZWNpYWxpc3RzQXBpXCI7XHJcbmltcG9ydCB7Q29tbWVudCwgUG9zdERhdGEsIFRoZW1lLCBVc2VyfSBmcm9tIFwiLi4vLi4vaW50ZXJmYWNlc1wiO1xyXG5pbXBvcnQge3VzZVNlbGVjdG9yfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHtzZWxlY3RUaGVtZXNTdGF0ZX0gZnJvbSBcIi4uLy4uL3JlZHV4L2RpcmVjdG9yeS9kaXJlY3Rvcnkuc2VsZWN0b3JcIjtcclxuaW1wb3J0IHtDb21tZW50QXBpfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvYXBpL0NvbW1lbnRBcGlcIjtcclxuaW1wb3J0IHtnZXRQb3N0c30gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2FwaS9Qb3N0QXBpXCI7XHJcblxyXG5pbnRlcmZhY2UgU2VhcmNoUG9wdXBQcm9wcyB7XHJcbiAgICBpc1NlYXJjaDogYm9vbGVhbjtcclxuICAgIHNlYXJjaElucHV0OiBzdHJpbmc7XHJcbiAgICBoYW5kbGVDbGljazogKCkgPT4gdm9pZFxyXG5cclxufVxyXG5cclxuY29uc3QgU2VhcmNoUG9wdXA6IFJlYWN0LkZDPFNlYXJjaFBvcHVwUHJvcHM+ID0gKHtpc1NlYXJjaCwgc2VhcmNoSW5wdXQsIGhhbmRsZUNsaWNrfSkgPT4ge1xyXG4gICAgY29uc3QgW2F1dGhvcnMsIHNldEF1dGhvcnNdID0gdXNlU3RhdGU8VXNlcltdPihbXSlcclxuICAgIGNvbnN0IFtwb3N0cywgc2V0UG9zdHNdID0gdXNlU3RhdGU8UG9zdERhdGFbXT4oW10pXHJcbiAgICBjb25zdCBbY29tbWVudHMsIHNldENvbW1lbnRzXSA9IHVzZVN0YXRlPENvbW1lbnRbXT4oW10pXHJcbiAgICBjb25zdCB0aGVtZXMgPSB1c2VTZWxlY3RvcihzZWxlY3RUaGVtZXNTdGF0ZSkuZmlsdGVyKHRoZW1lID0+IHRoZW1lLm5hbWUuaW5jbHVkZXMoc2VhcmNoSW5wdXQpKTtcclxuXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmIChzZWFyY2hJbnB1dC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgZ2V0U3BlY2lhbGlzdHMoe25hbWU6IHNlYXJjaElucHV0fSkudGhlbih1c2VycyA9PiB7XHJcbiAgICAgICAgICAgICAgICBzZXRBdXRob3JzKHVzZXJzLmRhdGEpXHJcbiAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICBDb21tZW50QXBpLmdldCh7dGV4dDogc2VhcmNoSW5wdXR9KS50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgIHNldENvbW1lbnRzKHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBnZXRQb3N0cyh7dGl0bGU6IHNlYXJjaElucHV0fSkudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBzZXRQb3N0cyhyZXNwb25zZS5kYXRhKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgIH0sIFtzZWFyY2hJbnB1dF0pXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYm9keX0+XHJcbiAgICAgICAgICAgICAgICA8SXRlbSB0aXRsZT1cItCQ0LLRgtC+0YDRi1wiIGRhdGE9e2F1dGhvcnMubWFwKHVzZXIgPT4gKHtcclxuICAgICAgICAgICAgICAgICAgICBpZDogdXNlci5pZCxcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiB1c2VyLm5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgbGluazogYC9wcm9maWxlLyR7dXNlci5pZH1gXHJcbiAgICAgICAgICAgICAgICB9KSl9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DbG9zZT17aGFuZGxlQ2xpY2t9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPEl0ZW0gdGl0bGU9XCLQn9GD0LHQu9C40LrQsNGG0LjQuFwiIGRhdGE9e3Bvc3RzLm1hcChwb3N0ID0+ICh7XHJcbiAgICAgICAgICAgICAgICAgICAgaWQ6IHBvc3QuaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogcG9zdC50aXRsZSxcclxuICAgICAgICAgICAgICAgICAgICBsaW5rOiBgL3Bvc3QvJHtwb3N0LnNsdWd9YFxyXG4gICAgICAgICAgICAgICAgfSkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DbG9zZT17aGFuZGxlQ2xpY2t9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPEl0ZW0gdGl0bGU9XCLQotGN0LPQuFwiIGRhdGE9e1xyXG4gICAgICAgICAgICAgICAgICAgICFzZWFyY2hJbnB1dC5sZW5ndGggPyBbXSA6IHRoZW1lcy5tYXAodGhlbWUgPT4gKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IHRoZW1lLmlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiB0aGVtZS5uYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5rOiAnL3RoZW1lcydcclxuICAgICAgICAgICAgICAgICAgICB9KSl9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DbG9zZT17aGFuZGxlQ2xpY2t9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPEl0ZW0gdGl0bGU9XCLQmtC+0LzQtdC90YLQsNGA0LjQuFwiIGRhdGE9e2NvbW1lbnRzLm1hcChjb21tZW50ID0+ICh7XHJcbiAgICAgICAgICAgICAgICAgICAgaWQ6IGNvbW1lbnQuaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogY29tbWVudC50ZXh0LFxyXG4gICAgICAgICAgICAgICAgICAgIGxpbms6IGAvcG9zdC8ke2NvbW1lbnQucG9zdC5zbHVnfWBcclxuICAgICAgICAgICAgICAgIH0pKX1cclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xvc2U9e2hhbmRsZUNsaWNrfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIHsvKjxJdGVtIHRpdGxlPVwi0JDQstGC0L7RgNGLXCIgZGF0YT17c2VhcmNoRGF0YS5wb2RjYXN0c30vPiovfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mb290ZXJ9PlxyXG4gICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJtci0xMFwiIHNyYz1cIi9hcnJvdy1saW5rLnN2Z1wiIGFsdD1cItCf0L7QuNGB0LpcIi8+XHJcbiAgICAgICAgICAgICAgICA8YT7Qn9C+0LrQsNC30LDRgtGMINCy0YHQtSDRgNC10LfRg9C70YzRgtCw0YLRiyDQv9C+INC30LDQv9GA0L7RgdGDIOKAnHtzZWFyY2hJbnB1dH3igJ08L2E+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNlYXJjaFBvcHVwO1xyXG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJibG9ja1wiOiBcIlNpZGVCbG9ja19ibG9ja19fMWJhYlVcIlxufTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9TaWRlQmxvY2subW9kdWxlLnNjc3MnO1xyXG5cclxudHlwZSBTaWRlQmxvY2tQcm9wcyA9IHsgbmFtZT86IHN0cmluZyB9O1xyXG5cclxuZXhwb3J0IGNvbnN0IFNpZGVCbG9jazogUmVhY3QuRkM8U2lkZUJsb2NrUHJvcHM+ID0gKHsgbmFtZSwgY2hpbGRyZW4gfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJsb2NrfT5cclxuICAgICAge25hbWUgJiYgPGg0PntuYW1lfTwvaDQ+fVxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJ0YWdcIjogXCJUYWdzX3RhZ19fMTI4T0tcIixcblx0XCJidG5cIjogXCJUYWdzX2J0bl9fenhXTVFcIixcblx0XCJhY3RpdmVcIjogXCJUYWdzX2FjdGl2ZV9fMTU4Y19cIlxufTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcblxyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vVGFncy5tb2R1bGUuc2Nzcyc7XHJcbmltcG9ydCB7VGhlbWV9IGZyb20gXCIuLi8uLi9pbnRlcmZhY2VzXCI7XHJcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJy4uL0J1dHRvbic7XHJcbmltcG9ydCBjbHN4IGZyb20gXCJjbHN4XCI7XHJcblxyXG50eXBlIFRhZ0l0ZW0gPSB7IHRoZW1lOiBUaGVtZSwgb25DbGljaz86ICh0OiBUaGVtZSkgPT4gdm9pZCwgaXNBY3RpdmU6IGJvb2xlYW59O1xyXG5cclxuY29uc3QgVGFnOiBSZWFjdC5GQzxUYWdJdGVtPiA9ICh7IHRoZW1lLCBvbkNsaWNrLCBpc0FjdGl2ZSB9KSA9PiAoXHJcbiAgPExpbmsgaHJlZj17dGhlbWUubmFtZX0+XHJcbiAgICA8YSBvbkNsaWNrPXsoKSA9PiBvbkNsaWNrKHRoZW1lKX0gY2xhc3NOYW1lPXtzdHlsZXMudGFnfT5cclxuICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT17Y2xzeChzdHlsZXMuYnRuLCBpc0FjdGl2ZSA/IHN0eWxlcy5hY3RpdmUgOiAnJyl9IHZhcmlhbnQ9e2lzQWN0aXZlID8gJ3RleHQnIDogJ3RleHQnfT5cclxuICAgICAgICAgICAge3RoZW1lLm5hbWV9XHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICA8L2E+XHJcbiAgPC9MaW5rPlxyXG4pO1xyXG5cclxuZXhwb3J0IGNvbnN0IFRhZ3M6IFJlYWN0LkZDPHsgaXRlbXM6IFRoZW1lW10sIHNlbGVjdGVkSXRlbXM6IFRoZW1lW10sIGhhbmRsZVNlbGVjdDogKHQ6IFRoZW1lKSA9PiB2b2lkIH0+ID0gKHsgaXRlbXMsIGhhbmRsZVNlbGVjdCwgc2VsZWN0ZWRJdGVtcyB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIHtpdGVtcy5tYXAoKG9iaikgPT4gKFxyXG4gICAgICAgIDxUYWcga2V5PXtvYmoubmFtZX0gdGhlbWU9e29ian0gb25DbGljaz17aGFuZGxlU2VsZWN0fSBpc0FjdGl2ZT17ISFzZWxlY3RlZEl0ZW1zPy5maW5kKHQgPT4gK3QuaWQgPT09ICtvYmouaWQpfSAvPlxyXG4gICAgICApKX1cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcInVzZXJcIjogXCJVc2VyVmlld09uQ29udGVudF91c2VyX19zaFdtbVwiLFxuXHRcInVzZXJfYXZhdGFyXCI6IFwiVXNlclZpZXdPbkNvbnRlbnRfdXNlcl9hdmF0YXJfX19BUVZGXCIsXG5cdFwidXNlcl9hdmF0YXJfd2l0aF90aW1lXCI6IFwiVXNlclZpZXdPbkNvbnRlbnRfdXNlcl9hdmF0YXJfd2l0aF90aW1lX18xQ3hLVVwiLFxuXHRcInVzZXJfaW5mb1wiOiBcIlVzZXJWaWV3T25Db250ZW50X3VzZXJfaW5mb19fMXZZMmtcIixcblx0XCJ1c2VyX2luZm9fd2l0aF90aW1lXCI6IFwiVXNlclZpZXdPbkNvbnRlbnRfdXNlcl9pbmZvX3dpdGhfdGltZV9fM3BlQkpcIixcblx0XCJ1c2VyX25hbWVcIjogXCJVc2VyVmlld09uQ29udGVudF91c2VyX25hbWVfXzF4dVoxXCJcbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vVXNlclZpZXdPbkNvbnRlbnQubW9kdWxlLnNjc3MnO1xyXG5pbXBvcnQgY2xzeCBmcm9tICdjbHN4JztcclxuaW1wb3J0IHsgUGFzdFRpbWVMYWJlbCB9IGZyb20gJy4uL1Bhc3RUaW1lTGFiZWwnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgeyBQb3BvdmVyLCBBdmF0YXIsIERpdmlkZXIgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFVzZXJWaWV3T25Db250ZW50UHJvcHMge1xyXG4gIHVzZXI6IHtcclxuICAgIGlkOiBudW1iZXI7XHJcbiAgICBuYW1lOiBzdHJpbmc7XHJcbiAgICBhdmF0YXJVcmw6IHN0cmluZztcclxuICB9O1xyXG4gIHRpbWU/OiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBVc2VyVmlld09uQ29udGVudDogUmVhY3QuRkM8VXNlclZpZXdPbkNvbnRlbnRQcm9wcz4gPSAoeyB1c2VyLCB0aW1lIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPExpbmsgaHJlZj17YC9wcm9maWxlLyR7dXNlci5pZH1gfT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy51c2VyfT5cclxuICAgICAgICB7dXNlci5hdmF0YXJVcmw/Lmxlbmd0aCAmJiA8aW1nXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xzeChzdHlsZXMudXNlcl9hdmF0YXIsIHRpbWUgPyBzdHlsZXMudXNlcl9hdmF0YXJfd2l0aF90aW1lIDogJycpfVxyXG4gICAgICAgICAgICBzcmM9e3VzZXIuYXZhdGFyVXJsfVxyXG4gICAgICAgICAgICBhbHQ9XCLQkNCy0LDRgtCw0YAg0L/QvtC70YzQt9Cy0L7QsNGC0LXQu9GPXCJcclxuICAgICAgICAvPn1cclxuXHJcbiAgICAgICAgeyF1c2VyLmF2YXRhclVybD8ubGVuZ3RoICYmIDxBdmF0YXIgc3R5bGU9e3t3aWR0aDogMjIsIGhlaWdodDogMjIsIG1hcmdpblJpZ2h0OiA2fX0gLz59XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbHN4KHN0eWxlcy51c2VyX2luZm8sIHRpbWUgPyBzdHlsZXMudXNlcl9pbmZvX3dpdGhfdGltZSA6ICcnKX0+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy51c2VyX25hbWV9Pnt1c2VyLm5hbWV9PC9zcGFuPlxyXG4gICAgICAgICAge3RpbWUgPyA8UGFzdFRpbWVMYWJlbCB0aW1lPXt0aW1lfSAvPiA6IG51bGx9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9MaW5rPlxyXG4gICk7XHJcbn07XHJcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcInZpZXdzQW5kQ29tbWVudHNcIjogXCJWaWV3c0FuZENvbW1lbnRzX3ZpZXdzQW5kQ29tbWVudHNfXzN4dllvXCIsXG5cdFwiY291bnRcIjogXCJWaWV3c0FuZENvbW1lbnRzX2NvdW50X18xdzA2ZFwiLFxuXHRcImljb25cIjogXCJWaWV3c0FuZENvbW1lbnRzX2ljb25fXzJjMHRNXCJcbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgY2xzeCBmcm9tICdjbHN4JztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL1ZpZXdzQW5kQ29tbWVudHMubW9kdWxlLnNjc3MnO1xyXG5pbXBvcnQgeyBDb21tZW50SWNvbiB9IGZyb20gJy4uL2ljb25zL0NvbW1lbnRJY29uJztcclxuaW1wb3J0IHsgRXllSWNvbiB9IGZyb20gJy4uL2ljb25zL0V5ZUljb24nO1xyXG5cclxuaW50ZXJmYWNlIFZpZXdzQW5kQ29tbWVudHNQcm9wcyB7XHJcbiAgbW9kZTogJ21pbmknIHwgJ2Z1bGwnO1xyXG4gIGNvbW1lbnRzOiBudW1iZXI7XHJcbiAgdmlld3M6IG51bWJlcjtcclxufVxyXG5cclxuY29uc3QgZ2V0RnVsbFRpdGxlID0gKG51bTogbnVtYmVyLCBtYWluUGFydDogc3RyaW5nLCBsYXN0UGFydHM6IHN0cmluZ1tdKSA9PiB7XHJcbiAgbGV0IHRleHQgPSBtYWluUGFydDtcclxuICBjb25zdCBsYXN0RGlnaXQgPSBudW0gJSAxMDtcclxuICBjb25zdCBwcmVMYXN0RGlnaXQgPSBNYXRoLmZsb29yKG51bSAvIDEwKSAlIDEwO1xyXG4gIGlmIChsYXN0RGlnaXQgPT09IDEgJiYgcHJlTGFzdERpZ2l0ICE9PSAxKSB7XHJcbiAgICB0ZXh0ICs9IGxhc3RQYXJ0c1swXTtcclxuICB9IGVsc2UgaWYgKGxhc3REaWdpdCA+IDEgJiYgbGFzdERpZ2l0IDw9IDQgJiYgcHJlTGFzdERpZ2l0ICE9PSAxKSB7XHJcbiAgICB0ZXh0ICs9IGxhc3RQYXJ0c1sxXTtcclxuICB9IGVsc2Uge1xyXG4gICAgdGV4dCArPSBsYXN0UGFydHNbMl07XHJcbiAgfVxyXG4gIHJldHVybiBgJHtudW19ICR7dGV4dH1gO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IFZpZXdzQW5kQ29tbWVudHM6IFJlYWN0LkZDPFZpZXdzQW5kQ29tbWVudHNQcm9wcz4gPSAoeyBtb2RlLCB2aWV3cywgY29tbWVudHMgfSkgPT4ge1xyXG4gIGNvbnN0IGNvbW1lbnRzVGl0bGUgPSBtb2RlID09PSAnZnVsbCcgPyBnZXRGdWxsVGl0bGUoY29tbWVudHMsICfQutC+0LzQvNC10L3RgtCw0YAnLCBbJ9C40LknLCAn0LjRjycsICfQuNC10LInXSkgOiBgJHtjb21tZW50c31gO1xyXG4gIGNvbnN0IHZpZXdzVGl0bGUgPSBtb2RlID09PSAnZnVsbCcgPyBnZXRGdWxsVGl0bGUodmlld3MsICfQv9GA0L7RgdC80L7RgtGAJywgWycnLCAn0LAnLCAn0L7QsiddKSA6IGAke3ZpZXdzfWA7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbHN4KHN0eWxlcy52aWV3c0FuZENvbW1lbnRzLCAnZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlcicpfT5cclxuICAgICAgPENvbW1lbnRJY29uIGNsYXNzTmFtZT17c3R5bGVzLmljb259IC8+XHJcbiAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmNvdW50fT57Y29tbWVudHNUaXRsZX08L3NwYW4+XHJcbiAgICAgIDxFeWVJY29uIGNsYXNzTmFtZT17c3R5bGVzLmljb259IC8+XHJcbiAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmNvdW50fT57dmlld3NUaXRsZX08L3NwYW4+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJY29uIHtcclxuICBjbGFzc05hbWU/OiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBDb21tZW50SWNvbjogUmVhY3QuRkM8SWNvbj4gPSAoeyBjbGFzc05hbWUgfSkgPT4gKFxyXG4gIDxzdmcgY2xhc3NOYW1lPXtjbGFzc05hbWV9IHdpZHRoPVwiMTRcIiBoZWlnaHQ9XCIxM1wiIHZpZXdCb3g9XCIwIDAgMTQgMTNcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cclxuICAgIDxwYXRoXHJcbiAgICAgIGQ9XCJNMC42MDAwOTggMS44OTk5OUMwLjYwMDA5OCAxLjM0NzcxIDEuMDQ3ODEgMC44OTk5OTQgMS42MDAxIDAuODk5OTk0SDEyLjQwMDFDMTIuOTUyNCAwLjg5OTk5NCAxMy40MDAxIDEuMzQ3NzEgMTMuNDAwMSAxLjg5OTk5VjcuNzM5OTlDMTMuNDAwMSA4LjI5MjI4IDEyLjk1MjQgOC43Mzk5OSAxMi40MDAxIDguNzM5OTlIMTAuOTM4NlYxMi4xTDYuMDE1NDggOC43Mzk5OUgxLjYwMDFDMS4wNDc4MSA4LjczOTk5IDAuNjAwMDk4IDguMjkyMjggMC42MDAwOTggNy43Mzk5OVYxLjg5OTk5WlwiXHJcbiAgICAgIHN0cm9rZT1cIiM5QzlDQUFcIlxyXG4gICAgICBzdHJva2VMaW5lY2FwPVwicm91bmRcIlxyXG4gICAgICBzdHJva2VMaW5lam9pbj1cInJvdW5kXCJcclxuICAgIC8+XHJcbiAgPC9zdmc+XHJcbik7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEljb24gfSBmcm9tICcuL0NvbW1lbnRJY29uJztcclxuXHJcbmV4cG9ydCBjb25zdCBFeWVJY29uOiBSZWFjdC5GQzxJY29uPiA9ICh7IGNsYXNzTmFtZSB9KSA9PiAoXHJcbiAgPHN2ZyBjbGFzc05hbWU9e2NsYXNzTmFtZX0gd2lkdGg9XCIxNlwiIGhlaWdodD1cIjEzXCIgdmlld0JveD1cIjAgMCAxNiAxM1wiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxyXG4gICAgPHBhdGhcclxuICAgICAgZD1cIk0xNS40Nzg4IDYuNUMxNS40Nzg4IDYuNSAxMi4xMzA1IDEyLjAyMzQgOC4wMDAxNSAxMi4wMjM0QzMuODY5OCAxMi4wMjM0IDAuNTIxNDg0IDYuNSAwLjUyMTQ4NCA2LjVDMC41MjE0ODQgNi41IDMuODY5OCAwLjk3NjYzOSA4LjAwMDE1IDAuOTc2NjM5QzEyLjEzMDUgMC45NzY2MzkgMTUuNDc4OCA2LjUgMTUuNDc4OCA2LjVaXCJcclxuICAgICAgc3Ryb2tlPVwiIzlDOUNBQVwiXHJcbiAgICAvPlxyXG4gICAgPHBhdGhcclxuICAgICAgZD1cIk0xMC4xOTk4IDYuNUMxMC4xOTk4IDcuNjg1NzUgOS4yMTQ5NiA4LjY0Njk5IDguMDAwMTUgOC42NDY5OUM2Ljc4NTM0IDguNjQ2OTkgNS44MDA1NCA3LjY4NTc1IDUuODAwNTQgNi41QzUuODAwNTQgNS4zMTQyNiA2Ljc4NTM0IDQuMzUzMDIgOC4wMDAxNSA0LjM1MzAyQzkuMjE0OTYgNC4zNTMwMiAxMC4xOTk4IDUuMzE0MjYgMTAuMTk5OCA2LjVaXCJcclxuICAgICAgc3Ryb2tlPVwiIzlDOUNBQVwiXHJcbiAgICAvPlxyXG4gIDwvc3ZnPlxyXG4pO1xyXG4iLCJpbXBvcnQgY2xzeCBmcm9tICdjbHN4JztcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmludGVyZmFjZSBGYWNlYm9va0ljb25Qcm9wcyB7XHJcbiAgY2xhc3NOYW1lPzogc3RyaW5nO1xyXG4gIGhvdmVyQ2xhc3NOYW1lPzogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgRmFjZWJvb2tJY29uOiBSZWFjdC5GQzxGYWNlYm9va0ljb25Qcm9wcz4gPSAoeyBjbGFzc05hbWUsIGhvdmVyQ2xhc3NOYW1lIH0pID0+IHtcclxuICBjb25zdCBbY2xhc3Nlcywgc2V0Q2xhc3Nlc10gPSBSZWFjdC51c2VTdGF0ZShjbGFzc05hbWUpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPHN2Z1xyXG4gICAgICBjbGFzc05hbWU9e2NsYXNzZXN9XHJcbiAgICAgIG9uTW91c2VPdmVyPXsoKSA9PiBzZXRDbGFzc2VzKGNsc3goY2xhc3NOYW1lLCBob3ZlckNsYXNzTmFtZSkpfVxyXG4gICAgICBvbk1vdXNlTGVhdmU9eygpID0+IHNldENsYXNzZXMoY2xhc3NOYW1lKX1cclxuICAgICAgd2lkdGg9XCI5XCJcclxuICAgICAgaGVpZ2h0PVwiMjBcIlxyXG4gICAgICB2aWV3Qm94PVwiMCAwIDkgMjBcIlxyXG4gICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgID5cclxuICAgICAgPHBhdGggZD1cIk01Ljk1OTIxIDYuMjk2OTFWNC42NDEwNUM1Ljk1OTIxIDQuMzkyNDggNS45NzA2NSA0LjE5OTk0IDUuOTkzODkgNC4wNjM5M0M2LjAxNzA0IDMuOTI3NzEgNi4wNjk3MyAzLjc5Mzc1IDYuMTUxNSAzLjY2MTQ5QzYuMjMzMTUgMy41MjkzMiA2LjM2NTM2IDMuNDM4MDggNi41NDc5MyAzLjM4NzUxQzYuNzMwNzUgMy4zMzY4NyA2Ljk3MzY5IDMuMzExNjMgNy4yNzcgMy4zMTE2M0g4LjkzMjc3VjBINi4yODU3MkM0Ljc1NDA3IDAgMy42NTQwMiAwLjM2MzM4OCAyLjk4NTQgMS4wOTAxN0MyLjMxNjg3IDEuODE3MTEgMS45ODI2NSAyLjg4Nzg3IDEuOTgyNjUgNC4zMDI4N1Y2LjI5Njg3SDBWOS42MDg3NEgxLjk4MjUyVjE5LjIxNzVINS45NTkxN1Y5LjYwODc4SDguNjA2MDZMOC45NTU5MyA2LjI5NjkxSDUuOTU5MjFaXCIgLz5cclxuICAgIDwvc3ZnPlxyXG4gICk7XHJcbn07XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5pbnRlcmZhY2UgU2hhcmVJY29uUHJvcHMge1xyXG4gIGNsYXNzTmFtZT86IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFNoYXJlSWNvbjogUmVhY3QuRkM8U2hhcmVJY29uUHJvcHM+ID0gKHsgY2xhc3NOYW1lIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPHN2Z1xyXG4gICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZX1cclxuICAgICAgd2lkdGg9XCIyMFwiXHJcbiAgICAgIGhlaWdodD1cIjE4XCJcclxuICAgICAgdmlld0JveD1cIjAgMCAyMCAxOFwiXHJcbiAgICAgIGZpbGw9XCJub25lXCJcclxuICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICA+XHJcbiAgICAgIDxwYXRoXHJcbiAgICAgICAgZD1cIk0xOSA4Ljk5NDU4TDExLjUxOTUgMVY1Ljc2OTcxQzYgNi41IDEgMTAuNDM4NCAxIDE3QzMuODI1ODkgMTMuOTgxOCA3IDEyIDExLjUxOTUgMTIuMjE5NFYxNi45ODkyTDE5IDguOTk0NThaXCJcclxuICAgICAgICBzdHJva2U9XCIjOUM5Q0FBXCJcclxuICAgICAgICBzdHJva2VMaW5lY2FwPVwicm91bmRcIlxyXG4gICAgICAgIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIlxyXG4gICAgICAvPlxyXG4gICAgPC9zdmc+XHJcbiAgKTtcclxufTtcclxuIiwiaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCc7XHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5pbnRlcmZhY2UgVGVsZWdyYW1JY29uUHJvcHMge1xyXG4gIGNsYXNzTmFtZT86IHN0cmluZztcclxuICBob3ZlckNsYXNzTmFtZT86IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFRlbGVncmFtSWNvbjogUmVhY3QuRkM8VGVsZWdyYW1JY29uUHJvcHM+ID0gKHsgY2xhc3NOYW1lLCBob3ZlckNsYXNzTmFtZSB9KSA9PiB7XHJcbiAgY29uc3QgW2NsYXNzZXMsIHNldENsYXNzZXNdID0gUmVhY3QudXNlU3RhdGUoY2xhc3NOYW1lKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxzdmdcclxuICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzfVxyXG4gICAgICBvbk1vdXNlT3Zlcj17KCkgPT4gc2V0Q2xhc3NlcyhjbHN4KGNsYXNzTmFtZSwgaG92ZXJDbGFzc05hbWUpKX1cclxuICAgICAgb25Nb3VzZUxlYXZlPXsoKSA9PiBzZXRDbGFzc2VzKGNsYXNzTmFtZSl9XHJcbiAgICAgIHdpZHRoPVwiMjBcIlxyXG4gICAgICBoZWlnaHQ9XCIxN1wiXHJcbiAgICAgIHZpZXdCb3g9XCIwIDAgMjAgMTdcIlxyXG4gICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgID5cclxuICAgICAgPHBhdGhcclxuICAgICAgICBkPVwiTTAuMzUzMjU5IDguMTUxNDRMNC45NjE2NyA5LjgzMDYxTDYuNzQ1NCAxNS40MzA5QzYuODU5NTMgMTUuNzg5NiA3LjMwODggMTUuOTIyMiA3LjYwNyAxNS42ODQyTDEwLjE3NTggMTMuNjM5N0MxMC40NDUxIDEzLjQyNTUgMTAuODI4NiAxMy40MTQ5IDExLjExIDEzLjYxNDNMMTUuNzQzMiAxNi44OTgyQzE2LjA2MjIgMTcuMTI0NiAxNi41MTQxIDE2Ljk1MzkgMTYuNTk0MSAxNi41Nzc2TDE5Ljk4ODIgMC42MzkwOTJDMjAuMDc1NiAwLjIyODAyIDE5LjY2MTggLTAuMTE0OTA5IDE5LjI2MDkgMC4wMzY0NzczTDAuMzQ3ODU5IDcuMTU5MzZDLTAuMTE4ODc0IDcuMzM1MDkgLTAuMTE0ODA4IDcuOTgwMiAwLjM1MzI1OSA4LjE1MTQ0Wk02LjQ1NzkzIDguOTM2NzRMMTUuNDY0NSAzLjUyMTI4QzE1LjYyNjMgMy40MjQyNCAxNS43OTI5IDMuNjM3OTEgMTUuNjUzOSAzLjc2Mzc5TDguMjIwODcgMTAuNTA5MUM3Ljk1OTYgMTAuNzQ2NSA3Ljc5MTA3IDExLjA2NDMgNy43NDMzNCAxMS40MDkyTDcuNDkwMTQgMTMuMjQxQzcuNDU2NiAxMy40ODU2IDcuMTA0NjcgMTMuNTA5OSA3LjAzNTUzIDEzLjI3MzJMNi4wNjE3MyA5LjkzMjczQzUuOTUwMiA5LjU1MTczIDYuMTEyNzMgOS4xNDQ3NSA2LjQ1NzkzIDguOTM2NzRaXCJcclxuICAgICAgLz5cclxuICAgIDwvc3ZnPlxyXG4gICk7XHJcbn07XHJcbiIsImV4cG9ydCBjb25zdCBUaHVtYlVwSWNvbiA9ICh7IGNsYXNzTmFtZSB9KSA9PiAoXHJcbiAgPHN2ZyBjbGFzc05hbWU9e2NsYXNzTmFtZX0gd2lkdGg9XCIxOVwiIGhlaWdodD1cIjE3XCIgdmlld0JveD1cIjAgMCAxOSAxN1wiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxyXG4gICAgPHBhdGggZD1cIk01LjE1Nzk0IDE0LjgzNjVWNi42MjEwM0M1LjE1Nzk0IDUuOTM5MzIgNS4zMzk5NiA1LjI2OTk3IDUuNjg1MiA0LjY4MjE0TDguNDk4NjIgMC4yODQxMzRDOC42MDE5OSAwLjEwODEyNCA4Ljc5MDg0IDIuMjU5OTZlLTA1IDguOTk0OTYgMi4yNTk5NmUtMDVDMTAuNjQxMyAyLjI1OTk2ZS0wNSAxMS43NTU2IDEuNjc3NjkgMTEuMTE3MyAzLjE5NTIzTDEwLjA5MjYgNS41Nzk5SDE1Ljg2ODZDMTcuOTE4NCA1LjU3OTkgMTkuMzA4MSA3LjY2NTk0IDE4LjUxODQgOS41NTc1N0wxNi4yNTI0IDE0Ljk4NTVDMTUuODA2IDE2LjA1NDYgMTQuNzYxIDE2Ljc1MDggMTMuNjAyNSAxNi43NTA4SDcuMDcyMjRDNi4wMTUgMTYuNzUwOCA1LjE1Nzk0IDE1Ljg5MzcgNS4xNTc5NCAxNC44MzY1WlwiIC8+XHJcbiAgICA8cGF0aCBkPVwiTTMuNTQ0NDIgMTUuMzk1MVY2LjkzNTZDMy41NDQ0MiA2LjE4Njg2IDIuOTM3NDUgNS41Nzk5IDIuMTg4NzEgNS41Nzk5QzEuNDM5OTggNS41Nzk5IDAuODMzMDA4IDYuMTg2ODcgMC44MzMwMDggNi45MzU2VjE1LjM5NTFDMC44MzMwMDggMTYuMTQzOCAxLjQzOTk4IDE2Ljc1MDggMi4xODg3MSAxNi43NTA4QzIuOTM3NDUgMTYuNzUwOCAzLjU0NDQyIDE2LjE0MzggMy41NDQ0MiAxNS4zOTUxWlwiIC8+XHJcbiAgPC9zdmc+XHJcbik7XHJcbiIsImltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuaW50ZXJmYWNlIFR3aXR0ZXJJY29uUHJvcHMge1xyXG4gIGNsYXNzTmFtZT86IHN0cmluZztcclxuICBob3ZlckNsYXNzTmFtZT86IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFR3aXR0ZXJJY29uOiBSZWFjdC5GQzxUd2l0dGVySWNvblByb3BzPiA9ICh7IGNsYXNzTmFtZSwgaG92ZXJDbGFzc05hbWUgfSkgPT4ge1xyXG4gIGNvbnN0IFtjbGFzc2VzLCBzZXRDbGFzc2VzXSA9IFJlYWN0LnVzZVN0YXRlKGNsYXNzTmFtZSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8c3ZnXHJcbiAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlc31cclxuICAgICAgb25Nb3VzZU92ZXI9eygpID0+IHNldENsYXNzZXMoY2xzeChjbGFzc05hbWUsIGhvdmVyQ2xhc3NOYW1lKSl9XHJcbiAgICAgIG9uTW91c2VMZWF2ZT17KCkgPT4gc2V0Q2xhc3NlcyhjbGFzc05hbWUpfVxyXG4gICAgICB3aWR0aD1cIjIwXCJcclxuICAgICAgaGVpZ2h0PVwiMTZcIlxyXG4gICAgICB2aWV3Qm94PVwiMCAwIDIwIDE2XCJcclxuICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICA+XHJcbiAgICAgIDxwYXRoIGQ9XCJNMjAgMS44OTQxNUMxOS4yNTYzIDIuMjE1MzggMTguNDYzNyAyLjQyODMxIDE3LjYzNzUgMi41MzE2OUMxOC40ODc1IDIuMDMyIDE5LjEzNjMgMS4yNDY3NyAxOS40NDEyIDAuMzAwMzA4QzE4LjY0ODggMC43NjU1MzggMTcuNzczOCAxLjA5NDE1IDE2Ljg0MTIgMS4yNzc1NEMxNi4wODg3IDAuNDg4NjE2IDE1LjAxNjIgMCAxMy44NDYyIDBDMTEuNTc2MyAwIDkuNzQ4NzUgMS44MTQxNSA5Ljc0ODc1IDQuMDM4MTVDOS43NDg3NSA0LjM1ODE1IDkuNzc2MjUgNC42NjU4NSA5Ljg0Mzc1IDQuOTU4NzdDNi40MzUgNC43OTUwOCAzLjQxODc1IDMuMTg2NDYgMS4zOTI1IDAuNzM2QzEuMDM4NzUgMS4zNDAzMSAwLjgzMTI1IDIuMDMyIDAuODMxMjUgMi43NzY2MkMwLjgzMTI1IDQuMTc0NzcgMS41NjI1IDUuNDE0MTUgMi42NTI1IDYuMTMxNjlDMS45OTM3NSA2LjExOTM4IDEuMzQ3NSA1LjkzMTA4IDAuOCA1LjYzNDQ2QzAuOCA1LjY0Njc3IDAuOCA1LjY2Mjc3IDAuOCA1LjY3ODc3QzAuOCA3LjY0MDYyIDIuMjIxMjUgOS4yNzAxNSA0LjA4NSA5LjY0NTU0QzMuNzUxMjUgOS43MzUzOCAzLjM4NzUgOS43Nzg0NiAzLjAxIDkuNzc4NDZDMi43NDc1IDkuNzc4NDYgMi40ODI1IDkuNzYzNjkgMi4yMzM3NSA5LjcwOTU0QzIuNzY1IDExLjMwODMgNC4yNzI1IDEyLjQ4MzcgNi4wNjUgMTIuNTIxOEM0LjY3IDEzLjU5NjMgMi44OTg3NSAxNC4yNDM3IDAuOTgxMjUgMTQuMjQzN0MwLjY0NSAxNC4yNDM3IDAuMzIyNSAxNC4yMjg5IDAgMTQuMTg4M0MxLjgxNjI1IDE1LjM0MTUgMy45Njg3NSAxNiA2LjI5IDE2QzEzLjgzNSAxNiAxNy45NiA5Ljg0NjE1IDE3Ljk2IDQuNTEyQzE3Ljk2IDQuMzMzNTQgMTcuOTUzOCA0LjE2MTIzIDE3Ljk0NSAzLjk5MDE1QzE4Ljc1ODggMy40MjE1NCAxOS40NDI1IDIuNzExMzggMjAgMS44OTQxNVpcIiAvPlxyXG4gICAgPC9zdmc+XHJcbiAgKTtcclxufTtcclxuIiwiaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCc7XHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5pbnRlcmZhY2UgVmtJY29uUHJvcHMge1xyXG4gIGNsYXNzTmFtZT86IHN0cmluZztcclxuICBob3ZlckNsYXNzTmFtZT86IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFZrSWNvbjogUmVhY3QuRkM8VmtJY29uUHJvcHM+ID0gKHsgY2xhc3NOYW1lLCBob3ZlckNsYXNzTmFtZSB9KSA9PiB7XHJcbiAgY29uc3QgW2NsYXNzZXMsIHNldENsYXNzZXNdID0gUmVhY3QudXNlU3RhdGUoY2xhc3NOYW1lKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxzdmdcclxuICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzfVxyXG4gICAgICBvbk1vdXNlT3Zlcj17KCkgPT4gc2V0Q2xhc3NlcyhjbHN4KGNsYXNzTmFtZSwgaG92ZXJDbGFzc05hbWUpKX1cclxuICAgICAgb25Nb3VzZUxlYXZlPXsoKSA9PiBzZXRDbGFzc2VzKGNsYXNzTmFtZSl9XHJcbiAgICAgIHdpZHRoPVwiMjNcIlxyXG4gICAgICBoZWlnaHQ9XCIxNFwiXHJcbiAgICAgIHZpZXdCb3g9XCIwIDAgMjMgMTRcIlxyXG4gICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgID5cclxuICAgICAgPHBhdGggZD1cIk0yMi42Nzg4IDExLjc0NzlDMjIuNjUxMiAxMS42ODg0IDIyLjYyNTUgMTEuNjM5IDIyLjYwMTYgMTEuNTk5NUMyMi4yMDYgMTAuODg3IDIxLjQ1MDEgMTAuMDEyNiAyMC4zMzQyIDguOTc1ODJMMjAuMzEwNyA4Ljk1MjA4TDIwLjI5ODggOC45NDA0NEwyMC4yODY5IDguOTI4NTFIMjAuMjc0OUMxOS43Njg1IDguNDQ1NzQgMTkuNDQ3OCA4LjEyMTE0IDE5LjMxMzUgNy45NTQ5NkMxOS4wNjc4IDcuNjM4MzggMTkuMDEyOCA3LjMxNzk0IDE5LjE0NyA2Ljk5MzI1QzE5LjI0MTkgNi43NDc5NCAxOS41OTgzIDYuMjI5ODggMjAuMjE1NCA1LjQzODM2QzIwLjU0IDUuMDE4ODggMjAuNzk3MSA0LjY4MjY4IDIwLjk4NyA0LjQyOTM4QzIyLjM1NjIgMi42MDkwOSAyMi45NDk4IDEuNDQ1OSAyMi43Njc3IDAuOTM5MzU4TDIyLjY5NjkgMC44MjA5ODZDMjIuNjQ5NCAwLjc0OTcyMSAyMi41MjY4IDAuNjg0NTI2IDIyLjMyOTEgMC42MjUwNjlDMjIuMTMxMSAwLjU2NTczNyAyMS44Nzc5IDAuNTU1OTI1IDIxLjU2OTIgMC41OTU0NjZMMTguMTUwNSAwLjYxOTA4MkMxOC4wOTUxIDAuNTk5NDU3IDE4LjAxNiAwLjYwMTI4NyAxNy45MTMgMC42MjUwNjlDMTcuODEwMSAwLjY0ODg1MiAxNy43NTg2IDAuNjYwNzg1IDE3Ljc1ODYgMC42NjA3ODVMMTcuNjk5MSAwLjY5MDUxM0wxNy42NTE5IDAuNzI2MjI5QzE3LjYxMjMgMC43NDk4NDUgMTcuNTY4NyAwLjc5MTM4MiAxNy41MjEyIDAuODUwNzU2QzE3LjQ3MzkgMC45MDk5MjEgMTcuNDM0NCAwLjk3OTM1NiAxNy40MDI4IDEuMDU4NDhDMTcuMDMwNiAyLjAxNjA2IDE2LjYwNzQgMi45MDYzOCAxNi4xMzI1IDMuNzI5MzdDMTUuODM5NiA0LjIyMDEyIDE1LjU3MDcgNC42NDU0MiAxNS4zMjUxIDUuMDA1NTNDMTUuMDc5OCA1LjM2NTUxIDE0Ljg3NDEgNS42MzA3NCAxNC43MDggNS44MDA3NUMxNC41NDE3IDUuOTcwOTMgMTQuMzkxNiA2LjEwNzI3IDE0LjI1NjggNi4yMTAyNkMxNC4xMjIyIDYuMzEzMjkgMTQuMDE5NSA2LjM1NjgyIDEzLjk0ODMgNi4zNDA4OUMxMy44NzcgNi4zMjQ5NyAxMy44MDk5IDYuMzA5MTcgMTMuNzQ2MyA2LjI5MzM3QzEzLjYzNTYgNi4yMjIxIDEzLjU0NjUgNi4xMjUxOSAxMy40Nzk0IDYuMDAyNTNDMTMuNDExOSA1Ljg3OTg4IDEzLjM2NjUgNS43MjU1IDEzLjM0MjggNS41Mzk1MkMxMy4zMTkyIDUuMzUzNDEgMTMuMzA1MiA1LjE5MzM0IDEzLjMwMTIgNS4wNTg3NUMxMy4yOTc1IDQuOTI0MzMgMTMuMjk5MiA0LjczNDE5IDEzLjMwNzIgNC40ODg4OEMxMy4zMTU1IDQuMjQzNDQgMTMuMzE5MiA0LjA3NzM4IDEzLjMxOTIgMy45OTAzMkMxMy4zMTkyIDMuNjg5NTQgMTMuMzI1IDMuMzYzMTEgMTMuMzM2OCAzLjAxMDk1QzEzLjM0ODggMi42NTg3OCAxMy4zNTg1IDIuMzc5NzUgMTMuMzY2NiAyLjE3NDE5QzEzLjM3NDYgMS45Njg0MiAxMy4zNzg0IDEuNzUwNzEgMTMuMzc4NCAxLjUyMTJDMTMuMzc4NCAxLjI5MTY5IDEzLjM2NDQgMS4xMTE3IDEzLjMzNjggMC45ODEwNjFDMTMuMzA5NSAwLjg1MDU4OSAxMy4yNjc3IDAuNzIzOTQyIDEzLjIxMjUgMC42MDExNjJDMTMuMTU3IDAuNDc4NTA3IDEzLjA3NTcgMC4zODM2MjYgMTIuOTY5MSAwLjMxNjI2OUMxMi44NjIzIDAuMjQ4OTk2IDEyLjcyOTUgMC4xOTU2MDkgMTIuNTcxNSAwLjE1NTk0NEMxMi4xNTIgMC4wNjEwMjEgMTEuNjE3OCAwLjAwOTY3MjA2IDEwLjk2ODggMC4wMDE2ODkwNkM5LjQ5Njg1IC0wLjAxNDExMDYgOC41NTEwOCAwLjA4MDkzNjcgOC4xMzE2NCAwLjI4NjcwN0M3Ljk2NTQ1IDAuMzczNjQ3IDcuODE1MDYgMC40OTI0MzUgNy42ODA2IDAuNjQyNjk4QzcuNTM4MTEgMC44MTY4NjkgNy41MTgyNCAwLjkxMTkxNyA3LjYyMTEgMC45Mjc1NUM4LjA5NjAxIDAuOTk4NjkxIDguNDMyMjEgMS4xNjg4NyA4LjYzMDA4IDEuNDM3OTJMOC43MDEzOCAxLjU4MDQ5QzguNzU2ODUgMS42ODMzNiA4LjgxMjIzIDEuODY1NDcgOC44Njc2NSAyLjEyNjU4QzguOTIyOTkgMi4zODc2OSA4Ljk1ODcxIDIuNjc2NTMgOC45NzQ0MyAyLjk5Mjk0QzkuMDEzOTIgMy41NzA3NSA5LjAxMzkyIDQuMDY1MzcgOC45NzQ0MyA0LjQ3NjgyQzguOTM0OCA0Ljg4ODQ1IDguODk3MzggNS4yMDg4OSA4Ljg2MTY3IDUuNDM4NEM4LjgyNTk1IDUuNjY3OTEgOC43NzI1NiA1Ljg1Mzg5IDguNzAxMzggNS45OTYyOUM4LjYzMDA4IDYuMTM4NzQgOC41ODI2NCA2LjIyNTgxIDguNTU4ODUgNi4yNTc0QzguNTM1MTEgNi4yODkgOC41MTUzMiA2LjMwODkyIDguNDk5NiA2LjMxNjc0QzguMzk2NzQgNi4zNTYxNSA4LjI4OTc2IDYuMzc2MjQgOC4xNzkwNCA2LjM3NjI0QzguMDY4MTUgNi4zNzYyNCA3LjkzMzY4IDYuMzIwNzcgNy43NzU0NCA2LjIwOTkyQzcuNjE3MjMgNi4wOTkwOCA3LjQ1MzA0IDUuOTQ2ODIgNy4yODI4NiA1Ljc1MjlDNy4xMTI2OCA1LjU1ODkzIDYuOTIwNzYgNS4yODc4OSA2LjcwNzAxIDQuOTM5NzFDNi40OTM0MiA0LjU5MTU0IDYuMjcxODEgNC4xODAwNCA2LjA0MjMgMy43MDUyMkw1Ljg1MjQxIDMuMzYwODdDNS43MzM3IDMuMTM5MzQgNS41NzE1NSAyLjgxNjc4IDUuMzY1NzggMi4zOTM0N0M1LjE1OTg4IDEuOTcgNC45Nzc5IDEuNTYwMzcgNC44MTk2OSAxLjE2NDY3QzQuNzU2NDUgMC45OTg0ODIgNC42NjE0NSAwLjg3MTk2MSA0LjUzNDg0IDAuNzg0ODk2TDQuNDc1NDMgMC43NDkxOEM0LjQzNTkzIDAuNzE3NTgxIDQuMzcyNTIgMC42ODQwMjcgNC4yODU1NCAwLjY0ODI3QzQuMTk4NDMgMC42MTI1NTQgNC4xMDc1NCAwLjU4Njk0MiA0LjAxMjQ5IDAuNTcxMTg0TDAuNzU5ODgxIDAuNTk0ODAxQzAuNDI3NTA2IDAuNTk0ODAxIDAuMjAxOTg2IDAuNjcwMDk4IDAuMDgzMjM5NCAwLjgyMDQ4NkwwLjAzNTcxNTYgMC44OTE2MjZDMC4wMTE5NzQ1IDAuOTMxMjUgMCAwLjk5NDUzMiAwIDEuMDgxNjRDMCAxLjE2ODcgMC4wMjM3NDExIDEuMjc1NTYgMC4wNzEyNjQ5IDEuNDAyMDhDMC41NDYwODcgMi41MTgwNCAxLjA2MjQ1IDMuNTk0MjkgMS42MjAzNCA0LjYzMDk5QzIuMTc4MjQgNS42Njc3IDIuNjYzMDQgNi41MDI4IDMuMDc0NDUgNy4xMzU1M0MzLjQ4NTk1IDcuNzY4NzMgMy45MDUzOSA4LjM2NjMzIDQuMzMyNzcgOC45MjgwNUM0Ljc2MDE1IDkuNDg5OTggNS4wNDMwNSA5Ljg1MDA5IDUuMTgxNDYgMTAuMDA4M0M1LjMyMDA0IDEwLjE2NjggNS40Mjg4OSAxMC4yODUzIDUuNTA4MDIgMTAuMzY0NEw1LjgwNDg0IDEwLjY0OTNDNS45OTQ3NyAxMC44MzkyIDYuMjczNjggMTEuMDY2NyA2LjY0MTY5IDExLjMzMThDNy4wMDk3OCAxMS41OTcgNy40MTcyOCAxMS44NTgxIDcuODY0NDEgMTIuMTE1NkM4LjMxMTYzIDEyLjM3MjUgOC44MzE5IDEyLjU4MjMgOS40MjU1MSAxMi43NDQ1QzEwLjAxOSAxMi45MDY4IDEwLjU5NjcgMTIuOTcyIDExLjE1ODYgMTIuOTQwNUgxMi41MjM4QzEyLjgwMDcgMTIuOTE2NiAxMy4wMTA1IDEyLjgyOTYgMTMuMTUzIDEyLjY3OTNMMTMuMjAwMyAxMi42MTk4QzEzLjIzMiAxMi41NzI2IDEzLjI2MTggMTIuNDk5MiAxMy4yODkyIDEyLjQwMDRDMTMuMzE3IDEyLjMwMTUgMTMuMzMwOCAxMi4xOTI2IDEzLjMzMDggMTIuMDc0QzEzLjMyMjcgMTEuNzMzOCAxMy4zNDg2IDExLjQyNzEgMTMuNDA3OCAxMS4xNTQxQzEzLjQ2NjkgMTAuODgxMiAxMy41MzQ0IDEwLjY3NTUgMTMuNjA5OCAxMC41MzY5QzEzLjY4NTIgMTAuMzk4NCAxMy43NzAzIDEwLjI4MTYgMTMuODY0OSAxMC4xODY5QzEzLjk1OTggMTAuMDkxOSAxNC4wMjc0IDEwLjAzNDQgMTQuMDY3MSAxMC4wMTQ3QzE0LjEwNjUgOS45OTQ3NCAxNC4xMzggOS45ODEyMiAxNC4xNjE3IDkuOTczMTFDMTQuMzUxNiA5LjkwOTgzIDE0LjU3NTIgOS45NzExMiAxNC44MzI2IDEwLjE1NzNDMTUuMDg5OSAxMC4zNDMyIDE1LjMzMTEgMTAuNTcyOSAxNS41NTY4IDEwLjg0NThDMTUuNzgyNCAxMS4xMTkgMTYuMDUzNCAxMS40MjU0IDE2LjM2OTkgMTEuNzY1N0MxNi42ODY2IDEyLjEwNiAxNi45NjM1IDEyLjM1OSAxNy4yMDA4IDEyLjUyNTVMMTcuNDM4MSAxMi42Njc5QzE3LjU5NjYgMTIuNzYzIDE3LjgwMjQgMTIuODUgMTguMDU1NyAxMi45MjkyQzE4LjMwODUgMTMuMDA4MiAxOC41MzAxIDEzLjAyOCAxOC43MjAzIDEyLjk4ODVMMjEuNzU5MSAxMi45NDExQzIyLjA1OTcgMTIuOTQxMSAyMi4yOTM2IDEyLjg5MTMgMjIuNDU5NSAxMi43OTI2QzIyLjYyNTcgMTIuNjkzNyAyMi43MjQ0IDEyLjU4NDcgMjIuNzU2MyAxMi40NjYxQzIyLjc4OCAxMi4zNDc1IDIyLjc4OTcgMTIuMjEyOCAyMi43NjIzIDEyLjA2MjNDMjIuNzM0MiAxMS45MTIyIDIyLjcwNjQgMTEuODA3MiAyMi42Nzg4IDExLjc0NzlaXCIgLz5cclxuICAgIDwvc3ZnPlxyXG4gICk7XHJcbn07XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5pbnRlcmZhY2UgV2FybmluZ0ljb25Qcm9wcyB7XHJcbiAgY2xhc3NOYW1lPzogc3RyaW5nO1xyXG59XHJcbmV4cG9ydCBjb25zdCBXYXJuaW5nSWNvbjogUmVhY3QuRkM8V2FybmluZ0ljb25Qcm9wcz4gPSAoeyBjbGFzc05hbWUgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8c3ZnXHJcbiAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lfVxyXG4gICAgICB3aWR0aD1cIjE4XCJcclxuICAgICAgaGVpZ2h0PVwiMThcIlxyXG4gICAgICB2aWV3Qm94PVwiMCAwIDE4IDE4XCJcclxuICAgICAgZmlsbD1cIm5vbmVcIlxyXG4gICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgID5cclxuICAgICAgPHBhdGhcclxuICAgICAgICBkPVwiTTkgNC4yNVY5Ljc2NzcyTTE3IDlDMTcgMTMuNDE4MyAxMy40MTgzIDE3IDkgMTdDNC41ODE3MiAxNyAxIDEzLjQxODMgMSA5QzEgNC41ODE3MiA0LjU4MTcyIDEgOSAxQzEzLjQxODMgMSAxNyA0LjU4MTcyIDE3IDlaTTkgMTMuMzI3N0M4LjcyMzg2IDEzLjMyNzcgOC41IDEzLjEwMzkgOC41IDEyLjgyNzdDOC41IDEyLjU1MTYgOC43MjM4NiAxMi4zMjc3IDkgMTIuMzI3N0M5LjI3NjE0IDEyLjMyNzcgOS41IDEyLjU1MTYgOS41IDEyLjgyNzdDOS41IDEzLjEwMzkgOS4yNzYxNCAxMy4zMjc3IDkgMTMuMzI3N1pcIlxyXG4gICAgICAgIHN0cm9rZT1cIiM5QzlDQUFcIlxyXG4gICAgICAgIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiXHJcbiAgICAgIC8+XHJcbiAgICA8L3N2Zz5cclxuICApO1xyXG59O1xyXG4iLCJpbXBvcnQgY2xzeCBmcm9tICdjbHN4JztcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmludGVyZmFjZSBXaGF0c2FwcEljb25Qcm9wcyB7XHJcbiAgY2xhc3NOYW1lPzogc3RyaW5nO1xyXG4gIGhvdmVyQ2xhc3NOYW1lPzogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgV2hhdHNhcHBJY29uOiBSZWFjdC5GQzxXaGF0c2FwcEljb25Qcm9wcz4gPSAoeyBjbGFzc05hbWUsIGhvdmVyQ2xhc3NOYW1lIH0pID0+IHtcclxuICBjb25zdCBbY2xhc3Nlcywgc2V0Q2xhc3Nlc10gPSBSZWFjdC51c2VTdGF0ZShjbGFzc05hbWUpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPHN2Z1xyXG4gICAgICBjbGFzc05hbWU9e2NsYXNzZXN9XHJcbiAgICAgIG9uTW91c2VPdmVyPXsoKSA9PiBzZXRDbGFzc2VzKGNsc3goY2xhc3NOYW1lLCBob3ZlckNsYXNzTmFtZSkpfVxyXG4gICAgICBvbk1vdXNlTGVhdmU9eygpID0+IHNldENsYXNzZXMoY2xhc3NOYW1lKX1cclxuICAgICAgd2lkdGg9XCIxOFwiXHJcbiAgICAgIGhlaWdodD1cIjE4XCJcclxuICAgICAgdmlld0JveD1cIjAgMCAxOCAxOFwiXHJcbiAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgPlxyXG4gICAgICA8cGF0aCBkPVwiTTkuMDAyMjUgMEg4Ljk5Nzc1QzQuMDM1MzggMCAwIDQuMDM2NSAwIDlDMCAxMC45Njg4IDAuNjM0NSAxMi43OTM1IDEuNzEzMzcgMTQuMjc1MUwwLjU5MTc1IDE3LjYxODZMNC4wNTExMyAxNi41MTI4QzUuNDc0MjUgMTcuNDU1NSA3LjE3MTg4IDE4IDkuMDAyMjUgMThDMTMuOTY0NiAxOCAxOCAxMy45NjI0IDE4IDlDMTggNC4wMzc2MyAxMy45NjQ2IDAgOS4wMDIyNSAwWk0xNC4yMzkxIDEyLjcwOTFDMTQuMDIyIDEzLjMyMjMgMTMuMTYwMiAxMy44MzA3IDEyLjQ3MjkgMTMuOTc5MkMxMi4wMDI2IDE0LjA3OTQgMTEuMzg4NCAxNC4xNTkzIDkuMzIwNjMgMTMuMzAyQzYuNjc1NzUgMTIuMjA2MyA0Ljk3MjUgOS41MTg2MiA0LjgzOTc1IDkuMzQ0MjVDNC43MTI2MyA5LjE2OTg4IDMuNzcxIDcuOTIxMTIgMy43NzEgNi42Mjk2M0MzLjc3MSA1LjMzODEzIDQuNDI2ODggNC43MDkyNSA0LjY5MTI1IDQuNDM5MjVDNC45MDgzOCA0LjIxNzYzIDUuMjY3MjUgNC4xMTYzNyA1LjYxMTUgNC4xMTYzN0M1LjcyMjg4IDQuMTE2MzcgNS44MjMgNC4xMjIgNS45MTMgNC4xMjY1QzYuMTc3MzcgNC4xMzc3NSA2LjMxMDEyIDQuMTUzNSA2LjQ4NDUgNC41NzA4OEM2LjcwMTYyIDUuMDk0IDcuMjMwMzcgNi4zODU1IDcuMjkzMzggNi41MTgyNUM3LjM1NzUgNi42NTEgNy40MjE2MyA2LjgzMSA3LjMzMTYyIDcuMDA1MzhDNy4yNDcyNSA3LjE4NTM4IDcuMTczIDcuMjY1MjUgNy4wNDAyNSA3LjQxODI1QzYuOTA3NSA3LjU3MTI1IDYuNzgxNSA3LjY4ODI1IDYuNjQ4NzUgNy44NTI1QzYuNTI3MjUgNy45OTUzOCA2LjM5IDguMTQ4MzggNi41NDMgOC40MTI3NUM2LjY5NiA4LjY3MTUgNy4yMjQ3NSA5LjUzNDM3IDguMDAzMjUgMTAuMjI3NEM5LjAwNzg3IDExLjEyMTcgOS44MjIzNyAxMS40MDc1IDEwLjExMzcgMTEuNTI5QzEwLjMzMDkgMTEuNjE5IDEwLjU4OTYgMTEuNTk3NiAxMC43NDgzIDExLjQyODlDMTAuOTQ5NiAxMS4yMTE4IDExLjE5ODIgMTAuODUxOCAxMS40NTE0IDEwLjQ5NzRDMTEuNjMxNCAxMC4yNDMxIDExLjg1ODYgMTAuMjExNiAxMi4wOTcxIDEwLjMwMTZDMTIuMzQwMSAxMC4zODYgMTMuNjI2IDExLjAyMTYgMTMuODkwNCAxMS4xNTMyQzE0LjE1NDcgMTEuMjg2IDE0LjMyOTEgMTEuMzQ5IDE0LjM5MzIgMTEuNDYwNEMxNC40NTYyIDExLjU3MTggMTQuNDU2MiAxMi4wOTQ5IDE0LjIzOTEgMTIuNzA5MVpcIiAvPlxyXG4gICAgPC9zdmc+XHJcbiAgKTtcclxufTtcclxuIiwiaW1wb3J0IEF4aW9zIGZyb20gJ2F4aW9zJztcclxuXHJcbmV4cG9ydCBjb25zdCBBUElfVVJMID0gJ2h0dHA6Ly9sb2NhbGhvc3QnO1xyXG5cclxuY29uc3QgaW5zdGFuY2UgPSBBeGlvcy5jcmVhdGUoe1xyXG4gIGJhc2VVUkw6IEFQSV9VUkwsXHJcbiAgd2l0aENyZWRlbnRpYWxzOiB0cnVlLFxyXG59KTtcclxuXHJcbmluc3RhbmNlLmludGVyY2VwdG9ycy5yZXF1ZXN0LnVzZSgoY29uZmlnKSA9PiB7XHJcbiAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cclxuICAgIGNvbmZpZy5oZWFkZXJzLkF1dGhvcml6YXRpb24gPSBgQmVhcmVyICR7d2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpPy5yZXBsYWNlKCclN0MnLCAnfCcpfWA7XHJcbiAgfVxyXG4gIHJldHVybiBjb25maWc7XHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgaW5zdGFuY2U7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge0NvbG9yfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2xhYi9BbGVydFwiO1xyXG5cclxuZXhwb3J0IHR5cGUgQWxlcnRDb250ZXh0UHJvcHMgPSB7XHJcbiAgYWxlcnRJbmZvOiB7IHRleHQ6IFJlYWN0LlJlYWN0Tm9kZTsgc3RhdHVzOiBDb2xvcjsgb3BlbmVkOiBib29sZWFuIH07XHJcbiAgb3BlbkFsZXJ0OiAodGV4dDogUmVhY3QuUmVhY3ROb2RlLCBzdGF0dXM/OiBzdHJpbmcpID0+IHZvaWQ7XHJcbiAgY2xvc2VBbGVydDogKCkgPT4gdm9pZDtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBBbGVydENvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KHt9IGFzIEFsZXJ0Q29udGV4dFByb3BzKTtcclxuXHJcbmV4cG9ydCBjb25zdCB1c2VBbGVydCA9ICgpOiBBbGVydENvbnRleHRQcm9wcyA9PiB7XHJcbiAgcmV0dXJuIHVzZUNvbnRleHQoQWxlcnRDb250ZXh0KTtcclxufTtcclxuIiwiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtIZWFkZXJ9IGZyb20gJy4uL2NvbXBvbmVudHMvSGVhZGVyJztcclxuaW1wb3J0IHtOYXZpZ2F0aW9uRHJhd2VyfSBmcm9tIFwiLi4vY29tcG9uZW50cy9OYXZpZ2F0aW9uRHJhd2VyXCI7XHJcblxyXG5pbnRlcmZhY2UgTWFpbkxheW91dFByb3BzIHtcclxuICAgIHRpdGxlPzogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgTWFpbkxheW91dDogUmVhY3QuRkM8TWFpbkxheW91dFByb3BzPiA9ICh7Y2hpbGRyZW4sIHRpdGxlID0gJ0luZ3Rlcm5ldCd9KSA9PiB7XHJcblxyXG4gICAgY29uc3QgW21lbnVPcGVuZWQsIHRvZ2dsZU1lbnVPcGVuZWRdID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xyXG4gICAgY29uc3Qgb25DbGlja0hhbWJ1cmdlciA9IFJlYWN0LnVzZUNhbGxiYWNrKCgpID0+IHRvZ2dsZU1lbnVPcGVuZWQodHJ1ZSksIFtdKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICAgICAgPHRpdGxlPnt0aXRsZX08L3RpdGxlPlxyXG4gICAgICAgICAgICA8L0hlYWQ+XHJcblxyXG5cclxuICAgICAgICAgICAgPEhlYWRlciBvbkNsaWNrSGFtYnVyZ2VyPXtvbkNsaWNrSGFtYnVyZ2VyfS8+XHJcblxyXG4gICAgICAgICAgICA8TmF2aWdhdGlvbkRyYXdlciBtZW51T3BlbmVkPXttZW51T3BlbmVkfSBvbkNsb3NlPXsoKTogdm9pZCA9PiB0b2dnbGVNZW51T3BlbmVkKGZhbHNlKX0gLz5cclxuXHJcbiAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbn07XHJcbiIsImltcG9ydCBSZWFjdCwgeyBDaGlsZHJlbiwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQge1xuICBhZGRCYXNlUGF0aCxcbiAgYWRkTG9jYWxlLFxuICBnZXREb21haW5Mb2NhbGUsXG4gIGlzTG9jYWxVUkwsXG4gIE5leHRSb3V0ZXIsXG4gIFByZWZldGNoT3B0aW9ucyxcbiAgcmVzb2x2ZUhyZWYsXG59IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnLi9yb3V0ZXInXG5pbXBvcnQgeyB1c2VJbnRlcnNlY3Rpb24gfSBmcm9tICcuL3VzZS1pbnRlcnNlY3Rpb24nXG5cbnR5cGUgVXJsID0gc3RyaW5nIHwgVXJsT2JqZWN0XG50eXBlIFJlcXVpcmVkS2V5czxUPiA9IHtcbiAgW0sgaW4ga2V5b2YgVF0tPzoge30gZXh0ZW5kcyBQaWNrPFQsIEs+ID8gbmV2ZXIgOiBLXG59W2tleW9mIFRdXG50eXBlIE9wdGlvbmFsS2V5czxUPiA9IHtcbiAgW0sgaW4ga2V5b2YgVF0tPzoge30gZXh0ZW5kcyBQaWNrPFQsIEs+ID8gSyA6IG5ldmVyXG59W2tleW9mIFRdXG5cbmV4cG9ydCB0eXBlIExpbmtQcm9wcyA9IHtcbiAgaHJlZjogVXJsXG4gIGFzPzogVXJsXG4gIHJlcGxhY2U/OiBib29sZWFuXG4gIHNjcm9sbD86IGJvb2xlYW5cbiAgc2hhbGxvdz86IGJvb2xlYW5cbiAgcGFzc0hyZWY/OiBib29sZWFuXG4gIHByZWZldGNoPzogYm9vbGVhblxuICBsb2NhbGU/OiBzdHJpbmcgfCBmYWxzZVxufVxudHlwZSBMaW5rUHJvcHNSZXF1aXJlZCA9IFJlcXVpcmVkS2V5czxMaW5rUHJvcHM+XG50eXBlIExpbmtQcm9wc09wdGlvbmFsID0gT3B0aW9uYWxLZXlzPExpbmtQcm9wcz5cblxuY29uc3QgcHJlZmV0Y2hlZDogeyBbY2FjaGVLZXk6IHN0cmluZ106IGJvb2xlYW4gfSA9IHt9XG5cbmZ1bmN0aW9uIHByZWZldGNoKFxuICByb3V0ZXI6IE5leHRSb3V0ZXIsXG4gIGhyZWY6IHN0cmluZyxcbiAgYXM6IHN0cmluZyxcbiAgb3B0aW9ucz86IFByZWZldGNoT3B0aW9uc1xuKTogdm9pZCB7XG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyB8fCAhcm91dGVyKSByZXR1cm5cbiAgaWYgKCFpc0xvY2FsVVJMKGhyZWYpKSByZXR1cm5cbiAgLy8gUHJlZmV0Y2ggdGhlIEpTT04gcGFnZSBpZiBhc2tlZCAob25seSBpbiB0aGUgY2xpZW50KVxuICAvLyBXZSBuZWVkIHRvIGhhbmRsZSBhIHByZWZldGNoIGVycm9yIGhlcmUgc2luY2Ugd2UgbWF5IGJlXG4gIC8vIGxvYWRpbmcgd2l0aCBwcmlvcml0eSB3aGljaCBjYW4gcmVqZWN0IGJ1dCB3ZSBkb24ndFxuICAvLyB3YW50IHRvIGZvcmNlIG5hdmlnYXRpb24gc2luY2UgdGhpcyBpcyBvbmx5IGEgcHJlZmV0Y2hcbiAgcm91dGVyLnByZWZldGNoKGhyZWYsIGFzLCBvcHRpb25zKS5jYXRjaCgoZXJyKSA9PiB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIC8vIHJldGhyb3cgdG8gc2hvdyBpbnZhbGlkIFVSTCBlcnJvcnNcbiAgICAgIHRocm93IGVyclxuICAgIH1cbiAgfSlcbiAgY29uc3QgY3VyTG9jYWxlID1cbiAgICBvcHRpb25zICYmIHR5cGVvZiBvcHRpb25zLmxvY2FsZSAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgID8gb3B0aW9ucy5sb2NhbGVcbiAgICAgIDogcm91dGVyICYmIHJvdXRlci5sb2NhbGVcblxuICAvLyBKb2luIG9uIGFuIGludmFsaWQgVVJJIGNoYXJhY3RlclxuICBwcmVmZXRjaGVkW2hyZWYgKyAnJScgKyBhcyArIChjdXJMb2NhbGUgPyAnJScgKyBjdXJMb2NhbGUgOiAnJyldID0gdHJ1ZVxufVxuXG5mdW5jdGlvbiBpc01vZGlmaWVkRXZlbnQoZXZlbnQ6IFJlYWN0Lk1vdXNlRXZlbnQpOiBib29sZWFuIHtcbiAgY29uc3QgeyB0YXJnZXQgfSA9IGV2ZW50LmN1cnJlbnRUYXJnZXQgYXMgSFRNTEFuY2hvckVsZW1lbnRcbiAgcmV0dXJuIChcbiAgICAodGFyZ2V0ICYmIHRhcmdldCAhPT0gJ19zZWxmJykgfHxcbiAgICBldmVudC5tZXRhS2V5IHx8XG4gICAgZXZlbnQuY3RybEtleSB8fFxuICAgIGV2ZW50LnNoaWZ0S2V5IHx8XG4gICAgZXZlbnQuYWx0S2V5IHx8IC8vIHRyaWdnZXJzIHJlc291cmNlIGRvd25sb2FkXG4gICAgKGV2ZW50Lm5hdGl2ZUV2ZW50ICYmIGV2ZW50Lm5hdGl2ZUV2ZW50LndoaWNoID09PSAyKVxuICApXG59XG5cbmZ1bmN0aW9uIGxpbmtDbGlja2VkKFxuICBlOiBSZWFjdC5Nb3VzZUV2ZW50LFxuICByb3V0ZXI6IE5leHRSb3V0ZXIsXG4gIGhyZWY6IHN0cmluZyxcbiAgYXM6IHN0cmluZyxcbiAgcmVwbGFjZT86IGJvb2xlYW4sXG4gIHNoYWxsb3c/OiBib29sZWFuLFxuICBzY3JvbGw/OiBib29sZWFuLFxuICBsb2NhbGU/OiBzdHJpbmcgfCBmYWxzZVxuKTogdm9pZCB7XG4gIGNvbnN0IHsgbm9kZU5hbWUgfSA9IGUuY3VycmVudFRhcmdldFxuXG4gIGlmIChub2RlTmFtZSA9PT0gJ0EnICYmIChpc01vZGlmaWVkRXZlbnQoZSkgfHwgIWlzTG9jYWxVUkwoaHJlZikpKSB7XG4gICAgLy8gaWdub3JlIGNsaWNrIGZvciBicm93c2Vy4oCZcyBkZWZhdWx0IGJlaGF2aW9yXG4gICAgcmV0dXJuXG4gIH1cblxuICBlLnByZXZlbnREZWZhdWx0KClcblxuICAvLyAgYXZvaWQgc2Nyb2xsIGZvciB1cmxzIHdpdGggYW5jaG9yIHJlZnNcbiAgaWYgKHNjcm9sbCA9PSBudWxsKSB7XG4gICAgc2Nyb2xsID0gYXMuaW5kZXhPZignIycpIDwgMFxuICB9XG5cbiAgLy8gcmVwbGFjZSBzdGF0ZSBpbnN0ZWFkIG9mIHB1c2ggaWYgcHJvcCBpcyBwcmVzZW50XG4gIHJvdXRlcltyZXBsYWNlID8gJ3JlcGxhY2UnIDogJ3B1c2gnXShocmVmLCBhcywge1xuICAgIHNoYWxsb3csXG4gICAgbG9jYWxlLFxuICAgIHNjcm9sbCxcbiAgfSkudGhlbigoc3VjY2VzczogYm9vbGVhbikgPT4ge1xuICAgIGlmICghc3VjY2VzcykgcmV0dXJuXG4gICAgaWYgKHNjcm9sbCkge1xuICAgICAgLy8gRklYTUU6IHByb3BlciByb3V0ZSBhbm5vdW5jaW5nIGF0IFJvdXRlciBsZXZlbCwgbm90IExpbms6XG4gICAgICBkb2N1bWVudC5ib2R5LmZvY3VzKClcbiAgICB9XG4gIH0pXG59XG5cbmZ1bmN0aW9uIExpbmsocHJvcHM6IFJlYWN0LlByb3BzV2l0aENoaWxkcmVuPExpbmtQcm9wcz4pIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBmdW5jdGlvbiBjcmVhdGVQcm9wRXJyb3IoYXJnczoge1xuICAgICAga2V5OiBzdHJpbmdcbiAgICAgIGV4cGVjdGVkOiBzdHJpbmdcbiAgICAgIGFjdHVhbDogc3RyaW5nXG4gICAgfSkge1xuICAgICAgcmV0dXJuIG5ldyBFcnJvcihcbiAgICAgICAgYEZhaWxlZCBwcm9wIHR5cGU6IFRoZSBwcm9wIFxcYCR7YXJncy5rZXl9XFxgIGV4cGVjdHMgYSAke2FyZ3MuZXhwZWN0ZWR9IGluIFxcYDxMaW5rPlxcYCwgYnV0IGdvdCBcXGAke2FyZ3MuYWN0dWFsfVxcYCBpbnN0ZWFkLmAgK1xuICAgICAgICAgICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJ1xuICAgICAgICAgICAgPyBcIlxcbk9wZW4geW91ciBicm93c2VyJ3MgY29uc29sZSB0byB2aWV3IHRoZSBDb21wb25lbnQgc3RhY2sgdHJhY2UuXCJcbiAgICAgICAgICAgIDogJycpXG4gICAgICApXG4gICAgfVxuXG4gICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICBjb25zdCByZXF1aXJlZFByb3BzR3VhcmQ6IFJlY29yZDxMaW5rUHJvcHNSZXF1aXJlZCwgdHJ1ZT4gPSB7XG4gICAgICBocmVmOiB0cnVlLFxuICAgIH0gYXMgY29uc3RcbiAgICBjb25zdCByZXF1aXJlZFByb3BzOiBMaW5rUHJvcHNSZXF1aXJlZFtdID0gT2JqZWN0LmtleXMoXG4gICAgICByZXF1aXJlZFByb3BzR3VhcmRcbiAgICApIGFzIExpbmtQcm9wc1JlcXVpcmVkW11cbiAgICByZXF1aXJlZFByb3BzLmZvckVhY2goKGtleTogTGlua1Byb3BzUmVxdWlyZWQpID0+IHtcbiAgICAgIGlmIChrZXkgPT09ICdocmVmJykge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgcHJvcHNba2V5XSA9PSBudWxsIHx8XG4gICAgICAgICAgKHR5cGVvZiBwcm9wc1trZXldICE9PSAnc3RyaW5nJyAmJiB0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ29iamVjdCcpXG4gICAgICAgICkge1xuICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBleHBlY3RlZDogJ2BzdHJpbmdgIG9yIGBvYmplY3RgJyxcbiAgICAgICAgICAgIGFjdHVhbDogcHJvcHNba2V5XSA9PT0gbnVsbCA/ICdudWxsJyA6IHR5cGVvZiBwcm9wc1trZXldLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbiAgICAgICAgY29uc3QgXzogbmV2ZXIgPSBrZXlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICBjb25zdCBvcHRpb25hbFByb3BzR3VhcmQ6IFJlY29yZDxMaW5rUHJvcHNPcHRpb25hbCwgdHJ1ZT4gPSB7XG4gICAgICBhczogdHJ1ZSxcbiAgICAgIHJlcGxhY2U6IHRydWUsXG4gICAgICBzY3JvbGw6IHRydWUsXG4gICAgICBzaGFsbG93OiB0cnVlLFxuICAgICAgcGFzc0hyZWY6IHRydWUsXG4gICAgICBwcmVmZXRjaDogdHJ1ZSxcbiAgICAgIGxvY2FsZTogdHJ1ZSxcbiAgICB9IGFzIGNvbnN0XG4gICAgY29uc3Qgb3B0aW9uYWxQcm9wczogTGlua1Byb3BzT3B0aW9uYWxbXSA9IE9iamVjdC5rZXlzKFxuICAgICAgb3B0aW9uYWxQcm9wc0d1YXJkXG4gICAgKSBhcyBMaW5rUHJvcHNPcHRpb25hbFtdXG4gICAgb3B0aW9uYWxQcm9wcy5mb3JFYWNoKChrZXk6IExpbmtQcm9wc09wdGlvbmFsKSA9PiB7XG4gICAgICBjb25zdCB2YWxUeXBlID0gdHlwZW9mIHByb3BzW2tleV1cblxuICAgICAgaWYgKGtleSA9PT0gJ2FzJykge1xuICAgICAgICBpZiAocHJvcHNba2V5XSAmJiB2YWxUeXBlICE9PSAnc3RyaW5nJyAmJiB2YWxUeXBlICE9PSAnb2JqZWN0Jykge1xuICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBleHBlY3RlZDogJ2BzdHJpbmdgIG9yIGBvYmplY3RgJyxcbiAgICAgICAgICAgIGFjdHVhbDogdmFsVHlwZSxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGtleSA9PT0gJ2xvY2FsZScpIHtcbiAgICAgICAgaWYgKHByb3BzW2tleV0gJiYgdmFsVHlwZSAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgc3RyaW5nYCcsXG4gICAgICAgICAgICBhY3R1YWw6IHZhbFR5cGUsXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAga2V5ID09PSAncmVwbGFjZScgfHxcbiAgICAgICAga2V5ID09PSAnc2Nyb2xsJyB8fFxuICAgICAgICBrZXkgPT09ICdzaGFsbG93JyB8fFxuICAgICAgICBrZXkgPT09ICdwYXNzSHJlZicgfHxcbiAgICAgICAga2V5ID09PSAncHJlZmV0Y2gnXG4gICAgICApIHtcbiAgICAgICAgaWYgKHByb3BzW2tleV0gIT0gbnVsbCAmJiB2YWxUeXBlICE9PSAnYm9vbGVhbicpIHtcbiAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgYm9vbGVhbmAnLFxuICAgICAgICAgICAgYWN0dWFsOiB2YWxUeXBlLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbiAgICAgICAgY29uc3QgXzogbmV2ZXIgPSBrZXlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgLy8gVGhpcyBob29rIGlzIGluIGEgY29uZGl0aW9uYWwgYnV0IHRoYXQgaXMgb2sgYmVjYXVzZSBgcHJvY2Vzcy5lbnYuTk9ERV9FTlZgIG5ldmVyIGNoYW5nZXNcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvcnVsZXMtb2YtaG9va3NcbiAgICBjb25zdCBoYXNXYXJuZWQgPSBSZWFjdC51c2VSZWYoZmFsc2UpXG4gICAgaWYgKHByb3BzLnByZWZldGNoICYmICFoYXNXYXJuZWQuY3VycmVudCkge1xuICAgICAgaGFzV2FybmVkLmN1cnJlbnQgPSB0cnVlXG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICdOZXh0LmpzIGF1dG8tcHJlZmV0Y2hlcyBhdXRvbWF0aWNhbGx5IGJhc2VkIG9uIHZpZXdwb3J0LiBUaGUgcHJlZmV0Y2ggYXR0cmlidXRlIGlzIG5vIGxvbmdlciBuZWVkZWQuIE1vcmU6IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL3ByZWZldGNoLXRydWUtZGVwcmVjYXRlZCdcbiAgICAgIClcbiAgICB9XG4gIH1cbiAgY29uc3QgcCA9IHByb3BzLnByZWZldGNoICE9PSBmYWxzZVxuXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gIGNvbnN0IHBhdGhuYW1lID0gKHJvdXRlciAmJiByb3V0ZXIucGF0aG5hbWUpIHx8ICcvJ1xuXG4gIGNvbnN0IHsgaHJlZiwgYXMgfSA9IFJlYWN0LnVzZU1lbW8oKCkgPT4ge1xuICAgIGNvbnN0IFtyZXNvbHZlZEhyZWYsIHJlc29sdmVkQXNdID0gcmVzb2x2ZUhyZWYocGF0aG5hbWUsIHByb3BzLmhyZWYsIHRydWUpXG4gICAgcmV0dXJuIHtcbiAgICAgIGhyZWY6IHJlc29sdmVkSHJlZixcbiAgICAgIGFzOiBwcm9wcy5hc1xuICAgICAgICA/IHJlc29sdmVIcmVmKHBhdGhuYW1lLCBwcm9wcy5hcylcbiAgICAgICAgOiByZXNvbHZlZEFzIHx8IHJlc29sdmVkSHJlZixcbiAgICB9XG4gIH0sIFtwYXRobmFtZSwgcHJvcHMuaHJlZiwgcHJvcHMuYXNdKVxuXG4gIGxldCB7IGNoaWxkcmVuLCByZXBsYWNlLCBzaGFsbG93LCBzY3JvbGwsIGxvY2FsZSB9ID0gcHJvcHNcblxuICAvLyBEZXByZWNhdGVkLiBXYXJuaW5nIHNob3duIGJ5IHByb3BUeXBlIGNoZWNrLiBJZiB0aGUgY2hpbGRyZW4gcHJvdmlkZWQgaXMgYSBzdHJpbmcgKDxMaW5rPmV4YW1wbGU8L0xpbms+KSB3ZSB3cmFwIGl0IGluIGFuIDxhPiB0YWdcbiAgaWYgKHR5cGVvZiBjaGlsZHJlbiA9PT0gJ3N0cmluZycpIHtcbiAgICBjaGlsZHJlbiA9IDxhPntjaGlsZHJlbn08L2E+XG4gIH1cblxuICAvLyBUaGlzIHdpbGwgcmV0dXJuIHRoZSBmaXJzdCBjaGlsZCwgaWYgbXVsdGlwbGUgYXJlIHByb3ZpZGVkIGl0IHdpbGwgdGhyb3cgYW4gZXJyb3JcbiAgY29uc3QgY2hpbGQ6IGFueSA9IENoaWxkcmVuLm9ubHkoY2hpbGRyZW4pXG4gIGNvbnN0IGNoaWxkUmVmOiBhbnkgPSBjaGlsZCAmJiB0eXBlb2YgY2hpbGQgPT09ICdvYmplY3QnICYmIGNoaWxkLnJlZlxuXG4gIGNvbnN0IFtzZXRJbnRlcnNlY3Rpb25SZWYsIGlzVmlzaWJsZV0gPSB1c2VJbnRlcnNlY3Rpb24oe1xuICAgIHJvb3RNYXJnaW46ICcyMDBweCcsXG4gIH0pXG4gIGNvbnN0IHNldFJlZiA9IFJlYWN0LnVzZUNhbGxiYWNrKFxuICAgIChlbDogRWxlbWVudCkgPT4ge1xuICAgICAgc2V0SW50ZXJzZWN0aW9uUmVmKGVsKVxuICAgICAgaWYgKGNoaWxkUmVmKSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2hpbGRSZWYgPT09ICdmdW5jdGlvbicpIGNoaWxkUmVmKGVsKVxuICAgICAgICBlbHNlIGlmICh0eXBlb2YgY2hpbGRSZWYgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgY2hpbGRSZWYuY3VycmVudCA9IGVsXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIFtjaGlsZFJlZiwgc2V0SW50ZXJzZWN0aW9uUmVmXVxuICApXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3Qgc2hvdWxkUHJlZmV0Y2ggPSBpc1Zpc2libGUgJiYgcCAmJiBpc0xvY2FsVVJMKGhyZWYpXG4gICAgY29uc3QgY3VyTG9jYWxlID1cbiAgICAgIHR5cGVvZiBsb2NhbGUgIT09ICd1bmRlZmluZWQnID8gbG9jYWxlIDogcm91dGVyICYmIHJvdXRlci5sb2NhbGVcbiAgICBjb25zdCBpc1ByZWZldGNoZWQgPVxuICAgICAgcHJlZmV0Y2hlZFtocmVmICsgJyUnICsgYXMgKyAoY3VyTG9jYWxlID8gJyUnICsgY3VyTG9jYWxlIDogJycpXVxuICAgIGlmIChzaG91bGRQcmVmZXRjaCAmJiAhaXNQcmVmZXRjaGVkKSB7XG4gICAgICBwcmVmZXRjaChyb3V0ZXIsIGhyZWYsIGFzLCB7XG4gICAgICAgIGxvY2FsZTogY3VyTG9jYWxlLFxuICAgICAgfSlcbiAgICB9XG4gIH0sIFthcywgaHJlZiwgaXNWaXNpYmxlLCBsb2NhbGUsIHAsIHJvdXRlcl0pXG5cbiAgY29uc3QgY2hpbGRQcm9wczoge1xuICAgIG9uTW91c2VFbnRlcj86IFJlYWN0Lk1vdXNlRXZlbnRIYW5kbGVyXG4gICAgb25DbGljazogUmVhY3QuTW91c2VFdmVudEhhbmRsZXJcbiAgICBocmVmPzogc3RyaW5nXG4gICAgcmVmPzogYW55XG4gIH0gPSB7XG4gICAgcmVmOiBzZXRSZWYsXG4gICAgb25DbGljazogKGU6IFJlYWN0Lk1vdXNlRXZlbnQpID0+IHtcbiAgICAgIGlmIChjaGlsZC5wcm9wcyAmJiB0eXBlb2YgY2hpbGQucHJvcHMub25DbGljayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBjaGlsZC5wcm9wcy5vbkNsaWNrKGUpXG4gICAgICB9XG4gICAgICBpZiAoIWUuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgICBsaW5rQ2xpY2tlZChlLCByb3V0ZXIsIGhyZWYsIGFzLCByZXBsYWNlLCBzaGFsbG93LCBzY3JvbGwsIGxvY2FsZSlcbiAgICAgIH1cbiAgICB9LFxuICB9XG5cbiAgY2hpbGRQcm9wcy5vbk1vdXNlRW50ZXIgPSAoZTogUmVhY3QuTW91c2VFdmVudCkgPT4ge1xuICAgIGlmICghaXNMb2NhbFVSTChocmVmKSkgcmV0dXJuXG4gICAgaWYgKGNoaWxkLnByb3BzICYmIHR5cGVvZiBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGNoaWxkLnByb3BzLm9uTW91c2VFbnRlcihlKVxuICAgIH1cbiAgICBwcmVmZXRjaChyb3V0ZXIsIGhyZWYsIGFzLCB7IHByaW9yaXR5OiB0cnVlIH0pXG4gIH1cblxuICAvLyBJZiBjaGlsZCBpcyBhbiA8YT4gdGFnIGFuZCBkb2Vzbid0IGhhdmUgYSBocmVmIGF0dHJpYnV0ZSwgb3IgaWYgdGhlICdwYXNzSHJlZicgcHJvcGVydHkgaXNcbiAgLy8gZGVmaW5lZCwgd2Ugc3BlY2lmeSB0aGUgY3VycmVudCAnaHJlZicsIHNvIHRoYXQgcmVwZXRpdGlvbiBpcyBub3QgbmVlZGVkIGJ5IHRoZSB1c2VyXG4gIGlmIChwcm9wcy5wYXNzSHJlZiB8fCAoY2hpbGQudHlwZSA9PT0gJ2EnICYmICEoJ2hyZWYnIGluIGNoaWxkLnByb3BzKSkpIHtcbiAgICBjb25zdCBjdXJMb2NhbGUgPVxuICAgICAgdHlwZW9mIGxvY2FsZSAhPT0gJ3VuZGVmaW5lZCcgPyBsb2NhbGUgOiByb3V0ZXIgJiYgcm91dGVyLmxvY2FsZVxuXG4gICAgLy8gd2Ugb25seSByZW5kZXIgZG9tYWluIGxvY2FsZXMgaWYgd2UgYXJlIGN1cnJlbnRseSBvbiBhIGRvbWFpbiBsb2NhbGVcbiAgICAvLyBzbyB0aGF0IGxvY2FsZSBsaW5rcyBhcmUgc3RpbGwgdmlzaXRhYmxlIGluIGRldmVsb3BtZW50L3ByZXZpZXcgZW52c1xuICAgIGNvbnN0IGxvY2FsZURvbWFpbiA9XG4gICAgICByb3V0ZXIgJiZcbiAgICAgIHJvdXRlci5pc0xvY2FsZURvbWFpbiAmJlxuICAgICAgZ2V0RG9tYWluTG9jYWxlKFxuICAgICAgICBhcyxcbiAgICAgICAgY3VyTG9jYWxlLFxuICAgICAgICByb3V0ZXIgJiYgcm91dGVyLmxvY2FsZXMsXG4gICAgICAgIHJvdXRlciAmJiByb3V0ZXIuZG9tYWluTG9jYWxlc1xuICAgICAgKVxuXG4gICAgY2hpbGRQcm9wcy5ocmVmID1cbiAgICAgIGxvY2FsZURvbWFpbiB8fFxuICAgICAgYWRkQmFzZVBhdGgoYWRkTG9jYWxlKGFzLCBjdXJMb2NhbGUsIHJvdXRlciAmJiByb3V0ZXIuZGVmYXVsdExvY2FsZSkpXG4gIH1cblxuICByZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkLCBjaGlsZFByb3BzKVxufVxuXG5leHBvcnQgZGVmYXVsdCBMaW5rXG4iLCIvKipcbiAqIFJlbW92ZXMgdGhlIHRyYWlsaW5nIHNsYXNoIG9mIGEgcGF0aCBpZiB0aGVyZSBpcyBvbmUuIFByZXNlcnZlcyB0aGUgcm9vdCBwYXRoIGAvYC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBwYXRoLmVuZHNXaXRoKCcvJykgJiYgcGF0aCAhPT0gJy8nID8gcGF0aC5zbGljZSgwLCAtMSkgOiBwYXRoXG59XG5cbi8qKlxuICogTm9ybWFsaXplcyB0aGUgdHJhaWxpbmcgc2xhc2ggb2YgYSBwYXRoIGFjY29yZGluZyB0byB0aGUgYHRyYWlsaW5nU2xhc2hgIG9wdGlvblxuICogaW4gYG5leHQuY29uZmlnLmpzYC5cbiAqL1xuZXhwb3J0IGNvbnN0IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoID0gcHJvY2Vzcy5lbnYuX19ORVhUX1RSQUlMSU5HX1NMQVNIXG4gID8gKHBhdGg6IHN0cmluZyk6IHN0cmluZyA9PiB7XG4gICAgICBpZiAoL1xcLlteL10rXFwvPyQvLnRlc3QocGF0aCkpIHtcbiAgICAgICAgcmV0dXJuIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGgpXG4gICAgICB9IGVsc2UgaWYgKHBhdGguZW5kc1dpdGgoJy8nKSkge1xuICAgICAgICByZXR1cm4gcGF0aFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHBhdGggKyAnLydcbiAgICAgIH1cbiAgICB9XG4gIDogcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2hcbiIsInR5cGUgUmVxdWVzdElkbGVDYWxsYmFja0hhbmRsZSA9IGFueVxudHlwZSBSZXF1ZXN0SWRsZUNhbGxiYWNrT3B0aW9ucyA9IHtcbiAgdGltZW91dDogbnVtYmVyXG59XG50eXBlIFJlcXVlc3RJZGxlQ2FsbGJhY2tEZWFkbGluZSA9IHtcbiAgcmVhZG9ubHkgZGlkVGltZW91dDogYm9vbGVhblxuICB0aW1lUmVtYWluaW5nOiAoKSA9PiBudW1iZXJcbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgV2luZG93IHtcbiAgICByZXF1ZXN0SWRsZUNhbGxiYWNrOiAoXG4gICAgICBjYWxsYmFjazogKGRlYWRsaW5lOiBSZXF1ZXN0SWRsZUNhbGxiYWNrRGVhZGxpbmUpID0+IHZvaWQsXG4gICAgICBvcHRzPzogUmVxdWVzdElkbGVDYWxsYmFja09wdGlvbnNcbiAgICApID0+IFJlcXVlc3RJZGxlQ2FsbGJhY2tIYW5kbGVcbiAgICBjYW5jZWxJZGxlQ2FsbGJhY2s6IChpZDogUmVxdWVzdElkbGVDYWxsYmFja0hhbmRsZSkgPT4gdm9pZFxuICB9XG59XG5cbmV4cG9ydCBjb25zdCByZXF1ZXN0SWRsZUNhbGxiYWNrID1cbiAgKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyAmJiBzZWxmLnJlcXVlc3RJZGxlQ2FsbGJhY2spIHx8XG4gIGZ1bmN0aW9uIChcbiAgICBjYjogKGRlYWRsaW5lOiBSZXF1ZXN0SWRsZUNhbGxiYWNrRGVhZGxpbmUpID0+IHZvaWRcbiAgKTogTm9kZUpTLlRpbWVvdXQge1xuICAgIGxldCBzdGFydCA9IERhdGUubm93KClcbiAgICByZXR1cm4gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICBjYih7XG4gICAgICAgIGRpZFRpbWVvdXQ6IGZhbHNlLFxuICAgICAgICB0aW1lUmVtYWluaW5nOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIE1hdGgubWF4KDAsIDUwIC0gKERhdGUubm93KCkgLSBzdGFydCkpXG4gICAgICAgIH0sXG4gICAgICB9KVxuICAgIH0sIDEpXG4gIH1cblxuZXhwb3J0IGNvbnN0IGNhbmNlbElkbGVDYWxsYmFjayA9XG4gICh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgJiYgc2VsZi5jYW5jZWxJZGxlQ2FsbGJhY2spIHx8XG4gIGZ1bmN0aW9uIChpZDogUmVxdWVzdElkbGVDYWxsYmFja0hhbmRsZSkge1xuICAgIHJldHVybiBjbGVhclRpbWVvdXQoaWQpXG4gIH1cbiIsImltcG9ydCB7IENvbXBvbmVudFR5cGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IENsaWVudEJ1aWxkTWFuaWZlc3QgfSBmcm9tICcuLi9idWlsZC93ZWJwYWNrL3BsdWdpbnMvYnVpbGQtbWFuaWZlc3QtcGx1Z2luJ1xuaW1wb3J0IGdldEFzc2V0UGF0aEZyb21Sb3V0ZSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUnXG5pbXBvcnQgeyByZXF1ZXN0SWRsZUNhbGxiYWNrIH0gZnJvbSAnLi9yZXF1ZXN0LWlkbGUtY2FsbGJhY2snXG5cbi8vIDMuOHMgd2FzIGFyYml0cmFyaWx5IGNob3NlbiBhcyBpdCdzIHdoYXQgaHR0cHM6Ly93ZWIuZGV2L2ludGVyYWN0aXZlXG4vLyBjb25zaWRlcnMgYXMgXCJHb29kXCIgdGltZS10by1pbnRlcmFjdGl2ZS4gV2UgbXVzdCBhc3N1bWUgc29tZXRoaW5nIHdlbnRcbi8vIHdyb25nIGJleW9uZCB0aGlzIHBvaW50LCBhbmQgdGhlbiBmYWxsLWJhY2sgdG8gYSBmdWxsIHBhZ2UgdHJhbnNpdGlvbiB0b1xuLy8gc2hvdyB0aGUgdXNlciBzb21ldGhpbmcgb2YgdmFsdWUuXG5jb25zdCBNU19NQVhfSURMRV9ERUxBWSA9IDM4MDBcblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgV2luZG93IHtcbiAgICBfX0JVSUxEX01BTklGRVNUPzogQ2xpZW50QnVpbGRNYW5pZmVzdFxuICAgIF9fQlVJTERfTUFOSUZFU1RfQ0I/OiBGdW5jdGlvblxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTG9hZGVkRW50cnlwb2ludFN1Y2Nlc3Mge1xuICBjb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgZXhwb3J0czogYW55XG59XG5leHBvcnQgaW50ZXJmYWNlIExvYWRlZEVudHJ5cG9pbnRGYWlsdXJlIHtcbiAgZXJyb3I6IHVua25vd25cbn1cbmV4cG9ydCB0eXBlIFJvdXRlRW50cnlwb2ludCA9IExvYWRlZEVudHJ5cG9pbnRTdWNjZXNzIHwgTG9hZGVkRW50cnlwb2ludEZhaWx1cmVcblxuZXhwb3J0IGludGVyZmFjZSBSb3V0ZVN0eWxlU2hlZXQge1xuICBocmVmOiBzdHJpbmdcbiAgY29udGVudDogc3RyaW5nXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTG9hZGVkUm91dGVTdWNjZXNzIGV4dGVuZHMgTG9hZGVkRW50cnlwb2ludFN1Y2Nlc3Mge1xuICBzdHlsZXM6IFJvdXRlU3R5bGVTaGVldFtdXG59XG5leHBvcnQgaW50ZXJmYWNlIExvYWRlZFJvdXRlRmFpbHVyZSB7XG4gIGVycm9yOiB1bmtub3duXG59XG5leHBvcnQgdHlwZSBSb3V0ZUxvYWRlckVudHJ5ID0gTG9hZGVkUm91dGVTdWNjZXNzIHwgTG9hZGVkUm91dGVGYWlsdXJlXG5cbmV4cG9ydCB0eXBlIEZ1dHVyZTxWPiA9IHtcbiAgcmVzb2x2ZTogKGVudHJ5cG9pbnQ6IFYpID0+IHZvaWRcbiAgZnV0dXJlOiBQcm9taXNlPFY+XG59XG5mdW5jdGlvbiB3aXRoRnV0dXJlPFQ+KFxuICBrZXk6IHN0cmluZyxcbiAgbWFwOiBNYXA8c3RyaW5nLCBGdXR1cmU8VD4gfCBUPixcbiAgZ2VuZXJhdG9yPzogKCkgPT4gUHJvbWlzZTxUPlxuKTogUHJvbWlzZTxUPiB7XG4gIGxldCBlbnRyeTogRnV0dXJlPFQ+IHwgVCB8IHVuZGVmaW5lZCA9IG1hcC5nZXQoa2V5KVxuICBpZiAoZW50cnkpIHtcbiAgICBpZiAoJ2Z1dHVyZScgaW4gZW50cnkpIHtcbiAgICAgIHJldHVybiBlbnRyeS5mdXR1cmVcbiAgICB9XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShlbnRyeSlcbiAgfVxuICBsZXQgcmVzb2x2ZXI6IChlbnRyeXBvaW50OiBUKSA9PiB2b2lkXG4gIGNvbnN0IHByb206IFByb21pc2U8VD4gPSBuZXcgUHJvbWlzZTxUPigocmVzb2x2ZSkgPT4ge1xuICAgIHJlc29sdmVyID0gcmVzb2x2ZVxuICB9KVxuICBtYXAuc2V0KGtleSwgKGVudHJ5ID0geyByZXNvbHZlOiByZXNvbHZlciEsIGZ1dHVyZTogcHJvbSB9KSlcbiAgcmV0dXJuIGdlbmVyYXRvclxuICAgID8gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlcXVlbmNlc1xuICAgICAgZ2VuZXJhdG9yKCkudGhlbigodmFsdWUpID0+IChyZXNvbHZlcih2YWx1ZSksIHZhbHVlKSlcbiAgICA6IHByb21cbn1cblxuZXhwb3J0IGludGVyZmFjZSBSb3V0ZUxvYWRlciB7XG4gIHdoZW5FbnRyeXBvaW50KHJvdXRlOiBzdHJpbmcpOiBQcm9taXNlPFJvdXRlRW50cnlwb2ludD5cbiAgb25FbnRyeXBvaW50KHJvdXRlOiBzdHJpbmcsIGV4ZWN1dGU6ICgpID0+IHVua25vd24pOiB2b2lkXG4gIGxvYWRSb3V0ZShyb3V0ZTogc3RyaW5nKTogUHJvbWlzZTxSb3V0ZUxvYWRlckVudHJ5PlxuICBwcmVmZXRjaChyb3V0ZTogc3RyaW5nKTogUHJvbWlzZTx2b2lkPlxufVxuXG5mdW5jdGlvbiBoYXNQcmVmZXRjaChsaW5rPzogSFRNTExpbmtFbGVtZW50KTogYm9vbGVhbiB7XG4gIHRyeSB7XG4gICAgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKVxuICAgIHJldHVybiAoXG4gICAgICAvLyBkZXRlY3QgSUUxMSBzaW5jZSBpdCBzdXBwb3J0cyBwcmVmZXRjaCBidXQgaXNuJ3QgZGV0ZWN0ZWRcbiAgICAgIC8vIHdpdGggcmVsTGlzdC5zdXBwb3J0XG4gICAgICAoISF3aW5kb3cuTVNJbnB1dE1ldGhvZENvbnRleHQgJiYgISEoZG9jdW1lbnQgYXMgYW55KS5kb2N1bWVudE1vZGUpIHx8XG4gICAgICBsaW5rLnJlbExpc3Quc3VwcG9ydHMoJ3ByZWZldGNoJylcbiAgICApXG4gIH0gY2F0Y2gge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG59XG5cbmNvbnN0IGNhblByZWZldGNoOiBib29sZWFuID0gaGFzUHJlZmV0Y2goKVxuXG5mdW5jdGlvbiBwcmVmZXRjaFZpYURvbShcbiAgaHJlZjogc3RyaW5nLFxuICBhczogc3RyaW5nLFxuICBsaW5rPzogSFRNTExpbmtFbGVtZW50XG4pOiBQcm9taXNlPGFueT4ge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlcywgcmVqKSA9PiB7XG4gICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYGxpbmtbcmVsPVwicHJlZmV0Y2hcIl1baHJlZl49XCIke2hyZWZ9XCJdYCkpIHtcbiAgICAgIHJldHVybiByZXMoKVxuICAgIH1cblxuICAgIGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaW5rJylcblxuICAgIC8vIFRoZSBvcmRlciBvZiBwcm9wZXJ0eSBhc3NpZ25tZW50IGhlcmUgaXMgaW50ZW50aW9uYWw6XG4gICAgaWYgKGFzKSBsaW5rIS5hcyA9IGFzXG4gICAgbGluayEucmVsID0gYHByZWZldGNoYFxuICAgIGxpbmshLmNyb3NzT3JpZ2luID0gcHJvY2Vzcy5lbnYuX19ORVhUX0NST1NTX09SSUdJTiFcbiAgICBsaW5rIS5vbmxvYWQgPSByZXNcbiAgICBsaW5rIS5vbmVycm9yID0gcmVqXG5cbiAgICAvLyBgaHJlZmAgc2hvdWxkIGFsd2F5cyBiZSBsYXN0OlxuICAgIGxpbmshLmhyZWYgPSBocmVmXG5cbiAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKGxpbmspXG4gIH0pXG59XG5cbmNvbnN0IEFTU0VUX0xPQURfRVJST1IgPSBTeW1ib2woJ0FTU0VUX0xPQURfRVJST1InKVxuLy8gVE9ETzogdW5leHBvcnRcbmV4cG9ydCBmdW5jdGlvbiBtYXJrQXNzZXRFcnJvcihlcnI6IEVycm9yKTogRXJyb3Ige1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KGVyciwgQVNTRVRfTE9BRF9FUlJPUiwge30pXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0Fzc2V0RXJyb3IoZXJyPzogRXJyb3IpOiBib29sZWFuIHwgdW5kZWZpbmVkIHtcbiAgcmV0dXJuIGVyciAmJiBBU1NFVF9MT0FEX0VSUk9SIGluIGVyclxufVxuXG5mdW5jdGlvbiBhcHBlbmRTY3JpcHQoXG4gIHNyYzogc3RyaW5nLFxuICBzY3JpcHQ/OiBIVE1MU2NyaXB0RWxlbWVudFxuKTogUHJvbWlzZTx1bmtub3duPiB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0JylcblxuICAgIC8vIFRoZSBvcmRlciBvZiBwcm9wZXJ0eSBhc3NpZ25tZW50IGhlcmUgaXMgaW50ZW50aW9uYWwuXG4gICAgLy8gMS4gU2V0dXAgc3VjY2Vzcy9mYWlsdXJlIGhvb2tzIGluIGNhc2UgdGhlIGJyb3dzZXIgc3luY2hyb25vdXNseVxuICAgIC8vICAgIGV4ZWN1dGVzIHdoZW4gYHNyY2AgaXMgc2V0LlxuICAgIHNjcmlwdC5vbmxvYWQgPSByZXNvbHZlXG4gICAgc2NyaXB0Lm9uZXJyb3IgPSAoKSA9PlxuICAgICAgcmVqZWN0KG1hcmtBc3NldEVycm9yKG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc2NyaXB0OiAke3NyY31gKSkpXG5cbiAgICAvLyAyLiBDb25maWd1cmUgdGhlIGNyb3NzLW9yaWdpbiBhdHRyaWJ1dGUgYmVmb3JlIHNldHRpbmcgYHNyY2AgaW4gY2FzZSB0aGVcbiAgICAvLyAgICBicm93c2VyIGJlZ2lucyB0byBmZXRjaC5cbiAgICBzY3JpcHQuY3Jvc3NPcmlnaW4gPSBwcm9jZXNzLmVudi5fX05FWFRfQ1JPU1NfT1JJR0lOIVxuXG4gICAgLy8gMy4gRmluYWxseSwgc2V0IHRoZSBzb3VyY2UgYW5kIGluamVjdCBpbnRvIHRoZSBET00gaW4gY2FzZSB0aGUgY2hpbGRcbiAgICAvLyAgICBtdXN0IGJlIGFwcGVuZGVkIGZvciBmZXRjaGluZyB0byBzdGFydC5cbiAgICBzY3JpcHQuc3JjID0gc3JjXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzY3JpcHQpXG4gIH0pXG59XG5cbi8vIFJlc29sdmUgYSBwcm9taXNlIHRoYXQgdGltZXMgb3V0IGFmdGVyIGdpdmVuIGFtb3VudCBvZiBtaWxsaXNlY29uZHMuXG5mdW5jdGlvbiByZXNvbHZlUHJvbWlzZVdpdGhUaW1lb3V0PFQ+KFxuICBwOiBQcm9taXNlPFQ+LFxuICBtczogbnVtYmVyLFxuICBlcnI6IEVycm9yXG4pOiBQcm9taXNlPFQ+IHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2VcblxuICAgIHAudGhlbigocikgPT4ge1xuICAgICAgLy8gUmVzb2x2ZWQsIGNhbmNlbCB0aGUgdGltZW91dFxuICAgICAgY2FuY2VsbGVkID0gdHJ1ZVxuICAgICAgcmVzb2x2ZShyKVxuICAgIH0pLmNhdGNoKHJlamVjdClcblxuICAgIHJlcXVlc3RJZGxlQ2FsbGJhY2soKCkgPT5cbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBpZiAoIWNhbmNlbGxlZCkge1xuICAgICAgICAgIHJlamVjdChlcnIpXG4gICAgICAgIH1cbiAgICAgIH0sIG1zKVxuICAgIClcbiAgfSlcbn1cblxuLy8gVE9ETzogc3RvcCBleHBvcnRpbmcgb3IgY2FjaGUgdGhlIGZhaWx1cmVcbi8vIEl0J2QgYmUgYmVzdCB0byBzdG9wIGV4cG9ydGluZyB0aGlzLiBJdCdzIGFuIGltcGxlbWVudGF0aW9uIGRldGFpbC4gV2UncmVcbi8vIG9ubHkgZXhwb3J0aW5nIGl0IGZvciBiYWNrd2FyZHMgY29tcGF0aWJpbHR5IHdpdGggdGhlIGBwYWdlLWxvYWRlcmAuXG4vLyBPbmx5IGNhY2hlIHRoaXMgcmVzcG9uc2UgYXMgYSBsYXN0IHJlc29ydCBpZiB3ZSBjYW5ub3QgZWxpbWluYXRlIGFsbCBvdGhlclxuLy8gY29kZSBicmFuY2hlcyB0aGF0IHVzZSB0aGUgQnVpbGQgTWFuaWZlc3QgQ2FsbGJhY2sgYW5kIHB1c2ggdGhlbSB0aHJvdWdoXG4vLyB0aGUgUm91dGUgTG9hZGVyIGludGVyZmFjZS5cbmV4cG9ydCBmdW5jdGlvbiBnZXRDbGllbnRCdWlsZE1hbmlmZXN0KCk6IFByb21pc2U8Q2xpZW50QnVpbGRNYW5pZmVzdD4ge1xuICBpZiAoc2VsZi5fX0JVSUxEX01BTklGRVNUKSB7XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShzZWxmLl9fQlVJTERfTUFOSUZFU1QpXG4gIH1cblxuICBjb25zdCBvbkJ1aWxkTWFuaWZlc3Q6IFByb21pc2U8Q2xpZW50QnVpbGRNYW5pZmVzdD4gPSBuZXcgUHJvbWlzZTxcbiAgICBDbGllbnRCdWlsZE1hbmlmZXN0XG4gID4oKHJlc29sdmUpID0+IHtcbiAgICAvLyBNYW5kYXRvcnkgYmVjYXVzZSB0aGlzIGlzIG5vdCBjb25jdXJyZW50IHNhZmU6XG4gICAgY29uc3QgY2IgPSBzZWxmLl9fQlVJTERfTUFOSUZFU1RfQ0JcbiAgICBzZWxmLl9fQlVJTERfTUFOSUZFU1RfQ0IgPSAoKSA9PiB7XG4gICAgICByZXNvbHZlKHNlbGYuX19CVUlMRF9NQU5JRkVTVClcbiAgICAgIGNiICYmIGNiKClcbiAgICB9XG4gIH0pXG5cbiAgcmV0dXJuIHJlc29sdmVQcm9taXNlV2l0aFRpbWVvdXQ8Q2xpZW50QnVpbGRNYW5pZmVzdD4oXG4gICAgb25CdWlsZE1hbmlmZXN0LFxuICAgIE1TX01BWF9JRExFX0RFTEFZLFxuICAgIG1hcmtBc3NldEVycm9yKG5ldyBFcnJvcignRmFpbGVkIHRvIGxvYWQgY2xpZW50IGJ1aWxkIG1hbmlmZXN0JykpXG4gIClcbn1cblxuaW50ZXJmYWNlIFJvdXRlRmlsZXMge1xuICBzY3JpcHRzOiBzdHJpbmdbXVxuICBjc3M6IHN0cmluZ1tdXG59XG5mdW5jdGlvbiBnZXRGaWxlc0ZvclJvdXRlKFxuICBhc3NldFByZWZpeDogc3RyaW5nLFxuICByb3V0ZTogc3RyaW5nXG4pOiBQcm9taXNlPFJvdXRlRmlsZXM+IHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh7XG4gICAgICBzY3JpcHRzOiBbXG4gICAgICAgIGFzc2V0UHJlZml4ICtcbiAgICAgICAgICAnL19uZXh0L3N0YXRpYy9jaHVua3MvcGFnZXMnICtcbiAgICAgICAgICBlbmNvZGVVUkkoZ2V0QXNzZXRQYXRoRnJvbVJvdXRlKHJvdXRlLCAnLmpzJykpLFxuICAgICAgXSxcbiAgICAgIC8vIFN0eWxlcyBhcmUgaGFuZGxlZCBieSBgc3R5bGUtbG9hZGVyYCBpbiBkZXZlbG9wbWVudDpcbiAgICAgIGNzczogW10sXG4gICAgfSlcbiAgfVxuICByZXR1cm4gZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCgpLnRoZW4oKG1hbmlmZXN0KSA9PiB7XG4gICAgaWYgKCEocm91dGUgaW4gbWFuaWZlc3QpKSB7XG4gICAgICB0aHJvdyBtYXJrQXNzZXRFcnJvcihuZXcgRXJyb3IoYEZhaWxlZCB0byBsb29rdXAgcm91dGU6ICR7cm91dGV9YCkpXG4gICAgfVxuICAgIGNvbnN0IGFsbEZpbGVzID0gbWFuaWZlc3Rbcm91dGVdLm1hcChcbiAgICAgIChlbnRyeSkgPT4gYXNzZXRQcmVmaXggKyAnL19uZXh0LycgKyBlbmNvZGVVUkkoZW50cnkpXG4gICAgKVxuICAgIHJldHVybiB7XG4gICAgICBzY3JpcHRzOiBhbGxGaWxlcy5maWx0ZXIoKHYpID0+IHYuZW5kc1dpdGgoJy5qcycpKSxcbiAgICAgIGNzczogYWxsRmlsZXMuZmlsdGVyKCh2KSA9PiB2LmVuZHNXaXRoKCcuY3NzJykpLFxuICAgIH1cbiAgfSlcbn1cblxuZnVuY3Rpb24gY3JlYXRlUm91dGVMb2FkZXIoYXNzZXRQcmVmaXg6IHN0cmluZyk6IFJvdXRlTG9hZGVyIHtcbiAgY29uc3QgZW50cnlwb2ludHM6IE1hcDxcbiAgICBzdHJpbmcsXG4gICAgRnV0dXJlPFJvdXRlRW50cnlwb2ludD4gfCBSb3V0ZUVudHJ5cG9pbnRcbiAgPiA9IG5ldyBNYXAoKVxuICBjb25zdCBsb2FkZWRTY3JpcHRzOiBNYXA8c3RyaW5nLCBQcm9taXNlPHVua25vd24+PiA9IG5ldyBNYXAoKVxuICBjb25zdCBzdHlsZVNoZWV0czogTWFwPHN0cmluZywgUHJvbWlzZTxSb3V0ZVN0eWxlU2hlZXQ+PiA9IG5ldyBNYXAoKVxuICBjb25zdCByb3V0ZXM6IE1hcDxcbiAgICBzdHJpbmcsXG4gICAgRnV0dXJlPFJvdXRlTG9hZGVyRW50cnk+IHwgUm91dGVMb2FkZXJFbnRyeVxuICA+ID0gbmV3IE1hcCgpXG5cbiAgZnVuY3Rpb24gbWF5YmVFeGVjdXRlU2NyaXB0KHNyYzogc3RyaW5nKTogUHJvbWlzZTx1bmtub3duPiB7XG4gICAgbGV0IHByb206IFByb21pc2U8dW5rbm93bj4gfCB1bmRlZmluZWQgPSBsb2FkZWRTY3JpcHRzLmdldChzcmMpXG4gICAgaWYgKHByb20pIHtcbiAgICAgIHJldHVybiBwcm9tXG4gICAgfVxuXG4gICAgLy8gU2tpcCBleGVjdXRpbmcgc2NyaXB0IGlmIGl0J3MgYWxyZWFkeSBpbiB0aGUgRE9NOlxuICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBzY3JpcHRbc3JjXj1cIiR7c3JjfVwiXWApKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKClcbiAgICB9XG5cbiAgICBsb2FkZWRTY3JpcHRzLnNldChzcmMsIChwcm9tID0gYXBwZW5kU2NyaXB0KHNyYykpKVxuICAgIHJldHVybiBwcm9tXG4gIH1cblxuICBmdW5jdGlvbiBmZXRjaFN0eWxlU2hlZXQoaHJlZjogc3RyaW5nKTogUHJvbWlzZTxSb3V0ZVN0eWxlU2hlZXQ+IHtcbiAgICBsZXQgcHJvbTogUHJvbWlzZTxSb3V0ZVN0eWxlU2hlZXQ+IHwgdW5kZWZpbmVkID0gc3R5bGVTaGVldHMuZ2V0KGhyZWYpXG4gICAgaWYgKHByb20pIHtcbiAgICAgIHJldHVybiBwcm9tXG4gICAgfVxuXG4gICAgc3R5bGVTaGVldHMuc2V0KFxuICAgICAgaHJlZixcbiAgICAgIChwcm9tID0gZmV0Y2goaHJlZilcbiAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgIGlmICghcmVzLm9rKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0eWxlc2hlZXQ6ICR7aHJlZn1gKVxuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gcmVzLnRleHQoKS50aGVuKCh0ZXh0KSA9PiAoeyBocmVmOiBocmVmLCBjb250ZW50OiB0ZXh0IH0pKVxuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgIHRocm93IG1hcmtBc3NldEVycm9yKGVycilcbiAgICAgICAgfSkpXG4gICAgKVxuICAgIHJldHVybiBwcm9tXG4gIH1cblxuICByZXR1cm4ge1xuICAgIHdoZW5FbnRyeXBvaW50KHJvdXRlOiBzdHJpbmcpIHtcbiAgICAgIHJldHVybiB3aXRoRnV0dXJlKHJvdXRlLCBlbnRyeXBvaW50cylcbiAgICB9LFxuICAgIG9uRW50cnlwb2ludChyb3V0ZTogc3RyaW5nLCBleGVjdXRlOiAoKSA9PiB1bmtub3duKSB7XG4gICAgICBQcm9taXNlLnJlc29sdmUoZXhlY3V0ZSlcbiAgICAgICAgLnRoZW4oKGZuKSA9PiBmbigpKVxuICAgICAgICAudGhlbihcbiAgICAgICAgICAoZXhwb3J0czogYW55KSA9PiAoe1xuICAgICAgICAgICAgY29tcG9uZW50OiAoZXhwb3J0cyAmJiBleHBvcnRzLmRlZmF1bHQpIHx8IGV4cG9ydHMsXG4gICAgICAgICAgICBleHBvcnRzOiBleHBvcnRzLFxuICAgICAgICAgIH0pLFxuICAgICAgICAgIChlcnIpID0+ICh7IGVycm9yOiBlcnIgfSlcbiAgICAgICAgKVxuICAgICAgICAudGhlbigoaW5wdXQ6IFJvdXRlRW50cnlwb2ludCkgPT4ge1xuICAgICAgICAgIGNvbnN0IG9sZCA9IGVudHJ5cG9pbnRzLmdldChyb3V0ZSlcbiAgICAgICAgICBlbnRyeXBvaW50cy5zZXQocm91dGUsIGlucHV0KVxuICAgICAgICAgIGlmIChvbGQgJiYgJ3Jlc29sdmUnIGluIG9sZCkgb2xkLnJlc29sdmUoaW5wdXQpXG4gICAgICAgIH0pXG4gICAgfSxcbiAgICBsb2FkUm91dGUocm91dGU6IHN0cmluZykge1xuICAgICAgcmV0dXJuIHdpdGhGdXR1cmU8Um91dGVMb2FkZXJFbnRyeT4ocm91dGUsIHJvdXRlcywgYXN5bmMgKCkgPT4ge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGNvbnN0IHsgc2NyaXB0cywgY3NzIH0gPSBhd2FpdCBnZXRGaWxlc0ZvclJvdXRlKGFzc2V0UHJlZml4LCByb3V0ZSlcbiAgICAgICAgICBjb25zdCBbLCBzdHlsZXNdID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgICAgICAgZW50cnlwb2ludHMuaGFzKHJvdXRlKVxuICAgICAgICAgICAgICA/IFtdXG4gICAgICAgICAgICAgIDogUHJvbWlzZS5hbGwoc2NyaXB0cy5tYXAobWF5YmVFeGVjdXRlU2NyaXB0KSksXG4gICAgICAgICAgICBQcm9taXNlLmFsbChjc3MubWFwKGZldGNoU3R5bGVTaGVldCkpLFxuICAgICAgICAgIF0gYXMgY29uc3QpXG5cbiAgICAgICAgICBjb25zdCBlbnRyeXBvaW50OiBSb3V0ZUVudHJ5cG9pbnQgPSBhd2FpdCByZXNvbHZlUHJvbWlzZVdpdGhUaW1lb3V0KFxuICAgICAgICAgICAgdGhpcy53aGVuRW50cnlwb2ludChyb3V0ZSksXG4gICAgICAgICAgICBNU19NQVhfSURMRV9ERUxBWSxcbiAgICAgICAgICAgIG1hcmtBc3NldEVycm9yKFxuICAgICAgICAgICAgICBuZXcgRXJyb3IoYFJvdXRlIGRpZCBub3QgY29tcGxldGUgbG9hZGluZzogJHtyb3V0ZX1gKVxuICAgICAgICAgICAgKVxuICAgICAgICAgIClcblxuICAgICAgICAgIGNvbnN0IHJlczogUm91dGVMb2FkZXJFbnRyeSA9IE9iamVjdC5hc3NpZ248XG4gICAgICAgICAgICB7IHN0eWxlczogUm91dGVTdHlsZVNoZWV0W10gfSxcbiAgICAgICAgICAgIFJvdXRlRW50cnlwb2ludFxuICAgICAgICAgID4oeyBzdHlsZXMgfSwgZW50cnlwb2ludClcbiAgICAgICAgICByZXR1cm4gJ2Vycm9yJyBpbiBlbnRyeXBvaW50ID8gZW50cnlwb2ludCA6IHJlc1xuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICByZXR1cm4geyBlcnJvcjogZXJyIH1cbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9LFxuICAgIHByZWZldGNoKHJvdXRlOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9Hb29nbGVDaHJvbWVMYWJzL3F1aWNrbGluay9ibG9iLzQ1M2E2NjFmYTFmYTk0MGUyZDJlMDQ0NDUyMzk4ZTM4YzY3YTk4ZmIvc3JjL2luZGV4Lm1qcyNMMTE1LUwxMThcbiAgICAgIC8vIExpY2Vuc2U6IEFwYWNoZSAyLjBcbiAgICAgIGxldCBjblxuICAgICAgaWYgKChjbiA9IChuYXZpZ2F0b3IgYXMgYW55KS5jb25uZWN0aW9uKSkge1xuICAgICAgICAvLyBEb24ndCBwcmVmZXRjaCBpZiB1c2luZyAyRyBvciBpZiBTYXZlLURhdGEgaXMgZW5hYmxlZC5cbiAgICAgICAgaWYgKGNuLnNhdmVEYXRhIHx8IC8yZy8udGVzdChjbi5lZmZlY3RpdmVUeXBlKSkgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpXG4gICAgICB9XG4gICAgICByZXR1cm4gZ2V0RmlsZXNGb3JSb3V0ZShhc3NldFByZWZpeCwgcm91dGUpXG4gICAgICAgIC50aGVuKChvdXRwdXQpID0+XG4gICAgICAgICAgUHJvbWlzZS5hbGwoXG4gICAgICAgICAgICBjYW5QcmVmZXRjaFxuICAgICAgICAgICAgICA/IG91dHB1dC5zY3JpcHRzLm1hcCgoc2NyaXB0KSA9PiBwcmVmZXRjaFZpYURvbShzY3JpcHQsICdzY3JpcHQnKSlcbiAgICAgICAgICAgICAgOiBbXVxuICAgICAgICAgIClcbiAgICAgICAgKVxuICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgcmVxdWVzdElkbGVDYWxsYmFjaygoKSA9PiB0aGlzLmxvYWRSb3V0ZShyb3V0ZSkpXG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaChcbiAgICAgICAgICAvLyBzd2FsbG93IHByZWZldGNoIGVycm9yc1xuICAgICAgICAgICgpID0+IHt9XG4gICAgICAgIClcbiAgICB9LFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVJvdXRlTG9hZGVyXG4iLCIvKiBnbG9iYWwgd2luZG93ICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUm91dGVyLCB7IE5leHRSb3V0ZXIgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IFJvdXRlckNvbnRleHQgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQnXG5cbnR5cGUgQ2xhc3NBcmd1bWVudHM8VD4gPSBUIGV4dGVuZHMgbmV3ICguLi5hcmdzOiBpbmZlciBVKSA9PiBhbnkgPyBVIDogYW55XG5cbnR5cGUgUm91dGVyQXJncyA9IENsYXNzQXJndW1lbnRzPHR5cGVvZiBSb3V0ZXI+XG5cbnR5cGUgU2luZ2xldG9uUm91dGVyQmFzZSA9IHtcbiAgcm91dGVyOiBSb3V0ZXIgfCBudWxsXG4gIHJlYWR5Q2FsbGJhY2tzOiBBcnJheTwoKSA9PiBhbnk+XG4gIHJlYWR5KGNiOiAoKSA9PiBhbnkpOiB2b2lkXG59XG5cbmV4cG9ydCB7IFJvdXRlciwgTmV4dFJvdXRlciB9XG5cbmV4cG9ydCB0eXBlIFNpbmdsZXRvblJvdXRlciA9IFNpbmdsZXRvblJvdXRlckJhc2UgJiBOZXh0Um91dGVyXG5cbmNvbnN0IHNpbmdsZXRvblJvdXRlcjogU2luZ2xldG9uUm91dGVyQmFzZSA9IHtcbiAgcm91dGVyOiBudWxsLCAvLyBob2xkcyB0aGUgYWN0dWFsIHJvdXRlciBpbnN0YW5jZVxuICByZWFkeUNhbGxiYWNrczogW10sXG4gIHJlYWR5KGNiOiAoKSA9PiB2b2lkKSB7XG4gICAgaWYgKHRoaXMucm91dGVyKSByZXR1cm4gY2IoKVxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhpcy5yZWFkeUNhbGxiYWNrcy5wdXNoKGNiKVxuICAgIH1cbiAgfSxcbn1cblxuLy8gQ3JlYXRlIHB1YmxpYyBwcm9wZXJ0aWVzIGFuZCBtZXRob2RzIG9mIHRoZSByb3V0ZXIgaW4gdGhlIHNpbmdsZXRvblJvdXRlclxuY29uc3QgdXJsUHJvcGVydHlGaWVsZHMgPSBbXG4gICdwYXRobmFtZScsXG4gICdyb3V0ZScsXG4gICdxdWVyeScsXG4gICdhc1BhdGgnLFxuICAnY29tcG9uZW50cycsXG4gICdpc0ZhbGxiYWNrJyxcbiAgJ2Jhc2VQYXRoJyxcbiAgJ2xvY2FsZScsXG4gICdsb2NhbGVzJyxcbiAgJ2RlZmF1bHRMb2NhbGUnLFxuICAnaXNSZWFkeScsXG4gICdpc1ByZXZpZXcnLFxuICAnaXNMb2NhbGVEb21haW4nLFxuXVxuY29uc3Qgcm91dGVyRXZlbnRzID0gW1xuICAncm91dGVDaGFuZ2VTdGFydCcsXG4gICdiZWZvcmVIaXN0b3J5Q2hhbmdlJyxcbiAgJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLFxuICAncm91dGVDaGFuZ2VFcnJvcicsXG4gICdoYXNoQ2hhbmdlU3RhcnQnLFxuICAnaGFzaENoYW5nZUNvbXBsZXRlJyxcbl1cbmNvbnN0IGNvcmVNZXRob2RGaWVsZHMgPSBbXG4gICdwdXNoJyxcbiAgJ3JlcGxhY2UnLFxuICAncmVsb2FkJyxcbiAgJ2JhY2snLFxuICAncHJlZmV0Y2gnLFxuICAnYmVmb3JlUG9wU3RhdGUnLFxuXVxuXG4vLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLCAnZXZlbnRzJywge1xuICBnZXQoKSB7XG4gICAgcmV0dXJuIFJvdXRlci5ldmVudHNcbiAgfSxcbn0pXG5cbnVybFByb3BlcnR5RmllbGRzLmZvckVhY2goKGZpZWxkOiBzdHJpbmcpID0+IHtcbiAgLy8gSGVyZSB3ZSBuZWVkIHRvIHVzZSBPYmplY3QuZGVmaW5lUHJvcGVydHkgYmVjYXVzZSwgd2UgbmVlZCB0byByZXR1cm5cbiAgLy8gdGhlIHByb3BlcnR5IGFzc2lnbmVkIHRvIHRoZSBhY3R1YWwgcm91dGVyXG4gIC8vIFRoZSB2YWx1ZSBtaWdodCBnZXQgY2hhbmdlZCBhcyB3ZSBjaGFuZ2Ugcm91dGVzIGFuZCB0aGlzIGlzIHRoZVxuICAvLyBwcm9wZXIgd2F5IHRvIGFjY2VzcyBpdFxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLCBmaWVsZCwge1xuICAgIGdldCgpIHtcbiAgICAgIGNvbnN0IHJvdXRlciA9IGdldFJvdXRlcigpIGFzIGFueVxuICAgICAgcmV0dXJuIHJvdXRlcltmaWVsZF0gYXMgc3RyaW5nXG4gICAgfSxcbiAgfSlcbn0pXG5cbmNvcmVNZXRob2RGaWVsZHMuZm9yRWFjaCgoZmllbGQ6IHN0cmluZykgPT4ge1xuICAvLyBXZSBkb24ndCByZWFsbHkga25vdyB0aGUgdHlwZXMgaGVyZSwgc28gd2UgYWRkIHRoZW0gbGF0ZXIgaW5zdGVhZFxuICA7KHNpbmdsZXRvblJvdXRlciBhcyBhbnkpW2ZpZWxkXSA9ICguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgIGNvbnN0IHJvdXRlciA9IGdldFJvdXRlcigpIGFzIGFueVxuICAgIHJldHVybiByb3V0ZXJbZmllbGRdKC4uLmFyZ3MpXG4gIH1cbn0pXG5cbnJvdXRlckV2ZW50cy5mb3JFYWNoKChldmVudDogc3RyaW5nKSA9PiB7XG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeSgoKSA9PiB7XG4gICAgUm91dGVyLmV2ZW50cy5vbihldmVudCwgKC4uLmFyZ3MpID0+IHtcbiAgICAgIGNvbnN0IGV2ZW50RmllbGQgPSBgb24ke2V2ZW50LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpfSR7ZXZlbnQuc3Vic3RyaW5nKFxuICAgICAgICAxXG4gICAgICApfWBcbiAgICAgIGNvbnN0IF9zaW5nbGV0b25Sb3V0ZXIgPSBzaW5nbGV0b25Sb3V0ZXIgYXMgYW55XG4gICAgICBpZiAoX3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0oLi4uYXJncylcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihgRXJyb3Igd2hlbiBydW5uaW5nIHRoZSBSb3V0ZXIgZXZlbnQ6ICR7ZXZlbnRGaWVsZH1gKVxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYCR7ZXJyLm1lc3NhZ2V9XFxuJHtlcnIuc3RhY2t9YClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gIH0pXG59KVxuXG5mdW5jdGlvbiBnZXRSb3V0ZXIoKTogUm91dGVyIHtcbiAgaWYgKCFzaW5nbGV0b25Sb3V0ZXIucm91dGVyKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9XG4gICAgICAnTm8gcm91dGVyIGluc3RhbmNlIGZvdW5kLlxcbicgK1xuICAgICAgJ1lvdSBzaG91bGQgb25seSB1c2UgXCJuZXh0L3JvdXRlclwiIGluc2lkZSB0aGUgY2xpZW50IHNpZGUgb2YgeW91ciBhcHAuXFxuJ1xuICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICB9XG4gIHJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyXG59XG5cbi8vIEV4cG9ydCB0aGUgc2luZ2xldG9uUm91dGVyIGFuZCB0aGlzIGlzIHRoZSBwdWJsaWMgQVBJLlxuZXhwb3J0IGRlZmF1bHQgc2luZ2xldG9uUm91dGVyIGFzIFNpbmdsZXRvblJvdXRlclxuXG4vLyBSZWV4cG9ydCB0aGUgd2l0aFJvdXRlIEhPQ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB3aXRoUm91dGVyIH0gZnJvbSAnLi93aXRoLXJvdXRlcidcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZVJvdXRlcigpOiBOZXh0Um91dGVyIHtcbiAgcmV0dXJuIFJlYWN0LnVzZUNvbnRleHQoUm91dGVyQ29udGV4dClcbn1cblxuLy8gSU5URVJOQUwgQVBJU1xuLy8gLS0tLS0tLS0tLS0tLVxuLy8gKGRvIG5vdCB1c2UgZm9sbG93aW5nIGV4cG9ydHMgaW5zaWRlIHRoZSBhcHApXG5cbi8vIENyZWF0ZSBhIHJvdXRlciBhbmQgYXNzaWduIGl0IGFzIHRoZSBzaW5nbGV0b24gaW5zdGFuY2UuXG4vLyBUaGlzIGlzIHVzZWQgaW4gY2xpZW50IHNpZGUgd2hlbiB3ZSBhcmUgaW5pdGlsaXppbmcgdGhlIGFwcC5cbi8vIFRoaXMgc2hvdWxkICoqbm90KiogdXNlIGluc2lkZSB0aGUgc2VydmVyLlxuZXhwb3J0IGNvbnN0IGNyZWF0ZVJvdXRlciA9ICguLi5hcmdzOiBSb3V0ZXJBcmdzKTogUm91dGVyID0+IHtcbiAgc2luZ2xldG9uUm91dGVyLnJvdXRlciA9IG5ldyBSb3V0ZXIoLi4uYXJncylcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzLmZvckVhY2goKGNiKSA9PiBjYigpKVxuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3MgPSBbXVxuXG4gIHJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyXG59XG5cbi8vIFRoaXMgZnVuY3Rpb24gaXMgdXNlZCB0byBjcmVhdGUgdGhlIGB3aXRoUm91dGVyYCByb3V0ZXIgaW5zdGFuY2VcbmV4cG9ydCBmdW5jdGlvbiBtYWtlUHVibGljUm91dGVySW5zdGFuY2Uocm91dGVyOiBSb3V0ZXIpOiBOZXh0Um91dGVyIHtcbiAgY29uc3QgX3JvdXRlciA9IHJvdXRlciBhcyBhbnlcbiAgY29uc3QgaW5zdGFuY2UgPSB7fSBhcyBhbnlcblxuICBmb3IgKGNvbnN0IHByb3BlcnR5IG9mIHVybFByb3BlcnR5RmllbGRzKSB7XG4gICAgaWYgKHR5cGVvZiBfcm91dGVyW3Byb3BlcnR5XSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIGluc3RhbmNlW3Byb3BlcnR5XSA9IE9iamVjdC5hc3NpZ24oXG4gICAgICAgIEFycmF5LmlzQXJyYXkoX3JvdXRlcltwcm9wZXJ0eV0pID8gW10gOiB7fSxcbiAgICAgICAgX3JvdXRlcltwcm9wZXJ0eV1cbiAgICAgICkgLy8gbWFrZXMgc3VyZSBxdWVyeSBpcyBub3Qgc3RhdGVmdWxcbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuXG4gICAgaW5zdGFuY2VbcHJvcGVydHldID0gX3JvdXRlcltwcm9wZXJ0eV1cbiAgfVxuXG4gIC8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbiAgaW5zdGFuY2UuZXZlbnRzID0gUm91dGVyLmV2ZW50c1xuXG4gIGNvcmVNZXRob2RGaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgICBpbnN0YW5jZVtmaWVsZF0gPSAoLi4uYXJnczogYW55W10pID0+IHtcbiAgICAgIHJldHVybiBfcm91dGVyW2ZpZWxkXSguLi5hcmdzKVxuICAgIH1cbiAgfSlcblxuICByZXR1cm4gaW5zdGFuY2Vcbn1cbiIsImltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7XG4gIHJlcXVlc3RJZGxlQ2FsbGJhY2ssXG4gIGNhbmNlbElkbGVDYWxsYmFjayxcbn0gZnJvbSAnLi9yZXF1ZXN0LWlkbGUtY2FsbGJhY2snXG5cbnR5cGUgVXNlSW50ZXJzZWN0aW9uT2JzZXJ2ZXJJbml0ID0gUGljazxJbnRlcnNlY3Rpb25PYnNlcnZlckluaXQsICdyb290TWFyZ2luJz5cbnR5cGUgVXNlSW50ZXJzZWN0aW9uID0geyBkaXNhYmxlZD86IGJvb2xlYW4gfSAmIFVzZUludGVyc2VjdGlvbk9ic2VydmVySW5pdFxudHlwZSBPYnNlcnZlQ2FsbGJhY2sgPSAoaXNWaXNpYmxlOiBib29sZWFuKSA9PiB2b2lkXG50eXBlIE9ic2VydmVyID0ge1xuICBpZDogc3RyaW5nXG4gIG9ic2VydmVyOiBJbnRlcnNlY3Rpb25PYnNlcnZlclxuICBlbGVtZW50czogTWFwPEVsZW1lbnQsIE9ic2VydmVDYWxsYmFjaz5cbn1cblxuY29uc3QgaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgPSB0eXBlb2YgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgIT09ICd1bmRlZmluZWQnXG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VJbnRlcnNlY3Rpb248VCBleHRlbmRzIEVsZW1lbnQ+KHtcbiAgcm9vdE1hcmdpbixcbiAgZGlzYWJsZWQsXG59OiBVc2VJbnRlcnNlY3Rpb24pOiBbKGVsZW1lbnQ6IFQgfCBudWxsKSA9PiB2b2lkLCBib29sZWFuXSB7XG4gIGNvbnN0IGlzRGlzYWJsZWQ6IGJvb2xlYW4gPSBkaXNhYmxlZCB8fCAhaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXJcblxuICBjb25zdCB1bm9ic2VydmUgPSB1c2VSZWY8RnVuY3Rpb24+KClcbiAgY29uc3QgW3Zpc2libGUsIHNldFZpc2libGVdID0gdXNlU3RhdGUoZmFsc2UpXG5cbiAgY29uc3Qgc2V0UmVmID0gdXNlQ2FsbGJhY2soXG4gICAgKGVsOiBUIHwgbnVsbCkgPT4ge1xuICAgICAgaWYgKHVub2JzZXJ2ZS5jdXJyZW50KSB7XG4gICAgICAgIHVub2JzZXJ2ZS5jdXJyZW50KClcbiAgICAgICAgdW5vYnNlcnZlLmN1cnJlbnQgPSB1bmRlZmluZWRcbiAgICAgIH1cblxuICAgICAgaWYgKGlzRGlzYWJsZWQgfHwgdmlzaWJsZSkgcmV0dXJuXG5cbiAgICAgIGlmIChlbCAmJiBlbC50YWdOYW1lKSB7XG4gICAgICAgIHVub2JzZXJ2ZS5jdXJyZW50ID0gb2JzZXJ2ZShcbiAgICAgICAgICBlbCxcbiAgICAgICAgICAoaXNWaXNpYmxlKSA9PiBpc1Zpc2libGUgJiYgc2V0VmlzaWJsZShpc1Zpc2libGUpLFxuICAgICAgICAgIHsgcm9vdE1hcmdpbiB9XG4gICAgICAgIClcbiAgICAgIH1cbiAgICB9LFxuICAgIFtpc0Rpc2FibGVkLCByb290TWFyZ2luLCB2aXNpYmxlXVxuICApXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIWhhc0ludGVyc2VjdGlvbk9ic2VydmVyKSB7XG4gICAgICBpZiAoIXZpc2libGUpIHtcbiAgICAgICAgY29uc3QgaWRsZUNhbGxiYWNrID0gcmVxdWVzdElkbGVDYWxsYmFjaygoKSA9PiBzZXRWaXNpYmxlKHRydWUpKVxuICAgICAgICByZXR1cm4gKCkgPT4gY2FuY2VsSWRsZUNhbGxiYWNrKGlkbGVDYWxsYmFjaylcbiAgICAgIH1cbiAgICB9XG4gIH0sIFt2aXNpYmxlXSlcblxuICByZXR1cm4gW3NldFJlZiwgdmlzaWJsZV1cbn1cblxuZnVuY3Rpb24gb2JzZXJ2ZShcbiAgZWxlbWVudDogRWxlbWVudCxcbiAgY2FsbGJhY2s6IE9ic2VydmVDYWxsYmFjayxcbiAgb3B0aW9uczogVXNlSW50ZXJzZWN0aW9uT2JzZXJ2ZXJJbml0XG4pOiAoKSA9PiB2b2lkIHtcbiAgY29uc3QgeyBpZCwgb2JzZXJ2ZXIsIGVsZW1lbnRzIH0gPSBjcmVhdGVPYnNlcnZlcihvcHRpb25zKVxuICBlbGVtZW50cy5zZXQoZWxlbWVudCwgY2FsbGJhY2spXG5cbiAgb2JzZXJ2ZXIub2JzZXJ2ZShlbGVtZW50KVxuICByZXR1cm4gZnVuY3Rpb24gdW5vYnNlcnZlKCk6IHZvaWQge1xuICAgIGVsZW1lbnRzLmRlbGV0ZShlbGVtZW50KVxuICAgIG9ic2VydmVyLnVub2JzZXJ2ZShlbGVtZW50KVxuXG4gICAgLy8gRGVzdHJveSBvYnNlcnZlciB3aGVuIHRoZXJlJ3Mgbm90aGluZyBsZWZ0IHRvIHdhdGNoOlxuICAgIGlmIChlbGVtZW50cy5zaXplID09PSAwKSB7XG4gICAgICBvYnNlcnZlci5kaXNjb25uZWN0KClcbiAgICAgIG9ic2VydmVycy5kZWxldGUoaWQpXG4gICAgfVxuICB9XG59XG5cbmNvbnN0IG9ic2VydmVycyA9IG5ldyBNYXA8c3RyaW5nLCBPYnNlcnZlcj4oKVxuZnVuY3Rpb24gY3JlYXRlT2JzZXJ2ZXIob3B0aW9uczogVXNlSW50ZXJzZWN0aW9uT2JzZXJ2ZXJJbml0KTogT2JzZXJ2ZXIge1xuICBjb25zdCBpZCA9IG9wdGlvbnMucm9vdE1hcmdpbiB8fCAnJ1xuICBsZXQgaW5zdGFuY2UgPSBvYnNlcnZlcnMuZ2V0KGlkKVxuICBpZiAoaW5zdGFuY2UpIHtcbiAgICByZXR1cm4gaW5zdGFuY2VcbiAgfVxuXG4gIGNvbnN0IGVsZW1lbnRzID0gbmV3IE1hcDxFbGVtZW50LCBPYnNlcnZlQ2FsbGJhY2s+KClcbiAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoKGVudHJpZXMpID0+IHtcbiAgICBlbnRyaWVzLmZvckVhY2goKGVudHJ5KSA9PiB7XG4gICAgICBjb25zdCBjYWxsYmFjayA9IGVsZW1lbnRzLmdldChlbnRyeS50YXJnZXQpXG4gICAgICBjb25zdCBpc1Zpc2libGUgPSBlbnRyeS5pc0ludGVyc2VjdGluZyB8fCBlbnRyeS5pbnRlcnNlY3Rpb25SYXRpbyA+IDBcbiAgICAgIGlmIChjYWxsYmFjayAmJiBpc1Zpc2libGUpIHtcbiAgICAgICAgY2FsbGJhY2soaXNWaXNpYmxlKVxuICAgICAgfVxuICAgIH0pXG4gIH0sIG9wdGlvbnMpXG5cbiAgb2JzZXJ2ZXJzLnNldChcbiAgICBpZCxcbiAgICAoaW5zdGFuY2UgPSB7XG4gICAgICBpZCxcbiAgICAgIG9ic2VydmVyLFxuICAgICAgZWxlbWVudHMsXG4gICAgfSlcbiAgKVxuICByZXR1cm4gaW5zdGFuY2Vcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IE5leHRDb21wb25lbnRUeXBlLCBOZXh0UGFnZUNvbnRleHQgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvdXRpbHMnXG5pbXBvcnQgeyBOZXh0Um91dGVyLCB1c2VSb3V0ZXIgfSBmcm9tICcuL3JvdXRlcidcblxuZXhwb3J0IHR5cGUgV2l0aFJvdXRlclByb3BzID0ge1xuICByb3V0ZXI6IE5leHRSb3V0ZXJcbn1cblxuZXhwb3J0IHR5cGUgRXhjbHVkZVJvdXRlclByb3BzPFA+ID0gUGljazxcbiAgUCxcbiAgRXhjbHVkZTxrZXlvZiBQLCBrZXlvZiBXaXRoUm91dGVyUHJvcHM+XG4+XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHdpdGhSb3V0ZXI8XG4gIFAgZXh0ZW5kcyBXaXRoUm91dGVyUHJvcHMsXG4gIEMgPSBOZXh0UGFnZUNvbnRleHRcbj4oXG4gIENvbXBvc2VkQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxDLCBhbnksIFA+XG4pOiBSZWFjdC5Db21wb25lbnRUeXBlPEV4Y2x1ZGVSb3V0ZXJQcm9wczxQPj4ge1xuICBmdW5jdGlvbiBXaXRoUm91dGVyV3JhcHBlcihwcm9wczogYW55KTogSlNYLkVsZW1lbnQge1xuICAgIHJldHVybiA8Q29tcG9zZWRDb21wb25lbnQgcm91dGVyPXt1c2VSb3V0ZXIoKX0gey4uLnByb3BzfSAvPlxuICB9XG5cbiAgV2l0aFJvdXRlcldyYXBwZXIuZ2V0SW5pdGlhbFByb3BzID0gQ29tcG9zZWRDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzXG4gIC8vIFRoaXMgaXMgbmVlZGVkIHRvIGFsbG93IGNoZWNraW5nIGZvciBjdXN0b20gZ2V0SW5pdGlhbFByb3BzIGluIF9hcHBcbiAgOyhXaXRoUm91dGVyV3JhcHBlciBhcyBhbnkpLm9yaWdHZXRJbml0aWFsUHJvcHMgPSAoQ29tcG9zZWRDb21wb25lbnQgYXMgYW55KS5vcmlnR2V0SW5pdGlhbFByb3BzXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgY29uc3QgbmFtZSA9XG4gICAgICBDb21wb3NlZENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBDb21wb3NlZENvbXBvbmVudC5uYW1lIHx8ICdVbmtub3duJ1xuICAgIFdpdGhSb3V0ZXJXcmFwcGVyLmRpc3BsYXlOYW1lID0gYHdpdGhSb3V0ZXIoJHtuYW1lfSlgXG4gIH1cblxuICByZXR1cm4gV2l0aFJvdXRlcldyYXBwZXJcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBub3JtYWxpemVMb2NhbGVQYXRoKFxuICBwYXRobmFtZTogc3RyaW5nLFxuICBsb2NhbGVzPzogc3RyaW5nW11cbik6IHtcbiAgZGV0ZWN0ZWRMb2NhbGU/OiBzdHJpbmdcbiAgcGF0aG5hbWU6IHN0cmluZ1xufSB7XG4gIGxldCBkZXRlY3RlZExvY2FsZTogc3RyaW5nIHwgdW5kZWZpbmVkXG4gIC8vIGZpcnN0IGl0ZW0gd2lsbCBiZSBlbXB0eSBzdHJpbmcgZnJvbSBzcGxpdHRpbmcgYXQgZmlyc3QgY2hhclxuICBjb25zdCBwYXRobmFtZVBhcnRzID0gcGF0aG5hbWUuc3BsaXQoJy8nKVxuXG4gIDsobG9jYWxlcyB8fCBbXSkuc29tZSgobG9jYWxlKSA9PiB7XG4gICAgaWYgKHBhdGhuYW1lUGFydHNbMV0udG9Mb3dlckNhc2UoKSA9PT0gbG9jYWxlLnRvTG93ZXJDYXNlKCkpIHtcbiAgICAgIGRldGVjdGVkTG9jYWxlID0gbG9jYWxlXG4gICAgICBwYXRobmFtZVBhcnRzLnNwbGljZSgxLCAxKVxuICAgICAgcGF0aG5hbWUgPSBwYXRobmFtZVBhcnRzLmpvaW4oJy8nKSB8fCAnLydcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuICAgIHJldHVybiBmYWxzZVxuICB9KVxuXG4gIHJldHVybiB7XG4gICAgcGF0aG5hbWUsXG4gICAgZGV0ZWN0ZWRMb2NhbGUsXG4gIH1cbn1cbiIsIi8qXG5NSVQgTGljZW5zZVxuXG5Db3B5cmlnaHQgKGMpIEphc29uIE1pbGxlciAoaHR0cHM6Ly9qYXNvbmZvcm1hdC5jb20vKVxuXG5QZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5UaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG4qL1xuXG4vLyBUaGlzIGZpbGUgaXMgYmFzZWQgb24gaHR0cHM6Ly9naXRodWIuY29tL2RldmVsb3BpdC9taXR0L2Jsb2IvdjEuMS4zL3NyYy9pbmRleC5qc1xuLy8gSXQncyBiZWVuIGVkaXRlZCBmb3IgdGhlIG5lZWRzIG9mIHRoaXMgc2NyaXB0XG4vLyBTZWUgdGhlIExJQ0VOU0UgYXQgdGhlIHRvcCBvZiB0aGUgZmlsZVxuXG50eXBlIEhhbmRsZXIgPSAoLi4uZXZ0czogYW55W10pID0+IHZvaWRcblxuZXhwb3J0IHR5cGUgTWl0dEVtaXR0ZXIgPSB7XG4gIG9uKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcik6IHZvaWRcbiAgb2ZmKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcik6IHZvaWRcbiAgZW1pdCh0eXBlOiBzdHJpbmcsIC4uLmV2dHM6IGFueVtdKTogdm9pZFxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtaXR0KCk6IE1pdHRFbWl0dGVyIHtcbiAgY29uc3QgYWxsOiB7IFtzOiBzdHJpbmddOiBIYW5kbGVyW10gfSA9IE9iamVjdC5jcmVhdGUobnVsbClcblxuICByZXR1cm4ge1xuICAgIG9uKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcikge1xuICAgICAgOyhhbGxbdHlwZV0gfHwgKGFsbFt0eXBlXSA9IFtdKSkucHVzaChoYW5kbGVyKVxuICAgIH0sXG5cbiAgICBvZmYodHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKSB7XG4gICAgICBpZiAoYWxsW3R5cGVdKSB7XG4gICAgICAgIGFsbFt0eXBlXS5zcGxpY2UoYWxsW3R5cGVdLmluZGV4T2YoaGFuZGxlcikgPj4+IDAsIDEpXG4gICAgICB9XG4gICAgfSxcblxuICAgIGVtaXQodHlwZTogc3RyaW5nLCAuLi5ldnRzOiBhbnlbXSkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGFycmF5LWNhbGxiYWNrLXJldHVyblxuICAgICAgOyhhbGxbdHlwZV0gfHwgW10pLnNsaWNlKCkubWFwKChoYW5kbGVyOiBIYW5kbGVyKSA9PiB7XG4gICAgICAgIGhhbmRsZXIoLi4uZXZ0cylcbiAgICAgIH0pXG4gICAgfSxcbiAgfVxufVxuIiwiLyogZ2xvYmFsIF9fTkVYVF9EQVRBX18gKi9cbi8vIHRzbGludDpkaXNhYmxlOm5vLWNvbnNvbGVcbmltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgeyBDb21wb25lbnRUeXBlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQge1xuICBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCxcbiAgcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gsXG59IGZyb20gJy4uLy4uLy4uL2NsaWVudC9ub3JtYWxpemUtdHJhaWxpbmctc2xhc2gnXG5pbXBvcnQgeyBHb29kUGFnZUNhY2hlLCBTdHlsZVNoZWV0VHVwbGUgfSBmcm9tICcuLi8uLi8uLi9jbGllbnQvcGFnZS1sb2FkZXInXG5pbXBvcnQge1xuICBnZXRDbGllbnRCdWlsZE1hbmlmZXN0LFxuICBpc0Fzc2V0RXJyb3IsXG4gIG1hcmtBc3NldEVycm9yLFxufSBmcm9tICcuLi8uLi8uLi9jbGllbnQvcm91dGUtbG9hZGVyJ1xuaW1wb3J0IHsgRG9tYWluTG9jYWxlcyB9IGZyb20gJy4uLy4uL3NlcnZlci9jb25maWcnXG5pbXBvcnQgeyBkZW5vcm1hbGl6ZVBhZ2VQYXRoIH0gZnJvbSAnLi4vLi4vc2VydmVyL2Rlbm9ybWFsaXplLXBhZ2UtcGF0aCdcbmltcG9ydCB7IG5vcm1hbGl6ZUxvY2FsZVBhdGggfSBmcm9tICcuLi9pMThuL25vcm1hbGl6ZS1sb2NhbGUtcGF0aCdcbmltcG9ydCBtaXR0LCB7IE1pdHRFbWl0dGVyIH0gZnJvbSAnLi4vbWl0dCdcbmltcG9ydCB7XG4gIEFwcENvbnRleHRUeXBlLFxuICBmb3JtYXRXaXRoVmFsaWRhdGlvbixcbiAgZ2V0TG9jYXRpb25PcmlnaW4sXG4gIGdldFVSTCxcbiAgbG9hZEdldEluaXRpYWxQcm9wcyxcbiAgTmV4dFBhZ2VDb250ZXh0LFxuICBTVCxcbiAgTkVYVF9EQVRBLFxufSBmcm9tICcuLi91dGlscydcbmltcG9ydCB7IGlzRHluYW1pY1JvdXRlIH0gZnJvbSAnLi91dGlscy9pcy1keW5hbWljJ1xuaW1wb3J0IHsgcGFyc2VSZWxhdGl2ZVVybCB9IGZyb20gJy4vdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsJ1xuaW1wb3J0IHsgc2VhcmNoUGFyYW1zVG9VcmxRdWVyeSB9IGZyb20gJy4vdXRpbHMvcXVlcnlzdHJpbmcnXG5pbXBvcnQgcmVzb2x2ZVJld3JpdGVzIGZyb20gJy4vdXRpbHMvcmVzb2x2ZS1yZXdyaXRlcydcbmltcG9ydCB7IGdldFJvdXRlTWF0Y2hlciB9IGZyb20gJy4vdXRpbHMvcm91dGUtbWF0Y2hlcidcbmltcG9ydCB7IGdldFJvdXRlUmVnZXggfSBmcm9tICcuL3V0aWxzL3JvdXRlLXJlZ2V4J1xuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBXaW5kb3cge1xuICAgIC8qIHByb2QgKi9cbiAgICBfX05FWFRfREFUQV9fOiBORVhUX0RBVEFcbiAgfVxufVxuXG5pbnRlcmZhY2UgUm91dGVQcm9wZXJ0aWVzIHtcbiAgc2hhbGxvdzogYm9vbGVhblxufVxuXG5pbnRlcmZhY2UgVHJhbnNpdGlvbk9wdGlvbnMge1xuICBzaGFsbG93PzogYm9vbGVhblxuICBsb2NhbGU/OiBzdHJpbmcgfCBmYWxzZVxuICBzY3JvbGw/OiBib29sZWFuXG59XG5cbmludGVyZmFjZSBOZXh0SGlzdG9yeVN0YXRlIHtcbiAgdXJsOiBzdHJpbmdcbiAgYXM6IHN0cmluZ1xuICBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9uc1xufVxuXG50eXBlIEhpc3RvcnlTdGF0ZSA9XG4gIHwgbnVsbFxuICB8IHsgX19OOiBmYWxzZSB9XG4gIHwgKHsgX19OOiB0cnVlOyBpZHg6IG51bWJlciB9ICYgTmV4dEhpc3RvcnlTdGF0ZSlcblxubGV0IGRldGVjdERvbWFpbkxvY2FsZTogdHlwZW9mIGltcG9ydCgnLi4vaTE4bi9kZXRlY3QtZG9tYWluLWxvY2FsZScpLmRldGVjdERvbWFpbkxvY2FsZVxuXG5pZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICBkZXRlY3REb21haW5Mb2NhbGUgPSByZXF1aXJlKCcuLi9pMThuL2RldGVjdC1kb21haW4tbG9jYWxlJylcbiAgICAuZGV0ZWN0RG9tYWluTG9jYWxlXG59XG5cbmNvbnN0IGJhc2VQYXRoID0gKHByb2Nlc3MuZW52Ll9fTkVYVF9ST1VURVJfQkFTRVBBVEggYXMgc3RyaW5nKSB8fCAnJ1xuXG5mdW5jdGlvbiBidWlsZENhbmNlbGxhdGlvbkVycm9yKCkge1xuICByZXR1cm4gT2JqZWN0LmFzc2lnbihuZXcgRXJyb3IoJ1JvdXRlIENhbmNlbGxlZCcpLCB7XG4gICAgY2FuY2VsbGVkOiB0cnVlLFxuICB9KVxufVxuXG5mdW5jdGlvbiBhZGRQYXRoUHJlZml4KHBhdGg6IHN0cmluZywgcHJlZml4Pzogc3RyaW5nKSB7XG4gIHJldHVybiBwcmVmaXggJiYgcGF0aC5zdGFydHNXaXRoKCcvJylcbiAgICA/IHBhdGggPT09ICcvJ1xuICAgICAgPyBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaChwcmVmaXgpXG4gICAgICA6IGAke3ByZWZpeH0ke3BhdGhOb1F1ZXJ5SGFzaChwYXRoKSA9PT0gJy8nID8gcGF0aC5zdWJzdHJpbmcoMSkgOiBwYXRofWBcbiAgICA6IHBhdGhcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldERvbWFpbkxvY2FsZShcbiAgcGF0aDogc3RyaW5nLFxuICBsb2NhbGU/OiBzdHJpbmcgfCBmYWxzZSxcbiAgbG9jYWxlcz86IHN0cmluZ1tdLFxuICBkb21haW5Mb2NhbGVzPzogRG9tYWluTG9jYWxlc1xuKSB7XG4gIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgbG9jYWxlID0gbG9jYWxlIHx8IG5vcm1hbGl6ZUxvY2FsZVBhdGgocGF0aCwgbG9jYWxlcykuZGV0ZWN0ZWRMb2NhbGVcblxuICAgIGNvbnN0IGRldGVjdGVkRG9tYWluID0gZGV0ZWN0RG9tYWluTG9jYWxlKGRvbWFpbkxvY2FsZXMsIHVuZGVmaW5lZCwgbG9jYWxlKVxuXG4gICAgaWYgKGRldGVjdGVkRG9tYWluKSB7XG4gICAgICByZXR1cm4gYGh0dHAke2RldGVjdGVkRG9tYWluLmh0dHAgPyAnJyA6ICdzJ306Ly8ke2RldGVjdGVkRG9tYWluLmRvbWFpbn0ke1xuICAgICAgICBiYXNlUGF0aCB8fCAnJ1xuICAgICAgfSR7bG9jYWxlID09PSBkZXRlY3RlZERvbWFpbi5kZWZhdWx0TG9jYWxlID8gJycgOiBgLyR7bG9jYWxlfWB9JHtwYXRofWBcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICByZXR1cm4gZmFsc2Vcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZExvY2FsZShcbiAgcGF0aDogc3RyaW5nLFxuICBsb2NhbGU/OiBzdHJpbmcgfCBmYWxzZSxcbiAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xuKSB7XG4gIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgcmV0dXJuIGxvY2FsZSAmJlxuICAgICAgbG9jYWxlICE9PSBkZWZhdWx0TG9jYWxlICYmXG4gICAgICAhcGF0aC5zdGFydHNXaXRoKCcvJyArIGxvY2FsZSArICcvJykgJiZcbiAgICAgIHBhdGggIT09ICcvJyArIGxvY2FsZVxuICAgICAgPyBhZGRQYXRoUHJlZml4KHBhdGgsICcvJyArIGxvY2FsZSlcbiAgICAgIDogcGF0aFxuICB9XG4gIHJldHVybiBwYXRoXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxMb2NhbGUocGF0aDogc3RyaW5nLCBsb2NhbGU/OiBzdHJpbmcpIHtcbiAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICByZXR1cm4gbG9jYWxlICYmXG4gICAgICAocGF0aC5zdGFydHNXaXRoKCcvJyArIGxvY2FsZSArICcvJykgfHwgcGF0aCA9PT0gJy8nICsgbG9jYWxlKVxuICAgICAgPyBwYXRoLnN1YnN0cihsb2NhbGUubGVuZ3RoICsgMSkgfHwgJy8nXG4gICAgICA6IHBhdGhcbiAgfVxuICByZXR1cm4gcGF0aFxufVxuXG5mdW5jdGlvbiBwYXRoTm9RdWVyeUhhc2gocGF0aDogc3RyaW5nKSB7XG4gIGNvbnN0IHF1ZXJ5SW5kZXggPSBwYXRoLmluZGV4T2YoJz8nKVxuICBjb25zdCBoYXNoSW5kZXggPSBwYXRoLmluZGV4T2YoJyMnKVxuXG4gIGlmIChxdWVyeUluZGV4ID4gLTEgfHwgaGFzaEluZGV4ID4gLTEpIHtcbiAgICBwYXRoID0gcGF0aC5zdWJzdHJpbmcoMCwgcXVlcnlJbmRleCA+IC0xID8gcXVlcnlJbmRleCA6IGhhc2hJbmRleClcbiAgfVxuICByZXR1cm4gcGF0aFxufVxuXG5leHBvcnQgZnVuY3Rpb24gaGFzQmFzZVBhdGgocGF0aDogc3RyaW5nKTogYm9vbGVhbiB7XG4gIHBhdGggPSBwYXRoTm9RdWVyeUhhc2gocGF0aClcbiAgcmV0dXJuIHBhdGggPT09IGJhc2VQYXRoIHx8IHBhdGguc3RhcnRzV2l0aChiYXNlUGF0aCArICcvJylcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZEJhc2VQYXRoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIC8vIHdlIG9ubHkgYWRkIHRoZSBiYXNlcGF0aCBvbiByZWxhdGl2ZSB1cmxzXG4gIHJldHVybiBhZGRQYXRoUHJlZml4KHBhdGgsIGJhc2VQYXRoKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVsQmFzZVBhdGgocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcGF0aCA9IHBhdGguc2xpY2UoYmFzZVBhdGgubGVuZ3RoKVxuICBpZiAoIXBhdGguc3RhcnRzV2l0aCgnLycpKSBwYXRoID0gYC8ke3BhdGh9YFxuICByZXR1cm4gcGF0aFxufVxuXG4vKipcbiAqIERldGVjdHMgd2hldGhlciBhIGdpdmVuIHVybCBpcyByb3V0YWJsZSBieSB0aGUgTmV4dC5qcyByb3V0ZXIgKGJyb3dzZXIgb25seSkuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc0xvY2FsVVJMKHVybDogc3RyaW5nKTogYm9vbGVhbiB7XG4gIC8vIHByZXZlbnQgYSBoeWRyYXRpb24gbWlzbWF0Y2ggb24gaHJlZiBmb3IgdXJsIHdpdGggYW5jaG9yIHJlZnNcbiAgaWYgKHVybC5zdGFydHNXaXRoKCcvJykgfHwgdXJsLnN0YXJ0c1dpdGgoJyMnKSkgcmV0dXJuIHRydWVcbiAgdHJ5IHtcbiAgICAvLyBhYnNvbHV0ZSB1cmxzIGNhbiBiZSBsb2NhbCBpZiB0aGV5IGFyZSBvbiB0aGUgc2FtZSBvcmlnaW5cbiAgICBjb25zdCBsb2NhdGlvbk9yaWdpbiA9IGdldExvY2F0aW9uT3JpZ2luKClcbiAgICBjb25zdCByZXNvbHZlZCA9IG5ldyBVUkwodXJsLCBsb2NhdGlvbk9yaWdpbilcbiAgICByZXR1cm4gcmVzb2x2ZWQub3JpZ2luID09PSBsb2NhdGlvbk9yaWdpbiAmJiBoYXNCYXNlUGF0aChyZXNvbHZlZC5wYXRobmFtZSlcbiAgfSBjYXRjaCAoXykge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG59XG5cbnR5cGUgVXJsID0gVXJsT2JqZWN0IHwgc3RyaW5nXG5cbmV4cG9ydCBmdW5jdGlvbiBpbnRlcnBvbGF0ZUFzKFxuICByb3V0ZTogc3RyaW5nLFxuICBhc1BhdGhuYW1lOiBzdHJpbmcsXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuKSB7XG4gIGxldCBpbnRlcnBvbGF0ZWRSb3V0ZSA9ICcnXG5cbiAgY29uc3QgZHluYW1pY1JlZ2V4ID0gZ2V0Um91dGVSZWdleChyb3V0ZSlcbiAgY29uc3QgZHluYW1pY0dyb3VwcyA9IGR5bmFtaWNSZWdleC5ncm91cHNcbiAgY29uc3QgZHluYW1pY01hdGNoZXMgPVxuICAgIC8vIFRyeSB0byBtYXRjaCB0aGUgZHluYW1pYyByb3V0ZSBhZ2FpbnN0IHRoZSBhc1BhdGhcbiAgICAoYXNQYXRobmFtZSAhPT0gcm91dGUgPyBnZXRSb3V0ZU1hdGNoZXIoZHluYW1pY1JlZ2V4KShhc1BhdGhuYW1lKSA6ICcnKSB8fFxuICAgIC8vIEZhbGwgYmFjayB0byByZWFkaW5nIHRoZSB2YWx1ZXMgZnJvbSB0aGUgaHJlZlxuICAgIC8vIFRPRE86IHNob3VsZCB0aGlzIHRha2UgcHJpb3JpdHk7IGFsc28gbmVlZCB0byBjaGFuZ2UgaW4gdGhlIHJvdXRlci5cbiAgICBxdWVyeVxuXG4gIGludGVycG9sYXRlZFJvdXRlID0gcm91dGVcbiAgY29uc3QgcGFyYW1zID0gT2JqZWN0LmtleXMoZHluYW1pY0dyb3VwcylcblxuICBpZiAoXG4gICAgIXBhcmFtcy5ldmVyeSgocGFyYW0pID0+IHtcbiAgICAgIGxldCB2YWx1ZSA9IGR5bmFtaWNNYXRjaGVzW3BhcmFtXSB8fCAnJ1xuICAgICAgY29uc3QgeyByZXBlYXQsIG9wdGlvbmFsIH0gPSBkeW5hbWljR3JvdXBzW3BhcmFtXVxuXG4gICAgICAvLyBzdXBwb3J0IHNpbmdsZS1sZXZlbCBjYXRjaC1hbGxcbiAgICAgIC8vIFRPRE86IG1vcmUgcm9idXN0IGhhbmRsaW5nIGZvciB1c2VyLWVycm9yIChwYXNzaW5nIGAvYClcbiAgICAgIGxldCByZXBsYWNlZCA9IGBbJHtyZXBlYXQgPyAnLi4uJyA6ICcnfSR7cGFyYW19XWBcbiAgICAgIGlmIChvcHRpb25hbCkge1xuICAgICAgICByZXBsYWNlZCA9IGAkeyF2YWx1ZSA/ICcvJyA6ICcnfVske3JlcGxhY2VkfV1gXG4gICAgICB9XG4gICAgICBpZiAocmVwZWF0ICYmICFBcnJheS5pc0FycmF5KHZhbHVlKSkgdmFsdWUgPSBbdmFsdWVdXG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIChvcHRpb25hbCB8fCBwYXJhbSBpbiBkeW5hbWljTWF0Y2hlcykgJiZcbiAgICAgICAgLy8gSW50ZXJwb2xhdGUgZ3JvdXAgaW50byBkYXRhIFVSTCBpZiBwcmVzZW50XG4gICAgICAgIChpbnRlcnBvbGF0ZWRSb3V0ZSA9XG4gICAgICAgICAgaW50ZXJwb2xhdGVkUm91dGUhLnJlcGxhY2UoXG4gICAgICAgICAgICByZXBsYWNlZCxcbiAgICAgICAgICAgIHJlcGVhdFxuICAgICAgICAgICAgICA/ICh2YWx1ZSBhcyBzdHJpbmdbXSlcbiAgICAgICAgICAgICAgICAgIC5tYXAoXG4gICAgICAgICAgICAgICAgICAgIC8vIHRoZXNlIHZhbHVlcyBzaG91bGQgYmUgZnVsbHkgZW5jb2RlZCBpbnN0ZWFkIG9mIGp1c3RcbiAgICAgICAgICAgICAgICAgICAgLy8gcGF0aCBkZWxpbWl0ZXIgZXNjYXBlZCBzaW5jZSB0aGV5IGFyZSBiZWluZyBpbnNlcnRlZFxuICAgICAgICAgICAgICAgICAgICAvLyBpbnRvIHRoZSBVUkwgYW5kIHdlIGV4cGVjdCBVUkwgZW5jb2RlZCBzZWdtZW50c1xuICAgICAgICAgICAgICAgICAgICAvLyB3aGVuIHBhcnNpbmcgZHluYW1pYyByb3V0ZSBwYXJhbXNcbiAgICAgICAgICAgICAgICAgICAgKHNlZ21lbnQpID0+IGVuY29kZVVSSUNvbXBvbmVudChzZWdtZW50KVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgLmpvaW4oJy8nKVxuICAgICAgICAgICAgICA6IGVuY29kZVVSSUNvbXBvbmVudCh2YWx1ZSBhcyBzdHJpbmcpXG4gICAgICAgICAgKSB8fCAnLycpXG4gICAgICApXG4gICAgfSlcbiAgKSB7XG4gICAgaW50ZXJwb2xhdGVkUm91dGUgPSAnJyAvLyBkaWQgbm90IHNhdGlzZnkgYWxsIHJlcXVpcmVtZW50c1xuXG4gICAgLy8gbi5iLiBXZSBpZ25vcmUgdGhpcyBlcnJvciBiZWNhdXNlIHdlIGhhbmRsZSB3YXJuaW5nIGZvciB0aGlzIGNhc2UgaW5cbiAgICAvLyBkZXZlbG9wbWVudCBpbiB0aGUgYDxMaW5rPmAgY29tcG9uZW50IGRpcmVjdGx5LlxuICB9XG4gIHJldHVybiB7XG4gICAgcGFyYW1zLFxuICAgIHJlc3VsdDogaW50ZXJwb2xhdGVkUm91dGUsXG4gIH1cbn1cblxuZnVuY3Rpb24gb21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSwgcGFyYW1zOiBzdHJpbmdbXSkge1xuICBjb25zdCBmaWx0ZXJlZFF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSA9IHt9XG5cbiAgT2JqZWN0LmtleXMocXVlcnkpLmZvckVhY2goKGtleSkgPT4ge1xuICAgIGlmICghcGFyYW1zLmluY2x1ZGVzKGtleSkpIHtcbiAgICAgIGZpbHRlcmVkUXVlcnlba2V5XSA9IHF1ZXJ5W2tleV1cbiAgICB9XG4gIH0pXG4gIHJldHVybiBmaWx0ZXJlZFF1ZXJ5XG59XG5cbi8qKlxuICogUmVzb2x2ZXMgYSBnaXZlbiBoeXBlcmxpbmsgd2l0aCBhIGNlcnRhaW4gcm91dGVyIHN0YXRlIChiYXNlUGF0aCBub3QgaW5jbHVkZWQpLlxuICogUHJlc2VydmVzIGFic29sdXRlIHVybHMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZXNvbHZlSHJlZihcbiAgY3VycmVudFBhdGg6IHN0cmluZyxcbiAgaHJlZjogVXJsLFxuICByZXNvbHZlQXM/OiBib29sZWFuXG4pOiBzdHJpbmcge1xuICAvLyB3ZSB1c2UgYSBkdW1teSBiYXNlIHVybCBmb3IgcmVsYXRpdmUgdXJsc1xuICBjb25zdCBiYXNlID0gbmV3IFVSTChjdXJyZW50UGF0aCwgJ2h0dHA6Ly9uJylcbiAgY29uc3QgdXJsQXNTdHJpbmcgPVxuICAgIHR5cGVvZiBocmVmID09PSAnc3RyaW5nJyA/IGhyZWYgOiBmb3JtYXRXaXRoVmFsaWRhdGlvbihocmVmKVxuICAvLyBSZXR1cm4gYmVjYXVzZSBpdCBjYW5ub3QgYmUgcm91dGVkIGJ5IHRoZSBOZXh0LmpzIHJvdXRlclxuICBpZiAoIWlzTG9jYWxVUkwodXJsQXNTdHJpbmcpKSB7XG4gICAgcmV0dXJuIChyZXNvbHZlQXMgPyBbdXJsQXNTdHJpbmddIDogdXJsQXNTdHJpbmcpIGFzIHN0cmluZ1xuICB9XG4gIHRyeSB7XG4gICAgY29uc3QgZmluYWxVcmwgPSBuZXcgVVJMKHVybEFzU3RyaW5nLCBiYXNlKVxuICAgIGZpbmFsVXJsLnBhdGhuYW1lID0gbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2goZmluYWxVcmwucGF0aG5hbWUpXG4gICAgbGV0IGludGVycG9sYXRlZEFzID0gJydcblxuICAgIGlmIChcbiAgICAgIGlzRHluYW1pY1JvdXRlKGZpbmFsVXJsLnBhdGhuYW1lKSAmJlxuICAgICAgZmluYWxVcmwuc2VhcmNoUGFyYW1zICYmXG4gICAgICByZXNvbHZlQXNcbiAgICApIHtcbiAgICAgIGNvbnN0IHF1ZXJ5ID0gc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShmaW5hbFVybC5zZWFyY2hQYXJhbXMpXG5cbiAgICAgIGNvbnN0IHsgcmVzdWx0LCBwYXJhbXMgfSA9IGludGVycG9sYXRlQXMoXG4gICAgICAgIGZpbmFsVXJsLnBhdGhuYW1lLFxuICAgICAgICBmaW5hbFVybC5wYXRobmFtZSxcbiAgICAgICAgcXVlcnlcbiAgICAgIClcblxuICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICBpbnRlcnBvbGF0ZWRBcyA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHtcbiAgICAgICAgICBwYXRobmFtZTogcmVzdWx0LFxuICAgICAgICAgIGhhc2g6IGZpbmFsVXJsLmhhc2gsXG4gICAgICAgICAgcXVlcnk6IG9taXRQYXJtc0Zyb21RdWVyeShxdWVyeSwgcGFyYW1zKSxcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBpZiB0aGUgb3JpZ2luIGRpZG4ndCBjaGFuZ2UsIGl0IG1lYW5zIHdlIHJlY2VpdmVkIGEgcmVsYXRpdmUgaHJlZlxuICAgIGNvbnN0IHJlc29sdmVkSHJlZiA9XG4gICAgICBmaW5hbFVybC5vcmlnaW4gPT09IGJhc2Uub3JpZ2luXG4gICAgICAgID8gZmluYWxVcmwuaHJlZi5zbGljZShmaW5hbFVybC5vcmlnaW4ubGVuZ3RoKVxuICAgICAgICA6IGZpbmFsVXJsLmhyZWZcblxuICAgIHJldHVybiAocmVzb2x2ZUFzXG4gICAgICA/IFtyZXNvbHZlZEhyZWYsIGludGVycG9sYXRlZEFzIHx8IHJlc29sdmVkSHJlZl1cbiAgICAgIDogcmVzb2x2ZWRIcmVmKSBhcyBzdHJpbmdcbiAgfSBjYXRjaCAoXykge1xuICAgIHJldHVybiAocmVzb2x2ZUFzID8gW3VybEFzU3RyaW5nXSA6IHVybEFzU3RyaW5nKSBhcyBzdHJpbmdcbiAgfVxufVxuXG5mdW5jdGlvbiBzdHJpcE9yaWdpbih1cmw6IHN0cmluZykge1xuICBjb25zdCBvcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbigpXG5cbiAgcmV0dXJuIHVybC5zdGFydHNXaXRoKG9yaWdpbikgPyB1cmwuc3Vic3RyaW5nKG9yaWdpbi5sZW5ndGgpIDogdXJsXG59XG5cbmZ1bmN0aW9uIHByZXBhcmVVcmxBcyhyb3V0ZXI6IE5leHRSb3V0ZXIsIHVybDogVXJsLCBhcz86IFVybCkge1xuICAvLyBJZiB1cmwgYW5kIGFzIHByb3ZpZGVkIGFzIGFuIG9iamVjdCByZXByZXNlbnRhdGlvbixcbiAgLy8gd2UnbGwgZm9ybWF0IHRoZW0gaW50byB0aGUgc3RyaW5nIHZlcnNpb24gaGVyZS5cbiAgbGV0IFtyZXNvbHZlZEhyZWYsIHJlc29sdmVkQXNdID0gcmVzb2x2ZUhyZWYocm91dGVyLnBhdGhuYW1lLCB1cmwsIHRydWUpXG4gIGNvbnN0IG9yaWdpbiA9IGdldExvY2F0aW9uT3JpZ2luKClcbiAgY29uc3QgaHJlZkhhZE9yaWdpbiA9IHJlc29sdmVkSHJlZi5zdGFydHNXaXRoKG9yaWdpbilcbiAgY29uc3QgYXNIYWRPcmlnaW4gPSByZXNvbHZlZEFzICYmIHJlc29sdmVkQXMuc3RhcnRzV2l0aChvcmlnaW4pXG5cbiAgcmVzb2x2ZWRIcmVmID0gc3RyaXBPcmlnaW4ocmVzb2x2ZWRIcmVmKVxuICByZXNvbHZlZEFzID0gcmVzb2x2ZWRBcyA/IHN0cmlwT3JpZ2luKHJlc29sdmVkQXMpIDogcmVzb2x2ZWRBc1xuXG4gIGNvbnN0IHByZXBhcmVkVXJsID0gaHJlZkhhZE9yaWdpbiA/IHJlc29sdmVkSHJlZiA6IGFkZEJhc2VQYXRoKHJlc29sdmVkSHJlZilcbiAgY29uc3QgcHJlcGFyZWRBcyA9IGFzXG4gICAgPyBzdHJpcE9yaWdpbihyZXNvbHZlSHJlZihyb3V0ZXIucGF0aG5hbWUsIGFzKSlcbiAgICA6IHJlc29sdmVkQXMgfHwgcmVzb2x2ZWRIcmVmXG5cbiAgcmV0dXJuIHtcbiAgICB1cmw6IHByZXBhcmVkVXJsLFxuICAgIGFzOiBhc0hhZE9yaWdpbiA/IHByZXBhcmVkQXMgOiBhZGRCYXNlUGF0aChwcmVwYXJlZEFzKSxcbiAgfVxufVxuXG5mdW5jdGlvbiByZXNvbHZlRHluYW1pY1JvdXRlKFxuICBwYXJzZWRIcmVmOiBVcmxPYmplY3QsXG4gIHBhZ2VzOiBzdHJpbmdbXSxcbiAgYXBwbHlCYXNlUGF0aCA9IHRydWVcbikge1xuICBjb25zdCB7IHBhdGhuYW1lIH0gPSBwYXJzZWRIcmVmXG4gIGNvbnN0IGNsZWFuUGF0aG5hbWUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChcbiAgICBkZW5vcm1hbGl6ZVBhZ2VQYXRoKGFwcGx5QmFzZVBhdGggPyBkZWxCYXNlUGF0aChwYXRobmFtZSEpIDogcGF0aG5hbWUhKVxuICApXG5cbiAgaWYgKGNsZWFuUGF0aG5hbWUgPT09ICcvNDA0JyB8fCBjbGVhblBhdGhuYW1lID09PSAnL19lcnJvcicpIHtcbiAgICByZXR1cm4gcGFyc2VkSHJlZlxuICB9XG5cbiAgLy8gaGFuZGxlIHJlc29sdmluZyBocmVmIGZvciBkeW5hbWljIHJvdXRlc1xuICBpZiAoIXBhZ2VzLmluY2x1ZGVzKGNsZWFuUGF0aG5hbWUhKSkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBhcnJheS1jYWxsYmFjay1yZXR1cm5cbiAgICBwYWdlcy5zb21lKChwYWdlKSA9PiB7XG4gICAgICBpZiAoaXNEeW5hbWljUm91dGUocGFnZSkgJiYgZ2V0Um91dGVSZWdleChwYWdlKS5yZS50ZXN0KGNsZWFuUGF0aG5hbWUhKSkge1xuICAgICAgICBwYXJzZWRIcmVmLnBhdGhuYW1lID0gYXBwbHlCYXNlUGF0aCA/IGFkZEJhc2VQYXRoKHBhZ2UpIDogcGFnZVxuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgfVxuICAgIH0pXG4gIH1cbiAgcGFyc2VkSHJlZi5wYXRobmFtZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhcnNlZEhyZWYucGF0aG5hbWUhKVxuICByZXR1cm4gcGFyc2VkSHJlZlxufVxuXG5leHBvcnQgdHlwZSBCYXNlUm91dGVyID0ge1xuICByb3V0ZTogc3RyaW5nXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGFzUGF0aDogc3RyaW5nXG4gIGJhc2VQYXRoOiBzdHJpbmdcbiAgbG9jYWxlPzogc3RyaW5nXG4gIGxvY2FsZXM/OiBzdHJpbmdbXVxuICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG4gIGRvbWFpbkxvY2FsZXM/OiBEb21haW5Mb2NhbGVzXG4gIGlzTG9jYWxlRG9tYWluOiBib29sZWFuXG59XG5cbmV4cG9ydCB0eXBlIE5leHRSb3V0ZXIgPSBCYXNlUm91dGVyICZcbiAgUGljazxcbiAgICBSb3V0ZXIsXG4gICAgfCAncHVzaCdcbiAgICB8ICdyZXBsYWNlJ1xuICAgIHwgJ3JlbG9hZCdcbiAgICB8ICdiYWNrJ1xuICAgIHwgJ3ByZWZldGNoJ1xuICAgIHwgJ2JlZm9yZVBvcFN0YXRlJ1xuICAgIHwgJ2V2ZW50cydcbiAgICB8ICdpc0ZhbGxiYWNrJ1xuICAgIHwgJ2lzUmVhZHknXG4gICAgfCAnaXNQcmV2aWV3J1xuICA+XG5cbmV4cG9ydCB0eXBlIFByZWZldGNoT3B0aW9ucyA9IHtcbiAgcHJpb3JpdHk/OiBib29sZWFuXG4gIGxvY2FsZT86IHN0cmluZyB8IGZhbHNlXG59XG5cbmV4cG9ydCB0eXBlIFByaXZhdGVSb3V0ZUluZm8gPVxuICB8IChPbWl0PENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mbywgJ3N0eWxlU2hlZXRzJz4gJiB7IGluaXRpYWw6IHRydWUgfSlcbiAgfCBDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm9cblxuZXhwb3J0IHR5cGUgQ29tcGxldGVQcml2YXRlUm91dGVJbmZvID0ge1xuICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgc3R5bGVTaGVldHM6IFN0eWxlU2hlZXRUdXBsZVtdXG4gIF9fTl9TU0c/OiBib29sZWFuXG4gIF9fTl9TU1A/OiBib29sZWFuXG4gIHByb3BzPzogUmVjb3JkPHN0cmluZywgYW55PlxuICBlcnI/OiBFcnJvclxuICBlcnJvcj86IGFueVxufVxuXG5leHBvcnQgdHlwZSBBcHBQcm9wcyA9IFBpY2s8Q29tcGxldGVQcml2YXRlUm91dGVJbmZvLCAnQ29tcG9uZW50JyB8ICdlcnInPiAmIHtcbiAgcm91dGVyOiBSb3V0ZXJcbn0gJiBSZWNvcmQ8c3RyaW5nLCBhbnk+XG5leHBvcnQgdHlwZSBBcHBDb21wb25lbnQgPSBDb21wb25lbnRUeXBlPEFwcFByb3BzPlxuXG50eXBlIFN1YnNjcmlwdGlvbiA9IChcbiAgZGF0YTogUHJpdmF0ZVJvdXRlSW5mbyxcbiAgQXBwOiBBcHBDb21wb25lbnQsXG4gIHJlc2V0U2Nyb2xsOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH0gfCBudWxsXG4pID0+IFByb21pc2U8dm9pZD5cblxudHlwZSBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrID0gKHN0YXRlOiBOZXh0SGlzdG9yeVN0YXRlKSA9PiBib29sZWFuXG5cbnR5cGUgQ29tcG9uZW50TG9hZENhbmNlbCA9ICgoKSA9PiB2b2lkKSB8IG51bGxcblxudHlwZSBIaXN0b3J5TWV0aG9kID0gJ3JlcGxhY2VTdGF0ZScgfCAncHVzaFN0YXRlJ1xuXG5jb25zdCBtYW51YWxTY3JvbGxSZXN0b3JhdGlvbiA9XG4gIHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04gJiZcbiAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgJ3Njcm9sbFJlc3RvcmF0aW9uJyBpbiB3aW5kb3cuaGlzdG9yeSAmJlxuICAhIShmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgIGxldCB2ID0gJ19fbmV4dCdcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZXF1ZW5jZXNcbiAgICAgIHJldHVybiBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKHYsIHYpLCBzZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKHYpLCB0cnVlXG4gICAgfSBjYXRjaCAobikge31cbiAgfSkoKVxuXG5jb25zdCBTU0dfREFUQV9OT1RfRk9VTkQgPSBTeW1ib2woJ1NTR19EQVRBX05PVF9GT1VORCcpXG5cbmZ1bmN0aW9uIGZldGNoUmV0cnkodXJsOiBzdHJpbmcsIGF0dGVtcHRzOiBudW1iZXIpOiBQcm9taXNlPGFueT4ge1xuICByZXR1cm4gZmV0Y2godXJsLCB7XG4gICAgLy8gQ29va2llcyBhcmUgcmVxdWlyZWQgdG8gYmUgcHJlc2VudCBmb3IgTmV4dC5qcycgU1NHIFwiUHJldmlldyBNb2RlXCIuXG4gICAgLy8gQ29va2llcyBtYXkgYWxzbyBiZSByZXF1aXJlZCBmb3IgYGdldFNlcnZlclNpZGVQcm9wc2AuXG4gICAgLy9cbiAgICAvLyA+IGBmZXRjaGAgd29u4oCZdCBzZW5kIGNvb2tpZXMsIHVubGVzcyB5b3Ugc2V0IHRoZSBjcmVkZW50aWFscyBpbml0XG4gICAgLy8gPiBvcHRpb24uXG4gICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0ZldGNoX0FQSS9Vc2luZ19GZXRjaFxuICAgIC8vXG4gICAgLy8gPiBGb3IgbWF4aW11bSBicm93c2VyIGNvbXBhdGliaWxpdHkgd2hlbiBpdCBjb21lcyB0byBzZW5kaW5nICZcbiAgICAvLyA+IHJlY2VpdmluZyBjb29raWVzLCBhbHdheXMgc3VwcGx5IHRoZSBgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbidgXG4gICAgLy8gPiBvcHRpb24gaW5zdGVhZCBvZiByZWx5aW5nIG9uIHRoZSBkZWZhdWx0LlxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9naXRodWIvZmV0Y2gjY2F2ZWF0c1xuICAgIGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nLFxuICB9KS50aGVuKChyZXMpID0+IHtcbiAgICBpZiAoIXJlcy5vaykge1xuICAgICAgaWYgKGF0dGVtcHRzID4gMSAmJiByZXMuc3RhdHVzID49IDUwMCkge1xuICAgICAgICByZXR1cm4gZmV0Y2hSZXRyeSh1cmwsIGF0dGVtcHRzIC0gMSlcbiAgICAgIH1cbiAgICAgIGlmIChyZXMuc3RhdHVzID09PSA0MDQpIHtcbiAgICAgICAgcmV0dXJuIHJlcy5qc29uKCkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgIGlmIChkYXRhLm5vdEZvdW5kKSB7XG4gICAgICAgICAgICByZXR1cm4geyBub3RGb3VuZDogU1NHX0RBVEFfTk9UX0ZPVU5EIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdGF0aWMgcHJvcHNgKVxuICAgICAgICB9KVxuICAgICAgfVxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdGF0aWMgcHJvcHNgKVxuICAgIH1cbiAgICByZXR1cm4gcmVzLmpzb24oKVxuICB9KVxufVxuXG5mdW5jdGlvbiBmZXRjaE5leHREYXRhKGRhdGFIcmVmOiBzdHJpbmcsIGlzU2VydmVyUmVuZGVyOiBib29sZWFuKSB7XG4gIHJldHVybiBmZXRjaFJldHJ5KGRhdGFIcmVmLCBpc1NlcnZlclJlbmRlciA/IDMgOiAxKS5jYXRjaCgoZXJyOiBFcnJvcikgPT4ge1xuICAgIC8vIFdlIHNob3VsZCBvbmx5IHRyaWdnZXIgYSBzZXJ2ZXItc2lkZSB0cmFuc2l0aW9uIGlmIHRoaXMgd2FzIGNhdXNlZFxuICAgIC8vIG9uIGEgY2xpZW50LXNpZGUgdHJhbnNpdGlvbi4gT3RoZXJ3aXNlLCB3ZSdkIGdldCBpbnRvIGFuIGluZmluaXRlXG4gICAgLy8gbG9vcC5cblxuICAgIGlmICghaXNTZXJ2ZXJSZW5kZXIpIHtcbiAgICAgIG1hcmtBc3NldEVycm9yKGVycilcbiAgICB9XG4gICAgdGhyb3cgZXJyXG4gIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJvdXRlciBpbXBsZW1lbnRzIEJhc2VSb3V0ZXIge1xuICByb3V0ZTogc3RyaW5nXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGFzUGF0aDogc3RyaW5nXG4gIGJhc2VQYXRoOiBzdHJpbmdcblxuICAvKipcbiAgICogTWFwIG9mIGFsbCBjb21wb25lbnRzIGxvYWRlZCBpbiBgUm91dGVyYFxuICAgKi9cbiAgY29tcG9uZW50czogeyBbcGF0aG5hbWU6IHN0cmluZ106IFByaXZhdGVSb3V0ZUluZm8gfVxuICAvLyBTdGF0aWMgRGF0YSBDYWNoZVxuICBzZGM6IHsgW2FzUGF0aDogc3RyaW5nXTogb2JqZWN0IH0gPSB7fVxuICAvLyBJbi1mbGlnaHQgU2VydmVyIERhdGEgUmVxdWVzdHMsIGZvciBkZWR1cGluZ1xuICBzZHI6IHsgW2FzUGF0aDogc3RyaW5nXTogUHJvbWlzZTxvYmplY3Q+IH0gPSB7fVxuXG4gIHN1YjogU3Vic2NyaXB0aW9uXG4gIGNsYzogQ29tcG9uZW50TG9hZENhbmNlbFxuICBwYWdlTG9hZGVyOiBhbnlcbiAgX2JwczogQmVmb3JlUG9wU3RhdGVDYWxsYmFjayB8IHVuZGVmaW5lZFxuICBldmVudHM6IE1pdHRFbWl0dGVyXG4gIF93cmFwQXBwOiAoQXBwOiBBcHBDb21wb25lbnQpID0+IGFueVxuICBpc1NzcjogYm9vbGVhblxuICBpc0ZhbGxiYWNrOiBib29sZWFuXG4gIF9pbkZsaWdodFJvdXRlPzogc3RyaW5nXG4gIF9zaGFsbG93PzogYm9vbGVhblxuICBsb2NhbGU/OiBzdHJpbmdcbiAgbG9jYWxlcz86IHN0cmluZ1tdXG4gIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcbiAgZG9tYWluTG9jYWxlcz86IERvbWFpbkxvY2FsZXNcbiAgaXNSZWFkeTogYm9vbGVhblxuICBpc1ByZXZpZXc6IGJvb2xlYW5cbiAgaXNMb2NhbGVEb21haW46IGJvb2xlYW5cblxuICBwcml2YXRlIF9pZHg6IG51bWJlciA9IDBcblxuICBzdGF0aWMgZXZlbnRzOiBNaXR0RW1pdHRlciA9IG1pdHQoKVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICAgIGFzOiBzdHJpbmcsXG4gICAge1xuICAgICAgaW5pdGlhbFByb3BzLFxuICAgICAgcGFnZUxvYWRlcixcbiAgICAgIEFwcCxcbiAgICAgIHdyYXBBcHAsXG4gICAgICBDb21wb25lbnQsXG4gICAgICBlcnIsXG4gICAgICBzdWJzY3JpcHRpb24sXG4gICAgICBpc0ZhbGxiYWNrLFxuICAgICAgbG9jYWxlLFxuICAgICAgbG9jYWxlcyxcbiAgICAgIGRlZmF1bHRMb2NhbGUsXG4gICAgICBkb21haW5Mb2NhbGVzLFxuICAgICAgaXNQcmV2aWV3LFxuICAgIH06IHtcbiAgICAgIHN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uXG4gICAgICBpbml0aWFsUHJvcHM6IGFueVxuICAgICAgcGFnZUxvYWRlcjogYW55XG4gICAgICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgICAgIEFwcDogQXBwQ29tcG9uZW50XG4gICAgICB3cmFwQXBwOiAoQXBwOiBBcHBDb21wb25lbnQpID0+IGFueVxuICAgICAgZXJyPzogRXJyb3JcbiAgICAgIGlzRmFsbGJhY2s6IGJvb2xlYW5cbiAgICAgIGxvY2FsZT86IHN0cmluZ1xuICAgICAgbG9jYWxlcz86IHN0cmluZ1tdXG4gICAgICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG4gICAgICBkb21haW5Mb2NhbGVzPzogRG9tYWluTG9jYWxlc1xuICAgICAgaXNQcmV2aWV3PzogYm9vbGVhblxuICAgIH1cbiAgKSB7XG4gICAgLy8gcmVwcmVzZW50cyB0aGUgY3VycmVudCBjb21wb25lbnQga2V5XG4gICAgdGhpcy5yb3V0ZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKVxuXG4gICAgLy8gc2V0IHVwIHRoZSBjb21wb25lbnQgY2FjaGUgKGJ5IHJvdXRlIGtleXMpXG4gICAgdGhpcy5jb21wb25lbnRzID0ge31cbiAgICAvLyBXZSBzaG91bGQgbm90IGtlZXAgdGhlIGNhY2hlLCBpZiB0aGVyZSdzIGFuIGVycm9yXG4gICAgLy8gT3RoZXJ3aXNlLCB0aGlzIGNhdXNlIGlzc3VlcyB3aGVuIHdoZW4gZ29pbmcgYmFjayBhbmRcbiAgICAvLyBjb21lIGFnYWluIHRvIHRoZSBlcnJvcmVkIHBhZ2UuXG4gICAgaWYgKHBhdGhuYW1lICE9PSAnL19lcnJvcicpIHtcbiAgICAgIHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSA9IHtcbiAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICBpbml0aWFsOiB0cnVlLFxuICAgICAgICBwcm9wczogaW5pdGlhbFByb3BzLFxuICAgICAgICBlcnIsXG4gICAgICAgIF9fTl9TU0c6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTRyxcbiAgICAgICAgX19OX1NTUDogaW5pdGlhbFByb3BzICYmIGluaXRpYWxQcm9wcy5fX05fU1NQLFxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuY29tcG9uZW50c1snL19hcHAnXSA9IHtcbiAgICAgIENvbXBvbmVudDogQXBwIGFzIENvbXBvbmVudFR5cGUsXG4gICAgICBzdHlsZVNoZWV0czogW1xuICAgICAgICAvKiAvX2FwcCBkb2VzIG5vdCBuZWVkIGl0cyBzdHlsZXNoZWV0cyBtYW5hZ2VkICovXG4gICAgICBdLFxuICAgIH1cblxuICAgIC8vIEJhY2t3YXJkcyBjb21wYXQgZm9yIFJvdXRlci5yb3V0ZXIuZXZlbnRzXG4gICAgLy8gVE9ETzogU2hvdWxkIGJlIHJlbW92ZSB0aGUgZm9sbG93aW5nIG1ham9yIHZlcnNpb24gYXMgaXQgd2FzIG5ldmVyIGRvY3VtZW50ZWRcbiAgICB0aGlzLmV2ZW50cyA9IFJvdXRlci5ldmVudHNcblxuICAgIHRoaXMucGFnZUxvYWRlciA9IHBhZ2VMb2FkZXJcbiAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICB0aGlzLnF1ZXJ5ID0gcXVlcnlcbiAgICAvLyBpZiBhdXRvIHByZXJlbmRlcmVkIGFuZCBkeW5hbWljIHJvdXRlIHdhaXQgdG8gdXBkYXRlIGFzUGF0aFxuICAgIC8vIHVudGlsIGFmdGVyIG1vdW50IHRvIHByZXZlbnQgaHlkcmF0aW9uIG1pc21hdGNoXG4gICAgY29uc3QgYXV0b0V4cG9ydER5bmFtaWMgPVxuICAgICAgaXNEeW5hbWljUm91dGUocGF0aG5hbWUpICYmIHNlbGYuX19ORVhUX0RBVEFfXy5hdXRvRXhwb3J0XG5cbiAgICB0aGlzLmFzUGF0aCA9IGF1dG9FeHBvcnREeW5hbWljID8gcGF0aG5hbWUgOiBhc1xuICAgIHRoaXMuYmFzZVBhdGggPSBiYXNlUGF0aFxuICAgIHRoaXMuc3ViID0gc3Vic2NyaXB0aW9uXG4gICAgdGhpcy5jbGMgPSBudWxsXG4gICAgdGhpcy5fd3JhcEFwcCA9IHdyYXBBcHBcbiAgICAvLyBtYWtlIHN1cmUgdG8gaWdub3JlIGV4dHJhIHBvcFN0YXRlIGluIHNhZmFyaSBvbiBuYXZpZ2F0aW5nXG4gICAgLy8gYmFjayBmcm9tIGV4dGVybmFsIHNpdGVcbiAgICB0aGlzLmlzU3NyID0gdHJ1ZVxuXG4gICAgdGhpcy5pc0ZhbGxiYWNrID0gaXNGYWxsYmFja1xuXG4gICAgdGhpcy5pc1JlYWR5ID0gISEoXG4gICAgICBzZWxmLl9fTkVYVF9EQVRBX18uZ3NzcCB8fFxuICAgICAgc2VsZi5fX05FWFRfREFUQV9fLmdpcCB8fFxuICAgICAgKCFhdXRvRXhwb3J0RHluYW1pYyAmJiAhc2VsZi5sb2NhdGlvbi5zZWFyY2gpXG4gICAgKVxuICAgIHRoaXMuaXNQcmV2aWV3ID0gISFpc1ByZXZpZXdcbiAgICB0aGlzLmlzTG9jYWxlRG9tYWluID0gZmFsc2VcblxuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICB0aGlzLmxvY2FsZSA9IGxvY2FsZVxuICAgICAgdGhpcy5sb2NhbGVzID0gbG9jYWxlc1xuICAgICAgdGhpcy5kZWZhdWx0TG9jYWxlID0gZGVmYXVsdExvY2FsZVxuICAgICAgdGhpcy5kb21haW5Mb2NhbGVzID0gZG9tYWluTG9jYWxlc1xuICAgICAgdGhpcy5pc0xvY2FsZURvbWFpbiA9ICEhZGV0ZWN0RG9tYWluTG9jYWxlKFxuICAgICAgICBkb21haW5Mb2NhbGVzLFxuICAgICAgICBzZWxmLmxvY2F0aW9uLmhvc3RuYW1lXG4gICAgICApXG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBtYWtlIHN1cmUgXCJhc1wiIGRvZXNuJ3Qgc3RhcnQgd2l0aCBkb3VibGUgc2xhc2hlcyBvciBlbHNlIGl0IGNhblxuICAgICAgLy8gdGhyb3cgYW4gZXJyb3IgYXMgaXQncyBjb25zaWRlcmVkIGludmFsaWRcbiAgICAgIGlmIChhcy5zdWJzdHIoMCwgMikgIT09ICcvLycpIHtcbiAgICAgICAgLy8gaW4gb3JkZXIgZm9yIGBlLnN0YXRlYCB0byB3b3JrIG9uIHRoZSBgb25wb3BzdGF0ZWAgZXZlbnRcbiAgICAgICAgLy8gd2UgaGF2ZSB0byByZWdpc3RlciB0aGUgaW5pdGlhbCByb3V0ZSB1cG9uIGluaXRpYWxpemF0aW9uXG4gICAgICAgIHRoaXMuY2hhbmdlU3RhdGUoXG4gICAgICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZTogYWRkQmFzZVBhdGgocGF0aG5hbWUpLCBxdWVyeSB9KSxcbiAgICAgICAgICBnZXRVUkwoKSxcbiAgICAgICAgICB7IGxvY2FsZSB9XG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJywgdGhpcy5vblBvcFN0YXRlKVxuXG4gICAgICAvLyBlbmFibGUgY3VzdG9tIHNjcm9sbCByZXN0b3JhdGlvbiBoYW5kbGluZyB3aGVuIGF2YWlsYWJsZVxuICAgICAgLy8gb3RoZXJ3aXNlIGZhbGxiYWNrIHRvIGJyb3dzZXIncyBkZWZhdWx0IGhhbmRsaW5nXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTikge1xuICAgICAgICBpZiAobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24pIHtcbiAgICAgICAgICB3aW5kb3cuaGlzdG9yeS5zY3JvbGxSZXN0b3JhdGlvbiA9ICdtYW51YWwnXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBvblBvcFN0YXRlID0gKGU6IFBvcFN0YXRlRXZlbnQpOiB2b2lkID0+IHtcbiAgICBjb25zdCBzdGF0ZSA9IGUuc3RhdGUgYXMgSGlzdG9yeVN0YXRlXG5cbiAgICBpZiAoIXN0YXRlKSB7XG4gICAgICAvLyBXZSBnZXQgc3RhdGUgYXMgdW5kZWZpbmVkIGZvciB0d28gcmVhc29ucy5cbiAgICAgIC8vICAxLiBXaXRoIG9sZGVyIHNhZmFyaSAoPCA4KSBhbmQgb2xkZXIgY2hyb21lICg8IDM0KVxuICAgICAgLy8gIDIuIFdoZW4gdGhlIFVSTCBjaGFuZ2VkIHdpdGggI1xuICAgICAgLy9cbiAgICAgIC8vIEluIHRoZSBib3RoIGNhc2VzLCB3ZSBkb24ndCBuZWVkIHRvIHByb2NlZWQgYW5kIGNoYW5nZSB0aGUgcm91dGUuXG4gICAgICAvLyAoYXMgaXQncyBhbHJlYWR5IGNoYW5nZWQpXG4gICAgICAvLyBCdXQgd2UgY2FuIHNpbXBseSByZXBsYWNlIHRoZSBzdGF0ZSB3aXRoIHRoZSBuZXcgY2hhbmdlcy5cbiAgICAgIC8vIEFjdHVhbGx5LCBmb3IgKDEpIHdlIGRvbid0IG5lZWQgdG8gbm90aGluZy4gQnV0IGl0J3MgaGFyZCB0byBkZXRlY3QgdGhhdCBldmVudC5cbiAgICAgIC8vIFNvLCBkb2luZyB0aGUgZm9sbG93aW5nIGZvciAoMSkgZG9lcyBubyBoYXJtLlxuICAgICAgY29uc3QgeyBwYXRobmFtZSwgcXVlcnkgfSA9IHRoaXNcbiAgICAgIHRoaXMuY2hhbmdlU3RhdGUoXG4gICAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgICBmb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lOiBhZGRCYXNlUGF0aChwYXRobmFtZSksIHF1ZXJ5IH0pLFxuICAgICAgICBnZXRVUkwoKVxuICAgICAgKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKCFzdGF0ZS5fX04pIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGxldCBmb3JjZWRTY3JvbGw6IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfSB8IHVuZGVmaW5lZFxuICAgIGNvbnN0IHsgdXJsLCBhcywgb3B0aW9ucywgaWR4IH0gPSBzdGF0ZVxuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKSB7XG4gICAgICBpZiAobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24pIHtcbiAgICAgICAgaWYgKHRoaXMuX2lkeCAhPT0gaWR4KSB7XG4gICAgICAgICAgLy8gU25hcHNob3QgY3VycmVudCBzY3JvbGwgcG9zaXRpb246XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oXG4gICAgICAgICAgICAgICdfX25leHRfc2Nyb2xsXycgKyB0aGlzLl9pZHgsXG4gICAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KHsgeDogc2VsZi5wYWdlWE9mZnNldCwgeTogc2VsZi5wYWdlWU9mZnNldCB9KVxuICAgICAgICAgICAgKVxuICAgICAgICAgIH0gY2F0Y2gge31cblxuICAgICAgICAgIC8vIFJlc3RvcmUgb2xkIHNjcm9sbCBwb3NpdGlvbjpcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgdiA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ19fbmV4dF9zY3JvbGxfJyArIGlkeClcbiAgICAgICAgICAgIGZvcmNlZFNjcm9sbCA9IEpTT04ucGFyc2UodiEpXG4gICAgICAgICAgfSBjYXRjaCB7XG4gICAgICAgICAgICBmb3JjZWRTY3JvbGwgPSB7IHg6IDAsIHk6IDAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLl9pZHggPSBpZHhcblxuICAgIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHBhcnNlUmVsYXRpdmVVcmwodXJsKVxuXG4gICAgLy8gTWFrZSBzdXJlIHdlIGRvbid0IHJlLXJlbmRlciBvbiBpbml0aWFsIGxvYWQsXG4gICAgLy8gY2FuIGJlIGNhdXNlZCBieSBuYXZpZ2F0aW5nIGJhY2sgZnJvbSBhbiBleHRlcm5hbCBzaXRlXG4gICAgaWYgKHRoaXMuaXNTc3IgJiYgYXMgPT09IHRoaXMuYXNQYXRoICYmIHBhdGhuYW1lID09PSB0aGlzLnBhdGhuYW1lKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgZG93bnN0cmVhbSBhcHBsaWNhdGlvbiByZXR1cm5zIGZhbHN5LCByZXR1cm4uXG4gICAgLy8gVGhleSB3aWxsIHRoZW4gYmUgcmVzcG9uc2libGUgZm9yIGhhbmRsaW5nIHRoZSBldmVudC5cbiAgICBpZiAodGhpcy5fYnBzICYmICF0aGlzLl9icHMoc3RhdGUpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLmNoYW5nZShcbiAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgdXJsLFxuICAgICAgYXMsXG4gICAgICBPYmplY3QuYXNzaWduPHt9LCBUcmFuc2l0aW9uT3B0aW9ucywgVHJhbnNpdGlvbk9wdGlvbnM+KHt9LCBvcHRpb25zLCB7XG4gICAgICAgIHNoYWxsb3c6IG9wdGlvbnMuc2hhbGxvdyAmJiB0aGlzLl9zaGFsbG93LFxuICAgICAgICBsb2NhbGU6IG9wdGlvbnMubG9jYWxlIHx8IHRoaXMuZGVmYXVsdExvY2FsZSxcbiAgICAgIH0pLFxuICAgICAgZm9yY2VkU2Nyb2xsXG4gICAgKVxuICB9XG5cbiAgcmVsb2FkKCk6IHZvaWQge1xuICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKVxuICB9XG5cbiAgLyoqXG4gICAqIEdvIGJhY2sgaW4gaGlzdG9yeVxuICAgKi9cbiAgYmFjaygpIHtcbiAgICB3aW5kb3cuaGlzdG9yeS5iYWNrKClcbiAgfVxuXG4gIC8qKlxuICAgKiBQZXJmb3JtcyBhIGBwdXNoU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi9cbiAgcHVzaCh1cmw6IFVybCwgYXM/OiBVcmwsIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zID0ge30pIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTikge1xuICAgICAgLy8gVE9ETzogcmVtb3ZlIGluIHRoZSBmdXR1cmUgd2hlbiB3ZSB1cGRhdGUgaGlzdG9yeSBiZWZvcmUgcm91dGUgY2hhbmdlXG4gICAgICAvLyBpcyBjb21wbGV0ZSwgYXMgdGhlIHBvcHN0YXRlIGV2ZW50IHNob3VsZCBoYW5kbGUgdGhpcyBjYXB0dXJlLlxuICAgICAgaWYgKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gU25hcHNob3Qgc2Nyb2xsIHBvc2l0aW9uIHJpZ2h0IGJlZm9yZSBuYXZpZ2F0aW5nIHRvIGEgbmV3IHBhZ2U6XG4gICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShcbiAgICAgICAgICAgICdfX25leHRfc2Nyb2xsXycgKyB0aGlzLl9pZHgsXG4gICAgICAgICAgICBKU09OLnN0cmluZ2lmeSh7IHg6IHNlbGYucGFnZVhPZmZzZXQsIHk6IHNlbGYucGFnZVlPZmZzZXQgfSlcbiAgICAgICAgICApXG4gICAgICAgIH0gY2F0Y2gge31cbiAgICAgIH1cbiAgICB9XG4gICAgOyh7IHVybCwgYXMgfSA9IHByZXBhcmVVcmxBcyh0aGlzLCB1cmwsIGFzKSlcbiAgICByZXR1cm4gdGhpcy5jaGFuZ2UoJ3B1c2hTdGF0ZScsIHVybCwgYXMsIG9wdGlvbnMpXG4gIH1cblxuICAvKipcbiAgICogUGVyZm9ybXMgYSBgcmVwbGFjZVN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICovXG4gIHJlcGxhY2UodXJsOiBVcmwsIGFzPzogVXJsLCBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9ucyA9IHt9KSB7XG4gICAgOyh7IHVybCwgYXMgfSA9IHByZXBhcmVVcmxBcyh0aGlzLCB1cmwsIGFzKSlcbiAgICByZXR1cm4gdGhpcy5jaGFuZ2UoJ3JlcGxhY2VTdGF0ZScsIHVybCwgYXMsIG9wdGlvbnMpXG4gIH1cblxuICBwcml2YXRlIGFzeW5jIGNoYW5nZShcbiAgICBtZXRob2Q6IEhpc3RvcnlNZXRob2QsXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYXM6IHN0cmluZyxcbiAgICBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9ucyxcbiAgICBmb3JjZWRTY3JvbGw/OiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH1cbiAgKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgaWYgKCFpc0xvY2FsVVJMKHVybCkpIHtcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdXJsXG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICAvLyBmb3Igc3RhdGljIHBhZ2VzIHdpdGggcXVlcnkgcGFyYW1zIGluIHRoZSBVUkwgd2UgZGVsYXlcbiAgICAvLyBtYXJraW5nIHRoZSByb3V0ZXIgcmVhZHkgdW50aWwgYWZ0ZXIgdGhlIHF1ZXJ5IGlzIHVwZGF0ZWRcbiAgICBpZiAoKG9wdGlvbnMgYXMgYW55KS5faCkge1xuICAgICAgdGhpcy5pc1JlYWR5ID0gdHJ1ZVxuICAgIH1cblxuICAgIC8vIERlZmF1bHQgdG8gc2Nyb2xsIHJlc2V0IGJlaGF2aW9yIHVubGVzcyBleHBsaWNpdGx5IHNwZWNpZmllZCB0byBiZVxuICAgIC8vIGBmYWxzZWAhIFRoaXMgbWFrZXMgdGhlIGJlaGF2aW9yIGJldHdlZW4gdXNpbmcgYFJvdXRlciNwdXNoYCBhbmQgYVxuICAgIC8vIGA8TGluayAvPmAgY29uc2lzdGVudC5cbiAgICBvcHRpb25zLnNjcm9sbCA9ICEhKG9wdGlvbnMuc2Nyb2xsID8/IHRydWUpXG5cbiAgICBsZXQgbG9jYWxlQ2hhbmdlID0gb3B0aW9ucy5sb2NhbGUgIT09IHRoaXMubG9jYWxlXG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgdGhpcy5sb2NhbGUgPVxuICAgICAgICBvcHRpb25zLmxvY2FsZSA9PT0gZmFsc2VcbiAgICAgICAgICA/IHRoaXMuZGVmYXVsdExvY2FsZVxuICAgICAgICAgIDogb3B0aW9ucy5sb2NhbGUgfHwgdGhpcy5sb2NhbGVcblxuICAgICAgaWYgKHR5cGVvZiBvcHRpb25zLmxvY2FsZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgb3B0aW9ucy5sb2NhbGUgPSB0aGlzLmxvY2FsZVxuICAgICAgfVxuXG4gICAgICBjb25zdCBwYXJzZWRBcyA9IHBhcnNlUmVsYXRpdmVVcmwoaGFzQmFzZVBhdGgoYXMpID8gZGVsQmFzZVBhdGgoYXMpIDogYXMpXG4gICAgICBjb25zdCBsb2NhbGVQYXRoUmVzdWx0ID0gbm9ybWFsaXplTG9jYWxlUGF0aChcbiAgICAgICAgcGFyc2VkQXMucGF0aG5hbWUsXG4gICAgICAgIHRoaXMubG9jYWxlc1xuICAgICAgKVxuXG4gICAgICBpZiAobG9jYWxlUGF0aFJlc3VsdC5kZXRlY3RlZExvY2FsZSkge1xuICAgICAgICB0aGlzLmxvY2FsZSA9IGxvY2FsZVBhdGhSZXN1bHQuZGV0ZWN0ZWRMb2NhbGVcbiAgICAgICAgcGFyc2VkQXMucGF0aG5hbWUgPSBhZGRCYXNlUGF0aChwYXJzZWRBcy5wYXRobmFtZSlcbiAgICAgICAgYXMgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWRBcylcbiAgICAgICAgdXJsID0gYWRkQmFzZVBhdGgoXG4gICAgICAgICAgbm9ybWFsaXplTG9jYWxlUGF0aChcbiAgICAgICAgICAgIGhhc0Jhc2VQYXRoKHVybCkgPyBkZWxCYXNlUGF0aCh1cmwpIDogdXJsLFxuICAgICAgICAgICAgdGhpcy5sb2NhbGVzXG4gICAgICAgICAgKS5wYXRobmFtZVxuICAgICAgICApXG4gICAgICB9XG4gICAgICBsZXQgZGlkTmF2aWdhdGUgPSBmYWxzZVxuXG4gICAgICAvLyB3ZSBuZWVkIHRvIHdyYXAgdGhpcyBpbiB0aGUgZW52IGNoZWNrIGFnYWluIHNpbmNlIHJlZ2VuZXJhdG9yIHJ1bnRpbWVcbiAgICAgIC8vIG1vdmVzIHRoaXMgb24gaXRzIG93biBkdWUgdG8gdGhlIHJldHVyblxuICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgICAgLy8gaWYgdGhlIGxvY2FsZSBpc24ndCBjb25maWd1cmVkIGhhcmQgbmF2aWdhdGUgdG8gc2hvdyA0MDQgcGFnZVxuICAgICAgICBpZiAoIXRoaXMubG9jYWxlcz8uaW5jbHVkZXModGhpcy5sb2NhbGUhKSkge1xuICAgICAgICAgIHBhcnNlZEFzLnBhdGhuYW1lID0gYWRkTG9jYWxlKHBhcnNlZEFzLnBhdGhuYW1lLCB0aGlzLmxvY2FsZSlcbiAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZEFzKVxuICAgICAgICAgIC8vIHRoaXMgd2FzIHByZXZpb3VzbHkgYSByZXR1cm4gYnV0IHdhcyByZW1vdmVkIGluIGZhdm9yXG4gICAgICAgICAgLy8gb2YgYmV0dGVyIGRlYWQgY29kZSBlbGltaW5hdGlvbiB3aXRoIHJlZ2VuZXJhdG9yIHJ1bnRpbWVcbiAgICAgICAgICBkaWROYXZpZ2F0ZSA9IHRydWVcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBjb25zdCBkZXRlY3RlZERvbWFpbiA9IGRldGVjdERvbWFpbkxvY2FsZShcbiAgICAgICAgdGhpcy5kb21haW5Mb2NhbGVzLFxuICAgICAgICB1bmRlZmluZWQsXG4gICAgICAgIHRoaXMubG9jYWxlXG4gICAgICApXG5cbiAgICAgIC8vIHdlIG5lZWQgdG8gd3JhcCB0aGlzIGluIHRoZSBlbnYgY2hlY2sgYWdhaW4gc2luY2UgcmVnZW5lcmF0b3IgcnVudGltZVxuICAgICAgLy8gbW92ZXMgdGhpcyBvbiBpdHMgb3duIGR1ZSB0byB0aGUgcmV0dXJuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgICAvLyBpZiB3ZSBhcmUgbmF2aWdhdGluZyB0byBhIGRvbWFpbiBsb2NhbGUgZW5zdXJlIHdlIHJlZGlyZWN0IHRvIHRoZVxuICAgICAgICAvLyBjb3JyZWN0IGRvbWFpblxuICAgICAgICBpZiAoXG4gICAgICAgICAgIWRpZE5hdmlnYXRlICYmXG4gICAgICAgICAgZGV0ZWN0ZWREb21haW4gJiZcbiAgICAgICAgICB0aGlzLmlzTG9jYWxlRG9tYWluICYmXG4gICAgICAgICAgc2VsZi5sb2NhdGlvbi5ob3N0bmFtZSAhPT0gZGV0ZWN0ZWREb21haW4uZG9tYWluXG4gICAgICAgICkge1xuICAgICAgICAgIGNvbnN0IGFzTm9CYXNlUGF0aCA9IGRlbEJhc2VQYXRoKGFzKVxuICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYGh0dHAke2RldGVjdGVkRG9tYWluLmh0dHAgPyAnJyA6ICdzJ306Ly8ke1xuICAgICAgICAgICAgZGV0ZWN0ZWREb21haW4uZG9tYWluXG4gICAgICAgICAgfSR7YWRkQmFzZVBhdGgoXG4gICAgICAgICAgICBgJHtcbiAgICAgICAgICAgICAgdGhpcy5sb2NhbGUgPT09IGRldGVjdGVkRG9tYWluLmRlZmF1bHRMb2NhbGVcbiAgICAgICAgICAgICAgICA/ICcnXG4gICAgICAgICAgICAgICAgOiBgLyR7dGhpcy5sb2NhbGV9YFxuICAgICAgICAgICAgfSR7YXNOb0Jhc2VQYXRoID09PSAnLycgPyAnJyA6IGFzTm9CYXNlUGF0aH1gIHx8ICcvJ1xuICAgICAgICAgICl9YFxuICAgICAgICAgIC8vIHRoaXMgd2FzIHByZXZpb3VzbHkgYSByZXR1cm4gYnV0IHdhcyByZW1vdmVkIGluIGZhdm9yXG4gICAgICAgICAgLy8gb2YgYmV0dGVyIGRlYWQgY29kZSBlbGltaW5hdGlvbiB3aXRoIHJlZ2VuZXJhdG9yIHJ1bnRpbWVcbiAgICAgICAgICBkaWROYXZpZ2F0ZSA9IHRydWVcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoZGlkTmF2aWdhdGUpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKCgpID0+IHt9KVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghKG9wdGlvbnMgYXMgYW55KS5faCkge1xuICAgICAgdGhpcy5pc1NzciA9IGZhbHNlXG4gICAgfVxuICAgIC8vIG1hcmtpbmcgcm91dGUgY2hhbmdlcyBhcyBhIG5hdmlnYXRpb24gc3RhcnQgZW50cnlcbiAgICBpZiAoU1QpIHtcbiAgICAgIHBlcmZvcm1hbmNlLm1hcmsoJ3JvdXRlQ2hhbmdlJylcbiAgICB9XG5cbiAgICBjb25zdCB7IHNoYWxsb3cgPSBmYWxzZSB9ID0gb3B0aW9uc1xuICAgIGNvbnN0IHJvdXRlUHJvcHMgPSB7IHNoYWxsb3cgfVxuXG4gICAgaWYgKHRoaXMuX2luRmxpZ2h0Um91dGUpIHtcbiAgICAgIHRoaXMuYWJvcnRDb21wb25lbnRMb2FkKHRoaXMuX2luRmxpZ2h0Um91dGUsIHJvdXRlUHJvcHMpXG4gICAgfVxuXG4gICAgYXMgPSBhZGRCYXNlUGF0aChcbiAgICAgIGFkZExvY2FsZShcbiAgICAgICAgaGFzQmFzZVBhdGgoYXMpID8gZGVsQmFzZVBhdGgoYXMpIDogYXMsXG4gICAgICAgIG9wdGlvbnMubG9jYWxlLFxuICAgICAgICB0aGlzLmRlZmF1bHRMb2NhbGVcbiAgICAgIClcbiAgICApXG4gICAgY29uc3QgY2xlYW5lZEFzID0gZGVsTG9jYWxlKFxuICAgICAgaGFzQmFzZVBhdGgoYXMpID8gZGVsQmFzZVBhdGgoYXMpIDogYXMsXG4gICAgICB0aGlzLmxvY2FsZVxuICAgIClcbiAgICB0aGlzLl9pbkZsaWdodFJvdXRlID0gYXNcblxuICAgIC8vIElmIHRoZSB1cmwgY2hhbmdlIGlzIG9ubHkgcmVsYXRlZCB0byBhIGhhc2ggY2hhbmdlXG4gICAgLy8gV2Ugc2hvdWxkIG5vdCBwcm9jZWVkLiBXZSBzaG91bGQgb25seSBjaGFuZ2UgdGhlIHN0YXRlLlxuXG4gICAgLy8gV0FSTklORzogYF9oYCBpcyBhbiBpbnRlcm5hbCBvcHRpb24gZm9yIGhhbmRpbmcgTmV4dC5qcyBjbGllbnQtc2lkZVxuICAgIC8vIGh5ZHJhdGlvbi4gWW91ciBhcHAgc2hvdWxkIF9uZXZlcl8gdXNlIHRoaXMgcHJvcGVydHkuIEl0IG1heSBjaGFuZ2UgYXRcbiAgICAvLyBhbnkgdGltZSB3aXRob3V0IG5vdGljZS5cbiAgICBpZiAoIShvcHRpb25zIGFzIGFueSkuX2ggJiYgdGhpcy5vbmx5QUhhc2hDaGFuZ2UoY2xlYW5lZEFzKSkge1xuICAgICAgdGhpcy5hc1BhdGggPSBjbGVhbmVkQXNcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZVN0YXJ0JywgYXMsIHJvdXRlUHJvcHMpXG4gICAgICAvLyBUT0RPOiBkbyB3ZSBuZWVkIHRoZSByZXNvbHZlZCBocmVmIHdoZW4gb25seSBhIGhhc2ggY2hhbmdlP1xuICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMpXG4gICAgICB0aGlzLnNjcm9sbFRvSGFzaChjbGVhbmVkQXMpXG4gICAgICB0aGlzLm5vdGlmeSh0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0sIG51bGwpXG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VDb21wbGV0ZScsIGFzLCByb3V0ZVByb3BzKVxuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG5cbiAgICBsZXQgcGFyc2VkID0gcGFyc2VSZWxhdGl2ZVVybCh1cmwpXG4gICAgbGV0IHsgcGF0aG5hbWUsIHF1ZXJ5IH0gPSBwYXJzZWRcblxuICAgIC8vIFRoZSBidWlsZCBtYW5pZmVzdCBuZWVkcyB0byBiZSBsb2FkZWQgYmVmb3JlIGF1dG8tc3RhdGljIGR5bmFtaWMgcGFnZXNcbiAgICAvLyBnZXQgdGhlaXIgcXVlcnkgcGFyYW1ldGVycyB0byBhbGxvdyBlbnN1cmluZyB0aGV5IGNhbiBiZSBwYXJzZWQgcHJvcGVybHlcbiAgICAvLyB3aGVuIHJld3JpdHRlbiB0b1xuICAgIGxldCBwYWdlczogYW55LCByZXdyaXRlczogYW55XG4gICAgdHJ5IHtcbiAgICAgIHBhZ2VzID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmdldFBhZ2VMaXN0KClcbiAgICAgIDsoeyBfX3Jld3JpdGVzOiByZXdyaXRlcyB9ID0gYXdhaXQgZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCgpKVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgLy8gSWYgd2UgZmFpbCB0byByZXNvbHZlIHRoZSBwYWdlIGxpc3Qgb3IgY2xpZW50LWJ1aWxkIG1hbmlmZXN0LCB3ZSBtdXN0XG4gICAgICAvLyBkbyBhIHNlcnZlci1zaWRlIHRyYW5zaXRpb246XG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGFzXG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBwYXJzZWQgPSByZXNvbHZlRHluYW1pY1JvdXRlKHBhcnNlZCwgcGFnZXMpIGFzIHR5cGVvZiBwYXJzZWRcblxuICAgIGlmIChwYXJzZWQucGF0aG5hbWUgIT09IHBhdGhuYW1lKSB7XG4gICAgICBwYXRobmFtZSA9IHBhcnNlZC5wYXRobmFtZVxuICAgICAgdXJsID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKVxuICAgIH1cblxuICAgIC8vIHVybCBhbmQgYXMgc2hvdWxkIGFsd2F5cyBiZSBwcmVmaXhlZCB3aXRoIGJhc2VQYXRoIGJ5IHRoaXNcbiAgICAvLyBwb2ludCBieSBlaXRoZXIgbmV4dC9saW5rIG9yIHJvdXRlci5wdXNoL3JlcGxhY2Ugc28gc3RyaXAgdGhlXG4gICAgLy8gYmFzZVBhdGggZnJvbSB0aGUgcGF0aG5hbWUgdG8gbWF0Y2ggdGhlIHBhZ2VzIGRpciAxLXRvLTFcbiAgICBwYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgICA/IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKGRlbEJhc2VQYXRoKHBhdGhuYW1lKSlcbiAgICAgIDogcGF0aG5hbWVcblxuICAgIC8vIElmIGFza2VkIHRvIGNoYW5nZSB0aGUgY3VycmVudCBVUkwgd2Ugc2hvdWxkIHJlbG9hZCB0aGUgY3VycmVudCBwYWdlXG4gICAgLy8gKG5vdCBsb2NhdGlvbi5yZWxvYWQoKSBidXQgcmVsb2FkIGdldEluaXRpYWxQcm9wcyBhbmQgb3RoZXIgTmV4dC5qcyBzdHVmZnMpXG4gICAgLy8gV2UgYWxzbyBuZWVkIHRvIHNldCB0aGUgbWV0aG9kID0gcmVwbGFjZVN0YXRlIGFsd2F5c1xuICAgIC8vIGFzIHRoaXMgc2hvdWxkIG5vdCBnbyBpbnRvIHRoZSBoaXN0b3J5IChUaGF0J3MgaG93IGJyb3dzZXJzIHdvcmspXG4gICAgLy8gV2Ugc2hvdWxkIGNvbXBhcmUgdGhlIG5ldyBhc1BhdGggdG8gdGhlIGN1cnJlbnQgYXNQYXRoLCBub3QgdGhlIHVybFxuICAgIGlmICghdGhpcy51cmxJc05ldyhjbGVhbmVkQXMpICYmICFsb2NhbGVDaGFuZ2UpIHtcbiAgICAgIG1ldGhvZCA9ICdyZXBsYWNlU3RhdGUnXG4gICAgfVxuXG4gICAgbGV0IHJvdXRlID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUpXG5cbiAgICAvLyB3ZSBuZWVkIHRvIHJlc29sdmUgdGhlIGFzIHZhbHVlIHVzaW5nIHJld3JpdGVzIGZvciBkeW5hbWljIFNTR1xuICAgIC8vIHBhZ2VzIHRvIGFsbG93IGJ1aWxkaW5nIHRoZSBkYXRhIFVSTCBjb3JyZWN0bHlcbiAgICBsZXQgcmVzb2x2ZWRBcyA9IGFzXG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0hBU19SRVdSSVRFUyAmJiBhcy5zdGFydHNXaXRoKCcvJykpIHtcbiAgICAgIGNvbnN0IHJld3JpdGVzUmVzdWx0ID0gcmVzb2x2ZVJld3JpdGVzKFxuICAgICAgICBhZGRCYXNlUGF0aChhZGRMb2NhbGUoZGVsQmFzZVBhdGgoYXMpLCB0aGlzLmxvY2FsZSkpLFxuICAgICAgICBwYWdlcyxcbiAgICAgICAgcmV3cml0ZXMsXG4gICAgICAgIHF1ZXJ5LFxuICAgICAgICAocDogc3RyaW5nKSA9PiByZXNvbHZlRHluYW1pY1JvdXRlKHsgcGF0aG5hbWU6IHAgfSwgcGFnZXMpLnBhdGhuYW1lISxcbiAgICAgICAgdGhpcy5sb2NhbGVzXG4gICAgICApXG4gICAgICByZXNvbHZlZEFzID0gcmV3cml0ZXNSZXN1bHQuYXNQYXRoXG5cbiAgICAgIGlmIChyZXdyaXRlc1Jlc3VsdC5tYXRjaGVkUGFnZSAmJiByZXdyaXRlc1Jlc3VsdC5yZXNvbHZlZEhyZWYpIHtcbiAgICAgICAgLy8gaWYgdGhpcyBkaXJlY3RseSBtYXRjaGVzIGEgcGFnZSB3ZSBuZWVkIHRvIHVwZGF0ZSB0aGUgaHJlZiB0b1xuICAgICAgICAvLyBhbGxvdyB0aGUgY29ycmVjdCBwYWdlIGNodW5rIHRvIGJlIGxvYWRlZFxuICAgICAgICByb3V0ZSA9IHJld3JpdGVzUmVzdWx0LnJlc29sdmVkSHJlZlxuICAgICAgICBwYXRobmFtZSA9IHJld3JpdGVzUmVzdWx0LnJlc29sdmVkSHJlZlxuICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgICAgICB1cmwgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCFpc0xvY2FsVVJMKGFzKSkge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgIGBJbnZhbGlkIGhyZWY6IFwiJHt1cmx9XCIgYW5kIGFzOiBcIiR7YXN9XCIsIHJlY2VpdmVkIHJlbGF0aXZlIGhyZWYgYW5kIGV4dGVybmFsIGFzYCArXG4gICAgICAgICAgICBgXFxuU2VlIG1vcmUgaW5mbzogaHR0cHM6Ly9lcnIuc2gvbmV4dC5qcy9pbnZhbGlkLXJlbGF0aXZlLXVybC1leHRlcm5hbC1hc2BcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGFzXG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICByZXNvbHZlZEFzID0gZGVsTG9jYWxlKGRlbEJhc2VQYXRoKHJlc29sdmVkQXMpLCB0aGlzLmxvY2FsZSlcblxuICAgIGlmIChpc0R5bmFtaWNSb3V0ZShyb3V0ZSkpIHtcbiAgICAgIGNvbnN0IHBhcnNlZEFzID0gcGFyc2VSZWxhdGl2ZVVybChyZXNvbHZlZEFzKVxuICAgICAgY29uc3QgYXNQYXRobmFtZSA9IHBhcnNlZEFzLnBhdGhuYW1lXG5cbiAgICAgIGNvbnN0IHJvdXRlUmVnZXggPSBnZXRSb3V0ZVJlZ2V4KHJvdXRlKVxuICAgICAgY29uc3Qgcm91dGVNYXRjaCA9IGdldFJvdXRlTWF0Y2hlcihyb3V0ZVJlZ2V4KShhc1BhdGhuYW1lKVxuICAgICAgY29uc3Qgc2hvdWxkSW50ZXJwb2xhdGUgPSByb3V0ZSA9PT0gYXNQYXRobmFtZVxuICAgICAgY29uc3QgaW50ZXJwb2xhdGVkQXMgPSBzaG91bGRJbnRlcnBvbGF0ZVxuICAgICAgICA/IGludGVycG9sYXRlQXMocm91dGUsIGFzUGF0aG5hbWUsIHF1ZXJ5KVxuICAgICAgICA6ICh7fSBhcyB7IHJlc3VsdDogdW5kZWZpbmVkOyBwYXJhbXM6IHVuZGVmaW5lZCB9KVxuXG4gICAgICBpZiAoIXJvdXRlTWF0Y2ggfHwgKHNob3VsZEludGVycG9sYXRlICYmICFpbnRlcnBvbGF0ZWRBcy5yZXN1bHQpKSB7XG4gICAgICAgIGNvbnN0IG1pc3NpbmdQYXJhbXMgPSBPYmplY3Qua2V5cyhyb3V0ZVJlZ2V4Lmdyb3VwcykuZmlsdGVyKFxuICAgICAgICAgIChwYXJhbSkgPT4gIXF1ZXJ5W3BhcmFtXVxuICAgICAgICApXG5cbiAgICAgICAgaWYgKG1pc3NpbmdQYXJhbXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICAgIGAke1xuICAgICAgICAgICAgICAgIHNob3VsZEludGVycG9sYXRlXG4gICAgICAgICAgICAgICAgICA/IGBJbnRlcnBvbGF0aW5nIGhyZWZgXG4gICAgICAgICAgICAgICAgICA6IGBNaXNtYXRjaGluZyBcXGBhc1xcYCBhbmQgXFxgaHJlZlxcYGBcbiAgICAgICAgICAgICAgfSBmYWlsZWQgdG8gbWFudWFsbHkgcHJvdmlkZSBgICtcbiAgICAgICAgICAgICAgICBgdGhlIHBhcmFtczogJHttaXNzaW5nUGFyYW1zLmpvaW4oXG4gICAgICAgICAgICAgICAgICAnLCAnXG4gICAgICAgICAgICAgICAgKX0gaW4gdGhlIFxcYGhyZWZcXGAncyBcXGBxdWVyeVxcYGBcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICAoc2hvdWxkSW50ZXJwb2xhdGVcbiAgICAgICAgICAgICAgPyBgVGhlIHByb3ZpZGVkIFxcYGhyZWZcXGAgKCR7dXJsfSkgdmFsdWUgaXMgbWlzc2luZyBxdWVyeSB2YWx1ZXMgKCR7bWlzc2luZ1BhcmFtcy5qb2luKFxuICAgICAgICAgICAgICAgICAgJywgJ1xuICAgICAgICAgICAgICAgICl9KSB0byBiZSBpbnRlcnBvbGF0ZWQgcHJvcGVybHkuIGBcbiAgICAgICAgICAgICAgOiBgVGhlIHByb3ZpZGVkIFxcYGFzXFxgIHZhbHVlICgke2FzUGF0aG5hbWV9KSBpcyBpbmNvbXBhdGlibGUgd2l0aCB0aGUgXFxgaHJlZlxcYCB2YWx1ZSAoJHtyb3V0ZX0pLiBgKSArXG4gICAgICAgICAgICAgIGBSZWFkIG1vcmU6IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzLyR7XG4gICAgICAgICAgICAgICAgc2hvdWxkSW50ZXJwb2xhdGVcbiAgICAgICAgICAgICAgICAgID8gJ2hyZWYtaW50ZXJwb2xhdGlvbi1mYWlsZWQnXG4gICAgICAgICAgICAgICAgICA6ICdpbmNvbXBhdGlibGUtaHJlZi1hcydcbiAgICAgICAgICAgICAgfWBcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoc2hvdWxkSW50ZXJwb2xhdGUpIHtcbiAgICAgICAgYXMgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihcbiAgICAgICAgICBPYmplY3QuYXNzaWduKHt9LCBwYXJzZWRBcywge1xuICAgICAgICAgICAgcGF0aG5hbWU6IGludGVycG9sYXRlZEFzLnJlc3VsdCxcbiAgICAgICAgICAgIHF1ZXJ5OiBvbWl0UGFybXNGcm9tUXVlcnkocXVlcnksIGludGVycG9sYXRlZEFzLnBhcmFtcyEpLFxuICAgICAgICAgIH0pXG4gICAgICAgIClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIE1lcmdlIHBhcmFtcyBpbnRvIGBxdWVyeWAsIG92ZXJ3cml0aW5nIGFueSBzcGVjaWZpZWQgaW4gc2VhcmNoXG4gICAgICAgIE9iamVjdC5hc3NpZ24ocXVlcnksIHJvdXRlTWF0Y2gpXG4gICAgICB9XG4gICAgfVxuXG4gICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZVN0YXJ0JywgYXMsIHJvdXRlUHJvcHMpXG5cbiAgICB0cnkge1xuICAgICAgbGV0IHJvdXRlSW5mbyA9IGF3YWl0IHRoaXMuZ2V0Um91dGVJbmZvKFxuICAgICAgICByb3V0ZSxcbiAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgIHF1ZXJ5LFxuICAgICAgICBhcyxcbiAgICAgICAgcmVzb2x2ZWRBcyxcbiAgICAgICAgcm91dGVQcm9wc1xuICAgICAgKVxuICAgICAgbGV0IHsgZXJyb3IsIHByb3BzLCBfX05fU1NHLCBfX05fU1NQIH0gPSByb3V0ZUluZm9cblxuICAgICAgLy8gaGFuZGxlIHJlZGlyZWN0IG9uIGNsaWVudC10cmFuc2l0aW9uXG4gICAgICBpZiAoKF9fTl9TU0cgfHwgX19OX1NTUCkgJiYgcHJvcHMpIHtcbiAgICAgICAgaWYgKChwcm9wcyBhcyBhbnkpLnBhZ2VQcm9wcyAmJiAocHJvcHMgYXMgYW55KS5wYWdlUHJvcHMuX19OX1JFRElSRUNUKSB7XG4gICAgICAgICAgY29uc3QgZGVzdGluYXRpb24gPSAocHJvcHMgYXMgYW55KS5wYWdlUHJvcHMuX19OX1JFRElSRUNUXG5cbiAgICAgICAgICAvLyBjaGVjayBpZiBkZXN0aW5hdGlvbiBpcyBpbnRlcm5hbCAocmVzb2x2ZXMgdG8gYSBwYWdlKSBhbmQgYXR0ZW1wdFxuICAgICAgICAgIC8vIGNsaWVudC1uYXZpZ2F0aW9uIGlmIGl0IGlzIGZhbGxpbmcgYmFjayB0byBoYXJkIG5hdmlnYXRpb24gaWZcbiAgICAgICAgICAvLyBpdCdzIG5vdFxuICAgICAgICAgIGlmIChkZXN0aW5hdGlvbi5zdGFydHNXaXRoKCcvJykpIHtcbiAgICAgICAgICAgIGNvbnN0IHBhcnNlZEhyZWYgPSBwYXJzZVJlbGF0aXZlVXJsKGRlc3RpbmF0aW9uKVxuICAgICAgICAgICAgcmVzb2x2ZUR5bmFtaWNSb3V0ZShwYXJzZWRIcmVmLCBwYWdlcywgZmFsc2UpXG5cbiAgICAgICAgICAgIGlmIChwYWdlcy5pbmNsdWRlcyhwYXJzZWRIcmVmLnBhdGhuYW1lKSkge1xuICAgICAgICAgICAgICBjb25zdCB7IHVybDogbmV3VXJsLCBhczogbmV3QXMgfSA9IHByZXBhcmVVcmxBcyhcbiAgICAgICAgICAgICAgICB0aGlzLFxuICAgICAgICAgICAgICAgIGRlc3RpbmF0aW9uLFxuICAgICAgICAgICAgICAgIGRlc3RpbmF0aW9uXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2hhbmdlKG1ldGhvZCwgbmV3VXJsLCBuZXdBcywgb3B0aW9ucylcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGRlc3RpbmF0aW9uXG4gICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKCgpID0+IHt9KVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5pc1ByZXZpZXcgPSAhIXByb3BzLl9fTl9QUkVWSUVXXG5cbiAgICAgICAgLy8gaGFuZGxlIFNTRyBkYXRhIDQwNFxuICAgICAgICBpZiAocHJvcHMubm90Rm91bmQgPT09IFNTR19EQVRBX05PVF9GT1VORCkge1xuICAgICAgICAgIGxldCBub3RGb3VuZFJvdXRlXG5cbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudCgnLzQwNCcpXG4gICAgICAgICAgICBub3RGb3VuZFJvdXRlID0gJy80MDQnXG4gICAgICAgICAgfSBjYXRjaCAoXykge1xuICAgICAgICAgICAgbm90Rm91bmRSb3V0ZSA9ICcvX2Vycm9yJ1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJvdXRlSW5mbyA9IGF3YWl0IHRoaXMuZ2V0Um91dGVJbmZvKFxuICAgICAgICAgICAgbm90Rm91bmRSb3V0ZSxcbiAgICAgICAgICAgIG5vdEZvdW5kUm91dGUsXG4gICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICAgIGFzLFxuICAgICAgICAgICAgcmVzb2x2ZWRBcyxcbiAgICAgICAgICAgIHsgc2hhbGxvdzogZmFsc2UgfVxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLCBhcywgcm91dGVQcm9wcylcbiAgICAgIHRoaXMuY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zKVxuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBjb25zdCBhcHBDb21wOiBhbnkgPSB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50XG4gICAgICAgIDsod2luZG93IGFzIGFueSkubmV4dC5pc1ByZXJlbmRlcmVkID1cbiAgICAgICAgICBhcHBDb21wLmdldEluaXRpYWxQcm9wcyA9PT0gYXBwQ29tcC5vcmlnR2V0SW5pdGlhbFByb3BzICYmXG4gICAgICAgICAgIShyb3V0ZUluZm8uQ29tcG9uZW50IGFzIGFueSkuZ2V0SW5pdGlhbFByb3BzXG4gICAgICB9XG5cbiAgICAgIC8vIHNoYWxsb3cgcm91dGluZyBpcyBvbmx5IGFsbG93ZWQgZm9yIHNhbWUgcGFnZSBVUkwgY2hhbmdlcy5cbiAgICAgIGNvbnN0IGlzVmFsaWRTaGFsbG93Um91dGUgPSBvcHRpb25zLnNoYWxsb3cgJiYgdGhpcy5yb3V0ZSA9PT0gcm91dGVcblxuICAgICAgaWYgKFxuICAgICAgICAob3B0aW9ucyBhcyBhbnkpLl9oICYmXG4gICAgICAgIHBhdGhuYW1lID09PSAnL19lcnJvcicgJiZcbiAgICAgICAgc2VsZi5fX05FWFRfREFUQV9fLnByb3BzPy5wYWdlUHJvcHM/LnN0YXR1c0NvZGUgPT09IDUwMCAmJlxuICAgICAgICBwcm9wcz8ucGFnZVByb3BzXG4gICAgICApIHtcbiAgICAgICAgLy8gZW5zdXJlIHN0YXR1c0NvZGUgaXMgc3RpbGwgY29ycmVjdCBmb3Igc3RhdGljIDUwMCBwYWdlXG4gICAgICAgIC8vIHdoZW4gdXBkYXRpbmcgcXVlcnkgaW5mb3JtYXRpb25cbiAgICAgICAgcHJvcHMucGFnZVByb3BzLnN0YXR1c0NvZGUgPSA1MDBcbiAgICAgIH1cblxuICAgICAgYXdhaXQgdGhpcy5zZXQoXG4gICAgICAgIHJvdXRlLFxuICAgICAgICBwYXRobmFtZSEsXG4gICAgICAgIHF1ZXJ5LFxuICAgICAgICBjbGVhbmVkQXMsXG4gICAgICAgIHJvdXRlSW5mbyxcbiAgICAgICAgZm9yY2VkU2Nyb2xsIHx8XG4gICAgICAgICAgKGlzVmFsaWRTaGFsbG93Um91dGUgfHwgIW9wdGlvbnMuc2Nyb2xsID8gbnVsbCA6IHsgeDogMCwgeTogMCB9KVxuICAgICAgKS5jYXRjaCgoZSkgPT4ge1xuICAgICAgICBpZiAoZS5jYW5jZWxsZWQpIGVycm9yID0gZXJyb3IgfHwgZVxuICAgICAgICBlbHNlIHRocm93IGVcbiAgICAgIH0pXG5cbiAgICAgIGlmIChlcnJvcikge1xuICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBlcnJvciwgY2xlYW5lZEFzLCByb3V0ZVByb3BzKVxuICAgICAgICB0aHJvdyBlcnJvclxuICAgICAgfVxuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgICBpZiAodGhpcy5sb2NhbGUpIHtcbiAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQubGFuZyA9IHRoaXMubG9jYWxlXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VDb21wbGV0ZScsIGFzLCByb3V0ZVByb3BzKVxuXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgaWYgKGVyci5jYW5jZWxsZWQpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG4gICAgICB0aHJvdyBlcnJcbiAgICB9XG4gIH1cblxuICBjaGFuZ2VTdGF0ZShcbiAgICBtZXRob2Q6IEhpc3RvcnlNZXRob2QsXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYXM6IHN0cmluZyxcbiAgICBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9ucyA9IHt9XG4gICk6IHZvaWQge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeSBpcyBub3QgYXZhaWxhYmxlLmApXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5LiR7bWV0aG9kfSBpcyBub3QgYXZhaWxhYmxlYClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG1ldGhvZCAhPT0gJ3B1c2hTdGF0ZScgfHwgZ2V0VVJMKCkgIT09IGFzKSB7XG4gICAgICB0aGlzLl9zaGFsbG93ID0gb3B0aW9ucy5zaGFsbG93XG4gICAgICB3aW5kb3cuaGlzdG9yeVttZXRob2RdKFxuICAgICAgICB7XG4gICAgICAgICAgdXJsLFxuICAgICAgICAgIGFzLFxuICAgICAgICAgIG9wdGlvbnMsXG4gICAgICAgICAgX19OOiB0cnVlLFxuICAgICAgICAgIGlkeDogdGhpcy5faWR4ID0gbWV0aG9kICE9PSAncHVzaFN0YXRlJyA/IHRoaXMuX2lkeCA6IHRoaXMuX2lkeCArIDEsXG4gICAgICAgIH0gYXMgSGlzdG9yeVN0YXRlLFxuICAgICAgICAvLyBNb3N0IGJyb3dzZXJzIGN1cnJlbnRseSBpZ25vcmVzIHRoaXMgcGFyYW1ldGVyLCBhbHRob3VnaCB0aGV5IG1heSB1c2UgaXQgaW4gdGhlIGZ1dHVyZS5cbiAgICAgICAgLy8gUGFzc2luZyB0aGUgZW1wdHkgc3RyaW5nIGhlcmUgc2hvdWxkIGJlIHNhZmUgYWdhaW5zdCBmdXR1cmUgY2hhbmdlcyB0byB0aGUgbWV0aG9kLlxuICAgICAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvSGlzdG9yeS9yZXBsYWNlU3RhdGVcbiAgICAgICAgJycsXG4gICAgICAgIGFzXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgYXN5bmMgaGFuZGxlUm91dGVJbmZvRXJyb3IoXG4gICAgZXJyOiBFcnJvciAmIHsgY29kZTogYW55OyBjYW5jZWxsZWQ6IGJvb2xlYW4gfSxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgICBhczogc3RyaW5nLFxuICAgIHJvdXRlUHJvcHM6IFJvdXRlUHJvcGVydGllcyxcbiAgICBsb2FkRXJyb3JGYWlsPzogYm9vbGVhblxuICApOiBQcm9taXNlPENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mbz4ge1xuICAgIGlmIChlcnIuY2FuY2VsbGVkKSB7XG4gICAgICAvLyBidWJibGUgdXAgY2FuY2VsbGF0aW9uIGVycm9yc1xuICAgICAgdGhyb3cgZXJyXG4gICAgfVxuXG4gICAgaWYgKGlzQXNzZXRFcnJvcihlcnIpIHx8IGxvYWRFcnJvckZhaWwpIHtcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGVyciwgYXMsIHJvdXRlUHJvcHMpXG5cbiAgICAgIC8vIElmIHdlIGNhbid0IGxvYWQgdGhlIHBhZ2UgaXQgY291bGQgYmUgb25lIG9mIGZvbGxvd2luZyByZWFzb25zXG4gICAgICAvLyAgMS4gUGFnZSBkb2Vzbid0IGV4aXN0c1xuICAgICAgLy8gIDIuIFBhZ2UgZG9lcyBleGlzdCBpbiBhIGRpZmZlcmVudCB6b25lXG4gICAgICAvLyAgMy4gSW50ZXJuYWwgZXJyb3Igd2hpbGUgbG9hZGluZyB0aGUgcGFnZVxuXG4gICAgICAvLyBTbywgZG9pbmcgYSBoYXJkIHJlbG9hZCBpcyB0aGUgcHJvcGVyIHdheSB0byBkZWFsIHdpdGggdGhpcy5cbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYXNcblxuICAgICAgLy8gQ2hhbmdpbmcgdGhlIFVSTCBkb2Vzbid0IGJsb2NrIGV4ZWN1dGluZyB0aGUgY3VycmVudCBjb2RlIHBhdGguXG4gICAgICAvLyBTbyBsZXQncyB0aHJvdyBhIGNhbmNlbGxhdGlvbiBlcnJvciBzdG9wIHRoZSByb3V0aW5nIGxvZ2ljLlxuICAgICAgdGhyb3cgYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpXG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIGxldCBDb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgICAgIGxldCBzdHlsZVNoZWV0czogU3R5bGVTaGVldFR1cGxlW11cbiAgICAgIGxldCBwcm9wczogUmVjb3JkPHN0cmluZywgYW55PiB8IHVuZGVmaW5lZFxuXG4gICAgICBpZiAoXG4gICAgICAgIHR5cGVvZiBDb21wb25lbnQhID09PSAndW5kZWZpbmVkJyB8fFxuICAgICAgICB0eXBlb2Ygc3R5bGVTaGVldHMhID09PSAndW5kZWZpbmVkJ1xuICAgICAgKSB7XG4gICAgICAgIDsoeyBwYWdlOiBDb21wb25lbnQsIHN0eWxlU2hlZXRzIH0gPSBhd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KFxuICAgICAgICAgICcvX2Vycm9yJ1xuICAgICAgICApKVxuICAgICAgfVxuXG4gICAgICBjb25zdCByb3V0ZUluZm86IENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mbyA9IHtcbiAgICAgICAgcHJvcHMsXG4gICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgc3R5bGVTaGVldHMsXG4gICAgICAgIGVycixcbiAgICAgICAgZXJyb3I6IGVycixcbiAgICAgIH1cblxuICAgICAgaWYgKCFyb3V0ZUluZm8ucHJvcHMpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSBhd2FpdCB0aGlzLmdldEluaXRpYWxQcm9wcyhDb21wb25lbnQsIHtcbiAgICAgICAgICAgIGVycixcbiAgICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgfSBhcyBhbnkpXG4gICAgICAgIH0gY2F0Y2ggKGdpcEVycikge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIGVycm9yIHBhZ2UgYGdldEluaXRpYWxQcm9wc2A6ICcsIGdpcEVycilcbiAgICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSB7fVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiByb3V0ZUluZm9cbiAgICB9IGNhdGNoIChyb3V0ZUluZm9FcnIpIHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZVJvdXRlSW5mb0Vycm9yKFxuICAgICAgICByb3V0ZUluZm9FcnIsXG4gICAgICAgIHBhdGhuYW1lLFxuICAgICAgICBxdWVyeSxcbiAgICAgICAgYXMsXG4gICAgICAgIHJvdXRlUHJvcHMsXG4gICAgICAgIHRydWVcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICBhc3luYyBnZXRSb3V0ZUluZm8oXG4gICAgcm91dGU6IHN0cmluZyxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBhbnksXG4gICAgYXM6IHN0cmluZyxcbiAgICByZXNvbHZlZEFzOiBzdHJpbmcsXG4gICAgcm91dGVQcm9wczogUm91dGVQcm9wZXJ0aWVzXG4gICk6IFByb21pc2U8UHJpdmF0ZVJvdXRlSW5mbz4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBleGlzdGluZ1JvdXRlSW5mbzogUHJpdmF0ZVJvdXRlSW5mbyB8IHVuZGVmaW5lZCA9IHRoaXMuY29tcG9uZW50c1tcbiAgICAgICAgcm91dGVcbiAgICAgIF1cbiAgICAgIGlmIChyb3V0ZVByb3BzLnNoYWxsb3cgJiYgZXhpc3RpbmdSb3V0ZUluZm8gJiYgdGhpcy5yb3V0ZSA9PT0gcm91dGUpIHtcbiAgICAgICAgcmV0dXJuIGV4aXN0aW5nUm91dGVJbmZvXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGNhY2hlZFJvdXRlSW5mbzogQ29tcGxldGVQcml2YXRlUm91dGVJbmZvIHwgdW5kZWZpbmVkID1cbiAgICAgICAgZXhpc3RpbmdSb3V0ZUluZm8gJiYgJ2luaXRpYWwnIGluIGV4aXN0aW5nUm91dGVJbmZvXG4gICAgICAgICAgPyB1bmRlZmluZWRcbiAgICAgICAgICA6IGV4aXN0aW5nUm91dGVJbmZvXG4gICAgICBjb25zdCByb3V0ZUluZm86IENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mbyA9IGNhY2hlZFJvdXRlSW5mb1xuICAgICAgICA/IGNhY2hlZFJvdXRlSW5mb1xuICAgICAgICA6IGF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQocm91dGUpLnRoZW4oKHJlcykgPT4gKHtcbiAgICAgICAgICAgIENvbXBvbmVudDogcmVzLnBhZ2UsXG4gICAgICAgICAgICBzdHlsZVNoZWV0czogcmVzLnN0eWxlU2hlZXRzLFxuICAgICAgICAgICAgX19OX1NTRzogcmVzLm1vZC5fX05fU1NHLFxuICAgICAgICAgICAgX19OX1NTUDogcmVzLm1vZC5fX05fU1NQLFxuICAgICAgICAgIH0pKVxuXG4gICAgICBjb25zdCB7IENvbXBvbmVudCwgX19OX1NTRywgX19OX1NTUCB9ID0gcm91dGVJbmZvXG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGNvbnN0IHsgaXNWYWxpZEVsZW1lbnRUeXBlIH0gPSByZXF1aXJlKCdyZWFjdC1pcycpXG4gICAgICAgIGlmICghaXNWYWxpZEVsZW1lbnRUeXBlKENvbXBvbmVudCkpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICBgVGhlIGRlZmF1bHQgZXhwb3J0IGlzIG5vdCBhIFJlYWN0IENvbXBvbmVudCBpbiBwYWdlOiBcIiR7cGF0aG5hbWV9XCJgXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxldCBkYXRhSHJlZjogc3RyaW5nIHwgdW5kZWZpbmVkXG5cbiAgICAgIGlmIChfX05fU1NHIHx8IF9fTl9TU1ApIHtcbiAgICAgICAgZGF0YUhyZWYgPSB0aGlzLnBhZ2VMb2FkZXIuZ2V0RGF0YUhyZWYoXG4gICAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZSwgcXVlcnkgfSksXG4gICAgICAgICAgcmVzb2x2ZWRBcyxcbiAgICAgICAgICBfX05fU1NHLFxuICAgICAgICAgIHRoaXMubG9jYWxlXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgY29uc3QgcHJvcHMgPSBhd2FpdCB0aGlzLl9nZXREYXRhPENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mbz4oKCkgPT5cbiAgICAgICAgX19OX1NTR1xuICAgICAgICAgID8gdGhpcy5fZ2V0U3RhdGljRGF0YShkYXRhSHJlZiEpXG4gICAgICAgICAgOiBfX05fU1NQXG4gICAgICAgICAgPyB0aGlzLl9nZXRTZXJ2ZXJEYXRhKGRhdGFIcmVmISlcbiAgICAgICAgICA6IHRoaXMuZ2V0SW5pdGlhbFByb3BzKFxuICAgICAgICAgICAgICBDb21wb25lbnQsXG4gICAgICAgICAgICAgIC8vIHdlIHByb3ZpZGUgQXBwVHJlZSBsYXRlciBzbyB0aGlzIG5lZWRzIHRvIGJlIGBhbnlgXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICAgICAgICBhc1BhdGg6IGFzLFxuICAgICAgICAgICAgICB9IGFzIGFueVxuICAgICAgICAgICAgKVxuICAgICAgKVxuXG4gICAgICByb3V0ZUluZm8ucHJvcHMgPSBwcm9wc1xuICAgICAgdGhpcy5jb21wb25lbnRzW3JvdXRlXSA9IHJvdXRlSW5mb1xuICAgICAgcmV0dXJuIHJvdXRlSW5mb1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlUm91dGVJbmZvRXJyb3IoZXJyLCBwYXRobmFtZSwgcXVlcnksIGFzLCByb3V0ZVByb3BzKVxuICAgIH1cbiAgfVxuXG4gIHNldChcbiAgICByb3V0ZTogc3RyaW5nLFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICAgIGFzOiBzdHJpbmcsXG4gICAgZGF0YTogUHJpdmF0ZVJvdXRlSW5mbyxcbiAgICByZXNldFNjcm9sbDogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9IHwgbnVsbFxuICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICB0aGlzLmlzRmFsbGJhY2sgPSBmYWxzZVxuXG4gICAgdGhpcy5yb3V0ZSA9IHJvdXRlXG4gICAgdGhpcy5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgdGhpcy5xdWVyeSA9IHF1ZXJ5XG4gICAgdGhpcy5hc1BhdGggPSBhc1xuICAgIHJldHVybiB0aGlzLm5vdGlmeShkYXRhLCByZXNldFNjcm9sbClcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxsYmFjayB0byBleGVjdXRlIGJlZm9yZSByZXBsYWNpbmcgcm91dGVyIHN0YXRlXG4gICAqIEBwYXJhbSBjYiBjYWxsYmFjayB0byBiZSBleGVjdXRlZFxuICAgKi9cbiAgYmVmb3JlUG9wU3RhdGUoY2I6IEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2spIHtcbiAgICB0aGlzLl9icHMgPSBjYlxuICB9XG5cbiAgb25seUFIYXNoQ2hhbmdlKGFzOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICBpZiAoIXRoaXMuYXNQYXRoKSByZXR1cm4gZmFsc2VcbiAgICBjb25zdCBbb2xkVXJsTm9IYXNoLCBvbGRIYXNoXSA9IHRoaXMuYXNQYXRoLnNwbGl0KCcjJylcbiAgICBjb25zdCBbbmV3VXJsTm9IYXNoLCBuZXdIYXNoXSA9IGFzLnNwbGl0KCcjJylcblxuICAgIC8vIE1ha2VzIHN1cmUgd2Ugc2Nyb2xsIHRvIHRoZSBwcm92aWRlZCBoYXNoIGlmIHRoZSB1cmwvaGFzaCBhcmUgdGhlIHNhbWVcbiAgICBpZiAobmV3SGFzaCAmJiBvbGRVcmxOb0hhc2ggPT09IG5ld1VybE5vSGFzaCAmJiBvbGRIYXNoID09PSBuZXdIYXNoKSB7XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cblxuICAgIC8vIElmIHRoZSB1cmxzIGFyZSBjaGFuZ2UsIHRoZXJlJ3MgbW9yZSB0aGFuIGEgaGFzaCBjaGFuZ2VcbiAgICBpZiAob2xkVXJsTm9IYXNoICE9PSBuZXdVcmxOb0hhc2gpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIC8vIElmIHRoZSBoYXNoIGhhcyBjaGFuZ2VkLCB0aGVuIGl0J3MgYSBoYXNoIG9ubHkgY2hhbmdlLlxuICAgIC8vIFRoaXMgY2hlY2sgaXMgbmVjZXNzYXJ5IHRvIGhhbmRsZSBib3RoIHRoZSBlbnRlciBhbmRcbiAgICAvLyBsZWF2ZSBoYXNoID09PSAnJyBjYXNlcy4gVGhlIGlkZW50aXR5IGNhc2UgZmFsbHMgdGhyb3VnaFxuICAgIC8vIGFuZCBpcyB0cmVhdGVkIGFzIGEgbmV4dCByZWxvYWQuXG4gICAgcmV0dXJuIG9sZEhhc2ggIT09IG5ld0hhc2hcbiAgfVxuXG4gIHNjcm9sbFRvSGFzaChhczogc3RyaW5nKTogdm9pZCB7XG4gICAgY29uc3QgWywgaGFzaF0gPSBhcy5zcGxpdCgnIycpXG4gICAgLy8gU2Nyb2xsIHRvIHRvcCBpZiB0aGUgaGFzaCBpcyBqdXN0IGAjYCB3aXRoIG5vIHZhbHVlIG9yIGAjdG9wYFxuICAgIC8vIFRvIG1pcnJvciBicm93c2Vyc1xuICAgIGlmIChoYXNoID09PSAnJyB8fCBoYXNoID09PSAndG9wJykge1xuICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBGaXJzdCB3ZSBjaGVjayBpZiB0aGUgZWxlbWVudCBieSBpZCBpcyBmb3VuZFxuICAgIGNvbnN0IGlkRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChoYXNoKVxuICAgIGlmIChpZEVsKSB7XG4gICAgICBpZEVsLnNjcm9sbEludG9WaWV3KClcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICAvLyBJZiB0aGVyZSdzIG5vIGVsZW1lbnQgd2l0aCB0aGUgaWQsIHdlIGNoZWNrIHRoZSBgbmFtZWAgcHJvcGVydHlcbiAgICAvLyBUbyBtaXJyb3IgYnJvd3NlcnNcbiAgICBjb25zdCBuYW1lRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZShoYXNoKVswXVxuICAgIGlmIChuYW1lRWwpIHtcbiAgICAgIG5hbWVFbC5zY3JvbGxJbnRvVmlldygpXG4gICAgfVxuICB9XG5cbiAgdXJsSXNOZXcoYXNQYXRoOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5hc1BhdGggIT09IGFzUGF0aFxuICB9XG5cbiAgLyoqXG4gICAqIFByZWZldGNoIHBhZ2UgY29kZSwgeW91IG1heSB3YWl0IGZvciB0aGUgZGF0YSBkdXJpbmcgcGFnZSByZW5kZXJpbmcuXG4gICAqIFRoaXMgZmVhdHVyZSBvbmx5IHdvcmtzIGluIHByb2R1Y3Rpb24hXG4gICAqIEBwYXJhbSB1cmwgdGhlIGhyZWYgb2YgcHJlZmV0Y2hlZCBwYWdlXG4gICAqIEBwYXJhbSBhc1BhdGggdGhlIGFzIHBhdGggb2YgdGhlIHByZWZldGNoZWQgcGFnZVxuICAgKi9cbiAgYXN5bmMgcHJlZmV0Y2goXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYXNQYXRoOiBzdHJpbmcgPSB1cmwsXG4gICAgb3B0aW9uczogUHJlZmV0Y2hPcHRpb25zID0ge31cbiAgKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgbGV0IHBhcnNlZCA9IHBhcnNlUmVsYXRpdmVVcmwodXJsKVxuXG4gICAgbGV0IHsgcGF0aG5hbWUgfSA9IHBhcnNlZFxuXG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgIGlmIChvcHRpb25zLmxvY2FsZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgcGF0aG5hbWUgPSBub3JtYWxpemVMb2NhbGVQYXRoIShwYXRobmFtZSwgdGhpcy5sb2NhbGVzKS5wYXRobmFtZVxuICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgICAgICB1cmwgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpXG5cbiAgICAgICAgbGV0IHBhcnNlZEFzID0gcGFyc2VSZWxhdGl2ZVVybChhc1BhdGgpXG4gICAgICAgIGNvbnN0IGxvY2FsZVBhdGhSZXN1bHQgPSBub3JtYWxpemVMb2NhbGVQYXRoIShcbiAgICAgICAgICBwYXJzZWRBcy5wYXRobmFtZSxcbiAgICAgICAgICB0aGlzLmxvY2FsZXNcbiAgICAgICAgKVxuICAgICAgICBwYXJzZWRBcy5wYXRobmFtZSA9IGxvY2FsZVBhdGhSZXN1bHQucGF0aG5hbWVcbiAgICAgICAgb3B0aW9ucy5sb2NhbGUgPSBsb2NhbGVQYXRoUmVzdWx0LmRldGVjdGVkTG9jYWxlIHx8IHRoaXMuZGVmYXVsdExvY2FsZVxuICAgICAgICBhc1BhdGggPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWRBcylcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBwYWdlcyA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5nZXRQYWdlTGlzdCgpXG5cbiAgICBwYXJzZWQgPSByZXNvbHZlRHluYW1pY1JvdXRlKHBhcnNlZCwgcGFnZXMsIGZhbHNlKSBhcyB0eXBlb2YgcGFyc2VkXG5cbiAgICBpZiAocGFyc2VkLnBhdGhuYW1lICE9PSBwYXRobmFtZSkge1xuICAgICAgcGF0aG5hbWUgPSBwYXJzZWQucGF0aG5hbWVcbiAgICAgIHVybCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZClcbiAgICB9XG4gICAgbGV0IHJvdXRlID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUpXG4gICAgbGV0IHJlc29sdmVkQXMgPSBhc1BhdGhcblxuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSEFTX1JFV1JJVEVTICYmIGFzUGF0aC5zdGFydHNXaXRoKCcvJykpIHtcbiAgICAgIGxldCByZXdyaXRlczogYW55W11cbiAgICAgIDsoeyBfX3Jld3JpdGVzOiByZXdyaXRlcyB9ID0gYXdhaXQgZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCgpKVxuXG4gICAgICBjb25zdCByZXdyaXRlc1Jlc3VsdCA9IHJlc29sdmVSZXdyaXRlcyhcbiAgICAgICAgYWRkQmFzZVBhdGgoYWRkTG9jYWxlKGRlbEJhc2VQYXRoKGFzUGF0aCksIHRoaXMubG9jYWxlKSksXG4gICAgICAgIHBhZ2VzLFxuICAgICAgICByZXdyaXRlcyxcbiAgICAgICAgcGFyc2VkLnF1ZXJ5LFxuICAgICAgICAocDogc3RyaW5nKSA9PiByZXNvbHZlRHluYW1pY1JvdXRlKHsgcGF0aG5hbWU6IHAgfSwgcGFnZXMpLnBhdGhuYW1lISxcbiAgICAgICAgdGhpcy5sb2NhbGVzXG4gICAgICApXG5cbiAgICAgIGlmIChyZXdyaXRlc1Jlc3VsdC5tYXRjaGVkUGFnZSAmJiByZXdyaXRlc1Jlc3VsdC5yZXNvbHZlZEhyZWYpIHtcbiAgICAgICAgLy8gaWYgdGhpcyBkaXJlY3RseSBtYXRjaGVzIGEgcGFnZSB3ZSBuZWVkIHRvIHVwZGF0ZSB0aGUgaHJlZiB0b1xuICAgICAgICAvLyBhbGxvdyB0aGUgY29ycmVjdCBwYWdlIGNodW5rIHRvIGJlIGxvYWRlZFxuICAgICAgICByb3V0ZSA9IHJld3JpdGVzUmVzdWx0LnJlc29sdmVkSHJlZlxuICAgICAgICBwYXRobmFtZSA9IHJld3JpdGVzUmVzdWx0LnJlc29sdmVkSHJlZlxuICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgICAgICB1cmwgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpXG4gICAgICAgIHJlc29sdmVkQXMgPSByZXdyaXRlc1Jlc3VsdC5hc1BhdGhcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBQcmVmZXRjaCBpcyBub3Qgc3VwcG9ydGVkIGluIGRldmVsb3BtZW50IG1vZGUgYmVjYXVzZSBpdCB3b3VsZCB0cmlnZ2VyIG9uLWRlbWFuZC1lbnRyaWVzXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgIHRoaXMucGFnZUxvYWRlci5faXNTc2codXJsKS50aGVuKChpc1NzZzogYm9vbGVhbikgPT4ge1xuICAgICAgICByZXR1cm4gaXNTc2dcbiAgICAgICAgICA/IHRoaXMuX2dldFN0YXRpY0RhdGEoXG4gICAgICAgICAgICAgIHRoaXMucGFnZUxvYWRlci5nZXREYXRhSHJlZihcbiAgICAgICAgICAgICAgICB1cmwsXG4gICAgICAgICAgICAgICAgcmVzb2x2ZWRBcyxcbiAgICAgICAgICAgICAgICB0cnVlLFxuICAgICAgICAgICAgICAgIHR5cGVvZiBvcHRpb25zLmxvY2FsZSAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgICAgICAgICAgICAgID8gb3B0aW9ucy5sb2NhbGVcbiAgICAgICAgICAgICAgICAgIDogdGhpcy5sb2NhbGVcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKVxuICAgICAgICAgIDogZmFsc2VcbiAgICAgIH0pLFxuICAgICAgdGhpcy5wYWdlTG9hZGVyW29wdGlvbnMucHJpb3JpdHkgPyAnbG9hZFBhZ2UnIDogJ3ByZWZldGNoJ10ocm91dGUpLFxuICAgIF0pXG4gIH1cblxuICBhc3luYyBmZXRjaENvbXBvbmVudChyb3V0ZTogc3RyaW5nKTogUHJvbWlzZTxHb29kUGFnZUNhY2hlPiB7XG4gICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlXG4gICAgY29uc3QgY2FuY2VsID0gKHRoaXMuY2xjID0gKCkgPT4ge1xuICAgICAgY2FuY2VsbGVkID0gdHJ1ZVxuICAgIH0pXG5cbiAgICBjb25zdCBjb21wb25lbnRSZXN1bHQgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIubG9hZFBhZ2Uocm91dGUpXG5cbiAgICBpZiAoY2FuY2VsbGVkKSB7XG4gICAgICBjb25zdCBlcnJvcjogYW55ID0gbmV3IEVycm9yKFxuICAgICAgICBgQWJvcnQgZmV0Y2hpbmcgY29tcG9uZW50IGZvciByb3V0ZTogXCIke3JvdXRlfVwiYFxuICAgICAgKVxuICAgICAgZXJyb3IuY2FuY2VsbGVkID0gdHJ1ZVxuICAgICAgdGhyb3cgZXJyb3JcbiAgICB9XG5cbiAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbXBvbmVudFJlc3VsdFxuICB9XG5cbiAgX2dldERhdGE8VD4oZm46ICgpID0+IFByb21pc2U8VD4pOiBQcm9taXNlPFQ+IHtcbiAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2VcbiAgICBjb25zdCBjYW5jZWwgPSAoKSA9PiB7XG4gICAgICBjYW5jZWxsZWQgPSB0cnVlXG4gICAgfVxuICAgIHRoaXMuY2xjID0gY2FuY2VsXG4gICAgcmV0dXJuIGZuKCkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgaWYgKGNhbmNlbCA9PT0gdGhpcy5jbGMpIHtcbiAgICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgICB9XG5cbiAgICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgICAgY29uc3QgZXJyOiBhbnkgPSBuZXcgRXJyb3IoJ0xvYWRpbmcgaW5pdGlhbCBwcm9wcyBjYW5jZWxsZWQnKVxuICAgICAgICBlcnIuY2FuY2VsbGVkID0gdHJ1ZVxuICAgICAgICB0aHJvdyBlcnJcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGRhdGFcbiAgICB9KVxuICB9XG5cbiAgX2dldFN0YXRpY0RhdGEoZGF0YUhyZWY6IHN0cmluZyk6IFByb21pc2U8b2JqZWN0PiB7XG4gICAgY29uc3QgeyBocmVmOiBjYWNoZUtleSB9ID0gbmV3IFVSTChkYXRhSHJlZiwgd2luZG93LmxvY2F0aW9uLmhyZWYpXG4gICAgaWYgKFxuICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyAmJlxuICAgICAgIXRoaXMuaXNQcmV2aWV3ICYmXG4gICAgICB0aGlzLnNkY1tjYWNoZUtleV1cbiAgICApIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5zZGNbY2FjaGVLZXldKVxuICAgIH1cbiAgICByZXR1cm4gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZiwgdGhpcy5pc1NzcikudGhlbigoZGF0YSkgPT4ge1xuICAgICAgdGhpcy5zZGNbY2FjaGVLZXldID0gZGF0YVxuICAgICAgcmV0dXJuIGRhdGFcbiAgICB9KVxuICB9XG5cbiAgX2dldFNlcnZlckRhdGEoZGF0YUhyZWY6IHN0cmluZyk6IFByb21pc2U8b2JqZWN0PiB7XG4gICAgY29uc3QgeyBocmVmOiByZXNvdXJjZUtleSB9ID0gbmV3IFVSTChkYXRhSHJlZiwgd2luZG93LmxvY2F0aW9uLmhyZWYpXG4gICAgaWYgKHRoaXMuc2RyW3Jlc291cmNlS2V5XSkge1xuICAgICAgcmV0dXJuIHRoaXMuc2RyW3Jlc291cmNlS2V5XVxuICAgIH1cbiAgICByZXR1cm4gKHRoaXMuc2RyW3Jlc291cmNlS2V5XSA9IGZldGNoTmV4dERhdGEoZGF0YUhyZWYsIHRoaXMuaXNTc3IpXG4gICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICBkZWxldGUgdGhpcy5zZHJbcmVzb3VyY2VLZXldXG4gICAgICAgIHJldHVybiBkYXRhXG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgZGVsZXRlIHRoaXMuc2RyW3Jlc291cmNlS2V5XVxuICAgICAgICB0aHJvdyBlcnJcbiAgICAgIH0pKVxuICB9XG5cbiAgZ2V0SW5pdGlhbFByb3BzKFxuICAgIENvbXBvbmVudDogQ29tcG9uZW50VHlwZSxcbiAgICBjdHg6IE5leHRQYWdlQ29udGV4dFxuICApOiBQcm9taXNlPGFueT4ge1xuICAgIGNvbnN0IHsgQ29tcG9uZW50OiBBcHAgfSA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXVxuICAgIGNvbnN0IEFwcFRyZWUgPSB0aGlzLl93cmFwQXBwKEFwcCBhcyBBcHBDb21wb25lbnQpXG4gICAgY3R4LkFwcFRyZWUgPSBBcHBUcmVlXG4gICAgcmV0dXJuIGxvYWRHZXRJbml0aWFsUHJvcHM8QXBwQ29udGV4dFR5cGU8Um91dGVyPj4oQXBwLCB7XG4gICAgICBBcHBUcmVlLFxuICAgICAgQ29tcG9uZW50LFxuICAgICAgcm91dGVyOiB0aGlzLFxuICAgICAgY3R4LFxuICAgIH0pXG4gIH1cblxuICBhYm9ydENvbXBvbmVudExvYWQoYXM6IHN0cmluZywgcm91dGVQcm9wczogUm91dGVQcm9wZXJ0aWVzKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuY2xjKSB7XG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoXG4gICAgICAgICdyb3V0ZUNoYW5nZUVycm9yJyxcbiAgICAgICAgYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpLFxuICAgICAgICBhcyxcbiAgICAgICAgcm91dGVQcm9wc1xuICAgICAgKVxuICAgICAgdGhpcy5jbGMoKVxuICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgfVxuICB9XG5cbiAgbm90aWZ5KFxuICAgIGRhdGE6IFByaXZhdGVSb3V0ZUluZm8sXG4gICAgcmVzZXRTY3JvbGw6IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfSB8IG51bGxcbiAgKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIHRoaXMuc3ViKFxuICAgICAgZGF0YSxcbiAgICAgIHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnQgYXMgQXBwQ29tcG9uZW50LFxuICAgICAgcmVzZXRTY3JvbGxcbiAgICApXG4gIH1cbn1cbiIsIi8vIEZvcm1hdCBmdW5jdGlvbiBtb2RpZmllZCBmcm9tIG5vZGVqc1xuLy8gQ29weXJpZ2h0IEpveWVudCwgSW5jLiBhbmQgb3RoZXIgTm9kZSBjb250cmlidXRvcnMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcbi8vIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcbi8vIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZ1xuLy8gd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxuLy8gZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdFxuLy8gcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlXG4vLyBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZFxuLy8gaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTU1xuLy8gT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuLy8gTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTlxuLy8gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sXG4vLyBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1Jcbi8vIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEVcbi8vIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgKiBhcyBxdWVyeXN0cmluZyBmcm9tICcuL3F1ZXJ5c3RyaW5nJ1xuXG5jb25zdCBzbGFzaGVkUHJvdG9jb2xzID0gL2h0dHBzP3xmdHB8Z29waGVyfGZpbGUvXG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRVcmwodXJsT2JqOiBVcmxPYmplY3QpIHtcbiAgbGV0IHsgYXV0aCwgaG9zdG5hbWUgfSA9IHVybE9ialxuICBsZXQgcHJvdG9jb2wgPSB1cmxPYmoucHJvdG9jb2wgfHwgJydcbiAgbGV0IHBhdGhuYW1lID0gdXJsT2JqLnBhdGhuYW1lIHx8ICcnXG4gIGxldCBoYXNoID0gdXJsT2JqLmhhc2ggfHwgJydcbiAgbGV0IHF1ZXJ5ID0gdXJsT2JqLnF1ZXJ5IHx8ICcnXG4gIGxldCBob3N0OiBzdHJpbmcgfCBmYWxzZSA9IGZhbHNlXG5cbiAgYXV0aCA9IGF1dGggPyBlbmNvZGVVUklDb21wb25lbnQoYXV0aCkucmVwbGFjZSgvJTNBL2ksICc6JykgKyAnQCcgOiAnJ1xuXG4gIGlmICh1cmxPYmouaG9zdCkge1xuICAgIGhvc3QgPSBhdXRoICsgdXJsT2JqLmhvc3RcbiAgfSBlbHNlIGlmIChob3N0bmFtZSkge1xuICAgIGhvc3QgPSBhdXRoICsgKH5ob3N0bmFtZS5pbmRleE9mKCc6JykgPyBgWyR7aG9zdG5hbWV9XWAgOiBob3N0bmFtZSlcbiAgICBpZiAodXJsT2JqLnBvcnQpIHtcbiAgICAgIGhvc3QgKz0gJzonICsgdXJsT2JqLnBvcnRcbiAgICB9XG4gIH1cblxuICBpZiAocXVlcnkgJiYgdHlwZW9mIHF1ZXJ5ID09PSAnb2JqZWN0Jykge1xuICAgIHF1ZXJ5ID0gU3RyaW5nKHF1ZXJ5c3RyaW5nLnVybFF1ZXJ5VG9TZWFyY2hQYXJhbXMocXVlcnkgYXMgUGFyc2VkVXJsUXVlcnkpKVxuICB9XG5cbiAgbGV0IHNlYXJjaCA9IHVybE9iai5zZWFyY2ggfHwgKHF1ZXJ5ICYmIGA/JHtxdWVyeX1gKSB8fCAnJ1xuXG4gIGlmIChwcm90b2NvbCAmJiBwcm90b2NvbC5zdWJzdHIoLTEpICE9PSAnOicpIHByb3RvY29sICs9ICc6J1xuXG4gIGlmIChcbiAgICB1cmxPYmouc2xhc2hlcyB8fFxuICAgICgoIXByb3RvY29sIHx8IHNsYXNoZWRQcm90b2NvbHMudGVzdChwcm90b2NvbCkpICYmIGhvc3QgIT09IGZhbHNlKVxuICApIHtcbiAgICBob3N0ID0gJy8vJyArIChob3N0IHx8ICcnKVxuICAgIGlmIChwYXRobmFtZSAmJiBwYXRobmFtZVswXSAhPT0gJy8nKSBwYXRobmFtZSA9ICcvJyArIHBhdGhuYW1lXG4gIH0gZWxzZSBpZiAoIWhvc3QpIHtcbiAgICBob3N0ID0gJydcbiAgfVxuXG4gIGlmIChoYXNoICYmIGhhc2hbMF0gIT09ICcjJykgaGFzaCA9ICcjJyArIGhhc2hcbiAgaWYgKHNlYXJjaCAmJiBzZWFyY2hbMF0gIT09ICc/Jykgc2VhcmNoID0gJz8nICsgc2VhcmNoXG5cbiAgcGF0aG5hbWUgPSBwYXRobmFtZS5yZXBsYWNlKC9bPyNdL2csIGVuY29kZVVSSUNvbXBvbmVudClcbiAgc2VhcmNoID0gc2VhcmNoLnJlcGxhY2UoJyMnLCAnJTIzJylcblxuICByZXR1cm4gYCR7cHJvdG9jb2x9JHtob3N0fSR7cGF0aG5hbWV9JHtzZWFyY2h9JHtoYXNofWBcbn1cbiIsIi8vIElkZW50aWZ5IC9bcGFyYW1dLyBpbiByb3V0ZSBzdHJpbmdcbmNvbnN0IFRFU1RfUk9VVEUgPSAvXFwvXFxbW14vXSs/XFxdKD89XFwvfCQpL1xuXG5leHBvcnQgZnVuY3Rpb24gaXNEeW5hbWljUm91dGUocm91dGU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICByZXR1cm4gVEVTVF9ST1VURS50ZXN0KHJvdXRlKVxufVxuIiwiaW1wb3J0IHsgZ2V0TG9jYXRpb25PcmlnaW4gfSBmcm9tICcuLi8uLi91dGlscydcbmltcG9ydCB7IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkgfSBmcm9tICcuL3F1ZXJ5c3RyaW5nJ1xuXG4vKipcbiAqIFBhcnNlcyBwYXRoLXJlbGF0aXZlIHVybHMgKGUuZy4gYC9oZWxsby93b3JsZD9mb289YmFyYCkuIElmIHVybCBpc24ndCBwYXRoLXJlbGF0aXZlXG4gKiAoZS5nLiBgLi9oZWxsb2ApIHRoZW4gYXQgbGVhc3QgYmFzZSBtdXN0IGJlLlxuICogQWJzb2x1dGUgdXJscyBhcmUgcmVqZWN0ZWQgd2l0aCBvbmUgZXhjZXB0aW9uLCBpbiB0aGUgYnJvd3NlciwgYWJzb2x1dGUgdXJscyB0aGF0IGFyZSBvblxuICogdGhlIGN1cnJlbnQgb3JpZ2luIHdpbGwgYmUgcGFyc2VkIGFzIHJlbGF0aXZlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVJlbGF0aXZlVXJsKHVybDogc3RyaW5nLCBiYXNlPzogc3RyaW5nKSB7XG4gIGNvbnN0IGdsb2JhbEJhc2UgPSBuZXcgVVJMKFxuICAgIHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnID8gJ2h0dHA6Ly9uJyA6IGdldExvY2F0aW9uT3JpZ2luKClcbiAgKVxuICBjb25zdCByZXNvbHZlZEJhc2UgPSBiYXNlID8gbmV3IFVSTChiYXNlLCBnbG9iYWxCYXNlKSA6IGdsb2JhbEJhc2VcbiAgY29uc3QgeyBwYXRobmFtZSwgc2VhcmNoUGFyYW1zLCBzZWFyY2gsIGhhc2gsIGhyZWYsIG9yaWdpbiB9ID0gbmV3IFVSTChcbiAgICB1cmwsXG4gICAgcmVzb2x2ZWRCYXNlXG4gIClcbiAgaWYgKG9yaWdpbiAhPT0gZ2xvYmFsQmFzZS5vcmlnaW4pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYGludmFyaWFudDogaW52YWxpZCByZWxhdGl2ZSBVUkwsIHJvdXRlciByZWNlaXZlZCAke3VybH1gKVxuICB9XG4gIHJldHVybiB7XG4gICAgcGF0aG5hbWUsXG4gICAgcXVlcnk6IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoc2VhcmNoUGFyYW1zKSxcbiAgICBzZWFyY2gsXG4gICAgaGFzaCxcbiAgICBocmVmOiBocmVmLnNsaWNlKGdsb2JhbEJhc2Uub3JpZ2luLmxlbmd0aCksXG4gIH1cbn1cbiIsImltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5cbmV4cG9ydCBmdW5jdGlvbiBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KFxuICBzZWFyY2hQYXJhbXM6IFVSTFNlYXJjaFBhcmFtc1xuKTogUGFyc2VkVXJsUXVlcnkge1xuICBjb25zdCBxdWVyeTogUGFyc2VkVXJsUXVlcnkgPSB7fVxuICBzZWFyY2hQYXJhbXMuZm9yRWFjaCgodmFsdWUsIGtleSkgPT4ge1xuICAgIGlmICh0eXBlb2YgcXVlcnlba2V5XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHF1ZXJ5W2tleV0gPSB2YWx1ZVxuICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShxdWVyeVtrZXldKSkge1xuICAgICAgOyhxdWVyeVtrZXldIGFzIHN0cmluZ1tdKS5wdXNoKHZhbHVlKVxuICAgIH0gZWxzZSB7XG4gICAgICBxdWVyeVtrZXldID0gW3F1ZXJ5W2tleV0gYXMgc3RyaW5nLCB2YWx1ZV1cbiAgICB9XG4gIH0pXG4gIHJldHVybiBxdWVyeVxufVxuXG5mdW5jdGlvbiBzdHJpbmdpZnlVcmxRdWVyeVBhcmFtKHBhcmFtOiBzdHJpbmcpOiBzdHJpbmcge1xuICBpZiAoXG4gICAgdHlwZW9mIHBhcmFtID09PSAnc3RyaW5nJyB8fFxuICAgICh0eXBlb2YgcGFyYW0gPT09ICdudW1iZXInICYmICFpc05hTihwYXJhbSkpIHx8XG4gICAgdHlwZW9mIHBhcmFtID09PSAnYm9vbGVhbidcbiAgKSB7XG4gICAgcmV0dXJuIFN0cmluZyhwYXJhbSlcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gJydcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdXJsUXVlcnlUb1NlYXJjaFBhcmFtcyhcbiAgdXJsUXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4pOiBVUkxTZWFyY2hQYXJhbXMge1xuICBjb25zdCByZXN1bHQgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKClcbiAgT2JqZWN0LmVudHJpZXModXJsUXVlcnkpLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xuICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgdmFsdWUuZm9yRWFjaCgoaXRlbSkgPT4gcmVzdWx0LmFwcGVuZChrZXksIHN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0oaXRlbSkpKVxuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHQuc2V0KGtleSwgc3RyaW5naWZ5VXJsUXVlcnlQYXJhbSh2YWx1ZSkpXG4gICAgfVxuICB9KVxuICByZXR1cm4gcmVzdWx0XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhc3NpZ24oXG4gIHRhcmdldDogVVJMU2VhcmNoUGFyYW1zLFxuICAuLi5zZWFyY2hQYXJhbXNMaXN0OiBVUkxTZWFyY2hQYXJhbXNbXVxuKTogVVJMU2VhcmNoUGFyYW1zIHtcbiAgc2VhcmNoUGFyYW1zTGlzdC5mb3JFYWNoKChzZWFyY2hQYXJhbXMpID0+IHtcbiAgICBBcnJheS5mcm9tKHNlYXJjaFBhcmFtcy5rZXlzKCkpLmZvckVhY2goKGtleSkgPT4gdGFyZ2V0LmRlbGV0ZShrZXkpKVxuICAgIHNlYXJjaFBhcmFtcy5mb3JFYWNoKCh2YWx1ZSwga2V5KSA9PiB0YXJnZXQuYXBwZW5kKGtleSwgdmFsdWUpKVxuICB9KVxuICByZXR1cm4gdGFyZ2V0XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXNvbHZlUmV3cml0ZXMoKSB7fVxuIiwiaW1wb3J0IHsgZ2V0Um91dGVSZWdleCB9IGZyb20gJy4vcm91dGUtcmVnZXgnXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleDogUmV0dXJuVHlwZTx0eXBlb2YgZ2V0Um91dGVSZWdleD4pIHtcbiAgY29uc3QgeyByZSwgZ3JvdXBzIH0gPSByb3V0ZVJlZ2V4XG4gIHJldHVybiAocGF0aG5hbWU6IHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWQpID0+IHtcbiAgICBjb25zdCByb3V0ZU1hdGNoID0gcmUuZXhlYyhwYXRobmFtZSEpXG4gICAgaWYgKCFyb3V0ZU1hdGNoKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBjb25zdCBkZWNvZGUgPSAocGFyYW06IHN0cmluZykgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChwYXJhbSlcbiAgICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgY29uc3QgZXJyOiBFcnJvciAmIHsgY29kZT86IHN0cmluZyB9ID0gbmV3IEVycm9yKFxuICAgICAgICAgICdmYWlsZWQgdG8gZGVjb2RlIHBhcmFtJ1xuICAgICAgICApXG4gICAgICAgIGVyci5jb2RlID0gJ0RFQ09ERV9GQUlMRUQnXG4gICAgICAgIHRocm93IGVyclxuICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBwYXJhbXM6IHsgW3BhcmFtTmFtZTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW10gfSA9IHt9XG5cbiAgICBPYmplY3Qua2V5cyhncm91cHMpLmZvckVhY2goKHNsdWdOYW1lOiBzdHJpbmcpID0+IHtcbiAgICAgIGNvbnN0IGcgPSBncm91cHNbc2x1Z05hbWVdXG4gICAgICBjb25zdCBtID0gcm91dGVNYXRjaFtnLnBvc11cbiAgICAgIGlmIChtICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcGFyYW1zW3NsdWdOYW1lXSA9IH5tLmluZGV4T2YoJy8nKVxuICAgICAgICAgID8gbS5zcGxpdCgnLycpLm1hcCgoZW50cnkpID0+IGRlY29kZShlbnRyeSkpXG4gICAgICAgICAgOiBnLnJlcGVhdFxuICAgICAgICAgID8gW2RlY29kZShtKV1cbiAgICAgICAgICA6IGRlY29kZShtKVxuICAgICAgfVxuICAgIH0pXG4gICAgcmV0dXJuIHBhcmFtc1xuICB9XG59XG4iLCJleHBvcnQgaW50ZXJmYWNlIEdyb3VwIHtcbiAgcG9zOiBudW1iZXJcbiAgcmVwZWF0OiBib29sZWFuXG4gIG9wdGlvbmFsOiBib29sZWFuXG59XG5cbi8vIHRoaXMgaXNuJ3QgaW1wb3J0aW5nIHRoZSBlc2NhcGUtc3RyaW5nLXJlZ2V4IG1vZHVsZVxuLy8gdG8gcmVkdWNlIGJ5dGVzXG5mdW5jdGlvbiBlc2NhcGVSZWdleChzdHI6IHN0cmluZykge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoL1t8XFxcXHt9KClbXFxdXiQrKj8uLV0vZywgJ1xcXFwkJicpXG59XG5cbmZ1bmN0aW9uIHBhcnNlUGFyYW1ldGVyKHBhcmFtOiBzdHJpbmcpIHtcbiAgY29uc3Qgb3B0aW9uYWwgPSBwYXJhbS5zdGFydHNXaXRoKCdbJykgJiYgcGFyYW0uZW5kc1dpdGgoJ10nKVxuICBpZiAob3B0aW9uYWwpIHtcbiAgICBwYXJhbSA9IHBhcmFtLnNsaWNlKDEsIC0xKVxuICB9XG4gIGNvbnN0IHJlcGVhdCA9IHBhcmFtLnN0YXJ0c1dpdGgoJy4uLicpXG4gIGlmIChyZXBlYXQpIHtcbiAgICBwYXJhbSA9IHBhcmFtLnNsaWNlKDMpXG4gIH1cbiAgcmV0dXJuIHsga2V5OiBwYXJhbSwgcmVwZWF0LCBvcHRpb25hbCB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSb3V0ZVJlZ2V4KFxuICBub3JtYWxpemVkUm91dGU6IHN0cmluZ1xuKToge1xuICByZTogUmVnRXhwXG4gIG5hbWVkUmVnZXg/OiBzdHJpbmdcbiAgcm91dGVLZXlzPzogeyBbbmFtZWQ6IHN0cmluZ106IHN0cmluZyB9XG4gIGdyb3VwczogeyBbZ3JvdXBOYW1lOiBzdHJpbmddOiBHcm91cCB9XG59IHtcbiAgY29uc3Qgc2VnbWVudHMgPSAobm9ybWFsaXplZFJvdXRlLnJlcGxhY2UoL1xcLyQvLCAnJykgfHwgJy8nKVxuICAgIC5zbGljZSgxKVxuICAgIC5zcGxpdCgnLycpXG5cbiAgY29uc3QgZ3JvdXBzOiB7IFtncm91cE5hbWU6IHN0cmluZ106IEdyb3VwIH0gPSB7fVxuICBsZXQgZ3JvdXBJbmRleCA9IDFcbiAgY29uc3QgcGFyYW1ldGVyaXplZFJvdXRlID0gc2VnbWVudHNcbiAgICAubWFwKChzZWdtZW50KSA9PiB7XG4gICAgICBpZiAoc2VnbWVudC5zdGFydHNXaXRoKCdbJykgJiYgc2VnbWVudC5lbmRzV2l0aCgnXScpKSB7XG4gICAgICAgIGNvbnN0IHsga2V5LCBvcHRpb25hbCwgcmVwZWF0IH0gPSBwYXJzZVBhcmFtZXRlcihzZWdtZW50LnNsaWNlKDEsIC0xKSlcbiAgICAgICAgZ3JvdXBzW2tleV0gPSB7IHBvczogZ3JvdXBJbmRleCsrLCByZXBlYXQsIG9wdGlvbmFsIH1cbiAgICAgICAgcmV0dXJuIHJlcGVhdCA/IChvcHRpb25hbCA/ICcoPzovKC4rPykpPycgOiAnLyguKz8pJykgOiAnLyhbXi9dKz8pJ1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGAvJHtlc2NhcGVSZWdleChzZWdtZW50KX1gXG4gICAgICB9XG4gICAgfSlcbiAgICAuam9pbignJylcblxuICAvLyBkZWFkIGNvZGUgZWxpbWluYXRlIGZvciBicm93c2VyIHNpbmNlIGl0J3Mgb25seSBuZWVkZWRcbiAgLy8gd2hpbGUgZ2VuZXJhdGluZyByb3V0ZXMtbWFuaWZlc3RcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgbGV0IHJvdXRlS2V5Q2hhckNvZGUgPSA5N1xuICAgIGxldCByb3V0ZUtleUNoYXJMZW5ndGggPSAxXG5cbiAgICAvLyBidWlsZHMgYSBtaW5pbWFsIHJvdXRlS2V5IHVzaW5nIG9ubHkgYS16IGFuZCBtaW5pbWFsIG51bWJlciBvZiBjaGFyYWN0ZXJzXG4gICAgY29uc3QgZ2V0U2FmZVJvdXRlS2V5ID0gKCkgPT4ge1xuICAgICAgbGV0IHJvdXRlS2V5ID0gJydcblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByb3V0ZUtleUNoYXJMZW5ndGg7IGkrKykge1xuICAgICAgICByb3V0ZUtleSArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKHJvdXRlS2V5Q2hhckNvZGUpXG4gICAgICAgIHJvdXRlS2V5Q2hhckNvZGUrK1xuXG4gICAgICAgIGlmIChyb3V0ZUtleUNoYXJDb2RlID4gMTIyKSB7XG4gICAgICAgICAgcm91dGVLZXlDaGFyTGVuZ3RoKytcbiAgICAgICAgICByb3V0ZUtleUNoYXJDb2RlID0gOTdcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHJvdXRlS2V5XG4gICAgfVxuXG4gICAgY29uc3Qgcm91dGVLZXlzOiB7IFtuYW1lZDogc3RyaW5nXTogc3RyaW5nIH0gPSB7fVxuXG4gICAgbGV0IG5hbWVkUGFyYW1ldGVyaXplZFJvdXRlID0gc2VnbWVudHNcbiAgICAgIC5tYXAoKHNlZ21lbnQpID0+IHtcbiAgICAgICAgaWYgKHNlZ21lbnQuc3RhcnRzV2l0aCgnWycpICYmIHNlZ21lbnQuZW5kc1dpdGgoJ10nKSkge1xuICAgICAgICAgIGNvbnN0IHsga2V5LCBvcHRpb25hbCwgcmVwZWF0IH0gPSBwYXJzZVBhcmFtZXRlcihzZWdtZW50LnNsaWNlKDEsIC0xKSlcbiAgICAgICAgICAvLyByZXBsYWNlIGFueSBub24td29yZCBjaGFyYWN0ZXJzIHNpbmNlIHRoZXkgY2FuIGJyZWFrXG4gICAgICAgICAgLy8gdGhlIG5hbWVkIHJlZ2V4XG4gICAgICAgICAgbGV0IGNsZWFuZWRLZXkgPSBrZXkucmVwbGFjZSgvXFxXL2csICcnKVxuICAgICAgICAgIGxldCBpbnZhbGlkS2V5ID0gZmFsc2VcblxuICAgICAgICAgIC8vIGNoZWNrIGlmIHRoZSBrZXkgaXMgc3RpbGwgaW52YWxpZCBhbmQgZmFsbGJhY2sgdG8gdXNpbmcgYSBrbm93blxuICAgICAgICAgIC8vIHNhZmUga2V5XG4gICAgICAgICAgaWYgKGNsZWFuZWRLZXkubGVuZ3RoID09PSAwIHx8IGNsZWFuZWRLZXkubGVuZ3RoID4gMzApIHtcbiAgICAgICAgICAgIGludmFsaWRLZXkgPSB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICghaXNOYU4ocGFyc2VJbnQoY2xlYW5lZEtleS5zdWJzdHIoMCwgMSkpKSkge1xuICAgICAgICAgICAgaW52YWxpZEtleSA9IHRydWVcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoaW52YWxpZEtleSkge1xuICAgICAgICAgICAgY2xlYW5lZEtleSA9IGdldFNhZmVSb3V0ZUtleSgpXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcm91dGVLZXlzW2NsZWFuZWRLZXldID0ga2V5XG4gICAgICAgICAgcmV0dXJuIHJlcGVhdFxuICAgICAgICAgICAgPyBvcHRpb25hbFxuICAgICAgICAgICAgICA/IGAoPzovKD88JHtjbGVhbmVkS2V5fT4uKz8pKT9gXG4gICAgICAgICAgICAgIDogYC8oPzwke2NsZWFuZWRLZXl9Pi4rPylgXG4gICAgICAgICAgICA6IGAvKD88JHtjbGVhbmVkS2V5fT5bXi9dKz8pYFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBgLyR7ZXNjYXBlUmVnZXgoc2VnbWVudCl9YFxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmpvaW4oJycpXG5cbiAgICByZXR1cm4ge1xuICAgICAgcmU6IG5ldyBSZWdFeHAoYF4ke3BhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCksXG4gICAgICBncm91cHMsXG4gICAgICByb3V0ZUtleXMsXG4gICAgICBuYW1lZFJlZ2V4OiBgXiR7bmFtZWRQYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGAsXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICByZTogbmV3IFJlZ0V4cChgXiR7cGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgKSxcbiAgICBncm91cHMsXG4gIH1cbn1cbiIsImltcG9ydCB7IEluY29taW5nTWVzc2FnZSwgU2VydmVyUmVzcG9uc2UgfSBmcm9tICdodHRwJ1xuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCB7IENvbXBvbmVudFR5cGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7IGZvcm1hdFVybCB9IGZyb20gJy4vcm91dGVyL3V0aWxzL2Zvcm1hdC11cmwnXG5pbXBvcnQgeyBNYW5pZmVzdEl0ZW0gfSBmcm9tICcuLi9zZXJ2ZXIvbG9hZC1jb21wb25lbnRzJ1xuaW1wb3J0IHsgTmV4dFJvdXRlciB9IGZyb20gJy4vcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IEVudiB9IGZyb20gJ0BuZXh0L2VudidcbmltcG9ydCB7IEJ1aWxkTWFuaWZlc3QgfSBmcm9tICcuLi9zZXJ2ZXIvZ2V0LXBhZ2UtZmlsZXMnXG5pbXBvcnQgeyBEb21haW5Mb2NhbGVzIH0gZnJvbSAnLi4vc2VydmVyL2NvbmZpZydcblxuLyoqXG4gKiBUeXBlcyB1c2VkIGJ5IGJvdGggbmV4dCBhbmQgbmV4dC1zZXJ2ZXJcbiAqL1xuXG5leHBvcnQgdHlwZSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgQyBleHRlbmRzIEJhc2VDb250ZXh0ID0gTmV4dFBhZ2VDb250ZXh0LFxuICBJUCA9IHt9LFxuICBQID0ge31cbj4gPSBDb21wb25lbnRUeXBlPFA+ICYge1xuICAvKipcbiAgICogVXNlZCBmb3IgaW5pdGlhbCBwYWdlIGxvYWQgZGF0YSBwb3B1bGF0aW9uLiBEYXRhIHJldHVybmVkIGZyb20gYGdldEluaXRpYWxQcm9wc2AgaXMgc2VyaWFsaXplZCB3aGVuIHNlcnZlciByZW5kZXJlZC5cbiAgICogTWFrZSBzdXJlIHRvIHJldHVybiBwbGFpbiBgT2JqZWN0YCB3aXRob3V0IHVzaW5nIGBEYXRlYCwgYE1hcGAsIGBTZXRgLlxuICAgKiBAcGFyYW0gY3R4IENvbnRleHQgb2YgYHBhZ2VgXG4gICAqL1xuICBnZXRJbml0aWFsUHJvcHM/KGNvbnRleHQ6IEMpOiBJUCB8IFByb21pc2U8SVA+XG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50VHlwZSA9IE5leHRDb21wb25lbnRUeXBlPFxuICBEb2N1bWVudENvbnRleHQsXG4gIERvY3VtZW50SW5pdGlhbFByb3BzLFxuICBEb2N1bWVudFByb3BzXG4+ICYge1xuICByZW5kZXJEb2N1bWVudChcbiAgICBEb2N1bWVudDogRG9jdW1lbnRUeXBlLFxuICAgIHByb3BzOiBEb2N1bWVudFByb3BzXG4gICk6IFJlYWN0LlJlYWN0RWxlbWVudFxufVxuXG5leHBvcnQgdHlwZSBBcHBUeXBlID0gTmV4dENvbXBvbmVudFR5cGU8XG4gIEFwcENvbnRleHRUeXBlLFxuICBBcHBJbml0aWFsUHJvcHMsXG4gIEFwcFByb3BzVHlwZVxuPlxuXG5leHBvcnQgdHlwZSBBcHBUcmVlVHlwZSA9IENvbXBvbmVudFR5cGU8XG4gIEFwcEluaXRpYWxQcm9wcyAmIHsgW25hbWU6IHN0cmluZ106IGFueSB9XG4+XG5cbi8qKlxuICogV2ViIHZpdGFscyBwcm92aWRlZCB0byBfYXBwLnJlcG9ydFdlYlZpdGFscyBieSBDb3JlIFdlYiBWaXRhbHMgcGx1Z2luIGRldmVsb3BlZCBieSBHb29nbGUgQ2hyb21lIHRlYW0uXG4gKiBodHRwczovL25leHRqcy5vcmcvYmxvZy9uZXh0LTktNCNpbnRlZ3JhdGVkLXdlYi12aXRhbHMtcmVwb3J0aW5nXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRXZWJWaXRhbHNNZXRyaWMgPSB7XG4gIGlkOiBzdHJpbmdcbiAgbGFiZWw6IHN0cmluZ1xuICBuYW1lOiBzdHJpbmdcbiAgc3RhcnRUaW1lOiBudW1iZXJcbiAgdmFsdWU6IG51bWJlclxufVxuXG5leHBvcnQgdHlwZSBFbmhhbmNlcjxDPiA9IChDb21wb25lbnQ6IEMpID0+IENcblxuZXhwb3J0IHR5cGUgQ29tcG9uZW50c0VuaGFuY2VyID1cbiAgfCB7XG4gICAgICBlbmhhbmNlQXBwPzogRW5oYW5jZXI8QXBwVHlwZT5cbiAgICAgIGVuaGFuY2VDb21wb25lbnQ/OiBFbmhhbmNlcjxOZXh0Q29tcG9uZW50VHlwZT5cbiAgICB9XG4gIHwgRW5oYW5jZXI8TmV4dENvbXBvbmVudFR5cGU+XG5cbmV4cG9ydCB0eXBlIFJlbmRlclBhZ2VSZXN1bHQgPSB7XG4gIGh0bWw6IHN0cmluZ1xuICBoZWFkPzogQXJyYXk8SlNYLkVsZW1lbnQgfCBudWxsPlxufVxuXG5leHBvcnQgdHlwZSBSZW5kZXJQYWdlID0gKFxuICBvcHRpb25zPzogQ29tcG9uZW50c0VuaGFuY2VyXG4pID0+IFJlbmRlclBhZ2VSZXN1bHQgfCBQcm9taXNlPFJlbmRlclBhZ2VSZXN1bHQ+XG5cbmV4cG9ydCB0eXBlIEJhc2VDb250ZXh0ID0ge1xuICByZXM/OiBTZXJ2ZXJSZXNwb25zZVxuICBbazogc3RyaW5nXTogYW55XG59XG5cbmV4cG9ydCB0eXBlIE5FWFRfREFUQSA9IHtcbiAgcHJvcHM6IFJlY29yZDxzdHJpbmcsIGFueT5cbiAgcGFnZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBidWlsZElkOiBzdHJpbmdcbiAgYXNzZXRQcmVmaXg/OiBzdHJpbmdcbiAgcnVudGltZUNvbmZpZz86IHsgW2tleTogc3RyaW5nXTogYW55IH1cbiAgbmV4dEV4cG9ydD86IGJvb2xlYW5cbiAgYXV0b0V4cG9ydD86IGJvb2xlYW5cbiAgaXNGYWxsYmFjaz86IGJvb2xlYW5cbiAgZHluYW1pY0lkcz86IHN0cmluZ1tdXG4gIGVycj86IEVycm9yICYgeyBzdGF0dXNDb2RlPzogbnVtYmVyIH1cbiAgZ3NwPzogYm9vbGVhblxuICBnc3NwPzogYm9vbGVhblxuICBjdXN0b21TZXJ2ZXI/OiBib29sZWFuXG4gIGdpcD86IGJvb2xlYW5cbiAgYXBwR2lwPzogYm9vbGVhblxuICBsb2NhbGU/OiBzdHJpbmdcbiAgbG9jYWxlcz86IHN0cmluZ1tdXG4gIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcbiAgZG9tYWluTG9jYWxlcz86IERvbWFpbkxvY2FsZXNcbiAgc2NyaXB0TG9hZGVyPzogYW55W11cbiAgaXNQcmV2aWV3PzogYm9vbGVhblxufVxuXG4vKipcbiAqIGBOZXh0YCBjb250ZXh0XG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTmV4dFBhZ2VDb250ZXh0IHtcbiAgLyoqXG4gICAqIEVycm9yIG9iamVjdCBpZiBlbmNvdW50ZXJlZCBkdXJpbmcgcmVuZGVyaW5nXG4gICAqL1xuICBlcnI/OiAoRXJyb3IgJiB7IHN0YXR1c0NvZGU/OiBudW1iZXIgfSkgfCBudWxsXG4gIC8qKlxuICAgKiBgSFRUUGAgcmVxdWVzdCBvYmplY3QuXG4gICAqL1xuICByZXE/OiBJbmNvbWluZ01lc3NhZ2VcbiAgLyoqXG4gICAqIGBIVFRQYCByZXNwb25zZSBvYmplY3QuXG4gICAqL1xuICByZXM/OiBTZXJ2ZXJSZXNwb25zZVxuICAvKipcbiAgICogUGF0aCBzZWN0aW9uIG9mIGBVUkxgLlxuICAgKi9cbiAgcGF0aG5hbWU6IHN0cmluZ1xuICAvKipcbiAgICogUXVlcnkgc3RyaW5nIHNlY3Rpb24gb2YgYFVSTGAgcGFyc2VkIGFzIGFuIG9iamVjdC5cbiAgICovXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICAvKipcbiAgICogYFN0cmluZ2Agb2YgdGhlIGFjdHVhbCBwYXRoIGluY2x1ZGluZyBxdWVyeS5cbiAgICovXG4gIGFzUGF0aD86IHN0cmluZ1xuICAvKipcbiAgICogYENvbXBvbmVudGAgdGhlIHRyZWUgb2YgdGhlIEFwcCB0byB1c2UgaWYgbmVlZGluZyB0byByZW5kZXIgc2VwYXJhdGVseVxuICAgKi9cbiAgQXBwVHJlZTogQXBwVHJlZVR5cGVcbn1cblxuZXhwb3J0IHR5cGUgQXBwQ29udGV4dFR5cGU8UiBleHRlbmRzIE5leHRSb3V0ZXIgPSBOZXh0Um91dGVyPiA9IHtcbiAgQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxOZXh0UGFnZUNvbnRleHQ+XG4gIEFwcFRyZWU6IEFwcFRyZWVUeXBlXG4gIGN0eDogTmV4dFBhZ2VDb250ZXh0XG4gIHJvdXRlcjogUlxufVxuXG5leHBvcnQgdHlwZSBBcHBJbml0aWFsUHJvcHMgPSB7XG4gIHBhZ2VQcm9wczogYW55XG59XG5cbmV4cG9ydCB0eXBlIEFwcFByb3BzVHlwZTxcbiAgUiBleHRlbmRzIE5leHRSb3V0ZXIgPSBOZXh0Um91dGVyLFxuICBQID0ge31cbj4gPSBBcHBJbml0aWFsUHJvcHMgJiB7XG4gIENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8TmV4dFBhZ2VDb250ZXh0LCBhbnksIFA+XG4gIHJvdXRlcjogUlxuICBfX05fU1NHPzogYm9vbGVhblxuICBfX05fU1NQPzogYm9vbGVhblxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudENvbnRleHQgPSBOZXh0UGFnZUNvbnRleHQgJiB7XG4gIHJlbmRlclBhZ2U6IFJlbmRlclBhZ2Vcbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRJbml0aWFsUHJvcHMgPSBSZW5kZXJQYWdlUmVzdWx0ICYge1xuICBzdHlsZXM/OiBSZWFjdC5SZWFjdEVsZW1lbnRbXSB8IFJlYWN0LlJlYWN0RnJhZ21lbnRcbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRQcm9wcyA9IERvY3VtZW50SW5pdGlhbFByb3BzICYge1xuICBfX05FWFRfREFUQV9fOiBORVhUX0RBVEFcbiAgZGFuZ2Vyb3VzQXNQYXRoOiBzdHJpbmdcbiAgZG9jQ29tcG9uZW50c1JlbmRlcmVkOiB7XG4gICAgSHRtbD86IGJvb2xlYW5cbiAgICBNYWluPzogYm9vbGVhblxuICAgIEhlYWQ/OiBib29sZWFuXG4gICAgTmV4dFNjcmlwdD86IGJvb2xlYW5cbiAgfVxuICBidWlsZE1hbmlmZXN0OiBCdWlsZE1hbmlmZXN0XG4gIGFtcFBhdGg6IHN0cmluZ1xuICBpbkFtcE1vZGU6IGJvb2xlYW5cbiAgaHlicmlkQW1wOiBib29sZWFuXG4gIGlzRGV2ZWxvcG1lbnQ6IGJvb2xlYW5cbiAgZHluYW1pY0ltcG9ydHM6IE1hbmlmZXN0SXRlbVtdXG4gIGFzc2V0UHJlZml4Pzogc3RyaW5nXG4gIGNhbm9uaWNhbEJhc2U6IHN0cmluZ1xuICBoZWFkVGFnczogYW55W11cbiAgdW5zdGFibGVfcnVudGltZUpTPzogZmFsc2VcbiAgdW5zdGFibGVfSnNQcmVsb2FkPzogZmFsc2VcbiAgZGV2T25seUNhY2hlQnVzdGVyUXVlcnlTdHJpbmc6IHN0cmluZ1xuICBzY3JpcHRMb2FkZXI6IHsgZGVmZXI/OiBzdHJpbmdbXTsgZWFnZXI/OiBhbnlbXSB9XG4gIGxvY2FsZT86IHN0cmluZ1xufVxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgcmVxdWVzdFxuICovXG5leHBvcnQgaW50ZXJmYWNlIE5leHRBcGlSZXF1ZXN0IGV4dGVuZHMgSW5jb21pbmdNZXNzYWdlIHtcbiAgLyoqXG4gICAqIE9iamVjdCBvZiBgcXVlcnlgIHZhbHVlcyBmcm9tIHVybFxuICAgKi9cbiAgcXVlcnk6IHtcbiAgICBba2V5OiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXVxuICB9XG4gIC8qKlxuICAgKiBPYmplY3Qgb2YgYGNvb2tpZXNgIGZyb20gaGVhZGVyXG4gICAqL1xuICBjb29raWVzOiB7XG4gICAgW2tleTogc3RyaW5nXTogc3RyaW5nXG4gIH1cblxuICBib2R5OiBhbnlcblxuICBlbnY6IEVudlxuXG4gIHByZXZpZXc/OiBib29sZWFuXG4gIC8qKlxuICAgKiBQcmV2aWV3IGRhdGEgc2V0IG9uIHRoZSByZXF1ZXN0LCBpZiBhbnlcbiAgICogKi9cbiAgcHJldmlld0RhdGE/OiBhbnlcbn1cblxuLyoqXG4gKiBTZW5kIGJvZHkgb2YgcmVzcG9uc2VcbiAqL1xudHlwZSBTZW5kPFQ+ID0gKGJvZHk6IFQpID0+IHZvaWRcblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIHJlc3BvbnNlXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRBcGlSZXNwb25zZTxUID0gYW55PiA9IFNlcnZlclJlc3BvbnNlICYge1xuICAvKipcbiAgICogU2VuZCBkYXRhIGBhbnlgIGRhdGEgaW4gcmVzcG9uc2VcbiAgICovXG4gIHNlbmQ6IFNlbmQ8VD5cbiAgLyoqXG4gICAqIFNlbmQgZGF0YSBganNvbmAgZGF0YSBpbiByZXNwb25zZVxuICAgKi9cbiAganNvbjogU2VuZDxUPlxuICBzdGF0dXM6IChzdGF0dXNDb2RlOiBudW1iZXIpID0+IE5leHRBcGlSZXNwb25zZTxUPlxuICByZWRpcmVjdCh1cmw6IHN0cmluZyk6IE5leHRBcGlSZXNwb25zZTxUPlxuICByZWRpcmVjdChzdGF0dXM6IG51bWJlciwgdXJsOiBzdHJpbmcpOiBOZXh0QXBpUmVzcG9uc2U8VD5cblxuICAvKipcbiAgICogU2V0IHByZXZpZXcgZGF0YSBmb3IgTmV4dC5qcycgcHJlcmVuZGVyIG1vZGVcbiAgICovXG4gIHNldFByZXZpZXdEYXRhOiAoXG4gICAgZGF0YTogb2JqZWN0IHwgc3RyaW5nLFxuICAgIG9wdGlvbnM/OiB7XG4gICAgICAvKipcbiAgICAgICAqIFNwZWNpZmllcyB0aGUgbnVtYmVyIChpbiBzZWNvbmRzKSBmb3IgdGhlIHByZXZpZXcgc2Vzc2lvbiB0byBsYXN0IGZvci5cbiAgICAgICAqIFRoZSBnaXZlbiBudW1iZXIgd2lsbCBiZSBjb252ZXJ0ZWQgdG8gYW4gaW50ZWdlciBieSByb3VuZGluZyBkb3duLlxuICAgICAgICogQnkgZGVmYXVsdCwgbm8gbWF4aW11bSBhZ2UgaXMgc2V0IGFuZCB0aGUgcHJldmlldyBzZXNzaW9uIGZpbmlzaGVzXG4gICAgICAgKiB3aGVuIHRoZSBjbGllbnQgc2h1dHMgZG93biAoYnJvd3NlciBpcyBjbG9zZWQpLlxuICAgICAgICovXG4gICAgICBtYXhBZ2U/OiBudW1iZXJcbiAgICB9XG4gICkgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG4gIGNsZWFyUHJldmlld0RhdGE6ICgpID0+IE5leHRBcGlSZXNwb25zZTxUPlxufVxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgaGFuZGxlclxuICovXG5leHBvcnQgdHlwZSBOZXh0QXBpSGFuZGxlcjxUID0gYW55PiA9IChcbiAgcmVxOiBOZXh0QXBpUmVxdWVzdCxcbiAgcmVzOiBOZXh0QXBpUmVzcG9uc2U8VD5cbikgPT4gdm9pZCB8IFByb21pc2U8dm9pZD5cblxuLyoqXG4gKiBVdGlsc1xuICovXG5leHBvcnQgZnVuY3Rpb24gZXhlY09uY2U8VCBleHRlbmRzICguLi5hcmdzOiBhbnlbXSkgPT4gUmV0dXJuVHlwZTxUPj4oXG4gIGZuOiBUXG4pOiBUIHtcbiAgbGV0IHVzZWQgPSBmYWxzZVxuICBsZXQgcmVzdWx0OiBSZXR1cm5UeXBlPFQ+XG5cbiAgcmV0dXJuICgoLi4uYXJnczogYW55W10pID0+IHtcbiAgICBpZiAoIXVzZWQpIHtcbiAgICAgIHVzZWQgPSB0cnVlXG4gICAgICByZXN1bHQgPSBmbiguLi5hcmdzKVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0XG4gIH0pIGFzIFRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldExvY2F0aW9uT3JpZ2luKCkge1xuICBjb25zdCB7IHByb3RvY29sLCBob3N0bmFtZSwgcG9ydCB9ID0gd2luZG93LmxvY2F0aW9uXG4gIHJldHVybiBgJHtwcm90b2NvbH0vLyR7aG9zdG5hbWV9JHtwb3J0ID8gJzonICsgcG9ydCA6ICcnfWBcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFVSTCgpIHtcbiAgY29uc3QgeyBocmVmIH0gPSB3aW5kb3cubG9jYXRpb25cbiAgY29uc3Qgb3JpZ2luID0gZ2V0TG9jYXRpb25PcmlnaW4oKVxuICByZXR1cm4gaHJlZi5zdWJzdHJpbmcob3JpZ2luLmxlbmd0aClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldERpc3BsYXlOYW1lPFA+KENvbXBvbmVudDogQ29tcG9uZW50VHlwZTxQPikge1xuICByZXR1cm4gdHlwZW9mIENvbXBvbmVudCA9PT0gJ3N0cmluZydcbiAgICA/IENvbXBvbmVudFxuICAgIDogQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IENvbXBvbmVudC5uYW1lIHx8ICdVbmtub3duJ1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNSZXNTZW50KHJlczogU2VydmVyUmVzcG9uc2UpIHtcbiAgcmV0dXJuIHJlcy5maW5pc2hlZCB8fCByZXMuaGVhZGVyc1NlbnRcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxvYWRHZXRJbml0aWFsUHJvcHM8XG4gIEMgZXh0ZW5kcyBCYXNlQ29udGV4dCxcbiAgSVAgPSB7fSxcbiAgUCA9IHt9XG4+KEFwcDogTmV4dENvbXBvbmVudFR5cGU8QywgSVAsIFA+LCBjdHg6IEMpOiBQcm9taXNlPElQPiB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKEFwcC5wcm90b3R5cGU/LmdldEluaXRpYWxQcm9wcykge1xuICAgICAgY29uc3QgbWVzc2FnZSA9IGBcIiR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICAgIEFwcFxuICAgICAgKX0uZ2V0SW5pdGlhbFByb3BzKClcIiBpcyBkZWZpbmVkIGFzIGFuIGluc3RhbmNlIG1ldGhvZCAtIHZpc2l0IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2dldC1pbml0aWFsLXByb3BzLWFzLWFuLWluc3RhbmNlLW1ldGhvZCBmb3IgbW9yZSBpbmZvcm1hdGlvbi5gXG4gICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgICB9XG4gIH1cbiAgLy8gd2hlbiBjYWxsZWQgZnJvbSBfYXBwIGBjdHhgIGlzIG5lc3RlZCBpbiBgY3R4YFxuICBjb25zdCByZXMgPSBjdHgucmVzIHx8IChjdHguY3R4ICYmIGN0eC5jdHgucmVzKVxuXG4gIGlmICghQXBwLmdldEluaXRpYWxQcm9wcykge1xuICAgIGlmIChjdHguY3R4ICYmIGN0eC5Db21wb25lbnQpIHtcbiAgICAgIC8vIEB0cy1pZ25vcmUgcGFnZVByb3BzIGRlZmF1bHRcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHBhZ2VQcm9wczogYXdhaXQgbG9hZEdldEluaXRpYWxQcm9wcyhjdHguQ29tcG9uZW50LCBjdHguY3R4KSxcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHt9IGFzIElQXG4gIH1cblxuICBjb25zdCBwcm9wcyA9IGF3YWl0IEFwcC5nZXRJbml0aWFsUHJvcHMoY3R4KVxuXG4gIGlmIChyZXMgJiYgaXNSZXNTZW50KHJlcykpIHtcbiAgICByZXR1cm4gcHJvcHNcbiAgfVxuXG4gIGlmICghcHJvcHMpIHtcbiAgICBjb25zdCBtZXNzYWdlID0gYFwiJHtnZXREaXNwbGF5TmFtZShcbiAgICAgIEFwcFxuICAgICl9LmdldEluaXRpYWxQcm9wcygpXCIgc2hvdWxkIHJlc29sdmUgdG8gYW4gb2JqZWN0LiBCdXQgZm91bmQgXCIke3Byb3BzfVwiIGluc3RlYWQuYFxuICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICB9XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoT2JqZWN0LmtleXMocHJvcHMpLmxlbmd0aCA9PT0gMCAmJiAhY3R4LmN0eCkge1xuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICBgJHtnZXREaXNwbGF5TmFtZShcbiAgICAgICAgICBBcHBcbiAgICAgICAgKX0gcmV0dXJuZWQgYW4gZW1wdHkgb2JqZWN0IGZyb20gXFxgZ2V0SW5pdGlhbFByb3BzXFxgLiBUaGlzIGRlLW9wdGltaXplcyBhbmQgcHJldmVudHMgYXV0b21hdGljIHN0YXRpYyBvcHRpbWl6YXRpb24uIGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2VtcHR5LW9iamVjdC1nZXRJbml0aWFsUHJvcHNgXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHByb3BzXG59XG5cbmV4cG9ydCBjb25zdCB1cmxPYmplY3RLZXlzID0gW1xuICAnYXV0aCcsXG4gICdoYXNoJyxcbiAgJ2hvc3QnLFxuICAnaG9zdG5hbWUnLFxuICAnaHJlZicsXG4gICdwYXRoJyxcbiAgJ3BhdGhuYW1lJyxcbiAgJ3BvcnQnLFxuICAncHJvdG9jb2wnLFxuICAncXVlcnknLFxuICAnc2VhcmNoJyxcbiAgJ3NsYXNoZXMnLFxuXVxuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0V2l0aFZhbGlkYXRpb24odXJsOiBVcmxPYmplY3QpOiBzdHJpbmcge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICBpZiAodXJsICE9PSBudWxsICYmIHR5cGVvZiB1cmwgPT09ICdvYmplY3QnKSB7XG4gICAgICBPYmplY3Qua2V5cyh1cmwpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICBpZiAodXJsT2JqZWN0S2V5cy5pbmRleE9mKGtleSkgPT09IC0xKSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgYFVua25vd24ga2V5IHBhc3NlZCB2aWEgdXJsT2JqZWN0IGludG8gdXJsLmZvcm1hdDogJHtrZXl9YFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZm9ybWF0VXJsKHVybClcbn1cblxuZXhwb3J0IGNvbnN0IFNQID0gdHlwZW9mIHBlcmZvcm1hbmNlICE9PSAndW5kZWZpbmVkJ1xuZXhwb3J0IGNvbnN0IFNUID1cbiAgU1AgJiZcbiAgdHlwZW9mIHBlcmZvcm1hbmNlLm1hcmsgPT09ICdmdW5jdGlvbicgJiZcbiAgdHlwZW9mIHBlcmZvcm1hbmNlLm1lYXN1cmUgPT09ICdmdW5jdGlvbidcbiIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMubm9ybWFsaXplUGF0aFNlcD1ub3JtYWxpemVQYXRoU2VwO2V4cG9ydHMuZGVub3JtYWxpemVQYWdlUGF0aD1kZW5vcm1hbGl6ZVBhZ2VQYXRoO2Z1bmN0aW9uIG5vcm1hbGl6ZVBhdGhTZXAocGF0aCl7cmV0dXJuIHBhdGgucmVwbGFjZSgvXFxcXC9nLCcvJyk7fWZ1bmN0aW9uIGRlbm9ybWFsaXplUGFnZVBhdGgocGFnZSl7cGFnZT1ub3JtYWxpemVQYXRoU2VwKHBhZ2UpO2lmKHBhZ2Uuc3RhcnRzV2l0aCgnL2luZGV4LycpKXtwYWdlPXBhZ2Uuc2xpY2UoNik7fWVsc2UgaWYocGFnZT09PScvaW5kZXgnKXtwYWdlPScvJzt9cmV0dXJuIHBhZ2U7fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGVub3JtYWxpemUtcGFnZS1wYXRoLmpzLm1hcCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L2NsaWVudC9saW5rJylcbiIsImZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgXCJkZWZhdWx0XCI6IG9ialxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ7IiwidmFyIF90eXBlb2YgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2ZcIik7XG5cbmZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgaWYgKHR5cGVvZiBXZWFrTWFwICE9PSBcImZ1bmN0aW9uXCIpIHJldHVybiBudWxsO1xuICB2YXIgY2FjaGUgPSBuZXcgV2Vha01hcCgpO1xuXG4gIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSA9IGZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgICByZXR1cm4gY2FjaGU7XG4gIH07XG5cbiAgcmV0dXJuIGNhY2hlO1xufVxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHtcbiAgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkge1xuICAgIHJldHVybiBvYmo7XG4gIH1cblxuICBpZiAob2JqID09PSBudWxsIHx8IF90eXBlb2Yob2JqKSAhPT0gXCJvYmplY3RcIiAmJiB0eXBlb2Ygb2JqICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgXCJkZWZhdWx0XCI6IG9ialxuICAgIH07XG4gIH1cblxuICB2YXIgY2FjaGUgPSBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKTtcblxuICBpZiAoY2FjaGUgJiYgY2FjaGUuaGFzKG9iaikpIHtcbiAgICByZXR1cm4gY2FjaGUuZ2V0KG9iaik7XG4gIH1cblxuICB2YXIgbmV3T2JqID0ge307XG4gIHZhciBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkgJiYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxuICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHtcbiAgICAgIHZhciBkZXNjID0gaGFzUHJvcGVydHlEZXNjcmlwdG9yID8gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSkgOiBudWxsO1xuXG4gICAgICBpZiAoZGVzYyAmJiAoZGVzYy5nZXQgfHwgZGVzYy5zZXQpKSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdPYmosIGtleSwgZGVzYyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuZXdPYmpba2V5XSA9IG9ialtrZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG5ld09ialtcImRlZmF1bHRcIl0gPSBvYmo7XG5cbiAgaWYgKGNhY2hlKSB7XG4gICAgY2FjaGUuc2V0KG9iaiwgbmV3T2JqKTtcbiAgfVxuXG4gIHJldHVybiBuZXdPYmo7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQ7IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF90eXBlb2Yob2JqKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mOyIsIi8qKiBAbGljZW5zZSBSZWFjdCB2MTYuMTMuMVxuICogcmVhY3QtaXMuZGV2ZWxvcG1lbnQuanNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cblxuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gIChmdW5jdGlvbigpIHtcbid1c2Ugc3RyaWN0JztcblxuLy8gVGhlIFN5bWJvbCB1c2VkIHRvIHRhZyB0aGUgUmVhY3RFbGVtZW50LWxpa2UgdHlwZXMuIElmIHRoZXJlIGlzIG5vIG5hdGl2ZSBTeW1ib2xcbi8vIG5vciBwb2x5ZmlsbCwgdGhlbiBhIHBsYWluIG51bWJlciBpcyB1c2VkIGZvciBwZXJmb3JtYW5jZS5cbnZhciBoYXNTeW1ib2wgPSB0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIFN5bWJvbC5mb3I7XG52YXIgUkVBQ1RfRUxFTUVOVF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuZWxlbWVudCcpIDogMHhlYWM3O1xudmFyIFJFQUNUX1BPUlRBTF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QucG9ydGFsJykgOiAweGVhY2E7XG52YXIgUkVBQ1RfRlJBR01FTlRfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmZyYWdtZW50JykgOiAweGVhY2I7XG52YXIgUkVBQ1RfU1RSSUNUX01PREVfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnN0cmljdF9tb2RlJykgOiAweGVhY2M7XG52YXIgUkVBQ1RfUFJPRklMRVJfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnByb2ZpbGVyJykgOiAweGVhZDI7XG52YXIgUkVBQ1RfUFJPVklERVJfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnByb3ZpZGVyJykgOiAweGVhY2Q7XG52YXIgUkVBQ1RfQ09OVEVYVF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuY29udGV4dCcpIDogMHhlYWNlOyAvLyBUT0RPOiBXZSBkb24ndCB1c2UgQXN5bmNNb2RlIG9yIENvbmN1cnJlbnRNb2RlIGFueW1vcmUuIFRoZXkgd2VyZSB0ZW1wb3Jhcnlcbi8vICh1bnN0YWJsZSkgQVBJcyB0aGF0IGhhdmUgYmVlbiByZW1vdmVkLiBDYW4gd2UgcmVtb3ZlIHRoZSBzeW1ib2xzP1xuXG52YXIgUkVBQ1RfQVNZTkNfTU9ERV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuYXN5bmNfbW9kZScpIDogMHhlYWNmO1xudmFyIFJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuY29uY3VycmVudF9tb2RlJykgOiAweGVhY2Y7XG52YXIgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmZvcndhcmRfcmVmJykgOiAweGVhZDA7XG52YXIgUkVBQ1RfU1VTUEVOU0VfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnN1c3BlbnNlJykgOiAweGVhZDE7XG52YXIgUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3Quc3VzcGVuc2VfbGlzdCcpIDogMHhlYWQ4O1xudmFyIFJFQUNUX01FTU9fVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0Lm1lbW8nKSA6IDB4ZWFkMztcbnZhciBSRUFDVF9MQVpZX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5sYXp5JykgOiAweGVhZDQ7XG52YXIgUkVBQ1RfQkxPQ0tfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmJsb2NrJykgOiAweGVhZDk7XG52YXIgUkVBQ1RfRlVOREFNRU5UQUxfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmZ1bmRhbWVudGFsJykgOiAweGVhZDU7XG52YXIgUkVBQ1RfUkVTUE9OREVSX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5yZXNwb25kZXInKSA6IDB4ZWFkNjtcbnZhciBSRUFDVF9TQ09QRV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3Quc2NvcGUnKSA6IDB4ZWFkNztcblxuZnVuY3Rpb24gaXNWYWxpZEVsZW1lbnRUeXBlKHR5cGUpIHtcbiAgcmV0dXJuIHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJyB8fCB0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJyB8fCAvLyBOb3RlOiBpdHMgdHlwZW9mIG1pZ2h0IGJlIG90aGVyIHRoYW4gJ3N5bWJvbCcgb3IgJ251bWJlcicgaWYgaXQncyBhIHBvbHlmaWxsLlxuICB0eXBlID09PSBSRUFDVF9GUkFHTUVOVF9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1BST0ZJTEVSX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1RSSUNUX01PREVfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9TVVNQRU5TRV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRSB8fCB0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcgJiYgdHlwZSAhPT0gbnVsbCAmJiAodHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTEFaWV9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX01FTU9fVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9QUk9WSURFUl9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0NPTlRFWFRfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0ZVTkRBTUVOVEFMX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfUkVTUE9OREVSX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfU0NPUEVfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9CTE9DS19UWVBFKTtcbn1cblxuZnVuY3Rpb24gdHlwZU9mKG9iamVjdCkge1xuICBpZiAodHlwZW9mIG9iamVjdCA9PT0gJ29iamVjdCcgJiYgb2JqZWN0ICE9PSBudWxsKSB7XG4gICAgdmFyICQkdHlwZW9mID0gb2JqZWN0LiQkdHlwZW9mO1xuXG4gICAgc3dpdGNoICgkJHR5cGVvZikge1xuICAgICAgY2FzZSBSRUFDVF9FTEVNRU5UX1RZUEU6XG4gICAgICAgIHZhciB0eXBlID0gb2JqZWN0LnR5cGU7XG5cbiAgICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgICAgY2FzZSBSRUFDVF9BU1lOQ19NT0RFX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9DT05DVVJSRU5UX01PREVfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX0ZSQUdNRU5UX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9QUk9GSUxFUl9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfU1RSSUNUX01PREVfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX1NVU1BFTlNFX1RZUEU6XG4gICAgICAgICAgICByZXR1cm4gdHlwZTtcblxuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICB2YXIgJCR0eXBlb2ZUeXBlID0gdHlwZSAmJiB0eXBlLiQkdHlwZW9mO1xuXG4gICAgICAgICAgICBzd2l0Y2ggKCQkdHlwZW9mVHlwZSkge1xuICAgICAgICAgICAgICBjYXNlIFJFQUNUX0NPTlRFWFRfVFlQRTpcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFOlxuICAgICAgICAgICAgICBjYXNlIFJFQUNUX0xBWllfVFlQRTpcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9NRU1PX1RZUEU6XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfUFJPVklERVJfVFlQRTpcbiAgICAgICAgICAgICAgICByZXR1cm4gJCR0eXBlb2ZUeXBlO1xuXG4gICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuICQkdHlwZW9mO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgICAgY2FzZSBSRUFDVF9QT1JUQUxfVFlQRTpcbiAgICAgICAgcmV0dXJuICQkdHlwZW9mO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB1bmRlZmluZWQ7XG59IC8vIEFzeW5jTW9kZSBpcyBkZXByZWNhdGVkIGFsb25nIHdpdGggaXNBc3luY01vZGVcblxudmFyIEFzeW5jTW9kZSA9IFJFQUNUX0FTWU5DX01PREVfVFlQRTtcbnZhciBDb25jdXJyZW50TW9kZSA9IFJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFO1xudmFyIENvbnRleHRDb25zdW1lciA9IFJFQUNUX0NPTlRFWFRfVFlQRTtcbnZhciBDb250ZXh0UHJvdmlkZXIgPSBSRUFDVF9QUk9WSURFUl9UWVBFO1xudmFyIEVsZW1lbnQgPSBSRUFDVF9FTEVNRU5UX1RZUEU7XG52YXIgRm9yd2FyZFJlZiA9IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU7XG52YXIgRnJhZ21lbnQgPSBSRUFDVF9GUkFHTUVOVF9UWVBFO1xudmFyIExhenkgPSBSRUFDVF9MQVpZX1RZUEU7XG52YXIgTWVtbyA9IFJFQUNUX01FTU9fVFlQRTtcbnZhciBQb3J0YWwgPSBSRUFDVF9QT1JUQUxfVFlQRTtcbnZhciBQcm9maWxlciA9IFJFQUNUX1BST0ZJTEVSX1RZUEU7XG52YXIgU3RyaWN0TW9kZSA9IFJFQUNUX1NUUklDVF9NT0RFX1RZUEU7XG52YXIgU3VzcGVuc2UgPSBSRUFDVF9TVVNQRU5TRV9UWVBFO1xudmFyIGhhc1dhcm5lZEFib3V0RGVwcmVjYXRlZElzQXN5bmNNb2RlID0gZmFsc2U7IC8vIEFzeW5jTW9kZSBzaG91bGQgYmUgZGVwcmVjYXRlZFxuXG5mdW5jdGlvbiBpc0FzeW5jTW9kZShvYmplY3QpIHtcbiAge1xuICAgIGlmICghaGFzV2FybmVkQWJvdXREZXByZWNhdGVkSXNBc3luY01vZGUpIHtcbiAgICAgIGhhc1dhcm5lZEFib3V0RGVwcmVjYXRlZElzQXN5bmNNb2RlID0gdHJ1ZTsgLy8gVXNpbmcgY29uc29sZVsnd2FybiddIHRvIGV2YWRlIEJhYmVsIGFuZCBFU0xpbnRcblxuICAgICAgY29uc29sZVsnd2FybiddKCdUaGUgUmVhY3RJcy5pc0FzeW5jTW9kZSgpIGFsaWFzIGhhcyBiZWVuIGRlcHJlY2F0ZWQsICcgKyAnYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiBSZWFjdCAxNysuIFVwZGF0ZSB5b3VyIGNvZGUgdG8gdXNlICcgKyAnUmVhY3RJcy5pc0NvbmN1cnJlbnRNb2RlKCkgaW5zdGVhZC4gSXQgaGFzIHRoZSBleGFjdCBzYW1lIEFQSS4nKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gaXNDb25jdXJyZW50TW9kZShvYmplY3QpIHx8IHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9BU1lOQ19NT0RFX1RZUEU7XG59XG5mdW5jdGlvbiBpc0NvbmN1cnJlbnRNb2RlKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFO1xufVxuZnVuY3Rpb24gaXNDb250ZXh0Q29uc3VtZXIob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfQ09OVEVYVF9UWVBFO1xufVxuZnVuY3Rpb24gaXNDb250ZXh0UHJvdmlkZXIob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfUFJPVklERVJfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzRWxlbWVudChvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVvZiBvYmplY3QgPT09ICdvYmplY3QnICYmIG9iamVjdCAhPT0gbnVsbCAmJiBvYmplY3QuJCR0eXBlb2YgPT09IFJFQUNUX0VMRU1FTlRfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzRm9yd2FyZFJlZihvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFO1xufVxuZnVuY3Rpb24gaXNGcmFnbWVudChvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9GUkFHTUVOVF9UWVBFO1xufVxuZnVuY3Rpb24gaXNMYXp5KG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0xBWllfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzTWVtbyhvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9NRU1PX1RZUEU7XG59XG5mdW5jdGlvbiBpc1BvcnRhbChvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9QT1JUQUxfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzUHJvZmlsZXIob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfUFJPRklMRVJfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzU3RyaWN0TW9kZShvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFO1xufVxuZnVuY3Rpb24gaXNTdXNwZW5zZShvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9TVVNQRU5TRV9UWVBFO1xufVxuXG5leHBvcnRzLkFzeW5jTW9kZSA9IEFzeW5jTW9kZTtcbmV4cG9ydHMuQ29uY3VycmVudE1vZGUgPSBDb25jdXJyZW50TW9kZTtcbmV4cG9ydHMuQ29udGV4dENvbnN1bWVyID0gQ29udGV4dENvbnN1bWVyO1xuZXhwb3J0cy5Db250ZXh0UHJvdmlkZXIgPSBDb250ZXh0UHJvdmlkZXI7XG5leHBvcnRzLkVsZW1lbnQgPSBFbGVtZW50O1xuZXhwb3J0cy5Gb3J3YXJkUmVmID0gRm9yd2FyZFJlZjtcbmV4cG9ydHMuRnJhZ21lbnQgPSBGcmFnbWVudDtcbmV4cG9ydHMuTGF6eSA9IExhenk7XG5leHBvcnRzLk1lbW8gPSBNZW1vO1xuZXhwb3J0cy5Qb3J0YWwgPSBQb3J0YWw7XG5leHBvcnRzLlByb2ZpbGVyID0gUHJvZmlsZXI7XG5leHBvcnRzLlN0cmljdE1vZGUgPSBTdHJpY3RNb2RlO1xuZXhwb3J0cy5TdXNwZW5zZSA9IFN1c3BlbnNlO1xuZXhwb3J0cy5pc0FzeW5jTW9kZSA9IGlzQXN5bmNNb2RlO1xuZXhwb3J0cy5pc0NvbmN1cnJlbnRNb2RlID0gaXNDb25jdXJyZW50TW9kZTtcbmV4cG9ydHMuaXNDb250ZXh0Q29uc3VtZXIgPSBpc0NvbnRleHRDb25zdW1lcjtcbmV4cG9ydHMuaXNDb250ZXh0UHJvdmlkZXIgPSBpc0NvbnRleHRQcm92aWRlcjtcbmV4cG9ydHMuaXNFbGVtZW50ID0gaXNFbGVtZW50O1xuZXhwb3J0cy5pc0ZvcndhcmRSZWYgPSBpc0ZvcndhcmRSZWY7XG5leHBvcnRzLmlzRnJhZ21lbnQgPSBpc0ZyYWdtZW50O1xuZXhwb3J0cy5pc0xhenkgPSBpc0xhenk7XG5leHBvcnRzLmlzTWVtbyA9IGlzTWVtbztcbmV4cG9ydHMuaXNQb3J0YWwgPSBpc1BvcnRhbDtcbmV4cG9ydHMuaXNQcm9maWxlciA9IGlzUHJvZmlsZXI7XG5leHBvcnRzLmlzU3RyaWN0TW9kZSA9IGlzU3RyaWN0TW9kZTtcbmV4cG9ydHMuaXNTdXNwZW5zZSA9IGlzU3VzcGVuc2U7XG5leHBvcnRzLmlzVmFsaWRFbGVtZW50VHlwZSA9IGlzVmFsaWRFbGVtZW50VHlwZTtcbmV4cG9ydHMudHlwZU9mID0gdHlwZU9mO1xuICB9KSgpO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3JlYWN0LWlzLnByb2R1Y3Rpb24ubWluLmpzJyk7XG59IGVsc2Uge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3JlYWN0LWlzLmRldmVsb3BtZW50LmpzJyk7XG59XG4iLCJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge0xlZnRDYXRlZ29yaWVzU2lkZX0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9MZWZ0Q2F0ZWdvcmllc1NpZGUnO1xyXG5pbXBvcnQge01haW5MYXlvdXR9IGZyb20gJy4uLy4uL2xheW91dHMvTWFpbkxheW91dCc7XHJcbmltcG9ydCB7RnVsbFBvc3R9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvRnVsbFBvc3QnO1xyXG5pbXBvcnQge2dldFBvc3RDb21tZW50cywgc2hvd1Bvc3R9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9hcGkvUG9zdEFwaVwiO1xyXG5pbXBvcnQgVGV4dEZpZWxkIGZyb20gJ0BtdWkvbWF0ZXJpYWwvVGV4dEZpZWxkJztcclxuaW1wb3J0IHtBZGRDb21tZW50QmxvY2t9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0FkZENvbW1lbnRCbG9ja1wiO1xyXG5pbXBvcnQge0NvbW1lbnRBcGl9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9hcGkvQ29tbWVudEFwaVwiO1xyXG5pbXBvcnQge0NvbW1lbnRMaXN0fSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9Db21tZW50TGlzdFwiO1xyXG5pbXBvcnQge3NldExpa2V9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9hcGkvTGlrZUFwaVwiO1xyXG5pbXBvcnQge1NpZGVCbG9ja30gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvU2lkZUJsb2NrXCI7XHJcbmltcG9ydCB7TWVudUxpc3R9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL01lbnVMaXN0XCI7XHJcbmltcG9ydCB7VGFnc30gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvVGFnc1wiO1xyXG5pbXBvcnQge0NvbW1lbnQsIFRoZW1lfSBmcm9tIFwiLi4vLi4vaW50ZXJmYWNlc1wiO1xyXG5pbXBvcnQge3VzZVNlbGVjdG9yfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHtzZWxlY3RDYXRlZ29yaWVzU3RhdGUsIHNlbGVjdFRoZW1lc1N0YXRlfSBmcm9tIFwiLi4vLi4vcmVkdXgvZGlyZWN0b3J5L2RpcmVjdG9yeS5zZWxlY3RvclwiO1xyXG5pbXBvcnQge3VzZUFsbE1RfSBmcm9tIFwiLi4vLi4vdXRpbHMvdXNlQWxsTVFcIjtcclxuaW1wb3J0IHtlY2hvfSBmcm9tIFwiLi4vLi4vdXRpbHMvZWNob1wiO1xyXG5pbXBvcnQge3VzZUFsZXJ0fSBmcm9tIFwiLi4vLi4vaG9va3MvdXNlQWxlcnRcIjtcclxuaW1wb3J0IHtzZWxlY3RVc2VyU3RhdGV9IGZyb20gXCIuLi8uLi9yZWR1eC91c2VyL3VzZXIuc2VsZWN0b3JcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBQb3N0Q29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQoe30pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUG9zdCh7cG9zdCwgc2VydmVyU2lkZUNvbW1lbnRzfSkge1xyXG4gICAgY29uc3QgbXEgPSB1c2VBbGxNUSgpO1xyXG4gICAgY29uc3QgW3NlbGVjdGVkVGhlbWVzLCBzZXRTZWxlY3RlZFRoZW1lc10gPSB1c2VTdGF0ZTxUaGVtZVtdPihbXSk7XHJcbiAgICBjb25zdCBbY29tbWVudHMsIHNldENvbW1lbnRzXSA9IHVzZVN0YXRlKHNlcnZlclNpZGVDb21tZW50cylcclxuICAgIGNvbnN0IHRoZW1lcyA9IHVzZVNlbGVjdG9yKHNlbGVjdFRoZW1lc1N0YXRlKTtcclxuICAgIGNvbnN0IGNhdGVnb3JpZXMgPSB1c2VTZWxlY3RvcihzZWxlY3RDYXRlZ29yaWVzU3RhdGUpO1xyXG4gICAgY29uc3Qge29wZW5BbGVydH0gPSB1c2VBbGVydCgpO1xyXG4gICAgY29uc3QgdXNlciA9IHVzZVNlbGVjdG9yKHNlbGVjdFVzZXJTdGF0ZSlbJ2RhdGEnXTtcclxuICAgIGNvbnN0IGhhbmRsZVNlbGVjdFRoZW1lID0gYXN5bmMgKHQ6IFRoZW1lKSA9PiB7XHJcbiAgICAgICAgc2V0U2VsZWN0ZWRUaGVtZXMoKCkgPT4gWy4uLnNlbGVjdGVkVGhlbWVzLCB0XSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgb25BZGRDb21tZW50ID0gYXN5bmMgKHRleHQ6IHN0cmluZywgdG9Vc2VySWQ/OiBudW1iZXIsIHBhcmVudElkPzogbnVtYmVyLCBjb21tZW50SWQ/OiBudW1iZXIpID0+IHtcclxuICAgICAgICBhd2FpdCBDb21tZW50QXBpLnNhdmUocG9zdC5pZCwgdGV4dCwgdG9Vc2VySWQsIHBhcmVudElkLCBjb21tZW50SWQpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZUNvbW1lbnRTZXRMaWtlID0gYXN5bmMgKGlkOiBudW1iZXIsIGxpa2U/OiAnbGlrZScgfCAnZGlzbGlrZScpID0+IHtcclxuICAgICAgICBhd2FpdCBzZXRMaWtlKGlkLCAnY29tbWVudCcsIGxpa2UpXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaGFuZGxlU2V0TGlrZSA9IGFzeW5jIChwb3N0SWQ6IG51bWJlciwgbGlrZT86ICdsaWtlJyB8ICdkaXNsaWtlJykgPT4ge1xyXG4gICAgICAgIGF3YWl0IHNldExpa2UocG9zdElkLCAncG9zdCcsIGxpa2UpXHJcbiAgICB9XHJcblxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgICAgICBlY2hvKCkuY2hhbm5lbCgnaW5ndGVybmV0LWNvbW1lbnRzXycgKyBwb3N0Py5pZCkubGlzdGVuKCcubmV3LWNvbW1lbnQnLCAoY29tbWVudDogQ29tbWVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGNvbW1lbnQudXNlci5pZCAhPT0gdXNlcj8uaWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBvcGVuQWxlcnQoJ9Cf0L7Rj9Cy0LjQu9GB0Y8g0L3QvtCy0YvQuSDQutC+0LzQvNC10L3RgtCw0YDQuNC5IScpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBzZXRDb21tZW50cyghY29tbWVudC5wYXJlbnRfaWQgPyBbY29tbWVudCwgLi4uY29tbWVudHNdIDogY29tbWVudHMubWFwKGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjb21tZW50LnBhcmVudF9pZCA9PT0gaXRlbS5pZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4uaXRlbSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbW1lbnRzOiBbLi4uY29tbWVudC5jb21tZW50cywgY29tbWVudF1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW07XHJcblxyXG4gICAgICAgICAgICAgICAgfSkpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIGVjaG8oKS5jaGFubmVsKCdpbmd0ZXJuZXQtY29tbWVudHNfJyArIHBvc3Q/LmlkKS5saXN0ZW4oJy51cGRhdGVkLWNvbW1lbnQnLCAoaXRlbTogQ29tbWVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHVzZXI/LmlkICE9PSBpdGVtLnVzZXIuaWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBvcGVuQWxlcnQoYNCf0L7Qu9GM0LfQvtCy0LDRgtC10LvRjCAke2l0ZW0udXNlci5uYW1lfSDQuNC30LzQtdC90LjQuyDRgdCy0L7QuSDQutC+0LzQvNC10L3RgtCw0YDQuNC5IWApXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBzZXRDb21tZW50cyhjb21tZW50cy5tYXAoY29tbWVudCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvbW1lbnQuaWQgPT0gaXRlbS5pZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gaXRlbVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNvbW1lbnQ7XHJcbiAgICAgICAgICAgICAgICB9KSlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgICAgIGVjaG8oKS5sZWF2ZSgnbGFyYXZlbF9kYXRhYmFzZV9jb21tZW50c18nICsgcG9zdD8uaWQpXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxtYWluPlxyXG4gICAgICAgICAgICA8TWFpbkxheW91dD5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid3JhcHBlci1jZW50ZXJcIj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgeyFtcS5pc1hTICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9eydsZWZ0LXNpZGUtbm8tbWFyZ2luJ30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2lkZUJsb2NrPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51TGlzdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtcz17W1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICfQn9C+0L/Rg9C70Y/RgNC90L7QtScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiAnL3BvcHVsYXInLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb246ICcvZmlyZS5zdmcnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzQWN0aXZlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhc01vcmU6IHRydWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bmFtZTogJ9Cd0L7QstC+0LUnLCB1cmw6ICcvbmV3JywgaWNvbjogJy9uZXdzLnN2Zyd9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1NpZGVCbG9jaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTaWRlQmxvY2sgbmFtZT1cItCa0LDRgtC10LPQvtGA0LjQuFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51TGlzdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtcz17Y2F0ZWdvcmllcy5tYXAoYyA9PiAoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogYy5uYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiBgL3RhZ3MvJHtjLnNsdWd9YCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb246IGAvJHtjLnNsdWd9LnBuZ2BcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1NpZGVCbG9jaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTaWRlQmxvY2sgbmFtZT1cItCi0LXQvNGLXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhZ3NcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbXM9e3RoZW1lc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlU2VsZWN0PXtoYW5kbGVTZWxlY3RUaGVtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRJdGVtcz17c2VsZWN0ZWRUaGVtZXN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvU2lkZUJsb2NrPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZ1bGxQb3N0IHBvc3Q9e3Bvc3R9IG9uU2V0TGlrZT17aGFuZGxlU2V0TGlrZX0vPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3Bvc3Quc3RhdHVzID09PSAnYWN0aXZlJyAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J2NvbW1lbnRzJ30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFkZENvbW1lbnRCbG9jayBvbkFkZENvbW1lbnQ9e29uQWRkQ29tbWVudH0vPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7bWFyZ2luVG9wOiAxNX19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29tbWVudExpc3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uU2V0TGlrZT17aGFuZGxlQ29tbWVudFNldExpa2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21tZW50cz17Y29tbWVudHN9IG9uUmVwbHlDb21tZW50PXtvbkFkZENvbW1lbnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvTWFpbkxheW91dD5cclxuICAgICAgICA8L21haW4+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKGN0eCkge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBzaG93UG9zdChjdHgucXVlcnkuc2x1ZywgY3R4LnJlcS5jb29raWVzPy5hdXRoX3Rva2VuKTtcclxuICAgIGNvbnN0IHJlc3BvbnNlQ29tbWVudHMgPSBhd2FpdCBnZXRQb3N0Q29tbWVudHMocmVzcG9uc2UuZGF0YS5pZCwgY3R4LnJlcS5jb29raWVzLmF1dGhfdG9rZW4pO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBwcm9wczoge1xyXG4gICAgICAgICAgICBwb3N0OiByZXNwb25zZS5kYXRhLFxyXG4gICAgICAgICAgICBzZXJ2ZXJTaWRlQ29tbWVudHM6IHJlc3BvbnNlQ29tbWVudHNcclxuICAgICAgICB9LFxyXG4gICAgfVxyXG59XHJcblxyXG4iLCJpbXBvcnQge0RpcmVjdG9yeVN0YXRlLCBSb290U3RhdGUsIFVzZXJTdGF0ZX0gZnJvbSBcIi4uL3R5cGVzXCI7XHJcblxyXG5leHBvcnQgY29uc3Qgc2VsZWN0VGhlbWVzU3RhdGUgPSAoc3RhdGU6IFJvb3RTdGF0ZSk6IERpcmVjdG9yeVN0YXRlWydkYXRhJ11bJ3RoZW1lcyddID0+IHtcclxuICAgIHJldHVybiBzdGF0ZS5kaXJlY3RvcnkuZGF0YS50aGVtZXNcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBzZWxlY3RDYXRlZ29yaWVzU3RhdGUgPSAoc3RhdGU6IFJvb3RTdGF0ZSk6IERpcmVjdG9yeVN0YXRlWydkYXRhJ11bJ2NhdGVnb3JpZXMnXSA9PiB7XHJcbiAgICByZXR1cm4gc3RhdGUuZGlyZWN0b3J5LmRhdGEuY2F0ZWdvcmllc1xyXG59O1xyXG4iLCJpbXBvcnQge1Jvb3RTdGF0ZSwgVXNlclN0YXRlfSBmcm9tIFwiLi4vdHlwZXNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBzZWxlY3RVc2VyU3RhdGUgPSAoc3RhdGU6IFJvb3RTdGF0ZSk6IFVzZXJTdGF0ZSA9PiB7XHJcbiAgICByZXR1cm4gc3RhdGUudXNlclxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHNlbGVjdFVzZXJOb3RpZmljYXRpb25zID0gKHN0YXRlOiBSb290U3RhdGUpOiBVc2VyU3RhdGVbJ25vdGlmaWNhdGlvbnMnXSA9PiB7XHJcbiAgICByZXR1cm4gc3RhdGUudXNlci5ub3RpZmljYXRpb25zO1xyXG59O1xyXG4iLCJpbXBvcnQgYXhpb3MgZnJvbSAnLi4vLi4vY29yZS9heGlvcyc7XHJcbmltcG9ydCB7Q29tbWVudH0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlcyc7XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IENvbW1lbnRBcGkgPSB7XHJcbiAgICBnZXQ6IGFzeW5jIChwYXJhbXMgPSB7fSk6IFByb21pc2U8Q29tbWVudFtdPiA9PiB7XHJcbiAgICAgICAgY29uc3Qge2RhdGF9ID0gYXdhaXQgYXhpb3MuZ2V0KCcvYXBpL2NvbW1lbnRzJywge1xyXG4gICAgICAgICAgcGFyYW1zXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgfSxcclxuXHJcbiAgICBzYXZlOiBhc3luYyAocG9zdElkOiBudW1iZXIsIHRleHQ6IHN0cmluZywgdG9Vc2VySWQ/OiBudW1iZXIsIHBhcmVudENvbW1lbnRJZD86IG51bWJlciwgY29tbWVudElkPzogbnVtYmVyKSA9PiB7XHJcbiAgICAgICAgY29uc3QgYm9keSA9IHtcclxuICAgICAgICAgICAgcG9zdF9pZDogcG9zdElkLFxyXG4gICAgICAgICAgICB0ZXh0LFxyXG4gICAgICAgICAgICB1c2VyX3JlcGx5X2lkOiB0b1VzZXJJZCxcclxuICAgICAgICAgICAgcGFyZW50X2lkOiBwYXJlbnRDb21tZW50SWRcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBpZiAoY29tbWVudElkKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHtkYXRhfSA9IGF3YWl0IGF4aW9zLnB1dChgL2FwaS9jb21tZW50cy8ke2NvbW1lbnRJZH1gLCBib2R5KTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBkYXRhXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCB7ZGF0YX0gPSBhd2FpdCBheGlvcy5wb3N0KGAvYXBpL2NvbW1lbnRzYCwgYm9keSk7XHJcblxyXG4gICAgICAgIHJldHVybiBkYXRhXHJcbiAgICB9XHJcblxyXG59O1xyXG4iLCJpbXBvcnQgYXhpb3MgZnJvbSBcIi4uLy4uL2NvcmUvYXhpb3NcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBzZXRMaWtlID0gYXN5bmMgKGlkOiBudW1iZXIsIHR5cGUgPSAncG9zdCcsIGxpa2U/OiAnbGlrZScgfCAnZGlzbGlrZScgKSA9PiB7XHJcbiAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGF4aW9zLnBvc3QoJy9hcGkvbGlrZXMnLCB7XHJcbiAgICAgICAgdHlwZSxcclxuICAgICAgICBpZCxcclxuICAgICAgICBsaWtlOiBsaWtlID8gbGlrZSA6IG51bGxcclxuICAgIH0pXHJcbn1cclxuIiwiaW1wb3J0IGF4aW9zIGZyb20gJy4uLy4uL2NvcmUvYXhpb3MnO1xyXG5pbXBvcnQge0NhdGVnb3J5LCBQYWdpbmF0aW9uLCBQb3N0RGF0YSwgVGhlbWV9IGZyb20gJy4uLy4uL2ludGVyZmFjZXMnO1xyXG5pbXBvcnQge2dldENvb2tpZX0gZnJvbSAnLi9Vc2VyQXBpJztcclxuXHJcbmV4cG9ydCBjb25zdCBzYXZlSW1hZ2UgPSAoaW1hZ2U6IEZpbGUpID0+IHtcclxuICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICBmb3JtRGF0YS5hcHBlbmQoJ2ltYWdlJywgaW1hZ2UpO1xyXG4gICAgcmV0dXJuIGF4aW9zLnBvc3QoJy9hcGkvcG9zdHMvaW1hZ2UtYnktdXJsJywgZm9ybURhdGEpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHNhdmVQb3N0ID0gYXN5bmMgKHBvc3REYXRhOiB7XHJcbiAgICB0aXRsZTogc3RyaW5nO1xyXG4gICAgYm9keTogYW55O1xyXG4gICAgdGhlbWVzPzogVGhlbWVbXSxcclxuICAgIHN0YXR1cz86IHN0cmluZyxcclxuICAgIGNhdGVnb3J5PzogQ2F0ZWdvcnksXHJcbiAgICBpZD86IG51bWJlcixcclxufSkgPT4ge1xyXG4gICAgbGV0IGJvZHkgPSB7XHJcbiAgICAgICAgYm9keTogcG9zdERhdGEuYm9keSxcclxuICAgICAgICB0aXRsZTogcG9zdERhdGEudGl0bGUsXHJcbiAgICAgICAgZGVzY3JpcHRpb246ICdUZXN0JyxcclxuICAgICAgICB0aGVtZXM6IHBvc3REYXRhLnRoZW1lcyB8fCBbXSxcclxuICAgICAgICBzdGF0dXM6IHBvc3REYXRhPy5zdGF0dXMsXHJcbiAgICAgICAgY2F0ZWdvcnk6IHBvc3REYXRhLmNhdGVnb3J5LFxyXG4gICAgfTtcclxuXHJcbiAgICBpZiAocG9zdERhdGE/LmlkKSB7XHJcbiAgICAgICAgY29uc3Qge2RhdGF9ID0gYXdhaXQgYXhpb3MucHV0KGAvYXBpL3Bvc3RzLyR7cG9zdERhdGEuaWR9YCwgYm9keSk7XHJcbiAgICAgICAgcmV0dXJuIGRhdGFcclxuXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnN0IHtkYXRhfSA9IGF3YWl0IGF4aW9zLnBvc3QoYC9hcGkvcG9zdHNgLCBib2R5KTtcclxuICAgICAgICByZXR1cm4gZGF0YVxyXG4gICAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFBvc3RzID0gYXN5bmMgKHBhcmFtcyA9IHt9LCB0b2tlbj86IHN0cmluZyk6IFByb21pc2U8UGFnaW5hdGlvbjxQb3N0RGF0YT4+ID0+IHtcclxuICAgIGxldCBoZWFkZXJzID0ge307XHJcblxyXG4gICAgaWYgKHRva2VuKSB7XHJcbiAgICAgICAgaGVhZGVycyA9IHtcclxuICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Rva2VufWBcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qge2RhdGF9ID0gYXdhaXQgYXhpb3MuZ2V0KCcvYXBpL3Bvc3RzJywge1xyXG4gICAgICAgIHBhcmFtcyxcclxuICAgICAgICBoZWFkZXJzXHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gZGF0YTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRUaGVtZXMgPSBhc3luYyAoKTogUHJvbWlzZTxUaGVtZVtdPiA9PiB7XHJcbiAgICBjb25zdCB7ZGF0YX0gPSBhd2FpdCBheGlvcy5nZXQoJy9hcGkvcG9zdHMvdGhlbWVzJyk7XHJcblxyXG4gICAgcmV0dXJuIGRhdGE7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3Qgc2F2ZUJ5VXJsID0gYXN5bmMgKHVybDogc3RyaW5nKSA9PiB7XHJcbiAgICByZXR1cm4gYXdhaXQgYXhpb3MucG9zdCgnL2FwaS9wb3N0cy9pbWFnZS1ieS11cmwnLCB7dXJsfSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3Qgc2hvd1Bvc3QgPSBhc3luYyAoc2x1Zzogc3RyaW5nLCB0b2tlbj86IHN0cmluZykgPT4ge1xyXG4gICAgY29uc3Qge2RhdGF9ID0gYXdhaXQgYXhpb3MuZ2V0KGAvYXBpL3Bvc3RzLyR7c2x1Z31gLCB7XHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICBBdXRob3JpemF0aW9uOiB0b2tlbiA/IGBCZWFyZXIgJHt0b2tlbn1gIDogJydcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIHJldHVybiBkYXRhO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFBvc3RDb21tZW50cyA9IGFzeW5jIChpZDogbnVtYmVyLCBhcGlUb2tlbj86IHN0cmluZykgPT4ge1xyXG4gICAgY29uc3Qge2RhdGF9ID0gYXdhaXQgYXhpb3MuZ2V0KGAvYXBpL3Bvc3RzLyR7aWR9L2NvbW1lbnRzYCwge1xyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogYXBpVG9rZW4gPyBgQmVhcmVyICR7YXBpVG9rZW59YCA6ICcnXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuICAgIHJldHVybiBkYXRhO1xyXG59XHJcblxyXG4iLCJpbXBvcnQgYXhpb3MgZnJvbSBcIi4uLy4uL2NvcmUvYXhpb3NcIjtcclxuaW1wb3J0IHtQYWdpbmF0aW9uLCBVc2VyfSBmcm9tIFwiLi4vLi4vaW50ZXJmYWNlc1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFNwZWNpYWxpc3RzID0gYXN5bmMgKHBhcmFtcyk6IFByb21pc2U8UGFnaW5hdGlvbjxVc2VyPj4gPT4ge1xyXG4gICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBheGlvcy5nZXQoJy9hcGkvdXNlcnMnLCB7IHBhcmFtcyB9KTtcclxuXHJcbiAgICByZXR1cm4gZGF0YVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IGdldFNwZWNpYWxpc3RDYXRlZ29yaWVzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBheGlvcy5nZXQoJy9hcGkvdXNlcnMvY2F0ZWdvcmllcycpO1xyXG5cclxuICAgIHJldHVybiBkYXRhO1xyXG59XHJcbiIsImltcG9ydCBheGlvcyBmcm9tICcuLi8uLi9jb3JlL2F4aW9zJztcclxuaW1wb3J0IHtVc2VyfSBmcm9tIFwiLi4vLi4vaW50ZXJmYWNlc1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IFVzZXJBcGkgPSB7XHJcbiAgbG9naW46IGFzeW5jIChlbWFpbDogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nKTogUHJvbWlzZTxhbnk+ID0+IHtcclxuICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICBmb3JtRGF0YS5hcHBlbmQoJ2VtYWlsJywgZW1haWwpO1xyXG4gICAgZm9ybURhdGEuYXBwZW5kKCdwYXNzd29yZCcsIHBhc3N3b3JkKTtcclxuICAgIGZvcm1EYXRhLmFwcGVuZCgncmVtZW1iZXInLCAnMScpO1xyXG5cclxuICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXhpb3MucG9zdCgnL2xvZ2luJywgZm9ybURhdGEsIHtcclxuICAgICAgbWF4UmVkaXJlY3RzOiAwLFxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIGRhdGE7XHJcbiAgfSxcclxuXHJcbiAgZ2V0TWU6IGFzeW5jICh0b2tlbj86IHN0cmluZykgPT4ge1xyXG4gICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBheGlvcy5nZXQoJy9hcGkvdXNlcicsIHtcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIEF1dGhvcml6YXRpb246IHRva2VuID8gYEJlYXJlciAke3Rva2VufWAgOiAnJ1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIHJldHVybiBkYXRhO1xyXG4gIH0sXHJcblxyXG4gIGdldE5vdGlmaWNhdGlvbnM6IGFzeW5jICh0b2tlbj86IHN0cmluZykgPT4ge1xyXG4gICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBheGlvcy5nZXQoJy9hcGkvdXNlci9ub3RpZmljYXRpb25zJywge1xyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgQXV0aG9yaXphdGlvbjogdG9rZW4gPyBgQmVhcmVyICR7dG9rZW59YCA6ICcnXHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIGRhdGE7XHJcbiAgfSxcclxuXHJcbiAgc2hvdzogYXN5bmMgKGlkOiBudW1iZXIpID0+IHtcclxuICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXhpb3MuZ2V0KCcvYXBpL3VzZXJzLycgKyBpZCk7XHJcbiAgICByZXR1cm4gZGF0YTtcclxuICB9LFxyXG5cclxuICB1cGRhdGVQcm9maWxlOiBhc3luYyAoZGF0YTogUGFydGlhbDxVc2VyPiwgaWQ6IG51bWJlcikgPT4ge1xyXG4gICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuXHJcbiAgICBPYmplY3Qua2V5cyhkYXRhKS5mb3JFYWNoKChwYXJhbSkgPT4ge1xyXG4gICAgICBpZiAocGFyYW0gIT09ICdsaW5rcycpIHtcclxuICAgICAgICBmb3JtRGF0YS5hcHBlbmQocGFyYW0sIGRhdGFbcGFyYW1dKTtcclxuICAgICAgfVxyXG4gICAgfSlcclxuXHJcbiAgICBpZiAoZGF0YS5saW5rcz8ubGVuZ3RoKSB7XHJcbiAgICAgIGRhdGEubGlua3MubWFwKChsLCBrZXkpID0+IHtcclxuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoYGxpbmtzWyR7a2V5fV1gLCBsKTtcclxuICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBhd2FpdCBheGlvcy5wYXRjaChgL2FwaS91c2VyLyR7aWR9YCwgZGF0YSlcclxuXHJcbiAgfVxyXG5cclxuXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0Q29va2llID0gKCkgPT4ge1xyXG4gIHJldHVybiBheGlvcy5nZXQoJy9zYW5jdHVtL2NzcmYtY29va2llJyk7XHJcbn07XHJcbiIsImltcG9ydCBFY2hvIGZyb20gXCJsYXJhdmVsLWVjaG9cIjtcclxuaW1wb3J0IHB1c2hlciBmcm9tIFwicHVzaGVyLWpzXCI7XHJcblxyXG5pZiAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgLy8gQHRzLWlnbm9yZVxyXG4gICAgd2luZG93LlB1c2hlciA9IHB1c2hlcjtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGVjaG8gPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gbmV3IEVjaG8oe1xyXG4gICAgICAgIGJyb2FkY2FzdGVyOiBcInB1c2hlclwiLFxyXG4gICAgICAgIGtleTogXCJiN2NmM2RhOTNlODBkZmYyZGI2M1wiLFxyXG4gICAgICAgIGNsdXN0ZXI6IFwiYXAyXCIsXHJcbiAgICB9KTtcclxufTtcclxuIiwiaW1wb3J0IHsgdXNlTWVkaWFRdWVyeSwgdXNlVGhlbWUgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XG5cbmV4cG9ydCBjb25zdCB1c2VBbGxNUSA9ICgpID0+IHtcbiAgY29uc3QgdGhlbWUgPSB1c2VUaGVtZSgpO1xuXG4gIHJldHVybiB7XG4gICAgaXNYUzogdXNlTWVkaWFRdWVyeSh0aGVtZS5icmVha3BvaW50cy5kb3duKCd4cycpKSxcbiAgICBpc1NNOiB1c2VNZWRpYVF1ZXJ5KHRoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ3NtJykpLFxuICAgIGlzTUQ6IHVzZU1lZGlhUXVlcnkodGhlbWUuYnJlYWtwb2ludHMuZG93bignbWQnKSksXG4gICAgaXNMRzogdXNlTWVkaWFRdWVyeSh0aGVtZS5icmVha3BvaW50cy5kb3duKCdsZycpKSxcbiAgfTtcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9BdmF0YXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvQmFja2Ryb3BcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0NsaWNrQXdheUxpc3RlbmVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0NvbGxhcHNlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0RpYWxvZ1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dDb250ZW50XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0dyb3dcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvTWVudUl0ZW1cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvTWVudUxpc3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvUGFwZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvUG9wcGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHlcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL0Nsb3NlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtdWkvbWF0ZXJpYWwvQnV0dG9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtdWkvbWF0ZXJpYWwvSWNvbkJ1dHRvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbXVpL21hdGVyaWFsL0lucHV0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNsc3hcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZGF0ZS1mbnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZGF0ZS1mbnMvbG9jYWxlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImxhcmF2ZWwtZWNob1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHVzaGVyLWpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJlZHV4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9