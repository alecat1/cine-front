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

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "../next-server/lib/utils":
/*!*****************************************************!*\
  !*** external "next/dist/next-server/lib/utils.js" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils.js");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

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

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/bootstrap/dist/css/bootstrap.min.css":
/*!***********************************************************!*\
  !*** ./node_modules/bootstrap/dist/css/bootstrap.min.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _url = __webpack_require__(/*! url */ "url");

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "../next-server/lib/utils");

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

var _router2 = __webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js");

function isLocal(href) {
  var url = (0, _url.parse)(href, false, true);
  var origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

var observer;
var listeners = new Map();
var IntersectionObserver = false ? undefined : null;
var prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      var cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

var listenToIntersections = (el, cb) => {
  var observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: (0, _router2.addBasePath)(formatUrl(href)),
        as: asHref ? (0, _router2.addBasePath)(formatUrl(asHref)) : asHref
      };
    });

    this.linkClicked = e => {
      var {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      var {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (true) {
      if (props.prefetch) {
        console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/zeit/next.js/prefetch-true-deprecated');
      }
    }

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  getPaths() {
    var {
      pathname
    } = window.location;
    var {
      href: parsedHref,
      as: parsedAs
    } = this.formatUrls(this.props.href, this.props.as);
    var resolvedHref = (0, _url.resolve)(pathname, parsedHref);
    return [resolvedHref, parsedAs ? (0, _url.resolve)(pathname, parsedAs) : resolvedHref];
  }

  handleRef(ref) {
    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      var isPrefetched = prefetched[this.getPaths().join( // Join on an invalid URI character
      '%')];

      if (!isPrefetched) {
        this.cleanUpListeners = listenToIntersections(ref, () => {
          this.prefetch();
        });
      }
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch(options) {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    var paths = this.getPaths(); // We need to handle a prefetch error here since we may be
    // loading with priority which can reject but we don't
    // want to force navigation since this is only a prefetch

    _router.default.prefetch(paths[
    /* href */
    0], paths[
    /* asPath */
    1], options).catch(err => {
      if (true) {
        // rethrow to show invalid URL errors
        throw err;
      }
    });

    prefetched[paths.join( // Join on an invalid URI character
    '%')] = true;
  }

  render() {
    var {
      children
    } = this.props;
    var {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    var child = _react.Children.only(children);

    var props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch({
          priority: true
        });
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      }
    }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) { var rewriteUrlForNextExport; }

    return _react.default.cloneElement(child, props);
  }

}

if (true) {
  var warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  var PropTypes = __webpack_require__(/*! prop-types */ "prop-types");

  var exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact"); // @ts-ignore the property is supported, when declaring it on the class it outputs an extra bit of code which is not needed.


  Link.propTypes = exact({
    href: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    as: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    prefetch: PropTypes.bool,
    replace: PropTypes.bool,
    shallow: PropTypes.bool,
    passHref: PropTypes.bool,
    scroll: PropTypes.bool,
    children: PropTypes.oneOfType([PropTypes.element, (props, propName) => {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

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

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

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
      var router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      var eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
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


var createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};

  for (var property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
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


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return _react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    var name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

Object.defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
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

exports.default = mitt;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");

const mitt_1 = __importDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

const utils_1 = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

const is_dynamic_1 = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

const route_matcher_1 = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

const route_regex_1 = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

const basePath =  false || '';

function addBasePath(path) {
  return path.indexOf(basePath) !== 0 ? basePath + path : path;
}

exports.addBasePath = addBasePath;

function delBasePath(path) {
  return path.indexOf(basePath) === 0 ? path.substr(basePath.length) || '/' : path;
}

exports.delBasePath = delBasePath;

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

const prepareRoute = path => toRoute(!path || path === '/' ? '/index' : path);

function fetchNextData(pathname, query, isServerRender, cb) {
  let attempts = isServerRender ? 3 : 1;

  function getResponse() {
    return fetch(utils_1.formatWithValidation({
      pathname: addBasePath( // @ts-ignore __NEXT_DATA__
      `/_next/data/${__NEXT_DATA__.buildId}${delBasePath(pathname)}.json`),
      query
    }), {
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
        if (--attempts > 0 && res.status >= 500) {
          return getResponse();
        }

        throw new Error(`Failed to load static props`);
      }

      return res.json();
    });
  }

  return getResponse().then(data => {
    return cb ? cb(data) : data;
  }).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      ;
      err.code = 'PAGE_LOAD_ERROR';
    }

    throw err;
  });
}

class Router {
  constructor(pathname, query, as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback
  }) {
    // Static Data Cache
    this.sdc = {};

    this.onPopState = e => {
      if (!e.state) {
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
        this.changeState('replaceState', utils_1.formatWithValidation({
          pathname,
          query
        }), utils_1.getURL());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && this.isSsr && e.state.as === this.asPath && url_1.parse(e.state.url).pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (true) {
        if (typeof url === 'undefined' || typeof as === 'undefined') {
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/zeit/next.js/popstate-state-empty');
        }
      }

      this.replace(url, as, options);
    };

    this._getStaticData = asPath => {
      const pathname = prepareRoute(url_1.parse(asPath).pathname);
      return  false ? undefined : fetchNextData(pathname, null, this.isSsr, data => this.sdc[pathname] = data);
    };

    this._getServerData = asPath => {
      let {
        pathname,
        query
      } = url_1.parse(asPath, true);
      pathname = prepareRoute(pathname);
      return fetchNextData(pathname, query, this.isSsr);
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.autoExport ? pathname : as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    if (false) {} else {
      return url;
    }
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = Object.assign(Object.assign({}, data), {
      Component,
      __N_SSG: mod.__N_SSG,
      __N_SSP: mod.__N_SSP
    });
    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
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


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
   * Performs a `replaceState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new Promise((resolve, reject) => {
      if (!options._h) {
        this.isSsr = false;
      } // marking route changes as a navigation start entry


      if (utils_1.ST) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      let url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
      let as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as;
      url = addBasePath(url);
      as = addBasePath(as); // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, as, options);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = url_1.parse(url, true);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      }

      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if (is_dynamic_1.isDynamicRoute(route)) {
        const {
          pathname: asPathname
        } = url_1.parse(as);
        const routeRegex = route_regex_1.getRouteRegex(route);
        const routeMatch = route_matcher_1.getRouteMatcher(routeRegex)(asPathname);

        if (!routeMatch) {
          const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

          if (missingParams.length > 0) {
            if (true) {
              console.warn(`Mismatching \`as\` and \`href\` failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
            }

            return reject(new Error(`The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/zeit/next.js/incompatible-href-as`));
          }
        } else {
          // Merge params into `query`, overwriting any specified in search
          Object.assign(query, routeMatch);
        }
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, as, options);

        if (true) {
          const appComp = this.components['/_app'].Component;
          window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
        }

        this.set(route, pathname, query, as, routeInfo);

        if (error) {
          Router.events.emit('routeChangeError', error, as);
          throw error;
        }

        Router.events.emit('routeChangeComplete', as);
        return resolve(true);
      }, reject);
    });
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

    if (method !== 'pushState' || utils_1.getURL() !== as) {
      window.history[method]({
        url,
        as,
        options
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return Promise.resolve(cachedRouteInfo);
    }

    const handleError = (err, loadErrorFail) => {
      return new Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR' || loadErrorFail) {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(res => {
          const {
            page: Component
          } = res;
          const routeInfo = {
            Component,
            err
          };
          return new Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }).catch(err => handleError(err, true)));
      });
    };

    return new Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(res => resolve({
        Component: res.page,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }), reject);
    }).then(routeInfo => {
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      return this._getData(() => __N_SSG ? this._getStaticData(as) : __N_SSP ? this._getServerData(as) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      })).then(props => {
        routeInfo.props = props;
        this.components[route] = routeInfo;
        return routeInfo;
      });
    }).catch(handleError);
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    this.notify(data);
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
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
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


  prefetch(url, asPath = url, options = {}) {
    return new Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = url_1.parse(url);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (true) {
        return;
      }

      const route = delBasePath(toRoute(pathname));
      Promise.all([this.pageLoader.prefetchData(url, delBasePath(asPath)), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]).then(() => resolve(), reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    route = delBasePath(route);
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

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return utils_1.loadGetInitialProps(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = mitt_1.default();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

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

exports.getRouteMatcher = getRouteMatcher;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
}); // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = escapeRegex(normalizedRoute.replace(/\/$/, '') || '/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
    const isCatchAll = /^(\\\.){3}/.test($1);
    groups[$1 // Un-escape key
    .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '') // eslint-disable-next-line no-sequences
    ] = {
      pos: groupIndex++,
      repeat: isCatchAll
    };
    return isCatchAll ? '/(.+?)' : '/([^/]+?)';
  });
  let namedParameterizedRoute; // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    namedParameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
      const isCatchAll = /^(\\\.){3}/.test($1);
      const key = $1 // Un-escape key
      .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '');
      return isCatchAll ? `/(?<${escapeRegex(key)}>.+?)` : `/(?<${escapeRegex(key)}>[^/]+?)`;
    });
  }

  return Object.assign({
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups
  }, namedParameterizedRoute ? {
    namedRegex: `^${namedParameterizedRoute}(?:/)?$`
  } : {});
}

exports.getRouteRegex = getRouteRegex;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");
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

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

async function loadGetInitialProps(App, ctx) {
  var _a;

  if (true) {
    if ((_a = App.prototype) === null || _a === void 0 ? void 0 : _a.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.`;
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
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/zeit/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (exports.urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SP = typeof performance !== 'undefined';
exports.ST = exports.SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./node_modules/video-react/dist/video-react.css":
/*!*******************************************************!*\
  !*** ./node_modules/video-react/dist/video-react.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return index; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _src_components_login__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/components/login */ "./src/components/login/index.js");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var video_react_dist_video_react_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! video-react/dist/video-react.css */ "./node_modules/video-react/dist/video-react.css");
/* harmony import */ var video_react_dist_video_react_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(video_react_dist_video_react_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _src_components_admin_tips_tips_change_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../src/components/admin/tips/tips-change.css */ "./src/components/admin/tips/tips-change.css");
/* harmony import */ var _src_components_admin_tips_tips_change_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_src_components_admin_tips_tips_change_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _src_components_tips_tips_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../src/components/tips/tips.css */ "./src/components/tips/tips.css");
/* harmony import */ var _src_components_tips_tips_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_src_components_tips_tips_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _src_components_admin_admin_admin_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../src/components/admin/admin/admin.css */ "./src/components/admin/admin/admin.css");
/* harmony import */ var _src_components_admin_admin_admin_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_src_components_admin_admin_admin_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _src_components_admin_glossary_change_glossary_change_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../src/components/admin/glossary/change/glossary-change.css */ "./src/components/admin/glossary/change/glossary-change.css");
/* harmony import */ var _src_components_admin_glossary_change_glossary_change_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_src_components_admin_glossary_change_glossary_change_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _src_components_admin_glossary_new_glossary_new_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../src/components/admin/glossary/new/glossary-new.css */ "./src/components/admin/glossary/new/glossary-new.css");
/* harmony import */ var _src_components_admin_glossary_new_glossary_new_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_src_components_admin_glossary_new_glossary_new_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _src_components_admin_home_home_change_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../src/components/admin/home/home-change.css */ "./src/components/admin/home/home-change.css");
/* harmony import */ var _src_components_admin_home_home_change_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_src_components_admin_home_home_change_css__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _src_components_admin_material_material_change_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../src/components/admin/material/material-change.css */ "./src/components/admin/material/material-change.css");
/* harmony import */ var _src_components_admin_material_material_change_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_src_components_admin_material_material_change_css__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _src_components_admin_policies_change_policies_change_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../src/components/admin/policies/change/policies-change.css */ "./src/components/admin/policies/change/policies-change.css");
/* harmony import */ var _src_components_admin_policies_change_policies_change_css__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_src_components_admin_policies_change_policies_change_css__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _src_components_admin_policies_new_policies_new_css__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../src/components/admin/policies/new/policies-new.css */ "./src/components/admin/policies/new/policies-new.css");
/* harmony import */ var _src_components_admin_policies_new_policies_new_css__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_src_components_admin_policies_new_policies_new_css__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _src_components_admin_register_register_css__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../src/components/admin/register/register.css */ "./src/components/admin/register/register.css");
/* harmony import */ var _src_components_admin_register_register_css__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_src_components_admin_register_register_css__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _src_components_admin_resilience_resilience_change_css__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../src/components/admin/resilience/resilience-change.css */ "./src/components/admin/resilience/resilience-change.css");
/* harmony import */ var _src_components_admin_resilience_resilience_change_css__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_src_components_admin_resilience_resilience_change_css__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _src_components_admin_user_user_change_css__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../src/components/admin/user/user-change.css */ "./src/components/admin/user/user-change.css");
/* harmony import */ var _src_components_admin_user_user_change_css__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_src_components_admin_user_user_change_css__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _src_components_cultural_argentina_argentina_css__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../src/components/cultural/argentina/argentina.css */ "./src/components/cultural/argentina/argentina.css");
/* harmony import */ var _src_components_cultural_argentina_argentina_css__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_src_components_cultural_argentina_argentina_css__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _src_components_cultural_mexico_mexico_css__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../src/components/cultural/mexico/mexico.css */ "./src/components/cultural/mexico/mexico.css");
/* harmony import */ var _src_components_cultural_mexico_mexico_css__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_src_components_cultural_mexico_mexico_css__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _src_components_cultural_brasil_brasil_css__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../src/components/cultural/brasil/brasil.css */ "./src/components/cultural/brasil/brasil.css");
/* harmony import */ var _src_components_cultural_brasil_brasil_css__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_src_components_cultural_brasil_brasil_css__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _src_components_cultural_chile_chile_css__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../src/components/cultural/chile/chile.css */ "./src/components/cultural/chile/chile.css");
/* harmony import */ var _src_components_cultural_chile_chile_css__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_src_components_cultural_chile_chile_css__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _src_components_footer_footer_css__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../src/components/footer/footer.css */ "./src/components/footer/footer.css");
/* harmony import */ var _src_components_footer_footer_css__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(_src_components_footer_footer_css__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var _src_components_login_login_css__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../src/components/login/login.css */ "./src/components/login/login.css");
/* harmony import */ var _src_components_login_login_css__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(_src_components_login_login_css__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var _src_components_material_material_css__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../src/components/material/material.css */ "./src/components/material/material.css");
/* harmony import */ var _src_components_material_material_css__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(_src_components_material_material_css__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var _src_components_mediavideos_mediavideos_css__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../src/components/mediavideos/mediavideos.css */ "./src/components/mediavideos/mediavideos.css");
/* harmony import */ var _src_components_mediavideos_mediavideos_css__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(_src_components_mediavideos_mediavideos_css__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var _src_components_menu_menu_css__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../src/components/menu/menu.css */ "./src/components/menu/menu.css");
/* harmony import */ var _src_components_menu_menu_css__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(_src_components_menu_menu_css__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var _src_components_policies_ccm_ccm_css__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../src/components/policies/ccm/ccm.css */ "./src/components/policies/ccm/ccm.css");
/* harmony import */ var _src_components_policies_ccm_ccm_css__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(_src_components_policies_ccm_ccm_css__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var _src_components_policies_cqc_cqc_css__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../src/components/policies/cqc/cqc.css */ "./src/components/policies/cqc/cqc.css");
/* harmony import */ var _src_components_policies_cqc_cqc_css__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(_src_components_policies_cqc_cqc_css__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var _src_components_resilience_resilience_css__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../src/components/resilience/resilience.css */ "./src/components/resilience/resilience.css");
/* harmony import */ var _src_components_resilience_resilience_css__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(_src_components_resilience_resilience_css__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var _src_components_statistics_statistics_css__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../src/components/statistics/statistics.css */ "./src/components/statistics/statistics.css");
/* harmony import */ var _src_components_statistics_statistics_css__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(_src_components_statistics_statistics_css__WEBPACK_IMPORTED_MODULE_30__);
/* harmony import */ var _src_components_word_word_css__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../src/components/word/word.css */ "./src/components/word/word.css");
/* harmony import */ var _src_components_word_word_css__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(_src_components_word_word_css__WEBPACK_IMPORTED_MODULE_31__);
/* harmony import */ var _src_components_videos_videos_css__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ../src/components/videos/videos.css */ "./src/components/videos/videos.css");
/* harmony import */ var _src_components_videos_videos_css__WEBPACK_IMPORTED_MODULE_32___default = /*#__PURE__*/__webpack_require__.n(_src_components_videos_videos_css__WEBPACK_IMPORTED_MODULE_32__);
/* harmony import */ var _src_components_bubble_bubble_css__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ../src/components/bubble/bubble.css */ "./src/components/bubble/bubble.css");
/* harmony import */ var _src_components_bubble_bubble_css__WEBPACK_IMPORTED_MODULE_33___default = /*#__PURE__*/__webpack_require__.n(_src_components_bubble_bubble_css__WEBPACK_IMPORTED_MODULE_33__);
/* harmony import */ var _src_components_admin_videos_new_videos_new_css__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ../src/components/admin/videos/new/videos-new.css */ "./src/components/admin/videos/new/videos-new.css");
/* harmony import */ var _src_components_admin_videos_new_videos_new_css__WEBPACK_IMPORTED_MODULE_34___default = /*#__PURE__*/__webpack_require__.n(_src_components_admin_videos_new_videos_new_css__WEBPACK_IMPORTED_MODULE_34__);
/* harmony import */ var _src_components_admin_videos_change_videos_change_css__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ../src/components/admin/videos/change/videos-change.css */ "./src/components/admin/videos/change/videos-change.css");
/* harmony import */ var _src_components_admin_videos_change_videos_change_css__WEBPACK_IMPORTED_MODULE_35___default = /*#__PURE__*/__webpack_require__.n(_src_components_admin_videos_change_videos_change_css__WEBPACK_IMPORTED_MODULE_35__);
var _jsxFileName = "C:\\Users\\lopezvalenzuela.16\\Documents\\GitHub\\tp-tiktok-front\\pages\\index.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



































