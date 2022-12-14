"use strict";
Object.defineProperty(exports, "__esModule", { value: !0 });
var aU = require("react/jsx-runtime"),
  g = require("react"),
  m = require("clsx"),
  d = require("antd"),
  n = require("react-icons/ai"),
  o = require("react-icons/bs"),
  p = require("react-icons/fa"),
  q = require("react-icons/fi"),
  r = require("react-icons/md"),
  s = require("styled-components"),
  t = require("antd/lib/layout/layout"),
  u = require("antd/lib/menu/SubMenu"),
  v = require("antd/lib/layout/Sider"),
  w = require("react-select"),
  x = require("dayjs"),
  y = require("rc-picker/lib/generate/dayjs"),
  z = require("antd/lib/date-picker/generatePicker"),
  A = require("react-slick"),
  aV = require("rc-util/lib/React/render"),
  aW = require("@lexical/react/LexicalComposer"),
  h = require("@lexical/code"),
  i = require("@lexical/link"),
  j = require("@lexical/list"),
  B = require("@lexical/mark"),
  C = require("@lexical/overflow"),
  D = require("@lexical/react/LexicalHorizontalRuleNode"),
  k = require("@lexical/rich-text"),
  f = require("@lexical/table"),
  aX = require("@lexical/react/LexicalComposerContext"),
  aY = require("@lexical/react/useLexicalNodeSelection"),
  aZ = require("@lexical/utils"),
  E = require("lexical"),
  a$ = require("@lexical/react/LexicalRichTextPlugin"),
  a_ = require("@lexical/react/LexicalContentEditable"),
  a0 = require("@tanstack/react-table"),
  a1 = require("@dnd-kit/sortable"),
  a2 = require("@dnd-kit/core"),
  a3 = require("@dnd-kit/modifiers"),
  a4 = require("@dnd-kit/utilities"),
  F = require("react-otp-input");
function c(a) {
  return a && "object" == typeof a && "default" in a ? a : { default: a };
}
function e(a) {
  if (a && a.__esModule) return a;
  var b = Object.create(null);
  return (
    a &&
      Object.keys(a).forEach(function (c) {
        if ("default" !== c) {
          var d = Object.getOwnPropertyDescriptor(a, c);
          Object.defineProperty(
            b,
            c,
            d.get
              ? d
              : {
                  enumerable: !0,
                  get: function () {
                    return a[c];
                  },
                }
          );
        }
      }),
    (b.default = a),
    Object.freeze(b)
  );
}
var a = c(g),
  a5 = c(m),
  a6 = e(n),
  a7 = e(o),
  a8 = e(p),
  a9 = e(q),
  ba = e(r),
  b = c(s),
  bb = c(t),
  bc = c(u),
  bd = c(v),
  be = c(w),
  bf = c(x),
  G = c(y),
  H = c(z),
  bg = c(A),
  bh = c(F);
function bi({ className: b = "", responsiveVisibility: a = [] }) {
  return {
    classNames: a5.default(
      b,
      3 === a.length
        ? ""
        : null == a
        ? void 0
        : a.map((a) => ("string" == typeof a ? `show-${a}` : `show-${a.value}`)).join(" ")
    ),
  };
}
const I = a.default.forwardRef((a, b) => {
  let { children: c, responsiveVisibility: d, className: e, ...f } = a,
    { classNames: g } = bi({ className: e, responsiveVisibility: d });
  return aU.jsx("div", { ...f, className: g, ref: b, children: c });
});
function J(b, c = {}) {
  return a.default.createElement(
    b in a6 ? a6[b] : b in a7 ? a7[b] : b in a9 ? a9[b] : b in a8 ? a8[b] : b in ba ? ba[b] : "",
    c
  );
}
function K(a) {
  throw Error(`Should not reach with ${a}`);
}
function L(a) {
  switch (a) {
    case exports.IconSet.Antd:
      return Object.entries(a6);
    case exports.IconSet.Bootstrap:
      return Object.entries(a7);
    case exports.IconSet.Feather:
      return Object.entries(a9);
    case exports.IconSet.FontAwesome:
      return Object.entries(a8);
    case exports.IconSet.Material:
      return Object.entries(ba);
    case exports.IconSet.All:
      return [
        ...Object.entries(a6),
        ...Object.entries(a7),
        ...Object.entries(a9),
        ...Object.entries(a8),
        ...Object.entries(ba),
      ];
    default:
      return K(a);
  }
}
(exports.IconSet = void 0),
  (function (a) {
    (a.All = "all"),
      (a.Antd = "antd"),
      (a.Bootstrap = "bootstrap"),
      (a.Feather = "feather"),
      (a.FontAwesome = "font-awesome"),
      (a.Material = "material");
  })(exports.IconSet || (exports.IconSet = {}));
const M = a.default.forwardRef((a, b) => {
    let { className: c, style: d, iconName: e, color: f, size: g, responsiveVisibility: h } = a,
      { classNames: i } = bi({ className: c, responsiveVisibility: h });
    return aU.jsx("span", {
      style: { display: "inline-block", verticalAlign: "middle", ...d },
      className: i,
      ref: b,
      children: J(e, { color: f, size: g }),
    });
  }),
  bj = b.default.span`
  margin-left: ${(a) => a.hasIcon && "8px"};
`,
  N = a.default.forwardRef((b, c) => {
    let {
        buttonType: e = "primary",
        responsiveVisibility: f,
        iconProps: h,
        className: i,
        children: j,
        ...k
      } = b,
      a = g.useMemo(() => {
        if (h) return aU.jsx(M, { ...h });
      }, [h]),
      { classNames: l } = bi({ className: i, responsiveVisibility: f });
    return aU.jsx(d.Button, {
      type: e,
      icon: a,
      ...k,
      className: l,
      ref: c,
      children: aU.jsx(bj, { hasIcon: !!a, children: j }),
    });
  }),
  O = a.default.forwardRef((a, b) => {
    let { children: c, responsiveVisibility: e, className: f, ...g } = a,
      { classNames: h } = bi({ className: f, responsiveVisibility: e });
    return aU.jsx(d.Col, { ...g, className: h, ref: b, children: c });
  }),
  P = a.default.forwardRef((a, b) => {
    let { children: c, responsiveVisibility: d, className: e, ...f } = a,
      { classNames: g } = bi({ className: e, responsiveVisibility: d });
    return aU.jsx(t.Content, {
      ...f,
      className: g,
      prefixCls: "jitera-layout-content",
      ref: b,
      children: c,
    });
  }),
  Q = a.default.forwardRef((a, b) => {
    let { children: c, style: d, responsiveVisibility: e, className: f, ...g } = a,
      { classNames: h } = bi({ className: f, responsiveVisibility: e });
    return aU.jsx("footer", { ...g, className: h, style: d, ref: b, children: c });
  }),
  R = a.default.forwardRef((a, b) => {
    let { children: c, responsiveVisibility: d, className: e, ...f } = a,
      { classNames: g } = bi({ className: e, responsiveVisibility: d });
    return aU.jsx("div", { ...f, className: g, ref: b, children: c });
  }),
  S = R,
  T = a.default.forwardRef((a, b) => {
    let { children: c, responsiveVisibility: d, className: e, ...f } = a,
      { classNames: g } = bi({ className: e, responsiveVisibility: d });
    return aU.jsx(t.Header, {
      ...f,
      prefixCls: "jitera-layout-header",
      className: g,
      ref: b,
      children: c,
    });
  }),
  U = a.default.forwardRef((a, b) => {
    let { source: c, alt: d = "", responsiveVisibility: e, className: f, ...g } = a,
      { classNames: h } = bi({ className: f, responsiveVisibility: e });
    return aU.jsx("img", { ref: b, src: c, className: h, ...g, alt: d });
  });
(exports.TextTypeEnum = void 0),
  (function (a) {
    (a.Link = "Link"),
      (a.Text = "Text"),
      (a.H1 = "H1"),
      (a.H2 = "H2"),
      (a.H3 = "H3"),
      (a.H4 = "H4"),
      (a.H5 = "H5"),
      (a.H6 = "H6"),
      (a.B = "B"),
      (a.I = "I"),
      (a.Em = "Em"),
      (a.U = "U"),
      (a.S = "S"),
      (a.Del = "Del"),
      (a.Pre = "Pre"),
      (a.Code = "Code"),
      (a.Blockquote = "Blockquote"),
      (a.Figcaption = "Figcaption"),
      (a.Cite = "Cite");
  })(exports.TextTypeEnum || (exports.TextTypeEnum = {}));
const V = a.default.forwardRef(({ children: a, ...b }, c) =>
    aU.jsx("div", { ...b, ref: c, children: a })
  ),
  W = a.default.forwardRef(({ children: a, ...b }, c) =>
    aU.jsx("a", { ...b, ref: c, children: a })
  ),
  X = a.default.forwardRef(({ children: a, ...b }, c) =>
    aU.jsx("h1", { ...b, ref: c, children: a })
  ),
  Y = a.default.forwardRef(({ children: a, ...b }, c) =>
    aU.jsx("h2", { ...b, ref: c, children: a })
  ),
  Z = a.default.forwardRef(({ children: a, ...b }, c) =>
    aU.jsx("h3", { ...b, ref: c, children: a })
  ),
  $ = a.default.forwardRef(({ children: a, ...b }, c) =>
    aU.jsx("h4", { ...b, ref: c, children: a })
  ),
  _ = a.default.forwardRef(({ children: a, ...b }, c) =>
    aU.jsx("h5", { ...b, ref: c, children: a })
  ),
  aa = a.default.forwardRef(({ children: a, ...b }, c) =>
    aU.jsx("h6", { ...b, ref: c, children: a })
  ),
  ab = a.default.forwardRef(({ children: a, ...b }, c) =>
    aU.jsx("b", { ...b, ref: c, children: a })
  ),
  ac = a.default.forwardRef(({ children: a, ...b }, c) =>
    aU.jsx("i", { ...b, ref: c, children: a })
  ),
  ad = a.default.forwardRef(({ children: a, ...b }, c) =>
    aU.jsx("em", { ...b, ref: c, children: a })
  ),
  ae = a.default.forwardRef(({ children: a, ...b }, c) =>
    aU.jsx("u", { ...b, ref: c, children: a })
  ),
  af = a.default.forwardRef(({ children: a, ...b }, c) =>
    aU.jsx("s", { ...b, ref: c, children: a })
  ),
  ag = a.default.forwardRef(({ children: a, ...b }, c) =>
    aU.jsx("del", { ...b, ref: c, children: a })
  ),
  ah = a.default.forwardRef(({ children: a, ...b }, c) =>
    aU.jsx("pre", { ...b, ref: c, children: a })
  ),
  ai = a.default.forwardRef(({ children: a, ...b }, c) =>
    aU.jsx("code", { ...b, ref: c, children: a })
  ),
  aj = a.default.forwardRef(({ children: a, ...b }, c) =>
    aU.jsx("blockquote", { ...b, ref: c, children: a })
  ),
  ak = a.default.forwardRef(({ children: a, ...b }, c) =>
    aU.jsx("figcaption", { ...b, ref: c, children: a })
  ),
  al = a.default.forwardRef(({ children: a, ...b }, c) =>
    aU.jsx("cite", { ...b, ref: c, children: a })
  ),
  bk = {
    [exports.TextTypeEnum.Text]: V,
    [exports.TextTypeEnum.Link]: W,
    [exports.TextTypeEnum.H1]: X,
    [exports.TextTypeEnum.H2]: Y,
    [exports.TextTypeEnum.H3]: Z,
    [exports.TextTypeEnum.H4]: $,
    [exports.TextTypeEnum.H5]: _,
    [exports.TextTypeEnum.H6]: aa,
    [exports.TextTypeEnum.B]: ab,
    [exports.TextTypeEnum.I]: ac,
    [exports.TextTypeEnum.Em]: ad,
    [exports.TextTypeEnum.U]: ae,
    [exports.TextTypeEnum.S]: af,
    [exports.TextTypeEnum.Del]: ag,
    [exports.TextTypeEnum.Pre]: ah,
    [exports.TextTypeEnum.Code]: ai,
    [exports.TextTypeEnum.Blockquote]: aj,
    [exports.TextTypeEnum.Figcaption]: ak,
    [exports.TextTypeEnum.Cite]: al,
  },
  am = a.default.forwardRef((a, b) => {
    let {
        textType: c = exports.TextTypeEnum.Text,
        responsiveVisibility: d,
        className: e,
        ...f
      } = a,
      g = bk[c],
      { classNames: h } = bi({ className: e, responsiveVisibility: d });
    return aU.jsx(g, { ...f, className: h, ref: b });
  }),
  bl = (a) => "object" == typeof a,
  bm = (...a) => a.filter((a) => !bl(a)).join(" "),
  bn = "mccb30e4f2_input";
