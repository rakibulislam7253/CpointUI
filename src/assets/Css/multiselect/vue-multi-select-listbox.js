/*! For license information please see vue-multi-select-listbox.js.LICENSE.txt */
!(function (t, e) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = e())
    : "function" == typeof define && define.amd
    ? define([], e)
    : "object" == typeof exports
    ? (exports.VueMultiSelectListbox = e())
    : (t.VueMultiSelectListbox = e());
})("undefined" != typeof self ? self : this, function () {
  return (function (t) {
    var e = {};
    function n(r) {
      if (e[r]) return e[r].exports;
      var i = (e[r] = { i: r, l: !1, exports: {} });
      return t[r].call(i.exports, i, i.exports, n), (i.l = !0), i.exports;
    }
    return (
      (n.m = t),
      (n.c = e),
      (n.d = function (t, e, r) {
        n.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: r });
      }),
      (n.r = function (t) {
        "undefined" != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(t, "__esModule", { value: !0 });
      }),
      (n.t = function (t, e) {
        if ((1 & e && (t = n(t)), 8 & e)) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var r = Object.create(null);
        if (
          (n.r(r),
          Object.defineProperty(r, "default", { enumerable: !0, value: t }),
          2 & e && "string" != typeof t)
        )
          for (var i in t)
            n.d(
              r,
              i,
              function (e) {
                return t[e];
              }.bind(null, i)
            );
        return r;
      }),
      (n.n = function (t) {
        var e =
          t && t.__esModule
            ? function () {
                return t.default;
              }
            : function () {
                return t;
              };
        return n.d(e, "a", e), e;
      }),
      (n.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e);
      }),
      (n.p = "/"),
      n((n.s = 18))
    );
  })([
    function (t, e, n) {
      var r = n(10),
        i = n(11),
        o = n(12),
        a = n(13);
      (t.exports = function (t) {
        return r(t) || i(t) || o(t) || a();
      }),
        (t.exports.__esModule = !0),
        (t.exports.default = t.exports);
    },
    function (t, e, n) {
      "use strict";
      (function (t, r) {
        function i(t) {
          return (i =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                })(t);
        }
        function o(t, e) {
          for (var n = 0; n < e.length; n++) {
            var r = e[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(t, r.key, r);
          }
        }
        function a(t, e, n) {
          return (
            e in t
              ? Object.defineProperty(t, e, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (t[e] = n),
            t
          );
        }
        function s(t) {
          for (var e = 1; e < arguments.length; e++) {
            var n = null != arguments[e] ? arguments[e] : {},
              r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols &&
              (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (t) {
                  return Object.getOwnPropertyDescriptor(n, t).enumerable;
                })
              )),
              r.forEach(function (e) {
                a(t, e, n[e]);
              });
          }
          return t;
        }
        function l(t, e) {
          return (
            (function (t) {
              if (Array.isArray(t)) return t;
            })(t) ||
            (function (t, e) {
              var n = [],
                r = !0,
                i = !1,
                o = void 0;
              try {
                for (
                  var a, s = t[Symbol.iterator]();
                  !(r = (a = s.next()).done) &&
                  (n.push(a.value), !e || n.length !== e);
                  r = !0
                );
              } catch (t) {
                (i = !0), (o = t);
              } finally {
                try {
                  r || null == s.return || s.return();
                } finally {
                  if (i) throw o;
                }
              }
              return n;
            })(t, e) ||
            (function () {
              throw new TypeError(
                "Invalid attempt to destructure non-iterable instance"
              );
            })()
          );
        }
        function c(t) {
          return (
            (function (t) {
              if (Array.isArray(t)) {
                for (var e = 0, n = new Array(t.length); e < t.length; e++)
                  n[e] = t[e];
                return n;
              }
            })(t) ||
            (function (t) {
              if (
                Symbol.iterator in Object(t) ||
                "[object Arguments]" === Object.prototype.toString.call(t)
              )
                return Array.from(t);
            })(t) ||
            (function () {
              throw new TypeError(
                "Invalid attempt to spread non-iterable instance"
              );
            })()
          );
        }
        n.d(e, "b", function () {
          return At;
        }),
          n.d(e, "a", function () {
            return S;
          }),
          n.d(e, "e", function () {
            return Ct;
          }),
          n.d(e, "c", function () {
            return kt;
          }),
          n.d(e, "d", function () {
            return Tt;
          });
        var u = function () {},
          f = {},
          d = {},
          p = { mark: u, measure: u };
        try {
          "undefined" != typeof window && (f = window),
            "undefined" != typeof document && (d = document),
            "undefined" != typeof MutationObserver && MutationObserver,
            "undefined" != typeof performance && (p = performance);
        } catch (t) {}
        var m = (f.navigator || {}).userAgent,
          h = void 0 === m ? "" : m,
          y = f,
          g = d,
          v = p,
          b =
            (y.document,
            !!g.documentElement &&
              !!g.head &&
              "function" == typeof g.addEventListener &&
              "function" == typeof g.createElement),
          w = ~h.indexOf("MSIE") || ~h.indexOf("Trident/"),
          _ =
            ((function () {
              try {
              } catch (t) {
                return !1;
              }
            })(),
            [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),
          x = _.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]),
          O = {
            GROUP: "group",
            SWAP_OPACITY: "swap-opacity",
            PRIMARY: "primary",
            SECONDARY: "secondary",
          },
          I =
            ([
              "xs",
              "sm",
              "lg",
              "fw",
              "ul",
              "li",
              "border",
              "pull-left",
              "pull-right",
              "spin",
              "pulse",
              "rotate-90",
              "rotate-180",
              "rotate-270",
              "flip-horizontal",
              "flip-vertical",
              "flip-both",
              "stack",
              "stack-1x",
              "stack-2x",
              "inverse",
              "layers",
              "layers-text",
              "layers-counter",
              O.GROUP,
              O.SWAP_OPACITY,
              O.PRIMARY,
              O.SECONDARY,
            ]
              .concat(
                _.map(function (t) {
                  return "".concat(t, "x");
                })
              )
              .concat(
                x.map(function (t) {
                  return "w-".concat(t);
                })
              ),
            y.FontAwesomeConfig || {});
        if (g && "function" == typeof g.querySelector) {
          [
            ["data-family-prefix", "familyPrefix"],
            ["data-replacement-class", "replacementClass"],
            ["data-auto-replace-svg", "autoReplaceSvg"],
            ["data-auto-add-css", "autoAddCss"],
            ["data-auto-a11y", "autoA11y"],
            ["data-search-pseudo-elements", "searchPseudoElements"],
            ["data-observe-mutations", "observeMutations"],
            ["data-mutate-approach", "mutateApproach"],
            ["data-keep-original-source", "keepOriginalSource"],
            ["data-measure-performance", "measurePerformance"],
            ["data-show-missing-icons", "showMissingIcons"],
          ].forEach(function (t) {
            var e = l(t, 2),
              n = e[0],
              r = e[1],
              i = (function (t) {
                return "" === t || ("false" !== t && ("true" === t || t));
              })(
                (function (t) {
                  var e = g.querySelector("script[" + t + "]");
                  if (e) return e.getAttribute(t);
                })(n)
              );
            null != i && (I[r] = i);
          });
        }
        var k = s(
          {},
          {
            familyPrefix: "fa",
            replacementClass: "svg-inline--fa",
            autoReplaceSvg: !0,
            autoAddCss: !0,
            autoA11y: !0,
            searchPseudoElements: !1,
            observeMutations: !0,
            mutateApproach: "async",
            keepOriginalSource: !0,
            measurePerformance: !1,
            showMissingIcons: !0,
          },
          I
        );
        k.autoReplaceSvg || (k.observeMutations = !1);
        var S = s({}, k);
        y.FontAwesomeConfig = S;
        var T = y || {};
        T.___FONT_AWESOME___ || (T.___FONT_AWESOME___ = {}),
          T.___FONT_AWESOME___.styles || (T.___FONT_AWESOME___.styles = {}),
          T.___FONT_AWESOME___.hooks || (T.___FONT_AWESOME___.hooks = {}),
          T.___FONT_AWESOME___.shims || (T.___FONT_AWESOME___.shims = []);
        var A = T.___FONT_AWESOME___,
          C = [];
        b &&
          ((g.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(
            g.readyState
          ) ||
            g.addEventListener("DOMContentLoaded", function t() {
              g.removeEventListener("DOMContentLoaded", t),
                1,
                C.map(function (t) {
                  return t();
                });
            }));
        var P,
          j = function () {},
          M =
            void 0 !== t &&
            void 0 !== t.process &&
            "function" == typeof t.process.emit,
          E = void 0 === r ? setTimeout : r,
          z = [];
        function N() {
          for (var t = 0; t < z.length; t++) z[t][0](z[t][1]);
          (z = []), (P = !1);
        }
        function L(t, e) {
          z.push([t, e]), P || ((P = !0), E(N, 0));
        }
        function R(t) {
          var e = t.owner,
            n = e._state,
            r = e._data,
            i = t[n],
            o = t.then;
          if ("function" == typeof i) {
            n = "fulfilled";
            try {
              r = i(r);
            } catch (t) {
              B(o, t);
            }
          }
          F(o, r) ||
            ("fulfilled" === n && D(o, r), "rejected" === n && B(o, r));
        }
        function F(t, e) {
          var n;
          try {
            if (t === e)
              throw new TypeError(
                "A promises callback cannot return that same promise."
              );
            if (e && ("function" == typeof e || "object" === i(e))) {
              var r = e.then;
              if ("function" == typeof r)
                return (
                  r.call(
                    e,
                    function (r) {
                      n || ((n = !0), e === r ? V(t, r) : D(t, r));
                    },
                    function (e) {
                      n || ((n = !0), B(t, e));
                    }
                  ),
                  !0
                );
            }
          } catch (e) {
            return n || B(t, e), !0;
          }
          return !1;
        }
        function D(t, e) {
          (t !== e && F(t, e)) || V(t, e);
        }
        function V(t, e) {
          "pending" === t._state &&
            ((t._state = "settled"), (t._data = e), L(W, t));
        }
        function B(t, e) {
          "pending" === t._state &&
            ((t._state = "settled"), (t._data = e), L(U, t));
        }
        function $(t) {
          t._then = t._then.forEach(R);
        }
        function W(t) {
          (t._state = "fulfilled"), $(t);
        }
        function U(e) {
          (e._state = "rejected"),
            $(e),
            !e._handled &&
              M &&
              t.process.emit("unhandledRejection", e._data, e);
        }
        function Y(e) {
          t.process.emit("rejectionHandled", e);
        }
        function X(t) {
          if ("function" != typeof t)
            throw new TypeError("Promise resolver " + t + " is not a function");
          if (this instanceof X == !1)
            throw new TypeError(
              "Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function."
            );
          (this._then = []),
            (function (t, e) {
              function n(t) {
                B(e, t);
              }
              try {
                t(function (t) {
                  D(e, t);
                }, n);
              } catch (t) {
                n(t);
              }
            })(t, this);
        }
        (X.prototype = {
          constructor: X,
          _state: "pending",
          _then: null,
          _data: void 0,
          _handled: !1,
          then: function (t, e) {
            var n = {
              owner: this,
              then: new this.constructor(j),
              fulfilled: t,
              rejected: e,
            };
            return (
              (!e && !t) ||
                this._handled ||
                ((this._handled = !0),
                "rejected" === this._state && M && L(Y, this)),
              "fulfilled" === this._state || "rejected" === this._state
                ? L(R, n)
                : this._then.push(n),
              n.then
            );
          },
          catch: function (t) {
            return this.then(null, t);
          },
        }),
          (X.all = function (t) {
            if (!Array.isArray(t))
              throw new TypeError("You must pass an array to Promise.all().");
            return new X(function (e, n) {
              var r = [],
                i = 0;
              function o(t) {
                return (
                  i++,
                  function (n) {
                    (r[t] = n), --i || e(r);
                  }
                );
              }
              for (var a, s = 0; s < t.length; s++)
                (a = t[s]) && "function" == typeof a.then
                  ? a.then(o(s), n)
                  : (r[s] = a);
              i || e(r);
            });
          }),
          (X.race = function (t) {
            if (!Array.isArray(t))
              throw new TypeError("You must pass an array to Promise.race().");
            return new X(function (e, n) {
              for (var r, i = 0; i < t.length; i++)
                (r = t[i]) && "function" == typeof r.then ? r.then(e, n) : e(r);
            });
          }),
          (X.resolve = function (t) {
            return t && "object" === i(t) && t.constructor === X
              ? t
              : new X(function (e) {
                  e(t);
                });
          }),
          (X.reject = function (t) {
            return new X(function (e, n) {
              n(t);
            });
          });
        var G = 16,
          H = { size: 16, x: 0, y: 0, rotate: 0, flipX: !1, flipY: !1 };
        function K(t) {
          if (t && b) {
            var e = g.createElement("style");
            e.setAttribute("type", "text/css"), (e.innerHTML = t);
            for (
              var n = g.head.childNodes, r = null, i = n.length - 1;
              i > -1;
              i--
            ) {
              var o = n[i],
                a = (o.tagName || "").toUpperCase();
              ["STYLE", "LINK"].indexOf(a) > -1 && (r = o);
            }
            return g.head.insertBefore(e, r), t;
          }
        }
        function q() {
          for (var t = 12, e = ""; t-- > 0; )
            e +=
              "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"[
                (62 * Math.random()) | 0
              ];
          return e;
        }
        function Z(t) {
          return ""
            .concat(t)
            .replace(/&/g, "&amp;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#39;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;");
        }
        function J(t) {
          return Object.keys(t || {}).reduce(function (e, n) {
            return e + "".concat(n, ": ").concat(t[n], ";");
          }, "");
        }
        function Q(t) {
          return (
            t.size !== H.size ||
            t.x !== H.x ||
            t.y !== H.y ||
            t.rotate !== H.rotate ||
            t.flipX ||
            t.flipY
          );
        }
        function tt(t) {
          var e = t.transform,
            n = t.containerWidth,
            r = t.iconWidth,
            i = { transform: "translate(".concat(n / 2, " 256)") },
            o = "translate(".concat(32 * e.x, ", ").concat(32 * e.y, ") "),
            a = "scale("
              .concat((e.size / 16) * (e.flipX ? -1 : 1), ", ")
              .concat((e.size / 16) * (e.flipY ? -1 : 1), ") "),
            s = "rotate(".concat(e.rotate, " 0 0)");
          return {
            outer: i,
            inner: { transform: "".concat(o, " ").concat(a, " ").concat(s) },
            path: { transform: "translate(".concat((r / 2) * -1, " -256)") },
          };
        }
        var et = { x: 0, y: 0, width: "100%", height: "100%" };
        function nt(t) {
          var e =
            !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          return (
            t.attributes &&
              (t.attributes.fill || e) &&
              (t.attributes.fill = "black"),
            t
          );
        }
        function rt(t) {
          var e = t.icons,
            n = e.main,
            r = e.mask,
            i = t.prefix,
            o = t.iconName,
            a = t.transform,
            l = t.symbol,
            c = t.title,
            u = t.maskId,
            f = t.titleId,
            d = t.extra,
            p = t.watchable,
            m = void 0 !== p && p,
            h = r.found ? r : n,
            y = h.width,
            g = h.height,
            v = "fak" === i,
            b = v ? "" : "fa-w-".concat(Math.ceil((y / g) * 16)),
            w = [
              S.replacementClass,
              o ? "".concat(S.familyPrefix, "-").concat(o) : "",
              b,
            ]
              .filter(function (t) {
                return -1 === d.classes.indexOf(t);
              })
              .filter(function (t) {
                return "" !== t || !!t;
              })
              .concat(d.classes)
              .join(" "),
            _ = {
              children: [],
              attributes: s({}, d.attributes, {
                "data-prefix": i,
                "data-icon": o,
                class: w,
                role: d.attributes.role || "img",
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 ".concat(y, " ").concat(g),
              }),
            },
            x =
              v && !~d.classes.indexOf("fa-fw")
                ? { width: "".concat((y / g) * 16 * 0.0625, "em") }
                : {};
          m && (_.attributes["data-fa-i2svg"] = ""),
            c &&
              _.children.push({
                tag: "title",
                attributes: {
                  id:
                    _.attributes["aria-labelledby"] ||
                    "title-".concat(f || q()),
                },
                children: [c],
              });
          var O = s({}, _, {
              prefix: i,
              iconName: o,
              main: n,
              mask: r,
              maskId: u,
              transform: a,
              symbol: l,
              styles: s({}, x, d.styles),
            }),
            I =
              r.found && n.found
                ? (function (t) {
                    var e,
                      n = t.children,
                      r = t.attributes,
                      i = t.main,
                      o = t.mask,
                      a = t.maskId,
                      l = t.transform,
                      c = i.width,
                      u = i.icon,
                      f = o.width,
                      d = o.icon,
                      p = tt({ transform: l, containerWidth: f, iconWidth: c }),
                      m = {
                        tag: "rect",
                        attributes: s({}, et, { fill: "white" }),
                      },
                      h = u.children ? { children: u.children.map(nt) } : {},
                      y = {
                        tag: "g",
                        attributes: s({}, p.inner),
                        children: [
                          nt(
                            s(
                              {
                                tag: u.tag,
                                attributes: s({}, u.attributes, p.path),
                              },
                              h
                            )
                          ),
                        ],
                      },
                      g = {
                        tag: "g",
                        attributes: s({}, p.outer),
                        children: [y],
                      },
                      v = "mask-".concat(a || q()),
                      b = "clip-".concat(a || q()),
                      w = {
                        tag: "mask",
                        attributes: s({}, et, {
                          id: v,
                          maskUnits: "userSpaceOnUse",
                          maskContentUnits: "userSpaceOnUse",
                        }),
                        children: [m, g],
                      },
                      _ = {
                        tag: "defs",
                        children: [
                          {
                            tag: "clipPath",
                            attributes: { id: b },
                            children:
                              ((e = d), "g" === e.tag ? e.children : [e]),
                          },
                          w,
                        ],
                      };
                    return (
                      n.push(_, {
                        tag: "rect",
                        attributes: s(
                          {
                            fill: "currentColor",
                            "clip-path": "url(#".concat(b, ")"),
                            mask: "url(#".concat(v, ")"),
                          },
                          et
                        ),
                      }),
                      { children: n, attributes: r }
                    );
                  })(O)
                : (function (t) {
                    var e = t.children,
                      n = t.attributes,
                      r = t.main,
                      i = t.transform,
                      o = J(t.styles);
                    if ((o.length > 0 && (n.style = o), Q(i))) {
                      var a = tt({
                        transform: i,
                        containerWidth: r.width,
                        iconWidth: r.width,
                      });
                      e.push({
                        tag: "g",
                        attributes: s({}, a.outer),
                        children: [
                          {
                            tag: "g",
                            attributes: s({}, a.inner),
                            children: [
                              {
                                tag: r.icon.tag,
                                children: r.icon.children,
                                attributes: s({}, r.icon.attributes, a.path),
                              },
                            ],
                          },
                        ],
                      });
                    } else e.push(r.icon);
                    return { children: e, attributes: n };
                  })(O),
            k = I.children,
            T = I.attributes;
          return (
            (O.children = k),
            (O.attributes = T),
            l
              ? (function (t) {
                  var e = t.prefix,
                    n = t.iconName,
                    r = t.children,
                    i = t.attributes,
                    o = t.symbol;
                  return [
                    {
                      tag: "svg",
                      attributes: { style: "display: none;" },
                      children: [
                        {
                          tag: "symbol",
                          attributes: s({}, i, {
                            id:
                              !0 === o
                                ? ""
                                    .concat(e, "-")
                                    .concat(S.familyPrefix, "-")
                                    .concat(n)
                                : o,
                          }),
                          children: r,
                        },
                      ],
                    },
                  ];
                })(O)
              : (function (t) {
                  var e = t.children,
                    n = t.main,
                    r = t.mask,
                    i = t.attributes,
                    o = t.styles,
                    a = t.transform;
                  if (Q(a) && n.found && !r.found) {
                    var l = { x: n.width / n.height / 2, y: 0.5 };
                    i.style = J(
                      s({}, o, {
                        "transform-origin": ""
                          .concat(l.x + a.x / 16, "em ")
                          .concat(l.y + a.y / 16, "em"),
                      })
                    );
                  }
                  return [{ tag: "svg", attributes: i, children: e }];
                })(O)
          );
        }
        function it(t) {
          var e = t.content,
            n = t.width,
            r = t.height,
            i = t.transform,
            o = t.title,
            a = t.extra,
            l = t.watchable,
            c = void 0 !== l && l,
            u = s({}, a.attributes, o ? { title: o } : {}, {
              class: a.classes.join(" "),
            });
          c && (u["data-fa-i2svg"] = "");
          var f = s({}, a.styles);
          Q(i) &&
            ((f.transform = (function (t) {
              var e = t.transform,
                n = t.width,
                r = void 0 === n ? 16 : n,
                i = t.height,
                o = void 0 === i ? 16 : i,
                a = t.startCentered,
                s = void 0 !== a && a,
                l = "";
              return (
                (l +=
                  s && w
                    ? "translate("
                        .concat(e.x / G - r / 2, "em, ")
                        .concat(e.y / G - o / 2, "em) ")
                    : s
                    ? "translate(calc(-50% + "
                        .concat(e.x / G, "em), calc(-50% + ")
                        .concat(e.y / G, "em)) ")
                    : "translate("
                        .concat(e.x / G, "em, ")
                        .concat(e.y / G, "em) ")),
                (l += "scale("
                  .concat((e.size / G) * (e.flipX ? -1 : 1), ", ")
                  .concat((e.size / G) * (e.flipY ? -1 : 1), ") ")),
                (l += "rotate(".concat(e.rotate, "deg) "))
              );
            })({ transform: i, startCentered: !0, width: n, height: r })),
            (f["-webkit-transform"] = f.transform));
          var d = J(f);
          d.length > 0 && (u.style = d);
          var p = [];
          return (
            p.push({ tag: "span", attributes: u, children: [e] }),
            o &&
              p.push({
                tag: "span",
                attributes: { class: "sr-only" },
                children: [o],
              }),
            p
          );
        }
        var ot = function () {},
          at =
            (S.measurePerformance && v && v.mark && v.measure,
            function (t, e, n, r) {
              var i,
                o,
                a,
                s = Object.keys(t),
                l = s.length,
                c =
                  void 0 !== r
                    ? (function (t, e) {
                        return function (n, r, i, o) {
                          return t.call(e, n, r, i, o);
                        };
                      })(e, r)
                    : e;
              for (
                void 0 === n ? ((i = 1), (a = t[s[0]])) : ((i = 0), (a = n));
                i < l;
                i++
              )
                a = c(a, t[(o = s[i])], o, t);
              return a;
            });
        function st(t, e) {
          var n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {},
            r = n.skipHooks,
            i = void 0 !== r && r,
            o = Object.keys(e).reduce(function (t, n) {
              var r = e[n];
              return r.icon ? (t[r.iconName] = r.icon) : (t[n] = r), t;
            }, {});
          "function" != typeof A.hooks.addPack || i
            ? (A.styles[t] = s({}, A.styles[t] || {}, o))
            : A.hooks.addPack(t, o),
            "fas" === t && st("fa", e);
        }
        var lt = A.styles,
          ct = A.shims,
          ut = function () {
            var t = function (t) {
              return at(
                lt,
                function (e, n, r) {
                  return (e[r] = at(n, t, {})), e;
                },
                {}
              );
            };
            t(function (t, e, n) {
              return e[3] && (t[e[3]] = n), t;
            }),
              t(function (t, e, n) {
                var r = e[2];
                return (
                  (t[n] = n),
                  r.forEach(function (e) {
                    t[e] = n;
                  }),
                  t
                );
              });
            var e = "far" in lt;
            at(
              ct,
              function (t, n) {
                var r = n[0],
                  i = n[1],
                  o = n[2];
                return (
                  "far" !== i || e || (i = "fas"),
                  (t[r] = { prefix: i, iconName: o }),
                  t
                );
              },
              {}
            );
          };
        ut();
        A.styles;
        function ft(t, e, n) {
          if (t && t[e] && t[e][n])
            return { prefix: e, iconName: n, icon: t[e][n] };
        }
        function dt(t) {
          var e = t.tag,
            n = t.attributes,
            r = void 0 === n ? {} : n,
            i = t.children,
            o = void 0 === i ? [] : i;
          return "string" == typeof t
            ? Z(t)
            : "<"
                .concat(e, " ")
                .concat(
                  (function (t) {
                    return Object.keys(t || {})
                      .reduce(function (e, n) {
                        return e + "".concat(n, '="').concat(Z(t[n]), '" ');
                      }, "")
                      .trim();
                  })(r),
                  ">"
                )
                .concat(o.map(dt).join(""), "</")
                .concat(e, ">");
        }
        var pt = function (t) {
          var e = { size: 16, x: 0, y: 0, flipX: !1, flipY: !1, rotate: 0 };
          return t
            ? t
                .toLowerCase()
                .split(" ")
                .reduce(function (t, e) {
                  var n = e.toLowerCase().split("-"),
                    r = n[0],
                    i = n.slice(1).join("-");
                  if (r && "h" === i) return (t.flipX = !0), t;
                  if (r && "v" === i) return (t.flipY = !0), t;
                  if (((i = parseFloat(i)), isNaN(i))) return t;
                  switch (r) {
                    case "grow":
                      t.size = t.size + i;
                      break;
                    case "shrink":
                      t.size = t.size - i;
                      break;
                    case "left":
                      t.x = t.x - i;
                      break;
                    case "right":
                      t.x = t.x + i;
                      break;
                    case "up":
                      t.y = t.y - i;
                      break;
                    case "down":
                      t.y = t.y + i;
                      break;
                    case "rotate":
                      t.rotate = t.rotate + i;
                  }
                  return t;
                }, e)
            : e;
        };
        function mt(t) {
          (this.name = "MissingIcon"),
            (this.message = t || "Icon unavailable"),
            (this.stack = new Error().stack);
        }
        (mt.prototype = Object.create(Error.prototype)),
          (mt.prototype.constructor = mt);
        var ht = { fill: "currentColor" },
          yt = { attributeType: "XML", repeatCount: "indefinite", dur: "2s" },
          gt = {
            tag: "path",
            attributes: s({}, ht, {
              d: "M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z",
            }),
          },
          vt = s({}, yt, { attributeName: "opacity" });
        s({}, ht, { cx: "256", cy: "364", r: "28" }),
          s({}, yt, { attributeName: "r", values: "28;14;28;28;14;28;" }),
          s({}, vt, { values: "1;0;1;1;0;1;" }),
          s({}, ht, {
            opacity: "1",
            d: "M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z",
          }),
          s({}, vt, { values: "1;0;0;0;0;1;" }),
          s({}, ht, {
            opacity: "0",
            d: "M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z",
          }),
          s({}, vt, { values: "0;0;1;1;0;0;" }),
          A.styles;
        function bt(t) {
          var e = t[0],
            n = t[1],
            r = l(t.slice(4), 1)[0];
          return {
            found: !0,
            width: e,
            height: n,
            icon: Array.isArray(r)
              ? {
                  tag: "g",
                  attributes: {
                    class: "".concat(S.familyPrefix, "-").concat(O.GROUP),
                  },
                  children: [
                    {
                      tag: "path",
                      attributes: {
                        class: ""
                          .concat(S.familyPrefix, "-")
                          .concat(O.SECONDARY),
                        fill: "currentColor",
                        d: r[0],
                      },
                    },
                    {
                      tag: "path",
                      attributes: {
                        class: "".concat(S.familyPrefix, "-").concat(O.PRIMARY),
                        fill: "currentColor",
                        d: r[1],
                      },
                    },
                  ],
                }
              : { tag: "path", attributes: { fill: "currentColor", d: r } },
          };
        }
        A.styles;
        function wt() {
          var t = "svg-inline--fa",
            e = S.familyPrefix,
            n = S.replacementClass,
            r =
              'svg:not(:root).svg-inline--fa {\n  overflow: visible;\n}\n\n.svg-inline--fa {\n  display: inline-block;\n  font-size: inherit;\n  height: 1em;\n  overflow: visible;\n  vertical-align: -0.125em;\n}\n.svg-inline--fa.fa-lg {\n  vertical-align: -0.225em;\n}\n.svg-inline--fa.fa-w-1 {\n  width: 0.0625em;\n}\n.svg-inline--fa.fa-w-2 {\n  width: 0.125em;\n}\n.svg-inline--fa.fa-w-3 {\n  width: 0.1875em;\n}\n.svg-inline--fa.fa-w-4 {\n  width: 0.25em;\n}\n.svg-inline--fa.fa-w-5 {\n  width: 0.3125em;\n}\n.svg-inline--fa.fa-w-6 {\n  width: 0.375em;\n}\n.svg-inline--fa.fa-w-7 {\n  width: 0.4375em;\n}\n.svg-inline--fa.fa-w-8 {\n  width: 0.5em;\n}\n.svg-inline--fa.fa-w-9 {\n  width: 0.5625em;\n}\n.svg-inline--fa.fa-w-10 {\n  width: 0.625em;\n}\n.svg-inline--fa.fa-w-11 {\n  width: 0.6875em;\n}\n.svg-inline--fa.fa-w-12 {\n  width: 0.75em;\n}\n.svg-inline--fa.fa-w-13 {\n  width: 0.8125em;\n}\n.svg-inline--fa.fa-w-14 {\n  width: 0.875em;\n}\n.svg-inline--fa.fa-w-15 {\n  width: 0.9375em;\n}\n.svg-inline--fa.fa-w-16 {\n  width: 1em;\n}\n.svg-inline--fa.fa-w-17 {\n  width: 1.0625em;\n}\n.svg-inline--fa.fa-w-18 {\n  width: 1.125em;\n}\n.svg-inline--fa.fa-w-19 {\n  width: 1.1875em;\n}\n.svg-inline--fa.fa-w-20 {\n  width: 1.25em;\n}\n.svg-inline--fa.fa-pull-left {\n  margin-right: 0.3em;\n  width: auto;\n}\n.svg-inline--fa.fa-pull-right {\n  margin-left: 0.3em;\n  width: auto;\n}\n.svg-inline--fa.fa-border {\n  height: 1.5em;\n}\n.svg-inline--fa.fa-li {\n  width: 2em;\n}\n.svg-inline--fa.fa-fw {\n  width: 1.25em;\n}\n\n.fa-layers svg.svg-inline--fa {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.fa-layers {\n  display: inline-block;\n  height: 1em;\n  position: relative;\n  text-align: center;\n  vertical-align: -0.125em;\n  width: 1em;\n}\n.fa-layers svg.svg-inline--fa {\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n\n.fa-layers-counter, .fa-layers-text {\n  display: inline-block;\n  position: absolute;\n  text-align: center;\n}\n\n.fa-layers-text {\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n\n.fa-layers-counter {\n  background-color: #ff253a;\n  border-radius: 1em;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  color: #fff;\n  height: 1.5em;\n  line-height: 1;\n  max-width: 5em;\n  min-width: 1.5em;\n  overflow: hidden;\n  padding: 0.25em;\n  right: 0;\n  text-overflow: ellipsis;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n}\n\n.fa-layers-bottom-right {\n  bottom: 0;\n  right: 0;\n  top: auto;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: bottom right;\n          transform-origin: bottom right;\n}\n\n.fa-layers-bottom-left {\n  bottom: 0;\n  left: 0;\n  right: auto;\n  top: auto;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: bottom left;\n          transform-origin: bottom left;\n}\n\n.fa-layers-top-right {\n  right: 0;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n}\n\n.fa-layers-top-left {\n  left: 0;\n  right: auto;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top left;\n          transform-origin: top left;\n}\n\n.fa-lg {\n  font-size: 1.3333333333em;\n  line-height: 0.75em;\n  vertical-align: -0.0667em;\n}\n\n.fa-xs {\n  font-size: 0.75em;\n}\n\n.fa-sm {\n  font-size: 0.875em;\n}\n\n.fa-1x {\n  font-size: 1em;\n}\n\n.fa-2x {\n  font-size: 2em;\n}\n\n.fa-3x {\n  font-size: 3em;\n}\n\n.fa-4x {\n  font-size: 4em;\n}\n\n.fa-5x {\n  font-size: 5em;\n}\n\n.fa-6x {\n  font-size: 6em;\n}\n\n.fa-7x {\n  font-size: 7em;\n}\n\n.fa-8x {\n  font-size: 8em;\n}\n\n.fa-9x {\n  font-size: 9em;\n}\n\n.fa-10x {\n  font-size: 10em;\n}\n\n.fa-fw {\n  text-align: center;\n  width: 1.25em;\n}\n\n.fa-ul {\n  list-style-type: none;\n  margin-left: 2.5em;\n  padding-left: 0;\n}\n.fa-ul > li {\n  position: relative;\n}\n\n.fa-li {\n  left: -2em;\n  position: absolute;\n  text-align: center;\n  width: 2em;\n  line-height: inherit;\n}\n\n.fa-border {\n  border: solid 0.08em #eee;\n  border-radius: 0.1em;\n  padding: 0.2em 0.25em 0.15em;\n}\n\n.fa-pull-left {\n  float: left;\n}\n\n.fa-pull-right {\n  float: right;\n}\n\n.fa.fa-pull-left,\n.fas.fa-pull-left,\n.far.fa-pull-left,\n.fal.fa-pull-left,\n.fab.fa-pull-left {\n  margin-right: 0.3em;\n}\n.fa.fa-pull-right,\n.fas.fa-pull-right,\n.far.fa-pull-right,\n.fal.fa-pull-right,\n.fab.fa-pull-right {\n  margin-left: 0.3em;\n}\n\n.fa-spin {\n  -webkit-animation: fa-spin 2s infinite linear;\n          animation: fa-spin 2s infinite linear;\n}\n\n.fa-pulse {\n  -webkit-animation: fa-spin 1s infinite steps(8);\n          animation: fa-spin 1s infinite steps(8);\n}\n\n@-webkit-keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n\n@keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n.fa-rotate-90 {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=1)";\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg);\n}\n\n.fa-rotate-180 {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2)";\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg);\n}\n\n.fa-rotate-270 {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=3)";\n  -webkit-transform: rotate(270deg);\n          transform: rotate(270deg);\n}\n\n.fa-flip-horizontal {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)";\n  -webkit-transform: scale(-1, 1);\n          transform: scale(-1, 1);\n}\n\n.fa-flip-vertical {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)";\n  -webkit-transform: scale(1, -1);\n          transform: scale(1, -1);\n}\n\n.fa-flip-both, .fa-flip-horizontal.fa-flip-vertical {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)";\n  -webkit-transform: scale(-1, -1);\n          transform: scale(-1, -1);\n}\n\n:root .fa-rotate-90,\n:root .fa-rotate-180,\n:root .fa-rotate-270,\n:root .fa-flip-horizontal,\n:root .fa-flip-vertical,\n:root .fa-flip-both {\n  -webkit-filter: none;\n          filter: none;\n}\n\n.fa-stack {\n  display: inline-block;\n  height: 2em;\n  position: relative;\n  width: 2.5em;\n}\n\n.fa-stack-1x,\n.fa-stack-2x {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.svg-inline--fa.fa-stack-1x {\n  height: 1em;\n  width: 1.25em;\n}\n.svg-inline--fa.fa-stack-2x {\n  height: 2em;\n  width: 2.5em;\n}\n\n.fa-inverse {\n  color: #fff;\n}\n\n.sr-only {\n  border: 0;\n  clip: rect(0, 0, 0, 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px;\n}\n\n.sr-only-focusable:active, .sr-only-focusable:focus {\n  clip: auto;\n  height: auto;\n  margin: 0;\n  overflow: visible;\n  position: static;\n  width: auto;\n}\n\n.svg-inline--fa .fa-primary {\n  fill: var(--fa-primary-color, currentColor);\n  opacity: 1;\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa .fa-secondary {\n  fill: var(--fa-secondary-color, currentColor);\n  opacity: 0.4;\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-primary {\n  opacity: 0.4;\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-secondary {\n  opacity: 1;\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa mask .fa-primary,\n.svg-inline--fa mask .fa-secondary {\n  fill: black;\n}\n\n.fad.fa-inverse {\n  color: #fff;\n}';
          if ("fa" !== e || n !== t) {
            var i = new RegExp("\\.".concat("fa", "\\-"), "g"),
              o = new RegExp("\\--".concat("fa", "\\-"), "g"),
              a = new RegExp("\\.".concat(t), "g");
            r = r
              .replace(i, ".".concat(e, "-"))
              .replace(o, "--".concat(e, "-"))
              .replace(a, ".".concat(n));
          }
          return r;
        }
        function _t() {
          S.autoAddCss && !St && (K(wt()), (St = !0));
        }
        function xt(t, e) {
          return (
            Object.defineProperty(t, "abstract", { get: e }),
            Object.defineProperty(t, "html", {
              get: function () {
                return t.abstract.map(function (t) {
                  return dt(t);
                });
              },
            }),
            Object.defineProperty(t, "node", {
              get: function () {
                if (b) {
                  var e = g.createElement("div");
                  return (e.innerHTML = t.html), e.children;
                }
              },
            }),
            t
          );
        }
        function Ot(t) {
          var e = t.prefix,
            n = void 0 === e ? "fa" : e,
            r = t.iconName;
          if (r) return ft(kt.definitions, n, r) || ft(A.styles, n, r);
        }
        var It,
          kt = new ((function () {
            function t() {
              !(function (t, e) {
                if (!(t instanceof e))
                  throw new TypeError("Cannot call a class as a function");
              })(this, t),
                (this.definitions = {});
            }
            var e, n, r;
            return (
              (e = t),
              (n = [
                {
                  key: "add",
                  value: function () {
                    for (
                      var t = this,
                        e = arguments.length,
                        n = new Array(e),
                        r = 0;
                      r < e;
                      r++
                    )
                      n[r] = arguments[r];
                    var i = n.reduce(this._pullDefinitions, {});
                    Object.keys(i).forEach(function (e) {
                      (t.definitions[e] = s({}, t.definitions[e] || {}, i[e])),
                        st(e, i[e]),
                        ut();
                    });
                  },
                },
                {
                  key: "reset",
                  value: function () {
                    this.definitions = {};
                  },
                },
                {
                  key: "_pullDefinitions",
                  value: function (t, e) {
                    var n = e.prefix && e.iconName && e.icon ? { 0: e } : e;
                    return (
                      Object.keys(n).map(function (e) {
                        var r = n[e],
                          i = r.prefix,
                          o = r.iconName,
                          a = r.icon;
                        t[i] || (t[i] = {}), (t[i][o] = a);
                      }),
                      t
                    );
                  },
                },
              ]) && o(e.prototype, n),
              r && o(e, r),
              t
            );
          })())(),
          St = !1,
          Tt = {
            transform: function (t) {
              return pt(t);
            },
          },
          At =
            ((It = function (t) {
              var e =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {},
                n = e.transform,
                r = void 0 === n ? H : n,
                i = e.symbol,
                o = void 0 !== i && i,
                a = e.mask,
                l = void 0 === a ? null : a,
                c = e.maskId,
                u = void 0 === c ? null : c,
                f = e.title,
                d = void 0 === f ? null : f,
                p = e.titleId,
                m = void 0 === p ? null : p,
                h = e.classes,
                y = void 0 === h ? [] : h,
                g = e.attributes,
                v = void 0 === g ? {} : g,
                b = e.styles,
                w = void 0 === b ? {} : b;
              if (t) {
                var _ = t.prefix,
                  x = t.iconName,
                  O = t.icon;
                return xt(s({ type: "icon" }, t), function () {
                  return (
                    _t(),
                    S.autoA11y &&
                      (d
                        ? (v["aria-labelledby"] = ""
                            .concat(S.replacementClass, "-title-")
                            .concat(m || q()))
                        : ((v["aria-hidden"] = "true"),
                          (v.focusable = "false"))),
                    rt({
                      icons: {
                        main: bt(O),
                        mask: l
                          ? bt(l.icon)
                          : { found: !1, width: null, height: null, icon: {} },
                      },
                      prefix: _,
                      iconName: x,
                      transform: s({}, H, r),
                      symbol: o,
                      title: d,
                      maskId: u,
                      titleId: m,
                      extra: { attributes: v, styles: w, classes: y },
                    })
                  );
                });
              }
            }),
            function (t) {
              var e =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {},
                n = (t || {}).icon ? t : Ot(t || {}),
                r = e.mask;
              return (
                r && (r = (r || {}).icon ? r : Ot(r || {})),
                It(n, s({}, e, { mask: r }))
              );
            }),
          Ct = function (t) {
            var e =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {},
              n = e.transform,
              r = void 0 === n ? H : n,
              i = e.title,
              o = void 0 === i ? null : i,
              a = e.classes,
              l = void 0 === a ? [] : a,
              u = e.attributes,
              f = void 0 === u ? {} : u,
              d = e.styles,
              p = void 0 === d ? {} : d;
            return xt({ type: "text", content: t }, function () {
              return (
                _t(),
                it({
                  content: t,
                  transform: s({}, H, r),
                  title: o,
                  extra: {
                    attributes: f,
                    styles: p,
                    classes: ["".concat(S.familyPrefix, "-layers-text")].concat(
                      c(l)
                    ),
                  },
                })
              );
            });
          };
      }).call(this, n(2), n(14).setImmediate);
    },
    function (t, e) {
      var n;
      n = (function () {
        return this;
      })();
      try {
        n = n || new Function("return this")();
      } catch (t) {
        "object" == typeof window && (n = window);
      }
      t.exports = n;
    },
    function (t, e) {
      (t.exports = function (t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
        return r;
      }),
        (t.exports.__esModule = !0),
        (t.exports.default = t.exports);
    },
    function (t, e, n) {},
    function (t, e, n) {
      "use strict";
      (function (t) {
        n.d(e, "a", function () {
          return g;
        });
        var r = n(1),
          i =
            "undefined" != typeof window
              ? window
              : void 0 !== t
              ? t
              : "undefined" != typeof self
              ? self
              : {};
        var o = (function (t, e) {
            return t((e = { exports: {} }), e.exports), e.exports;
          })(function (t) {
            !(function (e) {
              var n = function (t, e, r) {
                  if (!l(e) || u(e) || f(e) || d(e) || s(e)) return e;
                  var i,
                    o = 0,
                    a = 0;
                  if (c(e))
                    for (i = [], a = e.length; o < a; o++)
                      i.push(n(t, e[o], r));
                  else
                    for (var p in ((i = {}), e))
                      Object.prototype.hasOwnProperty.call(e, p) &&
                        (i[t(p, r)] = n(t, e[p], r));
                  return i;
                },
                r = function (t) {
                  return p(t)
                    ? t
                    : (t = t.replace(/[\-_\s]+(.)?/g, function (t, e) {
                        return e ? e.toUpperCase() : "";
                      }))
                        .substr(0, 1)
                        .toLowerCase() + t.substr(1);
                },
                i = function (t) {
                  var e = r(t);
                  return e.substr(0, 1).toUpperCase() + e.substr(1);
                },
                o = function (t, e) {
                  return (function (t, e) {
                    var n = (e = e || {}).separator || "_",
                      r = e.split || /(?=[A-Z])/;
                    return t.split(r).join(n);
                  })(t, e).toLowerCase();
                },
                a = Object.prototype.toString,
                s = function (t) {
                  return "function" == typeof t;
                },
                l = function (t) {
                  return t === Object(t);
                },
                c = function (t) {
                  return "[object Array]" == a.call(t);
                },
                u = function (t) {
                  return "[object Date]" == a.call(t);
                },
                f = function (t) {
                  return "[object RegExp]" == a.call(t);
                },
                d = function (t) {
                  return "[object Boolean]" == a.call(t);
                },
                p = function (t) {
                  return (t -= 0) == t;
                },
                m = function (t, e) {
                  var n = e && "process" in e ? e.process : e;
                  return "function" != typeof n
                    ? t
                    : function (e, r) {
                        return n(e, t, r);
                      };
                },
                h = {
                  camelize: r,
                  decamelize: o,
                  pascalize: i,
                  depascalize: o,
                  camelizeKeys: function (t, e) {
                    return n(m(r, e), t);
                  },
                  decamelizeKeys: function (t, e) {
                    return n(m(o, e), t, e);
                  },
                  pascalizeKeys: function (t, e) {
                    return n(m(i, e), t);
                  },
                  depascalizeKeys: function () {
                    return this.decamelizeKeys.apply(this, arguments);
                  },
                };
              t.exports ? (t.exports = h) : (e.humps = h);
            })(i);
          }),
          a =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (t) {
                  return typeof t;
                }
              : function (t) {
                  return t &&
                    "function" == typeof Symbol &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
                },
          s = function (t, e, n) {
            return (
              e in t
                ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                  })
                : (t[e] = n),
              t
            );
          },
          l =
            Object.assign ||
            function (t) {
              for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
              }
              return t;
            },
          c = function (t, e) {
            var n = {};
            for (var r in t)
              e.indexOf(r) >= 0 ||
                (Object.prototype.hasOwnProperty.call(t, r) && (n[r] = t[r]));
            return n;
          };
        function u(t) {
          return t
            .split(";")
            .map(function (t) {
              return t.trim();
            })
            .filter(function (t) {
              return t;
            })
            .reduce(function (t, e) {
              var n = e.indexOf(":"),
                r = o.camelize(e.slice(0, n)),
                i = e.slice(n + 1).trim();
              return (t[r] = i), t;
            }, {});
        }
        function f(t) {
          return t.split(/\s+/).reduce(function (t, e) {
            return (t[e] = !0), t;
          }, {});
        }
        function d() {
          for (var t = arguments.length, e = Array(t), n = 0; n < t; n++)
            e[n] = arguments[n];
          return e.reduce(function (t, e) {
            return Array.isArray(e) ? (t = t.concat(e)) : t.push(e), t;
          }, []);
        }
        function p(t, e) {
          var n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {},
            r =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : {},
            i = (e.children || []).map(p.bind(null, t)),
            o = Object.keys(e.attributes || {}).reduce(
              function (t, n) {
                var r = e.attributes[n];
                switch (n) {
                  case "class":
                    t.class = f(r);
                    break;
                  case "style":
                    t.style = u(r);
                    break;
                  default:
                    t.attrs[n] = r;
                }
                return t;
              },
              { class: {}, style: {}, attrs: {} }
            ),
            a = r.class,
            s = void 0 === a ? {} : a,
            m = r.style,
            h = void 0 === m ? {} : m,
            y = r.attrs,
            g = void 0 === y ? {} : y,
            v = c(r, ["class", "style", "attrs"]);
          return "string" == typeof e
            ? e
            : t(
                e.tag,
                l(
                  {
                    class: d(o.class, s),
                    style: l({}, o.style, h),
                    attrs: l({}, o.attrs, g),
                  },
                  v,
                  { props: n }
                ),
                i
              );
        }
        var m = !1;
        try {
          m = !0;
        } catch (t) {}
        function h(t, e) {
          return (Array.isArray(e) && e.length > 0) || (!Array.isArray(e) && e)
            ? s({}, t, e)
            : {};
        }
        function y(t) {
          return null === t
            ? null
            : "object" === (void 0 === t ? "undefined" : a(t)) &&
              t.prefix &&
              t.iconName
            ? t
            : Array.isArray(t) && 2 === t.length
            ? { prefix: t[0], iconName: t[1] }
            : "string" == typeof t
            ? { prefix: "fas", iconName: t }
            : void 0;
        }
        var g = {
          name: "FontAwesomeIcon",
          functional: !0,
          props: {
            border: { type: Boolean, default: !1 },
            fixedWidth: { type: Boolean, default: !1 },
            flip: {
              type: String,
              default: null,
              validator: function (t) {
                return ["horizontal", "vertical", "both"].indexOf(t) > -1;
              },
            },
            icon: { type: [Object, Array, String], required: !0 },
            mask: { type: [Object, Array, String], default: null },
            listItem: { type: Boolean, default: !1 },
            pull: {
              type: String,
              default: null,
              validator: function (t) {
                return ["right", "left"].indexOf(t) > -1;
              },
            },
            pulse: { type: Boolean, default: !1 },
            rotation: {
              type: [String, Number],
              default: null,
              validator: function (t) {
                return [90, 180, 270].indexOf(parseInt(t, 10)) > -1;
              },
            },
            swapOpacity: { type: Boolean, default: !1 },
            size: {
              type: String,
              default: null,
              validator: function (t) {
                return (
                  [
                    "lg",
                    "xs",
                    "sm",
                    "1x",
                    "2x",
                    "3x",
                    "4x",
                    "5x",
                    "6x",
                    "7x",
                    "8x",
                    "9x",
                    "10x",
                  ].indexOf(t) > -1
                );
              },
            },
            spin: { type: Boolean, default: !1 },
            transform: { type: [String, Object], default: null },
            symbol: { type: [Boolean, String], default: !1 },
            title: { type: String, default: null },
            inverse: { type: Boolean, default: !1 },
          },
          render: function (t, e) {
            var n = e.props,
              i = n.icon,
              o = n.mask,
              a = n.symbol,
              c = n.title,
              u = y(i),
              f = h(
                "classes",
                (function (t) {
                  var e,
                    n =
                      ((e = {
                        "fa-spin": t.spin,
                        "fa-pulse": t.pulse,
                        "fa-fw": t.fixedWidth,
                        "fa-border": t.border,
                        "fa-li": t.listItem,
                        "fa-inverse": t.inverse,
                        "fa-flip-horizontal":
                          "horizontal" === t.flip || "both" === t.flip,
                        "fa-flip-vertical":
                          "vertical" === t.flip || "both" === t.flip,
                      }),
                      s(e, "fa-" + t.size, null !== t.size),
                      s(e, "fa-rotate-" + t.rotation, null !== t.rotation),
                      s(e, "fa-pull-" + t.pull, null !== t.pull),
                      s(e, "fa-swap-opacity", t.swapOpacity),
                      e);
                  return Object.keys(n)
                    .map(function (t) {
                      return n[t] ? t : null;
                    })
                    .filter(function (t) {
                      return t;
                    });
                })(n)
              ),
              d = h(
                "transform",
                "string" == typeof n.transform
                  ? r.d.transform(n.transform)
                  : n.transform
              ),
              g = h("mask", y(o)),
              v = Object(r.b)(u, l({}, f, d, g, { symbol: a, title: c }));
            if (!v)
              return (function () {
                var t;
                !m &&
                  console &&
                  "function" == typeof console.error &&
                  (t = console).error.apply(t, arguments);
              })("Could not find one or more icon(s)", u, g);
            var b = v.abstract;
            return p.bind(null, t)(b[0], {}, e.data);
          },
        };
        Boolean, Boolean;
      }).call(this, n(2));
    },
    function (t, e, n) {
      (function (e) {
        var n = "object" == typeof e && e && e.Object === Object && e,
          r = "object" == typeof self && self && self.Object === Object && self,
          i = n || r || Function("return this")(),
          o = Object.prototype,
          a = o.hasOwnProperty,
          s = o.toString,
          l = i.Symbol,
          c = l ? l.toStringTag : void 0;
        function u(t) {
          return null == t
            ? void 0 === t
              ? "[object Undefined]"
              : "[object Null]"
            : c && c in Object(t)
            ? (function (t) {
                var e = a.call(t, c),
                  n = t[c];
                try {
                  t[c] = void 0;
                  var r = !0;
                } catch (t) {}
                var i = s.call(t);
                r && (e ? (t[c] = n) : delete t[c]);
                return i;
              })(t)
            : (function (t) {
                return s.call(t);
              })(t);
        }
        t.exports = function (t) {
          if (
            !(function (t) {
              var e = typeof t;
              return null != t && ("object" == e || "function" == e);
            })(t)
          )
            return !1;
          var e = u(t);
          return (
            "[object Function]" == e ||
            "[object GeneratorFunction]" == e ||
            "[object AsyncFunction]" == e ||
            "[object Proxy]" == e
          );
        };
      }).call(this, n(2));
    },
    function (t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
      var r = [],
        i =
          "M0 168v-16c0-13.255 10.745-24 24-24h360V80c0-21.367 25.899-32.042 40.971-16.971l80 80c9.372 9.373 9.372 24.569 0 33.941l-80 80C409.956 271.982 384 261.456 384 240v-48H24c-13.255 0-24-10.745-24-24zm488 152H128v-48c0-21.314-25.862-32.08-40.971-16.971l-80 80c-9.372 9.373-9.372 24.569 0 33.941l80 80C102.057 463.997 128 453.437 128 432v-48h360c13.255 0 24-10.745 24-24v-16c0-13.255-10.745-24-24-24z";
      (e.definition = {
        prefix: "fas",
        iconName: "exchange-alt",
        icon: [512, 512, r, "f362", i],
      }),
        (e.faExchangeAlt = e.definition),
        (e.prefix = "fas"),
        (e.iconName = "exchange-alt"),
        (e.width = 512),
        (e.height = 512),
        (e.ligatures = r),
        (e.unicode = "f362"),
        (e.svgPathData = i);
    },
    function (t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
      var r = [],
        i =
          "M223.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L319.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L393.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34zm-192 34l136 136c9.4 9.4 24.6 9.4 33.9 0l22.6-22.6c9.4-9.4 9.4-24.6 0-33.9L127.9 256l96.4-96.4c9.4-9.4 9.4-24.6 0-33.9L201.7 103c-9.4-9.4-24.6-9.4-33.9 0l-136 136c-9.5 9.4-9.5 24.6-.1 34z";
      (e.definition = {
        prefix: "fas",
        iconName: "angle-double-left",
        icon: [448, 512, r, "f100", i],
      }),
        (e.faAngleDoubleLeft = e.definition),
        (e.prefix = "fas"),
        (e.iconName = "angle-double-left"),
        (e.width = 448),
        (e.height = 512),
        (e.ligatures = r),
        (e.unicode = "f100"),
        (e.svgPathData = i);
    },
    function (t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
      var r = [],
        i =
          "M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34zm192-34l-136-136c-9.4-9.4-24.6-9.4-33.9 0l-22.6 22.6c-9.4 9.4-9.4 24.6 0 33.9l96.4 96.4-96.4 96.4c-9.4 9.4-9.4 24.6 0 33.9l22.6 22.6c9.4 9.4 24.6 9.4 33.9 0l136-136c9.4-9.2 9.4-24.4 0-33.8z";
      (e.definition = {
        prefix: "fas",
        iconName: "angle-double-right",
        icon: [448, 512, r, "f101", i],
      }),
        (e.faAngleDoubleRight = e.definition),
        (e.prefix = "fas"),
        (e.iconName = "angle-double-right"),
        (e.width = 448),
        (e.height = 512),
        (e.ligatures = r),
        (e.unicode = "f101"),
        (e.svgPathData = i);
    },
    function (t, e, n) {
      var r = n(3);
      (t.exports = function (t) {
        if (Array.isArray(t)) return r(t);
      }),
        (t.exports.__esModule = !0),
        (t.exports.default = t.exports);
    },
    function (t, e) {
      (t.exports = function (t) {
        if (
          ("undefined" != typeof Symbol && null != t[Symbol.iterator]) ||
          null != t["@@iterator"]
        )
          return Array.from(t);
      }),
        (t.exports.__esModule = !0),
        (t.exports.default = t.exports);
    },
    function (t, e, n) {
      var r = n(3);
      (t.exports = function (t, e) {
        if (t) {
          if ("string" == typeof t) return r(t, e);
          var n = Object.prototype.toString.call(t).slice(8, -1);
          return (
            "Object" === n && t.constructor && (n = t.constructor.name),
            "Map" === n || "Set" === n
              ? Array.from(t)
              : "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              ? r(t, e)
              : void 0
          );
        }
      }),
        (t.exports.__esModule = !0),
        (t.exports.default = t.exports);
    },
    function (t, e) {
      (t.exports = function () {
        throw new TypeError(
          "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
        );
      }),
        (t.exports.__esModule = !0),
        (t.exports.default = t.exports);
    },
    function (t, e, n) {
      (function (t) {
        var r =
            (void 0 !== t && t) ||
            ("undefined" != typeof self && self) ||
            window,
          i = Function.prototype.apply;
        function o(t, e) {
          (this._id = t), (this._clearFn = e);
        }
        (e.setTimeout = function () {
          return new o(i.call(setTimeout, r, arguments), clearTimeout);
        }),
          (e.setInterval = function () {
            return new o(i.call(setInterval, r, arguments), clearInterval);
          }),
          (e.clearTimeout = e.clearInterval =
            function (t) {
              t && t.close();
            }),
          (o.prototype.unref = o.prototype.ref = function () {}),
          (o.prototype.close = function () {
            this._clearFn.call(r, this._id);
          }),
          (e.enroll = function (t, e) {
            clearTimeout(t._idleTimeoutId), (t._idleTimeout = e);
          }),
          (e.unenroll = function (t) {
            clearTimeout(t._idleTimeoutId), (t._idleTimeout = -1);
          }),
          (e._unrefActive = e.active =
            function (t) {
              clearTimeout(t._idleTimeoutId);
              var e = t._idleTimeout;
              e >= 0 &&
                (t._idleTimeoutId = setTimeout(function () {
                  t._onTimeout && t._onTimeout();
                }, e));
            }),
          n(15),
          (e.setImmediate =
            ("undefined" != typeof self && self.setImmediate) ||
            (void 0 !== t && t.setImmediate) ||
            (this && this.setImmediate)),
          (e.clearImmediate =
            ("undefined" != typeof self && self.clearImmediate) ||
            (void 0 !== t && t.clearImmediate) ||
            (this && this.clearImmediate));
      }).call(this, n(2));
    },
    function (t, e, n) {
      (function (t, e) {
        !(function (t, n) {
          "use strict";
          if (!t.setImmediate) {
            var r,
              i,
              o,
              a,
              s,
              l = 1,
              c = {},
              u = !1,
              f = t.document,
              d = Object.getPrototypeOf && Object.getPrototypeOf(t);
            (d = d && d.setTimeout ? d : t),
              "[object process]" === {}.toString.call(t.process)
                ? (r = function (t) {
                    e.nextTick(function () {
                      m(t);
                    });
                  })
                : !(function () {
                    if (t.postMessage && !t.importScripts) {
                      var e = !0,
                        n = t.onmessage;
                      return (
                        (t.onmessage = function () {
                          e = !1;
                        }),
                        t.postMessage("", "*"),
                        (t.onmessage = n),
                        e
                      );
                    }
                  })()
                ? t.MessageChannel
                  ? (((o = new MessageChannel()).port1.onmessage = function (
                      t
                    ) {
                      m(t.data);
                    }),
                    (r = function (t) {
                      o.port2.postMessage(t);
                    }))
                  : f && "onreadystatechange" in f.createElement("script")
                  ? ((i = f.documentElement),
                    (r = function (t) {
                      var e = f.createElement("script");
                      (e.onreadystatechange = function () {
                        m(t),
                          (e.onreadystatechange = null),
                          i.removeChild(e),
                          (e = null);
                      }),
                        i.appendChild(e);
                    }))
                  : (r = function (t) {
                      setTimeout(m, 0, t);
                    })
                : ((a = "setImmediate$" + Math.random() + "$"),
                  (s = function (e) {
                    e.source === t &&
                      "string" == typeof e.data &&
                      0 === e.data.indexOf(a) &&
                      m(+e.data.slice(a.length));
                  }),
                  t.addEventListener
                    ? t.addEventListener("message", s, !1)
                    : t.attachEvent("onmessage", s),
                  (r = function (e) {
                    t.postMessage(a + e, "*");
                  })),
              (d.setImmediate = function (t) {
                "function" != typeof t && (t = new Function("" + t));
                for (
                  var e = new Array(arguments.length - 1), n = 0;
                  n < e.length;
                  n++
                )
                  e[n] = arguments[n + 1];
                var i = { callback: t, args: e };
                return (c[l] = i), r(l), l++;
              }),
              (d.clearImmediate = p);
          }
          function p(t) {
            delete c[t];
          }
          function m(t) {
            if (u) setTimeout(m, 0, t);
            else {
              var e = c[t];
              if (e) {
                u = !0;
                try {
                  !(function (t) {
                    var e = t.callback,
                      n = t.args;
                    switch (n.length) {
                      case 0:
                        e();
                        break;
                      case 1:
                        e(n[0]);
                        break;
                      case 2:
                        e(n[0], n[1]);
                        break;
                      case 3:
                        e(n[0], n[1], n[2]);
                        break;
                      default:
                        e.apply(void 0, n);
                    }
                  })(e);
                } finally {
                  p(t), (u = !1);
                }
              }
            }
          }
        })("undefined" == typeof self ? (void 0 === t ? this : t) : self);
      }).call(this, n(2), n(16));
    },
    function (t, e) {
      var n,
        r,
        i = (t.exports = {});
      function o() {
        throw new Error("setTimeout has not been defined");
      }
      function a() {
        throw new Error("clearTimeout has not been defined");
      }
      function s(t) {
        if (n === setTimeout) return setTimeout(t, 0);
        if ((n === o || !n) && setTimeout)
          return (n = setTimeout), setTimeout(t, 0);
        try {
          return n(t, 0);
        } catch (e) {
          try {
            return n.call(null, t, 0);
          } catch (e) {
            return n.call(this, t, 0);
          }
        }
      }
      !(function () {
        try {
          n = "function" == typeof setTimeout ? setTimeout : o;
        } catch (t) {
          n = o;
        }
        try {
          r = "function" == typeof clearTimeout ? clearTimeout : a;
        } catch (t) {
          r = a;
        }
      })();
      var l,
        c = [],
        u = !1,
        f = -1;
      function d() {
        u &&
          l &&
          ((u = !1), l.length ? (c = l.concat(c)) : (f = -1), c.length && p());
      }
      function p() {
        if (!u) {
          var t = s(d);
          u = !0;
          for (var e = c.length; e; ) {
            for (l = c, c = []; ++f < e; ) l && l[f].run();
            (f = -1), (e = c.length);
          }
          (l = null),
            (u = !1),
            (function (t) {
              if (r === clearTimeout) return clearTimeout(t);
              if ((r === a || !r) && clearTimeout)
                return (r = clearTimeout), clearTimeout(t);
              try {
                r(t);
              } catch (e) {
                try {
                  return r.call(null, t);
                } catch (e) {
                  return r.call(this, t);
                }
              }
            })(t);
        }
      }
      function m(t, e) {
        (this.fun = t), (this.array = e);
      }
      function h() {}
      (i.nextTick = function (t) {
        var e = new Array(arguments.length - 1);
        if (arguments.length > 1)
          for (var n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
        c.push(new m(t, e)), 1 !== c.length || u || s(p);
      }),
        (m.prototype.run = function () {
          this.fun.apply(null, this.array);
        }),
        (i.title = "browser"),
        (i.browser = !0),
        (i.env = {}),
        (i.argv = []),
        (i.version = ""),
        (i.versions = {}),
        (i.on = h),
        (i.addListener = h),
        (i.once = h),
        (i.off = h),
        (i.removeListener = h),
        (i.removeAllListeners = h),
        (i.emit = h),
        (i.prependListener = h),
        (i.prependOnceListener = h),
        (i.listeners = function (t) {
          return [];
        }),
        (i.binding = function (t) {
          throw new Error("process.binding is not supported");
        }),
        (i.cwd = function () {
          return "/";
        }),
        (i.chdir = function (t) {
          throw new Error("process.chdir is not supported");
        }),
        (i.umask = function () {
          return 0;
        });
    },
    function (t, e, n) {
      "use strict";
      n(4);
    },
    function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, "MultiSelectListbox", function () {
          return w;
        });
      var r = n(0),
        i = n.n(r),
        o = n(1),
        a = n(5),
        s = n(7),
        l = n(9),
        c = n(8),
        u = n(6),
        f = n.n(u);
      function d(t, e) {
        return e(t);
      }
      function p(t, e) {
        return t.reduce(function (t, n) {
          return n ? ((t[d(n, e)] = !0), t) : t;
        }, {});
      }
      function m(t, e, n, r, i, o, a, s) {
        var l,
          c = "function" == typeof t ? t.options : t;
        if (
          (e && ((c.render = e), (c.staticRenderFns = n), (c._compiled = !0)),
          r && (c.functional = !0),
          o && (c._scopeId = "data-v-" + o),
          a
            ? ((l = function (t) {
                (t =
                  t ||
                  (this.$vnode && this.$vnode.ssrContext) ||
                  (this.parent &&
                    this.parent.$vnode &&
                    this.parent.$vnode.ssrContext)) ||
                  "undefined" == typeof __VUE_SSR_CONTEXT__ ||
                  (t = __VUE_SSR_CONTEXT__),
                  i && i.call(this, t),
                  t &&
                    t._registeredComponents &&
                    t._registeredComponents.add(a);
              }),
              (c._ssrRegister = l))
            : i &&
              (l = s
                ? function () {
                    i.call(
                      this,
                      (c.functional ? this.parent : this).$root.$options
                        .shadowRoot
                    );
                  }
                : i),
          l)
        )
          if (c.functional) {
            c._injectStyles = l;
            var u = c.render;
            c.render = function (t, e) {
              return l.call(e), u(t, e);
            };
          } else {
            var f = c.beforeCreate;
            c.beforeCreate = f ? [].concat(f, l) : [l];
          }
        return { exports: t, options: c };
      }
      var h = m(
        {
          name: "SearchableList",
          props: {
            listItems: {
              type: Array,
              default: function () {
                return [];
              },
              required: !0,
            },
            selectedListItems: {
              type: Array,
              default: function () {
                return [];
              },
            },
            highlightItems: {
              type: Array,
              default: function () {
                return [];
              },
            },
            placeholderText: { type: String, default: "Search" },
            displayProperty: {
              type: Function,
              default: function (t) {
                return t;
              },
            },
            valueProperty: {
              type: Function,
              default: function (t) {
                return t;
              },
            },
            groupProperty: { type: Function, default: null },
            noOptionsText: { type: String, default: "No options" },
            searchInputClass: { type: String, default: "" },
            noItemsFoundText: { type: String, default: "No options found" },
            highlightDiff: { type: Boolean, default: !1 },
            highlightClass: { type: String, default: "" },
            hideSearchInput: { type: Boolean, default: !1 },
            disabled: { type: Boolean, default: !1 },
            readOnly: { type: Boolean, default: !1 },
          },
          data: function () {
            return { searchText: "" };
          },
          computed: {
            noItems: function () {
              return (
                (this.selectedListItems.length &&
                  this.availableItems.length < 1) ||
                !this.listItems ||
                this.listItems.length < 1
              );
            },
            noFilteredItems: function () {
              return (
                this.availableItems &&
                this.availableItems.length > 0 &&
                (!this.filteredListItems || this.filteredListItems.length < 1)
              );
            },
            debouncedSearchText: {
              get: function () {
                return this.searchText;
              },
              set: (function (t) {
                var e,
                  n =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : 250;
                function r() {
                  for (
                    var r = this, i = arguments.length, o = new Array(i), a = 0;
                    a < i;
                    a++
                  )
                    o[a] = arguments[a];
                  var s = o;
                  clearTimeout(e),
                    (e = null),
                    (e = setTimeout(function () {
                      (e = null), t.apply(r, s);
                    }, n));
                }
                return r;
              })(function (t) {
                this.searchText = t;
              }, 500),
            },
            highlightedItemsMap: function () {
              return p(this.highlightItems, this.valueProperty);
            },
            availableItems: function () {
              var t,
                e = this,
                n = p(this.selectedListItems, this.valueProperty),
                r = i()(this.listItems);
              return (
                (t = n),
                0 !== Object.keys(t).length &&
                  (r = this.listItems.filter(function (t) {
                    var r = d(t, e.valueProperty);
                    return !n[r];
                  })),
                r.sort(function (t, n) {
                  var r = e.getOptionDisplay(t),
                    i = e.getOptionDisplay(n);
                  return r.localeCompare(i);
                })
              );
            },
            groupedItems: function () {
              var t = this;
              if (f()(this.groupProperty)) {
                var e = {};
                return (
                  this.filteredListItems.forEach(function (n) {
                    var r,
                      i = t.groupProperty(n);
                    (e[i] =
                      null !== (r = e[i]) && void 0 !== r
                        ? r
                        : { options: [] }),
                      e[i].options.push(n);
                  }),
                  e
                );
              }
              return {};
            },
            sortedGroupKeys: function () {
              return Object.keys(this.groupedItems).sort();
            },
            filteredListItems: function () {
              return null != this.searchText && "" !== this.searchText
                ? this.availableItems.filter(
                    function (t) {
                      if (t) {
                        var e = this.getOptionDisplay(t);
                        return (
                          e &&
                          e
                            .toLowerCase()
                            .includes(this.searchText.toLowerCase())
                        );
                      }
                    }.bind(this)
                  )
                : this.availableItems.filter(function (t) {
                    return Boolean(t);
                  });
            },
          },
          methods: {
            getOptionDisplay: function (t) {
              return this.displayProperty(t) || "";
            },
            getValue: function (t) {
              return d(t, this.valueProperty);
            },
            clickOption: function (t) {
              this.disabled || this.readOnly || this.$emit("onClickOption", t);
            },
          },
        },
        function () {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e;
          return n("div", { staticClass: "msl-searchable-list" }, [
            t.hideSearchInput
              ? t._e()
              : n("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: t.debouncedSearchText,
                      expression: "debouncedSearchText",
                    },
                  ],
                  staticClass: "msl-search-list-input",
                  class: t.searchInputClass,
                  attrs: { placeholder: t.placeholderText },
                  domProps: { value: t.debouncedSearchText },
                  on: {
                    input: function (e) {
                      e.target.composing ||
                        (t.debouncedSearchText = e.target.value);
                    },
                  },
                }),
            t._v(" "),
            n(
              "div",
              {
                staticClass: "msl-searchable-list__items",
                class: {
                  "msl-searchable-list__items--disabled":
                    t.disabled || t.readOnly,
                },
              },
              [
                t.groupProperty
                  ? t._e()
                  : n(
                      "div",
                      t._l(t.filteredListItems, function (e, r) {
                        var i;
                        return n(
                          "div",
                          {
                            key: r,
                            staticClass: "msl-searchable-list__item",
                            class:
                              ((i = {
                                "msl-searchable-list__item--disabled":
                                  (e && e.disabled) || t.disabled || t.readOnly,
                              }),
                              (i[t.highlightClass] =
                                t.highlightDiff &&
                                t.highlightedItemsMap[t.getValue(e)]),
                              i),
                            on: {
                              click: function (n) {
                                return t.clickOption(e);
                              },
                            },
                          },
                          [
                            t._v(
                              "\n        " +
                                t._s(t.getOptionDisplay(e)) +
                                "\n      "
                            ),
                          ]
                        );
                      }),
                      0
                    ),
                t._v(" "),
                t.groupProperty
                  ? n(
                      "div",
                      t._l(t.sortedGroupKeys, function (e) {
                        return n(
                          "div",
                          { key: e },
                          [
                            n(
                              "div",
                              { staticClass: "msl-searchable-list__group" },
                              [t._v("\n          " + t._s(e) + "\n        ")]
                            ),
                            t._v(" "),
                            t._l(t.groupedItems[e].options, function (r) {
                              var i;
                              return n(
                                "div",
                                {
                                  key: e + "-" + t.valueProperty(r),
                                  staticClass:
                                    "msl-searchable-list__item msl-searchable-list__item--grouped",
                                  class:
                                    ((i = {
                                      "msl-searchable-list__item--disabled":
                                        (r && r.disabled) ||
                                        t.disabled ||
                                        t.readOnly,
                                    }),
                                    (i[t.highlightClass] =
                                      t.highlightDiff &&
                                      t.highlightedItemsMap[t.getValue(r)]),
                                    i),
                                  on: {
                                    click: function (e) {
                                      return t.clickOption(r);
                                    },
                                  },
                                },
                                [
                                  t._v(
                                    "\n          " +
                                      t._s(t.getOptionDisplay(r)) +
                                      "\n        "
                                  ),
                                ]
                              );
                            }),
                          ],
                          2
                        );
                      }),
                      0
                    )
                  : t._e(),
                t._v(" "),
                t.noItems
                  ? n("div", { staticClass: "msl-searchable-list__no-item" }, [
                      t._v("\n      " + t._s(t.noOptionsText) + "\n    "),
                    ])
                  : t._e(),
                t._v(" "),
                t.noFilteredItems
                  ? n("div", { staticClass: "msl-searchable-list__no-item" }, [
                      t._v("\n      " + t._s(t.noItemsFoundText) + "\n    "),
                    ])
                  : t._e(),
              ]
            ),
          ]);
        },
        [],
        !1,
        null,
        null,
        null
      ).exports;
      function y(t, e, n) {
        if (e) {
          var r = [];
          return (
            t.forEach(function (t) {
              var i = n.find(function (n) {
                return "string" == typeof e
                  ? n[e] === t
                  : "function" == typeof e
                  ? e(n) === t
                  : n;
              });
              r.push(i);
            }),
            r
          );
        }
        return i()(t);
      }
      function g(t, e) {
        return "string" == typeof t ? e[t] : "function" == typeof t ? t(e) : e;
      }
      function v(t, e, n) {
        return t.findIndex(function (t) {
          return n ? t && e && t === g(n, e) : t === e;
        });
      }
      o.c.add(s.faExchangeAlt, c.faAngleDoubleLeft, l.faAngleDoubleRight);
      var b = {
          name: "MultiSelect",
          components: { SearchableList: h, FontAwesomeIcon: a.a },
          model: { prop: "value" },
          props: {
            value: {
              type: Array,
              default: function () {
                return [];
              },
            },
            options: {
              type: Array,
              default: function () {
                return [];
              },
            },
            searchOptionsPlaceholder: {
              type: String,
              default: function () {
                return "Search";
              },
            },
            selectedOptionsPlaceholder: {
              type: String,
              default: function () {
                return "Search";
              },
            },
            reduceDisplayProperty: {
              type: Function,
              default: function (t) {
                return t;
              },
            },
            reduceValueProperty: {
              type: Function,
              default: function (t) {
                return t;
              },
            },
            reduceGroupProperty: { type: Function, default: null },
            noOptionsText: { type: String, default: "" },
            selectedNoOptionsText: { type: String, default: "Select" },
            noOptionsFoundText: { type: String, default: "No options found" },
            noSelectedOptionsFoundText: {
              type: String,
              default: "No options found",
            },
            showSelectAllButtons: { type: Boolean, default: !0 },
            searchInputClass: { type: String, default: "" },
            highlightDiff: { type: Boolean, default: !1 },
            highlightRemovedClass: {
              type: String,
              default: "msl-searchable-list__item--removed",
            },
            highlightAddedClass: {
              type: String,
              default: "msl-searchable-list__item--added",
            },
            hideSearchInputs: { type: Boolean, default: !1 },
            disabled: { type: Boolean, default: !1 },
            readOnly: { type: Boolean, default: !1 },
          },
          data: function () {
            return {
              selectedItems: y(
                this.value,
                this.reduceValueProperty,
                this.options
              ),
              originalValueCopy: [],
              newlyRemovedItems: [],
              newlyAddedItems: [],
            };
          },
          computed: {
            availableOptions: function () {
              var t = this;
              return this.value && this.value.length
                ? this.options.filter(function (e) {
                    return t.reduceValueProperty
                      ? t.value.indexOf(g(t.reduceValueProperty, e)) < 0
                      : !t.value.find(function (t) {
                          return t === e;
                        });
                  })
                : i()(this.options);
            },
          },
          watch: {
            value: {
              immediate: !0,
              handler: function (t, e) {
                null != t &&
                  t.length &&
                  !e &&
                  this.highlightDiff &&
                  (this.originalValueCopy = i()(t)),
                  (this.selectedItems = y(
                    t,
                    this.reduceValueProperty,
                    this.options
                  ));
              },
            },
          },
          methods: {
            onOptionSelect: function (t) {
              this.selectedItems.push(t);
              var e = [].concat(i()(this.value), [
                g(this.reduceValueProperty, t),
              ]);
              this.addToNewlyAddedItems([t]),
                this.removeFromNewlyRemovedItems([t]),
                this.emitChangedItems(),
                this.$emit("input", e),
                this.$emit("change", e);
            },
            onOptionRemove: function (t) {
              var e = this,
                n = i()(this.value),
                r = this.selectedItems,
                o = v(n, t, this.reduceValueProperty);
              n.splice(o, 1),
                (o = r.findIndex(function (n) {
                  return e.reduceValueProperty
                    ? n &&
                        t &&
                        g(e.reduceValueProperty, n) ===
                          g(e.reduceValueProperty, t)
                    : n === t;
                }));
              var a = r.splice(o, 1);
              this.addToNewlyRemovedItems(a),
                this.removeFromNewlyAddedItems([t]),
                (this.selectedItems = i()(r)),
                this.emitChangedItems(),
                this.$emit("input", n),
                this.$emit("change", n);
            },
            onSelectAllOptions: function () {
              if (!this.disabled && !this.readOnly) {
                this.selectedItems = i()(this.options);
                var t,
                  e,
                  n,
                  r =
                    ((t = this.reduceValueProperty),
                    (e = this.options),
                    (n = []),
                    e.forEach(function (e) {
                      n.push(g(t, e));
                    }),
                    n);
                this.$emit("input", r),
                  this.$emit("change", r),
                  this.addToNewlyAddedItems(this.selectedItems),
                  this.addToNewlyRemovedItems([], !0),
                  this.emitChangedItems();
              }
            },
            onUnselectAllOptions: function () {
              this.disabled ||
                this.readOnly ||
                (this.addToNewlyRemovedItems(this.selectedItems),
                this.addToNewlyAddedItems([], !0),
                (this.selectedItems = []),
                this.emitChangedItems(),
                this.$emit("input", []),
                this.$emit("change", []));
            },
            addToNewlyAddedItems: function (t) {
              var e = this,
                n =
                  arguments.length > 1 &&
                  void 0 !== arguments[1] &&
                  arguments[1];
              n && (this.newlyAddedItems = []),
                t.forEach(function (t) {
                  -1 === v(e.originalValueCopy, t, e.reduceValueProperty) &&
                    e.newlyAddedItems.push(t);
                });
            },
            addToNewlyRemovedItems: function (t) {
              var e = this,
                n =
                  arguments.length > 1 &&
                  void 0 !== arguments[1] &&
                  arguments[1];
              n && (this.newlyRemovedItems = []),
                t.forEach(function (t) {
                  v(e.originalValueCopy, t, e.reduceValueProperty) > -1 &&
                    e.newlyRemovedItems.push(t);
                });
            },
            removeFromNewlyRemovedItems: function () {
              var t = this,
                e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : [];
              e.forEach(function (e) {
                var n = t.newlyRemovedItems.findIndex(function (t) {
                  return t === e;
                });
                n > -1 && t.newlyRemovedItems.splice(n, 1);
              });
            },
            removeFromNewlyAddedItems: function () {
              var t = this,
                e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : [];
              e.forEach(function (e) {
                var n = t.newlyAddedItems.findIndex(function (t) {
                  return t === e;
                });
                n > -1 && t.newlyAddedItems.splice(n, 1);
              });
            },
            emitChangedItems: function () {
              var t = this;
              this.$emit("diff-changed", {
                newSelected: this.newlyAddedItems.map(function (e) {
                  return t.reduceValueProperty(e);
                }),
                newUnselected: this.newlyRemovedItems.map(function (e) {
                  return t.reduceValueProperty(e);
                }),
              });
            },
            resetOriginalCopy: function () {
              var t = this;
              setTimeout(function () {
                (t.originalValueCopy = i()(t.value)),
                  (t.newlyAddedItems = []),
                  (t.newlyRemovedItems = []),
                  t.emitChangedItems();
              }, 0);
            },
          },
        },
        w =
          (n(17),
          m(
            b,
            function () {
              var t = this,
                e = t.$createElement,
                n = t._self._c || e;
              return n(
                "div",
                { staticClass: "msl-multi-select" },
                [
                  t.readOnly
                    ? t._e()
                    : n("SearchableList", {
                        staticClass: "msl-multi-select__list",
                        attrs: {
                          "list-items": t.availableOptions,
                          "no-options-text": t.noOptionsText,
                          "no-items-found-text": t.noOptionsFoundText,
                          "selected-list-items": t.selectedItems,
                          "display-property": t.reduceDisplayProperty,
                          "value-property": t.reduceValueProperty,
                          "placeholder-text": t.searchOptionsPlaceholder,
                          "search-input-class": t.searchInputClass,
                          "highlight-class": t.highlightRemovedClass,
                          "highlight-items": t.newlyRemovedItems,
                          "highlight-diff": t.highlightDiff,
                          "hide-search-input": t.hideSearchInputs,
                          disabled: t.disabled,
                          groupProperty: t.reduceGroupProperty,
                        },
                        on: { onClickOption: t.onOptionSelect },
                      }),
                  t._v(" "),
                  t.readOnly
                    ? t._e()
                    : n(
                        "div",
                        { staticClass: "msl-multi-select__actions" },
                        [
                          n(
                            "a",
                            {
                              staticClass:
                                "msl-multi-select__action msl-multi-select__action-select-all",
                              class: {
                                invisible: !t.showSelectAllButtons,
                                "msl-multi-select__action--disabled":
                                  t.disabled,
                              },
                              on: { click: t.onSelectAllOptions },
                            },
                            [
                              n("font-awesome-icon", {
                                attrs: { icon: "angle-double-right" },
                              }),
                            ],
                            1
                          ),
                          t._v(" "),
                          n("font-awesome-icon", {
                            staticClass: "multi-select__action-icon",
                            attrs: { icon: "exchange-alt" },
                          }),
                          t._v(" "),
                          n(
                            "a",
                            {
                              staticClass:
                                "msl-multi-select__action msl-multi-select__action-unselect-all",
                              class: {
                                invisible: !t.showSelectAllButtons,
                                "msl-multi-select__action--disabled":
                                  t.disabled,
                              },
                              on: { click: t.onUnselectAllOptions },
                            },
                            [
                              n("font-awesome-icon", {
                                attrs: { icon: "angle-double-left" },
                              }),
                            ],
                            1
                          ),
                        ],
                        1
                      ),
                  t._v(" "),
                  n("SearchableList", {
                    staticClass:
                      "msl-multi-select__selected msl-multi-select__list",
                    attrs: {
                      "list-items": t.selectedItems,
                      "no-options-text": t.selectedNoOptionsText,
                      "no-items-found-text": t.noSelectedOptionsFoundText,
                      "display-property": t.reduceDisplayProperty,
                      "value-property": t.reduceValueProperty,
                      "placeholder-text": t.selectedOptionsPlaceholder,
                      "search-input-class": t.searchInputClass,
                      "highlight-class": t.highlightAddedClass,
                      "highlight-items": t.newlyAddedItems,
                      "highlight-diff": t.highlightDiff,
                      "hide-search-input": t.hideSearchInputs,
                      disabled: t.disabled,
                      "read-only": t.readOnly,
                      groupProperty: t.reduceGroupProperty,
                    },
                    on: { onClickOption: t.onOptionRemove },
                  }),
                ],
                1
              );
            },
            [],
            !1,
            null,
            null,
            null
          ).exports);
      e.default = w;
    },
  ]);
});
//# sourceMappingURL=vue-multi-select-listbox.js.map
