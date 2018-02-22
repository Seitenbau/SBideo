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
/******/ 			var chunk = require("./" + ({}[chunkId]||chunkId) + ".chunk." + {"0":"99a15","1":"f1e0e","2":"ad18e","3":"012d9","4":"8ed7e","5":"0b318","6":"785de","7":"44c93","8":"020ab","9":"c9cc0","10":"ba1c8","11":"95bc1","12":"fcc23","13":"84a49","14":"8db8e","15":"f6f94","16":"a41d7","17":"8acd2","18":"7311e","19":"f0f78","20":"2ad79","21":"c64fb","22":"8cfe1","23":"6eeb5","24":"3cceb","25":"f802b","26":"85810","27":"35e29","28":"d6bb3","29":"ff8de","30":"10cbb","31":"4c05e","32":"f7eb5","33":"77d01","34":"5d71e","35":"88d04","36":"793a6","37":"7af6e","38":"c3a01","39":"8f098","40":"096f6","41":"a17aa","42":"49fd0","43":"5cbce","44":"56c8f","45":"5f4b9","46":"63f6b","47":"23f8d","48":"56bc6","49":"38749","50":"69f6d","51":"7823d","52":"49912","53":"e96b2","54":"bb0ca","55":"06b34","56":"a19b8","57":"40ec3","58":"b0b8f","59":"16bee","60":"db1d5","61":"716c3","62":"9855d","63":"6a070","64":"4fdbb","65":"54863","66":"047fa","67":"2fdc0","68":"b1a16","69":"72e33","70":"cbd2f","71":"031fe","72":"3595a","73":"6d7f9","74":"b2ee9","75":"cc456","76":"71331","77":"3bb9d","78":"5ab66","79":"8ed5c","80":"798e8","81":"aef71","82":"c9d2b","83":"c6497","84":"99c9d","85":"96b0f","86":"84b8e","87":"d79aa","88":"9c98d","89":"7de02","90":"40b88","91":"5bfb3","92":"98a08","93":"c3853","94":"caf71","95":"cf153","96":"5f115","97":"96553","98":"bc632","99":"e968c","100":"5c6c9","101":"74bda","102":"238ca","103":"4201f","104":"3ca0c","105":"6e37b","106":"45c14","107":"dbac0","108":"78876","109":"46276","110":"f4b0e","111":"4ce48","112":"e9bc7","113":"8a1e5","114":"f5f65","115":"8898d","116":"64af5","117":"622fd","118":"b1b60","119":"378c1","120":"65244","121":"fc88a","122":"77084","123":"87ca6","124":"ffb17","125":"3d493","126":"7183a","127":"1777e","128":"4e183","129":"2a008","130":"a418d","131":"721ea","132":"9112e","133":"a93ed","134":"72f47","135":"c6ed1","136":"9af9e","137":"e14c7","138":"3aa86","139":"044f9","140":"e3064","141":"18228","142":"e58a7","143":"0a767","144":"10f81","145":"b961c","146":"aeb16","147":"1bd05","148":"6549a","149":"7cc67","150":"5d57c","151":"f4c7e","152":"052d1","153":"7da19","154":"823ff","155":"13964","156":"e9ddb","157":"eb067","158":"e2fc1","159":"d8eb0","160":"81231","161":"a161b","162":"bd8cd","163":"1d9e1","164":"55739","165":"47d00","166":"bd3f1","167":"87ea0","168":"ddbf3","169":"b631c","170":"e4139","171":"762c9","172":"cf272","173":"8c6d8","174":"a7b0d","175":"4a679"}[chunkId] + ".js");
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
/******/ 	__webpack_require__.p = "/SBideo/";
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

/***/ "/Uqj":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _warning = __webpack_require__("XOCG");

var _warning2 = _interopRequireDefault(_warning);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var createTransitionManager = function createTransitionManager() {
  var prompt = null;

  var setPrompt = function setPrompt(nextPrompt) {
    (0, _warning2.default)(prompt == null, 'A history supports only one prompt at a time');

    prompt = nextPrompt;

    return function () {
      if (prompt === nextPrompt) prompt = null;
    };
  };

  var confirmTransitionTo = function confirmTransitionTo(location, action, getUserConfirmation, callback) {
    // TODO: If another transition starts while we're still confirming
    // the previous one, we may end up in a weird state. Figure out the
    // best way to handle this.
    if (prompt != null) {
      var result = typeof prompt === 'function' ? prompt(location, action) : prompt;

      if (typeof result === 'string') {
        if (typeof getUserConfirmation === 'function') {
          getUserConfirmation(result, callback);
        } else {
          (0, _warning2.default)(false, 'A history needs a getUserConfirmation function in order to use a prompt message');

          callback(true);
        }
      } else {
        // Return false from a transition hook to cancel the transition.
        callback(result !== false);
      }
    } else {
      callback(true);
    }
  };

  var listeners = [];

  var appendListener = function appendListener(fn) {
    var isActive = true;

    var listener = function listener() {
      if (isActive) fn.apply(undefined, arguments);
    };

    listeners.push(listener);

    return function () {
      isActive = false;
      listeners = listeners.filter(function (item) {
        return item !== listener;
      });
    };
  };

  var notifyListeners = function notifyListeners() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    listeners.forEach(function (listener) {
      return listener.apply(undefined, args);
    });
  };

  return {
    setPrompt: setPrompt,
    confirmTransitionTo: confirmTransitionTo,
    appendListener: appendListener,
    notifyListeners: notifyListeners
  };
};

exports.default = createTransitionManager;

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
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("l262")(module)))

/***/ }),

/***/ "4KN3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};

var _react = __webpack_require__("eW0v");

var _propTypes = __webpack_require__("5D9O");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _objectWithoutProperties(obj, keys) {
  var target = {};for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
  }return target;
}

var Arrow = function Arrow(props, context) {
  var _props$component = props.component,
      component = _props$component === undefined ? 'span' : _props$component,
      innerRef = props.innerRef,
      children = props.children,
      restProps = _objectWithoutProperties(props, ['component', 'innerRef', 'children']);

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

  var componentProps = _extends({}, restProps, {
    style: _extends({}, arrowStyle, restProps.style)
  });

  if (typeof component === 'string') {
    componentProps.ref = arrowRef;
  } else {
    componentProps.innerRef = arrowRef;
  }

  return (0, _react.createElement)(component, componentProps, children);
};

Arrow.contextTypes = {
  popper: _propTypes2.default.object.isRequired
};

Arrow.propTypes = {
  component: _propTypes2.default.oneOfType([_propTypes2.default.node, _propTypes2.default.func]),
  innerRef: _propTypes2.default.func,
  children: _propTypes2.default.oneOfType([_propTypes2.default.node, _propTypes2.default.func])
};

exports.default = Arrow;

/***/ }),

/***/ "4gcd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
var addLeadingSlash = exports.addLeadingSlash = function addLeadingSlash(path) {
  return path.charAt(0) === '/' ? path : '/' + path;
};

var stripLeadingSlash = exports.stripLeadingSlash = function stripLeadingSlash(path) {
  return path.charAt(0) === '/' ? path.substr(1) : path;
};

var hasBasename = exports.hasBasename = function hasBasename(path, prefix) {
  return new RegExp('^' + prefix + '(\\/|\\?|#|$)', 'i').test(path);
};

var stripBasename = exports.stripBasename = function stripBasename(path, prefix) {
  return hasBasename(path, prefix) ? path.substr(prefix.length) : path;
};

var stripTrailingSlash = exports.stripTrailingSlash = function stripTrailingSlash(path) {
  return path.charAt(path.length - 1) === '/' ? path.slice(0, -1) : path;
};

var parsePath = exports.parsePath = function parsePath(path) {
  var pathname = path || '/';
  var search = '';
  var hash = '';

  var hashIndex = pathname.indexOf('#');
  if (hashIndex !== -1) {
    hash = pathname.substr(hashIndex);
    pathname = pathname.substr(0, hashIndex);
  }

  var searchIndex = pathname.indexOf('?');
  if (searchIndex !== -1) {
    search = pathname.substr(searchIndex);
    pathname = pathname.substr(0, searchIndex);
  }

  return {
    pathname: pathname,
    search: search === '?' ? '' : search,
    hash: hash === '#' ? '' : hash
  };
};

var createPath = exports.createPath = function createPath(location) {
  var pathname = location.pathname,
      search = location.search,
      hash = location.hash;

  var path = pathname || '/';

  if (search && search !== '?') path += search.charAt(0) === '?' ? search : '?' + search;

  if (hash && hash !== '#') path += hash.charAt(0) === '#' ? hash : '#' + hash;

  return path;
};

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

/***/ "7YO4":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
function isAbsolute(pathname) {
  return pathname.charAt(0) === '/';
}

// About 1.5x faster than the two-arg version of Array#splice()
function spliceOne(list, index) {
  for (var i = index, k = i + 1, n = list.length; k < n; i += 1, k += 1) {
    list[i] = list[k];
  }

  list.pop();
}

// This implementation is based heavily on node's url.parse
function resolvePathname(to) {
  var from = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

  var toParts = to && to.split('/') || [];
  var fromParts = from && from.split('/') || [];

  var isToAbs = to && isAbsolute(to);
  var isFromAbs = from && isAbsolute(from);
  var mustEndAbs = isToAbs || isFromAbs;

  if (to && isAbsolute(to)) {
    // to is absolute
    fromParts = toParts;
  } else if (toParts.length) {
    // to is relative, drop the filename
    fromParts.pop();
    fromParts = fromParts.concat(toParts);
  }

  if (!fromParts.length) return '/';

  var hasTrailingSlash = void 0;
  if (fromParts.length) {
    var last = fromParts[fromParts.length - 1];
    hasTrailingSlash = last === '.' || last === '..' || last === '';
  } else {
    hasTrailingSlash = false;
  }

  var up = 0;
  for (var i = fromParts.length; i >= 0; i--) {
    var part = fromParts[i];

    if (part === '.') {
      spliceOne(fromParts, i);
    } else if (part === '..') {
      spliceOne(fromParts, i);
      up++;
    } else if (up) {
      spliceOne(fromParts, i);
      up--;
    }
  }

  if (!mustEndAbs) for (; up--; up) {
    fromParts.unshift('..');
  }if (mustEndAbs && fromParts[0] !== '' && (!fromParts[0] || !isAbsolute(fromParts[0]))) fromParts.unshift('');

  var result = fromParts.join('/');

  if (hasTrailingSlash && result.substr(-1) !== '/') result += '/';

  return result;
}

/* harmony default export */ __webpack_exports__["default"] = (resolvePathname);

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

/***/ "8r+V":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};

var _react = __webpack_require__("eW0v");

var _propTypes = __webpack_require__("5D9O");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _objectWithoutProperties(obj, keys) {
  var target = {};for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
  }return target;
}

var Target = function Target(props, context) {
  var _props$component = props.component,
      component = _props$component === undefined ? 'div' : _props$component,
      innerRef = props.innerRef,
      children = props.children,
      restProps = _objectWithoutProperties(props, ['component', 'innerRef', 'children']);

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

  return (0, _react.createElement)(component, componentProps, children);
};

Target.contextTypes = {
  popperManager: _propTypes2.default.object.isRequired
};

Target.propTypes = {
  component: _propTypes2.default.oneOfType([_propTypes2.default.node, _propTypes2.default.func]),
  innerRef: _propTypes2.default.func,
  children: _propTypes2.default.oneOfType([_propTypes2.default.node, _propTypes2.default.func])
};

exports.default = Target;

/***/ }),

/***/ "ABCk":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"react-tags":"react-tags__1sgoR","is-focused":"is-focused__3DKXl","react-tags__selected":"react-tags__selected__1KLbo","react-tags__selected-tag":"react-tags__selected-tag__2tfr2","react-tags__search":"react-tags__search__2vI7p","react-tags__suggestions":"react-tags__suggestions__3vjwO","is-active":"is-active__GCAGT","is-disabled":"is-disabled__1B5Xk"};

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
  require('fuzzysort').single('fs', 'Fuzzy Search')
  // {score: -16}

  require('fuzzysort').single('test', 'test')
  // {score: 0}

  require('fuzzysort').single('doesnt exist', 'target')
  // null
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
        // search = fuzzysort.ensurePreparedSearch(search)
        if (typeof search !== 'object') {
          var searchPrepared = preparedSearchCache.get(search);
          if (searchPrepared !== undefined) search = searchPrepared;else preparedSearchCache.set(search, search = fuzzysort.prepareSearch(search));
        }
        if (search.length === 0) return null;

        // target = fuzzysort.ensurePrepared(target)
        if (typeof target !== 'object') {
          var targetPrepared = preparedCache.get(target);
          if (targetPrepared !== undefined) target = targetPrepared;else preparedCache.set(target, target = fuzzysort.prepareFast(target));
        }
        if (target._targetLowerCodes.length === 0) return null;

        return fuzzysort.algorithm(search, target, search[0]);
      },

      go: function go(search, targets, options) {
        // search = fuzzysort.ensurePreparedSearch(search)
        if (typeof search !== 'object') {
          var searchPrepared = preparedSearchCache.get(search);
          if (searchPrepared !== undefined) search = searchPrepared;else preparedSearchCache.set(search, search = fuzzysort.prepareSearch(search));
        }
        if (search.length === 0) return noResults;
        var searchLowerCode = search[0];

        var threshold = options && options.threshold || instanceOptions && instanceOptions.threshold || -Infinity;
        var limit = options && options.limit || instanceOptions && instanceOptions.limit || Infinity;
        var resultsLen = 0;var limitedCount = 0;

        // This code is copy/pasted 3 times for performance reasons [options.keys, options.key, no keys]

        // options.keys
        if (options && options.keys) {
          var scoreFn = options.scoreFn || defaultScoreFn;
          var keys = options.keys;
          var keysLen = keys.length;
          for (var i = targets.length - 1; i >= 0; --i) {
            var obj = targets[i];
            var objResults = new Array(keysLen);
            for (var keyI = keysLen - 1; keyI >= 0; --keyI) {
              var key = keys[keyI];
              var target = getValue(obj, key);

              // target = fuzzysort.ensurePrepared(target)
              if (typeof target !== 'object') {
                var targetPrepared = preparedCache.get(target);
                if (targetPrepared !== undefined) target = targetPrepared;else preparedCache.set(target, target = fuzzysort.prepareFast(target));
              }
              if (target._targetLowerCodes.length === 0) {
                objResults[keyI] = null;continue;
              }

              objResults[keyI] = fuzzysort.algorithm(search, target, searchLowerCode);
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
          for (var i = targets.length - 1; i >= 0; --i) {
            var obj = targets[i];
            var target = getValue(obj, key);

            // target = fuzzysort.ensurePrepared(target)
            if (typeof target !== 'object') {
              var targetPrepared = preparedCache.get(target);
              if (targetPrepared !== undefined) target = targetPrepared;else preparedCache.set(target, target = fuzzysort.prepareFast(target));
            }
            if (target._targetLowerCodes.length === 0) continue;

            var result = fuzzysort.algorithm(search, target, searchLowerCode);
            if (result === null) continue;
            if (result.score < threshold) continue;
            // result = Object.create(result)
            // result = Object.assign({}, result)
            // result = {result:result}
            // result.obj = obj
            // result = {score:result.score, target:result.target, indexes:result.indexes, obj:obj} // hardcoded all public fields
            result = { target: result.target, _targetLowerCodes: null, _nextBeginningIndexes: null, score: result.score, indexes: result.indexes, obj: obj // has to match hidden class
            };if (resultsLen < limit) {
              q.add(result);++resultsLen;
            } else {
              ++limitedCount;
              if (result.score > q.peek().score) q.replaceTop(result);
            }
          }

          // no keys
        } else {
          for (var i = targets.length - 1; i >= 0; --i) {
            var target = targets[i];
            // target = fuzzysort.ensurePrepared(target)
            if (typeof target !== 'object') {
              var targetPrepared = preparedCache.get(target);
              if (targetPrepared !== undefined) target = targetPrepared;else preparedCache.set(target, target = fuzzysort.prepareFast(target));
            }
            if (target._targetLowerCodes.length === 0) continue;

            var result = fuzzysort.algorithm(search, target, searchLowerCode);
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
          // search = fuzzysort.ensurePreparedSearch(search)
          if (typeof search !== 'object') {
            var searchPrepared = preparedSearchCache.get(search);
            if (searchPrepared !== undefined) search = searchPrepared;else preparedSearchCache.set(search, search = fuzzysort.prepareSearch(search));
          }
          if (search.length === 0) return resolve(noResults);
          var searchLowerCode = search[0];

          var itemsPerCheck = 1000;
          var q = fastpriorityqueue();
          var iCurrent = targets.length - 1;
          var threshold = options && options.threshold || instanceOptions && instanceOptions.threshold || -Infinity;
          var limit = options && options.limit || instanceOptions && instanceOptions.limit || Infinity;
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
              for (var i = targets.length - 1; i >= 0; --i) {
                var obj = targets[i];
                var objResults = new Array(keysLen);
                for (var keyI = keysLen - 1; keyI >= 0; --keyI) {
                  var key = keys[keyI];
                  var target = getValue(obj, key);

                  // target = fuzzysort.ensurePrepared(target)
                  if (typeof target !== 'object') {
                    var targetPrepared = preparedCache.get(target);
                    if (targetPrepared !== undefined) target = targetPrepared;else preparedCache.set(target, target = fuzzysort.prepareFast(target));
                  }
                  if (target._targetLowerCodes.length === 0) {
                    objResults[keyI] = null;continue;
                  }

                  objResults[keyI] = fuzzysort.algorithm(search, target, searchLowerCode);
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

                if (iCurrent % itemsPerCheck === 0) {
                  if (Date.now() - startMs >= asyncInterval) {
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

                // target = fuzzysort.ensurePrepared(target)
                if (typeof target !== 'object') {
                  var targetPrepared = preparedCache.get(target);
                  if (targetPrepared !== undefined) target = targetPrepared;else preparedCache.set(target, target = fuzzysort.prepareFast(target));
                }
                if (target._targetLowerCodes.length === 0) continue;

                var result = fuzzysort.algorithm(search, target, searchLowerCode);
                if (result === null) continue;
                if (result.score < threshold) continue;
                // result = Object.create(result)
                // result = Object.assign({}, result)
                // result = {result:result}
                // result.obj = obj
                // result = {score:result.score, target:result.target, indexes:result.indexes, obj:obj} // hardcoded all public fields
                result = { target: result.target, _targetLowerCodes: null, _nextBeginningIndexes: null, score: result.score, indexes: result.indexes, obj: obj // has to match hidden class
                };if (resultsLen < limit) {
                  q.add(result);++resultsLen;
                } else {
                  ++limitedCount;
                  if (result.score > q.peek().score) q.replaceTop(result);
                }

                if (iCurrent % itemsPerCheck === 0) {
                  if (Date.now() - startMs >= asyncInterval) {
                    isNode ? setImmediate(step) : setTimeout(step);
                    return;
                  }
                }
              }

              // no keys
            } else {
              for (; iCurrent >= 0; --iCurrent) {
                var target = targets[iCurrent];
                // target = fuzzysort.ensurePrepared(target)
                if (typeof target !== 'object') {
                  var targetPrepared = preparedCache.get(target);
                  if (targetPrepared !== undefined) target = targetPrepared;else preparedCache.set(target, target = fuzzysort.prepareFast(target));
                }
                if (target._targetLowerCodes.length === 0) continue;

                var result = fuzzysort.algorithm(search, target, searchLowerCode);
                if (result === null) continue;
                if (result.score < threshold) continue;
                if (resultsLen < limit) {
                  q.add(result);++resultsLen;
                } else {
                  ++limitedCount;
                  if (result.score > q.peek().score) q.replaceTop(result);
                }

                if (iCurrent % itemsPerCheck === 0) {
                  if (Date.now() - startMs >= asyncInterval) {
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
        return { target: target, _targetLowerCodes: fuzzysort.prepareLowerCodes(target), _nextBeginningIndexes: fuzzysort.prepareNextBeginningIndexes(target), score: null, indexes: null, obj: null };
      },
      prepareSearch: function prepareSearch(search) {
        return fuzzysort.prepareLowerCodes(search);
      },

      // Below this point is only internal code
      // Below this point is only internal code
      // Below this point is only internal code
      // Below this point is only internal code


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
            if (typoSimpleI !== 0) score += typoPenalty;
          } else {
            if (typoStrictI !== 0) score += typoPenalty;
          }
          score -= targetLen - searchLen;
          prepared.score = score;
          prepared.indexes = new Array(matchesBestLen);for (var i = matchesBestLen - 1; i >= 0; --i) {
            prepared.indexes[i] = matchesBest[i];
          }return prepared;
        }
      },

      prepareFast: function prepareFast(target) {
        return { target: target, _targetLowerCodes: fuzzysort.prepareLowerCodes(target), _nextBeginningIndexes: null, score: null, indexes: null, obj: null };
      },

      prepareLowerCodes: function prepareLowerCodes(str) {
        var lowerCodes = new Array(str.length);
        var lower = str.toLowerCase();
        var strLen = str.length;
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
        var nextBeginningIndexes = new Array(targetLen);
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

      // ensurePrepared: function(target) {
      //   if(typeof target === 'object') return target
      //   var targetPrepared = preparedCache.get(target)
      //   if(targetPrepared !== undefined) return targetPrepared
      //   preparedCache.set(target, targetPrepared = fuzzysort.prepareFast(target))
      //   return targetPrepared
      // },
      // ensurePreparedSearch: function(search) {
      //   if(typeof search === 'object') return search
      //   var searchPrepared = preparedSearchCache.get(search)
      //   if(searchPrepared !== undefined) return searchPrepared
      //   preparedSearchCache.set(search, searchPrepared = fuzzysort.prepareSearch(search))
      //   return searchPrepared
      // },

      cleanup: cleanup,
      new: fuzzysortNew
    };
    return fuzzysort;
  } // fuzzysortNew

  // This stuff is outside fuzzysortNew, because it's shared with instances of fuzzysort.new()
  var isNode = "function" !== 'undefined' && typeof window === 'undefined';
  // var MAX_INT = Number.MAX_SAFE_INTEGER
  // var MIN_INT = Number.MIN_VALUE
  var typoPenalty = -20;
  var asyncInterval = 32;
  var preparedCache = new Map();
  var preparedSearchCache = new Map();
  var noResults = [];noResults.total = 0;
  var matchesSimple = [];var matchesStrict = [];
  function cleanup() {
    preparedCache.clear();preparedSearchCache.clear();matchesSimple = [];matchesStrict = [];
  }
  function defaultScoreFn(a) {
    var max = -Infinity;
    for (var i = a.length - 1; i >= 0; --i) {
      var result = a[i];if (result === null) continue;
      var score = result.score;
      if (score > max) max = score;
    }
    if (max === -Infinity) return null;
    return max;
  }

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
  var q = fastpriorityqueue();

  return fuzzysortNew();
}); // UMD

// TODO: (performance) layout memory in an optimal way to go fast by avoiding cache misses

// TODO: (performance) preparedCache is a memory leak

// TODO: (like sublime) backslash === forwardslash

// TODO: (performance) i have no idea how well optizmied the allowing typos algorithm is

// TODO: (performance) search could assume to be lowercase?

/***/ }),

/***/ "H9/r":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"wrapper":"wrapper__ZvzR1","videoPlayer":"videoPlayer__3mHME","activeMetaContainer":"activeMetaContainer__11_8X"};

/***/ }),

/***/ "J4GW":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"searchForm":"searchForm__11aN7","searchField":"searchField__3ED4k","resetButton":"resetButton__2KlfD","resetIcon":"resetIcon__ZhtMV"};

/***/ }),

/***/ "JZ8d":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = symbolObservablePonyfill;
function symbolObservablePonyfill(root) {
	var result;
	var Symbol = root.Symbol;

	if (typeof Symbol === 'function') {
		if (Symbol.observable) {
			result = Symbol.observable;
		} else {
			result = Symbol('observable');
			Symbol.observable = result;
		}
	} else {
		result = '@@observable';
	}

	return result;
};

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

// EXTERNAL MODULE: ../node_modules/react-popper/lib/react-popper.js
var react_popper = __webpack_require__("xczG");
var react_popper_default = /*#__PURE__*/__webpack_require__.n(react_popper);

// EXTERNAL MODULE: ./components/meta/style.scss
var meta_style = __webpack_require__("LGzG");
var meta_style_default = /*#__PURE__*/__webpack_require__.n(meta_style);

// EXTERNAL MODULE: ../node_modules/prop-types/index.js
var prop_types = __webpack_require__("5D9O");
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);

// CONCATENATED MODULE: ./components/octicon/index.js


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var octicon_Octicon = function (_Component) {
  _inherits(Octicon, _Component);

  function Octicon() {
    var _temp, _this, _ret;

    _classCallCheck(this, Octicon);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = {
      icon: {}
    }, _temp), _possibleConstructorReturn(_this, _ret);
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
    var meta = this.props.meta;

    Object(preact_router_es["route"])('/' + meta.id + '/' + meta.slug + '/edit');
  };

  Meta.prototype.render = function render(props) {
    var showTitle = props.showTitle,
        meta = props.meta;

    return Object(preact_min["h"])(
      'div',
      { className: meta_style_default.a.meta },
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
              { href: '/search/' + encodeURIComponent(person) },
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
      var meta = _this.props.meta;

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
    var meta = props.meta;

    return Object(preact_min["h"])(
      'li',
      { className: videoLink_style_default.a.video },
      Object(preact_min["h"])(
        react_popper["Manager"],
        null,
        Object(preact_min["h"])(
          react_popper["Target"],
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
          Object(preact_min["h"])(meta_Meta, { meta: meta, limitDescription: '250' }),
          Object(preact_min["h"])(react_popper["Arrow"], { className: videoLink_style_default.a.popperarrow })
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
      react_popper["Popper"],
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
      return Object(preact_min["h"])(videoLink_VideoLink, { meta: data.meta });
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

// CONCATENATED MODULE: ../node_modules/lodash-es/_freeGlobal.js
/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/* harmony default export */ var _freeGlobal = (freeGlobal);
// CONCATENATED MODULE: ../node_modules/lodash-es/_root.js


/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var _root_root = _freeGlobal || freeSelf || Function('return this')();

/* harmony default export */ var _root = (_root_root);
// CONCATENATED MODULE: ../node_modules/lodash-es/_Symbol.js


/** Built-in value references. */
var _Symbol_Symbol = _root.Symbol;

/* harmony default export */ var _Symbol = (_Symbol_Symbol);
// CONCATENATED MODULE: ../node_modules/lodash-es/_getRawTag.js


/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var _getRawTag_hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = _Symbol ? _Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = _getRawTag_hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

/* harmony default export */ var _getRawTag = (getRawTag);
// CONCATENATED MODULE: ../node_modules/lodash-es/_objectToString.js
/** Used for built-in method references. */
var _objectToString_objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var _objectToString_nativeObjectToString = _objectToString_objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return _objectToString_nativeObjectToString.call(value);
}

/* harmony default export */ var _objectToString = (objectToString);
// CONCATENATED MODULE: ../node_modules/lodash-es/_baseGetTag.js




/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var _baseGetTag_symToStringTag = _Symbol ? _Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return _baseGetTag_symToStringTag && _baseGetTag_symToStringTag in Object(value) ? _getRawTag(value) : _objectToString(value);
}

/* harmony default export */ var _baseGetTag = (baseGetTag);
// CONCATENATED MODULE: ../node_modules/lodash-es/_overArg.js
/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function (arg) {
    return func(transform(arg));
  };
}

/* harmony default export */ var _overArg = (overArg);
// CONCATENATED MODULE: ../node_modules/lodash-es/_getPrototype.js


/** Built-in value references. */
var getPrototype = _overArg(Object.getPrototypeOf, Object);

/* harmony default export */ var _getPrototype = (getPrototype);
// CONCATENATED MODULE: ../node_modules/lodash-es/isObjectLike.js
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
  return value != null && typeof value == 'object';
}

/* harmony default export */ var lodash_es_isObjectLike = (isObjectLike);
// CONCATENATED MODULE: ../node_modules/lodash-es/isPlainObject.js




/** `Object#toString` result references. */
var objectTag = '[object Object]';

/** Used for built-in method references. */
var funcProto = Function.prototype,
    isPlainObject_objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var isPlainObject_hasOwnProperty = isPlainObject_objectProto.hasOwnProperty;

/** Used to infer the `Object` constructor. */
var objectCtorString = funcToString.call(Object);

/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */
function isPlainObject(value) {
  if (!lodash_es_isObjectLike(value) || _baseGetTag(value) != objectTag) {
    return false;
  }
  var proto = _getPrototype(value);
  if (proto === null) {
    return true;
  }
  var Ctor = isPlainObject_hasOwnProperty.call(proto, 'constructor') && proto.constructor;
  return typeof Ctor == 'function' && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
}

/* harmony default export */ var lodash_es_isPlainObject = (isPlainObject);
// EXTERNAL MODULE: ../node_modules/symbol-observable/es/index.js
var es = __webpack_require__("LkZ7");

// CONCATENATED MODULE: ../node_modules/redux/es/createStore.js



/**
 * These are private action types reserved by Redux.
 * For any unknown actions, you must return the current state.
 * If the current state is undefined, you must return the initial state.
 * Do not reference these action types directly in your code.
 */
var ActionTypes = {
  INIT: '@@redux/INIT'

  /**
   * Creates a Redux store that holds the state tree.
   * The only way to change the data in the store is to call `dispatch()` on it.
   *
   * There should only be a single store in your app. To specify how different
   * parts of the state tree respond to actions, you may combine several reducers
   * into a single reducer function by using `combineReducers`.
   *
   * @param {Function} reducer A function that returns the next state tree, given
   * the current state tree and the action to handle.
   *
   * @param {any} [preloadedState] The initial state. You may optionally specify it
   * to hydrate the state from the server in universal apps, or to restore a
   * previously serialized user session.
   * If you use `combineReducers` to produce the root reducer function, this must be
   * an object with the same shape as `combineReducers` keys.
   *
   * @param {Function} [enhancer] The store enhancer. You may optionally specify it
   * to enhance the store with third-party capabilities such as middleware,
   * time travel, persistence, etc. The only store enhancer that ships with Redux
   * is `applyMiddleware()`.
   *
   * @returns {Store} A Redux store that lets you read the state, dispatch actions
   * and subscribe to changes.
   */
};function createStore_createStore(reducer, preloadedState, enhancer) {
  var _ref2;

  if (typeof preloadedState === 'function' && typeof enhancer === 'undefined') {
    enhancer = preloadedState;
    preloadedState = undefined;
  }

  if (typeof enhancer !== 'undefined') {
    if (typeof enhancer !== 'function') {
      throw new Error('Expected the enhancer to be a function.');
    }

    return enhancer(createStore_createStore)(reducer, preloadedState);
  }

  if (typeof reducer !== 'function') {
    throw new Error('Expected the reducer to be a function.');
  }

  var currentReducer = reducer;
  var currentState = preloadedState;
  var currentListeners = [];
  var nextListeners = currentListeners;
  var isDispatching = false;

  function ensureCanMutateNextListeners() {
    if (nextListeners === currentListeners) {
      nextListeners = currentListeners.slice();
    }
  }

  /**
   * Reads the state tree managed by the store.
   *
   * @returns {any} The current state tree of your application.
   */
  function getState() {
    return currentState;
  }

  /**
   * Adds a change listener. It will be called any time an action is dispatched,
   * and some part of the state tree may potentially have changed. You may then
   * call `getState()` to read the current state tree inside the callback.
   *
   * You may call `dispatch()` from a change listener, with the following
   * caveats:
   *
   * 1. The subscriptions are snapshotted just before every `dispatch()` call.
   * If you subscribe or unsubscribe while the listeners are being invoked, this
   * will not have any effect on the `dispatch()` that is currently in progress.
   * However, the next `dispatch()` call, whether nested or not, will use a more
   * recent snapshot of the subscription list.
   *
   * 2. The listener should not expect to see all state changes, as the state
   * might have been updated multiple times during a nested `dispatch()` before
   * the listener is called. It is, however, guaranteed that all subscribers
   * registered before the `dispatch()` started will be called with the latest
   * state by the time it exits.
   *
   * @param {Function} listener A callback to be invoked on every dispatch.
   * @returns {Function} A function to remove this change listener.
   */
  function subscribe(listener) {
    if (typeof listener !== 'function') {
      throw new Error('Expected listener to be a function.');
    }

    var isSubscribed = true;

    ensureCanMutateNextListeners();
    nextListeners.push(listener);

    return function unsubscribe() {
      if (!isSubscribed) {
        return;
      }

      isSubscribed = false;

      ensureCanMutateNextListeners();
      var index = nextListeners.indexOf(listener);
      nextListeners.splice(index, 1);
    };
  }

  /**
   * Dispatches an action. It is the only way to trigger a state change.
   *
   * The `reducer` function, used to create the store, will be called with the
   * current state tree and the given `action`. Its return value will
   * be considered the **next** state of the tree, and the change listeners
   * will be notified.
   *
   * The base implementation only supports plain object actions. If you want to
   * dispatch a Promise, an Observable, a thunk, or something else, you need to
   * wrap your store creating function into the corresponding middleware. For
   * example, see the documentation for the `redux-thunk` package. Even the
   * middleware will eventually dispatch plain object actions using this method.
   *
   * @param {Object} action A plain object representing “what changed”. It is
   * a good idea to keep actions serializable so you can record and replay user
   * sessions, or use the time travelling `redux-devtools`. An action must have
   * a `type` property which may not be `undefined`. It is a good idea to use
   * string constants for action types.
   *
   * @returns {Object} For convenience, the same action object you dispatched.
   *
   * Note that, if you use a custom middleware, it may wrap `dispatch()` to
   * return something else (for example, a Promise you can await).
   */
  function dispatch(action) {
    if (!lodash_es_isPlainObject(action)) {
      throw new Error('Actions must be plain objects. ' + 'Use custom middleware for async actions.');
    }

    if (typeof action.type === 'undefined') {
      throw new Error('Actions may not have an undefined "type" property. ' + 'Have you misspelled a constant?');
    }

    if (isDispatching) {
      throw new Error('Reducers may not dispatch actions.');
    }

    try {
      isDispatching = true;
      currentState = currentReducer(currentState, action);
    } finally {
      isDispatching = false;
    }

    var listeners = currentListeners = nextListeners;
    for (var i = 0; i < listeners.length; i++) {
      var listener = listeners[i];
      listener();
    }

    return action;
  }

  /**
   * Replaces the reducer currently used by the store to calculate the state.
   *
   * You might need this if your app implements code splitting and you want to
   * load some of the reducers dynamically. You might also need this if you
   * implement a hot reloading mechanism for Redux.
   *
   * @param {Function} nextReducer The reducer for the store to use instead.
   * @returns {void}
   */
  function replaceReducer(nextReducer) {
    if (typeof nextReducer !== 'function') {
      throw new Error('Expected the nextReducer to be a function.');
    }

    currentReducer = nextReducer;
    dispatch({ type: ActionTypes.INIT });
  }

  /**
   * Interoperability point for observable/reactive libraries.
   * @returns {observable} A minimal observable of state changes.
   * For more information, see the observable proposal:
   * https://github.com/tc39/proposal-observable
   */
  function observable() {
    var _ref;

    var outerSubscribe = subscribe;
    return _ref = {
      /**
       * The minimal observable subscription method.
       * @param {Object} observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns {subscription} An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */
      subscribe: function subscribe(observer) {
        if (typeof observer !== 'object') {
          throw new TypeError('Expected the observer to be an object.');
        }

        function observeState() {
          if (observer.next) {
            observer.next(getState());
          }
        }

        observeState();
        var unsubscribe = outerSubscribe(observeState);
        return { unsubscribe: unsubscribe };
      }
    }, _ref[es["a" /* default */]] = function () {
      return this;
    }, _ref;
  }

  // When a store is created, an "INIT" action is dispatched so that every
  // reducer returns their initial state. This effectively populates
  // the initial state tree.
  dispatch({ type: ActionTypes.INIT });

  return _ref2 = {
    dispatch: dispatch,
    subscribe: subscribe,
    getState: getState,
    replaceReducer: replaceReducer
  }, _ref2[es["a" /* default */]] = observable, _ref2;
}
// CONCATENATED MODULE: ../node_modules/redux/es/utils/warning.js
/**
 * Prints a warning in the console if it exists.
 *
 * @param {String} message The warning message.
 * @returns {void}
 */
function warning_warning(message) {
  /* eslint-disable no-console */
  if (typeof console !== 'undefined' && typeof console.error === 'function') {
    console.error(message);
  }
  /* eslint-enable no-console */
  try {
    // This error was thrown as a convenience so that if you enable
    // "break on all exceptions" in your console,
    // it would pause the execution at this line.
    throw new Error(message);
    /* eslint-disable no-empty */
  } catch (e) {}
  /* eslint-enable no-empty */
}
// CONCATENATED MODULE: ../node_modules/redux/es/combineReducers.js




function getUndefinedStateErrorMessage(key, action) {
  var actionType = action && action.type;
  var actionName = actionType && '"' + actionType.toString() + '"' || 'an action';

  return 'Given action ' + actionName + ', reducer "' + key + '" returned undefined. ' + 'To ignore an action, you must explicitly return the previous state. ' + 'If you want this reducer to hold no value, you can return null instead of undefined.';
}

function getUnexpectedStateShapeWarningMessage(inputState, reducers, action, unexpectedKeyCache) {
  var reducerKeys = Object.keys(reducers);
  var argumentName = action && action.type === ActionTypes.INIT ? 'preloadedState argument passed to createStore' : 'previous state received by the reducer';

  if (reducerKeys.length === 0) {
    return 'Store does not have a valid reducer. Make sure the argument passed ' + 'to combineReducers is an object whose values are reducers.';
  }

  if (!lodash_es_isPlainObject(inputState)) {
    return 'The ' + argumentName + ' has unexpected type of "' + {}.toString.call(inputState).match(/\s([a-z|A-Z]+)/)[1] + '". Expected argument to be an object with the following ' + ('keys: "' + reducerKeys.join('", "') + '"');
  }

  var unexpectedKeys = Object.keys(inputState).filter(function (key) {
    return !reducers.hasOwnProperty(key) && !unexpectedKeyCache[key];
  });

  unexpectedKeys.forEach(function (key) {
    unexpectedKeyCache[key] = true;
  });

  if (unexpectedKeys.length > 0) {
    return 'Unexpected ' + (unexpectedKeys.length > 1 ? 'keys' : 'key') + ' ' + ('"' + unexpectedKeys.join('", "') + '" found in ' + argumentName + '. ') + 'Expected to find one of the known reducer keys instead: ' + ('"' + reducerKeys.join('", "') + '". Unexpected keys will be ignored.');
  }
}

function assertReducerShape(reducers) {
  Object.keys(reducers).forEach(function (key) {
    var reducer = reducers[key];
    var initialState = reducer(undefined, { type: ActionTypes.INIT });

    if (typeof initialState === 'undefined') {
      throw new Error('Reducer "' + key + '" returned undefined during initialization. ' + 'If the state passed to the reducer is undefined, you must ' + 'explicitly return the initial state. The initial state may ' + 'not be undefined. If you don\'t want to set a value for this reducer, ' + 'you can use null instead of undefined.');
    }

    var type = '@@redux/PROBE_UNKNOWN_ACTION_' + Math.random().toString(36).substring(7).split('').join('.');
    if (typeof reducer(undefined, { type: type }) === 'undefined') {
      throw new Error('Reducer "' + key + '" returned undefined when probed with a random type. ' + ('Don\'t try to handle ' + ActionTypes.INIT + ' or other actions in "redux/*" ') + 'namespace. They are considered private. Instead, you must return the ' + 'current state for any unknown actions, unless it is undefined, ' + 'in which case you must return the initial state, regardless of the ' + 'action type. The initial state may not be undefined, but can be null.');
    }
  });
}

/**
 * Turns an object whose values are different reducer functions, into a single
 * reducer function. It will call every child reducer, and gather their results
 * into a single state object, whose keys correspond to the keys of the passed
 * reducer functions.
 *
 * @param {Object} reducers An object whose values correspond to different
 * reducer functions that need to be combined into one. One handy way to obtain
 * it is to use ES6 `import * as reducers` syntax. The reducers may never return
 * undefined for any action. Instead, they should return their initial state
 * if the state passed to them was undefined, and the current state for any
 * unrecognized action.
 *
 * @returns {Function} A reducer function that invokes every reducer inside the
 * passed object, and builds a state object with the same shape.
 */
function combineReducers(reducers) {
  var reducerKeys = Object.keys(reducers);
  var finalReducers = {};
  for (var i = 0; i < reducerKeys.length; i++) {
    var key = reducerKeys[i];

    if (false) {
      if (typeof reducers[key] === 'undefined') {
        warning('No reducer provided for key "' + key + '"');
      }
    }

    if (typeof reducers[key] === 'function') {
      finalReducers[key] = reducers[key];
    }
  }
  var finalReducerKeys = Object.keys(finalReducers);

  var unexpectedKeyCache = void 0;
  if (false) {
    unexpectedKeyCache = {};
  }

  var shapeAssertionError = void 0;
  try {
    assertReducerShape(finalReducers);
  } catch (e) {
    shapeAssertionError = e;
  }

  return function combination() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var action = arguments[1];

    if (shapeAssertionError) {
      throw shapeAssertionError;
    }

    if (false) {
      var warningMessage = getUnexpectedStateShapeWarningMessage(state, finalReducers, action, unexpectedKeyCache);
      if (warningMessage) {
        warning(warningMessage);
      }
    }

    var hasChanged = false;
    var nextState = {};
    for (var _i = 0; _i < finalReducerKeys.length; _i++) {
      var _key = finalReducerKeys[_i];
      var reducer = finalReducers[_key];
      var previousStateForKey = state[_key];
      var nextStateForKey = reducer(previousStateForKey, action);
      if (typeof nextStateForKey === 'undefined') {
        var errorMessage = getUndefinedStateErrorMessage(_key, action);
        throw new Error(errorMessage);
      }
      nextState[_key] = nextStateForKey;
      hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
    }
    return hasChanged ? nextState : state;
  };
}
// CONCATENATED MODULE: ../node_modules/redux/es/bindActionCreators.js
function bindActionCreator(actionCreator, dispatch) {
  return function () {
    return dispatch(actionCreator.apply(undefined, arguments));
  };
}