var bo = { input: "mccb30e4f2_input" };
const an = a.default.forwardRef((c, e) => {
    let {
        style: f = {},
        inputStyle: h = {},
        errorMessage: a,
        isPasswordField: i,
        responsiveVisibility: j,
        isPreview: k,
        className: b,
        prefixIconProps: l,
        suffixIconProps: m,
        ...n
      } = c,
      o = g.useMemo(() => (i ? d.Input.Password : d.Input), [i]),
      p = g.useMemo(
        () => (bl(h) ? { style: h, className: bo.input } : { className: bm(bo.input, h) }),
        [h]
      ),
      q = g.useMemo(() => {
        if (l) return aU.jsx(M, { ...l });
      }, [l]),
      r = g.useMemo(() => {
        if (m) return aU.jsx(M, { ...m });
      }, [m]),
      { classNames: s } = bi({ className: b, responsiveVisibility: j });
    return aU.jsxs("div", {
      style: f,
      className: a5.default(bm(bo.container, b || ""), s),
      ref: e,
      children: [
        aU.jsx(o, { ...p, disabled: k, prefix: q, suffix: r, ...n }),
        !!a && aU.jsx(am, { type: "danger", children: a }),
      ],
    });
  }),
  ao = a.default.forwardRef((a, b) => {
    let { children: c, responsiveVisibility: d, className: e, ...f } = a,
      { classNames: g } = bi({ className: e, responsiveVisibility: d });
    return aU.jsx(bb.default, {
      ...f,
      prefixCls: "jitera-layout",
      className: g,
      ref: b,
      children: c,
    });
  }),
  bp = b.default.div`
  .jitera-menu-item-disabled,
  .jitera-menu-submenu-disabled {
    ${(a) => (a.isPreview ? "color: unset !important; cursor: unset;" : "")}
  }
`,
  bq = b.default.div`
  display: flex;
  justify-content: center;
  align-items: center;
`,
  br = b.default.div`
  width: 100%;
`,
  bs = b.default.div`
  display: flex;
`,
  bt = b.default.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: 1;
`,
  ap = a.default.forwardRef((b, c) => {
    let { isPreview: a, className: e, responsiveVisibility: f, ...g } = b,
      { classNames: h } = bi({ className: e, responsiveVisibility: f });
    return aU.jsx(bp, {
      isPreview: a,
      className: h,
      ref: c,
      children: aU.jsx(d.Menu, { disabled: a, ...g, prefixCls: "jitera-menu" }),
    });
  });
(exports.MenuIconPosition = void 0),
  (function (a) {
    (a.Left = "left"), (a.Right = "right"), (a.Top = "top"), (a.Bottom = "bottom");
  })(exports.MenuIconPosition || (exports.MenuIconPosition = {}));
const { Item: bu } = d.Menu,
  aq = a.default.forwardRef(
    (
      {
        label: a,
        iconProps: b,
        iconPosition: c,
        spaceBetween: d,
        responsiveVisibility: e,
        className: f,
        ...g
      },
      h
    ) => {
      let { classNames: i } = bi({ className: f, responsiveVisibility: e });
      return aU.jsx(bq, {
        className: i,
        ref: h,
        children: aU.jsx(br, {
          children: aU.jsx(bu, { ...g, children: b && c && d ? bv(b, c, d, a) : a }),
        }),
      });
    }
  );
function bv(a, d, b, c) {
  switch (d) {
    case exports.MenuIconPosition.Left:
      return aU.jsxs(bs, { style: { gap: b }, children: [aU.jsx(M, { ...a }), c] });
    case exports.MenuIconPosition.Right:
      return aU.jsxs(bs, { style: { gap: b }, children: [c, aU.jsx(M, { ...a })] });
    case exports.MenuIconPosition.Top:
      return aU.jsxs(bt, { style: { gap: b }, children: [aU.jsx(M, { ...a }), c] });
    case exports.MenuIconPosition.Bottom:
      return aU.jsxs(bt, { style: { gap: b }, children: [c, aU.jsx(M, { ...a })] });
    default:
      return K(d);
  }
}
const ar = a.default.forwardRef((a, b) =>
    aU.jsx("ul", { ref: b, children: aU.jsx(bc.default, { ...a }) })
  ),
  bw = b.default.div`
  width: 100%;
  ${(a) => `min-height: ${a.minHeight};`}
  background-color: #fff;
  ${(a) => (a.isPreview ? "position: relative" : void 0)}
`,
  as = a.default.forwardRef(({ ...b }, c) => {
    let { children: d, isPreview: a, responsiveVisibility: e, className: f, ...g } = b,
      h = a ? "100%" : "100vh",
      { classNames: i } = bi({ className: f, responsiveVisibility: e });
    return aU.jsx(bw, {
      className: a5.default(a ? "preview-page" : void 0, i),
      minHeight: h,
      isPreview: a,
      ...g,
      ref: c,
      children: d,
    });
  }),
  at = a.default.forwardRef((a, b) => {
    let { children: c, responsiveVisibility: e, className: f, ...g } = a,
      { classNames: h } = bi({ className: f, responsiveVisibility: e });
    return aU.jsx(d.Row, { ...g, className: h, ref: b, children: c });
  }),
  au = a.default.forwardRef((a, b) => {
    let { children: c, responsiveVisibility: d, className: e, ...f } = a,
      { classNames: g } = bi({ className: e, responsiveVisibility: d });
    return aU.jsx(bd.default, {
      ...f,
      className: g,
      prefixCls: "jitera-layout-sider",
      ref: b,
      children: c,
    });
  }),
  av = a.default.forwardRef((a, b) => {
    let {
        isPreview: c,
        responsiveVisibility: d,
        className: e,
        styles: f,
        data: h,
        placeholderStyle: i,
        containerStyle: j,
        dropdownStyle: k,
        optionStyle: l,
        iconProps: m,
        ...n
      } = a,
      o = g.useMemo(() => {
        let a = f || {};
        return (
          i && (a.placeholder = (a) => ({ ...a, ...i })),
          j && (a.control = (a) => ({ ...a, ...j })),
          k && (a.menu = (a) => ({ ...a, ...k })),
          l && (a.option = (a) => ({ ...a, ...l })),
          a
        );
      }, [f, i, j, k, l]),
      p = g.useMemo(() => {
        if (m)
          return {
            DropdownIndicator: (a) =>
              aU.jsx(w.components.DropdownIndicator, { ...a, children: aU.jsx(M, { ...m }) }),
          };
      }, [m]),
      { classNames: q } = bi({ className: e, responsiveVisibility: d });
    return aU.jsx(be.default, {
      className: q,
      components: p,
      isDisabled: c,
      styles: o,
      options: h,
      ...n,
      ref: b,
    });
  }),
  bx = "mc6f30f899_inner";
var by = { inner: "mc6f30f899_inner" };
const aw = a.default.forwardRef((a, b) => {
  let { style: c, responsiveVisibility: e, className: f, ...g } = a,
    { classNames: h } = bi({ className: f, responsiveVisibility: e });
  return aU.jsx("div", {
    style: c,
    className: h,
    ref: b,
    children: aU.jsx(d.List, { className: by.inner, ...g }),
  });
});
function bz(a) {
  return ("string" == typeof a && ["wrap", "wrap-reverse"].includes(a)) || !0 === a;
}
const bA = b.default.div`
  .jitera-radio-inner {
    border-color: ${(a) => a.inactiveColor || a.theme.primaryColor};
  }
  .jitera-radio-wrapper:hover .jitera-radio,
  .jitera-radio:hover .jitera-radio-inner,
  .jitera-radio-input:focus + .jitera-radio-inner {
    border-color: ${(a) => a.activeColor || a.theme.primaryColor};
  }
  .jitera-radio-checked::after {
    border-color: ${(a) => a.activeColor || a.theme.primaryColor};
  }
  .jitera-radio-checked .jitera-radio-inner {
    border-color: ${(a) => a.activeColor || a.theme.primaryColor};
  }
  .jitera-radio-inner::after {
    background-color: ${(a) => a.activeColor || a.theme.primaryColor};
  }
  .jitera-radio-wrapper span:last-child {
    ${(a) => a.labelStyle}
  }
`,
  ax = a.default.forwardRef((b, c) => {
    let {
        data: a,
        spaceProps: e,
        isPreview: f,
        responsiveVisibility: h,
        className: i,
        activeColor: j,
        inactiveColor: k,
        labelStyle: l,
        direction: m,
        containerStyle: n = {},
        wrap: o = "wrap",
        ...p
      } = b,
      q = g.useMemo(() => ({ ...e, wrap: bz(o) }), [o, e]),
      r = g.useMemo(() => (bl(n) ? { style: n } : { className: bm(n) }), [n]),
      { classNames: s } = bi({ className: i, responsiveVisibility: h });
    return aU.jsx(bA, {
      className: s,
      activeColor: j,
      inactiveColor: k,
      labelStyle: l,
      ...r,
      children: aU.jsx(d.Radio.Group, {
        disabled: f,
        ...p,
        ref: c,
        children: aU.jsx(d.Space, {
          direction: m,
          ...q,
          children:
            null == a
              ? void 0
              : a.map((a) => aU.jsx(d.Radio, { value: a.value, ...a, children: a.label }, a.value)),
        }),
      }),
    });
  }),
  bB = "mc68e5c85d_textarea";
var bC = { textarea: "mc68e5c85d_textarea" };
const ay = a.default.forwardRef((c, e) => {
    let {
        style: f = {},
        inputStyle: h = {},
        errorMessage: a,
        responsiveVisibility: i,
        isPreview: j,
        className: b,
        ...k
      } = c,
      l = g.useMemo(
        () => (bl(h) ? { style: h, className: bC.textarea } : { className: bm(bC.textarea, h) }),
        [h]
      ),
      { classNames: m } = bi({ className: b, responsiveVisibility: i });
    return aU.jsxs("div", {
      style: f,
      className: a5.default(bm(bC.container, b || ""), m),
      ref: e,
      children: [
        aU.jsx(d.Input.TextArea, { ...l, disabled: j, ...k }),
        !!a && aU.jsx(am, { type: "danger", children: a }),
      ],
    });
  }),
  bD = b.default.div`
  && {
    .jitera-checkbox-inner {
      border-color: ${(a) => a.inactiveColor || a.theme.primaryColor};
    }
    .jitera-checkbox-wrapper:hover .jitera-checkbox,
    .jitera-checkbox:hover .jitera-checkbox-inner,
    .jitera-checkbox-input:focus + .jitera-checkbox-inner {
      border-color: ${(a) => a.activeColor || a.theme.primaryColor};
    }
    .jitera-checkbox-checked::after {
      border-color: ${(a) => a.activeColor || a.theme.primaryColor};
    }
    .jitera-checkbox-checked .jitera-checkbox-inner {
      border-color: ${(a) => a.activeColor || a.theme.primaryColor};
      background-color: ${(a) => a.activeColor || a.theme.primaryColor};
    }
    .jitera-checkbox-inner::after {
      background-color: ${(a) => a.activeColor || a.theme.primaryColor};
      border-color: ${(a) => a.checkColor || "#fff"};
    }
    .jitera-checkbox-wrapper span:last-child {
      ${(a) => a.labelStyle}
    }
  }
