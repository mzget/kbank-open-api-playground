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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
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

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_GridList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/GridList */ "@material-ui/core/GridList");
/* harmony import */ var _material_ui_core_GridList__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_GridList__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_GridListTile__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/GridListTile */ "@material-ui/core/GridListTile");
/* harmony import */ var _material_ui_core_GridListTile__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_GridListTile__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_ListSubheader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/ListSubheader */ "@material-ui/core/ListSubheader");
/* harmony import */ var _material_ui_core_ListSubheader__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListSubheader__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _src_components_MediaCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../src/components/MediaCard */ "./src/components/MediaCard.tsx");
/* harmony import */ var _src_mock_pokedex__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../src/mock/pokedex */ "./src/mock/pokedex.ts");
var _jsxFileName = "/Users/nattapon/Projects/playground/kbank-open-api-playground/lerna-repo/packages/pokemon-on-fire/app/pages/index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;









function Home(props) {
  let [column, setColumn] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(2);
  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(() => {
    console.log("Home Page");
    let viewPort = document.getElementById("App-Container");

    if (viewPort) {
      let cardWidth = 280;
      let column = viewPort.clientWidth / cardWidth;
      setColumn(Math.floor(column));
    }
  }, [setColumn]);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, __jsx("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, "Home"), __jsx("link", {
    rel: "icon",
    href: "/favicon.ico",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  })), __jsx(StyledShop, {
    className: "StyledShop",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, __jsx(StyledGridList, {
    cellHeight: "auto",
    cols: column,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, __jsx(_material_ui_core_GridListTile__WEBPACK_IMPORTED_MODULE_4___default.a, {
    key: "Subheader",
    cols: column,
    style: {
      height: "auto"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, __jsx(_material_ui_core_ListSubheader__WEBPACK_IMPORTED_MODULE_5___default.a, {
    component: "div",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, "Choose your pokemons")), _src_mock_pokedex__WEBPACK_IMPORTED_MODULE_7__["Pokedex"].map(v => __jsx(_material_ui_core_GridListTile__WEBPACK_IMPORTED_MODULE_4___default.a, {
    key: v.key,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, __jsx(_src_components_MediaCard__WEBPACK_IMPORTED_MODULE_6__["default"], {
    key: v.key,
    pokemon: v,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }))))));
}

/* harmony default export */ __webpack_exports__["default"] = (Home);
const StyledShop = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "pages__StyledShop",
  componentId: "sc-10mp2ja-0"
})(["display:flex;justify-content:center;"]);
const StyledGridList = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(_material_ui_core_GridList__WEBPACK_IMPORTED_MODULE_3___default.a).withConfig({
  displayName: "pages__StyledGridList",
  componentId: "sc-10mp2ja-1"
})(["&&{width:100%;}"]);

/***/ }),

/***/ "./src/components/MediaCard.tsx":
/*!**************************************!*\
  !*** ./src/components/MediaCard.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MediaCard; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Card */ "@material-ui/core/Card");
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_CardActionArea__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/CardActionArea */ "@material-ui/core/CardActionArea");
/* harmony import */ var _material_ui_core_CardActionArea__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardActionArea__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/CardActions */ "@material-ui/core/CardActions");
/* harmony import */ var _material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/CardContent */ "@material-ui/core/CardContent");
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/CardMedia */ "@material-ui/core/CardMedia");
/* harmony import */ var _material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _store_storeContext__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../store/storeContext */ "./src/store/storeContext.tsx");
/* harmony import */ var _store_cartReducer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../store/cartReducer */ "./src/store/cartReducer.ts");
var _jsxFileName = "/Users/nattapon/Projects/playground/kbank-open-api-playground/lerna-repo/packages/pokemon-on-fire/app/src/components/MediaCard.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;












const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])({
  card: {
    width: 280
  },
  media: {
    height: 200
  }
});
function MediaCard(props) {
  const classes = useStyles(undefined);
  const {
    pokemon
  } = props;
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])();
  const [_, dispatch] = Object(_store_storeContext__WEBPACK_IMPORTED_MODULE_10__["useStore"])();
  const onClickHandler = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(e => {
    dispatch(Object(_store_cartReducer__WEBPACK_IMPORTED_MODULE_11__["buyPokemon"])(pokemon));
    router.push("/checkout");
  }, [dispatch, pokemon]);
  return __jsx(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_3___default.a, {
    className: classes.card,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, __jsx(_material_ui_core_CardActionArea__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, __jsx(_material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_7___default.a, {
    className: classes.media,
    image: `/pokemons/${pokemon.src}`,
    title: pokemon.name,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }), __jsx(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_6___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9___default.a, {
    gutterBottom: true,
    variant: "h5",
    component: "h2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, pokemon.name), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9___default.a, {
    gutterBottom: true,
    variant: "subtitle1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, `Price: ${pokemon.price} THB`), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9___default.a, {
    variant: "body2",
    color: "textSecondary",
    component: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, pokemon.description))), __jsx(_material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_5___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8___default.a, {
    size: "small",
    color: "primary",
    variant: "contained",
    onClick: onClickHandler,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, "\u0E43\u0E2A\u0E48\u0E15\u0E23\u0E30\u0E01\u0E23\u0E49\u0E32")));
}