/**
 * Turns an object whose values are action creators, into an object with the
 * same keys, but with every function wrapped into a `dispatch` call so they
 * may be invoked directly. This is just a convenience method, as you can call
 * `store.dispatch(MyActionCreators.doSomething())` yourself just fine.
 *
 * For convenience, you can also pass a single function as the first argument,
 * and get a function in return.
 *
 * @param {Function|Object} actionCreators An object whose values are action
 * creator functions. One handy way to obtain it is to use ES6 `import * as`
 * syntax. You may also pass a single function.
 *
 * @param {Function} dispatch The `dispatch` function available on your Redux
 * store.
 *
 * @returns {Function|Object} The object mimicking the original object, but with
 * every action creator wrapped into the `dispatch` call. If you passed a
 * function as `actionCreators`, the return value will also be a single
 * function.
 */
function bindActionCreators(actionCreators, dispatch) {
  if (typeof actionCreators === 'function') {
    return bindActionCreator(actionCreators, dispatch);
  }

  if (typeof actionCreators !== 'object' || actionCreators === null) {
    throw new Error('bindActionCreators expected an object or a function, instead received ' + (actionCreators === null ? 'null' : typeof actionCreators) + '. ' + 'Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
  }

  var keys = Object.keys(actionCreators);
  var boundActionCreators = {};
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    var actionCreator = actionCreators[key];
    if (typeof actionCreator === 'function') {
      boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
    }
  }
  return boundActionCreators;
}
// CONCATENATED MODULE: ../node_modules/redux/es/compose.js
/**
 * Composes single-argument functions from right to left. The rightmost
 * function can take multiple arguments as it provides the signature for
 * the resulting composite function.
 *
 * @param {...Function} funcs The functions to compose.
 * @returns {Function} A function obtained by composing the argument functions
 * from right to left. For example, compose(f, g, h) is identical to doing
 * (...args) => f(g(h(...args))).
 */

function compose() {
  for (var _len = arguments.length, funcs = Array(_len), _key = 0; _key < _len; _key++) {
    funcs[_key] = arguments[_key];
  }

  if (funcs.length === 0) {
    return function (arg) {
      return arg;
    };
  }

  if (funcs.length === 1) {
    return funcs[0];
  }

  return funcs.reduce(function (a, b) {
    return function () {
      return a(b.apply(undefined, arguments));
    };
  });
}
// CONCATENATED MODULE: ../node_modules/redux/es/applyMiddleware.js
var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};



/**
 * Creates a store enhancer that applies middleware to the dispatch method
 * of the Redux store. This is handy for a variety of tasks, such as expressing
 * asynchronous actions in a concise manner, or logging every action payload.
 *
 * See `redux-thunk` package as an example of the Redux middleware.
 *
 * Because middleware is potentially asynchronous, this should be the first
 * store enhancer in the composition chain.
 *
 * Note that each middleware will be given the `dispatch` and `getState` functions
 * as named arguments.
 *
 * @param {...Function} middlewares The middleware chain to be applied.
 * @returns {Function} A store enhancer applying the middleware.
 */
function applyMiddleware() {
  for (var _len = arguments.length, middlewares = Array(_len), _key = 0; _key < _len; _key++) {
    middlewares[_key] = arguments[_key];
  }

  return function (createStore) {
    return function (reducer, preloadedState, enhancer) {
      var store = createStore(reducer, preloadedState, enhancer);
      var _dispatch = store.dispatch;
      var chain = [];

      var middlewareAPI = {
        getState: store.getState,
        dispatch: function dispatch(action) {
          return _dispatch(action);
        }
      };
      chain = middlewares.map(function (middleware) {
        return middleware(middlewareAPI);
      });
      _dispatch = compose.apply(undefined, chain)(store.dispatch);

      return _extends({}, store, {
        dispatch: _dispatch
      });
    };
  };
}
// CONCATENATED MODULE: ../node_modules/redux/es/index.js







/*
* This is a dummy function to check if the function name has been altered by minification.
* If the function has been minified and NODE_ENV !== 'production', warn the user.
*/
function isCrushed() {}

if (false) {
  warning('You are currently using minified code outside of NODE_ENV === \'production\'. ' + 'This means that you are running a slower development build of Redux. ' + 'You can use loose-envify (https://github.com/zertosh/loose-envify) for browserify ' + 'or DefinePlugin for webpack (http://stackoverflow.com/questions/30030031) ' + 'to ensure you have the correct code for your production build.');
}


// CONCATENATED MODULE: ../node_modules/preact-redux/dist/preact-redux.esm.js



var Children = {
  only: function only(children) {
    return children && children[0] || null;
  }
};

function proptype() {}
proptype.isRequired = proptype;

var PropTypes = {
  element: proptype,
  func: proptype,
  shape: function shape() {
    return proptype;
  },
  instanceOf: function instanceOf() {
    return proptype;
  }
};

var subscriptionShape = PropTypes.shape({
  trySubscribe: PropTypes.func.isRequired,
  tryUnsubscribe: PropTypes.func.isRequired,
  notifyNestedSubs: PropTypes.func.isRequired,
  isSubscribed: PropTypes.func.isRequired
});

var storeShape = PropTypes.shape({
  subscribe: PropTypes.func.isRequired,
  dispatch: PropTypes.func.isRequired,
  getState: PropTypes.func.isRequired
});

/**
 * Prints a warning in the console if it exists.
 *
 * @param {String} message The warning message.
 * @returns {void}
 */
function preact_redux_esm_warning(message) {
  /* eslint-disable no-console */
  if (typeof console !== 'undefined' && typeof console.error === 'function') {
    console.error(message);
  }
  /* eslint-enable no-console */
  try {
    // This error was thrown as a convenience so that if you enable
    // "break on all exceptions" in your console,
    // it would pause the execution at this line.
    throw new Error(message);
    /* eslint-disable no-empty */
  } catch (e) {}
  /* eslint-enable no-empty */
}

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

var classCallCheck = function classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var preact_redux_esm__extends = Object.assign || function (target) {
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

var inherits = function inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};

var objectWithoutProperties = function objectWithoutProperties(obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
};

var possibleConstructorReturn = function possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

var didWarnAboutReceivingStore = false;
function warnAboutReceivingStore() {
  if (didWarnAboutReceivingStore) {
    return;
  }
  didWarnAboutReceivingStore = true;

  preact_redux_esm_warning('<Provider> does not support changing `store` on the fly. ' + 'It is most likely that you see this error because you updated to ' + 'Redux 2.x and React Redux 2.x which no longer hot reload reducers ' + 'automatically. See https://github.com/reactjs/react-redux/releases/' + 'tag/v2.0.0 for the migration instructions.');
}

function createProvider() {
  var _Provider$childContex;

  var storeKey = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'store';
  var subKey = arguments[1];

  var subscriptionKey = subKey || storeKey + 'Subscription';

  var Provider = function (_Component) {
    inherits(Provider, _Component);

    Provider.prototype.getChildContext = function getChildContext() {
      var _ref;

      return _ref = {}, _ref[storeKey] = this[storeKey], _ref[subscriptionKey] = null, _ref;
    };

    function Provider(props, context) {
      classCallCheck(this, Provider);

      var _this = possibleConstructorReturn(this, _Component.call(this, props, context));

      _this[storeKey] = props.store;
      return _this;
    }

    Provider.prototype.render = function render() {
      return Children.only(this.props.children);
    };

    return Provider;
  }(preact_min["Component"]);

  {
    Provider.prototype.componentWillReceiveProps = function (nextProps) {
      if (this[storeKey] !== nextProps.store) {
        warnAboutReceivingStore();
      }
    };
  }

  Provider.childContextTypes = (_Provider$childContex = {}, _Provider$childContex[storeKey] = storeShape.isRequired, _Provider$childContex[subscriptionKey] = subscriptionShape, _Provider$childContex);

  return Provider;
}

var preact_redux_esm_Provider = createProvider();

/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
var REACT_STATICS = {
  childContextTypes: true,
  contextTypes: true,
  defaultProps: true,
  displayName: true,
  getDefaultProps: true,
  mixins: true,
  propTypes: true,
  type: true
};

var KNOWN_STATICS = {
  name: true,
  length: true,
  prototype: true,
  caller: true,
  callee: true,
  arguments: true,
  arity: true
};

var defineProperty$1 = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = getPrototypeOf && getPrototypeOf(Object);

var hoistNonReactStatics = function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
  if (typeof sourceComponent !== 'string') {
    // don't hoist over string (html) components

    if (objectPrototype) {
      var inheritedComponent = getPrototypeOf(sourceComponent);
      if (inheritedComponent && inheritedComponent !== objectPrototype) {
        hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
      }
    }

    var keys = getOwnPropertyNames(sourceComponent);

    if (getOwnPropertySymbols) {
      keys = keys.concat(getOwnPropertySymbols(sourceComponent));
    }

    for (var i = 0; i < keys.length; ++i) {
      var key = keys[i];
      if (!REACT_STATICS[key] && !KNOWN_STATICS[key] && (!blacklist || !blacklist[key])) {
        var descriptor = getOwnPropertyDescriptor(sourceComponent, key);
        try {
          // Avoid failures from read-only properties
          defineProperty$1(targetComponent, key, descriptor);
        } catch (e) {}
      }
    }

    return targetComponent;
  }

  return targetComponent;
};

var invariant = function invariant() {};

// encapsulates the subscription logic for connecting a component to the redux store, as
// well as nesting subscriptions of descendant components, so that we can ensure the
// ancestor components re-render before descendants

var CLEARED = null;
var nullListeners = {
  notify: function notify() {}
};

function createListenerCollection() {
  // the current/next pattern is copied from redux's createStore code.
  // TODO: refactor+expose that code to be reusable here?
  var current = [];
  var next = [];

  return {
    clear: function clear() {
      next = CLEARED;
      current = CLEARED;
    },
    notify: function notify() {
      var listeners = current = next;
      for (var i = 0; i < listeners.length; i++) {
        listeners[i]();
      }
    },
    get: function get$$1() {
      return next;
    },
    subscribe: function subscribe(listener) {
      var isSubscribed = true;
      if (next === current) next = current.slice();
      next.push(listener);

      return function unsubscribe() {
        if (!isSubscribed || current === CLEARED) return;
        isSubscribed = false;

        if (next === current) next = current.slice();
        next.splice(next.indexOf(listener), 1);
      };
    }
  };
}

var Subscription = function () {
  function Subscription(store, parentSub, onStateChange) {
    classCallCheck(this, Subscription);

    this.store = store;
    this.parentSub = parentSub;
    this.onStateChange = onStateChange;
    this.unsubscribe = null;
    this.listeners = nullListeners;
  }

  Subscription.prototype.addNestedSub = function addNestedSub(listener) {
    this.trySubscribe();
    return this.listeners.subscribe(listener);
  };

  Subscription.prototype.notifyNestedSubs = function notifyNestedSubs() {
    this.listeners.notify();
  };

  Subscription.prototype.isSubscribed = function isSubscribed() {
    return Boolean(this.unsubscribe);
  };

  Subscription.prototype.trySubscribe = function trySubscribe() {
    if (!this.unsubscribe) {
      this.unsubscribe = this.parentSub ? this.parentSub.addNestedSub(this.onStateChange) : this.store.subscribe(this.onStateChange);

      this.listeners = createListenerCollection();
    }
  };

  Subscription.prototype.tryUnsubscribe = function tryUnsubscribe() {
    if (this.unsubscribe) {
      this.unsubscribe();
      this.unsubscribe = null;
      this.listeners.clear();
      this.listeners = nullListeners;
    }
  };

  return Subscription;
}();

var hotReloadingVersion = 0;
var dummyState = {};
function noop() {}
function makeSelectorStateful(sourceSelector, store) {
  // wrap the selector in an object that tracks its results between runs.
  var selector = {
    run: function runComponentSelector(props) {
      try {
        var nextProps = sourceSelector(store.getState(), props);
        if (nextProps !== selector.props || selector.error) {
          selector.shouldComponentUpdate = true;
          selector.props = nextProps;
          selector.error = null;
        }
      } catch (error) {
        selector.shouldComponentUpdate = true;
        selector.error = error;
      }
    }
  };

  return selector;
}

function connectAdvanced(
/*
  selectorFactory is a func that is responsible for returning the selector function used to
  compute new props from state, props, and dispatch. For example:
     export default connectAdvanced((dispatch, options) => (state, props) => ({
      thing: state.things[props.thingId],
      saveThing: fields => dispatch(actionCreators.saveThing(props.thingId, fields)),
    }))(YourComponent)
   Access to dispatch is provided to the factory so selectorFactories can bind actionCreators
  outside of their selector as an optimization. Options passed to connectAdvanced are passed to
  the selectorFactory, along with displayName and WrappedComponent, as the second argument.
   Note that selectorFactory is responsible for all caching/memoization of inbound and outbound
  props. Do not use connectAdvanced directly without memoizing results between calls to your
  selector, otherwise the Connect component will re-render on every state or props change.
*/
selectorFactory) {
  var _contextTypes, _childContextTypes;

  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var _ref$getDisplayName = _ref.getDisplayName,
      getDisplayName = _ref$getDisplayName === undefined ? function (name) {
    return 'ConnectAdvanced(' + name + ')';
  } : _ref$getDisplayName,
      _ref$methodName = _ref.methodName,
      methodName = _ref$methodName === undefined ? 'connectAdvanced' : _ref$methodName,
      _ref$renderCountProp = _ref.renderCountProp,
      renderCountProp = _ref$renderCountProp === undefined ? undefined : _ref$renderCountProp,
      _ref$shouldHandleStat = _ref.shouldHandleStateChanges,
      shouldHandleStateChanges = _ref$shouldHandleStat === undefined ? true : _ref$shouldHandleStat,
      _ref$storeKey = _ref.storeKey,
      storeKey = _ref$storeKey === undefined ? 'store' : _ref$storeKey,
      _ref$withRef = _ref.withRef,
      withRef = _ref$withRef === undefined ? false : _ref$withRef,
      connectOptions = objectWithoutProperties(_ref, ['getDisplayName', 'methodName', 'renderCountProp', 'shouldHandleStateChanges', 'storeKey', 'withRef']);

  var subscriptionKey = storeKey + 'Subscription';
  var version = hotReloadingVersion++;

  var contextTypes = (_contextTypes = {}, _contextTypes[storeKey] = storeShape, _contextTypes[subscriptionKey] = subscriptionShape, _contextTypes);
  var childContextTypes = (_childContextTypes = {}, _childContextTypes[subscriptionKey] = subscriptionShape, _childContextTypes);

  return function wrapWithConnect(WrappedComponent) {
    invariant(typeof WrappedComponent == 'function', 'You must pass a component to the function returned by ' + ('connect. Instead received ' + JSON.stringify(WrappedComponent)));

    var wrappedComponentName = WrappedComponent.displayName || WrappedComponent.name || 'Component';

    var displayName = getDisplayName(wrappedComponentName);

    var selectorFactoryOptions = preact_redux_esm__extends({}, connectOptions, {
      getDisplayName: getDisplayName,
      methodName: methodName,
      renderCountProp: renderCountProp,
      shouldHandleStateChanges: shouldHandleStateChanges,
      storeKey: storeKey,
      withRef: withRef,
      displayName: displayName,
      wrappedComponentName: wrappedComponentName,
      WrappedComponent: WrappedComponent
    });

    var Connect = function (_Component) {
      inherits(Connect, _Component);

      function Connect(props, context) {
        classCallCheck(this, Connect);

        var _this = possibleConstructorReturn(this, _Component.call(this, props, context));

        _this.version = version;
        _this.state = {};
        _this.renderCount = 0;
        _this.store = props[storeKey] || context[storeKey];
        _this.propsMode = Boolean(props[storeKey]);
        _this.setWrappedInstance = _this.setWrappedInstance.bind(_this);

        invariant(_this.store, 'Could not find "' + storeKey + '" in either the context or props of ' + ('"' + displayName + '". Either wrap the root component in a <Provider>, ') + ('or explicitly pass "' + storeKey + '" as a prop to "' + displayName + '".'));

        _this.initSelector();
        _this.initSubscription();
        return _this;
      }

      Connect.prototype.getChildContext = function getChildContext() {
        var _ref2;

        // If this component received store from props, its subscription should be transparent
        // to any descendants receiving store+subscription from context; it passes along
        // subscription passed to it. Otherwise, it shadows the parent subscription, which allows
        // Connect to control ordering of notifications to flow top-down.
        var subscription = this.propsMode ? null : this.subscription;
        return _ref2 = {}, _ref2[subscriptionKey] = subscription || this.context[subscriptionKey], _ref2;
      };

      Connect.prototype.componentDidMount = function componentDidMount() {
        if (!shouldHandleStateChanges) return;

        // componentWillMount fires during server side rendering, but componentDidMount and
        // componentWillUnmount do not. Because of this, trySubscribe happens during ...didMount.
        // Otherwise, unsubscription would never take place during SSR, causing a memory leak.
        // To handle the case where a child component may have triggered a state change by
        // dispatching an action in its componentWillMount, we have to re-run the select and maybe
        // re-render.
        this.subscription.trySubscribe();
        this.selector.run(this.props);
        if (this.selector.shouldComponentUpdate) this.forceUpdate();
      };

      Connect.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
        this.selector.run(nextProps);
      };

      Connect.prototype.shouldComponentUpdate = function shouldComponentUpdate() {
        return this.selector.shouldComponentUpdate;
      };

      Connect.prototype.componentWillUnmount = function componentWillUnmount() {
        if (this.subscription) this.subscription.tryUnsubscribe();
        this.subscription = null;
        this.notifyNestedSubs = noop;
        this.store = null;
        this.selector.run = noop;
        this.selector.shouldComponentUpdate = false;
      };

      Connect.prototype.getWrappedInstance = function getWrappedInstance() {
        invariant(withRef, 'To access the wrapped instance, you need to specify ' + ('{ withRef: true } in the options argument of the ' + methodName + '() call.'));
        return this.wrappedInstance;
      };

      Connect.prototype.setWrappedInstance = function setWrappedInstance(ref) {
        this.wrappedInstance = ref;
      };

      Connect.prototype.initSelector = function initSelector() {
        var sourceSelector = selectorFactory(this.store.dispatch, selectorFactoryOptions);
        this.selector = makeSelectorStateful(sourceSelector, this.store);
        this.selector.run(this.props);
      };

      Connect.prototype.initSubscription = function initSubscription() {
        if (!shouldHandleStateChanges) return;

        // parentSub's source should match where store came from: props vs. context. A component
        // connected to the store via props shouldn't use subscription from context, or vice versa.
        var parentSub = (this.propsMode ? this.props : this.context)[subscriptionKey];
        this.subscription = new Subscription(this.store, parentSub, this.onStateChange.bind(this));

        // `notifyNestedSubs` is duplicated to handle the case where the component is  unmounted in
        // the middle of the notification loop, where `this.subscription` will then be null. An
        // extra null check every change can be avoided by copying the method onto `this` and then
        // replacing it with a no-op on unmount. This can probably be avoided if Subscription's
        // listeners logic is changed to not call listeners that have been unsubscribed in the
        // middle of the notification loop.
        this.notifyNestedSubs = this.subscription.notifyNestedSubs.bind(this.subscription);
      };

      Connect.prototype.onStateChange = function onStateChange() {
        this.selector.run(this.props);

        if (!this.selector.shouldComponentUpdate) {
          this.notifyNestedSubs();
        } else {
          this.componentDidUpdate = this.notifyNestedSubsOnComponentDidUpdate;
          this.setState(dummyState);
        }
      };

      Connect.prototype.notifyNestedSubsOnComponentDidUpdate = function notifyNestedSubsOnComponentDidUpdate() {
        // `componentDidUpdate` is conditionally implemented when `onStateChange` determines it
        // needs to notify nested subs. Once called, it unimplements itself until further state
        // changes occur. Doing it this way vs having a permanent `componentDidUpdate` that does
        // a boolean check every time avoids an extra method call most of the time, resulting
        // in some perf boost.
        this.componentDidUpdate = undefined;
        this.notifyNestedSubs();
      };

      Connect.prototype.isSubscribed = function isSubscribed() {
        return Boolean(this.subscription) && this.subscription.isSubscribed();
      };

      Connect.prototype.addExtraProps = function addExtraProps(props) {
        if (!withRef && !renderCountProp && !(this.propsMode && this.subscription)) return props;
        // make a shallow copy so that fields added don't leak to the original selector.
        // this is especially important for 'ref' since that's a reference back to the component
        // instance. a singleton memoized selector would then be holding a reference to the
        // instance, preventing the instance from being garbage collected, and that would be bad
        var withExtras = preact_redux_esm__extends({}, props);
        if (withRef) withExtras.ref = this.setWrappedInstance;
        if (renderCountProp) withExtras[renderCountProp] = this.renderCount++;
        if (this.propsMode && this.subscription) withExtras[subscriptionKey] = this.subscription;
        return withExtras;
      };

      Connect.prototype.render = function render() {
        var selector = this.selector;
        selector.shouldComponentUpdate = false;

        if (selector.error) {
          throw selector.error;
        } else {
          return Object(preact_min["h"])(WrappedComponent, this.addExtraProps(selector.props));
        }
      };

      return Connect;
    }(preact_min["Component"]);

    Connect.WrappedComponent = WrappedComponent;
    Connect.displayName = displayName;
    Connect.childContextTypes = childContextTypes;
    Connect.contextTypes = contextTypes;

    {
      Connect.prototype.componentWillUpdate = function componentWillUpdate() {
        var _this2 = this;

        // We are hot reloading!
        if (this.version !== version) {
          this.version = version;
          this.initSelector();

          // If any connected descendants don't hot reload (and resubscribe in the process), their
          // listeners will be lost when we unsubscribe. Unfortunately, by copying over all
          // listeners, this does mean that the old versions of connected descendants will still be
          // notified of state changes; however, their onStateChange function is a no-op so this
          // isn't a huge deal.
          var oldListeners = [];

          if (this.subscription) {
            oldListeners = this.subscription.listeners.get();
            this.subscription.tryUnsubscribe();
          }
          this.initSubscription();
          if (shouldHandleStateChanges) {
            this.subscription.trySubscribe();
            oldListeners.forEach(function (listener) {
              return _this2.subscription.listeners.subscribe(listener);
            });
          }
        }
      };
    }

    return hoistNonReactStatics(Connect, WrappedComponent);
  };
}

var hasOwn = Object.prototype.hasOwnProperty;

function is(x, y) {
  if (x === y) {
    return x !== 0 || y !== 0 || 1 / x === 1 / y;
  } else {
    return x !== x && y !== y;
  }
}

function shallowEqual(objA, objB) {
  if (is(objA, objB)) return true;

  if ((typeof objA === 'undefined' ? 'undefined' : _typeof(objA)) !== 'object' || objA === null || (typeof objB === 'undefined' ? 'undefined' : _typeof(objB)) !== 'object' || objB === null) {
    return false;
  }

  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) return false;

  for (var i = 0; i < keysA.length; i++) {
    if (!hasOwn.call(objB, keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]])) {
      return false;
    }
  }

  return true;
}

/** Detect free variable `global` from Node.js. */
var preact_redux_esm_freeGlobal = (typeof global === 'undefined' ? 'undefined' : _typeof(global)) == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var preact_redux_esm_freeSelf = (typeof self === 'undefined' ? 'undefined' : _typeof(self)) == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var preact_redux_esm_root = preact_redux_esm_freeGlobal || preact_redux_esm_freeSelf || Function('return this')();

/** Built-in value references. */
var preact_redux_esm__Symbol = preact_redux_esm_root.Symbol;

/** Used for built-in method references. */
var objectProto$1 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$1 = objectProto$1.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var preact_redux_esm_nativeObjectToString = objectProto$1.toString;

/** Built-in value references. */
var symToStringTag$1 = preact_redux_esm__Symbol ? preact_redux_esm__Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function preact_redux_esm_getRawTag(value) {
  var isOwn = hasOwnProperty$1.call(value, symToStringTag$1),
      tag = value[symToStringTag$1];

  try {
    value[symToStringTag$1] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = preact_redux_esm_nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag$1] = tag;
    } else {
      delete value[symToStringTag$1];
    }
  }
  return result;
}

/** Used for built-in method references. */
var objectProto$2 = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString$1 = objectProto$2.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function preact_redux_esm_objectToString(value) {
  return nativeObjectToString$1.call(value);
}

/** `Object#toString` result references. */
var preact_redux_esm_nullTag = '[object Null]';
var preact_redux_esm_undefinedTag = '[object Undefined]';

/** Built-in value references. */
var preact_redux_esm_symToStringTag = preact_redux_esm__Symbol ? preact_redux_esm__Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function preact_redux_esm_baseGetTag(value) {
  if (value == null) {
    return value === undefined ? preact_redux_esm_undefinedTag : preact_redux_esm_nullTag;
  }
  return preact_redux_esm_symToStringTag && preact_redux_esm_symToStringTag in Object(value) ? preact_redux_esm_getRawTag(value) : preact_redux_esm_objectToString(value);
}

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function preact_redux_esm_overArg(func, transform) {
  return function (arg) {
    return func(transform(arg));
  };
}

/** Built-in value references. */
var preact_redux_esm_getPrototype = preact_redux_esm_overArg(Object.getPrototypeOf, Object);

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
function preact_redux_esm_isObjectLike(value) {
  return value != null && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) == 'object';
}

/** `Object#toString` result references. */
var preact_redux_esm_objectTag = '[object Object]';

/** Used for built-in method references. */
var preact_redux_esm_funcProto = Function.prototype;
var preact_redux_esm_objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var preact_redux_esm_funcToString = preact_redux_esm_funcProto.toString;

