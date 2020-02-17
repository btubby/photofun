(this["webpackJsonptubby-photos2"] = this["webpackJsonptubby-photos2"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/index.css ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "body {\n  margin: 0;\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',\n    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',\n    sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\ncode {\n  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',\n    monospace;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return App; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _componments_Face__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./componments/Face */ "./src/componments/Face.js");
var _jsxFileName = "/workspace/tubby-photos2/src/App.js";



const Container = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div`
  display:flex;
  justify-content: space-around;
  
  background-color: tomato;
  height: 100%;
  width: 100%;
  padding: 300px 0;
`;
function App() {
  const [xCord, setxCord] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  const [yCord, setyCord] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  const [ITop1, setITop1] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  const [IBottom1, setIBottom1] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  const [IRight1, setIRight1] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  const [ILeft1, setILeft1] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  const [ITop2, setITop2] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  const [IBottom2, setIBottom2] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  const [IRight2, setIRight2] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  const [ILeft2, setILeft2] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  const [ITop3, setITop3] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  const [IBottom3, setIBottom3] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  const [IRight3, setIRight3] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  const [ILeft3, setILeft3] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  const [ITop4, setITop4] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  const [IBottom4, setIBottom4] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  const [IRight4, setIRight4] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  const [ILeft4, setILeft4] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  const [ITop5, setITop5] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  const [IBottom5, setIBottom5] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  const [IRight5, setIRight5] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  const [ILeft5, setILeft5] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Container, {
    onMouseMove: e => {
      setxCord(e.nativeEvent.clientX);
      setyCord(e.nativeEvent.clientY);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    ref: el => {
      if (!el) return;
      setITop1(el.getBoundingClientRect().top);
      setIBottom1(el.getBoundingClientRect().bottom);
      setIRight1(el.getBoundingClientRect().right);
      setILeft1(el.getBoundingClientRect().left);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_componments_Face__WEBPACK_IMPORTED_MODULE_2__["default"], {
    type: 'will',
    xCord: xCord,
    yCord: yCord,
    ITop: ITop1,
    IBottom: IBottom1,
    IRight: IRight1,
    ILeft: ILeft1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    ref: el2 => {
      if (!el2) return;
      setITop2(el2.getBoundingClientRect().top);
      setIBottom2(el2.getBoundingClientRect().bottom);
      setIRight2(el2.getBoundingClientRect().right);
      setILeft2(el2.getBoundingClientRect().left);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_componments_Face__WEBPACK_IMPORTED_MODULE_2__["default"], {
    type: 'will',
    xCord: xCord,
    yCord: yCord,
    ITop: ITop2,
    IBottom: IBottom2,
    IRight: IRight2,
    ILeft: ILeft2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    ref: el3 => {
      if (!el3) return;
      setITop3(el3.getBoundingClientRect().top);
      setIBottom3(el3.getBoundingClientRect().bottom);
      setIRight3(el3.getBoundingClientRect().right);
      setILeft3(el3.getBoundingClientRect().left);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_componments_Face__WEBPACK_IMPORTED_MODULE_2__["default"], {
    type: 'will',
    xCord: xCord,
    yCord: yCord,
    ITop: ITop3,
    IBottom: IBottom3,
    IRight: IRight3,
    ILeft: ILeft3,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    ref: el4 => {
      if (!el4) return;
      setITop4(el4.getBoundingClientRect().top);
      setIBottom4(el4.getBoundingClientRect().bottom);
      setIRight4(el4.getBoundingClientRect().right);
      setILeft4(el4.getBoundingClientRect().left);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_componments_Face__WEBPACK_IMPORTED_MODULE_2__["default"], {
    type: 'will',
    xCord: xCord,
    yCord: yCord,
    ITop: ITop4,
    IBottom: IBottom4,
    IRight: IRight4,
    ILeft: ILeft4,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    ref: el5 => {
      if (!el5) return;
      setITop5(el5.getBoundingClientRect().top);
      setIBottom5(el5.getBoundingClientRect().bottom);
      setIRight5(el5.getBoundingClientRect().right);
      setILeft5(el5.getBoundingClientRect().left);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_componments_Face__WEBPACK_IMPORTED_MODULE_2__["default"], {
    type: 'will',
    xCord: xCord,
    yCord: yCord,
    ITop: ITop5,
    IBottom: IBottom5,
    IRight: IRight5,
    ILeft: ILeft5,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: this
  })));
}

/***/ }),

/***/ "./src/componments/Face.js":
/*!*********************************!*\
  !*** ./src/componments/Face.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Face; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _kerry_straight_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../kerry/straight.jpg */ "./src/kerry/straight.jpg");
/* harmony import */ var _kerry_straight_jpg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_kerry_straight_jpg__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _kerry_w_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../kerry/w.jpg */ "./src/kerry/w.jpg");
/* harmony import */ var _kerry_w_jpg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_kerry_w_jpg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _kerry_e_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../kerry/e.jpg */ "./src/kerry/e.jpg");
/* harmony import */ var _kerry_e_jpg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_kerry_e_jpg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _kerry_n_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../kerry/n.jpg */ "./src/kerry/n.jpg");
/* harmony import */ var _kerry_n_jpg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_kerry_n_jpg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _kerry_s_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../kerry/s.jpg */ "./src/kerry/s.jpg");
/* harmony import */ var _kerry_s_jpg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_kerry_s_jpg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _kerry_ne_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../kerry/ne.jpg */ "./src/kerry/ne.jpg");
/* harmony import */ var _kerry_ne_jpg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_kerry_ne_jpg__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _kerry_nw_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../kerry/nw.jpg */ "./src/kerry/nw.jpg");
/* harmony import */ var _kerry_nw_jpg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_kerry_nw_jpg__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _kerry_se_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../kerry/se.jpg */ "./src/kerry/se.jpg");
/* harmony import */ var _kerry_se_jpg__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_kerry_se_jpg__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _kerry_sw_jpg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../kerry/sw.jpg */ "./src/kerry/sw.jpg");
/* harmony import */ var _kerry_sw_jpg__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_kerry_sw_jpg__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _will_straight_jpg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../will/straight.jpg */ "./src/will/straight.jpg");
/* harmony import */ var _will_straight_jpg__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_will_straight_jpg__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _will_w_jpg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../will/w.jpg */ "./src/will/w.jpg");
/* harmony import */ var _will_w_jpg__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_will_w_jpg__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _will_e_jpg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../will/e.jpg */ "./src/will/e.jpg");
/* harmony import */ var _will_e_jpg__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_will_e_jpg__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _will_n_jpg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../will/n.jpg */ "./src/will/n.jpg");
/* harmony import */ var _will_n_jpg__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_will_n_jpg__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _will_s_jpg__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../will/s.jpg */ "./src/will/s.jpg");
/* harmony import */ var _will_s_jpg__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_will_s_jpg__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _will_ne_jpg__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../will/ne.jpg */ "./src/will/ne.jpg");
/* harmony import */ var _will_ne_jpg__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_will_ne_jpg__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _will_nw_jpg__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../will/nw.jpg */ "./src/will/nw.jpg");
/* harmony import */ var _will_nw_jpg__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_will_nw_jpg__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _will_se_jpg__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../will/se.jpg */ "./src/will/se.jpg");
/* harmony import */ var _will_se_jpg__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_will_se_jpg__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _will_sw_jpg__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../will/sw.jpg */ "./src/will/sw.jpg");
/* harmony import */ var _will_sw_jpg__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_will_sw_jpg__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var _jsxFileName = "/workspace/tubby-photos2/src/componments/Face.js";




















