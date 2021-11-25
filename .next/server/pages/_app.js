module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

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

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/CssBaseline */ "@material-ui/core/CssBaseline");
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../theme */ "./theme.js");
/* harmony import */ var _styles_app_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/app.scss */ "./styles/app.scss");
/* harmony import */ var _styles_app_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_app_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../redux/store */ "./redux/store.ts");
/* harmony import */ var _redux_user_slice__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../redux/user/slice */ "./redux/user/slice.ts");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _redux_user_user_selector__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../redux/user/user.selector */ "./redux/user/user.selector.ts");
/* harmony import */ var _services_api_UserApi__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../services/api/UserApi */ "./services/api/UserApi.ts");
/* harmony import */ var _services_api_DirectoryApi__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../services/api/DirectoryApi */ "./services/api/DirectoryApi.ts");
/* harmony import */ var _redux_directory_slice__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../redux/directory/slice */ "./redux/directory/slice.ts");
/* harmony import */ var _hooks_useAlert__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../hooks/useAlert */ "./hooks/useAlert.ts");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _material_ui_lab_Alert__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/lab/Alert */ "@material-ui/lab/Alert");
/* harmony import */ var _material_ui_lab_Alert__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_material_ui_lab_Alert__WEBPACK_IMPORTED_MODULE_15__);

var _jsxFileName = "C:\\Projects\\projects\\frontend\\pages\\_app.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

















function MyApp({
  Component,
  pageProps
}) {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_8__["useDispatch"])();
  const user = Object(react_redux__WEBPACK_IMPORTED_MODULE_8__["useSelector"])(_redux_user_user_selector__WEBPACK_IMPORTED_MODULE_9__["selectUserState"]);
  react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(() => {
    var _window;

    if ((_window = window) !== null && _window !== void 0 && _window.location.search.includes('token')) {
      var _window2;

      const splitToken = (_window2 = window) === null || _window2 === void 0 ? void 0 : _window2.location.search.split('=');
      const token = splitToken[splitToken.length - 1];
      window.document.cookie = `auth_token=${token.replace('%7C', '|')}`;
      window.localStorage.setItem('token', token.replace('%7C', '|'));
      _services_api_UserApi__WEBPACK_IMPORTED_MODULE_10__["UserApi"].getMe().then(responseUser => {
        dispatch(Object(_redux_user_slice__WEBPACK_IMPORTED_MODULE_7__["setUser"])(responseUser));
      });
    }

    if (!user && localStorage.getItem('token')) {
      _services_api_UserApi__WEBPACK_IMPORTED_MODULE_10__["UserApi"].getMe().then(responseUser => {
        dispatch(Object(_redux_user_slice__WEBPACK_IMPORTED_MODULE_7__["setUser"])(responseUser));
      });
    }

    const jssStyles = document.querySelector('#jss-server-side');

    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);
  const [alertInfo, setAlertInfo] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState({
    text: '',
    status: 'info',
    opened: false
  });

  const openAlert = (text, status = 'info') => {
    setAlertInfo({
      text,
      status,
      opened: true
    });
  };

  const closeAlert = () => {
    setAlertInfo(prev => _objectSpread(_objectSpread({}, prev), {}, {
      opened: false
    }));
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["ThemeProvider"], {
      theme: _theme__WEBPACK_IMPORTED_MODULE_4__["default"],
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_3___default.a, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_hooks_useAlert__WEBPACK_IMPORTED_MODULE_13__["AlertContext"].Provider, {
        value: {
          alertInfo,
          openAlert,
          closeAlert
        },
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Component, _objectSpread({}, pageProps), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_14__["Snackbar"], {
        TransitionComponent: _material_ui_core__WEBPACK_IMPORTED_MODULE_14__["Slide"],
        anchorOrigin: {
          vertical: 'top',
          horizontal: 'right'
        },
        open: alertInfo.opened,
        autoHideDuration: 4500,
        onClose: closeAlert,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_lab_Alert__WEBPACK_IMPORTED_MODULE_15___default.a, {
          severity: alertInfo.status,
          children: alertInfo.text
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 84,
          columnNumber: 21
        }, this)
      }, _material_ui_core__WEBPACK_IMPORTED_MODULE_14__["Slide"].name, false, {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 69,
    columnNumber: 9
  }, this);
}

MyApp.getInitialProps = _redux_store__WEBPACK_IMPORTED_MODULE_6__["wrapper"].getInitialAppProps(store => async ({
  Component,
  ctx
}) => {
  var _ctx$req, _ctx$req$cookies;

  const data = await _services_api_DirectoryApi__WEBPACK_IMPORTED_MODULE_11__["DirectoryApi"].get({
    categories: true,
    themes: true
  });
  store.dispatch(Object(_redux_directory_slice__WEBPACK_IMPORTED_MODULE_12__["setDirectories"])(data)); // @ts-ignore

  const token = ctx === null || ctx === void 0 ? void 0 : (_ctx$req = ctx.req) === null || _ctx$req === void 0 ? void 0 : (_ctx$req$cookies = _ctx$req.cookies) === null || _ctx$req$cookies === void 0 ? void 0 : _ctx$req$cookies.auth_token;

  if (token) {
    try {
      const user = await _services_api_UserApi__WEBPACK_IMPORTED_MODULE_10__["UserApi"].getMe(token);
      store.dispatch(Object(_redux_user_slice__WEBPACK_IMPORTED_MODULE_7__["setUser"])(user));
      store.dispatch(Object(_redux_user_slice__WEBPACK_IMPORTED_MODULE_7__["setNotifications"])(await _services_api_UserApi__WEBPACK_IMPORTED_MODULE_10__["UserApi"].getNotifications(token)));
    } catch (e) {
      console.log(e);
    }
  }

  return {
    pageProps: _objectSpread(_objectSpread({}, Component.getInitialProps ? await Component.getInitialProps(_objectSpread(_objectSpread({}, ctx), {}, {
      store
    })) : {}), {}, {
      // Some custom thing for all pages
      pathname: ctx.pathname
    })
  };
});
/* harmony default export */ __webpack_exports__["default"] = (_redux_store__WEBPACK_IMPORTED_MODULE_6__["wrapper"].withRedux(MyApp));

/***/ }),

