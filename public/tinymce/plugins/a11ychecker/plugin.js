/* Ephox Accessibility Checker Plugin
 *
 * Copyright 2010-2017 Ephox Corporation.  All rights reserved.
 *
 * Version: 2.1.0-108
 */

!function(l) {
    "use strict";
    var n, o, e, t, r, i, a, u, c, s, f, d, m = function(e) {
        return parseInt(e, 10)
    }, p = function(e, t, r) {
        return {
            major: e,
            minor: t,
            patch: r
        }
    }, h = function(e) {
        var t = /([0-9]+)\.([0-9]+)\.([0-9]+)(?:(\-.+)?)/.exec(e);
        return t ? p(m(t[1]), m(t[2]), m(t[3])) : p(0, 0, 0)
    }, v = function(e, t) {
        var r = e - t;
        return 0 === r ? 0 : 0 < r ? 1 : -1
    }, y = function(e, t) {
        return !!e && -1 === function(e, t) {
            var r = v(e.major, t.major);
            if (0 !== r)
                return r;
            var n = v(e.minor, t.minor);
            if (0 !== n)
                return n;
            var o = v(e.patch, t.patch);
            return 0 !== o ? o : 0
        }(h([(r = e).majorVersion, r.minorVersion].join(".").split(".").slice(0, 3).join(".")), h(t));
        var r
    }, g = (n = l.window,
    o = "error",
    function() {
        for (var e = [], t = 0; t < arguments.length; t++)
            e[t] = arguments[t];
        var r = n.console;
        r && o in r && r[o].apply(r, e)
    }
    ), w = function() {}, N = function(e) {
        return function() {
            return e
        }
    }, b = function(e) {
        return e
    }, x = N(!1), k = N(!0), T = x, A = k, D = function() {
        return S
    }, S = (i = {
        fold: function(e, t) {
            return e()
        },
        is: T,
        isSome: T,
        isNone: A,
        getOr: r = function(e) {
            return e
        }
        ,
        getOrThunk: t = function(e) {
            return e()
        }
        ,
        getOrDie: function(e) {
            throw new Error(e || "error: getOrDie called on none.")
        },
        getOrNull: function() {
            return null
        },
        getOrUndefined: function() {},
        or: r,
        orThunk: t,
        map: D,
        ap: D,
        each: function() {},
        bind: D,
        flatten: D,
        exists: T,
        forall: A,
        filter: D,
        equals: e = function(e) {
            return e.isNone()
        }
        ,
        equals_: e,
        toArray: function() {
            return []
        },
        toString: N("none()")
    },
    Object.freeze && Object.freeze(i),
    i), E = function(r) {
        var e = function() {
            return r
        }
          , t = function() {
            return o
        }
          , n = function(e) {
            return e(r)
        }
          , o = {
            fold: function(e, t) {
                return t(r)
            },
            is: function(e) {
                return r === e
            },
            isSome: A,
            isNone: T,
            getOr: e,
            getOrThunk: e,
            getOrDie: e,
            getOrNull: e,
            getOrUndefined: e,
            or: t,
            orThunk: t,
            map: function(e) {
                return E(e(r))
            },
            ap: function(e) {
                return e.fold(D, function(e) {
                    return E(e(r))
                })
            },
            each: function(e) {
                e(r)
            },
            bind: n,
            flatten: e,
            exists: n,
            forall: n,
            filter: function(e) {
                return e(r) ? o : S
            },
            equals: function(e) {
                return e.is(r)
            },
            equals_: function(e, t) {
                return e.fold(T, function(e) {
                    return t(r, e)
                })
            },
            toArray: function() {
                return [r]
            },
            toString: function() {
                return "some(" + r + ")"
            }
        };
        return o
    }, O = {
        some: E,
        none: D,
        from: function(e) {
            return null == e ? S : E(e)
        }
    }, I = function(t) {
        return function(e) {
            return function(e) {
                if (null === e)
                    return "null";
                var t = typeof e;
                return "object" === t && (Array.prototype.isPrototypeOf(e) || e.constructor && "Array" === e.constructor.name) ? "array" : "object" === t && (String.prototype.isPrototypeOf(e) || e.constructor && "String" === e.constructor.name) ? "string" : t
            }(e) === t
        }
    }, R = I("string"), C = I("array"), M = I("boolean"), _ = I("function"), G = I("number"), H = Array.prototype.slice, P = void 0 === (a = Array.prototype.indexOf) ? function(e, t) {
        return j(e, t)
    }
    : function(e, t) {
        return a.call(e, t)
    }
    , L = function(e, t) {
        return -1 < P(e, t)
    }, V = function(e, t) {
        for (var r = e.length, n = new Array(r), o = 0; o < r; o++) {
            var i = e[o];
            n[o] = t(i, o, e)
        }
        return n
    }, W = function(e, t) {
        for (var r = 0, n = e.length; r < n; r++) {
            t(e[r], r, e)
        }
    }, q = function(e, t) {
        for (var r = [], n = 0, o = e.length; n < o; n++) {
            var i = e[n];
            t(i, n, e) && r.push(i)
        }
        return r
    }, U = function(e, t) {
        for (var r = 0, n = e.length; r < n; r++) {
            var o = e[r];
            if (t(o, r, e))
                return O.some(o)
        }
        return O.none()
    }, j = function(e, t) {
        for (var r = 0, n = e.length; r < n; ++r)
            if (e[r] === t)
                return r;
        return -1
    }, B = Array.prototype.push, F = function(e, t) {
        return function(e) {
            for (var t = [], r = 0, n = e.length; r < n; ++r) {
                if (!C(e[r]))
                    throw new Error("Arr.flatten item " + r + " was not an array, input: " + e);
                B.apply(t, e[r])
            }
            return t
        }(V(e, t))
    }, z = function(e, t) {
        for (var r = 0, n = e.length; r < n; ++r) {
            if (!0 !== t(e[r], r, e))
                return !1
        }
        return !0
    }, Y = (_(Array.from) && Array.from,
    {
        a: N("a"),
        aa: N("aa"),
        aaa: N("aaa")
    }), X = {
        html4: N("html4"),
        html5: N("html5")
    }, $ = [Y.a(), Y.aa(), Y.aaa()], K = [X.html4(), X.html5()], J = {
        "a11y.d1.description": "This paragraph looks like a heading. If it is a heading, please select a heading level.",
        "a11y.d1.repair.block.h1": "Heading 1",
        "a11y.d1.repair.block.h2": "Heading 2",
        "a11y.d1.repair.block.h3": "Heading 3",
        "a11y.d1.repair.block.h4": "Heading 4",
        "a11y.d1.repair.block.h5": "Heading 5",
        "a11y.d1.repair.block.h6": "Heading 6",
        "a11y.d1.repair.info": "Select a heading level:",
        "a11y.d2.description": "Headings must be applied in sequential order. For example: Heading 1 should be followed by Heading 2, not Heading 3.",
        "a11y.d3.description": "Adjacent links with the same URL should be merged into one link",
        "a11y.d4.description": "The selected text appears to be a list. Lists should be formatted using a list tag.",
        "a11y.d5a.description": "Large text must have a contrast ratio of at least 3:1",
        "a11y.d5b.description": "Text must have a contrast ratio of at least 4.5:1",
        "a11y.d5c.description": "Text must have a contrast ratio of at least 7:1",
        "a11y.i1.description": "Images must have an alternative text description",
        "a11y.i1.repair.errors.duplicate": "Alternative text cannot be the same as the filename",
        "a11y.i1.repair.errors.empty": "Alternative text cannot be empty",
        "a11y.i1.repair.info": "Provide alternative text:",
        "a11y.i2.description": "Alternative text must not be the same as the image filename",
        "a11y.t1.description": "Tables must have captions",
        "a11y.t1.repair.errors.duplicate": "Table caption cannot be the same as the table summary",
        "a11y.t1.repair.errors.empty": "Caption cannot be empty",
        "a11y.t1.repair.info": "Provide caption:",
        "a11y.t2.description": "Complex tables should have summaries",
        "a11y.t2.repair.errors.duplicate": "Table summary cannot be the same as the table caption",
        "a11y.t2.repair.errors.empty": "Summary cannot be empty",
        "a11y.t2.repair.info": "Provide table summary:",
        "a11y.t3.description": "Table caption and summary cannot have the same value",
        "a11y.t4a.description": "Table elements must contain TR and TD tags",
        "a11y.t4b.description": "Tables must have at least one header cell",
        "a11y.t4b.repair.info": "Choose table header:",
        "a11y.t4c.description": "Table headers must be applied to a row or a column",
        "a11y.t4c.repair.header.col": "Header Column",
        "a11y.t4c.repair.header.row": "Header Row",
        "a11y.t4c.repair.info": "Select header scope:",
        "a11y.t4c.repair.scope.col": "Column",
        "a11y.t4c.repair.scope.colgroup": "Column Group",
        "a11y.t4c.repair.scope.row": "Row",
        "a11y.t4c.repair.scope.rowgroup": "Row Group",
        "a11y.widget.counter": "Issue {0} of {1}",
        "a11y.widget.ignore": "Ignore",
        "a11y.widget.issue.none": "No accessibility issues detected",
        "a11y.widget.next": "Next Issue",
        "a11y.widget.previous": "Previous Issue",
        "a11y.widget.repair": "Repair Issue",
        "a11y.widget.title": "Accessibility Checker",
        "a11y.widget.help.title": "Click for more info",
        error: "Error",
        warning: "Warning",
        info: "Info",
        success: "Success"
    }, Q = function(e) {
        return J[e]
    }, Z = function(e) {
        return Array.isArray(e) ? tinymce.translate([Q(e[0])].concat(e.slice(1))) : tinymce.translate(Q(e))
    }, ee = Object.keys, te = (l.Node.ATTRIBUTE_NODE,
    l.Node.CDATA_SECTION_NODE,
    l.Node.COMMENT_NODE,
    l.Node.DOCUMENT_NODE), re = (l.Node.DOCUMENT_TYPE_NODE,
    l.Node.DOCUMENT_FRAGMENT_NODE,
    l.Node.ELEMENT_NODE), ne = l.Node.TEXT_NODE, oe = (l.Node.PROCESSING_INSTRUCTION_NODE,
    l.Node.ENTITY_REFERENCE_NODE,
    l.Node.ENTITY_NODE,
    l.Node.NOTATION_NODE,
    void 0 !== l.window ? l.window : Function("return this;")()), ie = function(e, t) {
        return function(e, t) {
            for (var r = null != t ? t : oe, n = 0; n < e.length && null != r; ++n)
                r = r[e[n]];
            return r
        }(e.split("."), t)
    }, ae = function(e, t) {
        var r = ie(e, t);
        if (null == r)
            throw new Error(e + " not available on this browser");
        return r
    }, ue = function(e) {
        var t, r = ie("ownerDocument.defaultView", e);
        return (t = r,
        ae("HTMLElement", t)).prototype.isPrototypeOf(e)
    }, ce = function(e) {
        return ue(e.dom())
    }, se = (u = ne,
    function(e) {
        return e.dom().nodeType === u
    }
    ), le = function(e, t, r) {
        !function(e, t, r) {
            if (!(R(r) || M(r) || G(r)))
                throw l.console.error("Invalid call to Attr.set. Key ", t, ":: Value ", r, ":: Element ", e),
                new Error("Attribute value was not simple");
            e.setAttribute(t, r + "")
        }(e.dom(), t, r)
    }, fe = function(e, t) {
        var r = e.dom().getAttribute(t);
        return null === r ? void 0 : r
    }, de = function(e, t) {
        var r = e.dom();
        return !(!r || !r.hasAttribute) && r.hasAttribute(t)
    }, me = function(e, t) {
        e.dom().removeAttribute(t)
    }, pe = function(e) {
        if (null == e)
            throw new Error("Node cannot be null or undefined");
        return {
            dom: N(e)
        }
    }, he = {
        fromHtml: function(e, t) {
            var r = (t || l.document).createElement("div");
            if (r.innerHTML = e,
            !r.hasChildNodes() || 1 < r.childNodes.length)
                throw l.console.error("HTML does not have a single root node", e),
                new Error("HTML must have a single root node");
            return pe(r.childNodes[0])
        },
        fromTag: function(e, t) {
            var r = (t || l.document).createElement(e);
            return pe(r)
        },
        fromText: function(e, t) {
            var r = (t || l.document).createTextNode(e);
            return pe(r)
        },
        fromDom: pe,
        fromPoint: function(e, t, r) {
            var n = e.dom();
            return O.from(n.elementFromPoint(t, r)).map(pe)
        }
    }, ve = function() {
        for (var t = [], e = 0; e < arguments.length; e++)
            t[e] = arguments[e];
        return function() {
            for (var r = [], e = 0; e < arguments.length; e++)
                r[e] = arguments[e];
            if (t.length !== r.length)
                throw new Error('Wrong number of arguments to struct. Expected "[' + t.length + ']", got ' + r.length + " arguments");
            var n = {};
            return W(t, function(e, t) {
                n[e] = N(r[t])
            }),
            n
        }
    }, ye = function(e) {
        return e.slice(0).sort()
    }, ge = function(t, e) {
        if (!C(e))
            throw new Error("The " + t + " fields must be an array. Was: " + e + ".");
        W(e, function(e) {
            if (!R(e))
                throw new Error("The value " + e + " in the " + t + " fields was not a string.")
        })
    }, we = function(o, i) {
        var r, a = o.concat(i);
        if (0 === a.length)
            throw new Error("You must specify at least one required or optional field.");
        return ge("required", o),
        ge("optional", i),
        r = ye(a),
        U(r, function(e, t) {
            return t < r.length - 1 && e === r[t + 1]
        }).each(function(e) {
            throw new Error("The field: " + e + " occurs more than once in the combined fields: [" + r.join(", ") + "].")
        }),
        function(t) {
            var r = ee(t);
            z(o, function(e) {
                return L(r, e)
            }) || function(e, t) {
                throw new Error("All required keys (" + ye(e).join(", ") + ") were not specified. Specified keys were: " + ye(t).join(", ") + ".")
            }(o, r);
            var e = q(r, function(e) {
                return !L(a, e)
            });
            0 < e.length && function(e) {
                throw new Error("Unsupported keys for object: " + ye(e).join(", "))
            }(e);
            var n = {};
            return W(o, function(e) {
                n[e] = N(t[e])
            }),
            W(i, function(e) {
                n[e] = N(Object.prototype.hasOwnProperty.call(t, e) ? O.some(t[e]) : O.none())
            }),
            n
        }
    }, be = function(e, t, r) {
        return 0 != (e.compareDocumentPosition(t) & r)
    }, xe = function(e, t) {
        return be(e, t, l.Node.DOCUMENT_POSITION_CONTAINED_BY)
    }, ke = function() {
        return Te(0, 0)
    }, Te = function(e, t) {
        return {
            major: e,
            minor: t
        }
    }, Ne = {
        nu: Te,
        detect: function(e, t) {
            var r = String(t).toLowerCase();
            return 0 === e.length ? ke() : function(e, t) {
                var r = function(e, t) {
                    for (var r = 0; r < e.length; r++) {
                        var n = e[r];
                        if (n.test(t))
                            return n
                    }
                }(e, t);
                if (!r)
                    return {
                        major: 0,
                        minor: 0
                    };
                var n = function(e) {
                    return Number(t.replace(r, "$" + e))
                };
                return Te(n(1), n(2))
            }(e, r)
        },
        unknown: ke
    }, Ae = "Firefox", De = function(e, t) {
        return function() {
            return t === e
        }
    }, Se = function(e) {
        var t = e.current;
        return {
            current: t,
            version: e.version,
            isEdge: De("Edge", t),
            isChrome: De("Chrome", t),
            isIE: De("IE", t),
            isOpera: De("Opera", t),
            isFirefox: De(Ae, t),
            isSafari: De("Safari", t)
        }
    }, Ee = {
        unknown: function() {
            return Se({
                current: void 0,
                version: Ne.unknown()
            })
        },
        nu: Se,
        edge: N("Edge"),
        chrome: N("Chrome"),
        ie: N("IE"),
        opera: N("Opera"),
        firefox: N(Ae),
        safari: N("Safari")
    }, Oe = "Windows", Ie = "Android", Re = "Solaris", Ce = "FreeBSD", Me = function(e, t) {
        return function() {
            return t === e
        }
    }, _e = function(e) {
        var t = e.current;
        return {
            current: t,
            version: e.version,
            isWindows: Me(Oe, t),
            isiOS: Me("iOS", t),
            isAndroid: Me(Ie, t),
            isOSX: Me("OSX", t),
            isLinux: Me("Linux", t),
            isSolaris: Me(Re, t),
            isFreeBSD: Me(Ce, t)
        }
    }, Ge = {
        unknown: function() {
            return _e({
                current: void 0,
                version: Ne.unknown()
            })
        },
        nu: _e,
        windows: N(Oe),
        ios: N("iOS"),
        android: N(Ie),
        linux: N("Linux"),
        osx: N("OSX"),
        solaris: N(Re),
        freebsd: N(Ce)
    }, He = function(e, t) {
        var r = String(t).toLowerCase();
        return U(e, function(e) {
            return e.search(r)
        })
    }, Pe = function(e, r) {
        return He(e, r).map(function(e) {
            var t = Ne.detect(e.versionRegexes, r);
            return {
                current: e.name,
                version: t
            }
        })
    }, Le = function(e, r) {
        return He(e, r).map(function(e) {
            var t = Ne.detect(e.versionRegexes, r);
            return {
                current: e.name,
                version: t
            }
        })
    }, Ve = function(e, t) {
        return -1 !== e.indexOf(t)
    }, We = /.*?version\/\ ?([0-9]+)\.([0-9]+).*/, qe = function(t) {
        return function(e) {
            return Ve(e, t)
        }
    }, Ue = [{
        name: "Edge",
        versionRegexes: [/.*?edge\/ ?([0-9]+)\.([0-9]+)$/],
        search: function(e) {
            return Ve(e, "edge/") && Ve(e, "chrome") && Ve(e, "safari") && Ve(e, "applewebkit")
        }
    }, {
        name: "Chrome",
        versionRegexes: [/.*?chrome\/([0-9]+)\.([0-9]+).*/, We],
        search: function(e) {
            return Ve(e, "chrome") && !Ve(e, "chromeframe")
        }
    }, {
        name: "IE",
        versionRegexes: [/.*?msie\ ?([0-9]+)\.([0-9]+).*/, /.*?rv:([0-9]+)\.([0-9]+).*/],
        search: function(e) {
            return Ve(e, "msie") || Ve(e, "trident")
        }
    }, {
        name: "Opera",
        versionRegexes: [We, /.*?opera\/([0-9]+)\.([0-9]+).*/],
        search: qe("opera")
    }, {
        name: "Firefox",
        versionRegexes: [/.*?firefox\/\ ?([0-9]+)\.([0-9]+).*/],
        search: qe("firefox")
    }, {
        name: "Safari",
        versionRegexes: [We, /.*?cpu os ([0-9]+)_([0-9]+).*/],
        search: function(e) {
            return (Ve(e, "safari") || Ve(e, "mobile/")) && Ve(e, "applewebkit")
        }
    }], je = [{
        name: "Windows",
        search: qe("win"),
        versionRegexes: [/.*?windows\ nt\ ?([0-9]+)\.([0-9]+).*/]
    }, {
        name: "iOS",
        search: function(e) {
            return Ve(e, "iphone") || Ve(e, "ipad")
        },
        versionRegexes: [/.*?version\/\ ?([0-9]+)\.([0-9]+).*/, /.*cpu os ([0-9]+)_([0-9]+).*/, /.*cpu iphone os ([0-9]+)_([0-9]+).*/]
    }, {
        name: "Android",
        search: qe("android"),
        versionRegexes: [/.*?android\ ?([0-9]+)\.([0-9]+).*/]
    }, {
        name: "OSX",
        search: qe("os x"),
        versionRegexes: [/.*?os\ x\ ?([0-9]+)_([0-9]+).*/]
    }, {
        name: "Linux",
        search: qe("linux"),
        versionRegexes: []
    }, {
        name: "Solaris",
        search: qe("sunos"),
        versionRegexes: []
    }, {
        name: "FreeBSD",
        search: qe("freebsd"),
        versionRegexes: []
    }], Be = {
        browsers: N(Ue),
        oses: N(je)
    }, Fe = function(e) {
        var t, r, n, o, i, a, u, c, s, l, f, d = Be.browsers(), m = Be.oses(), p = Pe(d, e).fold(Ee.unknown, Ee.nu), h = Le(m, e).fold(Ge.unknown, Ge.nu);
        return {
            browser: p,
            os: h,
            deviceType: (r = p,
            n = e,
            o = (t = h).isiOS() && !0 === /ipad/i.test(n),
            i = t.isiOS() && !o,
            a = t.isAndroid() && 3 === t.version.major,
            u = t.isAndroid() && 4 === t.version.major,
            c = o || a || u && !0 === /mobile/i.test(n),
            s = t.isiOS() || t.isAndroid(),
            l = s && !c,
            f = r.isSafari() && t.isiOS() && !1 === /safari/i.test(n),
            {
                isiPad: N(o),
                isiPhone: N(i),
                isTablet: N(c),
                isPhone: N(l),
                isTouch: N(s),
                isAndroid: t.isAndroid,
                isiOS: t.isiOS,
                isWebView: N(f)
            })
        }
    }, ze = (f = !(c = function() {
        var e = l.navigator.userAgent;
        return Fe(e)
    }
    ),
    function() {
        for (var e = [], t = 0; t < arguments.length; t++)
            e[t] = arguments[t];
        return f || (f = !0,
        s = c.apply(null, e)),
        s
    }
    ), Ye = re, Xe = te, $e = function(e, t) {
        var r = e.dom();
        if (r.nodeType !== Ye)
            return !1;
        var n = r;
        if (void 0 !== n.matches)
            return n.matches(t);
        if (void 0 !== n.msMatchesSelector)
            return n.msMatchesSelector(t);
        if (void 0 !== n.webkitMatchesSelector)
            return n.webkitMatchesSelector(t);
        if (void 0 !== n.mozMatchesSelector)
            return n.mozMatchesSelector(t);
        throw new Error("Browser lacks native selectors")
    }, Ke = function(e) {
        return e.nodeType !== Ye && e.nodeType !== Xe || 0 === e.childElementCount
    }, Je = function(e, t) {
        var r = void 0 === t ? l.document : t.dom();
        return Ke(r) ? O.none() : O.from(r.querySelector(e)).map(he.fromDom)
    }, Qe = ({
        detect: ze
    }.detect().browser.isIE(),
    function(e) {
        return he.fromDom(e.dom().ownerDocument)
    }
    ), Ze = function(e) {
        return O.from(e.dom().parentNode).map(he.fromDom)
    }, et = function(e) {
        return V(e.dom().childNodes, he.fromDom)
    }, tt = function(e) {
        return t = 0,
        r = e.dom().childNodes,
        O.from(r[t]).map(he.fromDom);
        var t, r
    }, rt = (ve("element", "offset"),
    function(t, r) {
        Ze(t).each(function(e) {
            e.dom().insertBefore(r.dom(), t.dom())
        })
    }
    ), nt = function(e, t) {
        var r;
        (r = e,
        O.from(r.dom().nextSibling).map(he.fromDom)).fold(function() {
            Ze(e).each(function(e) {
                ot(e, t)
            })
        }, function(e) {
            rt(e, t)
        })
    }, ot = function(e, t) {
        e.dom().appendChild(t.dom())
    }, it = function(t, e) {
        W(e, function(e) {
            ot(t, e)
        })
    }, at = function(e) {
        e.dom().textContent = "",
        W(et(e), function(e) {
            ut(e)
        })
    }, ut = function(e) {
        var t = e.dom();
        null !== t.parentNode && t.parentNode.removeChild(t)
    }, ct = function(e) {
        var t, r = et(e);
        0 < r.length && (t = e,
        W(r, function(e) {
            rt(t, e)
        })),
        ut(e)
    }, st = function(e) {
        var t = e.dom().body;
        if (null == t)
            throw new Error("Body is not available yet");
        return he.fromDom(t)
    }, lt = function(e) {
        return Je(e)
    }, ft = function(e, t) {
        return r = function(e) {
            return $e(e, t)
        }
        ,
        U(e.dom().childNodes, function(e) {
            return r(he.fromDom(e))
        }).map(he.fromDom);
        var r
    }, dt = function(e, t) {
        return Je(t, e)
    }, mt = function(e) {
        return lt(e).isSome()
    }, pt = (d = "ephox-foam".replace(/\./g, "-"),
    {
        resolve: function(e) {
            return d + "-" + e
        }
    }), ht = pt.resolve("styles"), vt = "#" + ht, yt = {
        resolve: pt.resolve,
        injectStyles: function(e) {
            if (!mt(vt)) {
                var t = he.fromTag("link");
                le(t, "id", ht),
                le(t, "rel", "stylesheet"),
                le(t, "href", e);
                var r = lt("head").getOrDie("Head element could not be found.");
                ot(r, t)
            }
        },
        removeStyles: function() {
            if (mt(vt)) {
                var e = lt("head").getOrDie("Head element could not be found.")
                  , t = dt(e, vt).getOrDie("The style element could not be removed");
                ut(t)
            }
        }
    }, gt = function(e) {
        var t = e
          , r = function() {
            return t
        };
        return {
            get: r,
            set: function(e) {
                t = e
            },
            clone: function() {
                return gt(r())
            }
        }
    }, wt = we(["rules"], []), bt = we(["rule", "element"], []), xt = function(e, t, r) {
        return 0 != (e.compareDocumentPosition(t) & r)
    }, kt = function(e, t) {
        return xt(e, t, l.Node.DOCUMENT_POSITION_PRECEDING)
    }, Tt = function(t, e) {
        return F(e, function(e) {
            return e.check()(t) ? [bt({
                rule: e,
                element: t
            })] : []
        })
    }, Nt = function(e, t) {
        for (var r = [], n = function(e, t) {
            for (var r = [], n = [], o = 0, i = e.length; o < i; o++) {
                var a = e[o];
                (t(a, o, e) ? r : n).push(a)
            }
            return {
                pass: r,
                fail: n
            }
        }(t, function(e) {
            return e.walkable()
        }), o = n.pass, i = n.fail, a = l.document.createTreeWalker(e, l.NodeFilter.SHOW_ELEMENT, null, !1); a.nextNode(); )
            r = r.concat(Tt(a.currentNode, o));
        var u, c = (u = e,
        F(i, function(t) {
            return V(t.check()(u), function(e) {
                return bt({
                    rule: t,
                    element: e
                })
            })
        }));
        return (r = r.concat(c)).sort(function(e, t) {
            return r = e.element(),
            n = t.element(),
            r === n ? 0 : kt(r, n) ? 1 : -1;
            var r, n
        }),
        r
    };
    var At = we(["id", "wcag", "severity", "desckey", "url", "walkable", "check", "levels", "htmlversions"], [])
      , Dt = {
        error: N("error"),
        warning: N("warning"),
        info: N("info")
    }
      , St = function(e, t) {
        return e.matches ? e.matches(t) : e.webkitMatchesSelector ? e.webkitMatchesSelector(t) : e.mozMatchesSelector ? e.mozMatchesSelector(t) : !!e.msMatchesSelector && e.msMatchesSelector(t)
    }
      , Et = At({
        id: "D1",
        wcag: "1.3.1",
        severity: Dt.warning(),
        desckey: "a11y.d1.description",
        url: "http://www.w3.org/TR/UNDERSTANDING-WCAG20/content-structure-separation-programmatic.html",
        walkable: !0,
        check: function(e) {
            return !!St(e, "p") && z(e.childNodes, function(e) {
                return /^(b|strong)$/i.test(e.nodeName)
            })
        },
        levels: [Y.a(), Y.aa(), Y.aaa()],
        htmlversions: [X.html4(), X.html5()]
    })
      , Ot = At({
        id: "D2",
        wcag: "1.3.1",
        severity: Dt.error(),
        desckey: "a11y.d2.description",
        url: "http://www.w3.org/TR/UNDERSTANDING-WCAG20/content-structure-separation-programmatic.html",
        walkable: !1,
        check: function(e) {
            var r, t = e.querySelectorAll("h1, h2, h3, h4, h5, h6"), n = [];
            return W(t, function(e) {
                var t = parseInt(e.tagName.slice(1), 10);
                r && 1 < t - r && n.push(e),
                r = t
            }),
            n
        },
        levels: [Y.a(), Y.aa(), Y.aaa()],
        htmlversions: [X.html4(), X.html5()]
    })
      , It = At({
        id: "D3",
        wcag: "2.4.4",
        severity: Dt.error(),
        desckey: "a11y.d3.description",
        url: "http://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-refs.html",
        walkable: !1,
        check: function(e) {
            return q(e.querySelectorAll("a + a"), function(e) {
                return e.href === e.previousSibling.href
            })
        },
        levels: [Y.a(), Y.aa(), Y.aaa()],
        htmlversions: [X.html4(), X.html5()]
    })
      , Rt = function(e) {
        var t = e.nodeName
          , r = function(e) {
            for (var t = e.nextSibling; null !== t && ("#text" === t.nodeName || "BR" === t.nodeName); )
                t = t.nextSibling;
            return t
        }(e);
        return null !== r && r.nodeName === t && r
    }
      , Ct = function(e, t) {
        for (var r = Rt(e), n = t(e) ? [e] : []; !1 !== r && t(r); )
            n.push(r),
            r = Rt(r);
        return n
    }
      , Mt = function(e, t) {
        for (var r = -1, n = 0; n < e.length; n++)
            if (e[n] === t) {
                r = n;
                break
            }
        return r
    }
      , _t = function(e, t) {
        for (var r = e.querySelectorAll("p,h1,h2,h3,h4,h5,h6"), n = [], o = 0; o < r.length; ) {
            var i = r[o]
              , a = Ct(i, t);
            if (1 < a.length) {
                n.push(a[0]);
                var u = a[a.length - 1]
                  , c = Mt(r, u);
                o = -1 === c ? o + 1 : c
            } else
                o++
        }
        return n
    }
      , Gt = function(e) {
        return e.textContent.match(/^\s{0,}([a-z1-9]|i+)\s{0,}[.)-]/gim)
    }
      , Ht = At({
        id: "D4o",
        wcag: "1.3.1",
        severity: Dt.error(),
        desckey: "a11y.d4.description",
        url: "http://www.w3.org/TR/UNDERSTANDING-WCAG20/content-structure-separation-programmatic.html",
        walkable: !1,
        check: function(e) {
            return _t(e, Gt)
        },
        levels: [Y.a(), Y.aa(), Y.aaa()],
        htmlversions: [X.html4(), X.html5()]
    })
      , Pt = function(e) {
        return e.textContent.match(/^\s{0,}(\*|-)\s{0,}/gim)
    }
      , Lt = At({
        id: "D4u",
        wcag: "1.3.1",
        severity: Dt.error(),
        desckey: "a11y.d4.description",
        url: "http://www.w3.org/TR/UNDERSTANDING-WCAG20/content-structure-separation-programmatic.html",
        walkable: !1,
        check: function(e) {
            return _t(e, Pt)
        },
        levels: [Y.a(), Y.aa(), Y.aaa()],
        htmlversions: [X.html4(), X.html5()]
    })
      , Vt = ve("red", "green", "blue", "alpha")
      , Wt = {
        rgbaColour: Vt,
        white: function() {
            return Vt(255, 255, 255, 1)
        }
    }
      , qt = function(e, t) {
        return (Math.max(e, t) + .05) / (Math.min(e, t) + .05)
    }
      , Ut = function(e) {
        var t = function(e) {
            return e <= .03928 ? e / 12.92 : Math.pow((e + .055) / 1.055, 2.4)
        }
          , r = e.red() / 255
          , n = e.green() / 255
          , o = e.blue() / 255;
        return .2126 * t(r) + .7152 * t(n) + .0722 * t(o)
    }
      , jt = function(e, t) {
        var r = e.alpha() + t.alpha() * (1 - e.alpha())
          , n = (e.red() * e.alpha() + t.red() * t.alpha() * (1 - e.alpha())) / r
          , o = (e.green() * e.alpha() + t.green() * t.alpha() * (1 - e.alpha())) / r
          , i = (e.blue() * e.alpha() + t.blue() * t.alpha() * (1 - e.alpha())) / r;
        return Wt.rgbaColour(Math.ceil(n), Math.ceil(o), Math.ceil(i), r)
    }
      , Bt = function(e) {
        var t = function(e, t, r, n) {
            var o = parseInt(e, 10)
              , i = parseInt(t, 10)
              , a = parseInt(r, 10)
              , u = parseFloat(n);
            return O.some(Wt.rgbaColour(o, i, a, u))
        };
        if ("transparent" === e)
            return t(0, 0, 0, 0);
        var r = e.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)/);
        if (null !== r)
            return t(r[1], r[2], r[3], 1);
        var n = e.match(/^rgba\((\d+),\s*(\d+),\s*(\d+),\s*(\d?(?:\.\d+)?)\)/);
        return null !== n ? t(n[1], n[2], n[3], n[4]) : O.none()
    }
      , Ft = function(e, t) {
        var r, n, o = e.dom(), i = l.window.getComputedStyle(o).getPropertyValue(t), a = "" !== i || null != (n = se(r = e) ? r.dom().parentNode : r.dom()) && n.ownerDocument.body.contains(n) ? i : zt(o, t);
        return null === a ? void 0 : a
    }
      , zt = function(e, t) {
        return void 0 !== (r = e).style && _(r.style.getPropertyValue) ? e.style.getPropertyValue(t) : "";
        var r
    }
      , Yt = function(e, t) {
        var r = parseFloat(Ft(e, "opacity"));
        return r < 1 ? Wt.rgbaColour(t.red(), t.green(), t.blue(), t.alpha() * r) : t
    }
      , Xt = function(e) {
        var t, r, n, o = Qe(e), i = st(o), a = [e].concat(function(e, t) {
            for (var r = _(t) ? t : x, n = e.dom(), o = []; null !== n.parentNode && void 0 !== n.parentNode; ) {
                var i = n.parentNode
                  , a = he.fromDom(i);
                if (o.push(a),
                !0 === r(a))
                    break;
                n = i
            }
            return o
        }(e, function(e) {
            return t = i,
            e.dom() === t.dom();
            var t
        })), u = (t = a,
        r = function(r, n) {
            if (1 === r.alpha())
                return r;
            var e = Ft(n, "background-color");
            return Bt(e).bind(function(e) {
                var t = Yt(n, e);
                return 0 < t.alpha() ? O.some(jt(r, t)) : O.none()
            }).getOr(r)
        }
        ,
        n = Wt.rgbaColour(0, 0, 0, 0),
        W(t, function(e) {
            n = r(n, e)
        }),
        n);
        return u.alpha() < 1 ? jt(u, Wt.white()) : u
    }
      , $t = function(n, o) {
        var e = Ft(n, "color");
        return Bt(e).bind(function(e) {
            var t = Yt(n, e)
              , r = t.alpha() < 1 ? jt(t, o) : t;
            return O.some(r)
        })
    }
      , Kt = function(e) {
        var n = Xt(e);
        return $t(e, n).map(function(e) {
            var t = Ut(n)
              , r = Ut(e);
            return qt(r, t)
        })
    }
      , Jt = function(e, t) {
        return Kt(e).filter(function(e) {
            return e < t
        }).isSome()
    }
      , Qt = function(e) {
        var t = Ft(e, "font-size")
          , r = new RegExp(".*px").test(t)
          , n = t.match(/(\d*\.?\d*)(.*)/);
        return r && null !== n ? O.some(Number(n[1])) : O.none()
    }
      , Zt = function(e) {
        var t, r, n = !("bold" !== (r = Ft(e, "font-weight")) && "bolder" !== r) || !!/^[0-9]*$/.test(t = r) && 700 <= parseInt(t, 10), o = Qe(e), i = st(o), a = Qt(i);
        return Qt(e).fold(x, function(t) {
            return a.fold(function() {
                return 24 <= t || n && 19 <= t
            }, function(e) {
                return 1.5 * e <= t || n && 1.2 * e <= t
            })
        })
    }
      , er = function(e) {
        var t = et(e);
        return 0 < q(t, function(e) {
            return se(e) && 0 < (t = e,
            t.dom().nodeValue).trim().length;
            var t
        }).length
    }
      , tr = At({
        id: "D5a",
        wcag: "1.4.3",
        severity: Dt.error(),
        desckey: "a11y.d5a.description",
        url: "https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html",
        walkable: !0,
        check: function(e) {
            var t = he.fromDom(e);
            return er(t) && Zt(t) && Jt(t, 3)
        },
        levels: [Y.aa()],
        htmlversions: [X.html4(), X.html5()]
    })
      , rr = At({
        id: "D5b",
        wcag: "1.4.3",
        severity: Dt.error(),
        desckey: "a11y.d5b.description",
        url: "https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html",
        walkable: !0,
        check: function(e) {
            var t = he.fromDom(e);
            return er(t) && !Zt(t) && Jt(t, 4.5)
        },
        levels: [Y.aa()],
        htmlversions: [X.html4(), X.html5()]
    })
      , nr = At({
        id: "I1",
        wcag: "1.1.1",
        severity: Dt.error(),
        desckey: "a11y.i1.description",
        url: "http://www.w3.org/TR/UNDERSTANDING-WCAG20/text-equiv-all.html",
        walkable: !0,
        check: function(e) {
            return St(e, "img") && (!1 === e.hasAttribute("alt") || "" === e.getAttribute("alt").trim())
        },
        levels: [Y.a(), Y.aa(), Y.aaa()],
        htmlversions: [X.html4(), X.html5()]
    })
      , or = At({
        id: "I2",
        wcag: "1.1.1",
        severity: Dt.error(),
        desckey: "a11y.i2.description",
        url: "http://www.w3.org/TR/UNDERSTANDING-WCAG20/text-equiv-all.html",
        walkable: !0,
        check: function(e) {
            return St(e, "img[alt][src]") && e.src.split("/").pop() === e.alt.split("/").pop()
        },
        levels: [Y.a(), Y.aa(), Y.aaa()],
        htmlversions: [X.html4(), X.html5()]
    })
      , ir = At({
        id: "T1",
        wcag: "1.3.1",
        severity: Dt.error(),
        desckey: "a11y.t1.description",
        url: "http://www.w3.org/TR/UNDERSTANDING-WCAG20/content-structure-separation-programmatic.html",
        walkable: !0,
        check: function(e) {
            if (St(e, "table")) {
                var t = e.querySelector("caption");
                return !t || St(t, ":empty")
            }
            return !1
        },
        levels: [Y.a(), Y.aa(), Y.aaa()],
        htmlversions: [X.html4(), X.html5()]
    })
      , ar = At({
        id: "T2",
        wcag: "1.3.1",
        severity: Dt.warning(),
        desckey: "a11y.t2.description",
        url: "http://www.w3.org/TR/UNDERSTANDING-WCAG20/content-structure-separation-programmatic.html",
        walkable: !0,
        check: function(e) {
            return St(e, "table") && (e.querySelector("[rowspan]") || e.querySelector("[colspan]")) && !e.hasAttribute("summary")
        },
        levels: [Y.a(), Y.aa(), Y.aaa()],
        htmlversions: [X.html4()]
    })
      , ur = At({
        id: "T3",
        wcag: "1.3.1",
        severity: Dt.error(),
        desckey: "a11y.t3.description",
        url: "http://www.w3.org/TR/UNDERSTANDING-WCAG20/content-structure-separation-programmatic.html",
        walkable: !0,
        check: function(e) {
            return St(e, "table") && e.hasAttribute("summary") && 0 < e.querySelectorAll("caption").length && e.getAttribute("summary") === e.querySelector("caption").innerHTML
        },
        levels: [Y.a(), Y.aa(), Y.aaa()],
        htmlversions: [X.html4(), X.html5()]
    })
      , cr = At({
        id: "T4b",
        wcag: "1.3.1",
        severity: Dt.error(),
        desckey: "a11y.t4b.description",
        url: "http://www.w3.org/TR/UNDERSTANDING-WCAG20/content-structure-separation-programmatic.html",
        walkable: !0,
        check: function(e) {
            return "table" === e.nodeName.toLowerCase() && 0 === e.querySelectorAll("th").length
        },
        levels: [Y.a(), Y.aa(), Y.aaa()],
        htmlversions: [X.html4(), X.html5()]
    })
      , sr = At({
        id: "T4c",
        wcag: "1.3.1",
        severity: Dt.error(),
        desckey: "a11y.t4c.description",
        url: "http://www.w3.org/TR/UNDERSTANDING-WCAG20/content-structure-separation-programmatic.html",
        walkable: !0,
        check: function(e) {
            return "th" === e.nodeName.toLowerCase() && (r = !1 === (t = e).hasAttribute("scope"),
            n = !1 === /row|col|rowgroup|colgroup/i.test(t.getAttribute("scope")),
            r || n);
            var t, r, n
        },
        levels: [Y.a(), Y.aa(), Y.aaa()],
        htmlversions: [X.html4(), X.html5()]
    })
      , lr = function(e, t) {
        return 0 === e.querySelectorAll(t).length
    }
      , fr = At({
        id: "T4a",
        wcag: "1.3.1",
        severity: Dt.error(),
        desckey: "a11y.t4a.description",
        url: "http://www.w3.org/TR/UNDERSTANDING-WCAG20/content-structure-separation-programmatic.html",
        walkable: !0,
        check: function(e) {
            return "table" === e.nodeName.toLowerCase() && (lr(t = e, "tr") || lr(t, "td"));
            var t
        },
        levels: [Y.a(), Y.aa(), Y.aaa()],
        htmlversions: [X.html4(), X.html5()]
    })
      , dr = At({
        id: "D5c",
        wcag: "1.4.3",
        severity: Dt.error(),
        desckey: "a11y.d5c.description",
        url: "https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html",
        walkable: !0,
        check: function(e) {
            var t = he.fromDom(e);
            return er(t) && Jt(t, 7)
        },
        levels: [Y.aaa()],
        htmlversions: [X.html4(), X.html5()]
    })
      , mr = {
        all: N([Et, Ot, It, Ht, Lt, tr, rr, dr, nr, or, ir, ar, ur, sr, fr, cr])
    }
      , pr = function() {
        return mr.all().slice()
    }
      , hr = we(["id", "description", "element", "severity", "url"], [])
      , vr = function(e, t, r) {
        var n = fe(e, t).concat(" ", r);
        yr(e, t, n)
    }
      , yr = function(e, t, r) {
        le(e, t, r)
    }
      , gr = function(e, t) {
        return de(e, t) ? fe(e, t).split(" ") : []
    }
      , wr = function(e, t, r) {
        (de(e, t) ? vr : yr)(e, t, r)
    }
      , br = function(e, t) {
        return r = function(e) {
            return $e(e, t)
        }
        ,
        q(et(e), r);
        var r
    }
      , xr = function(e, t) {
        return r = t,
        o = void 0 === (n = e) ? l.document : n.dom(),
        Ke(o) ? [] : V(o.querySelectorAll(r), he.fromDom);
        var r, n, o
    }
      , kr = function(e, t, r) {
        le(e, t, r)
    }
      , Tr = function(e, r, t, n, o, i) {
        W(e, function(t) {
            var e = Nr(t.severity(), n, o, i).toArray().concat([r]);
            W(e, function(e) {
                le(t.element(), e, 1)
            })
        }),
        O.from(e[0]).each(function(e) {
            kr(e.element(), t, e.severity())
        })
    }
      , Nr = function(e, t, r, n) {
        switch (e) {
        case "info":
            return O.some(t);
        case "warning":
            return O.some(r);
        case "error":
            return O.some(n);
        default:
            return O.none()
        }
    }
      , Ar = function(e, t, r, n) {
        var o = xr(e, "[" + t + "]");
        W(o, function(e) {
            me(e, t)
        }),
        kr(r, t, n)
    }
      , Dr = function(e, r, n, o, i, a) {
        var t = xr(e, "[" + r + "]");
        W(t, function(t) {
            W([r, n, o, i, a], function(e) {
                me(t, e)
            }),
            Sr(t, r, n)
        })
    }
      , Sr = function(e, t, r) {
        me(e, t),
        me(e, r)
    }
      , Er = function(n) {
        var o = n.editor();
        return {
            start: function(e) {
                Tr(e, n.violation(), n.current(), n.info(), n.warn(), n.error())
            },
            moveTo: function(e, t) {
                var r = he.fromDom(o.getBody());
                Ar(r, n.current(), e, t)
            },
            stop: function() {
                var e = he.fromDom(o.getBody());
                Dr(e, n.violation(), n.current(), n.info(), n.warn(), n.error())
            },
            exclude: function(e) {
                Sr(e, n.violation(), n.current())
            }
        }
    }
      , Or = "data-" + yt.resolve("a11y-current-violation")
      , Ir = "data-" + yt.resolve("a11y-violation")
      , Rr = "data-" + yt.resolve("a11y-severity-info")
      , Cr = "data-" + yt.resolve("a11y-severity-warn")
      , Mr = "data-" + yt.resolve("a11y-severity-error")
      , _r = "data-" + yt.resolve("accessibility-ignore")
      , Gr = we(["editor", "violation", "current", "info", "warn", "error"], [])
      , Hr = {
        configure: function(t) {
            t.on("init", function(e) {
                W([_r, Ir, Rr, Cr, Mr, Or], function(e) {
                    t.serializer.addTempAttr(e)
                })
            })
        },
        ignoreAttr: N(_r),
        manager: function(e) {
            return Er(Gr({
                editor: e,
                violation: Ir,
                current: Or,
                info: Rr,
                warn: Cr,
                error: Mr
            }))
        }
    }
      , Pr = function(r) {
        var e, t, n, o, i, a, u, c, s = (e = r.settings,
        t = e.a11ychecker_level,
        L($, t) ? t : Y.aa()), l = (n = r.settings,
        o = n.a11ychecker_html_version,
        L(K, o) ? o : X.html4()), f = (i = s,
        a = l,
        u = pr(),
        c = q(u, function(e) {
            return L(e.levels(), i) && L(e.htmlversions(), a)
        }),
        wt({
            rules: c
        }));
        Hr.configure(r);
        var d, m = gt(!1), p = (d = f,
        {
            audit: function(e) {
                return Nt(e, d.rules())
            }
        }), h = Hr.manager(r), v = Hr.ignoreAttr(), y = [], g = 0, w = function() {
            return m.set(!0),
            y = b(),
            g = 0,
            h.start(y),
            k()
        }, b = function() {
            var e = !0 === r.settings.a11ychecker_allow_decorative_images ? p.audit(r.getBody()).filter(function(e) {
                return !1 === function(e) {
                    if ("I1" === e.rule().id()) {
                        var t = e.element();
                        return !!(!0 === (n = t).hasAttribute("role") && "presentation" === n.getAttribute("role") || (r = t).hasAttribute("alt") && "" === r.getAttribute("alt").trim())
                    }
                    return !1;
                    var r, n
                }(e)
            }) : p.audit(r.getBody())
              , t = V(e, function(e) {
                var t = e.rule()
                  , r = t.id().toUpperCase()
                  , n = t.desckey();
                return hr({
                    id: r,
                    description: n,
                    element: he.fromDom(e.element()),
                    url: t.url(),
                    severity: t.severity()
                })
            });
            return q(t, function(t) {
                var e = t.element()
                  , r = gr(e, v);
                return z(r, function(e) {
                    return t.id() !== e
                })
            })
        }, x = function(e) {
            return g = (g += e) < 0 ? g + y.length : g % y.length,
            h.moveTo(y[g].element(), y[g].severity()),
            r.selection.scrollIntoView(y[g].element().dom()),
            {
                summaryLabel: "Issue " + (g + 1) + " of " + y.length,
                issue: y[g],
                index: g + 1
            }
        }, k = function() {
            return 0 < y.length ? O.some(x(0)) : O.none()
        }, T = function() {
            h.stop(),
            m.set(!1),
            g = 0,
            y = []
        };
        return {
            scan: w,
            stepIssue: x,
            getIssues: function() {
                return y.slice(0)
            },
            getCurrent: k,
            getReport: function() {
                var e = m.get();
                try {
                    return e || w(),
                    V(y, function(e) {
                        return {
                            severity: e.severity,
                            url: e.url,
                            description: N(Z(e.description())),
                            element: N(e.element().dom())
                        }
                    })
                } finally {
                    e || T()
                }
            },
            resolveCurrent: function(e) {
                return e && wr(y[g].element(), v, y[g].id()),
                y = y.slice(0, g).concat(y.slice(g + 1)),
                k()
            },
            clear: T,
            isAuditing: function() {
                return m.get()
            }
        }
    }
      , Lr = function(r) {
        return {
            is: function(e) {
                return r === e
            },
            isValue: k,
            isError: x,
            getOr: N(r),
            getOrThunk: N(r),
            getOrDie: N(r),
            or: function(e) {
                return Lr(r)
            },
            orThunk: function(e) {
                return Lr(r)
            },
            fold: function(e, t) {
                return t(r)
            },
            map: function(e) {
                return Lr(e(r))
            },
            mapError: function(e) {
                return Lr(r)
            },
            each: function(e) {
                e(r)
            },
            bind: function(e) {
                return e(r)
            },
            exists: function(e) {
                return e(r)
            },
            forall: function(e) {
                return e(r)
            },
            toOption: function() {
                return O.some(r)
            }
        }
    }
      , Vr = function(r) {
        return {
            is: x,
            isValue: x,
            isError: k,
            getOr: b,
            getOrThunk: function(e) {
                return e()
            },
            getOrDie: function() {
                return e = String(r),
                function() {
                    throw new Error(e)
                }();
                var e
            },
            or: function(e) {
                return e
            },
            orThunk: function(e) {
                return e()
            },
            fold: function(e, t) {
                return e(r)
            },
            map: function(e) {
                return Vr(r)
            },
            mapError: function(e) {
                return Vr(e(r))
            },
            each: w,
            bind: function(e) {
                return Vr(r)
            },
            exists: x,
            forall: k,
            toOption: O.none
        }
    }
      , Wr = {
        value: Lr,
        error: Vr,
        fromOption: function(e, t) {
            return e.fold(function() {
                return Vr(t)
            }, Lr)
        }
    }
      , qr = function(e) {
        return t = e,
        r = !0,
        he.fromDom(t.dom().cloneNode(r));
        var t, r
    }
      , Ur = function(e, t) {
        var r = Qe(e)
          , n = he.fromTag(t, r.dom())
          , o = et(e)
          , i = V(o, qr);
        it(n, i);
        var a = xr(n, "b,strong");
        return W(a, ct),
        rt(e, n),
        ut(e),
        Wr.value(n)
    }
      , jr = function(e) {
        var t = he.fromDom(e.dom().previousSibling);
        if (t) {
            var r = et(e);
            it(t, r),
            ut(e)
        }
        return Wr.value(t)
    }
      , Br = function(e, t) {
        return Wr.error(t(e))
    }
      , Fr = function(e, t, r, n, o, i) {
        return 0 === t.length ? Br(n, i) : t === r ? Br(o, i) : Wr.value(e)
    }
      , zr = function(e) {
        var t = e.split("/");
        return 0 < t.length ? t.pop() : ""
    }
      , Yr = function(e, t, r, n, o) {
        var i, a, u = (i = e,
        a = "src",
        O.from(fe(i, a))).map(zr).getOr("");
        return Fr(e, t, u, r, n, o).map(function(e) {
            return le(e, "alt", t),
            e
        })
    }
      , Xr = function(e) {
        return e.dom().innerHTML
    }
      , $r = function(e, t) {
        var r, n, o = Qe(e).dom(), i = he.fromDom(o.createDocumentFragment()), a = (r = t,
        (n = (o || l.document).createElement("div")).innerHTML = r,
        et(he.fromDom(n)));
        it(i, a),
        at(e),
        ot(e, i)
    }
      , Kr = function(o, i, e, t, r) {
        var n = fe(o, "summary");
        return Fr(o, i, n, e, t, r).map(function(e) {
            var t, r, n = ft(o, "caption").fold(function() {
                return he.fromTag("caption")
            }, function(e) {
                return at(e),
                e
            });
            return $r(n, i),
            r = n,
            tt(t = e).fold(function() {
                ot(t, r)
            }, function(e) {
                t.dom().insertBefore(r.dom(), e.dom())
            }),
            e
        })
    }
      , Jr = function(t, r, e, n, o) {
        var i = dt(t, "caption").filter(ce).map(Xr).getOr("");
        return Fr(t, r, i, e, n, o).map(function(e) {
            return le(t, "summary", r),
            e
        })
    }
      , Qr = function(e, t) {
        var r = [];
        if ("row" === t) {
            var n = he.fromDom(e.dom().rows[0]);
            r = br(n, "td")
        } else
            "col" === t && W(e.dom().rows, function(e) {
                ft(he.fromDom(e), "td").each(function(e) {
                    r.push(e)
                })
            });
        return W(r, function(t) {
            var r = he.fromTag("th");
            W(t.dom().attributes, function(e) {
                le(r, e.name, fe(t, e.name))
            }),
            r.dom().innerHTML = t.dom().innerHTML,
            nt(t, r),
            ut(t)
        }),
        Wr.value(e)
    }
      , Zr = function(e, t) {
        return le(e, "scope", t),
        Wr.value(e)
    }
      , en = function(e, t, r, n) {
        return {
            type: "selectbox",
            label: t,
            name: e,
            items: V(r, function(e) {
                return {
                    text: n(e.text),
                    value: e.value
                }
            })
        }
    }
      , tn = function(e, t) {
        return {
            type: "input",
            name: e,
            label: t
        }
    }
      , rn = function(e) {
        return {
            type: "htmlpanel",
            html: '<div class="tox-form__group--error">' + e + "</div>"
        }
    }
      , nn = function(e, t) {
        var r = t.ui.registry.getAll().icons;
        return O.from(r[e]).orThunk(function() {
            return O.from(r["temporary-placeholder"])
        }).getOr("!not found!")
    }
      , on = function(e, t, r, n, o) {
        var i, a, u, c = Z(r), s = Z(t);
        return '<div class="accessibility-issue__description"><div><div><div class="tox-icon">' + nn("warning", e) + "</div><h2>" + c + "</h2></div><p>" + s + "</p></div><div>" + (i = n,
        a = e,
        u = '<a href="' + o + '" title="' + Z("a11y.widget.help.title") + '" class="tox-button tox-button--naked tox-button--icon" target="_blank" data-alloy-tabstop="true" tabindex="-1"><div class="tox-icon">' + nn(i, a) + "</div></a>",
        "help" === i ? u : '<div class="tox-icon">' + nn(i, a) + "</div>") + "</div></div>"
    };
    function an(t, e) {
        return {
            title: "Accessibility Checker",
            body: {
                type: "panel",
                items: [{
                    type: "panel",
                    classes: ["tox-accessibility-issue", "accessibility-issue--success"],
                    items: [{
                        type: "htmlpanel",
                        html: on(e, "a11y.widget.issue.none", "success", "checkmark"),
                        preset: "presentation"
                    }]
                }]
            },
            buttons: [{
                type: "submit",
                name: "ok",
                text: "OK",
                primary: !0
            }],
            onSubmit: function(e) {
                t.clear(),
                e.close()
            },
            onCancel: function() {
                t.clear()
            }
        }
    }
    var un, cn, sn = function() {
        return (sn = Object.assign || function(e) {
            for (var t, r = 1, n = arguments.length; r < n; r++)
                for (var o in t = arguments[r])
                    Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
            return e
        }
        ).apply(this, arguments)
    }, ln = function(e, t, r) {
        e.redial(t),
        e.focus(r)
    };
    (cn = un || (un = {})).Next = "next",
    cn.Prev = "prev",
    cn.Ignore = "ignore",
    cn.Ok = "ok",
    cn.Repair = "repair";
    var fn = function(e, u, c, o, s) {
        var l = e.issue
          , f = e.summaryLabel
          , i = function(o, t, i) {
            var e, r, n = "warning" === (e = l.severity()) ? "warn" : e, a = t.fold(function() {
                return []
            }, function(e) {
                return [{
                    type: "panel",
                    classes: ["accessibility-issue__repair"],
                    items: t.map(function(e) {
                        return e.items
                    }).getOr([])
                }]
            });
            return {
                title: "Accessibility Checker",
                body: {
                    type: "panel",
                    classes: ["tox-accessibility-issue", "accessibility-issue--" + n],
                    items: [{
                        type: "panel",
                        classes: ["accessibility-issue__header"],
                        items: [{
                            type: "htmlpanel",
                            html: "<h1>" + f + "</h1>",
                            preset: "presentation"
                        }, {
                            type: "button",
                            name: un.Prev,
                            text: "Prev",
                            icon: "action-prev",
                            borderless: !0
                        }, {
                            type: "button",
                            name: un.Next,
                            text: "Next",
                            icon: "action-next",
                            borderless: !0
                        }]
                    }, {
                        type: "htmlpanel",
                        html: on(s, l.description(), l.severity(), "help", (r = l.id(),
                        "https://www.tinymce.com/docs/plugins/a11ychecker/#" + r)),
                        preset: "presentation"
                    }].concat(a)
                },
                buttons: [{
                    type: "custom",
                    name: un.Ignore,
                    text: "Ignore"
                }, {
                    type: "custom",
                    name: un.Repair,
                    text: "Repair",
                    disabled: i,
                    primary: !0
                }],
                initialData: sn({}, t.map(function(e) {
                    var t;
                    return (t = {})[l.id()] = e.defaultValue,
                    t
                }).getOr({})),
                onAction: function(t, e) {
                    var r = e.name;
                    e.value;
                    if (r === un.Next || r === un.Prev) {
                        var n = u.stepIssue(r === un.Next ? 1 : -1);
                        ln(t, fn(n, u, c, O.none(), s), r)
                    } else
                        r === un.Ignore ? u.resolveCurrent(!0).fold(function() {
                            ln(t, an(u, s), un.Ok)
                        }, function(e) {
                            ln(t, fn(e, u, c, O.none(), s), un.Ignore)
                        }) : r === un.Repair && (i || o.each(function(e) {
                            e.repair(l.element(), t.getData()[l.id()], function(e) {
                                e.fold(function(e) {
                                    ln(t, fn({
                                        issue: l,
                                        summaryLabel: f
                                    }, u, c, O.some(e), s), un.Repair)
                                }, function() {
                                    u.resolveCurrent(!1).fold(function() {
                                        u.scan().fold(function() {
                                            ln(t, an(u, s), un.Ok)
                                        }, function(e) {
                                            ln(t, fn(e, u, c, O.none(), s), un.Ignore)
                                        })
                                    }, function(e) {
                                        ln(t, fn(e, u, c, O.none(), s), un.Ignore)
                                    })
                                })
                            })
                        }))
                },
                onCancel: function() {
                    u.clear()
                }
            }
        };
        return c(l.id()).fold(function() {
            return i(O.none(), O.none(), !0)
        }, function(e) {
            var t, n, r = (t = e,
            n = l,
            o.fold(function() {
                return t.ui.map(function(e) {
                    return e(n.id(), n.element())
                })
            }, function(r) {
                return t.ui.map(function(e) {
                    var t = e(n.id(), n.element());
                    return {
                        items: t.items.concat([rn(r)]),
                        defaultValue: t.defaultValue
                    }
                })
            }));
            return i(O.some(e), r, !1)
        })
    }
      , dn = {
        requestAnimationFrame: function(e, t) {
            for (var r = l.window.requestAnimationFrame, n = ["ms", "moz", "webkit"], o = 0; o < n.length && !r; o++)
                r = l.window[n[o] + "RequestAnimationFrame"];
            r || (r = function(e) {
                l.window.setTimeout(e, 0)
            }
            ),
            r(e, t)
        },
        setEditorTimeout: function(e, t, r) {
            l.window.setTimeout(function() {
                e.removed || t()
            }, r || 0)
        }
    }
      , mn = {
        getInitialHtml: function() {
            return '<div role="presentation"></div><div style="clip: rect(1px, 1px, 1px, 1px);height: 1px;overflow: hidden;position: absolute;width: 1px;" aria-live="assertive" aria-relevant="additions" aria-atomic="true"></div>'
        },
        buildHtml: function(e, t) {
            return '<div style="white-space:normal;">' + e + (t ? '<button aria-label="Show specification details" role="button" style="display:inline;" tabindex="-1"><i class="mce-ico mce-i-help"></i><button>' : "") + "</div>"
        },
        setSeverity: function(e, t) {
            e.classes.remove("error"),
            e.classes.remove("warning"),
            e.classes.remove("success"),
            e.classes.add(t)
        }
    };
    function pn(u) {
        var c, t = {}, o = gt(null), s = function(e, t, r) {
            return Math.min(Math.max(e, t), r)
        }, e = function() {
            var e, t, r, n, o = u.getBody();
            if (o && c && !0 === c.state.get("visible")) {
                var i = u.inline ? u.getElement() : u.getContentAreaContainer()
                  , a = ("BODY" === (n = o).nodeName && (n = n.parentNode),
                n.scrollHeight > n.clientHeight ? -25 : -10);
                c.moveRel(i, "tr-tr"),
                c.moveBy(a, 10),
                t = 10,
                r = (e = c).layoutRect(),
                e.moveTo(s(r.x, 0, l.window.innerWidth - r.w), s(r.y, t, l.window.innerHeight - r.h - t))
            }
        };
        return {
            actions: t,
            open: function() {
                (c = tinymce.ui.Factory.create("window", {
                    title: "Accessibility Checker",
                    spacing: 5,
                    padding: 10,
                    minWidth: 300,
                    layout: "flex",
                    direction: "column",
                    align: "stretch",
                    items: [{
                        type: "label",
                        name: "index",
                        text: "Index",
                        padding: "0 0 5 0"
                    }, {
                        type: "widget",
                        classes: "widget infobox has-help",
                        name: "description",
                        onpostrender: function(e) {
                            e.control.getEl().innerHTML = mn.getInitialHtml()
                        },
                        onclick: function(e) {
                            if (o.get()) {
                                e.stopPropagation(),
                                e.preventDefault();
                                var t = o.get();
                                t && l.window.open(t)
                            }
                        }
                    }, {
                        type: "container",
                        layout: "flex",
                        direction: "column",
                        align: "stretch",
                        name: "repairer",
                        padding: "5 0 5 0",
                        items: []
                    }, {
                        type: "label",
                        name: "validation",
                        hidden: !0,
                        classes: "error"
                    }, {
                        type: "container",
                        name: "footer",
                        layout: "flex",
                        direction: "row",
                        spacing: 3,
                        items: [{
                            type: "button",
                            name: "repair",
                            text: Z("a11y.widget.repair"),
                            onclick: "repair"
                        }, {
                            type: "button",
                            text: Z("a11y.widget.ignore"),
                            onclick: "ignore"
                        }, {
                            type: "spacer",
                            flex: 1
                        }, {
                            type: "button",
                            text: Z("a11y.widget.previous"),
                            onclick: "prev"
                        }, {
                            type: "button",
                            text: Z("a11y.widget.next"),
                            autofocus: !0,
                            subtype: "primary",
                            onclick: "next"
                        }]
                    }, {
                        type: "container",
                        name: "closer",
                        layout: "flex",
                        direction: "row",
                        hidden: !0,
                        items: [{
                            type: "spacer",
                            flex: 1
                        }, {
                            type: "button",
                            subtype: "primary",
                            name: "close",
                            text: "Close",
                            onclick: function() {
                                c.close()
                            }
                        }]
                    }]
                })).on("submit", function(e) {
                    e.preventDefault(),
                    t.repair()
                }),
                c.modal = !1,
                c.on("open", function() {
                    e()
                }),
                c.on("close", function() {
                    t.close()
                }),
                c.on("execute", function(e) {
                    t[e.action]()
                }),
                u.on("remove", function() {
                    c && c.close()
                }),
                c.renderTo().reflow(),
                c.moveTo(0, 0)
            },
            close: function() {
                c && (c.close(),
                c = null)
            },
            reposition: e,
            setIndexText: function(e) {
                c.find("#index").show().text(e)
            },
            hideIndex: function() {
                c.find("#index").hide()
            },
            setDescriptionText: function(e, t, r) {
                var n = c.find("#description")[0].show();
                mn.setSeverity(n, t),
                o.set(r),
                n.getEl().firstChild.innerHTML = mn.buildHtml(e, r),
                n.updateLayoutRect(),
                n.reflow(),
                dn.setEditorTimeout(u, function() {
                    n.getEl().lastChild.textContent = e
                })
            },
            setRepairerChildren: function(e) {
                var t;
                (t = c.find("#repairer")[0]).items().remove(),
                t.append(e),
                t.renderNew()
            },
            hideFooter: function() {
                c.find("#footer").hide()
            },
            showCloser: function() {
                var e = c.find("#closer")[0];
                e.show(),
                e.focus()
            },
            hideRepairer: function() {
                c.find("#repairer").hide()
            },
            showRepairer: function() {
                c.find("#repairer").show()
            },
            hideRepairButton: function() {
                c.find("#repair").hide()
            },
            showRepairButton: function() {
                c.find("#repair").show()
            },
            setValidationInformation: function(e) {
                c.find("#validation").show().text(e)
            },
            hideValidation: function() {
                c.find("#validation").hide()
            },
            retrieveTextInput: function(e) {
                return c.find("#" + e).value()
            },
            retrieveSelectInput: function(e) {
                return c.find("#" + e).value()
            }
        }
    }
    var hn = function(e, t) {
        return {
            type: "label",
            forName: e,
            text: t
        }
    }
      , vn = function(e, t, r) {
        return {
            type: "listbox",
            name: e,
            values: V(t, function(e) {
                return {
                    text: r(e.text),
                    value: e.value
                }
            })
        }
    }
      , yn = function(e, t) {
        return {
            type: "textbox",
            name: e,
            value: t
        }
    }
      , gn = we(["ui", "repair"], []);
    function wn(o, i) {
        var a, u = {
            I1: O.some(gn({
                ui: O.some(function(e, t) {
                    return [hn("image-alt", e("a11y.i1.repair.info")), yn("image-alt", "")]
                }),
                repair: function(e, t, r) {
                    var n = t.retrieveTextInput("image-alt");
                    return Yr(e, n, "a11y.i1.repair.errors.empty", "a11y.i1.repair.errors.duplicate", r)
                }
            })),
            I2: O.some(gn({
                ui: O.some(function(e, t) {
                    var r = t.dom().alt;
                    return [hn("image-alt", e("a11y.i1.repair.info")), yn("image-alt", r)]
                }),
                repair: function(e, t, r) {
                    var n = t.retrieveTextInput("image-alt");
                    return Yr(e, n, "a11y.i1.repair.errors.empty", "a11y.i1.repair.errors.duplicate", r)
                }
            })),
            T1: O.some(gn({
                ui: O.some(function(e, t) {
                    return [hn("table-caption", e("a11y.t1.repair.info")), yn("table-caption", "")]
                }),
                repair: function(e, t, r) {
                    var n = t.retrieveTextInput("table-caption");
                    return Kr(e, n, "a11y.t1.repair.errors.empty", "a11y.t1.repair.errors.duplicate", r)
                }
            })),
            T2: O.some(gn({
                ui: O.some(function(e, t) {
                    return [hn("table-summary", e("a11y.t2.repair.info")), yn("table-summary", "")]
                }),
                repair: function(e, t, r) {
                    var n = t.retrieveTextInput("table-summary");
                    return Jr(e, n, "a11y.t2.repair.errors.empty", "a11y.t2.repair.errors.duplicate", r)
                }
            })),
            T3: O.some(gn({
                ui: O.some(function(e, t) {
                    var r = ft(t, "caption").fold(function() {
                        return ""
                    }, function(e) {
                        return e.dom().innerHTML
                    });
                    return [hn("table-caption", e("a11y.t1.repair.info")), yn("table-caption", r)]
                }),
                repair: function(e, t, r) {
                    var n = t.retrieveTextInput("table-caption");
                    return Kr(e, n, "a11y.t1.repair.errors.empty", "a11y.t1.repair.errors.duplicate", r)
                }
            })),
            T4A: O.none(),
            T4B: O.some(gn({
                ui: O.some(function(e, t) {
                    return [hn("table-headers", e("a11y.t4b.repair.info")), vn("table-headers", [{
                        text: "a11y.t4c.repair.header.row",
                        value: "row"
                    }, {
                        text: "a11y.t4c.repair.header.col",
                        value: "col"
                    }], e)]
                }),
                repair: function(e, t, r) {
                    var n = t.retrieveSelectInput("table-headers");
                    return Qr(e, n)
                }
            })),
            T4C: O.some(gn({
                ui: O.some(function(e, t) {
                    return [hn("scope-type", e("a11y.t4c.repair.info")), vn("scope-type", [{
                        text: "a11y.t4c.repair.scope.row",
                        value: "row"
                    }, {
                        text: "a11y.t4c.repair.scope.col",
                        value: "col"
                    }, {
                        text: "a11y.t4c.repair.scope.rowgroup",
                        value: "rowgroup"
                    }, {
                        text: "a11y.t4c.repair.scope.colgroup",
                        value: "colgroup"
                    }], e)]
                }),
                repair: function(e, t, r) {
                    var n = t.retrieveSelectInput("scope-type");
                    return Zr(e, n)
                }
            })),
            D1: O.some(gn({
                ui: O.some(function(e, t) {
                    return [hn("heading-type", e("a11y.d1.repair.info")), vn("heading-type", [{
                        text: "a11y.d1.repair.block.h1",
                        value: "h1"
                    }, {
                        text: "a11y.d1.repair.block.h2",
                        value: "h2"
                    }, {
                        text: "a11y.d1.repair.block.h3",
                        value: "h3"
                    }, {
                        text: "a11y.d1.repair.block.h4",
                        value: "h4"
                    }, {
                        text: "a11y.d1.repair.block.h5",
                        value: "h5"
                    }, {
                        text: "a11y.d1.repair.block.h6",
                        value: "h6"
                    }], e)]
                }),
                repair: function(e, t, r) {
                    var n = t.retrieveSelectInput("heading-type");
                    return Ur(e, n)
                }
            })),
            D2: O.none(),
            D3: O.some(gn({
                ui: O.none(),
                repair: function(e, t, r) {
                    return jr(e)
                }
            }))
        }, e = function() {
            r(),
            i.scan().fold(function() {
                return l()
            }, function(e) {
                return n(e.issue, e.index)
            })
        }, t = function() {
            a && a.close()
        }, r = function() {
            (a = pn(o)).actions.close = function() {
                i.clear()
            }
            ,
            a.actions.ignore = function() {
                s(!0)
            }
            ,
            a.actions.prev = m,
            a.actions.next = p,
            a.open()
        }, c = function() {
            a && a.reposition()
        }, n = function(t, e) {
            a.hideValidation();
            var r, n = "https://www.tinymce.com/docs/plugins/a11ychecker/#" + t.id();
            a.setIndexText(Z(["a11y.widget.counter", e, i.getIssues().length])),
            a.setDescriptionText(Z(t.description()), t.severity(), n),
            (r = t.id(),
            void 0 !== u[r] ? u[r] : O.none()).fold(f, function(e) {
                return d(e, t)
            }),
            c(),
            o.selection.scrollIntoView(t.element().dom())
        }, s = function(e) {
            i.resolveCurrent(e).fold(function() {
                return l()
            }, function(e) {
                n(e.issue, e.index)
            }),
            c()
        }, l = function() {
            a.hideIndex(),
            a.hideRepairer(),
            a.hideValidation(),
            a.hideFooter(),
            a.showCloser(),
            a.setDescriptionText(Z("a11y.widget.issue.none"), "success")
        }, f = function() {
            a.hideRepairer(),
            a.hideRepairButton()
        }, d = function(e, t) {
            e.ui().fold(f, function(e) {
                a.setRepairerChildren(e(Z, t.element())),
                a.showRepairer()
            }),
            a.showRepairButton(),
            a.actions.repair = function() {
                o.undoManager.transact(function() {
                    e.repair()(t.element(), a, Z).fold(function(e) {
                        a.setValidationInformation(e),
                        c()
                    }, function() {
                        return s(!1)
                    })
                })
            }
        }, m = function() {
            var e = i.stepIssue(-1);
            n(e.issue, e.index)
        }, p = function() {
            var e = i.stepIssue(1);
            n(e.issue, e.index)
        };
        return {
            toggleAuditing: function() {
                i.isAuditing() ? t() : e()
            },
            startAuditing: e,
            stopAuditing: t,
            positionDialog: c
        }
    }
    var bn = function(u, c) {
        var s = gt(O.none())
          , e = function() {
            var t, r, n, o, i, a, e = (t = function(e) {
                return u.windowManager.open(e, {
                    inline: "toolbar",
                    ariaAttrs: !0
                })
            }
            ,
            r = c,
            i = u,
            a = {
                I1: O.some({
                    ui: O.some(function(e, t) {
                        return {
                            items: [tn(e, Z("a11y.i1.repair.info"))],
                            defaultValue: ""
                        }
                    }),
                    repair: function(e, t, r) {
                        i.undoManager.transact(function() {
                            r(Yr(e, t, "a11y.i1.repair.errors.empty", "a11y.i1.repair.errors.duplicate", Z))
                        })
                    }
                }),
                I2: O.some({
                    ui: O.some(function(e, t) {
                        var r = t.dom().alt;
                        return {
                            items: [tn(e, Z("a11y.i1.repair.info"))],
                            defaultValue: r
                        }
                    }),
                    repair: function(e, t, r) {
                        i.undoManager.transact(function() {
                            r(Yr(e, t, "a11y.i1.repair.errors.empty", "a11y.i1.repair.errors.duplicate", Z))
                        })
                    }
                }),
                T1: O.some({
                    ui: O.some(function(e, t) {
                        return {
                            items: [tn(e, Z("a11y.t1.repair.info"))],
                            defaultValue: ""
                        }
                    }),
                    repair: function(e, t, r) {
                        i.undoManager.transact(function() {
                            r(Kr(e, t, "a11y.t1.repair.errors.empty", "a11y.t1.repair.errors.duplicate", Z))
                        })
                    }
                }),
                T2: O.some({
                    ui: O.some(function(e, t) {
                        return {
                            items: [tn(e, Z("a11y.t2.repair.info"))],
                            defaultValue: ""
                        }
                    }),
                    repair: function(e, t, r) {
                        i.undoManager.transact(function() {
                            r(Jr(e, t, "a11y.t2.repair.errors.empty", "a11y.t2.repair.errors.duplicate", Z))
                        })
                    }
                }),
                T3: O.some({
                    ui: O.some(function(e, t) {
                        var r = ft(t, "caption").fold(function() {
                            return ""
                        }, function(e) {
                            return e.dom().innerHTML
                        });
                        return {
                            items: [tn(e, Z("a11y.t1.repair.info"))],
                            defaultValue: r
                        }
                    }),
                    repair: function(e, t, r) {
                        i.undoManager.transact(function() {
                            r(Kr(e, t, "a11y.t1.repair.errors.empty", "a11y.t1.repair.errors.duplicate", Z))
                        })
                    }
                }),
                T4A: O.none(),
                T4B: O.some({
                    ui: O.some(function(e, t) {
                        return {
                            items: [en(e, Z("a11y.t4b.repair.info"), [{
                                text: "a11y.t4c.repair.header.row",
                                value: "row"
                            }, {
                                text: "a11y.t4c.repair.header.col",
                                value: "col"
                            }], Z)],
                            defaultValue: ""
                        }
                    }),
                    repair: function(e, t, r) {
                        i.undoManager.transact(function() {
                            r(Qr(e, t))
                        })
                    }
                }),
                T4C: O.some({
                    ui: O.some(function(e, t) {
                        return {
                            items: [en(e, Z("a11y.t4c.repair.info"), [{
                                text: "a11y.t4c.repair.scope.row",
                                value: "row"
                            }, {
                                text: "a11y.t4c.repair.scope.col",
                                value: "col"
                            }, {
                                text: "a11y.t4c.repair.scope.rowgroup",
                                value: "rowgroup"
                            }, {
                                text: "a11y.t4c.repair.scope.colgroup",
                                value: "colgroup"
                            }], Z)],
                            defaultValue: ""
                        }
                    }),
                    repair: function(e, t, r) {
                        i.undoManager.transact(function() {
                            r(Zr(e, t))
                        })
                    }
                }),
                D1: O.some({
                    ui: O.some(function(e, t) {
                        return {
                            items: [en(e, Z("a11y.d1.repair.info"), [{
                                text: "a11y.d1.repair.block.h1",
                                value: "h1"
                            }, {
                                text: "a11y.d1.repair.block.h2",
                                value: "h2"
                            }, {
                                text: "a11y.d1.repair.block.h3",
                                value: "h3"
                            }, {
                                text: "a11y.d1.repair.block.h4",
                                value: "h4"
                            }, {
                                text: "a11y.d1.repair.block.h5",
                                value: "h5"
                            }, {
                                text: "a11y.d1.repair.block.h6",
                                value: "h6"
                            }], Z)],
                            defaultValue: ""
                        }
                    }),
                    repair: function(e, t, r) {
                        i.undoManager.transact(function() {
                            r(Ur(e, t))
                        })
                    }
                }),
                D2: O.none(),
                D3: O.some({
                    ui: O.none(),
                    repair: function(e, t, r) {
                        i.undoManager.transact(function() {
                            r(jr(e))
                        })
                    }
                })
            },
            n = function(e) {
                return a.hasOwnProperty(e) ? a[e] : O.none()
            }
            ,
            o = u,
            r.scan().fold(function() {
                return t(an(r, o))
            }, function(e) {
                return t(fn(e, r, n, O.none(), o))
            }));
            s.set(O.some(e))
        }
          , t = function() {
            s.get().each(function(e) {
                e.close(),
                c.clear()
            }),
            s.set(O.none())
        };
        return u.ui.registry.addButton("a11ycheck", {
            tooltip: Z("a11y.widget.title"),
            icon: "accessibility-check",
            onAction: e
        }),
        u.ui.registry.addMenuItem("a11ycheck", {
            icon: "accessibility-check",
            text: Z("a11y.widget.title"),
            onAction: e
        }),
        function() {
            s.get().fold(e, t)
        }
    }
      , xn = function(t, e) {
        if (y(tinymce, "4.3.13"))
            return g('The "a11ychecker" plugin requires at least 4.3.13 version of TinyMCE.'),
            function() {}
            ;
        var r, n, o, i = Pr(t), a = t.settings.a11ychecker_css_url, u = a || e + "/css/annotations.css";
        return y(tinymce, "5.0.0") ? (o = wn(n = t, i),
        n.addButton("a11ycheck", {
            tooltip: Z("a11y.widget.title"),
            icon: "a11y",
            onclick: o.toggleAuditing
        }),
        n.addMenuItem("a11ycheck", {
            context: "tools",
            icon: "a11y",
            text: Z("a11y.widget.title"),
            onclick: o.toggleAuditing
        }),
        n.on("ResizeWindow", function() {
            dn.requestAnimationFrame(function() {
                o.positionDialog()
            })
        }),
        n.on("ScrollWindow", function() {
            o.positionDialog()
        }),
        n.on("ResizeEditor", function() {
            o.positionDialog()
        }),
        n.on("click", function() {
            o.stopAuditing()
        }),
        n.on("keydown", function() {
            o.stopAuditing()
        }),
        r = o.toggleAuditing) : r = bn(t, i),
        t.on("init", function(e) {
            t.dom.loadCSS(u)
        }),
        t.on("remove", function(e) {
            1 === tinymce.editors.length && yt.removeStyles()
        }),
        {
            getReport: i.getReport,
            toggleaudit: r
        }
    };
    tinymce.PluginManager.requireLangPack("a11ychecker", "ar,ca,cs,da,de,el,es,fa,fi,fr,he,hu,it,ja,kk,ko,nb,nl,pl,pt_pt,pt,ro,ru,sk,sl,sv,th,tr,uk,zh_tw,zh"),
    tinymce.PluginManager.add("a11ychecker", xn)
}(window);
