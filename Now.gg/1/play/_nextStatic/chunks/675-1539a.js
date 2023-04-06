(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[675], {
    8566: function(e, t, i) {
        "use strict";
        var n = i(1682)
          , r = i(3848)
          , o = i(3115);
        t.default = function(e) {
            var t, i = e.src, o = e.sizes, l = e.unoptimized, d = void 0 !== l && l, f = e.priority, h = void 0 !== f && f, v = e.loading, y = e.lazyBoundary, w = void 0 === y ? "200px" : y, A = e.className, k = e.quality, z = e.width, j = e.height, E = e.objectFit, _ = e.objectPosition, I = e.onLoadingComplete, P = e.loader, R = void 0 === P ? O : P, q = e.placeholder, D = void 0 === q ? "empty" : q, L = e.blurDataURL, M = function(e, t) {
                if (null == e)
                    return {};
                var i, n, r = function(e, t) {
                    if (null == e)
                        return {};
                    var i, n, r = {}, o = Object.keys(e);
                    for (n = 0; n < o.length; n++)
                        i = o[n],
                        t.indexOf(i) >= 0 || (r[i] = e[i]);
                    return r
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < o.length; n++)
                        i = o[n],
                        t.indexOf(i) >= 0 || Object.prototype.propertyIsEnumerable.call(e, i) && (r[i] = e[i])
                }
                return r
            }(e, ["src", "sizes", "unoptimized", "priority", "loading", "lazyBoundary", "className", "quality", "width", "height", "objectFit", "objectPosition", "onLoadingComplete", "loader", "placeholder", "blurDataURL"]), C = o ? "responsive" : "intrinsic";
            "layout"in M && (M.layout && (C = M.layout),
            delete M.layout);
            var N = "";
            if (function(e) {
                return "object" === typeof e && (b(e) || function(e) {
                    return void 0 !== e.src
                }(e))
            }(i)) {
                var W = b(i) ? i.default : i;
                if (!W.src)
                    throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(W)));
                if (L = L || W.blurDataURL,
                N = W.src,
                (!C || "fill" !== C) && (j = j || W.height,
                z = z || W.width,
                !W.height || !W.width))
                    throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(W)))
            }
            i = "string" === typeof i ? i : N;
            var B = x(z)
              , U = x(j)
              , H = x(k)
              , F = !h && ("lazy" === v || "undefined" === typeof v);
            (i.startsWith("data:") || i.startsWith("blob:")) && (d = !0,
            F = !1);
            m.has(i) && (F = !1);
            0;
            var T, V = u.useIntersection({
                rootMargin: w,
                disabled: !F
            }), J = r(V, 2), G = J[0], Q = J[1], K = !F || Q, X = {
                boxSizing: "border-box",
                display: "block",
                overflow: "hidden",
                width: "initial",
                height: "initial",
                background: "none",
                opacity: 1,
                border: 0,
                margin: 0,
                padding: 0
            }, Y = {
                boxSizing: "border-box",
                display: "block",
                width: "initial",
                height: "initial",
                background: "none",
                opacity: 1,
                border: 0,
                margin: 0,
                padding: 0
            }, Z = !1, $ = {
                position: "absolute",
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
                boxSizing: "border-box",
                padding: 0,
                border: "none",
                margin: "auto",
                display: "block",
                width: 0,
                height: 0,
                minWidth: "100%",
                maxWidth: "100%",
                minHeight: "100%",
                maxHeight: "100%",
                objectFit: E,
                objectPosition: _
            }, ee = "blur" === D ? {
                filter: "blur(20px)",
                backgroundSize: E || "cover",
                backgroundImage: 'url("'.concat(L, '")'),
                backgroundPosition: _ || "0% 0%"
            } : {};
            if ("fill" === C)
                X.display = "block",
                X.position = "absolute",
                X.top = 0,
                X.left = 0,
                X.bottom = 0,
                X.right = 0;
            else if ("undefined" !== typeof B && "undefined" !== typeof U) {
                var te = U / B
                  , ie = isNaN(te) ? "100%" : "".concat(100 * te, "%");
                "responsive" === C ? (X.display = "block",
                X.position = "relative",
                Z = !0,
                Y.paddingTop = ie) : "intrinsic" === C ? (X.display = "inline-block",
                X.position = "relative",
                X.maxWidth = "100%",
                Z = !0,
                Y.maxWidth = "100%",
                T = '<svg width="'.concat(B, '" height="').concat(U, '" xmlns="http://www.w3.org/2000/svg" version="1.1"/>')) : "fixed" === C && (X.display = "inline-block",
                X.position = "relative",
                X.width = B,
                X.height = U)
            } else
                0;
            var ne = {
                src: p,
                srcSet: void 0,
                sizes: void 0
            };
            K && (ne = S({
                src: i,
                unoptimized: d,
                layout: C,
                width: B,
                quality: H,
                sizes: o,
                loader: R
            }));
            var re = i;
            0;
            0;
            var oe = (n(t = {}, "imagesrcset", ne.srcSet),
            n(t, "imagesizes", ne.sizes),
            t);
            return a.default.createElement("span", {
                style: X
            }, Z ? a.default.createElement("span", {
                style: Y
            }, T ? a.default.createElement("img", {
                style: {
                    display: "block",
                    maxWidth: "100%",
                    width: "initial",
                    height: "initial",
                    background: "none",
                    opacity: 1,
                    border: 0,
                    margin: 0,
                    padding: 0
                },
                alt: "",
                "aria-hidden": !0,
                src: "data:image/svg+xml;base64,".concat(s.toBase64(T))
            }) : null) : null, a.default.createElement("img", Object.assign({}, M, ne, {
                decoding: "async",
                "data-nimg": C,
                className: A,
                ref: function(e) {
                    G(e),
                    function(e, t, i, n, r) {
                        if (!e)
                            return;
                        var o = function() {
                            e.src !== p && ("decode"in e ? e.decode() : Promise.resolve()).catch((function() {}
                            )).then((function() {
                                if ("blur" === n && (e.style.filter = "none",
                                e.style.backgroundSize = "none",
                                e.style.backgroundImage = "none"),
                                m.add(t),
                                r) {
                                    var i = e.naturalWidth
                                      , o = e.naturalHeight;
                                    r({
                                        naturalWidth: i,
                                        naturalHeight: o
                                    })
                                }
                            }
                            ))
                        };
                        e.complete ? o() : e.onload = o
                    }(e, re, 0, D, I)
                },
                style: g({}, $, ee)
            })), a.default.createElement("noscript", null, a.default.createElement("img", Object.assign({}, M, S({
                src: i,
                unoptimized: d,
                layout: C,
                width: B,
                quality: H,
                sizes: o,
                loader: R
            }), {
                decoding: "async",
                "data-nimg": C,
                style: $,
                className: A,
                loading: v || "lazy"
            }))), h ? a.default.createElement(c.default, null, a.default.createElement("link", Object.assign({
                key: "__nimg-" + ne.src + ne.srcSet + ne.sizes,
                rel: "preload",
                as: "image",
                href: ne.srcSet ? void 0 : ne.src
            }, oe))) : null)
        }
        ;
        var a = f(i(1720))
          , c = f(i(5480))
          , s = i(3389)
          , l = i(5809)
          , u = i(639);
        function d(e, t, i) {
            return t in e ? Object.defineProperty(e, t, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = i,
            e
        }
        function f(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        function g(e) {
            for (var t = 1; t < arguments.length; t++) {
                var i = null != arguments[t] ? arguments[t] : {}
                  , n = Object.keys(i);
                "function" === typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(i).filter((function(e) {
                    return Object.getOwnPropertyDescriptor(i, e).enumerable
                }
                )))),
                n.forEach((function(t) {
                    d(e, t, i[t])
                }
                ))
            }
            return e
        }
        var m = new Set
          , p = (new Map,
        "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7");
        var h = new Map([["default", function(e) {
            var t = e.root
              , i = e.src
              , n = e.width
              , r = e.quality;
            0;
            return "".concat(t, "?url=").concat(encodeURIComponent(i), "&w=").concat(n, "&q=").concat(r || 75)
        }
        ], ["imgix", function(e) {
            var t = e.root
              , i = e.src
              , n = e.width
              , r = e.quality
              , o = new URL("".concat(t).concat(j(i)))
              , a = o.searchParams;
            a.set("auto", a.get("auto") || "format"),
            a.set("fit", a.get("fit") || "max"),
            a.set("w", a.get("w") || n.toString()),
            r && a.set("q", r.toString());
            return o.href
        }
        ], ["cloudinary", function(e) {
            var t = e.root
              , i = e.src
              , n = e.width
              , r = e.quality
              , o = ["f_auto", "c_limit", "w_" + n, "q_" + (r || "auto")].join(",") + "/";
            return "".concat(t).concat(o).concat(j(i))
        }
        ], ["akamai", function(e) {
            var t = e.root
              , i = e.src
              , n = e.width;
            return "".concat(t).concat(j(i), "?imwidth=").concat(n)
        }
        ], ["custom", function(e) {
            var t = e.src;
            throw new Error('Image with src "'.concat(t, '" is missing "loader" prop.') + "\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")
        }
        ]]);
        function b(e) {
            return void 0 !== e.default
        }
        var v = {
            deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
            imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
            path: "/play/_next/image",
            loader: "default"
        } || l.imageConfigDefault
          , y = v.deviceSizes
          , w = v.imageSizes
          , A = v.loader
          , k = v.path
          , z = (v.domains,
        [].concat(o(y), o(w)));
        function S(e) {
            var t = e.src
              , i = e.unoptimized
              , n = e.layout
              , r = e.width
              , a = e.quality
              , c = e.sizes
              , s = e.loader;
            if (i)
                return {
                    src: t,
                    srcSet: void 0,
                    sizes: void 0
                };
            var l = function(e, t, i) {
                if (i && ("fill" === t || "responsive" === t)) {
                    for (var n, r = /(^|\s)(1?\d?\d)vw/g, a = []; n = r.exec(i); n)
                        a.push(parseInt(n[2]));
                    if (a.length) {
                        var c = .01 * Math.min.apply(Math, a);
                        return {
                            widths: z.filter((function(e) {
                                return e >= y[0] * c
                            }
                            )),
                            kind: "w"
                        }
                    }
                    return {
                        widths: z,
                        kind: "w"
                    }
                }
                return "number" !== typeof e || "fill" === t || "responsive" === t ? {
                    widths: y,
                    kind: "w"
                } : {
                    widths: o(new Set([e, 2 * e].map((function(e) {
                        return z.find((function(t) {
                            return t >= e
                        }
                        )) || z[z.length - 1]
                    }
                    )))),
                    kind: "x"
                }
            }(r, n, c)
              , u = l.widths
              , d = l.kind
              , f = u.length - 1;
            return {
                sizes: c || "w" !== d ? c : "100vw",
                srcSet: u.map((function(e, i) {
                    return "".concat(s({
                        src: t,
                        quality: a,
                        width: e
                    }), " ").concat("w" === d ? e : i + 1).concat(d)
                }
                )).join(", "),
                src: s({
                    src: t,
                    quality: a,
                    width: u[f]
                })
            }
        }
        function x(e) {
            return "number" === typeof e ? e : "string" === typeof e ? parseInt(e, 10) : void 0
        }
        function O(e) {
            var t = h.get(A);
            if (t)
                return t(g({
                    root: k
                }, e));
            throw new Error('Unknown "loader" found in "next.config.js". Expected: '.concat(l.VALID_LOADERS.join(", "), ". Received: ").concat(A))
        }
        function j(e) {
            return "/" === e[0] ? e.slice(1) : e
        }
        y.sort((function(e, t) {
            return e - t
        }
        )),
        z.sort((function(e, t) {
            return e - t
        }
        ))
    },
    639: function(e, t, i) {
        "use strict";
        var n = i(3848);
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.useIntersection = function(e) {
            var t = e.rootMargin
              , i = e.disabled || !a
              , s = r.useRef()
              , l = r.useState(!1)
              , u = n(l, 2)
              , d = u[0]
              , f = u[1]
              , g = r.useCallback((function(e) {
                s.current && (s.current(),
                s.current = void 0),
                i || d || e && e.tagName && (s.current = function(e, t, i) {
                    var n = function(e) {
                        var t = e.rootMargin || ""
                          , i = c.get(t);
                        if (i)
                            return i;
                        var n = new Map
                          , r = new IntersectionObserver((function(e) {
                            e.forEach((function(e) {
                                var t = n.get(e.target)
                                  , i = e.isIntersecting || e.intersectionRatio > 0;
                                t && i && t(i)
                            }
                            ))
                        }
                        ),e);
                        return c.set(t, i = {
                            id: t,
                            observer: r,
                            elements: n
                        }),
                        i
                    }(i)
                      , r = n.id
                      , o = n.observer
                      , a = n.elements;
                    return a.set(e, t),
                    o.observe(e),
                    function() {
                        a.delete(e),
                        o.unobserve(e),
                        0 === a.size && (o.disconnect(),
                        c.delete(r))
                    }
                }(e, (function(e) {
                    return e && f(e)
                }
                ), {
                    rootMargin: t
                }))
            }
            ), [i, t, d]);
            return r.useEffect((function() {
                if (!a && !d) {
                    var e = o.requestIdleCallback((function() {
                        return f(!0)
                    }
                    ));
                    return function() {
                        return o.cancelIdleCallback(e)
                    }
                }
            }
            ), [d]),
            [g, d]
        }
        ;
        var r = i(1720)
          , o = i(6286)
          , a = "undefined" !== typeof IntersectionObserver;
        var c = new Map
    },
    3389: function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.toBase64 = function(e) {
            return window.btoa(e)
        }
    },
    5809: function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.imageConfigDefault = t.VALID_LOADERS = void 0;
        t.VALID_LOADERS = ["default", "imgix", "cloudinary", "akamai", "custom"];
        t.imageConfigDefault = {
            deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
            imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
            path: "/_next/image",
            loader: "default",
            domains: [],
            disableStaticImages: !1,
            minimumCacheTTL: 60,
            formats: ["image/webp"]
        }
    },
    5675: function(e, t, i) {
        e.exports = i(8566)
    }
}]);
//# sourceMappingURL=675-1539a2a581a5ea1e.js.map
