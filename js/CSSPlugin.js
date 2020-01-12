/*!
 * VERSION: 1.18.0
 * DATE: 2015-09-05
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2015, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 */
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function() {
    "use strict";
    _gsScope._gsDefine("plugins.CSSPlugin", ["plugins.TweenPlugin", "TweenLite"], function(t, e) {
        var i, r, s, n, a = function() {
            t.call(this, "css"),
            this._overwriteProps.length = 0,
            this.setRatio = a.prototype.setRatio
        }, o = _gsScope._gsDefine.globals, l = {}, h = a.prototype = new t("css");
        h.constructor = a,
        a.version = "1.18.0",
        a.API = 2,
        a.defaultTransformPerspective = 0,
        a.defaultSkewType = "compensated",
        a.defaultSmoothOrigin = !0,
        h = "px",
        a.suffixMap = {
            top: h,
            right: h,
            bottom: h,
            left: h,
            width: h,
            height: h,
            fontSize: h,
            padding: h,
            margin: h,
            perspective: h,
            lineHeight: ""
        };
        var u, f, c, _, p, d, m = /(?:\d|\-\d|\.\d|\-\.\d)+/g, g = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g, v = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi, y = /(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g, x = /(?:\d|\-|\+|=|#|\.)*/g, T = /opacity *= *([^)]*)/i, w = /opacity:([^;]*)/i, b = /alpha\(opacity *=.+?\)/i, P = /^(rgb|hsl)/, S = /([A-Z])/g, O = /-([a-z])/gi, C = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi, k = function(t, e) {
            return e.toUpperCase()
        }, R = /(?:Left|Right|Width)/i, A = /(M11|M12|M21|M22)=[\d\-\.e]+/gi, M = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i, D = /,(?=[^\)]*(?:\(|$))/gi, L = Math.PI / 180, N = 180 / Math.PI, F = {}, X = document, z = function(t) {
            return X.createElementNS ? X.createElementNS("http://www.w3.org/1999/xhtml", t) : X.createElement(t)
        }, B = z("div"), I = z("img"), E = a._internals = {
            _specialProps: l
        }, Y = navigator.userAgent, W = function() {
            var t = Y.indexOf("Android")
              , e = z("a");
            return c = -1 !== Y.indexOf("Safari") && -1 === Y.indexOf("Chrome") && (-1 === t || Number(Y.substr(t + 8, 1)) > 3),
            p = c && 6 > Number(Y.substr(Y.indexOf("Version/") + 8, 1)),
            _ = -1 !== Y.indexOf("Firefox"),
            (/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(Y) || /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(Y)) && (d = parseFloat(RegExp.$1)),
            e ? (e.style.cssText = "top:1px;opacity:.55;",
            /^0.55/.test(e.style.opacity)) : !1
        }(), V = function(t) {
            return T.test("string" == typeof t ? t : (t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1
        }, j = function(t) {
            window.console && console.log(t)
        }, G = "", U = "", q = function(t, e) {
            e = e || B;
            var i, r, s = e.style;
            if (void 0 !== s[t])
                return t;
            for (t = t.charAt(0).toUpperCase() + t.substr(1),
            i = ["O", "Moz", "ms", "Ms", "Webkit"],
            r = 5; --r > -1 && void 0 === s[i[r] + t]; )
                ;
            return r >= 0 ? (U = 3 === r ? "ms" : i[r],
            G = "-" + U.toLowerCase() + "-",
            U + t) : null
        }, H = X.defaultView ? X.defaultView.getComputedStyle : function() {}
        , Q = a.getStyle = function(t, e, i, r, s) {
            var n;
            return W || "opacity" !== e ? (!r && t.style[e] ? n = t.style[e] : (i = i || H(t)) ? n = i[e] || i.getPropertyValue(e) || i.getPropertyValue(e.replace(S, "-$1").toLowerCase()) : t.currentStyle && (n = t.currentStyle[e]),
            null == s || n && "none" !== n && "auto" !== n && "auto auto" !== n ? n : s) : V(t)
        }
        , Z = E.convertToPixels = function(t, i, r, s, n) {
            if ("px" === s || !s)
                return r;
            if ("auto" === s || !r)
                return 0;
            var o, l, h, u = R.test(i), f = t, c = B.style, _ = 0 > r;
            if (_ && (r = -r),
            "%" === s && -1 !== i.indexOf("border"))
                o = r / 100 * (u ? t.clientWidth : t.clientHeight);
            else {
                if (c.cssText = "border:0 solid red;position:" + Q(t, "position") + ";line-height:0;",
                "%" !== s && f.appendChild && "v" !== s.charAt(0) && "rem" !== s)
                    c[u ? "borderLeftWidth" : "borderTopWidth"] = r + s;
                else {
                    if (f = t.parentNode || X.body,
                    l = f._gsCache,
                    h = e.ticker.frame,
                    l && u && l.time === h)
                        return l.width * r / 100;
                    c[u ? "width" : "height"] = r + s
                }
                f.appendChild(B),
                o = parseFloat(B[u ? "offsetWidth" : "offsetHeight"]),
                f.removeChild(B),
                u && "%" === s && a.cacheWidths !== !1 && (l = f._gsCache = f._gsCache || {},
                l.time = h,
                l.width = 100 * (o / r)),
                0 !== o || n || (o = Z(t, i, r, s, !0))
            }
            return _ ? -o : o
        }
        , $ = E.calculateOffset = function(t, e, i) {
            if ("absolute" !== Q(t, "position", i))
                return 0;
            var r = "left" === e ? "Left" : "Top"
              , s = Q(t, "margin" + r, i);
            return t["offset" + r] - (Z(t, e, parseFloat(s), s.replace(x, "")) || 0)
        }
        , K = function(t, e) {
            var i, r, s, n = {};
            if (e = e || H(t, null))
                if (i = e.length)
                    for (; --i > -1; )
                        s = e[i],
                        (-1 === s.indexOf("-transform") || Se === s) && (n[s.replace(O, k)] = e.getPropertyValue(s));
                else
                    for (i in e)
                        (-1 === i.indexOf("Transform") || Pe === i) && (n[i] = e[i]);
            else if (e = t.currentStyle || t.style)
                for (i in e)
                    "string" == typeof i && void 0 === n[i] && (n[i.replace(O, k)] = e[i]);
            return W || (n.opacity = V(t)),
            r = ze(t, e, !1),
            n.rotation = r.rotation,
            n.skewX = r.skewX,
            n.scaleX = r.scaleX,
            n.scaleY = r.scaleY,
            n.x = r.x,
            n.y = r.y,
            Ce && (n.z = r.z,
            n.rotationX = r.rotationX,
            n.rotationY = r.rotationY,
            n.scaleZ = r.scaleZ),
            n.filters && delete n.filters,
            n
        }, J = function(t, e, i, r, s) {
            var n, a, o, l = {}, h = t.style;
            for (a in i)
                "cssText" !== a && "length" !== a && isNaN(a) && (e[a] !== (n = i[a]) || s && s[a]) && -1 === a.indexOf("Origin") && ("number" == typeof n || "string" == typeof n) && (l[a] = "auto" !== n || "left" !== a && "top" !== a ? "" !== n && "auto" !== n && "none" !== n || "string" != typeof e[a] || "" === e[a].replace(y, "") ? n : 0 : $(t, a),
                void 0 !== h[a] && (o = new pe(h,a,h[a],o)));
            if (r)
                for (a in r)
                    "className" !== a && (l[a] = r[a]);
            return {
                difs: l,
                firstMPT: o
            }
        }, te = {
            width: ["Left", "Right"],
            height: ["Top", "Bottom"]
        }, ee = ["marginLeft", "marginRight", "marginTop", "marginBottom"], ie = function(t, e, i) {
            var r = parseFloat("width" === e ? t.offsetWidth : t.offsetHeight)
              , s = te[e]
              , n = s.length;
            for (i = i || H(t, null); --n > -1; )
                r -= parseFloat(Q(t, "padding" + s[n], i, !0)) || 0,
                r -= parseFloat(Q(t, "border" + s[n] + "Width", i, !0)) || 0;
            return r
        }, re = function(t, e) {
            if ("contain" === t || "auto" === t || "auto auto" === t)
                return t + " ";
            (null == t || "" === t) && (t = "0 0");
            var i = t.split(" ")
              , r = -1 !== t.indexOf("left") ? "0%" : -1 !== t.indexOf("right") ? "100%" : i[0]
              , s = -1 !== t.indexOf("top") ? "0%" : -1 !== t.indexOf("bottom") ? "100%" : i[1];
            return null == s ? s = "center" === r ? "50%" : "0" : "center" === s && (s = "50%"),
            ("center" === r || isNaN(parseFloat(r)) && -1 === (r + "").indexOf("=")) && (r = "50%"),
            t = r + " " + s + (i.length > 2 ? " " + i[2] : ""),
            e && (e.oxp = -1 !== r.indexOf("%"),
            e.oyp = -1 !== s.indexOf("%"),
            e.oxr = "=" === r.charAt(1),
            e.oyr = "=" === s.charAt(1),
            e.ox = parseFloat(r.replace(y, "")),
            e.oy = parseFloat(s.replace(y, "")),
            e.v = t),
            e || t
        }, se = function(t, e) {
            return "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) : parseFloat(t) - parseFloat(e)
        }, ne = function(t, e) {
            return null == t ? e : "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) + e : parseFloat(t)
        }, ae = function(t, e, i, r) {
            var s, n, a, o, l, h = 1e-6;
            return null == t ? o = e : "number" == typeof t ? o = t : (s = 360,
            n = t.split("_"),
            l = "=" === t.charAt(1),
            a = (l ? parseInt(t.charAt(0) + "1", 10) * parseFloat(n[0].substr(2)) : parseFloat(n[0])) * (-1 === t.indexOf("rad") ? 1 : N) - (l ? 0 : e),
            n.length && (r && (r[i] = e + a),
            -1 !== t.indexOf("short") && (a %= s,
            a !== a % (s / 2) && (a = 0 > a ? a + s : a - s)),
            -1 !== t.indexOf("_cw") && 0 > a ? a = (a + 9999999999 * s) % s - (0 | a / s) * s : -1 !== t.indexOf("ccw") && a > 0 && (a = (a - 9999999999 * s) % s - (0 | a / s) * s)),
            o = e + a),
            h > o && o > -h && (o = 0),
            o
        }, oe = {
            aqua: [0, 255, 255],
            lime: [0, 255, 0],
            silver: [192, 192, 192],
            black: [0, 0, 0],
            maroon: [128, 0, 0],
            teal: [0, 128, 128],
            blue: [0, 0, 255],
            navy: [0, 0, 128],
            white: [255, 255, 255],
            fuchsia: [255, 0, 255],
            olive: [128, 128, 0],
            yellow: [255, 255, 0],
            orange: [255, 165, 0],
            gray: [128, 128, 128],
            purple: [128, 0, 128],
            green: [0, 128, 0],
            red: [255, 0, 0],
            pink: [255, 192, 203],
            cyan: [0, 255, 255],
            transparent: [255, 255, 255, 0]
        }, le = function(t, e, i) {
            return t = 0 > t ? t + 1 : t > 1 ? t - 1 : t,
            0 | 255 * (1 > 6 * t ? e + 6 * (i - e) * t : .5 > t ? i : 2 > 3 * t ? e + 6 * (i - e) * (2 / 3 - t) : e) + .5
        }, he = a.parseColor = function(t, e) {
            var i, r, s, n, a, o, l, h, u, f, c;
            if (t)
                if ("number" == typeof t)
                    i = [t >> 16, 255 & t >> 8, 255 & t];
                else {
                    if ("," === t.charAt(t.length - 1) && (t = t.substr(0, t.length - 1)),
                    oe[t])
                        i = oe[t];
                    else if ("#" === t.charAt(0))
                        4 === t.length && (r = t.charAt(1),
                        s = t.charAt(2),
                        n = t.charAt(3),
                        t = "#" + r + r + s + s + n + n),
                        t = parseInt(t.substr(1), 16),
                        i = [t >> 16, 255 & t >> 8, 255 & t];
                    else if ("hsl" === t.substr(0, 3))
                        if (i = c = t.match(m),
                        e) {
                            if (-1 !== t.indexOf("="))
                                return t.match(g)
                        } else
                            a = Number(i[0]) % 360 / 360,
                            o = Number(i[1]) / 100,
                            l = Number(i[2]) / 100,
                            s = .5 >= l ? l * (o + 1) : l + o - l * o,
                            r = 2 * l - s,
                            i.length > 3 && (i[3] = Number(t[3])),
                            i[0] = le(a + 1 / 3, r, s),
                            i[1] = le(a, r, s),
                            i[2] = le(a - 1 / 3, r, s);
                    else
                        i = t.match(m) || oe.transparent;
                    i[0] = Number(i[0]),
                    i[1] = Number(i[1]),
                    i[2] = Number(i[2]),
                    i.length > 3 && (i[3] = Number(i[3]))
                }
            else
                i = oe.black;
            return e && !c && (r = i[0] / 255,
            s = i[1] / 255,
            n = i[2] / 255,
            h = Math.max(r, s, n),
            u = Math.min(r, s, n),
            l = (h + u) / 2,
            h === u ? a = o = 0 : (f = h - u,
            o = l > .5 ? f / (2 - h - u) : f / (h + u),
            a = h === r ? (s - n) / f + (n > s ? 6 : 0) : h === s ? (n - r) / f + 2 : (r - s) / f + 4,
            a *= 60),
            i[0] = 0 | a + .5,
            i[1] = 0 | 100 * o + .5,
            i[2] = 0 | 100 * l + .5),
            i
        }
        , ue = function(t, e) {
            var i, r, s, n = t.match(fe) || [], a = 0, o = n.length ? "" : t;
            for (i = 0; n.length > i; i++)
                r = n[i],
                s = t.substr(a, t.indexOf(r, a) - a),
                a += s.length + r.length,
                r = he(r, e),
                3 === r.length && r.push(1),
                o += s + (e ? "hsla(" + r[0] + "," + r[1] + "%," + r[2] + "%," + r[3] : "rgba(" + r.join(",")) + ")";
            return o
        }, fe = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#.+?\\b";
        for (h in oe)
            fe += "|" + h + "\\b";
        fe = RegExp(fe + ")", "gi"),
        a.colorStringFilter = function(t) {
            var e, i = t[0] + t[1];
            fe.lastIndex = 0,
            fe.test(i) && (e = -1 !== i.indexOf("hsl(") || -1 !== i.indexOf("hsla("),
            t[0] = ue(t[0], e),
            t[1] = ue(t[1], e))
        }
        ,
        e.defaultStringFilter || (e.defaultStringFilter = a.colorStringFilter);
        var ce = function(t, e, i, r) {
            if (null == t)
                return function(t) {
                    return t
                }
                ;
            var s, n = e ? (t.match(fe) || [""])[0] : "", a = t.split(n).join("").match(v) || [], o = t.substr(0, t.indexOf(a[0])), l = ")" === t.charAt(t.length - 1) ? ")" : "", h = -1 !== t.indexOf(" ") ? " " : ",", u = a.length, f = u > 0 ? a[0].replace(m, "") : "";
            return u ? s = e ? function(t) {
                var e, c, _, p;
                if ("number" == typeof t)
                    t += f;
                else if (r && D.test(t)) {
                    for (p = t.replace(D, "|").split("|"),
                    _ = 0; p.length > _; _++)
                        p[_] = s(p[_]);
                    return p.join(",")
                }
                if (e = (t.match(fe) || [n])[0],
                c = t.split(e).join("").match(v) || [],
                _ = c.length,
                u > _--)
                    for (; u > ++_; )
                        c[_] = i ? c[0 | (_ - 1) / 2] : a[_];
                return o + c.join(h) + h + e + l + (-1 !== t.indexOf("inset") ? " inset" : "")
            }
            : function(t) {
                var e, n, c;
                if ("number" == typeof t)
                    t += f;
                else if (r && D.test(t)) {
                    for (n = t.replace(D, "|").split("|"),
                    c = 0; n.length > c; c++)
                        n[c] = s(n[c]);
                    return n.join(",")
                }
                if (e = t.match(v) || [],
                c = e.length,
                u > c--)
                    for (; u > ++c; )
                        e[c] = i ? e[0 | (c - 1) / 2] : a[c];
                return o + e.join(h) + l
            }
            : function(t) {
                return t
            }
        }
          , _e = function(t) {
            return t = t.split(","),
            function(e, i, r, s, n, a, o) {
                var l, h = (i + "").split(" ");
                for (o = {},
                l = 0; 4 > l; l++)
                    o[t[l]] = h[l] = h[l] || h[(l - 1) / 2 >> 0];
                return s.parse(e, o, n, a)
            }
        }
          , pe = (E._setPluginRatio = function(t) {
            this.plugin.setRatio(t);
            for (var e, i, r, s, n = this.data, a = n.proxy, o = n.firstMPT, l = 1e-6; o; )
                e = a[o.v],
                o.r ? e = Math.round(e) : l > e && e > -l && (e = 0),
                o.t[o.p] = e,
                o = o._next;
            if (n.autoRotate && (n.autoRotate.rotation = a.rotation),
            1 === t)
                for (o = n.firstMPT; o; ) {
                    if (i = o.t,
                    i.type) {
                        if (1 === i.type) {
                            for (s = i.xs0 + i.s + i.xs1,
                            r = 1; i.l > r; r++)
                                s += i["xn" + r] + i["xs" + (r + 1)];
                            i.e = s
                        }
                    } else
                        i.e = i.s + i.xs0;
                    o = o._next
                }
        }
        ,
        function(t, e, i, r, s) {
            this.t = t,
            this.p = e,
            this.v = i,
            this.r = s,
            r && (r._prev = this,
            this._next = r)
        }
        )
          , de = (E._parseToProxy = function(t, e, i, r, s, n) {
            var a, o, l, h, u, f = r, c = {}, _ = {}, p = i._transform, d = F;
            for (i._transform = null,
            F = e,
            r = u = i.parse(t, e, r, s),
            F = d,
            n && (i._transform = p,
            f && (f._prev = null,
            f._prev && (f._prev._next = null))); r && r !== f; ) {
                if (1 >= r.type && (o = r.p,
                _[o] = r.s + r.c,
                c[o] = r.s,
                n || (h = new pe(r,"s",o,h,r.r),
                r.c = 0),
                1 === r.type))
                    for (a = r.l; --a > 0; )
                        l = "xn" + a,
                        o = r.p + "_" + l,
                        _[o] = r.data[l],
                        c[o] = r[l],
                        n || (h = new pe(r,l,o,h,r.rxp[l]));
                r = r._next
            }
            return {
                proxy: c,
                end: _,
                firstMPT: h,
                pt: u
            }
        }
        ,
        E.CSSPropTween = function(t, e, r, s, a, o, l, h, u, f, c) {
            this.t = t,
            this.p = e,
            this.s = r,
            this.c = s,
            this.n = l || e,
            t instanceof de || n.push(this.n),
            this.r = h,
            this.type = o || 0,
            u && (this.pr = u,
            i = !0),
            this.b = void 0 === f ? r : f,
            this.e = void 0 === c ? r + s : c,
            a && (this._next = a,
            a._prev = this)
        }
        )
          , me = function(t, e, i, r, s, n) {
            var a = new de(t,e,i,r - i,s,-1,n);
            return a.b = i,
            a.e = a.xs0 = r,
            a
        }
          , ge = a.parseComplex = function(t, e, i, r, s, n, a, o, l, h) {
            i = i || n || "",
            a = new de(t,e,0,0,a,h ? 2 : 1,null,!1,o,i,r),
            r += "";
            var f, c, _, p, d, v, y, x, T, w, b, P, S, O = i.split(", ").join(",").split(" "), C = r.split(", ").join(",").split(" "), k = O.length, R = u !== !1;
            for ((-1 !== r.indexOf(",") || -1 !== i.indexOf(",")) && (O = O.join(" ").replace(D, ", ").split(" "),
            C = C.join(" ").replace(D, ", ").split(" "),
            k = O.length),
            k !== C.length && (O = (n || "").split(" "),
            k = O.length),
            a.plugin = l,
            a.setRatio = h,
            fe.lastIndex = 0,
            f = 0; k > f; f++)
                if (p = O[f],
                d = C[f],
                x = parseFloat(p),
                x || 0 === x)
                    a.appendXtra("", x, se(d, x), d.replace(g, ""), R && -1 !== d.indexOf("px"), !0);
                else if (s && fe.test(p))
                    P = "," === d.charAt(d.length - 1) ? ")," : ")",
                    S = -1 !== d.indexOf("hsl") && W,
                    p = he(p, S),
                    d = he(d, S),
                    T = p.length + d.length > 6,
                    T && !W && 0 === d[3] ? (a["xs" + a.l] += a.l ? " transparent" : "transparent",
                    a.e = a.e.split(C[f]).join("transparent")) : (W || (T = !1),
                    S ? a.appendXtra(T ? "hsla(" : "hsl(", p[0], se(d[0], p[0]), ",", !1, !0).appendXtra("", p[1], se(d[1], p[1]), "%,", !1).appendXtra("", p[2], se(d[2], p[2]), T ? "%," : "%" + P, !1) : a.appendXtra(T ? "rgba(" : "rgb(", p[0], d[0] - p[0], ",", !0, !0).appendXtra("", p[1], d[1] - p[1], ",", !0).appendXtra("", p[2], d[2] - p[2], T ? "," : P, !0),
                    T && (p = 4 > p.length ? 1 : p[3],
                    a.appendXtra("", p, (4 > d.length ? 1 : d[3]) - p, P, !1))),
                    fe.lastIndex = 0;
                else if (v = p.match(m)) {
                    if (y = d.match(g),
                    !y || y.length !== v.length)
                        return a;
                    for (_ = 0,
                    c = 0; v.length > c; c++)
                        b = v[c],
                        w = p.indexOf(b, _),
                        a.appendXtra(p.substr(_, w - _), Number(b), se(y[c], b), "", R && "px" === p.substr(w + b.length, 2), 0 === c),
                        _ = w + b.length;
                    a["xs" + a.l] += p.substr(_)
                } else
                    a["xs" + a.l] += a.l ? " " + p : p;
            if (-1 !== r.indexOf("=") && a.data) {
                for (P = a.xs0 + a.data.s,
                f = 1; a.l > f; f++)
                    P += a["xs" + f] + a.data["xn" + f];
                a.e = P + a["xs" + f]
            }
            return a.l || (a.type = -1,
            a.xs0 = a.e),
            a.xfirst || a
        }
          , ve = 9;
        for (h = de.prototype,
        h.l = h.pr = 0; --ve > 0; )
            h["xn" + ve] = 0,
            h["xs" + ve] = "";
        h.xs0 = "",
        h._next = h._prev = h.xfirst = h.data = h.plugin = h.setRatio = h.rxp = null,
        h.appendXtra = function(t, e, i, r, s, n) {
            var a = this
              , o = a.l;
            return a["xs" + o] += n && o ? " " + t : t || "",
            i || 0 === o || a.plugin ? (a.l++,
            a.type = a.setRatio ? 2 : 1,
            a["xs" + a.l] = r || "",
            o > 0 ? (a.data["xn" + o] = e + i,
            a.rxp["xn" + o] = s,
            a["xn" + o] = e,
            a.plugin || (a.xfirst = new de(a,"xn" + o,e,i,a.xfirst || a,0,a.n,s,a.pr),
            a.xfirst.xs0 = 0),
            a) : (a.data = {
                s: e + i
            },
            a.rxp = {},
            a.s = e,
            a.c = i,
            a.r = s,
            a)) : (a["xs" + o] += e + (r || ""),
            a)
        }
        ;
        var ye = function(t, e) {
            e = e || {},
            this.p = e.prefix ? q(t) || t : t,
            l[t] = l[this.p] = this,
            this.format = e.formatter || ce(e.defaultValue, e.color, e.collapsible, e.multi),
            e.parser && (this.parse = e.parser),
            this.clrs = e.color,
            this.multi = e.multi,
            this.keyword = e.keyword,
            this.dflt = e.defaultValue,
            this.pr = e.priority || 0
        }
          , xe = E._registerComplexSpecialProp = function(t, e, i) {
            "object" != typeof e && (e = {
                parser: i
            });
            var r, s, n = t.split(","), a = e.defaultValue;
            for (i = i || [a],
            r = 0; n.length > r; r++)
                e.prefix = 0 === r && e.prefix,
                e.defaultValue = i[r] || a,
                s = new ye(n[r],e)
        }
          , Te = function(t) {
            if (!l[t]) {
                var e = t.charAt(0).toUpperCase() + t.substr(1) + "Plugin";
                xe(t, {
                    parser: function(t, i, r, s, n, a, h) {
                        var u = o.com.greensock.plugins[e];
                        return u ? (u._cssRegister(),
                        l[r].parse(t, i, r, s, n, a, h)) : (j("Error: " + e + " js file not loaded."),
                        n)
                    }
                })
            }
        };
        h = ye.prototype,
        h.parseComplex = function(t, e, i, r, s, n) {
            var a, o, l, h, u, f, c = this.keyword;
            if (this.multi && (D.test(i) || D.test(e) ? (o = e.replace(D, "|").split("|"),
            l = i.replace(D, "|").split("|")) : c && (o = [e],
            l = [i])),
            l) {
                for (h = l.length > o.length ? l.length : o.length,
                a = 0; h > a; a++)
                    e = o[a] = o[a] || this.dflt,
                    i = l[a] = l[a] || this.dflt,
                    c && (u = e.indexOf(c),
                    f = i.indexOf(c),
                    u !== f && (-1 === f ? o[a] = o[a].split(c).join("") : -1 === u && (o[a] += " " + c)));
                e = o.join(", "),
                i = l.join(", ")
            }
            return ge(t, this.p, e, i, this.clrs, this.dflt, r, this.pr, s, n)
        }
        ,
        h.parse = function(t, e, i, r, n, a) {
            return this.parseComplex(t.style, this.format(Q(t, this.p, s, !1, this.dflt)), this.format(e), n, a)
        }
        ,
        a.registerSpecialProp = function(t, e, i) {
            xe(t, {
                parser: function(t, r, s, n, a, o) {
                    var l = new de(t,s,0,0,a,2,s,!1,i);
                    return l.plugin = o,
                    l.setRatio = e(t, r, n._tween, s),
                    l
                },
                priority: i
            })
        }
        ,
        a.useSVGTransformAttr = c || _;
        var we, be = "scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","), Pe = q("transform"), Se = G + "transform", Oe = q("transformOrigin"), Ce = null !== q("perspective"), ke = E.Transform = function() {
            this.perspective = parseFloat(a.defaultTransformPerspective) || 0,
            this.force3D = a.defaultForce3D !== !1 && Ce ? a.defaultForce3D || "auto" : !1
        }
        , Re = window.SVGElement, Ae = function(t, e, i) {
            var r, s = X.createElementNS("http://www.w3.org/2000/svg", t), n = /([a-z])([A-Z])/g;
            for (r in i)
                s.setAttributeNS(null, r.replace(n, "$1-$2").toLowerCase(), i[r]);
            return e.appendChild(s),
            s
        }, Me = X.documentElement, De = function() {
            var t, e, i, r = d || /Android/i.test(Y) && !window.chrome;
            return X.createElementNS && !r && (t = Ae("svg", Me),
            e = Ae("rect", t, {
                width: 100,
                height: 50,
                x: 100
            }),
            i = e.getBoundingClientRect().width,
            e.style[Oe] = "50% 50%",
            e.style[Pe] = "scaleX(0.5)",
            r = i === e.getBoundingClientRect().width && !(_ && Ce),
            Me.removeChild(t)),
            r
        }(), Le = function(t, e, i, r, s) {
            var n, o, l, h, u, f, c, _, p, d, m, g, v, y, x = t._gsTransform, T = Xe(t, !0);
            x && (v = x.xOrigin,
            y = x.yOrigin),
            (!r || 2 > (n = r.split(" ")).length) && (c = t.getBBox(),
            e = re(e).split(" "),
            n = [(-1 !== e[0].indexOf("%") ? parseFloat(e[0]) / 100 * c.width : parseFloat(e[0])) + c.x, (-1 !== e[1].indexOf("%") ? parseFloat(e[1]) / 100 * c.height : parseFloat(e[1])) + c.y]),
            i.xOrigin = h = parseFloat(n[0]),
            i.yOrigin = u = parseFloat(n[1]),
            r && T !== Fe && (f = T[0],
            c = T[1],
            _ = T[2],
            p = T[3],
            d = T[4],
            m = T[5],
            g = f * p - c * _,
            o = h * (p / g) + u * (-_ / g) + (_ * m - p * d) / g,
            l = h * (-c / g) + u * (f / g) - (f * m - c * d) / g,
            h = i.xOrigin = n[0] = o,
            u = i.yOrigin = n[1] = l),
            x && (s || s !== !1 && a.defaultSmoothOrigin !== !1 ? (o = h - v,
            l = u - y,
            x.xOffset += o * T[0] + l * T[2] - o,
            x.yOffset += o * T[1] + l * T[3] - l) : x.xOffset = x.yOffset = 0),
            t.setAttribute("data-svg-origin", n.join(" "))
        }, Ne = function(t) {
            return !!(Re && "function" == typeof t.getBBox && t.getCTM && (!t.parentNode || t.parentNode.getBBox && t.parentNode.getCTM))
        }, Fe = [1, 0, 0, 1, 0, 0], Xe = function(t, e) {
            var i, r, s, n, a, o = t._gsTransform || new ke, l = 1e5;
            if (Pe ? r = Q(t, Se, null, !0) : t.currentStyle && (r = t.currentStyle.filter.match(A),
            r = r && 4 === r.length ? [r[0].substr(4), Number(r[2].substr(4)), Number(r[1].substr(4)), r[3].substr(4), o.x || 0, o.y || 0].join(",") : ""),
            i = !r || "none" === r || "matrix(1, 0, 0, 1, 0, 0)" === r,
            (o.svg || t.getBBox && Ne(t)) && (i && -1 !== (t.style[Pe] + "").indexOf("matrix") && (r = t.style[Pe],
            i = 0),
            s = t.getAttribute("transform"),
            i && s && (-1 !== s.indexOf("matrix") ? (r = s,
            i = 0) : -1 !== s.indexOf("translate") && (r = "matrix(1,0,0,1," + s.match(/(?:\-|\b)[\d\-\.e]+\b/gi).join(",") + ")",
            i = 0))),
            i)
                return Fe;
            for (s = (r || "").match(/(?:\-|\b)[\d\-\.e]+\b/gi) || [],
            ve = s.length; --ve > -1; )
                n = Number(s[ve]),
                s[ve] = (a = n - (n |= 0)) ? (0 | a * l + (0 > a ? -.5 : .5)) / l + n : n;
            return e && s.length > 6 ? [s[0], s[1], s[4], s[5], s[12], s[13]] : s
        }, ze = E.getTransform = function(t, i, r, n) {
            if (t._gsTransform && r && !n)
                return t._gsTransform;
            var o, l, h, u, f, c, _ = r ? t._gsTransform || new ke : new ke, p = 0 > _.scaleX, d = 2e-5, m = 1e5, g = Ce ? parseFloat(Q(t, Oe, i, !1, "0 0 0").split(" ")[2]) || _.zOrigin || 0 : 0, v = parseFloat(a.defaultTransformPerspective) || 0;
            if (_.svg = !(!t.getBBox || !Ne(t)),
            _.svg && (Le(t, Q(t, Oe, s, !1, "50% 50%") + "", _, t.getAttribute("data-svg-origin")),
            we = a.useSVGTransformAttr || De),
            o = Xe(t),
            o !== Fe) {
                if (16 === o.length) {
                    var y, x, T, w, b, P = o[0], S = o[1], O = o[2], C = o[3], k = o[4], R = o[5], A = o[6], M = o[7], D = o[8], L = o[9], F = o[10], X = o[12], z = o[13], B = o[14], I = o[11], E = Math.atan2(A, F);
                    _.zOrigin && (B = -_.zOrigin,
                    X = D * B - o[12],
                    z = L * B - o[13],
                    B = F * B + _.zOrigin - o[14]),
                    _.rotationX = E * N,
                    E && (w = Math.cos(-E),
                    b = Math.sin(-E),
                    y = k * w + D * b,
                    x = R * w + L * b,
                    T = A * w + F * b,
                    D = k * -b + D * w,
                    L = R * -b + L * w,
                    F = A * -b + F * w,
                    I = M * -b + I * w,
                    k = y,
                    R = x,
                    A = T),
                    E = Math.atan2(D, F),
                    _.rotationY = E * N,
                    E && (w = Math.cos(-E),
                    b = Math.sin(-E),
                    y = P * w - D * b,
                    x = S * w - L * b,
                    T = O * w - F * b,
                    L = S * b + L * w,
                    F = O * b + F * w,
                    I = C * b + I * w,
                    P = y,
                    S = x,
                    O = T),
                    E = Math.atan2(S, P),
                    _.rotation = E * N,
                    E && (w = Math.cos(-E),
                    b = Math.sin(-E),
                    P = P * w + k * b,
                    x = S * w + R * b,
                    R = S * -b + R * w,
                    A = O * -b + A * w,
                    S = x),
                    _.rotationX && Math.abs(_.rotationX) + Math.abs(_.rotation) > 359.9 && (_.rotationX = _.rotation = 0,
                    _.rotationY += 180),
                    _.scaleX = (0 | Math.sqrt(P * P + S * S) * m + .5) / m,
                    _.scaleY = (0 | Math.sqrt(R * R + L * L) * m + .5) / m,
                    _.scaleZ = (0 | Math.sqrt(A * A + F * F) * m + .5) / m,
                    _.skewX = 0,
                    _.perspective = I ? 1 / (0 > I ? -I : I) : 0,
                    _.x = X,
                    _.y = z,
                    _.z = B,
                    _.svg && (_.x -= _.xOrigin - (_.xOrigin * P - _.yOrigin * k),
                    _.y -= _.yOrigin - (_.yOrigin * S - _.xOrigin * R))
                } else if (!(Ce && !n && o.length && _.x === o[4] && _.y === o[5] && (_.rotationX || _.rotationY) || void 0 !== _.x && "none" === Q(t, "display", i))) {
                    var Y = o.length >= 6
                      , W = Y ? o[0] : 1
                      , V = o[1] || 0
                      , j = o[2] || 0
                      , G = Y ? o[3] : 1;
                    _.x = o[4] || 0,
                    _.y = o[5] || 0,
                    h = Math.sqrt(W * W + V * V),
                    u = Math.sqrt(G * G + j * j),
                    f = W || V ? Math.atan2(V, W) * N : _.rotation || 0,
                    c = j || G ? Math.atan2(j, G) * N + f : _.skewX || 0,
                    Math.abs(c) > 90 && 270 > Math.abs(c) && (p ? (h *= -1,
                    c += 0 >= f ? 180 : -180,
                    f += 0 >= f ? 180 : -180) : (u *= -1,
                    c += 0 >= c ? 180 : -180)),
                    _.scaleX = h,
                    _.scaleY = u,
                    _.rotation = f,
                    _.skewX = c,
                    Ce && (_.rotationX = _.rotationY = _.z = 0,
                    _.perspective = v,
                    _.scaleZ = 1),
                    _.svg && (_.x -= _.xOrigin - (_.xOrigin * W + _.yOrigin * j),
                    _.y -= _.yOrigin - (_.xOrigin * V + _.yOrigin * G))
                }
                _.zOrigin = g;
                for (l in _)
                    d > _[l] && _[l] > -d && (_[l] = 0)
            }
            return r && (t._gsTransform = _,
            _.svg && (we && t.style[Pe] ? e.delayedCall(.001, function() {
                Ye(t.style, Pe)
            }) : !we && t.getAttribute("transform") && e.delayedCall(.001, function() {
                t.removeAttribute("transform")
            }))),
            _
        }
        , Be = function(t) {
            var e, i, r = this.data, s = -r.rotation * L, n = s + r.skewX * L, a = 1e5, o = (0 | Math.cos(s) * r.scaleX * a) / a, l = (0 | Math.sin(s) * r.scaleX * a) / a, h = (0 | Math.sin(n) * -r.scaleY * a) / a, u = (0 | Math.cos(n) * r.scaleY * a) / a, f = this.t.style, c = this.t.currentStyle;
            if (c) {
                i = l,
                l = -h,
                h = -i,
                e = c.filter,
                f.filter = "";
                var _, p, m = this.t.offsetWidth, g = this.t.offsetHeight, v = "absolute" !== c.position, y = "progid:DXImageTransform.Microsoft.Matrix(M11=" + o + ", M12=" + l + ", M21=" + h + ", M22=" + u, w = r.x + m * r.xPercent / 100, b = r.y + g * r.yPercent / 100;
                if (null != r.ox && (_ = (r.oxp ? .01 * m * r.ox : r.ox) - m / 2,
                p = (r.oyp ? .01 * g * r.oy : r.oy) - g / 2,
                w += _ - (_ * o + p * l),
                b += p - (_ * h + p * u)),
                v ? (_ = m / 2,
                p = g / 2,
                y += ", Dx=" + (_ - (_ * o + p * l) + w) + ", Dy=" + (p - (_ * h + p * u) + b) + ")") : y += ", sizingMethod='auto expand')",
                f.filter = -1 !== e.indexOf("DXImageTransform.Microsoft.Matrix(") ? e.replace(M, y) : y + " " + e,
                (0 === t || 1 === t) && 1 === o && 0 === l && 0 === h && 1 === u && (v && -1 === y.indexOf("Dx=0, Dy=0") || T.test(e) && 100 !== parseFloat(RegExp.$1) || -1 === e.indexOf("gradient(" && e.indexOf("Alpha")) && f.removeAttribute("filter")),
                !v) {
                    var P, S, O, C = 8 > d ? 1 : -1;
                    for (_ = r.ieOffsetX || 0,
                    p = r.ieOffsetY || 0,
                    r.ieOffsetX = Math.round((m - ((0 > o ? -o : o) * m + (0 > l ? -l : l) * g)) / 2 + w),
                    r.ieOffsetY = Math.round((g - ((0 > u ? -u : u) * g + (0 > h ? -h : h) * m)) / 2 + b),
                    ve = 0; 4 > ve; ve++)
                        S = ee[ve],
                        P = c[S],
                        i = -1 !== P.indexOf("px") ? parseFloat(P) : Z(this.t, S, parseFloat(P), P.replace(x, "")) || 0,
                        O = i !== r[S] ? 2 > ve ? -r.ieOffsetX : -r.ieOffsetY : 2 > ve ? _ - r.ieOffsetX : p - r.ieOffsetY,
                        f[S] = (r[S] = Math.round(i - O * (0 === ve || 2 === ve ? 1 : C))) + "px"
                }
            }
        }, Ie = E.set3DTransformRatio = E.setTransformRatio = function(t) {
            var e, i, r, s, n, a, o, l, h, u, f, c, p, d, m, g, v, y, x, T, w, b, P, S = this.data, O = this.t.style, C = S.rotation, k = S.rotationX, R = S.rotationY, A = S.scaleX, M = S.scaleY, D = S.scaleZ, N = S.x, F = S.y, X = S.z, z = S.svg, B = S.perspective, I = S.force3D;
            if (!(((1 !== t && 0 !== t || "auto" !== I || this.tween._totalTime !== this.tween._totalDuration && this.tween._totalTime) && I || X || B || R || k) && (!we || !z) && Ce))
                return C || S.skewX || z ? (C *= L,
                b = S.skewX * L,
                P = 1e5,
                e = Math.cos(C) * A,
                s = Math.sin(C) * A,
                i = Math.sin(C - b) * -M,
                n = Math.cos(C - b) * M,
                b && "simple" === S.skewType && (v = Math.tan(b),
                v = Math.sqrt(1 + v * v),
                i *= v,
                n *= v,
                S.skewY && (e *= v,
                s *= v)),
                z && (N += S.xOrigin - (S.xOrigin * e + S.yOrigin * i) + S.xOffset,
                F += S.yOrigin - (S.xOrigin * s + S.yOrigin * n) + S.yOffset,
                we && (S.xPercent || S.yPercent) && (d = this.t.getBBox(),
                N += .01 * S.xPercent * d.width,
                F += .01 * S.yPercent * d.height),
                d = 1e-6,
                d > N && N > -d && (N = 0),
                d > F && F > -d && (F = 0)),
                x = (0 | e * P) / P + "," + (0 | s * P) / P + "," + (0 | i * P) / P + "," + (0 | n * P) / P + "," + N + "," + F + ")",
                z && we ? this.t.setAttribute("transform", "matrix(" + x) : O[Pe] = (S.xPercent || S.yPercent ? "translate(" + S.xPercent + "%," + S.yPercent + "%) matrix(" : "matrix(") + x) : O[Pe] = (S.xPercent || S.yPercent ? "translate(" + S.xPercent + "%," + S.yPercent + "%) matrix(" : "matrix(") + A + ",0,0," + M + "," + N + "," + F + ")",
                void 0;
            if (_ && (d = 1e-4,
            d > A && A > -d && (A = D = 2e-5),
            d > M && M > -d && (M = D = 2e-5),
            !B || S.z || S.rotationX || S.rotationY || (B = 0)),
            C || S.skewX)
                C *= L,
                m = e = Math.cos(C),
                g = s = Math.sin(C),
                S.skewX && (C -= S.skewX * L,
                m = Math.cos(C),
                g = Math.sin(C),
                "simple" === S.skewType && (v = Math.tan(S.skewX * L),
                v = Math.sqrt(1 + v * v),
                m *= v,
                g *= v,
                S.skewY && (e *= v,
                s *= v))),
                i = -g,
                n = m;
            else {
                if (!(R || k || 1 !== D || B || z))
                    return O[Pe] = (S.xPercent || S.yPercent ? "translate(" + S.xPercent + "%," + S.yPercent + "%) translate3d(" : "translate3d(") + N + "px," + F + "px," + X + "px)" + (1 !== A || 1 !== M ? " scale(" + A + "," + M + ")" : ""),
                    void 0;
                e = n = 1,
                i = s = 0
            }
            h = 1,
            r = a = o = l = u = f = 0,
            c = B ? -1 / B : 0,
            p = S.zOrigin,
            d = 1e-6,
            T = ",",
            w = "0",
            C = R * L,
            C && (m = Math.cos(C),
            g = Math.sin(C),
            o = -g,
            u = c * -g,
            r = e * g,
            a = s * g,
            h = m,
            c *= m,
            e *= m,
            s *= m),
            C = k * L,
            C && (m = Math.cos(C),
            g = Math.sin(C),
            v = i * m + r * g,
            y = n * m + a * g,
            l = h * g,
            f = c * g,
            r = i * -g + r * m,
            a = n * -g + a * m,
            h *= m,
            c *= m,
            i = v,
            n = y),
            1 !== D && (r *= D,
            a *= D,
            h *= D,
            c *= D),
            1 !== M && (i *= M,
            n *= M,
            l *= M,
            f *= M),
            1 !== A && (e *= A,
            s *= A,
            o *= A,
            u *= A),
            (p || z) && (p && (N += r * -p,
            F += a * -p,
            X += h * -p + p),
            z && (N += S.xOrigin - (S.xOrigin * e + S.yOrigin * i) + S.xOffset,
            F += S.yOrigin - (S.xOrigin * s + S.yOrigin * n) + S.yOffset),
            d > N && N > -d && (N = w),
            d > F && F > -d && (F = w),
            d > X && X > -d && (X = 0)),
            x = S.xPercent || S.yPercent ? "translate(" + S.xPercent + "%," + S.yPercent + "%) matrix3d(" : "matrix3d(",
            x += (d > e && e > -d ? w : e) + T + (d > s && s > -d ? w : s) + T + (d > o && o > -d ? w : o),
            x += T + (d > u && u > -d ? w : u) + T + (d > i && i > -d ? w : i) + T + (d > n && n > -d ? w : n),
            k || R ? (x += T + (d > l && l > -d ? w : l) + T + (d > f && f > -d ? w : f) + T + (d > r && r > -d ? w : r),
            x += T + (d > a && a > -d ? w : a) + T + (d > h && h > -d ? w : h) + T + (d > c && c > -d ? w : c) + T) : x += ",0,0,0,0,1,0,",
            x += N + T + F + T + X + T + (B ? 1 + -X / B : 1) + ")",
            O[Pe] = x
        }
        ;
        h = ke.prototype,
        h.x = h.y = h.z = h.skewX = h.skewY = h.rotation = h.rotationX = h.rotationY = h.zOrigin = h.xPercent = h.yPercent = h.xOffset = h.yOffset = 0,
        h.scaleX = h.scaleY = h.scaleZ = 1,
        xe("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin", {
            parser: function(t, e, i, r, n, o, l) {
                if (r._lastParsedTransform === l)
                    return n;
                r._lastParsedTransform = l;
                var h, u, f, c, _, p, d, m, g, v, y = t._gsTransform, x = t.style, T = 1e-6, w = be.length, b = l, P = {}, S = "transformOrigin";
                if (l.display ? (c = Q(t, "display"),
                x.display = "block",
                h = ze(t, s, !0, l.parseTransform),
                x.display = c) : h = ze(t, s, !0, l.parseTransform),
                r._transform = h,
                "string" == typeof b.transform && Pe)
                    c = B.style,
                    c[Pe] = b.transform,
                    c.display = "block",
                    c.position = "absolute",
                    X.body.appendChild(B),
                    u = ze(B, null, !1),
                    X.body.removeChild(B),
                    u.perspective || (u.perspective = h.perspective),
                    null != b.xPercent && (u.xPercent = ne(b.xPercent, h.xPercent)),
                    null != b.yPercent && (u.yPercent = ne(b.yPercent, h.yPercent));
                else if ("object" == typeof b) {
                    if (u = {
                        scaleX: ne(null != b.scaleX ? b.scaleX : b.scale, h.scaleX),
                        scaleY: ne(null != b.scaleY ? b.scaleY : b.scale, h.scaleY),
                        scaleZ: ne(b.scaleZ, h.scaleZ),
                        x: ne(b.x, h.x),
                        y: ne(b.y, h.y),
                        z: ne(b.z, h.z),
                        xPercent: ne(b.xPercent, h.xPercent),
                        yPercent: ne(b.yPercent, h.yPercent),
                        perspective: ne(b.transformPerspective, h.perspective)
                    },
                    m = b.directionalRotation,
                    null != m)
                        if ("object" == typeof m)
                            for (c in m)
                                b[c] = m[c];
                        else
                            b.rotation = m;
                    "string" == typeof b.x && -1 !== b.x.indexOf("%") && (u.x = 0,
                    u.xPercent = ne(b.x, h.xPercent)),
                    "string" == typeof b.y && -1 !== b.y.indexOf("%") && (u.y = 0,
                    u.yPercent = ne(b.y, h.yPercent)),
                    u.rotation = ae("rotation"in b ? b.rotation : "shortRotation"in b ? b.shortRotation + "_short" : "rotationZ"in b ? b.rotationZ : h.rotation, h.rotation, "rotation", P),
                    Ce && (u.rotationX = ae("rotationX"in b ? b.rotationX : "shortRotationX"in b ? b.shortRotationX + "_short" : h.rotationX || 0, h.rotationX, "rotationX", P),
                    u.rotationY = ae("rotationY"in b ? b.rotationY : "shortRotationY"in b ? b.shortRotationY + "_short" : h.rotationY || 0, h.rotationY, "rotationY", P)),
                    u.skewX = null == b.skewX ? h.skewX : ae(b.skewX, h.skewX),
                    u.skewY = null == b.skewY ? h.skewY : ae(b.skewY, h.skewY),
                    (f = u.skewY - h.skewY) && (u.skewX += f,
                    u.rotation += f)
                }
                for (Ce && null != b.force3D && (h.force3D = b.force3D,
                d = !0),
                h.skewType = b.skewType || h.skewType || a.defaultSkewType,
                p = h.force3D || h.z || h.rotationX || h.rotationY || u.z || u.rotationX || u.rotationY || u.perspective,
                p || null == b.scale || (u.scaleZ = 1); --w > -1; )
                    i = be[w],
                    _ = u[i] - h[i],
                    (_ > T || -T > _ || null != b[i] || null != F[i]) && (d = !0,
                    n = new de(h,i,h[i],_,n),
                    i in P && (n.e = P[i]),
                    n.xs0 = 0,
                    n.plugin = o,
                    r._overwriteProps.push(n.n));
                return _ = b.transformOrigin,
                h.svg && (_ || b.svgOrigin) && (g = h.xOffset,
                v = h.yOffset,
                Le(t, re(_), u, b.svgOrigin, b.smoothOrigin),
                n = me(h, "xOrigin", (y ? h : u).xOrigin, u.xOrigin, n, S),
                n = me(h, "yOrigin", (y ? h : u).yOrigin, u.yOrigin, n, S),
                (g !== h.xOffset || v !== h.yOffset) && (n = me(h, "xOffset", y ? g : h.xOffset, h.xOffset, n, S),
                n = me(h, "yOffset", y ? v : h.yOffset, h.yOffset, n, S)),
                _ = we ? null : "0px 0px"),
                (_ || Ce && p && h.zOrigin) && (Pe ? (d = !0,
                i = Oe,
                _ = (_ || Q(t, i, s, !1, "50% 50%")) + "",
                n = new de(x,i,0,0,n,-1,S),
                n.b = x[i],
                n.plugin = o,
                Ce ? (c = h.zOrigin,
                _ = _.split(" "),
                h.zOrigin = (_.length > 2 && (0 === c || "0px" !== _[2]) ? parseFloat(_[2]) : c) || 0,
                n.xs0 = n.e = _[0] + " " + (_[1] || "50%") + " 0px",
                n = new de(h,"zOrigin",0,0,n,-1,n.n),
                n.b = c,
                n.xs0 = n.e = h.zOrigin) : n.xs0 = n.e = _) : re(_ + "", h)),
                d && (r._transformType = h.svg && we || !p && 3 !== this._transformType ? 2 : 3),
                n
            },
            prefix: !0
        }),
        xe("boxShadow", {
            defaultValue: "0px 0px 0px 0px #999",
            prefix: !0,
            color: !0,
            multi: !0,
            keyword: "inset"
        }),
        xe("borderRadius", {
            defaultValue: "0px",
            parser: function(t, e, i, n, a) {
                e = this.format(e);
                var o, l, h, u, f, c, _, p, d, m, g, v, y, x, T, w, b = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"], P = t.style;
                for (d = parseFloat(t.offsetWidth),
                m = parseFloat(t.offsetHeight),
                o = e.split(" "),
                l = 0; b.length > l; l++)
                    this.p.indexOf("border") && (b[l] = q(b[l])),
                    f = u = Q(t, b[l], s, !1, "0px"),
                    -1 !== f.indexOf(" ") && (u = f.split(" "),
                    f = u[0],
                    u = u[1]),
                    c = h = o[l],
                    _ = parseFloat(f),
                    v = f.substr((_ + "").length),
                    y = "=" === c.charAt(1),
                    y ? (p = parseInt(c.charAt(0) + "1", 10),
                    c = c.substr(2),
                    p *= parseFloat(c),
                    g = c.substr((p + "").length - (0 > p ? 1 : 0)) || "") : (p = parseFloat(c),
                    g = c.substr((p + "").length)),
                    "" === g && (g = r[i] || v),
                    g !== v && (x = Z(t, "borderLeft", _, v),
                    T = Z(t, "borderTop", _, v),
                    "%" === g ? (f = 100 * (x / d) + "%",
                    u = 100 * (T / m) + "%") : "em" === g ? (w = Z(t, "borderLeft", 1, "em"),
                    f = x / w + "em",
                    u = T / w + "em") : (f = x + "px",
                    u = T + "px"),
                    y && (c = parseFloat(f) + p + g,
                    h = parseFloat(u) + p + g)),
                    a = ge(P, b[l], f + " " + u, c + " " + h, !1, "0px", a);
                return a
            },
            prefix: !0,
            formatter: ce("0px 0px 0px 0px", !1, !0)
        }),
        xe("backgroundPosition", {
            defaultValue: "0 0",
            parser: function(t, e, i, r, n, a) {
                var o, l, h, u, f, c, _ = "background-position", p = s || H(t, null), m = this.format((p ? d ? p.getPropertyValue(_ + "-x") + " " + p.getPropertyValue(_ + "-y") : p.getPropertyValue(_) : t.currentStyle.backgroundPositionX + " " + t.currentStyle.backgroundPositionY) || "0 0"), g = this.format(e);
                if (-1 !== m.indexOf("%") != (-1 !== g.indexOf("%")) && (c = Q(t, "backgroundImage").replace(C, ""),
                c && "none" !== c)) {
                    for (o = m.split(" "),
                    l = g.split(" "),
                    I.setAttribute("src", c),
                    h = 2; --h > -1; )
                        m = o[h],
                        u = -1 !== m.indexOf("%"),
                        u !== (-1 !== l[h].indexOf("%")) && (f = 0 === h ? t.offsetWidth - I.width : t.offsetHeight - I.height,
                        o[h] = u ? parseFloat(m) / 100 * f + "px" : 100 * (parseFloat(m) / f) + "%");
                    m = o.join(" ")
                }
                return this.parseComplex(t.style, m, g, n, a)
            },
            formatter: re
        }),
        xe("backgroundSize", {
            defaultValue: "0 0",
            formatter: re
        }),
        xe("perspective", {
            defaultValue: "0px",
            prefix: !0
        }),
        xe("perspectiveOrigin", {
            defaultValue: "50% 50%",
            prefix: !0
        }),
        xe("transformStyle", {
            prefix: !0
        }),
        xe("backfaceVisibility", {
            prefix: !0
        }),
        xe("userSelect", {
            prefix: !0
        }),
        xe("margin", {
            parser: _e("marginTop,marginRight,marginBottom,marginLeft")
        }),
        xe("padding", {
            parser: _e("paddingTop,paddingRight,paddingBottom,paddingLeft")
        }),
        xe("clip", {
            defaultValue: "rect(0px,0px,0px,0px)",
            parser: function(t, e, i, r, n, a) {
                var o, l, h;
                return 9 > d ? (l = t.currentStyle,
                h = 8 > d ? " " : ",",
                o = "rect(" + l.clipTop + h + l.clipRight + h + l.clipBottom + h + l.clipLeft + ")",
                e = this.format(e).split(",").join(h)) : (o = this.format(Q(t, this.p, s, !1, this.dflt)),
                e = this.format(e)),
                this.parseComplex(t.style, o, e, n, a)
            }
        }),
        xe("textShadow", {
            defaultValue: "0px 0px 0px #999",
            color: !0,
            multi: !0
        }),
        xe("autoRound,strictUnits", {
            parser: function(t, e, i, r, s) {
                return s
            }
        }),
        xe("border", {
            defaultValue: "0px solid #000",
            parser: function(t, e, i, r, n, a) {
                return this.parseComplex(t.style, this.format(Q(t, "borderTopWidth", s, !1, "0px") + " " + Q(t, "borderTopStyle", s, !1, "solid") + " " + Q(t, "borderTopColor", s, !1, "#000")), this.format(e), n, a)
            },
            color: !0,
            formatter: function(t) {
                var e = t.split(" ");
                return e[0] + " " + (e[1] || "solid") + " " + (t.match(fe) || ["#000"])[0]
            }
        }),
        xe("borderWidth", {
            parser: _e("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")
        }),
        xe("float,cssFloat,styleFloat", {
            parser: function(t, e, i, r, s) {
                var n = t.style
                  , a = "cssFloat"in n ? "cssFloat" : "styleFloat";
                return new de(n,a,0,0,s,-1,i,!1,0,n[a],e)
            }
        });
        var Ee = function(t) {
            var e, i = this.t, r = i.filter || Q(this.data, "filter") || "", s = 0 | this.s + this.c * t;
            100 === s && (-1 === r.indexOf("atrix(") && -1 === r.indexOf("radient(") && -1 === r.indexOf("oader(") ? (i.removeAttribute("filter"),
            e = !Q(this.data, "filter")) : (i.filter = r.replace(b, ""),
            e = !0)),
            e || (this.xn1 && (i.filter = r = r || "alpha(opacity=" + s + ")"),
            -1 === r.indexOf("pacity") ? 0 === s && this.xn1 || (i.filter = r + " alpha(opacity=" + s + ")") : i.filter = r.replace(T, "opacity=" + s))
        };
        xe("opacity,alpha,autoAlpha", {
            defaultValue: "1",
            parser: function(t, e, i, r, n, a) {
                var o = parseFloat(Q(t, "opacity", s, !1, "1"))
                  , l = t.style
                  , h = "autoAlpha" === i;
                return "string" == typeof e && "=" === e.charAt(1) && (e = ("-" === e.charAt(0) ? -1 : 1) * parseFloat(e.substr(2)) + o),
                h && 1 === o && "hidden" === Q(t, "visibility", s) && 0 !== e && (o = 0),
                W ? n = new de(l,"opacity",o,e - o,n) : (n = new de(l,"opacity",100 * o,100 * (e - o),n),
                n.xn1 = h ? 1 : 0,
                l.zoom = 1,
                n.type = 2,
                n.b = "alpha(opacity=" + n.s + ")",
                n.e = "alpha(opacity=" + (n.s + n.c) + ")",
                n.data = t,
                n.plugin = a,
                n.setRatio = Ee),
                h && (n = new de(l,"visibility",0,0,n,-1,null,!1,0,0 !== o ? "inherit" : "hidden",0 === e ? "hidden" : "inherit"),
                n.xs0 = "inherit",
                r._overwriteProps.push(n.n),
                r._overwriteProps.push(i)),
                n
            }
        });
        var Ye = function(t, e) {
            e && (t.removeProperty ? (("ms" === e.substr(0, 2) || "webkit" === e.substr(0, 6)) && (e = "-" + e),
            t.removeProperty(e.replace(S, "-$1").toLowerCase())) : t.removeAttribute(e))
        }
          , We = function(t) {
            if (this.t._gsClassPT = this,
            1 === t || 0 === t) {
                this.t.setAttribute("class", 0 === t ? this.b : this.e);
                for (var e = this.data, i = this.t.style; e; )
                    e.v ? i[e.p] = e.v : Ye(i, e.p),
                    e = e._next;
                1 === t && this.t._gsClassPT === this && (this.t._gsClassPT = null)
            } else
                this.t.getAttribute("class") !== this.e && this.t.setAttribute("class", this.e)
        };
        xe("className", {
            parser: function(t, e, r, n, a, o, l) {
                var h, u, f, c, _, p = t.getAttribute("class") || "", d = t.style.cssText;
                if (a = n._classNamePT = new de(t,r,0,0,a,2),
                a.setRatio = We,
                a.pr = -11,
                i = !0,
                a.b = p,
                u = K(t, s),
                f = t._gsClassPT) {
                    for (c = {},
                    _ = f.data; _; )
                        c[_.p] = 1,
                        _ = _._next;
                    f.setRatio(1)
                }
                return t._gsClassPT = a,
                a.e = "=" !== e.charAt(1) ? e : p.replace(RegExp("\\s*\\b" + e.substr(2) + "\\b"), "") + ("+" === e.charAt(0) ? " " + e.substr(2) : ""),
                t.setAttribute("class", a.e),
                h = J(t, u, K(t), l, c),
                t.setAttribute("class", p),
                a.data = h.firstMPT,
                t.style.cssText = d,
                a = a.xfirst = n.parse(t, h.difs, a, o)
            }
        });
        var Ve = function(t) {
            if ((1 === t || 0 === t) && this.data._totalTime === this.data._totalDuration && "isFromStart" !== this.data.data) {
                var e, i, r, s, n, a = this.t.style, o = l.transform.parse;
                if ("all" === this.e)
                    a.cssText = "",
                    s = !0;
                else
                    for (e = this.e.split(" ").join("").split(","),
                    r = e.length; --r > -1; )
                        i = e[r],
                        l[i] && (l[i].parse === o ? s = !0 : i = "transformOrigin" === i ? Oe : l[i].p),
                        Ye(a, i);
                s && (Ye(a, Pe),
                n = this.t._gsTransform,
                n && (n.svg && this.t.removeAttribute("data-svg-origin"),
                delete this.t._gsTransform))
            }
        };
        for (xe("clearProps", {
            parser: function(t, e, r, s, n) {
                return n = new de(t,r,0,0,n,2),
                n.setRatio = Ve,
                n.e = e,
                n.pr = -10,
                n.data = s._tween,
                i = !0,
                n
            }
        }),
        h = "bezier,throwProps,physicsProps,physics2D".split(","),
        ve = h.length; ve--; )
            Te(h[ve]);
        h = a.prototype,
        h._firstPT = h._lastParsedTransform = h._transform = null,
        h._onInitTween = function(t, e, o) {
            if (!t.nodeType)
                return !1;
            this._target = t,
            this._tween = o,
            this._vars = e,
            u = e.autoRound,
            i = !1,
            r = e.suffixMap || a.suffixMap,
            s = H(t, ""),
            n = this._overwriteProps;
            var h, _, d, m, g, v, y, x, T, b = t.style;
            if (f && "" === b.zIndex && (h = Q(t, "zIndex", s),
            ("auto" === h || "" === h) && this._addLazySet(b, "zIndex", 0)),
            "string" == typeof e && (m = b.cssText,
            h = K(t, s),
            b.cssText = m + ";" + e,
            h = J(t, h, K(t)).difs,
            !W && w.test(e) && (h.opacity = parseFloat(RegExp.$1)),
            e = h,
            b.cssText = m),
            this._firstPT = _ = e.className ? l.className.parse(t, e.className, "className", this, null, null, e) : this.parse(t, e, null),
            this._transformType) {
                for (T = 3 === this._transformType,
                Pe ? c && (f = !0,
                "" === b.zIndex && (y = Q(t, "zIndex", s),
                ("auto" === y || "" === y) && this._addLazySet(b, "zIndex", 0)),
                p && this._addLazySet(b, "WebkitBackfaceVisibility", this._vars.WebkitBackfaceVisibility || (T ? "visible" : "hidden"))) : b.zoom = 1,
                d = _; d && d._next; )
                    d = d._next;
                x = new de(t,"transform",0,0,null,2),
                this._linkCSSP(x, null, d),
                x.setRatio = Pe ? Ie : Be,
                x.data = this._transform || ze(t, s, !0),
                x.tween = o,
                x.pr = -1,
                n.pop()
            }
            if (i) {
                for (; _; ) {
                    for (v = _._next,
                    d = m; d && d.pr > _.pr; )
                        d = d._next;
                    (_._prev = d ? d._prev : g) ? _._prev._next = _ : m = _,
                    (_._next = d) ? d._prev = _ : g = _,
                    _ = v
                }
                this._firstPT = m
            }
            return !0
        }
        ,
        h.parse = function(t, e, i, n) {
            var a, o, h, f, c, _, p, d, m, g, v = t.style;
            for (a in e)
                _ = e[a],
                o = l[a],
                o ? i = o.parse(t, _, a, this, i, n, e) : (c = Q(t, a, s) + "",
                m = "string" == typeof _,
                "color" === a || "fill" === a || "stroke" === a || -1 !== a.indexOf("Color") || m && P.test(_) ? (m || (_ = he(_),
                _ = (_.length > 3 ? "rgba(" : "rgb(") + _.join(",") + ")"),
                i = ge(v, a, c, _, !0, "transparent", i, 0, n)) : !m || -1 === _.indexOf(" ") && -1 === _.indexOf(",") ? (h = parseFloat(c),
                p = h || 0 === h ? c.substr((h + "").length) : "",
                ("" === c || "auto" === c) && ("width" === a || "height" === a ? (h = ie(t, a, s),
                p = "px") : "left" === a || "top" === a ? (h = $(t, a, s),
                p = "px") : (h = "opacity" !== a ? 0 : 1,
                p = "")),
                g = m && "=" === _.charAt(1),
                g ? (f = parseInt(_.charAt(0) + "1", 10),
                _ = _.substr(2),
                f *= parseFloat(_),
                d = _.replace(x, "")) : (f = parseFloat(_),
                d = m ? _.replace(x, "") : ""),
                "" === d && (d = a in r ? r[a] : p),
                _ = f || 0 === f ? (g ? f + h : f) + d : e[a],
                p !== d && "" !== d && (f || 0 === f) && h && (h = Z(t, a, h, p),
                "%" === d ? (h /= Z(t, a, 100, "%") / 100,
                e.strictUnits !== !0 && (c = h + "%")) : "em" === d || "rem" === d ? h /= Z(t, a, 1, d) : "px" !== d && (f = Z(t, a, f, d),
                d = "px"),
                g && (f || 0 === f) && (_ = f + h + d)),
                g && (f += h),
                !h && 0 !== h || !f && 0 !== f ? void 0 !== v[a] && (_ || "NaN" != _ + "" && null != _) ? (i = new de(v,a,f || h || 0,0,i,-1,a,!1,0,c,_),
                i.xs0 = "none" !== _ || "display" !== a && -1 === a.indexOf("Style") ? _ : c) : j("invalid " + a + " tween value: " + e[a]) : (i = new de(v,a,h,f - h,i,0,a,u !== !1 && ("px" === d || "zIndex" === a),0,c,_),
                i.xs0 = d)) : i = ge(v, a, c, _, !0, null, i, 0, n)),
                n && i && !i.plugin && (i.plugin = n);
            return i
        }
        ,
        h.setRatio = function(t) {
            var e, i, r, s = this._firstPT, n = 1e-6;
            if (1 !== t || this._tween._time !== this._tween._duration && 0 !== this._tween._time)
                if (t || this._tween._time !== this._tween._duration && 0 !== this._tween._time || this._tween._rawPrevTime === -1e-6)
                    for (; s; ) {
                        if (e = s.c * t + s.s,
                        s.r ? e = Math.round(e) : n > e && e > -n && (e = 0),
                        s.type)
                            if (1 === s.type)
                                if (r = s.l,
                                2 === r)
                                    s.t[s.p] = s.xs0 + e + s.xs1 + s.xn1 + s.xs2;
                                else if (3 === r)
                                    s.t[s.p] = s.xs0 + e + s.xs1 + s.xn1 + s.xs2 + s.xn2 + s.xs3;
                                else if (4 === r)
                                    s.t[s.p] = s.xs0 + e + s.xs1 + s.xn1 + s.xs2 + s.xn2 + s.xs3 + s.xn3 + s.xs4;
                                else if (5 === r)
                                    s.t[s.p] = s.xs0 + e + s.xs1 + s.xn1 + s.xs2 + s.xn2 + s.xs3 + s.xn3 + s.xs4 + s.xn4 + s.xs5;
                                else {
                                    for (i = s.xs0 + e + s.xs1,
                                    r = 1; s.l > r; r++)
                                        i += s["xn" + r] + s["xs" + (r + 1)];
                                    s.t[s.p] = i
                                }
                            else
                                -1 === s.type ? s.t[s.p] = s.xs0 : s.setRatio && s.setRatio(t);
                        else
                            s.t[s.p] = e + s.xs0;
                        s = s._next
                    }
                else
                    for (; s; )
                        2 !== s.type ? s.t[s.p] = s.b : s.setRatio(t),
                        s = s._next;
            else
                for (; s; ) {
                    if (2 !== s.type)
                        if (s.r && -1 !== s.type)
                            if (e = Math.round(s.s + s.c),
                            s.type) {
                                if (1 === s.type) {
                                    for (r = s.l,
                                    i = s.xs0 + e + s.xs1,
                                    r = 1; s.l > r; r++)
                                        i += s["xn" + r] + s["xs" + (r + 1)];
                                    s.t[s.p] = i
                                }
                            } else
                                s.t[s.p] = e + s.xs0;
                        else
                            s.t[s.p] = s.e;
                    else
                        s.setRatio(t);
                    s = s._next
                }
        }
        ,
        h._enableTransforms = function(t) {
            this._transform = this._transform || ze(this._target, s, !0),
            this._transformType = this._transform.svg && we || !t && 3 !== this._transformType ? 2 : 3
        }
        ;
        var je = function() {
            this.t[this.p] = this.e,
            this.data._linkCSSP(this, this._next, null, !0)
        };
        h._addLazySet = function(t, e, i) {
            var r = this._firstPT = new de(t,e,0,0,this._firstPT,2);
            r.e = i,
            r.setRatio = je,
            r.data = this
        }
        ,
        h._linkCSSP = function(t, e, i, r) {
            return t && (e && (e._prev = t),
            t._next && (t._next._prev = t._prev),
            t._prev ? t._prev._next = t._next : this._firstPT === t && (this._firstPT = t._next,
            r = !0),
            i ? i._next = t : r || null !== this._firstPT || (this._firstPT = t),
            t._next = e,
            t._prev = i),
            t
        }
        ,
        h._kill = function(e) {
            var i, r, s, n = e;
            if (e.autoAlpha || e.alpha) {
                n = {};
                for (r in e)
                    n[r] = e[r];
                n.opacity = 1,
                n.autoAlpha && (n.visibility = 1)
            }
            return e.className && (i = this._classNamePT) && (s = i.xfirst,
            s && s._prev ? this._linkCSSP(s._prev, i._next, s._prev._prev) : s === this._firstPT && (this._firstPT = i._next),
            i._next && this._linkCSSP(i._next, i._next._next, s._prev),
            this._classNamePT = null),
            t.prototype._kill.call(this, n)
        }
        ;
        var Ge = function(t, e, i) {
            var r, s, n, a;
            if (t.slice)
                for (s = t.length; --s > -1; )
                    Ge(t[s], e, i);
            else
                for (r = t.childNodes,
                s = r.length; --s > -1; )
                    n = r[s],
                    a = n.type,
                    n.style && (e.push(K(n)),
                    i && i.push(n)),
                    1 !== a && 9 !== a && 11 !== a || !n.childNodes.length || Ge(n, e, i)
        };
        return a.cascadeTo = function(t, i, r) {
            var s, n, a, o, l = e.to(t, i, r), h = [l], u = [], f = [], c = [], _ = e._internals.reservedProps;
            for (t = l._targets || l.target,
            Ge(t, u, c),
            l.render(i, !0, !0),
            Ge(t, f),
            l.render(0, !0, !0),
            l._enabled(!0),
            s = c.length; --s > -1; )
                if (n = J(c[s], u[s], f[s]),
                n.firstMPT) {
                    n = n.difs;
                    for (a in r)
                        _[a] && (n[a] = r[a]);
                    o = {};
                    for (a in n)
                        o[a] = u[s][a];
                    h.push(e.fromTo(c[s], i, o, n))
                }
            return h
        }
        ,
        t.activate([a]),
        a
    }, !0)
}),
_gsScope._gsDefine && _gsScope._gsQueue.pop()(),
function(t) {
    "use strict";
    var e = function() {
        return (_gsScope.GreenSockGlobals || _gsScope)[t]
    };
    "function" == typeof define && define.amd ? define(["TweenLite"], e) : "undefined" != typeof module && module.exports && (require("../TweenLite.js"),
    module.exports = e())
}("CSSPlugin");