/** Used to check objects for own properties. */
var preact_redux_esm_hasOwnProperty = preact_redux_esm_objectProto.hasOwnProperty;

/** Used to infer the `Object` constructor. */
var preact_redux_esm_objectCtorString = preact_redux_esm_funcToString.call(Object);

/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */
function preact_redux_esm_isPlainObject(value) {
  if (!preact_redux_esm_isObjectLike(value) || preact_redux_esm_baseGetTag(value) != preact_redux_esm_objectTag) {
    return false;
  }
  var proto = preact_redux_esm_getPrototype(value);
  if (proto === null) {
    return true;
  }
  var Ctor = preact_redux_esm_hasOwnProperty.call(proto, 'constructor') && proto.constructor;
  return typeof Ctor == 'function' && Ctor instanceof Ctor && preact_redux_esm_funcToString.call(Ctor) == preact_redux_esm_objectCtorString;
}

function verifyPlainObject(value, displayName, methodName) {
  if (!preact_redux_esm_isPlainObject(value)) {
    preact_redux_esm_warning(methodName + '() in ' + displayName + ' must return a plain object. Instead received ' + value + '.');
  }
}

function wrapMapToPropsConstant(getConstant) {
  return function initConstantSelector(dispatch, options) {
    var constant = getConstant(dispatch, options);

    function constantSelector() {
      return constant;
    }
    constantSelector.dependsOnOwnProps = false;
    return constantSelector;
  };
}

// dependsOnOwnProps is used by createMapToPropsProxy to determine whether to pass props as args
// to the mapToProps function being wrapped. It is also used by makePurePropsSelector to determine
// whether mapToProps needs to be invoked when props have changed.
// 
// A length of one signals that mapToProps does not depend on props from the parent component.
// A length of zero is assumed to mean mapToProps is getting args via arguments or ...args and
// therefore not reporting its length accurately..
function getDependsOnOwnProps(mapToProps) {
  return mapToProps.dependsOnOwnProps !== null && mapToProps.dependsOnOwnProps !== undefined ? Boolean(mapToProps.dependsOnOwnProps) : mapToProps.length !== 1;
}

// Used by whenMapStateToPropsIsFunction and whenMapDispatchToPropsIsFunction,
// this function wraps mapToProps in a proxy function which does several things:
// 
//  * Detects whether the mapToProps function being called depends on props, which
//    is used by selectorFactory to decide if it should reinvoke on props changes.
//    
//  * On first call, handles mapToProps if returns another function, and treats that
//    new function as the true mapToProps for subsequent calls.
//    
//  * On first call, verifies the first result is a plain object, in order to warn
//    the developer that their mapToProps function is not returning a valid result.
//    
function wrapMapToPropsFunc(mapToProps, methodName) {
  return function initProxySelector(dispatch, _ref) {
    var displayName = _ref.displayName;

    var proxy = function mapToPropsProxy(stateOrDispatch, ownProps) {
      return proxy.dependsOnOwnProps ? proxy.mapToProps(stateOrDispatch, ownProps) : proxy.mapToProps(stateOrDispatch);
    };

    // allow detectFactoryAndVerify to get ownProps
    proxy.dependsOnOwnProps = true;

    proxy.mapToProps = function detectFactoryAndVerify(stateOrDispatch, ownProps) {
      proxy.mapToProps = mapToProps;
      proxy.dependsOnOwnProps = getDependsOnOwnProps(mapToProps);
      var props = proxy(stateOrDispatch, ownProps);

      if (typeof props === 'function') {
        proxy.mapToProps = props;
        proxy.dependsOnOwnProps = getDependsOnOwnProps(props);
        props = proxy(stateOrDispatch, ownProps);
      }

      verifyPlainObject(props, displayName, methodName);

      return props;
    };

    return proxy;
  };
}

function whenMapDispatchToPropsIsFunction(mapDispatchToProps) {
  return typeof mapDispatchToProps === 'function' ? wrapMapToPropsFunc(mapDispatchToProps, 'mapDispatchToProps') : undefined;
}

function whenMapDispatchToPropsIsMissing(mapDispatchToProps) {
  return !mapDispatchToProps ? wrapMapToPropsConstant(function (dispatch) {
    return { dispatch: dispatch };
  }) : undefined;
}

function whenMapDispatchToPropsIsObject(mapDispatchToProps) {
  return mapDispatchToProps && (typeof mapDispatchToProps === 'undefined' ? 'undefined' : _typeof(mapDispatchToProps)) === 'object' ? wrapMapToPropsConstant(function (dispatch) {
    return bindActionCreators(mapDispatchToProps, dispatch);
  }) : undefined;
}

var defaultMapDispatchToPropsFactories = [whenMapDispatchToPropsIsFunction, whenMapDispatchToPropsIsMissing, whenMapDispatchToPropsIsObject];

function whenMapStateToPropsIsFunction(mapStateToProps) {
  return typeof mapStateToProps === 'function' ? wrapMapToPropsFunc(mapStateToProps, 'mapStateToProps') : undefined;
}

function whenMapStateToPropsIsMissing(mapStateToProps) {
  return !mapStateToProps ? wrapMapToPropsConstant(function () {
    return {};
  }) : undefined;
}

var defaultMapStateToPropsFactories = [whenMapStateToPropsIsFunction, whenMapStateToPropsIsMissing];

function defaultMergeProps(stateProps, dispatchProps, ownProps) {
  return preact_redux_esm__extends({}, ownProps, stateProps, dispatchProps);
}

function wrapMergePropsFunc(mergeProps) {
  return function initMergePropsProxy(dispatch, _ref) {
    var displayName = _ref.displayName,
        pure = _ref.pure,
        areMergedPropsEqual = _ref.areMergedPropsEqual;

    var hasRunOnce = false;
    var mergedProps = void 0;

    return function mergePropsProxy(stateProps, dispatchProps, ownProps) {
      var nextMergedProps = mergeProps(stateProps, dispatchProps, ownProps);

      if (hasRunOnce) {
        if (!pure || !areMergedPropsEqual(nextMergedProps, mergedProps)) mergedProps = nextMergedProps;
      } else {
        hasRunOnce = true;
        mergedProps = nextMergedProps;

        verifyPlainObject(mergedProps, displayName, 'mergeProps');
      }

      return mergedProps;
    };
  };
}

function whenMergePropsIsFunction(mergeProps) {
  return typeof mergeProps === 'function' ? wrapMergePropsFunc(mergeProps) : undefined;
}

function whenMergePropsIsOmitted(mergeProps) {
  return !mergeProps ? function () {
    return defaultMergeProps;
  } : undefined;
}

var defaultMergePropsFactories = [whenMergePropsIsFunction, whenMergePropsIsOmitted];

function verify(selector, methodName, displayName) {
  if (!selector) {
    throw new Error('Unexpected value for ' + methodName + ' in ' + displayName + '.');
  } else if (methodName === 'mapStateToProps' || methodName === 'mapDispatchToProps') {
    if (!selector.hasOwnProperty('dependsOnOwnProps')) {
      preact_redux_esm_warning('The selector for ' + methodName + ' of ' + displayName + ' did not specify a value for dependsOnOwnProps.');
    }
  }
}

function verifySubselectors(mapStateToProps, mapDispatchToProps, mergeProps, displayName) {
  verify(mapStateToProps, 'mapStateToProps', displayName);
  verify(mapDispatchToProps, 'mapDispatchToProps', displayName);
  verify(mergeProps, 'mergeProps', displayName);
}

function impureFinalPropsSelectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch) {
  return function impureFinalPropsSelector(state, ownProps) {
    return mergeProps(mapStateToProps(state, ownProps), mapDispatchToProps(dispatch, ownProps), ownProps);
  };
}

function pureFinalPropsSelectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch, _ref) {
  var areStatesEqual = _ref.areStatesEqual,
      areOwnPropsEqual = _ref.areOwnPropsEqual,
      areStatePropsEqual = _ref.areStatePropsEqual;

  var hasRunAtLeastOnce = false;
  var state = void 0;
  var ownProps = void 0;
  var stateProps = void 0;
  var dispatchProps = void 0;
  var mergedProps = void 0;

  function handleFirstCall(firstState, firstOwnProps) {
    state = firstState;
    ownProps = firstOwnProps;
    stateProps = mapStateToProps(state, ownProps);
    dispatchProps = mapDispatchToProps(dispatch, ownProps);
    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    hasRunAtLeastOnce = true;
    return mergedProps;
  }

  function handleNewPropsAndNewState() {
    stateProps = mapStateToProps(state, ownProps);

    if (mapDispatchToProps.dependsOnOwnProps) dispatchProps = mapDispatchToProps(dispatch, ownProps);

    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    return mergedProps;
  }

  function handleNewProps() {
    if (mapStateToProps.dependsOnOwnProps) stateProps = mapStateToProps(state, ownProps);

    if (mapDispatchToProps.dependsOnOwnProps) dispatchProps = mapDispatchToProps(dispatch, ownProps);

    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    return mergedProps;
  }

  function handleNewState() {
    var nextStateProps = mapStateToProps(state, ownProps);
    var statePropsChanged = !areStatePropsEqual(nextStateProps, stateProps);
    stateProps = nextStateProps;

    if (statePropsChanged) mergedProps = mergeProps(stateProps, dispatchProps, ownProps);

    return mergedProps;
  }

  function handleSubsequentCalls(nextState, nextOwnProps) {
    var propsChanged = !areOwnPropsEqual(nextOwnProps, ownProps);
    var stateChanged = !areStatesEqual(nextState, state);
    state = nextState;
    ownProps = nextOwnProps;

    if (propsChanged && stateChanged) return handleNewPropsAndNewState();
    if (propsChanged) return handleNewProps();
    if (stateChanged) return handleNewState();
    return mergedProps;
  }

  return function pureFinalPropsSelector(nextState, nextOwnProps) {
    return hasRunAtLeastOnce ? handleSubsequentCalls(nextState, nextOwnProps) : handleFirstCall(nextState, nextOwnProps);
  };
}

// TODO: Add more comments

// If pure is true, the selector returned by selectorFactory will memoize its results,
// allowing connectAdvanced's shouldComponentUpdate to return false if final
// props have not changed. If false, the selector will always return a new
// object and shouldComponentUpdate will always return true.

function finalPropsSelectorFactory(dispatch, _ref2) {
  var initMapStateToProps = _ref2.initMapStateToProps,
      initMapDispatchToProps = _ref2.initMapDispatchToProps,
      initMergeProps = _ref2.initMergeProps,
      options = objectWithoutProperties(_ref2, ['initMapStateToProps', 'initMapDispatchToProps', 'initMergeProps']);

  var mapStateToProps = initMapStateToProps(dispatch, options);
  var mapDispatchToProps = initMapDispatchToProps(dispatch, options);
  var mergeProps = initMergeProps(dispatch, options);

  {
    verifySubselectors(mapStateToProps, mapDispatchToProps, mergeProps, options.displayName);
  }

  var selectorFactory = options.pure ? pureFinalPropsSelectorFactory : impureFinalPropsSelectorFactory;

  return selectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch, options);
}

/*
  connect is a facade over connectAdvanced. It turns its args into a compatible
  selectorFactory, which has the signature:

    (dispatch, options) => (nextState, nextOwnProps) => nextFinalProps
  
  connect passes its args to connectAdvanced as options, which will in turn pass them to
  selectorFactory each time a Connect component instance is instantiated or hot reloaded.

  selectorFactory returns a final props selector from its mapStateToProps,
  mapStateToPropsFactories, mapDispatchToProps, mapDispatchToPropsFactories, mergeProps,
  mergePropsFactories, and pure args.

  The resulting final props selector is called by the Connect component instance whenever
  it receives new props or store state.
 */

function preact_redux_esm_match(arg, factories, name) {
  for (var i = factories.length - 1; i >= 0; i--) {
    var result = factories[i](arg);
    if (result) return result;
  }

  return function (dispatch, options) {
    throw new Error('Invalid value of type ' + (typeof arg === 'undefined' ? 'undefined' : _typeof(arg)) + ' for ' + name + ' argument when connecting component ' + options.wrappedComponentName + '.');
  };
}

function strictEqual(a, b) {
  return a === b;
}

// createConnect with default args builds the 'official' connect behavior. Calling it with
// different options opens up some testing and extensibility scenarios
function createConnect() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$connectHOC = _ref.connectHOC,
      connectHOC = _ref$connectHOC === undefined ? connectAdvanced : _ref$connectHOC,
      _ref$mapStateToPropsF = _ref.mapStateToPropsFactories,
      mapStateToPropsFactories = _ref$mapStateToPropsF === undefined ? defaultMapStateToPropsFactories : _ref$mapStateToPropsF,
      _ref$mapDispatchToPro = _ref.mapDispatchToPropsFactories,
      mapDispatchToPropsFactories = _ref$mapDispatchToPro === undefined ? defaultMapDispatchToPropsFactories : _ref$mapDispatchToPro,
      _ref$mergePropsFactor = _ref.mergePropsFactories,
      mergePropsFactories = _ref$mergePropsFactor === undefined ? defaultMergePropsFactories : _ref$mergePropsFactor,
      _ref$selectorFactory = _ref.selectorFactory,
      selectorFactory = _ref$selectorFactory === undefined ? finalPropsSelectorFactory : _ref$selectorFactory;

  return function connect(mapStateToProps, mapDispatchToProps, mergeProps) {
    var _ref2 = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

    var _ref2$pure = _ref2.pure,
        pure = _ref2$pure === undefined ? true : _ref2$pure,
        _ref2$areStatesEqual = _ref2.areStatesEqual,
        areStatesEqual = _ref2$areStatesEqual === undefined ? strictEqual : _ref2$areStatesEqual,
        _ref2$areOwnPropsEqua = _ref2.areOwnPropsEqual,
        areOwnPropsEqual = _ref2$areOwnPropsEqua === undefined ? shallowEqual : _ref2$areOwnPropsEqua,
        _ref2$areStatePropsEq = _ref2.areStatePropsEqual,
        areStatePropsEqual = _ref2$areStatePropsEq === undefined ? shallowEqual : _ref2$areStatePropsEq,
        _ref2$areMergedPropsE = _ref2.areMergedPropsEqual,
        areMergedPropsEqual = _ref2$areMergedPropsE === undefined ? shallowEqual : _ref2$areMergedPropsE,
        extraOptions = objectWithoutProperties(_ref2, ['pure', 'areStatesEqual', 'areOwnPropsEqual', 'areStatePropsEqual', 'areMergedPropsEqual']);

    var initMapStateToProps = preact_redux_esm_match(mapStateToProps, mapStateToPropsFactories, 'mapStateToProps');
    var initMapDispatchToProps = preact_redux_esm_match(mapDispatchToProps, mapDispatchToPropsFactories, 'mapDispatchToProps');
    var initMergeProps = preact_redux_esm_match(mergeProps, mergePropsFactories, 'mergeProps');

    return connectHOC(selectorFactory, preact_redux_esm__extends({
      // used in error messages
      methodName: 'connect',

      // used to compute Connect's displayName from the wrapped component's displayName.
      getDisplayName: function getDisplayName(name) {
        return 'Connect(' + name + ')';
      },

      // if mapStateToProps is falsy, the Connect component doesn't subscribe to store state changes
      shouldHandleStateChanges: Boolean(mapStateToProps),

      // passed through to selectorFactory
      initMapStateToProps: initMapStateToProps,
      initMapDispatchToProps: initMapDispatchToProps,
      initMergeProps: initMergeProps,
      pure: pure,
      areStatesEqual: areStatesEqual,
      areOwnPropsEqual: areOwnPropsEqual,
      areStatePropsEqual: areStatePropsEqual,
      areMergedPropsEqual: areMergedPropsEqual

    }, extraOptions));
  };
}

var connect = createConnect();

var index = { Provider: preact_redux_esm_Provider, connect: connect, connectAdvanced: connectAdvanced };

/* harmony default export */ var preact_redux_esm = (index);
//# sourceMappingURL=preact-redux.esm.js.map
// EXTERNAL MODULE: ../node_modules/preact-compat/dist/preact-compat.es.js
var preact_compat_es = __webpack_require__("eW0v");

// CONCATENATED MODULE: ./components/videoPlayer/FuBK_testcard_vectorized.svg
function FuBK_testcard_vectorized__extends() { FuBK_testcard_vectorized__extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return FuBK_testcard_vectorized__extends.apply(this, arguments); }