`,
  az = a.default.forwardRef((b, c) => {
    let {
        data: a,
        wrap: e = "wrap",
        spaceProps: f,
        isPreview: h,
        responsiveVisibility: i,
        containerStyle: j = {},
        activeColor: k,
        inactiveColor: l,
        checkColor: m,
        labelStyle: n,
        direction: o,
        className: p,
        ...q
      } = b,
      r = g.useMemo(() => ({ ...f, wrap: bz(e) }), [e, f]),
      s = g.useMemo(() => (bl(j) ? { style: j } : { className: bm(j) }), [j]),
      { classNames: t } = bi({ className: p, responsiveVisibility: i });
    return aU.jsx(bD, {
      activeColor: k,
      inactiveColor: l,
      checkColor: m,
      labelStyle: n,
      ...s,
      className: t,
      children: aU.jsx(d.Checkbox.Group, {
        disabled: h,
        ...q,
        ref: c,
        children: aU.jsx(d.Space, {
          direction: o,
          ...r,
          children:
            null == a ? void 0 : a.map((a) => aU.jsx(d.Checkbox, { ...a, children: a.label })),
        }),
      }),
    });
  }),
  aA = a.default.forwardRef((b, c) => {
    let {
        children: e,
        isPreview: f,
        responsiveVisibility: g,
        errorMessage: a,
        className: h,
        ...i
      } = b,
      { classNames: j } = bi({ className: h, responsiveVisibility: g });
    return aU.jsxs("div", {
      className: j,
      ref: c,
      children: [
        aU.jsx(d.Upload, { disabled: f, listType: "picture", ...i, children: e }),
        !!a && aU.jsx(am, { type: "danger", children: a }),
      ],
    });
  }),
  bE = H.default(G.default);
(exports.PickerEnum = void 0),
  (function (a) {
    (a.TIME = "time"), (a.DATE = "date"), (a.WEEK = "week"), (a.MONTH = "month");
  })(exports.PickerEnum || (exports.PickerEnum = {}));
const aB = a.default.forwardRef((b, c) => {
    let {
        isPreview: d,
        defaultValue: e,
        responsiveVisibility: f,
        picker: h = "date",
        errorMessage: a,
        className: i,
        ...j
      } = b,
      { classNames: k } = bi({ className: i, responsiveVisibility: f }),
      l = g.useMemo(() => ("string" != typeof e && e ? e : bf.default(e)), [e]);
    return aU.jsxs("div", {
      className: k,
      ref: c,
      children: [
        aU.jsx(bE, { disabled: d, picker: h, defaultValue: l, prefixCls: "jitera-picker", ...j }),
        !!a && aU.jsx(am, { type: "danger", style: { display: "block" }, children: a }),
      ],
    });
  }),
  bF = "mca48d82cd_Wrapper";
var bG = { Wrapper: "mca48d82cd_Wrapper" };
(exports.HamburgerDrawerPlacementEnum = void 0),
  (function (a) {
    (a.TOP = "top"), (a.RIGHT = "right"), (a.BOTTOM = "bottom"), (a.LEFT = "left");
  })(exports.HamburgerDrawerPlacementEnum || (exports.HamburgerDrawerPlacementEnum = {}));
const aC = a.default.forwardRef((a, b) => {
    let {
        isPreview: c,
        responsiveVisibility: e,
        buttonProps: f,
        buttonStyle: h,
        drawerTitle: i,
        drawerProps: j,
        headerStyle: k,
        bodyStyle: l,
        iconProps: m,
        children: n,
        className: o,
      } = a,
      [p, y] = g.useState(!1),
      { headerVisible: q, closable: r, ...s } = j || {},
      t = () => {
        y(!0);
      },
      u = () => {
        y(!1);
      },
      v = c
        ? {
            destroyOnClose: !0,
            getContainer: ".preview-page",
            style: { position: "absolute" },
            afterVisibleChange(b) {
              let a = document.querySelector(".jitera-drawer-content");
              a && (a.style.backgroundColor = b ? "#fff" : "transparent");
            },
          }
        : {},
      w = q ? { title: i, closable: r } : { title: void 0, closable: !1 },
      { classNames: x } = bi({ className: o, responsiveVisibility: e });
    return aU.jsxs("div", {
      className: a5.default(bG.Wrapper, x),
      ref: b,
      children: [
        aU.jsx(N, {
          onClick: t,
          style: h,
          ...f,
          children: aU.jsx(M, { iconName: "MdMenu", ...m }),
        }),
        aU.jsx(d.Drawer, {
          ...v,
          ...w,
          visible: p,
          onClose: u,
          headerStyle: k,
          bodyStyle: l,
          ...s,
          children: n,
        }),
      ],
    });
  }),
  aD = a.default.forwardRef((a, b) => {
    let { children: c, responsiveVisibility: d, className: e, ...f } = a,
      { classNames: g } = bi({ className: e, responsiveVisibility: d });
    return aU.jsx("div", { ...f, className: g, ref: b, children: c });
  }),
  bH = { MOBILE: 480, TABLET: 768, DESKTOP: 4e3 },
  aE = a.default.forwardRef((b, c) => {
    let {
        style: d,
        children: e,
        responsiveVisibility: f,
        dataSource: h,
        renderItem: i,
        setting: j,
        arrows: k = !1,
        slidesToShow: l = 4,
        variableWidth: a = !1,
        infinite: m = !1,
        adaptiveHeight: n = !0,
        focusOnSelect: o = !1,
        xlResponsive: p,
        mdResponsive: q,
        xsResponsive: r,
        className: s,
      } = b,
      { classNames: t } = bi({ className: s, responsiveVisibility: f }),
      u = g.useMemo(() => {
        let b = [];
        return (
          "object" == typeof p &&
            (null == p ? void 0 : p.slidesToShow) &&
            b.push({ breakpoint: bH.DESKTOP, settings: p }),
          "object" == typeof q &&
            (null == q ? void 0 : q.slidesToShow) &&
            b.push({ breakpoint: bH.TABLET, settings: q }),
          "object" == typeof r &&
            (null == r ? void 0 : r.slidesToShow) &&
            b.push({ breakpoint: bH.MOBILE, settings: r }),
          {
            dots: !1,
            arrows: k,
            infinite: m,
            slidesToShow: l,
            swipeToSlide: !0,
            variableWidth: a,
            adaptiveHeight: n,
            focusOnSelect: o,
            responsive: b,
            ...j,
          }
        );
      }, [j, k, m, l, a, n, o, p, q, r]),
      v = g.useMemo(
        () =>
          e && a
            ? e
            : e
            ? g.Children.map(e, (a) => aU.jsx("div", { children: a }))
            : (null == h ? void 0 : h.length) && i
            ? h.map((b, c) => (a ? i(b, c) : aU.jsx("div", { children: i(b, c) }, `${b.id}_${c}`)))
            : void 0,
        [e, a, h, i]
      );
    return aU.jsx("div", {
      style: d,
      className: t,
      ref: c,
      children: aU.jsx(bg.default, { ...u, children: v }),
    });
  }),
  bI = b.default(d.Tabs)`
  .jitera-tabs-ink-bar {
    ${(a) => ((null == a ? void 0 : a.activeColor) ? `background-color: ${a.activeColor}` : "")}
  }
  .jitera-tabs-tab.jitera-tabs-tab-active .jitera-tabs-tab-btn {
    ${(a) => ((null == a ? void 0 : a.activeColor) ? `color: ${a.activeColor}` : "")}
  }
  .jitera-tabs-tab {
    ${(a) => {
      var b;
      return (
        null === (b = null == a ? void 0 : a.tabLabelStyle) || void 0 === b ? void 0 : b.color
      )
        ? `color: ${a.tabLabelStyle.color};`
        : "";
    }}
    ${(a) => {
      var b;
      return (
        null === (b = null == a ? void 0 : a.tabLabelStyle) || void 0 === b ? void 0 : b.fontSize
      )
        ? `font-size: ${a.tabLabelStyle.fontSize};`
        : "";
    }}
    ${(a) => {
      var b;
      return (
        null === (b = null == a ? void 0 : a.tabLabelStyle) || void 0 === b ? void 0 : b.fontWeight
      )
        ? `font-weight: ${a.tabLabelStyle.fontWeight};`
        : "";
    }}
    ${(a) => {
      var b;
      return (
        null === (b = null == a ? void 0 : a.tabLabelStyle) || void 0 === b ? void 0 : b.fontFamily
      )
        ? `font-family: ${a.tabLabelStyle.fontFamily};`
        : "";
    }}
  }
