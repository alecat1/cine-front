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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/bootstrap/dist/css/bootstrap.min.css":
/*!***********************************************************!*\
  !*** ./node_modules/bootstrap/dist/css/bootstrap.min.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/video-react/dist/video-react.css":
/*!*******************************************************!*\
  !*** ./node_modules/video-react/dist/video-react.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/home.js":
/*!***********************!*\
  !*** ./pages/home.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _src_components_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/components/menu */ "./src/components/menu/index.js");
/* harmony import */ var _src_components_bubble__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/components/bubble */ "./src/components/bubble/index.js");
/* harmony import */ var _src_components_mediavideos__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/components/mediavideos */ "./src/components/mediavideos/index.js");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var video_react_dist_video_react_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! video-react/dist/video-react.css */ "./node_modules/video-react/dist/video-react.css");
/* harmony import */ var video_react_dist_video_react_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(video_react_dist_video_react_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _src_components_admin_tips_tips_change_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../src/components/admin/tips/tips-change.css */ "./src/components/admin/tips/tips-change.css");
/* harmony import */ var _src_components_admin_tips_tips_change_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_src_components_admin_tips_tips_change_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _src_components_tips_tips_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../src/components/tips/tips.css */ "./src/components/tips/tips.css");
/* harmony import */ var _src_components_tips_tips_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_src_components_tips_tips_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _src_components_admin_admin_admin_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../src/components/admin/admin/admin.css */ "./src/components/admin/admin/admin.css");
/* harmony import */ var _src_components_admin_admin_admin_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_src_components_admin_admin_admin_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _src_components_admin_glossary_change_glossary_change_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../src/components/admin/glossary/change/glossary-change.css */ "./src/components/admin/glossary/change/glossary-change.css");
/* harmony import */ var _src_components_admin_glossary_change_glossary_change_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_src_components_admin_glossary_change_glossary_change_css__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _src_components_admin_glossary_new_glossary_new_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../src/components/admin/glossary/new/glossary-new.css */ "./src/components/admin/glossary/new/glossary-new.css");
/* harmony import */ var _src_components_admin_glossary_new_glossary_new_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_src_components_admin_glossary_new_glossary_new_css__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _src_components_admin_home_home_change_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../src/components/admin/home/home-change.css */ "./src/components/admin/home/home-change.css");
/* harmony import */ var _src_components_admin_home_home_change_css__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_src_components_admin_home_home_change_css__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _src_components_admin_material_material_change_css__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../src/components/admin/material/material-change.css */ "./src/components/admin/material/material-change.css");
/* harmony import */ var _src_components_admin_material_material_change_css__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_src_components_admin_material_material_change_css__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _src_components_admin_policies_change_policies_change_css__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../src/components/admin/policies/change/policies-change.css */ "./src/components/admin/policies/change/policies-change.css");
/* harmony import */ var _src_components_admin_policies_change_policies_change_css__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_src_components_admin_policies_change_policies_change_css__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _src_components_admin_policies_new_policies_new_css__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../src/components/admin/policies/new/policies-new.css */ "./src/components/admin/policies/new/policies-new.css");
/* harmony import */ var _src_components_admin_policies_new_policies_new_css__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_src_components_admin_policies_new_policies_new_css__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _src_components_admin_register_register_css__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../src/components/admin/register/register.css */ "./src/components/admin/register/register.css");
/* harmony import */ var _src_components_admin_register_register_css__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_src_components_admin_register_register_css__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _src_components_admin_resilience_resilience_change_css__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../src/components/admin/resilience/resilience-change.css */ "./src/components/admin/resilience/resilience-change.css");
/* harmony import */ var _src_components_admin_resilience_resilience_change_css__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_src_components_admin_resilience_resilience_change_css__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _src_components_admin_user_user_change_css__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../src/components/admin/user/user-change.css */ "./src/components/admin/user/user-change.css");
/* harmony import */ var _src_components_admin_user_user_change_css__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_src_components_admin_user_user_change_css__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _src_components_cultural_argentina_argentina_css__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../src/components/cultural/argentina/argentina.css */ "./src/components/cultural/argentina/argentina.css");
/* harmony import */ var _src_components_cultural_argentina_argentina_css__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_src_components_cultural_argentina_argentina_css__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _src_components_cultural_mexico_mexico_css__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../src/components/cultural/mexico/mexico.css */ "./src/components/cultural/mexico/mexico.css");
/* harmony import */ var _src_components_cultural_mexico_mexico_css__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_src_components_cultural_mexico_mexico_css__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _src_components_cultural_brasil_brasil_css__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../src/components/cultural/brasil/brasil.css */ "./src/components/cultural/brasil/brasil.css");
/* harmony import */ var _src_components_cultural_brasil_brasil_css__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(_src_components_cultural_brasil_brasil_css__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var _src_components_cultural_chile_chile_css__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../src/components/cultural/chile/chile.css */ "./src/components/cultural/chile/chile.css");
/* harmony import */ var _src_components_cultural_chile_chile_css__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(_src_components_cultural_chile_chile_css__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var _src_components_footer_footer_css__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../src/components/footer/footer.css */ "./src/components/footer/footer.css");
/* harmony import */ var _src_components_footer_footer_css__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(_src_components_footer_footer_css__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var _src_components_login_login_css__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../src/components/login/login.css */ "./src/components/login/login.css");
/* harmony import */ var _src_components_login_login_css__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(_src_components_login_login_css__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var _src_components_material_material_css__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../src/components/material/material.css */ "./src/components/material/material.css");
/* harmony import */ var _src_components_material_material_css__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(_src_components_material_material_css__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var _src_components_mediavideos_mediavideos_css__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../src/components/mediavideos/mediavideos.css */ "./src/components/mediavideos/mediavideos.css");
/* harmony import */ var _src_components_mediavideos_mediavideos_css__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(_src_components_mediavideos_mediavideos_css__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var _src_components_menu_menu_css__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../src/components/menu/menu.css */ "./src/components/menu/menu.css");
/* harmony import */ var _src_components_menu_menu_css__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(_src_components_menu_menu_css__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var _src_components_policies_ccm_ccm_css__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../src/components/policies/ccm/ccm.css */ "./src/components/policies/ccm/ccm.css");
/* harmony import */ var _src_components_policies_ccm_ccm_css__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(_src_components_policies_ccm_ccm_css__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var _src_components_policies_cqc_cqc_css__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../src/components/policies/cqc/cqc.css */ "./src/components/policies/cqc/cqc.css");
/* harmony import */ var _src_components_policies_cqc_cqc_css__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(_src_components_policies_cqc_cqc_css__WEBPACK_IMPORTED_MODULE_30__);
/* harmony import */ var _src_components_resilience_resilience_css__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../src/components/resilience/resilience.css */ "./src/components/resilience/resilience.css");
/* harmony import */ var _src_components_resilience_resilience_css__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(_src_components_resilience_resilience_css__WEBPACK_IMPORTED_MODULE_31__);
/* harmony import */ var _src_components_statistics_statistics_css__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ../src/components/statistics/statistics.css */ "./src/components/statistics/statistics.css");
/* harmony import */ var _src_components_statistics_statistics_css__WEBPACK_IMPORTED_MODULE_32___default = /*#__PURE__*/__webpack_require__.n(_src_components_statistics_statistics_css__WEBPACK_IMPORTED_MODULE_32__);
/* harmony import */ var _src_components_word_word_css__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ../src/components/word/word.css */ "./src/components/word/word.css");
/* harmony import */ var _src_components_word_word_css__WEBPACK_IMPORTED_MODULE_33___default = /*#__PURE__*/__webpack_require__.n(_src_components_word_word_css__WEBPACK_IMPORTED_MODULE_33__);
/* harmony import */ var _src_components_videos_videos_css__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ../src/components/videos/videos.css */ "./src/components/videos/videos.css");
/* harmony import */ var _src_components_videos_videos_css__WEBPACK_IMPORTED_MODULE_34___default = /*#__PURE__*/__webpack_require__.n(_src_components_videos_videos_css__WEBPACK_IMPORTED_MODULE_34__);
/* harmony import */ var _src_components_bubble_bubble_css__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ../src/components/bubble/bubble.css */ "./src/components/bubble/bubble.css");
/* harmony import */ var _src_components_bubble_bubble_css__WEBPACK_IMPORTED_MODULE_35___default = /*#__PURE__*/__webpack_require__.n(_src_components_bubble_bubble_css__WEBPACK_IMPORTED_MODULE_35__);
/* harmony import */ var _src_components_admin_videos_new_videos_new_css__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ../src/components/admin/videos/new/videos-new.css */ "./src/components/admin/videos/new/videos-new.css");
/* harmony import */ var _src_components_admin_videos_new_videos_new_css__WEBPACK_IMPORTED_MODULE_36___default = /*#__PURE__*/__webpack_require__.n(_src_components_admin_videos_new_videos_new_css__WEBPACK_IMPORTED_MODULE_36__);
/* harmony import */ var _src_components_admin_videos_change_videos_change_css__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ../src/components/admin/videos/change/videos-change.css */ "./src/components/admin/videos/change/videos-change.css");
/* harmony import */ var _src_components_admin_videos_change_videos_change_css__WEBPACK_IMPORTED_MODULE_37___default = /*#__PURE__*/__webpack_require__.n(_src_components_admin_videos_change_videos_change_css__WEBPACK_IMPORTED_MODULE_37__);
var _jsxFileName = "C:\\Users\\lopezvalenzuela.16\\Documents\\GitHub\\tp-tiktok-front\\pages\\home.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






































