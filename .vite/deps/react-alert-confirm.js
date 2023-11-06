import {
  require_react_dom
} from "./chunk-D5SJRT53.js";
import {
  require_react
} from "./chunk-ZAUFE7H7.js";
import {
  __commonJS
} from "./chunk-UXIASGQL.js";

// node_modules/@babel/runtime/helpers/interopRequireDefault.js
var require_interopRequireDefault = __commonJS({
  "node_modules/@babel/runtime/helpers/interopRequireDefault.js"(exports, module) {
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        "default": obj
      };
    }
    module.exports = _interopRequireDefault, module.exports.__esModule = true, module.exports["default"] = module.exports;
  }
});

// node_modules/@babel/runtime/helpers/typeof.js
var require_typeof = __commonJS({
  "node_modules/@babel/runtime/helpers/typeof.js"(exports, module) {
    function _typeof(o) {
      "@babel/helpers - typeof";
      return module.exports = _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
        return typeof o2;
      } : function(o2) {
        return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
      }, module.exports.__esModule = true, module.exports["default"] = module.exports, _typeof(o);
    }
    module.exports = _typeof, module.exports.__esModule = true, module.exports["default"] = module.exports;
  }
});

// node_modules/@babel/runtime/helpers/extends.js
var require_extends = __commonJS({
  "node_modules/@babel/runtime/helpers/extends.js"(exports, module) {
    function _extends() {
      module.exports = _extends = Object.assign ? Object.assign.bind() : function(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];
          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }
        return target;
      }, module.exports.__esModule = true, module.exports["default"] = module.exports;
      return _extends.apply(this, arguments);
    }
    module.exports = _extends, module.exports.__esModule = true, module.exports["default"] = module.exports;
  }
});

// node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js
var require_objectWithoutPropertiesLoose = __commonJS({
  "node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js"(exports, module) {
    function _objectWithoutPropertiesLoose(source, excluded) {
      if (source == null)
        return {};
      var target = {};
      var sourceKeys = Object.keys(source);
      var key, i;
      for (i = 0; i < sourceKeys.length; i++) {
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0)
          continue;
        target[key] = source[key];
      }
      return target;
    }
    module.exports = _objectWithoutPropertiesLoose, module.exports.__esModule = true, module.exports["default"] = module.exports;
  }
});

// node_modules/@babel/runtime/helpers/objectWithoutProperties.js
var require_objectWithoutProperties = __commonJS({
  "node_modules/@babel/runtime/helpers/objectWithoutProperties.js"(exports, module) {
    var objectWithoutPropertiesLoose = require_objectWithoutPropertiesLoose();
    function _objectWithoutProperties(source, excluded) {
      if (source == null)
        return {};
      var target = objectWithoutPropertiesLoose(source, excluded);
      var key, i;
      if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for (i = 0; i < sourceSymbolKeys.length; i++) {
          key = sourceSymbolKeys[i];
          if (excluded.indexOf(key) >= 0)
            continue;
          if (!Object.prototype.propertyIsEnumerable.call(source, key))
            continue;
          target[key] = source[key];
        }
      }
      return target;
    }
    module.exports = _objectWithoutProperties, module.exports.__esModule = true, module.exports["default"] = module.exports;
  }
});

