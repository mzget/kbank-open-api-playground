module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/create.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/create */ "core-js/library/fn/object/create");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-symbols */ "core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/keys */ "core-js/library/fn/object/keys");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectSpread; });
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");




function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    var ownKeys = _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default()(source);

    if (typeof _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default.a === 'function') {
      ownKeys = ownKeys.concat(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default()(source).filter(function (sym) {
        return _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default()(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      Object(_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(target, key, source[key]);
    });
  }

  return target;
}

/***/ }),

/***/ "./pages/checkout.tsx":
/*!****************************!*\
  !*** ./pages/checkout.tsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _src_components_CheckoutCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/components/CheckoutCard */ "./src/components/CheckoutCard.tsx");
/* harmony import */ var _src_components_ReceiptCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/components/ReceiptCard */ "./src/components/ReceiptCard.tsx");
var _jsxFileName = "/Users/nattapon/Projects/playground/kbank-open-api-playground/lerna-repo/packages/pokemon-on-fire/app/pages/checkout.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var CheckoutState;

(function (CheckoutState) {
  CheckoutState[CheckoutState["none"] = 0] = "none";
  CheckoutState[CheckoutState["processing"] = 1] = "processing";
  CheckoutState[CheckoutState["finished"] = 2] = "finished";
})(CheckoutState || (CheckoutState = {}));

function CheckoutRender(props) {
  let [checkoutState, setCheckoutState] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(CheckoutState.none);
  const onProcessHandler = react__WEBPACK_IMPORTED_MODULE_0___default.a.useCallback(() => {
    setCheckoutState(CheckoutState.processing);
  }, []);
  const onFinishHandler = react__WEBPACK_IMPORTED_MODULE_0___default.a.useCallback(() => {
    setCheckoutState(CheckoutState.finished);
  }, []);

  switch (checkoutState) {
    case CheckoutState.none:
      return __jsx(_src_components_CheckoutCard__WEBPACK_IMPORTED_MODULE_3__["default"], {
        onProcess: onProcessHandler,
        onFinish: onFinishHandler,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      });

    case CheckoutState.processing:
      return __jsx(StyledProcessing, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, __jsx("img", {
        src: "/pokeball.png",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }), __jsx("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, "Payment Processing..., Plase wait"));

    case CheckoutState.finished:
      return __jsx(_src_components_ReceiptCard__WEBPACK_IMPORTED_MODULE_4__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      });
  }
}

function Checkout(props) {
  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(() => {
    console.log("Checkout Page");
  }, []);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, __jsx("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, "Checkout"), __jsx("link", {
    rel: "icon",
    href: "/favicon.ico",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  })), __jsx(StyledShop, {
    className: "StyledShop",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, __jsx(CheckoutRender, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (Checkout);
const StyledShop = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "checkout__StyledShop",
  componentId: "sc-6j7haa-0"
})(["display:flex;justify-content:center;height:100%;"]);
const StyledProcessing = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "checkout__StyledProcessing",
  componentId: "sc-6j7haa-1"
})(["display:flex;justify-content:center;flex-direction:column;height:100%;@keyframes App-logo-spin{from{transform:rotate(0deg);}to{transform:rotate(360deg);}}img{width:48px;align-self:center;animation:App-logo-spin infinite 10s linear;}"]);

/***/ }),

