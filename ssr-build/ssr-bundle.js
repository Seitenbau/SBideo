module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		176: 0
/******/ 	};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("./" + ({}[chunkId]||chunkId) + ".chunk." + {"0":"7ff25","1":"73653","2":"72cf5","3":"f3f80","4":"cc3ac","5":"d879b","6":"e1b80","7":"6ba71","8":"b3a27","9":"88712","10":"cd1b6","11":"1cce5","12":"7ca8a","13":"06c60","14":"f70fb","15":"d9e9b","16":"75cc8","17":"0bce2","18":"16e9e","19":"fdc22","20":"09f86","21":"0aa65","22":"e23ae","23":"710f6","24":"8c17c","25":"71bdd","26":"e4140","27":"e2772","28":"64f40","29":"a84ea","30":"6d54a","31":"8d088","32":"b09f2","33":"68bca","34":"5b48e","35":"f46e1","36":"c61fe","37":"a3117","38":"0c1d8","39":"a4595","40":"be370","41":"66a80","42":"3dbab","43":"1a0c3","44":"e9cc3","45":"dd428","46":"b5913","47":"1cf72","48":"2a02d","49":"8f1d5","50":"5aa1f","51":"275dc","52":"94c3a","53":"5b28d","54":"e51e4","55":"20116","56":"a0e24","57":"d64a9","58":"bebd6","59":"62d75","60":"6dabd","61":"e5e10","62":"e0a68","63":"4c93d","64":"33cf5","65":"1ccd3","66":"da210","67":"57b9c","68":"7eae3","69":"5f645","70":"dbcf0","71":"35b3b","72":"b355b","73":"e6c89","74":"b4b14","75":"a4a73","76":"4cfa7","77":"84162","78":"668c5","79":"5b585","80":"8e3c0","81":"9f962","82":"321e3","83":"2179b","84":"75c4e","85":"b5096","86":"d70bf","87":"75d2c","88":"d3150","89":"6fa05","90":"01117","91":"1f6d2","92":"a31de","93":"758c5","94":"28ca3","95":"5880d","96":"74e7b","97":"7e17c","98":"864ec","99":"2ec9e","100":"9e458","101":"7a648","102":"4f978","103":"0463d","104":"6bf53","105":"6ae86","106":"a1b70","107":"fb194","108":"3d61e","109":"23791","110":"16798","111":"4dabf","112":"87b7e","113":"10047","114":"0e3ea","115":"68017","116":"c7647","117":"a33b4","118":"67d84","119":"a721b","120":"95eee","121":"62993","122":"071c1","123":"ce695","124":"be89d","125":"15911","126":"45ff3","127":"ea60e","128":"0a9f5","129":"99fc2","130":"0ad69","131":"3ec17","132":"09fbc","133":"cfbd9","134":"4752d","135":"71875","136":"ab960","137":"d448e","138":"cf63c","139":"4f68b","140":"c4033","141":"1da62","142":"d1d0a","143":"523b1","144":"a6f78","145":"647c1","146":"2c790","147":"a1fca","148":"40185","149":"21bbf","150":"00857","151":"3d35f","152":"d3caf","153":"7999d","154":"73f61","155":"6e4fc","156":"37da6","157":"bcb8a","158":"9255b","159":"cb946","160":"02c60","161":"846ee","162":"ca408","163":"38219","164":"77eb9","165":"84037","166":"14f5c","167":"30ea4","168":"5317a","169":"a63a5","170":"2eb07","171":"2951a","172":"61bde","173":"0c34a","174":"417ad","175":"033e2"}[chunkId] + ".js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		return Promise.resolve();
/******/ 	};
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "/relativePath";
/******/
/******/ 	// uncatched error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using System.import().catch()
/******/ 		});
/******/ 	};
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "JkW7");
/******/ })
/************************************************************************/
/******/ ({

/***/ "/HDu":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var React = __webpack_require__("eW0v");

function escapeForRegExp(query) {
  return query.replace(/[-\\^$*+?.()|[\]{}]/g, '\\$&');
}

function markIt(input, query) {
  var regex = RegExp(escapeForRegExp(query), 'gi');

  return {
    __html: input.replace(regex, '<mark>$&</mark>')
  };
}

function filterSuggestions(query, suggestions, length) {
  var regex = new RegExp("(?:^|\\s)" + escapeForRegExp(query), 'i');
  return suggestions.filter(function (item) {
    return regex.test(item.name);
  }).slice(0, length);
}

var Suggestions = function (superclass) {
  function Suggestions(props) {
    superclass.call(this, props);

    this.state = {
      options: filterSuggestions(this.props.query, this.props.suggestions, this.props.maxSuggestionsLength)
    };
  }

  if (superclass) Suggestions.__proto__ = superclass;
  Suggestions.prototype = Object.create(superclass && superclass.prototype);
  Suggestions.prototype.constructor = Suggestions;

  Suggestions.prototype.componentWillReceiveProps = function componentWillReceiveProps(newProps) {
    this.setState({
      options: filterSuggestions(newProps.query, newProps.suggestions, newProps.maxSuggestionsLength)
    });
  };

  Suggestions.prototype.handleMouseDown = function handleMouseDown(item, e) {
    // focus is shifted on mouse down but calling preventDefault prevents this
    e.preventDefault();
    this.props.addTag(item);
  };

  Suggestions.prototype.render = function render() {
    var this$1 = this;

    if (!this.props.expandable || !this.state.options.length) {
      return null;
    }

    var options = this.state.options.map(function (item, i) {
      var key = this$1.props.listboxId + "-" + i;
      var classNames = [];

      if (this$1.props.selectedIndex === i) {
        classNames.push(this$1.props.classNames.suggestionActive);
      }

      if (item.disabled) {
        classNames.push(this$1.props.classNames.suggestionDisabled);
      }

      return React.createElement('li', {
        id: key, key: key, role: 'option', className: classNames.join(' '), 'aria-disabled': item.disabled === true, onMouseDown: this$1.handleMouseDown.bind(this$1, item) }, React.createElement('span', { dangerouslySetInnerHTML: markIt(item.name, this$1.props.query) }));
    });

    return React.createElement('div', { className: this.props.classNames.suggestions }, React.createElement('ul', { role: 'listbox', id: this.props.listboxId }, options));
  };

  return Suggestions;
}(React.Component);

module.exports = Suggestions;

/***/ }),

/***/ "/QC5":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subscribers", function() { return subscribers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCurrentUrl", function() { return getCurrentUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "route", function() { return route; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Router", function() { return Router; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Route", function() { return Route; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Link", function() { return Link; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact__ = __webpack_require__("KM04");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_preact__);


var EMPTY$1 = {};

function assign(obj, props) {
	// eslint-disable-next-line guard-for-in
	for (var i in props) {
		obj[i] = props[i];
	}
	return obj;
}

function exec(url, route, opts) {
	var reg = /(?:\?([^#]*))?(#.*)?$/,
	    c = url.match(reg),
	    matches = {},
	    ret;
	if (c && c[1]) {
		var p = c[1].split('&');
		for (var i = 0; i < p.length; i++) {
			var r = p[i].split('=');
			matches[decodeURIComponent(r[0])] = decodeURIComponent(r.slice(1).join('='));
		}
	}
	url = segmentize(url.replace(reg, ''));
	route = segmentize(route || '');
	var max = Math.max(url.length, route.length);
	for (var i$1 = 0; i$1 < max; i$1++) {
		if (route[i$1] && route[i$1].charAt(0) === ':') {
			var param = route[i$1].replace(/(^\:|[+*?]+$)/g, ''),
			    flags = (route[i$1].match(/[+*?]+$/) || EMPTY$1)[0] || '',
			    plus = ~flags.indexOf('+'),
			    star = ~flags.indexOf('*'),
			    val = url[i$1] || '';
			if (!val && !star && (flags.indexOf('?') < 0 || plus)) {
				ret = false;
				break;
			}
			matches[param] = decodeURIComponent(val);
			if (plus || star) {
				matches[param] = url.slice(i$1).map(decodeURIComponent).join('/');
				break;
			}
		} else if (route[i$1] !== url[i$1]) {
			ret = false;
			break;
		}
	}
	if (opts.default !== true && ret === false) {
		return false;
	}
	return matches;
}

function pathRankSort(a, b) {
	return a.rank < b.rank ? 1 : a.rank > b.rank ? -1 : a.index - b.index;
}

// filter out VNodes without attributes (which are unrankeable), and add `index`/`rank` properties to be used in sorting.
function prepareVNodeForRanking(vnode, index) {
	vnode.index = index;
	vnode.rank = rankChild(vnode);
	return vnode.attributes;
}

function segmentize(url) {
	return url.replace(/(^\/+|\/+$)/g, '').split('/');
}

function rankSegment(segment) {
	return segment.charAt(0) == ':' ? 1 + '*+?'.indexOf(segment.charAt(segment.length - 1)) || 4 : 5;
}

function rank(path) {
	return segmentize(path).map(rankSegment).join('');
}

function rankChild(vnode) {
	return vnode.attributes.default ? 0 : rank(vnode.attributes.path);
}

var customHistory = null;

var ROUTERS = [];

var subscribers = [];

var EMPTY = {};

function isPreactElement(node) {
	return node.__preactattr_ != null || typeof Symbol !== 'undefined' && node[Symbol.for('preactattr')] != null;
}

function setUrl(url, type) {
	if (type === void 0) type = 'push';

	if (customHistory && customHistory[type]) {
		customHistory[type](url);
	} else if (typeof history !== 'undefined' && history[type + 'State']) {
		history[type + 'State'](null, null, url);
	}
}

function getCurrentUrl() {
	var url;
	if (customHistory && customHistory.location) {
		url = customHistory.location;
	} else if (customHistory && customHistory.getCurrentLocation) {
		url = customHistory.getCurrentLocation();
	} else {
		url = typeof location !== 'undefined' ? location : EMPTY;
	}
	return "" + (url.pathname || '') + (url.search || '');
}

function route(url, replace) {
	if (replace === void 0) replace = false;

	if (typeof url !== 'string' && url.url) {
		replace = url.replace;
		url = url.url;
	}

	// only push URL into history if we can handle it
	if (canRoute(url)) {
		setUrl(url, replace ? 'replace' : 'push');
	}

	return routeTo(url);
}

/** Check if the given URL can be handled by any router instances. */
function canRoute(url) {
	for (var i = ROUTERS.length; i--;) {
		if (ROUTERS[i].canRoute(url)) {
			return true;
		}
	}
	return false;
}

/** Tell all router instances to handle the given URL.  */
function routeTo(url) {
	var didRoute = false;
	for (var i = 0; i < ROUTERS.length; i++) {
		if (ROUTERS[i].routeTo(url) === true) {
			didRoute = true;
		}
	}
	for (var i$1 = subscribers.length; i$1--;) {
		subscribers[i$1](url);
	}
	return didRoute;
}

function routeFromLink(node) {
	// only valid elements
	if (!node || !node.getAttribute) {
		return;
	}

	var href = node.getAttribute('href'),
	    target = node.getAttribute('target');

	// ignore links with targets and non-path URLs
	if (!href || !href.match(/^\//g) || target && !target.match(/^_?self$/i)) {
		return;
	}

	// attempt to route, if no match simply cede control to browser
	return route(href);
}

function handleLinkClick(e) {
	if (e.button == 0) {
		routeFromLink(e.currentTarget || e.target || this);
		return prevent(e);
	}
}

function prevent(e) {
	if (e) {
		if (e.stopImmediatePropagation) {
			e.stopImmediatePropagation();
		}
		if (e.stopPropagation) {
			e.stopPropagation();
		}
		e.preventDefault();
	}
	return false;
}

function delegateLinkHandler(e) {
	// ignore events the browser takes care of already:
	if (e.ctrlKey || e.metaKey || e.altKey || e.shiftKey || e.button !== 0) {
		return;
	}

	var t = e.target;
	do {
		if (String(t.nodeName).toUpperCase() === 'A' && t.getAttribute('href') && isPreactElement(t)) {
			if (t.hasAttribute('native')) {
				return;
			}
			// if link is handled by the router, prevent browser defaults
			if (routeFromLink(t)) {
				return prevent(e);
			}
		}
	} while (t = t.parentNode);
}

var eventListenersInitialized = false;

function initEventListeners() {
	if (eventListenersInitialized) {
		return;
	}

	if (typeof addEventListener === 'function') {
		if (!customHistory) {
			addEventListener('popstate', function () {
				routeTo(getCurrentUrl());
			});
		}
		addEventListener('click', delegateLinkHandler);
	}
	eventListenersInitialized = true;
}

var Router = function (Component$$1) {
	function Router(props) {
		Component$$1.call(this, props);
		if (props.history) {
			customHistory = props.history;
		}

		this.state = {
			url: props.url || getCurrentUrl()
		};

		initEventListeners();
	}

	if (Component$$1) Router.__proto__ = Component$$1;
	Router.prototype = Object.create(Component$$1 && Component$$1.prototype);
	Router.prototype.constructor = Router;

	Router.prototype.shouldComponentUpdate = function shouldComponentUpdate(props) {
		if (props.static !== true) {
			return true;
		}
		return props.url !== this.props.url || props.onChange !== this.props.onChange;
	};

	/** Check if the given URL can be matched against any children */
	Router.prototype.canRoute = function canRoute(url) {
		return this.getMatchingChildren(this.props.children, url, false).length > 0;
	};

	/** Re-render children with a new URL to match against. */
	Router.prototype.routeTo = function routeTo(url) {
		this._didRoute = false;
		this.setState({ url: url });

		// if we're in the middle of an update, don't synchronously re-route.
		if (this.updating) {
			return this.canRoute(url);
		}

		this.forceUpdate();
		return this._didRoute;
	};

	Router.prototype.componentWillMount = function componentWillMount() {
		ROUTERS.push(this);
		this.updating = true;
	};

	Router.prototype.componentDidMount = function componentDidMount() {
		var this$1 = this;

		if (customHistory) {
			this.unlisten = customHistory.listen(function (location) {
				this$1.routeTo("" + (location.pathname || '') + (location.search || ''));
			});
		}
		this.updating = false;
	};

	Router.prototype.componentWillUnmount = function componentWillUnmount() {
		if (typeof this.unlisten === 'function') {
			this.unlisten();
		}
		ROUTERS.splice(ROUTERS.indexOf(this), 1);
	};

	Router.prototype.componentWillUpdate = function componentWillUpdate() {
		this.updating = true;
	};

	Router.prototype.componentDidUpdate = function componentDidUpdate() {
		this.updating = false;
	};

	Router.prototype.getMatchingChildren = function getMatchingChildren(children, url, invoke) {
		return children.filter(prepareVNodeForRanking).sort(pathRankSort).map(function (vnode) {
			var matches = exec(url, vnode.attributes.path, vnode.attributes);
			if (matches) {
				if (invoke !== false) {
					var newProps = { url: url, matches: matches };
					assign(newProps, matches);
					delete newProps.ref;
					delete newProps.key;
					return Object(__WEBPACK_IMPORTED_MODULE_0_preact__["cloneElement"])(vnode, newProps);
				}
				return vnode;
			}
		}).filter(Boolean);
	};

	Router.prototype.render = function render(ref, ref$1) {
		var children = ref.children;
		var onChange = ref.onChange;
		var url = ref$1.url;

		var active = this.getMatchingChildren(children, url, true);

		var current = active[0] || null;
		this._didRoute = !!current;

		var previous = this.previousUrl;
		if (url !== previous) {
			this.previousUrl = url;
			if (typeof onChange === 'function') {
				onChange({
					router: this,
					url: url,
					previous: previous,
					active: active,
					current: current
				});
			}
		}

		return current;
	};

	return Router;
}(__WEBPACK_IMPORTED_MODULE_0_preact__["Component"]);

var Link = function Link(props) {
	return Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])('a', assign({ onClick: handleLinkClick }, props));
};

var Route = function Route(props) {
	return Object(__WEBPACK_IMPORTED_MODULE_0_preact__["h"])(props.component, props);
};

Router.subscribers = subscribers;
Router.getCurrentUrl = getCurrentUrl;
Router.route = route;
Router.Router = Router;
Router.Route = Route;
Router.Link = Link;

/* harmony default export */ __webpack_exports__["default"] = (Router);
//# sourceMappingURL=preact-router.es.js.map

/***/ }),

/***/ "2JuF":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as default options for `_.truncate`. */
var DEFAULT_TRUNC_LENGTH = 30,
    DEFAULT_TRUNC_OMISSION = '...';

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0,
    MAX_INTEGER = 1.7976931348623157e+308,
    NAN = 0 / 0;

/** `Object#toString` result references. */
var regexpTag = '[object RegExp]',
    symbolTag = '[object Symbol]';

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to match `RegExp` flags from their coerced string values. */
var reFlags = /\w*$/;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Used to compose unicode character classes. */
var rsAstralRange = '\\ud800-\\udfff',
    rsComboMarksRange = '\\u0300-\\u036f\\ufe20-\\ufe23',
    rsComboSymbolsRange = '\\u20d0-\\u20f0',
    rsVarRange = '\\ufe0e\\ufe0f';

/** Used to compose unicode capture groups. */
var rsAstral = '[' + rsAstralRange + ']',
    rsCombo = '[' + rsComboMarksRange + rsComboSymbolsRange + ']',
    rsFitz = '\\ud83c[\\udffb-\\udfff]',
    rsModifier = '(?:' + rsCombo + '|' + rsFitz + ')',
    rsNonAstral = '[^' + rsAstralRange + ']',
    rsRegional = '(?:\\ud83c[\\udde6-\\uddff]){2}',
    rsSurrPair = '[\\ud800-\\udbff][\\udc00-\\udfff]',
    rsZWJ = '\\u200d';

/** Used to compose unicode regexes. */
var reOptMod = rsModifier + '?',
    rsOptVar = '[' + rsVarRange + ']?',
    rsOptJoin = '(?:' + rsZWJ + '(?:' + [rsNonAstral, rsRegional, rsSurrPair].join('|') + ')' + rsOptVar + reOptMod + ')*',
    rsSeq = rsOptVar + reOptMod + rsOptJoin,
    rsSymbol = '(?:' + [rsNonAstral + rsCombo + '?', rsCombo, rsRegional, rsSurrPair, rsAstral].join('|') + ')';

/** Used to match [string symbols](https://mathiasbynens.be/notes/javascript-unicode). */
var reUnicode = RegExp(rsFitz + '(?=' + rsFitz + ')|' + rsSymbol + rsSeq, 'g');

/** Used to detect strings with [zero-width joiners or code points from the astral planes](http://eev.ee/blog/2015/09/12/dark-corners-of-unicode/). */
var reHasUnicode = RegExp('[' + rsZWJ + rsAstralRange + rsComboMarksRange + rsComboSymbolsRange + rsVarRange + ']');

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = function () {
  try {
    return freeProcess && freeProcess.binding('util');
  } catch (e) {}
}();

/* Node.js helper references. */
var nodeIsRegExp = nodeUtil && nodeUtil.isRegExp;

/**
 * Gets the size of an ASCII `string`.
 *
 * @private
 * @param {string} string The string inspect.
 * @returns {number} Returns the string size.
 */
var asciiSize = baseProperty('length');

/**
 * Converts an ASCII `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */
function asciiToArray(string) {
  return string.split('');
}

/**
 * The base implementation of `_.property` without support for deep paths.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function baseProperty(key) {
  return function (object) {
    return object == null ? undefined : object[key];
  };
}

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function (value) {
    return func(value);
  };
}

/**
 * Checks if `string` contains Unicode symbols.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {boolean} Returns `true` if a symbol is found, else `false`.
 */
function hasUnicode(string) {
  return reHasUnicode.test(string);
}

/**
 * Gets the number of symbols in `string`.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {number} Returns the string size.
 */
function stringSize(string) {
  return hasUnicode(string) ? unicodeSize(string) : asciiSize(string);
}

/**
 * Converts `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */
function stringToArray(string) {
  return hasUnicode(string) ? unicodeToArray(string) : asciiToArray(string);
}

/**
 * Gets the size of a Unicode `string`.
 *
 * @private
 * @param {string} string The string inspect.
 * @returns {number} Returns the string size.
 */
function unicodeSize(string) {
  var result = reUnicode.lastIndex = 0;
  while (reUnicode.test(string)) {
    result++;
  }
  return result;
}

/**
 * Converts a Unicode `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */
function unicodeToArray(string) {
  return string.match(reUnicode) || [];
}

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/** Built-in value references. */
var Symbol = root.Symbol;

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * The base implementation of `_.isRegExp` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a regexp, else `false`.
 */
function baseIsRegExp(value) {
  return isObject(value) && objectToString.call(value) == regexpTag;
}

/**
 * The base implementation of `_.slice` without an iteratee call guard.
 *
 * @private
 * @param {Array} array The array to slice.
 * @param {number} [start=0] The start position.
 * @param {number} [end=array.length] The end position.
 * @returns {Array} Returns the slice of `array`.
 */
function baseSlice(array, start, end) {
  var index = -1,
      length = array.length;

  if (start < 0) {
    start = -start > length ? 0 : length + start;
  }
  end = end > length ? length : end;
  if (end < 0) {
    end += length;
  }
  length = start > end ? 0 : end - start >>> 0;
  start >>>= 0;

  var result = Array(length);
  while (++index < length) {
    result[index] = array[index + start];
  }
  return result;
}

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = value + '';
  return result == '0' && 1 / value == -INFINITY ? '-0' : result;
}

/**
 * Casts `array` to a slice if it's needed.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {number} start The start position.
 * @param {number} [end=array.length] The end position.
 * @returns {Array} Returns the cast slice.
 */
function castSlice(array, start, end) {
  var length = array.length;
  end = end === undefined ? length : end;
  return !start && end >= length ? array : baseSlice(array, start, end);
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a `RegExp` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a regexp, else `false`.
 * @example
 *
 * _.isRegExp(/abc/);
 * // => true
 *
 * _.isRegExp('/abc/');
 * // => false
 */
var isRegExp = nodeIsRegExp ? baseUnary(nodeIsRegExp) : baseIsRegExp;

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' || isObjectLike(value) && objectToString.call(value) == symbolTag;
}

/**
 * Converts `value` to a finite number.
 *
 * @static
 * @memberOf _
 * @since 4.12.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted number.
 * @example
 *
 * _.toFinite(3.2);
 * // => 3.2
 *
 * _.toFinite(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toFinite(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toFinite('3.2');
 * // => 3.2
 */
function toFinite(value) {
  if (!value) {
    return value === 0 ? value : 0;
  }
  value = toNumber(value);
  if (value === INFINITY || value === -INFINITY) {
    var sign = value < 0 ? -1 : 1;
    return sign * MAX_INTEGER;
  }
  return value === value ? value : 0;
}

/**
 * Converts `value` to an integer.
 *
 * **Note:** This method is loosely based on
 * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted integer.
 * @example
 *
 * _.toInteger(3.2);
 * // => 3
 *
 * _.toInteger(Number.MIN_VALUE);
 * // => 0
 *
 * _.toInteger(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toInteger('3.2');
 * // => 3
 */
function toInteger(value) {
  var result = toFinite(value),
      remainder = result % 1;

  return result === result ? remainder ? result - remainder : result : 0;
}

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? other + '' : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
}

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : baseToString(value);
}

/**
 * Truncates `string` if it's longer than the given maximum string length.
 * The last characters of the truncated string are replaced with the omission
 * string which defaults to "...".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category String
 * @param {string} [string=''] The string to truncate.
 * @param {Object} [options={}] The options object.
 * @param {number} [options.length=30] The maximum string length.
 * @param {string} [options.omission='...'] The string to indicate text is omitted.
 * @param {RegExp|string} [options.separator] The separator pattern to truncate to.
 * @returns {string} Returns the truncated string.
 * @example
 *
 * _.truncate('hi-diddly-ho there, neighborino');
 * // => 'hi-diddly-ho there, neighbo...'
 *
 * _.truncate('hi-diddly-ho there, neighborino', {
 *   'length': 24,
 *   'separator': ' '
 * });
 * // => 'hi-diddly-ho there,...'
 *
 * _.truncate('hi-diddly-ho there, neighborino', {
 *   'length': 24,
 *   'separator': /,? +/
 * });
 * // => 'hi-diddly-ho there...'
 *
 * _.truncate('hi-diddly-ho there, neighborino', {
 *   'omission': ' [...]'
 * });
 * // => 'hi-diddly-ho there, neig [...]'
 */
function truncate(string, options) {
  var length = DEFAULT_TRUNC_LENGTH,
      omission = DEFAULT_TRUNC_OMISSION;

  if (isObject(options)) {
    var separator = 'separator' in options ? options.separator : separator;
    length = 'length' in options ? toInteger(options.length) : length;
    omission = 'omission' in options ? baseToString(options.omission) : omission;
  }
  string = toString(string);

  var strLength = string.length;
  if (hasUnicode(string)) {
    var strSymbols = stringToArray(string);
    strLength = strSymbols.length;
  }
  if (length >= strLength) {
    return string;
  }
  var end = length - stringSize(omission);
  if (end < 1) {
    return omission;
  }
  var result = strSymbols ? castSlice(strSymbols, 0, end).join('') : string.slice(0, end);

  if (separator === undefined) {
    return result + omission;
  }
  if (strSymbols) {
    end += result.length - end;
  }
  if (isRegExp(separator)) {
    if (string.slice(end).search(separator)) {
      var match,
          substring = result;

      if (!separator.global) {
        separator = RegExp(separator.source, toString(reFlags.exec(separator)) + 'g');
      }
      separator.lastIndex = 0;
      while (match = separator.exec(substring)) {
        var newEnd = match.index;
      }
      result = result.slice(0, newEnd === undefined ? end : newEnd);
    }
  } else if (string.indexOf(baseToString(separator), end) != end) {
    var index = result.lastIndexOf(separator);
    if (index > -1) {
      result = result.slice(0, index);
    }
  }
  return result + omission;
}

module.exports = truncate;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("HJJD")(module)))

/***/ }),

/***/ "5D9O":
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (false) {
  var REACT_ELEMENT_TYPE = typeof Symbol === 'function' && Symbol.for && Symbol.for('react.element') || 0xeac7;

  var isValidElement = function isValidElement(object) {
    return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
  };

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = require('./factoryWithTypeCheckers')(isValidElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__("wVGV")();
}

/***/ }),

/***/ "5GlD":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"sizer":"sizer__3PJsw","poster":"poster__27R4r","video":"video__2ty1_"};

/***/ }),

/***/ "7Iqb":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var React = __webpack_require__("eW0v");
var PropTypes = __webpack_require__("5D9O");
var Tag = __webpack_require__("d1Ss");
var Input = __webpack_require__("zufa");
var Suggestions = __webpack_require__("/HDu");

var KEYS = {
  ENTER: 13,
  TAB: 9,
  BACKSPACE: 8,
  UP_ARROW: 38,
  DOWN_ARROW: 40
};

var CLASS_NAMES = {
  root: 'react-tags',
  rootFocused: 'is-focused',
  selected: 'react-tags__selected',
  selectedTag: 'react-tags__selected-tag',
  selectedTagName: 'react-tags__selected-tag-name',
  search: 'react-tags__search',
  searchInput: 'react-tags__search-input',
  suggestions: 'react-tags__suggestions',
  suggestionActive: 'is-active',
  suggestionDisabled: 'is-disabled'
};

var ReactTags = function (superclass) {
  function ReactTags(props) {
    superclass.call(this, props);

    this.state = {
      query: '',
      focused: false,
      expandable: false,
      selectedIndex: -1,
      classNames: _extends({}, CLASS_NAMES, this.props.classNames)
    };
  }

  if (superclass) ReactTags.__proto__ = superclass;
  ReactTags.prototype = Object.create(superclass && superclass.prototype);
  ReactTags.prototype.constructor = ReactTags;

  ReactTags.prototype.componentWillReceiveProps = function componentWillReceiveProps(newProps) {
    this.setState({
      classNames: _extends({}, CLASS_NAMES, newProps.classNames)
    });
  };

  ReactTags.prototype.handleInput = function handleInput(e) {
    var query = e.target.value;

    if (this.props.handleInputChange) {
      this.props.handleInputChange(query);
    }

    this.setState({ query: query });
  };

  ReactTags.prototype.handleKeyDown = function handleKeyDown(e) {
    var ref = this.state;
    var query = ref.query;
    var selectedIndex = ref.selectedIndex;
    var ref$1 = this.props;
    var delimiters = ref$1.delimiters;
    var delimiterChars = ref$1.delimiterChars;

    // when one of the terminating keys is pressed, add current query to the tags.
    if (delimiters.indexOf(e.keyCode) > -1 || delimiterChars.indexOf(e.key) > -1) {
      if (query || selectedIndex > -1) {
        e.preventDefault();
      }

      if (query.length >= this.props.minQueryLength) {
        // Check if the user typed in an existing suggestion.
        var match = this.suggestions.state.options.findIndex(function (suggestion) {
          return suggestion.name.search(new RegExp("^" + query + "$", 'i')) === 0;
        });

        var index = selectedIndex === -1 ? match : selectedIndex;

        if (index > -1) {
          this.addTag(this.suggestions.state.options[index]);
        } else if (this.props.allowNew) {
          this.addTag({ name: query });
        }
      }
    }

    // when backspace key is pressed and query is blank, delete the last tag
    if (e.keyCode === KEYS.BACKSPACE && query.length === 0 && this.props.allowBackspace) {
      this.deleteTag(this.props.tags.length - 1);
    }

    if (e.keyCode === KEYS.UP_ARROW) {
      e.preventDefault();

      // if last item, cycle to the bottom
      if (selectedIndex <= 0) {
        this.setState({ selectedIndex: this.suggestions.state.options.length - 1 });
      } else {
        this.setState({ selectedIndex: selectedIndex - 1 });
      }
    }

    if (e.keyCode === KEYS.DOWN_ARROW) {
      e.preventDefault();

      this.setState({ selectedIndex: (selectedIndex + 1) % this.suggestions.state.options.length });
    }
  };

  ReactTags.prototype.handleClick = function handleClick(e) {
    if (document.activeElement !== e.target) {
      this.input.input.focus();
    }
  };

  ReactTags.prototype.handleBlur = function handleBlur() {
    this.setState({ focused: false, selectedIndex: -1 });

    if (this.props.handleBlur) {
      this.props.handleBlur();
    }
  };

  ReactTags.prototype.handleFocus = function handleFocus() {
    this.setState({ focused: true });

    if (this.props.handleFocus) {
      this.props.handleFocus();
    }
  };

  ReactTags.prototype.addTag = function addTag(tag) {
    if (tag.disabled) {
      return;
    }

    this.props.handleAddition(tag);

    // reset the state
    this.setState({
      query: '',
      selectedIndex: -1
    });
  };

  ReactTags.prototype.deleteTag = function deleteTag(i) {
    this.props.handleDelete(i);
    this.setState({ query: '' });
  };

  ReactTags.prototype.render = function render() {
    var this$1 = this;

    var listboxId = 'ReactTags-listbox';

    var TagComponent = this.props.tagComponent || Tag;

    var tags = this.props.tags.map(function (tag, i) {
      return React.createElement(TagComponent, {
        key: i, tag: tag, classNames: this$1.state.classNames, onDelete: this$1.deleteTag.bind(this$1, i) });
    });

    var expandable = this.state.focused && this.state.query.length >= this.props.minQueryLength;
    var classNames = [this.state.classNames.root];

    this.state.focused && classNames.push(this.state.classNames.rootFocused);

    return React.createElement('div', { className: classNames.join(' '), onClick: this.handleClick.bind(this) }, React.createElement('div', { className: this.state.classNames.selected, 'aria-live': 'polite', 'aria-relevant': 'additions removals' }, tags), React.createElement('div', {
      className: this.state.classNames.search, onBlurCapture: this.handleBlur.bind(this), onFocusCapture: this.handleFocus.bind(this), onInput: this.handleInput.bind(this), onKeyDown: this.handleKeyDown.bind(this) }, React.createElement(Input, _extends({}, this.state, { ref: function ref(c) {
        this$1.input = c;
      }, listboxId: listboxId, autofocus: this.props.autofocus, autoresize: this.props.autoresize, expandable: expandable, placeholder: this.props.placeholder })), React.createElement(Suggestions, _extends({}, this.state, { ref: function ref(c) {
        this$1.suggestions = c;
      }, listboxId: listboxId, expandable: expandable, suggestions: this.props.suggestions, addTag: this.addTag.bind(this), maxSuggestionsLength: this.props.maxSuggestionsLength }))));
  };

  return ReactTags;
}(React.Component);

ReactTags.defaultProps = {
  tags: [],
  placeholder: 'Add new tag',
  suggestions: [],
  autofocus: true,
  autoresize: true,
  delimiters: [KEYS.TAB, KEYS.ENTER],
  delimiterChars: [],
  minQueryLength: 2,
  maxSuggestionsLength: 6,
  allowNew: false,
  allowBackspace: true,
  tagComponent: null
};

module.exports = ReactTags;

/***/ }),

/***/ "7f45":
/***/ (function(module, exports, __webpack_require__) {

!function (t, e) {
   true ? module.exports = e(__webpack_require__("eW0v")) : "function" == typeof define && define.amd ? define(["react"], e) : "object" == typeof exports ? exports.ReactAutolink = e(require("react")) : t.ReactAutolink = e(t.React);
}(this, function (t) {
  return function (t) {
    function e(n) {
      if (r[n]) return r[n].exports;var o = r[n] = { exports: {}, id: n, loaded: !1 };return t[n].call(o.exports, o, o.exports, e), o.loaded = !0, o.exports;
    }var r = {};return e.m = t, e.c = r, e.p = "", e(0);
  }([function (t, e, r) {
    "use strict";
    var n = function n(t) {
      return t && t.__esModule ? t["default"] : t;
    },
        o = n(r(2)),
        u = n(r(1)),
        a = function a() {
      var t = /((?:https?:\/\/)?(?:(?:[a-z0-9]?(?:[a-z0-9\-]{1,61}[a-z0-9])?\.[^\.|\s])+[a-z\.]*[a-z]+|(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3})(?::\d{1,5})*[a-z0-9.,_\/~#&=;%+?\-\\(\\)]*)/gi,
          e = function e(t, _e) {
        return t.slice(0, _e.length) === _e;
      };return { autolink: function autolink(r) {
          var n = void 0 === arguments[1] ? {} : arguments[1];return r ? r.split(t).map(function (r) {
            var a = r.match(t);if (a) {
              var i = a[0],
                  c = i.split("/");return "" !== c[1] && c[0].length < 5 ? r : o.createElement("a", u({ href: e(i, "http") ? i : "http://" + i }, n), i);
            }return r;
          }) : [];
        } };
    };t.exports = a();
  }, function (t, e) {
    "use strict";
    function r(t) {
      if (null == t) throw new TypeError("Object.assign cannot be called with null or undefined");return Object(t);
    }t.exports = Object.assign || function (t, e) {
      for (var n, o, u = r(t), a = 1; a < arguments.length; a++) {
        n = arguments[a], o = Object.keys(Object(n));for (var i = 0; i < o.length; i++) {
          u[o[i]] = n[o[i]];
        }
      }return u;
    };
  }, function (e, r) {
    e.exports = t;
  }]);
});

/***/ }),

/***/ "ABCk":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"react-tags":"react-tags__1sgoR","is-focused":"is-focused__3DKXl","react-tags__selected":"react-tags__selected__1KLbo","react-tags__selected-tag":"react-tags__selected-tag__2tfr2","react-tags__selected-tag-name":"react-tags__selected-tag-name__32wCH","react-tags__search":"react-tags__search__2vI7p","react-tags__suggestions":"react-tags__suggestions__3vjwO","is-active":"is-active__GCAGT","is-disabled":"is-disabled__1B5Xk"};

/***/ }),

/***/ "Asjh":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;

/***/ }),

/***/ "Fciz":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"textarea":"textarea__3xwbu"};

/***/ }),

/***/ "GlPB":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*
WHAT: SublimeText-like Fuzzy Search

USAGE:
  fuzzysort.single('fs', 'Fuzzy Search') // {score: -16}
  fuzzysort.single('test', 'test') // {score: 0}
  fuzzysort.single('doesnt exist', 'target') // null

  fuzzysort.go('mr', ['Monitor.cpp', 'MeshRenderer.cpp'])
  // [{score: -18, target: "MeshRenderer.cpp"}, {score: -6009, target: "Monitor.cpp"}]

  fuzzysort.highlight(fuzzysort.single('fs', 'Fuzzy Search'), '<b>', '</b>')
  // <b>F</b>uzzy <b>S</b>earch
*/

// UMD (Universal Module Definition) for fuzzysort
;(function (root, UMD) {
  if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (UMD),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else if (typeof module === 'object' && module.exports) module.exports = UMD();else root.fuzzysort = UMD();
})(this, function UMD() {
  function fuzzysortNew(instanceOptions) {

    var fuzzysort = {

      single: function single(search, target, options) {
        if (!search) return null;
        if (!isObj(search)) search = fuzzysort.getPreparedSearch(search);

        if (!target) return null;
        if (!isObj(target)) target = fuzzysort.getPrepared(target);

        var allowTypo = options && options.allowTypo !== undefined ? options.allowTypo : instanceOptions && instanceOptions.allowTypo !== undefined ? instanceOptions.allowTypo : true;
        var algorithm = allowTypo ? fuzzysort.algorithm : fuzzysort.algorithmNoTypo;
        return algorithm(search, target, search[0]);
        // var threshold = options && options.threshold || instanceOptions && instanceOptions.threshold || -9007199254740991
        // var result = algorithm(search, target, search[0])
        // if(result === null) return null
        // if(result.score < threshold) return null
        // return result
      },

      go: function go(search, targets, options) {
        if (!search) return noResults;
        search = fuzzysort.prepareSearch(search);
        var searchLowerCode = search[0];

        var threshold = options && options.threshold || instanceOptions && instanceOptions.threshold || -9007199254740991;
        var limit = options && options.limit || instanceOptions && instanceOptions.limit || 9007199254740991;
        var allowTypo = options && options.allowTypo !== undefined ? options.allowTypo : instanceOptions && instanceOptions.allowTypo !== undefined ? instanceOptions.allowTypo : true;
        var algorithm = allowTypo ? fuzzysort.algorithm : fuzzysort.algorithmNoTypo;
        var resultsLen = 0;var limitedCount = 0;
        var targetsLen = targets.length;

        // This code is copy/pasted 3 times for performance reasons [options.keys, options.key, no keys]

        // options.keys
        if (options && options.keys) {
          var scoreFn = options.scoreFn || defaultScoreFn;
          var keys = options.keys;
          var keysLen = keys.length;
          for (var i = targetsLen - 1; i >= 0; --i) {
            var obj = targets[i];
            var objResults = new Array(keysLen);
            for (var keyI = keysLen - 1; keyI >= 0; --keyI) {
              var key = keys[keyI];
              var target = getValue(obj, key);
              if (!target) {
                objResults[keyI] = null;continue;
              }
              if (!isObj(target)) target = fuzzysort.getPrepared(target);

              objResults[keyI] = algorithm(search, target, searchLowerCode);
            }
            objResults.obj = obj; // before scoreFn so scoreFn can use it
            var score = scoreFn(objResults);
            if (score === null) continue;
            if (score < threshold) continue;
            objResults.score = score;
            if (resultsLen < limit) {
              q.add(objResults);++resultsLen;
            } else {
              ++limitedCount;
              if (score > q.peek().score) q.replaceTop(objResults);
            }
          }

          // options.key
        } else if (options && options.key) {
          var key = options.key;
          for (var i = targetsLen - 1; i >= 0; --i) {
            var obj = targets[i];
            var target = getValue(obj, key);
            if (!target) continue;
            if (!isObj(target)) target = fuzzysort.getPrepared(target);

            var result = algorithm(search, target, searchLowerCode);
            if (result === null) continue;
            if (result.score < threshold) continue;

            // have to clone result so duplicate targets from different obj can each reference the correct obj
            result = { target: result.target, _targetLowerCodes: null, _nextBeginningIndexes: null, score: result.score, indexes: result.indexes, obj: obj // hidden

            };if (resultsLen < limit) {
              q.add(result);++resultsLen;
            } else {
              ++limitedCount;
              if (result.score > q.peek().score) q.replaceTop(result);
            }
          }

          // no keys
        } else {
          for (var i = targetsLen - 1; i >= 0; --i) {
            var target = targets[i];
            if (!target) continue;
            if (!isObj(target)) target = fuzzysort.getPrepared(target);

            var result = algorithm(search, target, searchLowerCode);
            if (result === null) continue;
            if (result.score < threshold) continue;
            if (resultsLen < limit) {
              q.add(result);++resultsLen;
            } else {
              ++limitedCount;
              if (result.score > q.peek().score) q.replaceTop(result);
            }
          }
        }

        if (resultsLen === 0) return noResults;
        var results = new Array(resultsLen);
        for (var i = resultsLen - 1; i >= 0; --i) {
          results[i] = q.poll();
        }results.total = resultsLen + limitedCount;
        return results;
      },

      goAsync: function goAsync(search, targets, options) {
        var canceled = false;
        var p = new Promise(function (resolve, reject) {
          if (!search) return resolve(noResults);
          search = fuzzysort.prepareSearch(search);
          var searchLowerCode = search[0];

          var q = fastpriorityqueue();
          var iCurrent = targets.length - 1;
          var threshold = options && options.threshold || instanceOptions && instanceOptions.threshold || -9007199254740991;
          var limit = options && options.limit || instanceOptions && instanceOptions.limit || 9007199254740991;
          var allowTypo = options && options.allowTypo !== undefined ? options.allowTypo : instanceOptions && instanceOptions.allowTypo !== undefined ? instanceOptions.allowTypo : true;
          var algorithm = allowTypo ? fuzzysort.algorithm : fuzzysort.algorithmNoTypo;
          var resultsLen = 0;var limitedCount = 0;
          function step() {
            if (canceled) return reject('canceled');

            var startMs = Date.now();

            // This code is copy/pasted 3 times for performance reasons [options.keys, options.key, no keys]

            // options.keys
            if (options && options.keys) {
              var scoreFn = options.scoreFn || defaultScoreFn;
              var keys = options.keys;
              var keysLen = keys.length;
              for (; iCurrent >= 0; --iCurrent) {
                var obj = targets[iCurrent];
                var objResults = new Array(keysLen);
                for (var keyI = keysLen - 1; keyI >= 0; --keyI) {
                  var key = keys[keyI];
                  var target = getValue(obj, key);
                  if (!target) {
                    objResults[keyI] = null;continue;
                  }
                  if (!isObj(target)) target = fuzzysort.getPrepared(target);

                  objResults[keyI] = algorithm(search, target, searchLowerCode);
                }
                objResults.obj = obj; // before scoreFn so scoreFn can use it
                var score = scoreFn(objResults);
                if (score === null) continue;
                if (score < threshold) continue;
                objResults.score = score;
                if (resultsLen < limit) {
                  q.add(objResults);++resultsLen;
                } else {
                  ++limitedCount;
                  if (score > q.peek().score) q.replaceTop(objResults);
                }

                if (iCurrent % 1000 /*itemsPerCheck*/ === 0) {
                  if (Date.now() - startMs >= 10 /*asyncInterval*/) {
                      isNode ? setImmediate(step) : setTimeout(step);
                      return;
                    }
                }
              }

              // options.key
            } else if (options && options.key) {
              var key = options.key;
              for (; iCurrent >= 0; --iCurrent) {
                var obj = targets[iCurrent];
                var target = getValue(obj, key);
                if (!target) continue;
                if (!isObj(target)) target = fuzzysort.getPrepared(target);

                var result = algorithm(search, target, searchLowerCode);
                if (result === null) continue;
                if (result.score < threshold) continue;

                // have to clone result so duplicate targets from different obj can each reference the correct obj
                result = { target: result.target, _targetLowerCodes: null, _nextBeginningIndexes: null, score: result.score, indexes: result.indexes, obj: obj // hidden

                };if (resultsLen < limit) {
                  q.add(result);++resultsLen;
                } else {
                  ++limitedCount;
                  if (result.score > q.peek().score) q.replaceTop(result);
                }

                if (iCurrent % 1000 /*itemsPerCheck*/ === 0) {
                  if (Date.now() - startMs >= 10 /*asyncInterval*/) {
                      isNode ? setImmediate(step) : setTimeout(step);
                      return;
                    }
                }
              }

              // no keys
            } else {
              for (; iCurrent >= 0; --iCurrent) {
                var target = targets[iCurrent];
                if (!target) continue;
                if (!isObj(target)) target = fuzzysort.getPrepared(target);

                var result = algorithm(search, target, searchLowerCode);
                if (result === null) continue;
                if (result.score < threshold) continue;
                if (resultsLen < limit) {
                  q.add(result);++resultsLen;
                } else {
                  ++limitedCount;
                  if (result.score > q.peek().score) q.replaceTop(result);
                }

                if (iCurrent % 1000 /*itemsPerCheck*/ === 0) {
                  if (Date.now() - startMs >= 10 /*asyncInterval*/) {
                      isNode ? setImmediate(step) : setTimeout(step);
                      return;
                    }
                }
              }
            }

            if (resultsLen === 0) return resolve(noResults);
            var results = new Array(resultsLen);
            for (var i = resultsLen - 1; i >= 0; --i) {
              results[i] = q.poll();
            }results.total = resultsLen + limitedCount;
            resolve(results);
          }

          isNode ? setImmediate(step) : step();
        });
        p.cancel = function () {
          canceled = true;
        };
        return p;
      },

      highlight: function highlight(result, hOpen, hClose) {
        if (result === null) return null;
        if (hOpen === undefined) hOpen = '<b>';
        if (hClose === undefined) hClose = '</b>';
        var highlighted = '';
        var matchesIndex = 0;
        var opened = false;
        var target = result.target;
        var targetLen = target.length;
        var matchesBest = result.indexes;
        for (var i = 0; i < targetLen; ++i) {
          var char = target[i];
          if (matchesBest[matchesIndex] === i) {
            ++matchesIndex;
            if (!opened) {
              opened = true;
              highlighted += hOpen;
            }

            if (matchesIndex === matchesBest.length) {
              highlighted += char + hClose + target.substr(i + 1);
              break;
            }
          } else {
            if (opened) {
              opened = false;
              highlighted += hClose;
            }
          }
          highlighted += char;
        }

        return highlighted;
      },

      prepare: function prepare(target) {
        if (!target) return;
        return { target: target, _targetLowerCodes: fuzzysort.prepareLowerCodes(target), _nextBeginningIndexes: null, score: null, indexes: null, obj: null // hidden
        };
      },
      prepareSlow: function prepareSlow(target) {
        if (!target) return;
        return { target: target, _targetLowerCodes: fuzzysort.prepareLowerCodes(target), _nextBeginningIndexes: fuzzysort.prepareNextBeginningIndexes(target), score: null, indexes: null, obj: null // hidden
        };
      },
      prepareSearch: function prepareSearch(search) {
        if (!search) return;
        return fuzzysort.prepareLowerCodes(search);
      },

      // Below this point is only internal code
      // Below this point is only internal code
      // Below this point is only internal code
      // Below this point is only internal code


      getPrepared: function getPrepared(target) {
        if (target.length > 999) return fuzzysort.prepare(target); // don't cache huge targets
        var targetPrepared = preparedCache.get(target);
        if (targetPrepared !== undefined) return targetPrepared;
        targetPrepared = fuzzysort.prepare(target);
        preparedCache.set(target, targetPrepared);
        return targetPrepared;
      },
      getPreparedSearch: function getPreparedSearch(search) {
        if (search.length > 999) return fuzzysort.prepareSearch(search); // don't cache huge searches
        var searchPrepared = preparedSearchCache.get(search);
        if (searchPrepared !== undefined) return searchPrepared;
        searchPrepared = fuzzysort.prepareSearch(search);
        preparedSearchCache.set(search, searchPrepared);
        return searchPrepared;
      },

      algorithm: function algorithm(searchLowerCodes, prepared, searchLowerCode) {
        var targetLowerCodes = prepared._targetLowerCodes;
        var searchLen = searchLowerCodes.length;
        var targetLen = targetLowerCodes.length;
        var searchI = 0; // where we at
        var targetI = 0; // where you at
        var typoSimpleI = 0;
        var matchesSimpleLen = 0;

        // very basic fuzzy match; to remove non-matching targets ASAP!
        // walk through target. find sequential matches.
        // if all chars aren't found then exit
        for (;;) {
          var isMatch = searchLowerCode === targetLowerCodes[targetI];
          if (isMatch) {
            matchesSimple[matchesSimpleLen++] = targetI;
            ++searchI;if (searchI === searchLen) break;
            searchLowerCode = searchLowerCodes[typoSimpleI === 0 ? searchI : typoSimpleI === searchI ? searchI + 1 : typoSimpleI === searchI - 1 ? searchI - 1 : searchI];
          }

          ++targetI;if (targetI >= targetLen) {
            // Failed to find searchI
            // Check for typo or exit
            // we go as far as possible before trying to transpose
            // then we transpose backwards until we reach the beginning
            for (;;) {
              if (searchI <= 1) return null; // not allowed to transpose first char
              if (typoSimpleI === 0) {
                // we haven't tried to transpose yet
                --searchI;
                var searchLowerCodeNew = searchLowerCodes[searchI];
                if (searchLowerCode === searchLowerCodeNew) continue; // doesn't make sense to transpose a repeat char
                typoSimpleI = searchI;
              } else {
                if (typoSimpleI === 1) return null; // reached the end of the line for transposing
                --typoSimpleI;
                searchI = typoSimpleI;
                searchLowerCode = searchLowerCodes[searchI + 1];
                var searchLowerCodeNew = searchLowerCodes[searchI];
                if (searchLowerCode === searchLowerCodeNew) continue; // doesn't make sense to transpose a repeat char
              }
              matchesSimpleLen = searchI;
              targetI = matchesSimple[matchesSimpleLen - 1] + 1;
              break;
            }
          }
        }

        var searchI = 0;
        var typoStrictI = 0;
        var successStrict = false;
        var matchesStrictLen = 0;

        var nextBeginningIndexes = prepared._nextBeginningIndexes;
        if (nextBeginningIndexes === null) nextBeginningIndexes = prepared._nextBeginningIndexes = fuzzysort.prepareNextBeginningIndexes(prepared.target);
        var firstPossibleI = targetI = matchesSimple[0] === 0 ? 0 : nextBeginningIndexes[matchesSimple[0] - 1];

        // Our target string successfully matched all characters in sequence!
        // Let's try a more advanced and strict test to improve the score
        // only count it as a match if it's consecutive or a beginning character!
        if (targetI !== targetLen) for (;;) {
          if (targetI >= targetLen) {
            // We failed to find a good spot for this search char, go back to the previous search char and force it forward
            if (searchI <= 0) {
              // We failed to push chars forward for a better match
              // transpose, starting from the beginning
              ++typoStrictI;if (typoStrictI > searchLen - 2) break;
              if (searchLowerCodes[typoStrictI] === searchLowerCodes[typoStrictI + 1]) continue; // doesn't make sense to transpose a repeat char
              targetI = firstPossibleI;
              continue;
            }

            --searchI;
            var lastMatch = matchesStrict[--matchesStrictLen];
            targetI = nextBeginningIndexes[lastMatch];
          } else {
            var isMatch = searchLowerCodes[typoStrictI === 0 ? searchI : typoStrictI === searchI ? searchI + 1 : typoStrictI === searchI - 1 ? searchI - 1 : searchI] === targetLowerCodes[targetI];
            if (isMatch) {
              matchesStrict[matchesStrictLen++] = targetI;
              ++searchI;if (searchI === searchLen) {
                successStrict = true;break;
              }
              ++targetI;
            } else {
              targetI = nextBeginningIndexes[targetI];
            }
          }
        }

        {
          // tally up the score & keep track of matches for highlighting later
          if (successStrict) {
            var matchesBest = matchesStrict;var matchesBestLen = matchesStrictLen;
          } else {
            var matchesBest = matchesSimple;var matchesBestLen = matchesSimpleLen;
          }
          var score = 0;
          var lastTargetI = -1;
          for (var i = 0; i < searchLen; ++i) {
            var targetI = matchesBest[i];
            // score only goes down if they're not consecutive
            if (lastTargetI !== targetI - 1) score -= targetI;
            lastTargetI = targetI;
          }
          if (!successStrict) {
            score *= 1000;
            if (typoSimpleI !== 0) score += -20; /*typoPenalty*/
          } else {
            if (typoStrictI !== 0) score += -20; /*typoPenalty*/
          }
          score -= targetLen - searchLen;
          prepared.score = score;
          prepared.indexes = new Array(matchesBestLen);for (var i = matchesBestLen - 1; i >= 0; --i) {
            prepared.indexes[i] = matchesBest[i];
          }return prepared;
        }
      },

      algorithmNoTypo: function algorithmNoTypo(searchLowerCodes, prepared, searchLowerCode) {
        var targetLowerCodes = prepared._targetLowerCodes;
        var searchLen = searchLowerCodes.length;
        var targetLen = targetLowerCodes.length;
        var searchI = 0; // where we at
        var targetI = 0; // where you at
        var matchesSimpleLen = 0;

        // very basic fuzzy match; to remove non-matching targets ASAP!
        // walk through target. find sequential matches.
        // if all chars aren't found then exit
        for (;;) {
          var isMatch = searchLowerCode === targetLowerCodes[targetI];
          if (isMatch) {
            matchesSimple[matchesSimpleLen++] = targetI;
            ++searchI;if (searchI === searchLen) break;
            searchLowerCode = searchLowerCodes[searchI];
          }
          ++targetI;if (targetI >= targetLen) return null; // Failed to find searchI
        }

        var searchI = 0;
        var successStrict = false;
        var matchesStrictLen = 0;

        var nextBeginningIndexes = prepared._nextBeginningIndexes;
        if (nextBeginningIndexes === null) nextBeginningIndexes = prepared._nextBeginningIndexes = fuzzysort.prepareNextBeginningIndexes(prepared.target);
        var firstPossibleI = targetI = matchesSimple[0] === 0 ? 0 : nextBeginningIndexes[matchesSimple[0] - 1];

        // Our target string successfully matched all characters in sequence!
        // Let's try a more advanced and strict test to improve the score
        // only count it as a match if it's consecutive or a beginning character!
        if (targetI !== targetLen) for (;;) {
          if (targetI >= targetLen) {
            // We failed to find a good spot for this search char, go back to the previous search char and force it forward
            if (searchI <= 0) break; // We failed to push chars forward for a better match

            --searchI;
            var lastMatch = matchesStrict[--matchesStrictLen];
            targetI = nextBeginningIndexes[lastMatch];
          } else {
            var isMatch = searchLowerCodes[searchI] === targetLowerCodes[targetI];
            if (isMatch) {
              matchesStrict[matchesStrictLen++] = targetI;
              ++searchI;if (searchI === searchLen) {
                successStrict = true;break;
              }
              ++targetI;
            } else {
              targetI = nextBeginningIndexes[targetI];
            }
          }
        }

        {
          // tally up the score & keep track of matches for highlighting later
          if (successStrict) {
            var matchesBest = matchesStrict;var matchesBestLen = matchesStrictLen;
          } else {
            var matchesBest = matchesSimple;var matchesBestLen = matchesSimpleLen;
          }
          var score = 0;
          var lastTargetI = -1;
          for (var i = 0; i < searchLen; ++i) {
            var targetI = matchesBest[i];
            // score only goes down if they're not consecutive
            if (lastTargetI !== targetI - 1) score -= targetI;
            lastTargetI = targetI;
          }
          if (!successStrict) score *= 1000;
          score -= targetLen - searchLen;
          prepared.score = score;
          prepared.indexes = new Array(matchesBestLen);for (var i = matchesBestLen - 1; i >= 0; --i) {
            prepared.indexes[i] = matchesBest[i];
          }return prepared;
        }
      },

      prepareLowerCodes: function prepareLowerCodes(str) {
        var strLen = str.length;
        var lowerCodes = []; // new Array(strLen)    sparse array is too slow
        var lower = str.toLowerCase();
        for (var i = 0; i < strLen; ++i) {
          lowerCodes[i] = lower.charCodeAt(i);
        }return lowerCodes;
      },
      prepareBeginningIndexes: function prepareBeginningIndexes(target) {
        var targetLen = target.length;
        var beginningIndexes = [];var beginningIndexesLen = 0;
        var wasUpper = false;
        var wasAlphanum = false;
        for (var i = 0; i < targetLen; ++i) {
          var targetCode = target.charCodeAt(i);
          var isUpper = targetCode >= 65 && targetCode <= 90;
          var isAlphanum = isUpper || targetCode >= 97 && targetCode <= 122 || targetCode >= 48 && targetCode <= 57;
          var isBeginning = isUpper && !wasUpper || !wasAlphanum || !isAlphanum;
          wasUpper = isUpper;
          wasAlphanum = isAlphanum;
          if (isBeginning) beginningIndexes[beginningIndexesLen++] = i;
        }
        return beginningIndexes;
      },
      prepareNextBeginningIndexes: function prepareNextBeginningIndexes(target) {
        var targetLen = target.length;
        var beginningIndexes = fuzzysort.prepareBeginningIndexes(target);
        var nextBeginningIndexes = []; // new Array(targetLen)     sparse array is too slow
        var lastIsBeginning = beginningIndexes[0];
        var lastIsBeginningI = 0;
        for (var i = 0; i < targetLen; ++i) {
          if (lastIsBeginning > i) {
            nextBeginningIndexes[i] = lastIsBeginning;
          } else {
            lastIsBeginning = beginningIndexes[++lastIsBeginningI];
            nextBeginningIndexes[i] = lastIsBeginning === undefined ? targetLen : lastIsBeginning;
          }
        }
        return nextBeginningIndexes;
      },

      cleanup: cleanup,
      new: fuzzysortNew
    };
    return fuzzysort;
  } // fuzzysortNew

  // This stuff is outside fuzzysortNew, because it's shared with instances of fuzzysort.new()
  var isNode = "function" !== 'undefined' && typeof window === 'undefined';
  // var MAX_INT = Number.MAX_SAFE_INTEGER
  // var MIN_INT = Number.MIN_VALUE
  var preparedCache = new Map();
  var preparedSearchCache = new Map();
  var noResults = [];noResults.total = 0;
  var matchesSimple = [];var matchesStrict = [];
  function cleanup() {
    preparedCache.clear();preparedSearchCache.clear();matchesSimple = [];matchesStrict = [];
  }
  function defaultScoreFn(a) {
    var max = -9007199254740991;
    for (var i = a.length - 1; i >= 0; --i) {
      var result = a[i];if (result === null) continue;
      var score = result.score;
      if (score > max) max = score;
    }
    if (max === -9007199254740991) return null;
    return max;
  }

  // prop = 'key'              2.5ms optimized for this case, seems to be about as fast as direct obj[prop]
  // prop = 'key1.key2'        10ms
  // prop = ['key1', 'key2']   27ms
  function getValue(obj, prop) {
    var tmp = obj[prop];if (tmp !== undefined) return tmp;
    var segs = prop;
    if (!Array.isArray(prop)) segs = prop.split('.');
    var len = segs.length;
    var i = -1;
    while (obj && ++i < len) {
      obj = obj[segs[i]];
    }return obj;
  }

  function isObj(x) {
    return typeof x === 'object';
  } // faster as a function

  // Hacked version of https://github.com/lemire/FastPriorityQueue.js
  var fastpriorityqueue = function fastpriorityqueue() {
    var r = [],
        o = 0,
        e = {};function n() {
      for (var e = 0, n = r[e], c = 1; c < o;) {
        var f = c + 1;e = c, f < o && r[f].score < r[c].score && (e = f), r[e - 1 >> 1] = r[e], c = 1 + (e << 1);
      }for (var a = e - 1 >> 1; e > 0 && n.score < r[a].score; a = (e = a) - 1 >> 1) {
        r[e] = r[a];
      }r[e] = n;
    }return e.add = function (e) {
      var n = o;r[o++] = e;for (var c = n - 1 >> 1; n > 0 && e.score < r[c].score; c = (n = c) - 1 >> 1) {
        r[n] = r[c];
      }r[n] = e;
    }, e.poll = function () {
      if (0 !== o) {
        var e = r[0];return r[0] = r[--o], n(), e;
      }
    }, e.peek = function (e) {
      if (0 !== o) return r[0];
    }, e.replaceTop = function (o) {
      r[0] = o, n();
    }, e;
  };
  var q = fastpriorityqueue(); // reuse this, except for async, it needs to make its own

  return fuzzysortNew();
}); // UMD

// TODO: (performance) wasm version!?

// TODO: (performance) layout memory in an optimal way to go fast by avoiding cache misses

// TODO: (performance) preparedCache is a memory leak

// TODO: (like sublime) backslash === forwardslash

// TODO: (performance) i have no idea how well optizmied the allowing typos algorithm is

/***/ }),

/***/ "H9/r":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"wrapper":"wrapper__ZvzR1","videoPlayer":"videoPlayer__3mHME","activeMetaContainer":"activeMetaContainer__11_8X"};

/***/ }),

/***/ "HJJD":
/***/ (function(module, exports) {

module.exports = function (module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function () {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function get() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function get() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};

/***/ }),

/***/ "J4GW":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"searchForm":"searchForm__11aN7","searchField":"searchField__3ED4k","resetButton":"resetButton__2KlfD"};

/***/ }),

/***/ "JkW7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./style/index.scss
var style = __webpack_require__("yY49");
var style_default = /*#__PURE__*/__webpack_require__.n(style);

// EXTERNAL MODULE: ../node_modules/preact/dist/preact.min.js
var preact_min = __webpack_require__("KM04");
var preact_min_default = /*#__PURE__*/__webpack_require__.n(preact_min);

// EXTERNAL MODULE: ../node_modules/preact-router/dist/preact-router.es.js
var preact_router_es = __webpack_require__("/QC5");

// EXTERNAL MODULE: ./routes/home/style.scss
var home_style = __webpack_require__("Lglr");
var home_style_default = /*#__PURE__*/__webpack_require__.n(home_style);

// EXTERNAL MODULE: ../node_modules/preact-router/match.js
var match = __webpack_require__("sw5u");
var match_default = /*#__PURE__*/__webpack_require__.n(match);

// EXTERNAL MODULE: ./components/videoLink/style.scss
var videoLink_style = __webpack_require__("uDjN");
var videoLink_style_default = /*#__PURE__*/__webpack_require__.n(videoLink_style);

// EXTERNAL MODULE: ../node_modules/preact-compat/dist/preact-compat.es.js
var preact_compat_es = __webpack_require__("eW0v");

// EXTERNAL MODULE: ../node_modules/prop-types/index.js
var prop_types = __webpack_require__("5D9O");
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);

// CONCATENATED MODULE: ../node_modules/react-popper/lib/Manager.js
var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

function _objectWithoutProperties(obj, keys) {
  var target = {};for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
  }return target;
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}




var Manager_Manager = function (_Component) {
  _inherits(Manager, _Component);

  function Manager() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Manager);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Manager.__proto__ || Object.getPrototypeOf(Manager)).call.apply(_ref, [this].concat(args))), _this), _this._setTargetNode = function (node) {
      _this._targetNode = node;
    }, _this._getTargetNode = function () {
      return _this._targetNode;
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Manager, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        popperManager: {
          setTargetNode: this._setTargetNode,
          getTargetNode: this._getTargetNode
        }
      };
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          tag = _props.tag,
          children = _props.children,
          restProps = _objectWithoutProperties(_props, ['tag', 'children']);

      if (tag !== false) {
        return Object(preact_compat_es["createElement"])(tag, restProps, children);
      } else {
        return children;
      }
    }
  }]);

  return Manager;
}(preact_compat_es["Component"]);

Manager_Manager.childContextTypes = {
  popperManager: prop_types_default.a.object.isRequired
};
Manager_Manager.propTypes = {
  tag: prop_types_default.a.oneOfType([prop_types_default.a.string, prop_types_default.a.bool]),
  children: prop_types_default.a.oneOfType([prop_types_default.a.node, prop_types_default.a.func])
};
Manager_Manager.defaultProps = {
  tag: 'div'
};

/* harmony default export */ var lib_Manager = (Manager_Manager);
// CONCATENATED MODULE: ../node_modules/react-popper/lib/Target.js
var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};

function Target__objectWithoutProperties(obj, keys) {
  var target = {};for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
  }return target;
}




var Target_Target = function Target(props, context) {
  var _props$component = props.component,
      component = _props$component === undefined ? 'div' : _props$component,
      innerRef = props.innerRef,
      children = props.children,
      restProps = Target__objectWithoutProperties(props, ['component', 'innerRef', 'children']);

  var popperManager = context.popperManager;

  var targetRef = function targetRef(node) {
    popperManager.setTargetNode(node);
    if (typeof innerRef === 'function') {
      innerRef(node);
    }
  };

  if (typeof children === 'function') {
    var targetProps = { ref: targetRef };
    return children({ targetProps: targetProps, restProps: restProps });
  }

  var componentProps = _extends({}, restProps);

  if (typeof component === 'string') {
    componentProps.ref = targetRef;
  } else {
    componentProps.innerRef = targetRef;
  }

  return Object(preact_compat_es["createElement"])(component, componentProps, children);
};

Target_Target.contextTypes = {
  popperManager: prop_types_default.a.object.isRequired
};

Target_Target.propTypes = {
  component: prop_types_default.a.oneOfType([prop_types_default.a.node, prop_types_default.a.func]),
  innerRef: prop_types_default.a.func,
  children: prop_types_default.a.oneOfType([prop_types_default.a.node, prop_types_default.a.func])
};

/* harmony default export */ var lib_Target = (Target_Target);
// CONCATENATED MODULE: ../node_modules/popper.js/dist/esm/popper.js
/**!
 * @fileOverview Kickass library to create and place poppers near their reference elements.
 * @version 1.14.3
 * @license
 * Copyright (c) 2016 Federico Zivolo and contributors
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
var isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined';

var longerTimeoutBrowsers = ['Edge', 'Trident', 'Firefox'];
var timeoutDuration = 0;
for (var popper_i = 0; popper_i < longerTimeoutBrowsers.length; popper_i += 1) {
  if (isBrowser && navigator.userAgent.indexOf(longerTimeoutBrowsers[popper_i]) >= 0) {
    timeoutDuration = 1;
    break;
  }
}

function microtaskDebounce(fn) {
  var called = false;
  return function () {
    if (called) {
      return;
    }
    called = true;
    window.Promise.resolve().then(function () {
      called = false;
      fn();
    });
  };
}

function taskDebounce(fn) {
  var scheduled = false;
  return function () {
    if (!scheduled) {
      scheduled = true;
      setTimeout(function () {
        scheduled = false;
        fn();
      }, timeoutDuration);
    }
  };
}

var supportsMicroTasks = isBrowser && window.Promise;

/**
* Create a debounced version of a method, that's asynchronously deferred
* but called in the minimum time possible.
*
* @method
* @memberof Popper.Utils
* @argument {Function} fn
* @returns {Function}
*/
var debounce = supportsMicroTasks ? microtaskDebounce : taskDebounce;

/**
 * Check if the given variable is a function
 * @method
 * @memberof Popper.Utils
 * @argument {Any} functionToCheck - variable to check
 * @returns {Boolean} answer to: is a function?
 */
function isFunction(functionToCheck) {
  var getType = {};
  return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
}

/**
 * Get CSS computed property of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Eement} element
 * @argument {String} property
 */
function getStyleComputedProperty(element, property) {
  if (element.nodeType !== 1) {
    return [];
  }
  // NOTE: 1 DOM access here
  var css = getComputedStyle(element, null);
  return property ? css[property] : css;
}

/**
 * Returns the parentNode or the host of the element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} parent
 */
function getParentNode(element) {
  if (element.nodeName === 'HTML') {
    return element;
  }
  return element.parentNode || element.host;
}

/**
 * Returns the scrolling parent of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} scroll parent
 */
function getScrollParent(element) {
  // Return body, `getScroll` will take care to get the correct `scrollTop` from it
  if (!element) {
    return document.body;
  }

  switch (element.nodeName) {
    case 'HTML':
    case 'BODY':
      return element.ownerDocument.body;
    case '#document':
      return element.body;
  }

  // Firefox want us to check `-x` and `-y` variations as well

  var _getStyleComputedProp = getStyleComputedProperty(element),
      overflow = _getStyleComputedProp.overflow,
      overflowX = _getStyleComputedProp.overflowX,
      overflowY = _getStyleComputedProp.overflowY;

  if (/(auto|scroll|overlay)/.test(overflow + overflowY + overflowX)) {
    return element;
  }

  return getScrollParent(getParentNode(element));
}

var isIE11 = isBrowser && !!(window.MSInputMethodContext && document.documentMode);
var isIE10 = isBrowser && /MSIE 10/.test(navigator.userAgent);

/**
 * Determines if the browser is Internet Explorer
 * @method
 * @memberof Popper.Utils
 * @param {Number} version to check
 * @returns {Boolean} isIE
 */
function isIE(version) {
  if (version === 11) {
    return isIE11;
  }
  if (version === 10) {
    return isIE10;
  }
  return isIE11 || isIE10;
}

/**
 * Returns the offset parent of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} offset parent
 */
function getOffsetParent(element) {
  if (!element) {
    return document.documentElement;
  }

  var noOffsetParent = isIE(10) ? document.body : null;

  // NOTE: 1 DOM access here
  var offsetParent = element.offsetParent;
  // Skip hidden elements which don't have an offsetParent
  while (offsetParent === noOffsetParent && element.nextElementSibling) {
    offsetParent = (element = element.nextElementSibling).offsetParent;
  }

  var nodeName = offsetParent && offsetParent.nodeName;

  if (!nodeName || nodeName === 'BODY' || nodeName === 'HTML') {
    return element ? element.ownerDocument.documentElement : document.documentElement;
  }

  // .offsetParent will return the closest TD or TABLE in case
  // no offsetParent is present, I hate this job...
  if (['TD', 'TABLE'].indexOf(offsetParent.nodeName) !== -1 && getStyleComputedProperty(offsetParent, 'position') === 'static') {
    return getOffsetParent(offsetParent);
  }

  return offsetParent;
}

function isOffsetContainer(element) {
  var nodeName = element.nodeName;

  if (nodeName === 'BODY') {
    return false;
  }
  return nodeName === 'HTML' || getOffsetParent(element.firstElementChild) === element;
}

/**
 * Finds the root node (document, shadowDOM root) of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} node
 * @returns {Element} root node
 */
function getRoot(node) {
  if (node.parentNode !== null) {
    return getRoot(node.parentNode);
  }

  return node;
}

/**
 * Finds the offset parent common to the two provided nodes
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element1
 * @argument {Element} element2
 * @returns {Element} common offset parent
 */
function findCommonOffsetParent(element1, element2) {
  // This check is needed to avoid errors in case one of the elements isn't defined for any reason
  if (!element1 || !element1.nodeType || !element2 || !element2.nodeType) {
    return document.documentElement;
  }

  // Here we make sure to give as "start" the element that comes first in the DOM
  var order = element1.compareDocumentPosition(element2) & Node.DOCUMENT_POSITION_FOLLOWING;
  var start = order ? element1 : element2;
  var end = order ? element2 : element1;

  // Get common ancestor container
  var range = document.createRange();
  range.setStart(start, 0);
  range.setEnd(end, 0);
  var commonAncestorContainer = range.commonAncestorContainer;

  // Both nodes are inside #document

  if (element1 !== commonAncestorContainer && element2 !== commonAncestorContainer || start.contains(end)) {
    if (isOffsetContainer(commonAncestorContainer)) {
      return commonAncestorContainer;
    }

    return getOffsetParent(commonAncestorContainer);
  }

  // one of the nodes is inside shadowDOM, find which one
  var element1root = getRoot(element1);
  if (element1root.host) {
    return findCommonOffsetParent(element1root.host, element2);
  } else {
    return findCommonOffsetParent(element1, getRoot(element2).host);
  }
}

/**
 * Gets the scroll value of the given element in the given side (top and left)
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @argument {String} side `top` or `left`
 * @returns {number} amount of scrolled pixels
 */
function getScroll(element) {
  var side = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'top';

  var upperSide = side === 'top' ? 'scrollTop' : 'scrollLeft';
  var nodeName = element.nodeName;

  if (nodeName === 'BODY' || nodeName === 'HTML') {
    var html = element.ownerDocument.documentElement;
    var scrollingElement = element.ownerDocument.scrollingElement || html;
    return scrollingElement[upperSide];
  }

  return element[upperSide];
}

/*
 * Sum or subtract the element scroll values (left and top) from a given rect object
 * @method
 * @memberof Popper.Utils
 * @param {Object} rect - Rect object you want to change
 * @param {HTMLElement} element - The element from the function reads the scroll values
 * @param {Boolean} subtract - set to true if you want to subtract the scroll values
 * @return {Object} rect - The modifier rect object
 */
function includeScroll(rect, element) {
  var subtract = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  var scrollTop = getScroll(element, 'top');
  var scrollLeft = getScroll(element, 'left');
  var modifier = subtract ? -1 : 1;
  rect.top += scrollTop * modifier;
  rect.bottom += scrollTop * modifier;
  rect.left += scrollLeft * modifier;
  rect.right += scrollLeft * modifier;
  return rect;
}

/*
 * Helper to detect borders of a given element
 * @method
 * @memberof Popper.Utils
 * @param {CSSStyleDeclaration} styles
 * Result of `getStyleComputedProperty` on the given element
 * @param {String} axis - `x` or `y`
 * @return {number} borders - The borders size of the given axis
 */

function getBordersSize(styles, axis) {
  var sideA = axis === 'x' ? 'Left' : 'Top';
  var sideB = sideA === 'Left' ? 'Right' : 'Bottom';

  return parseFloat(styles['border' + sideA + 'Width'], 10) + parseFloat(styles['border' + sideB + 'Width'], 10);
}

function getSize(axis, body, html, computedStyle) {
  return Math.max(body['offset' + axis], body['scroll' + axis], html['client' + axis], html['offset' + axis], html['scroll' + axis], isIE(10) ? html['offset' + axis] + computedStyle['margin' + (axis === 'Height' ? 'Top' : 'Left')] + computedStyle['margin' + (axis === 'Height' ? 'Bottom' : 'Right')] : 0);
}

function getWindowSizes() {
  var body = document.body;
  var html = document.documentElement;
  var computedStyle = isIE(10) && getComputedStyle(html);

  return {
    height: getSize('Height', body, html, computedStyle),
    width: getSize('Width', body, html, computedStyle)
  };
}

var classCallCheck = function classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var defineProperty = function defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

var popper__extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

/**
 * Given element offsets, generate an output similar to getBoundingClientRect
 * @method
 * @memberof Popper.Utils
 * @argument {Object} offsets
 * @returns {Object} ClientRect like output
 */
function getClientRect(offsets) {
  return popper__extends({}, offsets, {
    right: offsets.left + offsets.width,
    bottom: offsets.top + offsets.height
  });
}

/**
 * Get bounding client rect of given element
 * @method
 * @memberof Popper.Utils
 * @param {HTMLElement} element
 * @return {Object} client rect
 */
function getBoundingClientRect(element) {
  var rect = {};

  // IE10 10 FIX: Please, don't ask, the element isn't
  // considered in DOM in some circumstances...
  // This isn't reproducible in IE10 compatibility mode of IE11
  try {
    if (isIE(10)) {
      rect = element.getBoundingClientRect();
      var scrollTop = getScroll(element, 'top');
      var scrollLeft = getScroll(element, 'left');
      rect.top += scrollTop;
      rect.left += scrollLeft;
      rect.bottom += scrollTop;
      rect.right += scrollLeft;
    } else {
      rect = element.getBoundingClientRect();
    }
  } catch (e) {}

  var result = {
    left: rect.left,
    top: rect.top,
    width: rect.right - rect.left,
    height: rect.bottom - rect.top
  };

  // subtract scrollbar size from sizes
  var sizes = element.nodeName === 'HTML' ? getWindowSizes() : {};
  var width = sizes.width || element.clientWidth || result.right - result.left;
  var height = sizes.height || element.clientHeight || result.bottom - result.top;

  var horizScrollbar = element.offsetWidth - width;
  var vertScrollbar = element.offsetHeight - height;

  // if an hypothetical scrollbar is detected, we must be sure it's not a `border`
  // we make this check conditional for performance reasons
  if (horizScrollbar || vertScrollbar) {
    var styles = getStyleComputedProperty(element);
    horizScrollbar -= getBordersSize(styles, 'x');
    vertScrollbar -= getBordersSize(styles, 'y');

    result.width -= horizScrollbar;
    result.height -= vertScrollbar;
  }

  return getClientRect(result);
}

function getOffsetRectRelativeToArbitraryNode(children, parent) {
  var fixedPosition = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  var isIE10 = isIE(10);
  var isHTML = parent.nodeName === 'HTML';
  var childrenRect = getBoundingClientRect(children);
  var parentRect = getBoundingClientRect(parent);
  var scrollParent = getScrollParent(children);

  var styles = getStyleComputedProperty(parent);
  var borderTopWidth = parseFloat(styles.borderTopWidth, 10);
  var borderLeftWidth = parseFloat(styles.borderLeftWidth, 10);

  // In cases where the parent is fixed, we must ignore negative scroll in offset calc
  if (fixedPosition && parent.nodeName === 'HTML') {
    parentRect.top = Math.max(parentRect.top, 0);
    parentRect.left = Math.max(parentRect.left, 0);
  }
  var offsets = getClientRect({
    top: childrenRect.top - parentRect.top - borderTopWidth,
    left: childrenRect.left - parentRect.left - borderLeftWidth,
    width: childrenRect.width,
    height: childrenRect.height
  });
  offsets.marginTop = 0;
  offsets.marginLeft = 0;

  // Subtract margins of documentElement in case it's being used as parent
  // we do this only on HTML because it's the only element that behaves
  // differently when margins are applied to it. The margins are included in
  // the box of the documentElement, in the other cases not.
  if (!isIE10 && isHTML) {
    var marginTop = parseFloat(styles.marginTop, 10);
    var marginLeft = parseFloat(styles.marginLeft, 10);

    offsets.top -= borderTopWidth - marginTop;
    offsets.bottom -= borderTopWidth - marginTop;
    offsets.left -= borderLeftWidth - marginLeft;
    offsets.right -= borderLeftWidth - marginLeft;

    // Attach marginTop and marginLeft because in some circumstances we may need them
    offsets.marginTop = marginTop;
    offsets.marginLeft = marginLeft;
  }

  if (isIE10 && !fixedPosition ? parent.contains(scrollParent) : parent === scrollParent && scrollParent.nodeName !== 'BODY') {
    offsets = includeScroll(offsets, parent);
  }

  return offsets;
}

function getViewportOffsetRectRelativeToArtbitraryNode(element) {
  var excludeScroll = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  var html = element.ownerDocument.documentElement;
  var relativeOffset = getOffsetRectRelativeToArbitraryNode(element, html);
  var width = Math.max(html.clientWidth, window.innerWidth || 0);
  var height = Math.max(html.clientHeight, window.innerHeight || 0);

  var scrollTop = !excludeScroll ? getScroll(html) : 0;
  var scrollLeft = !excludeScroll ? getScroll(html, 'left') : 0;

  var offset = {
    top: scrollTop - relativeOffset.top + relativeOffset.marginTop,
    left: scrollLeft - relativeOffset.left + relativeOffset.marginLeft,
    width: width,
    height: height
  };

  return getClientRect(offset);
}

/**
 * Check if the given element is fixed or is inside a fixed parent
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @argument {Element} customContainer
 * @returns {Boolean} answer to "isFixed?"
 */
function isFixed(element) {
  var nodeName = element.nodeName;
  if (nodeName === 'BODY' || nodeName === 'HTML') {
    return false;
  }
  if (getStyleComputedProperty(element, 'position') === 'fixed') {
    return true;
  }
  return isFixed(getParentNode(element));
}

/**
 * Finds the first parent of an element that has a transformed property defined
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} first transformed parent or documentElement
 */

function getFixedPositionOffsetParent(element) {
  // This check is needed to avoid errors in case one of the elements isn't defined for any reason
  if (!element || !element.parentElement || isIE()) {
    return document.documentElement;
  }
  var el = element.parentElement;
  while (el && getStyleComputedProperty(el, 'transform') === 'none') {
    el = el.parentElement;
  }
  return el || document.documentElement;
}

/**
 * Computed the boundaries limits and return them
 * @method
 * @memberof Popper.Utils
 * @param {HTMLElement} popper
 * @param {HTMLElement} reference
 * @param {number} padding
 * @param {HTMLElement} boundariesElement - Element used to define the boundaries
 * @param {Boolean} fixedPosition - Is in fixed position mode
 * @returns {Object} Coordinates of the boundaries
 */
function getBoundaries(popper, reference, padding, boundariesElement) {
  var fixedPosition = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;

  // NOTE: 1 DOM access here

  var boundaries = { top: 0, left: 0 };
  var offsetParent = fixedPosition ? getFixedPositionOffsetParent(popper) : findCommonOffsetParent(popper, reference);

  // Handle viewport case
  if (boundariesElement === 'viewport') {
    boundaries = getViewportOffsetRectRelativeToArtbitraryNode(offsetParent, fixedPosition);
  } else {
    // Handle other cases based on DOM element used as boundaries
    var boundariesNode = void 0;
    if (boundariesElement === 'scrollParent') {
      boundariesNode = getScrollParent(getParentNode(reference));
      if (boundariesNode.nodeName === 'BODY') {
        boundariesNode = popper.ownerDocument.documentElement;
      }
    } else if (boundariesElement === 'window') {
      boundariesNode = popper.ownerDocument.documentElement;
    } else {
      boundariesNode = boundariesElement;
    }

    var offsets = getOffsetRectRelativeToArbitraryNode(boundariesNode, offsetParent, fixedPosition);

    // In case of HTML, we need a different computation
    if (boundariesNode.nodeName === 'HTML' && !isFixed(offsetParent)) {
      var _getWindowSizes = getWindowSizes(),
          height = _getWindowSizes.height,
          width = _getWindowSizes.width;

      boundaries.top += offsets.top - offsets.marginTop;
      boundaries.bottom = height + offsets.top;
      boundaries.left += offsets.left - offsets.marginLeft;
      boundaries.right = width + offsets.left;
    } else {
      // for all the other DOM elements, this one is good
      boundaries = offsets;
    }
  }

  // Add paddings
  boundaries.left += padding;
  boundaries.top += padding;
  boundaries.right -= padding;
  boundaries.bottom -= padding;

  return boundaries;
}

function getArea(_ref) {
  var width = _ref.width,
      height = _ref.height;

  return width * height;
}

/**
 * Utility used to transform the `auto` placement to the placement with more
 * available space.
 * @method
 * @memberof Popper.Utils
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function computeAutoPlacement(placement, refRect, popper, reference, boundariesElement) {
  var padding = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;

  if (placement.indexOf('auto') === -1) {
    return placement;
  }

  var boundaries = getBoundaries(popper, reference, padding, boundariesElement);

  var rects = {
    top: {
      width: boundaries.width,
      height: refRect.top - boundaries.top
    },
    right: {
      width: boundaries.right - refRect.right,
      height: boundaries.height
    },
    bottom: {
      width: boundaries.width,
      height: boundaries.bottom - refRect.bottom
    },
    left: {
      width: refRect.left - boundaries.left,
      height: boundaries.height
    }
  };

  var sortedAreas = Object.keys(rects).map(function (key) {
    return popper__extends({
      key: key
    }, rects[key], {
      area: getArea(rects[key])
    });
  }).sort(function (a, b) {
    return b.area - a.area;
  });

  var filteredAreas = sortedAreas.filter(function (_ref2) {
    var width = _ref2.width,
        height = _ref2.height;
    return width >= popper.clientWidth && height >= popper.clientHeight;
  });

  var computedPlacement = filteredAreas.length > 0 ? filteredAreas[0].key : sortedAreas[0].key;

  var variation = placement.split('-')[1];

  return computedPlacement + (variation ? '-' + variation : '');
}

/**
 * Get offsets to the reference element
 * @method
 * @memberof Popper.Utils
 * @param {Object} state
 * @param {Element} popper - the popper element
 * @param {Element} reference - the reference element (the popper will be relative to this)
 * @param {Element} fixedPosition - is in fixed position mode
 * @returns {Object} An object containing the offsets which will be applied to the popper
 */
function getReferenceOffsets(state, popper, reference) {
  var fixedPosition = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

  var commonOffsetParent = fixedPosition ? getFixedPositionOffsetParent(popper) : findCommonOffsetParent(popper, reference);
  return getOffsetRectRelativeToArbitraryNode(reference, commonOffsetParent, fixedPosition);
}

/**
 * Get the outer sizes of the given element (offset size + margins)
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Object} object containing width and height properties
 */
function getOuterSizes(element) {
  var styles = getComputedStyle(element);
  var x = parseFloat(styles.marginTop) + parseFloat(styles.marginBottom);
  var y = parseFloat(styles.marginLeft) + parseFloat(styles.marginRight);
  var result = {
    width: element.offsetWidth + y,
    height: element.offsetHeight + x
  };
  return result;
}

/**
 * Get the opposite placement of the given one
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement
 * @returns {String} flipped placement
 */
function getOppositePlacement(placement) {
  var hash = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' };
  return placement.replace(/left|right|bottom|top/g, function (matched) {
    return hash[matched];
  });
}

/**
 * Get offsets to the popper
 * @method
 * @memberof Popper.Utils
 * @param {Object} position - CSS position the Popper will get applied
 * @param {HTMLElement} popper - the popper element
 * @param {Object} referenceOffsets - the reference offsets (the popper will be relative to this)
 * @param {String} placement - one of the valid placement options
 * @returns {Object} popperOffsets - An object containing the offsets which will be applied to the popper
 */
function getPopperOffsets(popper, referenceOffsets, placement) {
  placement = placement.split('-')[0];

  // Get popper node sizes
  var popperRect = getOuterSizes(popper);

  // Add position, width and height to our offsets object
  var popperOffsets = {
    width: popperRect.width,
    height: popperRect.height
  };

  // depending by the popper placement we have to compute its offsets slightly differently
  var isHoriz = ['right', 'left'].indexOf(placement) !== -1;
  var mainSide = isHoriz ? 'top' : 'left';
  var secondarySide = isHoriz ? 'left' : 'top';
  var measurement = isHoriz ? 'height' : 'width';
  var secondaryMeasurement = !isHoriz ? 'height' : 'width';

  popperOffsets[mainSide] = referenceOffsets[mainSide] + referenceOffsets[measurement] / 2 - popperRect[measurement] / 2;
  if (placement === secondarySide) {
    popperOffsets[secondarySide] = referenceOffsets[secondarySide] - popperRect[secondaryMeasurement];
  } else {
    popperOffsets[secondarySide] = referenceOffsets[getOppositePlacement(secondarySide)];
  }

  return popperOffsets;
}

/**
 * Mimics the `find` method of Array
 * @method
 * @memberof Popper.Utils
 * @argument {Array} arr
 * @argument prop
 * @argument value
 * @returns index or -1
 */
function find(arr, check) {
  // use native find if supported
  if (Array.prototype.find) {
    return arr.find(check);
  }

  // use `filter` to obtain the same behavior of `find`
  return arr.filter(check)[0];
}

/**
 * Return the index of the matching object
 * @method
 * @memberof Popper.Utils
 * @argument {Array} arr
 * @argument prop
 * @argument value
 * @returns index or -1
 */
function findIndex(arr, prop, value) {
  // use native findIndex if supported
  if (Array.prototype.findIndex) {
    return arr.findIndex(function (cur) {
      return cur[prop] === value;
    });
  }

  // use `find` + `indexOf` if `findIndex` isn't supported
  var match = find(arr, function (obj) {
    return obj[prop] === value;
  });
  return arr.indexOf(match);
}

/**
 * Loop trough the list of modifiers and run them in order,
 * each of them will then edit the data object.
 * @method
 * @memberof Popper.Utils
 * @param {dataObject} data
 * @param {Array} modifiers
 * @param {String} ends - Optional modifier name used as stopper
 * @returns {dataObject}
 */
function runModifiers(modifiers, data, ends) {
  var modifiersToRun = ends === undefined ? modifiers : modifiers.slice(0, findIndex(modifiers, 'name', ends));

  modifiersToRun.forEach(function (modifier) {
    if (modifier['function']) {
      // eslint-disable-line dot-notation
      console.warn('`modifier.function` is deprecated, use `modifier.fn`!');
    }
    var fn = modifier['function'] || modifier.fn; // eslint-disable-line dot-notation
    if (modifier.enabled && isFunction(fn)) {
      // Add properties to offsets to make them a complete clientRect object
      // we do this before each modifier to make sure the previous one doesn't
      // mess with these values
      data.offsets.popper = getClientRect(data.offsets.popper);
      data.offsets.reference = getClientRect(data.offsets.reference);

      data = fn(data, modifier);
    }
  });

  return data;
}

/**
 * Updates the position of the popper, computing the new offsets and applying
 * the new style.<br />
 * Prefer `scheduleUpdate` over `update` because of performance reasons.
 * @method
 * @memberof Popper
 */
function update() {
  // if popper is destroyed, don't perform any further update
  if (this.state.isDestroyed) {
    return;
  }

  var data = {
    instance: this,
    styles: {},
    arrowStyles: {},
    attributes: {},
    flipped: false,
    offsets: {}
  };

  // compute reference element offsets
  data.offsets.reference = getReferenceOffsets(this.state, this.popper, this.reference, this.options.positionFixed);

  // compute auto placement, store placement inside the data object,
  // modifiers will be able to edit `placement` if needed
  // and refer to originalPlacement to know the original value
  data.placement = computeAutoPlacement(this.options.placement, data.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding);

  // store the computed placement inside `originalPlacement`
  data.originalPlacement = data.placement;

  data.positionFixed = this.options.positionFixed;

  // compute the popper offsets
  data.offsets.popper = getPopperOffsets(this.popper, data.offsets.reference, data.placement);

  data.offsets.popper.position = this.options.positionFixed ? 'fixed' : 'absolute';

  // run the modifiers
  data = runModifiers(this.modifiers, data);

  // the first `update` will call `onCreate` callback
  // the other ones will call `onUpdate` callback
  if (!this.state.isCreated) {
    this.state.isCreated = true;
    this.options.onCreate(data);
  } else {
    this.options.onUpdate(data);
  }
}

/**
 * Helper used to know if the given modifier is enabled.
 * @method
 * @memberof Popper.Utils
 * @returns {Boolean}
 */
function isModifierEnabled(modifiers, modifierName) {
  return modifiers.some(function (_ref) {
    var name = _ref.name,
        enabled = _ref.enabled;
    return enabled && name === modifierName;
  });
}

/**
 * Get the prefixed supported property name
 * @method
 * @memberof Popper.Utils
 * @argument {String} property (camelCase)
 * @returns {String} prefixed property (camelCase or PascalCase, depending on the vendor prefix)
 */
function getSupportedPropertyName(property) {
  var prefixes = [false, 'ms', 'Webkit', 'Moz', 'O'];
  var upperProp = property.charAt(0).toUpperCase() + property.slice(1);

  for (var i = 0; i < prefixes.length; i++) {
    var prefix = prefixes[i];
    var toCheck = prefix ? '' + prefix + upperProp : property;
    if (typeof document.body.style[toCheck] !== 'undefined') {
      return toCheck;
    }
  }
  return null;
}

/**
 * Destroy the popper
 * @method
 * @memberof Popper
 */
function destroy() {
  this.state.isDestroyed = true;

  // touch DOM only if `applyStyle` modifier is enabled
  if (isModifierEnabled(this.modifiers, 'applyStyle')) {
    this.popper.removeAttribute('x-placement');
    this.popper.style.position = '';
    this.popper.style.top = '';
    this.popper.style.left = '';
    this.popper.style.right = '';
    this.popper.style.bottom = '';
    this.popper.style.willChange = '';
    this.popper.style[getSupportedPropertyName('transform')] = '';
  }

  this.disableEventListeners();

  // remove the popper if user explicity asked for the deletion on destroy
  // do not use `remove` because IE11 doesn't support it
  if (this.options.removeOnDestroy) {
    this.popper.parentNode.removeChild(this.popper);
  }
  return this;
}

/**
 * Get the window associated with the element
 * @argument {Element} element
 * @returns {Window}
 */
function getWindow(element) {
  var ownerDocument = element.ownerDocument;
  return ownerDocument ? ownerDocument.defaultView : window;
}

function attachToScrollParents(scrollParent, event, callback, scrollParents) {
  var isBody = scrollParent.nodeName === 'BODY';
  var target = isBody ? scrollParent.ownerDocument.defaultView : scrollParent;
  target.addEventListener(event, callback, { passive: true });

  if (!isBody) {
    attachToScrollParents(getScrollParent(target.parentNode), event, callback, scrollParents);
  }
  scrollParents.push(target);
}

/**
 * Setup needed event listeners used to update the popper position
 * @method
 * @memberof Popper.Utils
 * @private
 */
function setupEventListeners(reference, options, state, updateBound) {
  // Resize event listener on window
  state.updateBound = updateBound;
  getWindow(reference).addEventListener('resize', state.updateBound, { passive: true });

  // Scroll event listener on scroll parents
  var scrollElement = getScrollParent(reference);
  attachToScrollParents(scrollElement, 'scroll', state.updateBound, state.scrollParents);
  state.scrollElement = scrollElement;
  state.eventsEnabled = true;

  return state;
}

/**
 * It will add resize/scroll events and start recalculating
 * position of the popper element when they are triggered.
 * @method
 * @memberof Popper
 */
function enableEventListeners() {
  if (!this.state.eventsEnabled) {
    this.state = setupEventListeners(this.reference, this.options, this.state, this.scheduleUpdate);
  }
}

/**
 * Remove event listeners used to update the popper position
 * @method
 * @memberof Popper.Utils
 * @private
 */
function removeEventListeners(reference, state) {
  // Remove resize event listener on window
  getWindow(reference).removeEventListener('resize', state.updateBound);

  // Remove scroll event listener on scroll parents
  state.scrollParents.forEach(function (target) {
    target.removeEventListener('scroll', state.updateBound);
  });

  // Reset state
  state.updateBound = null;
  state.scrollParents = [];
  state.scrollElement = null;
  state.eventsEnabled = false;
  return state;
}

/**
 * It will remove resize/scroll events and won't recalculate popper position
 * when they are triggered. It also won't trigger onUpdate callback anymore,
 * unless you call `update` method manually.
 * @method
 * @memberof Popper
 */
function disableEventListeners() {
  if (this.state.eventsEnabled) {
    cancelAnimationFrame(this.scheduleUpdate);
    this.state = removeEventListeners(this.reference, this.state);
  }
}

/**
 * Tells if a given input is a number
 * @method
 * @memberof Popper.Utils
 * @param {*} input to check
 * @return {Boolean}
 */
function isNumeric(n) {
  return n !== '' && !isNaN(parseFloat(n)) && isFinite(n);
}

/**
 * Set the style to the given popper
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element - Element to apply the style to
 * @argument {Object} styles
 * Object with a list of properties and values which will be applied to the element
 */
function setStyles(element, styles) {
  Object.keys(styles).forEach(function (prop) {
    var unit = '';
    // add unit if the value is numeric and is one of the following
    if (['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(prop) !== -1 && isNumeric(styles[prop])) {
      unit = 'px';
    }
    element.style[prop] = styles[prop] + unit;
  });
}

/**
 * Set the attributes to the given popper
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element - Element to apply the attributes to
 * @argument {Object} styles
 * Object with a list of properties and values which will be applied to the element
 */
function setAttributes(element, attributes) {
  Object.keys(attributes).forEach(function (prop) {
    var value = attributes[prop];
    if (value !== false) {
      element.setAttribute(prop, attributes[prop]);
    } else {
      element.removeAttribute(prop);
    }
  });
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} data.styles - List of style properties - values to apply to popper element
 * @argument {Object} data.attributes - List of attribute properties - values to apply to popper element
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The same data object
 */
function applyStyle(data) {
  // any property present in `data.styles` will be applied to the popper,
  // in this way we can make the 3rd party modifiers add custom styles to it
  // Be aware, modifiers could override the properties defined in the previous
  // lines of this modifier!
  setStyles(data.instance.popper, data.styles);

  // any property present in `data.attributes` will be applied to the popper,
  // they will be set as HTML attributes of the element
  setAttributes(data.instance.popper, data.attributes);

  // if arrowElement is defined and arrowStyles has some properties
  if (data.arrowElement && Object.keys(data.arrowStyles).length) {
    setStyles(data.arrowElement, data.arrowStyles);
  }

  return data;
}

/**
 * Set the x-placement attribute before everything else because it could be used
 * to add margins to the popper margins needs to be calculated to get the
 * correct popper offsets.
 * @method
 * @memberof Popper.modifiers
 * @param {HTMLElement} reference - The reference element used to position the popper
 * @param {HTMLElement} popper - The HTML element used as popper
 * @param {Object} options - Popper.js options
 */
function applyStyleOnLoad(reference, popper, options, modifierOptions, state) {
  // compute reference element offsets
  var referenceOffsets = getReferenceOffsets(state, popper, reference, options.positionFixed);

  // compute auto placement, store placement inside the data object,
  // modifiers will be able to edit `placement` if needed
  // and refer to originalPlacement to know the original value
  var placement = computeAutoPlacement(options.placement, referenceOffsets, popper, reference, options.modifiers.flip.boundariesElement, options.modifiers.flip.padding);

  popper.setAttribute('x-placement', placement);

  // Apply `position` to popper before anything else because
  // without the position applied we can't guarantee correct computations
  setStyles(popper, { position: options.positionFixed ? 'fixed' : 'absolute' });

  return options;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function computeStyle(data, options) {
  var x = options.x,
      y = options.y;
  var popper = data.offsets.popper;

  // Remove this legacy support in Popper.js v2

  var legacyGpuAccelerationOption = find(data.instance.modifiers, function (modifier) {
    return modifier.name === 'applyStyle';
  }).gpuAcceleration;
  if (legacyGpuAccelerationOption !== undefined) {
    console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!');
  }
  var gpuAcceleration = legacyGpuAccelerationOption !== undefined ? legacyGpuAccelerationOption : options.gpuAcceleration;

  var offsetParent = getOffsetParent(data.instance.popper);
  var offsetParentRect = getBoundingClientRect(offsetParent);

  // Styles
  var styles = {
    position: popper.position
  };

  // Avoid blurry text by using full pixel integers.
  // For pixel-perfect positioning, top/bottom prefers rounded
  // values, while left/right prefers floored values.
  var offsets = {
    left: Math.floor(popper.left),
    top: Math.round(popper.top),
    bottom: Math.round(popper.bottom),
    right: Math.floor(popper.right)
  };

  var sideA = x === 'bottom' ? 'top' : 'bottom';
  var sideB = y === 'right' ? 'left' : 'right';

  // if gpuAcceleration is set to `true` and transform is supported,
  //  we use `translate3d` to apply the position to the popper we
  // automatically use the supported prefixed version if needed
  var prefixedProperty = getSupportedPropertyName('transform');

  // now, let's make a step back and look at this code closely (wtf?)
  // If the content of the popper grows once it's been positioned, it
  // may happen that the popper gets misplaced because of the new content
  // overflowing its reference element
  // To avoid this problem, we provide two options (x and y), which allow
  // the consumer to define the offset origin.
  // If we position a popper on top of a reference element, we can set
  // `x` to `top` to make the popper grow towards its top instead of
  // its bottom.
  var left = void 0,
      top = void 0;
  if (sideA === 'bottom') {
    top = -offsetParentRect.height + offsets.bottom;
  } else {
    top = offsets.top;
  }
  if (sideB === 'right') {
    left = -offsetParentRect.width + offsets.right;
  } else {
    left = offsets.left;
  }
  if (gpuAcceleration && prefixedProperty) {
    styles[prefixedProperty] = 'translate3d(' + left + 'px, ' + top + 'px, 0)';
    styles[sideA] = 0;
    styles[sideB] = 0;
    styles.willChange = 'transform';
  } else {
    // othwerise, we use the standard `top`, `left`, `bottom` and `right` properties
    var invertTop = sideA === 'bottom' ? -1 : 1;
    var invertLeft = sideB === 'right' ? -1 : 1;
    styles[sideA] = top * invertTop;
    styles[sideB] = left * invertLeft;
    styles.willChange = sideA + ', ' + sideB;
  }

  // Attributes
  var attributes = {
    'x-placement': data.placement
  };

  // Update `data` attributes, styles and arrowStyles
  data.attributes = popper__extends({}, attributes, data.attributes);
  data.styles = popper__extends({}, styles, data.styles);
  data.arrowStyles = popper__extends({}, data.offsets.arrow, data.arrowStyles);

  return data;
}

/**
 * Helper used to know if the given modifier depends from another one.<br />
 * It checks if the needed modifier is listed and enabled.
 * @method
 * @memberof Popper.Utils
 * @param {Array} modifiers - list of modifiers
 * @param {String} requestingName - name of requesting modifier
 * @param {String} requestedName - name of requested modifier
 * @returns {Boolean}
 */
function isModifierRequired(modifiers, requestingName, requestedName) {
  var requesting = find(modifiers, function (_ref) {
    var name = _ref.name;
    return name === requestingName;
  });

  var isRequired = !!requesting && modifiers.some(function (modifier) {
    return modifier.name === requestedName && modifier.enabled && modifier.order < requesting.order;
  });

  if (!isRequired) {
    var _requesting = '`' + requestingName + '`';
    var requested = '`' + requestedName + '`';
    console.warn(requested + ' modifier is required by ' + _requesting + ' modifier in order to work, be sure to include it before ' + _requesting + '!');
  }
  return isRequired;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function arrow(data, options) {
  var _data$offsets$arrow;

  // arrow depends on keepTogether in order to work
  if (!isModifierRequired(data.instance.modifiers, 'arrow', 'keepTogether')) {
    return data;
  }

  var arrowElement = options.element;

  // if arrowElement is a string, suppose it's a CSS selector
  if (typeof arrowElement === 'string') {
    arrowElement = data.instance.popper.querySelector(arrowElement);

    // if arrowElement is not found, don't run the modifier
    if (!arrowElement) {
      return data;
    }
  } else {
    // if the arrowElement isn't a query selector we must check that the
    // provided DOM node is child of its popper node
    if (!data.instance.popper.contains(arrowElement)) {
      console.warn('WARNING: `arrow.element` must be child of its popper element!');
      return data;
    }
  }

  var placement = data.placement.split('-')[0];
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var isVertical = ['left', 'right'].indexOf(placement) !== -1;

  var len = isVertical ? 'height' : 'width';
  var sideCapitalized = isVertical ? 'Top' : 'Left';
  var side = sideCapitalized.toLowerCase();
  var altSide = isVertical ? 'left' : 'top';
  var opSide = isVertical ? 'bottom' : 'right';
  var arrowElementSize = getOuterSizes(arrowElement)[len];

  //
  // extends keepTogether behavior making sure the popper and its
  // reference have enough pixels in conjuction
  //

  // top/left side
  if (reference[opSide] - arrowElementSize < popper[side]) {
    data.offsets.popper[side] -= popper[side] - (reference[opSide] - arrowElementSize);
  }
  // bottom/right side
  if (reference[side] + arrowElementSize > popper[opSide]) {
    data.offsets.popper[side] += reference[side] + arrowElementSize - popper[opSide];
  }
  data.offsets.popper = getClientRect(data.offsets.popper);

  // compute center of the popper
  var center = reference[side] + reference[len] / 2 - arrowElementSize / 2;

  // Compute the sideValue using the updated popper offsets
  // take popper margin in account because we don't have this info available
  var css = getStyleComputedProperty(data.instance.popper);
  var popperMarginSide = parseFloat(css['margin' + sideCapitalized], 10);
  var popperBorderSide = parseFloat(css['border' + sideCapitalized + 'Width'], 10);
  var sideValue = center - data.offsets.popper[side] - popperMarginSide - popperBorderSide;

  // prevent arrowElement from being placed not contiguously to its popper
  sideValue = Math.max(Math.min(popper[len] - arrowElementSize, sideValue), 0);

  data.arrowElement = arrowElement;
  data.offsets.arrow = (_data$offsets$arrow = {}, defineProperty(_data$offsets$arrow, side, Math.round(sideValue)), defineProperty(_data$offsets$arrow, altSide, ''), _data$offsets$arrow);

  return data;
}

/**
 * Get the opposite placement variation of the given one
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement variation
 * @returns {String} flipped placement variation
 */
function getOppositeVariation(variation) {
  if (variation === 'end') {
    return 'start';
  } else if (variation === 'start') {
    return 'end';
  }
  return variation;
}

/**
 * List of accepted placements to use as values of the `placement` option.<br />
 * Valid placements are:
 * - `auto`
 * - `top`
 * - `right`
 * - `bottom`
 * - `left`
 *
 * Each placement can have a variation from this list:
 * - `-start`
 * - `-end`
 *
 * Variations are interpreted easily if you think of them as the left to right
 * written languages. Horizontally (`top` and `bottom`), `start` is left and `end`
 * is right.<br />
 * Vertically (`left` and `right`), `start` is top and `end` is bottom.
 *
 * Some valid examples are:
 * - `top-end` (on top of reference, right aligned)
 * - `right-start` (on right of reference, top aligned)
 * - `bottom` (on bottom, centered)
 * - `auto-right` (on the side with more space available, alignment depends by placement)
 *
 * @static
 * @type {Array}
 * @enum {String}
 * @readonly
 * @method placements
 * @memberof Popper
 */
var placements = ['auto-start', 'auto', 'auto-end', 'top-start', 'top', 'top-end', 'right-start', 'right', 'right-end', 'bottom-end', 'bottom', 'bottom-start', 'left-end', 'left', 'left-start'];

// Get rid of `auto` `auto-start` and `auto-end`
var validPlacements = placements.slice(3);

/**
 * Given an initial placement, returns all the subsequent placements
 * clockwise (or counter-clockwise).
 *
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement - A valid placement (it accepts variations)
 * @argument {Boolean} counter - Set to true to walk the placements counterclockwise
 * @returns {Array} placements including their variations
 */
function clockwise(placement) {
  var counter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  var index = validPlacements.indexOf(placement);
  var arr = validPlacements.slice(index + 1).concat(validPlacements.slice(0, index));
  return counter ? arr.reverse() : arr;
}

var BEHAVIORS = {
  FLIP: 'flip',
  CLOCKWISE: 'clockwise',
  COUNTERCLOCKWISE: 'counterclockwise'
};

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function flip(data, options) {
  // if `inner` modifier is enabled, we can't use the `flip` modifier
  if (isModifierEnabled(data.instance.modifiers, 'inner')) {
    return data;
  }

  if (data.flipped && data.placement === data.originalPlacement) {
    // seems like flip is trying to loop, probably there's not enough space on any of the flippable sides
    return data;
  }

  var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, options.boundariesElement, data.positionFixed);

  var placement = data.placement.split('-')[0];
  var placementOpposite = getOppositePlacement(placement);
  var variation = data.placement.split('-')[1] || '';

  var flipOrder = [];

  switch (options.behavior) {
    case BEHAVIORS.FLIP:
      flipOrder = [placement, placementOpposite];
      break;
    case BEHAVIORS.CLOCKWISE:
      flipOrder = clockwise(placement);
      break;
    case BEHAVIORS.COUNTERCLOCKWISE:
      flipOrder = clockwise(placement, true);
      break;
    default:
      flipOrder = options.behavior;
  }

  flipOrder.forEach(function (step, index) {
    if (placement !== step || flipOrder.length === index + 1) {
      return data;
    }

    placement = data.placement.split('-')[0];
    placementOpposite = getOppositePlacement(placement);

    var popperOffsets = data.offsets.popper;
    var refOffsets = data.offsets.reference;

    // using floor because the reference offsets may contain decimals we are not going to consider here
    var floor = Math.floor;
    var overlapsRef = placement === 'left' && floor(popperOffsets.right) > floor(refOffsets.left) || placement === 'right' && floor(popperOffsets.left) < floor(refOffsets.right) || placement === 'top' && floor(popperOffsets.bottom) > floor(refOffsets.top) || placement === 'bottom' && floor(popperOffsets.top) < floor(refOffsets.bottom);

    var overflowsLeft = floor(popperOffsets.left) < floor(boundaries.left);
    var overflowsRight = floor(popperOffsets.right) > floor(boundaries.right);
    var overflowsTop = floor(popperOffsets.top) < floor(boundaries.top);
    var overflowsBottom = floor(popperOffsets.bottom) > floor(boundaries.bottom);

    var overflowsBoundaries = placement === 'left' && overflowsLeft || placement === 'right' && overflowsRight || placement === 'top' && overflowsTop || placement === 'bottom' && overflowsBottom;

    // flip the variation if required
    var isVertical = ['top', 'bottom'].indexOf(placement) !== -1;
    var flippedVariation = !!options.flipVariations && (isVertical && variation === 'start' && overflowsLeft || isVertical && variation === 'end' && overflowsRight || !isVertical && variation === 'start' && overflowsTop || !isVertical && variation === 'end' && overflowsBottom);

    if (overlapsRef || overflowsBoundaries || flippedVariation) {
      // this boolean to detect any flip loop
      data.flipped = true;

      if (overlapsRef || overflowsBoundaries) {
        placement = flipOrder[index + 1];
      }

      if (flippedVariation) {
        variation = getOppositeVariation(variation);
      }

      data.placement = placement + (variation ? '-' + variation : '');

      // this object contains `position`, we want to preserve it along with
      // any additional property we may add in the future
      data.offsets.popper = popper__extends({}, data.offsets.popper, getPopperOffsets(data.instance.popper, data.offsets.reference, data.placement));

      data = runModifiers(data.instance.modifiers, data, 'flip');
    }
  });
  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function keepTogether(data) {
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var placement = data.placement.split('-')[0];
  var floor = Math.floor;
  var isVertical = ['top', 'bottom'].indexOf(placement) !== -1;
  var side = isVertical ? 'right' : 'bottom';
  var opSide = isVertical ? 'left' : 'top';
  var measurement = isVertical ? 'width' : 'height';

  if (popper[side] < floor(reference[opSide])) {
    data.offsets.popper[opSide] = floor(reference[opSide]) - popper[measurement];
  }
  if (popper[opSide] > floor(reference[side])) {
    data.offsets.popper[opSide] = floor(reference[side]);
  }

  return data;
}

/**
 * Converts a string containing value + unit into a px value number
 * @function
 * @memberof {modifiers~offset}
 * @private
 * @argument {String} str - Value + unit string
 * @argument {String} measurement - `height` or `width`
 * @argument {Object} popperOffsets
 * @argument {Object} referenceOffsets
 * @returns {Number|String}
 * Value in pixels, or original string if no values were extracted
 */
function toValue(str, measurement, popperOffsets, referenceOffsets) {
  // separate value from unit
  var split = str.match(/((?:\-|\+)?\d*\.?\d*)(.*)/);
  var value = +split[1];
  var unit = split[2];

  // If it's not a number it's an operator, I guess
  if (!value) {
    return str;
  }

  if (unit.indexOf('%') === 0) {
    var element = void 0;
    switch (unit) {
      case '%p':
        element = popperOffsets;
        break;
      case '%':
      case '%r':
      default:
        element = referenceOffsets;
    }

    var rect = getClientRect(element);
    return rect[measurement] / 100 * value;
  } else if (unit === 'vh' || unit === 'vw') {
    // if is a vh or vw, we calculate the size based on the viewport
    var size = void 0;
    if (unit === 'vh') {
      size = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    } else {
      size = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    }
    return size / 100 * value;
  } else {
    // if is an explicit pixel unit, we get rid of the unit and keep the value
    // if is an implicit unit, it's px, and we return just the value
    return value;
  }
}

/**
 * Parse an `offset` string to extrapolate `x` and `y` numeric offsets.
 * @function
 * @memberof {modifiers~offset}
 * @private
 * @argument {String} offset
 * @argument {Object} popperOffsets
 * @argument {Object} referenceOffsets
 * @argument {String} basePlacement
 * @returns {Array} a two cells array with x and y offsets in numbers
 */
function parseOffset(offset, popperOffsets, referenceOffsets, basePlacement) {
  var offsets = [0, 0];

  // Use height if placement is left or right and index is 0 otherwise use width
  // in this way the first offset will use an axis and the second one
  // will use the other one
  var useHeight = ['right', 'left'].indexOf(basePlacement) !== -1;

  // Split the offset string to obtain a list of values and operands
  // The regex addresses values with the plus or minus sign in front (+10, -20, etc)
  var fragments = offset.split(/(\+|\-)/).map(function (frag) {
    return frag.trim();
  });

  // Detect if the offset string contains a pair of values or a single one
  // they could be separated by comma or space
  var divider = fragments.indexOf(find(fragments, function (frag) {
    return frag.search(/,|\s/) !== -1;
  }));

  if (fragments[divider] && fragments[divider].indexOf(',') === -1) {
    console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');
  }

  // If divider is found, we divide the list of values and operands to divide
  // them by ofset X and Y.
  var splitRegex = /\s*,\s*|\s+/;
  var ops = divider !== -1 ? [fragments.slice(0, divider).concat([fragments[divider].split(splitRegex)[0]]), [fragments[divider].split(splitRegex)[1]].concat(fragments.slice(divider + 1))] : [fragments];

  // Convert the values with units to absolute pixels to allow our computations
  ops = ops.map(function (op, index) {
    // Most of the units rely on the orientation of the popper
    var measurement = (index === 1 ? !useHeight : useHeight) ? 'height' : 'width';
    var mergeWithPrevious = false;
    return op
    // This aggregates any `+` or `-` sign that aren't considered operators
    // e.g.: 10 + +5 => [10, +, +5]
    .reduce(function (a, b) {
      if (a[a.length - 1] === '' && ['+', '-'].indexOf(b) !== -1) {
        a[a.length - 1] = b;
        mergeWithPrevious = true;
        return a;
      } else if (mergeWithPrevious) {
        a[a.length - 1] += b;
        mergeWithPrevious = false;
        return a;
      } else {
        return a.concat(b);
      }
    }, [])
    // Here we convert the string values into number values (in px)
    .map(function (str) {
      return toValue(str, measurement, popperOffsets, referenceOffsets);
    });
  });

  // Loop trough the offsets arrays and execute the operations
  ops.forEach(function (op, index) {
    op.forEach(function (frag, index2) {
      if (isNumeric(frag)) {
        offsets[index] += frag * (op[index2 - 1] === '-' ? -1 : 1);
      }
    });
  });
  return offsets;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @argument {Number|String} options.offset=0
 * The offset value as described in the modifier description
 * @returns {Object} The data object, properly modified
 */
function offset(data, _ref) {
  var offset = _ref.offset;
  var placement = data.placement,
      _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var basePlacement = placement.split('-')[0];

  var offsets = void 0;
  if (isNumeric(+offset)) {
    offsets = [+offset, 0];
  } else {
    offsets = parseOffset(offset, popper, reference, basePlacement);
  }

  if (basePlacement === 'left') {
    popper.top += offsets[0];
    popper.left -= offsets[1];
  } else if (basePlacement === 'right') {
    popper.top += offsets[0];
    popper.left += offsets[1];
  } else if (basePlacement === 'top') {
    popper.left += offsets[0];
    popper.top -= offsets[1];
  } else if (basePlacement === 'bottom') {
    popper.left += offsets[0];
    popper.top += offsets[1];
  }

  data.popper = popper;
  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function preventOverflow(data, options) {
  var boundariesElement = options.boundariesElement || getOffsetParent(data.instance.popper);

  // If offsetParent is the reference element, we really want to
  // go one step up and use the next offsetParent as reference to
  // avoid to make this modifier completely useless and look like broken
  if (data.instance.reference === boundariesElement) {
    boundariesElement = getOffsetParent(boundariesElement);
  }

  // NOTE: DOM access here
  // resets the popper's position so that the document size can be calculated excluding
  // the size of the popper element itself
  var transformProp = getSupportedPropertyName('transform');
  var popperStyles = data.instance.popper.style; // assignment to help minification
  var top = popperStyles.top,
      left = popperStyles.left,
      transform = popperStyles[transformProp];

  popperStyles.top = '';
  popperStyles.left = '';
  popperStyles[transformProp] = '';

  var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, boundariesElement, data.positionFixed);

  // NOTE: DOM access here
  // restores the original style properties after the offsets have been computed
  popperStyles.top = top;
  popperStyles.left = left;
  popperStyles[transformProp] = transform;

  options.boundaries = boundaries;

  var order = options.priority;
  var popper = data.offsets.popper;

  var check = {
    primary: function primary(placement) {
      var value = popper[placement];
      if (popper[placement] < boundaries[placement] && !options.escapeWithReference) {
        value = Math.max(popper[placement], boundaries[placement]);
      }
      return defineProperty({}, placement, value);
    },
    secondary: function secondary(placement) {
      var mainSide = placement === 'right' ? 'left' : 'top';
      var value = popper[mainSide];
      if (popper[placement] > boundaries[placement] && !options.escapeWithReference) {
        value = Math.min(popper[mainSide], boundaries[placement] - (placement === 'right' ? popper.width : popper.height));
      }
      return defineProperty({}, mainSide, value);
    }
  };

  order.forEach(function (placement) {
    var side = ['left', 'top'].indexOf(placement) !== -1 ? 'primary' : 'secondary';
    popper = popper__extends({}, popper, check[side](placement));
  });

  data.offsets.popper = popper;

  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function shift(data) {
  var placement = data.placement;
  var basePlacement = placement.split('-')[0];
  var shiftvariation = placement.split('-')[1];

  // if shift shiftvariation is specified, run the modifier
  if (shiftvariation) {
    var _data$offsets = data.offsets,
        reference = _data$offsets.reference,
        popper = _data$offsets.popper;

    var isVertical = ['bottom', 'top'].indexOf(basePlacement) !== -1;
    var side = isVertical ? 'left' : 'top';
    var measurement = isVertical ? 'width' : 'height';

    var shiftOffsets = {
      start: defineProperty({}, side, reference[side]),
      end: defineProperty({}, side, reference[side] + reference[measurement] - popper[measurement])
    };

    data.offsets.popper = popper__extends({}, popper, shiftOffsets[shiftvariation]);
  }

  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function hide(data) {
  if (!isModifierRequired(data.instance.modifiers, 'hide', 'preventOverflow')) {
    return data;
  }

  var refRect = data.offsets.reference;
  var bound = find(data.instance.modifiers, function (modifier) {
    return modifier.name === 'preventOverflow';
  }).boundaries;

  if (refRect.bottom < bound.top || refRect.left > bound.right || refRect.top > bound.bottom || refRect.right < bound.left) {
    // Avoid unnecessary DOM access if visibility hasn't changed
    if (data.hide === true) {
      return data;
    }

    data.hide = true;
    data.attributes['x-out-of-boundaries'] = '';
  } else {
    // Avoid unnecessary DOM access if visibility hasn't changed
    if (data.hide === false) {
      return data;
    }

    data.hide = false;
    data.attributes['x-out-of-boundaries'] = false;
  }

  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function inner(data) {
  var placement = data.placement;
  var basePlacement = placement.split('-')[0];
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var isHoriz = ['left', 'right'].indexOf(basePlacement) !== -1;

  var subtractLength = ['top', 'left'].indexOf(basePlacement) === -1;

  popper[isHoriz ? 'left' : 'top'] = reference[basePlacement] - (subtractLength ? popper[isHoriz ? 'width' : 'height'] : 0);

  data.placement = getOppositePlacement(placement);
  data.offsets.popper = getClientRect(popper);

  return data;
}

/**
 * Modifier function, each modifier can have a function of this type assigned
 * to its `fn` property.<br />
 * These functions will be called on each update, this means that you must
 * make sure they are performant enough to avoid performance bottlenecks.
 *
 * @function ModifierFn
 * @argument {dataObject} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {dataObject} The data object, properly modified
 */

/**
 * Modifiers are plugins used to alter the behavior of your poppers.<br />
 * Popper.js uses a set of 9 modifiers to provide all the basic functionalities
 * needed by the library.
 *
 * Usually you don't want to override the `order`, `fn` and `onLoad` props.
 * All the other properties are configurations that could be tweaked.
 * @namespace modifiers
 */
var popper_modifiers = {
  /**
   * Modifier used to shift the popper on the start or end of its reference
   * element.<br />
   * It will read the variation of the `placement` property.<br />
   * It can be one either `-end` or `-start`.
   * @memberof modifiers
   * @inner
   */
  shift: {
    /** @prop {number} order=100 - Index used to define the order of execution */
    order: 100,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: shift
  },

  /**
   * The `offset` modifier can shift your popper on both its axis.
   *
   * It accepts the following units:
   * - `px` or unitless, interpreted as pixels
   * - `%` or `%r`, percentage relative to the length of the reference element
   * - `%p`, percentage relative to the length of the popper element
   * - `vw`, CSS viewport width unit
   * - `vh`, CSS viewport height unit
   *
   * For length is intended the main axis relative to the placement of the popper.<br />
   * This means that if the placement is `top` or `bottom`, the length will be the
   * `width`. In case of `left` or `right`, it will be the height.
   *
   * You can provide a single value (as `Number` or `String`), or a pair of values
   * as `String` divided by a comma or one (or more) white spaces.<br />
   * The latter is a deprecated method because it leads to confusion and will be
   * removed in v2.<br />
   * Additionally, it accepts additions and subtractions between different units.
   * Note that multiplications and divisions aren't supported.
   *
   * Valid examples are:
   * ```
   * 10
   * '10%'
   * '10, 10'
   * '10%, 10'
   * '10 + 10%'
   * '10 - 5vh + 3%'
   * '-10px + 5vh, 5px - 6%'
   * ```
   * > **NB**: If you desire to apply offsets to your poppers in a way that may make them overlap
   * > with their reference element, unfortunately, you will have to disable the `flip` modifier.
   * > More on this [reading this issue](https://github.com/FezVrasta/popper.js/issues/373)
   *
   * @memberof modifiers
   * @inner
   */
  offset: {
    /** @prop {number} order=200 - Index used to define the order of execution */
    order: 200,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: offset,
    /** @prop {Number|String} offset=0
     * The offset value as described in the modifier description
     */
    offset: 0
  },

  /**
   * Modifier used to prevent the popper from being positioned outside the boundary.
   *
   * An scenario exists where the reference itself is not within the boundaries.<br />
   * We can say it has "escaped the boundaries" — or just "escaped".<br />
   * In this case we need to decide whether the popper should either:
   *
   * - detach from the reference and remain "trapped" in the boundaries, or
   * - if it should ignore the boundary and "escape with its reference"
   *
   * When `escapeWithReference` is set to`true` and reference is completely
   * outside its boundaries, the popper will overflow (or completely leave)
   * the boundaries in order to remain attached to the edge of the reference.
   *
   * @memberof modifiers
   * @inner
   */
  preventOverflow: {
    /** @prop {number} order=300 - Index used to define the order of execution */
    order: 300,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: preventOverflow,
    /**
     * @prop {Array} [priority=['left','right','top','bottom']]
     * Popper will try to prevent overflow following these priorities by default,
     * then, it could overflow on the left and on top of the `boundariesElement`
     */
    priority: ['left', 'right', 'top', 'bottom'],
    /**
     * @prop {number} padding=5
     * Amount of pixel used to define a minimum distance between the boundaries
     * and the popper this makes sure the popper has always a little padding
     * between the edges of its container
     */
    padding: 5,
    /**
     * @prop {String|HTMLElement} boundariesElement='scrollParent'
     * Boundaries used by the modifier, can be `scrollParent`, `window`,
     * `viewport` or any DOM element.
     */
    boundariesElement: 'scrollParent'
  },

  /**
   * Modifier used to make sure the reference and its popper stay near eachothers
   * without leaving any gap between the two. Expecially useful when the arrow is
   * enabled and you want to assure it to point to its reference element.
   * It cares only about the first axis, you can still have poppers with margin
   * between the popper and its reference element.
   * @memberof modifiers
   * @inner
   */
  keepTogether: {
    /** @prop {number} order=400 - Index used to define the order of execution */
    order: 400,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: keepTogether
  },

  /**
   * This modifier is used to move the `arrowElement` of the popper to make
   * sure it is positioned between the reference element and its popper element.
   * It will read the outer size of the `arrowElement` node to detect how many
   * pixels of conjuction are needed.
   *
   * It has no effect if no `arrowElement` is provided.
   * @memberof modifiers
   * @inner
   */
  arrow: {
    /** @prop {number} order=500 - Index used to define the order of execution */
    order: 500,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: arrow,
    /** @prop {String|HTMLElement} element='[x-arrow]' - Selector or node used as arrow */
    element: '[x-arrow]'
  },

  /**
   * Modifier used to flip the popper's placement when it starts to overlap its
   * reference element.
   *
   * Requires the `preventOverflow` modifier before it in order to work.
   *
   * **NOTE:** this modifier will interrupt the current update cycle and will
   * restart it if it detects the need to flip the placement.
   * @memberof modifiers
   * @inner
   */
  flip: {
    /** @prop {number} order=600 - Index used to define the order of execution */
    order: 600,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: flip,
    /**
     * @prop {String|Array} behavior='flip'
     * The behavior used to change the popper's placement. It can be one of
     * `flip`, `clockwise`, `counterclockwise` or an array with a list of valid
     * placements (with optional variations).
     */
    behavior: 'flip',
    /**
     * @prop {number} padding=5
     * The popper will flip if it hits the edges of the `boundariesElement`
     */
    padding: 5,
    /**
     * @prop {String|HTMLElement} boundariesElement='viewport'
     * The element which will define the boundaries of the popper position,
     * the popper will never be placed outside of the defined boundaries
     * (except if keepTogether is enabled)
     */
    boundariesElement: 'viewport'
  },

  /**
   * Modifier used to make the popper flow toward the inner of the reference element.
   * By default, when this modifier is disabled, the popper will be placed outside
   * the reference element.
   * @memberof modifiers
   * @inner
   */
  inner: {
    /** @prop {number} order=700 - Index used to define the order of execution */
    order: 700,
    /** @prop {Boolean} enabled=false - Whether the modifier is enabled or not */
    enabled: false,
    /** @prop {ModifierFn} */
    fn: inner
  },

  /**
   * Modifier used to hide the popper when its reference element is outside of the
   * popper boundaries. It will set a `x-out-of-boundaries` attribute which can
   * be used to hide with a CSS selector the popper when its reference is
   * out of boundaries.
   *
   * Requires the `preventOverflow` modifier before it in order to work.
   * @memberof modifiers
   * @inner
   */
  hide: {
    /** @prop {number} order=800 - Index used to define the order of execution */
    order: 800,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: hide
  },

  /**
   * Computes the style that will be applied to the popper element to gets
   * properly positioned.
   *
   * Note that this modifier will not touch the DOM, it just prepares the styles
   * so that `applyStyle` modifier can apply it. This separation is useful
   * in case you need to replace `applyStyle` with a custom implementation.
   *
   * This modifier has `850` as `order` value to maintain backward compatibility
   * with previous versions of Popper.js. Expect the modifiers ordering method
   * to change in future major versions of the library.
   *
   * @memberof modifiers
   * @inner
   */
  computeStyle: {
    /** @prop {number} order=850 - Index used to define the order of execution */
    order: 850,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: computeStyle,
    /**
     * @prop {Boolean} gpuAcceleration=true
     * If true, it uses the CSS 3d transformation to position the popper.
     * Otherwise, it will use the `top` and `left` properties.
     */
    gpuAcceleration: true,
    /**
     * @prop {string} [x='bottom']
     * Where to anchor the X axis (`bottom` or `top`). AKA X offset origin.
     * Change this if your popper should grow in a direction different from `bottom`
     */
    x: 'bottom',
    /**
     * @prop {string} [x='left']
     * Where to anchor the Y axis (`left` or `right`). AKA Y offset origin.
     * Change this if your popper should grow in a direction different from `right`
     */
    y: 'right'
  },

  /**
   * Applies the computed styles to the popper element.
   *
   * All the DOM manipulations are limited to this modifier. This is useful in case
   * you want to integrate Popper.js inside a framework or view library and you
   * want to delegate all the DOM manipulations to it.
   *
   * Note that if you disable this modifier, you must make sure the popper element
   * has its position set to `absolute` before Popper.js can do its work!
   *
   * Just disable this modifier and define you own to achieve the desired effect.
   *
   * @memberof modifiers
   * @inner
   */
  applyStyle: {
    /** @prop {number} order=900 - Index used to define the order of execution */
    order: 900,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: applyStyle,
    /** @prop {Function} */
    onLoad: applyStyleOnLoad,
    /**
     * @deprecated since version 1.10.0, the property moved to `computeStyle` modifier
     * @prop {Boolean} gpuAcceleration=true
     * If true, it uses the CSS 3d transformation to position the popper.
     * Otherwise, it will use the `top` and `left` properties.
     */
    gpuAcceleration: undefined
  }
};

/**
 * The `dataObject` is an object containing all the informations used by Popper.js
 * this object get passed to modifiers and to the `onCreate` and `onUpdate` callbacks.
 * @name dataObject
 * @property {Object} data.instance The Popper.js instance
 * @property {String} data.placement Placement applied to popper
 * @property {String} data.originalPlacement Placement originally defined on init
 * @property {Boolean} data.flipped True if popper has been flipped by flip modifier
 * @property {Boolean} data.hide True if the reference element is out of boundaries, useful to know when to hide the popper.
 * @property {HTMLElement} data.arrowElement Node used as arrow by arrow modifier
 * @property {Object} data.styles Any CSS property defined here will be applied to the popper, it expects the JavaScript nomenclature (eg. `marginBottom`)
 * @property {Object} data.arrowStyles Any CSS property defined here will be applied to the popper arrow, it expects the JavaScript nomenclature (eg. `marginBottom`)
 * @property {Object} data.boundaries Offsets of the popper boundaries
 * @property {Object} data.offsets The measurements of popper, reference and arrow elements.
 * @property {Object} data.offsets.popper `top`, `left`, `width`, `height` values
 * @property {Object} data.offsets.reference `top`, `left`, `width`, `height` values
 * @property {Object} data.offsets.arrow] `top` and `left` offsets, only one of them will be different from 0
 */

/**
 * Default options provided to Popper.js constructor.<br />
 * These can be overriden using the `options` argument of Popper.js.<br />
 * To override an option, simply pass as 3rd argument an object with the same
 * structure of this object, example:
 * ```
 * new Popper(ref, pop, {
 *   modifiers: {
 *     preventOverflow: { enabled: false }
 *   }
 * })
 * ```
 * @type {Object}
 * @static
 * @memberof Popper
 */
var Defaults = {
  /**
   * Popper's placement
   * @prop {Popper.placements} placement='bottom'
   */
  placement: 'bottom',

  /**
   * Set this to true if you want popper to position it self in 'fixed' mode
   * @prop {Boolean} positionFixed=false
   */
  positionFixed: false,

  /**
   * Whether events (resize, scroll) are initially enabled
   * @prop {Boolean} eventsEnabled=true
   */
  eventsEnabled: true,

  /**
   * Set to true if you want to automatically remove the popper when
   * you call the `destroy` method.
   * @prop {Boolean} removeOnDestroy=false
   */
  removeOnDestroy: false,

  /**
   * Callback called when the popper is created.<br />
   * By default, is set to no-op.<br />
   * Access Popper.js instance with `data.instance`.
   * @prop {onCreate}
   */
  onCreate: function onCreate() {},

  /**
   * Callback called when the popper is updated, this callback is not called
   * on the initialization/creation of the popper, but only on subsequent
   * updates.<br />
   * By default, is set to no-op.<br />
   * Access Popper.js instance with `data.instance`.
   * @prop {onUpdate}
   */
  onUpdate: function onUpdate() {},

  /**
   * List of modifiers used to modify the offsets before they are applied to the popper.
   * They provide most of the functionalities of Popper.js
   * @prop {modifiers}
   */
  modifiers: popper_modifiers
};

/**
 * @callback onCreate
 * @param {dataObject} data
 */

/**
 * @callback onUpdate
 * @param {dataObject} data
 */

// Utils
// Methods
var popper_Popper = function () {
  /**
   * Create a new Popper.js instance
   * @class Popper
   * @param {HTMLElement|referenceObject} reference - The reference element used to position the popper
   * @param {HTMLElement} popper - The HTML element used as popper.
   * @param {Object} options - Your custom options to override the ones defined in [Defaults](#defaults)
   * @return {Object} instance - The generated Popper.js instance
   */
  function Popper(reference, popper) {
    var _this = this;

    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    classCallCheck(this, Popper);

    this.scheduleUpdate = function () {
      return requestAnimationFrame(_this.update);
    };

    // make update() debounced, so that it only runs at most once-per-tick
    this.update = debounce(this.update.bind(this));

    // with {} we create a new object with the options inside it
    this.options = popper__extends({}, Popper.Defaults, options);

    // init state
    this.state = {
      isDestroyed: false,
      isCreated: false,
      scrollParents: []
    };

    // get reference and popper elements (allow jQuery wrappers)
    this.reference = reference && reference.jquery ? reference[0] : reference;
    this.popper = popper && popper.jquery ? popper[0] : popper;

    // Deep merge modifiers options
    this.options.modifiers = {};
    Object.keys(popper__extends({}, Popper.Defaults.modifiers, options.modifiers)).forEach(function (name) {
      _this.options.modifiers[name] = popper__extends({}, Popper.Defaults.modifiers[name] || {}, options.modifiers ? options.modifiers[name] : {});
    });

    // Refactoring modifiers' list (Object => Array)
    this.modifiers = Object.keys(this.options.modifiers).map(function (name) {
      return popper__extends({
        name: name
      }, _this.options.modifiers[name]);
    })
    // sort the modifiers by order
    .sort(function (a, b) {
      return a.order - b.order;
    });

    // modifiers have the ability to execute arbitrary code when Popper.js get inited
    // such code is executed in the same order of its modifier
    // they could add new properties to their options configuration
    // BE AWARE: don't add options to `options.modifiers.name` but to `modifierOptions`!
    this.modifiers.forEach(function (modifierOptions) {
      if (modifierOptions.enabled && isFunction(modifierOptions.onLoad)) {
        modifierOptions.onLoad(_this.reference, _this.popper, _this.options, modifierOptions, _this.state);
      }
    });

    // fire the first update to position the popper in the right place
    this.update();

    var eventsEnabled = this.options.eventsEnabled;
    if (eventsEnabled) {
      // setup event listeners, they will take care of update the position in specific situations
      this.enableEventListeners();
    }

    this.state.eventsEnabled = eventsEnabled;
  }

  // We can't use class properties because they don't get listed in the
  // class prototype and break stuff like Sinon stubs


  createClass(Popper, [{
    key: 'update',
    value: function update$$1() {
      return update.call(this);
    }
  }, {
    key: 'destroy',
    value: function destroy$$1() {
      return destroy.call(this);
    }
  }, {
    key: 'enableEventListeners',
    value: function enableEventListeners$$1() {
      return enableEventListeners.call(this);
    }
  }, {
    key: 'disableEventListeners',
    value: function disableEventListeners$$1() {
      return disableEventListeners.call(this);
    }

    /**
     * Schedule an update, it will run on the next UI update available
     * @method scheduleUpdate
     * @memberof Popper
     */

    /**
     * Collection of utilities useful when writing custom modifiers.
     * Starting from version 1.7, this method is available only if you
     * include `popper-utils.js` before `popper.js`.
     *
     * **DEPRECATION**: This way to access PopperUtils is deprecated
     * and will be removed in v2! Use the PopperUtils module directly instead.
     * Due to the high instability of the methods contained in Utils, we can't
     * guarantee them to follow semver. Use them at your own risk!
     * @static
     * @private
     * @type {Object}
     * @deprecated since version 1.8
     * @member Utils
     * @memberof Popper
     */

  }]);
  return Popper;
}();

/**
 * The `referenceObject` is an object that provides an interface compatible with Popper.js
 * and lets you use it as replacement of a real DOM node.<br />
 * You can use this method to position a popper relatively to a set of coordinates
 * in case you don't have a DOM node to use as reference.
 *
 * ```
 * new Popper(referenceObject, popperNode);
 * ```
 *
 * NB: This feature isn't supported in Internet Explorer 10
 * @name referenceObject
 * @property {Function} data.getBoundingClientRect
 * A function that returns a set of coordinates compatible with the native `getBoundingClientRect` method.
 * @property {number} data.clientWidth
 * An ES6 getter that will return the width of the virtual reference element.
 * @property {number} data.clientHeight
 * An ES6 getter that will return the height of the virtual reference element.
 */

popper_Popper.Utils = (typeof window !== 'undefined' ? window : global).PopperUtils;
popper_Popper.placements = placements;
popper_Popper.Defaults = Defaults;

/* harmony default export */ var esm_popper = (popper_Popper);
//# sourceMappingURL=popper.js.map
// CONCATENATED MODULE: ../node_modules/react-popper/lib/Popper.js
var Popper__extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};

var Popper__createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

function Popper__objectWithoutProperties(obj, keys) {
  var target = {};for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
  }return target;
}

function Popper__classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function Popper__possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function Popper__inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}





var Popper_placements = esm_popper.placements;

var Popper_Popper = function (_Component) {
  Popper__inherits(Popper, _Component);

  function Popper() {
    var _ref;

    var _temp, _this, _ret;

    Popper__classCallCheck(this, Popper);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = Popper__possibleConstructorReturn(this, (_ref = Popper.__proto__ || Object.getPrototypeOf(Popper)).call.apply(_ref, [this].concat(args))), _this), _this.state = {}, _this._setArrowNode = function (node) {
      _this._arrowNode = node;
    }, _this._getTargetNode = function () {
      if (_this.props.target) {
        return _this.props.target;
      } else if (!_this.context.popperManager || !_this.context.popperManager.getTargetNode()) {
        throw new Error('Target missing. Popper must be given a target from the Popper Manager, or as a prop.');
      }
      return _this.context.popperManager.getTargetNode();
    }, _this._getOffsets = function (data) {
      return Object.keys(data.offsets).map(function (key) {
        return data.offsets[key];
      });
    }, _this._isDataDirty = function (data) {
      if (_this.state.data) {
        return JSON.stringify(_this._getOffsets(_this.state.data)) !== JSON.stringify(_this._getOffsets(data));
      } else {
        return true;
      }
    }, _this._updateStateModifier = {
      enabled: true,
      order: 900,
      fn: function fn(data) {
        if (_this._isDataDirty(data)) {
          _this.setState({ data: data });
        }
        return data;
      }
    }, _this._getPopperStyle = function () {
      var data = _this.state.data;

      if (!_this._popper || !data) {
        return {
          position: 'absolute',
          pointerEvents: 'none',
          opacity: 0
        };
      }

      return Popper__extends({
        position: data.offsets.popper.position
      }, data.styles);
    }, _this._getPopperPlacement = function () {
      return _this.state.data ? _this.state.data.placement : undefined;
    }, _this._getPopperHide = function () {
      return !!_this.state.data && _this.state.data.hide ? '' : undefined;
    }, _this._getArrowStyle = function () {
      if (!_this.state.data || !_this.state.data.offsets.arrow) {
        return {};
      } else {
        var _this$state$data$offs = _this.state.data.offsets.arrow,
            top = _this$state$data$offs.top,
            left = _this$state$data$offs.left;

        return { top: top, left: left };
      }
    }, _this._handlePopperRef = function (node) {
      _this._popperNode = node;
      if (node) {
        _this._createPopper();
      } else {
        _this._destroyPopper();
      }
      if (_this.props.innerRef) {
        _this.props.innerRef(node);
      }
    }, _this._scheduleUpdate = function () {
      _this._popper && _this._popper.scheduleUpdate();
    }, _temp), Popper__possibleConstructorReturn(_this, _ret);
  }

  Popper__createClass(Popper, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        popper: {
          setArrowNode: this._setArrowNode,
          getArrowStyle: this._getArrowStyle
        }
      };
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(lastProps) {
      if (lastProps.placement !== this.props.placement || lastProps.eventsEnabled !== this.props.eventsEnabled || lastProps.target !== this.props.target) {
        this._destroyPopper();
        this._createPopper();
      }
      if (lastProps.children !== this.props.children) {
        this._scheduleUpdate();
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this._destroyPopper();
    }
  }, {
    key: '_createPopper',
    value: function _createPopper() {
      var _this2 = this;

      var _props = this.props,
          placement = _props.placement,
          eventsEnabled = _props.eventsEnabled,
          positionFixed = _props.positionFixed;

      var modifiers = Popper__extends({}, this.props.modifiers, {
        applyStyle: { enabled: false },
        updateState: this._updateStateModifier
      });
      if (this._arrowNode) {
        modifiers.arrow = Popper__extends({}, this.props.modifiers.arrow || {}, {
          element: this._arrowNode
        });
      }
      this._popper = new esm_popper(this._getTargetNode(), this._popperNode, {
        placement: placement,
        positionFixed: positionFixed,
        eventsEnabled: eventsEnabled,
        modifiers: modifiers
      });

      // TODO: look into setTimeout scheduleUpdate call, without it, the popper will not position properly on creation
      setTimeout(function () {
        return _this2._scheduleUpdate();
      });
    }
  }, {
    key: '_destroyPopper',
    value: function _destroyPopper() {
      if (this._popper) {
        this._popper.destroy();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          component = _props2.component,
          innerRef = _props2.innerRef,
          placement = _props2.placement,
          eventsEnabled = _props2.eventsEnabled,
          positionFixed = _props2.positionFixed,
          modifiers = _props2.modifiers,
          children = _props2.children,
          restProps = Popper__objectWithoutProperties(_props2, ['component', 'innerRef', 'placement', 'eventsEnabled', 'positionFixed', 'modifiers', 'children']);

      var popperStyle = this._getPopperStyle();
      var popperPlacement = this._getPopperPlacement();
      var popperHide = this._getPopperHide();

      if (typeof children === 'function') {
        var popperProps = {
          ref: this._handlePopperRef,
          style: popperStyle,
          'data-placement': popperPlacement,
          'data-x-out-of-boundaries': popperHide
        };
        return children({
          popperProps: popperProps,
          restProps: restProps,
          scheduleUpdate: this._scheduleUpdate
        });
      }

      var componentProps = Popper__extends({}, restProps, {
        style: Popper__extends({}, restProps.style, popperStyle),
        'data-placement': popperPlacement,
        'data-x-out-of-boundaries': popperHide
      });

      if (typeof component === 'string') {
        componentProps.ref = this._handlePopperRef;
      } else {
        componentProps.innerRef = this._handlePopperRef;
      }

      return Object(preact_compat_es["createElement"])(component, componentProps, children);
    }
  }]);

  return Popper;
}(preact_compat_es["Component"]);

Popper_Popper.contextTypes = {
  popperManager: prop_types_default.a.object
};
Popper_Popper.childContextTypes = {
  popper: prop_types_default.a.object.isRequired
};
Popper_Popper.propTypes = {
  component: prop_types_default.a.oneOfType([prop_types_default.a.node, prop_types_default.a.func]),
  innerRef: prop_types_default.a.func,
  placement: prop_types_default.a.oneOf(Popper_placements),
  eventsEnabled: prop_types_default.a.bool,
  positionFixed: prop_types_default.a.bool,
  modifiers: prop_types_default.a.object,
  children: prop_types_default.a.oneOfType([prop_types_default.a.node, prop_types_default.a.func]),
  target: prop_types_default.a.oneOfType([
  // the following check is needed for SSR
  prop_types_default.a.instanceOf(typeof Element !== 'undefined' ? Element : Object), prop_types_default.a.shape({
    getBoundingClientRect: prop_types_default.a.func.isRequired,
    clientWidth: prop_types_default.a.number.isRequired,
    clientHeight: prop_types_default.a.number.isRequired
  })])
};
Popper_Popper.defaultProps = {
  component: 'div',
  placement: 'bottom',
  eventsEnabled: true,
  positionFixed: false,
  modifiers: {}
};

/* harmony default export */ var lib_Popper = (Popper_Popper);
// CONCATENATED MODULE: ../node_modules/react-popper/lib/Arrow.js
var Arrow__extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};

function Arrow__objectWithoutProperties(obj, keys) {
  var target = {};for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
  }return target;
}




var Arrow_Arrow = function Arrow(props, context) {
  var _props$component = props.component,
      component = _props$component === undefined ? 'span' : _props$component,
      innerRef = props.innerRef,
      children = props.children,
      restProps = Arrow__objectWithoutProperties(props, ['component', 'innerRef', 'children']);

  var popper = context.popper;

  var arrowRef = function arrowRef(node) {
    popper.setArrowNode(node);
    if (typeof innerRef === 'function') {
      innerRef(node);
    }
  };
  var arrowStyle = popper.getArrowStyle();

  if (typeof children === 'function') {
    var arrowProps = {
      ref: arrowRef,
      style: arrowStyle
    };
    return children({ arrowProps: arrowProps, restProps: restProps });
  }

  var componentProps = Arrow__extends({}, restProps, {
    style: Arrow__extends({}, arrowStyle, restProps.style)
  });

  if (typeof component === 'string') {
    componentProps.ref = arrowRef;
  } else {
    componentProps.innerRef = arrowRef;
  }

  return Object(preact_compat_es["createElement"])(component, componentProps, children);
};

Arrow_Arrow.contextTypes = {
  popper: prop_types_default.a.object.isRequired
};

Arrow_Arrow.propTypes = {
  component: prop_types_default.a.oneOfType([prop_types_default.a.node, prop_types_default.a.func]),
  innerRef: prop_types_default.a.func,
  children: prop_types_default.a.oneOfType([prop_types_default.a.node, prop_types_default.a.func])
};

/* harmony default export */ var lib_Arrow = (Arrow_Arrow);
// CONCATENATED MODULE: ../node_modules/react-popper/lib/react-popper.js




// EXTERNAL MODULE: ./components/meta/style.scss
var meta_style = __webpack_require__("LGzG");
var meta_style_default = /*#__PURE__*/__webpack_require__.n(meta_style);

// CONCATENATED MODULE: ./components/octicon/index.js


function octicon__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function octicon__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function octicon__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var octicon_Octicon = function (_Component) {
  octicon__inherits(Octicon, _Component);

  function Octicon() {
    var _temp, _this, _ret;

    octicon__classCallCheck(this, Octicon);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = octicon__possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = {
      icon: {}
    }, _temp), octicon__possibleConstructorReturn(_this, _ret);
  }

  Octicon.prototype.componentDidMount = function componentDidMount() {
    var _this2 = this;

    __webpack_require__("KvKk")("./" + this.props.name + '.svg').then(function (icon) {
      _this2.setState({
        icon: icon
      });
    });
  };

  Octicon.prototype.render = function render(props, state) {
    // inline svg as react component
    return Object(preact_min["h"])(state.icon.ReactComponent, props);
  };

  return Octicon;
}(preact_min["Component"]);

/* harmony default export */ var octicon = (octicon_Octicon);
// EXTERNAL MODULE: ../node_modules/react-autolink/dist/react-autolink.js
var react_autolink = __webpack_require__("7f45");
var react_autolink_default = /*#__PURE__*/__webpack_require__.n(react_autolink);

// EXTERNAL MODULE: ../node_modules/lodash.truncate/index.js
var lodash_truncate = __webpack_require__("2JuF");
var lodash_truncate_default = /*#__PURE__*/__webpack_require__.n(lodash_truncate);

// CONCATENATED MODULE: ./components/meta/index.js


function meta__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function meta__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function meta__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }










var meta_Meta = function (_Component) {
  meta__inherits(Meta, _Component);

  function Meta(props, context) {
    meta__classCallCheck(this, Meta);

    var _this = meta__possibleConstructorReturn(this, _Component.call(this, props, context));

    _this.handleEditButton = _this.handleEditButton.bind(_this);
    return _this;
  }

  Meta.prototype.handleEditButton = function handleEditButton(event) {
    event.preventDefault();
    var meta = this.props.video.meta;

    Object(preact_router_es["route"])('/' + meta.id + '/' + meta.slug + '/edit');
  };

  Meta.prototype.render = function render(props) {
    var showTitle = props.showTitle,
        showPath = props.showPath,
        video = props.video;

    var meta = video.meta;
    return Object(preact_min["h"])(
      'div',
      { className: meta_style_default.a.meta },
      showPath && Object(preact_min["h"])(
        'div',
        { className: meta_style_default.a.path },
        video.path.map(function (folder, j) {
          return Object(preact_min["h"])(
            'span',
            { key: 'folder' + j },
            folder,
            video.path.length === j + 1 ? '' : ' / '
          );
        })
      ),
      showTitle && Object(preact_min["h"])(
        'h1',
        null,
        meta.title
      ),
      Object(preact_min["h"])(
        'div',
        { className: meta_style_default.a.people },
        meta.people.length > 0 && Object(preact_min["h"])(octicon, { name: 'person', className: meta_style_default.a.icon }),
        meta.people.map(function (person, j) {
          return Object(preact_min["h"])(
            'span',
            { key: 'person' + j },
            Object(preact_min["h"])(
              match["Link"],
              {
                href: '/search/' + encodeURIComponent(person),
                className: meta_style_default.a.person
              },
              person
            ),
            meta.people.length === j + 1 ? '' : ', '
          );
        })
      ),
      Object(preact_min["h"])(
        'div',
        { className: meta_style_default.a.tags },
        meta.tags.map(function (tag, i) {
          return Object(preact_min["h"])(
            match["Link"],
            {
              key: 'tag' + i,
              href: '/search/' + encodeURIComponent(tag),
              className: meta_style_default.a.tag
            },
            tag
          );
        })
      ),
      Object(preact_min["h"])(
        'div',
        { className: meta_style_default.a.description },
        react_autolink_default.a.autolink(props.limitDescription ? lodash_truncate_default()(meta.description, {
          length: props.limitDescription,
          separator: ' '
        }) : meta.description)
      ),
      showTitle && Object(preact_min["h"])(
        'button',
        { className: meta_style_default.a.editButton, onClick: this.handleEditButton },
        Object(preact_min["h"])(octicon, { name: 'pencil', className: meta_style_default.a.icon }),
        'Edit'
      )
    );
  };

  return Meta;
}(preact_min["Component"]);


// CONCATENATED MODULE: ./components/videoLink/index.js


function videoLink__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function videoLink__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function videoLink__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








var videoLink_VideoLink = function (_Component) {
  videoLink__inherits(VideoLink, _Component);

  function VideoLink() {
    var _temp, _this, _ret;

    videoLink__classCallCheck(this, VideoLink);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = videoLink__possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = {
      tooltipLinkHovered: false,
      popperHovered: false,
      showTooltip: false
    }, _this.toggleLinkHoverState = function () {
      var tooltipLinkHovered = !_this.state.tooltipLinkHovered;
      _this.setState({ tooltipLinkHovered: tooltipLinkHovered }, _this.showOrHideTooltip);
    }, _this.togglePopperHoverState = function () {
      var popperHovered = !_this.state.popperHovered;
      _this.setState({ popperHovered: popperHovered }, _this.showOrHideTooltip);
    }, _this.metaHasContent = function () {
      var meta = _this.props.video.meta;

      return meta && (meta.description.trim() || meta.people.length > 0);
    }, _temp), videoLink__possibleConstructorReturn(_this, _ret);
  }

  VideoLink.prototype.showOrHideTooltip = function showOrHideTooltip() {
    var _this2 = this;

    clearTimeout(this.timer);
    this.setState({ showTooltip: true });
    this.timer = setTimeout(function () {
      if (!_this2.state.tooltipLinkHovered && !_this2.state.popperHovered) {
        _this2.setState({ showTooltip: false });
      }
    }, 300);
  };

  VideoLink.prototype.render = function render(props, state) {
    var meta = props.video.meta;

    return Object(preact_min["h"])(
      'li',
      { className: videoLink_style_default.a.video },
      Object(preact_min["h"])(
        lib_Manager,
        null,
        Object(preact_min["h"])(
          lib_Target,
          { className: videoLink_style_default.a.videoLink },
          Object(preact_min["h"])(
            match["Link"],
            {
              onMouseOver: this.toggleLinkHoverState,
              onMouseLeave: this.toggleLinkHoverState,
              href: '/' + meta.id + '/' + meta.slug,
              activeClassName: videoLink_style_default.a.active
            },
            meta.title
          )
        ),
        state.showTooltip && this.metaHasContent() && Object(preact_min["h"])(
          videoLink_TopPopper,
          {
            placement: 'right',
            className: videoLink_style_default.a.popper,
            onMouseEnter: this.togglePopperHoverState,
            onMouseLeave: this.togglePopperHoverState,
            modifiers: {
              flip: {
                behavior: ['right', 'left', 'bottom', 'top']
              },
              preventOverflow: {
                boundariesElement: 'viewport'
              }
            }
          },
          Object(preact_min["h"])(meta_Meta, { video: props.video, limitDescription: '250' }),
          Object(preact_min["h"])(lib_Arrow, { className: videoLink_style_default.a.popperarrow })
        )
      )
    );
  };

  return VideoLink;
}(preact_min["Component"]);

// extending Popper so every new popper will have a higher zIndex




var videoLink_TopPopper = function (_Component2) {
  videoLink__inherits(TopPopper, _Component2);

  function TopPopper() {
    videoLink__classCallCheck(this, TopPopper);

    return videoLink__possibleConstructorReturn(this, _Component2.apply(this, arguments));
  }

  TopPopper.prototype.componentWillMount = function componentWillMount() {
    this.props.style = {
      zIndex: Date.now()
    };
  };

  TopPopper.prototype.render = function render(props) {
    return Object(preact_min["h"])(
      lib_Popper,
      props,
      props.children
    );
  };

  return TopPopper;
}(preact_min["Component"]);
// EXTERNAL MODULE: ./components/folder/style.scss
var folder_style = __webpack_require__("dwON");
var folder_style_default = /*#__PURE__*/__webpack_require__.n(folder_style);

// CONCATENATED MODULE: ./components/folder/index.js


function folder__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function folder__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function folder__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var folder_Folder = function (_Component) {
  folder__inherits(Folder, _Component);

  function Folder() {
    folder__classCallCheck(this, Folder);

    return folder__possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  Folder.prototype.render = function render(props) {
    var data = props.data;

    // render multiple folders

    if (Array.isArray(data)) {
      var items = data.map(function (singleFolder, i) {
        return Object(preact_min["h"])(Folder, { key: 'folder' + i, data: singleFolder });
      });
      return Object(preact_min["h"])(
        'ul',
        null,
        items
      );
    }

    // get out if no data
    if (!data || Object.keys(data).length === 0) {
      return null;
    }

    if (data.type === 'video') {
      return Object(preact_min["h"])(videoLink_VideoLink, { video: data });
    } else {
      return Object(preact_min["h"])(
        'li',
        { className: folder_style_default.a.parent },
        Object(preact_min["h"])(
          'span',
          { className: folder_style_default.a.title },
          data.meta && data.meta.title
        ),
        data.items && Object(preact_min["h"])(Folder, { data: data.items })
      );
    }
  };

  return Folder;
}(preact_min["Component"]);


// EXTERNAL MODULE: ./components/videoPlayer/style.scss
var videoPlayer_style = __webpack_require__("5GlD");
var videoPlayer_style_default = /*#__PURE__*/__webpack_require__.n(videoPlayer_style);

// EXTERNAL MODULE: ../node_modules/unistore/preact.js
var preact = __webpack_require__("o6ac");
var preact_default = /*#__PURE__*/__webpack_require__.n(preact);

// CONCATENATED MODULE: ./components/videoPlayer/actions.js
var actions__extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var actions = function actions() {
  return {
    setActiveVideoTime: function setActiveVideoTime(state, currentTimestamp, currentTime) {
      return {
        activeVideo: actions__extends({}, state.activeVideo, {
          currentTimestamp: currentTimestamp,
          currentTime: currentTime
        })
      };
    }
  };
};

/* harmony default export */ var videoPlayer_actions = (actions);
// EXTERNAL MODULE: ./components/shareLink/style.scss
var shareLink_style = __webpack_require__("elp1");
var shareLink_style_default = /*#__PURE__*/__webpack_require__.n(shareLink_style);

// EXTERNAL MODULE: ../node_modules/react-copy/build/index.js
var build = __webpack_require__("K02I");
var build_default = /*#__PURE__*/__webpack_require__.n(build);

// CONCATENATED MODULE: ../node_modules/preact-cli/lib/lib/webpack/dummy-loader.js!./components/shareLink/index.js
var shareLink__createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



function shareLink__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function shareLink__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function shareLink__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }









var shareLink_ShareLink = function (_Component) {
  shareLink__inherits(ShareLink, _Component);

  function ShareLink() {
    var _temp, _this, _ret;

    shareLink__classCallCheck(this, ShareLink);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = shareLink__possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = {
      shareTimeActive: false
    }, _this.togglePanel = function () {
      _this.setState({ sharePanelActive: !_this.state.sharePanelActive });
    }, _this.onChangeSharetime = function () {
      _this.setState({ shareTimeActive: !_this.state.shareTimeActive });
    }, _temp), shareLink__possibleConstructorReturn(_this, _ret);
  }

  /** Replace url parameter
   *  https://stackoverflow.com/a/20420424/1312073
   */
  ShareLink.prototype.replaceUrlParam = function replaceUrlParam(url, paramName, paramValue) {
    if (paramValue == null) {
      paramValue = '';
    }
    var pattern = new RegExp('\\b(' + paramName + '=).*?(&|$)');
    if (url.search(pattern) >= 0) {
      return url.replace(pattern, '$1' + paramValue + '$2');
    }
    url = url.replace(/\?$/, '');
    return url + (url.indexOf('?') > 0 ? '&' : '?') + paramName + '=' + paramValue;
  };

  ShareLink.prototype.render = function render(props, state) {
    return Object(preact_min["h"])(
      'div',
      { className: shareLink_style_default.a.shareContainer },
      Object(preact_min["h"])(
        build_default.a,
        {
          textToBeCopied: this.shareLink,
          onCopied: this.onCopied,
          className: shareLink_style_default.a.shareText
        },
        Object(preact_min["h"])(
          'button',
          { className: shareLink_style_default.a.shareButton },
          Object(preact_min["h"])(
            'span',
            null,
            Object(preact_min["h"])(octicon, { name: 'link', className: shareLink_style_default.a.icon }),
            ' Copy Link'
          )
        )
      ),
      Object(preact_min["h"])(
        'div',
        { className: shareLink_style_default.a.shareTime },
        Object(preact_min["h"])('input', {
          onChange: this.onChangeSharetime,
          checked: state.shareTimeActive,
          type: 'checkbox',
          id: 'sharetime'
        }),
        Object(preact_min["h"])(
          'label',
          { htmlFor: 'sharetime' },
          ' ',
          'share at',
          Object(preact_min["h"])(
            'span',
            { className: 'currenttime' },
            ' ' + props.activeVideo.currentTimestamp
          )
        )
      )
    );
  };

  shareLink__createClass(ShareLink, [{
    key: 'shareLink',
    get: function get() {
      var _props$activeVideo = this.props.activeVideo,
          currentTimestamp = _props$activeVideo.currentTimestamp,
          href = _props$activeVideo.href;


      if (this.state.shareTimeActive) {
        return this.replaceUrlParam(href, 't', currentTimestamp);
      }
      return href;
    }
  }]);

  return ShareLink;
}(preact_min["Component"]);

var mapStateToProps = function mapStateToProps(_ref) {
  var activeVideo = _ref.activeVideo;
  return {
    activeVideo: activeVideo
  };
};

/* harmony default export */ var shareLink = (Object(preact["connect"])(mapStateToProps)(shareLink_ShareLink));
// CONCATENATED MODULE: ./components/videoPlayer/index.js
var videoPlayer__createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



function videoPlayer__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function videoPlayer__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function videoPlayer__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








var videoPlayer_VideoPlayer = function (_Component) {
  videoPlayer__inherits(VideoPlayer, _Component);

  function VideoPlayer() {
    var _temp, _this, _ret;

    videoPlayer__classCallCheck(this, VideoPlayer);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = videoPlayer__possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = {
      isPaused: false,
      isFullscreen: false
    }, _this.onTimeUpdate = function (event) {
      var currentTime = Math.floor(event.target.currentTime);
      _this.props.setActiveVideoTime(_this.calculateTimestamp(currentTime), currentTime);
    }, _this.onPlay = function () {
      _this.setState({ isPaused: false });
    }, _this.onPause = function (event) {
      if (!event.target.seeking) {
        _this.setState({ isPaused: true });
      }
    }, _this.handleFullScreenChange = function () {
      if (document && (document.fullscreen || document.webkitIsFullScreen || document.mozFullScreen)) {
        _this.setState({ isFullscreen: true });
      } else {
        _this.setState({ isFullscreen: false });
      }
    }, _temp), videoPlayer__possibleConstructorReturn(_this, _ret);
  }

  /**
   * Get the timestamp from seconds
   * e.g. 14m44s to 884
   *
   * @return {integer} time in seconds, e.g. 884
   */
  VideoPlayer.prototype.calculateTimestamp = function calculateTimestamp(time) {
    var secondsNumber = parseInt(time, 10);
    var hours = Math.floor(secondsNumber / 3600);
    var minutes = Math.floor((secondsNumber - hours * 3600) / 60);
    var seconds = secondsNumber - hours * 3600 - minutes * 60;

    var timestamp = '';
    if (hours > 0) {
      timestamp += hours + 'h';
    }
    if (minutes > 0) {
      timestamp += minutes + 'm';
    }
    if (seconds >= 0) {
      timestamp += seconds + 's';
    }
    return timestamp;
  };

  /**
   * Sets currentTime for a video, in this case the start time
   * It takes a time string like "1m21s" and converts it to an integer, e.g. 81
   *
   * @return {string} startTimestamp in youtube time format, e.g. 14m44s
   */


  VideoPlayer.prototype.componentDidUpdate = function componentDidUpdate() {
    if (this.props.activeVideo.currentTime === undefined) {
      // make sure currentTime gets calculated on update
      if (this.props.setActiveVideoTime && this.videoElement) {
        var currentTime = this.videoElement.currentTime;
        this.props.setActiveVideoTime(this.calculateTimestamp(currentTime), currentTime);
      }
    }
  };

  VideoPlayer.prototype.render = function render(props) {
    var _this2 = this;

    var bgImageStyle = this.state.isFullscreen ? '' : 'background-image: url(' + "/assets/" + 'FuBK_testcard_vectorized.svg)';

    return Object(preact_min["h"])(
      'div',
      { className: props.className },
      Object(preact_min["h"])(
        'div',
        { className: videoPlayer_style_default.a.sizer },
        props.activeVideo.src ? Object(preact_min["h"])('video', {
          ref: function ref(video) {
            return _this2.videoElement = video;
          },
          className: videoPlayer_style_default.a.video,
          controls: true,
          autoPlay: true,
          src: props.activeVideo.src,
          style: bgImageStyle,
          currentTime: this.startTime,
          onTimeUpdate: this.onTimeUpdate,
          onPause: this.onPause,
          onPlay: this.onPlay,
          onwebkitfullscreenchange: this.handleFullScreenChange,
          onmozfullscreenchange: this.handleFullScreenChange
        }) : Object(preact_min["h"])('div', { className: videoPlayer_style_default.a.poster, style: bgImageStyle }),
        this.state.isPaused && Object(preact_min["h"])(shareLink, { className: videoPlayer_style_default.a.shareButton })
      )
    );
  };

  videoPlayer__createClass(VideoPlayer, [{
    key: 'startTime',
    get: function get() {
      if (!this.props.activeVideo.startTimestamp) {
        return '0s';
      }
      var match = this.props.activeVideo.startTimestamp.match(/(\d+h)?(\d+m)?(\d+s)?/i);

      var matches = match.slice(1).map(function (x) {
        if (x != null) {
          return x.replace(/\D/, '');
        }
      });

      var hours = parseInt(matches[0]) || 0;
      var minutes = parseInt(matches[1]) || 0;
      var seconds = parseInt(matches[2]) || 0;

      return hours * 3600 + minutes * 60 + seconds;
    }
  }]);

  return VideoPlayer;
}(preact_min["Component"]);

var videoPlayer_mapStateToProps = function mapStateToProps(_ref) {
  var activeVideo = _ref.activeVideo;
  return { activeVideo: activeVideo };
};

/* harmony default export */ var videoPlayer = (Object(preact["connect"])(videoPlayer_mapStateToProps, videoPlayer_actions)(videoPlayer_VideoPlayer));
// EXTERNAL MODULE: ./components/metaEditable/style.scss
var metaEditable_style = __webpack_require__("NHdN");
var metaEditable_style_default = /*#__PURE__*/__webpack_require__.n(metaEditable_style);

// EXTERNAL MODULE: ./components/tagsEditable/style.scss
var tagsEditable_style = __webpack_require__("ABCk");
var tagsEditable_style_default = /*#__PURE__*/__webpack_require__.n(tagsEditable_style);

// EXTERNAL MODULE: ../node_modules/react-tag-autocomplete/dist-es5/ReactTags.js
var ReactTags = __webpack_require__("7Iqb");
var ReactTags_default = /*#__PURE__*/__webpack_require__.n(ReactTags);

// CONCATENATED MODULE: ./components/tagsEditable/index.js


function tagsEditable__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function tagsEditable__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function tagsEditable__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var tagsEditable_TagsEditable = function (_Component) {
  tagsEditable__inherits(TagsEditable, _Component);

  function TagsEditable(props, context) {
    tagsEditable__classCallCheck(this, TagsEditable);

    var _this = tagsEditable__possibleConstructorReturn(this, _Component.call(this, props, context));

    _this.handleTagDelete = _this.handleTagDelete.bind(_this);
    _this.handleTagAddition = _this.handleTagAddition.bind(_this);
    _this.handleBlur = _this.handleBlur.bind(_this);

    _this.state = {
      tags: props.tags.map(function (tag) {
        return { id: null, name: tag };
      }),
      suggestions: props.suggestions.map(function (tag) {
        return { id: null, name: tag };
      })
    };
    return _this;
  }

  TagsEditable.prototype.handleTagDelete = function handleTagDelete(i) {
    var state = this.state,
        props = this.props;


    this.setState(function (prevState) {
      var tags = prevState.tags.slice(0);
      tags.splice(i, 1);
      return { tags: tags };
    }, function () {
      if (typeof props.onChange === 'function') {
        props.onChange(state.tags.map(function (tag) {
          return tag.name;
        }));
      }
    });
  };

  TagsEditable.prototype.handleBlur = function handleBlur() {
    var e = new Event('keydown', {
      bubbles: true,
      cancelable: true
    });

    // keyCode is deprecated but key doesn't work yet, so we keep both
    e.keyCode = 13;
    e.key = 'Enter';

    this.ref.input.input.dispatchEvent(e);
  };

  TagsEditable.prototype.handleTagAddition = function handleTagAddition(tag) {
    var state = this.state,
        props = this.props;


    this.setState(function (prevState) {
      // remove leading or trailing whitespaces
      tag.name = tag.name.trim();

      //TODO: for existing tags, the suggestion object could have the property "disabled=true", see https://www.npmjs.com/package/react-tag-autocomplete#suggestions-optional
      //TODO: prevent duplicates and make all tags lowercase?
      var tags = [].concat(prevState.tags, tag);
      return { tags: tags };
    }, function () {
      if (typeof props.onChange === 'function') {
        props.onChange(state.tags.map(function (tag) {
          return tag.name;
        }));
      }
    });
  };

  TagsEditable.prototype.render = function render(props) {
    var _this2 = this;

    // TODO nicer style classes
    var classNames = {
      root: tagsEditable_style_default.a['react-tags'],
      rootFocused: tagsEditable_style_default.a['is-focused'],
      selected: tagsEditable_style_default.a['react-tags__selected'],
      selectedTag: tagsEditable_style_default.a['react-tags__selected-tag'] + (props.classNames.selectedTag ? ' ' + props.classNames.selectedTag : ''),
      selectedTagName: tagsEditable_style_default.a['react-tags__selected-tag-name'] + (props.classNames.selectedTagName ? ' ' + props.classNames.selectedTagName : ''),
      search: tagsEditable_style_default.a['react-tags__search'],
      searchInput: tagsEditable_style_default.a['react-tags__search-input'],
      suggestions: tagsEditable_style_default.a['react-tags__suggestions'],
      suggestionActive: tagsEditable_style_default.a['is-active']
    };

    return Object(preact_min["h"])(ReactTags_default.a, {
      ref: function ref(element) {
        return _this2.ref = element;
      },
      tags: this.state.tags,
      suggestions: this.state.suggestions,
      allowNew: true,
      autofocus: false,
      handleBlur: this.handleBlur,
      handleDelete: this.handleTagDelete,
      handleAddition: this.handleTagAddition,
      classNames: classNames,
      placeholder: props.placeholder,
      delimiterChars: [',']
    });
  };

  return TagsEditable;
}(preact_min["Component"]);


// EXTERNAL MODULE: ./components/inlineEditor/style.scss
var inlineEditor_style = __webpack_require__("Fciz");
var inlineEditor_style_default = /*#__PURE__*/__webpack_require__.n(inlineEditor_style);

// CONCATENATED MODULE: ../node_modules/react-textarea-autosize/es/index.js



function es__extends() {
  es__extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return es__extends.apply(this, arguments);
}

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

function es__objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

var es_isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined';

var es_isIE = es_isBrowser ? !!document.documentElement.currentStyle : false;
var hiddenTextarea = es_isBrowser && document.createElement('textarea');
var HIDDEN_TEXTAREA_STYLE = {
  'min-height': '0',
  'max-height': 'none',
  height: '0',
  visibility: 'hidden',
  overflow: 'hidden',
  position: 'absolute',
  'z-index': '-1000',
  top: '0',
  right: '0'
};
var SIZING_STYLE = ['letter-spacing', 'line-height', 'font-family', 'font-weight', 'font-size', 'font-style', 'tab-size', 'text-rendering', 'text-transform', 'width', 'text-indent', 'padding-top', 'padding-right', 'padding-bottom', 'padding-left', 'border-top-width', 'border-right-width', 'border-bottom-width', 'border-left-width', 'box-sizing'];
var computedStyleCache = {};
function calculateNodeHeight(uiTextNode, uid, useCache, minRows, maxRows) {
  if (useCache === void 0) {
    useCache = false;
  }

  if (minRows === void 0) {
    minRows = null;
  }

  if (maxRows === void 0) {
    maxRows = null;
  }

  if (hiddenTextarea.parentNode === null) {
    document.body.appendChild(hiddenTextarea);
  } // Copy all CSS properties that have an impact on the height of the content in
  // the textbox


  var nodeStyling = calculateNodeStyling(uiTextNode, uid, useCache);

  if (nodeStyling === null) {
    return null;
  }

  var paddingSize = nodeStyling.paddingSize,
      borderSize = nodeStyling.borderSize,
      boxSizing = nodeStyling.boxSizing,
      sizingStyle = nodeStyling.sizingStyle; // Need to have the overflow attribute to hide the scrollbar otherwise
  // text-lines will not calculated properly as the shadow will technically be
  // narrower for content

  Object.keys(sizingStyle).forEach(function (key) {
    hiddenTextarea.style[key] = sizingStyle[key];
  });
  Object.keys(HIDDEN_TEXTAREA_STYLE).forEach(function (key) {
    hiddenTextarea.style.setProperty(key, HIDDEN_TEXTAREA_STYLE[key], 'important');
  });
  hiddenTextarea.value = uiTextNode.value || uiTextNode.placeholder || 'x';
  var minHeight = -Infinity;
  var maxHeight = Infinity;
  var height = hiddenTextarea.scrollHeight;

  if (boxSizing === 'border-box') {
    // border-box: add border, since height = content + padding + border
    height = height + borderSize;
  } else if (boxSizing === 'content-box') {
    // remove padding, since height = content
    height = height - paddingSize;
  } // measure height of a textarea with a single row


  hiddenTextarea.value = 'x';
  var singleRowHeight = hiddenTextarea.scrollHeight - paddingSize;

  if (minRows !== null || maxRows !== null) {
    if (minRows !== null) {
      minHeight = singleRowHeight * minRows;

      if (boxSizing === 'border-box') {
        minHeight = minHeight + paddingSize + borderSize;
      }

      height = Math.max(minHeight, height);
    }

    if (maxRows !== null) {
      maxHeight = singleRowHeight * maxRows;

      if (boxSizing === 'border-box') {
        maxHeight = maxHeight + paddingSize + borderSize;
      }

      height = Math.min(maxHeight, height);
    }
  }

  var rowCount = Math.floor(height / singleRowHeight);
  return {
    height: height,
    minHeight: minHeight,
    maxHeight: maxHeight,
    rowCount: rowCount
  };
}

function calculateNodeStyling(node, uid, useCache) {
  if (useCache === void 0) {
    useCache = false;
  }

  if (useCache && computedStyleCache[uid]) {
    return computedStyleCache[uid];
  }

  var style = window.getComputedStyle(node);

  if (style === null) {
    return null;
  }

  var sizingStyle = SIZING_STYLE.reduce(function (obj, name) {
    obj[name] = style.getPropertyValue(name);
    return obj;
  }, {});
  var boxSizing = sizingStyle['box-sizing']; // IE (Edge has already correct behaviour) returns content width as computed width
  // so we need to add manually padding and border widths

  if (es_isIE && boxSizing === 'border-box') {
    sizingStyle.width = parseFloat(sizingStyle.width) + parseFloat(style['border-right-width']) + parseFloat(style['border-left-width']) + parseFloat(style['padding-right']) + parseFloat(style['padding-left']) + 'px';
  }

  var paddingSize = parseFloat(sizingStyle['padding-bottom']) + parseFloat(sizingStyle['padding-top']);
  var borderSize = parseFloat(sizingStyle['border-bottom-width']) + parseFloat(sizingStyle['border-top-width']);
  var nodeInfo = {
    sizingStyle: sizingStyle,
    paddingSize: paddingSize,
    borderSize: borderSize,
    boxSizing: boxSizing
  };

  if (useCache) {
    computedStyleCache[uid] = nodeInfo;
  }

  return nodeInfo;
}

var purgeCache = function purgeCache(uid) {
  return delete computedStyleCache[uid];
};

function autoInc(seed) {
  if (seed === void 0) {
    seed = 0;
  }

  return function () {
    return ++seed;
  };
}

var uid = autoInc();

/**
 * <TextareaAutosize />
 */
var noop = function noop() {}; // IE11 has a problem with eval source maps, can be reproduced with:
// eval('"use strict"; var onNextFrame = window.cancelAnimationFrame; onNextFrame(4);')
// so we bind window as context in dev modes


var _ref = es_isBrowser && window.requestAnimationFrame ?  true ? [window.requestAnimationFrame, window.cancelAnimationFrame] : [window.requestAnimationFrame.bind(window), window.cancelAnimationFrame.bind(window)] : [setTimeout, clearTimeout];
var onNextFrame = _ref[0];
var clearNextFrameAction = _ref[1];

var es_TextareaAutosize =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(TextareaAutosize, _React$Component);

  function TextareaAutosize(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;
    _this._resizeLock = false;

    _this._onRootDOMNode = function (node) {
      _this._rootDOMNode = node;

      if (_this.props.inputRef) {
        _this.props.inputRef(node);
      }
    };

    _this._onChange = function (event) {
      if (!_this._controlled) {
        _this._resizeComponent();
      }

      _this.props.onChange(event);
    };

    _this._resizeComponent = function (callback) {
      if (callback === void 0) {
        callback = noop;
      }

      if (typeof _this._rootDOMNode === 'undefined') {
        callback();
        return;
      }

      var nodeHeight = calculateNodeHeight(_this._rootDOMNode, _this._uid, _this.props.useCacheForDOMMeasurements, _this.props.minRows, _this.props.maxRows);

      if (nodeHeight === null) {
        callback();
        return;
      }

      var height = nodeHeight.height,
          minHeight = nodeHeight.minHeight,
          maxHeight = nodeHeight.maxHeight,
          rowCount = nodeHeight.rowCount;
      _this.rowCount = rowCount;

      if (_this.state.height !== height || _this.state.minHeight !== minHeight || _this.state.maxHeight !== maxHeight) {
        _this.setState({
          height: height,
          minHeight: minHeight,
          maxHeight: maxHeight
        }, callback);

        return;
      }

      callback();
    };

    _this.state = {
      height: props.style && props.style.height || 0,
      minHeight: -Infinity,
      maxHeight: Infinity
    };
    _this._uid = uid();
    _this._controlled = typeof props.value === 'string';
    return _this;
  }

  var _proto = TextareaAutosize.prototype;

  _proto.render = function render() {
    var _props = this.props,
        _minRows = _props.minRows,
        _maxRows = _props.maxRows,
        _onHeightChange = _props.onHeightChange,
        _useCacheForDOMMeasurements = _props.useCacheForDOMMeasurements,
        _inputRef = _props.inputRef,
        props = es__objectWithoutProperties(_props, ["minRows", "maxRows", "onHeightChange", "useCacheForDOMMeasurements", "inputRef"]);
    props.style = es__extends({}, props.style, {
      height: this.state.height
    });
    var maxHeight = Math.max(props.style.maxHeight || Infinity, this.state.maxHeight);

    if (maxHeight < this.state.height) {
      props.style.overflow = 'hidden';
    }

    return preact_compat_es["default"].createElement("textarea", es__extends({}, props, {
      onChange: this._onChange,
      ref: this._onRootDOMNode
    }));
  };

  _proto.componentDidMount = function componentDidMount() {
    var _this2 = this;

    this._resizeComponent(); // Working around Firefox bug which runs resize listeners even when other JS is running at the same moment
    // causing competing rerenders (due to setState in the listener) in React.
    // More can be found here - facebook/react#6324


    this._resizeListener = function () {
      if (_this2._resizeLock) {
        return;
      }

      _this2._resizeLock = true;

      _this2._resizeComponent(function () {
        return _this2._resizeLock = false;
      });
    };

    window.addEventListener('resize', this._resizeListener);
  };

  _proto.componentWillReceiveProps = function componentWillReceiveProps() {
    var _this3 = this;

    this._clearNextFrame();

    this._onNextFrameActionId = onNextFrame(function () {
      return _this3._resizeComponent();
    });
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {
    if (this.state.height !== prevState.height) {
      this.props.onHeightChange(this.state.height, this);
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this._clearNextFrame();

    window.removeEventListener('resize', this._resizeListener);
    purgeCache(this._uid);
  };

  _proto._clearNextFrame = function _clearNextFrame() {
    clearNextFrameAction(this._onNextFrameActionId);
  };

  return TextareaAutosize;
}(preact_compat_es["default"].Component);

es_TextareaAutosize.defaultProps = {
  onChange: noop,
  onHeightChange: noop,
  useCacheForDOMMeasurements: false
};

/* harmony default export */ var es = (es_TextareaAutosize);
// CONCATENATED MODULE: ./components/inlineEditor/index.js
var inlineEditor__extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };



function inlineEditor__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function inlineEditor__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function inlineEditor__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var inlineEditor_InlineEditor = function (_Component) {
  inlineEditor__inherits(InlineEditor, _Component);

  function InlineEditor(props, context) {
    inlineEditor__classCallCheck(this, InlineEditor);

    var _this = inlineEditor__possibleConstructorReturn(this, _Component.call(this, props, context));

    _this.handleChange = _this.handleChange.bind(_this);
    _this.handleKeyDown = _this.handleKeyDown.bind(_this);
    return _this;
  }

  InlineEditor.prototype.handleKeyDown = function handleKeyDown(event) {
    if (event.keyCode === 13) {
      event.preventDefault();
    }
  };

  InlineEditor.prototype.handleChange = function handleChange(event) {
    // remove all line breaks
    var value = event.target.value.replace(/(\r\n|\n|\r)/gm, '');
    if (this.props.onChange) {
      this.props.onChange(value);
    }
  };

  InlineEditor.prototype.render = function render(props) {
    return Object(preact_min["h"])(es, inlineEditor__extends({}, props, {
      className: inlineEditor_style_default.a.textarea,
      onChange: this.handleChange,
      onKeyDown: this.handleKeyDown,
      useCacheForDOMMeasurements: true
    }));
  };

  return InlineEditor;
}(preact_min["Component"]);


// CONCATENATED MODULE: ../node_modules/tree-crawl/lib/internal/context.js
/**
 * A traversal context.
 *
 * Four operations are available. Note that depending on the traversal order, some operations have
 * no effects.
 *
 * @param {Flags} flags
 * @param {Cursor} cursor
 */
function Context(flags, cursor) {
  this.flags = flags;
  this.cursor = cursor;
}

Context.prototype = {
  /**
   * Skip current node, children won't be visited.
   *
   * @example
   * crawl(root, (node, context) => {
   *   if ('foo' === node.type) {
   *     context.skip()
   *   }
   * })
   */
  skip: function skip() {
    this.flags.skip = true;
  },


  /**
   * Stop traversal now.
   *
   * @example
   * crawl(root, (node, context) => {
   *   if ('foo' === node.type) {
   *     context.break()
   *   }
   * })
   */
  break: function _break() {
    this.flags.break = true;
  },


  /**
   * Notifies that the current node has been removed, children won't be visited.
   *
   * Because `tree-crawl` has no idea about the intrinsic structure of your tree, you have to
   * remove the node yourself. `Context#remove` only notifies the traversal code that the structure
   * of the tree has changed.
   *
   * @example
   * crawl(root, (node, context) => {
   *   if ('foo' === node.type) {
   *     context.parent.children.splice(context.index, 1)
   *     context.remove()
   *   }
   * })
   */
  remove: function remove() {
    this.flags.remove = true;
  },


  /**
   * Notifies that the current node has been replaced, the new node's children will be visited
   * instead.
   *
   * Because `tree-crawl` has no idea about the intrinsic structure of your tree, you have to
   * replace the node yourself. `Context#replace` notifies the traversal code that the structure of
   * the tree has changed.
   *
   * @param {Object} node Replacement node.
   *
   * @example
   * crawl(root, (node, context) => {
   *   if ('foo' === node.type) {
   *     const node = {
   *       type: 'new node',
   *       children: [
   *         { type: 'new leaf' }
   *       ]
   *     }
   *     context.parent.children[context.index] = node
   *     context.replace(node)
   *   }
   * })
   */
  replace: function replace(node) {
    this.flags.replace = node;
  },


  /**
   * Get the parent of the current node.
   *
   * @return {Object} Parent node.
   */
  get parent() {
    return this.cursor.parent;
  },

  /**
   * Get the **depth** of the current node. The depth is the number of ancestors the current node
   * has.
   *
   * @return {Number} Depth.
   */
  get depth() {
    return this.cursor.depth;
  },

  /**
   * Get the **level** of current node. The level is the number of ancestors+1 the current node has.
   *
   * @return {Number} Level.
   */
  get level() {
    return this.cursor.depth + 1;
  },

  /**
   * Get the index of the current node.
   *
   * @return {Number} Node's index.
   */
  get index() {
    return this.cursor.index;
  }
};

function ContextFactory(flags, cursor) {
  return new Context(flags, cursor);
}
// CONCATENATED MODULE: ../node_modules/tree-crawl/lib/internal/stack.js
function Stack(initial) {
  this.xs = [initial];
  this.top = 0;
}

Stack.prototype = {
  push: function push(x) {
    this.top++;
    if (this.top < this.xs.length) {
      this.xs[this.top] = x;
    } else {
      this.xs.push(x);
    }
  },
  pushArrayReverse: function pushArrayReverse(xs) {
    for (var i = xs.length - 1; i >= 0; i--) {
      this.push(xs[i]);
    }
  },
  pop: function pop() {
    var x = this.peek();
    this.top--;
    return x;
  },
  peek: function peek() {
    return this.xs[this.top];
  },
  isEmpty: function isEmpty() {
    return -1 === this.top;
  }
};

function QueueFactory(initial) {
  return new Stack(initial);
}
// CONCATENATED MODULE: ../node_modules/tree-crawl/lib/internal/dfs-cursor.js


function DfsCursor() {
  this.depth = 0;
  this.stack = QueueFactory({ node: null, index: -1 });
}

DfsCursor.prototype = {
  moveDown: function moveDown(node) {
    this.depth++;
    this.stack.push({ node: node, index: 0 });
  },
  moveUp: function moveUp() {
    this.depth--;
    this.stack.pop();
  },
  moveNext: function moveNext() {
    this.stack.peek().index++;
  },


  get parent() {
    return this.stack.peek().node;
  },

  get index() {
    return this.stack.peek().index;
  }
};

function CursorFactory() {
  return new DfsCursor();
}
// CONCATENATED MODULE: ../node_modules/tree-crawl/lib/internal/flags.js
function Flags() {
  // perf: explicit hidden class, do not call reset
  this.break = false;
  this.skip = false;
  this.remove = false;
  this.replace = null;
}

Flags.prototype = {
  reset: function reset() {
    this.break = false;
    this.skip = false;
    this.remove = false;
    this.replace = null;
  }
};

function FlagsFactory() {
  return new Flags();
}
// CONCATENATED MODULE: ../node_modules/tree-crawl/lib/internal/util.js
function isNotEmpty(xs) {
  return xs && 0 !== xs.length;
}
// CONCATENATED MODULE: ../node_modules/tree-crawl/lib/dfs-pre.js
var dfs_pre__extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };







function dfsPre(root, iteratee, getChildren) {
  var flags = FlagsFactory();
  var cursor = CursorFactory();
  var context = ContextFactory(flags, cursor);
  var stack = QueueFactory(root);

  // perf: use same hidden class than root node in order to
  // keep the stack monomorphic
  var dummy = dfs_pre__extends({}, root);

  while (!stack.isEmpty()) {
    var node = stack.pop();

    if (node === dummy) {
      cursor.moveUp();
      continue;
    }

    flags.reset();

    iteratee(node, context);

    if (flags.break) break;
    if (flags.remove) continue;

    cursor.moveNext();

    if (!flags.skip) {
      if (flags.replace) {
        node = flags.replace;
      }

      var children = getChildren(node);
      if (isNotEmpty(children)) {
        stack.push(dummy);
        stack.pushArrayReverse(children);
        cursor.moveDown(node);
      }
    }
  }
}
// CONCATENATED MODULE: ../node_modules/tree-crawl/lib/dfs-post.js






function dfsPost(root, iteratee, getChildren) {
  var flags = FlagsFactory();
  var cursor = CursorFactory();
  var context = ContextFactory(flags, cursor);
  var stack = QueueFactory(root);
  // perf: avoid bounds check deopt when calling Queue#peek later,
  // instead we put an initial value
  var ancestors = QueueFactory(null);

  while (!stack.isEmpty()) {
    var node = stack.peek();
    var parent = ancestors.peek();
    var children = getChildren(node);

    flags.reset();

    if (node === parent || !isNotEmpty(children)) {
      if (node === parent) {
        ancestors.pop();
        cursor.moveUp();
      }

      stack.pop();

      iteratee(node, context);

      if (flags.break) break;
      if (flags.remove) continue;

      cursor.moveNext();
    } else {
      ancestors.push(node);
      cursor.moveDown(node);
      stack.pushArrayReverse(children);
    }
  }
}
// CONCATENATED MODULE: ../node_modules/tree-crawl/lib/internal/queue.js
var THRESHOLD = 32768;

function Queue(initial) {
  this.xs = [initial];
  this.top = 0;
  this.maxLength = 0;
}

Queue.prototype = {
  enqueue: function enqueue(x) {
    this.xs.push(x);
  },
  enqueueMultiple: function enqueueMultiple(xs) {
    for (var i = 0, len = xs.length; i < len; i++) {
      this.enqueue(xs[i]);
    }
  },
  dequeue: function dequeue() {
    var x = this.peek();
    this.top++;
    /* istanbul ignore next */
    if (this.top === THRESHOLD) {
      this.xs = this.xs.slice(this.top);
      this.top = 0;
    }
    return x;
  },
  peek: function peek() {
    return this.xs[this.top];
  },
  isEmpty: function isEmpty() {
    return this.top === this.xs.length;
  }
};

function queue_QueueFactory(initial) {
  return new Queue(initial);
}
// CONCATENATED MODULE: ../node_modules/tree-crawl/lib/internal/bfs-cursor.js


function BfsCursor() {
  this.depth = 0;
  this.index = -1;
  this.queue = queue_QueueFactory({ node: null, arity: 1 });
  this.levelNodes = 1;
  this.nextLevelNodes = 0;
}

BfsCursor.prototype = {
  store: function store(node, arity) {
    this.queue.enqueue({ node: node, arity: arity });
    this.nextLevelNodes += arity;
  },
  moveNext: function moveNext() {
    this.index++;
  },
  moveForward: function moveForward() {
    this.queue.peek().arity--;
    this.levelNodes--;
    if (0 === this.queue.peek().arity) {
      this.index = 0;
      this.queue.dequeue();
    }
    if (0 === this.levelNodes) {
      this.depth++;
      this.levelNodes = this.nextLevelNodes;
      this.nextLevelNodes = 0;
    }
  },


  get parent() {
    return this.queue.peek().node;
  }
};

function bfs_cursor_CursorFactory() {
  return new BfsCursor();
}
// CONCATENATED MODULE: ../node_modules/tree-crawl/lib/bfs.js






function bfs(root, iteratee, getChildren) {
  var flags = FlagsFactory();
  var cursor = bfs_cursor_CursorFactory();
  var context = ContextFactory(flags, cursor);
  var queue = queue_QueueFactory(root);

  while (!queue.isEmpty()) {
    var node = queue.dequeue();

    flags.reset();

    iteratee(node, context);

    if (flags.break) break;

    if (!flags.remove) {
      cursor.moveNext();

      if (flags.replace) {
        node = flags.replace;
      }

      if (!flags.skip) {
        var children = getChildren(node);
        if (isNotEmpty(children)) {
          queue.enqueueMultiple(children);
          cursor.store(node, children.length);
        }
      }
    }

    cursor.moveForward();
  }
}
// CONCATENATED MODULE: ../node_modules/tree-crawl/index.js




/**
 * Walk options.
 *
 * @typedef {Object} Options
 * @property {Function} [getChildren] Return a node's children.
 * @property {'pre'|'post'|'bfs'} [order=pre] Order of the walk either in DFS pre or post order, or
 * BFS.
 *
 * @example <caption>Traverse a DOM tree.</caption>
 * crawl(document.body, doSomeStuff, { getChildren: node => node.childNodes })
 *
 * @example <caption>BFS traversal</caption>
 * crawl(root, doSomeStuff, { order: 'bfs' })
 */

/**
 * Called on each node of the tree.
 * @callback Iteratee
 * @param {Object} node Node being visited.
 * @param {Context} context Traversal context
 * @see [Traversal context](#traversal-context).
 */

var defaultGetChildren = function defaultGetChildren(node) {
  return node.children;
};

/**
 * Walk a tree recursively.
 *
 * By default `getChildren` will return the `children` property of a node.
 *
 * @param {Object} root Root node of the tree to be walked.
 * @param {Iteratee} iteratee Function invoked on each node.
 * @param {Options} [options] Options customizing the walk.
 */
function crawl(root, iteratee, options) {
  if (null == root) return;

  options = options || {};

  // default options
  var order = options.order || 'pre';
  var getChildren = options.getChildren || defaultGetChildren;

  // walk the tree!
  if ('pre' === order) {
    dfsPre(root, iteratee, getChildren);
  } else if ('post' === order) {
    dfsPost(root, iteratee, getChildren);
  } else if ('bfs' === order) {
    bfs(root, iteratee, getChildren);
  }
}
// CONCATENATED MODULE: ./components/metaEditable/actions.js


var actions_actions = function actions(_ref) {
  var setState = _ref.setState;
  return {
    /**
     * Loads the latest meta from server; update client state if it isn't up to date
     */
    getLatestMeta: function getLatestMeta(state) {
      var src = state.activeVideo.src;
      var clientMeta = state.activeVideo.meta;

      fetch(src.replace('video.mp4', 'meta.json'), { cache: 'no-cache' }).then(function (response) {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response.json();
      }).then(function (serverMeta) {
        var isEqual = JSON.stringify({
          title: clientMeta.title,
          description: clientMeta.description,
          tags: clientMeta.tags,
          people: clientMeta.people
        }) === JSON.stringify({
          title: serverMeta.title,
          description: serverMeta.description,
          tags: serverMeta.tags,
          people: serverMeta.people
        });

        if (!isEqual) {
          // something was changed, so update client state to match server
          setState({
            data: actions_setNewMetaInTree(JSON.parse(JSON.stringify(state.data)), serverMeta)
          });

          alert('Someone edited this video as well. We just synced the data, please continue editing.');
        }
      }).catch(function (e) {
        return console.log(e);
      });
    },

    handleSave: function handleSave(state, newMeta, src) {
      // keep old meta for the case we need to revert
      var oldMeta = JSON.stringify(state.activeVideo.meta);

      // we're optimistic, so update client state immediately
      setState({
        data: actions_setNewMetaInTree(JSON.parse(JSON.stringify(state.data)), newMeta)
      });

      // send POST request to server
      fetch(src.replace('video.mp4', 'meta.json'), {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(newMeta)
      }).then(function (response) {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response;
      }).catch(function (error) {
        alert('Error while saving: ' + error.message);
        // revert client state to old meta
        setState({
          data: actions_setNewMetaInTree(JSON.parse(JSON.stringify(state.data)), JSON.parse(oldMeta))
        });
      });
    }
  };
};

var actions_setNewMetaInTree = function setNewMetaInTree(tree, newMeta) {
  crawl(tree, function (node, context) {
    if (node.meta && node.meta.id === newMeta.id) {
      var newNode = node;
      newNode.meta = newMeta;

      context.parent.items[context.index] = newNode;
      context.replace(newNode);
    }
  }, { getChildren: function getChildren(node) {
      return node.items;
    } });
  return tree;
};

/* harmony default export */ var metaEditable_actions = (actions_actions);
// EXTERNAL MODULE: ../node_modules/speakingurl/index.js
var speakingurl = __webpack_require__("WDG1");
var speakingurl_default = /*#__PURE__*/__webpack_require__.n(speakingurl);

// CONCATENATED MODULE: ../node_modules/preact-cli/lib/lib/webpack/dummy-loader.js!./components/metaEditable/index.js
var metaEditable__extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };



function metaEditable__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function metaEditable__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function metaEditable__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }














var metaEditable_MetaEditable = function (_Component) {
  metaEditable__inherits(MetaEditable, _Component);

  function MetaEditable(props, context) {
    metaEditable__classCallCheck(this, MetaEditable);

    var _this = metaEditable__possibleConstructorReturn(this, _Component.call(this, props, context));

    _this.handleTitleChange = function (title) {
      _this.setState(function (prevState) {
        var meta = prevState.meta;
        meta.title = title;
        return { meta: meta };
      });
    };

    _this.handlePeopleChange = function (people) {
      _this.setState(function (prevState) {
        var meta = prevState.meta;
        meta.people = people;
        return { meta: meta };
      });
    };

    _this.handleTagsChange = function (tags) {
      _this.setState(function (prevState) {
        var meta = prevState.meta;
        meta.tags = tags;
        return { meta: meta };
      });
    };

    _this.handleDescriptionChange = function (description) {
      _this.setState(function (prevState) {
        var meta = prevState.meta;
        meta.description = description;
        return { meta: meta };
      });
    };

    _this.handleSubmit = function (event) {
      if (event) {
        event.preventDefault();
      }

      _this.setState(function (prevState) {
        var meta = prevState.meta;
        meta.slug = speakingurl_default()(prevState.meta.title);
        return { meta: meta };
      }, function () {
        _this.props.handleSave(_this.state.meta, _this.props.video.src);

        // end edit mode
        Object(preact_router_es["route"])('/' + _this.state.meta.id + '/' + _this.state.meta.slug);
      });
    };

    _this.handleCancel = function (event) {
      if (event) {
        event.preventDefault();
      }
      Object(preact_router_es["route"])('.');
    };

    _this.handleKeyDown = function (event) {
      // ctrl-enter or cmd-enter (MacOS) submit
      if ((event.ctrlKey || event.metaKey) && (event.keyCode === 13 || event.keyCode === 10)) {
        _this.handleSubmit();
      }

      // cancel on escape
      if (event.keyCode === 27) {
        _this.handleCancel();
      }
    };

    _this.state = {
      peopleSuggestions: [],
      tagsSuggestions: [],
      meta: metaEditable__extends({}, props.video.meta)
    };
    return _this;
  }

  MetaEditable.prototype.getListOfArrayKey = function getListOfArrayKey(tree, key) {
    var _this2 = this;

    var result = [];

    crawl(tree, function (node) {
      if (node.meta && node.meta[key]) {
        // check if it's a comma separated string instead of an array, and split it up
        var arr = node.meta[key][0] && node.meta[key][0].indexOf(',') > -1 ? node.meta[key][0].split(',') : node.meta[key];

        result = _this2.mergeArray([result, arr]);
      }
    }, { getChildren: function getChildren(node) {
        return node.items;
      } });

    return this.uniqueArray(result);
  };

  MetaEditable.prototype.mergeArray = function mergeArray(arr) {
    var _ref;

    return (_ref = []).concat.apply(_ref, arr);
    //return Array.from(new Set([].concat(...arr))); // merge & unique
  };

  MetaEditable.prototype.uniqueArray = function uniqueArray(a) {
    return Array.from(new Set(a));
  };

  MetaEditable.prototype.componentDidMount = function componentDidMount() {
    if (typeof this.props.onMount === 'function') {
      this.props.onMount();
    }

    // make sure to get the latest state from server, in case someone
    // else edited this video before and client state is out of date
    this.props.getLatestMeta();
  };

  MetaEditable.prototype.componentWillMount = function componentWillMount() {
    // TODO call this on componentWillReceiveProps?
    // TODO combine these two iterations, so both keys will be returned without iterating twice
    var peopleSuggestions = this.getListOfArrayKey(this.props.data, 'people');
    var tagsSuggestions = this.getListOfArrayKey(this.props.data, 'tags');
    this.setState({ peopleSuggestions: peopleSuggestions, tagsSuggestions: tagsSuggestions });
  };

  MetaEditable.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    // We need watch for changes in props.video.meta manually,
    // as we copy props.video.meta to the state
    // This is actually an anti-pattern, but still valid in our "editing" use-case
    if (nextProps.video.meta !== this.props.video.meta) {
      this.setState({ meta: nextProps.video.meta });
    }
  };

  MetaEditable.prototype.render = function render(props, state) {
    var video = props.video;

    return Object(preact_min["h"])(
      'div',
      { className: meta_style_default.a.meta },
      Object(preact_min["h"])(
        'div',
        { className: meta_style_default.a.path },
        video.path && video.path.map(function (folder, j) {
          return Object(preact_min["h"])(
            'span',
            { key: 'folder' + j },
            folder,
            video.path.length === j + 1 ? '' : ' / '
          );
        })
      ),
      Object(preact_min["h"])(
        'form',
        {
          onSubmit: this.handleSubmit,
          className: metaEditable_style_default.a.form,
          onKeyDown: this.handleKeyDown
        },
        Object(preact_min["h"])(
          'h1',
          null,
          Object(preact_min["h"])(inlineEditor_InlineEditor, {
            value: state.meta.title,
            placeholder: 'Enter title...',
            onChange: this.handleTitleChange,
            minlength: '3',
            maxlength: '150',
            required: true
          })
        ),
        Object(preact_min["h"])(
          'div',
          { className: meta_style_default.a.people },
          Object(preact_min["h"])(octicon, { name: 'person', className: meta_style_default.a.icon }),
          Object(preact_min["h"])(tagsEditable_TagsEditable, {
            tags: state.meta.people,
            suggestions: state.peopleSuggestions,
            placeholder: 'Add person',
            onChange: this.handlePeopleChange,
            classNames: {
              selectedTagName: meta_style_default.a.person
            }
          })
        ),
        Object(preact_min["h"])(
          'div',
          { className: meta_style_default.a.tags },
          Object(preact_min["h"])(tagsEditable_TagsEditable, {
            tags: state.meta.tags,
            suggestions: state.tagsSuggestions,
            placeholder: 'Add tag',
            onChange: this.handleTagsChange,
            classNames: {
              selectedTag: meta_style_default.a.tag
            }
          })
        ),
        Object(preact_min["h"])(
          'div',
          { className: meta_style_default.a.description },
          Object(preact_min["h"])(inlineEditor_InlineEditor, {
            value: state.meta.description,
            placeholder: 'Enter description...',
            onChange: this.handleDescriptionChange,
            maxlength: '1500'
          })
        ),
        Object(preact_min["h"])(
          'div',
          { className: metaEditable_style_default.a.buttonContainer },
          Object(preact_min["h"])(
            'button',
            { onClick: this.handleCancel },
            'Cancel'
          ),
          Object(preact_min["h"])(
            'button',
            { type: 'submit', className: metaEditable_style_default.a.saveButton + ' primary' },
            'Save'
          )
        )
      )
    );
  };

  return MetaEditable;
}(preact_min["Component"]);

var metaEditable_mapStateToProps = function mapStateToProps(_ref2) {
  var data = _ref2.data;
  return { data: data };
};

/* harmony default export */ var metaEditable = (Object(preact["connect"])(metaEditable_mapStateToProps, metaEditable_actions)(metaEditable_MetaEditable));
// EXTERNAL MODULE: ./components/activeMetaContainer/loader.scss
var loader = __webpack_require__("jNht");
var loader_default = /*#__PURE__*/__webpack_require__.n(loader);

// CONCATENATED MODULE: ./components/activeMetaContainer/index.js


function activeMetaContainer__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function activeMetaContainer__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function activeMetaContainer__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








var activeMetaContainer__ref = Object(preact_min["h"])(
  'h1',
  null,
  'Welcome to SBideo!'
);

var _ref2 = Object(preact_min["h"])(
  'p',
  null,
  'Just search and select a video below.'
);

var activeMetaContainer_ActiveMetaContainer = function (_Component) {
  activeMetaContainer__inherits(ActiveMetaContainer, _Component);

  function ActiveMetaContainer() {
    var _temp, _this, _ret;

    activeMetaContainer__classCallCheck(this, ActiveMetaContainer);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = activeMetaContainer__possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = {
      editComponentMounted: false
    }, _this.editComponentMounted = function () {
      _this.setState({
        editComponentMounted: true
      });
    }, _temp), activeMetaContainer__possibleConstructorReturn(_this, _ret);
  }

  ActiveMetaContainer.prototype.render = function render(props, state) {
    var meta = props.activeVideo.meta;
    if (meta && Object.keys(meta).length > 0) {
      return Object(preact_min["h"])(
        'div',
        { className: props.className },
        props.editMode ? Object(preact_min["h"])(
          'div',
          null,
          !state.editComponentMounted && Object(preact_min["h"])(
            'p',
            { className: loader_default.a.loader },
            'Loading'
          ),
          Object(preact_min["h"])(metaEditable, {
            video: props.activeVideo,
            onSave: this.onSave,
            onMount: this.editComponentMounted
          })
        ) : Object(preact_min["h"])(meta_Meta, { video: props.activeVideo, showTitle: 'true', showPath: 'true' })
      );
    } else {
      return Object(preact_min["h"])(
        'div',
        { className: props.className },
        activeMetaContainer__ref,
        _ref2
      );
    }
  };

  return ActiveMetaContainer;
}(preact_min["Component"]);

var activeMetaContainer_mapStateToProps = function mapStateToProps(_ref3) {
  var activeVideo = _ref3.activeVideo,
      editMode = _ref3.editMode;
  return {
    activeVideo: activeVideo,
    editMode: editMode
  };
};

/* harmony default export */ var activeMetaContainer = (Object(preact["connect"])(activeMetaContainer_mapStateToProps)(activeMetaContainer_ActiveMetaContainer));
// EXTERNAL MODULE: ./components/videoContainer/style.scss
var videoContainer_style = __webpack_require__("H9/r");
var videoContainer_style_default = /*#__PURE__*/__webpack_require__.n(videoContainer_style);

// CONCATENATED MODULE: ./components/videoContainer/index.js


function videoContainer__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function videoContainer__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function videoContainer__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








var videoContainer_VideoContainer = function (_Component) {
  videoContainer__inherits(VideoContainer, _Component);

  function VideoContainer() {
    videoContainer__classCallCheck(this, VideoContainer);

    return videoContainer__possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  VideoContainer.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    var shouldScroll = this.props.activeVideo.meta.id !== nextProps.activeVideo.meta.id;

    if (shouldScroll) {
      window.scroll({ top: 0, left: 0, behavior: 'smooth' });
    }
  };

  VideoContainer.prototype.render = function render() {
    return Object(preact_min["h"])(
      'div',
      { className: videoContainer_style_default.a.wrapper },
      Object(preact_min["h"])(videoPlayer, { className: videoContainer_style_default.a.videoPlayer }),
      Object(preact_min["h"])(activeMetaContainer, { className: videoContainer_style_default.a.activeMetaContainer })
    );
  };

  return VideoContainer;
}(preact_min["Component"]);

var videoContainer_mapStateToProps = function mapStateToProps(_ref) {
  var activeVideo = _ref.activeVideo;
  return { activeVideo: activeVideo };
};

/* harmony default export */ var videoContainer = (Object(preact["connect"])(videoContainer_mapStateToProps)(videoContainer_VideoContainer));
// EXTERNAL MODULE: ./components/search/style.scss
var search_style = __webpack_require__("J4GW");
var search_style_default = /*#__PURE__*/__webpack_require__.n(search_style);

// EXTERNAL MODULE: ../node_modules/fuzzysort/fuzzysort.js
var fuzzysort = __webpack_require__("GlPB");
var fuzzysort_default = /*#__PURE__*/__webpack_require__.n(fuzzysort);

// CONCATENATED MODULE: ./components/search/actions.js
var search_actions_actions = function actions() {
  return {
    setSearchResults: function setSearchResults(state, searchResults) {
      return { searchResults: searchResults };
    }
  };
};

/* harmony default export */ var search_actions = (search_actions_actions);
// CONCATENATED MODULE: ./components/search/index.js
var search__extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };



function search__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function search__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function search__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }









var search_Search = function (_Component) {
  search__inherits(Search, _Component);

  function Search() {
    var _temp, _this, _ret;

    search__classCallCheck(this, Search);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = search__possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = {
      searchTerm: ''
    }, _this.resetSearch = function (event) {
      if (event) {
        event.preventDefault();
      }
      _this.setState({ searchTerm: '' }, function () {
        _this.triggerInputEvent();
        _this.searchInput.focus();
        Object(preact_router_es["route"])('/');
      });
    }, _this.search = function (event) {
      var term = event.target.value.replace(/\s{2,}/g, ' '); // remove multiple spaces
      _this.setState({ searchTerm: term });
      var searchQuery = term.trim();

      var results = null;

      if (searchQuery !== '') {
        var copy = function copy(o) {
          return search__extends({}, o);
        };

        var fuzzyOptions = {
          threshold: -200, // ignore matches with a lower score than this
          limit: 1 // we only need to know if there is at least one result
        };
        results = _this.props.data.items.map(copy).filter(function f(o) {
          if (o.type == 'video') {
            var searchResults = fuzzysort_default.a.go(searchQuery, [o.meta.title, o.meta.description, o.meta.tags.join(','), o.meta.people.join(','), o.src], fuzzyOptions);
            return searchResults.length !== 0;
          }

          if (o.items) {
            return (o.items = o.items.map(copy).filter(f)).length;
          }
        });

        /*
        console.time('searchString');
        const results = this.props.data.map(copy).filter(function f(o) {
          if (o.meta && o.meta.id) {
            const targets = [o.meta.title.toLowerCase(), o.meta.description.toLowerCase(), o.meta.tags.join(',').toLowerCase(), o.meta.people.join(',').toLowerCase(), o.meta.src.toLowerCase()];
            return targets.some(target => target.includes(searchQuery.toLowerCase()));
          }
           if (o.items) {
            return (o.items = o.items.map(copy).filter(f)).length;
          }
        });
        console.timeEnd('searchString');
        */
      }
      _this.props.setSearchResults(results);
    }, _this.handleKeyDown = function (event) {
      // prevent submit when pressing Enter & route to search URL
      if (event.keyCode === 13) {
        event.preventDefault();
        Object(preact_router_es["route"])('/search/' + encodeURIComponent(event.target.value));
      }

      // reset search when pressing ESC
      if (event.keyCode === 27) {
        _this.resetSearch();
      }
    }, _temp), search__possibleConstructorReturn(_this, _ret);
  }

  /**
   * Ref to the input element
   */


  Search.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    if (this.props.data !== nextProps.data) {
      this.initFirstSearch(nextProps);
    }
    if (this.props.term !== nextProps.term) {
      this.initFirstSearch(nextProps);
    }
  };

  Search.prototype.componentDidMount = function componentDidMount() {
    this.searchInput.focus();
  };

  Search.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps) {
    if (this.props.data !== nextProps.data) {
      return true;
    }
    if (this.props.term !== nextProps.term) {
      return true;
    }
  };

  /**
   * First search when route is loaded
   * @param {object} nextProps
   */


  Search.prototype.initFirstSearch = function initFirstSearch(nextProps) {
    var _this2 = this;

    if (this.searchInput && nextProps.term && nextProps.isActive) {
      this.setState({ searchTerm: nextProps.term }, function () {
        return _this2.searchInput.focus();
      });
      this.triggerInputEvent();
    }
  };

  Search.prototype.triggerInputEvent = function triggerInputEvent() {
    var _this3 = this;

    setTimeout(function () {
      var event = new Event('input');
      _this3.searchInput.dispatchEvent(event);
    }, 1);
  };

  Search.prototype.render = function render(props, state) {
    var _this4 = this;

    return Object(preact_min["h"])(
      'form',
      { className: search_style_default.a.searchForm, role: 'search' },
      Object(preact_min["h"])(
        'span',
        null,
        Object(preact_min["h"])('input', {
          ref: function ref(input) {
            return _this4.searchInput = input;
          },
          type: 'text',
          autoComplete: 'off',
          placeholder: 'Search',
          onInput: this.search,
          onKeyDown: this.handleKeyDown,
          className: search_style_default.a.searchField,
          value: state.searchTerm
        }),
        this.state.searchTerm && Object(preact_min["h"])('button', { onClick: this.resetSearch, className: search_style_default.a.resetButton })
      )
    );
  };

  return Search;
}(preact_min["Component"]);

var search_mapStateToProps = function mapStateToProps(_ref) {
  var data = _ref.data;
  return { data: data };
};

/* harmony default export */ var search = (Object(preact["connect"])(search_mapStateToProps, search_actions)(search_Search));
// CONCATENATED MODULE: ./routes/home/actions.js
var home_actions_actions = function actions(_ref) {
  var setState = _ref.setState;
  return {
    retrieveData: function retrieveData() {
      setState({ loading: true });

      return fetch("/items.json").then(function (response) {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response.json();
      }).then(function (data) {
        return { data: data, loading: false };
      }).catch(function (error) {
        return { error: error, loading: false };
      });
    },

    setActiveVideo: function setActiveVideo(state, video) {
      return {
        activeVideo: video
      };
    },

    announceEditMode: function announceEditMode(state, editing) {
      return {
        editMode: editing
      };
    }
  };
};

/* harmony default export */ var home_actions = (home_actions_actions);
// CONCATENATED MODULE: ./routes/home/index.js


function home__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function home__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function home__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }











var home_Home = function (_Component) {
  home__inherits(Home, _Component);

  function Home() {
    home__classCallCheck(this, Home);

    return home__possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  Home.prototype.componentDidMount = function componentDidMount() {
    this.props.retrieveData();
  };

  Home.prototype.getVideoById = function getVideoById(tree, videoId) {
    var result = void 0;
    crawl(tree, function (node, context) {
      if (node.type === 'video' && node.meta && node.meta.id === videoId) {
        result = node;

        // generate path to show breadcrumb and add to node
        node.path = context.cursor.stack.xs.reduce(function (result, item) {
          if (item.node && item.node.meta) {
            result.push(item.node.meta.title);
          }
          return result;
        }, []);

        context.break();
      }
    }, { getChildren: function getChildren(node) {
        return node.items;
      } });
    return result;
  };

  Home.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    var id = nextProps.id,
        term = nextProps.term,
        data = nextProps.data;


    var video = id && id.length > 0 ? this.getVideoById(data, id) : null;

    if (video) {
      // add some properties
      video.startTimestamp = this.props.t || '0s';
      video.href = window.location.origin + '/' + id + '/' + term;

      // set active video
      nextProps.setActiveVideo(video);
    }

    nextProps.announceEditMode(nextProps.mode === 'edit');
  };

  Home.prototype.render = function render(props) {
    return Object(preact_min["h"])(
      'div',
      { className: home_style_default.a.home },
      Object(preact_min["h"])(videoContainer, { className: home_style_default.a.layoutElement }),
      Object(preact_min["h"])(search, {
        className: home_style_default.a.layoutElement,
        isActive: this.props.id === 'search',
        term: this.props.id === 'search' ? this.props.term : ''
      }),
      Object(preact_min["h"])(folder_Folder, {
        data: props.searchResults != null ? props.searchResults : props.data.items
      })
    );
  };

  return Home;
}(preact_min["Component"]);

var home_mapStateToProps = function mapStateToProps(_ref) {
  var data = _ref.data,
      searchResults = _ref.searchResults;
  return { data: data, searchResults: searchResults };
};

/* harmony default export */ var home = (Object(preact["connect"])(home_mapStateToProps, home_actions)(home_Home));
// CONCATENATED MODULE: ../node_modules/unistore/dist/unistore.es.js
function n(n, t) {
  for (var u in t) {
    n[u] = t[u];
  }return n;
}function t(t) {
  var u = [];function r(n) {
    for (var t = [], r = 0; r < u.length; r++) {
      u[r] === n ? n = null : t.push(u[r]);
    }u = t;
  }function e(r, e, o) {
    t = e ? r : n(n({}, t), r);for (var f = u, i = 0; i < f.length; i++) {
      f[i](t, o);
    }
  }return t = t || {}, { action: function action(n) {
      function u(t) {
        e(t, !1, n);
      }return function () {
        for (var r = arguments, e = [t], o = 0; o < arguments.length; o++) {
          e.push(r[o]);
        }var f = n.apply(this, e);null != f && (f.then ? f.then(u) : u(f));
      };
    }, setState: e, subscribe: function subscribe(n) {
      return u.push(n), function () {
        r(n);
      };
    }, unsubscribe: r, getState: function getState() {
      return t;
    } };
}/* harmony default export */ var unistore_es = (t);
//# sourceMappingURL=unistore.es.js.map
// CONCATENATED MODULE: ./app.js


function app__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function app__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function app__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








if (false) {
  require('preact/debug');
}

var initialState = {
  data: [],
  activeVideo: {
    meta: {},
    src: ''
  },
  newData: null,
  editMode: false,
  searchResults: null
};
var store = unistore_es(initialState);

var app__ref = Object(preact_min["h"])(home, { path: '/:id?/:term?/:mode?' });

var app_App = function (_Component) {
  app__inherits(App, _Component);

  function App() {
    var _temp, _this, _ret;

    app__classCallCheck(this, App);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = app__possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.handleRoute = function (e) {
      _this.currentUrl = e.url;
    }, _temp), app__possibleConstructorReturn(_this, _ret);
  }
  /** Gets fired when the route changes.
   *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
   *	@param {string} event.url	The newly routed URL
   */


  App.prototype.render = function render() {
    return Object(preact_min["h"])(
      preact["Provider"],
      { store: store },
      Object(preact_min["h"])(
        'div',
        { id: 'app' },
        Object(preact_min["h"])(
          preact_router_es["Router"],
          { onChange: this.handleRoute },
          app__ref
        )
      )
    );
  };

  return App;
}(preact_min["Component"]);


// CONCATENATED MODULE: ./index.js



if (typeof window !== 'undefined') {
  __webpack_require__("LTbr").polyfill();
}

/* harmony default export */ var index = __webpack_exports__["default"] = (app_App);

/***/ }),

/***/ "K02I":
/***/ (function(module, exports, __webpack_require__) {

module.exports = function (e) {
  var t = {};function n(o) {
    if (t[o]) return t[o].exports;var r = t[o] = { i: o, l: !1, exports: {} };return e[o].call(r.exports, r, r.exports, n), r.l = !0, r.exports;
  }return n.m = e, n.c = t, n.d = function (e, t, o) {
    n.o(e, t) || Object.defineProperty(e, t, { configurable: !1, enumerable: !0, get: o });
  }, n.r = function (e) {
    Object.defineProperty(e, "__esModule", { value: !0 });
  }, n.n = function (e) {
    var t = e && e.__esModule ? function () {
      return e.default;
    } : function () {
      return e;
    };return n.d(t, "a", t), t;
  }, n.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }, n.p = "", n(n.s = 2);
}([function (e, t) {
  e.exports = __webpack_require__("5D9O");
}, function (e, t) {
  e.exports = __webpack_require__("eW0v");
}, function (e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", { value: !0 });var o = Object.assign || function (e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];for (var o in n) {
        Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
      }
    }return e;
  },
      r = function () {
    function e(e, t) {
      for (var n = 0; n < t.length; n++) {
        var o = t[n];o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o);
      }
    }return function (t, n, o) {
      return n && e(t.prototype, n), o && e(t, o), t;
    };
  }(),
      u = n(1),
      i = a(u),
      c = a(n(0));function a(e) {
    return e && e.__esModule ? e : { default: e };
  }var l = function (e) {
    function t() {
      return function (e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
      }(this, t), function (e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !t || "object" != typeof t && "function" != typeof t ? e : t;
      }(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments));
    }return function (e, t) {
      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
    }(t, u.PureComponent), r(t, [{ key: "selectTextFromElement", value: function value() {
        if (window.getSelection && document.createRange) {
          var e = window.getSelection(),
              t = document.createRange();t.selectNodeContents(this.urlSpan), e.removeAllRanges(), e.addRange(t);
        } else if (document.selection && document.body.createTextRange) {
          var n = document.body.createTextRange();n.moveToElementText(this.urlSpan), n.select();
        }
      } }, { key: "copy", value: function value() {
        this.selectTextFromElement();var e = void 0,
            t = void 0;try {
          document.execCommand("copy"), e = !0;
        } catch (n) {
          e = !1, t = n;
        }this.props.onCopy && this.props.onCopy({ success: e, error: t });
      } }, { key: "render", value: function value() {
        var e = this,
            t = this.props,
            n = t.textToBeCopied,
            r = (t.onCopy, t.children),
            u = function (e, t) {
          var n = {};for (var o in e) {
            t.indexOf(o) >= 0 || Object.prototype.hasOwnProperty.call(e, o) && (n[o] = e[o]);
          }return n;
        }(t, ["textToBeCopied", "onCopy", "children"]),
            c = i.default.Children.only(r),
            a = this.copy.bind(this),
            l = i.default.cloneElement(c, o({}, c.props, { onClick: a }));return i.default.createElement(i.default.Fragment, null, i.default.createElement("span", o({}, u, { ref: function ref(t) {
            e.urlSpan = t;
          } }), n), l);
      } }]), t;
  }();l.propTypes = { textToBeCopied: c.default.string.isRequired, children: c.default.element.isRequired, onCopy: c.default.func }, l.defaultProps = { onCopy: void 0 }, t.default = l;
}]);

/***/ }),

/***/ "KM04":
/***/ (function(module, exports, __webpack_require__) {

!function () {
  "use strict";
  function e() {}function t(t, n) {
    var o,
        r,
        i,
        l,
        a = E;for (l = arguments.length; l-- > 2;) {
      W.push(arguments[l]);
    }n && null != n.children && (W.length || W.push(n.children), delete n.children);while (W.length) {
      if ((r = W.pop()) && void 0 !== r.pop) for (l = r.length; l--;) {
        W.push(r[l]);
      } else "boolean" == typeof r && (r = null), (i = "function" != typeof t) && (null == r ? r = "" : "number" == typeof r ? r += "" : "string" != typeof r && (i = !1)), i && o ? a[a.length - 1] += r : a === E ? a = [r] : a.push(r), o = i;
    }var u = new e();return u.nodeName = t, u.children = a, u.attributes = null == n ? void 0 : n, u.key = null == n ? void 0 : n.key, void 0 !== S.vnode && S.vnode(u), u;
  }function n(e, t) {
    for (var n in t) {
      e[n] = t[n];
    }return e;
  }function o(e, o) {
    return t(e.nodeName, n(n({}, e.attributes), o), arguments.length > 2 ? [].slice.call(arguments, 2) : e.children);
  }function r(e) {
    !e.__d && (e.__d = !0) && 1 == A.push(e) && (S.debounceRendering || P)(i);
  }function i() {
    var e,
        t = A;A = [];while (e = t.pop()) {
      e.__d && k(e);
    }
  }function l(e, t, n) {
    return "string" == typeof t || "number" == typeof t ? void 0 !== e.splitText : "string" == typeof t.nodeName ? !e._componentConstructor && a(e, t.nodeName) : n || e._componentConstructor === t.nodeName;
  }function a(e, t) {
    return e.__n === t || e.nodeName.toLowerCase() === t.toLowerCase();
  }function u(e) {
    var t = n({}, e.attributes);t.children = e.children;var o = e.nodeName.defaultProps;if (void 0 !== o) for (var r in o) {
      void 0 === t[r] && (t[r] = o[r]);
    }return t;
  }function _(e, t) {
    var n = t ? document.createElementNS("http://www.w3.org/2000/svg", e) : document.createElement(e);return n.__n = e, n;
  }function p(e) {
    var t = e.parentNode;t && t.removeChild(e);
  }function c(e, t, n, o, r) {
    if ("className" === t && (t = "class"), "key" === t) ;else if ("ref" === t) n && n(null), o && o(e);else if ("class" !== t || r) {
      if ("style" === t) {
        if (o && "string" != typeof o && "string" != typeof n || (e.style.cssText = o || ""), o && "object" == typeof o) {
          if ("string" != typeof n) for (var i in n) {
            i in o || (e.style[i] = "");
          }for (var i in o) {
            e.style[i] = "number" == typeof o[i] && !1 === V.test(i) ? o[i] + "px" : o[i];
          }
        }
      } else if ("dangerouslySetInnerHTML" === t) o && (e.innerHTML = o.__html || "");else if ("o" == t[0] && "n" == t[1]) {
        var l = t !== (t = t.replace(/Capture$/, ""));t = t.toLowerCase().substring(2), o ? n || e.addEventListener(t, f, l) : e.removeEventListener(t, f, l), (e.__l || (e.__l = {}))[t] = o;
      } else if ("list" !== t && "type" !== t && !r && t in e) s(e, t, null == o ? "" : o), null != o && !1 !== o || e.removeAttribute(t);else {
        var a = r && t !== (t = t.replace(/^xlink\:?/, ""));null == o || !1 === o ? a ? e.removeAttributeNS("http://www.w3.org/1999/xlink", t.toLowerCase()) : e.removeAttribute(t) : "function" != typeof o && (a ? e.setAttributeNS("http://www.w3.org/1999/xlink", t.toLowerCase(), o) : e.setAttribute(t, o));
      }
    } else e.className = o || "";
  }function s(e, t, n) {
    try {
      e[t] = n;
    } catch (e) {}
  }function f(e) {
    return this.__l[e.type](S.event && S.event(e) || e);
  }function d() {
    var e;while (e = D.pop()) {
      S.afterMount && S.afterMount(e), e.componentDidMount && e.componentDidMount();
    }
  }function h(e, t, n, o, r, i) {
    H++ || (R = null != r && void 0 !== r.ownerSVGElement, j = null != e && !("__preactattr_" in e));var l = m(e, t, n, o, i);return r && l.parentNode !== r && r.appendChild(l), --H || (j = !1, i || d()), l;
  }function m(e, t, n, o, r) {
    var i = e,
        l = R;if (null != t && "boolean" != typeof t || (t = ""), "string" == typeof t || "number" == typeof t) return e && void 0 !== e.splitText && e.parentNode && (!e._component || r) ? e.nodeValue != t && (e.nodeValue = t) : (i = document.createTextNode(t), e && (e.parentNode && e.parentNode.replaceChild(i, e), b(e, !0))), i.__preactattr_ = !0, i;var u = t.nodeName;if ("function" == typeof u) return U(e, t, n, o);if (R = "svg" === u || "foreignObject" !== u && R, u += "", (!e || !a(e, u)) && (i = _(u, R), e)) {
      while (e.firstChild) {
        i.appendChild(e.firstChild);
      }e.parentNode && e.parentNode.replaceChild(i, e), b(e, !0);
    }var p = i.firstChild,
        c = i.__preactattr_,
        s = t.children;if (null == c) {
      c = i.__preactattr_ = {};for (var f = i.attributes, d = f.length; d--;) {
        c[f[d].name] = f[d].value;
      }
    }return !j && s && 1 === s.length && "string" == typeof s[0] && null != p && void 0 !== p.splitText && null == p.nextSibling ? p.nodeValue != s[0] && (p.nodeValue = s[0]) : (s && s.length || null != p) && v(i, s, n, o, j || null != c.dangerouslySetInnerHTML), g(i, t.attributes, c), R = l, i;
  }function v(e, t, n, o, r) {
    var i,
        a,
        u,
        _,
        c,
        s = e.childNodes,
        f = [],
        d = {},
        h = 0,
        v = 0,
        y = s.length,
        g = 0,
        w = t ? t.length : 0;if (0 !== y) for (var C = 0; C < y; C++) {
      var x = s[C],
          N = x.__preactattr_,
          k = w && N ? x._component ? x._component.__k : N.key : null;null != k ? (h++, d[k] = x) : (N || (void 0 !== x.splitText ? !r || x.nodeValue.trim() : r)) && (f[g++] = x);
    }if (0 !== w) for (var C = 0; C < w; C++) {
      _ = t[C], c = null;var k = _.key;if (null != k) h && void 0 !== d[k] && (c = d[k], d[k] = void 0, h--);else if (!c && v < g) for (i = v; i < g; i++) {
        if (void 0 !== f[i] && l(a = f[i], _, r)) {
          c = a, f[i] = void 0, i === g - 1 && g--, i === v && v++;break;
        }
      }c = m(c, _, n, o), u = s[C], c && c !== e && c !== u && (null == u ? e.appendChild(c) : c === u.nextSibling ? p(u) : e.insertBefore(c, u));
    }if (h) for (var C in d) {
      void 0 !== d[C] && b(d[C], !1);
    }while (v <= g) {
      void 0 !== (c = f[g--]) && b(c, !1);
    }
  }function b(e, t) {
    var n = e._component;n ? L(n) : (null != e.__preactattr_ && e.__preactattr_.ref && e.__preactattr_.ref(null), !1 !== t && null != e.__preactattr_ || p(e), y(e));
  }function y(e) {
    e = e.lastChild;while (e) {
      var t = e.previousSibling;b(e, !0), e = t;
    }
  }function g(e, t, n) {
    var o;for (o in n) {
      t && null != t[o] || null == n[o] || c(e, o, n[o], n[o] = void 0, R);
    }for (o in t) {
      "children" === o || "innerHTML" === o || o in n && t[o] === ("value" === o || "checked" === o ? e[o] : n[o]) || c(e, o, n[o], n[o] = t[o], R);
    }
  }function w(e) {
    var t = e.constructor.name;(I[t] || (I[t] = [])).push(e);
  }function C(e, t, n) {
    var o,
        r = I[e.name];if (e.prototype && e.prototype.render ? (o = new e(t, n), T.call(o, t, n)) : (o = new T(t, n), o.constructor = e, o.render = x), r) for (var i = r.length; i--;) {
      if (r[i].constructor === e) {
        o.__b = r[i].__b, r.splice(i, 1);break;
      }
    }return o;
  }function x(e, t, n) {
    return this.constructor(e, n);
  }function N(e, t, n, o, i) {
    e.__x || (e.__x = !0, (e.__r = t.ref) && delete t.ref, (e.__k = t.key) && delete t.key, !e.base || i ? e.componentWillMount && e.componentWillMount() : e.componentWillReceiveProps && e.componentWillReceiveProps(t, o), o && o !== e.context && (e.__c || (e.__c = e.context), e.context = o), e.__p || (e.__p = e.props), e.props = t, e.__x = !1, 0 !== n && (1 !== n && !1 === S.syncComponentUpdates && e.base ? r(e) : k(e, 1, i)), e.__r && e.__r(e));
  }function k(e, t, o, r) {
    if (!e.__x) {
      var i,
          l,
          a,
          _ = e.props,
          p = e.state,
          c = e.context,
          s = e.__p || _,
          f = e.__s || p,
          m = e.__c || c,
          v = e.base,
          y = e.__b,
          g = v || y,
          w = e._component,
          x = !1;if (v && (e.props = s, e.state = f, e.context = m, 2 !== t && e.shouldComponentUpdate && !1 === e.shouldComponentUpdate(_, p, c) ? x = !0 : e.componentWillUpdate && e.componentWillUpdate(_, p, c), e.props = _, e.state = p, e.context = c), e.__p = e.__s = e.__c = e.__b = null, e.__d = !1, !x) {
        i = e.render(_, p, c), e.getChildContext && (c = n(n({}, c), e.getChildContext()));var U,
            T,
            M = i && i.nodeName;if ("function" == typeof M) {
          var W = u(i);l = w, l && l.constructor === M && W.key == l.__k ? N(l, W, 1, c, !1) : (U = l, e._component = l = C(M, W, c), l.__b = l.__b || y, l.__u = e, N(l, W, 0, c, !1), k(l, 1, o, !0)), T = l.base;
        } else a = g, U = w, U && (a = e._component = null), (g || 1 === t) && (a && (a._component = null), T = h(a, i, c, o || !v, g && g.parentNode, !0));if (g && T !== g && l !== w) {
          var E = g.parentNode;E && T !== E && (E.replaceChild(T, g), U || (g._component = null, b(g, !1)));
        }if (U && L(U), e.base = T, T && !r) {
          var P = e,
              V = e;while (V = V.__u) {
            (P = V).base = T;
          }T._component = P, T._componentConstructor = P.constructor;
        }
      }if (!v || o ? D.unshift(e) : x || (e.componentDidUpdate && e.componentDidUpdate(s, f, m), S.afterUpdate && S.afterUpdate(e)), null != e.__h) while (e.__h.length) {
        e.__h.pop().call(e);
      }H || r || d();
    }
  }function U(e, t, n, o) {
    var r = e && e._component,
        i = r,
        l = e,
        a = r && e._componentConstructor === t.nodeName,
        _ = a,
        p = u(t);while (r && !_ && (r = r.__u)) {
      _ = r.constructor === t.nodeName;
    }return r && _ && (!o || r._component) ? (N(r, p, 3, n, o), e = r.base) : (i && !a && (L(i), e = l = null), r = C(t.nodeName, p, n), e && !r.__b && (r.__b = e, l = null), N(r, p, 1, n, o), e = r.base, l && e !== l && (l._component = null, b(l, !1))), e;
  }function L(e) {
    S.beforeUnmount && S.beforeUnmount(e);var t = e.base;e.__x = !0, e.componentWillUnmount && e.componentWillUnmount(), e.base = null;var n = e._component;n ? L(n) : t && (t.__preactattr_ && t.__preactattr_.ref && t.__preactattr_.ref(null), e.__b = t, p(t), w(e), y(t)), e.__r && e.__r(null);
  }function T(e, t) {
    this.__d = !0, this.context = t, this.props = e, this.state = this.state || {};
  }function M(e, t, n) {
    return h(n, e, {}, !1, t, !1);
  }var S = {},
      W = [],
      E = [],
      P = "function" == typeof Promise ? Promise.resolve().then.bind(Promise.resolve()) : setTimeout,
      V = /acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,
      A = [],
      D = [],
      H = 0,
      R = !1,
      j = !1,
      I = {};n(T.prototype, { setState: function setState(e, t) {
      var o = this.state;this.__s || (this.__s = n({}, o)), n(o, "function" == typeof e ? e(o, this.props) : e), t && (this.__h = this.__h || []).push(t), r(this);
    }, forceUpdate: function forceUpdate(e) {
      e && (this.__h = this.__h || []).push(e), k(this, 2);
    }, render: function render() {} });var $ = { h: t, createElement: t, cloneElement: o, Component: T, render: M, rerender: i, options: S }; true ? module.exports = $ : self.preact = $;
}();
//# sourceMappingURL=preact.min.js.map

/***/ }),

/***/ "KvKk":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./alert.svg": [
		"pAKb",
		175
	],
	"./arrow-down.svg": [
		"zSCw",
		174
	],
	"./arrow-left.svg": [
		"z/+L",
		173
	],
	"./arrow-right.svg": [
		"g3Zp",
		172
	],
	"./arrow-small-down.svg": [
		"+DQM",
		171
	],
	"./arrow-small-left.svg": [
		"lQaC",
		170
	],
	"./arrow-small-right.svg": [
		"LLIp",
		169
	],
	"./arrow-small-up.svg": [
		"cVyN",
		168
	],
	"./arrow-up.svg": [
		"IjvC",
		167
	],
	"./beaker.svg": [
		"eMGi",
		166
	],
	"./bell.svg": [
		"xZHs",
		165
	],
	"./bold.svg": [
		"FElK",
		164
	],
	"./book.svg": [
		"7dDG",
		163
	],
	"./bookmark.svg": [
		"ozJF",
		162
	],
	"./briefcase.svg": [
		"7+3N",
		161
	],
	"./broadcast.svg": [
		"d0Ys",
		160
	],
	"./browser.svg": [
		"hAtG",
		159
	],
	"./bug.svg": [
		"ecpI",
		158
	],
	"./calendar.svg": [
		"VfLe",
		157
	],
	"./check.svg": [
		"9qhj",
		156
	],
	"./checklist.svg": [
		"5ot4",
		155
	],
	"./chevron-down.svg": [
		"fpiC",
		154
	],
	"./chevron-left.svg": [
		"hK6e",
		153
	],
	"./chevron-right.svg": [
		"Nzf5",
		152
	],
	"./chevron-up.svg": [
		"zTyt",
		151
	],
	"./circle-slash.svg": [
		"61Hl",
		150
	],
	"./circuit-board.svg": [
		"4W/G",
		149
	],
	"./clippy.svg": [
		"XQHe",
		148
	],
	"./clock.svg": [
		"hq+T",
		147
	],
	"./cloud-download.svg": [
		"/GvX",
		146
	],
	"./cloud-upload.svg": [
		"05Y4",
		145
	],
	"./code.svg": [
		"wwSz",
		144
	],
	"./comment-discussion.svg": [
		"aySx",
		143
	],
	"./comment.svg": [
		"iVrv",
		142
	],
	"./credit-card.svg": [
		"HPmD",
		141
	],
	"./dash.svg": [
		"FZov",
		140
	],
	"./dashboard.svg": [
		"1BXL",
		139
	],
	"./database.svg": [
		"O+z4",
		138
	],
	"./desktop-download.svg": [
		"z90S",
		137
	],
	"./device-camera-video.svg": [
		"6KKn",
		136
	],
	"./device-camera.svg": [
		"rT+b",
		135
	],
	"./device-desktop.svg": [
		"tI5c",
		134
	],
	"./device-mobile.svg": [
		"W6H5",
		133
	],
	"./diff-added.svg": [
		"DVrx",
		132
	],
	"./diff-ignored.svg": [
		"7oBN",
		131
	],
	"./diff-modified.svg": [
		"mORK",
		130
	],
	"./diff-removed.svg": [
		"+vVE",
		129
	],
	"./diff-renamed.svg": [
		"Drsf",
		128
	],
	"./diff.svg": [
		"9IC9",
		127
	],
	"./ellipsis.svg": [
		"P+QF",
		126
	],
	"./eye.svg": [
		"YPsS",
		125
	],
	"./file-binary.svg": [
		"DXyB",
		124
	],
	"./file-code.svg": [
		"Xc9g",
		123
	],
	"./file-directory.svg": [
		"9N38",
		122
	],
	"./file-media.svg": [
		"PFRA",
		121
	],
	"./file-pdf.svg": [
		"dQs4",
		120
	],
	"./file-submodule.svg": [
		"EQO5",
		119
	],
	"./file-symlink-directory.svg": [
		"Ky6g",
		118
	],
	"./file-symlink-file.svg": [
		"gl4A",
		117
	],
	"./file-zip.svg": [
		"eRXv",
		116
	],
	"./file.svg": [
		"/+cI",
		115
	],
	"./flame.svg": [
		"z/0L",
		114
	],
	"./fold.svg": [
		"5R5o",
		113
	],
	"./gear.svg": [
		"Zu6g",
		112
	],
	"./gift.svg": [
		"2Mp3",
		111
	],
	"./gist-secret.svg": [
		"99qj",
		110
	],
	"./gist.svg": [
		"6ouv",
		109
	],
	"./git-branch.svg": [
		"WKcr",
		108
	],
	"./git-commit.svg": [
		"0PFz",
		107
	],
	"./git-compare.svg": [
		"01A+",
		106
	],
	"./git-merge.svg": [
		"Ur8E",
		105
	],
	"./git-pull-request.svg": [
		"T78t",
		104
	],
	"./globe.svg": [
		"YLE7",
		103
	],
	"./grabber.svg": [
		"cDnE",
		102
	],
	"./graph.svg": [
		"zGe3",
		101
	],
	"./heart.svg": [
		"YmUh",
		100
	],
	"./history.svg": [
		"90Vg",
		99
	],
	"./home.svg": [
		"RwvC",
		98
	],
	"./horizontal-rule.svg": [
		"u4FJ",
		97
	],
	"./hubot.svg": [
		"YsJC",
		96
	],
	"./inbox.svg": [
		"h1Cz",
		95
	],
	"./info.svg": [
		"nsGl",
		94
	],
	"./issue-closed.svg": [
		"04ei",
		93
	],
	"./issue-opened.svg": [
		"rOPw",
		92
	],
	"./issue-reopened.svg": [
		"a9+m",
		91
	],
	"./italic.svg": [
		"or0o",
		90
	],
	"./jersey.svg": [
		"grJc",
		89
	],
	"./kebab-horizontal.svg": [
		"svn9",
		88
	],
	"./kebab-vertical.svg": [
		"7tJ5",
		87
	],
	"./key.svg": [
		"IcJO",
		86
	],
	"./keyboard.svg": [
		"9B/3",
		85
	],
	"./law.svg": [
		"YMLx",
		84
	],
	"./light-bulb.svg": [
		"u1E+",
		83
	],
	"./link-external.svg": [
		"4cOr",
		82
	],
	"./link.svg": [
		"AyBU",
		81
	],
	"./list-ordered.svg": [
		"T0Xe",
		80
	],
	"./list-unordered.svg": [
		"JHJ3",
		79
	],
	"./location.svg": [
		"X3H4",
		78
	],
	"./lock.svg": [
		"vXWj",
		77
	],
	"./logo-gist.svg": [
		"KpFB",
		76
	],
	"./logo-github.svg": [
		"0xk/",
		75
	],
	"./mail-read.svg": [
		"MAS7",
		74
	],
	"./mail.svg": [
		"gkOk",
		73
	],
	"./mark-github.svg": [
		"lvC2",
		72
	],
	"./markdown.svg": [
		"DVsB",
		71
	],
	"./megaphone.svg": [
		"Q66k",
		70
	],
	"./mention.svg": [
		"6M/R",
		69
	],
	"./milestone.svg": [
		"40ne",
		68
	],
	"./mirror.svg": [
		"Qe3U",
		67
	],
	"./mortar-board.svg": [
		"/1zE",
		66
	],
	"./mute.svg": [
		"LnpU",
		65
	],
	"./no-newline.svg": [
		"g+rb",
		64
	],
	"./note.svg": [
		"pQBH",
		63
	],
	"./octoface.svg": [
		"3q80",
		62
	],
	"./organization.svg": [
		"QYXE",
		61
	],
	"./package.svg": [
		"Gopd",
		60
	],
	"./paintcan.svg": [
		"N+0L",
		59
	],
	"./pencil.svg": [
		"V4tj",
		58
	],
	"./person.svg": [
		"sOF0",
		57
	],
	"./pin.svg": [
		"jNCR",
		56
	],
	"./plug.svg": [
		"SjvS",
		55
	],
	"./plus-small.svg": [
		"BxHY",
		54
	],
	"./plus.svg": [
		"Hgwu",
		53
	],
	"./primitive-dot.svg": [
		"+6Ic",
		52
	],
	"./primitive-square.svg": [
		"kVm1",
		51
	],
	"./project.svg": [
		"1t3N",
		50
	],
	"./pulse.svg": [
		"p9T9",
		49
	],
	"./question.svg": [
		"pQQx",
		48
	],
	"./quote.svg": [
		"pHrD",
		47
	],
	"./radio-tower.svg": [
		"KKp5",
		46
	],
	"./reply.svg": [
		"VjpO",
		45
	],
	"./repo-clone.svg": [
		"Fcom",
		44
	],
	"./repo-force-push.svg": [
		"GNsk",
		43
	],
	"./repo-forked.svg": [
		"Z94a",
		42
	],
	"./repo-pull.svg": [
		"6h00",
		41
	],
	"./repo-push.svg": [
		"k+fY",
		40
	],
	"./repo.svg": [
		"Lsv1",
		39
	],
	"./report.svg": [
		"zTn5",
		38
	],
	"./rocket.svg": [
		"4uUu",
		37
	],
	"./rss.svg": [
		"ZsKT",
		36
	],
	"./ruby.svg": [
		"eeRY",
		35
	],
	"./screen-full.svg": [
		"VjfW",
		34
	],
	"./screen-normal.svg": [
		"k8j0",
		33
	],
	"./search.svg": [
		"Sk8/",
		32
	],
	"./server.svg": [
		"VHK7",
		31
	],
	"./settings.svg": [
		"6ru8",
		30
	],
	"./shield.svg": [
		"xer3",
		29
	],
	"./sign-in.svg": [
		"zwoG",
		28
	],
	"./sign-out.svg": [
		"cG/w",
		27
	],
	"./smiley.svg": [
		"OP5W",
		26
	],
	"./squirrel.svg": [
		"QzWe",
		25
	],
	"./star.svg": [
		"Bi3V",
		24
	],
	"./stop.svg": [
		"NIVM",
		23
	],
	"./sync.svg": [
		"WplN",
		22
	],
	"./tag.svg": [
		"Giwm",
		21
	],
	"./tasklist.svg": [
		"D5ct",
		20
	],
	"./telescope.svg": [
		"bFS6",
		19
	],
	"./terminal.svg": [
		"ibGD",
		18
	],
	"./text-size.svg": [
		"bTeo",
		17
	],
	"./three-bars.svg": [
		"sNox",
		16
	],
	"./thumbsdown.svg": [
		"+yTe",
		15
	],
	"./thumbsup.svg": [
		"2rxk",
		14
	],
	"./tools.svg": [
		"oNST",
		13
	],
	"./trashcan.svg": [
		"7/8x",
		12
	],
	"./triangle-down.svg": [
		"fB72",
		11
	],
	"./triangle-left.svg": [
		"foDN",
		10
	],
	"./triangle-right.svg": [
		"OepP",
		9
	],
	"./triangle-up.svg": [
		"HV7y",
		8
	],
	"./unfold.svg": [
		"LJrH",
		7
	],
	"./unmute.svg": [
		"6MeA",
		6
	],
	"./unverified.svg": [
		"iX/j",
		5
	],
	"./verified.svg": [
		"ihsD",
		4
	],
	"./versions.svg": [
		"L3dZ",
		3
	],
	"./watch.svg": [
		"oGtc",
		2
	],
	"./x.svg": [
		"O/F3",
		1
	],
	"./zap.svg": [
		"rezj",
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "KvKk";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "LGzG":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"icon":"icon__s7ZQj","editButton":"editButton__2a7gk","shareButton":"shareButton__2r9F6","meta":"meta__1Dx-r","path":"path__3ox2D","people":"people__3DRyi","person":"person__1aPuK","tags":"tags__3TXqc","tag":"tag__1KJwZ","description":"description__1nwmV"};

/***/ }),

/***/ "LTbr":
/***/ (function(module, exports, __webpack_require__) {

/* smoothscroll v0.4.0 - 2018 - Dustan Kasten, Jeremias Menichelli - MIT License */
(function () {
  'use strict';

  // polyfill

  function polyfill() {
    // aliases
    var w = window;
    var d = document;

    // return if scroll behavior is supported and polyfill is not forced
    if ('scrollBehavior' in d.documentElement.style && w.__forceSmoothScrollPolyfill__ !== true) {
      return;
    }

    // globals
    var Element = w.HTMLElement || w.Element;
    var SCROLL_TIME = 468;

    // object gathering original scroll methods
    var original = {
      scroll: w.scroll || w.scrollTo,
      scrollBy: w.scrollBy,
      elementScroll: Element.prototype.scroll || scrollElement,
      scrollIntoView: Element.prototype.scrollIntoView
    };

    // define timing method
    var now = w.performance && w.performance.now ? w.performance.now.bind(w.performance) : Date.now;

    /**
     * indicates if a the current browser is made by Microsoft
     * @method isMicrosoftBrowser
     * @param {String} userAgent
     * @returns {Boolean}
     */
    function isMicrosoftBrowser(userAgent) {
      var userAgentPatterns = ['MSIE ', 'Trident/', 'Edge/'];

      return new RegExp(userAgentPatterns.join('|')).test(userAgent);
    }

    /*
     * IE has rounding bug rounding down clientHeight and clientWidth and
     * rounding up scrollHeight and scrollWidth causing false positives
     * on hasScrollableSpace
     */
    var ROUNDING_TOLERANCE = isMicrosoftBrowser(w.navigator.userAgent) ? 1 : 0;

    /**
     * changes scroll position inside an element
     * @method scrollElement
     * @param {Number} x
     * @param {Number} y
     * @returns {undefined}
     */
    function scrollElement(x, y) {
      this.scrollLeft = x;
      this.scrollTop = y;
    }

    /**
     * returns result of applying ease math function to a number
     * @method ease
     * @param {Number} k
     * @returns {Number}
     */
    function ease(k) {
      return 0.5 * (1 - Math.cos(Math.PI * k));
    }

    /**
     * indicates if a smooth behavior should be applied
     * @method shouldBailOut
     * @param {Number|Object} firstArg
     * @returns {Boolean}
     */
    function shouldBailOut(firstArg) {
      if (firstArg === null || typeof firstArg !== 'object' || firstArg.behavior === undefined || firstArg.behavior === 'auto' || firstArg.behavior === 'instant') {
        // first argument is not an object/null
        // or behavior is auto, instant or undefined
        return true;
      }

      if (typeof firstArg === 'object' && firstArg.behavior === 'smooth') {
        // first argument is an object and behavior is smooth
        return false;
      }

      // throw error when behavior is not supported
      throw new TypeError('behavior member of ScrollOptions ' + firstArg.behavior + ' is not a valid value for enumeration ScrollBehavior.');
    }

    /**
     * indicates if an element has scrollable space in the provided axis
     * @method hasScrollableSpace
     * @param {Node} el
     * @param {String} axis
     * @returns {Boolean}
     */
    function hasScrollableSpace(el, axis) {
      if (axis === 'Y') {
        return el.clientHeight + ROUNDING_TOLERANCE < el.scrollHeight;
      }

      if (axis === 'X') {
        return el.clientWidth + ROUNDING_TOLERANCE < el.scrollWidth;
      }
    }

    /**
     * indicates if an element has a scrollable overflow property in the axis
     * @method canOverflow
     * @param {Node} el
     * @param {String} axis
     * @returns {Boolean}
     */
    function canOverflow(el, axis) {
      var overflowValue = w.getComputedStyle(el, null)['overflow' + axis];

      return overflowValue === 'auto' || overflowValue === 'scroll';
    }

    /**
     * indicates if an element can be scrolled in either axis
     * @method isScrollable
     * @param {Node} el
     * @param {String} axis
     * @returns {Boolean}
     */
    function isScrollable(el) {
      var isScrollableY = hasScrollableSpace(el, 'Y') && canOverflow(el, 'Y');
      var isScrollableX = hasScrollableSpace(el, 'X') && canOverflow(el, 'X');

      return isScrollableY || isScrollableX;
    }

    /**
     * finds scrollable parent of an element
     * @method findScrollableParent
     * @param {Node} el
     * @returns {Node} el
     */
    function findScrollableParent(el) {
      var isBody;

      do {
        el = el.parentNode;

        isBody = el === d.body;
      } while (isBody === false && isScrollable(el) === false);

      isBody = null;

      return el;
    }

    /**
     * self invoked function that, given a context, steps through scrolling
     * @method step
     * @param {Object} context
     * @returns {undefined}
     */
    function step(context) {
      var time = now();
      var value;
      var currentX;
      var currentY;
      var elapsed = (time - context.startTime) / SCROLL_TIME;

      // avoid elapsed times higher than one
      elapsed = elapsed > 1 ? 1 : elapsed;

      // apply easing to elapsed time
      value = ease(elapsed);

      currentX = context.startX + (context.x - context.startX) * value;
      currentY = context.startY + (context.y - context.startY) * value;

      context.method.call(context.scrollable, currentX, currentY);

      // scroll more if we have not reached our destination
      if (currentX !== context.x || currentY !== context.y) {
        w.requestAnimationFrame(step.bind(w, context));
      }
    }

    /**
     * scrolls window or element with a smooth behavior
     * @method smoothScroll
     * @param {Object|Node} el
     * @param {Number} x
     * @param {Number} y
     * @returns {undefined}
     */
    function smoothScroll(el, x, y) {
      var scrollable;
      var startX;
      var startY;
      var method;
      var startTime = now();

      // define scroll context
      if (el === d.body) {
        scrollable = w;
        startX = w.scrollX || w.pageXOffset;
        startY = w.scrollY || w.pageYOffset;
        method = original.scroll;
      } else {
        scrollable = el;
        startX = el.scrollLeft;
        startY = el.scrollTop;
        method = scrollElement;
      }

      // scroll looping over a frame
      step({
        scrollable: scrollable,
        method: method,
        startTime: startTime,
        startX: startX,
        startY: startY,
        x: x,
        y: y
      });
    }

    // ORIGINAL METHODS OVERRIDES
    // w.scroll and w.scrollTo
    w.scroll = w.scrollTo = function () {
      // avoid action when no arguments are passed
      if (arguments[0] === undefined) {
        return;
      }

      // avoid smooth behavior if not required
      if (shouldBailOut(arguments[0]) === true) {
        original.scroll.call(w, arguments[0].left !== undefined ? arguments[0].left : typeof arguments[0] !== 'object' ? arguments[0] : w.scrollX || w.pageXOffset,
        // use top prop, second argument if present or fallback to scrollY
        arguments[0].top !== undefined ? arguments[0].top : arguments[1] !== undefined ? arguments[1] : w.scrollY || w.pageYOffset);

        return;
      }

      // LET THE SMOOTHNESS BEGIN!
      smoothScroll.call(w, d.body, arguments[0].left !== undefined ? ~~arguments[0].left : w.scrollX || w.pageXOffset, arguments[0].top !== undefined ? ~~arguments[0].top : w.scrollY || w.pageYOffset);
    };

    // w.scrollBy
    w.scrollBy = function () {
      // avoid action when no arguments are passed
      if (arguments[0] === undefined) {
        return;
      }

      // avoid smooth behavior if not required
      if (shouldBailOut(arguments[0])) {
        original.scrollBy.call(w, arguments[0].left !== undefined ? arguments[0].left : typeof arguments[0] !== 'object' ? arguments[0] : 0, arguments[0].top !== undefined ? arguments[0].top : arguments[1] !== undefined ? arguments[1] : 0);

        return;
      }

      // LET THE SMOOTHNESS BEGIN!
      smoothScroll.call(w, d.body, ~~arguments[0].left + (w.scrollX || w.pageXOffset), ~~arguments[0].top + (w.scrollY || w.pageYOffset));
    };

    // Element.prototype.scroll and Element.prototype.scrollTo
    Element.prototype.scroll = Element.prototype.scrollTo = function () {
      // avoid action when no arguments are passed
      if (arguments[0] === undefined) {
        return;
      }

      // avoid smooth behavior if not required
      if (shouldBailOut(arguments[0]) === true) {
        // if one number is passed, throw error to match Firefox implementation
        if (typeof arguments[0] === 'number' && arguments[1] === undefined) {
          throw new SyntaxError('Value could not be converted');
        }

        original.elementScroll.call(this,
        // use left prop, first number argument or fallback to scrollLeft
        arguments[0].left !== undefined ? ~~arguments[0].left : typeof arguments[0] !== 'object' ? ~~arguments[0] : this.scrollLeft,
        // use top prop, second argument or fallback to scrollTop
        arguments[0].top !== undefined ? ~~arguments[0].top : arguments[1] !== undefined ? ~~arguments[1] : this.scrollTop);

        return;
      }

      var left = arguments[0].left;
      var top = arguments[0].top;

      // LET THE SMOOTHNESS BEGIN!
      smoothScroll.call(this, this, typeof left === 'undefined' ? this.scrollLeft : ~~left, typeof top === 'undefined' ? this.scrollTop : ~~top);
    };

    // Element.prototype.scrollBy
    Element.prototype.scrollBy = function () {
      // avoid action when no arguments are passed
      if (arguments[0] === undefined) {
        return;
      }

      // avoid smooth behavior if not required
      if (shouldBailOut(arguments[0]) === true) {
        original.elementScroll.call(this, arguments[0].left !== undefined ? ~~arguments[0].left + this.scrollLeft : ~~arguments[0] + this.scrollLeft, arguments[0].top !== undefined ? ~~arguments[0].top + this.scrollTop : ~~arguments[1] + this.scrollTop);

        return;
      }

      this.scroll({
        left: ~~arguments[0].left + this.scrollLeft,
        top: ~~arguments[0].top + this.scrollTop,
        behavior: arguments[0].behavior
      });
    };

    // Element.prototype.scrollIntoView
    Element.prototype.scrollIntoView = function () {
      // avoid smooth behavior if not required
      if (shouldBailOut(arguments[0]) === true) {
        original.scrollIntoView.call(this, arguments[0] === undefined ? true : arguments[0]);

        return;
      }

      // LET THE SMOOTHNESS BEGIN!
      var scrollableParent = findScrollableParent(this);
      var parentRects = scrollableParent.getBoundingClientRect();
      var clientRects = this.getBoundingClientRect();

      if (scrollableParent !== d.body) {
        // reveal element inside parent
        smoothScroll.call(this, scrollableParent, scrollableParent.scrollLeft + clientRects.left - parentRects.left, scrollableParent.scrollTop + clientRects.top - parentRects.top);

        // reveal parent in viewport unless is fixed
        if (w.getComputedStyle(scrollableParent).position !== 'fixed') {
          w.scrollBy({
            left: parentRects.left,
            top: parentRects.top,
            behavior: 'smooth'
          });
        }
      } else {
        // reveal element in viewport
        w.scrollBy({
          left: clientRects.left,
          top: clientRects.top,
          behavior: 'smooth'
        });
      }
    };
  }

  if (true) {
    // commonjs
    module.exports = { polyfill: polyfill };
  } else {
    // global
    polyfill();
  }
})();

/***/ }),

/***/ "Lglr":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"home":"home__1CGvB"};

/***/ }),

/***/ "NHdN":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"buttonContainer":"buttonContainer__3ltan"};

/***/ }),

/***/ "UQex":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

function makeEmptyFunction(arg) {
  return function () {
    return arg;
  };
}

/**
 * This function accepts and discards inputs; it has no side effects. This is
 * primarily useful idiomatically for overridable function endpoints which
 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
 */
var emptyFunction = function emptyFunction() {};

emptyFunction.thatReturns = makeEmptyFunction;
emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
emptyFunction.thatReturnsNull = makeEmptyFunction(null);
emptyFunction.thatReturnsThis = function () {
  return this;
};
emptyFunction.thatReturnsArgument = function (arg) {
  return arg;
};

module.exports = emptyFunction;

/***/ }),

/***/ "WDG1":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("ztNz");

/***/ }),

/***/ "d1Ss":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var React = __webpack_require__("eW0v");

module.exports = function (props) {
  return React.createElement('button', { type: 'button', className: props.classNames.selectedTag, title: 'Click to remove tag', onClick: props.onDelete }, React.createElement('span', { className: props.classNames.selectedTagName }, props.tag.name));
};

/***/ }),

/***/ "dwON":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"parent":"parent__Xi3bm","title":"title__2NALV"};

/***/ }),

/***/ "eW0v":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "version", function() { return version; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOM", function() { return DOM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Children", function() { return Children; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createClass", function() { return createClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createFactory", function() { return createFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createElement", function() { return createElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cloneElement", function() { return cloneElement$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isValidElement", function() { return isValidElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findDOMNode", function() { return findDOMNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unmountComponentAtNode", function() { return unmountComponentAtNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Component", function() { return Component$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PureComponent", function() { return PureComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unstable_renderSubtreeIntoContainer", function() { return renderSubtreeIntoContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return extend; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_prop_types__ = __webpack_require__("5D9O");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_preact__ = __webpack_require__("KM04");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_preact___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_preact__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "PropTypes", function() { return __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a; });



var version = '15.1.0'; // trick libraries to think we are react

var ELEMENTS = 'a abbr address area article aside audio b base bdi bdo big blockquote body br button canvas caption cite code col colgroup data datalist dd del details dfn dialog div dl dt em embed fieldset figcaption figure footer form h1 h2 h3 h4 h5 h6 head header hgroup hr html i iframe img input ins kbd keygen label legend li link main map mark menu menuitem meta meter nav noscript object ol optgroup option output p param picture pre progress q rp rt ruby s samp script section select small source span strong style sub summary sup table tbody td textarea tfoot th thead time title tr track u ul var video wbr circle clipPath defs ellipse g image line linearGradient mask path pattern polygon polyline radialGradient rect stop svg text tspan'.split(' ');

var REACT_ELEMENT_TYPE = typeof Symbol !== 'undefined' && Symbol.for && Symbol.for('react.element') || 0xeac7;

var COMPONENT_WRAPPER_KEY = typeof Symbol !== 'undefined' && Symbol.for ? Symbol.for('__preactCompatWrapper') : '__preactCompatWrapper';

// don't autobind these methods since they already have guaranteed context.
var AUTOBIND_BLACKLIST = {
	constructor: 1,
	render: 1,
	shouldComponentUpdate: 1,
	componentWillReceiveProps: 1,
	componentWillUpdate: 1,
	componentDidUpdate: 1,
	componentWillMount: 1,
	componentDidMount: 1,
	componentWillUnmount: 1,
	componentDidUnmount: 1
};

var CAMEL_PROPS = /^(?:accent|alignment|arabic|baseline|cap|clip|color|fill|flood|font|glyph|horiz|marker|overline|paint|stop|strikethrough|stroke|text|underline|unicode|units|v|vector|vert|word|writing|x)[A-Z]/;

var BYPASS_HOOK = {};

/*global process*/
var DEV = typeof process === 'undefined' || !process.env || "production" !== 'production';

// a component that renders nothing. Used to replace components for unmountComponentAtNode.
function EmptyComponent() {
	return null;
}

// make react think we're react.
var VNode = Object(__WEBPACK_IMPORTED_MODULE_1_preact__["h"])('a', null).constructor;
VNode.prototype.$$typeof = REACT_ELEMENT_TYPE;
VNode.prototype.preactCompatUpgraded = false;
VNode.prototype.preactCompatNormalized = false;

Object.defineProperty(VNode.prototype, 'type', {
	get: function get() {
		return this.nodeName;
	},
	set: function set(v) {
		this.nodeName = v;
	},
	configurable: true
});

Object.defineProperty(VNode.prototype, 'props', {
	get: function get() {
		return this.attributes;
	},
	set: function set(v) {
		this.attributes = v;
	},
	configurable: true
});

var oldEventHook = __WEBPACK_IMPORTED_MODULE_1_preact__["options"].event;
__WEBPACK_IMPORTED_MODULE_1_preact__["options"].event = function (e) {
	if (oldEventHook) {
		e = oldEventHook(e);
	}
	e.persist = Object;
	e.nativeEvent = e;
	return e;
};

var oldVnodeHook = __WEBPACK_IMPORTED_MODULE_1_preact__["options"].vnode;
__WEBPACK_IMPORTED_MODULE_1_preact__["options"].vnode = function (vnode) {
	if (!vnode.preactCompatUpgraded) {
		vnode.preactCompatUpgraded = true;

		var tag = vnode.nodeName,
		    attrs = vnode.attributes = extend({}, vnode.attributes);

		if (typeof tag === 'function') {
			if (tag[COMPONENT_WRAPPER_KEY] === true || tag.prototype && 'isReactComponent' in tag.prototype) {
				if (vnode.children && String(vnode.children) === '') {
					vnode.children = undefined;
				}
				if (vnode.children) {
					attrs.children = vnode.children;
				}

				if (!vnode.preactCompatNormalized) {
					normalizeVNode(vnode);
				}
				handleComponentVNode(vnode);
			}
		} else {
			if (vnode.children && String(vnode.children) === '') {
				vnode.children = undefined;
			}
			if (vnode.children) {
				attrs.children = vnode.children;
			}

			if (attrs.defaultValue) {
				if (!attrs.value && attrs.value !== 0) {
					attrs.value = attrs.defaultValue;
				}
				delete attrs.defaultValue;
			}

			handleElementVNode(vnode, attrs);
		}
	}

	if (oldVnodeHook) {
		oldVnodeHook(vnode);
	}
};

function handleComponentVNode(vnode) {
	var tag = vnode.nodeName,
	    a = vnode.attributes;

	vnode.attributes = {};
	if (tag.defaultProps) {
		extend(vnode.attributes, tag.defaultProps);
	}
	if (a) {
		extend(vnode.attributes, a);
	}
}

function handleElementVNode(vnode, a) {
	var shouldSanitize, attrs, i;
	if (a) {
		for (i in a) {
			if (shouldSanitize = CAMEL_PROPS.test(i)) {
				break;
			}
		}
		if (shouldSanitize) {
			attrs = vnode.attributes = {};
			for (i in a) {
				if (a.hasOwnProperty(i)) {
					attrs[CAMEL_PROPS.test(i) ? i.replace(/([A-Z0-9])/, '-$1').toLowerCase() : i] = a[i];
				}
			}
		}
	}
}

// proxy render() since React returns a Component reference.
function render$1(vnode, parent, callback) {
	var prev = parent && parent._preactCompatRendered && parent._preactCompatRendered.base;

	// ignore impossible previous renders
	if (prev && prev.parentNode !== parent) {
		prev = null;
	}

	// default to first Element child
	if (!prev && parent) {
		prev = parent.firstElementChild;
	}

	// remove unaffected siblings
	for (var i = parent.childNodes.length; i--;) {
		if (parent.childNodes[i] !== prev) {
			parent.removeChild(parent.childNodes[i]);
		}
	}

	var out = Object(__WEBPACK_IMPORTED_MODULE_1_preact__["render"])(vnode, parent, prev);
	if (parent) {
		parent._preactCompatRendered = out && (out._component || { base: out });
	}
	if (typeof callback === 'function') {
		callback();
	}
	return out && out._component || out;
}

var ContextProvider = function ContextProvider() {};

ContextProvider.prototype.getChildContext = function () {
	return this.props.context;
};
ContextProvider.prototype.render = function (props) {
	return props.children[0];
};

function renderSubtreeIntoContainer(parentComponent, vnode, container, callback) {
	var wrap = Object(__WEBPACK_IMPORTED_MODULE_1_preact__["h"])(ContextProvider, { context: parentComponent.context }, vnode);
	var renderContainer = render$1(wrap, container);
	var component = renderContainer._component || renderContainer.base;
	if (callback) {
		callback.call(component, renderContainer);
	}
	return component;
}

function unmountComponentAtNode(container) {
	var existing = container._preactCompatRendered && container._preactCompatRendered.base;
	if (existing && existing.parentNode === container) {
		Object(__WEBPACK_IMPORTED_MODULE_1_preact__["render"])(Object(__WEBPACK_IMPORTED_MODULE_1_preact__["h"])(EmptyComponent), container, existing);
		return true;
	}
	return false;
}

var ARR = [];

// This API is completely unnecessary for Preact, so it's basically passthrough.
var Children = {
	map: function map(children, fn, ctx) {
		if (children == null) {
			return null;
		}
		children = Children.toArray(children);
		if (ctx && ctx !== children) {
			fn = fn.bind(ctx);
		}
		return children.map(fn);
	},
	forEach: function forEach(children, fn, ctx) {
		if (children == null) {
			return null;
		}
		children = Children.toArray(children);
		if (ctx && ctx !== children) {
			fn = fn.bind(ctx);
		}
		children.forEach(fn);
	},
	count: function count(children) {
		return children && children.length || 0;
	},
	only: function only(children) {
		children = Children.toArray(children);
		if (children.length !== 1) {
			throw new Error('Children.only() expects only one child.');
		}
		return children[0];
	},
	toArray: function toArray(children) {
		if (children == null) {
			return [];
		}
		return ARR.concat(children);
	}
};

/** Track current render() component for ref assignment */
var currentComponent;

function createFactory(type) {
	return createElement.bind(null, type);
}

var DOM = {};
for (var i = ELEMENTS.length; i--;) {
	DOM[ELEMENTS[i]] = createFactory(ELEMENTS[i]);
}

function upgradeToVNodes(arr, offset) {
	for (var i = offset || 0; i < arr.length; i++) {
		var obj = arr[i];
		if (Array.isArray(obj)) {
			upgradeToVNodes(obj);
		} else if (obj && typeof obj === 'object' && !isValidElement(obj) && (obj.props && obj.type || obj.attributes && obj.nodeName || obj.children)) {
			arr[i] = createElement(obj.type || obj.nodeName, obj.props || obj.attributes, obj.children);
		}
	}
}

function isStatelessComponent(c) {
	return typeof c === 'function' && !(c.prototype && c.prototype.render);
}

// wraps stateless functional components in a PropTypes validator
function wrapStatelessComponent(WrappedComponent) {
	return createClass({
		displayName: WrappedComponent.displayName || WrappedComponent.name,
		render: function render() {
			return WrappedComponent(this.props, this.context);
		}
	});
}

function statelessComponentHook(Ctor) {
	var Wrapped = Ctor[COMPONENT_WRAPPER_KEY];
	if (Wrapped) {
		return Wrapped === true ? Ctor : Wrapped;
	}

	Wrapped = wrapStatelessComponent(Ctor);

	Object.defineProperty(Wrapped, COMPONENT_WRAPPER_KEY, { configurable: true, value: true });
	Wrapped.displayName = Ctor.displayName;
	Wrapped.propTypes = Ctor.propTypes;
	Wrapped.defaultProps = Ctor.defaultProps;

	Object.defineProperty(Ctor, COMPONENT_WRAPPER_KEY, { configurable: true, value: Wrapped });

	return Wrapped;
}

function createElement() {
	var args = [],
	    len = arguments.length;
	while (len--) {
		args[len] = arguments[len];
	}upgradeToVNodes(args, 2);
	return normalizeVNode(__WEBPACK_IMPORTED_MODULE_1_preact__["h"].apply(void 0, args));
}

function normalizeVNode(vnode) {
	vnode.preactCompatNormalized = true;

	applyClassName(vnode);

	if (isStatelessComponent(vnode.nodeName)) {
		vnode.nodeName = statelessComponentHook(vnode.nodeName);
	}

	var ref = vnode.attributes.ref,
	    type = ref && typeof ref;
	if (currentComponent && (type === 'string' || type === 'number')) {
		vnode.attributes.ref = createStringRefProxy(ref, currentComponent);
	}

	applyEventNormalization(vnode);

	return vnode;
}

function cloneElement$1(element, props) {
	var children = [],
	    len = arguments.length - 2;
	while (len-- > 0) {
		children[len] = arguments[len + 2];
	}if (!isValidElement(element)) {
		return element;
	}
	var elementProps = element.attributes || element.props;
	var node = Object(__WEBPACK_IMPORTED_MODULE_1_preact__["h"])(element.nodeName || element.type, extend({}, elementProps), element.children || elementProps && elementProps.children);
	// Only provide the 3rd argument if needed.
	// Arguments 3+ overwrite element.children in preactCloneElement
	var cloneArgs = [node, props];
	if (children && children.length) {
		cloneArgs.push(children);
	} else if (props && props.children) {
		cloneArgs.push(props.children);
	}
	return normalizeVNode(__WEBPACK_IMPORTED_MODULE_1_preact__["cloneElement"].apply(void 0, cloneArgs));
}

function isValidElement(element) {
	return element && (element instanceof VNode || element.$$typeof === REACT_ELEMENT_TYPE);
}

function createStringRefProxy(name, component) {
	return component._refProxies[name] || (component._refProxies[name] = function (resolved) {
		if (component && component.refs) {
			component.refs[name] = resolved;
			if (resolved === null) {
				delete component._refProxies[name];
				component = null;
			}
		}
	});
}

function applyEventNormalization(ref) {
	var nodeName = ref.nodeName;
	var attributes = ref.attributes;

	if (!attributes || typeof nodeName !== 'string') {
		return;
	}
	var props = {};
	for (var i in attributes) {
		props[i.toLowerCase()] = i;
	}
	if (props.ondoubleclick) {
		attributes.ondblclick = attributes[props.ondoubleclick];
		delete attributes[props.ondoubleclick];
	}
	// for *textual inputs* (incl textarea), normalize `onChange` -> `onInput`:
	if (props.onchange && (nodeName === 'textarea' || nodeName.toLowerCase() === 'input' && !/^fil|che|rad/i.test(attributes.type))) {
		var normalized = props.oninput || 'oninput';
		if (!attributes[normalized]) {
			attributes[normalized] = multihook([attributes[normalized], attributes[props.onchange]]);
			delete attributes[props.onchange];
		}
	}
}

function applyClassName(vnode) {
	var a = vnode.attributes || (vnode.attributes = {});
	classNameDescriptor.enumerable = 'className' in a;
	if (a.className) {
		a.class = a.className;
	}
	Object.defineProperty(a, 'className', classNameDescriptor);
}

var classNameDescriptor = {
	configurable: true,
	get: function get() {
		return this.class;
	},
	set: function set(v) {
		this.class = v;
	}
};

function extend(base, props) {
	var arguments$1 = arguments;

	for (var i = 1, obj = void 0; i < arguments.length; i++) {
		if (obj = arguments$1[i]) {
			for (var key in obj) {
				if (obj.hasOwnProperty(key)) {
					base[key] = obj[key];
				}
			}
		}
	}
	return base;
}

function shallowDiffers(a, b) {
	for (var i in a) {
		if (!(i in b)) {
			return true;
		}
	}
	for (var i$1 in b) {
		if (a[i$1] !== b[i$1]) {
			return true;
		}
	}
	return false;
}

function findDOMNode(component) {
	return component && component.base || component;
}

function F() {}

function createClass(obj) {
	function cl(props, context) {
		bindAll(this);
		Component$1.call(this, props, context, BYPASS_HOOK);
		newComponentHook.call(this, props, context);
	}

	obj = extend({ constructor: cl }, obj);

	// We need to apply mixins here so that getDefaultProps is correctly mixed
	if (obj.mixins) {
		applyMixins(obj, collateMixins(obj.mixins));
	}
	if (obj.statics) {
		extend(cl, obj.statics);
	}
	if (obj.propTypes) {
		cl.propTypes = obj.propTypes;
	}
	if (obj.defaultProps) {
		cl.defaultProps = obj.defaultProps;
	}
	if (obj.getDefaultProps) {
		cl.defaultProps = obj.getDefaultProps.call(cl);
	}

	F.prototype = Component$1.prototype;
	cl.prototype = extend(new F(), obj);

	cl.displayName = obj.displayName || 'Component';

	return cl;
}

// Flatten an Array of mixins to a map of method name to mixin implementations
function collateMixins(mixins) {
	var keyed = {};
	for (var i = 0; i < mixins.length; i++) {
		var mixin = mixins[i];
		for (var key in mixin) {
			if (mixin.hasOwnProperty(key) && typeof mixin[key] === 'function') {
				(keyed[key] || (keyed[key] = [])).push(mixin[key]);
			}
		}
	}
	return keyed;
}

// apply a mapping of Arrays of mixin methods to a component prototype
function applyMixins(proto, mixins) {
	for (var key in mixins) {
		if (mixins.hasOwnProperty(key)) {
			proto[key] = multihook(mixins[key].concat(proto[key] || ARR), key === 'getDefaultProps' || key === 'getInitialState' || key === 'getChildContext');
		}
	}
}

function bindAll(ctx) {
	for (var i in ctx) {
		var v = ctx[i];
		if (typeof v === 'function' && !v.__bound && !AUTOBIND_BLACKLIST.hasOwnProperty(i)) {
			(ctx[i] = v.bind(ctx)).__bound = true;
		}
	}
}

function callMethod(ctx, m, args) {
	if (typeof m === 'string') {
		m = ctx.constructor.prototype[m];
	}
	if (typeof m === 'function') {
		return m.apply(ctx, args);
	}
}

function multihook(hooks, skipDuplicates) {
	return function () {
		var arguments$1 = arguments;
		var this$1 = this;

		var ret;
		for (var i = 0; i < hooks.length; i++) {
			var r = callMethod(this$1, hooks[i], arguments$1);

			if (skipDuplicates && r != null) {
				if (!ret) {
					ret = {};
				}
				for (var key in r) {
					if (r.hasOwnProperty(key)) {
						ret[key] = r[key];
					}
				}
			} else if (typeof r !== 'undefined') {
				ret = r;
			}
		}
		return ret;
	};
}

function newComponentHook(props, context) {
	propsHook.call(this, props, context);
	this.componentWillReceiveProps = multihook([propsHook, this.componentWillReceiveProps || 'componentWillReceiveProps']);
	this.render = multihook([propsHook, beforeRender, this.render || 'render', afterRender]);
}

function propsHook(props, context) {
	if (!props) {
		return;
	}

	// React annoyingly special-cases single children, and some react components are ridiculously strict about this.
	var c = props.children;
	if (c && Array.isArray(c) && c.length === 1 && (typeof c[0] === 'string' || typeof c[0] === 'function' || c[0] instanceof VNode)) {
		props.children = c[0];

		// but its totally still going to be an Array.
		if (props.children && typeof props.children === 'object') {
			props.children.length = 1;
			props.children[0] = props.children;
		}
	}

	// add proptype checking
	if (DEV) {
		var ctor = typeof this === 'function' ? this : this.constructor,
		    propTypes = this.propTypes || ctor.propTypes;
		var displayName = this.displayName || ctor.name;

		if (propTypes) {
			__WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.checkPropTypes(propTypes, props, 'prop', displayName);
		}
	}
}

function beforeRender(props) {
	currentComponent = this;
}

function afterRender() {
	if (currentComponent === this) {
		currentComponent = null;
	}
}

function Component$1(props, context, opts) {
	__WEBPACK_IMPORTED_MODULE_1_preact__["Component"].call(this, props, context);
	this.state = this.getInitialState ? this.getInitialState() : {};
	this.refs = {};
	this._refProxies = {};
	if (opts !== BYPASS_HOOK) {
		newComponentHook.call(this, props, context);
	}
}
extend(Component$1.prototype = new __WEBPACK_IMPORTED_MODULE_1_preact__["Component"](), {
	constructor: Component$1,

	isReactComponent: {},

	replaceState: function replaceState(state, callback) {
		var this$1 = this;

		this.setState(state, callback);
		for (var i in this$1.state) {
			if (!(i in state)) {
				delete this$1.state[i];
			}
		}
	},

	getDOMNode: function getDOMNode() {
		return this.base;
	},

	isMounted: function isMounted() {
		return !!this.base;
	}
});

function PureComponent(props, context) {
	Component$1.call(this, props, context);
}
F.prototype = Component$1.prototype;
PureComponent.prototype = new F();
PureComponent.prototype.isPureReactComponent = true;
PureComponent.prototype.shouldComponentUpdate = function (props, state) {
	return shallowDiffers(this.props, props) || shallowDiffers(this.state, state);
};

var index = {
	version: version,
	DOM: DOM,
	PropTypes: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a,
	Children: Children,
	render: render$1,
	createClass: createClass,
	createFactory: createFactory,
	createElement: createElement,
	cloneElement: cloneElement$1,
	isValidElement: isValidElement,
	findDOMNode: findDOMNode,
	unmountComponentAtNode: unmountComponentAtNode,
	Component: Component$1,
	PureComponent: PureComponent,
	unstable_renderSubtreeIntoContainer: renderSubtreeIntoContainer,
	__spread: extend
};

/* harmony default export */ __webpack_exports__["default"] = (index);
//# sourceMappingURL=preact-compat.es.js.map

/***/ }),

/***/ "elp1":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"shareContainer":"shareContainer__2xveA","shareTime":"shareTime__5iTtM","shareButton":"shareButton__1aIYl","icon":"icon__3cNAN","shareText":"shareText__3P7mg"};

/***/ }),

/***/ "jNht":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"loader":"loader__IxjZs","load7":"load7__3iDX9"};

/***/ }),

/***/ "o6ac":
/***/ (function(module, exports, __webpack_require__) {

var t = __webpack_require__("KM04");function n(t, n) {
  "function" == typeof t && (t = t(n));var r = {};for (var e in t) {
    r[e] = n.action(t[e]);
  }return r;
}function r(t) {
  return "string" == typeof t && (t = t.split(/\s*,\s*/)), function (n) {
    for (var r = {}, e = 0; e < t.length; e++) {
      r[t[e]] = n[t[e]];
    }return r;
  };
}function e(t, n) {
  for (var r in n) {
    t[r] = n[r];
  }return t;
}function o(o, i) {
  return "function" != typeof o && (o = r(o || [])), function (r) {
    function u(u, c) {
      var f = this,
          s = c.store,
          p = o(s ? s.getState() : {}, u),
          a = i ? n(i, s) : { store: s },
          l = function l() {
        var t = o(s ? s.getState() : {}, f.props);for (var n in t) {
          if (t[n] !== p[n]) return p = t, f.setState(null);
        }for (var r in p) {
          if (!(r in t)) return p = t, f.setState(null);
        }
      };this.componentDidMount = function () {
        l(), s.subscribe(l);
      }, this.componentWillUnmount = function () {
        s.unsubscribe(l);
      }, this.render = function (n) {
        return t.h(r, e(e(e({}, a), n), p));
      };
    }return (u.prototype = new t.Component()).constructor = u;
  };
}function i(t) {
  this.getChildContext = function () {
    return { store: t.store };
  };
}i.prototype.render = function (t) {
  return t.children[0];
}, exports.connect = o, exports.Provider = i;
//# sourceMappingURL=preact.js.map

/***/ }),

/***/ "sw5u":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Link = exports.Match = undefined;

var _extends = Object.assign || function (target) {
	for (var i = 1; i < arguments.length; i++) {
		var source = arguments[i];for (var key in source) {
			if (Object.prototype.hasOwnProperty.call(source, key)) {
				target[key] = source[key];
			}
		}
	}return target;
};

var _preact = __webpack_require__("KM04");

var _preactRouter = __webpack_require__("/QC5");

function _objectWithoutProperties(obj, keys) {
	var target = {};for (var i in obj) {
		if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
	}return target;
}

function _classCallCheck(instance, Constructor) {
	if (!(instance instanceof Constructor)) {
		throw new TypeError("Cannot call a class as a function");
	}
}

function _possibleConstructorReturn(self, call) {
	if (!self) {
		throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	}return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
	if (typeof superClass !== "function" && superClass !== null) {
		throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
	}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var Match = exports.Match = function (_Component) {
	_inherits(Match, _Component);

	function Match() {
		var _temp, _this, _ret;

		_classCallCheck(this, Match);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.update = function (url) {
			_this.nextUrl = url;
			_this.setState({});
		}, _temp), _possibleConstructorReturn(_this, _ret);
	}

	Match.prototype.componentDidMount = function componentDidMount() {
		_preactRouter.subscribers.push(this.update);
	};

	Match.prototype.componentWillUnmount = function componentWillUnmount() {
		_preactRouter.subscribers.splice(_preactRouter.subscribers.indexOf(this.update) >>> 0, 1);
	};

	Match.prototype.render = function render(props) {
		var url = this.nextUrl || (0, _preactRouter.getCurrentUrl)(),
		    path = url.replace(/\?.+$/, '');
		this.nextUrl = null;
		return props.children[0] && props.children[0]({
			url: url,
			path: path,
			matches: path === props.path
		});
	};

	return Match;
}(_preact.Component);

var Link = function Link(_ref) {
	var activeClassName = _ref.activeClassName,
	    path = _ref.path,
	    props = _objectWithoutProperties(_ref, ['activeClassName', 'path']);

	return (0, _preact.h)(Match, { path: path || props.href }, function (_ref2) {
		var matches = _ref2.matches;
		return (0, _preact.h)(_preactRouter.Link, _extends({}, props, { 'class': [props.class || props.className, matches && activeClassName].filter(Boolean).join(' ') }));
	});
};

exports.Link = Link;
exports.default = Match;

Match.Link = Link;

/***/ }),

/***/ "uDjN":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"video":"video__mNK9R","videoLink":"videoLink__3Gu3e","active":"active__2_iOI","popper":"popper__1jV98","popperarrow":"popperarrow__1-LH5"};

/***/ }),

/***/ "wRU+":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var validateFormat = function validateFormat(format) {};

if (false) {
  validateFormat = function validateFormat(format) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  };
}

function invariant(condition, format, a, b, c, d, e, f) {
  validateFormat(format);

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(format.replace(/%s/g, function () {
        return args[argIndex++];
      }));
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
}

module.exports = invariant;

/***/ }),

/***/ "wVGV":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var emptyFunction = __webpack_require__("UQex");
var invariant = __webpack_require__("wRU+");
var ReactPropTypesSecret = __webpack_require__("Asjh");

module.exports = function () {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    invariant(false, 'Calling PropTypes validators directly is not supported by the `prop-types` package. ' + 'Use PropTypes.checkPropTypes() to call them. ' + 'Read more at http://fb.me/use-check-prop-types');
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim
  };

  ReactPropTypes.checkPropTypes = emptyFunction;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

/***/ }),

/***/ "yY49":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "ztNz":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (root) {
    'use strict';

    /**
     * charMap
     * @type {Object}
     */

    var charMap = {

        // latin
        'À': 'A',
        'Á': 'A',
        'Â': 'A',
        'Ã': 'A',
        'Ä': 'Ae',
        'Å': 'A',
        'Æ': 'AE',
        'Ç': 'C',
        'È': 'E',
        'É': 'E',
        'Ê': 'E',
        'Ë': 'E',
        'Ì': 'I',
        'Í': 'I',
        'Î': 'I',
        'Ï': 'I',
        'Ð': 'D',
        'Ñ': 'N',
        'Ò': 'O',
        'Ó': 'O',
        'Ô': 'O',
        'Õ': 'O',
        'Ö': 'Oe',
        'Ő': 'O',
        'Ø': 'O',
        'Ù': 'U',
        'Ú': 'U',
        'Û': 'U',
        'Ü': 'Ue',
        'Ű': 'U',
        'Ý': 'Y',
        'Þ': 'TH',
        'ß': 'ss',
        'à': 'a',
        'á': 'a',
        'â': 'a',
        'ã': 'a',
        'ä': 'ae',
        'å': 'a',
        'æ': 'ae',
        'ç': 'c',
        'è': 'e',
        'é': 'e',
        'ê': 'e',
        'ë': 'e',
        'ì': 'i',
        'í': 'i',
        'î': 'i',
        'ï': 'i',
        'ð': 'd',
        'ñ': 'n',
        'ò': 'o',
        'ó': 'o',
        'ô': 'o',
        'õ': 'o',
        'ö': 'oe',
        'ő': 'o',
        'ø': 'o',
        'ù': 'u',
        'ú': 'u',
        'û': 'u',
        'ü': 'ue',
        'ű': 'u',
        'ý': 'y',
        'þ': 'th',
        'ÿ': 'y',
        'ẞ': 'SS',

        // language specific

        // Arabic
        'ا': 'a',
        'أ': 'a',
        'إ': 'i',
        'آ': 'aa',
        'ؤ': 'u',
        'ئ': 'e',
        'ء': 'a',
        'ب': 'b',
        'ت': 't',
        'ث': 'th',
        'ج': 'j',
        'ح': 'h',
        'خ': 'kh',
        'د': 'd',
        'ذ': 'th',
        'ر': 'r',
        'ز': 'z',
        'س': 's',
        'ش': 'sh',
        'ص': 's',
        'ض': 'dh',
        'ط': 't',
        'ظ': 'z',
        'ع': 'a',
        'غ': 'gh',
        'ف': 'f',
        'ق': 'q',
        'ك': 'k',
        'ل': 'l',
        'م': 'm',
        'ن': 'n',
        'ه': 'h',
        'و': 'w',
        'ي': 'y',
        'ى': 'a',
        'ة': 'h',
        'ﻻ': 'la',
        'ﻷ': 'laa',
        'ﻹ': 'lai',
        'ﻵ': 'laa',

        // Persian additional characters than Arabic
        'گ': 'g',
        'چ': 'ch',
        'پ': 'p',
        'ژ': 'zh',
        'ک': 'k',
        'ی': 'y',

        // Arabic diactrics
        'َ': 'a',
        'ً': 'an',
        'ِ': 'e',
        'ٍ': 'en',
        'ُ': 'u',
        'ٌ': 'on',
        'ْ': '',

        // Arabic numbers
        '٠': '0',
        '١': '1',
        '٢': '2',
        '٣': '3',
        '٤': '4',
        '٥': '5',
        '٦': '6',
        '٧': '7',
        '٨': '8',
        '٩': '9',

        // Persian numbers
        '۰': '0',
        '۱': '1',
        '۲': '2',
        '۳': '3',
        '۴': '4',
        '۵': '5',
        '۶': '6',
        '۷': '7',
        '۸': '8',
        '۹': '9',

        // Burmese consonants
        'က': 'k',
        'ခ': 'kh',
        'ဂ': 'g',
        'ဃ': 'ga',
        'င': 'ng',
        'စ': 's',
        'ဆ': 'sa',
        'ဇ': 'z',
        'စျ': 'za',
        'ည': 'ny',
        'ဋ': 't',
        'ဌ': 'ta',
        'ဍ': 'd',
        'ဎ': 'da',
        'ဏ': 'na',
        'တ': 't',
        'ထ': 'ta',
        'ဒ': 'd',
        'ဓ': 'da',
        'န': 'n',
        'ပ': 'p',
        'ဖ': 'pa',
        'ဗ': 'b',
        'ဘ': 'ba',
        'မ': 'm',
        'ယ': 'y',
        'ရ': 'ya',
        'လ': 'l',
        'ဝ': 'w',
        'သ': 'th',
        'ဟ': 'h',
        'ဠ': 'la',
        'အ': 'a',
        // consonant character combos
        'ြ': 'y',
        'ျ': 'ya',
        'ွ': 'w',
        'ြွ': 'yw',
        'ျွ': 'ywa',
        'ှ': 'h',
        // independent vowels
        'ဧ': 'e',
        '၏': '-e',
        'ဣ': 'i',
        'ဤ': '-i',
        'ဉ': 'u',
        'ဦ': '-u',
        'ဩ': 'aw',
        'သြော': 'aw',
        'ဪ': 'aw',
        // numbers
        '၀': '0',
        '၁': '1',
        '၂': '2',
        '၃': '3',
        '၄': '4',
        '၅': '5',
        '၆': '6',
        '၇': '7',
        '၈': '8',
        '၉': '9',
        // virama and tone marks which are silent in transliteration
        '္': '',
        '့': '',
        'း': '',

        // Czech
        'č': 'c',
        'ď': 'd',
        'ě': 'e',
        'ň': 'n',
        'ř': 'r',
        'š': 's',
        'ť': 't',
        'ů': 'u',
        'ž': 'z',
        'Č': 'C',
        'Ď': 'D',
        'Ě': 'E',
        'Ň': 'N',
        'Ř': 'R',
        'Š': 'S',
        'Ť': 'T',
        'Ů': 'U',
        'Ž': 'Z',

        // Dhivehi
        'ހ': 'h',
        'ށ': 'sh',
        'ނ': 'n',
        'ރ': 'r',
        'ބ': 'b',
        'ޅ': 'lh',
        'ކ': 'k',
        'އ': 'a',
        'ވ': 'v',
        'މ': 'm',
        'ފ': 'f',
        'ދ': 'dh',
        'ތ': 'th',
        'ލ': 'l',
        'ގ': 'g',
        'ޏ': 'gn',
        'ސ': 's',
        'ޑ': 'd',
        'ޒ': 'z',
        'ޓ': 't',
        'ޔ': 'y',
        'ޕ': 'p',
        'ޖ': 'j',
        'ޗ': 'ch',
        'ޘ': 'tt',
        'ޙ': 'hh',
        'ޚ': 'kh',
        'ޛ': 'th',
        'ޜ': 'z',
        'ޝ': 'sh',
        'ޞ': 's',
        'ޟ': 'd',
        'ޠ': 't',
        'ޡ': 'z',
        'ޢ': 'a',
        'ޣ': 'gh',
        'ޤ': 'q',
        'ޥ': 'w',
        'ަ': 'a',
        'ާ': 'aa',
        'ި': 'i',
        'ީ': 'ee',
        'ު': 'u',
        'ޫ': 'oo',
        'ެ': 'e',
        'ޭ': 'ey',
        'ޮ': 'o',
        'ޯ': 'oa',
        'ް': '',

        // Georgian https://en.wikipedia.org/wiki/Romanization_of_Georgian
        // National system (2002)
        'ა': 'a',
        'ბ': 'b',
        'გ': 'g',
        'დ': 'd',
        'ე': 'e',
        'ვ': 'v',
        'ზ': 'z',
        'თ': 't',
        'ი': 'i',
        'კ': 'k',
        'ლ': 'l',
        'მ': 'm',
        'ნ': 'n',
        'ო': 'o',
        'პ': 'p',
        'ჟ': 'zh',
        'რ': 'r',
        'ს': 's',
        'ტ': 't',
        'უ': 'u',
        'ფ': 'p',
        'ქ': 'k',
        'ღ': 'gh',
        'ყ': 'q',
        'შ': 'sh',
        'ჩ': 'ch',
        'ც': 'ts',
        'ძ': 'dz',
        'წ': 'ts',
        'ჭ': 'ch',
        'ხ': 'kh',
        'ჯ': 'j',
        'ჰ': 'h',

        // Greek
        'α': 'a',
        'β': 'v',
        'γ': 'g',
        'δ': 'd',
        'ε': 'e',
        'ζ': 'z',
        'η': 'i',
        'θ': 'th',
        'ι': 'i',
        'κ': 'k',
        'λ': 'l',
        'μ': 'm',
        'ν': 'n',
        'ξ': 'ks',
        'ο': 'o',
        'π': 'p',
        'ρ': 'r',
        'σ': 's',
        'τ': 't',
        'υ': 'y',
        'φ': 'f',
        'χ': 'x',
        'ψ': 'ps',
        'ω': 'o',
        'ά': 'a',
        'έ': 'e',
        'ί': 'i',
        'ό': 'o',
        'ύ': 'y',
        'ή': 'i',
        'ώ': 'o',
        'ς': 's',
        'ϊ': 'i',
        'ΰ': 'y',
        'ϋ': 'y',
        'ΐ': 'i',
        'Α': 'A',
        'Β': 'B',
        'Γ': 'G',
        'Δ': 'D',
        'Ε': 'E',
        'Ζ': 'Z',
        'Η': 'I',
        'Θ': 'TH',
        'Ι': 'I',
        'Κ': 'K',
        'Λ': 'L',
        'Μ': 'M',
        'Ν': 'N',
        'Ξ': 'KS',
        'Ο': 'O',
        'Π': 'P',
        'Ρ': 'R',
        'Σ': 'S',
        'Τ': 'T',
        'Υ': 'Y',
        'Φ': 'F',
        'Χ': 'X',
        'Ψ': 'PS',
        'Ω': 'O',
        'Ά': 'A',
        'Έ': 'E',
        'Ί': 'I',
        'Ό': 'O',
        'Ύ': 'Y',
        'Ή': 'I',
        'Ώ': 'O',
        'Ϊ': 'I',
        'Ϋ': 'Y',

        // Latvian
        'ā': 'a',
        // 'č': 'c', // duplicate
        'ē': 'e',
        'ģ': 'g',
        'ī': 'i',
        'ķ': 'k',
        'ļ': 'l',
        'ņ': 'n',
        // 'š': 's', // duplicate
        'ū': 'u',
        // 'ž': 'z', // duplicate
        'Ā': 'A',
        // 'Č': 'C', // duplicate
        'Ē': 'E',
        'Ģ': 'G',
        'Ī': 'I',
        'Ķ': 'k',
        'Ļ': 'L',
        'Ņ': 'N',
        // 'Š': 'S', // duplicate
        'Ū': 'U',
        // 'Ž': 'Z', // duplicate

        // Macedonian
        'Ќ': 'Kj',
        'ќ': 'kj',
        'Љ': 'Lj',
        'љ': 'lj',
        'Њ': 'Nj',
        'њ': 'nj',
        'Тс': 'Ts',
        'тс': 'ts',

        // Polish
        'ą': 'a',
        'ć': 'c',
        'ę': 'e',
        'ł': 'l',
        'ń': 'n',
        // 'ó': 'o', // duplicate
        'ś': 's',
        'ź': 'z',
        'ż': 'z',
        'Ą': 'A',
        'Ć': 'C',
        'Ę': 'E',
        'Ł': 'L',
        'Ń': 'N',
        'Ś': 'S',
        'Ź': 'Z',
        'Ż': 'Z',

        // Ukranian
        'Є': 'Ye',
        'І': 'I',
        'Ї': 'Yi',
        'Ґ': 'G',
        'є': 'ye',
        'і': 'i',
        'ї': 'yi',
        'ґ': 'g',

        // Romanian
        'ă': 'a',
        'Ă': 'A',
        'ș': 's',
        'Ș': 'S',
        // 'ş': 's', // duplicate
        // 'Ş': 'S', // duplicate
        'ț': 't',
        'Ț': 'T',
        'ţ': 't',
        'Ţ': 'T',

        // Russian https://en.wikipedia.org/wiki/Romanization_of_Russian
        // ICAO

        'а': 'a',
        'б': 'b',
        'в': 'v',
        'г': 'g',
        'д': 'd',
        'е': 'e',
        'ё': 'yo',
        'ж': 'zh',
        'з': 'z',
        'и': 'i',
        'й': 'i',
        'к': 'k',
        'л': 'l',
        'м': 'm',
        'н': 'n',
        'о': 'o',
        'п': 'p',
        'р': 'r',
        'с': 's',
        'т': 't',
        'у': 'u',
        'ф': 'f',
        'х': 'kh',
        'ц': 'c',
        'ч': 'ch',
        'ш': 'sh',
        'щ': 'sh',
        'ъ': '',
        'ы': 'y',
        'ь': '',
        'э': 'e',
        'ю': 'yu',
        'я': 'ya',
        'А': 'A',
        'Б': 'B',
        'В': 'V',
        'Г': 'G',
        'Д': 'D',
        'Е': 'E',
        'Ё': 'Yo',
        'Ж': 'Zh',
        'З': 'Z',
        'И': 'I',
        'Й': 'I',
        'К': 'K',
        'Л': 'L',
        'М': 'M',
        'Н': 'N',
        'О': 'O',
        'П': 'P',
        'Р': 'R',
        'С': 'S',
        'Т': 'T',
        'У': 'U',
        'Ф': 'F',
        'Х': 'Kh',
        'Ц': 'C',
        'Ч': 'Ch',
        'Ш': 'Sh',
        'Щ': 'Sh',
        'Ъ': '',
        'Ы': 'Y',
        'Ь': '',
        'Э': 'E',
        'Ю': 'Yu',
        'Я': 'Ya',

        // Serbian
        'ђ': 'dj',
        'ј': 'j',
        // 'љ': 'lj',  // duplicate
        // 'њ': 'nj', // duplicate
        'ћ': 'c',
        'џ': 'dz',
        'Ђ': 'Dj',
        'Ј': 'j',
        // 'Љ': 'Lj', // duplicate
        // 'Њ': 'Nj', // duplicate
        'Ћ': 'C',
        'Џ': 'Dz',

        // Slovak
        'ľ': 'l',
        'ĺ': 'l',
        'ŕ': 'r',
        'Ľ': 'L',
        'Ĺ': 'L',
        'Ŕ': 'R',

        // Turkish
        'ş': 's',
        'Ş': 'S',
        'ı': 'i',
        'İ': 'I',
        // 'ç': 'c', // duplicate
        // 'Ç': 'C', // duplicate
        // 'ü': 'u', // duplicate, see langCharMap
        // 'Ü': 'U', // duplicate, see langCharMap
        // 'ö': 'o', // duplicate, see langCharMap
        // 'Ö': 'O', // duplicate, see langCharMap
        'ğ': 'g',
        'Ğ': 'G',

        // Vietnamese
        'ả': 'a',
        'Ả': 'A',
        'ẳ': 'a',
        'Ẳ': 'A',
        'ẩ': 'a',
        'Ẩ': 'A',
        'đ': 'd',
        'Đ': 'D',
        'ẹ': 'e',
        'Ẹ': 'E',
        'ẽ': 'e',
        'Ẽ': 'E',
        'ẻ': 'e',
        'Ẻ': 'E',
        'ế': 'e',
        'Ế': 'E',
        'ề': 'e',
        'Ề': 'E',
        'ệ': 'e',
        'Ệ': 'E',
        'ễ': 'e',
        'Ễ': 'E',
        'ể': 'e',
        'Ể': 'E',
        'ỏ': 'o',
        'ọ': 'o',
        'Ọ': 'o',
        'ố': 'o',
        'Ố': 'O',
        'ồ': 'o',
        'Ồ': 'O',
        'ổ': 'o',
        'Ổ': 'O',
        'ộ': 'o',
        'Ộ': 'O',
        'ỗ': 'o',
        'Ỗ': 'O',
        'ơ': 'o',
        'Ơ': 'O',
        'ớ': 'o',
        'Ớ': 'O',
        'ờ': 'o',
        'Ờ': 'O',
        'ợ': 'o',
        'Ợ': 'O',
        'ỡ': 'o',
        'Ỡ': 'O',
        'Ở': 'o',
        'ở': 'o',
        'ị': 'i',
        'Ị': 'I',
        'ĩ': 'i',
        'Ĩ': 'I',
        'ỉ': 'i',
        'Ỉ': 'i',
        'ủ': 'u',
        'Ủ': 'U',
        'ụ': 'u',
        'Ụ': 'U',
        'ũ': 'u',
        'Ũ': 'U',
        'ư': 'u',
        'Ư': 'U',
        'ứ': 'u',
        'Ứ': 'U',
        'ừ': 'u',
        'Ừ': 'U',
        'ự': 'u',
        'Ự': 'U',
        'ữ': 'u',
        'Ữ': 'U',
        'ử': 'u',
        'Ử': 'ư',
        'ỷ': 'y',
        'Ỷ': 'y',
        'ỳ': 'y',
        'Ỳ': 'Y',
        'ỵ': 'y',
        'Ỵ': 'Y',
        'ỹ': 'y',
        'Ỹ': 'Y',
        'ạ': 'a',
        'Ạ': 'A',
        'ấ': 'a',
        'Ấ': 'A',
        'ầ': 'a',
        'Ầ': 'A',
        'ậ': 'a',
        'Ậ': 'A',
        'ẫ': 'a',
        'Ẫ': 'A',
        // 'ă': 'a', // duplicate
        // 'Ă': 'A', // duplicate
        'ắ': 'a',
        'Ắ': 'A',
        'ằ': 'a',
        'Ằ': 'A',
        'ặ': 'a',
        'Ặ': 'A',
        'ẵ': 'a',
        'Ẵ': 'A',
        "⓪": "0",
        "①": "1",
        "②": "2",
        "③": "3",
        "④": "4",
        "⑤": "5",
        "⑥": "6",
        "⑦": "7",
        "⑧": "8",
        "⑨": "9",
        "⑩": "10",
        "⑪": "11",
        "⑫": "12",
        "⑬": "13",
        "⑭": "14",
        "⑮": "15",
        "⑯": "16",
        "⑰": "17",
        "⑱": "18",
        "⑲": "18",
        "⑳": "18",

        "⓵": "1",
        "⓶": "2",
        "⓷": "3",
        "⓸": "4",
        "⓹": "5",
        "⓺": "6",
        "⓻": "7",
        "⓼": "8",
        "⓽": "9",
        "⓾": "10",

        "⓿": "0",
        "⓫": "11",
        "⓬": "12",
        "⓭": "13",
        "⓮": "14",
        "⓯": "15",
        "⓰": "16",
        "⓱": "17",
        "⓲": "18",
        "⓳": "19",
        "⓴": "20",

        "Ⓐ": "A",
        "Ⓑ": "B",
        "Ⓒ": "C",
        "Ⓓ": "D",
        "Ⓔ": "E",
        "Ⓕ": "F",
        "Ⓖ": "G",
        "Ⓗ": "H",
        "Ⓘ": "I",
        "Ⓙ": "J",
        "Ⓚ": "K",
        "Ⓛ": "L",
        "Ⓜ": "M",
        "Ⓝ": "N",
        "Ⓞ": "O",
        "Ⓟ": "P",
        "Ⓠ": "Q",
        "Ⓡ": "R",
        "Ⓢ": "S",
        "Ⓣ": "T",
        "Ⓤ": "U",
        "Ⓥ": "V",
        "Ⓦ": "W",
        "Ⓧ": "X",
        "Ⓨ": "Y",
        "Ⓩ": "Z",

        "ⓐ": "a",
        "ⓑ": "b",
        "ⓒ": "c",
        "ⓓ": "d",
        "ⓔ": "e",
        "ⓕ": "f",
        "ⓖ": "g",
        "ⓗ": "h",
        "ⓘ": "i",
        "ⓙ": "j",
        "ⓚ": "k",
        "ⓛ": "l",
        "ⓜ": "m",
        "ⓝ": "n",
        "ⓞ": "o",
        "ⓟ": "p",
        "ⓠ": "q",
        "ⓡ": "r",
        "ⓢ": "s",
        "ⓣ": "t",
        "ⓤ": "u",
        "ⓦ": "v",
        "ⓥ": "w",
        "ⓧ": "x",
        "ⓨ": "y",
        "ⓩ": "z",

        // symbols
        '“': '"',
        '”': '"',
        '‘': "'",
        '’': "'",
        '∂': 'd',
        'ƒ': 'f',
        '™': '(TM)',
        '©': '(C)',
        'œ': 'oe',
        'Œ': 'OE',
        '®': '(R)',
        '†': '+',
        '℠': '(SM)',
        '…': '...',
        '˚': 'o',
        'º': 'o',
        'ª': 'a',
        '•': '*',
        '၊': ',',
        '။': '.',

        // currency
        '$': 'USD',
        '€': 'EUR',
        '₢': 'BRN',
        '₣': 'FRF',
        '£': 'GBP',
        '₤': 'ITL',
        '₦': 'NGN',
        '₧': 'ESP',
        '₩': 'KRW',
        '₪': 'ILS',
        '₫': 'VND',
        '₭': 'LAK',
        '₮': 'MNT',
        '₯': 'GRD',
        '₱': 'ARS',
        '₲': 'PYG',
        '₳': 'ARA',
        '₴': 'UAH',
        '₵': 'GHS',
        '¢': 'cent',
        '¥': 'CNY',
        '元': 'CNY',
        '円': 'YEN',
        '﷼': 'IRR',
        '₠': 'EWE',
        '฿': 'THB',
        '₨': 'INR',
        '₹': 'INR',
        '₰': 'PF',
        '₺': 'TRY',
        '؋': 'AFN',
        '₼': 'AZN',
        'лв': 'BGN',
        '៛': 'KHR',
        '₡': 'CRC',
        '₸': 'KZT',
        'ден': 'MKD',
        'zł': 'PLN',
        '₽': 'RUB',
        '₾': 'GEL'

    };

    /**
     * special look ahead character array
     * These characters form with consonants to become 'single'/consonant combo
     * @type [Array]
     */
    var lookAheadCharArray = [
    // burmese
    '်',

    // Dhivehi
    'ް'];

    /**
     * diatricMap for languages where transliteration changes entirely as more diatrics are added
     * @type {Object}
     */
    var diatricMap = {
        // Burmese
        // dependent vowels
        'ာ': 'a',
        'ါ': 'a',
        'ေ': 'e',
        'ဲ': 'e',
        'ိ': 'i',
        'ီ': 'i',
        'ို': 'o',
        'ု': 'u',
        'ူ': 'u',
        'ေါင်': 'aung',
        'ော': 'aw',
        'ော်': 'aw',
        'ေါ': 'aw',
        'ေါ်': 'aw',
        '်': '်', // this is special case but the character will be converted to latin in the code
        'က်': 'et',
        'ိုက်': 'aik',
        'ောက်': 'auk',
        'င်': 'in',
        'ိုင်': 'aing',
        'ောင်': 'aung',
        'စ်': 'it',
        'ည်': 'i',
        'တ်': 'at',
        'ိတ်': 'eik',
        'ုတ်': 'ok',
        'ွတ်': 'ut',
        'ေတ်': 'it',
        'ဒ်': 'd',
        'ိုဒ်': 'ok',
        'ုဒ်': 'ait',
        'န်': 'an',
        'ာန်': 'an',
        'ိန်': 'ein',
        'ုန်': 'on',
        'ွန်': 'un',
        'ပ်': 'at',
        'ိပ်': 'eik',
        'ုပ်': 'ok',
        'ွပ်': 'ut',
        'န်ုပ်': 'nub',
        'မ်': 'an',
        'ိမ်': 'ein',
        'ုမ်': 'on',
        'ွမ်': 'un',
        'ယ်': 'e',
        'ိုလ်': 'ol',
        'ဉ်': 'in',
        'ံ': 'an',
        'ိံ': 'ein',
        'ုံ': 'on',

        // Dhivehi
        'ައް': 'ah',
        'ަށް': 'ah'
    };

    /**
     * langCharMap language specific characters translations
     * @type   {Object}
     */
    var langCharMap = {
        'en': {}, // default language

        'az': { // Azerbaijani
            'ç': 'c',
            'ə': 'e',
            'ğ': 'g',
            'ı': 'i',
            'ö': 'o',
            'ş': 's',
            'ü': 'u',
            'Ç': 'C',
            'Ə': 'E',
            'Ğ': 'G',
            'İ': 'I',
            'Ö': 'O',
            'Ş': 'S',
            'Ü': 'U'
        },

        'cs': { // Czech
            'č': 'c',
            'ď': 'd',
            'ě': 'e',
            'ň': 'n',
            'ř': 'r',
            'š': 's',
            'ť': 't',
            'ů': 'u',
            'ž': 'z',
            'Č': 'C',
            'Ď': 'D',
            'Ě': 'E',
            'Ň': 'N',
            'Ř': 'R',
            'Š': 'S',
            'Ť': 'T',
            'Ů': 'U',
            'Ž': 'Z'
        },

        'fi': { // Finnish
            // 'å': 'a', duplicate see charMap/latin
            // 'Å': 'A', duplicate see charMap/latin
            'ä': 'a', // ok
            'Ä': 'A', // ok
            'ö': 'o', // ok
            'Ö': 'O' // ok
        },

        'hu': { // Hungarian
            'ä': 'a', // ok
            'Ä': 'A', // ok
            // 'á': 'a', duplicate see charMap/latin
            // 'Á': 'A', duplicate see charMap/latin
            'ö': 'o', // ok
            'Ö': 'O', // ok
            // 'ő': 'o', duplicate see charMap/latin
            // 'Ő': 'O', duplicate see charMap/latin
            'ü': 'u',
            'Ü': 'U',
            'ű': 'u',
            'Ű': 'U'
        },

        'lt': { // Lithuanian
            'ą': 'a',
            'č': 'c',
            'ę': 'e',
            'ė': 'e',
            'į': 'i',
            'š': 's',
            'ų': 'u',
            'ū': 'u',
            'ž': 'z',
            'Ą': 'A',
            'Č': 'C',
            'Ę': 'E',
            'Ė': 'E',
            'Į': 'I',
            'Š': 'S',
            'Ų': 'U',
            'Ū': 'U'
        },

        'lv': { // Latvian
            'ā': 'a',
            'č': 'c',
            'ē': 'e',
            'ģ': 'g',
            'ī': 'i',
            'ķ': 'k',
            'ļ': 'l',
            'ņ': 'n',
            'š': 's',
            'ū': 'u',
            'ž': 'z',
            'Ā': 'A',
            'Č': 'C',
            'Ē': 'E',
            'Ģ': 'G',
            'Ī': 'i',
            'Ķ': 'k',
            'Ļ': 'L',
            'Ņ': 'N',
            'Š': 'S',
            'Ū': 'u',
            'Ž': 'Z'
        },

        'pl': { // Polish
            'ą': 'a',
            'ć': 'c',
            'ę': 'e',
            'ł': 'l',
            'ń': 'n',
            'ó': 'o',
            'ś': 's',
            'ź': 'z',
            'ż': 'z',
            'Ą': 'A',
            'Ć': 'C',
            'Ę': 'e',
            'Ł': 'L',
            'Ń': 'N',
            'Ó': 'O',
            'Ś': 'S',
            'Ź': 'Z',
            'Ż': 'Z'
        },

        'sv': { // Swedish
            // 'å': 'a', duplicate see charMap/latin
            // 'Å': 'A', duplicate see charMap/latin
            'ä': 'a', // ok
            'Ä': 'A', // ok
            'ö': 'o', // ok
            'Ö': 'O' // ok
        },

        'sk': { // Slovak
            'ä': 'a',
            'Ä': 'A'
        },

        'sr': { // Serbian
            'љ': 'lj',
            'њ': 'nj',
            'Љ': 'Lj',
            'Њ': 'Nj',
            'đ': 'dj',
            'Đ': 'Dj'
        },

        'tr': { // Turkish
            'Ü': 'U',
            'Ö': 'O',
            'ü': 'u',
            'ö': 'o'
        }
    };

    /**
     * symbolMap language specific symbol translations
     * translations must be transliterated already
     * @type   {Object}
     */
    var symbolMap = {
        'ar': {
            '∆': 'delta',
            '∞': 'la-nihaya',
            '♥': 'hob',
            '&': 'wa',
            '|': 'aw',
            '<': 'aqal-men',
            '>': 'akbar-men',
            '∑': 'majmou',
            '¤': 'omla'
        },

        'az': {},

        'ca': {
            '∆': 'delta',
            '∞': 'infinit',
            '♥': 'amor',
            '&': 'i',
            '|': 'o',
            '<': 'menys que',
            '>': 'mes que',
            '∑': 'suma dels',
            '¤': 'moneda'
        },

        'cs': {
            '∆': 'delta',
            '∞': 'nekonecno',
            '♥': 'laska',
            '&': 'a',
            '|': 'nebo',
            '<': 'mensi nez',
            '>': 'vetsi nez',
            '∑': 'soucet',
            '¤': 'mena'
        },

        'de': {
            '∆': 'delta',
            '∞': 'unendlich',
            '♥': 'Liebe',
            '&': 'und',
            '|': 'oder',
            '<': 'kleiner als',
            '>': 'groesser als',
            '∑': 'Summe von',
            '¤': 'Waehrung'
        },

        'dv': {
            '∆': 'delta',
            '∞': 'kolunulaa',
            '♥': 'loabi',
            '&': 'aai',
            '|': 'noonee',
            '<': 'ah vure kuda',
            '>': 'ah vure bodu',
            '∑': 'jumula',
            '¤': 'faisaa'
        },

        'en': {
            '∆': 'delta',
            '∞': 'infinity',
            '♥': 'love',
            '&': 'and',
            '|': 'or',
            '<': 'less than',
            '>': 'greater than',
            '∑': 'sum',
            '¤': 'currency'
        },

        'es': {
            '∆': 'delta',
            '∞': 'infinito',
            '♥': 'amor',
            '&': 'y',
            '|': 'u',
            '<': 'menos que',
            '>': 'mas que',
            '∑': 'suma de los',
            '¤': 'moneda'
        },

        'fa': {
            '∆': 'delta',
            '∞': 'bi-nahayat',
            '♥': 'eshgh',
            '&': 'va',
            '|': 'ya',
            '<': 'kamtar-az',
            '>': 'bishtar-az',
            '∑': 'majmooe',
            '¤': 'vahed'
        },

        'fi': {
            '∆': 'delta',
            '∞': 'aarettomyys',
            '♥': 'rakkaus',
            '&': 'ja',
            '|': 'tai',
            '<': 'pienempi kuin',
            '>': 'suurempi kuin',
            '∑': 'summa',
            '¤': 'valuutta'
        },

        'fr': {
            '∆': 'delta',
            '∞': 'infiniment',
            '♥': 'Amour',
            '&': 'et',
            '|': 'ou',
            '<': 'moins que',
            '>': 'superieure a',
            '∑': 'somme des',
            '¤': 'monnaie'
        },

        'ge': {
            '∆': 'delta',
            '∞': 'usasruloba',
            '♥': 'siqvaruli',
            '&': 'da',
            '|': 'an',
            '<': 'naklebi',
            '>': 'meti',
            '∑': 'jami',
            '¤': 'valuta'
        },

        'gr': {},

        'hu': {
            '∆': 'delta',
            '∞': 'vegtelen',
            '♥': 'szerelem',
            '&': 'es',
            '|': 'vagy',
            '<': 'kisebb mint',
            '>': 'nagyobb mint',
            '∑': 'szumma',
            '¤': 'penznem'
        },

        'it': {
            '∆': 'delta',
            '∞': 'infinito',
            '♥': 'amore',
            '&': 'e',
            '|': 'o',
            '<': 'minore di',
            '>': 'maggiore di',
            '∑': 'somma',
            '¤': 'moneta'
        },

        'lt': {
            '∆': 'delta',
            '∞': 'begalybe',
            '♥': 'meile',
            '&': 'ir',
            '|': 'ar',
            '<': 'maziau nei',
            '>': 'daugiau nei',
            '∑': 'suma',
            '¤': 'valiuta'
        },

        'lv': {
            '∆': 'delta',
            '∞': 'bezgaliba',
            '♥': 'milestiba',
            '&': 'un',
            '|': 'vai',
            '<': 'mazak neka',
            '>': 'lielaks neka',
            '∑': 'summa',
            '¤': 'valuta'
        },

        'my': {
            '∆': 'kwahkhyaet',
            '∞': 'asaonasme',
            '♥': 'akhyait',
            '&': 'nhin',
            '|': 'tho',
            '<': 'ngethaw',
            '>': 'kyithaw',
            '∑': 'paungld',
            '¤': 'ngwekye'
        },

        'mk': {},

        'nl': {
            '∆': 'delta',
            '∞': 'oneindig',
            '♥': 'liefde',
            '&': 'en',
            '|': 'of',
            '<': 'kleiner dan',
            '>': 'groter dan',
            '∑': 'som',
            '¤': 'valuta'
        },

        'pl': {
            '∆': 'delta',
            '∞': 'nieskonczonosc',
            '♥': 'milosc',
            '&': 'i',
            '|': 'lub',
            '<': 'mniejsze niz',
            '>': 'wieksze niz',
            '∑': 'suma',
            '¤': 'waluta'
        },

        'pt': {
            '∆': 'delta',
            '∞': 'infinito',
            '♥': 'amor',
            '&': 'e',
            '|': 'ou',
            '<': 'menor que',
            '>': 'maior que',
            '∑': 'soma',
            '¤': 'moeda'
        },

        'ro': {
            '∆': 'delta',
            '∞': 'infinit',
            '♥': 'dragoste',
            '&': 'si',
            '|': 'sau',
            '<': 'mai mic ca',
            '>': 'mai mare ca',
            '∑': 'suma',
            '¤': 'valuta'
        },

        'ru': {
            '∆': 'delta',
            '∞': 'beskonechno',
            '♥': 'lubov',
            '&': 'i',
            '|': 'ili',
            '<': 'menshe',
            '>': 'bolshe',
            '∑': 'summa',
            '¤': 'valjuta'
        },

        'sk': {
            '∆': 'delta',
            '∞': 'nekonecno',
            '♥': 'laska',
            '&': 'a',
            '|': 'alebo',
            '<': 'menej ako',
            '>': 'viac ako',
            '∑': 'sucet',
            '¤': 'mena'
        },

        'sr': {},

        'tr': {
            '∆': 'delta',
            '∞': 'sonsuzluk',
            '♥': 'ask',
            '&': 've',
            '|': 'veya',
            '<': 'kucuktur',
            '>': 'buyuktur',
            '∑': 'toplam',
            '¤': 'para birimi'
        },

        'uk': {
            '∆': 'delta',
            '∞': 'bezkinechnist',
            '♥': 'lubov',
            '&': 'i',
            '|': 'abo',
            '<': 'menshe',
            '>': 'bilshe',
            '∑': 'suma',
            '¤': 'valjuta'
        },

        'vn': {
            '∆': 'delta',
            '∞': 'vo cuc',
            '♥': 'yeu',
            '&': 'va',
            '|': 'hoac',
            '<': 'nho hon',
            '>': 'lon hon',
            '∑': 'tong',
            '¤': 'tien te'
        }
    };

    var uricChars = [';', '?', ':', '@', '&', '=', '+', '$', ',', '/'].join('');

    var uricNoSlashChars = [';', '?', ':', '@', '&', '=', '+', '$', ','].join('');

    var markChars = ['.', '!', '~', '*', "'", '(', ')'].join('');

    /**
     * getSlug
     * @param  {string} input input string
     * @param  {object|string} opts config object or separator string/char
     * @api    public
     * @return {string}  sluggified string
     */
    var getSlug = function getSlug(input, opts) {
        var separator = '-';
        var result = '';
        var diatricString = '';
        var convertSymbols = true;
        var customReplacements = {};
        var maintainCase;
        var titleCase;
        var truncate;
        var uricFlag;
        var uricNoSlashFlag;
        var markFlag;
        var symbol;
        var langChar;
        var lucky;
        var i;
        var ch;
        var l;
        var lastCharWasSymbol;
        var lastCharWasDiatric;
        var allowedChars = '';

        if (typeof input !== 'string') {
            return '';
        }

        if (typeof opts === 'string') {
            separator = opts;
        }

        symbol = symbolMap.en;
        langChar = langCharMap.en;

        if (typeof opts === 'object') {
            maintainCase = opts.maintainCase || false;
            customReplacements = opts.custom && typeof opts.custom === 'object' ? opts.custom : customReplacements;
            truncate = +opts.truncate > 1 && opts.truncate || false;
            uricFlag = opts.uric || false;
            uricNoSlashFlag = opts.uricNoSlash || false;
            markFlag = opts.mark || false;
            convertSymbols = opts.symbols === false || opts.lang === false ? false : true;
            separator = opts.separator || separator;

            if (uricFlag) {
                allowedChars += uricChars;
            }

            if (uricNoSlashFlag) {
                allowedChars += uricNoSlashChars;
            }

            if (markFlag) {
                allowedChars += markChars;
            }

            symbol = opts.lang && symbolMap[opts.lang] && convertSymbols ? symbolMap[opts.lang] : convertSymbols ? symbolMap.en : {};

            langChar = opts.lang && langCharMap[opts.lang] ? langCharMap[opts.lang] : opts.lang === false || opts.lang === true ? {} : langCharMap.en;

            // if titleCase config is an Array, rewrite to object format
            if (opts.titleCase && typeof opts.titleCase.length === 'number' && Array.prototype.toString.call(opts.titleCase)) {
                opts.titleCase.forEach(function (v) {
                    customReplacements[v + ''] = v + '';
                });

                titleCase = true;
            } else {
                titleCase = !!opts.titleCase;
            }

            // if custom config is an Array, rewrite to object format
            if (opts.custom && typeof opts.custom.length === 'number' && Array.prototype.toString.call(opts.custom)) {
                opts.custom.forEach(function (v) {
                    customReplacements[v + ''] = v + '';
                });
            }

            // custom replacements
            Object.keys(customReplacements).forEach(function (v) {
                var r;

                if (v.length > 1) {
                    r = new RegExp('\\b' + escapeChars(v) + '\\b', 'gi');
                } else {
                    r = new RegExp(escapeChars(v), 'gi');
                }

                input = input.replace(r, customReplacements[v]);
            });

            // add all custom replacement to allowed charlist
            for (ch in customReplacements) {
                allowedChars += ch;
            }
        }

        allowedChars += separator;

        // escape all necessary chars
        allowedChars = escapeChars(allowedChars);

        // trim whitespaces
        input = input.replace(/(^\s+|\s+$)/g, '');

        lastCharWasSymbol = false;
        lastCharWasDiatric = false;

        for (i = 0, l = input.length; i < l; i++) {
            ch = input[i];

            if (isReplacedCustomChar(ch, customReplacements)) {
                // don't convert a already converted char
                lastCharWasSymbol = false;
            } else if (langChar[ch]) {
                // process language specific diactrics chars conversion
                ch = lastCharWasSymbol && langChar[ch].match(/[A-Za-z0-9]/) ? ' ' + langChar[ch] : langChar[ch];

                lastCharWasSymbol = false;
            } else if (ch in charMap) {
                // the transliteration changes entirely when some special characters are added
                if (i + 1 < l && lookAheadCharArray.indexOf(input[i + 1]) >= 0) {
                    diatricString += ch;
                    ch = '';
                } else if (lastCharWasDiatric === true) {
                    ch = diatricMap[diatricString] + charMap[ch];
                    diatricString = '';
                } else {
                    // process diactrics chars
                    ch = lastCharWasSymbol && charMap[ch].match(/[A-Za-z0-9]/) ? ' ' + charMap[ch] : charMap[ch];
                }

                lastCharWasSymbol = false;
                lastCharWasDiatric = false;
            } else if (ch in diatricMap) {
                diatricString += ch;
                ch = '';
                // end of string, put the whole meaningful word
                if (i === l - 1) {
                    ch = diatricMap[diatricString];
                }
                lastCharWasDiatric = true;
            } else if (
            // process symbol chars
            symbol[ch] && !(uricFlag && uricChars.indexOf(ch) !== -1) && !(uricNoSlashFlag && uricNoSlashChars
            // .indexOf(ch) !== -1) && !(markFlag && markChars
            .indexOf(ch) !== -1)) {
                ch = lastCharWasSymbol || result.substr(-1).match(/[A-Za-z0-9]/) ? separator + symbol[ch] : symbol[ch];
                ch += input[i + 1] !== void 0 && input[i + 1].match(/[A-Za-z0-9]/) ? separator : '';

                lastCharWasSymbol = true;
            } else {
                if (lastCharWasDiatric === true) {
                    ch = diatricMap[diatricString] + ch;
                    diatricString = '';
                    lastCharWasDiatric = false;
                } else if (lastCharWasSymbol && (/[A-Za-z0-9]/.test(ch) || result.substr(-1).match(/A-Za-z0-9]/))) {
                    // process latin chars
                    ch = ' ' + ch;
                }
                lastCharWasSymbol = false;
            }

            // add allowed chars
            result += ch.replace(new RegExp('[^\\w\\s' + allowedChars + '_-]', 'g'), separator);
        }

        if (titleCase) {
            result = result.replace(/(\w)(\S*)/g, function (_, i, r) {
                var j = i.toUpperCase() + (r !== null ? r : '');
                return Object.keys(customReplacements).indexOf(j.toLowerCase()) < 0 ? j : j.toLowerCase();
            });
        }

        // eliminate duplicate separators
        // add separator
        // trim separators from start and end
        result = result.replace(/\s+/g, separator).replace(new RegExp('\\' + separator + '+', 'g'), separator).replace(new RegExp('(^\\' + separator + '+|\\' + separator + '+$)', 'g'), '');

        if (truncate && result.length > truncate) {
            lucky = result.charAt(truncate) === separator;
            result = result.slice(0, truncate);

            if (!lucky) {
                result = result.slice(0, result.lastIndexOf(separator));
            }
        }

        if (!maintainCase && !titleCase) {
            result = result.toLowerCase();
        }

        return result;
    };

    /**
     * createSlug curried(opts)(input)
     * @param   {object|string} opts config object or input string
     * @return  {Function} function getSlugWithConfig()
     **/
    var createSlug = function createSlug(opts) {

        /**
         * getSlugWithConfig
         * @param   {string} input string
         * @return  {string} slug string
         */
        return function getSlugWithConfig(input) {
            return getSlug(input, opts);
        };
    };

    /**
     * escape Chars
     * @param   {string} input string
     */
    var escapeChars = function escapeChars(input) {
        return input.replace(/[-\\^$*+?.()|[\]{}\/]/g, '\\$&');
    };

    /**
     * check if the char is an already converted char from custom list
     * @param   {char} ch character to check
     * @param   {object} customReplacements custom translation map
     */
    var isReplacedCustomChar = function isReplacedCustomChar(ch, customReplacements) {
        for (var c in customReplacements) {
            if (customReplacements[c] === ch) {
                return true;
            }
        }
    };

    if (typeof module !== 'undefined' && module.exports) {

        // export functions for use in Node
        module.exports = getSlug;
        module.exports.createSlug = createSlug;
    } else if (true) {

        // export function for use in AMD
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
            return getSlug;
        }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else {

        // don't overwrite global if exists
        try {
            if (root.getSlug || root.createSlug) {
                throw 'speakingurl: globals exists /(getSlug|createSlug)/';
            } else {
                root.getSlug = getSlug;
                root.createSlug = createSlug;
            }
        } catch (e) {}
    }
})(this);

/***/ }),

/***/ "zufa":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var React = __webpack_require__("eW0v");

var SIZER_STYLES = {
  position: 'absolute',
  width: 0,
  height: 0,
  visibility: 'hidden',
  overflow: 'scroll',
  whiteSpace: 'pre'
};

var STYLE_PROPS = ['fontSize', 'fontFamily', 'fontWeight', 'fontStyle', 'letterSpacing'];

var Input = function (superclass) {
  function Input(props) {
    superclass.call(this, props);
    this.state = { inputWidth: null };
  }

  if (superclass) Input.__proto__ = superclass;
  Input.prototype = Object.create(superclass && superclass.prototype);
  Input.prototype.constructor = Input;

  Input.prototype.componentDidMount = function componentDidMount() {
    if (this.props.autoresize) {
      this.copyInputStyles();
      this.updateInputWidth();
    }

    if (this.props.autofocus) {
      this.input.focus();
    }
  };

  Input.prototype.componentDidUpdate = function componentDidUpdate(prevProps) {
    this.updateInputWidth();
  };

  Input.prototype.componentWillReceiveProps = function componentWillReceiveProps(newProps) {
    if (this.input.value !== newProps.query) {
      this.input.value = newProps.query;
    }
  };

  Input.prototype.copyInputStyles = function copyInputStyles() {
    var this$1 = this;

    var inputStyle = window.getComputedStyle(this.input);

    STYLE_PROPS.forEach(function (prop) {
      this$1.sizer.style[prop] = inputStyle[prop];
    });
  };

  Input.prototype.updateInputWidth = function updateInputWidth() {
    var inputWidth;

    if (this.props.autoresize) {
      // scrollWidth is designed to be fast not accurate.
      // +2 is completely arbitrary but does the job.
      inputWidth = Math.ceil(this.sizer.scrollWidth) + 2;
    }

    if (inputWidth !== this.state.inputWidth) {
      this.setState({ inputWidth: inputWidth });
    }
  };

  Input.prototype.render = function render() {
    var this$1 = this;

    var ref = this.props;
    var query = ref.query;
    var placeholder = ref.placeholder;
    var expandable = ref.expandable;
    var listboxId = ref.listboxId;
    var selectedIndex = ref.selectedIndex;

    return React.createElement('div', { className: this.props.classNames.searchInput }, React.createElement('input', {
      ref: function ref(c) {
        this$1.input = c;
      }, value: query, placeholder: placeholder, role: 'combobox', 'aria-autocomplete': 'list', 'aria-label': placeholder, 'aria-owns': listboxId, 'aria-activedescendant': selectedIndex > -1 ? listboxId + "-" + selectedIndex : null, 'aria-expanded': expandable, style: { width: this.state.inputWidth } }), React.createElement('div', { ref: function ref(c) {
        this$1.sizer = c;
      }, style: SIZER_STYLES }, query || placeholder));
  };

  return Input;
}(React.Component);

module.exports = Input;

/***/ })

/******/ });
//# sourceMappingURL=ssr-bundle.js.map