`,
  { TabPane: bJ } = d.Tabs,
  aF = a.default.forwardRef((a, b) => {
    let {
        style: c,
        tabType: d,
        tabs: e,
        children: f,
        className: h,
        responsiveVisibility: i,
        ...j
      } = a,
      { classNames: k } = bi({ className: h, responsiveVisibility: i }),
      l = g.useMemo(() => {
        if (f)
          return g.Children.map(f, (d, a) => {
            let b = (null == e ? void 0 : e[a]) || (null == e ? void 0 : e[`${a}`]),
              c = (null == b ? void 0 : b.title) || `Tab ${a}`;
            return aU.jsx(bJ, { tab: c, children: d }, (null == b ? void 0 : b.key) || `${c}_${a}`);
          });
      }, [f, e]);
    return aU.jsx("div", {
      style: c,
      className: k,
      ref: b,
      children: aU.jsx(bI, { type: d, ...j, children: l }),
    });
  }),
  aG = "jitera",
  bK = "jiteraicon",
  l = {
    blueBase: "#1890ff",
    blue1: "#e6f7ff",
    blue2: "#bae7ff",
    blue3: "#91d5ff",
    blue4: "#69c0ff",
    blue5: "#40a9ff",
    blue6: "#1890ff",
    blue7: "#096dd9",
    blue8: "#0050b3",
    blue9: "#003a8c",
    blue10: "#002766",
    purpleBase: "#722ed1",
    purple1: "#f9f0ff",
    purple2: "#efdbff",
    purple3: "#d3adf7",
    purple4: "#b37feb",
    purple5: "#9254de",
    purple6: "#722ed1",
    purple7: "#531dab",
    purple8: "#391085",
    purple9: "#22075e",
    purple10: "#120338",
    cyanBase: "#13c2c2",
    cyan1: "#e6fffb",
    cyan2: "#b5f5ec",
    cyan3: "#87e8de",
    cyan4: "#5cdbd3",
    cyan5: "#36cfc9",
    cyan6: "#13c2c2",
    cyan7: "#08979c",
    cyan8: "#006d75",
    cyan9: "#00474f",
    cyan10: "#002329",
    greenBase: "#52c41a",
    green1: "#f6ffed",
    green2: "#d9f7be",
    green3: "#b7eb8f",
    green4: "#95de64",
    green5: "#73d13d",
    green6: "#52c41a",
    green7: "#389e0d",
    green8: "#237804",
    green9: "#135200",
    green10: "#092b00",
    magentaBase: "#eb2f96",
    magenta1: "#fff0f6",
    magenta2: "#ffd6e7",
    magenta3: "#ffadd2",
    magenta4: "#ff85c0",
    magenta5: "#f759ab",
    magenta6: "#eb2f96",
    magenta7: "#c41d7f",
    magenta8: "#9e1068",
    magenta9: "#780650",
    magenta10: "#520339",
    pinkBase: "#eb2f96",
    pink1: "#fff0f6",
    pink2: "#ffd6e7",
    pink3: "#ffadd2",
    pink4: "#ff85c0",
    pink5: "#f759ab",
    pink6: "#eb2f96",
    pink7: "#c41d7f",
    pink8: "#9e1068",
    pink9: "#780650",
    pink10: "#520339",
    redBase: "#f5222d",
    red1: "#fff1f0",
    red2: "#ffccc7",
    red3: "#ffa39e",
    red4: "#ff7875",
    red5: "#ff4d4f",
    red6: "#f5222d",
    red7: "#cf1322",
    red8: "#a8071a",
    red9: "#820014",
    red10: "#5c0011",
    orangeBase: "#fa8c16",
    orange1: "#fff7e6",
    orange2: "#ffe7ba",
    orange3: "#ffd591",
    orange4: "#ffc069",
    orange5: "#ffa940",
    orange6: "#fa8c16",
    orange7: "#d46b08",
    orange8: "#ad4e00",
    orange9: "#873800",
    orange10: "#612500",
    yellowBase: "#fadb14",
    yellow1: "#feffe6",
    yellow2: "#ffffb8",
    yellow3: "#fffb8f",
    yellow4: "#fff566",
    yellow5: "#ffec3d",
    yellow6: "#fadb14",
    yellow7: "#d4b106",
    yellow8: "#ad8b00",
    yellow9: "#876800",
    yellow10: "#614700",
    volcanoBase: "#fa541c",
    volcano1: "#fff2e8",
    volcano2: "#ffd8bf",
    volcano3: "#ffbb96",
    volcano4: "#ff9c6e",
    volcano5: "#ff7a45",
    volcano6: "#fa541c",
    volcano7: "#d4380d",
    volcano8: "#ad2102",
    volcano9: "#871400",
    volcano10: "#610b00",
    geekblueBase: "#2f54eb",
    geekblue1: "#f0f5ff",
    geekblue2: "#d6e4ff",
    geekblue3: "#adc6ff",
    geekblue4: "#85a5ff",
    geekblue5: "#597ef7",
    geekblue6: "#2f54eb",
    geekblue7: "#1d39c4",
    geekblue8: "#10239e",
    geekblue9: "#061178",
    geekblue10: "#030852",
    limeBase: "#a0d911",
    lime1: "#fcffe6",
    lime2: "#f4ffb8",
    lime3: "#eaff8f",
    lime4: "#d3f261",
    lime5: "#bae637",
    lime6: "#a0d911",
    lime7: "#7cb305",
    lime8: "#5b8c00",
    lime9: "#3f6600",
    lime10: "#254000",
    goldBase: "#faad14",
    gold1: "#fffbe6",
    gold2: "#fff1b8",
    gold3: "#ffe58f",
    gold4: "#ffd666",
    gold5: "#ffc53d",
    gold6: "#faad14",
    gold7: "#d48806",
    gold8: "#ad6800",
    gold9: "#874d00",
    gold10: "#613400",
    presetColors:
      "pink, magenta, red, volcano, orange, yellow, gold, cyan, lime, green, blue, geekblue, purple",
    theme: "default",
    antPrefix: "ant",
    htmlSelector: "html",
    primaryColor: "#1890ff",
    primaryColorHover: "#40a9ff",
    primaryColorActive: "#096dd9",
    primaryColorOutline: "rgba(24, 144, 255, 0.2)",
    processingColor: "#1890ff",
    infoColor: "#1890ff",
    infoColorDeprecatedBg: "#e6f7ff",
    infoColorDeprecatedBorder: "#91d5ff",
    successColor: "#52c41a",
    successColorHover: "#73d13d",
    successColorActive: "#389e0d",
    successColorOutline: "rgba(82, 196, 26, 0.2)",
    successColorDeprecatedBg: "#f6ffed",
    successColorDeprecatedBorder: "#b7eb8f",
    warningColor: "#faad14",
    warningColorHover: "#ffc53d",
    warningColorActive: "#d48806",
    warningColorOutline: "rgba(250, 173, 20, 0.2)",
    warningColorDeprecatedBg: "#fffbe6",
    warningColorDeprecatedBorder: "#ffe58f",
    errorColor: "#ff4d4f",
    errorColorHover: "#ff7875",
    errorColorActive: "#d9363e",
    errorColorOutline: "rgba(255, 77, 79, 0.2)",
    errorColorDeprecatedBg: "#fff2f0",
    errorColorDeprecatedBorder: "#ffccc7",
    highlightColor: "#ff4d4f",
    normalColor: "#d9d9d9",
    white: "#fff",
    black: "#000",
    primary1: "#e6f7ff",
    primary2: "#bae7ff",
    primary3: "#91d5ff",
    primary4: "#69c0ff",
    primary5: "#40a9ff",
    primary6: "#1890ff",
    primary7: "#096dd9",
    primary8: "#0050b3",
    primary9: "#003a8c",
    primary10: "#002766",
    bodyBackground: "#fff",
    componentBackground: "#fff",
    popoverBackground: "#fff",
    popoverCustomizeBorderColor: "#f0f0f0",
    fontFamily:
      "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'",
    codeFamily: "'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace",
    textColor: "rgba(0, 0, 0, 0.85)",
    textColorSecondary: "rgba(0, 0, 0, 0.45)",
    textColorInverse: "#fff",
    iconColor: "inherit",
    iconColorHover: "rgba(0, 0, 0, 0.75)",
    headingColor: "rgba(0, 0, 0, 0.85)",
    textColorDark: "rgba(255, 255, 255, 0.85)",
    textColorSecondaryDark: "rgba(255, 255, 255, 0.65)",
    textSelectionBg: "#1890ff",
    fontVariantBase: "tabular-nums",
    fontFeatureSettingsBase: "'tnum'",
    fontSizeBase: "14px",
    fontSizeLg: "16px",
    fontSizeSm: "12px",
    heading1Size: "38px",
    heading2Size: "30px",
    heading3Size: "24px",
    heading4Size: "20px",
    heading5Size: "16px",
    lineHeightBase: "1.5715",
    borderRadiusBase: "2px",
    borderRadiusSm: "2px",
    paddingLg: "24px",
    paddingMd: "16px",
    paddingSm: "12px",
    paddingXs: "8px",
    paddingXss: "4px",
    controlPaddingHorizontal: "12px",
    controlPaddingHorizontalSm: "8px",
    marginLg: "24px",
    marginMd: "16px",
    marginSm: "12px",
    marginXs: "8px",
    marginXss: "4px",
    heightBase: "32px",
    heightLg: "40px",
    heightSm: "24px",
    itemActiveBg: "#e6f7ff",
    itemHoverBg: "#f5f5f5",
    iconfontCssPrefix: "anticon",
    linkColor: "#1890ff",
    linkHoverColor: "#40a9ff",
    linkActiveColor: "#096dd9",
    linkDecoration: "none",
    linkHoverDecoration: "none",
    linkFocusDecoration: "none",
    linkFocusOutline: "0",
    easeBaseOut: "cubic-bezier(0.7, 0.3, 0.1, 1)",
    easeBaseIn: "cubic-bezier(0.9, 0, 0.3, 0.7)",
    easeOut: "cubic-bezier(0.215, 0.61, 0.355, 1)",
    easeIn: "cubic-bezier(0.55, 0.055, 0.675, 0.19)",
    easeInOut: "cubic-bezier(0.645, 0.045, 0.355, 1)",
    easeOutBack: "cubic-bezier(0.12, 0.4, 0.29, 1.46)",
    easeInBack: "cubic-bezier(0.71, -0.46, 0.88, 0.6)",
    easeInOutBack: "cubic-bezier(0.71, -0.46, 0.29, 1.46)",
    easeOutCirc: "cubic-bezier(0.08, 0.82, 0.17, 1)",
    easeInCirc: "cubic-bezier(0.6, 0.04, 0.98, 0.34)",
    easeInOutCirc: "cubic-bezier(0.78, 0.14, 0.15, 0.86)",
    easeOutQuint: "cubic-bezier(0.23, 1, 0.32, 1)",
    easeInQuint: "cubic-bezier(0.755, 0.05, 0.855, 0.06)",
    easeInOutQuint: "cubic-bezier(0.86, 0, 0.07, 1)",
    borderColorBase: "#d9d9d9",
    borderColorSplit: "#f0f0f0",
    borderColorInverse: "#fff",
    borderWidthBase: "1px",
    borderStyleBase: "solid",
    outlineBlurSize: "0",
    outlineWidth: "2px",
    outlineColor: "#1890ff",
    outlineFade: "20%",
    backgroundColorLight: "#fafafa",
    backgroundColorBase: "#f5f5f5",
    disabledColor: "rgba(0, 0, 0, 0.25)",
    disabledBg: "#f5f5f5",
    disabledActiveBg: "#e6e6e6",
    disabledColorDark: "rgba(255, 255, 255, 0.35)",
    shadowColor: "rgba(0, 0, 0, 0.15)",
    shadowColorInverse: "#fff",
    boxShadowBase:
      "0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 9px 28px 8px rgba(0, 0, 0, 0.05)",
    shadow1Up:
      "0 -6px 16px -8px rgba(0, 0, 0, 0.08), 0 -9px 28px 0 rgba(0, 0, 0, 0.05), 0 -12px 48px 16px rgba(0, 0, 0, 0.03)",
    shadow1Down:
      "0 6px 16px -8px rgba(0, 0, 0, 0.08), 0 9px 28px 0 rgba(0, 0, 0, 0.05), 0 12px 48px 16px rgba(0, 0, 0, 0.03)",
    shadow1Left:
      "-6px 0 16px -8px rgba(0, 0, 0, 0.08), -9px 0 28px 0 rgba(0, 0, 0, 0.05), -12px 0 48px 16px rgba(0, 0, 0, 0.03)",
    shadow1Right:
      "6px 0 16px -8px rgba(0, 0, 0, 0.08), 9px 0 28px 0 rgba(0, 0, 0, 0.05), 12px 0 48px 16px rgba(0, 0, 0, 0.03)",
    shadow2:
      "0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 9px 28px 8px rgba(0, 0, 0, 0.05)",
    btnFontWeight: "400",
    btnBorderRadiusBase: "2px",
    btnBorderRadiusSm: "2px",
    btnBorderWidth: "1px",
    btnBorderStyle: "solid",
    btnShadow: "0 2px 0 rgba(0, 0, 0, 0.015)",
    btnPrimaryShadow: "0 2px 0 rgba(0, 0, 0, 0.045)",
    btnTextShadow: "0 -1px 0 rgba(0, 0, 0, 0.12)",
    btnPrimaryColor: "#fff",
    btnPrimaryBg: "#1890ff",
    btnDefaultColor: "rgba(0, 0, 0, 0.85)",
    btnDefaultBg: "#fff",
    btnDefaultBorder: "#d9d9d9",
    btnDangerColor: "#fff",
    btnDangerBg: "#ff4d4f",
    btnDangerBorder: "#ff4d4f",
    btnDisableColor: "rgba(0, 0, 0, 0.25)",
    btnDisableBg: "#f5f5f5",
    btnDisableBorder: "#d9d9d9",
    btnDefaultGhostColor: "#fff",
    btnDefaultGhostBg: "transparent",
    btnDefaultGhostBorder: "#fff",
    btnFontSizeLg: "16px",
    btnFontSizeSm: "14px",
    btnPaddingHorizontalBase: "15px",
    btnPaddingHorizontalLg: "15px",
    btnPaddingHorizontalSm: "7px",
    btnHeightBase: "32px",
    btnHeightLg: "40px",
    btnHeightSm: "24px",
    btnLineHeight: "1.5715",
    btnCircleSize: "32px",
    btnCircleSizeLg: "40px",
    btnCircleSizeSm: "24px",
    btnSquareSize: "32px",
    btnSquareSizeLg: "40px",
    btnSquareSizeSm: "24px",
    btnSquareOnlyIconSize: "16px",
    btnSquareOnlyIconSizeSm: "14px",
    btnSquareOnlyIconSizeLg: "18px",
    btnGroupBorder: "#40a9ff",
    btnLinkHoverBg: "transparent",
    btnTextHoverBg: "rgba(0, 0, 0, 0.018)",
    checkboxSize: "16px",
    checkboxColor: "#1890ff",
    checkboxCheckColor: "#fff",
    checkboxCheckBg: "#fff",
    checkboxBorderWidth: "1px",
    checkboxBorderRadius: "2px",
    checkboxGroupItemMarginRight: "8px",
    descriptionsBg: "#fafafa",
    descriptionsTitleMarginBottom: "20px",
    descriptionsDefaultPadding: "16px 24px",
    descriptionsMiddlePadding: "12px 24px",
    descriptionsSmallPadding: "8px 16px",
    descriptionsItemPaddingBottom: "16px",
    descriptionsItemTrailingColon: "true",
    descriptionsItemLabelColonMarginRight: "8px",
    descriptionsItemLabelColonMarginLeft: "2px",
    descriptionsExtraColor: "rgba(0, 0, 0, 0.85)",
    dividerTextPadding: "1em",
    dividerOrientationMargin: "5%",
    dividerColor: "rgba(0, 0, 0, 0.06)",
    dividerVerticalGutter: "8px",
    dropdownSelectedColor: "#1890ff",
    dropdownMenuSubmenuDisabledBg: "#fff",
    dropdownSelectedBg: "#e6f7ff",
    emptyFontSize: "14px",
    radioSize: "16px",
    radioTop: "0.2em",
    radioBorderWidth: "1px",
    radioDotSize: "8px",
    radioDotColor: "#1890ff",
    radioDotDisabledColor: "rgba(0, 0, 0, 0.2)",
    radioSolidCheckedColor: "#fff",
    radioButtonBg: "#fff",
    radioButtonCheckedBg: "#fff",
    radioButtonColor: "rgba(0, 0, 0, 0.85)",
    radioButtonHoverColor: "#40a9ff",
    radioButtonActiveColor: "#096dd9",
    radioButtonPaddingHorizontal: "15px",
    radioDisabledButtonCheckedBg: "#e6e6e6",
    radioDisabledButtonCheckedColor: "rgba(0, 0, 0, 0.25)",
    radioWrapperMarginRight: "8px",
    screenXs: "480px",
    screenXsMin: "480px",
    screenSm: "576px",
    screenSmMin: "576px",
    screenMd: "768px",
    screenMdMin: "768px",
    screenLg: "992px",
    screenLgMin: "992px",
    screenXl: "1200px",
    screenXlMin: "1200px",
    screenXxl: "1600px",
    screenXxlMin: "1600px",
    screenXsMax: "575px",
    screenSmMax: "767px",
    screenMdMax: "991px",
    screenLgMax: "1199px",
    screenXlMax: "1599px",
    gridColumns: "24",
    layoutBodyBackground: "#f0f2f5",
    layoutHeaderBackground: "#001529",
    layoutHeaderHeight: "64px",
    layoutHeaderPadding: "0 50px",
    layoutHeaderColor: "rgba(0, 0, 0, 0.85)",
    layoutFooterPadding: "24px 50px",
    layoutFooterBackground: "#f0f2f5",
    layoutSiderBackground: "#001529",
    layoutTriggerHeight: "48px",
    layoutTriggerBackground: "#002140",
    layoutTriggerColor: "#fff",
    layoutZeroTriggerWidth: "36px",
    layoutZeroTriggerHeight: "42px",
    layoutSiderBackgroundLight: "#fff",
    layoutTriggerBackgroundLight: "#fff",
    layoutTriggerColorLight: "rgba(0, 0, 0, 0.85)",
    zindexBadge: "auto",
    zindexTableFixed: "2",
    zindexAffix: "10",
    zindexBackTop: "10",
    zindexPickerPanel: "10",
    zindexPopupClose: "10",
    zindexModal: "1000",
    zindexModalMask: "1000",
    zindexMessage: "1010",
    zindexNotification: "1010",
    zindexPopover: "1030",
    zindexDropdown: "1050",
    zindexPicker: "1050",
    zindexPopoconfirm: "1060",
    zindexTooltip: "1070",
    zindexImage: "1080",
    animationDurationSlow: "0.3s",
    animationDurationBase: "0.2s",
    animationDurationFast: "0.1s",
    collapsePanelBorderRadius: "2px",
    dropdownMenuBg: "#fff",
    dropdownVerticalPadding: "5px",
    dropdownEdgeChildVerticalPadding: "4px",
    dropdownFontSize: "14px",
    dropdownLineHeight: "22px",
    labelRequiredColor: "#ff4d4f",
    labelColor: "rgba(0, 0, 0, 0.85)",
    formWarningInputBg: "#fff",
    formItemMarginBottom: "24px",
    formItemTrailingColon: "true",
    formVerticalLabelPadding: "0 0 8px",
    formVerticalLabelMargin: "0",
    formItemLabelFontSize: "14px",
    formItemLabelHeight: "32px",
    formItemLabelColonMarginRight: "8px",
    formItemLabelColonMarginLeft: "2px",
    formErrorInputBg: "#fff",
    inputHeightBase: "32px",
    inputHeightLg: "40px",
    inputHeightSm: "24px",
    inputPaddingHorizontal: "11px",
    inputPaddingHorizontalBase: "11px",
    inputPaddingHorizontalSm: "7px",
    inputPaddingHorizontalLg: "11px",
    inputPaddingVerticalBase: "4px",
    inputPaddingVerticalSm: "0px",
    inputPaddingVerticalLg: "6.5px",
    inputPlaceholderColor: "#bfbfbf",
    inputColor: "rgba(0, 0, 0, 0.85)",
    inputIconColor: "rgba(0, 0, 0, 0.85)",
    inputBorderColor: "#d9d9d9",
    inputBg: "#fff",
    inputNumberHoverBorderColor: "#40a9ff",
    inputNumberHandlerActiveBg: "#f4f4f4",
    inputNumberHandlerHoverBg: "#40a9ff",
    inputNumberHandlerBg: "#fff",
    inputNumberHandlerBorderColor: "#d9d9d9",
    inputAddonBg: "#fafafa",
    inputHoverBorderColor: "#40a9ff",
    inputDisabledBg: "#f5f5f5",
    inputOutlineOffset: "0 0",
    inputIconHoverColor: "rgba(0, 0, 0, 0.85)",
    inputDisabledColor: "rgba(0, 0, 0, 0.25)",
    mentionsDropdownBg: "#fff",
    mentionsDropdownMenuItemHoverBg: "#fff",
    selectBorderColor: "#d9d9d9",
    selectItemSelectedColor: "rgba(0, 0, 0, 0.85)",
    selectItemSelectedFontWeight: "600",
    selectDropdownBg: "#fff",
    selectItemSelectedBg: "#e6f7ff",
    selectItemActiveBg: "#f5f5f5",
    selectDropdownVerticalPadding: "5px",
    selectDropdownFontSize: "14px",
    selectDropdownLineHeight: "22px",
    selectDropdownHeight: "32px",
    selectBackground: "#fff",
    selectClearBackground: "#fff",
    selectSelectionItemBg: "#f5f5f5",
    selectSelectionItemBorderColor: "#f0f0f0",
    selectSingleItemHeightLg: "40px",
    selectMultipleItemHeight: "24px",
    selectMultipleItemHeightLg: "32px",
    selectMultipleItemSpacingHalf: "2px",
    selectMultipleDisabledBackground: "#f5f5f5",
    selectMultipleItemDisabledColor: "#bfbfbf",
    selectMultipleItemDisabledBorderColor: "#d9d9d9",
    cascaderBg: "#fff",
    cascaderItemSelectedBg: "#e6f7ff",
    cascaderMenuBg: "#fff",
    cascaderMenuBorderColorSplit: "#f0f0f0",
    cascaderDropdownVerticalPadding: "5px",
    cascaderDropdownEdgeChildVerticalPadding: "4px",
    cascaderDropdownFontSize: "14px",
    cascaderDropdownLineHeight: "22px",
    anchorBg: "transparent",
    anchorBorderColor: "#f0f0f0",
    anchorLinkTop: "7px",
    anchorLinkLeft: "16px",
    anchorLinkPadding: "7px 0 7px 16px",
    tooltipMaxWidth: "250px",
    tooltipColor: "#fff",
    tooltipBg: "rgba(0, 0, 0, 0.75)",
    tooltipArrowWidth: "11.3137085px",
    tooltipDistance: "14.3137085px",
    tooltipArrowColor: "rgba(0, 0, 0, 0.75)",
    popoverBg: "#fff",
    popoverColor: "rgba(0, 0, 0, 0.85)",
    popoverMinWidth: "177px",
    popoverMinHeight: "32px",
    popoverArrowWidth: "11.3137085px",
    popoverArrowColor: "#fff",
    popoverArrowOuterColor: "#fff",
    popoverDistance: "15.3137085px",
    popoverPaddingHorizontal: "16px",
    modalHeaderPaddingVertical: "16px",
    modalHeaderPaddingHorizontal: "24px",
    modalBodyPadding: "24px",
    modalHeaderBg: "#fff",
    modalHeaderPadding: "16px 24px",
    modalHeaderBorderWidth: "1px",
    modalHeaderBorderStyle: "solid",
    modalHeaderTitleLineHeight: "22px",
    modalHeaderTitleFontSize: "16px",
    modalHeaderBorderColorSplit: "#f0f0f0",
    modalHeaderCloseSize: "56px",
    modalContentBg: "#fff",
    modalHeadingColor: "rgba(0, 0, 0, 0.85)",
    modalCloseColor: "rgba(0, 0, 0, 0.45)",
    modalFooterBg: "transparent",
    modalFooterBorderColorSplit: "#f0f0f0",
    modalFooterBorderStyle: "solid",
    modalFooterPaddingVertical: "10px",
    modalFooterPaddingHorizontal: "16px",
    modalFooterBorderWidth: "1px",
    modalMaskBg: "rgba(0, 0, 0, 0.45)",
    modalConfirmBodyPadding: "32px 32px 24px",
    modalConfirmTitleFontSize: "16px",
    progressDefaultColor: "#1890ff",
    progressRemainingColor: "#f5f5f5",
    progressInfoTextColor: "rgba(0, 0, 0, 0.85)",
    progressRadius: "100px",
    progressStepsItemBg: "#f3f3f3",
    progressTextFontSize: "1em",
    progressTextColor: "rgba(0, 0, 0, 0.85)",
    progressCircleTextFontSize: "1em",
    menuInlineToplevelItemHeight: "40px",
    menuItemHeight: "40px",
    menuItemGroupHeight: "1.5715",
    menuCollapsedWidth: "80px",
    menuBg: "#fff",
    menuPopupBg: "#fff",
    menuItemColor: "rgba(0, 0, 0, 0.85)",
    menuInlineSubmenuBg: "#fafafa",
    menuHighlightColor: "#1890ff",
    menuHighlightDangerColor: "#ff4d4f",
    menuItemActiveBg: "#e6f7ff",
    menuItemActiveDangerBg: "#fff1f0",
    menuItemActiveBorderWidth: "3px",
    menuItemGroupTitleColor: "rgba(0, 0, 0, 0.45)",
    menuItemVerticalMargin: "4px",
    menuItemFontSize: "14px",
    menuItemBoundaryMargin: "8px",
    menuItemPaddingHorizontal: "20px",
    menuItemPadding: "0 20px",
    menuHorizontalLineHeight: "46px",
    menuIconMarginRight: "10px",
    menuIconSize: "14px",
    menuIconSizeLg: "16px",
    menuItemGroupTitleFontSize: "14px",
    menuDarkColor: "rgba(255, 255, 255, 0.65)",
    menuDarkDangerColor: "#ff4d4f",
    menuDarkBg: "#001529",
    menuDarkArrowColor: "#fff",
    menuDarkInlineSubmenuBg: "#000c17",
    menuDarkHighlightColor: "#fff",
    menuDarkItemActiveBg: "#1890ff",
    menuDarkItemActiveDangerBg: "#ff4d4f",
    menuDarkSelectedItemIconColor: "#fff",
    menuDarkSelectedItemTextColor: "#fff",
    menuDarkItemHoverBg: "transparent",
    spinDotSizeSm: "14px",
    spinDotSize: "20px",
    spinDotSizeLg: "32px",
    tableBg: "#fff",
    tableHeaderBg: "#fafafa",
    tableHeaderColor: "rgba(0, 0, 0, 0.85)",
    tableHeaderSortBg: "#f5f5f5",
    tableBodySortBg: "#fafafa",
    tableRowHoverBg: "#fafafa",
    tableSelectedRowColor: "inherit",
    tableSelectedRowBg: "#e6f7ff",
    tableBodySelectedSortBg: "#e6f7ff",
    tableSelectedRowHoverBg: "#dcf4ff",
    tableExpandedRowBg: "#fbfbfb",
    tablePaddingVertical: "16px",
    tablePaddingHorizontal: "16px",
    tablePaddingVerticalMd: "12px",
    tablePaddingHorizontalMd: "8px",
    tablePaddingVerticalSm: "8px",
    tablePaddingHorizontalSm: "8px",
    tableBorderColor: "#f0f0f0",
    tableBorderRadiusBase: "2px",
    tableFooterBg: "#fafafa",
    tableFooterColor: "rgba(0, 0, 0, 0.85)",
    tableHeaderBgSm: "#fafafa",
    tableFontSize: "14px",
    tableFontSizeMd: "14px",
    tableFontSizeSm: "14px",
    tableHeaderCellSplitColor: "rgba(0, 0, 0, 0.06)",
    tableHeaderSortActiveBg: "rgba(0, 0, 0, 0.04)",
    tableFixedHeaderSortActiveBg: "#f5f5f5",
    tableHeaderFilterActiveBg: "rgba(0, 0, 0, 0.04)",
    tableFilterBtnsBg: "inherit",
    tableFilterDropdownBg: "#fff",
    tableExpandIconBg: "#fff",
    tableSelectionColumnWidth: "32px",
    tableStickyScrollBarBg: "rgba(0, 0, 0, 0.35)",
    tableStickyScrollBarRadius: "4px",
    tagDefaultBg: "#fafafa",
    tagDefaultColor: "rgba(0, 0, 0, 0.85)",
    tagFontSize: "12px",
    tagLineHeight: "20px",
    pickerBg: "#fff",
    pickerBasicCellHoverColor: "#f5f5f5",
    pickerBasicCellActiveWithRangeColor: "#e6f7ff",
    pickerBasicCellHoverWithRangeColor: "#cbe6ff",
    pickerBasicCellDisabledBg: "rgba(0, 0, 0, 0.04)",
    pickerBorderColor: "#f0f0f0",
    pickerDateHoverRangeBorderColor: "#7ec1ff",
    pickerDateHoverRangeColor: "#cbe6ff",
    pickerTimePanelColumnWidth: "56px",
    pickerTimePanelColumnHeight: "224px",
    pickerTimePanelCellHeight: "28px",
    pickerPanelCellHeight: "24px",
    pickerPanelCellWidth: "36px",
    pickerTextHeight: "40px",
    pickerPanelWithoutTimeCellHeight: "66px",
    calendarBg: "#fff",
    calendarInputBg: "#fff",
    calendarBorderColor: "#fff",
    calendarItemActiveBg: "#e6f7ff",
    calendarColumnActiveBg: "rgba(230, 247, 255, 0.2)",
    calendarFullBg: "#fff",
    calendarFullPanelBg: "#fff",
    carouselDotWidth: "16px",
    carouselDotHeight: "3px",
    carouselDotActiveWidth: "24px",
    badgeHeight: "20px",
    badgeHeightSm: "14px",
    badgeDotSize: "6px",
    badgeFontSize: "12px",
    badgeFontSizeSm: "12px",
    badgeFontWeight: "normal",
    badgeStatusSize: "6px",
    badgeTextColor: "#fff",
    badgeColor: "#ff4d4f",
    rateStarColor: "#fadb14",
    rateStarBg: "#f0f0f0",
    rateStarSize: "20px",
    rateStarHoverScale: "scale(1.1)",
    cardHeadColor: "rgba(0, 0, 0, 0.85)",
    cardHeadBackground: "transparent",
    cardHeadFontSize: "16px",
    cardHeadFontSizeSm: "14px",
    cardHeadPadding: "16px",
    cardHeadPaddingSm: "8px",
    cardHeadHeight: "48px",
    cardHeadHeightSm: "36px",
    cardInnerHeadPadding: "12px",
    cardPaddingBase: "24px",
    cardPaddingBaseSm: "12px",
    cardActionsBackground: "#fff",
    cardActionsLiMargin: "12px 0",
    cardSkeletonBg: "#cfd8dc",
    cardBackground: "#fff",
    cardShadow:
      "0 1px 2px -2px rgba(0, 0, 0, 0.16), 0 3px 6px 0 rgba(0, 0, 0, 0.12), 0 5px 12px 4px rgba(0, 0, 0, 0.09)",
    cardRadius: "2px",
    cardHeadTabsMarginBottom: "-17px",
    cardHeadExtraColor: "rgba(0, 0, 0, 0.85)",
    commentBg: "inherit",
    commentPaddingBase: "16px 0",
    commentNestIndent: "44px",
    commentFontSizeBase: "14px",
    commentFontSizeSm: "12px",
    commentAuthorNameColor: "rgba(0, 0, 0, 0.45)",
    commentAuthorTimeColor: "#ccc",
    commentActionColor: "rgba(0, 0, 0, 0.45)",
    commentActionHoverColor: "#595959",
    commentActionsMarginBottom: "inherit",
    commentActionsMarginTop: "12px",
    commentContentDetailPMarginBottom: "inherit",
    tabsCardHeadBackground: "#fafafa",
    tabsCardHeight: "40px",
    tabsCardActiveColor: "#1890ff",
    tabsCardHorizontalPadding: "8px 16px",
    tabsCardHorizontalPaddingSm: "6px 16px",
    tabsCardHorizontalPaddingLg: "7px 16px 6px",
    tabsTitleFontSize: "14px",
    tabsTitleFontSizeLg: "16px",
    tabsTitleFontSizeSm: "14px",
    tabsInkBarColor: "#1890ff",
    tabsBarMargin: "0 0 16px 0",
    tabsHorizontalGutter: "32px",
    tabsHorizontalMargin: "0 0 0 32px",
    tabsHorizontalMarginRtl: "0 0 0 32px",
    tabsHorizontalPadding: "12px 0",
    tabsHorizontalPaddingLg: "16px 0",
    tabsHorizontalPaddingSm: "8px 0",
    tabsVerticalPadding: "8px 24px",
    tabsVerticalMargin: "16px 0 0 0",
    tabsScrollingSize: "32px",
    tabsHighlightColor: "#1890ff",
    tabsHoverColor: "#40a9ff",
    tabsActiveColor: "#096dd9",
    tabsCardGutter: "2px",
    tabsCardTabActiveBorderTop: "2px solid transparent",
    backTopColor: "#fff",
    backTopBg: "rgba(0, 0, 0, 0.45)",
    backTopHoverBg: "rgba(0, 0, 0, 0.85)",
    avatarSizeBase: "32px",
    avatarSizeLg: "40px",
    avatarSizeSm: "24px",
    avatarFontSizeBase: "18px",
    avatarFontSizeLg: "24px",
    avatarFontSizeSm: "14px",
    avatarBg: "#ccc",
    avatarColor: "#fff",
    avatarBorderRadius: "2px",
    avatarGroupOverlapping: "-8px",
    avatarGroupSpace: "3px",
    avatarGroupBorderColor: "#fff",
    switchHeight: "22px",
    switchSmHeight: "16px",
    switchMinWidth: "44px",
    switchSmMinWidth: "28px",
    switchDisabledOpacity: "0.4",
    switchColor: "#1890ff",
    switchBg: "#fff",
    switchShadowColor: "rgba(0, 35, 11, 0.2)",
    switchPadding: "2px",
    switchInnerMarginMin: "7px",
    switchInnerMarginMax: "25px",
    switchSmInnerMarginMin: "5px",
    switchSmInnerMarginMax: "18px",
    paginationItemBg: "#fff",
    paginationItemSize: "32px",
    paginationItemSizeSm: "24px",
    paginationFontFamily:
      "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'",
    paginationFontWeightActive: "500",
    paginationItemBgActive: "#fff",
    paginationItemLinkBg: "#fff",
    paginationItemDisabledColorActive: "rgba(0, 0, 0, 0.25)",
    paginationItemDisabledBgActive: "#e6e6e6",
    paginationItemInputBg: "#fff",
    paginationMiniOptionsSizeChangerTop: "0px",
    pageHeaderPadding: "24px",
    pageHeaderPaddingVertical: "16px",
    pageHeaderPaddingBreadcrumb: "12px",
    pageHeaderContentPaddingVertical: "12px",
    pageHeaderBackColor: "#000",
    pageHeaderGhostBg: "inherit",
    pageHeaderHeadingTitle: "20px",
    pageHeaderHeadingSubTitle: "14px",
    pageHeaderTabsTabFontSize: "16px",
    breadcrumbBaseColor: "rgba(0, 0, 0, 0.45)",
    breadcrumbLastItemColor: "rgba(0, 0, 0, 0.85)",
    breadcrumbFontSize: "14px",
    breadcrumbIconFontSize: "14px",
    breadcrumbLinkColor: "rgba(0, 0, 0, 0.45)",
    breadcrumbLinkColorHover: "#40a9ff",
    breadcrumbSeparatorColor: "rgba(0, 0, 0, 0.45)",
    breadcrumbSeparatorMargin: "0 8px",
    sliderMargin: "10px 6px 10px",
    sliderRailBackgroundColor: "#f5f5f5",
    sliderRailBackgroundColorHover: "#e1e1e1",
    sliderTrackBackgroundColor: "#91d5ff",
    sliderTrackBackgroundColorHover: "#69c0ff",
    sliderHandleBorderWidth: "2px",
    sliderHandleBackgroundColor: "#fff",
    sliderHandleColor: "#91d5ff",
    sliderHandleColorHover: "#69c0ff",
    sliderHandleColorFocus: "#46a6ff",
    sliderHandleColorFocusShadow: "rgba(24, 144, 255, 0.12)",
    sliderHandleColorTooltipOpen: "#1890ff",
    sliderHandleSize: "14px",
    sliderHandleMarginTop: "-5px",
    sliderHandleShadow: "0",
    sliderDotBorderColor: "#f0f0f0",
    sliderDotBorderColorActive: "#8cc8ff",
    sliderDisabledColor: "rgba(0, 0, 0, 0.25)",
    sliderDisabledBackgroundColor: "#fff",
    treeBg: "#fff",
    treeTitleHeight: "24px",
    treeChildPadding: "18px",
    treeDirectorySelectedColor: "#fff",
    treeDirectorySelectedBg: "#1890ff",
    treeNodeHoverBg: "#f5f5f5",
    treeNodeSelectedBg: "#bae7ff",
    collapseHeaderPadding: "12px 16px",
    collapseHeaderPaddingExtra: "40px",
    collapseHeaderBg: "#fafafa",
    collapseContentPadding: "16px",
    collapseContentBg: "#fff",
    collapseHeaderArrowLeft: "16px",
    skeletonColor: "rgba(190, 190, 190, 0.2)",
    skeletonToColor: "rgba(129, 129, 129, 0.24)",
    skeletonParagraphMarginTop: "28px",
    skeletonParagraphLiMarginTop: "16px",
    skeletonParagraphLiHeight: "16px",
    skeletonTitleHeight: "16px",
    skeletonTitleParagraphMarginTop: "24px",
    transferHeaderHeight: "40px",
    transferItemHeight: "32px",
    transferDisabledBg: "#f5f5f5",
    transferListHeight: "200px",
    transferItemHoverBg: "#f5f5f5",
    transferItemSelectedHoverBg: "#dcf4ff",
    transferItemPaddingVertical: "6px",
    transferListSearchIconTop: "12px",
    messageNoticeContentPadding: "10px 16px",
    messageNoticeContentBg: "#fff",
    waveAnimationWidth: "6px",
    alertSuccessBorderColor: "#b7eb8f",
    alertSuccessBgColor: "#f6ffed",
    alertSuccessIconColor: "#52c41a",
    alertInfoBorderColor: "#91d5ff",
    alertInfoBgColor: "#e6f7ff",
    alertInfoIconColor: "#1890ff",
    alertWarningBorderColor: "#ffe58f",
    alertWarningBgColor: "#fffbe6",
    alertWarningIconColor: "#faad14",
    alertErrorBorderColor: "#ffccc7",
    alertErrorBgColor: "#fff2f0",
    alertErrorIconColor: "#ff4d4f",
    alertMessageColor: "rgba(0, 0, 0, 0.85)",
    alertTextColor: "rgba(0, 0, 0, 0.85)",
    alertCloseColor: "rgba(0, 0, 0, 0.45)",
    alertCloseHoverColor: "rgba(0, 0, 0, 0.75)",
    alertNoIconPaddingVertical: "8px",
    alertWithDescriptionNoIconPaddingVertical: "15px",
    alertWithDescriptionPaddingVertical: "15px",
    alertWithDescriptionPadding: "15px 15px 15px 24px",
    alertIconTop: "12.0005px",
    alertWithDescriptionIconSize: "24px",
    listHeaderBackground: "transparent",
    listFooterBackground: "transparent",
    listEmptyTextPadding: "16px",
    listItemPadding: "12px 0",
    listItemPaddingSm: "8px 16px",
    listItemPaddingLg: "16px 24px",
    listItemMetaMarginBottom: "16px",
    listItemMetaAvatarMarginRight: "16px",
    listItemMetaTitleMarginBottom: "12px",
    listCustomizeCardBg: "#fff",
    listItemMetaDescriptionFontSize: "14px",
    statisticTitleFontSize: "14px",
    statisticContentFontSize: "24px",
    statisticUnitFontSize: "24px",
    statisticFontFamily:
      "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'",
    drawerHeaderPadding: "16px 24px",
    drawerBodyPadding: "24px",
    drawerBg: "#fff",
    drawerFooterPaddingVertical: "10px",
    drawerFooterPaddingHorizontal: "16px",
    drawerHeaderCloseSize: "56px",
    drawerTitleFontSize: "16px",
    drawerTitleLineHeight: "22px",
    timelineWidth: "2px",
    timelineColor: "#f0f0f0",
    timelineDotBorderWidth: "2px",
    timelineDotColor: "#1890ff",
    timelineDotBg: "#fff",
    timelineItemPaddingBottom: "20px",
    typographyTitleFontWeight: "600",
    typographyTitleMarginTop: "1.2em",
    typographyTitleMarginBottom: "0.5em",
    uploadActionsColor: "rgba(0, 0, 0, 0.45)",
    processTailColor: "#f0f0f0",
    stepsNavArrowColor: "rgba(0, 0, 0, 0.25)",
    stepsBackground: "#fff",
    stepsIconSize: "32px",
    stepsIconCustomSize: "32px",
    stepsIconCustomTop: "0px",
    stepsIconCustomFontSize: "24px",
    stepsIconTop: "-0.5px",
    stepsIconFontSize: "16px",
    stepsIconMargin: "0 8px 0 0",
    stepsTitleLineHeight: "32px",
    stepsSmallIconSize: "24px",
    stepsSmallIconMargin: "0 8px 0 0",
    stepsDotSize: "8px",
    stepsDotTop: "2px",
    stepsCurrentDotSize: "10px",
    stepsDescriptionMaxWidth: "140px",
    stepsNavContentMaxWidth: "auto",
    stepsVerticalIconWidth: "16px",
    stepsVerticalTailWidth: "16px",
    stepsVerticalTailWidthSm: "12px",
    notificationBg: "#fff",
    notificationPaddingVertical: "16px",
    notificationPaddingHorizontal: "24px",
    resultTitleFontSize: "24px",
    resultSubtitleFontSize: "14px",
    resultIconFontSize: "72px",
    resultExtraMargin: "24px 0 0 0",
    imageSizeBase: "48px",
    imageFontSizeBase: "24px",
    imageBg: "#f5f5f5",
    imageColor: "#fff",
    imageMaskFontSize: "16px",
    imagePreviewOperationSize: "18px",
    imagePreviewOperationColor: "rgba(255, 255, 255, 0.85)",
    imagePreviewOperationDisabledColor: "rgba(255, 255, 255, 0.25)",
  },
  bL = g.createContext({ theme: l, toggleTheme(a) {} }),
  aH = () => g.useContext(bL),
  aI = ({ children: a }) => {
    let [b, e] = g.useState(l),
      f = (b) => {
        let a = { ...l, ...b };
        d.ConfigProvider.config({ theme: a, prefixCls: "jitera" }), e(a);
      },
      c = g.useMemo(() => ({ theme: b, toggleTheme: f }), [b]);
    return aU.jsx(d.ConfigProvider, {
      prefixCls: aG,
      iconPrefixCls: "jiteraicon",
      children: aU.jsx(bL.Provider, { value: c, children: a }),
    });
  };
(exports.ModalPositionEnum = void 0),
  (function (a) {
    (a.DEFAULT = "default"), (a.TOP = "top"), (a.CENTER = "center");
  })(exports.ModalPositionEnum || (exports.ModalPositionEnum = {}));
const bM = [],
  aJ = {
    show(b, c = {}) {
      let e = document.createDocumentFragment();
      function a(f = !0) {
        setTimeout(() => {
          aV.render(
            aU.jsx(aI, {
              children: aU.jsx(d.Modal, {
                visible: f,
                closable: !1,
                onCancel: () => a(!1),
                footer: null,
                modalRender: () => b,
                centered: c.position === exports.ModalPositionEnum.CENTER,
                style: {
                  top: c.position === exports.ModalPositionEnum.TOP ? "0px" : void 0,
                  ...c.style,
                },
                ...c,
              }),
            }),
            e
          ),
            f
              ? setTimeout(() => {
                  var a;
                  let b = document.querySelectorAll(".jitera-modal-root");
                  null === (a = Array.from(b).at(b.length - 1)) ||
                    void 0 === a ||
                    a.classList.add(`jitera-modal-root-${bM.length}`);
                })
              : setTimeout(() => {
                  var a, b;
                  null ===
                    (b =
                      null ===
                        (a = document.querySelector(`.jitera-modal-root-${bM.length + 1}`)) ||
                      void 0 === a
                        ? void 0
                        : a.parentElement) ||
                    void 0 === b ||
                    b.remove();
                });
        });
      }
      bM.push(a), a();
    },
    hide() {
      var a;
      null === (a = bM.pop()) || void 0 === a || a(!1);
    },
    hideAll() {
      bM.forEach((a) => {
        a(!1);
      });
    },
  },
  bN = new Set();
function bO(a) {
  if (!bN.has(a))
    throw new Promise((c) => {
      let b = new Image();
      (b.src = a),
        b.addEventListener("load", () => {
          bN.add(a), c(null);
        });
    });
}
function bP(a) {
  if (a instanceof HTMLImageElement) {
    let { alt: b, src: c } = a,
      d = bS({ altText: b, src: c });
    return { node: d };
  }
  return null;
}
function bQ({ altText: b, className: c, imageRef: d, src: a, width: e, height: f, maxWidth: g }) {
  return (
    bO(a),
    aU.jsx("img", {
      className: c || void 0,
      src: a,
      alt: b,
      ref: d,
      style: { height: f, maxWidth: g, width: e },
      draggable: "false",
    })
  );
}
function bR({ src: e, altText: f, nodeKey: b, width: h, height: i, maxWidth: j }) {
  let k = g.useRef(null),
    [a, c, l] = aY.useLexicalNodeSelection(b),
    [m] = aX.useLexicalComposerContext(),
    [d, q] = g.useState(null),
    n = g.useCallback(
      (e) => {
        if (a && E.$isNodeSelection(E.$getSelection())) {
          let f = e;
          f.preventDefault();
          let d = E.$getNodeByKey(b);
          bT(d) && d.remove(), c(!1);
        }
        return !1;
      },
      [a, b, c]
    );
  g.useEffect(
    () =>
      aZ.mergeRegister(
        m.registerUpdateListener(({ editorState: a }) => {
          q(a.read(() => E.$getSelection()));
        }),
        m.registerCommand(
          E.CLICK_COMMAND,
          (d) => {
            let b = d;
            return b.target === k.current && (b.shiftKey || l(), c(!a), !0);
          },
          E.COMMAND_PRIORITY_LOW
        ),
        m.registerCommand(E.KEY_DELETE_COMMAND, n, E.COMMAND_PRIORITY_LOW),
        m.registerCommand(E.KEY_BACKSPACE_COMMAND, n, E.COMMAND_PRIORITY_LOW)
      ),
    [l, m, a, b, n, c]
  );
  let o = a && E.$isNodeSelection(d),
    p = E.$isNodeSelection(d) && a;
  return aU.jsx(g.Suspense, {
    fallback: null,
    children: aU.jsx("div", {
      draggable: o,
      children: aU.jsx(bQ, {
        className: p ? "focused" : null,
        src: e,
        altText: f,
        imageRef: k,
        width: h,
        height: i,
        maxWidth: j,
      }),
    }),
  });
}
class aK extends E.DecoratorNode {
  constructor(a, b, c, d, e, f, g, h) {
    super(h),
      (this.__src = a),
      (this.__altText = b),
      (this.__maxWidth = c),
      (this.__width = d || "inherit"),
      (this.__height = e || "inherit"),
      (this.__showCaption = f || !1),
      (this.__caption = g || E.createEditor());
  }
  static getType() {
    return "image";
  }
  static clone(a) {
    return new aK(
      a.__src,
      a.__altText,
      a.__maxWidth,
      a.__width,
      a.__height,
      a.__showCaption,
      a.__caption,
      a.__key
    );
  }
  static importJSON(d) {
    let { altText: e, height: f, width: g, maxWidth: h, caption: i, src: j, showCaption: k } = d,
      a = bS({ altText: e, height: f, maxWidth: h, showCaption: k, src: j, width: g }),
      b = a.__caption,
      c = b.parseEditorState(i.editorState);
    return c.isEmpty() || b.setEditorState(c), a;
  }
  exportDOM() {
    let a = document.createElement("img");
    return a.setAttribute("src", this.__src), a.setAttribute("alt", this.__altText), { element: a };
  }
  static importDOM() {
    return { img: () => ({ conversion: bP, priority: 0 }) };
  }
  exportJSON() {
    return {
      altText: this.getAltText(),
      caption: this.__caption.toJSON(),
      height: "inherit" === this.__height ? 0 : this.__height,
      maxWidth: this.__maxWidth,
      showCaption: this.__showCaption,
      src: this.getSrc(),
      type: "image",
      version: 1,
      width: "inherit" === this.__width ? 0 : this.__width,
    };
  }
  setWidthAndHeight(b, c) {
    let a = this.getWritable();
    (a.__width = b), (a.__height = c);
  }
  setShowCaption(a) {
    let b = this.getWritable();
    b.__showCaption = a;
  }
  createDOM(c) {
    let a = document.createElement("span"),
      { theme: d } = c,
      b = d.image;
    return void 0 !== b && (a.className = b), a;
  }
  updateDOM() {
    return !1;
  }
  getSrc() {
    return this.__src;
  }
  getAltText() {
    return this.__altText;
  }
  decorate() {
    return aU.jsx(bR, {
      src: this.__src,
      altText: this.__altText,
      width: this.__width,
      height: this.__height,
      maxWidth: this.__maxWidth,
      nodeKey: this.getKey(),
    });
  }
}
function bS({
  altText: a,
  height: b,
  maxWidth: c = 500,
  src: d,
  width: e,
  showCaption: f,
  caption: g,
  key: h,
}) {
  return new aK(d, a, c, e, b, f, g, h);
}
function bT(a) {
  return a instanceof aK;
}
const aL = [
  k.HeadingNode,
  j.ListNode,
  j.ListItemNode,
  k.QuoteNode,
  h.CodeNode,
  f.TableNode,
  f.TableCellNode,
  f.TableRowNode,
  h.CodeHighlightNode,
  i.AutoLinkNode,
  i.LinkNode,
  C.OverflowNode,
  aK,
  D.HorizontalRuleNode,
  B.MarkNode,
];
var bU = aL;
const aM = {
  characterLimit: "JiteraRichText__characterLimit",
  code: "JiteraRichText__code",
  codeHighlight: {
    atrule: "JiteraRichText__tokenAttr",
    attr: "JiteraRichText__tokenAttr",
    boolean: "JiteraRichText__tokenProperty",
    builtin: "JiteraRichText__tokenSelector",
    cdata: "JiteraRichText__tokenComment",
    char: "JiteraRichText__tokenSelector",
    class: "JiteraRichText__tokenFunction",
    "class-name": "JiteraRichText__tokenFunction",
    comment: "JiteraRichText__tokenComment",
    constant: "JiteraRichText__tokenProperty",
    deleted: "JiteraRichText__tokenProperty",
    doctype: "JiteraRichText__tokenComment",
    entity: "JiteraRichText__tokenOperator",
    function: "JiteraRichText__tokenFunction",
    important: "JiteraRichText__tokenVariable",
    inserted: "JiteraRichText__tokenSelector",
    keyword: "JiteraRichText__tokenAttr",
    namespace: "JiteraRichText__tokenVariable",
    number: "JiteraRichText__tokenProperty",
    operator: "JiteraRichText__tokenOperator",
    prolog: "JiteraRichText__tokenComment",
    property: "JiteraRichText__tokenProperty",
    punctuation: "JiteraRichText__tokenPunctuation",
    regex: "JiteraRichText__tokenVariable",
    selector: "JiteraRichText__tokenSelector",
    string: "JiteraRichText__tokenSelector",
    symbol: "JiteraRichText__tokenProperty",
    tag: "JiteraRichText__tokenProperty",
    url: "JiteraRichText__tokenOperator",
    variable: "JiteraRichText__tokenVariable",
  },
  embedBlock: { base: "JiteraRichText__embedBlock", focus: "JiteraRichText__embedBlockFocus" },
  hashtag: "JiteraRichText__hashtag",
  heading: {
    h1: "JiteraRichText__h1",
    h2: "JiteraRichText__h2",
    h3: "JiteraRichText__h3",
    h4: "JiteraRichText__h4",
    h5: "JiteraRichText__h5",
    h6: "JiteraRichText__h6",
  },
  image: "editor-image",
  link: "JiteraRichText__link",
  list: {
    listitem: "JiteraRichText__listItem",
    listitemChecked: "JiteraRichText__listItemChecked",
    listitemUnchecked: "JiteraRichText__listItemUnchecked",
    nested: { listitem: "JiteraRichText__nestedListItem" },
    olDepth: [
      "JiteraRichText__ol1",
      "JiteraRichText__ol2",
      "JiteraRichText__ol3",
      "JiteraRichText__ol4",
      "JiteraRichText__ol5",
    ],
    ul: "JiteraRichText__ul",
  },
  ltr: "JiteraRichText__ltr",
  mark: "JiteraRichText__mark",
  markOverlap: "JiteraRichText__markOverlap",
  paragraph: "JiteraRichText__paragraph",
  quote: "JiteraRichText__quote",
  rtl: "JiteraRichText__rtl",
  table: "JiteraRichText__table",
  tableCell: "JiteraRichText__tableCell",
  tableCellHeader: "JiteraRichText__tableCellHeader",
  text: {
    bold: "JiteraRichText__textBold",
    code: "JiteraRichText__textCode",
    italic: "JiteraRichText__textItalic",
    strikethrough: "JiteraRichText__textStrikethrough",
    subscript: "JiteraRichText__textSubscript",
    superscript: "JiteraRichText__textSuperscript",
    underline: "JiteraRichText__textUnderline",
    underlineStrikethrough: "JiteraRichText__textUnderlineStrikethrough",
  },
};
var bV = aM;
const bW =
    '{"root":{"children":[{"children":[],"direction":null,"format":"","indent":0,"type":"paragraph","version":1}],"direction":null,"format":"","indent":0,"type":"root","version":1}}',
  bX = ({ data: a }) => {
    let [c] = aX.useLexicalComposerContext(),
      b = g.useMemo(
        () =>
          a ||
          '{"root":{"children":[{"children":[],"direction":null,"format":"","indent":0,"type":"paragraph","version":1}],"direction":null,"format":"","indent":0,"type":"root","version":1}}',
        [a]
      );
    return (
      g.useEffect(() => {
        c.update(() => {
          let a = c.parseEditorState(b);
          c.setEditorState(a);
        });
      }, [b]),
      g.useEffect(() => {
        c.update(() => {
          c.setReadOnly(!0);
        });
      }, []),
      aU.jsx(a$.RichTextPlugin, {
        contentEditable: aU.jsx(a_.ContentEditable, {}),
        placeholder: aU.jsx("div", {}),
        initialEditorState: void 0,
      })
    );
  },
  aN = a.default.forwardRef(({ style: a, data: b }, c) => {
    let d = {
      editorState: void 0,
      namespace: "Playground",
      nodes: [...bU],
      onError(a) {
        throw a;
      },
      theme: bV,
    };
    return aU.jsx("div", {
      ref: c,
      style: a,
      children: aU.jsx(aW.LexicalComposer, { initialConfig: d, children: aU.jsx(bX, { data: b }) }),
    });
  }),
  bY = b.default.div`
  && {
    width: fit-content;
    ${(a) => a.customStyle}
  }