function Home() {
  return __jsx("div", {
    className: "jsx-1725750857",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 5
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }
  }, __jsx("title", {
    className: "jsx-1725750857",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 9
    }
  }, "Tiktok Web Site - Home"), __jsx("link", {
    rel: "icon",
    href: "/assents/icons/favicon.png",
    className: "jsx-1725750857",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 9
    }
  })), __jsx(_src_components_menu__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }
  }), __jsx(_src_components_bubble__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 7
    }
  }), __jsx(_src_components_mediavideos__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 7
    }
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1725750857",
    __self: this
  }, "body{margin:0;padding:0;background:url(\"/assents/images/Background_Registro_1366_768.png\");background-repeat:no-repeat;background-size:cover;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcbG9wZXp2YWxlbnp1ZWxhLjE2XFxEb2N1bWVudHNcXEdpdEh1YlxcdHAtdGlrdG9rLWZyb250XFxwYWdlc1xcaG9tZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtRHlCLEFBR29CLFNBQ0MsVUFDeUQsbUVBQ3ZDLDRCQUNOLHNCQUN4QiIsImZpbGUiOiJDOlxcVXNlcnNcXGxvcGV6dmFsZW56dWVsYS4xNlxcRG9jdW1lbnRzXFxHaXRIdWJcXHRwLXRpa3Rvay1mcm9udFxccGFnZXNcXGhvbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbmltcG9ydCBNZW51IGZyb20gXCIuLi9zcmMvY29tcG9uZW50cy9tZW51XCI7XHJcbmltcG9ydCBCdWJibGUgZnJvbSBcIi4uL3NyYy9jb21wb25lbnRzL2J1YmJsZVwiO1xyXG5pbXBvcnQgTWVkaWFWaWRlb3MgZnJvbSBcIi4uL3NyYy9jb21wb25lbnRzL21lZGlhdmlkZW9zXCI7XHJcbmltcG9ydCBcImJvb3RzdHJhcC9kaXN0L2Nzcy9ib290c3RyYXAubWluLmNzc1wiO1xyXG5pbXBvcnQgXCJ2aWRlby1yZWFjdC9kaXN0L3ZpZGVvLXJlYWN0LmNzc1wiO1xyXG5cclxuaW1wb3J0IFwiLi4vc3JjL2NvbXBvbmVudHMvYWRtaW4vdGlwcy90aXBzLWNoYW5nZS5jc3NcIjtcclxuaW1wb3J0IFwiLi4vc3JjL2NvbXBvbmVudHMvdGlwcy90aXBzLmNzc1wiO1xyXG5pbXBvcnQgXCIuLi9zcmMvY29tcG9uZW50cy9hZG1pbi9hZG1pbi9hZG1pbi5jc3NcIjtcclxuaW1wb3J0IFwiLi4vc3JjL2NvbXBvbmVudHMvYWRtaW4vZ2xvc3NhcnkvY2hhbmdlL2dsb3NzYXJ5LWNoYW5nZS5jc3NcIjtcclxuaW1wb3J0IFwiLi4vc3JjL2NvbXBvbmVudHMvYWRtaW4vZ2xvc3NhcnkvbmV3L2dsb3NzYXJ5LW5ldy5jc3NcIjtcclxuaW1wb3J0IFwiLi4vc3JjL2NvbXBvbmVudHMvYWRtaW4vaG9tZS9ob21lLWNoYW5nZS5jc3NcIjtcclxuaW1wb3J0IFwiLi4vc3JjL2NvbXBvbmVudHMvYWRtaW4vbWF0ZXJpYWwvbWF0ZXJpYWwtY2hhbmdlLmNzc1wiO1xyXG5pbXBvcnQgXCIuLi9zcmMvY29tcG9uZW50cy9hZG1pbi9wb2xpY2llcy9jaGFuZ2UvcG9saWNpZXMtY2hhbmdlLmNzc1wiO1xyXG5pbXBvcnQgXCIuLi9zcmMvY29tcG9uZW50cy9hZG1pbi9wb2xpY2llcy9uZXcvcG9saWNpZXMtbmV3LmNzc1wiO1xyXG5pbXBvcnQgXCIuLi9zcmMvY29tcG9uZW50cy9hZG1pbi9yZWdpc3Rlci9yZWdpc3Rlci5jc3NcIjtcclxuaW1wb3J0IFwiLi4vc3JjL2NvbXBvbmVudHMvYWRtaW4vcmVzaWxpZW5jZS9yZXNpbGllbmNlLWNoYW5nZS5jc3NcIjtcclxuaW1wb3J0IFwiLi4vc3JjL2NvbXBvbmVudHMvYWRtaW4vdXNlci91c2VyLWNoYW5nZS5jc3NcIjtcclxuaW1wb3J0IFwiLi4vc3JjL2NvbXBvbmVudHMvYWRtaW4vdXNlci91c2VyLWNoYW5nZS5jc3NcIjtcclxuaW1wb3J0IFwiLi4vc3JjL2NvbXBvbmVudHMvY3VsdHVyYWwvYXJnZW50aW5hL2FyZ2VudGluYS5jc3NcIlxyXG5pbXBvcnQgXCIuLi9zcmMvY29tcG9uZW50cy9jdWx0dXJhbC9tZXhpY28vbWV4aWNvLmNzc1wiXHJcbmltcG9ydCBcIi4uL3NyYy9jb21wb25lbnRzL2N1bHR1cmFsL2JyYXNpbC9icmFzaWwuY3NzXCJcclxuaW1wb3J0IFwiLi4vc3JjL2NvbXBvbmVudHMvY3VsdHVyYWwvY2hpbGUvY2hpbGUuY3NzXCJcclxuaW1wb3J0IFwiLi4vc3JjL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jc3NcIjtcclxuaW1wb3J0IFwiLi4vc3JjL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY3NzXCI7XHJcbmltcG9ydCBcIi4uL3NyYy9jb21wb25lbnRzL21hdGVyaWFsL21hdGVyaWFsLmNzc1wiO1xyXG5pbXBvcnQgXCIuLi9zcmMvY29tcG9uZW50cy9tZWRpYXZpZGVvcy9tZWRpYXZpZGVvcy5jc3NcIjtcclxuaW1wb3J0IFwiLi4vc3JjL2NvbXBvbmVudHMvbWVudS9tZW51LmNzc1wiO1xyXG5pbXBvcnQgXCIuLi9zcmMvY29tcG9uZW50cy9wb2xpY2llcy9jY20vY2NtLmNzc1wiO1xyXG5pbXBvcnQgXCIuLi9zcmMvY29tcG9uZW50cy9wb2xpY2llcy9jcWMvY3FjLmNzc1wiO1xyXG5pbXBvcnQgXCIuLi9zcmMvY29tcG9uZW50cy9yZXNpbGllbmNlL3Jlc2lsaWVuY2UuY3NzXCI7XHJcbmltcG9ydCBcIi4uL3NyYy9jb21wb25lbnRzL3N0YXRpc3RpY3Mvc3RhdGlzdGljcy5jc3NcIjtcclxuaW1wb3J0IFwiLi4vc3JjL2NvbXBvbmVudHMvd29yZC93b3JkLmNzc1wiO1xyXG5pbXBvcnQgXCIuLi9zcmMvY29tcG9uZW50cy92aWRlb3MvdmlkZW9zLmNzc1wiO1xyXG5pbXBvcnQgXCIuLi9zcmMvY29tcG9uZW50cy9idWJibGUvYnViYmxlLmNzc1wiO1xyXG5pbXBvcnQgXCIuLi9zcmMvY29tcG9uZW50cy9hZG1pbi92aWRlb3MvbmV3L3ZpZGVvcy1uZXcuY3NzXCI7XHJcbmltcG9ydCBcIi4uL3NyYy9jb21wb25lbnRzL2FkbWluL3ZpZGVvcy9jaGFuZ2UvdmlkZW9zLWNoYW5nZS5jc3NcIjtcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+VGlrdG9rIFdlYiBTaXRlIC0gSG9tZTwvdGl0bGU+XHJcbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvYXNzZW50cy9pY29ucy9mYXZpY29uLnBuZ1wiIC8+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgPE1lbnU+PC9NZW51PlxyXG4gICAgICA8QnViYmxlLz5cclxuICAgICAgPE1lZGlhVmlkZW9zPjwvTWVkaWFWaWRlb3M+XHJcbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXHJcbiAgICAgICAgYm9keSB7XHJcbiAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogdXJsKFwiL2Fzc2VudHMvaW1hZ2VzL0JhY2tncm91bmRfUmVnaXN0cm9fMTM2Nl83NjgucG5nXCIpO1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\lopezvalenzuela.16\\\\Documents\\\\GitHub\\\\tp-tiktok-front\\\\pages\\\\home.js */"));
}

