"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[219], {
    855: function(n, e, t) {
        var i = t(9930)
          , r = t(8041)
          , o = t(8294)
          , a = t(1720)
          , l = t(1567)
          , d = t(5617)
          , c = t(7997)
          , s = {
            support: {
                title: "Help and support",
                action: "GET_SUPPORT"
            },
            gamepad: {
                title: "Game controls",
                action: "TOGGLE_SIDEBAR",
                fontSize: "23px"
            }
        };
        e.Z = function(n) {
            var e = n.type
              , t = (0,
            a.useState)({})
              , u = t[0]
              , p = t[1]
              , f = (0,
            l.$)().t
              , h = (0,
            d.I0)()
              , g = (0,
            d.v9)((function(n) {
                return n.play.draggableState
            }
            ));
            (0,
            a.useEffect)((function() {
                p(e && s[e] ? s[e] : {})
            }
            ), [e]);
            var m = (0,
            a.useCallback)((function() {
                h({
                    type: u.action
                })
            }
            ), [u]);
            return (0,
            c.tZ)(i.Z, {
                title: f(u.title),
                onClick: "drag" === g ? function() {}
                : m,
                name: e,
                style: (0,
                r.SR)() && !o.ZP.playPageUpdate ? {
                    fontSize: "1.1vw",
                    fontWeight: "600"
                } : {
                    fontSize: u.fontSize
                }
            })
        }
    },
    1740: function(n, e, t) {
        t.d(e, {
            J: function() {
                return h
            }
        });
        var i = t(1567)
          , r = t(1720)
          , o = t(5617)
          , a = t(9555)
          , l = t(1508)
          , d = t(6971)
          , c = t(9930)
          , s = t(6817)
          , u = t(8041)
          , p = t(8294)
          , f = t(7997)
          , h = "undefined" !== typeof document ? document : null;
        e.Z = function(n) {
            var e = n.currentState
              , t = void 0 === e ? !!(h.fullscreenElement || h.webkitFullscreenElement || h.msFullscreenElement || h.mozFullScreenElement) : e
              , g = (0,
            i.$)().t
              , m = (0,
            r.useState)(t)
              , b = m[0]
              , v = m[1]
              , x = (0,
            o.v9)((function(n) {
                return n.play.listenersAttached
            }
            ))
              , w = (0,
            o.v9)((function(n) {
                return n.play.draggableState
            }
            ))
              , y = (0,
            o.v9)((function(n) {
                return n.play.f11KeysPressed
            }
            ))
              , k = (0,
            o.v9)((function(n) {
                return n.play.f11KeysProcessed
            }
            ))
              , Z = function() {
                v(!1)
            }
              , P = function() {
                var n;
                l.Z.dispatch({
                    type: d.Z.SET_FULLSCREEN,
                    payload: {
                        isFullscreen: !!(h.fullscreenElement || h.webkitFullscreenElement || h.msFullscreenElement || h.mozFullScreenElement),
                        isSensitivityPopupOpen: !1
                    }
                }),
                (null === (n = null === document || void 0 === document ? void 0 : document.body) || void 0 === n ? void 0 : n.classList) && (h.fullscreenElement || h.webkitFullscreenElement || h.msFullscreenElement || h.mozFullScreenElement ? document.body.classList.add("--fullscreen") : document.body.classList.remove("--fullscreen")),
                v(!!(h.fullscreenElement || h.webkitFullscreenElement || h.msFullscreenElement || h.mozFullScreenElement)),
                (0,
                a.sZ)(),
                (0,
                a.Ul)()
            }
              , S = (0,
            r.useCallback)((function() {
                var n = document.documentElement;
                if (b || h.fullscreenElement || h.mozFullScreenElement || h.webkitFullscreenElement || h.msFullscreenElement ? b && (h.fullscreenElement || h.mozFullScreenElement || h.webkitFullscreenElement || h.msFullscreenElement) && (0,
                s.Qg)(h) : n && (n.requestFullscreen ? n.requestFullscreen().catch((function(n) {}
                )) : n.webkitRequestFullscreen ? n.webkitRequestFullscreen() : n.msRequestFullscreen ? n.msRequestFullscreen() : n.mozRequestFullScreen && n.mozRequestFullScreen()),
                (0,
                u.Tt)())
                    return l.Z.dispatch({
                        type: d.Z.SET_FULLSCREEN,
                        payload: {
                            isFullscreen: !b
                        }
                    }),
                    v(!b),
                    void setTimeout((function() {
                        (0,
                        a.sZ)(),
                        (0,
                        a.Ul)()
                    }
                    ), 500);
                v(!b),
                (0,
                a.sZ)(),
                (0,
                a.Ul)()
            }
            ), [b]);
            (0,
            r.useEffect)((function() {
                if (!x) {
                    var n = ["", "moz", "webkit", "ms"];
                    n.forEach((function(n) {
                        document.addEventListener("".concat(n, "fullscreenchange"), P, !1)
                    }
                    )),
                    n.forEach((function(n) {
                        document.addEventListener("".concat(n, "fullscreenerror"), Z, !1)
                    }
                    )),
                    l.Z.dispatch({
                        type: d.Z.LISTENERS_ATTACHED,
                        payload: !0
                    })
                }
            }
            ), []),
            (0,
            r.useEffect)((function() {
                y !== k && (l.Z.dispatch({
                    type: d.Z.UPDATE_F11_PROCESSED
                }),
                S())
            }
            ), [y]);
            return (0,
            f.tZ)(c.Z, {
                alt: g(b ? "exitFullscreen" : "enterFullscreen"),
                title: g(b ? "exitFullscreen" : "enterFullscreen"),
                onClick: function() {
                    "drag" !== w && S()
                },
                name: b ? "exit-fullscreen" : "enter-fullscreen",
                style: (0,
                u.SR)() && !p.HS.playPageUpdate ? {
                    fontSize: "1.1vw",
                    fontWeight: "600"
                } : {}
            })
        }
    },
    7223: function(n, e, t) {
        t.d(e, {
            pV: function() {
                return I
            },
            Qr: function() {
                return S
            },
            Wb: function() {
                return C
            },
            yj: function() {
                return A
            },
            o8: function() {
                return F
            },
            eJ: function() {
                return z
            },
            ZP: function() {
                return O
            }
        });
        var i = t(9600)
          , r = t(9930)
          , o = t(8294)
          , a = t(1508)
          , l = t(9598)
          , d = t(2820)
          , c = t(6036)
          , s = t(5617)
          , u = t(1720)
          , p = t(8557)
          , f = t(855)
          , h = t(1740)
          , g = t(1567)
          , m = t(3926)
          , b = t(8041)
          , v = t(3217)
          , x = t(7997)
          , w = function() {
            var n = (0,
            g.$)().t
              , e = (0,
            s.v9)((function(n) {
                return n.play.mouseLockActive
            }
            ));
            return (0,
            x.BX)(x.HY, {
                children: [(0,
                x.tZ)(r.Z, {
                    alt: n("lockCursor"),
                    title: n("lockCursor"),
                    onClick: function(n) {
                        (0,
                        m.E4)(n.clientX, n.clientY)
                    },
                    name: e ? "lock" : "unlock",
                    style: (0,
                    b.SR)() && !o.ZP.playPageUpdate ? {
                        fontSize: "1.1vw",
                        fontWeight: "600"
                    } : {}
                }), (0,
                x.tZ)(v.F9, {
                    style: {
                        display: e ? "block" : "none"
                    }
                })]
            })
        }
          , y = t(1672)
          , k = t(4141)
          , Z = t(5685)
          , P = t(5186)
          , S = function(n) {
            var e = n.widget
              , t = (0,
            s.v9)((function(n) {
                return n.imap.guideVisible
            }
            ))
              , i = (0,
            s.v9)((function(n) {
                return n.imap.initialized
            }
            ))
              , r = (0,
            s.v9)((function(n) {
                return n.preferences.gameGuideNotificationCount
            }
            ))
              , o = (0,
            s.v9)((function(n) {
                return n.preferences.lastGameGuideNotifDate
            }
            ))
              , p = (0,
            u.useState)(!1)
              , h = p[0]
              , g = p[1]
              , m = (0,
            u.useState)(!1)
              , b = m[0]
              , w = m[1];
            return (0,
            u.useEffect)((function() {
                g(!e && r < 3 && (0,
                c.J)(o, (new Date).toDateString()))
            }
            ), []),
            (0,
            u.useEffect)((function() {}
            ), [i]),
            (0,
            u.useEffect)((function() {
                h && a.Z.dispatch({
                    type: d.Z.GAME_GUIDE_NOTIF_COUNT_UPDATE,
                    payload: {
                        gameGuideNotificationCount: r + 1,
                        lastGameGuideNotifDate: (new Date).toDateString()
                    }
                })
            }
            ), [h]),
            (0,
            u.useEffect)((function() {
                t && w(!0)
            }
            ), [t]),
            i ? (0,
            x.BX)(k.aU, {
                id: "ng-controls",
                active: t,
                onClick: function() {
                    return (0,
                    l.L9)("UserInteraction", {
                        element: "GameGuide",
                        state: "".concat(t ? "Disabled" : "Enabled"),
                        robloxExperience: a.Z.getState().play.robloxExperienceId
                    })
                },
                children: [(0,
                x.tZ)(f.Z, {
                    type: "gamepad"
                }), (0,
                x.tZ)(v.F9, {
                    style: {
                        display: !h || t || b ? "none" : "block"
                    }
                })]
            }) : null
        }
          , A = function() {
            var n = (0,
            s.v9)((function(n) {
                return n.play.mouseLockActive
            }
            ))
              , e = (0,
            s.v9)((function(n) {
                return n.play.nativeMouseEnabled
            }
            ))
              , t = a.Z.getState().preferences.legacyControls
              , i = o.ZP.features.mouseLock
              , r = a.Z.getState().play.isFullscreen;
            return e && i && !r && !t ? (0,
            x.tZ)(k.aU, {
                active: n,
                playPageUpdate: o.ZP.playPageUpdate,
                style: {
                    margin: o.ZP.features.enableAutoMouseLock ? "0" : void 0,
                    border: o.ZP.features.enableAutoMouseLock ? "none" : void 0
                },
                children: !o.ZP.features.enableAutoMouseLock && (0,
                x.tZ)(w, {})
            }) : null
        }
          , E = function(n) {
            var e = n.widget
              , t = (0,
            s.v9)((function(n) {
                return n.play.isSensitivityPopupOpen
            }
            ))
              , i = (0,
            s.v9)((function(n) {
                return n.imap.initialized
            }
            ))
              , r = (0,
            s.v9)((function(n) {
                return n.play.nativeMouseEnabled
            }
            ))
              , l = a.Z.getState().preferences.legacyControls;
            return i || r && !l ? (0,
            x.tZ)(k.aU, {
                active: t,
                playPageUpdate: o.ZP.playPageUpdate,
                className: "mouse-sensitivity",
                children: (0,
                x.tZ)(y.Z, {
                    fsWidget: e
                })
            }) : null
        }
          , z = function(n) {
            var e = n.isFromTopAction
              , t = (0,
            s.v9)((function(n) {
                return n.auth.showPreloader
            }
            ))
              , i = (0,
            s.v9)((function(n) {
                return n.auth.isLoggedIn
            }
            ))
              , r = (0,
            s.v9)((function(n) {
                return n.auth.guestFlow
            }
            ))
              , o = (0,
            s.v9)((function(n) {
                return n.auth.showLogin
            }
            ))
              , l = a.Z.getState().play.isFullscreen
              , p = !t && window.Modernizr.peerconnection && !i && (!r || o)
              , f = (0,
            s.v9)((function(n) {
                return n.preferences.loginNotificationCount
            }
            ))
              , h = (0,
            s.v9)((function(n) {
                return n.preferences.lastLoginNotifDate
            }
            ))
              , g = (0,
            u.useState)(!1)
              , m = g[0]
              , b = g[1]
              , w = (0,
            u.useState)(!1)
              , y = w[0]
              , P = w[1];
            return (0,
            u.useEffect)((function() {
                b(!!e && f < 3 && (0,
                c.J)(h, (new Date).toDateString()))
            }
            ), []),
            (0,
            u.useEffect)((function() {
                m && a.Z.dispatch({
                    type: d.Z.LOGIN_NOTIF_UPDATE,
                    payload: {
                        loginNotificationCount: f + 1,
                        lastLoginNotifDate: (new Date).toDateString()
                    }
                })
            }
            ), [m]),
            (0,
            u.useEffect)((function() {
                p && P(!0)
            }
            ), [p]),
            (0,
            x.BX)(k.aU, {
                id: "ng-profile",
                active: p,
                children: [(0,
                x.tZ)(Z.Z, {
                    hideSaveGameToolTip: l && e
                }), (0,
                x.tZ)(v.F9, {
                    style: {
                        display: !m || p || y ? "none" : "block"
                    }
                })]
            })
        }
          , F = function() {
            var n = (0,
            s.v9)((function(n) {
                return n.support.showSupport
            }
            ));
            return (0,
            x.tZ)(k.aU, {
                id: "ng-support",
                active: n,
                children: (0,
                x.tZ)(f.Z, {
                    type: "support"
                })
            })
        }
          , I = function(n) {
            var e = n.widget;
            return (0,
            x.BX)(x.HY, {
                children: [(0,
                x.BX)("div", {
                    style: {
                        display: "flex",
                        flexDirection: (0,
                        p.hu)() ? "column" : "row"
                    },
                    children: ["Html" !== o.ZP.appInfo.appType && (0,
                    x.tZ)(z, {
                        isFromTopAction: !1 === e
                    }), (0,
                    x.tZ)(F, {}), !(0,
                    p.hu)() && (0,
                    x.BX)(x.HY, {
                        children: [(0,
                        x.tZ)(E, {
                            widget: e
                        }), (0,
                        x.tZ)(A, {}), "Html" !== o.ZP.appInfo.appType && (0,
                        x.tZ)(k.Ol, {
                            id: "ng-sound",
                            children: (0,
                            x.tZ)(P.Z, {
                                showSlider: !0
                            })
                        }), (0,
                        x.tZ)(S, {
                            widget: e
                        })]
                    }), ("Html" === o.ZP.appInfo.appType || !(0,
                    p.hu)()) && (0,
                    x.tZ)(k.aU, {
                        id: "ng-fs",
                        children: (0,
                        x.tZ)(h.Z, {})
                    })]
                }), (0,
                p.hu)() && (0,
                x.BX)("div", {
                    style: {
                        display: "flex",
                        flexDirection: "column"
                    },
                    children: [(0,
                    x.tZ)(E, {
                        widget: e
                    }), (0,
                    x.tZ)(A, {}), (0,
                    x.tZ)(S, {
                        widget: e
                    }), (0,
                    x.tZ)(k.Ol, {
                        id: "ng-sound",
                        children: (0,
                        x.tZ)(P.Z, {
                            showSlider: !0
                        })
                    }), (0,
                    x.tZ)(k.aU, {
                        id: "ng-fs",
                        children: (0,
                        x.tZ)(h.Z, {})
                    })]
                })]
            })
        }
          , C = function() {
            var n = (0,
            s.v9)((function(n) {
                return n.play.isHtmlGame
            }
            ));
            return (0,
            x.tZ)(x.HY, {
                children: !n && (0,
                x.tZ)(i._, {
                    style: {
                        left: "0px",
                        top: "0px"
                    },
                    setCoordinates: !0,
                    children: (0,
                    x.BX)(k.ZW, {
                        style: {
                            color: "white"
                        },
                        children: [(0,
                        x.tZ)(I, {
                            widget: !0
                        }), (0,
                        x.tZ)(k.aU, {
                            id: "ng-drag",
                            style: {
                                cursor: "move"
                            },
                            children: (0,
                            x.tZ)(r.Z, {
                                name: "drag"
                            })
                        })]
                    })
                })
            })
        }
          , O = function() {
            return (0,
            x.tZ)(k.eX, {
                style: {
                    color: "#A198B9"
                },
                children: (0,
                x.tZ)(I, {
                    widget: !1
                })
            })
        }
    },
    3217: function(n, e, t) {
        t.d(e, {
            Co: function() {
                return c
            },
            ug: function() {
                return s
            },
            F9: function() {
                return u
            },
            ed: function() {
                return p
            }
        });
        var i, r, o, a, l = t(445), d = function(n, e) {
            return Object.defineProperty ? Object.defineProperty(n, "raw", {
                value: e
            }) : n.raw = e,
            n
        }, c = l.ZP.div(i || (i = d(["\n  background: ", ";\n  border: ", ";\n  backdrop-filter: blur(12px);\n  box-sizing: border-box;\n  border-radius: ", ";\n  left: 50%;\n  transform: translateX(-50%);\n  opacity: 1;\n  z-index: 12;\n  padding: 8px 20px 0px 20px;\n  position: fixed;\n  top: 5px;\n"], ["\n  background: ", ";\n  border: ", ";\n  backdrop-filter: blur(12px);\n  box-sizing: border-box;\n  border-radius: ", ";\n  left: 50%;\n  transform: translateX(-50%);\n  opacity: 1;\n  z-index: 12;\n  padding: 8px 20px 0px 20px;\n  position: fixed;\n  top: 5px;\n"])), (function(n) {
            return n.theme.colors.backgroundGlass
        }
        ), (function(n) {
            return n.theme.border.base
        }
        ), (function(n) {
            return n.theme.border.radius
        }
        )), s = l.ZP.p(r || (r = d(["\n  font-size: 18px;\n  color: ", ";\n"], ["\n  font-size: 18px;\n  color: ", ";\n"])), (function(n) {
            return n.theme.colors.white
        }
        )), u = l.ZP.div(o || (o = d(["\n  height: 6px;\n  width: 6px;\n  background-color: #DE5A48;\n  border-radius: 50%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 2;\n"], ["\n  height: 6px;\n  width: 6px;\n  background-color: #DE5A48;\n  border-radius: 50%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 2;\n"]))), p = l.ZP.div(a || (a = d(["\n  visibility: collapse;\n  border: 4px solid #DE5A48;\n  pointer-events: none;\n  position: fixed;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 8;\n  transition: transform 2s, top 2s, width 2s, height 2s, left 2s, visibility 0s;\n  transition-timing-function: cubic-bezier(0, .86, .01, .99);\n"], ["\n  visibility: collapse;\n  border: 4px solid #DE5A48;\n  pointer-events: none;\n  position: fixed;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 8;\n  transition: transform 2s, top 2s, width 2s, height 2s, left 2s, visibility 0s;\n  transition-timing-function: cubic-bezier(0, .86, .01, .99);\n"])))
    },
    1672: function(n, e, t) {
        t.d(e, {
            Z: function() {
                return S
            }
        });
        var i, r, o, a, l, d = t(1567), c = (t(1720),
        t(9930)), s = t(5617), u = t(6971), p = t(2820), f = t(2199), h = t(1739), g = t(8041), m = t(8294), b = t(445), v = function(n, e) {
            return Object.defineProperty ? Object.defineProperty(n, "raw", {
                value: e
            }) : n.raw = e,
            n
        }, x = b.ZP.div(i || (i = v(["\n  position: absolute;\n  top: 40px;\n  right: 0px;\n  background: ", ";\n  vertical-align: middle;\n  padding: 8px;\n  width: 200px;\n  z-index: 1;\n  justify-content: center;\n  pointer-events: all;\n  border-radius: 0px 0px 4px  4px;\n  flex-direction: column;\n"], ["\n  position: absolute;\n  top: 40px;\n  right: 0px;\n  background: ", ";\n  vertical-align: middle;\n  padding: 8px;\n  width: 200px;\n  z-index: 1;\n  justify-content: center;\n  pointer-events: all;\n  border-radius: 0px 0px 4px  4px;\n  flex-direction: column;\n"])), (function(n) {
            return n.theme.colors.base600
        }
        )), w = b.ZP.h3(r || (r = v(["\n  font-weight: 600;\n  color: ", ";\n  margin: 0;\n  text-align: left;\n"], ["\n  font-weight: 600;\n  color: ", ";\n  margin: 0;\n  text-align: left;\n"])), (function(n) {
            return n.theme.colors.white
        }
        )), y = b.ZP.div(o || (o = v(["\n  display: flex;\n  align-items: center;\n  \n  input[type=number]::-webkit-inner-spin-button, \n  input[type=number]::-webkit-outer-spin-button { \n      -webkit-appearance: none;\n      -moz-appearance: none;\n      appearance: none;\n      margin: 0; \n  }\n"], ["\n  display: flex;\n  align-items: center;\n  \n  input[type=number]::-webkit-inner-spin-button, \n  input[type=number]::-webkit-outer-spin-button { \n      -webkit-appearance: none;\n      -moz-appearance: none;\n      appearance: none;\n      margin: 0; \n  }\n"]))), k = b.ZP.input(a || (a = v(["\n  width: 142px;\n  margin-right: 8px;\n  accent-color: ", ";\n  height: 3px;\n  cursor: pointer;\n"], ["\n  width: 142px;\n  margin-right: 8px;\n  accent-color: ", ";\n  height: 3px;\n  cursor: pointer;\n"])), (function(n) {
            return n.theme.colors.ascent
        }
        )), Z = b.ZP.input(l || (l = v(["\n  width: 32px;\n  height: 24px;\n  background: ", ";\n  color: rgba(255, 255, 255, 0.8);\n  border-radius: 2px;\n  text-align: center;\n  border: 0px;\n"], ["\n  width: 32px;\n  height: 24px;\n  background: ", ";\n  color: rgba(255, 255, 255, 0.8);\n  border-radius: 2px;\n  text-align: center;\n  border: 0px;\n"])), (function(n) {
            return n.theme.colors.modal
        }
        )), P = t(7997), S = function(n) {
            var e = n.fsWidget
              , t = n.heading
              , i = void 0 === t ? "mouseSensitivity" : t
              , r = n.prepend
              , o = void 0 === r ? null : r
              , a = (0,
            d.$)().t
              , l = (0,
            s.v9)((function(n) {
                return n.preferences.mouseSensitivity || h.rL
            }
            ))
              , b = (0,
            s.v9)((function(n) {
                return n.play.isSensitivityPopupOpen
            }
            ))
              , v = (0,
            s.v9)((function(n) {
                return n.play.isFullscreen
            }
            ))
              , S = (0,
            s.I0)();
            return (0,
            P.BX)(P.HY, {
                children: [(0,
                P.tZ)(c.Z, {
                    id: "ng-sensitivity",
                    alt: a("mouseSensitivity"),
                    title: a("mouseSensitivity"),
                    onClick: function() {
                        S({
                            type: u.Z.SET_SENSITIVITY_POPUP,
                            payload: {
                                isSensitivityPopupOpen: !b
                            }
                        })
                    },
                    name: "sensi",
                    style: (0,
                    g.SR)() && !m.ZP.playPageUpdate ? {
                        fontSize: "1.1vw",
                        fontWeight: "600"
                    } : {}
                }), (0,
                P.BX)(x, {
                    style: {
                        display: b && (v && e || !v && !e) ? "inherit" : "none"
                    },
                    children: [o, (0,
                    P.tZ)(w, {
                        children: a(i)
                    }), (0,
                    P.BX)(y, {
                        children: [(0,
                        P.tZ)(k, {
                            id: "sensitivity-slider",
                            type: "range",
                            min: "1",
                            max: "10",
                            value: l,
                            step: "1",
                            onChange: function(n) {
                                var e = parseInt(n.target.value, 10);
                                S({
                                    type: p.Z.MOUSE_SENSITIVITY,
                                    payload: {
                                        mouseSensitivity: e
                                    }
                                }),
                                f.ZP.updateCfgWithSensitivity()
                            }
                        }), (0,
                        P.tZ)(Z, {
                            id: "sensitivity-box",
                            type: "number",
                            min: "1",
                            max: "10",
                            step: "1",
                            value: l,
                            onChange: function(n) {
                                var e = parseInt(n.target.value, 10);
                                e < 1 && (e = 1),
                                e > 10 && (e = 10),
                                S({
                                    type: p.Z.MOUSE_SENSITIVITY,
                                    payload: {
                                        mouseSensitivity: e
                                    }
                                }),
                                f.ZP.updateCfgWithSensitivity()
                            },
                            onFocus: function() {
                                S({
                                    type: u.Z.UPDATE_TEXTFIELD_FOCUS,
                                    payload: {
                                        uiTextfieldInFocus: !0
                                    }
                                })
                            },
                            onBlur: function() {
                                S({
                                    type: u.Z.UPDATE_TEXTFIELD_FOCUS,
                                    payload: {
                                        uiTextfieldInFocus: !1
                                    }
                                })
                            }
                        })]
                    })]
                })]
            })
        }
    },
    4141: function(n, e, t) {
        t.d(e, {
            eX: function() {
                return h
            },
            aU: function() {
                return g
            },
            UB: function() {
                return m
            },
            Hq: function() {
                return b
            },
            ZW: function() {
                return v
            },
            Ol: function() {
                return x
            }
        });
        var i, r, o, a, l, d, c, s, u, p = t(445), f = function(n, e) {
            return Object.defineProperty ? Object.defineProperty(n, "raw", {
                value: e
            }) : n.raw = e,
            n
        }, h = p.ZP.div(i || (i = f(["\n    display: flex;\n    align-items: center;\n    z-index: 2;\n    padding: 0;\n    margin: 0;\n"], ["\n    display: flex;\n    align-items: center;\n    z-index: 2;\n    padding: 0;\n    margin: 0;\n"]))), g = p.ZP.button(r || (r = f(["\n    display: flex;\n    align-items: center;\n    list-style: none;\n    cursor: pointer;\n    position: relative;\n    border-radius: ", ";\n    outline: none;\n    padding: 0;\n    color: inherit;\n    background: none;\n    border: 1px solid ", ";\n    margin: 2px 6px;\n   \n    i {\n        padding: 6px;\n    }\n    &:hover {\n        background: ", ";\n    }\n    ", "\n"], ["\n    display: flex;\n    align-items: center;\n    list-style: none;\n    cursor: pointer;\n    position: relative;\n    border-radius: ", ";\n    outline: none;\n    padding: 0;\n    color: inherit;\n    background: none;\n    border: 1px solid ", ";\n    margin: 2px 6px;\n   \n    i {\n        padding: 6px;\n    }\n    &:hover {\n        background: ", ";\n    }\n    ", "\n"])), (function(n) {
            return n.theme.border.radius
        }
        ), (function(n) {
            var e = n.theme
              , t = n.active
              , i = n.playPageUpdate;
            return t && !i ? e.colors.ascent : "transparent"
        }
        ), (function(n) {
            var e, t = n.theme, i = n.active, r = n.playPageUpdate;
            return i && r ? "" : null === (e = t.colors) || void 0 === e ? void 0 : e.base600
        }
        ), (function(n) {
            var e = n.active
              , t = n.playPageUpdate;
            return e && t ? "&:after{\n    content: '';\n    position: absolute;\n    top: 0;\n    right: 0;\n    left: 0;\n    background: linear-gradient(270deg, #7B4CFF 0%, #0EA4C5 99.48%);\n    z-index: -1;\n    border-radius: 8px;\n    bottom: 0;\n}" : ""
        }
        )), m = p.ZP.li(o || (o = f(["\n    display: flex;\n    list-style: none;\n    padding: 6px;\n    cursor: pointer;\n    position: relative;\n    justify-content: center;\n    border-radius: ", ";\n    transition: all .2s ease-in-out,top 0s ease-in-out,left 0s ease-in-out;\n    color: rgb(161, 152, 185);\n\n    &:hover {\n        background: ", ";\n    }\n"], ["\n    display: flex;\n    list-style: none;\n    padding: 6px;\n    cursor: pointer;\n    position: relative;\n    justify-content: center;\n    border-radius: ", ";\n    transition: all .2s ease-in-out,top 0s ease-in-out,left 0s ease-in-out;\n    color: rgb(161, 152, 185);\n\n    &:hover {\n        background: ", ";\n    }\n"])), (function(n) {
            var e;
            return null === (e = n.theme.border) || void 0 === e ? void 0 : e.radius
        }
        ), (function(n) {
            var e;
            return null === (e = n.theme.colors) || void 0 === e ? void 0 : e.base600
        }
        )), b = p.ZP.button(a || (a = f(["\n    background-color: ", ";\n    border-color: ", ";\n    padding: 0;\n"], ["\n    background-color: ", ";\n    border-color: ", ";\n    padding: 0;\n"])), (function(n) {
            var e;
            return null === (e = n.theme.colors) || void 0 === e ? void 0 : e.transparent
        }
        ), (function(n) {
            var e;
            return null === (e = n.theme.colors) || void 0 === e ? void 0 : e.transparent
        }
        )), v = p.ZP.div(l || (l = f(["\n    display: flex;\n    flex-direction: row;\n    background: linear-gradient(\n        180deg,\n        rgba(11, 2, 35, 0.24) 0%,\n        rgba(11, 2, 35, 0.16) 100%),\n        rgba(255, 255, 255, 0.15\n    );\n    backdrop-filter: blur(24px);\n    border: 1px solid hsla(0, 0%, 100%, .2);\n    border-radius: 12px;\n    padding: 0 10px;\n    margin: 0;\n\n    > ", " > span {\n        filter: brightness(100);\n    }\n    &:hover {\n        background: linear-gradient(rgba(11, 2, 35, 0.48) 0%, rgba(11, 2, 35, 0.32) 100%), rgba(255, 255, 255, 0.30);\n    }\n    li:hover {\n        background: hsla(0,0%,100%,.1);\n    }\n    .dragging & {\n        pointer-events: none;\n    }\n\n    &.fixed {\n        width: fit-content;\n        position: absolute;\n        right: 10px;\n        top: 10px;\n    }\n"], ["\n    display: flex;\n    flex-direction: row;\n    background: linear-gradient(\n        180deg,\n        rgba(11, 2, 35, 0.24) 0%,\n        rgba(11, 2, 35, 0.16) 100%),\n        rgba(255, 255, 255, 0.15\n    );\n    backdrop-filter: blur(24px);\n    border: 1px solid hsla(0, 0%, 100%, .2);\n    border-radius: 12px;\n    padding: 0 10px;\n    margin: 0;\n\n    > ", " > span {\n        filter: brightness(100);\n    }\n    &:hover {\n        background: linear-gradient(rgba(11, 2, 35, 0.48) 0%, rgba(11, 2, 35, 0.32) 100%), rgba(255, 255, 255, 0.30);\n    }\n    li:hover {\n        background: hsla(0,0%,100%,.1);\n    }\n    .dragging & {\n        pointer-events: none;\n    }\n\n    &.fixed {\n        width: fit-content;\n        position: absolute;\n        right: 10px;\n        top: 10px;\n    }\n"])), g), x = (p.ZP.ul(s || (s = f(["\n    flex-direction: column;\n    display: block;\n    padding: 8px;\n    transition: all .2s ease-in-out,top 0s ease-in-out,left 0s ease-in-out;\n    border-radius: 8px 8px 100px 100px;\n\n\n    ", "\n\n    ", "\n"], ["\n    flex-direction: column;\n    display: block;\n    padding: 8px;\n    transition: all .2s ease-in-out,top 0s ease-in-out,left 0s ease-in-out;\n    border-radius: 8px 8px 100px 100px;\n\n\n    ", "\n\n    ", "\n"])), (function(n) {
            return "show" === (null === n || void 0 === n ? void 0 : n.display) && (0,
            p.iv)(d || (d = f(["\n        background: ", ";\n        pointer-events: all\n    "], ["\n        background: ", ";\n        pointer-events: all\n    "])), (function(n) {
                var e;
                return null === (e = n.theme.colors) || void 0 === e ? void 0 : e.base800
            }
            ))
        }
        ), (function(n) {
            return "hide" === (null === n || void 0 === n ? void 0 : n.display) && (0,
            p.iv)(c || (c = f(["\n        gap: 16px;\n        background: rgba(0, 0, 0, 0.7);\n        border: ", ";\n    "], ["\n        gap: 16px;\n        background: rgba(0, 0, 0, 0.7);\n        border: ", ";\n    "])), (function(n) {
                var e;
                return null === (e = n.theme.border) || void 0 === e ? void 0 : e.base
            }
            ))
        }
        )),
        (0,
        p.ZP)(g)(u || (u = f(['\n    cursor: pointer;\n    &:hover div {\n        display: flex;\n    }\n    &:hover::before {\n        content: "";\n        background: ', ";\n        height: 200px;\n        @-moz-document url-prefix() {\n            height: 230px;\n        }\n        position: absolute;\n        z-index: -1;\n        width: 46px;\n        top: -1px;\n        left: -6px;\n        border-radius: ", ";\n}"], ['\n    cursor: pointer;\n    &:hover div {\n        display: flex;\n    }\n    &:hover::before {\n        content: "";\n        background: ', ";\n        height: 200px;\n        @-moz-document url-prefix() {\n            height: 230px;\n        }\n        position: absolute;\n        z-index: -1;\n        width: 46px;\n        top: -1px;\n        left: -6px;\n        border-radius: ", ";\n}"])), (function(n) {
            return n.theme.colors.base600
        }
        ), (function(n) {
            return n.theme.border.radius
        }
        )))
    },
    5685: function(n, e, t) {
        var i = t(3520)
          , r = t(6971)
          , o = t(1508)
          , a = t(1720)
          , l = t(5617)
          , d = t(4266)
          , c = t(8294)
          , s = t(1567)
          , u = t(8309)
          , p = t(7997);
        e.Z = function(n) {
            n.hideSaveGameToolTip;
            var e = (0,
            l.I0)()
              , t = (0,
            l.v9)((function(n) {
                return n.auth.isLoggedIn
            }
            ))
              , f = (0,
            l.v9)((function(n) {
                return n.auth.guestFlow
            }
            ))
              , h = (0,
            a.useState)(null)
              , g = h[0]
              , m = h[1]
              , b = (0,
            l.v9)((function(n) {
                return n.play.draggableState
            }
            ));
            (0,
            s.$)().t;
            (0,
            a.useEffect)((function() {
                var n = t ? (0,
                u.et)() : null;
                n && m(n),
                !t && (0,
                c.Us)() && o.Z.dispatch({
                    type: r.Z.UPDATE_LOGIN_TOOLTIP,
                    payload: {
                        isTooltipVisible: !0
                    }
                })
            }
            ), []);
            var v = function() {
                "drag" !== b && ((0,
                c.Sr)(),
                o.Z.dispatch({
                    type: r.Z.UPDATE_LOGIN_TOOLTIP,
                    payload: {
                        isTooltipVisible: !1
                    }
                }),
                o.Z.dispatch({
                    type: r.Z.SET_SENSITIVITY_POPUP,
                    payload: {
                        isSensitivityPopupOpen: !1
                    }
                }),
                e(f && !t ? {
                    type: d.Z.TOGGLE_LOGIN,
                    payload: {
                        showLogin: !0
                    }
                } : {
                    type: r.Z.MODAL_STATUS,
                    payload: {
                        showAboutUs: !0
                    }
                }))
            };
            return (0,
            p.tZ)(i.Z, {
                isLoggedIn: t,
                user: g,
                click: function() {
                    return v()
                }
            })
        }
    },
    5186: function(n, e, t) {
        t.d(e, {
            Z: function() {
                return A
            }
        });
        var i, r, o = t(1720), a = t(5617), l = t(3279), d = t.n(l), c = t(1508), s = t(6296), u = t(1567), p = t(1739), f = t(4803), h = t(9930), g = t(6971), m = t(8041), b = t(8294), v = t(9165), x = t(445), w = function(n, e) {
            return Object.defineProperty ? Object.defineProperty(n, "raw", {
                value: e
            }) : n.raw = e,
            n
        }, y = x.ZP.div(i || (i = w(["\n    display: none;\n    position: absolute;\n    top: 97px;\n    right: -60px;\n    @-moz-document url-prefix() {\n        right: -76px;\n        top: 110px;\n    }\n    z-index: 1;\n    padding: 12px;\n    transform: rotate(-90deg);\n"], ["\n    display: none;\n    position: absolute;\n    top: 97px;\n    right: -60px;\n    @-moz-document url-prefix() {\n        right: -76px;\n        top: 110px;\n    }\n    z-index: 1;\n    padding: 12px;\n    transform: rotate(-90deg);\n"]))), k = x.ZP.input(r || (r = w(["\n    accent-color:  ", ";\n    height: 3px;\n    @-moz-document url-prefix() {\n        height: 8px;\n    }\n    cursor: pointer;\n"], ["\n    accent-color:  ", ";\n    height: 3px;\n    @-moz-document url-prefix() {\n        height: 8px;\n    }\n    cursor: pointer;\n"])), (function(n) {
            return n.theme.colors.ascent
        }
        )), Z = t(7997), P = function(n, e, t, i) {
            return new (t || (t = Promise))((function(r, o) {
                function a(n) {
                    try {
                        d(i.next(n))
                    } catch (e) {
                        o(e)
                    }
                }
                function l(n) {
                    try {
                        d(i.throw(n))
                    } catch (e) {
                        o(e)
                    }
                }
                function d(n) {
                    var e;
                    n.done ? r(n.value) : (e = n.value,
                    e instanceof t ? e : new t((function(n) {
                        n(e)
                    }
                    ))).then(a, l)
                }
                d((i = i.apply(n, e || [])).next())
            }
            ))
        }, S = function(n, e) {
            var t, i, r, o, a = {
                label: 0,
                sent: function() {
                    if (1 & r[0])
                        throw r[1];
                    return r[1]
                },
                trys: [],
                ops: []
            };
            return o = {
                next: l(0),
                throw: l(1),
                return: l(2)
            },
            "function" === typeof Symbol && (o[Symbol.iterator] = function() {
                return this
            }
            ),
            o;
            function l(o) {
                return function(l) {
                    return function(o) {
                        if (t)
                            throw new TypeError("Generator is already executing.");
                        for (; a; )
                            try {
                                if (t = 1,
                                i && (r = 2 & o[0] ? i.return : o[0] ? i.throw || ((r = i.return) && r.call(i),
                                0) : i.next) && !(r = r.call(i, o[1])).done)
                                    return r;
                                switch (i = 0,
                                r && (o = [2 & o[0], r.value]),
                                o[0]) {
                                case 0:
                                case 1:
                                    r = o;
                                    break;
                                case 4:
                                    return a.label++,
                                    {
                                        value: o[1],
                                        done: !1
                                    };
                                case 5:
                                    a.label++,
                                    i = o[1],
                                    o = [0];
                                    continue;
                                case 7:
                                    o = a.ops.pop(),
                                    a.trys.pop();
                                    continue;
                                default:
                                    if (!(r = (r = a.trys).length > 0 && r[r.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                        a = 0;
                                        continue
                                    }
                                    if (3 === o[0] && (!r || o[1] > r[0] && o[1] < r[3])) {
                                        a.label = o[1];
                                        break
                                    }
                                    if (6 === o[0] && a.label < r[1]) {
                                        a.label = r[1],
                                        r = o;
                                        break
                                    }
                                    if (r && a.label < r[2]) {
                                        a.label = r[2],
                                        a.ops.push(o);
                                        break
                                    }
                                    r[2] && a.ops.pop(),
                                    a.trys.pop();
                                    continue
                                }
                                o = e.call(n, a)
                            } catch (l) {
                                o = [6, l],
                                i = 0
                            } finally {
                                t = r = 0
                            }
                        if (5 & o[0])
                            throw o[1];
                        return {
                            value: o[0] ? o[1] : void 0,
                            done: !0
                        }
                    }([o, l])
                }
            }
        }, A = function(n) {
            var e = n.showSlider
              , t = (0,
            u.$)().t
              , i = (0,
            o.useRef)(null)
              , r = (0,
            a.v9)((function(n) {
                return n.preferences.volume
            }
            ))
              , l = (0,
            a.v9)((function(n) {
                return n.play.muted
            }
            ))
              , x = (0,
            a.I0)();
            (0,
            o.useEffect)((function() {
                i.current && (i.current.value = (10 * r).toString())
            }
            ), [r]);
            return (0,
            Z.BX)(Z.HY, {
                children: [(0,
                Z.tZ)(h.Z, {
                    id: "ng-vol",
                    style: (0,
                    m.SR)() && !b.ZP.playPageUpdate ? {
                        fontSize: "1.1vw",
                        fontWeight: "600"
                    } : {},
                    alt: t(l ? "mutedSoundIcon" : "soundIcon"),
                    onClick: function() {
                        return P(void 0, void 0, void 0, (function() {
                            var n, t, i;
                            return S(this, (function(r) {
                                switch (r.label) {
                                case 0:
                                    return l ? e ? [3, 1] : (n = c.Z.getState(),
                                    (t = n.play.videoRef) && t.current && (t.current.muted = !1),
                                    i = n.preferences.volume,
                                    x((0,
                                    v.i)({
                                        volume: i
                                    })),
                                    c.Z.dispatch({
                                        type: g.Z.MUTE,
                                        payload: {
                                            muted: !1
                                        }
                                    }),
                                    (0,
                                    f.f)(p.vK.audio.unmute),
                                    [3, 3]) : [3, 4];
                                case 1:
                                    return [4, (0,
                                    s.ZP)()];
                                case 2:
                                    r.sent(),
                                    r.label = 3;
                                case 3:
                                    return [3, 5];
                                case 4:
                                    (0,
                                    s.LR)(),
                                    r.label = 5;
                                case 5:
                                    return [2]
                                }
                            }
                            ))
                        }
                        ))
                    },
                    name: l ? "mute-icon" : "sound-icon"
                }), e && (0,
                Z.tZ)(y, {
                    id: "volume-slider",
                    children: (0,
                    Z.tZ)(k, {
                        onChange: d()((function(n) {
                            if (i.current) {
                                i.current.value = n.target.value;
                                var e = parseInt(n.target.value, 10)
                                  , t = e / 10
                                  , r = e < 1;
                                !r && l && (0,
                                f.f)(p.vK.audio.unmute),
                                r && !l && (0,
                                f.f)(p.vK.audio.mute),
                                x({
                                    type: g.Z.MUTE,
                                    payload: {
                                        muted: r
                                    }
                                }),
                                x((0,
                                v.i)({
                                    volume: t
                                }))
                            }
                        }
                        ), 250),
                        ref: i,
                        type: "range",
                        min: 0,
                        max: 10,
                        id: "ng-vol"
                    })
                })]
            })
        }
    },
    9662: function(n, e, t) {
        t.d(e, {
            qX: function() {
                return E
            },
            ly: function() {
                return z
            },
            $i: function() {
                return F
            },
            Ho: function() {
                return I
            }
        });
        var i, r, o, a, l, d, c, s, u, p, f, h, g, m, b, v, x, w = t(445), y = function(n, e) {
            return Object.defineProperty ? Object.defineProperty(n, "raw", {
                value: e
            }) : n.raw = e,
            n
        }, k = (0,
        w.F4)(i || (i = y(["\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n"], ["\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n"]))), Z = (0,
        w.F4)(r || (r = y(["\n  0% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n  }\n"], ["\n  0% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n  }\n"]))), P = (0,
        w.F4)(o || (o = y(["\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n"], ["\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n"]))), S = (0,
        w.F4)(a || (a = y(["\n  0% {\n    opacity: 0;\n    transform: translateY(20px);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0);\n  }\n"], ["\n  0% {\n    opacity: 0;\n    transform: translateY(20px);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0);\n  }\n"]))), A = (0,
        w.F4)(l || (l = y(["\n  0% {\n    opacity: 1;\n    transform: translateY(0);\n  }\n  100% {\n    opacity: 0;\n    transform: translateY(20px);\n  }\n"], ["\n  0% {\n    opacity: 1;\n    transform: translateY(0);\n  }\n  100% {\n    opacity: 0;\n    transform: translateY(20px);\n  }\n"]))), E = w.ZP.div(d || (d = y(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  ", "\n  width: 100vw;\n  height: 100vh;\n  z-index: 14;\n  pointer-events: all;\n  animation: ", " 0.3s ease-out;\n"], ["\n  position: absolute;\n  top: 0;\n  left: 0;\n  ", "\n  width: 100vw;\n  height: 100vh;\n  z-index: 14;\n  pointer-events: all;\n  animation: ", " 0.3s ease-out;\n"])), (function(n) {
            return n.showBackground ? "\n    background-color: 'rgba(0,0,0,0.7)'};\n  " : ""
        }
        ), P), z = w.ZP.div(u || (u = y(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  overflow: hidden;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 99;\n\n  ", "\n  background-color: rgba(0, 0, 0, 0.1);\n\n  @media screen and (max-width: 600px){\n    background-position: center;\n    height: 100vw;\n    top: 0;\n  }\n\n  ", "\n"], ["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  overflow: hidden;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 99;\n\n  ", "\n  background-color: rgba(0, 0, 0, 0.1);\n\n  @media screen and (max-width: 600px){\n    background-position: center;\n    height: 100vw;\n    top: 0;\n  }\n\n  ", "\n"])), (function(n) {
            var e = n.banner;
            return e ? "background-image: linear-gradient(rgba(0,0,0,.6), rgba(0,0,0,.6)), url('".concat(e, "');") : ""
        }
        ), (function(n) {
            return n.toggle ? (0,
            w.iv)(c || (c = y(["\n    animation: ", " 0.3s ease-out;\n  "], ["\n    animation: ", " 0.3s ease-out;\n  "])), P) : (0,
            w.iv)(s || (s = y(["\n    animation: ", " 0.3s ease-out;\n    animation-delay: 0.3s;\n  "], ["\n    animation: ", " 0.3s ease-out;\n    animation-delay: 0.3s;\n  "])), Z)
        }
        )), F = w.ZP.div(h || (h = y(["\n  display: inline-flex;\n  flex-direction: column;\n  align-items: center;\n  background: rgba(255, 255, 255, 0.1);\n  border: 1px solid rgba(255, 255, 255, 0.2);\n  backdrop-filter: blur(24px);\n  padding: ", ";\n  border-radius: ", ";\n  color: ", ";\n  font-size: 18px;\n  line-height: 150%;\n  width: 448px;\n  max-width: 100%;\n\n  > h5 {\n    font-size: 16px;\n    margin: 0;\n  }\n\n  > p {\n    margin: 8px 16px 16px;\n  }\n\n  > img {\n    width: 65px;\n    border-radius: 6px;\n  }\n\n  ", "\n"], ["\n  display: inline-flex;\n  flex-direction: column;\n  align-items: center;\n  background: rgba(255, 255, 255, 0.1);\n  border: 1px solid rgba(255, 255, 255, 0.2);\n  backdrop-filter: blur(24px);\n  padding: ", ";\n  border-radius: ", ";\n  color: ", ";\n  font-size: 18px;\n  line-height: 150%;\n  width: 448px;\n  max-width: 100%;\n\n  > h5 {\n    font-size: 16px;\n    margin: 0;\n  }\n\n  > p {\n    margin: 8px 16px 16px;\n  }\n\n  > img {\n    width: 65px;\n    border-radius: 6px;\n  }\n\n  ", "\n"])), (function(n) {
            return n.theme.spacing.base6
        }
        ), (function(n) {
            return n.theme.border.radius2
        }
        ), (function(n) {
            return n.theme.colors.white
        }
        ), (function(n) {
            return n.toggle ? (0,
            w.iv)(p || (p = y(["\n    animation: ", " 0.3s ease-out;\n  "], ["\n    animation: ", " 0.3s ease-out;\n  "])), S) : (0,
            w.iv)(f || (f = y(["\n    animation: ", " 0.3s ease-out;\n  "], ["\n    animation: ", " 0.3s ease-out;\n  "])), A)
        }
        )), I = w.ZP.p(g || (g = y(["\n  width: 28px;\n  height: 28px;\n  border-radius: 100%;\n  border: 2px solid ", ";\n  border-bottom-color: rgba(255, 255, 255, 0.4);\n  transition: all 1s ease-in-out;\n  animation-name: ", ";\n  animation-duration: 1s;\n  animation-iteration-count: infinite;\n  animation-timing-function: linear;\n  margin-bottom: ", ";\n"], ["\n  width: 28px;\n  height: 28px;\n  border-radius: 100%;\n  border: 2px solid ", ";\n  border-bottom-color: rgba(255, 255, 255, 0.4);\n  transition: all 1s ease-in-out;\n  animation-name: ", ";\n  animation-duration: 1s;\n  animation-iteration-count: infinite;\n  animation-timing-function: linear;\n  margin-bottom: ", ";\n"])), (function(n) {
            return n.theme.colors.white
        }
        ), k, (function(n) {
            return n.theme.spacing.base6
        }
        ));
        w.ZP.div(m || (m = y(["\n  position: absolute;\n  left: 0;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  background-color: ", ";\n"], ["\n  position: absolute;\n  left: 0;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  background-color: ", ";\n"])), (function(n) {
            return n.theme.colors.black
        }
        )),
        w.ZP.div(b || (b = y(["\n  text-align: center;\n  width: 700px;\n  max-width: 90%;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  position: absolute;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  p {\n    font-weight: 600;\n    font-size: 24px;\n    line-height: 150%;\n    color: ", ";\n    margin-bottom: 32px;\n    padding: 0 50px;\n    .mobile & {\n      padding: 0;\n      .rotate-screen & {\n        padding: 0 10px;\n      }\n    }\n  }\n"], ["\n  text-align: center;\n  width: 700px;\n  max-width: 90%;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  position: absolute;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  p {\n    font-weight: 600;\n    font-size: 24px;\n    line-height: 150%;\n    color: ", ";\n    margin-bottom: 32px;\n    padding: 0 50px;\n    .mobile & {\n      padding: 0;\n      .rotate-screen & {\n        padding: 0 10px;\n      }\n    }\n  }\n"])), (function(n) {
            var e;
            return null === (e = n.theme.colors) || void 0 === e ? void 0 : e.white
        }
        )),
        w.ZP.div(v || (v = y(["\n  width: 256px;\n  background: ", ";\n  box-shadow: 0px 8px 16px ", ";\n  border-radius: 8px;\n  padding: 12px;\n  font-weight: 600;\n  font-size: 16px;\n  line-height: 150%;\n  color: ", ";\n  cursor: pointer;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  .playImg {\n    margin-right: 8px;\n  }\n"], ["\n  width: 256px;\n  background: ", ";\n  box-shadow: 0px 8px 16px ", ";\n  border-radius: 8px;\n  padding: 12px;\n  font-weight: 600;\n  font-size: 16px;\n  line-height: 150%;\n  color: ", ";\n  cursor: pointer;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  .playImg {\n    margin-right: 8px;\n  }\n"])), (function(n) {
            var e;
            return null === (e = n.theme.colors) || void 0 === e ? void 0 : e.link
        }
        ), (function(n) {
            var e;
            return null === (e = n.theme.colors) || void 0 === e ? void 0 : e.black10
        }
        ), (function(n) {
            var e;
            return null === (e = n.theme.colors) || void 0 === e ? void 0 : e.white
        }
        )),
        w.ZP.div(x || (x = y(["\n  position: absolute;\n  top: 50px;\n  left: 0;\n  width: 100%;\n  height: calc(100% - 50px);\n  display: flex;\n  overflow: hidden;\n  justify-content: center;\n  align-items: center;\n  .rotate-screen &, .portrait-mode & {\n    top: 0px;\n    height: 100%;\n  }\n"], ["\n  position: absolute;\n  top: 50px;\n  left: 0;\n  width: 100%;\n  height: calc(100% - 50px);\n  display: flex;\n  overflow: hidden;\n  justify-content: center;\n  align-items: center;\n  .rotate-screen &, .portrait-mode & {\n    top: 0px;\n    height: 100%;\n  }\n"])))
    },
    3520: function(n, e, t) {
        t.d(e, {
            Z: function() {
                return u
            }
        });
        var i, r = t(9930), o = t(8041), a = t(8294), l = function(n, e) {
            return Object.defineProperty ? Object.defineProperty(n, "raw", {
                value: e
            }) : n.raw = e,
            n
        }, d = t(445).ZP.div(i || (i = l(["\n    display: flex;\n    width: ", ";\n    height: ", ";\n    border-radius: 50%;\n    overflow: hidden;\n    flex: ", ";\n    background: ", ";\n    position: relative;\n    z-index: 1;\n    &:before {\n      content: attr(data-char);\n      position: absolute;\n      text-align: center;\n      left: 0;\n      right: 0;\n      top: 0.4em;\n      color: ", ";\n      font-size: 16px;\n      z-index: -1;\n    }\n    ", "\n   \n\n    @media screen and (max-width: 600px){\n      margin-left: -5px;\n      margin-right: -5px;\n      &:before {\n        top: 2px;\n      }\n    }\n"], ["\n    display: flex;\n    width: ", ";\n    height: ", ";\n    border-radius: 50%;\n    overflow: hidden;\n    flex: ", ";\n    background: ", ";\n    position: relative;\n    z-index: 1;\n    &:before {\n      content: attr(data-char);\n      position: absolute;\n      text-align: center;\n      left: 0;\n      right: 0;\n      top: 0.4em;\n      color: ", ";\n      font-size: 16px;\n      z-index: -1;\n    }\n    ", "\n   \n\n    @media screen and (max-width: 600px){\n      margin-left: -5px;\n      margin-right: -5px;\n      &:before {\n        top: 2px;\n      }\n    }\n"])), (function(n) {
            return n.isPortalEnabled ? "" : "30px"
        }
        ), (function(n) {
            return n.isPortalEnabled ? "" : "30px"
        }
        ), (function(n) {
            return n.isPortalEnabled ? "" : "0 0 30px"
        }
        ), (function(n) {
            return n.theme.colors.ascent
        }
        ), (function(n) {
            return n.theme.colors.white
        }
        ), (function(n) {
            return n.isPortalEnabled && "img{\n      width:100%;\n      height:100%;\n    }"
        }
        )), c = t(7997), s = function() {
            return (s = Object.assign || function(n) {
                for (var e, t = 1, i = arguments.length; t < i; t++)
                    for (var r in e = arguments[t])
                        Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
                return n
            }
            ).apply(this, arguments)
        }, u = function(n) {
            var e = n.user
              , t = n.click
              , i = n.isLoggedIn
              , l = n.style
              , u = e || {}
              , p = u.profilePicture
              , f = u.name
              , h = void 0 === f ? "U" : f;
            return (0,
            c.BX)(c.HY, {
                children: [i && (0,
                c.tZ)(d, {
                    "data-char": h[0],
                    onClick: t,
                    isPortalEnabled: (0,
                    o.SR)() && !a.ZP.playPageUpdate,
                    children: p && (0,
                    c.tZ)("img", {
                        alt: "Profile Pic",
                        src: p,
                        width: 30,
                        height: 30
                    })
                }), !i && (0,
                c.tZ)(r.Z, {
                    name: "user",
                    style: (0,
                    o.SR)() && !a.ZP.playPageUpdate ? s(s({}, l), {
                        fontSize: "1.1vw",
                        fontWeight: "600"
                    }) : s({}, l),
                    onClick: t
                })]
            })
        }
    },
    4888: function(n, e, t) {
        t(1720);
        var i = t(3978)
          , r = t(8041)
          , o = t(9884)
          , a = t(7997)
          , l = function() {
            return (l = Object.assign || function(n) {
                for (var e, t = 1, i = arguments.length; t < i; t++)
                    for (var r in e = arguments[t])
                        Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
                return n
            }
            ).apply(this, arguments)
        };
        e.Z = function(n) {
            var e = n.themeType
              , t = void 0 === e ? "dark" : e
              , d = n.orientation
              , c = void 0 === d ? "horizontal" : d
              , s = n.hasTagline
              , u = void 0 === s || s
              , p = n.style
              , f = void 0 === p ? {} : p;
            return (0,
            a.tZ)("img", {
                id: "ng-logo",
                width: "vertical" === c ? 103 : 120,
                height: "vertical" === c ? u ? 89 : 76 : 30,
                src: (0,
                o.Z)(t, c, u),
                alt: "now.gg ".concat((0,
                i.t)("logo")),
                style: (0,
                r.tq)() ? {} : l({
                    zIndex: "10",
                    margin: "20px"
                }, f)
            })
        }
    },
    6933: function(n, e, t) {
        t.d(e, {
            Z: function() {
                return F
            }
        });
        var i, r, o, a, l, d, c = t(2809), s = t(1720), u = t(445), p = t(8294), f = {
            src: "/play/_next/static/media/popup-background.6b406dcb.png",
            height: 2048,
            width: 2048,
            blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAAa0lEQVR42h2LwRHDQBDCEHtx//U6XognoNFP9L+tNpU0ZhBw1Ca9Ny+SruNrGHG67ZNsXpXCY4TP0b18d9rjhijf3fCW2vLE6jSw0p1uioUASy8oqGDkwzU1Tj5khnpsxhfdNNV7WiIqYfwDwQZUAkPqbjUAAAAASUVORK5CYII="
        }, h = function(n, e) {
            return Object.defineProperty ? Object.defineProperty(n, "raw", {
                value: e
            }) : n.raw = e,
            n
        }, g = u.ZP.div(i || (i = h(["\n  display: flex;\n  position: fixed;\n  z-index: 99;\n  transform: inherit;\n\n  ", "\n\n  ", "\n"], ["\n  display: flex;\n  position: fixed;\n  z-index: 99;\n  transform: inherit;\n\n  ", "\n\n  ", "\n"])), (function(n) {
            var e = n.showOverly
              , t = n.overlayBackgroundColor
              , i = n.theme;
            return e ? "\n    background: ".concat(t || i.colors.overlay, ";\n    left: 0;\n    right: 0;\n    bottom: 0;\n    top: 0;\n  ") : "\n    border-radius: 12px;\n  "
        }
        ), (function(n) {
            return n.overlayStyles
        }
        )), m = u.ZP.div(r || (r = h(["\n  position: relative;\n  width: ", ";\n  height: ", ";\n  background: linear-gradient(89.61deg, #E95681 3.44%, #67A5C6 49.89%, #B8CD74 96.35%),\n  linear-gradient(180deg, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0) 100%);\n  margin: auto;\n  max-width: 100%;\n  border-radius: ", ";\n  backdrop-filter: blur(", ");\n  color: ", ";\n  display: flex;\n  flex-direction: column;\n  font-family: ", ";\n\n  ", "\n"], ["\n  position: relative;\n  width: ", ";\n  height: ", ";\n  background: linear-gradient(89.61deg, #E95681 3.44%, #67A5C6 49.89%, #B8CD74 96.35%),\n  linear-gradient(180deg, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0) 100%);\n  margin: auto;\n  max-width: 100%;\n  border-radius: ", ";\n  backdrop-filter: blur(", ");\n  color: ", ";\n  display: flex;\n  flex-direction: column;\n  font-family: ", ";\n\n  ", "\n"])), (function(n) {
            return n.width || "617px"
        }
        ), (function(n) {
            return n.height || "auto"
        }
        ), (function(n) {
            return n.theme.spacing.base3
        }
        ), (function(n) {
            return n.theme.spacing.base6
        }
        ), (function(n) {
            return n.theme.colors.white
        }
        ), (function(n) {
            return n.theme.fontFamily
        }
        ), (function(n) {
            return n.modalStyles
        }
        )), b = u.ZP.div(a || (a = h(["\n  z-index: 1;\n  margin: 4px;\n  border-radius: 10px;\n  background: white;\n  color: ", ';\n  background-image: url("', "", '");\n  background-size: cover;\n  overflow: auto;\n\n  ', "\n"], ["\n  z-index: 1;\n  margin: 4px;\n  border-radius: 10px;\n  background: white;\n  color: ", ';\n  background-image: url("', "", '");\n  background-size: cover;\n  overflow: auto;\n\n  ', "\n"])), (function(n) {
            return n.theme.colors.base900
        }
        ), p.ZP.prefix, (null === f || void 0 === f ? void 0 : f.src) || "", (function(n) {
            var e = n.showAvatarHeader
              , t = n.theme;
            return e && (0,
            u.iv)(o || (o = h(["\n    margin-top: 0;\n    .icon-cross-thin {\n      color: ", ";\n    }\n  "], ["\n    margin-top: 0;\n    .icon-cross-thin {\n      color: ", ";\n    }\n  "])), t.colors.white)
        }
        )), v = t(5024), x = t(1219), w = function(n, e) {
            return Object.defineProperty ? Object.defineProperty(n, "raw", {
                value: e
            }) : n.raw = e,
            n
        }, y = u.ZP.div(l || (l = w(["\n  position: relative;\n  margin: 4px;\n  background: #0B0223;\n  margin-bottom: 0;\n  border-top-right-radius: 10px;\n  border-top-left-radius: 10px;\n  height: 92px;\n\n  &::after {\n    content: '';\n    position:absolute;\n    bottom: -10px;\n    left: 0;\n    width: 100%;\n    height: 10px;\n    background: #0B0223;\n  }\n"], ["\n  position: relative;\n  margin: 4px;\n  background: #0B0223;\n  margin-bottom: 0;\n  border-top-right-radius: 10px;\n  border-top-left-radius: 10px;\n  height: 92px;\n\n  &::after {\n    content: '';\n    position:absolute;\n    bottom: -10px;\n    left: 0;\n    width: 100%;\n    height: 10px;\n    background: #0B0223;\n  }\n"]))), k = u.ZP.div(d || (d = w(["\n  background: linear-gradient(89.61deg,#E95681 3.44%,#67A5C6 49.89%,#B8CD74 96.35%),\n              linear-gradient(180deg,rgba(255,255,255,0.4) 0%,rgba(255,255,255,0) 100%);\n  height: 84px;\n  width: 84px;\n  z-index: 2;\n  position: absolute;\n  left: 50%;\n  bottom: calc(-50% + 2px);\n  transform: translateX(-50%);\n  display: flex;\n  border-radius: 50%;\n  padding: 2px;\n  filter: drop-shadow(", ");\n"], ["\n  background: linear-gradient(89.61deg,#E95681 3.44%,#67A5C6 49.89%,#B8CD74 96.35%),\n              linear-gradient(180deg,rgba(255,255,255,0.4) 0%,rgba(255,255,255,0) 100%);\n  height: 84px;\n  width: 84px;\n  z-index: 2;\n  position: absolute;\n  left: 50%;\n  bottom: calc(-50% + 2px);\n  transform: translateX(-50%);\n  display: flex;\n  border-radius: 50%;\n  padding: 2px;\n  filter: drop-shadow(", ");\n"])), (function(n) {
            return n.theme.shadow.big
        }
        )), Z = t(4888), P = t(7997), S = function() {
            return (0,
            P.BX)(y, {
                children: [(0,
                P.tZ)(Z.Z, {
                    themeType: "light",
                    style: {
                        height: "28px",
                        width: "110px",
                        margin: "20px"
                    }
                }), (0,
                P.tZ)(k, {
                    children: (0,
                    P.tZ)("img", {
                        src: (0,
                        v.j)(x.Z),
                        alt: "avatar"
                    })
                })]
            })
        };
        function A(n, e) {
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
        function E(n) {
            for (var e = 1; e < arguments.length; e++) {
                var t = null != arguments[e] ? arguments[e] : {};
                e % 2 ? A(Object(t), !0).forEach((function(e) {
                    (0,
                    c.Z)(n, e, t[e])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(t)) : A(Object(t)).forEach((function(e) {
                    Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(t, e))
                }
                ))
            }
            return n
        }
        var z = function(n, e) {
            var t = {};
            for (var i in n)
                Object.prototype.hasOwnProperty.call(n, i) && e.indexOf(i) < 0 && (t[i] = n[i]);
            if (null != n && "function" === typeof Object.getOwnPropertySymbols) {
                var r = 0;
                for (i = Object.getOwnPropertySymbols(n); r < i.length; r++)
                    e.indexOf(i[r]) < 0 && Object.prototype.propertyIsEnumerable.call(n, i[r]) && (t[i[r]] = n[i[r]])
            }
            return t
        }
          , F = function(n) {
            var e = n.children
              , t = n.showOverly
              , i = void 0 === t || t
              , r = n.overlayBackgroundColor
              , o = n.onClickOverlay
              , a = n.overlayStyles
              , l = n.showAvatarHeader
              , d = void 0 !== l && l
              , c = z(n, ["children", "showOverly", "overlayBackgroundColor", "onClickOverlay", "overlayStyles", "showAvatarHeader"])
              , u = (0,
            s.useRef)(null);
            return (0,
            P.tZ)(g, {
                id: "overlay",
                showOverly: i,
                overlayBackgroundColor: r,
                overlayStyles: a,
                onClick: function(n) {
                    n.target !== u.current && o && o()
                },
                children: (0,
                P.BX)(m, E(E({}, c), {}, {
                    ref: u,
                    onClick: function(n) {
                        return n.stopPropagation()
                    },
                    children: [d && (0,
                    P.tZ)(S, {}), (0,
                    P.tZ)(b, {
                        showAvatarHeader: d,
                        children: e
                    })]
                }))
            })
        }
    },
    8557: function(n, e, t) {
        t.d(e, {
            wh: function() {
                return l
            },
            hu: function() {
                return d
            }
        });
        var i = t(1739)
          , r = t(1508)
          , o = t(1262)
          , a = function(n) {
            document.cookie = "".concat(n, "=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;")
        }
          , l = function(n, e) {
            var t = new URL(n)
              , i = t.searchParams;
            return i.set("utm_medium", e),
            i.set("utm_campaign", "portal_2"),
            i.delete("utm_source"),
            t.search = i.toString(),
            sessionStorage.removeItem("utm_medium"),
            sessionStorage.removeItem("utm_campaign"),
            sessionStorage.removeItem("utm_source"),
            a("utm_medium"),
            a("utm_campaign"),
            a("utm_source"),
            t.toString()
        }
          , d = function() {
            var n = r.Z.getState().play
              , e = n.isHtmlGame
              , t = n.orientation
              , a = r.Z.getState().ads.inGameAd;
            return !e && (t === o.cj.portrait || a === i.V)
        }
    },
    9600: function(n, e, t) {
        t.d(e, {
            _: function() {
                return b
            }
        });
        var i = t(5279)
          , r = t(6971)
          , o = t(8041)
          , a = t(1720)
          , l = t(5617)
          , d = t(2820)
          , c = t(1508)
          , s = t(2353)
          , u = t.n(s)
          , p = t(5628)
          , f = t(5220)
          , h = t.n(f)
          , g = t(7997)
          , m = function() {
            return (m = Object.assign || function(n) {
                for (var e, t = 1, i = arguments.length; t < i; t++)
                    for (var r in e = arguments[t])
                        Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
                return n
            }
            ).apply(this, arguments)
        }
          , b = function(n) {
            var e = n.children
              , t = n.style
              , s = void 0 === t ? {} : t
              , f = n.className
              , b = void 0 === f ? "" : f
              , v = n.setCoordinates
              , x = (0,
            a.useRef)(null)
              , w = (0,
            a.useContext)(i.Z)
              , y = w.widgets;
            (h()(y) || u()(y)) && (w.widgets = {
                mobileMenu: {
                    left: 10,
                    top: 8
                },
                desktopFullScreen: {
                    left: 10,
                    top: 8
                }
            }),
            y = w.widgets;
            var k = (0,
            l.I0)()
              , Z = 0
              , P = 0
              , S = 0
              , A = 0
              , E = !1;
            function z(n, e) {
                (null === x || void 0 === x ? void 0 : x.current) && (x.current.style.transform = "translate3d(".concat(n, "px, ").concat(e, "px, 0)"),
                (0,
                o.tq)() && "slow-network-drag" === b && (x.current.style.left = "unset",
                x.current.style.top = "unset"))
            }
            function F(n) {
                var e, t, i = c.Z.getState().play.orientation;
                n.preventDefault();
                var r = (null === (e = null === x || void 0 === x ? void 0 : x.current) || void 0 === e ? void 0 : e.clientHeight) || 0
                  , o = (null === (t = null === x || void 0 === x ? void 0 : x.current) || void 0 === t ? void 0 : t.clientWidth) || 0;
                if ("touchmove" === n.type) {
                    var a = n;
                    if (window.innerHeight > window.innerWidth && 0 === window.orientation && i === p.cj.landscape) {
                        if (a.touches[0].clientX - r < 5 || a.touches[0].clientY - 10 < 5)
                            return;
                        if (window.innerWidth - a.touches[0].clientX < 10 || window.innerHeight - a.touches[0].clientY < o + 10)
                            return;
                        Z = a.touches[0].clientY,
                        P = window.innerWidth - a.touches[0].clientX
                    } else if (window.innerHeight < window.innerWidth && 90 === window.orientation && i === p.cj.landscape) {
                        if (a.touches[0].clientX - 10 < 5 || a.touches[0].clientY < 5)
                            return;
                        if (window.innerWidth - a.touches[0].clientX < o + 5 || window.innerHeight - a.touches[0].clientY < r + 5)
                            return;
                        Z = a.targetTouches[0].clientX,
                        P = a.targetTouches[0].clientY
                    } else if (window.innerHeight > window.innerWidth && 0 === window.orientation && i === p.cj.portrait) {
                        if (a.touches[0].clientX < 5 || a.touches[0].clientX > window.innerWidth - (o + 5))
                            return;
                        if (a.touches[0].clientY < 5 || window.innerHeight < a.touches[0].clientY + r + 5)
                            return;
                        Z = a.touches[0].clientX,
                        P = a.touches[0].clientY
                    } else if (window.innerHeight < window.innerWidth && 90 === window.orientation && i === p.cj.portrait) {
                        if (a.touches[0].clientX < 5 || a.touches[0].clientX > window.innerWidth - (r + 5))
                            return;
                        if (a.touches[0].clientY < 5 + o || a.touches[0].clientY + 5 > window.innerHeight)
                            return;
                        Z = window.innerHeight - a.targetTouches[0].clientY,
                        P = a.targetTouches[0].clientX
                    }
                } else {
                    if ((a = n).clientX - o < 5 || a.clientY < 20)
                        return;
                    if (window.innerWidth - a.clientX < 20 || window.innerHeight - a.clientY < r - 20)
                        return;
                    Z = a.clientX - S,
                    P = a.clientY - A,
                    E = !0
                }
                z(Z, P)
            }
            (0,
            a.useEffect)((function() {
                k({
                    type: r.Z.SET_WIDGET,
                    payload: {
                        fullscreenWidgetRef: x
                    }
                })
            }
            ), [x]);
            var I = function() {
                k({
                    type: r.Z.DRAGGABLE,
                    payload: {
                        draggableState: E ? "drag" : "click"
                    }
                })
            };
            function C(n) {
                E = !1,
                I(),
                S = Z,
                A = P,
                v && k({
                    type: d.Z.FS_WIDGET,
                    payload: {
                        fsWidget: {
                            x: Math.round(S / window.innerWidth * 100),
                            y: Math.round(A / window.innerHeight * 100)
                        }
                    }
                }),
                "touchend" === n.type && (Z = 0,
                P = 0),
                document.removeEventListener("mouseup", C, !0),
                document.removeEventListener("mousemove", F, !1)
            }
            function O(n) {
                var e = c.Z.getState().play.orientation;
                c.Z.getState().play.isHtmlGame && ((e === p.cj.landscape ? 90 : 0) !== window.orientation && k({
                    type: r.Z.UPDATE_ORIENTATION,
                    payload: {
                        orientation: 90 === window.orientation ? p.cj.landscape : p.cj.portrait
                    }
                }));
                if ("mousedown" === n.type) {
                    var t = n
                      , i = t.target;
                    if ("ng-vol" === i.id || "volume-slider" === i.id || "sensitivity-slider" === i.id || "sensitivty-box" === i.id)
                        return;
                    E = !1,
                    I(),
                    S = t.clientX - Z,
                    A = t.clientY - P
                }
                document.addEventListener("mousemove", F, !1),
                document.addEventListener("mouseup", C, !0)
            }
            return (0,
            a.useEffect)((function() {
                localStorage.removeItem("jsFsWidgetCoordinateObj");
                var n = null === x || void 0 === x ? void 0 : x.current
                  , e = y.mobileMenu
                  , t = void 0 === e ? {
                    left: 10,
                    top: 10
                } : e;
                if ((0,
                o.tq)() && "slow-network-drag" !== b && (Z = (null === t || void 0 === t ? void 0 : t.left) || 10,
                P = (null === t || void 0 === t ? void 0 : t.top) || 10,
                z(Z, P)),
                v) {
                    u()(c.Z.getState().preferences.fsWidget) && k({
                        type: d.Z.FS_WIDGET,
                        payload: {
                            fsWidget: {
                                x: 70,
                                y: 20
                            }
                        }
                    });
                    var i = c.Z.getState().preferences.fsWidget || {
                        x: 70,
                        y: 20
                    }
                      , r = i.x
                      , a = i.y
                      , l = Math.round(window.innerWidth / 100 * r)
                      , s = Math.round(window.innerHeight / 100 * a);
                    z(l, s),
                    Z = l,
                    P = s
                }
                return null === n || void 0 === n || n.addEventListener("touchstart", O, !1),
                null === n || void 0 === n || n.addEventListener("touchend", C, !1),
                null === n || void 0 === n || n.addEventListener("touchmove", F, !1),
                null === n || void 0 === n || n.addEventListener("mousedown", O),
                function() {
                    null === n || void 0 === n || n.removeEventListener("touchstart", O, !1),
                    null === n || void 0 === n || n.removeEventListener("touchend", C, !1),
                    null === n || void 0 === n || n.removeEventListener("touchmove", F, !1),
                    null === n || void 0 === n || n.removeEventListener("mousedown", O, !1)
                }
            }
            ), []),
            (0,
            g.tZ)("div", {
                ref: x,
                className: "drag-react ".concat(b),
                style: m({
                    position: "fixed",
                    zIndex: 13
                }, s),
                children: e
            })
        }
    },
    2572: function(n, e, t) {
        var i = t(9930)
          , r = t(4564)
          , o = t(6971)
          , a = t(8309)
          , l = t(1720)
          , d = t(1567)
          , c = t(5617)
          , s = t(6933)
          , u = t(4888)
          , p = t(8044)
          , f = t(2825)
          , h = t(9598)
          , g = t(8294)
          , m = t(3863)
          , b = t(8041)
          , v = t(7762)
          , x = t(3520)
          , w = t(7997)
          , y = function() {
            return (y = Object.assign || function(n) {
                for (var e, t = 1, i = arguments.length; t < i; t++)
                    for (var r in e = arguments[t])
                        Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
                return n
            }
            ).apply(this, arguments)
        };
        e.Z = function(n) {
            var e = n.closeModal
              , t = (0,
            d.$)().t
              , k = (0,
            c.I0)()
              , Z = (0,
            c.v9)((function(n) {
                return n.play.isNerdMode
            }
            ))
              , P = (0,
            c.v9)((function(n) {
                return n.auth.isLoggedIn
            }
            ))
              , S = (0,
            l.useState)(null)
              , A = S[0]
              , E = S[1]
              , z = (0,
            c.v9)((function(n) {
                return n.play.isAndroidConnected
            }
            ));
            (0,
            l.useEffect)((function() {
                var n = P ? (0,
                a.et)() : null;
                n && E(n)
            }
            ), [P]);
            var F = function() {
                (0,
                h.L9)("LogoutClicked"),
                (0,
                g.u_)(),
                (0,
                g.Hh)(),
                (0,
                a.kS)()
            };
            return (0,
            w.tZ)(s.Z, {
                modalBackgroundColor: p.Z.gradients.glass,
                modalStyles: v.il,
                showAvatarHeader: !(0,
                b.tq)(),
                children: (0,
                w.BX)(v.W2, {
                    children: [(0,
                    w.BX)(v.xg, {
                        children: [(0,
                        b.tq)() && (0,
                        w.tZ)(u.Z, {
                            style: {
                                margin: "10px 0"
                            }
                        }), (0,
                        w.tZ)(i.Z, {
                            style: y({
                                marginTop: "auto",
                                marginBottom: "auto",
                                cursor: "pointer"
                            }, !(0,
                            b.tq)() && {
                                position: "absolute",
                                top: "20px",
                                right: "20px"
                            }),
                            onClick: e,
                            size: 16,
                            name: "cross-thin",
                            id: "ng-info-close"
                        })]
                    }), P && A && Object.keys(A).length > 1 && (0,
                    w.tZ)(v.LD, {
                        isMobile: (0,
                        b.tq)(),
                        children: (0,
                        w.BX)("div", {
                            children: [(0,
                            w.tZ)(x.Z, {
                                isLoggedIn: P,
                                user: A
                            }), (0,
                            w.BX)(v.ao, {
                                children: [(0,
                                w.tZ)(v.vx, {
                                    children: null === A || void 0 === A ? void 0 : A.name
                                }), (0,
                                w.tZ)(v.C0, {
                                    children: null === A || void 0 === A ? void 0 : A.email
                                })]
                            }), (0,
                            w.tZ)("div", {
                                style: {
                                    marginLeft: "auto"
                                },
                                children: (0,
                                w.tZ)(m.z, {
                                    variant: "tertiary",
                                    size: "medium",
                                    onClick: F,
                                    text: t("logout")
                                })
                            })]
                        })
                    }), (0,
                    w.BX)(v.X2, {
                        children: [(0,
                        w.tZ)(r.T6, {
                            style: {
                                color: "rgba(0, 0, 0, 0.8)"
                            },
                            children: (0,
                            w.BX)(r.rU, {
                                href: "https://www.now.gg",
                                target: "_blank",
                                rel: "noreferrer noopener",
                                white: !0,
                                className: "link",
                                children: [(0,
                                w.tZ)("span", {
                                    children: t("website")
                                }), (0,
                                w.tZ)(v.mo, {
                                    children: (0,
                                    w.tZ)(i.Z, {
                                        name: "union",
                                        size: 9
                                    })
                                })]
                            })
                        }), (0,
                        w.tZ)(r.T6, {
                            style: {
                                marginBottom: 16,
                                marginLeft: 15
                            },
                            children: (0,
                            w.BX)(r.rU, {
                                href: "https://nowgg.zendesk.com/hc/en-us",
                                target: "_blank",
                                rel: "noreferrer noopener",
                                white: !0,
                                className: "link",
                                children: [(0,
                                w.tZ)("span", {
                                    children: t("faqs")
                                }), " ", (0,
                                w.tZ)(v.mo, {
                                    children: (0,
                                    w.tZ)(i.Z, {
                                        name: "union",
                                        size: 9
                                    })
                                })]
                            })
                        })]
                    }), (0,
                    w.tZ)(v.xv, {
                        children: (0,
                        w.BX)(r.kk, {
                            style: {
                                marginBottom: 0,
                                color: "rgba(0, 0, 0, 0.8)"
                            },
                            children: ["\xa9 2023 now.gg. ".concat(t("disclaimerSub1"), " "), (0,
                            w.tZ)("br", {}), t("disclaimerSub2"), (0,
                            w.tZ)(r.rU, {
                                style: {
                                    fontSize: 12,
                                    color: "rgba(0, 0, 0, 0.8)"
                                },
                                target: "_blank",
                                rel: "noopener noreferrer",
                                href: "https://now.gg/terms-and-privacy.html#terms",
                                children: t("termsOfUse")
                            }), " ".concat(t("and"), " "), (0,
                            w.tZ)(r.rU, {
                                style: {
                                    fontSize: 12,
                                    color: "rgba(0, 0, 0, 0.8)"
                                },
                                target: "_blank",
                                rel: "noopener noreferrer",
                                href: "https://now.gg/terms-and-privacy.html#privacy",
                                children: t("privacyPolicy")
                            }), ", ".concat(t("disclaimerSub3"), " ")]
                        })
                    }), z && (0,
                    w.BX)(v.qp, {
                        children: [(0,
                        w.tZ)(v.cw, {
                            onClick: function() {
                                e(),
                                k({
                                    type: f.Z.GET_SUPPORT
                                })
                            },
                            children: t("reportAProblem")
                        }), (0,
                        w.BX)(v.xR, {
                            style: {
                                color: "#0B0223"
                            },
                            children: [(0,
                            w.tZ)(r.kk, {
                                style: {
                                    marginLeft: "auto",
                                    marginBottom: 0
                                },
                                children: t("nerdMode")
                            }), (0,
                            w.BX)(v.__, {
                                id: "ng-nerd-mode",
                                children: [(0,
                                w.tZ)("input", {
                                    type: "checkbox",
                                    checked: Z,
                                    onChange: function() {
                                        k({
                                            type: o.Z.START_CONNECTION,
                                            payload: {
                                                isNerdMode: !Z
                                            }
                                        })
                                    }
                                }), (0,
                                w.tZ)("span", {})]
                            })]
                        })]
                    })]
                })
            })
        }
    },
    7762: function(n, e, t) {
        t.d(e, {
            il: function() {
                return x
            },
            W2: function() {
                return w
            },
            xg: function() {
                return y
            },
            mo: function() {
                return k
            },
            __: function() {
                return Z
            },
            X2: function() {
                return P
            },
            qp: function() {
                return S
            },
            LD: function() {
                return A
            },
            ao: function() {
                return E
            },
            C0: function() {
                return z
            },
            vx: function() {
                return F
            },
            xv: function() {
                return I
            },
            cw: function() {
                return C
            },
            xR: function() {
                return O
            }
        });
        var i, r, o, a, l, d, c, s, u, p, f, h, g, m, b = t(445), v = function(n, e) {
            return Object.defineProperty ? Object.defineProperty(n, "raw", {
                value: e
            }) : n.raw = e,
            n
        }, x = (0,
        b.iv)(i || (i = v(["\n    @media screen and (orientation: landscape) and (max-height: 300px),\n    (orientation: portrait) and (max-width: 300px) {\n        height: 100%;\n    }\n    max-width: 440px;\n"], ["\n    @media screen and (orientation: landscape) and (max-height: 300px),\n    (orientation: portrait) and (max-width: 300px) {\n        height: 100%;\n    }\n    max-width: 440px;\n"]))), w = b.ZP.div(r || (r = v(["\n    padding: 16px;\n\n    .link {\n        font-size: 12px;\n        text-align: center;\n        display: flex;\n        align-items: center;\n        color: ", "\n    }\n"], ["\n    padding: 16px;\n\n    .link {\n        font-size: 12px;\n        text-align: center;\n        display: flex;\n        align-items: center;\n        color: ", "\n    }\n"])), (function(n) {
            return n.theme.colors.base900
        }
        )), y = b.ZP.div(o || (o = v(["\n    display: flex;\n    justify-content: space-between;\n"], ["\n    display: flex;\n    justify-content: space-between;\n"]))), k = b.ZP.span(a || (a = v(["\n   margin-left: 4px;\n"], ["\n   margin-left: 4px;\n"]))), Z = b.ZP.label(l || (l = v(["\n    position: relative;\n    display: inline-block;\n    width: 30px;\n    height: 18px;\n    margin-left: 8px;\n    > input {\n        visibility: hidden;\n    }\n    > span {\n        position: absolute;\n        cursor: pointer;\n        top: 0;\n        left: 0;\n        right: 0;\n        bottom: 0;\n        -webkit-transition: .4s;\n        transition: .4s;\n        border-radius: ", ";\n        border: ", ';\n    }\n    > span:before {\n        position: absolute;\n        content: "";\n        height: 80%;\n        width: 50%;\n        left: 10%;\n        top: 10%;\n        background-color: ', ";\n        -webkit-transition: .4s;\n        transition: .4s;\n        border-radius: 50%;\n    }\n    > input:checked + span {\n        background-color: ", ";\n        &:before {\n            background-color: ", ";\n        }\n    }\n    > input:checked + span:before {\n        transform: translateX(60%);\n    }\n"], ["\n    position: relative;\n    display: inline-block;\n    width: 30px;\n    height: 18px;\n    margin-left: 8px;\n    > input {\n        visibility: hidden;\n    }\n    > span {\n        position: absolute;\n        cursor: pointer;\n        top: 0;\n        left: 0;\n        right: 0;\n        bottom: 0;\n        -webkit-transition: .4s;\n        transition: .4s;\n        border-radius: ", ";\n        border: ", ';\n    }\n    > span:before {\n        position: absolute;\n        content: "";\n        height: 80%;\n        width: 50%;\n        left: 10%;\n        top: 10%;\n        background-color: ', ";\n        -webkit-transition: .4s;\n        transition: .4s;\n        border-radius: 50%;\n    }\n    > input:checked + span {\n        background-color: ", ";\n        &:before {\n            background-color: ", ";\n        }\n    }\n    > input:checked + span:before {\n        transform: translateX(60%);\n    }\n"])), (function(n) {
            return n.theme.border.radius12
        }
        ), (function(n) {
            return n.theme.border.base2
        }
        ), (function(n) {
            return n.theme.colors.base900
        }
        ), (function(n) {
            return n.theme.colors.ascent
        }
        ), (function(n) {
            return n.theme.colors.white
        }
        )), P = b.ZP.div(d || (d = v(["\n    margin-top: 16px;\n    display: flex;\n    flex-direction: row;\n     .linkStyle {\n        text-align: center;\n        color: ", ";\n        font-size: 12px;\n    }\n"], ["\n    margin-top: 16px;\n    display: flex;\n    flex-direction: row;\n     .linkStyle {\n        text-align: center;\n        color: ", ";\n        font-size: 12px;\n    }\n"])), (function(n) {
            return n.theme.colors.white
        }
        )), S = b.ZP.div(c || (c = v(["\n    display: flex;\n    justify-content: space-between;\n    padding-top: ", ";\n    color: ", ";\n"], ["\n    display: flex;\n    justify-content: space-between;\n    padding-top: ", ";\n    color: ", ";\n"])), (function(n) {
            return n.theme.spacing.base4
        }
        ), (function(n) {
            return n.theme.colors.white
        }
        )), A = b.ZP.div(s || (s = v(["\n    border-radius: 8px;\n    background: ", ";\n    padding: 18px;\n    margin-top: ", ";\n\n    > div {\n        display: flex;\n        align-items: center;\n\n        > div:first-child {\n            flex-basis: 44px;\n            height: 44px;\n        }\n    }\n\n    img {\n        width: 44px;\n        height: 44px;\n    }\n\n    button {\n        width: 100px;\n    }\n"], ["\n    border-radius: 8px;\n    background: ", ";\n    padding: 18px;\n    margin-top: ", ";\n\n    > div {\n        display: flex;\n        align-items: center;\n\n        > div:first-child {\n            flex-basis: 44px;\n            height: 44px;\n        }\n    }\n\n    img {\n        width: 44px;\n        height: 44px;\n    }\n\n    button {\n        width: 100px;\n    }\n"])), (function(n) {
            return n.theme.colors.black10
        }
        ), (function(n) {
            return n.isMobile ? "16px" : "44px"
        }
        )), E = b.ZP.div(u || (u = v(["\n    display: flex;\n    flex-direction: column;\n    transform: translateX(18px);\n    max-width: 50%;\n"], ["\n    display: flex;\n    flex-direction: column;\n    transform: translateX(18px);\n    max-width: 50%;\n"]))), z = b.ZP.span(p || (p = v(["\n    font-size: 12px;\n    font-weight: 400;\n    line-height: 150%;\n    color: ", ";\n    text-overflow: ellipsis;\n    overflow: hidden;\n"], ["\n    font-size: 12px;\n    font-weight: 400;\n    line-height: 150%;\n    color: ", ";\n    text-overflow: ellipsis;\n    overflow: hidden;\n"])), (function(n) {
            return n.theme.colors.black60
        }
        )), F = b.ZP.p(f || (f = v(["\n    font-size: 12px;\n    font-weight: 600;\n    line-height: 150%;\n    text-overflow: ellipsis;\n    overflow: hidden;\n    margin: 0;\n    color: ", ";\n    display: flex;\n"], ["\n    font-size: 12px;\n    font-weight: 600;\n    line-height: 150%;\n    text-overflow: ellipsis;\n    overflow: hidden;\n    margin: 0;\n    color: ", ";\n    display: flex;\n"])), (function(n) {
            return n.theme.colors.base900
        }
        )), I = b.ZP.div(h || (h = v(["\n    a {\n        color: rgba(255, 255, 255, 0.8);\n    }\n"], ["\n    a {\n        color: rgba(255, 255, 255, 0.8);\n    }\n"]))), C = b.ZP.div(g || (g = v(["\n    font-weight: 400;\n    font-size: 12px;\n    line-height: 150%;\n    text-decoration: underline;\n    cursor: pointer;\n    color: ", ";\n"], ["\n    font-weight: 400;\n    font-size: 12px;\n    line-height: 150%;\n    text-decoration: underline;\n    cursor: pointer;\n    color: ", ";\n"])), (function(n) {
            return n.theme.colors.base900
        }
        )), O = b.ZP.div(m || (m = v(["\n    display: flex;\n"], ["\n    display: flex;\n"])))
    },
    4466: function(n, e, t) {
        t.d(e, {
            Z: function() {
                return te
            }
        });
        var i, r, o, a, l, d, c, s, u, p, f, h, g, m, b, v, x, w, y, k, Z, P, S, A, E, z, F, I, C = t(1720), O = t(1567), B = t(1219), T = t(5024), L = t(8294), U = {
            src: "/play/_next/static/media/recentGamesBg.a1c8748d.png",
            height: 1004,
            width: 1004,
            blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAuUlEQVR42k2O3WkDQRCDNzW5AjfiGuISXIgfnRSSWhKI473z/s7MzswpuQsGC4QEHwiFh9T9Vcw/Vq89PMvMLzwMicZmVoW5XTboww7GhlpFfzL5tXRP1FSMoMaHsLTx7olBU7f5XhFzxr3frMkNrPktLJnPS+wY16Il/sEUMddPLfyFLtM5aKb9khgaG/pcNJdJc//GutB42v+frHz0PqAskEFgrSBJxw0CeFmTiXY69KQqJ+K+e7BfCSjFhFbJvsIAAAAASUVORK5CYII="
        }, j = {
            src: "/play/_next/static/media/logoArt.0ed26f8c.png",
            height: 96,
            width: 97,
            blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAmUlEQVR42k3OsQrCQAzG8aSi4B1IBScRwRRcukhnty5CUSqoKC666OYTCC4+jb6k/0CFBn4k4T7ISVDToFlHKOYUo2ZWJ/9iWaDCCsv2Qw8HfKPahb7DBzcMPLDGES8CoS+zhPmBK7YeKENiE3qNgv+Mm1M5Cg+cYKhaZ0vMsfdlig2euHPmTH+jRi5eUUyjZhEphggEuyIiP8gpFekgQYO/AAAAAElFTkSuQmCC"
        }, D = t(5617), X = t(1508), R = t(7223), N = t(4141), _ = t(1740), G = t(5186), H = t(1672), Y = t(9662), M = t(4564), W = t(3863), q = {
            src: "/play/_next/static/media/portalBgClipped.340dcf65.png",
            height: 720,
            width: 1280,
            blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAYAAAB4ka1VAAAAf0lEQVR42h3KuxHCMBAA0T2djfxpg74pgWpIiAkYAhIGWR98h8bBRvvkcUsm+y4eKt/zi8xOSYoVxasyEH4JrSuSkRYQUbQp1HCgwJTuPm1I3Ew3gRY7GNFyOgp9XpkzvhQf9dOn4W1COqIXLOaLz/ndgcpcfFmf6FAwi4gO/AHKfkCYZ0soXQAAAABJRU5ErkJggg=="
        }, V = t(9598), J = t(6971), Q = t(3029), K = t(2820), $ = t(1739), nn = t(6817), en = t(9555), tn = {
            src: "/play/_next/static/media/cloud-hand.26dd74f2.gif",
            height: 563,
            width: 1e3
        }, rn = {
            src: "/play/_next/static/media/cloud-bg.e5a8f9fc.png",
            height: 397,
            width: 618,
            blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAYAAAB4ka1VAAAAjUlEQVR42j3JSwrCMBRG4axMN6QrcB0uR3ALgrPqqIW+kibNn5ubPpIrCHrgjD71q66HiwHvGjG9+/b0BzyqAzp792AxlL5PBNHobo1+HtXeWp9dEtYh28kXM9tiaShhGcRR41Ue/SrzIpuhwg4SghXEvtAyCrhnFV/1eXW0Jh+FEDMoZPBcKLmtm6rrB3WphMN4tg1RAAAAAElFTkSuQmCC"
        }, on = {
            src: "/play/_next/static/media/cloud-loader.47c72c1f.gif",
            height: 512,
            width: 512
        }, an = t(5628), ln = t(445), dn = {
            src: "/play/_next/static/media/moreGamesBg.c201cb59.png",
            height: 1124,
            width: 1124,
            blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA30lEQVR42k3IvUoDQRTF8YE8kr2PYApLwWcQYmkl2AfxAZTY2CbINiookpRiChHUTgi6Jjszu/Nx796bI1sE8oMDh7/pBPE9UT1l0ddu3UeLntkQ0SKzwCWGy4zcCkSlMJ21SwMlQROIyzrpbxPV5cAsCaI0MB+z9/vwuUD2WSvbYFl7uLjUQH+g1t+Zr6tx4R/nEEviSofKrmDDQuq8QOTVrZkf7x6+jW5AlnSdohBZ8fFHA5WIVB2YzvD8+WI6fkAxecHT7BusDRL7odk26Z/t93cur49OpqPEeW/T/wGP5Lxx5gZ7agAAAABJRU5ErkJggg=="
        }, cn = function(n, e) {
            return Object.defineProperty ? Object.defineProperty(n, "raw", {
                value: e
            }) : n.raw = e,
            n
        }, sn = function(n, e, t) {
            var i = ("inner" === t ? -.7 : -.9) * (e / ("inner" === t ? function(n) {
                switch (n) {
                case 4:
                    return 6;
                case 5:
                    return 8;
                case 6:
                    return 10;
                case 7:
                    return 12;
                default:
                    return 10
                }
            }(n) : 12)) + ("inner" === t ? -.45 : .53)
              , r = "inner" === t ? "6vw" : 2 === e ? "13vw" : 3 === e ? "11vw" : "15vw"
              , o = "rotate(".concat(i, "turn) translate(").concat(r, ")\n    rotate(calc(-1 * ").concat(i, "turn))");
            return "transform:".concat(o, ";")
        }, un = (0,
        ln.F4)(i || (i = cn(["\n0% {\n  transform: translate3D(-40vw, 40vh, 0);\n}\n100% {\n  transform: translate3D(0, 0, 0);\n}\n"], ["\n0% {\n  transform: translate3D(-40vw, 40vh, 0);\n}\n100% {\n  transform: translate3D(0, 0, 0);\n}\n"]))), pn = ln.ZP.img(o || (o = cn(["\n    right: 0.78vw;\n    top: 0.78vw;\n    position: absolute;\n    z-index: 7;\n    cursor: ", ";\n    height:6.25vw;\n    width:6.25vw;\n    user-drag: none;\n    -webkit-user-drag: none;\n    animation:", ";\n"], ["\n    right: 0.78vw;\n    top: 0.78vw;\n    position: absolute;\n    z-index: 7;\n    cursor: ", ";\n    height:6.25vw;\n    width:6.25vw;\n    user-drag: none;\n    -webkit-user-drag: none;\n    animation:", ";\n"])), (function(n) {
            return n.cursor
        }
        ), (function(n) {
            return n.introDone ? (0,
            ln.iv)(r || (r = cn(["", " 0.75s both"], ["", " 0.75s both"])), un) : "none"
        }
        )), fn = ln.ZP.div(a || (a = cn(["\n  z-index: 20;\n  position: relative;\n.overlay {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0,0,0,0.5);\n  z-index: 1;\n  cursor: pointer;\n}\n\n.quarter-2,.quarter-3{\n  box-shadow:none !important;\n}\n\n.error-indicator{\t\n  flex-direction: column;\t\n  background: #ffffff;\t\n}\n\n"], ["\n  z-index: 20;\n  position: relative;\n.overlay {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0,0,0,0.5);\n  z-index: 1;\n  cursor: pointer;\n}\n\n.quarter-2,.quarter-3{\n  box-shadow:none !important;\n}\n\n.error-indicator{\t\n  flex-direction: column;\t\n  background: #ffffff;\t\n}\n\n"]))), hn = (0,
        ln.F4)(l || (l = cn(["\n    0% {\n      left: 1vw;\n      top: 0.5vw;\n    }\n    50% {\n      left: 0.6vw;\n      top: 0.8vw;\n    }\n    100% {\n      left: 1vw;\n      top: 0.5vw;\n    }\n"], ["\n    0% {\n      left: 1vw;\n      top: 0.5vw;\n    }\n    50% {\n      left: 0.6vw;\n      top: 0.8vw;\n    }\n    100% {\n      left: 1vw;\n      top: 0.5vw;\n    }\n"]))), gn = ((0,
        ln.F4)(d || (d = cn(["\n    0% {\n      left: 8px;\n      top: 12px;\n    }\n    50% {\n      left: 11px;\n      top: 8px;\n    }\n    100% {\n      left: 8px;\n      top: 12px;\n    }\n"], ["\n    0% {\n      left: 8px;\n      top: 12px;\n    }\n    50% {\n      left: 11px;\n      top: 8px;\n    }\n    100% {\n      left: 8px;\n      top: 12px;\n    }\n"]))),
        (0,
        ln.F4)(c || (c = cn(["\n0% { \n  opacity: 0; \n  transform: translate3d(0%,-70%,0);\n}\n100% { \n  opacity: 1; \n  transform: translate3d(-50%,-50%,0); \n}\n"], ["\n0% { \n  opacity: 0; \n  transform: translate3d(0%,-70%,0);\n}\n100% { \n  opacity: 1; \n  transform: translate3d(-50%,-50%,0); \n}\n"])))), mn = ln.ZP.div(s || (s = cn(["\ngrid-area: layer;\ndisplay: grid;\nplace-items: center;\n", "\n  border-radius: 50%;\n  width:2.3vw;\n  height:2.3vw;\n  button {\n    &:hover {\n      background: transparent;\n    }\n  }\n\n  i {\n    cursor: pointer;\n    z-index: 2;\n    width:2.3vw;\n    height:2.3vw;\n    border-radius: 50%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    color: #fff;\n    background: linear-gradient(180deg, #784CAF 0%, rgba(121, 71, 185, 0) 100%), #8F4AEE;\n    border: 1px solid rgba(255, 255, 255, 0.2);\n    box-shadow: 0px 4px 20px rgba(43, 33, 17, 0.24),\n                0px 2px 4px rgba(0, 0, 0, 0.16),\n                inset 0px 2px 2px rgba(255, 255, 255, 0.24), inset 0px -4px 4px rgba(0, 0, 0, 0.24);\n  }\n\n  &:nth-child(2){\n    z-index:-1;\n  }\n  &:hover {\n    i{\n      background: linear-gradient(180deg, #C99FFF 0%, rgba(185, 131, 255, 0) 100%), #D356FF;\n    }\n    i#ng-vol {\n      background: ", ';\n    }\n    #volume-slider {\n      display: inline-flex;\n    }\n\n    .tooltip {\n      display: flex;\n    }\n  }\n\n  #volume-slider {\n    transform: rotate(0);\n    top: -1px;\n    right: -1px;\n    padding: 0 0 0 16px;\n    height: 2.3vw;\n    align-items: center;\n    width: 140px;\n    background: #FFFFFF;\n    border-radius:32px;\nbox-shadow: 0px 8px 24px rgba(0, 0, 0, 0.08);\n   &::before{\n    content: "";\n  position: absolute;\n  inset: 0;\n  border-radius: 32px;\n  padding: 2px;\n  z-index:-1;\n  background:linear-gradient(89.61deg, #E95681 3.44%, #67A5C6 49.89%, #B8CD74 96.35%);;\n  -webkit-mask:\n     linear-gradient(#fff 0 0) content-box,\n     linear-gradient(#fff 0 0);\n  -webkit-mask-composite: xor;\n          mask-composite: exclude;\n   }\n\n    input {\n      width: 81px;\n    }\n  }\n'], ["\ngrid-area: layer;\ndisplay: grid;\nplace-items: center;\n", "\n  border-radius: 50%;\n  width:2.3vw;\n  height:2.3vw;\n  button {\n    &:hover {\n      background: transparent;\n    }\n  }\n\n  i {\n    cursor: pointer;\n    z-index: 2;\n    width:2.3vw;\n    height:2.3vw;\n    border-radius: 50%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    color: #fff;\n    background: linear-gradient(180deg, #784CAF 0%, rgba(121, 71, 185, 0) 100%), #8F4AEE;\n    border: 1px solid rgba(255, 255, 255, 0.2);\n    box-shadow: 0px 4px 20px rgba(43, 33, 17, 0.24),\n                0px 2px 4px rgba(0, 0, 0, 0.16),\n                inset 0px 2px 2px rgba(255, 255, 255, 0.24), inset 0px -4px 4px rgba(0, 0, 0, 0.24);\n  }\n\n  &:nth-child(2){\n    z-index:-1;\n  }\n  &:hover {\n    i{\n      background: linear-gradient(180deg, #C99FFF 0%, rgba(185, 131, 255, 0) 100%), #D356FF;\n    }\n    i#ng-vol {\n      background: ", ';\n    }\n    #volume-slider {\n      display: inline-flex;\n    }\n\n    .tooltip {\n      display: flex;\n    }\n  }\n\n  #volume-slider {\n    transform: rotate(0);\n    top: -1px;\n    right: -1px;\n    padding: 0 0 0 16px;\n    height: 2.3vw;\n    align-items: center;\n    width: 140px;\n    background: #FFFFFF;\n    border-radius:32px;\nbox-shadow: 0px 8px 24px rgba(0, 0, 0, 0.08);\n   &::before{\n    content: "";\n  position: absolute;\n  inset: 0;\n  border-radius: 32px;\n  padding: 2px;\n  z-index:-1;\n  background:linear-gradient(89.61deg, #E95681 3.44%, #67A5C6 49.89%, #B8CD74 96.35%);;\n  -webkit-mask:\n     linear-gradient(#fff 0 0) content-box,\n     linear-gradient(#fff 0 0);\n  -webkit-mask-composite: xor;\n          mask-composite: exclude;\n   }\n\n    input {\n      width: 81px;\n    }\n  }\n'])), (function(n) {
            var e = n.actionItems
              , t = n.index;
            return sn(e, t, "inner")
        }
        ), (function(n) {
            return n.theme.colors.ascent
        }
        )), bn = ln.ZP.div(u || (u = cn(["\n  position: absolute;\n  z-index: 2;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  &.portrait {\n    flex-direction: column;\n\n    > h1 {\n      margin-right: 34%;\n    }\n    > div {\n      width: 50%;\n      margin: 0;\n      margin-left: 40%;\n    }\n  }\n  &.html {\n    > h1 {\n      margin-right: 0;\n      margin-top: -100px;\n    }\n    > div {\n      width: 200px;\n      margin-left: 0;\n    }\n  }\n"], ["\n  position: absolute;\n  z-index: 2;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  &.portrait {\n    flex-direction: column;\n\n    > h1 {\n      margin-right: 34%;\n    }\n    > div {\n      width: 50%;\n      margin: 0;\n      margin-left: 40%;\n    }\n  }\n  &.html {\n    > h1 {\n      margin-right: 0;\n      margin-top: -100px;\n    }\n    > div {\n      width: 200px;\n      margin-left: 0;\n    }\n  }\n"]))), vn = ln.ZP.h1(p || (p = cn(['\n    background-image: url("', '");\n    width: 309px;\n    font-family: ', ";\n    background-size: contain;\n    flex-direction: column;\n    aspect-ratio: 1.55;\n    background-repeat: no-repeat;\n    color: #000;\n    align-items: center;\n    justify-content: center;\n    display: flex;\n    padding: 70px 20px 20px;\n    text-align: center;\n    font-weight:400;\n    font-family: ", ";\n    letter-spacing: 1px;\n"], ['\n    background-image: url("', '");\n    width: 309px;\n    font-family: ', ";\n    background-size: contain;\n    flex-direction: column;\n    aspect-ratio: 1.55;\n    background-repeat: no-repeat;\n    color: #000;\n    align-items: center;\n    justify-content: center;\n    display: flex;\n    padding: 70px 20px 20px;\n    text-align: center;\n    font-weight:400;\n    font-family: ", ";\n    letter-spacing: 1px;\n"])), (function(n) {
            return n.bg
        }
        ), (function(n) {
            return n.theme.fontFamily
        }
        ), (function(n) {
            return n.theme.fontFamily
        }
        )), xn = ln.ZP.div(f || (f = cn(["\n    margin-top: 110px;\n    width: 260px;\n    aspect-ratio: 1;\n    background-repeat: no-repeat;\n    position: relative;\n    text-align: center;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    background-size: 236px;\n    background-position: center;\n"], ["\n    margin-top: 110px;\n    width: 260px;\n    aspect-ratio: 1;\n    background-repeat: no-repeat;\n    position: relative;\n    text-align: center;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    background-size: 236px;\n    background-position: center;\n"]))), wn = ln.ZP.img(h || (h = cn(["\n  cursor: pointer;\n  position: static;\n  width: 80%;\n"], ["\n  cursor: pointer;\n  position: static;\n  width: 80%;\n"]))), yn = ln.ZP.img(g || (g = cn(["\n  position: absolute;\n  width: 91%;\n  z-index: 1;\n  cursor: pointer;\n"], ["\n  position: absolute;\n  width: 91%;\n  z-index: 1;\n  cursor: pointer;\n"]))), kn = ln.ZP.img(m || (m = cn(["\n  top: auto;\n  bottom: -16%;\n  right: -16%;\n  max-width: 81%;\n  transform: rotate(-30deg);\n  position: absolute;\n  z-index: 2;\n"], ["\n  top: auto;\n  bottom: -16%;\n  right: -16%;\n  max-width: 81%;\n  transform: rotate(-30deg);\n  position: absolute;\n  z-index: 2;\n"]))), Zn = ln.ZP.div(b || (b = cn(["\nwidth: 100%;\nheight: 100%;\ndisplay: flex;\nalign-items: center;\njustify-content: center;\n"], ["\nwidth: 100%;\nheight: 100%;\ndisplay: flex;\nalign-items: center;\njustify-content: center;\n"]))), Pn = ln.ZP.div(v || (v = cn(["\n  &>div {\n    ", ';\n    flex-direction: row;\n    width: auto;\n    align-items: center;\n    background: #FFFFFF;\n    border-radius: 32px;\n    height: 2.3vw;\n    padding: 0 40px 0 16px;\n    top: -1px;\n    right:-1px;\n    &::before{\n      content: "";\n    position: absolute;\n    inset: 0;\n    border-radius: 32px;\n    padding: 2px;\n    z-index:-1;\n    background:linear-gradient(89.61deg, #E95681 3.44%, #67A5C6 49.89%, #B8CD74 96.35%);;\n    -webkit-mask:\n       linear-gradient(#fff 0 0) content-box,\n       linear-gradient(#fff 0 0);\n    -webkit-mask-composite: xor;\n            mask-composite: exclude;\n     }\n\n    h3 {\n      margin-left: 8px;\n      font-weight: 500;\n      font-size: 10px;\n      line-height: 15px;\n      color:#0B0223;\n    }\n\n    input:first-child {\n      width: 102px;\n      margin: 0 0 0 8px;\n    }\n    input:last-child {\n      width: 24px;\n      margin-left: 10px;\n      background: transparent;\n      font-weight: 400;\n      font-size: 12px;\n      line-height: 150px;\n      color:#0B0223;\n    }\n  }\n\n  i {\n    position: relative;\n    ', ";\n    &:hover{\n      ", ";\n    }\n  }\n"], ["\n  &>div {\n    ", ';\n    flex-direction: row;\n    width: auto;\n    align-items: center;\n    background: #FFFFFF;\n    border-radius: 32px;\n    height: 2.3vw;\n    padding: 0 40px 0 16px;\n    top: -1px;\n    right:-1px;\n    &::before{\n      content: "";\n    position: absolute;\n    inset: 0;\n    border-radius: 32px;\n    padding: 2px;\n    z-index:-1;\n    background:linear-gradient(89.61deg, #E95681 3.44%, #67A5C6 49.89%, #B8CD74 96.35%);;\n    -webkit-mask:\n       linear-gradient(#fff 0 0) content-box,\n       linear-gradient(#fff 0 0);\n    -webkit-mask-composite: xor;\n            mask-composite: exclude;\n     }\n\n    h3 {\n      margin-left: 8px;\n      font-weight: 500;\n      font-size: 10px;\n      line-height: 15px;\n      color:#0B0223;\n    }\n\n    input:first-child {\n      width: 102px;\n      margin: 0 0 0 8px;\n    }\n    input:last-child {\n      width: 24px;\n      margin-left: 10px;\n      background: transparent;\n      font-weight: 400;\n      font-size: 12px;\n      line-height: 150px;\n      color:#0B0223;\n    }\n  }\n\n  i {\n    position: relative;\n    ', ";\n    &:hover{\n      ", ";\n    }\n  }\n"])), (function(n) {
            return n.isOpen && "display: flex !important"
        }
        ), (function(n) {
            var e = n.theme;
            return n.isOpen && "background: ".concat(e.colors.ascent)
        }
        ), (function(n) {
            var e = n.theme;
            return n.isOpen && "background: ".concat(e.colors.ascent)
        }
        )), Sn = ln.ZP.div(x || (x = cn(["\nposition:absolute;\nleft: 40vw;\ntop: 40vh;\nz-index:9;\nbackground: rgba(0, 0, 0, 0.7);\nborder-radius: 8px;\ndisplay: flex;\nflex-direction: row;\nalign-items: center;\npadding: 12px 16px;\ngap: 12px;\n>img{\t\n  height: 48px;\t\n  width: 48px;\t\n}\t\n@media screen and (min-width:1340px) and (max-width:1540px){\t\n  left:50vw;\n}\n"], ["\nposition:absolute;\nleft: 40vw;\ntop: 40vh;\nz-index:9;\nbackground: rgba(0, 0, 0, 0.7);\nborder-radius: 8px;\ndisplay: flex;\nflex-direction: row;\nalign-items: center;\npadding: 12px 16px;\ngap: 12px;\n>img{\t\n  height: 48px;\t\n  width: 48px;\t\n}\t\n@media screen and (min-width:1340px) and (max-width:1540px){\t\n  left:50vw;\n}\n"]))), An = ln.ZP.div(w || (w = cn(['\nheight:41vw;\nwidth:41vw;\ntop:-17vw;\nright:-17vw;\n z-index:3;\nposition:absolute;\n.outermost-circle,.innermost-circle,.inner-circle{\n  padding:0;\n  margin:0;\n}\n.outermost-circle{\n  position:absolute;\n  height:41vw;\n  width:41vw;\n  background: url("', "", '");\n  background-size: 112%;\n  background-repeat: no-repeat;\n  background-position:-2vw;\n  border-radius:50%;\n  left:50%;\n  top:50%;\n  transform:translate(-50%,-50%);  \n  animation-duration: 4s;\n  animation-fill-mode: both;\n  animation-name: ', ';\n}\n.innermost-circle{\n  display: grid;\n  grid-template-areas: "layer";\n  place-items: center;\n  background: #185adb;\n  border-radius: 50%;\n  position:absolute;\n  height:17vw;\n  width:17vw;\n  background:#ffffff;\n  border-radius:50%;\n  left:50%;\n  top:50%;\n  transform:translate(-50%,-50%);\n\n  button{\n    margin:0;\n  }\n  \n}\n.inner-circle{\n  display: grid;\n  grid-template-areas: "layer";\n  place-items: center;\n  position:absolute;\n  height:35vw;\n  width:35vw;\n  background: url("', "", '");\n  background-size: 115%;\n  background-repeat: no-repeat;\n  background-position:center;\n  border-radius:50%;\n  left:50%;\n  top:50%;\n  transform:translate(-50%,-50%);\n  animation-duration: 2s;\n  animation-fill-mode: both;\n  animation-name: ', ";\n}\n\n.recent-tile{\n  grid-area: layer;\n  display: grid;\n  place-items: center;\n  position: absolute;\n  border-radius: 50%;\n  cursor:pointer;\n\n  &:hover{\n    .tooltip {\n      display: flex;\n    }\n  }\n\n  &:nth-child(1){\n   ", "\n  }\n  &:nth-child(2){\n    ", "\n   }\n   &:nth-child(3){\n    ", "\n   }\n   &:nth-child(4){\n    ", "\n   }\n}\n\n.slider{\n  position: absolute;\n  border-radius: 50%;\n  width: 2.34vw;\n  height: 2.34vw;\n  background: ", ';\n  box-shadow: 0px 4px 20px rgba(43, 33, 17, 0.24),\n              0px 2px 4px rgba(0, 0, 0, 0.16),\n              inset 0px 2px 2px rgba(255, 255, 255, 0.24),\n              inset 0px -4px 4px rgba(0, 0, 0, 0.24);\n  display: block;\n  overflow: hidden;\n  top: 80%;\n  left: 9%;\n  cursor: pointer;\n  &:before {\n    content: "";\n    position: absolute;\n    width: 0.85vw;\n    height: 0.85vw;\n    border-bottom: 3px solid white;\n    border-left: 3px solid white;\n    left: 0.7vw;\n    top: 0.7vw;\n    animation-name: ', ";\n    animation-duration: 1.5s;\n    animation-iteration-count: infinite;\n    animation-timing-function: ease-in-out;\n  }\n  &.expanded{\n    &:before {\n    border-top: 3px solid white;\n    border-right: 3px solid white;\n    border-bottom: none;\n    border-left: none;\n    animation-name: ", ";\n    left: 0.625vw;\n    top: 0.9vw;\n    }\n  }\n}\n"], ['\nheight:41vw;\nwidth:41vw;\ntop:-17vw;\nright:-17vw;\n z-index:3;\nposition:absolute;\n.outermost-circle,.innermost-circle,.inner-circle{\n  padding:0;\n  margin:0;\n}\n.outermost-circle{\n  position:absolute;\n  height:41vw;\n  width:41vw;\n  background: url("', "", '");\n  background-size: 112%;\n  background-repeat: no-repeat;\n  background-position:-2vw;\n  border-radius:50%;\n  left:50%;\n  top:50%;\n  transform:translate(-50%,-50%);  \n  animation-duration: 4s;\n  animation-fill-mode: both;\n  animation-name: ', ';\n}\n.innermost-circle{\n  display: grid;\n  grid-template-areas: "layer";\n  place-items: center;\n  background: #185adb;\n  border-radius: 50%;\n  position:absolute;\n  height:17vw;\n  width:17vw;\n  background:#ffffff;\n  border-radius:50%;\n  left:50%;\n  top:50%;\n  transform:translate(-50%,-50%);\n\n  button{\n    margin:0;\n  }\n  \n}\n.inner-circle{\n  display: grid;\n  grid-template-areas: "layer";\n  place-items: center;\n  position:absolute;\n  height:35vw;\n  width:35vw;\n  background: url("', "", '");\n  background-size: 115%;\n  background-repeat: no-repeat;\n  background-position:center;\n  border-radius:50%;\n  left:50%;\n  top:50%;\n  transform:translate(-50%,-50%);\n  animation-duration: 2s;\n  animation-fill-mode: both;\n  animation-name: ', ";\n}\n\n.recent-tile{\n  grid-area: layer;\n  display: grid;\n  place-items: center;\n  position: absolute;\n  border-radius: 50%;\n  cursor:pointer;\n\n  &:hover{\n    .tooltip {\n      display: flex;\n    }\n  }\n\n  &:nth-child(1){\n   ", "\n  }\n  &:nth-child(2){\n    ", "\n   }\n   &:nth-child(3){\n    ", "\n   }\n   &:nth-child(4){\n    ", "\n   }\n}\n\n.slider{\n  position: absolute;\n  border-radius: 50%;\n  width: 2.34vw;\n  height: 2.34vw;\n  background: ", ';\n  box-shadow: 0px 4px 20px rgba(43, 33, 17, 0.24),\n              0px 2px 4px rgba(0, 0, 0, 0.16),\n              inset 0px 2px 2px rgba(255, 255, 255, 0.24),\n              inset 0px -4px 4px rgba(0, 0, 0, 0.24);\n  display: block;\n  overflow: hidden;\n  top: 80%;\n  left: 9%;\n  cursor: pointer;\n  &:before {\n    content: "";\n    position: absolute;\n    width: 0.85vw;\n    height: 0.85vw;\n    border-bottom: 3px solid white;\n    border-left: 3px solid white;\n    left: 0.7vw;\n    top: 0.7vw;\n    animation-name: ', ";\n    animation-duration: 1.5s;\n    animation-iteration-count: infinite;\n    animation-timing-function: ease-in-out;\n  }\n  &.expanded{\n    &:before {\n    border-top: 3px solid white;\n    border-right: 3px solid white;\n    border-bottom: none;\n    border-left: none;\n    animation-name: ", ";\n    left: 0.625vw;\n    top: 0.9vw;\n    }\n  }\n}\n"])), L.ZP.prefix, (null === dn || void 0 === dn ? void 0 : dn.src) || "", gn, L.ZP.prefix, (null === U || void 0 === U ? void 0 : U.src) || "", gn, sn(4, 0, "middle"), sn(4, 1, "middle"), sn(4, 2, "middle"), sn(4, 3, "middle"), (function(n) {
            return n.theme.colors.ascent
        }
        ), hn, hn), En = t(7997), zn = function(n) {
            var e, t, i, r, o, a, l, d, c = n.avatar, s = n.onClose, u = n.isHome, p = (0,
            D.v9)((function(n) {
                return n.play.videoRef
            }
            )), f = (0,
            D.v9)((function(n) {
                return n.play.orientation
            }
            )), h = (0,
            O.$)().t, g = (0,
            D.v9)((function(n) {
                return n.play.isHtmlGame
            }
            ));
            return (0,
            En.BX)(bn, {
                className: "".concat(f, " ").concat(g ? "html" : ""),
                style: {
                    width: g ? "100%" : f === an.cj.portrait ? null === (e = null === p || void 0 === p ? void 0 : p.current) || void 0 === e ? void 0 : e.clientWidth : null === (t = null === p || void 0 === p ? void 0 : p.current) || void 0 === t ? void 0 : t.clientHeight,
                    height: g ? "100vh" : f === an.cj.portrait ? null === (i = null === p || void 0 === p ? void 0 : p.current) || void 0 === i ? void 0 : i.clientHeight : null === (r = null === p || void 0 === p ? void 0 : p.current) || void 0 === r ? void 0 : r.clientWidth,
                    top: g ? 0 : null === (a = null === (o = null === p || void 0 === p ? void 0 : p.current) || void 0 === o ? void 0 : o.getBoundingClientRect()) || void 0 === a ? void 0 : a.top,
                    left: g ? 0 : u ? "50%" : null === (d = null === (l = null === p || void 0 === p ? void 0 : p.current) || void 0 === l ? void 0 : l.getBoundingClientRect()) || void 0 === d ? void 0 : d.left,
                    background: u ? "transparent" : "rgba(0, 0, 0, 0.7)",
                    transform: u ? "translate(-60%, 50%)" : ""
                },
                children: [(0,
                En.BX)(vn, {
                    bg: (0,
                    T.j)(rn),
                    children: [h("iAmYourCloudy"), (0,
                    En.tZ)("br", {}), " ", h("tapToStart"), (0,
                    En.tZ)("br", {})]
                }), (0,
                En.BX)(xn, {
                    onClick: s,
                    id: "cloudy-intro-avatar",
                    children: [(0,
                    En.tZ)(yn, {
                        src: (0,
                        T.j)(on),
                        alt: ""
                    }), (0,
                    En.tZ)(wn, {
                        src: c,
                        alt: "",
                        id: "cloudy-intro-icon"
                    }), (0,
                    En.tZ)(kn, {
                        src: (0,
                        T.j)(tn)
                    })]
                })]
            })
        }, Fn = function(n, e) {
            return Object.defineProperty ? Object.defineProperty(n, "raw", {
                value: e
            }) : n.raw = e,
            n
        }, In = ln.ZP.div(y || (y = Fn(["\n  border-radius: 50%;\n  position: absolute;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  .recentGame {\n    cursor: pointer;\n  }\n  &::before{\n    border-radius: 100%;\n    content: '';\n    background:", ";\n    background-size: contain;\n    background-repeat: no-repeat;\n    height:5vw;\n    width:5vw;\n    filter: drop-shadow(0px 4px 20px rgba(43, 33, 17, 0.24)) drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.16));\n    box-shadow: inset 0px 2px 2px rgba(255, 255, 255, 0.24), inset 0px -4px 4px rgba(0, 0, 0, 0.24);\n    z-index:2;\n  }\n  &.currentGame::before{\n    opacity: 0.6;\n  }\n\t&>.tooltip{\n\t\tleft: 0;\n    width: fit-content;\n\t\ttransform: translateX(-101%);\n\t}\n"], ["\n  border-radius: 50%;\n  position: absolute;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  .recentGame {\n    cursor: pointer;\n  }\n  &::before{\n    border-radius: 100%;\n    content: '';\n    background:", ";\n    background-size: contain;\n    background-repeat: no-repeat;\n    height:5vw;\n    width:5vw;\n    filter: drop-shadow(0px 4px 20px rgba(43, 33, 17, 0.24)) drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.16));\n    box-shadow: inset 0px 2px 2px rgba(255, 255, 255, 0.24), inset 0px -4px 4px rgba(0, 0, 0, 0.24);\n    z-index:2;\n  }\n  &.currentGame::before{\n    opacity: 0.6;\n  }\n\t&>.tooltip{\n\t\tleft: 0;\n    width: fit-content;\n\t\ttransform: translateX(-101%);\n\t}\n"])), (function(n) {
            var e = n.bg;
            return e ? "url('".concat(e, "')") : ""
        }
        )), Cn = ln.ZP.div(k || (k = Fn(["\n  position: absolute;\n  bottom: -0.78vw;\n  left: 50%;\n  transform: translateX(-50%);\n  padding: 0.3vw 0.46vw;\n  border: 1px solid rgba(255, 255, 255, 0.2);\n  border-radius: 4px;\n  background: #0B0223;\n  z-index: 9;\n"], ["\n  position: absolute;\n  bottom: -0.78vw;\n  left: 50%;\n  transform: translateX(-50%);\n  padding: 0.3vw 0.46vw;\n  border: 1px solid rgba(255, 255, 255, 0.2);\n  border-radius: 4px;\n  background: #0B0223;\n  z-index: 9;\n"]))), On = function(n, e) {
            return Object.defineProperty ? Object.defineProperty(n, "raw", {
                value: e
            }) : n.raw = e,
            n
        }, Bn = ln.ZP.div(Z || (Z = On(["\n  ", "\n  display: none;\n  padding: 4px 6px;\n  position: absolute;\n  right: 33px;\n  top: 100%;\n  font-weight: 500;\n  font-size: 10px;\n  line-height: 15px;\n  letter-spacing: 0.05em;\n  white-space: nowrap;\n  z-index:4;\n"], ["\n  ", "\n  display: none;\n  padding: 4px 6px;\n  position: absolute;\n  right: 33px;\n  top: 100%;\n  font-weight: 500;\n  font-size: 10px;\n  line-height: 15px;\n  letter-spacing: 0.05em;\n  white-space: nowrap;\n  z-index:4;\n"])), (function(n) {
            var e = n.theme;
            return "\n    background: ".concat(e.colors.base900, ";\n    border: 1px solid ").concat(e.colors.white20, ";\n    border-radius: ").concat(e.border.radius, ";\n    color: ").concat(e.colors.white, ";\n  ")
        }
        )), Tn = function(n) {
            var e = n.children;
            return (0,
            En.tZ)(Bn, {
                className: "tooltip",
                children: e
            })
        }, Ln = function(n) {
            var e = n.info
              , t = n.isCurrentGame
              , i = n.isRecentGame
              , r = (0,
            O.$)().t
              , o = e.playUrl.includes("utm_campaign") ? e.playUrl.replace("popular_games", "portal") : e.playUrl.concat("?utm_campaign=portal");
            return (0,
            En.tZ)("a", {
                href: o,
                rel: "noreferrer",
                onClick: function(n) {
                    return function(n) {
                        t && n.preventDefault()
                    }(n)
                },
                children: (0,
                En.BX)(In, {
                    className: "".concat(t ? "currentGame " : "").concat(i ? "recentGame " : ""),
                    bg: e.icon,
                    onClick: function() {
                        e.playUrl && (0,
                        V.L9)($.S5, {
                            element: t ? "PortalCurrentGame" : "PortalRecentGame",
                            action: "Clicked",
                            packageName: e.packageName
                        })
                    },
                    children: [t && (0,
                    En.tZ)(Cn, {
                        children: (0,
                        En.tZ)(M.mH, {
                            white: !0,
                            style: {
                                margin: 0
                            },
                            children: r("playing")
                        })
                    }), (0,
                    En.tZ)(Tn, {
                        children: e.name
                    })]
                })
            })
        }, Un = t(9930), jn = t(3978), Dn = {
            src: "/play/_next/static/media/remove.b1406902.svg",
            height: 16,
            width: 16
        }, Xn = t(3279), Rn = t.n(Xn), Nn = t(251), _n = function(n, e) {
            return Object.defineProperty ? Object.defineProperty(n, "raw", {
                value: e
            }) : n.raw = e,
            n
        }, Gn = (0,
        ln.F4)(P || (P = _n(["\n0% { \n  opacity: 0; \n  transform: translate3d(80%,-80%,0) scale(2);\n}\n100% { \n  opacity: 1; \n  transform: translate3d(0,0,0); \n}\n"], ["\n0% { \n  opacity: 0; \n  transform: translate3d(80%,-80%,0) scale(2);\n}\n100% { \n  opacity: 1; \n  transform: translate3d(0,0,0); \n}\n"]))), Hn = ln.ZP.div(S || (S = _n(["\nposition: fixed;\nleft: 0;\nright: 0;\nbottom: 0;\ntop: 0;\nz-index: 2;\ndisplay: flex;\nbackground-size: cover;\nanimation-duration: 0.75s;\nanimation-fill-mode: both;\nanimation-name: ", ";\n@media only screen and (max-width:1340px){\n  background-position:25%;\n}\n@media only screen and (max-width:1240px){\n  background-position:40%;\n}\n\n.cluster {\n    width: min(34vw, 36vh);\n    height: min(34vw, 36vh);\n    display: grid;\n    grid-template-columns: 13% 13% 13% 13% 13% 13% 13% 13% 13% 13%;\n    grid-template-rows: 13% 13% 13% 13% 13% 13% 13% 13% 13% 13%;\n\n    &:before {\n      content: '';\n      position: absolute;\n      left: 0;\n      right: 0;\n      top: 0;\n      bottom: 0;\n      width: 100%;\n      height: 100%;\n      pointer-events: none;\n    }\n.more-games{\n   &>span>button{\n        width:70%;\n        height:30%;\n        &>p{\n          font-size: 0.4vw;\n        }\n       }\n    \n    .img-tile {\n        border-radius: 50%;\n        width: 100%;\n        height: 100%;\n        cursor: pointer;\n      }\n      &:nth-child(1) {\n        grid-column-start: 8;\n        grid-row-start: 3;\n        button {\n          &::before, &::after {\n            height: 2px;\n          }\n        } \n      }\n      &:nth-child(2) {\n        grid-column-start: 7;\n        grid-row-start: 1;\n        width: 200%;\n        height: 200%;\n        &>span>button{\n          width:50%;\n       &>p{\n         font-size: 0.6vw;\n       }\n       }\n      }\n      &:nth-child(3) {\n        grid-column-start: 5;\n        grid-row-start: 3;\n        width: 300%;\n        height: 300%;\n        .shimmer-img{\n            display:block;\n        }\n        &>span>button{\n          width:50%;\n       &>p{\n         font-size: 0.75vw;\n       }\n       }\n      }\n      &:nth-child(4) {\n        grid-column-start: 8;\n        grid-row-start: 5;\n        width: 200%;\n        height: 200%;\n        &>span>button{\n          width:50%;\n       &>p{\n         font-size: 0.6vw;\n       }\n       }\n      }\n      &:nth-child(5) {\n        grid-column-start: 4;\n        grid-row-start: 6;\n        width: 200%;\n        height: 200%;\n        &>span>button{\n          width:50%;\n       &>p{\n         font-size: 0.75vw;\n       }\n       }\n      }\n      &:nth-child(6) {\n        grid-column-start: 3;\n        grid-row-start: 2;\n        width: 200%;\n        height: 200%;\n        &>span>button{\n          width:50%;\n       &>p{\n         font-size: 0.6vw;\n       }\n       }\n      }\n      &:nth-child(7) {\n        grid-column-start: 3;\n        grid-row-start: 5;\n        button {\n          &::before, &::after {\n            height: 2px;\n          }\n        }\n      }\n      &:nth-child(8) {\n        grid-column-start: 1;\n        grid-row-start: 4;\n        width: 200%;\n        height: 200%;\n        &>span>button{\n          width:50%;\n       &>p{\n         font-size: 0.6vw;\n       }\n       }\n      }\n      &:nth-child(9) {\n        grid-column-start: 6;\n        grid-row-start: 7;\n        width: 200%;\n        height: 200%;\n        &>span>button{\n          width:50%;\n       &>p{\n         font-size: 0.75vw;\n       }\n       }\n      }\n      &:nth-child(10) {\n        grid-column-start: 1;\n        grid-row-start: 7;\n        width: 300%;\n        height: 300%;\n        &>span>button{\n          width:50%;\n       &>p{\n         font-size: 0.75vw;\n       }\n       }\n      }\n      &:nth-child(11) {\n        grid-column-start: 9;\n        grid-row-start: 4;\n        width: 100%;\n        height: 100%;\n      }\n      &:nth-child(12) {\n        grid-column-start: 8;\n        grid-row-start: 8;\n        width: 200%;\n        height: 200%;\n        &>span>button{\n          width:50%;\n       &>p{\n         font-size: 0.6vw;\n       }\n       }\n      }\n}\n\n\n    &.top-right {\n      position: absolute;\n      top: calc(4vh + 50px);\n      right: 35vw;\n      &::before{\n        background: #6DB346;;\n        opacity: 0.4;\n        filter: blur(50px);\n      }\n\n      &:before {\n        background: #6DB346;\n        opacity: 0.4;\n        filter: blur(50px);\n      }\n    }\n\n    &.top-left {\n      position: absolute;\n      left: 6vw;\n      top: calc(8vh + 50px);\n      &::before{\n        background: #B3469B;\n        opacity: 0.4;\n        filter: blur(50px);\n      }\n      \n    }\n\n    &.bottom-left {\n      position: absolute;\n      bottom: 3vh;\n      left: 21vw;\n      &::before{\n        background:  #B3A846;\n        opacity: 0.4;\n        filter: blur(50px);\n      }\n    }\n\n    &.bottom-right {\n      position: absolute;\n      bottom: 17vh;\n      right: 7vw;\n      &::before{\n        background: #46ACB3;\n        opacity: 0.4;\n        filter: blur(50px);\n      }\n    }\n  }\n"], ["\nposition: fixed;\nleft: 0;\nright: 0;\nbottom: 0;\ntop: 0;\nz-index: 2;\ndisplay: flex;\nbackground-size: cover;\nanimation-duration: 0.75s;\nanimation-fill-mode: both;\nanimation-name: ", ";\n@media only screen and (max-width:1340px){\n  background-position:25%;\n}\n@media only screen and (max-width:1240px){\n  background-position:40%;\n}\n\n.cluster {\n    width: min(34vw, 36vh);\n    height: min(34vw, 36vh);\n    display: grid;\n    grid-template-columns: 13% 13% 13% 13% 13% 13% 13% 13% 13% 13%;\n    grid-template-rows: 13% 13% 13% 13% 13% 13% 13% 13% 13% 13%;\n\n    &:before {\n      content: '';\n      position: absolute;\n      left: 0;\n      right: 0;\n      top: 0;\n      bottom: 0;\n      width: 100%;\n      height: 100%;\n      pointer-events: none;\n    }\n.more-games{\n   &>span>button{\n        width:70%;\n        height:30%;\n        &>p{\n          font-size: 0.4vw;\n        }\n       }\n    \n    .img-tile {\n        border-radius: 50%;\n        width: 100%;\n        height: 100%;\n        cursor: pointer;\n      }\n      &:nth-child(1) {\n        grid-column-start: 8;\n        grid-row-start: 3;\n        button {\n          &::before, &::after {\n            height: 2px;\n          }\n        } \n      }\n      &:nth-child(2) {\n        grid-column-start: 7;\n        grid-row-start: 1;\n        width: 200%;\n        height: 200%;\n        &>span>button{\n          width:50%;\n       &>p{\n         font-size: 0.6vw;\n       }\n       }\n      }\n      &:nth-child(3) {\n        grid-column-start: 5;\n        grid-row-start: 3;\n        width: 300%;\n        height: 300%;\n        .shimmer-img{\n            display:block;\n        }\n        &>span>button{\n          width:50%;\n       &>p{\n         font-size: 0.75vw;\n       }\n       }\n      }\n      &:nth-child(4) {\n        grid-column-start: 8;\n        grid-row-start: 5;\n        width: 200%;\n        height: 200%;\n        &>span>button{\n          width:50%;\n       &>p{\n         font-size: 0.6vw;\n       }\n       }\n      }\n      &:nth-child(5) {\n        grid-column-start: 4;\n        grid-row-start: 6;\n        width: 200%;\n        height: 200%;\n        &>span>button{\n          width:50%;\n       &>p{\n         font-size: 0.75vw;\n       }\n       }\n      }\n      &:nth-child(6) {\n        grid-column-start: 3;\n        grid-row-start: 2;\n        width: 200%;\n        height: 200%;\n        &>span>button{\n          width:50%;\n       &>p{\n         font-size: 0.6vw;\n       }\n       }\n      }\n      &:nth-child(7) {\n        grid-column-start: 3;\n        grid-row-start: 5;\n        button {\n          &::before, &::after {\n            height: 2px;\n          }\n        }\n      }\n      &:nth-child(8) {\n        grid-column-start: 1;\n        grid-row-start: 4;\n        width: 200%;\n        height: 200%;\n        &>span>button{\n          width:50%;\n       &>p{\n         font-size: 0.6vw;\n       }\n       }\n      }\n      &:nth-child(9) {\n        grid-column-start: 6;\n        grid-row-start: 7;\n        width: 200%;\n        height: 200%;\n        &>span>button{\n          width:50%;\n       &>p{\n         font-size: 0.75vw;\n       }\n       }\n      }\n      &:nth-child(10) {\n        grid-column-start: 1;\n        grid-row-start: 7;\n        width: 300%;\n        height: 300%;\n        &>span>button{\n          width:50%;\n       &>p{\n         font-size: 0.75vw;\n       }\n       }\n      }\n      &:nth-child(11) {\n        grid-column-start: 9;\n        grid-row-start: 4;\n        width: 100%;\n        height: 100%;\n      }\n      &:nth-child(12) {\n        grid-column-start: 8;\n        grid-row-start: 8;\n        width: 200%;\n        height: 200%;\n        &>span>button{\n          width:50%;\n       &>p{\n         font-size: 0.6vw;\n       }\n       }\n      }\n}\n\n\n    &.top-right {\n      position: absolute;\n      top: calc(4vh + 50px);\n      right: 35vw;\n      &::before{\n        background: #6DB346;;\n        opacity: 0.4;\n        filter: blur(50px);\n      }\n\n      &:before {\n        background: #6DB346;\n        opacity: 0.4;\n        filter: blur(50px);\n      }\n    }\n\n    &.top-left {\n      position: absolute;\n      left: 6vw;\n      top: calc(8vh + 50px);\n      &::before{\n        background: #B3469B;\n        opacity: 0.4;\n        filter: blur(50px);\n      }\n      \n    }\n\n    &.bottom-left {\n      position: absolute;\n      bottom: 3vh;\n      left: 21vw;\n      &::before{\n        background:  #B3A846;\n        opacity: 0.4;\n        filter: blur(50px);\n      }\n    }\n\n    &.bottom-right {\n      position: absolute;\n      bottom: 17vh;\n      right: 7vw;\n      &::before{\n        background: #46ACB3;\n        opacity: 0.4;\n        filter: blur(50px);\n      }\n    }\n  }\n"])), Gn), Yn = ln.ZP.div(A || (A = _n(["\n  background: #FFFFFF;\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  border-radius: 6px;\n  height: 36px;\n  position: absolute;\n  top: 16px;\n  left: 50%;\n  transform: translate(-50%,0%);\n  display: flex;\n  align-items: flex-end;\n  text-transform: lowercase;\n  z-index: 99;\n  &:hover {\n    border: 1px solid ", ";\n  }\n  &:focus-within {\n    border: 1px solid ", ";\n  }\n  i {\n    color: ", ";\n    margin: 8px 14px;\n    cursor: pointer;\n    &:hover {\n      border-radius: 50%;\n      background: ", ";\n    }\n  }\n"], ["\n  background: #FFFFFF;\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  border-radius: 6px;\n  height: 36px;\n  position: absolute;\n  top: 16px;\n  left: 50%;\n  transform: translate(-50%,0%);\n  display: flex;\n  align-items: flex-end;\n  text-transform: lowercase;\n  z-index: 99;\n  &:hover {\n    border: 1px solid ", ";\n  }\n  &:focus-within {\n    border: 1px solid ", ";\n  }\n  i {\n    color: ", ";\n    margin: 8px 14px;\n    cursor: pointer;\n    &:hover {\n      border-radius: 50%;\n      background: ", ";\n    }\n  }\n"])), (function(n) {
            return n.theme.colors.white
        }
        ), (function(n) {
            return n.theme.colors.ascent
        }
        ), (function(n) {
            var e;
            return null === (e = n.theme.colors) || void 0 === e ? void 0 : e.white
        }
        ), (function(n) {
            return n.theme.colors.modal
        }
        )), Mn = ln.ZP.input(E || (E = _n(["\n  width: 332px;\n  height: 100%;\n  background: ", ";\n  border: 1px solid ", ";\n  color: rgba(0,0,0,0.6);\n  padding-left: 8px;\n  outline: none;\n  font-size: 14px;\n  font-family: inherit;\n"], ["\n  width: 332px;\n  height: 100%;\n  background: ", ";\n  border: 1px solid ", ";\n  color: rgba(0,0,0,0.6);\n  padding-left: 8px;\n  outline: none;\n  font-size: 14px;\n  font-family: inherit;\n"])), (function(n) {
            var e;
            return null === (e = n.theme.colors) || void 0 === e ? void 0 : e.transparent
        }
        ), (function(n) {
            var e;
            return null === (e = n.theme.colors) || void 0 === e ? void 0 : e.transparent
        }
        )), Wn = ln.ZP.ul(z || (z = _n(["\n  overflow: auto;\n  max-height: 240px;\n  width: 362px;\n  display: flex;\n  background: #FFFFFF;\n  position: absolute;\n  top: 54px;\n  left: 50%;\n  transform: translate(-50%,0%);\n  flex-direction: column;\n  z-index: 10;\n  border: 1px solid rgba(255, 255, 255, 0.2);\n  padding: 8px 0px;\n  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.08);\n  border-radius: 6px;\n\n  ::-webkit-scrollbar {\n    width: 4px;\n    display: flex;\n  }\n\n  ::-webkit-scrollbar-thumb {\n    background: ", ";\n    border-radius: 80px;\n  }\n"], ["\n  overflow: auto;\n  max-height: 240px;\n  width: 362px;\n  display: flex;\n  background: #FFFFFF;\n  position: absolute;\n  top: 54px;\n  left: 50%;\n  transform: translate(-50%,0%);\n  flex-direction: column;\n  z-index: 10;\n  border: 1px solid rgba(255, 255, 255, 0.2);\n  padding: 8px 0px;\n  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.08);\n  border-radius: 6px;\n\n  ::-webkit-scrollbar {\n    width: 4px;\n    display: flex;\n  }\n\n  ::-webkit-scrollbar-thumb {\n    background: ", ";\n    border-radius: 80px;\n  }\n"])), (function(n) {
            return n.theme.colors.black10
        }
        )), qn = ln.ZP.li(F || (F = _n(["\n  height: 48px;\n  width: calc(100%-16px);\n  display: flex;\n  align-items: center;\n  padding: 4px;\n  margin: 0px 8px;\n  gap: 8px;\n  color: ", ";\n  cursor: pointer;\n  &:hover {\n    background: rgba(255, 255, 255, 0.1);\n    border-radius: 8px;\n  }\n  .appIcon {\n    border-radius: 6px;\n    display: inline-block;\n    position: relative;\n    overflow: hidden;\n    background: #332A4B;\n    &::after {\n      position: absolute;\n      top: 0;\n      right: 0;\n      bottom: 0;\n      left: 0;\n      transform: translateX(-100%);\n      background-image: linear-gradient(270deg, rgba(255, 255, 255, 0) 0%,\n      rgba(255, 255, 255, 0.3) 48.54%, rgba(255, 255, 255, 0) 100%);\n      animation: shimmer 1s infinite;\n      animation-delay: 0s;\n      content: '';\n    }\n    @keyframes shimmer {\n      100% {\n        transform: translateX(100%);\n      }\n    }\n  }\n\n  &:hover {\n    background: ", ";\n  }\n"], ["\n  height: 48px;\n  width: calc(100%-16px);\n  display: flex;\n  align-items: center;\n  padding: 4px;\n  margin: 0px 8px;\n  gap: 8px;\n  color: ", ";\n  cursor: pointer;\n  &:hover {\n    background: rgba(255, 255, 255, 0.1);\n    border-radius: 8px;\n  }\n  .appIcon {\n    border-radius: 6px;\n    display: inline-block;\n    position: relative;\n    overflow: hidden;\n    background: #332A4B;\n    &::after {\n      position: absolute;\n      top: 0;\n      right: 0;\n      bottom: 0;\n      left: 0;\n      transform: translateX(-100%);\n      background-image: linear-gradient(270deg, rgba(255, 255, 255, 0) 0%,\n      rgba(255, 255, 255, 0.3) 48.54%, rgba(255, 255, 255, 0) 100%);\n      animation: shimmer 1s infinite;\n      animation-delay: 0s;\n      content: '';\n    }\n    @keyframes shimmer {\n      100% {\n        transform: translateX(100%);\n      }\n    }\n  }\n\n  &:hover {\n    background: ", ";\n  }\n"])), (function(n) {
            return n.theme.colors.base900
        }
        ), (function(n) {
            return n.theme.colors.black10
        }
        )), Vn = ln.ZP.div(I || (I = _n(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  color: ", ";\n  gap: 4px;\n"], ["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  color: ", ";\n  gap: 4px;\n"])), (function(n) {
            var e;
            return null === (e = n.theme.colors) || void 0 === e ? void 0 : e.base900
        }
        )), Jn = function(n) {
            var e = n.popularGames
              , t = void 0 === e ? [] : e
              , i = n.isHome
              , r = n.searchList
              , o = (0,
            C.useState)("")
              , a = o[0]
              , l = o[1]
              , d = (0,
            C.useState)([])
              , c = d[0]
              , s = d[1]
              , u = (0,
            C.useRef)(null)
              , p = (0,
            D.I0)()
              , f = function(n) {
                (0,
                V.L9)("SearchBarQuery", {
                    searchQuery: n
                })
            };
            return (0,
            En.BX)(Hn, {
                style: {
                    backgroundImage: "url(".concat((0,
                    T.j)(q), ")")
                },
                children: [(null === r || void 0 === r ? void 0 : r.length) ? (0,
                En.BX)(En.HY, {
                    children: [(0,
                    En.BX)(Yn, {
                        children: [(0,
                        En.tZ)(Mn, {
                            id: "search-box",
                            type: "text",
                            title: (0,
                            jn.t)("searchGames"),
                            placeholder: (0,
                            jn.t)("searchGames"),
                            value: a,
                            onChange: Rn()((function(n) {
                                var e = n.target.value;
                                if ("" === e)
                                    return l(e),
                                    void s([]);
                                var t = e.toLowerCase().split(/\s+/)
                                  , i = null === r || void 0 === r ? void 0 : r.filter((function(n) {
                                    var e = n.name
                                      , i = void 0 === e ? "" : e;
                                    return t.every((function(n) {
                                        return i.toLocaleLowerCase().includes(n)
                                    }
                                    ))
                                }
                                ));
                                l(e),
                                s(i || [])
                            }
                            ), 250),
                            onClick: function() {
                                return (0,
                                V.L9)("SearchBarClicked")
                            },
                            autoComplete: "off",
                            ref: u,
                            onBlur: function() {
                                f(a),
                                p({
                                    type: J.Z.UPDATE_TEXTFIELD_FOCUS,
                                    payload: {
                                        uiTextfieldInFocus: !1
                                    }
                                })
                            },
                            onFocus: function() {
                                p({
                                    type: J.Z.UPDATE_TEXTFIELD_FOCUS,
                                    payload: {
                                        uiTextfieldInFocus: !0
                                    }
                                })
                            }
                        }), (0,
                        En.tZ)(Un.Z, {
                            style: {
                                marginLeft: "auto",
                                cursor: "pointer",
                                color: "rgba(0, 0, 0, 0.6)"
                            },
                            size: 14,
                            name: a.length > 0 ? "cross-thin" : "search",
                            onClick: function() {
                                var n;
                                null === (n = u.current) || void 0 === n || n.focus(),
                                f(a),
                                l(""),
                                s([])
                            }
                        })]
                    }), a.length > 0 && (0,
                    En.BX)(Wn, {
                        children: [c.map((function(n) {
                            return (0,
                            En.BX)(qn, {
                                onClick: function() {
                                    f(a),
                                    function(n) {
                                        (0,
                                        V.L9)("SearchBarGameClicked", {
                                            clickedPackageName: n.packageName
                                        }),
                                        window.location.href = null === n || void 0 === n ? void 0 : n.playPageUrl
                                    }(n)
                                },
                                children: [(0,
                                En.tZ)("img", {
                                    src: n.media.desktop.icon,
                                    width: 40,
                                    alt: n.name || "",
                                    height: 40,
                                    className: "appIcon"
                                }), (0,
                                En.tZ)(M.gd, {
                                    children: n.name
                                })]
                            })
                        }
                        )), a.length > 0 && 0 === c.length && (0,
                        En.BX)(Vn, {
                            children: [(0,
                            En.tZ)("img", {
                                src: (0,
                                T.j)(Dn),
                                alt: "no-results"
                            }), (0,
                            En.tZ)(M.lU, {
                                children: (0,
                                jn.t)("noSearchResults")
                            })]
                        })]
                    })]
                }) : null, (0,
                En.tZ)("div", {
                    className: "cluster top-right",
                    children: (t ? t[0].slice(0, Math.round(t[0].length / 4) + 1) : []).map((function(n, e) {
                        return (0,
                        En.tZ)(Nn.Z, {
                            game: n,
                            index: e,
                            isHome: i
                        })
                    }
                    ))
                }), (0,
                En.tZ)("div", {
                    className: "cluster bottom-right",
                    children: (t ? t[0].slice(-(Math.round(t[0].length / 2) + 1)) : []).map((function(n, e) {
                        return (0,
                        En.tZ)(Nn.Z, {
                            game: n,
                            index: e,
                            isHome: i
                        })
                    }
                    ))
                }), (0,
                En.tZ)("div", {
                    className: "cluster top-left",
                    children: (t ? t[1].slice(-(Math.round(t[1].length / 2) + 1)) : []).map((function(n, e) {
                        return (0,
                        En.tZ)(Nn.Z, {
                            game: n,
                            index: e,
                            isHome: i
                        })
                    }
                    ))
                }), (0,
                En.tZ)("div", {
                    className: "cluster bottom-left",
                    children: (t ? t[1].slice(0, Math.round(t[1].length / 4) + 1) : []).map((function(n, e) {
                        return (0,
                        En.tZ)(Nn.Z, {
                            game: n,
                            index: e,
                            isHome: i
                        })
                    }
                    ))
                })]
            })
        }, Qn = t(1705), Kn = (t(3096),
        function(n, e, t, i) {
            return new (t || (t = Promise))((function(r, o) {
                function a(n) {
                    try {
                        d(i.next(n))
                    } catch (e) {
                        o(e)
                    }
                }
                function l(n) {
                    try {
                        d(i.throw(n))
                    } catch (e) {
                        o(e)
                    }
                }
                function d(n) {
                    var e;
                    n.done ? r(n.value) : (e = n.value,
                    e instanceof t ? e : new t((function(n) {
                        n(e)
                    }
                    ))).then(a, l)
                }
                d((i = i.apply(n, e || [])).next())
            }
            ))
        }
        ), $n = function(n, e) {
            var t, i, r, o, a = {
                label: 0,
                sent: function() {
                    if (1 & r[0])
                        throw r[1];
                    return r[1]
                },
                trys: [],
                ops: []
            };
            return o = {
                next: l(0),
                throw: l(1),
                return: l(2)
            },
            "function" === typeof Symbol && (o[Symbol.iterator] = function() {
                return this
            }
            ),
            o;
            function l(o) {
                return function(l) {
                    return function(o) {
                        if (t)
                            throw new TypeError("Generator is already executing.");
                        for (; a; )
                            try {
                                if (t = 1,
                                i && (r = 2 & o[0] ? i.return : o[0] ? i.throw || ((r = i.return) && r.call(i),
                                0) : i.next) && !(r = r.call(i, o[1])).done)
                                    return r;
                                switch (i = 0,
                                r && (o = [2 & o[0], r.value]),
                                o[0]) {
                                case 0:
                                case 1:
                                    r = o;
                                    break;
                                case 4:
                                    return a.label++,
                                    {
                                        value: o[1],
                                        done: !1
                                    };
                                case 5:
                                    a.label++,
                                    i = o[1],
                                    o = [0];
                                    continue;
                                case 7:
                                    o = a.ops.pop(),
                                    a.trys.pop();
                                    continue;
                                default:
                                    if (!(r = (r = a.trys).length > 0 && r[r.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                        a = 0;
                                        continue
                                    }
                                    if (3 === o[0] && (!r || o[1] > r[0] && o[1] < r[3])) {
                                        a.label = o[1];
                                        break
                                    }
                                    if (6 === o[0] && a.label < r[1]) {
                                        a.label = r[1],
                                        r = o;
                                        break
                                    }
                                    if (r && a.label < r[2]) {
                                        a.label = r[2],
                                        a.ops.push(o);
                                        break
                                    }
                                    r[2] && a.ops.pop(),
                                    a.trys.pop();
                                    continue
                                }
                                o = e.call(n, a)
                            } catch (l) {
                                o = [6, l],
                                i = 0
                            } finally {
                                t = r = 0
                            }
                        if (5 & o[0])
                            throw o[1];
                        return {
                            value: o[0] ? o[1] : void 0,
                            done: !0
                        }
                    }([o, l])
                }
            }
        }, ne = function() {
            return (0,
            En.tZ)("svg", {
                width: "10",
                height: "13",
                viewBox: "0 0 10 13",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: (0,
                En.tZ)("path", {
                    d: "M1 10.7L1.3 0.5L9 7.83333H5.66667L7 11.6L5.2 12.5L3.7 8.6L1 10.7Z",
                    stroke: "#0B0223",
                    strokeLinejoin: "round"
                })
            })
        }, ee = {
            50010: !0,
            51036: !0,
            51024: !0,
            51037: !0,
            51076: !0,
            51080: !0,
            51084: !0,
            50024: !0
        }, te = function(n) {
            var e, t, i, r = n.isHome, o = void 0 !== r && r, a = (0,
            O.$)().t, l = (0,
            D.I0)(), d = (0,
            C.useState)(!1), c = d[0], s = d[1], u = (0,
            C.useState)(!1), p = u[0], f = u[1], h = (0,
            C.useState)(o), g = h[0], m = h[1], b = (0,
            D.v9)((function(n) {
                return n.play.isHtmlGame
            }
            )), v = (0,
            D.v9)((function(n) {
                var e;
                return null === (e = null === n || void 0 === n ? void 0 : n.preferences) || void 0 === e ? void 0 : e.recentPlayedApps
            }
            )), x = (0,
            C.useState)(!1), w = x[0], y = x[1], k = (0,
            C.useState)(!1), Z = k[0], P = k[1], S = (0,
            D.v9)((function(n) {
                return n.play.isSensitivityPopupOpen
            }
            )), A = (0,
            C.useState)(null), E = A[0], z = A[1], F = (0,
            C.useState)(null), I = F[0], tn = F[1], rn = (0,
            D.v9)((function(n) {
                return n.play.nativeMouseEnabled
            }
            )), on = (0,
            D.v9)((function(n) {
                var e;
                return null === (e = null === n || void 0 === n ? void 0 : n.preferences) || void 0 === e ? void 0 : e.legacyControls
            }
            )), an = (0,
            D.v9)((function(n) {
                var e;
                return null === (e = null === n || void 0 === n ? void 0 : n.play) || void 0 === e ? void 0 : e.mouseLockActive
            }
            )), ln = (0,
            D.v9)((function(n) {
                var e;
                return null === (e = null === n || void 0 === n ? void 0 : n.play) || void 0 === e ? void 0 : e.isFullscreen
            }
            )), dn = null === (e = null === L.ZP || void 0 === L.ZP ? void 0 : L.ZP.features) || void 0 === e ? void 0 : e.mouseLock, cn = (0,
            D.v9)((function(n) {
                return null === n || void 0 === n ? void 0 : n.imap.initialized
            }
            )), sn = (0,
            D.v9)((function(n) {
                return null === n || void 0 === n ? void 0 : n.ads.adsEnded
            }
            )), un = (0,
            C.useState)(!0), hn = un[0], gn = un[1], bn = (0,
            C.useState)(!1), vn = bn[0], xn = bn[1], wn = (0,
            D.v9)((function(n) {
                return null === n || void 0 === n ? void 0 : n.imap.guideVisible
            }
            )), yn = (0,
            D.v9)((function(n) {
                return null === n || void 0 === n ? void 0 : n.auth.isLoggedIn
            }
            )), kn = (0,
            D.v9)((function(n) {
                var e;
                return null === (e = null === n || void 0 === n ? void 0 : n.preferences) || void 0 === e ? void 0 : e.legacyControls
            }
            )), Fn = !("boolean" === typeof (null === (t = null === L.ZP || void 0 === L.ZP ? void 0 : L.ZP.features) || void 0 === t ? void 0 : t.nativeMouse) && !(null === (i = null === L.ZP || void 0 === L.ZP ? void 0 : L.ZP.features) || void 0 === i ? void 0 : i.nativeMouse)), In = (0,
            D.v9)((function(n) {
                return n.play.f11KeysPressed
            }
            )), Cn = (0,
            D.v9)((function(n) {
                return n.play.f11KeysProcessed
            }
            )), On = !!cn && !b, Bn = !!(cn || rn && !on) && !b, Un = rn && dn && !ln && !on && !L.ZP.features.enableAutoMouseLock && !g && !b, jn = o ? [] : v, Dn = function() {
                var n = 4;
                return On && (n += 1),
                Bn && (n += 1),
                Un && (n += 1),
                n
            }, Xn = function() {
                return Kn(void 0, void 0, void 0, (function() {
                    var n, e, t, i, r, a;
                    return $n(this, (function(l) {
                        switch (l.label) {
                        case 0:
                            return y(!0),
                            [4, (0,
                            L.Q3)(o ? "" : L.ZP.appInfo.appId)];
                        case 1:
                            return (n = l.sent()) && n.length ? (y(!1),
                            P(!1),
                            n && (tn(n),
                            e = sessionStorage.getItem("popularGamesList"),
                            t = e ? JSON.parse(e) : {},
                            e || (i = function(n) {
                                for (var e = n.length - 1; e > 0; e -= 1) {
                                    var t = Math.floor(Math.random() * (e + 1))
                                      , i = n[e];
                                    n[e] = n[t],
                                    n[t] = i
                                }
                                return n
                            }(n),
                            r = i.slice(0, 46),
                            a = Math.floor(r.length / 2),
                            t[0] = r.splice(0, a),
                            t[1] = r.splice(-a),
                            sessionStorage.setItem("popularGamesList", JSON.stringify(t))),
                            z(t)),
                            [2]) : (y(!1),
                            P(!0),
                            [2])
                        }
                    }
                    ))
                }
                ))
            };
            (0,
            C.useEffect)((function() {
                if (o)
                    Kn(void 0, void 0, void 0, (function() {
                        return $n(this, (function(n) {
                            switch (n.label) {
                            case 0:
                                return [4, Xn()];
                            case 1:
                                return n.sent(),
                                [2]
                            }
                        }
                        ))
                    }
                    ));
                else {
                    var n = localStorage.getItem("cloudyShowCount")
                      , e = localStorage.getItem("cloudyShownDate")
                      , t = Date.now();
                    if (e && n) {
                        var i = Math.abs(t - parseInt(e, 10));
                        (Math.ceil(i / 864e5) <= 1 && parseInt(n, 10) < 3 || parseInt(n, 10) >= 3) && (gn(!1),
                        xn(!0))
                    }
                }
            }
            ), []),
            (0,
            C.useEffect)((function() {
                (wn || an) && s(!1)
            }
            ), [wn, an]),
            (0,
            C.useEffect)((function() {
                g && Dn()
            }
            ), [g]);
            var Rn = (0,
            C.useCallback)((function() {
                var n = document.documentElement;
                ln || _.J.fullscreenElement || _.J.mozFullScreenElement || _.J.webkitFullscreenElement || _.J.msFullscreenElement ? ln && (_.J.fullscreenElement || _.J.mozFullScreenElement || _.J.webkitFullscreenElement || _.J.msFullscreenElement) && (0,
                nn.Qg)(_.J) : n && (n.requestFullscreen ? n.requestFullscreen().catch((function(n) {}
                )) : n.webkitRequestFullscreen ? n.webkitRequestFullscreen() : n.msRequestFullscreen ? n.msRequestFullscreen() : n.mozRequestFullScreen && n.mozRequestFullScreen()),
                X.Z.dispatch({
                    type: J.Z.SET_FULLSCREEN,
                    payload: {
                        isFullscreen: !ln
                    }
                }),
                (0,
                en.sZ)(),
                (0,
                en.Ul)()
            }
            ), [ln]);
            (0,
            C.useEffect)((function() {
                o || c || In !== Cn && (X.Z.dispatch({
                    type: J.Z.UPDATE_F11_PROCESSED
                }),
                Rn())
            }
            ), [In]),
            (0,
            C.useEffect)((function() {
                var n = function(n) {
                    var e = n.target;
                    "js-game-video" === (null === e || void 0 === e ? void 0 : e.id) && c && (s(!1),
                    (0,
                    V.L9)($.S5, {
                        element: "Cloudy",
                        state: "Close"
                    }))
                };
                return window.addEventListener("pointerdown", n),
                function() {
                    window.removeEventListener("pointerdown", n)
                }
            }
            ), [c]);
            var Nn, _n = function() {
                Fn || kn || l({
                    type: K.Z.LEGACY_CONTROLS
                }),
                l({
                    type: Q.Z.TOGGLE_SIDEBAR
                })
            }, Gn = function() {
                return Kn(void 0, void 0, void 0, (function() {
                    var n;
                    return $n(this, (function(e) {
                        switch (e.label) {
                        case 0:
                            return o ? [2] : (n = localStorage.getItem("portalExpandedLayoutShownCount") ? parseInt(localStorage.getItem("portalExpandedLayoutShownCount"), 10) : 0,
                            !sessionStorage.getItem("portalExpandedLayoutShown") && n < 3 ? (s(!0),
                            m(!0),
                            [4, Xn()]) : [3, 2]);
                        case 1:
                            return e.sent(),
                            (0,
                            V.L9)("PortalViewed", {
                                viewType: "Full",
                                pageType: "App"
                            }),
                            sessionStorage.setItem("portalExpandedLayoutShown", "true"),
                            localStorage.setItem("portalExpandedLayoutShownCount", "".concat(n + 1)),
                            [3, 3];
                        case 2:
                            c || (0,
                            V.L9)("PortalViewed", {
                                viewType: "Half",
                                pageType: "App"
                            }),
                            s(!c),
                            m(!1),
                            e.label = 3;
                        case 3:
                            return (0,
                            V.L9)($.S5, {
                                element: "Cloudy",
                                state: c ? "Close" : "Open"
                            }),
                            wn && _n(),
                            S && l({
                                type: J.Z.SET_SENSITIVITY_POPUP,
                                payload: {
                                    isSensitivityPopupOpen: !1
                                }
                            }),
                            [2]
                        }
                    }
                    ))
                }
                ))
            }, Hn = function() {
                S && l({
                    type: J.Z.SET_SENSITIVITY_POPUP,
                    payload: {
                        isSensitivityPopupOpen: !1
                    }
                })
            }, Yn = Dn();
            return Nn = L.ZP.appInfo.appId,
            ee[Nn] ? null : (0,
            En.BX)(fn, {
                cursor: o ? "auto" : "pointer",
                children: [!o && (0,
                En.tZ)("link", {
                    rel: "preload",
                    href: (0,
                    T.j)(U),
                    as: "image"
                }), !o && (0,
                En.tZ)("link", {
                    rel: "preload",
                    href: (0,
                    T.j)(q),
                    as: "image"
                }), (0,
                En.tZ)("link", {
                    rel: "preload",
                    href: (0,
                    T.j)(q),
                    as: "image"
                }), b && c && (0,
                En.tZ)("div", {
                    id: "js-game-video",
                    style: {
                        zIndex: 2,
                        position: "fixed",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0
                    }
                }), (o && !p || !o && hn && !p && sn) && (0,
                En.tZ)(C.default.Suspense, {
                    fallback: null,
                    children: (0,
                    En.tZ)(zn, {
                        isHome: o,
                        avatar: (0,
                        T.j)(B.Z),
                        onClose: function() {
                            if (f(!0),
                            (0,
                            V.L9)($.S5, {
                                element: "CloudyIntro",
                                page: o ? "Home" : "App"
                            }),
                            o)
                                s(!0),
                                m(!0),
                                (0,
                                V.L9)("PortalViewed", {
                                    viewType: "Full",
                                    pageType: "Home"
                                });
                            else {
                                var n = localStorage.getItem("cloudyShowCount")
                                  , e = localStorage.getItem("cloudyShownDate");
                                if (!n && !e)
                                    return localStorage.setItem("cloudyShowCount", "1"),
                                    void localStorage.setItem("cloudyShownDate", Date.now().toString());
                                var t = n ? parseInt(n, 10) + 1 : 1;
                                localStorage.setItem("cloudyShowCount", t.toString()),
                                localStorage.setItem("cloudyShownDate", Date.now().toString())
                            }
                        }
                    })
                }), (p || vn) && (!!o || sn) && (0,
                En.BX)(En.HY, {
                    children: [(0,
                    En.tZ)(pn, {
                        className: "cloudyAvatar",
                        id: "cloudy-avatar",
                        cursor: o ? "auto" : "pointer",
                        src: (0,
                        T.j)(B.Z),
                        alt: "avatar",
                        introDone: p,
                        onClick: Gn
                    }), c && (0,
                    En.BX)(En.HY, {
                        children: [!o && (0,
                        En.BX)(An, {
                            children: [!g && (0,
                            En.tZ)("div", {
                                className: "outermost-circle",
                                children: (0,
                                En.tZ)("div", {
                                    className: "slider",
                                    onClick: function() {
                                        return Kn(void 0, void 0, void 0, (function() {
                                            return $n(this, (function(n) {
                                                switch (n.label) {
                                                case 0:
                                                    return (0,
                                                    V.L9)("PortalViewed", {
                                                        viewType: "Full",
                                                        pageType: "App"
                                                    }),
                                                    m(!0),
                                                    [4, Xn()];
                                                case 1:
                                                    return n.sent(),
                                                    [2]
                                                }
                                            }
                                            ))
                                        }
                                        ))
                                    }
                                })
                            }), (0,
                            En.BX)("div", {
                                className: "inner-circle",
                                children: [jn.slice(0, 4).map((function(n, e) {
                                    return (0,
                                    En.tZ)("div", {
                                        className: "recent-tile",
                                        onClick: function() {
                                            0 === e && Gn()
                                        },
                                        children: (0,
                                        En.tZ)(Ln, {
                                            isRecentGame: !0,
                                            isCurrentGame: 0 === e,
                                            info: n
                                        })
                                    })
                                }
                                )), g && (0,
                                En.tZ)("div", {
                                    className: "slider expanded",
                                    onClick: Gn
                                })]
                            }), (0,
                            En.BX)("div", {
                                className: "innermost-circle",
                                children: [(0,
                                En.tZ)(mn, {
                                    actionItems: Yn,
                                    index: 0,
                                    onClick: Hn,
                                    children: (0,
                                    En.BX)(Zn, {
                                        children: [(0,
                                        En.tZ)(R.eJ, {
                                            isFromTopAction: !1
                                        }), (0,
                                        En.tZ)(Tn, {
                                            children: a(yn ? "profile" : "login")
                                        })]
                                    })
                                }), (0,
                                En.tZ)(mn, {
                                    actionItems: Yn,
                                    index: 1,
                                    onClick: Hn,
                                    children: (0,
                                    En.BX)(Zn, {
                                        children: [(0,
                                        En.tZ)(N.aU, {
                                            id: "ng-fs",
                                            children: (0,
                                            En.tZ)(_.Z, {})
                                        }), (0,
                                        En.tZ)(Tn, {
                                            children: a("fullScreen")
                                        })]
                                    })
                                }), !b && (0,
                                En.tZ)(mn, {
                                    actionItems: Yn,
                                    index: 2,
                                    onClick: Hn,
                                    children: (0,
                                    En.BX)(Zn, {
                                        children: [(0,
                                        En.tZ)(G.Z, {
                                            showSlider: !0
                                        }), (0,
                                        En.tZ)(Tn, {
                                            children: a("volume")
                                        })]
                                    })
                                }), (0,
                                En.tZ)(mn, {
                                    actionItems: Yn,
                                    index: 3,
                                    onClick: Hn,
                                    children: (0,
                                    En.BX)(Zn, {
                                        children: [(0,
                                        En.tZ)(R.o8, {}), (0,
                                        En.tZ)(Tn, {
                                            children: a("helpAndSupport")
                                        })]
                                    })
                                }), On && (0,
                                En.tZ)(mn, {
                                    actionItems: Yn,
                                    index: 4,
                                    onClick: Hn,
                                    children: (0,
                                    En.BX)(Zn, {
                                        children: [(0,
                                        En.tZ)(R.Qr, {
                                            widget: !1
                                        }), (0,
                                        En.tZ)(Tn, {
                                            children: a("controls.title")
                                        })]
                                    })
                                }), Bn && (0,
                                En.tZ)(mn, {
                                    actionItems: Yn,
                                    index: On ? 5 : 4,
                                    onClick: Hn,
                                    children: (0,
                                    En.BX)(Zn, {
                                        children: [(0,
                                        En.tZ)(Pn, {
                                            isOpen: S,
                                            children: (0,
                                            En.tZ)(H.Z, {
                                                fsWidget: !1,
                                                heading: "sensitivity",
                                                prepend: (0,
                                                En.tZ)(ne, {})
                                            })
                                        }), (0,
                                        En.tZ)(Tn, {
                                            children: a("mouseSensitivity")
                                        })]
                                    })
                                }), Un && (0,
                                En.tZ)(mn, {
                                    actionItems: Yn,
                                    index: On ? 6 : Bn ? 5 : 4,
                                    onClick: Hn,
                                    children: (0,
                                    En.BX)(Zn, {
                                        children: [(0,
                                        En.tZ)(R.yj, {}), (0,
                                        En.tZ)(Tn, {
                                            children: a("mouseLock")
                                        })]
                                    })
                                })]
                            })]
                        }), g && (0,
                        En.BX)(En.HY, {
                            children: [!o && (0,
                            En.tZ)("div", {
                                className: "overlay"
                            }), w && (0,
                            En.BX)(Sn, {
                                children: [(0,
                                En.tZ)(Y.Ho, {
                                    style: {
                                        marginBottom: "0px"
                                    }
                                }), (0,
                                En.BX)(M.kk, {
                                    white: !0,
                                    style: {
                                        marginBottom: "0px"
                                    },
                                    children: [a("loading"), "..."]
                                })]
                            }), Z && (0,
                            En.BX)(Sn, {
                                className: "error-indicator",
                                children: [(0,
                                En.tZ)("img", {
                                    src: (0,
                                    T.j)(j),
                                    alt: "now.gg"
                                }), (0,
                                En.tZ)(M.kk, {
                                    children: a("somethingWrong")
                                }), (0,
                                En.tZ)(W.z, {
                                    text: a("retry")
                                })]
                            }), (0,
                            En.tZ)(Jn, {
                                popularGames: E,
                                isHome: o,
                                searchList: I
                            }), !o && (0,
                            En.tZ)(Qn.O, {})]
                        })]
                    })]
                })]
            })
        }
    },
    1705: function(n, e, t) {
        t.d(e, {
            O: function() {
                return c
            }
        });
        var i = t(4888)
          , r = t(9930)
          , o = t(6971)
          , a = t(5617)
          , l = t(7997)
          , d = function() {
            return (d = Object.assign || function(n) {
                for (var e, t = 1, i = arguments.length; t < i; t++)
                    for (var r in e = arguments[t])
                        Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
                return n
            }
            ).apply(this, arguments)
        }
          , c = function(n) {
            var e = n.type
              , t = void 0 === e ? "dark" : e
              , c = n.showInfoIcon
              , s = void 0 === c || c
              , u = n.style
              , p = void 0 === u ? {} : u
              , f = n.iconStyle
              , h = void 0 === f ? {} : f
              , g = (0,
            a.I0)()
              , m = (0,
            a.v9)((function(n) {
                return n.play.showAboutUs
            }
            ));
            return (0,
            l.BX)("div", {
                style: d({
                    position: "absolute",
                    zIndex: 2,
                    display: "flex",
                    alignItems: "center"
                }, p),
                children: [(0,
                l.tZ)(i.Z, {
                    style: d({
                        margin: "20px 4px 20px 20px"
                    }, h),
                    themeType: t
                }), s && (0,
                l.tZ)(r.Z, {
                    name: "info",
                    id: "ng-info",
                    size: 15,
                    style: {
                        cursor: "pointer",
                        color: "light" === t ? "rgba(255, 255, 255, 0.6)" : "rgba(0, 0, 0, 0.6)",
                        padding: 5
                    },
                    onClick: function() {
                        g({
                            type: o.Z.MODAL_STATUS,
                            payload: {
                                showAboutUs: !m
                            }
                        })
                    }
                })]
            })
        };
        e.Z = c
    },
    9165: function(n, e, t) {
        t.d(e, {
            J: function() {
                return h
            },
            i: function() {
                return g
            }
        });
        var i = t(5628)
          , r = t(9305)
          , o = t(8294)
          , a = t(1508)
          , l = t(2820)
          , d = function() {
            return (d = Object.assign || function(n) {
                for (var e, t = 1, i = arguments.length; t < i; t++)
                    for (var r in e = arguments[t])
                        Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
                return n
            }
            ).apply(this, arguments)
        }
          , c = function(n, e, t, i) {
            return new (t || (t = Promise))((function(r, o) {
                function a(n) {
                    try {
                        d(i.next(n))
                    } catch (e) {
                        o(e)
                    }
                }
                function l(n) {
                    try {
                        d(i.throw(n))
                    } catch (e) {
                        o(e)
                    }
                }
                function d(n) {
                    var e;
                    n.done ? r(n.value) : (e = n.value,
                    e instanceof t ? e : new t((function(n) {
                        n(e)
                    }
                    ))).then(a, l)
                }
                d((i = i.apply(n, e || [])).next())
            }
            ))
        }
          , s = function(n, e) {
            var t, i, r, o, a = {
                label: 0,
                sent: function() {
                    if (1 & r[0])
                        throw r[1];
                    return r[1]
                },
                trys: [],
                ops: []
            };
            return o = {
                next: l(0),
                throw: l(1),
                return: l(2)
            },
            "function" === typeof Symbol && (o[Symbol.iterator] = function() {
                return this
            }
            ),
            o;
            function l(o) {
                return function(l) {
                    return function(o) {
                        if (t)
                            throw new TypeError("Generator is already executing.");
                        for (; a; )
                            try {
                                if (t = 1,
                                i && (r = 2 & o[0] ? i.return : o[0] ? i.throw || ((r = i.return) && r.call(i),
                                0) : i.next) && !(r = r.call(i, o[1])).done)
                                    return r;
                                switch (i = 0,
                                r && (o = [2 & o[0], r.value]),
                                o[0]) {
                                case 0:
                                case 1:
                                    r = o;
                                    break;
                                case 4:
                                    return a.label++,
                                    {
                                        value: o[1],
                                        done: !1
                                    };
                                case 5:
                                    a.label++,
                                    i = o[1],
                                    o = [0];
                                    continue;
                                case 7:
                                    o = a.ops.pop(),
                                    a.trys.pop();
                                    continue;
                                default:
                                    if (!(r = (r = a.trys).length > 0 && r[r.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                        a = 0;
                                        continue
                                    }
                                    if (3 === o[0] && (!r || o[1] > r[0] && o[1] < r[3])) {
                                        a.label = o[1];
                                        break
                                    }
                                    if (6 === o[0] && a.label < r[1]) {
                                        a.label = r[1],
                                        r = o;
                                        break
                                    }
                                    if (r && a.label < r[2]) {
                                        a.label = r[2],
                                        a.ops.push(o);
                                        break
                                    }
                                    r[2] && a.ops.pop(),
                                    a.trys.pop();
                                    continue
                                }
                                o = e.call(n, a)
                            } catch (l) {
                                o = [6, l],
                                i = 0
                            } finally {
                                t = r = 0
                            }
                        if (5 & o[0])
                            throw o[1];
                        return {
                            value: o[0] ? o[1] : void 0,
                            done: !0
                        }
                    }([o, l])
                }
            }
        }
          , u = "fe-user-preferences"
          , p = "fe-recent-played-apps"
          , f = function() {
            return JSON.parse(window.localStorage.getItem(u) || "[]").find((function(n) {
                return n.appId === o.ZP.appInfo.appId
            }
            ))
        }
          , h = function() {
            return function(n) {
                return c(void 0, void 0, void 0, (function() {
                    var e, t, h, g, m, b, v;
                    return s(this, (function(x) {
                        switch (x.label) {
                        case 0:
                            return a.Z.getState().auth.isLoggedIn ? [4, c(void 0, void 0, void 0, (function() {
                                var n, e;
                                return s(this, (function(t) {
                                    switch (t.label) {
                                    case 0:
                                        return n = f(),
                                        "Html" === o.ZP.appInfo.appType || n ? (e = {
                                            recentPlayedApp: o.ZP.appInfo.appId,
                                            appId: o.ZP.appInfo.appId,
                                            appPreferences: n ? n.appPreferences : {}
                                        },
                                        [4, r.Z.updateUserPreferences({}, e)]) : [2];
                                    case 1:
                                        return t.sent().status !== i.YR.Failure && (window.localStorage.removeItem(u),
                                        window.localStorage.removeItem(p)),
                                        [2]
                                    }
                                }
                                ))
                            }
                            ))] : [3, 3];
                        case 1:
                            return x.sent(),
                            [4, r.Z.getUserPreferences({
                                appId: o.ZP.appInfo.appId
                            }, {})];
                        case 2:
                            return (e = x.sent()).status !== i.YR.Failure && (t = e.appPreferences,
                            h = t.imapOverlay,
                            g = t.imapScheme,
                            m = t.volume,
                            n({
                                type: l.Z.UPDATE_PREFERENCES,
                                payload: d(d(d(d({}, void 0 !== h && {
                                    imapOverlay: h
                                }), void 0 !== g && {
                                    imapScheme: g
                                }), void 0 !== m && {
                                    volume: m
                                }), {
                                    recentPlayedApps: e.recentPlayedApps
                                })
                            })),
                            [3, 4];
                        case 3:
                            b = f(),
                            v = function() {
                                var n = JSON.parse(window.localStorage.getItem(p) || "[]")
                                  , e = n.find((function(n) {
                                    return n.appId === o.ZP.appInfo.appId
                                }
                                ));
                                return e ? n = n.filter((function(n) {
                                    return n.appId !== o.ZP.appInfo.appId
                                }
                                )) : e = {
                                    appId: o.ZP.appInfo.appId,
                                    icon: o.ZP.appInfo.media.icon,
                                    name: o.ZP.appInfo.appName,
                                    playUrl: window.location.href,
                                    packageName: o.ZP.appInfo.packageName
                                },
                                n.unshift(e),
                                window.localStorage.setItem(p, JSON.stringify(n)),
                                n
                            }(),
                            (b || v) && n({
                                type: l.Z.UPDATE_PREFERENCES,
                                payload: d(d({}, null === b || void 0 === b ? void 0 : b.appPreferences), {
                                    recentPlayedApps: v
                                })
                            }),
                            x.label = 4;
                        case 4:
                            return [2]
                        }
                    }
                    ))
                }
                ))
            }
        }
          , g = function(n) {
            var e = n.imapScheme
              , t = n.imapOverlay
              , p = n.volume;
            return function(n) {
                return c(void 0, void 0, void 0, (function() {
                    var c, f, h;
                    return s(this, (function(s) {
                        switch (s.label) {
                        case 0:
                            return c = a.Z.getState().auth.isLoggedIn,
                            f = d(d(d({}, void 0 !== t && {
                                imapOverlay: t
                            }), void 0 !== e && {
                                imapScheme: e
                            }), void 0 !== p && p >= 0 && p <= 1 && {
                                volume: p
                            }),
                            h = {
                                appId: o.ZP.appInfo.appId,
                                appPreferences: f
                            },
                            c ? [4, r.Z.updateUserPreferences({}, h)] : [3, 2];
                        case 1:
                            return s.sent().status !== i.YR.Failure && n({
                                type: l.Z.UPDATE_PREFERENCES,
                                payload: f
                            }),
                            [3, 3];
                        case 2:
                            !function(n) {
                                var e = n.appId
                                  , t = n.appPreferences
                                  , i = JSON.parse(window.localStorage.getItem(u) || "[]")
                                  , r = i.findIndex((function(n) {
                                    return n.appId === e
                                }
                                ));
                                -1 !== r ? i[r].appPreferences = d(d({}, i[r].appPreferences), t) : i.push({
                                    appId: e,
                                    appPreferences: t
                                }),
                                window.localStorage.setItem(u, JSON.stringify(i))
                            }(h),
                            n({
                                type: l.Z.UPDATE_PREFERENCES,
                                payload: f
                            }),
                            s.label = 3;
                        case 3:
                            return [2]
                        }
                    }
                    ))
                }
                ))
            }
        }
    },
    6296: function(n, e, t) {
        t.d(e, {
            LR: function() {
                return s
            }
        });
        var i = t(1739)
          , r = t(1508)
          , o = t(4003)
          , a = t(2820)
          , l = t(6971)
          , d = function(n, e, t, i) {
            return new (t || (t = Promise))((function(r, o) {
                function a(n) {
                    try {
                        d(i.next(n))
                    } catch (e) {
                        o(e)
                    }
                }
                function l(n) {
                    try {
                        d(i.throw(n))
                    } catch (e) {
                        o(e)
                    }
                }
                function d(n) {
                    var e;
                    n.done ? r(n.value) : (e = n.value,
                    e instanceof t ? e : new t((function(n) {
                        n(e)
                    }
                    ))).then(a, l)
                }
                d((i = i.apply(n, e || [])).next())
            }
            ))
        }
          , c = function(n, e) {
            var t, i, r, o, a = {
                label: 0,
                sent: function() {
                    if (1 & r[0])
                        throw r[1];
                    return r[1]
                },
                trys: [],
                ops: []
            };
            return o = {
                next: l(0),
                throw: l(1),
                return: l(2)
            },
            "function" === typeof Symbol && (o[Symbol.iterator] = function() {
                return this
            }
            ),
            o;
            function l(o) {
                return function(l) {
                    return function(o) {
                        if (t)
                            throw new TypeError("Generator is already executing.");
                        for (; a; )
                            try {
                                if (t = 1,
                                i && (r = 2 & o[0] ? i.return : o[0] ? i.throw || ((r = i.return) && r.call(i),
                                0) : i.next) && !(r = r.call(i, o[1])).done)
                                    return r;
                                switch (i = 0,
                                r && (o = [2 & o[0], r.value]),
                                o[0]) {
                                case 0:
                                case 1:
                                    r = o;
                                    break;
                                case 4:
                                    return a.label++,
                                    {
                                        value: o[1],
                                        done: !1
                                    };
                                case 5:
                                    a.label++,
                                    i = o[1],
                                    o = [0];
                                    continue;
                                case 7:
                                    o = a.ops.pop(),
                                    a.trys.pop();
                                    continue;
                                default:
                                    if (!(r = (r = a.trys).length > 0 && r[r.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                        a = 0;
                                        continue
                                    }
                                    if (3 === o[0] && (!r || o[1] > r[0] && o[1] < r[3])) {
                                        a.label = o[1];
                                        break
                                    }
                                    if (6 === o[0] && a.label < r[1]) {
                                        a.label = r[1],
                                        r = o;
                                        break
                                    }
                                    if (r && a.label < r[2]) {
                                        a.label = r[2],
                                        a.ops.push(o);
                                        break
                                    }
                                    r[2] && a.ops.pop(),
                                    a.trys.pop();
                                    continue
                                }
                                o = e.call(n, a)
                            } catch (l) {
                                o = [6, l],
                                i = 0
                            } finally {
                                t = r = 0
                            }
                        if (5 & o[0])
                            throw o[1];
                        return {
                            value: o[0] ? o[1] : void 0,
                            done: !0
                        }
                    }([o, l])
                }
            }
        }
          , s = function() {
            var n = r.Z.getState().play.videoRef;
            n && n.current && (n.current.muted = !0),
            r.Z.dispatch({
                type: l.Z.MUTE,
                payload: {
                    muted: !0
                }
            }),
            (0,
            o.fr)(i.vK.audio.mute)
        };
        e.ZP = function n(e, s) {
            return d(void 0, void 0, void 0, (function() {
                var u, p, f, h, g;
                return c(this, (function(m) {
                    switch (m.label) {
                    case 0:
                        return [4, t.e(608).then(t.bind(t, 5608))];
                    case 1:
                        return u = m.sent(),
                        [4, (0,
                        u.default.video)({
                            inline: !0
                        })];
                    case 2:
                        return p = m.sent(),
                        f = r.Z.getState(),
                        h = f.play.videoRef,
                        p.result ? (h && h.current && (h.current.muted = !1),
                        g = f.preferences.volume,
                        r.Z.dispatch({
                            type: a.Z.VOLUME,
                            payload: {
                                volume: g
                            }
                        }),
                        r.Z.dispatch({
                            type: l.Z.MUTE,
                            payload: {
                                muted: !1
                            }
                        }),
                        (0,
                        o.fr)(i.vK.audio.unmute)) : s || setTimeout((function() {
                            return d(void 0, void 0, void 0, (function() {
                                return c(this, (function(t) {
                                    switch (t.label) {
                                    case 0:
                                        return [4, n(e, !0)];
                                    case 1:
                                        return t.sent(),
                                        [2]
                                    }
                                }
                                ))
                            }
                            ))
                        }
                        ), 500),
                        [2]
                    }
                }
                ))
            }
            ))
        }
    },
    1219: function(n, e) {
        e.Z = {
            src: "/play/_next/static/media/cloudyAvatar.88e9c8c4.svg",
            height: 80,
            width: 80
        }
    }
}]);
//# sourceMappingURL=219-160ca822e3d5bbe0.js.map