`,
  bZ = b.default.div`
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
  width: 5px;
  background: ${(a) => (a.isResizing ? "blue" : "rgba(0, 0, 0, 0.5)")};
  opacity: ${(a) => (a.isResizing ? "1" : "0")};
  cursor: col-resize;
  user-select: none;
  touch-action: none;
`,
  b$ = b.default.table`
  border-collapse: collapse;
  width: fit-content;
  ${(a) => a.customStyle}
`,
  b_ = b.default.thead`
  ${(a) => a.customStyle}
`,
  b0 = b.default.tbody`
  ${(a) => a.customStyle}
`,
  b1 = b.default.tfoot`
  ${(a) => a.customStyle}
`,
  b2 = b.default.tr`
  width: fit-content;
  ${(a) => a.customStyle}

  &.j-table__tbody-tr--dragging {
    opacity: 0.5;
  }

  .j-table__tbody-td.j-table__tbody-td--drag {
    cursor: row-resize;
  }
`,
  b3 = b.default.th`
  cursor: ${(a) => (a.canSort ? "pointer" : null)};
  position: relative;
  ${(a) => a.customStyle}

  &.j-table__thead-th--dragging {
    opacity: 0.5;
  }

  .j-table__thead-th-drag-indicator {
    cursor: col-resize;
  }

  &:hover .j-table__resizer {
    opacity: 1;
  }