/***/ }),

/***/ "./src/components/admin/admin/admin.css":
/*!**********************************************!*\
  !*** ./src/components/admin/admin/admin.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/components/admin/glossary/change/glossary-change.css":
/*!******************************************************************!*\
  !*** ./src/components/admin/glossary/change/glossary-change.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/components/admin/glossary/new/glossary-new.css":
/*!************************************************************!*\
  !*** ./src/components/admin/glossary/new/glossary-new.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/components/admin/home/home-change.css":
/*!***************************************************!*\
  !*** ./src/components/admin/home/home-change.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/components/admin/material/material-change.css":
/*!***********************************************************!*\
  !*** ./src/components/admin/material/material-change.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/components/admin/policies/change/policies-change.css":
/*!******************************************************************!*\
  !*** ./src/components/admin/policies/change/policies-change.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/components/admin/policies/new/policies-new.css":
/*!************************************************************!*\
  !*** ./src/components/admin/policies/new/policies-new.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/components/admin/register/register.css":
/*!****************************************************!*\
  !*** ./src/components/admin/register/register.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/components/admin/resilience/resilience-change.css":
/*!***************************************************************!*\
  !*** ./src/components/admin/resilience/resilience-change.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/components/admin/tips/tips-change.css":
/*!***************************************************!*\
  !*** ./src/components/admin/tips/tips-change.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/components/admin/user/user-change.css":
/*!***************************************************!*\
  !*** ./src/components/admin/user/user-change.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/components/admin/videos/change/videos-change.css":
/*!**************************************************************!*\
  !*** ./src/components/admin/videos/change/videos-change.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/components/admin/videos/new/videos-new.css":
/*!********************************************************!*\
  !*** ./src/components/admin/videos/new/videos-new.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/components/bubble/bubble.css":
/*!******************************************!*\
  !*** ./src/components/bubble/bubble.css ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/components/bubble/bubble.js":
/*!*****************************************!*\
  !*** ./src/components/bubble/bubble.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-cookie */ "react-cookie");