var FuBK_testcard_vectorized__ref = preact_compat_es["default"].createElement("image", {
  width: 768,
  height: 576,
  preserveAspectRatio: "none",
  xlinkHref: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAwAAAAJACAIAAAC1zJYBAAAgAElEQVR4Ae3ca6gk21k/4NlhRCPo Pyr4waBINImXRNSoiCKnJyARCSiIiIiak4h3hUQQRPHkiCIhgQRFTGLMgQTxQxDxi5cvmZmgIF4S UbzgjWASQcFoFBRRT/9rT828U7t39+66raq1Vj0Kx97dVWu963nr8uva27nY7Xa3pv3P3bt32wHu 3LkzbaRhe5t3mNfYrTmPlRu2H+dhXmO35jxWbth+nId5jd2a81i5y/2eM2Vn+xIgQIAAAQIEShQQ gErsmpoJECBAgACBSQIC0CQ+OxMgQIAAAQIlCghAJXZNzQQIECBAgMAkAQFoEp+dCRAgQIAAgRIF BKASu6ZmAgQIECBAYJLAxX6/nzSAnQkQIECAAAECpQl4AlRax9RLgAABAgQITBa48A8hDjX0D08N FRu3PedxbkP34jxUbNz2nMe5Dd2L81CxcdvX4ewJ0Lju24sAAQIECBAoWEAAKrh5SidAgAABAgTG CQhA49zsRYAAAQIECBQsIAAV3DylEyBAgAABAuMEBKBxbvYiQIAAAQIEChYQgApuntIJECBAgACB cQIC0Dg3exEgQIAAAQIFCwhABTdP6QQIECBAgMA4AQFonJu9CBAgQIAAgYIFbhdcu9IJEMhVIP6h 2LMF9tnyzp07Z8exAQECBAYJCECDuGxMYNMCfcJKCqD+84pKKfyNSaBKAQGoyrZaFIFJAv0Dx6lp zgaRmOLsls0UsfGp6eL9U1v2mSUG8YIAgS0ICEBb6LI1EjgvcCo6dPdcK0b0n/fUKq6/37zTf9gu gtcECNQhIADV0UerINBL4HoOOLpbucngVOVHF379zVO7H1XyJgECRQsIQEW3T/EEzghcv8ef2qHu e3+sLkCad+J1mBy8E3vFBl4QIFCNgABUTSsthMClwMEt/ADl+h395u0Pdq/sx7MaBzjXt68MxHII bEpAANpUuy22ToGD+3R3ke7ZXY2zrw+4DmC7Px5seXZkGxAgkJuAAJRbR9RDoJdA92bc3cGNuasx 8fUBZte8+/pgs4mT2p0AgWUEBKBlnM1CYAaB7k23O5wbcFcj3euuc7cX3dfdbdJVYmQCBKYLCEDT DY1AIKFA9+bancaNtqux/Ouuf7dH3dfdbZav0IwECNwsIADd7ONTAusIdO+jUYEbalBk9aLbl27j 4nV3g6wqVwyBLQsIQFvuvrXnKBB3zbY4984cm3S6pm6/opXx4vR+PiFAYGkBAWhpcfMROBA4enfs 3kcPtvdjKQLRxG6L43V8Wspy1EmgMgEBqLKGWk4xAnEjPKjYffEApIIfm55eb3e8o+MVtNgSShQQ gErsmpoLFojbXqyhvf9dfz828KImgYg70fH2Rbxf02KthUDOAgJQzt1RWz0CcbeLJbnhBcU2X8QB 0B4bcYTE+9tksWoCiwkIQItRm2iLAnFX6y7eHa6r4XV7PMShEi8cJ44NAkkFBKCkvAbfrkDcxoLA /SwovLguEIdHHDnti3j/+i7eIUBgioAANEXPvgQOBeLuFR+4gQWFF30E4oBpj6U4ouL9PoPYhgCB swIC0FkiGxDoJRA3qtjaHSsovBgh0B4/cVy1LxxUIyTtQuCogAB0lMWbBPoKxP0pdnCLCgovpgvE 4dQeaXG8xfvTpzACgW0KCEDb7LtVzyAQt6IYyz0pKLyYXaA9uuKoa1845GZ3NuB2BASg7fTaSmcT iJtQO6Kb0GyyBjonEAdbexCKQefAfE7gpIAAdJLGBwQOBA5yT/Np3I0OtvQjgdQC7bHXjUHNjA7I 1OzGr0lAAKqpm9aSSkD0SSVr3GkC3RjUjOSB0DROe29LQADaVr+tdqjAQfTxDXsooO0XEIjDsvtA KN5coABTEChRQAAqsWtqXkJA9FlC2RyzCnQfCB0cwLPOYzACNQhc7Pf7GtZhDQQIECBAgACB3gLP 6b2lDQkQIECAAAEClQhc7Ha7iUuJB60L/8rZvBMb13P3jTjHMoPF8RwUKV4EOOcUvDFmOMc7y4DH vMtMF6szb1AkfVGHsydASQ8Sgxcg0JzJcTIXUK4SCYwSiCDigB/lZ6cKBfwRdIVNtaSeAge5p71D HLzZcyibEchfoHuEt8d5pKL8i1chgdkFBKDZSQ1YgMBBynEbKKBnSpxJQAyaCdIwxQv4FVjxLbSA oQLd9NPcDNr7wdBBbE+gaIHukd89I4pelOIJDBLwBGgQl43LFuhe6OWesnup+jkE2rOgOS/aU8NJ MQeqMYoR8ASomFYpdIpAXOLbQVzop2DatzKBOB0OTpPKlmk5BA4EPAE6APFjbQLtV9tYVVzr4x0v CBBoz4v2ZGn/60xxVFQv4AlQ9S3e9AK76ae5oLumb/posPhzAt1zpHvunNvP5wSKFPAEqMi2Kfqs QPfyLfec5bIBgRBoz5fmDGpPIqdPyHhRmYAnQJU11HJuxYW7tXD5dkwQGCEQJ87BCTViKLsQyFNA AMqzL6oaKdB+Z213bq7gcREfOZzdCGxYoHsGdc+sDZNYelUCAlBV7dzyYg6+p4o+Wz4YrH1GgTiV Dk6xGacwFIFVBASgVdhNOrNA9+tp92vrzNMYjsAmBbrnVPdc2ySGRdcj4I+g6+nlNlfSvRzHV9Vt Ulg1gaQC7fkVz4Gcbkm1Db6AgCdACyCbIpWA9JNK1rgETghE7okkdGJDbxPIXcAToNw7pL6jAqLP URZvElhAIB4FNXM1Z2JEogWmNgWBGQU8AZoR01ALCUg/C0GbhsBpgcg93fPx9OY+IZCdgCdA2bVE QTcIdC+1cf29YXsfESCQTiAeBbUnplMyHbWRUwh4ApRC1ZhJBKSfJKwGJTBNIHJP9wydNqS9CSwh 4AnQEsrmmCjQvbDG1XbimHYnQGAuAY+C5pI0zpICngAtqW2uMQLSzxg1+xBYXCC+nHTP2cWrMCGB vgICUF8p260uEJfX1StRAAECRwWcpEdZvJmngF+B5dkXVV0RcFW9wuEHAhkLtGerh0AZt0hpDwU8 AXIo5CjQvXpKPzl2SE0E+gl0z+V+e9iKwEICngAtBG2angIulz2hbEagFIH2pPZNppR+badOT4C2 0+sCVir9FNAkJRIYIhC5x9k9hM22SwgIQEsom6OPQPf6GBfNPjvahgCBnAXidO6e4zkXrLaNCAhA G2l07svsXhnjcpl70eojQKCfQJzU3TO93662IpBKwN8ApZI1bk+B7gUxrpI997UZAQKlCLRnd3O+ t6e8k72UxlVcpydAFTe3gKW1l8K2UBfEAhqmRALTBOI0757704a0N4GRAgLQSDi7TRfoXgHjsjh9 WCMQIJCzQJzs3StAzgWrrVYBAajWzua+rrj2NVfDuCDmXrT6CBCYQyBO+bgOzDGqMQgME/A3QMO8 bD1doHvJi+vg9GGNQIBAQQLtud9cDdoLgktBQb2rplRPgKppZRkLaS92ba0ueWX0TJUEkgnERaB7 ZUg2m4EJXBEQgK5w+CGpQPcaFxe+pDManACBzAXiUtC9PmRes/LqEBCA6uhjAavoXt3ikldA3Uok QCCxQFwQuleJxHMansAtAchBsIRA97oWF7slJjYHAQIlCMRloXutKKFwNRYscLHf7wsuX+kECBAg QIAAgeECngANN7MHAQIECBAgULjAxW63m7iEeGIZzzAnDthz983Oe//+/Z5E6272xBNPRAH371/E 6yJe7G7dK6LOq0Xurv5YwE/3dvcKqPKwxN3hG9n/XNzxvN8/vHpcXJRx6YjfpbgPJj0b5r3vewKU tFnbHbzo9LPdtlk5gTwELi4efs2LYJFHXaqoSkAAqqqdmSzmavop43lVJnTKIECgFYhnPzKQQyKR gACUCHa7w0o/2+29lROYVUAGmpXTYIcCAtChiJ+nCEg/U/TsS4DAgYAMdADixxkFBKAZMbc+lPSz 9SPA+gkkEJCBEqAa8lJAAHIczCMg/czjaBQCBK4JyEDXSLwxg4AANAOiIaQfxwABAkkFZKCkvNsc XADaZt/nXLX0M6emsQgQOCEgA52A8fZIAQFoJJzdWgHpx5FAgMBiAjLQYtRbmEgA2kKXU61R+kkl a1wCBE4IyEAnYLw9WEAAGkxmh1ZA+nEkECCwioAMtAp7fZMKQPX1dIkVST9LKJuDAIETAjLQCRhv DxAQgAZg2bQVkH4cCQQIrC4gA63egtILEIBK7+DS9Us/S4ubjwCBEwIy0AkYb/cSEIB6MdmoFZB+ HAkECGQlIANl1Y6yihGAyurXmtVKP2vqm5sAgRMCMtAJGG+fERCAzgD5uBWQfhwJBAhkKyADZdua nAsTgHLuTi61ST+5dEIdBAicEJCBTsB4+6SAAHSSxgfXBe7fv3/9Te8QIECAAIHiBASg4lq2dMHx +Ef6WZrefAQIDBHwEGiIlm1vCUAOgpsEpJ+bdHxGgEBmAjJQZg3JuhwBKOv2rFuc9LOuv9kJEBgh IAONQNvmLgLQNvt+ftXSz3kjWxAgkKWADJRlW7IrSgDKriU5FCT95NAFNRAgMFpABhpNt50dBaDt 9LrvSiP99N3BdgQIEMhPQAbKryd5VSQA5dWP1avpph//b1+rt0MBBAhMEZCBpuhVv68AVH2LRy5Q +hkJZzcCBAgQKEFAACqhS0vVGI9/pJ+lyM1DgEBaAQ+B0vqWPLoAVHL3Zq1d+pmV02AECOQiIAPl 0onM6hCAMmvISuVIPyvBm5YAgSUEZKAllEubQwAqrWMJ6o30k2BsQxIgQCALARkoizbkVIQAlFM3 1q7Fn/6s3QHzEyBAgMBCAgLQQtDZThOPf6SfbHukMAIEZhHwEGgWxmoGEYCqaeWYhUg/Y9TsQ4BA sQIyULGtm79wAWh+01JGlH5K6ZQ6CRCYUUAGmhGz6KEEoKLbN774SD/jh7AnAQIEyhSQgcrs28xV C0AzgxY3nD/9Ka5lCiZAgACB6QIX+/1++ihGWFJgemSJxz/Th+q38F2/zTLaanfrXkbV9C1l13fD bLa7t7uXTS39C9n13zSTLR3PRxsRt794IHR0sz5vxlB9NrZNJgKeAGXSiOXKWDz9LLc0MxEgQKC/ QOQe8aU/Wk1b3r5z587E9dy9e7cdYfpQgyrZ7LyDlGxMgAABAqcEmgzUpp/mv5GHTm3c5333wT5K o7eZ977vCdDoRhS5o8c/RbZN0QQIECAwt4AANLdoxuNJPxk3R2kECKwjEA9+/CJsnQasN6sAtJ79 sjNLP8t6m40AgWIEZKBiWjVroQLQrJwGI0CAAAECBEoQEIBK6NLkGj3+mUxoAAIEahbwEKjm7p5Y mwB0Aqait6WfipppKQQIpBKQgVLJ5jquAJRrZ9RFgAABAgQIJBMQgJLR5jGwxz959EEVBAgUIOAh UAFNmq9EAWg+y/xGkn7y64mKCBDIWkAGyro9sxYnAM3KaTACBAgQKFxABiq8gX3LF4D6ShW3ncc/ xbVMwQQIECCwmIAAtBj1ohNJP4tym4wAgboEPASqq5/HVyMAHXfxLgECBAgQIFCxgABUYXM9/qmw qZZEgMCyAh4CLeu9wmwC0AroSaeUfpLyGpwAge0IyEB191oAqru/VkeAAAECBAgcERCAjqCU+5bH P+X2TuUECGQo4CFQhk2ZqyQBaC7J9ceRftbvgQoIEKhOQAaqrqUPFyQA1dpZ6yJAgAABAgROCghA J2nK+sDjn7L6pVoCBAoS8BCooGb1L1UA6m9lSwIECBAgQKASAQGohkZ6/FNDF62BAIGMBTwEyrg5 I0sTgEbC5bOb9JNPL1RCgEDFAjJQZc0VgCprqOUQIECAAAEC5wUEoPNGOW/h8U/O3VEbAQKVCXgI VFNDBaCaumktBAgQIECAQC8BAagXU54befyTZ19URYBAxQIeAlXTXAGomlZaCAECBAgQINBXQADq K5Xbdh7/5NYR9RAgsBEBD4HqaLQAVGQfpZ8i26ZoAgRqEZCBKuikAFRBEy2BAAECBAgQGCYgAA3z ymFrj39y6IIaCBDYuICHQKUfAAJQ6R1UPwECBAgQIDBYQAAaTJbJDvfv38+kEmUQIEBgmwLxEGib yy991QJQ6R1UPwECBAgQIDBYQAAaTJbDDh7/5NAFNRAgQMBDoHKPAQGo3N6pnAABAgQIEBgpcLHf 70fuareVBAp8/LNbiWr8tLtb98bvvNqeu9VmHjvxvd29sbuuuN9uxbnHTe14HufWfy930v5W+Wzp CVA+vVAJAQIECBAgsJDA7Tt37kyc6u7du+0I04caVMmm5o3FDiKyMQECBAgsLLDkrTBuDUtO2njW Ma8nQAufGqYjQIAAAQIE1hcQgNbvwdkKImuf3dIGBAgQILCugCv2uv79ZxeA+lvZkgABAgQIEKhE QADKvZG+TOTeIfURIEDgqoDr9lWPTH8SgDJtjLIIECBAgACBdAICUDrbGUaOrxEL/4X/DKUbggAB AtsTiGt1XL23Z1DMigWgYlqlUAIECBAgQGAuAQFoLsn5x4kvEPGVYv45jEiAAAECswrEFTuu4bMO b7DZBASg2SgNRIAAAQIECJQiIACV0il1EiBAgAABArMJCECzUc47UDw7jaep845vNAIECBBIJBDX 7biSJ5rIsFMEBKApevYlQIAAAQIEihQQgHJsW3xpiK8ROVapJgIECBA4IRBX77ien9jQ26sJCECr 0ZuYAAECBAgQWEtAAFpL/uS88XUhvkCc3NQHBAgQIJCrQFzD46qea6UbrUsA2mjjLZsAAQIECGxZ QADacvetnQABAgQIbFRAAMqr8fGkNJ6d5lWfaggQIECgt0BcyePa3ntXGyYXEICSE5uAAAECBAgQ yE1AAMqoI/EVIb40ZFScUggQIEBguEBcz+MKP3wMeyQREICSsBqUAAECBAgQyFlAAMq5O2ojQIAA AQIEkggIQElYRwwaT0fjeemIQexCgAABArkJxFU9rvO5VbjNegSgbfbdqgkQIECAwKYFBKBNt9/i CRAgQGABAQ+BFkAeOoUANFQsyfbxXDROkiTTGJQAAQIECBB4ICAAORAIECBAgACBzQkIQOu33OOf 9XugAgIECCQWiAf8cc1PPKHhzwgIQGeAfEyAAAECBAjUJyAA1ddTKyJAgAABAgTOCAhAZ4BSfxzP QuPpaOoZjU+AAAECqwjEdT6u/KuUYdJWQAByJBAgQIAAAQKbExCANtdyCyZAgAABAgQEoDWPgXgK Gs9F16zG3AQIECCQWCCu9nH9Tzyh4U8KCEAnaXxAgAABAgQI1CogANXaWesiQIAAAQIETgoIQCdp Un8Qzz/jiWjqGY1PgAABAqsLxDU/7gKrl7TNAi72+/02V17uqu/fv19a8bvSCr61u3WvuJpvNVWX 9j/3dvdKK7mpd1dczY7n1C1zJ00tnGJ8ASiFatoxLy4u0k5Q8ui73a7k8pPXno/PU0891a726aef Tr7s3hPk49O75EU3fOKJJxadz2QEUgrcjmdxo2eJh3jThxpUQ9Hzjig+dhmkZGMCBAgQWEyg/30w Lun9d7m+ilkGuT7s2XfqmPc5Z9dpAwIECBAgQIBAZQICUGUNtRwCBAgQIEDgvIAAdN7IFgQIECBA YF6B+M1X/Dpp3vGNdlZAADpLNP8GcbjHCTD/HEYkQIAAAQIETgsIQKdtfEKAAAECBAhUKiAAVdpY yyJAgAABAgROCwhAp23SfOL3X2lcjUqAAIHCBOKvIOK+UNgCCi9XACq8gconQIAAAQIEhgsIQMPN 7EGAAAECBAgULiAAFd5A5RMgQIAAAQLDBQSg4WYT9ohf9MavficMZlcCBAgQKFsg7gVxdyh7PUVV LwAV1S7FEiBAgAABAnMICEBzKBqDAAECBAgQKEpAACqqXYolQIAAAQIE5hAQgOZQ7DdG/Io3funb bz9bESBAgEC1AnFHiHtEtUvNbGECUGYNUQ4BAgQIECCQXkAASm9sBgIECBAgQCAzAQEos4YohwAB AgQIEEgvIAClN34wQ/xyN37du9DEpiFAgACBvAXivhB3irzrraQ6AaiSRloGAQIECBAg0F9AAOpv ZUsCBAgQIECgEgEBqJJGWgYBAgQIECDQX0AA6m81fsv4tW78onf8WPYkQIAAgeoE4u4Q94vqlpjd ggSg7FqiIAIECBAgQCC1gACUWtj4BAgQIECAQHYCAlB2LVEQAQIECBAgkFpAAEotbHwCBAgQIEAg OwEBKHlL4i/a4m/ckk9pAgIECBAoTSDuEXHXKG0FhdUrABXWMOUSIECAAAEC0wUEoOmGRiBAgAAB AgQKExCACmuYcgkQIECAAIHpAgLQdEMjECBAgAABAoUJCECFNUy5BAgQIECAwHQBAWi64U0jxB/z x5/337S1zwgQIEBgwwJxp4h7x4Yxki9dAEpObAICBAgQIEAgNwEBKLeOqIcAAQIECBBILiAAJSc2 AQECBAgQIJCbwMV+v8+tJvXcLHBxcXHzBlv+dLfbbXn5Z9eej89TTz3VVvv000+fLXuxDfLxWWzJ gyZ64oknBm1vYwI5C3gClHN31EaAAAECBAgkEbgdf3M+evj4Y/XpQw2qIf95560wRhukZGMCBAgQ WExglvtgXO3PjtZ/y3kF6pjXE6B5jwqjESBAgAABAgUICEAFNEmJBAgQIECAwLwCAtC8nkYjQIAA AQIEChAQgApokhIJECBAgACBeQUEoHk9jUaAAAECBAgUICAAFdAkJRIgQIAAAQLzCghA83oajQAB AgQIEChAQABK1aS1/pmEVOsxLgECBAgsIhD//E/cRxaZdnOTCECba7kFEyBAgAABAgKQY4AAAQIE CBDYnIAAtLmWWzABAgQIECAgADkGCBAgQIAAgc0JCECba7kFEyBAgAABAgKQY4AAAQIECBDYnIAA tLmWWzABAgQIECAgADkGCBAgQIAAgc0JCECba7kFEyBAgAABAgJQkmMg/vnO+Ac9k0xjUAIECBCo USDuHXE3qXGVK69JAFq5AaYnQIAAAQIElhcQgJY3NyMBAgQIECCwsoAAtHIDTE+AAAECBAgsLyAA LW9uRgIECBAgQGBlAQFo5QaYngABAgQIEFheQABa3tyMBAgQIECAwMoCAtDKDTA9AQIECBAgsLyA ALS8uRkJECBAgACBlQUEoJUbYHoCBAgQIEBgeQEBaHlzMxIgQIAAAQIrCwhAKzfA9AQIECBAgMDy AgLQ8uZmJECAAAECBFYWEIBWboDpCRAgQIAAgeUFBKDlzc1IgAABAgQIrCwgAK3cANMTIECAAAEC ywsIQMubm5EAAQIECBBYWUAAWrkBpidAgAABAgSWFxCAljc3IwECBAgQILCygAC0cgNMT4AAAQIE CCwvcLHf75ef1YwECBAgQIAAgRUFPAFaEd/UBAgQIECAwDoCF7vdbuLMd+/ebUe4c+fOxKEG7Z7z vClqizEHKW1t44uLi60tudD1xrNnLSuog9G1gmpeuNQZ74Nxzb9hzD7bpBCoY15PgFIcG8YkQIAA AQIEshYQgLJuj+IIECBAgACBFAICUApVYxIgQIAAAQJZCwhAWbdHcQQIECBAgEAKAQEohaoxCRAg QIAAgawFBKCs26M4AgQIECBAIIWAAJRC1ZgECBAgQIBA1gICUNbtURwBAgQIECCQQkAASqFqTAIE CBAgQCBrAQEo6/YojgABAgQIEEghIAClUDUmAQIECBAgkLWAAJR1exRHgAABAgQIpBAQgFKoGpMA AQIECBDIWkAAyro9iiNAgAABAgRSCAhAKVSNSYAAAQIECGQtIABl3R7FESBAgAABAikEBKAUqsYk QIAAAQIEshYQgLJuj+IIECBAgACBFAICUApVYxIgQIAAAQJZCwhASdpz586ddty7d+8mmcCgBAgQ IFCvQNw74m5S71pXW5kAtBq9iQkQIECAAIG1BASgteTNS4AAAQIECKwmIACtRm9iAgQIECBAYC0B AWgtefMSIECAAAECqwkIQKvRm5gAAQIECBBYS0AAWkvevAQIECBAgMBqAgLQavQmJkCAAAECBNYS EIDWkjcvAQIECBAgsJqAALQavYkJECBAgACBtQQEoFTy8c93xj/omWom4xIgQIBARQJx14j7SEWL y2gpAlBGzVAKAQIECBAgsIyAALSMs1kIECBAgACBjAQEoIyaoRQCBAgQIEBgGQEBaBlnsxAgQIAA AQIZCQhAGTVDKQQIECBAgMAyAgLQMs5mIUCAAAECBDISEIAyaoZSCBAgQIAAgWUELvb7/TIzmYXA AgIXFxcLzGKK6QJx5dGy6ZiLjRBdW2xGExFIJyAApbPd9MhPP/30zet/yUte8tKXvvQzP/Mzn/vc 5/77v//73/3d3/3Jn/zJH/7hH77//e//m7/5m3/913/9uI/7uOc///lf+IVf+OVf/uVf9mVf1rz4 jM/4jNu3b3/0ox/967/+62azZuNml7//+7//j//4j2aQz/qsz/qiL/qir/iKr3jZy172eZ/3eZ/+ 6Z/eFPDP//zPf/VXf/XHf/zHf/AHf/Cnf/qn//AP//Bf//Vfn/RJn/SCF7zgi7/4i5uRv/RLv/RF L3rRp37qp/7v//7vP/7jP/75n//5H/3RHzUjNy8+8pGP/M///M+nfMqnvPCFL2w2azZudvmcz/mc T/7kT24G+dCHPvRnf/ZnzbDN4H/5l3/5T//0T829oZn0xS9+cVNtM8UNy//8z//8V77ylf/3f//3 67/+629961t///d/vyn+O77jO5588snP/uzPbmZ/29ve9mu/9mv//d///fVf//Xf933ft9vt/uVf /uVXfuVXfvmXf/kv/uIvGrfv+q7v+tZv/dbnPe95733ve3/xF3/xt3/7tz/xEz/xm7/5m7/7u7+7 Wf7f/u3fvvOd73z3u9/drOirv/qrv/d7v/cbvuEbmnp+4zd+o5nu937v9xrJb//2b3/1q1/9uZ/7 uU39b3/729/znvf853/+59d93dc107385byVTHUAABtESURBVC//t3/7t1/91V99xzve0azxC77g C17zmtd827d926d92qfdu3evme43f/M3P/7jP/6bvumbvud7vqdh+eAHP/jMM8+8613vani/8iu/ 8hWveMUNa4+Pnnrqqfb12UMldml8mmW+7nWva5b2Ld/yLW95y1ueffbZH/7hH26smo/e9KY3fexj H/vBH/zB3/qt3/r+7//+n/3Zn22W3yznfe9732tf+9qf+qmfag6b5semvz/2Yz/24z/+4x/4wAea H5vD4/Wvf/2P/MiP/O7v/m7z44c//OGf+ZmfaQb5nd/5nR/4gR9ojsM3vvGNzfKbTv3QD/1Qc5C8 +c1vbuSbXjRjfsInfMLP/dzPfeM3fuMv/dIv/eiP/mjj8wu/8Atf+7Vf+/M///M/8RM/0fS0sfqq r/qqprBmjQ1jg98coj/90z/9hje8oXFrfmwOp5/8yZ9sxmz+vbuv+ZqviZVef/Elt15//U3vzCjw gWnCcTzPWJKhUgvcnv4PTa71b1YWMe+MRcZQqY8J4xMgQIDAOIGFb6lxX5g+76D11jGvvwEa1HQb EyBAgAABAjUICEA1dNEaCBAgQIAAgUECAtAgLhsTIECAAAECNQgIQGm7GL+Xjd+Ypp3P6AQIECBQ rEDcKeLeUexSCihcACqgSUokQIAAAQIE5hUQgOb1NBoBAgQIECBQgIAAVECTlEiAAAECBAjMKyAA zetpNAIECBAgQKAAAQGogCYpkQABAgQIEJhXQACa1/PIaPHH/PHn/Uc28hYBAgQIbFsg7hFx19i2 R/LVC0DJiU1AgAABAgQI5CYgAOXWEfUQIECAAAECyQUEoOTEJiBAgAABAgRyExCAcuuIeggQIECA AIHkAgJQcuJmgviLtvgbtyVmNQcBAgQIFCIQd4e4XxRSeMFlCkAFN0/pBAgQIECAwDgBAWicm70I ECBAgACBggUEoIKbp3QCBAgQIEBgnIAANM5t8F7xa934Re/gIexAgAABAjUKxH0h7hQ1rjK7NQlA 2bVEQQQIECBAgEBqAQEotbDxCRAgQIAAgewEBKDsWqIgAgQIECBAILWAAJRa+PH48cvd+HXv48+8 IkCAAIFNCsQdIe4Rm2RYYdEC0AropiRAgAABAgTWFRCA1vU3OwECBAgQILCCgAC0AropCRAgQIAA gXUFBKBF/eNXvPFL30WnNxkBAgQI5CQQ94K4O+RUXeW1CECVN9jyCBAgQIAAgesCAtB1E+8QIECA AAEClQsIQJU32PIIECBAgACB6wIC0HWTtO/EL3rjV79p5zM6AQIECGQpEHeBuC9kWWa1RQlA1bbW wggQIECAAIFTAgLQKRnvEyBAgAABAtUKCEArtDaedsbzzxWKMCUBAgQIENiwgAC04eZbOgECBAis JBBfgOMr8UqFbHdaAWi7vbdyAgQIECCwWQEBaLOtt3ACBAgQILBdgdvxFG66wYxDDSqm6HnXKn6Q sI0JECBAoI/AiEv6iF2uVzLLINeHPftO0fNe7Pf7syu0AQECBKYIXFxc9N/dRam/lS0JEBgtcLHb 7Ubv3O4YAXDhv+Qqfd6h9cf2E/tldwLLC/QPQNLP8t0x44wCPe+DcT3vuf2pCuca59T4p96vY15/ A3Sqv8nfj+M+jqTkU5qAAAECBNYWiGt+3AXWrmij8wtAG228ZRPIUMDjnwyboiQCtQoIQLV21roI ECBAgACBkwIC0EmaBT6I55/xRHSBSU1BgAABAmsJxNU+rv9rVWJeAcgxQIBAFgJ+/5VFGxRBYDMC AtBmWm2hBAgQIECAwCMBAeiRxEr/N56CxnPRlQoxLQECBAikFYjrfFz5085n9BsFBKAbeXxIgMAi An7/tQizSQgQeCwgAD228IoAAQIECBDYiIAAtH6j41loPB1dvyYVECBAgMCsAnGFj2v+rMMbbLCA ADSYzA4ECMwr4Pdf83oajQCBPgICUB+l5NvEF4L4ipB8ShMQIECAAIENCwhAG26+pRPIQMDjnwya oITkAvHlNr7uJp/SBOcEBKBzQj4nQIAAAQIEqhMQgHJpaXwtiC8KuVSmDgIECBCYIBBX9bjOTxjM rrMJCECzURqIAIGhAn7/NVTM9gQIzCUgAM0laRwCBAgQIECgGAEBKKNWxdPReF6aUXFKIUCAAIHh AnE9jyv88DHskURAAErCalACBM4K+P3XWSIbECCQTkAASmc7ZuT4ihBfGsaMYh8CBAgQyEAgruRx bc+gKCU8FBCAHAoECBAgQIDA5gQEoM213IIJ5CDg9185dEENBLYsIABl1/14UhrPTrMrUUEECBAg cE4gruFxVT+3h88XFRCAFuU2GQECBAgQIJCDgACUQxcOa4ivC/EF4nALPxMoWcDvv0runtp7CcTV O67nvXaz0YICAtCC2KYiQIAAAQIE8hAQgPLow7Uq4ktDfI24tok3CBQp4PFPkW1T9BCBuG7HlXzI 3rZdSEAAWgjaNAQIECBAgEA+AgJQPr1QCQECBAgQILCQgAC0EPSIaeLZaTxNHTGIXQhkJeD3X1m1 QzEpBOKKHdfwFLMYc7qAADTd0AgECBAgQIBAYQICUNYNiy8Q8ZUi63IVR4AAgW0LxLU6rt7b9sh6 9QJQ1u1RHIGaBPz+q6ZuWguB0gUEoNw76GtE7h1SHwECBK4KuG5f9cj0JwEo08YoiwABAgQIEEgn IACls51tZF8mZqM00HoCfv+1nr2ZFxVwxV6Ue8JkAtAEPLsSIECAAAECZQpc+FpWZuNUTaAkgYsL l5qS+qVWAlsQcFUqsMv/78kCix5f8v7Wfn/r1qP/xov9s5dvPv7xwetm0+MbN58+2P7Ypw93ORzq 2ePznpzieD3tIMemOFnPw1161tOu6EhVnfEPh3qIebWqR+s9sfHlDM1Hjz+9ab3tEpqNH05xWWSn nkc1P9zs6o+PqnpUz9VPOwUcdLxXPe2MD6boW8/DXZr620oO6jnx4749Pg8//c5XvWr8mWDPjAWe eeaZjKtT2nGB29N/W7nWP3uw2XlvfeyZWxvLQMcPXu8SIEAgA4Fu+pl+Sx20oM3eB2dx9jdAgw42 GxMgQIAAAQI1CAhAZXaxeQjkfwgQIEBgbYHu45+1azH/MAEBaJiXrQkQIECAAIEKBASgYpvoIVCx rVM4AQJ1CHj8U3QfBaCi26d4AgQIECBAYIyAADRGbeV94v8FzEOglTthegIEtisQj3+efHJb/zRJ NS0XgKpppYUQIECAAAECfQUEoL5SeW3nIVBe/VANAQLbEvD4p4J+C0DFNlEGKrZ1CidAoGgB6afo 9kXxAlBQeEGAAAECBAhsRUAAKrnTHgKV3D21EyBQooDHPyV27WjNAtBRFm8SIECAAAECNQsIQIV3 10OgwhuofAIEChLw+KegZp0tVQA6S2QDAgQIECBAoDYBAaj8jnoIVH4PrYAAgfwFPP7Jv0eDKhSA BnHlurEMlGtn1EWAQB0C0k8dfeyuQgDqanhNgAABAgQIbEJAAKqlzR4C1dJJ6yBAIDcBj39y68gs 9QhAszAahAABAgQIEChJQAAqqVtnavUQ6AyQjwkQIDBYwOOfwWSF7CAAFdKonmXKQD2hbEaAAIEe AtJPD6RSNxGASu2cugkQIECAAIHRAgLQaLpcd/QQKNfOqIsAgbIEPP4pq19DqxWAhoqVsL0MVEKX 1EiAQM4C0k/O3ZmlNgFoFkaDECBAgAABAiUJCEAldWtArR4CDcCyKQECBK4IePxzhaPSHwSgShvb LEsGqre3VkaAAAECEwUEoImAdidAgACBqgQ8/qmqnacXIwCdtqngEw+BKmiiJRAgsKCA9LMg9spT CUArNyD59DJQcmITECBQiYD0U0kj+y1DAOrnZCsCBAgQIECgIgEBqKJmnlqKh0CnZLxPgACBRwIe /zyS2Mr/FYC20WkZaBt9tkoCBMYJSD/j3IreSwAqun2KJ0CAAAECBMYICEBj1Ircx0OgItumaAIE kgt4/JOcOMsJBKAs25KoKBkoEaxhCRAoVkD6KbZ1UwsXgKYKFra/DFRYw5RLgAABAkkELvb7fZKB DZpOIELMuCk+9szD/SaOM2724Xvtb10eo4/+Gy/2z16++fjHB6+bTY9v3Hz6YPtjnz7c5XCoZ4/P e3KK4/W0gxyb4mQ9D3fpWU+7oiNVdcY/HOoh5tWqHq33xMaXMzQfPf70pvW2S2g2fjjFZZGdeh7V /HCzqz8+qupRPVc/7RRw0PFe9bQzPpiibz0Pd2nqbys5qOfEj/v2+Dz89Dtf9arhZ4A9EgrM9fgn xklYq6HnFrg994DGSy7w5MuemTTHy289894HA3zsmSdfPmmkZXZub4hx821fXP73wS3mwYvmNnPl bvjwx8s9L99vR2huwUM2bva9vOUdjByjHU7RrefxjA+nPrZxU9gM9RyO3NTbLvlBPQfFX/74YIP2 /UcsD9Z4+cPDCNG+f27jy/rDp8fGzSYP1ntZQfO/D/rSlvrg9THYy3oONn48Y+z1YLTLzR7U37v4 y+0HbPzI56CedoSo80EZzX/2+4sH4x+udJkzxix9BSK1PPnkk333sV1FArfv3LkzcTl3795tR5g+ 1KBKNjvvIKWjGze5p81AzX+LyEBHV+FNAgQIjBZIlH7cB0d3pM+O8973/Q1QH3PbECBAgAABAlUJ CEBVtbP/YuLBz8Nfh/Xf05YECBAoXCDR45/CVTZXvgC0uZbHgmWgoPCCAIHtCEg/2+n1zSsVgG72 qfxTGajyBlseAQJXBaSfqx6b/kkA2nT7m8XLQFs/AqyfwGYEIv1sZsUWepOAAHSTjs8IECBAoD4B /3/v9fV0xIoEoBFote3iIVBtHbUeAgSuCcTjH+nnms1G3xCANtr4g2XLQAcgfiRAoCYB6aembs61 FgFoLsnix5GBim+hBRAgcExA+jmm4r1bApCD4LGADPTYwisCBKoQiPRTxWosYk4BAWhOTWMRIECA QJ4C/vQnz76sWJUAtCJ+jlN7CJRjV9REgMAogXj8I/2M8qt8JwGo8gaPWJ4MNALNLgQI5CYg/eTW kdzqEYBy60gW9chAWbRBEQQIjBWQfsbKbWg/AWhDzR60VBloEJeNCRDIR0D6yacXOVciAOXcnZVr k4FWboDpCRAYLhDpZ/iu9tiWgAC0rX4PXa0MNFTM9gQIrCjQTT/+8HnFRhQxtQBURJvWLFIGWlPf 3AQI9BaQfnpT2fBSQAByHBAgQIBAVQKe/VTVzmSLEYCS0VY0sIdAFTXTUgjUKRCPf6SfOhucYFUC UALUGoeUgWrsqjURqERA+qmkkcsuQwBa1rvk2WSgkrundgLVCkg/1bY28cIEoMTAdQ0vA9XVT6sh ULyA9FN8C9dbgAC0nn2ZM8tAZfZN1QQqFJB+KmzqgksSgBbErmUqGaiWTloHgYIFpJ+Cm5dH6QJQ Hn0orQoZqLSOqZdAVQLST1XtXGkxAtBK8OVPKwOV30MrIFCkgPRTZNvyK1oAyq8n5VQkA5XTK5US qERA+qmkkRksQwDKoAkllyADldw9tRMoTED6KaxheZcrAOXdnxKqk4FK6JIaCRQvIP0U38LMFiAA ZdaQMsuRgcrsm6oJFCMg/RTTqnIKFYDK6VXelcpAefdHdQQKFpB+Cm5exqULQBk3p7TSZKDSOqZe AgUISD8FNKnMEgWgMvuWa9UyUK6dUReBIgWknyLbVkjRAlAhjSqnTBmonF6plEDWAtJP1u0pvzgB qPwe5rcCGSi/nqiIQGEC0k9hDSuwXAGowKaVULIMVEKX1EggUwHpJ9PG1FXWxX6/r2tFVkOAAAEC BAgQOCPgCdAZIB8TIECAAAEC9Qlc7Ha7iau6e/duO8KdO3cmDjVod/MO4hq98SzOIwYZscvoNXZ3 NG9XI91rzulsuyMX5BylNvWPvpvEIKNH6Or1f23e/lZTtpzX2ROgKb2wb1+BuBjF4dt3T9sRILAB ge6VIS4XG1i3Ja4pIACtqb+pueOi1r3SbUrAYgkQOCrQvSbEheLolt4kMKOAADQjpqHOCMSlrXu9 O7OPjwkQqFogrgbN9SEuEVWv2OJyERCAcunERuqIC1xc9TaycMskQOC6QFwH4spwfRvvEEgkcDvR uIYlcEqgvdI1F7722ufCdwrK+wQqFmhP/3aBLgIVNzrnpXkClHN3aq4tLnnd62DNC7Y2AgQeCXTP +rgUPPrQ/yWwkIAAtBC0aa4LxIWvezW8vpl3CBCoSaB7vsdFoKYFWkspAgJQKZ2qs864/HWviXUu 1aoIELh1q3umx+kPhsAqAv4GaBV2kz4WaC+CzWWxvTK6Jj6m8YpARQLtCd4uyGleUWMLXoonQAU3 r6bS44LYvUrWtEBrIbBlge55HSf7lkGsPQcBASiHLqjhUiAui91rJRoCBEoX6J7RcZqXvij1VyAg AFXQxHqWEBfH7hWznuVZCYHtCcS53JzdcYJvj8GKcxQQgHLsypZrcpXccvetvVYB0afWzha9LgGo 6PZVW7zLZbWttbDtCTidt9fzMlYsAJXRpy1X2TxCj6foW3awdgKlCHRPWOmnlK5tsE4BaINNL3LJ 3UtqkQtQNIENCFx+Wbl7dwMLtcQaBASgGrpY9xriG6QLa92NtrrSBZyhpXdwa/X7hxC31vEi19tm oMuvlg++XEYkKnIxiiZQnUB7YrbLirO1ulVaUG0CngDV1tGK1xO5p3u1rXi9lkagCIHu+RgnaRGV K3LjAgLQxg+AwpYfl9fmmtu97Ba2DOUSqELg4DSM07OKxVlE/QICUP09rmyFzUU2rrMyUGXNtZyC BLpnX/esLGgJSt24gAC08QOg1OV3M1D3QlzqetRNoCiB7kkXJ2NRK1AsgVv+CNpBUKpAe9ltL8TN f12FS22kuosSEH2KapdibxLwBOgmHZ/lLxC5p7kudy/N+VeuQgJlCRycYnHqlbUK1RIIAQEoKLwo VaC5EMe1WAYqtYvqzluge2Z1z7i8q1YdgZsEBKCbdHxWkEA3A3Uv1gUtQakEMhTw4CfDpihpFgEB aBZGg2Qh0P1iKgNl0RJFFC7QPY+651fhy1I+gUsBfwTtOKhNoH0UFF9b48lQbeu0HgIpBQ6iT8qp jE1gHQFPgNZxN2tqgcg9kYRSz2h8AnUIHJwycSrVsTqrIBACAlBQeFGbQHPhjmt39+tsbeu0HgLz CXTPlO4ZNN8MRiKQi4AAlEsn1JFIoJuBuhf3RNMZlkChAh78FNo4ZY8W8DdAo+nsWIxAm4Ha9NP+ N1JRMWtQKIFkAgdfDJwdyaQNnJeAAJRXP1STTkAMSmdr5EIFRJ9CG6fsWQT8CmwWRoMUI9DEoDYJ NRUfXP2LWYNCCcwh0D3+u+fFHGMbg0ABAgJQAU1S4uwC3QzUvQ3MPpEBCWQo0Bzz3cM+TocMS1US gXQCfgWWztbIWQu0F/32NtD+120g64Ypbg6Bbu5pxnPMz4FqjFIFBKBSO6fuWQSux6BZhjUIgdwE RJ/cOqKe1QUu9vv96kUogAABAgQIECCwpIC/AVpS21wECBAgQIBAFgIXu91uYiHxZHXhXyebd2Lj eu6+WefwWebA3qzzMrzRzY04xzJj4ZyDIsWLAOecgjfGnNfZE6CA9YLAFYG4kDWnXJx1V7bwA4H8 BByu+fVERZkK+CPoTBujrBwE2gzUpp/2v5GKcihPDQS6AgcxvXv0djfzmgCBVkAAciQQOCPQvZHE PUYSOqPm4wUF4rBs53RwLmhvqoIFBKCCm6f0JQW6MaiZ1wOhJfHNdVTgIPc024g+R6G8SeCogAB0 lMWbBI4LxA2mvfeIQceZvJtY4CD6xGGZeFrDE6hKQACqqp0Ws5hA94FQ3I3chxbz3+xEcbC1Ag65 zR4JFj5dQACabmiE7Qp0Y1Cj4IHQdg+FxCs/yD3NbKJPYnLD1y8gANXfYytMLRC3ovYuFfeqeD91 AcavWCAOp3aNDqqKe21pCwsIQAuDm65mgfbmFHes9oU7Vs0tT7a2OIpiBgdSUHhBYBYBAWgWRoMQ eCwQN6r2HhZ3snj/8aZeEbgmEAdM+4nD5pqQNwjMIyAAzeNoFALXBdpbV9zP4oVb2nUr78ThERSO k6DwgkAKAQEohaoxCTwWiNtY3OHaF/H+40292p5AHBWxdAdGUHhBIKmAAJSU1+AEHgvEja2958Wd L95/vKlXtQtE92OhDoOg8ILAMgIC0DLOZiHwWKC91cUtMF483sKregWut1v0qbfbVpa1gACUdXsU V7FA3PYO7ojtj/FpxQLbWdpBi9uFa/F2DgArzVNAAMqzL6rakEB7Izy4R8aPbpOFHgrRwYP6NfQA xI8E1hIQgNaSNy+B4wIHeah7H3XvPE6W07vdfkVdTeOOvh8beEGAwPICAtDy5mYkcF4gsk73xtl9 HRucH8sWiQW6felOpUddDa8J5CYgAOXWEfUQuCLQvYl2b7Td191truzsh2QCXf/uJHrR1fCaQM4C AlDO3VEbgSsC3Ztr9wbcfd3d5srOfpgs0HXuDsa8q+E1gVIEBKBSOqVOAlcEujfd7o25+7rZobvZ lf390EPgALO7B9iuhtcEShQQgErsmpoJXBHo3owP7tkHP3a3vDKEHx4IHHAdqNA7APEjgaIFBKCi 26d4AocCBzfpgzv6wY+HO2/s57MaB5gb47FcApULCECVN9jyNi5wcAu/4Zbf/ehgrwoMu6trl3P9 neb9+hZeQe8sgUAiAQEoEaxhCeQocP0GfzQHHH2zWc/13XNb5KnKj9aZ/3KOlu1NAgRmERCAZmE0 CIHiBbpp4FSMOPX+9cV3R7v+6dB3+s97auSoJ4aKd07t4n0CBOoWEIDq7q/VERgjcCocRHo4O2iK Lc9O2mxwqvI++9qGAIFNCQhAm2q3xRKYJNA/XvQPQH0K6j9vn9FsQ4AAgUZAAHIYECAwv8DZyBIJ 6eyW8xdnRAIECNy69RwIBAgQIECAAIGtCQhAW+u49RIgQIAAAQKeADkGCBAgQIAAge0JeAK0vZ5b MQECBAgQ2LyAALT5QwAAAQIECBDYnoAAtL2eWzEBAgQIENi8gAC0+UMAAAECBAgQ2J6AALS9nlsx AQIECBDYvMDFfr/fPAIAAgQIECBAYFsCngBtq99WS4AAAQIECDQCF7vdbiLEWv+kvXknNq7n7px7 Qk3cjPNEwJ67c+4JNXEzzhMBe+7OuSfU0c08ATrK4k0CBAgQIECgZgEBqObuWhsBAgQIECBwVEAA OsriTQIECBAgQKBmAQGo5u5aGwECBAgQIHBUQAA6yuJNAgQIECBAoGYBAajm7lobAQIECBAgcFTg /wN8uZMNOuBKgwAAAABJRU5ErkJggg=="
});