`,
  b4 = b.default.td`
  ${(a) => (a.isSortColumn ? { textAlign: "center" } : void 0)}
  ${(a) => a.customStyle}
`,
  b5 = b.default.div`
  display: flex;
  justify-content: ${(a) => a.paginationPosition};
  ${(a) => a.customStyle}
`,
  aO = { borderWidth: "1px", borderColor: "#000", borderStyle: "solid" },
  b6 = ({
    header: a,
    isColumnResizeable: b,
    isColumnSortable: l,
    isDataSortable: d,
    ascendingIconProps: j,
    descendingIconProps: k,
    headerColumnStyle: e,
  }) => {
    var f, h;
    let {
        attributes: m,
        listeners: n,
        transform: c,
        isDragging: o,
        setNodeRef: p,
      } = a1.useSortable({ id: a.id }),
      q = {
        transform: a4.CSS.Transform.toString({
          x: (null == c ? void 0 : c.x) || 0,
          y: (null == c ? void 0 : c.y) || 0,
          scaleX: 1,
          scaleY: 1,
        }),
      },
      i = g.useMemo(() => {
        var b;
        return l && !(null === (b = a.column.columnDef.meta) || void 0 === b ? void 0 : b.action);
      }, [null === (f = a.column.columnDef.meta) || void 0 === f ? void 0 : f.action, l]),
      r = i ? n : void 0,
      s = i ? m : void 0;
    return aU.jsxs(
      b3,
      {
        ref: p,
        className: `j-table__thead-th j-table__thead-th--${a.id} ${
          o ? "j-table__thead-th--dragging" : ""
        }`,
        colSpan: a.colSpan,
        canSort: d ? a.column.getCanSort() : void 0,
        customStyle: { ...e, ...q, width: b ? a.getSize() : null == e ? void 0 : e.width },
        onClick: d ? a.column.getToggleSortingHandler() : void 0,
        onMouseDown: b ? a.getResizeHandler() : void 0,
        onTouchStart: b ? a.getResizeHandler() : void 0,
        ...r,
        ...s,
        children: [
          a0.flexRender(a.column.columnDef.header, a.getContext()),
          i
            ? aU.jsx(M, {
                className: "j-table__thead-th-drag-indicator",
                iconName: "MdDragIndicator",
              })
            : void 0,
          d
            ? null !==
                (h = {
                  asc: j ? aU.jsx(M, { ...j }) : " \u{1F53C}",
                  desc: k ? aU.jsx(M, { ...k }) : " \u{1F53D}",
                }[a.column.getIsSorted()]) && void 0 !== h
              ? h
              : null
            : void 0,
          b
            ? aU.jsx(bZ, {
                className: "j-table__resizer",
                isResizing: a.column.getIsResizing(),
                onMouseDown: a.getResizeHandler(),
                onTouchStart: a.getResizeHandler(),
              })
            : void 0,
        ],
      },
      a.id
    );
  },
  b7 = ({
    row: a,
    isRowSortable: c,
    isColumnResizeable: l,
    bodyRowStyle: d,
    bodyColumnStyle: e,
    sortColumnStyle: f,
  }) => {
    let {
        attributes: g,
        listeners: h,
        transform: b,
        isDragging: i,
        setNodeRef: j,
      } = a1.useSortable({ id: a.id }),
      k = {
        transform: a4.CSS.Transform.toString({
          x: (null == b ? void 0 : b.x) || 0,
          y: (null == b ? void 0 : b.y) || 0,
          scaleX: 1,
          scaleY: 1,
        }),
      };
    return aU.jsxs(
      b2,
      {
        ref: j,
        className: `j-table__tbody-tr j-table__tbody-tr--${a.id} ${
          i ? "j-table__tbody-tr--dragging" : ""
        }`,
        customStyle: { ...d, ...k },
        children: [
          c
            ? aU.jsx(b4, {
                isSortColumn: !0,
                customStyle: { ...e, ...f },
                className: "j-table__tbody-td j-table__tbody-td--drag",
                ...h,
                ...g,
                children: aU.jsx(M, { iconName: "MdDragIndicator" }),
              })
            : void 0,
          a
            .getVisibleCells()
            .map((a) =>
              aU.jsx(
                b4,
                {
                  className: `j-table__tbody-td j-table__tbody-td--${a.id}`,
                  customStyle: {
                    ...e,
                    width: l ? a.column.getSize() : null == e ? void 0 : e.width,
                  },
                  children: a0.flexRender(a.column.columnDef.cell, a.getContext()),
                },
                a.id
              )
            ),
        ],
      },
      a.id
    );
  },
  aP = (
    {
      className: l,
      data: m = [],
      columns: n = [],
      actions: o = [],
      wrapperStyle: p,
      tableStyle: f,
      headerStyle: q,
      headerRowStyle: L,
      headerColumnStyle: M,
      bodyStyle: r,
      bodyRowStyle: N,
      bodyColumnStyle: O,
      sortColumnStyle: P,
      footerStyle: s,
      footerRowStyle: Q,
      footerColumnStyle: R,
      paginationWrapperStyle: t,
      isColumnResizeable: i,
      isHeaderVisible: u,
      isFooterVisible: v,
      isColumnSortable: S,
      onColumnSortingChange: T,
      isRowSortable: U,
      onRowSortingChange: V,
      isDataSortable: j,
      ascendingIconProps: W,
      descendingIconProps: X,
      onDataSortingChange: w,
      isPaginationEnabled: a,
      paginationPosition: x,
      pageSize: b,
      totalPage: e,
      paginationProps: y,
      paginationStyle: z,
      onPaginationChange: A,
    },
    B
  ) => {
    let C = g.useMemo(() => m, [m]),
      [k, D] = g.useState([]),
      [h, E] = g.useState({ pageIndex: 0, pageSize: b || 20 }),
      F = g.useMemo(
        () =>
          n.map((a) => ({
            accessorKey: a.path,
            header: a.name,
            footer: a.name,
            cell: a.renderColumn ? a.renderColumn : (a) => a.getValue() || "",
            enableSorting: a.sortable,
          })),
        [n]
      ),
      G = g.useMemo(
        () =>
          o.map((a) => ({
            meta: { action: !0 },
            header: a.name,
            footer: a.name,
            cell: a.renderColumn ? a.renderColumn : (a) => a.getValue() || "",
            enableSorting: !1,
          })),
        [o]
      ),
      H = g.useMemo(() => [...F, ...G], [F, G]),
      c = a0.useReactTable({
        data: C,
        columns: H,
        columnResizeMode: i ? "onChange" : void 0,
        pageCount: a ? e : void 0,
        state: { sorting: j ? k : void 0, pagination: a ? h : void 0 },
        manualPagination: a,
        manualSorting: !0,
        getCoreRowModel: a0.getCoreRowModel(),
        onPaginationChange: a ? E : void 0,
        onSortingChange: j ? D : void 0,
      }),
      I = a2.useSensors(
        a2.useSensor(a2.PointerSensor),
        a2.useSensor(a2.MouseSensor),
        a2.useSensor(a2.TouchSensor),
        a2.useSensor(a2.KeyboardSensor, { coordinateGetter: a1.sortableKeyboardCoordinates })
      );
    g.useEffect(() => {
      if (a && !(Number.isInteger(b) && Number.isInteger(e)))
        throw Error("`pageSize` and `totalPage` should be required if pagination enabled");
    }, [a, b, e]),
      g.useEffect(() => {
        let a = null == k ? void 0 : k[0];
        w && a && w(a.id, a.desc ? "desc" : "asc");
      }, [w, k]),
      g.useEffect(() => {
        A && A(String(h.pageIndex + 1), String(h.pageSize));
      }, [A, h]);
    let J = (a, b) => {
        c.setPageIndex(a - 1), c.setPageSize(b);
      },
      Y = ({ active: d, over: c }) => {
        var a, b;
        let e = null === (a = d.data.current) || void 0 === a ? void 0 : a.sortable.index,
          f =
            null === (b = null == c ? void 0 : c.data.current) || void 0 === b
              ? void 0
              : b.sortable.index;
        return { currentIndex: e, newIndex: f };
      },
      K = (a) => {
        let { currentIndex: b, newIndex: c } = Y(a);
        V && V(b, c, a);
      },
      Z = (a) => {
        let { currentIndex: b, newIndex: c } = Y(a);
        T && T(b, c, a);
      };
    return aU.jsxs(bY, {
      ref: B,
      customStyle: p,
      className: l,
      children: [
        aU.jsxs(b$, {
          className: "j-table",
          customStyle: { ...f, width: i ? c.getCenterTotalSize() : null == f ? void 0 : f.width },
          children: [
            u
              ? aU.jsx(b_, {
                  className: "j-table__thead",
                  customStyle: q,
                  children: c
                    .getHeaderGroups()
                    .map((a) =>
                      aU.jsxs(
                        b2,
                        {
                          className: `j-table__thead-tr j-table__thead-tr--${a.id}`,
                          customStyle: L,
                          children: [
                            U
                              ? aU.jsx(b3, {
                                  className: "j-table__thead-th j-table__thead-th--drag",
                                  customStyle: M,
                                })
                              : void 0,
                            aU.jsx(a2.DndContext, {
                              sensors: I,
                              collisionDetection: a2.closestCenter,
                              modifiers: [
                                a3.restrictToFirstScrollableAncestor,
                                a3.restrictToHorizontalAxis,
                                a3.restrictToParentElement,
                              ],
                              onDragEnd: Z,
                              children: aU.jsx(a1.SortableContext, {
                                items: a.headers,
                                strategy: a1.horizontalListSortingStrategy,
                                children: a.headers.map((a) =>
                                  aU.jsx(
                                    b6,
                                    {
                                      header: a,
                                      isColumnResizeable: i,
                                      isColumnSortable: S,
                                      isDataSortable: j,
                                      ascendingIconProps: W,
                                      descendingIconProps: X,
                                      headerColumnStyle: M,
                                    },
                                    a.id
                                  )
                                ),
                              }),
                            }),
                          ],
                        },
                        a.id
                      )
                    ),
                })
              : void 0,
            aU.jsx(b0, {
              className: "j-table__tbody",
              customStyle: r,
              children: aU.jsx(a2.DndContext, {
                sensors: I,
                collisionDetection: a2.closestCenter,
                modifiers: [
                  a3.restrictToFirstScrollableAncestor,
                  a3.restrictToVerticalAxis,
                  a3.restrictToParentElement,
                ],
                onDragEnd: K,
                children: aU.jsx(a1.SortableContext, {
                  items: c.getRowModel().rows,
                  strategy: a1.verticalListSortingStrategy,
                  children: c
                    .getRowModel()
                    .rows.map((a) =>
                      aU.jsx(
                        b7,
                        {
                          row: a,
                          isRowSortable: U,
                          bodyRowStyle: N,
                          bodyColumnStyle: O,
                          sortColumnStyle: P,
                        },
                        a.id
                      )
                    ),
                }),
              }),
            }),
            v
              ? aU.jsx(b1, {
                  className: "j-table__tfoot",
                  customStyle: s,
                  children: c
                    .getFooterGroups()
                    .map((a) =>
                      aU.jsxs(
                        b2,
                        {
                          className: `j-table__tfoot-tr j-table__tfoot-tr--${a.id}`,
                          style: Q,
                          children: [
                            U
                              ? aU.jsx(b3, {
                                  className: "j-table__tfooter-th j-table__tfooter-th--drag",
                                  customStyle: R,
                                })
                              : void 0,
                            a.headers.map((a) =>
                              aU.jsx(
                                b3,
                                {
                                  className: `j-table__tfoot-th j-table__tfoot-th--${a.id}`,
                                  colSpan: a.colSpan,
                                  customStyle: R,
                                  children: a0.flexRender(
                                    a.column.columnDef.footer,
                                    a.getContext()
                                  ),
                                },
                                a.id
                              )
                            ),
                          ],
                        },
                        a.id
                      )
                    ),
                })
              : void 0,
          ],
        }),
        a
          ? aU.jsx(b5, {
              paginationPosition: x || "left",
              customStyle: t,
              children: aU.jsx(d.Pagination, {
                ...y,
                style: z,
                current: h.pageIndex + 1,
                pageSize: b,
                total: Number.isInteger(b) && Number.isInteger(e) ? b * e : void 0,
                onChange: J,
              }),
            })
          : void 0,
      ],
    });
  },
  aQ = a.default.forwardRef(aP),
  b8 = b.default(d.Drawer)`
  && {
    .jitera-drawer-content-wrapper {
      box-shadow: inherit;
    }
    .jitera-drawer-content {
      background-color: inherit;
    }
    .jitera-drawer-body {
      padding: inherit;
      font-size: inherit;
      line-height: inherit;
      word-wrap: inherit;
    }
  }