/* harmony import */ var react_cookie__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_cookie__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _bubble_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bubble.css */ "./src/components/bubble/bubble.css");
/* harmony import */ var _bubble_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_bubble_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _local__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../local */ "./src/local.js");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../global */ "./src/global.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sweetalert */ "sweetalert");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "C:\\Users\\lopezvalenzuela.16\\Documents\\GitHub\\tp-tiktok-front\\src\\components\\bubble\\bubble.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








var jwtDecode = __webpack_require__(/*! jwt-decode */ "jwt-decode");

const cookies = new react_cookie__WEBPACK_IMPORTED_MODULE_1__["Cookies"]();

const Bubble = () => {
  const {
    0: state,
    1: setState
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])();
  const {
    0: params,
    1: setParams
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    (async () => {
      const token = await cookies.get('token');
      let decoded;

      if (token != undefined) {
        decoded = jwtDecode(token);
        setParams(decoded.id);
      }

      try {
        const res = await axios__WEBPACK_IMPORTED_MODULE_2___default.a.post(_global__WEBPACK_IMPORTED_MODULE_5__["default"].url + 'home', {
          headers: {
            'access-token': token,
            'key-token': 'codekey:!m@!K3CjDz*NdInr7Q773u3hj*G%5Kl$zZ^%Uz%Z5v#jf2humR'
          }
        });
      } catch (err) {}

      decoded && axios__WEBPACK_IMPORTED_MODULE_2___default.a.post(_global__WEBPACK_IMPORTED_MODULE_5__["default"].url + 'actual-state', {
        ccms: decoded.id
      }).then(res => {
        res.status === 204 ? setState(true) : setState(false);
      }).catch(err => {
        window.location.reload();
      });
    })();
  }, [state]);
  return state ? __jsx("div", {
    tag: "a",
    className: "bubble-page rotate-in-center",
    onClick: () => {
      axios__WEBPACK_IMPORTED_MODULE_2___default.a.post(_global__WEBPACK_IMPORTED_MODULE_5__["default"].url + 'delete-state', {
        ccms: params
      }).then(() => {
        let url = _local__WEBPACK_IMPORTED_MODULE_4__["default"].url + 'news';
        location.href = url;
      });
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 5
    }
  }, __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 7
    }
  }, "!!!")) : null;
};

/* harmony default export */ __webpack_exports__["default"] = (Bubble);

/***/ }),

/***/ "./src/components/bubble/index.js":
/*!****************************************!*\
  !*** ./src/components/bubble/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bubble__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bubble */ "./src/components/bubble/bubble.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _bubble__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/components/cultural/argentina/argentina.css":
/*!*********************************************************!*\
  !*** ./src/components/cultural/argentina/argentina.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/components/cultural/brasil/brasil.css":
/*!***************************************************!*\
  !*** ./src/components/cultural/brasil/brasil.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/components/cultural/chile/chile.css":
/*!*************************************************!*\
  !*** ./src/components/cultural/chile/chile.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/components/cultural/mexico/mexico.css":
/*!***************************************************!*\
  !*** ./src/components/cultural/mexico/mexico.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/components/footer/footer.css":
/*!******************************************!*\
  !*** ./src/components/footer/footer.css ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/components/login/login.css":
/*!****************************************!*\
  !*** ./src/components/login/login.css ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/components/material/material.css":
/*!**********************************************!*\
  !*** ./src/components/material/material.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/components/mediavideos/index.js":
/*!*********************************************!*\
  !*** ./src/components/mediavideos/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mediavideos__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mediavideos */ "./src/components/mediavideos/mediavideos.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _mediavideos__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/components/mediavideos/mediavideos.css":
/*!****************************************************!*\
  !*** ./src/components/mediavideos/mediavideos.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/components/mediavideos/mediavideos.js":
/*!***************************************************!*\
  !*** ./src/components/mediavideos/mediavideos.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-cookie */ "react-cookie");
/* harmony import */ var react_cookie__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_cookie__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mediavideos_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mediavideos.css */ "./src/components/mediavideos/mediavideos.css");
/* harmony import */ var _mediavideos_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mediavideos_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sweetalert */ "sweetalert");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_page_loading__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-page-loading */ "react-page-loading");
/* harmony import */ var react_page_loading__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_page_loading__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../global */ "./src/global.js");
var _jsxFileName = "C:\\Users\\lopezvalenzuela.16\\Documents\\GitHub\\tp-tiktok-front\\src\\components\\mediavideos\\mediavideos.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










const cookies = new react_cookie__WEBPACK_IMPORTED_MODULE_2__["Cookies"]();

