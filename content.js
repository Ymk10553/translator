!function(t) {
    var e = {};
    function n(o) {
        if (e[o])
            return e[o].exports;
        var r = e[o] = {
            i: o,
            l: !1,
            exports: {}
        };
        return t[o].call(r.exports, r, r.exports, n),
        r.l = !0,
        r.exports
    }
    n.m = t,
    n.c = e,
    n.d = function(t, e, o) {
        n.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: o
        })
    }
    ,
    n.r = function(t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }
    ,
    n.t = function(t, e) {
        if (1 & e && (t = n(t)),
        8 & e)
            return t;
        if (4 & e && "object" == typeof t && t && t.__esModule)
            return t;
        var o = Object.create(null);
        if (n.r(o),
        Object.defineProperty(o, "default", {
            enumerable: !0,
            value: t
        }),
        2 & e && "string" != typeof t)
            for (var r in t)
                n.d(o, r, function(e) {
                    return t[e]
                }
                .bind(null, r));
        return o
    }
    ,
    n.n = function(t) {
        var e = t && t.__esModule ? function() {
            return t.default
        }
        : function() {
            return t
        }
        ;
        return n.d(e, "a", e),
        e
    }
    ,
    n.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }
    ,
    n.p = "",
    n(n.s = 15)
}([function(t, e) {
    t.exports = function(t) {
        var e = typeof t;
        return null != t && ("object" == e || "function" == e)
    }
}
, function(t, e, n) {
    var o = n(5)
      , r = "object" == typeof self && self && self.Object === Object && self
      , c = o || r || Function("return this")();
    t.exports = c
}
, function(t, e, n) {
    var o = n(1).Symbol;
    t.exports = o
}
, function(t, e, n) {
    var o = n(0)
      , r = n(4)
      , c = n(7)
      , i = Math.max
      , u = Math.min;
    t.exports = function(t, e, n) {
        var a, s, f, l, d, p, b = 0, v = !1, m = !1, y = !0;
        if ("function" != typeof t)
            throw new TypeError("Expected a function");
        function h(e) {
            var n = a
              , o = s;
            return a = s = void 0,
            b = e,
            l = t.apply(o, n)
        }
        function g(t) {
            return b = t,
            d = setTimeout(j, e),
            v ? h(t) : l
        }
        function x(t) {
            var n = t - p;
            return void 0 === p || n >= e || n < 0 || m && t - b >= f
        }
        function j() {
            var t = r();
            if (x(t))
                return w(t);
            d = setTimeout(j, function(t) {
                var n = e - (t - p);
                return m ? u(n, f - (t - b)) : n
            }(t))
        }
        function w(t) {
            return d = void 0,
            y && a ? h(t) : (a = s = void 0,
            l)
        }
        function O() {
            var t = r()
              , n = x(t);
            if (a = arguments,
            s = this,
            p = t,
            n) {
                if (void 0 === d)
                    return g(p);
                if (m)
                    return clearTimeout(d),
                    d = setTimeout(j, e),
                    h(p)
            }
            return void 0 === d && (d = setTimeout(j, e)),
            l
        }
        return e = c(e) || 0,
        o(n) && (v = !!n.leading,
        f = (m = "maxWait"in n) ? i(c(n.maxWait) || 0, e) : f,
        y = "trailing"in n ? !!n.trailing : y),
        O.cancel = function() {
            void 0 !== d && clearTimeout(d),
            b = 0,
            a = p = s = d = void 0
        }
        ,
        O.flush = function() {
            return void 0 === d ? l : w(r())
        }
        ,
        O
    }
}
, function(t, e, n) {
    var o = n(1);
    t.exports = function() {
        return o.Date.now()
    }
}
, function(t, e, n) {
    (function(e) {
        var n = "object" == typeof e && e && e.Object === Object && e;
        t.exports = n
    }
    ).call(this, n(6))
}
, function(t, e) {
    var n;
    n = function() {
        return this
    }();
    try {
        n = n || new Function("return this")()
    } catch (t) {
        "object" == typeof window && (n = window)
    }
    t.exports = n
}
, function(t, e, n) {
    var o = n(8)
      , r = n(0)
      , c = n(10)
      , i = /^[-+]0x[0-9a-f]+$/i
      , u = /^0b[01]+$/i
      , a = /^0o[0-7]+$/i
      , s = parseInt;
    t.exports = function(t) {
        if ("number" == typeof t)
            return t;
        if (c(t))
            return NaN;
        if (r(t)) {
            var e = "function" == typeof t.valueOf ? t.valueOf() : t;
            t = r(e) ? e + "" : e
        }
        if ("string" != typeof t)
            return 0 === t ? t : +t;
        t = o(t);
        var n = u.test(t);
        return n || a.test(t) ? s(t.slice(2), n ? 2 : 8) : i.test(t) ? NaN : +t
    }
}
, function(t, e, n) {
    var o = n(9)
      , r = /^\s+/;
    t.exports = function(t) {
        return t ? t.slice(0, o(t) + 1).replace(r, "") : t
    }
}
, function(t, e) {
    var n = /\s/;
    t.exports = function(t) {
        for (var e = t.length; e-- && n.test(t.charAt(e)); )
            ;
        return e
    }
}
, function(t, e, n) {
    var o = n(11)
      , r = n(14);
    t.exports = function(t) {
        return "symbol" == typeof t || r(t) && "[object Symbol]" == o(t)
    }
}
, function(t, e, n) {
    var o = n(2)
      , r = n(12)
      , c = n(13)
      , i = o ? o.toStringTag : void 0;
    t.exports = function(t) {
        return null == t ? void 0 === t ? "[object Undefined]" : "[object Null]" : i && i in Object(t) ? r(t) : c(t)
    }
}
, function(t, e, n) {
    var o = n(2)
      , r = Object.prototype
      , c = r.hasOwnProperty
      , i = r.toString
      , u = o ? o.toStringTag : void 0;
    t.exports = function(t) {
        var e = c.call(t, u)
          , n = t[u];
        try {
            t[u] = void 0;
            var o = !0
        } catch (t) {}
        var r = i.call(t);
        return o && (e ? t[u] = n : delete t[u]),
        r
    }
}
, function(t, e) {
    var n = Object.prototype.toString;
    t.exports = function(t) {
        return n.call(t)
    }
}
, function(t, e) {
    t.exports = function(t) {
        return null != t && "object" == typeof t
    }
}
, function(t, e, n) {
    "use strict";
    n.r(e);
    var o = n(3)
      , r = function(t) {
        var e = t.path
          , n = t.offsetSizeX
          , o = t.offsetSizeY;
        return "body button, body [type='button'], body input[type='reset'], body input[type='submit'], body [role=\"button\"], ::-webkit-search-cancel-button, ::-webkit-search-decoration, ::-webkit-scrollbar-button, ::-webkit-file-upload-button, [role^=button], .cc_pointer, [type=\"search\"]::-webkit-search-cancel-button, a, select, [type=\"search\"]::-webkit-search-decoration, .paper-button, .ytp-progress-bar-container, input[type=submit], :link, :visited, a > *, img,  ::-webkit-scrollbar-button, .ogdlpmhglpejoiomcodnpjnfgcpmgale_pointer, ::-webkit-file-upload-button, .ytp-volume-panel, #myogdlpmhglpejoiomcodnpjnfgcpmgale .icon, body .".concat("custom-cursor-on-hover", ' {cursor: url("').concat(e, '") ').concat(n, " ").concat(o, ", pointer !important;} ")
    }
      , c = function(t) {
        var e = t.path
          , n = t.offsetSizeX
          , o = t.offsetSizeY;
        return "html,body,body select,body .".concat("custom-cursor-default-hover", ' {cursor: url("').concat(e, '") ').concat(n, " ").concat(o, ", auto !important;}")
    }
      , i = function() {
        return document.body
    }
      , u = n.n(o)()((function(t) {
        var e = t.target.classList;
        if (!e.contains("custom-cursor-on-hover") && !e.contains("custom-cursor-default-hover")) {
            var n = getComputedStyle(t.target, null).getPropertyValue("cursor");
            "pointer" === n && t.target.classList.add("custom-cursor-on-hover"),
            "default" !== n && "auto" !== n || t.target.classList.add("custom-cursor-default-hover")
        }
    }
    ), 40, {
        leading: !0
    })
      , a = function(t) {
        s();
        var e = t.cursor
          , n = [];
        e.frames.forEach((function(t) {
            n.push({
                cursor: "url(".concat(t, ") ").concat(e.offsetX, " ").concat(e.offsetY, ", auto"),
                backfaceVisibility: "hidden"
            })
        }
        ));
        var o = {
            id: "custom-cursor-animated",
            duration: t.animationSpeed,
            iterations: 1 / 0
        };
        i().animate(n, o)
    }
      , s = function() {
        var t;
        null === (t = i().getAnimations().find((function(t) {
            return "custom-cursor-animated" === t.id
        }
        ))) || void 0 === t || t.cancel()
    }
      , f = function(t) {
        var e = document.getElementById("custom-cursor");
        if (e)
            e.innerHTML = "",
            e.appendChild(document.createTextNode(r(t.pointer))),
            t.isAnimated ? a(t) : e.appendChild(document.createTextNode(c(t.cursor)));
        else {
            var n = document.createElement("style");
            n.id = "custom-cursor",
            n.type = "text/css",
            n.appendChild(document.createTextNode(r(t.pointer))),
            t.isAnimated ? a(t) : n.appendChild(document.createTextNode(c(t.cursor))),
            document.head.appendChild(n)
        }
        document.body.removeEventListener("mouseover", u),
        document.body.addEventListener("mouseover", u)
    }
      , l = function() {
        chrome.storage.local.get("selected", (function(t) {
            var e = t.selected;
            if (e && null !== e)
                if (document.body)
                    f(e);
                else {
                    var n = new MutationObserver((function() {
                        document.body && (n.disconnect(),
                        f(e))
                    }
                    ));
                    n.observe(document, {
                        childList: !0,
                        subtree: !0
                    })
                }
        }
        ))
    }
      , d = function() {
        var t;
        (t = document.getElementById("custom-cursor")) && (t.parentNode.removeChild(t),
        s())
    }
      , p = function(t, e, n) {
        switch (t.action) {
        case "clear":
        case "disableApp":
            d();
            break;
        case "changeCursorPack":
            l();
            break;
        default:
            console.log("")
        }
    };
    chrome.runtime.onMessage.addListener((function(t, e, n) {
        p(t, e, n),
        n({})
    }
    )),
    l()
}
]);
