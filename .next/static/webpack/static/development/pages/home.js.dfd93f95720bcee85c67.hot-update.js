webpackHotUpdate("static\\development\\pages\\home.js",{

/***/ "./src/components/menu/menu.js":
/*!*************************************!*\
  !*** ./src/components/menu/menu.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_cookie__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-cookie */ "./node_modules/react-cookie/es6/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _menu_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./menu.css */ "./src/components/menu/menu.css");
/* harmony import */ var _menu_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_menu_css__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../global */ "./src/global.js");
/* harmony import */ var react_page_loading__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-page-loading */ "./node_modules/react-page-loading/dist/react-page-loading.js");
/* harmony import */ var react_page_loading__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_page_loading__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _local__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../local */ "./src/local.js");
/* harmony import */ var _localQA__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../localQA */ "./src/localQA.js");
/* harmony import */ var _localMetrics__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../localMetrics */ "./src/localMetrics.js");








var _jsxFileName = "C:\\Users\\lopezvalenzuela.16\\Documents\\GitHub\\tp-tiktok-front\\src\\components\\menu\\menu.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }








var jwtDecode = __webpack_require__(/*! jwt-decode */ "./node_modules/jwt-decode/lib/index.js");

var cookies = new react_cookie__WEBPACK_IMPORTED_MODULE_9__["Cookies"]();