function index() {
  return __jsx("div", {
    className: "jsx-547766434" + " " + "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 5
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }
  }, __jsx("title", {
    className: "jsx-547766434",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 9
    }
  }, "Tiktok Web Site - Login"), __jsx("link", {
    rel: "icon",
    href: "/assents/icons/favicon.png",
    className: "jsx-547766434",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 9
    }
  })), __jsx("main", {
    className: "jsx-547766434",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }
  }, __jsx(_src_components_login__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 9
    }
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "547766434",
    __self: this
  }, "body{margin:0;padding:0;background:url(\"/assents/images/Background_Login_1680_1050.png\");background-repeat:no-repeat;background-size:cover;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcbG9wZXp2YWxlbnp1ZWxhLjE2XFxEb2N1bWVudHNcXEdpdEh1YlxcdHAtdGlrdG9rLWZyb250XFxwYWdlc1xcaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBK0N5QixBQUd3QixTQUNDLFVBQ3VELGlFQUNyQyw0QkFDTixzQkFDMUIiLCJmaWxlIjoiQzpcXFVzZXJzXFxsb3BlenZhbGVuenVlbGEuMTZcXERvY3VtZW50c1xcR2l0SHViXFx0cC10aWt0b2stZnJvbnRcXHBhZ2VzXFxpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbmltcG9ydCBMb2dpbiBmcm9tICcuLi9zcmMvY29tcG9uZW50cy9sb2dpbic7XHJcbmltcG9ydCAnYm9vdHN0cmFwL2Rpc3QvY3NzL2Jvb3RzdHJhcC5taW4uY3NzJztcclxuaW1wb3J0IFwidmlkZW8tcmVhY3QvZGlzdC92aWRlby1yZWFjdC5jc3NcIjtcclxuXHJcbmltcG9ydCBcIi4uL3NyYy9jb21wb25lbnRzL2FkbWluL3RpcHMvdGlwcy1jaGFuZ2UuY3NzXCI7XHJcbmltcG9ydCBcIi4uL3NyYy9jb21wb25lbnRzL3RpcHMvdGlwcy5jc3NcIjtcclxuaW1wb3J0IFwiLi4vc3JjL2NvbXBvbmVudHMvYWRtaW4vYWRtaW4vYWRtaW4uY3NzXCI7XHJcbmltcG9ydCBcIi4uL3NyYy9jb21wb25lbnRzL2FkbWluL2dsb3NzYXJ5L2NoYW5nZS9nbG9zc2FyeS1jaGFuZ2UuY3NzXCI7XHJcbmltcG9ydCBcIi4uL3NyYy9jb21wb25lbnRzL2FkbWluL2dsb3NzYXJ5L25ldy9nbG9zc2FyeS1uZXcuY3NzXCI7XHJcbmltcG9ydCBcIi4uL3NyYy9jb21wb25lbnRzL2FkbWluL2hvbWUvaG9tZS1jaGFuZ2UuY3NzXCI7XHJcbmltcG9ydCBcIi4uL3NyYy9jb21wb25lbnRzL2FkbWluL21hdGVyaWFsL21hdGVyaWFsLWNoYW5nZS5jc3NcIjtcclxuaW1wb3J0IFwiLi4vc3JjL2NvbXBvbmVudHMvYWRtaW4vcG9saWNpZXMvY2hhbmdlL3BvbGljaWVzLWNoYW5nZS5jc3NcIjtcclxuaW1wb3J0IFwiLi4vc3JjL2NvbXBvbmVudHMvYWRtaW4vcG9saWNpZXMvbmV3L3BvbGljaWVzLW5ldy5jc3NcIjtcclxuaW1wb3J0IFwiLi4vc3JjL2NvbXBvbmVudHMvYWRtaW4vcmVnaXN0ZXIvcmVnaXN0ZXIuY3NzXCI7XHJcbmltcG9ydCBcIi4uL3NyYy9jb21wb25lbnRzL2FkbWluL3Jlc2lsaWVuY2UvcmVzaWxpZW5jZS1jaGFuZ2UuY3NzXCI7XHJcbmltcG9ydCBcIi4uL3NyYy9jb21wb25lbnRzL2FkbWluL3VzZXIvdXNlci1jaGFuZ2UuY3NzXCI7XHJcbmltcG9ydCBcIi4uL3NyYy9jb21wb25lbnRzL2FkbWluL3VzZXIvdXNlci1jaGFuZ2UuY3NzXCI7XHJcbmltcG9ydCBcIi4uL3NyYy9jb21wb25lbnRzL2N1bHR1cmFsL2FyZ2VudGluYS9hcmdlbnRpbmEuY3NzXCJcclxuaW1wb3J0IFwiLi4vc3JjL2NvbXBvbmVudHMvY3VsdHVyYWwvbWV4aWNvL21leGljby5jc3NcIlxyXG5pbXBvcnQgXCIuLi9zcmMvY29tcG9uZW50cy9jdWx0dXJhbC9icmFzaWwvYnJhc2lsLmNzc1wiXHJcbmltcG9ydCBcIi4uL3NyYy9jb21wb25lbnRzL2N1bHR1cmFsL2NoaWxlL2NoaWxlLmNzc1wiXHJcbmltcG9ydCBcIi4uL3NyYy9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuY3NzXCI7XHJcbmltcG9ydCBcIi4uL3NyYy9jb21wb25lbnRzL2xvZ2luL2xvZ2luLmNzc1wiO1xyXG5pbXBvcnQgXCIuLi9zcmMvY29tcG9uZW50cy9tYXRlcmlhbC9tYXRlcmlhbC5jc3NcIjtcclxuaW1wb3J0IFwiLi4vc3JjL2NvbXBvbmVudHMvbWVkaWF2aWRlb3MvbWVkaWF2aWRlb3MuY3NzXCI7XHJcbmltcG9ydCBcIi4uL3NyYy9jb21wb25lbnRzL21lbnUvbWVudS5jc3NcIjtcclxuaW1wb3J0IFwiLi4vc3JjL2NvbXBvbmVudHMvcG9saWNpZXMvY2NtL2NjbS5jc3NcIjtcclxuaW1wb3J0IFwiLi4vc3JjL2NvbXBvbmVudHMvcG9saWNpZXMvY3FjL2NxYy5jc3NcIjtcclxuaW1wb3J0IFwiLi4vc3JjL2NvbXBvbmVudHMvcmVzaWxpZW5jZS9yZXNpbGllbmNlLmNzc1wiO1xyXG5pbXBvcnQgXCIuLi9zcmMvY29tcG9uZW50cy9zdGF0aXN0aWNzL3N0YXRpc3RpY3MuY3NzXCI7XHJcbmltcG9ydCBcIi4uL3NyYy9jb21wb25lbnRzL3dvcmQvd29yZC5jc3NcIjtcclxuaW1wb3J0IFwiLi4vc3JjL2NvbXBvbmVudHMvdmlkZW9zL3ZpZGVvcy5jc3NcIjtcclxuaW1wb3J0IFwiLi4vc3JjL2NvbXBvbmVudHMvYnViYmxlL2J1YmJsZS5jc3NcIjtcclxuaW1wb3J0IFwiLi4vc3JjL2NvbXBvbmVudHMvYWRtaW4vdmlkZW9zL25ldy92aWRlb3MtbmV3LmNzc1wiO1xyXG5pbXBvcnQgXCIuLi9zcmMvY29tcG9uZW50cy9hZG1pbi92aWRlb3MvY2hhbmdlL3ZpZGVvcy1jaGFuZ2UuY3NzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpbmRleCgpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPlRpa3RvayBXZWIgU2l0ZSAtIExvZ2luPC90aXRsZT5cclxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9hc3NlbnRzL2ljb25zL2Zhdmljb24ucG5nXCIgLz5cclxuICAgICAgPC9IZWFkPlxyXG4gICAgICA8bWFpbj5cclxuICAgICAgICA8TG9naW4+PC9Mb2dpbj5cclxuICAgICAgPC9tYWluPlxyXG4gICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxyXG4gICAgICAgICAgYm9keSB7XHJcbiAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogdXJsKFwiL2Fzc2VudHMvaW1hZ2VzL0JhY2tncm91bmRfTG9naW5fMTY4MF8xMDUwLnBuZ1wiKTtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG4iXX0= */\n/*@ sourceURL=C:\\\\Users\\\\lopezvalenzuela.16\\\\Documents\\\\GitHub\\\\tp-tiktok-front\\\\pages\\\\index.js */"));
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