class MediaVideos extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      loading: true,
      urls: [_global__WEBPACK_IMPORTED_MODULE_8__["default"].url + "get-image/1", _global__WEBPACK_IMPORTED_MODULE_8__["default"].url + "get-image/2", _global__WEBPACK_IMPORTED_MODULE_8__["default"].url + "get-image/3", _global__WEBPACK_IMPORTED_MODULE_8__["default"].url + "get-image/4", _global__WEBPACK_IMPORTED_MODULE_8__["default"].url + "get-image/5", _global__WEBPACK_IMPORTED_MODULE_8__["default"].url + "get-image/6"],
      dataLang: {}
    });

    _defineProperty(this, "renderList", () => {
      const {
        dataLang
      } = this.state;
      var homeview = this.state.urls.map((url, index) => {
        return __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
          className: "static-media mx-auto",
          key: index,
          xs: 12,
          sm: 12,
          md: 6,
          lg: 4,
          xl: 2,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 61,
            columnNumber: 9
          }
        }, __jsx("img", {
          src: url,
          width: "100%",
          height: "100%",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 62,
            columnNumber: 11
          }
        }));
      });
      return __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Container"], {
        fluid: true,
        className: "containertitulo",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 7
        }
      }, __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 9
        }
      }, dataLang.homeWelcome, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 11
        }
      }, homeview)));
    });

    _defineProperty(this, "espacio", () => {
      return __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 7
        }
      }, __jsx(react_page_loading__WEBPACK_IMPORTED_MODULE_7___default.a, {
        loader: "comet-spin",
        color: "#00cad4",
        size: 80,
        duration: 0.8,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 9
        }
      }));
    });
  }

  async componentDidMount() {
    let auxload = true;
    const language = await cookies.get("language");

    if (language == undefined) {
      next_router__WEBPACK_IMPORTED_MODULE_3___default.a.push("/index");
    }

    if (language == undefined) {
      next_router__WEBPACK_IMPORTED_MODULE_3___default.a.push("/index");
    }

    async function onPingCall() {
      const token = await cookies.get("token");

      try {
        const res = await axios__WEBPACK_IMPORTED_MODULE_4___default.a.post(_global__WEBPACK_IMPORTED_MODULE_8__["default"].url + "home", {
          headers: {
            "access-token": token,
            "key-token": "codekey:!m@!K3CjDz*NdInr7Q773u3hj*G%5Kl$zZ^%Uz%Z5v#jf2humR"
          }
        });
        auxload = false;
      } catch (err) {
        if (language == 'en') {
          sweetalert__WEBPACK_IMPORTED_MODULE_6___default()("Session Expired", "Please sign-in again", "warning").then(() => {
            next_router__WEBPACK_IMPORTED_MODULE_3___default.a.push("/index");
          });
        } else if (language == 'es') {
          sweetalert__WEBPACK_IMPORTED_MODULE_6___default()("Sesión expirada", "Inicie sesión de nuevo", "warning").then(() => {
            next_router__WEBPACK_IMPORTED_MODULE_3___default.a.push("/index");
          });
        } else if (language == 'por') {
          sweetalert__WEBPACK_IMPORTED_MODULE_6___default()("Sessão expirada", "Faça login novamente", "warning").then(() => {
            next_router__WEBPACK_IMPORTED_MODULE_3___default.a.push("/index");
          });
        }
      }
    }

    let dataToT = {};
    await axios__WEBPACK_IMPORTED_MODULE_4___default.a.get(_global__WEBPACK_IMPORTED_MODULE_8__["default"].url + "multi-language").then(res => {
      dataToT = res.data;
    });
    let auxData = await dataToT[language];
    await onPingCall();
    this.setState({
      dataLang: auxData,
      loading: auxload
    });
  }

  render() {
    const {
      loading
    } = this.state;
    return __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 12
      }
    }, loading ? this.espacio() : this.renderList());
  }

}

/* harmony default export */ __webpack_exports__["default"] = (MediaVideos);

/***/ }),

/***/ "./src/components/menu/index.js":
/*!**************************************!*\
  !*** ./src/components/menu/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu */ "./src/components/menu/menu.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _menu__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/components/menu/menu.css":
/*!**************************************!*\
  !*** ./src/components/menu/menu.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/components/menu/menu.js":
/*!*************************************!*\
  !*** ./src/components/menu/menu.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-cookie */ "react-cookie");
/* harmony import */ var react_cookie__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_cookie__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _menu_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./menu.css */ "./src/components/menu/menu.css");
/* harmony import */ var _menu_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_menu_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../global */ "./src/global.js");
/* harmony import */ var react_page_loading__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-page-loading */ "react-page-loading");
/* harmony import */ var react_page_loading__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_page_loading__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _local__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../local */ "./src/local.js");
/* harmony import */ var _localQA__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../localQA */ "./src/localQA.js");
/* harmony import */ var _localMetrics__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../localMetrics */ "./src/localMetrics.js");
var _jsxFileName = "C:\\Users\\lopezvalenzuela.16\\Documents\\GitHub\\tp-tiktok-front\\src\\components\\menu\\menu.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








var jwtDecode = __webpack_require__(/*! jwt-decode */ "jwt-decode");

const cookies = new react_cookie__WEBPACK_IMPORTED_MODULE_1__["Cookies"]();





