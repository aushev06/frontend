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
        openAlert('Появился новый комментарий!');
        setComments(!comment.parent_id ? [comment].concat(Object(C_Projects_projects_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__["default"])(comments)) : comments.map(function (item) {
          if (comment.parent_id === item.id) {
            return _objectSpread(_objectSpread({}, item), {}, {
              comments: [].concat(Object(C_Projects_projects_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__["default"])(comment.comments), [comment])
            });
          }

          return item;
        }));
      });
      Object(_utils_echo__WEBPACK_IMPORTED_MODULE_18__["echo"])().channel('ingternet-comments_' + (post === null || post === void 0 ? void 0 : post.id)).listen('.updated-comment', function (data) {
        openAlert("\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C ".concat(data.comment.user.name, " \u0438\u0437\u043C\u0435\u043D\u0438\u043B \u0441\u0432\u043E\u0439 \u043A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439!"));
        setComments(comments.map(function (comment) {
          if (comment.id == data.comment.id) {
            return data.comment;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcG9zdC9bc2x1Z10udHN4Il0sIm5hbWVzIjpbIlBvc3RDb250ZXh0IiwiUmVhY3QiLCJjcmVhdGVDb250ZXh0IiwiUG9zdCIsInBvc3QiLCJzZXJ2ZXJTaWRlQ29tbWVudHMiLCJtcSIsInVzZUFsbE1RIiwidXNlU3RhdGUiLCJzZWxlY3RlZFRoZW1lcyIsInNldFNlbGVjdGVkVGhlbWVzIiwiY29tbWVudHMiLCJzZXRDb21tZW50cyIsInRoZW1lcyIsInVzZVNlbGVjdG9yIiwic2VsZWN0VGhlbWVzU3RhdGUiLCJjYXRlZ29yaWVzIiwic2VsZWN0Q2F0ZWdvcmllc1N0YXRlIiwidXNlQWxlcnQiLCJvcGVuQWxlcnQiLCJoYW5kbGVTZWxlY3RUaGVtZSIsInQiLCJvbkFkZENvbW1lbnQiLCJ0ZXh0IiwidG9Vc2VySWQiLCJwYXJlbnRJZCIsImNvbW1lbnRJZCIsIkNvbW1lbnRBcGkiLCJzYXZlIiwiaWQiLCJoYW5kbGVDb21tZW50U2V0TGlrZSIsImxpa2UiLCJzZXRMaWtlIiwiaGFuZGxlU2V0TGlrZSIsInBvc3RJZCIsInVzZUVmZmVjdCIsImVjaG8iLCJjaGFubmVsIiwibGlzdGVuIiwiY29tbWVudCIsInBhcmVudF9pZCIsIm1hcCIsIml0ZW0iLCJkYXRhIiwidXNlciIsIm5hbWUiLCJsZWF2ZSIsImlzWFMiLCJ1cmwiLCJpY29uIiwiaXNBY3RpdmUiLCJoYXNNb3JlIiwiYyIsInNsdWciLCJzdGF0dXMiLCJtYXJnaW5Ub3AiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPLElBQU1BLFdBQVcsZ0JBQUdDLDRDQUFLLENBQUNDLGFBQU4sQ0FBb0IsRUFBcEIsQ0FBcEI7QUFFUSxTQUFTQyxJQUFULE9B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QUFBaUIsMEJBQVksRUFBRWhDO0FBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREosZUFHSTtBQUFLLG1CQUFLLEVBQUU7QUFBQ2lDLHlCQUFTLEVBQUU7QUFBWixlQUFaO0FBQUEscUNBQ0kscUVBQUMsb0VBQUQ7QUFDSSx5QkFBUyxFQUFFekIsb0JBRGY7QUFFSSx3QkFBUSxFQUFFbkIsUUFGZDtBQUV3Qiw4QkFBYyxFQUFFVztBQUZ4QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFISjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBSlI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQXJDSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBOERIOztHQXZIdUJuQixJO1VBQ1RJLHlELEVBR0lPLHdELEVBQ0lBLHdELEVBQ0NJLHlEOzs7S0FOQWYsSSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wb3N0L1tzbHVnXS5jMjQ3ZGUyZWZjY2VjNDJkMjE0ZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtMZWZ0Q2F0ZWdvcmllc1NpZGV9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvTGVmdENhdGVnb3JpZXNTaWRlJztcclxuaW1wb3J0IHtNYWluTGF5b3V0fSBmcm9tICcuLi8uLi9sYXlvdXRzL01haW5MYXlvdXQnO1xyXG5pbXBvcnQge0Z1bGxQb3N0fSBmcm9tICcuLi8uLi9jb21wb25lbnRzL0Z1bGxQb3N0JztcclxuaW1wb3J0IHtnZXRQb3N0Q29tbWVudHMsIHNob3dQb3N0fSBmcm9tIFwiLi4vLi4vc2VydmljZXMvYXBpL1Bvc3RBcGlcIjtcclxuaW1wb3J0IFRleHRGaWVsZCBmcm9tICdAbXVpL21hdGVyaWFsL1RleHRGaWVsZCc7XHJcbmltcG9ydCB7QWRkQ29tbWVudEJsb2NrfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9BZGRDb21tZW50QmxvY2tcIjtcclxuaW1wb3J0IHtDb21tZW50QXBpfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvYXBpL0NvbW1lbnRBcGlcIjtcclxuaW1wb3J0IHtDb21tZW50TGlzdH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvQ29tbWVudExpc3RcIjtcclxuaW1wb3J0IHtzZXRMaWtlfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvYXBpL0xpa2VBcGlcIjtcclxuaW1wb3J0IHtTaWRlQmxvY2t9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1NpZGVCbG9ja1wiO1xyXG5pbXBvcnQge01lbnVMaXN0fSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9NZW51TGlzdFwiO1xyXG5pbXBvcnQge1RhZ3N9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1RhZ3NcIjtcclxuaW1wb3J0IHtUaGVtZX0gZnJvbSBcIi4uLy4uL2ludGVyZmFjZXNcIjtcclxuaW1wb3J0IHt1c2VTZWxlY3Rvcn0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7c2VsZWN0Q2F0ZWdvcmllc1N0YXRlLCBzZWxlY3RUaGVtZXNTdGF0ZX0gZnJvbSBcIi4uLy4uL3JlZHV4L2RpcmVjdG9yeS9kaXJlY3Rvcnkuc2VsZWN0b3JcIjtcclxuaW1wb3J0IHt1c2VBbGxNUX0gZnJvbSBcIi4uLy4uL3V0aWxzL3VzZUFsbE1RXCI7XHJcbmltcG9ydCB7ZWNob30gZnJvbSBcIi4uLy4uL3V0aWxzL2VjaG9cIjtcclxuaW1wb3J0IHt1c2VBbGVydH0gZnJvbSBcIi4uLy4uL2hvb2tzL3VzZUFsZXJ0XCI7XHJcblxyXG5leHBvcnQgY29uc3QgUG9zdENvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KHt9KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBvc3Qoe3Bvc3QsIHNlcnZlclNpZGVDb21tZW50c30pIHtcclxuICAgIGNvbnN0IG1xID0gdXNlQWxsTVEoKTtcclxuICAgIGNvbnN0IFtzZWxlY3RlZFRoZW1lcywgc2V0U2VsZWN0ZWRUaGVtZXNdID0gdXNlU3RhdGU8VGhlbWVbXT4oW10pO1xyXG4gICAgY29uc3QgW2NvbW1lbnRzLCBzZXRDb21tZW50c10gPSB1c2VTdGF0ZShzZXJ2ZXJTaWRlQ29tbWVudHMpXHJcbiAgICBjb25zdCB0aGVtZXMgPSB1c2VTZWxlY3RvcihzZWxlY3RUaGVtZXNTdGF0ZSk7XHJcbiAgICBjb25zdCBjYXRlZ29yaWVzID0gdXNlU2VsZWN0b3Ioc2VsZWN0Q2F0ZWdvcmllc1N0YXRlKTtcclxuICAgIGNvbnN0IHtvcGVuQWxlcnR9ID0gdXNlQWxlcnQoKTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVTZWxlY3RUaGVtZSA9IGFzeW5jICh0OiBUaGVtZSkgPT4ge1xyXG4gICAgICAgIHNldFNlbGVjdGVkVGhlbWVzKCgpID0+IFsuLi5zZWxlY3RlZFRoZW1lcywgdF0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IG9uQWRkQ29tbWVudCA9IGFzeW5jICh0ZXh0OiBzdHJpbmcsIHRvVXNlcklkPzogbnVtYmVyLCBwYXJlbnRJZD86IG51bWJlciwgY29tbWVudElkPzogbnVtYmVyKSA9PiB7XHJcbiAgICAgICAgYXdhaXQgQ29tbWVudEFwaS5zYXZlKHBvc3QuaWQsIHRleHQsIHRvVXNlcklkLCBwYXJlbnRJZCwgY29tbWVudElkKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoYW5kbGVDb21tZW50U2V0TGlrZSA9IGFzeW5jIChpZDogbnVtYmVyLCBsaWtlPzogJ2xpa2UnIHwgJ2Rpc2xpa2UnKSA9PiB7XHJcbiAgICAgICAgYXdhaXQgc2V0TGlrZShpZCwgJ2NvbW1lbnQnLCBsaWtlKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZVNldExpa2UgPSBhc3luYyAocG9zdElkOiBudW1iZXIsIGxpa2U/OiAnbGlrZScgfCAnZGlzbGlrZScpID0+IHtcclxuICAgICAgICBhd2FpdCBzZXRMaWtlKHBvc3RJZCwgJ3Bvc3QnLCBsaWtlKVxyXG4gICAgfVxyXG5cclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICAgICAgZWNobygpLmNoYW5uZWwoJ2luZ3Rlcm5ldC1jb21tZW50c18nICsgcG9zdD8uaWQpLmxpc3RlbignLm5ldy1jb21tZW50JywgY29tbWVudCA9PiB7XHJcbiAgICAgICAgICAgICAgICBvcGVuQWxlcnQoJ9Cf0L7Rj9Cy0LjQu9GB0Y8g0L3QvtCy0YvQuSDQutC+0LzQvNC10L3RgtCw0YDQuNC5IScpXHJcbiAgICAgICAgICAgICAgICBzZXRDb21tZW50cyghY29tbWVudC5wYXJlbnRfaWQgPyBbY29tbWVudCwgLi4uY29tbWVudHNdIDogY29tbWVudHMubWFwKGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjb21tZW50LnBhcmVudF9pZCA9PT0gaXRlbS5pZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4uaXRlbSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbW1lbnRzOiBbLi4uY29tbWVudC5jb21tZW50cywgY29tbWVudF1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW07XHJcblxyXG4gICAgICAgICAgICAgICAgfSkpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIGVjaG8oKS5jaGFubmVsKCdpbmd0ZXJuZXQtY29tbWVudHNfJyArIHBvc3Q/LmlkKS5saXN0ZW4oJy51cGRhdGVkLWNvbW1lbnQnLCBkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgIG9wZW5BbGVydChg0J/QvtC70YzQt9C+0LLQsNGC0LXQu9GMICR7ZGF0YS5jb21tZW50LnVzZXIubmFtZX0g0LjQt9C80LXQvdC40Lsg0YHQstC+0Lkg0LrQvtC80LzQtdC90YLQsNGA0LjQuSFgKVxyXG4gICAgICAgICAgICAgICAgc2V0Q29tbWVudHMoY29tbWVudHMubWFwKGNvbW1lbnQgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjb21tZW50LmlkID09IGRhdGEuY29tbWVudC5pZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGF0YS5jb21tZW50XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gY29tbWVudDtcclxuICAgICAgICAgICAgICAgIH0pKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICAgICAgZWNobygpLmxlYXZlKCdsYXJhdmVsX2RhdGFiYXNlX2NvbW1lbnRzXycgKyBwb3N0Py5pZClcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPG1haW4+XHJcbiAgICAgICAgICAgIDxNYWluTGF5b3V0PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3cmFwcGVyLWNlbnRlclwiPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICB7IW1xLmlzWFMgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J2xlZnQtc2lkZS1uby1tYXJnaW4nfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTaWRlQmxvY2s+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVMaXN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zPXtbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ9Cf0L7Qv9GD0LvRj9GA0L3QvtC1JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmw6ICcvcG9wdWxhcicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogJy9maXJlLnN2ZycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNBY3RpdmU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFzTW9yZTogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtuYW1lOiAn0J3QvtCy0L7QtScsIHVybDogJy9uZXcnLCBpY29uOiAnL25ld3Muc3ZnJ30sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvU2lkZUJsb2NrPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNpZGVCbG9jayBuYW1lPVwi0JrQsNGC0LXQs9C+0YDQuNC4XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVMaXN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zPXtjYXRlZ29yaWVzLm1hcChjID0+ICh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBjLm5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmw6IGAvdGFncy8ke2Muc2x1Z31gLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogYC8ke2Muc2x1Z30ucG5nYFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvU2lkZUJsb2NrPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNpZGVCbG9jayBuYW1lPVwi0KLQtdC80YtcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFnc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtcz17dGhlbWVzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVTZWxlY3Q9e2hhbmRsZVNlbGVjdFRoZW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZEl0ZW1zPXtzZWxlY3RlZFRoZW1lc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9TaWRlQmxvY2s+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8RnVsbFBvc3QgcG9zdD17cG9zdH0gb25TZXRMaWtlPXtoYW5kbGVTZXRMaWtlfS8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7cG9zdC5zdGF0dXMgPT09ICdhY3RpdmUnICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsnY29tbWVudHMnfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QWRkQ29tbWVudEJsb2NrIG9uQWRkQ29tbWVudD17b25BZGRDb21tZW50fS8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3ttYXJnaW5Ub3A6IDE1fX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb21tZW50TGlzdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25TZXRMaWtlPXtoYW5kbGVDb21tZW50U2V0TGlrZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbW1lbnRzPXtjb21tZW50c30gb25SZXBseUNvbW1lbnQ9e29uQWRkQ29tbWVudH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9NYWluTGF5b3V0PlxyXG4gICAgICAgIDwvbWFpbj5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY3R4KSB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHNob3dQb3N0KGN0eC5xdWVyeS5zbHVnLCBjdHgucmVxLmNvb2tpZXM/LmF1dGhfdG9rZW4pO1xyXG4gICAgY29uc3QgcmVzcG9uc2VDb21tZW50cyA9IGF3YWl0IGdldFBvc3RDb21tZW50cyhyZXNwb25zZS5kYXRhLmlkLCBjdHgucmVxLmNvb2tpZXMuYXV0aF90b2tlbik7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHByb3BzOiB7XHJcbiAgICAgICAgICAgIHBvc3Q6IHJlc3BvbnNlLmRhdGEsXHJcbiAgICAgICAgICAgIHNlcnZlclNpZGVDb21tZW50czogcmVzcG9uc2VDb21tZW50c1xyXG4gICAgICAgIH0sXHJcbiAgICB9XHJcbn1cclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=