const Container = styled_components__WEBPACK_IMPORTED_MODULE_19__["default"].div`
    display:flex;
    height:100%; 
    width: 100%;
`;
const IMG = styled_components__WEBPACK_IMPORTED_MODULE_19__["default"].img`
    width:100%;
    height:auto;
`;
function Face(props) {
  const {
    width = '100%',
    xCord,
    yCord,
    type,
    ITop,
    IBottom,
    IRight,
    ILeft
  } = props;
  let straight = _will_straight_jpg__WEBPACK_IMPORTED_MODULE_10___default.a;
  let west = _will_w_jpg__WEBPACK_IMPORTED_MODULE_11___default.a;
  let east = _will_e_jpg__WEBPACK_IMPORTED_MODULE_12___default.a;
  let north = _will_n_jpg__WEBPACK_IMPORTED_MODULE_13___default.a;
  let south = _will_s_jpg__WEBPACK_IMPORTED_MODULE_14___default.a;
  let northeast = _will_ne_jpg__WEBPACK_IMPORTED_MODULE_15___default.a;
  let northwest = _will_nw_jpg__WEBPACK_IMPORTED_MODULE_16___default.a;
  let southeast = _will_se_jpg__WEBPACK_IMPORTED_MODULE_17___default.a;
  let southwest = _will_sw_jpg__WEBPACK_IMPORTED_MODULE_18___default.a;

  if (type === 'kerry') {
    straight = _kerry_straight_jpg__WEBPACK_IMPORTED_MODULE_1___default.a;
    west = _kerry_w_jpg__WEBPACK_IMPORTED_MODULE_2___default.a;
    east = _kerry_e_jpg__WEBPACK_IMPORTED_MODULE_3___default.a;
    north = _kerry_n_jpg__WEBPACK_IMPORTED_MODULE_4___default.a;
    south = _kerry_s_jpg__WEBPACK_IMPORTED_MODULE_5___default.a;
    northeast = _kerry_ne_jpg__WEBPACK_IMPORTED_MODULE_6___default.a;
    northwest = _kerry_nw_jpg__WEBPACK_IMPORTED_MODULE_7___default.a;
    southeast = _kerry_se_jpg__WEBPACK_IMPORTED_MODULE_8___default.a;
    southwest = _kerry_sw_jpg__WEBPACK_IMPORTED_MODULE_9___default.a;
  }

  const [image, setImage] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(straight);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    let map = {
      n: 0,
      e: 0,
      s: 0,
      w: 0
    };
    console.log(`${type} top: ${ITop} bottom: ${IBottom} right: ${IRight} left: ${ILeft}`);

    if (yCord <= ITop) {
      map.n = 1;
    }

    if (xCord >= IRight) {
      map.e = 1;
    }

    if (xCord <= ILeft) {
      map.w = 1;
    }

    if (yCord >= IBottom) {
      map.s = 1;
    }

    console.log(`${type}`, map);
    setImage(straight);

    if (map.n) {
      setImage(north);
    }

    if (map.e) {
      setImage(east);
    }

    if (map.n && map.e) {
      setImage(northeast);
    }

    if (map.s) {
      setImage(south);
    }

    if (map.s && map.e) {
      setImage(southeast);
    }

    if (map.w) {
      setImage(west);
    }

    if (map.s && map.w) {
      setImage(southwest);
    }

    if (map.w && map.n) {
      setImage(northwest);
    }
  });
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Container, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(IMG, {
    width: width,
    src: image,
    alt: "{image}",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }));
}

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css", function() {
		var newContent = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./App */ "./src/App.js");