/***/ }),

/***/ "./src/mock/pokedex.ts":
/*!*****************************!*\
  !*** ./src/mock/pokedex.ts ***!
  \*****************************/
/*! exports provided: Pokedex */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Pokedex", function() { return Pokedex; });
const Pokedex = [{
  id: "001",
  key: "001-Bulbasaur",
  src: "001-Bulbasaur.png",
  name: "Bulbasaur",
  description: "Bulbasaur can be seen napping in bright sunlight. There is a seed on its back. By soaking up the sun's rays, the seed grows progressively larger.",
  price: "100.00"
}, {
  id: "004",
  key: "004-Charmander",
  src: "004-Charmander.png",
  name: "Charmander",
  description: "The flame that burns at the tip of its tail is an indication of its emotions. The flame wavers when Charmander is enjoying itself. If the Pokémon becomes enraged, the flame burns fiercely.",
  price: "110.00"
}, {
  id: "007",
  key: "007-Squirtle",
  src: "007-Squirtle.png",
  name: "Squirtle",
  description: "Squirtle's shell is not merely used for protection. The shell's rounded shape and the grooves on its surface help minimize resistance in water, enabling this Pokémon to swim at high speeds.",
  price: "120.00"
}, {
  id: "025",
  key: "025-Pikachu",
  src: "025-Pikachu.png",
  name: "Pikachu",
  description: "Whenever Pikachu comes across something new, it blasts it with a jolt of electricity. If you come across a blackened berry, it's evidence that this Pokémon mistook the intensity of its charge.",
  price: "200.00"
}, {
  id: "054",
  key: "054-Psyduck",
  src: "054-Psyduck.png",
  name: "Psyduck",
  description: "Psyduck uses a mysterious power. When it does so, this Pokémon generates brain waves that are supposedly only seen in sleepers. This discovery spurred controversy among scholars.",
  price: "100.00"
}, {
  id: "079",
  key: "079-Slowpoke",
  src: "079-Slowpoke.png",
  name: "Slowpoke",
  description: "Slowpoke uses its tail to catch prey by dipping it in water at the side of a river. However, this Pokémon often forgets what it's doing and often spends entire days just loafing at water's edge.",
  price: "150.00"
}, {
  id: "144",
  key: "144-Articuno",
  src: "144-Articuno.png",
  name: "Articuno",
  description: "Articuno is a legendary bird Pokémon that can control ice. The flapping of its wings chills the air. As a result, it is said that when this Pokémon flies, snow will fall.",
  price: "1500.00"
}];

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

/***/ 5:
/*!*******************************!*\
  !*** multi ./pages/index.tsx ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/nattapon/Projects/playground/kbank-open-api-playground/lerna-repo/packages/pokemon-on-fire/app/pages/index.tsx */"./pages/index.tsx");


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

/***/ "@material-ui/core/CardActionArea":
/*!***************************************************!*\
  !*** external "@material-ui/core/CardActionArea" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CardActionArea");

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

/***/ "@material-ui/core/CardMedia":
/*!**********************************************!*\
  !*** external "@material-ui/core/CardMedia" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CardMedia");

/***/ }),

/***/ "@material-ui/core/GridList":
/*!*********************************************!*\
  !*** external "@material-ui/core/GridList" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/GridList");

/***/ }),

/***/ "@material-ui/core/GridListTile":
/*!*************************************************!*\
  !*** external "@material-ui/core/GridListTile" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/GridListTile");

/***/ }),

/***/ "@material-ui/core/ListSubheader":
/*!**************************************************!*\
  !*** external "@material-ui/core/ListSubheader" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListSubheader");

/***/ }),

/***/ "@material-ui/core/Typography":
/*!***********************************************!*\
  !*** external "@material-ui/core/Typography" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Typography");

/***/ }),

/***/ "@material-ui/core/styles":
/*!*******************************************!*\
  !*** external "@material-ui/core/styles" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

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
//# sourceMappingURL=index.js.map