// node_modules/@babel/runtime/helpers/regeneratorRuntime.js
var require_regeneratorRuntime = __commonJS({
  "node_modules/@babel/runtime/helpers/regeneratorRuntime.js"(exports, module) {
    var _typeof = require_typeof()["default"];
    function _regeneratorRuntime() {
      "use strict";
      module.exports = _regeneratorRuntime = function _regeneratorRuntime2() {
        return e;
      }, module.exports.__esModule = true, module.exports["default"] = module.exports;
      var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function(t2, e2, r2) {
        t2[e2] = r2.value;
      }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag";
      function define(t2, e2, r2) {
        return Object.defineProperty(t2, e2, {
          value: r2,
          enumerable: true,
          configurable: true,
          writable: true
        }), t2[e2];
      }
      try {
        define({}, "");
      } catch (t2) {
        define = function define2(t3, e2, r2) {
          return t3[e2] = r2;
        };
      }
      function wrap(t2, e2, r2, n2) {
        var i2 = e2 && e2.prototype instanceof Generator ? e2 : Generator, a2 = Object.create(i2.prototype), c2 = new Context(n2 || []);
        return o(a2, "_invoke", {
          value: makeInvokeMethod(t2, r2, c2)
        }), a2;
      }
      function tryCatch(t2, e2, r2) {
        try {
          return {
            type: "normal",
            arg: t2.call(e2, r2)
          };
        } catch (t3) {
          return {
            type: "throw",
            arg: t3
          };
        }
      }
      e.wrap = wrap;
      var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {};
      function Generator() {
      }
      function GeneratorFunction() {
      }
      function GeneratorFunctionPrototype() {
      }
      var p = {};
      define(p, a, function() {
        return this;
      });
      var d = Object.getPrototypeOf, v = d && d(d(values([])));
      v && v !== r && n.call(v, a) && (p = v);
      var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p);
      function defineIteratorMethods(t2) {
        ["next", "throw", "return"].forEach(function(e2) {
          define(t2, e2, function(t3) {
            return this._invoke(e2, t3);
          });
        });
      }
      function AsyncIterator(t2, e2) {
        function invoke(r3, o2, i2, a2) {
          var c2 = tryCatch(t2[r3], t2, o2);
          if ("throw" !== c2.type) {
            var u2 = c2.arg, h2 = u2.value;
            return h2 && "object" == _typeof(h2) && n.call(h2, "__await") ? e2.resolve(h2.__await).then(function(t3) {
              invoke("next", t3, i2, a2);
            }, function(t3) {
              invoke("throw", t3, i2, a2);
            }) : e2.resolve(h2).then(function(t3) {
              u2.value = t3, i2(u2);
            }, function(t3) {
              return invoke("throw", t3, i2, a2);
            });
          }
          a2(c2.arg);
        }
        var r2;
        o(this, "_invoke", {
          value: function value(t3, n2) {
            function callInvokeWithMethodAndArg() {
              return new e2(function(e3, r3) {
                invoke(t3, n2, e3, r3);
              });
            }
            return r2 = r2 ? r2.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
          }
        });
      }
      function makeInvokeMethod(e2, r2, n2) {
        var o2 = h;
        return function(i2, a2) {
          if (o2 === f)
            throw new Error("Generator is already running");
          if (o2 === s) {
            if ("throw" === i2)
              throw a2;
            return {
              value: t,
              done: true
            };
          }
          for (n2.method = i2, n2.arg = a2; ; ) {
            var c2 = n2.delegate;
            if (c2) {
              var u2 = maybeInvokeDelegate(c2, n2);
              if (u2) {
                if (u2 === y)
                  continue;
                return u2;
              }
            }
            if ("next" === n2.method)
              n2.sent = n2._sent = n2.arg;
            else if ("throw" === n2.method) {
              if (o2 === h)
                throw o2 = s, n2.arg;
              n2.dispatchException(n2.arg);
            } else
              "return" === n2.method && n2.abrupt("return", n2.arg);
            o2 = f;
            var p2 = tryCatch(e2, r2, n2);
            if ("normal" === p2.type) {
              if (o2 = n2.done ? s : l, p2.arg === y)
                continue;
              return {
                value: p2.arg,
                done: n2.done
              };
            }
            "throw" === p2.type && (o2 = s, n2.method = "throw", n2.arg = p2.arg);
          }
        };
      }
      function maybeInvokeDelegate(e2, r2) {
        var n2 = r2.method, o2 = e2.iterator[n2];
        if (o2 === t)
          return r2.delegate = null, "throw" === n2 && e2.iterator["return"] && (r2.method = "return", r2.arg = t, maybeInvokeDelegate(e2, r2), "throw" === r2.method) || "return" !== n2 && (r2.method = "throw", r2.arg = new TypeError("The iterator does not provide a '" + n2 + "' method")), y;
        var i2 = tryCatch(o2, e2.iterator, r2.arg);
        if ("throw" === i2.type)
          return r2.method = "throw", r2.arg = i2.arg, r2.delegate = null, y;
        var a2 = i2.arg;
        return a2 ? a2.done ? (r2[e2.resultName] = a2.value, r2.next = e2.nextLoc, "return" !== r2.method && (r2.method = "next", r2.arg = t), r2.delegate = null, y) : a2 : (r2.method = "throw", r2.arg = new TypeError("iterator result is not an object"), r2.delegate = null, y);
      }
      function pushTryEntry(t2) {
        var e2 = {
          tryLoc: t2[0]
        };
        1 in t2 && (e2.catchLoc = t2[1]), 2 in t2 && (e2.finallyLoc = t2[2], e2.afterLoc = t2[3]), this.tryEntries.push(e2);
      }
      function resetTryEntry(t2) {
        var e2 = t2.completion || {};
        e2.type = "normal", delete e2.arg, t2.completion = e2;
      }
      function Context(t2) {
        this.tryEntries = [{
          tryLoc: "root"
        }], t2.forEach(pushTryEntry, this), this.reset(true);
      }
      function values(e2) {
        if (e2 || "" === e2) {
          var r2 = e2[a];
          if (r2)
            return r2.call(e2);
          if ("function" == typeof e2.next)
            return e2;
          if (!isNaN(e2.length)) {
            var o2 = -1, i2 = function next() {
              for (; ++o2 < e2.length; )
                if (n.call(e2, o2))
                  return next.value = e2[o2], next.done = false, next;
              return next.value = t, next.done = true, next;
            };
            return i2.next = i2;
          }
        }
        throw new TypeError(_typeof(e2) + " is not iterable");
      }
      return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", {
        value: GeneratorFunctionPrototype,
        configurable: true
      }), o(GeneratorFunctionPrototype, "constructor", {
        value: GeneratorFunction,
        configurable: true
      }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function(t2) {
        var e2 = "function" == typeof t2 && t2.constructor;
        return !!e2 && (e2 === GeneratorFunction || "GeneratorFunction" === (e2.displayName || e2.name));
      }, e.mark = function(t2) {
        return Object.setPrototypeOf ? Object.setPrototypeOf(t2, GeneratorFunctionPrototype) : (t2.__proto__ = GeneratorFunctionPrototype, define(t2, u, "GeneratorFunction")), t2.prototype = Object.create(g), t2;
      }, e.awrap = function(t2) {
        return {
          __await: t2
        };
      }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function() {
        return this;
      }), e.AsyncIterator = AsyncIterator, e.async = function(t2, r2, n2, o2, i2) {
        void 0 === i2 && (i2 = Promise);
        var a2 = new AsyncIterator(wrap(t2, r2, n2, o2), i2);
        return e.isGeneratorFunction(r2) ? a2 : a2.next().then(function(t3) {
          return t3.done ? t3.value : a2.next();
        });
      }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function() {
        return this;
      }), define(g, "toString", function() {
        return "[object Generator]";
      }), e.keys = function(t2) {
        var e2 = Object(t2), r2 = [];
        for (var n2 in e2)
          r2.push(n2);
        return r2.reverse(), function next() {
          for (; r2.length; ) {
            var t3 = r2.pop();
            if (t3 in e2)
              return next.value = t3, next.done = false, next;
          }
          return next.done = true, next;
        };
      }, e.values = values, Context.prototype = {
        constructor: Context,
        reset: function reset(e2) {
          if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = false, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e2)
            for (var r2 in this)
              "t" === r2.charAt(0) && n.call(this, r2) && !isNaN(+r2.slice(1)) && (this[r2] = t);
        },
        stop: function stop() {
          this.done = true;
          var t2 = this.tryEntries[0].completion;
          if ("throw" === t2.type)
            throw t2.arg;
          return this.rval;
        },
        dispatchException: function dispatchException(e2) {
          if (this.done)
            throw e2;
          var r2 = this;
          function handle(n2, o3) {
            return a2.type = "throw", a2.arg = e2, r2.next = n2, o3 && (r2.method = "next", r2.arg = t), !!o3;
          }
          for (var o2 = this.tryEntries.length - 1; o2 >= 0; --o2) {
            var i2 = this.tryEntries[o2], a2 = i2.completion;
            if ("root" === i2.tryLoc)
              return handle("end");
            if (i2.tryLoc <= this.prev) {
              var c2 = n.call(i2, "catchLoc"), u2 = n.call(i2, "finallyLoc");
              if (c2 && u2) {
                if (this.prev < i2.catchLoc)
                  return handle(i2.catchLoc, true);
                if (this.prev < i2.finallyLoc)
                  return handle(i2.finallyLoc);
              } else if (c2) {
                if (this.prev < i2.catchLoc)
                  return handle(i2.catchLoc, true);
              } else {
                if (!u2)
                  throw new Error("try statement without catch or finally");
                if (this.prev < i2.finallyLoc)
                  return handle(i2.finallyLoc);
              }
            }
          }
        },
        abrupt: function abrupt(t2, e2) {
          for (var r2 = this.tryEntries.length - 1; r2 >= 0; --r2) {
            var o2 = this.tryEntries[r2];
            if (o2.tryLoc <= this.prev && n.call(o2, "finallyLoc") && this.prev < o2.finallyLoc) {
              var i2 = o2;
              break;
            }
          }
          i2 && ("break" === t2 || "continue" === t2) && i2.tryLoc <= e2 && e2 <= i2.finallyLoc && (i2 = null);
          var a2 = i2 ? i2.completion : {};
          return a2.type = t2, a2.arg = e2, i2 ? (this.method = "next", this.next = i2.finallyLoc, y) : this.complete(a2);
        },
        complete: function complete(t2, e2) {
          if ("throw" === t2.type)
            throw t2.arg;
          return "break" === t2.type || "continue" === t2.type ? this.next = t2.arg : "return" === t2.type ? (this.rval = this.arg = t2.arg, this.method = "return", this.next = "end") : "normal" === t2.type && e2 && (this.next = e2), y;
        },
        finish: function finish(t2) {
          for (var e2 = this.tryEntries.length - 1; e2 >= 0; --e2) {
            var r2 = this.tryEntries[e2];
            if (r2.finallyLoc === t2)
              return this.complete(r2.completion, r2.afterLoc), resetTryEntry(r2), y;
          }
        },
        "catch": function _catch(t2) {
          for (var e2 = this.tryEntries.length - 1; e2 >= 0; --e2) {
            var r2 = this.tryEntries[e2];
            if (r2.tryLoc === t2) {
              var n2 = r2.completion;
              if ("throw" === n2.type) {
                var o2 = n2.arg;
                resetTryEntry(r2);
              }
              return o2;
            }
          }
          throw new Error("illegal catch attempt");
        },
        delegateYield: function delegateYield(e2, r2, n2) {
          return this.delegate = {
            iterator: values(e2),
            resultName: r2,
            nextLoc: n2
          }, "next" === this.method && (this.arg = t), y;
        }
      }, e;
    }
    module.exports = _regeneratorRuntime, module.exports.__esModule = true, module.exports["default"] = module.exports;
  }
});