/* harmony import */ var _serviceWorker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./serviceWorker */ "./src/serviceWorker.js");
var _jsxFileName = "/workspace/tubby-photos2/src/index.js";





react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App__WEBPACK_IMPORTED_MODULE_3__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}), document.getElementById('root')); // If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

_serviceWorker__WEBPACK_IMPORTED_MODULE_4__["unregister"]();

/***/ }),

/***/ "./src/kerry/e.jpg":
/*!*************************!*\
  !*** ./src/kerry/e.jpg ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/e.50ba4f76.jpg";

/***/ }),

/***/ "./src/kerry/n.jpg":
/*!*************************!*\
  !*** ./src/kerry/n.jpg ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/n.6ebef50f.jpg";

/***/ }),

/***/ "./src/kerry/ne.jpg":
/*!**************************!*\
  !*** ./src/kerry/ne.jpg ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/ne.107c594a.jpg";

/***/ }),

/***/ "./src/kerry/nw.jpg":
/*!**************************!*\
  !*** ./src/kerry/nw.jpg ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/nw.f7c1083d.jpg";

/***/ }),

/***/ "./src/kerry/s.jpg":
/*!*************************!*\
  !*** ./src/kerry/s.jpg ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/s.0bbf202e.jpg";

/***/ }),

/***/ "./src/kerry/se.jpg":
/*!**************************!*\
  !*** ./src/kerry/se.jpg ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/se.5559510e.jpg";

/***/ }),

/***/ "./src/kerry/straight.jpg":
/*!********************************!*\
  !*** ./src/kerry/straight.jpg ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/straight.7f4e1a47.jpg";

/***/ }),

/***/ "./src/kerry/sw.jpg":
/*!**************************!*\
  !*** ./src/kerry/sw.jpg ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/sw.fd9c8cb2.jpg";

/***/ }),

/***/ "./src/kerry/w.jpg":
/*!*************************!*\
  !*** ./src/kerry/w.jpg ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/w.4364bfa0.jpg";

/***/ }),

/***/ "./src/serviceWorker.js":
/*!******************************!*\
  !*** ./src/serviceWorker.js ***!
  \******************************/