var FuBK_testcard_vectorized__ref2 = preact_compat_es["default"].createElement("path", {
  fill: "#fefefe",
  d: "M23.5 576H22v-7H0v-2h22v-38H0v-2h22v-38H0v-2h22v-38H0v-2h22v-38H0v-2h22v-38H0v-2h22v-38H0v-2h22v-38H0v-2h22v-38H0v-2h22v-38H0v-2h22v-38H0v-2h22v-38H0v-2h22V89H0v-2h22V49H0v-2h22V9H0V7h22V0h3v7h37V0h3v7h37V0h3v7h37V0h3v7h37V0h3v7h37V0h3v7h37V0h3v7h37V0h3v7h37V0h3v7h37V0h3v7h37V0h3v7h37V0h3v7h37V0h3v7h37V0h3v7h37V0h3v7h37V0h3v7h37V0h3v7h37V0h3v7h37V0h3v7h23v2h-23v38h23v2h-23v38h23v2h-23v38h23v2h-23v38h23v2h-23v38h23v2h-23v38h23v2h-23v38h23v2h-23v38h23v2h-23v38h23v2h-23v38h23v2h-23v38h23v2h-23v38h23v2h-23v38h23v2h-23v38h23v2h-23v7h-3v-7h-37v7h-3v-7h-37v7h-3v-7h-37v7h-3v-7h-37v7h-3v-7h-37v7h-3v-7h-37v7h-3v-7h-37v7h-3v-7h-37v7h-3v-7h-37v7h-3v-7h-37v7h-3v-7h-37v7h-3v-7h-37v7h-3v-7h-37v7h-3v-7h-37v7h-3v-7h-37v7h-3v-7h-37v7h-3v-7H65v7h-3v-7H25v7h-1.5zm20-9H62v-38H25v38h18.5zm40 0H102v-38H65v38h18.5zm40 0H142v-38h-37v38h18.5zm40 0H182v-38h-37v38h18.5zm40 0H222v-38h-37v38h18.5zm40 0H262v-38h-37v38h18.5zm40 0H302v-21.7l-11.3-4.3c-6.1-2.4-14.5-5.8-18.4-7.6l-7.3-3.3V567h18.5zm40 0H342v-12.7l-4.8-.7a262 262 0 0 1-30.4-7.2l-1.8-.6V567h18.5zm40 0H382v-9h-3.3a337.7 337.7 0 0 1-30.4-2.6l-3.3-.6V567h18.5zm40 0H422v-12.2l-2.3.6c-1.2.3-9.5 1.1-18.4 1.8l-16.3 1.1v8.7h18.5zm40 0H462v-20.7l-6.8 1.9c-3.7 1-11.9 3-18.2 4.2l-11.5 2.3-.3 6.2-.3 6.1h18.6zm40 0H502v-36.2l-1.3.5c-.6.4-8.4 3.5-17.2 7.1a213 213 0 0 1-17.3 6.6H465v22h18.5zm40 0H542v-38h-37v38h18.5zm40 0H582v-38h-37v38h18.5zm40 0H622v-38h-37v38h18.5zm40 0H662v-38h-37v38h18.5zm40 0H702v-38h-37v38h18.5zm40 0H742v-38h-37v38h18.5zm-346.8-11.1l5.3.1v-27h-37v23.8l4.1.7a339.7 339.7 0 0 0 27.6 2.3zm12 0a327.1 327.1 0 0 0 30.6-2.5l2.7-.6V529h-37v27h3.8zm44.6-4.7c4.5-.8 12.7-2.7 18.2-4.1l10-2.7.3-7.7.3-7.7H425v23.7l8.3-1.5zm-94 .7l2.7.1v-23h-37v14.9l5.3 1.6 15.8 4c5.7 1.3 11.6 2.4 13.1 2.4zm-38-9l.7.1v-14h-34.5l1.9 1.1c1 .6 8.4 3.8 16.5 7 8 3.2 15 5.9 15.4 5.9zm166-.4a343.3 343.3 0 0 0 28.7-11.6l3.5-1.8h-17.3L465 529v14.1l2.3-.6zM43.4 527H62v-38H25v38h18.5zm40 0H102v-38H65v38h18.5zm40 0H142v-38h-37v38h18.5zm40 0H182v-38h-37v38h18.5zm40 0H222v-23.5l-9-7.3-9-7.2h-19v38h18.5zm38.2 0h16.7l-11-6.6a322.1 322.1 0 0 1-21.2-13.8l-1.2-.7V527h16.7zm41.8 0H302v-38h-37v38h18.5zm40 0H342v-38h-37v38h18.5zm40 0H382v-38h-37v38h18.5zm40 0H422v-38h-37v38h18.5zm40 0H462v-38h-37v38h18.5zm40 0H502v-38h-37v38h18.5zm42.3 0H542v-10c0-5.5-.2-10-.5-10s-2.6 1.5-5.2 3.4a312 312 0 0 1-15.8 10l-11 6.6h16.3zm37.7 0H582v-38h-18.5l-3 2.6-9.3 7.6-6.2 5V527h18.5zm40 0H622v-38h-37v38h18.5zm40 0H662v-38h-37v38h18.5zm40 0H702v-38h-37v38h18.5zm40 0H742v-38h-37v38h18.5zm-462.3-1h.8v-37h-37v14.6l10.8 7.1c5.9 4 13.8 9 17.7 11.2 3.9 2.2 7.3 4 7.8 4zm244.5 0c.3 0 4.2-2 8.7-4.6 4.5-2.6 12.5-7.6 17.9-11.2l9.7-6.5V489h-37v37h.7zm-283.9-30.7c.2-3 .1-5.7-.1-6a33 33 0 0 0-7.3-.1l-6.9.3 7 5.7 7 5.7.3-5.6zm329.2 1.1a82 82 0 0 0 7.1-6l1.1-1.4H545v12.1l6-4.7zM43.5 487H62v-38H25v38h18.5zm40 0H102v-38H65v38h18.5zm40 0H142v-38h-37v38h18.5zm49.6 0h28.2l-10.4-10.8a381.4 381.4 0 0 1-16.9-18.7 526.9 526.9 0 0 1-26.7-39.2l-2.2-3.8v36.3L145 487h28.1zm210.4 0h179.2l10.5-10.8c5.7-6 13.8-15 18-20.3a320.7 320.7 0 0 0 25.2-37.4l5.6-10-122.5-.3L377 408v-1.3c0-.6 3.1-9.5 6.8-19.7l6.7-18.5 24.3-.3 24.2-.2.2-20.3.3-20.2.2 20.2.3 20.3h4l.2-20.3.3-20.2.2 20.2.3 20.3h4l.2-20.3.3-20.2.2 20.2.3 20.3h172v-40h-94v-39H385v79h-3v-79H240v39h-25v40h58l.2-20.3.3-20.2.2 20.2.3 20.3h52l.2-20.3.3-20.2.2 20.2.3 20.3h14l.2-20.3.3-20.2.2 20.2.3 20.3h34v40H144.8l4.2 7.7a347.8 347.8 0 0 0 27.6 41.3c3.8 4.6 11.5 13.3 17.3 19.2l10.4 10.8h179.2zm210.3 0H622v-36.2c0-19.9-.2-36-.4-35.7l-6.6 10.8a305 305 0 0 1-21.8 31.6 303 303 0 0 1-16.6 18.3l-11 11.2h28.2zm49.7 0H662v-38h-37v38h18.5zm40 0H702v-38h-37v38h18.5zm40 0H742v-38h-37v38h18.5zm-680-40H62v-38H25v38h18.5zm40 0H102v-38H65v38h18.5zm40 0H142v-38h-37v38h18.5zm520 0H662v-38h-37v38h18.5zm40 0H702v-38h-37v38h18.5zm40 0H742v-38h-37v38h18.5zm-680-40H62v-38H25v38h18.5zm40 0H102v-38H65v38h18.5zm39.5 0c9.9 0 18-.2 18-.4l-3.1-7.2c-1.8-3.8-5.1-12-7.5-18.4l-4.2-11.5-10.6-.3-10.6-.3V407h18zm520.9 0H662v-38l-10.6.2-10.6.3-3.2 9a321.4 321.4 0 0 1-11.3 27.3l-.5 1.2h18zm39.6 0H702v-38h-37v38h18.5zm40 0H742v-38h-37v38h18.5zm-581.9-6c.2 0 .4-7.2.4-16v-16h-12.9l1.8 5.3a483 483 0 0 0 10.7 26.7zm483.8 0l4.1-9.5c2-5 4.8-12 6-15.7l2.4-6.8H625v16.2c0 8.9.2 16 .4 15.7zM207 368h7v-40h-14v40h7zm-163.5-1H62v-38H25v38h18.5zm40 0H102v-38H65v38h18.5zm31.5 0h10v-.9c0-.4-1.3-6-3-12.2-1.6-6.3-3.4-14.4-4-18.1l-1.2-6.8H105v38h10zm20.1 0h6.9v-38h-22.2l.7 4.3a368 368 0 0 0 4.2 19l3.6 14.7h6.8zm496.8 0h7l3.4-14.8c2-8 3.9-16.6 4.2-19l.7-4.2H625v38h7zm20.1 0h10v-38h-11.8l-1.2 6.8c-.6 3.7-2.4 12-4 18.4-1.7 6.4-3 12-3 12.2v.6h10zm31.5 0H702v-38h-37v38h18.5zm40 0H742v-38h-37v38h18.5zm-680-40H62v-38H25v38h18.5zm40 0H102v-38H65v38h18.5zm27.1 0h5.7l-.7-5.8c-.3-3.1-1-11.7-1.3-19l-.6-13.2H105v38h5.6zm20 0H142v-38h-25v7.7c0 4.2.5 12.8 1.1 19l1.2 11.3h11.3zm505.8 0h11.3l1.2-11.3c.6-6.2 1.1-14.8 1.1-19V289h-25v38h11.4zm20 0h5.6v-38h-8.7l-.6 13.3-1.3 19-.7 5.7h5.7zm27.1 0H702v-38h-37v38h18.5zm40 0H742v-38h-37v38h18.5zm-680-40H62v-38H25v38h18.5zm40 0H102v-38H65v38h18.5zm25.9 0h4.3l.6-13.3 1.3-19 .7-5.7H105v38h4.4zm20.1 0H142v-38h-22.7l-1.2 11.3c-.6 6.2-1.1 14.8-1.1 19v7.7h12.5zm134 0H382v-79h3v79h143v-79h94v-40.5l-5.6-10a320.7 320.7 0 0 0-25.2-37.4 354.5 354.5 0 0 0-18-20.3L562.7 89H205.3l-13 13.3-12.9 13.2-6.5 8.5c-3.6 4.7-8.9 12-11.7 16a428 428 0 0 0-10.6 17.6l-5.6 9.9V287h118.5zm374 0H650v-7.7c0-4.2-.5-12.8-1.1-19l-1.2-11.3H625v38h12.5zm20.1 0h4.4v-38h-11.3l.7 5.8c.3 3.1 1 11.7 1.3 19l.6 13.2h4.3zm25.9 0H702v-38h-37v38h18.5zm40 0H742v-38h-37v38h18.5zm-680-40H62v-38H25v38h18.5zm40 0H102v-38H65v38h18.5zm27.4 0h5.9l1.1-6.8c.7-3.7 2.5-11.8 4.1-18.1 1.7-6.3 3-11.8 3-12.2v-.9h-20v38h5.9zm20 0H142v-38h-13.7l-3.6 14.8a368 368 0 0 0-4.2 19l-.7 4.2H131zm505.2 0h11l-.6-4.3c-.3-2.3-2.2-10.8-4.2-19l-3.5-14.7H625v38h11zm20 0h5.9v-38h-20v.6c0 .3 1.3 5.8 3 12.2 1.6 6.4 3.4 14.7 4 18.4l1.2 6.8h5.9zm27.4 0H702v-38h-37v38h18.5zm40 0H742v-38h-37v38h18.5zm-680-40H62v-38H25v38h18.5zm40 0H102v-38H65v38h18.5zm32-.2l10.7-.3 4.2-11.5a347.4 347.4 0 0 1 10.6-25.6c0-.2-8.1-.4-18-.4h-18v38l10.6-.2zm20 .2h6.5v-16.2c0-8.9-.2-16-.4-15.7a421.2 421.2 0 0 0-9.2 22.7L129 207h6.5zm496 0h6.4l-2.3-6.8a326.9 326.9 0 0 0-10.2-25.1c-.2-.2-.4 6.8-.4 15.7V207h6.4zm20 0H662v-38h-18c-9.9 0-18 .2-18 .4s1.5 3.7 3.4 7.8a309.2 309.2 0 0 1 11.1 28.6l.4 1.2h10.6zm32 0H702v-38h-37v38h18.5zm40 0H742v-38h-37v38h18.5zm-680-40H62v-38H25v38h18.5zm40 0H102v-38H65v38h18.5zm40 0H142v-38h-37v38h18.5zm520 0H662v-38h-37v38h18.5zm40 0H702v-38h-37v38h18.5zm40 0H742v-38h-37v38h18.5zm-576.2-9.4a526.9 526.9 0 0 1 26.7-39.1c3.6-4.4 11.2-12.8 16.9-18.7L201.3 89H145v72.5l2.3-3.9zm474.4 3.4c.2 0 .3-16.2.3-36V89h-56.3l10.5 10.8c5.7 6 13.8 15 18 20.3a318.7 318.7 0 0 1 27.5 40.9zM43.5 127H62V89H25v38h18.5zm40 0H102V89H65v38h18.5zm40 0H142V89h-37v38h18.5zm520 0H662V89h-37v38h18.5zm40 0H702V89h-37v38h18.5zm40 0H742V89h-37v38h18.5zm-680-40H62V49H25v38h18.5zm40 0H102V49H65v38h18.5zm40 0H142V49h-37v38h18.5zm40 0H182V49h-37v38h18.5zm31 0h9.5l9-7.3 9-7.2V49h-37v38h9.5zm20.8 0h6.7V75.9l-4.5 3.2a57.4 57.4 0 0 0-6.6 5.5l-2.2 2.4h6.6zm28.2 0H262V51h-.7c-.3 0-3.6 1.6-7.2 3.6s-11.7 7-17.9 11L225 73.2V87h18.5zm40 0H302V49h-37v38h18.5zm40 0H342V49h-37v38h18.5zm40 0H382V49h-37v38h18.5zm40 0H422V49h-37v38h18.5zm40 0H462V49h-37v38h18.5zm40 0H502V49h-37v38h18.5zm40 0H542V72.4l-10.8-7c-5.9-4-14.2-9-18.5-11.3l-7.7-4.3V87h18.5zm28.6 0h7.1l-1-1.4a82 82 0 0 0-7.2-6l-6-4.7V87h7.1zm20.1 0h9.8V49h-37v23.5l8.8 7.2 8.7 7.1 9.8.1zm31.3 0H622V49h-37v38h18.5zm40 0H662V49h-37v38h18.5zm40 0H702V49h-37v38h18.5zm40 0H742V49h-37v38h18.5zM226.2 69.4l7.3-4.8c3.3-2.2 10.5-6.6 16-9.8l10-5.8H225v21.1l1.3-.7zm315.6.6s.2-4.7.2-10.5V49h-34.5l10.1 5.8A347.3 347.3 0 0 1 541.7 70zM43.4 47H62V9H25v38h18.5zm40 0H102V9H65v38h18.5zm40 0H142V9h-37v38h18.5zm40 0H182V9h-37v38h18.5zm40 0H222V9h-37v38h18.5zm40 0H262V9h-37v38h18.5zm42.3 0H302V34h-.6c-.3 0-6.9 2.5-14.7 5.6-7.8 3-14.9 6-15.7 6.5l-1.5.8h16.3zm37.7 0H342V25h-2.3a378.2 378.2 0 0 0-29.5 6.5l-5.2 1.6V47h18.5zm40 0H382V21h-3.3a337.2 337.2 0 0 0-30.4 2.6l-3.3.6V47h18.5zm40 0H422V24.2l-2.8-.6c-1.5-.4-8.1-1-14.7-1.6-6.6-.5-13.7-1-15.8-1H385v26h18.5zm40 0H462l-.3-7.3-.3-7.2-10-2.6a321 321 0 0 0-18.3-4.1l-8.2-1.5V47h18.5zm38.3 0h16.7l-1.5-1a345.5 345.5 0 0 0-31-12h-1v13h16.8zm41.7 0H542V9h-37v38h18.5zm40 0H582V9h-37v38h18.5zm40 0H622V9h-37v38h18.5zm40 0H662V9h-37v38h18.5zm40 0H702V9h-37v38h18.5zm40 0H742V9h-37v38h18.5zm-457.3-1.3l11.8-5c5.8-2.4 13.5-5.4 17.3-6.6l6.7-2.3V9h-37v37.2l1.3-.5zm235 .2l.8.1V9h-37v22.5l10.3 3.8a344.4 344.4 0 0 1 26 10.6zM306.9 30.5a262 262 0 0 1 30.4-7.1l4.8-.7V9h-37v22.2l1.8-.7zm155 .4s.2-4.8.2-10.9V9H425l.3 6.6.3 6.7 11.5 2.3a283.6 283.6 0 0 1 24.8 6.3zm-113.6-9.3a337.2 337.2 0 0 1 30.5-2.6h3.3V9h-37v13.2l3.3-.6zm72.6.3l1.2.1V9h-37v9.8l12 .7a283.7 283.7 0 0 1 23.8 2.4z"
});

var _ref3 = preact_compat_es["default"].createElement("path", {
  fill: "#fcfcfc",
  d: "M229.7 358.3l-.3 10.2v-41l.3 10.3c.2 5.6.2 14.8 0 20.4zm29 0l-.3 10.2v-41l.3 10.3c.2 5.6.2 14.8 0 20.4zm46 0l-.3 10.2v-41l.3 10.3c.2 5.6.2 14.8 0 20.4zm59 0l-.3 10.2v-41l.3 10.3c.2 5.6.2 14.8 0 20.4zm71 0l-.3 10.2v-41l.3 10.3c.2 5.6.2 14.8 0 20.4zm20 0l-.3 10.2v-41l.3 10.3c.2 5.6.2 14.8 0 20.4z"
});

var _ref4 = preact_compat_es["default"].createElement("path", {
  fill: "#fafafa",
  d: "M244 368h-1v-40h2v40h-1zm67.7-9.8l-.3 10.3v-41l.3 10.3c.2 5.6.2 14.8 0 20.4zm45 0l-.3 10.3v-41l.3 10.3c.2 5.6.2 14.8 0 20.4zm73 0l-.3 10.3v-41l.3 10.3c.2 5.6.2 14.8 0 20.4zm30 0l-.3 10.3v-41l.3 10.3c.2 5.6.2 14.8 0 20.4z"
});

var _ref5 = preact_compat_es["default"].createElement("path", {
  fill: "#f8f8f8",
  d: "M228.7 358.3l-.3 10.2v-41l.3 10.3c.2 5.6.2 14.8 0 20.4zm31 0l-.3 10.2v-41l.3 10.3c.2 5.6.2 14.8 0 20.4zm60 0l-.3 10.2v-41l.3 10.3c.2 5.6.2 14.8 0 20.4zm29 0l-.3 10.2v-41l.3 10.3c.2 5.6.2 14.8 0 20.4zm76 0l-.3 10.2v-41l.3 10.3c.2 5.6.2 14.8 0 20.4zm40 0l-.3 10.2v-41l.3 10.3c.2 5.6.2 14.8 0 20.4z"
});

var _ref6 = preact_compat_es["default"].createElement("path", {
  fill: "#f5f5f5",
  d: "M213.7 358.3l-.3 10.2v-41l.3 10.3c.2 5.6.2 14.8 0 20.4zm61 0l-.3 10.2v-41l.3 10.3c.2 5.6.2 14.8 0 20.4zm22 0l-.3 10.2v-41l.3 10.3c.2 5.6.2 14.8 0 20.4zm123 0l-.3 10.2v-41l.3 10.3c.2 5.6.2 14.8 0 20.4zm50 0l-.3 10.2v-41l.3 10.3c.2 5.6.2 14.8 0 20.4z"
});

var _ref7 = preact_compat_es["default"].createElement("path", {
  fill: "#f1f1f1",
  d: "M215.7 358.3l-.3 10.2v-41l.3 10.3c.2 5.6.2 14.8 0 20.4zm57 0l-.3 10.2v-41l.3 10.3c.2 5.6.2 14.8 0 20.4zm25 0l-.3 10.2v-41l.3 10.3c.2 5.6.2 14.8 0 20.4zM334 368h-1v-40h2v40h-1zm80.7-9.8l-.3 10.3v-41l.3 10.3c.2 5.6.2 14.8 0 20.4z"
});

var _ref8 = preact_compat_es["default"].createElement("path", {
  fill: "#ececec",
  d: "M409.7 358.3l-.3 10.2v-41l.3 10.3c.2 5.6.2 14.8 0 20.4z"
});

var _ref9 = preact_compat_es["default"].createElement("path", {
  fill: "#eaeaea",
  d: "M230.7 358.3l-.3 10.2v-41l.3 10.3c.2 5.6.2 14.8 0 20.4zm27 0l-.3 10.2v-41l.3 10.3c.2 5.6.2 14.8 0 20.4zm61 0l-.3 10.2v-41l.3 10.3c.2 5.6.2 14.8 0 20.4zm31 0l-.3 10.2v-41l.3 10.3c.2 5.6.2 14.8 0 20.4zm51 0l-.3 10.2v-41l.3 10.3c.2 5.6.2 14.8 0 20.4z"
});

var _ref10 = preact_compat_es["default"].createElement("path", {
  fill: "#e6e6e6",
  d: "M312.7 358.3l-.3 10.2v-41l.3 10.3c.2 5.6.2 14.8 0 20.4zm43 0l-.3 10.2v-41l.3 10.3c.2 5.6.2 14.8 0 20.4zm49 0l-.3 10.2v-41l.3 10.3c.2 5.6.2 14.8 0 20.4z"
});

var _ref11 = preact_compat_es["default"].createElement("path", {
  fill: "#e4e4e4",
  d: "M242.7 358.3l-.3 10.2v-41l.3 10.3c.2 5.6.2 14.8 0 20.4zm3 0l-.3 10.2v-41l.3 10.3c.2 5.6.2 14.8 0 20.4zm160 0l-.3 10.2v-41l.3 10.3c.2 5.6.2 14.8 0 20.4z"
});

var _ref12 = preact_compat_es["default"].createElement("path", {
  fill: "#e0e0e0",
  d: "M227.7 358.3l-.3 10.2v-41l.3 10.3c.2 5.6.2 14.8 0 20.4zm33 0l-.3 10.2v-41l.3 10.3c.2 5.6.2 14.8 0 20.4zm139 0l-.3 10.2v-41l.3 10.3c.2 5.6.2 14.8 0 20.4z"
});

var _ref13 = preact_compat_es["default"].createElement("path", {
  fill: "#ddd",
  d: "M303.7 358.3l-.3 10.2v-41l.3 10.3c.2 5.6.2 14.8 0 20.4zm61 0l-.3 10.2v-41l.3 10.3c.2 5.6.2 14.8 0 20.4zm46 0l-.3 10.2v-41l.3 10.3c.2 5.6.2 14.8 0 20.4z"
});

var _ref14 = preact_compat_es["default"].createElement("path", {
  fill: "#d9d9d9",
  d: "M327.7 358.3l-.3 10.2v-41l.3 10.3c.2 5.6.2 14.8 0 20.4zm13 0l-.3 10.2v-41l.3 10.3c.2 5.6.2 14.8 0 20.4z"
});

var _ref15 = preact_compat_es["default"].createElement("path", {
  fill: "#d7d7d7",
  d: "M212.7 358.3l-.3 10.2v-41l.3 10.3c.2 5.6.2 14.8 0 20.4zm63 0l-.3 10.2v-41l.3 10.3c.2 5.6.2 14.8 0 20.4zm140 0l-.3 10.2v-41l.3 10.3c.2 5.6.2 14.8 0 20.4z"
});

var _ref16 = preact_compat_es["default"].createElement("path", {
  fill: "#d1d1d1",
  d: "M468.7 358.3l-.3 10.2v-41l.3 10.3c.2 5.6.2 14.8 0 20.4z"
});

var _ref17 = preact_compat_es["default"].createElement("path", {
  fill: "#cdcdcd",
  d: "M216.7 358.3l-.3 10.2v-41l.3 10.3c.2 5.6.2 14.8 0 20.4zm55 0l-.3 10.2v-41l.3 10.3c.2 5.6.2 14.8 0 20.4zm149 0l-.3 10.2v-41l.3 10.3c.2 5.6.2 14.8 0 20.4z"
});

var _ref18 = preact_compat_es["default"].createElement("path", {
  fill: "#c9c9c9",
  d: "M305.7 358.3l-.3 10.2v-41l.3 10.3c.2 5.6.2 14.8 0 20.4zm20 0l-.3 10.2v-41l.3 10.3c.2 5.6.2 14.8 0 20.4zm17 0l-.3 10.2v-41l.3 10.3c.2 5.6.2 14.8 0 20.4zm20 0l-.3 10.2v-41l.3 10.3c.2 5.6.2 14.8 0 20.4zm101 0l-.3 10.2v-41l.3 10.3c.2 5.6.2 14.8 0 20.4z"
});

var _ref19 = preact_compat_es["default"].createElement("path", {
  fill: "#c5c5c5",
  d: "M231.7 358.3l-.3 10.2v-41l.3 10.3c.2 5.6.2 14.8 0 20.4zm25 0l-.3 10.2v-41l.3 10.3c.2 5.6.2 14.8 0 20.4zm169 0l-.3 10.2v-41l.3 10.3c.2 5.6.2 14.8 0 20.4z"
});

var _ref20 = preact_compat_es["default"].createElement("path", {
  fill: "silver",
  d: "M458.7 358.3l-.3 10.2v-41l.3 10.3c.2 5.6.2 14.8 0 20.4z"
});

var _ref21 = preact_compat_es["default"].createElement("path", {
  fill: "#bebebe",
  d: "M241.7 358.3l-.3 10.2v-41l.3 10.3c.2 5.6.2 14.8 0 20.4zm5 0l-.3 10.2v-41l.3 10.3c.2 5.6.2 14.8 0 20.4zm184 0l-.3 10.2v-41l.3 10.3c.2 5.6.2 14.8 0 20.4zM480 287h-48v-79h96v79h-48zm-305.5-79H145v-40.5l5.6-9.9A338 338 0 0 1 162 139c3.3-4.9 9.5-13.3 13.8-18.6l8-9.8 10-10 10.1-10V208h-29.5zm-27.2-50.4l-2.2 3.9v-36.3L145 89h56.3l-10.4 10.8a381.4 381.4 0 0 0-16.9 18.7 526.9 526.9 0 0 0-26.7 39.2z"
});

var _ref22 = preact_compat_es["default"].createElement("path", {
  fill: "#bababa",
  d: "M310.7 358.3l-.3 10.2v-41l.3 10.3c.2 5.6.2 14.8 0 20.4zm47 0l-.3 10.2v-41l.3 10.3c.2 5.6.2 14.8 0 20.4z"
});

var _ref23 = preact_compat_es["default"].createElement("path", {
  fill: "#b5b5b5",
  d: "M226.7 358.3l-.3 10.2v-41l.3 10.3c.2 5.6.2 14.8 0 20.4zm35 0l-.3 10.2v-41l.3 10.3c.2 5.6.2 14.8 0 20.4zm59 0l-.3 10.2v-41l.3 10.3c.2 5.6.2 14.8 0 20.4zm27 0l-.3 10.2v-41l.3 10.3c.2 5.6.2 14.8 0 20.4zm88 0l-.3 10.2v-41l.3 10.3c.2 5.6.2 14.8 0 20.4zm18 0l-.3 10.2v-41l.3 10.3c.2 5.6.2 14.8 0 20.4z"
});

var _ref24 = preact_compat_es["default"].createElement("path", {
  fill: "#adadad",
  d: "M440.7 358.3l-.3 10.2v-41l.3 10.3c.2 5.6.2 14.8 0 20.4zm8 0l-.3 10.2v-41l.3 10.3c.2 5.6.2 14.8 0 20.4z"
});

var _ref25 = preact_compat_es["default"].createElement("path", {
  fill: "#aaa",
  d: "M211.7 358.3l-.3 10.2v-41l.3 10.3c.2 5.6.2 14.8 0 20.4zm65 0l-.3 10.2v-41l.3 10.3c.2 5.6.2 14.8 0 20.4zm19 0l-.3 10.2v-41l.3 10.3c.2 5.6.2 14.8 0 20.4z"
});

var _ref26 = preact_compat_es["default"].createElement("path", {
  fill: "#a4a4a4",
  d: "M332.7 358.3l-.3 10.2v-41l.3 10.3c.2 5.6.2 14.8 0 20.4zm3 0l-.3 10.2v-41l.3 10.3c.2 5.6.2 14.8 0 20.4zm108 0l-.3 10.2v-41l.3 10.3c.2 5.6.2 14.8 0 20.4zm2 0l-.3 10.2v-41l.3 10.3c.2 5.6.2 14.8 0 20.4z"
});

var _ref27 = preact_compat_es["default"].createElement("path", {
  fill: "#a1a1a1",
  d: "M298.7 358.3l-.3 10.2v-41l.3 10.3c.2 5.6.2 14.8 0 20.4z"
});

var _ref28 = preact_compat_es["default"].createElement("path", {
  fill: "#9d9d9d",
  d: "M217.7 358.3l-.3 10.2v-41l.3 10.3c.2 5.6.2 14.8 0 20.4zm53 0l-.3 10.2v-41l.3 10.3c.2 5.6.2 14.8 0 20.4z"
});

var _ref29 = preact_compat_es["default"].createElement("path", {
  fill: "#9a9a9a",
  d: "M438.7 358.3l-.3 10.2v-41l.3 10.3c.2 5.6.2 14.8 0 20.4zm12 0l-.3 10.2v-41l.3 10.3c.2 5.6.2 14.8 0 20.4z"
});

var _ref30 = preact_compat_es["default"].createElement("path", {
  fill: "#919191",
  d: "M232.7 358.3l-.3 10.2v-41l.3 10.3c.2 5.6.2 14.8 0 20.4zm23 0l-.3 10.2v-41l.3 10.3c.2 5.6.2 14.8 0 20.4zm62 0l-.3 10.2v-41l.3 10.3c.2 5.6.2 14.8 0 20.4zm33 0l-.3 10.2v-41l.3 10.3c.2 5.6.2 14.8 0 20.4zm83 0l-.3 10.2v-41l.3 10.3c.2 5.6.2 14.8 0 20.4z"
});

var _ref31 = preact_compat_es["default"].createElement("path", {
  fill: "#8d8d8d",
  d: "M313.7 358.3l-.3 10.2v-41l.3 10.3c.2 5.6.2 14.8 0 20.4zm41 0l-.3 10.2v-41l.3 10.3c.2 5.6.2 14.8 0 20.4zm101 0l-.3 10.2v-41l.3 10.3c.2 5.6.2 14.8 0 20.4z"
});

var _ref32 = preact_compat_es["default"].createElement("path", {
  fill: "#5f40fe",
  d: "M173.1 487H145v-39h21.5l6.4 8c3.5 4.5 11.3 13.3 17.3 19.6l11 11.4h-28zm41.5 0h-10.3l-10.4-10.8a357.3 357.3 0 0 1-23.3-27l-.7-1.2H225v39h-10.4z"
});

var _ref33 = preact_compat_es["default"].createElement("path", {
  fill: "#898989",
  d: "M240.7 358.3l-.3 10.2v-41l.3 10.3c.2 5.6.2 14.8 0 20.4zm7 0l-.3 10.2v-41l.3 10.3c.2 5.6.2 14.8 0 20.4zm181 0l-.3 10.2v-41l.3 10.3c.2 5.6.2 14.8 0 20.4z"
});

var _ref34 = preact_compat_es["default"].createElement("path", {
  fill: "#5e3ffc",
  d: "M226.5 487H225v-39h3v39h-1.5z"
});

var _ref35 = preact_compat_es["default"].createElement("path", {
  fill: "#5c3ef9",
  d: "M229 487h-1v-39h2v39h-1z"
});

var _ref36 = preact_compat_es["default"].createElement("path", {
  fill: "#868686",
  d: "M460.7 358.3l-.3 10.2v-41l.3 10.3c.2 5.6.2 14.8 0 20.4z"
});

var _ref37 = preact_compat_es["default"].createElement("path", {
  fill: "#5c3ef7",
  d: "M231 487h-1v-39h2v39h-1z"
});

var _ref38 = preact_compat_es["default"].createElement("path", {
  fill: "#5b3df5",
  d: "M233.5 487H232v-39h3v39h-1.5z"
});

var _ref39 = preact_compat_es["default"].createElement("path", {
  fill: "#5a3cf1",
  d: "M236.5 487H235v-39h3v39h-1.5z"
});

var _ref40 = preact_compat_es["default"].createElement("path", {
  fill: "#593cee",
  d: "M239 487h-1v-39h2v39h-1z"
});

var _ref41 = preact_compat_es["default"].createElement("path", {
  fill: "gray",
  d: "M225.7 358.3l-.3 10.2v-41l.3 10.3c.2 5.6.2 14.8 0 20.4zm37 0l-.3 10.2v-41l.3 10.3c.2 5.6.2 14.8 0 20.4z"
});

var _ref42 = preact_compat_es["default"].createElement("path", {
  fill: "#583bec",
  d: "M241.5 487H240v-39h3v39h-1.5z"
});

var _ref43 = preact_compat_es["default"].createElement("path", {
  fill: "#bf00bf",
  d: "M414 208h-30V89h60v119h-30z"
});

var _ref44 = preact_compat_es["default"].createElement("path", {
  fill: "#bfbf00",
  d: "M234 208h-30l.2-59.3.3-59.2 29.8-.3L264 89v119h-30z"
});

var _ref45 = preact_compat_es["default"].createElement("path", {
  fill: "#00bfbf",
  d: "M294 208h-30V89h60v119h-30z"
});

var _ref46 = preact_compat_es["default"].createElement("path", {
  fill: "#7f7f7f",
  d: "M205.5 368H200v-40h11v40h-5.5zm84.5 0h-5v-40h10v40h-5zm85.5 0H369v-40h13v40h-6.5zm16.5 0h-7v-40h14v40h-7zm86 0h-5v-40h10v40h-5zm133.5 0H601v-40h21v40h-10.5zM359 287h-23v-79h46v79h-23zm49.5 0H385v-79h47v79h-23.5z"
});

var _ref47 = preact_compat_es["default"].createElement("path", {
  fill: "#563ae9",
  d: "M244.5 487H243v-39h3v39h-1.5z"
});

var _ref48 = preact_compat_es["default"].createElement("path", {
  fill: "#5539e6",
  d: "M247.5 487H246v-39h3v39h-1.5z"
});

var _ref49 = preact_compat_es["default"].createElement("path", {
  fill: "#7c7c7c",
  d: "M302.7 358.3l-.3 10.2v-41l.3 10.3c.2 5.6.2 14.8 0 20.4zm63 0l-.3 10.2v-41l.3 10.3c.2 5.6.2 14.8 0 20.4zm58 0l-.3 10.2v-41l.3 10.3c.2 5.6.2 14.8 0 20.4zm42 0l-.3 10.2v-41l.3 10.3c.2 5.6.2 14.8 0 20.4z"
});

var _ref50 = preact_compat_es["default"].createElement("path", {
  fill: "#5438e2",
  d: "M250.5 487H249v-39h3v39h-1.5z"
});

var _ref51 = preact_compat_es["default"].createElement("path", {
  fill: "#5338e0",
  d: "M252.7 477.2l-.3 10.3v-40l.3 9.7c.2 5.3.2 14.3 0 20z"
});

var _ref52 = preact_compat_es["default"].createElement("path", {
  fill: "#797979",
  d: "M328.7 358.3l-.3 10.2v-41l.3 10.3c.2 5.6.2 14.8 0 20.4zm11 0l-.3 10.2v-41l.3 10.3c.2 5.6.2 14.8 0 20.4z"
});

var _ref53 = preact_compat_es["default"].createElement("path", {
  fill: "#5338de",
  d: "M254 487h-1v-39h2v39h-1z"
});

var _ref54 = preact_compat_es["default"].createElement("path", {
  fill: "#fd0d5e",
  d: "M155.6 448H145v-33.5l2.3 3.8c1.2 2.2 5.8 9.4 10.2 16a338 338 0 0 1 8.3 13l.4.7h-10.6zm42.6 0h-28.8l-8.1-12.3a351 351 0 0 1-12.3-20l-4.2-7.7H227v40h-28.8z"
});

var _ref55 = preact_compat_es["default"].createElement("path", {
  fill: "#5237dc",
  d: "M256.5 487H255v-39h3v39h-1.5z"
});

var _ref56 = preact_compat_es["default"].createElement("path", {
  fill: "#f90d5c",
  d: "M228.5 448H227v-40h3v40h-1.5z"
});

var _ref57 = preact_compat_es["default"].createElement("path", {
  fill: "#f70d5c",
  d: "M231 448h-1v-40h2v40h-1z"
});

var _ref58 = preact_compat_es["default"].createElement("path", {
  fill: "#757575",
  d: "M277.7 358.3l-.3 10.2v-41l.3 10.3c.2 5.6.2 14.8 0 20.4z"
});

var _ref59 = preact_compat_es["default"].createElement("path", {
  fill: "#5036d9",
  d: "M259 487h-1v-39h2v39h-1z"
});

var _ref60 = preact_compat_es["default"].createElement("path", {
  fill: "#f50d5b",
  d: "M233.5 448H232v-40h3v40h-1.5z"
});

var _ref61 = preact_compat_es["default"].createElement("path", {
  fill: "#5036d7",
  d: "M261 487h-1v-39h2v39h-1z"
});

var _ref62 = preact_compat_es["default"].createElement("path", {
  fill: "#4f35d5",
  d: "M263.5 487H262v-39h3v39h-1.5z"
});

var _ref63 = preact_compat_es["default"].createElement("path", {
  fill: "#f10d5a",
  d: "M237 448h-2v-40h4v40h-2z"
});

var _ref64 = preact_compat_es["default"].createElement("path", {
  fill: "#727272",
  d: "M284.7 358.3l-.3 10.2v-41l.3 10.3c.2 5.6.2 14.8 0 20.4zm134 0l-.3 10.2v-41l.3 10.3c.2 5.6.2 14.8 0 20.4zm52 0l-.3 10.2v-41l.3 10.3c.2 5.6.2 14.8 0 20.4z"
});

var _ref65 = preact_compat_es["default"].createElement("path", {
  fill: "#4d34d1",
  d: "M266.5 487H265v-39h3v39h-1.5z"
});

var _ref66 = preact_compat_es["default"].createElement("path", {
  fill: "#ed0c58",
  d: "M240.5 448H239v-40h3v40h-1.5z"
});

var _ref67 = preact_compat_es["default"].createElement("path", {
  fill: "#4d34ce",
  d: "M269 487h-1v-39h2v39h-1z"
});

var _ref68 = preact_compat_es["default"].createElement("path", {
  fill: "#e90c56",
  d: "M244 448h-2v-40h4v40h-2z"
});