/***/ "./redux/directory/slice.ts":
/*!**********************************!*\
  !*** ./redux/directory/slice.ts ***!
  \**********************************/
/*! exports provided: directorySlice, setDirectories, directoryReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "directorySlice", function() { return directorySlice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setDirectories", function() { return setDirectories; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "directoryReducer", function() { return directoryReducer; });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "@reduxjs/toolkit");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const directorySlice = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createSlice"])({
  name: 'directory',
  initialState: {
    data: {
      categories: [],
      themes: []
    }
  },
  reducers: {
    setDirectories: (state, action) => {
      state.data.categories = action.payload.categories;
      state.data.themes = action.payload.themes;
      return state;
    }
  },
  extraReducers: {
    [next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__["HYDRATE"]]: (state, action) => {
      return _objectSpread(_objectSpread({}, state), action.payload.directory);
    }
  }
}); // Action creators are generated for each case reducer function

const {
  setDirectories
} = directorySlice.actions;
const {
  reducer: directoryReducer
} = directorySlice;

/***/ }),

/***/ "./redux/store.ts":
/*!************************!*\
  !*** ./redux/store.ts ***!
  \************************/
/*! exports provided: makeStore, wrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeStore", function() { return makeStore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wrapper", function() { return wrapper; });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "@reduxjs/toolkit");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _user_slice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user/slice */ "./redux/user/slice.ts");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _directory_slice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./directory/slice */ "./redux/directory/slice.ts");




const makeStore = () => Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["configureStore"])({
  reducer: {
    user: _user_slice__WEBPACK_IMPORTED_MODULE_1__["userReducer"],
    directory: _directory_slice__WEBPACK_IMPORTED_MODULE_3__["directoryReducer"]
  }
});
const wrapper = Object(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_2__["createWrapper"])(makeStore);

/***/ }),

/***/ "./redux/user/slice.ts":
/*!*****************************!*\
  !*** ./redux/user/slice.ts ***!
  \*****************************/
/*! exports provided: userSlice, setUser, setNotifications, userReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userSlice", function() { return userSlice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setUser", function() { return setUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setNotifications", function() { return setNotifications; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userReducer", function() { return userReducer; });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "@reduxjs/toolkit");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const userSlice = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__["createSlice"])({
  name: 'user',
  initialState: {
    data: undefined,
    notifications: []
  },
  reducers: {
    setUser: (state, action) => {
      state.data = action.payload;
      return state;
    },
    setNotifications: (state, action) => {
      state.notifications = action.payload;
      return state;
    }
  },
  extraReducers: {
    [next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__["HYDRATE"]]: (state, action) => {
      return _objectSpread(_objectSpread(_objectSpread({}, state), action.payload.user), action.payload.notifications);
    }
  }
}); // Action creators are generated for each case reducer function

const {
  setUser
} = userSlice.actions;
const {
  setNotifications
} = userSlice.actions;
const {
  reducer: userReducer
} = userSlice;

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

/***/ "./services/api/DirectoryApi.ts":
/*!**************************************!*\
  !*** ./services/api/DirectoryApi.ts ***!
  \**************************************/
/*! exports provided: DirectoryApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DirectoryApi", function() { return DirectoryApi; });
/* harmony import */ var _core_axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/axios */ "./core/axios.ts");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


class DirectoryApi {}

_defineProperty(DirectoryApi, "get", async (params = {
  categories: true,
  themes: true
}) => {
  const {
    data
  } = await _core_axios__WEBPACK_IMPORTED_MODULE_0__["default"].get('/api/directories', {
    params
  });
  return data;
});

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

/***/ "./styles/app.scss":
/*!*************************!*\
  !*** ./styles/app.scss ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./theme.js":
/*!******************!*\
  !*** ./theme.js ***!
  \******************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__);

const theme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__["createTheme"])({
  palette: {
    background: {
      default: 'var(--background-color)'
    },
    text: {
      primary: '#d0d0dd'
    }
  },
  shadows: ['none'],
  spacing: ['var(--spacing--10)', 'var(--spacing--20)', 'var(--spacing--30)', 'var(--spacing--40)', 'var(--spacing--50)'],
  typography: {
    fontFamily: 'var(--font--family--base)'
  }
});
/* harmony default export */ __webpack_exports__["default"] = (theme);

/***/ }),

/***/ 0:
/*!*****************************************!*\
  !*** multi private-next-pages/_app.tsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.tsx */"./pages/_app.tsx");


/***/ }),

/***/ "@material-ui/core":
/*!************************************!*\
  !*** external "@material-ui/core" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core");

/***/ }),