// node_modules/@babel/runtime/regenerator/index.js
var require_regenerator = __commonJS({
  "node_modules/@babel/runtime/regenerator/index.js"(exports, module) {
    var runtime = require_regeneratorRuntime()();
    module.exports = runtime;
    try {
      regeneratorRuntime = runtime;
    } catch (accidentalStrictMode) {
      if (typeof globalThis === "object") {
        globalThis.regeneratorRuntime = runtime;
      } else {
        Function("r", "regeneratorRuntime = r")(runtime);
      }
    }
  }
});

// node_modules/@babel/runtime/helpers/asyncToGenerator.js
var require_asyncToGenerator = __commonJS({
  "node_modules/@babel/runtime/helpers/asyncToGenerator.js"(exports, module) {
    function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
      try {
        var info = gen[key](arg);
        var value = info.value;
      } catch (error) {
        reject(error);
        return;
      }
      if (info.done) {
        resolve(value);
      } else {
        Promise.resolve(value).then(_next, _throw);
      }
    }
    function _asyncToGenerator(fn) {
      return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
          var gen = fn.apply(self, args);
          function _next(value) {
            asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
          }
          function _throw(err) {
            asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
          }
          _next(void 0);
        });
      };
    }
    module.exports = _asyncToGenerator, module.exports.__esModule = true, module.exports["default"] = module.exports;
  }
});