var _ref69 = preact_compat_es["default"].createElement("path", {
  fill: "#4c33cc",
  d: "M271 487h-1v-39h2v39h-1z"
});

var _ref70 = preact_compat_es["default"].createElement("path", {
  fill: "#4c33cb",
  d: "M272.7 477.2l-.3 10.3v-40l.3 9.7c.2 5.3.2 14.3 0 20z"
});

var _ref71 = preact_compat_es["default"].createElement("path", {
  fill: "#e60c55",
  d: "M247.5 448H246v-40h3v40h-1.5z"
});

var _ref72 = preact_compat_es["default"].createElement("path", {
  fill: "#4a32c9",
  d: "M275 487h-2v-39h4v39h-2z"
});

var _ref73 = preact_compat_es["default"].createElement("path", {
  fill: "#e20c54",
  d: "M250.5 448H249v-40h3v40h-1.5z"
});

var _ref74 = preact_compat_es["default"].createElement("path", {
  fill: "#e00c53",
  d: "M253 448h-1v-40h2v40h-1z"
});

var _ref75 = preact_compat_es["default"].createElement("path", {
  fill: "#4931c5",
  d: "M278.5 487H277v-39h3v39h-1.5z"
});

var _ref76 = preact_compat_es["default"].createElement("path", {
  fill: "#dd0c52",
  d: "M255.5 448H254v-40h3v40h-1.5z"
});

var _ref77 = preact_compat_es["default"].createElement("path", {
  fill: "#4830c1",
  d: "M281.5 487H280v-39h3v39h-1.5z"
});

var _ref78 = preact_compat_es["default"].createElement("path", {
  fill: "#686868",
  d: "M218.7 358.3l-.3 10.2v-41l.3 10.3c.2 5.6.2 14.8 0 20.4zm51 0l-.3 10.2v-41l.3 10.3c.2 5.6.2 14.8 0 20.4zm144 0l-.3 10.2v-41l.3 10.3c.2 5.6.2 14.8 0 20.4z"
});

var _ref79 = preact_compat_es["default"].createElement("path", {
  fill: "#4730be",
  d: "M284 487h-1v-39h2v39h-1z"
});

var _ref80 = preact_compat_es["default"].createElement("path", {
  fill: "#d90b50",
  d: "M258.5 448H257v-40h3v40h-1.5z"
});

var _ref81 = preact_compat_es["default"].createElement("path", {
  fill: "#d70b50",
  d: "M261 448h-1v-40h2v40h-1z"
});

var _ref82 = preact_compat_es["default"].createElement("path", {
  fill: "#462fbc",
  d: "M286.5 487H285v-39h3v39h-1.5z"
});

var _ref83 = preact_compat_es["default"].createElement("path", {
  fill: "#b07f00",
  d: "M542 368h-59v-40h118v40h-59z"
});

var _ref84 = preact_compat_es["default"].createElement("path", {
  fill: "#656565",
  d: "M324.7 358.3l-.3 10.2v-41l.3 10.3c.2 5.6.2 14.8 0 20.4zm19 0l-.3 10.2v-41l.3 10.3c.2 5.6.2 14.8 0 20.4z"
});

var _ref85 = preact_compat_es["default"].createElement("path", {
  fill: "#d50b4f",
  d: "M263.5 448H262v-40h3v40h-1.5z"
});

var _ref86 = preact_compat_es["default"].createElement("path", {
  fill: "#452eb9",
  d: "M289.5 487H288v-39h3v39h-1.5z"
});

var _ref87 = preact_compat_es["default"].createElement("path", {
  fill: "#d10b4d",
  d: "M267 448h-2v-40h4v40h-2z"
});

var _ref88 = preact_compat_es["default"].createElement("path", {
  fill: "#442db6",
  d: "M292 487h-1v-39h2v39h-1z"
});

var _ref89 = preact_compat_es["default"].createElement("path", {
  fill: "#cd0b4c",
  d: "M270 448h-1v-40h2v40h-1z"
});

var _ref90 = preact_compat_es["default"].createElement("path", {
  fill: "#432db4",
  d: "M294.5 487H293v-39h3v39h-1.5z"
});

var _ref91 = preact_compat_es["default"].createElement("path", {
  fill: "#cb0b4c",
  d: "M272 448h-1v-40h2v40h-1z"
});

var _ref92 = preact_compat_es["default"].createElement("path", {
  fill: "#606060",
  d: "M306.7 358.3l-.3 10.2v-41l.3 10.3c.2 5.6.2 14.8 0 20.4zm55 0l-.3 10.2v-41l.3 10.3c.2 5.6.2 14.8 0 20.4zm47 0l-.3 10.2v-41l.3 10.3c.2 5.6.2 14.8 0 20.4z"
});

var _ref93 = preact_compat_es["default"].createElement("path", {
  fill: "#422cb1",
  d: "M297 487h-1v-39h2v39h-1z"
});

var _ref94 = preact_compat_es["default"].createElement("path", {
  fill: "#c90a4a",
  d: "M275 448h-2v-40h4v40h-2z"
});

var _ref95 = preact_compat_es["default"].createElement("path", {
  fill: "#412caf",
  d: "M298.7 477.2l-.3 10.3v-40l.3 9.7c.2 5.3.2 14.3 0 20z"
});

var _ref96 = preact_compat_es["default"].createElement("path", {
  fill: "#5e5e5e",
  d: "M513.4 487H464v-79h158l-2.1 4.3a320.5 320.5 0 0 1-30.3 45.7 364.6 364.6 0 0 1-16.5 18.2L562.7 487h-49.3zm80.4 0h-28.2l11-11.3a303 303 0 0 0 16.6-18.2 567 567 0 0 0 10.5-14c2.8-4 7.9-11.9 11.3-17.6l6.6-10.8c.2-.2.4 15.8.4 35.7V487h-28.2zm-360-128.8l-.4 10.3v-41l.3 10.3c.2 5.6.2 14.8 0 20.4zm21 0l-.4 10.3v-41l.3 10.3c.2 5.6.2 14.8 0 20.4zm147 0l-.4 10.3v-41l.3 10.3c.2 5.6.2 14.8 0 20.4z"
});

var _ref97 = preact_compat_es["default"].createElement("path", {
  fill: "#402bad",
  d: "M300 487h-1v-39h2v39h-1z"
});

var _ref98 = preact_compat_es["default"].createElement("path", {
  fill: "#c50a49",
  d: "M278.5 448H277v-40h3v40h-1.5z"
});

var _ref99 = preact_compat_es["default"].createElement("path", {
  fill: "#402bab",
  d: "M302 487h-1v-39h2v39h-1z"
});

var _ref100 = preact_compat_es["default"].createElement("path", {
  fill: "#c10a48",
  d: "M281.5 448H280v-40h3v40h-1.5z"
});

var _ref101 = preact_compat_es["default"].createElement("path", {
  fill: "#3e2aa9",
  d: "M305 487h-2v-39h4v39h-2z"
});

var _ref102 = preact_compat_es["default"].createElement("path", {
  fill: "#bd0a46",
  d: "M285.5 448H283v-40h5v40h-2.5z"
});

var _ref103 = preact_compat_es["default"].createElement("path", {
  fill: "#3d29a5",
  d: "M308.5 487H307v-39h3v39h-1.5z"
});

var _ref104 = preact_compat_es["default"].createElement("path", {
  fill: "#b90945",
  d: "M289.5 448H288v-40h3v40h-1.5z"
});

var _ref105 = preact_compat_es["default"].createElement("path", {
  fill: "#3c28a2",
  d: "M311.5 487H310v-39h3v39h-1.5z"
});

var _ref106 = preact_compat_es["default"].createElement("path", {
  fill: "#b60944",
  d: "M292 448h-1v-40h2v40h-1z"
});

var _ref107 = preact_compat_es["default"].createElement("path", {
  fill: "#3b289f",
  d: "M313.7 477.2l-.3 10.3v-40l.3 9.7c.2 5.3.2 14.3 0 20z"
});

var _ref108 = preact_compat_es["default"].createElement("path", {
  fill: "#b40943",
  d: "M294.5 448H293v-40h3v40h-1.5z"
});

var _ref109 = preact_compat_es["default"].createElement("path", {
  fill: "#3a279d",
  d: "M316 487h-2v-39h4v39h-2z"
});

var _ref110 = preact_compat_es["default"].createElement("path", {
  fill: "#b10942",
  d: "M297 448h-1v-40h2v40h-1z"
});

var _ref111 = preact_compat_es["default"].createElement("path", {
  fill: "#545454",
  d: "M239.7 358.3l-.3 10.2v-41l.3 10.3c.2 5.6.2 14.8 0 20.4zm9 0l-.3 10.2v-41l.3 10.3c.2 5.6.2 14.8 0 20.4zm155 0l-.3 10.2v-41l.3 10.3c.2 5.6.2 14.8 0 20.4z"
});

var _ref112 = preact_compat_es["default"].createElement("path", {
  fill: "#392699",
  d: "M319.5 487H318v-39h3v39h-1.5z"
});

var _ref113 = preact_compat_es["default"].createElement("path", {
  fill: "#ad0940",
  d: "M299.5 448H298v-40h3v40h-1.5z"
});

var _ref114 = preact_compat_es["default"].createElement("path", {
  fill: "#ab0940",
  d: "M302 448h-1v-40h2v40h-1z"
});

var _ref115 = preact_compat_es["default"].createElement("path", {
  fill: "#382596",
  d: "M322 487h-1v-39h2v39h-1z"
});

var _ref116 = preact_compat_es["default"].createElement("path", {
  fill: "#515151",
  d: "M309.7 358.3l-.3 10.2v-41l.3 10.3c.2 5.6.2 14.8 0 20.4zm49 0l-.3 10.2v-41l.3 10.3c.2 5.6.2 14.8 0 20.4zm48 0l-.3 10.2v-41l.3 10.3c.2 5.6.2 14.8 0 20.4z"
});

var _ref117 = preact_compat_es["default"].createElement("path", {
  fill: "#372594",
  d: "M324.5 487H323v-39h3v39h-1.5z"
});

var _ref118 = preact_compat_es["default"].createElement("path", {
  fill: "#a9093e",
  d: "M305 448h-2v-40h4v40h-2z"
});

var _ref119 = preact_compat_es["default"].createElement("path", {
  fill: "#352491",
  d: "M327.5 487H326v-39h3v39h-1.5z"
});

var _ref120 = preact_compat_es["default"].createElement("path", {
  fill: "#4e4e4e",
  d: "M321.7 358.3l-.3 10.2v-41l.3 10.3c.2 5.6.2 14.8 0 20.4zm25 0l-.3 10.2v-41l.3 10.3c.2 5.6.2 14.8 0 20.4z"
});

var _ref121 = preact_compat_es["default"].createElement("path", {
  fill: "#a5083d",
  d: "M308.5 448H307v-40h3v40h-1.5z"
});

var _ref122 = preact_compat_es["default"].createElement("path", {
  fill: "#a2083c",
  d: "M311.5 448H310v-40h3v40h-1.5z"
});

var _ref123 = preact_compat_es["default"].createElement("path", {
  fill: "#34238d",
  d: "M330 487h-1v-39h2v39h-1z"
});

var _ref124 = preact_compat_es["default"].createElement("path", {
  fill: "#34238b",
  d: "M332 487h-1v-39h2v39h-1z"
});

var _ref125 = preact_compat_es["default"].createElement("path", {
  fill: "#9d083a",
  d: "M315.5 448H313v-40h5v40h-2.5z"
});

var _ref126 = preact_compat_es["default"].createElement("path", {
  fill: "#4a4a4a",
  d: "M224.7 358.3l-.3 10.2v-41l.3 10.3c.2 5.6.2 14.8 0 20.4zm39 0l-.3 10.2v-41l.3 10.3c.2 5.6.2 14.8 0 20.4zm148 0l-.3 10.2v-41l.3 10.3c.2 5.6.2 14.8 0 20.4z"
});

var _ref127 = preact_compat_es["default"].createElement("path", {
  fill: "#322289",
  d: "M334.5 487H333v-39h3v39h-1.5z"
});

var _ref128 = preact_compat_es["default"].createElement("path", {
  fill: "#990839",
  d: "M319.5 448H318v-40h3v40h-1.5z"
});

var _ref129 = preact_compat_es["default"].createElement("path", {
  fill: "#312185",
  d: "M338 487h-2v-39h4v39h-2z"
});

var _ref130 = preact_compat_es["default"].createElement("path", {
  fill: "#960838",
  d: "M322 448h-1v-40h2v40h-1z"
});

var _ref131 = preact_compat_es["default"].createElement("path", {
  fill: "#302082",
  d: "M341.5 487H340v-39h3v39h-1.5z"
});

var _ref132 = preact_compat_es["default"].createElement("path", {
  fill: "#940737",
  d: "M324.5 448H323v-40h3v40h-1.5z"
});

var _ref133 = preact_compat_es["default"].createElement("path", {
  fill: "#2f2080",
  d: "M344 487h-1v-39h2v39h-1z"
});

var _ref134 = preact_compat_es["default"].createElement("path", {
  fill: "#910735",
  d: "M327.5 448H326v-40h3v40h-1.5z"
});

var _ref135 = preact_compat_es["default"].createElement("path", {
  fill: "#2e1f7d",
  d: "M346.5 487H345v-39h3v39h-1.5z"
});

var _ref136 = preact_compat_es["default"].createElement("path", {
  fill: "#8d0734",
  d: "M330 448h-1v-40h2v40h-1z"
});

var _ref137 = preact_compat_es["default"].createElement("path", {
  fill: "#8b0734",
  d: "M332 448h-1v-40h2v40h-1z"
});

var _ref138 = preact_compat_es["default"].createElement("path", {
  fill: "#2d1e79",
  d: "M349.5 487H348v-39h3v39h-1.5z"
});

var _ref139 = preact_compat_es["default"].createElement("path", {
  fill: "#414141",
  d: "M278.7 358.3l-.3 10.2v-41l.3 10.3c.2 5.6.2 14.8 0 20.4zm138 0l-.3 10.2v-41l.3 10.3c.2 5.6.2 14.8 0 20.4zm56 0l-.3 10.2v-41l.3 10.3c.2 5.6.2 14.8 0 20.4z"
});

var _ref140 = preact_compat_es["default"].createElement("path", {
  fill: "#890732",
  d: "M335 448h-2v-40h4v40h-2z"
});

var _ref141 = preact_compat_es["default"].createElement("path", {
  fill: "#bf0000",
  d: "M474 208h-30V89h60v119h-30z"
});

var _ref142 = preact_compat_es["default"].createElement("path", {
  fill: "#00bf00",
  d: "M354 208h-30V89h60v119h-30z"
});

var _ref143 = preact_compat_es["default"].createElement("path", {
  fill: "#0000bf",
  d: "M534 208h-30V89l29.8.2 29.7.3.3 59.3.2 59.2h-30z"
});

var _ref144 = preact_compat_es["default"].createElement("path", {
  fill: "#2c1d76",
  d: "M352 487h-1v-39h2v39h-1z"
});

var _ref145 = preact_compat_es["default"].createElement("path", {
  fill: "#850731",
  d: "M338.5 448H337v-40h3v40h-1.5z"
});

var _ref146 = preact_compat_es["default"].createElement("path", {
  fill: "#2b1d74",
  d: "M354.5 487H353v-39h3v39h-1.5z"
});

var _ref147 = preact_compat_es["default"].createElement("path", {
  fill: "#3e3e3e",
  d: "M11 576H0v-7h22v7H11zm32.5 0H25v-7h37v7H43.5zm40 0H65v-7h37v7H83.5zm40 0H105v-7h37v7h-18.5zm40 0H145v-7h37v7h-18.5zm40 0H185v-7h37v7h-18.5zm40 0H225v-7h37v7h-18.5zm40 0H265v-7h37v7h-18.5zm40 0H305v-7h37v7h-18.5zm40 0H345v-7h37v7h-18.5zm40 0H385v-7h37v7h-18.5zm40 0H425v-7h37v7h-18.5zm40 0H465v-7h37v7h-18.5zm40 0H505v-7h37v7h-18.5zm40 0H545v-7h37v7h-18.5zm40 0H585v-7h37v7h-18.5zm40 0H625v-7h37v7h-18.5zm40 0H665v-7h37v7h-18.5zm40 0H705v-7h37v7h-18.5zm33 0H745v-7h23v7h-11.5zM11 567H0v-38h22v38H11zm32.5 0H25v-38h37v38H43.5zm40 0H65v-38h37v38H83.5zm40 0H105v-38h37v38h-18.5zm40 0H145v-38h37v38h-18.5zm40 0H185v-38h37v38h-18.5zm40 0H225v-38h37v38h-18.5zm40 0H265v-36.9l7.3 3.3a531 531 0 0 0 18.4 7.6l11.3 4.3V567h-18.5zm40 0H305v-21.2l1.8.7a262 262 0 0 0 30.4 7.1l4.8.7V567h-18.5zm40 0H345v-12.2l3.3.6a337.2 337.2 0 0 0 30.5 2.6h3.2v9h-18.5zm40 0H385v-8.7l16.3-1.1c8.9-.7 17.2-1.5 18.4-1.8l2.3-.6V567h-18.5zm40 0h-18.6l.3-6.1.3-6.2 11.5-2.3a436 436 0 0 0 18.3-4.2l6.7-2V567h-18.5zm40 0H465v-22h1.3c.6 0 8.4-3 17.2-6.6l17.3-7 1.2-.6V567h-18.5zm40 0H505v-38h37v38h-18.5zm40 0H545v-38h37v38h-18.5zm40 0H585v-38h37v38h-18.5zm40 0H625v-38h37v38h-18.5zm40 0H665v-38h37v38h-18.5zm40 0H705v-38h37v38h-18.5zm33 0H745v-38h23v38h-11.5zm-379.8-11.1a339.7 339.7 0 0 1-27.6-2.4l-4.1-.7V529h37v27l-5.3-.1zm12 0l-3.7.1v-27h37v23.8l-2.8.6c-1.5.4-8.1 1-14.7 1.6-6.6.5-13.7 1-15.8 1zm44.6-4.7l-8.3 1.5V529h37.1l-.3 7.7-.3 7.7-10 2.7c-5.5 1.4-13.7 3.3-18.3 4.1zm-94 .7a206.7 206.7 0 0 1-29-6.5L305 544v-15h37v23h-2.8zm-38-9c-.5 0-7.4-2.6-15.4-5.8-8.1-3.2-15.5-6.4-16.5-7l-1.9-1h17.3l17.2-.1v14h-.8zm166-.4l-2.3.6V529h34.5l-3.5 2a343.3 343.3 0 0 1-28.8 11.6zM11 527H0v-38h22v38H11zm32.5 0H25v-38h37v38H43.5zm40 0H65v-38h37v38H83.5zm40 0H105v-38h37v38h-18.5zm40 0H145v-38h37v38h-18.5zm40 0H185v-38h19l9 7.3 9 7.2V527h-18.5zm38.2 0H225v-21.1l1.3.7 5.7 4c2.5 1.8 9.4 6.2 15.5 9.8l11 6.6h-16.8zm41.8 0H265v-38h37v38h-18.5zm40 0H305v-38h37v38h-18.5zm40 0H345v-38h37v38h-18.5zm40 0H385v-38h37v38h-18.5zm40 0H425v-38h37v38h-18.5zm40 0H465v-38h37v38h-18.5zm42.3 0h-16.2l11-6.6a312 312 0 0 0 20.9-13.4c.3 0 .5 4.5.5 10v10h-16.2zm37.7 0H545v-22.8l6.3-5 9.2-7.6 3-2.5h9.3l9.2-.1v38h-18.5zm40 0H585v-38h37v38h-18.5zm40 0H625v-38h37v38h-18.5zm40 0H665v-38h37v38h-18.5zm40 0H705v-38h37v38h-18.5zm33 0H745v-38h23v38h-11.5zm-495.3-1c-.4 0-3.8-1.9-7.7-4-3.9-2.3-11.8-7.3-17.8-11.3l-10.7-7.1V489h37v37h-.8zm244.5 0h-.7v-37h37v14.7l-9.8 6.5c-5.3 3.6-13.3 8.6-17.8 11.2a84.4 84.4 0 0 1-8.7 4.6zm-283.9-30.7l-.3 5.6-7-5.7-7-5.7 6.9-.3c3.7-.2 7-.1 7.3.1.2.3.3 3 .1 6zm329.2 1.1l-6 4.7V489h14.2l-1 1.4a82 82 0 0 1-7.2 6zM11 487H0v-38h22v38H11zm32.5 0H25v-38h37v38H43.5zm40 0H65v-38h37v38H83.5zm40 0H105v-38h37v38h-18.5zm520 0H625v-38h37v38h-18.5zm40 0H665v-38h37v38h-18.5zm40 0H705v-38h37v38h-18.5zm33 0H745v-38h23v38h-11.5zM11 447H0v-38h22v38H11zm32.5 0H25v-38h37v38H43.5zm40 0H65v-38h37v38H83.5zm40 0H105v-38h37v38h-18.5zm520 0H625v-38h37v38h-18.5zm40 0H665v-38h37v38h-18.5zm40 0H705v-38h37v38h-18.5zm33 0H745v-38h23v38h-11.5zM11 407H0v-38h22v38H11zm32.5 0H25v-38h37v38H43.5zm40 0H65v-38h37v38H83.5zm39.5 0h-18v-38l10.6.2 10.6.3 4.2 11.5a347.4 347.4 0 0 0 10.6 25.6c0 .2-8.1.4-18 .4zm520.9 0h-18.1l.5-1.3 4.3-9.7c2-4.7 5.2-12.6 7-17.5l3.2-9 10.6-.3 10.6-.3V407h-18.1zm39.6 0H665v-38h37v38h-18.5zm40 0H705v-38h37v38h-18.5zm33 0H745v-38h23v38h-11.5zm-614.9-6a483 483 0 0 1-10.7-26.7l-1.8-5.3H142v16c0 8.8-.2 16-.4 16zm483.8 0c-.2.1-.4-7-.4-15.8V369h12.9l-2.3 6.8a326.9 326.9 0 0 1-10.2 25.1zm-341.7-42.8l-.3 10.3v-41l.3 10.3c.2 5.6.2 14.8 0 20.4zm48 0l-.3 10.3v-41l.3 10.3c.2 5.6.2 14.8 0 20.4zm5 0l-.3 10.3v-41l.3 10.3c.2 5.6.2 14.8 0 20.4zM11 367H0v-38h22v38H11zm32.5 0H25v-38h37v38H43.5zm40 0H65v-38h37v38H83.5zm31.5 0h-10v-38h11.8l1.1 6.8c.7 3.7 2.5 11.8 4.1 18.1 1.7 6.3 3 11.8 3 12.2v.9h-10zm20.1 0h-6.8l-3.6-14.8a368 368 0 0 1-4.2-19l-.7-4.2H142v38h-6.9zm496.8 0H625v-38h22.2l-.7 4.3c-.3 2.3-2.2 10.8-4.2 19l-3.5 14.7H632zm20.1 0h-10v-.6c0-.3 1.3-5.8 3-12.2 1.6-6.4 3.4-14.7 4-18.4l1.2-6.8H662v38h-10zm31.5 0H665v-38h37v38h-18.5zm40 0H705v-38h37v38h-18.5zm33 0H745v-38h23v38h-11.5zM11 327H0v-38h22v38H11zm32.5 0H25v-38h37v38H43.5zm40 0H65v-38h37v38H83.5zm27.1 0H105v-38h8.7l.6 13.3 1.3 19 .7 5.7h-5.7zm20 0h-11.3l-1.2-11.3c-.6-6.2-1.1-14.8-1.1-19V289h25v38h-11.4zm505.8 0H625v-38h25v7.7c0 4.2-.5 12.8-1.1 19l-1.2 11.3h-11.3zm20 0h-5.7l.7-5.8c.3-3.1 1-11.7 1.3-19l.6-13.2h8.7v38h-5.6zm27.1 0H665v-38h37v38h-18.5zm40 0H705v-38h37v38h-18.5zm33 0H745v-38h23v38h-11.5zM11 287H0v-38h22v38H11zm32.5 0H25v-38h37v38H43.5zm40 0H65v-38h37v38H83.5zm25.9 0H105v-38h11.3l-.7 5.8c-.3 3.1-1 11.7-1.3 19l-.6 13.2h-4.3zm20.1 0H117v-7.7c0-4.2.5-12.8 1.1-19l1.2-11.3H142v38h-12.5zm158.5 0h-48v-79h96v79h-48zm349.5 0H625v-38h22.7l1.2 11.3c.6 6.2 1.1 14.8 1.1 19v7.7h-12.5zm20.1 0h-4.3l-.6-13.3-1.3-19-.7-5.7H662v38h-4.4zm25.9 0H665v-38h37v38h-18.5zm40 0H705v-38h37v38h-18.5zm33 0H745v-38h23v38h-11.5zM11 247H0v-38h22v38H11zm32.5 0H25v-38h37v38H43.5zm40 0H65v-38h37v38H83.5zm27.4 0H105v-38h20v.9c0 .4-1.3 6-3 12.2-1.6 6.3-3.4 14.4-4 18.2l-1.2 6.7h-5.9zm20 0h-11l.6-4.3a368 368 0 0 1 4.2-19l3.6-14.7H142v38h-11zm505.2 0H625v-38h13.8l3.5 14.8c2 8 3.9 16.6 4.2 19l.7 4.2H636zm20 0h-5.9l-1.2-6.8c-.6-3.7-2.4-12-4-18.4-1.7-6.4-3-12-3-12.2v-.6h20v38h-5.9zm27.4 0H665v-38h37v38h-18.5zm40 0H705v-38h37v38h-18.5zm33 0H745v-38h23v38h-11.5zM11 207H0v-38h22v38H11zm32.5 0H25v-38h37v38H43.5zm40 0H65v-38h37v38H83.5zm32-.2l-10.5.3V169h18c9.9 0 18 .2 18 .4l-3.1 7.2c-1.8 3.8-5.1 12-7.5 18.4l-4.2 11.5-10.6.3zm20 .2H129l3.4-9.3a421.2 421.2 0 0 1 9.2-22.6c.2-.2.4 6.8.4 15.7V207h-6.5zm496 0H625v-16.2c0-8.9.2-16 .4-15.7a326.9 326.9 0 0 1 10.2 25.2l2.3 6.7h-6.5zm20 0h-10.6l-.4-1.3-4-11.2a309.2 309.2 0 0 0-10.5-25.1c0-.2 8.1-.4 18-.4h18v38h-10.5zm32 0H665v-38h37v38h-18.5zm40 0H705v-38h37v38h-18.5zm33 0H745v-38h23v38h-11.5zM11 167H0v-38h22v38H11zm32.5 0H25v-38h37v38H43.5zm40 0H65v-38h37v38H83.5zm40 0H105v-38h37v38h-18.5zm520 0H625v-38h37v38h-18.5zm40 0H665v-38h37v38h-18.5zm40 0H705v-38h37v38h-18.5zm33 0H745v-38h23v38h-11.5zM11 127H0V89h22v38H11zm32.5 0H25V89h37v38H43.5zm40 0H65V89h37v38H83.5zm40 0H105V89h37v38h-18.5zm520 0H625V89h37v38h-18.5zm40 0H665V89h37v38h-18.5zm40 0H705V89h37v38h-18.5zm33 0H745V89h23v38h-11.5zM11 87H0V49h22v38H11zm32.5 0H25V49h37v38H43.5zm40 0H65V49h37v38H83.5zm40 0H105V49h37v38h-18.5zm40 0H145V49h37v38h-18.5zm31 0H185V49h37v23.5l-9 7.3-9 7.2h-9.5zm20.8 0h-6.6l2.2-2.4c1.2-1.3 4.2-3.8 6.6-5.5l4.5-3.2V87h-6.7zm28.2 0H225V73l11.3-7.3c6.1-4 14.2-9 17.8-11 3.6-2 6.9-3.7 7.2-3.7h.7v36h-18.5zm40 0H265V49h37v38h-18.5zm40 0H305V49h37v38h-18.5zm40 0H345V49h37v38h-18.5zm40 0H385V49h37v38h-18.5zm40 0H425V49h37v38h-18.5zm40 0H465V49h37v38h-18.5zm40 0H505V49.8l7.8 4.3c4.2 2.3 12.5 7.4 18.5 11.2l10.7 7V87h-18.5zm28.6 0H545V74.9l6 4.7a82 82 0 0 1 7.1 6l1.1 1.4h-7zm20.1 0l-9.7-.2-8.7-7.1-8.8-7.2V49h37v38h-9.8zm31.3 0H585V49h37v38h-18.5zm40 0H625V49h37v38h-18.5zm40 0H665V49h37v38h-18.5zm40 0H705V49h37v38h-18.5zm33 0H745V49h23v38h-11.5zM226.2 69.4l-1.2.7V49h34.5l-10 5.8a347.2 347.2 0 0 0-23.3 14.6zm315.6.6a347.3 347.3 0 0 0-24.1-15.2L507.4 49H542v10.5c0 5.8-.1 10.5-.3 10.5zM11 47H0V9h22v38H11zm32.5 0H25V9h37v38H43.5zm40 0H65V9h37v38H83.5zm40 0H105V9h37v38h-18.5zm40 0H145V9h37v38h-18.5zm40 0H185V9h37v38h-18.5zm40 0H225V9h37v38h-18.5zm42.3 0h-16.3l1.5-1 15.7-6.4c7.8-3 14.4-5.6 14.7-5.6h.6v13h-16.3zm37.7 0H305V33l5.3-1.5a378.2 378.2 0 0 1 29.4-6.5h2.3v22h-18.5zm40 0H345V24.2l3.3-.6a337.2 337.2 0 0 1 30.5-2.6h3.2v26h-18.5zm40 0H385V21h3.8a326.7 326.7 0 0 1 30.4 2.6l2.8.6V47h-18.5zm40 0H425V24.3l8.2 1.5a321 321 0 0 1 18.2 4l10.1 2.7.3 7.3.3 7.2h-18.6zm38.3 0H465V34h1a345.5 345.5 0 0 1 31 12l1.5 1h-16.8zm41.7 0H505V9h37v38h-18.5zm40 0H545V9h37v38h-18.5zm40 0H585V9h37v38h-18.5zm40 0H625V9h37v38h-18.5zm40 0H665V9h37v38h-18.5zm40 0H705V9h37v38h-18.5zm33 0H745V9h23v38h-11.5zm-490.3-1.3l-1.2.5V9h37v22.8l-6.8 2.3c-3.7 1.2-11.4 4.2-17.2 6.6l-11.8 5zm235 .2a344.4 344.4 0 0 0-26-10.6L465 31.5V9h37v37h-.8zM306.9 30.5l-1.8.7V9h37v13.7l-4.8.7a262 262 0 0 0-30.4 7.2zm155 .4l-6.8-2c-3.6-1-11.7-3-18-4.3l-11.5-2.3-.3-6.7L425 9h37v11c0 6-.1 11-.3 10.9zm-113.6-9.3l-3.2.6V9h37v10h-3.3a337.2 337.2 0 0 0-30.4 2.6zm72.6.3a283.7 283.7 0 0 0-23.7-2.4l-12.1-.7V9h37v13l-1.3-.1zM11 7H0V0h22v7H11zm32.5 0H25V0h37v7H43.5zm40 0H65V0h37v7H83.5zm40 0H105V0h37v7h-18.5zm40 0H145V0h37v7h-18.5zm40 0H185V0h37v7h-18.5zm40 0H225V0h37v7h-18.5zm40 0H265V0h37v7h-18.5zm40 0H305V0h37v7h-18.5zm40 0H345V0h37v7h-18.5zm40 0H385V0h37v7h-18.5zm40 0H425V0h37v7h-18.5zm40 0H465V0h37v7h-18.5zm40 0H505V0h37v7h-18.5zm40 0H545V0h37v7h-18.5zm40 0H585V0h37v7h-18.5zm40 0H625V0h37v7h-18.5zm40 0H665V0h37v7h-18.5zm40 0H705V0h37v7h-18.5zm33 0H745V0h23v7h-11.5z"
});

var _ref148 = preact_compat_es["default"].createElement("path", {
  fill: "#820630",
  d: "M341.5 448H340v-40h3v40h-1.5z"
});

var _ref149 = preact_compat_es["default"].createElement("path", {
  fill: "#291c71",
  d: "M357.5 487H356v-39h3v39h-1.5z"
});

var _ref150 = preact_compat_es["default"].createElement("path", {
  fill: "#80062f",
  d: "M344 448h-1v-40h2v40h-1z"
});

var _ref151 = preact_compat_es["default"].createElement("path", {
  fill: "#7d062e",
  d: "M346.5 448H345v-40h3v40h-1.5z"
});

var _ref152 = preact_compat_es["default"].createElement("path", {
  fill: "#281b6d",
  d: "M360.5 487H359v-39h3v39h-1.5z"
});

var _ref153 = preact_compat_es["default"].createElement("path", {
  fill: "#281a6b",
  d: "M362.7 477.2l-.3 10.3v-40l.3 9.7c.2 5.3.2 14.3 0 20z"
});

var _ref154 = preact_compat_es["default"].createElement("path", {
  fill: "#79062d",
  d: "M349.5 448H348v-40h3v40h-1.5z"
});

var _ref155 = preact_compat_es["default"].createElement("path", {
  fill: "#261a69",
  d: "M364.5 487H363v-39h3v39h-1.5z"
});

var _ref156 = preact_compat_es["default"].createElement("path", {
  fill: "#76062c",
  d: "M352 448h-1v-40h2v40h-1z"
});

var _ref157 = preact_compat_es["default"].createElement("path", {
  fill: "#383838",
  d: "M299.7 358.3l-.3 10.2v-41l.3 10.3c.2 5.6.2 14.8 0 20.4zm69 0l-.3 10.2v-41l.3 10.3c.2 5.6.2 14.8 0 20.4zm53 0l-.3 10.2v-41l.3 10.3c.2 5.6.2 14.8 0 20.4zm46 0l-.3 10.2v-41l.3 10.3c.2 5.6.2 14.8 0 20.4z"
});

