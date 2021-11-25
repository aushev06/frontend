webpackHotUpdate_N_E("pages/post/[slug]",{

/***/ "./components/FullPost/index.tsx":
/*!***************************************!*\
  !*** ./components/FullPost/index.tsx ***!
  \***************************************/
/*! exports provided: FullPost */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FullPost", function() { return FullPost; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Projects_projects_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Projects_projects_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_Projects_projects_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_Projects_projects_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var C_Projects_projects_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Post_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Post.module.scss */ "./components/FullPost/Post.module.scss");
/* harmony import */ var _Post_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_Post_module_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _icons_ShareIcon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../icons/ShareIcon */ "./components/icons/ShareIcon.tsx");
/* harmony import */ var _icons_FacebookIcon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../icons/FacebookIcon */ "./components/icons/FacebookIcon.tsx");
/* harmony import */ var _icons_VkIcon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../icons/VkIcon */ "./components/icons/VkIcon.tsx");
/* harmony import */ var _icons_TwitterIcon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../icons/TwitterIcon */ "./components/icons/TwitterIcon.tsx");
/* harmony import */ var _icons_TelegramIcon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../icons/TelegramIcon */ "./components/icons/TelegramIcon.tsx");
/* harmony import */ var _icons_WhatsappIcon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../icons/WhatsappIcon */ "./components/icons/WhatsappIcon.tsx");
/* harmony import */ var _LikeBlock__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../LikeBlock */ "./components/LikeBlock/index.tsx");
/* harmony import */ var _UserViewOnContent__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../UserViewOnContent */ "./components/UserViewOnContent/index.tsx");
/* harmony import */ var _ViewsAndComments__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../ViewsAndComments */ "./components/ViewsAndComments/index.tsx");
/* harmony import */ var _PostViewer__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./PostViewer */ "./components/FullPost/PostViewer/index.tsx");
/* harmony import */ var _icons_WarningIcon__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../icons/WarningIcon */ "./components/icons/WarningIcon.tsx");
/* harmony import */ var _utils_useAllMQ__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../utils/useAllMQ */ "./utils/useAllMQ.ts");





var _jsxFileName = "C:\\Projects\\projects\\frontend\\components\\FullPost\\index.tsx",
    _this = undefined,
    _s = $RefreshSig$();
