class Menu extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      rol: 0,
      loading: true,
      dataLang: {}
    });

    _defineProperty(this, "cookiesRemover", () => {
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

    _defineProperty(this, "submenu", () => {
      var content = document.getElementById("training-des-menu");

      if (content.style.display === "block") {
        content.style.display = "none";
      } else {
        content.style.display = "block";
      }
    });

    _defineProperty(this, "renderAdmin", () => {
      const {
        dataLang
      } = this.state;
      return __jsx("li", {
        className: "class-back",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 190,
          columnNumber: 7
        }
      }, __jsx("a", {
        href: _local__WEBPACK_IMPORTED_MODULE_7__["default"].url + "admin",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 191,
          columnNumber: 9
        }
      }, __jsx("i", {
        className: "fas fa-address-card",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 192,
          columnNumber: 11
        }
      }, __jsx("img", {
        src: "/assents/icons/id-card-solid.svg",
        width: "30",
        height: "30",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 193,
          columnNumber: 13
        }
      })), dataLang.menuAdmin));
    });

    _defineProperty(this, "renderSurveyStaff", () => {
      const {
        dataLang
      } = this.state;
      return __jsx("a", {
        href: _local__WEBPACK_IMPORTED_MODULE_7__["default"].url + "surveyCE",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 204,
          columnNumber: 7
        }
      }, __jsx("i", {
        className: "fas fa-book-reader",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 205,
          columnNumber: 9
        }
      }, __jsx("img", {
        src: "/assents/icons/observation.svg",
        width: "30",
        height: "30",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 206,
          columnNumber: 11
        }
      })), dataLang.surveyStaff);
    });

    _defineProperty(this, "renderList", () => {
      const {
        dataLang
      } = this.state;
      const {
        rol
      } = this.state;
      return __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 217,
          columnNumber: 7
        }
      }, __jsx("div", {
        id: "hover-menu",
        className: "",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 218,
          columnNumber: 9
        }
      }), __jsx("div", {
        className: "Menu",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 219,
          columnNumber: 9
        }
      }, __jsx("input", {
        type: "checkbox",
        id: "check",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 220,
          columnNumber: 11
        }
      }), __jsx("label", {
        htmlFor: "check",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 221,
          columnNumber: 11
        }
      }, __jsx("i", {
        className: "fas fa-bars",
        id: "btn",
        onClick: this.openNav,
        __self: this,
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
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 223,
          columnNumber: 15
        }
      }), __jsx("a", {
        href: _local__WEBPACK_IMPORTED_MODULE_7__["default"].url + "home",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 224,
          columnNumber: 15
        }
      }, __jsx("img", {
        src: "/assents/icons/Logo-Home.png",
        width: "320",
        height: "70",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 225,
          columnNumber: 17
        }
      }))), __jsx("i", {
        className: "fas fa-times",
        id: "cancel",
        onClick: this.closeNav,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 228,
          columnNumber: 13
        }
      }, __jsx("img", {
        src: "/assents/icons/times-solid.svg",
        width: "35",
        height: "35",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 229,
          columnNumber: 15
        }
      }))), __jsx("div", {
        className: "sidebar hand-cursor",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 232,
          columnNumber: 11
        }
      }, __jsx("header", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 233,
          columnNumber: 13
        }
      }, __jsx("img", {
        src: "/assents/icons/logo-dark-.svg",
        width: "50",
        height: "50",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 234,
          columnNumber: 15
        }
      }), __jsx("img", {
        src: "/assents/icons/logo-text-dark.svg",
        width: "50",
        height: "50",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 235,
          columnNumber: 15
        }
      })), __jsx("ul", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 237,
          columnNumber: 13
        }
      }, rol == 2 || rol == 3 || rol == 4 ? this.renderAdmin() : null, __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 239,
          columnNumber: 15
        }
      }, __jsx("li", {
        className: "class-back-QA",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 240,
          columnNumber: 15
        }
      }, __jsx("a", {
        href: _localQA__WEBPACK_IMPORTED_MODULE_8__["default"].url + "url?tkn=" + cookies.get('token') + '&lng=' + cookies.get('language'),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 241,
          columnNumber: 17
        }
      }, __jsx("i", {
        className: "fas fa-spell-check",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 242,
          columnNumber: 19
        }
      }, __jsx("img", {
        src: "/assents/icons/tik-tok.svg",
        width: "30",
        height: "30",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 243,
          columnNumber: 21
        }
      })), "Tiktok QA")), __jsx("li", {
        className: "class-back-metricas",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 248,
          columnNumber: 15
        }
      }, __jsx("a", {
        href: _localMetrics__WEBPACK_IMPORTED_MODULE_9__["default"].url + "url?tkn=" + cookies.get('token') + '&lng=' + cookies.get('language'),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 249,
          columnNumber: 17
        }
      }, __jsx("i", {
        className: "fas fa-spell-check",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 250,
          columnNumber: 19
        }
      }, __jsx("img", {
        src: "/assents/icons/metricas.svg",
        width: "30",
        height: "30",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 251,
          columnNumber: 22
        }
      })), "Tiktok Metrics")), __jsx("li", {
        className: "dropdown-submenu",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 256,
          columnNumber: 17
        }
      }, __jsx("a", {
        className: "class-back dropdown-toggle",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 257,
          columnNumber: 19
        }
      }, __jsx("i", {
        className: "fas fa-book-reader",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 258,
          columnNumber: 21
        }
      }, __jsx("img", {
        src: "/assents/icons/book-reader-solid.svg",
        width: "30",
        height: "30",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 259,
          columnNumber: 23
        }
      })), dataLang.menuTraining), __jsx("ul", {
        className: "dropdown-menu",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 263,
          columnNumber: 19
        }
      }, __jsx("li", {
        className: "class-back",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 264,
          columnNumber: 19
        }
      }, __jsx("a", {
        href: _local__WEBPACK_IMPORTED_MODULE_7__["default"].url + "glossary",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 265,
          columnNumber: 17
        }
      }, __jsx("i", {
        className: "fas fa-spell-check",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 266,
          columnNumber: 19
        }
      }, __jsx("img", {
        src: "/assents/icons/glossary.svg",
        width: "30",
        height: "30",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 267,
          columnNumber: 21
        }
      })), dataLang.menuGlossary)), __jsx("li", {
        className: "dropdown-submenu",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 272,
          columnNumber: 15
        }
      }, __jsx("a", {
        className: "class-back dropdown-toggle",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 273,
          columnNumber: 19
        }
      }, __jsx("i", {
        className: "fas fa-book-reader",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 274,
          columnNumber: 21
        }
      }, __jsx("img", {
        src: "/assents/icons/cultural.svg",
        width: "30",
        height: "30",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 275,
          columnNumber: 23
        }
      })), dataLang.menuCultural), __jsx("ul", {
        className: "dropdown-menu",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 279,
          columnNumber: 19
        }
      }, __jsx("li", {
        className: "sub-class",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 280,
          columnNumber: 21
        }
      }, __jsx("a", {
        href: _local__WEBPACK_IMPORTED_MODULE_7__["default"].url + "cultural/mexico",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 281,
          columnNumber: 23
        }
      }, __jsx("i", {
        className: "fas fa-book-reader",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 282,
          columnNumber: 25
        }
      }, __jsx("img", {
        src: "/assents/icons/culmexico.svg",
        width: "30",
        height: "30",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 283,
          columnNumber: 27
        }
      })), dataLang.culturalMX)), __jsx("li", {
        className: "sub-class",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 288,
          columnNumber: 21
        }
      }, __jsx("a", {
        href: _local__WEBPACK_IMPORTED_MODULE_7__["default"].url + "cultural/argentina",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 289,
          columnNumber: 23
        }
      }, __jsx("i", {
        className: "fas fa-book-reader",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 290,
          columnNumber: 25
        }
      }, __jsx("img", {
        src: "/assents/icons/culargentina.svg",
        width: "30",
        height: "30",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 291,
          columnNumber: 27
        }
      })), dataLang.culturalAR)), __jsx("li", {
        className: "sub-class",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 296,
          columnNumber: 21
        }
      }, __jsx("a", {
        href: _local__WEBPACK_IMPORTED_MODULE_7__["default"].url + "cultural/chile",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 297,
          columnNumber: 23
        }
      }, __jsx("i", {
        className: "fas fa-book-reader",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 298,
          columnNumber: 25
        }
      }, __jsx("img", {
        src: "/assents/icons/culchile.svg",
        width: "30",
        height: "30",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 299,
          columnNumber: 27
        }
      })), dataLang.culturalCH)), __jsx("li", {
        className: "sub-class",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 304,
          columnNumber: 21
        }
      }, __jsx("a", {
        href: _local__WEBPACK_IMPORTED_MODULE_7__["default"].url + "cultural/brasil",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 305,
          columnNumber: 23
        }
      }, __jsx("i", {
        className: "fas fa-book-reader",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 306,
          columnNumber: 25
        }
      }, __jsx("img", {
        src: "/assents/icons/culbrasil.svg",
        width: "30",
        height: "30",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 307,
          columnNumber: 27
        }
      })), dataLang.culturalBR)))), __jsx("li", {
        className: "sub-class",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 314,
          columnNumber: 21
        }
      }, __jsx("a", {
        href: _local__WEBPACK_IMPORTED_MODULE_7__["default"].url + "statistics",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 315,
          columnNumber: 23
        }
      }, __jsx("i", {
        className: "fas fa-book-reader",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 316,
          columnNumber: 25
        }
      }, __jsx("img", {
        src: "/assents/icons/esticon.svg",
        width: "30",
        height: "30",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 317,
          columnNumber: 27
        }
      })), dataLang.menuStatistics)), __jsx("li", {
        className: "sub-class",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 322,
          columnNumber: 21
        }
      }, __jsx("a", {
        href: _local__WEBPACK_IMPORTED_MODULE_7__["default"].url + "material",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 323,
          columnNumber: 23
        }
      }, __jsx("i", {
        className: "fas fa-book-reader",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 324,
          columnNumber: 25
        }
      }, __jsx("img", {
        src: "/assents/icons/maticon.svg",
        width: "30",
        height: "30",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 325,
          columnNumber: 27
        }
      })), dataLang.menuMaterial)), __jsx("li", {
        className: "sub-class",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 330,
          columnNumber: 21
        }
      }, __jsx("a", {
        href: _local__WEBPACK_IMPORTED_MODULE_7__["default"].url + "resilience",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 331,
          columnNumber: 23
        }
      }, __jsx("i", {
        className: "fas fa-book-reader",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 332,
          columnNumber: 25
        }
      }, __jsx("img", {
        src: "/assents/icons/resiliencia.svg",
        width: "30",
        height: "30",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 333,
          columnNumber: 27
        }
      })), dataLang.menuResilience)), __jsx("li", {
        className: "sub-class",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 338,
          columnNumber: 21
        }
      }, __jsx("a", {
        href: _local__WEBPACK_IMPORTED_MODULE_7__["default"].url + "tips",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 339,
          columnNumber: 23
        }
      }, __jsx("i", {
        className: "fas fa-book-reader",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 340,
          columnNumber: 25
        }
      }, __jsx("img", {
        src: "/assents/icons/tips.svg",
        width: "30",
        height: "30",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 341,
          columnNumber: 27
        }
      })), dataLang.menuTips))))), __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 349,
          columnNumber: 15
        }
      }, __jsx("li", {
        className: "dropdown-submenu",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 350,
          columnNumber: 17
        }
      }, __jsx("a", {
        className: "class-back dropdown-toggle",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 351,
          columnNumber: 19
        }
      }, __jsx("i", {
        className: "fas fas fa-book",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 352,
          columnNumber: 21
        }
      }, __jsx("img", {
        src: "/assents/icons/book-solid.svg",
        width: "30",
        height: "30",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 353,
          columnNumber: 23
        }
      })), dataLang.menuPolicies), __jsx("ul", {
        className: "dropdown-menu",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 357,
          columnNumber: 19
        }
      }, __jsx("li", {
        className: "sub-class",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 358,
          columnNumber: 21
        }
      }, __jsx("a", {
        href: _local__WEBPACK_IMPORTED_MODULE_7__["default"].url + "policies/cqc",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 359,
          columnNumber: 23
        }
      }, __jsx("i", {
        className: "fas fa-book-reader",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 360,
          columnNumber: 25
        }
      }, __jsx("img", {
        src: "/assents/icons/conocimiento.svg",
        width: "30",
        height: "30",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 361,
          columnNumber: 27
        }
      })), dataLang.policiesCCM)), __jsx("li", {
        className: "sub-class",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 366,
          columnNumber: 21
        }
      }, __jsx("a", {
        href: _local__WEBPACK_IMPORTED_MODULE_7__["default"].url + "policies/ccm",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 367,
          columnNumber: 23
        }
      }, __jsx("i", {
        className: "fas fa-book-reader",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 368,
          columnNumber: 25
        }
      }, __jsx("img", {
        src: "/assents/icons/libro.svg",
        width: "30",
        height: "30",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 369,
          columnNumber: 27
        }
      })), dataLang.policiesCQC)), __jsx("li", {
        className: "sub-class",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 374,
          columnNumber: 21
        }
      }, __jsx("a", {
        href: _local__WEBPACK_IMPORTED_MODULE_7__["default"].url + "videos",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 375,
          columnNumber: 23
        }
      }, __jsx("i", {
        className: "fas fa-book-reader",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 376,
          columnNumber: 25
        }
      }, __jsx("img", {
        src: "/assents/icons/youtube.svg",
        width: "30",
        height: "30",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 377,
          columnNumber: 27
        }
      })), dataLang.policiesVideos))))), __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 385,
          columnNumber: 15
        }
      }, __jsx("li", {
        className: "dropdown-submenu",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 386,
          columnNumber: 17
        }
      }, __jsx("a", {
        className: "class-back dropdown-toggle",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 387,
          columnNumber: 19
        }
      }, __jsx("i", {
        className: "fas fa-book-reader",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 388,
          columnNumber: 21
        }
      }, __jsx("img", {
        src: "/assents/icons/survey.svg",
        width: "30",
        height: "30",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 389,
          columnNumber: 23
        }
      })), dataLang.menuSurvey), __jsx("ul", {
        className: "dropdown-menu",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 393,
          columnNumber: 19
        }
      }, __jsx("li", {
        className: "sub-class",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 394,
          columnNumber: 21
        }
      }, __jsx("a", {
        href: _local__WEBPACK_IMPORTED_MODULE_7__["default"].url + "surveyMD",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 395,
          columnNumber: 23
        }
      }, __jsx("i", {
        className: "fas fa-book-reader",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 396,
          columnNumber: 25
        }
      }, __jsx("img", {
        src: "/assents/icons/survey1.svg",
        width: "30",
        height: "30",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 397,
          columnNumber: 27
        }
      })), dataLang.suveryModerator)), __jsx("li", {
        className: "sub-class",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 402,
          columnNumber: 21
        }
      }, rol == 2 || rol == 3 || rol == 4 || rol == 5 ? this.renderSurveyStaff() : null)))), __jsx("li", {
        className: "class-back",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 406,
          columnNumber: 15
        }
      }, __jsx("a", {
        href: _local__WEBPACK_IMPORTED_MODULE_7__["default"].url + "news",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 407,
          columnNumber: 17
        }
      }, __jsx("i", {
        className: "fas fa-spell-check",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 408,
          columnNumber: 19
        }
      }, __jsx("img", {
        src: "/assents/icons/spell-check-solid.svg",
        width: "30",
        height: "30",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 409,
          columnNumber: 21
        }
      })), dataLang.menuNew)), __jsx("li", {
        className: "class-back",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 415,
          columnNumber: 15
        }
      }, __jsx("a", {
        onClick: this.cookiesRemover,
        href: _local__WEBPACK_IMPORTED_MODULE_7__["default"].url + "index ",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 416,
          columnNumber: 17
        }
      }, __jsx("i", {
        className: "far fa-arrow-alt-circle-left",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 417,
          columnNumber: 19
        }
      }, __jsx("img", {
        src: "/assents/icons/sign-out-alt-solid.svg",
        width: "30",
        height: "30",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 418,
          columnNumber: 21
        }
      })), dataLang.menuLogout))))));
    });
  }

  async componentDidMount() {
    let auxload = true;
    let auxrol = 1;
    const language = await cookies.get("language");

    if (language == undefined) {
      next_router__WEBPACK_IMPORTED_MODULE_2___default.a.push("/index");
    }

    async function onPingCall() {
      const token = await cookies.get("token");

      if (token != undefined) {
        var decoded = jwtDecode(token);
      }

      try {
        const res = await axios__WEBPACK_IMPORTED_MODULE_3___default.a.post(_global__WEBPACK_IMPORTED_MODULE_5__["default"].url + "home", {
          headers: {
            "access-token": token,
            "key-token": "codekey:!m@!K3CjDz*NdInr7Q773u3hj*G%5Kl$zZ^%Uz%Z5v#jf2humR"
          }
        });

        if (token != undefined) {
          auxrol = await decoded.role;
        }

        auxload = await false;
      } catch (err) {}
    }

    let dataToT = {};
    await axios__WEBPACK_IMPORTED_MODULE_3___default.a.get(_global__WEBPACK_IMPORTED_MODULE_5__["default"].url + "multi-language").then(res => {
      dataToT = res.data;
    });
    let auxData = await dataToT[language];
    await onPingCall();
    this.setState({
      dataLang: auxData,
      loading: auxload,
      rol: auxrol
    });
  }

  openNav() {
    let element = document.getElementById("hover-menu");
    element.classList.add("overlay-menu");
  }

  closeNav() {
    let element = document.getElementById("hover-menu");
    element.classList.remove("overlay-menu");
  }

  render() {
    const {
      loading
    } = this.state;
    return __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 431,
        columnNumber: 12
      }
    }, loading ? null : this.renderList());
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Menu);

