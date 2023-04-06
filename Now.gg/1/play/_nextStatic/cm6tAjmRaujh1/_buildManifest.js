self.__BUILD_MANIFEST = function(s, e, a, c, t, n, r) {
    return {
        __rewrites: {
            beforeFiles: [],
            afterFiles: [{
                source: n,
                destination: n
            }, {
                source: "/play/404",
                destination: "/play/notFoundScreen"
            }, {
                source: "/play/:path*",
                destination: "/play"
            }],
            fallback: []
        },
        "/": [s, "static/chunks/661-be1f7fd94b6d9ad1.js", e, "static/chunks/pages/index-3c3668938e77893f.js"],
        "/_error": [a, s, c, r, t, "static/chunks/pages/_error-b017e65a5a29f77a.js"],
        "/browse": [a, s, c, e, "static/chunks/219-160ca822e3d5bbe0.js", t, "static/chunks/pages/browse-f9e258f48e2986e2.js"],
        "/notFoundScreen": [a, s, c, r, e, t, "static/chunks/pages/notFoundScreen-c1f18b1f84c9fa99.js"],
        sortedPages: ["/", "/_app", "/_error", "/browse", "/notFoundScreen"]
    }
}("static/chunks/675-1539a2a581a5ea1e.js", "static/chunks/333-6df97546fd7d6b78.js", "static/chunks/791-f9c0cc5bb770f3c8.js", "static/chunks/576-0c75de1e1b925eaf.js", "static/css/379b1792e59d91a5.css", "/play/browse", "static/chunks/64-1337636ac02011cd.js"),
self.__BUILD_MANIFEST_CB && self.__BUILD_MANIFEST_CB();