var FullPost = function FullPost(_ref) {
  _s();

  var post = _ref.post,
      onSetLike = _ref.onSetLike;
  var mq = Object(_utils_useAllMQ__WEBPACK_IMPORTED_MODULE_18__["useAllMQ"])();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState(post),
      _React$useState2 = Object(C_Projects_projects_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_React$useState, 2),
      postData = _React$useState2[0],
      setPostData = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState(null),
      _React$useState4 = Object(C_Projects_projects_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_React$useState3, 2),
      anchorEl = _React$useState4[0],
      setAnchorEl = _React$useState4[1];

  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState({
    likes: postData.likes_count,
    dislikes: postData.dislikes_count,
    vote: post === null || post === void 0 ? void 0 : post.liked_type
  }),
      _React$useState6 = Object(C_Projects_projects_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_React$useState5, 2),
      likesAndDislikes = _React$useState6[0],
      setLikesAndDislikes = _React$useState6[1];

  var handleClick = function handleClick(event) {
    setAnchorEl(event.currentTarget);
  };

  var handleSetLike = /*#__PURE__*/function () {
    var _ref2 = Object(C_Projects_projects_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Projects_projects_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(like) {
      return C_Projects_projects_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              setLikesAndDislikes(like);
              _context.next = 3;
              return onSetLike(post.id, like === null || like === void 0 ? void 0 : like.vote);

            case 3:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function handleSetLike(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _Post_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.post,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_UserViewOnContent__WEBPACK_IMPORTED_MODULE_14__["UserViewOnContent"], {
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
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _Post_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.postInfo,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _Post_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.postDetails,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
          className: _Post_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.postHeader,
          children: post.title
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ViewsAndComments__WEBPACK_IMPORTED_MODULE_15__["ViewsAndComments"], {
          comments: post.comments_count,
          views: post.views,
          mode: "full"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 9
      }, _this), !mq.isXS && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _Post_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.postActions,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_LikeBlock__WEBPACK_IMPORTED_MODULE_13__["LikeBlock"], {
          likes: likesAndDislikes.likes,
          dislikes: likesAndDislikes.dislikes,
          mode: "mini",
          onChange: handleSetLike,
          vote: likesAndDislikes.vote
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 15
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _Post_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.postShare,
          onClick: handleClick,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_icons_ShareIcon__WEBPACK_IMPORTED_MODULE_7__["ShareIcon"], {
            className: _Post_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.postShareIcon
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 63,
            columnNumber: 17
          }, _this), "\u041F\u043E\u0434\u0435\u043B\u0438\u0442\u044C\u0441\u044F"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 15
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Popover"], {
          open: !!anchorEl,
          anchorEl: anchorEl,
          onClose: function onClose() {
            return setAnchorEl(null);
          },
          classes: {
            paper: _Post_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.postSharePopup
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
            className: _Post_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.postShareSocial,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_icons_FacebookIcon__WEBPACK_IMPORTED_MODULE_8__["FacebookIcon"], {
              className: _Post_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.postShareSocialIcon
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 83,
              columnNumber: 19
            }, _this), "Facebook"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 82,
            columnNumber: 17
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _Post_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.postShareSocial,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_icons_VkIcon__WEBPACK_IMPORTED_MODULE_9__["VkIcon"], {
              className: _Post_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.postShareSocialIcon
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 87,
              columnNumber: 19
            }, _this), "\u0412\u043A\u043E\u043D\u0442\u0430\u043A\u0442\u0435"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 86,
            columnNumber: 17
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _Post_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.postShareSocial,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_icons_TwitterIcon__WEBPACK_IMPORTED_MODULE_10__["TwitterIcon"], {
              className: _Post_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.postShareSocialIcon
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 91,
              columnNumber: 19
            }, _this), "Twitter"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 90,
            columnNumber: 17
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _Post_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.postShareSocial,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_icons_TelegramIcon__WEBPACK_IMPORTED_MODULE_11__["TelegramIcon"], {
              className: _Post_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.postShareSocialIcon
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 95,
              columnNumber: 19
            }, _this), "Telegram"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 94,
            columnNumber: 17
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _Post_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.postShareSocial,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_icons_WhatsappIcon__WEBPACK_IMPORTED_MODULE_12__["WhatsappIcon"], {
              className: _Post_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.postShareSocialIcon
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 99,
              columnNumber: 19
            }, _this), "Whatsapp"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 98,
            columnNumber: 17
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 15
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 13
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _Post_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.postWrapper,
      children: postData.body.map(function (block, idx) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: Object(_PostViewer__WEBPACK_IMPORTED_MODULE_16__["default"])(block)
        }, 'block-' + idx, false, {
          fileName: _jsxFileName,
          lineNumber: 107,
          columnNumber: 56
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 9
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _Post_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.postFooter,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _Post_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.postFooterIcons,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_icons_FacebookIcon__WEBPACK_IMPORTED_MODULE_8__["FacebookIcon"], {
          className: _Post_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.postFooterIcon,
          hoverClassName: _Post_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.postFooterIconHover
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 113,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_icons_VkIcon__WEBPACK_IMPORTED_MODULE_9__["VkIcon"], {
          className: _Post_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.postFooterIcon,
          hoverClassName: _Post_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.postFooterIconHover
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 114,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_icons_TwitterIcon__WEBPACK_IMPORTED_MODULE_10__["TwitterIcon"], {
          className: _Post_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.postFooterIcon,
          hoverClassName: _Post_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.postFooterIconHover
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 115,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_icons_TelegramIcon__WEBPACK_IMPORTED_MODULE_11__["TelegramIcon"], {
          className: _Post_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.postFooterIcon,
          hoverClassName: _Post_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.postFooterIconHover
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 116,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_icons_WhatsappIcon__WEBPACK_IMPORTED_MODULE_12__["WhatsappIcon"], {
          className: _Post_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.postFooterIcon,
          hoverClassName: _Post_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.postFooterIconHover
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 117,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 112,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        className: _Post_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.postFooterComplain,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_icons_WarningIcon__WEBPACK_IMPORTED_MODULE_17__["WarningIcon"], {
          className: _Post_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.postFooterComplainIcon
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 120,
          columnNumber: 11
        }, _this), "\u041F\u043E\u0436\u0430\u043B\u043E\u0432\u0430\u0442\u044C\u0441\u044F"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 119,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 39,
    columnNumber: 5
  }, _this);
};

_s(FullPost, "JwsvnYPrtfXZlxoRQUowI5GIHWQ=", false, function () {
  return [_utils_useAllMQ__WEBPACK_IMPORTED_MODULE_18__["useAllMQ"]];
});

_c = FullPost;

var _c;

$RefreshReg$(_c, "FullPost");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9GdWxsUG9zdC9pbmRleC50c3giXSwibmFtZXMiOlsiRnVsbFBvc3QiLCJwb3N0Iiwib25TZXRMaWtlIiwibXEiLCJ1c2VBbGxNUSIsIlJlYWN0IiwidXNlU3RhdGUiLCJwb3N0RGF0YSIsInNldFBvc3REYXRhIiwiYW5jaG9yRWwiLCJzZXRBbmNob3JFbCIsImxpa2VzIiwibGlrZXNfY291bnQiLCJkaXNsaWtlcyIsImRpc2xpa2VzX2NvdW50Iiwidm90ZSIsImxpa2VkX3R5cGUiLCJsaWtlc0FuZERpc2xpa2VzIiwic2V0TGlrZXNBbmREaXNsaWtlcyIsImhhbmRsZUNsaWNrIiwiZXZlbnQiLCJjdXJyZW50VGFyZ2V0IiwiaGFuZGxlU2V0TGlrZSIsImxpa2UiLCJpZCIsInN0eWxlcyIsInVzZXIiLCJuYW1lIiwiYXZhdGFyVXJsIiwiYXZhdGFyIiwiRGF0ZSIsImNyZWF0ZWRfYXQiLCJnZXRUaW1lIiwicG9zdEluZm8iLCJwb3N0RGV0YWlscyIsInBvc3RIZWFkZXIiLCJ0aXRsZSIsImNvbW1lbnRzX2NvdW50Iiwidmlld3MiLCJpc1hTIiwicG9zdEFjdGlvbnMiLCJwb3N0U2hhcmUiLCJwb3N0U2hhcmVJY29uIiwicGFwZXIiLCJwb3N0U2hhcmVQb3B1cCIsInZlcnRpY2FsIiwiaG9yaXpvbnRhbCIsInBvc3RTaGFyZVNvY2lhbCIsInBvc3RTaGFyZVNvY2lhbEljb24iLCJwb3N0V3JhcHBlciIsImJvZHkiLCJtYXAiLCJibG9jayIsImlkeCIsImdldEJsb2NrSFRNTCIsInBvc3RGb290ZXIiLCJwb3N0Rm9vdGVySWNvbnMiLCJwb3N0Rm9vdGVySWNvbiIsInBvc3RGb290ZXJJY29uSG92ZXIiLCJwb3N0Rm9vdGVyQ29tcGxhaW4iLCJwb3N0Rm9vdGVyQ29tcGxhaW5JY29uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFD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LFdBREY7QUF3RkQsQ0EzR007O0dBQU01RCxRO1VBQ0FJLHlEOzs7S0FEQUosUSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wb3N0L1tzbHVnXS4xNGI4N2ZhMGY3MDkzYjk2MDBlZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL1Bvc3QubW9kdWxlLnNjc3MnO1xyXG5pbXBvcnQgeyBQb3BvdmVyIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5pbXBvcnQgeyBTaGFyZUljb24gfSBmcm9tICcuLi9pY29ucy9TaGFyZUljb24nO1xyXG5pbXBvcnQgeyBGYWNlYm9va0ljb24gfSBmcm9tICcuLi9pY29ucy9GYWNlYm9va0ljb24nO1xyXG5pbXBvcnQgeyBWa0ljb24gfSBmcm9tICcuLi9pY29ucy9Wa0ljb24nO1xyXG5pbXBvcnQgeyBUd2l0dGVySWNvbiB9IGZyb20gJy4uL2ljb25zL1R3aXR0ZXJJY29uJztcclxuaW1wb3J0IHsgVGVsZWdyYW1JY29uIH0gZnJvbSAnLi4vaWNvbnMvVGVsZWdyYW1JY29uJztcclxuaW1wb3J0IHsgV2hhdHNhcHBJY29uIH0gZnJvbSAnLi4vaWNvbnMvV2hhdHNhcHBJY29uJztcclxuaW1wb3J0IHsgTGlrZUJsb2NrIH0gZnJvbSAnLi4vTGlrZUJsb2NrJztcclxuaW1wb3J0IHsgVXNlclZpZXdPbkNvbnRlbnQgfSBmcm9tICcuLi9Vc2VyVmlld09uQ29udGVudCc7XHJcbmltcG9ydCB7IFZpZXdzQW5kQ29tbWVudHMgfSBmcm9tICcuLi9WaWV3c0FuZENvbW1lbnRzJztcclxuaW1wb3J0IHsgTGlrZUJsb2NrUmVzdWx0IH0gZnJvbSAnLi4vTGlrZUJsb2NrJztcclxuaW1wb3J0IGdldEJsb2NrSFRNTCwgeyBCbG9jayB9IGZyb20gJy4vUG9zdFZpZXdlcic7XHJcbmltcG9ydCB7IFdhcm5pbmdJY29uIH0gZnJvbSAnLi4vaWNvbnMvV2FybmluZ0ljb24nO1xyXG5pbXBvcnQge1Bvc3REYXRhfSBmcm9tIFwiLi4vLi4vaW50ZXJmYWNlc1wiO1xyXG5pbXBvcnQge3VzZUFsbE1RfSBmcm9tIFwiLi4vLi4vdXRpbHMvdXNlQWxsTVFcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBGdWxsUG9zdDogUmVhY3QuRkM8e3Bvc3Q6IFBvc3REYXRhLCBvblNldExpa2U6IChwb3N0SWQ6IG51bWJlciwgbGlrZTogdW5rbm93bikgPT4gdm9pZH0+ID0gKHtwb3N0LCBvblNldExpa2V9KSA9PiB7XHJcbiAgY29uc3QgbXEgPSB1c2VBbGxNUSgpO1xyXG4gIGNvbnN0IFtwb3N0RGF0YSwgc2V0UG9zdERhdGFdID0gUmVhY3QudXNlU3RhdGUocG9zdCk7XHJcbiAgY29uc3QgW2FuY2hvckVsLCBzZXRBbmNob3JFbF0gPSBSZWFjdC51c2VTdGF0ZTxIVE1MRGl2RWxlbWVudCB8IG51bGw+KG51bGwpO1xyXG4gIGNvbnN0IFtsaWtlc0FuZERpc2xpa2VzLCBzZXRMaWtlc0FuZERpc2xpa2VzXSA9IFJlYWN0LnVzZVN0YXRlPExpa2VCbG9ja1Jlc3VsdD4oe1xyXG4gICAgbGlrZXM6IHBvc3REYXRhLmxpa2VzX2NvdW50LFxyXG4gICAgZGlzbGlrZXM6IHBvc3REYXRhLmRpc2xpa2VzX2NvdW50LFxyXG4gICAgdm90ZTogcG9zdD8ubGlrZWRfdHlwZSxcclxuICB9KTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoZXZlbnQ6IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTERpdkVsZW1lbnQ+KSA9PiB7XHJcbiAgICBzZXRBbmNob3JFbChldmVudC5jdXJyZW50VGFyZ2V0KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVTZXRMaWtlID1hc3luYyAobGlrZTogTGlrZUJsb2NrUmVzdWx0KSA9PiB7XHJcbiAgICBzZXRMaWtlc0FuZERpc2xpa2VzKGxpa2UpO1xyXG4gICAgYXdhaXQgb25TZXRMaWtlKHBvc3QuaWQsIGxpa2U/LnZvdGUpXHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wb3N0fT5cclxuICAgICAgPFVzZXJWaWV3T25Db250ZW50XHJcbiAgICAgICAgdXNlcj17e1xyXG4gICAgICAgICAgaWQ6IHBvc3QudXNlci5pZCxcclxuICAgICAgICAgIG5hbWU6IHBvc3QudXNlci5uYW1lLFxyXG4gICAgICAgICAgYXZhdGFyVXJsOiBwb3N0LnVzZXIuYXZhdGFyLFxyXG4gICAgICAgIH19XHJcbiAgICAgICAgdGltZT17bmV3IERhdGUocG9zdC5jcmVhdGVkX2F0KS5nZXRUaW1lKCl9XHJcbiAgICAgIC8+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucG9zdEluZm99PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucG9zdERldGFpbHN9PlxyXG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT17c3R5bGVzLnBvc3RIZWFkZXJ9Pntwb3N0LnRpdGxlfTwvaDE+XHJcbiAgICAgICAgICA8Vmlld3NBbmRDb21tZW50cyBjb21tZW50cz17cG9zdC5jb21tZW50c19jb3VudH0gdmlld3M9e3Bvc3Qudmlld3N9IG1vZGU9XCJmdWxsXCIgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICB7IW1xLmlzWFMgJiYgKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnBvc3RBY3Rpb25zfT5cclxuICAgICAgICAgICAgICA8TGlrZUJsb2NrXHJcbiAgICAgICAgICAgICAgICAgIGxpa2VzPXtsaWtlc0FuZERpc2xpa2VzLmxpa2VzfVxyXG4gICAgICAgICAgICAgICAgICBkaXNsaWtlcz17bGlrZXNBbmREaXNsaWtlcy5kaXNsaWtlc31cclxuICAgICAgICAgICAgICAgICAgbW9kZT1cIm1pbmlcIlxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlU2V0TGlrZX1cclxuICAgICAgICAgICAgICAgICAgdm90ZT17bGlrZXNBbmREaXNsaWtlcy52b3RlfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wb3N0U2hhcmV9IG9uQ2xpY2s9e2hhbmRsZUNsaWNrfT5cclxuICAgICAgICAgICAgICAgIDxTaGFyZUljb24gY2xhc3NOYW1lPXtzdHlsZXMucG9zdFNoYXJlSWNvbn0gLz5cclxuICAgICAgICAgICAgICAgINCf0L7QtNC10LvQuNGC0YzRgdGPXHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPFBvcG92ZXJcclxuICAgICAgICAgICAgICAgICAgb3Blbj17ISFhbmNob3JFbH1cclxuICAgICAgICAgICAgICAgICAgYW5jaG9yRWw9e2FuY2hvckVsfVxyXG4gICAgICAgICAgICAgICAgICBvbkNsb3NlPXsoKSA9PiBzZXRBbmNob3JFbChudWxsKX1cclxuICAgICAgICAgICAgICAgICAgY2xhc3Nlcz17e1xyXG4gICAgICAgICAgICAgICAgICAgIHBhcGVyOiBzdHlsZXMucG9zdFNoYXJlUG9wdXAsXHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgIGFuY2hvck9yaWdpbj17e1xyXG4gICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsOiAnYm90dG9tJyxcclxuICAgICAgICAgICAgICAgICAgICBob3Jpem9udGFsOiAnY2VudGVyJyxcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtT3JpZ2luPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgdmVydGljYWw6ICd0b3AnLFxyXG4gICAgICAgICAgICAgICAgICAgIGhvcml6b250YWw6ICdjZW50ZXInLFxyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucG9zdFNoYXJlU29jaWFsfT5cclxuICAgICAgICAgICAgICAgICAgPEZhY2Vib29rSWNvbiBjbGFzc05hbWU9e3N0eWxlcy5wb3N0U2hhcmVTb2NpYWxJY29ufSAvPlxyXG4gICAgICAgICAgICAgICAgICBGYWNlYm9va1xyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnBvc3RTaGFyZVNvY2lhbH0+XHJcbiAgICAgICAgICAgICAgICAgIDxWa0ljb24gY2xhc3NOYW1lPXtzdHlsZXMucG9zdFNoYXJlU29jaWFsSWNvbn0gLz5cclxuICAgICAgICAgICAgICAgICAg0JLQutC+0L3RgtCw0LrRgtC1XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucG9zdFNoYXJlU29jaWFsfT5cclxuICAgICAgICAgICAgICAgICAgPFR3aXR0ZXJJY29uIGNsYXNzTmFtZT17c3R5bGVzLnBvc3RTaGFyZVNvY2lhbEljb259IC8+XHJcbiAgICAgICAgICAgICAgICAgIFR3aXR0ZXJcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wb3N0U2hhcmVTb2NpYWx9PlxyXG4gICAgICAgICAgICAgICAgICA8VGVsZWdyYW1JY29uIGNsYXNzTmFtZT17c3R5bGVzLnBvc3RTaGFyZVNvY2lhbEljb259IC8+XHJcbiAgICAgICAgICAgICAgICAgIFRlbGVncmFtXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucG9zdFNoYXJlU29jaWFsfT5cclxuICAgICAgICAgICAgICAgICAgPFdoYXRzYXBwSWNvbiBjbGFzc05hbWU9e3N0eWxlcy5wb3N0U2hhcmVTb2NpYWxJY29ufSAvPlxyXG4gICAgICAgICAgICAgICAgICBXaGF0c2FwcFxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9Qb3BvdmVyPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnBvc3RXcmFwcGVyfT5cclxuICAgICAgICAgICAge3Bvc3REYXRhLmJvZHkubWFwKChibG9jazogQmxvY2ssIGlkeCkgPT4gKDxkaXYga2V5PXsnYmxvY2stJyArIGlkeH0+XHJcbiAgICAgICAgICAgIHtnZXRCbG9ja0hUTUwoYmxvY2spfVxyXG4gICAgICA8L2Rpdj4pKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wb3N0Rm9vdGVyfT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnBvc3RGb290ZXJJY29uc30+XHJcbiAgICAgICAgICA8RmFjZWJvb2tJY29uIGNsYXNzTmFtZT17c3R5bGVzLnBvc3RGb290ZXJJY29ufSBob3ZlckNsYXNzTmFtZT17c3R5bGVzLnBvc3RGb290ZXJJY29uSG92ZXJ9IC8+XHJcbiAgICAgICAgICA8VmtJY29uIGNsYXNzTmFtZT17c3R5bGVzLnBvc3RGb290ZXJJY29ufSBob3ZlckNsYXNzTmFtZT17c3R5bGVzLnBvc3RGb290ZXJJY29uSG92ZXJ9IC8+XHJcbiAgICAgICAgICA8VHdpdHRlckljb24gY2xhc3NOYW1lPXtzdHlsZXMucG9zdEZvb3Rlckljb259IGhvdmVyQ2xhc3NOYW1lPXtzdHlsZXMucG9zdEZvb3Rlckljb25Ib3Zlcn0gLz5cclxuICAgICAgICAgIDxUZWxlZ3JhbUljb24gY2xhc3NOYW1lPXtzdHlsZXMucG9zdEZvb3Rlckljb259IGhvdmVyQ2xhc3NOYW1lPXtzdHlsZXMucG9zdEZvb3Rlckljb25Ib3Zlcn0gLz5cclxuICAgICAgICAgIDxXaGF0c2FwcEljb24gY2xhc3NOYW1lPXtzdHlsZXMucG9zdEZvb3Rlckljb259IGhvdmVyQ2xhc3NOYW1lPXtzdHlsZXMucG9zdEZvb3Rlckljb25Ib3Zlcn0gLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5wb3N0Rm9vdGVyQ29tcGxhaW59PlxyXG4gICAgICAgICAgPFdhcm5pbmdJY29uIGNsYXNzTmFtZT17c3R5bGVzLnBvc3RGb290ZXJDb21wbGFpbkljb259IC8+XHJcbiAgICAgICAgICDQn9C+0LbQsNC70L7QstCw0YLRjNGB0Y9cclxuICAgICAgICA8L3NwYW4+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==