var _ref158 = preact_compat_es["default"].createElement("path", {
  fill: "#74062b",
  d: "M354.5 448H353v-40h3v40h-1.5z"
});

var _ref159 = preact_compat_es["default"].createElement("path", {
  fill: "#251965",
  d: "M368 487h-2v-39h4v39h-2z"
});

var _ref160 = preact_compat_es["default"].createElement("path", {
  fill: "#363636",
  d: "M219.7 358.3l-.3 10.2v-41l.3 10.3c.2 5.6.2 14.8 0 20.4zm49 0l-.3 10.2v-41l.3 10.3c.2 5.6.2 14.8 0 20.4z"
});

var _ref161 = preact_compat_es["default"].createElement("path", {
  fill: "#710529",
  d: "M358 448h-2v-40h4v40h-2z"
});

var _ref162 = preact_compat_es["default"].createElement("path", {
  fill: "#241862",
  d: "M371.5 487H370v-39h3v39h-1.5z"
});

var _ref163 = preact_compat_es["default"].createElement("path", {
  fill: "#231860",
  d: "M373.7 477.2l-.3 10.3v-40l.3 9.7c.2 5.3.2 14.3 0 20z"
});

var _ref164 = preact_compat_es["default"].createElement("path", {
  fill: "#6d0528",
  d: "M360.7 438.3l-.3 10.2v-41l.3 10.3c.2 5.6.2 14.8 0 20.4z"
});

var _ref165 = preact_compat_es["default"].createElement("path", {
  fill: "#6b0528",
  d: "M362 448h-1v-40h2v40h-1z"
});

var _ref166 = preact_compat_es["default"].createElement("path", {
  fill: "#22175e",
  d: "M375.5 487H374v-39h3v39h-1.5z"
});

var _ref167 = preact_compat_es["default"].createElement("path", {
  fill: "#690526",
  d: "M365 448h-2v-40h4v40h-2z"
});

var _ref168 = preact_compat_es["default"].createElement("path", {
  fill: "#211659",
  d: "M379 487h-2v-39h4v39h-2z"
});

var _ref169 = preact_compat_es["default"].createElement("path", {
  fill: "#303030",
  d: "M426.7 358.3l-.3 10.2v-41l.3 10.3c.2 5.6.2 14.8 0 20.4zm36 0l-.3 10.2v-41l.3 10.3c.2 5.6.2 14.8 0 20.4z"
});

var _ref170 = preact_compat_es["default"].createElement("path", {
  fill: "#650525",
  d: "M368.5 448H367v-40h3v40h-1.5z"
});

var _ref171 = preact_compat_es["default"].createElement("path", {
  fill: "#620524",
  d: "M371.5 448H370v-40h3v40h-1.5z"
});

var _ref172 = preact_compat_es["default"].createElement("path", {
  fill: "#201556",
  d: "M382 487h-1v-39h2v39h-1z"
});

var _ref173 = preact_compat_es["default"].createElement("path", {
  fill: "#1f1554",
  d: "M384 487h-1v-39h2v39h-1z"
});

var _ref174 = preact_compat_es["default"].createElement("path", {
  fill: "#600423",
  d: "M374 448h-1v-40h2v40h-1z"
});

var _ref175 = preact_compat_es["default"].createElement("path", {
  fill: "#2d2d2d",
  d: "M234.7 358.3l-.3 10.2v-41l.3 10.3c.2 5.6.2 14.8 0 20.4zm19 0l-.3 10.2v-41l.3 10.3c.2 5.6.2 14.8 0 20.4zm63 0l-.3 10.2v-41l.3 10.3c.2 5.6.2 14.8 0 20.4zm35 0l-.3 10.2v-41l.3 10.3c.2 5.6.2 14.8 0 20.4z"
});

var _ref176 = preact_compat_es["default"].createElement("path", {
  fill: "#1e1452",
  d: "M386.5 487H385v-39h3v39h-1.5z"
});

var _ref177 = preact_compat_es["default"].createElement("path", {
  fill: "#5e0422",
  d: "M376 448h-1v-40h2v40h-1z"
});

var _ref178 = preact_compat_es["default"].createElement("path", {
  fill: "#1d1350",
  d: "M389 487h-1v-39h2v39h-1z"
});

var _ref179 = preact_compat_es["default"].createElement("path", {
  fill: "#590421",
  d: "M379 448h-2v-40h4v40h-2z"
});

var _ref180 = preact_compat_es["default"].createElement("path", {
  fill: "#1c124d",
  d: "M391.5 487H390v-39h3v39h-1.5z"
});

var _ref181 = preact_compat_es["default"].createElement("path", {
  fill: "#560420",
  d: "M382 448h-1v-40h2v40h-1z"
});

var _ref182 = preact_compat_es["default"].createElement("path", {
  fill: "#282828",
  d: "M314.7 358.3l-.3 10.2v-41l.3 10.3c.2 5.6.2 14.8 0 20.4zm39 0l-.3 10.2v-41l.3 10.3c.2 5.6.2 14.8 0 20.4zm78 0l-.3 10.2v-41l.3 10.3c.2 5.6.2 14.8 0 20.4zm26 0l-.3 10.2v-41l.3 10.3c.2 5.6.2 14.8 0 20.4z"
});

var _ref183 = preact_compat_es["default"].createElement("path", {
  fill: "#54041f",
  d: "M384.5 448H383v-40h3v40h-1.5z"
});

var _ref184 = preact_compat_es["default"].createElement("path", {
  fill: "#1a1249",
  d: "M394.5 487H393v-39h3v39h-1.5z"
});

var _ref185 = preact_compat_es["default"].createElement("path", {
  fill: "#51041d",
  d: "M387 448h-1v-40h2v40h-1z"
});

var _ref186 = preact_compat_es["default"].createElement("path", {
  fill: "#262626",
  d: "M238.7 358.3l-.3 10.2v-41l.3 10.3c.2 5.6.2 14.8 0 20.4zm11 0l-.3 10.2v-41l.3 10.3c.2 5.6.2 14.8 0 20.4z"
});

var _ref187 = preact_compat_es["default"].createElement("path", {
  fill: "#4f041d",
  d: "M389 448h-1v-40h2v40h-1z"
});

var _ref188 = preact_compat_es["default"].createElement("path", {
  fill: "#191145",
  d: "M398 487h-2v-39h4v39h-2z"
});

var _ref189 = preact_compat_es["default"].createElement("path", {
  fill: "#4d031c",
  d: "M391.5 448H390v-40h3v40h-1.5z"
});

var _ref190 = preact_compat_es["default"].createElement("path", {
  fill: "#181042",
  d: "M401.5 487H400v-39h3v39h-1.5z"
});

var _ref191 = preact_compat_es["default"].createElement("path", {
  fill: "#49031a",
  d: "M395 448h-2v-40h4v40h-2z"
});

var _ref192 = preact_compat_es["default"].createElement("path", {
  fill: "#170f40",
  d: "M404 487h-1v-39h2v39h-1z"
});

var _ref193 = preact_compat_es["default"].createElement("path", {
  fill: "#160e3d",
  d: "M406.5 487H405v-39h3v39h-1.5z"
});

var _ref194 = preact_compat_es["default"].createElement("path", {
  fill: "#450319",
  d: "M398.5 448H397v-40h3v40h-1.5z"
});

var _ref195 = preact_compat_es["default"].createElement("path", {
  fill: "#202020",
  d: "M223.7 358.3l-.3 10.2v-41l.3 10.3c.2 5.6.2 14.8 0 20.4zm41 0l-.3 10.2v-41l.3 10.3c.2 5.6.2 14.8 0 20.4zm172 0l-.3 10.2v-41l.3 10.3c.2 5.6.2 14.8 0 20.4zm16 0l-.3 10.2v-41l.3 10.3c.2 5.6.2 14.8 0 20.4z"
});

var _ref196 = preact_compat_es["default"].createElement("path", {
  fill: "#420318",
  d: "M401.5 448H400v-40h3v40h-1.5z"
});

var _ref197 = preact_compat_es["default"].createElement("path", {
  fill: "#150e39",
  d: "M409.5 487H408v-39h3v39h-1.5z"
});

var _ref198 = preact_compat_es["default"].createElement("path", {
  fill: "#400317",
  d: "M404 448h-1v-40h2v40h-1z"
});

var _ref199 = preact_compat_es["default"].createElement("path", {
  fill: "#140d36",
  d: "M412 487h-1v-39h2v39h-1z"
});

var _ref200 = preact_compat_es["default"].createElement("path", {
  fill: "#1d1d1d",
  d: "M301.7 358.3l-.3 10.2v-41l.3 10.3c.2 5.6.2 14.8 0 20.4zm65 0l-.3 10.2v-41l.3 10.3c.2 5.6.2 14.8 0 20.4zm81 0l-.3 10.2v-41l.3 10.3c.2 5.6.2 14.8 0 20.4z"
});

var _ref201 = preact_compat_es["default"].createElement("path", {
  fill: "#3d0216",
  d: "M406.5 448H405v-40h3v40h-1.5z"
});

var _ref202 = preact_compat_es["default"].createElement("path", {
  fill: "#130c34",
  d: "M414.5 487H413v-39h3v39h-1.5z"
});

var _ref203 = preact_compat_es["default"].createElement("path", {
  fill: "#390215",
  d: "M409.5 448H408v-40h3v40h-1.5z"
});

var _ref204 = preact_compat_es["default"].createElement("path", {
  fill: "#120c32",
  d: "M417 487h-1v-39h2v39h-1z"
});

var _ref205 = preact_compat_es["default"].createElement("path", {
  fill: "#1a1a1a",
  d: "M279.7 358.3l-.3 10.2v-41l.3 10.3c.2 5.6.2 14.8 0 20.4zm50 0l-.3 10.2v-41l.3 10.3c.2 5.6.2 14.8 0 20.4zm9 0l-.3 10.2v-41l.3 10.3c.2 5.6.2 14.8 0 20.4zm103 0l-.3 10.2v-41l.3 10.3c.2 5.6.2 14.8 0 20.4z"
});

var _ref206 = preact_compat_es["default"].createElement("path", {
  fill: "#360214",
  d: "M412 448h-1v-40h2v40h-1z"
});

var _ref207 = preact_compat_es["default"].createElement("path", {
  fill: "#110b30",
  d: "M419 487h-1v-39h2v39h-1z"
});

var _ref208 = preact_compat_es["default"].createElement("path", {
  fill: "#340213",
  d: "M414.5 448H413v-40h3v40h-1.5z"
});

var _ref209 = preact_compat_es["default"].createElement("path", {
  fill: "#100a2d",
  d: "M421.5 487H420v-39h3v39h-1.5z"
});

var _ref210 = preact_compat_es["default"].createElement("path", {
  fill: "#310212",
  d: "M417.5 448H416v-40h3v40h-1.5z"
});

var _ref211 = preact_compat_es["default"].createElement("path", {
  fill: "#0f0a29",
  d: "M424.5 487H423v-39h3v39h-1.5z"
});

var _ref212 = preact_compat_es["default"].createElement("path", {
  fill: "#151515",
  d: "M282.7 358.3l-.3 10.2v-41l.3 10.3c.2 5.6.2 14.8 0 20.4zm160 0l-.3 10.2v-41l.3 10.3c.2 5.6.2 14.8 0 20.4zm4 0l-.3 10.2v-41l.3 10.3c.2 5.6.2 14.8 0 20.4z"
});

var _ref213 = preact_compat_es["default"].createElement("path", {
  fill: "#2d0210",
  d: "M421 448h-2v-40h4v40h-2z"
});

var _ref214 = preact_compat_es["default"].createElement("path", {
  fill: "#0d0825",
  d: "M428 487h-2v-39h4v39h-2z"
});

var _ref215 = preact_compat_es["default"].createElement("path", {
  fill: "#29010f",
  d: "M424.5 448H423v-40h3v40h-1.5z"
});

var _ref216 = preact_compat_es["default"].createElement("path", {
  fill: "#0c0822",
  d: "M431.5 487H430v-39h3v39h-1.5z"
});

var _ref217 = preact_compat_es["default"].createElement("path", {
  fill: "#25010d",
  d: "M428 448h-2v-40h4v40h-2z"
});

var _ref218 = preact_compat_es["default"].createElement("path", {
  fill: "#0b0720",
  d: "M434 487h-1v-39h2v39h-1z"
});

var _ref219 = preact_compat_es["default"].createElement("path", {
  fill: "#101010",
  d: "M220.7 358.3l-.3 10.2v-41l.3 10.3c.2 5.6.2 14.8 0 20.4zm47 0l-.3 10.2v-41l.3 10.3c.2 5.6.2 14.8 0 20.4zm56 0l-.3 10.2v-41l.3 10.3c.2 5.6.2 14.8 0 20.4zm21 0l-.3 10.2v-41l.3 10.3c.2 5.6.2 14.8 0 20.4zm93 0l-.3 10.2v-41l.3 10.3c.2 5.6.2 14.8 0 20.4z"
});

var _ref220 = preact_compat_es["default"].createElement("path", {
  fill: "#22010c",
  d: "M431.5 448H430v-40h3v40h-1.5z"
});

var _ref221 = preact_compat_es["default"].createElement("path", {
  fill: "#0a061d",
  d: "M436.5 487H435v-39h3v39h-1.5z"
});

var _ref222 = preact_compat_es["default"].createElement("path", {
  fill: "#20010b",
  d: "M434 448h-1v-40h2v40h-1z"
});

var _ref223 = preact_compat_es["default"].createElement("path", {
  fill: "#0e0e0e",
  d: "M307.7 358.3l-.3 10.2v-41l.3 10.3c.2 5.6.2 14.8 0 20.4zm53 0l-.3 10.2v-41l.3 10.3c.2 5.6.2 14.8 0 20.4zm91 0l-.3 10.2v-41l.3 10.3c.2 5.6.2 14.8 0 20.4z"
});

var _ref224 = preact_compat_es["default"].createElement("path", {
  fill: "#1d010a",
  d: "M436.5 448H435v-40h3v40h-1.5z"
});

var _ref225 = preact_compat_es["default"].createElement("path", {
  fill: "#09051a",
  d: "M439.5 487H438v-39h3v39h-1.5z"
});

var _ref226 = preact_compat_es["default"].createElement("path", {
  fill: "#0c0c0c",
  d: "M235.7 358.3l-.3 10.2v-41l.3 10.3c.2 5.6.2 14.8 0 20.4zm17 0l-.3 10.2v-41l.3 10.3c.2 5.6.2 14.8 0 20.4zm180 0l-.3 10.2v-41l.3 10.3c.2 5.6.2 14.8 0 20.4zm24 0l-.3 10.2v-41l.3 10.3c.2 5.6.2 14.8 0 20.4z"
});

var _ref227 = preact_compat_es["default"].createElement("path", {
  fill: "#1a0009",
  d: "M439.5 448H438v-40h3v40h-1.5z"
});

var _ref228 = preact_compat_es["default"].createElement("path", {
  fill: "#080516",
  d: "M442 487h-1v-39h2v39h-1z"
});

var _ref229 = preact_compat_es["default"].createElement("path", {
  fill: "#070414",
  d: "M444.5 487H443v-39h3v39h-1.5z"
});

var _ref230 = preact_compat_es["default"].createElement("path", {
  fill: "#160008",
  d: "M442 448h-1v-40h2v40h-1z"
});

var _ref231 = preact_compat_es["default"].createElement("path", {
  fill: "#060412",
  d: "M447 487h-1v-39h2v39h-1z"
});

var _ref232 = preact_compat_es["default"].createElement("path", {
  fill: "#140007",
  d: "M444.5 448H443v-40h3v40h-1.5z"
});

var _ref233 = preact_compat_es["default"].createElement("path", {
  fill: "#080808",
  d: "M237.7 358.3l-.3 10.2v-41l.3 10.3c.2 5.6.2 14.8 0 20.4zm13 0l-.3 10.2v-41l.3 10.3c.2 5.6.2 14.8 0 20.4zm177 0l-.3 10.2v-41l.3 10.3c.2 5.6.2 14.8 0 20.4z"
});

var _ref234 = preact_compat_es["default"].createElement("path", {
  fill: "#050310",
  d: "M449 487h-1v-39h2v39h-1z"
});

var _ref235 = preact_compat_es["default"].createElement("path", {
  fill: "#110006",
  d: "M447.5 448H446v-40h3v40h-1.5z"
});

var _ref236 = preact_compat_es["default"].createElement("path", {
  fill: "#04020d",
  d: "M452 487h-2v-39h4v39h-2z"
});

var _ref237 = preact_compat_es["default"].createElement("path", {
  fill: "#060606",
  d: "M308.7 358.3l-.3 10.2v-41l.3 10.3c.2 5.6.2 14.8 0 20.4zm14 0l-.3 10.2v-41l.3 10.3c.2 5.6.2 14.8 0 20.4zm23 0l-.3 10.2v-41l.3 10.3c.2 5.6.2 14.8 0 20.4zm14 0l-.3 10.2v-41l.3 10.3c.2 5.6.2 14.8 0 20.4zm102 0l-.3 10.2v-41l.3 10.3c.2 5.6.2 14.8 0 20.4z"
});

var _ref238 = preact_compat_es["default"].createElement("path", {
  fill: "#0d0004",
  d: "M451 448h-2v-40h4v40h-2z"
});

var _ref239 = preact_compat_es["default"].createElement("path", {
  fill: "#040404",
  d: "M222.7 358.3l-.3 10.2v-41l.3 10.3c.2 5.6.2 14.8 0 20.4zm43 0l-.3 10.2v-41l.3 10.3c.2 5.6.2 14.8 0 20.4zm157 0l-.3 10.2v-41l.3 10.3c.2 5.6.2 14.8 0 20.4zm44 0l-.3 10.2v-41l.3 10.3c.2 5.6.2 14.8 0 20.4z"
});

var _ref240 = preact_compat_es["default"].createElement("path", {
  fill: "#020109",
  d: "M455.5 487H454v-39h3v39h-1.5z"
});

var _ref241 = preact_compat_es["default"].createElement("path", {
  fill: "#090002",
  d: "M455 448h-2v-40h4v40h-2z"
});

var _ref242 = preact_compat_es["default"].createElement("path", {
  fill: "#010005",
  d: "M459 487h-2v-39h4v39h-2z"
});

var _ref243 = preact_compat_es["default"].createElement("path", {
  fill: "#050001",
  d: "M459 448h-2v-40h4v40h-2z"
});

var _ref244 = preact_compat_es["default"].createElement("path", {
  d: "M462.5 487H461v-79h3v79h-1.5zm-85.8-80l-.5 1.5-.1-20.3-.1-20.2h14.7l-6.7 18.8a6684 6684 0 0 1-7.3 20.2zm-155-48.8l-.3 10.3v-41l.3 10.3c.2 5.6.2 14.8 0 20.4zm15 0l-.3 10.3v-41l.3 10.3c.2 5.6.2 14.8 0 20.4zm15-10l-.2 20.3-.3-20.3-.2-20.2h-11v-39h142v39h-14l-.3 20.3-.2 20.2-.3-20.3-.2-20.2h-14l-.3 20.3-.2 20.2-.3-20.3-.2-20.2h-14l-.3 20.3-.2 20.2-.3-20.3-.2-20.2h-6l-.3 20.3-.2 20.2-.3-20.3-.2-20.2h-14l-.3 20.3-.2 20.2-.3-20.3-.2-20.2h-14l-.3 20.3-.2 20.2-.3-20.3-.2-20.2h-18v40h-2v-40h-13l-.3 20.3-.2 20.2-.3-20.3-.2-20.2h-14l-.3 20.3zm151 0l-.2 20.3-.3-20.3-.2-20.2h-17v-39h143v39h-56l-.3 20.3-.2 20.2-.3-20.3-.2-20.2h-53l-.3 20.3-.2 20.2-.3-20.3-.2-20.2h-4l-.3 20.3-.2 20.2-.3-20.3-.2-20.2h-4l-.3 20.3-.2 20.2-.3-20.3-.2-20.2h-4l-.3 20.3zM192.5 287H145v-79h95v79h-47.5zM593 208h-29V90.5l9.9 10.1c5.4 5.6 13.2 14.3 17.3 19.5a320.7 320.7 0 0 1 25.2 37.4l5.6 10V208h-29zm28.7-47a335.4 335.4 0 0 0-14-22.5c-3.3-5-9.4-13.2-13.5-18.4a354.5 354.5 0 0 0-18-20.3L565.7 89H622v36c0 19.8-.1 36-.3 36z"
});

var FuBK_testcard_vectorized_SvgComponent = function SvgComponent(props) {
  return preact_compat_es["default"].createElement("svg", FuBK_testcard_vectorized__extends({
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    width: 768,
    height: 576
  }, props), FuBK_testcard_vectorized__ref, FuBK_testcard_vectorized__ref2, _ref3, _ref4, _ref5, _ref6, _ref7, _ref8, _ref9, _ref10, _ref11, _ref12, _ref13, _ref14, _ref15, _ref16, _ref17, _ref18, _ref19, _ref20, _ref21, _ref22, _ref23, _ref24, _ref25, _ref26, _ref27, _ref28, _ref29, _ref30, _ref31, _ref32, _ref33, _ref34, _ref35, _ref36, _ref37, _ref38, _ref39, _ref40, _ref41, _ref42, _ref43, _ref44, _ref45, _ref46, _ref47, _ref48, _ref49, _ref50, _ref51, _ref52, _ref53, _ref54, _ref55, _ref56, _ref57, _ref58, _ref59, _ref60, _ref61, _ref62, _ref63, _ref64, _ref65, _ref66, _ref67, _ref68, _ref69, _ref70, _ref71, _ref72, _ref73, _ref74, _ref75, _ref76, _ref77, _ref78, _ref79, _ref80, _ref81, _ref82, _ref83, _ref84, _ref85, _ref86, _ref87, _ref88, _ref89, _ref90, _ref91, _ref92, _ref93, _ref94, _ref95, _ref96, _ref97, _ref98, _ref99, _ref100, _ref101, _ref102, _ref103, _ref104, _ref105, _ref106, _ref107, _ref108, _ref109, _ref110, _ref111, _ref112, _ref113, _ref114, _ref115, _ref116, _ref117, _ref118, _ref119, _ref120, _ref121, _ref122, _ref123, _ref124, _ref125, _ref126, _ref127, _ref128, _ref129, _ref130, _ref131, _ref132, _ref133, _ref134, _ref135, _ref136, _ref137, _ref138, _ref139, _ref140, _ref141, _ref142, _ref143, _ref144, _ref145, _ref146, _ref147, _ref148, _ref149, _ref150, _ref151, _ref152, _ref153, _ref154, _ref155, _ref156, _ref157, _ref158, _ref159, _ref160, _ref161, _ref162, _ref163, _ref164, _ref165, _ref166, _ref167, _ref168, _ref169, _ref170, _ref171, _ref172, _ref173, _ref174, _ref175, _ref176, _ref177, _ref178, _ref179, _ref180, _ref181, _ref182, _ref183, _ref184, _ref185, _ref186, _ref187, _ref188, _ref189, _ref190, _ref191, _ref192, _ref193, _ref194, _ref195, _ref196, _ref197, _ref198, _ref199, _ref200, _ref201, _ref202, _ref203, _ref204, _ref205, _ref206, _ref207, _ref208, _ref209, _ref210, _ref211, _ref212, _ref213, _ref214, _ref215, _ref216, _ref217, _ref218, _ref219, _ref220, _ref221, _ref222, _ref223, _ref224, _ref225, _ref226, _ref227, _ref228, _ref229, _ref230, _ref231, _ref232, _ref233, _ref234, _ref235, _ref236, _ref237, _ref238, _ref239, _ref240, _ref241, _ref242, _ref243, _ref244);
};

/* harmony default export */ var FuBK_testcard_vectorized = (__webpack_require__.p + "svgs/FuBK_testcard_vectorized.232c461c.svg");

// CONCATENATED MODULE: ./components/videoPlayer/index.js


function videoPlayer__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function videoPlayer__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function videoPlayer__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var videoPlayer_VideoPlayer = function (_Component) {
  videoPlayer__inherits(VideoPlayer, _Component);

  function VideoPlayer() {
    videoPlayer__classCallCheck(this, VideoPlayer);

    return videoPlayer__possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  VideoPlayer.prototype.render = function render(props) {
    var bgImageStyle = 'background-image: url(' + FuBK_testcard_vectorized + ')';
    return Object(preact_min["h"])(
      'div',
      { className: props.className },
      Object(preact_min["h"])(
        'div',
        { className: videoPlayer_style_default.a.sizer },
        props.activeVideo.src ? Object(preact_min["h"])('video', {
          className: videoPlayer_style_default.a.video,
          controls: true,
          autoPlay: true,
          src: props.activeVideo.src,
          style: bgImageStyle
        }) : Object(preact_min["h"])('div', { className: videoPlayer_style_default.a.poster, style: bgImageStyle })
      )
    );
  };

  return VideoPlayer;
}(preact_min["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    activeVideo: state.home.activeVideo
  };
};

/* harmony default export */ var videoPlayer = (connect(mapStateToProps)(videoPlayer_VideoPlayer));
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
    // TODO nicer style classes; cleanup stylesheet
    var classNames = {
      root: tagsEditable_style_default.a['react-tags'],
      rootFocused: tagsEditable_style_default.a['is-focused'],
      selected: tagsEditable_style_default.a['react-tags__selected'],
      selectedTag: tagsEditable_style_default.a['react-tags__selected-tag'],
      selectedTagName: tagsEditable_style_default.a['react-tags__selected-tag-name'],
      search: tagsEditable_style_default.a['react-tags__search'],
      searchInput: tagsEditable_style_default.a['react-tags__search-input'],
      suggestions: tagsEditable_style_default.a['react-tags__suggestions'],
      suggestionActive: tagsEditable_style_default.a['is-active']
    };

    return Object(preact_min["h"])(ReactTags_default.a, {
      tags: this.state.tags,
      suggestions: this.state.suggestions,
      allowNew: true,
      autofocus: false,
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

function _objectWithoutProperties(source, excluded) {
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

var isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined';

var isIE = isBrowser ? !!document.documentElement.currentStyle : false;
var hiddenTextarea = isBrowser && document.createElement('textarea');
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

  if (isIE && boxSizing === 'border-box') {
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
var es_noop = function noop() {}; // IE11 has a problem with eval source maps, can be reproduced with:
// eval('"use strict"; var onNextFrame = window.cancelAnimationFrame; onNextFrame(4);')
// so we bind window as context in dev modes


var es__ref = isBrowser && window.requestAnimationFrame ?  true ? [window.requestAnimationFrame, window.cancelAnimationFrame] : [window.requestAnimationFrame.bind(window), window.cancelAnimationFrame.bind(window)] : [setTimeout, clearTimeout];
var onNextFrame = es__ref[0];
var clearNextFrameAction = es__ref[1];

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
        callback = es_noop;
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
        props = _objectWithoutProperties(_props, ["minRows", "maxRows", "onHeightChange", "useCacheForDOMMeasurements", "inputRef"]);
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
  onChange: es_noop,
  onHeightChange: es_noop,
  useCacheForDOMMeasurements: false
};

/* harmony default export */ var react_textarea_autosize_es = (es_TextareaAutosize);
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
    return Object(preact_min["h"])(react_textarea_autosize_es, inlineEditor__extends({}, props, {
      className: inlineEditor_style_default.a.textarea,
      onChange: this.handleChange,
      onKeyDown: this.handleKeyDown,
      useCacheForDOMMeasurements: true
    }));
  };

  return InlineEditor;
}(preact_min["Component"]);


// CONCATENATED MODULE: ./components/metaEditable/actions.js
function saveDataSuccess(data) {
  return {
    type: 'SAVE_META_SUCCESS',
    data: data
  };
}

function saveDataFailure(error) {
  return {
    type: 'SAVE_META_ERROR',
    error: error
  };
}

function saveData(newMeta, src) {
  return function (dispatch) {
    dispatch({
      type: 'SAVING_META',
      newMeta: newMeta
    });

    return fetch(src.replace('video.mp4', 'meta.json'), {
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
      return response.json();
    }).then(function (json) {
      console.log('meta saved, received new data', json);
      setTimeout(function () {
        dispatch(saveDataSuccess(json));
      }, 3000);
    }).catch(function (error) {
      return dispatch(saveDataFailure(error));
    });
  };
}
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
// CONCATENATED MODULE: ../node_modules/preact-cli/lib/lib/webpack/dummy-loader.js!./components/metaEditable/index.js
var metaEditable__extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };



function metaEditable__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function metaEditable__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function metaEditable__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



 // TODO is this good or is there any other solution?









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

      _this.props.handleSave(_this.state.meta, _this.props.src);

      // end edit mode
      Object(preact_router_es["route"])('/' + _this.props.meta.id + '/' + _this.props.meta.slug);
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
      meta: metaEditable__extends({}, props.meta)
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

  MetaEditable.prototype.componentWillMount = function componentWillMount() {
    // TODO call this on componentWillReceiveProps?
    // TODO combine these two iterations, so both keys will be returned without iterating twice
    var peopleSuggestions = this.getListOfArrayKey(this.props.data, 'people');
    var tagsSuggestions = this.getListOfArrayKey(this.props.data, 'tags');
    this.setState({ peopleSuggestions: peopleSuggestions, tagsSuggestions: tagsSuggestions });
  };

  MetaEditable.prototype.render = function render(props, state) {
    return Object(preact_min["h"])(
      'div',
      { className: meta_style_default.a.meta },
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
            onChange: this.handleTitleChange
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
            onChange: this.handlePeopleChange
          })
        ),
        Object(preact_min["h"])(
          'div',
          { className: meta_style_default.a.tags },
          Object(preact_min["h"])(tagsEditable_TagsEditable, {
            tags: state.meta.tags,
            suggestions: state.tagsSuggestions,
            placeholder: 'Add tag',
            onChange: this.handleTagsChange
          })
        ),
        Object(preact_min["h"])(
          'div',
          { className: meta_style_default.a.description },
          Object(preact_min["h"])(inlineEditor_InlineEditor, {
            value: state.meta.description,
            placeholder: 'Enter description...',
            onChange: this.handleDescriptionChange
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

var metaEditable_mapStateToProps = function mapStateToProps(state) {
  return {
    data: state.home.data
  };
};

var metaEditable_mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    handleSave: function handleSave(data, src) {
      return dispatch(saveData(data, src));
    }
  };
};

/* harmony default export */ var metaEditable = (connect(metaEditable_mapStateToProps, metaEditable_mapDispatchToProps)(metaEditable_MetaEditable));
// CONCATENATED MODULE: ./components/activeMetaContainer/index.js


function activeMetaContainer__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function activeMetaContainer__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function activeMetaContainer__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var activeMetaContainer__ref = Object(preact_min["h"])(
  'h1',
  null,
  'Welcome to SBideo!'
);

var activeMetaContainer__ref2 = Object(preact_min["h"])(
  'p',
  null,
  'Just search and select a video below.'
);

var activeMetaContainer_ActiveMetaContainer = function (_Component) {
  activeMetaContainer__inherits(ActiveMetaContainer, _Component);

  function ActiveMetaContainer() {
    activeMetaContainer__classCallCheck(this, ActiveMetaContainer);

    return activeMetaContainer__possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  ActiveMetaContainer.prototype.render = function render(props) {
    var meta = props.activeVideo.meta;
    if (meta && Object.keys(meta).length > 0) {
      return Object(preact_min["h"])(
        'div',
        { className: props.className },
        props.editMode ? Object(preact_min["h"])(metaEditable, {
          meta: meta,
          src: props.activeVideo.src,
          showTitle: 'true',
          onSave: this.onSave
        }) : Object(preact_min["h"])(meta_Meta, { meta: meta, showTitle: 'true' })
      );
    } else {
      return Object(preact_min["h"])(
        'div',
        { className: props.className },
        activeMetaContainer__ref,
        activeMetaContainer__ref2
      );
    }
  };

  return ActiveMetaContainer;
}(preact_min["Component"]);

var activeMetaContainer_mapStateToProps = function mapStateToProps(state) {
  return {
    activeVideo: state.home.activeVideo,
    editMode: state.home.editMode
  };
};

/* harmony default export */ var activeMetaContainer = (connect(activeMetaContainer_mapStateToProps)(activeMetaContainer_ActiveMetaContainer));
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

var videoContainer_mapStateToProps = function mapStateToProps(state) {
  return {
    activeVideo: state.home.activeVideo
  };
};

/* harmony default export */ var videoContainer = (connect(videoContainer_mapStateToProps)(videoContainer_VideoContainer));
// EXTERNAL MODULE: ./components/search/style.scss
var search_style = __webpack_require__("J4GW");
var search_style_default = /*#__PURE__*/__webpack_require__.n(search_style);

// EXTERNAL MODULE: ../node_modules/fuzzysort/fuzzysort.js
var fuzzysort = __webpack_require__("GlPB");
var fuzzysort_default = /*#__PURE__*/__webpack_require__.n(fuzzysort);

// CONCATENATED MODULE: ./components/search/actions.js
function actions_setSearchResults(data) {
  return {
    type: 'SET_SEARCH_RESULTS',
    data: data
  };
}
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
        this.state.searchTerm && Object(preact_min["h"])(
          'button',
          { onClick: this.resetSearch, className: search_style_default.a.resetButton },
          Object(preact_min["h"])(octicon, { name: 'x', className: search_style_default.a.resetIcon })
        )
      )
    );
  };

  return Search;
}(preact_min["Component"]);

var search_mapStateToProps = function mapStateToProps(state) {
  return {
    data: state.home.data
  };
};

var search_mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    setSearchResults: function setSearchResults(data) {
      return dispatch(actions_setSearchResults(data));
    }
  };
};

/* harmony default export */ var search = (connect(search_mapStateToProps, search_mapDispatchToProps)(search_Search));
// CONCATENATED MODULE: ./routes/home/actions.js
function retrieveDataSuccess(newData) {
  return {
    type: 'RETRIEVE_DATA_SUCCESS',
    data: newData
  };
}