/***/ "@material-ui/core/CssBaseline":
/*!************************************************!*\
  !*** external "@material-ui/core/CssBaseline" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CssBaseline");

/***/ }),

/***/ "@material-ui/core/styles":
/*!*******************************************!*\
  !*** external "@material-ui/core/styles" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "@material-ui/lab/Alert":
/*!*****************************************!*\
  !*** external "@material-ui/lab/Alert" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/lab/Alert");

/***/ }),

/***/ "@reduxjs/toolkit":
/*!***********************************!*\
  !*** external "@reduxjs/toolkit" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29yZS9heGlvcy50cyIsIndlYnBhY2s6Ly8vLi9ob29rcy91c2VBbGVydC50cyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLnRzeCIsIndlYnBhY2s6Ly8vLi9yZWR1eC9kaXJlY3Rvcnkvc2xpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vcmVkdXgvc3RvcmUudHMiLCJ3ZWJwYWNrOi8vLy4vcmVkdXgvdXNlci9zbGljZS50cyIsIndlYnBhY2s6Ly8vLi9yZWR1eC91c2VyL3VzZXIuc2VsZWN0b3IudHMiLCJ3ZWJwYWNrOi8vLy4vc2VydmljZXMvYXBpL0RpcmVjdG9yeUFwaS50cyIsIndlYnBhY2s6Ly8vLi9zZXJ2aWNlcy9hcGkvVXNlckFwaS50cyIsIndlYnBhY2s6Ly8vLi90aGVtZS5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0Nzc0Jhc2VsaW5lXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2xhYi9BbGVydFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkByZWR1eGpzL3Rvb2xraXRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQtcmVkdXgtd3JhcHBlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtcmVkdXhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJuYW1lcyI6WyJBUElfVVJMIiwiaW5zdGFuY2UiLCJBeGlvcyIsImNyZWF0ZSIsImJhc2VVUkwiLCJ3aXRoQ3JlZGVudGlhbHMiLCJpbnRlcmNlcHRvcnMiLCJyZXF1ZXN0IiwidXNlIiwiY29uZmlnIiwiQWxlcnRDb250ZXh0IiwiUmVhY3QiLCJjcmVhdGVDb250ZXh0IiwidXNlQWxlcnQiLCJ1c2VDb250ZXh0IiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwidXNlciIsInVzZVNlbGVjdG9yIiwic2VsZWN0VXNlclN0YXRlIiwidXNlRWZmZWN0Iiwid2luZG93IiwibG9jYXRpb24iLCJzZWFyY2giLCJpbmNsdWRlcyIsInNwbGl0VG9rZW4iLCJzcGxpdCIsInRva2VuIiwibGVuZ3RoIiwiZG9jdW1lbnQiLCJjb29raWUiLCJyZXBsYWNlIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsIlVzZXJBcGkiLCJnZXRNZSIsInRoZW4iLCJyZXNwb25zZVVzZXIiLCJzZXRVc2VyIiwiZ2V0SXRlbSIsImpzc1N0eWxlcyIsInF1ZXJ5U2VsZWN0b3IiLCJwYXJlbnRFbGVtZW50IiwicmVtb3ZlQ2hpbGQiLCJhbGVydEluZm8iLCJzZXRBbGVydEluZm8iLCJ1c2VTdGF0ZSIsInRleHQiLCJzdGF0dXMiLCJvcGVuZWQiLCJvcGVuQWxlcnQiLCJjbG9zZUFsZXJ0IiwicHJldiIsInRoZW1lIiwiU2xpZGUiLCJ2ZXJ0aWNhbCIsImhvcml6b250YWwiLCJuYW1lIiwiZ2V0SW5pdGlhbFByb3BzIiwid3JhcHBlciIsImdldEluaXRpYWxBcHBQcm9wcyIsInN0b3JlIiwiY3R4IiwiZGF0YSIsIkRpcmVjdG9yeUFwaSIsImdldCIsImNhdGVnb3JpZXMiLCJ0aGVtZXMiLCJzZXREaXJlY3RvcmllcyIsInJlcSIsImNvb2tpZXMiLCJhdXRoX3Rva2VuIiwic2V0Tm90aWZpY2F0aW9ucyIsImdldE5vdGlmaWNhdGlvbnMiLCJlIiwiY29uc29sZSIsImxvZyIsInBhdGhuYW1lIiwid2l0aFJlZHV4IiwiZGlyZWN0b3J5U2xpY2UiLCJjcmVhdGVTbGljZSIsImluaXRpYWxTdGF0ZSIsInJlZHVjZXJzIiwic3RhdGUiLCJhY3Rpb24iLCJwYXlsb2FkIiwiZXh0cmFSZWR1Y2VycyIsIkhZRFJBVEUiLCJkaXJlY3RvcnkiLCJhY3Rpb25zIiwicmVkdWNlciIsImRpcmVjdG9yeVJlZHVjZXIiLCJtYWtlU3RvcmUiLCJjb25maWd1cmVTdG9yZSIsInVzZXJSZWR1Y2VyIiwiY3JlYXRlV3JhcHBlciIsInVzZXJTbGljZSIsInVuZGVmaW5lZCIsIm5vdGlmaWNhdGlvbnMiLCJzZWxlY3RVc2VyTm90aWZpY2F0aW9ucyIsInBhcmFtcyIsImF4aW9zIiwibG9naW4iLCJlbWFpbCIsInBhc3N3b3JkIiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsImFwcGVuZCIsInBvc3QiLCJtYXhSZWRpcmVjdHMiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsInNob3ciLCJpZCIsInVwZGF0ZVByb2ZpbGUiLCJPYmplY3QiLCJrZXlzIiwiZm9yRWFjaCIsInBhcmFtIiwibGlua3MiLCJtYXAiLCJsIiwia2V5IiwicGF0Y2giLCJnZXRDb29raWUiLCJjcmVhdGVUaGVtZSIsInBhbGV0dGUiLCJiYWNrZ3JvdW5kIiwiZGVmYXVsdCIsInByaW1hcnkiLCJzaGFkb3dzIiwic3BhY2luZyIsInR5cG9ncmFwaHkiLCJmb250RmFtaWx5Il0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFD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Ozs7Ozs7Ozs7OztBQ3hCQSw4Qzs7Ozs7Ozs7Ozs7QUNBQSwwRDs7Ozs7Ozs7Ozs7QUNBQSxxRDs7Ozs7Ozs7Ozs7QUNBQSxtRDs7Ozs7Ozs7Ozs7QUNBQSw2Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSwrQzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxrRCIsImZpbGUiOiJwYWdlcy9fYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiaW1wb3J0IEF4aW9zIGZyb20gJ2F4aW9zJztcclxuXHJcbmV4cG9ydCBjb25zdCBBUElfVVJMID0gJ2h0dHA6Ly9sb2NhbGhvc3QnO1xyXG5cclxuY29uc3QgaW5zdGFuY2UgPSBBeGlvcy5jcmVhdGUoe1xyXG4gIGJhc2VVUkw6IEFQSV9VUkwsXHJcbiAgd2l0aENyZWRlbnRpYWxzOiB0cnVlLFxyXG59KTtcclxuXHJcbmluc3RhbmNlLmludGVyY2VwdG9ycy5yZXF1ZXN0LnVzZSgoY29uZmlnKSA9PiB7XHJcbiAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cclxuICAgIGNvbmZpZy5oZWFkZXJzLkF1dGhvcml6YXRpb24gPSBgQmVhcmVyICR7d2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpPy5yZXBsYWNlKCclN0MnLCAnfCcpfWA7XHJcbiAgfVxyXG4gIHJldHVybiBjb25maWc7XHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgaW5zdGFuY2U7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge0NvbG9yfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2xhYi9BbGVydFwiO1xyXG5cclxuZXhwb3J0IHR5cGUgQWxlcnRDb250ZXh0UHJvcHMgPSB7XHJcbiAgYWxlcnRJbmZvOiB7IHRleHQ6IFJlYWN0LlJlYWN0Tm9kZTsgc3RhdHVzOiBDb2xvcjsgb3BlbmVkOiBib29sZWFuIH07XHJcbiAgb3BlbkFsZXJ0OiAodGV4dDogUmVhY3QuUmVhY3ROb2RlLCBzdGF0dXM/OiBzdHJpbmcpID0+IHZvaWQ7XHJcbiAgY2xvc2VBbGVydDogKCkgPT4gdm9pZDtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBBbGVydENvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KHt9IGFzIEFsZXJ0Q29udGV4dFByb3BzKTtcclxuXHJcbmV4cG9ydCBjb25zdCB1c2VBbGVydCA9ICgpOiBBbGVydENvbnRleHRQcm9wcyA9PiB7XHJcbiAgcmV0dXJuIHVzZUNvbnRleHQoQWxlcnRDb250ZXh0KTtcclxufTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtUaGVtZVByb3ZpZGVyfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xyXG5pbXBvcnQgQ3NzQmFzZWxpbmUgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ3NzQmFzZWxpbmUnO1xyXG5pbXBvcnQgdGhlbWUgZnJvbSAnLi4vdGhlbWUnO1xyXG5pbXBvcnQgJy4uL3N0eWxlcy9hcHAuc2Nzcyc7XHJcbmltcG9ydCB7d3JhcHBlcn0gZnJvbSBcIi4uL3JlZHV4L3N0b3JlXCI7XHJcbmltcG9ydCB7c2V0Tm90aWZpY2F0aW9ucywgc2V0VXNlciwgdXNlclNsaWNlfSBmcm9tIFwiLi4vcmVkdXgvdXNlci9zbGljZVwiO1xyXG5pbXBvcnQge3VzZURpc3BhdGNoLCB1c2VTZWxlY3Rvcn0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7c2VsZWN0VXNlclN0YXRlfSBmcm9tIFwiLi4vcmVkdXgvdXNlci91c2VyLnNlbGVjdG9yXCI7XHJcbmltcG9ydCB7Z2V0Q29va2llLCBVc2VyQXBpfSBmcm9tIFwiLi4vc2VydmljZXMvYXBpL1VzZXJBcGlcIjtcclxuaW1wb3J0IHtnZXRDYXRlZ29yaWVzfSBmcm9tIFwiLi4vc2VydmljZXMvYXBpL0NhdGVnb3J5QXBpXCI7XHJcbmltcG9ydCB7RGlyZWN0b3J5QXBpfSBmcm9tIFwiLi4vc2VydmljZXMvYXBpL0RpcmVjdG9yeUFwaVwiO1xyXG5pbXBvcnQge3NldERpcmVjdG9yaWVzfSBmcm9tIFwiLi4vcmVkdXgvZGlyZWN0b3J5L3NsaWNlXCI7XHJcbmltcG9ydCB7QWxlcnRDb250ZXh0LCBBbGVydENvbnRleHRQcm9wc30gZnJvbSAnLi4vaG9va3MvdXNlQWxlcnQnO1xyXG5pbXBvcnQge1NsaWRlLCBTbmFja2Jhcn0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcblxyXG5pbXBvcnQgTXVpQWxlcnQsIHtDb2xvcn0gZnJvbSAnQG1hdGVyaWFsLXVpL2xhYi9BbGVydCc7XHJcblxyXG5mdW5jdGlvbiBNeUFwcCh7Q29tcG9uZW50LCBwYWdlUHJvcHN9KSB7XHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgICBjb25zdCB1c2VyID0gdXNlU2VsZWN0b3Ioc2VsZWN0VXNlclN0YXRlKVxyXG5cclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKHdpbmRvdz8ubG9jYXRpb24uc2VhcmNoLmluY2x1ZGVzKCd0b2tlbicpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHNwbGl0VG9rZW4gPSB3aW5kb3c/LmxvY2F0aW9uLnNlYXJjaC5zcGxpdCgnPScpO1xyXG4gICAgICAgICAgICBjb25zdCB0b2tlbiA9IHNwbGl0VG9rZW5bc3BsaXRUb2tlbi5sZW5ndGggLSAxXTtcclxuICAgICAgICAgICAgd2luZG93LmRvY3VtZW50LmNvb2tpZSA9IGBhdXRoX3Rva2VuPSR7dG9rZW4ucmVwbGFjZSgnJTdDJywgJ3wnKX1gO1xyXG4gICAgICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rva2VuJywgdG9rZW4ucmVwbGFjZSgnJTdDJywgJ3wnKSlcclxuICAgICAgICAgICAgVXNlckFwaS5nZXRNZSgpLnRoZW4ocmVzcG9uc2VVc2VyID0+IHtcclxuICAgICAgICAgICAgICAgIGRpc3BhdGNoKHNldFVzZXIocmVzcG9uc2VVc2VyKSlcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIXVzZXIgJiYgbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJykpIHtcclxuICAgICAgICAgICAgVXNlckFwaS5nZXRNZSgpLnRoZW4ocmVzcG9uc2VVc2VyID0+IHtcclxuICAgICAgICAgICAgICAgIGRpc3BhdGNoKHNldFVzZXIocmVzcG9uc2VVc2VyKSlcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgY29uc3QganNzU3R5bGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2pzcy1zZXJ2ZXItc2lkZScpO1xyXG4gICAgICAgIGlmIChqc3NTdHlsZXMpIHtcclxuICAgICAgICAgICAganNzU3R5bGVzLnBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQoanNzU3R5bGVzKTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgY29uc3QgW2FsZXJ0SW5mbywgc2V0QWxlcnRJbmZvXSA9IFJlYWN0LnVzZVN0YXRlPEFsZXJ0Q29udGV4dFByb3BzWydhbGVydEluZm8nXT4oe1xyXG4gICAgICAgIHRleHQ6ICcnLFxyXG4gICAgICAgIHN0YXR1czogJ2luZm8nLFxyXG4gICAgICAgIG9wZW5lZDogZmFsc2UsXHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBvcGVuQWxlcnQgPSAodGV4dDogUmVhY3QuUmVhY3ROb2RlLCBzdGF0dXM6IENvbG9yID0gJ2luZm8nKTogdm9pZCA9PiB7XHJcbiAgICAgICAgc2V0QWxlcnRJbmZvKHtcclxuICAgICAgICAgICAgdGV4dCxcclxuICAgICAgICAgICAgc3RhdHVzLFxyXG4gICAgICAgICAgICBvcGVuZWQ6IHRydWUsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGNsb3NlQWxlcnQgPSAoKTogdm9pZCA9PiB7XHJcbiAgICAgICAgc2V0QWxlcnRJbmZvKChwcmV2KSA9PiAoe1xyXG4gICAgICAgICAgICAuLi5wcmV2LFxyXG4gICAgICAgICAgICBvcGVuZWQ6IGZhbHNlLFxyXG4gICAgICAgIH0pKTtcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgIDxUaGVtZVByb3ZpZGVyIHRoZW1lPXt0aGVtZX0+XHJcbiAgICAgICAgICAgICAgICA8Q3NzQmFzZWxpbmUvPlxyXG4gICAgICAgICAgICAgICAgPEFsZXJ0Q29udGV4dC5Qcm92aWRlciB2YWx1ZT17e2FsZXJ0SW5mbywgb3BlbkFsZXJ0LCBjbG9zZUFsZXJ0fX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9BbGVydENvbnRleHQuUHJvdmlkZXI+XHJcblxyXG4gICAgICAgICAgICAgICAgPFNuYWNrYmFyXHJcbiAgICAgICAgICAgICAgICAgICAgVHJhbnNpdGlvbkNvbXBvbmVudD17U2xpZGV9XHJcbiAgICAgICAgICAgICAgICAgICAga2V5PXtTbGlkZS5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgIGFuY2hvck9yaWdpbj17e3ZlcnRpY2FsOiAndG9wJywgaG9yaXpvbnRhbDogJ3JpZ2h0J319XHJcbiAgICAgICAgICAgICAgICAgICAgb3Blbj17YWxlcnRJbmZvLm9wZW5lZH1cclxuICAgICAgICAgICAgICAgICAgICBhdXRvSGlkZUR1cmF0aW9uPXs0NTAwfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xvc2U9e2Nsb3NlQWxlcnR9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPE11aUFsZXJ0IHNldmVyaXR5PXthbGVydEluZm8uc3RhdHVzfT57YWxlcnRJbmZvLnRleHR9PC9NdWlBbGVydD5cclxuICAgICAgICAgICAgICAgIDwvU25hY2tiYXI+XHJcblxyXG4gICAgICAgICAgICA8L1RoZW1lUHJvdmlkZXI+XHJcbiAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgICk7XHJcbn1cclxuXHJcbk15QXBwLmdldEluaXRpYWxQcm9wcyA9IHdyYXBwZXIuZ2V0SW5pdGlhbEFwcFByb3BzKHN0b3JlID0+IGFzeW5jICh7Q29tcG9uZW50LCBjdHh9KSA9PiB7XHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgRGlyZWN0b3J5QXBpLmdldCh7Y2F0ZWdvcmllczogdHJ1ZSwgdGhlbWVzOiB0cnVlfSlcclxuICAgIHN0b3JlLmRpc3BhdGNoKHNldERpcmVjdG9yaWVzKGRhdGEpKTtcclxuXHJcbiAgICAvLyBAdHMtaWdub3JlXHJcbiAgICBjb25zdCB0b2tlbiA9IGN0eD8ucmVxPy5jb29raWVzPy5hdXRoX3Rva2VuXHJcblxyXG4gICAgaWYgKHRva2VuKSB7XHJcbiAgICAgICB0cnkge1xyXG4gICAgICAgICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBVc2VyQXBpLmdldE1lKHRva2VuKTtcclxuICAgICAgICAgICBzdG9yZS5kaXNwYXRjaChzZXRVc2VyKHVzZXIpKTtcclxuICAgICAgICAgICBzdG9yZS5kaXNwYXRjaChzZXROb3RpZmljYXRpb25zKGF3YWl0IFVzZXJBcGkuZ2V0Tm90aWZpY2F0aW9ucyh0b2tlbikpKTtcclxuICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHBhZ2VQcm9wczoge1xyXG4gICAgICAgICAgICAvLyBDYWxsIHBhZ2UtbGV2ZWwgZ2V0SW5pdGlhbFByb3BzXHJcbiAgICAgICAgICAgIC8vIERPTidUIEZPUkdFVCBUTyBQUk9WSURFIFNUT1JFIFRPIFBBR0VcclxuICAgICAgICAgICAgLi4uKENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHMgPyBhd2FpdCBDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzKHsuLi5jdHgsIHN0b3JlfSkgOiB7fSksXHJcbiAgICAgICAgICAgIC8vIFNvbWUgY3VzdG9tIHRoaW5nIGZvciBhbGwgcGFnZXNcclxuICAgICAgICAgICAgcGF0aG5hbWU6IGN0eC5wYXRobmFtZSxcclxuICAgICAgICB9LFxyXG4gICAgfTtcclxuXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgd3JhcHBlci53aXRoUmVkdXgoTXlBcHApO1xyXG4iLCJpbXBvcnQgeyBjcmVhdGVTbGljZSB9IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQnO1xyXG5pbXBvcnQge0hZRFJBVEV9IGZyb20gXCJuZXh0LXJlZHV4LXdyYXBwZXJcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBkaXJlY3RvcnlTbGljZSA9IGNyZWF0ZVNsaWNlKHtcclxuICAgIG5hbWU6ICdkaXJlY3RvcnknLFxyXG4gICAgaW5pdGlhbFN0YXRlOiB7XHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICBjYXRlZ29yaWVzOiBbXSxcclxuICAgICAgICAgICAgdGhlbWVzOiBbXSxcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgcmVkdWNlcnM6IHtcclxuICAgICAgICBzZXREaXJlY3RvcmllczogKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgICAgICAgICAgc3RhdGUuZGF0YS5jYXRlZ29yaWVzID0gYWN0aW9uLnBheWxvYWQuY2F0ZWdvcmllcztcclxuICAgICAgICAgICAgc3RhdGUuZGF0YS50aGVtZXMgPSBhY3Rpb24ucGF5bG9hZC50aGVtZXM7XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuXHJcbiAgICBleHRyYVJlZHVjZXJzOiB7XHJcbiAgICAgICAgW0hZRFJBVEVdOiAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICAuLi5hY3Rpb24ucGF5bG9hZC5kaXJlY3RvcnksXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcblxyXG59KTtcclxuXHJcbi8vIEFjdGlvbiBjcmVhdG9ycyBhcmUgZ2VuZXJhdGVkIGZvciBlYWNoIGNhc2UgcmVkdWNlciBmdW5jdGlvblxyXG5leHBvcnQgY29uc3QgeyBzZXREaXJlY3RvcmllcyB9ID0gZGlyZWN0b3J5U2xpY2UuYWN0aW9ucztcclxuZXhwb3J0IGNvbnN0IHsgcmVkdWNlcjogZGlyZWN0b3J5UmVkdWNlciB9ID0gZGlyZWN0b3J5U2xpY2U7XHJcbiIsImltcG9ydCB7IGNvbmZpZ3VyZVN0b3JlIH0gZnJvbSAnQHJlZHV4anMvdG9vbGtpdCc7XHJcbmltcG9ydCB7IHVzZXJSZWR1Y2VyIH0gZnJvbSAnLi91c2VyL3NsaWNlJztcclxuaW1wb3J0IHtjcmVhdGVXcmFwcGVyLCBIWURSQVRFfSBmcm9tIFwibmV4dC1yZWR1eC13cmFwcGVyXCI7XHJcbmltcG9ydCB7ZGlyZWN0b3J5UmVkdWNlcn0gZnJvbSBcIi4vZGlyZWN0b3J5L3NsaWNlXCI7XHJcblxyXG5leHBvcnQgY29uc3QgbWFrZVN0b3JlID0gKCkgPT4gY29uZmlndXJlU3RvcmUoe1xyXG4gIHJlZHVjZXI6IHtcclxuICAgIHVzZXI6IHVzZXJSZWR1Y2VyLFxyXG4gICAgZGlyZWN0b3J5OiBkaXJlY3RvcnlSZWR1Y2VyXHJcbiAgfSxcclxufSk7XHJcblxyXG5leHBvcnQgdHlwZSBBcHBTdG9yZSA9IFJldHVyblR5cGU8dHlwZW9mIG1ha2VTdG9yZT47XHJcbmV4cG9ydCB0eXBlIEFwcFN0YXRlID0gUmV0dXJuVHlwZTxBcHBTdG9yZVsnZ2V0U3RhdGUnXT47XHJcblxyXG5leHBvcnQgY29uc3Qgd3JhcHBlciA9IGNyZWF0ZVdyYXBwZXI8QXBwU3RvcmU+KG1ha2VTdG9yZSk7XHJcblxyXG4iLCJpbXBvcnQgeyBjcmVhdGVTbGljZSB9IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQnO1xyXG5pbXBvcnQge0hZRFJBVEV9IGZyb20gXCJuZXh0LXJlZHV4LXdyYXBwZXJcIjtcclxuXHJcbmV4cG9ydCBjb25zdCB1c2VyU2xpY2UgPSBjcmVhdGVTbGljZSh7XHJcbiAgbmFtZTogJ3VzZXInLFxyXG4gIGluaXRpYWxTdGF0ZToge1xyXG4gICAgZGF0YTogdW5kZWZpbmVkLFxyXG4gICAgbm90aWZpY2F0aW9uczogW10sXHJcbiAgfSxcclxuICByZWR1Y2Vyczoge1xyXG4gICAgc2V0VXNlcjogKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgICAgc3RhdGUuZGF0YSA9IGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICB9LFxyXG5cclxuICAgIHNldE5vdGlmaWNhdGlvbnM6IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICAgIHN0YXRlLm5vdGlmaWNhdGlvbnMgPSBhY3Rpb24ucGF5bG9hZDtcclxuXHJcbiAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgIH1cclxuXHJcbiAgfSxcclxuXHJcbiAgZXh0cmFSZWR1Y2Vyczoge1xyXG4gICAgW0hZRFJBVEVdOiAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIC4uLmFjdGlvbi5wYXlsb2FkLnVzZXIsXHJcbiAgICAgICAgLi4uYWN0aW9uLnBheWxvYWQubm90aWZpY2F0aW9ucyxcclxuICAgICAgfTtcclxuICAgIH0sXHJcbiAgfSxcclxuXHJcbn0pO1xyXG5cclxuLy8gQWN0aW9uIGNyZWF0b3JzIGFyZSBnZW5lcmF0ZWQgZm9yIGVhY2ggY2FzZSByZWR1Y2VyIGZ1bmN0aW9uXHJcbmV4cG9ydCBjb25zdCB7IHNldFVzZXIgfSA9IHVzZXJTbGljZS5hY3Rpb25zO1xyXG5leHBvcnQgY29uc3QgeyBzZXROb3RpZmljYXRpb25zIH0gPSB1c2VyU2xpY2UuYWN0aW9ucztcclxuZXhwb3J0IGNvbnN0IHsgcmVkdWNlcjogdXNlclJlZHVjZXIgfSA9IHVzZXJTbGljZTtcclxuIiwiaW1wb3J0IHtSb290U3RhdGUsIFVzZXJTdGF0ZX0gZnJvbSBcIi4uL3R5cGVzXCI7XHJcblxyXG5leHBvcnQgY29uc3Qgc2VsZWN0VXNlclN0YXRlID0gKHN0YXRlOiBSb290U3RhdGUpOiBVc2VyU3RhdGUgPT4ge1xyXG4gICAgcmV0dXJuIHN0YXRlLnVzZXJcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBzZWxlY3RVc2VyTm90aWZpY2F0aW9ucyA9IChzdGF0ZTogUm9vdFN0YXRlKTogVXNlclN0YXRlWydub3RpZmljYXRpb25zJ10gPT4ge1xyXG4gICAgcmV0dXJuIHN0YXRlLnVzZXIubm90aWZpY2F0aW9ucztcclxufTtcclxuIiwiaW1wb3J0IGF4aW9zIGZyb20gXCIuLi8uLi9jb3JlL2F4aW9zXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgRGlyZWN0b3J5QXBpIHtcclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0ID0gYXN5bmMgKHBhcmFtcyA9IHtjYXRlZ29yaWVzOiB0cnVlLCB0aGVtZXM6IHRydWV9KSA9PiB7XHJcbiAgICAgICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBheGlvcy5nZXQoJy9hcGkvZGlyZWN0b3JpZXMnLCB7XHJcbiAgICAgICAgICAgIHBhcmFtc1xyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCBheGlvcyBmcm9tICcuLi8uLi9jb3JlL2F4aW9zJztcclxuaW1wb3J0IHtVc2VyfSBmcm9tIFwiLi4vLi4vaW50ZXJmYWNlc1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IFVzZXJBcGkgPSB7XHJcbiAgbG9naW46IGFzeW5jIChlbWFpbDogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nKTogUHJvbWlzZTxhbnk+ID0+IHtcclxuICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICBmb3JtRGF0YS5hcHBlbmQoJ2VtYWlsJywgZW1haWwpO1xyXG4gICAgZm9ybURhdGEuYXBwZW5kKCdwYXNzd29yZCcsIHBhc3N3b3JkKTtcclxuICAgIGZvcm1EYXRhLmFwcGVuZCgncmVtZW1iZXInLCAnMScpO1xyXG5cclxuICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXhpb3MucG9zdCgnL2xvZ2luJywgZm9ybURhdGEsIHtcclxuICAgICAgbWF4UmVkaXJlY3RzOiAwLFxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIGRhdGE7XHJcbiAgfSxcclxuXHJcbiAgZ2V0TWU6IGFzeW5jICh0b2tlbj86IHN0cmluZykgPT4ge1xyXG4gICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBheGlvcy5nZXQoJy9hcGkvdXNlcicsIHtcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIEF1dGhvcml6YXRpb246IHRva2VuID8gYEJlYXJlciAke3Rva2VufWAgOiAnJ1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIHJldHVybiBkYXRhO1xyXG4gIH0sXHJcblxyXG4gIGdldE5vdGlmaWNhdGlvbnM6IGFzeW5jICh0b2tlbj86IHN0cmluZykgPT4ge1xyXG4gICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBheGlvcy5nZXQoJy9hcGkvdXNlci9ub3RpZmljYXRpb25zJywge1xyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgQXV0aG9yaXphdGlvbjogdG9rZW4gPyBgQmVhcmVyICR7dG9rZW59YCA6ICcnXHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIGRhdGE7XHJcbiAgfSxcclxuXHJcbiAgc2hvdzogYXN5bmMgKGlkOiBudW1iZXIpID0+IHtcclxuICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXhpb3MuZ2V0KCcvYXBpL3VzZXJzLycgKyBpZCk7XHJcbiAgICByZXR1cm4gZGF0YTtcclxuICB9LFxyXG5cclxuICB1cGRhdGVQcm9maWxlOiBhc3luYyAoZGF0YTogUGFydGlhbDxVc2VyPiwgaWQ6IG51bWJlcikgPT4ge1xyXG4gICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuXHJcbiAgICBPYmplY3Qua2V5cyhkYXRhKS5mb3JFYWNoKChwYXJhbSkgPT4ge1xyXG4gICAgICBpZiAocGFyYW0gIT09ICdsaW5rcycpIHtcclxuICAgICAgICBmb3JtRGF0YS5hcHBlbmQocGFyYW0sIGRhdGFbcGFyYW1dKTtcclxuICAgICAgfVxyXG4gICAgfSlcclxuXHJcbiAgICBpZiAoZGF0YS5saW5rcz8ubGVuZ3RoKSB7XHJcbiAgICAgIGRhdGEubGlua3MubWFwKChsLCBrZXkpID0+IHtcclxuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoYGxpbmtzWyR7a2V5fV1gLCBsKTtcclxuICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBhd2FpdCBheGlvcy5wYXRjaChgL2FwaS91c2VyLyR7aWR9YCwgZGF0YSlcclxuXHJcbiAgfVxyXG5cclxuXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0Q29va2llID0gKCkgPT4ge1xyXG4gIHJldHVybiBheGlvcy5nZXQoJy9zYW5jdHVtL2NzcmYtY29va2llJyk7XHJcbn07XHJcbiIsImltcG9ydCB7IGNyZWF0ZVRoZW1lIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuXHJcbmNvbnN0IHRoZW1lID0gY3JlYXRlVGhlbWUoe1xyXG4gIHBhbGV0dGU6IHtcclxuICAgIGJhY2tncm91bmQ6IHtcclxuICAgICAgZGVmYXVsdDogJ3ZhcigtLWJhY2tncm91bmQtY29sb3IpJyxcclxuICAgIH0sXHJcbiAgICB0ZXh0OiB7XHJcbiAgICAgIHByaW1hcnk6ICcjZDBkMGRkJyxcclxuICAgIH0sXHJcbiAgfSxcclxuICBzaGFkb3dzOiBbJ25vbmUnXSxcclxuICBzcGFjaW5nOiBbXHJcbiAgICAndmFyKC0tc3BhY2luZy0tMTApJyxcclxuICAgICd2YXIoLS1zcGFjaW5nLS0yMCknLFxyXG4gICAgJ3ZhcigtLXNwYWNpbmctLTMwKScsXHJcbiAgICAndmFyKC0tc3BhY2luZy0tNDApJyxcclxuICAgICd2YXIoLS1zcGFjaW5nLS01MCknLFxyXG4gIF0sXHJcbiAgdHlwb2dyYXBoeToge1xyXG4gICAgZm9udEZhbWlseTogJ3ZhcigtLWZvbnQtLWZhbWlseS0tYmFzZSknLFxyXG4gIH0sXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgdGhlbWU7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0Nzc0Jhc2VsaW5lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvbGFiL0FsZXJ0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkByZWR1eGpzL3Rvb2xraXRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC1yZWR1eC13cmFwcGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJlZHV4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9