// node_modules/@babel/runtime/helpers/classCallCheck.js
var require_classCallCheck = __commonJS({
  "node_modules/@babel/runtime/helpers/classCallCheck.js"(exports, module) {
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    module.exports = _classCallCheck, module.exports.__esModule = true, module.exports["default"] = module.exports;
  }
});

// node_modules/@babel/runtime/helpers/toPrimitive.js
var require_toPrimitive = __commonJS({
  "node_modules/@babel/runtime/helpers/toPrimitive.js"(exports, module) {
    var _typeof = require_typeof()["default"];
    function _toPrimitive(input, hint) {
      if (_typeof(input) !== "object" || input === null)
        return input;
      var prim = input[Symbol.toPrimitive];
      if (prim !== void 0) {
        var res = prim.call(input, hint || "default");
        if (_typeof(res) !== "object")
          return res;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return (hint === "string" ? String : Number)(input);
    }
    module.exports = _toPrimitive, module.exports.__esModule = true, module.exports["default"] = module.exports;
  }
});

// node_modules/@babel/runtime/helpers/toPropertyKey.js
var require_toPropertyKey = __commonJS({
  "node_modules/@babel/runtime/helpers/toPropertyKey.js"(exports, module) {
    var _typeof = require_typeof()["default"];
    var toPrimitive = require_toPrimitive();
    function _toPropertyKey(arg) {
      var key = toPrimitive(arg, "string");
      return _typeof(key) === "symbol" ? key : String(key);
    }
    module.exports = _toPropertyKey, module.exports.__esModule = true, module.exports["default"] = module.exports;
  }
});

// node_modules/@babel/runtime/helpers/createClass.js
var require_createClass = __commonJS({
  "node_modules/@babel/runtime/helpers/createClass.js"(exports, module) {
    var toPropertyKey = require_toPropertyKey();
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, toPropertyKey(descriptor.key), descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      Object.defineProperty(Constructor, "prototype", {
        writable: false
      });
      return Constructor;
    }
    module.exports = _createClass, module.exports.__esModule = true, module.exports["default"] = module.exports;
  }
});

