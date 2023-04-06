"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[576], {
    3863: function(n, e, t) {
        t.d(e, {
            z: function() {
                return m
            }
        });
        var r, o = t(2809), i = (t(1720),
        t(9930)), a = t(5713), l = t(445), c = function(n, e) {
            return Object.defineProperty ? Object.defineProperty(n, "raw", {
                value: e
            }) : n.raw = e,
            n
        }, d = {
            primary: {
                color: a.qm.colors.white,
                disableColor: "#545257",
                backgroundColorNormal: a.qm.gradients.linearDark1,
                backgroundColorHover: a.qm.gradients.linearLight1,
                backgroundColorDisable: "linear-gradient(180deg, #CCCCCC 0%, #FFFFFF 100%)",
                boxShadowNormal: "0px 4px 0px #AB055C, 0px 10px 8px rgba(0, 0, 0, 0.15)",
                boxShadowDisable: "0px 4px 0px #7A7A7A, 0px 10px 8px rgba(0, 0, 0, 0.15)",
                borderColor: "#FFCDFF",
                borderColorDisable: "#F3F0F0"
            },
            secondary: {
                color: a.qm.colors.white,
                disableColor: "#545257",
                backgroundColorNormal: "linear-gradient(180deg, #4DC9FF 0%, #51A5C9 99.48%)",
                backgroundColorHover: "linear-gradient(180deg, #92DEFF 0%, #77D5FD 99.48%)",
                backgroundColorDisable: "linear-gradient(180deg, #CCCCCC 0%, #FFFFFF 100%)",
                boxShadowNormal: "0px 4px 0px #357A98, 0px 10px 8px rgba(0, 0, 0, 0.15)",
                boxShadowDisable: "0px 4px 0px #7A7A7A, 0px 10px 8px rgba(0, 0, 0, 0.15)",
                borderColor: "#A1E3FF",
                borderColorDisable: "#F3F0F0"
            },
            tertiary: {
                color: a.qm.colors.ascent,
                disableColor: a.qm.colors.black30,
                backgroundColorNormal: a.qm.colors.surface,
                backgroundColorHover: a.qm.colors.white,
                backgroundColorDisable: "linear-gradient(180deg, #CCCCCC 0%, #E7E7E7 100%)",
                boxShadowNormal: "0px 4px 0px #AB055C, 0px 10px 8px rgba(0, 0, 0, 0.15)",
                boxShadowDisable: "0px 4px 0px #AB055C, 0px 10px 8px rgba(0, 0, 0, 0.15)",
                borderColor: "#FFCDFF",
                borderColorDisable: "#F3F0F0",
                barColor: a.qm.colors.ascent40
            },
            google: {
                color: a.qm.colors.white,
                backgroundColorNormal: a.qm.gradients.linearDark1,
                backgroundColorHover: a.qm.gradients.linearLight1,
                boxShadowNormal: "0px 4px 0px #AB055C, 0px 10px 8px rgba(0, 0, 0, 0.15)",
                borderColor: "#FFCDFF"
            },
            facebook: {
                color: a.qm.colors.white,
                backgroundColorNormal: "linear-gradient(180deg, #2178FA 0%, #5344FF 100%)",
                backgroundColorHover: "linear-gradient(180deg, #85AFF3 0%, #317FFD 100%)",
                boxShadowNormal: "0px 4px 0px #0533AB, 0px 10px 8px rgba(0, 0, 0, 0.15)",
                borderColor: "#CDE1FF"
            },
            discord: {
                color: a.qm.colors.white,
                backgroundColorNormal: "linear-gradient(180deg, #4D21FA 0%, #6944FF 100%)",
                backgroundColorHover: "linear-gradient(180deg, #9B85F3 0%, #5A31FD 100%)",
                boxShadowNormal: "0px 4px 0px #2605AB, 0px 10px 8px rgba(0, 0, 0, 0.15)",
                borderColor: "#D7CDFF"
            }
        }, p = l.ZP.button(r || (r = c(["\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n  outline: none;\n  border-radius: 54px;\n  font-family: ", ";\n\n  ", "\n  ", "\n  ", "\n"], ["\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n  outline: none;\n  border-radius: 54px;\n  font-family: ", ";\n\n  ", "\n  ", "\n  ", "\n"])), (function(n) {
            return n.theme.fontFamily
        }
        ), (function(n) {
            var e = n.variant;
            return function(n, e) {
                void 0 === e && (e = "primary");
                var t = d[e]
                  , r = t.color
                  , o = t.backgroundColorNormal
                  , i = t.backgroundColorHover
                  , a = t.backgroundColorDisable
                  , l = t.boxShadowNormal
                  , c = t.boxShadowDisable
                  , p = t.disableColor
                  , g = t.borderColor
                  , s = t.borderColorDisable
                  , h = t.barColor;
                return "\n    ".concat("tertiary" !== e ? "\n      text-shadow: 1px 1px 1px rgba(76, 71, 137, 0.3);\n      text-transform: uppercase;\n    " : "", "\n    color: ").concat(r, ";\n    background: ").concat(o, ";\n    border: 1px solid ").concat(g, ";\n    box-shadow: ").concat(l, ";\n\n    &:hover, &:active, &:focus {\n      background: ").concat(i, ";\n    }\n    &:disabled, &:hover:disabled {\n      cursor: default;\n      color: ").concat(p, ";\n      background: ").concat(a, ";\n      box-shadow: ").concat(c, ";\n      border-color: ").concat(s, ";\n    }\n\n    &:after,\n    &:before {\n      content: '';\n      position: absolute;\n      background: ").concat(h || n.colors.white80, ";\n      top: 9%;\n      height: 4px;\n      border-radius: 10px;\n    }\n    &:after {\n      width: 5.5%;\n      right: 12.5%;\n    }\n    &:before {\n      width: 20.9%;\n      right: 21%;\n    }\n  ")
            }(n.theme, e)
        }
        ), (function(n) {
            var e = n.size;
            return function(n, e) {
                switch (e) {
                case "small":
                    return "\n      gap: 16px;\n      padding: 3px;\n      border-radius: ".concat(n.border.radius12, ";\n    ");
                case "medium":
                    return "\n      gap: 8px;\n      padding: 7.5px;\n      border-radius: ".concat(n.border.radius12, ";\n    ");
                case "large":
                    return "\n      gap: 16px;\n      padding: 12px;\n      border-radius: ".concat(n.border.radius12, ";\n    ");
                default:
                    return "\n      gap: 16px;\n      padding: 10px;\n      border-radius: ".concat(n.border.radius12, ";\n    ")
                }
            }(n.theme, e)
        }
        ), (function(n) {
            var e, t = n.rounded;
            return t ? (e = t.diameter,
            "\n  border-radius: 50%;\n  width: ".concat(e, ";\n  height: ").concat(e, ";\n  flex-direction: column;\n  gap: 0;\n  &::before, &::after {\n    display: none;\n  }\n")) : ""
        }
        )), g = t(4564), s = t(7997), h = function(n) {
            var e = n.text
              , t = void 0 === e ? "" : e
              , r = n.size;
            switch (void 0 === r ? "small" : r) {
            case "small":
                return (0,
                s.tZ)(g.IS, {
                    children: t
                });
            case "medium":
                return (0,
                s.tZ)(g.QV, {
                    children: t
                });
            case "large":
                return (0,
                s.tZ)(g.js, {
                    children: t
                });
            default:
                return (0,
                s.tZ)(g.Bb, {
                    children: t
                })
            }
        };
        function u(n, e) {
            var t = Object.keys(n);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(n);
                e && (r = r.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable
                }
                ))),
                t.push.apply(t, r)
            }
            return t
        }
        function f(n) {
            for (var e = 1; e < arguments.length; e++) {
                var t = null != arguments[e] ? arguments[e] : {};
                e % 2 ? u(Object(t), !0).forEach((function(e) {
                    (0,
                    o.Z)(n, e, t[e])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(t)) : u(Object(t)).forEach((function(e) {
                    Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(t, e))
                }
                ))
            }
            return n
        }
        var x = function(n, e) {
            var t = {};
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && e.indexOf(r) < 0 && (t[r] = n[r]);
            if (null != n && "function" === typeof Object.getOwnPropertySymbols) {
                var o = 0;
                for (r = Object.getOwnPropertySymbols(n); o < r.length; o++)
                    e.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(n, r[o]) && (t[r[o]] = n[r[o]])
            }
            return t
        }
          , m = function(n) {
            var e = n.children
              , t = n.icon
              , r = n.text
              , o = n.size
              , a = void 0 === o ? "medium" : o
              , l = x(n, ["children", "icon", "text", "size"]);
            return (0,
            s.BX)(p, f(f({}, l), {}, {
                size: a,
                children: [e, (null === t || void 0 === t ? void 0 : t.name) && (0,
                s.tZ)(i.Z, {
                    name: t.name,
                    size: t.size || 32,
                    style: t.style
                }), r && (0,
                s.tZ)(h, {
                    text: r,
                    size: a
                })]
            }))
        }
    },
    9884: function(n, e, t) {
        t.d(e, {
            Z: function() {
                return a
            }
        });
        var r = t(1405)
          , o = t(5024)
          , i = {
            horizontal_dark_tagline: (0,
            o.j)(r.Z),
            horizontal_light_tagline: (0,
            o.j)({
                src: "/play/_next/static/media/horizontal-light-tagline.586c7736.svg",
                height: 48,
                width: 181
            }),
            horizontal_dark: (0,
            o.j)({
                src: "/play/_next/static/media/horizontal-dark.5cea9303.svg",
                height: 48,
                width: 181
            }),
            horizontal_light: (0,
            o.j)({
                src: "/play/_next/static/media/horizontal-light.8daf5072.svg",
                height: 48,
                width: 181
            }),
            vertical_dark_tagline: (0,
            o.j)({
                src: "/play/_next/static/media/vertical-dark-tagline.e03ab008.svg",
                height: 89,
                width: 104
            }),
            vertical_light_tagline: (0,
            o.j)({
                src: "/play/_next/static/media/vertical-light-tagline.8a77be66.svg",
                height: 89,
                width: 104
            }),
            vertical_dark: (0,
            o.j)({
                src: "/play/_next/static/media/vertical-dark.3f4e6c32.svg",
                height: 76,
                width: 103
            }),
            vertical_light: (0,
            o.j)({
                src: "/play/_next/static/media/vertical-light.9d303996.svg",
                height: 76,
                width: 103
            })
        }
          , a = function(n, e, t) {
            var r = "".concat(e, "_").concat(n).concat(t ? "_tagline" : "");
            return i[r]
        }
    },
    251: function(n, e, t) {
        t.d(e, {
            Z: function() {
                return H
            }
        });
        var r, o, i, a, l, c, d, p, g, s, h, u = t(2809), f = t(1720), x = t(1567), m = (t(3096),
        t(4990)), b = t(4564), w = t(3863), v = t(5024), y = {
            src: "/play/_next/static/media/Glow.7036e3d4.svg",
            height: 154,
            width: 154
        }, C = t(9598), k = t(1739), P = t(445), Z = function(n, e) {
            return Object.defineProperty ? Object.defineProperty(n, "raw", {
                value: e
            }) : n.raw = e,
            n
        }, z = P.ZP.svg(r || (r = Z(["\n  width: 100%;\n  text {\n    fill: ", ";\n    font-size: max(1em, 14px);\n    font-weight: 600;\n    text-shadow: 1px 1px 1px rgba(76, 71, 137, 0.3);\n    text-transform: initial;\n  }\n"], ["\n  width: 100%;\n  text {\n    fill: ", ";\n    font-size: max(1em, 14px);\n    font-weight: 600;\n    text-shadow: 1px 1px 1px rgba(76, 71, 137, 0.3);\n    text-transform: initial;\n  }\n"])), (function(n) {
            return n.theme.colors.white
        }
        )), F = t(7997), O = function(n) {
            var e = n.text;
            return e ? (0,
            F.tZ)(z, {
                viewBox: "0 0 56 18",
                children: (0,
                F.tZ)("text", {
                    x: "50%",
                    y: "50%",
                    dominantBaseline: "middle",
                    textAnchor: "middle",
                    children: e
                })
            }) : null
        }, j = function(n, e) {
            return Object.defineProperty ? Object.defineProperty(n, "raw", {
                value: e
            }) : n.raw = e,
            n
        }, D = (0,
        P.F4)(o || (o = j(["\n0%{\n  transform:rotate(0deg);\n}\n100%{\n  transform:rotate(360deg);\n}\n"], ["\n0%{\n  transform:rotate(0deg);\n}\n100%{\n  transform:rotate(360deg);\n}\n"]))), N = P.ZP.a(i || (i = j(["\nposition:relative;\nborder-radius: 50%;\nbackground: #797091;\n&:hover {\n  &::before {\n    display: none;\n  }\n}\n&::before{\n  content: '';\n  position: absolute;\n  display: block;\n  border: 1px solid #ffffff;\n  border-radius: 50%;\n  border-top: 1px solid rgba(255, 255, 255, 0.4);\n  width: 1.875vw;\n  height: 1.875vw;\n  top: 0;\n  right: 0;\n  left: 0;\n  bottom: 0;\n  margin: auto;\n  animation : ", " 2s linear infinite;\n}\n&>span>button{\n    display: none;\n    position: absolute;\n    left: 50%;\n    top: 50%;\n    transform: translate(-50%, -50%);\n    z-Index: 20;\n    padding: 0;\n  }\n  &:hover{\n    &::before{\n        content:'';\n        position:absolute;\n        background-image: linear-gradient(89.61deg, #E95681 3.44%, #67A5C6 49.89%, #B8CD74 96.35%);\n        width:100%;\n        z-index:4;\n        border-radius:50%;\n        animation:none;\n      }\n    &>span>button{\n        display:flex;\n    }\n    .hover-overlay{\n        display:block;\n    }\n  }\n  .img-tile-container{\n    position: relative;\n    overflow: hidden;\n    border-radius: 50%;\n    height: 100%;\n  }\n"], ["\nposition:relative;\nborder-radius: 50%;\nbackground: #797091;\n&:hover {\n  &::before {\n    display: none;\n  }\n}\n&::before{\n  content: '';\n  position: absolute;\n  display: block;\n  border: 1px solid #ffffff;\n  border-radius: 50%;\n  border-top: 1px solid rgba(255, 255, 255, 0.4);\n  width: 1.875vw;\n  height: 1.875vw;\n  top: 0;\n  right: 0;\n  left: 0;\n  bottom: 0;\n  margin: auto;\n  animation : ", " 2s linear infinite;\n}\n&>span>button{\n    display: none;\n    position: absolute;\n    left: 50%;\n    top: 50%;\n    transform: translate(-50%, -50%);\n    z-Index: 20;\n    padding: 0;\n  }\n  &:hover{\n    &::before{\n        content:'';\n        position:absolute;\n        background-image: linear-gradient(89.61deg, #E95681 3.44%, #67A5C6 49.89%, #B8CD74 96.35%);\n        width:100%;\n        z-index:4;\n        border-radius:50%;\n        animation:none;\n      }\n    &>span>button{\n        display:flex;\n    }\n    .hover-overlay{\n        display:block;\n    }\n  }\n  .img-tile-container{\n    position: relative;\n    overflow: hidden;\n    border-radius: 50%;\n    height: 100%;\n  }\n"])), D), _ = P.ZP.img(a || (a = j(["\n  z-index: 5;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n"], ["\n  z-index: 5;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n"]))), A = P.ZP.div(l || (l = j(["\n\twidth: fit-content;\n\theight: fit-content;\n\tpadding: 2px;\n\tbackground-image: linear-gradient(89.61deg, #E95681 3.44%, #67A5C6 49.89%, #B8CD74 96.35%);\n\tborder-radius: 8px;\n"], ["\n\twidth: fit-content;\n\theight: fit-content;\n\tpadding: 2px;\n\tbackground-image: linear-gradient(89.61deg, #E95681 3.44%, #67A5C6 49.89%, #B8CD74 96.35%);\n\tborder-radius: 8px;\n"]))), S = P.ZP.div(c || (c = j(["\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  padding: 0px;\n  isolation: isolate;\n  font-family: ", ";\n  position: relative;\n  width: 280px;\n  background: white;\n  filter: drop-shadow(0px 8px 24px rgba(0, 0, 0, 0.08));\n\tborder-radius: ", ";\n  opacity: 0.8;\n  .game-info-content{\n    display: flex;\n    align-items:center;\n    margin-top:10px;\n    margin-left:20px;\n    margin-bottom:15px;\n    width: 100%;\n    max-width:250px;\n    .game-icon{\n        height: 62px;\n        width: 62px;\n        border-radius:4px;\n    }\n    .extra-details{\n        color: #473E5F;\n        margin-left: 12px;\n        margin-bottom: 10px;\n    }\n    .genre{\n        display: flex;\n        justify-content: space-between;\n        width: calc(100%-82px);\n    }\n  }\n\t&>video{\n\t\tborder-top-left-radius: ", ";\n\t\tborder-top-right-radius: ", ";\n\t}\n"], ["\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  padding: 0px;\n  isolation: isolate;\n  font-family: ", ";\n  position: relative;\n  width: 280px;\n  background: white;\n  filter: drop-shadow(0px 8px 24px rgba(0, 0, 0, 0.08));\n\tborder-radius: ", ";\n  opacity: 0.8;\n  .game-info-content{\n    display: flex;\n    align-items:center;\n    margin-top:10px;\n    margin-left:20px;\n    margin-bottom:15px;\n    width: 100%;\n    max-width:250px;\n    .game-icon{\n        height: 62px;\n        width: 62px;\n        border-radius:4px;\n    }\n    .extra-details{\n        color: #473E5F;\n        margin-left: 12px;\n        margin-bottom: 10px;\n    }\n    .genre{\n        display: flex;\n        justify-content: space-between;\n        width: calc(100%-82px);\n    }\n  }\n\t&>video{\n\t\tborder-top-left-radius: ", ";\n\t\tborder-top-right-radius: ", ";\n\t}\n"])), (function(n) {
            return n.theme.fontFamily
        }
        ), (function(n) {
            return n.theme.border.radius2
        }
        ), (function(n) {
            return n.theme.border.radius2
        }
        ), (function(n) {
            return n.theme.border.radius2
        }
        )), B = (0,
        P.F4)(d || (d = j(["\n  0% {\n    left: -44%;\n  top: -10%;\n  }\n  15% {\n    left: 46%;\n  top: 81%;\n  }\n  100% {\n    left: 46%;\n  top: 81%;\n  }\n"], ["\n  0% {\n    left: -44%;\n  top: -10%;\n  }\n  15% {\n    left: 46%;\n  top: 81%;\n  }\n  100% {\n    left: 46%;\n  top: 81%;\n  }\n"]))), E = P.ZP.img(p || (p = j(["\n  display:none;\n  position: absolute;\n  background: linear-gradient(185.35deg, rgba(217, 217, 217, 0) 37.12%, #F6F6F6 64.02%,\n    rgba(217, 217, 217, 0) 90.93%),\n    linear-gradient(180.16deg, rgba(255, 55, 114, 0.08) 0.14%,\n    rgba(107, 195, 242, 0.4) 53.12%,\n    rgba(216, 253, 95, 0.08) 99.86%);\n  height: 27%;\n  width: 100%;\n  rotate: -45deg;\n  left: -44%;\n  top: -10%;\n  z-index: 6;\n  opacity: 0.6;\n  animation-name: ", ";\n  animation-duration: 7s;\n  animation-iteration-count: infinite;\n  animation-timing-function: ease-in-out;\n  animation-delay: 3s;\n"], ["\n  display:none;\n  position: absolute;\n  background: linear-gradient(185.35deg, rgba(217, 217, 217, 0) 37.12%, #F6F6F6 64.02%,\n    rgba(217, 217, 217, 0) 90.93%),\n    linear-gradient(180.16deg, rgba(255, 55, 114, 0.08) 0.14%,\n    rgba(107, 195, 242, 0.4) 53.12%,\n    rgba(216, 253, 95, 0.08) 99.86%);\n  height: 27%;\n  width: 100%;\n  rotate: -45deg;\n  left: -44%;\n  top: -10%;\n  z-index: 6;\n  opacity: 0.6;\n  animation-name: ", ";\n  animation-duration: 7s;\n  animation-iteration-count: infinite;\n  animation-timing-function: ease-in-out;\n  animation-delay: 3s;\n"])), B), q = (P.ZP.div(g || (g = j(["\n  border-radius: 50%;\n  padding: 5px;\n  background-color: yellow;\n"], ["\n  border-radius: 50%;\n  padding: 5px;\n  background-color: yellow;\n"]))),
        P.ZP.div(s || (s = j(["\n  width: 100%;\n  height: 100%;\n  display: none;\n  position: absolute;\n  left: 0;\n  top: 0;\n  border-radius: 50%;\n  z-Index: 4;\n  padding: 4px;\n  background: linear-gradient(89.61deg,#E95681 3.44%,#67A5C6 49.89%,#B8CD74 96.35%),\n              linear-gradient(180deg,rgba(255,255,255,0.4) 0%,rgba(255,255,255,0) 100%);\n\n  div {\n    width: 100%;\n    height: 100%;\n    background: rgba(0, 0, 0, 0.4);\n    backdrop-filter: blur(6px);\n    border-radius: 50%;\n  }\n"], ["\n  width: 100%;\n  height: 100%;\n  display: none;\n  position: absolute;\n  left: 0;\n  top: 0;\n  border-radius: 50%;\n  z-Index: 4;\n  padding: 4px;\n  background: linear-gradient(89.61deg,#E95681 3.44%,#67A5C6 49.89%,#B8CD74 96.35%),\n              linear-gradient(180deg,rgba(255,255,255,0.4) 0%,rgba(255,255,255,0) 100%);\n\n  div {\n    width: 100%;\n    height: 100%;\n    background: rgba(0, 0, 0, 0.4);\n    backdrop-filter: blur(6px);\n    border-radius: 50%;\n  }\n"])))), I = P.ZP.div(h || (h = j(["\n  box-shadow: inset 4px 4px 8px rgba(255, 255, 255, 0.64), inset -4px -4px 8px rgba(0, 0, 0, 0.64);\n  display: flex;\n  height: 100%;\n  ", "\n  background-size: contain;\n"], ["\n  box-shadow: inset 4px 4px 8px rgba(255, 255, 255, 0.64), inset -4px -4px 8px rgba(0, 0, 0, 0.64);\n  display: flex;\n  height: 100%;\n  ", "\n  background-size: contain;\n"])), (function(n) {
            var e = n.backgroundImg;
            return " background: url(".concat(e, "); ")
        }
        ));
        function G(n, e) {
            var t = Object.keys(n);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(n);
                e && (r = r.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable
                }
                ))),
                t.push.apply(t, r)
            }
            return t
        }
        function T(n) {
            for (var e = 1; e < arguments.length; e++) {
                var t = null != arguments[e] ? arguments[e] : {};
                e % 2 ? G(Object(t), !0).forEach((function(e) {
                    (0,
                    u.Z)(n, e, t[e])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(t)) : G(Object(t)).forEach((function(e) {
                    Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(t, e))
                }
                ))
            }
            return n
        }
        var H = function(n) {
            n.index;
            var e, t = n.game, r = (n.isHome,
            n.isErrorScreen), o = void 0 !== r && r, i = (0,
            m.O)({
                placement: "left"
            }, {
                modifiers: [{
                    name: "preventOverflow",
                    options: {
                        padding: {
                            top: 60
                        }
                    }
                }]
            }), a = i.getArrowProps, l = i.getTooltipProps, c = i.setTooltipRef, d = i.setTriggerRef, p = i.visible, g = (0,
            x.$)().t;
            (0,
            f.useEffect)((function() {
                p && (0,
                C.L9)(k.S5, {
                    element: "PortalGameIcon",
                    state: "VideoStarted",
                    packageName: t.packageName
                })
            }
            ), [p]);
            var s = (null === (e = null === t || void 0 === t ? void 0 : t.playPageUrl) || void 0 === e ? void 0 : e.includes("utm_campaign")) ? null === t || void 0 === t ? void 0 : t.playPageUrl.replace("popular_games", "portal") : null === t || void 0 === t ? void 0 : t.playPageUrl.concat("?utm_campaign=portal");
            return (0,
            F.BX)(N, {
                className: "more-games",
                onClick: function() {
                    t.playPageUrl && (0,
                    C.L9)(k.S5, {
                        element: o ? "ErrorScreenGameIcon" : "PortalGameIcon",
                        action: "Clicked",
                        packageName: t.packageName
                    })
                },
                ref: d,
                href: s,
                rel: "noreferrer",
                children: [(0,
                F.BX)("div", {
                    className: "img-tile-container",
                    children: [(0,
                    F.tZ)(I, {
                        className: "img-tile",
                        backgroundImg: t.media.desktop.icon
                    }), (0,
                    F.tZ)(E, {
                        className: "shimmer-img"
                    })]
                }), (0,
                F.tZ)("span", {
                    children: (0,
                    F.tZ)(w.z, {
                        variant: "primary",
                        children: (0,
                        F.tZ)(O, {
                            text: g("play")
                        })
                    })
                }), (0,
                F.tZ)(_, {
                    alt: "glow",
                    src: (0,
                    v.j)(y)
                }), (0,
                F.tZ)(q, {
                    className: "hover-overlay",
                    children: (0,
                    F.tZ)("div", {})
                }), p && t.media.mobile.launchVideo && (o || (0,
                C.L9)(k.S5, {
                    element: "PortalGameIcon",
                    state: "VideoStarted",
                    packageName: t.packageName
                }),
                f.default.createPortal((0,
                F.BX)("div", T(T({
                    ref: c
                }, l({
                    className: "tooltip-container",
                    style: {
                        padding: 0,
                        border: "unset",
                        borderRadius: 8,
                        zIndex: 100
                    }
                })), {}, {
                    children: [(0,
                    F.tZ)(A, {
                        children: (0,
                        F.BX)(S, {
                            children: [(0,
                            F.tZ)("video", {
                                width: "280",
                                height: "157.5",
                                autoPlay: !0,
                                muted: !0,
                                style: {
                                    background: "black"
                                },
                                children: (0,
                                F.tZ)("source", {
                                    src: t.media.mobile.launchVideo,
                                    type: "video/mp4"
                                })
                            }), (0,
                            F.BX)("div", {
                                className: "game-info-content",
                                children: [(0,
                                F.tZ)("img", {
                                    className: "game-icon",
                                    src: t.media.desktop.icon,
                                    alt: "icon"
                                }), (0,
                                F.BX)("div", {
                                    className: "extra-details",
                                    children: [(0,
                                    F.tZ)(b.T5, {
                                        children: t.name
                                    }), (0,
                                    F.tZ)("div", {
                                        className: "genre",
                                        children: (0,
                                        F.tZ)(b.kk, {
                                            children: t.genre
                                        })
                                    })]
                                })]
                            })]
                        })
                    }), (0,
                    F.tZ)("div", T({}, a({
                        className: "tooltip-arrow"
                    })))]
                })), document.getElementsByTagName("body")[0]))]
            })
        }
    },
    4564: function(n, e, t) {
        t.d(e, {
            T3: function() {
                return Y
            },
            T4: function() {
                return nn
            },
            T5: function() {
                return en
            },
            T6: function() {
                return tn
            },
            kk: function() {
                return rn
            },
            mH: function() {
                return on
            },
            xv: function() {
                return an
            },
            rU: function() {
                return ln
            },
            Bb: function() {
                return pn
            },
            js: function() {
                return gn
            },
            QV: function() {
                return sn
            },
            IS: function() {
                return hn
            },
            TZ: function() {
                return fn
            },
            lU: function() {
                return mn
            },
            gd: function() {
                return wn
            },
            xP: function() {
                return vn
            },
            qm: function() {
                return Cn
            }
        });
        var r, o, i, a, l, c, d, p, g, s, h, u, f, x, m, b, w, v, y, C, k, P, Z, z, F, O, j, D, N, _, A, S, B, E, q, I, G, T = t(445), H = function(n, e) {
            return Object.defineProperty ? Object.defineProperty(n, "raw", {
                value: e
            }) : n.raw = e,
            n
        }, X = (0,
        T.iv)(r || (r = H(["\n  color: currentColor;\n  font-size: 48px;\n  line-height: 120%;\n"], ["\n  color: currentColor;\n  font-size: 48px;\n  line-height: 120%;\n"]))), U = (0,
        T.iv)(o || (o = H(["\n  color: currentColor;\n  font-size: 38px;\n  line-height: 150%;\n"], ["\n  color: currentColor;\n  font-size: 38px;\n  line-height: 150%;\n"]))), V = (0,
        T.iv)(i || (i = H(["\n  color: currentColor;\n  font-size: 26px;\n  line-height: 140%;\n"], ["\n  color: currentColor;\n  font-size: 26px;\n  line-height: 140%;\n"]))), L = (0,
        T.iv)(a || (a = H(["\n  color: currentColor;\n  font-size: 18px;\n  line-height: 150%;\n  @media screen and (max-device-width: 640px), screen and (orientation: landscape) and (max-height: 575.98px)  {\n    font-size: 16px;\n  }\n\n"], ["\n  color: currentColor;\n  font-size: 18px;\n  line-height: 150%;\n  @media screen and (max-device-width: 640px), screen and (orientation: landscape) and (max-height: 575.98px)  {\n    font-size: 16px;\n  }\n\n"]))), R = (0,
        T.iv)(l || (l = H(["\n  color: currentColor;\n  font-size: 16px;\n  line-height: 150%;\n  @media screen and (max-device-width: 640px), screen and (orientation: landscape) and (max-height: 575.98px)  {\n    font-size: 14px;\n  }\n"], ["\n  color: currentColor;\n  font-size: 16px;\n  line-height: 150%;\n  @media screen and (max-device-width: 640px), screen and (orientation: landscape) and (max-height: 575.98px)  {\n    font-size: 14px;\n  }\n"]))), Q = (0,
        T.iv)(c || (c = H(["\n  color: currentColor;\n  font-size: 14px;\n  line-height: 150%;\n  @media screen and (max-device-width: 640px), screen and (orientation: landscape) and (max-height: 575.98px)  {\n    font-size: 12px;\n  }\n"], ["\n  color: currentColor;\n  font-size: 14px;\n  line-height: 150%;\n  @media screen and (max-device-width: 640px), screen and (orientation: landscape) and (max-height: 575.98px)  {\n    font-size: 12px;\n  }\n"]))), $ = (0,
        T.iv)(d || (d = H(["\n  color: currentColor;\n  font-size: 12px;\n  line-height: 150%;\n"], ["\n  color: currentColor;\n  font-size: 12px;\n  line-height: 150%;\n"]))), J = (0,
        T.iv)(p || (p = H(["\n  color: currentColor;\n  font-size: 10px;\n  line-height: 15px;\n"], ["\n  color: currentColor;\n  font-size: 10px;\n  line-height: 15px;\n"]))), K = "normal", M = "600", W = "bold", Y = (T.ZP.h1(g || (g = H(["\n  ", "\n  font-weight: ", ";\n  color: ", ";\n  text-align: ", ";\n"], ["\n  ", "\n  font-weight: ", ";\n  color: ", ";\n  text-align: ", ";\n"])), X, (function(n) {
            return n.med ? M : n.bold ? W : K
        }
        ), (function(n) {
            return n.primary ? n.theme.colors.ascent : "inherit"
        }
        ), (function(n) {
            return n.center ? "center" : "inherit"
        }
        )),
        T.ZP.h2(s || (s = H(["\n  ", "\n  font-weight: ", ";\n  color: ", ";\n  text-align: ", ";\n\n"], ["\n  ", "\n  font-weight: ", ";\n  color: ", ";\n  text-align: ", ";\n\n"])), U, (function(n) {
            return n.med ? M : n.bold ? W : K
        }
        ), (function(n) {
            return n.primary ? n.theme.colors.ascent : "inherit"
        }
        ), (function(n) {
            return n.center ? "center" : "inherit"
        }
        )),
        T.ZP.h3(h || (h = H(["\n  ", "\n  font-weight: ", ";\n  color: ", ";\n  text-align: ", ";\n"], ["\n  ", "\n  font-weight: ", ";\n  color: ", ";\n  text-align: ", ";\n"])), V, (function(n) {
            return n.med ? M : n.bold ? W : K
        }
        ), (function(n) {
            return n.primary ? n.theme.colors.ascent : "inherit"
        }
        ), (function(n) {
            return n.center ? "center" : "inherit"
        }
        ))), nn = T.ZP.h4(u || (u = H(["\n  ", "\n  font-weight: ", ";\n  color: ", ";\n  text-align: ", ";\n"], ["\n  ", "\n  font-weight: ", ";\n  color: ", ";\n  text-align: ", ";\n"])), L, (function(n) {
            return n.med ? M : n.bold ? W : K
        }
        ), (function(n) {
            return n.primary ? n.theme.colors.ascent : n.white ? n.theme.colors.white : "inherit"
        }
        ), (function(n) {
            return n.center ? "center" : "inherit"
        }
        )), en = T.ZP.h5(f || (f = H(["\n  ", "\n  font-weight: ", ";\n  color: ", ";\n  text-align: ", ";\n"], ["\n  ", "\n  font-weight: ", ";\n  color: ", ";\n  text-align: ", ";\n"])), R, (function(n) {
            return n.med ? M : n.bold ? W : K
        }
        ), (function(n) {
            return n.primary ? n.theme.colors.ascent : n.white ? n.theme.colors.white : "inherit"
        }
        ), (function(n) {
            return n.center ? "center" : "inherit"
        }
        )), tn = T.ZP.h6(x || (x = H(["\n  ", "\n  font-weight: ", ";\n  color: ", ";\n  text-align: ", ";\n"], ["\n  ", "\n  font-weight: ", ";\n  color: ", ";\n  text-align: ", ";\n"])), Q, (function(n) {
            return n.med ? M : n.bold ? W : K
        }
        ), (function(n) {
            return n.primary ? n.theme.colors.ascent : n.white ? n.theme.colors.white : "inherit"
        }
        ), (function(n) {
            return n.center ? "center" : "inherit"
        }
        )), rn = T.ZP.p(m || (m = H(["\n  ", "\n  font-weight: ", ";\n  color: ", ";\n  text-align: ", ";\n"], ["\n  ", "\n  font-weight: ", ";\n  color: ", ";\n  text-align: ", ";\n"])), $, (function(n) {
            return n.med ? M : n.bold ? W : K
        }
        ), (function(n) {
            return n.primary ? n.theme.colors.ascent : n.white ? n.theme.colors.white : n.lightGreen ? n.theme.colors.lightGreen : n.red ? "red" : "inherit"
        }
        ), (function(n) {
            return n.center ? "center" : "inherit"
        }
        )), on = T.ZP.p(b || (b = H(["\n  ", "\n  font-weight: ", ";\n  color: ", ";\n  text-align: ", ";\n"], ["\n  ", "\n  font-weight: ", ";\n  color: ", ";\n  text-align: ", ";\n"])), J, (function(n) {
            return n.med ? M : n.bold ? W : K
        }
        ), (function(n) {
            return n.primary ? n.theme.colors.ascent : n.white ? n.theme.colors.white : n.lightGreen ? n.theme.colors.lightGreen : n.red ? "red" : "inherit"
        }
        ), (function(n) {
            return n.center ? "center" : "inherit"
        }
        )), an = T.ZP.p(w || (w = H(["\n  ", "\n  font-weight: ", ";\n  color: ", ";\n  text-align: ", ";\n"], ["\n  ", "\n  font-weight: ", ";\n  color: ", ";\n  text-align: ", ";\n"])), L, (function(n) {
            return n.med ? M : n.bold ? W : K
        }
        ), (function(n) {
            return n.primary ? n.theme.colors.ascent : "inherit"
        }
        ), (function(n) {
            return n.center ? "center" : "inherit"
        }
        )), ln = T.ZP.a(v || (v = H(["\n  ", "\n  color: ", ";\n  font-style: underline;\n  font-weight: ", ";\n  text-align: ", ";\n"], ["\n  ", "\n  color: ", ";\n  font-style: underline;\n  font-weight: ", ";\n  text-align: ", ";\n"])), Q, (function(n) {
            return n.primary ? n.theme.colors.ascent : n.white ? n.theme.colors.white : n.lightGreen ? n.theme.colors.lightGreen : n.red ? "red" : n.theme.colors.link
        }
        ), (function(n) {
            return n.med ? M : n.bold ? W : K
        }
        ), (function(n) {
            return n.center ? "center" : "inherit"
        }
        )), cn = (T.ZP.h1(y || (y = H(["\n  color: currentcolor;\n  font-size: 48px;\n  font-weight: 600;\n  line-height: 58px;\n  letter-spacing: 0px;\n  margin: 0;\n"], ["\n  color: currentcolor;\n  font-size: 48px;\n  font-weight: 600;\n  line-height: 58px;\n  letter-spacing: 0px;\n  margin: 0;\n"]))),
        "\n  color: currentcolor;\n  font-size: 36px;\n  line-height: 54px;\n  letter-spacing: 0px;\n  margin: 0;\n"), dn = (T.ZP.h2(C || (C = H(["\n  ", "\n  font-weight: 600;\n"], ["\n  ", "\n  font-weight: 600;\n"])), cn),
        T.ZP.h2(k || (k = H(["\n  ", "\n  font-weight: 400;\n"], ["\n  ", "\n  font-weight: 400;\n"])), cn),
        "\n  color: currentcolor;\n  font-size: 24px;\n  line-height: 36px;\n  letter-spacing: 0px;\n  margin: 0;\n"), pn = T.ZP.h3(P || (P = H(["\n  ", "\n  font-weight: 600;\n"], ["\n  ", "\n  font-weight: 600;\n"])), dn), gn = (T.ZP.h3(Z || (Z = H(["\n  ", "\n  font-weight: 400;\n"], ["\n  ", "\n  font-weight: 400;\n"])), dn),
        T.ZP.h3(z || (z = H(["\n  ", "\n  font-weight: 700;\n  line-height: 31px;\n  text-transform: uppercase;\n"], ["\n  ", "\n  font-weight: 700;\n  line-height: 31px;\n  text-transform: uppercase;\n"])), dn),
        T.ZP.h4(F || (F = H(["\n  color: currentcolor;\n  font-size: 16px;\n  font-weight: 600;\n  line-height: 24px;\n  letter-spacing: 0px;\n  margin: 0;\n"], ["\n  color: currentcolor;\n  font-size: 16px;\n  font-weight: 600;\n  line-height: 24px;\n  letter-spacing: 0px;\n  margin: 0;\n"])))), sn = T.ZP.h5(O || (O = H(["\n  color: currentcolor;\n  font-size: 14px;\n  font-weight: 600;\n  line-height: 21px;\n  letter-spacing: 0px;\n  margin: 0;\n"], ["\n  color: currentcolor;\n  font-size: 14px;\n  font-weight: 600;\n  line-height: 21px;\n  letter-spacing: 0px;\n  margin: 0;\n"]))), hn = T.ZP.h6(j || (j = H(["\n  color: currentcolor;\n  font-size: 12px;\n  font-weight: 600;\n  line-height: 18px;\n  letter-spacing: 0px;\n  margin: 0;\n"], ["\n  color: currentcolor;\n  font-size: 12px;\n  font-weight: 600;\n  line-height: 18px;\n  letter-spacing: 0px;\n  margin: 0;\n"]))), un = "\n  color: currentcolor;\n  font-size: 16px;\n  line-height: 24px;\n  letter-spacing: 0px;\n  margin: 0;\n", fn = T.ZP.p(D || (D = H(["\n  ", "\n  font-weight: 400;\n"], ["\n  ", "\n  font-weight: 400;\n"])), un), xn = (T.ZP.p(N || (N = H(["\n  ", "\n  font-weight: 700;\n"], ["\n  ", "\n  font-weight: 700;\n"])), un),
        "\n  color: currentcolor;\n  font-size: 14px;\n  line-height: 21px;\n  letter-spacing: 0px;\n  margin: 0;\n"), mn = T.ZP.p(_ || (_ = H(["\n  ", "\n  font-weight: 400;\n"], ["\n  ", "\n  font-weight: 400;\n"])), xn), bn = (T.ZP.p(A || (A = H(["\n  ", "\n  font-weight: 700;\n"], ["\n  ", "\n  font-weight: 700;\n"])), xn),
        T.ZP.p(S || (S = H(["\n  ", "\n  text-decoration-line: underline;\n"], ["\n  ", "\n  text-decoration-line: underline;\n"])), xn),
        "\n  color: currentcolor;\n  font-size: 12px;\n  line-height: 18px;\n  letter-spacing: 0px;\n  margin: 0;\n"), wn = T.ZP.p(B || (B = H(["\n  ", "\n  font-weight: 400;\n"], ["\n  ", "\n  font-weight: 400;\n"])), bn), vn = (T.ZP.p(E || (E = H(["\n  ", "\n  font-weight: 400;\n  text-decoration-line: underline;\n"], ["\n  ", "\n  font-weight: 400;\n  text-decoration-line: underline;\n"])), bn),
        T.ZP.p(q || (q = H(["\n  ", "\n  font-weight: 500;\n  line-height: 15px;\n  letter-spacing: 0.6px;\n"], ["\n  ", "\n  font-weight: 500;\n  line-height: 15px;\n  letter-spacing: 0.6px;\n"])), bn)), yn = "\n  color: currentcolor;\n  font-size: 10px;\n  line-height: 12px;\n  letter-spacing: 0.05em;\n  margin: 0;\n", Cn = (T.ZP.p(I || (I = H(["\n  ", "\n  font-weight: 500;\n"], ["\n  ", "\n  font-weight: 500;\n"])), yn),
        T.ZP.p(G || (G = H(["\n  ", "\n  font-weight: 600;\n  line-height: 16px;\n"], ["\n  ", "\n  font-weight: 600;\n  line-height: 16px;\n"])), yn))
    },
    1405: function(n, e) {
        e.Z = {
            src: "/play/_next/static/media/horizontal-dark-tagline.02673421.svg",
            height: 48,
            width: 181
        }
    }
}]);
//# sourceMappingURL=576-0c75de1e1b925eaf.js.map
