!(function (t, e) {
  'object' == typeof exports && 'undefined' != typeof module
    ? e(exports, require('react'))
    : 'function' == typeof define && define.amd
    ? define(['exports', 'react'], e)
    : e(((t = t || self).Masonic = {}), t.React)
})(this, function (t, e) {
  'use strict'
  function n() {
    return (n =
      Object.assign ||
      function (t) {
        for (var e = 1; arguments.length > e; e++) {
          var n = arguments[e]
          for (var r in n)
            Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
        }
        return t
      }).apply(this, arguments)
  }
  function r(t, e, n, r) {
    function o() {
      for (var t = arguments.length, e = new Array(t), n = 0; t > n; n++)
        e[n] = arguments[n]
      u.current.apply(this, e)
    }
    void 0 === r && (r = i)
    var u = dt(n),
      s = dt(r)
    ft(
      function () {
        var n = t && 'current' in t ? t.current : t
        if (n) {
          var r = o
          n.addEventListener(e, r)
          var i = s.current
          return function () {
            n.removeEventListener(e, r), i()
          }
        }
      },
      [t, e]
    )
  }
  function i() {}
  function o(t, n, r) {
    function i() {
      ;(a.current = 0), d()
    }
    void 0 === n && (n = 30), void 0 === r && (r = 0)
    var o,
      u,
      s = ((o = t), ((u = e.useRef(o)).current = o), u),
      c = 1e3 / n,
      a = e.useRef(0),
      f = e.useRef(),
      d = function () {
        return f.current && clearTimeout(f.current)
      },
      h = [n, r, s]
    return (
      e.useEffect(function () {
        return i
      }, h),
      e.useCallback(function () {
        var t = arguments,
          e = mt(),
          n = function () {
            ;(a.current = e), d(), s.current.apply(null, t)
          },
          i = a.current
        if (r && 0 === i) return n()
        if (e - i > c) {
          if (i > 0) return n()
          a.current = e
        }
        d(),
          (f.current = setTimeout(function () {
            n(), (a.current = 0)
          }, c))
      }, h)
    )
  }
  function u() {}
  function s(t, n) {
    function r() {
      a(0)
    }
    void 0 === t && (t = 0), void 0 === n && (n = 12)
    var i = (function (t) {
        void 0 === t && (t = 30)
        var n = (function (t, n) {
          var r = e.useState(t)
          return [r[0], o(r[1], n, 1)]
        })('undefined' == typeof window ? 0 : bt, t)
        return (
          (function (t, e, r, i) {
            function o() {
              for (
                var t = arguments.length, e = new Array(t), n = 0;
                t > n;
                n++
              )
                e[n] = arguments[n]
              s.current.apply(this, e)
            }
            void 0 === i && (i = u)
            var s = gt(function () {
                return n[1](bt())
              }),
              c = gt(i)
            ft(
              function () {
                var e = t && 'current' in t ? t.current : t
                if (e) {
                  var n = o
                  e.addEventListener('scroll', n)
                  var r = c.current
                  return function () {
                    e.removeEventListener('scroll', n), r()
                  }
                }
              },
              [t, 'scroll']
            )
          })(yt),
          n[0]
        )
      })(n),
      s = e.useState(0),
      c = s[0],
      a = s[1],
      f = e.useRef(0)
    return (
      e.useEffect(
        function () {
          1 === f.current && a(1)
          var t,
            e,
            i,
            o,
            u =
              ((t = r),
              (e = 40 + 1e3 / n),
              (i = xt()),
              ((o = {}).v = Mt(function n() {
                xt() - i < e ? (o.v = Mt(n)) : t.call(null)
              })),
              o)
          return (
            (f.current = 1),
            function () {
              return (function (t) {
                Lt(t.v || -1)
              })(u)
            }
          )
        },
        [n, i]
      ),
      {scrollTop: Math.max(0, i - t), isScrolling: c}
    )
  }
  function c() {
    var t = e.useState(Ht)[1]
    return e.useRef(function () {
      return t({})
    }).current
  }
  function a(t) {
    var r,
      i = t.positioner,
      o = t.resizeObserver,
      u = t.items,
      s = t.as,
      a = void 0 === s ? 'div' : s,
      d = t.id,
      h = t.key,
      l = t.className,
      v = t.style,
      p = t.role,
      m = void 0 === p ? 'grid' : p,
      g = t.tabIndex,
      y = void 0 === g ? 0 : g,
      b = t.containerRef,
      w = t.itemAs,
      _ = void 0 === w ? 'div' : w,
      P = t.itemStyle,
      x = t.itemHeightEstimate,
      R = void 0 === x ? 300 : x,
      E = t.itemKey,
      C = void 0 === E ? f : E,
      M = t.overscanBy,
      L = void 0 === M ? 2 : M,
      T = t.scrollTop,
      O = t.isScrolling,
      z = t.height,
      A = t.render,
      S = t.onRender,
      k = 0,
      I = c(),
      W = Vt(i, o),
      H = u.length,
      j = i.columnWidth,
      D = i.columnCount,
      q = i.range,
      B = i.estimateHeight,
      F = i.size,
      G = i.shortestColumn,
      N = F(),
      V = G(),
      Y = [],
      K = 'list' === m ? 'listitem' : 'grid' === m ? 'gridcell' : void 0,
      J = It(S),
      Q = T + (L *= z),
      U = Q > V && H > N
    if (
      (q(Math.max(0, T - L / 2), Q, function (t, e, i) {
        var o = u[t],
          s = C(o, t),
          c = {
            top: i,
            left: e,
            width: j,
            writingMode: 'horizontal-tb',
            position: 'absolute',
          }
        Y.push(
          jt(
            _,
            {
              key: s,
              ref: W(t),
              role: K,
              style: 'object' == typeof P && null !== P ? n({}, c, P) : c,
            },
            qt(A, t, o, j)
          )
        ),
          void 0 === r
            ? ((k = t), (r = t))
            : ((k = Math.min(k, t)), (r = Math.max(r, t)))
      }),
      U)
    )
      for (
        var X = Math.min(H - N, Math.ceil(((T + L - V) / R) * D)),
          Z = N,
          $ = Nt(j);
        N + X > Z;
        Z++
      ) {
        var tt = u[Z],
          et = C(tt, Z)
        Y.push(
          jt(
            _,
            {
              key: et,
              ref: W(Z),
              role: K,
              style: 'object' == typeof P ? n({}, $, P) : $,
            },
            qt(A, Z, tt, j)
          )
        )
      }
    e.useEffect(
      function () {
        'function' == typeof J.current && void 0 !== r && J.current(k, r, u),
          (Dt = '1')
      },
      [k, r, u, J]
    ),
      e.useEffect(
        function () {
          U && I()
        },
        [U]
      )
    var nt = Bt(O, B(H, R))
    return jt(a, {
      ref: b,
      key: (h || '') + '-' + Dt,
      id: d,
      role: m,
      className: l,
      tabIndex: y,
      style: 'object' == typeof v ? Gt(nt, v) : nt,
      children: Y,
    })
  }
  function f(t, e) {
    return e
  }
  function d(t) {
    var e = s(t.offset, t.scrollFps)
    return a({
      scrollTop: e.scrollTop,
      isScrolling: e.isScrolling,
      positioner: t.positioner,
      resizeObserver: t.resizeObserver,
      items: t.items,
      onRender: t.onRender,
      as: t.as,
      id: t.id,
      className: t.className,
      style: t.style,
      role: t.role,
      tabIndex: t.tabIndex,
      containerRef: t.containerRef,
      itemAs: t.itemAs,
      itemStyle: t.itemStyle,
      itemHeightEstimate: t.itemHeightEstimate,
      itemKey: t.itemKey,
      overscanBy: t.overscanBy,
      height: t.height,
      render: t.render,
    })
  }
  function h(t, n) {
    void 0 === n && (n = Yt)
    var r = e.useState({offset: 0, width: 0}),
      i = r[0],
      o = r[1]
    return (
      ft(function () {
        var e = t.current
        if (null !== e) {
          var n = 0,
            r = e
          do {
            ;(n += r.offsetTop || 0), (r = r.offsetParent)
          } while (r)
          ;(n === i.offset && e.offsetWidth === i.width) ||
            o({offset: n, width: e.offsetWidth})
        }
      }, n),
      i
    )
  }
  function l(t, e) {
    var n = -1
    return (
      t.some(function (t, r) {
        return t[0] === e ? ((n = r), 1) : 0
      }),
      n
    )
  }
  function v() {
    this.__entries__ = []
  }
  function p() {
    return this.__entries__.length
  }
  function m(t) {
    var e = l(this.__entries__, t),
      n = this.__entries__[e]
    return n && n[1]
  }
  function g(t, e) {
    var n = l(this.__entries__, t)
    ~n ? (this.__entries__[n][1] = e) : this.__entries__.push([t, e])
  }
  function y(t) {
    var e = this.__entries__,
      n = l(e, t)
    ~n && e.splice(n, 1)
  }
  function b(t) {
    return !!~l(this.__entries__, t)
  }
  function w() {
    this.__entries__.splice(0)
  }
  function _(t, e) {
    void 0 === e && (e = null)
    for (var n = 0, r = this.__entries__; n < r.length; n++) {
      var i = r[n]
      t.call(e, i[1], i[0])
    }
  }
  function P(t) {
    return setTimeout(function () {
      return t(Date.now())
    }, 1e3 / 60)
  }
  function x() {
    ;(this.connected_ = 0),
      (this.mutationEventsAdded_ = 0),
      (this.mutationsObserver_ = null),
      (this.observers_ = []),
      (this.onTransitionEnd_ = this.onTransitionEnd_.bind(this)),
      (this.refresh = (function (t) {
        function e() {
          i && ((i = 0), t()), o && r()
        }
        function n() {
          Ut(e)
        }
        function r() {
          var t = Date.now()
          if (i) {
            if (2 > t - u) return
            o = 1
          } else (i = 1), (o = 0), setTimeout(n, 20)
          u = t
        }
        var i = 0,
          o = 0,
          u = 0
        return r
      })(this.refresh.bind(this)))
  }
  function R(t) {
    ~this.observers_.indexOf(t) || this.observers_.push(t),
      this.connected_ || this.connect_()
  }
  function E(t) {
    var e = this.observers_,
      n = e.indexOf(t)
    ~n && e.splice(n, 1), !e.length && this.connected_ && this.disconnect_()
  }
  function C() {
    this.updateObservers_() && this.refresh()
  }
  function M(t) {
    return t.gatherActive(), t.hasActive()
  }
  function L(t) {
    return t.broadcastActive()
  }
  function T() {
    var t = this.observers_.filter(M)
    return t.forEach(L), t.length > 0
  }
  function O() {
    Jt &&
      !this.connected_ &&
      (document.addEventListener('transitionend', this.onTransitionEnd_),
      window.addEventListener('resize', this.refresh),
      Zt
        ? ((this.mutationsObserver_ = new MutationObserver(this.refresh)),
          this.mutationsObserver_.observe(document, {
            attributes: 1,
            childList: 1,
            characterData: 1,
            subtree: 1,
          }))
        : (document.addEventListener('DOMSubtreeModified', this.refresh),
          (this.mutationEventsAdded_ = 1)),
      (this.connected_ = 1))
  }
  function z() {
    Jt &&
      this.connected_ &&
      (document.removeEventListener('transitionend', this.onTransitionEnd_),
      window.removeEventListener('resize', this.refresh),
      this.mutationsObserver_ && this.mutationsObserver_.disconnect(),
      this.mutationEventsAdded_ &&
        document.removeEventListener('DOMSubtreeModified', this.refresh),
      (this.mutationsObserver_ = null),
      (this.mutationEventsAdded_ = 0),
      (this.connected_ = 0))
  }
  function A(t) {
    var e = t.propertyName,
      n = void 0 === e ? '' : e
    Xt.some(function (t) {
      return !!~n.indexOf(t)
    }) && this.refresh()
  }
  function S() {
    return this.instance_ || (this.instance_ = new x()), this.instance_
  }
  function k(t) {
    return parseFloat(t) || 0
  }
  function I(t) {
    for (var e = [], n = 1; arguments.length > n; n++) e[n - 1] = arguments[n]
    return e.reduce(function (e, n) {
      return e + k(t['border-' + n + '-width'])
    }, 0)
  }
  function W(t) {
    return t instanceof ee(t).SVGGraphicsElement
  }
  function H(t) {
    return t instanceof ee(t).SVGElement && 'function' == typeof t.getBBox
  }
  function j(t) {
    return Jt
      ? re(t)
        ? (function (t) {
            var e = t.getBBox()
            return D(0, 0, e.width, e.height)
          })(t)
        : (function (t) {
            var e = t.clientWidth,
              n = t.clientHeight
            if (!e && !n) return ne
            var r = ee(t).getComputedStyle(t),
              i = (function (t) {
                for (
                  var e = {}, n = 0, r = ['top', 'right', 'bottom', 'left'];
                  r.length > n;
                  n++
                ) {
                  var i = r[n],
                    o = t['padding-' + i]
                  e[i] = k(o)
                }
                return e
              })(r),
              o = i.left + i.right,
              u = i.top + i.bottom,
              s = k(r.width),
              c = k(r.height)
            if (
              ('border-box' === r.boxSizing &&
                (Math.round(s + o) !== e && (s -= I(r, 'left', 'right') + o),
                Math.round(c + u) !== n && (c -= I(r, 'top', 'bottom') + u)),
              !(function (t) {
                return t === ee(t).document.documentElement
              })(t))
            ) {
              var a = Math.round(s + o) - e,
                f = Math.round(c + u) - n
              1 !== Math.abs(a) && (s -= a), 1 !== Math.abs(f) && (c -= f)
            }
            return D(i.left, i.top, s, c)
          })(t)
      : ne
  }
  function D(t, e, n, r) {
    return {x: t, y: e, width: n, height: r}
  }
  function q(t) {
    ;(this.broadcastWidth = 0),
      (this.broadcastHeight = 0),
      (this.contentRect_ = D(0, 0, 0, 0)),
      (this.target = t)
  }
  function B() {
    var t = j(this.target)
    return (
      (this.contentRect_ = t),
      t.width !== this.broadcastWidth || t.height !== this.broadcastHeight
    )
  }
  function F() {
    var t = this.contentRect_
    return (this.broadcastWidth = t.width), (this.broadcastHeight = t.height), t
  }
  function G(t, e) {
    var n,
      r,
      i,
      o,
      u,
      s,
      c,
      a =
        ((r = (n = e).x),
        (i = n.y),
        (o = n.width),
        (u = n.height),
        (s = 'undefined' != typeof DOMRectReadOnly ? DOMRectReadOnly : Object),
        (c = Object.create(s.prototype)),
        te(c, {
          x: r,
          y: i,
          width: o,
          height: u,
          top: i,
          right: r + o,
          bottom: u + i,
          left: r,
        }),
        c)
    te(this, {target: t, contentRect: a})
  }
  function N(t, e, n) {
    if (
      ((this.activeObservations_ = []),
      (this.observations_ = new Kt()),
      'function' != typeof t)
    )
      throw new TypeError(
        'The callback provided as parameter 1 is not a function.'
      )
    ;(this.callback_ = t), (this.controller_ = e), (this.callbackCtx_ = n)
  }
  function V(t) {
    if (!arguments.length)
      throw new TypeError('1 argument required, but only 0 present.')
    if ('undefined' != typeof Element && Element instanceof Object) {
      if (!(t instanceof ee(t).Element))
        throw new TypeError('parameter 1 is not of type "Element".')
      var e = this.observations_
      e.has(t) ||
        (e.set(t, new ie(t)),
        this.controller_.addObserver(this),
        this.controller_.refresh())
    }
  }
  function Y(t) {
    if (!arguments.length)
      throw new TypeError('1 argument required, but only 0 present.')
    if ('undefined' != typeof Element && Element instanceof Object) {
      if (!(t instanceof ee(t).Element))
        throw new TypeError('parameter 1 is not of type "Element".')
      var e = this.observations_
      e.has(t) && (e.delete(t), e.size || this.controller_.removeObserver(this))
    }
  }
  function K() {
    this.clearActive(),
      this.observations_.clear(),
      this.controller_.removeObserver(this)
  }
  function J() {
    var t = this
    this.clearActive(),
      this.observations_.forEach(function (e) {
        e.isActive() && t.activeObservations_.push(e)
      })
  }
  function Q(t) {
    return new oe(t.target, t.broadcastRect())
  }
  function U() {
    if (this.hasActive()) {
      var t = this.callbackCtx_,
        e = this.activeObservations_.map(Q)
      this.callback_.call(t, e, t), this.clearActive()
    }
  }
  function X() {
    this.activeObservations_.splice(0)
  }
  function Z() {
    return this.activeObservations_.length > 0
  }
  function $(t) {
    function n() {
      return i.disconnect()
    }
    var r = c(),
      i = fe(t, r)
    return (
      e.useEffect(
        function () {
          return n
        },
        [i]
      ),
      i
    )
  }
  function tt(t) {
    var e = t.high
    t.L === de && t.R === de
      ? (t.max = e)
      : t.L === de
      ? (t.max = Math.max(t.R.max, e))
      : t.R === de
      ? (t.max = Math.max(t.L.max, e))
      : (t.max = Math.max(Math.max(t.L.max, t.R.max), e))
  }
  function et(t) {
    for (var e = t; e.P !== de; ) tt(e.P), (e = e.P)
  }
  function nt(t, e) {
    if (e.R !== de) {
      var n = e.R
      ;(e.R = n.L),
        n.L !== de && (n.L.P = e),
        (n.P = e.P),
        e.P === de ? (t.root = n) : e === e.P.L ? (e.P.L = n) : (e.P.R = n),
        (n.L = e),
        (e.P = n),
        tt(e),
        tt(n)
    }
  }
  function rt(t, e) {
    if (e.L !== de) {
      var n = e.L
      ;(e.L = n.R),
        n.R !== de && (n.R.P = e),
        (n.P = e.P),
        e.P === de ? (t.root = n) : e === e.P.R ? (e.P.R = n) : (e.P.L = n),
        (n.R = e),
        (e.P = n),
        tt(e),
        tt(n)
    }
  }
  function it(t, e, n) {
    e.P === de ? (t.root = n) : e === e.P.L ? (e.P.L = n) : (e.P.R = n),
      (n.P = e.P)
  }
  function ot() {
    var t = {root: de, size: 0},
      e = {}
    return {
      insert: function (n, r, i) {
        for (var o = t.root, u = de; o !== de && n !== (u = o).low; )
          o = n < o.low ? o.L : o.R
        if (n === u.low && u !== de) {
          if (
            !(function (t, e, n) {
              for (var r, i = t.list; i; ) {
                if (i.index === n) return 0
                if (e > i.high) break
                ;(r = i), (i = i.next)
              }
              return (
                r || (t.list = {index: n, high: e, next: i}),
                r && (r.next = {index: n, high: e, next: r.next}),
                1
              )
            })(u, r, i)
          )
            return
          return (
            (u.high = Math.max(u.high, r)),
            tt(u),
            et(u),
            (e[i] = u),
            void t.size++
          )
        }
        var s = {
          low: n,
          high: r,
          max: r,
          C: 0,
          P: u,
          L: de,
          R: de,
          list: {index: i, high: r, next: null},
        }
        u === de
          ? (t.root = s)
          : (s.low < u.low ? (u.L = s) : (u.R = s), et(s)),
          (function (t, e) {
            for (var n; 0 === e.P.C; )
              e.P === e.P.P.L
                ? 0 === (n = e.P.P.R).C
                  ? ((e.P.C = 1), (n.C = 1), (e.P.P.C = 0), (e = e.P.P))
                  : (e === e.P.R && nt(t, (e = e.P)),
                    (e.P.C = 1),
                    (e.P.P.C = 0),
                    rt(t, e.P.P))
                : 0 === (n = e.P.P.L).C
                ? ((e.P.C = 1), (n.C = 1), (e.P.P.C = 0), (e = e.P.P))
                : (e === e.P.L && rt(t, (e = e.P)),
                  (e.P.C = 1),
                  (e.P.P.C = 0),
                  nt(t, e.P.P))
            t.root.C = 1
          })(t, s),
          (e[i] = s),
          t.size++
      },
      remove: function (n) {
        var r = e[n]
        if (void 0 !== r) {
          delete e[n]
          var i = (function (t, e) {
            var n = t.list
            if (n.index === e)
              return null === n.next ? 0 : ((t.list = n.next), 1)
            var r = n
            for (n = n.next; null !== n; ) {
              if (n.index === e) return (r.next = n.next), 1
              ;(r = n), (n = n.next)
            }
          })(r, n)
          if (void 0 !== i) {
            if (1 === i)
              return (r.high = r.list.high), tt(r), et(r), void t.size--
            var o,
              u = r,
              s = u.C
            r.L === de
              ? ((o = r.R), it(t, r, r.R))
              : r.R === de
              ? ((o = r.L), it(t, r, r.L))
              : ((s = (u = (function (t) {
                  for (; t.L !== de; ) t = t.L
                  return t
                })(r.R)).C),
                (o = u.R),
                u.P === r
                  ? (o.P = u)
                  : (it(t, u, u.R), (u.R = r.R), (u.R.P = u)),
                it(t, r, u),
                (u.L = r.L),
                (u.L.P = u),
                (u.C = r.C)),
              tt(o),
              et(o),
              1 === s &&
                (function (t, e) {
                  for (var n; e !== de && 1 === e.C; )
                    e === e.P.L
                      ? (0 === (n = e.P.R).C &&
                          ((n.C = 1), (e.P.C = 0), nt(t, e.P), (n = e.P.R)),
                        1 === n.L.C && 1 === n.R.C
                          ? ((n.C = 0), (e = e.P))
                          : (1 === n.R.C &&
                              ((n.L.C = 1), (n.C = 0), rt(t, n), (n = e.P.R)),
                            (n.C = e.P.C),
                            (e.P.C = 1),
                            (n.R.C = 1),
                            nt(t, e.P),
                            (e = t.root)))
                      : (0 === (n = e.P.L).C &&
                          ((n.C = 1), (e.P.C = 0), rt(t, e.P), (n = e.P.L)),
                        1 === n.R.C && 1 === n.L.C
                          ? ((n.C = 0), (e = e.P))
                          : (1 === n.L.C &&
                              ((n.R.C = 1), (n.C = 0), nt(t, n), (n = e.P.L)),
                            (n.C = e.P.C),
                            (e.P.C = 1),
                            (n.L.C = 1),
                            rt(t, e.P),
                            (e = t.root)))
                  e.C = 1
                })(t, o),
              t.size--
          }
        }
      },
      search: function (e, n, r) {
        for (var i = [t.root]; 0 !== i.length; ) {
          var o = i.pop()
          if (
            o !== de &&
            e <= o.max &&
            (o.L !== de && i.push(o.L),
            o.R !== de && i.push(o.R),
            o.low <= n && o.high >= e)
          )
            for (var u = o.list; null !== u; )
              u.high < e || r(u.index, o.low), (u = u.next)
        }
      },
      get size() {
        return t.size
      },
    }
  }
  function ut(t, n) {
    var r = t.width,
      i = t.columnWidth,
      o = void 0 === i ? 200 : i,
      u = t.columnGutter,
      s = void 0 === u ? 0 : u,
      c = t.columnCount
    void 0 === n && (n = pe)
    var a = function () {
        var t = ve(r, o, s, c),
          e = t[0],
          n = t[1]
        return he(n, e, s)
      },
      f = e.useRef()
    void 0 === f.current && (f.current = a())
    var d = e.useRef(n),
      h = [r, o, s, c],
      l = e.useRef(h),
      v = !h.every(function (t, e) {
        return l.current[e] === t
      })
    if (
      v ||
      !n.every(function (t, e) {
        return d.current[e] === t
      })
    ) {
      var p = f.current,
        m = a()
      if (((d.current = n), (l.current = h), v))
        for (var g = p.size(), y = 0; g > y; y++) {
          var b = p.get(y)
          m.set(y, void 0 !== b ? b.height : 0)
        }
      f.current = m
    }
    return f.current
  }
  function st(t, n) {
    var r,
      i,
      u,
      s,
      c = n.align,
      a = void 0 === c ? 'top' : c,
      f = n.element,
      d = void 0 === f ? 'undefined' != typeof window && window : f,
      h = n.offset,
      l = void 0 === h ? 0 : h,
      v = n.height,
      p =
        void 0 === v
          ? 'undefined' != typeof window
            ? window.innerHeight
            : 0
          : v,
      m = It({positioner: t, element: d, align: a, offset: l, height: p}),
      g = e.useRef(function () {
        var t = m.current.element
        return t && 'current' in t ? t.current : t
      }).current,
      y = e.useReducer(function (t, e) {
        var n,
          r = {position: t.position, index: t.index, prevTop: t.prevTop}
        if ('scrollToIndex' === e.type)
          return {
            position: m.current.positioner.get(
              null !== (n = e.value) && void 0 !== n ? n : -1
            ),
            index: e.value,
            prevTop: void 0,
          }
        if ('setPosition' === e.type) r.position = e.value
        else if ('setPrevTop' === e.type) r.prevTop = e.value
        else if ('reset' === e.type) return ge
        return r
      }, ge),
      b = y[0],
      w = y[1],
      _ = o(w, 15)
    ;(i = g()),
      (u = me(function () {
        if (!b.position && b.index) {
          var t = m.current.positioner.get(b.index)
          t && w({type: 'setPosition', value: t})
        }
      })),
      (s = me(void 0)),
      ft(
        function () {
          function t() {
            if (!n) {
              for (
                var t = arguments.length, e = new Array(t), r = 0;
                t > r;
                r++
              )
                e[r] = arguments[r]
              u.current.apply(this, e)
            }
          }
          var e = i && 'current' in i ? i.current : i
          if (e) {
            var n = 0
            e.addEventListener('scroll', t)
            var r = s.current
            return function () {
              ;(n = 1), e.removeEventListener('scroll', t), r && r()
            }
          }
        },
        [i, 'scroll']
      )
    var P =
      void 0 !== b.index &&
      (null === (r = m.current.positioner.get(b.index)) || void 0 === r
        ? void 0
        : r.top)
    return (
      e.useEffect(
        function () {
          var t = g()
          if (t) {
            var e = m.current,
              n = e.height,
              r = e.align,
              i = e.offset,
              o = e.positioner
            if (b.position) {
              var u = b.position.top
              'bottom' === r
                ? (u = u - n + b.position.height)
                : 'center' === r && (u -= (n - b.position.height) / 2),
                t.scrollTo(0, Math.max(0, (u += i)))
              var s = 0,
                c = setTimeout(function () {
                  return !s && w({type: 'reset'})
                }, 400)
              return function () {
                ;(s = 1), clearTimeout(c)
              }
            }
            if (void 0 !== b.index) {
              var a = (o.shortestColumn() / o.size()) * b.index
              b.prevTop && (a = Math.max(a, b.prevTop + n)),
                t.scrollTo(0, a),
                _({type: 'setPrevTop', value: a})
            }
          }
        },
        [P, b, m, g, _]
      ),
      e.useRef(function (t) {
        w({type: 'scrollToIndex', value: t})
      }).current
    )
  }
  function ct(t) {
    var i = e.useRef(null),
      o = (function (t) {
        void 0 === t && (t = ht)
        var n = t,
          i = n.wait,
          o = n.leading,
          u = n.initialWidth,
          s = void 0 === u ? 0 : u,
          c = n.initialHeight,
          a = (function (t, n, r) {
            var i = e.useState(t)
            return [i[0], at(i[1], n, r)]
          })(
            'undefined' == typeof document ? [s, void 0 === c ? 0 : c] : vt,
            i,
            o
          ),
          f = a[0],
          d = a[1],
          h = function () {
            return d(vt)
          }
        return r(lt, 'resize', h), r(lt, 'orientationchange', h), f
      })({initialWidth: t.ssrWidth, initialHeight: t.ssrHeight}),
      u = h(i, o),
      s = n(
        {
          offset: u.offset,
          width: u.width || o[0],
          height: o[1],
          containerRef: i,
        },
        t
      )
    ;(s.positioner = ut(s)), (s.resizeObserver = $(s.positioner))
    var c = st(s.positioner, {
        height: s.height,
        offset: u.offset,
        align:
          'object' == typeof t.scrollToIndex ? t.scrollToIndex.align : void 0,
      }),
      a =
        t.scrollToIndex &&
        ('number' == typeof t.scrollToIndex
          ? t.scrollToIndex
          : t.scrollToIndex.index)
    return (
      e.useEffect(
        function () {
          void 0 !== a && c(a)
        },
        [a, c]
      ),
      ye(d, s)
    )
  }
  var at = function (t, n, r) {
      function i() {
        a.current && clearTimeout(a.current), (a.current = void 0)
      }
      function o() {
        a.current = void 0
      }
      void 0 === n && (n = 100), void 0 === r && (r = 0)
      var u,
        s,
        c = ((u = t), ((s = e.useRef(u)).current = u), s),
        a = e.useRef(),
        f = [n, r, c]
      return (
        e.useEffect(function () {
          return i
        }, f),
        e.useCallback(function () {
          var t = arguments,
            e = a.current
          if (void 0 === e && r)
            return (a.current = setTimeout(o, n)), c.current.apply(null, t)
          e && clearTimeout(e),
            (a.current = setTimeout(function () {
              ;(a.current = void 0), c.current.apply(null, t)
            }, n))
        }, f)
      )
    },
    ft =
      e[
        'undefined' != typeof document && void 0 !== document.createElement
          ? 'useLayoutEffect'
          : 'useEffect'
      ],
    dt = function (t) {
      var n = e.useRef(t)
      return (n.current = t), n
    },
    ht = {},
    lt = 'undefined' == typeof window ? null : window,
    vt = function () {
      return [
        document.documentElement.clientWidth,
        document.documentElement.clientHeight,
      ]
    },
    pt = 'undefined' != typeof performance ? performance : Date,
    mt = function () {
      return pt.now()
    },
    gt = function (t) {
      var n = e.useRef(t)
      return (n.current = t), n
    },
    yt = 'undefined' == typeof window ? null : window,
    bt = function () {
      return void 0 !== yt.scrollY
        ? yt.scrollY
        : void 0 === yt.pageYOffset
        ? 0
        : yt.pageYOffset
    },
    wt = 'undefined',
    _t = typeof window !== wt ? window : {},
    Pt = typeof performance !== wt ? performance : Date,
    xt = function () {
      return Pt.now()
    },
    Rt = 'AnimationFrame',
    Et = 'cancel' + Rt,
    Ct = 'request' + Rt,
    Mt = _t[Ct] && _t[Ct].bind(_t),
    Lt = _t[Et] && _t[Et].bind(_t)
  if (!Mt || !Lt) {
    var Tt = 0
    ;(Mt = function (t) {
      var e = xt(),
        n = Math.max(Tt + 1e3 / 60, e)
      return setTimeout(function () {
        t((Tt = n))
      }, n - e)
    }),
      (Lt = function (t) {
        return clearTimeout(t)
      })
  }
  var Ot = function (t) {
      try {
        return new t()
      } catch (t) {
        var e = {}
        return {
          set: function (t, n) {
            e[t] = n
          },
          get: function (t) {
            return e[t]
          },
        }
      }
    },
    zt = function (t, e) {
      var n,
        r,
        i,
        o,
        u,
        s,
        c,
        a,
        f,
        d =
          ((c = (r = t).length),
          (a = Ot(r[0])),
          (f = 1 === c),
          3 > c
            ? {
                g: function (t) {
                  return void 0 === (i = a.get(t[0])) || f ? i : i.get(t[1])
                },
                s: function (t, e) {
                  return (
                    f
                      ? a.set(t[0], e)
                      : void 0 === (i = a.get(t[0]))
                      ? ((o = Ot(r[1])).set(t[1], e), a.set(t[0], o))
                      : i.set(t[1], e),
                    e
                  )
                },
              }
            : {
                g: function (t) {
                  for (s = a, u = 0; c > u; u++)
                    if (void 0 === (s = s.get(t[u]))) return
                  return s
                },
                s: function (t, e) {
                  for (s = a, u = 0; c - 1 > u; u++)
                    void 0 === (o = s.get(t[u]))
                      ? ((o = Ot(r[u + 1])), s.set(t[u], o), (s = o))
                      : (s = o)
                  return s.set(t[c - 1], e), e
                },
              }),
        h = d.g,
        l = d.s
      return function () {
        return void 0 === (n = h(arguments))
          ? l(arguments, e.apply(null, arguments))
          : n
      }
    },
    At = function () {
      var t, e
      ;(this.set = void 0),
        (this.get = void 0),
        (this.get = function (n) {
          return n === t ? e : void 0
        }),
        (this.set = function (n, r) {
          ;(t = n), (e = r)
        })
    },
    St = function (t, e) {
      var n,
        r,
        i = e || kt
      return function () {
        return n && i(arguments, n) ? r : (r = t.apply(null, (n = arguments)))
      }
    },
    kt = function (t, e) {
      return t[0] === e[0] && t[1] === e[1] && t[2] === e[2] && t[3] === e[3]
    },
    It = function (t) {
      var n = e.useRef(t)
      return (
        e.useEffect(function () {
          n.current = t
        }),
        n
      )
    },
    Wt = new WeakMap(),
    Ht = {},
    jt = e.createElement,
    Dt = '0',
    qt = zt([At, {}, WeakMap, At], function (t, e, n, r) {
      return jt(t, {index: e, data: n, width: r})
    }),
    Bt = St(function (t, e) {
      return {
        position: 'relative',
        width: '100%',
        maxWidth: '100%',
        height: Math.ceil(e),
        maxHeight: Math.ceil(e),
        willChange: t ? 'contents' : void 0,
        pointerEvents: t ? 'none' : void 0,
      }
    }),
    Ft = function (t, e) {
      return t[0] === e[0] && t[1] === e[1]
    },
    Gt = St(function (t, e) {
      return n({}, t, e)
    }, Ft),
    Nt = St(
      function (t) {
        return {
          width: t,
          zIndex: -1e3,
          visibility: 'hidden',
          position: 'absolute',
          writingMode: 'horizontal-tb',
        }
      },
      function (t, e) {
        return t[0] === e[0]
      }
    ),
    Vt = St(function (t, e) {
      return function (n) {
        return function (r) {
          null !== r &&
            (e && (e.observe(r), Wt.set(r, n)),
            void 0 === t.get(n) && t.set(n, r.offsetHeight))
        }
      }
    }, Ft),
    Yt = [],
    Kt = (function () {
      return 'undefined' != typeof Map
        ? Map
        : (Object.defineProperty(v.prototype, 'size', {
            get: p,
            enumerable: 1,
            configurable: 1,
          }),
          (v.prototype.get = m),
          (v.prototype.set = g),
          (v.prototype.delete = y),
          (v.prototype.has = b),
          (v.prototype.clear = w),
          (v.prototype.forEach = _),
          v)
    })(),
    Jt =
      'undefined' != typeof window &&
      'undefined' != typeof document &&
      window.document === document,
    Qt = (function () {
      return 'undefined' != typeof global && global.Math === Math
        ? global
        : 'undefined' != typeof self && self.Math === Math
        ? self
        : 'undefined' != typeof window && window.Math === Math
        ? window
        : Function('return this')()
    })(),
    Ut = (function () {
      return 'function' == typeof requestAnimationFrame
        ? requestAnimationFrame.bind(Qt)
        : P
    })(),
    Xt = [
      'top',
      'right',
      'bottom',
      'left',
      'width',
      'height',
      'size',
      'weight',
    ],
    Zt = 'undefined' != typeof MutationObserver,
    $t = (function () {
      return (
        (x.prototype.addObserver = R),
        (x.prototype.removeObserver = E),
        (x.prototype.refresh = C),
        (x.prototype.updateObservers_ = T),
        (x.prototype.connect_ = O),
        (x.prototype.disconnect_ = z),
        (x.prototype.onTransitionEnd_ = A),
        (x.getInstance = S),
        (x.instance_ = null),
        x
      )
    })(),
    te = function (t, e) {
      for (var n = 0, r = Object.keys(e); n < r.length; n++) {
        var i = r[n]
        Object.defineProperty(t, i, {
          value: e[i],
          enumerable: 0,
          writable: 0,
          configurable: 1,
        })
      }
      return t
    },
    ee = function (t) {
      return (t && t.ownerDocument && t.ownerDocument.defaultView) || Qt
    },
    ne = D(0, 0, 0, 0),
    re = (function () {
      return 'undefined' != typeof SVGGraphicsElement ? W : H
    })(),
    ie = (function () {
      return (q.prototype.isActive = B), (q.prototype.broadcastRect = F), q
    })(),
    oe = (function () {
      return G
    })(),
    ue = (function () {
      return (
        (N.prototype.observe = V),
        (N.prototype.unobserve = Y),
        (N.prototype.disconnect = K),
        (N.prototype.gatherActive = J),
        (N.prototype.broadcastActive = U),
        (N.prototype.clearActive = X),
        (N.prototype.hasActive = Z),
        N
      )
    })(),
    se = 'undefined' != typeof WeakMap ? new WeakMap() : new Kt(),
    ce = (function () {
      return function t(e) {
        if (!(this instanceof t))
          throw new TypeError('Cannot call a class as a function.')
        if (!arguments.length)
          throw new TypeError('1 argument required, but only 0 present.')
        var n = $t.getInstance(),
          r = new ue(e, n, this)
        se.set(this, r)
      }
    })()
  ;['observe', 'unobserve', 'disconnect'].forEach(function (t) {
    ce.prototype[t] = function () {
      var e
      return (e = se.get(this))[t].apply(e, arguments)
    }
  })
  var ae = (function () {
      return void 0 !== Qt.ResizeObserver ? Qt.ResizeObserver : ce
    })(),
    fe = zt([WeakMap], function (t, e) {
      var n = (function (t) {
          function e() {
            ;(r = null), t.apply(void 0, n)
          }
          var n = [],
            r = null,
            i = function () {
              for (
                var t = arguments.length, i = new Array(t), o = 0;
                t > o;
                o++
              )
                i[o] = arguments[o]
              ;(n = i), r || (r = requestAnimationFrame(e))
            }
          return (
            (i.cancel = function () {
              r && (cancelAnimationFrame(r), (r = null))
            }),
            i
          )
        })(function (n) {
          for (var r = [], i = 0; i < n.length; i++) {
            var o = n[i],
              u = o.target.offsetHeight
            if (u > 0) {
              var s = Wt.get(o.target)
              if (void 0 !== s) {
                var c = t.get(s)
                void 0 !== c && u !== c.height && r.push(s, u)
              }
            }
          }
          r.length > 0 && (t.update(r), e(r))
        }),
        r = new ae(n),
        i = r.disconnect.bind(r)
      return (
        (r.disconnect = function () {
          i(), n.cancel()
        }),
        r
      )
    }),
    de = {
      low: 0,
      max: 0,
      high: 0,
      C: 2,
      P: void 0,
      R: void 0,
      L: void 0,
      list: void 0,
    }
  ;(de.P = de), (de.L = de), (de.R = de)
  var he = function (t, e, n) {
      void 0 === n && (n = 0)
      for (
        var r = ot(), i = new Array(t), o = [], u = new Array(t), s = 0;
        t > s;
        s++
      )
        (i[s] = 0), (u[s] = [])
      return {
        columnCount: t,
        columnWidth: e,
        set: function (t, s) {
          void 0 === s && (s = 0)
          for (var c = 0, a = 1; a < i.length; a++) i[a] < i[c] && (c = a)
          var f = i[c] || 0
          ;(i[c] = f + s + n),
            u[c].push(t),
            (o[t] = {left: c * (e + n), top: f, height: s, column: c}),
            r.insert(f, f + s, t)
        },
        get: function (t) {
          return o[t]
        },
        update: function (e) {
          for (var s = new Array(t), c = 0, a = 0; c < e.length - 1; c++) {
            var f = e[c],
              d = o[f]
            ;(d.height = e[++c]),
              r.remove(f),
              r.insert(d.top, d.top + d.height, f),
              (s[d.column] =
                void 0 === s[d.column] ? f : Math.min(f, s[d.column]))
          }
          for (c = 0; c < s.length; c++)
            if (void 0 !== s[c]) {
              var h = u[c],
                l = le(h, s[c]),
                v = u[c][l],
                p = o[v]
              for (i[c] = p.top + p.height + n, a = l + 1; a < h.length; a++) {
                var m = h[a],
                  g = o[m]
                ;(g.top = i[c]),
                  (i[c] = g.top + g.height + n),
                  r.remove(m),
                  r.insert(g.top, g.top + g.height, m)
              }
            }
        },
        range: function (t, e, n) {
          return r.search(t, e, function (t, e) {
            return n(t, o[t].left, e)
          })
        },
        estimateHeight: function (e, n) {
          var o = Math.max(0, Math.max.apply(null, i))
          return e === r.size ? o : o + Math.ceil((e - r.size) / t) * n
        },
        shortestColumn: function () {
          return i.length > 1 ? Math.min.apply(null, i) : i[0] || 0
        },
        size: function () {
          return r.size
        },
      }
    },
    le = function (t, e) {
      for (var n = 0, r = t.length - 1; r >= n; ) {
        var i = (n + r) >>> 1,
          o = t[i]
        if (o === e) return i
        o > e ? (r = i - 1) : (n = i + 1)
      }
      return -1
    },
    ve = function (t, e, n, r) {
      return (
        void 0 === t && (t = 0),
        void 0 === e && (e = 0),
        void 0 === n && (n = 8),
        (r = r || Math.floor(t / (e + n)) || 1),
        [Math.floor((t - n * (r - 1)) / r), r]
      )
    },
    pe = [],
    me = function (t) {
      var n = e.useRef(t)
      return (n.current = t), n
    },
    ge = {index: void 0, position: void 0, prevTop: void 0},
    ye = e.createElement,
    be = e.createElement,
    we = function (t, e) {
      return void 0 !== e[t]
    },
    _e = {}
  ;(t.List = function (t) {
    return be(
      ct,
      n(
        {
          role: 'list',
          columnGutter: t.rowGutter,
          columnCount: 1,
          columnWidth: 1,
        },
        t
      )
    )
  }),
    (t.Masonry = ct),
    (t.MasonryScroller = d),
    (t.createIntervalTree = ot),
    (t.createPositioner = he),
    (t.createResizeObserver = fe),
    (t.useContainerPosition = h),
    (t.useInfiniteLoader = function (t, n) {
      void 0 === n && (n = _e)
      var r = n,
        i = r.isItemLoaded,
        o = r.minimumBatchSize,
        u = void 0 === o ? 16 : o,
        s = r.threshold,
        c = void 0 === s ? 16 : s,
        a = r.totalItems,
        f = void 0 === a ? 9e9 : a,
        d = It(t),
        h = It(i)
      return e.useCallback(
        function (t, e, n) {
          for (
            var r = (function (t, e, n, r, i, o) {
                void 0 === t && (t = we),
                  void 0 === e && (e = 16),
                  void 0 === r && (r = 9e9)
                for (var u, s, c = [], a = i; o >= a; a++)
                  t(a, n)
                    ? void 0 !== u &&
                      void 0 !== s &&
                      (c.push(u, s), (u = s = void 0))
                    : ((s = a), void 0 === u && (u = a))
                if (void 0 !== u && void 0 !== s) {
                  var f = Math.min(Math.max(s, u + e - 1), r - 1)
                  for (a = s + 1; f >= a && !t(a, n); a++) s = a
                  c.push(u, s)
                }
                if (c.length)
                  for (var d = c[0], h = c[1]; e > h - d + 1 && d > 0; ) {
                    var l = d - 1
                    if (t(l, n)) break
                    c[0] = d = l
                  }
                return c
              })(
                h.current,
                u,
                n,
                f,
                Math.max(0, t - c),
                Math.min(f - 1, (e || 0) + c)
              ),
              i = 0;
            i < r.length - 1;
            ++i
          )
            d.current(r[i], r[++i], n)
        },
        [f, u, c, d, h]
      )
    }),
    (t.useMasonry = a),
    (t.usePositioner = ut),
    (t.useResizeObserver = $),
    (t.useScrollToIndex = st),
    (t.useScroller = s),
    Object.defineProperty(t, '__esModule', {value: 1})
})
//# sourceMappingURL=masonic.js.map