// node_modules/@babel/runtime/helpers/defineProperty.js
var require_defineProperty = __commonJS({
  "node_modules/@babel/runtime/helpers/defineProperty.js"(exports, module) {
    var toPropertyKey = require_toPropertyKey();
    function _defineProperty(obj, key, value) {
      key = toPropertyKey(key);
      if (key in obj) {
        Object.defineProperty(obj, key, {
          value,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        obj[key] = value;
      }
      return obj;
    }
    module.exports = _defineProperty, module.exports.__esModule = true, module.exports["default"] = module.exports;
  }
});

// node_modules/@babel/runtime/helpers/assertThisInitialized.js
var require_assertThisInitialized = __commonJS({
  "node_modules/@babel/runtime/helpers/assertThisInitialized.js"(exports, module) {
    function _assertThisInitialized(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self;
    }
    module.exports = _assertThisInitialized, module.exports.__esModule = true, module.exports["default"] = module.exports;
  }
});

// node_modules/@babel/runtime/helpers/setPrototypeOf.js
var require_setPrototypeOf = __commonJS({
  "node_modules/@babel/runtime/helpers/setPrototypeOf.js"(exports, module) {
    function _setPrototypeOf(o, p) {
      module.exports = _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      }, module.exports.__esModule = true, module.exports["default"] = module.exports;
      return _setPrototypeOf(o, p);
    }
    module.exports = _setPrototypeOf, module.exports.__esModule = true, module.exports["default"] = module.exports;
  }
});

// node_modules/@babel/runtime/helpers/inherits.js
var require_inherits = __commonJS({
  "node_modules/@babel/runtime/helpers/inherits.js"(exports, module) {
    var setPrototypeOf = require_setPrototypeOf();
    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
      }
      subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
          value: subClass,
          writable: true,
          configurable: true
        }
      });
      Object.defineProperty(subClass, "prototype", {
        writable: false
      });
      if (superClass)
        setPrototypeOf(subClass, superClass);
    }
    module.exports = _inherits, module.exports.__esModule = true, module.exports["default"] = module.exports;
  }
});

// node_modules/react-alert-confirm/lib/components/Button.js
var require_Button = __commonJS({
  "node_modules/react-alert-confirm/lib/components/Button.js"(exports) {
    "use strict";
    var _interopRequireDefault = require_interopRequireDefault();
    exports.__esModule = true;
    exports.default = void 0;
    var _extends2 = _interopRequireDefault(require_extends());
    var _objectWithoutProperties2 = _interopRequireDefault(require_objectWithoutProperties());
    var _react = _interopRequireDefault(require_react());
    var _Popup = require_Popup();
    var _excluded = ["styleType", "className"];
    var Button = function Button2(_ref) {
      var styleType = _ref.styleType, className = _ref.className, props = (0, _objectWithoutProperties2.default)(_ref, _excluded);
      return _react.default.createElement("button", (0, _extends2.default)({
        type: "button",
        className: (0, _Popup.classNames)("alert-confirm-button", "".concat(styleType || "default", "-button"), className)
      }, props));
    };
    var _default = _react.default.memo(Button);
    exports.default = _default;
  }
});

// node_modules/react-alert-confirm/lib/languages.js
var require_languages = __commonJS({
  "node_modules/react-alert-confirm/lib/languages.js"(exports) {
    "use strict";
    exports.__esModule = true;
    exports.default = void 0;
    var _default = {
      zh: {
        ok: "确 认",
        cancel: "取 消"
      },
      en: {
        ok: "OK",
        cancel: "Cancel"
      }
    };
    exports.default = _default;
  }
});