`;
(exports.DrawerPositionEnum = void 0),
  (function (a) {
    (a.TOP = "top"), (a.RIGHT = "right"), (a.BOTTOM = "bottom"), (a.LEFT = "left");
  })(exports.DrawerPositionEnum || (exports.DrawerPositionEnum = {}));
const b9 = [],
  aR = {
    show(b, { position: c, ...d } = {}) {
      let e = document.createDocumentFragment();
      function a(a = !0) {
        setTimeout(() => {
          aV.render(
            aU.jsx(aI, {
              children: aU.jsx(b8, {
                visible: a,
                closable: !1,
                title: null,
                placement: c,
                ...d,
                children: b,
              }),
            }),
            e
          ),
            a
              ? setTimeout(() => {
                  var a;
                  let b = document.querySelectorAll(".jitera-drawer");
                  null === (a = Array.from(b).at(b.length - 1)) ||
                    void 0 === a ||
                    a.classList.add(`jitera-drawer-${b9.length}`);
                })
              : setTimeout(() => {
                  var a, b, c;
                  let d = document.querySelectorAll(".jitera-drawer");
                  null === (a = Array.from(d).at(d.length - 1)) ||
                    void 0 === a ||
                    a.classList.add(`jitera-drawer-${b9.length + 1}`),
                    null ===
                      (c =
                        null === (b = document.querySelector(`.jitera-drawer-${b9.length + 1}`)) ||
                        void 0 === b
                          ? void 0
                          : b.parentElement) ||
                      void 0 === c ||
                      c.remove();
                });
        });
      }
      b9.push(a), a();
    },
    hide() {
      var a;
      null === (a = b9.pop()) || void 0 === a || a(!1);
    },
    hideAll() {
      b9.forEach((a) => {
        a(!1);
      });
    },
  },
  ca = b.default.div`
  .otp-cell {
    margin-right: 16px;

    &:last-child {
      margin-right: 0;
    }
  }