/*! exports provided: register, unregister */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "register", function() { return register; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unregister", function() { return unregister; });
// This optional code is used to register a service worker.
// register() is not called by default.
// This lets the app load faster on subsequent visits in production, and gives
// it offline capabilities. However, it also means that developers (and users)
// will only see deployed updates on subsequent visits to a page, after all the
// existing tabs open on the page have been closed, since previously cached
// resources are updated in the background.
// To learn more about the benefits of this model and instructions on how to
// opt-in, read https://bit.ly/CRA-PWA
const isLocalhost = Boolean(window.location.hostname === 'localhost' || // [::1] is the IPv6 localhost address.
window.location.hostname === '[::1]' || // 127.0.0.0/8 are considered localhost for IPv4.
window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
function register(config) {
  if (false) {}
}

function registerValidSW(swUrl, config) {
  navigator.serviceWorker.register(swUrl).then(registration => {
    registration.onupdatefound = () => {
      const installingWorker = registration.installing;

      if (installingWorker == null) {
        return;
      }

      installingWorker.onstatechange = () => {
        if (installingWorker.state === 'installed') {
          if (navigator.serviceWorker.controller) {
            // At this point, the updated precached content has been fetched,
            // but the previous service worker will still serve the older
            // content until all client tabs are closed.
            console.log('New content is available and will be used when all ' + 'tabs for this page are closed. See https://bit.ly/CRA-PWA.'); // Execute callback

            if (config && config.onUpdate) {
              config.onUpdate(registration);
            }
          } else {
            // At this point, everything has been precached.
            // It's the perfect time to display a
            // "Content is cached for offline use." message.
            console.log('Content is cached for offline use.'); // Execute callback

            if (config && config.onSuccess) {
              config.onSuccess(registration);
            }
          }
        }
      };
    };
  }).catch(error => {
    console.error('Error during service worker registration:', error);
  });
}

function checkValidServiceWorker(swUrl, config) {
  // Check if the service worker can be found. If it can't reload the page.
  fetch(swUrl, {
    headers: {
      'Service-Worker': 'script'
    }
  }).then(response => {
    // Ensure service worker exists, and that we really are getting a JS file.
    const contentType = response.headers.get('content-type');

    if (response.status === 404 || contentType != null && contentType.indexOf('javascript') === -1) {
      // No service worker found. Probably a different app. Reload the page.
      navigator.serviceWorker.ready.then(registration => {
        registration.unregister().then(() => {
          window.location.reload();
        });
      });
    } else {
      // Service worker found. Proceed as normal.
      registerValidSW(swUrl, config);
    }
  }).catch(() => {
    console.log('No internet connection found. App is running in offline mode.');
  });
}

function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(registration => {
      registration.unregister();
    }).catch(error => {
      console.error(error.message);
    });
  }
}

/***/ }),

/***/ "./src/will/e.jpg":
/*!************************!*\
  !*** ./src/will/e.jpg ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/e.9fc8bbdf.jpg";

/***/ }),

/***/ "./src/will/n.jpg":
/*!************************!*\
  !*** ./src/will/n.jpg ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/n.1a7f8a9e.jpg";

/***/ }),

/***/ "./src/will/ne.jpg":
/*!*************************!*\
  !*** ./src/will/ne.jpg ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/ne.88bceb07.jpg";

/***/ }),

/***/ "./src/will/nw.jpg":
/*!*************************!*\
  !*** ./src/will/nw.jpg ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/nw.4cbd7667.jpg";

/***/ }),

/***/ "./src/will/s.jpg":
/*!************************!*\
  !*** ./src/will/s.jpg ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/s.29905721.jpg";

/***/ }),

/***/ "./src/will/se.jpg":
/*!*************************!*\
  !*** ./src/will/se.jpg ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/se.0b33c1f2.jpg";

/***/ }),

/***/ "./src/will/straight.jpg":
/*!*******************************!*\
  !*** ./src/will/straight.jpg ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/straight.3ec43164.jpg";

/***/ }),

/***/ "./src/will/sw.jpg":
/*!*************************!*\
  !*** ./src/will/sw.jpg ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/sw.2de9a10b.jpg";

/***/ }),

/***/ "./src/will/w.jpg":
/*!************************!*\
  !*** ./src/will/w.jpg ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/w.9ffc8895.jpg";

/***/ }),

/***/ 1:
/*!**************************************************************************************************************!*\
  !*** multi (webpack)/hot/dev-server.js ./node_modules/react-dev-utils/webpackHotDevClient.js ./src/index.js ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /workspace/tubby-photos2/node_modules/webpack/hot/dev-server.js */"./node_modules/webpack/hot/dev-server.js");
__webpack_require__(/*! /workspace/tubby-photos2/node_modules/react-dev-utils/webpackHotDevClient.js */"./node_modules/react-dev-utils/webpackHotDevClient.js");
module.exports = __webpack_require__(/*! /workspace/tubby-photos2/src/index.js */"./src/index.js");


/***/ })

},[[1,"runtime-main",0]]]);
//# sourceMappingURL=main.chunk.js.map