// node_modules/react-alert-confirm/lib/components/Popup.js
var require_Popup = __commonJS({
  "node_modules/react-alert-confirm/lib/components/Popup.js"(exports) {
    "use strict";
    var _interopRequireDefault = require_interopRequireDefault();
    exports.__esModule = true;
    exports.default = exports.classNames = void 0;
    var _regenerator = _interopRequireDefault(require_regenerator());
    var _asyncToGenerator2 = _interopRequireDefault(require_asyncToGenerator());
    var _extends2 = _interopRequireDefault(require_extends());
    var _classCallCheck2 = _interopRequireDefault(require_classCallCheck());
    var _createClass2 = _interopRequireDefault(require_createClass());
    var _assertThisInitialized2 = _interopRequireDefault(require_assertThisInitialized());
    var _inherits2 = _interopRequireDefault(require_inherits());
    var _defineProperty2 = _interopRequireDefault(require_defineProperty());
    var _react = _interopRequireDefault(require_react());
    var _Button = _interopRequireDefault(require_Button());
    var _languages = _interopRequireDefault(require_languages());
    var createRef = _react.default.createRef;
    var Component = _react.default.Component;
    var classNames = function classNames2() {
      for (var _len = arguments.length, names = new Array(_len), _key = 0; _key < _len; _key++)
        names[_key] = arguments[_key];
      return names === null || names === void 0 ? void 0 : names.filter(function(n) {
        return n;
      }).join(" ");
    };
    exports.classNames = classNames;
    var getClassName = function getClassName2(visible) {
      return {
        animationClassName: visible ? AnimationNames.in : AnimationNames.out
      };
    };
    var AnimationNames;
    (function(AnimationNames2) {
      AnimationNames2["in"] = "alert-confirm-animation-in", AnimationNames2["out"] = "alert-confirm-animation-out", AnimationNames2["empty"] = "";
    })(AnimationNames || (AnimationNames = {}));
    var Popup = function(_Component) {
      function Popup2(props) {
        var _this;
        (0, _classCallCheck2.default)(this, Popup2), _this = _Component.call(this, props) || this, (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "animationCount", 0), (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "bindAnimation", function() {
          var _assertThisInitialize = (0, _assertThisInitialized2.default)(_this), maskRef = _assertThisInitialize.maskRef, mainRef = _assertThisInitialize.mainRef;
          if (maskRef.current && mainRef.current) {
            var elements = [maskRef.current, mainRef.current];
            var bindAnimationEnd = function bindAnimationEnd2(element) {
              var _getComputedStyle = getComputedStyle(element), animationName = _getComputedStyle.animationName;
              animationName && animationName !== "none" ? (element.removeEventListener("animationend", _this.animationEnd), element.addEventListener("animationend", _this.animationEnd)) : _this.animationEnd();
            };
            elements.forEach(bindAnimationEnd), _this.animationCount = elements.length;
          }
        }), (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "animationEnd", function() {
          var closeAfter = _this.props.closeAfter || Popup2.config.closeAfter;
          var visible = !!_this.props.visible;
          _this.animationCount--, _this.animationCount === 0 && _this.setState({
            animationClassName: AnimationNames.empty,
            visible
          }, function() {
            !visible && closeAfter && closeAfter();
          });
        }), (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "containerRef", createRef()), (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "maskRef", createRef()), (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "mainRef", createRef());
        var _visible = !!props.visible;
        return _this.state = (0, _extends2.default)({}, getClassName(_visible), {
          visible: _visible
        }), _this.state = (0, _extends2.default)({}, getClassName(_visible), {
          visible: _visible
        }), _this;
      }
      return (0, _inherits2.default)(Popup2, _Component), (0, _createClass2.default)(Popup2, [{
        key: "componentDidMount",
        value: function componentDidMount() {
          this.bindAnimation();
        }
      }, {
        key: "componentDidUpdate",
        value: function componentDidUpdate(prevProps) {
          var _this2 = this;
          prevProps.visible !== this.props.visible && this.setState((0, _extends2.default)({}, getClassName(!!this.props.visible), {
            visible: true
          }), function() {
            _this2.bindAnimation();
          });
        }
      }, {
        key: "render",
        value: function render() {
          var merge = (0, _extends2.default)({}, Popup2.config, this.props);
          var _merge$lang = merge.lang, lang = _merge$lang === void 0 ? "en" : _merge$lang, onOk = merge.onOk, onCancel = merge.onCancel;
          var _this$state = this.state, visible = _this$state.visible, animationClassName = _this$state.animationClassName;
          var _dispatch = function() {
            var _ref = (0, _asyncToGenerator2.default)(_regenerator.default.mark(function _callee(action) {
              return _regenerator.default.wrap(function _callee$(_context) {
                for (; 1; )
                  switch (_context.prev = _context.next) {
                    case 0:
                      if (!merge.dispatch) {
                        _context.next = 4;
                        break;
                      }
                      merge.dispatch(action), _context.next = 16;
                      break;
                    case 4:
                      if (!merge.closeBefore) {
                        _context.next = 15;
                        break;
                      }
                      return _context.prev = 5, _context.next = 8, merge.closeBefore(action);
                    case 8:
                      onCancel && onCancel(), _context.next = 13;
                      break;
                    case 11:
                      _context.prev = 11, _context.t0 = _context["catch"](5);
                    case 13:
                      _context.next = 16;
                      break;
                    case 15:
                      action === false ? onCancel && onCancel() : action === true && onOk && onOk();
                    case 16:
                    case "end":
                      return _context.stop();
                  }
              }, _callee, null, [[5, 11]]);
            }));
            return function _dispatch2(_x) {
              return _ref.apply(this, arguments);
            };
          }();
          var renderNode = function renderNode2(node) {
            return typeof node === "function" ? node(_dispatch) : node;
          };
          var customNode = merge.custom && renderNode(merge.custom);
          var titleNode = merge.title && renderNode(merge.title);
          var descNode = merge.desc && renderNode(merge.desc);
          var footerNode = merge.footer === void 0 ? _react.default.createElement(_react.default.Fragment, null, merge.type !== "alert" && _react.default.createElement(_Button.default, {
            onClick: onCancel
          }, merge.cancelText || _languages.default[lang].cancel), _react.default.createElement(_Button.default, {
            styleType: "primary",
            onClick: onOk
          }, merge.okText || _languages.default[lang].ok)) : renderNode(merge.footer);
          return visible ? _react.default.createElement("div", {
            ref: this.containerRef,
            className: "alert-confirm-container"
          }, _react.default.createElement("div", {
            ref: this.maskRef,
            onClick: function onClick() {
              return merge.maskClosable && onCancel && onCancel();
            },
            style: (0, _extends2.default)({
              zIndex: merge.zIndex
            }, merge.maskStyle),
            className: classNames("alert-confirm-mask", animationClassName, merge.maskClassName)
          }, _react.default.createElement("div", {
            ref: this.mainRef,
            className: classNames("react-alert-main", animationClassName),
            onClick: function onClick(e) {
              return e.stopPropagation();
            }
          }, customNode ? customNode : _react.default.createElement("div", {
            className: classNames("react-alert-confirm", merge.className),
            style: merge.style
          }, _react.default.createElement("div", {
            className: "alert-confirm-body"
          }, _react.default.createElement("h1", {
            className: "alert-confirm-title"
          }, titleNode), descNode && _react.default.createElement("div", {
            className: "alert-confirm-desc"
          }, descNode)), !!footerNode && _react.default.createElement("div", {
            className: "alert-confirm-footer"
          }, footerNode))))) : null;
        }
      }]), Popup2;
    }(Component);
    (0, _defineProperty2.default)(Popup, "config", {
      lang: "en",
      okText: _languages.default.en.ok,
      cancelText: _languages.default.en.cancel,
      maskClosable: false
    });
    var _default = Popup;
    exports.default = _default;
  }
});