/***/ }),

/***/ "./src/components/policies/ccm/ccm.css":
/*!*********************************************!*\
  !*** ./src/components/policies/ccm/ccm.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/components/policies/cqc/cqc.css":
/*!*********************************************!*\
  !*** ./src/components/policies/cqc/cqc.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/components/resilience/resilience.css":
/*!**************************************************!*\
  !*** ./src/components/resilience/resilience.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/components/statistics/statistics.css":
/*!**************************************************!*\
  !*** ./src/components/statistics/statistics.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/components/tips/tips.css":
/*!**************************************!*\
  !*** ./src/components/tips/tips.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/components/videos/videos.css":
/*!******************************************!*\
  !*** ./src/components/videos/videos.css ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/components/word/word.css":
/*!**************************************!*\
  !*** ./src/components/word/word.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/global.js":
/*!***********************!*\
  !*** ./src/global.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var Global = {
  url: 'http://localhost:4000/node/ttokback/api/'
};
/* harmony default export */ __webpack_exports__["default"] = (Global);

/***/ }),

/***/ "./src/local.js":
/*!**********************!*\
  !*** ./src/local.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var Local = {
  url: 'http://localhost:3000/'
};
/* harmony default export */ __webpack_exports__["default"] = (Local);

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

/***/ }),

/***/ "./src/localQA.js":
/*!************************!*\
  !*** ./src/localQA.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var Local = {
  url: 'http://localhost:3001/'
};
/* harmony default export */ __webpack_exports__["default"] = (Local);

/***/ }),

/***/ 4:
/*!*****************************!*\
  !*** multi ./pages/home.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\lopezvalenzuela.16\Documents\GitHub\tp-tiktok-front\pages\home.js */"./pages/home.js");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "jwt-decode":
/*!*****************************!*\
  !*** external "jwt-decode" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("jwt-decode");

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

/***/ "react-bootstrap":
/*!**********************************!*\
  !*** external "react-bootstrap" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap");

/***/ }),

/***/ "react-cookie":
/*!*******************************!*\
  !*** external "react-cookie" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-cookie");

/***/ }),

/***/ "react-page-loading":
/*!*************************************!*\
  !*** external "react-page-loading" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-page-loading");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "sweetalert":
/*!*****************************!*\
  !*** external "sweetalert" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("sweetalert");

/***/ })

/******/ });
//# sourceMappingURL=home.js.map