/***/ "./src/components/CheckoutCard.tsx":
/*!*****************************************!*\
  !*** ./src/components/CheckoutCard.tsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RecipeReviewCard; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Card */ "@material-ui/core/Card");
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_CardHeader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/CardHeader */ "@material-ui/core/CardHeader");
/* harmony import */ var _material_ui_core_CardHeader__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardHeader__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/CardMedia */ "@material-ui/core/CardMedia");
/* harmony import */ var _material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/CardContent */ "@material-ui/core/CardContent");
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/CardActions */ "@material-ui/core/CardActions");
/* harmony import */ var _material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/IconButton */ "@material-ui/core/IconButton");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_colors_green__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/colors/green */ "@material-ui/core/colors/green");
/* harmony import */ var _material_ui_core_colors_green__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_colors_green__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_icons_MoreVert__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/icons/MoreVert */ "@material-ui/icons/MoreVert");
/* harmony import */ var _material_ui_icons_MoreVert__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_MoreVert__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_icons_ShoppingCart__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/icons/ShoppingCart */ "@material-ui/icons/ShoppingCart");
/* harmony import */ var _material_ui_icons_ShoppingCart__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ShoppingCart__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _store_storeContext__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../store/storeContext */ "./src/store/storeContext.tsx");
/* harmony import */ var react_kpayment__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-kpayment */ "react-kpayment");
/* harmony import */ var react_kpayment__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react_kpayment__WEBPACK_IMPORTED_MODULE_15__);
var _jsxFileName = "/Users/nattapon/Projects/playground/kbank-open-api-playground/lerna-repo/packages/pokemon-on-fire/app/src/components/CheckoutCard.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
















const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(theme => Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["createStyles"])({
  card: {
    width: 350,
    maxWidth: 440
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9

  },
  button: {
    maxWidth: 180
  }
}));
function RecipeReviewCard(props) {
  const classes = useStyles(undefined);
  const [state] = Object(_store_storeContext__WEBPACK_IMPORTED_MODULE_14__["useStore"])();
  let {
    pokemon
  } = state;
  let {
    onProcess,
    onFinish
  } = props;
  return __jsx(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_3___default.a, {
    className: classes.card,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, __jsx(_material_ui_core_CardHeader__WEBPACK_IMPORTED_MODULE_4___default.a, {
    avatar: __jsx(_material_ui_icons_ShoppingCart__WEBPACK_IMPORTED_MODULE_12___default.a, {
      height: 64,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: this
    }),
    action: __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_8___default.a, {
      "aria-label": "settings",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53
      },
      __self: this
    }, __jsx(_material_ui_icons_MoreVert__WEBPACK_IMPORTED_MODULE_11___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: this
    })),
    title: "The pokemon shop",
    subheader: new Date().toDateString(),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }), __jsx(_material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_5___default.a, {
    className: classes.media,
    image: `/pokemons/${pokemon.src}`,
    title: pokemon.name,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }), __jsx(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_6___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9___default.a, {
    gutterBottom: true,
    variant: "subtitle1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, `Price: ${pokemon.price} THB`)), __jsx(_material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_7___default.a, {
    disableSpacing: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, __jsx(StyledCardActions, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, __jsx(PayActionDiv, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, "Credit/Debit Card"), __jsx(react_kpayment__WEBPACK_IMPORTED_MODULE_15___default.a, {
    formAction: "/api/checkout",
    onFinish: onFinish,
    onProcess: onProcess,
    debug: true,
    attrs: {
      scriptUrl: "https://uat-kpaymentgateway.new-kpgw.com/ui/v2/kpayment.min.js",
      apiKey: "pkey_prod_5BpmBr5LpqG84jYnDLPQe3Zv1OuhdN5dg",
      amount: pokemon.price,
      currency: "TBH",
      paymentMethods: "card",
      shopName: "The Pokemon Shop"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  })), __jsx(PayActionDiv, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, "QR Payment"), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_13___default.a, {
    variant: "contained",
    color: "secondary",
    disabled: true,
    className: classes.button,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }, "Not yet ready")))));
}
const PayActionDiv = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "CheckoutCard__PayActionDiv",
  componentId: "sc-1xxj351-0"
})(["display:flex;flex-direction:row;max-height:50px;width:100%;justify-content:space-between;margin:4px;"]);
const StyledCardActions = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_7___default.a).withConfig({
  displayName: "CheckoutCard__StyledCardActions",
  componentId: "sc-1xxj351-1"
})(["&&{width:100%;display:flex;flex-direction:column;}"]);