/***/ "./src/components/login/index.js":
/*!***************************************!*\
  !*** ./src/components/login/index.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _login__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login */ "./src/components/login/login.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _login__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/components/login/login.css":
/*!****************************************!*\
  !*** ./src/components/login/login.css ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/components/login/login.js":
/*!***************************************!*\
  !*** ./src/components/login/login.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_page_loading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-page-loading */ "react-page-loading");
/* harmony import */ var react_page_loading__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_page_loading__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! formik */ "formik");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_cookie__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-cookie */ "react-cookie");
/* harmony import */ var react_cookie__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_cookie__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! sweetalert */ "sweetalert");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../global */ "./src/global.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _login_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./login.css */ "./src/components/login/login.css");
/* harmony import */ var _login_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_login_css__WEBPACK_IMPORTED_MODULE_10__);
var _jsxFileName = "C:\\Users\\lopezvalenzuela.16\\Documents\\GitHub\\tp-tiktok-front\\src\\components\\login\\login.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }












const cookies = new react_cookie__WEBPACK_IMPORTED_MODULE_4__["Cookies"]();

class Login extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      lang: "en",
      dataLang: {},
      allLang: [],
      loading: true
    });

    _defineProperty(this, "setEs", async () => {
      this.setState({
        lang: "es",
        dataLang: this.state.allLang["es"]
      });
    });

    _defineProperty(this, "setEn", async () => {
      this.setState({
        lang: "en",
        dataLang: this.state.allLang["en"]
      });
    });

    _defineProperty(this, "setPor", async () => {
      this.setState({
        lang: "por",
        dataLang: this.state.allLang["por"]
      });
    });

    _defineProperty(this, "renderList", () => {
      const {
        lang
      } = this.state;
      const {
        dataLang
      } = this.state;

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

      const expression = new RegExp("^[0-9]+$");
      return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
        className: "container-banderas",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 152,
          columnNumber: 9
        }
      }, __jsx("img", {
        src: "/assents/icons/lang/spain.svg",
        onClick: this.setEs,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 153,
          columnNumber: 11
        }
      }), __jsx("img", {
        src: "/assents/icons/lang/united-states.svg",
        onClick: this.setEn,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 154,
          columnNumber: 11
        }
      }), __jsx("img", {
        src: "/assents/icons/lang/brazil.svg",
        onClick: this.setPor,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 155,
          columnNumber: 11
        }
      })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Container"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157,
          columnNumber: 9
        }
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
        className: "center-content",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 158,
          columnNumber: 11
        }
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        lg: 5,
        xl: 5,
        className: "mx-auto",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 159,
          columnNumber: 13
        }
      }, __jsx(formik__WEBPACK_IMPORTED_MODULE_3__["Formik"], {
        initialValues: {
          ccms: "",
          password: ""
        },
        validate: values => {
          const errors = {};
          return errors;
        },
        onSubmit: async (values, {
          setSubmitting
        }) => {
          await setTimeout(async () => {
            const datos = {
              ccms: values.ccms,
              password: values.password
            };
            const datos2 = {
              username: values.ccms,
              password: values.password,
              typeAut: 0
            };
            const url = _global__WEBPACK_IMPORTED_MODULE_8__["default"].url + "signin";
            const auxurl = _global__WEBPACK_IMPORTED_MODULE_8__["default"].url + "signingccms";
            const url2 = "https://ccmsapi.teleperformance.co/login";
            let ccmsStatus = 0;
            await axios__WEBPACK_IMPORTED_MODULE_9___default.a.post(url2, datos2).then(async function (res) {
              let status = await res.data.error.codError;

              if (status == 0) {
                ccmsStatus = await 1;
              } else {
                ccmsStatus = await 2;
              }
            }).catch(function (errors) {
              next_router__WEBPACK_IMPORTED_MODULE_5___default.a.push("/index");
            });

            if (ccmsStatus == 1) {
              await axios__WEBPACK_IMPORTED_MODULE_9___default.a.post(auxurl, datos).then(function (res) {
                if (res.status == 200) {
                  sweetalert__WEBPACK_IMPORTED_MODULE_7___default()({
                    title: dataLang.spandexL,
                    text: dataLang.disclaimerL,
                    className: "swal-wide",
                    button: dataLang.aceptButton,
                    icon: "warning"
                  }).then(async value => {
                    if (value == true) {
                      await axios__WEBPACK_IMPORTED_MODULE_9___default.a.post(_global__WEBPACK_IMPORTED_MODULE_8__["default"].url + "acknowledge", datos).then(async function (res2) {
                        if (res2.status = 200) {
                          cookies.set("token", res.data);
                          cookies.set("language", lang);
                          next_router__WEBPACK_IMPORTED_MODULE_5___default.a.push("/home");
                        } else {
                          next_router__WEBPACK_IMPORTED_MODULE_5___default.a.push("/index");
                        }
                      });
                    } else {
                      next_router__WEBPACK_IMPORTED_MODULE_5___default.a.push("/index");
                    }
                  });
                } else {
                  sweetalert__WEBPACK_IMPORTED_MODULE_7___default()(dataLang.noLoggin, dataLang.noLoggin2, "error").then(() => {
                    next_router__WEBPACK_IMPORTED_MODULE_5___default.a.push("/index");
                  });
                }
              }).catch(function (errors) {
                next_router__WEBPACK_IMPORTED_MODULE_5___default.a.push("/index");
              });
            } else if (ccmsStatus = 2) {
              axios__WEBPACK_IMPORTED_MODULE_9___default.a.post(url, datos).then(function (res) {
                if (res.status == 200) {
                  sweetalert__WEBPACK_IMPORTED_MODULE_7___default()({
                    title: dataLang.spandexL,
                    text: dataLang.disclaimerL,
                    className: "swal-wide",
                    button: dataLang.aceptButton,
                    icon: "warning"
                  }).then(async value => {
                    if (value == true) {
                      await axios__WEBPACK_IMPORTED_MODULE_9___default.a.post(_global__WEBPACK_IMPORTED_MODULE_8__["default"].url + "acknowledge", datos).then(async function (res2) {
                        if (res2.status = 200) {
                          cookies.set("token", res.data);
                          cookies.set("language", lang);
                          next_router__WEBPACK_IMPORTED_MODULE_5___default.a.push("/home");
                        } else {
                          next_router__WEBPACK_IMPORTED_MODULE_5___default.a.push("/index");
                        }
                      });
                    } else {
                      next_router__WEBPACK_IMPORTED_MODULE_5___default.a.push("/index");
                    }
                  });
                } else {
                  sweetalert__WEBPACK_IMPORTED_MODULE_7___default()(dataLang.noLoggin, dataLang.noLoggin2, "error").then(() => {
                    next_router__WEBPACK_IMPORTED_MODULE_5___default.a.push("/index");
                  });
                }
              }).catch(function (errors) {
                next_router__WEBPACK_IMPORTED_MODULE_5___default.a.push("/index");
              });
            }

            setSubmitting(false);
          }, 400);
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 160,
          columnNumber: 15
        }
      }, ({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting
        /* and other goodies */

      }) => __jsx("form", {
        onSubmit: handleSubmit,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 280,
          columnNumber: 19
        }
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        lg: 12,
        xl: 12,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 281,
          columnNumber: 21
        }
      }, __jsx("img", {
        className: "login-icon-width",
        src: "/assents/images/Tiktok_IconLogin.png",
        alt: "",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 282,
          columnNumber: 23
        }
      })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        lg: 12,
        xl: 12,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 284,
          columnNumber: 21
        }
      }, __jsx("input", {
        type: "text",
        name: "ccms",
        onChange: handleChange,
        onBlur: handleBlur,
        value: values.ccms,
        className: "input-login",
        placeholder: dataLang.loginUser,
        autoComplete: "false",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 285,
          columnNumber: 23
        }
      }), errors.ccms && touched.ccms && __jsx("div", {
        className: "error",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 286,
          columnNumber: 55
        }
      }, errors.ccms), __jsx("input", {
        type: "password",
        name: "password",
        onChange: handleChange,
        onBlur: handleBlur,
        value: values.password,
        className: "input-login",
        placeholder: dataLang.loginPass,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 287,
          columnNumber: 23
        }
      }), errors.password && touched.password && __jsx("div", {
        className: "error",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 288,
          columnNumber: 63
        }
      }, errors.password)), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
        className: "buttons-aling--center mx-auto",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 290,
          columnNumber: 21
        }
      }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        lg: 12,
        xl: 12,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 291,
          columnNumber: 23
        }
      }, __jsx("button", {
        type: "submit",
        className: "button-login",
        disabled: isSubmitting,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 292,
          columnNumber: 25
        }
      }, dataLang.loginSignin)))))))));
    });

    _defineProperty(this, "espacio", () => {
      return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(react_page_loading__WEBPACK_IMPORTED_MODULE_2___default.a, {
        loader: "comet-spin",
        color: "#ea1d52",
        size: 80,
        duration: 0.8,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 309,
          columnNumber: 9
        }
      }));
    });
  }

  async componentDidMount() {
    let dataToT = {};
    await axios__WEBPACK_IMPORTED_MODULE_9___default.a.get(_global__WEBPACK_IMPORTED_MODULE_8__["default"].url + "multi-language").then(res => {
      dataToT = res.data;
    });
    let auxData = await dataToT;
    await this.setState({
      allLang: auxData,
      dataLang: auxData[this.state.lang],
      loading: false
    });
  }

  render() {
    const {
      loading
    } = this.state;
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, loading ? this.espacio() : this.renderList());
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Login);

/***/ }),

/***/ "./src/components/material/material.css":
/*!**********************************************!*\
  !*** ./src/components/material/material.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/components/mediavideos/mediavideos.css":
/*!****************************************************!*\
  !*** ./src/components/mediavideos/mediavideos.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/components/menu/menu.css":
/*!**************************************!*\
  !*** ./src/components/menu/menu.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {



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

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\lopezvalenzuela.16\Documents\GitHub\tp-tiktok-front\pages\index.js */"./pages/index.js");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "formik":
/*!*************************!*\
  !*** external "formik" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("formik");

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

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

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

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

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

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map