var Menu = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Menu, _Component);

  var _super = _createSuper(Menu);

  function Menu() {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Menu);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "state", {
      rol: 0,
      loading: true,
      dataLang: {}
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "cookiesRemover", function () {
      if (cookies.get("token") != undefined) {
        cookies.remove("token");
      }

      if (cookies.get("token", {
        path: "/"
      }) != undefined) {
        cookies.remove("token", {
          path: "/"
        });
      }

      if (cookies.get("token", {
        path: "/admin/home-change"
      }) != undefined) {
        cookies.remove("token", {
          path: "/admin/home-change"
        });
      }

      if (cookies.get("token", {
        path: "/admin/material-change"
      }) != undefined) {
        cookies.remove("token", {
          path: "/admin/material-change"
        });
      }

      if (cookies.get("token", {
        path: "/admin/tips-change"
      }) != undefined) {
        cookies.remove("token", {
          path: "/admin/tips-change"
        });
      }

      if (cookies.get("token", {
        path: "/admin/policies-change"
      }) != undefined) {
        cookies.remove("token", {
          path: "/admin/policies-change"
        });
      }

      if (cookies.get("token", {
        path: "/admin/policies-new"
      }) != undefined) {
        cookies.remove("token", {
          path: "/admin/policies-new"
        });
      }

      if (cookies.get("token", {
        path: "/admin/glossary-change"
      }) != undefined) {
        cookies.remove("token", {
          path: "/admin/glossary-change"
        });
      }

      if (cookies.get("token", {
        path: "/admin/glossary-new"
      }) != undefined) {
        cookies.remove("token", {
          path: "/admin/glossary-new"
        });
      }

      if (cookies.get("token", {
        path: "/admin/user-change"
      }) != undefined) {
        cookies.remove("token", {
          path: "/admin/user-change"
        });
      }

      if (cookies.get("token", {
        path: "/admin/register"
      }) != undefined) {
        cookies.remove("token", {
          path: "/admin/register"
        });
      }

      if (cookies.get("token", {
        path: "/admin/resilience-change"
      }) != undefined) {
        cookies.remove("token", {
          path: "/admin/resilience-change"
        });
      }

      if (cookies.get("token", {
        path: "/admin/videos-new"
      }) != undefined) {
        cookies.remove("token", {
          path: "/admin/videos-new"
        });
      }

      if (cookies.get("token", {
        path: "/admin/videos-change"
      }) != undefined) {
        cookies.remove("token", {
          path: "/admin/videos-change"
        });
      }

      if (cookies.get("token", {
        path: "/admin/cultural-new"
      }) != undefined) {
        cookies.remove("token", {
          path: "/admin/cultural-new"
        });
      }

      if (cookies.get("token", {
        path: "/admin/cultural-change"
      }) != undefined) {
        cookies.remove("token", {
          path: "/admin/cultural-change"
        });
      }

      if (cookies.get("token", {
        path: "/cultural/mexico"
      }) != undefined) {
        cookies.remove("token", {
          path: "/cultural/mexico"
        });
      }

      if (cookies.get("token", {
        path: "/cultural/argentina"
      }) != undefined) {
        cookies.remove("token", {
          path: "/cultural/argentina"
        });
      }

      if (cookies.get("token", {
        path: "/cultural/chile"
      }) != undefined) {
        cookies.remove("token", {
          path: "/cultural/chile"
        });
      }

      if (cookies.get("token", {
        path: "/cultural/brasil"
      }) != undefined) {
        cookies.remove("token", {
          path: "/cultural/brasil"
        });
      }

      if (cookies.get("token", {
        path: "/policies/ccm"
      }) != undefined) {
        cookies.remove("token", {
          path: "/policies/ccm"
        });
      }

      if (cookies.get("token", {
        path: "/policies/cqc"
      }) != undefined) {
        cookies.remove("token", {
          path: "/policies/cqc"
        });
      }

      if (cookies.get("token", {
        path: "/admin"
      }) != undefined) {
        cookies.remove("token", {
          path: "/admin"
        });
      }

      if (cookies.get("token", {
        path: "/glossary"
      }) != undefined) {
        cookies.remove("token", {
          path: "/glossary"
        });
      }

      if (cookies.get("token", {
        path: "/home"
      }) != undefined) {
        cookies.remove("token", {
          path: "/home"
        });
      }

      if (cookies.get("token", {
        path: "/index"
      }) != undefined) {
        cookies.remove("token", {
          path: "/index"
        });
      }

      if (cookies.get("token", {
        path: "/material"
      }) != undefined) {
        cookies.remove("token", {
          path: "/material"
        });
      }

      if (cookies.get("token", {
        path: "/tips"
      }) != undefined) {
        cookies.remove("token", {
          path: "/tips"
        });
      }

      if (cookies.get("token", {
        path: "/resilience"
      }) != undefined) {
        cookies.remove("token", {
          path: "/resilience"
        });
      }

      if (cookies.get("token", {
        path: "/statistics"
      }) != undefined) {
        cookies.remove("token", {
          path: "/statistics"
        });
      }

      if (cookies.get("token", {
        path: "/surveyCE"
      }) != undefined) {
        cookies.remove("token", {
          path: "/surveyCE"
        });
      }

      if (cookies.get("token", {
        path: "/surveyMD"
      }) != undefined) {
        cookies.remove("token", {
          path: "/surveyMD"
        });
      }

      if (cookies.get("token", {
        path: "/videos"
      }) != undefined) {
        cookies.remove("token", {
          path: "/videos"
        });
      }

      if (cookies.get("token", {
        path: "/news"
      }) != undefined) {
        cookies.remove("token", {
          path: "/news"
        });
      }
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "submenu", function () {
      var content = document.getElementById("training-des-menu");

      if (content.style.display === "block") {
        content.style.display = "none";
      } else {
        content.style.display = "block";
      }
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "renderAdmin", function () {
      var dataLang = _this.state.dataLang;
      return __jsx("li", {
        className: "class-back",
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 190,
          columnNumber: 7
        }
      }, __jsx("a", {
        href: _local__WEBPACK_IMPORTED_MODULE_15__["default"].url + "admin",
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 191,
          columnNumber: 9
        }
      }, __jsx("i", {
        className: "fas fa-address-card",
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 192,
          columnNumber: 11
        }
      }, __jsx("img", {
        src: "/assents/icons/id-card-solid.svg",
        width: "30",
        height: "30",
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 193,
          columnNumber: 13
        }
      })), dataLang.menuAdmin));
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "renderSurveyStaff", function () {
      var dataLang = _this.state.dataLang;
      return __jsx("a", {
        href: _local__WEBPACK_IMPORTED_MODULE_15__["default"].url + "surveyCE",
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 204,
          columnNumber: 7
        }
      }, __jsx("i", {
        className: "fas fa-book-reader",
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 205,
          columnNumber: 9
        }
      }, __jsx("img", {
        src: "/assents/icons/observation.svg",
        width: "30",
        height: "30",
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 206,
          columnNumber: 11
        }
      })), dataLang.surveyStaff);
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "renderList", function () {
      var dataLang = _this.state.dataLang;
      var rol = _this.state.rol;
      return __jsx("div", {
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 217,
          columnNumber: 7
        }
      }, __jsx("div", {
        id: "hover-menu",
        className: "",
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 218,
          columnNumber: 9
        }
      }), __jsx("div", {
        className: "Menu",
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 219,
          columnNumber: 9
        }
      }, __jsx("input", {
        type: "checkbox",
        id: "check",
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 220,
          columnNumber: 11
        }
      }), __jsx("label", {
        htmlFor: "check",
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 221,
          columnNumber: 11
        }
      }, __jsx("i", {
        className: "fas fa-bars",
        id: "btn",
        onClick: _this.openNav,
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 222,
          columnNumber: 13
        }
      }, __jsx("img", {
        src: "/assents/icons/bars-solid.svg",
        width: "40",
        height: "40",
        style: {
          marginBottom: "20px"
        },
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 223,
          columnNumber: 15
        }
      }), __jsx("a", {
        href: _local__WEBPACK_IMPORTED_MODULE_15__["default"].url + "home",
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 224,
          columnNumber: 15
        }
      }, __jsx("img", {
        src: "/assents/icons/Logo-Home.png",
        width: "320",
        height: "70",
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 225,
          columnNumber: 17
        }
      }))), __jsx("i", {
        className: "fas fa-times",
        id: "cancel",
        onClick: _this.closeNav,
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 228,
          columnNumber: 13
        }
      }, __jsx("img", {
        src: "/assents/icons/times-solid.svg",
        width: "35",
        height: "35",
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 229,
          columnNumber: 15
        }
      }))), __jsx("div", {
        className: "sidebar hand-cursor",
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 232,
          columnNumber: 11
        }
      }, __jsx("header", {
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 233,
          columnNumber: 13
        }
      }, __jsx("img", {
        src: "/assents/icons/logo-dark-.svg",
        width: "50",
        height: "50",
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 234,
          columnNumber: 15
        }
      }), __jsx("img", {
        src: "/assents/icons/logo-text-dark.svg",
        width: "50",
        height: "50",
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 235,
          columnNumber: 15
        }
      })), __jsx("ul", {
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 237,
          columnNumber: 13
        }
      }, rol == 2 || rol == 3 || rol == 4 ? _this.renderAdmin() : null, __jsx("div", {
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 239,
          columnNumber: 15
        }
      }, __jsx("li", {
        className: "class-back-QA",
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 240,
          columnNumber: 15
        }
      }, __jsx("a", {
        href: _localQA__WEBPACK_IMPORTED_MODULE_16__["default"].url + "url?tkn=" + cookies.get('token') + '&lng=' + cookies.get('language'),
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 241,
          columnNumber: 17
        }
      }, __jsx("i", {
        className: "fas fa-spell-check",
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 242,
          columnNumber: 19
        }
      }, __jsx("img", {
        src: "/assents/icons/tik-tok.svg",
        width: "30",
        height: "30",
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 243,
          columnNumber: 21
        }
      })), "Tiktok QA")), __jsx("li", {
        className: "class-back-metricas",
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 248,
          columnNumber: 15
        }
      }, __jsx("a", {
        href: _localMetrics__WEBPACK_IMPORTED_MODULE_17__["default"].url + "url?tkn=" + cookies.get('token') + '&lng=' + cookies.get('language'),
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 249,
          columnNumber: 17
        }
      }, __jsx("i", {
        className: "fas fa-spell-check",
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 250,
          columnNumber: 19
        }
      }, __jsx("img", {
        src: "/assents/icons/metricas.svg",
        width: "30",
        height: "30",
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 251,
          columnNumber: 22
        }
      })), "Tiktok Metrics")), __jsx("li", {
        className: "dropdown-submenu",
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 256,
          columnNumber: 17
        }
      }, __jsx("a", {
        className: "class-back dropdown-toggle",
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 257,
          columnNumber: 19
        }
      }, __jsx("i", {
        className: "fas fa-book-reader",
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 258,
          columnNumber: 21
        }
      }, __jsx("img", {
        src: "/assents/icons/book-reader-solid.svg",
        width: "30",
        height: "30",
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 259,
          columnNumber: 23
        }
      })), dataLang.menuTraining), __jsx("ul", {
        className: "dropdown-menu",
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 263,
          columnNumber: 19
        }
      }, __jsx("li", {
        className: "class-back",
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 264,
          columnNumber: 19
        }
      }, __jsx("a", {
        href: _local__WEBPACK_IMPORTED_MODULE_15__["default"].url + "glossary",
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 265,
          columnNumber: 17
        }
      }, __jsx("i", {
        className: "fas fa-spell-check",
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 266,
          columnNumber: 19
        }
      }, __jsx("img", {
        src: "/assents/icons/glossary.svg",
        width: "30",
        height: "30",
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 267,
          columnNumber: 21
        }
      })), dataLang.menuGlossary)), __jsx("li", {
        className: "dropdown-submenu",
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 272,
          columnNumber: 15
        }
      }, __jsx("a", {
        className: "class-back dropdown-toggle",
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 273,
          columnNumber: 19
        }
      }, __jsx("i", {
        className: "fas fa-book-reader",
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 274,
          columnNumber: 21
        }
      }, __jsx("img", {
        src: "/assents/icons/cultural.svg",
        width: "30",
        height: "30",
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 275,
          columnNumber: 23
        }
      })), dataLang.menuCultural), __jsx("ul", {
        className: "dropdown-menu",
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 279,
          columnNumber: 19
        }
      }, __jsx("li", {
        className: "sub-class",
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 280,
          columnNumber: 21
        }
      }, __jsx("a", {
        href: _local__WEBPACK_IMPORTED_MODULE_15__["default"].url + "cultural/mexico",
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 281,
          columnNumber: 23
        }
      }, __jsx("i", {
        className: "fas fa-book-reader",
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 282,
          columnNumber: 25
        }
      }, __jsx("img", {
        src: "/assents/icons/culmexico.svg",
        width: "30",
        height: "30",
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 283,
          columnNumber: 27
        }
      })), dataLang.culturalMX)), __jsx("li", {
        className: "sub-class",
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 288,
          columnNumber: 21
        }
      }, __jsx("a", {
        href: _local__WEBPACK_IMPORTED_MODULE_15__["default"].url + "cultural/argentina",
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 289,
          columnNumber: 23
        }
      }, __jsx("i", {
        className: "fas fa-book-reader",
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 290,
          columnNumber: 25
        }
      }, __jsx("img", {
        src: "/assents/icons/culargentina.svg",
        width: "30",
        height: "30",
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 291,
          columnNumber: 27
        }
      })), dataLang.culturalAR)), __jsx("li", {
        className: "sub-class",
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 296,
          columnNumber: 21
        }
      }, __jsx("a", {
        href: _local__WEBPACK_IMPORTED_MODULE_15__["default"].url + "cultural/chile",
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 297,
          columnNumber: 23
        }
      }, __jsx("i", {
        className: "fas fa-book-reader",
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 298,
          columnNumber: 25
        }
      }, __jsx("img", {
        src: "/assents/icons/culchile.svg",
        width: "30",
        height: "30",
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 299,
          columnNumber: 27
        }
      })), dataLang.culturalCH)), __jsx("li", {
        className: "sub-class",
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 304,
          columnNumber: 21
        }
      }, __jsx("a", {
        href: _local__WEBPACK_IMPORTED_MODULE_15__["default"].url + "cultural/brasil",
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 305,
          columnNumber: 23
        }
      }, __jsx("i", {
        className: "fas fa-book-reader",
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 306,
          columnNumber: 25
        }
      }, __jsx("img", {
        src: "/assents/icons/culbrasil.svg",
        width: "30",
        height: "30",
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 307,
          columnNumber: 27
        }
      })), dataLang.culturalBR)))), __jsx("li", {
        className: "sub-class",
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 314,
          columnNumber: 21
        }
      }, __jsx("a", {
        href: _local__WEBPACK_IMPORTED_MODULE_15__["default"].url + "statistics",
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 315,
          columnNumber: 23
        }
      }, __jsx("i", {
        className: "fas fa-book-reader",
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 316,
          columnNumber: 25
        }
      }, __jsx("img", {
        src: "/assents/icons/esticon.svg",
        width: "30",
        height: "30",
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 317,
          columnNumber: 27
        }
      })), dataLang.menuStatistics)), __jsx("li", {
        className: "sub-class",
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 322,
          columnNumber: 21
        }
      }, __jsx("a", {
        href: _local__WEBPACK_IMPORTED_MODULE_15__["default"].url + "material",
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 323,
          columnNumber: 23
        }
      }, __jsx("i", {
        className: "fas fa-book-reader",
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 324,
          columnNumber: 25
        }
      }, __jsx("img", {
        src: "/assents/icons/maticon.svg",
        width: "30",
        height: "30",
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 325,
          columnNumber: 27
        }
      })), dataLang.menuMaterial)), __jsx("li", {
        className: "sub-class",
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 330,
          columnNumber: 21
        }
      }, __jsx("a", {
        href: _local__WEBPACK_IMPORTED_MODULE_15__["default"].url + "resilience",
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 331,
          columnNumber: 23
        }
      }, __jsx("i", {
        className: "fas fa-book-reader",
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 332,
          columnNumber: 25
        }
      }, __jsx("img", {
        src: "/assents/icons/resiliencia.svg",
        width: "30",
        height: "30",
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 333,
          columnNumber: 27
        }
      })), dataLang.menuResilience)), __jsx("li", {
        className: "sub-class",
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 338,
          columnNumber: 21
        }
      }, __jsx("a", {
        href: _local__WEBPACK_IMPORTED_MODULE_15__["default"].url + "tips",
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 339,
          columnNumber: 23
        }
      }, __jsx("i", {
        className: "fas fa-book-reader",
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 340,
          columnNumber: 25
        }
      }, __jsx("img", {
        src: "/assents/icons/tips.svg",
        width: "30",
        height: "30",
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 341,
          columnNumber: 27
        }
      })), dataLang.menuTips))))), __jsx("div", {
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 349,
          columnNumber: 15
        }
      }, __jsx("li", {
        className: "dropdown-submenu",
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 350,
          columnNumber: 17
        }
      }, __jsx("a", {
        className: "class-back dropdown-toggle",
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 351,
          columnNumber: 19
        }
      }, __jsx("i", {
        className: "fas fas fa-book",
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 352,
          columnNumber: 21
        }
      }, __jsx("img", {
        src: "/assents/icons/book-solid.svg",
        width: "30",
        height: "30",
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 353,
          columnNumber: 23
        }
      })), dataLang.menuPolicies), __jsx("ul", {
        className: "dropdown-menu",
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 357,
          columnNumber: 19
        }
      }, __jsx("li", {
        className: "sub-class",
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 358,
          columnNumber: 21
        }
      }, __jsx("a", {
        href: _local__WEBPACK_IMPORTED_MODULE_15__["default"].url + "policies/cqc",
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 359,
          columnNumber: 23
        }
      }, __jsx("i", {
        className: "fas fa-book-reader",
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 360,
          columnNumber: 25
        }
      }, __jsx("img", {
        src: "/assents/icons/conocimiento.svg",
        width: "30",
        height: "30",
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 361,
          columnNumber: 27
        }
      })), dataLang.policiesCCM)), __jsx("li", {
        className: "sub-class",
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 366,
          columnNumber: 21
        }
      }, __jsx("a", {
        href: _local__WEBPACK_IMPORTED_MODULE_15__["default"].url + "policies/ccm",
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 367,
          columnNumber: 23
        }
      }, __jsx("i", {
        className: "fas fa-book-reader",
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 368,
          columnNumber: 25
        }
      }, __jsx("img", {
        src: "/assents/icons/libro.svg",
        width: "30",
        height: "30",
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 369,
          columnNumber: 27
        }
      })), dataLang.policiesCQC)), __jsx("li", {
        className: "sub-class",
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 374,
          columnNumber: 21
        }
      }, __jsx("a", {
        href: _local__WEBPACK_IMPORTED_MODULE_15__["default"].url + "videos",
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 375,
          columnNumber: 23
        }
      }, __jsx("i", {
        className: "fas fa-book-reader",
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 376,
          columnNumber: 25
        }
      }, __jsx("img", {
        src: "/assents/icons/youtube.svg",
        width: "30",
        height: "30",
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 377,
          columnNumber: 27
        }
      })), dataLang.policiesVideos))))), __jsx("div", {
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 385,
          columnNumber: 15
        }
      }, __jsx("li", {
        className: "dropdown-submenu",
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 386,
          columnNumber: 17
        }
      }, __jsx("a", {
        className: "class-back dropdown-toggle",
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 387,
          columnNumber: 19
        }
      }, __jsx("i", {
        className: "fas fa-book-reader",
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 388,
          columnNumber: 21
        }
      }, __jsx("img", {
        src: "/assents/icons/survey.svg",
        width: "30",
        height: "30",
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 389,
          columnNumber: 23
        }
      })), dataLang.menuSurvey), __jsx("ul", {
        className: "dropdown-menu",
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 393,
          columnNumber: 19
        }
      }, __jsx("li", {
        className: "sub-class",
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 394,
          columnNumber: 21
        }
      }, __jsx("a", {
        href: _local__WEBPACK_IMPORTED_MODULE_15__["default"].url + "surveyMD",
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 395,
          columnNumber: 23
        }
      }, __jsx("i", {
        className: "fas fa-book-reader",
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 396,
          columnNumber: 25
        }
      }, __jsx("img", {
        src: "/assents/icons/survey1.svg",
        width: "30",
        height: "30",
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 397,
          columnNumber: 27
        }
      })), dataLang.suveryModerator)), __jsx("li", {
        className: "sub-class",
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 402,
          columnNumber: 21
        }
      }, rol == 2 || rol == 3 || rol == 4 || rol == 5 ? _this.renderSurveyStaff() : null)))), __jsx("li", {
        className: "class-back",
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 406,
          columnNumber: 15
        }
      }, __jsx("a", {
        href: _local__WEBPACK_IMPORTED_MODULE_15__["default"].url + "news",
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 407,
          columnNumber: 17
        }
      }, __jsx("i", {
        className: "fas fa-spell-check",
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 408,
          columnNumber: 19
        }
      }, __jsx("img", {
        src: "/assents/icons/spell-check-solid.svg",
        width: "30",
        height: "30",
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 409,
          columnNumber: 21
        }
      })), dataLang.menuNew)), __jsx("li", {
        className: "class-back",
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 415,
          columnNumber: 15
        }
      }, __jsx("a", {
        onClick: _this.cookiesRemover,
        href: _local__WEBPACK_IMPORTED_MODULE_15__["default"].url + "index ",
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 416,
          columnNumber: 17
        }
      }, __jsx("i", {
        className: "far fa-arrow-alt-circle-left",
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 417,
          columnNumber: 19
        }
      }, __jsx("img", {
        src: "/assents/icons/sign-out-alt-solid.svg",
        width: "30",
        height: "30",
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 418,
          columnNumber: 21
        }
      })), dataLang.menuLogout))))));
    });

    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Menu, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var auxload, auxrol, language, onPingCall, dataToT, auxData;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function componentDidMount$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              onPingCall = function _onPingCall() {
                var token, decoded, res;
                return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function onPingCall$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        _context.next = 2;
                        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(cookies.get("token"));

                      case 2:
                        token = _context.sent;

                        if (token != undefined) {
                          decoded = jwtDecode(token);
                        }

                        _context.prev = 4;
                        _context.next = 7;
                        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(axios__WEBPACK_IMPORTED_MODULE_11___default.a.post(_global__WEBPACK_IMPORTED_MODULE_13__["default"].url + "home", {
                          headers: {
                            "access-token": token,
                            "key-token": "codekey:!m@!K3CjDz*NdInr7Q773u3hj*G%5Kl$zZ^%Uz%Z5v#jf2humR"
                          }
                        }));

                      case 7:
                        res = _context.sent;

                        if (!(token != undefined)) {
                          _context.next = 12;
                          break;
                        }

                        _context.next = 11;
                        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(decoded.role);

                      case 11:
                        auxrol = _context.sent;

                      case 12:
                        _context.next = 14;
                        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(false);

                      case 14:
                        auxload = _context.sent;
                        _context.next = 19;
                        break;

                      case 17:
                        _context.prev = 17;
                        _context.t0 = _context["catch"](4);

                      case 19:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, null, null, [[4, 17]], Promise);
              };

              auxload = true;
              auxrol = 1;
              _context2.next = 5;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(cookies.get("language"));

            case 5:
              language = _context2.sent;

              if (language == undefined) {
                next_router__WEBPACK_IMPORTED_MODULE_10___default.a.push("/index");
              }

              dataToT = {};
              _context2.next = 10;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(axios__WEBPACK_IMPORTED_MODULE_11___default.a.get(_global__WEBPACK_IMPORTED_MODULE_13__["default"].url + "multi-language").then(function (res) {
                dataToT = res.data;
              }));

            case 10:
              _context2.next = 12;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(dataToT[language]);

            case 12:
              auxData = _context2.sent;
              _context2.next = 15;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(onPingCall());

            case 15:
              this.setState({
                dataLang: auxData,
                loading: auxload,
                rol: auxrol
              });

            case 16:
            case "end":
              return _context2.stop();
          }
        }
      }, null, this, null, Promise);
    }
  }, {
    key: "openNav",
    value: function openNav() {
      var element = document.getElementById("hover-menu");
      element.classList.add("overlay-menu");
    }
  }, {
    key: "closeNav",
    value: function closeNav() {
      var element = document.getElementById("hover-menu");
      element.classList.remove("overlay-menu");
    }
  }, {
    key: "render",
    value: function render() {
      var loading = this.state.loading;
      return __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 431,
          columnNumber: 12
        }
      }, loading ? null : this.renderList());
    }
  }]);

  return Menu;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Menu);

/***/ }),

/***/ "./src/localMetrics.js":
/*!*****************************!*\
  !*** ./src/localMetrics.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var Local = {
  url: 'http://localhost:3002/'
};
/* harmony default export */ __webpack_exports__["default"] = (Local);

/***/ })

})
//# sourceMappingURL=home.js.dfd93f95720bcee85c67.hot-update.js.map