/***/ }),

/***/ "./src/components/ReceiptCard.tsx":
/*!****************************************!*\
  !*** ./src/components/ReceiptCard.tsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ReceiptCard; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Card */ "@material-ui/core/Card");
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_CardHeader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/CardHeader */ "@material-ui/core/CardHeader");
/* harmony import */ var _material_ui_core_CardHeader__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardHeader__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/CardMedia */ "@material-ui/core/CardMedia");
/* harmony import */ var _material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/CardContent */ "@material-ui/core/CardContent");
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/CardActions */ "@material-ui/core/CardActions");
/* harmony import */ var _material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/IconButton */ "@material-ui/core/IconButton");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_icons_MoreVert__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/icons/MoreVert */ "@material-ui/icons/MoreVert");
/* harmony import */ var _material_ui_icons_MoreVert__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_MoreVert__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _store_storeContext__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../store/storeContext */ "./src/store/storeContext.tsx");
var _jsxFileName = "/Users/nattapon/Projects/playground/kbank-open-api-playground/lerna-repo/packages/pokemon-on-fire/app/src/components/ReceiptCard.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;













const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(theme => Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["createStyles"])({
  card: {
    width: 350,
    maxWidth: 440
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9

  },
  button: {
    maxWidth: 180
  }
}));
function ReceiptCard() {
  const classes = useStyles(undefined);
  const [state] = Object(_store_storeContext__WEBPACK_IMPORTED_MODULE_12__["useStore"])();
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])();
  let {
    pokemon
  } = state;
  const homeBtnHandler = react__WEBPACK_IMPORTED_MODULE_0___default.a.useCallback(() => {
    router.replace("/");
  }, []);
  return __jsx(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_3___default.a, {
    className: classes.card,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, __jsx(_material_ui_core_CardHeader__WEBPACK_IMPORTED_MODULE_4___default.a, {
    avatar: __jsx("img", {
      src: "/pokeball.png",
      width: "48px",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }),
    action: __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_8___default.a, {
      "aria-label": "settings",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    }, __jsx(_material_ui_icons_MoreVert__WEBPACK_IMPORTED_MODULE_10___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: this
    })),
    title: "The pokemon shop",
    subheader: new Date().toDateString(),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }), __jsx(_material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_5___default.a, {
    className: classes.media,
    image: `/pokemons/${pokemon.src}`,
    title: pokemon.name,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }), __jsx(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_6___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9___default.a, {
    gutterBottom: true,
    variant: "subtitle1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, `Yeah ! ${pokemon.name} is yours`)), __jsx(_material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_7___default.a, {
    disableSpacing: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_11___default.a, {
    variant: "contained",
    color: "secondary",
    className: classes.button,
    onClick: homeBtnHandler,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, "Home")));
}

/***/ }),

/***/ "./src/store/cartReducer.ts":
/*!**********************************!*\
  !*** ./src/store/cartReducer.ts ***!
  \**********************************/
/*! exports provided: cartReducer, BUY_POKEMON, buyPokemon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cartReducer", function() { return cartReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BUY_POKEMON", function() { return BUY_POKEMON; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buyPokemon", function() { return buyPokemon; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-actions */ "redux-actions");
/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_actions__WEBPACK_IMPORTED_MODULE_1__);


function cartReducer(state, action) {
  switch (action.type) {
    case BUY_POKEMON:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        pokemon: action.payload
      });

    default:
      throw new Error();
  }
}
const BUY_POKEMON = "BUY_POKEMON";
const buyPokemon = Object(redux_actions__WEBPACK_IMPORTED_MODULE_1__["createAction"])(BUY_POKEMON);

/***/ }),

/***/ "./src/store/storeContext.tsx":
/*!************************************!*\
  !*** ./src/store/storeContext.tsx ***!
  \************************************/
