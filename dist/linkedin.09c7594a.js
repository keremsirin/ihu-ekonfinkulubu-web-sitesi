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
})({"../../scripts/linkedin.js":[function(require,module,exports) {
/* Auto generated, hash = 2xnr98u0iux66h5q9lkxquv5q */
(function (c) {
  c.LIRenderAll = function () {
    function t(a) {
      return Array.prototype.slice.call(a.attributes).filter(function (a) {
        return -1 !== a.name.lastIndexOf("data-key-", 0);
      }).map(function (a) {
        return encodeURIComponent(a.name.replace("data-", "").toLowerCase()) + "\x3d" + encodeURIComponent(a.value);
      });
    }

    function u(a) {
      var d = a.getAttribute("data-size"),
          b = a.getAttribute("data-locale"),
          e = a.getAttribute("data-type"),
          v = a.getAttribute("data-theme"),
          c = a.getAttribute("data-vanity"),
          g = a.getAttribute("data-version"),
          h = a.getAttribute("data-ei"),
          k = a.getAttribute("data-entity"),
          l = a.getAttribute("data-iscreate"),
          f = Math.round(1E6 * Math.random()),
          h = h ? "https://badges.linkedin-ei.com/" : "https://badges.linkedin.com/",
          b = ["locale\x3d" + encodeURIComponent(b), "badgetype\x3d" + encodeURIComponent(e), "badgetheme\x3d" + encodeURIComponent(v), "uid\x3d" + encodeURIComponent(f), "version\x3d" + encodeURIComponent(g)];
      "v2" === g ? (h += "view", b.push("badgesize\x3d" + encodeURIComponent(d)), b.push("entity\x3d" + encodeURIComponent(k)), b = b.concat(t(a))) : (h += "profile", b.push("maxsize\x3d" + encodeURIComponent(d)), b.push("trk\x3d" + encodeURIComponent("profile-badge")), b.push("vanityname\x3d" + encodeURIComponent(c)));
      l && b.push("fromCreate\x3dtrue");
      d = h + "?" + b.join("\x26");
      a.setAttribute("data-uid", f);
      a = document.createElement("script");
      a.src = d;
      p.push(a);
      document.body.appendChild(a);
    }

    function q(a, d) {
      if ("SCRIPT" !== a.tagName || r[a.src] || d && (!d || a.getAttribute("data-isartdeco"))) for (var b = 0, e = a.childNodes; b < e.length;) {
        q(e[b++], d);
      } else a.parentNode.replaceChild(w(a), a), r[a.src] = !0;
      return a;
    }

    function w(a) {
      for (var d = document.createElement("script"), b = a.attributes.length - 1; 0 <= b; b--) {
        d.setAttribute(a.attributes[b].name, a.attributes[b].value);
      }

      return d;
    }

    function x() {
      if (m >= n && 0 < n || m >= g.length) delete c.LIBadgeCallback, p.map(function (a) {
        document.body.removeChild(a);
      });
    }

    var m = 0,
        n = 0,
        p = [],
        r = {},
        g = Array.prototype.slice.call(document.querySelectorAll(".LI-profile-badge, .LI-entity-badge")),
        k,
        l,
        f,
        s;
    k = 0;

    for (l = g.length; k < l; k++) {
      f = g[k], s = f.getAttribute("data-rendered"), s || (n++, f.setAttribute("data-rendered", !0), u(f));
    }

    c.LIBadgeCallback = function (a, d) {
      m++;
      var b, e, c, f;
      b = 0;

      for (l = g.length; b < l; b++) {
        e = g[b], f = e.getAttribute("data-iscreate"), c = parseInt(e.getAttribute("data-uid"), 10), c === d && (c = document.createElement("div"), c.innerHTML = a, e.appendChild(c), q(e, f));
      }

      x();
    };
  };

  "complete" === document.readyState ? c.LIRenderAll() : c.addEventListener("load", c.LIRenderAll, !1);
})(window);
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "57721" + '/');

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
},{}]},{},["../../../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","../../scripts/linkedin.js"], null)
//# sourceMappingURL=/linkedin.09c7594a.js.map