// node_modules/react-alert-confirm/lib/index.js
var require_lib = __commonJS({
  "node_modules/react-alert-confirm/lib/index.js"(exports) {
    var _interopRequireDefault = require_interopRequireDefault();
    exports.__esModule = true;
    exports.default = exports.config = exports.closeAll = exports.alert = void 0;
    var _typeof2 = _interopRequireDefault(require_typeof());
    var _extends2 = _interopRequireDefault(require_extends());
    var _objectWithoutProperties2 = _interopRequireDefault(require_objectWithoutProperties());
    var _regenerator = _interopRequireDefault(require_regenerator());
    var _asyncToGenerator2 = _interopRequireDefault(require_asyncToGenerator());
    var _classCallCheck2 = _interopRequireDefault(require_classCallCheck());
    var _createClass2 = _interopRequireDefault(require_createClass());
    var _defineProperty2 = _interopRequireDefault(require_defineProperty());
    var _react = _interopRequireDefault(require_react());
    var _reactDom = _interopRequireDefault(require_react_dom());
    var _Popup = _interopRequireDefault(require_Popup());
    var _languages = _interopRequireDefault(require_languages());
    var _Button = _interopRequireDefault(require_Button());
    exports.Button = _Button.default;
    var _excluded = ["closeBefore", "closeAfter", "custom", "footer"];
    var _excluded2 = ["closeBefore"];
    var isValidElement = _react.default.isValidElement;
    var Component = _react.default.Component;
    var parent = null;
    var instanceMap = /* @__PURE__ */ new Map();
    var PopupGenerator = function() {
      function PopupGenerator2() {
        var _this = this;
        var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        (0, _classCallCheck2.default)(this, PopupGenerator2), (0, _defineProperty2.default)(this, "visible", false), (0, _defineProperty2.default)(this, "root", null), (0, _defineProperty2.default)(this, "onOk", function() {
          return _this.dispatch(true), _this;
        }), (0, _defineProperty2.default)(this, "onCancel", function() {
          return _this.dispatch(false), _this;
        }), (0, _defineProperty2.default)(this, "open", function() {
          return _this.visible = true, _this.render(), _this;
        }), (0, _defineProperty2.default)(this, "close", function() {
          return _this.visible = false, _this.render(), _this;
        }), (0, _defineProperty2.default)(this, "dispatch", function() {
          var _ref = (0, _asyncToGenerator2.default)(_regenerator.default.mark(function _callee(action) {
            var closeBefore, _this$options, onOk, onCancel;
            return _regenerator.default.wrap(function _callee$(_context) {
              for (; 1; )
                switch (_context.prev = _context.next) {
                  case 0:
                    if (closeBefore = _this.options.closeBefore || _Popup.default.config.closeBefore, _this$options = _this.options, onOk = _this$options.onOk, onCancel = _this$options.onCancel, action === true ? onOk && onOk() : action === false && onCancel && onCancel(), !closeBefore) {
                      _context.next = 13;
                      break;
                    }
                    return _context.prev = 3, _context.next = 6, closeBefore(action);
                  case 6:
                    _this.close(), _context.next = 11;
                    break;
                  case 9:
                    _context.prev = 9, _context.t0 = _context["catch"](3);
                  case 11:
                    _context.next = 14;
                    break;
                  case 13:
                    _this.close();
                  case 14:
                  case "end":
                    return _context.stop();
                }
            }, _callee, null, [[3, 9]]);
          }));
          return function(_x) {
            return _ref.apply(this, arguments);
          };
        }()), (0, _defineProperty2.default)(this, "destroy", function() {
          var closeAfter = _this.options.closeAfter || _Popup.default.config.closeAfter;
          _this.container.remove(), instanceMap.delete(_this.$id), closeAfter && closeAfter();
        }), this.options = options, PopupGenerator2.$length++, this.$id = PopupGenerator2.$length, instanceMap.set(this.$id, this);
        var container = document.createElement("div");
        container.setAttribute("data-alert-confirm-id", String(this.$id)), this.container = container;
      }
      return (0, _createClass2.default)(PopupGenerator2, [{
        key: "render",
        value: function render() {
          var visible = this.visible, container = this.container;
          var _this$options2 = this.options, closeBefore = _this$options2.closeBefore, closeAfter = _this$options2.closeAfter, custom = _this$options2.custom, footer = _this$options2.footer, props = (0, _objectWithoutProperties2.default)(_this$options2, _excluded);
          !parent && (parent = document.createElement("div"), parent.className = "alert-confirm-root", document.body.appendChild(parent)), visible && parent.appendChild(container);
          var _custom;
          _custom = typeof custom === "function" ? custom(this.dispatch) : custom;
          var _footer;
          _footer = typeof footer === "function" ? footer(this.dispatch) : footer;
          var node = _react.default.createElement(_Popup.default, (0, _extends2.default)({}, props, {
            custom: _custom,
            footer: _footer,
            visible,
            onOk: this.onOk,
            onCancel: this.onCancel,
            dispatch: this.dispatch,
            closeAfter: this.destroy
          }));
          var _ref2 = _reactDom.default, secret = _ref2.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, createRoot = _ref2.createRoot;
          if (this.root)
            this.root.render(node);
          else if (createRoot) {
            var has = secret && (0, _typeof2.default)(secret) === "object";
            has && (secret.usingClientEntryPoint = true), this.root = createRoot(container), has && (secret.usingClientEntryPoint = false), this.root.render(node);
          } else
            _reactDom.default.render(node, container);
          return this;
        }
      }]), PopupGenerator2;
    }();
    (0, _defineProperty2.default)(PopupGenerator, "$length", 0);
    var AlertConfirm = function AlertConfirm2(params) {
      var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      if (this instanceof AlertConfirm2)
        return new _Popup.default(params);
      typeof params === "string" || isValidElement(params) ? options.title = params : (0, _typeof2.default)(params) === "object" ? Object.assign(options, params) : console.warn("options required type is object or ReactNode!");
      var _closeBefore = options.closeBefore, rest = (0, _objectWithoutProperties2.default)(options, _excluded2);
      return new Promise(function(resolve) {
        var instance = new PopupGenerator((0, _extends2.default)({}, rest, {
          closeBefore: function closeBefore(action) {
            return (0, _asyncToGenerator2.default)(_regenerator.default.mark(function _callee2() {
              var resolveClose;
              return _regenerator.default.wrap(function _callee2$(_context2) {
                for (; 1; )
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      if (resolveClose = function resolveClose2() {
                        resolve([action, instance]);
                      }, !_closeBefore) {
                        _context2.next = 7;
                        break;
                      }
                      return _context2.next = 4, _closeBefore(action);
                    case 4:
                      resolveClose(), _context2.next = 8;
                      break;
                    case 7:
                      resolveClose();
                    case 8:
                    case "end":
                      return _context2.stop();
                  }
              }, _callee2);
            }))();
          }
        })).open();
      });
    };
    AlertConfirm.prototype = Component.prototype;
    var alert = function alert2(params) {
      return AlertConfirm(params, {
        type: "alert"
      });
    };
    exports.alert = alert;
    var config = function config2(_config) {
      if (_config) {
        var lang = _config.lang;
        if (lang) {
          var langs = _languages.default[lang];
          if (!langs)
            return console.error("config lang must be one of ".concat(Object.keys(_languages.default).join(","), ".")), _Popup.default.config;
          Object.assign(_Popup.default.config, {
            okText: langs.ok,
            cancelText: langs.cancel
          });
        }
        return Object.assign(_Popup.default.config, _config);
      }
      return _Popup.default.config;
    };
    exports.config = config;
    var closeAll = function closeAll2() {
      instanceMap.forEach(function(instance) {
        instance.close();
      });
    };
    exports.closeAll = closeAll;
    AlertConfirm.alert = alert, AlertConfirm.config = config, AlertConfirm.closeAll = closeAll, AlertConfirm.Button = _Button.default;
    var _default = AlertConfirm;
    exports.default = _default;
  }
});
export default require_lib();
/*! Bundled license information:

@babel/runtime/helpers/regeneratorRuntime.js:
  (*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE *)
*/
//# sourceMappingURL=react-alert-confirm.js.map