/*! exports provided: initialState, default, useStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useStore", function() { return useStore; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/create */ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_create__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _cartReducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cartReducer */ "./src/store/cartReducer.ts");

var _jsxFileName = "/Users/nattapon/Projects/playground/kbank-open-api-playground/lerna-repo/packages/pokemon-on-fire/app/src/store/storeContext.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


const initialState = {
  pokemon: {
    id: "",
    key: "",
    src: "",
    name: "",
    description: "",
    price: ""
  }
};
const StoreContext = react__WEBPACK_IMPORTED_MODULE_1___default.a.createContext([initialState, _babel_runtime_corejs2_core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default()(null)]);

const StoreProvider = ({
  children
}) => {
  const contextValue = Object(react__WEBPACK_IMPORTED_MODULE_1__["useReducer"])(_cartReducer__WEBPACK_IMPORTED_MODULE_2__["cartReducer"], initialState);
  return __jsx(StoreContext.Provider, {
    value: contextValue,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  }, children);
};

/* harmony default export */ __webpack_exports__["default"] = (StoreProvider);
const useStore = () => {
  const contextValue = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(StoreContext);
  return contextValue;
};

/***/ }),

/***/ 3:
/*!**********************************!*\
  !*** multi ./pages/checkout.tsx ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/nattapon/Projects/playground/kbank-open-api-playground/lerna-repo/packages/pokemon-on-fire/app/pages/checkout.tsx */"./pages/checkout.tsx");


/***/ }),

/***/ "@material-ui/core/Button":
/*!*******************************************!*\
  !*** external "@material-ui/core/Button" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Button");

/***/ }),

/***/ "@material-ui/core/Card":
/*!*****************************************!*\
  !*** external "@material-ui/core/Card" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Card");

/***/ }),

/***/ "@material-ui/core/CardActions":
/*!************************************************!*\
  !*** external "@material-ui/core/CardActions" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CardActions");

/***/ }),

/***/ "@material-ui/core/CardContent":
/*!************************************************!*\
  !*** external "@material-ui/core/CardContent" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CardContent");

/***/ }),

/***/ "@material-ui/core/CardHeader":
/*!***********************************************!*\
  !*** external "@material-ui/core/CardHeader" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CardHeader");

/***/ }),

/***/ "@material-ui/core/CardMedia":
/*!**********************************************!*\
  !*** external "@material-ui/core/CardMedia" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CardMedia");

/***/ }),

/***/ "@material-ui/core/IconButton":
/*!***********************************************!*\
  !*** external "@material-ui/core/IconButton" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/IconButton");

/***/ }),

/***/ "@material-ui/core/Typography":
/*!***********************************************!*\
  !*** external "@material-ui/core/Typography" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Typography");

/***/ }),

/***/ "@material-ui/core/colors/green":
/*!*************************************************!*\
  !*** external "@material-ui/core/colors/green" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/colors/green");

/***/ }),

/***/ "@material-ui/core/styles":
/*!*******************************************!*\
  !*** external "@material-ui/core/styles" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "@material-ui/icons/MoreVert":
/*!**********************************************!*\
  !*** external "@material-ui/icons/MoreVert" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/MoreVert");

/***/ }),

/***/ "@material-ui/icons/ShoppingCart":
/*!**************************************************!*\
  !*** external "@material-ui/icons/ShoppingCart" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ShoppingCart");

/***/ }),

/***/ "core-js/library/fn/object/create":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/create" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-symbols":
/*!*********************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-symbols" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "core-js/library/fn/object/keys":
/*!*************************************************!*\
  !*** external "core-js/library/fn/object/keys" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

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

/***/ "react-kpayment":
/*!*********************************!*\
  !*** external "react-kpayment" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-kpayment");

/***/ }),

/***/ "redux-actions":
/*!********************************!*\
  !*** external "redux-actions" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-actions");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=checkout.js.map