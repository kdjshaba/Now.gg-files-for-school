!function() {
    "use strict";
    var e = {
        895: function() {
            try {
                self["workbox:cacheable-response:6.5.3"] && _()
            } catch (e) {}
        },
        913: function() {
            try {
                self["workbox:core:6.5.3"] && _()
            } catch (e) {}
        },
        550: function() {
            try {
                self["workbox:expiration:6.5.3"] && _()
            } catch (e) {}
        },
        977: function() {
            try {
                self["workbox:precaching:6.5.3"] && _()
            } catch (e) {}
        },
        80: function() {
            try {
                self["workbox:routing:6.5.3"] && _()
            } catch (e) {}
        },
        873: function() {
            try {
                self["workbox:strategies:6.5.3"] && _()
            } catch (e) {}
        }
    }
      , t = {};
    function s(n) {
        var a = t[n];
        if (void 0 !== a)
            return a.exports;
        var r = t[n] = {
            exports: {}
        }
          , i = !0;
        try {
            e[n](r, r.exports, s),
            i = !1
        } finally {
            i && delete t[n]
        }
        return r.exports
    }
    !function() {
        s(913);
        const e = (e,...t)=>{
            let s = e;
            return t.length > 0 && (s += ` :: ${JSON.stringify(t)}`),
            s
        }
        ;
        class t extends Error {
            constructor(t, s) {
                super(e(t, s)),
                this.name = t,
                this.details = s
            }
        }
        const n = {
            googleAnalytics: "googleAnalytics",
            precache: "precache-v2",
            prefix: "workbox",
            runtime: "runtime",
            suffix: "undefined" !== typeof registration ? registration.scope : ""
        }
          , a = e=>[n.prefix, e, n.suffix].filter((e=>e && e.length > 0)).join("-")
          , r = e=>{
            (e=>{
                for (const t of Object.keys(n))
                    e(t)
            }
            )((t=>{
                "string" === typeof e[t] && (n[t] = e[t])
            }
            ))
        }
          , i = e=>e || a(n.precache)
          , c = e=>e || a(n.runtime);
        s(977);
        let o;
        async function h(e, s) {
            let n = null;
            if (e.url) {
                n = new URL(e.url).origin
            }
            if (n !== self.location.origin)
                throw new t("cross-origin-copy-response",{
                    origin: n
                });
            const a = e.clone()
              , r = {
                headers: new Headers(a.headers),
                status: a.status,
                statusText: a.statusText
            }
              , i = s ? s(r) : r
              , c = function() {
                if (void 0 === o) {
                    const t = new Response("");
                    if ("body"in t)
                        try {
                            new Response(t.body),
                            o = !0
                        } catch (e) {
                            o = !1
                        }
                    o = !1
                }
                return o
            }() ? a.body : await a.blob();
            return new Response(c,i)
        }
        const l = e=>new URL(String(e),location.href).href.replace(new RegExp(`^${location.origin}`), "");
        function u(e, t) {
            const s = new URL(e);
            for (const n of t)
                s.searchParams.delete(n);
            return s.href
        }
        class d {
            constructor() {
                this.promise = new Promise(((e,t)=>{
                    this.resolve = e,
                    this.reject = t
                }
                ))
            }
        }
        const f = new Set;
        s(873);
        function p(e) {
            return "string" === typeof e ? new Request(e) : e
        }
        class g {
            constructor(e, t) {
                this._cacheKeys = {},
                Object.assign(this, t),
                this.event = t.event,
                this._strategy = e,
                this._handlerDeferred = new d,
                this._extendLifetimePromises = [],
                this._plugins = [...e.plugins],
                this._pluginStateMap = new Map;
                for (const s of this._plugins)
                    this._pluginStateMap.set(s, {});
                this.event.waitUntil(this._handlerDeferred.promise)
            }
            async fetch(e) {
                const {event: s} = this;
                let n = p(e);
                if ("navigate" === n.mode && s instanceof FetchEvent && s.preloadResponse) {
                    const e = await s.preloadResponse;
                    if (e)
                        return e
                }
                const a = this.hasCallback("fetchDidFail") ? n.clone() : null;
                try {
                    for (const e of this.iterateCallbacks("requestWillFetch"))
                        n = await e({
                            request: n.clone(),
                            event: s
                        })
                } catch (i) {
                    if (i instanceof Error)
                        throw new t("plugin-error-request-will-fetch",{
                            thrownErrorMessage: i.message
                        })
                }
                const r = n.clone();
                try {
                    let e;
                    e = await fetch(n, "navigate" === n.mode ? void 0 : this._strategy.fetchOptions);
                    for (const t of this.iterateCallbacks("fetchDidSucceed"))
                        e = await t({
                            event: s,
                            request: r,
                            response: e
                        });
                    return e
                } catch (c) {
                    throw a && await this.runCallbacks("fetchDidFail", {
                        error: c,
                        event: s,
                        originalRequest: a.clone(),
                        request: r.clone()
                    }),
                    c
                }
            }
            async fetchAndCachePut(e) {
                const t = await this.fetch(e)
                  , s = t.clone();
                return this.waitUntil(this.cachePut(e, s)),
                t
            }
            async cacheMatch(e) {
                const t = p(e);
                let s;
                const {cacheName: n, matchOptions: a} = this._strategy
                  , r = await this.getCacheKey(t, "read")
                  , i = Object.assign(Object.assign({}, a), {
                    cacheName: n
                });
                s = await caches.match(r, i);
                for (const c of this.iterateCallbacks("cachedResponseWillBeUsed"))
                    s = await c({
                        cacheName: n,
                        matchOptions: a,
                        cachedResponse: s,
                        request: r,
                        event: this.event
                    }) || void 0;
                return s
            }
            async cachePut(e, s) {
                const n = p(e);
                var a;
                await (a = 0,
                new Promise((e=>setTimeout(e, a))));
                const r = await this.getCacheKey(n, "write");
                if (!s)
                    throw new t("cache-put-with-no-response",{
                        url: l(r.url)
                    });
                const i = await this._ensureResponseSafeToCache(s);
                if (!i)
                    return !1;
                const {cacheName: c, matchOptions: o} = this._strategy
                  , h = await self.caches.open(c)
                  , d = this.hasCallback("cacheDidUpdate")
                  , g = d ? await async function(e, t, s, n) {
                    const a = u(t.url, s);
                    if (t.url === a)
                        return e.match(t, n);
                    const r = Object.assign(Object.assign({}, n), {
                        ignoreSearch: !0
                    })
                      , i = await e.keys(t, r);
                    for (const c of i)
                        if (a === u(c.url, s))
                            return e.match(c, n)
                }(h, r.clone(), ["__WB_REVISION__"], o) : null;
                try {
                    await h.put(r, d ? i.clone() : i)
                } catch (m) {
                    if (m instanceof Error)
                        throw "QuotaExceededError" === m.name && await async function() {
                            for (const e of f)
                                await e()
                        }(),
                        m
                }
                for (const t of this.iterateCallbacks("cacheDidUpdate"))
                    await t({
                        cacheName: c,
                        oldResponse: g,
                        newResponse: i.clone(),
                        request: r,
                        event: this.event
                    });
                return !0
            }
            async getCacheKey(e, t) {
                const s = `${e.url} | ${t}`;
                if (!this._cacheKeys[s]) {
                    let n = e;
                    for (const e of this.iterateCallbacks("cacheKeyWillBeUsed"))
                        n = p(await e({
                            mode: t,
                            request: n,
                            event: this.event,
                            params: this.params
                        }));
                    this._cacheKeys[s] = n
                }
                return this._cacheKeys[s]
            }
            hasCallback(e) {
                for (const t of this._strategy.plugins)
                    if (e in t)
                        return !0;
                return !1
            }
            async runCallbacks(e, t) {
                for (const s of this.iterateCallbacks(e))
                    await s(t)
            }
            *iterateCallbacks(e) {
                for (const t of this._strategy.plugins)
                    if ("function" === typeof t[e]) {
                        const s = this._pluginStateMap.get(t)
                          , n = n=>{
                            const a = Object.assign(Object.assign({}, n), {
                                state: s
                            });
                            return t[e](a)
                        }
                        ;
                        yield n
                    }
            }
            waitUntil(e) {
                return this._extendLifetimePromises.push(e),
                e
            }
            async doneWaiting() {
                let e;
                for (; e = this._extendLifetimePromises.shift(); )
                    await e
            }
            destroy() {
                this._handlerDeferred.resolve(null)
            }
            async _ensureResponseSafeToCache(e) {
                let t = e
                  , s = !1;
                for (const n of this.iterateCallbacks("cacheWillUpdate"))
                    if (t = await n({
                        request: this.request,
                        response: t,
                        event: this.event
                    }) || void 0,
                    s = !0,
                    !t)
                        break;
                return s || t && 200 !== t.status && (t = void 0),
                t
            }
        }
        class m {
            constructor(e={}) {
                this.cacheName = c(e.cacheName),
                this.plugins = e.plugins || [],
                this.fetchOptions = e.fetchOptions,
                this.matchOptions = e.matchOptions
            }
            handle(e) {
                const [t] = this.handleAll(e);
                return t
            }
            handleAll(e) {
                e instanceof FetchEvent && (e = {
                    event: e,
                    request: e.request
                });
                const t = e.event
                  , s = "string" === typeof e.request ? new Request(e.request) : e.request
                  , n = "params"in e ? e.params : void 0
                  , a = new g(this,{
                    event: t,
                    request: s,
                    params: n
                })
                  , r = this._getResponse(a, s, t);
                return [r, this._awaitComplete(r, a, s, t)]
            }
            async _getResponse(e, s, n) {
                let a;
                await e.runCallbacks("handlerWillStart", {
                    event: n,
                    request: s
                });
                try {
                    if (a = await this._handle(s, e),
                    !a || "error" === a.type)
                        throw new t("no-response",{
                            url: s.url
                        })
                } catch (r) {
                    if (r instanceof Error)
                        for (const t of e.iterateCallbacks("handlerDidError"))
                            if (a = await t({
                                error: r,
                                event: n,
                                request: s
                            }),
                            a)
                                break;
                    if (!a)
                        throw r
                }
                for (const t of e.iterateCallbacks("handlerWillRespond"))
                    a = await t({
                        event: n,
                        request: s,
                        response: a
                    });
                return a
            }
            async _awaitComplete(e, t, s, n) {
                let a, r;
                try {
                    a = await e
                } catch (r) {}
                try {
                    await t.runCallbacks("handlerDidRespond", {
                        event: n,
                        request: s,
                        response: a
                    }),
                    await t.doneWaiting()
                } catch (i) {
                    i instanceof Error && (r = i)
                }
                if (await t.runCallbacks("handlerDidComplete", {
                    event: n,
                    request: s,
                    response: a,
                    error: r
                }),
                t.destroy(),
                r)
                    throw r
            }
        }
        class w extends m {
            constructor(e={}) {
                e.cacheName = i(e.cacheName),
                super(e),
                this._fallbackToNetwork = !1 !== e.fallbackToNetwork,
                this.plugins.push(w.copyRedirectedCacheableResponsesPlugin)
            }
            async _handle(e, t) {
                const s = await t.cacheMatch(e);
                return s || (t.event && "install" === t.event.type ? await this._handleInstall(e, t) : await this._handleFetch(e, t))
            }
            async _handleFetch(e, s) {
                let n;
                const a = s.params || {};
                if (!this._fallbackToNetwork)
                    throw new t("missing-precache-entry",{
                        cacheName: this.cacheName,
                        url: e.url
                    });
                {
                    0;
                    const t = a.integrity
                      , r = e.integrity
                      , i = !r || r === t;
                    if (n = await s.fetch(new Request(e,{
                        integrity: "no-cors" !== e.mode ? r || t : void 0
                    })),
                    t && i && "no-cors" !== e.mode) {
                        this._useDefaultCacheabilityPluginIfNeeded();
                        await s.cachePut(e, n.clone());
                        0
                    }
                }
                return n
            }
            async _handleInstall(e, s) {
                this._useDefaultCacheabilityPluginIfNeeded();
                const n = await s.fetch(e);
                if (!(await s.cachePut(e, n.clone())))
                    throw new t("bad-precaching-response",{
                        url: e.url,
                        status: n.status
                    });
                return n
            }
            _useDefaultCacheabilityPluginIfNeeded() {
                let e = null
                  , t = 0;
                for (const [s,n] of this.plugins.entries())
                    n !== w.copyRedirectedCacheableResponsesPlugin && (n === w.defaultPrecacheCacheabilityPlugin && (e = s),
                    n.cacheWillUpdate && t++);
                0 === t ? this.plugins.push(w.defaultPrecacheCacheabilityPlugin) : t > 1 && null !== e && this.plugins.splice(e, 1)
            }
        }
        w.defaultPrecacheCacheabilityPlugin = {
            cacheWillUpdate: async({response: e})=>!e || e.status >= 400 ? null : e
        },
        w.copyRedirectedCacheableResponsesPlugin = {
            cacheWillUpdate: async({response: e})=>e.redirected ? await h(e) : e
        };
        s(80);
        const _ = e=>e && "object" === typeof e ? e : {
            handle: e
        };
        class y {
            constructor(e, t, s="GET") {
                this.handler = _(t),
                this.match = e,
                this.method = s
            }
            setCatchHandler(e) {
                this.catchHandler = _(e)
            }
        }
        class b extends y {
            constructor(e, t, s) {
                super((({url: t})=>{
                    const s = e.exec(t.href);
                    if (s && (t.origin === location.origin || 0 === s.index))
                        return s.slice(1)
                }
                ), t, s)
            }
        }
        class v {
            constructor() {
                this._routes = new Map,
                this._defaultHandlerMap = new Map
            }
            get routes() {
                return this._routes
            }
            addFetchListener() {
                self.addEventListener("fetch", (e=>{
                    const {request: t} = e
                      , s = this.handleRequest({
                        request: t,
                        event: e
                    });
                    s && e.respondWith(s)
                }
                ))
            }
            addCacheListener() {
                self.addEventListener("message", (e=>{
                    if (e.data && "CACHE_URLS" === e.data.type) {
                        const {payload: t} = e.data;
                        0;
                        const s = Promise.all(t.urlsToCache.map((t=>{
                            "string" === typeof t && (t = [t]);
                            const s = new Request(...t);
                            return this.handleRequest({
                                request: s,
                                event: e
                            })
                        }
                        )));
                        e.waitUntil(s),
                        e.ports && e.ports[0] && s.then((()=>e.ports[0].postMessage(!0)))
                    }
                }
                ))
            }
            handleRequest({request: e, event: t}) {
                const s = new URL(e.url,location.href);
                if (!s.protocol.startsWith("http"))
                    return void 0;
                const n = s.origin === location.origin
                  , {params: a, route: r} = this.findMatchingRoute({
                    event: t,
                    request: e,
                    sameOrigin: n,
                    url: s
                });
                let i = r && r.handler;
                const c = e.method;
                if (!i && this._defaultHandlerMap.has(c) && (i = this._defaultHandlerMap.get(c)),
                !i)
                    return void 0;
                let o;
                try {
                    o = i.handle({
                        url: s,
                        request: e,
                        event: t,
                        params: a
                    })
                } catch (l) {
                    o = Promise.reject(l)
                }
                const h = r && r.catchHandler;
                return o instanceof Promise && (this._catchHandler || h) && (o = o.catch((async n=>{
                    if (h) {
                        0;
                        try {
                            return await h.handle({
                                url: s,
                                request: e,
                                event: t,
                                params: a
                            })
                        } catch (r) {
                            r instanceof Error && (n = r)
                        }
                    }
                    if (this._catchHandler)
                        return this._catchHandler.handle({
                            url: s,
                            request: e,
                            event: t
                        });
                    throw n
                }
                ))),
                o
            }
            findMatchingRoute({url: e, sameOrigin: t, request: s, event: n}) {
                const a = this._routes.get(s.method) || [];
                for (const r of a) {
                    let a;
                    const i = r.match({
                        url: e,
                        sameOrigin: t,
                        request: s,
                        event: n
                    });
                    if (i)
                        return a = i,
                        (Array.isArray(a) && 0 === a.length || i.constructor === Object && 0 === Object.keys(i).length || "boolean" === typeof i) && (a = void 0),
                        {
                            route: r,
                            params: a
                        }
                }
                return {}
            }
            setDefaultHandler(e, t="GET") {
                this._defaultHandlerMap.set(t, _(e))
            }
            setCatchHandler(e) {
                this._catchHandler = _(e)
            }
            registerRoute(e) {
                this._routes.has(e.method) || this._routes.set(e.method, []),
                this._routes.get(e.method).push(e)
            }
            unregisterRoute(e) {
                if (!this._routes.has(e.method))
                    throw new t("unregister-route-but-not-found-with-method",{
                        method: e.method
                    });
                const s = this._routes.get(e.method).indexOf(e);
                if (!(s > -1))
                    throw new t("unregister-route-route-not-registered");
                this._routes.get(e.method).splice(s, 1)
            }
        }
        let x;
        const E = ()=>(x || (x = new v,
        x.addFetchListener(),
        x.addCacheListener()),
        x);
        function R(e, s, n) {
            let a;
            if ("string" === typeof e) {
                const t = new URL(e,location.href);
                0;
                a = new y((({url: e})=>e.href === t.href),s,n)
            } else if (e instanceof RegExp)
                a = new b(e,s,n);
            else if ("function" === typeof e)
                a = new y(e,s,n);
            else {
                if (!(e instanceof y))
                    throw new t("unsupported-route-type",{
                        moduleName: "workbox-routing",
                        funcName: "registerRoute",
                        paramName: "capture"
                    });
                a = e
            }
            return E().registerRoute(a),
            a
        }
        function D(e) {
            e.then((()=>{}
            ))
        }
        class C extends m {
            async _handle(e, s) {
                let n, a = await s.cacheMatch(e);
                if (a)
                    0;
                else {
                    0;
                    try {
                        a = await s.fetchAndCachePut(e)
                    } catch (r) {
                        r instanceof Error && (n = r)
                    }
                    0
                }
                if (!a)
                    throw new t("no-response",{
                        url: e.url,
                        error: n
                    });
                return a
            }
        }
        const k = {
            cacheWillUpdate: async({response: e})=>200 === e.status || 0 === e.status ? e : null
        };
        class q extends m {
            constructor(e={}) {
                super(e),
                this.plugins.some((e=>"cacheWillUpdate"in e)) || this.plugins.unshift(k)
            }
            async _handle(e, s) {
                const n = s.fetchAndCachePut(e).catch((()=>{}
                ));
                s.waitUntil(n);
                let a, r = await s.cacheMatch(e);
                if (r)
                    0;
                else {
                    0;
                    try {
                        r = await n
                    } catch (i) {
                        i instanceof Error && (a = i)
                    }
                }
                if (!r)
                    throw new t("no-response",{
                        url: e.url,
                        error: a
                    });
                return r
            }
        }
        s(895);
        class N {
            constructor(e={}) {
                this._statuses = e.statuses,
                this._headers = e.headers
            }
            isResponseCacheable(e) {
                let t = !0;
                return this._statuses && (t = this._statuses.includes(e.status)),
                this._headers && t && (t = Object.keys(this._headers).some((t=>e.headers.get(t) === this._headers[t]))),
                t
            }
        }
        let O, S;
        const L = new WeakMap
          , P = new WeakMap
          , A = new WeakMap
          , I = new WeakMap
          , M = new WeakMap;
        let T = {
            get(e, t, s) {
                if (e instanceof IDBTransaction) {
                    if ("done" === t)
                        return P.get(e);
                    if ("objectStoreNames" === t)
                        return e.objectStoreNames || A.get(e);
                    if ("store" === t)
                        return s.objectStoreNames[1] ? void 0 : s.objectStore(s.objectStoreNames[0])
                }
                return B(e[t])
            },
            set: (e,t,s)=>(e[t] = s,
            !0),
            has: (e,t)=>e instanceof IDBTransaction && ("done" === t || "store" === t) || t in e
        };
        function U(e) {
            return e !== IDBDatabase.prototype.transaction || "objectStoreNames"in IDBTransaction.prototype ? (S || (S = [IDBCursor.prototype.advance, IDBCursor.prototype.continue, IDBCursor.prototype.continuePrimaryKey])).includes(e) ? function(...t) {
                return e.apply(W(this), t),
                B(L.get(this))
            }
            : function(...t) {
                return B(e.apply(W(this), t))
            }
            : function(t, ...s) {
                const n = e.call(W(this), t, ...s);
                return A.set(n, t.sort ? t.sort() : [t]),
                B(n)
            }
        }
        function j(e) {
            return "function" === typeof e ? U(e) : (e instanceof IDBTransaction && function(e) {
                if (P.has(e))
                    return;
                const t = new Promise(((t,s)=>{
                    const n = ()=>{
                        e.removeEventListener("complete", a),
                        e.removeEventListener("error", r),
                        e.removeEventListener("abort", r)
                    }
                      , a = ()=>{
                        t(),
                        n()
                    }
                      , r = ()=>{
                        s(e.error || new DOMException("AbortError","AbortError")),
                        n()
                    }
                    ;
                    e.addEventListener("complete", a),
                    e.addEventListener("error", r),
                    e.addEventListener("abort", r)
                }
                ));
                P.set(e, t)
            }(e),
            t = e,
            (O || (O = [IDBDatabase, IDBObjectStore, IDBIndex, IDBCursor, IDBTransaction])).some((e=>t instanceof e)) ? new Proxy(e,T) : e);
            var t
        }
        function B(e) {
            if (e instanceof IDBRequest)
                return function(e) {
                    const t = new Promise(((t,s)=>{
                        const n = ()=>{
                            e.removeEventListener("success", a),
                            e.removeEventListener("error", r)
                        }
                          , a = ()=>{
                            t(B(e.result)),
                            n()
                        }
                          , r = ()=>{
                            s(e.error),
                            n()
                        }
                        ;
                        e.addEventListener("success", a),
                        e.addEventListener("error", r)
                    }
                    ));
                    return t.then((t=>{
                        t instanceof IDBCursor && L.set(t, e)
                    }
                    )).catch((()=>{}
                    )),
                    M.set(t, e),
                    t
                }(e);
            if (I.has(e))
                return I.get(e);
            const t = j(e);
            return t !== e && (I.set(e, t),
            M.set(t, e)),
            t
        }
        const W = e=>M.get(e);
        const H = ["get", "getKey", "getAll", "getAllKeys", "count"]
          , F = ["put", "add", "delete", "clear"]
          , K = new Map;
        function V(e, t) {
            if (!(e instanceof IDBDatabase) || t in e || "string" !== typeof t)
                return;
            if (K.get(t))
                return K.get(t);
            const s = t.replace(/FromIndex$/, "")
              , n = t !== s
              , a = F.includes(s);
            if (!(s in (n ? IDBIndex : IDBObjectStore).prototype) || !a && !H.includes(s))
                return;
            const r = async function(e, ...t) {
                const r = this.transaction(e, a ? "readwrite" : "readonly");
                let i = r.store;
                return n && (i = i.index(t.shift())),
                (await Promise.all([i[s](...t), a && r.done]))[0]
            };
            return K.set(t, r),
            r
        }
        T = (e=>({
            ...e,
            get: (t,s,n)=>V(t, s) || e.get(t, s, n),
            has: (t,s)=>!!V(t, s) || e.has(t, s)
        }))(T);
        s(550);
        const $ = "cache-entries"
          , G = e=>{
            const t = new URL(e,location.href);
            return t.hash = "",
            t.href
        }
        ;
        class Q {
            constructor(e) {
                this._db = null,
                this._cacheName = e
            }
            _upgradeDb(e) {
                const t = e.createObjectStore($, {
                    keyPath: "id"
                });
                t.createIndex("cacheName", "cacheName", {
                    unique: !1
                }),
                t.createIndex("timestamp", "timestamp", {
                    unique: !1
                })
            }
            _upgradeDbAndDeleteOldDbs(e) {
                this._upgradeDb(e),
                this._cacheName && function(e, {blocked: t}={}) {
                    const s = indexedDB.deleteDatabase(e);
                    t && s.addEventListener("blocked", (e=>t(e.oldVersion, e))),
                    B(s).then((()=>{}
                    ))
                }(this._cacheName)
            }
            async setTimestamp(e, t) {
                const s = {
                    url: e = G(e),
                    timestamp: t,
                    cacheName: this._cacheName,
                    id: this._getId(e)
                }
                  , n = (await this.getDb()).transaction($, "readwrite", {
                    durability: "relaxed"
                });
                await n.store.put(s),
                await n.done
            }
            async getTimestamp(e) {
                const t = await this.getDb()
                  , s = await t.get($, this._getId(e));
                return null === s || void 0 === s ? void 0 : s.timestamp
            }
            async expireEntries(e, t) {
                const s = await this.getDb();
                let n = await s.transaction($).store.index("timestamp").openCursor(null, "prev");
                const a = [];
                let r = 0;
                for (; n; ) {
                    const s = n.value;
                    s.cacheName === this._cacheName && (e && s.timestamp < e || t && r >= t ? a.push(n.value) : r++),
                    n = await n.continue()
                }
                const i = [];
                for (const c of a)
                    await s.delete($, c.id),
                    i.push(c.url);
                return i
            }
            _getId(e) {
                return this._cacheName + "|" + G(e)
            }
            async getDb() {
                return this._db || (this._db = await function(e, t, {blocked: s, upgrade: n, blocking: a, terminated: r}={}) {
                    const i = indexedDB.open(e, t)
                      , c = B(i);
                    return n && i.addEventListener("upgradeneeded", (e=>{
                        n(B(i.result), e.oldVersion, e.newVersion, B(i.transaction), e)
                    }
                    )),
                    s && i.addEventListener("blocked", (e=>s(e.oldVersion, e.newVersion, e))),
                    c.then((e=>{
                        r && e.addEventListener("close", (()=>r())),
                        a && e.addEventListener("versionchange", (e=>a(e.oldVersion, e.newVersion, e)))
                    }
                    )).catch((()=>{}
                    )),
                    c
                }("workbox-expiration", 1, {
                    upgrade: this._upgradeDbAndDeleteOldDbs.bind(this)
                })),
                this._db
            }
        }
        class J {
            constructor(e, t={}) {
                this._isRunning = !1,
                this._rerunRequested = !1,
                this._maxEntries = t.maxEntries,
                this._maxAgeSeconds = t.maxAgeSeconds,
                this._matchOptions = t.matchOptions,
                this._cacheName = e,
                this._timestampModel = new Q(e)
            }
            async expireEntries() {
                if (this._isRunning)
                    return void (this._rerunRequested = !0);
                this._isRunning = !0;
                const e = this._maxAgeSeconds ? Date.now() - 1e3 * this._maxAgeSeconds : 0
                  , t = await this._timestampModel.expireEntries(e, this._maxEntries)
                  , s = await self.caches.open(this._cacheName);
                for (const n of t)
                    await s.delete(n, this._matchOptions);
                this._isRunning = !1,
                this._rerunRequested && (this._rerunRequested = !1,
                D(this.expireEntries()))
            }
            async updateTimestamp(e) {
                await this._timestampModel.setTimestamp(e, Date.now())
            }
            async isURLExpired(e) {
                if (this._maxAgeSeconds) {
                    const t = await this._timestampModel.getTimestamp(e)
                      , s = Date.now() - 1e3 * this._maxAgeSeconds;
                    return void 0 === t || t < s
                }
                return !1
            }
            async delete() {
                this._rerunRequested = !1,
                await this._timestampModel.expireEntries(1 / 0)
            }
        }
        class z {
            constructor(e={}) {
                this.cachedResponseWillBeUsed = async({event: e, request: t, cacheName: s, cachedResponse: n})=>{
                    if (!n)
                        return null;
                    const a = this._isResponseDateFresh(n)
                      , r = this._getCacheExpiration(s);
                    D(r.expireEntries());
                    const i = r.updateTimestamp(t.url);
                    if (e)
                        try {
                            e.waitUntil(i)
                        } catch (c) {
                            0
                        }
                    return a ? n : null
                }
                ,
                this.cacheDidUpdate = async({cacheName: e, request: t})=>{
                    const s = this._getCacheExpiration(e);
                    await s.updateTimestamp(t.url),
                    await s.expireEntries()
                }
                ,
                this._config = e,
                this._maxAgeSeconds = e.maxAgeSeconds,
                this._cacheExpirations = new Map,
                e.purgeOnQuotaError && function(e) {
                    f.add(e)
                }((()=>this.deleteCacheAndMetadata()))
            }
            _getCacheExpiration(e) {
                if (e === c())
                    throw new t("expire-custom-caches-only");
                let s = this._cacheExpirations.get(e);
                return s || (s = new J(e,this._config),
                this._cacheExpirations.set(e, s)),
                s
            }
            _isResponseDateFresh(e) {
                if (!this._maxAgeSeconds)
                    return !0;
                const t = this._getDateHeaderTimestamp(e);
                if (null === t)
                    return !0;
                return t >= Date.now() - 1e3 * this._maxAgeSeconds
            }
            _getDateHeaderTimestamp(e) {
                if (!e.headers.has("date"))
                    return null;
                const t = e.headers.get("date")
                  , s = new Date(t).getTime();
                return isNaN(s) ? null : s
            }
            async deleteCacheAndMetadata() {
                for (const [e,t] of this._cacheExpirations)
                    await self.caches.delete(e),
                    await t.delete();
                this._cacheExpirations = new Map
            }
        }
        var X, Y = {
            media: !0,
            "start-url": !0,
            "now-gg-precache": !0
        };
        r({
            prefix: "now-gg",
            suffix: "",
            precache: "precache",
            runtime: "runtime",
            googleAnalytics: "analytics"
        }),
        self.__WB_DISABLE_DEV_LOGS = !0,
        skipWaiting(),
        self.addEventListener("activate", (()=>self.clients.claim())),
        self.addEventListener("activate", (e=>{
            const t = i();
            e.waitUntil((async(e,t="-precache-")=>{
                const s = (await self.caches.keys()).filter((s=>s.includes(t) && s.includes(self.registration.scope) && s !== e));
                return await Promise.all(s.map((e=>self.caches.delete(e)))),
                s
            }
            )(t).then((e=>{}
            )))
        }
        )),
        R((function(e) {
            return "https://fonts.googleapis.com" === e.url.origin
        }
        ), new q({
            cacheName: "google-fonts-stylesheets"
        })),
        R((function(e) {
            return "https://fonts.gstatic.com" === e.url.origin
        }
        ), new C({
            cacheName: "google-fonts-webfonts",
            plugins: [new class {
                constructor(e) {
                    this.cacheWillUpdate = async({response: e})=>this._cacheableResponse.isResponseCacheable(e) ? e : null,
                    this._cacheableResponse = new N(e)
                }
            }
            ({
                statuses: [0, 200]
            }), new z({
                maxAgeSeconds: 31536e3,
                maxEntries: 30
            })]
        })),
        R(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i, new q({
            cacheName: "static-image-assets",
            plugins: [new z({
                maxEntries: 64,
                maxAgeSeconds: 86400,
                purgeOnQuotaError: !0
            })]
        }), "GET"),
        R(/\.(?:js)$/i, new q({
            cacheName: "static-js-assets",
            plugins: [new z({
                maxEntries: 32,
                maxAgeSeconds: 86400,
                purgeOnQuotaError: !0
            })]
        }), "GET"),
        R(/\.(?:css|less)$/i, new q({
            cacheName: "static-style-assets",
            plugins: [new z({
                maxEntries: 32,
                maxAgeSeconds: 86400,
                purgeOnQuotaError: !0
            })]
        }), "GET"),
        self.addEventListener("install", (function(e) {
            e && e.waitUntil && e.waitUntil(caches.keys().then((function(e) {
                return Promise.all(e.filter((function(e) {
                    return Y[e]
                }
                )).map((function(e) {
                    return caches.delete(e)
                }
                )))
            }
            )))
        }
        )),
        X = function(e) {
            var t = e.url;
            try {
                return (new C).handle({
                    request: new Request(t)
                })
            } catch (s) {}
        }
        ,
        E().setCatchHandler(X);
        [{
            'revision': 'fbc14b462b9ddd972ff25fa534454b33',
            'url': '/play/_next/build-manifest.json'
        }, {
            'revision': '791902ac9fa2fea2a8056deaad33c76d',
            'url': '/play/_next/react-loadable-manifest.json'
        }, {
            'revision': '4f5ca87a6870c96ad6fb0f65adfdac9b',
            'url': '/play/_next/server/middleware-manifest.json'
        }, {
            'revision': '160ca822e3d5bbe0',
            'url': '/play/_next/static/chunks/219-160ca822e3d5bbe0.js'
        }, {
            'revision': '04e84ef0a89fe4ab',
            'url': '/play/_next/static/chunks/29107295.04e84ef0a89fe4ab.js'
        }, {
            'revision': '6df97546fd7d6b78',
            'url': '/play/_next/static/chunks/333-6df97546fd7d6b78.js'
        }, {
            'revision': '5b5851024f15ab24',
            'url': '/play/_next/static/chunks/383.5b5851024f15ab24.js'
        }, {
            'revision': '97a0061ff267b492',
            'url': '/play/_next/static/chunks/530.97a0061ff267b492.js'
        }, {
            'revision': '0c75de1e1b925eaf',
            'url': '/play/_next/static/chunks/576-0c75de1e1b925eaf.js'
        }, {
            'revision': '8cf317bce5466748',
            'url': '/play/_next/static/chunks/608.8cf317bce5466748.js'
        }, {
            'revision': '7e329d444a48a495',
            'url': '/play/_next/static/chunks/61.7e329d444a48a495.js'
        }, {
            'revision': '1337636ac02011cd',
            'url': '/play/_next/static/chunks/64-1337636ac02011cd.js'
        }, {
            'revision': '7cc0af6f3783909b',
            'url': '/play/_next/static/chunks/651.7cc0af6f3783909b.js'
        }, {
            'revision': 'be1f7fd94b6d9ad1',
            'url': '/play/_next/static/chunks/661-be1f7fd94b6d9ad1.js'
        }, {
            'revision': '1539a2a581a5ea1e',
            'url': '/play/_next/static/chunks/675-1539a2a581a5ea1e.js'
        }, {
            'revision': 'f9c0cc5bb770f3c8',
            'url': '/play/_next/static/chunks/791-f9c0cc5bb770f3c8.js'
        }, {
            'revision': '37f184a7445c0fca',
            'url': '/play/_next/static/chunks/framework-37f184a7445c0fca.js'
        }, {
            'revision': '6115e9ec8ed9fa75',
            'url': '/play/_next/static/chunks/main-6115e9ec8ed9fa75.js'
        }, {
            'revision': '3a1e61858fc33531',
            'url': '/play/_next/static/chunks/pages/_app-3a1e61858fc33531.js'
        }, {
            'revision': 'b017e65a5a29f77a',
            'url': '/play/_next/static/chunks/pages/_error-b017e65a5a29f77a.js'
        }, {
            'revision': 'f9e258f48e2986e2',
            'url': '/play/_next/static/chunks/pages/browse-f9e258f48e2986e2.js'
        }, {
            'revision': '3c3668938e77893f',
            'url': '/play/_next/static/chunks/pages/index-3c3668938e77893f.js'
        }, {
            'revision': 'c1f18b1f84c9fa99',
            'url': '/play/_next/static/chunks/pages/notFoundScreen-c1f18b1f84c9fa99.js'
        }, {
            'revision': '99442aec5788bccac9b2f0ead2afdd6b',
            'url': '/play/_next/static/chunks/polyfills-5cd94c89d3acac5f.js'
        }, {
            'revision': '8073317c1406399d',
            'url': '/play/_next/static/chunks/webpack-8073317c1406399d.js'
        }, {
            'revision': '534015f9d5bf261208ff46cfc9594856',
            'url': '/play/_next/static/cm6tAjmRaujh1UiuEjGxl/_buildManifest.js'
        }, {
            'revision': 'fb2823d66b3e778e04a3f681d0d2fb19',
            'url': '/play/_next/static/cm6tAjmRaujh1UiuEjGxl/_middlewareManifest.js'
        }, {
            'revision': 'b6652df95db52feb4daf4eca35380933',
            'url': '/play/_next/static/cm6tAjmRaujh1UiuEjGxl/_ssgManifest.js'
        }, {
            'revision': '379b1792e59d91a5',
            'url': '/play/_next/static/css/379b1792e59d91a5.css'
        }, {
            'revision': 'a9c637291e4a50ef',
            'url': '/play/_next/static/css/a9c637291e4a50ef.css'
        }, {
            'revision': 'e22fd47d094e53b1286f59c7ae4bb038',
            'url': '/play/_next/static/media/BrowserChrome.17f67783.svg'
        }, {
            'revision': '44773bb5a292b20f71e3a9f4bc19c0c2',
            'url': '/play/_next/static/media/BrowserEdge.925a6e2f.svg'
        }, {
            'revision': '484dad2771e9f3d0692173004841af71',
            'url': '/play/_next/static/media/BrowserSafari.87ac5020.svg'
        }, {
            'revision': '47f6559792b8a1ada0d511f866256619',
            'url': '/play/_next/static/media/Copy.beaded6b.svg'
        }, {
            'revision': '252b7ff6114562ca54ae3cf7468d50c0',
            'url': '/play/_next/static/media/GamepadDpadDown.9f027fed.png'
        }, {
            'revision': 'ef477ff45d73102792fac8950c450dcc',
            'url': '/play/_next/static/media/GamepadDpadLeft.6c56681a.png'
        }, {
            'revision': '0d00719869b67c4c169a92be4dae84dd',
            'url': '/play/_next/static/media/GamepadDpadRight.691db1eb.png'
        }, {
            'revision': '0b8b3eb813faddf4dfdf8f92b5793a70',
            'url': '/play/_next/static/media/GamepadDpadUp.f38ef235.png'
        }, {
            'revision': '6a02c068d1ebdaff8260ef6ba757f1e0',
            'url': '/play/_next/static/media/Glow.7036e3d4.svg'
        }, {
            'revision': 'fe028e9da73c8cd91401f5e1aea81eef',
            'url': '/play/_next/static/media/MouseLButton.8f31ba3d.png'
        }, {
            'revision': 'af813224560754ee54b8816578b04997',
            'url': '/play/_next/static/media/MouseMButton.be91e84d.png'
        }, {
            'revision': '0079e0a4515feebcd786661e14ab41e9',
            'url': '/play/_next/static/media/MouseRButton.d74dac8c.png'
        }, {
            'revision': 'af3ef47a4961648d8365eef134090a7a',
            'url': '/play/_next/static/media/alert.bfbcd90b.svg'
        }, {
            'revision': 'b0617d748d14b7b1df341b8fd2ad276a',
            'url': '/play/_next/static/media/blur-bg.07e1b3da.png'
        }, {
            'revision': '372793d95c596d2fbe099c7d0849f0dd',
            'url': '/play/_next/static/media/bulbIcon.c6ab3e9f.svg'
        }, {
            'revision': 'b6dd1ff3a48ad3377f9272a97df9b0ed',
            'url': '/play/_next/static/media/close-icon.bbd54abd.svg'
        }, {
            'revision': '152822154e80a571b54bcc4524adefce',
            'url': '/play/_next/static/media/cloud-bg-left-kink.bb491d4a.svg'
        }, {
            'revision': '596da768da8bdfab3bc5ef34d094d9b3',
            'url': '/play/_next/static/media/cloud-bg.e5a8f9fc.png'
        }, {
            'revision': '19a9d995c79edd980d9c7c46bfa8add1',
            'url': '/play/_next/static/media/cloud-hand.26dd74f2.gif'
        }, {
            'revision': '3e636a30d00ffce91c27f6df5c7c73f3',
            'url': '/play/_next/static/media/cloud-loader.47c72c1f.gif'
        }, {
            'revision': 'd784a9ee2992f9948b28ceade31d7e7d',
            'url': '/play/_next/static/media/cloudyAvatar.88e9c8c4.svg'
        }, {
            'revision': '014cc500a4fbf8ba69c729f2a49abac7',
            'url': '/play/_next/static/media/cloudyAvatarSad.e6e1ffd5.svg'
        }, {
            'revision': '09cf966e6a397c5b7ae5279a07221852',
            'url': '/play/_next/static/media/discord.2f4143da.svg'
        }, {
            'revision': '93ecbd964f14945a5c41e80e411a87e3',
            'url': '/play/_next/static/media/down-arrow.cf293721.svg'
        }, {
            'revision': 'f82648373c8963ab4ae906bf8afac01e',
            'url': '/play/_next/static/media/error-logo.0a27f02b.svg'
        }, {
            'revision': 'df43925640f8e118b7b0b2f0f2280b3e',
            'url': '/play/_next/static/media/facebook.5cb8ecec.svg'
        }, {
            'revision': '2355417e0adf5987b7568e961fdd063b',
            'url': '/play/_next/static/media/google.ad9f69b8.svg'
        }, {
            'revision': '06adc0cdc1279ffb92231044b1203929',
            'url': '/play/_next/static/media/horizontal-dark-tagline.02673421.svg'
        }, {
            'revision': '2096fcc97228457da6c9fac17a1c2438',
            'url': '/play/_next/static/media/horizontal-dark.5cea9303.svg'
        }, {
            'revision': '5abd20a3f92a0f00de8a16ca308dca33',
            'url': '/play/_next/static/media/horizontal-light-tagline.586c7736.svg'
        }, {
            'revision': 'e879547018fb26e35c597ec86c10b7f4',
            'url': '/play/_next/static/media/horizontal-light.8daf5072.svg'
        }, {
            'revision': '2d59622d2c28d9bbd7081e48f5a1f115',
            'url': '/play/_next/static/media/idleScreenLogo.26cffb49.png'
        }, {
            'revision': '2350576c395139f3c84c14c419ac8922',
            'url': '/play/_next/static/media/info-icon.c014906a.svg'
        }, {
            'revision': '25871fffbcbe136a7b6ce38296e402d2',
            'url': '/play/_next/static/media/logoArt.0ed26f8c.png'
        }, {
            'revision': '3356e2276d724263369cf2b60ab002bd',
            'url': '/play/_next/static/media/maintenance.d334ac09.svg'
        }, {
            'revision': '047cef8f583d2d62135fd99f7d707ae9',
            'url': '/play/_next/static/media/moreGamesBg.c201cb59.png'
        }, {
            'revision': '5a5ad34b0f87c3e638497350808773a2',
            'url': '/play/_next/static/media/muted.cc92657a.svg'
        }, {
            'revision': 'eb08e96dd5c15f127c9334925f3bce9d',
            'url': '/play/_next/static/media/placeholder-image.5ebe960e.jpg'
        }, {
            'revision': '5b69e55a0e092c0cfa132fbb56a33486',
            'url': '/play/_next/static/media/popup-background.6b406dcb.png'
        }, {
            'revision': 'c350f1122126d33586db0eb60ca6cb82',
            'url': '/play/_next/static/media/portalBgClipped.340dcf65.png'
        }, {
            'revision': '0e90e57d012f9369664938dbac974ad5',
            'url': '/play/_next/static/media/proxyLogo.1825607a.svg'
        }, {
            'revision': '22fcf7b026623f893e7adfa772815614',
            'url': '/play/_next/static/media/recentGamesBg.a1c8748d.png'
        }, {
            'revision': '0a34a277aaeec1c3d4e407b2647b0430',
            'url': '/play/_next/static/media/remove.b1406902.svg'
        }, {
            'revision': '4283bf92c0e0be8d08b6fb941eedae26',
            'url': '/play/_next/static/media/round-loader.ec0f091e.svg'
        }, {
            'revision': 'fe0010ed409c8344298b51be3c5bd491',
            'url': '/play/_next/static/media/unmuted.cb7db131.svg'
        }, {
            'revision': 'b1da623d7a7bbb63039a97fcd5acb463',
            'url': '/play/_next/static/media/up-arrow.4ce5e6d6.svg'
        }, {
            'revision': '27adfc1b531bcdcbcb8a6504c95fa0ab',
            'url': '/play/_next/static/media/vertical-dark-tagline.e03ab008.svg'
        }, {
            'revision': '8719dac63a868aca0bcfcb307580234b',
            'url': '/play/_next/static/media/vertical-dark.3f4e6c32.svg'
        }, {
            'revision': '2bfff978b141be6b0e0348bdce3d2e8a',
            'url': '/play/_next/static/media/vertical-light-tagline.8a77be66.svg'
        }, {
            'revision': 'ad49f3edeec86fb05eef3e4ab42c7fe7',
            'url': '/play/_next/static/media/vertical-light.9d303996.svg'
        }, {
            'revision': '73d7c7acbaf7cbd9b26e914973603199',
            'url': '/play/favicon.ico'
        }, {
            'revision': '5699c9e13c4d68eea4dcddd05b849881',
            'url': '/play/fonts.css'
        }, {
            'revision': '178dede8b82b8b03b79dcf0f3adb2f0a',
            'url': '/play/fonts/icomoon.eot'
        }, {
            'revision': 'd41834d5a8d7b601031ea2bf2b104a22',
            'url': '/play/fonts/icomoon.svg'
        }, {
            'revision': 'b0c67f43007689138131c9781feed588',
            'url': '/play/fonts/icomoon.ttf'
        }, {
            'revision': '7621c86757a91477d9f6d9f20193234f',
            'url': '/play/fonts/icomoon.woff'
        }, {
            'revision': '725a53e45e86798f36e3fcf29a84c690',
            'url': '/play/imap.js'
        }, {
            'revision': '1b1b50a3383f5815693e0df69bb1e524',
            'url': '/play/imap.wasm'
        }, {
            'revision': '63d74c46ad89118f13539f726d2c9dcf',
            'url': '/play/imap.worker.js'
        }]
    }()
}();
