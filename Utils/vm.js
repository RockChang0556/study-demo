/**
* @description 网页水印SDK
* @version 1.0.0
* @time 2020-10-20 18:21:46
* @author 
*/

var Watermark = function() {
  "use strict";
  var t = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
  function e(t, e) {
      return t(e = {
          exports: {}
      }, e.exports),
      e.exports
  }
  var r = function(t) {
      return t && t.Math == Math && t
  }
    , n = r("object" == typeof globalThis && globalThis) || r("object" == typeof window && window) || r("object" == typeof self && self) || r("object" == typeof t && t) || Function("return this")()
    , i = function(t) {
      try {
          return !!t()
      } catch (t) {
          return !0
      }
  }
    , o = !i(function() {
      return 7 != Object.defineProperty({}, 1, {
          get: function() {
              return 7
          }
      })[1]
  })
    , a = {}.propertyIsEnumerable
    , u = Object.getOwnPropertyDescriptor
    , c = {
      f: u && !a.call({
          1: 2
      }, 1) ? function(t) {
          var e = u(this, t);
          return !!e && e.enumerable
      }
      : a
  }
    , f = function(t, e) {
      return {
          enumerable: !(1 & t),
          configurable: !(2 & t),
          writable: !(4 & t),
          value: e
      }
  }
    , s = {}.toString
    , l = function(t) {
      return s.call(t).slice(8, -1)
  }
    , h = "".split
    , d = i(function() {
      return !Object("z").propertyIsEnumerable(0)
  }) ? function(t) {
      return "String" == l(t) ? h.call(t, "") : Object(t)
  }
  : Object
    , p = function(t) {
      if (null == t)
          throw TypeError("Can't call method on " + t);
      return t
  }
    , y = function(t) {
      return d(p(t))
  }
    , v = function(t) {
      return "object" == typeof t ? null !== t : "function" == typeof t
  }
    , g = function(t, e) {
      if (!v(t))
          return t;
      var r, n;
      if (e && "function" == typeof (r = t.toString) && !v(n = r.call(t)))
          return n;
      if ("function" == typeof (r = t.valueOf) && !v(n = r.call(t)))
          return n;
      if (!e && "function" == typeof (r = t.toString) && !v(n = r.call(t)))
          return n;
      throw TypeError("Can't convert object to primitive value")
  }
    , b = {}.hasOwnProperty
    , m = function(t, e) {
      return b.call(t, e)
  }
    , S = n.document
    , w = v(S) && v(S.createElement)
    , O = function(t) {
      return w ? S.createElement(t) : {}
  }
    , A = !o && !i(function() {
      return 7 != Object.defineProperty(O("div"), "a", {
          get: function() {
              return 7
          }
      }).a
  })
    , j = Object.getOwnPropertyDescriptor
    , k = {
      f: o ? j : function(t, e) {
          if (t = y(t),
          e = g(e, !0),
          A)
              try {
                  return j(t, e)
              } catch (t) {}
          if (m(t, e))
              return f(!c.f.call(t, e), t[e])
      }
  }
    , x = /#|\.prototype\./
    , T = function(t, e) {
      var r = L[E(t)];
      return r == D || r != I && ("function" == typeof e ? i(e) : !!e)
  }
    , E = T.normalize = function(t) {
      return String(t).replace(x, ".").toLowerCase()
  }
    , L = T.data = {}
    , I = T.NATIVE = "N"
    , D = T.POLYFILL = "P"
    , _ = T
    , C = {}
    , M = function(t) {
      if ("function" != typeof t)
          throw TypeError(String(t) + " is not a function");
      return t
  }
    , P = function(t, e, r) {
      if (M(t),
      void 0 === e)
          return t;
      switch (r) {
      case 0:
          return function() {
              return t.call(e)
          }
          ;
      case 1:
          return function(r) {
              return t.call(e, r)
          }
          ;
      case 2:
          return function(r, n) {
              return t.call(e, r, n)
          }
          ;
      case 3:
          return function(r, n, i) {
              return t.call(e, r, n, i)
          }
      }
      return function() {
          return t.apply(e, arguments)
      }
  }
    , R = function(t) {
      if (!v(t))
          throw TypeError(String(t) + " is not an object");
      return t
  }
    , F = Object.defineProperty
    , W = {
      f: o ? F : function(t, e, r) {
          if (R(t),
          e = g(e, !0),
          R(r),
          A)
              try {
                  return F(t, e, r)
              } catch (t) {}
          if ("get"in r || "set"in r)
              throw TypeError("Accessors not supported");
          return "value"in r && (t[e] = r.value),
          t
      }
  }
    , N = o ? function(t, e, r) {
      return W.f(t, e, f(1, r))
  }
  : function(t, e, r) {
      return t[e] = r,
      t
  }
    , V = k.f
    , z = function(t) {
      var e = function(e, r, n) {
          if (this instanceof t) {
              switch (arguments.length) {
              case 0:
                  return new t;
              case 1:
                  return new t(e);
              case 2:
                  return new t(e,r)
              }
              return new t(e,r,n)
          }
          return t.apply(this, arguments)
      };
      return e.prototype = t.prototype,
      e
  }
    , U = function(t, e) {
      var r, i, o, a, u, c, f, s, l = t.target, h = t.global, d = t.stat, p = t.proto, y = h ? n : d ? n[l] : (n[l] || {}).prototype, v = h ? C : C[l] || (C[l] = {}), g = v.prototype;
      for (o in e)
          r = !_(h ? o : l + (d ? "." : "#") + o, t.forced) && y && m(y, o),
          u = v[o],
          r && (c = t.noTargetGet ? (s = V(y, o)) && s.value : y[o]),
          a = r && c ? c : e[o],
          r && typeof u == typeof a || (f = t.bind && r ? P(a, n) : t.wrap && r ? z(a) : p && "function" == typeof a ? P(Function.call, a) : a,
          (t.sham || a && a.sham || u && u.sham) && N(f, "sham", !0),
          v[o] = f,
          p && (m(C, i = l + "Prototype") || N(C, i, {}),
          C[i][o] = a,
          t.real && g && !g[o] && N(g, o, a)))
  }
    , B = function(t) {
      return Object(p(t))
  }
    , G = Math.ceil
    , H = Math.floor
    , $ = function(t) {
      return isNaN(t = +t) ? 0 : (t > 0 ? H : G)(t)
  }
    , q = Math.min
    , Y = function(t) {
      return t > 0 ? q($(t), 9007199254740991) : 0
  }
    , Q = Array.isArray || function(t) {
      return "Array" == l(t)
  }
    , K = n["__core-js_shared__"] || function(t, e) {
      try {
          N(n, t, e)
      } catch (r) {
          n[t] = e
      }
      return e
  }("__core-js_shared__", {})
    , X = e(function(t) {
      (t.exports = function(t, e) {
          return K[t] || (K[t] = void 0 !== e ? e : {})
      }
      )("versions", []).push({
          version: "3.6.4",
          mode: "pure",
          copyright: "© 2020 Denis Pushkarev (zloirock.ru)"
      })
  })
    , J = 0
    , Z = Math.random()
    , tt = function(t) {
      return "Symbol(" + String(void 0 === t ? "" : t) + ")_" + (++J + Z).toString(36)
  }
    , et = !!Object.getOwnPropertySymbols && !i(function() {
      return !String(Symbol())
  })
    , rt = et && !Symbol.sham && "symbol" == typeof Symbol.iterator
    , nt = X("wks")
    , it = n.Symbol
    , ot = rt ? it : it && it.withoutSetter || tt
    , at = function(t) {
      return m(nt, t) || (et && m(it, t) ? nt[t] = it[t] : nt[t] = ot("Symbol." + t)),
      nt[t]
  }
    , ut = at("species")
    , ct = function(t, e) {
      var r;
      return Q(t) && ("function" != typeof (r = t.constructor) || r !== Array && !Q(r.prototype) ? v(r) && null === (r = r[ut]) && (r = void 0) : r = void 0),
      new (void 0 === r ? Array : r)(0 === e ? 0 : e)
  }
    , ft = [].push
    , st = function(t) {
      var e = 1 == t
        , r = 2 == t
        , n = 3 == t
        , i = 4 == t
        , o = 6 == t
        , a = 5 == t || o;
      return function(u, c, f, s) {
          for (var l, h, p = B(u), y = d(p), v = P(c, f, 3), g = Y(y.length), b = 0, m = s || ct, S = e ? m(u, g) : r ? m(u, 0) : void 0; g > b; b++)
              if ((a || b in y) && (h = v(l = y[b], b, p),
              t))
                  if (e)
                      S[b] = h;
                  else if (h)
                      switch (t) {
                      case 3:
                          return !0;
                      case 5:
                          return l;
                      case 6:
                          return b;
                      case 2:
                          ft.call(S, l)
                      }
                  else if (i)
                      return !1;
          return o ? -1 : n || i ? i : S
      }
  }
    , lt = {
      forEach: st(0),
      map: st(1),
      filter: st(2),
      some: st(3),
      every: st(4),
      find: st(5),
      findIndex: st(6)
  }
    , ht = Object.defineProperty
    , dt = {}
    , pt = function(t) {
      throw t
  }
    , yt = function(t, e) {
      if (m(dt, t))
          return dt[t];
      e || (e = {});
      var r = [][t]
        , n = !!m(e, "ACCESSORS") && e.ACCESSORS
        , a = m(e, 0) ? e[0] : pt
        , u = m(e, 1) ? e[1] : void 0;
      return dt[t] = !!r && !i(function() {
          if (n && !o)
              return !0;
          var t = {
              length: -1
          };
          n ? ht(t, 1, {
              enumerable: !0,
              get: pt
          }) : t[1] = 1,
          r.call(t, a, u)
      })
  }
    , vt = lt.find
    , gt = !0
    , bt = yt("find");
  "find"in [] && Array(1).find(function() {
      gt = !1
  }),
  U({
      target: "Array",
      proto: !0,
      forced: gt || !bt
  }, {
      find: function(t) {
          return vt(this, t, arguments.length > 1 ? arguments[1] : void 0)
      }
  });
  var mt = function(t) {
      return C[t + "Prototype"]
  }
    , St = mt("Array").find
    , wt = Array.prototype
    , Ot = function(t) {
      var e = t.find;
      return t === wt || t instanceof Array && e === wt.find ? St : e
  }
    , At = Math.max
    , jt = Math.min
    , kt = function(t, e) {
      var r = $(t);
      return r < 0 ? At(r + e, 0) : jt(r, e)
  }
    , xt = function(t) {
      return function(e, r, n) {
          var i, o = y(e), a = Y(o.length), u = kt(n, a);
          if (t && r != r) {
              for (; a > u; )
                  if ((i = o[u++]) != i)
                      return !0
          } else
              for (; a > u; u++)
                  if ((t || u in o) && o[u] === r)
                      return t || u || 0;
          return !t && -1
      }
  }
    , Tt = {
      includes: xt(!0),
      indexOf: xt(!1)
  }
    , Et = Tt.includes
    , Lt = yt("indexOf", {
      ACCESSORS: !0,
      1: 0
  });
  U({
      target: "Array",
      proto: !0,
      forced: !Lt
  }, {
      includes: function(t) {
          return Et(this, t, arguments.length > 1 ? arguments[1] : void 0)
      }
  });
  var It = mt("Array").includes
    , Dt = at("match")
    , _t = function(t) {
      if (function(t) {
          var e;
          return v(t) && (void 0 !== (e = t[Dt]) ? !!e : "RegExp" == l(t))
      }(t))
          throw TypeError("The method doesn't accept regular expressions");
      return t
  }
    , Ct = at("match");
  U({
      target: "String",
      proto: !0,
      forced: !function(t) {
          var e = /./;
          try {
              "/./"[t](e)
          } catch (r) {
              try {
                  return e[Ct] = !1,
                  "/./"[t](e)
              } catch (t) {}
          }
          return !1
      }("includes")
  }, {
      includes: function(t) {
          return !!~String(p(this)).indexOf(_t(t), arguments.length > 1 ? arguments[1] : void 0)
      }
  });
  var Mt = mt("String").includes
    , Pt = Array.prototype
    , Rt = String.prototype
    , Ft = function(t) {
      var e = t.includes;
      return t === Pt || t instanceof Array && e === Pt.includes ? It : "string" == typeof t || t === Rt || t instanceof String && e === Rt.includes ? Mt : e
  };
  function Wt(t, e) {
      if (!(t instanceof e))
          throw new TypeError("Cannot call a class as a function")
  }
  function Nt(t, e) {
      for (var r = 0; r < e.length; r++) {
          var n = e[r];
          n.enumerable = n.enumerable || !1,
          n.configurable = !0,
          "value"in n && (n.writable = !0),
          Object.defineProperty(t, n.key, n)
      }
  }
  function Vt(t, e, r) {
      return e && Nt(t.prototype, e),
      r && Nt(t, r),
      t
  }
  function zt(t, e) {
      if (t !== e)
          throw new TypeError("Cannot instantiate an arrow function")
  }
  function Ut(t, e) {
      return function(t) {
          if (Array.isArray(t))
              return t
      }(t) || function(t, e) {
          if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(t)))
              return;
          var r = []
            , n = !0
            , i = !1
            , o = void 0;
          try {
              for (var a, u = t[Symbol.iterator](); !(n = (a = u.next()).done) && (r.push(a.value),
              !e || r.length !== e); n = !0)
                  ;
          } catch (t) {
              i = !0,
              o = t
          } finally {
              try {
                  n || null == u.return || u.return()
              } finally {
                  if (i)
                      throw o
              }
          }
          return r
      }(t, e) || Bt(t, e) || function() {
          throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }()
  }
  function Bt(t, e) {
      if (t) {
          if ("string" == typeof t)
              return Gt(t, e);
          var r = Object.prototype.toString.call(t).slice(8, -1);
          return "Object" === r && t.constructor && (r = t.constructor.name),
          "Map" === r || "Set" === r ? Array.from(t) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? Gt(t, e) : void 0
      }
  }
  function Gt(t, e) {
      (null == e || e > t.length) && (e = t.length);
      for (var r = 0, n = new Array(e); r < e; r++)
          n[r] = t[r];
      return n
  }
  var Ht = function(t) {
      return function(e, r) {
          var n, i, o = String(p(e)), a = $(r), u = o.length;
          return a < 0 || a >= u ? t ? "" : void 0 : (n = o.charCodeAt(a)) < 55296 || n > 56319 || a + 1 === u || (i = o.charCodeAt(a + 1)) < 56320 || i > 57343 ? t ? o.charAt(a) : n : t ? o.slice(a, a + 2) : i - 56320 + (n - 55296 << 10) + 65536
      }
  }
    , $t = {
      codeAt: Ht(!1),
      charAt: Ht(!0)
  }
    , qt = Function.toString;
  "function" != typeof K.inspectSource && (K.inspectSource = function(t) {
      return qt.call(t)
  }
  );
  var Yt, Qt, Kt, Xt = K.inspectSource, Jt = n.WeakMap, Zt = "function" == typeof Jt && /native code/.test(Xt(Jt)), te = X("keys"), ee = function(t) {
      return te[t] || (te[t] = tt(t))
  }, re = {}, ne = n.WeakMap;
  if (Zt) {
      var ie = new ne
        , oe = ie.get
        , ae = ie.has
        , ue = ie.set;
      Yt = function(t, e) {
          return ue.call(ie, t, e),
          e
      }
      ,
      Qt = function(t) {
          return oe.call(ie, t) || {}
      }
      ,
      Kt = function(t) {
          return ae.call(ie, t)
      }
  } else {
      var ce = ee("state");
      re[ce] = !0,
      Yt = function(t, e) {
          return N(t, ce, e),
          e
      }
      ,
      Qt = function(t) {
          return m(t, ce) ? t[ce] : {}
      }
      ,
      Kt = function(t) {
          return m(t, ce)
      }
  }
  var fe, se, le, he = {
      set: Yt,
      get: Qt,
      has: Kt,
      enforce: function(t) {
          return Kt(t) ? Qt(t) : Yt(t, {})
      },
      getterFor: function(t) {
          return function(e) {
              var r;
              if (!v(e) || (r = Qt(e)).type !== t)
                  throw TypeError("Incompatible receiver, " + t + " required");
              return r
          }
      }
  }, de = !i(function() {
      function t() {}
      return t.prototype.constructor = null,
      Object.getPrototypeOf(new t) !== t.prototype
  }), pe = ee("IE_PROTO"), ye = Object.prototype, ve = de ? Object.getPrototypeOf : function(t) {
      return t = B(t),
      m(t, pe) ? t[pe] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? ye : null
  }
  , ge = (at("iterator"),
  !1);
  [].keys && ("next"in (le = [].keys()) ? (se = ve(ve(le))) !== Object.prototype && (fe = se) : ge = !0),
  null == fe && (fe = {});
  var be, me = {
      IteratorPrototype: fe,
      BUGGY_SAFARI_ITERATORS: ge
  }, Se = Tt.indexOf, we = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"], Oe = Object.keys || function(t) {
      return function(t, e) {
          var r, n = y(t), i = 0, o = [];
          for (r in n)
              !m(re, r) && m(n, r) && o.push(r);
          for (; e.length > i; )
              m(n, r = e[i++]) && (~Se(o, r) || o.push(r));
          return o
      }(t, we)
  }
  , Ae = o ? Object.defineProperties : function(t, e) {
      R(t);
      for (var r, n = Oe(e), i = n.length, o = 0; i > o; )
          W.f(t, r = n[o++], e[r]);
      return t
  }
  , je = function(t) {
      return "function" == typeof t ? t : void 0
  }, ke = function(t, e) {
      return arguments.length < 2 ? je(C[t]) || je(n[t]) : C[t] && C[t][e] || n[t] && n[t][e]
  }, xe = ke("document", "documentElement"), Te = ee("IE_PROTO"), Ee = function() {}, Le = function(t) {
      return "<script>" + t + "<\/script>"
  }, Ie = function() {
      try {
          be = document.domain && new ActiveXObject("htmlfile")
      } catch (t) {}
      var t, e;
      Ie = be ? function(t) {
          t.write(Le("")),
          t.close();
          var e = t.parentWindow.Object;
          return t = null,
          e
      }(be) : ((e = O("iframe")).style.display = "none",
      xe.appendChild(e),
      e.src = String("javascript:"),
      (t = e.contentWindow.document).open(),
      t.write(Le("document.F=Object")),
      t.close(),
      t.F);
      for (var r = we.length; r--; )
          delete Ie.prototype[we[r]];
      return Ie()
  };
  re[Te] = !0;
  var De = Object.create || function(t, e) {
      var r;
      return null !== t ? (Ee.prototype = R(t),
      r = new Ee,
      Ee.prototype = null,
      r[Te] = t) : r = Ie(),
      void 0 === e ? r : Ae(r, e)
  }
    , _e = {};
  _e[at("toStringTag")] = "z";
  var Ce = "[object z]" === String(_e)
    , Me = at("toStringTag")
    , Pe = "Arguments" == l(function() {
      return arguments
  }())
    , Re = Ce ? l : function(t) {
      var e, r, n;
      return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof (r = function(t, e) {
          try {
              return t[e]
          } catch (t) {}
      }(e = Object(t), Me)) ? r : Pe ? l(e) : "Object" == (n = l(e)) && "function" == typeof e.callee ? "Arguments" : n
  }
    , Fe = Ce ? {}.toString : function() {
      return "[object " + Re(this) + "]"
  }
    , We = W.f
    , Ne = at("toStringTag")
    , Ve = function(t, e, r, n) {
      if (t) {
          var i = r ? t : t.prototype;
          m(i, Ne) || We(i, Ne, {
              configurable: !0,
              value: e
          }),
          n && !Ce && N(i, "toString", Fe)
      }
  }
    , ze = {}
    , Ue = me.IteratorPrototype
    , Be = function() {
      return this
  }
    , Ge = (Object.setPrototypeOf || "__proto__"in {} && function() {
      var t, e = !1, r = {};
      try {
          (t = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set).call(r, []),
          e = r instanceof Array
      } catch (t) {}
  }(),
  function(t, e, r, n) {
      n && n.enumerable ? t[e] = r : N(t, e, r)
  }
  )
    , He = me.IteratorPrototype
    , $e = me.BUGGY_SAFARI_ITERATORS
    , qe = at("iterator")
    , Ye = function() {
      return this
  }
    , Qe = function(t, e, r, n, i, o, a) {
      !function(t, e, r) {
          var n = e + " Iterator";
          t.prototype = De(Ue, {
              next: f(1, r)
          }),
          Ve(t, n, !1, !0),
          ze[n] = Be
      }(r, e, n);
      var u, c, s, l = function(t) {
          if (t === i && v)
              return v;
          if (!$e && t in p)
              return p[t];
          switch (t) {
          case "keys":
          case "values":
          case "entries":
              return function() {
                  return new r(this,t)
              }
          }
          return function() {
              return new r(this)
          }
      }, h = e + " Iterator", d = !1, p = t.prototype, y = p[qe] || p["@@iterator"] || i && p[i], v = !$e && y || l(i), g = "Array" == e && p.entries || y;
      if (g && (u = ve(g.call(new t)),
      He !== Object.prototype && u.next && (Ve(u, h, !0, !0),
      ze[h] = Ye)),
      "values" == i && y && "values" !== y.name && (d = !0,
      v = function() {
          return y.call(this)
      }
      ),
      a && p[qe] !== v && N(p, qe, v),
      ze[e] = v,
      i)
          if (c = {
              values: l("values"),
              keys: o ? v : l("keys"),
              entries: l("entries")
          },
          a)
              for (s in c)
                  !$e && !d && s in p || Ge(p, s, c[s]);
          else
              U({
                  target: e,
                  proto: !0,
                  forced: $e || d
              }, c);
      return c
  }
    , Ke = $t.charAt
    , Xe = he.set
    , Je = he.getterFor("String Iterator");
  Qe(String, "String", function(t) {
      Xe(this, {
          type: "String Iterator",
          string: String(t),
          index: 0
      })
  }, function() {
      var t, e = Je(this), r = e.string, n = e.index;
      return n >= r.length ? {
          value: void 0,
          done: !0
      } : (t = Ke(r, n),
      e.index += t.length,
      {
          value: t,
          done: !1
      })
  });
  var Ze = function(t, e, r, n) {
      try {
          return n ? e(R(r)[0], r[1]) : e(r)
      } catch (e) {
          var i = t.return;
          throw void 0 !== i && R(i.call(t)),
          e
      }
  }
    , tr = at("iterator")
    , er = Array.prototype
    , rr = function(t) {
      return void 0 !== t && (ze.Array === t || er[tr] === t)
  }
    , nr = function(t, e, r) {
      var n = g(e);
      n in t ? W.f(t, n, f(0, r)) : t[n] = r
  }
    , ir = at("iterator")
    , or = function(t) {
      if (null != t)
          return t[ir] || t["@@iterator"] || ze[Re(t)]
  }
    , ar = at("iterator")
    , ur = !1;
  try {
      var cr = 0
        , fr = {
          next: function() {
              return {
                  done: !!cr++
              }
          },
          return: function() {
              ur = !0
          }
      };
      fr[ar] = function() {
          return this
      }
      ,
      Array.from(fr, function() {
          throw 2
      })
  } catch (t) {}
  var sr = !function(t, e) {
      if (!e && !ur)
          return !1;
      var r = !1;
      try {
          var n = {};
          n[ar] = function() {
              return {
                  next: function() {
                      return {
                          done: r = !0
                      }
                  }
              }
          }
          ,
          t(n)
      } catch (t) {}
      return r
  }(function(t) {
      Array.from(t)
  });
  U({
      target: "Array",
      stat: !0,
      forced: sr
  }, {
      from: function(t) {
          var e, r, n, i, o, a, u = B(t), c = "function" == typeof this ? this : Array, f = arguments.length, s = f > 1 ? arguments[1] : void 0, l = void 0 !== s, h = or(u), d = 0;
          if (l && (s = P(s, f > 2 ? arguments[2] : void 0, 2)),
          null == h || c == Array && rr(h))
              for (r = new c(e = Y(u.length)); e > d; d++)
                  a = l ? s(u[d], d) : u[d],
                  nr(r, d, a);
          else
              for (o = (i = h.call(u)).next,
              r = new c; !(n = o.call(i)).done; d++)
                  a = l ? Ze(i, s, [n.value, d], !0) : n.value,
                  nr(r, d, a);
          return r.length = d,
          r
      }
  });
  var lr = C.Array.from
    , hr = function(t, e) {
      var r = [][t];
      return !!r && i(function() {
          r.call(null, e || function() {
              throw 1
          }
          , 1)
      })
  }
    , dr = lt.some
    , pr = hr("some")
    , yr = yt("some");
  U({
      target: "Array",
      proto: !0,
      forced: !pr || !yr
  }, {
      some: function(t) {
          return dr(this, t, arguments.length > 1 ? arguments[1] : void 0)
      }
  });
  var vr = mt("Array").some
    , gr = Array.prototype
    , br = function(t) {
      var e = t.some;
      return t === gr || t instanceof Array && e === gr.some ? vr : e
  }
    , mr = {
      f: Object.getOwnPropertySymbols
  }
    , Sr = Object.assign
    , wr = Object.defineProperty
    , Or = !Sr || i(function() {
      if (o && 1 !== Sr({
          b: 1
      }, Sr(wr({}, "a", {
          enumerable: !0,
          get: function() {
              wr(this, "b", {
                  value: 3,
                  enumerable: !1
              })
          }
      }), {
          b: 2
      })).b)
          return !0;
      var t = {}
        , e = {}
        , r = Symbol();
      return t[r] = 7,
      "abcdefghijklmnopqrst".split("").forEach(function(t) {
          e[t] = t
      }),
      7 != Sr({}, t)[r] || "abcdefghijklmnopqrst" != Oe(Sr({}, e)).join("")
  }) ? function(t, e) {
      for (var r = B(t), n = arguments.length, i = 1, a = mr.f, u = c.f; n > i; )
          for (var f, s = d(arguments[i++]), l = a ? Oe(s).concat(a(s)) : Oe(s), h = l.length, p = 0; h > p; )
              f = l[p++],
              o && !u.call(s, f) || (r[f] = s[f]);
      return r
  }
  : Sr;
  U({
      target: "Object",
      stat: !0,
      forced: Object.assign !== Or
  }, {
      assign: Or
  });
  var Ar, jr, kr = C.Object.assign, xr = ke("navigator", "userAgent") || "", Tr = n.process, Er = Tr && Tr.versions, Lr = Er && Er.v8;
  Lr ? jr = (Ar = Lr.split("."))[0] + Ar[1] : xr && (!(Ar = xr.match(/Edge\/(\d+)/)) || Ar[1] >= 74) && (Ar = xr.match(/Chrome\/(\d+)/)) && (jr = Ar[1]);
  var Ir = jr && +jr
    , Dr = at("species")
    , _r = function(t) {
      return Ir >= 51 || !i(function() {
          var e = [];
          return (e.constructor = {})[Dr] = function() {
              return {
                  foo: 1
              }
          }
          ,
          1 !== e[t](Boolean).foo
      })
  }
    , Cr = at("isConcatSpreadable")
    , Mr = Ir >= 51 || !i(function() {
      var t = [];
      return t[Cr] = !1,
      t.concat()[0] !== t
  })
    , Pr = _r("concat")
    , Rr = function(t) {
      if (!v(t))
          return !1;
      var e = t[Cr];
      return void 0 !== e ? !!e : Q(t)
  };
  U({
      target: "Array",
      proto: !0,
      forced: !Mr || !Pr
  }, {
      concat: function(t) {
          var e, r, n, i, o, a = B(this), u = ct(a, 0), c = 0;
          for (e = -1,
          n = arguments.length; e < n; e++)
              if (o = -1 === e ? a : arguments[e],
              Rr(o)) {
                  if (c + (i = Y(o.length)) > 9007199254740991)
                      throw TypeError("Maximum allowed index exceeded");
                  for (r = 0; r < i; r++,
                  c++)
                      r in o && nr(u, c, o[r])
              } else {
                  if (c >= 9007199254740991)
                      throw TypeError("Maximum allowed index exceeded");
                  nr(u, c++, o)
              }
          return u.length = c,
          u
      }
  });
  var Fr = mt("Array").concat
    , Wr = Array.prototype
    , Nr = function(t) {
      var e = t.concat;
      return t === Wr || t instanceof Array && e === Wr.concat ? Fr : e
  }
    , Vr = [].slice
    , zr = {}
    , Ur = Function.bind || function(t) {
      var e = M(this)
        , r = Vr.call(arguments, 1)
        , n = function() {
          var i = r.concat(Vr.call(arguments));
          return this instanceof n ? function(t, e, r) {
              if (!(e in zr)) {
                  for (var n = [], i = 0; i < e; i++)
                      n[i] = "a[" + i + "]";
                  zr[e] = Function("C,a", "return new C(" + n.join(",") + ")")
              }
              return zr[e](t, r)
          }(e, i.length, i) : e.apply(t, i)
      };
      return v(e.prototype) && (n.prototype = e.prototype),
      n
  }
  ;
  U({
      target: "Function",
      proto: !0
  }, {
      bind: Ur
  });
  var Br = mt("Function").bind
    , Gr = Function.prototype
    , Hr = function(t) {
      var e = t.bind;
      return t === Gr || t instanceof Function && e === Gr.bind ? Br : e
  }
    , $r = c.f
    , qr = function(t) {
      return function(e) {
          for (var r, n = y(e), i = Oe(n), a = i.length, u = 0, c = []; a > u; )
              r = i[u++],
              o && !$r.call(n, r) || c.push(t ? [r, n[r]] : n[r]);
          return c
      }
  }
    , Yr = {
      entries: qr(!0),
      values: qr(!1)
  }.entries;
  U({
      target: "Object",
      stat: !0
  }, {
      entries: function(t) {
          return Yr(t)
      }
  });
  var Qr = C.Object.entries
    , Kr = function(t) {
      return function(e, r, n, i) {
          M(r);
          var o = B(e)
            , a = d(o)
            , u = Y(o.length)
            , c = t ? u - 1 : 0
            , f = t ? -1 : 1;
          if (n < 2)
              for (; ; ) {
                  if (c in a) {
                      i = a[c],
                      c += f;
                      break
                  }
                  if (c += f,
                  t ? c < 0 : u <= c)
                      throw TypeError("Reduce of empty array with no initial value")
              }
          for (; t ? c >= 0 : u > c; c += f)
              c in a && (i = r(i, a[c], c, o));
          return i
      }
  }
    , Xr = {
      left: Kr(!1),
      right: Kr(!0)
  }.left
    , Jr = hr("reduce")
    , Zr = yt("reduce", {
      1: 0
  });
  U({
      target: "Array",
      proto: !0,
      forced: !Jr || !Zr
  }, {
      reduce: function(t) {
          return Xr(this, t, arguments.length, arguments.length > 1 ? arguments[1] : void 0)
      }
  });
  var tn = mt("Array").reduce
    , en = Array.prototype
    , rn = function(t) {
      var e = t.reduce;
      return t === en || t instanceof Array && e === en.reduce ? tn : e
  }
    , nn = !i(function() {
      return Object.isExtensible(Object.preventExtensions({}))
  })
    , on = e(function(t) {
      var e = W.f
        , r = tt("meta")
        , n = 0
        , i = Object.isExtensible || function() {
          return !0
      }
        , o = function(t) {
          e(t, r, {
              value: {
                  objectID: "O" + ++n,
                  weakData: {}
              }
          })
      }
        , a = t.exports = {
          REQUIRED: !1,
          fastKey: function(t, e) {
              if (!v(t))
                  return "symbol" == typeof t ? t : ("string" == typeof t ? "S" : "P") + t;
              if (!m(t, r)) {
                  if (!i(t))
                      return "F";
                  if (!e)
                      return "E";
                  o(t)
              }
              return t[r].objectID
          },
          getWeakData: function(t, e) {
              if (!m(t, r)) {
                  if (!i(t))
                      return !0;
                  if (!e)
                      return !1;
                  o(t)
              }
              return t[r].weakData
          },
          onFreeze: function(t) {
              return nn && a.REQUIRED && i(t) && !m(t, r) && o(t),
              t
          }
      };
      re[r] = !0
  })
    , an = (on.REQUIRED,
  on.fastKey,
  on.getWeakData,
  on.onFreeze,
  e(function(t) {
      var e = function(t, e) {
          this.stopped = t,
          this.result = e
      };
      (t.exports = function(t, r, n, i, o) {
          var a, u, c, f, s, l, h, d = P(r, n, i ? 2 : 1);
          if (o)
              a = t;
          else {
              if ("function" != typeof (u = or(t)))
                  throw TypeError("Target is not iterable");
              if (rr(u)) {
                  for (c = 0,
                  f = Y(t.length); f > c; c++)
                      if ((s = i ? d(R(h = t[c])[0], h[1]) : d(t[c])) && s instanceof e)
                          return s;
                  return new e(!1)
              }
              a = u.call(t)
          }
          for (l = a.next; !(h = l.call(a)).done; )
              if ("object" == typeof (s = Ze(a, d, h.value, i)) && s && s instanceof e)
                  return s;
          return new e(!1)
      }
      ).stop = function(t) {
          return new e(!0,t)
      }
  }))
    , un = function(t, e, r) {
      if (!(t instanceof e))
          throw TypeError("Incorrect " + (r ? r + " " : "") + "invocation");
      return t
  }
    , cn = W.f
    , fn = lt.forEach
    , sn = he.set
    , ln = he.getterFor
    , hn = function(t, e, r) {
      for (var n in e)
          r && r.unsafe && t[n] ? t[n] = e[n] : Ge(t, n, e[n], r);
      return t
  }
    , dn = on.getWeakData
    , pn = he.set
    , yn = he.getterFor
    , vn = lt.find
    , gn = lt.findIndex
    , bn = 0
    , mn = function(t) {
      return t.frozen || (t.frozen = new Sn)
  }
    , Sn = function() {
      this.entries = []
  }
    , wn = function(t, e) {
      return vn(t.entries, function(t) {
          return t[0] === e
      })
  };
  Sn.prototype = {
      get: function(t) {
          var e = wn(this, t);
          if (e)
              return e[1]
      },
      has: function(t) {
          return !!wn(this, t)
      },
      set: function(t, e) {
          var r = wn(this, t);
          r ? r[1] = e : this.entries.push([t, e])
      },
      delete: function(t) {
          var e = gn(this.entries, function(e) {
              return e[0] === t
          });
          return ~e && this.entries.splice(e, 1),
          !!~e
      }
  },
  function(t, e, r) {
      var a, u = -1 !== t.indexOf("Map"), c = -1 !== t.indexOf("Weak"), f = u ? "set" : "add", s = n[t], l = s && s.prototype, h = {};
      if (o && "function" == typeof s && (c || l.forEach && !i(function() {
          (new s).entries().next()
      }))) {
          a = e(function(e, r) {
              sn(un(e, a, t), {
                  type: t,
                  collection: new s
              }),
              null != r && an(r, e[f], e, u)
          });
          var d = ln(t);
          fn(["add", "clear", "delete", "forEach", "get", "has", "set", "keys", "values", "entries"], function(t) {
              var e = "add" == t || "set" == t;
              t in l && (!c || "clear" != t) && N(a.prototype, t, function(r, n) {
                  var i = d(this).collection;
                  if (!e && c && !v(r))
                      return "get" == t && void 0;
                  var o = i[t](0 === r ? 0 : r, n);
                  return e ? this : o
              })
          }),
          c || cn(a.prototype, "size", {
              configurable: !0,
              get: function() {
                  return d(this).collection.size
              }
          })
      } else
          a = r.getConstructor(e, t, u, f),
          on.REQUIRED = !0;
      Ve(a, t, !1, !0),
      h[t] = a,
      U({
          global: !0,
          forced: !0
      }, h),
      c || r.setStrong(a, t, u)
  }("WeakSet", function(t) {
      return function() {
          return t(this, arguments.length ? arguments[0] : void 0)
      }
  }, {
      getConstructor: function(t, e, r, n) {
          var i = t(function(t, o) {
              un(t, i, e),
              pn(t, {
                  type: e,
                  id: bn++,
                  frozen: void 0
              }),
              null != o && an(o, t[n], t, r)
          })
            , o = yn(e)
            , a = function(t, e, r) {
              var n = o(t)
                , i = dn(R(e), !0);
              return !0 === i ? mn(n).set(e, r) : i[n.id] = r,
              t
          };
          return hn(i.prototype, {
              delete: function(t) {
                  var e = o(this);
                  if (!v(t))
                      return !1;
                  var r = dn(t);
                  return !0 === r ? mn(e).delete(t) : r && m(r, e.id) && delete r[e.id]
              },
              has: function(t) {
                  var e = o(this);
                  if (!v(t))
                      return !1;
                  var r = dn(t);
                  return !0 === r ? mn(e).has(t) : r && m(r, e.id)
              }
          }),
          hn(i.prototype, r ? {
              get: function(t) {
                  var e = o(this);
                  if (v(t)) {
                      var r = dn(t);
                      return !0 === r ? mn(e).get(t) : r ? r[e.id] : void 0
                  }
              },
              set: function(t, e) {
                  return a(this, t, e)
              }
          } : {
              add: function(t) {
                  return a(this, t, !0)
              }
          }),
          i
      }
  });
  var On = he.set
    , An = he.getterFor("Array Iterator");
  Qe(Array, "Array", function(t, e) {
      On(this, {
          type: "Array Iterator",
          target: y(t),
          index: 0,
          kind: e
      })
  }, function() {
      var t = An(this)
        , e = t.target
        , r = t.kind
        , n = t.index++;
      return !e || n >= e.length ? (t.target = void 0,
      {
          value: void 0,
          done: !0
      }) : "keys" == r ? {
          value: n,
          done: !1
      } : "values" == r ? {
          value: e[n],
          done: !1
      } : {
          value: [n, e[n]],
          done: !1
      }
  }, "values");
  ze.Arguments = ze.Array;
  var jn = at("toStringTag");
  for (var kn in {
      CSSRuleList: 0,
      CSSStyleDeclaration: 0,
      CSSValueList: 0,
      ClientRectList: 0,
      DOMRectList: 0,
      DOMStringList: 0,
      DOMTokenList: 1,
      DataTransferItemList: 0,
      FileList: 0,
      HTMLAllCollection: 0,
      HTMLCollection: 0,
      HTMLFormElement: 0,
      HTMLSelectElement: 0,
      MediaList: 0,
      MimeTypeArray: 0,
      NamedNodeMap: 0,
      NodeList: 1,
      PaintRequestList: 0,
      Plugin: 0,
      PluginArray: 0,
      SVGLengthList: 0,
      SVGNumberList: 0,
      SVGPathSegList: 0,
      SVGPointList: 0,
      SVGStringList: 0,
      SVGTransformList: 0,
      SourceBufferList: 0,
      StyleSheetList: 0,
      TextTrackCueList: 0,
      TextTrackList: 0,
      TouchList: 0
  }) {
      var xn = n[kn]
        , Tn = xn && xn.prototype;
      Tn && Re(Tn) !== jn && N(Tn, jn, kn),
      ze[kn] = ze.Array
  }
  var En = C.WeakSet
    , Ln = "object" == typeof global && global && global.Object === Object && global
    , In = "object" == typeof self && self && self.Object === Object && self
    , Dn = Ln || In || Function("return this")()
    , _n = Dn.Symbol
    , Cn = Object.prototype
    , Mn = Cn.hasOwnProperty
    , Pn = Cn.toString
    , Rn = _n ? _n.toStringTag : void 0;
  var Fn = Object.prototype.toString;
  var Wn = "[object Null]"
    , Nn = "[object Undefined]"
    , Vn = _n ? _n.toStringTag : void 0;
  function zn(t) {
      return null == t ? void 0 === t ? Nn : Wn : Vn && Vn in Object(t) ? function(t) {
          var e = Mn.call(t, Rn)
            , r = t[Rn];
          try {
              t[Rn] = void 0;
              var n = !0
          } catch (t) {}
          var i = Pn.call(t);
          return n && (e ? t[Rn] = r : delete t[Rn]),
          i
      }(t) : function(t) {
          return Fn.call(t)
      }(t)
  }
  var Un = "[object Symbol]";
  function Bn(t) {
      var e = typeof t;
      return null != t && ("object" == e || "function" == e)
  }
  var Gn = NaN
    , Hn = /^\s+|\s+$/g
    , $n = /^[-+]0x[0-9a-f]+$/i
    , qn = /^0b[01]+$/i
    , Yn = /^0o[0-7]+$/i
    , Qn = parseInt;
  function Kn(t) {
      if ("number" == typeof t)
          return t;
      if (function(t) {
          return "symbol" == typeof t || function(t) {
              return null != t && "object" == typeof t
          }(t) && zn(t) == Un
      }(t))
          return Gn;
      if (Bn(t)) {
          var e = "function" == typeof t.valueOf ? t.valueOf() : t;
          t = Bn(e) ? e + "" : e
      }
      if ("string" != typeof t)
          return 0 === t ? t : +t;
      t = t.replace(Hn, "");
      var r = qn.test(t);
      return r || Yn.test(t) ? Qn(t.slice(2), r ? 2 : 8) : $n.test(t) ? Gn : +t
  }
  var Xn = function() {
      return Dn.Date.now()
  }
    , Jn = "Expected a function"
    , Zn = Math.max
    , ti = Math.min;
  function ei(t, e, r) {
      var n, i, o, a, u, c, f = 0, s = !1, l = !1, h = !0;
      if ("function" != typeof t)
          throw new TypeError(Jn);
      function d(e) {
          var r = n
            , o = i;
          return n = i = void 0,
          f = e,
          a = t.apply(o, r)
      }
      function p(t) {
          var r = t - c;
          return void 0 === c || r >= e || r < 0 || l && t - f >= o
      }
      function y() {
          var t = Xn();
          if (p(t))
              return v(t);
          u = setTimeout(y, function(t) {
              var r = e - (t - c);
              return l ? ti(r, o - (t - f)) : r
          }(t))
      }
      function v(t) {
          return u = void 0,
          h && n ? d(t) : (n = i = void 0,
          a)
      }
      function g() {
          var t = Xn()
            , r = p(t);
          if (n = arguments,
          i = this,
          c = t,
          r) {
              if (void 0 === u)
                  return function(t) {
                      return f = t,
                      u = setTimeout(y, e),
                      s ? d(t) : a
                  }(c);
              if (l)
                  return clearTimeout(u),
                  u = setTimeout(y, e),
                  d(c)
          }
          return void 0 === u && (u = setTimeout(y, e)),
          a
      }
      return e = Kn(e) || 0,
      Bn(r) && (s = !!r.leading,
      o = (l = "maxWait"in r) ? Zn(Kn(r.maxWait) || 0, e) : o,
      h = "trailing"in r ? !!r.trailing : h),
      g.cancel = function() {
          void 0 !== u && clearTimeout(u),
          f = 0,
          n = c = i = u = void 0
      }
      ,
      g.flush = function() {
          return void 0 === u ? a : v(Xn())
      }
      ,
      g
  }
  var ri = _r("splice")
    , ni = yt("splice", {
      ACCESSORS: !0,
      0: 0,
      1: 2
  })
    , ii = Math.max
    , oi = Math.min;
  U({
      target: "Array",
      proto: !0,
      forced: !ri || !ni
  }, {
      splice: function(t, e) {
          var r, n, i, o, a, u, c = B(this), f = Y(c.length), s = kt(t, f), l = arguments.length;
          if (0 === l ? r = n = 0 : 1 === l ? (r = 0,
          n = f - s) : (r = l - 2,
          n = oi(ii($(e), 0), f - s)),
          f + r - n > 9007199254740991)
              throw TypeError("Maximum allowed length exceeded");
          for (i = ct(c, n),
          o = 0; o < n; o++)
              (a = s + o)in c && nr(i, o, c[a]);
          if (i.length = n,
          r < n) {
              for (o = s; o < f - n; o++)
                  u = o + r,
                  (a = o + n)in c ? c[u] = c[a] : delete c[u];
              for (o = f; o > f - n + r; o--)
                  delete c[o - 1]
          } else if (r > n)
              for (o = f - n; o > s; o--)
                  u = o + r - 1,
                  (a = o + n - 1)in c ? c[u] = c[a] : delete c[u];
          for (o = 0; o < r; o++)
              c[o + s] = arguments[o + 2];
          return c.length = f - n + r,
          i
      }
  });
  var ai = mt("Array").splice
    , ui = Array.prototype
    , ci = function(t) {
      var e = t.splice;
      return t === ui || t instanceof Array && e === ui.splice ? ai : e
  }
    , fi = [].slice
    , si = /MSIE .\./.test(xr)
    , li = function(t) {
      return function(e, r) {
          var n = arguments.length > 2
            , i = n ? fi.call(arguments, 2) : void 0;
          return t(n ? function() {
              ("function" == typeof e ? e : Function(e)).apply(this, i)
          }
          : e, r)
      }
  };
  U({
      global: !0,
      bind: !0,
      forced: si
  }, {
      setTimeout: li(n.setTimeout),
      setInterval: li(n.setInterval)
  });
  var hi = C.setTimeout
    , di = function(t) {
      function e(t) {
          this._watched = [],
          this._listener = t
      }
      function r(e) {
          var r = {
              type: null,
              target: null,
              addedNodes: [],
              removedNodes: [],
              previousSibling: null,
              nextSibling: null,
              attributeName: null,
              attributeNamespace: null,
              oldValue: null
          };
          for (var n in e)
              d(r, n) && e[n] !== t && (r[n] = e[n]);
          return r
      }
      e._period = 30,
      e.prototype = {
          observe: function(n, i) {
              for (var c, f = {
                  attr: !!(i.attributes || i.attributeFilter || i.attributeOldValue),
                  kids: !!i.childList,
                  descendents: !!i.subtree,
                  charData: !(!i.characterData && !i.characterDataOldValue)
              }, d = this._watched, p = 0; p < d.length; p++)
                  d[p].tar === n && ci(d).call(d, p, 1);
              i.attributeFilter && (f.afilter = l(i.attributeFilter, function(t, e) {
                  return t[e] = !0,
                  t
              }, {})),
              d.push({
                  tar: n,
                  fn: function(e, n) {
                      var i = a(e, n);
                      return function(c) {
                          var f, l = c.length;
                          n.charData && 3 === e.nodeType && e.nodeValue !== i.charData && c.push(new r({
                              type: "characterData",
                              target: e,
                              oldValue: i.charData
                          })),
                          n.attr && i.attr && o(c, e, i.attr, n.afilter),
                          (n.kids || n.descendents) && (f = function(e, n, i, a) {
                              var c;
                              function f(t, n, i, u, c) {
                                  for (var f, s, h, d = t.length - 1, p = -~((d - c) / 2); h = t.pop(); )
                                      f = i[h.i],
                                      s = u[h.j],
                                      a.kids && p && Math.abs(h.i - h.j) >= d && (e.push(r({
                                          type: "childList",
                                          target: n,
                                          addedNodes: [f],
                                          removedNodes: [f],
                                          nextSibling: f.nextSibling,
                                          previousSibling: f.previousSibling
                                      })),
                                      p--),
                                      a.attr && s.attr && o(e, f, s.attr, a.afilter),
                                      a.charData && 3 === f.nodeType && f.nodeValue !== s.charData && e.push(r({
                                          type: "characterData",
                                          target: f,
                                          oldValue: s.charData
                                      })),
                                      a.descendents && l(f, s)
                              }
                              function l(n, i) {
                                  for (var d, p, y, v, g, b, m, S = n.childNodes, w = i.kids, O = S.length, A = w ? w.length : 0, j = 0, k = 0, x = 0; k < O || x < A; )
                                      b = S[k],
                                      g = w[x],
                                      m = g && g.node,
                                      b === m ? (a.attr && g.attr && o(e, b, g.attr, a.afilter),
                                      a.charData && g.charData !== t && b.nodeValue !== g.charData && e.push(r({
                                          type: "characterData",
                                          target: b,
                                          oldValue: g.charData
                                      })),
                                      p && f(p, n, S, w, j),
                                      a.descendents && (b.childNodes.length || g.kids && g.kids.length) && l(b, g),
                                      k++,
                                      x++) : (c = !0,
                                      d || (d = {},
                                      p = []),
                                      b && (d[y = s(b)] || (d[y] = !0,
                                      -1 === (v = u(w, b, x)) ? a.kids && (e.push(r({
                                          type: "childList",
                                          target: n,
                                          addedNodes: [b],
                                          nextSibling: b.nextSibling,
                                          previousSibling: b.previousSibling
                                      })),
                                      j++) : p.push({
                                          i: k,
                                          j: v
                                      })),
                                      k++),
                                      m && m !== S[k] && (d[y = s(m)] || (d[y] = !0,
                                      -1 === (v = h(S, m, k)) ? a.kids && (e.push(r({
                                          type: "childList",
                                          target: i.node,
                                          removedNodes: [m],
                                          nextSibling: w[x + 1],
                                          previousSibling: w[x - 1]
                                      })),
                                      j--) : p.push({
                                          i: v,
                                          j: x
                                      })),
                                      x++));
                                  p && f(p, n, S, w, j)
                              }
                              return l(n, i),
                              c
                          }(c, e, i, n)),
                          (f || c.length !== l) && (i = a(e, n))
                      }
                  }(n, f)
              }),
              this._timeout || (c = this,
              function t() {
                  var r = c.takeRecords();
                  r.length && c._listener(r, c),
                  c._timeout = hi(t, e._period)
              }())
          },
          takeRecords: function() {
              for (var t = [], e = this._watched, r = 0; r < e.length; r++)
                  e[r].fn(t);
              return t
          },
          disconnect: function() {
              this._watched = [],
              clearTimeout(this._timeout),
              this._timeout = null
          }
      };
      var n = document.createElement("i");
      n.style.top = 0;
      var i = (n = "null" != n.attributes.style.value) ? function(t, e) {
          return e.value
      }
      : function(t, e) {
          return "style" !== e.name ? e.value : t.style.cssText
      }
      ;
      function o(t, e, n, o) {
          for (var a, u, c = {}, f = e.attributes, s = f.length; s--; )
              u = (a = f[s]).name,
              o && !d(o, u) || (i(e, a) !== n[u] && t.push(r({
                  type: "attributes",
                  target: e,
                  attributeName: u,
                  oldValue: n[u],
                  attributeNamespace: a.namespaceURI
              })),
              c[u] = !0);
          for (u in n)
              c[u] || t.push(r({
                  target: e,
                  type: "attributes",
                  attributeName: u,
                  oldValue: n[u]
              }))
      }
      function a(t, e) {
          var r = !0;
          return function t(n) {
              var o = {
                  node: n
              };
              return !e.charData || 3 !== n.nodeType && 8 !== n.nodeType ? (e.attr && r && 1 === n.nodeType && (o.attr = l(n.attributes, function(t, r) {
                  return e.afilter && !e.afilter[r.name] || (t[r.name] = i(n, r)),
                  t
              }, {})),
              r && (e.kids || e.charData || e.attr && e.descendents) && (o.kids = function(t, e) {
                  for (var r = [], n = 0; n < t.length; n++)
                      r[n] = e(t[n], n, t);
                  return r
              }(n.childNodes, t)),
              r = e.descendents) : o.charData = n.nodeValue,
              o
          }(t)
      }
      function u(t, e, r) {
          return h(t, e, r, "node")
      }
      var c = 1
        , f = "mo_id";
      function s(t) {
          try {
              return t.id || (t[f] = t[f] || c++)
          } catch (e) {
              try {
                  return t.nodeValue
              } catch (t) {
                  return c++
              }
          }
      }
      function l(t, e, r) {
          for (var n = 0; n < t.length; n++)
              r = e(r, t[n], n, t);
          return r
      }
      function h(t, e, r, n) {
          for (; r < t.length; r++)
              if ((n ? t[r][n] : t[r]) === e)
                  return r;
          return -1
      }
      function d(e, r) {
          return e[r] !== t
      }
      return e
  }(void 0)
    , pi = "\t\n\v\f\r                　\u2028\u2029\ufeff"
    , yi = "[" + pi + "]"
    , vi = RegExp("^" + yi + yi + "*")
    , gi = RegExp(yi + yi + "*$")
    , bi = function(t) {
      return function(e) {
          var r = String(p(e));
          return 1 & t && (r = r.replace(vi, "")),
          2 & t && (r = r.replace(gi, "")),
          r
      }
  }
    , mi = {
      start: bi(1),
      end: bi(2),
      trim: bi(3)
  }.trim
    , Si = n.parseFloat
    , wi = 1 / Si(pi + "-0") != -1 / 0 ? function(t) {
      var e = mi(String(t))
        , r = Si(e);
      return 0 === r && "-" == e.charAt(0) ? -0 : r
  }
  : Si;
  U({
      global: !0,
      forced: parseFloat != wi
  }, {
      parseFloat: wi
  });
  var Oi = C.parseFloat
    , Ai = lt.forEach
    , ji = hr("forEach")
    , ki = yt("forEach")
    , xi = ji && ki ? [].forEach : function(t) {
      return Ai(this, t, arguments.length > 1 ? arguments[1] : void 0)
  }
  ;
  U({
      target: "Array",
      proto: !0,
      forced: [].forEach != xi
  }, {
      forEach: xi
  });
  var Ti = mt("Array").forEach
    , Ei = Array.prototype
    , Li = {
      DOMTokenList: !0,
      NodeList: !0
  }
    , Ii = function(t) {
      var e = t.forEach;
      return t === Ei || t instanceof Array && e === Ei.forEach || Li.hasOwnProperty(Re(t)) ? Ti : e
  }
    , Di = function() {
      function t(e) {
          Wt(this, t),
          this.options = e,
          this.initCanvas()
      }
      return Vt(t, [{
          key: "initCanvas",
          value: function() {
              var t, e = this, r = this.options, n = r.width, i = r.height, o = r.textAlign, a = r.textBaseline, u = r.font, c = r.fillStyle, f = r.rotate, s = r.lineHeight, l = r.content, h = document.createElement("canvas");
              h.setAttribute("width", this.getRatioLength(n)),
              h.setAttribute("height", this.getRatioLength(i));
              var d = h.getContext("2d");
              d.textAlign = o,
              d.textBaseline = a,
              d.font = this.getRatioLength(u),
              d.fillStyle = c,
              d.rotate(Math.PI / 180 * f);
              var p = this.transformContent(l);
              Ii(p).call(p, Hr(t = function(t, r) {
                  return zt(this, e),
                  this.renderTextLine(d, t, 0, r * s)
              }
              ).call(t, this)),
              this.canvas = h
          }
      }, {
          key: "renderTextLine",
          value: function(t, e) {
              var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0
                , n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0
                , i = this.options
                , o = i.width
                , a = i.height
                , u = i.strokeStyle
                , c = 4 * Oi(o) / 2 + r
                , f = 4 * Oi(a) / 2 + n
                , s = 4 * Oi(o);
              t.fillText(e, c, f, s),
              u && (t.strokeStyle = u,
              t.lineWidth = 2,
              t.strokeText(e, c, f, s))
          }
      }, {
          key: "getRatioLength",
          value: function(t) {
              var e, r = this, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 4;
              return t.replace(/(\d+)px/, Hr(e = function(t, e) {
                  return zt(this, r),
                  "".concat(e * n, "px")
              }
              ).call(e, this))
          }
      }, {
          key: "transformContent",
          value: function(t) {
              return "string" == typeof t ? [t] : t
          }
      }, {
          key: "toBase64Url",
          value: function() {
              return this.canvas.toDataURL()
          }
      }]),
      t
  }()
    , _i = ["height", "width", "class", "style"]
    , Ci = new En;
  function Mi(t) {
      return "number" == typeof t ? t + "px" : t
  }
  var Pi = {
      content: "内部资源，请勿外传",
      width: "200px",
      height: "120px",
      textAlign: "center",
      textBaseline: "middle",
      font: '14px "PingFang SC",-apple-system,"Microsoft YaHei"',
      fillStyle: "rgba(184, 184, 184, 0.6)",
      strokeStyle: "",
      rotate: -15,
      zIndex: 1e4,
      lineHeight: 70,
      refreshTime: 300,
      position: "absolute"
  };
  return function() {
      function t(e) {
          Wt(this, t),
          this.options = Pi,
          this.wmStyleStr = "",
          this.base64Url = "",
          this.mo = null,
          this.initOptions(e),
          this.initWatermark()
      }
      return Vt(t, [{
          key: "initOptions",
          value: function(t) {
              kr(this.options, t)
          }
      }, {
          key: "initWatermark",
          value: function() {
              var t, e, r, n = this;
              if (this.container = this.options.container || document.body,
              br(t = lr(this.container.children)).call(t, Hr(e = function(t) {
                  return zt(this, n),
                  Ci.has(t)
              }
              ).call(e, this)))
                  throw new Error("A watermark already exists in this container");
              this.resetWatermark = ei(this.resetWatermark, this.options.refreshTime),
              window.addEventListener("resize", Hr(r = this.resetWatermark).call(r, this), !1),
              this.base64Url = new Di(this.options).toBase64Url(),
              this.setWatermark()
          }
      }, {
          key: "setWatermark",
          value: function(t) {
              var e = t || this.getWM() || document.createElement("div")
                , r = this.getWmStyleStr();
              e.setAttribute("style", r),
              this.wmStyleStr = r,
              this.container.insertBefore(e, this.container.firstChild),
              Ci.add(e),
              this.setObserver()
          }
      }, {
          key: "resetWatermark",
          value: function() {
              this.mo && this.mo.disconnect(),
              this.hasUpdate() ? (this.mo = null,
              this.setWatermark()) : this._setObserver()
          }
      }, {
          key: "setObserver",
          value: function() {
              var t, e = this;
              di && (this.mo = new di(Hr(t = function(t) {
                  zt(this, e);
                  var r, n = function(t, e) {
                      var r;
                      if ("undefined" == typeof Symbol || null == t[Symbol.iterator]) {
                          if (Array.isArray(t) || (r = Bt(t)) || e && t && "number" == typeof t.length) {
                              r && (t = r);
                              var n = 0
                                , i = function() {};
                              return {
                                  s: i,
                                  n: function() {
                                      return n >= t.length ? {
                                          done: !0
                                      } : {
                                          done: !1,
                                          value: t[n++]
                                      }
                                  },
                                  e: function(t) {
                                      throw t
                                  },
                                  f: i
                              }
                          }
                          throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                      }
                      var o, a = !0, u = !1;
                      return {
                          s: function() {
                              r = t[Symbol.iterator]()
                          },
                          n: function() {
                              var t = r.next();
                              return a = t.done,
                              t
                          },
                          e: function(t) {
                              u = !0,
                              o = t
                          },
                          f: function() {
                              try {
                                  a || null == r.return || r.return()
                              } finally {
                                  if (u)
                                      throw o
                              }
                          }
                      }
                  }(t);
                  try {
                      for (n.s(); !(r = n.n()).done; ) {
                          var i = r.value;
                          if (Ci.has(i.target) || "childList" === i.type || Ft(_i).call(_i, i.attributeName)) {
                              this.resetWatermark();
                              break
                          }
                      }
                  } catch (t) {
                      n.e(t)
                  } finally {
                      n.f()
                  }
              }
              ).call(t, this)),
              this._setObserver())
          }
      }, {
          key: "_setObserver",
          value: function() {
              this.mo && this.mo.observe(this.container, {
                  attributes: !0,
                  subtree: !0,
                  childList: !0
              })
          }
      }, {
          key: "hasUpdate",
          value: function() {
              return !this.getWM() || this.wmStyleStr !== this.getWmStyleStr()
          }
      }, {
          key: "getWM",
          value: function() {
              var t, e, r = this;
              return Ot(t = lr(this.container.children)).call(t, Hr(e = function(t) {
                  return zt(this, r),
                  Ci.has(t)
              }
              ).call(e, this))
          }
      }, {
          key: "getContainerSize",
          value: function() {
              var t = this.getWM();
              t && (t.style.display = "none");
              var e = this.isBody ? document.querySelector("html") : this.container
                , r = e.scrollHeight
                , n = e.scrollWidth;
              return t && t.setAttribute("style", this.wmStyleStr),
              {
                  height: Mi(r),
                  width: Mi(n)
              }
          }
      }, {
          key: "getWmStyleStr",
          value: function() {
              var t, e = this.getContainerSize(), r = e.height, n = e.width, i = this.base64Url, o = this.options, a = o.position, u = o.zIndex, c = o.height, f = o.width;
              return function(t) {
                  var e, r, n = this;
                  return rn(e = Qr(t)).call(e, Hr(r = function(t, e) {
                      var r;
                      zt(this, n);
                      var i = Ut(e, 2)
                        , o = i[0]
                        , a = i[1];
                      return t + Nr(r = "".concat(o, ":")).call(r, a, " !important;")
                  }
                  ).call(r, this), "")
              }({
                  width: n,
                  height: r,
                  position: a,
                  top: 0,
                  left: 0,
                  display: "block",
                  visibility: "visible",
                  "z-index": u,
                  "background-image": "url('".concat(i, "')"),
                  "background-size": Nr(t = "".concat(f, " ")).call(t, c),
                  "background-repeat": "repeat",
                  "pointer-events": "none",
                  transform: "unset",
                  opacity: "unset",
                  filter: "alpha(opacity=100)",
                  "-webkit-print-color-adjust": "exact"
              })
          }
      }, {
          key: "isBody",
          get: function() {
              return "BODY" === this.container.tagName
          }
      }]),
      t
  }()
}();
new Watermark({
  content: ["内部信息 请勿对外转载"],
  width: "240px",
  height: "120px",
  fillStyle: "rgba(170, 170, 170, 0.1)"
});