`;
(exports.OTPInputType = void 0),
  (function (a) {
    (a.Box = "box"), (a.Underline = "underline");
  })(exports.OTPInputType || (exports.OTPInputType = {}));
const aS = a.default.forwardRef((g, h) => {
  let {
      isPreview: i,
      responsiveVisibility: j,
      className: k,
      pinCount: l = 4,
      autoFocus: m,
      errorMessage: c,
      style: n = { justifyContent: "center" },
      cellTextStyle: a = {},
      cellStyle: b = {},
      otpInputType: o = "box",
      ...p
    } = g,
    { theme: d } = aH(),
    e = {};
  o === exports.OTPInputType.Underline &&
    (e = { borderLeft: "unset", borderRight: "unset", borderTop: "unset" });
  let f = {
    ...e,
    width: "100%",
    height: "100%",
    fontSize: "1rem",
    borderRadius: 4,
    border: `${d.borderWidthBase} solid ${d.borderColorBase}`,
  };
  bl(b) && bl(a) && (f = { ...b, ...a });
  let { classNames: q } = bi({ className: k, responsiveVisibility: j });
  return aU.jsxs(ca, {
    className: q,
    ref: h,
    children: [
      aU.jsx(bh.default, {
        isDisabled: i,
        ...p,
        numInputs: l,
        shouldAutoFocus: m,
        containerStyle: n,
        inputStyle: f,
        className: bm("otp-cell", b, a),
      }),
      !!c && aU.jsx(am, { type: "danger", children: c }),
    ],
  });
});
d.message.config({ prefixCls: `${aG}-message` });
const aT = {
  success(a, b, c) {
    d.message.success(a, b, c);
  },
  error(a, b, c) {
    d.message.error(a, b, c);
  },
  info(a, b, c) {
    d.message.info(a, b, c);
  },
  warning(a, b, c) {
    d.message.warning(a, b, c);
  },
  warn(a, b, c) {
    d.message.warn(a, b, c);
  },
  loading(a, b, c) {
    d.message.loading(a, b, c);
  },
  message: d.message,
};
Object.defineProperty(exports, "createColumnHelper", {
  enumerable: !0,
  get: function () {
    return a0.createColumnHelper;
  },
}),
  Object.defineProperty(exports, "arrayMove", {
    enumerable: !0,
    get: function () {
      return a1.arrayMove;
    },
  }),
  (exports.Box = I),
  (exports.Button = N),
  (exports.Carousel = aE),
  (exports.Checkbox = az),
  (exports.Col = O),
  (exports.Content = P),
  (exports.DEFAULT_TABLE_BORDER_STYLES = aO),
  (exports.DateTimePicker = aB),
  (exports.Divider = aD),
  (exports.Drawer = aR),
  (exports.Footer = Q),
  (exports.Form = S),
  (exports.HamburgerMenu = aC),
  (exports.Header = T),
  (exports.Icon = M),
  (exports.Image = U),
  (exports.ImagePicker = aA),
  (exports.Input = an),
  (exports.Layout = ao),
  (exports.List = aw),
  (exports.Menu = ap),
  (exports.MenuItem = aq),
  (exports.Modal = aJ),
  (exports.OTPInput = aS),
  (exports.Page = as),
  (exports.Radio = ax),
  (exports.RichText = aN),
  (exports.Row = at),
  (exports.Select = av),
  (exports.Sider = au),
  (exports.SubMenu = ar),
  (exports.Tab = aF),
  (exports.Table = aQ),
  (exports.Text = am),
  (exports.TextArea = ay),
  (exports.ThemeProvider = aI),
  (exports.Toast = aT),
  (exports.assertUnreachable = K),
  (exports.defaultTheme = l),
  (exports.getIconComponent = J),
  (exports.getIconSet = L),
  (exports.useTheme = aH);
