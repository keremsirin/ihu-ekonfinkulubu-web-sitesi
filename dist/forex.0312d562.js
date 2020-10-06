// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"../../scripts/forex.js":[function(require,module,exports) {
!function () {
  "use strict";

  var t;
  var e = ((t = {})["color-brand"] = "#2196f3", t["color-gull-gray"] = "#9db2bd", t["color-scooter"] = "#38acdb", t["color-curious-blue"] = "#299dcd", t);
  var i = document.createElement("a");

  function r(t) {
    ;
    i.href = t, i.host || (i.href = i.href);
    var e = i.host;
    i.pathname;
    return "http:" === i.protocol && (e = e.replace(/:80$/, "")), "https:" === i.protocol && (e = e.replace(/:443$/, "")), {
      host: e,
      pathname: ("/" === i.pathname[0] ? "" : "/") + i.pathname,
      href: i.href
    };
  }

  var n,
      o,
      a = {
    events: {
      width: 510,
      height: 600,
      isTransparent: !1,
      hideImportanceIndicator: !1,
      autosize: !1
    },
    hotlists: {
      width: 400,
      height: 600,
      isTransparent: !1,
      dateRange: "12M",
      showSymbolLogo: !1
    },
    screener: {
      width: 1100,
      height: 512,
      defaultColumn: "overview",
      defaultScreen: "general",
      market: "forex",
      showToolbar: !0,
      isTransparent: !1
    },
    tickers: {
      isTransparent: !1
    },
    financials: {
      width: 480,
      height: 830,
      autosize: !1,
      symbol: "NASDAQ:AAPL",
      isTransparent: !1,
      displayMode: "regular",
      largeChartUrl: ""
    },
    "crypto-mkt-screener": {
      width: 1e3,
      height: 490,
      defaultColumn: "overview",
      market: "crypto",
      screener_type: "crypto_mkt",
      displayCurrency: "USD",
      isTransparent: !1
    },
    "forex-cross-rates": {
      width: 770,
      height: 400,
      isTransparent: !1,
      currencies: ["EUR", "USD", "JPY", "GBP", "CHF", "AUD", "CAD", "NZD", "CNY"],
      frameElementId: null,
      autosize: !1
    },
    "forex-heat-map": {
      width: 770,
      height: 400,
      isTransparent: !1,
      currencies: ["EUR", "USD", "JPY", "GBP", "CHF", "AUD", "CAD", "NZD", "CNY"],
      frameElementId: null,
      autosize: !1
    },
    "market-overview": {
      width: 400,
      height: 650,
      isTransparent: !1,
      dateRange: "12M",
      showSymbolLogo: !0
    },
    "market-quotes": {
      width: 770,
      height: 450,
      isTransparent: !1
    },
    "mini-symbol-overview": {
      width: 350,
      height: 220,
      symbol: "FX:EURUSD",
      dateRange: "12M",
      trendLineColor: "#37a6ef",
      underLineColor: "#e3f2fd",
      isTransparent: !1,
      autosize: !1,
      largeChartUrl: ""
    },
    "single-quote": {
      width: 350,
      symbol: "FX:EURUSD",
      isTransparent: !1
    },
    "symbol-profile": {
      width: 480,
      height: 650,
      symbol: "NASDAQ:AAPL",
      isTransparent: !1
    },
    "symbol-info": {
      width: 1e3,
      symbol: "NASDAQ:AAPL",
      isTransparent: !1
    },
    "technical-analysis": {
      interval: "1m",
      width: 425,
      isTransparent: !1,
      height: 450,
      symbol: "NASDAQ:AAPL",
      showIntervalTabs: !0
    },
    "ticker-tape": {
      isTransparent: !1,
      displayMode: "adaptive"
    }
  };
  !function (t) {
    !function (t) {
      ;
      t.SetSymbol = "set-symbol", t.SetInterval = "set-interval";
    }(t.Names || (t.Names = {}));
  }(n || (n = {})), function (t) {
    !function (t) {
      ;
      t.SymbolClick = "tv-widget-symbol-click", t.WidgetLoad = "tv-widget-load", t.ResizeIframe = "tv-widget-resize-iframe", t.NoData = "tv-widget-no-data";
    }(t.Names || (t.Names = {}));
  }(o || (o = {}));

  var s = ["locale", "symbol"],
      c = function c() {
    var t = this;

    this._getScriptsInfo().forEach(function (e) {
      t._replaceScript(e);
    });
  },
      h = {
    widgetId: {
      configurable: !0
    },
    widgetUtmName: {
      configurable: !0
    },
    defaultSettings: {
      configurable: !0
    },
    propertiesToWorkWith: {
      configurable: !0
    },
    propertiesToSkipInHash: {
      configurable: !0
    },
    propertiesToAddToGetParams: {
      configurable: !0
    }
  };

  h.widgetId.get = function () {
    throw new Error("Method must be overridden");
  }, h.widgetUtmName.get = function () {
    return this.widgetId;
  }, h.defaultSettings.get = function () {
    return a[this.widgetId];
  }, h.propertiesToWorkWith.get = function () {
    return [];
  }, c.prototype.filterRawSettings = function (t) {
    var e = this,
        i = {};
    return Object.keys(t).forEach(function (r) {
      ;
      -1 !== e.propertiesToWorkWith.indexOf(r) && (i[r] = t[r]);
    }), i;
  }, h.propertiesToSkipInHash.get = function () {
    return ["customer", "locale"];
  }, h.propertiesToAddToGetParams.get = function () {
    return ["locale"];
  }, c.prototype._getScriptsInfo = function () {
    var t = function () {
      if (document.currentScript) return document.currentScript.src;

      for (var t = document.getElementsByTagName("script"), e = 0; e < t.length; e++) {
        if ("interactive" === t[e].readyState) return t[e].src;
      }

      try {
        throw new Error();
      } catch (r) {
        var i = /\((.*?):\d+:\d+\)\s*$/m.exec(r.stack);
        if (i) return i[1];
      }

      return null;
    }();

    if (!t) return console.error("Could not self-replace the script, widget embedding has been aborted"), [];

    for (var e = r(t), i = e.host, n = e.href, o = document.getElementsByTagName("script"), a = [], s = 0; s < o.length; s++) {
      var c = o.item(s);
      c.src && r(c.src).href === n && a.push(c);
    }

    var h,
        l = (void 0 === (h = i) && (h = location.host), -1 !== ["i18n.tradingview.com", "partial.tradingview.com", "www.tradingview.com", "wwwcn.tradingview.com"].indexOf(h) || -1 !== ["d33t3vvu2t2yu5.cloudfront.net", "dwq4do82y8xi7.cloudfront.net", "s.tradingview.com", "s3.tradingview.com"].indexOf(h) || h.match(/^[a-z]{2}\.tradingview\.com/) || h.match(/prod-[^.]+.tradingview.com/) ? "battle" : -1 !== h.indexOf("tradingview.com") ? "staging" : h.match(/webcharts/) ? "staging_local" : (h.match(/^localhost(:\d+)?$/), "local"));
    return a.map(function (t) {
      return {
        scriptHost: i,
        scriptEnv: l,
        scriptElement: t
      };
    });
  }, c.prototype._replaceScript = function (t) {
    var i = this,
        r = t.scriptEnv,
        n = t.scriptHost,
        a = t.scriptElement;
    this.script = a;

    var s = this._scriptContentToJSON(),
        c = function (t) {
      if (null === t) return null;
      var e = t.querySelector("#tradingview-copyright"),
          i = t.querySelector("#tradingview-quotes"),
          r = e || i;
      return r && t.removeChild(r), r;
    }(this.script.parentNode),
        h = !!this.script.parentNode.querySelector(".tradingview-widget-copyright");

    this.hasCopyright = c || h, s && (this.settings = this.filterRawSettings(s)), s && this._isValidSettings() || (console.error("Invalid settings provided, fall back to defaults"), this.settings = this.filterRawSettings(this.defaultSettings));
    var l,
        d = isNaN(this.settings.height) ? this.settings.height : this.settings.height + "px",
        p = isNaN(this.settings.width) ? this.settings.width : this.settings.width + "px",
        g = this.script.parentNode.classList.contains("tradingview-widget-container");
    this.script.parentNode && g ? this.iframeContainer = this.script.parentNode : this.iframeContainer = document.createElement("div"), this.iframeContainer.style.width = p, this.iframeContainer.style.height = d, this.iframeContainer.appendChild(((l = document.createElement("style")).innerHTML = "\n\t.tradingview-widget-copyright {\n\t\tfont-size: 13px !important;\n\t\tline-height: 32px !important;\n\t\ttext-align: center !important;\n\t\tvertical-align: middle !important;\n\t\tfont-family: 'Trebuchet MS', Arial, sans-serif !important;\n\t\tcolor: " + e["color-gull-gray"] + " !important;\n\t}\n\n\t.tradingview-widget-copyright .blue-text {\n\t\tcolor: " + e["color-brand"] + " !important;\n\t}\n\n\t.tradingview-widget-copyright a {\n\t\ttext-decoration: none !important;\n\t\tcolor: " + e["color-gull-gray"] + " !important;\n\t}\n\n\t.tradingview-widget-copyright a:visited {\n\t\tcolor: " + e["color-gull-gray"] + " !important;\n\t}\n\n\t.tradingview-widget-copyright a:hover .blue-text {\n\t\tcolor: " + e["color-scooter"] + " !important;\n\t}\n\n\t.tradingview-widget-copyright a:active .blue-text {\n\t\tcolor: " + e["color-curious-blue"] + " !important;\n\t}\n\n\t.tradingview-widget-copyright a:visited .blue-text {\n\t\tcolor: " + e["color-brand"] + " !important;\n\t}\n\t", l));
    var u = c && !this.settings.whitelabel,
        m = this.hasCopyright ? "calc(" + d + " - 32px)" : d;
    this.settings.utm_source = location.hostname, this.settings.utm_medium = h ? "widget_new" : "widget", this.settings.utm_campaign = this.widgetUtmName, this.iframe = this._createIframe(m, p, n, r, a.id);
    var f = this.iframeContainer.querySelector(".tradingview-widget-container__widget");

    if (f ? (this.script.parentNode.replaceChild(this.iframe, f), this.script.parentNode.removeChild(this.script)) : g ? (this.iframeContainer.appendChild(this.iframe), this.script.parentNode.removeChild(this.script)) : (this.iframeContainer.appendChild(this.iframe), this.script.parentNode.replaceChild(this.iframeContainer, this.script)), function (t, e, i) {
      var r = e.contentWindow;
      if (!r) return console.error("Cannot listen to the event from the provided iframe, contentWindow is not available"), function () {};

      function n(e) {
        e.source && e.source === r && e.data && e.data.name && e.data.name === t && i(e.data.data);
      }

      window.addEventListener("message", n, !1);
    }(o.Names.ResizeIframe, this.iframe, function (t) {
      t.width && (i.iframe.style.width = t.width + "px", i.iframeContainer.style.width = t.width + "px"), i.iframe.style.height = t.height + "px", i.iframeContainer.style.height = t.height + (i.hasCopyright ? 32 : 0) + "px";
    }), u) {
      var w = document.createElement("div");
      w.style.height = "32px", w.style.lineHeight = "32px", w.style.width = p, w.style.textAlign = "center", w.style.verticalAlign = "middle", w.innerHTML = c.innerHTML, this.iframeContainer.appendChild(w);
    }
  }, c.prototype._iframeSrcBase = function (t, e) {
    var i = "https://s.tradingview.com";
    return "local" === e ? i = "http://" + t : "staging" === e && (i = -1 !== t.indexOf("beta.tradingview.com") ? "https://betacdn.tradingview.com" : "https://" + t), i += "/embed-widget/" + this.widgetId + "/", this.settings.customer && -1 !== this.propertiesToSkipInHash.indexOf("customer") && (i += this.settings.customer + "/"), i;
  }, c.prototype._isValidSettings = function () {
    var t = function t(_t) {
      if (void 0 === _t) return !0;

      var e = parseInt(_t) + "%" == _t + "";

      return parseInt(_t) + "" == _t + "" || e || "auto" === _t;
    };

    return t(this.settings.width) && t(this.settings.height);
  }, c.prototype._buildGetQueryString = function () {
    var t = this.propertiesToAddToGetParams.filter(function (t) {
      return -1 !== s.indexOf(t);
    });
    return 0 === t.length ? "" : "?" + function (t) {
      var e = [];

      for (var i in t) {
        t.hasOwnProperty(i) && null != t[i] && e.push({
          key: i,
          pair: encodeURIComponent(i) + "=" + encodeURIComponent(t[i])
        });
      }

      return e.sort(function (t, e) {
        return t.key > e.key ? 1 : t.key < e.key ? -1 : 0;
      }).map(function (t) {
        return t.pair;
      }).join("&");
    }(function (t, e) {
      for (var i = Object.create(Object.getPrototypeOf(t)), r = 0, n = e; r < n.length; r++) {
        var o = n[r];
        Object.prototype.hasOwnProperty.call(t, o) && (i[o] = t[o]);
      }

      return i;
    }(this.settings, t));
  }, c.prototype._buildHashString = function (t) {
    var e = this,
        i = {};
    return t && (i.frameElementId = t), Object.keys(this.settings).forEach(function (t) {
      ;
      -1 === e.propertiesToSkipInHash.indexOf(t) && (i[t] = e.settings[t]);
    }), Object.keys(i).length > 0 ? "#" + encodeURIComponent(JSON.stringify(i)) : "";
  }, c.prototype._scriptContentToJSON = function () {
    var t = this.script.innerHTML.trim();

    try {
      return JSON.parse(t);
    } catch (e) {
      return console.error("Widget settings parse error: " + e), null;
    }
  }, c.prototype._createIframe = function (t, e, i, r, n) {
    var o = document.createElement("iframe");
    n && (o.id = n), this.settings.enableScrolling || o.setAttribute("scrolling", "no"), o.setAttribute("allowtransparency", !0), o.setAttribute("frameborder", 0), o.style.boxSizing = "border-box", o.style.height = t, o.style.width = e;

    var a = this._iframeSrcBase(i, r) + this._buildGetQueryString() + this._buildHashString(n);

    return o.setAttribute("src", a), o;
  }, Object.defineProperties(c.prototype, h), new (function (t) {
    function e() {
      t.apply(this, arguments);
    }

    t && (e.__proto__ = t), e.prototype = Object.create(t && t.prototype), e.prototype.constructor = e;
    var i = {
      widgetId: {
        configurable: !0
      },
      propertiesToWorkWith: {
        configurable: !0
      }
    };
    return i.widgetId.get = function () {
      return "forex-cross-rates";
    }, i.propertiesToWorkWith.get = function () {
      return ["colorTheme", "currencies", "customer", "disableCrossClickHref", "height", "isTransparent", "largeChartUrl", "locale", "whitelabel", "width"];
    }, Object.defineProperties(e.prototype, i), e;
  }(c))();
}();
},{}],"../../../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "63129" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","../../scripts/forex.js"], null)
//# sourceMappingURL=/forex.0312d562.js.map