webpackHotUpdate_N_E("pages/post/[slug]",{

/***/ "./pages/post/[slug].tsx":
/*!*******************************!*\
  !*** ./pages/post/[slug].tsx ***!
  \*******************************/
/*! exports provided: __N_SSP, PostContext, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSP", function() { return __N_SSP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostContext", function() { return PostContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Post; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Projects_projects_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var C_Projects_projects_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Projects_projects_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(C_Projects_projects_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var C_Projects_projects_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var C_Projects_projects_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _layouts_MainLayout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../layouts/MainLayout */ "./layouts/MainLayout.tsx");
/* harmony import */ var _components_FullPost__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/FullPost */ "./components/FullPost/index.tsx");
/* harmony import */ var _components_AddCommentBlock__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/AddCommentBlock */ "./components/AddCommentBlock/index.tsx");
/* harmony import */ var _services_api_CommentApi__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/api/CommentApi */ "./services/api/CommentApi.ts");
/* harmony import */ var _components_CommentList__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/CommentList */ "./components/CommentList/index.tsx");
/* harmony import */ var _services_api_LikeApi__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../services/api/LikeApi */ "./services/api/LikeApi.ts");
/* harmony import */ var _components_SideBlock__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/SideBlock */ "./components/SideBlock/index.tsx");
/* harmony import */ var _components_MenuList__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../components/MenuList */ "./components/MenuList/index.tsx");
/* harmony import */ var _components_Tags__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../components/Tags */ "./components/Tags/index.tsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_directory_directory_selector__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../redux/directory/directory.selector */ "./redux/directory/directory.selector.ts");
/* harmony import */ var _utils_useAllMQ__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../utils/useAllMQ */ "./utils/useAllMQ.ts");
/* harmony import */ var _utils_echo__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../utils/echo */ "./utils/echo.ts");
/* harmony import */ var _hooks_useAlert__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../hooks/useAlert */ "./hooks/useAlert.ts");






