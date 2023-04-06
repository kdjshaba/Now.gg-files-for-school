(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[61], {
    534: function() {
        (function(n, e, t) {
            function i(n, e) {
                return typeof n === e
            }
            function o(n) {
                return n.replace(/([a-z])-([a-z])/g, (function(n, e, t) {
                    return e + t.toUpperCase()
                }
                )).replace(/^-/, "")
            }
            function r() {
                return "function" != typeof e.createElement ? e.createElement(arguments[0]) : b ? e.createElementNS.call(e, "http://www.w3.org/2000/svg", arguments[0]) : e.createElement.apply(e, arguments)
            }
            function a(n, e) {
                return !!~("" + n).indexOf(e)
            }
            function l(n, e) {
                return function() {
                    return n.apply(e, arguments)
                }
            }
            function d(n) {
                return n.replace(/([A-Z])/g, (function(n, e) {
                    return "-" + e.toLowerCase()
                }
                )).replace(/^ms-/, "-ms-")
            }
            function c(e, t, i) {
                var o;
                if ("getComputedStyle"in n) {
                    o = getComputedStyle.call(n, e, t);
                    var r = n.console;
                    if (null !== o)
                        i && (o = o.getPropertyValue(i));
                    else if (r) {
                        r[r.error ? "error" : "log"].call(r, "getComputedStyle returning null, its possible modernizr test results are inaccurate")
                    }
                } else
                    o = !t && e.currentStyle && e.currentStyle[i];
                return o
            }
            function s(n, t, i, o) {
                var a, l, d, c, s = "modernizr", u = r("div"), p = function() {
                    var n = e.body;
                    return n || ((n = r(b ? "svg" : "body")).fake = !0),
                    n
                }();
                if (parseInt(i, 10))
                    for (; i--; )
                        (d = r("div")).id = o ? o[i] : s + (i + 1),
                        u.appendChild(d);
                return (a = r("style")).type = "text/css",
                a.id = "s" + s,
                (p.fake ? p : u).appendChild(a),
                p.appendChild(u),
                a.styleSheet ? a.styleSheet.cssText = n : a.appendChild(e.createTextNode(n)),
                u.id = s,
                p.fake && (p.style.background = "",
                p.style.overflow = "hidden",
                c = v.style.overflow,
                v.style.overflow = "hidden",
                v.appendChild(p)),
                l = t(u, n),
                p.fake ? (p.parentNode.removeChild(p),
                v.style.overflow = c,
                v.offsetHeight) : u.parentNode.removeChild(u),
                !!l
            }
            function u(e, i) {
                var o = e.length;
                if ("CSS"in n && "supports"in n.CSS) {
                    for (; o--; )
                        if (n.CSS.supports(d(e[o]), i))
                            return !0;
                    return !1
                }
                if ("CSSSupportsRule"in n) {
                    for (var r = []; o--; )
                        r.push("(" + d(e[o]) + ":" + i + ")");
                    return s("@supports (" + (r = r.join(" or ")) + ") { #modernizr { position: absolute; } }", (function(n) {
                        return "absolute" == c(n, null, "position")
                    }
                    ))
                }
                return t
            }
            function p(n, e, l, d) {
                function c() {
                    p && (delete S.style,
                    delete S.modElem)
                }
                if (d = !i(d, "undefined") && d,
                !i(l, "undefined")) {
                    var s = u(n, l);
                    if (!i(s, "undefined"))
                        return s
                }
                for (var p, f, h, m, x, v = ["modernizr", "tspan", "samp"]; !S.style && v.length; )
                    p = !0,
                    S.modElem = r(v.shift()),
                    S.style = S.modElem.style;
                for (h = n.length,
                f = 0; h > f; f++)
                    if (m = n[f],
                    x = S.style[m],
                    a(m, "-") && (m = o(m)),
                    S.style[m] !== t) {
                        if (d || i(l, "undefined"))
                            return c(),
                            "pfx" != e || m;
                        try {
                            S.style[m] = l
                        } catch (g) {}
                        if (S.style[m] != x)
                            return c(),
                            "pfx" != e || m
                    }
                return c(),
                !1
            }
            function f(n, e, t, o, r) {
                var a = n.charAt(0).toUpperCase() + n.slice(1)
                  , d = (n + " " + Z.join(a + " ") + a).split(" ");
                return i(e, "string") || i(e, "undefined") ? p(d, e, o, r) : function(n, e, t) {
                    var o;
                    for (var r in n)
                        if (n[r]in e)
                            return !1 === t ? n[r] : i(o = e[n[r]], "function") ? l(o, t || e) : o;
                    return !1
                }(d = (n + " " + A.join(a + " ") + a).split(" "), e, t)
            }
            var h = []
              , g = {
                _version: "3.6.0",
                _config: {
                    classPrefix: "",
                    enableClasses: !0,
                    enableJSClass: !0,
                    usePrefixes: !0
                },
                _q: [],
                on: function(n, e) {
                    var t = this;
                    setTimeout((function() {
                        e(t[n])
                    }
                    ), 0)
                },
                addTest: function(n, e, t) {
                    h.push({
                        name: n,
                        fn: e,
                        options: t
                    })
                },
                addAsyncTest: function(n) {
                    h.push({
                        name: null,
                        fn: n
                    })
                }
            }
              , m = function() {};
            m.prototype = g,
            m = new m;
            var x = []
              , v = e.documentElement
              , b = "svg" === v.nodeName.toLowerCase();
            m.addTest("canvas", (function() {
                var n = r("canvas");
                return !(!n.getContext || !n.getContext("2d"))
            }
            ));
            var y = r("canvas");
            m.addTest("todataurljpeg", (function() {
                return !!m.canvas && 0 === y.toDataURL("image/jpeg").indexOf("data:image/jpeg")
            }
            )),
            m.addTest("todataurlpng", (function() {
                return !!m.canvas && 0 === y.toDataURL("image/png").indexOf("data:image/png")
            }
            )),
            m.addTest("todataurlwebp", (function() {
                var n = !1;
                try {
                    n = !!m.canvas && 0 === y.toDataURL("image/webp").indexOf("data:image/webp")
                } catch (e) {}
                return n
            }
            ));
            var w = "Moz O ms Webkit"
              , Z = g._config.usePrefixes ? w.split(" ") : [];
            g._cssomPrefixes = Z;
            var k = function(e) {
                var i, o = prefixes.length, r = n.CSSRule;
                if ("undefined" == typeof r)
                    return t;
                if (!e)
                    return !1;
                if ((i = (e = e.replace(/^@/, "")).replace(/-/g, "_").toUpperCase() + "_RULE")in r)
                    return "@" + e;
                for (var a = 0; o > a; a++) {
                    var l = prefixes[a];
                    if (l.toUpperCase() + "_" + i in r)
                        return "@-" + l.toLowerCase() + "-" + e
                }
                return !1
            };
            g.atRule = k;
            var A = g._config.usePrefixes ? w.toLowerCase().split(" ") : [];
            g._domPrefixes = A;
            var P = {
                elem: r("modernizr")
            };
            m._q.push((function() {
                delete P.elem
            }
            ));
            var S = {
                style: P.elem.style
            };
            m._q.unshift((function() {
                delete S.style
            }
            )),
            g.testAllProps = f;
            var E = g.prefixed = function(n, e, t) {
                return 0 === n.indexOf("@") ? k(n) : (-1 != n.indexOf("-") && (n = o(n)),
                e ? f(n, e, t) : f(n, "pfx"))
            }
            ;
            m.addTest("peerconnection", !!E("RTCPeerConnection", n)),
            function() {
                var n, e, t, o, r, a;
                for (var l in h)
                    if (h.hasOwnProperty(l)) {
                        if (n = [],
                        (e = h[l]).name && (n.push(e.name.toLowerCase()),
                        e.options && e.options.aliases && e.options.aliases.length))
                            for (t = 0; t < e.options.aliases.length; t++)
                                n.push(e.options.aliases[t].toLowerCase());
                        for (o = i(e.fn, "function") ? e.fn() : e.fn,
                        r = 0; r < n.length; r++)
                            1 === (a = n[r].split(".")).length ? m[a[0]] = o : (!m[a[0]] || m[a[0]]instanceof Boolean || (m[a[0]] = new Boolean(m[a[0]])),
                            m[a[0]][a[1]] = o),
                            x.push((o ? "" : "no-") + a.join("-"))
                    }
            }(),
            delete g.addTest,
            delete g.addAsyncTest;
            for (var C = 0; C < m._q.length; C++)
                m._q[C]();
            n.Modernizr = m
        }
        )(window, document)
    },
    9735: function(n, e, t) {
        "use strict";
        t.r(e),
        t.d(e, {
            PlayPage: function() {
                return mp
            },
            default: function() {
                return xp
            }
        });
        var i, o, r, a, l, d, c, s, u, p, f, h, g, m, x, v, b, y, w, Z, k, A, P, S, E, C, T, I, O, j, D, L, z, M, N, B, R, _, U, H, F, X, G, V = t(1720), K = t(20), Y = t(4857), W = t(8294), q = t(8041), Q = t(9555), J = t(5617), $ = t(1739), nn = t(5628), en = t(1508), tn = function(n) {
            var e = en.Z.getState().play.servingRegion
              , t = en.Z.getState()
              , i = t.ads.playtime
              , o = t.play.isProxyUser
              , r = "true" === sessionStorage.getItem("gdprApplies")
              , a = W.ZP.compressedPackage
              , l = (0,
            W.We)()
              , d = l.utmCampaign
              , c = l.utmSource
              , s = "true" === sessionStorage.getItem("isNewUser")
              , u = "now.us" === window.location.hostname
              , p = {
                game: null === n || void 0 === n ? void 0 : n.appSlug,
                genre: null === n || void 0 === n ? void 0 : n.appGenre,
                "instance-region": e,
                ads_project: "v3",
                ads_site: "nowgg_proxy" === d ? "mathsspot" : "ropro" === d ? "ropro" : "fredboat" === d ? "fredboat" : "carl" === d ? "carl" : u ? "nowus" : "nowgg",
                app_package: n.packageName.length < 40 ? n.packageName : a,
                playtime: (i <= 15 ? i : 5 * Math.ceil(i / 5)).toString(),
                utype: s ? "new" : "returning",
                ads_status: o ? "p" : "np"
            };
            if (r) {
                var f = "true" === sessionStorage.getItem("userConsent");
                p.cs = f ? "t" : "f"
            }
            if ("gamepix" === c && (p.ads_campaign = "gamepix"),
            "ropro" === d && (p.ads_campaign = "ropro"),
            "gamepix" === c && (p.ads_campaign = "gamepix"),
            "ropro" === d && (p.ads_campaign = "ropro"),
            (0,
            W.Lp)("play-page")) {
                var h = (0,
                W.yS)();
                p.evar = h.evar
            }
            return p
        }, on = t(8309), rn = t(445), an = function(n, e) {
            return Object.defineProperty ? Object.defineProperty(n, "raw", {
                value: e
            }) : n.raw = e,
            n
        }, ln = rn.ZP.div(i || (i = an(["\n    position: absolute;\n    top: 50%;\n    left: ", ";\n    transform: translateY(-50%);\n    pointer-events: all;\n    max-height: calc(100vh - 80px);\n    height: 600px;\n    width: 160px;\n    overflow-y: scroll;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    &.skyScrapperSecond {\n        right: ", ";\n        left: unset;\n    }\n    scrollbar-width: none;\n    -ms-overflow-style: none;\n"], ["\n    position: absolute;\n    top: 50%;\n    left: ", ";\n    transform: translateY(-50%);\n    pointer-events: all;\n    max-height: calc(100vh - 80px);\n    height: 600px;\n    width: 160px;\n    overflow-y: scroll;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    &.skyScrapperSecond {\n        right: ", ";\n        left: unset;\n    }\n    scrollbar-width: none;\n    -ms-overflow-style: none;\n"])), (function(n) {
            return n.isHtmlGame ? "8px" : "0px"
        }
        ), (function(n) {
            return n.isHtmlGame ? "8px" : "0px"
        }
        )), dn = rn.ZP.div(o || (o = an(["\n    position: absolute;\n    left: 50%;\n    top: ", ";\n    transform: translateX(-50%);\n    pointer-events: all;\n    max-width: ", ";\n    ", ";\n    height: 90px;\n    width: 970px;\n    overflow-x: scroll;\n    align-items: center;\n    justify-content: center;\n    display: flex;\n    &.leaderBoardSecond {\n        bottom: ", ";\n        top: unset;\n    }\n    scrollbar-width: none;\n    -ms-overflow-style: none;\n"], ["\n    position: absolute;\n    left: 50%;\n    top: ", ";\n    transform: translateX(-50%);\n    pointer-events: all;\n    max-width: ", ";\n    ", ";\n    height: 90px;\n    width: 970px;\n    overflow-x: scroll;\n    align-items: center;\n    justify-content: center;\n    display: flex;\n    &.leaderBoardSecond {\n        bottom: ", ";\n        top: unset;\n    }\n    scrollbar-width: none;\n    -ms-overflow-style: none;\n"])), (function(n) {
            return n.isHtmlGame ? "8px" : "0px"
        }
        ), (function(n) {
            return n.mobile ? "100vh" : "100vw"
        }
        ), (function(n) {
            var e, t, i = n.mobile, o = n.theme;
            return i ? null === (e = o.colors) || void 0 === e ? void 0 : e.transparent : null === (t = o.colors) || void 0 === t ? void 0 : t.base800
        }
        ), (function(n) {
            return n.isHtmlGame ? "8px" : "0px"
        }
        )), cn = t(7997), sn = function() {
            return (sn = Object.assign || function(n) {
                for (var e, t = 1, i = arguments.length; t < i; t++)
                    for (var o in e = arguments[t])
                        Object.prototype.hasOwnProperty.call(e, o) && (n[o] = e[o]);
                return n
            }
            ).apply(this, arguments)
        }, un = function(n, e, t, i) {
            return new (t || (t = Promise))((function(o, r) {
                function a(n) {
                    try {
                        d(i.next(n))
                    } catch (e) {
                        r(e)
                    }
                }
                function l(n) {
                    try {
                        d(i.throw(n))
                    } catch (e) {
                        r(e)
                    }
                }
                function d(n) {
                    var e;
                    n.done ? o(n.value) : (e = n.value,
                    e instanceof t ? e : new t((function(n) {
                        n(e)
                    }
                    ))).then(a, l)
                }
                d((i = i.apply(n, e || [])).next())
            }
            ))
        }, pn = function(n, e) {
            var t, i, o, r, a = {
                label: 0,
                sent: function() {
                    if (1 & o[0])
                        throw o[1];
                    return o[1]
                },
                trys: [],
                ops: []
            };
            return r = {
                next: l(0),
                throw: l(1),
                return: l(2)
            },
            "function" === typeof Symbol && (r[Symbol.iterator] = function() {
                return this
            }
            ),
            r;
            function l(r) {
                return function(l) {
                    return function(r) {
                        if (t)
                            throw new TypeError("Generator is already executing.");
                        for (; a; )
                            try {
                                if (t = 1,
                                i && (o = 2 & r[0] ? i.return : r[0] ? i.throw || ((o = i.return) && o.call(i),
                                0) : i.next) && !(o = o.call(i, r[1])).done)
                                    return o;
                                switch (i = 0,
                                o && (r = [2 & r[0], o.value]),
                                r[0]) {
                                case 0:
                                case 1:
                                    o = r;
                                    break;
                                case 4:
                                    return a.label++,
                                    {
                                        value: r[1],
                                        done: !1
                                    };
                                case 5:
                                    a.label++,
                                    i = r[1],
                                    r = [0];
                                    continue;
                                case 7:
                                    r = a.ops.pop(),
                                    a.trys.pop();
                                    continue;
                                default:
                                    if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === r[0] || 2 === r[0])) {
                                        a = 0;
                                        continue
                                    }
                                    if (3 === r[0] && (!o || r[1] > o[0] && r[1] < o[3])) {
                                        a.label = r[1];
                                        break
                                    }
                                    if (6 === r[0] && a.label < o[1]) {
                                        a.label = o[1],
                                        o = r;
                                        break
                                    }
                                    if (o && a.label < o[2]) {
                                        a.label = o[2],
                                        a.ops.push(r);
                                        break
                                    }
                                    o[2] && a.ops.pop(),
                                    a.trys.pop();
                                    continue
                                }
                                r = e.call(n, a)
                            } catch (l) {
                                r = [6, l],
                                i = 0
                            } finally {
                                t = o = 0
                            }
                        if (5 & r[0])
                            throw r[1];
                        return {
                            value: r[0] ? r[1] : void 0,
                            done: !0
                        }
                    }([r, l])
                }
            }
        }, fn = function() {
            var n = (0,
            J.I0)()
              , e = (0,
            V.useRef)(null)
              , t = (0,
            V.useRef)(null)
              , i = (0,
            V.useRef)(null)
              , o = (0,
            V.useRef)(null)
              , r = (0,
            J.v9)((function(n) {
                return n.play.isHtmlGame
            }
            ))
              , a = (0,
            J.v9)((function(n) {
                return n.play.orientation
            }
            ))
              , l = (0,
            J.v9)((function(n) {
                return n.play.videoContainerRef
            }
            ))
              , d = (0,
            J.v9)((function(n) {
                return n.play.videoRef
            }
            ))
              , c = (0,
            V.useState)("")
              , s = c[0]
              , u = c[1]
              , p = (0,
            V.useState)(!1)
              , f = p[0]
              , h = p[1]
              , g = (0,
            V.useContext)(K.x)
              , m = (0,
            J.v9)((function(n) {
                return n.play.userIPObject
            }
            ))
              , x = (0,
            V.useRef)(null)
              , v = (0,
            V.useRef)(!1)
              , b = function() {
                "visible" === document.visibilityState && v.current && (h(!0),
                v.current = !1,
                x.current = setInterval((function() {
                    h(!0)
                }
                ), 3e4))
            };
            return (0,
            V.useEffect)((function() {
                if (f) {
                    if ("hidden" === document.visibilityState)
                        return clearInterval(x.current),
                        v.current = !0,
                        void h(!1);
                    var n = tn(g);
                    s === $.us ? (window.tudeDisplay = window.tudeDisplay || {
                        cmd: []
                    },
                    window.tudeDisplay.cmd.push((function() {
                        window.tudeDisplay.refreshAdsViaDivMappings([{
                            divId: "div-gpt-ad-skyScrapper-1",
                            baseDivId: "pb-slot-incontent-large",
                            targeting: sn(sn({}, n), {
                                ads_loc: "display-ss-left"
                            })
                        }, {
                            divId: "div-gpt-ad-skyScrapper-2",
                            baseDivId: "pb-slot-incontent-large",
                            targeting: sn(sn({}, n), {
                                ads_loc: "display-ss-right"
                            })
                        }])
                    }
                    ))) : s === $.V && (window.tudeDisplay = window.tudeDisplay || {
                        cmd: []
                    },
                    window.tudeDisplay.cmd.push((function() {
                        window.tudeDisplay.refreshAdsViaDivMappings([{
                            divId: "div-gpt-ad-leaderBoard-1",
                            baseDivId: "pb-slot-incontent-small",
                            targeting: sn(sn({}, n), {
                                ads_loc: "display-lb-top"
                            })
                        }, {
                            divId: "div-gpt-ad-leaderBoard-2",
                            baseDivId: "pb-slot-incontent-small",
                            targeting: sn(sn({}, n), {
                                ads_loc: "display-lb-bottom"
                            })
                        }])
                    }
                    ))),
                    h(!1)
                }
            }
            ), [f]),
            (0,
            V.useEffect)((function() {
                document.addEventListener("visibilitychange", b);
                var r, c = tn(g), s = function() {
                    var n, e, t, i = (null === l || void 0 === l ? void 0 : l.current) ? null === l || void 0 === l ? void 0 : l.current.offsetHeight : 0, o = (null === d || void 0 === d ? void 0 : d.current) ? null === d || void 0 === d ? void 0 : d.current.offsetHeight : 0, r = (null === l || void 0 === l ? void 0 : l.current) ? null === l || void 0 === l ? void 0 : l.current.offsetWidth : 0, c = (null === d || void 0 === d ? void 0 : d.current) ? null === d || void 0 === d ? void 0 : d.current.offsetWidth : 0;
                    return "Html" === W.ZP.appInfo.appType ? n = (0,
                    q.Em)() || (0,
                    q.zc)() ? $.V : $.us : !W.ZP.playPageUpdate || (0,
                    q.Em)() || (0,
                    q.zc)() ? (a === nn.cj.portrait ? (e = i - o,
                    t = r - c) : (e = i - c,
                    t = r - o),
                    n = e >= 190 ? $.V : t >= 330 || t > e ? $.us : $.V) : n = $.us,
                    n
                }();
                return window.tudeDisplay = window.tudeDisplay || {
                    cmd: []
                },
                window.tudeDisplay.cmd.push((function() {
                    return un(void 0, void 0, void 0, (function() {
                        var n, e, t;
                        return pn(this, (function(i) {
                            switch (i.label) {
                            case 0:
                                if (n = "",
                                (e = (0,
                                on.et)()) && (n = JSON.parse(JSON.stringify(e)).email),
                                !n)
                                    return [3, 4];
                                i.label = 1;
                            case 1:
                                return i.trys.push([1, 3, , 4]),
                                [4, (o = n,
                                un(void 0, void 0, void 0, (function() {
                                    var n, e;
                                    return pn(this, (function(t) {
                                        switch (t.label) {
                                        case 0:
                                            return n = (new TextEncoder).encode(o),
                                            [4, crypto.subtle.digest("SHA-256", n)];
                                        case 1:
                                            return e = t.sent(),
                                            [2, Array.from(new Uint8Array(e)).map((function(n) {
                                                return n.toString(16).padStart(2, "0")
                                            }
                                            )).join("")]
                                        }
                                    }
                                    ))
                                }
                                )))];
                            case 2:
                                return n = i.sent(),
                                t = sn(sn({}, m), {
                                    e: n
                                }),
                                window.tudeDisplay.setIdProfile(sn({}, t)),
                                [3, 4];
                            case 3:
                                return i.sent(),
                                [3, 4];
                            case 4:
                                return [2]
                            }
                            var o
                        }
                        ))
                    }
                    ))
                }
                )),
                n((r = s,
                function(n) {
                    n({
                        type: Y.Z.SET_IN_GAME_AD,
                        payload: {
                            inGameAd: r
                        }
                    })
                }
                )),
                u(s),
                setTimeout((function() {
                    n(function(n, e, t, i) {
                        return function(o) {
                            o({
                                type: Y.Z.SET_IN_GAME_AD,
                                payload: {
                                    skyScrapperRef1: n,
                                    skyScrapperRef2: e,
                                    leaderBoardRef1: t,
                                    leaderBoardRef2: i
                                }
                            })
                        }
                    }(e, t, i, o)),
                    (0,
                    Q.sZ)(),
                    (0,
                    Q.Ul)(),
                    window.tudeDisplay = window.tudeDisplay || {
                        cmd: []
                    },
                    s === $.us ? window.tudeDisplay.cmd.push((function() {
                        window.tudeDisplay.refreshAdsViaDivMappings([{
                            divId: "div-gpt-ad-skyScrapper-1",
                            baseDivId: "pb-slot-incontent-large",
                            targeting: sn(sn({}, c), {
                                ads_loc: "display-ss-left"
                            })
                        }, {
                            divId: "div-gpt-ad-skyScrapper-2",
                            baseDivId: "pb-slot-incontent-large",
                            targeting: sn(sn({}, c), {
                                ads_loc: "display-ss-right"
                            })
                        }])
                    }
                    )) : window.tudeDisplay.cmd.push((function() {
                        window.tudeDisplay.refreshAdsViaDivMappings([{
                            divId: "div-gpt-ad-leaderBoard-1",
                            baseDivId: "pb-slot-incontent-small",
                            targeting: sn(sn({}, c), {
                                ads_loc: "display-lb-top"
                            })
                        }, {
                            divId: "div-gpt-ad-leaderBoard-2",
                            baseDivId: "pb-slot-incontent-small",
                            targeting: sn(sn({}, c), {
                                ads_loc: "display-slb-bottom"
                            })
                        }])
                    }
                    )),
                    x.current = setInterval((function() {
                        h(!0)
                    }
                    ), 3e4)
                }
                ), 1e3),
                function() {
                    clearInterval(x.current),
                    document.removeEventListener("visibilitychange", b)
                }
            }
            ), []),
            (0,
            cn.BX)(cn.HY, {
                children: [s === $.us && (0,
                cn.BX)(cn.HY, {
                    children: [(0,
                    cn.tZ)(ln, {
                        isHtmlGame: r,
                        ref: e,
                        className: "skyScrapperFirst",
                        id: "skyScrapper-1",
                        children: (0,
                        cn.tZ)("div", {
                            id: "div-gpt-ad-skyScrapper-1"
                        })
                    }), (0,
                    cn.tZ)(ln, {
                        isHtmlGame: r,
                        ref: t,
                        className: "skyScrapperSecond",
                        id: "skyScrapper-2",
                        children: (0,
                        cn.tZ)("div", {
                            id: "div-gpt-ad-skyScrapper-2"
                        })
                    })]
                }), s === $.V && (0,
                cn.BX)(cn.HY, {
                    children: [(0,
                    cn.tZ)(dn, {
                        isHtmlGame: r,
                        mobile: (0,
                        q.tq)() && a !== nn.cj.portrait,
                        ref: i,
                        className: "leaderBoardFirst",
                        id: "leaderBoard-1",
                        children: (0,
                        cn.tZ)("div", {
                            id: "div-gpt-ad-leaderBoard-1"
                        })
                    }), (0,
                    cn.tZ)(dn, {
                        isHtmlGame: r,
                        mobile: (0,
                        q.tq)() && a !== nn.cj.portrait,
                        ref: o,
                        className: "leaderBoardSecond",
                        id: "leaderBoard-2",
                        children: (0,
                        cn.tZ)("div", {
                            id: "div-gpt-ad-leaderBoard-2"
                        })
                    })]
                })]
            })
        }, hn = (0,
        V.memo)(fn), gn = t(1567), mn = t(9598), xn = t(6971), vn = t(3926), bn = function(n, e) {
            return Object.defineProperty ? Object.defineProperty(n, "raw", {
                value: e
            }) : n.raw = e,
            n
        }, yn = rn.ZP.div(r || (r = bn(["\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  display: none;\n  z-index: -1;\n  pointer-events: all;\n  border-radius: ", ";\n  background: transparent;\n  z-index: -1;\n  height: fit-content;\n  &.show {\n    display: block;\n  }\n  &.started {\n    z-index: 9999;\n  }\n\n  @media screen and (max-width: 600px){\n    width: fit-content;\n    height: 90vh;\n  }\n"], ["\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  display: none;\n  z-index: -1;\n  pointer-events: all;\n  border-radius: ", ";\n  background: transparent;\n  z-index: -1;\n  height: fit-content;\n  &.show {\n    display: block;\n  }\n  &.started {\n    z-index: 9999;\n  }\n\n  @media screen and (max-width: 600px){\n    width: fit-content;\n    height: 90vh;\n  }\n"])), (function(n) {
            return n.theme.border.radius3
        }
        )), wn = rn.ZP.div(a || (a = bn(["\n  background: rgba(0, 0, 0, 0.6);\n  border-radius: 12px 12px 0 0;\n  padding: 8px 12px;\n  display: none;\n  justify-content: space-between;\n  align-items: center;\n  font-weight: 600;\n  font-size: 14px;\n  line-height: 150%;\n  color: ", ";\n  position: relative;\n  backdrop-filter: blur(10px);\n  &:hover {\n    cursor: grab;\n  }\n  &.started {\n    display: flex;\n  }\n"], ["\n  background: rgba(0, 0, 0, 0.6);\n  border-radius: 12px 12px 0 0;\n  padding: 8px 12px;\n  display: none;\n  justify-content: space-between;\n  align-items: center;\n  font-weight: 600;\n  font-size: 14px;\n  line-height: 150%;\n  color: ", ";\n  position: relative;\n  backdrop-filter: blur(10px);\n  &:hover {\n    cursor: grab;\n  }\n  &.started {\n    display: flex;\n  }\n"])), (function(n) {
            return n.theme.colors.white
        }
        )), Zn = rn.ZP.div(l || (l = bn(["\n  padding: 4px 1px 3px 10px;\n  cursor: pointer;\n"], ["\n  padding: 4px 1px 3px 10px;\n  cursor: pointer;\n"]))), kn = rn.ZP.p(d || (d = bn(["\n  position: relative;\n  width: 2px;\n  height: 10px;\n  right: ", ';\n  top: -2px;\n  &::after,\n  &::before {\n    content: "";\n    width: 2px;\n    height: 11px;\n    position: absolute;\n    background-color: ', ";\n  }\n  &::before {\n    left: 0;\n    transform: rotate(-45deg);\n  }\n  &::after {\n    right: 0;\n    transform: rotate(45deg);\n  }\n"], ["\n  position: relative;\n  width: 2px;\n  height: 10px;\n  right: ", ';\n  top: -2px;\n  &::after,\n  &::before {\n    content: "";\n    width: 2px;\n    height: 11px;\n    position: absolute;\n    background-color: ', ";\n  }\n  &::before {\n    left: 0;\n    transform: rotate(-45deg);\n  }\n  &::after {\n    right: 0;\n    transform: rotate(45deg);\n  }\n"])), (function(n) {
            return n.theme.spacing.base
        }
        ), (function(n) {
            return n.theme.colors.white
        }
        )), An = rn.ZP.p(c || (c = bn(["\n  position: absolute;\n  top: ", ";\n  left: 50%;\n  transform: translateX(-50%);\n  display: flex;\n  flex-direction: column;\n  span {\n    width: 22px;\n    height: 1px;\n    background: ", ";\n    border-radius: ", ";\n    margin-bottom: ", ";\n  }\n"], ["\n  position: absolute;\n  top: ", ";\n  left: 50%;\n  transform: translateX(-50%);\n  display: flex;\n  flex-direction: column;\n  span {\n    width: 22px;\n    height: 1px;\n    background: ", ";\n    border-radius: ", ";\n    margin-bottom: ", ";\n  }\n"])), (function(n) {
            return n.theme.spacing.base2
        }
        ), (function(n) {
            return n.theme.colors.white
        }
        ), (function(n) {
            return n.theme.border.radius
        }
        ), (function(n) {
            return n.theme.spacing.base
        }
        )), Pn = rn.ZP.div(s || (s = bn(["\n  margin: 0;\n  width: 533px;\n  height: 400px;\n  border-bottom-left-radius: ", ";\n  border-bottom-right-radius: ", ";\n  opacity: 0;\n  &.started {\n    opacity: 1;\n  }\n"], ["\n  margin: 0;\n  width: 533px;\n  height: 400px;\n  border-bottom-left-radius: ", ";\n  border-bottom-right-radius: ", ";\n  opacity: 0;\n  &.started {\n    opacity: 1;\n  }\n"])), (function(n) {
            return n.theme.border.radius3
        }
        ), (function(n) {
            return n.theme.border.radius3
        }
        )), Sn = function() {
            return (Sn = Object.assign || function(n) {
                for (var e, t = 1, i = arguments.length; t < i; t++)
                    for (var o in e = arguments[t])
                        Object.prototype.hasOwnProperty.call(e, o) && (n[o] = e[o]);
                return n
            }
            ).apply(this, arguments)
        }, En = function() {
            var n, e, t, i = (0,
            gn.$)().t, o = (0,
            J.I0)(), r = (0,
            V.useRef)(null), a = (0,
            V.useContext)(K.x), l = (0,
            V.useState)(10), d = l[0], c = l[1], s = (0,
            V.useState)(!1), u = s[0], p = s[1], f = (0,
            V.useState)(!1), h = f[0], g = f[1], m = (0,
            J.v9)((function(n) {
                return n.ads.rewardedAdsSDK
            }
            )), x = 18e4, v = !1, b = (0,
            V.useRef)(""), y = !1, w = (0,
            V.useState)(!0), Z = w[0], k = w[1], A = (0,
            V.useRef)(!1), P = window.devicePixelRatio, S = en.Z.getState().play.videoRef, E = 0, C = 0, T = function() {
                var n, e;
                g(!0),
                window.tude = window.tude || {
                    cmd: []
                },
                E = (null === (n = null === S || void 0 === S ? void 0 : S.current) || void 0 === n ? void 0 : n.clientHeight) || 0,
                C = (null === (e = null === S || void 0 === S ? void 0 : S.current) || void 0 === e ? void 0 : e.clientWidth) || 0,
                window.tude.cmd.push((function() {
                    var n = tn(a);
                    window.tude.setVideoPageTargeting(Sn(Sn({}, n), {
                        ads_loc: "video-auto-out"
                    })),
                    (0,
                    mn.L9)("AdRequested", {
                        adContext: "Midroll",
                        adType: "Video",
                        adWidth: 533,
                        adHeight: 400,
                        viewPortInnerWidth: window.innerWidth,
                        viewPortInnerHeight: window.innerHeight,
                        androidWidth: E,
                        androidHeight: C,
                        pixelRatio: P
                    }),
                    window.tude.requestVideoAd({
                        divId: "prebid-wrapper-mid-roll",
                        code: "mid-roll",
                        options: {
                            volume: 0
                        },
                        sourceVideos: [{
                            src: "https://cdn.now.gg/apps-content/modVideo.mp4",
                            type: "video/mp4"
                        }]
                    })
                }
                ))
            }, I = function() {
                t = setTimeout((function() {
                    if (r.current && (r.current.style.left = "0",
                    r.current.style.top = "unset",
                    r.current.style.bottom = "0"),
                    m)
                        return A.current = !0,
                        void (b.current = "loadWrapperAgain");
                    "visible" === document.visibilityState ? T() : (v = !0,
                    b.current = "loadWrapperAgain")
                }
                ), x)
            }, O = function() {
                g(!1),
                c(10),
                p(!1),
                clearTimeout(e)
            }, j = function() {
                var n, e;
                E = (null === (n = null === S || void 0 === S ? void 0 : S.current) || void 0 === n ? void 0 : n.clientHeight) || 0,
                C = (null === (e = null === S || void 0 === S ? void 0 : S.current) || void 0 === e ? void 0 : e.clientWidth) || 0,
                (0,
                mn.L9)("AdNotFilled", {
                    adContext: "Midroll",
                    adType: "Video",
                    adWidth: 533,
                    adHeight: 400,
                    viewPortInnerWidth: window.innerWidth,
                    viewPortInnerHeight: window.innerHeight,
                    androidWidth: E,
                    androidHeight: C,
                    pixelRatio: P
                }),
                I(),
                O()
            }, D = function(n) {
                n.stopPropagation()
            }, L = function() {
                g(!0),
                window.tude = window.tude || {
                    cmd: []
                },
                window.tude.cmd.push((function() {
                    var n, e, t = tn(a);
                    E = (null === (n = null === S || void 0 === S ? void 0 : S.current) || void 0 === n ? void 0 : n.clientHeight) || 0,
                    C = (null === (e = null === S || void 0 === S ? void 0 : S.current) || void 0 === e ? void 0 : e.clientWidth) || 0,
                    window.tude.setVideoPageTargeting(Sn(Sn({}, t), {
                        ads_loc: "video-auto-out"
                    })),
                    (0,
                    mn.L9)("AdRequested", {
                        adContext: "Midroll",
                        adType: "Video",
                        adWidth: 533,
                        adHeight: 400,
                        viewPortInnerWidth: window.innerWidth,
                        viewPortInnerHeight: window.innerHeight,
                        androidWidth: E,
                        androidHeight: C,
                        pixelRatio: P
                    }),
                    window.tude.requestVideoAd({
                        divId: "prebid-wrapper-mid-roll",
                        code: "mid-roll",
                        options: {
                            volume: 0
                        },
                        sourceVideos: [{
                            src: "https://cdn.now.gg/apps-content/modVideo.mp4",
                            type: "video/mp4"
                        }]
                    }).on("NO_BID", (function() {
                        j()
                    }
                    )).on("LOADED", (function() {
                        window.tude.setVideoVolume(0)
                    }
                    )).on("ERROR", (function() {
                        j()
                    }
                    )).on("COMPLETED", (function() {
                        y || O()
                    }
                    )).on("SKIPPED", (function() {
                        O(),
                        y = !0
                    }
                    )).on("STARTED", (function() {
                        var n, e;
                        E = (null === (n = null === S || void 0 === S ? void 0 : S.current) || void 0 === n ? void 0 : n.clientHeight) || 0,
                        C = (null === (e = null === S || void 0 === S ? void 0 : S.current) || void 0 === e ? void 0 : e.clientWidth) || 0,
                        (0,
                        mn.L9)("AdDisplayed", {
                            adContext: "Midroll",
                            adType: "Video",
                            adWidth: 533,
                            adHeight: 400,
                            viewPortInnerWidth: window.innerWidth,
                            viewPortInnerHeight: window.innerHeight,
                            androidWidth: E,
                            androidHeight: C,
                            pixelRatio: P
                        }),
                        window.tude.setVideoVolume(0),
                        I(),
                        p(!0),
                        y = !1
                    }
                    )).on("CLICKED", (function(n) {
                        D(n)
                    }
                    )).on("VIDEO_CLICKED", (function(n) {
                        D(n)
                    }
                    )).on("PAUSED", (function(n) {
                        D(n)
                    }
                    )).on("RESUMED", (function(n) {
                        D(n)
                    }
                    ))
                }
                ))
            }, z = function() {
                if ("visible" === document.visibilityState) {
                    if (m)
                        return void (A.current = !0);
                    v && (v = !1,
                    "loadMidRoll" === b.current ? L() : "loadWrapperAgain" === b.current && T())
                }
            };
            return (0,
            V.useEffect)((function() {
                m ? O() : A.current && (A.current = !1,
                "loadMidRoll" === b.current ? L() : "loadWrapperAgain" === b.current && T())
            }
            ), [m]),
            (0,
            V.useEffect)((function() {
                return document.addEventListener("visibilitychange", z),
                r.current && (r.current.style.left = "0",
                r.current.style.top = "unset",
                r.current.style.bottom = "0"),
                n = setTimeout((function() {
                    if (m)
                        return A.current = !0,
                        void (b.current = "loadMidRoll");
                    "visible" === document.visibilityState ? L() : (v = !0,
                    b.current = "loadMidRoll")
                }
                ), x),
                function() {
                    clearTimeout(n),
                    clearTimeout(t),
                    document.removeEventListener("visibilitychange", z)
                }
            }
            ), []),
            (0,
            V.useEffect)((function() {
                o({
                    type: xn.Z.SET_MID_ROLL_AD,
                    payload: {
                        midRollAdRef: r
                    }
                })
            }
            ), [r]),
            (0,
            V.useEffect)((function() {
                return u && (k(!0),
                e = setTimeout((function() {
                    d > 1 ? c(d - 1) : (k(!1),
                    clearTimeout(e))
                }
                ), 1e3)),
                o({
                    type: xn.Z.SET_MID_ROLL_AD,
                    payload: {
                        midRollAdVisible: u
                    }
                }),
                u || (0,
                vn.XW)(),
                function() {
                    return clearTimeout(e)
                }
            }
            ), [u, d]),
            (0,
            cn.BX)(yn, {
                ref: r,
                className: "".concat(h ? "show" : "", " ").concat(u ? "started" : ""),
                children: [(0,
                cn.BX)(wn, {
                    "aria-hidden": "true",
                    className: "".concat(u ? "started" : ""),
                    children: [(0,
                    cn.tZ)("p", {
                        children: i("ad")
                    }), Z && (0,
                    cn.tZ)("p", {
                        children: i("closeAdIn", {
                            time: d
                        })
                    }), !Z && (0,
                    cn.tZ)(Zn, {
                        "aria-hidden": "true",
                        onClick: function(n) {
                            O(),
                            window.tude = window.tude || {
                                cmd: []
                            },
                            window.tude.cmd.push((function() {
                                window.tude.closePlayer()
                            }
                            ))
                        },
                        children: (0,
                        cn.tZ)(kn, {})
                    }), (0,
                    cn.BX)(An, {
                        children: [(0,
                        cn.tZ)("span", {}), (0,
                        cn.tZ)("span", {})]
                    })]
                }), (0,
                cn.tZ)(Pn, {
                    id: "prebid-wrapper-mid-roll",
                    className: "".concat(u ? "started" : "")
                })]
            })
        }, Cn = (0,
        V.memo)(En), Tn = t(5024), In = {
            src: "/play/_next/static/media/muted.cc92657a.svg",
            height: 24,
            width: 24
        }, On = {
            src: "/play/_next/static/media/unmuted.cb7db131.svg",
            height: 24,
            width: 24
        }, jn = function(n, e) {
            return Object.defineProperty ? Object.defineProperty(n, "raw", {
                value: e
            }) : n.raw = e,
            n
        }, Dn = rn.ZP.div(u || (u = jn(["\n  position: absolute;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  right: 1px;\n  bottom: ", ";\n  font-size: 14px;\n  color: ", ";\n  cursor: pointer;\n  z-index: 9;\n  p:first-child {\n    padding: 2px 23px 2px 8px;\n    background: ", ";\n    border: 1px solid rgba(255, 255, 255, 0.1);\n    border-radius: ", ";\n  }\n  &.hideText {\n    p:first-child {\n      display: none;\n    }\n  }\n  img {\n    width: 24px;\n    display: block;\n  }\n  &.isMobileMidroll{\n    height: fit-content;\n    width: fit-content;\n    bottom: 0px;\n    left: calc(100% + 15px);\n    p{\n      margin: 0px;\n    }\n  }\n"], ["\n  position: absolute;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  right: 1px;\n  bottom: ", ";\n  font-size: 14px;\n  color: ", ";\n  cursor: pointer;\n  z-index: 9;\n  p:first-child {\n    padding: 2px 23px 2px 8px;\n    background: ", ";\n    border: 1px solid rgba(255, 255, 255, 0.1);\n    border-radius: ", ";\n  }\n  &.hideText {\n    p:first-child {\n      display: none;\n    }\n  }\n  img {\n    width: 24px;\n    display: block;\n  }\n  &.isMobileMidroll{\n    height: fit-content;\n    width: fit-content;\n    bottom: 0px;\n    left: calc(100% + 15px);\n    p{\n      margin: 0px;\n    }\n  }\n"])), (function(n) {
            return n.theme.spacing.base4
        }
        ), (function(n) {
            return n.theme.colors.white
        }
        ), (function(n) {
            var e;
            return null === (e = n.theme.colors) || void 0 === e ? void 0 : e.black
        }
        ), (function(n) {
            return n.theme.border.radius
        }
        )), Ln = rn.ZP.p(p || (p = jn(["\n  background: ", ";\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  border-radius: 100%;\n  padding: 13px;\n  padding-bottom: 10px;\n  position: relative;\n  left: -15px;\n"], ["\n  background: ", ";\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  border-radius: 100%;\n  padding: 13px;\n  padding-bottom: 10px;\n  position: relative;\n  left: -15px;\n"])), (function(n) {
            var e;
            return null === (e = n.theme.colors) || void 0 === e ? void 0 : e.black
        }
        )), zn = function(n) {
            var e = n.adsMuted
              , t = n.handleVolume
              , i = n.isInteracted
              , o = n.isMobileMidroll
              , r = (0,
            gn.$)().t;
            return (0,
            cn.BX)(Dn, {
                className: "".concat(i ? "hideText " : "").concat(o ? "isMobileMidroll " : ""),
                children: [(0,
                cn.tZ)("p", {
                    children: r((0,
                    q.tq)() ? "tapToUnmute" : "clickToUnmute")
                }), (0,
                cn.tZ)(Ln, {
                    onClick: t,
                    children: (0,
                    cn.tZ)("img", {
                        alt: r(e ? "mutedSoundIcon" : "soundIcon"),
                        src: (0,
                        Tn.j)(e ? In : On)
                    })
                })]
            })
        }, Mn = function(n, e) {
            return Object.defineProperty ? Object.defineProperty(n, "raw", {
                value: e
            }) : n.raw = e,
            n
        }, Nn = (0,
        rn.iv)(f || (f = Mn(["\n  position: absolute;\n  color: rgba(255, 255, 255, 0.6);\n  font-weight: 500;\n  font-size: 14px;\n  padding: 4px 8px;\n  background: ", ";\n"], ["\n  position: absolute;\n  color: rgba(255, 255, 255, 0.6);\n  font-weight: 500;\n  font-size: 14px;\n  padding: 4px 8px;\n  background: ", ";\n"])), (function(n) {
            return n.theme.colors.black40
        }
        )), Bn = rn.ZP.div(h || (h = Mn(["\n  margin: 0;\n  opacity: 0;\n  .videoAd {\n    opacity: 0;\n  }\n  &.started {\n    opacity: 1;\n    z-index: 99;\n    .videoAd {\n      opacity: 1;\n    }\n  }\n  width: 100%;\n  height: 100%;\n  background-color: ", ";\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: -1;\n  &.blurBG {\n    background: ", ";\n    opacity: 1;\n    z-index: 99;\n    backdrop-filter: blur(12px);\n  }\n"], ["\n  margin: 0;\n  opacity: 0;\n  .videoAd {\n    opacity: 0;\n  }\n  &.started {\n    opacity: 1;\n    z-index: 99;\n    .videoAd {\n      opacity: 1;\n    }\n  }\n  width: 100%;\n  height: 100%;\n  background-color: ", ";\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: -1;\n  &.blurBG {\n    background: ", ";\n    opacity: 1;\n    z-index: 99;\n    backdrop-filter: blur(12px);\n  }\n"])), (function(n) {
            return n.theme.colors.black
        }
        ), (function(n) {
            return n.theme.colors.black70
        }
        )), Rn = rn.ZP.div(g || (g = Mn(["\n  position: relative;\n  .adText{\n    ", "\n    top: 0px;\n    right: 100%;\n    z-index: 9;\n  }\n  .videoAd{\n    z-index: 1;\n  }\n"], ["\n  position: relative;\n  .adText{\n    ", "\n    top: 0px;\n    right: 100%;\n    z-index: 9;\n  }\n  .videoAd{\n    z-index: 1;\n  }\n"])), Nn), _n = function() {
            return (_n = Object.assign || function(n) {
                for (var e, t = 1, i = arguments.length; t < i; t++)
                    for (var o in e = arguments[t])
                        Object.prototype.hasOwnProperty.call(e, o) && (n[o] = e[o]);
                return n
            }
            ).apply(this, arguments)
        }, Un = function() {
            var n, e = (0,
            gn.$)().t, t = (0,
            J.I0)(), i = (0,
            V.useContext)(K.x), o = (0,
            V.useState)(!1), r = o[0], a = o[1], l = (0,
            V.useState)(!1), d = l[0], c = l[1], s = (0,
            V.useState)(!0), u = s[0], p = s[1], f = (0,
            J.v9)((function(n) {
                return n.play.orientation
            }
            )), h = (0,
            V.useState)(!1), g = h[0], m = h[1], x = (0,
            V.useRef)(null), v = (0,
            J.v9)((function(n) {
                return n.play.videoRef
            }
            )), b = (0,
            J.v9)((function(n) {
                return n.play.isExperienceEnded
            }
            )), y = (0,
            J.v9)((function(n) {
                return n.play.muted
            }
            )), w = !1, Z = 0, k = 0, A = 0, P = 0, S = window.devicePixelRatio, E = function() {
                var n, e, t = Math.min(window.innerWidth, window.innerHeight), i = Math.max(window.innerWidth, window.innerHeight), o = f === nn.cj.portrait ? t - 20 : i - 20, r = f === nn.cj.portrait ? i : t - 50, a = (n = r,
                Math.ceil(1.33 * n)), l = r;
                a > o && (e = a = o,
                l = Math.ceil(e / 1.33)),
                x.current && (x.current.style.width = "".concat(a, "px"),
                x.current.style.height = "".concat(l, "px")),
                Z = a,
                k = l
            }, C = function() {
                var n;
                a(!1),
                (null === (n = null === v || void 0 === v ? void 0 : v.current) || void 0 === n ? void 0 : n.muted) && !y && (v.current.muted = !1),
                t({
                    type: xn.Z.SET_EXPERIENCE_STATE,
                    payload: {
                        isExperienceEnded: !1
                    }
                }),
                c(!1)
            }, T = function() {
                var n, e;
                A = (null === (n = null === v || void 0 === v ? void 0 : v.current) || void 0 === n ? void 0 : n.clientHeight) || 0,
                P = (null === (e = null === v || void 0 === v ? void 0 : v.current) || void 0 === e ? void 0 : e.clientWidth) || 0,
                (0,
                mn.L9)("AdNotFilled", {
                    adContext: "Midroll",
                    adType: "Video",
                    adWidth: Z,
                    adHeight: k,
                    viewPortInnerWidth: window.innerWidth,
                    viewPortInnerHeight: window.innerHeight,
                    androidWidth: A,
                    androidHeight: P,
                    pixelRatio: S
                }),
                C()
            }, I = function(n) {
                window.tude.setVideoVolume(u ? 0 : 1),
                n.stopPropagation()
            }, O = function() {
                m(!0),
                n.on("NO_BID", (function() {
                    T()
                }
                )).on("LOADED", (function(n) {
                    window.tude.setVideoVolume(0),
                    function() {
                        var n, e;
                        A = (null === (n = null === v || void 0 === v ? void 0 : v.current) || void 0 === n ? void 0 : n.clientHeight) || 0,
                        P = (null === (e = null === v || void 0 === v ? void 0 : v.current) || void 0 === e ? void 0 : e.clientWidth) || 0,
                        (0,
                        mn.L9)("AdDisplayed", {
                            adContext: "Midroll",
                            adType: "Video",
                            adWidth: Z,
                            adHeight: k,
                            viewPortInnerWidth: window.innerWidth,
                            viewPortInnerHeight: window.innerHeight,
                            androidWidth: A,
                            androidHeight: P,
                            pixelRatio: S
                        })
                    }()
                }
                )).on("ERROR", (function() {
                    T()
                }
                )).on("COMPLETED", (function() {
                    w || C()
                }
                )).on("SKIPPED", (function() {
                    C(),
                    w = !0
                }
                )).on("STARTED", (function() {
                    c(!1),
                    window.tude.setVideoVolume(0),
                    a(!0),
                    w = !1
                }
                )).on("CLICKED", (function(n) {
                    I(n)
                }
                )).on("VIDEO_CLICKED", (function(n) {
                    I(n)
                }
                )).on("PAUSED", (function(n) {
                    I(n)
                }
                )).on("RESUMED", (function(n) {
                    I(n)
                }
                ))
            };
            return (0,
            V.useEffect)((function() {
                var e;
                b && (c(!0),
                E(),
                !1 === (null === (e = null === v || void 0 === v ? void 0 : v.current) || void 0 === e ? void 0 : e.muted) && (v.current.muted = !0),
                E(),
                window.tude = window.tude || {
                    cmd: []
                },
                window.tude.cmd.push((function() {
                    var e, t, o = tn(i);
                    A = (null === (e = null === v || void 0 === v ? void 0 : v.current) || void 0 === e ? void 0 : e.clientHeight) || 0,
                    P = (null === (t = null === v || void 0 === v ? void 0 : v.current) || void 0 === t ? void 0 : t.clientWidth) || 0,
                    window.tude.setVideoPageTargeting(_n(_n({}, o), {
                        ads_loc: "video-auto-out"
                    })),
                    (0,
                    mn.L9)("AdRequested", {
                        adContext: "Midroll",
                        adType: "Video",
                        adWidth: Z,
                        adHeight: k,
                        viewPortInnerWidth: window.innerWidth,
                        viewPortInnerHeight: window.innerHeight,
                        androidWidth: A,
                        androidHeight: P,
                        pixelRatio: S
                    }),
                    n = window.tude.requestVideoAd({
                        divId: "prebid-wrapper-mid-roll-mobile",
                        code: "mid-roll",
                        options: {
                            volume: 0
                        },
                        sourceVideos: [{
                            src: "https://cdn.now.gg/apps-content/modVideo.mp4",
                            type: "video/mp4"
                        }]
                    }),
                    g || O()
                }
                )))
            }
            ), [b]),
            (0,
            cn.tZ)(Bn, {
                className: "".concat(r ? "started " : "").concat(d ? "blurBG " : ""),
                children: (0,
                cn.BX)(Rn, {
                    ref: x,
                    children: [(0,
                    cn.tZ)("div", {
                        className: "videoAd",
                        id: "prebid-wrapper-mid-roll-mobile"
                    }), r && (0,
                    cn.BX)(cn.HY, {
                        children: [(0,
                        cn.tZ)("span", {
                            className: "adText",
                            children: e("ad")
                        }), (0,
                        cn.tZ)(zn, {
                            isMobileMidroll: !0,
                            isInteracted: !0,
                            handleVolume: function() {
                                window.tude.setVideoVolume(u ? 1 : 0),
                                p(!u)
                            },
                            adsMuted: u
                        })]
                    })]
                })
            })
        }, Hn = (0,
        V.memo)(Un), Fn = t(4298), Xn = t(4803), Gn = function(n, e) {
            return Object.defineProperty ? Object.defineProperty(n, "raw", {
                value: e
            }) : n.raw = e,
            n
        }, Vn = (0,
        rn.F4)(m || (m = Gn(["\n  0% {\n    left: 0;\n    width: 4px;\n  }\n  50% {\n    left: 50%;\n    width: 32px;\n  }\n  100% {\n    width: 4px;\n    left: calc(100% - 4px);\n  }\n"], ["\n  0% {\n    left: 0;\n    width: 4px;\n  }\n  50% {\n    left: 50%;\n    width: 32px;\n  }\n  100% {\n    width: 4px;\n    left: calc(100% - 4px);\n  }\n"]))), Kn = rn.ZP.img(x || (x = Gn(["\n  margin-bottom: ", ";\n  width: 100%;\n  display: flex;\n  flex-shrink: 0;\n  border-radius: ", ";\n"], ["\n  margin-bottom: ", ";\n  width: 100%;\n  display: flex;\n  flex-shrink: 0;\n  border-radius: ", ";\n"])), (function(n) {
            return n.theme.spacing.base2
        }
        ), (function(n) {
            return n.theme.border.radius
        }
        )), Yn = rn.ZP.div(v || (v = Gn(["\n  width: 64px;\n  right:  ", ";\n  position: absolute;\n  z-index: 9;\n  top: ", ";\n  transition: all 0.5s ease-in-out;\n  display: flex;\n  flex-direction: column;\n  &.animateSmall {\n    right: 5px;\n    top: 5px;\n    width: 40px;\n    img {\n      margin-bottom: 0;\n    }\n    .loadingBar {\n      display: none;\n    }\n  }\n"], ["\n  width: 64px;\n  right:  ", ";\n  position: absolute;\n  z-index: 9;\n  top: ", ";\n  transition: all 0.5s ease-in-out;\n  display: flex;\n  flex-direction: column;\n  &.animateSmall {\n    right: 5px;\n    top: 5px;\n    width: 40px;\n    img {\n      margin-bottom: 0;\n    }\n    .loadingBar {\n      display: none;\n    }\n  }\n"])), (function(n) {
            return n.theme.spacing.base6
        }
        ), (function(n) {
            return n.theme.spacing.base6
        }
        )), Wn = rn.ZP.div(b || (b = Gn(["\n  position: relative;\n  width: 100%;\n  background: rgba(0, 0, 0, 0.8);\n  height: 4px;\n  border-radius: ", ";\n  span {\n    position: absolute;\n    left: 0;\n    top: 0;\n    height: 100%;\n    background: ", ";\n    border-radius: 10px;\n    transition: 1s all ease-in-out;\n    animation-name: ", ";\n    animation-duration: 1s;\n    animation-iteration-count: infinite;\n    animation-timing-function: linear;\n    animation-direction: alternate;\n  }\n"], ["\n  position: relative;\n  width: 100%;\n  background: rgba(0, 0, 0, 0.8);\n  height: 4px;\n  border-radius: ", ";\n  span {\n    position: absolute;\n    left: 0;\n    top: 0;\n    height: 100%;\n    background: ", ";\n    border-radius: 10px;\n    transition: 1s all ease-in-out;\n    animation-name: ", ";\n    animation-duration: 1s;\n    animation-iteration-count: infinite;\n    animation-timing-function: linear;\n    animation-direction: alternate;\n  }\n"])), (function(n) {
            return n.theme.border.radius3
        }
        ), (function(n) {
            return n.theme.colors.white
        }
        ), Vn), qn = function(n) {
            var e, t = n.animateSmall, i = (0,
            V.useContext)(K.x);
            return (0,
            cn.BX)(Yn, {
                className: "".concat(t ? "animateSmall" : ""),
                children: [(0,
                cn.tZ)(Kn, {
                    src: null === (e = null === i || void 0 === i ? void 0 : i.media) || void 0 === e ? void 0 : e.icon
                }), (0,
                cn.tZ)(Wn, {
                    className: "loadingBar",
                    children: (0,
                    cn.tZ)("span", {})
                })]
            })
        }, Qn = function(n, e) {
            return Object.defineProperty ? Object.defineProperty(n, "raw", {
                value: e
            }) : n.raw = e,
            n
        }, Jn = (0,
        rn.F4)(y || (y = Qn(["\n  0% {\n    left: 0;\n    width: 4px;\n  }\n  50% {\n    left: 50%;\n    width: 32px;\n  }\n  100% {\n    width: 4px;\n    left: calc(100% - 4px);\n  }\n"], ["\n  0% {\n    left: 0;\n    width: 4px;\n  }\n  50% {\n    left: 50%;\n    width: 32px;\n  }\n  100% {\n    width: 4px;\n    left: calc(100% - 4px);\n  }\n"]))), $n = rn.ZP.div(w || (w = Qn(["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  .preroll-wrapper-videoplayer-dimensions {\n    @media only screen and (max-width: 600px){\n      body.landscape & {\n        width: 100%;\n        height: 100%;\n      }\n    }\n  }\n"], ["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  .preroll-wrapper-videoplayer-dimensions {\n    @media only screen and (max-width: 600px){\n      body.landscape & {\n        width: 100%;\n        height: 100%;\n      }\n    }\n  }\n"]))), ne = rn.ZP.div(Z || (Z = Qn(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #000;\n"], ["\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #000;\n"]))), ee = rn.ZP.div(k || (k = Qn(["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n"], ["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n"]))), te = (rn.ZP.img(A || (A = Qn(["\n  margin-bottom: ", ";\n  width: 100%;\n  display: flex;\n  flex-shrink: 0;\n  border-radius: ", ";\n"], ["\n  margin-bottom: ", ";\n  width: 100%;\n  display: flex;\n  flex-shrink: 0;\n  border-radius: ", ";\n"])), (function(n) {
            return n.theme.spacing.base2
        }
        ), (function(n) {
            return n.theme.border.radius
        }
        )),
        rn.ZP.div(P || (P = Qn(["\n  width: 64px;\n  right:  ", ";\n  position: absolute;\n  z-index: 9;\n  top: ", ";\n  transition: all 0.5s ease-in-out;\n  display: flex;\n  flex-direction: column;\n  &.animateSmall {\n    right: 5px;\n    top: 5px;\n    width: 40px;\n    img {\n      margin-bottom: 0;\n    }\n    .loadingBar {\n      display: none;\n    }\n  }\n"], ["\n  width: 64px;\n  right:  ", ";\n  position: absolute;\n  z-index: 9;\n  top: ", ";\n  transition: all 0.5s ease-in-out;\n  display: flex;\n  flex-direction: column;\n  &.animateSmall {\n    right: 5px;\n    top: 5px;\n    width: 40px;\n    img {\n      margin-bottom: 0;\n    }\n    .loadingBar {\n      display: none;\n    }\n  }\n"])), (function(n) {
            return n.theme.spacing.base6
        }
        ), (function(n) {
            return n.theme.spacing.base6
        }
        )),
        rn.ZP.div(S || (S = Qn(["\n  position: relative;\n  width: 100%;\n  background: rgba(0, 0, 0, 0.8);\n  height: 4px;\n  border-radius: ", ";\n  span {\n    position: absolute;\n    left: 0;\n    top: 0;\n    height: 100%;\n    background: ", ";\n    border-radius: 10px;\n    transition: 1s all ease-in-out;\n    animation-name: ", ";\n    animation-duration: 1s;\n    animation-iteration-count: infinite;\n    animation-timing-function: linear;\n    animation-direction: alternate;\n  }\n"], ["\n  position: relative;\n  width: 100%;\n  background: rgba(0, 0, 0, 0.8);\n  height: 4px;\n  border-radius: ", ";\n  span {\n    position: absolute;\n    left: 0;\n    top: 0;\n    height: 100%;\n    background: ", ";\n    border-radius: 10px;\n    transition: 1s all ease-in-out;\n    animation-name: ", ";\n    animation-duration: 1s;\n    animation-iteration-count: infinite;\n    animation-timing-function: linear;\n    animation-direction: alternate;\n  }\n"])), (function(n) {
            return n.theme.border.radius3
        }
        ), (function(n) {
            return n.theme.colors.white
        }
        ), Jn),
        rn.ZP.div(E || (E = Qn(["\n  position: absolute;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  right: 1px;\n  bottom: ", ";\n  font-size: 14px;\n  color: ", ";\n  cursor: pointer;\n  z-index: 9;\n  p:first-child {\n    padding: 2px 23px 2px 8px;\n    background: ", ";\n    border: 1px solid rgba(255, 255, 255, 0.1);\n    border-radius: ", ";\n  }\n  &.hideText {\n    p:first-child {\n      display: none;\n    }\n  }\n  img {\n    width: 24px;\n    display: block;\n  }\n"], ["\n  position: absolute;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  right: 1px;\n  bottom: ", ";\n  font-size: 14px;\n  color: ", ";\n  cursor: pointer;\n  z-index: 9;\n  p:first-child {\n    padding: 2px 23px 2px 8px;\n    background: ", ";\n    border: 1px solid rgba(255, 255, 255, 0.1);\n    border-radius: ", ";\n  }\n  &.hideText {\n    p:first-child {\n      display: none;\n    }\n  }\n  img {\n    width: 24px;\n    display: block;\n  }\n"])), (function(n) {
            return n.theme.spacing.base4
        }
        ), (function(n) {
            return n.theme.colors.white
        }
        ), (function(n) {
            var e;
            return null === (e = n.theme.colors) || void 0 === e ? void 0 : e.black
        }
        ), (function(n) {
            return n.theme.border.radius
        }
        )),
        rn.ZP.p(C || (C = Qn(["\n  background: ", ";\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  border-radius: 100%;\n  padding: 13px;\n  padding-bottom: 10px;\n  position: relative;\n  left: -15px;\n"], ["\n  background: ", ";\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  border-radius: 100%;\n  padding: 13px;\n  padding-bottom: 10px;\n  position: relative;\n  left: -15px;\n"])), (function(n) {
            var e;
            return null === (e = n.theme.colors) || void 0 === e ? void 0 : e.black
        }
        )),
        rn.ZP.div(T || (T = Qn(['\n  position: absolute;\n  top: 0;\n  right: 0;\n  width: 50px;\n  height: 40px;\n  background: rgba(0, 0, 0, 0.6);\n  border: 1px solid rgba(255, 255, 255, 0.2);\n  cursor: pointer;\n  &::after,\n  &::before {\n    content: "";\n    width: 1px;\n    height: 15px;\n    position: absolute;\n    background-color: rgba(255, 255, 255, 0.8);\n    top: 50%;\n  }\n  &::before {\n    left: 50%;\n    transform: translate(-50%, -50%) rotate(-40deg);\n  }\n  &::after {\n    right: 50%;\n    transform: translate(-50%, -50%) rotate(40deg);\n  }\n'], ['\n  position: absolute;\n  top: 0;\n  right: 0;\n  width: 50px;\n  height: 40px;\n  background: rgba(0, 0, 0, 0.6);\n  border: 1px solid rgba(255, 255, 255, 0.2);\n  cursor: pointer;\n  &::after,\n  &::before {\n    content: "";\n    width: 1px;\n    height: 15px;\n    position: absolute;\n    background-color: rgba(255, 255, 255, 0.8);\n    top: 50%;\n  }\n  &::before {\n    left: 50%;\n    transform: translate(-50%, -50%) rotate(-40deg);\n  }\n  &::after {\n    right: 50%;\n    transform: translate(-50%, -50%) rotate(40deg);\n  }\n'])))), ie = rn.ZP.div(I || (I = Qn(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  height: 100vh;\n  width: 100vw;\n  background-color: #000;\n  z-index: 20;\n"], ["\n  position: fixed;\n  top: 0;\n  left: 0;\n  height: 100vh;\n  width: 100vw;\n  background-color: #000;\n  z-index: 20;\n"]))), oe = function() {
            return (oe = Object.assign || function(n) {
                for (var e, t = 1, i = arguments.length; t < i; t++)
                    for (var o in e = arguments[t])
                        Object.prototype.hasOwnProperty.call(e, o) && (n[o] = e[o]);
                return n
            }
            ).apply(this, arguments)
        }, re = function(n, e, t, i) {
            return new (t || (t = Promise))((function(o, r) {
                function a(n) {
                    try {
                        d(i.next(n))
                    } catch (e) {
                        r(e)
                    }
                }
                function l(n) {
                    try {
                        d(i.throw(n))
                    } catch (e) {
                        r(e)
                    }
                }
                function d(n) {
                    var e;
                    n.done ? o(n.value) : (e = n.value,
                    e instanceof t ? e : new t((function(n) {
                        n(e)
                    }
                    ))).then(a, l)
                }
                d((i = i.apply(n, e || [])).next())
            }
            ))
        }, ae = function(n, e) {
            var t, i, o, r, a = {
                label: 0,
                sent: function() {
                    if (1 & o[0])
                        throw o[1];
                    return o[1]
                },
                trys: [],
                ops: []
            };
            return r = {
                next: l(0),
                throw: l(1),
                return: l(2)
            },
            "function" === typeof Symbol && (r[Symbol.iterator] = function() {
                return this
            }
            ),
            r;
            function l(r) {
                return function(l) {
                    return function(r) {
                        if (t)
                            throw new TypeError("Generator is already executing.");
                        for (; a; )
                            try {
                                if (t = 1,
                                i && (o = 2 & r[0] ? i.return : r[0] ? i.throw || ((o = i.return) && o.call(i),
                                0) : i.next) && !(o = o.call(i, r[1])).done)
                                    return o;
                                switch (i = 0,
                                o && (r = [2 & r[0], o.value]),
                                r[0]) {
                                case 0:
                                case 1:
                                    o = r;
                                    break;
                                case 4:
                                    return a.label++,
                                    {
                                        value: r[1],
                                        done: !1
                                    };
                                case 5:
                                    a.label++,
                                    i = r[1],
                                    r = [0];
                                    continue;
                                case 7:
                                    r = a.ops.pop(),
                                    a.trys.pop();
                                    continue;
                                default:
                                    if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === r[0] || 2 === r[0])) {
                                        a = 0;
                                        continue
                                    }
                                    if (3 === r[0] && (!o || r[1] > o[0] && r[1] < o[3])) {
                                        a.label = r[1];
                                        break
                                    }
                                    if (6 === r[0] && a.label < o[1]) {
                                        a.label = o[1],
                                        o = r;
                                        break
                                    }
                                    if (o && a.label < o[2]) {
                                        a.label = o[2],
                                        a.ops.push(r);
                                        break
                                    }
                                    o[2] && a.ops.pop(),
                                    a.trys.pop();
                                    continue
                                }
                                r = e.call(n, a)
                            } catch (l) {
                                r = [6, l],
                                i = 0
                            } finally {
                                t = o = 0
                            }
                        if (5 & r[0])
                            throw r[1];
                        return {
                            value: r[0] ? r[1] : void 0,
                            done: !0
                        }
                    }([r, l])
                }
            }
        }, le = function() {
            var n, e, t = (0,
            V.useContext)(K.x), i = (0,
            V.useState)({}), o = i[0], r = i[1], a = (0,
            V.useState)(!1), l = a[0], d = a[1], c = (0,
            V.useState)(!1), s = c[0], u = c[1], p = (0,
            V.useState)(!1), f = p[0], h = p[1], g = (0,
            V.useState)(4), m = g[0], x = g[1], v = (0,
            V.useState)(!0), b = v[0], y = v[1], w = (0,
            V.useState)(!1), Z = w[0], k = w[1], A = (0,
            J.v9)((function(n) {
                return n.play.userIPObject
            }
            )), P = (0,
            J.v9)((function(n) {
                return n.play.orientation
            }
            )), S = (0,
            J.v9)((function(n) {
                return n.ads.fallbackDisplayed
            }
            )), E = (0,
            J.v9)((function(n) {
                return n.ads.rewardedSDKLoaded
            }
            )), C = (0,
            J.v9)((function(n) {
                return n.ads.rewardedError
            }
            )), T = (0,
            V.useRef)(null), I = (0,
            V.useRef)(null), O = (0,
            V.useRef)(null), j = (0,
            J.v9)((function(n) {
                return n.play.muted
            }
            )), D = (0,
            J.v9)((function(n) {
                return n.play.videoRef
            }
            )), L = (0,
            V.useRef)(!1), z = (0,
            J.I0)(), M = 0, N = 0, B = 0, R = 0, _ = window.devicePixelRatio, U = function() {
                (0,
                mn.L9)("RewardEarned"),
                (0,
                Xn.f)("ADS::userEarnedReward"),
                (0,
                Xn.f)("ADS::adsshowstatus::dismiss"),
                z({
                    type: Y.Z.UPDATE_REWARDED_SDK_STATE,
                    payload: {
                        rewardedAdsSDK: !1,
                        fallbackDisplayed: !1
                    }
                }),
                j || D && D.current && (D.current.muted = !1)
            }, H = function() {
                var n, e;
                B = (null === (n = null === D || void 0 === D ? void 0 : D.current) || void 0 === n ? void 0 : n.clientHeight) || 0,
                R = (null === (e = null === D || void 0 === D ? void 0 : D.current) || void 0 === e ? void 0 : e.clientWidth) || 0,
                k(!1),
                clearTimeout(I.current),
                (0,
                mn.L9)("AdNotFilled", {
                    adContext: "Ingame",
                    adType: "Video",
                    adWidth: M,
                    adHeight: N,
                    viewPortInnerWidth: window.innerWidth,
                    viewPortInnerHeight: window.innerHeight,
                    androidWidth: B,
                    androidHeight: R,
                    pixelRatio: _
                }),
                d(!0)
            }, F = function(n) {
                n.stopPropagation()
            }, X = function() {
                return re(void 0, void 0, void 0, (function() {
                    var e, i, a, l, d, c, s;
                    return ae(this, (function(u) {
                        switch (u.label) {
                        case 0:
                            if (e = "",
                            (i = (0,
                            on.et)()) && (e = JSON.parse(JSON.stringify(i)).email),
                            !e)
                                return [3, 4];
                            u.label = 1;
                        case 1:
                            return u.trys.push([1, 3, , 4]),
                            [4, (h = e,
                            re(void 0, void 0, void 0, (function() {
                                var n, e;
                                return ae(this, (function(t) {
                                    switch (t.label) {
                                    case 0:
                                        return n = (new TextEncoder).encode(h),
                                        [4, crypto.subtle.digest("SHA-256", n)];
                                    case 1:
                                        return e = t.sent(),
                                        [2, Array.from(new Uint8Array(e)).map((function(n) {
                                            return n.toString(16).padStart(2, "0")
                                        }
                                        )).join("")]
                                    }
                                }
                                ))
                            }
                            )))];
                        case 2:
                            return e = u.sent(),
                            a = oe(oe({}, A), {
                                e: e
                            }),
                            r(a),
                            [3, 4];
                        case 3:
                            return u.sent(),
                            [3, 4];
                        case 4:
                            return (0,
                            q.tq)() ? (l = P === nn.cj.portrait ? window.innerWidth - 20 : window.innerHeight - 20,
                            d = P === nn.cj.portrait ? window.innerHeight : window.innerWidth) : (l = window.innerWidth - 20,
                            d = window.innerHeight),
                            f = d,
                            c = Math.ceil(1.33 * f),
                            s = d,
                            c > l && (p = c = l,
                            s = Math.ceil(p / 1.33)),
                            T.current && (T.current.style.width = "".concat(c, "px"),
                            T.current.style.height = "".concat(s, "px")),
                            function(n, e) {
                                M = n,
                                N = e
                            }(c, s),
                            window.tudeSdk = window.tudeSdk || {
                                cmd: []
                            },
                            window.tudeSdk.cmd.push((function() {
                                window.tudeSdk.setIdProfile(oe({}, o))
                            }
                            )),
                            clearTimeout(I.current),
                            I.current = setTimeout((function() {
                                window.tudeSdk = window.tudeSdk || {
                                    cmd: []
                                },
                                window.tudeSdk.cmd.push((function() {
                                    try {
                                        window.tudeSdk.closePlayer()
                                    } catch (n) {}
                                    H()
                                }
                                ))
                            }
                            ), 15e3),
                            window.tudeSdk.cmd.push((function() {
                                var e, i, o = tn(t);
                                B = (null === (e = null === D || void 0 === D ? void 0 : D.current) || void 0 === e ? void 0 : e.clientHeight) || 0,
                                R = (null === (i = null === D || void 0 === D ? void 0 : D.current) || void 0 === i ? void 0 : i.clientWidth) || 0,
                                window.tudeSdk.setVideoPageTargeting(oe(oe({}, o), {
                                    ads_loc: "video-ctp-rw"
                                })),
                                (0,
                                mn.L9)("AdRequested", {
                                    adContext: "Ingame",
                                    adType: "Video",
                                    adWidth: M,
                                    adHeight: N,
                                    viewPortInnerWidth: window.innerWidth,
                                    viewPortInnerHeight: window.innerHeight,
                                    androidWidth: B,
                                    androidHeight: R,
                                    pixelRatio: _
                                }),
                                n = window.tudeSdk.requestVideoAd({
                                    divId: "rewarded-wrapper",
                                    code: "sdk-video-ctp",
                                    options: {
                                        volume: 1
                                    },
                                    sourceVideos: [{
                                        src: "https://cdn.now.gg/apps-content/modVideo.mp4",
                                        type: "video/mp4"
                                    }]
                                }),
                                j || D && D.current && (D.current.muted = !0),
                                n.on("NO_BID", (function() {
                                    H()
                                }
                                )).on("ERROR", (function() {
                                    H()
                                }
                                )).on("LOADED", (function() {
                                    var n, e;
                                    y(!1),
                                    B = (null === (n = null === D || void 0 === D ? void 0 : D.current) || void 0 === n ? void 0 : n.clientHeight) || 0,
                                    R = (null === (e = null === D || void 0 === D ? void 0 : D.current) || void 0 === e ? void 0 : e.clientWidth) || 0,
                                    window.tudeSdk.setVideoVolume(1),
                                    (0,
                                    mn.L9)("AdDisplayed", {
                                        adContext: "Ingame",
                                        adType: "Video",
                                        adWidth: M,
                                        adHeight: N,
                                        viewPortInnerWidth: window.innerWidth,
                                        viewPortInnerHeight: window.innerHeight,
                                        androidWidth: B,
                                        androidHeight: R,
                                        pixelRatio: _
                                    })
                                }
                                )).on("COMPLETED", (function() {
                                    k(!1),
                                    L.current || U()
                                }
                                )).on("SKIPPED", (function() {
                                    U(),
                                    L.current = !0
                                }
                                )).on("STARTED", (function() {
                                    clearTimeout(I.current),
                                    (0,
                                    Xn.f)("ADS::adsshowstatus::visible"),
                                    y(!1),
                                    k(!0),
                                    window.tudeSdk.setVideoVolume(1),
                                    L.current = !1
                                }
                                )).on("CLICKED", (function(n) {
                                    F(n)
                                }
                                )).on("VIDEO_CLICKED", (function(n) {
                                    F(n)
                                }
                                )).on("PAUSED", (function(n) {
                                    F(n)
                                }
                                )).on("RESUMED", (function(n) {
                                    F(n)
                                }
                                ))
                            }
                            )),
                            [2]
                        }
                        var p, f, h
                    }
                    ))
                }
                ))
            };
            return (0,
            V.useEffect)((function() {
                return Z && ((0,
                q.tq)() && P === nn.cj.landscape ? e = setTimeout((function() {
                    m >= 1 ? x(m - 1) : clearTimeout(e),
                    u(!0)
                }
                ), 1e3) : u(!0)),
                function() {
                    clearTimeout(e)
                }
            }
            ), [Z, m]),
            (0,
            V.useEffect)((function() {
                if (l) {
                    var n = tn(t);
                    window.tudeSdk.cmd.push((function() {
                        window.tudeSdk.refreshAdsViaDivMappings([{
                            divId: "div-gpt-ad-rewarded",
                            baseDivId: "pb-slot-display-fb",
                            targeting: oe(oe({}, n), {
                                ads_loc: "display-fallback"
                            })
                        }])
                    }
                    ))
                }
            }
            ), [l]),
            (0,
            V.useEffect)((function() {
                return S && ((0,
                Xn.f)("ADS::adsshowstatus::visible"),
                setTimeout((function() {
                    h(!0)
                }
                ), 5e3),
                O.current = setTimeout((function() {
                    U()
                }
                ), 15e3)),
                function() {
                    return clearTimeout(O.current)
                }
            }
            ), [S]),
            (0,
            V.useEffect)((function() {
                return C ? ((0,
                Xn.f)("ADS::rewardedAdLoad::fail"),
                z({
                    type: Y.Z.UPDATE_REWARDED_SDK_STATE,
                    payload: {
                        rewardedAdsSDK: !1,
                        fallbackDisplayed: !1
                    }
                })) : E && !C && X().then((function() {}
                )).catch((function(n) {}
                )),
                function() {
                    return clearTimeout(I.current)
                }
            }
            ), [E, C]),
            (0,
            cn.BX)(cn.HY, {
                children: [(0,
                cn.tZ)(Fn.default, {
                    src: "https://web.prebidwrapper.com/nowgg-IZQznjkQaj/sdk-display/prebid-load.js",
                    onLoad: function() {
                        z({
                            type: Y.Z.UPDATE_REWARDED_SDK_STATE,
                            payload: {
                                rewardedSDKLoaded: !0,
                                rewardedError: !1
                            }
                        })
                    },
                    onError: function() {
                        z({
                            type: Y.Z.UPDATE_REWARDED_SDK_STATE,
                            payload: {
                                rewardedError: !0
                            }
                        })
                    }
                }), E && (0,
                cn.BX)(ie, {
                    children: [!l && (0,
                    cn.tZ)(qn, {
                        animateSmall: Z
                    }), !l && (0,
                    cn.tZ)($n, {
                        ref: T,
                        id: "rewarded-wrapper"
                    }), Z && !l && (0,
                    cn.tZ)(zn, {
                        isInteracted: s,
                        handleVolume: function() {
                            u(!0),
                            window.tudeSdk.setVideoVolume(b ? 1 : 0),
                            y(!b)
                        },
                        adsMuted: b
                    }), l && (0,
                    cn.BX)(ne, {
                        children: [(0,
                        cn.tZ)(ee, {
                            id: "div-gpt-ad-rewarded"
                        }), f && (0,
                        cn.tZ)(te, {
                            onClick: U
                        })]
                    })]
                })]
            })
        }, de = t(3863), ce = t(4359), se = t(5018), ue = t(5221), pe = t(4003), fe = function(n) {
            var e = n.str
              , t = void 0 === e ? "" : e
              , i = n.enter
              , o = void 0 === i ? 0 : i
              , r = n.del
              , a = void 0 === r ? 0 : r
              , l = n.composing
              , d = void 0 !== l && l
              , c = n.textData
              , s = new ArrayBuffer(4 + 2 * (void 0 === c ? "" : c).length)
              , u = new Uint8Array(s);
            u[0] = 103,
            u[1] = a,
            u[2] = o,
            u[3] = Number(d);
            for (var p = 4, f = 0; f < t.length; f += 1) {
                var h = t[f].charCodeAt(0)
                  , g = new Uint16Array([h])
                  , m = new Uint8Array(g.buffer,g.byteOffset,g.byteLength);
                u[p] = m[0],
                u[p += 1] = m[1],
                p += 1
            }
            (0,
            pe.fr)(s)
        }, he = function() {
            var n = (0,
            V.useState)(!1)
              , e = n[0]
              , t = n[1]
              , i = ue.fl.lastX + 20
              , o = ue.fl.lastY + 20
              , r = (0,
            V.useState)(i)
              , a = r[0]
              , l = (r[1],
            (0,
            V.useState)(o))
              , d = l[0]
              , c = (l[1],
            (0,
            V.useState)(""))
              , s = c[0]
              , u = c[1]
              , p = (0,
            V.useRef)(null);
            (0,
            V.useEffect)((function() {
                (null === p || void 0 === p ? void 0 : p.current) && p.current.focus()
            }
            ), [p]);
            var f = (0,
            V.useCallback)((function(n) {
                se.un.ended = !0,
                t(!1),
                fe({
                    str: n.data,
                    composing: !1,
                    textData: s
                })
            }
            ), [e]);
            return (0,
            cn.tZ)("input", {
                ref: p,
                style: {
                    position: "absolute",
                    zIndex: 1e6,
                    left: a,
                    top: d,
                    opacity: 0
                },
                onBlur: function(n) {
                    setTimeout((function() {
                        var e, t;
                        se.be.isOpen && !en.Z.getState().play.uiTextfieldInFocus && -1 === (null === (t = null === (e = null === document || void 0 === document ? void 0 : document.activeElement) || void 0 === e ? void 0 : e.className) || void 0 === t ? void 0 : t.indexOf("_hj-")) && n.target.focus()
                    }
                    ), 100)
                },
                onCompositionStart: function(n) {
                    t(!0),
                    fe({
                        del: 0,
                        composing: !0
                    })
                },
                onCompositionUpdate: function(n) {
                    u(n.data),
                    fe({
                        str: n.data,
                        composing: e,
                        textData: n.data
                    })
                },
                onCompositionEnd: f,
                type: "text",
                autoComplete: "off"
            })
        }, ge = t(2572), me = t(5675), xe = t(4564), ve = t(6933), be = t(8962), ye = function(n, e) {
            return Object.defineProperty ? Object.defineProperty(n, "raw", {
                value: e
            }) : n.raw = e,
            n
        }, we = ((0,
        rn.iv)(O || (O = ye(["\n  width: 480px;\n  overflow: auto;\n"], ["\n  width: 480px;\n  overflow: auto;\n"]))),
        rn.ZP.div(j || (j = ye(["\n  display: flex;\n  padding: 20px;\n\n  .tile {\n    position: relative;\n    flex: 0 0 160px;\n    border-radius: 12px;\n    margin: auto 22px auto auto;\n    overflow: hidden;\n    width: 160px;\n    height: 215px;\n  }\n"], ["\n  display: flex;\n  padding: 20px;\n\n  .tile {\n    position: relative;\n    flex: 0 0 160px;\n    border-radius: 12px;\n    margin: auto 22px auto auto;\n    overflow: hidden;\n    width: 160px;\n    height: 215px;\n  }\n"])))), Ze = rn.ZP.div(D || (D = ye(["\n  display: flex;\n  flex-direction: column;\n\n  h4 {\n    margin-bottom: 10px;\n    font-size: 24px;\n  }\n\n  p {\n    font-size: 16px;\n  }\n\n  h4 + p {\n    color: ", ";\n  }\n\n  button {\n    margin-top: auto;\n    max-width: 225px;\n  }\n"], ["\n  display: flex;\n  flex-direction: column;\n\n  h4 {\n    margin-bottom: 10px;\n    font-size: 24px;\n  }\n\n  p {\n    font-size: 16px;\n  }\n\n  h4 + p {\n    color: ", ";\n  }\n\n  button {\n    margin-top: auto;\n    max-width: 225px;\n  }\n"])), (function(n) {
            return n.theme.colors.black80
        }
        )), ke = function(n) {
            var e = n.type
              , t = void 0 === e ? $.T$ : e
              , i = n.heading
              , o = void 0 === i ? "" : i
              , r = (0,
            gn.$)().t
              , a = (0,
            V.useContext)(K.x);
            return (0,
            V.useEffect)((function() {
                (0,
                be.Z)()
            }
            ), []),
            (0,
            cn.tZ)(ve.Z, {
                children: (0,
                cn.BX)(we, {
                    children: [(0,
                    cn.tZ)("div", {
                        className: "tile",
                        children: (0,
                        cn.tZ)(me.default, {
                            src: null === a || void 0 === a ? void 0 : a.media.tile,
                            alt: a.appName,
                            width: 160,
                            height: 215,
                            quality: 80,
                            loader: Tn.O
                        })
                    }), (0,
                    cn.BX)(Ze, {
                        children: [(0,
                        cn.tZ)(xe.T4, {
                            med: !0,
                            children: r("".concat(o || t, "Head"))
                        }), (0,
                        cn.tZ)(xe.kk, {
                            children: r("".concat(t, "Msg"))
                        }), (0,
                        cn.tZ)(de.z, {
                            onClick: function() {
                                window.location.reload()
                            },
                            variant: "primary",
                            text: t === $.LD ? r("restart") : r("continue")
                        })]
                    }), (0,
                    cn.tZ)("div", {})]
                })
            })
        }, Ae = {
            src: "/play/_next/static/media/idleScreenLogo.26cffb49.png",
            height: 360,
            width: 360,
            blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA4UlEQVR42mP447SUiQEI/rosK/3PMF2VAQoKFruxnHtfw8jw33kFWMF/hlm8r7pP6fnuuOuVuu+1FgMy+O+8zOOd45I8vcqF5+3r5/23bpv1P3NFXQEDCPx2WjIJaMr/C/ZT/zMomP+XY2D4rcKg/j+91/P/ttvJ8xn+Oi35/999ze9dPGU/bBNjfne1df8tKaz94xVh8GvztaT/IAXX/7us/H/PfMJ/Bl6x/yEh4f8ZGIT/l3Q7/99xO/kewz+npbJAvOy/y4oLW/XLzzIwMJwJSTa7uPJUzJZ9j9M0GQgBAOtKZ5uuy/yaAAAAAElFTkSuQmCC"
        }, Pe = {
            src: "/play/_next/static/media/bulbIcon.c6ab3e9f.svg",
            height: 17,
            width: 16
        }, Se = function(n, e) {
            return Object.defineProperty ? Object.defineProperty(n, "raw", {
                value: e
            }) : n.raw = e,
            n
        }, Ee = rn.ZP.div(L || (L = Se(["\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 4%;\n    padding: 24px;\n\n    .modalLogo {\n        flex-shrink: 0;\n    }\n"], ["\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 4%;\n    padding: 24px;\n\n    .modalLogo {\n        flex-shrink: 0;\n    }\n"]))), Ce = (rn.ZP.div(z || (z = Se(["\n    width: 180px;\n    position: relative;\n    margin-right: 20px;\n    width: 180px;\n    height: 180px;\n    flex-shrink: 0;\n"], ["\n    width: 180px;\n    position: relative;\n    margin-right: 20px;\n    width: 180px;\n    height: 180px;\n    flex-shrink: 0;\n"]))),
        rn.ZP.div(M || (M = Se(["\n    flex-basis: 35%;\n    flex-shrink: 0;\n\n    img {\n        max-width: 100%;\n        height: auto;\n    }\n"], ["\n    flex-basis: 35%;\n    flex-shrink: 0;\n\n    img {\n        max-width: 100%;\n        height: auto;\n    }\n"])))), Te = rn.ZP.div(N || (N = Se(["\n    position: relative;\n    button {\n        width: 100%;\n        margin-top: 24px;\n    }\n    h4 {\n        font-weight: 600;\n        font-size: 24px;\n        color: ", ";\n    }\n    h6 {\n        font-weight: 400;\n        font-size: 16px;\n        color: ", ";\n    }\n    .alert-msg {\n        margin-top: 12px;\n        font-weight: 400;\n        font-size: 12px;\n        color: ", ";\n    }\n"], ["\n    position: relative;\n    button {\n        width: 100%;\n        margin-top: 24px;\n    }\n    h4 {\n        font-weight: 600;\n        font-size: 24px;\n        color: ", ";\n    }\n    h6 {\n        font-weight: 400;\n        font-size: 16px;\n        color: ", ";\n    }\n    .alert-msg {\n        margin-top: 12px;\n        font-weight: 400;\n        font-size: 12px;\n        color: ", ";\n    }\n"])), (function(n) {
            return n.theme.colors.base900
        }
        ), (function(n) {
            return n.theme.colors.black80
        }
        ), (function(n) {
            return n.theme.colors.black80
        }
        )), Ie = rn.ZP.div(B || (B = Se(["\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    margin-top: 30px;\n    .bulbIcon {\n        margin-right: 4px;\n        flex-shrink: 0;\n    }\n"], ["\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    margin-top: 30px;\n    .bulbIcon {\n        margin-right: 4px;\n        flex-shrink: 0;\n    }\n"]))), Oe = function(n) {
            var e = n.logo
              , t = n.heading
              , i = n.text
              , o = n.modalInfoText
              , r = n.buttonText
              , a = n.infoText
              , l = n.proTip
              , d = (0,
            gn.$)().t
              , c = (0,
            J.I0)();
            return (0,
            cn.BX)(ve.Z, {
                children: [(0,
                cn.BX)(Ee, {
                    children: [(0,
                    cn.tZ)(Ce, {
                        children: (0,
                        cn.tZ)("img", {
                            alt: "now.gg ".concat(d("logo")),
                            src: function() {
                                switch (e) {
                                case "inactivity":
                                default:
                                    return (0,
                                    Tn.j)(Ae)
                                }
                            }()
                        })
                    }), (0,
                    cn.BX)(Te, {
                        children: [(0,
                        cn.tZ)(xe.T4, {
                            bold: !0,
                            children: d(t)
                        }), (0,
                        cn.tZ)(xe.T6, {
                            white: !0,
                            children: d(i)
                        }), o && (0,
                        cn.tZ)(xe.T6, {
                            white: !0,
                            style: {
                                marginTop: 20
                            },
                            children: d(o)
                        }), r && (0,
                        cn.tZ)(de.z, {
                            variant: "primary",
                            onClick: function() {
                                c({
                                    type: xn.Z.MODAL_STATUS,
                                    payload: {
                                        inactivityModal: !1
                                    }
                                })
                            },
                            text: d(r)
                        }), a && (0,
                        cn.tZ)(xe.kk, {
                            white: !0,
                            center: !0,
                            className: "alert-msg",
                            children: d(a)
                        })]
                    })]
                }), l && (0,
                cn.BX)(Ie, {
                    children: [(0,
                    cn.tZ)("img", {
                        className: "bulbIcon",
                        alt: "".concat(d("proTipLogo")),
                        src: (0,
                        Tn.j)(Pe),
                        height: 16,
                        width: 16
                    }), (0,
                    cn.tZ)(xe.T6, {
                        white: !0,
                        children: d(l)
                    })]
                })]
            })
        }, je = t(2809), De = t(9305), Le = t(7981), ze = function(n, e) {
            return Object.defineProperty ? Object.defineProperty(n, "raw", {
                value: e
            }) : n.raw = e,
            n
        }, Me = (0,
        rn.iv)(R || (R = ze(["\n  border: ", ";\n  border-radius: 6px;\n  width: 100%;\n  font-size: 14px;\n  line-height: 150%;\n  padding: 8px 12px;\n  color: currentColor;\n  font-family: ", ";\n  box-shadow: ", ";\n  &:focus {\n    outline: none;\n    border-color: ", ";\n  }\n"], ["\n  border: ", ";\n  border-radius: 6px;\n  width: 100%;\n  font-size: 14px;\n  line-height: 150%;\n  padding: 8px 12px;\n  color: currentColor;\n  font-family: ", ";\n  box-shadow: ", ";\n  &:focus {\n    outline: none;\n    border-color: ", ";\n  }\n"])), (function(n) {
            return n.theme.border.base4
        }
        ), (function(n) {
            return n.theme.fontFamily
        }
        ), (function(n) {
            return n.theme.shadow.small
        }
        ), (function(n) {
            return n.theme.colors.ascent
        }
        )), Ne = rn.ZP.input(_ || (_ = ze(["\n  ", "\n  ", ";\n  color: ", ";\n  &::placeholder {\n    color: ", ";\n  }\n"], ["\n  ", "\n  ", ";\n  color: ", ";\n  &::placeholder {\n    color: ", ";\n  }\n"])), Me, (function(n) {
            var e = n.theme;
            return n.error ? "border-color: ".concat(e.colors.error) : ""
        }
        ), (function(n) {
            return n.theme.colors.base900
        }
        ), (function(n) {
            return n.theme.colors.base100
        }
        )), Be = rn.ZP.textarea(U || (U = ze(["\n  ", "\n  ", ";\n  height: 120px;\n  resize: none;\n  &::placeholder {\n    color: ", ";\n  }\n"], ["\n  ", "\n  ", ";\n  height: 120px;\n  resize: none;\n  &::placeholder {\n    color: ", ";\n  }\n"])), Me, (function(n) {
            var e = n.theme;
            return n.error ? "border-color: ".concat(e.colors.error) : ""
        }
        ), (function(n) {
            return n.theme.colors.base100
        }
        )), Re = rn.ZP.label(H || (H = ze(["\n  font-size: 12px;\n  line-height: 15px;\n  color: currentColor;\n  font-weight: 600;\n  margin-bottom: 4px;\n  display: block;\n  text-transform: uppercase;\n"], ["\n  font-size: 12px;\n  line-height: 15px;\n  color: currentColor;\n  font-weight: 600;\n  margin-bottom: 4px;\n  display: block;\n  text-transform: uppercase;\n"]))), _e = rn.ZP.div(F || (F = ze(["\n  position: relative;\n  margin: 16px 0;\n"], ["\n  position: relative;\n  margin: 16px 0;\n"]))), Ue = rn.ZP.p(X || (X = ze(["\n  position: absolute;\n  right: 10px;\n  bottom: 6px;\n  color: currentColor;\n"], ["\n  position: absolute;\n  right: 10px;\n  bottom: 6px;\n  color: currentColor;\n"]))), He = rn.ZP.label(G || (G = ze(['\n  display: flex;\n  align-items: center;\n  font-weight: 400;\n  font-size: 12px;\n  line-height: 150%;\n  color: currentColor;\n  cursor: pointer;\n\n  &:focus-within {\n    outline: none;\n  }\n\n  input[type="checkbox" i] {\n    margin-right: 10px;\n  }\n'], ['\n  display: flex;\n  align-items: center;\n  font-weight: 400;\n  font-size: 12px;\n  line-height: 150%;\n  color: currentColor;\n  cursor: pointer;\n\n  &:focus-within {\n    outline: none;\n  }\n\n  input[type="checkbox" i] {\n    margin-right: 10px;\n  }\n'])));
        function Fe(n, e) {
            var t = Object.keys(n);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(n);
                e && (i = i.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable
                }
                ))),
                t.push.apply(t, i)
            }
            return t
        }
        function Xe(n) {
            for (var e = 1; e < arguments.length; e++) {
                var t = null != arguments[e] ? arguments[e] : {};
                e % 2 ? Fe(Object(t), !0).forEach((function(e) {
                    (0,
                    je.Z)(n, e, t[e])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(t)) : Fe(Object(t)).forEach((function(e) {
                    Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(t, e))
                }
                ))
            }
            return n
        }
        var Ge, Ve, Ke = function(n, e) {
            var t = {};
            for (var i in n)
                Object.prototype.hasOwnProperty.call(n, i) && e.indexOf(i) < 0 && (t[i] = n[i]);
            if (null != n && "function" === typeof Object.getOwnPropertySymbols) {
                var o = 0;
                for (i = Object.getOwnPropertySymbols(n); o < i.length; o++)
                    e.indexOf(i[o]) < 0 && Object.prototype.propertyIsEnumerable.call(n, i[o]) && (t[i[o]] = n[i[o]])
            }
            return t
        }, Ye = function(n) {
            var e = n.title
              , t = n.error
              , i = n.onUpdate
              , o = Ke(n, ["title", "error", "onUpdate"]);
            return (0,
            cn.BX)(_e, {
                children: [(0,
                cn.BX)(Re, {
                    children: [e, " ", o.required ? "*" : ""]
                }), (0,
                cn.tZ)(Ne, Xe(Xe({
                    error: !!t,
                    onChange: function(n) {
                        i && "function" === typeof i && i(n.target.value)
                    }
                }, o), {}, {
                    onKeyUp: function(n) {
                        return n.stopPropagation()
                    },
                    onKeyDown: function(n) {
                        return n.stopPropagation()
                    }
                }))]
            })
        }, We = function(n) {
            var e = n.title
              , t = n.error
              , i = n.limit
              , o = n.initialValue
              , r = void 0 === o ? "" : o
              , a = n.style
              , l = n.onUpdate
              , d = Ke(n, ["title", "error", "limit", "initialValue", "style", "onUpdate"])
              , c = (0,
            V.useState)(r.length)
              , s = c[0]
              , u = c[1];
            return (0,
            cn.BX)(_e, {
                style: a,
                children: [(0,
                cn.BX)(Re, {
                    children: [e, " ", d.required ? "*" : ""]
                }), (0,
                cn.tZ)(Be, Xe({
                    error: !!t,
                    onChange: function(n) {
                        var e = n.target.value.length;
                        i && i < e || (u(e),
                        l(n.target.value))
                    },
                    onKeyUp: function(n) {
                        return n.stopPropagation()
                    },
                    onKeyDown: function(n) {
                        return n.stopPropagation()
                    }
                }, d)), (0,
                cn.BX)(Ue, {
                    children: [s, " ", "/", " ", i]
                })]
            })
        }, qe = function(n) {
            var e = n.children
              , t = n.title
              , i = n.onChange
              , o = n.type
              , r = void 0 === o ? "checkbox" : o
              , a = Ke(n, ["children", "title", "onChange", "type"]);
            return (0,
            cn.tZ)(_e, {
                children: (0,
                cn.BX)(He, {
                    children: [(0,
                    cn.tZ)("input", Xe({
                        type: r,
                        onChange: i
                    }, a)), t || e]
                })
            })
        }, Qe = t(9930), Je = t(8064), $e = function(n) {
            var e = n.children
              , t = n.center;
            return (0,
            cn.tZ)(Je.mz, {
                center: t,
                children: e
            })
        }, nt = function(n) {
            var e = n.icon
              , t = n.title
              , i = n.onClose;
            return (0,
            cn.BX)(Je.xB, {
                children: [e, (0,
                cn.tZ)(xe.js, {
                    children: t
                }), i && (0,
                cn.tZ)(Je.A3, {
                    onClick: i,
                    children: (0,
                    cn.tZ)(Qe.Z, {
                        name: "cross-thin",
                        size: 14
                    })
                })]
            })
        }, et = t(2825), tt = t(8844), it = t(1752), ot = t(5713), rt = function(n, e) {
            return Object.defineProperty ? Object.defineProperty(n, "raw", {
                value: e
            }) : n.raw = e,
            n
        }, at = rn.ZP.div(Ve || (Ve = rt(['\ndisplay: flex;\ninput[type="radio"] {\n  display: none;\n  margin: 0;\n  &:checked + label {\n    &:before {\n      background-color: ', ";\n      border: 1px solid ", ';\n    }\n    &:after {\n      box-sizing: content-box;\n      position: absolute;\n      left: 2px;\n      content: "";\n      height: 8px;\n      width: 8px;\n      border: 2px solid ', ";\n      border-radius: 50%;\n      -webkit-transition: .4s;\n      transition: .4s;\n      top: 50%;\n      transform: translateY(-50%);\n    }\n  }\n}\nlabel {\n  position: relative;\n  cursor: pointer;\n  color: currentColor;\n  ", '\n  padding-left: 28px;\n    &:before {\n      position: absolute;\n      left: 0;\n      top: 50%;\n      transform: translateY(-50%);\n      content: "";\n      width: 16px;\n      height: 16px;\n      border-radius: 50%;\n      box-sizing: border-box;\n      background-color: transparent;\n      border: 1px solid ', ";\n      display: inline-block;\n      margin-right: 5px;\n  }\n}\n"], ['\ndisplay: flex;\ninput[type="radio"] {\n  display: none;\n  margin: 0;\n  &:checked + label {\n    &:before {\n      background-color: ', ";\n      border: 1px solid ", ';\n    }\n    &:after {\n      box-sizing: content-box;\n      position: absolute;\n      left: 2px;\n      content: "";\n      height: 8px;\n      width: 8px;\n      border: 2px solid ', ";\n      border-radius: 50%;\n      -webkit-transition: .4s;\n      transition: .4s;\n      top: 50%;\n      transform: translateY(-50%);\n    }\n  }\n}\nlabel {\n  position: relative;\n  cursor: pointer;\n  color: currentColor;\n  ", '\n  padding-left: 28px;\n    &:before {\n      position: absolute;\n      left: 0;\n      top: 50%;\n      transform: translateY(-50%);\n      content: "";\n      width: 16px;\n      height: 16px;\n      border-radius: 50%;\n      box-sizing: border-box;\n      background-color: transparent;\n      border: 1px solid ', ";\n      display: inline-block;\n      margin-right: 5px;\n  }\n}\n"])), (function(n) {
            return n.theme.colors.ascent
        }
        ), (function(n) {
            return n.theme.colors.ascent
        }
        ), (function(n) {
            return n.theme.colors.white
        }
        ), (function(n) {
            return n.labeltext && (0,
            rn.iv)(Ge || (Ge = rt(["\n    font-weight: 400;\n    font-size: 12px;\n    line-height: 150%;\n  "], ["\n    font-weight: 400;\n    font-size: 12px;\n    line-height: 150%;\n  "])))
        }
        ), (function(n) {
            return n.theme.colors.base500
        }
        ));
        function lt(n, e) {
            var t = Object.keys(n);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(n);
                e && (i = i.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable
                }
                ))),
                t.push.apply(t, i)
            }
            return t
        }
        function dt(n) {
            for (var e = 1; e < arguments.length; e++) {
                var t = null != arguments[e] ? arguments[e] : {};
                e % 2 ? lt(Object(t), !0).forEach((function(e) {
                    (0,
                    je.Z)(n, e, t[e])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(t)) : lt(Object(t)).forEach((function(e) {
                    Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(t, e))
                }
                ))
            }
            return n
        }
        var ct, st, ut, pt, ft, ht = function(n, e) {
            var t = {};
            for (var i in n)
                Object.prototype.hasOwnProperty.call(n, i) && e.indexOf(i) < 0 && (t[i] = n[i]);
            if (null != n && "function" === typeof Object.getOwnPropertySymbols) {
                var o = 0;
                for (i = Object.getOwnPropertySymbols(n); o < i.length; o++)
                    e.indexOf(i[o]) < 0 && Object.prototype.propertyIsEnumerable.call(n, i[o]) && (t[i[o]] = n[i[o]])
            }
            return t
        }, gt = function(n) {
            var e = n.children
              , t = n.labelId
              , i = ht(n, ["children", "labelId"]);
            return (0,
            cn.BX)(at, dt(dt({}, i), {}, {
                children: [(0,
                cn.tZ)("input", dt({
                    type: "radio"
                }, i)), (0,
                cn.tZ)("label", {
                    htmlFor: i.id,
                    id: t,
                    children: i.labeltext || e
                })]
            }))
        }, mt = function(n, e) {
            return Object.defineProperty ? Object.defineProperty(n, "raw", {
                value: e
            }) : n.raw = e,
            n
        }, xt = rn.ZP.div(ct || (ct = mt(["\n  ", "\n  border-radius: 6px;\n  transition: all 0.3s ease-out;\n"], ["\n  ", "\n  border-radius: 6px;\n  transition: all 0.3s ease-out;\n"])), (function(n) {
            var e = n.theme
              , t = n.openState;
            return "\n    background-color: ".concat(t ? e.colors.ascent : e.colors.white, ";\n    border: 1px solid ").concat(t ? e.colors.ascent : e.colors.background, ";\n    ").concat(t ? "" : "box-shadow: ".concat(e.shadow.small, ";"), "\n  ")
        }
        )), vt = rn.ZP.div(st || (st = mt(["\n  cursor: pointer;\n  color: ", ";\n  display: flex;\n  justify-content: space-between;\n  padding: 8px 12px;\n  transition: all 0.3s ease-out;\n  svg {\n    stroke: ", ";\n  }\n"], ["\n  cursor: pointer;\n  color: ", ";\n  display: flex;\n  justify-content: space-between;\n  padding: 8px 12px;\n  transition: all 0.3s ease-out;\n  svg {\n    stroke: ", ";\n  }\n"])), (function(n) {
            var e = n.theme;
            return n.openState ? e.colors.white : e.colors.base700
        }
        ), (function(n) {
            var e = n.theme;
            return n.openState ? e.colors.white : e.colors.base700
        }
        )), bt = rn.ZP.ul(ut || (ut = mt(["\n  color: ", ";\n  background-color: ", ";\n  box-shadow: ", ";\n  margin: 1px;\n  border-radius: 4px;\n  overflow: hidden;\n  transition: max-height 0.3s ease-out;\n  max-height: 0;\n  list-style: none;\n  padding: 0;\n"], ["\n  color: ", ";\n  background-color: ", ";\n  box-shadow: ", ";\n  margin: 1px;\n  border-radius: 4px;\n  overflow: hidden;\n  transition: max-height 0.3s ease-out;\n  max-height: 0;\n  list-style: none;\n  padding: 0;\n"])), (function(n) {
            return n.theme.colors.base500
        }
        ), (function(n) {
            return n.theme.colors.white
        }
        ), (function(n) {
            return n.theme.shadow.small
        }
        )), yt = rn.ZP.li(pt || (pt = mt(["\n  cursor: pointer;\n  margin-bottom: 8px;\n  padding: 8px 12px;\n\n  &:last-child {\n    margin-bottom: 0;\n  }\n"], ["\n  cursor: pointer;\n  margin-bottom: 8px;\n  padding: 8px 12px;\n\n  &:last-child {\n    margin-bottom: 0;\n  }\n"]))), wt = rn.ZP.span(ft || (ft = mt(["\n  display: inline-flex;\n  align-items: center;\n  transition: transform 0.3s ease-out;\n\n  ", "\n"], ["\n  display: inline-flex;\n  align-items: center;\n  transition: transform 0.3s ease-out;\n\n  ", "\n"])), (function(n) {
            return n.rotate && "transform: rotateX(180deg);"
        }
        ));
        function Zt(n, e) {
            var t = Object.keys(n);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(n);
                e && (i = i.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable
                }
                ))),
                t.push.apply(t, i)
            }
            return t
        }
        function kt(n) {
            for (var e = 1; e < arguments.length; e++) {
                var t = null != arguments[e] ? arguments[e] : {};
                e % 2 ? Zt(Object(t), !0).forEach((function(e) {
                    (0,
                    je.Z)(n, e, t[e])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(t)) : Zt(Object(t)).forEach((function(e) {
                    Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(t, e))
                }
                ))
            }
            return n
        }
        var At, Pt, St, Et, Ct = function(n, e) {
            var t = {};
            for (var i in n)
                Object.prototype.hasOwnProperty.call(n, i) && e.indexOf(i) < 0 && (t[i] = n[i]);
            if (null != n && "function" === typeof Object.getOwnPropertySymbols) {
                var o = 0;
                for (i = Object.getOwnPropertySymbols(n); o < i.length; o++)
                    e.indexOf(i[o]) < 0 && Object.prototype.propertyIsEnumerable.call(n, i[o]) && (t[i[o]] = n[i[o]])
            }
            return t
        }, Tt = function(n) {
            var e = n.label
              , t = n.options
              , i = void 0 === t ? [] : t
              , o = n.selectedValue
              , r = n.showOptions
              , a = void 0 !== r && r
              , l = n.onSelectOption
              , d = Ct(n, ["label", "options", "selectedValue", "showOptions", "onSelectOption"])
              , c = (0,
            V.useState)(a)
              , s = c[0]
              , u = c[1]
              , p = (0,
            gn.$)().t
              , f = (0,
            V.useRef)(null)
              , h = function(n) {
                f.current && (f.current.style.maxHeight = n ? "".concat(f.current.scrollHeight, "px") : "",
                u(n))
            };
            return (0,
            V.useEffect)((function() {
                h(a)
            }
            ), [a]),
            i.length ? (0,
            cn.BX)(xt, kt(kt({
                openState: s
            }, d), {}, {
                children: [(0,
                cn.BX)(vt, {
                    onClick: function() {
                        h(!s)
                    },
                    openState: s,
                    children: [(0,
                    cn.tZ)(xe.xP, {
                        children: p(e)
                    }), (0,
                    cn.tZ)(wt, {
                        rotate: s,
                        children: (0,
                        cn.tZ)("svg", {
                            width: "10",
                            height: "6",
                            viewBox: "0 0 10 6",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: (0,
                            cn.tZ)("path", {
                                d: "M9 1.46973L5 5.46973L1 1.46973",
                                strokeLinecap: "round",
                                strokeLinejoin: "round"
                            })
                        })
                    })]
                }), (0,
                cn.tZ)(bt, {
                    ref: f,
                    children: i.map((function(n) {
                        return (0,
                        cn.tZ)(yt, {
                            onClick: function() {
                                return l && l(n)
                            },
                            children: (0,
                            cn.tZ)(gt, {
                                checked: o === n,
                                labelId: n,
                                children: (0,
                                cn.tZ)(xe.lU, {
                                    children: p(n)
                                })
                            })
                        }, n)
                    }
                    ))
                })]
            })) : null
        }, It = function(n, e) {
            return Object.defineProperty ? Object.defineProperty(n, "raw", {
                value: e
            }) : n.raw = e,
            n
        }, Ot = (0,
        rn.F4)(At || (At = It(["\n    0% { transform: rotate(0deg); }\n    100% { transform: rotate(360deg); }\n"], ["\n    0% { transform: rotate(0deg); }\n    100% { transform: rotate(360deg); }\n"]))), jt = (rn.ZP.img(Pt || (Pt = It(["\n    width: 42px;\n    height: 42px;\n    animation-name: ", ";\n    animation-duration: 2s;\n    animation-iteration-count: infinite;\n    animation-timing-function: linear;\n"], ["\n    width: 42px;\n    height: 42px;\n    animation-name: ", ";\n    animation-duration: 2s;\n    animation-iteration-count: infinite;\n    animation-timing-function: linear;\n"])), Ot),
        rn.ZP.span(Et || (Et = It(["", ""], ["", ""])), (function(n) {
            var e = n.width
              , t = void 0 === e ? "14px" : e
              , i = n.trackSize
              , o = void 0 === i ? "1px" : i
              , r = n.trackColor
              , a = void 0 === r ? "#D0E6FFE5" : r
              , l = n.movingColor
              , d = void 0 === l ? "#0397EB" : l;
            return (0,
            rn.iv)(St || (St = It(["\n      display: inline-block;\n      position: relative;\n      height: ", ";\n      width: ", ";\n  \n      &::before {\n          content: '';\n          position: absolute;\n          height: 100%;\n          width: 100%;\n          border-radius: 50%;\n          border: ", " solid ", ";\n          border-bottom-color: ", ";\n          animation-name: ", ";\n          animation-duration: 1s;\n          animation-iteration-count: infinite;\n          animation-timing-function: linear;\n      }\n  "], ["\n      display: inline-block;\n      position: relative;\n      height: ", ";\n      width: ", ";\n  \n      &::before {\n          content: '';\n          position: absolute;\n          height: 100%;\n          width: 100%;\n          border-radius: 50%;\n          border: ", " solid ", ";\n          border-bottom-color: ", ";\n          animation-name: ", ";\n          animation-duration: 1s;\n          animation-iteration-count: infinite;\n          animation-timing-function: linear;\n      }\n  "])), t, t, o, a, d, Ot)
        }
        )));
        function Dt(n, e) {
            var t = Object.keys(n);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(n);
                e && (i = i.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable
                }
                ))),
                t.push.apply(t, i)
            }
            return t
        }
        for (var Lt, zt = function(n) {
            return (0,
            cn.tZ)(jt, function(n) {
                for (var e = 1; e < arguments.length; e++) {
                    var t = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? Dt(Object(t), !0).forEach((function(e) {
                        (0,
                        je.Z)(n, e, t[e])
                    }
                    )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(t)) : Dt(Object(t)).forEach((function(e) {
                        Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(t, e))
                    }
                    ))
                }
                return n
            }({}, n))
        }, Mt = t(2199), Nt = t(4387), Bt = t(4902), Rt = [], _t = 0; _t < 5; _t += 1) {
            Rt[_t] = [];
            for (var Ut = 1; Ut <= 15; Ut += 1)
                Rt[_t][Ut] = 0
        }
        var Ht = !1
          , Ft = performance.now()
          , Xt = !0;
        function Gt() {
            if (Ht) {
                Xt && ((0,
                Bt.j8)(Nt.st),
                Xt = !1);
                for (var n = navigator.getGamepads(), e = 0; e < n.length; e += 1) {
                    var t = n[e];
                    if (t && t.connected && t.timestamp !== Ft) {
                        for (var i = t.axes, o = t.buttons, r = 0; r < o.length; r += 1)
                            Nt.hW[r] && Rt[e][r] !== o[r].value && (Mt.ZP.handleKey(Nt.hW[r], o[r].value > .75 ? 1 : 0),
                            Rt[e][r] = o[r].value);
                        try {
                            window.Module.Gamepad(t.timestamp, 0, 1 - t.buttons[6].value, 1 - t.buttons[7].value, ~~(128 * i[0] * 255), ~~(128 * -i[1] * 255), ~~(128 * i[2] * 255), ~~(128 * -i[3] * 255))
                        } catch (a) {}
                        Ft = t.timestamp
                    }
                }
            }
        }
        var Vt = {
            gamepad: null,
            setActiveSchemeHasGamepad: function(n) {
                Ht = Mt.ZP.inUse() && n
            },
            onconnected: function(n) {
                !function() {
                    var n;
                    (null === (n = Mt.ZP.config) || void 0 === n ? void 0 : n.anySchemeHasGamepad) && !Lt && (Lt = setInterval(Gt, 16))
                }(),
                Vt.gamepad = n.gamepad,
                (0,
                Bt.j8)(Nt.eT, !0)
            },
            ondisconnected: function(n) {
                (0,
                Bt.j8)(Nt.eT, !1),
                clearInterval(Lt),
                Vt.gamepad = null,
                Xt = !0
            }
        }
          , Kt = Vt
          , Yt = t(812)
          , Wt = function(n, e, t, i) {
            return new (t || (t = Promise))((function(o, r) {
                function a(n) {
                    try {
                        d(i.next(n))
                    } catch (e) {
                        r(e)
                    }
                }
                function l(n) {
                    try {
                        d(i.throw(n))
                    } catch (e) {
                        r(e)
                    }
                }
                function d(n) {
                    var e;
                    n.done ? o(n.value) : (e = n.value,
                    e instanceof t ? e : new t((function(n) {
                        n(e)
                    }
                    ))).then(a, l)
                }
                d((i = i.apply(n, e || [])).next())
            }
            ))
        }
          , qt = function(n, e) {
            var t, i, o, r, a = {
                label: 0,
                sent: function() {
                    if (1 & o[0])
                        throw o[1];
                    return o[1]
                },
                trys: [],
                ops: []
            };
            return r = {
                next: l(0),
                throw: l(1),
                return: l(2)
            },
            "function" === typeof Symbol && (r[Symbol.iterator] = function() {
                return this
            }
            ),
            r;
            function l(r) {
                return function(l) {
                    return function(r) {
                        if (t)
                            throw new TypeError("Generator is already executing.");
                        for (; a; )
                            try {
                                if (t = 1,
                                i && (o = 2 & r[0] ? i.return : r[0] ? i.throw || ((o = i.return) && o.call(i),
                                0) : i.next) && !(o = o.call(i, r[1])).done)
                                    return o;
                                switch (i = 0,
                                o && (r = [2 & r[0], o.value]),
                                r[0]) {
                                case 0:
                                case 1:
                                    o = r;
                                    break;
                                case 4:
                                    return a.label++,
                                    {
                                        value: r[1],
                                        done: !1
                                    };
                                case 5:
                                    a.label++,
                                    i = r[1],
                                    r = [0];
                                    continue;
                                case 7:
                                    r = a.ops.pop(),
                                    a.trys.pop();
                                    continue;
                                default:
                                    if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === r[0] || 2 === r[0])) {
                                        a = 0;
                                        continue
                                    }
                                    if (3 === r[0] && (!o || r[1] > o[0] && r[1] < o[3])) {
                                        a.label = r[1];
                                        break
                                    }
                                    if (6 === r[0] && a.label < o[1]) {
                                        a.label = o[1],
                                        o = r;
                                        break
                                    }
                                    if (o && a.label < o[2]) {
                                        a.label = o[2],
                                        a.ops.push(r);
                                        break
                                    }
                                    o[2] && a.ops.pop(),
                                    a.trys.pop();
                                    continue
                                }
                                r = e.call(n, a)
                            } catch (l) {
                                r = [6, l],
                                i = 0
                            } finally {
                                t = o = 0
                            }
                        if (5 & r[0])
                            throw r[1];
                        return {
                            value: r[0] ? r[1] : void 0,
                            done: !0
                        }
                    }([r, l])
                }
            }
        };
        function Qt(n) {
            return Wt(this, void 0, void 0, (function() {
                return qt(this, (function(e) {
                    return [2, fetch(n).then((function(n) {
                        return n.blob()
                    }
                    )).then((function(n) {
                        return new File([n],"screenshot.png",{
                            type: "image/jpeg"
                        })
                    }
                    )).catch((function(n) {
                        throw new Error("Oops! unable to convert dataURI to file ".concat(n))
                    }
                    ))]
                }
                ))
            }
            ))
        }
        function Jt(n, e) {
            var t = document.createElement("canvas")
              , i = t.getContext("2d");
            return e === nn.cj.landscape ? (0,
            q.tq)() ? (t.width = n.clientHeight,
            t.height = n.clientWidth,
            null === i || void 0 === i || i.rotate(-Math.PI / 2),
            null === i || void 0 === i || i.drawImage(n, -t.width / 2, 0, t.height, t.width)) : (t.width = n.clientHeight,
            t.height = n.clientWidth,
            null === i || void 0 === i || i.translate(t.width / 2, t.height / 2),
            null === i || void 0 === i || i.rotate(-Math.PI / 2),
            null === i || void 0 === i || i.drawImage(n, -t.height / 2, -t.width / 2, t.height, t.width)) : (t.width = n.clientWidth,
            t.height = n.clientHeight,
            null === i || void 0 === i || i.drawImage(n, 0, 0, n.clientWidth, n.clientHeight)),
            t.toDataURL("image/jpeg")
        }
        function $t(n, e, t) {
            return Wt(this, void 0, void 0, (function() {
                var i, o, r, a;
                return qt(this, (function(l) {
                    return i = document.createElement("canvas"),
                    o = i.getContext("2d"),
                    r = Jt(e, t),
                    (a = new Image).src = r,
                    [2, new Promise((function(e) {
                        a.onload = function() {
                            return Wt(this, void 0, void 0, (function() {
                                var t;
                                return qt(this, (function(r) {
                                    try {
                                        (t = new Image).src = n,
                                        t.onload = function() {
                                            return Wt(this, void 0, void 0, (function() {
                                                var n;
                                                return qt(this, (function(r) {
                                                    return i.width = a.width + t.width + 20,
                                                    i.height = Math.max(a.height, t.height) + 80,
                                                    null === o || void 0 === o || o.drawImage(a, 0, 0, a.width, a.height),
                                                    null === o || void 0 === o || o.drawImage(t, a.width + 20, 0, t.width, t.height),
                                                    o && (o.font = "26px Arial",
                                                    o.textAlign = "center",
                                                    o.fillStyle = "#e3f081",
                                                    o.fillText("Android Stream Image", a.width / 2, Math.max(a.height, t.height) + 40),
                                                    o.fillText("Uploaded File Image", a.width + t.width / 2, Math.max(a.height, t.height) + 40)),
                                                    n = i.toDataURL(),
                                                    e(n),
                                                    [2]
                                                }
                                                ))
                                            }
                                            ))
                                        }
                                    } catch (l) {
                                        throw new Error("Oops! unable to stich images")
                                    }
                                    return [2]
                                }
                                ))
                            }
                            ))
                        }
                    }
                    ))]
                }
                ))
            }
            ))
        }
        function ni(n, e, t) {
            return Wt(this, void 0, void 0, (function() {
                var i, o, r;
                return qt(this, (function(a) {
                    if (i = document.createElement("canvas"),
                    !(o = i.getContext("2d")))
                        throw new Error("Oops! unable to merge image");
                    return (r = new Image).src = n,
                    [2, new Promise((function(n) {
                        r.onload = function() {
                            return Wt(this, void 0, void 0, (function() {
                                var a;
                                return qt(this, (function(l) {
                                    return (a = new Image).src = e,
                                    a.onload = function() {
                                        i.width = r.width + a.width + 20,
                                        i.height = Math.max(r.height, a.height) + 80,
                                        null === o || void 0 === o || o.drawImage(r, 0, 0, r.width, r.height),
                                        null === o || void 0 === o || o.drawImage(a, r.width + 20, 0, a.width, a.height),
                                        o.font = "26px Arial",
                                        o.textAlign = "center",
                                        o.fillStyle = "#e3f081",
                                        o.fillText(t, r.width + a.width / 2, Math.max(r.height, a.height) + 40);
                                        var e = i.toDataURL();
                                        n(e)
                                    }
                                    ,
                                    [2]
                                }
                                ))
                            }
                            ))
                        }
                    }
                    ))]
                }
                ))
            }
            ))
        }
        function ei(n) {
            return Wt(this, void 0, void 0, (function() {
                return qt(this, (function(e) {
                    return [2, navigator.mediaDevices.getDisplayMedia({
                        video: !0
                    }).then((function(e) {
                        var t = document.createElement("video");
                        return t.srcObject = e,
                        t.autoplay = !0,
                        t.muted = !0,
                        t.play().catch((function() {}
                        )),
                        new Promise((function(i) {
                            t.addEventListener("playing", (function() {
                                var o = document.createElement("canvas");
                                o.width = t.videoWidth,
                                o.height = t.videoHeight;
                                var r = o.getContext("2d");
                                if (!r)
                                    throw e.getTracks().forEach((function(n) {
                                        return n.stop()
                                    }
                                    )),
                                    new Error("Oops! unable to get image");
                                setTimeout((function() {
                                    r.drawImage(t, 0, 0, t.videoWidth, t.videoHeight),
                                    e.getTracks().forEach((function(n) {
                                        return n.stop()
                                    }
                                    ));
                                    var a = o.toDataURL("image/jpeg");
                                    n.current = a,
                                    i(a)
                                }
                                ), 1e3)
                            }
                            ))
                        }
                        ))
                    }
                    )).catch((function(n) {
                        throw new Error("Oops! unable to get image")
                    }
                    ))]
                }
                ))
            }
            ))
        }
        function ti(n, e, t) {
            return Wt(this, void 0, void 0, (function() {
                var i, o, r, a, l;
                return qt(this, (function(d) {
                    switch (d.label) {
                    case 0:
                        i = document.createElement("canvas"),
                        o = i.getContext("2d"),
                        r = Jt(n, e),
                        d.label = 1;
                    case 1:
                        return d.trys.push([1, 3, , 4]),
                        [4, ei(t)];
                    case 2:
                        return a = d.sent(),
                        [3, 4];
                    case 3:
                        return d.sent(),
                        [2, r];
                    case 4:
                        return (l = new Image).src = r,
                        [2, new Promise((function(n) {
                            l.onload = function() {
                                return Wt(this, void 0, void 0, (function() {
                                    var e;
                                    return qt(this, (function(t) {
                                        try {
                                            (e = new Image).src = a,
                                            e.onload = function() {
                                                i.width = l.width + e.width + 20,
                                                i.height = Math.max(l.height, e.height) + 80,
                                                null === o || void 0 === o || o.drawImage(l, 0, 0, l.width, l.height),
                                                null === o || void 0 === o || o.drawImage(e, l.width + 20, 0, e.width, e.height),
                                                o && (o.font = "26px Arial",
                                                o.textAlign = "center",
                                                o.fillStyle = "#e3f081",
                                                o.fillText("Android Stream Image", l.width / 2, Math.max(l.height, e.height) + 40),
                                                o.fillText("Screen Capture Image", l.width + e.width / 2, Math.max(l.height, e.height) + 40));
                                                var t = i.toDataURL();
                                                n(t)
                                            }
                                        } catch (d) {
                                            n(r)
                                        }
                                        return [2]
                                    }
                                    ))
                                }
                                ))
                            }
                        }
                        ))]
                    }
                }
                ))
            }
            ))
        }
        var ii, oi, ri, ai, li, di, ci, si, ui, pi, fi, hi, gi, mi, xi, vi, bi, yi, wi, Zi = function(n, e, t, i) {
            return new (t || (t = Promise))((function(o, r) {
                function a(n) {
                    try {
                        d(i.next(n))
                    } catch (e) {
                        r(e)
                    }
                }
                function l(n) {
                    try {
                        d(i.throw(n))
                    } catch (e) {
                        r(e)
                    }
                }
                function d(n) {
                    var e;
                    n.done ? o(n.value) : (e = n.value,
                    e instanceof t ? e : new t((function(n) {
                        n(e)
                    }
                    ))).then(a, l)
                }
                d((i = i.apply(n, e || [])).next())
            }
            ))
        }, ki = function(n, e) {
            var t, i, o, r, a = {
                label: 0,
                sent: function() {
                    if (1 & o[0])
                        throw o[1];
                    return o[1]
                },
                trys: [],
                ops: []
            };
            return r = {
                next: l(0),
                throw: l(1),
                return: l(2)
            },
            "function" === typeof Symbol && (r[Symbol.iterator] = function() {
                return this
            }
            ),
            r;
            function l(r) {
                return function(l) {
                    return function(r) {
                        if (t)
                            throw new TypeError("Generator is already executing.");
                        for (; a; )
                            try {
                                if (t = 1,
                                i && (o = 2 & r[0] ? i.return : r[0] ? i.throw || ((o = i.return) && o.call(i),
                                0) : i.next) && !(o = o.call(i, r[1])).done)
                                    return o;
                                switch (i = 0,
                                o && (r = [2 & r[0], o.value]),
                                r[0]) {
                                case 0:
                                case 1:
                                    o = r;
                                    break;
                                case 4:
                                    return a.label++,
                                    {
                                        value: r[1],
                                        done: !1
                                    };
                                case 5:
                                    a.label++,
                                    i = r[1],
                                    r = [0];
                                    continue;
                                case 7:
                                    r = a.ops.pop(),
                                    a.trys.pop();
                                    continue;
                                default:
                                    if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === r[0] || 2 === r[0])) {
                                        a = 0;
                                        continue
                                    }
                                    if (3 === r[0] && (!o || r[1] > o[0] && r[1] < o[3])) {
                                        a.label = r[1];
                                        break
                                    }
                                    if (6 === r[0] && a.label < o[1]) {
                                        a.label = o[1],
                                        o = r;
                                        break
                                    }
                                    if (o && a.label < o[2]) {
                                        a.label = o[2],
                                        a.ops.push(r);
                                        break
                                    }
                                    o[2] && a.ops.pop(),
                                    a.trys.pop();
                                    continue
                                }
                                r = e.call(n, a)
                            } catch (l) {
                                r = [6, l],
                                i = 0
                            } finally {
                                t = o = 0
                            }
                        if (5 & r[0])
                            throw r[1];
                        return {
                            value: r[0] ? r[1] : void 0,
                            done: !0
                        }
                    }([r, l])
                }
            }
        }, Ai = function(n) {
            return Zi(void 0, void 0, void 0, (function() {
                var e, t;
                return ki(this, (function(i) {
                    switch (i.label) {
                    case 0:
                        e = {
                            video: {},
                            audio: {},
                            candidate: {},
                            remote: [],
                            local: [],
                            connection: {},
                            datachannel: []
                        },
                        i.label = 1;
                    case 1:
                        return i.trys.push([1, 3, , 4]),
                        [4, n.getStats(null)];
                    case 2:
                        return (t = i.sent()) && t.forEach((function(n) {
                            "inbound-rtp" !== n.type || "video" !== n.kind && "audio" !== n.kind || Object.keys(n).forEach((function(t) {
                                e[n.kind][t] = n[t]
                            }
                            )),
                            "data-channel" === n.type && e.datachannel.push({
                                messagesReceived: null === n || void 0 === n ? void 0 : n.messagesReceived,
                                messagesSent: null === n || void 0 === n ? void 0 : n.messagesSent,
                                label: null === n || void 0 === n ? void 0 : n.label,
                                id: null === n || void 0 === n ? void 0 : n.id
                            }),
                            "candidate-pair" === n.type && (e.candidate.currentRoundTripTime = "".concat(parseFloat((1e3 * (null === n || void 0 === n ? void 0 : n.currentRoundTripTime)).toString()).toFixed(2), "ms"),
                            e.candidate.availableOutgoingBitrate = null === n || void 0 === n ? void 0 : n.availableOutgoingBitrate,
                            e.candidate.totalRoundTripTime = 1e3 * (null === n || void 0 === n ? void 0 : n.totalRoundTripTime),
                            e.candidate.state = null === n || void 0 === n ? void 0 : n.state),
                            "remote-candidate" === n.type && e.remote.push(n),
                            "local-candidate" === n.type && e.local.push(n)
                        }
                        )),
                        [3, 4];
                    case 3:
                        return i.sent(),
                        [3, 4];
                    case 4:
                        try {
                            ["iceGatheringState", "iceConnectionState", "connectionState", "canTrickleIceCandidates", "signalingState"].map((function(t) {
                                return n[t] && (e.connection[t] = n[t]),
                                t
                            }
                            ))
                        } catch (o) {}
                        return [2, e]
                    }
                }
                ))
            }
            ))
        }, Pi = function(n, e) {
            return Object.defineProperty ? Object.defineProperty(n, "raw", {
                value: e
            }) : n.raw = e,
            n
        }, Si = (0,
        rn.iv)(ii || (ii = Pi(["\n    max-width: 100%;\n    max-height: 100vh;\n    width: 380px;\n    overflow: auto;\n    margin: 0;\n\n\n    @media screen and (orientation: landscape) and (max-height: 575.98px) {\n        max-height: calc(100% - 18px);\n    }\n\n    @media screen and (orientation: portrait) and (max-width: 600px) {\n      &.addRotation{\n        transform: rotate(-90deg);\n      }\n        width: calc(100vw - 18px);\n    }\n"], ["\n    max-width: 100%;\n    max-height: 100vh;\n    width: 380px;\n    overflow: auto;\n    margin: 0;\n\n\n    @media screen and (orientation: landscape) and (max-height: 575.98px) {\n        max-height: calc(100% - 18px);\n    }\n\n    @media screen and (orientation: portrait) and (max-width: 600px) {\n      &.addRotation{\n        transform: rotate(-90deg);\n      }\n        width: calc(100vw - 18px);\n    }\n"]))), Ei = (0,
        rn.iv)(oi || (oi = Pi(["\n    justify-content: center;\n    align-items: center;\n"], ["\n    justify-content: center;\n    align-items: center;\n"]))), Ci = rn.ZP.div(ri || (ri = Pi(["\n    padding: 16px;\n\n    header {\n        color: ", ";\n        border: 0;\n        span {\n            margin-right: 8px;\n        }\n    }\n    label {\n        color: ", ";\n        font-weight: 500;\n        letter-spacing: 0.6px;\n    }\n    .error {\n        color: ", ";\n        opacity: 0.8;\n    }\n    footer {\n        margin-top: 8px;\n    }\n"], ["\n    padding: 16px;\n\n    header {\n        color: ", ";\n        border: 0;\n        span {\n            margin-right: 8px;\n        }\n    }\n    label {\n        color: ", ";\n        font-weight: 500;\n        letter-spacing: 0.6px;\n    }\n    .error {\n        color: ", ";\n        opacity: 0.8;\n    }\n    footer {\n        margin-top: 8px;\n    }\n"])), (function(n) {
            return n.theme.colors.base700
        }
        ), (function(n) {
            return n.theme.colors.base700
        }
        ), (function(n) {
            return n.theme.colors.error
        }
        )), Ti = rn.ZP.span(ai || (ai = Pi(["\n    text-align: center;\n    width: 20px;\n    height: 20px;\n    border-radius: 50%;\n    background-color: ", ";\n    font-size: 14px;\n    line-height: 20px;\n    align-self: center;\n"], ["\n    text-align: center;\n    width: 20px;\n    height: 20px;\n    border-radius: 50%;\n    background-color: ", ";\n    font-size: 14px;\n    line-height: 20px;\n    align-self: center;\n"])), (function(n) {
            return n.theme.colors.warning
        }
        )), Ii = (rn.ZP.div(li || (li = Pi(["\n    display: flex;\n    justify-content: space-between;\n"], ["\n    display: flex;\n    justify-content: space-between;\n"]))),
        rn.ZP.ul(di || (di = Pi(["\n    padding: 0;\n    margin: 24px auto 16px;\n    list-style-type: none;\n"], ["\n    padding: 0;\n    margin: 24px auto 16px;\n    list-style-type: none;\n"])))), Oi = rn.ZP.li(ci || (ci = Pi(["\n    color: ", ";\n\n    display: flex;\n    align-items: center;\n    gap: 16px;\n    margin-bottom: 16px;\n    &:last-child {\n        margin-bottom: 0;\n    }\n\n    .icon-active {\n        color: ", ";\n    }\n"], ["\n    color: ", ";\n\n    display: flex;\n    align-items: center;\n    gap: 16px;\n    margin-bottom: 16px;\n    &:last-child {\n        margin-bottom: 0;\n    }\n\n    .icon-active {\n        color: ", ";\n    }\n"])), (function(n) {
            return n.theme.colors.base700
        }
        ), ot.qm.colors.green), ji = rn.ZP.div(si || (si = Pi(["\n    list-style-type: none;\n    display: flex;\n    margin: 0;\n    background: ", ";\n    border: ", ";\n    box-shadow: ", ";\n    border-radius: 6px;\n    padding: 16px;\n"], ["\n    list-style-type: none;\n    display: flex;\n    margin: 0;\n    background: ", ";\n    border: ", ";\n    box-shadow: ", ";\n    border-radius: 6px;\n    padding: 16px;\n"])), (function(n) {
            return n.theme.colors.white
        }
        ), (function(n) {
            return n.theme.border.base4
        }
        ), (function(n) {
            return n.theme.shadow.small
        }
        )), Di = rn.ZP.label(pi || (pi = Pi(["\n    ", ";\n    width: 48px;\n    height: 48px;\n    margin-right: auto;\n    background-size: cover;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    position: relative;\n    cursor: pointer;\n    span {\n        z-index: 2;\n    }\n    p {\n        margin-bottom: 0;\n        width: 16px;\n        height: 16px;\n    }\n    .icon-cross-thin {\n        color: white;\n        z-index: 1;\n        font-weight: bold;\n    }\n\n    ", "\n"], ["\n    ", ";\n    width: 48px;\n    height: 48px;\n    margin-right: auto;\n    background-size: cover;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    position: relative;\n    cursor: pointer;\n    span {\n        z-index: 2;\n    }\n    p {\n        margin-bottom: 0;\n        width: 16px;\n        height: 16px;\n    }\n    .icon-cross-thin {\n        color: white;\n        z-index: 1;\n        font-weight: bold;\n    }\n\n    ", "\n"])), (function(n) {
            var e = n.background;
            return e ? 'background-image: url("'.concat(e, '")') : ""
        }
        ), (function(n) {
            return n.loading ? "" : (0,
            rn.iv)(ui || (ui = Pi(["\n    border: 1px solid rgba(255, 255, 255, 0.5);\n    border-radius: 4px;\n    overflow: hidden;\n    &:hover {\n        &:after {\n            background: ", ";\n        }\n    }\n\n    &:after {\n        content: '';\n        position: absolute;\n        left: 0;\n        right: 0;\n        top: 0;\n        bottom: 0;\n        background: rgba(0, 0, 0, 0.5);\n\n    }"], ["\n    border: 1px solid rgba(255, 255, 255, 0.5);\n    border-radius: 4px;\n    overflow: hidden;\n    &:hover {\n        &:after {\n            background: ", ";\n        }\n    }\n\n    &:after {\n        content: '';\n        position: absolute;\n        left: 0;\n        right: 0;\n        top: 0;\n        bottom: 0;\n        background: rgba(0, 0, 0, 0.5);\n\n    }"])), (function(n) {
                return n.theme.colors.modal
            }
            ))
        }
        )), Li = rn.ZP.label(mi || (mi = Pi(["\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-direction: column;\n    cursor: pointer;\n\n    ", "\n    ", ";\n    p {\n        margin: 13px 0 0;\n        font-weight: 400;\n        font-size: 12px;\n        line-height: 150%;\n    }\n    input {\n        display: none;\n    }\n"], ["\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-direction: column;\n    cursor: pointer;\n\n    ", "\n    ", ";\n    p {\n        margin: 13px 0 0;\n        font-weight: 400;\n        font-size: 12px;\n        line-height: 150%;\n    }\n    input {\n        display: none;\n    }\n"])), (function(n) {
            return n.compact ? (0,
            rn.iv)(fi || (fi = Pi(["\n        width: 48px;\n        min-width: 48px;\n        height: 48px;\n        background: ", ";\n        border-radius: 50%;\n        margin-left: 8px;\n        box-shadow: inset 0px 1px 0px #F5F5F5;\n    "], ["\n        width: 48px;\n        min-width: 48px;\n        height: 48px;\n        background: ", ";\n        border-radius: 50%;\n        margin-left: 8px;\n        box-shadow: inset 0px 1px 0px #F5F5F5;\n    "])), (function(n) {
                return n.theme.colors.surface
            }
            )) : (0,
            rn.iv)(hi || (hi = Pi(["flex: 1;"], ["flex: 1;"])))
        }
        ), (function(n) {
            return n.seperator ? (0,
            rn.iv)(gi || (gi = Pi(["border-right: 1px solid rgba(255, 255, 255, 0.1)"], ["border-right: 1px solid rgba(255, 255, 255, 0.1)"]))) : ""
        }
        )), zi = rn.ZP.div(xi || (xi = Pi(["\n    display: flex;\n    align-items: center;\n    p {\n        margin-right: 20px;\n        margin-left: 10px;\n        flex: 2;\n    }\n"], ["\n    display: flex;\n    align-items: center;\n    p {\n        margin-right: 20px;\n        margin-left: 10px;\n        flex: 2;\n    }\n"]))), Mi = rn.ZP.div(vi || (vi = Pi(["\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    gap: 16px;\n    button {\n        flex: 1;\n        max-width: 50%;\n        p {\n            padding: 1.5px;\n            font-weight: 500;\n        }\n    }\n"], ["\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    gap: 16px;\n    button {\n        flex: 1;\n        max-width: 50%;\n        p {\n            padding: 1.5px;\n            font-weight: 500;\n        }\n    }\n"]))), Ni = rn.ZP.div(bi || (bi = Pi(["\n    margin-top: 16px;\n\n    div {\n        label {\n            color: ", ";\n            i {\n                color: ", ";\n            }\n        }\n    }\n"], ["\n    margin-top: 16px;\n\n    div {\n        label {\n            color: ", ";\n            i {\n                color: ", ";\n            }\n        }\n    }\n"])), (function(n) {
            return n.theme.colors.base700
        }
        ), (function(n) {
            return n.theme.colors.ascent
        }
        )), Bi = rn.ZP.div(yi || (yi = Pi(["\n    margin-top: 16px;\n"], ["\n    margin-top: 16px;\n"]))), Ri = rn.ZP.div(wi || (wi = Pi(["\n    margin-bottom: 24px;\n    &:last-child {\n        margin-bottom: 0;\n    }\n"], ["\n    margin-bottom: 24px;\n    &:last-child {\n        margin-bottom: 0;\n    }\n"]))), _i = (t(534),
        [{
            label: "gameplay.label",
            options: ["gameplay.gameUpdate", "gameplay.gameFroze", "gameplay.gameStuck", "gameplay.gameLagging", "Other"]
        }, {
            label: "gamecontrols.label",
            options: ["gamecontrols.keyControls", "gamecontrols.mouseIssues", "gamecontrols.gamepadIssues", "Other"]
        }, {
            label: "accountLogin.label",
            options: ["accountLogin.incorrectPassword", "accountLogin.LoginIssues", "accountLogin.unableToSave", "Other"]
        }, {
            label: "appOrGameRequest.label",
            options: ["appOrGameRequest.appRequest", "appOrGameRequest.gameRequest"]
        }]), Ui = ["createDeviceProfile", "collectingStats", "collectingOtherInformation", "sendingProblemReport"], Hi = ["compilingInformation", "processingProblemReport", "sendingProblemReport"], Fi = [{
            showProblems: !0,
            buttons: [{
                type: "close",
                label: "Close",
                variant: "secondary"
            }, {
                type: "next",
                label: "Next"
            }],
            nextLayer: 1
        }, {
            showEmail: !0,
            showDescription: !0,
            showUpload: !0,
            showDiagnosisCheckbox: !0,
            buttons: [{
                type: "back",
                label: "Back",
                variant: "secondary"
            }, {
                type: "submit",
                label: "Submit"
            }],
            prevLayer: 0,
            nextLayer: 4
        }, {
            showEmail: !0,
            showUpload: !0,
            showDiagnosisCheckbox: !0,
            buttons: [{
                type: "back",
                label: "Back",
                variant: "secondary"
            }, {
                type: "next",
                label: "Next"
            }],
            prevLayer: 0,
            nextLayer: 3
        }, {
            showDescription: !0,
            showDiagnosisCheckbox: !0,
            buttons: [{
                type: "back",
                label: "Back",
                variant: "secondary"
            }, {
                type: "submit",
                label: "Submit"
            }],
            prevLayer: 2,
            nextLayer: 4
        }, {
            title: "diagnosingProblem",
            showDiagnosis: !0
        }, {
            title: "Thank you",
            showSuccess: !0,
            buttons: [{
                type: "close",
                label: "Okay"
            }]
        }, {
            title: "Submission Failed",
            showFailed: !0,
            buttons: [{
                type: "tryAgain",
                label: "Try Again"
            }],
            nextLayer: 0
        }, {
            showEmail: !0,
            showDescription: !0,
            showUpload: !0,
            showDiagnosisCheckbox: !0,
            buttons: [{
                type: "submit",
                label: "Submit"
            }],
            nextLayer: 4
        }, {
            showEmail: !0,
            showUpload: !0,
            showDiagnosisCheckbox: !0,
            buttons: [{
                type: "next",
                label: "Next"
            }],
            prevLayer: 0,
            nextLayer: 3
        }], Xi = t(4155);
        function Gi(n, e) {
            var t = Object.keys(n);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(n);
                e && (i = i.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable
                }
                ))),
                t.push.apply(t, i)
            }
            return t
        }
        var Vi, Ki, Yi, Wi, qi, Qi, Ji, $i, no, eo, to, io, oo = function() {
            return (oo = Object.assign || function(n) {
                for (var e, t = 1, i = arguments.length; t < i; t++)
                    for (var o in e = arguments[t])
                        Object.prototype.hasOwnProperty.call(e, o) && (n[o] = e[o]);
                return n
            }
            ).apply(this, arguments)
        }, ro = function(n, e, t, i) {
            return new (t || (t = Promise))((function(o, r) {
                function a(n) {
                    try {
                        d(i.next(n))
                    } catch (e) {
                        r(e)
                    }
                }
                function l(n) {
                    try {
                        d(i.throw(n))
                    } catch (e) {
                        r(e)
                    }
                }
                function d(n) {
                    var e;
                    n.done ? o(n.value) : (e = n.value,
                    e instanceof t ? e : new t((function(n) {
                        n(e)
                    }
                    ))).then(a, l)
                }
                d((i = i.apply(n, e || [])).next())
            }
            ))
        }, ao = function(n, e) {
            var t, i, o, r, a = {
                label: 0,
                sent: function() {
                    if (1 & o[0])
                        throw o[1];
                    return o[1]
                },
                trys: [],
                ops: []
            };
            return r = {
                next: l(0),
                throw: l(1),
                return: l(2)
            },
            "function" === typeof Symbol && (r[Symbol.iterator] = function() {
                return this
            }
            ),
            r;
            function l(r) {
                return function(l) {
                    return function(r) {
                        if (t)
                            throw new TypeError("Generator is already executing.");
                        for (; a; )
                            try {
                                if (t = 1,
                                i && (o = 2 & r[0] ? i.return : r[0] ? i.throw || ((o = i.return) && o.call(i),
                                0) : i.next) && !(o = o.call(i, r[1])).done)
                                    return o;
                                switch (i = 0,
                                o && (r = [2 & r[0], o.value]),
                                r[0]) {
                                case 0:
                                case 1:
                                    o = r;
                                    break;
                                case 4:
                                    return a.label++,
                                    {
                                        value: r[1],
                                        done: !1
                                    };
                                case 5:
                                    a.label++,
                                    i = r[1],
                                    r = [0];
                                    continue;
                                case 7:
                                    r = a.ops.pop(),
                                    a.trys.pop();
                                    continue;
                                default:
                                    if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === r[0] || 2 === r[0])) {
                                        a = 0;
                                        continue
                                    }
                                    if (3 === r[0] && (!o || r[1] > o[0] && r[1] < o[3])) {
                                        a.label = r[1];
                                        break
                                    }
                                    if (6 === r[0] && a.label < o[1]) {
                                        a.label = o[1],
                                        o = r;
                                        break
                                    }
                                    if (o && a.label < o[2]) {
                                        a.label = o[2],
                                        a.ops.push(r);
                                        break
                                    }
                                    o[2] && a.ops.pop(),
                                    a.trys.pop();
                                    continue
                                }
                                r = e.call(n, a)
                            } catch (l) {
                                r = [6, l],
                                i = 0
                            } finally {
                                t = o = 0
                            }
                        if (5 & r[0])
                            throw r[1];
                        return {
                            value: r[0] ? r[1] : void 0,
                            done: !0
                        }
                    }([r, l])
                }
            }
        }, lo = (0,
        it.default)().publicRuntimeConfig, co = Xi.env.NEXT_PUBLIC_FE_VERSION || lo.NEXT_PUBLIC_FE_VERSION || "", so = function() {
            var n, e, t, i = (0,
            gn.$)().t, o = (0,
            J.v9)((function(n) {
                return n.play.isAndroidConnected
            }
            )), r = (0,
            J.v9)((function(n) {
                return n.auth.isLoggedIn
            }
            )), a = (0,
            J.v9)((function(n) {
                return n.play.peerConnection
            }
            )), l = (0,
            J.v9)((function(n) {
                return n.preferences.volume
            }
            )), d = (0,
            J.v9)((function(n) {
                return n.play.orientation
            }
            )), c = (0,
            J.v9)((function(n) {
                return n.preferences.imapOverlay
            }
            )), s = (0,
            J.v9)((function(n) {
                return n.play.isHtmlGame
            }
            )), u = (0,
            J.I0)(), p = (0,
            q.tq)() && d === nn.cj.landscape, f = (0,
            V.useState)(""), h = f[0], g = f[1], m = (0,
            V.useState)(s ? (0,
            q.tq)() && !(0,
            q.Em)() && p ? 8 : 7 : 0), x = m[0], v = m[1], b = (0,
            V.useState)(!0), y = b[0], w = b[1], Z = (0,
            V.useState)(""), k = Z[0], A = Z[1], P = (0,
            V.useState)(!1), S = P[0], E = P[1], C = (0,
            V.useState)(!1), T = C[0], I = C[1], O = (0,
            V.useState)(""), j = O[0], D = O[1], L = (0,
            V.useState)(!0), z = L[0], M = L[1], N = (0,
            V.useState)(!1), B = N[0], R = N[1], _ = (0,
            V.useState)(0), U = _[0], H = _[1], F = (0,
            V.useState)(""), X = F[0], G = F[1], K = (0,
            V.useState)(null), Y = K[0], Q = K[1], tn = (0,
            V.useState)(!1), rn = tn[0], an = tn[1], ln = (0,
            V.useState)(nn.Ps.None), dn = ln[0], sn = ln[1], un = (0,
            V.useState)(0), pn = un[0], fn = un[1], hn = (0,
            V.useState)(""), vn = hn[0], bn = hn[1], yn = (0,
            V.useState)(!!(null === (n = null === navigator || void 0 === navigator ? void 0 : navigator.mediaDevices) || void 0 === n ? void 0 : n.getDisplayMedia))[0], wn = (0,
            V.useRef)(""), Zn = (0,
            V.useRef)(""), kn = (0,
            V.useRef)(0);
            (0,
            V.useEffect)((function() {
                (0,
                q.tq)() && !(0,
                q.Em)() && p && (Fi[0].nextLayer = 2);
                var n = r ? (0,
                on.et)() : null;
                n && A(n.email)
            }
            ), []);
            var An = function() {
                u({
                    type: et.Z.CLOSE_SUPPORT
                })
            };
            (0,
            V.useEffect)((function() {
                w(!((0 !== x || h) && (1 !== x || k && !S && j && !T) && (2 !== x || k && !S) && (3 !== x || j && !T) && (7 !== x || k && !S && j && !T) && (8 !== x || k && !S)))
            }
            ), [h, S, j, x, T]);
            var Pn = function(n, e) {
                switch (n) {
                case "email":
                    /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(e) ? E(!1) : E(!0),
                    A(e);
                    break;
                case "description":
                    0 === e.trim().length || e.length < 12 ? I(!0) : I(!1),
                    D(e)
                }
            }
              , Sn = (0,
            V.useCallback)((function() {
                return ro(void 0, void 0, void 0, (function() {
                    var n, e, t, i, o, r, a, l, c;
                    return ao(this, (function(s) {
                        switch (s.label) {
                        case 0:
                            if (n = en.Z.getState(),
                            e = n.play,
                            t = e.videoRef,
                            i = e.videoContainerRef,
                            R(!1),
                            G(""),
                            sn(nn.Ps.None),
                            Q(null),
                            (o = document.getElementById("overlay")) && (o.style.display = "none"),
                            !(t && t.current && (null === (c = null === i || void 0 === i ? void 0 : i.current) || void 0 === c ? void 0 : c.parentElement)))
                                return [3, 9];
                            s.label = 1;
                        case 1:
                            return s.trys.push([1, 8, , 9]),
                            [4, ti(t.current, d, wn)];
                        case 2:
                            return r = s.sent(),
                            Zn.current ? [4, ni(r, Zn.current, "Uploaded File Image")] : [3, 4];
                        case 3:
                            r = s.sent(),
                            s.label = 4;
                        case 4:
                            return s.trys.push([4, 6, , 7]),
                            o && (o.style.display = "flex"),
                            an(!0),
                            [4, Qt(r)];
                        case 5:
                            return a = s.sent(),
                            an(!1),
                            sn(nn.Ps.Jpeg),
                            G(r),
                            Q(a),
                            [3, 7];
                        case 6:
                            return s.sent(),
                            o && (o.style.display = "flex"),
                            an(!1),
                            G(""),
                            (0,
                            Le.ZP)(new Error("cannot generate screenshot")),
                            Q(null),
                            [3, 7];
                        case 7:
                            return [3, 9];
                        case 8:
                            return l = s.sent(),
                            o && (o.style.display = "flex"),
                            (0,
                            Le.ZP)(l),
                            [3, 9];
                        case 9:
                            return [2]
                        }
                    }
                    ))
                }
                ))
            }
            ), [x])
              , En = function(n, e) {
                if ("next" === n && void 0 !== e.nextLayer)
                    v(e.nextLayer);
                else if ("back" === n && void 0 !== e.prevLayer)
                    v(e.prevLayer),
                    0 === e.prevLayer && fn(kn.current);
                else if ("submit" === n) {
                    if (0 === j.trim().length || j.length < 12)
                        return;
                    void 0 !== e.nextLayer && v(e.nextLayer),
                    ro(void 0, void 0, void 0, (function() {
                        var n, e, t, r, u, p;
                        return ao(this, (function(f) {
                            switch (f.label) {
                            case 0:
                                H(1),
                                f.label = 1;
                            case 1:
                                return f.trys.push([1, 4, , 5]),
                                n = {},
                                z ? (n = {
                                    client: {
                                        userAgent: navigator.userAgent,
                                        audio: {
                                            volume: l
                                        }
                                    },
                                    appType: W.ZP.appInfo.appType,
                                    lang: navigator.language,
                                    concurrency: navigator.hardwareConcurrency || "none",
                                    buildVersion: co,
                                    clientInfo: {
                                        os: (0,
                                        q.Ij)(),
                                        browserVersion: (0,
                                        q.Tb)().version,
                                        description: (0,
                                        q.Tb)().description,
                                        browser: q.Xh,
                                        isTouchDevice: navigator.maxTouchPoints > 0,
                                        isMobile: (0,
                                        q.tq)()
                                    }
                                },
                                s ? [3, 3] : (n = oo(oo({}, n), {
                                    isAndroidConnected: o,
                                    imapState: {
                                        isGamepadConnected: !!Vt.gamepad,
                                        isWasmSupported: (0,
                                        Yt.qU)(),
                                        overlayActive: c,
                                        orientation: d
                                    },
                                    androidState: tt.Z
                                }),
                                o && a instanceof RTCPeerConnection ? (e = n,
                                [4, Ai(a)]) : [3, 3])) : [3, 3];
                            case 2:
                                e.rtcDump = f.sent(),
                                f.label = 3;
                            case 3:
                                return t = {
                                    appId: null === (u = null === W.ZP || void 0 === W.ZP ? void 0 : W.ZP.appInfo) || void 0 === u ? void 0 : u.appId,
                                    issueTitle: s ? "H5 feedback" : i(h),
                                    issueDescription: j,
                                    email: k,
                                    packageName: null === (p = null === W.ZP || void 0 === W.ZP ? void 0 : W.ZP.appInfo) || void 0 === p ? void 0 : p.packageName,
                                    diagnosticReportData: n,
                                    uploadImageMimeType: dn || "none",
                                    playUrl: window.location.href,
                                    uaSessionId: sessionStorage.getItem($.K3) || "",
                                    uaId: localStorage.getItem($.nP) || "",
                                    deviceType: (0,
                                    mn.l7)()
                                },
                                o && (0,
                                Xn.f)($.vK.reportproblem),
                                setTimeout((function() {
                                    ro(void 0, void 0, void 0, (function() {
                                        var n, e;
                                        return ao(this, (function(i) {
                                            switch (i.label) {
                                            case 0:
                                                return H(2),
                                                [4, De.Z.createTicket({}, t)];
                                            case 1:
                                                if ((n = i.sent()).status === nn.YR.Failure)
                                                    throw new Error("create support ticket failed ".concat(JSON.stringify(n)));
                                                return dn !== nn.Ps.None && (n.uploadImageUrl ? (e = {
                                                    method: "PUT",
                                                    headers: {
                                                        "Content-Type": "application/octet-stream"
                                                    },
                                                    body: Y
                                                },
                                                fetch(n.uploadImageUrl, e).then().catch((function(n) {
                                                    H(0),
                                                    v(6),
                                                    (0,
                                                    Le.ZP)(n)
                                                }
                                                ))) : (0,
                                                Le.ZP)(new Error("image mime type error ".concat(Y, " ").concat(dn)))),
                                                H(3),
                                                setTimeout((function() {
                                                    v(5)
                                                }
                                                ), 1e3),
                                                [2]
                                            }
                                        }
                                        ))
                                    }
                                    ))
                                }
                                ), o ? 2e3 : 500),
                                [3, 5];
                            case 4:
                                return r = f.sent(),
                                (0,
                                Le.ZP)(r),
                                H(0),
                                v(6),
                                [3, 5];
                            case 5:
                                return [2]
                            }
                        }
                        ))
                    }
                    ))
                } else
                    "tryAgain" === n ? (v(0),
                    g(""),
                    G(""),
                    Q(null),
                    D(""),
                    r || A(""),
                    E(!1),
                    I(!1),
                    H(0),
                    sn(nn.Ps.None),
                    M(!0),
                    v(0)) : An()
            };
            return (0,
            cn.tZ)(ve.Z, {
                className: "".concat(d === nn.cj.landscape && (0,
                q.tq)() ? "addRotation " : "", "\n      ").concat(0 === x ? "fullSize" : ""),
                modalBackgroundColor: ot.qm.gradients.glass,
                overlayStyles: Ei,
                modalStyles: Si,
                style: s ? {
                    transform: "rotate(0deg)"
                } : {},
                children: (0,
                cn.BX)(Ci, {
                    children: [(0,
                    cn.tZ)(nt, {
                        icon: Fi[x].showFailed ? (0,
                        cn.tZ)(Ti, {
                            children: "!"
                        }) : "",
                        title: i(Fi[x].title || "helpAndSupport"),
                        onClose: Fi[x].showDiagnosis ? null : An
                    }), Fi[x].showProblems && (0,
                    cn.tZ)(Bi, {
                        children: _i.map((function(n, e) {
                            var t = n.label
                              , i = n.options;
                            return (0,
                            cn.tZ)(Ri, {
                                onClick: function() {
                                    pn !== e && fn(e)
                                },
                                children: (0,
                                cn.tZ)(Tt, {
                                    label: t,
                                    options: i,
                                    selectedValue: vn === t ? h : "",
                                    showOptions: e === pn,
                                    onSelectOption: function(n) {
                                        g(n),
                                        bn(t),
                                        kn.current = e
                                    }
                                })
                            }, t)
                        }
                        ))
                    }), Fi[x].showEmail && (0,
                    cn.tZ)(Ye, {
                        disabled: r,
                        value: k,
                        type: "text",
                        id: "email-input",
                        required: !0,
                        error: S,
                        title: i("Email"),
                        onUpdate: function(n) {
                            return Pn("email", n)
                        },
                        placeholder: "Enter your email address",
                        pattern: "[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$",
                        onFocus: function() {
                            u({
                                type: xn.Z.UPDATE_TEXTFIELD_FOCUS,
                                payload: {
                                    uiTextfieldInFocus: !0
                                }
                            })
                        },
                        onBlur: function() {
                            u({
                                type: xn.Z.UPDATE_TEXTFIELD_FOCUS,
                                payload: {
                                    uiTextfieldInFocus: !1
                                }
                            })
                        }
                    }), Fi[x].showDescription && (0,
                    cn.BX)(cn.HY, {
                        children: [(0,
                        cn.tZ)(We, {
                            limit: 200,
                            error: T,
                            value: j,
                            id: "description-input",
                            initialValue: j,
                            title: i("Problem Description"),
                            placeholder: i("Describe the problem you are experiencing ..."),
                            onUpdate: function(n) {
                                return Pn("description", n)
                            },
                            required: !0,
                            style: T ? {
                                marginBottom: "3px"
                            } : {},
                            onFocus: function() {
                                u({
                                    type: xn.Z.UPDATE_TEXTFIELD_FOCUS,
                                    payload: {
                                        uiTextfieldInFocus: !0
                                    }
                                })
                            },
                            onBlur: function() {
                                u({
                                    type: xn.Z.UPDATE_TEXTFIELD_FOCUS,
                                    payload: {
                                        uiTextfieldInFocus: !1
                                    }
                                })
                            }
                        }), T && (0,
                        cn.tZ)(xe.kk, {
                            className: "error",
                            red: !0,
                            med: !0,
                            bold: !0,
                            children: i("min12Characters")
                        })]
                    }), Fi[x].showUpload && (0,
                    cn.BX)(Ni, {
                        children: [(0,
                        cn.tZ)(Re, {
                            children: i("Upload picture or screenshot")
                        }), (0,
                        cn.BX)(ji, {
                            preview: !!X,
                            children: [!(!X && !rn) && (0,
                            cn.BX)(Di, {
                                tabIndex: 0,
                                loading: !!rn,
                                background: X,
                                onClick: function() {
                                    return G("")
                                },
                                children: [X && (0,
                                cn.tZ)(Qe.J, {
                                    name: "cross-thin",
                                    size: 16
                                }), rn && (0,
                                cn.tZ)(zt, {
                                    trackColor: ot.qm.colors.white,
                                    movingColor: ot.qm.colors.white40
                                })]
                            }), B && (0,
                            cn.BX)(zi, {
                                children: [(0,
                                cn.tZ)(Qe.J, {
                                    name: "warning",
                                    size: 16
                                }), (0,
                                cn.tZ)(xe.mH, {
                                    red: !0,
                                    children: i("Uploaded file is not a valid image. Please try again.")
                                })]
                            }), (0,
                            cn.BX)(Li, {
                                tabIndex: 0,
                                seperator: !X && o && window.Modernizr.canvas,
                                compact: !!(X || rn || B),
                                htmlFor: "uploadFile",
                                children: [(0,
                                cn.tZ)(Qe.J, {
                                    name: "upload",
                                    size: 16
                                }), !(X || rn || B) && (0,
                                cn.tZ)("p", {
                                    children: i("Upload from device")
                                }), (0,
                                cn.tZ)("input", {
                                    type: "file",
                                    id: "uploadFile",
                                    onChange: function(n) {
                                        return ro(void 0, void 0, void 0, (function() {
                                            var e, t, i, o, r;
                                            return ao(this, (function(a) {
                                                return e = n.target,
                                                R(!1),
                                                G(""),
                                                sn(nn.Ps.None),
                                                Q(null),
                                                t = e.files && e.files.length > 0 ? e.files[0] : null,
                                                n.target.value = "",
                                                t ? (i = ["jpg", "jpeg", "png", "svg", "tiff"],
                                                o = t.type.split("/")[1],
                                                i.includes(o) ? (r = new FileReader,
                                                sn(t.type),
                                                an(!0),
                                                r.onload = function(n) {
                                                    return ro(void 0, void 0, void 0, (function() {
                                                        var e, t, i, o, r, a, l, c;
                                                        return ao(this, (function(s) {
                                                            switch (s.label) {
                                                            case 0:
                                                                if (e = en.Z.getState(),
                                                                t = e.play.videoRef,
                                                                (null === (r = null === n || void 0 === n ? void 0 : n.target) || void 0 === r ? void 0 : r.result) && (Zn.current = n.target.result),
                                                                !(null === t || void 0 === t ? void 0 : t.current) || !(null === (a = null === n || void 0 === n ? void 0 : n.target) || void 0 === a ? void 0 : a.result))
                                                                    return [3, 8];
                                                                s.label = 1;
                                                            case 1:
                                                                return s.trys.push([1, 6, , 7]),
                                                                [4, $t(n.target.result, t.current, d)];
                                                            case 2:
                                                                return i = s.sent(),
                                                                wn.current ? [4, ni(i, wn.current, "Screen Capture Image")] : [3, 4];
                                                            case 3:
                                                                i = s.sent(),
                                                                s.label = 4;
                                                            case 4:
                                                                return [4, Qt(i)];
                                                            case 5:
                                                                return o = s.sent(),
                                                                sn(nn.Ps.Jpeg),
                                                                G(i),
                                                                Q(o),
                                                                [3, 7];
                                                            case 6:
                                                                return s.sent(),
                                                                G(null === (l = null === n || void 0 === n ? void 0 : n.target) || void 0 === l ? void 0 : l.result),
                                                                [3, 7];
                                                            case 7:
                                                                return [3, 9];
                                                            case 8:
                                                                G(null === (c = null === n || void 0 === n ? void 0 : n.target) || void 0 === c ? void 0 : c.result),
                                                                s.label = 9;
                                                            case 9:
                                                                return an(!1),
                                                                [2]
                                                            }
                                                        }
                                                        ))
                                                    }
                                                    ))
                                                }
                                                ,
                                                r.onerror = function() {
                                                    an(!1),
                                                    G(""),
                                                    sn(nn.Ps.None)
                                                }
                                                ,
                                                r.readAsDataURL(t),
                                                Q(t)) : R(!0),
                                                [2]) : [2]
                                            }
                                            ))
                                        }
                                        ))
                                    },
                                    accept: "image/png, image/svg+xml, image/tif, image/gif, image/jpeg, image/jpg, .tif"
                                })]
                            }), o && window.Modernizr.canvas && yn && (0,
                            cn.BX)(Li, {
                                tabIndex: 0,
                                compact: !!(X || rn || B),
                                onClick: Sn,
                                children: [(0,
                                cn.tZ)(Qe.J, {
                                    name: "screenshot",
                                    size: 16
                                }), !(X || rn || B) && (0,
                                cn.tZ)("p", {
                                    children: i("Capture screen")
                                })]
                            })]
                        })]
                    }), Fi[x].showDiagnosisCheckbox && (0,
                    cn.tZ)(qe, {
                        onChange: function(n) {
                            return M(n.target.checked)
                        },
                        checked: z,
                        children: (0,
                        cn.tZ)(xe.gd, {
                            children: i("Run a diagnostic report")
                        })
                    }), Fi[x].showDiagnosis && (0,
                    cn.tZ)(Ii, {
                        children: (z ? Ui : Hi).map((function(n, e) {
                            return (0,
                            cn.BX)(Oi, {
                                onClick: function() {
                                    return g(n)
                                },
                                children: [e < U ? (0,
                                cn.tZ)(Qe.J, {
                                    name: "active",
                                    size: 16
                                }) : (0,
                                cn.tZ)(zt, {}), (0,
                                cn.tZ)(xe.lU, {
                                    children: i(n)
                                })]
                            }, n)
                        }
                        ))
                    }), Fi[x].showSuccess && (0,
                    cn.tZ)("div", {
                        style: {
                            margin: "16px 8px"
                        },
                        children: (0,
                        cn.tZ)(xe.T6, {
                            children: i("We have received your response and it's being reviewed by our Support Team.")
                        })
                    }), Fi[x].showFailed && (0,
                    cn.tZ)("div", {
                        style: {
                            margin: "16px 8px"
                        },
                        children: (0,
                        cn.tZ)(xe.T6, {
                            children: i("Failed to submit the feedback, please try again.")
                        })
                    }), (null === (e = Fi[x].buttons) || void 0 === e ? void 0 : e.length) && (0,
                    cn.tZ)($e, {
                        center: 1 !== x,
                        children: (0,
                        cn.tZ)(Mi, {
                            children: null === (t = Fi[x].buttons) || void 0 === t ? void 0 : t.map((function(n) {
                                var e = n.type
                                  , t = n.label
                                  , o = n.variant
                                  , r = void 0 === o ? "primary" : o;
                                return (0,
                                cn.tZ)(de.z, function(n) {
                                    for (var e = 1; e < arguments.length; e++) {
                                        var t = null != arguments[e] ? arguments[e] : {};
                                        e % 2 ? Gi(Object(t), !0).forEach((function(e) {
                                            (0,
                                            je.Z)(n, e, t[e])
                                        }
                                        )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(t)) : Gi(Object(t)).forEach((function(e) {
                                            Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(t, e))
                                        }
                                        ))
                                    }
                                    return n
                                }({
                                    text: i(t),
                                    onClick: function() {
                                        return En(e, Fi[x])
                                    },
                                    variant: r,
                                    id: "".concat(t.toLowerCase(), "-btn")
                                }, ("submit" === e || "next" === e) && {
                                    disabled: y
                                }), t)
                            }
                            ))
                        })
                    })]
                })
            })
        }, uo = function(n) {
            var e = (0,
            V.useRef)();
            return (0,
            V.useEffect)((function() {
                e.current = n
            }
            )),
            e.current
        }, po = function() {
            var n = (0,
            V.useState)(navigator.onLine)
              , e = n[0]
              , t = n[1]
              , i = function() {
                t(navigator.onLine)
            };
            return (0,
            V.useEffect)((function() {
                return window.addEventListener("online", i),
                window.addEventListener("offline", i),
                function() {
                    window.removeEventListener("online", i),
                    window.removeEventListener("offline", i)
                }
            }
            ), []),
            e
        }, fo = function(n, e) {
            return Object.defineProperty ? Object.defineProperty(n, "raw", {
                value: e
            }) : n.raw = e,
            n
        }, ho = rn.ZP.div(Vi || (Vi = fo(["\n  position: absolute;\n  top: 0;\n  pointer-events: none;\n  left: 0;\n  right: 0;\n  text-align: center;\n  z-index: 13;\n"], ["\n  position: absolute;\n  top: 0;\n  pointer-events: none;\n  left: 0;\n  right: 0;\n  text-align: center;\n  z-index: 13;\n"]))), go = rn.ZP.p(Ki || (Ki = fo(["\n  font-size: 14px;\n  background: #f9edbe;\n  border: 1px solid #f0c36d;\n  padding: 4px 12px;\n  border-radius: 4px;\n  margin: 0;\n  display: inline-block;\n  transition: background-color 0.2s ease-out;\n"], ["\n  font-size: 14px;\n  background: #f9edbe;\n  border: 1px solid #f0c36d;\n  padding: 4px 12px;\n  border-radius: 4px;\n  margin: 0;\n  display: inline-block;\n  transition: background-color 0.2s ease-out;\n"]))), mo = function() {
            var n = (0,
            V.useState)(!1)
              , e = n[0]
              , t = n[1]
              , i = po()
              , o = uo(i)
              , r = (0,
            gn.$)().t;
            return (0,
            V.useEffect)((function() {
                "boolean" === typeof i && !o && i && setTimeout((function() {
                    t(!1)
                }
                ), 2e3),
                i || t(!0)
            }
            ), [i]),
            (0,
            cn.tZ)(ho, {
                children: e ? (0,
                cn.tZ)(go, {
                    style: {
                        background: i ? "#31770a" : "#f9edbe",
                        color: i ? "#fff" : "#000",
                        borderColor: i ? "#6db346" : "#f0c36d"
                    },
                    children: r(i ? "connected" : "networkLost")
                }) : null
            })
        }, xo = t(6386), vo = t(2820), bo = function(n, e) {
            return Object.defineProperty ? Object.defineProperty(n, "raw", {
                value: e
            }) : n.raw = e,
            n
        }, yo = (0,
        rn.F4)(Yi || (Yi = bo(["\n    0% {\n        opacity: 0;\n    }\n    33.33% {\n        opacity: 1;\n    }\n    49.66% {\n        opacity: 1;\n    }\n    66.67% {\n        opacity: 1;\n    }\n    83.33% {\n        opacity: 1;\n    }\n    100% {\n        opacity: 1;\n    }\n"], ["\n    0% {\n        opacity: 0;\n    }\n    33.33% {\n        opacity: 1;\n    }\n    49.66% {\n        opacity: 1;\n    }\n    66.67% {\n        opacity: 1;\n    }\n    83.33% {\n        opacity: 1;\n    }\n    100% {\n        opacity: 1;\n    }\n"]))), wo = (0,
        rn.F4)(Wi || (Wi = bo(["\n    0% {\n        transform: rotate(0deg);\n        left: 0px;\n    }\n    33.33% {\n        transform: rotate(0deg);\n        left: 0px;\n    }\n    49.66% {\n        transform: rotate(-30deg);\n        left: -7px;\n    }\n    66.67% {\n        transform: rotate(0deg);\n        left: 0px;\n    }\n    83.33% {\n        transform: rotate(30deg);\n        left: 7px;\n    }\n    100% {\n        transform: rotate(0deg);\n        left: 0px;\n    }\n"], ["\n    0% {\n        transform: rotate(0deg);\n        left: 0px;\n    }\n    33.33% {\n        transform: rotate(0deg);\n        left: 0px;\n    }\n    49.66% {\n        transform: rotate(-30deg);\n        left: -7px;\n    }\n    66.67% {\n        transform: rotate(0deg);\n        left: 0px;\n    }\n    83.33% {\n        transform: rotate(30deg);\n        left: 7px;\n    }\n    100% {\n        transform: rotate(0deg);\n        left: 0px;\n    }\n"]))), Zo = rn.ZP.div(qi || (qi = bo(["\n    display: flex;\n    position: absolute;\n    width: fit-content;\n    height: 40px;\n    transition: all 0.5s ease-in-out;\n    left: 50%;\n    padding: 9.5px 16px 9.5px 22px;\n    box-sizing: border-box;\n    transform: translateX(-50%);\n    background: rgba(0, 0, 0, 0.8);\n    border: 1px solid rgba(255, 255, 255, 0.2);\n    font-style: normal;\n    font-weight: normal;\n    font-size: 14px;\n    line-height: 150%;\n    z-index: 2;\n    &.slideUp {\n        top: -20px;\n        opacity: 0;\n    }\n    &.slideDown {\n        top: 70px;\n        opacity: 1;\n    }\n"], ["\n    display: flex;\n    position: absolute;\n    width: fit-content;\n    height: 40px;\n    transition: all 0.5s ease-in-out;\n    left: 50%;\n    padding: 9.5px 16px 9.5px 22px;\n    box-sizing: border-box;\n    transform: translateX(-50%);\n    background: rgba(0, 0, 0, 0.8);\n    border: 1px solid rgba(255, 255, 255, 0.2);\n    font-style: normal;\n    font-weight: normal;\n    font-size: 14px;\n    line-height: 150%;\n    z-index: 2;\n    &.slideUp {\n        top: -20px;\n        opacity: 0;\n    }\n    &.slideDown {\n        top: 70px;\n        opacity: 1;\n    }\n"]))), ko = rn.ZP.div(Qi || (Qi = bo(["\n    position: relative;\n    width: 18px;\n    height: 20px;\n    animation-name: ", ";\n    animation-duration: 3s;\n    animation-iteration-count: infinite;\n    animation-timing-function: linear;\n    animation-delay: 2s;\n    color: white;\n    &:after {\n        position: absolute;\n        width: 4px;\n        height: 6px;\n        border-radius: 0px 100% 0px 0px;\n        background: ", ';\n        content: "";\n        top: 2px;\n        right: 4px;\n        animation-name: ', ";\n        animation-duration: 3s;\n        animation-iteration-count: infinite;\n        animation-timing-function: linear;\n        animation-delay: 2s;\n        opacity: 0;\n    }\n"], ["\n    position: relative;\n    width: 18px;\n    height: 20px;\n    animation-name: ", ";\n    animation-duration: 3s;\n    animation-iteration-count: infinite;\n    animation-timing-function: linear;\n    animation-delay: 2s;\n    color: white;\n    &:after {\n        position: absolute;\n        width: 4px;\n        height: 6px;\n        border-radius: 0px 100% 0px 0px;\n        background: ", ';\n        content: "";\n        top: 2px;\n        right: 4px;\n        animation-name: ', ";\n        animation-duration: 3s;\n        animation-iteration-count: infinite;\n        animation-timing-function: linear;\n        animation-delay: 2s;\n        opacity: 0;\n    }\n"])), wo, (function(n) {
            return n.theme.colors.white
        }
        ), yo), Ao = rn.ZP.p(Ji || (Ji = bo(["\n    margin-left: 22px;\n    color: ", ";\n"], ["\n    margin-left: 22px;\n    color: ", ";\n"])), (function(n) {
            return n.theme.colors.white
        }
        )), Po = function(n) {
            var e = n.videoElm
              , t = (0,
            J.I0)()
              , i = (0,
            V.useState)(!1)
              , o = i[0]
              , r = i[1]
              , a = (0,
            V.useState)(!1)
              , l = a[0]
              , d = a[1]
              , c = (0,
            gn.$)().t
              , s = function() {
                r(!1),
                setTimeout((function() {
                    t({
                        type: xn.Z.ROBLOX_TOAST,
                        payload: {
                            robloxToast: !1
                        }
                    })
                }
                ), 500)
            }
              , u = function() {
                var n, t, i = !1, o = function(e) {
                    3 !== e.which && 2 !== e.button || (i = !0,
                    n = e.pageX,
                    t = e.pageY)
                }, r = function(n) {
                    n.preventDefault()
                };
                e.current && (e.current.addEventListener("contextmenu", r),
                e.current.addEventListener("mousedown", o),
                e.current.addEventListener("mouseup", (function a(l) {
                    var d = Math.abs(l.pageX - n)
                      , c = Math.abs(l.pageY - t);
                    i && (i = !1,
                    (d > 6 || c > 6) && (s(),
                    e.current && (e.current.removeEventListener("contextmenu", r),
                    e.current.removeEventListener("mousedown", o),
                    e.current.removeEventListener("mouseup", a))))
                }
                )))
            };
            return (0,
            V.useEffect)((function() {
                u(),
                r(!0),
                setTimeout((function() {
                    d(!0)
                }
                ), 5e3),
                setTimeout((function() {
                    s()
                }
                ), 3e4)
            }
            ), []),
            (0,
            V.useEffect)((function() {
                if (o) {
                    var n = +(localStorage.getItem("robloxToastViewCount") || "0") + 1;
                    localStorage.setItem("robloxToastViewCount", n.toString()),
                    en.Z.dispatch({
                        type: vo.Z.ROBLOX_TOAST_UPDATE,
                        payload: {
                            lastRobloxToastDate: (new Date).toDateString()
                        }
                    })
                }
            }
            ), [o]),
            (0,
            cn.BX)(Zo, {
                className: "".concat(o ? "slideDown" : "slideUp"),
                children: [(0,
                cn.tZ)(ko, {
                    className: "robloxImgContainer",
                    children: (0,
                    cn.tZ)(Qe.Z, {
                        name: "mouse",
                        size: 20
                    })
                }), (0,
                cn.tZ)(Ao, {
                    children: c("robloxToastMsg")
                }), l && (0,
                cn.tZ)("span", {
                    style: {
                        marginLeft: "12px",
                        marginTop: "2px",
                        cursor: "pointer"
                    },
                    children: (0,
                    cn.tZ)("img", {
                        alt: "",
                        src: (0,
                        Tn.j)(xo.Z),
                        onClick: s
                    })
                })]
            })
        }, So = t(942), Eo = function(n, e) {
            return Object.defineProperty ? Object.defineProperty(n, "raw", {
                value: e
            }) : n.raw = e,
            n
        }, Co = rn.ZP.div($i || ($i = Eo(["\n    position: fixed;\n    top: 5px;\n    right: 76px;\n    width: 375px;\n    padding: 20px 16px;\n    z-index: 222;\n    border-radius: 6px;\n    background: #464646;\n    color: ", ";\n\n    > i {\n      cursor: pointer;\n      position: absolute;\n      right: 10px;\n      top: 10px;\n    }\n"], ["\n    position: fixed;\n    top: 5px;\n    right: 76px;\n    width: 375px;\n    padding: 20px 16px;\n    z-index: 222;\n    border-radius: 6px;\n    background: #464646;\n    color: ", ";\n\n    > i {\n      cursor: pointer;\n      position: absolute;\n      right: 10px;\n      top: 10px;\n    }\n"])), (function(n) {
            return n.theme.colors.white
        }
        )), To = rn.ZP.div(no || (no = Eo(["\n  display: flex;\n  margin: 16px 0 20px;\n  h5 {\n    font-size: 16px;\n    margin: 0;\n  }\n  p {\n    color: ", ";\n    font-size: 14px;\n  }\n"], ["\n  display: flex;\n  margin: 16px 0 20px;\n  h5 {\n    font-size: 16px;\n    margin: 0;\n  }\n  p {\n    color: ", ";\n    font-size: 14px;\n  }\n"])), (function(n) {
            return n.theme.colors.white40
        }
        )), Io = rn.ZP.div(eo || (eo = Eo(["\n  display: flex;\n  justify-content: flex-end;\n"], ["\n  display: flex;\n  justify-content: flex-end;\n"]))), Oo = rn.ZP.div(to || (to = Eo(["\n  width: 48px;\n  height: 48px;\n  border-radius: 4px;\n  overflow: hidden;\n"], ["\n  width: 48px;\n  height: 48px;\n  border-radius: 4px;\n  overflow: hidden;\n"]))), jo = rn.ZP.button(io || (io = Eo(["\n  -webkit-appearance: button;\n  padding: 10px 16px;\n  border-radius: 4px;\n  color: ", ";\n  min-width: 87px;\n  border: 0.5px solid #dbdce0;\n  background: transparent;\n  cursor: pointer;\n\n  &.ok {\n    background: #3773e0;\n    margin-left: 10px;\n    border: none;\n  }\n"], ["\n  -webkit-appearance: button;\n  padding: 10px 16px;\n  border-radius: 4px;\n  color: ", ";\n  min-width: 87px;\n  border: 0.5px solid #dbdce0;\n  background: transparent;\n  cursor: pointer;\n\n  &.ok {\n    background: #3773e0;\n    margin-left: 10px;\n    border: none;\n  }\n"])), (function(n) {
            return n.theme.colors.white
        }
        )), Do = function() {
            var n = (0,
            gn.$)().t
              , e = (0,
            J.I0)()
              , t = (0,
            J.v9)((function(n) {
                return n.play.showPwaPrompt
            }
            ));
            (0,
            V.useEffect)((function() {
                t && (0,
                mn.L9)("PwaNudgeDisplayed")
            }
            ), [t]);
            var i = function() {
                e({
                    type: xn.Z.PWA_PROMPT_STATUS,
                    payload: {
                        showPwaPrompt: !1
                    }
                })
            }
              , o = function() {
                (0,
                mn.L9)("PwaNudgeDismissed"),
                i()
            };
            return (0,
            cn.tZ)(cn.HY, {
                children: t && (0,
                cn.BX)(Co, {
                    children: [(0,
                    cn.tZ)(xe.T4, {
                        children: n("pwaTitle")
                    }), (0,
                    cn.tZ)(Qe.Z, {
                        size: 16,
                        style: {
                            cursor: "pointer"
                        },
                        name: "cross-thin",
                        onClick: o
                    }), (0,
                    cn.BX)(To, {
                        children: [(0,
                        cn.tZ)(Oo, {
                            children: (0,
                            cn.tZ)("img", {
                                alt: W.ZP.appInfo.appName,
                                src: W.ZP.appInfo.media.icon,
                                width: 48,
                                height: 48
                            })
                        }), (0,
                        cn.BX)("div", {
                            style: {
                                marginLeft: "12px"
                            },
                            children: [(0,
                            cn.tZ)(xe.T5, {
                                children: W.ZP.appInfo.appName
                            }), (0,
                            cn.tZ)(xe.kk, {
                                children: "now.gg"
                            })]
                        })]
                    }), (0,
                    cn.BX)(Io, {
                        children: [(0,
                        cn.tZ)(jo, {
                            onClick: o,
                            children: n("cancel")
                        }), (0,
                        cn.tZ)(jo, {
                            className: "ok",
                            onClick: function() {
                                (0,
                                mn.L9)("PwaNudgeAccepted"),
                                i(),
                                (0,
                                So.QB)()
                            },
                            children: n("yes")
                        })]
                    })]
                })
            })
        }, Lo = t(3279), zo = t.n(Lo), Mo = function() {
            var n = (0,
            V.useState)({
                width: 0,
                height: 0
            })
              , e = n[0]
              , t = n[1];
            return (0,
            V.useEffect)((function() {
                var n = zo()((function() {
                    t({
                        width: window.innerWidth,
                        height: window.innerHeight
                    })
                }
                ), 100);
                return window.addEventListener("resize", n),
                n(),
                function() {
                    return window.removeEventListener("resize", n)
                }
            }
            ), []),
            e
        }, No = t(6296), Bo = function(n, e, t, i) {
            return new (t || (t = Promise))((function(o, r) {
                function a(n) {
                    try {
                        d(i.next(n))
                    } catch (e) {
                        r(e)
                    }
                }
                function l(n) {
                    try {
                        d(i.throw(n))
                    } catch (e) {
                        r(e)
                    }
                }
                function d(n) {
                    var e;
                    n.done ? o(n.value) : (e = n.value,
                    e instanceof t ? e : new t((function(n) {
                        n(e)
                    }
                    ))).then(a, l)
                }
                d((i = i.apply(n, e || [])).next())
            }
            ))
        }, Ro = function(n, e) {
            var t, i, o, r, a = {
                label: 0,
                sent: function() {
                    if (1 & o[0])
                        throw o[1];
                    return o[1]
                },
                trys: [],
                ops: []
            };
            return r = {
                next: l(0),
                throw: l(1),
                return: l(2)
            },
            "function" === typeof Symbol && (r[Symbol.iterator] = function() {
                return this
            }
            ),
            r;
            function l(r) {
                return function(l) {
                    return function(r) {
                        if (t)
                            throw new TypeError("Generator is already executing.");
                        for (; a; )
                            try {
                                if (t = 1,
                                i && (o = 2 & r[0] ? i.return : r[0] ? i.throw || ((o = i.return) && o.call(i),
                                0) : i.next) && !(o = o.call(i, r[1])).done)
                                    return o;
                                switch (i = 0,
                                o && (r = [2 & r[0], o.value]),
                                r[0]) {
                                case 0:
                                case 1:
                                    o = r;
                                    break;
                                case 4:
                                    return a.label++,
                                    {
                                        value: r[1],
                                        done: !1
                                    };
                                case 5:
                                    a.label++,
                                    i = r[1],
                                    r = [0];
                                    continue;
                                case 7:
                                    r = a.ops.pop(),
                                    a.trys.pop();
                                    continue;
                                default:
                                    if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === r[0] || 2 === r[0])) {
                                        a = 0;
                                        continue
                                    }
                                    if (3 === r[0] && (!o || r[1] > o[0] && r[1] < o[3])) {
                                        a.label = r[1];
                                        break
                                    }
                                    if (6 === r[0] && a.label < o[1]) {
                                        a.label = o[1],
                                        o = r;
                                        break
                                    }
                                    if (o && a.label < o[2]) {
                                        a.label = o[2],
                                        a.ops.push(r);
                                        break
                                    }
                                    o[2] && a.ops.pop(),
                                    a.trys.pop();
                                    continue
                                }
                                r = e.call(n, a)
                            } catch (l) {
                                r = [6, l],
                                i = 0
                            } finally {
                                t = o = 0
                            }
                        if (5 & r[0])
                            throw r[1];
                        return {
                            value: r[0] ? r[1] : void 0,
                            done: !0
                        }
                    }([r, l])
                }
            }
        };
        function _o(n, e) {
            var t = this;
            return function(i, o) {
                return Bo(t, void 0, void 0, (function() {
                    var t, r, a, l, d = this;
                    return Ro(this, (function(c) {
                        switch (c.label) {
                        case 0:
                            return c.trys.push([0, 2, , 3]),
                            t = o().play.videoRef,
                            (0,
                            W.rN)(),
                            r = function(n) {
                                var e = new RTCPeerConnection($.F7)
                                  , t = new MediaStream
                                  , i = !1;
                                return e.ondatachannel = pe.EZ,
                                e.addEventListener("track", (function(e) {
                                    n && n.current && !i && (n.current.srcObject = t,
                                    n.current.disablePictureInPicture = !0,
                                    (0,
                                    Q.sZ)(),
                                    (0,
                                    Q.Ul)(),
                                    i = !0),
                                    e.track ? t.addTrack(e.track) : (0,
                                    Le.ZP)(new Error("Track not found"))
                                }
                                )),
                                e
                            }(e || t),
                            a = -1,
                            r.onconnectionstatechange = function(e) {
                                (0,
                                W.rN)(r.connectionState),
                                i({
                                    type: xn.Z.UPDATE_PEER_CONNECTION_STATE,
                                    payload: {
                                        peerConnectionState: r.connectionState
                                    }
                                });
                                var t = o();
                                if ("connected" === r.connectionState && clearInterval(a),
                                "disconnected" === r.connectionState) {
                                    var l = o().play.disconnecTimer;
                                    if (l && Date.now() - l > 55)
                                        return void (0,
                                        pe.wc)();
                                    Bo(d, void 0, void 0, (function() {
                                        var n;
                                        return Ro(this, (function(e) {
                                            switch (e.label) {
                                            case 0:
                                                return [4, De.Z.getSessionStatus({
                                                    appId: W.ZP.appInfo.appId,
                                                    uaSessionId: sessionStorage.getItem($.K3) || "",
                                                    uaId: localStorage.getItem($.nP) || ""
                                                }, {})];
                                            case 1:
                                                return n = e.sent(),
                                                t.play.duplicateTab || t.play.sessionMigrated || t.play.sessionComplete || (null === n || void 0 === n ? void 0 : n.status) !== nn.YR.Success || n.sessionStatus !== nn.Z5.Migrated || i({
                                                    type: xn.Z.SESSION_MIGRATED,
                                                    payload: {
                                                        sessionMigrated: !0
                                                    }
                                                }),
                                                [2]
                                            }
                                        }
                                        ))
                                    }
                                    )),
                                    (0,
                                    pe.I$)()
                                }
                                if ("failed" === r.connectionState) {
                                    if (clearInterval(a),
                                    t.play.spotInstanceToast || t.play.spotInstances)
                                        return void i({
                                            type: xn.Z.SPOT_INSTANCES,
                                            payload: {
                                                spotInstances: !0,
                                                spotInstanceToast: !1
                                            }
                                        });
                                    t.play.duplicateTab || t.play.sessionMigrated || t.play.sessionComplete || (t.play.isAndroidConnected ? (i({
                                        type: xn.Z.ROBLOX_TOAST,
                                        payload: {
                                            robloxToast: !1
                                        }
                                    }),
                                    Bo(d, void 0, void 0, (function() {
                                        var e, t = this;
                                        return Ro(this, (function(r) {
                                            switch (r.label) {
                                            case 0:
                                                return r.trys.push([0, 2, , 3]),
                                                [4, De.Z.getSessionStatus({
                                                    appId: W.ZP.appInfo.appId,
                                                    uaSessionId: sessionStorage.getItem($.K3) || "",
                                                    uaId: localStorage.getItem($.nP) || ""
                                                }, {})];
                                            case 1:
                                                if ((null === (e = r.sent()) || void 0 === e ? void 0 : e.status) !== nn.YR.Success || e.sessionStatus !== nn.Z5.Migrated)
                                                    throw new Error("active");
                                                return clearInterval(a),
                                                i({
                                                    type: xn.Z.SESSION_MIGRATED,
                                                    payload: {
                                                        sessionMigrated: !0
                                                    }
                                                }),
                                                [3, 3];
                                            case 2:
                                                return r.sent(),
                                                clearInterval(a),
                                                a = window.setInterval((function() {
                                                    var e = o();
                                                    Bo(t, void 0, void 0, (function() {
                                                        var t;
                                                        return Ro(this, (function(o) {
                                                            switch (o.label) {
                                                            case 0:
                                                                return navigator.onLine && e.play.isAndroidConnected ? [4, De.Z.getSessionStatus({
                                                                    appId: W.ZP.appInfo.appId,
                                                                    uaSessionId: sessionStorage.getItem($.K3) || "",
                                                                    uaId: localStorage.getItem($.nP) || ""
                                                                }, {})] : [3, 2];
                                                            case 1:
                                                                (null === (t = o.sent()) || void 0 === t ? void 0 : t.status) === nn.YR.Success && (clearInterval(a),
                                                                (null === t || void 0 === t ? void 0 : t.sessionStatus) === nn.Z5.Active ? (null === e || void 0 === e ? void 0 : e.play.videoRef) ? i(_o(n, null === e || void 0 === e ? void 0 : e.play.videoRef)) : window.location.reload() : i({
                                                                    type: xn.Z.SET_ERROR,
                                                                    payload: {
                                                                        error: "sessionStatus-".concat(null === t || void 0 === t ? void 0 : t.sessionStatus, "-").concat(JSON.stringify(t)),
                                                                        clientId: "",
                                                                        sessionId: ""
                                                                    }
                                                                })),
                                                                o.label = 2;
                                                            case 2:
                                                                return [2]
                                                            }
                                                        }
                                                        ))
                                                    }
                                                    ))
                                                }
                                                ), 2e3),
                                                [3, 3];
                                            case 3:
                                                return [2]
                                            }
                                        }
                                        ))
                                    }
                                    ))) : t.play.sessionComplete || i({
                                        type: xn.Z.SET_ERROR,
                                        payload: {
                                            error: "disconnected-".concat(t.play.sessionMigrated, "-").concat(t.play.duplicateTab),
                                            clientId: "",
                                            sessionId: ""
                                        }
                                    }))
                                }
                            }
                            ,
                            [4, Fo(r, i, n)];
                        case 1:
                            return c.sent(),
                            [3, 3];
                        case 2:
                            return l = c.sent(),
                            (0,
                            Le.ZP)(l),
                            i({
                                type: xn.Z.SET_ERROR,
                                payload: {
                                    error: l instanceof Error ? l.message : l,
                                    clientId: "",
                                    sessionId: ""
                                }
                            }),
                            [3, 3];
                        case 3:
                            return [2]
                        }
                    }
                    ))
                }
                ))
            }
        }
        var Uo, Ho = !1, Fo = function(n, e, t) {
            return Bo(void 0, void 0, void 0, (function() {
                var i, o, r, a, l, d, c, s, u, p, f;
                return Ro(this, (function(h) {
                    switch (h.label) {
                    case 0:
                        i = !0,
                        h.label = 1;
                    case 1:
                        return h.trys.push([1, 17, , 18]),
                        o = (0,
                        W.We)(),
                        r = o.utmSource,
                        a = o.utmMedium,
                        l = o.utmCampaign,
                        t ? ((0,
                        mn.L9)("SessionRequested"),
                        [4, De.Z.startSession({
                            uaId: localStorage.getItem($.nP) || "",
                            uaSessionId: sessionStorage.getItem($.K3) || "",
                            appId: W.ZP.appInfo.appId,
                            initialOrientation: W.ZP.appInfo.initialOrientation,
                            utmSource: r,
                            utmMedium: a,
                            utmCampaign: l,
                            deviceType: (0,
                            mn.l7)(),
                            playToken: t,
                            deepLinkUrl: sessionStorage.getItem("deep_link") || "",
                            accessCode: sessionStorage.getItem("access_code") || ""
                        }, {})]) : [3, 15];
                    case 2:
                        return (d = h.sent()).status === nn.YR.FailureTryAgain && window.location.reload(),
                        (null === d || void 0 === d ? void 0 : d.status) === nn.YR.FailureUnderMaintenance ? (e({
                            type: xn.Z.SET_ERROR,
                            payload: {
                                error: null === d || void 0 === d ? void 0 : d.status,
                                clientId: "",
                                sessionId: "",
                                isAndroidConnected: !1
                            }
                        }),
                        [2]) : (null === d || void 0 === d ? void 0 : d.status) !== nn.YR.FailureUserStorageBusy ? [3, 4] : [4, new Promise((function(n) {
                            return setTimeout(n, 3e3)
                        }
                        ))];
                    case 3:
                        return h.sent(),
                        e(_o(t)),
                        [2];
                    case 4:
                        return d.status !== nn.YR.FailureInvalidPlayToken || Ho ? [3, 6] : (Ho = !0,
                        [4, (0,
                        on.Ie)().catch((function(n) {}
                        ))]);
                    case 5:
                        if (c = h.sent())
                            return e(_o(c)),
                            [2];
                        h.label = 6;
                    case 6:
                        return (null === d || void 0 === d ? void 0 : d.status) !== nn.YR.Success ? (e({
                            type: xn.Z.SET_ERROR,
                            payload: {
                                error: null === d || void 0 === d ? void 0 : d.status,
                                clientId: "",
                                sessionId: "",
                                isAndroidConnected: !1
                            }
                        }),
                        [2]) : [4, n.setRemoteDescription({
                            type: "offer",
                            sdp: d.offerSdp
                        })];
                    case 7:
                        return h.sent(),
                        e({
                            type: xn.Z.START_CONNECTION,
                            payload: {
                                peerConnection: n,
                                uaSessionId: sessionStorage.getItem($.K3) || "",
                                uaId: localStorage.getItem($.nP) || "",
                                error: null,
                                servingRegion: d.servingRegion || ""
                            }
                        }),
                        [4, n.createAnswer()];
                    case 8:
                        if (!(s = h.sent()).sdp)
                            throw new Error("answer.sdp is undefined - ".concat(JSON.stringify(s)));
                        return [4, n.setLocalDescription(s)];
                    case 9:
                        h.sent(),
                        u = 0,
                        h.label = 10;
                    case 10:
                        return u < d.iceCandidates.length ? [4, n.addIceCandidate(d.iceCandidates[u])] : [3, 13];
                    case 11:
                        h.sent(),
                        h.label = 12;
                    case 12:
                        return u += 1,
                        [3, 10];
                    case 13:
                        return [4, De.Z.setAnswerSdp({}, {
                            uaSessionId: sessionStorage.getItem($.K3) || "",
                            uaId: localStorage.getItem($.nP) || "",
                            answerSdp: s.sdp,
                            appId: String(W.ZP.appInfo.appId)
                        })];
                    case 14:
                        if ((p = h.sent()).status === nn.YR.FailureSessionMigrated)
                            e({
                                type: xn.Z.SESSION_MIGRATED,
                                payload: {
                                    sessionMigrated: !0
                                }
                            });
                        else if (p.status === nn.YR.FailureTryAgain)
                            window.location.reload();
                        else if ((null === p || void 0 === p ? void 0 : p.status) !== nn.YR.Success)
                            throw i = !1,
                            new Error("setAnswerSdp-".concat(null === p || void 0 === p ? void 0 : p.status, "-").concat(JSON.stringify(p)));
                        return [3, 16];
                    case 15:
                        throw new Error("token not found for startSession");
                    case 16:
                        return [3, 18];
                    case 17:
                        return f = h.sent(),
                        i && (0,
                        Le.ZP)(f),
                        e({
                            type: xn.Z.SET_ERROR,
                            payload: {
                                error: f instanceof Error ? f.message : f,
                                clientId: "",
                                sessionId: "",
                                isAndroidConnected: !1
                            }
                        }),
                        [3, 18];
                    case 18:
                        return [2]
                    }
                }
                ))
            }
            ))
        }, Xo = t(550), Go = t(6817), Vo = t(5279), Ko = function(n, e) {
            return Object.defineProperty ? Object.defineProperty(n, "raw", {
                value: e
            }) : n.raw = e,
            n
        }, Yo = rn.ZP.div(Uo || (Uo = Ko(["\n  filter: ", ";\n  width: ", ";\n  height: ", ";\n  flex-shrink: 0;\n  flex-grow: 0;\n  margin-right: 16px;\n\n  img {\n    border-radius: ", ";\n    width: ", ";\n    height: ", ";\n  }\n"], ["\n  filter: ", ";\n  width: ", ";\n  height: ", ";\n  flex-shrink: 0;\n  flex-grow: 0;\n  margin-right: 16px;\n\n  img {\n    border-radius: ", ";\n    width: ", ";\n    height: ", ";\n  }\n"])), (function(n) {
            var e = n.theme;
            return "drop-shadow(".concat(e.shadow.normal, ")")
        }
        ), (function(n) {
            return n.width
        }
        ), (function(n) {
            return n.height
        }
        ), (function(n) {
            return n.theme.spacing.base3
        }
        ), (function(n) {
            return n.width
        }
        ), (function(n) {
            return n.height
        }
        ));
        function Wo(n, e) {
            var t = Object.keys(n);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(n);
                e && (i = i.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable
                }
                ))),
                t.push.apply(t, i)
            }
            return t
        }
        function qo(n) {
            for (var e = 1; e < arguments.length; e++) {
                var t = null != arguments[e] ? arguments[e] : {};
                e % 2 ? Wo(Object(t), !0).forEach((function(e) {
                    (0,
                    je.Z)(n, e, t[e])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(t)) : Wo(Object(t)).forEach((function(e) {
                    Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(t, e))
                }
                ))
            }
            return n
        }
        var Qo, Jo, $o, nr, er, tr, ir, or, rr, ar, lr, dr, cr, sr, ur, pr, fr, hr, gr, mr, xr, vr, br, yr, wr, Zr, kr, Ar, Pr, Sr, Er, Cr, Tr, Ir, Or, jr, Dr, Lr, zr, Mr, Nr, Br, Rr, _r = function(n, e) {
            var t = {};
            for (var i in n)
                Object.prototype.hasOwnProperty.call(n, i) && e.indexOf(i) < 0 && (t[i] = n[i]);
            if (null != n && "function" === typeof Object.getOwnPropertySymbols) {
                var o = 0;
                for (i = Object.getOwnPropertySymbols(n); o < i.length; o++)
                    e.indexOf(i[o]) < 0 && Object.prototype.propertyIsEnumerable.call(n, i[o]) && (t[i[o]] = n[i[o]])
            }
            return t
        }, Ur = function(n) {
            var e = n.height
              , t = void 0 === e ? "160px" : e
              , i = n.width
              , o = void 0 === i ? "215px" : i
              , r = n.className
              , a = void 0 === r ? "" : r
              , l = _r(n, ["height", "width", "className"]);
            return (0,
            cn.tZ)(Yo, {
                height: t,
                width: o,
                className: a,
                children: (0,
                cn.tZ)("img", qo({
                    alt: ""
                }, l))
            })
        }, Hr = {
            enableHighAccuracy: !0,
            timeout: 5e3,
            maximumAge: 0
        }, Fr = {
            Location: "icon-location",
            Camera: "icon-video-cam"
        }, Xr = function(n, e) {
            return Object.defineProperty ? Object.defineProperty(n, "raw", {
                value: e
            }) : n.raw = e,
            n
        }, Gr = (0,
        rn.iv)(Qo || (Qo = Xr(["\n  z-index: 12;\n"], ["\n  z-index: 12;\n"]))), Vr = (0,
        rn.iv)(Jo || (Jo = Xr(["\n  @media only screen and (min-width: 768px) {\n    position: absolute;\n    top: 4px;\n    left: 134px;\n  }\n"], ["\n  @media only screen and (min-width: 768px) {\n    position: absolute;\n    top: 4px;\n    left: 134px;\n  }\n"]))), Kr = rn.ZP.div($o || ($o = Xr(["\n  display: flex;\n  padding: 16px;\n"], ["\n  display: flex;\n  padding: 16px;\n"]))), Yr = (0,
        rn.F4)(nr || (nr = Xr(["\n    0% { height: 0; padding: 0; }\n    100% { height: 30px; padding: 8px 12px; }\n"], ["\n    0% { height: 0; padding: 0; }\n    100% { height: 30px; padding: 8px 12px; }\n"]))), Wr = rn.ZP.div(er || (er = Xr(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n\n  button {\n    margin-left: auto;\n    animation-name: ", ";\n    animation-duration: 250ms;\n    animation-delay: 1000ms;\n    animation-timing-function: linear;\n    animation-fill-mode: forwards;\n\n    p {\n      padding: 0 12px;\n    }\n  }\n"], ["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n\n  button {\n    margin-left: auto;\n    animation-name: ", ";\n    animation-duration: 250ms;\n    animation-delay: 1000ms;\n    animation-timing-function: linear;\n    animation-fill-mode: forwards;\n\n    p {\n      padding: 0 12px;\n    }\n  }\n"])), Yr), qr = (rn.ZP.div(tr || (tr = Xr(["\n  display: flex;\n  justify-content: center;\n  width: 140px;\n  height: 100%;\n  border-radius: 12px;\n  overflow: hidden;\n  > span {\n    width: 100% !important;\n    height: 100% !important;\n  }\n"], ["\n  display: flex;\n  justify-content: center;\n  width: 140px;\n  height: 100%;\n  border-radius: 12px;\n  overflow: hidden;\n  > span {\n    width: 100% !important;\n    height: 100% !important;\n  }\n"]))),
        function(n) {
            localStorage.setItem("permission", JSON.stringify({
                location: n
            }))
        }
        ), Qr = function(n) {
            1 === n.code && qr("denied")
        }, Jr = function(n) {
            qr("granted"),
            (0,
            pe.Yg)(n)
        }, $r = function() {
            var n = (0,
            V.useContext)(Vo.Z)
              , e = (0,
            J.v9)((function(n) {
                return n.play.permissionType
            }
            ))
              , t = (0,
            gn.$)().t
              , i = (0,
            J.I0)()
              , o = (0,
            V.useState)(!1)
              , r = o[0]
              , a = o[1]
              , l = function() {
                i({
                    type: xn.Z.GET_PERMISSION,
                    payload: {
                        permissionType: ""
                    }
                }),
                function(n) {
                    switch (n) {
                    case "Location":
                        navigator.geolocation.getCurrentPosition(Jr, Qr, Hr)
                    }
                }(e)
            };
            return (0,
            V.useEffect)((function() {
                "granted" === (localStorage.getItem("permission") ? JSON.parse(localStorage.getItem("permission") || "") : {}).location ? l() : a(!0)
            }
            ), []),
            r ? (0,
            cn.tZ)(ve.Z, {
                width: "416px",
                modalBackgroundColor: ot.qm.gradients.glass,
                overlayStyles: Gr,
                modalStyles: Vr,
                children: (0,
                cn.BX)(Kr, {
                    children: [(0,
                    cn.tZ)(Ur, {
                        width: "110px",
                        height: "150px",
                        alt: n.appName,
                        src: n.media.tile
                    }), (0,
                    cn.BX)(Wr, {
                        children: [(0,
                        cn.tZ)(xe.T5, {
                            med: !0,
                            children: t("permission")
                        }), (0,
                        cn.tZ)(xe.kk, {
                            style: {
                                display: "flex",
                                margin: "15px 0"
                            },
                            children: "string" === typeof e ? (0,
                            cn.BX)(cn.HY, {
                                children: [(0,
                                cn.tZ)("span", {
                                    style: {
                                        fontSize: "20px"
                                    },
                                    className: Fr[e]
                                }), " ", e]
                            }) : null
                        }), (0,
                        cn.tZ)(de.z, {
                            variant: "primary",
                            text: (0,
                            q.tq)() ? t("okay") : t("gotIt"),
                            onClick: l
                        })]
                    })]
                })
            }) : null
        }, na = t(2920), ea = function(n, e) {
            return Object.defineProperty ? Object.defineProperty(n, "raw", {
                value: e
            }) : n.raw = e,
            n
        }, ta = rn.ZP.p(ir || (ir = ea(["\n  position: absolute;\n  top: 10%;\n  z-index: 2;\n  font-size: 13px;\n  transform: scaleY(0);\n  transition: transform 0.25s;\n  color: ", ";\n  background: ", ";\n  border: 1px solid rgba(255, 255, 255, 0.3);\n  border-radius: 4px;\n  margin: 0;\n  padding: 6px 12px;\n  gap: 4px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 600;\n"], ["\n  position: absolute;\n  top: 10%;\n  z-index: 2;\n  font-size: 13px;\n  transform: scaleY(0);\n  transition: transform 0.25s;\n  color: ", ";\n  background: ", ";\n  border: 1px solid rgba(255, 255, 255, 0.3);\n  border-radius: 4px;\n  margin: 0;\n  padding: 6px 12px;\n  gap: 4px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 600;\n"])), (function(n) {
            return n.theme.colors.white
        }
        ), (function(n) {
            var e = n.bg
              , t = n.theme;
            return e || t.colors.green
        }
        )), ia = rn.ZP.span(or || (or = ea(["\n  display: inline-block;\n  background-color: ", ";\n  -webkit-transition: .4s;\n  transform: rotate(-45deg);\n  transition: .4s;\n  border-radius: 50%;\n  height: 16px;\n  width: 16px;\n  margin-right: 6px;\n\n  &:before {\n    content: '';\n    width: 5px;\n    height: 9px;\n    position: absolute;\n    border-top: 2px solid ", ";\n    border-left: 2px solid ", ";\n    top: 3px;\n    left: 6px;\n    right: 0px;\n    bottom: 0;\n    z-index: 2;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    transform: rotate(-82deg);\n  }\n"], ["\n  display: inline-block;\n  background-color: ", ";\n  -webkit-transition: .4s;\n  transform: rotate(-45deg);\n  transition: .4s;\n  border-radius: 50%;\n  height: 16px;\n  width: 16px;\n  margin-right: 6px;\n\n  &:before {\n    content: '';\n    width: 5px;\n    height: 9px;\n    position: absolute;\n    border-top: 2px solid ", ";\n    border-left: 2px solid ", ";\n    top: 3px;\n    left: 6px;\n    right: 0px;\n    bottom: 0;\n    z-index: 2;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    transform: rotate(-82deg);\n  }\n"])), (function(n) {
            return n.theme.colors.white
        }
        ), (function(n) {
            return n.theme.colors.green
        }
        ), (function(n) {
            return n.theme.colors.green
        }
        )), oa = {
            success: "#398B4D"
        }, ra = function(n) {
            var e = n.type
              , t = n.onClose
              , i = n.children
              , o = (0,
            V.useState)("")
              , r = o[0]
              , a = o[1];
            return (0,
            V.useEffect)((function() {
                var n = setTimeout((function() {
                    a("scaleY(1)")
                }
                ), 1e3)
                  , e = setTimeout((function() {
                    a("scaleY(0)"),
                    t()
                }
                ), 4e3);
                return function() {
                    clearTimeout(n),
                    clearTimeout(e)
                }
            }
            ), []),
            (0,
            cn.BX)(ta, {
                bg: oa[e],
                style: {
                    transform: r || void 0
                },
                children: [(0,
                cn.tZ)(ia, {}), i]
            })
        }, aa = t(6036), la = function(n, e) {
            return Object.defineProperty ? Object.defineProperty(n, "raw", {
                value: e
            }) : n.raw = e,
            n
        }, da = rn.ZP.div(rr || (rr = la(["\n  display: flex;\n  flex-direction: row;\n  margin-top: 20px;\n\n  button, a {\n    font-size: 13px;\n    width: 47%\n  }\n  a {\n    text-decoration: none;\n    margin-left: 6%;\n  }\n"], ["\n  display: flex;\n  flex-direction: row;\n  margin-top: 20px;\n\n  button, a {\n    font-size: 13px;\n    width: 47%\n  }\n  a {\n    text-decoration: none;\n    margin-left: 6%;\n  }\n"]))), ca = function() {
            var n = (0,
            J.v9)((function(n) {
                return n.play.urlToOpen
            }
            ))
              , e = (0,
            gn.$)().t
              , t = (0,
            J.I0)();
            return (0,
            cn.tZ)(cn.HY, {
                children: n && (0,
                cn.tZ)(ve.Z, {
                    width: "360px",
                    children: (0,
                    cn.BX)(Je.cy, {
                        children: [(0,
                        cn.tZ)(xe.T4, {
                            med: !0,
                            children: e("areYouSure")
                        }), (0,
                        cn.BX)(xe.T5, {
                            style: {
                                maxHeight: "145px",
                                overflow: "hidden"
                            },
                            children: [e("link"), " ", (0,
                            cn.tZ)("strong", {
                                style: {
                                    wordBreak: "break-word"
                                },
                                children: n
                            }), "?"]
                        }), (0,
                        cn.BX)(da, {
                            children: [(0,
                            cn.tZ)(de.z, {
                                onClick: function() {
                                    t({
                                        type: xn.Z.OPEN_URL,
                                        payload: {
                                            urlToOpen: null
                                        }
                                    })
                                },
                                className: "back-btn",
                                children: e("cancel")
                            }), (0,
                            cn.tZ)(de.z, {
                                as: "a",
                                variant: "primary",
                                rel: "noopener noreferrer",
                                target: "_blank",
                                href: n,
                                children: e("yes")
                            })]
                        })]
                    })
                })
            })
        }, sa = t(1705), ua = t(77), pa = t(6811), fa = t(3029), ha = {
            src: "/play/_next/static/media/MouseLButton.8f31ba3d.png",
            height: 84,
            width: 62,
            blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAICAQAAABwz0azAAAAc0lEQVR42gFoAJf/AP4A9SD5We1l/y/oAADuHP31/8+7sK3U/yoA9Gr9+f6UyYar0ON5AOZL3oHdc+R564zoUADYl3zVaMZmxXTS2JkA3HxiyACkAKVdyNuAAO8XxrN/zH7MxbXuGgD0AOoR32beZ+oT9ADTSzzAhYkR0AAAAABJRU5ErkJggg=="
        }, ga = function(n, e) {
            return Object.defineProperty ? Object.defineProperty(n, "raw", {
                value: e
            }) : n.raw = e,
            n
        }, ma = rn.ZP.span(ar || (ar = ga(["\n  background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzYiIGhlaWdodD0iMzYiIHZpZXdCb3g9IjAgMCAzNiAzNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xOCAyOUMxMS4yMTM2IDI5IDUuNTE5NDUgMjQuMzEzOSAzLjk4MTAxIDE4LjAwMDFDNS41MTk0MSAxMS42ODYyIDExLjIxMzYgNyAxOCA3QzI0Ljc4NjQgNyAzMC40ODA1IDExLjY4NjEgMzIuMDE5IDE3Ljk5OTlDMzAuNDgwNiAyNC4zMTM4IDI0Ljc4NjQgMjkgMTggMjlaTTE4IDZDMjUuMzQyNiA2IDMxLjQ4NzIgMTEuMTI5MiAzMy4wNDYyIDE3Ljk5OTlDMzEuNDg3MiAyNC44NzA4IDI1LjM0MjYgMzAgMTggMzBDMTAuNjU3NCAzMCA0LjUxMjgzIDI0Ljg3MDggMi45NTM3NCAxOC4wMDAxQzQuNTEyNzkgMTEuMTI5MiAxMC42NTc0IDYgMTggNlpNNi43MTUzIDE4QzcuMTEyNzYgMTYuMjQ4NCA3LjkwNzU3IDE0LjY0NzcgOC45OTk5NyAxMy4yOTc4VjE1LjAyMjVDOC40Mzc2NCAxNS45MzI1IDguMDA5NTEgMTYuOTM0MiA3Ljc0MzI1IDE4QzguMDA5NTIgMTkuMDY1OSA4LjQzNzY0IDIwLjA2NzYgOC45OTk5NyAyMC45Nzc2VjIyLjcwMjNDNy45MDc1OCAyMS4zNTIzIDcuMTEyNzcgMTkuNzUxNiA2LjcxNTMgMThaTTI4LjI1NjcgMThDMjcuOTkwNSAxOS4wNjU4IDI3LjU2MjMgMjAuMDY3NiAyNyAyMC45Nzc2VjIyLjcwMjNDMjguMDkyNCAyMS4zNTIzIDI4Ljg4NzIgMTkuNzUxNiAyOS4yODQ3IDE3Ljk5OTlDMjguODg3MiAxNi4yNDgzIDI4LjA5MjQgMTQuNjQ3NiAyNyAxMy4yOTc3VjE1LjAyMjNDMjcuNTYyMyAxNS45MzI0IDI3Ljk5MDUgMTYuOTM0MSAyOC4yNTY3IDE4WiIgZmlsbD0iI2ZmZmZmZiIvPgo8Y2lyY2xlIGN4PSIxOCIgY3k9IjE4IiByPSIyLjUiIHN0cm9rZT0iI2ZmZmZmZiIvPgo8L3N2Zz4K);  width: 60px;\n  position: absolute;\n  height: 60px;\n  background-repeat: no-repeat;\n  background-color: ", ";\n  border: 1px solid;\n  border-radius: 50%;\n  top: -20px;\n  left: -3px;\n  background-position: center;\n  z-index: -1;\n  background-size: 57%;\n"], ["\n  background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzYiIGhlaWdodD0iMzYiIHZpZXdCb3g9IjAgMCAzNiAzNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xOCAyOUMxMS4yMTM2IDI5IDUuNTE5NDUgMjQuMzEzOSAzLjk4MTAxIDE4LjAwMDFDNS41MTk0MSAxMS42ODYyIDExLjIxMzYgNyAxOCA3QzI0Ljc4NjQgNyAzMC40ODA1IDExLjY4NjEgMzIuMDE5IDE3Ljk5OTlDMzAuNDgwNiAyNC4zMTM4IDI0Ljc4NjQgMjkgMTggMjlaTTE4IDZDMjUuMzQyNiA2IDMxLjQ4NzIgMTEuMTI5MiAzMy4wNDYyIDE3Ljk5OTlDMzEuNDg3MiAyNC44NzA4IDI1LjM0MjYgMzAgMTggMzBDMTAuNjU3NCAzMCA0LjUxMjgzIDI0Ljg3MDggMi45NTM3NCAxOC4wMDAxQzQuNTEyNzkgMTEuMTI5MiAxMC42NTc0IDYgMTggNlpNNi43MTUzIDE4QzcuMTEyNzYgMTYuMjQ4NCA3LjkwNzU3IDE0LjY0NzcgOC45OTk5NyAxMy4yOTc4VjE1LjAyMjVDOC40Mzc2NCAxNS45MzI1IDguMDA5NTEgMTYuOTM0MiA3Ljc0MzI1IDE4QzguMDA5NTIgMTkuMDY1OSA4LjQzNzY0IDIwLjA2NzYgOC45OTk5NyAyMC45Nzc2VjIyLjcwMjNDNy45MDc1OCAyMS4zNTIzIDcuMTEyNzcgMTkuNzUxNiA2LjcxNTMgMThaTTI4LjI1NjcgMThDMjcuOTkwNSAxOS4wNjU4IDI3LjU2MjMgMjAuMDY3NiAyNyAyMC45Nzc2VjIyLjcwMjNDMjguMDkyNCAyMS4zNTIzIDI4Ljg4NzIgMTkuNzUxNiAyOS4yODQ3IDE3Ljk5OTlDMjguODg3MiAxNi4yNDgzIDI4LjA5MjQgMTQuNjQ3NiAyNyAxMy4yOTc3VjE1LjAyMjNDMjcuNTYyMyAxNS45MzI0IDI3Ljk5MDUgMTYuOTM0MSAyOC4yNTY3IDE4WiIgZmlsbD0iI2ZmZmZmZiIvPgo8Y2lyY2xlIGN4PSIxOCIgY3k9IjE4IiByPSIyLjUiIHN0cm9rZT0iI2ZmZmZmZiIvPgo8L3N2Zz4K);  width: 60px;\n  position: absolute;\n  height: 60px;\n  background-repeat: no-repeat;\n  background-color: ", ";\n  border: 1px solid;\n  border-radius: 50%;\n  top: -20px;\n  left: -3px;\n  background-position: center;\n  z-index: -1;\n  background-size: 57%;\n"])), (function(n) {
            return n.theme.colors.modal
        }
        )), xa = function(n) {
            return void 0 === n && (n = ""),
            n.indexOf("Dpad") > -1 && -1 === n.indexOf("+") ? n.replace(/Gamepad/g, "") : n.replace(/Gamepad/g, "").replace(/Trigger/g, "T").replace(/Left/g, "L").replace(/Right/g, "R").replace(/Shoulder/g, "B")
        }, va = {
            Oem1: ";",
            Oem2: "/",
            Oem3: "~",
            Oem4: "[",
            Oem5: "\\",
            Oem6: "]",
            Oem7: "'",
            OemPlus: "+",
            OemComma: ",",
            OemMinus: "-",
            OemPeriod: "."
        }, ba = function(n) {
            return va[n] || n
        }, ya = function(n, e) {
            return n / 100 * e
        }, wa = {
            MouseLButton: ha,
            MouseRButton: {
                src: "/play/_next/static/media/MouseRButton.d74dac8c.png",
                height: 84,
                width: 62,
                blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAICAQAAABwz0azAAAAc0lEQVR42gFoAJf/AOgA/y/tZflZ9SD+AAD/Kq3Uu7D/z/317hwA43mr0MmG/pT9+fRqAOhQ64zked1z3oHmSwDYmXTSZsVoxnzV2JcA24BdyAClAKRiyNx8AO4axbV+zH/MxrPvFwD0AOoT3mffZuoR9ADONTzAZuNVzwAAAABJRU5ErkJggg=="
            },
            MouseMButton: {
                src: "/play/_next/static/media/MouseMButton.be91e84d.png",
                height: 72,
                width: 54,
                blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAICAQAAABwz0azAAAAcUlEQVR42mPYx/BC/tfSn8ueyO9hYLhic/zyn7e/Phy7fM2K4WTywcX/pv2eeWDp6QSGe74HFq2ds2bu/sX3fBgutgf8VwTCgP8X2xmeBpX9ZwDCsv9Pg4D0qf6u312/T/X/Z2D4D4SfjT4b/Wf4zwAAtN08wE+/zqoAAAAASUVORK5CYII="
            },
            DpadUp: {
                src: "/play/_next/static/media/GamepadDpadUp.f38ef235.png",
                height: 72,
                width: 72,
                blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAAbElEQVR42i2NwQmFQBBDs5VYknjcmzV4mRZ+O8t3KxgtQ3DqWIYYRAKBFwgPAMttu+9+GwsgPFollMqjaQoTjjXXxKgMw99B5MVLDYq6hl+SVIOisIXT2HLLaSzUheVsM6HMPNvnCevePV7tA3buTV0h1GDsAAAAAElFTkSuQmCC"
            },
            DpadDown: {
                src: "/play/_next/static/media/GamepadDpadDown.9f027fed.png",
                height: 72,
                width: 72,
                blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAAbElEQVR42i2N0QmAMBBD00kcSfzsnzP4cyu4TtFOcDqG0JujHPEqEgi8QHgAmEyqVjVhwsC7zERk5l1iMlk49c03n/pCE1QFdycZDQYdCsIfPtFgkEkm+uqro+dxYbpKTJHMq/yeJqee2j7tC5n+TV0ZktgfAAAAAElFTkSuQmCC"
            },
            DpadLeft: {
                src: "/play/_next/static/media/GamepadDpadLeft.6c56681a.png",
                height: 72,
                width: 72,
                blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAAcklEQVR42i2NwQkCQRAEe5MxHUXOh/r26XtCMBafh6sJzIVgALdBCMIx1A3LQX+6oaqFKLNV/3gzCso6jVeEGJhGima7oGUXz9BypJneLh7xB/YhqivDLb78OPQhkXMiinsiQyJdmhPiRJciSrOX1+12BaEwUUUy+RmYAAAAAElFTkSuQmCC"
            },
            DpadRight: {
                src: "/play/_next/static/media/GamepadDpadRight.691db1eb.png",
                height: 72,
                width: 72,
                blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAAb0lEQVR42iWNwQ1AUBBERzPaQcIBZ0fnLUEtjuLTwCpBAX4REolsxubLnGaS9wYEsyi7Br2EGeD1WGrC0/NYfIpSEe9sueHteAmCgoWRDycDN01DaTdPDgZ6i1I7MhocaR1J0iZJ21/63wZdNabbDyYAT0YcjwNvAAAAAElFTkSuQmCC"
            }
        }, Za = function(n) {
            var e = n.gamepad
              , t = n.control
              , i = n.height;
            return (0,
            cn.BX)(cn.HY, {
                children: [e && t.GamepadStick && (0,
                cn.tZ)("span", {
                    className: "overlayKeyValue",
                    children: xa(t.GamepadStick)
                }), !e && (0,
                cn.BX)(cn.HY, {
                    children: [t.KeyUp && (0,
                    cn.tZ)("span", {
                        className: "overlayKeyValue up",
                        style: {
                            transform: "translateY(-100%) translateY(-".concat(ya(i, Math.min(t.XRadius / 3, 4)), "px)")
                        },
                        children: (0,
                        cn.tZ)("span", {
                            children: xa(t.KeyUp)
                        })
                    }), t.KeyLeft && (0,
                    cn.tZ)("span", {
                        className: "overlayKeyValue left",
                        style: {
                            transform: "translateX(-100%) translateX(-".concat(ya(i, Math.min(t.XRadius / 3, 4)), "px)")
                        },
                        children: (0,
                        cn.tZ)("span", {
                            children: xa(t.KeyLeft)
                        })
                    }), t.KeyDown && (0,
                    cn.tZ)("span", {
                        className: "overlayKeyValue left",
                        style: {
                            transform: "translateY(100%) translateY(".concat(ya(i, Math.min(t.XRadius / 3, 4)), "px)")
                        },
                        children: (0,
                        cn.tZ)("span", {
                            children: xa(t.KeyDown)
                        })
                    }), t.KeyRight && (0,
                    cn.tZ)("span", {
                        className: "overlayKeyValue left",
                        style: {
                            transform: "translateX(100%) translateX(".concat(ya(i, Math.min(t.XRadius / 3, 4)), "px)")
                        },
                        children: (0,
                        cn.tZ)("span", {
                            children: xa(t.KeyRight)
                        })
                    })]
                })]
            })
        }, ka = function(n) {
            var e = n.gamepad
              , t = n.control
              , i = n.height;
            return (0,
            cn.tZ)(cn.HY, {
                children: e ? t.GamepadStick ? (0,
                cn.BX)(cn.HY, {
                    children: [(0,
                    cn.tZ)("span", {
                        className: "overlayKeyValue",
                        children: xa(t.GamepadStick)
                    }), (0,
                    cn.tZ)(ma, {})]
                }) : (0,
                cn.BX)(cn.HY, {
                    children: [t.KeyUp_alt1 && (0,
                    cn.tZ)("span", {
                        className: "overlayKeyValue up",
                        style: {
                            transform: "translateY(-40%) translateY(-".concat(ya(i, 3), "px)")
                        },
                        children: (0,
                        cn.tZ)("span", {
                            children: xa(t.KeyUp_alt1)
                        })
                    }), t.KeyLeft_alt1 && (0,
                    cn.tZ)("span", {
                        className: "overlayKeyValue left",
                        style: {
                            transform: "translateX(-40%) translateX(-".concat(ya(i, 3), "px)")
                        },
                        children: (0,
                        cn.tZ)("span", {
                            children: xa(t.KeyLeft_alt1)
                        })
                    }), t.KeyDown_alt1 && (0,
                    cn.tZ)("span", {
                        className: "overlayKeyValue down",
                        style: {
                            transform: "translateY(40%) translateY(".concat(ya(i, 3), "px)")
                        },
                        children: (0,
                        cn.tZ)("span", {
                            children: t.KeyDown_alt1
                        })
                    }), t.KeyRight_alt1 && (0,
                    cn.tZ)("span", {
                        className: "overlayKeyValue left",
                        style: {
                            transform: "translateX(40%) translateX(".concat(ya(i, 3), "px")
                        },
                        children: (0,
                        cn.tZ)("span", {
                            children: t.KeyRight_alt1
                        })
                    }), (0,
                    cn.tZ)(ma, {})]
                }) : null
            })
        }, Aa = function(n) {
            var e, t = n.gamepad, i = n.control, o = t ? xa(i.Key_alt1) : ba(i.Key);
            return (t ? i.Key_alt1 : i.Key) ? (0,
            cn.tZ)("span", {
                className: "overlayKeyValue ".concat(i.Type, " ").concat(wa[o] ? "DpadImage" : ""),
                children: wa[o] ? (0,
                cn.tZ)("img", {
                    src: null === (e = wa[o]) || void 0 === e ? void 0 : e.src,
                    alt: ""
                }) : o
            }) : null
        }, Pa = function(n) {
            var e, t = n.controlKey, i = n.gamepad;
            return (0,
            cn.BX)(cn.HY, {
                children: ["mobaImages[controlKey] ? (", (0,
                cn.tZ)("span", {
                    className: "overlayKeyValue",
                    children: (0,
                    cn.tZ)("img", {
                        src: null === (e = wa[t]) || void 0 === e ? void 0 : e.src,
                        alt: ""
                    })
                }), ") : (", (0,
                cn.tZ)("span", {
                    className: "overlayKeyValue MobaText ".concat(t),
                    children: i ? xa(t) : ba(t)
                }), ")"]
            })
        }, Sa = function(n) {
            var e = n.gameControls
              , t = n.isGamepadview
              , i = (0,
            V.useState)({
                top: 0,
                left: 0,
                width: 0,
                height: 0
            })
              , o = i[0]
              , r = i[1]
              , a = ((0,
            J.v9)((function(n) {
                return n.play.videoRef
            }
            )),
            (0,
            J.v9)((function(n) {
                return n.preferences.imapOverlay
            }
            )))
              , l = (0,
            J.v9)((function(n) {
                return n.preferences.legacyControls
            }
            ))
              , d = function() {
                var n = en.Z.getState().play.videoRef;
                if (null === n || void 0 === n ? void 0 : n.current) {
                    var e = null === n || void 0 === n ? void 0 : n.current.getBoundingClientRect()
                      , t = null === n || void 0 === n ? void 0 : n.current.parentNode;
                    if (e && t) {
                        var i = t.getBoundingClientRect()
                          , o = {
                            top: Math.max(e.top - i.top, 0),
                            left: Math.max(e.left - i.left, 0),
                            width: e.width,
                            height: e.height
                        };
                        r(o)
                    }
                }
            };
            return (0,
            V.useEffect)((function() {
                return window.addEventListener(Nt.Sg, d),
                function() {
                    window.removeEventListener(Nt.Sg, d)
                }
            }
            ), []),
            (0,
            V.useEffect)((function() {
                d()
            }
            ), [a, l]),
            (0,
            cn.tZ)(cn.HY, {
                children: a && l ? e.map((function(n, e) {
                    if (n.IsVisibleInOverlay || n.ShowOnOverlay) {
                        var i = function(n, e, t) {
                            switch (n.Type) {
                            case Nt.x_.Tap:
                            case Nt.x_.TapRepeat:
                            case Nt.x_.Script:
                                return (0,
                                cn.tZ)(Aa, {
                                    gamepad: e,
                                    control: n
                                });
                            case Nt.x_.Dpad:
                                return (0,
                                cn.tZ)(Za, {
                                    gamepad: e,
                                    height: t.height || 500,
                                    control: n
                                });
                            case Nt.x_.FreeLook:
                                return (0,
                                cn.tZ)(ka, {
                                    gamepad: e,
                                    height: t.height || 500,
                                    control: n
                                });
                            case Nt.x_.Pan:
                                return (i = e ? xa(n.KeyStartStop_alt1) : ba(n.KeyStartStop)) ? (0,
                                cn.tZ)("span", {
                                    className: "overlayKeyValue",
                                    children: i
                                }) : "";
                            case Nt.x_.MOBASkill:
                                var i;
                                if (i = e ? n.KeyActivate_alt1 : n.KeyActivate)
                                    return (0,
                                    cn.tZ)(Pa, {
                                        controlKey: i,
                                        gamepad: e
                                    })
                            }
                            return ""
                        }(n, t, o);
                        return "Pan" === n.Type && n.LButtonX >= 0 && n.LButtonY >= 0 && (t ? "" : (0,
                        cn.tZ)("span", {
                            className: "overlayKey LBM",
                            style: {
                                left: o.left + ya(o.width, n.LButtonX),
                                top: o.top + ya(o.height, n.LButtonY)
                            },
                            children: (0,
                            cn.tZ)("span", {
                                className: "overlayKeyValue",
                                children: (0,
                                cn.tZ)("img", {
                                    src: "".concat(ha.src),
                                    alt: ""
                                })
                            })
                        })),
                        "MOBASkill" === n.Type && n.CancelX > 0 && n.CancelY > 0 && (0,
                        cn.tZ)("span", {
                            className: "overlayKey Tap",
                            style: {
                                left: o.left + ya(o.width, n.CancelX),
                                top: o.top + ya(o.height, n.CancelY)
                            },
                            children: (0,
                            cn.tZ)("span", {
                                className: "overlayKeyValue",
                                children: t ? xa(n.KeyCancel_alt1) : n.KeyCancel
                            })
                        }),
                        i ? (0,
                        cn.tZ)("span", {
                            className: "overlayKey ".concat(n.Type, " ").concat(t ? "gamepad" : ""),
                            style: {
                                left: o.left + ya(o.width, n.X),
                                top: o.top + ya(o.height, n.Y)
                            },
                            children: i
                        }, "".concat(n.$type, "-").concat(e)) : null
                    }
                    return null
                }
                )) : null
            })
        }, Ea = {
            src: "/play/_next/static/media/alert.bfbcd90b.svg",
            height: 24,
            width: 24
        }, Ca = t(9165), Ta = function(n, e) {
            return Object.defineProperty ? Object.defineProperty(n, "raw", {
                value: e
            }) : n.raw = e,
            n
        }, Ia = rn.ZP.div(lr || (lr = Ta(["\n    z-index: 20;\n    color: ", ";\n    position: fixed;\n    right: 0;\n    top: 70px;\n    width: 320px;\n    background: ", ";\n    backdrop-filter: blur(24px);\n    border-radius: 8px 0 0 8px;\n    padding: 8px 10px;\n    transition: transform ease-out 0.5s;\n    &.hide {\n      transform: translate(100%);\n    }\n"], ["\n    z-index: 20;\n    color: ", ";\n    position: fixed;\n    right: 0;\n    top: 70px;\n    width: 320px;\n    background: ", ";\n    backdrop-filter: blur(24px);\n    border-radius: 8px 0 0 8px;\n    padding: 8px 10px;\n    transition: transform ease-out 0.5s;\n    &.hide {\n      transform: translate(100%);\n    }\n"])), (function(n) {
            return n.theme.colors.white
        }
        ), (function(n) {
            return n.theme.colors.base600
        }
        )), Oa = rn.ZP.div(dr || (dr = Ta(["\n  display: flex;\n  margin: 6px 0 10px;\n  font-weight: 400;\n  align-items: center;\n  justify-content: space-between;\n  .sidebar-heading {\n    display: flex;\n    align-items: center;\n  }\n  i {\n    padding: 5px;\n    &:hover {\n      border-radius: 50%;\n      background: ", ";\n    }\n  }\n"], ["\n  display: flex;\n  margin: 6px 0 10px;\n  font-weight: 400;\n  align-items: center;\n  justify-content: space-between;\n  .sidebar-heading {\n    display: flex;\n    align-items: center;\n  }\n  i {\n    padding: 5px;\n    &:hover {\n      border-radius: 50%;\n      background: ", ";\n    }\n  }\n"])), (function(n) {
            return n.theme.colors.modal
        }
        )), ja = rn.ZP.ul(cr || (cr = Ta(["\n  margin: 0;\n  list-style-type: none;\n  padding: 5px 0;\n  background-color: rgba(0,0,0,.4);\n"], ["\n  margin: 0;\n  list-style-type: none;\n  padding: 5px 0;\n  background-color: rgba(0,0,0,.4);\n"]))), Da = rn.ZP.li(sr || (sr = Ta(["\n  font-size: 12px;\n  padding: 6px 12px;\n  font-weight: 300;\n  display: flex;\n  span {\n    &:first-child {\n      flex: 1;\n      padding-right: 10px;\n      color: rgba(255, 255, 255, 0.7);\n    }\n    &:last-child {\n      flex: 0 0 114px;\n      font-weight: 500;\n    }\n  }\n"], ["\n  font-size: 12px;\n  padding: 6px 12px;\n  font-weight: 300;\n  display: flex;\n  span {\n    &:first-child {\n      flex: 1;\n      padding-right: 10px;\n      color: rgba(255, 255, 255, 0.7);\n    }\n    &:last-child {\n      flex: 0 0 114px;\n      font-weight: 500;\n    }\n  }\n"]))), La = ((0,
        rn.ZP)(Da)(ur || (ur = Ta(["\n  color: #f5f5f5;\n  font-weight: 600;\n\n  &::only-child {\n    display: none;\n  }\n"], ["\n  color: #f5f5f5;\n  font-weight: 600;\n\n  &::only-child {\n    display: none;\n  }\n"]))),
        (0,
        rn.ZP)(Da)(pr || (pr = Ta(["\n  font-weight: 600;\n  font-size: 12px;\n  justify-content: flex-start;\n"], ["\n  font-weight: 600;\n  font-size: 12px;\n  justify-content: flex-start;\n"])))), za = rn.ZP.div(fr || (fr = Ta(["\n  display: flex;\n  border-top-left-radius: 4px;\n  border-top-right-radius: 4px;\n  overflow: hidden;\n  font-size: 14px;\n"], ["\n  display: flex;\n  border-top-left-radius: 4px;\n  border-top-right-radius: 4px;\n  overflow: hidden;\n  font-size: 14px;\n"]))), Ma = rn.ZP.span(hr || (hr = Ta(["\n  padding: 10px 16px;\n  flex: 0 0 50%;\n  background: transparent;\n  cursor: pointer;\n  background: ", ";\n  color: rgba(255,255,255,.4);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  i {\n    font-size: 19px;\n    margin-right: 10px;\n\n    &.icon-keyboard {\n      font-size: 22px;\n    }\n  }\n\n  &.active {\n    background: rgba(0,0,0,.4);\n    color: rgba(255,255,255,.8);\n  }\n"], ["\n  padding: 10px 16px;\n  flex: 0 0 50%;\n  background: transparent;\n  cursor: pointer;\n  background: ", ";\n  color: rgba(255,255,255,.4);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  i {\n    font-size: 19px;\n    margin-right: 10px;\n\n    &.icon-keyboard {\n      font-size: 22px;\n    }\n  }\n\n  &.active {\n    background: rgba(0,0,0,.4);\n    color: rgba(255,255,255,.8);\n  }\n"])), (function(n) {
            return n.theme.colors.modal
        }
        )), Na = rn.ZP.div(gr || (gr = Ta(["\n  display: flex;\n  background: ", ";\n  align-items: center;\n  text-align: center;\n  flex-direction: column;\n  min-height: 400px;\n  justify-content: center;\n  background: rgba(0,0,0,.4);\n  padding: 16px;\n\n  p {\n    color: rgba(255, 255, 255, 0.6);\n  }\n\n"], ["\n  display: flex;\n  background: ", ";\n  align-items: center;\n  text-align: center;\n  flex-direction: column;\n  min-height: 400px;\n  justify-content: center;\n  background: rgba(0,0,0,.4);\n  padding: 16px;\n\n  p {\n    color: rgba(255, 255, 255, 0.6);\n  }\n\n"])), (function(n) {
            return n.theme.colors.modal
        }
        )), Ba = rn.ZP.div(mr || (mr = Ta(["\n  background: rgba(0, 0, 0, 0.4);\n  padding: 8px;\n  margin: 12px 0;\n  border-radius: 4px;\n  min-height: 40px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n"], ["\n  background: rgba(0, 0, 0, 0.4);\n  padding: 8px;\n  margin: 12px 0;\n  border-radius: 4px;\n  min-height: 40px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n"]))), Ra = rn.ZP.label(xr || (xr = Ta(["\n  color: rgba(255, 255, 255, 0.8);\n  font-size: 12px;\n  display: block;\n\n  &.dim {\n    color: rgba(255, 255, 255, 0.6);\n  }\n\n  &.padd {\n    padding: 0px 12px;\n  }\n"], ["\n  color: rgba(255, 255, 255, 0.8);\n  font-size: 12px;\n  display: block;\n\n  &.dim {\n    color: rgba(255, 255, 255, 0.6);\n  }\n\n  &.padd {\n    padding: 0px 12px;\n  }\n"]))), _a = (0,
        rn.ZP)(Ba)(vr || (vr = Ta(["\n  justify-content: flex-start;\n  flex-direction: row;\n  align-items: center;\n  color: ", ";\n  justify-content: space-between;\n\n  span {\n    border: 1px solid;\n    width: 3em;\n    height: 1.8em;\n    border-radius: 10px;\n    position: relative;\n    cursor: pointer;\n    transition: all 0.1s;\n\n    &:after {\n      content: '';\n      transition: all 0.1s;\n      border-radius: 50%;\n      right: calc(13px + 1.5em);\n      width: 1.2em;\n      height: 1.2em;\n      position: absolute;\n      background: currentColor;\n      right: 47%;\n      top: 10%;\n    }\n  }\n\n  &.active span {\n    border-color: ", ";\n    background: ", ";\n\n    &:after {\n      background: ", ";\n      right: 3px;\n    }\n  }\n"], ["\n  justify-content: flex-start;\n  flex-direction: row;\n  align-items: center;\n  color: ", ";\n  justify-content: space-between;\n\n  span {\n    border: 1px solid;\n    width: 3em;\n    height: 1.8em;\n    border-radius: 10px;\n    position: relative;\n    cursor: pointer;\n    transition: all 0.1s;\n\n    &:after {\n      content: '';\n      transition: all 0.1s;\n      border-radius: 50%;\n      right: calc(13px + 1.5em);\n      width: 1.2em;\n      height: 1.2em;\n      position: absolute;\n      background: currentColor;\n      right: 47%;\n      top: 10%;\n    }\n  }\n\n  &.active span {\n    border-color: ", ";\n    background: ", ";\n\n    &:after {\n      background: ", ";\n      right: 3px;\n    }\n  }\n"])), (function(n) {
            return n.theme.colors.base100
        }
        ), (function(n) {
            return n.theme.colors.modal
        }
        ), (function(n) {
            return n.theme.colors.ascent
        }
        ), (function(n) {
            return n.theme.colors.white
        }
        )), Ua = rn.ZP.div(br || (br = Ta(["\n  justify-content: flex-start;\n  flex-direction: row;\n  align-items: center;\n  color: ", ";\n  justify-content: space-between;\n  display: flex;\n"], ["\n  justify-content: flex-start;\n  flex-direction: row;\n  align-items: center;\n  color: ", ";\n  justify-content: space-between;\n  display: flex;\n"])), (function(n) {
            return n.theme.colors.base100
        }
        )), Ha = rn.ZP.span(yr || (yr = Ta(["\n  border: ", ";\n  width: 3em;\n  height: 1.8em;\n  border-radius: 10px;\n  position: relative;\n  cursor: pointer;\n  transition: all 0.1s;\n  background: ", ";\n\n  &:after {\n    content: '';\n    transition: all 0.1s;\n    border-radius: 50%;\n    right: calc(13px + 1.5em);\n    width: 1.2em;\n    height: 1.2em;\n    position: absolute;\n    background: ", ";\n    right: 47%;\n    top: 10%;\n  }\n\n  &.active {\n    border-color: ", ";\n    background: ", ";\n\n    &:after {\n      background: ", ";\n      right: 3px;\n    }\n  }\n"], ["\n  border: ", ";\n  width: 3em;\n  height: 1.8em;\n  border-radius: 10px;\n  position: relative;\n  cursor: pointer;\n  transition: all 0.1s;\n  background: ", ";\n\n  &:after {\n    content: '';\n    transition: all 0.1s;\n    border-radius: 50%;\n    right: calc(13px + 1.5em);\n    width: 1.2em;\n    height: 1.2em;\n    position: absolute;\n    background: ", ";\n    right: 47%;\n    top: 10%;\n  }\n\n  &.active {\n    border-color: ", ";\n    background: ", ";\n\n    &:after {\n      background: ", ";\n      right: 3px;\n    }\n  }\n"])), (function(n) {
            return n.theme.border.base2
        }
        ), (function(n) {
            return n.theme.colors.link
        }
        ), (function(n) {
            return n.theme.colors.white
        }
        ), (function(n) {
            return n.theme.colors.modal
        }
        ), (function(n) {
            return n.theme.colors.ascent
        }
        ), (function(n) {
            return n.theme.colors.white
        }
        )), Fa = rn.ZP.div(wr || (wr = Ta(["\n  background: rgba(255, 255, 255, 0.1);\n  height: 1px;\n\n  &.marg {\n    margin: 0px 12px 8px 12px;\n  }\n"], ["\n  background: rgba(255, 255, 255, 0.1);\n  height: 1px;\n\n  &.marg {\n    margin: 0px 12px 8px 12px;\n  }\n"]))), Xa = (0,
        rn.ZP)(Ba)(Zr || (Zr = Ta(["\n  gap: ", ";\n"], ["\n  gap: ", ";\n"])), (function(n) {
            return n.theme.spacing.base2
        }
        )), Ga = rn.ZP.div(kr || (kr = Ta(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  margin-bottom: 24px;\n"], ["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  margin-bottom: 24px;\n"]))), Va = function() {
            return (Va = Object.assign || function(n) {
                for (var e, t = 1, i = arguments.length; t < i; t++)
                    for (var o in e = arguments[t])
                        Object.prototype.hasOwnProperty.call(e, o) && (n[o] = e[o]);
                return n
            }
            ).apply(this, arguments)
        }, Ka = [], Ya = function(n) {
            var e = n.label
              , t = n.value
              , i = n.guidanceCategory
              , o = "" !== i && -1 === Ka.indexOf(i);
            return o && Ka.push(i),
            (0,
            cn.BX)(cn.HY, {
                children: [o && (0,
                cn.tZ)(La, {
                    children: i
                }, "".concat(i)), (0,
                cn.BX)(Da, {
                    children: [(0,
                    cn.tZ)("span", {
                        children: e
                    }), (0,
                    cn.tZ)("span", {
                        children: t
                    })]
                }, "".concat(e, "_").concat(t))]
            })
        }, Wa = function(n) {
            var e = n.type
              , t = (0,
            gn.$)().t;
            return (0,
            cn.BX)(Na, {
                children: [(0,
                cn.tZ)("img", {
                    src: (0,
                    Tn.j)(Ea),
                    alt: "Gamepad warning"
                }), (0,
                cn.tZ)(xe.T4, {
                    style: {
                        marginTop: "10px"
                    },
                    children: t("not_supported" === e ? "sidebar.gamepadNotSupported" : "sidebar.gamepadNotDetected")
                }), (0,
                cn.tZ)(xe.kk, {
                    children: t("not_supported" === e ? "sidebar.gamepadNotSupportedInfo" : "sidebar.gamepadNotDetectedInfo")
                })]
            })
        }, qa = {}, Qa = function(n) {
            var e = n.className
              , t = (0,
            gn.$)().t
              , i = (0,
            V.useState)(null)
              , o = i[0]
              , r = i[1]
              , a = (0,
            V.useState)(!!Kt.gamepad)
              , l = a[0]
              , d = a[1]
              , c = (0,
            V.useState)([])
              , s = c[0]
              , u = c[1]
              , p = (0,
            V.useState)(null)
              , f = p[0]
              , h = p[1]
              , g = (0,
            V.useState)(!1)
              , m = g[0]
              , x = g[1]
              , v = (0,
            V.useState)(!1)
              , b = v[0]
              , y = v[1]
              , w = (0,
            V.useState)([])
              , Z = w[0]
              , k = w[1]
              , A = (0,
            J.v9)((function(n) {
                return n.imap.isActive
            }
            ))
              , P = (0,
            J.v9)((function(n) {
                return n.imap.initialized
            }
            ))
              , S = (0,
            J.v9)((function(n) {
                return n.imap.guideVisible
            }
            ))
              , E = (0,
            J.v9)((function(n) {
                return n.preferences.imapOverlay
            }
            ))
              , C = (0,
            J.v9)((function(n) {
                return n.preferences.legacyControls
            }
            ))
              , T = (0,
            J.v9)((function(n) {
                return n.preferences.imapScheme
            }
            ))
              , I = (0,
            J.v9)((function(n) {
                return n.ads.adsEnded
            }
            ))
              , O = W.ZP.features.nativeControlsList.length > 0
              , j = W.ZP.features.shiftLock
              , D = !("boolean" === typeof W.ZP.features.nativeMouse && !W.ZP.features.nativeMouse)
              , L = (0,
            J.I0)()
              , z = function(n) {
                Z.forEach((function(e) {
                    if (e.Type === Nt.x_.Pan && (b ? e.KeyStartStop_alt1 : e.KeyStartStop)) {
                        var i = b ? e.KeyStartStop_alt1 : e.KeyStartStop;
                        !qa[i] && n && Mt.ZP.showLookAroundToasts && ((0,
                        na.Am)((0,
                        cn.BX)(cn.HY, {
                            children: [t("overlay.look"), " ", (0,
                            cn.tZ)("kbd", {
                                children: xa(i)
                            }), " ", t("overlay.tip2")]
                        }), $.dO),
                        qa[i] = !0)
                    }
                    if (e.Type === Nt.x_.FreeLook && (b ? e.Key_alt1 : e.Key)) {
                        i = b ? e.Key_alt1 : e.Key;
                        !qa[i] && n && Mt.ZP.showLookAroundToasts && ((0,
                        na.Am)((0,
                        cn.BX)(cn.HY, {
                            children: [t("overlay.klook"), " ", (0,
                            cn.tZ)("kbd", {
                                children: xa(i)
                            }), " ", t("overlay.tip2")]
                        }), $.dO),
                        Mt.ZP.showLookAroundToasts = !1,
                        qa[i] = !0)
                    }
                }
                ))
            }
              , M = function() {
                Ka = [],
                D || C || L({
                    type: vo.Z.LEGACY_CONTROLS
                })
            };
            (0,
            V.useEffect)((function() {
                var n = function(n) {
                    var e = n.detail;
                    L({
                        type: fa.Z.IMAP_STATUS,
                        payload: {
                            initialized: !0
                        }
                    }),
                    r(e);
                    var t = W.ZP.features.nativeControlsList;
                    "object" !== typeof t || t.length || L({
                        type: vo.Z.SET_LEGACY_CONTROLS,
                        payload: {
                            legacyControls: !0
                        }
                    })
                }
                  , e = function() {
                    L({
                        type: fa.Z.IMAP_STATUS,
                        payload: {
                            initialized: !1
                        }
                    }),
                    r(null)
                }
                  , t = function(n) {
                    var e = n.detail;
                    d(!!e)
                };
                return window.addEventListener(Nt.UD, n),
                window.addEventListener(Nt.u5, e),
                window.addEventListener(Nt.eT, t),
                function() {
                    window.removeEventListener(Nt.eT, t),
                    window.removeEventListener(Nt.UD, n),
                    window.removeEventListener(Nt.u5, e)
                }
            }
            ), []),
            (0,
            V.useEffect)((function() {
                var n = null === o || void 0 === o ? void 0 : o.ControlSchemes.some((function(n) {
                    var e = n.Name
                      , t = n.Selected;
                    return e === T && t
                }
                ));
                if (o && !n) {
                    var e = o.ControlSchemes.find((function(n) {
                        return n.Name === T
                    }
                    ));
                    if (e) {
                        var t = o.ControlSchemes.map((function(n) {
                            return n.Name === e.Name ? Va(Va({}, n), {
                                Selected: !0
                            }) : Va(Va({}, n), {
                                Selected: !1
                            })
                        }
                        ))
                          , i = Va(Va({}, o), {
                            ControlSchemes: t
                        });
                        Mt.ZP.loadCfg(i),
                        r(i),
                        h({
                            label: e.Name,
                            value: e.Name
                        })
                    }
                }
            }
            ), [T, o]),
            (0,
            V.useEffect)((function() {
                z(C)
            }
            ), [Z]),
            (0,
            V.useEffect)((function() {
                M();
                var n = null === o || void 0 === o ? void 0 : o.ControlSchemes;
                if (n && n.forEach((function(n) {
                    if (n.Selected) {
                        x(n.isGamepadControlsPresent),
                        Kt.setActiveSchemeHasGamepad(n.isGamepadControlsPresent);
                        var e = n.GameControls;
                        e && k(e)
                    }
                }
                )),
                null === o || void 0 === o ? void 0 : o.ControlSchemes) {
                    var e = null === o || void 0 === o ? void 0 : o.ControlSchemes.reduce((function(n, e) {
                        var t = {
                            label: e.Name,
                            value: e.Name
                        };
                        return n.push(t),
                        e.Selected && h(t),
                        n
                    }
                    ), []);
                    e && u(e)
                }
            }
            ), [o, b]),
            (0,
            V.useEffect)((function() {
                M(),
                en.Z.dispatch({
                    type: xn.Z.SET_SENSITIVITY_POPUP,
                    payload: {
                        isSensitivityPopupOpen: !1
                    }
                })
            }
            ), [S]);
            return (0,
            cn.BX)(cn.HY, {
                children: [I && A && P && (0,
                cn.tZ)(Sa, {
                    gameControls: Z,
                    isGamepadview: b
                }), P && (0,
                cn.BX)(Ia, {
                    className: "".concat(S ? "" : "hide", " ").concat(e),
                    children: [(0,
                    cn.BX)(Oa, {
                        children: [(0,
                        cn.BX)("div", {
                            className: "sidebar-heading",
                            children: [(0,
                            cn.tZ)(Qe.Z, {
                                className: "\n                ".concat(l ? "" : "null", "\n              "),
                                style: {
                                    fontSize: "21px",
                                    paddingLeft: "0",
                                    paddingRight: "10px",
                                    pointerEvents: "none"
                                },
                                size: 18,
                                name: "gamepad"
                            }), (0,
                            cn.tZ)(xe.TZ, {
                                children: t("controls.title")
                            })]
                        }), (0,
                        cn.tZ)(Qe.Z, {
                            style: {
                                cursor: "pointer"
                            },
                            id: "game-controls-cross",
                            onClick: function() {
                                M(),
                                L({
                                    type: fa.Z.TOGGLE_SIDEBAR
                                })
                            },
                            size: 18,
                            name: "cross-thin"
                        })]
                    }), (O && D || j) && (0,
                    cn.BX)(Xa, {
                        children: [(0,
                        cn.BX)(Ua, {
                            children: [(0,
                            cn.tZ)(Ra, {
                                className: "".concat(C ? "dim" : ""),
                                children: t("sidebar.nativeTitle")
                            }), (0,
                            cn.tZ)(Ha, {
                                className: "".concat(C ? "active" : ""),
                                onClick: function() {
                                    return function() {
                                        M();
                                        var n = en.Z.getState().play
                                          , e = n.nativeMouseEnabled
                                          , t = n.shiftLockActive;
                                        (0,
                                        mn.L9)($.S5, {
                                            element: "ControlScheme",
                                            state: "".concat(C ? "Native" : null === f || void 0 === f ? void 0 : f.label),
                                            robloxExperience: en.Z.getState().play.robloxExperienceId
                                        }),
                                        L({
                                            type: vo.Z.LEGACY_CONTROLS
                                        }),
                                        e && C ? (0,
                                        vn.Jj)(!1) : ((0,
                                        vn.DA)(),
                                        L({
                                            type: xn.Z.ROBLOX_TOAST,
                                            payload: {
                                                robloxToast: !1
                                            }
                                        }),
                                        z(!0)),
                                        (0,
                                        Q.Ul)(),
                                        C && t && (en.Z.dispatch({
                                            type: xn.Z.UPDATE_SHIFT_LOCK
                                        }),
                                        (0,
                                        mn.L9)($.S5, {
                                            element: "ShiftLock",
                                            state: "Disabled",
                                            robloxExperience: en.Z.getState().play.robloxExperienceId
                                        }))
                                    }()
                                }
                            }), (0,
                            cn.tZ)(Ra, {
                                className: "".concat(C ? "" : "dim"),
                                children: t("sidebar.legacyTitle")
                            })]
                        }), (0,
                        cn.tZ)(Fa, {}), (0,
                        cn.tZ)(Ra, {
                            className: "dim",
                            children: t(C ? "sidebar.legacyInfo" : "sidebar.nativeInfo")
                        })]
                    }), C && (0,
                    cn.BX)(_a, {
                        className: "".concat(E ? "active" : ""),
                        children: [(0,
                        cn.tZ)(Ra, {
                            children: t("sidebar.onscreenControls")
                        }), (0,
                        cn.tZ)("span", {
                            onClick: function() {
                                return (0,
                                mn.L9)($.S5, {
                                    element: "OnScreenControls",
                                    state: "".concat(E ? "Disabled" : "Enabled"),
                                    robloxExperience: en.Z.getState().play.robloxExperienceId
                                }),
                                void L((0,
                                Ca.i)({
                                    imapOverlay: !E
                                }))
                            }
                        })]
                    }), (null === s || void 0 === s ? void 0 : s.length) > 1 && f && (0,
                    cn.BX)(Ba, {
                        children: [(0,
                        cn.tZ)(Ra, {
                            children: t("sidebar.controlSchemes")
                        }), (0,
                        cn.tZ)(pa.ZP, {
                            value: f,
                            options: s,
                            onChange: function(n) {
                                (null === n || void 0 === n ? void 0 : n.value) && n.value !== (null === f || void 0 === f ? void 0 : f.value) && L((0,
                                Ca.i)({
                                    imapScheme: n.value
                                }))
                            },
                            className: "select-container",
                            classNamePrefix: "select"
                        })]
                    }), (0,
                    cn.BX)(za, {
                        children: [(0,
                        cn.BX)(Ma, {
                            className: "".concat(b ? "" : "active"),
                            onClick: function() {
                                return y(!1)
                            },
                            children: [(0,
                            cn.tZ)(Qe.Z, {
                                name: "keyboard"
                            }), t("sidebar.keyboard")]
                        }), (0,
                        cn.BX)(Ma, {
                            className: "".concat(b ? "active" : ""),
                            onClick: function() {
                                return y(!0)
                            },
                            children: [(0,
                            cn.tZ)(Qe.Z, {
                                name: "gamepad"
                            }), t("sidebar.gamepad")]
                        })]
                    }), b && (!m || !C || m && !l && C) && (0,
                    cn.tZ)(Wa, {
                        type: m && C ? "null" : "not_supported"
                    }), (b && m && l || !b) && (0,
                    cn.BX)(ua.Z, {
                        autoHide: !1,
                        style: {
                            maxHeight: "calc(100vh - 384px)",
                            borderBottomLeftRadius: "4px",
                            borderBottomRightRadius: "4px"
                        },
                        children: [(C || !j && (!O || !D)) && (0,
                        cn.BX)(ja, {
                            children: [function() {
                                M()
                            }
                            , null === Z || void 0 === Z ? void 0 : Z.map((function(n) {
                                var e = n.Guidance
                                  , t = b ? "_alt1" : "";
                                switch (n.Type) {
                                case Nt.x_.FreeLook:
                                    return n.KeyDown || n.KeyRight || n.KeyUp || n.KeyLeft || t ? (0,
                                    cn.BX)(cn.HY, {
                                        children: [e.Key && (0,
                                        cn.tZ)(Ya, {
                                            label: e.Key,
                                            value: xa(n["Key".concat(t)]),
                                            guidanceCategory: n.GuidanceCategory
                                        }), e.KeyDown && (0,
                                        cn.tZ)(Ya, {
                                            label: e.KeyDown,
                                            value: xa(n["KeyDown".concat(t)]),
                                            guidanceCategory: n.GuidanceCategory
                                        }), e.KeyUp && (0,
                                        cn.tZ)(Ya, {
                                            label: e.KeyUp,
                                            value: xa(n["KeyUp".concat(t)]),
                                            guidanceCategory: n.GuidanceCategory
                                        }), e.KeyRight && (0,
                                        cn.tZ)(Ya, {
                                            label: e.KeyRight,
                                            value: xa(n["KeyRight".concat(t)]),
                                            guidanceCategory: n.GuidanceCategory
                                        }), e.KeyLeft && (0,
                                        cn.tZ)(Ya, {
                                            label: e.KeyLeft,
                                            value: xa(n["KeyLeft".concat(t)]),
                                            guidanceCategory: n.GuidanceCategory
                                        })]
                                    }) : null;
                                case Nt.x_.Pan:
                                    return n.KeyAction || n.KeyStartStop || t ? (0,
                                    cn.BX)(cn.HY, {
                                        children: [e.KeyAction && n["KeyAction".concat(t)] && (0,
                                        cn.tZ)(Ya, {
                                            label: xa(n["KeyAction".concat(t)]),
                                            value: "MouseLButton",
                                            guidanceCategory: n.GuidanceCategory
                                        }), e.KeyLookAround && n["KeyLookAround".concat(t)] && (0,
                                        cn.tZ)(Ya, {
                                            label: e.KeyLookAround || "Pan",
                                            value: xa(n["KeyLookAround".concat(t)]),
                                            guidanceCategory: n.GuidanceCategory
                                        }), e.KeyStartStop && n["KeyStartStop".concat(t)] && (0,
                                        cn.tZ)(Ya, {
                                            label: e.KeyStartStop,
                                            value: xa(n["KeyStartStop".concat(t)]),
                                            guidanceCategory: n.GuidanceCategory
                                        }), e.KeySuspend && n["KeySuspend".concat(t)] && (0,
                                        cn.tZ)(Ya, {
                                            label: e.KeySuspend,
                                            value: xa(n["KeySuspend".concat(t)]),
                                            guidanceCategory: n.GuidanceCategory
                                        })]
                                    }) : null;
                                case Nt.x_.Dpad:
                                    return n.KeyDown || n.KeyUp || n.KeyRight || n.KeyLeft || t ? (0,
                                    cn.BX)(cn.HY, {
                                        children: [e.DpadTitle && (0,
                                        cn.tZ)(Ya, {
                                            label: e.DpadTitle,
                                            value: "".concat(xa(n["KeyUp".concat(t)]), "\n                                  ").concat(xa(n["KeyLeft".concat(t)]), "\n                                  ").concat(xa(n["KeyDown".concat(t)]), "\n                                  ").concat(xa(n["KeyRight".concat(t)])),
                                            guidanceCategory: n.GuidanceCategory
                                        }), t && n.GamepadStick ? (0,
                                        cn.tZ)(Ya, {
                                            label: e.GamepadStick || "DPAD",
                                            value: n.GamepadStick,
                                            guidanceCategory: n.GuidanceCategory
                                        }) : (0,
                                        cn.BX)(cn.HY, {
                                            children: [e.KeyDown && (0,
                                            cn.tZ)(Ya, {
                                                label: e.KeyDown,
                                                value: xa(n["KeyDown".concat(t)]),
                                                guidanceCategory: n.GuidanceCategory
                                            }), e.KeyUp && (0,
                                            cn.tZ)(Ya, {
                                                label: e.KeyUp,
                                                value: xa(n["KeyUp".concat(t)]),
                                                guidanceCategory: n.GuidanceCategory
                                            }), e.KeyRight && (0,
                                            cn.tZ)(Ya, {
                                                label: e.KeyRight,
                                                value: xa(n["KeyRight".concat(t)]),
                                                guidanceCategory: n.GuidanceCategory
                                            }), e.KeyLeft && (0,
                                            cn.tZ)(Ya, {
                                                label: e.KeyLeft,
                                                value: xa(n["KeyLeft".concat(t)]),
                                                guidanceCategory: n.GuidanceCategory
                                            })]
                                        })]
                                    }) : null;
                                case Nt.x_.EdgeScroll:
                                    if ("boolean" === typeof e.EdgeScrollEnabled)
                                        return (0,
                                        cn.tZ)(Ya, {
                                            label: e.EdgeScrollEnabled,
                                            value: n.EdgeScrollEnabled ? "True" : "False",
                                            guidanceCategory: n.GuidanceCategory
                                        });
                                    break;
                                case Nt.x_.Zoom:
                                case Nt.x_.MouseZoom:
                                    return (0,
                                    cn.BX)(cn.HY, {
                                        children: [e.KeyIn && (0,
                                        cn.tZ)(Ya, {
                                            label: e.KeyIn,
                                            value: xa(n["KeyIn".concat(t)]),
                                            guidanceCategory: n.GuidanceCategory
                                        }), e.KeyOut && (0,
                                        cn.tZ)(Ya, {
                                            label: e.KeyOut,
                                            value: xa(n["KeyOut".concat(t)]),
                                            guidanceCategory: n.GuidanceCategory
                                        }), e.KeyWheel && (0,
                                        cn.tZ)(Ya, {
                                            label: e.KeyWheel,
                                            value: xa(n["KeyWheel".concat(t)]),
                                            guidanceCategory: n.GuidanceCategory
                                        })]
                                    });
                                default:
                                    if (n.Guidance.Key && (n["Key".concat(t)] || n["KeyModifier".concat(t)]))
                                        return (0,
                                        cn.tZ)(Ya, {
                                            label: n.Guidance.Key || "",
                                            value: xa(n["Key".concat(t)] || n["KeyModifier".concat(t)]),
                                            guidanceCategory: n.GuidanceCategory
                                        })
                                }
                                return null
                            }
                            ))]
                        }), !C && !b && (0,
                        cn.BX)(ja, {
                            children: [j && (0,
                            cn.BX)(Ga, {
                                children: [(0,
                                cn.tZ)(La, {
                                    children: t("sidebar.specialKey")
                                }), (0,
                                cn.tZ)(Ya, {
                                    label: "Shift Lock",
                                    value: "Shift + Q",
                                    guidanceCategory: ""
                                }), (0,
                                cn.tZ)(Fa, {
                                    className: "marg"
                                }), (0,
                                cn.tZ)(Ra, {
                                    className: "dim padd",
                                    children: t("sidebar.shiftLockInfo")
                                })]
                            }, "nativeControlBox"), W.ZP.features.nativeControlsList.map((function(n) {
                                return (0,
                                cn.BX)(cn.HY, {
                                    children: [(0,
                                    cn.tZ)(La, {
                                        children: n.key.toString()
                                    }, "".concat(n.key.toString())), n.value.map((function(n) {
                                        return (0,
                                        cn.tZ)(Ya, {
                                            label: n.key || "",
                                            value: n.value,
                                            guidanceCategory: ""
                                        })
                                    }
                                    ))]
                                })
                            }
                            ))]
                        })]
                    })]
                })]
            })
        }, Ja = t(3217), $a = t(7223), nl = function() {
            return (0,
            V.useEffect)((function() {
                !function(n, e) {
                    var t = {
                        appId: "350e2364bb18edfc4fbb2d984bc91b854",
                        popupWidget: !1,
                        onInit: function() {
                            var n = {
                                onChatWidgetOpen: function() {
                                    var n, e = en.Z.getState().play.videoRef, t = null === (n = null === e || void 0 === e ? void 0 : e.current) || void 0 === n ? void 0 : n.getBoundingClientRect(), i = document.getElementsByClassName("km-iframe-dimension-no-popup");
                                    i && i[0] && (i[0].style.left = "".concat(((null === t || void 0 === t ? void 0 : t.left) || 0) + ((null === t || void 0 === t ? void 0 : t.width) || 0) - 390, "px"),
                                    i[0].style.top = "".concat(((null === t || void 0 === t ? void 0 : t.top) || 0) + ((null === t || void 0 === t ? void 0 : t.height) || 0) - 600, "px"))
                                },
                                onChatWidgetClose: function() {
                                    var n = document.getElementsByClassName("km-iframe-dimension-no-popup");
                                    n && n[0] && (n[0].style.left = "auto",
                                    n[0].style.top = "auto")
                                }
                            };
                            window.Kommunicate.subscribeToEvents(n)
                        }
                    }
                      , i = document.createElement("script");
                    i.type = "text/javascript",
                    i.async = !0,
                    i.src = "https://widget.kommunicate.io/v2/kommunicate.app",
                    document.getElementsByTagName("head")[0].appendChild(i),
                    window.kommunicate = e,
                    e._globals = t
                }(document, window.kommunicate || {})
            }
            ), []),
            (0,
            cn.tZ)("div", {})
        }, el = {
            src: "/play/_next/static/media/down-arrow.cf293721.svg",
            height: 6,
            width: 10
        }, tl = {
            src: "/play/_next/static/media/up-arrow.4ce5e6d6.svg",
            height: 6,
            width: 10
        }, il = t(4141), ol = function(n) {
            var e = n.clicked
              , t = n.onButtonClicked;
            return (0,
            cn.tZ)(il.Hq, {
                onClick: function() {
                    return t()
                },
                children: e ? (0,
                cn.tZ)("img", {
                    alt: "",
                    src: (0,
                    Tn.j)(tl),
                    width: "14",
                    height: "14"
                }) : (0,
                cn.tZ)("img", {
                    alt: "",
                    src: (0,
                    Tn.j)(el),
                    width: "14",
                    height: "14"
                })
            })
        }, rl = function(n, e) {
            return Object.defineProperty ? Object.defineProperty(n, "raw", {
                value: e
            }) : n.raw = e,
            n
        }, al = (0,
        rn.F4)(Ar || (Ar = rl(["\n    0% { opacity: 0; }\n    100% { opacity: 1; }\n"], ["\n    0% { opacity: 0; }\n    100% { opacity: 1; }\n"]))), ll = rn.ZP.div(Pr || (Pr = rl(["\n    font-family: 'Poppins', sans-serif;\n    top: 0px;\n    height:100%;\n    width:70%;\n    overflow-y: scroll;\n    position: absolute;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    padding: 48px 32px 32px;\n    gap: 40px;\n    isolation: isolate;\n    background: #111111;\n    border: 1px solid rgba(255, 255, 255, 0.1);\n    z-index: 2;\n    animation-name: ", ";\n    animation-duration: 0.3s;\n.selected-category {\n    border-radius: 4px;\n    background: linear-gradient(270deg, #7B4CFF 0%, #0EA4C5 99.48%);\n    div {\n        display:flex;\n        width:fit-content;\n        position: relative;\n        cursor: pointer;\n        padding: 8px 16px;\n        text-align:center;\n        gap: 6px;\n        align-items: center;\n        height: 34px;\n        background: #333;\n        margin: 1px;\n        border-radius: 4px;\n        font-weight: 400;\n        font-size: 12px;\n        line-height: 150%;\n        color: ", ";\n        position: relative;\n        transition: background 0.3s ease-out;\n        &:hover {\n            background: #666;\n        }\n    }\n}\n#icon-cross-thin {\n    position: absolute;\n    right: 15px;\n    top: 15px;\n    cursor:pointer;\n    color:", ";\n    transition: background 0.3s ease-out;\n    padding: 5px;\n    border-radius: 50%;\n\n    &:hover{\n        background: rgba(255, 255, 255, 0.1);\n    }\n\n}\n.trending-section{\n    margin-top:10%;\n    margin-left:5%;\n}\n.genre-list{\n    display: flex;\n    list-style-type:none;\n    flex-wrap: wrap;\n    justify-content: center;\n    align-items:center;\n    gap: 10px;\n    padding: 0;\n    .genre-list-item{\n        flex-basis: fit-content;\n        position: relative;\n        cursor: pointer;\n        padding: 8px 16px;\n        text-align:center;\n        gap: 4px;\n        height: 34px;\n        background: rgba(255, 255, 255, 0.1);\n        border-radius: 4px;\n        font-family: 'Poppins';\n        font-style: normal;\n        font-weight: 400;\n        font-size: 12px;\n        line-height: 150%;\n        color: ", ";\n        transition: background 0.3s ease-out;\n        &:hover{\n            background: rgba(255, 255, 255, 0.3);\n        }\n    }\n}\n"], ["\n    font-family: 'Poppins', sans-serif;\n    top: 0px;\n    height:100%;\n    width:70%;\n    overflow-y: scroll;\n    position: absolute;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    padding: 48px 32px 32px;\n    gap: 40px;\n    isolation: isolate;\n    background: #111111;\n    border: 1px solid rgba(255, 255, 255, 0.1);\n    z-index: 2;\n    animation-name: ", ";\n    animation-duration: 0.3s;\n.selected-category {\n    border-radius: 4px;\n    background: linear-gradient(270deg, #7B4CFF 0%, #0EA4C5 99.48%);\n    div {\n        display:flex;\n        width:fit-content;\n        position: relative;\n        cursor: pointer;\n        padding: 8px 16px;\n        text-align:center;\n        gap: 6px;\n        align-items: center;\n        height: 34px;\n        background: #333;\n        margin: 1px;\n        border-radius: 4px;\n        font-weight: 400;\n        font-size: 12px;\n        line-height: 150%;\n        color: ", ";\n        position: relative;\n        transition: background 0.3s ease-out;\n        &:hover {\n            background: #666;\n        }\n    }\n}\n#icon-cross-thin {\n    position: absolute;\n    right: 15px;\n    top: 15px;\n    cursor:pointer;\n    color:", ";\n    transition: background 0.3s ease-out;\n    padding: 5px;\n    border-radius: 50%;\n\n    &:hover{\n        background: rgba(255, 255, 255, 0.1);\n    }\n\n}\n.trending-section{\n    margin-top:10%;\n    margin-left:5%;\n}\n.genre-list{\n    display: flex;\n    list-style-type:none;\n    flex-wrap: wrap;\n    justify-content: center;\n    align-items:center;\n    gap: 10px;\n    padding: 0;\n    .genre-list-item{\n        flex-basis: fit-content;\n        position: relative;\n        cursor: pointer;\n        padding: 8px 16px;\n        text-align:center;\n        gap: 4px;\n        height: 34px;\n        background: rgba(255, 255, 255, 0.1);\n        border-radius: 4px;\n        font-family: 'Poppins';\n        font-style: normal;\n        font-weight: 400;\n        font-size: 12px;\n        line-height: 150%;\n        color: ", ";\n        transition: background 0.3s ease-out;\n        &:hover{\n            background: rgba(255, 255, 255, 0.3);\n        }\n    }\n}\n"])), al, (function(n) {
            return n.theme.colors.white
        }
        ), (function(n) {
            return n.theme.colors.white
        }
        ), (function(n) {
            return n.theme.colors.white
        }
        )), dl = rn.ZP.div(Sr || (Sr = rl(["\ndisplay:flex;\nflex-direction:column;\nalign-items: center;\n"], ["\ndisplay:flex;\nflex-direction:column;\nalign-items: center;\n"]))), cl = function(n, e) {
            return Object.defineProperty ? Object.defineProperty(n, "raw", {
                value: e
            }) : n.raw = e,
            n
        }, sl = rn.ZP.header(Er || (Er = cl(["\n  border-bottom: 1px solid rgba(255, 255, 255, 0.1);\n  display: flex;\n  justify-content: space-between;\n  color: #fff;\n  padding: 0 1vw;\n  z-index: 2;\n  position: relative;\n  background: rgba(102, 102, 102, 0.2);\n  backdrop-filter: blur(12px);\n  left: 0;\n  right: 0;\n  &:before {\n    content: '';\n    background-color: rgba(11,2,35,.50);\n    position: absolute;\n    left: 0;\n    right: 0;\n    top: 0;\n    bottom: 0;\n    z-index: -1;\n  }\n  &.g-overlay:after {\n    content: '';\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    height: 1px;\n    background: linear-gradient(270deg, #7B4CFF 0%, #0EA4C5 99.48%);\n  }\n"], ["\n  border-bottom: 1px solid rgba(255, 255, 255, 0.1);\n  display: flex;\n  justify-content: space-between;\n  color: #fff;\n  padding: 0 1vw;\n  z-index: 2;\n  position: relative;\n  background: rgba(102, 102, 102, 0.2);\n  backdrop-filter: blur(12px);\n  left: 0;\n  right: 0;\n  &:before {\n    content: '';\n    background-color: rgba(11,2,35,.50);\n    position: absolute;\n    left: 0;\n    right: 0;\n    top: 0;\n    bottom: 0;\n    z-index: -1;\n  }\n  &.g-overlay:after {\n    content: '';\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    height: 1px;\n    background: linear-gradient(270deg, #7B4CFF 0%, #0EA4C5 99.48%);\n  }\n"]))), ul = rn.ZP.div(Cr || (Cr = cl(["\n  font-family: 'Poppins', sans-serif;\n  padding: 0.4vw 1.1vw;\n  display: flex;\n  cursor: pointer;\n  transition: background 0.3s ease-out;\n  align-items: center;\n  &:hover {\n    background: rgba(255, 255, 255, 0.1);\n  }\n  p {\n    margin: 0;\n    font-size: 0.8vw;\n  }\n"], ["\n  font-family: 'Poppins', sans-serif;\n  padding: 0.4vw 1.1vw;\n  display: flex;\n  cursor: pointer;\n  transition: background 0.3s ease-out;\n  align-items: center;\n  &:hover {\n    background: rgba(255, 255, 255, 0.1);\n  }\n  p {\n    margin: 0;\n    font-size: 0.8vw;\n  }\n"]))), pl = rn.ZP.ul(Tr || (Tr = cl(["\n  list-style: unstyled;\n  list-style-type: none;\n  margin: 0;\n  display: flex;\n  gap: 0.8vw;\n  padding: 0.4vw 1vw;\n"], ["\n  list-style: unstyled;\n  list-style-type: none;\n  margin: 0;\n  display: flex;\n  gap: 0.8vw;\n  padding: 0.4vw 1vw;\n"]))), fl = rn.ZP.li(Ir || (Ir = cl(["\n  display: flex;\n  align-items: center;\n  span {\n    cursor: pointer;\n    position: relative;\n    display: flex;\n    width: 3vw;\n    height: 3vw;\n    flex: 0 0 3vw;\n    border-radius: 4px;\n    background-color: rgba(11, 2, 35, .50);\n\n    &:before {\n      opacity: 0;\n      pointer-events: none;\n      content: attr(data-title);\n      position: absolute;\n      top: 110%;\n      z-index: 2;\n      text-align: center;\n      width: 250%;\n      left: -75%;\n      font-size: 0.8vw;\n      transition: all 0.3s ease-out;\n      background: #111111;\n      border: 1px solid rgba(255, 255, 255, 0.2);\n      border-radius: 4px;\n      padding: 4px 6px;\n    }\n    &:hover::before {\n      opacity: 1;\n      pointer-events: auto;\n    }\n  span:hover:after {\n    content: '';\n    position: absolute;\n    height: 8px;\n    left: 3px;\n    right: 3px;\n    bottom: -4.53px;\n    background: linear-gradient(270deg, #7B4CFF 0%, #0EA4C5 99.48%);\n    filter: blur(3.5px);\n    border-radius: 100px;\n    animation-name: ", ";\n    animation-duration: 0.3s;\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  span {\n    cursor: pointer;\n    position: relative;\n    display: flex;\n    width: 3vw;\n    height: 3vw;\n    flex: 0 0 3vw;\n    border-radius: 4px;\n    background-color: rgba(11, 2, 35, .50);\n\n    &:before {\n      opacity: 0;\n      pointer-events: none;\n      content: attr(data-title);\n      position: absolute;\n      top: 110%;\n      z-index: 2;\n      text-align: center;\n      width: 250%;\n      left: -75%;\n      font-size: 0.8vw;\n      transition: all 0.3s ease-out;\n      background: #111111;\n      border: 1px solid rgba(255, 255, 255, 0.2);\n      border-radius: 4px;\n      padding: 4px 6px;\n    }\n    &:hover::before {\n      opacity: 1;\n      pointer-events: auto;\n    }\n  span:hover:after {\n    content: '';\n    position: absolute;\n    height: 8px;\n    left: 3px;\n    right: 3px;\n    bottom: -4.53px;\n    background: linear-gradient(270deg, #7B4CFF 0%, #0EA4C5 99.48%);\n    filter: blur(3.5px);\n    border-radius: 100px;\n    animation-name: ", ";\n    animation-duration: 0.3s;\n  }\n"])), al), hl = function() {
            return (hl = Object.assign || function(n) {
                for (var e, t = 1, i = arguments.length; t < i; t++)
                    for (var o in e = arguments[t])
                        Object.prototype.hasOwnProperty.call(e, o) && (n[o] = e[o]);
                return n
            }
            ).apply(this, arguments)
        }, gl = function(n) {
            var e = n.style
              , t = n.onClick;
            return (0,
            cn.tZ)("svg", {
                style: hl({
                    width: "1.3vw",
                    marginRight: "0.5vw"
                }, e),
                onClick: t,
                xmlns: "http://www.w3.org/2000/svg",
                width: "22",
                height: "21",
                viewBox: "0 0 22 21",
                fill: "none",
                children: (0,
                cn.tZ)("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M15.812 14.8257L20.9165 19.929C21.1587 20.1712 21.1587 20.5716 20.9165 20.8137C20.7954 20.9395 20.6324 21 20.4741 21C20.3157 21 20.1527 20.9348 20.0316 20.8137L14.9272 15.7104C13.353 17.0794 11.2991 17.9082 9.05423 17.9082C4.11744 17.9082 0.0981445 13.8898 0.0981445 8.9541C0.0981445 4.0184 4.11278 0 9.05423 0C13.991 0 18.0103 4.01375 18.0103 8.9541C18.0103 11.1984 17.1813 13.2519 15.812 14.8257ZM9.04962 1.25721C4.80678 1.25721 1.35102 4.70755 1.35102 8.95411C1.35102 13.2007 4.80678 16.6557 9.04962 16.6557C13.2971 16.6557 16.7482 13.196 16.7482 8.95411C16.7482 4.7122 13.2971 1.25721 9.04962 1.25721Z",
                    fill: "white"
                })
            })
        }, ml = t(8557), xl = t(1262), vl = function(n, e, t, i) {
            return new (t || (t = Promise))((function(o, r) {
                function a(n) {
                    try {
                        d(i.next(n))
                    } catch (e) {
                        r(e)
                    }
                }
                function l(n) {
                    try {
                        d(i.throw(n))
                    } catch (e) {
                        r(e)
                    }
                }
                function d(n) {
                    var e;
                    n.done ? o(n.value) : (e = n.value,
                    e instanceof t ? e : new t((function(n) {
                        n(e)
                    }
                    ))).then(a, l)
                }
                d((i = i.apply(n, e || [])).next())
            }
            ))
        }, bl = function(n, e) {
            var t, i, o, r, a = {
                label: 0,
                sent: function() {
                    if (1 & o[0])
                        throw o[1];
                    return o[1]
                },
                trys: [],
                ops: []
            };
            return r = {
                next: l(0),
                throw: l(1),
                return: l(2)
            },
            "function" === typeof Symbol && (r[Symbol.iterator] = function() {
                return this
            }
            ),
            r;
            function l(r) {
                return function(l) {
                    return function(r) {
                        if (t)
                            throw new TypeError("Generator is already executing.");
                        for (; a; )
                            try {
                                if (t = 1,
                                i && (o = 2 & r[0] ? i.return : r[0] ? i.throw || ((o = i.return) && o.call(i),
                                0) : i.next) && !(o = o.call(i, r[1])).done)
                                    return o;
                                switch (i = 0,
                                o && (r = [2 & r[0], o.value]),
                                r[0]) {
                                case 0:
                                case 1:
                                    o = r;
                                    break;
                                case 4:
                                    return a.label++,
                                    {
                                        value: r[1],
                                        done: !1
                                    };
                                case 5:
                                    a.label++,
                                    i = r[1],
                                    r = [0];
                                    continue;
                                case 7:
                                    r = a.ops.pop(),
                                    a.trys.pop();
                                    continue;
                                default:
                                    if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === r[0] || 2 === r[0])) {
                                        a = 0;
                                        continue
                                    }
                                    if (3 === r[0] && (!o || r[1] > o[0] && r[1] < o[3])) {
                                        a.label = r[1];
                                        break
                                    }
                                    if (6 === r[0] && a.label < o[1]) {
                                        a.label = o[1],
                                        o = r;
                                        break
                                    }
                                    if (o && a.label < o[2]) {
                                        a.label = o[2],
                                        a.ops.push(r);
                                        break
                                    }
                                    o[2] && a.ops.pop(),
                                    a.trys.pop();
                                    continue
                                }
                                r = e.call(n, a)
                            } catch (l) {
                                r = [6, l],
                                i = 0
                            } finally {
                                t = o = 0
                            }
                        if (5 & r[0])
                            throw r[1];
                        return {
                            value: r[0] ? r[1] : void 0,
                            done: !0
                        }
                    }([r, l])
                }
            }
        }, yl = "TopBarRecommendation", wl = function(n) {
            var e, t, i = n.game;
            return (0,
            cn.tZ)(fl, {
                children: (0,
                cn.tZ)("span", {
                    onClick: function() {
                        var n = (0,
                        ml.wh)(null === i || void 0 === i ? void 0 : i.playPageUrl, yl);
                        (0,
                        mn.L9)($.S5, {
                            element: yl,
                            action: "Clicked",
                            packageName: i.packageName
                        }),
                        window.open(n, "_self")
                    },
                    "data-title": null === i || void 0 === i ? void 0 : i.name,
                    children: (0,
                    cn.tZ)(me.default, {
                        width: "33vw",
                        height: "33vw",
                        src: null === (t = null === (e = null === i || void 0 === i ? void 0 : i.media) || void 0 === e ? void 0 : e.desktop) || void 0 === t ? void 0 : t.icon,
                        alt: null === i || void 0 === i ? void 0 : i.gameName,
                        layout: "fill",
                        quality: 25,
                        objectFit: "contain",
                        sizes: "(max-width: 2000px) 64px, 128px",
                        loader: Tn.O
                    })
                })
            })
        }, Zl = function() {
            var n, e, t = (0,
            V.useState)(null), i = t[0], o = t[1], r = (0,
            J.v9)((function(n) {
                return n.play.showAllGamesOverlay
            }
            )), a = (0,
            J.v9)((function(n) {
                return n.play.showExploreGamesOverlay
            }
            )), l = (0,
            J.v9)((function(n) {
                return n.play.isFullscreen
            }
            )), d = (0,
            V.useRef)(null), c = (0,
            J.I0)(), s = (0,
            J.v9)((function(n) {
                return n.ads.inGameAd
            }
            )), u = (0,
            J.v9)((function(n) {
                return n.play.isHtmlGame
            }
            )), p = en.Z.getState().play.consoleFooterRef, f = (0,
            V.useState)({
                top: 0,
                left: 0,
                width: 0,
                right: 0,
                height: 0
            }), h = f[0], g = f[1], m = (0,
            J.v9)((function(n) {
                return n.play.orientation
            }
            )), x = function() {
                var n = en.Z.getState().play.videoRef;
                setTimeout((function() {
                    if (n && n.current) {
                        var e = n.current;
                        g({
                            top: null === e || void 0 === e ? void 0 : e.getBoundingClientRect().bottom,
                            width: null === e || void 0 === e ? void 0 : e.getBoundingClientRect().width,
                            left: null === e || void 0 === e ? void 0 : e.getBoundingClientRect().left,
                            right: null === e || void 0 === e ? void 0 : e.getBoundingClientRect().right,
                            height: null === e || void 0 === e ? void 0 : e.getBoundingClientRect().height
                        })
                    }
                }
                ))
            }, v = zo()(x, 100), b = function(n) {
                vl(void 0, void 0, void 0, (function() {
                    var e;
                    return bl(this, (function(t) {
                        switch (t.label) {
                        case 0:
                            return [4, (0,
                            W.Q3)(W.ZP.appInfo.appId)];
                        case 1:
                            return e = t.sent(),
                            o(e.slice(0, n === $.V ? 4 : 8)),
                            [2]
                        }
                    }
                    ))
                }
                ))
            };
            (0,
            V.useEffect)((function() {
                return u || (x(),
                window.addEventListener("resizeDone", v)),
                b(s),
                c({
                    type: xn.Z.SET_REF,
                    payload: {
                        consoleHeaderRef: d
                    }
                }),
                function() {
                    u || window.removeEventListener("resizeDone", v)
                }
            }
            ), []),
            (0,
            V.useEffect)((function() {
                b(s)
            }
            ), [s]);
            return (0,
            cn.BX)(sl, {
                ref: d,
                className: r || a ? "g-overlay" : "",
                style: {
                    opacity: l ? 0 : 1,
                    visibility: l ? "hidden" : "visible",
                    display: l ? "none" : "flex",
                    position: u || s !== $.V || m === xl.cj.portrait ? "relative" : "absolute",
                    top: u || s !== $.V || m === xl.cj.portrait ? "" : Math.max(h.top - h.height - ((null === (n = d.current) || void 0 === n ? void 0 : n.clientHeight) || 0), 90),
                    width: u || s !== $.V || m === xl.cj.portrait ? "" : ((null === (e = null === p || void 0 === p ? void 0 : p.current) || void 0 === e ? void 0 : e.clientWidth) || 0) + h.width,
                    left: u || s !== $.V || m === xl.cj.portrait ? "" : h.left,
                    paddingRight: u || s !== $.V || m === xl.cj.portrait ? "" : "0px"
                },
                children: [(0,
                cn.tZ)("link", {
                    rel: "preconnect",
                    href: "https://fonts.googleapis.com"
                }), (0,
                cn.tZ)("link", {
                    rel: "preconnect",
                    href: "https://fonts.gstatic.com",
                    crossOrigin: ""
                }), (0,
                cn.tZ)("link", {
                    href: "https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap",
                    rel: "stylesheet"
                }), (0,
                cn.tZ)(sa.Z, {
                    type: "light",
                    style: {
                        position: "static"
                    },
                    iconStyle: {
                        margin: "0.8vw"
                    }
                }), (0,
                cn.BX)(ul, {
                    style: {
                        marginRight: "auto",
                        marginLeft: "1vw",
                        background: a ? "linear-gradient(270deg, #7B4CFF 0%, #0EA4C5 99.48%)" : ""
                    },
                    onClick: function() {
                        var n = !a;
                        c({
                            type: xn.Z.MODAL_STATUS,
                            payload: {
                                showExploreGamesOverlay: n,
                                showAllGamesOverlay: !n && void 0
                            }
                        })
                    },
                    children: [(0,
                    cn.tZ)(gl, {}), (0,
                    cn.tZ)(xe.xv, {
                        children: "Search Games"
                    })]
                }), (0,
                cn.tZ)(pl, {
                    children: i && i.map((function(n) {
                        return (0,
                        cn.tZ)(wl, {
                            game: n
                        })
                    }
                    ))
                }), (0,
                cn.BX)(ul, {
                    onClick: function() {
                        var n = !r;
                        c({
                            type: xn.Z.MODAL_STATUS,
                            payload: {
                                showAllGamesOverlay: n,
                                showExploreGamesOverlay: !n && void 0
                            }
                        })
                    },
                    style: {
                        background: r ? "linear-gradient(270deg, #7B4CFF 0%, #0EA4C5 99.48%)" : ""
                    },
                    children: [(0,
                    cn.BX)("svg", {
                        width: "20px",
                        height: "20px",
                        viewBox: "0 0 20 20",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [(0,
                        cn.tZ)("rect", {
                            x: "9.5",
                            y: "10",
                            width: "7",
                            height: "7",
                            rx: "2",
                            fill: "white"
                        }), (0,
                        cn.tZ)("path", {
                            d: "M6.5 10.5C5.39231 11.6077 2.03846 14.9615 0.5 16.5M0.5 10.5L6.5 16.5",
                            stroke: "white",
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                        }), (0,
                        cn.tZ)("circle", {
                            cx: "3.5",
                            cy: "4",
                            r: "3.5",
                            fill: "white"
                        }), (0,
                        cn.tZ)("path", {
                            d: "M13.4287 1.24275C13.3384 1.09215 13.1756 1 13 1C12.8244 1 12.6616 1.09215 12.5713 1.24275L9.57125 6.24275C9.47857 6.39722 9.47615 6.58959 9.5649 6.74635C9.65365 6.9031 9.81986 7 10 7H16C16.1801 7 16.3463 6.9031 16.4351 6.74635C16.5239 6.5896 16.5214 6.39722 16.4287 6.24275L13.4287 1.24275Z",
                            stroke: "white",
                            strokeLinejoin: "round"
                        })]
                    }), (0,
                    cn.tZ)(xe.xv, {
                        style: {
                            padding: "0 0.5vw"
                        },
                        children: "All Games"
                    }), (0,
                    cn.tZ)(ol, {
                        clicked: !1,
                        onButtonClicked: function() {}
                    })]
                })]
            })
        }, kl = function(n, e) {
            return Object.defineProperty ? Object.defineProperty(n, "raw", {
                value: e
            }) : n.raw = e,
            n
        }, Al = function(n) {
            return "\n  &:before {\n    content: '".concat(n, "';\n    position: absolute;\n    z-index: 2;\n    background: #111111;\n    text-align: center;\n    width: auto;\n    right: 114%;\n    font-size: 0.8vw;\n    line-height: 1.4;\n    padding: 0.2vw 0.4vw;\n    display: none;\n    border: 1px solid rgba(255, 255, 255, 0.2);\n    border-radius: 4px;\n    white-space: nowrap;\n  }\n\n  &:hover::before {\n    display: block;\n  }\n")
        }, Pl = rn.ZP.div(Or || (Or = kl(["\n  font-family: 'Poppins',sans-serif;\n  display: flex;\n  padding: 0.7vw 0.2vw;\n  position: absolute;\n  left: 0;\n  color: #ffffff;\n  background: rgba(102, 102, 102, 0.2);\n  backdrop-filter: blur(12px);\n  justify-content: space-between;\n  border: 1px solid rgba(255, 255, 255, 0.2);\n"], ["\n  font-family: 'Poppins',sans-serif;\n  display: flex;\n  padding: 0.7vw 0.2vw;\n  position: absolute;\n  left: 0;\n  color: #ffffff;\n  background: rgba(102, 102, 102, 0.2);\n  backdrop-filter: blur(12px);\n  justify-content: space-between;\n  border: 1px solid rgba(255, 255, 255, 0.2);\n"]))), Sl = rn.ZP.div(jr || (jr = kl(["\n  display: flex;\n  align-items: center;\n  gap: 10px;\n"], ["\n  display: flex;\n  align-items: center;\n  gap: 10px;\n"]))), El = rn.ZP.span(Dr || (Dr = kl(["\n  width: 40px;\n  height: 40px;\n  position: relative;\n"], ["\n  width: 40px;\n  height: 40px;\n  position: relative;\n"]))), Cl = rn.ZP.div(Lr || (Lr = kl(["\n  display: flex;\n  flex-direction: ", ";\n  > button {\n    margin: 0.2vw 0.4vw;\n    &:hover {\n      background-color:  rgba(255, 255, 255, 0.2);\n    }\n    i {\n      padding: 0.3vw;\n    }\n  }\n  #ng-support {\n    ", "\n  }\n  #ng-controls {\n    ", "\n  }\n  #ng-fs {\n    ", "\n  }\n  .mouse-sensitivity {\n  ", "\n   }\n  button > #ng-sensitivity + div {\n    top: ", ";\n    border-radius: 4px;\n    background: #111111;\n    right:", ";\n\n    > h3 {\n      @media screen  and (max-width: 2375px){\n        font-size: 0.9vw;\n      }\n    }\n    #sensitivity-slider {\n      accent-color: #7B4CFF;\n    }\n    #sensitivity-box{\n      background: rgba(255, 255, 255, 0.1);\n      border-radius: 4px;\n    }\n  }\n  button#ng-sound {\n    > #volume-slider {\n      top: ", ";\n      left: calc(50% - 16px);\n      transform-origin: top left;\n      transform:", ";\n    }\n    input {\n      accent-color: #7B4CFF;\n    }\n    &:hover::before {\n      bottom:", ";\n      top: unset;\n      height: 192px;\n      left: 0;\n      width: 100%;\n      background: #111111;\n      transform:", ";\n      transform-origin:", ";\n    }\n  }\n  #ng-profile {\n    ", "\n\n    > div {\n      > img {\n        // width: 2.4vw;\n        // height: 2.4vw;\n      }\n    }\n  }\n"], ["\n  display: flex;\n  flex-direction: ", ";\n  > button {\n    margin: 0.2vw 0.4vw;\n    &:hover {\n      background-color:  rgba(255, 255, 255, 0.2);\n    }\n    i {\n      padding: 0.3vw;\n    }\n  }\n  #ng-support {\n    ", "\n  }\n  #ng-controls {\n    ", "\n  }\n  #ng-fs {\n    ", "\n  }\n  .mouse-sensitivity {\n  ", "\n   }\n  button > #ng-sensitivity + div {\n    top: ", ";\n    border-radius: 4px;\n    background: #111111;\n    right:", ";\n\n    > h3 {\n      @media screen  and (max-width: 2375px){\n        font-size: 0.9vw;\n      }\n    }\n    #sensitivity-slider {\n      accent-color: #7B4CFF;\n    }\n    #sensitivity-box{\n      background: rgba(255, 255, 255, 0.1);\n      border-radius: 4px;\n    }\n  }\n  button#ng-sound {\n    > #volume-slider {\n      top: ", ";\n      left: calc(50% - 16px);\n      transform-origin: top left;\n      transform:", ";\n    }\n    input {\n      accent-color: #7B4CFF;\n    }\n    &:hover::before {\n      bottom:", ";\n      top: unset;\n      height: 192px;\n      left: 0;\n      width: 100%;\n      background: #111111;\n      transform:", ";\n      transform-origin:", ";\n    }\n  }\n  #ng-profile {\n    ", "\n\n    > div {\n      > img {\n        // width: 2.4vw;\n        // height: 2.4vw;\n      }\n    }\n  }\n"])), (function(n) {
            return n.showActionSidebar ? "column" : "row"
        }
        ), Al("Help & Support"), Al("Game Controls"), Al("Full Screen"), Al("Mouse sensitivity"), (function(n) {
            return n.showActionSidebar ? "-12px" : "-60px"
        }
        ), (function(n) {
            return n.showActionSidebar ? "100%" : ""
        }
        ), (function(n) {
            return n.showActionSidebar ? "100%" : "-5%"
        }
        ), (function(n) {
            return n.showActionSidebar ? "rotate(180deg)" : ""
        }
        ), (function(n) {
            return n.showActionSidebar ? "100%" : "0"
        }
        ), (function(n) {
            return n.showActionSidebar ? "rotate(-90deg)" : ""
        }
        ), (function(n) {
            return n.showActionSidebar ? "bottom right" : ""
        }
        ), Al("Profile")), Tl = function() {
            return (Tl = Object.assign || function(n) {
                for (var e, t = 1, i = arguments.length; t < i; t++)
                    for (var o in e = arguments[t])
                        Object.prototype.hasOwnProperty.call(e, o) && (n[o] = e[o]);
                return n
            }
            ).apply(this, arguments)
        }, Il = function(n) {
            var e, t = n.style, i = void 0 === t ? {} : t, o = (0,
            V.useRef)(null), r = (0,
            J.I0)(), a = (0,
            J.v9)((function(n) {
                return n.play.consoleHeaderRef
            }
            )), l = (0,
            J.v9)((function(n) {
                return n.ads.inGameAd
            }
            )), d = (0,
            J.v9)((function(n) {
                return n.play.isHtmlGame
            }
            )), c = (0,
            J.v9)((function(n) {
                return n.play.isSensitivityPopupOpen
            }
            )), s = (0,
            J.v9)((function(n) {
                return n.play.orientation
            }
            )), u = (0,
            V.useState)({
                top: 0,
                left: 0,
                width: 0,
                right: 0,
                height: 0
            }), p = u[0], f = u[1], h = zo()((function() {
                setTimeout((function() {
                    var n = en.Z.getState().play.videoRef;
                    if (n && n.current) {
                        var e = n.current;
                        f({
                            top: null === e || void 0 === e ? void 0 : e.getBoundingClientRect().bottom,
                            width: null === e || void 0 === e ? void 0 : e.getBoundingClientRect().width,
                            left: null === e || void 0 === e ? void 0 : e.getBoundingClientRect().left,
                            right: null === e || void 0 === e ? void 0 : e.getBoundingClientRect().right,
                            height: null === e || void 0 === e ? void 0 : e.getBoundingClientRect().height
                        })
                    }
                }
                ))
            }
            ), 100);
            return (0,
            V.useEffect)((function() {
                return h(),
                window.addEventListener("resizeDone", h),
                r({
                    type: xn.Z.SET_REF,
                    payload: {
                        consoleFooterRef: o
                    }
                }),
                function() {
                    window.removeEventListener("resizeDone", h)
                }
            }
            ), []),
            (0,
            V.useEffect)((function() {
                var n = function(n) {
                    var e = n.target;
                    "js-game-video" === (null === e || void 0 === e ? void 0 : e.id) && c && r({
                        type: xn.Z.SET_SENSITIVITY_POPUP,
                        payload: {
                            isSensitivityPopupOpen: !1
                        }
                    })
                };
                return window.addEventListener("pointerdown", n),
                function() {
                    window.removeEventListener("pointerdown", n)
                }
            }
            ), [c]),
            (0,
            cn.BX)(Pl, {
                ref: o,
                className: "footer",
                style: Tl({
                    top: s === xl.cj.portrait ? "0px" : d || l !== $.V ? p.top - ((null === (e = null === a || void 0 === a ? void 0 : a.current) || void 0 === e ? void 0 : e.clientHeight) || 0) : p.top - p.height,
                    width: (0,
                    ml.hu)() ? "auto" : p.width,
                    height: (0,
                    ml.hu)() ? p.height : "auto",
                    left: (0,
                    ml.hu)() ? p.right : p.left,
                    flexDirection: (0,
                    ml.hu)() ? "column" : "row"
                }, i),
                children: [(!(0,
                ml.hu)() || d) && (0,
                cn.BX)(Sl, {
                    children: [(0,
                    cn.tZ)(El, {
                        children: (0,
                        cn.tZ)(me.default, {
                            src: W.ZP.appInfo.media.icon,
                            alt: W.ZP.appInfo.appName,
                            layout: "fill",
                            sizes: "(max-width: 2000px) 64px, 128px",
                            loader: Tn.O
                        })
                    }), (0,
                    cn.tZ)(xe.xv, {
                        style: {
                            margin: 0
                        },
                        children: W.ZP.appInfo.appName
                    })]
                }), (0,
                cn.tZ)(Cl, {
                    showActionSidebar: (0,
                    ml.hu)(),
                    style: (0,
                    ml.hu)() ? {
                        height: "100%",
                        justifyContent: "space-between"
                    } : {},
                    children: (0,
                    cn.tZ)($a.pV, {
                        widget: !1
                    })
                })]
            })
        }, Ol = t(3978), jl = {
            src: "/play/_next/static/media/placeholder-image.5ebe960e.jpg",
            height: 310,
            width: 230,
            blurDataURL: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgABgMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABgEBAQAAAAAAAAAAAAAAAAAABAX/2gAMAwEAAhADEAAAAIMUCf/EABwQAAEDBQAAAAAAAAAAAAAAAAEABBECIjNBYf/aAAgBAQABPwBsyDinETsibZ4F/8QAFhEBAQEAAAAAAAAAAAAAAAAAAQAC/9oACAECAQE/ADIF/8QAGhEBAAEFAAAAAAAAAAAAAAAAAQIAAwQRkf/aAAgBAwEBPwCeRcJOk4V//9k="
        }, Dl = function(n, e) {
            return Object.defineProperty ? Object.defineProperty(n, "raw", {
                value: e
            }) : n.raw = e,
            n
        }, Ll = rn.ZP.ul(zr || (zr = Dl(['\ndisplay: flex;\nflex-wrap: wrap;\npadding:0;\ngap: 20px;\nmargin: 16px 0px 16px 0px;\nlist-style: none;\n&::after{\n    content: "";\n    flex-basis: 144px;\n}\n'], ['\ndisplay: flex;\nflex-wrap: wrap;\npadding:0;\ngap: 20px;\nmargin: 16px 0px 16px 0px;\nlist-style: none;\n&::after{\n    content: "";\n    flex-basis: 144px;\n}\n']))), zl = rn.ZP.span(Mr || (Mr = Dl(["\n  object-fit: cover;\n  max-width: 100%;\n  width: ", ";\n  height: ", ";\n  margin-top: ", ';\n  vertical-align: middle;\n  border-radius: 5px;\n  margin-bottom: 4px;\n  position: relative;\n  overflow: hidden;\n  background-color: rgba(11,2,35,.50);\n  background-image: url("', "", '");\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n'], ["\n  object-fit: cover;\n  max-width: 100%;\n  width: ", ";\n  height: ", ";\n  margin-top: ", ';\n  vertical-align: middle;\n  border-radius: 5px;\n  margin-bottom: 4px;\n  position: relative;\n  overflow: hidden;\n  background-color: rgba(11,2,35,.50);\n  background-image: url("', "", '");\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n'])), (function(n) {
            return "vertical" === n.tileType ? "100%" : "128px"
        }
        ), (function(n) {
            return "vertical" === n.tileType ? "220px" : "128px"
        }
        ), (function(n) {
            return "vertical" === n.tileType ? "" : "2px"
        }
        ), W.HS.prefix, (null === jl || void 0 === jl ? void 0 : jl.src) || ""), Ml = rn.ZP.li(Nr || (Nr = Dl(["\n  flex-basis: ", ";\n  position: relative;\n  cursor: pointer;\n  height:", ";\n  width: ", ";\n  display: flex;\n  flex-direction: column;\n  align-items:center;\n  padding:", ";\n  background:", ";\n  border-radius: 8px;\n  .game-info-tooltip{\n    flex-direction: column;\n    z-index:1;\n    &:before {\n      content: '';\n    }\n  }\n  &:before {\n    content: '';\n    bottom: -8.5px;\n    background: linear-gradient(270deg, #7B4CFF 0%, #0EA4C5 99.48%);\n    filter: blur(8px);\n    position: absolute;\n    height: 12px;\n    width: 84%;\n    border-radius: 50%;\n    z-index: -1;\n    opacity: 0;\n    pointer-events: none;\n  }\n  &:after {\n    position: absolute;\n    content: '';\n    opacity: 0;\n    top: -1px;\n    bottom: -1px;\n    left: -1px;\n    right: -1px;\n    z-index: -1;\n    border-radius: 8px;\n    background: linear-gradient(90.54deg, #7B4CFF 0.72%, #0EA4C5 99.92%);\n  }\n    &:hover{\n      .game-info-tooltip{\n        display: flex;\n      }\n\n      ", "\n    }\n  .app-name{\n    text-overflow: ellipsis;\n    overflow: hidden;\n    display: -webkit-box;\n    -webkit-line-clamp: 2;\n    -webkit-box-orient: vertical;\n    white-space: normal;\n    color: #FFFFFF;\n    margin-top: 4px;\n    text-transform: inherit;\n    width: 100%;\n  }\n  .app-name-overlay{\n    font-family: 'Poppins';\n    padding: 32px 12px 6px 12px;\n  }\n\n  .play-btn-overlay{\n    background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.9) 41.67%);\n    width: 100%;\n    height: fit-content;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    button p {\n      margin: 0;\n    }\n  }\n\n  .playing-overlay{\n    position:absolute;\n    font-family:Poppins;\n    top:30%;\n    left:50%;\n    transform:translate(-50%,-15%);\n    padding: 6px 16px;\n    color:", ";\n    background: rgba(17, 17, 17, 0.7);\n    backdrop-filter: blur(12px);\n    border-radius: 24px;\n  }\n  .overlay-hue{\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    top: 0;\n    left: 0;\n    display:none;\n    color: #fff;\n    border-radius: 5px;\n    align-items: center;\n    flex-direction:column;\n    justify-content: end;\n    overflow: hidden;\n  }\n"], ["\n  flex-basis: ", ";\n  position: relative;\n  cursor: pointer;\n  height:", ";\n  width: ", ";\n  display: flex;\n  flex-direction: column;\n  align-items:center;\n  padding:", ";\n  background:", ";\n  border-radius: 8px;\n  .game-info-tooltip{\n    flex-direction: column;\n    z-index:1;\n    &:before {\n      content: '';\n    }\n  }\n  &:before {\n    content: '';\n    bottom: -8.5px;\n    background: linear-gradient(270deg, #7B4CFF 0%, #0EA4C5 99.48%);\n    filter: blur(8px);\n    position: absolute;\n    height: 12px;\n    width: 84%;\n    border-radius: 50%;\n    z-index: -1;\n    opacity: 0;\n    pointer-events: none;\n  }\n  &:after {\n    position: absolute;\n    content: '';\n    opacity: 0;\n    top: -1px;\n    bottom: -1px;\n    left: -1px;\n    right: -1px;\n    z-index: -1;\n    border-radius: 8px;\n    background: linear-gradient(90.54deg, #7B4CFF 0.72%, #0EA4C5 99.92%);\n  }\n    &:hover{\n      .game-info-tooltip{\n        display: flex;\n      }\n\n      ", "\n    }\n  .app-name{\n    text-overflow: ellipsis;\n    overflow: hidden;\n    display: -webkit-box;\n    -webkit-line-clamp: 2;\n    -webkit-box-orient: vertical;\n    white-space: normal;\n    color: #FFFFFF;\n    margin-top: 4px;\n    text-transform: inherit;\n    width: 100%;\n  }\n  .app-name-overlay{\n    font-family: 'Poppins';\n    padding: 32px 12px 6px 12px;\n  }\n\n  .play-btn-overlay{\n    background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.9) 41.67%);\n    width: 100%;\n    height: fit-content;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    button p {\n      margin: 0;\n    }\n  }\n\n  .playing-overlay{\n    position:absolute;\n    font-family:Poppins;\n    top:30%;\n    left:50%;\n    transform:translate(-50%,-15%);\n    padding: 6px 16px;\n    color:", ";\n    background: rgba(17, 17, 17, 0.7);\n    backdrop-filter: blur(12px);\n    border-radius: 24px;\n  }\n  .overlay-hue{\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    top: 0;\n    left: 0;\n    display:none;\n    color: #fff;\n    border-radius: 5px;\n    align-items: center;\n    flex-direction:column;\n    justify-content: end;\n    overflow: hidden;\n  }\n"])), (function(n) {
            return "vertical" === n.tileType ? "163px" : "144px"
        }
        ), (function(n) {
            return "vertical" === n.tileType ? "220px" : "184px"
        }
        ), (function(n) {
            return "vertical" === n.tileType ? "163px" : "144px"
        }
        ), (function(n) {
            return "vertical" === n.tileType ? "" : "8px"
        }
        ), (function(n) {
            return n.isCurrentGame ? "rgba(255, 255, 255, 0.1)" : ""
        }
        ), (function(n) {
            return n.isCurrentGame ? "" : "     background: #111111;\n          &:after, &:before {\n            opacity: 1;\n          }\n          .overlay-hue{\n           display:flex;\n          }"
        }
        ), (function(n) {
            return n.theme.colors.white
        }
        )), Nl = rn.ZP.button(Br || (Br = Dl(["\n  background: linear-gradient(270deg, #7B4CFF 0%, #0EA4C5 99.48%);\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.2);\n  border-radius: 6px;\n  display: flex;\n  align-items: center;\n  text-align: center;\n  padding:8px 44px 8px 44px;\n  margin-bottom:8px;\n  border:none;\n  cursor:pointer;\n\n  p{\n    font-family: 'Poppins';\n    font-style: normal;\n    font-weight: 500;\n    font-size: 12px;\n    line-height: 16px;\n    color: #FFFFFF;\n    margin-bottom:0px;\n  }\n"], ["\n  background: linear-gradient(270deg, #7B4CFF 0%, #0EA4C5 99.48%);\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.2);\n  border-radius: 6px;\n  display: flex;\n  align-items: center;\n  text-align: center;\n  padding:8px 44px 8px 44px;\n  margin-bottom:8px;\n  border:none;\n  cursor:pointer;\n\n  p{\n    font-family: 'Poppins';\n    font-style: normal;\n    font-weight: 500;\n    font-size: 12px;\n    line-height: 16px;\n    color: #FFFFFF;\n    margin-bottom:0px;\n  }\n"]))), Bl = rn.ZP.div(Rr || (Rr = Dl(["\n    background: #111111;\n    border-radius: 4px;\n    color: #FFFFFF;\n    display: none;\n    position: absolute;\n    bottom: 110%;\n    left: ", ";\n    right:", ";\n    &:after{\n      position:absolute;\n      content:'';\n      top:-2px;\n      bottom:-2px;\n      left:-2px;\n      right:-2px;\n      z-index:-1;\n      border-radius:4px;\n      background:linear-gradient(270deg, #7B4CFF 0%, #0EA4C5 99.48%);\n    }\n    &:before{\n      position: absolute;\n      content: '';\n      border-top: 10px solid #0EA4C5;\n      border-left: 10px solid transparent;\n      border-right: 10px solid transparent;\n      top: 100%;\n      left: ", ";\n      right: ", ";\n    }\n    video{\n      position:relative;\n      z-index:2;\n    }\n    .tooltip-footer{\n      background: #111111;\n      position:relative;\n      z-index:2;\n      display:flex;\n      align-items:center;\n      justify-content:center;\n      padding:10px;\n      button{\n        margin-bottom:5px;\n        padding: 10px 26px 10px 26px;\n      }\n      &:before {\n        content: '';\n        position: absolute;\n        height: 20%;\n        left: 0;\n        right: 0;\n        bottom: -20%;\n      }\n    }\n"], ["\n    background: #111111;\n    border-radius: 4px;\n    color: #FFFFFF;\n    display: none;\n    position: absolute;\n    bottom: 110%;\n    left: ", ";\n    right:", ";\n    &:after{\n      position:absolute;\n      content:'';\n      top:-2px;\n      bottom:-2px;\n      left:-2px;\n      right:-2px;\n      z-index:-1;\n      border-radius:4px;\n      background:linear-gradient(270deg, #7B4CFF 0%, #0EA4C5 99.48%);\n    }\n    &:before{\n      position: absolute;\n      content: '';\n      border-top: 10px solid #0EA4C5;\n      border-left: 10px solid transparent;\n      border-right: 10px solid transparent;\n      top: 100%;\n      left: ", ";\n      right: ", ";\n    }\n    video{\n      position:relative;\n      z-index:2;\n    }\n    .tooltip-footer{\n      background: #111111;\n      position:relative;\n      z-index:2;\n      display:flex;\n      align-items:center;\n      justify-content:center;\n      padding:10px;\n      button{\n        margin-bottom:5px;\n        padding: 10px 26px 10px 26px;\n      }\n      &:before {\n        content: '';\n        position: absolute;\n        height: 20%;\n        left: 0;\n        right: 0;\n        bottom: -20%;\n      }\n    }\n"])), (function(n) {
            return "first" === n.position ? "0" : ""
        }
        ), (function(n) {
            return "last" === n.position ? "0" : ""
        }
        ), (function(n) {
            var e = n.position;
            return "first" === e ? "0" : "last" === e ? "" : "50%"
        }
        ), (function(n) {
            var e = n.position;
            return "last" === e ? "0" : "first" === e ? "" : "50%"
        }
        ));
        function Rl(n, e) {
            var t = Object.keys(n);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(n);
                e && (i = i.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable
                }
                ))),
                t.push.apply(t, i)
            }
            return t
        }
        function _l(n) {
            for (var e = 1; e < arguments.length; e++) {
                var t = null != arguments[e] ? arguments[e] : {};
                e % 2 ? Rl(Object(t), !0).forEach((function(e) {
                    (0,
                    je.Z)(n, e, t[e])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(t)) : Rl(Object(t)).forEach((function(e) {
                    Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(t, e))
                }
                ))
            }
            return n
        }
        var Ul, Hl, Fl, Xl, Gl, Vl, Kl, Yl, Wl, ql, Ql, Jl, $l, nd, ed, td, id, od, rd, ad, ld, dd, cd, sd, ud = function(n, e) {
            var t = {};
            for (var i in n)
                Object.prototype.hasOwnProperty.call(n, i) && e.indexOf(i) < 0 && (t[i] = n[i]);
            if (null != n && "function" === typeof Object.getOwnPropertySymbols) {
                var o = 0;
                for (i = Object.getOwnPropertySymbols(n); o < i.length; o++)
                    e.indexOf(i[o]) < 0 && Object.prototype.propertyIsEnumerable.call(n, i[o]) && (t[i[o]] = n[i[o]])
            }
            return t
        }, pd = function(n) {
            var e = n.src
              , t = ud(n, ["src"])
              , i = (0,
            V.useState)(!1)
              , o = i[0]
              , r = i[1];
            return o ? null : (0,
            cn.tZ)(me.default, _l(_l({}, t), {}, {
                src: e,
                onLoadingComplete: function(n) {
                    0 === n.naturalWidth && r(!0)
                },
                onError: function() {
                    r(!0)
                },
                loader: Tn.O
            }))
        }, fd = function(n) {
            var e = n.gameList
              , t = n.tileType
              , i = void 0 === t ? "default" : t
              , o = n.element
              , r = void 0 === o ? "NA" : o
              , a = n.showTooltip
              , l = void 0 === a || a
              , d = n.media
              , c = void 0 === d ? "icon" : d
              , s = n.playCurrentGame
              , u = function(n) {
                n.id !== W.ZP.appInfo.appId ? ((0,
                mn.L9)($.S5, {
                    element: r,
                    action: "Clicked",
                    packageName: n.packageName
                }),
                window.open((0,
                ml.wh)(n.playPageUrl, r), "_self")) : s()
            }
              , p = function(n, e) {
                var t = function(n, e) {
                    var t, i = "", o = document.getElementById("browse-games-container"), r = (((null === o || void 0 === o ? void 0 : o.getBoundingClientRect().width) || 960) - 64) / 164;
                    return e % (t = r % 1 < .9 ? Math.floor(r) : Math.ceil(r)) === t - 1 && (i = "last"),
                    e % t === 0 && (i = "first"),
                    i
                }(0, e);
                return (0,
                cn.BX)(Bl, {
                    className: "game-info-tooltip",
                    position: t,
                    children: [(0,
                    cn.tZ)("video", {
                        width: "280",
                        height: "157.5",
                        autoPlay: !0,
                        muted: !0,
                        style: {
                            background: "black"
                        },
                        children: (0,
                        cn.tZ)("source", {
                            src: n.launchVideo,
                            type: "video/mp4"
                        })
                    }), (0,
                    cn.tZ)("div", {
                        className: "tooltip-footer",
                        children: (0,
                        cn.tZ)(Nl, {
                            onClick: function() {
                                return u(n)
                            },
                            children: (0,
                            cn.tZ)("p", {
                                children: (0,
                                Ol.t)("playNow")
                            })
                        })
                    })]
                })
            };
            return (0,
            cn.tZ)(Ll, {
                children: e.map((function(n, e) {
                    var t;
                    return (0,
                    cn.BX)(Ml, {
                        tileType: i,
                        isCurrentGame: n.id === W.ZP.appInfo.appId,
                        onClick: function() {
                            return u(n)
                        },
                        children: [(0,
                        cn.tZ)(zl, {
                            tileType: i,
                            children: n[c] && (0,
                            cn.tZ)(pd, {
                                src: null !== (t = n[c]) && void 0 !== t ? t : "",
                                alt: "icon",
                                layout: "fill",
                                sizes: "10vw",
                                quality: 90
                            })
                        }), n.id === W.ZP.appInfo.appId && (0,
                        cn.tZ)("div", {
                            className: "playing-overlay",
                            children: (0,
                            cn.tZ)(xe.qm, {
                                children: (0,
                                Ol.t)("playing")
                            })
                        }), "default" === i ? (0,
                        cn.tZ)(xe.xP, {
                            className: "app-name",
                            children: n.gameName
                        }) : (0,
                        cn.tZ)("div", {
                            className: "overlay-hue",
                            children: (0,
                            cn.BX)("div", {
                                className: "play-btn-overlay",
                                children: [(0,
                                cn.tZ)(xe.gd, {
                                    className: "app-name-overlay",
                                    children: n.gameName
                                }), (0,
                                cn.tZ)(Nl, {
                                    onClick: function() {
                                        return u(n)
                                    },
                                    children: (0,
                                    cn.tZ)("p", {
                                        children: (0,
                                        Ol.t)("playNow")
                                    })
                                })]
                            })
                        }), "default" === i && l && p(n, e)]
                    })
                }
                ))
            })
        }, hd = fd, gd = function(n, e) {
            return Object.defineProperty ? Object.defineProperty(n, "raw", {
                value: e
            }) : n.raw = e,
            n
        }, md = rn.ZP.div(Ul || (Ul = gd(["\n    font-family: 'Poppins', sans-serif;\n    top: 0px;\n    height:100%;\n    width:70%;\n    overflow-y: scroll;\n    position: absolute;\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    padding: 48px 32px 32px;\n    gap: 40px;\n    isolation: isolate;\n    background: rgba(17, 17, 17, 0.8);\n    backdrop-filter: blur(60px);\n    z-index: 2;\n    animation-name: ", ";\n    animation-duration: 0.3s;\n.extension-game-tile{\n    max-height: 260px;\n    padding: 12px;\n    overflow: hidden;\n    background: rgba(255, 255, 255, 0.1);\n    ul {\n        margin-top: 10px;\n    }\n}\n.icon-cross-thin{\n    position: absolute;\n    right: 15px;\n    top: 15px;\n    cursor:pointer;\n    color:", ";\n    transition: background 0.3s ease-out;\n    padding: 5px;\n    border-radius: 50%;\n\n    &:hover{\n        background: rgba(255, 255, 255, 0.1);\n    }\n\n}\n"], ["\n    font-family: 'Poppins', sans-serif;\n    top: 0px;\n    height:100%;\n    width:70%;\n    overflow-y: scroll;\n    position: absolute;\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    padding: 48px 32px 32px;\n    gap: 40px;\n    isolation: isolate;\n    background: rgba(17, 17, 17, 0.8);\n    backdrop-filter: blur(60px);\n    z-index: 2;\n    animation-name: ", ";\n    animation-duration: 0.3s;\n.extension-game-tile{\n    max-height: 260px;\n    padding: 12px;\n    overflow: hidden;\n    background: rgba(255, 255, 255, 0.1);\n    ul {\n        margin-top: 10px;\n    }\n}\n.icon-cross-thin{\n    position: absolute;\n    right: 15px;\n    top: 15px;\n    cursor:pointer;\n    color:", ";\n    transition: background 0.3s ease-out;\n    padding: 5px;\n    border-radius: 50%;\n\n    &:hover{\n        background: rgba(255, 255, 255, 0.1);\n    }\n\n}\n"])), al, (function(n) {
            return n.theme.colors.white
        }
        )), xd = function(n, e) {
            return Object.defineProperty ? Object.defineProperty(n, "raw", {
                value: e
            }) : n.raw = e,
            n
        }, vd = rn.ZP.div(Hl || (Hl = xd(["\nheight: 42px;\nborder-bottom: 2px solid transparent;\nborder-image-source: linear-gradient(270deg, rgba(123, 76, 255, 0) 0%, #665EF4 19.43%, #0EA4C5 99.48%);\nborder-image-slice: 1;\nwidth:fit-content;\nmargin-bottom:16px;\n"], ["\nheight: 42px;\nborder-bottom: 2px solid transparent;\nborder-image-source: linear-gradient(270deg, rgba(123, 76, 255, 0) 0%, #665EF4 19.43%, #0EA4C5 99.48%);\nborder-image-slice: 1;\nwidth:fit-content;\nmargin-bottom:16px;\n"]))), bd = rn.ZP.p(Fl || (Fl = xd(["\nfont-family: 'Poppins';\nfont-style: normal;\nfont-weight: 500;\nfont-size: 20px;\nline-height: 150%;\ncolor: rgba(255, 255, 255, 0.9);\n"], ["\nfont-family: 'Poppins';\nfont-style: normal;\nfont-weight: 500;\nfont-size: 20px;\nline-height: 150%;\ncolor: rgba(255, 255, 255, 0.9);\n"]))), yd = function(n) {
            var e = n.title;
            return (0,
            cn.tZ)(vd, {
                children: (0,
                cn.tZ)(bd, {
                    children: (0,
                    Ol.t)(e)
                })
            })
        }, wd = function(n, e, t, i) {
            return new (t || (t = Promise))((function(o, r) {
                function a(n) {
                    try {
                        d(i.next(n))
                    } catch (e) {
                        r(e)
                    }
                }
                function l(n) {
                    try {
                        d(i.throw(n))
                    } catch (e) {
                        r(e)
                    }
                }
                function d(n) {
                    var e;
                    n.done ? o(n.value) : (e = n.value,
                    e instanceof t ? e : new t((function(n) {
                        n(e)
                    }
                    ))).then(a, l)
                }
                d((i = i.apply(n, e || [])).next())
            }
            ))
        }, Zd = function(n, e) {
            var t, i, o, r, a = {
                label: 0,
                sent: function() {
                    if (1 & o[0])
                        throw o[1];
                    return o[1]
                },
                trys: [],
                ops: []
            };
            return r = {
                next: l(0),
                throw: l(1),
                return: l(2)
            },
            "function" === typeof Symbol && (r[Symbol.iterator] = function() {
                return this
            }
            ),
            r;
            function l(r) {
                return function(l) {
                    return function(r) {
                        if (t)
                            throw new TypeError("Generator is already executing.");
                        for (; a; )
                            try {
                                if (t = 1,
                                i && (o = 2 & r[0] ? i.return : r[0] ? i.throw || ((o = i.return) && o.call(i),
                                0) : i.next) && !(o = o.call(i, r[1])).done)
                                    return o;
                                switch (i = 0,
                                o && (r = [2 & r[0], o.value]),
                                r[0]) {
                                case 0:
                                case 1:
                                    o = r;
                                    break;
                                case 4:
                                    return a.label++,
                                    {
                                        value: r[1],
                                        done: !1
                                    };
                                case 5:
                                    a.label++,
                                    i = r[1],
                                    r = [0];
                                    continue;
                                case 7:
                                    r = a.ops.pop(),
                                    a.trys.pop();
                                    continue;
                                default:
                                    if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === r[0] || 2 === r[0])) {
                                        a = 0;
                                        continue
                                    }
                                    if (3 === r[0] && (!o || r[1] > o[0] && r[1] < o[3])) {
                                        a.label = r[1];
                                        break
                                    }
                                    if (6 === r[0] && a.label < o[1]) {
                                        a.label = o[1],
                                        o = r;
                                        break
                                    }
                                    if (o && a.label < o[2]) {
                                        a.label = o[2],
                                        a.ops.push(r);
                                        break
                                    }
                                    o[2] && a.ops.pop(),
                                    a.trys.pop();
                                    continue
                                }
                                r = e.call(n, a)
                            } catch (l) {
                                r = [6, l],
                                i = 0
                            } finally {
                                t = o = 0
                            }
                        if (5 & r[0])
                            throw r[1];
                        return {
                            value: r[0] ? r[1] : void 0,
                            done: !0
                        }
                    }([r, l])
                }
            }
        }, kd = function(n) {
            return n.map((function(n) {
                return {
                    id: n.appId,
                    icon: n.media.desktop.icon,
                    tile: n.media.desktop.gameTile,
                    gameName: n.name,
                    playPageUrl: n.playPageUrl,
                    launchVideo: n.media.mobile.launchVideo,
                    genre: n.genre,
                    packageName: n.packageName
                }
            }
            ))
        }, Ad = "".concat($.e9, "OtherGame"), Pd = function() {
            var n = (0,
            J.v9)((function(n) {
                return n.play.isHtmlGame
            }
            ))
              , e = (0,
            V.useState)(0)
              , t = e[0]
              , i = e[1]
              , o = (0,
            V.useState)([])
              , r = o[0]
              , a = o[1]
              , l = (0,
            V.useState)({
                top: 0,
                left: 0,
                width: 0,
                right: 0,
                height: 0
            })
              , d = l[0]
              , c = l[1]
              , s = (0,
            J.v9)((function(n) {
                return n.ads.inGameAd
            }
            ))
              , u = (0,
            J.v9)((function(n) {
                return n.play.orientation
            }
            ))
              , p = (0,
            J.v9)((function(n) {
                return n.preferences.recentPlayedApps
            }
            ))
              , f = (0,
            J.I0)();
            (0,
            V.useEffect)((function() {
                (0,
                mn.L9)($.S5, {
                    element: "".concat($.e9, "Window"),
                    state: "Open"
                }),
                wd(void 0, void 0, void 0, (function() {
                    var n;
                    return Zd(this, (function(e) {
                        switch (e.label) {
                        case 0:
                            return [4, (0,
                            W.Q3)(W.ZP.appInfo.appId)];
                        case 1:
                            return (n = e.sent()) && a(kd(n)),
                            [2]
                        }
                    }
                    ))
                }
                ))
            }
            ), []);
            var h = function() {
                var n = en.Z.getState().play
                  , e = n.consoleHeaderRef
                  , t = n.videoRef;
                setTimeout((function() {
                    if (t && t.current) {
                        var n = t.current;
                        c({
                            top: null === n || void 0 === n ? void 0 : n.getBoundingClientRect().bottom,
                            width: null === n || void 0 === n ? void 0 : n.getBoundingClientRect().width,
                            left: null === n || void 0 === n ? void 0 : n.getBoundingClientRect().left,
                            right: null === n || void 0 === n ? void 0 : n.getBoundingClientRect().right,
                            height: null === n || void 0 === n ? void 0 : n.getBoundingClientRect().height
                        })
                    }
                }
                )),
                e && e.current && i(e.current.clientHeight)
            }
              , g = zo()(h, 100);
            (0,
            V.useEffect)((function() {
                return h(),
                n ? window.addEventListener("resize", g) : window.addEventListener("resizeDone", g),
                function() {
                    n ? window.removeEventListener("resize", g) : window.removeEventListener("resizeDone", g)
                }
            }
            ), []);
            var m = function() {
                f({
                    type: xn.Z.MODAL_STATUS,
                    payload: {
                        showAllGamesOverlay: !1
                    }
                })
            }
              , x = (0,
            V.useCallback)((function() {
                return p.map((function(n) {
                    return {
                        id: n.appId,
                        icon: n.icon,
                        gameName: n.name,
                        playPageUrl: n.playUrl,
                        packageName: n.packageName
                    }
                }
                ))
            }
            ), [p]);
            return (0,
            cn.BX)(md, {
                id: "browse-games-container",
                className: n ? "fit-html" : "",
                style: {
                    top: n ? t : s === $.V ? d.top - d.height : "0px",
                    bottom: "0px",
                    left: n || u !== nn.cj.landscape ? "" : d.left,
                    height: s !== $.V || n ? "" : d.height,
                    width: u !== nn.cj.landscape || n ? "" : d.width
                },
                children: [(0,
                cn.tZ)(Qe.Z, {
                    name: "cross-thin",
                    size: 20,
                    onClick: m
                }), (0,
                cn.BX)("div", {
                    children: [(0,
                    cn.tZ)(yd, {
                        title: "recentlyPlayed"
                    }), (0,
                    cn.tZ)(hd, {
                        playCurrentGame: m,
                        gameList: x(),
                        tileType: "default",
                        showTooltip: !1,
                        element: "".concat($.e9, "RecentGame")
                    })]
                }), (0,
                cn.BX)("div", {
                    children: [(0,
                    cn.tZ)(yd, {
                        title: "otherGamesYouMayLike"
                    }), (0,
                    cn.tZ)(hd, {
                        playCurrentGame: m,
                        gameList: r.slice(0, 12),
                        tileType: "default",
                        element: Ad
                    }), (0,
                    cn.tZ)("div", {
                        className: "extension-game-tile",
                        children: (0,
                        cn.tZ)(hd, {
                            playCurrentGame: m,
                            gameList: r.slice(12, 18),
                            tileType: "vertical",
                            media: "tile",
                            element: Ad
                        })
                    }), (0,
                    cn.tZ)(hd, {
                        playCurrentGame: m,
                        gameList: r.slice(18, 30),
                        tileType: "default",
                        element: Ad
                    })]
                })]
            })
        }, Sd = t(6486), Ed = function(n, e) {
            return Object.defineProperty ? Object.defineProperty(n, "raw", {
                value: e
            }) : n.raw = e,
            n
        }, Cd = rn.ZP.div(Xl || (Xl = Ed(["\n  background: #111111;\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  border-radius: 6px;\n  height: 36px;\n  position:relative;\n  display: flex;\n  align-items: center;\n  text-transform: lowercase;\n  color: ", ";\n\n  &:after {\n    position: absolute;\n    top: -2px;\n    left: -2px;\n    bottom: -2px;\n    right: -2px;\n    background: linear-gradient(270deg,#7B4CFF 0%,#0EA4C5 99.48%);\n    border-radius: 6px;\n    content: '';\n    z-index: -1;\n  }\n\n  i {\n    color: ", ";\n    margin: 8px 14px;\n    cursor: pointer;\n    &:hover {\n      border-radius: 50%;\n      background: ", ";\n    }\n  }\n"], ["\n  background: #111111;\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  border-radius: 6px;\n  height: 36px;\n  position:relative;\n  display: flex;\n  align-items: center;\n  text-transform: lowercase;\n  color: ", ";\n\n  &:after {\n    position: absolute;\n    top: -2px;\n    left: -2px;\n    bottom: -2px;\n    right: -2px;\n    background: linear-gradient(270deg,#7B4CFF 0%,#0EA4C5 99.48%);\n    border-radius: 6px;\n    content: '';\n    z-index: -1;\n  }\n\n  i {\n    color: ", ";\n    margin: 8px 14px;\n    cursor: pointer;\n    &:hover {\n      border-radius: 50%;\n      background: ", ";\n    }\n  }\n"])), (function(n) {
            var e;
            return null === (e = n.theme.colors) || void 0 === e ? void 0 : e.white
        }
        ), (function(n) {
            var e;
            return null === (e = n.theme.colors) || void 0 === e ? void 0 : e.white
        }
        ), (function(n) {
            return n.theme.colors.modal
        }
        )), Td = rn.ZP.span(Gl || (Gl = Ed(["\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  background: rgba(255, 255, 255, 0.1);\n  z-index: 0;\n  pointer-events: none;\n  opacity: 0;\n"], ["\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  background: rgba(255, 255, 255, 0.1);\n  z-index: 0;\n  pointer-events: none;\n  opacity: 0;\n"]))), Id = rn.ZP.input(Vl || (Vl = Ed(["\n  width: 332px;\n  background: ", ";\n  border: 1px solid ", ";\n  color:", ";\n  padding-left: 8px;\n  outline: none;\n  font-size: 14px;\n  font-family: inherit;\n  line-height: 2;\n  &:focus {\n    color: white;\n    &::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */\n      color: transparent;\n    }\n    + ", " {\n      opacity: 1;\n    }\n  }\n"], ["\n  width: 332px;\n  background: ", ";\n  border: 1px solid ", ";\n  color:", ";\n  padding-left: 8px;\n  outline: none;\n  font-size: 14px;\n  font-family: inherit;\n  line-height: 2;\n  &:focus {\n    color: white;\n    &::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */\n      color: transparent;\n    }\n    + ", " {\n      opacity: 1;\n    }\n  }\n"])), (function(n) {
            var e;
            return null === (e = n.theme.colors) || void 0 === e ? void 0 : e.transparent
        }
        ), (function(n) {
            var e;
            return null === (e = n.theme.colors) || void 0 === e ? void 0 : e.transparent
        }
        ), (function(n) {
            var e;
            return null === (e = n.theme.colors) || void 0 === e ? void 0 : e.white
        }
        ), Td), Od = function(n) {
            var e = n.onChange
              , t = (0,
            V.useState)("")
              , i = t[0]
              , o = t[1]
              , r = (0,
            V.useRef)(null)
              , a = (0,
            J.I0)();
            return (0,
            cn.BX)(Cd, {
                children: [(0,
                cn.tZ)(gl, {
                    style: {
                        marginLeft: "1.5vw"
                    },
                    onClick: function() {
                        var n;
                        null === (n = r.current) || void 0 === n || n.focus(),
                        o("")
                    }
                }), (0,
                cn.tZ)(Id, {
                    id: "search-box",
                    type: "text",
                    autoFocus: !0,
                    title: (0,
                    Ol.t)("searchGames"),
                    placeholder: (0,
                    Ol.t)("searchGames"),
                    value: i,
                    onChange: (0,
                    Sd.debounce)((function(n) {
                        var t = n.target.value;
                        o(t),
                        null === e || void 0 === e || e(t)
                    }
                    ), 250),
                    autoComplete: "off",
                    ref: r,
                    onBlur: function() {
                        a({
                            type: xn.Z.UPDATE_TEXTFIELD_FOCUS,
                            payload: {
                                uiTextfieldInFocus: !1
                            }
                        })
                    },
                    onFocus: function() {
                        a({
                            type: xn.Z.UPDATE_TEXTFIELD_FOCUS,
                            payload: {
                                uiTextfieldInFocus: !0
                            }
                        })
                    }
                }), i.length > 0 && (0,
                cn.tZ)("span", {
                    onClick: function() {
                        o(""),
                        null === e || void 0 === e || e("")
                    },
                    children: (0,
                    cn.tZ)(xe.gd, {
                        style: {
                            textTransform: "uppercase",
                            marginRight: "8px",
                            cursor: "pointer"
                        },
                        children: (0,
                        Ol.t)("clear")
                    })
                }), (0,
                cn.tZ)(Td, {})]
            })
        }, jd = function(n, e, t, i) {
            return new (t || (t = Promise))((function(o, r) {
                function a(n) {
                    try {
                        d(i.next(n))
                    } catch (e) {
                        r(e)
                    }
                }
                function l(n) {
                    try {
                        d(i.throw(n))
                    } catch (e) {
                        r(e)
                    }
                }
                function d(n) {
                    var e;
                    n.done ? o(n.value) : (e = n.value,
                    e instanceof t ? e : new t((function(n) {
                        n(e)
                    }
                    ))).then(a, l)
                }
                d((i = i.apply(n, e || [])).next())
            }
            ))
        }, Dd = function(n, e) {
            var t, i, o, r, a = {
                label: 0,
                sent: function() {
                    if (1 & o[0])
                        throw o[1];
                    return o[1]
                },
                trys: [],
                ops: []
            };
            return r = {
                next: l(0),
                throw: l(1),
                return: l(2)
            },
            "function" === typeof Symbol && (r[Symbol.iterator] = function() {
                return this
            }
            ),
            r;
            function l(r) {
                return function(l) {
                    return function(r) {
                        if (t)
                            throw new TypeError("Generator is already executing.");
                        for (; a; )
                            try {
                                if (t = 1,
                                i && (o = 2 & r[0] ? i.return : r[0] ? i.throw || ((o = i.return) && o.call(i),
                                0) : i.next) && !(o = o.call(i, r[1])).done)
                                    return o;
                                switch (i = 0,
                                o && (r = [2 & r[0], o.value]),
                                r[0]) {
                                case 0:
                                case 1:
                                    o = r;
                                    break;
                                case 4:
                                    return a.label++,
                                    {
                                        value: r[1],
                                        done: !1
                                    };
                                case 5:
                                    a.label++,
                                    i = r[1],
                                    r = [0];
                                    continue;
                                case 7:
                                    r = a.ops.pop(),
                                    a.trys.pop();
                                    continue;
                                default:
                                    if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === r[0] || 2 === r[0])) {
                                        a = 0;
                                        continue
                                    }
                                    if (3 === r[0] && (!o || r[1] > o[0] && r[1] < o[3])) {
                                        a.label = r[1];
                                        break
                                    }
                                    if (6 === r[0] && a.label < o[1]) {
                                        a.label = o[1],
                                        o = r;
                                        break
                                    }
                                    if (o && a.label < o[2]) {
                                        a.label = o[2],
                                        a.ops.push(r);
                                        break
                                    }
                                    o[2] && a.ops.pop(),
                                    a.trys.pop();
                                    continue
                                }
                                r = e.call(n, a)
                            } catch (l) {
                                r = [6, l],
                                i = 0
                            } finally {
                                t = o = 0
                            }
                        if (5 & r[0])
                            throw r[1];
                        return {
                            value: r[0] ? r[1] : void 0,
                            done: !0
                        }
                    }([r, l])
                }
            }
        }, Ld = function() {
            var n = (0,
            J.v9)((function(n) {
                return n.play.isHtmlGame
            }
            ))
              , e = (0,
            V.useState)([])
              , t = e[0]
              , i = e[1]
              , o = (0,
            V.useState)(0)
              , r = o[0]
              , a = o[1]
              , l = (0,
            V.useState)(0)
              , d = (l[0],
            l[1],
            (0,
            V.useState)([]))
              , c = d[0]
              , s = d[1]
              , u = (0,
            V.useState)("")
              , p = u[0]
              , f = u[1]
              , h = (0,
            J.I0)()
              , g = (0,
            V.useState)([])
              , m = g[0]
              , x = g[1]
              , v = (0,
            V.useState)("")
              , b = v[0]
              , y = v[1]
              , w = (0,
            V.useState)([])
              , Z = w[0]
              , k = w[1]
              , A = (0,
            V.useState)({
                top: 0,
                left: 0,
                width: 0,
                right: 0,
                height: 0
            })
              , P = A[0]
              , S = A[1]
              , E = (0,
            J.v9)((function(n) {
                return n.ads.inGameAd
            }
            ))
              , C = (0,
            J.v9)((function(n) {
                return n.play.orientation
            }
            ));
            (0,
            V.useEffect)((function() {
                (0,
                mn.L9)($.S5, {
                    element: $.QS,
                    state: "Open"
                }),
                jd(void 0, void 0, void 0, (function() {
                    var n, e, t, o;
                    return Dd(this, (function(r) {
                        switch (r.label) {
                        case 0:
                            return [4, (0,
                            W.Q3)(W.ZP.appInfo.appId)];
                        case 1:
                            if (n = r.sent()) {
                                for (i(kd(n)),
                                e = [],
                                t = 0; t < n.length; t += 1)
                                    o = n[t],
                                    -1 === e.indexOf(o.genre) && e.push(o.genre);
                                k(e)
                            }
                            return [2]
                        }
                    }
                    ))
                }
                ))
            }
            ), []);
            var T = function() {
                var n = en.Z.getState().play
                  , e = n.consoleHeaderRef
                  , t = n.videoRef;
                setTimeout((function() {
                    if (t && t.current) {
                        var n = t.current;
                        S({
                            top: null === n || void 0 === n ? void 0 : n.getBoundingClientRect().bottom,
                            width: null === n || void 0 === n ? void 0 : n.getBoundingClientRect().width,
                            left: null === n || void 0 === n ? void 0 : n.getBoundingClientRect().left,
                            right: null === n || void 0 === n ? void 0 : n.getBoundingClientRect().right,
                            height: null === n || void 0 === n ? void 0 : n.getBoundingClientRect().height
                        })
                    }
                }
                )),
                e && e.current && a(e.current.clientHeight)
            }
              , I = zo()(T, 100);
            (0,
            V.useEffect)((function() {
                return T(),
                n ? window.addEventListener("resize", I) : window.addEventListener("resizeDone", I),
                function() {
                    n ? window.removeEventListener("resize", I) : window.removeEventListener("resizeDone", I)
                }
            }
            ), []);
            var O = function() {
                h({
                    type: xn.Z.MODAL_STATUS,
                    payload: {
                        showExploreGamesOverlay: !1
                    }
                })
            };
            return (0,
            cn.BX)(ll, {
                className: n ? "fit-html" : "",
                style: {
                    top: n ? r : E === $.V ? P.top - P.height : "0px",
                    bottom: "0px",
                    left: n || C !== nn.cj.landscape ? "" : P.left,
                    height: E !== $.V || n ? "" : P.height,
                    width: C !== nn.cj.landscape || n ? "" : P.width
                },
                children: [(0,
                cn.tZ)(Qe.Z, {
                    id: "icon-cross-thin",
                    name: "cross-thin",
                    size: 20,
                    onClick: O
                }), (0,
                cn.tZ)(Od, {
                    onChange: function(n) {
                        if (f(n),
                        "" !== n) {
                            var e = n.toLowerCase().split(/\s+/)
                              , i = null === t || void 0 === t ? void 0 : t.filter((function(n) {
                                var t = n.gameName
                                  , i = void 0 === t ? "" : t;
                                return e.every((function(n) {
                                    return i.toLocaleLowerCase().includes(n)
                                }
                                ))
                            }
                            ));
                            (0,
                            mn.L9)($.S5, {
                                element: "".concat($.$D, "Input"),
                                input: n,
                                hasResult: i.length > 0
                            }),
                            s(i || [])
                        } else
                            s([])
                    }
                }), m.length ? (0,
                cn.BX)(cn.HY, {
                    children: [(0,
                    cn.tZ)("div", {
                        className: "selected-category",
                        children: (0,
                        cn.BX)("div", {
                            children: [(0,
                            cn.BX)("span", {
                                children: [b, "\xa0", (0,
                                Ol.t)("games")]
                            }), (0,
                            cn.tZ)(Qe.Z, {
                                name: "cross-thin",
                                size: 16,
                                onClick: function() {
                                    y(""),
                                    x([])
                                }
                            })]
                        })
                    }), (0,
                    cn.BX)(bd, {
                        children: ["Showing results for\xa0", (0,
                        cn.BX)("b", {
                            children: [b, "\xa0", (0,
                            Ol.t)("games")]
                        })]
                    }), (0,
                    cn.tZ)(fd, {
                        tileType: "vertical",
                        gameList: m,
                        media: "tile",
                        element: "".concat($.$D, "Input"),
                        playCurrentGame: O
                    })]
                }) : null, c.length > 0 ? (0,
                cn.tZ)(fd, {
                    playCurrentGame: O,
                    gameList: c,
                    tileType: "vertical",
                    media: "tile",
                    element: "".concat($.$D, "Result")
                }) : null, 0 !== c.length || b ? null : (0,
                cn.BX)(cn.HY, {
                    children: [p ? (0,
                    cn.tZ)(dl, {
                        children: (0,
                        cn.tZ)(bd, {
                            children: (0,
                            Ol.t)("cantFindAnything")
                        })
                    }) : (0,
                    cn.tZ)("ul", {
                        className: "genre-list",
                        children: Z.map((function(n) {
                            return (0,
                            cn.BX)("li", {
                                className: "genre-list-item",
                                onClick: function() {
                                    return function(n, e) {
                                        var t = e.filter((function(e) {
                                            return e.genre === n
                                        }
                                        ));
                                        y(n),
                                        x(t)
                                    }(n, t)
                                },
                                children: [n, "\xa0", (0,
                                Ol.t)("games")]
                            })
                        }
                        ))
                    }), (0,
                    cn.BX)("div", {
                        className: "trending-section",
                        children: [(0,
                        cn.tZ)(bd, {
                            style: {
                                textAlign: "center",
                                marginBottom: "50px"
                            },
                            children: p ? (0,
                            Ol.t)("tryOtherGames") : (0,
                            Ol.t)("trendingThisWeek")
                        }), (0,
                        cn.tZ)(fd, {
                            playCurrentGame: O,
                            gameList: t.slice(8, 13),
                            tileType: "default",
                            showTooltip: !1,
                            element: "".concat($.QS, "Recommendation")
                        })]
                    })]
                })]
            })
        }, zd = function(n, e) {
            return Object.defineProperty ? Object.defineProperty(n, "raw", {
                value: e
            }) : n.raw = e,
            n
        }, Md = rn.ZP.div(Wl || (Wl = zd(["\n  display: flex;\n  position: relative;\n  flex: 1;\n  justify-content: center;\n  align-items: center;\n   ", "\n  background: ", ";\n  touch-action: none;\n  width: 100%;\n  height: 100%;\n\n  .--fullscreen & {\n    max-height: 100vh;\n  }\n  ", ";\n}\n"], ["\n  display: flex;\n  position: relative;\n  flex: 1;\n  justify-content: center;\n  align-items: center;\n   ", "\n  background: ", ";\n  touch-action: none;\n  width: 100%;\n  height: 100%;\n\n  .--fullscreen & {\n    max-height: 100vh;\n  }\n  ", ";\n}\n"])), (function(n) {
            return n.isLandscape && (0,
            rn.iv)(Kl || (Kl = zd(["\n      max-height: 100vh;\n      @media only screen and (orientation: landscape) and (max-height: 575.98px) {\n        max-height: 100vw !important;\n      }\n   "], ["\n      max-height: 100vh;\n      @media only screen and (orientation: landscape) and (max-height: 575.98px) {\n        max-height: 100vw !important;\n      }\n   "])))
        }
        ), (function(n) {
            return n.backgroundColor
        }
        ), (function(n) {
            return n.isMobile && (0,
            rn.iv)(Yl || (Yl = zd(["position: static; max-height: 100vh"], ["position: static; max-height: 100vh"])))
        }
        )), Nd = rn.ZP.video(ql || (ql = zd(["\n  background:#000;\n  position: absolute;\n  transform: translate(-50%,-50%);\n  &.inverted {\n    transform-origin: top left;\n    transform: scaleY(-1) translate(-50%, -50%);\n  }\n  &.landscape {\n    &-1 {\n      transform-origin: top left;\n      transform: rotate(-90deg) translate(-50%, -50%);\n    }\n    &-3 {\n      transform-origin: top left;\n      transform: rotate(-270deg) translate(-50%, -50%);\n    }\n  }\n  .--adBlocked & {\n    top: calc(50% + 7.10vw) !important;\n    transform: translate(calc(-50% + 3.55vw), -50%);\n    &.inverted {\n      transform-origin: top left;\n      transform: scaleY(-1) translate(calc(-50% + 3.55vw), -50%);\n    }\n    &.landscape {\n      &-1 {\n        transform-origin: top left;\n        transform: rotate(-90deg) translate(calc(-50% + 3.55vw), -50%);\n      }\n      &-3 {\n        transform-origin: top left;\n        transform: rotate(-270deg) translate(calc(-50% + 3.55vw), -50%);\n      }\n    }\n  }\n  @media screen and (max-width: 600px){\n    background: ", ";\n    position: absolute;\n    overflow: hidden;\n    object-fit: fill;\n  }\n"], ["\n  background:#000;\n  position: absolute;\n  transform: translate(-50%,-50%);\n  &.inverted {\n    transform-origin: top left;\n    transform: scaleY(-1) translate(-50%, -50%);\n  }\n  &.landscape {\n    &-1 {\n      transform-origin: top left;\n      transform: rotate(-90deg) translate(-50%, -50%);\n    }\n    &-3 {\n      transform-origin: top left;\n      transform: rotate(-270deg) translate(-50%, -50%);\n    }\n  }\n  .--adBlocked & {\n    top: calc(50% + 7.10vw) !important;\n    transform: translate(calc(-50% + 3.55vw), -50%);\n    &.inverted {\n      transform-origin: top left;\n      transform: scaleY(-1) translate(calc(-50% + 3.55vw), -50%);\n    }\n    &.landscape {\n      &-1 {\n        transform-origin: top left;\n        transform: rotate(-90deg) translate(calc(-50% + 3.55vw), -50%);\n      }\n      &-3 {\n        transform-origin: top left;\n        transform: rotate(-270deg) translate(calc(-50% + 3.55vw), -50%);\n      }\n    }\n  }\n  @media screen and (max-width: 600px){\n    background: ", ";\n    position: absolute;\n    overflow: hidden;\n    object-fit: fill;\n  }\n"])), (function(n) {
            var e;
            return null === (e = n.theme.colors) || void 0 === e ? void 0 : e.transparent
        }
        )), Bd = rn.ZP.div(Ql || (Ql = zd(["\n    position: absolute;\n    left: 5%;\n    top: 10%;\n    z-index: 5;\n    transition: all .2s ease-in-out,top 0s ease-in-out,left 0s ease-in-out;\n\n    .back-btn {\n      ", ";\n    }\n    p {\n      margin-bottom: 0;\n      padding: 0;\n    }\n"], ["\n    position: absolute;\n    left: 5%;\n    top: 10%;\n    z-index: 5;\n    transition: all .2s ease-in-out,top 0s ease-in-out,left 0s ease-in-out;\n\n    .back-btn {\n      ", ";\n    }\n    p {\n      margin-bottom: 0;\n      padding: 0;\n    }\n"])), (function(n) {
            return !n.isMobile && "gap: 10px"
        }
        )), Rd = t(4888), _d = t(9600), Ud = function(n, e) {
            return Object.defineProperty ? Object.defineProperty(n, "raw", {
                value: e
            }) : n.raw = e,
            n
        }, Hd = rn.ZP.div(Jl || (Jl = Ud(["\n    display: flex;\n    justify-content: space-between;\n    pointer-events: all;\n    align-items: center;\n    position: relative;\n    min-height: 48px;\n    padding: 0 1rem;\n    background: ", ";\n    z-index: 12;\n\n    .--fullscreen & {\n        transform: translateY(-100%);\n        margin-bottom: -48px;\n    }\n"], ["\n    display: flex;\n    justify-content: space-between;\n    pointer-events: all;\n    align-items: center;\n    position: relative;\n    min-height: 48px;\n    padding: 0 1rem;\n    background: ", ";\n    z-index: 12;\n\n    .--fullscreen & {\n        transform: translateY(-100%);\n        margin-bottom: -48px;\n    }\n"])), (function(n) {
            return n.theme.colors.base800
        }
        )), Fd = rn.ZP.div($l || ($l = Ud(["\n    height: 3.4rem;\n    display: flex;\n    align-items: center;\n    img {\n        height: 100%;\n    }\n    .icon-oval {\n        font-size: 1.6rem;\n        padding: 1rem;\n        align-self: center;\n        background: none;\n        border: none;\n        color: ", ";\n        cursor: pointer;\n        border: 1px solid transparent;\n        border-radius: 4px;\n        outline: none;\n\n        &:focus-within {\n            border: 1px solid ", ";\n        }\n    }\n    button {\n        box-shadow: none;\n        &::before, &::after {\n            display: none;\n        }\n    }\n\n     &.--mobile{\n        .icon-cont{\n            position: absolute;\n            top: 2px;\n            right: -5px;\n\n            .icon-oval {\n                top: 0;\n                right: 0;\n                transform: translate(25%, -50%);\n            }\n        }\n    }\n\n    @media screen and (max-width: 600px){\n        display: -webkit-box\n        .icon-cont {\n            align-self: center;\n        }\n        .icon-oval {\n            font-size: 1.6rem;\n            padding: 1rem;\n            padding-left: 0px;\n            align-self: center;\n            background: none;\n            border: none;\n            color: ", ";\n            cursor:pointer;\n\n            position: absolute;\n            right: -10px;\n            top: 5px;\n            transform: translate(25%,-50%);\n        }\n    }\n"], ["\n    height: 3.4rem;\n    display: flex;\n    align-items: center;\n    img {\n        height: 100%;\n    }\n    .icon-oval {\n        font-size: 1.6rem;\n        padding: 1rem;\n        align-self: center;\n        background: none;\n        border: none;\n        color: ", ";\n        cursor: pointer;\n        border: 1px solid transparent;\n        border-radius: 4px;\n        outline: none;\n\n        &:focus-within {\n            border: 1px solid ", ";\n        }\n    }\n    button {\n        box-shadow: none;\n        &::before, &::after {\n            display: none;\n        }\n    }\n\n     &.--mobile{\n        .icon-cont{\n            position: absolute;\n            top: 2px;\n            right: -5px;\n\n            .icon-oval {\n                top: 0;\n                right: 0;\n                transform: translate(25%, -50%);\n            }\n        }\n    }\n\n    @media screen and (max-width: 600px){\n        display: -webkit-box\n        .icon-cont {\n            align-self: center;\n        }\n        .icon-oval {\n            font-size: 1.6rem;\n            padding: 1rem;\n            padding-left: 0px;\n            align-self: center;\n            background: none;\n            border: none;\n            color: ", ";\n            cursor:pointer;\n\n            position: absolute;\n            right: -10px;\n            top: 5px;\n            transform: translate(25%,-50%);\n        }\n    }\n"])), (function(n) {
            return n.theme.colors.white
        }
        ), (function(n) {
            return n.theme.colors.ascent
        }
        ), (function(n) {
            return n.theme.colors.white
        }
        )), Xd = t(5186), Gd = t(855), Vd = t(1740), Kd = t(5685), Yd = function(n) {
            var e = n.clicked
              , t = n.handleInfoIconClick
              , i = n.onButtonClicked
              , o = (0,
            J.v9)((function(n) {
                return n.preferences.loginNotificationCount
            }
            ))
              , r = (0,
            J.v9)((function(n) {
                return n.preferences.lastLoginNotifDate
            }
            ))
              , a = (0,
            J.v9)((function(n) {
                return n.play.isHtmlGame
            }
            ))
              , l = (0,
            V.useState)(!1)
              , d = l[0]
              , c = l[1]
              , s = (0,
            V.useState)(!1)
              , u = s[0]
              , p = s[1];
            return (0,
            V.useEffect)((function() {
                c(o < 3 && (0,
                aa.J)(r, (new Date).toDateString()))
            }
            ), []),
            (0,
            V.useEffect)((function() {
                d && en.Z.dispatch({
                    type: vo.Z.LOGIN_NOTIF_UPDATE,
                    payload: {
                        loginNotificationCount: o + 1,
                        lastLoginNotifDate: (new Date).toDateString()
                    }
                })
            }
            ), [d]),
            (0,
            cn.BX)(_d._, {
                className: "mobileMenuItem ".concat(!(0,
                q.tq)() || 0 !== window.orientation && 90 !== window.orientation ? "" : "--mobile", "\n      ").concat(e ? "--show" : "--hide"),
                children: [e ? (0,
                cn.tZ)(il.UB, {
                    children: (0,
                    cn.BX)(Fd, {
                        className: "".concat((0,
                        q.tq)() && 0 === window.orientation ? "" : "--mobile"),
                        children: [(0,
                        cn.tZ)(Rd.Z, {
                            orientation: "vertical",
                            hasTagline: !1,
                            themeType: "light"
                        }), (0,
                        cn.tZ)("div", {
                            className: "icon-cont",
                            children: (0,
                            cn.tZ)(de.z, {
                                id: "ng-info",
                                className: "icon-oval",
                                icon: {
                                    name: "info",
                                    size: 13,
                                    style: {
                                        color: "rgba(255,255,255,0.6)"
                                    }
                                },
                                onClick: t
                            })
                        })]
                    })
                }) : (0,
                cn.tZ)("div", {}), a ? (0,
                cn.tZ)("div", {}) : (0,
                cn.BX)(cn.HY, {
                    children: [(0,
                    cn.BX)(il.UB, {
                        id: "ng-profile",
                        onClick: function() {
                            p(!0)
                        },
                        children: [(0,
                        cn.tZ)(Kd.Z, {}), (0,
                        cn.tZ)(Ja.F9, {
                            style: {
                                display: d && !u ? "block" : "none"
                            }
                        })]
                    }), (0,
                    q.Tt)() ? (0,
                    cn.tZ)(il.UB, {
                        id: "ng-sound",
                        children: (0,
                        cn.tZ)(Xd.Z, {
                            showSlider: !1
                        })
                    }) : (0,
                    cn.tZ)("div", {})]
                }), (0,
                cn.tZ)(il.UB, {
                    id: "ng-fs",
                    children: (0,
                    cn.tZ)(Vd.Z, {})
                }), e ? (0,
                cn.tZ)(il.UB, {
                    id: "ng-support",
                    children: (0,
                    cn.tZ)(Gd.Z, {
                        type: "support"
                    })
                }) : (0,
                cn.tZ)("div", {}), (0,
                cn.tZ)(il.UB, {
                    children: (0,
                    cn.tZ)(ol, {
                        clicked: e,
                        onButtonClicked: function() {
                            if (i(),
                            !e) {
                                var n = document.querySelector(".mobileMenuItem")
                                  , t = function(n) {
                                    var e = {
                                        top: 0,
                                        left: 0
                                    };
                                    return n ? e = {
                                        top: null === n || void 0 === n ? void 0 : n.getBoundingClientRect().top,
                                        left: null === n || void 0 === n ? void 0 : n.getBoundingClientRect().left
                                    } : e
                                }(n);
                                if (0 === window.orientation) {
                                    if (t && t.left < 81) {
                                        var o = window.innerWidth - (n.offsetHeight + 81);
                                        n.style.transform = "translate3d(".concat(t.top, "px, ").concat(o, "px, 0)")
                                    }
                                } else if (window.innerHeight - t.top < n.offsetHeight + 81) {
                                    o = window.innerHeight - (n.offsetHeight + 81);
                                    n.style.transform = "translate3d(".concat(t.left, "px, ").concat(o, "px, 0)")
                                }
                            }
                        }
                    })
                })]
            })
        }, Wd = function() {
            var n = (0,
            J.v9)((function(n) {
                return n.play.showAboutUs
            }
            ))
              , e = (0,
            J.I0)();
            return (0,
            cn.BX)(Hd, {
                children: [(0,
                cn.BX)(Fd, {
                    children: [(0,
                    cn.tZ)(Rd.Z, {
                        themeType: "light"
                    }), (0,
                    cn.tZ)(de.z, {
                        id: "ng-info",
                        className: "icon-oval",
                        icon: {
                            name: "info",
                            size: 13,
                            style: {
                                color: "rgba(255,255,255,0.6)"
                            }
                        },
                        onClick: function() {
                            e({
                                type: xn.Z.MODAL_STATUS,
                                payload: {
                                    showAboutUs: !n
                                }
                            })
                        }
                    })]
                }), (0,
                cn.tZ)($a.ZP, {})]
            })
        }, qd = t(4466), Qd = function(n) {
            var e = n.clicked
              , t = n.handleInfoIconClick
              , i = n.onButtonClicked;
            return (0,
            q.tq)() ? (0,
            cn.tZ)(Yd, {
                clicked: e,
                handleInfoIconClick: t,
                onButtonClicked: i
            }) : (0,
            q.SR)() ? W.ZP.playPageUpdate ? (0,
            cn.tZ)(Zl, {}) : (0,
            cn.tZ)(qd.Z, {}) : (0,
            cn.tZ)(Wd, {})
        }, Jd = t(6716), $d = t(7762), nc = function(n, e) {
            return Object.defineProperty ? Object.defineProperty(n, "raw", {
                value: e
            }) : n.raw = e,
            n
        }, ec = rn.ZP.div(nd || (nd = nc(["\n   position: relative;\n"], ["\n   position: relative;\n"]))), tc = rn.ZP.div(ed || (ed = nc(["\n    position: absolute;\n    background: rgba(0, 0, 0, 0.8);\n    color: ", ";\n    display: inline-block;\n    left: 50%;\n    top: 5px;\n    transform: translateX(-50%);\n    z-index: 10;\n    width: fit-content;\n    padding: 8px 16px;\n    border: ", ";\n"], ["\n    position: absolute;\n    background: rgba(0, 0, 0, 0.8);\n    color: ", ";\n    display: inline-block;\n    left: 50%;\n    top: 5px;\n    transform: translateX(-50%);\n    z-index: 10;\n    width: fit-content;\n    padding: 8px 16px;\n    border: ", ";\n"])), (function(n) {
            return n.theme.colors.white
        }
        ), (function(n) {
            return n.theme.border.base
        }
        )), ic = rn.ZP.div(td || (td = nc(["\n    position: absolute;\n    z-index: 20;\n    max-width: 459px;\n    top: 60px;\n    background: rgba(0, 0, 0, 0.8);\n    box-shadow: ", ";\n    border-radius: 0 6px 0 6px;\n    padding: 12px 16px 15px;\n    pointer-events: none;\n    @media screen and (orientation: portrait) and (max-width: 600px),\n    (orientation: landscape) and (max-height: 575.98px) {\n      transform: scale(.7);\n      transform-origin: top left;\n  }\n"], ["\n    position: absolute;\n    z-index: 20;\n    max-width: 459px;\n    top: 60px;\n    background: rgba(0, 0, 0, 0.8);\n    box-shadow: ", ";\n    border-radius: 0 6px 0 6px;\n    padding: 12px 16px 15px;\n    pointer-events: none;\n    @media screen and (orientation: portrait) and (max-width: 600px),\n    (orientation: landscape) and (max-height: 575.98px) {\n      transform: scale(.7);\n      transform-origin: top left;\n  }\n"])), (function(n) {
            return n.theme.shadow.big
        }
        )), oc = rn.ZP.p(id || (id = nc(["\n    letter-spacing: 0.05em;\n    font-weight: 500;\n    color: ", ";\n    opacity: 0.8;\n    margin-bottom: 8px;\n    margin-top: 5px;\n    font-size: 12px;\n    line-height: 15px;\n"], ["\n    letter-spacing: 0.05em;\n    font-weight: 500;\n    color: ", ";\n    opacity: 0.8;\n    margin-bottom: 8px;\n    margin-top: 5px;\n    font-size: 12px;\n    line-height: 15px;\n"])), (function(n) {
            return n.theme.colors.white
        }
        )), rc = rn.ZP.div(od || (od = nc(["\n    display: flex;\n    flex-direction: row;\n"], ["\n    display: flex;\n    flex-direction: row;\n"]))), ac = rn.ZP.div(rd || (rd = nc(["\n    display: flex;\n    margin-left: auto;\n    cursor: pointer;\n    pointer-events: auto;\n    span {\n        margin-left: 10px;\n    }\n"], ["\n    display: flex;\n    margin-left: auto;\n    cursor: pointer;\n    pointer-events: auto;\n    span {\n        margin-left: 10px;\n    }\n"]))), lc = rn.ZP.div(ad || (ad = nc(["\n    border-bottom: 1px solid rgba(255, 255, 255, 0.1);\n"], ["\n    border-bottom: 1px solid rgba(255, 255, 255, 0.1);\n"]))), dc = rn.ZP.div(ld || (ld = nc(["\n    color: ", ";\n    display: grid;\n    margin-top: 5px;\n    grid-template-columns: 111px 14px 302px;\n    div:nth-child(2) {\n          margin: 0px 4px;\n          text-align: center;\n    }\n    p {\n        font-size: 11px;\n    }\n"], ["\n    color: ", ";\n    display: grid;\n    margin-top: 5px;\n    grid-template-columns: 111px 14px 302px;\n    div:nth-child(2) {\n          margin: 0px 4px;\n          text-align: center;\n    }\n    p {\n        font-size: 11px;\n    }\n"])), (function(n) {
            return n.theme.colors.white
        }
        )), cc = rn.ZP.div(dd || (dd = nc(["\n    display: flex;\n    color: ", ";\n    margin-top: 8px;\n    div:nth-child(2) {\n          margin: 0px 4px;\n          text-align: center;\n    }\n"], ["\n    display: flex;\n    color: ", ";\n    margin-top: 8px;\n    div:nth-child(2) {\n          margin: 0px 4px;\n          text-align: center;\n    }\n"])), (function(n) {
            return n.theme.colors.white
        }
        )), sc = rn.ZP.div(cd || (cd = nc(["\n    color: ", ";\n    display: grid;\n    margin-top: 8px;\n    grid-template-columns: 200px 200px;\n"], ["\n    color: ", ";\n    display: grid;\n    margin-top: 8px;\n    grid-template-columns: 200px 200px;\n"])), (function(n) {
            return n.theme.colors.white
        }
        )), uc = (0,
        rn.ZP)($d.__)(sd || (sd = nc(["\n    > span:before {\n        background-color: ", ";\n    }\n    > span {\n        border-color: ", ";\n    }\n"], ["\n    > span:before {\n        background-color: ", ";\n    }\n    > span {\n        border-color: ", ";\n    }\n"])), (function(n) {
            return n.theme.colors.white
        }
        ), (function(n) {
            return n.theme.colors.white
        }
        ));
        function pc(n, e) {
            var t = Object.keys(n);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(n);
                e && (i = i.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable
                }
                ))),
                t.push.apply(t, i)
            }
            return t
        }
        function fc(n) {
            for (var e = 1; e < arguments.length; e++) {
                var t = null != arguments[e] ? arguments[e] : {};
                e % 2 ? pc(Object(t), !0).forEach((function(e) {
                    (0,
                    je.Z)(n, e, t[e])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(t)) : pc(Object(t)).forEach((function(e) {
                    Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(t, e))
                }
                ))
            }
            return n
        }
        var hc, gc, mc = function(n, e, t, i) {
            return new (t || (t = Promise))((function(o, r) {
                function a(n) {
                    try {
                        d(i.next(n))
                    } catch (e) {
                        r(e)
                    }
                }
                function l(n) {
                    try {
                        d(i.throw(n))
                    } catch (e) {
                        r(e)
                    }
                }
                function d(n) {
                    var e;
                    n.done ? o(n.value) : (e = n.value,
                    e instanceof t ? e : new t((function(n) {
                        n(e)
                    }
                    ))).then(a, l)
                }
                d((i = i.apply(n, e || [])).next())
            }
            ))
        }, xc = function(n, e) {
            var t, i, o, r, a = {
                label: 0,
                sent: function() {
                    if (1 & o[0])
                        throw o[1];
                    return o[1]
                },
                trys: [],
                ops: []
            };
            return r = {
                next: l(0),
                throw: l(1),
                return: l(2)
            },
            "function" === typeof Symbol && (r[Symbol.iterator] = function() {
                return this
            }
            ),
            r;
            function l(r) {
                return function(l) {
                    return function(r) {
                        if (t)
                            throw new TypeError("Generator is already executing.");
                        for (; a; )
                            try {
                                if (t = 1,
                                i && (o = 2 & r[0] ? i.return : r[0] ? i.throw || ((o = i.return) && o.call(i),
                                0) : i.next) && !(o = o.call(i, r[1])).done)
                                    return o;
                                switch (i = 0,
                                o && (r = [2 & r[0], o.value]),
                                r[0]) {
                                case 0:
                                case 1:
                                    o = r;
                                    break;
                                case 4:
                                    return a.label++,
                                    {
                                        value: r[1],
                                        done: !1
                                    };
                                case 5:
                                    a.label++,
                                    i = r[1],
                                    r = [0];
                                    continue;
                                case 7:
                                    r = a.ops.pop(),
                                    a.trys.pop();
                                    continue;
                                default:
                                    if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === r[0] || 2 === r[0])) {
                                        a = 0;
                                        continue
                                    }
                                    if (3 === r[0] && (!o || r[1] > o[0] && r[1] < o[3])) {
                                        a.label = r[1];
                                        break
                                    }
                                    if (6 === r[0] && a.label < o[1]) {
                                        a.label = o[1],
                                        o = r;
                                        break
                                    }
                                    if (o && a.label < o[2]) {
                                        a.label = o[2],
                                        a.ops.push(r);
                                        break
                                    }
                                    o[2] && a.ops.pop(),
                                    a.trys.pop();
                                    continue
                                }
                                r = e.call(n, a)
                            } catch (l) {
                                r = [6, l],
                                i = 0
                            } finally {
                                t = o = 0
                            }
                        if (5 & r[0])
                            throw r[1];
                        return {
                            value: r[0] ? r[1] : void 0,
                            done: !0
                        }
                    }([r, l])
                }
            }
        }, vc = function(n, e, t) {
            if (t || 2 === arguments.length)
                for (var i, o = 0, r = e.length; o < r; o++)
                    !i && o in e || (i || (i = Array.prototype.slice.call(e, 0, o)),
                    i[o] = e[o]);
            return n.concat(i || Array.prototype.slice.call(e))
        }, bc = function() {
            var n, e = (0,
            gn.$)().t, t = (0,
            J.I0)(), i = (0,
            V.useState)(["platform", "appPackage", "country", "connectionState", "ping", "currentResolution", "framesPerSecond", "clientID", "sessionID", "jitter", "buildVersion"]), o = i[0], r = i[1], a = (0,
            V.useContext)(Vo.Z), l = (0,
            J.v9)((function(n) {
                return n.play.peerConnectionState
            }
            )), d = (0,
            J.v9)((function(n) {
                return n.play.peerConnection
            }
            )), c = (0,
            J.v9)((function(n) {
                return n.play.isNerdMode
            }
            )), s = (0,
            J.v9)((function(n) {
                return n.play.tpEnabled
            }
            )), u = en.Z.getState(), p = "", f = "", h = "", g = "", m = u.play.videoRef;
            m && m.current && (f = m.current.offsetHeight.toString(),
            p = m.current.offsetWidth.toString());
            var x = u.play.countryCode || "-"
              , v = ["bitrate", "codec", "packets"]
              , b = new Map([["bitrate", "videoBitrate"], ["codec", "videoCodec"], ["packets", "videoPackets"]])
              , y = new Map([["bitrate", "audioBitrate"], ["codec", "audioCodec"], ["packets", "audioPackets"]])
              , w = (0,
            V.useState)(new Map([["platform", null === (n = (0,
            q.Tb)().description) || void 0 === n ? void 0 : n.split(" ").join(" ")], ["appPackage", a.packageName], ["country", x], ["connectionState", l], ["ping", ""], ["currentResolution", ""], ["framesPerSecond", ""], ["clientID", localStorage.getItem($.nP) || ""], ["sessionID", sessionStorage.getItem($.K3) || ""], ["jitter", ""], ["buildVersion", Le.f4], ["viewport", ""], ["devicePixelRatio", ""], ["frames", ""], ["videoBitrate", ""], ["videoCodec", ""], ["videoPackets", ""], ["audioBitrate", ""], ["audioCodec", ""], ["audioPackets", ""]]))
              , Z = w[0]
              , k = w[1]
              , A = (0,
            V.useState)({})
              , P = A[0]
              , S = A[1]
              , E = (0,
            V.useState)(!1)
              , C = E[0]
              , T = E[1]
              , I = (0,
            V.useState)(0)
              , O = I[0]
              , j = I[1]
              , D = (0,
            V.useRef)(null)
              , L = (0,
            J.v9)((function(n) {
                return n.ads.inGameAd
            }
            ));
            function z(n) {
                var e = parseInt(n, 10);
                return e && e > 0 ? "".concat(parseInt((e / 1e3).toString(), 10), " kHz") : "0 kHz"
            }
            function M(n) {
                var e = parseInt(n, 10);
                return e && e > 0 ? "".concat(parseFloat((e / 1e3).toString()).toFixed(2), " kbps") : "0 kbps"
            }
            function N(n) {
                var e, t, i, o, r, a, l = null === (t = null === (e = null === n || void 0 === n ? void 0 : n.data) || void 0 === e ? void 0 : e.connection) || void 0 === t ? void 0 : t.currentRoundTripTime, d = null === (o = null === (i = n.data) || void 0 === i ? void 0 : i.video) || void 0 === o ? void 0 : o.inbound[0], c = null === (a = null === (r = n.data) || void 0 === r ? void 0 : r.audio) || void 0 === a ? void 0 : a.inbound[0], s = d.frameWidth && d.frameHeight ? "".concat(d.frameWidth, " x ").concat(d.frameHeight) : "", u = !!d.framesPerSecond && d.framesPerSecond, p = "".concat(d.mimeType || "NA", "-").concat(z(d.clockRate || "0")), f = "".concat(c.mimeType || "NA", "-").concat(z(c.clockRate || "0")), h = M(d ? d.bitrate : "0"), g = M(c ? c.bitrate : "0"), m = "".concat(d.packetsLost || "0", " lost out of ").concat(d.packetsReceived || "0"), x = "".concat(c.packetsLost || "0", " lost out of ").concat(c.packetsReceived || "0"), v = parseFloat(((d.jitterBufferDelay - 0) / (d.jitterBufferEmittedCount - 0) * 1e3).toString()).toFixed(2);
                k((function(n) {
                    var e = new Map(n);
                    return l && e.set("ping", "".concat(parseFloat((1e3 * l).toString()).toFixed(2), "ms")),
                    s ? e.set("currentResolution", s) : e.delete("currentResolution"),
                    u ? e.set("framesPerSecond", u) : e.delete("framesPerSecond"),
                    "NaN" !== v ? e.set("jitter", "".concat(d.jitter, " / ").concat(v)) : e.delete("jitter"),
                    p ? e.set("videoCodec", p) : e.delete("videoCodec"),
                    f ? e.set("audioCodec", f) : e.delete("audioCodec"),
                    h ? e.set("videoBitrate", h) : e.delete("videoBitrate"),
                    g ? e.set("audioBitrate", g) : e.delete("audioBitrate"),
                    m ? e.set("videoPackets", m) : e.delete("videoPackets"),
                    x ? e.set("audioPackets", x) : e.delete("audioPackets"),
                    e
                }
                ))
            }
            (0,
            V.useEffect)((function() {
                if (c) {
                    if ((0,
                    pe.qO)("1"),
                    d instanceof RTCPeerConnection) {
                        var n = void 0;
                        P instanceof Jd.Q ? n = P : (n = new Jd.Q({
                            getStatsInterval: 1e3
                        }),
                        S(n));
                        try {
                            n.addPeer({
                                pc: d,
                                peerId: "1"
                            }),
                            n.on("stats", N)
                        } catch (e) {
                            (0,
                            Le.ZP)(e)
                        }
                    }
                } else
                    P instanceof Jd.Q && (P.removePeer("1"),
                    P.removeListener("stats", N),
                    (0,
                    pe.qO)("0"));
                return function() {
                    P instanceof Jd.Q && (P.removePeer("1"),
                    P.removeListener("stats", N))
                }
            }
            ), [c]),
            (0,
            V.useEffect)((function() {
                k((function(n) {
                    return n.set("connectionState", l),
                    n.set("clientID", localStorage.getItem($.nP) || ""),
                    n.set("sessionID", sessionStorage.getItem($.K3) || ""),
                    n
                }
                ))
            }
            ), [l]),
            (0,
            V.useEffect)((function() {
                7 === O && (r((function(n) {
                    return vc(vc([], n, !0), ["viewport", "devicePixelRatio", "frames"], !1)
                }
                )),
                D.current || (D.current = setInterval((function() {
                    !function() {
                        if (m && m.current) {
                            var n = m.current.getVideoPlaybackQuality();
                            0 !== n.totalVideoFrames && O >= 7 && (h = n.totalVideoFrames.toString(),
                            g = n.droppedVideoFrames.toString(),
                            k((function(n) {
                                var e = new Map(n);
                                return e.set("frames", "".concat(g, " dropped out of ").concat(h)),
                                e
                            }
                            )))
                        }
                    }()
                }
                ), 1e3)),
                k((function(n) {
                    return n.set("viewport", "".concat(f, " x ").concat(p)),
                    n.set("devicePixelRatio", parseFloat(window.devicePixelRatio.toString()).toFixed(2)),
                    n
                }
                )))
            }
            ), [O]);
            function B(n, e) {
                return n ? "connected" === e ? {
                    lightGreen: !0
                } : {
                    red: !0
                } : {}
            }
            return (0,
            cn.BX)(ec, {
                children: [C && (0,
                cn.tZ)(tc, {
                    children: (0,
                    cn.tZ)(xe.kk, {
                        style: {
                            margin: 0
                        },
                        children: e("copiedToClipboard")
                    })
                }), c && (0,
                cn.BX)(ic, {
                    style: W.ZP.playPageUpdate && L === $.us ? {
                        top: 0
                    } : {},
                    children: [(0,
                    cn.BX)(rc, {
                        style: {
                            color: "white"
                        },
                        children: [(0,
                        cn.tZ)(xe.T6, {
                            med: !0,
                            style: {
                                margin: 0
                            },
                            children: e("nerdMode")
                        }), (0,
                        cn.BX)(ac, {
                            children: [(0,
                            cn.tZ)(Qe.Z, {
                                name: "copy",
                                onClick: function() {
                                    return function() {
                                        return mc(this, void 0, void 0, (function() {
                                            var n;
                                            return xc(this, (function(t) {
                                                switch (t.label) {
                                                case 0:
                                                    n = "",
                                                    j(O + 1),
                                                    Z.forEach((function(t, i) {
                                                        n += "".concat(e(i), " : ").concat(t, "\n")
                                                    }
                                                    )),
                                                    t.label = 1;
                                                case 1:
                                                    return t.trys.push([1, 3, , 4]),
                                                    [4, navigator.clipboard.writeText(n)];
                                                case 2:
                                                    return t.sent(),
                                                    T(!0),
                                                    setTimeout((function() {
                                                        T(!1)
                                                    }
                                                    ), 2e3),
                                                    [3, 4];
                                                case 3:
                                                    return t.sent(),
                                                    [3, 4];
                                                case 4:
                                                    return [2]
                                                }
                                            }
                                            ))
                                        }
                                        ))
                                    }()
                                },
                                size: 18
                            }), (0,
                            cn.tZ)(Qe.Z, {
                                name: "divider",
                                size: 18
                            }), (0,
                            cn.tZ)(Qe.Z, {
                                id: "ng-nerd-close",
                                name: "cross-thin",
                                onClick: function() {
                                    return j(0),
                                    clearInterval(D.current),
                                    k((function(n) {
                                        var e = new Map(n);
                                        return e.delete("frames"),
                                        e.delete("viewport"),
                                        e.delete("devicePixelRatio"),
                                        e
                                    }
                                    )),
                                    void t({
                                        type: xn.Z.START_CONNECTION,
                                        payload: {
                                            isNerdMode: !1
                                        }
                                    })
                                },
                                size: 18
                            })]
                        })]
                    }), (0,
                    cn.tZ)(oc, {
                        children: e("nerdModeDescription")
                    }), (0,
                    cn.tZ)(lc, {}), o.map((function(n) {
                        return (0,
                        cn.BX)(dc, {
                            children: [(0,
                            cn.tZ)(xe.mH, {
                                style: {
                                    textAlign: "right",
                                    margin: 0,
                                    fontWeight: 400
                                },
                                children: e(n)
                            }), (0,
                            cn.tZ)("div", {
                                children: ":"
                            }), (0,
                            cn.tZ)(xe.mH, fc(fc({}, B("connectionState" === n, Z.get(n))), {}, {
                                style: {
                                    letterSpacing: "0.05em",
                                    opacity: .8,
                                    margin: 0
                                },
                                children: Z.get(n) || ""
                            }))]
                        }, n)
                    }
                    )), (0,
                    cn.BX)("div", {
                        style: {
                            color: "white",
                            display: "flex",
                            justifyContent: "space-between",
                            margin: "10px 0px 0"
                        },
                        children: [(0,
                        cn.tZ)(xe.mH, {
                            style: {
                                margin: 0,
                                fontSize: 11,
                                fontWeight: 400
                            },
                            children: (0,
                            cn.tZ)("strong", {
                                children: e("tp.toggle")
                            })
                        }), (0,
                        cn.BX)(uc, {
                            id: "ng-touch-points",
                            style: {
                                pointerEvents: "auto"
                            },
                            children: [(0,
                            cn.tZ)("input", {
                                type: "checkbox",
                                checked: s,
                                onChange: function() {
                                    return n = s,
                                    (0,
                                    pe.CE)(n ? "0" : "1"),
                                    void t({
                                        type: xn.Z.TP_ENABLED,
                                        payload: {
                                            tpEnabled: !n
                                        }
                                    });
                                    var n
                                }
                            }), (0,
                            cn.tZ)("span", {})]
                        })]
                    }), O >= 7 && (0,
                    cn.BX)("div", {
                        style: {
                            marginTop: "8px"
                        },
                        children: [(0,
                        cn.tZ)(lc, {}), (0,
                        cn.BX)(sc, {
                            children: [(0,
                            cn.BX)("div", {
                                children: [(0,
                                cn.tZ)(xe.mH, {
                                    style: {
                                        opacity: .8,
                                        margin: 0
                                    },
                                    children: e("video")
                                }), v.map((function(n) {
                                    return (0,
                                    cn.BX)(cc, {
                                        children: [(0,
                                        cn.tZ)(xe.mH, {
                                            style: {
                                                margin: 0
                                            },
                                            children: e(n)
                                        }), " ", (0,
                                        cn.tZ)("div", {
                                            children: ":"
                                        }), " ", (0,
                                        cn.tZ)(xe.mH, {
                                            style: {
                                                opacity: .8,
                                                margin: 0
                                            },
                                            children: Z.get(b.get(n) || "")
                                        })]
                                    })
                                }
                                ))]
                            }), (0,
                            cn.BX)("div", {
                                children: [(0,
                                cn.tZ)(xe.mH, {
                                    style: {
                                        opacity: .8,
                                        margin: 0
                                    },
                                    children: e("audio")
                                }), v.map((function(n) {
                                    return (0,
                                    cn.BX)(cc, {
                                        children: [(0,
                                        cn.tZ)(xe.mH, {
                                            style: {
                                                margin: 0
                                            },
                                            children: e(n)
                                        }), " ", (0,
                                        cn.tZ)("div", {
                                            children: ":"
                                        }), " ", (0,
                                        cn.tZ)(xe.mH, {
                                            style: {
                                                opacity: .8,
                                                margin: 0
                                            },
                                            children: Z.get(y.get(n) || "")
                                        })]
                                    })
                                }
                                ))]
                            })]
                        })]
                    })]
                })]
            })
        }, yc = function(n, e, t, i) {
            return new (t || (t = Promise))((function(o, r) {
                function a(n) {
                    try {
                        d(i.next(n))
                    } catch (e) {
                        r(e)
                    }
                }
                function l(n) {
                    try {
                        d(i.throw(n))
                    } catch (e) {
                        r(e)
                    }
                }
                function d(n) {
                    var e;
                    n.done ? o(n.value) : (e = n.value,
                    e instanceof t ? e : new t((function(n) {
                        n(e)
                    }
                    ))).then(a, l)
                }
                d((i = i.apply(n, e || [])).next())
            }
            ))
        }, wc = function(n, e) {
            var t, i, o, r, a = {
                label: 0,
                sent: function() {
                    if (1 & o[0])
                        throw o[1];
                    return o[1]
                },
                trys: [],
                ops: []
            };
            return r = {
                next: l(0),
                throw: l(1),
                return: l(2)
            },
            "function" === typeof Symbol && (r[Symbol.iterator] = function() {
                return this
            }
            ),
            r;
            function l(r) {
                return function(l) {
                    return function(r) {
                        if (t)
                            throw new TypeError("Generator is already executing.");
                        for (; a; )
                            try {
                                if (t = 1,
                                i && (o = 2 & r[0] ? i.return : r[0] ? i.throw || ((o = i.return) && o.call(i),
                                0) : i.next) && !(o = o.call(i, r[1])).done)
                                    return o;
                                switch (i = 0,
                                o && (r = [2 & r[0], o.value]),
                                r[0]) {
                                case 0:
                                case 1:
                                    o = r;
                                    break;
                                case 4:
                                    return a.label++,
                                    {
                                        value: r[1],
                                        done: !1
                                    };
                                case 5:
                                    a.label++,
                                    i = r[1],
                                    r = [0];
                                    continue;
                                case 7:
                                    r = a.ops.pop(),
                                    a.trys.pop();
                                    continue;
                                default:
                                    if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === r[0] || 2 === r[0])) {
                                        a = 0;
                                        continue
                                    }
                                    if (3 === r[0] && (!o || r[1] > o[0] && r[1] < o[3])) {
                                        a.label = r[1];
                                        break
                                    }
                                    if (6 === r[0] && a.label < o[1]) {
                                        a.label = o[1],
                                        o = r;
                                        break
                                    }
                                    if (o && a.label < o[2]) {
                                        a.label = o[2],
                                        a.ops.push(r);
                                        break
                                    }
                                    o[2] && a.ops.pop(),
                                    a.trys.pop();
                                    continue
                                }
                                r = e.call(n, a)
                            } catch (l) {
                                r = [6, l],
                                i = 0
                            } finally {
                                t = o = 0
                            }
                        if (5 & r[0])
                            throw r[1];
                        return {
                            value: r[0] ? r[1] : void 0,
                            done: !0
                        }
                    }([r, l])
                }
            }
        }, Zc = function(n) {
            var e, t, i, o, r, a, l, d, c = n.playToken, s = (0,
            V.useRef)(null), u = (0,
            V.useRef)(null), p = (0,
            V.useContext)(K.x), f = (0,
            J.I0)(), h = (0,
            gn.$)().t, g = (0,
            J.v9)((function(n) {
                return n.play.isFullscreen
            }
            )), m = (0,
            J.v9)((function(n) {
                return n.play.isImeEnabled
            }
            )), x = (0,
            J.v9)((function(n) {
                return n.play.robloxToast
            }
            )), v = (0,
            J.v9)((function(n) {
                return n.support.showSupport
            }
            )), b = (0,
            J.v9)((function(n) {
                return n.play.sessionMigrated
            }
            )), y = (0,
            J.v9)((function(n) {
                return n.play.duplicateTab
            }
            )), w = (0,
            J.v9)((function(n) {
                return n.play.sessionComplete
            }
            )), Z = (0,
            J.v9)((function(n) {
                return n.play.inactiveTimeout
            }
            )), k = (0,
            J.v9)((function(n) {
                return n.play.peerConnectionState
            }
            )), A = (0,
            J.v9)((function(n) {
                return n.play.showAboutUs
            }
            )), P = (0,
            J.v9)((function(n) {
                return n.play.showAllGamesOverlay
            }
            )), S = (0,
            J.v9)((function(n) {
                return n.play.showExploreGamesOverlay
            }
            )), E = (0,
            J.v9)((function(n) {
                return n.play.permissionType
            }
            )), C = (0,
            J.v9)((function(n) {
                return n.play.orientationValue
            }
            )), T = (0,
            J.v9)((function(n) {
                return n.auth.guestFlow
            }
            )), I = (0,
            J.v9)((function(n) {
                return n.play.consoleFooterRef
            }
            )), O = (0,
            J.v9)((function(n) {
                return n.play.consoleHeaderRef
            }
            )), j = (0,
            J.v9)((function(n) {
                return n.preferences.volume
            }
            )), D = (0,
            J.v9)((function(n) {
                return n.play.muted
            }
            )), L = (0,
            J.v9)((function(n) {
                return n.ads.inGameAds
            }
            )), z = (0,
            J.v9)((function(n) {
                return n.ads.inGameAd
            }
            )), M = (0,
            J.v9)((function(n) {
                return n.ads.midRollAds
            }
            )), N = (0,
            J.v9)((function(n) {
                return n.ads.midRollAdsMobile
            }
            )), B = (0,
            J.v9)((function(n) {
                return n.ads.rewardedAdsSDK
            }
            )), R = (0,
            J.v9)((function(n) {
                return n.ads.imaError
            }
            )), _ = (0,
            J.v9)((function(n) {
                return n.ads.displayAdsError
            }
            )), U = (0,
            J.v9)((function(n) {
                return n.ads.adBlocker
            }
            )), H = (0,
            J.v9)((function(n) {
                return n.play.inactivityModal
            }
            )), F = (0,
            J.v9)((function(n) {
                return n.play.nativeMouseEnabled
            }
            )), X = (0,
            J.v9)((function(n) {
                return n.preferences.legacyControls
            }
            )), G = (0,
            J.v9)((function(n) {
                return n.ads.adsEnded
            }
            )), Y = (0,
            J.v9)((function(n) {
                return n.play.isAndroidConnected
            }
            )), tn = (0,
            V.useState)(!1), rn = tn[0], an = tn[1], ln = Mo(), dn = W.ZP.features.shiftLock, sn = (0,
            V.useRef)(null), un = (0,
            J.v9)((function(n) {
                return n.play.showBackbtn
            }
            )), pn = (0,
            J.v9)((function(n) {
                return n.play.mouseLockActive
            }
            )), fn = (0,
            J.v9)((function(n) {
                return n.play.showMouseLockOnboarding
            }
            )), mn = (0,
            V.useState)(!1), vn = mn[0], bn = mn[1], yn = (0,
            V.useState)(!1), wn = yn[0], Zn = yn[1], kn = (0,
            V.useState)(!1), An = kn[0], Pn = kn[1], Sn = (0,
            J.v9)((function(n) {
                return n.play.orientation
            }
            ));
            (0,
            V.useEffect)((function() {
                return (0,
                W.rN)(),
                document.addEventListener("visibilitychange", pe.Co),
                window.addEventListener("blur", Go.u1),
                window.addEventListener("paste", Xo.$),
                function() {
                    (0,
                    W.rN)(),
                    document.removeEventListener("visibilitychange", pe.Co),
                    window.removeEventListener("blur", Go.u1),
                    window.removeEventListener("paste", Xo.$)
                }
            }
            ), []),
            (0,
            V.useEffect)((function() {
                pn ? setTimeout((function() {
                    Zn(!1),
                    bn(!0)
                }
                ), fn ? 4e3 : 1e3) : bn(!1)
            }
            ), [pn]),
            (0,
            V.useEffect)((function() {
                fn && (en.Z.dispatch({
                    type: xn.Z.UPDATE_MOUSE_LOCK,
                    payload: {
                        showMouseLockOnboarding: !1
                    }
                }),
                setTimeout((function() {
                    var n, e = null === (n = null === s || void 0 === s ? void 0 : s.current) || void 0 === n ? void 0 : n.getBoundingClientRect();
                    null !== e && void 0 !== e && (null === sn || void 0 === sn ? void 0 : sn.current) && (sn.current.style.visibility = "visible",
                    sn.current.style.width = "".concat(e.width, "px"),
                    sn.current.style.height = "".concat(e.height, "px"),
                    sn.current.style.top = "".concat(e.top, "px"),
                    sn.current.style.left = "".concat(e.left, "px"))
                }
                ), (0,
                q.G6)() ? 1e3 : 0),
                setTimeout((function() {
                    pn && Zn(!0)
                }
                ), 1e3),
                setTimeout((function() {
                    Zn(!1),
                    (null === sn || void 0 === sn ? void 0 : sn.current) && (sn.current.style.visibility = "collapse",
                    sn.current.style.width = "100%",
                    sn.current.style.height = "100%",
                    sn.current.style.top = "0px",
                    sn.current.style.left = "0px")
                }
                ), 3e3))
            }
            ), [fn]),
            (0,
            V.useEffect)((function() {
                var n = null === s || void 0 === s ? void 0 : s.current;
                return c ? y || (f({
                    type: xn.Z.START_CONNECTION,
                    payload: {
                        uaSessionId: sessionStorage.getItem($.K3) || "",
                        uaId: localStorage.getItem($.nP) || "",
                        videoRef: s,
                        videoContainerRef: u,
                        orientation: "Html" === W.ZP.appInfo.appType ? 90 === window.orientation ? nn.cj.landscape : nn.cj.portrait : W.ZP.appInfo.initialOrientation
                    }
                }),
                f(_o(c, s)),
                yc(void 0, void 0, void 0, (function() {
                    var n, e;
                    return wc(this, (function(t) {
                        switch (t.label) {
                        case 0:
                            return [4, De.Z.getAppPlayFeatures({
                                appId: W.ZP.appInfo.appId
                            }, {})];
                        case 1:
                            return (n = t.sent()).status === nn.YR.Success && Pn(null === (e = n.playFeatures) || void 0 === e ? void 0 : e.enableLiveChat),
                            [2]
                        }
                    }
                    ))
                }
                )),
                function(n) {
                    document.addEventListener("keydown", ce.n.keyDownEvent),
                    document.addEventListener("keyup", ce.n.keyUpEvent),
                    window.addEventListener("resize", Q.m7),
                    window.addEventListener("orientationchange", Q.m7),
                    window.addEventListener("orientationchange", Q.Ul),
                    n && (null === n || void 0 === n || n.addEventListener($.I6, ce.h.mouseDown),
                    null === n || void 0 === n || n.addEventListener($.Vy, ce.h.mouseUp),
                    null === n || void 0 === n || n.addEventListener($.Vy, No.ZP, {
                        once: !0
                    }),
                    null === n || void 0 === n || n.addEventListener("pointerleave", ce.h.mouseCancel),
                    null === n || void 0 === n || n.addEventListener("pointermove", ce.h.mouseMove),
                    null === n || void 0 === n || n.addEventListener("wheel", ce.h.mouseWheel),
                    window.addEventListener("wheel", ce.h.mouseWheelNative, !1))
                }(n)) : ((0,
                Le.ZP)("start session called without token"),
                setTimeout((function() {
                    window.location.reload()
                }
                ), 300)),
                function() {
                    !function(n) {
                        document.removeEventListener("keydown", ce.n.keyDownEvent),
                        document.removeEventListener("keyup", ce.n.keyUpEvent),
                        window.removeEventListener("orientationchange", Q.Ul),
                        window.removeEventListener("orientationchange", Q.m7),
                        n && (null === n || void 0 === n || n.removeEventListener($.I6, ce.h.mouseDown),
                        null === n || void 0 === n || n.removeEventListener($.Vy, ce.h.mouseUp),
                        null === n || void 0 === n || n.removeEventListener($.Vy, No.ZP),
                        null === n || void 0 === n || n.removeEventListener("pointerleave", ce.h.mouseCancel),
                        null === n || void 0 === n || n.removeEventListener("pointermove", ce.h.mouseMove),
                        null === n || void 0 === n || n.removeEventListener("wheel", ce.h.mouseWheel))
                    }(n)
                }
            }
            ), [s]),
            (0,
            V.useEffect)((function() {
                (0,
                Q.Ul)()
            }
            ), [ln, G, Y]),
            (0,
            V.useEffect)((function() {
                (0,
                Q.sZ)(),
                (0,
                Q.EN)()
            }
            ), [G, Y, C]),
            (0,
            V.useEffect)((function() {
                pn ? setTimeout((function() {
                    Zn(!1),
                    bn(!0)
                }
                ), fn ? 4e3 : 1e3) : bn(!1)
            }
            ), [pn]),
            (0,
            V.useEffect)((function() {
                s.current && (s.current.volume = j || .5,
                s.current.muted = D)
            }
            ), [j, D]),
            (0,
            V.useEffect)((function() {
                en.Z.dispatch({
                    type: xn.Z.SET_SENSITIVITY_POPUP,
                    payload: {
                        isSensitivityPopupOpen: !1
                    }
                })
            }
            ), [v]);
            return (0,
            cn.BX)(cn.HY, {
                children: [(0,
                cn.tZ)(mo, {}), Y && G ? (0,
                cn.tZ)(Qd, {
                    clicked: rn,
                    handleInfoIconClick: function() {
                        f({
                            type: xn.Z.MODAL_STATUS,
                            payload: {
                                showAboutUs: !A
                            }
                        })
                    },
                    onButtonClicked: function() {
                        an(!rn)
                    }
                }) : null, (0,
                cn.BX)(cn.HY, {
                    children: [(0,
                    cn.tZ)(bc, {}), G && (0,
                    q.SR)() && !W.ZP.playPageUpdate && (0,
                    cn.tZ)(sa.Z, {
                        type: "light"
                    }), m ? (0,
                    cn.tZ)(he, {}) : null, Y && x && (0,
                    cn.tZ)(Po, {
                        videoElm: s
                    }), !(0,
                    q.tq)() && dn && (0,
                    cn.tZ)(aa.Z, {}), (0,
                    cn.BX)(Md, {
                        ref: u,
                        backgroundColor: Y && G ? "rgba(11, 2, 35, .85)" : "transparent",
                        isLandscape: function() {
                            var n = !1;
                            return (0,
                            q.tq)() || (n = !1),
                            (0,
                            q.tq)() ? window.innerHeight < window.innerWidth && (0 === window.orientation || 90 === window.orientation) && (n = !0) : n = !1,
                            n
                        }(),
                        isMobile: (0,
                        q.tq)(),
                        children: [!g || (0,
                        q.tq)() || (0,
                        q.SR)() ? null : (0,
                        cn.tZ)($a.Wb, {}), y || b || Z || w && !T ? (0,
                        cn.tZ)(ke, {
                            type: b ? $.$T : y ? $.J8 : Z ? $.T$ : $.LD
                        }) : null, p.areAdsEnabled && L && Y && !_ && !U && (0,
                        cn.tZ)(hn, {}), p.areAdsEnabled && M && Y && !R && !U && (0,
                        cn.tZ)(Cn, {}), p.areAdsEnabled && N && Y && !R && !U && (0,
                        cn.tZ)(Hn, {}), B && Y && (0,
                        cn.tZ)(le, {}), v && (0,
                        cn.tZ)(so, {}), A && (0,
                        cn.tZ)(ge.Z, {
                            closeModal: function() {
                                f({
                                    type: xn.Z.MODAL_STATUS,
                                    payload: {
                                        showAboutUs: !1
                                    }
                                })
                            }
                        }), P && (0,
                        cn.tZ)(Pd, {}), S && (0,
                        cn.tZ)(Ld, {}), H && G && Y && (0,
                        cn.tZ)(Oe, {
                            logo: "inactivity",
                            heading: "areYouThere",
                            text: "idleScreentext",
                            buttonText: "iAmStillHere",
                            infoText: "stoppingGame"
                        }), "connected" === k && E && (0,
                        cn.tZ)($r, {}), un && Y && G && (0,
                        cn.tZ)(Bd, {
                            isMobile: (0,
                            q.tq)(),
                            children: (0,
                            cn.tZ)(de.z, {
                                variant: "primary",
                                onClick: pe.vT,
                                className: "back-btn",
                                text: (0,
                                q.tq)() ? h("back") : h("backToGame"),
                                rounded: (0,
                                q.tq)() ? {
                                    diameter: "56px"
                                } : null,
                                children: (0,
                                q.tq)() ? (0,
                                cn.tZ)(cn.HY, {
                                    children: (0,
                                    cn.tZ)("span", {
                                        className: "arrow",
                                        children: (0,
                                        cn.tZ)("svg", {
                                            width: "8",
                                            height: "13",
                                            viewBox: "0 0 8 13",
                                            fill: "none",
                                            xmlns: "http://www.w3.org/2000/svg",
                                            children: (0,
                                            cn.tZ)("path", {
                                                fillRule: "evenodd",
                                                clipRule: "evenodd",
                                                d: "M7.20711 0.792893C7.59763 1.18342 7.59763 1.81658 7.20711\n                                2.20711L2.91421 6.5L7.20711 10.7929C7.59763 11.1834 7.59763\n                                11.8166 7.20711 12.2071C6.81658 12.5976 6.18342 12.5976 5.79289\n                                12.2071L0.792893 7.20711C0.402369 6.81658 0.402369 6.18342 0.792893\n                                5.79289L5.79289 0.792893C6.18342 0.402369 6.81658 0.402369 7.20711 0.792893Z",
                                                fill: "white"
                                            })
                                        })
                                    })
                                }) : (0,
                                cn.tZ)(cn.HY, {
                                    children: (0,
                                    cn.tZ)("svg", {
                                        width: "19",
                                        height: "10",
                                        viewBox: "0 0 19 10",
                                        fill: "none",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        children: (0,
                                        cn.tZ)("path", {
                                            d: "M18.5 5L0.499997 5M0.499997 5L5 9.5M0.499997 5L5 0.500001",
                                            stroke: "white",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round"
                                        })
                                    })
                                })
                            })
                        }), !b && !w && !y && (0,
                        cn.BX)(cn.HY, {
                            children: [(0,
                            cn.tZ)(ca, {}), (0,
                            cn.tZ)(Do, {}), G && Y && !(0,
                            W.yj)() && (0,
                            cn.tZ)(ra, {
                                type: "success",
                                onClose: W.Fp,
                                children: (0,
                                on._B)() ? h("guestToast") : "".concat(h("welcome"), ", ").concat((null === (t = null === (e = (0,
                                on.et)()) || void 0 === e ? void 0 : e.name) || void 0 === t ? void 0 : t.split(" ")[0]) || h("player"), "!")
                            }), (0,
                            cn.tZ)(Nd, {
                                id: "js-game-video",
                                onContextMenu: function(n) {
                                    return n.preventDefault()
                                },
                                style: {
                                    cursor: !X && F ? "none" : "auto",
                                    opacity: "disconnected" === k || "failed" === k ? .5 : Y && G ? 1 : 0,
                                    top: !g && W.ZP.playPageUpdate && Sn !== nn.cj.portrait ? z !== $.V ? "calc(50% - ".concat((null === (i = null === I || void 0 === I ? void 0 : I.current) || void 0 === i ? void 0 : i.clientHeight) ? .5 * Number(null === (o = null === I || void 0 === I ? void 0 : I.current) || void 0 === o ? void 0 : o.clientHeight) : 0, "px)") : "calc(50% + ".concat((null === (r = null === O || void 0 === O ? void 0 : O.current) || void 0 === r ? void 0 : r.clientHeight) ? .5 * Number(null === (a = null === O || void 0 === O ? void 0 : O.current) || void 0 === a ? void 0 : a.clientHeight) : 0, "px)") : "50%",
                                    left: !g && W.ZP.playPageUpdate && z === $.V && Sn !== nn.cj.portrait ? "calc(50% - ".concat((null === (l = null === I || void 0 === I ? void 0 : I.current) || void 0 === l ? void 0 : l.clientWidth) ? .5 * Number(null === (d = null === I || void 0 === I ? void 0 : I.current) || void 0 === d ? void 0 : d.clientWidth) : 0, "px)") : "50%"
                                },
                                autoPlay: !0,
                                muted: !0,
                                disableRemotePlayback: !0,
                                playsInline: !0,
                                ref: s
                            }), W.ZP.playPageUpdate && !g && (0,
                            q.SR)() && G && Y && (0,
                            cn.tZ)(Il, {})]
                        }), !(0,
                        q.tq)() && (0,
                        cn.tZ)(Qa, {
                            className: G && Y && !w ? "" : "hidden"
                        })]
                    }), G && Y && !w && (0,
                    cn.tZ)(na.Ix, {}), (0,
                    q.SR)() && (0,
                    cn.BX)(cn.HY, {
                        children: [(0,
                        cn.tZ)(Ja.ed, {
                            ref: sn
                        }), (0,
                        cn.tZ)(Ja.Co, {
                            style: {
                                display: vn && pn ? "block" : "none",
                                background: W.ZP.playPageUpdate ? "rgba(0, 0, 0, 0.8)" : ""
                            },
                            children: (0,
                            cn.tZ)(Ja.ug, {
                                children: h("cursorLockedInfo")
                            })
                        }), (0,
                        cn.tZ)(Ja.Co, {
                            style: {
                                display: wn && pn ? "block" : "none",
                                background: W.ZP.playPageUpdate ? "rgba(0, 0, 0, 0.8)" : ""
                            },
                            children: (0,
                            cn.tZ)(Ja.ug, {
                                children: h("cursorLocked")
                            })
                        })]
                    }), G && (0,
                    W.CO)() && An && (0,
                    cn.tZ)(nl, {})]
                })]
            })
        }, kc = function(n, e) {
            return Object.defineProperty ? Object.defineProperty(n, "raw", {
                value: e
            }) : n.raw = e,
            n
        }, Ac = rn.ZP.div(hc || (hc = kc(["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  .preroll-wrapper-videoplayer-dimensions {\n    @media only screen and (max-width: 600px){\n      body.landscape & {\n        width: 100%;\n        height: 100%;\n      }\n    }\n  }\n"], ["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  .preroll-wrapper-videoplayer-dimensions {\n    @media only screen and (max-width: 600px){\n      body.landscape & {\n        width: 100%;\n        height: 100%;\n      }\n    }\n  }\n"]))), Pc = function() {
            return (Pc = Object.assign || function(n) {
                for (var e, t = 1, i = arguments.length; t < i; t++)
                    for (var o in e = arguments[t])
                        Object.prototype.hasOwnProperty.call(e, o) && (n[o] = e[o]);
                return n
            }
            ).apply(this, arguments)
        }, Sc = function(n) {
            var e, t, i, o, r, a, l = n.adsError, d = n.setAdsMuted, c = n.setAdStart, s = n.adsEnded, u = (0,
            J.I0)(), p = (0,
            V.useContext)(K.x), f = (0,
            V.useRef)(null), h = (0,
            V.useRef)(null), g = (0,
            J.v9)((function(n) {
                return n.play.videoRef
            }
            )), m = sessionStorage.getItem("utm_campaign"), x = 0, v = 0, b = window.devicePixelRatio, y = "Html" === W.ZP.appInfo.appType, w = 0, Z = 0, k = sessionStorage.getItem("adDisplayed"), A = !0;
            window.performance && window.performance.getEntriesByType && window.performance.getEntriesByType("navigation").length && "reload" === window.performance.getEntriesByType("navigation")[0].type && "yes" === k && (A = !1);
            var P = !A || "fredboat" === m || "carl" === m || y && !(0,
            q.tq)();
            P || (P = !(0,
            q.tq)() || (0,
            q.Em)() || (0,
            q.zc)() ? !(null === (a = null === (r = null === (o = p.playFeatures) || void 0 === o ? void 0 : o.ads) || void 0 === r ? void 0 : r.desktop) || void 0 === a ? void 0 : a.enablePrerollAds) : !(null === (i = null === (t = null === (e = p.playFeatures) || void 0 === e ? void 0 : e.ads) || void 0 === t ? void 0 : t.mobile) || void 0 === i ? void 0 : i.enablePrerollAds));
            var S = !1
              , E = (0,
            J.v9)((function(n) {
                return n.play.orientation
            }
            ))
              , C = function() {
                var n, e;
                c(!1),
                x = (null === (n = null === g || void 0 === g ? void 0 : g.current) || void 0 === n ? void 0 : n.clientHeight) || 0,
                v = (null === (e = null === g || void 0 === g ? void 0 : g.current) || void 0 === e ? void 0 : e.clientWidth) || 0,
                clearTimeout(h.current),
                (0,
                mn.L9)("AdNotFilled", {
                    adContext: "Preroll",
                    adType: "Video",
                    adWidth: w,
                    adHeight: Z,
                    viewPortInnerWidth: window.innerWidth,
                    viewPortInnerHeight: window.innerHeight,
                    androidWidth: x,
                    androidHeight: v,
                    pixelRatio: b
                }),
                u({
                    type: Y.Z.UPDATE_ADS_STATE,
                    payload: {
                        adsEnded: !0
                    }
                })
            }
              , T = function(n) {
                n.stopPropagation()
            }
              , I = function() {
                var n, e, t, i;
                (0,
                q.tq)() ? (t = E === nn.cj.portrait ? window.innerWidth - 20 : window.innerHeight - 20,
                i = E === nn.cj.portrait ? window.innerHeight : window.innerWidth) : (t = window.innerWidth - 20,
                i = window.innerHeight);
                var o, r, a = (o = i,
                Math.ceil(o * (4 / 3))), l = i;
                a > t && (r = a = t,
                l = Math.ceil(r / (4 / 3))),
                f.current && (f.current.style.width = "".concat(a, "px"),
                f.current.style.height = "".concat(l, "px")),
                function(n, e) {
                    w = n,
                    Z = e
                }(a, l),
                window.tude = window.tude || {
                    cmd: []
                },
                x = (null === (n = null === g || void 0 === g ? void 0 : g.current) || void 0 === n ? void 0 : n.clientHeight) || 0,
                v = (null === (e = null === g || void 0 === g ? void 0 : g.current) || void 0 === e ? void 0 : e.clientWidth) || 0,
                clearTimeout(h.current),
                h.current = setTimeout((function() {
                    c(!1),
                    (0,
                    mn.L9)("AdRequestTimeout", {
                        adContext: "Preroll",
                        adType: "Video",
                        adWidth: w,
                        adHeight: Z,
                        viewPortInnerWidth: window.innerWidth,
                        viewPortInnerHeight: window.innerHeight,
                        androidWidth: x,
                        androidHeight: v,
                        pixelRatio: b
                    }),
                    window.tude = window.tude || {
                        cmd: []
                    },
                    window.tude.cmd.push((function() {
                        try {
                            window.tude.closePlayer()
                        } catch (n) {}
                    }
                    )),
                    u({
                        type: Y.Z.UPDATE_ADS_STATE,
                        payload: {
                            adsEnded: !0
                        }
                    })
                }
                ), 15e3),
                window.tude.cmd.push((function() {
                    var n, e, t = tn(p);
                    x = (null === (n = null === g || void 0 === g ? void 0 : g.current) || void 0 === n ? void 0 : n.clientHeight) || 0,
                    v = (null === (e = null === g || void 0 === g ? void 0 : g.current) || void 0 === e ? void 0 : e.clientWidth) || 0,
                    window.tude.setVideoPageTargeting(Pc(Pc({}, t), {
                        ads_loc: "video-auto-pre"
                    })),
                    (0,
                    mn.L9)("AdRequested", {
                        adContext: "Preroll",
                        adType: "Video",
                        adWidth: w,
                        adHeight: Z,
                        viewPortInnerWidth: window.innerWidth,
                        viewPortInnerHeight: window.innerHeight,
                        androidWidth: x,
                        androidHeight: v,
                        pixelRatio: b
                    }),
                    window.tude.requestVideoAd({
                        divId: "preroll-wrapper",
                        code: "pre-roll",
                        options: {
                            volume: 0
                        },
                        sourceVideos: [{
                            src: "https://cdn.now.gg/apps-content/modVideo.mp4",
                            type: "video/mp4"
                        }]
                    }).on("NO_BID", (function() {
                        C()
                    }
                    )).on("ERROR", (function() {
                        C()
                    }
                    )).on("LOADED", (function() {
                        window.tude.setVideoVolume(0),
                        d(!0),
                        function() {
                            var n, e;
                            x = (null === (n = null === g || void 0 === g ? void 0 : g.current) || void 0 === n ? void 0 : n.clientHeight) || 0,
                            v = (null === (e = null === g || void 0 === g ? void 0 : g.current) || void 0 === e ? void 0 : e.clientWidth) || 0,
                            (0,
                            mn.L9)("AdDisplayed", {
                                adContext: "Preroll",
                                adType: "Video",
                                adWidth: w,
                                adHeight: Z,
                                viewPortInnerWidth: window.innerWidth,
                                viewPortInnerHeight: window.innerHeight,
                                androidWidth: x,
                                androidHeight: v,
                                pixelRatio: b
                            })
                        }()
                    }
                    )).on("COMPLETED", (function() {
                        c(!1),
                        S || u({
                            type: Y.Z.UPDATE_ADS_STATE,
                            payload: {
                                adsEnded: !0
                            }
                        })
                    }
                    )).on("SKIPPED", (function() {
                        c(!1),
                        u({
                            type: Y.Z.UPDATE_ADS_STATE,
                            payload: {
                                adsEnded: !0
                            }
                        }),
                        S = !0
                    }
                    )).on("STARTED", (function() {
                        clearTimeout(h.current),
                        S = !1,
                        sessionStorage.setItem("adDisplayed", "yes"),
                        c(!0)
                    }
                    )).on("CLICKED", (function(n) {
                        T(n)
                    }
                    )).on("VIDEO_CLICKED", (function(n) {
                        T(n)
                    }
                    )).on("PAUSED", (function(n) {
                        T(n)
                    }
                    )).on("RESUMED", (function(n) {
                        T(n)
                    }
                    ))
                }
                ))
            };
            return (0,
            V.useEffect)((function() {
                l || P ? u({
                    type: Y.Z.UPDATE_ADS_STATE,
                    payload: {
                        adsEnded: !0
                    }
                }) : I()
            }
            ), []),
            (0,
            V.useEffect)((function() {
                return function() {
                    return clearTimeout(h.current)
                }
            }
            ), []),
            l || s || P ? null : (0,
            cn.tZ)(Ac, {
                ref: f,
                id: "preroll-wrapper"
            })
        }, Ec = (0,
        V.memo)(Sc), Cc = t(9662), Tc = function() {
            var n, e = (0,
            V.useState)(!0), t = e[0], i = e[1], o = (0,
            V.useState)(!1), r = o[0], a = o[1], l = (0,
            V.useState)(4), d = l[0], c = l[1], s = (0,
            V.useState)(!1), u = s[0], p = s[1], f = (0,
            V.useRef)(null), h = (0,
            J.v9)((function(n) {
                return n.ads.imaError
            }
            )), g = (0,
            J.v9)((function(n) {
                return n.ads.adsEnded
            }
            )), m = (0,
            J.v9)((function(n) {
                return n.play.isAndroidConnected
            }
            )), x = (0,
            J.v9)((function(n) {
                return n.play.orientation
            }
            )), v = "Html" === W.ZP.appInfo.appType, b = (0,
            J.I0)();
            (0,
            V.useEffect)((function() {
                var n = sessionStorage.getItem("adDisplayed");
                W.ZP.features.ads || (b({
                    type: Y.Z.UPDATE_ADS_STATE,
                    payload: {
                        adsEnded: !0
                    }
                }),
                b({
                    type: Y.Z.LOAD_MID_ROLL,
                    payload: {
                        midRollAds: !1,
                        inGameAds: !1
                    }
                })),
                window.performance && window.performance.getEntriesByType && window.performance.getEntriesByType("navigation").length && "reload" === window.performance.getEntriesByType("navigation")[0].type && "yes" === n && b({
                    type: Y.Z.UPDATE_ADS_STATE,
                    payload: {
                        adsEnded: !0
                    }
                })
            }
            ), []),
            (0,
            V.useEffect)((function() {
                return u && (0,
                q.tq)() && x === nn.cj.landscape && (n = setTimeout((function() {
                    d >= 1 ? c(d - 1) : clearTimeout(n),
                    a(!0)
                }
                ), 1e3)),
                function() {
                    clearTimeout(n)
                }
            }
            ), [u, d]);
            var y = function() {
                var n = null === f || void 0 === f ? void 0 : f.current;
                n && setTimeout((function() {
                    var e = window.innerWidth
                      , t = window.innerHeight;
                    v || (x !== nn.cj.portrait || 90 !== window.orientation && -90 !== window.orientation) && (x === nn.cj.portrait || x === nn.cj.landscape && (90 === window.orientation || -90 === window.orientation)) ? (n.style.width = "".concat(e, "px"),
                    n.style.height = "".concat(t, "px")) : (n.style.width = "".concat(t, "px"),
                    n.style.height = "".concat(e, "px")),
                    (0,
                    Q.sZ)(),
                    (0,
                    Q.Ul)()
                }
                ), 100)
            }
              , w = function() {
                "visible" === document.visibilityState && setTimeout((function() {
                    y()
                }
                ), 200)
            };
            return (0,
            V.useEffect)((function() {
                return (0,
                q.tq)() && (y(),
                window.addEventListener("orientationchange", y),
                document.addEventListener("visibilitychange", w)),
                function() {
                    (0,
                    q.tq)() && (window.removeEventListener("orientationchange", y),
                    document.removeEventListener("visibilitychange", w))
                }
            }
            ), []),
            (0,
            cn.BX)(Cc.qX, {
                ref: f,
                showBackground: !(g && !m),
                children: [(0,
                cn.tZ)(qn, {
                    animateSmall: g || u
                }), (0,
                cn.tZ)(Ec, {
                    setAdsMuted: i,
                    adsError: h,
                    setAdStart: p,
                    adsEnded: g
                }), u && !g && (0,
                cn.tZ)(zn, {
                    isInteracted: r,
                    handleVolume: function() {
                        a(!0),
                        window.tude.setVideoVolume(t ? 1 : 0),
                        i(!t)
                    },
                    adsMuted: t
                })]
            })
        }, Ic = (0,
        V.memo)(Tc), Oc = t(4266), jc = {
            src: "/play/_next/static/media/google.ad9f69b8.svg",
            height: 32,
            width: 32
        }, Dc = {
            src: "/play/_next/static/media/discord.2f4143da.svg",
            height: 32,
            width: 32
        }, Lc = {
            src: "/play/_next/static/media/facebook.5cb8ecec.svg",
            height: 32,
            width: 32
        }, zc = function(n, e) {
            return Object.defineProperty ? Object.defineProperty(n, "raw", {
                value: e
            }) : n.raw = e,
            n
        }, Mc = rn.ZP.div(gc || (gc = zc(["\n  font-family: ", ";\n\n  ", "\n"], ["\n  font-family: ", ";\n\n  ", "\n"])), (function(n) {
            return n.theme.fontFamily
        }
        ), (function(n) {
            var e = n.color
              , t = void 0 === e ? "#5B5273" : e;
            return "\n    color: ".concat(t, ";\n    a {\n      color: ").concat(t, ";\n    }\n  ")
        }
        ));
        function Nc(n, e) {
            var t = Object.keys(n);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(n);
                e && (i = i.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable
                }
                ))),
                t.push.apply(t, i)
            }
            return t
        }
        function Bc(n) {
            for (var e = 1; e < arguments.length; e++) {
                var t = null != arguments[e] ? arguments[e] : {};
                e % 2 ? Nc(Object(t), !0).forEach((function(e) {
                    (0,
                    je.Z)(n, e, t[e])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(t)) : Nc(Object(t)).forEach((function(e) {
                    Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(t, e))
                }
                ))
            }
            return n
        }
        var Rc, _c, Uc, Hc, Fc, Xc, Gc, Vc, Kc, Yc, Wc, qc, Qc, Jc, $c, ns, es, ts, is, os, rs, as, ls, ds, cs, ss, us, ps, fs, hs, gs, ms, xs, vs, bs, ys, ws, Zs, ks, As, Ps, Ss, Es, Cs, Ts, Is, Os, js, Ds = function(n) {
            var e = (0,
            gn.$)().t;
            return (0,
            cn.BX)(Mc, Bc(Bc({}, n), {}, {
                children: [e("disclaimer"), " ", (0,
                cn.tZ)("a", {
                    target: "_blank",
                    rel: "noopener noreferrer",
                    href: "https://now.gg/terms-and-privacy.html#terms",
                    children: e("terms")
                }), " ", "and", " ", (0,
                cn.tZ)("a", {
                    target: "_blank",
                    rel: "noopener noreferrer",
                    href: "https://now.gg/terms-and-privacy.html#privacy",
                    children: e("privacyPolicy")
                }), ", including", " ", (0,
                cn.tZ)("a", {
                    target: "_blank",
                    rel: "noopener noreferrer",
                    href: "https://now.gg/terms-and-privacy.html#cookie-policy",
                    children: e("cookieUse")
                })]
            }))
        }, Ls = function(n, e) {
            return Object.defineProperty ? Object.defineProperty(n, "raw", {
                value: e
            }) : n.raw = e,
            n
        }, zs = (0,
        rn.iv)(Rc || (Rc = Ls(["\n  @media screen and (orientation: landscape) and (max-height: 575.98px),\n  (orientation: portrait) and (max-width: 600px) {\n    justify-content: flex-end;\n  }\n\n  @media screen and (orientation: portrait) and (max-width: 600px) {\n    align-items: flex-end;\n  }\n"], ["\n  @media screen and (orientation: landscape) and (max-height: 575.98px),\n  (orientation: portrait) and (max-width: 600px) {\n    justify-content: flex-end;\n  }\n\n  @media screen and (orientation: portrait) and (max-width: 600px) {\n    align-items: flex-end;\n  }\n"]))), Ms = (0,
        rn.iv)(_c || (_c = Ls(["\n  filter: drop-shadow(0px 12px 32px rgba(0, 0, 0, 0.64));\n  width: 100%;\n  max-width: 440px;\n  padding: 0;\n  border: 0;\n\n  @media screen and (orientation: portrait) and (max-width: 600px),\n  (orientation: landscape) and (max-height: 575.98px) {\n    width: calc(100vw - 32px);\n\n    .content-section {\n      padding: 24px;\n    }\n  }\n\n  @media screen and (orientation: landscape) and (max-height: 575.98px) {\n    &.split {\n      height: 100%;\n      border-radius: 0;\n      max-width: 340px;\n      margin: 0;\n    }\n\n    .login-container::before {\n      border-radius: 0;\n    }\n\n    &.popup {\n      border-radius: 0;\n      max-width: 380px;\n\n      .content-section {\n        gap: 16px;\n      }\n    }\n  }\n\n  @media screen and (orientation: portrait) and (max-width: 600px) {\n    margin: 0 auto 16px;\n    &.rotate-modal {\n      // &.split {\n      //   transform: rotate(-90deg) translateX(calc(-100% - 16px));\n      //   width: calc(100vw - 32px);\n      //   transform-origin: top left;\n      //   padding-bottom: 8px;\n      //   margin: auto 86px;\n      // }\n    }\n\n    &.popup {\n      margin: auto;\n      .nowgg-logo, .game-logo {\n        display: none;\n      }\n    }\n  }\n"], ["\n  filter: drop-shadow(0px 12px 32px rgba(0, 0, 0, 0.64));\n  width: 100%;\n  max-width: 440px;\n  padding: 0;\n  border: 0;\n\n  @media screen and (orientation: portrait) and (max-width: 600px),\n  (orientation: landscape) and (max-height: 575.98px) {\n    width: calc(100vw - 32px);\n\n    .content-section {\n      padding: 24px;\n    }\n  }\n\n  @media screen and (orientation: landscape) and (max-height: 575.98px) {\n    &.split {\n      height: 100%;\n      border-radius: 0;\n      max-width: 340px;\n      margin: 0;\n    }\n\n    .login-container::before {\n      border-radius: 0;\n    }\n\n    &.popup {\n      border-radius: 0;\n      max-width: 380px;\n\n      .content-section {\n        gap: 16px;\n      }\n    }\n  }\n\n  @media screen and (orientation: portrait) and (max-width: 600px) {\n    margin: 0 auto 16px;\n    &.rotate-modal {\n      // &.split {\n      //   transform: rotate(-90deg) translateX(calc(-100% - 16px));\n      //   width: calc(100vw - 32px);\n      //   transform-origin: top left;\n      //   padding-bottom: 8px;\n      //   margin: auto 86px;\n      // }\n    }\n\n    &.popup {\n      margin: auto;\n      .nowgg-logo, .game-logo {\n        display: none;\n      }\n    }\n  }\n"]))), Ns = rn.ZP.div(Uc || (Uc = Ls(["\n  position: relative;\n  height: 100px;\n  width: 100%;\n  text-align: center;\n\n  img {\n    max-width: 100%;\n    max-height: 100%;\n  }\n\n  @media screen and (orientation: portrait) and (max-width: 600px),\n  (orientation: landscape) and (max-height: 575.98px) {\n    height: 80px;\n  }\n\n  .landscape & {\n    @media screen and (orientation: landscape) and (max-height: 575.98px) {\n      display: none;\n    }\n  }\n"], ["\n  position: relative;\n  height: 100px;\n  width: 100%;\n  text-align: center;\n\n  img {\n    max-width: 100%;\n    max-height: 100%;\n  }\n\n  @media screen and (orientation: portrait) and (max-width: 600px),\n  (orientation: landscape) and (max-height: 575.98px) {\n    height: 80px;\n  }\n\n  .landscape & {\n    @media screen and (orientation: landscape) and (max-height: 575.98px) {\n      display: none;\n    }\n  }\n"]))), Bs = rn.ZP.div(Hc || (Hc = Ls(["\n  padding: 24px;\n  display: flex;\n  align-items: center;\n\n  img {\n    width: 189px !important;\n    height: 48px !important;\n  }\n\n  @media screen and (orientation: portrait) and (max-width: 600px),\n  (orientation: landscape) and (max-height: 575.98px) {\n    padding: 4px;\n    margin-top: 10px;\n    // max-width: 150px;\n  }\n  .landscape .popup & {\n    @media screen and (orientation: landscape) and (max-height: 575.98px) {\n      display: none;\n    }\n  }\n  .landscape & {\n    @media screen and (orientation: landscape) and (max-height: 575.98px) {\n      display: none;\n    }\n  }\n"], ["\n  padding: 24px;\n  display: flex;\n  align-items: center;\n\n  img {\n    width: 189px !important;\n    height: 48px !important;\n  }\n\n  @media screen and (orientation: portrait) and (max-width: 600px),\n  (orientation: landscape) and (max-height: 575.98px) {\n    padding: 4px;\n    margin-top: 10px;\n    // max-width: 150px;\n  }\n  .landscape .popup & {\n    @media screen and (orientation: landscape) and (max-height: 575.98px) {\n      display: none;\n    }\n  }\n  .landscape & {\n    @media screen and (orientation: landscape) and (max-height: 575.98px) {\n      display: none;\n    }\n  }\n"]))), Rs = rn.ZP.div(Fc || (Fc = Ls(["\n  height: 100%;\n  display: flex;\n  color: ", ";\n\n  @media screen and (orientation: portrait) and (max-width: 600px),\n    (orientation: landscape) and (max-height: 575.98px) {\n    justify-content: space-around;\n  }\n\n  > ", ", > ", " {\n    display: none;\n  }\n\n  .landscape &.popup {\n    @media screen and (orientation: portrait) and (max-width: 600px),\n    (orientation: landscape) and (max-height: 575.98px) {\n      justify-content: center;\n    }\n  }\n\n  .landscape &.split {\n    @media screen and (orientation: landscape) and (max-height: 575.98px) {\n      align-items: flex-end;\n      padding: 0;\n      border-radius: 0;\n      > ", " {\n        position: fixed;\n        bottom: 20px;\n        left: 20px;\n        display: block;\n        width: 200px;\n        text-align: left;\n      }\n      > ", " {\n        display: block;\n        position: fixed;\n        left: 20px;\n        top: 30px;\n      }\n    }\n  }\n"], ["\n  height: 100%;\n  display: flex;\n  color: ", ";\n\n  @media screen and (orientation: portrait) and (max-width: 600px),\n    (orientation: landscape) and (max-height: 575.98px) {\n    justify-content: space-around;\n  }\n\n  > ", ", > ", " {\n    display: none;\n  }\n\n  .landscape &.popup {\n    @media screen and (orientation: portrait) and (max-width: 600px),\n    (orientation: landscape) and (max-height: 575.98px) {\n      justify-content: center;\n    }\n  }\n\n  .landscape &.split {\n    @media screen and (orientation: landscape) and (max-height: 575.98px) {\n      align-items: flex-end;\n      padding: 0;\n      border-radius: 0;\n      > ", " {\n        position: fixed;\n        bottom: 20px;\n        left: 20px;\n        display: block;\n        width: 200px;\n        text-align: left;\n      }\n      > ", " {\n        display: block;\n        position: fixed;\n        left: 20px;\n        top: 30px;\n      }\n    }\n  }\n"])), (function(n) {
            var e;
            return null === (e = n.theme.colors) || void 0 === e ? void 0 : e.white
        }
        ), Ns, Bs, Ns, Bs), _s = rn.ZP.div(Xc || (Xc = Ls(["\n    display: flex;\n    justify-content: center;\n    flex-direction: column;\n    align-items: center;\n\n    .cross-icon {\n      position: absolute;\n      right: 20px;\n      top: 20px;\n      color: ", ";\n    }\n\n    @media screen and (orientation: landscape) and (max-height: 300px) {\n      .login-options {\n        span:nth-child(2), span:nth-child(3) {\n          margin-bottom: 8px;\n        }\n      }\n    }\n"], ["\n    display: flex;\n    justify-content: center;\n    flex-direction: column;\n    align-items: center;\n\n    .cross-icon {\n      position: absolute;\n      right: 20px;\n      top: 20px;\n      color: ", ";\n    }\n\n    @media screen and (orientation: landscape) and (max-height: 300px) {\n      .login-options {\n        span:nth-child(2), span:nth-child(3) {\n          margin-bottom: 8px;\n        }\n      }\n    }\n"])), (function(n) {
            return n.theme.colors.base900
        }
        )), Us = rn.ZP.p(Gc || (Gc = Ls(["\n    position: relative;\n    font-size: 14px;\n    line-height: 150%;\n    color: ", ";\n    text-align: center;\n    margin: 10px 0;\n    width: 100%;\n    font-family: 'Fredoka', sans-serif;\n    font-display: swap;\n    @media screen and (orientation: portrait) and (max-width: 600px),\n    (orientation: landscape) and (max-height: 575.98px) {\n      margin:3px 0;\n    }\n    &:before, &:after {\n      content: '';\n      position: absolute;\n      height: 0.5px;\n      background: ", ";\n      width: calc(50% - 70px);\n      top: 48%;\n    }\n\n    &:before {\n      left: 0;\n    }\n    &:after {\n      right: 0;\n    }\n"], ["\n    position: relative;\n    font-size: 14px;\n    line-height: 150%;\n    color: ", ";\n    text-align: center;\n    margin: 10px 0;\n    width: 100%;\n    font-family: 'Fredoka', sans-serif;\n    font-display: swap;\n    @media screen and (orientation: portrait) and (max-width: 600px),\n    (orientation: landscape) and (max-height: 575.98px) {\n      margin:3px 0;\n    }\n    &:before, &:after {\n      content: '';\n      position: absolute;\n      height: 0.5px;\n      background: ", ";\n      width: calc(50% - 70px);\n      top: 48%;\n    }\n\n    &:before {\n      left: 0;\n    }\n    &:after {\n      right: 0;\n    }\n"])), (function(n) {
            return n.theme.colors.base500
        }
        ), (function(n) {
            return n.theme.colors.base500
        }
        )), Hs = rn.ZP.div(Vc || (Vc = Ls(["\n  padding: 0 24px 24px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 16px;\n  color: ", ";\n  @media screen and (orientation: portrait) and (max-width: 600px),\n  (orientation: landscape) and (max-height: 575.98px) {\n    padding: 15px 20px;\n  }\n  @media screen and (orientation: landscape) and (max-height: 575.98px) {\n    gap:2px;\n    .landscape .split {\n      padding: 0 24px;\n    }\n  }\n"], ["\n  padding: 0 24px 24px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 16px;\n  color: ", ";\n  @media screen and (orientation: portrait) and (max-width: 600px),\n  (orientation: landscape) and (max-height: 575.98px) {\n    padding: 15px 20px;\n  }\n  @media screen and (orientation: landscape) and (max-height: 575.98px) {\n    gap:2px;\n    .landscape .split {\n      padding: 0 24px;\n    }\n  }\n"])), (function(n) {
            return n.theme.colors.base900
        }
        )), Fs = rn.ZP.div(Kc || (Kc = Ls(["\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  z-index: 11;\n  text-align: center;\n  color: ", ";\n  font-size: 12px;\n  padding: 14px;\n  background: rgba(0, 0, 0, 0.3);\n  @media screen and (orientation: portrait) and (max-width: 600px),\n    (orientation: landscape) and (max-height: 575.98px) {\n    display: none;\n  }\n"], ["\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  z-index: 11;\n  text-align: center;\n  color: ", ";\n  font-size: 12px;\n  padding: 14px;\n  background: rgba(0, 0, 0, 0.3);\n  @media screen and (orientation: portrait) and (max-width: 600px),\n    (orientation: landscape) and (max-height: 575.98px) {\n    display: none;\n  }\n"])), (function(n) {
            var e;
            return null === (e = n.theme.colors) || void 0 === e ? void 0 : e.white
        }
        )), Xs = rn.ZP.footer(Yc || (Yc = Ls(["\n  padding: 6px;\n  border-radius: 4px;\n  opacity: .8;\n  font-size: 12px;\n  text-align: center;\n\n  @media screen and (orientation: portrait) and (max-width: 600px),\n  (orientation: landscape) and (max-height: 575.98px) {\n    font-size: 11px;\n    padding: 4px;\n  }\n  @media screen and (orientation: landscape) and (max-width: 600px),\n  (orientation: landscape) and (max-height: 575.98px) {\n    padding: 0 4px;\n  }\n"], ["\n  padding: 6px;\n  border-radius: 4px;\n  opacity: .8;\n  font-size: 12px;\n  text-align: center;\n\n  @media screen and (orientation: portrait) and (max-width: 600px),\n  (orientation: landscape) and (max-height: 575.98px) {\n    font-size: 11px;\n    padding: 4px;\n  }\n  @media screen and (orientation: landscape) and (max-width: 600px),\n  (orientation: landscape) and (max-height: 575.98px) {\n    padding: 0 4px;\n  }\n"]))), Gs = rn.ZP.div(Wc || (Wc = Ls(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 16px;\n\n  @media screen and (orientation: landscape) and (max-height: 575.98px)  {\n    grid-column-start: 2;\n    grid-column-end: 2;\n    grid-row-start: 1;\n    grid-row-end: 4;\n  }\n\n  button {\n    width: calc(50% - 8px);\n    gap: 5px;\n\n    &:first-child {\n      width: 100%;\n    }\n  }\n\n  .guest-btn {\n    width: 100%;\n    margin: 12px 0;\n    color: ", ";\n    border-color: #A6A6A6;\n    text-transform: capitalize;\n\n    .landscape .split & {\n      @media screen and (orientation: landscape) and (max-height: 575.98px) {\n        margin: 4px 0;\n      }\n    }\n  }\n"], ["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 16px;\n\n  @media screen and (orientation: landscape) and (max-height: 575.98px)  {\n    grid-column-start: 2;\n    grid-column-end: 2;\n    grid-row-start: 1;\n    grid-row-end: 4;\n  }\n\n  button {\n    width: calc(50% - 8px);\n    gap: 5px;\n\n    &:first-child {\n      width: 100%;\n    }\n  }\n\n  .guest-btn {\n    width: 100%;\n    margin: 12px 0;\n    color: ", ";\n    border-color: #A6A6A6;\n    text-transform: capitalize;\n\n    .landscape .split & {\n      @media screen and (orientation: landscape) and (max-height: 575.98px) {\n        margin: 4px 0;\n      }\n    }\n  }\n"])), (function(n) {
            return n.theme.colors.white
        }
        )), Vs = rn.ZP.span(qc || (qc = Ls(["\n  display: flex;\n  border-radius: 50%;\n  background: white;\n  padding: 4px;\n  box-shadow: inset 0px -2px 0px rgba(0, 0, 0, 0.4);\n"], ["\n  display: flex;\n  border-radius: 50%;\n  background: white;\n  padding: 4px;\n  box-shadow: inset 0px -2px 0px rgba(0, 0, 0, 0.4);\n"]))), Ks = rn.ZP.div(Qc || (Qc = Ls(["\n  z-index: 100;\n  padding: 12px 16px;\n  text-align: center;\n  color: ", ";\n  background-color: ", ";\n  position: fixed;\n  left: 0;\n  top: 0;\n  right: 0;\n  font-size: 14px;\n  line-height: 22px;\n  @media screen and (orientation: portrait) and (max-width: 600px),\n  (orientation: landscape) and (max-height: 575.98px) {\n    font-size: 12px;\n    padding: 4px;\n  }\n"], ["\n  z-index: 100;\n  padding: 12px 16px;\n  text-align: center;\n  color: ", ";\n  background-color: ", ";\n  position: fixed;\n  left: 0;\n  top: 0;\n  right: 0;\n  font-size: 14px;\n  line-height: 22px;\n  @media screen and (orientation: portrait) and (max-width: 600px),\n  (orientation: landscape) and (max-height: 575.98px) {\n    font-size: 12px;\n    padding: 4px;\n  }\n"])), (function(n) {
            return n.theme.colors.white
        }
        ), (function(n) {
            return n.theme.colors.warning
        }
        )), Ys = rn.ZP.div(Jc || (Jc = Ls(["\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  z-index: 990;\n  display: none;\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: space-between;\n  height: 100%;\n  padding-left: 24px;\n  padding-top: ", ";\n  max-width: 40%;\n\n  @media screen and (orientation: landscape) and (max-height: 575.98px) {\n    display: flex;\n\n    & > span {\n      img {\n        width: 190px !important;\n        height: 48px !important;\n      }\n    }\n\n    & > div {\n      display: flex !important;\n      img {\n        width: auto;\n      }\n    }\n  }\n"], ["\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  z-index: 990;\n  display: none;\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: space-between;\n  height: 100%;\n  padding-left: 24px;\n  padding-top: ", ";\n  max-width: 40%;\n\n  @media screen and (orientation: landscape) and (max-height: 575.98px) {\n    display: flex;\n\n    & > span {\n      img {\n        width: 190px !important;\n        height: 48px !important;\n      }\n    }\n\n    & > div {\n      display: flex !important;\n      img {\n        width: auto;\n      }\n    }\n  }\n"])), (function(n) {
            return n.sessionComplete ? "54px" : "24px"
        }
        )), Ws = function() {
            var n, e = (0,
            V.useContext)(K.x), t = (0,
            gn.$)().t, i = (0,
            J.I0)(), o = (0,
            V.useState)(), r = o[0], a = o[1], l = (0,
            V.useState)("Pre"), d = l[0], c = l[1], s = (0,
            J.v9)((function(n) {
                return n.play.isAndroidConnected
            }
            )), u = (0,
            J.v9)((function(n) {
                return n.play.sessionComplete
            }
            ));
            (0,
            V.useEffect)((function() {
                var n = "Logout";
                u ? n = "Post" : s && (n = "Mid"),
                (0,
                mn.L9)("LoginPageDisplayed", {
                    loginPageContext: n
                }),
                c(n),
                a(!(0,
                on._B)() || (0,
                W.Hy)())
            }
            ), []);
            var p = function(n, e) {
                (0,
                mn.L9)("AuthProviderClicked", {
                    authProvider: n,
                    loginPageContext: e
                });
                var t = W.ZP.authRedirectionUrl.replace("$provider", n).replace("$continueUrl", W.ZP.authUseThirdPartyFlow ? window.location.pathname : window.location.href.split("?")[0]);
                window.location.href = t
            }
              , f = function() {
                i({
                    type: Oc.Z.TOGGLE_LOGIN,
                    payload: {
                        showLogin: !0
                    }
                }),
                i({
                    type: Oc.Z.TOGGLE_MANUAL_LOGOUT_LOGIN,
                    payload: {
                        manualLogoutShowLogin: !1
                    }
                })
            };
            return (0,
            cn.BX)(cn.HY, {
                children: [u && (0,
                cn.tZ)(Ks, {
                    children: t("endLogin")
                }), r && (0,
                cn.BX)(Ys, {
                    sessionComplete: u,
                    children: [(0,
                    cn.tZ)(Rd.Z, {
                        themeType: "light"
                    }), (0,
                    cn.tZ)(Ns, {
                        children: (0,
                        cn.tZ)("img", {
                            src: null === (n = null === e || void 0 === e ? void 0 : e.media) || void 0 === n ? void 0 : n.logo,
                            alt: "".concat(e.appName, " Logo")
                        })
                    })]
                }), (0,
                cn.tZ)(ve.Z, {
                    className: "\n          ".concat(!s && r || u ? "split" : "popup", " ").concat(r ? "" : "rotate-modal", "\n        "),
                    onClickOverlay: s && !u ? f : void 0,
                    overlayStyles: zs,
                    modalStyles: Ms,
                    overlayBackgroundColor: ot.qm.gradients.linearDark,
                    modalBackgroundColor: ot.qm.gradients.radialDark,
                    showAvatarHeader: !(0,
                    q.tq)(),
                    children: (0,
                    cn.tZ)(Rs, {
                        children: (0,
                        cn.BX)(_s, {
                            style: {
                                border: "0"
                            },
                            className: "login-container",
                            children: [(0,
                            cn.tZ)(Bs, {
                                className: "nowgg-logo",
                                children: (0,
                                q.tq)() && (0,
                                cn.tZ)(Rd.Z, {})
                            }), !r && (0,
                            cn.tZ)(Je.A3, {
                                className: "cross-icon",
                                onClick: f,
                                style: {
                                    position: "absolute",
                                    right: "16px",
                                    top: "16px"
                                },
                                children: (0,
                                cn.tZ)(Qe.Z, {
                                    name: "cross-thin",
                                    size: 16,
                                    id: "login-close-icon"
                                })
                            }), (0,
                            cn.BX)(Hs, {
                                className: "content-section",
                                children: [!s && W.ZP.features.requireAuth && (0,
                                cn.tZ)(xe.T4, {
                                    bold: !0,
                                    className: "sign-in-head",
                                    children: t("signInHead")
                                }), s && !u && (0,
                                cn.tZ)(xe.T4, {
                                    bold: !0,
                                    children: t("signInProg")
                                }), u && (0,
                                cn.tZ)(xe.T4, {
                                    bold: !0,
                                    children: t("signInInactive")
                                }), (0,
                                cn.BX)(Gs, {
                                    className: "login-options",
                                    children: [(0,
                                    cn.BX)(de.z, {
                                        onClick: function() {
                                            return p("google", d)
                                        },
                                        id: "ng-google",
                                        variant: "primary",
                                        children: [(0,
                                        cn.tZ)(Vs, {
                                            children: (0,
                                            cn.tZ)("img", {
                                                alt: "",
                                                src: (0,
                                                Tn.j)(jc),
                                                width: 20,
                                                height: 20
                                            })
                                        }), " ", "Sign in with Google"]
                                    }), (0,
                                    cn.BX)(de.z, {
                                        onClick: function() {
                                            return p("discord", d)
                                        },
                                        variant: "discord",
                                        children: [(0,
                                        cn.tZ)(Vs, {
                                            children: (0,
                                            cn.tZ)("img", {
                                                alt: "",
                                                src: (0,
                                                Tn.j)(Dc),
                                                width: 20,
                                                height: 20
                                            })
                                        }), " ", "Discord"]
                                    }), (0,
                                    cn.BX)(de.z, {
                                        onClick: function() {
                                            return p("facebook", d)
                                        },
                                        variant: "facebook",
                                        children: [(0,
                                        cn.tZ)(Vs, {
                                            children: (0,
                                            cn.tZ)("img", {
                                                alt: "",
                                                src: (0,
                                                Tn.j)(Lc),
                                                width: 20,
                                                height: 20
                                            })
                                        }), " ", "Facebook"]
                                    }), !W.ZP.features.requireAuth && r && (0,
                                    cn.BX)(cn.HY, {
                                        children: [(0,
                                        cn.BX)(Us, {
                                            children: [t("or"), " ", t("asGuest")]
                                        }), (0,
                                        cn.tZ)(de.z, {
                                            className: "guest-btn",
                                            variant: "secondary",
                                            text: t("goRogue"),
                                            onClick: function() {
                                                return n = d,
                                                (0,
                                                mn.L9)("PlayAsGuestClicked", {
                                                    loginPageContext: n
                                                }),
                                                (0,
                                                W.dr)(),
                                                (0,
                                                on.hB)(),
                                                (0,
                                                on.kS)(),
                                                void i({
                                                    type: Oc.Z.GUEST_FLOW,
                                                    payload: {
                                                        guestFlow: !0,
                                                        showPreloader: !1
                                                    }
                                                });
                                                var n
                                            }
                                        })]
                                    })]
                                }), (0,
                                cn.tZ)(Xs, {
                                    children: (0,
                                    cn.tZ)(Ds, {})
                                })]
                            })]
                        })
                    })
                }), !(s && !u) && (0,
                cn.tZ)(Fs, {
                    children: t("rights")
                })]
            })
        }, qs = function() {
            return (0,
            cn.BX)("svg", {
                width: "64",
                height: "64",
                viewBox: "0 0 64 64",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: [(0,
                cn.tZ)("path", {
                    d: "M15.8399 19.7726C6.95647 20.5695 0 28.0912 0 37.2457C0 46.9443 7.78508 54.7965 17.4008 54.7965H31.9496C31.9689 54.7965 31.9689 54.7965 31.9882 54.7965C22.3917 54.777 14.6259 46.9248 14.6259 37.2457V26.2059C14.6259 23.9319 15.0499 21.7551 15.8399 19.7726Z",
                    fill: "#FF42A5"
                }), (0,
                cn.tZ)("path", {
                    d: "M48.1557 19.7726C48.9458 21.7745 49.3697 23.9513 49.3697 26.2254V37.2651C49.3697 46.9443 41.6039 54.7965 32.0074 54.8159C32.0267 54.8159 32.0267 54.8159 32.046 54.8159H46.5948C56.2106 54.8159 63.9956 46.9637 63.9956 37.2651C63.9956 28.0912 57.0392 20.5695 48.1557 19.7726Z",
                    fill: "#B3D661"
                }), (0,
                cn.tZ)("path", {
                    d: "M31.9496 54.7965C31.9303 54.7965 31.9303 54.7965 31.9111 54.7965C31.9303 54.7965 31.9496 54.7965 31.9496 54.7965C31.9689 54.7965 31.9689 54.7965 31.9881 54.7965C31.9881 54.7965 31.9689 54.7965 31.9496 54.7965ZM31.9496 8.65515C24.5885 8.65515 18.3065 13.2615 15.7628 19.7726C16.2831 19.7337 16.8034 19.6949 17.3237 19.6949H31.8725C31.8918 19.6949 31.9303 19.6949 31.9496 19.6949C31.9689 19.6949 32.0074 19.6949 32.0267 19.6949H46.5755C47.0958 19.6949 47.6354 19.7143 48.1364 19.7726C45.612 13.2615 39.3107 8.65515 31.9496 8.65515Z",
                    fill: "#51A5C9"
                }), (0,
                cn.tZ)("path", {
                    d: "M31.8918 19.6949H17.3237C16.8034 19.6949 16.2639 19.7143 15.7628 19.7726C14.9728 21.7746 14.5488 23.9514 14.5488 26.2254V37.2651C14.5488 46.9443 22.3146 54.7965 31.9111 54.816C31.9304 54.816 31.9304 54.816 31.9496 54.816C22.3724 54.7771 14.6259 46.9249 14.6259 37.2651C14.6259 27.5859 22.3724 19.7532 31.9496 19.7143C31.9304 19.6949 31.9111 19.6949 31.8918 19.6949Z",
                    fill: "#4C4789"
                }), (0,
                cn.tZ)("path", {
                    d: "M46.5948 19.6949H32.046C32.0267 19.6949 31.9881 19.6949 31.9689 19.6949C41.5461 19.7338 49.2926 27.5859 49.2926 37.2457C49.2926 46.9249 41.5461 54.7576 31.9689 54.7965C31.9881 54.7965 31.9881 54.7965 32.0074 54.7965C41.6039 54.7771 49.3697 46.9249 49.3697 37.2457V26.206C49.3697 23.932 48.9457 21.7551 48.1557 19.7532C47.6354 19.7143 47.1151 19.6949 46.5948 19.6949Z",
                    fill: "#398B4D"
                }), (0,
                cn.tZ)("path", {
                    d: "M31.9496 19.6949C22.3725 19.7338 14.6259 27.5859 14.6259 37.2457C14.6259 46.9249 22.3725 54.7576 31.9496 54.7965C41.5268 54.7576 49.2734 46.9055 49.2734 37.2457C49.2926 27.5859 41.5268 19.7338 31.9496 19.6949Z",
                    fill: "#0B0223"
                }), (0,
                cn.tZ)("path", {
                    d: "M31.9882 54.7965C41.5984 54.7965 49.389 46.9387 49.389 37.2457C49.389 27.5527 41.5984 19.6949 31.9882 19.6949C22.378 19.6949 14.5874 27.5527 14.5874 37.2457C14.5874 46.9387 22.378 54.7965 31.9882 54.7965Z",
                    fill: "#0B0223"
                }), (0,
                cn.tZ)("path", {
                    d: "M27.691 36.1962C27.691 37.7511 26.4384 39.0144 24.8968 39.0144C23.3552 39.0144 22.1027 37.7511 22.1027 36.1962C22.1027 34.6413 23.3552 33.3779 24.8968 33.3779C26.4384 33.3779 27.691 34.6413 27.691 36.1962Z",
                    fill: "white"
                }), (0,
                cn.tZ)("path", {
                    d: "M41.6231 37.751H37.3837C36.6322 37.751 36.0156 37.1291 36.0156 36.3711V36.0407C36.0156 35.2827 36.6322 34.6607 37.3837 34.6607H41.6231C42.3747 34.6607 42.9913 35.2827 42.9913 36.0407V36.3711C42.9913 37.1291 42.3747 37.751 41.6231 37.751Z",
                    fill: "white"
                }), (0,
                cn.tZ)("path", {
                    d: "M27.7295 36.235C27.7295 37.7899 26.477 39.0532 24.9354 39.0532C23.3938 39.0532 22.1412 37.7899 22.1412 36.235C22.1412 34.6801 23.3938 33.4167 24.9354 33.4167C26.477 33.4167 27.7295 34.6801 27.7295 36.235Z",
                    fill: "white"
                }), (0,
                cn.tZ)("path", {
                    d: "M41.6425 37.7899H37.4031C36.6516 37.7899 36.0349 37.1679 36.0349 36.4099V36.0795C36.0349 35.3215 36.6516 34.6995 37.4031 34.6995H41.6425C42.394 34.6995 43.0106 35.3215 43.0106 36.0795V36.4099C43.0106 37.1679 42.4133 37.7899 41.6425 37.7899Z",
                    fill: "white"
                })]
            })
        }, Qs = function(n) {
            var e = n.toggle
              , t = n.children
              , i = n.enteringDelay
              , o = void 0 === i ? 0 : i
              , r = n.exitingDelay
              , a = void 0 === r ? 0 : r
              , l = (0,
            V.useState)(!1)
              , d = l[0]
              , c = l[1]
              , s = (0,
            V.useRef)(-1)
              , u = (0,
            V.useRef)(-1);
            return (0,
            V.useEffect)((function() {
                window.clearTimeout(s.current),
                window.clearTimeout(u.current),
                e && o ? s.current = window.setTimeout((function() {
                    return c(e)
                }
                ), 1e3 * o) : !e && a ? u.current = window.setTimeout((function() {
                    return c(e)
                }
                ), 1e3 * a) : c(e)
            }
            ), [o, a, e]),
            d ? (0,
            cn.tZ)(cn.HY, {
                children: t
            }) : null
        }, Js = function(n, e) {
            return Object.defineProperty ? Object.defineProperty(n, "raw", {
                value: e
            }) : n.raw = e,
            n
        }, $s = (0,
        rn.F4)($c || ($c = Js(["\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n"], ["\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n"]))), nu = (0,
        rn.F4)(ns || (ns = Js(["\n  0% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n  }\n"], ["\n  0% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n  }\n"]))), eu = (0,
        rn.F4)(es || (es = Js(["\n    0% { width: 0; }\n    25% { width: 60%; }\n    50% { width: 75%; }\n    100% { width: 95%; }\n"], ["\n    0% { width: 0; }\n    25% { width: 60%; }\n    50% { width: 75%; }\n    100% { width: 95%; }\n"]))), tu = rn.ZP.div(ts || (ts = Js(["\n  position: relative;\n  height: 6px;\n  background: rgba(0, 0, 0, 0.3);\n  border: 1px solid rgba(255, 255, 255, 0.2);\n  border-radius: 4px;\n  width: 100%;\n  border-radius: 4px;\n  overflow: hidden;\n\n  &:after {\n    content: '';\n    position: absolute;\n    left: 0;\n    width: 50%;\n    transition: width 2s;\n    top: 0;\n    bottom: 0;\n    background: ", ";\n    animation-name: ", ";\n    animation-duration: 15s;\n    animation-iteration-count: 1;\n    animation-timing-function: ease-out;\n    animation-fill-mode: forwards;\n  }\n"], ["\n  position: relative;\n  height: 6px;\n  background: rgba(0, 0, 0, 0.3);\n  border: 1px solid rgba(255, 255, 255, 0.2);\n  border-radius: 4px;\n  width: 100%;\n  border-radius: 4px;\n  overflow: hidden;\n\n  &:after {\n    content: '';\n    position: absolute;\n    left: 0;\n    width: 50%;\n    transition: width 2s;\n    top: 0;\n    bottom: 0;\n    background: ", ";\n    animation-name: ", ";\n    animation-duration: 15s;\n    animation-iteration-count: 1;\n    animation-timing-function: ease-out;\n    animation-fill-mode: forwards;\n  }\n"])), (function(n) {
            return n.theme.colors.ascent
        }
        ), eu), iu = rn.ZP.div(is || (is = Js(["\n  width: 100%;\n  display: flex;\n  gap: 16px;\n\n  p {\n    font-size: 16px;\n    font-weight: 400;\n    line-height: 150%;\n    margin-bottom: 16px;\n  }\n\n  span {\n    flex-shrink: 0;\n    img {\n      border-radius: 6px;\n    }\n  }\n"], ["\n  width: 100%;\n  display: flex;\n  gap: 16px;\n\n  p {\n    font-size: 16px;\n    font-weight: 400;\n    line-height: 150%;\n    margin-bottom: 16px;\n  }\n\n  span {\n    flex-shrink: 0;\n    img {\n      border-radius: 6px;\n    }\n  }\n"]))), ou = rn.ZP.div(os || (os = Js(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n"], ["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n"]))), ru = rn.ZP.div(ls || (ls = Js(["\n  position: absolute;\n  \n  video {\n    min-width: 100%;\n    min-height: 100%;\n    object-fit: cover;\n  }\n\n  ", "\n"], ["\n  position: absolute;\n  \n  video {\n    min-width: 100%;\n    min-height: 100%;\n    object-fit: cover;\n  }\n\n  ", "\n"])), (function(n) {
            return n.toggle ? (0,
            rn.iv)(rs || (rs = Js(["\n    animation: ", " 0.3s ease-out;\n  "], ["\n    animation: ", " 0.3s ease-out;\n  "])), $s) : (0,
            rn.iv)(as || (as = Js(["\n    animation: ", " 0.3s ease-out;\n    animation-delay: 0.3s;\n  "], ["\n    animation: ", " 0.3s ease-out;\n    animation-delay: 0.3s;\n  "])), nu)
        }
        )), au = function(n) {
            var e, t, i, o, r, a, l = n.toggle;
            return (0,
            cn.tZ)(ru, {
                toggle: l,
                children: (0,
                cn.tZ)("video", {
                    src: (0,
                    q.tq)() ? null === (i = null === (t = null === (e = W.ZP.appInfo) || void 0 === e ? void 0 : e.media) || void 0 === t ? void 0 : t.mobile) || void 0 === i ? void 0 : i.launchVideo : null === (a = null === (r = null === (o = W.ZP.appInfo) || void 0 === o ? void 0 : o.media) || void 0 === r ? void 0 : r.desktop) || void 0 === a ? void 0 : a.launchVideo,
                    autoPlay: !0,
                    muted: !0,
                    loop: !0,
                    disableRemotePlayback: !0,
                    playsInline: !0
                })
            })
        }, lu = function(n) {
            var e, t, i, o = n.toggle, r = (0,
            gn.$)().t;
            return (0,
            cn.BX)(Cc.ly, {
                style: {
                    background: "none"
                },
                toggle: o,
                children: [(0,
                cn.tZ)(Qs, {
                    toggle: o,
                    enteringDelay: .6,
                    exitingDelay: .6,
                    children: (0,
                    cn.tZ)(au, {
                        toggle: o
                    })
                }), (0,
                cn.tZ)(Qs, {
                    toggle: o,
                    exitingDelay: .3,
                    children: (0,
                    cn.tZ)(Cc.$i, {
                        style: {
                            padding: "16px",
                            backgroundColor: "rgba(0, 0, 0, 0.7)",
                            position: "absolute",
                            bottom: (0,
                            q.tq)() ? "24px" : "48px"
                        },
                        toggle: o,
                        children: (0,
                        cn.BX)(iu, {
                            children: [(0,
                            cn.tZ)("img", {
                                src: null === (t = null === (e = W.ZP.appInfo) || void 0 === e ? void 0 : e.media) || void 0 === t ? void 0 : t.icon,
                                alt: null === (i = W.ZP.appInfo) || void 0 === i ? void 0 : i.appName,
                                height: 64,
                                width: 64
                            }), (0,
                            cn.BX)(ou, {
                                children: [(0,
                                cn.tZ)("p", {
                                    children: r("launchingGame")
                                }), (0,
                                cn.tZ)(tu, {})]
                            })]
                        })
                    })
                })]
            })
        }, du = function(n) {
            var e = n.toggle;
            return (0,
            cn.tZ)(Cc.ly, {
                style: {
                    display: "flex",
                    alignItems: "center",
                    bottom: 0,
                    height: "100vh",
                    marginTop: "0px",
                    top: "0px"
                },
                toggle: e,
                children: (0,
                cn.tZ)(qs, {})
            })
        }, cu = {
            src: "/play/_next/static/media/BrowserChrome.17f67783.svg",
            height: 24,
            width: 24
        }, su = {
            src: "/play/_next/static/media/BrowserSafari.87ac5020.svg",
            height: 24,
            width: 24
        }, uu = {
            src: "/play/_next/static/media/BrowserEdge.925a6e2f.svg",
            height: 24,
            width: 24
        }, pu = {
            src: "/play/_next/static/media/Copy.beaded6b.svg",
            height: 16,
            width: 16
        }, fu = function(n, e) {
            return Object.defineProperty ? Object.defineProperty(n, "raw", {
                value: e
            }) : n.raw = e,
            n
        }, hu = rn.ZP.h3(ds || (ds = fu(["\n  font-weight: 600;\n  font-size: 24px;\n  line-height: 150%;\n  color: ", ";\n  margin: 0;\n  text-align: center;\n"], ["\n  font-weight: 600;\n  font-size: 24px;\n  line-height: 150%;\n  color: ", ";\n  margin: 0;\n  text-align: center;\n"])), (function(n) {
            return n.theme.colors.base900
        }
        )), gu = rn.ZP.div(cs || (cs = fu(["\n  align-items: center;\n  width: 100%;\n  background: ", ";\n  border-bottom: ", ";\n  backdrop-filter: blur(24px);\n  padding: ", ";\n  border-top-left-radius: ", ";\n  border-top-right-radius: ", ";\n  color: ", ";\n  text-align: center;\n"], ["\n  align-items: center;\n  width: 100%;\n  background: ", ";\n  border-bottom: ", ";\n  backdrop-filter: blur(24px);\n  padding: ", ";\n  border-top-left-radius: ", ";\n  border-top-right-radius: ", ";\n  color: ", ";\n  text-align: center;\n"])), (function(n) {
            return n.theme.colors.black10
        }
        ), (function(n) {
            return n.theme.border.base
        }
        ), (function(n) {
            return n.theme.spacing.base6
        }
        ), (function(n) {
            return n.theme.border.radius2
        }
        ), (function(n) {
            return n.theme.border.radius2
        }
        ), (function(n) {
            return n.theme.colors.white
        }
        )), mu = rn.ZP.div(ss || (ss = fu(["\n  align-items: center;\n  text-align: center;\n  padding: 16px 24px 24px;\n  display: flex;\n  flex-direction: column;\n  gap: ", ";\n\n  p {\n    color: ", ";\n  }\n"], ["\n  align-items: center;\n  text-align: center;\n  padding: 16px 24px 24px;\n  display: flex;\n  flex-direction: column;\n  gap: ", ";\n\n  p {\n    color: ", ";\n  }\n"])), (function(n) {
            return n.theme.spacing.base6
        }
        ), (function(n) {
            return n.theme.colors.base900
        }
        )), xu = rn.ZP.div(us || (us = fu(["\n  display: flex;\n  gap: ", ";\n\n  \n  @media screen and (max-width: 400px){\n    gap: ", ";\n  }\n"], ["\n  display: flex;\n  gap: ", ";\n\n  \n  @media screen and (max-width: 400px){\n    gap: ", ";\n  }\n"])), (function(n) {
            return n.theme.spacing.base6
        }
        ), (function(n) {
            return n.theme.spacing.base
        }
        )), vu = rn.ZP.div(ps || (ps = fu(["\n  display: flex;\n  flex-direction: column;\n  gap: ", ";\n  width: 96px;\n  align-items: center;\n  text-align: center;\n"], ["\n  display: flex;\n  flex-direction: column;\n  gap: ", ";\n  width: 96px;\n  align-items: center;\n  text-align: center;\n"])), (function(n) {
            return n.theme.spacing.base2
        }
        )), bu = rn.ZP.div(fs || (fs = fu(["\n  display: flex;\n  gap: ", ";\n  background: ", ";\n  padding: ", " ", ";\n  border-radius: ", ";\n  align-items: center;\n  text-align: center;\n\n  img {\n    cursor: pointer;\n  }\n"], ["\n  display: flex;\n  gap: ", ";\n  background: ", ";\n  padding: ", " ", ";\n  border-radius: ", ";\n  align-items: center;\n  text-align: center;\n\n  img {\n    cursor: pointer;\n  }\n"])), (function(n) {
            return n.theme.spacing.base3
        }
        ), (function(n) {
            return n.theme.colors.black10
        }
        ), (function(n) {
            return n.theme.spacing.base2
        }
        ), (function(n) {
            return n.theme.spacing.base3
        }
        ), (function(n) {
            return n.theme.border.radius
        }
        )), yu = rn.ZP.p(hs || (hs = fu(["\n  width: 262px;\n  font-size: 12px;\n  margin: 0px;\n  line-height: 150%;\n  font-weight: 400;\n  color: ", ";\n  text-align: left;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n\n  @media screen and (max-width: 400px){\n    width: 196px;\n  }\n"], ["\n  width: 262px;\n  font-size: 12px;\n  margin: 0px;\n  line-height: 150%;\n  font-weight: 400;\n  color: ", ";\n  text-align: left;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n\n  @media screen and (max-width: 400px){\n    width: 196px;\n  }\n"])), (function(n) {
            return n.theme.colors.black80
        }
        )), wu = rn.ZP.div(gs || (gs = fu(["\n  border: ", ";\n  border-color: ", ";\n  height: 25px;\n"], ["\n  border: ", ";\n  border-color: ", ";\n  height: 25px;\n"])), (function(n) {
            return n.theme.border.base
        }
        ), (function(n) {
            return n.theme.colors.black20
        }
        )), Zu = rn.ZP.p(ms || (ms = fu(["\n  display: none;\n  background: ", ";\n  font-size: 10px;\n  margin: 0px;\n  line-height: 150%;\n  font-weight: 500;\n  position: absolute;\n  bottom: 60px;\n  right: 30px;\n  border: ", ";\n  padding: ", ";\n  border-radius: ", ";\n\n  &#CopyText {\n    color: ", ";\n  }\n"], ["\n  display: none;\n  background: ", ";\n  font-size: 10px;\n  margin: 0px;\n  line-height: 150%;\n  font-weight: 500;\n  position: absolute;\n  bottom: 60px;\n  right: 30px;\n  border: ", ";\n  padding: ", ";\n  border-radius: ", ";\n\n  &#CopyText {\n    color: ", ";\n  }\n"])), (function(n) {
            return n.theme.colors.black
        }
        ), (function(n) {
            return n.theme.border.base2
        }
        ), (function(n) {
            return n.theme.spacing.base
        }
        ), (function(n) {
            return n.theme.border.radius
        }
        ), (function(n) {
            return n.theme.colors.white
        }
        )), ku = function(n, e, t, i) {
            return new (t || (t = Promise))((function(o, r) {
                function a(n) {
                    try {
                        d(i.next(n))
                    } catch (e) {
                        r(e)
                    }
                }
                function l(n) {
                    try {
                        d(i.throw(n))
                    } catch (e) {
                        r(e)
                    }
                }
                function d(n) {
                    var e;
                    n.done ? o(n.value) : (e = n.value,
                    e instanceof t ? e : new t((function(n) {
                        n(e)
                    }
                    ))).then(a, l)
                }
                d((i = i.apply(n, e || [])).next())
            }
            ))
        }, Au = function(n, e) {
            var t, i, o, r, a = {
                label: 0,
                sent: function() {
                    if (1 & o[0])
                        throw o[1];
                    return o[1]
                },
                trys: [],
                ops: []
            };
            return r = {
                next: l(0),
                throw: l(1),
                return: l(2)
            },
            "function" === typeof Symbol && (r[Symbol.iterator] = function() {
                return this
            }
            ),
            r;
            function l(r) {
                return function(l) {
                    return function(r) {
                        if (t)
                            throw new TypeError("Generator is already executing.");
                        for (; a; )
                            try {
                                if (t = 1,
                                i && (o = 2 & r[0] ? i.return : r[0] ? i.throw || ((o = i.return) && o.call(i),
                                0) : i.next) && !(o = o.call(i, r[1])).done)
                                    return o;
                                switch (i = 0,
                                o && (r = [2 & r[0], o.value]),
                                r[0]) {
                                case 0:
                                case 1:
                                    o = r;
                                    break;
                                case 4:
                                    return a.label++,
                                    {
                                        value: r[1],
                                        done: !1
                                    };
                                case 5:
                                    a.label++,
                                    i = r[1],
                                    r = [0];
                                    continue;
                                case 7:
                                    r = a.ops.pop(),
                                    a.trys.pop();
                                    continue;
                                default:
                                    if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === r[0] || 2 === r[0])) {
                                        a = 0;
                                        continue
                                    }
                                    if (3 === r[0] && (!o || r[1] > o[0] && r[1] < o[3])) {
                                        a.label = r[1];
                                        break
                                    }
                                    if (6 === r[0] && a.label < o[1]) {
                                        a.label = o[1],
                                        o = r;
                                        break
                                    }
                                    if (o && a.label < o[2]) {
                                        a.label = o[2],
                                        a.ops.push(r);
                                        break
                                    }
                                    o[2] && a.ops.pop(),
                                    a.trys.pop();
                                    continue
                                }
                                r = e.call(n, a)
                            } catch (l) {
                                r = [6, l],
                                i = 0
                            } finally {
                                t = o = 0
                            }
                        if (5 & r[0])
                            throw r[1];
                        return {
                            value: r[0] ? r[1] : void 0,
                            done: !0
                        }
                    }([r, l])
                }
            }
        }, Pu = function() {
            var n = (0,
            gn.$)().t;
            return (0,
            cn.BX)(ve.Z, {
                style: {
                    padding: "0",
                    fontSize: "18px",
                    lineHeight: "150%",
                    width: "auto"
                },
                children: [(0,
                cn.tZ)(gu, {
                    children: (0,
                    cn.tZ)(hu, {
                        children: n("unsupportedBrowser")
                    })
                }), (0,
                cn.BX)(mu, {
                    children: [(0,
                    cn.tZ)(xe.kk, {
                        med: !0,
                        children: n("switchBrowser")
                    }), (0,
                    cn.BX)(xu, {
                        children: [(0,
                        cn.BX)(vu, {
                            children: [(0,
                            cn.tZ)("img", {
                                className: "chromeLogo",
                                alt: n("googleChrome"),
                                src: (0,
                                Tn.j)(cu),
                                height: 24,
                                width: 24
                            }), (0,
                            cn.tZ)(xe.mH, {
                                med: !0,
                                children: n("googleChrome")
                            })]
                        }), (0,
                        cn.BX)(vu, {
                            children: [(0,
                            cn.tZ)("img", {
                                className: "safariLogo",
                                alt: n("appleSafari"),
                                src: (0,
                                Tn.j)(su),
                                height: 24,
                                width: 24
                            }), (0,
                            cn.tZ)(xe.mH, {
                                med: !0,
                                children: n("appleSafari")
                            })]
                        }), (0,
                        cn.BX)(vu, {
                            children: [(0,
                            cn.tZ)("img", {
                                className: "edgeLogo",
                                alt: n("microsoftEdge"),
                                src: (0,
                                Tn.j)(uu),
                                height: 24,
                                width: 24
                            }), (0,
                            cn.tZ)(xe.mH, {
                                med: !0,
                                children: n("microsoftEdge")
                            })]
                        })]
                    }), (0,
                    cn.BX)(bu, {
                        children: [(0,
                        cn.tZ)(yu, {
                            children: window.location.href
                        }), (0,
                        cn.tZ)(wu, {}), (0,
                        cn.tZ)("img", {
                            alt: "Copy",
                            src: (0,
                            Tn.j)(pu),
                            height: 16,
                            width: 16,
                            onClick: function() {
                                return ku(void 0, void 0, void 0, (function() {
                                    return Au(this, (function(n) {
                                        switch (n.label) {
                                        case 0:
                                            return n.trys.push([0, 2, , 3]),
                                            [4, navigator.clipboard.writeText(window.location.href).then((function() {
                                                var n = document.getElementById("CopyText");
                                                n && (n.style.display = "flex",
                                                setTimeout((function() {
                                                    n.style.display = "none"
                                                }
                                                ), 1e3))
                                            }
                                            ))];
                                        case 1:
                                            return n.sent(),
                                            [3, 3];
                                        case 2:
                                            return n.sent(),
                                            [3, 3];
                                        case 3:
                                            return [2]
                                        }
                                    }
                                    ))
                                }
                                ))
                            }
                        }), (0,
                        cn.tZ)(Zu, {
                            id: "CopyText",
                            children: n("linkCopied")
                        })]
                    })]
                })]
            })
        }, Su = function(n, e) {
            return Object.defineProperty ? Object.defineProperty(n, "raw", {
                value: e
            }) : n.raw = e,
            n
        }, Eu = (0,
        rn.F4)(xs || (xs = Su(["\n  0% {\n      transform: rotate(0deg);\n  }\n  100% {\n      transform: rotate(360deg);\n  }\n"], ["\n  0% {\n      transform: rotate(0deg);\n  }\n  100% {\n      transform: rotate(360deg);\n  }\n"]))), Cu = rn.ZP.div(vs || (vs = Su(["\n    display: flex;\n    align-items: center;\n    position: fixed;\n    width: fit-content;\n    max-width: 90%;\n    height: fit-content;\n    color: ", ";\n    transition: all 0.5s ease-in-out;\n    left: 50%;\n    transform: translateX(-50%);\n    padding: 5px 13px;\n    box-sizing: border-box;\n    background: linear-gradient(180deg, rgba(11, 2, 35, 0.48) 0%, rgba(11, 2, 35, 0.32) 100%), rgba(255, 255, 255, 0.3);\n    border: 1px solid rgba(255, 255, 255, 0.2);\n    backdrop-filter: blur(24px);\n    border-radius: 8px;\n    font-style: normal;\n    font-weight: normal;\n    font-size: 14px;\n    line-height: 150%;\n    align-items: center;\n    z-index: 999;\n    &.slideUp {\n      top: -50px;\n      opacity: 0;\n    }\n    &.slideDown {\n      top: 30px;\n      opacity: 1;\n    }\n    span{\n      margin-left: 8px;\n      margin-right: 8px;\n    }\n    .info{\n      margin-left: 8px;\n      cursor: pointer;\n    }\n    .longDescription{\n      display: none;\n    }\n    .close{\n      display: none;\n    }\n    .shortDescription {\n      display: inline;\n      margin: 0;\n  \t}\n    span{\n      top: 3px;\n    }\n    &.expand{\n    .timer{\n      margin-right: 0px;\n    }\n    .shortDescription{\n        display: none;\n    }\n    .info{\n        order:-2;\n        margin: 0px;\n    }\n    .longDescription{\n        display: inline;\n        width: fit-content;\n\t\tmargin-left: 8px;\n\t\tmargin-right: 8px;\n    }\n    .close{\n        display: inline;\n        margin-left: 10px;\n        cursor: pointer;\n    }\n    }\n"], ["\n    display: flex;\n    align-items: center;\n    position: fixed;\n    width: fit-content;\n    max-width: 90%;\n    height: fit-content;\n    color: ", ";\n    transition: all 0.5s ease-in-out;\n    left: 50%;\n    transform: translateX(-50%);\n    padding: 5px 13px;\n    box-sizing: border-box;\n    background: linear-gradient(180deg, rgba(11, 2, 35, 0.48) 0%, rgba(11, 2, 35, 0.32) 100%), rgba(255, 255, 255, 0.3);\n    border: 1px solid rgba(255, 255, 255, 0.2);\n    backdrop-filter: blur(24px);\n    border-radius: 8px;\n    font-style: normal;\n    font-weight: normal;\n    font-size: 14px;\n    line-height: 150%;\n    align-items: center;\n    z-index: 999;\n    &.slideUp {\n      top: -50px;\n      opacity: 0;\n    }\n    &.slideDown {\n      top: 30px;\n      opacity: 1;\n    }\n    span{\n      margin-left: 8px;\n      margin-right: 8px;\n    }\n    .info{\n      margin-left: 8px;\n      cursor: pointer;\n    }\n    .longDescription{\n      display: none;\n    }\n    .close{\n      display: none;\n    }\n    .shortDescription {\n      display: inline;\n      margin: 0;\n  \t}\n    span{\n      top: 3px;\n    }\n    &.expand{\n    .timer{\n      margin-right: 0px;\n    }\n    .shortDescription{\n        display: none;\n    }\n    .info{\n        order:-2;\n        margin: 0px;\n    }\n    .longDescription{\n        display: inline;\n        width: fit-content;\n\t\tmargin-left: 8px;\n\t\tmargin-right: 8px;\n    }\n    .close{\n        display: inline;\n        margin-left: 10px;\n        cursor: pointer;\n    }\n    }\n"])), (function(n) {
            return n.theme.colors.white
        }
        )), Tu = rn.ZP.div(bs || (bs = Su(["\n    position: fixed;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 100%;\n    height: 100%;\n    border: 1px solid;\n    background: rgba(0, 0, 0, 0.7);\n    z-index: 99999999999;\n    img{\n    animation: ", " 1s linear infinite;\n    }\n    &.hide{\n    display: none;\n    }\n"], ["\n    position: fixed;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 100%;\n    height: 100%;\n    border: 1px solid;\n    background: rgba(0, 0, 0, 0.7);\n    z-index: 99999999999;\n    img{\n    animation: ", " 1s linear infinite;\n    }\n    &.hide{\n    display: none;\n    }\n"])), Eu), Iu = rn.ZP.div(ys || (ys = Su(["\n    z-index: 9;\n    .mainContainer {\n        position: absolute;\n        box-sizing: border-box;\n        padding: 24px;\n        max-width: 90%;\n        width: 420px;\n        left: calc(50%);\n        top: calc(50%);\n        transform: translate(-50%, -50%);\n        max-width: fit-content;\n        background: linear-gradient(180deg, rgba(11, 2, 35, 0.48) 0%, rgba(11, 2, 35, 0.32) 100%),\n        rgba(255, 255, 255, 0.3);\n        border: 1px solid rgba(255, 255, 255, 0.2);\n        backdrop-filter: blur(24px);\n        border-radius: 12px;\n        display: flex;\n        img{\n          width: 160px;\n          height: 215.06px;\n          filter: drop-shadow(0px 4px 16px rgba(0, 0, 0, 0.08));\n          border-radius: 12px;\n        }\n        .content {\n          width: 100%;\n          margin-left: 24px;\n          color: white;\n          display: flex;\n          flex-direction: column;\n          @media screen and (max-width: 768px) {\n            margin: 20px 0;\n            align-items: center;\n            text-align: center;\n          }\n          h2{\n            margin: 0px;\n            font-weight: 600;\n            font-size: 24px;\n            line-height: 150%;\n          }\n          button {\n            margin-top: 20px;\n          }\n        }\n        @media screen and (max-width: 768px) {\n          flex-direction: column;\n          align-items: center;\n        }\n    }\n"], ["\n    z-index: 9;\n    .mainContainer {\n        position: absolute;\n        box-sizing: border-box;\n        padding: 24px;\n        max-width: 90%;\n        width: 420px;\n        left: calc(50%);\n        top: calc(50%);\n        transform: translate(-50%, -50%);\n        max-width: fit-content;\n        background: linear-gradient(180deg, rgba(11, 2, 35, 0.48) 0%, rgba(11, 2, 35, 0.32) 100%),\n        rgba(255, 255, 255, 0.3);\n        border: 1px solid rgba(255, 255, 255, 0.2);\n        backdrop-filter: blur(24px);\n        border-radius: 12px;\n        display: flex;\n        img{\n          width: 160px;\n          height: 215.06px;\n          filter: drop-shadow(0px 4px 16px rgba(0, 0, 0, 0.08));\n          border-radius: 12px;\n        }\n        .content {\n          width: 100%;\n          margin-left: 24px;\n          color: white;\n          display: flex;\n          flex-direction: column;\n          @media screen and (max-width: 768px) {\n            margin: 20px 0;\n            align-items: center;\n            text-align: center;\n          }\n          h2{\n            margin: 0px;\n            font-weight: 600;\n            font-size: 24px;\n            line-height: 150%;\n          }\n          button {\n            margin-top: 20px;\n          }\n        }\n        @media screen and (max-width: 768px) {\n          flex-direction: column;\n          align-items: center;\n        }\n    }\n"]))), Ou = function() {
            var n, e = (0,
            gn.$)().t, t = (0,
            V.useContext)(K.x);
            return (0,
            cn.tZ)(Iu, {
                children: (0,
                cn.BX)("div", {
                    className: "mainContainer",
                    children: [(0,
                    cn.tZ)("img", {
                        alt: "".concat(e("gameTile")),
                        src: null === (n = null === t || void 0 === t ? void 0 : t.media) || void 0 === n ? void 0 : n.tile,
                        width: 230,
                        height: 310
                    }), (0,
                    cn.BX)("div", {
                        className: "content",
                        children: [(0,
                        cn.tZ)(xe.T3, {
                            children: e("serverBusy")
                        }), (0,
                        cn.tZ)(xe.xv, {
                            children: e("serverBusyMsg")
                        }), (0,
                        cn.tZ)(de.z, {
                            variant: "primary",
                            size: "small",
                            text: e("restart"),
                            onClick: function() {
                                window.location.reload()
                            }
                        })]
                    })]
                })
            })
        }, ju = {
            src: "/play/_next/static/media/info-icon.c014906a.svg",
            height: 17,
            width: 17
        }, Du = {
            src: "/play/_next/static/media/round-loader.ec0f091e.svg",
            height: 32,
            width: 32
        }, Lu = function() {
            var n, e = (0,
            V.useRef)(null), t = (0,
            V.useRef)(null), i = (0,
            V.useRef)(null), o = (0,
            V.useState)(!0), r = o[0], a = o[1], l = (0,
            J.I0)(), d = (0,
            gn.$)().t, c = (0,
            J.v9)((function(n) {
                return n.play.userWarningTime
            }
            )), s = function() {
                var n;
                null === (n = null === e || void 0 === e ? void 0 : e.current) || void 0 === n || n.classList.add("expand"),
                a(!1)
            };
            return (0,
            V.useEffect)((function() {
                var o, r;
                null === (o = null === e || void 0 === e ? void 0 : e.current) || void 0 === o || o.classList.add("slideDown"),
                null === (r = null === e || void 0 === e ? void 0 : e.current) || void 0 === r || r.classList.remove("slideUp");
                var a = c;
                return n = setInterval((function() {
                    var o, r, l;
                    if (i && i.current)
                        if (60 === a)
                            i.current.textContent = "01:00";
                        else {
                            var d = (a <= 9 ? "0" : "") + a.toString();
                            i.current.textContent = "00:".concat(d)
                        }
                    (a -= 1) <= 0 && (clearInterval(n),
                    null === (o = null === e || void 0 === e ? void 0 : e.current) || void 0 === o || o.classList.add("slideUp"),
                    null === (r = null === e || void 0 === e ? void 0 : e.current) || void 0 === r || r.classList.remove("slideDown"),
                    null === (l = null === t || void 0 === t ? void 0 : t.current) || void 0 === l || l.classList.remove("hide"))
                }
                ), 1e3),
                function() {
                    var i, o, r;
                    clearInterval(n),
                    l({
                        type: xn.Z.SPOT_INSTANCES,
                        payload: {
                            disconnecTimer: 0
                        }
                    }),
                    null === (i = null === e || void 0 === e ? void 0 : e.current) || void 0 === i || i.classList.add("slideUp"),
                    null === (o = null === e || void 0 === e ? void 0 : e.current) || void 0 === o || o.classList.remove("slideDown"),
                    null === (r = null === t || void 0 === t ? void 0 : t.current) || void 0 === r || r.classList.remove("hide")
                }
            }
            ), []),
            (0,
            cn.BX)(cn.HY, {
                children: [(0,
                cn.tZ)(Tu, {
                    ref: t,
                    className: "hide",
                    children: (0,
                    cn.tZ)("img", {
                        alt: "".concat(d("roundLoader")),
                        src: (0,
                        Tn.j)(Du)
                    })
                }), (0,
                cn.BX)(Cu, {
                    ref: e,
                    className: "slideUp flex",
                    children: [(0,
                    cn.tZ)("p", {
                        className: "shortDescription",
                        children: d("spotInstanceShortMsg")
                    }), !r && (0,
                    cn.tZ)("img", {
                        alt: "".concat(d("infoIcon")),
                        src: (0,
                        Tn.j)(ju),
                        onClick: s
                    }), (0,
                    cn.tZ)("span", {
                        ref: i,
                        className: "timer",
                        children: "01:00"
                    }), r && (0,
                    cn.tZ)("img", {
                        alt: "".concat(d("infoIcon")),
                        src: (0,
                        Tn.j)(ju),
                        onClick: s
                    }), (0,
                    cn.tZ)("p", {
                        className: "longDescription",
                        children: d("spotInstanceLongMsg")
                    }), !r && (0,
                    cn.tZ)("img", {
                        alt: "".concat(d("closeIcon")),
                        src: (0,
                        Tn.j)(xo.Z),
                        onClick: function() {
                            var n;
                            null === (n = null === e || void 0 === e ? void 0 : e.current) || void 0 === n || n.classList.remove("expand"),
                            a(!0)
                        }
                    })]
                })]
            })
        }, zu = function(n, e) {
            return Object.defineProperty ? Object.defineProperty(n, "raw", {
                value: e
            }) : n.raw = e,
            n
        }, Mu = rn.ZP.input.attrs({
            type: "file"
        })(ws || (ws = zu(["\n  width: 1px;\n  height: 1px;\n  position: absolute;\n  left: -100vw;\n"], ["\n  width: 1px;\n  height: 1px;\n  position: absolute;\n  left: -100vw;\n"]))), Nu = rn.ZP.div(Zs || (Zs = zu(["\n  padding: 16px;\n  position: fixed;\n  top: -70px;\n  background: linear-gradient(\n      180deg,\n      rgba(11, 2, 35, 0.48) 0%,\n      rgba(11, 2, 35, 0.32) 100%\n    ),\n    rgba(255, 255, 255, 0.3);\n  border: ", ";\n  backdrop-filter: blur(24px);\n  border-radius: ", ";\n  z-index: 20;\n  left: 50%;\n  transform: translate(-50%);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  transition: all 0.5s ease-in-out;\n  opacity: 0.5;\n  &.slideDown {\n    opacity: 1;\n    top: 70px;\n  }\n  > .spin {\n    width: 21px;\n    height: 21px;\n    animation-name: ", ";\n    animation-duration: 2s;\n    animation-iteration-count: infinite;\n    animation-timing-function: linear;\n  }\n"], ["\n  padding: 16px;\n  position: fixed;\n  top: -70px;\n  background: linear-gradient(\n      180deg,\n      rgba(11, 2, 35, 0.48) 0%,\n      rgba(11, 2, 35, 0.32) 100%\n    ),\n    rgba(255, 255, 255, 0.3);\n  border: ", ";\n  backdrop-filter: blur(24px);\n  border-radius: ", ";\n  z-index: 20;\n  left: 50%;\n  transform: translate(-50%);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  transition: all 0.5s ease-in-out;\n  opacity: 0.5;\n  &.slideDown {\n    opacity: 1;\n    top: 70px;\n  }\n  > .spin {\n    width: 21px;\n    height: 21px;\n    animation-name: ", ";\n    animation-duration: 2s;\n    animation-iteration-count: infinite;\n    animation-timing-function: linear;\n  }\n"])), (function(n) {
            return n.theme.border.base3
        }
        ), (function(n) {
            return n.theme.border.radius2
        }
        ), Ot), Bu = rn.ZP.div(ks || (ks = zu(["\n  width: 21px;\n  height: 21px;\n  border: 2px solid ", ";\n  border-bottom-color: rgba(255, 255, 255, 0.4);\n  animation-name: ", ";\n  animation-duration: 1s;\n  animation-iteration-count: infinite;\n  animation-timing-function: linear;\n  border-radius: 50%;\n"], ["\n  width: 21px;\n  height: 21px;\n  border: 2px solid ", ";\n  border-bottom-color: rgba(255, 255, 255, 0.4);\n  animation-name: ", ";\n  animation-duration: 1s;\n  animation-iteration-count: infinite;\n  animation-timing-function: linear;\n  border-radius: 50%;\n"])), (function(n) {
            return n.theme.colors.white
        }
        ), Ot), Ru = rn.ZP.div(As || (As = zu(["\n  width: 21px;\n  height: 21px;\n  background-color: ", ";\n  border-radius: 50%;\n  position: relative;\n  &:after {\n    content: '';\n    transform: rotate(-48deg);\n    width: 10px;\n    height: 6px;\n    border-left: 2px solid white;\n    border-bottom: 2px solid white;\n    z-index: 1;\n    position: absolute;\n    left: 5.5px;\n    top: 6.5px;\n  }\n"], ["\n  width: 21px;\n  height: 21px;\n  background-color: ", ";\n  border-radius: 50%;\n  position: relative;\n  &:after {\n    content: '';\n    transform: rotate(-48deg);\n    width: 10px;\n    height: 6px;\n    border-left: 2px solid white;\n    border-bottom: 2px solid white;\n    z-index: 1;\n    position: absolute;\n    left: 5.5px;\n    top: 6.5px;\n  }\n"])), (function(n) {
            return n.theme.colors.blue
        }
        )), _u = function() {
            var n = (0,
            gn.$)().t
              , e = (0,
            J.v9)((function(n) {
                return n.play.fileUploadState
            }
            ))
              , t = e.showLoader
              , i = e.loaderType
              , o = (0,
            V.useRef)(null)
              , r = (0,
            J.I0)();
            (0,
            V.useEffect)((function() {
                r({
                    type: xn.Z.UPDATE_UPLOAD_REF,
                    payload: {
                        fileUploadRef: o
                    }
                })
            }
            ), [o]);
            var a = (0,
            V.useMemo)((function() {
                switch (i) {
                case "uploading":
                    return "uploadingFile";
                case "success":
                    return "uploadedSuccessfully";
                case "warning":
                    return "uploadFailed";
                default:
                    return ""
                }
            }
            ), [i]);
            return (0,
            cn.BX)(cn.HY, {
                children: [(0,
                cn.tZ)(Mu, {
                    ref: o,
                    id: "uploadFile",
                    onClick: pe.Hv,
                    onChange: pe.cT
                }), (0,
                cn.BX)(Nu, {
                    className: t ? "slideDown" : "",
                    children: ["uploading" === i && (0,
                    cn.tZ)(Bu, {}), "success" === i && (0,
                    cn.tZ)(Ru, {}), "warning" === i && (0,
                    cn.tZ)("img", {
                        width: "21",
                        height: "21",
                        src: (0,
                        Tn.j)(Ea),
                        alt: "warning"
                    }), (0,
                    cn.tZ)(xe.T5, {
                        style: {
                            margin: "0px",
                            marginLeft: "13.5px"
                        },
                        med: !0,
                        white: !0,
                        children: n(a)
                    })]
                })]
            })
        }, Uu = function() {
            var n = (0,
            gn.$)().t
              , e = (0,
            J.v9)((function(n) {
                return n.play.fileDownloadState
            }
            ))
              , t = e.showLoader
              , i = e.loaderType
              , o = (0,
            V.useState)("")
              , r = o[0]
              , a = o[1];
            return (0,
            V.useEffect)((function() {
                a(function() {
                    switch (i) {
                    case "downloading":
                        return "downloadingFile";
                    case "success":
                        return "downloadedSuccessfully";
                    case "warning":
                        return "downloadFailed";
                    default:
                        return ""
                    }
                }())
            }
            ), [i]),
            (0,
            cn.BX)(Nu, {
                className: t ? "slideDown" : "",
                children: ["downloading" === i && (0,
                cn.tZ)(Bu, {}), "success" === i && (0,
                cn.tZ)(Ru, {}), "warning" === i && (0,
                cn.tZ)("img", {
                    width: "21",
                    height: "21",
                    src: (0,
                    Tn.j)(Ea),
                    alt: "warning"
                }), (0,
                cn.tZ)(xe.T5, {
                    style: {
                        margin: "0px",
                        marginLeft: "13.5px"
                    },
                    med: !0,
                    white: !0,
                    children: n(r)
                })]
            })
        }, Hu = t(8603), Fu = {
            src: "/play/_next/static/media/proxyLogo.1825607a.svg",
            height: 81,
            width: 80
        }, Xu = function(n, e) {
            return Object.defineProperty ? Object.defineProperty(n, "raw", {
                value: e
            }) : n.raw = e,
            n
        }, Gu = (0,
        rn.iv)(Ps || (Ps = Xu(["\n   max-height: 95vh;\n   max-width: 480px;\n   width: 100%;\n"], ["\n   max-height: 95vh;\n   max-width: 480px;\n   width: 100%;\n"]))), Vu = rn.ZP.div(Ss || (Ss = Xu(["\n   display: flex;\n   flex-direction: column;\n   justify-content: center;\n   align-items: center;\n   gap: 8px;\n   padding: 40px;\n   color: ", ";\n\n   .proxy-url-container{\n      background: ", ";\n      border-radius: 8px;\n      padding: 12px;\n      width:100%;\n      margin-top: 32px;\n      position: relative;\n      font-size:16px;\n\n      @media only screen  and (max-width:1024px) {\n            margin-bottom:16px;\n      }\n      .proxy-url{\n         white-space: nowrap;\n         overflow: hidden;\n         text-overflow: ellipsis;\n         color: ", ";\n         line-height: 150%;\n      }     \n   }\n\n   .copy-tooltip{\n      color: ", ";\n      background: ", ";\n      position: absolute;\n      font-size: 10px;\n      padding: 4px 6px;\n      gap: 4px;\n      left: 50%;\n      transform: translateX(-50%);\n      border: 1px solid ", ";\n      border-radius: 4px;\n   }\n   button{\n      width:100%;\n      margin-top: 16px;\n   }\n   h3 {\n      font-size: 24px;\n      color: ", ";\n   }\n   h3, h5 {\n      margin: 0;\n   }\n\n   @media only screen and (max-width: 767px) {\n      .proxy-url-container, button {\n         padding: 7.5px 21px 7.5px 9px;\n      }\n      h3 {\n         margin-top: 12px;\n         font-size: 16px;\n      }\n      .proxy-url, button {\n         font-size: 14px;\n      }\n   }\n"], ["\n   display: flex;\n   flex-direction: column;\n   justify-content: center;\n   align-items: center;\n   gap: 8px;\n   padding: 40px;\n   color: ", ";\n\n   .proxy-url-container{\n      background: ", ";\n      border-radius: 8px;\n      padding: 12px;\n      width:100%;\n      margin-top: 32px;\n      position: relative;\n      font-size:16px;\n\n      @media only screen  and (max-width:1024px) {\n            margin-bottom:16px;\n      }\n      .proxy-url{\n         white-space: nowrap;\n         overflow: hidden;\n         text-overflow: ellipsis;\n         color: ", ";\n         line-height: 150%;\n      }     \n   }\n\n   .copy-tooltip{\n      color: ", ";\n      background: ", ";\n      position: absolute;\n      font-size: 10px;\n      padding: 4px 6px;\n      gap: 4px;\n      left: 50%;\n      transform: translateX(-50%);\n      border: 1px solid ", ";\n      border-radius: 4px;\n   }\n   button{\n      width:100%;\n      margin-top: 16px;\n   }\n   h3 {\n      font-size: 24px;\n      color: ", ";\n   }\n   h3, h5 {\n      margin: 0;\n   }\n\n   @media only screen and (max-width: 767px) {\n      .proxy-url-container, button {\n         padding: 7.5px 21px 7.5px 9px;\n      }\n      h3 {\n         margin-top: 12px;\n         font-size: 16px;\n      }\n      .proxy-url, button {\n         font-size: 14px;\n      }\n   }\n"])), (function(n) {
            return n.theme.colors.black80
        }
        ), (function(n) {
            return n.theme.colors.black10
        }
        ), (function(n) {
            return n.theme.colors.black80
        }
        ), (function(n) {
            return n.theme.colors.white
        }
        ), (function(n) {
            return n.theme.colors.black80
        }
        ), (function(n) {
            return n.theme.colors.white20
        }
        ), (function(n) {
            return n.theme.colors.base900
        }
        )), Ku = function(n, e, t, i) {
            return new (t || (t = Promise))((function(o, r) {
                function a(n) {
                    try {
                        d(i.next(n))
                    } catch (e) {
                        r(e)
                    }
                }
                function l(n) {
                    try {
                        d(i.throw(n))
                    } catch (e) {
                        r(e)
                    }
                }
                function d(n) {
                    var e;
                    n.done ? o(n.value) : (e = n.value,
                    e instanceof t ? e : new t((function(n) {
                        n(e)
                    }
                    ))).then(a, l)
                }
                d((i = i.apply(n, e || [])).next())
            }
            ))
        }, Yu = function(n, e) {
            var t, i, o, r, a = {
                label: 0,
                sent: function() {
                    if (1 & o[0])
                        throw o[1];
                    return o[1]
                },
                trys: [],
                ops: []
            };
            return r = {
                next: l(0),
                throw: l(1),
                return: l(2)
            },
            "function" === typeof Symbol && (r[Symbol.iterator] = function() {
                return this
            }
            ),
            r;
            function l(r) {
                return function(l) {
                    return function(r) {
                        if (t)
                            throw new TypeError("Generator is already executing.");
                        for (; a; )
                            try {
                                if (t = 1,
                                i && (o = 2 & r[0] ? i.return : r[0] ? i.throw || ((o = i.return) && o.call(i),
                                0) : i.next) && !(o = o.call(i, r[1])).done)
                                    return o;
                                switch (i = 0,
                                o && (r = [2 & r[0], o.value]),
                                r[0]) {
                                case 0:
                                case 1:
                                    o = r;
                                    break;
                                case 4:
                                    return a.label++,
                                    {
                                        value: r[1],
                                        done: !1
                                    };
                                case 5:
                                    a.label++,
                                    i = r[1],
                                    r = [0];
                                    continue;
                                case 7:
                                    r = a.ops.pop(),
                                    a.trys.pop();
                                    continue;
                                default:
                                    if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === r[0] || 2 === r[0])) {
                                        a = 0;
                                        continue
                                    }
                                    if (3 === r[0] && (!o || r[1] > o[0] && r[1] < o[3])) {
                                        a.label = r[1];
                                        break
                                    }
                                    if (6 === r[0] && a.label < o[1]) {
                                        a.label = o[1],
                                        o = r;
                                        break
                                    }
                                    if (o && a.label < o[2]) {
                                        a.label = o[2],
                                        a.ops.push(r);
                                        break
                                    }
                                    o[2] && a.ops.pop(),
                                    a.trys.pop();
                                    continue
                                }
                                r = e.call(n, a)
                            } catch (l) {
                                r = [6, l],
                                i = 0
                            } finally {
                                t = o = 0
                            }
                        if (5 & r[0])
                            throw r[1];
                        return {
                            value: r[0] ? r[1] : void 0,
                            done: !0
                        }
                    }([r, l])
                }
            }
        }, Wu = function() {
            var n, e = (0,
            gn.$)().t, t = (0,
            V.useState)(!1), i = t[0], o = t[1], r = null === (n = W.ZP.appInfo) || void 0 === n ? void 0 : n.alternateUrlForProxies;
            (0,
            V.useEffect)((function() {
                (0,
                mn.L9)("ProxyScreenShown")
            }
            ), []);
            return (0,
            cn.tZ)(ve.Z, {
                modalStyles: Gu,
                children: (0,
                cn.BX)(Vu, {
                    children: [(0,
                    cn.tZ)("img", {
                        src: (0,
                        Tn.j)(Fu),
                        alt: "",
                        width: (0,
                        q.tq)() ? 48 : 80,
                        height: (0,
                        q.tq)() ? 48 : 80
                    }), (0,
                    cn.tZ)(xe.T3, {
                        med: !0,
                        center: !0,
                        children: e("proxyDetected")
                    }), (0,
                    cn.tZ)(xe.T5, {
                        center: !0,
                        med: !0,
                        children: e("toPlayGame")
                    }), (0,
                    cn.tZ)(xe.T5, {
                        center: !0,
                        children: "1. ".concat(e("disableVpn"))
                    }), (0,
                    cn.tZ)(xe.T5, {
                        center: !0,
                        children: "2. ".concat(e(r ? "useURL" : "reloadPage"))
                    }), r && (0,
                    cn.BX)(cn.HY, {
                        children: [(0,
                        cn.BX)("div", {
                            className: "proxy-url-container",
                            children: [(0,
                            cn.tZ)("div", {
                                className: "proxy-url",
                                children: "".concat(r, "?utm_source=proxy&utm_medium=browser&utm_campaign=nowgg_proxy")
                            }), i && (0,
                            cn.tZ)("div", {
                                className: "copy-tooltip",
                                children: e("linkCopied")
                            })]
                        }), (0,
                        cn.tZ)(de.z, {
                            variant: "secondary",
                            onClick: function() {
                                return Ku(void 0, void 0, void 0, (function() {
                                    return Yu(this, (function(n) {
                                        switch (n.label) {
                                        case 0:
                                            return n.trys.push([0, 2, , 3]),
                                            [4, navigator.clipboard.writeText("".concat(r, "?utm_source=proxy&utm_medium=browser&utm_campaign=nowgg_proxy"))];
                                        case 1:
                                            return n.sent(),
                                            o(!0),
                                            setTimeout((function() {
                                                o(!1)
                                            }
                                            ), 2e3),
                                            [3, 3];
                                        case 2:
                                            return n.sent(),
                                            [3, 3];
                                        case 3:
                                            return [2]
                                        }
                                    }
                                    ))
                                }
                                ))
                            },
                            text: e("copyUrl")
                        })]
                    })]
                })
            })
        }, qu = function(n, e) {
            return Object.defineProperty ? Object.defineProperty(n, "raw", {
                value: e
            }) : n.raw = e,
            n
        }, Qu = rn.ZP.div(Es || (Es = qu(["\n  div {\n    width: 100%;\n    margin: 0;\n    padding: 0;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    img {\n      max-height: 65vh;\n      max-width: 65vw;\n      width: 100%;\n    }\n  }\n"], ["\n  div {\n    width: 100%;\n    margin: 0;\n    padding: 0;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    img {\n      max-height: 65vh;\n      max-width: 65vw;\n      width: 100%;\n    }\n  }\n"]))), Ju = {
            src: "/play/_next/static/media/maintenance.d334ac09.svg",
            height: 120,
            width: 120
        }, $u = function() {
            var n = (0,
            gn.$)().t;
            return (0,
            cn.tZ)(Je.W2, {
                style: {
                    zIndex: "13"
                },
                children: (0,
                cn.tZ)(Je.VY, {
                    children: (0,
                    cn.tZ)(Qu, {
                        children: (0,
                        cn.BX)(Je.cy, {
                            children: [(0,
                            cn.tZ)("img", {
                                src: (0,
                                Tn.j)(Ju),
                                alt: "now.gg ".concat(n("logo"))
                            }), (0,
                            q.tq)() ? (0,
                            cn.tZ)(xe.T4, {
                                center: !0,
                                med: !0,
                                children: n("underMaintenance")
                            }) : (0,
                            cn.tZ)(xe.T3, {
                                center: !0,
                                med: !0,
                                children: n("underMaintenance")
                            }), (0,
                            q.tq)() ? (0,
                            cn.BX)(xe.T6, {
                                style: {
                                    opacity: .8
                                },
                                center: !0,
                                children: [n("currentlyUnderMaintenance"), (0,
                                cn.tZ)("br", {}), n("tryAfterSometime")]
                            }) : (0,
                            cn.BX)(xe.T5, {
                                style: {
                                    opacity: .8
                                },
                                center: !0,
                                children: [n("currentlyUnderMaintenance"), (0,
                                cn.tZ)("br", {}), n("tryAfterSometime")]
                            })]
                        })
                    })
                })
            })
        }, np = t(9008), ep = t(5152), tp = t(7020), ip = function(n, e) {
            return Object.defineProperty ? Object.defineProperty(n, "raw", {
                value: e
            }) : n.raw = e,
            n
        }, op = rn.ZP.iframe(Is || (Is = ip(["\n\tdisplay: flex;\n\tposition: relative;\n\tjustify-content: center;\n\talign-items: center;\n\ttouch-action: none;\n\tborder: 0px;\n\talign-self: ", ";\n\tflex: 1;\n\tmargin: 0px 176px;\n\twidth: fill-available;\n\ttop: unset;\n\theight: unset;\n\t", ";\n\t", ";\n"], ["\n\tdisplay: flex;\n\tposition: relative;\n\tjustify-content: center;\n\talign-items: center;\n\ttouch-action: none;\n\tborder: 0px;\n\talign-self: ", ";\n\tflex: 1;\n\tmargin: 0px 176px;\n\twidth: fill-available;\n\ttop: unset;\n\theight: unset;\n\t", ";\n\t", ";\n"])), (function(n) {
            return n.isMobile ? "center" : "flex-end"
        }
        ), (function(n) {
            var e = n.isMobile
              , t = n.maxHeight;
            return e && (0,
            rn.iv)(Cs || (Cs = ip(["\n\t\twidth: auto; max-width: 100vw; aspect-ratio: 1 / 2; margin: 0;\n\t\theight: ", ";\n\t@media (orientation: landscape) {\n\t\t\taspect-ratio: 2 / 1;\n\t}"], ["\n\t\twidth: auto; max-width: 100vw; aspect-ratio: 1 / 2; margin: 0;\n\t\theight: ", ";\n\t@media (orientation: landscape) {\n\t\t\taspect-ratio: 2 / 1;\n\t}"])), t)
        }
        ), (function(n) {
            var e = n.isTablet
              , t = n.maxHeight;
            return e && (0,
            rn.iv)(Ts || (Ts = ip(["width: fill-available;\n\tmargin: 106px 0px; max-height: ", "; max-height: calc(var(--vh, 1vh) * 100)"], ["width: fill-available;\n\tmargin: 106px 0px; max-height: ", "; max-height: calc(var(--vh, 1vh) * 100)"])), t)
        }
        )), rp = rn.ZP.div(Os || (Os = ip(["\n\tposition: absolute;\n\twidth: 100%;\n\theight: 100%;\n\tbackground: linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7));\n"], ["\n\tposition: absolute;\n\twidth: 100%;\n\theight: 100%;\n\tbackground: linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7));\n"]))), ap = function() {
            var n = .01 * window.innerHeight;
            document.documentElement.style.setProperty("--vh", "".concat(n, "px"))
        }, lp = function() {
            (0,
            J.v9)((function(n) {
                return n.ads.imaError
            }
            ));
            var n = (0,
            J.v9)((function(n) {
                return n.play.isFullscreen
            }
            ))
              , e = (0,
            J.v9)((function(n) {
                return n.play.showAboutUs
            }
            ))
              , t = (0,
            J.v9)((function(n) {
                return n.support.showSupport
            }
            ))
              , i = (0,
            J.v9)((function(n) {
                return n.ads.displayAdsError
            }
            ))
              , o = (0,
            J.v9)((function(n) {
                return n.ads.adBlocker
            }
            ))
              , r = (0,
            V.useState)(!1)
              , a = r[0]
              , l = r[1]
              , d = (0,
            J.I0)()
              , c = (0,
            J.v9)((function(n) {
                return n.play.showAllGamesOverlay
            }
            ))
              , s = (0,
            J.v9)((function(n) {
                return n.play.showExploreGamesOverlay
            }
            ))
              , u = (0,
            J.v9)((function(n) {
                return n.play.duplicateTab
            }
            ))
              , p = (0,
            J.v9)((function(n) {
                return n.ads.adsEnded
            }
            ))
              , f = (0,
            V.useRef)(null);
            (0,
            J.v9)((function(n) {
                return n.play.isFullscreen
            }
            ));
            return (0,
            V.useEffect)((function() {
                p && (0,
                mn.L9)($.Mz)
            }
            ), [p]),
            (0,
            V.useEffect)((function() {
                var n;
                document.addEventListener("keydown", ce.n.keyDownEvent),
                document.addEventListener("keyup", ce.n.keyUpEvent),
                window.addEventListener("orientationchange", ap),
                window.addEventListener("resize", ap),
                ap();
                var e = 0;
                return f.current = setInterval((function() {
                    e += 60,
                    d({
                        type: Y.Z.UPDATE_PLAYTIME,
                        payload: {
                            playtime: e / 60
                        }
                    })
                }
                ), 6e4),
                (0,
                So.Ee)() || (0,
                So.Ar)() || (0,
                q.tq)() || !W.ZP.pwaSupported || setTimeout((function() {
                    (0,
                    mn.L9)("PreNudgeWaitCompleted"),
                    (0,
                    So.ab)() ? ((0,
                    So.EG)(),
                    en.Z.dispatch({
                        type: xn.Z.PWA_PROMPT_STATUS,
                        payload: {
                            showPwaPrompt: !0
                        }
                    })) : (0,
                    mn.L9)("PwaNudgeLimitReached")
                }
                ), null === (n = (0,
                tp.i)()) || void 0 === n ? void 0 : n.pwaNudgeDelayMs),
                function() {
                    window.removeEventListener("orientationchange", ap),
                    window.removeEventListener("resize", ap),
                    clearInterval(f.current)
                }
            }
            ), []),
            (0,
            cn.BX)(cn.HY, {
                children: [(0,
                cn.tZ)(Qd, {
                    clicked: a,
                    handleInfoIconClick: function() {
                        d({
                            type: xn.Z.MODAL_STATUS,
                            payload: {
                                showAboutUs: !e
                            }
                        })
                    },
                    onButtonClicked: function() {
                        l(!a)
                    }
                }), !(0,
                q.tq)() && (0,
                cn.BX)(cn.HY, {
                    children: [(0,
                    cn.tZ)(rp, {}), !W.ZP.playPageUpdate && (0,
                    cn.tZ)(sa.Z, {
                        type: "light"
                    })]
                }), !u && (0,
                cn.tZ)(Do, {}), (0,
                cn.tZ)(op, {
                    sandbox: "allow-scripts allow-popups allow-same-origin allow-pointer-lock",
                    src: W.ZP.appInfo.embeddedGameUrl,
                    isMobile: (0,
                    q.tq)(),
                    isTablet: (0,
                    q.Em)() || (0,
                    q.zc)(),
                    isAdsFree: i || o,
                    onError: function() {
                        (0,
                        mn.L9)("ErrorScreen", {
                            error: "IframeFailedToLoad"
                        })
                    },
                    style: {
                        height: (0,
                        q.tq)() ? "calc(var(--vh, 1vh) * 100)" : W.ZP.playPageUpdate && !n && p ? window.innerHeight - window.innerWidth / 100 * 3.7 : window.innerHeight
                    },
                    maxHeight: (0,
                    q.tq)() ? "100vh" : "".concat(W.ZP.playPageUpdate && !n && p ? window.innerHeight - window.innerWidth / 100 * 3.7 : window.innerHeight, "px")
                }), c && (0,
                cn.tZ)(Pd, {}), s && (0,
                cn.tZ)(Ld, {}), W.ZP.playPageUpdate && !n && (0,
                q.SR)() && (0,
                cn.tZ)(Il, {
                    style: {
                        position: "static",
                        transform: "none",
                        width: "calc(100% - 352px)",
                        margin: "auto"
                    }
                }), t && (0,
                cn.tZ)(so, {}), e && (0,
                cn.tZ)(ge.Z, {
                    closeModal: function() {
                        d({
                            type: xn.Z.MODAL_STATUS,
                            payload: {
                                showAboutUs: !1
                            }
                        })
                    }
                }), !i && !o && !(0,
                q.tq)() && (0,
                cn.tZ)(hn, {}), n && !(0,
                q.SR)() ? (0,
                cn.tZ)($a.Wb, {}) : null]
            })
        }, dp = t(5522), cp = function(n, e) {
            return Object.defineProperty ? Object.defineProperty(n, "raw", {
                value: e
            }) : n.raw = e,
            n
        }, sp = rn.ZP.div(js || (js = cp(["\n  height: 10px;\n  position: absolute;\n  left: -1000px;\n  opacity: 0;\n"], ["\n  height: 10px;\n  position: absolute;\n  left: -1000px;\n  opacity: 0;\n"]))), up = function() {
            return (up = Object.assign || function(n) {
                for (var e, t = 1, i = arguments.length; t < i; t++)
                    for (var o in e = arguments[t])
                        Object.prototype.hasOwnProperty.call(e, o) && (n[o] = e[o]);
                return n
            }
            ).apply(this, arguments)
        }, pp = function(n, e, t, i) {
            return new (t || (t = Promise))((function(o, r) {
                function a(n) {
                    try {
                        d(i.next(n))
                    } catch (e) {
                        r(e)
                    }
                }
                function l(n) {
                    try {
                        d(i.throw(n))
                    } catch (e) {
                        r(e)
                    }
                }
                function d(n) {
                    var e;
                    n.done ? o(n.value) : (e = n.value,
                    e instanceof t ? e : new t((function(n) {
                        n(e)
                    }
                    ))).then(a, l)
                }
                d((i = i.apply(n, e || [])).next())
            }
            ))
        }, fp = function(n, e) {
            var t, i, o, r, a = {
                label: 0,
                sent: function() {
                    if (1 & o[0])
                        throw o[1];
                    return o[1]
                },
                trys: [],
                ops: []
            };
            return r = {
                next: l(0),
                throw: l(1),
                return: l(2)
            },
            "function" === typeof Symbol && (r[Symbol.iterator] = function() {
                return this
            }
            ),
            r;
            function l(r) {
                return function(l) {
                    return function(r) {
                        if (t)
                            throw new TypeError("Generator is already executing.");
                        for (; a; )
                            try {
                                if (t = 1,
                                i && (o = 2 & r[0] ? i.return : r[0] ? i.throw || ((o = i.return) && o.call(i),
                                0) : i.next) && !(o = o.call(i, r[1])).done)
                                    return o;
                                switch (i = 0,
                                o && (r = [2 & r[0], o.value]),
                                r[0]) {
                                case 0:
                                case 1:
                                    o = r;
                                    break;
                                case 4:
                                    return a.label++,
                                    {
                                        value: r[1],
                                        done: !1
                                    };
                                case 5:
                                    a.label++,
                                    i = r[1],
                                    r = [0];
                                    continue;
                                case 7:
                                    r = a.ops.pop(),
                                    a.trys.pop();
                                    continue;
                                default:
                                    if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === r[0] || 2 === r[0])) {
                                        a = 0;
                                        continue
                                    }
                                    if (3 === r[0] && (!o || r[1] > o[0] && r[1] < o[3])) {
                                        a.label = r[1];
                                        break
                                    }
                                    if (6 === r[0] && a.label < o[1]) {
                                        a.label = o[1],
                                        o = r;
                                        break
                                    }
                                    if (o && a.label < o[2]) {
                                        a.label = o[2],
                                        a.ops.push(r);
                                        break
                                    }
                                    o[2] && a.ops.pop(),
                                    a.trys.pop();
                                    continue
                                }
                                r = e.call(n, a)
                            } catch (l) {
                                r = [6, l],
                                i = 0
                            } finally {
                                t = o = 0
                            }
                        if (5 & r[0])
                            throw r[1];
                        return {
                            value: r[0] ? r[1] : void 0,
                            done: !0
                        }
                    }([r, l])
                }
            }
        }, hp = (0,
        ep.default)((function() {
            return t.e(383).then(t.bind(t, 2383))
        }
        ), {
            loadableGenerated: {
                webpack: function() {
                    return [2383]
                },
                modules: ["../src/pages/play/index.tsx -> @components/modals/error"]
            }
        }), gp = "ProxyDetected", mp = function(n) {
            var e, t, i, o, r = n.manifest, a = n.adsConfigUrl, l = (0,
            J.v9)((function(n) {
                return n.play.error
            }
            )), d = (0,
            J.v9)((function(n) {
                return n.play.isAndroidConnected
            }
            )), c = (0,
            J.v9)((function(n) {
                return n.ads.adsEnded
            }
            )), s = (0,
            J.v9)((function(n) {
                return n.ads.imaError
            }
            )), u = (0,
            J.v9)((function(n) {
                return n.ads.adBlocker
            }
            )), p = (0,
            J.v9)((function(n) {
                return n.auth.isLoggedIn
            }
            )), f = (0,
            J.v9)((function(n) {
                return n.auth.showPreloader
            }
            )), h = (0,
            J.v9)((function(n) {
                return n.play.spotInstances
            }
            )), g = (0,
            J.v9)((function(n) {
                return n.play.spotInstanceToast
            }
            )), m = (0,
            J.v9)((function(n) {
                return n.play.sessionMigrated
            }
            )), x = (0,
            J.v9)((function(n) {
                return n.play.duplicateTab
            }
            )), v = (0,
            V.useState)(!1), b = v[0], y = v[1], w = (0,
            J.v9)((function(n) {
                return n.play.sessionComplete
            }
            )), Z = (0,
            J.v9)((function(n) {
                return n.auth.guestFlow
            }
            )), k = (0,
            J.v9)((function(n) {
                return n.auth.showLogin
            }
            )), A = (0,
            J.v9)((function(n) {
                return n.play.isHtmlGame
            }
            )), P = (0,
            J.v9)((function(n) {
                return n.auth.manualLogoutShowLogin
            }
            )), S = "true" === (null === sessionStorage || void 0 === sessionStorage ? void 0 : sessionStorage.getItem("isNewUser")), E = (0,
            V.useState)(!S && !(0,
            q.tq)() && !(0,
            q.Em)()), C = E[0], T = E[1], I = (0,
            V.useState)(!1), O = I[0], j = I[1], D = (0,
            J.v9)((function(n) {
                return n.auth.playToken
            }
            )), L = (0,
            J.I0)(), z = (0,
            V.useContext)(K.x), M = (0,
            V.useState)(""), N = M[0], B = M[1], R = (0,
            V.useRef)(null), _ = "yes" !== sessionStorage.getItem("adDisplayed"), U = (0,
            V.useRef)(null), H = function(n) {
                n.key !== $.B1 || n.newValue || window.location.reload()
            }, F = function(n) {
                j(!0),
                (0,
                mn.L9)(gp, n)
            }, X = function() {
                var n = null === U || void 0 === U ? void 0 : U.current;
                (n ? n.offsetHeight : 0) || ((0,
                mn.L9)("AdBlockerDetected"),
                L({
                    type: Y.Z.UPDATE_IMAERROR,
                    payload: {
                        adBlocker: !0,
                        adsEnded: !0
                    }
                }))
            };
            (0,
            V.useEffect)((function() {
                var n, e, t, i, o, r;
                if (!C) {
                    if (X(),
                    window.addEventListener("storage", H),
                    window.addEventListener("beforeunload", De.F),
                    window.addEventListener("blur", ce.n.keyBlurEvent),
                    window.addEventListener("focus", Mt.CC.onfocus),
                    window.addEventListener("appinstalled", So.YL),
                    window.addEventListener("gamepadconnected", Kt.onconnected, !1),
                    window.addEventListener("gamepaddisconnected", Kt.ondisconnected, !1),
                    window.addEventListener("keydown", mn._b),
                    window.addEventListener("pointerdown", mn._b),
                    window.addEventListener("touchstart", mn._b),
                    "serviceWorker"in navigator) {
                        var l = "".concat((null === (n = null === window || void 0 === window ? void 0 : window.location) || void 0 === n ? void 0 : n.host) || "").concat((null === (t = null === (e = null === window || void 0 === window ? void 0 : window.location) || void 0 === e ? void 0 : e.href) || void 0 === t ? void 0 : t.indexOf("".concat(W.ZP.prefix, "/play/"))) > -1 ? "".concat(W.ZP.prefix) : "");
                        navigator.serviceWorker.register("https://".concat(l).concat((null === (o = null === (i = null === window || void 0 === window ? void 0 : window.location) || void 0 === i ? void 0 : i.href) || void 0 === o ? void 0 : o.indexOf("/play/")) > -1 ? "/play/" : "/", "sw.js")).then((function(n) {}
                        ), (function(n) {}
                        ))
                    }
                    try {
                        var d = null === (r = document.querySelector('style[data-type="ng-fonts"]')) || void 0 === r ? void 0 : r.id;
                        if (d) {
                            var c = (0,
                            dp.bo)();
                            if (-1 !== c.indexOf("mathsspot.com") || c.startsWith(atob(d))) {
                                if (pp(void 0, void 0, void 0, (function() {
                                    var n, e, t, i, o, r;
                                    return fp(this, (function(l) {
                                        switch (l.label) {
                                        case 0:
                                            return l.trys.push([0, 10, , 11]),
                                            [4, (0,
                                            on.Ie)().catch((function(n) {
                                                j(!0)
                                            }
                                            ))];
                                        case 1:
                                            return (n = l.sent()) ? [4, fetch(a).catch((function(n) {}
                                            ))] : [3, 8];
                                        case 2:
                                            return (e = l.sent()) && 200 !== e.status && ((0,
                                            mn.L9)(gp, {
                                                detectionMethod: "StaticAsset"
                                            }),
                                            L({
                                                type: xn.Z.SET_PROXY_USER,
                                                payload: {
                                                    isProxyUser: e
                                                }
                                            })),
                                            t = function() {
                                                L({
                                                    type: Oc.Z.SET_PLAY_TOKEN,
                                                    payload: {
                                                        playToken: n
                                                    }
                                                }),
                                                L({
                                                    type: Oc.Z.SET_LOGGED_IN,
                                                    payload: {
                                                        showPreloader: !1,
                                                        isLoggedIn: !0
                                                    }
                                                })
                                            }
                                            ,
                                            window.localStorage.removeItem($.h4),
                                            i = void 0,
                                            null !== (o = window.localStorage.getItem($.qO)) && new Date <= new Date(o) ? ((0,
                                            W.dr)(),
                                            (0,
                                            mn.L9)("AuthSuccess"),
                                            (0,
                                            on.et)() ? t() : De.Z.getUserProfile({}, {}).then((function(n) {
                                                (0,
                                                on.Lj)(n),
                                                t()
                                            }
                                            )).catch(t),
                                            [3, 7]) : [3, 3];
                                        case 3:
                                            return l.trys.push([3, 5, , 6]),
                                            [4, De.Z.generateToken({}, {})];
                                        case 4:
                                            return i = l.sent(),
                                            [3, 6];
                                        case 5:
                                            return l.sent(),
                                            [3, 6];
                                        case 6:
                                            (null === i || void 0 === i ? void 0 : i.success) ? ((0,
                                            on.x4)(i),
                                            (0,
                                            mn.L9)("AuthSuccess"),
                                            (0,
                                            on.et)() ? t() : De.Z.getUserProfile({}, {}).then((function(n) {
                                                (0,
                                                on.Lj)(n),
                                                t()
                                            }
                                            )).catch(t)) : W.ZP.features.requireAuth ? (L({
                                                type: Oc.Z.SET_LOGGED_IN,
                                                payload: {
                                                    showPreloader: !1,
                                                    isLoggedIn: !1
                                                }
                                            }),
                                            L({
                                                type: Oc.Z.GUEST_FLOW,
                                                payload: {
                                                    guestFlow: !1
                                                }
                                            }),
                                            L({
                                                type: Oc.Z.TOGGLE_LOGIN,
                                                payload: {
                                                    showLogin: !0
                                                }
                                            })) : (0,
                                            W.Hy)() ? (L({
                                                type: Oc.Z.SET_LOGGED_IN,
                                                payload: {
                                                    showPreloader: !1,
                                                    isLoggedIn: !1
                                                }
                                            }),
                                            L({
                                                type: Oc.Z.TOGGLE_MANUAL_LOGOUT_LOGIN,
                                                payload: {
                                                    manualLogoutShowLogin: !0
                                                }
                                            })) : ((0,
                                            W.dr)(),
                                            (0,
                                            mn.L9)("GuestSuccess"),
                                            (0,
                                            on.hB)(),
                                            (0,
                                            on.kS)(!1),
                                            L({
                                                type: Oc.Z.SET_PLAY_TOKEN,
                                                payload: {
                                                    playToken: n
                                                }
                                            }),
                                            L({
                                                type: Oc.Z.GUEST_FLOW,
                                                payload: {
                                                    showPreloader: !1,
                                                    guestFlow: !0
                                                }
                                            })),
                                            l.label = 7;
                                        case 7:
                                            return [3, 9];
                                        case 8:
                                            j(!0),
                                            l.label = 9;
                                        case 9:
                                            return [3, 11];
                                        case 10:
                                            return r = l.sent(),
                                            F({
                                                error: r,
                                                detectionMethod: $.fi
                                            }),
                                            [3, 11];
                                        case 11:
                                            return [2]
                                        }
                                    }
                                    ))
                                }
                                )),
                                y((0,
                                Yt.qU)()),
                                window.addEventListener("beforeunload", (function() {
                                    (0,
                                    pe.LK)(),
                                    (0,
                                    De.F)(),
                                    L({
                                        type: Oc.Z.SET_LOGGED_IN,
                                        payload: {
                                            showPreloader: !0
                                        }
                                    })
                                }
                                )),
                                "function" === typeof BroadcastChannel) {
                                    var s = new BroadcastChannel("tab")
                                      , u = "tab-".concat(W.ZP.appInfo.appId);
                                    s.postMessage(u),
                                    s.addEventListener("message", (function(n) {
                                        n.data === u && L({
                                            type: xn.Z.DUPLICATE_TAB,
                                            payload: {
                                                duplicateTab: !0
                                            }
                                        })
                                    }
                                    ))
                                }
                            } else
                                F({
                                    v: c,
                                    b: d,
                                    detectionMethod: "FeCheck"
                                })
                        }
                    } catch (p) {}
                }
                return function() {
                    window.removeEventListener("storage", H),
                    window.removeEventListener("beforeunload", De.F),
                    window.removeEventListener("blur", ce.n.keyBlurEvent),
                    window.removeEventListener("focus", Mt.CC.onfocus),
                    window.removeEventListener("keydown", mn._b),
                    window.removeEventListener("pointerdown", mn._b),
                    window.removeEventListener("touchstart", mn._b)
                }
            }
            ), [C]),
            (0,
            V.useEffect)((function() {
                if (window.addEventListener("beforeinstallprompt", So.dz),
                (0,
                be.Z)(),
                _ || L({
                    type: Y.Z.UPDATE_ADS_STATE,
                    payload: {
                        adsEnded: !0
                    }
                }),
                L({
                    type: xn.Z.HTML_GAME,
                    payload: {
                        isHtmlGame: "Html" === W.ZP.appInfo.appType
                    }
                }),
                C) {
                    L({
                        type: Oc.Z.SET_LOGGED_IN,
                        payload: {
                            showPreloader: !0
                        }
                    }),
                    window.googlefc = window.googlefc || {},
                    window.googlefc.ccpa = window.googlefc.ccpa || {},
                    window.googlefc.callbackQueue = window.googlefc.callbackQueue || [];
                    var n = setTimeout((function() {
                        clearTimeout(n),
                        T(!1)
                    }
                    ), 5e3);
                    window.googlefc.callbackQueue.push({
                        AD_BLOCK_DATA_READY: function() {
                            clearTimeout(n);
                            var e = window.googlefc.getAdBlockerStatus()
                              , t = window.googlefc.getAllowAdsStatus();
                            if (e === window.googlefc.AdBlockerStatusEnum.EXTENSION_LEVEL_AD_BLOCKER || e === window.googlefc.AdBlockerStatusEnum.NETWORK_LEVEL_AD_BLOCKER)
                                if (t === window.googlefc.AllowAdsStatusEnum.ADS_NOT_ALLOWED)
                                    ;
                                else {
                                    if (!C)
                                        return;
                                    T(!1)
                                }
                            else {
                                if (!C)
                                    return;
                                T(!1)
                            }
                        }
                    })
                }
            }
            ), []),
            (0,
            V.useEffect)((function() {
                ("Html" === W.ZP.appInfo.appType || d) && L((0,
                Ca.J)())
            }
            ), [p, d]),
            (0,
            V.useEffect)((function() {
                var n;
                (null === (n = null === document || void 0 === document ? void 0 : document.body) || void 0 === n ? void 0 : n.classList) && "Html" !== W.ZP.appInfo.appType && document.body.classList[p || Z ? "add" : "remove"]("landscape")
            }
            ), [p, Z, k]),
            (0,
            V.useEffect)((function() {
                var n;
                w && (null === (n = null === document || void 0 === document ? void 0 : document.body) || void 0 === n ? void 0 : n.classList) && document.body.classList.remove($.pp, $.Ov)
            }
            ), [w]),
            (0,
            V.useEffect)((function() {
                if (d) {
                    var n = 0;
                    R.current = setInterval((function() {
                        n += 60,
                        L({
                            type: Y.Z.UPDATE_PLAYTIME,
                            payload: {
                                playtime: n / 60
                            }
                        })
                    }
                    ), 6e4)
                }
                c && !d && R.current && clearInterval(R.current)
            }
            ), [d]);
            var G = !0
              , Q = !0;
            if (!(0,
            q.tq)() || (0,
            q.Em)() || (0,
            q.zc)()) {
                var tn = (null === (o = null === (i = z.playFeatures) || void 0 === i ? void 0 : i.ads) || void 0 === o ? void 0 : o.desktop) || {};
                an = tn.enableMidrollAds,
                ln = tn.enableDisplayAds;
                G = !!an,
                Q = !!ln
            } else {
                var rn = (null === (t = null === (e = z.playFeatures) || void 0 === e ? void 0 : e.ads) || void 0 === t ? void 0 : t.mobile) || {}
                  , an = rn.enableMidrollAds
                  , ln = rn.enableDisplayAds;
                G = !!an,
                Q = !!ln
            }
            (0,
            V.useEffect)((function() {
                c && d && ((0,
                mn.L9)($.Mz),
                L(function(n, e) {
                    return function(t) {
                        var i;
                        (0,
                        q.tq)() ? (0,
                        q.Em)() || (0,
                        q.zc)() ? t({
                            type: Y.Z.LOAD_MID_ROLL,
                            payload: {
                                inGameAds: e
                            }
                        }) : (0,
                        q.tq)() && "5349" === (null === (i = W.ZP.appInfo) || void 0 === i ? void 0 : i.appId) && t({
                            type: Y.Z.LOAD_MID_ROLL,
                            payload: {
                                midRollAdsMobile: !0
                            }
                        }) : t({
                            type: Y.Z.LOAD_MID_ROLL,
                            payload: {
                                midRollAds: n,
                                inGameAds: e
                            }
                        })
                    }
                }(G, Q)))
            }
            ), [c, d]);
            var dn = (0,
            J.v9)((function(n) {
                return n.play.userIPObject
            }
            ));
            (0,
            V.useEffect)((function() {
                B(l || (z.packageName ? "" : "NoPackageName")),
                void 0 === z.areAdsEnabled || z.areAdsEnabled ? (window.tude = window.tude || {
                    cmd: []
                },
                window.tude.cmd.push((function() {
                    return pp(void 0, void 0, void 0, (function() {
                        var n, e, t;
                        return fp(this, (function(i) {
                            switch (i.label) {
                            case 0:
                                if (n = "",
                                (e = (0,
                                on.et)()) && (n = JSON.parse(JSON.stringify(e)).email),
                                !n)
                                    return [3, 4];
                                i.label = 1;
                            case 1:
                                return i.trys.push([1, 3, , 4]),
                                [4, (o = n,
                                pp(void 0, void 0, void 0, (function() {
                                    var n, e;
                                    return fp(this, (function(t) {
                                        switch (t.label) {
                                        case 0:
                                            return n = (new TextEncoder).encode(o),
                                            [4, crypto.subtle.digest("SHA-256", n)];
                                        case 1:
                                            return e = t.sent(),
                                            [2, Array.from(new Uint8Array(e)).map((function(n) {
                                                return n.toString(16).padStart(2, "0")
                                            }
                                            )).join("")]
                                        }
                                    }
                                    ))
                                }
                                )))];
                            case 2:
                                return n = i.sent(),
                                t = up(up({}, dn), {
                                    e: n
                                }),
                                window.tude.setIdProfile(up({}, t)),
                                [3, 4];
                            case 3:
                                return i.sent(),
                                [3, 4];
                            case 4:
                                return [2]
                            }
                            var o
                        }
                        ))
                    }
                    ))
                }
                ))) : L({
                    type: Y.Z.UPDATE_ADS_STATE,
                    payload: {
                        adsEnded: !0
                    }
                })
            }
            ), [z, l]);
            var sn = l !== nn.YR.FailureNoResource && !N && (!d || !c) && !m && !w && !s && !x && z.areAdsEnabled
              , un = "Html" !== W.ZP.appInfo.appType && f && window.Modernizr.peerconnection
              , pn = "Html" !== W.ZP.appInfo.appType && !f && c && sn && !d && window.Modernizr.peerconnection && !(!Z || k || P);
            return (0,
            cn.BX)(cn.HY, {
                children: [O ? (0,
                cn.tZ)(Wu, {}) : l === nn.YR.FailureUnderMaintenance ? (0,
                cn.tZ)($u, {}) : (0,
                cn.BX)(cn.HY, {
                    children: [(0,
                    cn.tZ)(np.default, {
                        children: r && (0,
                        cn.tZ)("link", {
                            rel: "manifest",
                            href: "data:application/json;charset=utf-8,".concat((0,
                            So.ZP)(z.appName, (0,
                            q.tq)()))
                        })
                    }), (0,
                    cn.tZ)(sp, {
                        ref: U,
                        className: "ad-zone ad-space ad-unit textads banner-ads banner_ads"
                    }), !("Html" === W.ZP.appInfo.appType && (0,
                    q.tq)()) && (0,
                    cn.BX)(cn.HY, {
                        children: [(0,
                        cn.tZ)(Qs, {
                            toggle: un,
                            exitingDelay: .3,
                            children: (0,
                            cn.tZ)(du, {
                                toggle: un
                            })
                        }), (0,
                        cn.tZ)(Qs, {
                            toggle: pn,
                            exitingDelay: .6,
                            enteringDelay: .3,
                            children: (0,
                            cn.tZ)(lu, {
                                toggle: pn
                            })
                        })]
                    }), "Html" === W.ZP.appInfo.appType && !(0,
                    q.tq)() && !f && !N && !c && !s && !C && !u && (0,
                    cn.tZ)(Ic, {}), "Html" === W.ZP.appInfo.appType && (!(0,
                    q.tq)() || (0,
                    q.tq)() && !f) && !C && (0,
                    cn.tZ)(Hu.r, {
                        loading: null,
                        persistor: en.D,
                        children: (0,
                        cn.tZ)(lp, {})
                    }), "Html" !== W.ZP.appInfo.appType && !f && (p || Z) && !P && window.Modernizr.peerconnection && l !== nn.YR.FailureNoResource && !N && (!d || !c) && !m && !w && !s && !x && z.areAdsEnabled && !C && !u && (0,
                    cn.tZ)(Ic, {}), !f && (p || Z) && !P && window.Modernizr.peerconnection && (0,
                    cn.BX)(cn.HY, {
                        children: [!A && (0,
                        cn.tZ)(Hu.r, {
                            loading: null,
                            persistor: en.D,
                            children: !N && D && (0,
                            cn.tZ)(Zc, {
                                playToken: D
                            })
                        }), (l === nn.YR.FailureNoResource || l === nn.YR.FailureServiceNotInRegion || N) && (0,
                        cn.tZ)(hp, {
                            error: l
                        }), !W.ZP.features.disableImap && b && (0,
                        cn.tZ)(Fn.default, {
                            onLoad: function() {
                                window.Module.onRuntimeInitialized = function() {
                                    Yt.gp.loaded(!0)
                                }
                            },
                            onError: function() {
                                Yt.gp.failure(!1)
                            },
                            strategy: "afterInteractive",
                            src: "".concat(W.ZP.prefix, "/play/imap.js")
                        })]
                    }), "Html" !== W.ZP.appInfo.appType && h && !g && (0,
                    cn.tZ)(Ou, {}), "Html" !== W.ZP.appInfo.appType && g && !h && (0,
                    cn.tZ)(Lu, {}), "Html" !== W.ZP.appInfo.appType && !window.Modernizr.peerconnection && (0,
                    cn.tZ)(Pu, {}), !f && window.Modernizr.peerconnection && !p && (!Z || k || P) && (0,
                    cn.tZ)(Ws, {})]
                }), !A && (0,
                cn.BX)(cn.HY, {
                    children: [(0,
                    cn.tZ)(_u, {}), (0,
                    cn.tZ)(Uu, {})]
                })]
            })
        }, xp = mp
    }
}]);
//# sourceMappingURL=61.7e329d444a48a495.js.map