function retrieveDataFailure(error) {
  return {
    type: 'RETRIEVE_DATA_ERROR',
    data: error
  };
}

function actions_retrieveData() {
  return function (dispatch) {
    fetch("/SBideo/items-demo.json").then(function (response) {
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response.json();
    }).then(function (json) {
      dispatch(retrieveDataSuccess(json));
    }).catch(function (error) {
      return dispatch(retrieveDataFailure(error));
    });
  };
}

function actions_setActiveVideo(video) {
  return {
    type: 'SET_ACTIVE_VIDEO',
    video: video
  };
}

function actions_announceEditMode(editing) {
  return {
    type: 'SET_EDIT_MODE',
    editing: editing
  };
}
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
        context.break();
      }
    }, { getChildren: function getChildren(node) {
        return node.items;
      } });
    return result;
  };

  Home.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    var id = nextProps.id,
        data = nextProps.data;


    var video = id && id.length > 0 ? this.getVideoById(data, id) : null;

    if (video) {
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

var home_mapStateToProps = function mapStateToProps(state) {
  return {
    data: state.home.data,
    searchResults: state.home.searchResults
  };
};

var home_mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    retrieveData: function retrieveData() {
      return dispatch(actions_retrieveData());
    },
    setActiveVideo: function setActiveVideo(video) {
      return dispatch(actions_setActiveVideo(video));
    },
    announceEditMode: function announceEditMode(editing) {
      return dispatch(actions_announceEditMode(editing));
    }
  };
};

/* harmony default export */ var home = (connect(home_mapStateToProps, home_mapDispatchToProps)(home_Home));
// EXTERNAL MODULE: ../node_modules/redux-thunk/lib/index.js
var lib = __webpack_require__("i/8a");
var lib_default = /*#__PURE__*/__webpack_require__.n(lib);

// CONCATENATED MODULE: ./routes/home/reducer.js
var reducer__extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };



var reducer_initialState = {
  data: [],
  activeVideo: {
    meta: {},
    src: ''
  },
  newData: null,
  editMode: false,
  searchResults: null
};

var reducer_reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : reducer_initialState;
  var action = arguments[1];

  console.log('reducer', action);
  switch (action.type) {
    case 'SET_ACTIVE_VIDEO':
      return reducer__extends({}, state, {
        activeVideo: action.video
      });
    case 'SET_EDIT_MODE':
      return reducer__extends({}, state, {
        editMode: action.editing
      });
    case 'SAVING_META':
      return reducer__extends({}, state, {
        data: reducer_setNewMetaInTree(reducer__extends({}, state.data), action.newMeta)
      });
    case 'RETRIEVE_DATA_SUCCESS':
    case 'SAVE_META_SUCCESS':
      return reducer__extends({}, state, {
        data: action.data
      });
    case 'SAVE_META_FAILURE':
      return state;
    case 'SET_SEARCH_RESULTS':
      return reducer__extends({}, state, {
        searchResults: action.data
      });
    default:
      return state;
  }
};

var reducer_setNewMetaInTree = function setNewMetaInTree(tree, newMeta) {
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

/* harmony default export */ var home_reducer = (reducer_reducer);
// CONCATENATED MODULE: ./reducers.js



var reducers_reducers = combineReducers({
  home: home_reducer
  // add more reducers here
});

/* harmony default export */ var reducers_0 = (reducers_reducers);
// CONCATENATED MODULE: ./app.js


function app__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function app__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function app__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }










if (false) {
  require('preact/debug');
}

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
    var store = createStore_createStore(reducers_0, applyMiddleware(lib_default.a));
    var createHashHistory = typeof document !== undefined && "github" === 'github' ? __webpack_require__("nqnI") : function () {
      return null;
    };

    return Object(preact_min["h"])(
      preact_redux_esm_Provider,
      { store: store },
      Object(preact_min["h"])(
        'div',
        { id: 'app' },
        Object(preact_min["h"])(
          preact_router_es["Router"],
          { history: createHashHistory(), onChange: this.handleRoute },
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

/* harmony default export */ var index_0 = __webpack_exports__["default"] = (app_App);

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
module.exports = {"icon":"icon__s7ZQj","editButton":"editButton__2a7gk","meta":"meta__1Dx-r","people":"people__3DRyi","tags":"tags__3TXqc","tag":"tag__1KJwZ","description":"description__1nwmV"};

/***/ }),

/***/ "LTbr":
/***/ (function(module, exports, __webpack_require__) {

/* smoothscroll v0.4.0 - 2017 - Dustan Kasten, Jeremias Menichelli - MIT License */
(function () {
  'use strict';

  /*
   * aliases
   * w: window global object
   * d: document
   */

  var w = window;
  var d = document;

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

  // polyfill
  function polyfill() {
    // return if scroll behavior is supported and polyfill is not forced
    if ('scrollBehavior' in d.documentElement.style && w.__forceSmoothScrollPolyfill__ !== true) {
      return;
    }

    // globals
    var Element = w.HTMLElement || w.Element;
    var SCROLL_TIME = 468;

    /*
     * IE has rounding bug rounding down clientHeight and clientWidth and
     * rounding up scrollHeight and scrollWidth causing false positives
     * on hasScrollableSpace
     */
    var ROUNDING_TOLERANCE = isMicrosoftBrowser(w.navigator.userAgent) ? 1 : 0;

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
          throw new SyntaxError('Value couldn\'t be converted');
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

/***/ "Lcy3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

var _react = __webpack_require__("eW0v");

var _propTypes = __webpack_require__("5D9O");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

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

var Manager = function (_Component) {
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
        return (0, _react.createElement)(tag, restProps, children);
      } else {
        return children;
      }
    }
  }]);

  return Manager;
}(_react.Component);

Manager.childContextTypes = {
  popperManager: _propTypes2.default.object.isRequired
};
Manager.propTypes = {
  tag: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.bool]),
  children: _propTypes2.default.oneOfType([_propTypes2.default.node, _propTypes2.default.func])
};
Manager.defaultProps = {
  tag: 'div'
};
exports.default = Manager;

/***/ }),

/***/ "Lglr":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"home":"home__1CGvB"};

/***/ }),

/***/ "LkZ7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ponyfill_js__ = __webpack_require__("JZ8d");
/* global window */


var root;

if (typeof self !== 'undefined') {
  root = self;
} else if (typeof window !== 'undefined') {
  root = window;
} else if (typeof global !== 'undefined') {
  root = global;
} else if (true) {
  root = module;
} else {
  root = Function('return this')();
}

var result = Object(__WEBPACK_IMPORTED_MODULE_0__ponyfill_js__["a" /* default */])(root);
/* harmony default export */ __webpack_exports__["a"] = (result);
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("pv+l")(module)))

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

/***/ "XOCG":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */



/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var __DEV__ = "production" !== 'production';

var warning = function warning() {};

if (__DEV__) {
  warning = function warning(condition, format, args) {
    var len = arguments.length;
    args = new Array(len > 2 ? len - 2 : 0);
    for (var key = 2; key < len; key++) {
      args[key - 2] = arguments[key];
    }
    if (format === undefined) {
      throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
    }

    if (format.length < 10 || /^[s\W]*$/.test(format)) {
      throw new Error('The warning format should be able to uniquely identify this ' + 'warning. Please, use a more descriptive format than: ' + format);
    }

    if (!condition) {
      var argIndex = 0;
      var message = 'Warning: ' + format.replace(/%s/g, function () {
        return args[argIndex++];
      });
      if (typeof console !== 'undefined') {
        console.error(message);
      }
      try {
        // This error was thrown as a convenience so that you can use this stack
        // to find the callsite that caused this warning to fire.
        throw new Error(message);
      } catch (x) {}
    }
  };
}

module.exports = warning;

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

/***/ "fU8T":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
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

var NODE_ENV = "production";

var invariant = function invariant(condition, format, a, b, c, d, e, f) {
  if (NODE_ENV !== 'production') {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  }

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
};

module.exports = invariant;

/***/ }),

/***/ "i/8a":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
function createThunkMiddleware(extraArgument) {
  return function (_ref) {
    var dispatch = _ref.dispatch,
        getState = _ref.getState;
    return function (next) {
      return function (action) {
        if (typeof action === 'function') {
          return action(dispatch, getState, extraArgument);
        }

        return next(action);
      };
    };
  };
}

var thunk = createThunkMiddleware();
thunk.withExtraArgument = createThunkMiddleware;

exports['default'] = thunk;

/***/ }),

/***/ "l262":
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

/***/ "lo/u":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/**!
 * @fileOverview Kickass library to create and place poppers near their reference elements.
 * @version 1.12.9
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
for (var i = 0; i < longerTimeoutBrowsers.length; i += 1) {
  if (isBrowser && navigator.userAgent.indexOf(longerTimeoutBrowsers[i]) >= 0) {
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

  if (/(auto|scroll)/.test(overflow + overflowY + overflowX)) {
    return element;
  }

  return getScrollParent(getParentNode(element));
}

/**
 * Returns the offset parent of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} offset parent
 */
function getOffsetParent(element) {
  // NOTE: 1 DOM access here
  var offsetParent = element && element.offsetParent;
  var nodeName = offsetParent && offsetParent.nodeName;

  if (!nodeName || nodeName === 'BODY' || nodeName === 'HTML') {
    if (element) {
      return element.ownerDocument.documentElement;
    }

    return document.documentElement;
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

/**
 * Tells if you are running Internet Explorer 10
 * @method
 * @memberof Popper.Utils
 * @returns {Boolean} isIE10
 */
var isIE10 = undefined;

var isIE10$1 = function isIE10$1() {
  if (isIE10 === undefined) {
    isIE10 = navigator.appVersion.indexOf('MSIE 10') !== -1;
  }
  return isIE10;
};

function getSize(axis, body, html, computedStyle) {
  return Math.max(body['offset' + axis], body['scroll' + axis], html['client' + axis], html['offset' + axis], html['scroll' + axis], isIE10$1() ? html['offset' + axis] + computedStyle['margin' + (axis === 'Height' ? 'Top' : 'Left')] + computedStyle['margin' + (axis === 'Height' ? 'Bottom' : 'Right')] : 0);
}

function getWindowSizes() {
  var body = document.body;
  var html = document.documentElement;
  var computedStyle = isIE10$1() && getComputedStyle(html);

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

var _extends = Object.assign || function (target) {
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
  return _extends({}, offsets, {
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
  if (isIE10$1()) {
    try {
      rect = element.getBoundingClientRect();
      var scrollTop = getScroll(element, 'top');
      var scrollLeft = getScroll(element, 'left');
      rect.top += scrollTop;
      rect.left += scrollLeft;
      rect.bottom += scrollTop;
      rect.right += scrollLeft;
    } catch (err) {}
  } else {
    rect = element.getBoundingClientRect();
  }

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
  var isIE10 = isIE10$1();
  var isHTML = parent.nodeName === 'HTML';
  var childrenRect = getBoundingClientRect(children);
  var parentRect = getBoundingClientRect(parent);
  var scrollParent = getScrollParent(children);

  var styles = getStyleComputedProperty(parent);
  var borderTopWidth = parseFloat(styles.borderTopWidth, 10);
  var borderLeftWidth = parseFloat(styles.borderLeftWidth, 10);

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

  if (isIE10 ? parent.contains(scrollParent) : parent === scrollParent && scrollParent.nodeName !== 'BODY') {
    offsets = includeScroll(offsets, parent);
  }

  return offsets;
}

function getViewportOffsetRectRelativeToArtbitraryNode(element) {
  var html = element.ownerDocument.documentElement;
  var relativeOffset = getOffsetRectRelativeToArbitraryNode(element, html);
  var width = Math.max(html.clientWidth, window.innerWidth || 0);
  var height = Math.max(html.clientHeight, window.innerHeight || 0);

  var scrollTop = getScroll(html);
  var scrollLeft = getScroll(html, 'left');

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
 * Computed the boundaries limits and return them
 * @method
 * @memberof Popper.Utils
 * @param {HTMLElement} popper
 * @param {HTMLElement} reference
 * @param {number} padding
 * @param {HTMLElement} boundariesElement - Element used to define the boundaries
 * @returns {Object} Coordinates of the boundaries
 */
function getBoundaries(popper, reference, padding, boundariesElement) {
  // NOTE: 1 DOM access here
  var boundaries = { top: 0, left: 0 };
  var offsetParent = findCommonOffsetParent(popper, reference);

  // Handle viewport case
  if (boundariesElement === 'viewport') {
    boundaries = getViewportOffsetRectRelativeToArtbitraryNode(offsetParent);
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

    var offsets = getOffsetRectRelativeToArbitraryNode(boundariesNode, offsetParent);

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
    return _extends({
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
 * @returns {Object} An object containing the offsets which will be applied to the popper
 */
function getReferenceOffsets(state, popper, reference) {
  var commonOffsetParent = findCommonOffsetParent(popper, reference);
  return getOffsetRectRelativeToArbitraryNode(reference, commonOffsetParent);
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
  data.offsets.reference = getReferenceOffsets(this.state, this.popper, this.reference);

  // compute auto placement, store placement inside the data object,
  // modifiers will be able to edit `placement` if needed
  // and refer to originalPlacement to know the original value
  data.placement = computeAutoPlacement(this.options.placement, data.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding);

  // store the computed placement inside `originalPlacement`
  data.originalPlacement = data.placement;

  // compute the popper offsets
  data.offsets.popper = getPopperOffsets(this.popper, data.offsets.reference, data.placement);
  data.offsets.popper.position = 'absolute';

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

  for (var i = 0; i < prefixes.length - 1; i++) {
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
    this.popper.style.left = '';
    this.popper.style.position = '';
    this.popper.style.top = '';
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
 * @param {HTMLElement} popper - The HTML element used as popper.
 * @param {Object} options - Popper.js options
 */
function applyStyleOnLoad(reference, popper, options, modifierOptions, state) {
  // compute reference element offsets
  var referenceOffsets = getReferenceOffsets(state, popper, reference);

  // compute auto placement, store placement inside the data object,
  // modifiers will be able to edit `placement` if needed
  // and refer to originalPlacement to know the original value
  var placement = computeAutoPlacement(options.placement, referenceOffsets, popper, reference, options.modifiers.flip.boundariesElement, options.modifiers.flip.padding);

  popper.setAttribute('x-placement', placement);

  // Apply `position` to popper before anything else because
  // without the position applied we can't guarantee correct computations
  setStyles(popper, { position: 'absolute' });

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

  // floor sides to avoid blurry text
  var offsets = {
    left: Math.floor(popper.left),
    top: Math.floor(popper.top),
    bottom: Math.floor(popper.bottom),
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
  data.attributes = _extends({}, attributes, data.attributes);
  data.styles = _extends({}, styles, data.styles);
  data.arrowStyles = _extends({}, data.offsets.arrow, data.arrowStyles);

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

  var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, options.boundariesElement);

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
      data.offsets.popper = _extends({}, data.offsets.popper, getPopperOffsets(data.instance.popper, data.offsets.reference, data.placement));

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

  var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, boundariesElement);
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
    popper = _extends({}, popper, check[side](placement));
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

    data.offsets.popper = _extends({}, popper, shiftOffsets[shiftvariation]);
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
var modifiers = {
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
  modifiers: modifiers
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
var Popper = function () {
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
    this.options = _extends({}, Popper.Defaults, options);

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
    Object.keys(_extends({}, Popper.Defaults.modifiers, options.modifiers)).forEach(function (name) {
      _this.options.modifiers[name] = _extends({}, Popper.Defaults.modifiers[name] || {}, options.modifiers ? options.modifiers[name] : {});
    });

    // Refactoring modifiers' list (Object => Array)
    this.modifiers = Object.keys(this.options.modifiers).map(function (name) {
      return _extends({
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

Popper.Utils = (typeof window !== 'undefined' ? window : global).PopperUtils;
Popper.placements = placements;
Popper.Defaults = Defaults;

/* harmony default export */ __webpack_exports__["default"] = (Popper);
//# sourceMappingURL=popper.js.map

/***/ }),

/***/ "nqnI":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};

var _warning = __webpack_require__("XOCG");

var _warning2 = _interopRequireDefault(_warning);

var _invariant = __webpack_require__("fU8T");

var _invariant2 = _interopRequireDefault(_invariant);

var _LocationUtils = __webpack_require__("vMhP");

var _PathUtils = __webpack_require__("4gcd");

var _createTransitionManager = __webpack_require__("/Uqj");

var _createTransitionManager2 = _interopRequireDefault(_createTransitionManager);

var _DOMUtils = __webpack_require__("uE+1");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var HashChangeEvent = 'hashchange';

var HashPathCoders = {
  hashbang: {
    encodePath: function encodePath(path) {
      return path.charAt(0) === '!' ? path : '!/' + (0, _PathUtils.stripLeadingSlash)(path);
    },
    decodePath: function decodePath(path) {
      return path.charAt(0) === '!' ? path.substr(1) : path;
    }
  },
  noslash: {
    encodePath: _PathUtils.stripLeadingSlash,
    decodePath: _PathUtils.addLeadingSlash
  },
  slash: {
    encodePath: _PathUtils.addLeadingSlash,
    decodePath: _PathUtils.addLeadingSlash
  }
};

var getHashPath = function getHashPath() {
  // We can't use window.location.hash here because it's not
  // consistent across browsers - Firefox will pre-decode it!
  var href = window.location.href;
  var hashIndex = href.indexOf('#');
  return hashIndex === -1 ? '' : href.substring(hashIndex + 1);
};

var pushHashPath = function pushHashPath(path) {
  return window.location.hash = path;
};

var replaceHashPath = function replaceHashPath(path) {
  var hashIndex = window.location.href.indexOf('#');

  window.location.replace(window.location.href.slice(0, hashIndex >= 0 ? hashIndex : 0) + '#' + path);
};

var createHashHistory = function createHashHistory() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  (0, _invariant2.default)(_DOMUtils.canUseDOM, 'Hash history needs a DOM');

  var globalHistory = window.history;
  var canGoWithoutReload = (0, _DOMUtils.supportsGoWithoutReloadUsingHash)();

  var _props$getUserConfirm = props.getUserConfirmation,
      getUserConfirmation = _props$getUserConfirm === undefined ? _DOMUtils.getConfirmation : _props$getUserConfirm,
      _props$hashType = props.hashType,
      hashType = _props$hashType === undefined ? 'slash' : _props$hashType;

  var basename = props.basename ? (0, _PathUtils.stripTrailingSlash)((0, _PathUtils.addLeadingSlash)(props.basename)) : '';

  var _HashPathCoders$hashT = HashPathCoders[hashType],
      encodePath = _HashPathCoders$hashT.encodePath,
      decodePath = _HashPathCoders$hashT.decodePath;

  var getDOMLocation = function getDOMLocation() {
    var path = decodePath(getHashPath());

    (0, _warning2.default)(!basename || (0, _PathUtils.hasBasename)(path, basename), 'You are attempting to use a basename on a page whose URL path does not begin ' + 'with the basename. Expected path "' + path + '" to begin with "' + basename + '".');

    if (basename) path = (0, _PathUtils.stripBasename)(path, basename);

    return (0, _LocationUtils.createLocation)(path);
  };

  var transitionManager = (0, _createTransitionManager2.default)();

  var setState = function setState(nextState) {
    _extends(history, nextState);

    history.length = globalHistory.length;

    transitionManager.notifyListeners(history.location, history.action);
  };

  var forceNextPop = false;
  var ignorePath = null;

  var handleHashChange = function handleHashChange() {
    var path = getHashPath();
    var encodedPath = encodePath(path);

    if (path !== encodedPath) {
      // Ensure we always have a properly-encoded hash.
      replaceHashPath(encodedPath);
    } else {
      var location = getDOMLocation();
      var prevLocation = history.location;

      if (!forceNextPop && (0, _LocationUtils.locationsAreEqual)(prevLocation, location)) return; // A hashchange doesn't always == location change.

      if (ignorePath === (0, _PathUtils.createPath)(location)) return; // Ignore this change; we already setState in push/replace.

      ignorePath = null;

      handlePop(location);
    }
  };

  var handlePop = function handlePop(location) {
    if (forceNextPop) {
      forceNextPop = false;
      setState();
    } else {
      var action = 'POP';

      transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
        if (ok) {
          setState({ action: action, location: location });
        } else {
          revertPop(location);
        }
      });
    }
  };

  var revertPop = function revertPop(fromLocation) {
    var toLocation = history.location;

    // TODO: We could probably make this more reliable by
    // keeping a list of paths we've seen in sessionStorage.
    // Instead, we just default to 0 for paths we don't know.

    var toIndex = allPaths.lastIndexOf((0, _PathUtils.createPath)(toLocation));

    if (toIndex === -1) toIndex = 0;

    var fromIndex = allPaths.lastIndexOf((0, _PathUtils.createPath)(fromLocation));

    if (fromIndex === -1) fromIndex = 0;

    var delta = toIndex - fromIndex;

    if (delta) {
      forceNextPop = true;
      go(delta);
    }
  };

  // Ensure the hash is encoded properly before doing anything else.
  var path = getHashPath();
  var encodedPath = encodePath(path);

  if (path !== encodedPath) replaceHashPath(encodedPath);

  var initialLocation = getDOMLocation();
  var allPaths = [(0, _PathUtils.createPath)(initialLocation)];

  // Public interface

  var createHref = function createHref(location) {
    return '#' + encodePath(basename + (0, _PathUtils.createPath)(location));
  };

  var push = function push(path, state) {
    (0, _warning2.default)(state === undefined, 'Hash history cannot push state; it is ignored');

    var action = 'PUSH';
    var location = (0, _LocationUtils.createLocation)(path, undefined, undefined, history.location);

    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;

      var path = (0, _PathUtils.createPath)(location);
      var encodedPath = encodePath(basename + path);
      var hashChanged = getHashPath() !== encodedPath;

      if (hashChanged) {
        // We cannot tell if a hashchange was caused by a PUSH, so we'd
        // rather setState here and ignore the hashchange. The caveat here
        // is that other hash histories in the page will consider it a POP.
        ignorePath = path;
        pushHashPath(encodedPath);

        var prevIndex = allPaths.lastIndexOf((0, _PathUtils.createPath)(history.location));
        var nextPaths = allPaths.slice(0, prevIndex === -1 ? 0 : prevIndex + 1);

        nextPaths.push(path);
        allPaths = nextPaths;

        setState({ action: action, location: location });
      } else {
        (0, _warning2.default)(false, 'Hash history cannot PUSH the same path; a new entry will not be added to the history stack');

        setState();
      }
    });
  };

  var replace = function replace(path, state) {
    (0, _warning2.default)(state === undefined, 'Hash history cannot replace state; it is ignored');

    var action = 'REPLACE';
    var location = (0, _LocationUtils.createLocation)(path, undefined, undefined, history.location);

    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;

      var path = (0, _PathUtils.createPath)(location);
      var encodedPath = encodePath(basename + path);
      var hashChanged = getHashPath() !== encodedPath;

      if (hashChanged) {
        // We cannot tell if a hashchange was caused by a REPLACE, so we'd
        // rather setState here and ignore the hashchange. The caveat here
        // is that other hash histories in the page will consider it a POP.
        ignorePath = path;
        replaceHashPath(encodedPath);
      }

      var prevIndex = allPaths.indexOf((0, _PathUtils.createPath)(history.location));

      if (prevIndex !== -1) allPaths[prevIndex] = path;

      setState({ action: action, location: location });
    });
  };

  var go = function go(n) {
    (0, _warning2.default)(canGoWithoutReload, 'Hash history go(n) causes a full page reload in this browser');

    globalHistory.go(n);
  };

  var goBack = function goBack() {
    return go(-1);
  };

  var goForward = function goForward() {
    return go(1);
  };

  var listenerCount = 0;

  var checkDOMListeners = function checkDOMListeners(delta) {
    listenerCount += delta;

    if (listenerCount === 1) {
      (0, _DOMUtils.addEventListener)(window, HashChangeEvent, handleHashChange);
    } else if (listenerCount === 0) {
      (0, _DOMUtils.removeEventListener)(window, HashChangeEvent, handleHashChange);
    }
  };

  var isBlocked = false;

  var block = function block() {
    var prompt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

    var unblock = transitionManager.setPrompt(prompt);

    if (!isBlocked) {
      checkDOMListeners(1);
      isBlocked = true;
    }

    return function () {
      if (isBlocked) {
        isBlocked = false;
        checkDOMListeners(-1);
      }

      return unblock();
    };
  };

  var listen = function listen(listener) {
    var unlisten = transitionManager.appendListener(listener);
    checkDOMListeners(1);

    return function () {
      checkDOMListeners(-1);
      unlisten();
    };
  };

  var history = {
    length: globalHistory.length,
    action: 'POP',
    location: initialLocation,
    createHref: createHref,
    push: push,
    replace: replace,
    go: go,
    goBack: goBack,
    goForward: goForward,
    block: block,
    listen: listen
  };

  return history;
};

exports.default = createHashHistory;

/***/ }),

/***/ "piIJ":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

var _react = __webpack_require__("eW0v");

var _propTypes = __webpack_require__("5D9O");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _popper = __webpack_require__("lo/u");

var _popper2 = _interopRequireDefault(_popper);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

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

var Popper = function (_Component) {
  _inherits(Popper, _Component);

  function Popper() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Popper);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Popper.__proto__ || Object.getPrototypeOf(Popper)).call.apply(_ref, [this].concat(args))), _this), _this.state = {}, _this._setArrowNode = function (node) {
      _this._arrowNode = node;
    }, _this._getTargetNode = function () {
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

      return _extends({
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
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Popper, [{
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
      if (lastProps.placement !== this.props.placement || lastProps.eventsEnabled !== this.props.eventsEnabled) {
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
          eventsEnabled = _props.eventsEnabled;

      var modifiers = _extends({}, this.props.modifiers, {
        applyStyle: { enabled: false },
        updateState: this._updateStateModifier
      });
      if (this._arrowNode) {
        modifiers.arrow = {
          element: this._arrowNode
        };
      }
      this._popper = new _popper2.default(this._getTargetNode(), this._popperNode, {
        placement: placement,
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
          modifiers = _props2.modifiers,
          children = _props2.children,
          restProps = _objectWithoutProperties(_props2, ['component', 'innerRef', 'placement', 'eventsEnabled', 'modifiers', 'children']);

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

      var componentProps = _extends({}, restProps, {
        style: _extends({}, restProps.style, popperStyle),
        'data-placement': popperPlacement,
        'data-x-out-of-boundaries': popperHide
      });

      if (typeof component === 'string') {
        componentProps.ref = this._handlePopperRef;
      } else {
        componentProps.innerRef = this._handlePopperRef;
      }

      return (0, _react.createElement)(component, componentProps, children);
    }
  }]);

  return Popper;
}(_react.Component);

Popper.contextTypes = {
  popperManager: _propTypes2.default.object.isRequired
};
Popper.childContextTypes = {
  popper: _propTypes2.default.object.isRequired
};
Popper.propTypes = {
  component: _propTypes2.default.oneOfType([_propTypes2.default.node, _propTypes2.default.func]),
  innerRef: _propTypes2.default.func,
  placement: _propTypes2.default.oneOf(_popper2.default.placements),
  eventsEnabled: _propTypes2.default.bool,
  modifiers: _propTypes2.default.object,
  children: _propTypes2.default.oneOfType([_propTypes2.default.node, _propTypes2.default.func])
};
Popper.defaultProps = {
  component: 'div',
  placement: 'bottom',
  eventsEnabled: true,
  modifiers: {}
};
exports.default = Popper;

/***/ }),

/***/ "pv+l":
/***/ (function(module, exports) {

module.exports = function (originalModule) {
	if (!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
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
		Object.defineProperty(module, "exports", {
			enumerable: true
		});
		module.webpackPolyfill = 1;
	}
	return module;
};

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

/***/ "t+Vk":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

function valueEqual(a, b) {
  if (a === b) return true;

  if (a == null || b == null) return false;

  if (Array.isArray(a)) {
    return Array.isArray(b) && a.length === b.length && a.every(function (item, index) {
      return valueEqual(item, b[index]);
    });
  }

  var aType = typeof a === 'undefined' ? 'undefined' : _typeof(a);
  var bType = typeof b === 'undefined' ? 'undefined' : _typeof(b);

  if (aType !== bType) return false;

  if (aType === 'object') {
    var aValue = a.valueOf();
    var bValue = b.valueOf();

    if (aValue !== a || bValue !== b) return valueEqual(aValue, bValue);

    var aKeys = Object.keys(a);
    var bKeys = Object.keys(b);

    if (aKeys.length !== bKeys.length) return false;

    return aKeys.every(function (key) {
      return valueEqual(a[key], b[key]);
    });
  }

  return false;
}

/* harmony default export */ __webpack_exports__["default"] = (valueEqual);

/***/ }),

/***/ "uDjN":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"video":"video__mNK9R","videoLink":"videoLink__3Gu3e","active":"active__2_iOI","popper":"popper__1jV98","popperarrow":"popperarrow__1-LH5"};

/***/ }),

/***/ "uE+1":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
var canUseDOM = exports.canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

var addEventListener = exports.addEventListener = function addEventListener(node, event, listener) {
  return node.addEventListener ? node.addEventListener(event, listener, false) : node.attachEvent('on' + event, listener);
};

var removeEventListener = exports.removeEventListener = function removeEventListener(node, event, listener) {
  return node.removeEventListener ? node.removeEventListener(event, listener, false) : node.detachEvent('on' + event, listener);
};

var getConfirmation = exports.getConfirmation = function getConfirmation(message, callback) {
  return callback(window.confirm(message));
}; // eslint-disable-line no-alert

/**
 * Returns true if the HTML5 history API is supported. Taken from Modernizr.
 *
 * https://github.com/Modernizr/Modernizr/blob/master/LICENSE
 * https://github.com/Modernizr/Modernizr/blob/master/feature-detects/history.js
 * changed to avoid false negatives for Windows Phones: https://github.com/reactjs/react-router/issues/586
 */
var supportsHistory = exports.supportsHistory = function supportsHistory() {
  var ua = window.navigator.userAgent;

  if ((ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) && ua.indexOf('Mobile Safari') !== -1 && ua.indexOf('Chrome') === -1 && ua.indexOf('Windows Phone') === -1) return false;

  return window.history && 'pushState' in window.history;
};

/**
 * Returns true if browser fires popstate on hash change.
 * IE10 and IE11 do not.
 */
var supportsPopStateOnHashChange = exports.supportsPopStateOnHashChange = function supportsPopStateOnHashChange() {
  return window.navigator.userAgent.indexOf('Trident') === -1;
};

/**
 * Returns false if using go(n) with hash history causes a full page reload.
 */
var supportsGoWithoutReloadUsingHash = exports.supportsGoWithoutReloadUsingHash = function supportsGoWithoutReloadUsingHash() {
  return window.navigator.userAgent.indexOf('Firefox') === -1;
};

/**
 * Returns true if a given popstate event is an extraneous WebKit event.
 * Accounts for the fact that Chrome on iOS fires real popstate events
 * containing undefined state when pressing the back button.
 */
var isExtraneousPopstateEvent = exports.isExtraneousPopstateEvent = function isExtraneousPopstateEvent(event) {
  return event.state === undefined && navigator.userAgent.indexOf('CriOS') === -1;
};

/***/ }),

/***/ "vMhP":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.locationsAreEqual = exports.createLocation = undefined;

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};

var _resolvePathname = __webpack_require__("7YO4");

var _resolvePathname2 = _interopRequireDefault(_resolvePathname);

var _valueEqual = __webpack_require__("t+Vk");

var _valueEqual2 = _interopRequireDefault(_valueEqual);

var _PathUtils = __webpack_require__("4gcd");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var createLocation = exports.createLocation = function createLocation(path, state, key, currentLocation) {
  var location = void 0;
  if (typeof path === 'string') {
    // Two-arg form: push(path, state)
    location = (0, _PathUtils.parsePath)(path);
    location.state = state;
  } else {
    // One-arg form: push(location)
    location = _extends({}, path);

    if (location.pathname === undefined) location.pathname = '';

    if (location.search) {
      if (location.search.charAt(0) !== '?') location.search = '?' + location.search;
    } else {
      location.search = '';
    }

    if (location.hash) {
      if (location.hash.charAt(0) !== '#') location.hash = '#' + location.hash;
    } else {
      location.hash = '';
    }

    if (state !== undefined && location.state === undefined) location.state = state;
  }

  try {
    location.pathname = decodeURI(location.pathname);
  } catch (e) {
    if (e instanceof URIError) {
      throw new URIError('Pathname "' + location.pathname + '" could not be decoded. ' + 'This is likely caused by an invalid percent-encoding.');
    } else {
      throw e;
    }
  }

  if (key) location.key = key;

  if (currentLocation) {
    // Resolve incomplete/relative pathname relative to current location.
    if (!location.pathname) {
      location.pathname = currentLocation.pathname;
    } else if (location.pathname.charAt(0) !== '/') {
      location.pathname = (0, _resolvePathname2.default)(location.pathname, currentLocation.pathname);
    }
  } else {
    // When there is no prior location and pathname is empty, set it to /
    if (!location.pathname) {
      location.pathname = '/';
    }
  }

  return location;
};

var locationsAreEqual = exports.locationsAreEqual = function locationsAreEqual(a, b) {
  return a.pathname === b.pathname && a.search === b.search && a.hash === b.hash && a.key === b.key && (0, _valueEqual2.default)(a.state, b.state);
};

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

/***/ "xczG":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Manager = __webpack_require__("Lcy3");

Object.defineProperty(exports, 'Manager', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Manager).default;
  }
});

var _Target = __webpack_require__("8r+V");

Object.defineProperty(exports, 'Target', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Target).default;
  }
});

var _Popper = __webpack_require__("piIJ");

Object.defineProperty(exports, 'Popper', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Popper).default;
  }
});

var _Arrow = __webpack_require__("4KN3");

Object.defineProperty(exports, 'Arrow', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Arrow).default;
  }
});

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

/***/ }),

/***/ "yY49":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

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