var _jsxFileName = "C:\\Projects\\projects\\frontend\\pages\\post\\[slug].tsx",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(C_Projects_projects_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
















var __N_SSP = true;
var PostContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createContext({});
function Post(_ref) {
  _s();

  var post = _ref.post,
      serverSideComments = _ref.serverSideComments;
  var mq = Object(_utils_useAllMQ__WEBPACK_IMPORTED_MODULE_17__["useAllMQ"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])([]),
      selectedThemes = _useState[0],
      setSelectedThemes = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(serverSideComments),
      comments = _useState2[0],
      setComments = _useState2[1];

  var themes = Object(react_redux__WEBPACK_IMPORTED_MODULE_15__["useSelector"])(_redux_directory_directory_selector__WEBPACK_IMPORTED_MODULE_16__["selectThemesState"]);
  var categories = Object(react_redux__WEBPACK_IMPORTED_MODULE_15__["useSelector"])(_redux_directory_directory_selector__WEBPACK_IMPORTED_MODULE_16__["selectCategoriesState"]);

  var _useAlert = Object(_hooks_useAlert__WEBPACK_IMPORTED_MODULE_19__["useAlert"])(),
      openAlert = _useAlert.openAlert;

  var handleSelectTheme = /*#__PURE__*/function () {
    var _ref2 = Object(C_Projects_projects_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__["default"])( /*#__PURE__*/C_Projects_projects_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee(t) {
      return C_Projects_projects_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              setSelectedThemes(function () {
                return [].concat(Object(C_Projects_projects_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__["default"])(selectedThemes), [t]);
              });

            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function handleSelectTheme(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  var onAddComment = /*#__PURE__*/function () {
    var _ref3 = Object(C_Projects_projects_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__["default"])( /*#__PURE__*/C_Projects_projects_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee2(text, toUserId, parentId, commentId) {
      return C_Projects_projects_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return _services_api_CommentApi__WEBPACK_IMPORTED_MODULE_9__["CommentApi"].save(post.id, text, toUserId, parentId, commentId);

            case 2:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function onAddComment(_x2, _x3, _x4, _x5) {
      return _ref3.apply(this, arguments);
    };
  }();

  var handleCommentSetLike = /*#__PURE__*/function () {
    var _ref4 = Object(C_Projects_projects_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__["default"])( /*#__PURE__*/C_Projects_projects_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee3(id, like) {
      return C_Projects_projects_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return Object(_services_api_LikeApi__WEBPACK_IMPORTED_MODULE_11__["setLike"])(id, 'comment', like);

            case 2:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    return function handleCommentSetLike(_x6, _x7) {
      return _ref4.apply(this, arguments);
    };
  }();

  var handleSetLike = /*#__PURE__*/function () {
    var _ref5 = Object(C_Projects_projects_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__["default"])( /*#__PURE__*/C_Projects_projects_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee4(postId, like) {
      return C_Projects_projects_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return Object(_services_api_LikeApi__WEBPACK_IMPORTED_MODULE_11__["setLike"])(postId, 'post', like);

            case 2:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }));

    return function handleSetLike(_x8, _x9) {
      return _ref5.apply(this, arguments);
    };
  }();

  react__WEBPACK_IMPORTED_MODULE_5___default.a.useEffect(function () {
    if (true) {
      Object(_utils_echo__WEBPACK_IMPORTED_MODULE_18__["echo"])().channel('ingternet-comments_' + (post === null || post === void 0 ? void 0 : post.id)).listen('.new-comment', function (comment) {
        openAlert('???????????????? ?????????? ??????????????????????!');
        setComments(!comment.parent_id ? [comment].concat(Object(C_Projects_projects_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__["default"])(comments)) : comments.map(function (item) {
          if (comment.parent_id === item.id) {
            return _objectSpread(_objectSpread({}, item), {}, {
              comments: [].concat(Object(C_Projects_projects_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__["default"])(comment.comments), [comment])
            });
          }

          return item;
        }));
      });
      Object(_utils_echo__WEBPACK_IMPORTED_MODULE_18__["echo"])().channel('ingternet-comments_' + (post === null || post === void 0 ? void 0 : post.id)).listen('.updated-comment', function (item) {
        openAlert("\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C ".concat(item.user.name, " \u0438\u0437\u043C\u0435\u043D\u0438\u043B \u0441\u0432\u043E\u0439 \u043A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439!"));
        setComments(comments.map(function (comment) {
          if (comment.id == item.id) {
            return item;
          }

          return comment;
        }));
      });
    }

    return function () {
      Object(_utils_echo__WEBPACK_IMPORTED_MODULE_18__["echo"])().leave('laravel_database_comments_' + (post === null || post === void 0 ? void 0 : post.id));
    };
  });
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("main", {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_layouts_MainLayout__WEBPACK_IMPORTED_MODULE_6__["MainLayout"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "wrapper-center",
        children: [!mq.isXS && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: 'left-side-no-margin',
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_SideBlock__WEBPACK_IMPORTED_MODULE_12__["SideBlock"], {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_MenuList__WEBPACK_IMPORTED_MODULE_13__["MenuList"], {
              items: [{
                name: '????????????????????',
                url: '/popular',
                icon: '/fire.svg',
                isActive: true,
                hasMore: true
              }, {
                name: '??????????',
                url: '/new',
                icon: '/news.svg'
              }]
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 88,
              columnNumber: 33
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 87,
            columnNumber: 29
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_SideBlock__WEBPACK_IMPORTED_MODULE_12__["SideBlock"], {
            name: "\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u0438",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_MenuList__WEBPACK_IMPORTED_MODULE_13__["MenuList"], {
              items: categories.map(function (c) {
                return {
                  name: c.name,
                  url: "/tags/".concat(c.slug),
                  icon: "/".concat(c.slug, ".png")
                };
              })
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 102,
              columnNumber: 33
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 101,
            columnNumber: 29
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_SideBlock__WEBPACK_IMPORTED_MODULE_12__["SideBlock"], {
            name: "\u0422\u0435\u043C\u044B",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Tags__WEBPACK_IMPORTED_MODULE_14__["Tags"], {
              items: themes,
              handleSelect: handleSelectTheme,
              selectedItems: selectedThemes
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 111,
              columnNumber: 33
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 110,
            columnNumber: 29
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 25
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "content",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_FullPost__WEBPACK_IMPORTED_MODULE_7__["FullPost"], {
            post: post,
            onSetLike: handleSetLike
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 121,
            columnNumber: 25
          }, this), post.status === 'active' && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: 'comments',
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_AddCommentBlock__WEBPACK_IMPORTED_MODULE_8__["AddCommentBlock"], {
              onAddComment: onAddComment
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 125,
              columnNumber: 33
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              style: {
                marginTop: 15
              },
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_CommentList__WEBPACK_IMPORTED_MODULE_10__["CommentList"], {
                onSetLike: handleCommentSetLike,
                comments: comments,
                onReplyComment: onAddComment
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 128,
                columnNumber: 37
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 127,
              columnNumber: 33
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 124,
            columnNumber: 29
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 120,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 81,
    columnNumber: 9
  }, this);
}

_s(Post, "0Li55Mqw7ZnRhHndcqjhrVB5eyk=", false, function () {
  return [_utils_useAllMQ__WEBPACK_IMPORTED_MODULE_17__["useAllMQ"], react_redux__WEBPACK_IMPORTED_MODULE_15__["useSelector"], react_redux__WEBPACK_IMPORTED_MODULE_15__["useSelector"], _hooks_useAlert__WEBPACK_IMPORTED_MODULE_19__["useAlert"]];
});

_c = Post;

var _c;

$RefreshReg$(_c, "Post");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcG9zdC9bc2x1Z10udHN4Il0sIm5hbWVzIjpbIlBvc3RDb250ZXh0IiwiUmVhY3QiLCJjcmVhdGVDb250ZXh0IiwiUG9zdCIsInBvc3QiLCJzZXJ2ZXJTaWRlQ29tbWVudHMiLCJtcSIsInVzZUFsbE1RIiwidXNlU3RhdGUiLCJzZWxlY3RlZFRoZW1lcyIsInNldFNlbGVjdGVkVGhlbWVzIiwiY29tbWVudHMiLCJzZXRDb21tZW50cyIsInRoZW1lcyIsInVzZVNlbGVjdG9yIiwic2VsZWN0VGhlbWVzU3RhdGUiLCJjYXRlZ29yaWVzIiwic2VsZWN0Q2F0ZWdvcmllc1N0YXRlIiwidXNlQWxlcnQiLCJvcGVuQWxlcnQiLCJoYW5kbGVTZWxlY3RUaGVtZSIsInQiLCJvbkFkZENvbW1lbnQiLCJ0ZXh0IiwidG9Vc2VySWQiLCJwYXJlbnRJZCIsImNvbW1lbnRJZCIsIkNvbW1lbnRBcGkiLCJzYXZlIiwiaWQiLCJoYW5kbGVDb21tZW50U2V0TGlrZSIsImxpa2UiLCJzZXRMaWtlIiwiaGFuZGxlU2V0TGlrZSIsInBvc3RJZCIsInVzZUVmZmVjdCIsImVjaG8iLCJjaGFubmVsIiwibGlzdGVuIiwiY29tbWVudCIsInBhcmVudF9pZCIsIm1hcCIsIml0ZW0iLCJ1c2VyIiwibmFtZSIsImxlYXZlIiwiaXNYUyIsInVybCIsImljb24iLCJpc0FjdGl2ZSIsImhhc01vcmUiLCJjIiwic2x1ZyIsInN0YXR1cyIsIm1hcmdpblRvcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU8sSUFBTUEsV0FBVyxnQkFBR0MsNENBQUssQ0FBQ0MsYUFBTixDQUFvQixFQUFwQixDQUFwQjtBQUVRLFNBQVNDLElBQVQsT0FBMEM7QUFB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QUFBLG9CQURKLGVBR0k7QUFBSyxtQkFBSyxFQUFFO0FBQUNnQyx5QkFBUyxFQUFFO0FBQVosZUFBWjtBQUFBLHFDQUNJLHFFQUFDLG9FQUFEO0FBQ0kseUJBQVMsRUFBRXhCLG9CQURmO0FBRUksd0JBQVEsRUFBRW5CLFFBRmQ7QUFFd0IsOEJBQWMsRUFBRVc7QUFGeEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBSEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUpSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFyQ0o7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQThESDs7R0F2SHVCbkIsSTtVQUNUSSx5RCxFQUdJTyx3RCxFQUNJQSx3RCxFQUNDSSx5RDs7O0tBTkFmLEkiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcG9zdC9bc2x1Z10uMGU0MjE5M2ZmZmY1ZjJjYzUzOGYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7TGVmdENhdGVnb3JpZXNTaWRlfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL0xlZnRDYXRlZ29yaWVzU2lkZSc7XHJcbmltcG9ydCB7TWFpbkxheW91dH0gZnJvbSAnLi4vLi4vbGF5b3V0cy9NYWluTGF5b3V0JztcclxuaW1wb3J0IHtGdWxsUG9zdH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9GdWxsUG9zdCc7XHJcbmltcG9ydCB7Z2V0UG9zdENvbW1lbnRzLCBzaG93UG9zdH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2FwaS9Qb3N0QXBpXCI7XHJcbmltcG9ydCBUZXh0RmllbGQgZnJvbSAnQG11aS9tYXRlcmlhbC9UZXh0RmllbGQnO1xyXG5pbXBvcnQge0FkZENvbW1lbnRCbG9ja30gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvQWRkQ29tbWVudEJsb2NrXCI7XHJcbmltcG9ydCB7Q29tbWVudEFwaX0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2FwaS9Db21tZW50QXBpXCI7XHJcbmltcG9ydCB7Q29tbWVudExpc3R9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0NvbW1lbnRMaXN0XCI7XHJcbmltcG9ydCB7c2V0TGlrZX0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2FwaS9MaWtlQXBpXCI7XHJcbmltcG9ydCB7U2lkZUJsb2NrfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9TaWRlQmxvY2tcIjtcclxuaW1wb3J0IHtNZW51TGlzdH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvTWVudUxpc3RcIjtcclxuaW1wb3J0IHtUYWdzfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9UYWdzXCI7XHJcbmltcG9ydCB7VGhlbWV9IGZyb20gXCIuLi8uLi9pbnRlcmZhY2VzXCI7XHJcbmltcG9ydCB7dXNlU2VsZWN0b3J9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQge3NlbGVjdENhdGVnb3JpZXNTdGF0ZSwgc2VsZWN0VGhlbWVzU3RhdGV9IGZyb20gXCIuLi8uLi9yZWR1eC9kaXJlY3RvcnkvZGlyZWN0b3J5LnNlbGVjdG9yXCI7XHJcbmltcG9ydCB7dXNlQWxsTVF9IGZyb20gXCIuLi8uLi91dGlscy91c2VBbGxNUVwiO1xyXG5pbXBvcnQge2VjaG99IGZyb20gXCIuLi8uLi91dGlscy9lY2hvXCI7XHJcbmltcG9ydCB7dXNlQWxlcnR9IGZyb20gXCIuLi8uLi9ob29rcy91c2VBbGVydFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IFBvc3RDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dCh7fSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQb3N0KHtwb3N0LCBzZXJ2ZXJTaWRlQ29tbWVudHN9KSB7XHJcbiAgICBjb25zdCBtcSA9IHVzZUFsbE1RKCk7XHJcbiAgICBjb25zdCBbc2VsZWN0ZWRUaGVtZXMsIHNldFNlbGVjdGVkVGhlbWVzXSA9IHVzZVN0YXRlPFRoZW1lW10+KFtdKTtcclxuICAgIGNvbnN0IFtjb21tZW50cywgc2V0Q29tbWVudHNdID0gdXNlU3RhdGUoc2VydmVyU2lkZUNvbW1lbnRzKVxyXG4gICAgY29uc3QgdGhlbWVzID0gdXNlU2VsZWN0b3Ioc2VsZWN0VGhlbWVzU3RhdGUpO1xyXG4gICAgY29uc3QgY2F0ZWdvcmllcyA9IHVzZVNlbGVjdG9yKHNlbGVjdENhdGVnb3JpZXNTdGF0ZSk7XHJcbiAgICBjb25zdCB7b3BlbkFsZXJ0fSA9IHVzZUFsZXJ0KCk7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlU2VsZWN0VGhlbWUgPSBhc3luYyAodDogVGhlbWUpID0+IHtcclxuICAgICAgICBzZXRTZWxlY3RlZFRoZW1lcygoKSA9PiBbLi4uc2VsZWN0ZWRUaGVtZXMsIHRdKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBvbkFkZENvbW1lbnQgPSBhc3luYyAodGV4dDogc3RyaW5nLCB0b1VzZXJJZD86IG51bWJlciwgcGFyZW50SWQ/OiBudW1iZXIsIGNvbW1lbnRJZD86IG51bWJlcikgPT4ge1xyXG4gICAgICAgIGF3YWl0IENvbW1lbnRBcGkuc2F2ZShwb3N0LmlkLCB0ZXh0LCB0b1VzZXJJZCwgcGFyZW50SWQsIGNvbW1lbnRJZCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaGFuZGxlQ29tbWVudFNldExpa2UgPSBhc3luYyAoaWQ6IG51bWJlciwgbGlrZT86ICdsaWtlJyB8ICdkaXNsaWtlJykgPT4ge1xyXG4gICAgICAgIGF3YWl0IHNldExpa2UoaWQsICdjb21tZW50JywgbGlrZSlcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoYW5kbGVTZXRMaWtlID0gYXN5bmMgKHBvc3RJZDogbnVtYmVyLCBsaWtlPzogJ2xpa2UnIHwgJ2Rpc2xpa2UnKSA9PiB7XHJcbiAgICAgICAgYXdhaXQgc2V0TGlrZShwb3N0SWQsICdwb3N0JywgbGlrZSlcclxuICAgIH1cclxuXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgICAgIGVjaG8oKS5jaGFubmVsKCdpbmd0ZXJuZXQtY29tbWVudHNfJyArIHBvc3Q/LmlkKS5saXN0ZW4oJy5uZXctY29tbWVudCcsIGNvbW1lbnQgPT4ge1xyXG4gICAgICAgICAgICAgICAgb3BlbkFsZXJ0KCfQn9C+0Y/QstC40LvRgdGPINC90L7QstGL0Lkg0LrQvtC80LzQtdC90YLQsNGA0LjQuSEnKVxyXG4gICAgICAgICAgICAgICAgc2V0Q29tbWVudHMoIWNvbW1lbnQucGFyZW50X2lkID8gW2NvbW1lbnQsIC4uLmNvbW1lbnRzXSA6IGNvbW1lbnRzLm1hcChpdGVtID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY29tbWVudC5wYXJlbnRfaWQgPT09IGl0ZW0uaWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLml0ZW0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21tZW50czogWy4uLmNvbW1lbnQuY29tbWVudHMsIGNvbW1lbnRdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBpdGVtO1xyXG5cclxuICAgICAgICAgICAgICAgIH0pKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBlY2hvKCkuY2hhbm5lbCgnaW5ndGVybmV0LWNvbW1lbnRzXycgKyBwb3N0Py5pZCkubGlzdGVuKCcudXBkYXRlZC1jb21tZW50JywgaXRlbSA9PiB7XHJcbiAgICAgICAgICAgICAgICBvcGVuQWxlcnQoYNCf0L7Qu9GM0LfQvtCy0LDRgtC10LvRjCAke2l0ZW0udXNlci5uYW1lfSDQuNC30LzQtdC90LjQuyDRgdCy0L7QuSDQutC+0LzQvNC10L3RgtCw0YDQuNC5IWApXHJcbiAgICAgICAgICAgICAgICBzZXRDb21tZW50cyhjb21tZW50cy5tYXAoY29tbWVudCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvbW1lbnQuaWQgPT0gaXRlbS5pZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gaXRlbVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNvbW1lbnQ7XHJcbiAgICAgICAgICAgICAgICB9KSlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgICAgIGVjaG8oKS5sZWF2ZSgnbGFyYXZlbF9kYXRhYmFzZV9jb21tZW50c18nICsgcG9zdD8uaWQpXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxtYWluPlxyXG4gICAgICAgICAgICA8TWFpbkxheW91dD5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid3JhcHBlci1jZW50ZXJcIj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgeyFtcS5pc1hTICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9eydsZWZ0LXNpZGUtbm8tbWFyZ2luJ30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2lkZUJsb2NrPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51TGlzdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtcz17W1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICfQn9C+0L/Rg9C70Y/RgNC90L7QtScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiAnL3BvcHVsYXInLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb246ICcvZmlyZS5zdmcnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzQWN0aXZlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhc01vcmU6IHRydWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bmFtZTogJ9Cd0L7QstC+0LUnLCB1cmw6ICcvbmV3JywgaWNvbjogJy9uZXdzLnN2Zyd9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1NpZGVCbG9jaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTaWRlQmxvY2sgbmFtZT1cItCa0LDRgtC10LPQvtGA0LjQuFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51TGlzdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtcz17Y2F0ZWdvcmllcy5tYXAoYyA9PiAoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogYy5uYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiBgL3RhZ3MvJHtjLnNsdWd9YCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb246IGAvJHtjLnNsdWd9LnBuZ2BcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1NpZGVCbG9jaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTaWRlQmxvY2sgbmFtZT1cItCi0LXQvNGLXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhZ3NcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbXM9e3RoZW1lc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlU2VsZWN0PXtoYW5kbGVTZWxlY3RUaGVtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRJdGVtcz17c2VsZWN0ZWRUaGVtZXN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvU2lkZUJsb2NrPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZ1bGxQb3N0IHBvc3Q9e3Bvc3R9IG9uU2V0TGlrZT17aGFuZGxlU2V0TGlrZX0vPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3Bvc3Quc3RhdHVzID09PSAnYWN0aXZlJyAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J2NvbW1lbnRzJ30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFkZENvbW1lbnRCbG9jayBvbkFkZENvbW1lbnQ9e29uQWRkQ29tbWVudH0vPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7bWFyZ2luVG9wOiAxNX19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29tbWVudExpc3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uU2V0TGlrZT17aGFuZGxlQ29tbWVudFNldExpa2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21tZW50cz17Y29tbWVudHN9IG9uUmVwbHlDb21tZW50PXtvbkFkZENvbW1lbnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvTWFpbkxheW91dD5cclxuICAgICAgICA8L21haW4+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKGN0eCkge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBzaG93UG9zdChjdHgucXVlcnkuc2x1ZywgY3R4LnJlcS5jb29raWVzPy5hdXRoX3Rva2VuKTtcclxuICAgIGNvbnN0IHJlc3BvbnNlQ29tbWVudHMgPSBhd2FpdCBnZXRQb3N0Q29tbWVudHMocmVzcG9uc2UuZGF0YS5pZCwgY3R4LnJlcS5jb29raWVzLmF1dGhfdG9rZW4pO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBwcm9wczoge1xyXG4gICAgICAgICAgICBwb3N0OiByZXNwb25zZS5kYXRhLFxyXG4gICAgICAgICAgICBzZXJ2ZXJTaWRlQ29tbWVudHM6IHJlc3BvbnNlQ29tbWVudHNcclxuICAgICAgICB9LFxyXG4gICAgfVxyXG59XHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9