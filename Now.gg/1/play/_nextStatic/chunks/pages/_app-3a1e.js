(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[888], {
    7748: function(e) {
        e.exports = function() {
            var e, t = ["navigation", "request", "process", "log", "user", "state", "error", "manual"], n = function(e, t, n) {
                for (var r = n, o = 0, i = e.length; o < i; o++)
                    r = t(r, e[o], o, e);
                return r
            }, r = function(e, t) {
                return n(e, (function(e, n, r, o) {
                    return t(n, r, o) ? e.concat(n) : e
                }
                ), [])
            }, o = function(e, t) {
                return n(e, (function(e, n, r, o) {
                    return !0 === e || n === t
                }
                ), !1)
            }, i = function(e) {
                return "[object Array]" === Object.prototype.toString.call(e)
            }, a = !{
                toString: null
            }.propertyIsEnumerable("toString"), s = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"], c = function(e) {
                var t, n = [];
                for (t in e)
                    Object.prototype.hasOwnProperty.call(e, t) && n.push(t);
                if (!a)
                    return n;
                for (var r = 0, o = s.length; r < o; r++)
                    Object.prototype.hasOwnProperty.call(e, s[r]) && n.push(s[r]);
                return n
            }, u = function(e, t) {
                return void 0 === e && (e = 1),
                void 0 === t && (t = 1 / 0),
                function(n) {
                    return "number" === typeof n && parseInt("" + n, 10) === n && n >= e && n <= t
                }
            }, l = function(e) {
                return "function" === typeof e || i(e) && r(e, (function(e) {
                    return "function" === typeof e
                }
                )).length === e.length
            }, f = function(e) {
                return "string" === typeof e && !!e.length
            }, d = {}, p = function() {
                return {
                    unhandledExceptions: !0,
                    unhandledRejections: !0
                }
            };
            d.schema = {
                apiKey: {
                    defaultValue: function() {
                        return null
                    },
                    message: "is required",
                    validate: f
                },
                appVersion: {
                    defaultValue: function() {},
                    message: "should be a string",
                    validate: function(e) {
                        return void 0 === e || f(e)
                    }
                },
                appType: {
                    defaultValue: function() {},
                    message: "should be a string",
                    validate: function(e) {
                        return void 0 === e || f(e)
                    }
                },
                autoDetectErrors: {
                    defaultValue: function() {
                        return !0
                    },
                    message: "should be true|false",
                    validate: function(e) {
                        return !0 === e || !1 === e
                    }
                },
                enabledErrorTypes: {
                    defaultValue: function() {
                        return p()
                    },
                    message: "should be an object containing the flags { unhandledExceptions:true|false, unhandledRejections:true|false }",
                    allowPartialObject: !0,
                    validate: function(e) {
                        if ("object" !== typeof e || !e)
                            return !1;
                        var t = c(e)
                          , n = c(p());
                        return !(r(t, (function(e) {
                            return o(n, e)
                        }
                        )).length < t.length) && !(r(c(e), (function(t) {
                            return "boolean" !== typeof e[t]
                        }
                        )).length > 0)
                    }
                },
                onError: {
                    defaultValue: function() {
                        return []
                    },
                    message: "should be a function or array of functions",
                    validate: l
                },
                onSession: {
                    defaultValue: function() {
                        return []
                    },
                    message: "should be a function or array of functions",
                    validate: l
                },
                onBreadcrumb: {
                    defaultValue: function() {
                        return []
                    },
                    message: "should be a function or array of functions",
                    validate: l
                },
                endpoints: {
                    defaultValue: function() {
                        return {
                            notify: "https://notify.bugsnag.com",
                            sessions: "https://sessions.bugsnag.com"
                        }
                    },
                    message: "should be an object containing endpoint URLs { notify, sessions }",
                    validate: function(e) {
                        return e && "object" === typeof e && f(e.notify) && f(e.sessions) && 0 === r(c(e), (function(e) {
                            return !o(["notify", "sessions"], e)
                        }
                        )).length
                    }
                },
                autoTrackSessions: {
                    defaultValue: function(e) {
                        return !0
                    },
                    message: "should be true|false",
                    validate: function(e) {
                        return !0 === e || !1 === e
                    }
                },
                enabledReleaseStages: {
                    defaultValue: function() {
                        return null
                    },
                    message: "should be an array of strings",
                    validate: function(e) {
                        return null === e || i(e) && r(e, (function(e) {
                            return "string" === typeof e
                        }
                        )).length === e.length
                    }
                },
                releaseStage: {
                    defaultValue: function() {
                        return "production"
                    },
                    message: "should be a string",
                    validate: function(e) {
                        return "string" === typeof e && e.length
                    }
                },
                maxBreadcrumbs: {
                    defaultValue: function() {
                        return 25
                    },
                    message: "should be a number \u2264100",
                    validate: function(e) {
                        return u(0, 100)(e)
                    }
                },
                enabledBreadcrumbTypes: {
                    defaultValue: function() {
                        return t
                    },
                    message: "should be null or a list of available breadcrumb types (" + t.join(",") + ")",
                    validate: function(e) {
                        return null === e || i(e) && n(e, (function(e, n) {
                            return !1 === e ? e : o(t, n)
                        }
                        ), !0)
                    }
                },
                context: {
                    defaultValue: function() {},
                    message: "should be a string",
                    validate: function(e) {
                        return void 0 === e || "string" === typeof e
                    }
                },
                user: {
                    defaultValue: function() {
                        return {}
                    },
                    message: "should be an object with { id, email, name } properties",
                    validate: function(e) {
                        return null === e || e && n(c(e), (function(e, t) {
                            return e && o(["id", "email", "name"], t)
                        }
                        ), !0)
                    }
                },
                metadata: {
                    defaultValue: function() {
                        return {}
                    },
                    message: "should be an object",
                    validate: function(e) {
                        return "object" === typeof e && null !== e
                    }
                },
                logger: {
                    defaultValue: function() {},
                    message: "should be null or an object with methods { debug, info, warn, error }",
                    validate: function(e) {
                        return !e || e && n(["debug", "info", "warn", "error"], (function(t, n) {
                            return t && "function" === typeof e[n]
                        }
                        ), !0)
                    }
                },
                redactedKeys: {
                    defaultValue: function() {
                        return ["password"]
                    },
                    message: "should be an array of strings|regexes",
                    validate: function(e) {
                        return i(e) && e.length === r(e, (function(e) {
                            return "string" === typeof e || e && "function" === typeof e.test
                        }
                        )).length
                    }
                },
                plugins: {
                    defaultValue: function() {
                        return []
                    },
                    message: "should be an array of plugin objects",
                    validate: function(e) {
                        return i(e) && e.length === r(e, (function(e) {
                            return e && "object" === typeof e && "function" === typeof e.load
                        }
                        )).length
                    }
                },
                featureFlags: {
                    defaultValue: function() {
                        return []
                    },
                    message: 'should be an array of objects that have a "name" property',
                    validate: function(e) {
                        return i(e) && e.length === r(e, (function(e) {
                            return e && "object" === typeof e && "string" === typeof e.name
                        }
                        )).length
                    }
                }
            };
            var g = function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }
              , h = function(e, t) {
                return n(e, (function(e, n, r, o) {
                    return e.concat(t(n, r, o))
                }
                ), [])
            };
            function v() {
                return (v = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n)
                            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }
                ).apply(this, arguments)
            }
            var m = d.schema
              , y = {
                releaseStage: g({}, m.releaseStage, {
                    defaultValue: function() {
                        return /^localhost(:\d+)?$/.test(window.location.host) ? "development" : "production"
                    }
                }),
                appType: v({}, m.appType, {
                    defaultValue: function() {
                        return "browser"
                    }
                }),
                logger: g({}, m.logger, {
                    defaultValue: function() {
                        return "undefined" !== typeof console && "function" === typeof console.debug ? b() : void 0
                    }
                })
            }
              , b = function() {
                var e = {}
                  , t = console.log;
                return h(["debug", "info", "warn", "error"], (function(n) {
                    var r = console[n];
                    e[n] = "function" === typeof r ? r.bind(console, "[bugsnag]") : t.bind(console, "[bugsnag]")
                }
                )),
                e
            }
              , S = function() {
                function e(e, t, n, r) {
                    void 0 === r && (r = new Date),
                    this.type = n,
                    this.message = e,
                    this.metadata = t,
                    this.timestamp = r
                }
                return e.prototype.toJSON = function() {
                    return {
                        type: this.type,
                        name: this.message,
                        timestamp: this.timestamp,
                        metaData: this.metadata
                    }
                }
                ,
                e
            }()
              , w = {};
            !function(t, n) {
                "use strict";
                "function" === typeof e && e.amd ? e("stackframe", [], n) : "object" === typeof w ? w = n() : t.StackFrame = n()
            }(this, (function() {
                "use strict";
                function e(e) {
                    return !isNaN(parseFloat(e)) && isFinite(e)
                }
                function t(e) {
                    return e.charAt(0).toUpperCase() + e.substring(1)
                }
                function n(e) {
                    return function() {
                        return this[e]
                    }
                }
                var r = ["isConstructor", "isEval", "isNative", "isToplevel"]
                  , o = ["columnNumber", "lineNumber"]
                  , i = ["fileName", "functionName", "source"]
                  , a = ["args"]
                  , s = r.concat(o, i, a);
                function c(e) {
                    if (e instanceof Object)
                        for (var n = 0; n < s.length; n++)
                            e.hasOwnProperty(s[n]) && void 0 !== e[s[n]] && this["set" + t(s[n])](e[s[n]])
                }
                c.prototype = {
                    getArgs: function() {
                        return this.args
                    },
                    setArgs: function(e) {
                        if ("[object Array]" !== Object.prototype.toString.call(e))
                            throw new TypeError("Args must be an Array");
                        this.args = e
                    },
                    getEvalOrigin: function() {
                        return this.evalOrigin
                    },
                    setEvalOrigin: function(e) {
                        if (e instanceof c)
                            this.evalOrigin = e;
                        else {
                            if (!(e instanceof Object))
                                throw new TypeError("Eval Origin must be an Object or StackFrame");
                            this.evalOrigin = new c(e)
                        }
                    },
                    toString: function() {
                        return (this.getFunctionName() || "{anonymous}") + "(" + (this.getArgs() || []).join(",") + ")" + (this.getFileName() ? "@" + this.getFileName() : "") + (e(this.getLineNumber()) ? ":" + this.getLineNumber() : "") + (e(this.getColumnNumber()) ? ":" + this.getColumnNumber() : "")
                    }
                };
                for (var u = 0; u < r.length; u++)
                    c.prototype["get" + t(r[u])] = n(r[u]),
                    c.prototype["set" + t(r[u])] = function(e) {
                        return function(t) {
                            this[e] = Boolean(t)
                        }
                    }(r[u]);
                for (var l = 0; l < o.length; l++)
                    c.prototype["get" + t(o[l])] = n(o[l]),
                    c.prototype["set" + t(o[l])] = function(t) {
                        return function(n) {
                            if (!e(n))
                                throw new TypeError(t + " must be a Number");
                            this[t] = Number(n)
                        }
                    }(o[l]);
                for (var f = 0; f < i.length; f++)
                    c.prototype["get" + t(i[f])] = n(i[f]),
                    c.prototype["set" + t(i[f])] = function(e) {
                        return function(t) {
                            this[e] = String(t)
                        }
                    }(i[f]);
                return c
            }
            ));
            var O = {};
            !function(t, n) {
                "use strict";
                "function" === typeof e && e.amd ? e("error-stack-parser", ["stackframe"], n) : "object" === typeof O ? O = n(w) : t.ErrorStackParser = n(t.StackFrame)
            }(this, (function(e) {
                "use strict";
                var t = /(^|@)\S+\:\d+/
                  , n = /^\s*at .*(\S+\:\d+|\(native\))/m
                  , r = /^(eval@)?(\[native code\])?$/;
                return {
                    parse: function(e) {
                        if ("undefined" !== typeof e.stacktrace || "undefined" !== typeof e["opera#sourceloc"])
                            return this.parseOpera(e);
                        if (e.stack && e.stack.match(n))
                            return this.parseV8OrIE(e);
                        if (e.stack)
                            return this.parseFFOrSafari(e);
                        throw new Error("Cannot parse given Error object")
                    },
                    extractLocation: function(e) {
                        if (-1 === e.indexOf(":"))
                            return [e];
                        var t = /(.+?)(?:\:(\d+))?(?:\:(\d+))?$/.exec(e.replace(/[\(\)]/g, ""));
                        return [t[1], t[2] || void 0, t[3] || void 0]
                    },
                    parseV8OrIE: function(t) {
                        return t.stack.split("\n").filter((function(e) {
                            return !!e.match(n)
                        }
                        ), this).map((function(t) {
                            t.indexOf("(eval ") > -1 && (t = t.replace(/eval code/g, "eval").replace(/(\(eval at [^\()]*)|(\)\,.*$)/g, ""));
                            var n = t.replace(/^\s+/, "").replace(/\(eval code/g, "(")
                              , r = n.match(/ (\((.+):(\d+):(\d+)\)$)/)
                              , o = (n = r ? n.replace(r[0], "") : n).split(/\s+/).slice(1)
                              , i = this.extractLocation(r ? r[1] : o.pop())
                              , a = o.join(" ") || void 0
                              , s = ["eval", "<anonymous>"].indexOf(i[0]) > -1 ? void 0 : i[0];
                            return new e({
                                functionName: a,
                                fileName: s,
                                lineNumber: i[1],
                                columnNumber: i[2],
                                source: t
                            })
                        }
                        ), this)
                    },
                    parseFFOrSafari: function(t) {
                        return t.stack.split("\n").filter((function(e) {
                            return !e.match(r)
                        }
                        ), this).map((function(t) {
                            if (t.indexOf(" > eval") > -1 && (t = t.replace(/ line (\d+)(?: > eval line \d+)* > eval\:\d+\:\d+/g, ":$1")),
                            -1 === t.indexOf("@") && -1 === t.indexOf(":"))
                                return new e({
                                    functionName: t
                                });
                            var n = /((.*".+"[^@]*)?[^@]*)(?:@)/
                              , r = t.match(n)
                              , o = r && r[1] ? r[1] : void 0
                              , i = this.extractLocation(t.replace(n, ""));
                            return new e({
                                functionName: o,
                                fileName: i[0],
                                lineNumber: i[1],
                                columnNumber: i[2],
                                source: t
                            })
                        }
                        ), this)
                    },
                    parseOpera: function(e) {
                        return !e.stacktrace || e.message.indexOf("\n") > -1 && e.message.split("\n").length > e.stacktrace.split("\n").length ? this.parseOpera9(e) : e.stack ? this.parseOpera11(e) : this.parseOpera10(e)
                    },
                    parseOpera9: function(t) {
                        for (var n = /Line (\d+).*script (?:in )?(\S+)/i, r = t.message.split("\n"), o = [], i = 2, a = r.length; i < a; i += 2) {
                            var s = n.exec(r[i]);
                            s && o.push(new e({
                                fileName: s[2],
                                lineNumber: s[1],
                                source: r[i]
                            }))
                        }
                        return o
                    },
                    parseOpera10: function(t) {
                        for (var n = /Line (\d+).*script (?:in )?(\S+)(?:: In function (\S+))?$/i, r = t.stacktrace.split("\n"), o = [], i = 0, a = r.length; i < a; i += 2) {
                            var s = n.exec(r[i]);
                            s && o.push(new e({
                                functionName: s[3] || void 0,
                                fileName: s[2],
                                lineNumber: s[1],
                                source: r[i]
                            }))
                        }
                        return o
                    },
                    parseOpera11: function(n) {
                        return n.stack.split("\n").filter((function(e) {
                            return !!e.match(t) && !e.match(/^Error created at/)
                        }
                        ), this).map((function(t) {
                            var n, r = t.split("@"), o = this.extractLocation(r.pop()), i = r.shift() || "", a = i.replace(/<anonymous function(: (\w+))?>/, "$2").replace(/\([^\)]*\)/g, "") || void 0;
                            i.match(/\(([^\)]*)\)/) && (n = i.replace(/^[^\(]+\(([^\)]*)\)$/, "$1"));
                            var s = void 0 === n || "[arguments not available]" === n ? void 0 : n.split(",");
                            return new e({
                                functionName: a,
                                args: s,
                                fileName: o[0],
                                lineNumber: o[1],
                                columnNumber: o[2],
                                source: t
                            })
                        }
                        ), this)
                    }
                }
            }
            ));
            var E = O
              , T = function(e, t, n, r) {
                var o = r && r.redactedKeys ? r.redactedKeys : []
                  , i = r && r.redactedPaths ? r.redactedPaths : [];
                return JSON.stringify(j(e, o, i), t, n)
            }
              , _ = 20
              , k = 25e3
              , P = 8
              , x = "...";
            function A(e) {
                return e instanceof Error || /^\[object (Error|(Dom)?Exception)\]$/.test(Object.prototype.toString.call(e))
            }
            function I(e) {
                return "[Throws: " + (e ? e.message : "?") + "]"
            }
            function C(e, t) {
                for (var n = 0, r = e.length; n < r; n++)
                    if (e[n] === t)
                        return !0;
                return !1
            }
            function L(e, t) {
                for (var n = 0, r = e.length; n < r; n++)
                    if (0 === t.indexOf(e[n]))
                        return !0;
                return !1
            }
            function R(e, t) {
                for (var n = 0, r = e.length; n < r; n++) {
                    if ("string" === typeof e[n] && e[n].toLowerCase() === t.toLowerCase())
                        return !0;
                    if (e[n] && "function" === typeof e[n].test && e[n].test(t))
                        return !0
                }
                return !1
            }
            function N(e) {
                return "[object Array]" === Object.prototype.toString.call(e)
            }
            function D(e, t) {
                try {
                    return e[t]
                } catch (n) {
                    return I(n)
                }
            }
            function j(e, t, n) {
                var r = []
                  , o = 0;
                function i(e, a) {
                    function s() {
                        return a.length > P && o > k
                    }
                    if (o++,
                    a.length > _)
                        return x;
                    if (s())
                        return x;
                    if (null === e || "object" !== typeof e)
                        return e;
                    if (C(r, e))
                        return "[Circular]";
                    if (r.push(e),
                    "function" === typeof e.toJSON)
                        try {
                            o--;
                            var c = i(e.toJSON(), a);
                            return r.pop(),
                            c
                        } catch (h) {
                            return I(h)
                        }
                    if (A(e)) {
                        o--;
                        var u = i({
                            name: e.name,
                            message: e.message
                        }, a);
                        return r.pop(),
                        u
                    }
                    if (N(e)) {
                        for (var l = [], f = 0, d = e.length; f < d; f++) {
                            if (s()) {
                                l.push(x);
                                break
                            }
                            l.push(i(e[f], a.concat("[]")))
                        }
                        return r.pop(),
                        l
                    }
                    var p = {};
                    try {
                        for (var g in e)
                            if (Object.prototype.hasOwnProperty.call(e, g))
                                if (L(n, a.join(".")) && R(t, g))
                                    p[g] = "[REDACTED]";
                                else {
                                    if (s()) {
                                        p[g] = x;
                                        break
                                    }
                                    p[g] = i(D(e, g), a.concat(g))
                                }
                    } catch (v) {}
                    return r.pop(),
                    p
                }
                return i(e, [])
            }
            function M(e, t, n) {
                "string" === typeof t && (void 0 === n ? n = null : null !== n && "string" !== typeof n && (n = T(n)),
                e[t] = n)
            }
            function U(e, t) {
                if (i(t))
                    for (var n = 0; n < t.length; ++n) {
                        var r = t[n];
                        null !== r && "object" === typeof r && M(e, r.name, r.variant)
                    }
            }
            function F(e) {
                return h(c(e), (function(t) {
                    var n = {
                        featureFlag: t
                    };
                    return "string" === typeof e[t] && (n.variant = e[t]),
                    n
                }
                ))
            }
            var Z = {
                add: M,
                merge: U,
                toEventApi: F
            }
              , B = function(e) {
                return !!e && (!!e.stack || !!e.stacktrace || !!e["opera#sourceloc"]) && "string" === typeof (e.stack || e.stacktrace || e["opera#sourceloc"]) && e.stack !== e.name + ": " + e.message
            };
            function G(e) {
                switch (Object.prototype.toString.call(e)) {
                case "[object Error]":
                case "[object Exception]":
                case "[object DOMException]":
                    return !0;
                default:
                    return e instanceof Error
                }
            }
            var H = G
              , W = function(e, t, n, r) {
                var o;
                if (t) {
                    var i;
                    if (null === n)
                        return z(e, t);
                    "object" === typeof n && (i = n),
                    "string" === typeof n && ((o = {})[n] = r,
                    i = o),
                    i && (e[t] || (e[t] = {}),
                    e[t] = g({}, e[t], i))
                }
            }
              , z = function(e, t, n) {
                "string" === typeof t && (n ? e[t] && delete e[t][n] : delete e[t])
            }
              , V = {
                add: W,
                get: function(e, t, n) {
                    if ("string" === typeof t)
                        return n ? e[t] ? e[t][n] : void 0 : e[t]
                },
                clear: z
            }
              , K = {};
            !function(t, n) {
                "use strict";
                "function" === typeof e && e.amd ? e("stack-generator", ["stackframe"], n) : "object" === typeof K ? K = n(w) : t.StackGenerator = n(t.StackFrame)
            }(this, (function(e) {
                return {
                    backtrace: function(t) {
                        var n = []
                          , r = 10;
                        "object" === typeof t && "number" === typeof t.maxStackSize && (r = t.maxStackSize);
                        for (var o = arguments.callee; o && n.length < r && o.arguments; ) {
                            for (var i = new Array(o.arguments.length), a = 0; a < i.length; ++a)
                                i[a] = o.arguments[a];
                            /function(?:\s+([\w$]+))+\s*\(/.test(o.toString()) ? n.push(new e({
                                functionName: RegExp.$1 || void 0,
                                args: i
                            })) : n.push(new e({
                                args: i
                            }));
                            try {
                                o = o.caller
                            } catch (s) {
                                break
                            }
                        }
                        return n
                    }
                }
            }
            ));
            var q = function() {
                function e(t, r, o, i, a) {
                    void 0 === o && (o = []),
                    void 0 === i && (i = Y()),
                    this.apiKey = void 0,
                    this.context = void 0,
                    this.groupingHash = void 0,
                    this.originalError = a,
                    this._handledState = i,
                    this.severity = this._handledState.severity,
                    this.unhandled = this._handledState.unhandled,
                    this.app = {},
                    this.device = {},
                    this.request = {},
                    this.breadcrumbs = [],
                    this.threads = [],
                    this._metadata = {},
                    this._features = {},
                    this._user = {},
                    this._session = void 0,
                    this.errors = [{
                        errorClass: J(t),
                        errorMessage: J(r),
                        type: e.__type,
                        stacktrace: n(o, (function(e, t) {
                            var n = $(t);
                            try {
                                return "{}" === JSON.stringify(n) ? e : e.concat(n)
                            } catch (r) {
                                return e
                            }
                        }
                        ), [])
                    }]
                }
                var t = e.prototype;
                return t.addMetadata = function(e, t, n) {
                    return V.add(this._metadata, e, t, n)
                }
                ,
                t.getMetadata = function(e, t) {
                    return V.get(this._metadata, e, t)
                }
                ,
                t.clearMetadata = function(e, t) {
                    return V.clear(this._metadata, e, t)
                }
                ,
                t.addFeatureFlag = function(e, t) {
                    void 0 === t && (t = null),
                    Z.add(this._features, e, t)
                }
                ,
                t.addFeatureFlags = function(e) {
                    Z.merge(this._features, e)
                }
                ,
                t.clearFeatureFlag = function(e) {
                    delete this._features[e]
                }
                ,
                t.clearFeatureFlags = function() {
                    this._features = {}
                }
                ,
                t.getUser = function() {
                    return this._user
                }
                ,
                t.setUser = function(e, t, n) {
                    this._user = {
                        id: e,
                        email: t,
                        name: n
                    }
                }
                ,
                t.toJSON = function() {
                    return {
                        payloadVersion: "4",
                        exceptions: h(this.errors, (function(e) {
                            return g({}, e, {
                                message: e.errorMessage
                            })
                        }
                        )),
                        severity: this.severity,
                        unhandled: this._handledState.unhandled,
                        severityReason: this._handledState.severityReason,
                        app: this.app,
                        device: this.device,
                        request: this.request,
                        breadcrumbs: this.breadcrumbs,
                        context: this.context,
                        groupingHash: this.groupingHash,
                        metaData: this._metadata,
                        user: this._user,
                        session: this._session,
                        featureFlags: Z.toEventApi(this._features)
                    }
                }
                ,
                e
            }()
              , $ = function(e) {
                var t = {
                    file: e.fileName,
                    method: X(e.functionName),
                    lineNumber: e.lineNumber,
                    columnNumber: e.columnNumber,
                    code: void 0,
                    inProject: void 0
                };
                return t.lineNumber > -1 && !t.file && !t.method && (t.file = "global code"),
                t
            }
              , X = function(e) {
                return /^global code$/i.test(e) ? "global code" : e
            }
              , Y = function() {
                return {
                    unhandled: !1,
                    severity: "warning",
                    severityReason: {
                        type: "handledException"
                    }
                }
            }
              , J = function(e) {
                return "string" === typeof e ? e : ""
            };
            q.getStacktrace = function(e, t, n) {
                if (B(e))
                    return E.parse(e).slice(t);
                try {
                    return r(K.backtrace(), (function(e) {
                        return -1 === (e.functionName || "").indexOf("StackGenerator$$")
                    }
                    )).slice(1 + n)
                } catch (o) {
                    return []
                }
            }
            ,
            q.create = function(e, t, n, r, o, i) {
                void 0 === o && (o = 0);
                var a, s = ee(e, t, r, i), c = s[0], u = s[1];
                try {
                    var l = q.getStacktrace(c, u > 0 ? 1 + u + o : 0, 1 + o);
                    a = new q(c.name,c.message,l,n,e)
                } catch (f) {
                    a = new q(c.name,c.message,[],n,e)
                }
                return "InvalidError" === c.name && a.addMetadata("" + r, "non-error parameter", Q(e)),
                a
            }
            ;
            var Q = function(e) {
                return null === e ? "null" : void 0 === e ? "undefined" : e
            }
              , ee = function(e, t, n, r) {
                var o, i = 0, a = function(e) {
                    r && r.warn(n + ' received a non-error: "' + e + '"');
                    var t = new Error(n + ' received a non-error. See "' + n + '" tab for more detail.');
                    return t.name = "InvalidError",
                    t
                };
                if (t)
                    switch (typeof e) {
                    case "string":
                    case "number":
                    case "boolean":
                        o = new Error(String(e)),
                        i += 1;
                        break;
                    case "function":
                        o = a("function"),
                        i += 2;
                        break;
                    case "object":
                        null !== e && H(e) ? o = e : null !== e && te(e) ? ((o = new Error(e.message || e.errorMessage)).name = e.name || e.errorClass,
                        i += 1) : (o = a(null === e ? "null" : "unsupported object"),
                        i += 2);
                        break;
                    default:
                        o = a("nothing"),
                        i += 2
                    }
                else
                    H(e) ? o = e : (o = a(typeof e),
                    i += 2);
                if (!B(o))
                    try {
                        throw o
                    } catch (s) {
                        B(s) && (o = s,
                        i = 1)
                    }
                return [o, i]
            };
            q.__type = "browserjs";
            var te = function(e) {
                return ("string" === typeof e.name || "string" === typeof e.errorClass) && ("string" === typeof e.message || "string" === typeof e.errorMessage)
            }
              , ne = q
              , re = function(e, t, n) {
                var r = 0
                  , o = function() {
                    if (r >= e.length)
                        return n(null, !0);
                    t(e[r], (function(e, t) {
                        return e ? n(e) : !1 === t ? n(null, !1) : (r++,
                        void o())
                    }
                    ))
                };
                o()
            }
              , oe = function(e, t, n, r) {
                re(e, (function(e, r) {
                    if ("function" !== typeof e)
                        return r(null);
                    try {
                        if (2 !== e.length) {
                            var o = e(t);
                            return o && "function" === typeof o.then ? o.then((function(e) {
                                return setTimeout((function() {
                                    return r(null, e)
                                }
                                ))
                            }
                            ), (function(e) {
                                setTimeout((function() {
                                    return n(e),
                                    r(null, !0)
                                }
                                ))
                            }
                            )) : r(null, o)
                        }
                        e(t, (function(e, t) {
                            if (e)
                                return n(e),
                                r(null);
                            r(null, t)
                        }
                        ))
                    } catch (i) {
                        n(i),
                        r(null)
                    }
                }
                ), r)
            }
              , ie = function(e, t, n, r) {
                for (var o = !1, i = e.slice(); !o && i.length; )
                    try {
                        o = !1 === i.pop()(t)
                    } catch (a) {
                        r.error("Error occurred in " + n + " callback, continuing anyway\u2026"),
                        r.error(a)
                    }
                return o
            }
              , ae = function(e, t) {
                var n = "000000000" + e;
                return n.substr(n.length - t)
            }
              , se = "object" === typeof window ? window : self
              , ce = 0;
            for (var ue in se)
                Object.hasOwnProperty.call(se, ue) && ce++;
            var le = navigator.mimeTypes ? navigator.mimeTypes.length : 0
              , fe = ae((le + navigator.userAgent.length).toString(36) + ce.toString(36), 4)
              , de = function() {
                return fe
            }
              , pe = 0
              , ge = 4
              , he = 36
              , ve = Math.pow(he, ge);
            function me() {
                return ae((Math.random() * ve << 0).toString(he), ge)
            }
            function ye() {
                return pe = pe < ve ? pe : 0,
                ++pe - 1
            }
            function be() {
                return "c" + (new Date).getTime().toString(he) + ae(ye().toString(he), ge) + de() + (me() + me())
            }
            be.fingerprint = de;
            var Se = be
              , we = function() {
                function e() {
                    this.id = Se(),
                    this.startedAt = new Date,
                    this._handled = 0,
                    this._unhandled = 0,
                    this._user = {},
                    this.app = {},
                    this.device = {}
                }
                var t = e.prototype;
                return t.getUser = function() {
                    return this._user
                }
                ,
                t.setUser = function(e, t, n) {
                    this._user = {
                        id: e,
                        email: t,
                        name: n
                    }
                }
                ,
                t.toJSON = function() {
                    return {
                        id: this.id,
                        startedAt: this.startedAt,
                        events: {
                            handled: this._handled,
                            unhandled: this._unhandled
                        }
                    }
                }
                ,
                t._track = function(e) {
                    this[e._handledState.unhandled ? "_unhandled" : "_handled"] += 1
                }
                ,
                e
            }()
              , Oe = function() {}
              , Ee = function() {
                function e(t, n, r, o) {
                    var i = this;
                    void 0 === n && (n = d.schema),
                    void 0 === r && (r = []),
                    this._notifier = o,
                    this._config = {},
                    this._schema = n,
                    this._delivery = {
                        sendSession: Oe,
                        sendEvent: Oe
                    },
                    this._logger = {
                        debug: Oe,
                        info: Oe,
                        warn: Oe,
                        error: Oe
                    },
                    this._plugins = {},
                    this._breadcrumbs = [],
                    this._session = null,
                    this._metadata = {},
                    this._features = {},
                    this._context = void 0,
                    this._user = {},
                    this._cbs = {
                        e: [],
                        s: [],
                        sp: [],
                        b: []
                    },
                    this.Client = e,
                    this.Event = ne,
                    this.Breadcrumb = S,
                    this.Session = we,
                    this._config = this._configure(t, r),
                    h(r.concat(this._config.plugins), (function(e) {
                        e && i._loadPlugin(e)
                    }
                    )),
                    this._depth = 1;
                    var a = this
                      , s = this.notify;
                    this.notify = function() {
                        return s.apply(a, arguments)
                    }
                }
                var i = e.prototype;
                return i.addMetadata = function(e, t, n) {
                    return V.add(this._metadata, e, t, n)
                }
                ,
                i.getMetadata = function(e, t) {
                    return V.get(this._metadata, e, t)
                }
                ,
                i.clearMetadata = function(e, t) {
                    return V.clear(this._metadata, e, t)
                }
                ,
                i.addFeatureFlag = function(e, t) {
                    void 0 === t && (t = null),
                    Z.add(this._features, e, t)
                }
                ,
                i.addFeatureFlags = function(e) {
                    Z.merge(this._features, e)
                }
                ,
                i.clearFeatureFlag = function(e) {
                    delete this._features[e]
                }
                ,
                i.clearFeatureFlags = function() {
                    this._features = {}
                }
                ,
                i.getContext = function() {
                    return this._context
                }
                ,
                i.setContext = function(e) {
                    this._context = e
                }
                ,
                i._configure = function(e, t) {
                    var r = n(t, (function(e, t) {
                        return t && t.configSchema ? g({}, e, t.configSchema) : e
                    }
                    ), this._schema)
                      , o = n(c(r), (function(t, n) {
                        var o = r[n].defaultValue(e[n]);
                        return void 0 !== e[n] ? r[n].validate(e[n]) ? r[n].allowPartialObject ? t.config[n] = g(o, e[n]) : t.config[n] = e[n] : (t.errors[n] = r[n].message,
                        t.config[n] = o) : t.config[n] = o,
                        t
                    }
                    ), {
                        errors: {},
                        config: {}
                    })
                      , i = o.errors
                      , a = o.config;
                    if (r.apiKey) {
                        if (!a.apiKey)
                            throw new Error("No Bugsnag API Key set");
                        /^[0-9a-f]{32}$/i.test(a.apiKey) || (i.apiKey = "should be a string of 32 hexadecimal characters")
                    }
                    return this._metadata = g({}, a.metadata),
                    Z.merge(this._features, a.featureFlags),
                    this._user = g({}, a.user),
                    this._context = a.context,
                    a.logger && (this._logger = a.logger),
                    a.onError && (this._cbs.e = this._cbs.e.concat(a.onError)),
                    a.onBreadcrumb && (this._cbs.b = this._cbs.b.concat(a.onBreadcrumb)),
                    a.onSession && (this._cbs.s = this._cbs.s.concat(a.onSession)),
                    c(i).length && this._logger.warn(Te(i, e)),
                    a
                }
                ,
                i.getUser = function() {
                    return this._user
                }
                ,
                i.setUser = function(e, t, n) {
                    this._user = {
                        id: e,
                        email: t,
                        name: n
                    }
                }
                ,
                i._loadPlugin = function(e) {
                    var t = e.load(this);
                    return e.name && (this._plugins["~" + e.name + "~"] = t),
                    this
                }
                ,
                i.getPlugin = function(e) {
                    return this._plugins["~" + e + "~"]
                }
                ,
                i._setDelivery = function(e) {
                    this._delivery = e(this)
                }
                ,
                i.startSession = function() {
                    var e = new we;
                    return e.app.releaseStage = this._config.releaseStage,
                    e.app.version = this._config.appVersion,
                    e.app.type = this._config.appType,
                    e._user = g({}, this._user),
                    ie(this._cbs.s, e, "onSession", this._logger) ? (this._logger.debug("Session not started due to onSession callback"),
                    this) : this._sessionDelegate.startSession(this, e)
                }
                ,
                i.addOnError = function(e, t) {
                    void 0 === t && (t = !1),
                    this._cbs.e[t ? "unshift" : "push"](e)
                }
                ,
                i.removeOnError = function(e) {
                    this._cbs.e = r(this._cbs.e, (function(t) {
                        return t !== e
                    }
                    ))
                }
                ,
                i._addOnSessionPayload = function(e) {
                    this._cbs.sp.push(e)
                }
                ,
                i.addOnSession = function(e) {
                    this._cbs.s.push(e)
                }
                ,
                i.removeOnSession = function(e) {
                    this._cbs.s = r(this._cbs.s, (function(t) {
                        return t !== e
                    }
                    ))
                }
                ,
                i.addOnBreadcrumb = function(e, t) {
                    void 0 === t && (t = !1),
                    this._cbs.b[t ? "unshift" : "push"](e)
                }
                ,
                i.removeOnBreadcrumb = function(e) {
                    this._cbs.b = r(this._cbs.b, (function(t) {
                        return t !== e
                    }
                    ))
                }
                ,
                i.pauseSession = function() {
                    return this._sessionDelegate.pauseSession(this)
                }
                ,
                i.resumeSession = function() {
                    return this._sessionDelegate.resumeSession(this)
                }
                ,
                i.leaveBreadcrumb = function(e, n, r) {
                    if (e = "string" === typeof e ? e : "",
                    r = "string" === typeof r && o(t, r) ? r : "manual",
                    n = "object" === typeof n && null !== n ? n : {},
                    e) {
                        var i = new S(e,n,r);
                        ie(this._cbs.b, i, "onBreadcrumb", this._logger) ? this._logger.debug("Breadcrumb not attached due to onBreadcrumb callback") : (this._breadcrumbs.push(i),
                        this._breadcrumbs.length > this._config.maxBreadcrumbs && (this._breadcrumbs = this._breadcrumbs.slice(this._breadcrumbs.length - this._config.maxBreadcrumbs)))
                    }
                }
                ,
                i._isBreadcrumbTypeEnabled = function(e) {
                    var t = this._config.enabledBreadcrumbTypes;
                    return null === t || o(t, e)
                }
                ,
                i.notify = function(e, t, n) {
                    void 0 === n && (n = Oe);
                    var r = ne.create(e, !0, void 0, "notify()", this._depth + 1, this._logger);
                    this._notify(r, t, n)
                }
                ,
                i._notify = function(t, n, r) {
                    var i = this;
                    if (void 0 === r && (r = Oe),
                    t.app = g({}, t.app, {
                        releaseStage: this._config.releaseStage,
                        version: this._config.appVersion,
                        type: this._config.appType
                    }),
                    t.context = t.context || this._context,
                    t._metadata = g({}, t._metadata, this._metadata),
                    t._features = g({}, t._features, this._features),
                    t._user = g({}, t._user, this._user),
                    t.breadcrumbs = this._breadcrumbs.slice(),
                    null !== this._config.enabledReleaseStages && !o(this._config.enabledReleaseStages, this._config.releaseStage))
                        return this._logger.warn("Event not sent due to releaseStage/enabledReleaseStages configuration"),
                        r(null, t);
                    var a = t.severity
                      , s = function(e) {
                        i._logger.error("Error occurred in onError callback, continuing anyway\u2026"),
                        i._logger.error(e)
                    }
                      , c = [].concat(this._cbs.e).concat(n);
                    oe(c, t, s, (function(n, o) {
                        if (n && s(n),
                        !o)
                            return i._logger.debug("Event not sent due to onError callback"),
                            r(null, t);
                        i._isBreadcrumbTypeEnabled("error") && e.prototype.leaveBreadcrumb.call(i, t.errors[0].errorClass, {
                            errorClass: t.errors[0].errorClass,
                            errorMessage: t.errors[0].errorMessage,
                            severity: t.severity
                        }, "error"),
                        a !== t.severity && (t._handledState.severityReason = {
                            type: "userCallbackSetSeverity"
                        }),
                        t.unhandled !== t._handledState.unhandled && (t._handledState.severityReason.unhandledOverridden = !0,
                        t._handledState.unhandled = t.unhandled),
                        i._session && (i._session._track(t),
                        t._session = i._session),
                        i._delivery.sendEvent({
                            apiKey: t.apiKey || i._config.apiKey,
                            notifier: i._notifier,
                            events: [t]
                        }, (function(e) {
                            return r(e, t)
                        }
                        ))
                    }
                    ))
                }
                ,
                e
            }()
              , Te = function(e, t) {
                return new Error("Invalid configuration\n" + h(c(e), (function(n) {
                    return "  - " + n + " " + e[n] + ", got " + _e(t[n])
                }
                )).join("\n\n"))
            }
              , _e = function(e) {
                switch (typeof e) {
                case "string":
                case "number":
                case "object":
                    return JSON.stringify(e);
                default:
                    return String(e)
                }
            }
              , ke = Ee
              , Pe = {}
              , xe = ["events.[].metaData", "events.[].breadcrumbs.[].metaData", "events.[].request"];
            Pe.event = function(e, t) {
                var n = T(e, null, null, {
                    redactedPaths: xe,
                    redactedKeys: t
                });
                if (n.length > 1e6 && (e.events[0]._metadata = {
                    notifier: "WARNING!\nSerialized payload was " + n.length / 1e6 + "MB (limit = 1MB)\nmetadata was removed"
                },
                (n = T(e, null, null, {
                    redactedPaths: xe,
                    redactedKeys: t
                })).length > 1e6))
                    throw new Error("payload exceeded 1MB limit");
                return n
            }
            ,
            Pe.session = function(e, t) {
                var n = T(e, null, null);
                if (n.length > 1e6)
                    throw new Error("payload exceeded 1MB limit");
                return n
            }
            ;
            var Ae = {};
            Ae = function(e, t) {
                return void 0 === t && (t = window),
                {
                    sendEvent: function(n, r) {
                        void 0 === r && (r = function() {}
                        );
                        var o = Ie(e._config, "notify", "4", t)
                          , i = new t.XDomainRequest;
                        i.onload = function() {
                            r(null)
                        }
                        ,
                        i.open("POST", o),
                        setTimeout((function() {
                            try {
                                i.send(Pe.event(n, e._config.redactedKeys))
                            } catch (t) {
                                e._logger.error(t),
                                r(t)
                            }
                        }
                        ), 0)
                    },
                    sendSession: function(n, r) {
                        void 0 === r && (r = function() {}
                        );
                        var o = Ie(e._config, "sessions", "1", t)
                          , i = new t.XDomainRequest;
                        i.onload = function() {
                            r(null)
                        }
                        ,
                        i.open("POST", o),
                        setTimeout((function() {
                            try {
                                i.send(Pe.session(n, e._config.redactedKeys))
                            } catch (t) {
                                e._logger.error(t),
                                r(t)
                            }
                        }
                        ), 0)
                    }
                }
            }
            ;
            var Ie = function(e, t, n, r) {
                var o = JSON.parse(JSON.stringify(new Date));
                return Ce(e.endpoints[t], r.location.protocol) + "?apiKey=" + encodeURIComponent(e.apiKey) + "&payloadVersion=" + n + "&sentAt=" + encodeURIComponent(o)
            }
              , Ce = Ae._matchPageProtocol = function(e, t) {
                return "http:" === t ? e.replace(/^https:/, "http:") : e
            }
              , Le = function(e, t) {
                return void 0 === t && (t = window),
                {
                    sendEvent: function(n, r) {
                        void 0 === r && (r = function() {}
                        );
                        try {
                            var o = e._config.endpoints.notify
                              , i = new t.XMLHttpRequest;
                            i.onreadystatechange = function() {
                                i.readyState === t.XMLHttpRequest.DONE && r(null)
                            }
                            ,
                            i.open("POST", o),
                            i.setRequestHeader("Content-Type", "application/json"),
                            i.setRequestHeader("Bugsnag-Api-Key", n.apiKey || e._config.apiKey),
                            i.setRequestHeader("Bugsnag-Payload-Version", "4"),
                            i.setRequestHeader("Bugsnag-Sent-At", (new Date).toISOString()),
                            i.send(Pe.event(n, e._config.redactedKeys))
                        } catch (a) {
                            e._logger.error(a)
                        }
                    },
                    sendSession: function(n, r) {
                        void 0 === r && (r = function() {}
                        );
                        try {
                            var o = e._config.endpoints.sessions
                              , i = new t.XMLHttpRequest;
                            i.onreadystatechange = function() {
                                i.readyState === t.XMLHttpRequest.DONE && r(null)
                            }
                            ,
                            i.open("POST", o),
                            i.setRequestHeader("Content-Type", "application/json"),
                            i.setRequestHeader("Bugsnag-Api-Key", e._config.apiKey),
                            i.setRequestHeader("Bugsnag-Payload-Version", "1"),
                            i.setRequestHeader("Bugsnag-Sent-At", (new Date).toISOString()),
                            i.send(Pe.session(n, e._config.redactedKeys))
                        } catch (a) {
                            e._logger.error(a)
                        }
                    }
                }
            }
              , Re = new Date
              , Ne = function() {
                Re = new Date
            }
              , De = {
                name: "appDuration",
                load: function(e) {
                    return e.addOnError((function(e) {
                        var t = new Date;
                        e.app.duration = t - Re
                    }
                    ), !0),
                    {
                        reset: Ne
                    }
                }
            }
              , je = function(e) {
                return void 0 === e && (e = window),
                {
                    load: function(t) {
                        t.addOnError((function(t) {
                            void 0 === t.context && (t.context = e.location.pathname)
                        }
                        ), !0)
                    }
                }
            }
              , Me = function(e, t) {
                var n = "000000000" + e;
                return n.substr(n.length - t)
            }
              , Ue = "object" === typeof window ? window : self
              , Fe = 0;
            for (var Ze in Ue)
                Object.hasOwnProperty.call(Ue, Ze) && Fe++;
            var Be = navigator.mimeTypes ? navigator.mimeTypes.length : 0
              , Ge = Me((Be + navigator.userAgent.length).toString(36) + Fe.toString(36), 4)
              , He = function() {
                return Ge
            }
              , We = 0
              , ze = 4
              , Ve = 36
              , Ke = Math.pow(Ve, ze);
            function qe() {
                return Me((Math.random() * Ke << 0).toString(Ve), ze)
            }
            function $e() {
                return We = We < Ke ? We : 0,
                ++We - 1
            }
            function Xe() {
                return "c" + (new Date).getTime().toString(Ve) + Me($e().toString(Ve), ze) + He() + (qe() + qe())
            }
            Xe.fingerprint = He;
            var Ye = Xe
              , Je = "bugsnag-anonymous-id"
              , Qe = function() {
                try {
                    var e = window.localStorage
                      , t = e.getItem(Je);
                    return t && /^c[a-z0-9]{20,32}$/.test(t) || (t = Ye(),
                    e.setItem(Je, t)),
                    t
                } catch (n) {}
            }
              , et = function(e, t) {
                return void 0 === e && (e = navigator),
                void 0 === t && (t = window.screen),
                {
                    load: function(n) {
                        var r = {
                            locale: e.browserLanguage || e.systemLanguage || e.userLanguage || e.language,
                            userAgent: e.userAgent
                        };
                        t && t.orientation && t.orientation.type ? r.orientation = t.orientation.type : r.orientation = document.documentElement.clientWidth > document.documentElement.clientHeight ? "landscape" : "portrait",
                        n._config.generateAnonymousId && (r.id = Qe()),
                        n.addOnSession((function(e) {
                            e.device = g({}, e.device, r),
                            n._config.collectUserIp || tt(e)
                        }
                        )),
                        n.addOnError((function(e) {
                            e.device = g({}, e.device, r, {
                                time: new Date
                            }),
                            n._config.collectUserIp || tt(e)
                        }
                        ), !0)
                    },
                    configSchema: {
                        generateAnonymousId: {
                            validate: function(e) {
                                return !0 === e || !1 === e
                            },
                            defaultValue: function() {
                                return !0
                            },
                            message: "should be true|false"
                        }
                    }
                }
            }
              , tt = function(e) {
                var t = e.getUser();
                t && t.id || e.setUser(e.device.id)
            }
              , nt = function(e) {
                return void 0 === e && (e = window),
                {
                    load: function(t) {
                        t.addOnError((function(t) {
                            t.request && t.request.url || (t.request = g({}, t.request, {
                                url: e.location.href
                            }))
                        }
                        ), !0)
                    }
                }
            }
              , rt = {
                load: function(e) {
                    e._sessionDelegate = ot
                }
            }
              , ot = {
                startSession: function(e, t) {
                    var n = e;
                    return n._session = t,
                    n._pausedSession = null,
                    null === n._config.enabledReleaseStages || o(n._config.enabledReleaseStages, n._config.releaseStage) ? (n._delivery.sendSession({
                        notifier: n._notifier,
                        device: t.device,
                        app: t.app,
                        sessions: [{
                            id: t.id,
                            startedAt: t.startedAt,
                            user: t._user
                        }]
                    }),
                    n) : (n._logger.warn("Session not sent due to releaseStage/enabledReleaseStages configuration"),
                    n)
                },
                resumeSession: function(e) {
                    return e._session ? e : e._pausedSession ? (e._session = e._pausedSession,
                    e._pausedSession = null,
                    e) : e.startSession()
                },
                pauseSession: function(e) {
                    e._pausedSession = e._session,
                    e._session = null
                }
            }
              , it = {
                load: function(e) {
                    e._config.collectUserIp || e.addOnError((function(e) {
                        e._user && "undefined" === typeof e._user.id && delete e._user.id,
                        e._user = g({
                            id: "[REDACTED]"
                        }, e._user),
                        e.request = g({
                            clientIp: "[REDACTED]"
                        }, e.request)
                    }
                    ))
                },
                configSchema: {
                    collectUserIp: {
                        defaultValue: function() {
                            return !0
                        },
                        message: "should be true|false",
                        validate: function(e) {
                            return !0 === e || !1 === e
                        }
                    }
                }
            }
              , at = {
                load: function(e) {
                    !/^(local-)?dev(elopment)?$/.test(e._config.releaseStage) && e._isBreadcrumbTypeEnabled("log") && h(st, (function(t) {
                        var r = console[t];
                        console[t] = function() {
                            for (var o = arguments.length, i = new Array(o), a = 0; a < o; a++)
                                i[a] = arguments[a];
                            e.leaveBreadcrumb("Console output", n(i, (function(e, t, n) {
                                var r = "[Unknown value]";
                                try {
                                    r = String(t)
                                } catch (o) {}
                                if ("[object Object]" === r)
                                    try {
                                        r = JSON.stringify(t)
                                    } catch (o) {}
                                return e["[" + n + "]"] = r,
                                e
                            }
                            ), {
                                severity: 0 === t.indexOf("group") ? "log" : t
                            }), "log"),
                            r.apply(console, i)
                        }
                        ,
                        console[t]._restore = function() {
                            console[t] = r
                        }
                    }
                    ))
                }
            }
              , st = r(["log", "debug", "info", "warn", "error"], (function(e) {
                return "undefined" !== typeof console && "function" === typeof console[e]
            }
            ))
              , ct = 200
              , ut = 5e5
              , lt = function(e, t) {
                return void 0 === e && (e = document),
                void 0 === t && (t = window),
                {
                    load: function(o) {
                        if (o._config.trackInlineScripts) {
                            var i = t.location.href
                              , a = ""
                              , s = e.attachEvent ? "complete" === e.readyState : "loading" !== e.readyState
                              , c = function() {
                                return e.documentElement.outerHTML
                            };
                            a = c();
                            var u = e.onreadystatechange;
                            e.onreadystatechange = function() {
                                "interactive" === e.readyState && (a = c(),
                                s = !0);
                                try {
                                    u.apply(this, arguments)
                                } catch (t) {}
                            }
                            ;
                            var l = null
                              , f = function(e) {
                                l = e
                            }
                              , d = function() {
                                var t = e.currentScript || l;
                                if (!t && !s) {
                                    var n = e.scripts || e.getElementsByTagName("script");
                                    t = n[n.length - 1]
                                }
                                return t
                            }
                              , p = function(e) {
                                s && a || (a = c());
                                var t = ["\x3c!-- DOC START --\x3e"].concat(a.split("\n"))
                                  , r = e - 1
                                  , o = Math.max(r - 3, 0)
                                  , i = Math.min(r + 3, t.length);
                                return n(t.slice(o, i), (function(e, t, n) {
                                    return e[o + 1 + n] = t.length <= ct ? t : t.substr(0, ct),
                                    e
                                }
                                ), {})
                            };
                            o.addOnError((function(e) {
                                e.errors[0].stacktrace = r(e.errors[0].stacktrace, (function(e) {
                                    return !/__trace__$/.test(e.method)
                                }
                                ));
                                var t = e.errors[0].stacktrace[0];
                                if (!t || !t.file || t.file.replace(/#.*$/, "") === i.replace(/#.*$/, "")) {
                                    var n = d();
                                    if (n) {
                                        var o = n.innerHTML;
                                        e.addMetadata("script", "content", o.length <= ut ? o : o.substr(0, ut)),
                                        t && t.lineNumber && (t.code = p(t.lineNumber))
                                    }
                                }
                            }
                            ), !0);
                            var g = h(["setTimeout", "setInterval", "setImmediate", "requestAnimationFrame"], (function(e) {
                                return ft(t, e, (function(e) {
                                    return v(e, (function(e) {
                                        return {
                                            get: function() {
                                                return e[0]
                                            },
                                            replace: function(t) {
                                                e[0] = t
                                            }
                                        }
                                    }
                                    ))
                                }
                                ))
                            }
                            ))[0];
                            h(["EventTarget", "Window", "Node", "ApplicationCache", "AudioTrackList", "ChannelMergerNode", "CryptoOperation", "EventSource", "FileReader", "HTMLUnknownElement", "IDBDatabase", "IDBRequest", "IDBTransaction", "KeyOperation", "MediaController", "MessagePort", "ModalWindow", "Notification", "SVGElementInstance", "Screen", "TextTrack", "TextTrackCue", "TextTrackList", "WebSocket", "WebSocketWorker", "Worker", "XMLHttpRequest", "XMLHttpRequestEventTarget", "XMLHttpRequestUpload"], (function(e) {
                                t[e] && t[e].prototype && Object.prototype.hasOwnProperty.call(t[e].prototype, "addEventListener") && (ft(t[e].prototype, "addEventListener", (function(e) {
                                    return v(e, dt)
                                }
                                )),
                                ft(t[e].prototype, "removeEventListener", (function(e) {
                                    return v(e, dt, !0)
                                }
                                )))
                            }
                            ))
                        }
                        function v(e, t, n) {
                            return void 0 === n && (n = !1),
                            function() {
                                var r = [].slice.call(arguments);
                                try {
                                    var o = t(r)
                                      , i = o.get();
                                    if (n && e.apply(this, r),
                                    "function" !== typeof i)
                                        return e.apply(this, r);
                                    if (i.__trace__)
                                        o.replace(i.__trace__);
                                    else {
                                        var a = d();
                                        i.__trace__ = function() {
                                            f(a),
                                            g((function() {
                                                f(null)
                                            }
                                            ), 0);
                                            var e = i.apply(this, arguments);
                                            return f(null),
                                            e
                                        }
                                        ,
                                        i.__trace__.__trace__ = i.__trace__,
                                        o.replace(i.__trace__)
                                    }
                                } catch (s) {}
                                if (e.apply)
                                    return e.apply(this, r);
                                switch (r.length) {
                                case 1:
                                    return e(r[0]);
                                case 2:
                                    return e(r[0], r[1]);
                                default:
                                    return e()
                                }
                            }
                        }
                    },
                    configSchema: {
                        trackInlineScripts: {
                            validate: function(e) {
                                return !0 === e || !1 === e
                            },
                            defaultValue: function() {
                                return !0
                            },
                            message: "should be true|false"
                        }
                    }
                }
            };
            function ft(e, t, n) {
                var r = e[t];
                if (!r)
                    return r;
                var o = n(r);
                return e[t] = o,
                r
            }
            function dt(e) {
                var t = !!e[1] && "function" === typeof e[1].handleEvent;
                return {
                    get: function() {
                        return t ? e[1].handleEvent : e[1]
                    },
                    replace: function(n) {
                        t ? e[1].handleEvent = n : e[1] = n
                    }
                }
            }
            var pt = function(e) {
                return void 0 === e && (e = window),
                {
                    load: function(t) {
                        "addEventListener"in e && t._isBreadcrumbTypeEnabled("user") && e.addEventListener("click", (function(n) {
                            var r, o;
                            try {
                                r = gt(n.target),
                                o = ht(n.target, e)
                            } catch (i) {
                                r = "[hidden]",
                                o = "[hidden]",
                                t._logger.error("Cross domain error when tracking click event. See docs: https://tinyurl.com/yy3rn63z")
                            }
                            t.leaveBreadcrumb("UI click", {
                                targetText: r,
                                targetSelector: o
                            }, "user")
                        }
                        ), !0)
                    }
                }
            }
              , gt = function(e) {
                var t = e.textContent || e.innerText || "";
                return t || "submit" !== e.type && "button" !== e.type || (t = e.value),
                vt(t = t.replace(/^\s+|\s+$/g, ""), 140)
            };
            function ht(e, t) {
                var n = [e.tagName];
                if (e.id && n.push("#" + e.id),
                e.className && e.className.length && n.push("." + e.className.split(" ").join(".")),
                !t.document.querySelectorAll || !Array.prototype.indexOf)
                    return n.join("");
                try {
                    if (1 === t.document.querySelectorAll(n.join("")).length)
                        return n.join("")
                } catch (o) {
                    return n.join("")
                }
                if (e.parentNode.childNodes.length > 1) {
                    var r = Array.prototype.indexOf.call(e.parentNode.childNodes, e) + 1;
                    n.push(":nth-child(" + r + ")")
                }
                return 1 === t.document.querySelectorAll(n.join("")).length ? n.join("") : e.parentNode ? ht(e.parentNode, t) + " > " + n.join("") : n.join("")
            }
            function vt(e, t) {
                var n = "(...)";
                return e && e.length <= t ? e : e.slice(0, t - n.length) + n
            }
            var mt = {};
            mt = function(e) {
                return void 0 === e && (e = window),
                {
                    load: function(t) {
                        if ("addEventListener"in e && t._isBreadcrumbTypeEnabled("navigation")) {
                            var n = function(e) {
                                return function() {
                                    return t.leaveBreadcrumb(e, {}, "navigation")
                                }
                            };
                            e.addEventListener("pagehide", n("Page hidden"), !0),
                            e.addEventListener("pageshow", n("Page shown"), !0),
                            e.addEventListener("load", n("Page loaded"), !0),
                            e.document.addEventListener("DOMContentLoaded", n("DOMContentLoaded"), !0),
                            e.addEventListener("load", (function() {
                                return e.addEventListener("popstate", n("Navigated back"), !0)
                            }
                            )),
                            e.addEventListener("hashchange", (function(n) {
                                var r = n.oldURL ? {
                                    from: yt(n.oldURL, e),
                                    to: yt(n.newURL, e),
                                    state: wt(e)
                                } : {
                                    to: yt(e.location.href, e)
                                };
                                t.leaveBreadcrumb("Hash changed", r, "navigation")
                            }
                            ), !0),
                            e.history.replaceState && St(t, e.history, "replaceState", e),
                            e.history.pushState && St(t, e.history, "pushState", e)
                        }
                    }
                }
            }
            ;
            var yt = function(e, t) {
                var n = t.document.createElement("A");
                return n.href = e,
                "" + n.pathname + n.search + n.hash
            }
              , bt = function(e, t, n, r) {
                var o = yt(e.location.href, e);
                return {
                    title: n,
                    state: t,
                    prevState: wt(e),
                    to: r || o,
                    from: o
                }
            }
              , St = function(e, t, n, r) {
                var o = t[n];
                t[n] = function(i, a, s) {
                    e.leaveBreadcrumb("History " + n, bt(r, i, a, s), "navigation"),
                    "function" === typeof e.resetEventCount && e.resetEventCount(),
                    e._config.autoTrackSessions && e.startSession(),
                    o.apply(t, [i, a].concat(void 0 !== s ? s : []))
                }
            }
              , wt = function(e) {
                try {
                    return e.history.state
                } catch (t) {}
            }
              , Ot = "request"
              , Et = "BS~~S"
              , Tt = "BS~~U"
              , _t = "BS~~M"
              , kt = function(e, t) {
                return void 0 === e && (e = []),
                void 0 === t && (t = window),
                {
                    load: function(n) {
                        if (n._isBreadcrumbTypeEnabled("request")) {
                            var r = [n._config.endpoints.notify, n._config.endpoints.sessions].concat(e);
                            s(),
                            l();
                            var i = function(e, t, r) {
                                var o = {
                                    status: e.status,
                                    request: t + " " + r
                                };
                                e.status >= 400 ? n.leaveBreadcrumb("fetch() failed", o, Ot) : n.leaveBreadcrumb("fetch() succeeded", o, Ot)
                            }
                              , a = function(e, t) {
                                n.leaveBreadcrumb("fetch() error", {
                                    request: e + " " + t
                                }, Ot)
                            }
                        }
                        function s() {
                            if ("addEventListener"in t.XMLHttpRequest.prototype) {
                                var e = t.XMLHttpRequest.prototype.open;
                                t.XMLHttpRequest.prototype.open = function(t, n) {
                                    this[Tt] = n,
                                    this[_t] = t,
                                    this[Et] && (this.removeEventListener("load", c),
                                    this.removeEventListener("error", u)),
                                    this.addEventListener("load", c),
                                    this.addEventListener("error", u),
                                    this[Et] = !0,
                                    e.apply(this, arguments)
                                }
                            }
                        }
                        function c() {
                            var e = this[Tt];
                            if (void 0 !== e) {
                                if ("string" !== typeof e || !o(r, e.replace(/\?.*$/, ""))) {
                                    var t = {
                                        status: this.status,
                                        request: this[_t] + " " + this[Tt]
                                    };
                                    this.status >= 400 ? n.leaveBreadcrumb("XMLHttpRequest failed", t, Ot) : n.leaveBreadcrumb("XMLHttpRequest succeeded", t, Ot)
                                }
                            } else
                                n._logger.warn("The request URL is no longer present on this XMLHttpRequest. A breadcrumb cannot be left for this request.")
                        }
                        function u() {
                            var e = this[Tt];
                            void 0 !== e ? "string" === typeof e && o(r, e.replace(/\?.*$/, "")) || n.leaveBreadcrumb("XMLHttpRequest error", {
                                request: this[_t] + " " + this[Tt]
                            }, Ot) : n._logger.warn("The request URL is no longer present on this XMLHttpRequest. A breadcrumb cannot be left for this request.")
                        }
                        function l() {
                            if ("fetch"in t && !t.fetch.polyfill) {
                                var e = t.fetch;
                                t.fetch = function() {
                                    var t, n = arguments, r = arguments[0], o = arguments[1], s = null;
                                    return r && "object" === typeof r ? (s = r.url,
                                    o && "method"in o ? t = o.method : r && "method"in r && (t = r.method)) : (s = r,
                                    o && "method"in o && (t = o.method)),
                                    void 0 === t && (t = "GET"),
                                    new Promise((function(r, o) {
                                        e.apply(void 0, n).then((function(e) {
                                            i(e, t, s),
                                            r(e)
                                        }
                                        )).catch((function(e) {
                                            a(t, s),
                                            o(e)
                                        }
                                        ))
                                    }
                                    ))
                                }
                            }
                        }
                    }
                }
            }
              , Pt = {
                load: function(e) {
                    var t = 0;
                    e.addOnError((function(n) {
                        if (t >= e._config.maxEvents)
                            return !1;
                        t++
                    }
                    )),
                    e.resetEventCount = function() {
                        t = 0
                    }
                },
                configSchema: {
                    maxEvents: {
                        defaultValue: function() {
                            return 10
                        },
                        message: "should be a positive integer \u2264100",
                        validate: function(e) {
                            return u(1, 100)(e)
                        }
                    }
                }
            }
              , xt = {}
              , At = (xt = {
                load: function(e) {
                    e.addOnError((function(e) {
                        var t = n(e.errors, (function(e, t) {
                            return e.concat(t.stacktrace)
                        }
                        ), []);
                        h(t, (function(e) {
                            e.file = At(e.file)
                        }
                        ))
                    }
                    ))
                }
            })._strip = function(e) {
                return "string" === typeof e ? e.replace(/\?.*$/, "").replace(/#.*$/, "") : e
            }
              , It = function(e) {
                return void 0 === e && (e = window),
                {
                    load: function(t) {
                        if (t._config.autoDetectErrors && t._config.enabledErrorTypes.unhandledExceptions) {
                            var n = e.onerror;
                            e.onerror = r
                        }
                        function r(e, r, o, i, a) {
                            if (0 === o && /Script error\.?/.test(e))
                                t._logger.warn("Ignoring cross-domain or eval script error. See docs: https://tinyurl.com/yy3rn63z");
                            else {
                                var s, c = {
                                    severity: "error",
                                    unhandled: !0,
                                    severityReason: {
                                        type: "unhandledException"
                                    }
                                };
                                if (a)
                                    s = t.Event.create(a, !0, c, "window onerror", 1),
                                    Ct(s.errors[0].stacktrace, r, o, i);
                                else if ("object" !== typeof e || null === e || r && "string" === typeof r || o || i || a)
                                    s = t.Event.create(e, !0, c, "window onerror", 1),
                                    Ct(s.errors[0].stacktrace, r, o, i);
                                else {
                                    var u = e.type ? "Event: " + e.type : "Error"
                                      , l = e.message || e.detail || "";
                                    (s = t.Event.create({
                                        name: u,
                                        message: l
                                    }, !0, c, "window onerror", 1)).originalError = e,
                                    s.addMetadata("window onerror", {
                                        event: e,
                                        extraParameters: r
                                    })
                                }
                                t._notify(s)
                            }
                            "function" === typeof n && n.apply(this, arguments)
                        }
                    }
                }
            }
              , Ct = function(e, t, n, r) {
                e[0] || e.push({});
                var o = e[0];
                o.file || "string" !== typeof t || (o.file = t),
                !o.lineNumber && Lt(n) && (o.lineNumber = n),
                o.columnNumber || (Lt(r) ? o.columnNumber = r : window.event && Lt(window.event.errorCharacter) && (o.columnNumber = window.event.errorCharacter))
            }
              , Lt = function(e) {
                return "number" === typeof e && "NaN" !== String.call(e)
            }
              , Rt = function(e) {
                return void 0 === e && (e = window),
                {
                    load: function(t) {
                        if (t._config.autoDetectErrors && t._config.enabledErrorTypes.unhandledRejections) {
                            var n = function(e) {
                                var n = e.reason
                                  , r = !1;
                                try {
                                    e.detail && e.detail.reason && (n = e.detail.reason,
                                    r = !0)
                                } catch (i) {}
                                var o = t.Event.create(n, !1, {
                                    severity: "error",
                                    unhandled: !0,
                                    severityReason: {
                                        type: "unhandledPromiseRejection"
                                    }
                                }, "unhandledrejection handler", 1, t._logger);
                                r && h(o.errors[0].stacktrace, Nt(n)),
                                t._notify(o, (function(e) {
                                    var t;
                                    H(e.originalError) && !e.originalError.stack && e.addMetadata("unhandledRejection handler", ((t = {})[Object.prototype.toString.call(e.originalError)] = {
                                        name: e.originalError.name,
                                        message: e.originalError.message,
                                        code: e.originalError.code
                                    },
                                    t))
                                }
                                ))
                            };
                            "addEventListener"in e ? e.addEventListener("unhandledrejection", n) : e.onunhandledrejection = function(e, t) {
                                n({
                                    detail: {
                                        reason: e,
                                        promise: t
                                    }
                                })
                            }
                        }
                    }
                }
            }
              , Nt = function(e) {
                return function(t) {
                    t.file !== e.toString() && t.method && (t.method = t.method.replace(/^\s+/, ""))
                }
            }
              , Dt = {}
              , jt = "Bugsnag JavaScript"
              , Mt = "7.16.1"
              , Ut = "https://github.com/bugsnag/bugsnag-js"
              , Ft = g({}, d.schema, y)
              , Zt = {
                _client: null,
                createClient: function(e) {
                    "string" === typeof e && (e = {
                        apiKey: e
                    }),
                    e || (e = {});
                    var t = [De, et(), je(), nt(), Pt, rt, it, xt, It(), Rt(), mt(), pt(), kt(), at, lt()]
                      , n = new ke(e,Ft,t,{
                        name: jt,
                        version: Mt,
                        url: Ut
                    });
                    return n._setDelivery(window.XDomainRequest ? Ae : Le),
                    n._logger.debug("Loaded!"),
                    n.leaveBreadcrumb("Bugsnag loaded", {}, "state"),
                    n._config.autoTrackSessions ? n.startSession() : n
                },
                start: function(e) {
                    return Zt._client ? (Zt._client._logger.warn("Bugsnag.start() was called more than once. Ignoring."),
                    Zt._client) : (Zt._client = Zt.createClient(e),
                    Zt._client)
                }
            };
            return h(["resetEventCount"].concat(c(ke.prototype)), (function(e) {
                /^_/.test(e) || (Zt[e] = function() {
                    if (!Zt._client)
                        return console.log("Bugsnag." + e + "() was called before Bugsnag.start()");
                    Zt._client._depth += 1;
                    var t = Zt._client[e].apply(Zt._client, arguments);
                    return Zt._client._depth -= 1,
                    t
                }
                )
            }
            )),
            (Dt = Zt).Client = ke,
            Dt.Event = ne,
            Dt.Session = we,
            Dt.Breadcrumb = S,
            Dt.default = Zt,
            Dt
        }()
    },
    4061: function(e, t, n) {
        e.exports = n(7748)
    },
    7663: function(e) {
        e.exports = function() {
            var e = {};
            function t() {
                return (t = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n)
                            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }
                ).apply(this, arguments)
            }
            function n(e) {
                if (void 0 === e)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }
            function r(e, t) {
                e.prototype = Object.create(t.prototype),
                e.prototype.constructor = e,
                o(e, t)
            }
            function o(e, t) {
                return (o = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t,
                    e
                }
                )(e, t)
            }
            e = function() {
                function e() {
                    var e = "undefined" !== typeof window && window.React;
                    if (this.name = "react",
                    this.lazy = 0 === arguments.length && !e,
                    !this.lazy && (this.React = (arguments.length <= 0 ? void 0 : arguments[0]) || e,
                    !this.React))
                        throw new Error("@bugsnag/plugin-react reference to `React` was undefined")
                }
                return e.prototype.load = function(e) {
                    if (!this.lazy) {
                        var t = a(this.React, e);
                        return t.createErrorBoundary = function() {
                            return t
                        }
                        ,
                        t
                    }
                    var n = function() {
                        throw new Error("@bugsnag/plugin-react was used incorrectly. Valid usage is as follows:\nPass React to the plugin constructor\n\n  `Bugsnag.start({ plugins: [new BugsnagPluginReact(React)] })`\nand then call `const ErrorBoundary = Bugsnag.getPlugin('react').createErrorBoundary()`\n\nOr if React is not available until after Bugsnag has started,\nconstruct the plugin with no arguments\n  `Bugsnag.start({ plugins: [new BugsnagPluginReact()] })`,\nthen pass in React when available to construct your error boundary\n  `const ErrorBoundary = Bugsnag.getPlugin('react').createErrorBoundary(React)`")
                    };
                    return n.createErrorBoundary = function(t) {
                        if (!t)
                            throw new Error("@bugsnag/plugin-react reference to `React` was undefined");
                        return a(t, e)
                    }
                    ,
                    n
                }
                ,
                e
            }();
            var i = function(e) {
                for (var t = e.split(/\s*\n\s*/g), n = "", r = 0, o = t.length; r < o; r++)
                    t[r].length && (n += (n.length ? "\n" : "") + t[r]);
                return n
            }
              , a = function(e, o) {
                return function(a) {
                    function s(e) {
                        var t;
                        return (t = a.call(this, e) || this).state = {
                            error: null,
                            info: null
                        },
                        t.handleClearError = t.handleClearError.bind(n(t)),
                        t
                    }
                    r(s, a);
                    var c = s.prototype;
                    return c.handleClearError = function() {
                        this.setState({
                            error: null,
                            info: null
                        })
                    }
                    ,
                    c.componentDidCatch = function(e, t) {
                        var n = this.props.onError
                          , r = {
                            severity: "error",
                            unhandled: !0,
                            severityReason: {
                                type: "unhandledException"
                            }
                        }
                          , a = o.Event.create(e, !0, r, 1);
                        t && t.componentStack && (t.componentStack = i(t.componentStack)),
                        a.addMetadata("react", t),
                        o._notify(a, n),
                        this.setState({
                            error: e,
                            info: t
                        })
                    }
                    ,
                    c.render = function() {
                        if (this.state.error) {
                            var n = this.props.FallbackComponent;
                            return n ? e.createElement(n, t({}, this.state, {
                                clearError: this.handleClearError
                            })) : null
                        }
                        return this.props.children
                    }
                    ,
                    s
                }(e.Component)
            };
            return e.formatComponentStack = i,
            e.default = e,
            e
        }()
    },
    2717: function(e, t) {
        "use strict";
        t.Z = function(e) {
            var t = {};
            return function(n) {
                return void 0 === t[n] && (t[n] = e(n)),
                t[n]
            }
        }
    },
    351: function(e, t) {
        "use strict";
        t.Z = {
            animationIterationCount: 1,
            borderImageOutset: 1,
            borderImageSlice: 1,
            borderImageWidth: 1,
            boxFlex: 1,
            boxFlexGroup: 1,
            boxOrdinalGroup: 1,
            columnCount: 1,
            columns: 1,
            flex: 1,
            flexGrow: 1,
            flexPositive: 1,
            flexShrink: 1,
            flexNegative: 1,
            flexOrder: 1,
            gridRow: 1,
            gridRowEnd: 1,
            gridRowSpan: 1,
            gridRowStart: 1,
            gridColumn: 1,
            gridColumnEnd: 1,
            gridColumnSpan: 1,
            gridColumnStart: 1,
            msGridRow: 1,
            msGridRowSpan: 1,
            msGridColumn: 1,
            msGridColumnSpan: 1,
            fontWeight: 1,
            lineHeight: 1,
            opacity: 1,
            order: 1,
            orphans: 1,
            tabSize: 1,
            widows: 1,
            zIndex: 1,
            zoom: 1,
            WebkitLineClamp: 1,
            fillOpacity: 1,
            floodOpacity: 1,
            stopOpacity: 1,
            strokeDasharray: 1,
            strokeDashoffset: 1,
            strokeMiterlimit: 1,
            strokeOpacity: 1,
            strokeWidth: 1
        }
    },
    3367: function(e, t, n) {
        var r, o;
        void 0 === (o = "function" === typeof (r = function() {
            "use strict";
            function e(e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }
            function t(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1,
                    r.configurable = !0,
                    "value"in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r)
                }
            }
            function r(e, n, r) {
                return n && t(e.prototype, n),
                r && t(e, r),
                Object.defineProperty(e, "prototype", {
                    writable: !1
                }),
                e
            }
            function o(e, t) {
                if ("function" !== typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }),
                Object.defineProperty(e, "prototype", {
                    writable: !1
                }),
                t && a(e, t)
            }
            function i(e) {
                return (i = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                }
                )(e)
            }
            function a(e, t) {
                return (a = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                    return e.__proto__ = t,
                    e
                }
                )(e, t)
            }
            function s() {
                if ("undefined" === typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" === typeof Proxy)
                    return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
                    ))),
                    !0
                } catch (e) {
                    return !1
                }
            }
            function c(e) {
                if (void 0 === e)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }
            function u(e, t) {
                if (t && ("object" === typeof t || "function" === typeof t))
                    return t;
                if (void 0 !== t)
                    throw new TypeError("Derived constructors may only return object or undefined");
                return c(e)
            }
            function l(e) {
                var t = s();
                return function() {
                    var n, r = i(e);
                    if (t) {
                        var o = i(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else
                        n = r.apply(this, arguments);
                    return u(this, n)
                }
            }
            function f(e, t) {
                for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = i(e)); )
                    ;
                return e
            }
            function d() {
                return (d = "undefined" !== typeof Reflect && Reflect.get ? Reflect.get.bind() : function(e, t, n) {
                    var r = f(e, t);
                    if (r) {
                        var o = Object.getOwnPropertyDescriptor(r, t);
                        return o.get ? o.get.call(arguments.length < 3 ? e : n) : o.value
                    }
                }
                ).apply(this, arguments)
            }
            var p = function() {
                function t() {
                    e(this, t),
                    Object.defineProperty(this, "listeners", {
                        value: {},
                        writable: !0,
                        configurable: !0
                    })
                }
                return r(t, [{
                    key: "addEventListener",
                    value: function(e, t, n) {
                        e in this.listeners || (this.listeners[e] = []),
                        this.listeners[e].push({
                            callback: t,
                            options: n
                        })
                    }
                }, {
                    key: "removeEventListener",
                    value: function(e, t) {
                        if (e in this.listeners)
                            for (var n = this.listeners[e], r = 0, o = n.length; r < o; r++)
                                if (n[r].callback === t)
                                    return void n.splice(r, 1)
                    }
                }, {
                    key: "dispatchEvent",
                    value: function(e) {
                        if (e.type in this.listeners) {
                            for (var t = this.listeners[e.type].slice(), n = 0, r = t.length; n < r; n++) {
                                var o = t[n];
                                try {
                                    o.callback.call(this, e)
                                } catch (i) {
                                    Promise.resolve().then((function() {
                                        throw i
                                    }
                                    ))
                                }
                                o.options && o.options.once && this.removeEventListener(e.type, o.callback)
                            }
                            return !e.defaultPrevented
                        }
                    }
                }]),
                t
            }()
              , g = function(t) {
                o(a, t);
                var n = l(a);
                function a() {
                    var t;
                    return e(this, a),
                    (t = n.call(this)).listeners || p.call(c(t)),
                    Object.defineProperty(c(t), "aborted", {
                        value: !1,
                        writable: !0,
                        configurable: !0
                    }),
                    Object.defineProperty(c(t), "onabort", {
                        value: null,
                        writable: !0,
                        configurable: !0
                    }),
                    Object.defineProperty(c(t), "reason", {
                        value: void 0,
                        writable: !0,
                        configurable: !0
                    }),
                    t
                }
                return r(a, [{
                    key: "toString",
                    value: function() {
                        return "[object AbortSignal]"
                    }
                }, {
                    key: "dispatchEvent",
                    value: function(e) {
                        "abort" === e.type && (this.aborted = !0,
                        "function" === typeof this.onabort && this.onabort.call(this, e)),
                        d(i(a.prototype), "dispatchEvent", this).call(this, e)
                    }
                }]),
                a
            }(p)
              , h = function() {
                function t() {
                    e(this, t),
                    Object.defineProperty(this, "signal", {
                        value: new g,
                        writable: !0,
                        configurable: !0
                    })
                }
                return r(t, [{
                    key: "abort",
                    value: function(e) {
                        var t;
                        try {
                            t = new Event("abort")
                        } catch (r) {
                            "undefined" !== typeof document ? document.createEvent ? (t = document.createEvent("Event")).initEvent("abort", !1, !1) : (t = document.createEventObject()).type = "abort" : t = {
                                type: "abort",
                                bubbles: !1,
                                cancelable: !1
                            }
                        }
                        var n = e;
                        if (void 0 === n)
                            if ("undefined" === typeof document)
                                (n = new Error("This operation was aborted")).name = "AbortError";
                            else
                                try {
                                    n = new DOMException("signal is aborted without reason")
                                } catch (o) {
                                    (n = new Error("This operation was aborted")).name = "AbortError"
                                }
                        this.signal.reason = n,
                        this.signal.dispatchEvent(t)
                    }
                }, {
                    key: "toString",
                    value: function() {
                        return "[object AbortController]"
                    }
                }]),
                t
            }();
            function v(e) {
                return e.__FORCE_INSTALL_ABORTCONTROLLER_POLYFILL ? (console.log("__FORCE_INSTALL_ABORTCONTROLLER_POLYFILL=true is set, will force install polyfill"),
                !0) : "function" === typeof e.Request && !e.Request.prototype.hasOwnProperty("signal") || !e.AbortController
            }
            function m(e) {
                "function" === typeof e && (e = {
                    fetch: e
                });
                var t = e
                  , n = t.fetch
                  , r = t.Request
                  , o = void 0 === r ? n.Request : r
                  , i = t.AbortController
                  , a = t.__FORCE_INSTALL_ABORTCONTROLLER_POLYFILL
                  , s = void 0 !== a && a;
                if (!v({
                    fetch: n,
                    Request: o,
                    AbortController: i,
                    __FORCE_INSTALL_ABORTCONTROLLER_POLYFILL: s
                }))
                    return {
                        fetch: n,
                        Request: c
                    };
                var c = o;
                (c && !c.prototype.hasOwnProperty("signal") || s) && ((c = function(e, t) {
                    var n;
                    t && t.signal && (n = t.signal,
                    delete t.signal);
                    var r = new o(e,t);
                    return n && Object.defineProperty(r, "signal", {
                        writable: !1,
                        enumerable: !1,
                        configurable: !0,
                        value: n
                    }),
                    r
                }
                ).prototype = o.prototype);
                var u = n;
                return {
                    fetch: function(e, t) {
                        var n = c && c.prototype.isPrototypeOf(e) ? e.signal : t ? t.signal : void 0;
                        if (n) {
                            var r;
                            try {
                                r = new DOMException("Aborted","AbortError")
                            } catch (i) {
                                (r = new Error("Aborted")).name = "AbortError"
                            }
                            if (n.aborted)
                                return Promise.reject(r);
                            var o = new Promise((function(e, t) {
                                n.addEventListener("abort", (function() {
                                    return t(r)
                                }
                                ), {
                                    once: !0
                                })
                            }
                            ));
                            return t && t.signal && delete t.signal,
                            Promise.race([o, u(e, t)])
                        }
                        return u(e, t)
                    },
                    Request: c
                }
            }
            "undefined" !== typeof Symbol && Symbol.toStringTag && (h.prototype[Symbol.toStringTag] = "AbortController",
            g.prototype[Symbol.toStringTag] = "AbortSignal"),
            function(e) {
                if (v(e))
                    if (e.fetch) {
                        var t = m(e)
                          , n = t.fetch
                          , r = t.Request;
                        e.fetch = n,
                        e.Request = r,
                        Object.defineProperty(e, "AbortController", {
                            writable: !0,
                            enumerable: !1,
                            configurable: !0,
                            value: h
                        }),
                        Object.defineProperty(e, "AbortSignal", {
                            writable: !0,
                            enumerable: !1,
                            configurable: !0,
                            value: g
                        })
                    } else
                        console.warn("fetch() is not available, cannot install abortcontroller-polyfill")
            }("undefined" !== typeof self ? self : n.g)
        }
        ) ? r.call(t, n, t, e) : r) || (e.exports = o)
    },
    8679: function(e, t, n) {
        "use strict";
        var r = n(1296)
          , o = {
            childContextTypes: !0,
            contextType: !0,
            contextTypes: !0,
            defaultProps: !0,
            displayName: !0,
            getDefaultProps: !0,
            getDerivedStateFromError: !0,
            getDerivedStateFromProps: !0,
            mixins: !0,
            propTypes: !0,
            type: !0
        }
          , i = {
            name: !0,
            length: !0,
            prototype: !0,
            caller: !0,
            callee: !0,
            arguments: !0,
            arity: !0
        }
          , a = {
            $$typeof: !0,
            compare: !0,
            defaultProps: !0,
            displayName: !0,
            propTypes: !0,
            type: !0
        }
          , s = {};
        function c(e) {
            return r.isMemo(e) ? a : s[e.$$typeof] || o
        }
        s[r.ForwardRef] = {
            $$typeof: !0,
            render: !0,
            defaultProps: !0,
            displayName: !0,
            propTypes: !0
        },
        s[r.Memo] = a;
        var u = Object.defineProperty
          , l = Object.getOwnPropertyNames
          , f = Object.getOwnPropertySymbols
          , d = Object.getOwnPropertyDescriptor
          , p = Object.getPrototypeOf
          , g = Object.prototype;
        e.exports = function e(t, n, r) {
            if ("string" !== typeof n) {
                if (g) {
                    var o = p(n);
                    o && o !== g && e(t, o, r)
                }
                var a = l(n);
                f && (a = a.concat(f(n)));
                for (var s = c(t), h = c(n), v = 0; v < a.length; ++v) {
                    var m = a[v];
                    if (!i[m] && (!r || !r[m]) && (!h || !h[m]) && (!s || !s[m])) {
                        var y = d(n, m);
                        try {
                            u(t, m, y)
                        } catch (b) {}
                    }
                }
            }
            return t
        }
    },
    6103: function(e, t) {
        "use strict";
        var n = "function" === typeof Symbol && Symbol.for
          , r = n ? Symbol.for("react.element") : 60103
          , o = n ? Symbol.for("react.portal") : 60106
          , i = n ? Symbol.for("react.fragment") : 60107
          , a = n ? Symbol.for("react.strict_mode") : 60108
          , s = n ? Symbol.for("react.profiler") : 60114
          , c = n ? Symbol.for("react.provider") : 60109
          , u = n ? Symbol.for("react.context") : 60110
          , l = n ? Symbol.for("react.async_mode") : 60111
          , f = n ? Symbol.for("react.concurrent_mode") : 60111
          , d = n ? Symbol.for("react.forward_ref") : 60112
          , p = n ? Symbol.for("react.suspense") : 60113
          , g = n ? Symbol.for("react.suspense_list") : 60120
          , h = n ? Symbol.for("react.memo") : 60115
          , v = n ? Symbol.for("react.lazy") : 60116
          , m = n ? Symbol.for("react.block") : 60121
          , y = n ? Symbol.for("react.fundamental") : 60117
          , b = n ? Symbol.for("react.responder") : 60118
          , S = n ? Symbol.for("react.scope") : 60119;
        function w(e) {
            if ("object" === typeof e && null !== e) {
                var t = e.$$typeof;
                switch (t) {
                case r:
                    switch (e = e.type) {
                    case l:
                    case f:
                    case i:
                    case s:
                    case a:
                    case p:
                        return e;
                    default:
                        switch (e = e && e.$$typeof) {
                        case u:
                        case d:
                        case v:
                        case h:
                        case c:
                            return e;
                        default:
                            return t
                        }
                    }
                case o:
                    return t
                }
            }
        }
        function O(e) {
            return w(e) === f
        }
        t.AsyncMode = l,
        t.ConcurrentMode = f,
        t.ContextConsumer = u,
        t.ContextProvider = c,
        t.Element = r,
        t.ForwardRef = d,
        t.Fragment = i,
        t.Lazy = v,
        t.Memo = h,
        t.Portal = o,
        t.Profiler = s,
        t.StrictMode = a,
        t.Suspense = p,
        t.isAsyncMode = function(e) {
            return O(e) || w(e) === l
        }
        ,
        t.isConcurrentMode = O,
        t.isContextConsumer = function(e) {
            return w(e) === u
        }
        ,
        t.isContextProvider = function(e) {
            return w(e) === c
        }
        ,
        t.isElement = function(e) {
            return "object" === typeof e && null !== e && e.$$typeof === r
        }
        ,
        t.isForwardRef = function(e) {
            return w(e) === d
        }
        ,
        t.isFragment = function(e) {
            return w(e) === i
        }
        ,
        t.isLazy = function(e) {
            return w(e) === v
        }
        ,
        t.isMemo = function(e) {
            return w(e) === h
        }
        ,
        t.isPortal = function(e) {
            return w(e) === o
        }
        ,
        t.isProfiler = function(e) {
            return w(e) === s
        }
        ,
        t.isStrictMode = function(e) {
            return w(e) === a
        }
        ,
        t.isSuspense = function(e) {
            return w(e) === p
        }
        ,
        t.isValidElementType = function(e) {
            return "string" === typeof e || "function" === typeof e || e === i || e === f || e === s || e === a || e === p || e === g || "object" === typeof e && null !== e && (e.$$typeof === v || e.$$typeof === h || e.$$typeof === c || e.$$typeof === u || e.$$typeof === d || e.$$typeof === y || e.$$typeof === b || e.$$typeof === S || e.$$typeof === m)
        }
        ,
        t.typeOf = w
    },
    1296: function(e, t, n) {
        "use strict";
        e.exports = n(6103)
    },
    2705: function(e, t, n) {
        var r = n(5639).Symbol;
        e.exports = r
    },
    4239: function(e, t, n) {
        var r = n(2705)
          , o = n(9607)
          , i = n(2333)
          , a = r ? r.toStringTag : void 0;
        e.exports = function(e) {
            return null == e ? void 0 === e ? "[object Undefined]" : "[object Null]" : a && a in Object(e) ? o(e) : i(e)
        }
    },
    7561: function(e, t, n) {
        var r = n(7990)
          , o = /^\s+/;
        e.exports = function(e) {
            return e ? e.slice(0, r(e) + 1).replace(o, "") : e
        }
    },
    1957: function(e, t, n) {
        var r = "object" == typeof n.g && n.g && n.g.Object === Object && n.g;
        e.exports = r
    },
    9607: function(e, t, n) {
        var r = n(2705)
          , o = Object.prototype
          , i = o.hasOwnProperty
          , a = o.toString
          , s = r ? r.toStringTag : void 0;
        e.exports = function(e) {
            var t = i.call(e, s)
              , n = e[s];
            try {
                e[s] = void 0;
                var r = !0
            } catch (c) {}
            var o = a.call(e);
            return r && (t ? e[s] = n : delete e[s]),
            o
        }
    },
    2333: function(e) {
        var t = Object.prototype.toString;
        e.exports = function(e) {
            return t.call(e)
        }
    },
    5639: function(e, t, n) {
        var r = n(1957)
          , o = "object" == typeof self && self && self.Object === Object && self
          , i = r || o || Function("return this")();
        e.exports = i
    },
    7990: function(e) {
        var t = /\s/;
        e.exports = function(e) {
            for (var n = e.length; n-- && t.test(e.charAt(n)); )
                ;
            return n
        }
    },
    3279: function(e, t, n) {
        var r = n(3218)
          , o = n(7771)
          , i = n(4841)
          , a = Math.max
          , s = Math.min;
        e.exports = function(e, t, n) {
            var c, u, l, f, d, p, g = 0, h = !1, v = !1, m = !0;
            if ("function" != typeof e)
                throw new TypeError("Expected a function");
            function y(t) {
                var n = c
                  , r = u;
                return c = u = void 0,
                g = t,
                f = e.apply(r, n)
            }
            function b(e) {
                return g = e,
                d = setTimeout(w, t),
                h ? y(e) : f
            }
            function S(e) {
                var n = e - p;
                return void 0 === p || n >= t || n < 0 || v && e - g >= l
            }
            function w() {
                var e = o();
                if (S(e))
                    return O(e);
                d = setTimeout(w, function(e) {
                    var n = t - (e - p);
                    return v ? s(n, l - (e - g)) : n
                }(e))
            }
            function O(e) {
                return d = void 0,
                m && c ? y(e) : (c = u = void 0,
                f)
            }
            function E() {
                var e = o()
                  , n = S(e);
                if (c = arguments,
                u = this,
                p = e,
                n) {
                    if (void 0 === d)
                        return b(p);
                    if (v)
                        return clearTimeout(d),
                        d = setTimeout(w, t),
                        y(p)
                }
                return void 0 === d && (d = setTimeout(w, t)),
                f
            }
            return t = i(t) || 0,
            r(n) && (h = !!n.leading,
            l = (v = "maxWait"in n) ? a(i(n.maxWait) || 0, t) : l,
            m = "trailing"in n ? !!n.trailing : m),
            E.cancel = function() {
                void 0 !== d && clearTimeout(d),
                g = 0,
                c = p = u = d = void 0
            }
            ,
            E.flush = function() {
                return void 0 === d ? f : O(o())
            }
            ,
            E
        }
    },
    5220: function(e) {
        e.exports = function(e) {
            return null === e
        }
    },
    3218: function(e) {
        e.exports = function(e) {
            var t = typeof e;
            return null != e && ("object" == t || "function" == t)
        }
    },
    7005: function(e) {
        e.exports = function(e) {
            return null != e && "object" == typeof e
        }
    },
    3448: function(e, t, n) {
        var r = n(4239)
          , o = n(7005);
        e.exports = function(e) {
            return "symbol" == typeof e || o(e) && "[object Symbol]" == r(e)
        }
    },
    2353: function(e) {
        e.exports = function(e) {
            return void 0 === e
        }
    },
    7771: function(e, t, n) {
        var r = n(5639);
        e.exports = function() {
            return r.Date.now()
        }
    },
    3493: function(e, t, n) {
        var r = n(3279)
          , o = n(3218);
        e.exports = function(e, t, n) {
            var i = !0
              , a = !0;
            if ("function" != typeof e)
                throw new TypeError("Expected a function");
            return o(n) && (i = "leading"in n ? !!n.leading : i,
            a = "trailing"in n ? !!n.trailing : a),
            r(e, t, {
                leading: i,
                maxWait: t,
                trailing: a
            })
        }
    },
    4841: function(e, t, n) {
        var r = n(7561)
          , o = n(3218)
          , i = n(3448)
          , a = /^[-+]0x[0-9a-f]+$/i
          , s = /^0b[01]+$/i
          , c = /^0o[0-7]+$/i
          , u = parseInt;
        e.exports = function(e) {
            if ("number" == typeof e)
                return e;
            if (i(e))
                return NaN;
            if (o(e)) {
                var t = "function" == typeof e.valueOf ? e.valueOf() : e;
                e = o(t) ? t + "" : t
            }
            if ("string" != typeof e)
                return 0 === e ? e : +e;
            e = r(e);
            var n = s.test(e);
            return n || c.test(e) ? u(e.slice(2), n ? 2 : 8) : a.test(e) ? NaN : +e
        }
    },
    1752: function(e, t, n) {
        e.exports = n(6616)
    },
    8e3: function(e, t, n) {
        "use strict";
        var r;
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.AmpStateContext = void 0;
        var o = ((r = n(1720)) && r.__esModule ? r : {
            default: r
        }).default.createContext({});
        t.AmpStateContext = o
    },
    5646: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.isInAmpMode = a,
        t.useAmp = function() {
            return a(o.default.useContext(i.AmpStateContext))
        }
        ;
        var r, o = (r = n(1720)) && r.__esModule ? r : {
            default: r
        }, i = n(8e3);
        function a() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
              , t = e.ampFirst
              , n = void 0 !== t && t
              , r = e.hybrid
              , o = void 0 !== r && r
              , i = e.hasQuery
              , a = void 0 !== i && i;
            return n || o && a
        }
    },
    5480: function(e, t, n) {
        "use strict";
        var r = n(1682);
        function o(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, r)
            }
            return n
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.defaultHead = f,
        t.default = void 0;
        var i, a = function(e) {
            if (e && e.__esModule)
                return e;
            var t = {};
            if (null != e)
                for (var n in e)
                    if (Object.prototype.hasOwnProperty.call(e, n)) {
                        var r = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(e, n) : {};
                        r.get || r.set ? Object.defineProperty(t, n, r) : t[n] = e[n]
                    }
            return t.default = e,
            t
        }(n(1720)), s = (i = n(1585)) && i.__esModule ? i : {
            default: i
        }, c = n(8e3), u = n(5850), l = n(5646);
        function f() {
            var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0]
              , t = [a.default.createElement("meta", {
                charSet: "utf-8"
            })];
            return e || t.push(a.default.createElement("meta", {
                name: "viewport",
                content: "width=device-width"
            })),
            t
        }
        function d(e, t) {
            return "string" === typeof t || "number" === typeof t ? e : t.type === a.default.Fragment ? e.concat(a.default.Children.toArray(t.props.children).reduce((function(e, t) {
                return "string" === typeof t || "number" === typeof t ? e : e.concat(t)
            }
            ), [])) : e.concat(t)
        }
        var p = ["name", "httpEquiv", "charSet", "itemProp"];
        function g(e, t) {
            return e.reduce((function(e, t) {
                var n = a.default.Children.toArray(t.props.children);
                return e.concat(n)
            }
            ), []).reduce(d, []).reverse().concat(f(t.inAmpMode)).filter(function() {
                var e = new Set
                  , t = new Set
                  , n = new Set
                  , r = {};
                return function(o) {
                    var i = !0
                      , a = !1;
                    if (o.key && "number" !== typeof o.key && o.key.indexOf("$") > 0) {
                        a = !0;
                        var s = o.key.slice(o.key.indexOf("$") + 1);
                        e.has(s) ? i = !1 : e.add(s)
                    }
                    switch (o.type) {
                    case "title":
                    case "base":
                        t.has(o.type) ? i = !1 : t.add(o.type);
                        break;
                    case "meta":
                        for (var c = 0, u = p.length; c < u; c++) {
                            var l = p[c];
                            if (o.props.hasOwnProperty(l))
                                if ("charSet" === l)
                                    n.has(l) ? i = !1 : n.add(l);
                                else {
                                    var f = o.props[l]
                                      , d = r[l] || new Set;
                                    "name" === l && a || !d.has(f) ? (d.add(f),
                                    r[l] = d) : i = !1
                                }
                        }
                    }
                    return i
                }
            }()).reverse().map((function(e, n) {
                var i = e.key || n;
                if (!t.inAmpMode && "link" === e.type && e.props.href && ["https://fonts.googleapis.com/css", "https://use.typekit.net/"].some((function(t) {
                    return e.props.href.startsWith(t)
                }
                ))) {
                    var s = function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {};
                            t % 2 ? o(Object(n), !0).forEach((function(t) {
                                r(e, t, n[t])
                            }
                            )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : o(Object(n)).forEach((function(t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                            }
                            ))
                        }
                        return e
                    }({}, e.props || {});
                    return s["data-href"] = s.href,
                    s.href = void 0,
                    s["data-optimized-fonts"] = !0,
                    a.default.cloneElement(e, s)
                }
                return a.default.cloneElement(e, {
                    key: i
                })
            }
            ))
        }
        var h = function(e) {
            var t = e.children
              , n = a.useContext(c.AmpStateContext)
              , r = a.useContext(u.HeadManagerContext);
            return a.default.createElement(s.default, {
                reduceComponentsToState: g,
                headManager: r,
                inAmpMode: l.isInAmpMode(n)
            }, t)
        };
        t.default = h
    },
    1585: function(e, t, n) {
        "use strict";
        var r = n(3115)
          , o = n(2553)
          , i = n(2012)
          , a = (n(450),
        n(9807))
          , s = n(7690)
          , c = n(9828);
        function u(e) {
            var t = function() {
                if ("undefined" === typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" === typeof Proxy)
                    return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
                    ))),
                    !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var n, r = c(e);
                if (t) {
                    var o = c(this).constructor;
                    n = Reflect.construct(r, arguments, o)
                } else
                    n = r.apply(this, arguments);
                return s(this, n)
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.default = void 0;
        var l = function(e) {
            if (e && e.__esModule)
                return e;
            var t = {};
            if (null != e)
                for (var n in e)
                    if (Object.prototype.hasOwnProperty.call(e, n)) {
                        var r = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(e, n) : {};
                        r.get || r.set ? Object.defineProperty(t, n, r) : t[n] = e[n]
                    }
            return t.default = e,
            t
        }(n(1720));
        var f = function(e) {
            a(n, e);
            var t = u(n);
            function n(e) {
                var i;
                return o(this, n),
                (i = t.call(this, e)).emitChange = function() {
                    i._hasHeadManager && i.props.headManager.updateHead(i.props.reduceComponentsToState(r(i.props.headManager.mountedInstances), i.props))
                }
                ,
                i._hasHeadManager = i.props.headManager && i.props.headManager.mountedInstances,
                i
            }
            return i(n, [{
                key: "componentDidMount",
                value: function() {
                    this._hasHeadManager && this.props.headManager.mountedInstances.add(this),
                    this.emitChange()
                }
            }, {
                key: "componentDidUpdate",
                value: function() {
                    this.emitChange()
                }
            }, {
                key: "componentWillUnmount",
                value: function() {
                    this._hasHeadManager && this.props.headManager.mountedInstances.delete(this),
                    this.emitChange()
                }
            }, {
                key: "render",
                value: function() {
                    return null
                }
            }]),
            n
        }(l.Component);
        t.default = f
    },
    1262: function(e, t, n) {
        "use strict";
        t.Z5 = t.Ps = t.cj = t.YR = void 0;
        var r = n(5232);
        Object.defineProperty(t, "YR", {
            enumerable: !0,
            get: function() {
                return r.NgStatus
            }
        }),
        Object.defineProperty(t, "cj", {
            enumerable: !0,
            get: function() {
                return r.NgOrientation
            }
        }),
        Object.defineProperty(t, "Ps", {
            enumerable: !0,
            get: function() {
                return r.NgMimeTypes
            }
        });
        var o = n(2470);
        Object.defineProperty(t, "Z5", {
            enumerable: !0,
            get: function() {
                return o.PlaySessionStatus
            }
        })
    },
    5232: function(e, t, n) {
        "use strict";
        var r = this && this.__createBinding || (Object.create ? function(e, t, n, r) {
            void 0 === r && (r = n),
            Object.defineProperty(e, r, {
                enumerable: !0,
                get: function() {
                    return t[n]
                }
            })
        }
        : function(e, t, n, r) {
            void 0 === r && (r = n),
            e[r] = t[n]
        }
        )
          , o = this && this.__exportStar || function(e, t) {
            for (var n in e)
                "default" === n || Object.prototype.hasOwnProperty.call(t, n) || r(t, e, n)
        }
        ;
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        o(n(4301), t)
    },
    4301: function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.NgMimeTypes = t.NgOrientation = t.NgStatus = void 0,
        function(e) {
            e.Success = "Success",
            e.NeedsRedirect = "NeedsRedirect",
            e.Pending = "Pending",
            e.Failure = "Failure",
            e.FailureTryAgain = "FailureTryAgain",
            e.FailureSessionMigrated = "FailureSessionMigrated",
            e.FailureInvalidPlayToken = "FailureInvalidPlayToken",
            e.FailureNoResource = "FailureNoResource",
            e.FailureInvalidParameter = "FailureInvalidParameter",
            e.FailureInvalidState = "FailureInvalidState",
            e.FailureUnauthorized = "FailureUnauthorized",
            e.FailureUserStorageBusy = "FailureUserStorageBusy",
            e.FailureServiceNotInRegion = "FailureServiceNotInRegion",
            e.FailureUnderMaintenance = "FailureUnderMaintenance"
        }(t.NgStatus || (t.NgStatus = {})),
        function(e) {
            e.landscape = "landscape",
            e.portrait = "portrait",
            e.unspecified = "unspecified"
        }(t.NgOrientation || (t.NgOrientation = {})),
        function(e) {
            e.None = "none",
            e.Jpeg = "image/jpeg",
            e.Png = "image/png",
            e.Tiff = "image/tiff",
            e.Svg = "image/svg+xml"
        }(t.NgMimeTypes || (t.NgMimeTypes = {}))
    },
    2470: function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.PlaySessionStatus = void 0,
        function(e) {
            e.NotFound = "NotFound",
            e.Active = "Active",
            e.Migrated = "Migrated"
        }(t.PlaySessionStatus || (t.PlaySessionStatus = {}))
    },
    5109: function(e, t, n) {
        "use strict";
        n.r(t),
        n.d(t, {
            default: function() {
                return M
            }
        });
        var r = n(2809)
          , o = (n(1720),
        n(5617))
          , i = n(1508)
          , a = n(7981)
          , s = (n(4879),
        n(993),
        n(202),
        n(3367),
        n(9008))
          , c = n(3978)
          , u = n(8718)
          , l = n(5671)
          , f = n(3144)
          , d = []
          , p = d.forEach
          , g = d.slice;
        function h(e) {
            return p.call(g.call(arguments, 1), (function(t) {
                if (t)
                    for (var n in t)
                        void 0 === e[n] && (e[n] = t[n])
            }
            )),
            e
        }
        var v = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/
          , m = function(e, t, n) {
            var r = n || {};
            r.path = r.path || "/";
            var o = e + "=" + encodeURIComponent(t);
            if (r.maxAge > 0) {
                var i = r.maxAge - 0;
                if (isNaN(i))
                    throw new Error("maxAge should be a Number");
                o += "; Max-Age=" + Math.floor(i)
            }
            if (r.domain) {
                if (!v.test(r.domain))
                    throw new TypeError("option domain is invalid");
                o += "; Domain=" + r.domain
            }
            if (r.path) {
                if (!v.test(r.path))
                    throw new TypeError("option path is invalid");
                o += "; Path=" + r.path
            }
            if (r.expires) {
                if ("function" !== typeof r.expires.toUTCString)
                    throw new TypeError("option expires is invalid");
                o += "; Expires=" + r.expires.toUTCString()
            }
            if (r.httpOnly && (o += "; HttpOnly"),
            r.secure && (o += "; Secure"),
            r.sameSite)
                switch ("string" === typeof r.sameSite ? r.sameSite.toLowerCase() : r.sameSite) {
                case !0:
                    o += "; SameSite=Strict";
                    break;
                case "lax":
                    o += "; SameSite=Lax";
                    break;
                case "strict":
                    o += "; SameSite=Strict";
                    break;
                case "none":
                    o += "; SameSite=None";
                    break;
                default:
                    throw new TypeError("option sameSite is invalid")
                }
            return o
        }
          , y = function(e, t, n, r) {
            var o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {
                path: "/",
                sameSite: "strict"
            };
            n && (o.expires = new Date,
            o.expires.setTime(o.expires.getTime() + 60 * n * 1e3)),
            r && (o.domain = r),
            document.cookie = m(e, encodeURIComponent(t), o)
        }
          , b = function(e) {
            for (var t = e + "=", n = document.cookie.split(";"), r = 0; r < n.length; r++) {
                for (var o = n[r]; " " === o.charAt(0); )
                    o = o.substring(1, o.length);
                if (0 === o.indexOf(t))
                    return o.substring(t.length, o.length)
            }
            return null
        }
          , S = {
            name: "cookie",
            lookup: function(e) {
                var t;
                if (e.lookupCookie && "undefined" !== typeof document) {
                    var n = b(e.lookupCookie);
                    n && (t = n)
                }
                return t
            },
            cacheUserLanguage: function(e, t) {
                t.lookupCookie && "undefined" !== typeof document && y(t.lookupCookie, e, t.cookieMinutes, t.cookieDomain, t.cookieOptions)
            }
        }
          , w = {
            name: "querystring",
            lookup: function(e) {
                var t;
                if ("undefined" !== typeof window)
                    for (var n = window.location.search.substring(1).split("&"), r = 0; r < n.length; r++) {
                        var o = n[r].indexOf("=");
                        if (o > 0)
                            n[r].substring(0, o) === e.lookupQuerystring && (t = n[r].substring(o + 1))
                    }
                return t
            }
        }
          , O = null
          , E = function() {
            if (null !== O)
                return O;
            try {
                O = "undefined" !== window && null !== window.localStorage;
                var e = "i18next.translate.boo";
                window.localStorage.setItem(e, "foo"),
                window.localStorage.removeItem(e)
            } catch (t) {
                O = !1
            }
            return O
        }
          , T = {
            name: "localStorage",
            lookup: function(e) {
                var t;
                if (e.lookupLocalStorage && E()) {
                    var n = window.localStorage.getItem(e.lookupLocalStorage);
                    n && (t = n)
                }
                return t
            },
            cacheUserLanguage: function(e, t) {
                t.lookupLocalStorage && E() && window.localStorage.setItem(t.lookupLocalStorage, e)
            }
        }
          , _ = null
          , k = function() {
            if (null !== _)
                return _;
            try {
                _ = "undefined" !== window && null !== window.sessionStorage;
                var e = "i18next.translate.boo";
                window.sessionStorage.setItem(e, "foo"),
                window.sessionStorage.removeItem(e)
            } catch (t) {
                _ = !1
            }
            return _
        }
          , P = {
            name: "sessionStorage",
            lookup: function(e) {
                var t;
                if (e.lookupSessionStorage && k()) {
                    var n = window.sessionStorage.getItem(e.lookupSessionStorage);
                    n && (t = n)
                }
                return t
            },
            cacheUserLanguage: function(e, t) {
                t.lookupSessionStorage && k() && window.sessionStorage.setItem(t.lookupSessionStorage, e)
            }
        }
          , x = {
            name: "navigator",
            lookup: function(e) {
                var t = [];
                if ("undefined" !== typeof navigator) {
                    if (navigator.languages)
                        for (var n = 0; n < navigator.languages.length; n++)
                            t.push(navigator.languages[n]);
                    navigator.userLanguage && t.push(navigator.userLanguage),
                    navigator.language && t.push(navigator.language)
                }
                return t.length > 0 ? t : void 0
            }
        }
          , A = {
            name: "htmlTag",
            lookup: function(e) {
                var t, n = e.htmlTag || ("undefined" !== typeof document ? document.documentElement : null);
                return n && "function" === typeof n.getAttribute && (t = n.getAttribute("lang")),
                t
            }
        }
          , I = {
            name: "path",
            lookup: function(e) {
                var t;
                if ("undefined" !== typeof window) {
                    var n = window.location.pathname.match(/\/([a-zA-Z-]*)/g);
                    if (n instanceof Array)
                        if ("number" === typeof e.lookupFromPathIndex) {
                            if ("string" !== typeof n[e.lookupFromPathIndex])
                                return;
                            t = n[e.lookupFromPathIndex].replace("/", "")
                        } else
                            t = n[0].replace("/", "")
                }
                return t
            }
        }
          , C = {
            name: "subdomain",
            lookup: function(e) {
                var t;
                if ("undefined" !== typeof window) {
                    var n = window.location.href.match(/(?:http[s]*\:\/\/)*(.*?)\.(?=[^\/]*\..{2,5})/gi);
                    n instanceof Array && (t = "number" === typeof e.lookupFromSubdomainIndex ? n[e.lookupFromSubdomainIndex].replace("http://", "").replace("https://", "").replace(".", "") : n[0].replace("http://", "").replace("https://", "").replace(".", ""))
                }
                return t
            }
        };
        var L = function() {
            function e(t) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                (0,
                l.Z)(this, e),
                this.type = "languageDetector",
                this.detectors = {},
                this.init(t, n)
            }
            return (0,
            f.Z)(e, [{
                key: "init",
                value: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                      , n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    this.services = e,
                    this.options = h(t, this.options || {}, {
                        order: ["querystring", "cookie", "localStorage", "sessionStorage", "navigator", "htmlTag"],
                        lookupQuerystring: "lng",
                        lookupCookie: "i18next",
                        lookupLocalStorage: "i18nextLng",
                        lookupSessionStorage: "i18nextLng",
                        caches: ["localStorage"],
                        excludeCacheFor: ["cimode"]
                    }),
                    this.options.lookupFromUrlIndex && (this.options.lookupFromPathIndex = this.options.lookupFromUrlIndex),
                    this.i18nOptions = n,
                    this.addDetector(S),
                    this.addDetector(w),
                    this.addDetector(T),
                    this.addDetector(P),
                    this.addDetector(x),
                    this.addDetector(A),
                    this.addDetector(I),
                    this.addDetector(C)
                }
            }, {
                key: "addDetector",
                value: function(e) {
                    this.detectors[e.name] = e
                }
            }, {
                key: "detect",
                value: function(e) {
                    var t = this;
                    e || (e = this.options.order);
                    var n = [];
                    return e.forEach((function(e) {
                        if (t.detectors[e]) {
                            var r = t.detectors[e].lookup(t.options);
                            r && "string" === typeof r && (r = [r]),
                            r && (n = n.concat(r))
                        }
                    }
                    )),
                    this.services.languageUtils.getBestMatchFromCodes ? n : n.length > 0 ? n[0] : null
                }
            }, {
                key: "cacheUserLanguage",
                value: function(e, t) {
                    var n = this;
                    t || (t = this.options.caches),
                    t && (this.options.excludeCacheFor && this.options.excludeCacheFor.indexOf(e) > -1 || t.forEach((function(t) {
                        n.detectors[t] && n.detectors[t].cacheUserLanguage(e, n.options)
                    }
                    )))
                }
            }]),
            e
        }();
        L.type = "languageDetector";
        var R = {
            en: {
                translation: JSON.parse('{"and":"and","disclaimerSub1":"All rights reserved.","disclaimerSub2":"By using now.gg you agree to our ","disclaimerSub3":"including cookie use.","end":"End","loading":"Loading","logo":"Logo","or":"Or","privacyPolicy":"Privacy Policy","somethingWentWrong":"Unfortunately, something went wrong.","refreshingIn":"Refreshing in ","refreshNow":"Refresh now ","support":"Support","termsOfUse":"Terms of Use","website":"Website","launchGame":"Launch Game","backToGame":"Back to the game","back":"Back","gameReady":"Your game is ready.","gameEnd":"Enjoyed the game?","soundIcon":"Sound Icon","mutedSoundIcon":"Muted Sound Icon","gameWillStart":"Game will start after the ad","sponsored":"Sponsored Ad","playInBrowser":"Play in browser","download":"Download","uhOh":"Uh-Oh","areYouSure":"Are you sure?","link":"The following link will open in a new tab:","pouringRequests":"It\u2019s pouring requests","backShortly":"We will be back soon. Try again shortly.","dailyTimeOver":"Daily gameplay time over!","dailyTimeOverMessage":"Your 30 min gameplay time is over, but you can enjoy popular games to your heart\u2019s content.","exploreMoreGames":"Explore more games","nerdMode":"Nerd mode","nerdModeDescription":"Nerd mode impacts gameplay performance. Please use Nerd mode only when required.","platform":"Platform","cancel":"Cancel","yes":"Yes","next":"Next","appPackage":"App Package","country":"Country","connectionState":"Connection State","ping":"Ping","viewport":"Viewport","buildVersion":"Build version","devicePixelRatio":"Device Pixel Ratio","currentResolution":"Current Resolution","frames":"Frames","jitter":"Jitter / AvgJitterBufferDelay","framesPerSecond":"Frames per second","reportAProblem":"Report a Problem","build":"Build","clientID":"Client ID","sessionID":"Session ID","copiedToClipboard":"Copied to clipboard","networkLost":"Network lost. Trying to reconnect...","connected":"Connected","faqs":"FAQs","clickToUnmute":"Click to unmute","tapToUnmute":"Tap to unmute","launchingGame":"Launching game...","launchGameText":"Launching game in {{time}}","fullscreen":"Fullscreen","exitFullscreen":"Exit fullscreen","enterFullscreen":"Enter fullscreen","robloxToastMsg":"Hold right click to rotate camera","closeAdIn":"Close ad in {{time}}","ad":"Ad","Help and support":"Help and support","Report a problem":"Report a problem","Game is lagging":"Game is lagging","Game stuck at loading screen":"Game stuck at loading screen","Ping is too high":"Ping is too high","Key Controls":"Key Controls","Disk Storage":"Disk Storage","Other":"Other","Run a diagnostic report":"Run a diagnostic report","Email":"Email","Problem Description":"Problem Description","Upload picture or screenshot":"Upload picture or screenshot","Describe the problem you are experiencing ...":"Use atleast 12 characters to describe the problem you are experiencing","min12Characters":"Minimum 12 Characters are required","Upload from device":"Upload from device","Capture screen":"Capture screen","Thank you":"Thank you","Submission Failed":"Submission Failed","Failed to submit the feedback, please try again.":"Failed to submit the feedback, please try again.","We have received your response and it\'s being reviewed by our Support Team.":"We have received your response and it\'s being reviewed by our Support Team.","Uploaded file is not a valid image. Please try again.":"Uploaded file is not a valid image. Please try again.","areYouThere":"Hey, are you still there?","idleScreentext":"You\u2019ll be logged out of the session if you\u2019re away from the screen for a while. Don\u2019t worry, everything will be saved automatically.","iAmStillHere":"I\'m still here","stoppingGame":"Stopping game in 30 Second(s)","disclaimer":"By using now.gg, you agree to the","rights":"\xa9 2023 now.gg. All rights reserved.","copyright":"\xa9 2023 now.gg.","cookieUse":"Cookie Use","terms":"Terms of Use","getStarted":"Let\'s get started","signInHead":"Sign in to start playing","signInProg":"Sign in to save progress","signInInactive":"Sign in to continue playing","endLogin":"Playtime limit reached. Sign in to continue playing.","continue":"Continue Playing Here","loggedInAs":"Logged in as","asGuest":"play as guest","logout":"Logout","lockCursor":"Lock mouse cursor","cursorLockedInfo":"Press [ESC] to unlock cursor","cursorLocked":"Cursor locked","unsupportedBrowser":"Browser not supported","switchBrowser":"For best experience switch to one of these browsers","googleChrome":"Google Chrome","appleSafari":"Apple Safari","microsoftEdge":"Microsoft Edge","linkCopied":"Link copied","okay":"Okay","gotIt":"Ok, got it","permission":"This game needs permission for the following","spotInstanceShortMsg":"Assigning a new server in","spotInstanceLongMsg":"Due to high traffic, we may switch users to a different server","serverBusy":"Server busy","serverBusyMsg":"Restart to get on a new server and continue playing!","restart":"Restart","gameTile":"Game tile","roundLoader":"Round loader","infoIcon":"Info icon","closeIcon":"Close icon","overlay.klook":"Tip: Hold","overlay.look":"Tip: Press","overlay.tip2":" to use mouse for look around.","controls.title":"Game controls","mouseSensitivity":"Mouse sensitivity","mouseLock":"Mouse Lock","sensitivity":"Sensitivity","video":"Video","audio":"Audio","bitrate":"Bitrate","codec":"Codec","packets":"Packets","slowNetwork":"Extremely high latency may impact gameplay","unstableNetwork":"High latency may impact gameplay","currentlyPoor":"Currently poor","slowInternetConnection":"Slow intenet connection","recommendations":"Recommendations","networkStability":"Network stability","troubleshootAndHelp":"Troubleshooting & Help","knowMore":"Know more","moveCloser":"If you are using Wifi, try moving closer.","avoidActivities":"Avoid activities with heavy internet usage.","connectToEthernet":"Connect to Ethernet.","farFromServer":"Maybe you are far away from server location.","shiftLockMsg":"to activate/deactivate shift lock","shiftLockActive":"Shift lock activated","shiftLockInactive":"Shift lock deactivated","press":"Press","notFound":"Unfortunately, we are currently unable to provide our service in your country. We hope to serve you soon!","proxyDetected":"Proxy/VPN Detected","toPlayGame":"To play the game:","disableVpn":"Disable any active VPN connection","reloadPage":"Reload the page","useURL":"Use the following URL","copyUrl":"Copy URL","uploadingFile":"Uploading file","uploadedSuccessfully":"Uploaded successfully","uploadFailed":"Upload failed","downloadingFile":"Downloading file","downloadedSuccessfully":"Downloaded successfully","downloadFailed":"Download failed","underMaintenance":"Under Maintenance","currentlyUnderMaintenance":"We are currently under maintenance,","tryAfterSometime":"please try after some time","diagnosingProblem":"Diagnosing problem","sidebar.legacyTitle":"Legacy controls","sidebar.nativeTitle":"Native controls","sidebar.legacyInfo":"Legacy Controls allows you to use keymappings defined by the modders.","sidebar.nativeInfo":"Native Controls allows you to use the inbuilt controls by the game developers.","sidebar.onscreenControls":"On-screen controls","sidebar.controlSchemes":"Control Scheme","sidebar.keyboard":"Keyboard","sidebar.gamepad":"Gamepad","sidebar.specialKey":"Special Key","sidebar.shiftLockInfo":"To rotate camera and hide hardware cursor. Press again to make cursor visible.","sidebar.gamepadNotDetected":"Gamepad not detected!","sidebar.gamepadNotSupported":"Gamepad not supported","sidebar.gamepadNotDetectedInfo":"If you have one, make sure it\u2019s plugged-in/paired, and press buttons to wake it up.","sidebar.gamepadNotSupportedInfo":"Unfortunately, this game does not support the gamepad.","loginPromptHead":"Save your game progress","loginPromptText":"Login and save your game progress with a single click!","guestToast":"Playing as Guest","player":"Player","welcome":"Welcome","pwaTitle":"Pro tip: Install game shortcut","completeHead":"Gameplay time limit reached","completeMsg":"This session has a playtime limit to promote fair usage of our services. Please restart to play again.","inactiveHead":"Game stopped due to inactivity","inactiveMsg":"Your game session stops when you\'re away from the screen for a while. Don\'t worry, everything is saved automatically.","migratedHead":"Screen Limit","duplicateHead":"Tab Limit","migratedMsg":"Your account may be in use on more than one device or screen. Play on this screen with just one click.","duplicateMsg":"This game is already active in another tab. You can start playing here by clicking on the button below.","yourGameWill":"Your game will begin after the following advertisement","playLogo":"Play logo","playNow":"Play now","enableInAppPurchases":"Enable In-app purchases","volume":"Volume","helpAndSupport":"Help & Support","retry":"Retry","somethingWrong":"Something went wrong","playing":"Playing","login":"Login","profile":"Profile","iAmYourCloudy":"Hi, I am your cloudy.","tapToStart":"Tap me to start!","searchGames":"Search premium games","noSearchResults":"No results found","close":"Close","gameplay.label":"Gameplay","gameplay.gameUpdate":"Game Update","gameplay.gameFroze":"Game froze during gameplay","gameplay.gameStuck":"Game stuck at loading screen","gameplay.gameLagging":"Game is lagging","gamecontrols.label":"Game Controls","gamecontrols.keyControls":"Key controls","gamecontrols.mouseIssues":"Mouse-related issues","gamecontrols.gamepadIssues":"Gamepad support issues","accountLogin.label":"Account login","accountLogin.incorrectPassword":"Incorrect password","accountLogin.LoginIssues":"Now.gg login issues","accountLogin.unableToSave":"Unable to save progress","appOrGameRequest.label":"App or game request","appOrGameRequest.appRequest":"App request","appOrGameRequest.gameRequest":"Game request","createDeviceProfile":"Creating device profile","collectingStats":"Collecting stats","collectingOtherInformation":"Collecting other information","sendingProblemReport":"Sending problem report","compilingInformation":"Compiling information","processingProblemReport":"Processing problem report","recentlyPlayed":"Recently played","otherGamesYouMayLike":"Other games you may like","clear":"Clear","trendingThisWeek":"Trending this week","tryOtherGames":"Try other games","cantFindAnything":"Hmmm...can\u2019t find anything for that","trySomethingElse":"Try searching something else","error.FailureNoResource.exclaim":"Argh!","error.FailureNoResource.cloudy":"Our system is struggling to keep up with the hype.","error.FailureNoResource.head1":"Please try again some time later.","error.FailureNoResource.head2":"Why not give these super cool games a try instead?","error.FailureServiceNotInRegion.exclaim":"Whoops!","error.FailureServiceNotInRegion.cloudy":"Our services aren\'t quite available in your region yet.","error.FailureServiceNotInRegion.head1":"Feeling adventurous?","error.FailureServiceNotInRegion.head2":"Check out these epic games instead","error.NotFound.exclaim":"Hold up!","error.NotFound.cloudy":"Looks like you\'ve stumbled upon a dead end.","error.NotFound.head1":"404 error, oh my!","error.NotFound.head2":"No sweat, try out these top-performing games instead.","error.Failure.exclaim":"Oops!","error.Failure.cloudy":"It seems your internet is having a moment.","error.Failure.head1":"Something went wrong!","error.Failure.head2":"Why not give these super cool games a try instead?","error.Failure.timer":"Hit refresh in {0} seconds","error.Failure.refresh":" Try refreshing now!","browseGames":"Browse more games","goRogue":"Go Rogue","play":"Play","tp.toggle":"Show visual feeback for taps/clicks"}')
            },
            tk: {
                translation: {
                    end: "End in tk"
                }
            }
        };
        c.ZP.use(L).use(u.Db).init({
            resources: R,
            interpolation: {
                escapeValue: !1
            },
            fallbackLng: "en"
        }),
        c.ZP.languages = ["en", "tk"];
        var N = n(7997);
        function D(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, r)
            }
            return n
        }
        function j(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? D(Object(n), !0).forEach((function(t) {
                    (0,
                    r.Z)(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : D(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        var M = function(e) {
            var t = e.Component
              , n = e.pageProps;
            return (0,
            N.BX)(N.HY, {
                children: [(0,
                N.BX)(s.default, {
                    children: [(0,
                    N.tZ)("meta", {
                        name: "viewport",
                        content: "width=device-width, initial-scale=1, viewport-fit=cover, shrink-to-fit=no, maximum-scale=1.0, user-scalable=no"
                    }), !1]
                }), (0,
                N.tZ)(a.dv, {
                    children: (0,
                    N.tZ)(o.zt, {
                        store: i.Z,
                        children: (0,
                        N.tZ)(t, j({}, n))
                    })
                })]
            })
        }
    },
    9305: function(e, t, n) {
        "use strict";
        n.d(t, {
            F: function() {
                return v
            }
        });
        var r = n(7981)
          , o = n(8309)
          , i = n(7020)
          , a = n(1739)
          , s = n(8294)
          , c = n(5628)
          , u = function() {
            return (u = Object.assign || function(e) {
                for (var t, n = 1, r = arguments.length; n < r; n++)
                    for (var o in t = arguments[n])
                        Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                return e
            }
            ).apply(this, arguments)
        }
          , l = function(e, t, n, r) {
            return new (n || (n = Promise))((function(o, i) {
                function a(e) {
                    try {
                        c(r.next(e))
                    } catch (t) {
                        i(t)
                    }
                }
                function s(e) {
                    try {
                        c(r.throw(e))
                    } catch (t) {
                        i(t)
                    }
                }
                function c(e) {
                    var t;
                    e.done ? o(e.value) : (t = e.value,
                    t instanceof n ? t : new n((function(e) {
                        e(t)
                    }
                    ))).then(a, s)
                }
                c((r = r.apply(e, t || [])).next())
            }
            ))
        }
          , f = function(e, t) {
            var n, r, o, i, a = {
                label: 0,
                sent: function() {
                    if (1 & o[0])
                        throw o[1];
                    return o[1]
                },
                trys: [],
                ops: []
            };
            return i = {
                next: s(0),
                throw: s(1),
                return: s(2)
            },
            "function" === typeof Symbol && (i[Symbol.iterator] = function() {
                return this
            }
            ),
            i;
            function s(i) {
                return function(s) {
                    return function(i) {
                        if (n)
                            throw new TypeError("Generator is already executing.");
                        for (; a; )
                            try {
                                if (n = 1,
                                r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r),
                                0) : r.next) && !(o = o.call(r, i[1])).done)
                                    return o;
                                switch (r = 0,
                                o && (i = [2 & i[0], o.value]),
                                i[0]) {
                                case 0:
                                case 1:
                                    o = i;
                                    break;
                                case 4:
                                    return a.label++,
                                    {
                                        value: i[1],
                                        done: !1
                                    };
                                case 5:
                                    a.label++,
                                    r = i[1],
                                    i = [0];
                                    continue;
                                case 7:
                                    i = a.ops.pop(),
                                    a.trys.pop();
                                    continue;
                                default:
                                    if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                        a = 0;
                                        continue
                                    }
                                    if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                        a.label = i[1];
                                        break
                                    }
                                    if (6 === i[0] && a.label < o[1]) {
                                        a.label = o[1],
                                        o = i;
                                        break
                                    }
                                    if (o && a.label < o[2]) {
                                        a.label = o[2],
                                        a.ops.push(i);
                                        break
                                    }
                                    o[2] && a.ops.pop(),
                                    a.trys.pop();
                                    continue
                                }
                                i = t.call(e, a)
                            } catch (s) {
                                i = [6, s],
                                r = 0
                            } finally {
                                n = o = 0
                            }
                        if (5 & i[0])
                            throw i[1];
                        return {
                            value: i[0] ? i[1] : void 0,
                            done: !0
                        }
                    }([i, s])
                }
            }
        }
          , d = "authServiceHost"
          , p = new AbortController
          , g = p.signal;
        function h(e, t) {
            var n = this;
            return function(p, h) {
                return l(n, void 0, void 0, (function() {
                    var n, l, v, m, y, b, S;
                    return f(this, (function(f) {
                        switch (f.label) {
                        case 0:
                            n = new URL(t.host === d ? t.path : s.ZP.prefix + t.path,t.host === d && !s.ZP.authUseThirdPartyFlow && (0,
                            i.i)().authServiceHost ? (0,
                            i.i)().authServiceHost : window.location.origin),
                            p && (n.search = new URLSearchParams(p).toString()),
                            v = localStorage.getItem(a.B1),
                            m = t.authorize && v ? {
                                headers: {
                                    Authorization: "Bearer ".concat(v)
                                }
                            } : {},
                            f.label = 1;
                        case 1:
                            return f.trys.push([1, 7, , 8]),
                            y = t.avoidAbortSignal ? void 0 : g,
                            "GET" !== e ? [3, 3] : [4, fetch(n.toString(), {
                                credentials: "include",
                                headers: u({
                                    "x-ngg-fe-version": r.f4
                                }, m.headers),
                                signal: y
                            })];
                        case 2:
                            return l = f.sent(),
                            [3, 5];
                        case 3:
                            return [4, fetch(n.toString(), {
                                method: "POST",
                                credentials: "include",
                                headers: u({
                                    "content-type": "application/json",
                                    "x-ngg-fe-version": r.f4
                                }, null === m || void 0 === m ? void 0 : m.headers),
                                body: h ? JSON.stringify(h) : void 0,
                                signal: y
                            })];
                        case 4:
                            l = f.sent(),
                            f.label = 5;
                        case 5:
                            return 409 === l.status && (0,
                            o.kS)(),
                            205 === l.status && window.location.reload(),
                            [4, l.json()];
                        case 6:
                            return b = f.sent(),
                            l.ok || (401 !== l.status && (0,
                            r.ZP)(new Error("fetch: ".concat(n.toString(), " failed, response.ok: ").concat(l.ok)), {
                                response: l
                            }),
                            200 === l.status && b.status !== c.YR.FailureUnauthorized) ? t.host || b.status !== c.YR.FailureUnauthorized ? [2, b] : ((0,
                            o.kS)(),
                            [2, {}]) : [2, {
                                status: c.YR.Failure
                            }];
                        case 7:
                            return "AbortError" !== (S = f.sent()).name && (0,
                            r.ZP)("error in fetching url, sending failure", {
                                error: S
                            }),
                            [2, {
                                status: c.YR.Failure
                            }];
                        case 8:
                            return [2]
                        }
                    }
                    ))
                }
                ))
            }
        }
        var v = function() {
            p.abort()
        }
          , m = {
            startSession: h("GET", {
                host: null,
                path: "/api/play/v1/startSession",
                authorize: !0
            }),
            setAnswerSdp: h("POST", {
                host: null,
                path: "/api/play/v1/setAnswerSdp",
                authorize: !0
            }),
            getSessionStatus: h("GET", {
                host: null,
                path: "/api/play/v1/getSessionStatus",
                authorize: !0
            }),
            createTicket: h("POST", {
                host: null,
                path: "/api/supp/v1/createTicket",
                authorize: !0
            }),
            trackEvent: h("POST", {
                host: null,
                path: "/api/play/v1/playReportEvent",
                authorize: !1,
                avoidAbortSignal: !0
            }),
            generateToken: h("GET", {
                host: d,
                path: "/accounts/auth/v1/access-token",
                authorize: !0
            }),
            getUserProfile: h("GET", {
                host: d,
                path: "/accounts/users/v1/userinfo",
                authorize: !0
            }),
            logout: h("GET", {
                host: d,
                path: "/accounts/auth/v1/logout",
                authorize: !0
            }),
            getPopularApps: h("GET", {
                host: d,
                path: "/api/apps/v1/popular/apps/list",
                authorize: !1
            }),
            getUserPreferences: h("GET", {
                host: null,
                path: "/api/user/v1/getPreference",
                authorize: !0
            }),
            updateUserPreferences: h("POST", {
                host: null,
                path: "/api/user/v1/updatePreference",
                authorize: !0
            }),
            getAppPlayFeatures: h("GET", {
                host: null,
                path: "/api/play/v1/getAppPlayFeatures",
                authorize: !0
            })
        };
        t.Z = m
    },
    7981: function(e, t, n) {
        "use strict";
        n.d(t, {
            f4: function() {
                return b
            },
            dv: function() {
                return w
            }
        });
        var r, o = n(1720), i = n(4061), a = n.n(i), s = n(7663), c = n.n(s), u = n(5418), l = n(1752), f = n(1739), d = n(8294), p = n(4003), g = n(812), h = n(8041), v = n(7997), m = n(4155), y = (0,
        l.default)().publicRuntimeConfig, b = m.env.NEXT_PUBLIC_FE_VERSION || y.NEXT_PUBLIC_FE_VERSION || "0.0.0.0";
        a().start({
            apiKey: m.env.NEXT_PUBLIC_BUGSNAG_KEY || y.NEXT_PUBLIC_BUGSNAG_KEY || "5409ce593426cf95bd284a5b809c62c5",
            plugins: [new (c())(o.default)],
            releaseStage: m.env.NEXT_PUBLIC_ENVIRONMENT || y.NEXT_PUBLIC_ENVIRONMENT || "development",
            appVersion: b,
            appType: (0,
            u.y)() ? "server" : "browser",
            onError: function(e) {
                var t, n, r, o;
                e.groupingHash = e.originalError.message || JSON.stringify(e.originalError) || e.originalError.errorClass,
                e.addMetadata("userData", {
                    uaSessionId: "undefined" !== typeof sessionStorage ? null === sessionStorage || void 0 === sessionStorage ? void 0 : sessionStorage.getItem(f.K3) : "",
                    uaId: "undefined" !== typeof localStorage ? null === localStorage || void 0 === localStorage ? void 0 : localStorage.getItem(f.nP) : ""
                }),
                e.addMetadata("appInfo", {
                    id: null === d.ZP || void 0 === d.ZP ? void 0 : d.ZP.appInfo.appId,
                    prefix: null === d.ZP || void 0 === d.ZP ? void 0 : d.ZP.prefix,
                    authRedirectionUrl: null === d.ZP || void 0 === d.ZP ? void 0 : d.ZP.authRedirectionUrl
                }),
                e.addMetadata("androidInfo", p.fQ),
                e.addMetadata("clientInfo", {
                    touchStart: "ontouchstart"in document.documentElement,
                    maxTouchPoints: navigator.maxTouchPoints,
                    userAgent: null === navigator || void 0 === navigator ? void 0 : navigator.userAgent,
                    hardwareConcurrency: null === navigator || void 0 === navigator ? void 0 : navigator.hardwareConcurrency,
                    visibilityState: null === document || void 0 === document ? void 0 : document.visibilityState,
                    onLine: null === navigator || void 0 === navigator ? void 0 : navigator.onLine,
                    utm: (0,
                    d.We)(),
                    wasmSupported: (0,
                    g.qU)(),
                    url: null === (t = null === window || void 0 === window ? void 0 : window.location) || void 0 === t ? void 0 : t.href,
                    platform: (0,
                    h.Tb)()
                }),
                e.addMetadata("memoryInfo", {
                    totalJSHeapSize: null === (n = window.performance.memory) || void 0 === n ? void 0 : n.totalJSHeapSize,
                    jsHeapSizeLimit: null === (r = window.performance.memory) || void 0 === r ? void 0 : r.jsHeapSizeLimit,
                    usedJSHeapSize: null === (o = window.performance.memory) || void 0 === o ? void 0 : o.usedJSHeapSize
                })
            }
        });
        var S = null === (r = a().getPlugin("react")) || void 0 === r ? void 0 : r.createErrorBoundary(o.default)
          , w = function(e) {
            var t = e.children;
            return !(0,
            u.X)() && S ? (0,
            v.tZ)(S, {
                children: t
            }) : (0,
            v.tZ)(v.HY, {
                children: t
            })
        }
          , O = function(e) {
            var t;
            if (null === (t = null === e || void 0 === e ? void 0 : e.stacktrace) || void 0 === t ? void 0 : t.length) {
                var n = e.stacktrace[0].file;
                n && -1 === n.indexOf(window.location.host) && (e.errorClass = "ThirdPartyScriptError")
            }
            return e
        };
        t.ZP = function(e, t) {
            a().notify(e, (function(e) {
                var n, r, o = e;
                (null === (n = null === o || void 0 === o ? void 0 : o.errors) || void 0 === n ? void 0 : n.length) && (o.errors[0] = O(o.errors[0])),
                (null === o || void 0 === o ? void 0 : o.exceptions) && (null === (r = null === o || void 0 === o ? void 0 : o.exceptions) || void 0 === r ? void 0 : r.length) && (o.exceptions[0] = O(o.exceptions[0])),
                "undefined" !== typeof t && Object.entries(t).forEach((function(e) {
                    var t = e[0]
                      , n = e[1];
                    n instanceof Error ? o.addMetadata(t, {
                        ErrorStack: null === n || void 0 === n ? void 0 : n.stack
                    }) : n instanceof Object ? o.addMetadata(t, n) : o.addMetadata(t, {
                        value: n
                    })
                }
                ))
            }
            ))
        }
    },
    9930: function(e, t, n) {
        "use strict";
        n.d(t, {
            J: function() {
                return s
            },
            Z: function() {
                return c
            }
        });
        n(1720);
        var r, o = function(e, t) {
            return Object.defineProperty ? Object.defineProperty(e, "raw", {
                value: t
            }) : e.raw = t,
            e
        }, i = n(445).ZP.i(r || (r = o(["\n  display: flex;\n  font-size: ", ";\n"], ["\n  display: flex;\n  font-size: ", ";\n"])), (function(e) {
            var t = e.size;
            return "".concat(t, "px")
        }
        )), a = n(7997), s = function(e) {
            var t = e.name
              , n = e.size
              , r = void 0 === n ? 25 : n
              , o = e.onClick
              , s = e.style
              , c = e.id;
            return (0,
            a.tZ)(i, {
                size: r,
                className: "icon-".concat(t),
                onClick: o,
                style: s,
                id: c
            })
        }, c = s
    },
    1339: function(e, t, n) {
        "use strict";
        n.d(t, {
            ZP: function() {
                return k
            },
            iJ: function() {
                return _
            }
        });
        var r, o = n(1739), i = n(2199), a = n(6971), s = n(1508), c = n(4803), u = n(8041), l = n(8294), f = n(9598), d = 1, p = 2, g = 4, h = 8, v = 16, m = 32, y = 64;
        !function(e) {
            e[e.DOWN = 101] = "DOWN",
            e[e.UP = 102] = "UP",
            e[e.NATIVE_DOWN = 91] = "NATIVE_DOWN",
            e[e.NATIVE_UP = 92] = "NATIVE_UP"
        }(r || (r = {}));
        var b = {
            27: !0
        }
          , S = n(5018)
          , w = function(e) {
            return +(e.shiftKey && d) | +(e.altKey && p) | +(e.ctrlKey && g) | +(e.metaKey && h) | +(((null === e || void 0 === e ? void 0 : e.getModifierState) ? null === e || void 0 === e ? void 0 : e.getModifierState("CapsLock") : 0) && v) | +(((null === e || void 0 === e ? void 0 : e.getModifierState) ? null === e || void 0 === e ? void 0 : e.getModifierState("ScrollLock") : 0) && m) | +(((null === e || void 0 === e ? void 0 : e.getModifierState) ? null === e || void 0 === e ? void 0 : e.getModifierState("NumLock") : 0) && y)
        }
          , O = n(3926)
          , E = (Date.now(),
        function(e, t, n, r) {
            var o = r.key;
            if ("Unidentified" !== o)
                if (!S.be.isOpen && S.be.native) {
                    var i = new ArrayBuffer(4);
                    (a = new Uint8Array(i))[0] = t,
                    a[1] = 1,
                    a[2] = e,
                    a[3] = n,
                    (0,
                    c.f)(i)
                } else if (o.length > 1 || (!S.be.isOpen || function(e) {
                    return e.altKey || e.ctrlKey || e.metaKey
                }(r)) && (o >= "a" && o <= "z" || o >= "A" && o <= "Z" || " " === o)) {
                    if (o.length > 1 && b[e])
                        return;
                    i = new ArrayBuffer(4);
                    (a = new Uint8Array(i))[0] = t,
                    a[1] = 1,
                    a[2] = e,
                    a[3] = w(r),
                    (0,
                    c.f)(i)
                } else if (101 === t && !r.isComposing) {
                    if (S.un.ended)
                        return void (S.un.ended = !1);
                    i = new ArrayBuffer(6);
                    var a = new Uint8Array(i)
                      , s = new Uint16Array([o.codePointAt(0) || 0])
                      , u = new Uint8Array(s.buffer,s.byteOffset,s.byteLength);
                    a[0] = 103,
                    a[1] = 0,
                    a[2] = 0,
                    a[3] = 0,
                    a[4] = u[0],
                    a[5] = u[1],
                    (0,
                    c.f)(i)
                }
        }
        )
          , T = function(e) {
            var t, n, o, a, s = null === (n = null === (t = null === document || void 0 === document ? void 0 : document.activeElement) || void 0 === t ? void 0 : t.className) || void 0 === n ? void 0 : n.indexOf("_hj-");
            if (!("sensitivity-box" === (null === (o = null === document || void 0 === document ? void 0 : document.activeElement) || void 0 === o ? void 0 : o.id) || "search-box" === (null === (a = null === document || void 0 === document ? void 0 : document.activeElement) || void 0 === a ? void 0 : a.id) || void 0 !== s && s > -1)) {
                var c = e.which || e.keyCode;
                switch (delete S.be.downMap[c],
                c) {
                case 86:
                    if (e.metaKey || e.ctrlKey)
                        return;
                    break;
                case 65:
                case 67:
                case 88:
                    if ("mac" === (0,
                    u.Ij)() && e.metaKey)
                        return void E(c, r.UP, 4, e);
                    break;
                default:
                    e.preventDefault()
                }
                i.ZP.inUse() ? (S.be.upEvents[c] = e,
                e.preventDefault(),
                i.ZP.keyUp(c)) : E(c, !S.be.isOpen && S.be.native ? r.NATIVE_UP : r.UP, w(e), e)
            }
        }
          , _ = function(e, t) {
            var n = 101;
            if (t || (n = 102),
            !(263 === e || 264 === e || e <= o.th.MAX && e >= o.th.MIN)) {
                var r = t ? S.be.downEvents[e] : S.be.upEvents[e];
                try {
                    var i = new ArrayBuffer(4)
                      , a = new Uint8Array(i);
                    a[0] = n,
                    a[1] = 1,
                    a[2] = e,
                    a[3] = r ? w(r) : 0,
                    t ? delete S.be.downEvents[e] : delete S.be.upEvents[e],
                    (0,
                    c.f)(i)
                } catch (s) {}
            }
        }
          , k = {
            keyDownEvent: function(e) {
                var t, n, c, d;
                (0,
                f._b)(e);
                var p = null === (n = null === (t = null === document || void 0 === document ? void 0 : document.activeElement) || void 0 === t ? void 0 : t.className) || void 0 === n ? void 0 : n.indexOf("_hj-");
                if (!("sensitivity-box" === (null === (c = null === document || void 0 === document ? void 0 : document.activeElement) || void 0 === c ? void 0 : c.id) || "search-box" === (null === (d = null === document || void 0 === document ? void 0 : document.activeElement) || void 0 === d ? void 0 : d.id) || void 0 !== p && p > -1)) {
                    var g = e.which || e.keyCode;
                    switch (S.be.downMap[g] = !0,
                    g) {
                    case 86:
                        if (e.metaKey || e.ctrlKey)
                            return;
                        break;
                    case 65:
                    case 67:
                    case 88:
                        if ("mac" === (0,
                        u.Ij)() && e.metaKey)
                            return void E(g, r.DOWN, 4, e);
                        break;
                    case 81:
                        var h = s.Z.getState()
                          , v = h.preferences.legacyControls
                          , m = h.play
                          , y = m.nativeMouseEnabled
                          , b = m.shiftLockActive
                          , T = l.ZP.features.shiftLock;
                        e.shiftKey && T && !v && y && ((0,
                        f.L9)(o.S5, {
                            element: "ShiftLock",
                            state: "".concat(b ? "Disabled" : "Enabled"),
                            robloxExperience: s.Z.getState().play.robloxExperienceId
                        }),
                        s.Z.dispatch({
                            type: a.Z.UPDATE_SHIFT_LOCK
                        }),
                        b ? (0,
                        O.Ti)() : (0,
                        O.vt)());
                        break;
                    case 122:
                        s.Z.dispatch({
                            type: a.Z.UPDATE_F11_PRESSED
                        }),
                        e.preventDefault(),
                        e.stopPropagation();
                        break;
                    default:
                        e.preventDefault(),
                        e.stopPropagation()
                    }
                    S.be.downEvents[g] = e,
                    i.ZP.inUse() ? (e.preventDefault(),
                    i.ZP.keyDown(g)) : E(g, !S.be.isOpen && S.be.native ? r.NATIVE_DOWN : r.DOWN, w(e), e)
                }
            },
            keyUpEvent: T,
            sendKeyToAndroid: _,
            keyBlurEvent: function() {
                i.CC.onblur(),
                Object.keys(S.be.downEvents).forEach((function(e) {
                    var t = S.be.downEvents[Number(e)];
                    try {
                        var n = t.which || t.keyCode;
                        S.be.downEvents[n] && T(t)
                    } catch (r) {}
                }
                ))
            }
        }
    },
    5018: function(e, t, n) {
        "use strict";
        n.d(t, {
            be: function() {
                return r
            },
            un: function() {
                return o
            }
        });
        var r = {
            isOpen: !1,
            native: !0,
            downMap: {},
            upEvents: {},
            downEvents: {}
        }
          , o = {
            ended: !1
        }
    },
    3562: function(e, t, n) {
        "use strict";
        var r;
        n.d(t, {
            gO: function() {
                return i
            },
            D4: function() {
                return a
            },
            ly: function() {
                return s
            },
            k8: function() {
                return c
            },
            Jm: function() {
                return u
            },
            $N: function() {
                return l
            },
            hw: function() {
                return o
            }
        });
        var o, i = 32767, a = 6, s = 41, c = {
            InpMouseMove: 0,
            InpMouseLDown: 1,
            InpMouseLUp: 2,
            InpMouseMDown: 3,
            InpMouseMUp: 4,
            InpMouseRDown: 5,
            InpMouseRUp: 6,
            InpMouseX1Down: 7,
            InpMouseX1Up: 8,
            InpMouseX2Down: 9,
            InpMouseX2Up: 10,
            InpMouseWheel: 11
        }, u = ["L", "M", "R", "X1", "X2"], l = /(Mac|iPhone|iPod|iPad)/i.test(null === (r = null === window || void 0 === window ? void 0 : window.navigator) || void 0 === r ? void 0 : r.platform) ? 50 : 25;
        !function(e) {
            e[e.DOWN = 1] = "DOWN",
            e[e.UP = 2] = "UP",
            e[e.MOVE = 3] = "MOVE"
        }(o || (o = {}))
    },
    3926: function(e, t, n) {
        "use strict";
        n.d(t, {
            bc: function() {
                return _
            },
            xk: function() {
                return A
            },
            E4: function() {
                return C
            },
            vt: function() {
                return L
            },
            Ti: function() {
                return R
            },
            XW: function() {
                return N
            },
            Jj: function() {
                return j
            },
            DA: function() {
                return M
            }
        });
        var r = n(4003)
          , o = n(1508)
          , i = n(6971)
          , a = n(8041)
          , s = n(2820)
          , c = n(9598)
          , u = n(1739)
          , l = n(2353)
          , f = n.n(l)
          , d = n(5220)
          , p = n.n(d)
          , g = n(8294)
          , h = n(6036)
          , v = n(3562)
          , m = n(5221)
          , y = v.D4
          , b = function(e) {
            return v.k8[function(e) {
                switch (e.type) {
                case u.I6:
                    return "InpMouse".concat(v.Jm[e.button], "Down");
                case u.Vy:
                    return "InpMouse".concat(v.Jm[e.button], "Up");
                case "pointermove":
                    return "InpMouseMove";
                case "wheel":
                    return "InpMouseWheel";
                case "pointerleave":
                    return !0 === m.fl.pressed[0] ? "InpMouse".concat(v.Jm[0], "Up") : "";
                default:
                    return ""
                }
            }(e)]
        }
          , S = -1
          , w = -1
          , O = 0
          , E = !1
          , T = !1
          , _ = {
            x: -1,
            y: -1
        }
          , k = function(e, t) {
            var n = new ArrayBuffer(4 + 4 * t.length)
              , r = new Int32Array(n);
            r[0] = e;
            for (var o = 1; o <= t.length; o += 1)
                r[o] = t[o - 1];
            return n
        }
          , P = function(e, t, n, o, i) {
            i ? (0,
            r.rI)(k(v.ly, [e, t, n, o])) : (0,
            r.fr)(k(v.ly, [e, t, n, o]))
        }
          , x = {
            370731277: !0,
            4924922222: !0,
            8481844229: !0,
            6284583030: !0,
            735030788: !0,
            1067560271: !0,
            1765700510: !0,
            1187101243: !0,
            2033617470: !0,
            4702658078: !0,
            1067660288: !0,
            4728136927: !0,
            5589772268: !0,
            5589764519: !0,
            2033617613: !0,
            4686746335: !0,
            6516141723: !0,
            6839171747: !0,
            6872265039: !0,
            6872274481: !0,
            8737602449: !0,
            7991339063: !0,
            8888615802: !0,
            1224212277: !0,
            5289509545: !0,
            8204899140: !0,
            3351674303: !0,
            906521532: !0,
            1554960397: !0,
            654732683: !0,
            4996049426: !0,
            3260590327: !0,
            5591597781: !0,
            5902977746: !0
        }
          , A = function(e, t, n) {
            if (!o.Z.getState().preferences.legacyControls) {
                var i = b(e)
                  , a = null === e || void 0 === e ? void 0 : e.target;
                if (document.pointerLockElement) {
                    var s = a.offsetWidth
                      , c = a.offsetHeight;
                    if (e.type !== u.I6 && e.type !== u.Vy) {
                        var l = o.Z.getState().preferences.mouseSensitivity;
                        (f()(l) || p()(l) || Number.isNaN(l)) && (l = u.rL);
                        var d = l >= u.rL ? 1 + (l - u.rL) / 2 : 1 / (1 + (u.rL - l) / 2)
                          , h = e.movementX
                          , m = e.movementY;
                        S += h * d,
                        w += m * d,
                        O = 10 * Math.sqrt(h * h + m * m)
                    }
                    var _ = c
                      , k = s;
                    g.ZP.features.enableAutoMouseLock || (x[(0,
                    r.Bz)()] ? (w > k && (w = k),
                    w < 0 && (w = 0),
                    S > _ && (S = .16 * _,
                    E = !0),
                    S < 0 && (S = .84 * _,
                    E = !0)) : (w > k && (w = 0,
                    E = !0),
                    w < 0 && (w = k,
                    E = !0),
                    S > _ && (S = 0,
                    E = !0),
                    S < 0 && (S = _,
                    E = !0))),
                    t = S,
                    n = w;
                    var A = o.Z.getState().play
                      , I = A.videoRef
                      , C = A.fullscreenWidgetRef;
                    A.isFullscreen && function(e, t, n, r, i) {
                        if (!o.Z.getState().play.shiftLockActive) {
                            var a = null === e || void 0 === e ? void 0 : e.getBoundingClientRect()
                              , s = null === t || void 0 === t ? void 0 : t.getBoundingClientRect();
                            if (a && s) {
                                var c = a.x <= s.x + n && a.x + a.width >= s.x + n
                                  , u = a.y <= s.y + r && a.y + a.height >= s.y + r;
                                c && u && (document.exitPointerLock(),
                                "midRoll" === i && (T = !0))
                            }
                        }
                    }(null === C || void 0 === C ? void 0 : C.current, null === I || void 0 === I ? void 0 : I.current, t, n, "fsWidget")
                }
                if (i === v.k8.InpMouseMove) {
                    var L = Math.floor(t / (null === a || void 0 === a ? void 0 : a.offsetHeight) * v.gO);
                    if (g.ZP.features.enableAutoMouseLock) {
                        E = !1;
                        var R = Number((t / (null === a || void 0 === a ? void 0 : a.offsetHeight)).toFixed(2));
                        R < -.1 && (L = Math.floor(.98 * v.gO),
                        S = Math.floor(.98 * (null === a || void 0 === a ? void 0 : a.offsetHeight))),
                        R > 1.1 && (L = Math.floor(.02 * v.gO),
                        S = Math.floor(.02 * (null === a || void 0 === a ? void 0 : a.offsetHeight))),
                        n >= (null === a || void 0 === a ? void 0 : a.offsetWidth) && (n = null === a || void 0 === a ? void 0 : a.offsetWidth,
                        w = (null === a || void 0 === a ? void 0 : a.offsetWidth) - 1),
                        n <= 0 && (n = 1,
                        w = 1)
                    }
                    var N = Math.floor(n / (null === a || void 0 === a ? void 0 : a.offsetWidth) * v.gO);
                    E ? (E = !1,
                    setTimeout((function() {
                        P(i, L, N, Math.floor(e.deltaY) || 0, !0)
                    }
                    ), Math.min((1e3 - O) / 20, 20))) : P(i, L, N, Math.floor(e.deltaY) || 0, !0)
                } else if (i === v.k8.InpMouseWheel) {
                    if (y <= 0 || y === v.D4 || Math.abs(e.deltaY) > 100)
                        return P(i, Math.floor(t / (null === a || void 0 === a ? void 0 : a.offsetHeight) * v.gO), Math.floor(n / (null === a || void 0 === a ? void 0 : a.offsetWidth) * v.gO), Math.floor(e.deltaY < 0 ? Math.abs(e.deltaY) : -1 * e.deltaY), !0),
                        void (y = v.D4 - 1);
                    y -= 1
                } else {
                    var D = (t / (null === a || void 0 === a ? void 0 : a.offsetHeight) || 1) * v.gO
                      , j = (n / (null === a || void 0 === a ? void 0 : a.offsetWidth) || 1) * v.gO;
                    D < 0 && (D = 0),
                    j < 0 && (j = 0),
                    D > v.gO && (D = v.gO),
                    j > v.gO && (j = v.gO),
                    P(i, Math.floor(D), Math.floor(j), Math.floor(e.deltaY) || 0, !1)
                }
            }
        }
          , I = function e() {
            var t = o.Z.getState().play.shiftLockActive;
            document.pointerLockElement || (o.Z.dispatch({
                type: i.Z.UPDATE_MOUSE_LOCK,
                payload: {
                    mouseLockActive: !1
                }
            }),
            document.removeEventListener("pointerlockchange", e),
            document.removeEventListener("mozpointerlockchange", e),
            document.removeEventListener("webkitpointerlockchange", e),
            document.removeEventListener("pointerlockerror", e),
            document.removeEventListener("mozpointerlockerror", e),
            document.removeEventListener("webkitpointerlockerror", e),
            t && (P(v.k8.InpMouseRUp, 0, 0, 0, !1),
            o.Z.dispatch({
                type: i.Z.UPDATE_SHIFT_LOCK
            }),
            (0,
            c.L9)(u.S5, {
                element: "ShiftLock",
                state: "Disabled",
                robloxExperience: o.Z.getState().play.robloxExperienceId
            })))
        }
          , C = function(e, t, n, r) {
            var a, c;
            if (void 0 === n && (n = !0),
            void 0 === r && (r = ""),
            !document.pointerLockElement) {
                var u = o.Z.getState()
                  , l = u.play.videoRef;
                if (l && "function" === typeof (null === (a = l.current) || void 0 === a ? void 0 : a.requestPointerLock))
                    try {
                        var f = null === (c = null === l || void 0 === l ? void 0 : l.current) || void 0 === c ? void 0 : c.getBoundingClientRect();
                        "fromShiftLock" === r && (e = S + f.left,
                        t = w + f.top);
                        var d = e >= f.left && e <= f.left + f.width
                          , p = t >= f.top && t <= f.top + f.height;
                        d && p ? (S = e - f.left,
                        w = t - f.top) : (S = l.current.clientHeight / 2,
                        w = l.current.clientWidth / 2);
                        try {
                            document.pointerLockElement || l.current.requestPointerLock()
                        } catch (g) {
                            return
                        }
                        if (!u.play.isFullscreen && n)
                            u.preferences.mouseLockOnboardingCount < 3 && (o.Z.dispatch({
                                type: i.Z.UPDATE_MOUSE_LOCK,
                                payload: {
                                    showMouseLockOnboarding: !0
                                }
                            }),
                            o.Z.dispatch({
                                type: s.Z.MOUSE_LOCK_ONBOARDING_COUNT,
                                payload: {
                                    mouseLockOnboardingCount: u.preferences.mouseLockOnboardingCount + 1
                                }
                            }));
                        o.Z.dispatch({
                            type: i.Z.UPDATE_MOUSE_LOCK,
                            payload: {
                                mouseLockActive: !0
                            }
                        }),
                        document.addEventListener("pointerlockchange", I, !1),
                        document.addEventListener("mozpointerlockchange", I, !1),
                        document.addEventListener("webkitpointerlockchange", I, !1),
                        document.addEventListener("pointerlockerror", I, !1),
                        document.addEventListener("mozpointerlockerror", I, !1),
                        document.addEventListener("webkitpointerlockerror", I, !1)
                    } catch (g) {}
            }
        }
          , L = function() {
            C(0, 0, !1, "fromShiftLock"),
            P(v.k8.InpMouseRDown, 0, 0, 0, !1),
            r.fQ.lockS = !0
        }
          , R = function() {
            P(v.k8.InpMouseRUp, 0, 0, 0, !1),
            "function" === typeof document.exitPointerLock && document.exitPointerLock(),
            I(),
            r.fQ.lockS = !1
        }
          , N = function() {
            T && C(0, 0, !1, "fromMidroll")
        }
          , D = !0
          , j = function(e) {
            if (!(0,
            a.tq)()) {
                e && (D = !1);
                var t = o.Z.getState().preferences
                  , n = t.legacyControls
                  , s = t.lastRobloxToastDate;
                if (!g.ZP.features.enableAutoMouseLock && (!n && e || !e) && !D) {
                    var c = localStorage.getItem("robloxToastViewCount") || "0";
                    parseInt(c, 10) < 3 && (0,
                    h.J)(s, (new Date).toDateString()) && (o.Z.dispatch({
                        type: i.Z.ROBLOX_TOAST,
                        payload: {
                            robloxToast: !0
                        }
                    }),
                    D = !0)
                }
                P(1, 0, 0, 0, !1),
                P(2, 0, 0, 0, !1),
                g.ZP.features.enableAutoMouseLock && (0,
                r.fr)("controlnativedevices::1")
            }
        }
          , M = function() {
            g.ZP.features.enableAutoMouseLock && (0,
            r.fr)("controlnativedevices::0"),
            document.pointerLockElement && "function" === typeof document.exitPointerLock && document.exitPointerLock()
        }
    },
    5221: function(e, t, n) {
        "use strict";
        n.d(t, {
            fl: function() {
                return r
            },
            jp: function() {
                return o
            }
        });
        var r = {
            pressed: {},
            native: !1,
            lastX: 0,
            lastY: 0,
            shouldTrackMove: 0
        }
          , o = {
            started: !1,
            x: 0,
            y: 0,
            timeout: 0,
            lastX: 0,
            lastY: 0
        }
    },
    8962: function(e, t) {
        "use strict";
        t.Z = function() {
            try {
                if (window.KommunicateGlobal) {
                    var e = window.KommunicateGlobal.document.getElementById("km-chat-widget-close-button");
                    e && e.click()
                }
            } catch (t) {}
        }
    },
    6036: function(e, t, n) {
        "use strict";
        n.d(t, {
            J: function() {
                return P
            },
            Z: function() {
                return x
            }
        });
        var r, o, i, a, s, c = n(1720), u = n(5617), l = n(1567), f = n(6971), d = n(9930), p = n(2920), g = n(1739), h = n(8294), v = n(6386), m = n(2820), y = n(5024), b = n(445), S = function(e, t) {
            return Object.defineProperty ? Object.defineProperty(e, "raw", {
                value: t
            }) : e.raw = t,
            e
        }, w = (0,
        b.F4)(r || (r = S(["\n    0% {\n        opacity: 0;\n    }\n    33.33% {\n        opacity: 1;\n    }\n    49.66% {\n        opacity: 1;\n    }\n    66.67% {\n        opacity: 1;\n    }\n    83.33% {\n        opacity: 1;\n    }\n    100% {\n        opacity: 1;\n    }\n"], ["\n    0% {\n        opacity: 0;\n    }\n    33.33% {\n        opacity: 1;\n    }\n    49.66% {\n        opacity: 1;\n    }\n    66.67% {\n        opacity: 1;\n    }\n    83.33% {\n        opacity: 1;\n    }\n    100% {\n        opacity: 1;\n    }\n"]))), O = (0,
        b.F4)(o || (o = S(["\n    0% {\n        transform: rotate(0deg);\n        left: 0px;\n    }\n    33.33% {\n        transform: rotate(0deg);\n        left: 0px;\n    }\n    49.66% {\n        transform: rotate(-30deg);\n        left: -7px;\n    }\n    66.67% {\n        transform: rotate(0deg);\n        left: 0px;\n    }\n    83.33% {\n        transform: rotate(30deg);\n        left: 7px;\n    }\n    100% {\n        transform: rotate(0deg);\n        left: 0px;\n    }\n"], ["\n    0% {\n        transform: rotate(0deg);\n        left: 0px;\n    }\n    33.33% {\n        transform: rotate(0deg);\n        left: 0px;\n    }\n    49.66% {\n        transform: rotate(-30deg);\n        left: -7px;\n    }\n    66.67% {\n        transform: rotate(0deg);\n        left: 0px;\n    }\n    83.33% {\n        transform: rotate(30deg);\n        left: 7px;\n    }\n    100% {\n        transform: rotate(0deg);\n        left: 0px;\n    }\n"]))), E = b.ZP.div(i || (i = S(["\n    display: flex;\n    position: absolute;\n    width: fit-content;\n    height: 40px;\n    transition: all 0.5s ease-in-out;\n    left: 50%;\n    padding: 9.5px 16px 9.5px 22px;\n    box-sizing: border-box;\n    transform: translateX(-50%);\n    background: rgba(0, 0, 0, 0.8);\n    border: 1px solid rgba(255, 255, 255, 0.2);\n    font-style: normal;\n    font-weight: normal;\n    font-size: 14px;\n    line-height: 150%;\n    z-index: 2;\n    &.slideUp {\n        top: -20px;\n        opacity: 0;\n    }\n    &.slideDown {\n        top: 70px;\n        opacity: 1;\n    }\n"], ["\n    display: flex;\n    position: absolute;\n    width: fit-content;\n    height: 40px;\n    transition: all 0.5s ease-in-out;\n    left: 50%;\n    padding: 9.5px 16px 9.5px 22px;\n    box-sizing: border-box;\n    transform: translateX(-50%);\n    background: rgba(0, 0, 0, 0.8);\n    border: 1px solid rgba(255, 255, 255, 0.2);\n    font-style: normal;\n    font-weight: normal;\n    font-size: 14px;\n    line-height: 150%;\n    z-index: 2;\n    &.slideUp {\n        top: -20px;\n        opacity: 0;\n    }\n    &.slideDown {\n        top: 70px;\n        opacity: 1;\n    }\n"]))), T = b.ZP.div(a || (a = S(["\n    position: relative;\n    width: 18px;\n    height: 20px;\n    animation-name: ", ";\n    animation-duration: 3s;\n    animation-iteration-count: infinite;\n    animation-timing-function: linear;\n    animation-delay: 2s;\n    color: white;\n    &:after {\n        position: absolute;\n        width: 4px;\n        height: 6px;\n        border-radius: 0px 100% 0px 0px;\n        background: ", ';\n        content: "";\n        top: 2px;\n        right: 4px;\n        animation-name: ', ";\n        animation-duration: 3s;\n        animation-iteration-count: infinite;\n        animation-timing-function: linear;\n        animation-delay: 2s;\n        opacity: 0;\n    }\n"], ["\n    position: relative;\n    width: 18px;\n    height: 20px;\n    animation-name: ", ";\n    animation-duration: 3s;\n    animation-iteration-count: infinite;\n    animation-timing-function: linear;\n    animation-delay: 2s;\n    color: white;\n    &:after {\n        position: absolute;\n        width: 4px;\n        height: 6px;\n        border-radius: 0px 100% 0px 0px;\n        background: ", ';\n        content: "";\n        top: 2px;\n        right: 4px;\n        animation-name: ', ";\n        animation-duration: 3s;\n        animation-iteration-count: infinite;\n        animation-timing-function: linear;\n        animation-delay: 2s;\n        opacity: 0;\n    }\n"])), O, (function(e) {
            return e.theme.colors.white
        }
        ), w), _ = b.ZP.p(s || (s = S(["\n    margin-left: 22px;\n    color: ", ";\n"], ["\n    margin-left: 22px;\n    color: ", ";\n"])), (function(e) {
            return e.theme.colors.white
        }
        )), k = n(7997), P = function(e, t) {
            e || (e = new Date(0).toDateString());
            var n = e.split(" ")
              , r = t.split(" ");
            return parseInt(n[3], 10) < parseInt(r[3], 10) || !(parseInt(n[3], 10) > parseInt(r[3], 10)) && (parseInt(n[1], 10) < parseInt(r[1], 10) || !(parseInt(n[1], 10) > parseInt(r[1], 10)) && parseInt(n[2], 10) < parseInt(r[2], 10))
        }, x = function() {
            var e = (0,
            l.$)().t
              , t = (0,
            u.I0)()
              , n = (0,
            u.v9)((function(e) {
                return e.play.shiftLockActive
            }
            ))
              , r = (0,
            u.v9)((function(e) {
                return e.play.nativeMouseEnabled
            }
            ))
              , o = (0,
            u.v9)((function(e) {
                return e.play.robloxToast
            }
            ))
              , i = (0,
            u.v9)((function(e) {
                return e.preferences.legacyControls
            }
            ))
              , a = (0,
            c.useState)(!1)
              , s = a[0]
              , b = a[1]
              , S = (0,
            c.useState)(!1)
              , w = S[0]
              , O = S[1]
              , x = (0,
            u.v9)((function(e) {
                return e.preferences.shiftlockToastCount
            }
            ))
              , A = (0,
            u.v9)((function(e) {
                return e.preferences.lastShiftLockToastDate
            }
            ));
            return (0,
            c.useEffect)((function() {
                if (n)
                    t({
                        type: f.Z.ROBLOX_TOAST,
                        payload: {
                            robloxToast: !1
                        }
                    }),
                    b(!0),
                    setTimeout((function() {
                        b(!1)
                    }
                    ), 3e3),
                    O(!0);
                else {
                    if (!w)
                        return;
                    t({
                        type: f.Z.ROBLOX_TOAST,
                        payload: {
                            robloxToast: !1
                        }
                    }),
                    O(!1),
                    b(!0),
                    setTimeout((function() {
                        b(!1)
                    }
                    ), 3e3)
                }
            }
            ), [n]),
            (0,
            c.useEffect)((function() {
                !h.ZP.features.enableAutoMouseLock && r && !i && !o && !n && x < 3 && P(A, (new Date).toDateString()) && ((0,
                p.Am)((0,
                k.BX)(k.HY, {
                    children: [e("press"), " ", (0,
                    k.tZ)("kbd", {
                        children: "Shift"
                    }), " + ", (0,
                    k.tZ)("kbd", {
                        children: "Q"
                    }), " ", e("shiftLockMsg"), (0,
                    k.tZ)("span", {
                        style: {
                            marginLeft: "12px",
                            marginTop: "2px",
                            cursor: "pointer"
                        },
                        children: (0,
                        k.tZ)("img", {
                            alt: "",
                            src: (0,
                            y.j)(v.Z),
                            onClick: function() {
                                p.Am.dismiss()
                            }
                        })
                    })]
                }), g.dO),
                t({
                    type: m.Z.SHIFT_LOCK_TOAST_UPDATE,
                    payload: {
                        shiftlockToastCount: x + 1,
                        lastShiftLockToastDate: (new Date).toDateString()
                    }
                }))
            }
            ), [r, i, o]),
            (0,
            k.BX)(E, {
                className: "".concat(s ? "slideDown" : "slideUp"),
                children: [(0,
                k.tZ)(T, {
                    className: "robloxImgContainer",
                    children: (0,
                    k.tZ)(d.Z, {
                        name: "mouse",
                        size: 20
                    })
                }), (0,
                k.tZ)(_, {
                    children: e("".concat(n ? "shiftLockActive" : "shiftLockInactive"))
                })]
            })
        }
    },
    7020: function(e, t, n) {
        "use strict";
        n.d(t, {
            v: function() {
                return i
            },
            i: function() {
                return a
            }
        });
        var r = function() {
            return (r = Object.assign || function(e) {
                for (var t, n = 1, r = arguments.length; n < r; n++)
                    for (var o in t = arguments[n])
                        Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                return e
            }
            ).apply(this, arguments)
        }
          , o = {
            authServiceHost: "",
            authUseThirdPartyFlow: !1,
            pwaIconHost: "",
            pwaNudgeDelayMs: 6e5
        }
          , i = function(e) {
            o = r({}, e)
        }
          , a = function() {
            return o
        }
    },
    1739: function(e, t, n) {
        "use strict";
        n.d(t, {
            F7: function() {
                return o
            },
            vK: function() {
                return i
            },
            rk: function() {
                return a
            },
            M5: function() {
                return s
            },
            h4: function() {
                return c
            },
            B1: function() {
                return u
            },
            qO: function() {
                return l
            },
            aC: function() {
                return f
            },
            dO: function() {
                return d
            },
            th: function() {
                return p
            },
            pp: function() {
                return g
            },
            Ov: function() {
                return h
            },
            V: function() {
                return v
            },
            us: function() {
                return m
            },
            rL: function() {
                return y
            },
            sf: function() {
                return b
            },
            xv: function() {
                return S
            },
            bv: function() {
                return w
            },
            Ol: function() {
                return O
            },
            wD: function() {
                return E
            },
            LI: function() {
                return T
            },
            ne: function() {
                return _
            },
            J7: function() {
                return k
            },
            bO: function() {
                return P
            },
            iB: function() {
                return x
            },
            T7: function() {
                return A
            },
            yK: function() {
                return I
            },
            T: function() {
                return C
            },
            nd: function() {
                return L
            },
            cX: function() {
                return R
            },
            To: function() {
                return N
            },
            ND: function() {
                return D
            },
            me: function() {
                return j
            },
            y9: function() {
                return M
            },
            ro: function() {
                return U
            },
            g0: function() {
                return F
            },
            CB: function() {
                return Z
            },
            I6: function() {
                return B
            },
            Vy: function() {
                return G
            },
            LD: function() {
                return H
            },
            T$: function() {
                return W
            },
            $T: function() {
                return z
            },
            J8: function() {
                return V
            },
            K3: function() {
                return K
            },
            nP: function() {
                return q
            },
            $D: function() {
                return $
            },
            QS: function() {
                return X
            },
            e9: function() {
                return Y
            },
            S5: function() {
                return J
            },
            eu: function() {
                return Q
            },
            Mz: function() {
                return ee
            },
            Vc: function() {
                return te
            },
            yj: function() {
                return ne
            },
            fi: function() {
                return re
            },
            At: function() {
                return oe
            }
        });
        var r = n(5713)
          , o = {
            iceServers: [{
                urls: "stun:sturn.now.gg:3478"
            }]
        }
          , i = {
            audio: {
                mute: "audio::mute",
                unmute: "audio::unmute"
            },
            backToGame: "backtogame",
            clipboard: "clipboard::",
            tab: "tabstatus::",
            location: "location::",
            reportproblem: "reportproblem"
        }
          , a = "com.bluestacks.appmart"
          , s = 1024
          , c = "fe_token"
          , u = "ng_token"
          , l = "ng_token_expiry"
          , f = "greetingShown"
          , d = {
            theme: "colored",
            position: "top-center",
            autoClose: 5e3,
            hideProgressBar: !0,
            closeOnClick: !1,
            pauseOnHover: !1,
            draggable: !1,
            progress: void 0,
            style: {
                minWidth: "max-content",
                fontFamily: r.qm.fontFamily
            }
        }
          , p = {
            MIN: 266,
            MAX: 361
        }
          , g = "rotate-screen"
          , h = "portrait-mode"
          , v = "leaderboard"
          , m = "skyscrapper"
          , y = 5
          , b = "appReady"
          , S = "topActivity"
          , w = "screenorientation"
          , O = "keyboardStatus"
          , E = "trackEvent"
          , T = "noUserActivity"
          , _ = "clipboard"
          , k = "appcrash_fatal"
          , P = "showdisconnectimer"
          , x = "openUrl"
          , A = "paymentSDKURL"
          , I = "sendLocation"
          , C = "sessionComplete"
          , L = "showFileChooser"
          , R = "fileUploadResult"
          , N = "fileTransfer"
          , D = "camera"
          , j = "offer_camera"
          , M = "ADS::showRewardedVideoAd"
          , U = "logsCollected"
          , F = "loginPrompted"
          , Z = "manualLogout"
          , B = "pointerdown"
          , G = "pointerup"
          , H = "complete"
          , W = "inactive"
          , z = "migrated"
          , V = "duplicate"
          , K = "fe_uaSessionId"
          , q = "fe_uaId"
          , $ = "Search"
          , X = "".concat($, "Window")
          , Y = "AllGames"
          , J = "UserInteraction"
          , Q = "PreloaderDisplayed"
          , ee = "GameDisplayed"
          , te = "NotFound"
          , ne = "connected"
          , re = "PlayToken"
          , oe = {
            pointerdown: "MouseDown",
            keydown: "KeyDown",
            touchstart: "TouchDown"
        }
    },
    7665: function(e, t, n) {
        "use strict";
        n.d(t, {
            y: function() {
                return r
            }
        });
        var r = {
            colors: {
                transparent: "transparent",
                white: "#FFFFFF",
                black: "#000000"
            }
        }
    },
    8044: function(e, t, n) {
        "use strict";
        n.d(t, {
            q: function() {
                return i
            }
        });
        var r = n(7665)
          , o = function() {
            return (o = Object.assign || function(e) {
                for (var t, n = 1, r = arguments.length; n < r; n++)
                    for (var o in t = arguments[n])
                        Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                return e
            }
            ).apply(this, arguments)
        }
          , i = {
            fontFamily: "Fredoka, sans-serif",
            colors: o(o({}, r.y.colors), {
                base900: "#0B0223",
                base800: "#1F1637",
                base700: "#332A4B",
                base600: "#473E5F",
                base500: "#5B5273",
                base400: "#797091",
                base300: "#8D84A5",
                base200: "#A198B9",
                base100: "#B5ACCD",
                base50: "#E3DFEC",
                purple: "#4C4789",
                blue: "#51A5C9",
                green: "#398B4D",
                lightGreen: "#B3D661",
                white90: "rgba(255, 255, 255, 0.9)",
                white80: "rgba(255, 255, 255, 0.8)",
                white70: "rgba(255, 255, 255, 0.7)",
                white60: "rgba(255, 255, 255, 0.6)",
                white50: "rgba(255, 255, 255, 0.5)",
                white40: "rgba(255, 255, 255, 0.4)",
                white30: "rgba(255, 255, 255, 0.3)",
                white20: "rgba(255, 255, 255, 0.2)",
                white10: "rgba(255, 255, 255, 0.1)",
                black90: "rgba(0, 0, 0, 0.9)",
                black80: "rgba(0, 0, 0, 0.8)",
                black70: "rgba(0, 0, 0, 0.7)",
                black60: "rgba(0, 0, 0, 0.6)",
                black50: "rgba(0, 0, 0, 0.5)",
                black40: "rgba(0, 0, 0, 0.4)",
                black30: "rgba(0, 0, 0, 0.3)",
                black20: "rgba(0, 0, 0, 0.2)",
                black10: "rgba(0, 0, 0, 0.1)",
                link: "#0397EB",
                warning: "#DE5A48",
                error: "#F33621",
                info: "#EEE3D9",
                caution: "#FFC32A",
                success: "#67C3BB",
                ascent: "#FF42A5",
                ascent40: "rgba(255, 66, 165, 0.4)",
                ascentHover: "#FF339E",
                surface: "#FAFAFB",
                background: "#EEEDF0",
                overlay: "rgba(0, 0, 0, 0.7)",
                modal: "rgba(0, 0, 0, 0.2)",
                backgroundGlass: "rgba(255, 255, 255, 0.1)"
            }),
            spacing: {
                base: "4px",
                base2: "8px",
                base3: "12px",
                base4: "16px",
                base5: "20px",
                base6: "24px",
                base8: "32px"
            },
            border: {
                base: "1px solid rgba(255, 255, 255, 0.2)",
                base2: "1px solid rgba(0, 0, 0, 0.2)",
                base3: "1px solid rgba(255, 255, 255, 0.1)",
                base4: "1px solid #EEEDF0",
                radius: "4px",
                radius2: "8px",
                radius3: "12px",
                radius4: "16px",
                radius12: "48px"
            },
            shadow: {
                button: "0px 4px 0px #AB055C, 0px 10px 8px rgba(0, 0, 0, 0.15)",
                dark: "0px 4px 8px rgba(0, 0, 0, 0.3)",
                big: "0px 8px 24px rgba(0, 0, 0, 0.08)",
                normal: "0px 4px 16px rgba(0, 0, 0, 0.08)",
                small: "0px 2px 8px rgba(0, 0, 0, 0.04)"
            },
            gradients: {
                glass: "linear-gradient(180deg, rgba(11, 2, 35, 0.48) 0%,\n      rgba(11, 2, 35, 0.32) 100%), rgba(255, 255, 255, 0.3)",
                linearDark: "linear-gradient(180deg, rgba(11, 2, 35, 0.04) 0%, rgba(11, 2, 35, 0.64) 100%)",
                radialDark: "radial-gradient(126.59% 100% at 50% 0%, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.8) 100%)",
                linearDark1: "linear-gradient(180deg, #FF42A5 0%, #D11075 100%)",
                linearLight1: "linear-gradient(180deg, #FF75BD 0%, #FF1B92 100%)",
                linearDark2: "linear-gradient(180deg, #4D21FA 0%, #6944FF 100%)",
                linearLight2: "linear-gradient(180deg, #9B85F3 0%, #5A31FD 100%)",
                linearDark3: "linear-gradient(180deg, #2178FA 0%, #5344FF 100%)",
                linearLight3: "linear-gradient(180deg, #85AFF3 0%, #317FFD 100%)",
                linearDark4: "linear-gradient(180deg, #4DC9FF 0%, #51A5C9 99.48%)",
                linearLight4: "linear-gradient(180deg, #92DEFF 0%, #77D5FD 99.48%)"
            }
        };
        t.Z = i
    },
    5713: function(e, t, n) {
        "use strict";
        n.d(t, {
            qm: function() {
                return o.q
            },
            Pw: function() {
                return a
            }
        });
        n(1720);
        var r = n(445)
          , o = n(8044)
          , i = n(7997)
          , a = (n(7665),
        function(e) {
            var t = e.children;
            return (0,
            i.tZ)(r.f6, {
                theme: o.q,
                children: t
            })
        }
        )
    },
    5628: function(e, t, n) {
        "use strict";
        n.d(t, {
            Ps: function() {
                return r.Ps
            },
            cj: function() {
                return r.cj
            },
            YR: function() {
                return r.YR
            },
            Z5: function() {
                return r.Z5
            }
        });
        var r = n(1262)
    },
    4387: function(e, t, n) {
        "use strict";
        n.d(t, {
            xm: function() {
                return o
            },
            hW: function() {
                return i
            },
            k: function() {
                return a
            },
            kp: function() {
                return s
            },
            Q7: function() {
                return c
            },
            UD: function() {
                return u
            },
            eT: function() {
                return l
            },
            u5: function() {
                return f
            },
            Sg: function() {
                return d
            },
            iR: function() {
                return p
            },
            $S: function() {
                return g
            },
            st: function() {
                return h
            },
            q_: function() {
                return v
            },
            x_: function() {
                return r
            }
        });
        var r, o = {
            resolution: "1280x720"
        }, i = {
            0: 177,
            1: 178,
            2: 179,
            3: 180,
            4: 175,
            5: 176,
            8: 171,
            9: 172,
            10: 173,
            11: 174,
            12: 167,
            13: 168,
            14: 169,
            15: 170
        }, a = {
            0: 4,
            1: 6,
            2: 8,
            3: 10,
            4: 12
        }, s = {
            0: 5,
            1: 7,
            2: 9,
            3: 11,
            4: 13
        }, c = {
            MOUSE_MOVE: 3,
            MOUSE_SCROLL: 14
        }, u = "IMAP_EVENT_INITIALIZED", l = "GAMEPAD_EVENT", f = "IMAP_EVENT_TERMINATED", d = "IMAP_EVENT_RESIZED", p = "IMAP_EVENT_FAILURE", g = "IMAP_EVENT_UPDATE", h = "IMAP_GAMEPAD_IN_USE", v = "IMAP_POINTER_LOCK";
        !function(e) {
            e.Tap = "Tap",
            e.Script = "Script",
            e.Swipe = "Swipe",
            e.TapRepeat = "TapRepeat",
            e.FreeLook = "FreeLook",
            e.Pan = "Pan",
            e.Dpad = "Dpad",
            e.Zoom = "Zoom",
            e.MouseZoom = "MouseZoom",
            e.MOBASkill = "MOBASkill",
            e.EdgeScroll = "EdgeScroll"
        }(r || (r = {}))
    },
    2199: function(e, t, n) {
        "use strict";
        n.d(t, {
            CC: function() {
                return O
            },
            ZP: function() {
                return P
            }
        });
        var r = n(5418)
          , o = n(4003)
          , i = function(e, t) {
            void 0 === t && (t = []);
            var n = new ArrayBuffer(2 * t.length + 2)
              , r = new Uint16Array(n);
            r[0] = e;
            for (var o = 0; o < t.length; o += 1)
                r[o + 1] = t[o];
            return n
        }
          , a = n(9555)
          , s = n(1508)
          , c = n(1739)
          , u = n(5220)
          , l = n.n(u)
          , f = n(2353)
          , d = n.n(f)
          , p = n(8294)
          , g = n(4387)
          , h = n(4902)
          , v = function(e, t, n, r) {
            return new (n || (n = Promise))((function(o, i) {
                function a(e) {
                    try {
                        c(r.next(e))
                    } catch (t) {
                        i(t)
                    }
                }
                function s(e) {
                    try {
                        c(r.throw(e))
                    } catch (t) {
                        i(t)
                    }
                }
                function c(e) {
                    var t;
                    e.done ? o(e.value) : (t = e.value,
                    t instanceof n ? t : new n((function(e) {
                        e(t)
                    }
                    ))).then(a, s)
                }
                c((r = r.apply(e, t || [])).next())
            }
            ))
        }
          , m = function(e, t) {
            var n, r, o, i, a = {
                label: 0,
                sent: function() {
                    if (1 & o[0])
                        throw o[1];
                    return o[1]
                },
                trys: [],
                ops: []
            };
            return i = {
                next: s(0),
                throw: s(1),
                return: s(2)
            },
            "function" === typeof Symbol && (i[Symbol.iterator] = function() {
                return this
            }
            ),
            i;
            function s(i) {
                return function(s) {
                    return function(i) {
                        if (n)
                            throw new TypeError("Generator is already executing.");
                        for (; a; )
                            try {
                                if (n = 1,
                                r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r),
                                0) : r.next) && !(o = o.call(r, i[1])).done)
                                    return o;
                                switch (r = 0,
                                o && (i = [2 & i[0], o.value]),
                                i[0]) {
                                case 0:
                                case 1:
                                    o = i;
                                    break;
                                case 4:
                                    return a.label++,
                                    {
                                        value: i[1],
                                        done: !1
                                    };
                                case 5:
                                    a.label++,
                                    r = i[1],
                                    i = [0];
                                    continue;
                                case 7:
                                    i = a.ops.pop(),
                                    a.trys.pop();
                                    continue;
                                default:
                                    if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                        a = 0;
                                        continue
                                    }
                                    if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                        a.label = i[1];
                                        break
                                    }
                                    if (6 === i[0] && a.label < o[1]) {
                                        a.label = o[1],
                                        o = i;
                                        break
                                    }
                                    if (o && a.label < o[2]) {
                                        a.label = o[2],
                                        a.ops.push(i);
                                        break
                                    }
                                    o[2] && a.ops.pop(),
                                    a.trys.pop();
                                    continue
                                }
                                i = t.call(e, a)
                            } catch (s) {
                                i = [6, s],
                                r = 0
                            } finally {
                                n = o = 0
                            }
                        if (5 & i[0])
                            throw i[1];
                        return {
                            value: i[0] ? i[1] : void 0,
                            done: !0
                        }
                    }([i, s])
                }
            }
        }
          , y = {
            config: {},
            packageName: "",
            active: !1,
            pointerLock: !1,
            outOfFocus: !1,
            initialized: !1,
            changeRequested: !1,
            mouseLockMoved: {
                x: 0,
                y: 0
            },
            height: 0,
            width: 0,
            showLookAroundToasts: !1,
            inUse: function() {
                var e = s.Z.getState().preferences.legacyControls;
                return this.initialized && this.active && e
            },
            clear: function() {
                this.active = !1,
                this.pointerLock = !1,
                (0,
                h.j8)(g.u5, {}),
                "function" === typeof document.exitPointerLock && document.exitPointerLock(),
                document.removeEventListener("pointerlockchange", w, !1),
                document.removeEventListener("mozpointerlockchange", w, !1),
                document.removeEventListener("webkitpointerlockchange", w, !1)
            },
            addEventListener: function() {
                document.addEventListener("pointerlockchange", w, !1),
                document.addEventListener("mozpointerlockchange", w, !1),
                document.addEventListener("webkitpointerlockchange", w, !1)
            },
            updateActive: function(e, t) {
                var n = this;
                void 0 === t && (t = 300),
                e !== this.active && (t ? setTimeout((function() {
                    n.active = e,
                    (0,
                    h.j8)(g.$S, e)
                }
                ), t) : (this.active = e,
                (0,
                h.j8)(g.$S, e)))
            },
            updateCfgWithSensitivity: function() {
                var e, t, n = s.Z.getState().preferences.mouseSensitivity;
                d()(n) || l()(n) || (this.config[this.packageName] && (null === (e = this.config[this.packageName]) || void 0 === e ? void 0 : e.ControlSchemes) && (null === (t = this.config[this.packageName]) || void 0 === t || t.ControlSchemes.forEach((function(e) {
                    e && e.GameControls && e.GameControls.forEach((function(e) {
                        var t = n >= c.rL ? 1 + (n - c.rL) / 2 : 1 / (1 + (c.rL - n) / 2);
                        void 0 !== e.Sensitivity && (e.Sensitivity = t)
                    }
                    ))
                }
                ))),
                y.config[y.packageName] && y.loadCfg(y.config[y.packageName]))
            },
            initialize: function(e, t, n) {
                var r = this
                  , o = k();
                this.packageName = e;
                try {
                    v(r, void 0, void 0, (function() {
                        var r, i, a, s, c, u, l;
                        return m(this, (function(f) {
                            switch (f.label) {
                            case 0:
                                if ("undefined" !== typeof this.config[this.packageName])
                                    return [3, 13];
                                f.label = 1;
                            case 1:
                                return f.trys.push([1, 12, , 13]),
                                [4, fetch((0,
                                h.VR)(e, o, p.ZP.appInfo.imapCfgHost))];
                            case 2:
                                return (r = f.sent()).ok ? [4, r.json()] : [3, 10];
                            case 3:
                                return i = f.sent(),
                                (null === (u = null === i || void 0 === i ? void 0 : i.cfg_file_url) || void 0 === u ? void 0 : u.normal) ? (a = (a = null === (l = null === i || void 0 === i ? void 0 : i.cfg_file_url) || void 0 === l ? void 0 : l.normal).replace("http://", "https://"),
                                i.success && a ? [4, fetch(a)] : [3, 7]) : [3, 8];
                            case 4:
                                return (s = f.sent()).ok ? [4, s.json()] : [3, 6];
                            case 5:
                                return c = f.sent(),
                                this.config[this.packageName] = (0,
                                h.aX)(e, c),
                                [3, 7];
                            case 6:
                                throw Error("Cannot find config file");
                            case 7:
                                return [3, 9];
                            case 8:
                                throw Error("Cannot find config file ".concat(e));
                            case 9:
                                return [3, 11];
                            case 10:
                                throw Error("CFG api failed ".concat(e));
                            case 11:
                                return [3, 13];
                            case 12:
                                return f.sent(),
                                this.config[this.packageName] = null,
                                this.initialized = !1,
                                this.clear(),
                                [3, 13];
                            case 13:
                                if (this.config[this.packageName]) {
                                    this.updateCfgWithSensitivity(),
                                    this.config[this.packageName] = (0,
                                    h.oG)(this.config[this.packageName]);
                                    try {
                                        this.setDimensions(t, n),
                                        window.Module.ImapLibInit(e, t, n, JSON.stringify(this.config[this.packageName]))
                                    } catch (d) {
                                        "number" === typeof d && window.Module.GetExceptionMessage(d),
                                        this.initialized = !1,
                                        this.clear()
                                    }
                                }
                                return null === this.config[this.packageName] && (this.initialized = !1,
                                this.clear()),
                                [2]
                            }
                        }
                        ))
                    }
                    ))
                } catch (i) {
                    this.config[this.packageName] = null,
                    this.initialized = !1,
                    this.clear()
                }
            },
            loadCfg: function(e) {
                if (e) {
                    this.config[this.packageName] = e;
                    try {
                        window.Module.imapLoadCfg(JSON.stringify(e))
                    } catch (t) {}
                }
            },
            setDimensions: function(e, t) {
                this.height = t,
                this.width = e
            },
            updateDimensions: function() {
                if (this.inUse())
                    try {
                        window.Module.ImapHandleResize(0, 0, this.width, this.height)
                    } catch (e) {
                        window.Module.GetExceptionMessage(e)
                    }
                (0,
                h.j8)(g.Sg, {
                    width: this.width,
                    height: this.height
                })
            },
            updateFocus: function() {
                if (y.active)
                    try {
                        window.Module.ImapOnWindowActivate(!0),
                        this.outOfFocus = !1
                    } catch (e) {}
            },
            handleKey: function(e, t) {
                try {
                    window.Module.ImapHandleKey(e, t)
                } catch (n) {}
            },
            keyDown: function(e) {
                this.outOfFocus && this.updateFocus(),
                this.handleKey(e, 1)
            },
            keyUp: function(e) {
                this.handleKey(e, 0)
            },
            mouseMove: function(e, t) {
                try {
                    this.pointerLock ? window.Module.HandleRawMouse(g.Q7.MOUSE_MOVE, e, t, 0) : window.Module.ImapHandleMouseMove(g.Q7.MOUSE_MOVE, e, t, 0)
                } catch (n) {}
            },
            mouseDown: function(e, t, n) {
                try {
                    this.pointerLock ? window.Module.HandleRawMouse(g.k[e], t, n, 0) : window.Module.ImapHandleMouseControls(g.k[e], t, n, 0)
                } catch (r) {}
            },
            mouseUp: function(e, t, n) {
                try {
                    this.pointerLock ? window.Module.HandleRawMouse(g.kp[e], t, n, 0) : window.Module.ImapHandleMouseMove(g.kp[e], t, n, 0)
                } catch (r) {}
            },
            mouseScroll: function(e, t, n) {
                void 0 === n && (n = 0);
                try {
                    y.pointerLock ? window.Module.HandleRawMouse(g.Q7.MOUSE_SCROLL, e, t, 0) : window.Module.ImapHandleMouseMove(g.Q7.MOUSE_SCROLL, e, t, n)
                } catch (r) {}
            },
            exitPanMode: function() {
                try {
                    window.Module && "function" === typeof window.Module.ExitPanMode && window.Module.ExitPanMode()
                } catch (e) {}
            },
            onWindowActivate: function(e) {
                try {
                    window.Module && "function" === typeof window.Module.ImapOnWindowActivate && window.Module.ImapOnWindowActivate(e)
                } catch (t) {}
            }
        };
        function b() {
            y.active && (y.exitPanMode(),
            y.onWindowActivate(!1))
        }
        function S() {
            y.active && (y.onWindowActivate(!0),
            y.exitPanMode())
        }
        function w() {
            y.changeRequested || (b(),
            S())
        }
        var O = {
            onblur: b,
            onfocus: S
        };
        if (!(0,
        r.y)()) {
            var E = {}
              , T = {}
              , _ = function(e) {
                var t = E[e];
                if (t) {
                    var n = [e, t.x, t.y];
                    (0,
                    o.fr)(i(2, n)),
                    T[e] = 0,
                    E[e] = null
                }
            };
            window.InputMapperApi = window.InputMapperApi || {
                imapInitSuccess: function() {
                    y.initialized = !0,
                    y.active = !0,
                    y.addEventListener(),
                    (0,
                    h.j8)(g.UD, y.config[y.packageName] || {}),
                    (0,
                    a.Ul)()
                },
                enableRawMouseInput: function(e) {
                    if (y.pointerLock = 1 === e,
                    y.changeRequested = !0,
                    e) {
                        var t = s.Z.getState().play.videoRef;
                        try {
                            (null === t || void 0 === t ? void 0 : t.current) && !document.pointerLockElement && t.current.requestPointerLock()
                        } catch (n) {}
                    } else
                        "function" === typeof document.exitPointerLock && (document.exitPointerLock(),
                        (0,
                        h.j8)(g.q_, 0));
                    y.mouseLockMoved.x = 0,
                    y.mouseLockMoved.y = 0,
                    setTimeout((function() {
                        y.changeRequested = !1
                    }
                    ), 10)
                },
                sendTouchPoints: function(e) {
                    if (y.inUse() && e)
                        try {
                            var t = [];
                            e.forEach((function(e, n) {
                                if (T[n] && e.x > 1e4 && e.y > 1e4)
                                    _(n);
                                else if (1 === T[n] && e.x < 1e4 && e.y < 1e4)
                                    E[n] = e,
                                    t.push(n, e.x, e.y);
                                else if (E[n] && e.x > 1e4 && e.y > 1e4)
                                    _(n);
                                else if (e.x < 1e4 && e.y < 1e4) {
                                    var r = [n, e.x, e.y];
                                    E[n] = e,
                                    function(e, t) {
                                        (0,
                                        o.fr)(i(1, t)),
                                        T[e] = 1
                                    }(n, r)
                                }
                            }
                            )),
                            t.length && (0,
                            o.fr)(i(3, t))
                        } catch (n) {}
                },
                sendKeyToAndroid: function() {},
                imapInitFailure: function() {
                    y.initialized = !1,
                    y.clear(),
                    (0,
                    h.j8)(g.iR, !1)
                }
            }
        }
        var k = function() {
            return window.Module && "function" === typeof window.Module.GetParserVersion ? window.Module.GetParserVersion() : 17
        }
          , P = y
    },
    4902: function(e, t, n) {
        "use strict";
        n.d(t, {
            oG: function() {
                return a
            },
            aX: function() {
                return s
            },
            VR: function() {
                return c
            },
            j8: function() {
                return u
            }
        });
        var r = n(4387)
          , o = function() {
            return (o = Object.assign || function(e) {
                for (var t, n = 1, r = arguments.length; n < r; n++)
                    for (var o in t = arguments[n])
                        Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                return e
            }
            ).apply(this, arguments)
        }
          , i = function(e) {
            var t = !1;
            return e.forEach((function(e) {
                var n = e.split(":")
                  , o = n[0]
                  , i = n[1];
                r.xm[o] === i && (t = !0)
            }
            )),
            t
        }
          , a = function(e) {
            if (e) {
                var t = "";
                e.ControlSchemes = e.ControlSchemes.map((function(n, o) {
                    return n.isGamepadControlsPresent = !1,
                    n.SchemeTags && i(n.SchemeTags) ? t = n.Name : t || (t = n.Name),
                    n.Selected = n.SchemeTags && i(n.SchemeTags),
                    n.GameControls = n.GameControls.map((function(e) {
                        return e.Type === r.x_.Tap || e.Type === r.x_.TapRepeat || e.Type === r.x_.Swipe ? n.isGamepadControlsPresent = Boolean(n.isGamepadControlsPresent || e.Key_alt1) : e.Type === r.x_.Dpad ? n.isGamepadControlsPresent = Boolean(n.isGamepadControlsPresent || e.GamepadStick || e.KeyUp_alt1 || e.KeyDown_alt1 || e.KeyLeft_alt1 || e.KeyRight_alt1) : e.Type === r.x_.MOBASkill ? n.isGamepadControlsPresent = Boolean(n.isGamepadControlsPresent || e.GamepadStick) : "Pan" === e.Type && (n.isGamepadControlsPresent = Boolean(n.isGamepadControlsPresent || e.KeyStartStop_alt1 || e.KeySuspend_alt1 || e.KeyLookAround_alt1 || e.GamepadStick)),
                        e
                    }
                    )),
                    n.isGamepadControlsPresent = !!n.isGamepadControlsPresent,
                    e.anySchemeHasGamepad = e.anySchemeHasGamepad || n.isGamepadControlsPresent,
                    n
                }
                )),
                e.ControlSchemes = e.ControlSchemes.map((function(e) {
                    return e.Name === t ? e.Selected = !0 : e.Selected = !1,
                    e
                }
                )),
                e.ControlSchemes.map((function(e) {
                    var t = e.GameControls.reduce((function(e, t) {
                        return (e[t.GuidanceCategory] = e[t.GuidanceCategory] || []).push(t),
                        e
                    }
                    ), {})
                      , n = [];
                    return Object.keys(t).forEach((function(e) {
                        n.push.apply(n, t[e])
                    }
                    )),
                    e.GameControls = n,
                    e
                }
                ))
            }
            return e
        }
          , s = function(e, t) {
            return t.ControlSchemes = t.ControlSchemes.map((function(t) {
                return t.Selected && (t.GameControls = t.GameControls.map((function(t) {
                    return "lol.onevone" === e && "Pan" === t.Type ? o(o({}, t), {
                        Sensitivity: .3
                    }) : t
                }
                ))),
                t
            }
            )),
            t
        }
          , c = function(e, t, n) {
            return "https://".concat(n, "/get_cfg_info?package_name=").concat(e, "&parser_version=").concat(t)
        }
          , u = function(e, t) {
            void 0 === t && (t = {}),
            window.dispatchEvent(new CustomEvent(e,{
                detail: t
            }))
        }
    },
    4857: function(e, t) {
        "use strict";
        t.Z = {
            UPDATE_IMAERROR: "UPDATE_IMAERROR",
            UPDATE_ADS_STATE: "UPDATE_ADS_STATE",
            UPDATE_APP_STATE: "UPDATE_APP_STATE",
            LOAD_MID_ROLL: "LOAD_MID_ROLL",
            SET_IN_GAME_AD: "SET_IN_GAME_AD",
            SET_ADS_REF: "SET_ADS_REF",
            UPDATE_REWARDED_SDK_STATE: "UPDATE_REWARDED_SDK_STATE",
            UPDATE_PLAYTIME: "UPDATE_PLAYTIME"
        }
    },
    4266: function(e, t) {
        "use strict";
        t.Z = {
            SET_LOGGED_IN: "SET_LOGGED_IN",
            SHOW_PRELOADER: "SHOW_PRELOADER",
            GUEST_FLOW: "GUEST_FLOW",
            TOGGLE_LOGIN: "TOGGLE_LOGIN",
            SET_USER_ACTIVITY: "SET_USER_ACTIVITY",
            TOGGLE_MANUAL_LOGOUT_LOGIN: "TOGGLE_MANUAL_LOGOUT_LOGIN",
            SET_PLAY_TOKEN: "SET_PLAY_TOKEN"
        }
    },
    3029: function(e, t) {
        "use strict";
        t.Z = {
            IMAP_STATUS: "IMAP_STATUS",
            TOGGLE_SIDEBAR: "TOGGLE_SIDEBAR"
        }
    },
    6971: function(e, t) {
        "use strict";
        t.Z = {
            IME_STATUS: "IME_STATUS",
            LAUNCH_CLICKED: "LAUNCH_CLICKED",
            LISTENERS_ATTACHED: "LISTENERS_ATTACHED",
            ROBLOX_TOAST: "ROBLOX_TOAST",
            GET_PERMISSION: "GET_PERMISSION",
            SET_ERROR: "SET_ERROR",
            MUTE: "MUTE",
            SET_FULLSCREEN: "SET_FULLSCREEN",
            SET_ONLINE_STATE: "SET_ONLINE_STATE",
            START_CONNECTION: "START_CONNECTION",
            STOP_CONNECTION: "STOP_CONNECTION",
            UPDATE_BACK_BTN: "UPDATE_BACK_BTN",
            UPDATE_GAME_ENDED: "UPDATE_GAME_ENDED",
            UPDATE_KEYBOARD_STATUS: "UPDATE_KEYBOARD_STATUS",
            UPDATE_NERD_MODE_STATE: "UPDATE_NERD_MODE_STATE",
            MODAL_STATUS: "MODAL_STATUS",
            SET_REF: "SET_REF",
            UPDATE_ORIENTATION: "UPDATE_ORIENTATION",
            UPDATE_PEER_CONNECTION_STATE: "UPDATE_PEER_CONNECTION_STATE",
            SESSION_MIGRATED: "SESSION_MIGRATED",
            DUPLICATE_TAB: "DUPLICATE_TAB",
            SESSION_INACTIVE: "SESSION_INACTIVE",
            DRAGGABLE: "DRAGGABLE",
            SPOT_INSTANCES: "SPOT_INSTANCES",
            OPEN_URL: "OPEN_URL",
            UPDATE_MOUSE_LOCK: "UPDATE_MOUSE_LOCK",
            SET_WIDGET: "SET_WIDGET",
            SHOW_MOUSE_LOCK_ONBOARDING: "SHOW_MOUSE_LOCK_ONBOARDING",
            SET_MID_ROLL_AD: "SET_MID_ROLL_AD",
            SET_SENSITIVITY_POPUP: "SET_SENSITIVITY_POPUP",
            SET_COUNTRY_CODE: "SET_COUNTRY_CODE",
            UPDATE_UPLOAD_STATE: "UPDATE_UPLOAD_STATE",
            UPDATE_UPLOAD_REF: "UPDATE_UPLOAD_REF",
            UPDATE_DOWNLOAD_STATE: "UPDATE_DOWNLOAD_STATE",
            UPDATE_SHIFT_LOCK: "UPDATE_SHIFT_LOCK",
            PWA_PROMPT_STATUS: "PWA_PROMPT_STATUS",
            TP_ENABLED: "TP_ENABLED",
            SET_ROBLOX_EXPERIENCE_ID: "SET_ROBLOX_EXPERIENCE_ID",
            UPDATE_LOGIN_TOOLTIP: "UPDATE_LOGIN_TOOLTIP",
            UPDATE_TEXTFIELD_FOCUS: "UPDATE_TEXTFIELD_FOCUS",
            UPDATE_F11_PRESSED: "UPDATE_F11_PRESSED",
            UPDATE_F11_PROCESSED: "UPDATE_F11_PROCESSED",
            UPDATE_INACTIVE_TIMEOUT: "UPDATE_INACTIVE_TIMEOUT",
            HOTJAR_LOADED: "HOTJAR_LOADED",
            UPDATE_SEARCH_APPS_LIST: "UPDATE_SEARCH_APPS_LIST",
            SET_EXPERIENCE_STATE: "SET_EXPERIENCE_STATE",
            HTML_GAME: "HTML_GAME",
            UPDATE_TAB_VISIBILITY_STATE: "UPDATE_TAB_VISIBILITY_STATE",
            COMPRESSED_PACKAGE: "COMPRESSED_PACKAGE",
            SET_PROXY_USER: "SET_PROXY_USER"
        }
    },
    2820: function(e, t) {
        "use strict";
        t.Z = {
            VOLUME: "VOLUME",
            OVERLAY: "OVERLAY",
            FS_WIDGET: "FS_WIDGET",
            MOUSE_LOCK_ONBOARDING_COUNT: "MOUSE_LOCK_ONBOARDING_COUNT",
            MOUSE_SENSITIVITY: "MOUSE_SENSITIVITY",
            LEGACY_CONTROLS: "LEGACY_CONTROLS",
            SET_LEGACY_CONTROLS: "SET_LEGACY_CONTROLS",
            SHIFT_LOCK_TOAST_UPDATE: "SHIFT_LOCK_TOAST_UPDATE",
            ROBLOX_TOAST_UPDATE: "ROBLOX_TOAST_UPDATE",
            GAME_GUIDE_NOTIF_COUNT_UPDATE: "GAME_GUIDE_NOTIF_COUNT_UPDATE",
            LOGIN_NOTIF_UPDATE: "LOGIN_NOTIF_UPDATE",
            UPDATE_PREFERENCES: "UPDATE_PREFERENCES"
        }
    },
    1508: function(e, t, n) {
        "use strict";
        n.d(t, {
            Z: function() {
                return Se
            },
            D: function() {
                return be
            }
        });
        var r = n(4942);
        function o(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, r)
            }
            return n
        }
        function i(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? o(Object(n), !0).forEach((function(t) {
                    (0,
                    r.Z)(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : o(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        function a(e) {
            return "Minified Redux error #" + e + "; visit https://redux.js.org/Errors?code=" + e + " for the full message or use the non-minified dev environment for full errors. "
        }
        var s = "function" === typeof Symbol && Symbol.observable || "@@observable"
          , c = function() {
            return Math.random().toString(36).substring(7).split("").join(".")
        }
          , u = {
            INIT: "@@redux/INIT" + c(),
            REPLACE: "@@redux/REPLACE" + c(),
            PROBE_UNKNOWN_ACTION: function() {
                return "@@redux/PROBE_UNKNOWN_ACTION" + c()
            }
        };
        function l(e) {
            if ("object" !== typeof e || null === e)
                return !1;
            for (var t = e; null !== Object.getPrototypeOf(t); )
                t = Object.getPrototypeOf(t);
            return Object.getPrototypeOf(e) === t
        }
        function f(e, t, n) {
            var r;
            if ("function" === typeof t && "function" === typeof n || "function" === typeof n && "function" === typeof arguments[3])
                throw new Error(a(0));
            if ("function" === typeof t && "undefined" === typeof n && (n = t,
            t = void 0),
            "undefined" !== typeof n) {
                if ("function" !== typeof n)
                    throw new Error(a(1));
                return n(f)(e, t)
            }
            if ("function" !== typeof e)
                throw new Error(a(2));
            var o = e
              , i = t
              , c = []
              , d = c
              , p = !1;
            function g() {
                d === c && (d = c.slice())
            }
            function h() {
                if (p)
                    throw new Error(a(3));
                return i
            }
            function v(e) {
                if ("function" !== typeof e)
                    throw new Error(a(4));
                if (p)
                    throw new Error(a(5));
                var t = !0;
                return g(),
                d.push(e),
                function() {
                    if (t) {
                        if (p)
                            throw new Error(a(6));
                        t = !1,
                        g();
                        var n = d.indexOf(e);
                        d.splice(n, 1),
                        c = null
                    }
                }
            }
            function m(e) {
                if (!l(e))
                    throw new Error(a(7));
                if ("undefined" === typeof e.type)
                    throw new Error(a(8));
                if (p)
                    throw new Error(a(9));
                try {
                    p = !0,
                    i = o(i, e)
                } finally {
                    p = !1
                }
                for (var t = c = d, n = 0; n < t.length; n++) {
                    (0,
                    t[n])()
                }
                return e
            }
            function y(e) {
                if ("function" !== typeof e)
                    throw new Error(a(10));
                o = e,
                m({
                    type: u.REPLACE
                })
            }
            function b() {
                var e, t = v;
                return (e = {
                    subscribe: function(e) {
                        if ("object" !== typeof e || null === e)
                            throw new Error(a(11));
                        function n() {
                            e.next && e.next(h())
                        }
                        return n(),
                        {
                            unsubscribe: t(n)
                        }
                    }
                })[s] = function() {
                    return this
                }
                ,
                e
            }
            return m({
                type: u.INIT
            }),
            (r = {
                dispatch: m,
                subscribe: v,
                getState: h,
                replaceReducer: y
            })[s] = b,
            r
        }
        function d() {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                t[n] = arguments[n];
            return 0 === t.length ? function(e) {
                return e
            }
            : 1 === t.length ? t[0] : t.reduce((function(e, t) {
                return function() {
                    return e(t.apply(void 0, arguments))
                }
            }
            ))
        }
        function p(e) {
            return function(t) {
                var n = t.dispatch
                  , r = t.getState;
                return function(t) {
                    return function(o) {
                        return "function" === typeof o ? o(n, r, e) : t(o)
                    }
                }
            }
        }
        var g = p();
        g.withExtraArgument = p;
        var h = g
          , v = "persist:"
          , m = "persist/FLUSH"
          , y = "persist/REHYDRATE"
          , b = "persist/PAUSE"
          , S = "persist/PERSIST"
          , w = "persist/PURGE"
          , O = "persist/REGISTER";
        function E(e) {
            return (E = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function T(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, r)
            }
            return n
        }
        function _(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        function k(e, t, n, r) {
            r.debug;
            var o = function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? T(n, !0).forEach((function(t) {
                        _(e, t, n[t])
                    }
                    )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : T(n).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }
                    ))
                }
                return e
            }({}, n);
            return e && "object" === E(e) && Object.keys(e).forEach((function(r) {
                "_persist" !== r && t[r] === n[r] && (o[r] = e[r])
            }
            )),
            o
        }
        function P(e) {
            var t, n = e.blacklist || null, r = e.whitelist || null, o = e.transforms || [], i = e.throttle || 0, a = "".concat(void 0 !== e.keyPrefix ? e.keyPrefix : v).concat(e.key), s = e.storage;
            t = !1 === e.serialize ? function(e) {
                return e
            }
            : "function" === typeof e.serialize ? e.serialize : x;
            var c = e.writeFailHandler || null
              , u = {}
              , l = {}
              , f = []
              , d = null
              , p = null;
            function g() {
                if (0 === f.length)
                    return d && clearInterval(d),
                    void (d = null);
                var e = f.shift()
                  , n = o.reduce((function(t, n) {
                    return n.in(t, e, u)
                }
                ), u[e]);
                if (void 0 !== n)
                    try {
                        l[e] = t(n)
                    } catch (r) {
                        console.error("redux-persist/createPersistoid: error serializing state", r)
                    }
                else
                    delete l[e];
                0 === f.length && (Object.keys(l).forEach((function(e) {
                    void 0 === u[e] && delete l[e]
                }
                )),
                p = s.setItem(a, t(l)).catch(m))
            }
            function h(e) {
                return (!r || -1 !== r.indexOf(e) || "_persist" === e) && (!n || -1 === n.indexOf(e))
            }
            function m(e) {
                c && c(e)
            }
            return {
                update: function(e) {
                    Object.keys(e).forEach((function(t) {
                        h(t) && u[t] !== e[t] && -1 === f.indexOf(t) && f.push(t)
                    }
                    )),
                    Object.keys(u).forEach((function(t) {
                        void 0 === e[t] && h(t) && -1 === f.indexOf(t) && void 0 !== u[t] && f.push(t)
                    }
                    )),
                    null === d && (d = setInterval(g, i)),
                    u = e
                },
                flush: function() {
                    for (; 0 !== f.length; )
                        g();
                    return p || Promise.resolve()
                }
            }
        }
        function x(e) {
            return JSON.stringify(e)
        }
        function A(e) {
            var t, n = e.transforms || [], r = "".concat(void 0 !== e.keyPrefix ? e.keyPrefix : v).concat(e.key), o = e.storage;
            e.debug;
            return t = !1 === e.deserialize ? function(e) {
                return e
            }
            : "function" === typeof e.deserialize ? e.deserialize : I,
            o.getItem(r).then((function(e) {
                if (e)
                    try {
                        var r = {}
                          , o = t(e);
                        return Object.keys(o).forEach((function(e) {
                            r[e] = n.reduceRight((function(t, n) {
                                return n.out(t, e, o)
                            }
                            ), t(o[e]))
                        }
                        )),
                        r
                    } catch (i) {
                        throw i
                    }
            }
            ))
        }
        function I(e) {
            return JSON.parse(e)
        }
        function C(e) {
            0
        }
        function L(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, r)
            }
            return n
        }
        function R(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? L(n, !0).forEach((function(t) {
                    N(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : L(n).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        function N(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        function D(e, t) {
            if (null == e)
                return {};
            var n, r, o = function(e, t) {
                if (null == e)
                    return {};
                var n, r, o = {}, i = Object.keys(e);
                for (r = 0; r < i.length; r++)
                    n = i[r],
                    t.indexOf(n) >= 0 || (o[n] = e[n]);
                return o
            }(e, t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (r = 0; r < i.length; r++)
                    n = i[r],
                    t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
            }
            return o
        }
        function j(e) {
            return function(e) {
                if (Array.isArray(e)) {
                    for (var t = 0, n = new Array(e.length); t < e.length; t++)
                        n[t] = e[t];
                    return n
                }
            }(e) || function(e) {
                if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e))
                    return Array.from(e)
            }(e) || function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance")
            }()
        }
        function M(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, r)
            }
            return n
        }
        function U(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? M(n, !0).forEach((function(t) {
                    F(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : M(n).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        function F(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        var Z = {
            registry: [],
            bootstrapped: !1
        }
          , B = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Z
              , t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
            case O:
                return U({}, e, {
                    registry: [].concat(j(e.registry), [t.key])
                });
            case y:
                var n = e.registry.indexOf(t.key)
                  , r = j(e.registry);
                return r.splice(n, 1),
                U({}, e, {
                    registry: r,
                    bootstrapped: 0 === r.length
                });
            default:
                return e
            }
        };
        var G = n(6734)
          , H = n(5628)
          , W = n(6971)
          , z = function() {
            return (z = Object.assign || function(e) {
                for (var t, n = 1, r = arguments.length; n < r; n++)
                    for (var o in t = arguments[n])
                        Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                return e
            }
            ).apply(this, arguments)
        }
          , V = {
            isAndroidConnected: !1,
            permissionType: "",
            muted: !0,
            peerConnection: null,
            uaId: "",
            uaSessionId: "",
            videoRef: null,
            consoleHeaderRef: null,
            consoleFooterRef: null,
            urlToOpen: "",
            sessionMigrated: !1,
            duplicateTab: !1,
            sessionComplete: !1,
            orientation: H.cj.landscape,
            error: null,
            isPeerConnectionOnline: !0,
            isFullscreen: !1,
            showBackbtn: !1,
            nativeMouseEnabled: !1,
            videoContainerRef: null,
            peerConnectionState: "",
            isNerdMode: !1,
            showPwaPrompt: !1,
            robloxToast: !1,
            servingRegion: "",
            listenersAttached: !1,
            isImeEnabled: !1,
            inactivityModal: !1,
            showAboutUs: !1,
            showAllGamesOverlay: !1,
            showExploreGamesOverlay: !1,
            draggableState: "click",
            orientationValue: 1,
            spotInstances: !1,
            disconnecTimer: 0,
            userWarningTime: 59,
            spotInstanceToast: !1,
            mouseLockActive: !1,
            tpEnabled: !1,
            fullscreenWidgetRef: null,
            showMouseLockOnboarding: !1,
            midRollAdRef: null,
            midRollAdVisible: !1,
            isSensitivityPopupOpen: !1,
            countryCode: "-",
            userIPObject: {
                ipv4: "NA"
            },
            fileUploadState: {
                showLoader: !1,
                loaderType: ""
            },
            fileUploadRef: null,
            fileDownloadState: {
                showLoader: !1,
                loaderType: ""
            },
            shiftLockActive: !1,
            robloxExperienceId: -1,
            isTooltipVisible: !1,
            uiTextfieldInFocus: !1,
            f11KeysPressed: 0,
            f11KeysProcessed: 0,
            inactiveTimeout: !1,
            currentRobloxExperienceTimer: 0,
            isHJScriptLoaded: !1,
            searchAppsList: [],
            isExperienceEnded: !1,
            isHtmlGame: !1,
            isTabVisible: !0,
            isProxyUser: !1
        }
          , K = function(e, t) {
            switch (void 0 === e && (e = V),
            t.type) {
            case W.Z.START_CONNECTION:
            case W.Z.STOP_CONNECTION:
            case W.Z.UPDATE_ORIENTATION:
            case W.Z.SET_ERROR:
            case W.Z.UPDATE_BACK_BTN:
            case W.Z.UPDATE_GAME_ENDED:
            case W.Z.LAUNCH_CLICKED:
                return z(z({}, e), t.payload);
            case W.Z.MUTE:
                return z(z({}, e), {
                    muted: !!t.payload.muted
                });
            case W.Z.UPDATE_PEER_CONNECTION_STATE:
                return z(z({}, e), t.payload);
            case W.Z.SESSION_MIGRATED:
                return z(z({}, e), {
                    sessionMigrated: Boolean(t.payload.sessionMigrated),
                    isAndroidConnected: !1
                });
            case W.Z.DUPLICATE_TAB:
                return z(z({}, e), {
                    duplicateTab: Boolean(t.payload.duplicateTab),
                    isAndroidConnected: !1
                });
            case W.Z.SESSION_INACTIVE:
                return z(z({}, e), {
                    sessionComplete: Boolean(t.payload.sessionComplete),
                    isAndroidConnected: !1
                });
            case W.Z.UPDATE_NERD_MODE_STATE:
                return z(z({}, e), t.payload);
            case W.Z.SET_ONLINE_STATE:
            case W.Z.SET_FULLSCREEN:
            case W.Z.IME_STATUS:
            case W.Z.PWA_PROMPT_STATUS:
            case W.Z.TP_ENABLED:
            case W.Z.ROBLOX_TOAST:
                return z(z({}, e), t.payload);
            case W.Z.LISTENERS_ATTACHED:
                return z(z({}, e), {
                    listenersAttached: !0
                });
            case W.Z.SET_REF:
            case W.Z.MODAL_STATUS:
            case W.Z.DRAGGABLE:
            case W.Z.GET_PERMISSION:
            case W.Z.UPDATE_MOUSE_LOCK:
            case W.Z.SET_WIDGET:
            case W.Z.SHOW_MOUSE_LOCK_ONBOARDING:
            case W.Z.SET_MID_ROLL_AD:
            case W.Z.SPOT_INSTANCES:
            case W.Z.OPEN_URL:
            case W.Z.SET_SENSITIVITY_POPUP:
            case W.Z.SET_COUNTRY_CODE:
                return z(z({}, e), t.payload);
            case W.Z.UPDATE_UPLOAD_STATE:
                return z(z({}, e), {
                    fileUploadState: z(z({}, e.fileUploadState), t.payload)
                });
            case W.Z.UPDATE_UPLOAD_REF:
                return z(z({}, e), t.payload);
            case W.Z.UPDATE_DOWNLOAD_STATE:
                return z(z({}, e), {
                    fileDownloadState: z(z({}, e.fileDownloadState), t.payload)
                });
            case W.Z.UPDATE_SHIFT_LOCK:
                return z(z({}, e), {
                    shiftLockActive: !e.shiftLockActive
                });
            case W.Z.SET_ROBLOX_EXPERIENCE_ID:
            case W.Z.UPDATE_LOGIN_TOOLTIP:
                return z(z({}, e), t.payload);
            case W.Z.UPDATE_F11_PRESSED:
                return z(z({}, e), {
                    f11KeysPressed: e.f11KeysPressed + 1
                });
            case W.Z.UPDATE_F11_PROCESSED:
                return z(z({}, e), {
                    f11KeysProcessed: e.f11KeysProcessed + 1
                });
            case W.Z.UPDATE_TEXTFIELD_FOCUS:
            case W.Z.UPDATE_INACTIVE_TIMEOUT:
            case W.Z.HOTJAR_LOADED:
            case W.Z.UPDATE_SEARCH_APPS_LIST:
            case W.Z.SET_EXPERIENCE_STATE:
            case W.Z.HTML_GAME:
            case W.Z.UPDATE_TAB_VISIBILITY_STATE:
            case W.Z.COMPRESSED_PACKAGE:
            case W.Z.SET_PROXY_USER:
                return z(z({}, e), t.payload);
            default:
                return e
            }
        }
          , q = n(4857)
          , $ = function() {
            return ($ = Object.assign || function(e) {
                for (var t, n = 1, r = arguments.length; n < r; n++)
                    for (var o in t = arguments[n])
                        Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                return e
            }
            ).apply(this, arguments)
        }
          , X = {
            imaError: !1,
            adsEnded: !1,
            adBlocker: !1,
            displayAdsError: !1,
            midRollAds: !1,
            inGameAds: !1,
            inGameAd: null,
            showDisplayMidRoll: !0,
            fallbackDisplayed: !1,
            rewardedAdsSDK: !1,
            skyScrapperRef1: null,
            skyScrapperRef2: null,
            leaderBoardRef1: null,
            leaderBoardRef2: null,
            playtime: 1,
            rewardedSDKLoaded: !1,
            rewardedError: !1,
            midRollAdsMobile: !1
        }
          , Y = function(e, t) {
            switch (void 0 === e && (e = X),
            t.type) {
            case q.Z.UPDATE_IMAERROR:
            case q.Z.UPDATE_ADS_STATE:
            case q.Z.UPDATE_APP_STATE:
            case q.Z.LOAD_MID_ROLL:
            case q.Z.SET_IN_GAME_AD:
            case q.Z.SET_ADS_REF:
            case q.Z.UPDATE_REWARDED_SDK_STATE:
            case q.Z.UPDATE_PLAYTIME:
                return $($({}, e), t.payload);
            default:
                return e
            }
        }
          , J = n(2825)
          , Q = {
            showSupport: !1
        }
          , ee = function(e, t) {
            switch (void 0 === e && (e = Q),
            t.type) {
            case J.Z.GET_SUPPORT:
                return {
                    showSupport: !0
                };
            case J.Z.CLOSE_SUPPORT:
                return {
                    showSupport: !1
                };
            default:
                return e
            }
        }
          , te = n(4266)
          , ne = function() {
            return (ne = Object.assign || function(e) {
                for (var t, n = 1, r = arguments.length; n < r; n++)
                    for (var o in t = arguments[n])
                        Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                return e
            }
            ).apply(this, arguments)
        }
          , re = {
            isLoggedIn: !1,
            userInactive: !1,
            showPreloader: !0,
            guestFlow: !1,
            showLogin: !1,
            manualLogoutShowLogin: !1,
            playToken: ""
        }
          , oe = function(e, t) {
            switch (void 0 === e && (e = re),
            t.type) {
            case te.Z.SET_LOGGED_IN:
                return ne(ne({}, e), {
                    isLoggedIn: t.payload.isLoggedIn,
                    showPreloader: t.payload.showPreloader
                });
            case te.Z.SET_USER_ACTIVITY:
                return ne(ne({}, e), {
                    userInactive: t.payload.userInactive
                });
            case te.Z.GUEST_FLOW:
                return ne(ne({}, e), t.payload);
            case te.Z.TOGGLE_LOGIN:
                return ne(ne({}, e), {
                    showLogin: !e.showLogin
                });
            case te.Z.TOGGLE_MANUAL_LOGOUT_LOGIN:
            case te.Z.SET_PLAY_TOKEN:
                return ne(ne({}, e), t.payload);
            default:
                return e
            }
        }
          , ie = n(3029)
          , ae = function() {
            return (ae = Object.assign || function(e) {
                for (var t, n = 1, r = arguments.length; n < r; n++)
                    for (var o in t = arguments[n])
                        Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                return e
            }
            ).apply(this, arguments)
        }
          , se = {
            isActive: !1,
            initialized: !1,
            guideVisible: !1
        }
          , ce = function(e, t) {
            switch (void 0 === e && (e = se),
            t.type) {
            case ie.Z.IMAP_STATUS:
                return ae(ae({}, e), t.payload);
            case ie.Z.TOGGLE_SIDEBAR:
                return ae(ae({}, e), {
                    guideVisible: !e.guideVisible
                });
            default:
                return e
            }
        }
          , ue = n(1739)
          , le = n(8294)
          , fe = n(2820)
          , de = function() {
            return (de = Object.assign || function(e) {
                for (var t, n = 1, r = arguments.length; n < r; n++)
                    for (var o in t = arguments[n])
                        Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                return e
            }
            ).apply(this, arguments)
        }
          , pe = {
            imapOverlay: !0,
            volume: .5,
            imapScheme: "",
            fsWidget: {
                x: -1,
                y: -1
            },
            mouseLockOnboardingCount: 0,
            mouseSensitivity: ue.rL,
            legacyControls: !1,
            shiftlockToastCount: 0,
            lastShiftLockToastDate: new Date(0).toDateString(),
            lastRobloxToastDate: new Date(0).toDateString(),
            gameGuideNotificationCount: 0,
            lastGameGuideNotifDate: new Date(0).toDateString(),
            loginNotificationCount: 0,
            lastLoginNotifDate: new Date(0).toDateString(),
            recentPlayedApps: []
        }
          , ge = function(e) {
            for (var t = Object.keys(e), n = {}, r = 0; r < t.length; r++) {
                var o = t[r];
                0,
                "function" === typeof e[o] && (n[o] = e[o])
            }
            var i, s = Object.keys(n);
            try {
                !function(e) {
                    Object.keys(e).forEach((function(t) {
                        var n = e[t];
                        if ("undefined" === typeof n(void 0, {
                            type: u.INIT
                        }))
                            throw new Error(a(12));
                        if ("undefined" === typeof n(void 0, {
                            type: u.PROBE_UNKNOWN_ACTION()
                        }))
                            throw new Error(a(13))
                    }
                    ))
                }(n)
            } catch (c) {
                i = c
            }
            return function(e, t) {
                if (void 0 === e && (e = {}),
                i)
                    throw i;
                for (var r = !1, o = {}, c = 0; c < s.length; c++) {
                    var u = s[c]
                      , l = n[u]
                      , f = e[u]
                      , d = l(f, t);
                    if ("undefined" === typeof d) {
                        t && t.type;
                        throw new Error(a(14))
                    }
                    o[u] = d,
                    r = r || d !== f
                }
                return (r = r || s.length !== Object.keys(e).length) ? o : e
            }
        }({
            play: K,
            ads: Y,
            support: ee,
            auth: oe,
            imap: ce,
            preferences: function(e, t) {
                void 0 === e && (e = pe);
                var n = t.type
                  , r = t.payload;
                switch (n) {
                case fe.Z.UPDATE_PREFERENCES:
                case fe.Z.OVERLAY:
                case fe.Z.VOLUME:
                    return de(de({}, e), r);
                case fe.Z.FS_WIDGET:
                    if (r) {
                        var o = (0,
                        le.ZF)()
                          , i = r.fsWidget
                          , a = (null === i || void 0 === i ? void 0 : i.x) || o.left
                          , s = (null === i || void 0 === i ? void 0 : i.y) || o.top;
                        return de(de({}, e), {
                            fsWidget: {
                                x: a,
                                y: s
                            }
                        })
                    }
                    break;
                case fe.Z.MOUSE_LOCK_ONBOARDING_COUNT:
                case fe.Z.MOUSE_SENSITIVITY:
                    return de(de({}, e), r);
                case fe.Z.LEGACY_CONTROLS:
                    return de(de({}, e), {
                        legacyControls: !e.legacyControls
                    });
                case fe.Z.SET_LEGACY_CONTROLS:
                case fe.Z.SHIFT_LOCK_TOAST_UPDATE:
                case fe.Z.ROBLOX_TOAST_UPDATE:
                case fe.Z.GAME_GUIDE_NOTIF_COUNT_UPDATE:
                case fe.Z.LOGIN_NOTIF_UPDATE:
                    return de(de({}, e), r);
                default:
                    return e
                }
                return e
            }
        })
          , he = function(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}
              , r = n.whitelist || null
              , o = n.blacklist || null;
            function i(e) {
                return !(!r || -1 !== r.indexOf(e)) || !(!o || -1 === o.indexOf(e))
            }
            return {
                in: function(t, n, r) {
                    return !i(n) && e ? e(t, n, r) : t
                },
                out: function(e, n, r) {
                    return !i(n) && t ? t(e, n, r) : e
                }
            }
        }((function(e, t) {
            var n, r;
            if ("preferences" === t && (null === (r = null === window || void 0 === window ? void 0 : window.gameInfo) || void 0 === r ? void 0 : r.id)) {
                if (window.gameInfo.fsWidget) {
                    var o = window.gameInfo.fsWidget
                      , i = o.x
                      , a = o.y;
                    e.fsWidget && (-1 === e.fsWidget.x && (e.fsWidget.x = i || 20),
                    -1 === e.fsWidget.y && (e.fsWidget.y = a || 10))
                }
                return (n = {})[window.gameInfo.id] = e,
                n
            }
            return e
        }
        ), (function(e, t) {
            var n;
            return "preferences" === t && (null === (n = null === window || void 0 === window ? void 0 : window.gameInfo) || void 0 === n ? void 0 : n.id) ? "undefined" !== typeof e[window.gameInfo.id] ? e[window.gameInfo.id] : void 0 : e
        }
        ))
          , ve = d
          , me = [h]
          , ye = f(function(e, t) {
            var n = void 0 !== e.version ? e.version : -1
              , r = (e.debug,
            void 0 === e.stateReconciler ? k : e.stateReconciler)
              , o = e.getStoredState || A
              , i = void 0 !== e.timeout ? e.timeout : 5e3
              , a = null
              , s = !1
              , c = !0
              , u = function(e) {
                return e._persist.rehydrated && a && !c && a.update(e),
                e
            };
            return function(l, f) {
                var d = l || {}
                  , p = d._persist
                  , g = D(d, ["_persist"]);
                if (f.type === S) {
                    var h = !1
                      , O = function(t, n) {
                        h || (f.rehydrate(e.key, t, n),
                        h = !0)
                    };
                    if (i && setTimeout((function() {
                        !h && O(void 0, new Error('redux-persist: persist timed out for persist key "'.concat(e.key, '"')))
                    }
                    ), i),
                    c = !1,
                    a || (a = P(e)),
                    p)
                        return R({}, t(g, f), {
                            _persist: p
                        });
                    if ("function" !== typeof f.rehydrate || "function" !== typeof f.register)
                        throw new Error("redux-persist: either rehydrate or register is not a function on the PERSIST action. This can happen if the action is being replayed. This is an unexplored use case, please open an issue and we will figure out a resolution.");
                    return f.register(e.key),
                    o(e).then((function(t) {
                        (e.migrate || function(e, t) {
                            return Promise.resolve(e)
                        }
                        )(t, n).then((function(e) {
                            O(e)
                        }
                        ), (function(e) {
                            O(void 0, e)
                        }
                        ))
                    }
                    ), (function(e) {
                        O(void 0, e)
                    }
                    )),
                    R({}, t(g, f), {
                        _persist: {
                            version: n,
                            rehydrated: !1
                        }
                    })
                }
                if (f.type === w)
                    return s = !0,
                    f.result(function(e) {
                        var t = e.storage
                          , n = "".concat(void 0 !== e.keyPrefix ? e.keyPrefix : v).concat(e.key);
                        return t.removeItem(n, C)
                    }(e)),
                    R({}, t(g, f), {
                        _persist: p
                    });
                if (f.type === m)
                    return f.result(a && a.flush()),
                    R({}, t(g, f), {
                        _persist: p
                    });
                if (f.type === b)
                    c = !0;
                else if (f.type === y) {
                    if (s)
                        return R({}, g, {
                            _persist: R({}, p, {
                                rehydrated: !0
                            })
                        });
                    if (f.key === e.key) {
                        var E = t(g, f)
                          , T = f.payload
                          , _ = R({}, !1 !== r && void 0 !== T ? r(T, l, E, e) : E, {
                            _persist: R({}, p, {
                                rehydrated: !0
                            })
                        });
                        return u(_)
                    }
                }
                if (!p)
                    return t(l, f);
                var k = t(g, f);
                return k === g ? l : u(R({}, k, {
                    _persist: p
                }))
            }
        }({
            key: "root",
            storage: G.Z,
            debug: !0,
            whitelist: ["preferences"],
            transforms: [he]
        }, ge), ve(function() {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                t[n] = arguments[n];
            return function(e) {
                return function() {
                    var n = e.apply(void 0, arguments)
                      , r = function() {
                        throw new Error(a(15))
                    }
                      , o = {
                        getState: n.getState,
                        dispatch: function() {
                            return r.apply(void 0, arguments)
                        }
                    }
                      , s = t.map((function(e) {
                        return e(o)
                    }
                    ));
                    return r = d.apply(void 0, s)(n.dispatch),
                    i(i({}, n), {}, {
                        dispatch: r
                    })
                }
            }
        }
        .apply(void 0, me)))
          , be = function(e, t, n) {
            var r = n || !1
              , o = f(B, Z, t && t.enhancer ? t.enhancer : void 0)
              , i = function(e) {
                o.dispatch({
                    type: O,
                    key: e
                })
            }
              , a = function(t, n, i) {
                var a = {
                    type: y,
                    payload: n,
                    err: i,
                    key: t
                };
                e.dispatch(a),
                o.dispatch(a),
                r && s.getState().bootstrapped && (r(),
                r = !1)
            }
              , s = U({}, o, {
                purge: function() {
                    var t = [];
                    return e.dispatch({
                        type: w,
                        result: function(e) {
                            t.push(e)
                        }
                    }),
                    Promise.all(t)
                },
                flush: function() {
                    var t = [];
                    return e.dispatch({
                        type: m,
                        result: function(e) {
                            t.push(e)
                        }
                    }),
                    Promise.all(t)
                },
                pause: function() {
                    e.dispatch({
                        type: b
                    })
                },
                persist: function() {
                    e.dispatch({
                        type: S,
                        register: i,
                        rehydrate: a
                    })
                }
            });
            return t && t.manualPersist || s.persist(),
            s
        }(ye)
          , Se = ye
    },
    2825: function(e, t) {
        "use strict";
        t.Z = {
            GET_SUPPORT: "GET_SUPPORT",
            CLOSE_SUPPORT: "CLOSE_SUPPORT"
        }
    },
    4003: function(e, t, n) {
        "use strict";
        n.d(t, {
            $3: function() {
                return N
            },
            fQ: function() {
                return U
            },
            fr: function() {
                return Z
            },
            qO: function() {
                return B
            },
            CE: function() {
                return G
            },
            Yg: function() {
                return H
            },
            rI: function() {
                return W
            },
            LK: function() {
                return V
            },
            vT: function() {
                return K
            },
            Co: function() {
                return q
            },
            I$: function() {
                return J
            },
            Bz: function() {
                return ae
            },
            wc: function() {
                return se
            },
            EZ: function() {
                return pe
            },
            cT: function() {
                return ge
            },
            Hv: function() {
                return he
            }
        });
        var r, o, i, a, s, c, u = n(7981), l = n(5018), f = n(3926), d = n(5221), p = n(1739), g = n(6971), h = n(3029), v = n(4857), m = n(1508), y = n(8041), b = n(550), S = n(4266), w = n(812), O = n(8294), E = n(9555), T = n(3493), _ = n.n(T), k = n(2199), P = n(1339), x = n(942), A = n(9598), I = n(7020), C = n(8844), L = function(e, t, n, r) {
            return new (n || (n = Promise))((function(o, i) {
                function a(e) {
                    try {
                        c(r.next(e))
                    } catch (t) {
                        i(t)
                    }
                }
                function s(e) {
                    try {
                        c(r.throw(e))
                    } catch (t) {
                        i(t)
                    }
                }
                function c(e) {
                    var t;
                    e.done ? o(e.value) : (t = e.value,
                    t instanceof n ? t : new n((function(e) {
                        e(t)
                    }
                    ))).then(a, s)
                }
                c((r = r.apply(e, t || [])).next())
            }
            ))
        }, R = function(e, t) {
            var n, r, o, i, a = {
                label: 0,
                sent: function() {
                    if (1 & o[0])
                        throw o[1];
                    return o[1]
                },
                trys: [],
                ops: []
            };
            return i = {
                next: s(0),
                throw: s(1),
                return: s(2)
            },
            "function" === typeof Symbol && (i[Symbol.iterator] = function() {
                return this
            }
            ),
            i;
            function s(i) {
                return function(s) {
                    return function(i) {
                        if (n)
                            throw new TypeError("Generator is already executing.");
                        for (; a; )
                            try {
                                if (n = 1,
                                r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r),
                                0) : r.next) && !(o = o.call(r, i[1])).done)
                                    return o;
                                switch (r = 0,
                                o && (i = [2 & i[0], o.value]),
                                i[0]) {
                                case 0:
                                case 1:
                                    o = i;
                                    break;
                                case 4:
                                    return a.label++,
                                    {
                                        value: i[1],
                                        done: !1
                                    };
                                case 5:
                                    a.label++,
                                    r = i[1],
                                    i = [0];
                                    continue;
                                case 7:
                                    i = a.ops.pop(),
                                    a.trys.pop();
                                    continue;
                                default:
                                    if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                        a = 0;
                                        continue
                                    }
                                    if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                        a.label = i[1];
                                        break
                                    }
                                    if (6 === i[0] && a.label < o[1]) {
                                        a.label = o[1],
                                        o = i;
                                        break
                                    }
                                    if (o && a.label < o[2]) {
                                        a.label = o[2],
                                        a.ops.push(i);
                                        break
                                    }
                                    o[2] && a.ops.pop(),
                                    a.trys.pop();
                                    continue
                                }
                                i = t.call(e, a)
                            } catch (s) {
                                i = [6, s],
                                r = 0
                            } finally {
                                n = o = 0
                            }
                        if (5 & i[0])
                            throw i[1];
                        return {
                            value: i[0] ? i[1] : void 0,
                            done: !0
                        }
                    }([i, s])
                }
            }
        }, N = "fe-roblox-exp-id", D = !1, j = !1, M = {
            receivedBuffer: [],
            receivedSize: 0,
            name: "",
            totalSize: 0,
            initiated: !1
        }, U = {};
        function F(e) {
            M.receivedBuffer = [],
            M.receivedSize = 0,
            M.name = "",
            M.totalSize = 0,
            M.initiated = !1,
            m.Z.dispatch({
                type: g.Z.UPDATE_DOWNLOAD_STATE,
                payload: {
                    showLoader: !0,
                    loaderType: e
                }
            }),
            setTimeout((function() {
                m.Z.dispatch({
                    type: g.Z.UPDATE_DOWNLOAD_STATE,
                    payload: {
                        showLoader: !1
                    }
                })
            }
            ), 3e3)
        }
        var Z = function(e) {
            if (r && "open" === (null === r || void 0 === r ? void 0 : r.readyState))
                try {
                    r.send(e)
                } catch (t) {}
        }
          , B = function(e) {
            return Z("osd::".concat(e))
        }
          , G = function(e) {
            return Z("showtouches::".concat(e))
        }
          , H = function(e) {
            var t = e.coords;
            Z("".concat(p.vK.location).concat(t.latitude, "::").concat(t.longitude))
        }
          , W = _()(Z, 16)
          , z = function(e) {
            var t = {}
              , n = "".concat(e);
            n.length && n.split(":$:").forEach((function(e) {
                e.startsWith("sdp_camera") ? t.sdp_camera = e.split("sdp_camera=")[1] : Object.assign(t, function(e) {
                    var t = {}
                      , n = "".concat(e);
                    return n.length && n.split("\n").forEach((function(e) {
                        var n = e.split("=")[0];
                        try {
                            t[n] = e.substring(e.indexOf("".concat(n, "=")) + n.length + 1)
                        } catch (r) {
                            (0,
                            u.ZP)(r)
                        }
                    }
                    )),
                    t
                }(e))
            }
            ));
            return t
        }
          , V = function() {
            var e, t = m.Z.getState().play;
            "function" === typeof (null === (e = null === t || void 0 === t ? void 0 : t.peerConnection) || void 0 === e ? void 0 : e.close) && t.peerConnection.close()
        }
          , K = function() {
            Z("".concat(p.vK.backToGame).concat(j ? "::force" : ""))
        }
          , q = function() {
            var e = "visible" === document.visibilityState;
            Z("".concat(p.vK.tab).concat(e ? "active" : "inactive"));
            var t = m.Z.getState()
              , n = t.play
              , r = n.muted
              , o = n.videoRef
              , i = n.peerConnectionState;
            if ((0,
            y.Tt)() || (e ? r || o && o.current && (o.current.muted = !1) : r || o && o.current && (o.current.muted = !0)),
            D && e) {
                var a = t.play
                  , s = a.sessionMigrated
                  , c = a.spotInstances
                  , u = a.error
                  , l = a.inactiveTimeout
                  , f = a.sessionComplete;
                !(s || c || u || l || f) && (0,
                O.Pr)(i) && window.location.reload()
            }
        }
          , $ = function() {
            C.Z.type && "desktop" === C.Z.type && !(0,
            y.tq)() && m.Z.dispatch({
                type: g.Z.IME_STATUS,
                payload: {
                    isImeEnabled: !!l.be.isOpen
                }
            })
        }
          , X = function(e) {
            if (M.receivedBuffer.push(e.data),
            M.receivedSize += e.data.byteLength,
            M.receivedSize >= M.totalSize) {
                var t = document.createElement("a");
                if (t)
                    try {
                        var n = new Blob(M.receivedBuffer);
                        t.href = URL.createObjectURL(n),
                        t.download = M.name,
                        t.click(),
                        URL.revokeObjectURL(t.href),
                        F("success")
                    } catch (r) {
                        F("warning"),
                        Z("fileupload::failed")
                    }
            }
        };
        function Y() {
            !function() {
                var e, t = null === (e = m.Z.getState().play.fileUploadRef) || void 0 === e ? void 0 : e.current;
                t && (t.value = "")
            }(),
            setTimeout((function() {
                m.Z.dispatch({
                    type: g.Z.UPDATE_UPLOAD_STATE,
                    payload: {
                        showLoader: !1
                    }
                })
            }
            ), 3e3)
        }
        function J(e) {
            void 0 === e && (e = !1),
            i && (i.close(),
            i = null),
            Y();
            var t = {
                loaderType: "warning"
            };
            e && (t.showLoader = !0),
            m.Z.dispatch({
                type: g.Z.UPDATE_UPLOAD_STATE,
                payload: t
            })
        }
        var Q = !1
          , ee = function(e) {
            return e === p.rk || "com.android.provision" === e
        }
          , te = {
            audio: !1,
            video: {
                width: {
                    exact: 320
                },
                height: {
                    exact: 240
                }
            }
        }
          , ne = {
            audio: !1,
            video: {
                width: {
                    exact: 640
                },
                height: {
                    exact: 480
                }
            }
        };
        function re(e, t) {
            return void 0 === t && (t = !1),
            L(this, void 0, void 0, (function() {
                return R(this, (function(n) {
                    switch (n.label) {
                    case 0:
                        (0,
                        y.tq)() && (te.video.width.exact = 240,
                        te.video.height.exact = 320,
                        "0" === e ? (te.video.facingMode = {
                            exact: "environment"
                        },
                        ne.video.facingMode = {
                            exact: "environment"
                        }) : (te.video.facingMode = {
                            exact: "user"
                        },
                        ne.video.facingMode = {
                            exact: "user"
                        })),
                        n.label = 1;
                    case 1:
                        return n.trys.push([1, 3, , 8]),
                        [4, navigator.mediaDevices.getUserMedia(te)];
                    case 2:
                        return s = n.sent(),
                        [3, 8];
                    case 3:
                        n.sent(),
                        n.label = 4;
                    case 4:
                        return n.trys.push([4, 6, , 7]),
                        [4, navigator.mediaDevices.getUserMedia(ne)];
                    case 5:
                        return s = n.sent(),
                        [3, 7];
                    case 6:
                        return n.sent(),
                        [2, !1];
                    case 7:
                        return [3, 8];
                    case 8:
                        return t && c.replaceTrack(s.getTracks()[0]).catch((function() {}
                        )),
                        [2, !0]
                    }
                }
                ))
            }
            ))
        }
        function oe(e) {}
        var ie = 0
          , ae = function() {
            return ie || (ie = +"".concat(sessionStorage.getItem(N))) || (ie = 0),
            ie
        };
        var se = function() {
            m.Z.dispatch({
                type: g.Z.SPOT_INSTANCES,
                payload: {
                    spotInstances: !0,
                    spotInstanceToast: !1
                }
            })
        }
          , ce = function(e) {
            C.Z.currentPackageName = e,
            C.Z.lastAppChanged = Date.now()
        }
          , ue = function(e) {
            var t, n, r, i, a = z(e);
            switch (a.msgType) {
            case p.sf:
                a.packageName === O.HS.appInfo.packageName && (!function() {
                    var e = m.Z.getState().play
                      , t = O.HS.features.enableHotjar;
                    e.isHJScriptLoaded || !t || !(0,
                    y.Em)() && !(0,
                    y.zc)() && (0,
                    y.tq)() || (m.Z.dispatch({
                        type: g.Z.HOTJAR_LOADED,
                        payload: {
                            isHJScriptLoaded: !0
                        }
                    }),
                    function(t, n, r, o) {
                        t.hj = t.hj || function() {
                            for (var e = [], n = 0; n < arguments.length; n++)
                                e[n] = arguments[n];
                            (t.hj.q = t.hj.q || []).push(e)
                        }
                        ,
                        t._hjSettings = {
                            hjid: 848438,
                            hjsv: 6
                        };
                        var i = n.getElementsByTagName("head")[0]
                          , a = n.createElement("script");
                        a.async = !0,
                        a.src = "https://static.hotjar.com/c/hotjar-" + t._hjSettings.hjid.toString() + ".js?sv=" + t._hjSettings.hjsv.toString(),
                        a.addEventListener("load", (function() {
                            return window.hj("identify", e.uaSessionId)
                        }
                        )),
                        i.appendChild(a)
                    }(window, document))
                }(),
                (0,
                A.L9)("AppReady"),
                B("0"),
                G("0"),
                q(),
                ce(a.packageName),
                D = !0,
                a.screenorientation && (0,
                E.VE)(a.screenorientation),
                l.be.native = O.HS.features.nativeKeyboard,
                m.Z.dispatch({
                    type: g.Z.START_CONNECTION,
                    payload: {
                        isAndroidConnected: !0,
                        showBackbtn: !1
                    }
                }),
                Q || O.HS.features.disableImap || !(0,
                w.qU)() || (window.InputMapperApi.sendKeyToAndroid = P.iJ,
                w.rx.then((function() {
                    var e, t, n = m.Z.getState().play.videoRef;
                    k.ZP.initialize(O.HS.appInfo.packageName, (null === (e = null === n || void 0 === n ? void 0 : n.current) || void 0 === e ? void 0 : e.width) || 1280, (null === (t = null === n || void 0 === n ? void 0 : n.current) || void 0 === t ? void 0 : t.height) || 720)
                }
                )).catch((function() {
                    k.ZP.clear()
                }
                ))),
                Q = !0,
                (0,
                x.Ee)() || (0,
                x.Ar)() || (0,
                y.tq)() || !O.HS.pwaSupported || setTimeout((function() {
                    (0,
                    A.L9)("PreNudgeWaitCompleted"),
                    (0,
                    x.ab)() ? ((0,
                    x.EG)(),
                    m.Z.dispatch({
                        type: g.Z.PWA_PROMPT_STATUS,
                        payload: {
                            showPwaPrompt: !0
                        }
                    })) : (0,
                    A.L9)("PwaNudgeLimitReached")
                }
                ), null === (t = (0,
                I.i)()) || void 0 === t ? void 0 : t.pwaNudgeDelayMs)),
                C.Z.type = a.deviceType,
                "smartphone" !== a.deviceType && "phablet" !== a.deviceType || (0,
                E.D9)(2, 1),
                $();
                break;
            case p.yK:
                m.Z.dispatch({
                    type: g.Z.GET_PERMISSION,
                    payload: {
                        permissionType: "Location"
                    }
                });
                break;
            case p.xv:
                j = ee(a.packageName),
                U[p.xv] = a;
                var u = O.HS.appInfo.packageName === a.packageName;
                if (a.activityName.indexOf("ActivityNativeMain") > -1) {
                    var T = m.Z.getState().play.robloxExperienceId;
                    -1 !== T && ((0,
                    A.L9)("RobloxExperienceEnded", {
                        activeDuration: (Date.now() - m.Z.getState().play.currentRobloxExperienceTimer) / 1e3,
                        robloxExperience: T
                    }),
                    sessionStorage.removeItem(N),
                    m.Z.dispatch({
                        type: g.Z.SET_ROBLOX_EXPERIENCE_ID,
                        payload: {
                            robloxExperienceId: -1,
                            currentRobloxExperienceTimer: 0
                        }
                    }),
                    m.Z.dispatch({
                        type: g.Z.SET_EXPERIENCE_STATE,
                        payload: {
                            isExperienceEnded: !0
                        }
                    }))
                }
                if (D && C.Z.currentPackageName !== a.packageName) {
                    if (!j && (0,
                    w.qU)()) {
                        j = !0;
                        var _ = m.Z.getState().play.videoRef;
                        try {
                            k.ZP.initialize(a.packageName, (null === (n = null === _ || void 0 === _ ? void 0 : _.current) || void 0 === n ? void 0 : n.width) || 1280, (null === (r = null === _ || void 0 === _ ? void 0 : _.current) || void 0 === r ? void 0 : r.height) || 720)
                        } catch (te) {
                            k.ZP.clear()
                        }
                    }
                    (0,
                    A.L9)("AppChanged", {
                        from: C.Z.currentPackageName,
                        to: a.packageName,
                        timeSpent: Math.round((Date.now() - C.Z.lastAppChanged) / 1e3)
                    }),
                    ce(a.packageName)
                }
                if (C.Z.currentPackageName = a.packageName,
                (0,
                y.tq)())
                    m.Z.dispatch({
                        type: g.Z.UPDATE_BACK_BTN,
                        payload: {
                            showBackbtn: !u
                        }
                    });
                else {
                    var F = O.HS.features.nativeMouse;
                    ("object" === typeof F && F.indexOf(a.activityName) >= 0 || "boolean" === typeof F && F) && u ? d.fl.native = !0 : d.fl.native = !1,
                    d.fl.native ? (0,
                    f.Jj)(!0) : (0,
                    f.DA)(),
                    U.nativeM = d.fl.native,
                    k.ZP.showLookAroundToasts = !0,
                    "com.roblox.client/.game.ActivityGame" !== a.activityName && m.Z.dispatch({
                        type: g.Z.ROBLOX_TOAST,
                        payload: {
                            robloxToast: !1
                        }
                    }),
                    m.Z.dispatch({
                        type: g.Z.UPDATE_BACK_BTN,
                        payload: {
                            showBackbtn: !u,
                            nativeMouseEnabled: d.fl.native
                        }
                    })
                }
                break;
            case p.LI:
                m.Z.dispatch({
                    type: g.Z.MODAL_STATUS,
                    payload: {
                        inactivityModal: !0
                    }
                });
                break;
            case p.wD:
                C.Z.trackEvent = a,
                a.roblox_placeId && (sessionStorage.setItem(N, "".concat(a.roblox_placeId)),
                m.Z.dispatch({
                    type: g.Z.SET_ROBLOX_EXPERIENCE_ID,
                    payload: {
                        robloxExperienceId: a.roblox_placeId,
                        currentRobloxExperienceTimer: Date.now()
                    }
                }),
                (0,
                A.L9)("RobloxExperienceStarted", {
                    robloxExperience: a.roblox_placeId
                }),
                ie = Number(a.roblox_placeId));
                break;
            case p.bv:
                if (ee(a.packageName))
                    return;
                D && (0,
                E.VE)(a.rotation);
                break;
            case p.Ol:
                l.be.isOpen = "true" === a.enabled,
                $(),
                m.Z.dispatch({
                    type: h.Z.IMAP_STATUS,
                    payload: {
                        isActive: !l.be.isOpen
                    }
                }),
                k.ZP.updateActive(!l.be.isOpen, 0);
                break;
            case p.T:
                if (V(),
                (X = m.Z.getState().play).disconnecTimer && Date.now() - X.disconnecTimer > 55)
                    return void se();
                m.Z.dispatch({
                    type: g.Z.SESSION_INACTIVE,
                    payload: {
                        sessionComplete: !0
                    }
                }),
                "UserInactivityTimeout" === a.reason ? m.Z.dispatch({
                    type: g.Z.UPDATE_INACTIVE_TIMEOUT,
                    payload: {
                        inactiveTimeout: !0
                    }
                }) : m.Z.dispatch({
                    type: S.Z.TOGGLE_LOGIN,
                    payload: {
                        showLogin: !0
                    }
                });
                break;
            case p.bO:
                var H = a.userWarningTime;
                m.Z.dispatch({
                    type: g.Z.SPOT_INSTANCES,
                    payload: {
                        disconnecTimer: Date.now(),
                        userWarningTime: H,
                        spotInstances: !1,
                        spotInstanceToast: !0
                    }
                });
                break;
            case p.ne:
                (0,
                b.F)(a.data);
                break;
            case p.T7:
            case p.iB:
                (0,
                y.G6)() ? m.Z.dispatch({
                    type: g.Z.OPEN_URL,
                    payload: {
                        urlToOpen: a.url || a.paymentUrl
                    }
                }) : window.open(a.url || a.paymentUrl, "_blank", "noopener");
                break;
            case p.J7:
                var W = parseInt((0,
                O.I6)(), 10);
                if (W < 3) {
                    var K = W + 1;
                    (0,
                    O.sA)(K.toString()),
                    m.Z.dispatch({
                        type: g.Z.SET_ERROR,
                        payload: {
                            error: p.J7,
                            clientId: "",
                            sessionId: "",
                            isAndroidConnected: !1
                        }
                    })
                } else
                    m.Z.dispatch({
                        type: g.Z.SET_ERROR,
                        payload: {
                            error: "appCrashRetryComplete",
                            clientId: "",
                            sessionId: "",
                            isAndroidConnected: !1
                        }
                    }),
                    (0,
                    O.Z0)();
                break;
            case p.nd:
                var X, J = null === (i = (X = m.Z.getState().play).fileUploadRef) || void 0 === i ? void 0 : i.current;
                if (J)
                    try {
                        a.type && (J.accept = a.type),
                        J.focus(),
                        J.click()
                    } catch (ne) {
                        Z("fileupload::failed")
                    }
                break;
            case p.cX:
                o = null,
                Y(),
                m.Z.dispatch({
                    type: g.Z.UPDATE_UPLOAD_STATE,
                    payload: {
                        loaderType: "success",
                        showLoader: !0
                    }
                });
                break;
            case p.To:
                M.initiated = !0,
                M.name = a.fileName,
                M.totalSize = parseInt(a.fileSize, 10);
                break;
            case p.me:
                (function(e, t) {
                    var n;
                    return L(this, void 0, void 0, (function() {
                        var r, o, i, a, u, l;
                        return R(this, (function(f) {
                            switch (f.label) {
                            case 0:
                                if (!(r = m.Z.getState().play).peerConnection)
                                    return [2];
                                f.label = 1;
                            case 1:
                                return f.trys.push([1, 6, , 7]),
                                [4, r.peerConnection.setRemoteDescription(new RTCSessionDescription(t))];
                            case 2:
                                return f.sent(),
                                [4, re(e)];
                            case 3:
                                return o = f.sent(),
                                s && (i = s.getTracks()[0],
                                c = r.peerConnection.addTrack(i, s)),
                                [4, r.peerConnection.createAnswer()];
                            case 4:
                                return a = f.sent(),
                                u = /useinbandfec=1/g,
                                l = a ? null === (n = null === a || void 0 === a ? void 0 : a.sdp) || void 0 === n ? void 0 : n.replace(u, "sprop-stereo=1;stereo=1;maxplaybackrate=48000;useinbandfec=1") : null,
                                Z("answer_camera::".concat(l).concat(o ? "" : "::camera_denied")),
                                r.peerConnection.onnegotiationneeded = oe,
                                [4, r.peerConnection.setLocalDescription(a)];
                            case 5:
                            case 6:
                                return f.sent(),
                                [3, 7];
                            case 7:
                                return [2]
                            }
                        }
                        ))
                    }
                    ))
                }
                )(a.facing, {
                    type: "offer",
                    sdp: a.sdp_camera
                }).catch((function() {}
                ));
                break;
            case p.ND:
                "on" === a.cmd && re(a.facing, !0).catch((function() {}
                )),
                "off" === a.cmd && function() {
                    var e = m.Z.getState().play;
                    (null === e || void 0 === e ? void 0 : e.peerConnection) && s && (s.getTracks().forEach((function(e) {
                        return e.stop()
                    }
                    )),
                    c.replaceTrack(null).catch((function() {}
                    )))
                }();
                break;
            case p.y9:
                m.Z.getState().ads.adBlocker ? Z("ADS::rewardedAdLoad::fail") : m.Z.dispatch({
                    type: v.Z.UPDATE_REWARDED_SDK_STATE,
                    payload: {
                        rewardedAdsSDK: !0
                    }
                });
                break;
            case p.ro:
                C.Z.logsPath = a.logsPath
            }
        }
          , le = function(e) {
            return function() {
                switch (e) {
                case "close":
                    Y(),
                    i && (i.close(),
                    i = null);
                    break;
                case "error":
                    J(!0),
                    i && (i.close(),
                    i = null)
                }
            }
        }
          , fe = function(e) {
            return function() {
                switch (e) {
                case "open":
                    m.Z.dispatch({
                        type: g.Z.UPDATE_DOWNLOAD_STATE,
                        payload: {
                            showLoader: !0,
                            loaderType: "downloading"
                        }
                    });
                    break;
                case "close":
                    F(m.Z.getState().play.fileDownloadState.loaderType),
                    a && (a.close(),
                    a = null);
                    break;
                case "error":
                    F("warning"),
                    a && (a.close(),
                    a = null)
                }
            }
        };
        function de() {
            var e = 262144;
            if (i)
                for (var t = i; o && o.byteLength; ) {
                    if (t.bufferedAmount > t.bufferedAmountLowThreshold)
                        return void (t.onbufferedamountlow = function() {
                            (null === t || void 0 === t ? void 0 : t.onbufferedamountlow) && (t.onbufferedamountlow = null),
                            de()
                        }
                        );
                    var n = o.slice(0, e);
                    o = o.slice(e, o.byteLength),
                    "open" === (null === t || void 0 === t ? void 0 : t.readyState) && t.send(n)
                }
        }
        var pe = function(e) {
            var t = e.channel;
            return "fileUpload" === t.label ? ((i = t).binaryType = "arraybuffer",
            i.onopen = de,
            i.onclose = le("close"),
            void (i.onerror = le("error"))) : "fileDownload" === t.label ? ((a = t).onmessage = X,
            a.onopen = fe("open"),
            a.onclose = fe("close"),
            void (a.onerror = fe("error"))) : (r = t,
            t.onmessage = function(e) {
                ue(e.data)
            }
            ,
            t.onopen = function() {}
            ,
            t.onclose = function() {}
            ,
            void (t.onerror = function() {}
            ))
        };
        function ge(e) {
            var t;
            return L(this, void 0, void 0, (function() {
                var n, r, i;
                return R(this, (function(a) {
                    switch (a.label) {
                    case 0:
                        return n = m.Z.getState().play,
                        (r = e.target.files) && r.length ? "connected" !== (null === (t = n.peerConnection) || void 0 === t ? void 0 : t.connectionState) ? (J(!0),
                        [2]) : [4, (i = r[0]).arrayBuffer()] : [2];
                    case 1:
                        return o = a.sent(),
                        Z("fileupload::".concat(i.name, "::").concat(o.byteLength)),
                        m.Z.dispatch({
                            type: g.Z.UPDATE_UPLOAD_STATE,
                            payload: {
                                loaderType: "uploading",
                                showLoader: !0
                            }
                        }),
                        [2]
                    }
                }
                ))
            }
            ))
        }
        function he() {
            var e, t = null === (e = m.Z.getState().play.fileUploadRef) || void 0 === e ? void 0 : e.current;
            t && t.addEventListener("focus", (function e() {
                t.removeEventListener("focus", e),
                setTimeout((function() {
                    t && t.value || Z("fileupload::failed")
                }
                ), 500)
            }
            ))
        }
    },
    4803: function(e, t, n) {
        "use strict";
        n.d(t, {
            f: function() {
                return r.fr
            }
        });
        var r = n(4003)
    },
    8844: function(e, t) {
        "use strict";
        var n = {
            type: "",
            currentPackageName: "",
            lastAppChanged: Date.now(),
            trackEvent: {},
            logsPath: ""
        };
        t.Z = n
    },
    8309: function(e, t, n) {
        "use strict";
        n.d(t, {
            x4: function() {
                return v
            },
            _B: function() {
                return m
            },
            hB: function() {
                return y
            },
            kS: function() {
                return b
            },
            Lj: function() {
                return S
            },
            et: function() {
                return w
            },
            Ie: function() {
                return E
            }
        });
        var r = n(9305)
          , o = n(1508)
          , i = n(4266)
          , a = n(4003)
          , s = n(6817)
          , c = n(1739)
          , u = n(8294)
          , l = n(6971)
          , f = n(7981)
          , d = n(9598)
          , p = n(8962)
          , g = function(e, t, n, r) {
            return new (n || (n = Promise))((function(o, i) {
                function a(e) {
                    try {
                        c(r.next(e))
                    } catch (t) {
                        i(t)
                    }
                }
                function s(e) {
                    try {
                        c(r.throw(e))
                    } catch (t) {
                        i(t)
                    }
                }
                function c(e) {
                    var t;
                    e.done ? o(e.value) : (t = e.value,
                    t instanceof n ? t : new n((function(e) {
                        e(t)
                    }
                    ))).then(a, s)
                }
                c((r = r.apply(e, t || [])).next())
            }
            ))
        }
          , h = function(e, t) {
            var n, r, o, i, a = {
                label: 0,
                sent: function() {
                    if (1 & o[0])
                        throw o[1];
                    return o[1]
                },
                trys: [],
                ops: []
            };
            return i = {
                next: s(0),
                throw: s(1),
                return: s(2)
            },
            "function" === typeof Symbol && (i[Symbol.iterator] = function() {
                return this
            }
            ),
            i;
            function s(i) {
                return function(s) {
                    return function(i) {
                        if (n)
                            throw new TypeError("Generator is already executing.");
                        for (; a; )
                            try {
                                if (n = 1,
                                r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r),
                                0) : r.next) && !(o = o.call(r, i[1])).done)
                                    return o;
                                switch (r = 0,
                                o && (i = [2 & i[0], o.value]),
                                i[0]) {
                                case 0:
                                case 1:
                                    o = i;
                                    break;
                                case 4:
                                    return a.label++,
                                    {
                                        value: i[1],
                                        done: !1
                                    };
                                case 5:
                                    a.label++,
                                    r = i[1],
                                    i = [0];
                                    continue;
                                case 7:
                                    i = a.ops.pop(),
                                    a.trys.pop();
                                    continue;
                                default:
                                    if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                        a = 0;
                                        continue
                                    }
                                    if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                        a.label = i[1];
                                        break
                                    }
                                    if (6 === i[0] && a.label < o[1]) {
                                        a.label = o[1],
                                        o = i;
                                        break
                                    }
                                    if (o && a.label < o[2]) {
                                        a.label = o[2],
                                        a.ops.push(i);
                                        break
                                    }
                                    o[2] && a.ops.pop(),
                                    a.trys.pop();
                                    continue
                                }
                                i = t.call(e, a)
                            } catch (s) {
                                i = [6, s],
                                r = 0
                            } finally {
                                n = o = 0
                            }
                        if (5 & i[0])
                            throw i[1];
                        return {
                            value: i[0] ? i[1] : void 0,
                            done: !0
                        }
                    }([i, s])
                }
            }
        }
          , v = function(e) {
            localStorage.setItem(c.B1, e.token),
            localStorage.setItem(c.qO, e.token_expiry),
            (0,
            u.dr)()
        }
          , m = function() {
            return !window.localStorage.getItem(c.B1)
        }
          , y = function() {
            window.localStorage.removeItem(c.B1),
            window.localStorage.removeItem(c.qO)
        }
          , b = function(e) {
            var t;
            void 0 === e && (e = !0);
            var n = o.Z.getState().play;
            (0,
            a.fr)("userstop::UserLogout"),
            "function" === typeof (null === (t = null === n || void 0 === n ? void 0 : n.peerConnection) || void 0 === t ? void 0 : t.close) && n.peerConnection.close(),
            localStorage.removeItem(c.B1),
            localStorage.removeItem(c.qO),
            localStorage.removeItem("token"),
            localStorage.removeItem("user"),
            (0,
            p.Z)(),
            n.isFullscreen && (0,
            s.Qg)(document),
            o.Z.dispatch({
                type: i.Z.SET_LOGGED_IN,
                payload: {
                    showPreloader: !0,
                    isLoggedIn: !1
                }
            }),
            r.Z.logout({}, {}).finally((function() {
                e && window.location.reload()
            }
            ))
        }
          , S = function(e) {
            e.userData ? localStorage.setItem("user", JSON.stringify(e.userData)) : localStorage.removeItem("user")
        }
          , w = function() {
            var e = localStorage.getItem("user");
            return e ? JSON.parse(e) : null
        }
          , O = "ProxyDetected"
          , E = function() {
            return g(void 0, void 0, Promise, (function() {
                var e, t, n, r, i, a, s, p;
                return h(this, (function(g) {
                    switch (g.label) {
                    case 0:
                        return e = "https://".concat(u.ZP.appInfo.playTokenServiceHost, "/v3/playtoken"),
                        [4, fetch(e).catch((function(e) {
                            return (0,
                            d.L9)(O, {
                                detectionMethod: c.fi
                            }),
                            null
                        }
                        ))];
                    case 1:
                        return 200 !== (null === (t = g.sent()) || void 0 === t ? void 0 : t.status) ? [3, 3] : [4, t.json()];
                    case 2:
                        return (n = g.sent()) ? (r = n.playToken,
                        i = "IN",
                        a = {},
                        r ? (n.countryCode || (0,
                        f.ZP)(new Error("country code not available")),
                        (0,
                        d.L9)("PlayTokenSuccess"),
                        i = n.countryCode || "-",
                        s = n.ipv4,
                        p = n.ipv6,
                        "NA" !== s && (a.i4 = s),
                        "NA" !== p && (a.i6 = p),
                        o.Z.dispatch({
                            type: l.Z.SET_COUNTRY_CODE,
                            payload: {
                                countryCode: i,
                                userIPObject: a
                            }
                        }),
                        [2, r]) : ((0,
                        d.L9)(O, {
                            error: n,
                            detectionMethod: c.fi
                        }),
                        [2, null])) : ((0,
                        d.L9)(O, {
                            error: n,
                            detectionMethod: c.fi
                        }),
                        [2, null]);
                    case 3:
                        return (0,
                        d.L9)(O, {
                            error: t,
                            detectionMethod: c.fi
                        }),
                        [2, null]
                    }
                }
                ))
            }
            ))
        }
    },
    550: function(e, t, n) {
        "use strict";
        n.d(t, {
            $: function() {
                return a
            },
            F: function() {
                return s
            }
        });
        var r = n(1739)
          , o = n(1508)
          , i = n(4003)
          , a = function(e) {
            o.Z.getState().play.uiTextfieldInFocus || e.preventDefault();
            var t = e.clipboardData
              , n = null === t || void 0 === t ? void 0 : t.getData("text");
            if (n = null === n || void 0 === n ? void 0 : n.slice(0, r.M5)) {
                (0,
                i.fr)("".concat(r.vK.clipboard).concat(n));
                var a = new ArrayBuffer(4)
                  , s = new Uint8Array(a);
                s[0] = 101,
                s[1] = 1,
                s[2] = 86,
                s[3] = 4,
                (0,
                i.fr)(a)
            }
        }
          , s = function(e) {
            try {
                navigator.clipboard.writeText(e).catch((function() {}
                ))
            } catch (t) {}
        }
    },
    8041: function(e, t, n) {
        "use strict";
        n.d(t, {
            Xh: function() {
                return s
            },
            Tb: function() {
                return c
            },
            tq: function() {
                return u
            },
            Em: function() {
                return l
            },
            Tt: function() {
                return f
            },
            uU: function() {
                return d
            },
            zc: function() {
                return p
            },
            jI: function() {
                return g
            },
            op: function() {
                return h
            },
            Ij: function() {
                return v
            },
            G6: function() {
                return m
            },
            SR: function() {
                return y
            }
        });
        n(1739);
        var r, o = n(1795), i = n.n(o);
        try {
            r = i().parse(window.navigator.userAgent)
        } catch (b) {
            r = {}
        }
        var a, s = function() {
            var e = function(e) {
                return e.test(window.navigator.userAgent)
            };
            switch (!0) {
            case e(/edg/i):
                return "Microsoft Edge";
            case e(/trident/i):
                return "Microsoft Internet Explorer";
            case e(/firefox|fxios/i):
                return "Mozilla Firefox";
            case e(/opr\//i):
                return "Opera";
            case e(/ucbrowser/i):
                return "UC Browser";
            case e(/samsungbrowser/i):
                return "Samsung Browser";
            case e(/chrome|chromium|crios/i):
                return "Google Chrome";
            case e(/safari/i):
                return "Apple Safari";
            default:
                return "Other"
            }
        }(), c = function() {
            return r
        }, u = function() {
            if ("undefined" === typeof a) {
                a = [/Android/i, /webOS/i, /iPhone/i, /iPad/i, /iPod/i, /BlackBerry/i, /Windows Phone/i, /Opera Mini/i, /IEMobile/i, /WPDesktop/i].some((function(e) {
                    return navigator.userAgent.match(e) || /iPad|iPhone|iPod/.test(navigator.platform) || "MacIntel" === navigator.platform && navigator.maxTouchPoints > 1
                }
                ))
            }
            return a
        }, l = function() {
            var e = navigator.userAgent.toLowerCase();
            return /(ipad|tablet|(android(?!.*mobile))|(windows(?!.*phone)(.*touch))|kindle|playbook|silk|(puffin(?!.*(IP|AP|WP))))/.test(e)
        }, f = function() {
            return /iPad|iPhone|iPod/.test(navigator.platform) || "MacIntel" === navigator.platform && navigator.maxTouchPoints > 1
        }, d = function() {
            return !!(/iPad|iPhone|iPod/.test(navigator.platform) || "MacIntel" === navigator.platform && navigator.maxTouchPoints > 1) && -1 !== navigator.userAgent.indexOf("Safari")
        }, p = function() {
            return !!(navigator.maxTouchPoints && navigator.maxTouchPoints > 2 && /MacIntel/.test(navigator.platform))
        }, g = function() {
            return [/Android/i].some((function(e) {
                return !!navigator.userAgent.match(e) && navigator.userAgent.match(/Safari/i)
            }
            ))
        }, h = function() {
            return -1 !== navigator.userAgent.indexOf("SamsungBrowser")
        }, v = function() {
            var e, t = window.navigator.platform, n = (null === (e = null === r || void 0 === r ? void 0 : r.os) || void 0 === e ? void 0 : e.family) || "others";
            return -1 !== ["Macintosh", "MacIntel", "MacPPC", "Mac68K"].indexOf(t) ? n = "mac" : -1 !== ["Win32", "Win64", "Windows", "WinCE"].indexOf(t) ? n = "win" : -1 !== ["iPhone", "iPad", "iPod"].indexOf(t) ? n = "ios" : -1 === ["Android", "Linux"].indexOf(t) && "Android" !== n || (n = "android"),
            n
        }, m = function() {
            var e = navigator.vendor.match(/[Aa]+pple/);
            return !!(e && e.length > 0)
        }, y = function() {
            return !u() && !l() && !p()
        }
    },
    6817: function(e, t, n) {
        "use strict";
        n.d(t, {
            u1: function() {
                return i
            },
            Qg: function() {
                return a
            }
        });
        var r = n(4003)
          , o = function e() {
            (0,
            r.fr)("tabstatus::active"),
            window.focus(),
            document.removeEventListener("mouseover", e)
        }
          , i = function() {
            (0,
            r.fr)("tabstatus::inactive"),
            document.addEventListener("mouseover", o)
        }
          , a = function(e) {
            e.exitFullscreen ? e.exitFullscreen().catch((function(e) {}
            )) : e.webkitExitFullscreen ? e.webkitExitFullscreen() : e.msExitFullscreen ? e.msExitFullscreen() : e.mozCancelFullScreen && e.mozCancelFullScreen()
        }
    },
    942: function(e, t, n) {
        "use strict";
        n.d(t, {
            EG: function() {
                return h
            },
            Ee: function() {
                return v
            },
            ab: function() {
                return m
            },
            dz: function() {
                return y
            },
            QB: function() {
                return b
            },
            Ar: function() {
                return S
            },
            YL: function() {
                return w
            },
            i1: function() {
                return T
            }
        });
        var r = n(6971)
          , o = n(1508)
          , i = n(8041)
          , a = n(9598)
          , s = n(8294)
          , c = n(7020)
          , u = function(e, t, n, r) {
            return new (n || (n = Promise))((function(o, i) {
                function a(e) {
                    try {
                        c(r.next(e))
                    } catch (t) {
                        i(t)
                    }
                }
                function s(e) {
                    try {
                        c(r.throw(e))
                    } catch (t) {
                        i(t)
                    }
                }
                function c(e) {
                    var t;
                    e.done ? o(e.value) : (t = e.value,
                    t instanceof n ? t : new n((function(e) {
                        e(t)
                    }
                    ))).then(a, s)
                }
                c((r = r.apply(e, t || [])).next())
            }
            ))
        }
          , l = function(e, t) {
            var n, r, o, i, a = {
                label: 0,
                sent: function() {
                    if (1 & o[0])
                        throw o[1];
                    return o[1]
                },
                trys: [],
                ops: []
            };
            return i = {
                next: s(0),
                throw: s(1),
                return: s(2)
            },
            "function" === typeof Symbol && (i[Symbol.iterator] = function() {
                return this
            }
            ),
            i;
            function s(i) {
                return function(s) {
                    return function(i) {
                        if (n)
                            throw new TypeError("Generator is already executing.");
                        for (; a; )
                            try {
                                if (n = 1,
                                r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r),
                                0) : r.next) && !(o = o.call(r, i[1])).done)
                                    return o;
                                switch (r = 0,
                                o && (i = [2 & i[0], o.value]),
                                i[0]) {
                                case 0:
                                case 1:
                                    o = i;
                                    break;
                                case 4:
                                    return a.label++,
                                    {
                                        value: i[1],
                                        done: !1
                                    };
                                case 5:
                                    a.label++,
                                    r = i[1],
                                    i = [0];
                                    continue;
                                case 7:
                                    i = a.ops.pop(),
                                    a.trys.pop();
                                    continue;
                                default:
                                    if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                        a = 0;
                                        continue
                                    }
                                    if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                        a.label = i[1];
                                        break
                                    }
                                    if (6 === i[0] && a.label < o[1]) {
                                        a.label = o[1],
                                        o = i;
                                        break
                                    }
                                    if (o && a.label < o[2]) {
                                        a.label = o[2],
                                        a.ops.push(i);
                                        break
                                    }
                                    o[2] && a.ops.pop(),
                                    a.trys.pop();
                                    continue
                                }
                                i = t.call(e, a)
                            } catch (s) {
                                i = [6, s],
                                r = 0
                            } finally {
                                n = o = 0
                            }
                        if (5 & i[0])
                            throw i[1];
                        return {
                            value: i[0] ? i[1] : void 0,
                            done: !0
                        }
                    }([i, s])
                }
            }
        }
          , f = !1
          , d = null
          , p = !1
          , g = function() {
            return "".concat("pwaCount", "-").concat(s.ZP.appInfo.appId)
        }
          , h = function() {
            var e = localStorage.getItem(g());
            localStorage.setItem(g(), "".concat(Number(e || 0) + 1))
        }
          , v = function() {
            var e = window.matchMedia("(display-mode: standalone)").matches;
            return !!(document.referrer.startsWith("android-app://") || navigator.standalone || e)
        }
          , m = function() {
            var e = function() {
                var e = localStorage.getItem(g());
                return e ? +e : 0
            }();
            return d && e < 3 && !v() && !f
        }
          , y = function(e) {
            var t = (0,
            i.tq)() ? "mobile" : "desktop";
            ((0,
            i.Em)() || (0,
            a.l7)()) && (t = "tabler"),
            p = !1,
            (0,
            a.L9)("PwaBeforeInstallPrompt", {
                deviceFormFactor: t,
                platforms: e.platforms
            }),
            (0,
            i.tq)() || (d = e),
            e.preventDefault()
        }
          , b = function() {
            return u(void 0, void 0, void 0, (function() {
                return l(this, (function(e) {
                    switch (e.label) {
                    case 0:
                        return null === d ? [3, 2] : ((0,
                        a.L9)("PwaPromptDisplayed"),
                        p = !0,
                        d.prompt(),
                        [4, d.userChoice]);
                    case 1:
                        "accepted" === e.sent().outcome ? ((0,
                        a.L9)("PwaPromptAccepted"),
                        d = null) : (0,
                        a.L9)("PwaPromptDismissed"),
                        e.label = 2;
                    case 2:
                        return [2]
                    }
                }
                ))
            }
            ))
        }
          , S = function() {
            return f
        }
          , w = function() {
            f = !0,
            (0,
            a.L9)("PwaInstalled", {
                pwaNudgeDisplayed: p
            }),
            o.Z.dispatch({
                type: r.Z.PWA_PROMPT_STATUS,
                payload: {
                    showPwaPrompt: !1
                }
            })
        }
          , O = "pwaExp"
          , E = "isNewUserForExperiment-".concat(O)
          , T = function() {
            return sessionStorage.removeItem(E)
        };
        t.ZP = function(e, t) {
            var n = -1 !== window.location.href.indexOf("?")
              , r = "".concat(n ? window.location.href.split("?")[0] : window.location.href, "?utm_source=PWA_app_icon&utm_medium=PWA_browser&utm_campaign=PWA")
              , o = (0,
            c.i)().pwaIconHost
              , i = {
                name: e,
                short_name: e,
                start_url: r,
                scope: window.location.href.split("?")[0],
                display: t ? "standalone" : "fullscreen",
                theme_color: "#FF43A6",
                description: e,
                icons: [{
                    src: "".concat(o, "/Icon_48.png"),
                    sizes: "48x48",
                    type: "image/png"
                }, {
                    src: "".concat(o, "/Icon_96.png"),
                    sizes: "96x96",
                    type: "image/png"
                }, {
                    src: "".concat(o, "/Icon_144.png"),
                    sizes: "144x144",
                    type: "image/png"
                }, {
                    src: "".concat(o, "/Icon_192.png"),
                    sizes: "192x192",
                    type: "image/png"
                }, {
                    src: "".concat(o, "/Icon_512.png"),
                    sizes: "512x512",
                    type: "image/png"
                }]
            };
            return encodeURIComponent(JSON.stringify(i))
        }
    },
    5024: function(e, t, n) {
        "use strict";
        n.d(t, {
            j: function() {
                return o
            },
            O: function() {
                return i
            }
        });
        var r = n(8294)
          , o = function(e) {
            var t = e;
            return r.ZP.prefix && !t.src.startsWith(r.ZP.prefix) && (t.src = r.ZP.prefix + t.src),
            t.src
        }
          , i = function(e) {
            var t = e.src
              , n = e.width
              , o = e.quality;
            return "".concat(r.ZP.prefix, "/_next/image?url=").concat(t, "&w=").concat(n, "&q=").concat(o || 70)
        }
    },
    5418: function(e, t, n) {
        "use strict";
        n.d(t, {
            y: function() {
                return r
            },
            X: function() {
                return o
            }
        });
        var r = function() {
            return !1
        }
          , o = function() {
            return !1
        }
    },
    9598: function(e, t, n) {
        "use strict";
        n.d(t, {
            hR: function() {
                return u
            },
            l7: function() {
                return l
            },
            L9: function() {
                return f
            },
            _b: function() {
                return p
            }
        });
        var r = n(9305)
          , o = n(8294)
          , i = n(5418)
          , a = n(8309)
          , s = n(1739)
          , c = !1
          , u = function() {
            return c
        }
          , l = function() {
            return navigator.maxTouchPoints && navigator.maxTouchPoints > 2 && /MacIntel/.test(navigator.platform) ? "ipad" : ""
        }
          , f = function(e, t) {
            var n, u;
            if (void 0 === t && (t = {}),
            !(0,
            i.y)()) {
                e === s.Mz && (c = !0);
                var f = (0,
                o.We)()
                  , d = f.utmSource
                  , p = f.utmMedium
                  , g = f.utmCampaign;
                !function(e) {
                    r.Z.trackEvent({}, e)
                }({
                    appId: String((null === (n = null === o.ZP || void 0 === o.ZP ? void 0 : o.ZP.appInfo) || void 0 === n ? void 0 : n.appId) || ""),
                    uaSessionId: sessionStorage.getItem(s.K3) || "",
                    uaId: localStorage.getItem(s.nP) || "",
                    packageName: (null === (u = null === o.ZP || void 0 === o.ZP ? void 0 : o.ZP.appInfo) || void 0 === u ? void 0 : u.packageName) || "",
                    originTimestamp: new Date,
                    userType: (0,
                    a._B)() ? "Guest" : "Authorised",
                    deviceType: l(),
                    eventName: "Fe".concat(e),
                    extraData: t,
                    utmSource: d,
                    utmMedium: p,
                    utmCampaign: g,
                    accessCode: sessionStorage.getItem("access_code") || ""
                })
            }
        }
          , d = {}
          , p = function(e) {
            if (!d[e.type]) {
                var t = s.At[e.type];
                t === s.At.pointerdown && "touch" === e.pointerType && (t = ""),
                t && (f(s.S5, {
                    element: "Window",
                    action: t
                }),
                d[e.type] = !0)
            }
        }
    },
    8294: function(e, t, n) {
        "use strict";
        n.d(t, {
            HS: function() {
                return l
            },
            ZF: function() {
                return d
            },
            I6: function() {
                return g
            },
            sA: function() {
                return h
            },
            Z0: function() {
                return v
            },
            We: function() {
                return y
            },
            Us: function() {
                return b
            },
            Sr: function() {
                return S
            },
            Hy: function() {
                return w
            },
            u_: function() {
                return O
            },
            dr: function() {
                return E
            },
            yj: function() {
                return T
            },
            Fp: function() {
                return _
            },
            Hh: function() {
                return k
            },
            Q3: function() {
                return x
            },
            Lp: function() {
                return C
            },
            Sf: function() {
                return L
            },
            rN: function() {
                return N
            },
            Pr: function() {
                return D
            },
            yS: function() {
                return j
            },
            CO: function() {
                return M
            }
        });
        var r = n(9305)
          , o = n(1739)
          , i = n(5628)
          , a = n(8041)
          , s = function(e, t, n, r) {
            return new (n || (n = Promise))((function(o, i) {
                function a(e) {
                    try {
                        c(r.next(e))
                    } catch (t) {
                        i(t)
                    }
                }
                function s(e) {
                    try {
                        c(r.throw(e))
                    } catch (t) {
                        i(t)
                    }
                }
                function c(e) {
                    var t;
                    e.done ? o(e.value) : (t = e.value,
                    t instanceof n ? t : new n((function(e) {
                        e(t)
                    }
                    ))).then(a, s)
                }
                c((r = r.apply(e, t || [])).next())
            }
            ))
        }
          , c = function(e, t) {
            var n, r, o, i, a = {
                label: 0,
                sent: function() {
                    if (1 & o[0])
                        throw o[1];
                    return o[1]
                },
                trys: [],
                ops: []
            };
            return i = {
                next: s(0),
                throw: s(1),
                return: s(2)
            },
            "function" === typeof Symbol && (i[Symbol.iterator] = function() {
                return this
            }
            ),
            i;
            function s(i) {
                return function(s) {
                    return function(i) {
                        if (n)
                            throw new TypeError("Generator is already executing.");
                        for (; a; )
                            try {
                                if (n = 1,
                                r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r),
                                0) : r.next) && !(o = o.call(r, i[1])).done)
                                    return o;
                                switch (r = 0,
                                o && (i = [2 & i[0], o.value]),
                                i[0]) {
                                case 0:
                                case 1:
                                    o = i;
                                    break;
                                case 4:
                                    return a.label++,
                                    {
                                        value: i[1],
                                        done: !1
                                    };
                                case 5:
                                    a.label++,
                                    r = i[1],
                                    i = [0];
                                    continue;
                                case 7:
                                    i = a.ops.pop(),
                                    a.trys.pop();
                                    continue;
                                default:
                                    if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                        a = 0;
                                        continue
                                    }
                                    if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                        a.label = i[1];
                                        break
                                    }
                                    if (6 === i[0] && a.label < o[1]) {
                                        a.label = o[1],
                                        o = i;
                                        break
                                    }
                                    if (o && a.label < o[2]) {
                                        a.label = o[2],
                                        a.ops.push(i);
                                        break
                                    }
                                    o[2] && a.ops.pop(),
                                    a.trys.pop();
                                    continue
                                }
                                i = t.call(e, a)
                            } catch (s) {
                                i = [6, s],
                                r = 0
                            } finally {
                                n = o = 0
                            }
                        if (5 & i[0])
                            throw i[1];
                        return {
                            value: i[0] ? i[1] : void 0,
                            done: !0
                        }
                    }([i, s])
                }
            }
        }
          , u = "true"
          , l = {
            appInfo: {
                status: i.YR.Success,
                appId: "",
                appName: "",
                appSlug: "",
                appDeveloperInfo: {
                    name: "",
                    developerSlug: ""
                },
                appGenre: "",
                appPageUrl: "",
                appType: "Android",
                initialOrientation: i.cj.unspecified,
                embeddedGameUrl: "",
                packageName: "",
                media: {
                    desktop: {
                        banner: "",
                        launchVideo: ""
                    },
                    mobile: {
                        banner: "",
                        launchVideo: ""
                    },
                    icon: "",
                    tile: "",
                    logo: ""
                },
                widgets: {
                    desktopFullScreen: {
                        left: 0,
                        top: 0
                    },
                    mobileMenu: {
                        left: 0,
                        top: 0
                    }
                },
                playFeatures: {},
                metaTags: "",
                alternateUrlForProxies: "",
                playTokenServiceHost: "",
                wasmChromeTrialToken: "",
                areAdsEnabled: !1,
                isBrowsePortalEnabled: !1,
                isOverlayPortalEnabled: !1,
                authServiceHost: "",
                authClientId: "",
                authUseThirdPartyFlow: !1,
                pwaNudgeDelayMs: 6e5,
                playDomain: "",
                imapCfgHost: ""
            },
            features: {},
            authRedirectionUrl: "",
            authUseThirdPartyFlow: !1,
            prefix: "",
            compressedPackage: "",
            playPageUpdate: !1,
            pwaSupported: !0
        }
          , f = "kommunicate-chat"
          , d = function() {
            return l.appInfo.widgets.desktopFullScreen
        }
          , p = function(e, t) {
            return sessionStorage.setItem(e, t),
            !0
        }
          , g = function() {
            return e = "appCrashRetryAttempts",
            sessionStorage.getItem(e) || "0";
            var e
        }
          , h = function(e) {
            p("appCrashRetryAttempts", e)
        }
          , v = function() {
            p("appCrashRetryAttempts", "0")
        }
          , m = function(e) {
            if (!navigator.cookieEnabled)
                return "";
            if ("undefined" !== typeof document)
                for (var t = "".concat(e, "="), n = document.cookie.split(";"), r = 0; r < n.length; r += 1) {
                    for (var o = n[r]; " " === o.charAt(0); )
                        o = o.substring(1);
                    if (0 === o.indexOf(t))
                        return o.substring(t.length, o.length)
                }
            return ""
        }
          , y = function() {
            var e, t, n;
            return {
                utmSource: (null === (e = window.sessionStorage) || void 0 === e ? void 0 : e.getItem("utm_source")) || m("utm_source") || "NA",
                utmMedium: (null === (t = window.sessionStorage) || void 0 === t ? void 0 : t.getItem("utm_medium")) || m("utm_medium") || "NA",
                utmCampaign: (null === (n = window.sessionStorage) || void 0 === n ? void 0 : n.getItem("utm_campaign")) || m("utm_campaign") || "NA"
            }
        }
          , b = function() {
            return sessionStorage.getItem(o.g0) !== u
        }
          , S = function() {
            sessionStorage.setItem(o.g0, u)
        }
          , w = function() {
            return localStorage.getItem(o.CB) === u
        }
          , O = function() {
            return localStorage.setItem(o.CB, u)
        }
          , E = function() {
            localStorage.removeItem(o.CB)
        }
          , T = function() {
            return localStorage.getItem("portalExperiment") && localStorage.removeItem("portalExperiment"),
            sessionStorage.getItem(o.aC) === u
        }
          , _ = function() {
            return sessionStorage.setItem(o.aC, u)
        }
          , k = function() {
            return sessionStorage.removeItem(o.aC)
        }
          , P = "fe_popGames"
          , x = function(e) {
            return s(void 0, void 0, void 0, (function() {
                var t, n;
                return c(this, (function(o) {
                    switch (o.label) {
                    case 0:
                        if (sessionStorage.getItem(P))
                            return [3, 4];
                        o.label = 1;
                    case 1:
                        return o.trys.push([1, 3, , 4]),
                        [4, r.Z.getPopularApps({
                            currentApp: e
                        }, {})];
                    case 2:
                        return (t = o.sent()).success && (n = function(e) {
                            for (var t = e.length - 1; t > 0; t -= 1) {
                                var n = Math.floor(Math.random() * (t + 1))
                                  , r = e[t];
                                e[t] = e[n],
                                e[n] = r
                            }
                            return e
                        }(t.data),
                        sessionStorage.setItem(P, JSON.stringify(n))),
                        [3, 4];
                    case 3:
                        return o.sent(),
                        [2, []];
                    case 4:
                        return [2, JSON.parse(sessionStorage.getItem(P) || "[]")]
                    }
                }
                ))
            }
            ))
        }
          , A = "A/B-experiment::"
          , I = function(e) {
            var t = e.experimentName
              , n = e.experimentCoverage
              , r = e.experimentTypes;
            var o = A + t;
            return localStorage.getItem(o) || (sessionStorage.setItem("isNewUserForExperiment", u),
            localStorage.setItem(o, Math.random() < n ? u : "false")),
            {
                flag: localStorage.getItem(o) === u,
                evar: localStorage.getItem(o) === u ? r.a : r.b,
                isNewUserForExperiment: sessionStorage.getItem("isNewUserForExperiment") === u
            }
        }
          , C = function(e) {
            return localStorage.getItem(A + e)
        }
          , L = function(e) {
            localStorage.getItem(A + e) && localStorage.removeItem(A + e)
        }
          , R = "fe_gameState"
          , N = function(e) {
            e ? sessionStorage.setItem(R, e) : sessionStorage.removeItem(R)
        }
          , D = function(e) {
            return sessionStorage.getItem(R) === o.yj && e !== o.yj
        }
          , j = (I({
            experimentName: "midroll-ads",
            experimentCoverage: .5,
            experimentTypes: {
                a: "9a",
                b: "9b"
            }
        }),
        function() {
            return I({
                experimentName: "play-page",
                experimentCoverage: .5,
                experimentTypes: {
                    a: "12b",
                    b: "12a"
                }
            })
        }
        )
          , M = function() {
            return !((0,
            a.tq)() && (0,
            a.Em)() && (0,
            a.zc)()) && (localStorage.getItem(f) || localStorage.setItem(f, Math.random() < .01 ? u : "false"),
            localStorage.getItem(f) === u)
        };
        t.ZP = l
    },
    9555: function(e, t, n) {
        "use strict";
        n.d(t, {
            D9: function() {
                return h
            },
            m7: function() {
                return b
            },
            sZ: function() {
                return w
            },
            Ul: function() {
                return O
            },
            VE: function() {
                return E
            },
            EN: function() {
                return T
            }
        });
        var r = n(1739)
          , o = n(2199)
          , i = n(6971)
          , a = n(1508)
          , s = n(4003)
          , c = n(8041)
          , u = n(5628)
          , l = n(8294)
          , f = n(8962)
          , d = [u.cj.portrait, u.cj.landscape, u.cj.portrait, u.cj.landscape]
          , p = function(e, t, n, o, i) {
            var s, f;
            if ((0,
            c.tq)() || (0,
            c.Em)() || (0,
            c.zc)())
                return 0;
            if (l.ZP.playPageUpdate) {
                var d = 0
                  , p = a.Z.getState().play;
                return e || (!p.consoleFooterRef || !p.consoleFooterRef.current || i && i !== r.us || t !== u.cj.landscape || (d += p.consoleFooterRef.current.clientHeight),
                p.consoleHeaderRef && p.consoleHeaderRef.current && (d += p.consoleHeaderRef.current.clientHeight)),
                p.consoleHeaderRef && p.consoleHeaderRef.current && i === r.V && t === u.cj.landscape && (d += 180),
                d
            }
            var g = !!((null === (f = null === (s = l.ZP.appInfo.playFeatures) || void 0 === s ? void 0 : s.ads) || void 0 === f ? void 0 : f.desktop) || {}).enableDisplayAds;
            return t !== u.cj.landscape || !n && !o && i && g ? (document.body.classList.remove("--adBlocked"),
            0) : (document.body.classList.add("--adBlocked"),
            7.1 * window.innerWidth / 100)
        }
          , g = {
            w: 16,
            h: 9
        }
          , h = function(e, t) {
            g.w = e,
            g.h = t
        }
          , v = function(e) {
            return Math.round(e / g.w * g.h)
        }
          , m = function(e) {
            return Math.round(e / g.w) * g.w
        }
          , y = function(e) {
            return Math.round(e / g.h * g.w)
        }
          , b = function() {
            var e = a.Z.getState()
              , t = e.play.orientation
              , n = e.auth
              , r = n.isLoggedIn
              , o = n.guestFlow;
            if (r || o) {
                var i = window.innerHeight
                  , s = window.innerWidth
                  , l = document.querySelector("body");
                (0,
                c.op)() && (0,
                c.tq)() && (i = window.outerHeight,
                s = window.outerWidth),
                ((0,
                c.uU)() || (0,
                c.jI)()) && l && (t === u.cj.portrait ? (l.style.height = "".concat(i, "px"),
                l.style.width = "".concat(s, "px")) : (l.style.height = "".concat(s, "px"),
                l.style.width = "".concat(i, "px")),
                i > s && t === u.cj.landscape || t === u.cj.portrait && s > i ? (l.style.width = "".concat(i, "px"),
                l.style.height = "".concat(s, "px")) : (l.style.width = "".concat(s, "px"),
                l.style.height = "".concat(i, "px")))
            }
        }
          , S = function(e, t, n, o, i) {
            var s, f, d, g, h, b, S, w;
            void 0 === i && (i = u.cj.landscape);
            var O = a.Z.getState().play
              , E = O.videoContainerRef
              , T = O.videoRef;
            ((0,
            c.tq)() && i === u.cj.landscape ? (b = (null === (s = null === E || void 0 === E ? void 0 : E.current) || void 0 === s ? void 0 : s.offsetWidth) || 0,
            h = (null === (f = null === E || void 0 === E ? void 0 : E.current) || void 0 === f ? void 0 : f.offsetHeight) || 0) : (b = document.body.offsetWidth - function(e, t) {
                var n = a.Z.getState().play;
                return l.ZP.playPageUpdate && !e && n.consoleFooterRef && n.consoleFooterRef.current && t === r.V ? n.consoleFooterRef.current.clientWidth : 0
            }(t, e),
            h = document.body.offsetHeight - p(t, i, n, o, e)),
            e && (l.ZP.playPageUpdate || e !== r.V ? e === r.us && (b -= 350) : h -= 210),
            i === u.cj.landscape) ? (v(b) > h && (b = y(h)),
            S = b = m(b),
            w = h = v(b)) : (v(h) > b && (h = y(b)),
            h = m(h),
            S = b = v(h),
            w = h);
            if ((0,
            c.tq)() && t && !e && (b = (null === (d = null === E || void 0 === E ? void 0 : E.current) || void 0 === d ? void 0 : d.offsetWidth) || 0,
            h = (null === (g = null === E || void 0 === E ? void 0 : E.current) || void 0 === g ? void 0 : g.offsetHeight) || 0),
            (0,
            c.tq)()) {
                var _ = parseInt(getComputedStyle(document.documentElement).getPropertyValue("--sat"), 10);
                Number.isNaN(_) && (_ = 0);
                var k = parseInt(getComputedStyle(document.documentElement).getPropertyValue("--sab"), 10);
                Number.isNaN(k) && (k = 0);
                var P = parseInt(getComputedStyle(document.documentElement).getPropertyValue("--sal"), 10);
                Number.isNaN(P) && (P = 0);
                var x = parseInt(getComputedStyle(document.documentElement).getPropertyValue("--sar"), 10);
                Number.isNaN(x) && (x = 0),
                (null === E || void 0 === E ? void 0 : E.current) && (E.current.style.paddingLeft = "",
                E.current.style.paddingRight = "",
                E.current.style.paddingTop = "",
                E.current.style.paddingBottom = ""),
                i !== u.cj.portrait && 0 === window.orientation ? (null === E || void 0 === E ? void 0 : E.current) && (E.current.style.paddingLeft = "".concat(_, "px"),
                b -= _) : i !== u.cj.portrait && 90 === window.orientation ? (null === E || void 0 === E ? void 0 : E.current) && (E.current.style.paddingLeft = "".concat(P, "px"),
                b -= P) : i !== u.cj.portrait && -90 === window.orientation ? (null === E || void 0 === E ? void 0 : E.current) && (E.current.style.paddingRight = "".concat(x, "px"),
                b -= x) : i === u.cj.portrait && 0 === window.orientation ? (null === E || void 0 === E ? void 0 : E.current) && (E.current.style.paddingTop = "".concat(_, "px"),
                E.current.style.paddingBottom = "".concat(k, "px"),
                h = h - _ - k) : i === u.cj.portrait && 90 === window.orientation ? (null === E || void 0 === E ? void 0 : E.current) && (E.current.style.paddingTop = "".concat(P, "px"),
                h -= P) : i === u.cj.portrait && -90 === window.orientation && (null === E || void 0 === E ? void 0 : E.current) && (E.current.style.paddingTop = "".concat(x, "px"),
                h -= x)
            }
            if (i === u.cj.portrait && !t && (null === T || void 0 === T ? void 0 : T.current) ? T.current.style.objectFit = "cover" : (null === T || void 0 === T ? void 0 : T.current) && (T.current.style.objectFit = "fill"),
            (0,
            c.tq)() && ((0,
            c.uU)() || (0,
            c.Tt)()) && t && !(0,
            c.zc)()) {
                var A = b / (S - 2)
                  , I = h / (w - 2);
                return (null === T || void 0 === T ? void 0 : T.current) && (T.current.style.top = "0",
                T.current.style.left = "0",
                T.current.style.position = "absolute",
                T.current.style.transformOrigin = "0% 0%",
                T.current.style.objectFit = "unset",
                i === u.cj.portrait ? (T.current.style.transform = "scaleY(".concat(I, ") scaleX(").concat(A, ")"),
                T.current.style.height = "".concat(w, "px"),
                T.current.style.width = "".concat(S, "px")) : (T.current.style.objectFit = "contain",
                T.current.style.top = "50%",
                T.current.style.left = "50%",
                T.current.style.transform = "scaleY(".concat(I, ") scaleX(").concat(A, ") rotate(-90deg) translate(-50%, -50%)"),
                T.current.style.height = "".concat(S, "px"),
                T.current.style.width = "".concat(w, "px"))),
                {
                    width: b,
                    height: h,
                    arWidth: S,
                    arHeight: w,
                    styleVideo: !1
                }
            }
            return (0,
            c.tq)() && ((0,
            c.uU)() || (0,
            c.Tt)()) && !t || (0,
            c.zc)() ? (b = S,
            h = w,
            (null === T || void 0 === T ? void 0 : T.current) && (T.current.style.top = "50%",
            T.current.style.left = "50%",
            T.current.style.position = "absolute",
            T.current.style.objectFit = "cover",
            i === u.cj.portrait ? (T.current.style.transformOrigin = "",
            T.current.style.transform = "") : (T.current.style.transformOrigin = "0 0",
            T.current.style.transform = ""),
            T.current.style.height = "".concat(h, "px"),
            T.current.style.width = "".concat(b, "px")),
            {
                width: b,
                height: h,
                arWidth: S,
                arHeight: w,
                styleVideo: !1
            }) : {
                height: h,
                width: b
            }
        }
          , w = function() {
            var e = new Event("resize");
            window.dispatchEvent(e)
        }
          , O = function() {
            var e = a.Z.getState()
              , t = e.play
              , n = t.videoRef
              , i = t.isAndroidConnected
              , d = t.orientation
              , g = t.videoContainerRef
              , h = t.isFullscreen
              , v = t.isHtmlGame;
            if ((0,
            f.Z)(),
            !v) {
                var m = e.ads
                  , y = m.skyScrapperRef1
                  , b = m.skyScrapperRef2
                  , w = m.leaderBoardRef1
                  , O = m.leaderBoardRef2
                  , E = m.inGameAd
                  , T = m.inGameAds
                  , _ = m.displayAdsError
                  , k = m.adBlocker
                  , P = S(E, h, _, k, d)
                  , x = P.height
                  , A = P.width
                  , I = P.styleVideo
                  , C = void 0 === I || I
                  , L = P.arHeight
                  , R = P.arWidth;
                if (E && T)
                    if (E === r.V) {
                        if (w && (null === w || void 0 === w ? void 0 : w.current) && O && (null === O || void 0 === O ? void 0 : O.current) && g && g.current)
                            if (l.ZP.playPageUpdate)
                                w.current.style.top = "2px",
                                O.current.style.bottom = "2px";
                            else
                                (N = (g.current.offsetHeight - x + p(h, d, _, k, E)) / 2 - 90) > 0 && (w.current.style.top = "".concat(N / 2, "px"),
                                O.current.style.bottom = "".concat(N / 2, "px"))
                    } else if (E === r.us && y && (null === y || void 0 === y ? void 0 : y.current) && b && (null === b || void 0 === b ? void 0 : b.current) && g && g.current) {
                        var N = (g.current.offsetWidth - A) / 2 - 160;
                        d === u.cj.portrait && l.ZP.playPageUpdate ? (y.current.style.left = "0px",
                        b.current.style.right = "0px") : N > 0 && (y.current.style.left = "".concat(N / 2, "px"),
                        b.current.style.right = "".concat(N / 2, "px"))
                    }
                n && n.current && C && (n.current.style.width = "".concat(x, "px"),
                n.current.style.height = "".concat(A, "px")),
                d === u.cj.landscape && (null === n || void 0 === n ? void 0 : n.current) ? (n.current.style.height = "".concat(R, "px"),
                n.current.style.width = "".concat(L, "px")) : (null === n || void 0 === n ? void 0 : n.current) && d === u.cj.portrait && (n.current.style.height = "".concat((0,
                c.Tt)() ? L : x, "px"),
                n.current.style.width = "".concat((0,
                c.Tt)() ? R : A, "px")),
                i && (!function(e, t) {
                    if (e && t) {
                        var n = "screen::".concat(e, "::").concat(t, "::60");
                        (0,
                        s.fr)(n)
                    }
                }(A, x),
                o.ZP.initialized && (o.ZP.setDimensions(A, x),
                o.ZP.updateDimensions()));
                var D = new Event("resizeDone");
                window.dispatchEvent(D)
            }
        }
          , E = function(e) {
            var t = d[parseInt(e, 10)];
            a.Z.dispatch({
                type: i.Z.UPDATE_ORIENTATION,
                payload: {
                    orientation: t,
                    orientationValue: parseInt(e, 10)
                }
            }),
            w(),
            O()
        }
          , T = function() {
            var e = a.Z.getState()
              , t = e.play
              , n = t.videoRef
              , o = t.orientation
              , i = t.orientationValue
              , s = e.auth
              , l = s.isLoggedIn
              , f = s.guestFlow;
            if (l || f) {
                var d;
                if (o === u.cj.portrait)
                    (d = document.body) && (d.classList.contains(r.pp) ? (d.classList.remove(r.pp),
                    d.classList.add(r.Ov),
                    setTimeout((function() {
                        return w()
                    }
                    ), 100)) : (0,
                    c.tq)() && d.classList.add(r.Ov)),
                    (null === n || void 0 === n ? void 0 : n.current) && (2 === i && (null === n || void 0 === n || n.current.classList.add("inverted")),
                    null === n || void 0 === n || n.current.classList.remove("landscape-1"),
                    null === n || void 0 === n || n.current.classList.remove("landscape"),
                    null === n || void 0 === n || n.current.classList.remove("landscape-3"));
                else
                    (d = document.body) && d.classList.remove(r.Ov),
                    (null === n || void 0 === n ? void 0 : n.current) && (null === n || void 0 === n || n.current.classList.remove("inverted"),
                    null === n || void 0 === n || n.current.classList.add("landscape-".concat(i))),
                    (0,
                    c.tq)() && d && (d.classList.add(r.pp),
                    d.classList.contains(r.pp) || (d.classList.add(r.pp),
                    setTimeout((function() {
                        return w()
                    }
                    ), 100)));
                setTimeout((function() {
                    return w()
                }
                ), 100)
            }
        }
    },
    812: function(e, t, n) {
        "use strict";
        n.d(t, {
            qU: function() {
                return i
            },
            rx: function() {
                return c
            },
            gp: function() {
                return u
            }
        });
        var r = n(5418)
          , o = window.document && !("ontouchstart"in document.documentElement) && function() {
            try {
                if ("function" !== typeof SharedArrayBuffer || "object" !== typeof Atomics)
                    return !1;
                if ("object" === typeof WebAssembly && "function" === typeof WebAssembly.instantiate) {
                    var e = new WebAssembly.Module(Uint8Array.of(0, 97, 115, 109, 1, 0, 0, 0));
                    if (e instanceof WebAssembly.Module)
                        return new WebAssembly.Instance(e)instanceof WebAssembly.Instance
                }
            } catch (t) {
                return !1
            }
            return !1
        }()
          , i = function() {
            return !(0,
            r.y)() && o
        }
          , a = function() {}
          , s = function() {}
          , c = new Promise((function(e, t) {
            a = e,
            s = t
        }
        ))
          , u = {
            loaded: a,
            failure: s
        }
    },
    6363: function(e, t, n) {
        (window.__NEXT_P = window.__NEXT_P || []).push(["/_app", function() {
            return n(5109)
        }
        ])
    },
    6386: function(e, t) {
        "use strict";
        t.Z = {
            src: "/play/_next/static/media/close-icon.bbd54abd.svg",
            height: 13,
            width: 12
        }
    },
    993: function() {},
    202: function() {},
    4879: function() {},
    9008: function(e, t, n) {
        e.exports = n(5480)
    },
    8164: function(e, t, n) {
        var r = n(4360);
        e.exports = function(e) {
            if (Array.isArray(e))
                return r(e)
        }
        ,
        e.exports.default = e.exports,
        e.exports.__esModule = !0
    },
    5725: function(e) {
        e.exports = function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }
        ,
        e.exports.default = e.exports,
        e.exports.__esModule = !0
    },
    3115: function(e, t, n) {
        var r = n(8164)
          , o = n(7381)
          , i = n(3585)
          , a = n(5725);
        e.exports = function(e) {
            return r(e) || o(e) || i(e) || a()
        }
        ,
        e.exports.default = e.exports,
        e.exports.__esModule = !0
    },
    1795: function(e, t, n) {
        var r;
        e = n.nmd(e),
        function() {
            "use strict";
            var o = {
                function: !0,
                object: !0
            }
              , i = o[typeof window] && window || this
              , a = o[typeof t] && t
              , s = o.object && e && !e.nodeType && e
              , c = a && s && "object" == typeof n.g && n.g;
            !c || c.global !== c && c.window !== c && c.self !== c || (i = c);
            var u = Math.pow(2, 53) - 1
              , l = /\bOpera/
              , f = Object.prototype
              , d = f.hasOwnProperty
              , p = f.toString;
            function g(e) {
                return (e = String(e)).charAt(0).toUpperCase() + e.slice(1)
            }
            function h(e) {
                return e = S(e),
                /^(?:webOS|i(?:OS|P))/.test(e) ? e : g(e)
            }
            function v(e, t) {
                for (var n in e)
                    d.call(e, n) && t(e[n], n, e)
            }
            function m(e) {
                return null == e ? g(e) : p.call(e).slice(8, -1)
            }
            function y(e) {
                return String(e).replace(/([ -])(?!$)/g, "$1?")
            }
            function b(e, t) {
                var n = null;
                return function(e, t) {
                    var n = -1
                      , r = e ? e.length : 0;
                    if ("number" == typeof r && r > -1 && r <= u)
                        for (; ++n < r; )
                            t(e[n], n, e);
                    else
                        v(e, t)
                }(e, (function(r, o) {
                    n = t(n, r, o, e)
                }
                )),
                n
            }
            function S(e) {
                return String(e).replace(/^ +| +$/g, "")
            }
            var w = function e(t) {
                var n = i
                  , r = t && "object" == typeof t && "String" != m(t);
                r && (n = t,
                t = null);
                var o = n.navigator || {}
                  , a = o.userAgent || "";
                t || (t = a);
                var s, c, u = r ? !!o.likeChrome : /\bChrome\b/.test(t) && !/internal|\n/i.test(p.toString()), f = "Object", d = r ? f : "ScriptBridgingProxyObject", g = r ? f : "Environment", w = r && n.java ? "JavaPackage" : m(n.java), O = r ? f : "RuntimeObject", E = /\bJava/.test(w) && n.java, T = E && m(n.environment) == g, _ = E ? "a" : "\u03b1", k = E ? "b" : "\u03b2", P = n.document || {}, x = n.operamini || n.opera, A = l.test(A = r && x ? x["[[Class]]"] : m(x)) ? A : x = null, I = t, C = [], L = null, R = t == a, N = R && x && "function" == typeof x.version && x.version(), D = b([{
                    label: "EdgeHTML",
                    pattern: "Edge"
                }, "Trident", {
                    label: "WebKit",
                    pattern: "AppleWebKit"
                }, "iCab", "Presto", "NetFront", "Tasman", "KHTML", "Gecko"], (function(e, n) {
                    return e || RegExp("\\b" + (n.pattern || y(n)) + "\\b", "i").exec(t) && (n.label || n)
                }
                )), j = function(e) {
                    return b(e, (function(e, n) {
                        return e || RegExp("\\b" + (n.pattern || y(n)) + "\\b", "i").exec(t) && (n.label || n)
                    }
                    ))
                }(["Adobe AIR", "Arora", "Avant Browser", "Breach", "Camino", "Electron", "Epiphany", "Fennec", "Flock", "Galeon", "GreenBrowser", "iCab", "Iceweasel", "K-Meleon", "Konqueror", "Lunascape", "Maxthon", {
                    label: "Microsoft Edge",
                    pattern: "(?:Edge|Edg|EdgA|EdgiOS)"
                }, "Midori", "Nook Browser", "PaleMoon", "PhantomJS", "Raven", "Rekonq", "RockMelt", {
                    label: "Samsung Internet",
                    pattern: "SamsungBrowser"
                }, "SeaMonkey", {
                    label: "Silk",
                    pattern: "(?:Cloud9|Silk-Accelerated)"
                }, "Sleipnir", "SlimBrowser", {
                    label: "SRWare Iron",
                    pattern: "Iron"
                }, "Sunrise", "Swiftfox", "Vivaldi", "Waterfox", "WebPositive", {
                    label: "Yandex Browser",
                    pattern: "YaBrowser"
                }, {
                    label: "UC Browser",
                    pattern: "UCBrowser"
                }, "Opera Mini", {
                    label: "Opera Mini",
                    pattern: "OPiOS"
                }, "Opera", {
                    label: "Opera",
                    pattern: "OPR"
                }, "Chromium", "Chrome", {
                    label: "Chrome",
                    pattern: "(?:HeadlessChrome)"
                }, {
                    label: "Chrome Mobile",
                    pattern: "(?:CriOS|CrMo)"
                }, {
                    label: "Firefox",
                    pattern: "(?:Firefox|Minefield)"
                }, {
                    label: "Firefox for iOS",
                    pattern: "FxiOS"
                }, {
                    label: "IE",
                    pattern: "IEMobile"
                }, {
                    label: "IE",
                    pattern: "MSIE"
                }, "Safari"]), M = Z([{
                    label: "BlackBerry",
                    pattern: "BB10"
                }, "BlackBerry", {
                    label: "Galaxy S",
                    pattern: "GT-I9000"
                }, {
                    label: "Galaxy S2",
                    pattern: "GT-I9100"
                }, {
                    label: "Galaxy S3",
                    pattern: "GT-I9300"
                }, {
                    label: "Galaxy S4",
                    pattern: "GT-I9500"
                }, {
                    label: "Galaxy S5",
                    pattern: "SM-G900"
                }, {
                    label: "Galaxy S6",
                    pattern: "SM-G920"
                }, {
                    label: "Galaxy S6 Edge",
                    pattern: "SM-G925"
                }, {
                    label: "Galaxy S7",
                    pattern: "SM-G930"
                }, {
                    label: "Galaxy S7 Edge",
                    pattern: "SM-G935"
                }, "Google TV", "Lumia", "iPad", "iPod", "iPhone", "Kindle", {
                    label: "Kindle Fire",
                    pattern: "(?:Cloud9|Silk-Accelerated)"
                }, "Nexus", "Nook", "PlayBook", "PlayStation Vita", "PlayStation", "TouchPad", "Transformer", {
                    label: "Wii U",
                    pattern: "WiiU"
                }, "Wii", "Xbox One", {
                    label: "Xbox 360",
                    pattern: "Xbox"
                }, "Xoom"]), U = function(e) {
                    return b(e, (function(e, n, r) {
                        return e || (n[M] || n[/^[a-z]+(?: +[a-z]+\b)*/i.exec(M)] || RegExp("\\b" + y(r) + "(?:\\b|\\w*\\d)", "i").exec(t)) && r
                    }
                    ))
                }({
                    Apple: {
                        iPad: 1,
                        iPhone: 1,
                        iPod: 1
                    },
                    Alcatel: {},
                    Archos: {},
                    Amazon: {
                        Kindle: 1,
                        "Kindle Fire": 1
                    },
                    Asus: {
                        Transformer: 1
                    },
                    "Barnes & Noble": {
                        Nook: 1
                    },
                    BlackBerry: {
                        PlayBook: 1
                    },
                    Google: {
                        "Google TV": 1,
                        Nexus: 1
                    },
                    HP: {
                        TouchPad: 1
                    },
                    HTC: {},
                    Huawei: {},
                    Lenovo: {},
                    LG: {},
                    Microsoft: {
                        Xbox: 1,
                        "Xbox One": 1
                    },
                    Motorola: {
                        Xoom: 1
                    },
                    Nintendo: {
                        "Wii U": 1,
                        Wii: 1
                    },
                    Nokia: {
                        Lumia: 1
                    },
                    Oppo: {},
                    Samsung: {
                        "Galaxy S": 1,
                        "Galaxy S2": 1,
                        "Galaxy S3": 1,
                        "Galaxy S4": 1
                    },
                    Sony: {
                        PlayStation: 1,
                        "PlayStation Vita": 1
                    },
                    Xiaomi: {
                        Mi: 1,
                        Redmi: 1
                    }
                }), F = function(e) {
                    return b(e, (function(e, n) {
                        var r = n.pattern || y(n);
                        return !e && (e = RegExp("\\b" + r + "(?:/[\\d.]+|[ \\w.]*)", "i").exec(t)) && (e = function(e, t, n) {
                            var r = {
                                "10.0": "10",
                                6.4: "10 Technical Preview",
                                6.3: "8.1",
                                6.2: "8",
                                6.1: "Server 2008 R2 / 7",
                                "6.0": "Server 2008 / Vista",
                                5.2: "Server 2003 / XP 64-bit",
                                5.1: "XP",
                                5.01: "2000 SP1",
                                "5.0": "2000",
                                "4.0": "NT",
                                "4.90": "ME"
                            };
                            return t && n && /^Win/i.test(e) && !/^Windows Phone /i.test(e) && (r = r[/[\d.]+$/.exec(e)]) && (e = "Windows " + r),
                            e = String(e),
                            t && n && (e = e.replace(RegExp(t, "i"), n)),
                            h(e.replace(/ ce$/i, " CE").replace(/\bhpw/i, "web").replace(/\bMacintosh\b/, "Mac OS").replace(/_PowerPC\b/i, " OS").replace(/\b(OS X) [^ \d]+/i, "$1").replace(/\bMac (OS X)\b/, "$1").replace(/\/(\d)/, " $1").replace(/_/g, ".").replace(/(?: BePC|[ .]*fc[ \d.]+)$/i, "").replace(/\bx86\.64\b/gi, "x86_64").replace(/\b(Windows Phone) OS\b/, "$1").replace(/\b(Chrome OS \w+) [\d.]+\b/, "$1").split(" on ")[0])
                        }(e, r, n.label || n)),
                        e
                    }
                    ))
                }(["Windows Phone", "KaiOS", "Android", "CentOS", {
                    label: "Chrome OS",
                    pattern: "CrOS"
                }, "Debian", {
                    label: "DragonFly BSD",
                    pattern: "DragonFly"
                }, "Fedora", "FreeBSD", "Gentoo", "Haiku", "Kubuntu", "Linux Mint", "OpenBSD", "Red Hat", "SuSE", "Ubuntu", "Xubuntu", "Cygwin", "Symbian OS", "hpwOS", "webOS ", "webOS", "Tablet OS", "Tizen", "Linux", "Mac OS X", "Macintosh", "Mac", "Windows 98;", "Windows "]);
                function Z(e) {
                    return b(e, (function(e, n) {
                        var r = n.pattern || y(n);
                        return !e && (e = RegExp("\\b" + r + " *\\d+[.\\w_]*", "i").exec(t) || RegExp("\\b" + r + " *\\w+-[\\w]*", "i").exec(t) || RegExp("\\b" + r + "(?:; *(?:[a-z]+[_-])?[a-z]+\\d+|[^ ();-]*)", "i").exec(t)) && ((e = String(n.label && !RegExp(r, "i").test(n.label) ? n.label : e).split("/"))[1] && !/[\d.]+/.test(e[0]) && (e[0] += " " + e[1]),
                        n = n.label || n,
                        e = h(e[0].replace(RegExp(r, "i"), n).replace(RegExp("; *(?:" + n + "[_-])?", "i"), " ").replace(RegExp("(" + n + ")[-_.]?(\\w)", "i"), "$1 $2"))),
                        e
                    }
                    ))
                }
                function B(e) {
                    return b(e, (function(e, n) {
                        return e || (RegExp(n + "(?:-[\\d.]+/|(?: for [\\w-]+)?[ /-])([\\d.]+[^ ();/_-]*)", "i").exec(t) || 0)[1] || null
                    }
                    ))
                }
                if (D && (D = [D]),
                /\bAndroid\b/.test(F) && !M && (s = /\bAndroid[^;]*;(.*?)(?:Build|\) AppleWebKit)\b/i.exec(t)) && (M = S(s[1]).replace(/^[a-z]{2}-[a-z]{2};\s*/i, "") || null),
                U && !M ? M = Z([U]) : U && M && (M = M.replace(RegExp("^(" + y(U) + ")[-_.\\s]", "i"), U + " ").replace(RegExp("^(" + y(U) + ")[-_.]?(\\w)", "i"), U + " $2")),
                (s = /\bGoogle TV\b/.exec(M)) && (M = s[0]),
                /\bSimulator\b/i.test(t) && (M = (M ? M + " " : "") + "Simulator"),
                "Opera Mini" == j && /\bOPiOS\b/.test(t) && C.push("running in Turbo/Uncompressed mode"),
                "IE" == j && /\blike iPhone OS\b/.test(t) ? (U = (s = e(t.replace(/like iPhone OS/, ""))).manufacturer,
                M = s.product) : /^iP/.test(M) ? (j || (j = "Safari"),
                F = "iOS" + ((s = / OS ([\d_]+)/i.exec(t)) ? " " + s[1].replace(/_/g, ".") : "")) : "Konqueror" == j && /^Linux\b/i.test(F) ? F = "Kubuntu" : U && "Google" != U && (/Chrome/.test(j) && !/\bMobile Safari\b/i.test(t) || /\bVita\b/.test(M)) || /\bAndroid\b/.test(F) && /^Chrome/.test(j) && /\bVersion\//i.test(t) ? (j = "Android Browser",
                F = /\bAndroid\b/.test(F) ? F : "Android") : "Silk" == j ? (/\bMobi/i.test(t) || (F = "Android",
                C.unshift("desktop mode")),
                /Accelerated *= *true/i.test(t) && C.unshift("accelerated")) : "UC Browser" == j && /\bUCWEB\b/.test(t) ? C.push("speed mode") : "PaleMoon" == j && (s = /\bFirefox\/([\d.]+)\b/.exec(t)) ? C.push("identifying as Firefox " + s[1]) : "Firefox" == j && (s = /\b(Mobile|Tablet|TV)\b/i.exec(t)) ? (F || (F = "Firefox OS"),
                M || (M = s[1])) : !j || (s = !/\bMinefield\b/i.test(t) && /\b(?:Firefox|Safari)\b/.exec(j)) ? (j && !M && /[\/,]|^[^(]+?\)/.test(t.slice(t.indexOf(s + "/") + 8)) && (j = null),
                (s = M || U || F) && (M || U || /\b(?:Android|Symbian OS|Tablet OS|webOS)\b/.test(F)) && (j = /[a-z]+(?: Hat)?/i.exec(/\bAndroid\b/.test(F) ? F : s) + " Browser")) : "Electron" == j && (s = (/\bChrome\/([\d.]+)\b/.exec(t) || 0)[1]) && C.push("Chromium " + s),
                N || (N = B(["(?:Cloud9|CriOS|CrMo|Edge|Edg|EdgA|EdgiOS|FxiOS|HeadlessChrome|IEMobile|Iron|Opera ?Mini|OPiOS|OPR|Raven|SamsungBrowser|Silk(?!/[\\d.]+$)|UCBrowser|YaBrowser)", "Version", y(j), "(?:Firefox|Minefield|NetFront)"])),
                (s = ("iCab" == D && parseFloat(N) > 3 ? "WebKit" : /\bOpera\b/.test(j) && (/\bOPR\b/.test(t) ? "Blink" : "Presto")) || /\b(?:Midori|Nook|Safari)\b/i.test(t) && !/^(?:Trident|EdgeHTML)$/.test(D) && "WebKit" || !D && /\bMSIE\b/i.test(t) && ("Mac OS" == F ? "Tasman" : "Trident") || "WebKit" == D && /\bPlayStation\b(?! Vita\b)/i.test(j) && "NetFront") && (D = [s]),
                "IE" == j && (s = (/; *(?:XBLWP|ZuneWP)(\d+)/i.exec(t) || 0)[1]) ? (j += " Mobile",
                F = "Windows Phone " + (/\+$/.test(s) ? s : s + ".x"),
                C.unshift("desktop mode")) : /\bWPDesktop\b/i.test(t) ? (j = "IE Mobile",
                F = "Windows Phone 8.x",
                C.unshift("desktop mode"),
                N || (N = (/\brv:([\d.]+)/.exec(t) || 0)[1])) : "IE" != j && "Trident" == D && (s = /\brv:([\d.]+)/.exec(t)) && (j && C.push("identifying as " + j + (N ? " " + N : "")),
                j = "IE",
                N = s[1]),
                R) {
                    if (function(e, t) {
                        var n = null != e ? typeof e[t] : "number";
                        return !/^(?:boolean|number|string|undefined)$/.test(n) && ("object" != n || !!e[t])
                    }(n, "global"))
                        if (E && (I = (s = E.lang.System).getProperty("os.arch"),
                        F = F || s.getProperty("os.name") + " " + s.getProperty("os.version")),
                        T) {
                            try {
                                N = n.require("ringo/engine").version.join("."),
                                j = "RingoJS"
                            } catch (H) {
                                (s = n.system) && s.global.system == n.system && (j = "Narwhal",
                                F || (F = s[0].os || null))
                            }
                            j || (j = "Rhino")
                        } else
                            "object" == typeof n.process && !n.process.browser && (s = n.process) && ("object" == typeof s.versions && ("string" == typeof s.versions.electron ? (C.push("Node " + s.versions.node),
                            j = "Electron",
                            N = s.versions.electron) : "string" == typeof s.versions.nw && (C.push("Chromium " + N, "Node " + s.versions.node),
                            j = "NW.js",
                            N = s.versions.nw)),
                            j || (j = "Node.js",
                            I = s.arch,
                            F = s.platform,
                            N = (N = /[\d.]+/.exec(s.version)) ? N[0] : null));
                    else
                        m(s = n.runtime) == d ? (j = "Adobe AIR",
                        F = s.flash.system.Capabilities.os) : m(s = n.phantom) == O ? (j = "PhantomJS",
                        N = (s = s.version || null) && s.major + "." + s.minor + "." + s.patch) : "number" == typeof P.documentMode && (s = /\bTrident\/(\d+)/i.exec(t)) ? (N = [N, P.documentMode],
                        (s = +s[1] + 4) != N[1] && (C.push("IE " + N[1] + " mode"),
                        D && (D[1] = ""),
                        N[1] = s),
                        N = "IE" == j ? String(N[1].toFixed(1)) : N[0]) : "number" == typeof P.documentMode && /^(?:Chrome|Firefox)\b/.test(j) && (C.push("masking as " + j + " " + N),
                        j = "IE",
                        N = "11.0",
                        D = ["Trident"],
                        F = "Windows");
                    F = F && h(F)
                }
                if (N && (s = /(?:[ab]|dp|pre|[ab]\d+pre)(?:\d+\+?)?$/i.exec(N) || /(?:alpha|beta)(?: ?\d)?/i.exec(t + ";" + (R && o.appMinorVersion)) || /\bMinefield\b/i.test(t) && "a") && (L = /b/i.test(s) ? "beta" : "alpha",
                N = N.replace(RegExp(s + "\\+?$"), "") + ("beta" == L ? k : _) + (/\d+\+?/.exec(s) || "")),
                "Fennec" == j || "Firefox" == j && /\b(?:Android|Firefox OS|KaiOS)\b/.test(F))
                    j = "Firefox Mobile";
                else if ("Maxthon" == j && N)
                    N = N.replace(/\.[\d.]+/, ".x");
                else if (/\bXbox\b/i.test(M))
                    "Xbox 360" == M && (F = null),
                    "Xbox 360" == M && /\bIEMobile\b/.test(t) && C.unshift("mobile mode");
                else if (!/^(?:Chrome|IE|Opera)$/.test(j) && (!j || M || /Browser|Mobi/.test(j)) || "Windows CE" != F && !/Mobi/i.test(t))
                    if ("IE" == j && R)
                        try {
                            null === n.external && C.unshift("platform preview")
                        } catch (H) {
                            C.unshift("embedded")
                        }
                    else
                        (/\bBlackBerry\b/.test(M) || /\bBB10\b/.test(t)) && (s = (RegExp(M.replace(/ +/g, " *") + "/([.\\d]+)", "i").exec(t) || 0)[1] || N) ? (F = ((s = [s, /BB10/.test(t)])[1] ? (M = null,
                        U = "BlackBerry") : "Device Software") + " " + s[0],
                        N = null) : this != v && "Wii" != M && (R && x || /Opera/.test(j) && /\b(?:MSIE|Firefox)\b/i.test(t) || "Firefox" == j && /\bOS X (?:\d+\.){2,}/.test(F) || "IE" == j && (F && !/^Win/.test(F) && N > 5.5 || /\bWindows XP\b/.test(F) && N > 8 || 8 == N && !/\bTrident\b/.test(t))) && !l.test(s = e.call(v, t.replace(l, "") + ";")) && s.name && (s = "ing as " + s.name + ((s = s.version) ? " " + s : ""),
                        l.test(j) ? (/\bIE\b/.test(s) && "Mac OS" == F && (F = null),
                        s = "identify" + s) : (s = "mask" + s,
                        j = A ? h(A.replace(/([a-z])([A-Z])/g, "$1 $2")) : "Opera",
                        /\bIE\b/.test(s) && (F = null),
                        R || (N = null)),
                        D = ["Presto"],
                        C.push(s));
                else
                    j += " Mobile";
                (s = (/\bAppleWebKit\/([\d.]+\+?)/i.exec(t) || 0)[1]) && (s = [parseFloat(s.replace(/\.(\d)$/, ".0$1")), s],
                "Safari" == j && "+" == s[1].slice(-1) ? (j = "WebKit Nightly",
                L = "alpha",
                N = s[1].slice(0, -1)) : N != s[1] && N != (s[2] = (/\bSafari\/([\d.]+\+?)/i.exec(t) || 0)[1]) || (N = null),
                s[1] = (/\b(?:Headless)?Chrome\/([\d.]+)/i.exec(t) || 0)[1],
                537.36 == s[0] && 537.36 == s[2] && parseFloat(s[1]) >= 28 && "WebKit" == D && (D = ["Blink"]),
                R && (u || s[1]) ? (D && (D[1] = "like Chrome"),
                s = s[1] || ((s = s[0]) < 530 ? 1 : s < 532 ? 2 : s < 532.05 ? 3 : s < 533 ? 4 : s < 534.03 ? 5 : s < 534.07 ? 6 : s < 534.1 ? 7 : s < 534.13 ? 8 : s < 534.16 ? 9 : s < 534.24 ? 10 : s < 534.3 ? 11 : s < 535.01 ? 12 : s < 535.02 ? "13+" : s < 535.07 ? 15 : s < 535.11 ? 16 : s < 535.19 ? 17 : s < 536.05 ? 18 : s < 536.1 ? 19 : s < 537.01 ? 20 : s < 537.11 ? "21+" : s < 537.13 ? 23 : s < 537.18 ? 24 : s < 537.24 ? 25 : s < 537.36 ? 26 : "Blink" != D ? "27" : "28")) : (D && (D[1] = "like Safari"),
                s = (s = s[0]) < 400 ? 1 : s < 500 ? 2 : s < 526 ? 3 : s < 533 ? 4 : s < 534 ? "4+" : s < 535 ? 5 : s < 537 ? 6 : s < 538 ? 7 : s < 601 ? 8 : s < 602 ? 9 : s < 604 ? 10 : s < 606 ? 11 : s < 608 ? 12 : "12"),
                D && (D[1] += " " + (s += "number" == typeof s ? ".x" : /[.+]/.test(s) ? "" : "+")),
                "Safari" == j && (!N || parseInt(N) > 45) ? N = s : "Chrome" == j && /\bHeadlessChrome/i.test(t) && C.unshift("headless")),
                "Opera" == j && (s = /\bzbov|zvav$/.exec(F)) ? (j += " ",
                C.unshift("desktop mode"),
                "zvav" == s ? (j += "Mini",
                N = null) : j += "Mobile",
                F = F.replace(RegExp(" *" + s + "$"), "")) : "Safari" == j && /\bChrome\b/.exec(D && D[1]) ? (C.unshift("desktop mode"),
                j = "Chrome Mobile",
                N = null,
                /\bOS X\b/.test(F) ? (U = "Apple",
                F = "iOS 4.3+") : F = null) : /\bSRWare Iron\b/.test(j) && !N && (N = B("Chrome")),
                N && 0 == N.indexOf(s = /[\d.]+$/.exec(F)) && t.indexOf("/" + s + "-") > -1 && (F = S(F.replace(s, ""))),
                F && -1 != F.indexOf(j) && !RegExp(j + " OS").test(F) && (F = F.replace(RegExp(" *" + y(j) + " *"), "")),
                D && !/\b(?:Avant|Nook)\b/.test(j) && (/Browser|Lunascape|Maxthon/.test(j) || "Safari" != j && /^iOS/.test(F) && /\bSafari\b/.test(D[1]) || /^(?:Adobe|Arora|Breach|Midori|Opera|Phantom|Rekonq|Rock|Samsung Internet|Sleipnir|SRWare Iron|Vivaldi|Web)/.test(j) && D[1]) && (s = D[D.length - 1]) && C.push(s),
                C.length && (C = ["(" + C.join("; ") + ")"]),
                U && M && M.indexOf(U) < 0 && C.push("on " + U),
                M && C.push((/^on /.test(C[C.length - 1]) ? "" : "on ") + M),
                F && (s = / ([\d.+]+)$/.exec(F),
                c = s && "/" == F.charAt(F.length - s[0].length - 1),
                F = {
                    architecture: 32,
                    family: s && !c ? F.replace(s[0], "") : F,
                    version: s ? s[1] : null,
                    toString: function() {
                        var e = this.version;
                        return this.family + (e && !c ? " " + e : "") + (64 == this.architecture ? " 64-bit" : "")
                    }
                }),
                (s = /\b(?:AMD|IA|Win|WOW|x86_|x)64\b/i.exec(I)) && !/\bi686\b/i.test(I) ? (F && (F.architecture = 64,
                F.family = F.family.replace(RegExp(" *" + s), "")),
                j && (/\bWOW64\b/i.test(t) || R && /\w(?:86|32)$/.test(o.cpuClass || o.platform) && !/\bWin64; x64\b/i.test(t)) && C.unshift("32-bit")) : F && /^OS X/.test(F.family) && "Chrome" == j && parseFloat(N) >= 39 && (F.architecture = 64),
                t || (t = null);
                var G = {};
                return G.description = t,
                G.layout = D && D[0],
                G.manufacturer = U,
                G.name = j,
                G.prerelease = L,
                G.product = M,
                G.ua = t,
                G.version = j && N,
                G.os = F || {
                    architecture: null,
                    family: null,
                    version: null,
                    toString: function() {
                        return "null"
                    }
                },
                G.parse = e,
                G.toString = function() {
                    return this.description || ""
                }
                ,
                G.version && C.unshift(N),
                G.name && C.unshift(j),
                F && j && (F != String(F).split(" ")[0] || F != j.split(" ")[0] && !M) && C.push(M ? "(" + F + ")" : "on " + F),
                C.length && (G.description = C.join(" ")),
                G
            }();
            i.platform = w,
            void 0 === (r = function() {
                return w
            }
            .call(t, n, t, e)) || (e.exports = r)
        }
        .call(this)
    },
    8718: function(e, t, n) {
        "use strict";
        n.d(t, {
            OO: function() {
                return f
            },
            JP: function() {
                return d
            },
            zv: function() {
                return p
            },
            nI: function() {
                return g
            },
            Db: function() {
                return h
            }
        });
        var r = n(5671)
          , o = n(3144)
          , i = n(4942)
          , a = n(1720);
        function s(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, r)
            }
            return n
        }
        function c(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? s(Object(n), !0).forEach((function(t) {
                    (0,
                    i.Z)(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : s(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        var u, l = {
            bindI18n: "languageChanged",
            bindI18nStore: "",
            transEmptyNodeValue: "",
            transSupportBasicHtmlNodes: !0,
            transWrapTextNodes: "",
            transKeepBasicHtmlNodesFor: ["br", "strong", "i", "p"],
            useSuspense: !0
        }, f = a.default.createContext();
        function d() {
            return l
        }
        var p = function() {
            function e() {
                (0,
                r.Z)(this, e),
                this.usedNamespaces = {}
            }
            return (0,
            o.Z)(e, [{
                key: "addUsedNamespaces",
                value: function(e) {
                    var t = this;
                    e.forEach((function(e) {
                        t.usedNamespaces[e] || (t.usedNamespaces[e] = !0)
                    }
                    ))
                }
            }, {
                key: "getUsedNamespaces",
                value: function() {
                    return Object.keys(this.usedNamespaces)
                }
            }]),
            e
        }();
        function g() {
            return u
        }
        var h = {
            type: "3rdParty",
            init: function(e) {
                !function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    l = c(c({}, l), e)
                }(e.options.react),
                function(e) {
                    u = e
                }(e)
            }
        }
    },
    1567: function(e, t, n) {
        "use strict";
        n.d(t, {
            $: function() {
                return g
            }
        });
        var r = n(7685)
          , o = n(4942)
          , i = n(1720)
          , a = n(8718);
        function s() {
            if (console && console.warn) {
                for (var e, t = arguments.length, n = new Array(t), r = 0; r < t; r++)
                    n[r] = arguments[r];
                "string" === typeof n[0] && (n[0] = "react-i18next:: ".concat(n[0])),
                (e = console).warn.apply(e, n)
            }
        }
        var c = {};
        function u() {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                t[n] = arguments[n];
            "string" === typeof t[0] && c[t[0]] || ("string" === typeof t[0] && (c[t[0]] = new Date),
            s.apply(void 0, t))
        }
        function l(e, t, n) {
            e.loadNamespaces(t, (function() {
                if (e.isInitialized)
                    n();
                else {
                    e.on("initialized", (function t() {
                        setTimeout((function() {
                            e.off("initialized", t)
                        }
                        ), 0),
                        n()
                    }
                    ))
                }
            }
            ))
        }
        function f(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            if (!t.languages || !t.languages.length)
                return u("i18n.languages were undefined or empty", t.languages),
                !0;
            var r = t.languages[0]
              , o = !!t.options && t.options.fallbackLng
              , i = t.languages[t.languages.length - 1];
            if ("cimode" === r.toLowerCase())
                return !0;
            var a = function(e, n) {
                var r = t.services.backendConnector.state["".concat(e, "|").concat(n)];
                return -1 === r || 2 === r
            };
            return !(n.bindI18n && n.bindI18n.indexOf("languageChanging") > -1 && t.services.backendConnector.backend && t.isLanguageChangingTo && !a(t.isLanguageChangingTo, e)) && (!!t.hasResourceBundle(r, e) || (!t.services.backendConnector.backend || !(!a(r, e) || o && !a(i, e))))
        }
        function d(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, r)
            }
            return n
        }
        function p(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? d(Object(n), !0).forEach((function(t) {
                    (0,
                    o.Z)(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : d(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        function g(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
              , n = t.i18n
              , o = (0,
            i.useContext)(a.OO) || {}
              , s = o.i18n
              , c = o.defaultNS
              , d = n || s || (0,
            a.nI)();
            if (d && !d.reportNamespaces && (d.reportNamespaces = new a.zv),
            !d) {
                u("You will need to pass in an i18next instance by using initReactI18next");
                var g = function(e) {
                    return Array.isArray(e) ? e[e.length - 1] : e
                }
                  , h = [g, {}, !1];
                return h.t = g,
                h.i18n = {},
                h.ready = !1,
                h
            }
            d.options.react && void 0 !== d.options.react.wait && u("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");
            var v = p(p(p({}, (0,
            a.JP)()), d.options.react), t)
              , m = v.useSuspense
              , y = v.keyPrefix
              , b = e || c || d.options && d.options.defaultNS;
            b = "string" === typeof b ? [b] : b || ["translation"],
            d.reportNamespaces.addUsedNamespaces && d.reportNamespaces.addUsedNamespaces(b);
            var S = (d.isInitialized || d.initializedStoreOnce) && b.every((function(e) {
                return f(e, d, v)
            }
            ));
            function w() {
                return d.getFixedT(null, "fallback" === v.nsMode ? b : b[0], y)
            }
            var O = (0,
            i.useState)(w)
              , E = (0,
            r.Z)(O, 2)
              , T = E[0]
              , _ = E[1]
              , k = (0,
            i.useRef)(!0);
            (0,
            i.useEffect)((function() {
                var e = v.bindI18n
                  , t = v.bindI18nStore;
                function n() {
                    k.current && _(w)
                }
                return k.current = !0,
                S || m || l(d, b, (function() {
                    k.current && _(w)
                }
                )),
                e && d && d.on(e, n),
                t && d && d.store.on(t, n),
                function() {
                    k.current = !1,
                    e && d && e.split(" ").forEach((function(e) {
                        return d.off(e, n)
                    }
                    )),
                    t && d && t.split(" ").forEach((function(e) {
                        return d.store.off(e, n)
                    }
                    ))
                }
            }
            ), [d, b.join()]);
            var P = (0,
            i.useRef)(!0);
            (0,
            i.useEffect)((function() {
                k.current && !P.current && _(w),
                P.current = !1
            }
            ), [d]);
            var x = [T, d, S];
            if (x.t = T,
            x.i18n = d,
            x.ready = S,
            S)
                return x;
            if (!S && !m)
                return x;
            throw new Promise((function(e) {
                l(d, b, (function() {
                    e()
                }
                ))
            }
            ))
        }
    },
    9921: function(e, t) {
        "use strict";
        var n = 60103
          , r = 60106
          , o = 60107
          , i = 60108
          , a = 60114
          , s = 60109
          , c = 60110
          , u = 60112
          , l = 60113
          , f = 60120
          , d = 60115
          , p = 60116
          , g = 60121
          , h = 60122
          , v = 60117
          , m = 60129
          , y = 60131;
        if ("function" === typeof Symbol && Symbol.for) {
            var b = Symbol.for;
            n = b("react.element"),
            r = b("react.portal"),
            o = b("react.fragment"),
            i = b("react.strict_mode"),
            a = b("react.profiler"),
            s = b("react.provider"),
            c = b("react.context"),
            u = b("react.forward_ref"),
            l = b("react.suspense"),
            f = b("react.suspense_list"),
            d = b("react.memo"),
            p = b("react.lazy"),
            g = b("react.block"),
            h = b("react.server.block"),
            v = b("react.fundamental"),
            m = b("react.debug_trace_mode"),
            y = b("react.legacy_hidden")
        }
        function S(e) {
            if ("object" === typeof e && null !== e) {
                var t = e.$$typeof;
                switch (t) {
                case n:
                    switch (e = e.type) {
                    case o:
                    case a:
                    case i:
                    case l:
                    case f:
                        return e;
                    default:
                        switch (e = e && e.$$typeof) {
                        case c:
                        case u:
                        case p:
                        case d:
                        case s:
                            return e;
                        default:
                            return t
                        }
                    }
                case r:
                    return t
                }
            }
        }
        t.isValidElementType = function(e) {
            return "string" === typeof e || "function" === typeof e || e === o || e === a || e === m || e === i || e === l || e === f || e === y || "object" === typeof e && null !== e && (e.$$typeof === p || e.$$typeof === d || e.$$typeof === s || e.$$typeof === c || e.$$typeof === u || e.$$typeof === v || e.$$typeof === g || e[0] === h)
        }
        ,
        t.typeOf = S
    },
    9864: function(e, t, n) {
        "use strict";
        e.exports = n(9921)
    },
    5617: function(e, t, n) {
        "use strict";
        n.d(t, {
            zt: function() {
                return l
            },
            I0: function() {
                return h
            },
            v9: function() {
                return b
            }
        });
        var r = n(1720)
          , o = r.default.createContext(null);
        var i = function(e) {
            e()
        }
          , a = function() {
            return i
        };
        var s = {
            notify: function() {},
            get: function() {
                return []
            }
        };
        function c(e, t) {
            var n, r = s;
            function o() {
                c.onStateChange && c.onStateChange()
            }
            function i() {
                n || (n = t ? t.addNestedSub(o) : e.subscribe(o),
                r = function() {
                    var e = a()
                      , t = null
                      , n = null;
                    return {
                        clear: function() {
                            t = null,
                            n = null
                        },
                        notify: function() {
                            e((function() {
                                for (var e = t; e; )
                                    e.callback(),
                                    e = e.next
                            }
                            ))
                        },
                        get: function() {
                            for (var e = [], n = t; n; )
                                e.push(n),
                                n = n.next;
                            return e
                        },
                        subscribe: function(e) {
                            var r = !0
                              , o = n = {
                                callback: e,
                                next: null,
                                prev: n
                            };
                            return o.prev ? o.prev.next = o : t = o,
                            function() {
                                r && null !== t && (r = !1,
                                o.next ? o.next.prev = o.prev : n = o.prev,
                                o.prev ? o.prev.next = o.next : t = o.next)
                            }
                        }
                    }
                }())
            }
            var c = {
                addNestedSub: function(e) {
                    return i(),
                    r.subscribe(e)
                },
                notifyNestedSubs: function() {
                    r.notify()
                },
                handleChangeWrapper: o,
                isSubscribed: function() {
                    return Boolean(n)
                },
                trySubscribe: i,
                tryUnsubscribe: function() {
                    n && (n(),
                    n = void 0,
                    r.clear(),
                    r = s)
                },
                getListeners: function() {
                    return r
                }
            };
            return c
        }
        var u = "undefined" !== typeof window && "undefined" !== typeof window.document && "undefined" !== typeof window.document.createElement ? r.useLayoutEffect : r.useEffect;
        var l = function(e) {
            var t = e.store
              , n = e.context
              , i = e.children
              , a = (0,
            r.useMemo)((function() {
                var e = c(t);
                return e.onStateChange = e.notifyNestedSubs,
                {
                    store: t,
                    subscription: e
                }
            }
            ), [t])
              , s = (0,
            r.useMemo)((function() {
                return t.getState()
            }
            ), [t]);
            u((function() {
                var e = a.subscription;
                return e.trySubscribe(),
                s !== t.getState() && e.notifyNestedSubs(),
                function() {
                    e.tryUnsubscribe(),
                    e.onStateChange = null
                }
            }
            ), [a, s]);
            var l = n || o;
            return r.default.createElement(l.Provider, {
                value: a
            }, i)
        };
        n(8679),
        n(9864);
        n(7462);
        function f() {
            return (0,
            r.useContext)(o)
        }
        function d(e) {
            void 0 === e && (e = o);
            var t = e === o ? f : function() {
                return (0,
                r.useContext)(e)
            }
            ;
            return function() {
                return t().store
            }
        }
        var p = d();
        function g(e) {
            void 0 === e && (e = o);
            var t = e === o ? p : d(e);
            return function() {
                return t().dispatch
            }
        }
        var h = g()
          , v = function(e, t) {
            return e === t
        };
        function m(e) {
            void 0 === e && (e = o);
            var t = e === o ? f : function() {
                return (0,
                r.useContext)(e)
            }
            ;
            return function(e, n) {
                void 0 === n && (n = v);
                var o = t()
                  , i = function(e, t, n, o) {
                    var i, a = (0,
                    r.useReducer)((function(e) {
                        return e + 1
                    }
                    ), 0)[1], s = (0,
                    r.useMemo)((function() {
                        return c(n, o)
                    }
                    ), [n, o]), l = (0,
                    r.useRef)(), f = (0,
                    r.useRef)(), d = (0,
                    r.useRef)(), p = (0,
                    r.useRef)(), g = n.getState();
                    try {
                        if (e !== f.current || g !== d.current || l.current) {
                            var h = e(g);
                            i = void 0 !== p.current && t(h, p.current) ? p.current : h
                        } else
                            i = p.current
                    } catch (v) {
                        throw l.current && (v.message += "\nThe error may be correlated with this previous error:\n" + l.current.stack + "\n\n"),
                        v
                    }
                    return u((function() {
                        f.current = e,
                        d.current = g,
                        p.current = i,
                        l.current = void 0
                    }
                    )),
                    u((function() {
                        function e() {
                            try {
                                var e = n.getState();
                                if (e === d.current)
                                    return;
                                var r = f.current(e);
                                if (t(r, p.current))
                                    return;
                                p.current = r,
                                d.current = e
                            } catch (v) {
                                l.current = v
                            }
                            a()
                        }
                        return s.onStateChange = e,
                        s.trySubscribe(),
                        e(),
                        function() {
                            return s.tryUnsubscribe()
                        }
                    }
                    ), [n, s]),
                    i
                }(e, n, o.store, o.subscription);
                return (0,
                r.useDebugValue)(i),
                i
            }
        }
        var y, b = m();
        y = r.unstable_batchedUpdates,
        i = y
    },
    3488: function(e, t, n) {
        "use strict";
        t.__esModule = !0,
        t.default = function(e) {
            var t = (0,
            o.default)(e);
            return {
                getItem: function(e) {
                    return new Promise((function(n, r) {
                        n(t.getItem(e))
                    }
                    ))
                },
                setItem: function(e, n) {
                    return new Promise((function(r, o) {
                        r(t.setItem(e, n))
                    }
                    ))
                },
                removeItem: function(e) {
                    return new Promise((function(n, r) {
                        n(t.removeItem(e))
                    }
                    ))
                }
            }
        }
        ;
        var r, o = (r = n(7290)) && r.__esModule ? r : {
            default: r
        }
    },
    7290: function(e, t) {
        "use strict";
        function n(e) {
            return (n = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function r() {}
        t.__esModule = !0,
        t.default = function(e) {
            var t = "".concat(e, "Storage");
            return function(e) {
                if ("object" !== ("undefined" === typeof self ? "undefined" : n(self)) || !(e in self))
                    return !1;
                try {
                    var t = self[e]
                      , r = "redux-persist ".concat(e, " test");
                    t.setItem(r, "test"),
                    t.getItem(r),
                    t.removeItem(r)
                } catch (o) {
                    return !1
                }
                return !0
            }(t) ? self[t] : o
        }
        ;
        var o = {
            getItem: r,
            setItem: r,
            removeItem: r
        }
    },
    6734: function(e, t, n) {
        "use strict";
        var r;
        t.Z = void 0;
        var o = (0,
        ((r = n(3488)) && r.__esModule ? r : {
            default: r
        }).default)("local");
        t.Z = o
    },
    6774: function(e) {
        e.exports = function(e, t, n, r) {
            var o = n ? n.call(r, e, t) : void 0;
            if (void 0 !== o)
                return !!o;
            if (e === t)
                return !0;
            if ("object" !== typeof e || !e || "object" !== typeof t || !t)
                return !1;
            var i = Object.keys(e)
              , a = Object.keys(t);
            if (i.length !== a.length)
                return !1;
            for (var s = Object.prototype.hasOwnProperty.bind(t), c = 0; c < i.length; c++) {
                var u = i[c];
                if (!s(u))
                    return !1;
                var l = e[u]
                  , f = t[u];
                if (!1 === (o = n ? n.call(r, l, f, u) : void 0) || void 0 === o && l !== f)
                    return !1
            }
            return !0
        }
    },
    445: function(e, t, n) {
        "use strict";
        n.d(t, {
            f6: function() {
                return Le
            },
            vJ: function() {
                return Me
            },
            iv: function() {
                return Se
            },
            ZP: function() {
                return Fe
            },
            F4: function() {
                return Ue
            }
        });
        var r = n(9864)
          , o = n(1720)
          , i = n(6774)
          , a = n.n(i);
        var s = function(e) {
            function t(e, r, c, u, d) {
                for (var p, g, h, v, S, O = 0, E = 0, T = 0, _ = 0, k = 0, L = 0, N = h = p = 0, j = 0, M = 0, U = 0, F = 0, Z = c.length, B = Z - 1, G = "", H = "", W = "", z = ""; j < Z; ) {
                    if (g = c.charCodeAt(j),
                    j === B && 0 !== E + _ + T + O && (0 !== E && (g = 47 === E ? 10 : 47),
                    _ = T = O = 0,
                    Z++,
                    B++),
                    0 === E + _ + T + O) {
                        if (j === B && (0 < M && (G = G.replace(f, "")),
                        0 < G.trim().length)) {
                            switch (g) {
                            case 32:
                            case 9:
                            case 59:
                            case 13:
                            case 10:
                                break;
                            default:
                                G += c.charAt(j)
                            }
                            g = 59
                        }
                        switch (g) {
                        case 123:
                            for (p = (G = G.trim()).charCodeAt(0),
                            h = 1,
                            F = ++j; j < Z; ) {
                                switch (g = c.charCodeAt(j)) {
                                case 123:
                                    h++;
                                    break;
                                case 125:
                                    h--;
                                    break;
                                case 47:
                                    switch (g = c.charCodeAt(j + 1)) {
                                    case 42:
                                    case 47:
                                        e: {
                                            for (N = j + 1; N < B; ++N)
                                                switch (c.charCodeAt(N)) {
                                                case 47:
                                                    if (42 === g && 42 === c.charCodeAt(N - 1) && j + 2 !== N) {
                                                        j = N + 1;
                                                        break e
                                                    }
                                                    break;
                                                case 10:
                                                    if (47 === g) {
                                                        j = N + 1;
                                                        break e
                                                    }
                                                }
                                            j = N
                                        }
                                    }
                                    break;
                                case 91:
                                    g++;
                                case 40:
                                    g++;
                                case 34:
                                case 39:
                                    for (; j++ < B && c.charCodeAt(j) !== g; )
                                        ;
                                }
                                if (0 === h)
                                    break;
                                j++
                            }
                            switch (h = c.substring(F, j),
                            0 === p && (p = (G = G.replace(l, "").trim()).charCodeAt(0)),
                            p) {
                            case 64:
                                switch (0 < M && (G = G.replace(f, "")),
                                g = G.charCodeAt(1)) {
                                case 100:
                                case 109:
                                case 115:
                                case 45:
                                    M = r;
                                    break;
                                default:
                                    M = C
                                }
                                if (F = (h = t(r, M, h, g, d + 1)).length,
                                0 < R && (S = s(3, h, M = n(C, G, U), r, x, P, F, g, d, u),
                                G = M.join(""),
                                void 0 !== S && 0 === (F = (h = S.trim()).length) && (g = 0,
                                h = "")),
                                0 < F)
                                    switch (g) {
                                    case 115:
                                        G = G.replace(w, a);
                                    case 100:
                                    case 109:
                                    case 45:
                                        h = G + "{" + h + "}";
                                        break;
                                    case 107:
                                        h = (G = G.replace(m, "$1 $2")) + "{" + h + "}",
                                        h = 1 === I || 2 === I && i("@" + h, 3) ? "@-webkit-" + h + "@" + h : "@" + h;
                                        break;
                                    default:
                                        h = G + h,
                                        112 === u && (H += h,
                                        h = "")
                                    }
                                else
                                    h = "";
                                break;
                            default:
                                h = t(r, n(r, G, U), h, u, d + 1)
                            }
                            W += h,
                            h = U = M = N = p = 0,
                            G = "",
                            g = c.charCodeAt(++j);
                            break;
                        case 125:
                        case 59:
                            if (1 < (F = (G = (0 < M ? G.replace(f, "") : G).trim()).length))
                                switch (0 === N && (p = G.charCodeAt(0),
                                45 === p || 96 < p && 123 > p) && (F = (G = G.replace(" ", ":")).length),
                                0 < R && void 0 !== (S = s(1, G, r, e, x, P, H.length, u, d, u)) && 0 === (F = (G = S.trim()).length) && (G = "\0\0"),
                                p = G.charCodeAt(0),
                                g = G.charCodeAt(1),
                                p) {
                                case 0:
                                    break;
                                case 64:
                                    if (105 === g || 99 === g) {
                                        z += G + c.charAt(j);
                                        break
                                    }
                                default:
                                    58 !== G.charCodeAt(F - 1) && (H += o(G, p, g, G.charCodeAt(2)))
                                }
                            U = M = N = p = 0,
                            G = "",
                            g = c.charCodeAt(++j)
                        }
                    }
                    switch (g) {
                    case 13:
                    case 10:
                        47 === E ? E = 0 : 0 === 1 + p && 107 !== u && 0 < G.length && (M = 1,
                        G += "\0"),
                        0 < R * D && s(0, G, r, e, x, P, H.length, u, d, u),
                        P = 1,
                        x++;
                        break;
                    case 59:
                    case 125:
                        if (0 === E + _ + T + O) {
                            P++;
                            break
                        }
                    default:
                        switch (P++,
                        v = c.charAt(j),
                        g) {
                        case 9:
                        case 32:
                            if (0 === _ + O + E)
                                switch (k) {
                                case 44:
                                case 58:
                                case 9:
                                case 32:
                                    v = "";
                                    break;
                                default:
                                    32 !== g && (v = " ")
                                }
                            break;
                        case 0:
                            v = "\\0";
                            break;
                        case 12:
                            v = "\\f";
                            break;
                        case 11:
                            v = "\\v";
                            break;
                        case 38:
                            0 === _ + E + O && (M = U = 1,
                            v = "\f" + v);
                            break;
                        case 108:
                            if (0 === _ + E + O + A && 0 < N)
                                switch (j - N) {
                                case 2:
                                    112 === k && 58 === c.charCodeAt(j - 3) && (A = k);
                                case 8:
                                    111 === L && (A = L)
                                }
                            break;
                        case 58:
                            0 === _ + E + O && (N = j);
                            break;
                        case 44:
                            0 === E + T + _ + O && (M = 1,
                            v += "\r");
                            break;
                        case 34:
                        case 39:
                            0 === E && (_ = _ === g ? 0 : 0 === _ ? g : _);
                            break;
                        case 91:
                            0 === _ + E + T && O++;
                            break;
                        case 93:
                            0 === _ + E + T && O--;
                            break;
                        case 41:
                            0 === _ + E + O && T--;
                            break;
                        case 40:
                            if (0 === _ + E + O) {
                                if (0 === p)
                                    switch (2 * k + 3 * L) {
                                    case 533:
                                        break;
                                    default:
                                        p = 1
                                    }
                                T++
                            }
                            break;
                        case 64:
                            0 === E + T + _ + O + N + h && (h = 1);
                            break;
                        case 42:
                        case 47:
                            if (!(0 < _ + O + T))
                                switch (E) {
                                case 0:
                                    switch (2 * g + 3 * c.charCodeAt(j + 1)) {
                                    case 235:
                                        E = 47;
                                        break;
                                    case 220:
                                        F = j,
                                        E = 42
                                    }
                                    break;
                                case 42:
                                    47 === g && 42 === k && F + 2 !== j && (33 === c.charCodeAt(F + 2) && (H += c.substring(F, j + 1)),
                                    v = "",
                                    E = 0)
                                }
                        }
                        0 === E && (G += v)
                    }
                    L = k,
                    k = g,
                    j++
                }
                if (0 < (F = H.length)) {
                    if (M = r,
                    0 < R && (void 0 !== (S = s(2, H, M, e, x, P, F, u, d, u)) && 0 === (H = S).length))
                        return z + H + W;
                    if (H = M.join(",") + "{" + H + "}",
                    0 !== I * A) {
                        switch (2 !== I || i(H, 2) || (A = 0),
                        A) {
                        case 111:
                            H = H.replace(b, ":-moz-$1") + H;
                            break;
                        case 112:
                            H = H.replace(y, "::-webkit-input-$1") + H.replace(y, "::-moz-$1") + H.replace(y, ":-ms-input-$1") + H
                        }
                        A = 0
                    }
                }
                return z + H + W
            }
            function n(e, t, n) {
                var o = t.trim().split(h);
                t = o;
                var i = o.length
                  , a = e.length;
                switch (a) {
                case 0:
                case 1:
                    var s = 0;
                    for (e = 0 === a ? "" : e[0] + " "; s < i; ++s)
                        t[s] = r(e, t[s], n).trim();
                    break;
                default:
                    var c = s = 0;
                    for (t = []; s < i; ++s)
                        for (var u = 0; u < a; ++u)
                            t[c++] = r(e[u] + " ", o[s], n).trim()
                }
                return t
            }
            function r(e, t, n) {
                var r = t.charCodeAt(0);
                switch (33 > r && (r = (t = t.trim()).charCodeAt(0)),
                r) {
                case 38:
                    return t.replace(v, "$1" + e.trim());
                case 58:
                    return e.trim() + t.replace(v, "$1" + e.trim());
                default:
                    if (0 < 1 * n && 0 < t.indexOf("\f"))
                        return t.replace(v, (58 === e.charCodeAt(0) ? "" : "$1") + e.trim())
                }
                return e + t
            }
            function o(e, t, n, r) {
                var a = e + ";"
                  , s = 2 * t + 3 * n + 4 * r;
                if (944 === s) {
                    e = a.indexOf(":", 9) + 1;
                    var c = a.substring(e, a.length - 1).trim();
                    return c = a.substring(0, e).trim() + c + ";",
                    1 === I || 2 === I && i(c, 1) ? "-webkit-" + c + c : c
                }
                if (0 === I || 2 === I && !i(a, 1))
                    return a;
                switch (s) {
                case 1015:
                    return 97 === a.charCodeAt(10) ? "-webkit-" + a + a : a;
                case 951:
                    return 116 === a.charCodeAt(3) ? "-webkit-" + a + a : a;
                case 963:
                    return 110 === a.charCodeAt(5) ? "-webkit-" + a + a : a;
                case 1009:
                    if (100 !== a.charCodeAt(4))
                        break;
                case 969:
                case 942:
                    return "-webkit-" + a + a;
                case 978:
                    return "-webkit-" + a + "-moz-" + a + a;
                case 1019:
                case 983:
                    return "-webkit-" + a + "-moz-" + a + "-ms-" + a + a;
                case 883:
                    if (45 === a.charCodeAt(8))
                        return "-webkit-" + a + a;
                    if (0 < a.indexOf("image-set(", 11))
                        return a.replace(k, "$1-webkit-$2") + a;
                    break;
                case 932:
                    if (45 === a.charCodeAt(4))
                        switch (a.charCodeAt(5)) {
                        case 103:
                            return "-webkit-box-" + a.replace("-grow", "") + "-webkit-" + a + "-ms-" + a.replace("grow", "positive") + a;
                        case 115:
                            return "-webkit-" + a + "-ms-" + a.replace("shrink", "negative") + a;
                        case 98:
                            return "-webkit-" + a + "-ms-" + a.replace("basis", "preferred-size") + a
                        }
                    return "-webkit-" + a + "-ms-" + a + a;
                case 964:
                    return "-webkit-" + a + "-ms-flex-" + a + a;
                case 1023:
                    if (99 !== a.charCodeAt(8))
                        break;
                    return "-webkit-box-pack" + (c = a.substring(a.indexOf(":", 15)).replace("flex-", "").replace("space-between", "justify")) + "-webkit-" + a + "-ms-flex-pack" + c + a;
                case 1005:
                    return p.test(a) ? a.replace(d, ":-webkit-") + a.replace(d, ":-moz-") + a : a;
                case 1e3:
                    switch (t = (c = a.substring(13).trim()).indexOf("-") + 1,
                    c.charCodeAt(0) + c.charCodeAt(t)) {
                    case 226:
                        c = a.replace(S, "tb");
                        break;
                    case 232:
                        c = a.replace(S, "tb-rl");
                        break;
                    case 220:
                        c = a.replace(S, "lr");
                        break;
                    default:
                        return a
                    }
                    return "-webkit-" + a + "-ms-" + c + a;
                case 1017:
                    if (-1 === a.indexOf("sticky", 9))
                        break;
                case 975:
                    switch (t = (a = e).length - 10,
                    s = (c = (33 === a.charCodeAt(t) ? a.substring(0, t) : a).substring(e.indexOf(":", 7) + 1).trim()).charCodeAt(0) + (0 | c.charCodeAt(7))) {
                    case 203:
                        if (111 > c.charCodeAt(8))
                            break;
                    case 115:
                        a = a.replace(c, "-webkit-" + c) + ";" + a;
                        break;
                    case 207:
                    case 102:
                        a = a.replace(c, "-webkit-" + (102 < s ? "inline-" : "") + "box") + ";" + a.replace(c, "-webkit-" + c) + ";" + a.replace(c, "-ms-" + c + "box") + ";" + a
                    }
                    return a + ";";
                case 938:
                    if (45 === a.charCodeAt(5))
                        switch (a.charCodeAt(6)) {
                        case 105:
                            return c = a.replace("-items", ""),
                            "-webkit-" + a + "-webkit-box-" + c + "-ms-flex-" + c + a;
                        case 115:
                            return "-webkit-" + a + "-ms-flex-item-" + a.replace(E, "") + a;
                        default:
                            return "-webkit-" + a + "-ms-flex-line-pack" + a.replace("align-content", "").replace(E, "") + a
                        }
                    break;
                case 973:
                case 989:
                    if (45 !== a.charCodeAt(3) || 122 === a.charCodeAt(4))
                        break;
                case 931:
                case 953:
                    if (!0 === _.test(e))
                        return 115 === (c = e.substring(e.indexOf(":") + 1)).charCodeAt(0) ? o(e.replace("stretch", "fill-available"), t, n, r).replace(":fill-available", ":stretch") : a.replace(c, "-webkit-" + c) + a.replace(c, "-moz-" + c.replace("fill-", "")) + a;
                    break;
                case 962:
                    if (a = "-webkit-" + a + (102 === a.charCodeAt(5) ? "-ms-" + a : "") + a,
                    211 === n + r && 105 === a.charCodeAt(13) && 0 < a.indexOf("transform", 10))
                        return a.substring(0, a.indexOf(";", 27) + 1).replace(g, "$1-webkit-$2") + a
                }
                return a
            }
            function i(e, t) {
                var n = e.indexOf(1 === t ? ":" : "{")
                  , r = e.substring(0, 3 !== t ? n : 10);
                return n = e.substring(n + 1, e.length - 1),
                N(2 !== t ? r : r.replace(T, "$1"), n, t)
            }
            function a(e, t) {
                var n = o(t, t.charCodeAt(0), t.charCodeAt(1), t.charCodeAt(2));
                return n !== t + ";" ? n.replace(O, " or ($1)").substring(4) : "(" + t + ")"
            }
            function s(e, t, n, r, o, i, a, s, c, l) {
                for (var f, d = 0, p = t; d < R; ++d)
                    switch (f = L[d].call(u, e, p, n, r, o, i, a, s, c, l)) {
                    case void 0:
                    case !1:
                    case !0:
                    case null:
                        break;
                    default:
                        p = f
                    }
                if (p !== t)
                    return p
            }
            function c(e) {
                return void 0 !== (e = e.prefix) && (N = null,
                e ? "function" !== typeof e ? I = 1 : (I = 2,
                N = e) : I = 0),
                c
            }
            function u(e, n) {
                var r = e;
                if (33 > r.charCodeAt(0) && (r = r.trim()),
                r = [r],
                0 < R) {
                    var o = s(-1, n, r, r, x, P, 0, 0, 0, 0);
                    void 0 !== o && "string" === typeof o && (n = o)
                }
                var i = t(C, r, n, 0, 0);
                return 0 < R && (void 0 !== (o = s(-2, i, r, r, x, P, i.length, 0, 0, 0)) && (i = o)),
                "",
                A = 0,
                P = x = 1,
                i
            }
            var l = /^\0+/g
              , f = /[\0\r\f]/g
              , d = /: */g
              , p = /zoo|gra/
              , g = /([,: ])(transform)/g
              , h = /,\r+?/g
              , v = /([\t\r\n ])*\f?&/g
              , m = /@(k\w+)\s*(\S*)\s*/
              , y = /::(place)/g
              , b = /:(read-only)/g
              , S = /[svh]\w+-[tblr]{2}/
              , w = /\(\s*(.*)\s*\)/g
              , O = /([\s\S]*?);/g
              , E = /-self|flex-/g
              , T = /[^]*?(:[rp][el]a[\w-]+)[^]*/
              , _ = /stretch|:\s*\w+\-(?:conte|avail)/
              , k = /([^-])(image-set\()/
              , P = 1
              , x = 1
              , A = 0
              , I = 1
              , C = []
              , L = []
              , R = 0
              , N = null
              , D = 0;
            return u.use = function e(t) {
                switch (t) {
                case void 0:
                case null:
                    R = L.length = 0;
                    break;
                default:
                    if ("function" === typeof t)
                        L[R++] = t;
                    else if ("object" === typeof t)
                        for (var n = 0, r = t.length; n < r; ++n)
                            e(t[n]);
                    else
                        D = 0 | !!t
                }
                return e
            }
            ,
            u.set = c,
            void 0 !== e && c(e),
            u
        }
          , c = n(351)
          , u = n(2717)
          , l = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|inert|itemProp|itemScope|itemType|itemID|itemRef|on|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/
          , f = (0,
        u.Z)((function(e) {
            return l.test(e) || 111 === e.charCodeAt(0) && 110 === e.charCodeAt(1) && e.charCodeAt(2) < 91
        }
        ))
          , d = n(8679)
          , p = n.n(d)
          , g = n(4155);
        function h() {
            return (h = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }
            ).apply(this, arguments)
        }
        var v = function(e, t) {
            for (var n = [e[0]], r = 0, o = t.length; r < o; r += 1)
                n.push(t[r], e[r + 1]);
            return n
        }
          , m = function(e) {
            return null !== e && "object" == typeof e && "[object Object]" === (e.toString ? e.toString() : Object.prototype.toString.call(e)) && !(0,
            r.typeOf)(e)
        }
          , y = Object.freeze([])
          , b = Object.freeze({});
        function S(e) {
            return "function" == typeof e
        }
        function w(e) {
            return e.displayName || e.name || "Component"
        }
        function O(e) {
            return e && "string" == typeof e.styledComponentId
        }
        var E = "undefined" != typeof g && (g.env.REACT_APP_SC_ATTR || g.env.SC_ATTR) || "data-styled"
          , T = "undefined" != typeof window && "HTMLElement"in window
          , _ = Boolean("boolean" == typeof SC_DISABLE_SPEEDY ? SC_DISABLE_SPEEDY : "undefined" != typeof g && void 0 !== g.env.REACT_APP_SC_DISABLE_SPEEDY && "" !== g.env.REACT_APP_SC_DISABLE_SPEEDY ? "false" !== g.env.REACT_APP_SC_DISABLE_SPEEDY && g.env.REACT_APP_SC_DISABLE_SPEEDY : "undefined" != typeof g && void 0 !== g.env.SC_DISABLE_SPEEDY && "" !== g.env.SC_DISABLE_SPEEDY && ("false" !== g.env.SC_DISABLE_SPEEDY && g.env.SC_DISABLE_SPEEDY))
          , k = {};
        function P(e) {
            for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
                n[r - 1] = arguments[r];
            throw new Error("An error occurred. See https://git.io/JUIaE#" + e + " for more information." + (n.length > 0 ? " Args: " + n.join(", ") : ""))
        }
        var x = function() {
            function e(e) {
                this.groupSizes = new Uint32Array(512),
                this.length = 512,
                this.tag = e
            }
            var t = e.prototype;
            return t.indexOfGroup = function(e) {
                for (var t = 0, n = 0; n < e; n++)
                    t += this.groupSizes[n];
                return t
            }
            ,
            t.insertRules = function(e, t) {
                if (e >= this.groupSizes.length) {
                    for (var n = this.groupSizes, r = n.length, o = r; e >= o; )
                        (o <<= 1) < 0 && P(16, "" + e);
                    this.groupSizes = new Uint32Array(o),
                    this.groupSizes.set(n),
                    this.length = o;
                    for (var i = r; i < o; i++)
                        this.groupSizes[i] = 0
                }
                for (var a = this.indexOfGroup(e + 1), s = 0, c = t.length; s < c; s++)
                    this.tag.insertRule(a, t[s]) && (this.groupSizes[e]++,
                    a++)
            }
            ,
            t.clearGroup = function(e) {
                if (e < this.length) {
                    var t = this.groupSizes[e]
                      , n = this.indexOfGroup(e)
                      , r = n + t;
                    this.groupSizes[e] = 0;
                    for (var o = n; o < r; o++)
                        this.tag.deleteRule(n)
                }
            }
            ,
            t.getGroup = function(e) {
                var t = "";
                if (e >= this.length || 0 === this.groupSizes[e])
                    return t;
                for (var n = this.groupSizes[e], r = this.indexOfGroup(e), o = r + n, i = r; i < o; i++)
                    t += this.tag.getRule(i) + "/*!sc*/\n";
                return t
            }
            ,
            e
        }()
          , A = new Map
          , I = new Map
          , C = 1
          , L = function(e) {
            if (A.has(e))
                return A.get(e);
            for (; I.has(C); )
                C++;
            var t = C++;
            return A.set(e, t),
            I.set(t, e),
            t
        }
          , R = function(e) {
            return I.get(e)
        }
          , N = function(e, t) {
            t >= C && (C = t + 1),
            A.set(e, t),
            I.set(t, e)
        }
          , D = "style[" + E + '][data-styled-version="5.3.3"]'
          , j = new RegExp("^" + E + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')
          , M = function(e, t, n) {
            for (var r, o = n.split(","), i = 0, a = o.length; i < a; i++)
                (r = o[i]) && e.registerName(t, r)
        }
          , U = function(e, t) {
            for (var n = (t.textContent || "").split("/*!sc*/\n"), r = [], o = 0, i = n.length; o < i; o++) {
                var a = n[o].trim();
                if (a) {
                    var s = a.match(j);
                    if (s) {
                        var c = 0 | parseInt(s[1], 10)
                          , u = s[2];
                        0 !== c && (N(u, c),
                        M(e, u, s[3]),
                        e.getTag().insertRules(c, r)),
                        r.length = 0
                    } else
                        r.push(a)
                }
            }
        }
          , F = function() {
            return "undefined" != typeof window && void 0 !== window.__webpack_nonce__ ? window.__webpack_nonce__ : null
        }
          , Z = function(e) {
            var t = document.head
              , n = e || t
              , r = document.createElement("style")
              , o = function(e) {
                for (var t = e.childNodes, n = t.length; n >= 0; n--) {
                    var r = t[n];
                    if (r && 1 === r.nodeType && r.hasAttribute(E))
                        return r
                }
            }(n)
              , i = void 0 !== o ? o.nextSibling : null;
            r.setAttribute(E, "active"),
            r.setAttribute("data-styled-version", "5.3.3");
            var a = F();
            return a && r.setAttribute("nonce", a),
            n.insertBefore(r, i),
            r
        }
          , B = function() {
            function e(e) {
                var t = this.element = Z(e);
                t.appendChild(document.createTextNode("")),
                this.sheet = function(e) {
                    if (e.sheet)
                        return e.sheet;
                    for (var t = document.styleSheets, n = 0, r = t.length; n < r; n++) {
                        var o = t[n];
                        if (o.ownerNode === e)
                            return o
                    }
                    P(17)
                }(t),
                this.length = 0
            }
            var t = e.prototype;
            return t.insertRule = function(e, t) {
                try {
                    return this.sheet.insertRule(t, e),
                    this.length++,
                    !0
                } catch (e) {
                    return !1
                }
            }
            ,
            t.deleteRule = function(e) {
                this.sheet.deleteRule(e),
                this.length--
            }
            ,
            t.getRule = function(e) {
                var t = this.sheet.cssRules[e];
                return void 0 !== t && "string" == typeof t.cssText ? t.cssText : ""
            }
            ,
            e
        }()
          , G = function() {
            function e(e) {
                var t = this.element = Z(e);
                this.nodes = t.childNodes,
                this.length = 0
            }
            var t = e.prototype;
            return t.insertRule = function(e, t) {
                if (e <= this.length && e >= 0) {
                    var n = document.createTextNode(t)
                      , r = this.nodes[e];
                    return this.element.insertBefore(n, r || null),
                    this.length++,
                    !0
                }
                return !1
            }
            ,
            t.deleteRule = function(e) {
                this.element.removeChild(this.nodes[e]),
                this.length--
            }
            ,
            t.getRule = function(e) {
                return e < this.length ? this.nodes[e].textContent : ""
            }
            ,
            e
        }()
          , H = function() {
            function e(e) {
                this.rules = [],
                this.length = 0
            }
            var t = e.prototype;
            return t.insertRule = function(e, t) {
                return e <= this.length && (this.rules.splice(e, 0, t),
                this.length++,
                !0)
            }
            ,
            t.deleteRule = function(e) {
                this.rules.splice(e, 1),
                this.length--
            }
            ,
            t.getRule = function(e) {
                return e < this.length ? this.rules[e] : ""
            }
            ,
            e
        }()
          , W = T
          , z = {
            isServer: !T,
            useCSSOMInjection: !_
        }
          , V = function() {
            function e(e, t, n) {
                void 0 === e && (e = b),
                void 0 === t && (t = {}),
                this.options = h({}, z, {}, e),
                this.gs = t,
                this.names = new Map(n),
                this.server = !!e.isServer,
                !this.server && T && W && (W = !1,
                function(e) {
                    for (var t = document.querySelectorAll(D), n = 0, r = t.length; n < r; n++) {
                        var o = t[n];
                        o && "active" !== o.getAttribute(E) && (U(e, o),
                        o.parentNode && o.parentNode.removeChild(o))
                    }
                }(this))
            }
            e.registerId = function(e) {
                return L(e)
            }
            ;
            var t = e.prototype;
            return t.reconstructWithOptions = function(t, n) {
                return void 0 === n && (n = !0),
                new e(h({}, this.options, {}, t),this.gs,n && this.names || void 0)
            }
            ,
            t.allocateGSInstance = function(e) {
                return this.gs[e] = (this.gs[e] || 0) + 1
            }
            ,
            t.getTag = function() {
                return this.tag || (this.tag = (n = (t = this.options).isServer,
                r = t.useCSSOMInjection,
                o = t.target,
                e = n ? new H(o) : r ? new B(o) : new G(o),
                new x(e)));
                var e, t, n, r, o
            }
            ,
            t.hasNameForId = function(e, t) {
                return this.names.has(e) && this.names.get(e).has(t)
            }
            ,
            t.registerName = function(e, t) {
                if (L(e),
                this.names.has(e))
                    this.names.get(e).add(t);
                else {
                    var n = new Set;
                    n.add(t),
                    this.names.set(e, n)
                }
            }
            ,
            t.insertRules = function(e, t, n) {
                this.registerName(e, t),
                this.getTag().insertRules(L(e), n)
            }
            ,
            t.clearNames = function(e) {
                this.names.has(e) && this.names.get(e).clear()
            }
            ,
            t.clearRules = function(e) {
                this.getTag().clearGroup(L(e)),
                this.clearNames(e)
            }
            ,
            t.clearTag = function() {
                this.tag = void 0
            }
            ,
            t.toString = function() {
                return function(e) {
                    for (var t = e.getTag(), n = t.length, r = "", o = 0; o < n; o++) {
                        var i = R(o);
                        if (void 0 !== i) {
                            var a = e.names.get(i)
                              , s = t.getGroup(o);
                            if (a && s && a.size) {
                                var c = E + ".g" + o + '[id="' + i + '"]'
                                  , u = "";
                                void 0 !== a && a.forEach((function(e) {
                                    e.length > 0 && (u += e + ",")
                                }
                                )),
                                r += "" + s + c + '{content:"' + u + '"}/*!sc*/\n'
                            }
                        }
                    }
                    return r
                }(this)
            }
            ,
            e
        }()
          , K = /(a)(d)/gi
          , q = function(e) {
            return String.fromCharCode(e + (e > 25 ? 39 : 97))
        };
        function $(e) {
            var t, n = "";
            for (t = Math.abs(e); t > 52; t = t / 52 | 0)
                n = q(t % 52) + n;
            return (q(t % 52) + n).replace(K, "$1-$2")
        }
        var X = function(e, t) {
            for (var n = t.length; n; )
                e = 33 * e ^ t.charCodeAt(--n);
            return e
        }
          , Y = function(e) {
            return X(5381, e)
        };
        function J(e) {
            for (var t = 0; t < e.length; t += 1) {
                var n = e[t];
                if (S(n) && !O(n))
                    return !1
            }
            return !0
        }
        var Q = Y("5.3.3")
          , ee = function() {
            function e(e, t, n) {
                this.rules = e,
                this.staticRulesId = "",
                this.isStatic = (void 0 === n || n.isStatic) && J(e),
                this.componentId = t,
                this.baseHash = X(Q, t),
                this.baseStyle = n,
                V.registerId(t)
            }
            return e.prototype.generateAndInjectStyles = function(e, t, n) {
                var r = this.componentId
                  , o = [];
                if (this.baseStyle && o.push(this.baseStyle.generateAndInjectStyles(e, t, n)),
                this.isStatic && !n.hash)
                    if (this.staticRulesId && t.hasNameForId(r, this.staticRulesId))
                        o.push(this.staticRulesId);
                    else {
                        var i = ye(this.rules, e, t, n).join("")
                          , a = $(X(this.baseHash, i) >>> 0);
                        if (!t.hasNameForId(r, a)) {
                            var s = n(i, "." + a, void 0, r);
                            t.insertRules(r, a, s)
                        }
                        o.push(a),
                        this.staticRulesId = a
                    }
                else {
                    for (var c = this.rules.length, u = X(this.baseHash, n.hash), l = "", f = 0; f < c; f++) {
                        var d = this.rules[f];
                        if ("string" == typeof d)
                            l += d;
                        else if (d) {
                            var p = ye(d, e, t, n)
                              , g = Array.isArray(p) ? p.join("") : p;
                            u = X(u, g + f),
                            l += g
                        }
                    }
                    if (l) {
                        var h = $(u >>> 0);
                        if (!t.hasNameForId(r, h)) {
                            var v = n(l, "." + h, void 0, r);
                            t.insertRules(r, h, v)
                        }
                        o.push(h)
                    }
                }
                return o.join(" ")
            }
            ,
            e
        }()
          , te = /^\s*\/\/.*$/gm
          , ne = [":", "[", ".", "#"];
        function re(e) {
            var t, n, r, o, i = void 0 === e ? b : e, a = i.options, c = void 0 === a ? b : a, u = i.plugins, l = void 0 === u ? y : u, f = new s(c), d = [], p = function(e) {
                function t(t) {
                    if (t)
                        try {
                            e(t + "}")
                        } catch (e) {}
                }
                return function(n, r, o, i, a, s, c, u, l, f) {
                    switch (n) {
                    case 1:
                        if (0 === l && 64 === r.charCodeAt(0))
                            return e(r + ";"),
                            "";
                        break;
                    case 2:
                        if (0 === u)
                            return r + "/*|*/";
                        break;
                    case 3:
                        switch (u) {
                        case 102:
                        case 112:
                            return e(o[0] + r),
                            "";
                        default:
                            return r + (0 === f ? "/*|*/" : "")
                        }
                    case -2:
                        r.split("/*|*/}").forEach(t)
                    }
                }
            }((function(e) {
                d.push(e)
            }
            )), g = function(e, r, i) {
                return 0 === r && -1 !== ne.indexOf(i[n.length]) || i.match(o) ? e : "." + t
            };
            function h(e, i, a, s) {
                void 0 === s && (s = "&");
                var c = e.replace(te, "")
                  , u = i && a ? a + " " + i + " { " + c + " }" : c;
                return t = s,
                n = i,
                r = new RegExp("\\" + n + "\\b","g"),
                o = new RegExp("(\\" + n + "\\b){2,}"),
                f(a || !i ? "" : i, u)
            }
            return f.use([].concat(l, [function(e, t, o) {
                2 === e && o.length && o[0].lastIndexOf(n) > 0 && (o[0] = o[0].replace(r, g))
            }
            , p, function(e) {
                if (-2 === e) {
                    var t = d;
                    return d = [],
                    t
                }
            }
            ])),
            h.hash = l.length ? l.reduce((function(e, t) {
                return t.name || P(15),
                X(e, t.name)
            }
            ), 5381).toString() : "",
            h
        }
        var oe = o.default.createContext()
          , ie = (oe.Consumer,
        o.default.createContext())
          , ae = (ie.Consumer,
        new V)
          , se = re();
        function ce() {
            return (0,
            o.useContext)(oe) || ae
        }
        function ue() {
            return (0,
            o.useContext)(ie) || se
        }
        function le(e) {
            var t = (0,
            o.useState)(e.stylisPlugins)
              , n = t[0]
              , r = t[1]
              , i = ce()
              , s = (0,
            o.useMemo)((function() {
                var t = i;
                return e.sheet ? t = e.sheet : e.target && (t = t.reconstructWithOptions({
                    target: e.target
                }, !1)),
                e.disableCSSOMInjection && (t = t.reconstructWithOptions({
                    useCSSOMInjection: !1
                })),
                t
            }
            ), [e.disableCSSOMInjection, e.sheet, e.target])
              , c = (0,
            o.useMemo)((function() {
                return re({
                    options: {
                        prefix: !e.disableVendorPrefixes
                    },
                    plugins: n
                })
            }
            ), [e.disableVendorPrefixes, n]);
            return (0,
            o.useEffect)((function() {
                a()(n, e.stylisPlugins) || r(e.stylisPlugins)
            }
            ), [e.stylisPlugins]),
            o.default.createElement(oe.Provider, {
                value: s
            }, o.default.createElement(ie.Provider, {
                value: c
            }, e.children))
        }
        var fe = function() {
            function e(e, t) {
                var n = this;
                this.inject = function(e, t) {
                    void 0 === t && (t = se);
                    var r = n.name + t.hash;
                    e.hasNameForId(n.id, r) || e.insertRules(n.id, r, t(n.rules, r, "@keyframes"))
                }
                ,
                this.toString = function() {
                    return P(12, String(n.name))
                }
                ,
                this.name = e,
                this.id = "sc-keyframes-" + e,
                this.rules = t
            }
            return e.prototype.getName = function(e) {
                return void 0 === e && (e = se),
                this.name + e.hash
            }
            ,
            e
        }()
          , de = /([A-Z])/
          , pe = /([A-Z])/g
          , ge = /^ms-/
          , he = function(e) {
            return "-" + e.toLowerCase()
        };
        function ve(e) {
            return de.test(e) ? e.replace(pe, he).replace(ge, "-ms-") : e
        }
        var me = function(e) {
            return null == e || !1 === e || "" === e
        };
        function ye(e, t, n, r) {
            if (Array.isArray(e)) {
                for (var o, i = [], a = 0, s = e.length; a < s; a += 1)
                    "" !== (o = ye(e[a], t, n, r)) && (Array.isArray(o) ? i.push.apply(i, o) : i.push(o));
                return i
            }
            return me(e) ? "" : O(e) ? "." + e.styledComponentId : S(e) ? "function" != typeof (u = e) || u.prototype && u.prototype.isReactComponent || !t ? e : ye(e(t), t, n, r) : e instanceof fe ? n ? (e.inject(n, r),
            e.getName(r)) : e : m(e) ? function e(t, n) {
                var r, o, i = [];
                for (var a in t)
                    t.hasOwnProperty(a) && !me(t[a]) && (Array.isArray(t[a]) && t[a].isCss || S(t[a]) ? i.push(ve(a) + ":", t[a], ";") : m(t[a]) ? i.push.apply(i, e(t[a], a)) : i.push(ve(a) + ": " + (r = a,
                    (null == (o = t[a]) || "boolean" == typeof o || "" === o ? "" : "number" != typeof o || 0 === o || r in c.Z ? String(o).trim() : o + "px") + ";")));
                return n ? [n + " {"].concat(i, ["}"]) : i
            }(e) : e.toString();
            var u
        }
        var be = function(e) {
            return Array.isArray(e) && (e.isCss = !0),
            e
        };
        function Se(e) {
            for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
                n[r - 1] = arguments[r];
            return S(e) || m(e) ? be(ye(v(y, [e].concat(n)))) : 0 === n.length && 1 === e.length && "string" == typeof e[0] ? e : be(ye(v(e, n)))
        }
        new Set;
        var we = function(e, t, n) {
            return void 0 === n && (n = b),
            e.theme !== n.theme && e.theme || t || n.theme
        }
          , Oe = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g
          , Ee = /(^-|-$)/g;
        function Te(e) {
            return e.replace(Oe, "-").replace(Ee, "")
        }
        var _e = function(e) {
            return $(Y(e) >>> 0)
        };
        function ke(e) {
            return "string" == typeof e && !0
        }
        var Pe = function(e) {
            return "function" == typeof e || "object" == typeof e && null !== e && !Array.isArray(e)
        }
          , xe = function(e) {
            return "__proto__" !== e && "constructor" !== e && "prototype" !== e
        };
        function Ae(e, t, n) {
            var r = e[n];
            Pe(t) && Pe(r) ? Ie(r, t) : e[n] = t
        }
        function Ie(e) {
            for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
                n[r - 1] = arguments[r];
            for (var o = 0, i = n; o < i.length; o++) {
                var a = i[o];
                if (Pe(a))
                    for (var s in a)
                        xe(s) && Ae(e, a[s], s)
            }
            return e
        }
        var Ce = o.default.createContext();
        Ce.Consumer;
        function Le(e) {
            var t = (0,
            o.useContext)(Ce)
              , n = (0,
            o.useMemo)((function() {
                return function(e, t) {
                    return e ? S(e) ? e(t) : Array.isArray(e) || "object" != typeof e ? P(8) : t ? h({}, t, {}, e) : e : P(14)
                }(e.theme, t)
            }
            ), [e.theme, t]);
            return e.children ? o.default.createElement(Ce.Provider, {
                value: n
            }, e.children) : null
        }
        var Re = {};
        function Ne(e, t, n) {
            var r = O(e)
              , i = !ke(e)
              , a = t.attrs
              , s = void 0 === a ? y : a
              , c = t.componentId
              , u = void 0 === c ? function(e, t) {
                var n = "string" != typeof e ? "sc" : Te(e);
                Re[n] = (Re[n] || 0) + 1;
                var r = n + "-" + _e("5.3.3" + n + Re[n]);
                return t ? t + "-" + r : r
            }(t.displayName, t.parentComponentId) : c
              , l = t.displayName
              , d = void 0 === l ? function(e) {
                return ke(e) ? "styled." + e : "Styled(" + w(e) + ")"
            }(e) : l
              , g = t.displayName && t.componentId ? Te(t.displayName) + "-" + t.componentId : t.componentId || u
              , v = r && e.attrs ? Array.prototype.concat(e.attrs, s).filter(Boolean) : s
              , m = t.shouldForwardProp;
            r && e.shouldForwardProp && (m = t.shouldForwardProp ? function(n, r, o) {
                return e.shouldForwardProp(n, r, o) && t.shouldForwardProp(n, r, o)
            }
            : e.shouldForwardProp);
            var E, T = new ee(n,g,r ? e.componentStyle : void 0), _ = T.isStatic && 0 === s.length, k = function(e, t) {
                return function(e, t, n, r) {
                    var i = e.attrs
                      , a = e.componentStyle
                      , s = e.defaultProps
                      , c = e.foldedComponentIds
                      , u = e.shouldForwardProp
                      , l = e.styledComponentId
                      , d = e.target
                      , p = function(e, t, n) {
                        void 0 === e && (e = b);
                        var r = h({}, t, {
                            theme: e
                        })
                          , o = {};
                        return n.forEach((function(e) {
                            var t, n, i, a = e;
                            for (t in S(a) && (a = a(r)),
                            a)
                                r[t] = o[t] = "className" === t ? (n = o[t],
                                i = a[t],
                                n && i ? n + " " + i : n || i) : a[t]
                        }
                        )),
                        [r, o]
                    }(we(t, (0,
                    o.useContext)(Ce), s) || b, t, i)
                      , g = p[0]
                      , v = p[1]
                      , m = function(e, t, n, r) {
                        var o = ce()
                          , i = ue();
                        return t ? e.generateAndInjectStyles(b, o, i) : e.generateAndInjectStyles(n, o, i)
                    }(a, r, g)
                      , y = n
                      , w = v.$as || t.$as || v.as || t.as || d
                      , O = ke(w)
                      , E = v !== t ? h({}, t, {}, v) : t
                      , T = {};
                    for (var _ in E)
                        "$" !== _[0] && "as" !== _ && ("forwardedAs" === _ ? T.as = E[_] : (u ? u(_, f, w) : !O || f(_)) && (T[_] = E[_]));
                    return t.style && v.style !== t.style && (T.style = h({}, t.style, {}, v.style)),
                    T.className = Array.prototype.concat(c, l, m !== l ? m : null, t.className, v.className).filter(Boolean).join(" "),
                    T.ref = y,
                    (0,
                    o.createElement)(w, T)
                }(E, e, t, _)
            };
            return k.displayName = d,
            (E = o.default.forwardRef(k)).attrs = v,
            E.componentStyle = T,
            E.displayName = d,
            E.shouldForwardProp = m,
            E.foldedComponentIds = r ? Array.prototype.concat(e.foldedComponentIds, e.styledComponentId) : y,
            E.styledComponentId = g,
            E.target = r ? e.target : e,
            E.withComponent = function(e) {
                var r = t.componentId
                  , o = function(e, t) {
                    if (null == e)
                        return {};
                    var n, r, o = {}, i = Object.keys(e);
                    for (r = 0; r < i.length; r++)
                        n = i[r],
                        t.indexOf(n) >= 0 || (o[n] = e[n]);
                    return o
                }(t, ["componentId"])
                  , i = r && r + "-" + (ke(e) ? e : Te(w(e)));
                return Ne(e, h({}, o, {
                    attrs: v,
                    componentId: i
                }), n)
            }
            ,
            Object.defineProperty(E, "defaultProps", {
                get: function() {
                    return this._foldedDefaultProps
                },
                set: function(t) {
                    this._foldedDefaultProps = r ? Ie({}, e.defaultProps, t) : t
                }
            }),
            E.toString = function() {
                return "." + E.styledComponentId
            }
            ,
            i && p()(E, e, {
                attrs: !0,
                componentStyle: !0,
                displayName: !0,
                foldedComponentIds: !0,
                shouldForwardProp: !0,
                styledComponentId: !0,
                target: !0,
                withComponent: !0
            }),
            E
        }
        var De = function(e) {
            return function e(t, n, o) {
                if (void 0 === o && (o = b),
                !(0,
                r.isValidElementType)(n))
                    return P(1, String(n));
                var i = function() {
                    return t(n, o, Se.apply(void 0, arguments))
                };
                return i.withConfig = function(r) {
                    return e(t, n, h({}, o, {}, r))
                }
                ,
                i.attrs = function(r) {
                    return e(t, n, h({}, o, {
                        attrs: Array.prototype.concat(o.attrs, r).filter(Boolean)
                    }))
                }
                ,
                i
            }(Ne, e)
        };
        ["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "textPath", "tspan"].forEach((function(e) {
            De[e] = De(e)
        }
        ));
        var je = function() {
            function e(e, t) {
                this.rules = e,
                this.componentId = t,
                this.isStatic = J(e),
                V.registerId(this.componentId + 1)
            }
            var t = e.prototype;
            return t.createStyles = function(e, t, n, r) {
                var o = r(ye(this.rules, t, n, r).join(""), "")
                  , i = this.componentId + e;
                n.insertRules(i, i, o)
            }
            ,
            t.removeStyles = function(e, t) {
                t.clearRules(this.componentId + e)
            }
            ,
            t.renderStyles = function(e, t, n, r) {
                e > 2 && V.registerId(this.componentId + e),
                this.removeStyles(e, n),
                this.createStyles(e, t, n, r)
            }
            ,
            e
        }();
        function Me(e) {
            for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
                n[r - 1] = arguments[r];
            var i = Se.apply(void 0, [e].concat(n))
              , a = "sc-global-" + _e(JSON.stringify(i))
              , s = new je(i,a);
            function c(e) {
                var t = ce()
                  , n = ue()
                  , r = (0,
                o.useContext)(Ce)
                  , i = (0,
                o.useRef)(t.allocateGSInstance(a)).current;
                return t.server && u(i, e, t, r, n),
                (0,
                o.useLayoutEffect)((function() {
                    if (!t.server)
                        return u(i, e, t, r, n),
                        function() {
                            return s.removeStyles(i, t)
                        }
                }
                ), [i, e, t, r, n]),
                null
            }
            function u(e, t, n, r, o) {
                if (s.isStatic)
                    s.renderStyles(e, k, n, o);
                else {
                    var i = h({}, t, {
                        theme: we(t, r, c.defaultProps)
                    });
                    s.renderStyles(e, i, n, o)
                }
            }
            return o.default.memo(c)
        }
        function Ue(e) {
            for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
                n[r - 1] = arguments[r];
            var o = Se.apply(void 0, [e].concat(n)).join("")
              , i = _e(o);
            return new fe(i,o)
        }
        !function() {
            function e() {
                var e = this;
                this._emitSheetCSS = function() {
                    var t = e.instance.toString();
                    if (!t)
                        return "";
                    var n = F();
                    return "<style " + [n && 'nonce="' + n + '"', E + '="true"', 'data-styled-version="5.3.3"'].filter(Boolean).join(" ") + ">" + t + "</style>"
                }
                ,
                this.getStyleTags = function() {
                    return e.sealed ? P(2) : e._emitSheetCSS()
                }
                ,
                this.getStyleElement = function() {
                    var t;
                    if (e.sealed)
                        return P(2);
                    var n = ((t = {})[E] = "",
                    t["data-styled-version"] = "5.3.3",
                    t.dangerouslySetInnerHTML = {
                        __html: e.instance.toString()
                    },
                    t)
                      , r = F();
                    return r && (n.nonce = r),
                    [o.default.createElement("style", h({}, n, {
                        key: "sc-0-0"
                    }))]
                }
                ,
                this.seal = function() {
                    e.sealed = !0
                }
                ,
                this.instance = new V({
                    isServer: !0
                }),
                this.sealed = !1
            }
            var t = e.prototype;
            t.collectStyles = function(e) {
                return this.sealed ? P(2) : o.default.createElement(le, {
                    sheet: this.instance
                }, e)
            }
            ,
            t.interleaveWithNodeStream = function(e) {
                return P(3)
            }
        }();
        var Fe = De
    },
    907: function(e, t, n) {
        "use strict";
        function r(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++)
                r[n] = e[n];
            return r
        }
        n.d(t, {
            Z: function() {
                return r
            }
        })
    },
    3878: function(e, t, n) {
        "use strict";
        function r(e) {
            if (Array.isArray(e))
                return e
        }
        n.d(t, {
            Z: function() {
                return r
            }
        })
    },
    5671: function(e, t, n) {
        "use strict";
        function r(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        n.d(t, {
            Z: function() {
                return r
            }
        })
    },
    3144: function(e, t, n) {
        "use strict";
        n.d(t, {
            Z: function() {
                return i
            }
        });
        var r = n(3997);
        function o(e, t) {
            for (var n = 0; n < t.length; n++) {
                var o = t[n];
                o.enumerable = o.enumerable || !1,
                o.configurable = !0,
                "value"in o && (o.writable = !0),
                Object.defineProperty(e, (0,
                r.Z)(o.key), o)
            }
        }
        function i(e, t, n) {
            return t && o(e.prototype, t),
            n && o(e, n),
            Object.defineProperty(e, "prototype", {
                writable: !1
            }),
            e
        }
    },
    4942: function(e, t, n) {
        "use strict";
        n.d(t, {
            Z: function() {
                return o
            }
        });
        var r = n(3997);
        function o(e, t, n) {
            return (t = (0,
            r.Z)(t))in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
    },
    7462: function(e, t, n) {
        "use strict";
        function r() {
            return (r = Object.assign ? Object.assign.bind() : function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            }
            ).apply(this, arguments)
        }
        n.d(t, {
            Z: function() {
                return r
            }
        })
    },
    2531: function(e, t, n) {
        "use strict";
        function r(e, t) {
            return (r = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        function o(e, t) {
            if ("function" !== typeof t && null !== t)
                throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }),
            Object.defineProperty(e, "prototype", {
                writable: !1
            }),
            t && r(e, t)
        }
        n.d(t, {
            Z: function() {
                return o
            }
        })
    },
    9199: function(e, t, n) {
        "use strict";
        function r(e) {
            if ("undefined" !== typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"])
                return Array.from(e)
        }
        n.d(t, {
            Z: function() {
                return r
            }
        })
    },
    5267: function(e, t, n) {
        "use strict";
        function r() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }
        n.d(t, {
            Z: function() {
                return r
            }
        })
    },
    7685: function(e, t, n) {
        "use strict";
        n.d(t, {
            Z: function() {
                return a
            }
        });
        var r = n(3878);
        var o = n(181)
          , i = n(5267);
        function a(e, t) {
            return (0,
            r.Z)(e) || function(e, t) {
                var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (null != n) {
                    var r, o, i, a, s = [], c = !0, u = !1;
                    try {
                        if (i = (n = n.call(e)).next,
                        0 === t) {
                            if (Object(n) !== n)
                                return;
                            c = !1
                        } else
                            for (; !(c = (r = i.call(n)).done) && (s.push(r.value),
                            s.length !== t); c = !0)
                                ;
                    } catch (l) {
                        u = !0,
                        o = l
                    } finally {
                        try {
                            if (!c && null != n.return && (a = n.return(),
                            Object(a) !== a))
                                return
                        } finally {
                            if (u)
                                throw o
                        }
                    }
                    return s
                }
            }(e, t) || (0,
            o.Z)(e, t) || (0,
            i.Z)()
        }
    },
    3997: function(e, t, n) {
        "use strict";
        n.d(t, {
            Z: function() {
                return o
            }
        });
        var r = n(1002);
        function o(e) {
            var t = function(e, t) {
                if ("object" !== (0,
                r.Z)(e) || null === e)
                    return e;
                var n = e[Symbol.toPrimitive];
                if (void 0 !== n) {
                    var o = n.call(e, t || "default");
                    if ("object" !== (0,
                    r.Z)(o))
                        return o;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return ("string" === t ? String : Number)(e)
            }(e, "string");
            return "symbol" === (0,
            r.Z)(t) ? t : String(t)
        }
    },
    1002: function(e, t, n) {
        "use strict";
        function r(e) {
            return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        n.d(t, {
            Z: function() {
                return r
            }
        })
    },
    181: function(e, t, n) {
        "use strict";
        n.d(t, {
            Z: function() {
                return o
            }
        });
        var r = n(907);
        function o(e, t) {
            if (e) {
                if ("string" === typeof e)
                    return (0,
                    r.Z)(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                return "Object" === n && e.constructor && (n = e.constructor.name),
                "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? (0,
                r.Z)(e, t) : void 0
            }
        }
    },
    3978: function(e, t, n) {
        "use strict";
        n.d(t, {
            ZP: function() {
                return be
            },
            t: function() {
                return ye
            }
        });
        var r = n(1002)
          , o = n(5671)
          , i = n(3144);
        function a(e) {
            if (void 0 === e)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }
        var s = n(2531);
        function c(e, t) {
            if (t && ("object" === (0,
            r.Z)(t) || "function" === typeof t))
                return t;
            if (void 0 !== t)
                throw new TypeError("Derived constructors may only return object or undefined");
            return a(e)
        }
        function u(e) {
            return (u = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        var l = n(4942)
          , f = n(3878)
          , d = n(9199)
          , p = n(181)
          , g = n(5267);
        function h(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, r)
            }
            return n
        }
        function v(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? h(Object(n), !0).forEach((function(t) {
                    (0,
                    l.Z)(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : h(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        var m = {
            type: "logger",
            log: function(e) {
                this.output("log", e)
            },
            warn: function(e) {
                this.output("warn", e)
            },
            error: function(e) {
                this.output("error", e)
            },
            output: function(e, t) {
                console && console[e] && console[e].apply(console, t)
            }
        }
          , y = new (function() {
            function e(t) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                (0,
                o.Z)(this, e),
                this.init(t, n)
            }
            return (0,
            i.Z)(e, [{
                key: "init",
                value: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    this.prefix = t.prefix || "i18next:",
                    this.logger = e || m,
                    this.options = t,
                    this.debug = t.debug
                }
            }, {
                key: "setDebug",
                value: function(e) {
                    this.debug = e
                }
            }, {
                key: "log",
                value: function() {
                    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                        t[n] = arguments[n];
                    return this.forward(t, "log", "", !0)
                }
            }, {
                key: "warn",
                value: function() {
                    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                        t[n] = arguments[n];
                    return this.forward(t, "warn", "", !0)
                }
            }, {
                key: "error",
                value: function() {
                    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                        t[n] = arguments[n];
                    return this.forward(t, "error", "")
                }
            }, {
                key: "deprecate",
                value: function() {
                    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                        t[n] = arguments[n];
                    return this.forward(t, "warn", "WARNING DEPRECATED: ", !0)
                }
            }, {
                key: "forward",
                value: function(e, t, n, r) {
                    return r && !this.debug ? null : ("string" === typeof e[0] && (e[0] = "".concat(n).concat(this.prefix, " ").concat(e[0])),
                    this.logger[t](e))
                }
            }, {
                key: "create",
                value: function(t) {
                    return new e(this.logger,v(v({}, {
                        prefix: "".concat(this.prefix, ":").concat(t, ":")
                    }), this.options))
                }
            }]),
            e
        }())
          , b = function() {
            function e() {
                (0,
                o.Z)(this, e),
                this.observers = {}
            }
            return (0,
            i.Z)(e, [{
                key: "on",
                value: function(e, t) {
                    var n = this;
                    return e.split(" ").forEach((function(e) {
                        n.observers[e] = n.observers[e] || [],
                        n.observers[e].push(t)
                    }
                    )),
                    this
                }
            }, {
                key: "off",
                value: function(e, t) {
                    this.observers[e] && (t ? this.observers[e] = this.observers[e].filter((function(e) {
                        return e !== t
                    }
                    )) : delete this.observers[e])
                }
            }, {
                key: "emit",
                value: function(e) {
                    for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
                        n[r - 1] = arguments[r];
                    if (this.observers[e]) {
                        var o = [].concat(this.observers[e]);
                        o.forEach((function(e) {
                            e.apply(void 0, n)
                        }
                        ))
                    }
                    if (this.observers["*"]) {
                        var i = [].concat(this.observers["*"]);
                        i.forEach((function(t) {
                            t.apply(t, [e].concat(n))
                        }
                        ))
                    }
                }
            }]),
            e
        }();
        function S() {
            var e, t, n = new Promise((function(n, r) {
                e = n,
                t = r
            }
            ));
            return n.resolve = e,
            n.reject = t,
            n
        }
        function w(e) {
            return null == e ? "" : "" + e
        }
        function O(e, t, n) {
            e.forEach((function(e) {
                t[e] && (n[e] = t[e])
            }
            ))
        }
        function E(e, t, n) {
            function r(e) {
                return e && e.indexOf("###") > -1 ? e.replace(/###/g, ".") : e
            }
            function o() {
                return !e || "string" === typeof e
            }
            for (var i = "string" !== typeof t ? [].concat(t) : t.split("."); i.length > 1; ) {
                if (o())
                    return {};
                var a = r(i.shift());
                !e[a] && n && (e[a] = new n),
                e = Object.prototype.hasOwnProperty.call(e, a) ? e[a] : {}
            }
            return o() ? {} : {
                obj: e,
                k: r(i.shift())
            }
        }
        function T(e, t, n) {
            var r = E(e, t, Object);
            r.obj[r.k] = n
        }
        function _(e, t) {
            var n = E(e, t)
              , r = n.obj
              , o = n.k;
            if (r)
                return r[o]
        }
        function k(e, t, n) {
            var r = _(e, n);
            return void 0 !== r ? r : _(t, n)
        }
        function P(e, t, n) {
            for (var r in t)
                "__proto__" !== r && "constructor" !== r && (r in e ? "string" === typeof e[r] || e[r]instanceof String || "string" === typeof t[r] || t[r]instanceof String ? n && (e[r] = t[r]) : P(e[r], t[r], n) : e[r] = t[r]);
            return e
        }
        function x(e) {
            return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&")
        }
        var A = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;",
            "/": "&#x2F;"
        };
        function I(e) {
            return "string" === typeof e ? e.replace(/[&<>"'\/]/g, (function(e) {
                return A[e]
            }
            )) : e
        }
        var C = "undefined" !== typeof window && window.navigator && window.navigator.userAgent && window.navigator.userAgent.indexOf("MSIE") > -1
          , L = [" ", ",", "?", "!", ";"];
        function R(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, r)
            }
            return n
        }
        function N(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? R(Object(n), !0).forEach((function(t) {
                    (0,
                    l.Z)(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : R(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        function D(e) {
            var t = function() {
                if ("undefined" === typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" === typeof Proxy)
                    return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
                    ))),
                    !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var n, r = u(e);
                if (t) {
                    var o = u(this).constructor;
                    n = Reflect.construct(r, arguments, o)
                } else
                    n = r.apply(this, arguments);
                return c(this, n)
            }
        }
        function j(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ".";
            if (e) {
                if (e[t])
                    return e[t];
                for (var r = t.split(n), o = e, i = 0; i < r.length; ++i) {
                    if (!o)
                        return;
                    if ("string" === typeof o[r[i]] && i + 1 < r.length)
                        return;
                    if (void 0 === o[r[i]]) {
                        for (var a = 2, s = r.slice(i, i + a).join(n), c = o[s]; void 0 === c && r.length > i + a; )
                            a++,
                            c = o[s = r.slice(i, i + a).join(n)];
                        if (void 0 === c)
                            return;
                        if (t.endsWith(s)) {
                            if ("string" === typeof c)
                                return c;
                            if (s && "string" === typeof c[s])
                                return c[s]
                        }
                        var u = r.slice(i + a).join(n);
                        return u ? j(c, u, n) : void 0
                    }
                    o = o[r[i]]
                }
                return o
            }
        }
        var M = function(e) {
            (0,
            s.Z)(n, e);
            var t = D(n);
            function n(e) {
                var r, i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                    ns: ["translation"],
                    defaultNS: "translation"
                };
                return (0,
                o.Z)(this, n),
                r = t.call(this),
                C && b.call(a(r)),
                r.data = e || {},
                r.options = i,
                void 0 === r.options.keySeparator && (r.options.keySeparator = "."),
                void 0 === r.options.ignoreJSONStructure && (r.options.ignoreJSONStructure = !0),
                r
            }
            return (0,
            i.Z)(n, [{
                key: "addNamespaces",
                value: function(e) {
                    this.options.ns.indexOf(e) < 0 && this.options.ns.push(e)
                }
            }, {
                key: "removeNamespaces",
                value: function(e) {
                    var t = this.options.ns.indexOf(e);
                    t > -1 && this.options.ns.splice(t, 1)
                }
            }, {
                key: "getResource",
                value: function(e, t, n) {
                    var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}
                      , o = void 0 !== r.keySeparator ? r.keySeparator : this.options.keySeparator
                      , i = void 0 !== r.ignoreJSONStructure ? r.ignoreJSONStructure : this.options.ignoreJSONStructure
                      , a = [e, t];
                    n && "string" !== typeof n && (a = a.concat(n)),
                    n && "string" === typeof n && (a = a.concat(o ? n.split(o) : n)),
                    e.indexOf(".") > -1 && (a = e.split("."));
                    var s = _(this.data, a);
                    return s || !i || "string" !== typeof n ? s : j(this.data && this.data[e] && this.data[e][t], n, o)
                }
            }, {
                key: "addResource",
                value: function(e, t, n, r) {
                    var o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {
                        silent: !1
                    }
                      , i = this.options.keySeparator;
                    void 0 === i && (i = ".");
                    var a = [e, t];
                    n && (a = a.concat(i ? n.split(i) : n)),
                    e.indexOf(".") > -1 && (r = t,
                    t = (a = e.split("."))[1]),
                    this.addNamespaces(t),
                    T(this.data, a, r),
                    o.silent || this.emit("added", e, t, n, r)
                }
            }, {
                key: "addResources",
                value: function(e, t, n) {
                    var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {
                        silent: !1
                    };
                    for (var o in n)
                        "string" !== typeof n[o] && "[object Array]" !== Object.prototype.toString.apply(n[o]) || this.addResource(e, t, o, n[o], {
                            silent: !0
                        });
                    r.silent || this.emit("added", e, t, n)
                }
            }, {
                key: "addResourceBundle",
                value: function(e, t, n, r, o) {
                    var i = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : {
                        silent: !1
                    }
                      , a = [e, t];
                    e.indexOf(".") > -1 && (r = n,
                    n = t,
                    t = (a = e.split("."))[1]),
                    this.addNamespaces(t);
                    var s = _(this.data, a) || {};
                    r ? P(s, n, o) : s = N(N({}, s), n),
                    T(this.data, a, s),
                    i.silent || this.emit("added", e, t, n)
                }
            }, {
                key: "removeResourceBundle",
                value: function(e, t) {
                    this.hasResourceBundle(e, t) && delete this.data[e][t],
                    this.removeNamespaces(t),
                    this.emit("removed", e, t)
                }
            }, {
                key: "hasResourceBundle",
                value: function(e, t) {
                    return void 0 !== this.getResource(e, t)
                }
            }, {
                key: "getResourceBundle",
                value: function(e, t) {
                    return t || (t = this.options.defaultNS),
                    "v1" === this.options.compatibilityAPI ? N(N({}, {}), this.getResource(e, t)) : this.getResource(e, t)
                }
            }, {
                key: "getDataByLanguage",
                value: function(e) {
                    return this.data[e]
                }
            }, {
                key: "hasLanguageSomeTranslations",
                value: function(e) {
                    var t = this.getDataByLanguage(e);
                    return !!(t && Object.keys(t) || []).find((function(e) {
                        return t[e] && Object.keys(t[e]).length > 0
                    }
                    ))
                }
            }, {
                key: "toJSON",
                value: function() {
                    return this.data
                }
            }]),
            n
        }(b)
          , U = {
            processors: {},
            addPostProcessor: function(e) {
                this.processors[e.name] = e
            },
            handle: function(e, t, n, r, o) {
                var i = this;
                return e.forEach((function(e) {
                    i.processors[e] && (t = i.processors[e].process(t, n, r, o))
                }
                )),
                t
            }
        };
        function F(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, r)
            }
            return n
        }
        function Z(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? F(Object(n), !0).forEach((function(t) {
                    (0,
                    l.Z)(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : F(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        function B(e) {
            var t = function() {
                if ("undefined" === typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" === typeof Proxy)
                    return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
                    ))),
                    !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var n, r = u(e);
                if (t) {
                    var o = u(this).constructor;
                    n = Reflect.construct(r, arguments, o)
                } else
                    n = r.apply(this, arguments);
                return c(this, n)
            }
        }
        var G = {}
          , H = function(e) {
            (0,
            s.Z)(n, e);
            var t = B(n);
            function n(e) {
                var r, i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                return (0,
                o.Z)(this, n),
                r = t.call(this),
                C && b.call(a(r)),
                O(["resourceStore", "languageUtils", "pluralResolver", "interpolator", "backendConnector", "i18nFormat", "utils"], e, a(r)),
                r.options = i,
                void 0 === r.options.keySeparator && (r.options.keySeparator = "."),
                r.logger = y.create("translator"),
                r
            }
            return (0,
            i.Z)(n, [{
                key: "changeLanguage",
                value: function(e) {
                    e && (this.language = e)
                }
            }, {
                key: "exists",
                value: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                        interpolation: {}
                    };
                    if (void 0 === e || null === e)
                        return !1;
                    var n = this.resolve(e, t);
                    return n && void 0 !== n.res
                }
            }, {
                key: "extractFromKey",
                value: function(e, t) {
                    var n = void 0 !== t.nsSeparator ? t.nsSeparator : this.options.nsSeparator;
                    void 0 === n && (n = ":");
                    var r = void 0 !== t.keySeparator ? t.keySeparator : this.options.keySeparator
                      , o = t.ns || this.options.defaultNS || []
                      , i = n && e.indexOf(n) > -1
                      , a = !this.options.userDefinedKeySeparator && !t.keySeparator && !this.options.userDefinedNsSeparator && !t.nsSeparator && !function(e, t, n) {
                        t = t || "",
                        n = n || "";
                        var r = L.filter((function(e) {
                            return t.indexOf(e) < 0 && n.indexOf(e) < 0
                        }
                        ));
                        if (0 === r.length)
                            return !0;
                        var o = new RegExp("(".concat(r.map((function(e) {
                            return "?" === e ? "\\?" : e
                        }
                        )).join("|"), ")"))
                          , i = !o.test(e);
                        if (!i) {
                            var a = e.indexOf(n);
                            a > 0 && !o.test(e.substring(0, a)) && (i = !0)
                        }
                        return i
                    }(e, n, r);
                    if (i && !a) {
                        var s = e.match(this.interpolator.nestingRegexp);
                        if (s && s.length > 0)
                            return {
                                key: e,
                                namespaces: o
                            };
                        var c = e.split(n);
                        (n !== r || n === r && this.options.ns.indexOf(c[0]) > -1) && (o = c.shift()),
                        e = c.join(r)
                    }
                    return "string" === typeof o && (o = [o]),
                    {
                        key: e,
                        namespaces: o
                    }
                }
            }, {
                key: "translate",
                value: function(e, t, o) {
                    var i = this;
                    if ("object" !== (0,
                    r.Z)(t) && this.options.overloadTranslationOptionHandler && (t = this.options.overloadTranslationOptionHandler(arguments)),
                    t || (t = {}),
                    void 0 === e || null === e)
                        return "";
                    Array.isArray(e) || (e = [String(e)]);
                    var a = void 0 !== t.keySeparator ? t.keySeparator : this.options.keySeparator
                      , s = this.extractFromKey(e[e.length - 1], t)
                      , c = s.key
                      , u = s.namespaces
                      , l = u[u.length - 1]
                      , f = t.lng || this.language
                      , d = t.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
                    if (f && "cimode" === f.toLowerCase()) {
                        if (d) {
                            var p = t.nsSeparator || this.options.nsSeparator;
                            return l + p + c
                        }
                        return c
                    }
                    var g = this.resolve(e, t)
                      , h = g && g.res
                      , v = g && g.usedKey || c
                      , m = g && g.exactUsedKey || c
                      , y = Object.prototype.toString.apply(h)
                      , b = ["[object Number]", "[object Function]", "[object RegExp]"]
                      , S = void 0 !== t.joinArrays ? t.joinArrays : this.options.joinArrays
                      , w = !this.i18nFormat || this.i18nFormat.handleAsObject
                      , O = "string" !== typeof h && "boolean" !== typeof h && "number" !== typeof h;
                    if (w && h && O && b.indexOf(y) < 0 && ("string" !== typeof S || "[object Array]" !== y)) {
                        if (!t.returnObjects && !this.options.returnObjects)
                            return this.options.returnedObjectHandler || this.logger.warn("accessing an object - but returnObjects options is not enabled!"),
                            this.options.returnedObjectHandler ? this.options.returnedObjectHandler(v, h, Z(Z({}, t), {}, {
                                ns: u
                            })) : "key '".concat(c, " (").concat(this.language, ")' returned an object instead of string.");
                        if (a) {
                            var E = "[object Array]" === y
                              , T = E ? [] : {}
                              , _ = E ? m : v;
                            for (var k in h)
                                if (Object.prototype.hasOwnProperty.call(h, k)) {
                                    var P = "".concat(_).concat(a).concat(k);
                                    T[k] = this.translate(P, Z(Z({}, t), {
                                        joinArrays: !1,
                                        ns: u
                                    })),
                                    T[k] === P && (T[k] = h[k])
                                }
                            h = T
                        }
                    } else if (w && "string" === typeof S && "[object Array]" === y)
                        (h = h.join(S)) && (h = this.extendTranslation(h, e, t, o));
                    else {
                        var x = !1
                          , A = !1
                          , I = void 0 !== t.count && "string" !== typeof t.count
                          , C = n.hasDefaultValue(t)
                          , L = I ? this.pluralResolver.getSuffix(f, t.count, t) : ""
                          , R = t["defaultValue".concat(L)] || t.defaultValue;
                        !this.isValidLookup(h) && C && (x = !0,
                        h = R),
                        this.isValidLookup(h) || (A = !0,
                        h = c);
                        var N = t.missingKeyNoValueFallbackToKey || this.options.missingKeyNoValueFallbackToKey
                          , D = N && A ? void 0 : h
                          , j = C && R !== h && this.options.updateMissing;
                        if (A || x || j) {
                            if (this.logger.log(j ? "updateKey" : "missingKey", f, l, c, j ? R : h),
                            a) {
                                var M = this.resolve(c, Z(Z({}, t), {}, {
                                    keySeparator: !1
                                }));
                                M && M.res && this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.")
                            }
                            var U = []
                              , F = this.languageUtils.getFallbackCodes(this.options.fallbackLng, t.lng || this.language);
                            if ("fallback" === this.options.saveMissingTo && F && F[0])
                                for (var B = 0; B < F.length; B++)
                                    U.push(F[B]);
                            else
                                "all" === this.options.saveMissingTo ? U = this.languageUtils.toResolveHierarchy(t.lng || this.language) : U.push(t.lng || this.language);
                            var G = function(e, n, r) {
                                var o = C && r !== h ? r : D;
                                i.options.missingKeyHandler ? i.options.missingKeyHandler(e, l, n, o, j, t) : i.backendConnector && i.backendConnector.saveMissing && i.backendConnector.saveMissing(e, l, n, o, j, t),
                                i.emit("missingKey", e, l, n, h)
                            };
                            this.options.saveMissing && (this.options.saveMissingPlurals && I ? U.forEach((function(e) {
                                i.pluralResolver.getSuffixes(e, t).forEach((function(n) {
                                    G([e], c + n, t["defaultValue".concat(n)] || R)
                                }
                                ))
                            }
                            )) : G(U, c, R))
                        }
                        h = this.extendTranslation(h, e, t, g, o),
                        A && h === c && this.options.appendNamespaceToMissingKey && (h = "".concat(l, ":").concat(c)),
                        (A || x) && this.options.parseMissingKeyHandler && (h = "v1" !== this.options.compatibilityAPI ? this.options.parseMissingKeyHandler(c, x ? h : void 0) : this.options.parseMissingKeyHandler(h))
                    }
                    return h
                }
            }, {
                key: "extendTranslation",
                value: function(e, t, n, r, o) {
                    var i = this;
                    if (this.i18nFormat && this.i18nFormat.parse)
                        e = this.i18nFormat.parse(e, n, r.usedLng, r.usedNS, r.usedKey, {
                            resolved: r
                        });
                    else if (!n.skipInterpolation) {
                        n.interpolation && this.interpolator.init(Z(Z({}, n), {
                            interpolation: Z(Z({}, this.options.interpolation), n.interpolation)
                        }));
                        var a, s = "string" === typeof e && (n && n.interpolation && void 0 !== n.interpolation.skipOnVariables ? n.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables);
                        if (s) {
                            var c = e.match(this.interpolator.nestingRegexp);
                            a = c && c.length
                        }
                        var u = n.replace && "string" !== typeof n.replace ? n.replace : n;
                        if (this.options.interpolation.defaultVariables && (u = Z(Z({}, this.options.interpolation.defaultVariables), u)),
                        e = this.interpolator.interpolate(e, u, n.lng || this.language, n),
                        s) {
                            var l = e.match(this.interpolator.nestingRegexp);
                            a < (l && l.length) && (n.nest = !1)
                        }
                        !1 !== n.nest && (e = this.interpolator.nest(e, (function() {
                            for (var e = arguments.length, r = new Array(e), a = 0; a < e; a++)
                                r[a] = arguments[a];
                            return o && o[0] === r[0] && !n.context ? (i.logger.warn("It seems you are nesting recursively key: ".concat(r[0], " in key: ").concat(t[0])),
                            null) : i.translate.apply(i, r.concat([t]))
                        }
                        ), n)),
                        n.interpolation && this.interpolator.reset()
                    }
                    var f = n.postProcess || this.options.postProcess
                      , d = "string" === typeof f ? [f] : f;
                    return void 0 !== e && null !== e && d && d.length && !1 !== n.applyPostProcessor && (e = U.handle(d, e, t, this.options && this.options.postProcessPassResolved ? Z({
                        i18nResolved: r
                    }, n) : n, this)),
                    e
                }
            }, {
                key: "resolve",
                value: function(e) {
                    var t, n, r, o, i, a = this, s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return "string" === typeof e && (e = [e]),
                    e.forEach((function(e) {
                        if (!a.isValidLookup(t)) {
                            var c = a.extractFromKey(e, s)
                              , u = c.key;
                            n = u;
                            var l = c.namespaces;
                            a.options.fallbackNS && (l = l.concat(a.options.fallbackNS));
                            var f = void 0 !== s.count && "string" !== typeof s.count
                              , d = f && !s.ordinal && 0 === s.count && a.pluralResolver.shouldUseIntlApi()
                              , p = void 0 !== s.context && ("string" === typeof s.context || "number" === typeof s.context) && "" !== s.context
                              , g = s.lngs ? s.lngs : a.languageUtils.toResolveHierarchy(s.lng || a.language, s.fallbackLng);
                            l.forEach((function(e) {
                                a.isValidLookup(t) || (i = e,
                                !G["".concat(g[0], "-").concat(e)] && a.utils && a.utils.hasLoadedNamespace && !a.utils.hasLoadedNamespace(i) && (G["".concat(g[0], "-").concat(e)] = !0,
                                a.logger.warn('key "'.concat(n, '" for languages "').concat(g.join(", "), '" won\'t get resolved as namespace "').concat(i, '" was not yet loaded'), "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")),
                                g.forEach((function(n) {
                                    if (!a.isValidLookup(t)) {
                                        o = n;
                                        var i, c = [u];
                                        if (a.i18nFormat && a.i18nFormat.addLookupKeys)
                                            a.i18nFormat.addLookupKeys(c, u, n, e, s);
                                        else {
                                            var l;
                                            f && (l = a.pluralResolver.getSuffix(n, s.count, s));
                                            var g = "_zero";
                                            if (f && (c.push(u + l),
                                            d && c.push(u + g)),
                                            p) {
                                                var h = "".concat(u).concat(a.options.contextSeparator).concat(s.context);
                                                c.push(h),
                                                f && (c.push(h + l),
                                                d && c.push(h + g))
                                            }
                                        }
                                        for (; i = c.pop(); )
                                            a.isValidLookup(t) || (r = i,
                                            t = a.getResource(n, e, i, s))
                                    }
                                }
                                )))
                            }
                            ))
                        }
                    }
                    )),
                    {
                        res: t,
                        usedKey: n,
                        exactUsedKey: r,
                        usedLng: o,
                        usedNS: i
                    }
                }
            }, {
                key: "isValidLookup",
                value: function(e) {
                    return void 0 !== e && !(!this.options.returnNull && null === e) && !(!this.options.returnEmptyString && "" === e)
                }
            }, {
                key: "getResource",
                value: function(e, t, n) {
                    var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
                    return this.i18nFormat && this.i18nFormat.getResource ? this.i18nFormat.getResource(e, t, n, r) : this.resourceStore.getResource(e, t, n, r)
                }
            }], [{
                key: "hasDefaultValue",
                value: function(e) {
                    var t = "defaultValue";
                    for (var n in e)
                        if (Object.prototype.hasOwnProperty.call(e, n) && t === n.substring(0, t.length) && void 0 !== e[n])
                            return !0;
                    return !1
                }
            }]),
            n
        }(b);
        function W(e) {
            return e.charAt(0).toUpperCase() + e.slice(1)
        }
        var z = function() {
            function e(t) {
                (0,
                o.Z)(this, e),
                this.options = t,
                this.supportedLngs = this.options.supportedLngs || !1,
                this.logger = y.create("languageUtils")
            }
            return (0,
            i.Z)(e, [{
                key: "getScriptPartFromCode",
                value: function(e) {
                    if (!e || e.indexOf("-") < 0)
                        return null;
                    var t = e.split("-");
                    return 2 === t.length ? null : (t.pop(),
                    "x" === t[t.length - 1].toLowerCase() ? null : this.formatLanguageCode(t.join("-")))
                }
            }, {
                key: "getLanguagePartFromCode",
                value: function(e) {
                    if (!e || e.indexOf("-") < 0)
                        return e;
                    var t = e.split("-");
                    return this.formatLanguageCode(t[0])
                }
            }, {
                key: "formatLanguageCode",
                value: function(e) {
                    if ("string" === typeof e && e.indexOf("-") > -1) {
                        var t = ["hans", "hant", "latn", "cyrl", "cans", "mong", "arab"]
                          , n = e.split("-");
                        return this.options.lowerCaseLng ? n = n.map((function(e) {
                            return e.toLowerCase()
                        }
                        )) : 2 === n.length ? (n[0] = n[0].toLowerCase(),
                        n[1] = n[1].toUpperCase(),
                        t.indexOf(n[1].toLowerCase()) > -1 && (n[1] = W(n[1].toLowerCase()))) : 3 === n.length && (n[0] = n[0].toLowerCase(),
                        2 === n[1].length && (n[1] = n[1].toUpperCase()),
                        "sgn" !== n[0] && 2 === n[2].length && (n[2] = n[2].toUpperCase()),
                        t.indexOf(n[1].toLowerCase()) > -1 && (n[1] = W(n[1].toLowerCase())),
                        t.indexOf(n[2].toLowerCase()) > -1 && (n[2] = W(n[2].toLowerCase()))),
                        n.join("-")
                    }
                    return this.options.cleanCode || this.options.lowerCaseLng ? e.toLowerCase() : e
                }
            }, {
                key: "isSupportedCode",
                value: function(e) {
                    return ("languageOnly" === this.options.load || this.options.nonExplicitSupportedLngs) && (e = this.getLanguagePartFromCode(e)),
                    !this.supportedLngs || !this.supportedLngs.length || this.supportedLngs.indexOf(e) > -1
                }
            }, {
                key: "getBestMatchFromCodes",
                value: function(e) {
                    var t, n = this;
                    return e ? (e.forEach((function(e) {
                        if (!t) {
                            var r = n.formatLanguageCode(e);
                            n.options.supportedLngs && !n.isSupportedCode(r) || (t = r)
                        }
                    }
                    )),
                    !t && this.options.supportedLngs && e.forEach((function(e) {
                        if (!t) {
                            var r = n.getLanguagePartFromCode(e);
                            if (n.isSupportedCode(r))
                                return t = r;
                            t = n.options.supportedLngs.find((function(e) {
                                if (0 === e.indexOf(r))
                                    return e
                            }
                            ))
                        }
                    }
                    )),
                    t || (t = this.getFallbackCodes(this.options.fallbackLng)[0]),
                    t) : null
                }
            }, {
                key: "getFallbackCodes",
                value: function(e, t) {
                    if (!e)
                        return [];
                    if ("function" === typeof e && (e = e(t)),
                    "string" === typeof e && (e = [e]),
                    "[object Array]" === Object.prototype.toString.apply(e))
                        return e;
                    if (!t)
                        return e.default || [];
                    var n = e[t];
                    return n || (n = e[this.getScriptPartFromCode(t)]),
                    n || (n = e[this.formatLanguageCode(t)]),
                    n || (n = e[this.getLanguagePartFromCode(t)]),
                    n || (n = e.default),
                    n || []
                }
            }, {
                key: "toResolveHierarchy",
                value: function(e, t) {
                    var n = this
                      , r = this.getFallbackCodes(t || this.options.fallbackLng || [], e)
                      , o = []
                      , i = function(e) {
                        e && (n.isSupportedCode(e) ? o.push(e) : n.logger.warn("rejecting language code not found in supportedLngs: ".concat(e)))
                    };
                    return "string" === typeof e && e.indexOf("-") > -1 ? ("languageOnly" !== this.options.load && i(this.formatLanguageCode(e)),
                    "languageOnly" !== this.options.load && "currentOnly" !== this.options.load && i(this.getScriptPartFromCode(e)),
                    "currentOnly" !== this.options.load && i(this.getLanguagePartFromCode(e))) : "string" === typeof e && i(this.formatLanguageCode(e)),
                    r.forEach((function(e) {
                        o.indexOf(e) < 0 && i(n.formatLanguageCode(e))
                    }
                    )),
                    o
                }
            }]),
            e
        }()
          , V = [{
            lngs: ["ach", "ak", "am", "arn", "br", "fil", "gun", "ln", "mfe", "mg", "mi", "oc", "pt", "pt-BR", "tg", "tl", "ti", "tr", "uz", "wa"],
            nr: [1, 2],
            fc: 1
        }, {
            lngs: ["af", "an", "ast", "az", "bg", "bn", "ca", "da", "de", "dev", "el", "en", "eo", "es", "et", "eu", "fi", "fo", "fur", "fy", "gl", "gu", "ha", "hi", "hu", "hy", "ia", "it", "kk", "kn", "ku", "lb", "mai", "ml", "mn", "mr", "nah", "nap", "nb", "ne", "nl", "nn", "no", "nso", "pa", "pap", "pms", "ps", "pt-PT", "rm", "sco", "se", "si", "so", "son", "sq", "sv", "sw", "ta", "te", "tk", "ur", "yo"],
            nr: [1, 2],
            fc: 2
        }, {
            lngs: ["ay", "bo", "cgg", "fa", "ht", "id", "ja", "jbo", "ka", "km", "ko", "ky", "lo", "ms", "sah", "su", "th", "tt", "ug", "vi", "wo", "zh"],
            nr: [1],
            fc: 3
        }, {
            lngs: ["be", "bs", "cnr", "dz", "hr", "ru", "sr", "uk"],
            nr: [1, 2, 5],
            fc: 4
        }, {
            lngs: ["ar"],
            nr: [0, 1, 2, 3, 11, 100],
            fc: 5
        }, {
            lngs: ["cs", "sk"],
            nr: [1, 2, 5],
            fc: 6
        }, {
            lngs: ["csb", "pl"],
            nr: [1, 2, 5],
            fc: 7
        }, {
            lngs: ["cy"],
            nr: [1, 2, 3, 8],
            fc: 8
        }, {
            lngs: ["fr"],
            nr: [1, 2],
            fc: 9
        }, {
            lngs: ["ga"],
            nr: [1, 2, 3, 7, 11],
            fc: 10
        }, {
            lngs: ["gd"],
            nr: [1, 2, 3, 20],
            fc: 11
        }, {
            lngs: ["is"],
            nr: [1, 2],
            fc: 12
        }, {
            lngs: ["jv"],
            nr: [0, 1],
            fc: 13
        }, {
            lngs: ["kw"],
            nr: [1, 2, 3, 4],
            fc: 14
        }, {
            lngs: ["lt"],
            nr: [1, 2, 10],
            fc: 15
        }, {
            lngs: ["lv"],
            nr: [1, 2, 0],
            fc: 16
        }, {
            lngs: ["mk"],
            nr: [1, 2],
            fc: 17
        }, {
            lngs: ["mnk"],
            nr: [0, 1, 2],
            fc: 18
        }, {
            lngs: ["mt"],
            nr: [1, 2, 11, 20],
            fc: 19
        }, {
            lngs: ["or"],
            nr: [2, 1],
            fc: 2
        }, {
            lngs: ["ro"],
            nr: [1, 2, 20],
            fc: 20
        }, {
            lngs: ["sl"],
            nr: [5, 1, 2, 3],
            fc: 21
        }, {
            lngs: ["he", "iw"],
            nr: [1, 2, 20, 21],
            fc: 22
        }]
          , K = {
            1: function(e) {
                return Number(e > 1)
            },
            2: function(e) {
                return Number(1 != e)
            },
            3: function(e) {
                return 0
            },
            4: function(e) {
                return Number(e % 10 == 1 && e % 100 != 11 ? 0 : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20) ? 1 : 2)
            },
            5: function(e) {
                return Number(0 == e ? 0 : 1 == e ? 1 : 2 == e ? 2 : e % 100 >= 3 && e % 100 <= 10 ? 3 : e % 100 >= 11 ? 4 : 5)
            },
            6: function(e) {
                return Number(1 == e ? 0 : e >= 2 && e <= 4 ? 1 : 2)
            },
            7: function(e) {
                return Number(1 == e ? 0 : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20) ? 1 : 2)
            },
            8: function(e) {
                return Number(1 == e ? 0 : 2 == e ? 1 : 8 != e && 11 != e ? 2 : 3)
            },
            9: function(e) {
                return Number(e >= 2)
            },
            10: function(e) {
                return Number(1 == e ? 0 : 2 == e ? 1 : e < 7 ? 2 : e < 11 ? 3 : 4)
            },
            11: function(e) {
                return Number(1 == e || 11 == e ? 0 : 2 == e || 12 == e ? 1 : e > 2 && e < 20 ? 2 : 3)
            },
            12: function(e) {
                return Number(e % 10 != 1 || e % 100 == 11)
            },
            13: function(e) {
                return Number(0 !== e)
            },
            14: function(e) {
                return Number(1 == e ? 0 : 2 == e ? 1 : 3 == e ? 2 : 3)
            },
            15: function(e) {
                return Number(e % 10 == 1 && e % 100 != 11 ? 0 : e % 10 >= 2 && (e % 100 < 10 || e % 100 >= 20) ? 1 : 2)
            },
            16: function(e) {
                return Number(e % 10 == 1 && e % 100 != 11 ? 0 : 0 !== e ? 1 : 2)
            },
            17: function(e) {
                return Number(1 == e || e % 10 == 1 && e % 100 != 11 ? 0 : 1)
            },
            18: function(e) {
                return Number(0 == e ? 0 : 1 == e ? 1 : 2)
            },
            19: function(e) {
                return Number(1 == e ? 0 : 0 == e || e % 100 > 1 && e % 100 < 11 ? 1 : e % 100 > 10 && e % 100 < 20 ? 2 : 3)
            },
            20: function(e) {
                return Number(1 == e ? 0 : 0 == e || e % 100 > 0 && e % 100 < 20 ? 1 : 2)
            },
            21: function(e) {
                return Number(e % 100 == 1 ? 1 : e % 100 == 2 ? 2 : e % 100 == 3 || e % 100 == 4 ? 3 : 0)
            },
            22: function(e) {
                return Number(1 == e ? 0 : 2 == e ? 1 : (e < 0 || e > 10) && e % 10 == 0 ? 2 : 3)
            }
        }
          , q = ["v1", "v2", "v3"]
          , $ = {
            zero: 0,
            one: 1,
            two: 2,
            few: 3,
            many: 4,
            other: 5
        };
        function X() {
            var e = {};
            return V.forEach((function(t) {
                t.lngs.forEach((function(n) {
                    e[n] = {
                        numbers: t.nr,
                        plurals: K[t.fc]
                    }
                }
                ))
            }
            )),
            e
        }
        var Y = function() {
            function e(t) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                (0,
                o.Z)(this, e),
                this.languageUtils = t,
                this.options = n,
                this.logger = y.create("pluralResolver"),
                this.options.compatibilityJSON && "v4" !== this.options.compatibilityJSON || "undefined" !== typeof Intl && Intl.PluralRules || (this.options.compatibilityJSON = "v3",
                this.logger.error("Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.")),
                this.rules = X()
            }
            return (0,
            i.Z)(e, [{
                key: "addRule",
                value: function(e, t) {
                    this.rules[e] = t
                }
            }, {
                key: "getRule",
                value: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    if (this.shouldUseIntlApi())
                        try {
                            return new Intl.PluralRules(e,{
                                type: t.ordinal ? "ordinal" : "cardinal"
                            })
                        } catch (n) {
                            return
                        }
                    return this.rules[e] || this.rules[this.languageUtils.getLanguagePartFromCode(e)]
                }
            }, {
                key: "needsPlural",
                value: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                      , n = this.getRule(e, t);
                    return this.shouldUseIntlApi() ? n && n.resolvedOptions().pluralCategories.length > 1 : n && n.numbers.length > 1
                }
            }, {
                key: "getPluralFormsOfKey",
                value: function(e, t) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    return this.getSuffixes(e, n).map((function(e) {
                        return "".concat(t).concat(e)
                    }
                    ))
                }
            }, {
                key: "getSuffixes",
                value: function(e) {
                    var t = this
                      , n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                      , r = this.getRule(e, n);
                    return r ? this.shouldUseIntlApi() ? r.resolvedOptions().pluralCategories.sort((function(e, t) {
                        return $[e] - $[t]
                    }
                    )).map((function(e) {
                        return "".concat(t.options.prepend).concat(e)
                    }
                    )) : r.numbers.map((function(r) {
                        return t.getSuffix(e, r, n)
                    }
                    )) : []
                }
            }, {
                key: "getSuffix",
                value: function(e, t) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}
                      , r = this.getRule(e, n);
                    return r ? this.shouldUseIntlApi() ? "".concat(this.options.prepend).concat(r.select(t)) : this.getSuffixRetroCompatible(r, t) : (this.logger.warn("no plural rule found for: ".concat(e)),
                    "")
                }
            }, {
                key: "getSuffixRetroCompatible",
                value: function(e, t) {
                    var n = this
                      , r = e.noAbs ? e.plurals(t) : e.plurals(Math.abs(t))
                      , o = e.numbers[r];
                    this.options.simplifyPluralSuffix && 2 === e.numbers.length && 1 === e.numbers[0] && (2 === o ? o = "plural" : 1 === o && (o = ""));
                    var i = function() {
                        return n.options.prepend && o.toString() ? n.options.prepend + o.toString() : o.toString()
                    };
                    return "v1" === this.options.compatibilityJSON ? 1 === o ? "" : "number" === typeof o ? "_plural_".concat(o.toString()) : i() : "v2" === this.options.compatibilityJSON || this.options.simplifyPluralSuffix && 2 === e.numbers.length && 1 === e.numbers[0] ? i() : this.options.prepend && r.toString() ? this.options.prepend + r.toString() : r.toString()
                }
            }, {
                key: "shouldUseIntlApi",
                value: function() {
                    return !q.includes(this.options.compatibilityJSON)
                }
            }]),
            e
        }();
        function J(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, r)
            }
            return n
        }
        function Q(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? J(Object(n), !0).forEach((function(t) {
                    (0,
                    l.Z)(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : J(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        var ee = function() {
            function e() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                (0,
                o.Z)(this, e),
                this.logger = y.create("interpolator"),
                this.options = t,
                this.format = t.interpolation && t.interpolation.format || function(e) {
                    return e
                }
                ,
                this.init(t)
            }
            return (0,
            i.Z)(e, [{
                key: "init",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    e.interpolation || (e.interpolation = {
                        escapeValue: !0
                    });
                    var t = e.interpolation;
                    this.escape = void 0 !== t.escape ? t.escape : I,
                    this.escapeValue = void 0 === t.escapeValue || t.escapeValue,
                    this.useRawValueToEscape = void 0 !== t.useRawValueToEscape && t.useRawValueToEscape,
                    this.prefix = t.prefix ? x(t.prefix) : t.prefixEscaped || "{{",
                    this.suffix = t.suffix ? x(t.suffix) : t.suffixEscaped || "}}",
                    this.formatSeparator = t.formatSeparator ? t.formatSeparator : t.formatSeparator || ",",
                    this.unescapePrefix = t.unescapeSuffix ? "" : t.unescapePrefix || "-",
                    this.unescapeSuffix = this.unescapePrefix ? "" : t.unescapeSuffix || "",
                    this.nestingPrefix = t.nestingPrefix ? x(t.nestingPrefix) : t.nestingPrefixEscaped || x("$t("),
                    this.nestingSuffix = t.nestingSuffix ? x(t.nestingSuffix) : t.nestingSuffixEscaped || x(")"),
                    this.nestingOptionsSeparator = t.nestingOptionsSeparator ? t.nestingOptionsSeparator : t.nestingOptionsSeparator || ",",
                    this.maxReplaces = t.maxReplaces ? t.maxReplaces : 1e3,
                    this.alwaysFormat = void 0 !== t.alwaysFormat && t.alwaysFormat,
                    this.resetRegExp()
                }
            }, {
                key: "reset",
                value: function() {
                    this.options && this.init(this.options)
                }
            }, {
                key: "resetRegExp",
                value: function() {
                    var e = "".concat(this.prefix, "(.+?)").concat(this.suffix);
                    this.regexp = new RegExp(e,"g");
                    var t = "".concat(this.prefix).concat(this.unescapePrefix, "(.+?)").concat(this.unescapeSuffix).concat(this.suffix);
                    this.regexpUnescape = new RegExp(t,"g");
                    var n = "".concat(this.nestingPrefix, "(.+?)").concat(this.nestingSuffix);
                    this.nestingRegexp = new RegExp(n,"g")
                }
            }, {
                key: "interpolate",
                value: function(e, t, n, r) {
                    var o, i, a, s = this, c = this.options && this.options.interpolation && this.options.interpolation.defaultVariables || {};
                    function u(e) {
                        return e.replace(/\$/g, "$$$$")
                    }
                    var l = function(e) {
                        if (e.indexOf(s.formatSeparator) < 0) {
                            var o = k(t, c, e);
                            return s.alwaysFormat ? s.format(o, void 0, n, Q(Q(Q({}, r), t), {}, {
                                interpolationkey: e
                            })) : o
                        }
                        var i = e.split(s.formatSeparator)
                          , a = i.shift().trim()
                          , u = i.join(s.formatSeparator).trim();
                        return s.format(k(t, c, a), u, n, Q(Q(Q({}, r), t), {}, {
                            interpolationkey: a
                        }))
                    };
                    this.resetRegExp();
                    var f = r && r.missingInterpolationHandler || this.options.missingInterpolationHandler
                      , d = r && r.interpolation && void 0 !== r.interpolation.skipOnVariables ? r.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables;
                    return [{
                        regex: this.regexpUnescape,
                        safeValue: function(e) {
                            return u(e)
                        }
                    }, {
                        regex: this.regexp,
                        safeValue: function(e) {
                            return s.escapeValue ? u(s.escape(e)) : u(e)
                        }
                    }].forEach((function(t) {
                        for (a = 0; o = t.regex.exec(e); ) {
                            var n = o[1].trim();
                            if (void 0 === (i = l(n)))
                                if ("function" === typeof f) {
                                    var c = f(e, o, r);
                                    i = "string" === typeof c ? c : ""
                                } else if (r && r.hasOwnProperty(n))
                                    i = "";
                                else {
                                    if (d) {
                                        i = o[0];
                                        continue
                                    }
                                    s.logger.warn("missed to pass in variable ".concat(n, " for interpolating ").concat(e)),
                                    i = ""
                                }
                            else
                                "string" === typeof i || s.useRawValueToEscape || (i = w(i));
                            var u = t.safeValue(i);
                            if (e = e.replace(o[0], u),
                            d ? (t.regex.lastIndex += u.length,
                            t.regex.lastIndex -= o[0].length) : t.regex.lastIndex = 0,
                            ++a >= s.maxReplaces)
                                break
                        }
                    }
                    )),
                    e
                }
            }, {
                key: "nest",
                value: function(e, t) {
                    var n, r, o = this, i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, a = Q({}, i);
                    function s(e, t) {
                        var n = this.nestingOptionsSeparator;
                        if (e.indexOf(n) < 0)
                            return e;
                        var r = e.split(new RegExp("".concat(n, "[ ]*{")))
                          , o = "{".concat(r[1]);
                        e = r[0],
                        o = (o = this.interpolate(o, a)).replace(/'/g, '"');
                        try {
                            a = JSON.parse(o),
                            t && (a = Q(Q({}, t), a))
                        } catch (i) {
                            return this.logger.warn("failed parsing options string in nesting for key ".concat(e), i),
                            "".concat(e).concat(n).concat(o)
                        }
                        return delete a.defaultValue,
                        e
                    }
                    for (a.applyPostProcessor = !1,
                    delete a.defaultValue; n = this.nestingRegexp.exec(e); ) {
                        var c = []
                          , u = !1;
                        if (-1 !== n[0].indexOf(this.formatSeparator) && !/{.*}/.test(n[1])) {
                            var l = n[1].split(this.formatSeparator).map((function(e) {
                                return e.trim()
                            }
                            ));
                            n[1] = l.shift(),
                            c = l,
                            u = !0
                        }
                        if ((r = t(s.call(this, n[1].trim(), a), a)) && n[0] === e && "string" !== typeof r)
                            return r;
                        "string" !== typeof r && (r = w(r)),
                        r || (this.logger.warn("missed to resolve ".concat(n[1], " for nesting ").concat(e)),
                        r = ""),
                        u && (r = c.reduce((function(e, t) {
                            return o.format(e, t, i.lng, Q(Q({}, i), {}, {
                                interpolationkey: n[1].trim()
                            }))
                        }
                        ), r.trim())),
                        e = e.replace(n[0], r),
                        this.regexp.lastIndex = 0
                    }
                    return e
                }
            }]),
            e
        }();
        function te(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, r)
            }
            return n
        }
        function ne(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? te(Object(n), !0).forEach((function(t) {
                    (0,
                    l.Z)(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : te(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        function re(e) {
            var t = e.toLowerCase().trim()
              , n = {};
            if (e.indexOf("(") > -1) {
                var r = e.split("(");
                t = r[0].toLowerCase().trim();
                var o = r[1].substring(0, r[1].length - 1);
                if ("currency" === t && o.indexOf(":") < 0)
                    n.currency || (n.currency = o.trim());
                else if ("relativetime" === t && o.indexOf(":") < 0)
                    n.range || (n.range = o.trim());
                else {
                    o.split(";").forEach((function(e) {
                        if (e) {
                            var t, r = e.split(":"), o = (t = r,
                            (0,
                            f.Z)(t) || (0,
                            d.Z)(t) || (0,
                            p.Z)(t) || (0,
                            g.Z)()), i = o[0], a = o.slice(1).join(":");
                            "false" === a.trim() && (n[i.trim()] = !1),
                            "true" === a.trim() && (n[i.trim()] = !0),
                            isNaN(a.trim()) || (n[i.trim()] = parseInt(a.trim(), 10)),
                            n[i.trim()] || (n[i.trim()] = a.trim())
                        }
                    }
                    ))
                }
            }
            return {
                formatName: t,
                formatOptions: n
            }
        }
        var oe = function() {
            function e() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                (0,
                o.Z)(this, e),
                this.logger = y.create("formatter"),
                this.options = t,
                this.formats = {
                    number: function(e, t, n) {
                        return new Intl.NumberFormat(t,n).format(e)
                    },
                    currency: function(e, t, n) {
                        return new Intl.NumberFormat(t,ne(ne({}, n), {}, {
                            style: "currency"
                        })).format(e)
                    },
                    datetime: function(e, t, n) {
                        return new Intl.DateTimeFormat(t,ne({}, n)).format(e)
                    },
                    relativetime: function(e, t, n) {
                        return new Intl.RelativeTimeFormat(t,ne({}, n)).format(e, n.range || "day")
                    },
                    list: function(e, t, n) {
                        return new Intl.ListFormat(t,ne({}, n)).format(e)
                    }
                },
                this.init(t)
            }
            return (0,
            i.Z)(e, [{
                key: "init",
                value: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                        interpolation: {}
                    }
                      , n = t.interpolation;
                    this.formatSeparator = n.formatSeparator ? n.formatSeparator : n.formatSeparator || ","
                }
            }, {
                key: "add",
                value: function(e, t) {
                    this.formats[e.toLowerCase().trim()] = t
                }
            }, {
                key: "format",
                value: function(e, t, n, r) {
                    var o = this;
                    return t.split(this.formatSeparator).reduce((function(e, t) {
                        var i = re(t)
                          , a = i.formatName
                          , s = i.formatOptions;
                        if (o.formats[a]) {
                            var c = e;
                            try {
                                var u = r && r.formatParams && r.formatParams[r.interpolationkey] || {}
                                  , l = u.locale || u.lng || r.locale || r.lng || n;
                                c = o.formats[a](e, l, ne(ne(ne({}, s), r), u))
                            } catch (f) {
                                o.logger.warn(f)
                            }
                            return c
                        }
                        return o.logger.warn("there was no format function for ".concat(a)),
                        e
                    }
                    ), e)
                }
            }]),
            e
        }();
        function ie(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, r)
            }
            return n
        }
        function ae(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? ie(Object(n), !0).forEach((function(t) {
                    (0,
                    l.Z)(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ie(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        function se(e) {
            var t = function() {
                if ("undefined" === typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" === typeof Proxy)
                    return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
                    ))),
                    !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var n, r = u(e);
                if (t) {
                    var o = u(this).constructor;
                    n = Reflect.construct(r, arguments, o)
                } else
                    n = r.apply(this, arguments);
                return c(this, n)
            }
        }
        var ce = function(e) {
            (0,
            s.Z)(n, e);
            var t = se(n);
            function n(e, r, i) {
                var s, c = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
                return (0,
                o.Z)(this, n),
                s = t.call(this),
                C && b.call(a(s)),
                s.backend = e,
                s.store = r,
                s.services = i,
                s.languageUtils = i.languageUtils,
                s.options = c,
                s.logger = y.create("backendConnector"),
                s.state = {},
                s.queue = [],
                s.backend && s.backend.init && s.backend.init(i, c.backend, c),
                s
            }
            return (0,
            i.Z)(n, [{
                key: "queueLoad",
                value: function(e, t, n, r) {
                    var o = this
                      , i = []
                      , a = []
                      , s = []
                      , c = [];
                    return e.forEach((function(e) {
                        var r = !0;
                        t.forEach((function(t) {
                            var s = "".concat(e, "|").concat(t);
                            !n.reload && o.store.hasResourceBundle(e, t) ? o.state[s] = 2 : o.state[s] < 0 || (1 === o.state[s] ? a.indexOf(s) < 0 && a.push(s) : (o.state[s] = 1,
                            r = !1,
                            a.indexOf(s) < 0 && a.push(s),
                            i.indexOf(s) < 0 && i.push(s),
                            c.indexOf(t) < 0 && c.push(t)))
                        }
                        )),
                        r || s.push(e)
                    }
                    )),
                    (i.length || a.length) && this.queue.push({
                        pending: a,
                        loaded: {},
                        errors: [],
                        callback: r
                    }),
                    {
                        toLoad: i,
                        pending: a,
                        toLoadLanguages: s,
                        toLoadNamespaces: c
                    }
                }
            }, {
                key: "loaded",
                value: function(e, t, n) {
                    var r = e.split("|")
                      , o = r[0]
                      , i = r[1];
                    t && this.emit("failedLoading", o, i, t),
                    n && this.store.addResourceBundle(o, i, n),
                    this.state[e] = t ? -1 : 2;
                    var a = {};
                    this.queue.forEach((function(n) {
                        !function(e, t, n, r) {
                            var o = E(e, t, Object)
                              , i = o.obj
                              , a = o.k;
                            i[a] = i[a] || [],
                            r && (i[a] = i[a].concat(n)),
                            r || i[a].push(n)
                        }(n.loaded, [o], i),
                        function(e, t) {
                            for (var n = e.indexOf(t); -1 !== n; )
                                e.splice(n, 1),
                                n = e.indexOf(t)
                        }(n.pending, e),
                        t && n.errors.push(t),
                        0 !== n.pending.length || n.done || (Object.keys(n.loaded).forEach((function(e) {
                            a[e] || (a[e] = []),
                            n.loaded[e].length && n.loaded[e].forEach((function(t) {
                                a[e].indexOf(t) < 0 && a[e].push(t)
                            }
                            ))
                        }
                        )),
                        n.done = !0,
                        n.errors.length ? n.callback(n.errors) : n.callback())
                    }
                    )),
                    this.emit("loaded", a),
                    this.queue = this.queue.filter((function(e) {
                        return !e.done
                    }
                    ))
                }
            }, {
                key: "read",
                value: function(e, t, n) {
                    var r = this
                      , o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0
                      , i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 350
                      , a = arguments.length > 5 ? arguments[5] : void 0;
                    return e.length ? this.backend[n](e, t, (function(s, c) {
                        s && c && o < 5 ? setTimeout((function() {
                            r.read.call(r, e, t, n, o + 1, 2 * i, a)
                        }
                        ), i) : a(s, c)
                    }
                    )) : a(null, {})
                }
            }, {
                key: "prepareLoading",
                value: function(e, t) {
                    var n = this
                      , r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}
                      , o = arguments.length > 3 ? arguments[3] : void 0;
                    if (!this.backend)
                        return this.logger.warn("No backend was added via i18next.use. Will not load resources."),
                        o && o();
                    "string" === typeof e && (e = this.languageUtils.toResolveHierarchy(e)),
                    "string" === typeof t && (t = [t]);
                    var i = this.queueLoad(e, t, r, o);
                    if (!i.toLoad.length)
                        return i.pending.length || o(),
                        null;
                    i.toLoad.forEach((function(e) {
                        n.loadOne(e)
                    }
                    ))
                }
            }, {
                key: "load",
                value: function(e, t, n) {
                    this.prepareLoading(e, t, {}, n)
                }
            }, {
                key: "reload",
                value: function(e, t, n) {
                    this.prepareLoading(e, t, {
                        reload: !0
                    }, n)
                }
            }, {
                key: "loadOne",
                value: function(e) {
                    var t = this
                      , n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ""
                      , r = e.split("|")
                      , o = r[0]
                      , i = r[1];
                    this.read(o, i, "read", void 0, void 0, (function(r, a) {
                        r && t.logger.warn("".concat(n, "loading namespace ").concat(i, " for language ").concat(o, " failed"), r),
                        !r && a && t.logger.log("".concat(n, "loaded namespace ").concat(i, " for language ").concat(o), a),
                        t.loaded(e, r, a)
                    }
                    ))
                }
            }, {
                key: "saveMissing",
                value: function(e, t, n, r, o) {
                    var i = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : {};
                    this.services.utils && this.services.utils.hasLoadedNamespace && !this.services.utils.hasLoadedNamespace(t) ? this.logger.warn('did not save key "'.concat(n, '" as the namespace "').concat(t, '" was not yet loaded'), "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!") : void 0 !== n && null !== n && "" !== n && (this.backend && this.backend.create && this.backend.create(e, t, n, r, null, ae(ae({}, i), {}, {
                        isUpdate: o
                    })),
                    e && e[0] && this.store.addResource(e[0], t, n, r))
                }
            }]),
            n
        }(b);
        function ue() {
            return {
                debug: !1,
                initImmediate: !0,
                ns: ["translation"],
                defaultNS: ["translation"],
                fallbackLng: ["dev"],
                fallbackNS: !1,
                supportedLngs: !1,
                nonExplicitSupportedLngs: !1,
                load: "all",
                preload: !1,
                simplifyPluralSuffix: !0,
                keySeparator: ".",
                nsSeparator: ":",
                pluralSeparator: "_",
                contextSeparator: "_",
                partialBundledLanguages: !1,
                saveMissing: !1,
                updateMissing: !1,
                saveMissingTo: "fallback",
                saveMissingPlurals: !0,
                missingKeyHandler: !1,
                missingInterpolationHandler: !1,
                postProcess: !1,
                postProcessPassResolved: !1,
                returnNull: !0,
                returnEmptyString: !0,
                returnObjects: !1,
                joinArrays: !1,
                returnedObjectHandler: !1,
                parseMissingKeyHandler: !1,
                appendNamespaceToMissingKey: !1,
                appendNamespaceToCIMode: !1,
                overloadTranslationOptionHandler: function(e) {
                    var t = {};
                    if ("object" === (0,
                    r.Z)(e[1]) && (t = e[1]),
                    "string" === typeof e[1] && (t.defaultValue = e[1]),
                    "string" === typeof e[2] && (t.tDescription = e[2]),
                    "object" === (0,
                    r.Z)(e[2]) || "object" === (0,
                    r.Z)(e[3])) {
                        var n = e[3] || e[2];
                        Object.keys(n).forEach((function(e) {
                            t[e] = n[e]
                        }
                        ))
                    }
                    return t
                },
                interpolation: {
                    escapeValue: !0,
                    format: function(e, t, n, r) {
                        return e
                    },
                    prefix: "{{",
                    suffix: "}}",
                    formatSeparator: ",",
                    unescapePrefix: "-",
                    nestingPrefix: "$t(",
                    nestingSuffix: ")",
                    nestingOptionsSeparator: ",",
                    maxReplaces: 1e3,
                    skipOnVariables: !0
                }
            }
        }
        function le(e) {
            return "string" === typeof e.ns && (e.ns = [e.ns]),
            "string" === typeof e.fallbackLng && (e.fallbackLng = [e.fallbackLng]),
            "string" === typeof e.fallbackNS && (e.fallbackNS = [e.fallbackNS]),
            e.supportedLngs && e.supportedLngs.indexOf("cimode") < 0 && (e.supportedLngs = e.supportedLngs.concat(["cimode"])),
            e
        }
        function fe(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, r)
            }
            return n
        }
        function de(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? fe(Object(n), !0).forEach((function(t) {
                    (0,
                    l.Z)(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : fe(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        function pe(e) {
            var t = function() {
                if ("undefined" === typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" === typeof Proxy)
                    return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
                    ))),
                    !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var n, r = u(e);
                if (t) {
                    var o = u(this).constructor;
                    n = Reflect.construct(r, arguments, o)
                } else
                    n = r.apply(this, arguments);
                return c(this, n)
            }
        }
        function ge() {}
        function he(e) {
            Object.getOwnPropertyNames(Object.getPrototypeOf(e)).forEach((function(t) {
                "function" === typeof e[t] && (e[t] = e[t].bind(e))
            }
            ))
        }
        var ve = function(e) {
            (0,
            s.Z)(n, e);
            var t = pe(n);
            function n() {
                var e, r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, i = arguments.length > 1 ? arguments[1] : void 0;
                if ((0,
                o.Z)(this, n),
                e = t.call(this),
                C && b.call(a(e)),
                e.options = le(r),
                e.services = {},
                e.logger = y,
                e.modules = {
                    external: []
                },
                he(a(e)),
                i && !e.isInitialized && !r.isClone) {
                    if (!e.options.initImmediate)
                        return e.init(r, i),
                        c(e, a(e));
                    setTimeout((function() {
                        e.init(r, i)
                    }
                    ), 0)
                }
                return e
            }
            return (0,
            i.Z)(n, [{
                key: "init",
                value: function() {
                    var e = this
                      , t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                      , n = arguments.length > 1 ? arguments[1] : void 0;
                    "function" === typeof t && (n = t,
                    t = {}),
                    !t.defaultNS && t.ns && ("string" === typeof t.ns ? t.defaultNS = t.ns : t.ns.indexOf("translation") < 0 && (t.defaultNS = t.ns[0]));
                    var r = ue();
                    function o(e) {
                        return e ? "function" === typeof e ? new e : e : null
                    }
                    if (this.options = de(de(de({}, r), this.options), le(t)),
                    "v1" !== this.options.compatibilityAPI && (this.options.interpolation = de(de({}, r.interpolation), this.options.interpolation)),
                    void 0 !== t.keySeparator && (this.options.userDefinedKeySeparator = t.keySeparator),
                    void 0 !== t.nsSeparator && (this.options.userDefinedNsSeparator = t.nsSeparator),
                    !this.options.isClone) {
                        var i;
                        this.modules.logger ? y.init(o(this.modules.logger), this.options) : y.init(null, this.options),
                        this.modules.formatter ? i = this.modules.formatter : "undefined" !== typeof Intl && (i = oe);
                        var a = new z(this.options);
                        this.store = new M(this.options.resources,this.options);
                        var s = this.services;
                        s.logger = y,
                        s.resourceStore = this.store,
                        s.languageUtils = a,
                        s.pluralResolver = new Y(a,{
                            prepend: this.options.pluralSeparator,
                            compatibilityJSON: this.options.compatibilityJSON,
                            simplifyPluralSuffix: this.options.simplifyPluralSuffix
                        }),
                        !i || this.options.interpolation.format && this.options.interpolation.format !== r.interpolation.format || (s.formatter = o(i),
                        s.formatter.init(s, this.options),
                        this.options.interpolation.format = s.formatter.format.bind(s.formatter)),
                        s.interpolator = new ee(this.options),
                        s.utils = {
                            hasLoadedNamespace: this.hasLoadedNamespace.bind(this)
                        },
                        s.backendConnector = new ce(o(this.modules.backend),s.resourceStore,s,this.options),
                        s.backendConnector.on("*", (function(t) {
                            for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++)
                                r[o - 1] = arguments[o];
                            e.emit.apply(e, [t].concat(r))
                        }
                        )),
                        this.modules.languageDetector && (s.languageDetector = o(this.modules.languageDetector),
                        s.languageDetector.init(s, this.options.detection, this.options)),
                        this.modules.i18nFormat && (s.i18nFormat = o(this.modules.i18nFormat),
                        s.i18nFormat.init && s.i18nFormat.init(this)),
                        this.translator = new H(this.services,this.options),
                        this.translator.on("*", (function(t) {
                            for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++)
                                r[o - 1] = arguments[o];
                            e.emit.apply(e, [t].concat(r))
                        }
                        )),
                        this.modules.external.forEach((function(t) {
                            t.init && t.init(e)
                        }
                        ))
                    }
                    if (this.format = this.options.interpolation.format,
                    n || (n = ge),
                    this.options.fallbackLng && !this.services.languageDetector && !this.options.lng) {
                        var c = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
                        c.length > 0 && "dev" !== c[0] && (this.options.lng = c[0])
                    }
                    this.services.languageDetector || this.options.lng || this.logger.warn("init: no languageDetector is used and no lng is defined");
                    var u = ["getResource", "hasResourceBundle", "getResourceBundle", "getDataByLanguage"];
                    u.forEach((function(t) {
                        e[t] = function() {
                            var n;
                            return (n = e.store)[t].apply(n, arguments)
                        }
                    }
                    ));
                    var l = ["addResource", "addResources", "addResourceBundle", "removeResourceBundle"];
                    l.forEach((function(t) {
                        e[t] = function() {
                            var n;
                            return (n = e.store)[t].apply(n, arguments),
                            e
                        }
                    }
                    ));
                    var f = S()
                      , d = function() {
                        var t = function(t, r) {
                            e.isInitialized && !e.initializedStoreOnce && e.logger.warn("init: i18next is already initialized. You should call init just once!"),
                            e.isInitialized = !0,
                            e.options.isClone || e.logger.log("initialized", e.options),
                            e.emit("initialized", e.options),
                            f.resolve(r),
                            n(t, r)
                        };
                        if (e.languages && "v1" !== e.options.compatibilityAPI && !e.isInitialized)
                            return t(null, e.t.bind(e));
                        e.changeLanguage(e.options.lng, t)
                    };
                    return this.options.resources || !this.options.initImmediate ? d() : setTimeout(d, 0),
                    f
                }
            }, {
                key: "loadResources",
                value: function(e) {
                    var t = this
                      , n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ge
                      , r = n
                      , o = "string" === typeof e ? e : this.language;
                    if ("function" === typeof e && (r = e),
                    !this.options.resources || this.options.partialBundledLanguages) {
                        if (o && "cimode" === o.toLowerCase())
                            return r();
                        var i = []
                          , a = function(e) {
                            e && t.services.languageUtils.toResolveHierarchy(e).forEach((function(e) {
                                i.indexOf(e) < 0 && i.push(e)
                            }
                            ))
                        };
                        if (o)
                            a(o);
                        else {
                            var s = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
                            s.forEach((function(e) {
                                return a(e)
                            }
                            ))
                        }
                        this.options.preload && this.options.preload.forEach((function(e) {
                            return a(e)
                        }
                        )),
                        this.services.backendConnector.load(i, this.options.ns, r)
                    } else
                        r(null)
                }
            }, {
                key: "reloadResources",
                value: function(e, t, n) {
                    var r = S();
                    return e || (e = this.languages),
                    t || (t = this.options.ns),
                    n || (n = ge),
                    this.services.backendConnector.reload(e, t, (function(e) {
                        r.resolve(),
                        n(e)
                    }
                    )),
                    r
                }
            }, {
                key: "use",
                value: function(e) {
                    if (!e)
                        throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");
                    if (!e.type)
                        throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");
                    return "backend" === e.type && (this.modules.backend = e),
                    ("logger" === e.type || e.log && e.warn && e.error) && (this.modules.logger = e),
                    "languageDetector" === e.type && (this.modules.languageDetector = e),
                    "i18nFormat" === e.type && (this.modules.i18nFormat = e),
                    "postProcessor" === e.type && U.addPostProcessor(e),
                    "formatter" === e.type && (this.modules.formatter = e),
                    "3rdParty" === e.type && this.modules.external.push(e),
                    this
                }
            }, {
                key: "changeLanguage",
                value: function(e, t) {
                    var n = this;
                    this.isLanguageChangingTo = e;
                    var r = S();
                    this.emit("languageChanging", e);
                    var o = function(e) {
                        if (n.language = e,
                        n.languages = n.services.languageUtils.toResolveHierarchy(e),
                        n.resolvedLanguage = void 0,
                        !(["cimode", "dev"].indexOf(e) > -1))
                            for (var t = 0; t < n.languages.length; t++) {
                                var r = n.languages[t];
                                if (!(["cimode", "dev"].indexOf(r) > -1) && n.store.hasLanguageSomeTranslations(r)) {
                                    n.resolvedLanguage = r;
                                    break
                                }
                            }
                    }
                      , i = function(i) {
                        e || i || !n.services.languageDetector || (i = []);
                        var a = "string" === typeof i ? i : n.services.languageUtils.getBestMatchFromCodes(i);
                        a && (n.language || o(a),
                        n.translator.language || n.translator.changeLanguage(a),
                        n.services.languageDetector && n.services.languageDetector.cacheUserLanguage(a)),
                        n.loadResources(a, (function(e) {
                            !function(e, i) {
                                i ? (o(i),
                                n.translator.changeLanguage(i),
                                n.isLanguageChangingTo = void 0,
                                n.emit("languageChanged", i),
                                n.logger.log("languageChanged", i)) : n.isLanguageChangingTo = void 0,
                                r.resolve((function() {
                                    return n.t.apply(n, arguments)
                                }
                                )),
                                t && t(e, (function() {
                                    return n.t.apply(n, arguments)
                                }
                                ))
                            }(e, a)
                        }
                        ))
                    };
                    return e || !this.services.languageDetector || this.services.languageDetector.async ? !e && this.services.languageDetector && this.services.languageDetector.async ? this.services.languageDetector.detect(i) : i(e) : i(this.services.languageDetector.detect()),
                    r
                }
            }, {
                key: "getFixedT",
                value: function(e, t, n) {
                    var o = this
                      , i = function e(t, i) {
                        var a;
                        if ("object" !== (0,
                        r.Z)(i)) {
                            for (var s = arguments.length, c = new Array(s > 2 ? s - 2 : 0), u = 2; u < s; u++)
                                c[u - 2] = arguments[u];
                            a = o.options.overloadTranslationOptionHandler([t, i].concat(c))
                        } else
                            a = de({}, i);
                        a.lng = a.lng || e.lng,
                        a.lngs = a.lngs || e.lngs,
                        a.ns = a.ns || e.ns;
                        var l = o.options.keySeparator || "."
                          , f = n ? "".concat(n).concat(l).concat(t) : t;
                        return o.t(f, a)
                    };
                    return "string" === typeof e ? i.lng = e : i.lngs = e,
                    i.ns = t,
                    i.keyPrefix = n,
                    i
                }
            }, {
                key: "t",
                value: function() {
                    var e;
                    return this.translator && (e = this.translator).translate.apply(e, arguments)
                }
            }, {
                key: "exists",
                value: function() {
                    var e;
                    return this.translator && (e = this.translator).exists.apply(e, arguments)
                }
            }, {
                key: "setDefaultNamespace",
                value: function(e) {
                    this.options.defaultNS = e
                }
            }, {
                key: "hasLoadedNamespace",
                value: function(e) {
                    var t = this
                      , n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    if (!this.isInitialized)
                        return this.logger.warn("hasLoadedNamespace: i18next was not initialized", this.languages),
                        !1;
                    if (!this.languages || !this.languages.length)
                        return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty", this.languages),
                        !1;
                    var r = this.resolvedLanguage || this.languages[0]
                      , o = !!this.options && this.options.fallbackLng
                      , i = this.languages[this.languages.length - 1];
                    if ("cimode" === r.toLowerCase())
                        return !0;
                    var a = function(e, n) {
                        var r = t.services.backendConnector.state["".concat(e, "|").concat(n)];
                        return -1 === r || 2 === r
                    };
                    if (n.precheck) {
                        var s = n.precheck(this, a);
                        if (void 0 !== s)
                            return s
                    }
                    return !!this.hasResourceBundle(r, e) || (!this.services.backendConnector.backend || !(!a(r, e) || o && !a(i, e)))
                }
            }, {
                key: "loadNamespaces",
                value: function(e, t) {
                    var n = this
                      , r = S();
                    return this.options.ns ? ("string" === typeof e && (e = [e]),
                    e.forEach((function(e) {
                        n.options.ns.indexOf(e) < 0 && n.options.ns.push(e)
                    }
                    )),
                    this.loadResources((function(e) {
                        r.resolve(),
                        t && t(e)
                    }
                    )),
                    r) : (t && t(),
                    Promise.resolve())
                }
            }, {
                key: "loadLanguages",
                value: function(e, t) {
                    var n = S();
                    "string" === typeof e && (e = [e]);
                    var r = this.options.preload || []
                      , o = e.filter((function(e) {
                        return r.indexOf(e) < 0
                    }
                    ));
                    return o.length ? (this.options.preload = r.concat(o),
                    this.loadResources((function(e) {
                        n.resolve(),
                        t && t(e)
                    }
                    )),
                    n) : (t && t(),
                    Promise.resolve())
                }
            }, {
                key: "dir",
                value: function(e) {
                    if (e || (e = this.resolvedLanguage || (this.languages && this.languages.length > 0 ? this.languages[0] : this.language)),
                    !e)
                        return "rtl";
                    return ["ar", "shu", "sqr", "ssh", "xaa", "yhd", "yud", "aao", "abh", "abv", "acm", "acq", "acw", "acx", "acy", "adf", "ads", "aeb", "aec", "afb", "ajp", "apc", "apd", "arb", "arq", "ars", "ary", "arz", "auz", "avl", "ayh", "ayl", "ayn", "ayp", "bbz", "pga", "he", "iw", "ps", "pbt", "pbu", "pst", "prp", "prd", "ug", "ur", "ydd", "yds", "yih", "ji", "yi", "hbo", "men", "xmn", "fa", "jpr", "peo", "pes", "prs", "dv", "sam", "ckb"].indexOf(this.services.languageUtils.getLanguagePartFromCode(e)) > -1 || e.toLowerCase().indexOf("-arab") > 1 ? "rtl" : "ltr"
                }
            }, {
                key: "cloneInstance",
                value: function() {
                    var e = this
                      , t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                      , r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ge
                      , o = de(de(de({}, this.options), t), {
                        isClone: !0
                    })
                      , i = new n(o)
                      , a = ["store", "services", "language"];
                    return a.forEach((function(t) {
                        i[t] = e[t]
                    }
                    )),
                    i.services = de({}, this.services),
                    i.services.utils = {
                        hasLoadedNamespace: i.hasLoadedNamespace.bind(i)
                    },
                    i.translator = new H(i.services,i.options),
                    i.translator.on("*", (function(e) {
                        for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
                            n[r - 1] = arguments[r];
                        i.emit.apply(i, [e].concat(n))
                    }
                    )),
                    i.init(o, r),
                    i.translator.options = i.options,
                    i.translator.backendConnector.services.utils = {
                        hasLoadedNamespace: i.hasLoadedNamespace.bind(i)
                    },
                    i
                }
            }, {
                key: "toJSON",
                value: function() {
                    return {
                        options: this.options,
                        store: this.store,
                        language: this.language,
                        languages: this.languages,
                        resolvedLanguage: this.resolvedLanguage
                    }
                }
            }]),
            n
        }(b);
        (0,
        l.Z)(ve, "createInstance", (function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
              , t = arguments.length > 1 ? arguments[1] : void 0;
            return new ve(e,t)
        }
        ));
        var me = ve.createInstance();
        me.createInstance = ve.createInstance;
        me.createInstance,
        me.init,
        me.loadResources,
        me.reloadResources,
        me.use,
        me.changeLanguage,
        me.getFixedT;
        var ye = me.t
          , be = (me.exists,
        me.setDefaultNamespace,
        me.hasLoadedNamespace,
        me.loadNamespaces,
        me.loadLanguages,
        me)
    },
    2809: function(e, t, n) {
        "use strict";
        function r(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        n.d(t, {
            Z: function() {
                return r
            }
        })
    },
    2920: function(e, t, n) {
        "use strict";
        n.d(t, {
            Ix: function() {
                return A
            },
            Am: function() {
                return U
            }
        });
        var r = n(1720);
        function o(e) {
            var t, n, r = "";
            if ("string" === typeof e || "number" === typeof e)
                r += e;
            else if ("object" === typeof e)
                if (Array.isArray(e))
                    for (t = 0; t < e.length; t++)
                        e[t] && (n = o(e[t])) && (r && (r += " "),
                        r += n);
                else
                    for (t in e)
                        e[t] && (r && (r += " "),
                        r += t);
            return r
        }
        function i() {
            for (var e, t, n = 0, r = ""; n < arguments.length; )
                (e = arguments[n++]) && (t = o(e)) && (r && (r += " "),
                r += t);
            return r
        }
        function a(e) {
            return "number" === typeof e && !isNaN(e)
        }
        function s(e) {
            return "boolean" === typeof e
        }
        function c(e) {
            return "string" === typeof e
        }
        function u(e) {
            return "function" === typeof e
        }
        function l(e) {
            return c(e) || u(e) ? e : null
        }
        function f(e) {
            return 0 === e || e
        }
        function d(e) {
            return (0,
            r.isValidElement)(e) || c(e) || u(e) || a(e)
        }
        const p = {
            TOP_LEFT: "top-left",
            TOP_RIGHT: "top-right",
            TOP_CENTER: "top-center",
            BOTTOM_LEFT: "bottom-left",
            BOTTOM_RIGHT: "bottom-right",
            BOTTOM_CENTER: "bottom-center"
        }
          , g = {
            INFO: "info",
            SUCCESS: "success",
            WARNING: "warning",
            ERROR: "error",
            DEFAULT: "default"
        };
        function h(e) {
            let {enter: t, exit: n, appendPosition: o=!1, collapse: i=!0, collapseDuration: a=300} = e;
            return function(e) {
                let {children: s, position: c, preventExitTransition: u, done: l, nodeRef: f, isIn: d} = e;
                const p = o ? t + "--" + c : t
                  , g = o ? n + "--" + c : n
                  , h = (0,
                r.useRef)()
                  , v = (0,
                r.useRef)(0);
                function m(e) {
                    if (e.target !== f.current)
                        return;
                    const t = f.current;
                    t.dispatchEvent(new Event("d")),
                    t.removeEventListener("animationend", m),
                    t.removeEventListener("animationcancel", m),
                    0 === v.current && "animationcancel" !== e.type && (t.className = h.current)
                }
                function y() {
                    const e = f.current;
                    e.removeEventListener("animationend", y),
                    i ? function(e, t, n) {
                        void 0 === n && (n = 300);
                        const {scrollHeight: r, style: o} = e;
                        requestAnimationFrame((()=>{
                            o.minHeight = "initial",
                            o.height = r + "px",
                            o.transition = "all " + n + "ms",
                            requestAnimationFrame((()=>{
                                o.height = "0",
                                o.padding = "0",
                                o.margin = "0",
                                setTimeout(t, n)
                            }
                            ))
                        }
                        ))
                    }(e, l, a) : l()
                }
                return (0,
                r.useLayoutEffect)((()=>{
                    !function() {
                        const e = f.current;
                        h.current = e.className,
                        e.className += " " + p,
                        e.addEventListener("animationend", m),
                        e.addEventListener("animationcancel", m)
                    }()
                }
                ), []),
                (0,
                r.useEffect)((()=>{
                    d || (u ? y() : function() {
                        v.current = 1;
                        const e = f.current;
                        e.className += " " + g,
                        e.addEventListener("animationend", y)
                    }())
                }
                ), [d]),
                r.default.createElement(r.default.Fragment, null, s)
            }
        }
        function v(e, t) {
            return {
                content: e.content,
                containerId: e.props.containerId,
                id: e.props.toastId,
                theme: e.props.theme,
                type: e.props.type,
                data: e.props.data || {},
                isLoading: e.props.isLoading,
                icon: e.props.icon,
                status: t
            }
        }
        const m = {
            list: new Map,
            emitQueue: new Map,
            on(e, t) {
                return this.list.has(e) || this.list.set(e, []),
                this.list.get(e).push(t),
                this
            },
            off(e, t) {
                if (t) {
                    const n = this.list.get(e).filter((e=>e !== t));
                    return this.list.set(e, n),
                    this
                }
                return this.list.delete(e),
                this
            },
            cancelEmit(e) {
                const t = this.emitQueue.get(e);
                return t && (t.forEach(clearTimeout),
                this.emitQueue.delete(e)),
                this
            },
            emit(e) {
                this.list.has(e) && this.list.get(e).forEach((t=>{
                    const n = setTimeout((()=>{
                        t(...[].slice.call(arguments, 1))
                    }
                    ), 0);
                    this.emitQueue.has(e) || this.emitQueue.set(e, []),
                    this.emitQueue.get(e).push(n)
                }
                ))
            }
        }
          , y = e=>{
            let {theme: t, type: n, ...o} = e;
            return r.default.createElement("svg", {
                viewBox: "0 0 24 24",
                width: "100%",
                height: "100%",
                fill: "colored" === t ? "currentColor" : "var(--toastify-icon-color-" + n + ")",
                ...o
            })
        }
        ;
        const b = {
            info: function(e) {
                return r.default.createElement(y, {
                    ...e
                }, r.default.createElement("path", {
                    d: "M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"
                }))
            },
            warning: function(e) {
                return r.default.createElement(y, {
                    ...e
                }, r.default.createElement("path", {
                    d: "M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"
                }))
            },
            success: function(e) {
                return r.default.createElement(y, {
                    ...e
                }, r.default.createElement("path", {
                    d: "M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"
                }))
            },
            error: function(e) {
                return r.default.createElement(y, {
                    ...e
                }, r.default.createElement("path", {
                    d: "M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"
                }))
            },
            spinner: function() {
                return r.default.createElement("div", {
                    className: "Toastify__spinner"
                })
            }
        };
        function S(e) {
            let {theme: t, type: n, isLoading: o, icon: i} = e
              , s = null;
            const l = {
                theme: t,
                type: n
            };
            return !1 === i || (u(i) ? s = i(l) : (0,
            r.isValidElement)(i) ? s = (0,
            r.cloneElement)(i, l) : c(i) || a(i) ? s = i : o ? s = b.spinner() : (e=>e in b)(n) && (s = b[n](l))),
            s
        }
        function w(e) {
            const [,t] = (0,
            r.useReducer)((e=>e + 1), 0)
              , [n,o] = (0,
            r.useState)([])
              , i = (0,
            r.useRef)(null)
              , p = (0,
            r.useRef)(new Map).current
              , g = e=>-1 !== n.indexOf(e)
              , h = (0,
            r.useRef)({
                toastKey: 1,
                displayedToast: 0,
                count: 0,
                queue: [],
                props: e,
                containerId: null,
                isToastActive: g,
                getToast: e=>p.get(e)
            }).current;
            function y(e) {
                let {containerId: t} = e;
                const {limit: n} = h.props;
                !n || t && h.containerId !== t || (h.count -= h.queue.length,
                h.queue = [])
            }
            function b(e) {
                o((t=>f(e) ? t.filter((t=>t !== e)) : []))
            }
            function w() {
                const {toastContent: e, toastProps: t, staleId: n} = h.queue.shift();
                E(e, t, n)
            }
            function O(e, n) {
                let {delay: o, staleId: g, ...y} = n;
                if (!d(e) || function(e) {
                    return !i.current || h.props.enableMultiContainer && e.containerId !== h.props.containerId || p.has(e.toastId) && null == e.updateId
                }(y))
                    return;
                const {toastId: O, updateId: T, data: _} = y
                  , {props: k} = h
                  , P = ()=>b(O)
                  , x = null == T;
                x && h.count++;
                const A = {
                    toastId: O,
                    updateId: T,
                    data: _,
                    containerId: y.containerId,
                    isLoading: y.isLoading,
                    theme: y.theme || k.theme,
                    icon: null != y.icon ? y.icon : k.icon,
                    isIn: !1,
                    key: y.key || h.toastKey++,
                    type: y.type,
                    closeToast: P,
                    closeButton: y.closeButton,
                    rtl: k.rtl,
                    position: y.position || k.position,
                    transition: y.transition || k.transition,
                    className: l(y.className || k.toastClassName),
                    bodyClassName: l(y.bodyClassName || k.bodyClassName),
                    style: y.style || k.toastStyle,
                    bodyStyle: y.bodyStyle || k.bodyStyle,
                    onClick: y.onClick || k.onClick,
                    pauseOnHover: s(y.pauseOnHover) ? y.pauseOnHover : k.pauseOnHover,
                    pauseOnFocusLoss: s(y.pauseOnFocusLoss) ? y.pauseOnFocusLoss : k.pauseOnFocusLoss,
                    draggable: s(y.draggable) ? y.draggable : k.draggable,
                    draggablePercent: y.draggablePercent || k.draggablePercent,
                    draggableDirection: y.draggableDirection || k.draggableDirection,
                    closeOnClick: s(y.closeOnClick) ? y.closeOnClick : k.closeOnClick,
                    progressClassName: l(y.progressClassName || k.progressClassName),
                    progressStyle: y.progressStyle || k.progressStyle,
                    autoClose: !y.isLoading && (I = y.autoClose,
                    C = k.autoClose,
                    !1 === I || a(I) && I > 0 ? I : C),
                    hideProgressBar: s(y.hideProgressBar) ? y.hideProgressBar : k.hideProgressBar,
                    progress: y.progress,
                    role: y.role || k.role,
                    deleteToast() {
                        const e = v(p.get(O), "removed");
                        p.delete(O),
                        m.emit(4, e);
                        const n = h.queue.length;
                        if (h.count = f(O) ? h.count - 1 : h.count - h.displayedToast,
                        h.count < 0 && (h.count = 0),
                        n > 0) {
                            const e = f(O) ? 1 : h.props.limit;
                            if (1 === n || 1 === e)
                                h.displayedToast++,
                                w();
                            else {
                                const t = e > n ? n : e;
                                h.displayedToast = t;
                                for (let e = 0; e < t; e++)
                                    w()
                            }
                        } else
                            t()
                    }
                };
                var I, C;
                A.iconOut = S(A),
                u(y.onOpen) && (A.onOpen = y.onOpen),
                u(y.onClose) && (A.onClose = y.onClose),
                A.closeButton = k.closeButton,
                !1 === y.closeButton || d(y.closeButton) ? A.closeButton = y.closeButton : !0 === y.closeButton && (A.closeButton = !d(k.closeButton) || k.closeButton);
                let L = e;
                (0,
                r.isValidElement)(e) && !c(e.type) ? L = (0,
                r.cloneElement)(e, {
                    closeToast: P,
                    toastProps: A,
                    data: _
                }) : u(e) && (L = e({
                    closeToast: P,
                    toastProps: A,
                    data: _
                })),
                k.limit && k.limit > 0 && h.count > k.limit && x ? h.queue.push({
                    toastContent: L,
                    toastProps: A,
                    staleId: g
                }) : a(o) ? setTimeout((()=>{
                    E(L, A, g)
                }
                ), o) : E(L, A, g)
            }
            function E(e, t, n) {
                const {toastId: r} = t;
                n && p.delete(n);
                const i = {
                    content: e,
                    props: t
                };
                p.set(r, i),
                o((e=>[...e, r].filter((e=>e !== n)))),
                m.emit(4, v(i, null == i.props.updateId ? "added" : "updated"))
            }
            return (0,
            r.useEffect)((()=>(h.containerId = e.containerId,
            m.cancelEmit(3).on(0, O).on(1, (e=>i.current && b(e))).on(5, y).emit(2, h),
            ()=>{
                p.clear(),
                m.emit(3, h)
            }
            )), []),
            (0,
            r.useEffect)((()=>{
                h.props = e,
                h.isToastActive = g,
                h.displayedToast = n.length
            }
            )),
            {
                getToastToRender: function(t) {
                    const n = new Map
                      , r = Array.from(p.values());
                    return e.newestOnTop && r.reverse(),
                    r.forEach((e=>{
                        const {position: t} = e.props;
                        n.has(t) || n.set(t, []),
                        n.get(t).push(e)
                    }
                    )),
                    Array.from(n, (e=>t(e[0], e[1])))
                },
                containerRef: i,
                isToastActive: g
            }
        }
        function O(e) {
            return e.targetTouches && e.targetTouches.length >= 1 ? e.targetTouches[0].clientX : e.clientX
        }
        function E(e) {
            return e.targetTouches && e.targetTouches.length >= 1 ? e.targetTouches[0].clientY : e.clientY
        }
        function T(e) {
            const [t,n] = (0,
            r.useState)(!1)
              , [o,i] = (0,
            r.useState)(!1)
              , a = (0,
            r.useRef)(null)
              , s = (0,
            r.useRef)({
                start: 0,
                x: 0,
                y: 0,
                delta: 0,
                removalDistance: 0,
                canCloseOnClick: !0,
                canDrag: !1,
                boundingRect: null,
                didMove: !1
            }).current
              , c = (0,
            r.useRef)(e)
              , {autoClose: l, pauseOnHover: f, closeToast: d, onClick: p, closeOnClick: g} = e;
            function h(t) {
                if (e.draggable) {
                    s.didMove = !1,
                    document.addEventListener("mousemove", b),
                    document.addEventListener("mouseup", S),
                    document.addEventListener("touchmove", b),
                    document.addEventListener("touchend", S);
                    const n = a.current;
                    s.canCloseOnClick = !0,
                    s.canDrag = !0,
                    s.boundingRect = n.getBoundingClientRect(),
                    n.style.transition = "",
                    s.x = O(t.nativeEvent),
                    s.y = E(t.nativeEvent),
                    "x" === e.draggableDirection ? (s.start = s.x,
                    s.removalDistance = n.offsetWidth * (e.draggablePercent / 100)) : (s.start = s.y,
                    s.removalDistance = n.offsetHeight * (80 === e.draggablePercent ? 1.5 * e.draggablePercent : e.draggablePercent / 100))
                }
            }
            function v() {
                if (s.boundingRect) {
                    const {top: t, bottom: n, left: r, right: o} = s.boundingRect;
                    e.pauseOnHover && s.x >= r && s.x <= o && s.y >= t && s.y <= n ? y() : m()
                }
            }
            function m() {
                n(!0)
            }
            function y() {
                n(!1)
            }
            function b(n) {
                const r = a.current;
                s.canDrag && r && (s.didMove = !0,
                t && y(),
                s.x = O(n),
                s.y = E(n),
                "x" === e.draggableDirection ? s.delta = s.x - s.start : s.delta = s.y - s.start,
                s.start !== s.x && (s.canCloseOnClick = !1),
                r.style.transform = "translate" + e.draggableDirection + "(" + s.delta + "px)",
                r.style.opacity = "" + (1 - Math.abs(s.delta / s.removalDistance)))
            }
            function S() {
                document.removeEventListener("mousemove", b),
                document.removeEventListener("mouseup", S),
                document.removeEventListener("touchmove", b),
                document.removeEventListener("touchend", S);
                const t = a.current;
                if (s.canDrag && s.didMove && t) {
                    if (s.canDrag = !1,
                    Math.abs(s.delta) > s.removalDistance)
                        return i(!0),
                        void e.closeToast();
                    t.style.transition = "transform 0.2s, opacity 0.2s",
                    t.style.transform = "translate" + e.draggableDirection + "(0)",
                    t.style.opacity = "1"
                }
            }
            (0,
            r.useEffect)((()=>{
                c.current = e
            }
            )),
            (0,
            r.useEffect)((()=>(a.current && a.current.addEventListener("d", m, {
                once: !0
            }),
            u(e.onOpen) && e.onOpen((0,
            r.isValidElement)(e.children) && e.children.props),
            ()=>{
                const e = c.current;
                u(e.onClose) && e.onClose((0,
                r.isValidElement)(e.children) && e.children.props)
            }
            )), []),
            (0,
            r.useEffect)((()=>(e.pauseOnFocusLoss && function() {
                document.hasFocus() || y();
                window.addEventListener("focus", m),
                window.addEventListener("blur", y)
            }(),
            ()=>{
                e.pauseOnFocusLoss && (window.removeEventListener("focus", m),
                window.removeEventListener("blur", y))
            }
            )), [e.pauseOnFocusLoss]);
            const w = {
                onMouseDown: h,
                onTouchStart: h,
                onMouseUp: v,
                onTouchEnd: v
            };
            return l && f && (w.onMouseEnter = y,
            w.onMouseLeave = m),
            g && (w.onClick = e=>{
                p && p(e),
                s.canCloseOnClick && d()
            }
            ),
            {
                playToast: m,
                pauseToast: y,
                isRunning: t,
                preventExitTransition: o,
                toastRef: a,
                eventHandlers: w
            }
        }
        function _(e) {
            let {closeToast: t, theme: n, ariaLabel: o="close"} = e;
            return r.default.createElement("button", {
                className: "Toastify__close-button Toastify__close-button--" + n,
                type: "button",
                onClick: e=>{
                    e.stopPropagation(),
                    t(e)
                }
                ,
                "aria-label": o
            }, r.default.createElement("svg", {
                "aria-hidden": "true",
                viewBox: "0 0 14 16"
            }, r.default.createElement("path", {
                fillRule: "evenodd",
                d: "M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"
            })))
        }
        function k(e) {
            let {delay: t, isRunning: n, closeToast: o, type: a, hide: s, className: c, style: l, controlledProgress: f, progress: d, rtl: p, isIn: g, theme: h} = e;
            const v = {
                ...l,
                animationDuration: t + "ms",
                animationPlayState: n ? "running" : "paused",
                opacity: s ? 0 : 1
            };
            f && (v.transform = "scaleX(" + d + ")");
            const m = i("Toastify__progress-bar", f ? "Toastify__progress-bar--controlled" : "Toastify__progress-bar--animated", "Toastify__progress-bar-theme--" + h, "Toastify__progress-bar--" + a, {
                "Toastify__progress-bar--rtl": p
            })
              , y = u(c) ? c({
                rtl: p,
                type: a,
                defaultClassName: m
            }) : i(m, c)
              , b = {
                [f && d >= 1 ? "onTransitionEnd" : "onAnimationEnd"]: f && d < 1 ? null : ()=>{
                    g && o()
                }
            };
            return r.default.createElement("div", {
                role: "progressbar",
                "aria-hidden": s ? "true" : "false",
                "aria-label": "notification timer",
                className: y,
                style: v,
                ...b
            })
        }
        k.defaultProps = {
            type: g.DEFAULT,
            hide: !1
        };
        const P = e=>{
            const {isRunning: t, preventExitTransition: n, toastRef: o, eventHandlers: a} = T(e)
              , {closeButton: s, children: c, autoClose: l, onClick: f, type: d, hideProgressBar: p, closeToast: g, transition: h, position: v, className: m, style: y, bodyClassName: b, bodyStyle: S, progressClassName: w, progressStyle: O, updateId: E, role: P, progress: x, rtl: A, toastId: I, deleteToast: C, isIn: L, isLoading: R, iconOut: N, theme: D} = e
              , j = i("Toastify__toast", "Toastify__toast-theme--" + D, "Toastify__toast--" + d, {
                "Toastify__toast--rtl": A
            })
              , M = u(m) ? m({
                rtl: A,
                position: v,
                type: d,
                defaultClassName: j
            }) : i(j, m)
              , U = !!x
              , F = {
                closeToast: g,
                type: d,
                theme: D
            };
            let Z = null;
            return !1 === s || (Z = u(s) ? s(F) : r.default.isValidElement(s) ? r.default.cloneElement(s, F) : _(F)),
            r.default.createElement(h, {
                isIn: L,
                done: C,
                position: v,
                preventExitTransition: n,
                nodeRef: o
            }, r.default.createElement("div", {
                id: I,
                onClick: f,
                className: M,
                ...a,
                style: y,
                ref: o
            }, r.default.createElement("div", {
                ...L && {
                    role: P
                },
                className: u(b) ? b({
                    type: d
                }) : i("Toastify__toast-body", b),
                style: S
            }, null != N && r.default.createElement("div", {
                className: i("Toastify__toast-icon", {
                    "Toastify--animate-icon Toastify__zoom-enter": !R
                })
            }, N), r.default.createElement("div", null, c)), Z, (l || U) && r.default.createElement(k, {
                ...E && !U ? {
                    key: "pb-" + E
                } : {},
                rtl: A,
                theme: D,
                delay: l,
                isRunning: t,
                isIn: L,
                closeToast: g,
                hide: p,
                type: d,
                style: O,
                className: w,
                controlledProgress: U,
                progress: x
            })))
        }
          , x = h({
            enter: "Toastify--animate Toastify__bounce-enter",
            exit: "Toastify--animate Toastify__bounce-exit",
            appendPosition: !0
        })
          , A = (h({
            enter: "Toastify--animate Toastify__slide-enter",
            exit: "Toastify--animate Toastify__slide-exit",
            appendPosition: !0
        }),
        h({
            enter: "Toastify--animate Toastify__zoom-enter",
            exit: "Toastify--animate Toastify__zoom-exit"
        }),
        h({
            enter: "Toastify--animate Toastify__flip-enter",
            exit: "Toastify--animate Toastify__flip-exit"
        }),
        (0,
        r.forwardRef)(((e,t)=>{
            const {getToastToRender: n, containerRef: o, isToastActive: a} = w(e)
              , {className: s, style: c, rtl: f, containerId: d} = e;
            function p(e) {
                const t = i("Toastify__toast-container", "Toastify__toast-container--" + e, {
                    "Toastify__toast-container--rtl": f
                });
                return u(s) ? s({
                    position: e,
                    rtl: f,
                    defaultClassName: t
                }) : i(t, l(s))
            }
            return (0,
            r.useEffect)((()=>{
                t && (t.current = o.current)
            }
            ), []),
            r.default.createElement("div", {
                ref: o,
                className: "Toastify",
                id: d
            }, n(((e,t)=>{
                const n = t.length ? {
                    ...c
                } : {
                    ...c,
                    pointerEvents: "none"
                };
                return r.default.createElement("div", {
                    className: p(e),
                    style: n,
                    key: "container-" + e
                }, t.map(((e,n)=>{
                    let {content: o, props: i} = e;
                    return r.default.createElement(P, {
                        ...i,
                        isIn: a(i.toastId),
                        style: {
                            ...i.style,
                            "--nth": n + 1,
                            "--len": t.length
                        },
                        key: "toast-" + i.key
                    }, o)
                }
                )))
            }
            )))
        }
        )));
        A.displayName = "ToastContainer",
        A.defaultProps = {
            position: p.TOP_RIGHT,
            transition: x,
            rtl: !1,
            autoClose: 5e3,
            hideProgressBar: !1,
            closeButton: _,
            pauseOnHover: !0,
            pauseOnFocusLoss: !0,
            closeOnClick: !0,
            newestOnTop: !1,
            draggable: !0,
            draggablePercent: 80,
            draggableDirection: "x",
            role: "alert",
            theme: "light"
        };
        let I, C = new Map, L = [];
        function R() {
            return Math.random().toString(36).substring(2, 9)
        }
        function N(e) {
            return e && (c(e.toastId) || a(e.toastId)) ? e.toastId : R()
        }
        function D(e, t) {
            return C.size > 0 ? m.emit(0, e, t) : L.push({
                content: e,
                options: t
            }),
            t.toastId
        }
        function j(e, t) {
            return {
                ...t,
                type: t && t.type || e,
                toastId: N(t)
            }
        }
        function M(e) {
            return (t,n)=>D(t, j(e, n))
        }
        function U(e, t) {
            return D(e, j(g.DEFAULT, t))
        }
        U.loading = (e,t)=>D(e, j(g.DEFAULT, {
            isLoading: !0,
            autoClose: !1,
            closeOnClick: !1,
            closeButton: !1,
            draggable: !1,
            ...t
        })),
        U.promise = function(e, t, n) {
            let r, {pending: o, error: i, success: a} = t;
            o && (r = c(o) ? U.loading(o, n) : U.loading(o.render, {
                ...n,
                ...o
            }));
            const s = {
                isLoading: null,
                autoClose: null,
                closeOnClick: null,
                closeButton: null,
                draggable: null,
                delay: 100
            }
              , l = (e,t,o)=>{
                if (null == t)
                    return void U.dismiss(r);
                const i = {
                    type: e,
                    ...s,
                    ...n,
                    data: o
                }
                  , a = c(t) ? {
                    render: t
                } : t;
                return r ? U.update(r, {
                    ...i,
                    ...a
                }) : U(a.render, {
                    ...i,
                    ...a
                }),
                o
            }
              , f = u(e) ? e() : e;
            return f.then((e=>l("success", a, e))).catch((e=>l("error", i, e))),
            f
        }
        ,
        U.success = M(g.SUCCESS),
        U.info = M(g.INFO),
        U.error = M(g.ERROR),
        U.warning = M(g.WARNING),
        U.warn = U.warning,
        U.dark = (e,t)=>D(e, j(g.DEFAULT, {
            theme: "dark",
            ...t
        })),
        U.dismiss = e=>m.emit(1, e),
        U.clearWaitingQueue = function(e) {
            return void 0 === e && (e = {}),
            m.emit(5, e)
        }
        ,
        U.isActive = e=>{
            let t = !1;
            return C.forEach((n=>{
                n.isToastActive && n.isToastActive(e) && (t = !0)
            }
            )),
            t
        }
        ,
        U.update = function(e, t) {
            void 0 === t && (t = {}),
            setTimeout((()=>{
                const n = function(e, t) {
                    let {containerId: n} = t;
                    const r = C.get(n || I);
                    return r ? r.getToast(e) : null
                }(e, t);
                if (n) {
                    const {props: r, content: o} = n
                      , i = {
                        ...r,
                        ...t,
                        toastId: t.toastId || e,
                        updateId: R()
                    };
                    i.toastId !== e && (i.staleId = e);
                    const a = i.render || o;
                    delete i.render,
                    D(a, i)
                }
            }
            ), 0)
        }
        ,
        U.done = e=>{
            U.update(e, {
                progress: 1
            })
        }
        ,
        U.onChange = e=>(m.on(4, e),
        ()=>{
            m.off(4, e)
        }
        ),
        U.POSITION = p,
        U.TYPE = g,
        m.on(2, (e=>{
            I = e.containerId || e,
            C.set(I, e),
            L.forEach((e=>{
                m.emit(0, e.content, e.options)
            }
            )),
            L = []
        }
        )).on(3, (e=>{
            C.delete(e.containerId || e),
            0 === C.size && m.off(0).off(1).off(5)
        }
        ))
    }
}, function(e) {
    var t = function(t) {
        return e(e.s = t)
    };
    e.O(0, [774, 179], (function() {
        return t(6363),
        t(9898)
    }
    ));
    var n = e.O();
    _N_E = n
}
]);
//# sourceMappingURL=_app-3a1e61858fc33531.js.map
