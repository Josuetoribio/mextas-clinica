/* @ds-bundle: {"format":4,"namespace":"ClinicaMextasDesignSystem_d4abcf","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Chip","sourcePath":"components/core/Chip.jsx"},{"name":"Eyebrow","sourcePath":"components/core/Eyebrow.jsx"},{"name":"SectionHeading","sourcePath":"components/core/SectionHeading.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Field","sourcePath":"components/forms/Field.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"RadioGroup","sourcePath":"components/forms/RadioGroup.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Accordion","sourcePath":"components/patterns/Accordion.jsx"},{"name":"DoctorCard","sourcePath":"components/patterns/DoctorCard.jsx"},{"name":"Modal","sourcePath":"components/patterns/Modal.jsx"},{"name":"SpecialtyCard","sourcePath":"components/patterns/SpecialtyCard.jsx"},{"name":"StatBlock","sourcePath":"components/patterns/StatBlock.jsx"},{"name":"StepIndicator","sourcePath":"components/patterns/StepIndicator.jsx"},{"name":"TimeSlotPicker","sourcePath":"components/patterns/TimeSlotPicker.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"b8532c05af53","components/core/Button.jsx":"5ca067abdeb6","components/core/Card.jsx":"74f5fd083119","components/core/Chip.jsx":"00acf58f8024","components/core/Eyebrow.jsx":"bdaaea52b3eb","components/core/SectionHeading.jsx":"20356f4ffcd7","components/forms/Checkbox.jsx":"43abbd441c32","components/forms/Field.jsx":"50f646f87c02","components/forms/Input.jsx":"004818932e8b","components/forms/RadioGroup.jsx":"636b303f4d19","components/forms/Select.jsx":"5af90aee33c4","components/patterns/Accordion.jsx":"99aaf49c5d59","components/patterns/DoctorCard.jsx":"069708d28749","components/patterns/Modal.jsx":"0516c293f9a4","components/patterns/SpecialtyCard.jsx":"0fa25ecef289","components/patterns/StatBlock.jsx":"fa0ffff39ee5","components/patterns/StepIndicator.jsx":"b2bfbe3abb50","components/patterns/TimeSlotPicker.jsx":"403c15ef2caf","ui_kits/website/Booking.jsx":"eb08a86b8eae","ui_kits/website/Chrome.jsx":"c5fec43473e6","ui_kits/website/Directory.jsx":"3ac18bb998be","ui_kits/website/Home.jsx":"1313aad05a4b","ui_kits/website/Pages.jsx":"c9d0b591d914","ui_kits/website/Patients.jsx":"8d707720bf61","ui_kits/website/data.js":"3d2f041760c6"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.ClinicaMextasDesignSystem_d4abcf = window.ClinicaMextasDesignSystem_d4abcf || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
function Badge({
  tone = 'neutral',
  size = 'md',
  icon = null,
  children,
  style
}) {
  const t = {
    neutral: ['var(--ivory-200)', 'var(--text-body)'],
    green: ['var(--green-100)', 'var(--green-800)'],
    gold: ['var(--gold-100)', 'var(--gold-700)'],
    inverse: ['rgba(255,255,255,.1)', 'var(--ivory-100)'],
    danger: ['var(--status-danger-soft)', 'var(--status-danger)'],
    outline: ['transparent', 'var(--text-muted)']
  }[tone];
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      background: t[0],
      color: t[1],
      border: tone === 'outline' ? '1px solid var(--line-strong)' : '1px solid transparent',
      fontSize: size === 'sm' ? 11 : 12,
      fontWeight: 600,
      letterSpacing: '.04em',
      padding: size === 'sm' ? '3px 8px' : '5px 11px',
      borderRadius: 'var(--radius-pill)',
      lineHeight: 1.4,
      ...style
    }
  }, icon, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const sizes = {
  sm: {
    padding: '8px 16px',
    fontSize: 13
  },
  md: {
    padding: '12px 22px',
    fontSize: 14
  },
  lg: {
    padding: '15px 28px',
    fontSize: 15
  }
};
function Button({
  variant = 'primary',
  size = 'md',
  icon = null,
  iconRight = null,
  disabled = false,
  fullWidth = false,
  as = 'button',
  href,
  onClick,
  children,
  style,
  ...rest
}) {
  const [h, setH] = React.useState(false),
    [p, setP] = React.useState(false);
  const v = {
    primary: {
      background: h ? 'var(--action-primary-hover)' : 'var(--action-primary)',
      color: 'var(--action-primary-text)',
      border: '1px solid transparent'
    },
    secondary: {
      background: h ? 'var(--ivory-200)' : 'transparent',
      color: 'var(--green-800)',
      border: '1px solid var(--action-secondary-border)'
    },
    ghost: {
      background: h ? 'var(--ivory-200)' : 'transparent',
      color: 'var(--green-800)',
      border: '1px solid transparent'
    },
    gold: {
      background: 'transparent',
      color: h ? 'var(--gold-700)' : 'var(--gold-600)',
      border: '1px solid ' + (h ? 'var(--gold-600)' : 'var(--gold-300)')
    },
    inverse: {
      background: h ? 'var(--ivory-200)' : 'var(--ivory-100)',
      color: 'var(--green-800)',
      border: '1px solid transparent'
    }
  }[variant];
  const Tag = as === 'a' ? 'a' : 'button';
  return /*#__PURE__*/React.createElement(Tag, _extends({
    href: href,
    onClick: disabled ? undefined : onClick,
    disabled: Tag === 'button' ? disabled : undefined,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => {
      setH(false);
      setP(false);
    },
    onMouseDown: () => setP(true),
    onMouseUp: () => setP(false),
    style: {
      display: fullWidth ? 'flex' : 'inline-flex',
      width: fullWidth ? '100%' : undefined,
      alignItems: 'center',
      justifyContent: 'center',
      gap: 9,
      fontFamily: 'var(--font-sans)',
      fontWeight: 600,
      lineHeight: 1,
      letterSpacing: '.01em',
      textDecoration: 'none',
      cursor: disabled ? 'not-allowed' : 'pointer',
      borderRadius: 'var(--radius-sm)',
      opacity: disabled ? .45 : 1,
      transform: p ? 'scale(.985)' : 'none',
      transition: 'background var(--dur-fast) var(--ease-standard),color var(--dur-fast) var(--ease-standard),border-color var(--dur-fast) var(--ease-standard),transform var(--dur-fast) var(--ease-standard)',
      ...sizes[size],
      ...v,
      ...style
    }
  }, rest), icon, children, iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Card({
  interactive = false,
  padding = 24,
  tone = 'card',
  as = 'div',
  onClick,
  children,
  style,
  ...rest
}) {
  const [h, setH] = React.useState(false);
  const bg = {
    card: 'var(--surface-card)',
    sunken: 'var(--surface-sunken)',
    accent: 'var(--surface-accent-soft)',
    inverse: 'var(--surface-inverse)'
  }[tone];
  const Tag = as;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    onClick: onClick,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      background: bg,
      border: '1px solid ' + (interactive && h ? 'var(--gold-300)' : tone === 'inverse' ? 'var(--line-inverse)' : 'var(--line-hairline)'),
      borderRadius: 'var(--radius-md)',
      padding,
      boxShadow: interactive && h ? 'var(--shadow-hover)' : 'var(--shadow-none)',
      transform: interactive && h ? 'translateY(-2px)' : 'none',
      cursor: interactive ? 'pointer' : 'default',
      transition: 'box-shadow var(--dur-base) var(--ease-standard),transform var(--dur-base) var(--ease-standard),border-color var(--dur-base) var(--ease-standard)',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Chip.jsx
try { (() => {
function Chip({
  selected = false,
  count,
  onClick,
  children,
  style
}) {
  const [h, setH] = React.useState(false);
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onClick,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    "aria-pressed": selected,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 7,
      fontFamily: 'var(--font-sans)',
      fontSize: 13,
      fontWeight: 500,
      padding: '9px 16px',
      borderRadius: 'var(--radius-pill)',
      cursor: 'pointer',
      background: selected ? 'var(--green-800)' : h ? 'var(--ivory-200)' : 'transparent',
      color: selected ? 'var(--ivory-100)' : 'var(--text-body)',
      border: '1px solid ' + (selected ? 'var(--green-800)' : 'var(--line-strong)'),
      transition: 'all var(--dur-fast) var(--ease-standard)',
      ...style
    }
  }, children, count != null && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      opacity: .65
    }
  }, count));
}
Object.assign(__ds_scope, { Chip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Chip.jsx", error: String((e && e.message) || e) }); }

// components/core/Eyebrow.jsx
try { (() => {
function Eyebrow({
  children,
  tone = 'gold',
  align = 'left',
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-eyebrow-size)',
      fontWeight: 600,
      letterSpacing: 'var(--tracking-eyebrow)',
      textTransform: 'uppercase',
      textAlign: align,
      color: tone === 'gold' ? 'var(--text-eyebrow)' : tone === 'muted' ? 'var(--text-muted)' : 'var(--green-300)',
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/core/SectionHeading.jsx
try { (() => {
function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  inverse = false,
  size = 'md',
  actions = null,
  style
}) {
  const fs = {
    sm: 'var(--text-display-sm)',
    md: 'var(--text-display-md)',
    lg: 'var(--text-display-lg)'
  }[size];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14,
      textAlign: align,
      alignItems: align === 'center' ? 'center' : 'flex-start',
      maxWidth: align === 'center' ? 640 : 560,
      marginInline: align === 'center' ? 'auto' : undefined,
      ...style
    }
  }, eyebrow && /*#__PURE__*/React.createElement(__ds_scope.Eyebrow, {
    tone: inverse ? 'inverse' : 'gold'
  }, eyebrow), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: fs,
      lineHeight: 'var(--leading-display)',
      letterSpacing: 'var(--tracking-display)',
      color: inverse ? 'var(--text-on-inverse)' : 'var(--text-display)',
      margin: 0
    }
  }, title), description && /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-body-lg)',
      lineHeight: 'var(--leading-body)',
      color: inverse ? 'var(--text-on-inverse-muted)' : 'var(--text-muted)',
      margin: 0
    }
  }, description), actions && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      marginTop: 8
    }
  }, actions));
}
Object.assign(__ds_scope, { SectionHeading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/SectionHeading.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function Checkbox({
  checked = false,
  onChange,
  label,
  disabled = false,
  style
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'flex-start',
      gap: 11,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? .5 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: checked,
    disabled: disabled,
    onChange: e => onChange && onChange(e.target.checked),
    style: {
      appearance: 'none',
      width: 18,
      height: 18,
      flex: '0 0 18px',
      marginTop: 2,
      borderRadius: 'var(--radius-xs)',
      cursor: 'inherit',
      border: '1px solid ' + (checked ? 'var(--green-800)' : 'var(--line-strong)'),
      background: checked ? 'var(--green-800)' : 'var(--surface-raised)',
      backgroundImage: checked ? "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23F9F6F0' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'><polyline points='20 6 9 17 4 12'/></svg>\")" : 'none',
      backgroundSize: '13px',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      transition: 'all var(--dur-fast) var(--ease-standard)'
    }
  }), label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-body-sm)',
      lineHeight: 1.5,
      color: 'var(--text-body)'
    }
  }, label));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Field.jsx
try { (() => {
function Field({
  label,
  hint,
  error,
  required = false,
  htmlFor,
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: htmlFor,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 7,
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      fontWeight: 600,
      letterSpacing: 'var(--tracking-label)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, label, required && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--gold-600)',
      marginLeft: 4
    }
  }, "*")), children, error ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: 'var(--status-danger)'
    }
  }, error) : hint ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: 'var(--text-muted)'
    }
  }, hint) : null);
}
Object.assign(__ds_scope, { Field });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Field.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const base = {
  width: '100%',
  fontFamily: 'var(--font-sans)',
  fontSize: 'var(--text-body-md)',
  color: 'var(--text-body)',
  background: 'var(--surface-raised)',
  border: '1px solid var(--line-strong)',
  borderRadius: 'var(--radius-sm)',
  padding: '13px 15px',
  outline: 'none',
  transition: 'border-color var(--dur-fast) var(--ease-standard),box-shadow var(--dur-fast) var(--ease-standard)'
};
function Input({
  invalid = false,
  icon = null,
  multiline = false,
  rows = 4,
  style,
  ...rest
}) {
  const [f, setF] = React.useState(false);
  const s = {
    ...base,
    borderColor: invalid ? 'var(--status-danger)' : f ? 'var(--gold-600)' : 'var(--line-strong)',
    boxShadow: f ? 'var(--ring-focus)' : 'none',
    paddingLeft: icon ? 42 : 15,
    ...style
  };
  const el = multiline ? /*#__PURE__*/React.createElement("textarea", _extends({
    rows: rows,
    onFocus: () => setF(true),
    onBlur: () => setF(false),
    style: {
      ...s,
      resize: 'vertical',
      lineHeight: 1.6
    }
  }, rest)) : /*#__PURE__*/React.createElement("input", _extends({
    onFocus: () => setF(true),
    onBlur: () => setF(false),
    style: s
  }, rest));
  if (!icon) return el;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'block'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: 14,
      top: '50%',
      transform: 'translateY(-50%)',
      color: 'var(--text-muted)',
      display: 'flex'
    }
  }, icon), el);
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/RadioGroup.jsx
try { (() => {
function RadioGroup({
  options = [],
  value,
  onChange,
  name,
  columns = 1,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    role: "radiogroup",
    style: {
      display: 'grid',
      gridTemplateColumns: `repeat(${columns},1fr)`,
      gap: 10,
      ...style
    }
  }, options.map(o => {
    const v = typeof o === 'string' ? o : o.value,
      l = typeof o === 'string' ? o : o.label,
      d = typeof o === 'object' ? o.description : null,
      sel = value === v;
    return /*#__PURE__*/React.createElement("label", {
      key: v,
      style: {
        display: 'flex',
        gap: 12,
        alignItems: 'flex-start',
        padding: '14px 16px',
        cursor: 'pointer',
        borderRadius: 'var(--radius-sm)',
        background: sel ? 'var(--ivory-200)' : 'var(--surface-raised)',
        border: '1px solid ' + (sel ? 'var(--green-600)' : 'var(--line-hairline)'),
        transition: 'all var(--dur-fast) var(--ease-standard)'
      }
    }, /*#__PURE__*/React.createElement("input", {
      type: "radio",
      name: name,
      checked: sel,
      onChange: () => onChange && onChange(v),
      style: {
        appearance: 'none',
        width: 17,
        height: 17,
        flex: '0 0 17px',
        marginTop: 2,
        borderRadius: '50%',
        cursor: 'pointer',
        border: '1px solid ' + (sel ? 'var(--green-800)' : 'var(--line-strong)'),
        boxShadow: sel ? 'inset 0 0 0 4px var(--surface-raised), inset 0 0 0 10px var(--green-800)' : 'none'
      }
    }), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'block',
        fontSize: 'var(--text-body-md)',
        fontWeight: sel ? 600 : 500,
        color: 'var(--text-body)'
      }
    }, l), d && /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'block',
        fontSize: 12.5,
        color: 'var(--text-muted)',
        marginTop: 3
      }
    }, d)));
  }));
}
Object.assign(__ds_scope, { RadioGroup });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/RadioGroup.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Select({
  options = [],
  placeholder = 'Selecciona una opción',
  invalid = false,
  style,
  ...rest
}) {
  const [f, setF] = React.useState(false);
  return /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'block'
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    onFocus: () => setF(true),
    onBlur: () => setF(false),
    style: {
      width: '100%',
      appearance: 'none',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-body-md)',
      color: 'var(--text-body)',
      background: 'var(--surface-raised)',
      border: '1px solid ' + (invalid ? 'var(--status-danger)' : f ? 'var(--gold-600)' : 'var(--line-strong)'),
      boxShadow: f ? 'var(--ring-focus)' : 'none',
      borderRadius: 'var(--radius-sm)',
      padding: '13px 40px 13px 15px',
      outline: 'none',
      cursor: 'pointer',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("option", {
    value: ""
  }, placeholder), options.map(o => {
    const v = typeof o === 'string' ? o : o.value,
      l = typeof o === 'string' ? o : o.label;
    return /*#__PURE__*/React.createElement("option", {
      key: v,
      value: v
    }, l);
  })), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": true,
    style: {
      position: 'absolute',
      right: 16,
      top: '50%',
      transform: 'translateY(-50%)',
      pointerEvents: 'none',
      color: 'var(--text-muted)',
      fontSize: 11
    }
  }, "\u25BE"));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/patterns/Accordion.jsx
try { (() => {
function Accordion({
  items = [],
  allowMultiple = false,
  defaultOpen = [],
  style
}) {
  const [open, setOpen] = React.useState(defaultOpen);
  const toggle = i => setOpen(o => o.includes(i) ? o.filter(x => x !== i) : allowMultiple ? [...o, i] : [i]);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--line-hairline)',
      ...style
    }
  }, items.map((it, i) => {
    const isOpen = open.includes(i);
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        borderBottom: '1px solid var(--line-hairline)'
      }
    }, /*#__PURE__*/React.createElement("button", {
      type: "button",
      onClick: () => toggle(i),
      "aria-expanded": isOpen,
      style: {
        display: 'flex',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 20,
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        padding: '20px 4px',
        textAlign: 'left',
        fontFamily: 'var(--font-sans)',
        fontSize: 'var(--text-body-lg)',
        fontWeight: 500,
        color: isOpen ? 'var(--green-800)' : 'var(--text-body)',
        transition: 'color var(--dur-fast) var(--ease-standard)'
      }
    }, it.question || it.title, /*#__PURE__*/React.createElement("span", {
      "aria-hidden": true,
      style: {
        flex: '0 0 auto',
        color: 'var(--gold-600)',
        fontSize: 18,
        lineHeight: 1,
        transform: isOpen ? 'rotate(45deg)' : 'none',
        transition: 'transform var(--dur-base) var(--ease-standard)'
      }
    }, "+")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateRows: isOpen ? '1fr' : '0fr',
        transition: 'grid-template-rows var(--dur-base) var(--ease-standard)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '0 48px 22px 4px',
        fontSize: 'var(--text-body-md)',
        lineHeight: 'var(--leading-body)',
        color: 'var(--text-muted)'
      }
    }, it.answer || it.content))));
  }));
}
Object.assign(__ds_scope, { Accordion });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/patterns/Accordion.jsx", error: String((e && e.message) || e) }); }

// components/patterns/DoctorCard.jsx
try { (() => {
function DoctorCard({
  name,
  specialty,
  subspecialty,
  license,
  photo,
  location,
  layout = 'portrait',
  actions = null,
  onClick,
  style
}) {
  const [h, setH] = React.useState(false);
  const row = layout === 'row';
  return /*#__PURE__*/React.createElement("article", {
    onClick: onClick,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      display: 'flex',
      flexDirection: row ? 'row' : 'column',
      gap: row ? 18 : 0,
      overflow: 'hidden',
      background: 'var(--surface-card)',
      border: '1px solid ' + (h ? 'var(--gold-300)' : 'var(--line-hairline)'),
      borderRadius: 'var(--radius-md)',
      boxShadow: h ? 'var(--shadow-hover)' : 'none',
      transform: h && onClick ? 'translateY(-2px)' : 'none',
      cursor: onClick ? 'pointer' : 'default',
      transition: 'all var(--dur-base) var(--ease-standard)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: row ? '0 0 120px' : 'none',
      height: row ? 'auto' : 210,
      background: 'var(--ivory-200)',
      overflow: 'hidden'
    }
  }, photo ? /*#__PURE__*/React.createElement("img", {
    src: photo,
    alt: name,
    loading: "lazy",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      objectPosition: 'top center',
      display: 'block'
    }
  }) : null), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: row ? '18px 18px 18px 0' : '18px 16px 20px',
      textAlign: row ? 'left' : 'center',
      display: 'flex',
      flexDirection: 'column',
      gap: 4,
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-title-sm)',
      fontWeight: 600,
      color: 'var(--text-heading)',
      letterSpacing: 0,
      lineHeight: 1.3,
      margin: 0
    }
  }, name), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-body-sm)',
      color: 'var(--text-muted)',
      margin: 0
    }
  }, specialty, subspecialty ? ' · ' + subspecialty : ''), license && /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 12,
      color: 'var(--ink-300)',
      margin: 0
    }
  }, "C\xE9d. Prof. ", license), location && /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 12,
      color: 'var(--text-accent)',
      margin: '2px 0 0'
    }
  }, location), actions && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 8,
      marginTop: 12,
      justifyContent: row ? 'flex-start' : 'center'
    }
  }, actions)));
}
Object.assign(__ds_scope, { DoctorCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/patterns/DoctorCard.jsx", error: String((e && e.message) || e) }); }

// components/patterns/Modal.jsx
try { (() => {
function Modal({
  open,
  onClose,
  title,
  eyebrow,
  size = 'md',
  footer = null,
  variant = 'modal',
  children
}) {
  React.useEffect(() => {
    if (!open) return;
    const k = e => e.key === 'Escape' && onClose && onClose();
    window.addEventListener('keydown', k);
    return () => window.removeEventListener('keydown', k);
  }, [open, onClose]);
  if (!open) return null;
  const drawer = variant === 'drawer',
    sheet = variant === 'sheet';
  const w = {
    sm: 440,
    md: 620,
    lg: 860
  }[size];
  return /*#__PURE__*/React.createElement("div", {
    role: "dialog",
    "aria-modal": "true",
    "data-cm-modal": variant,
    "aria-label": typeof title === 'string' ? title : undefined,
    onClick: onClose,
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 80,
      background: 'rgba(18,39,31,.45)',
      backdropFilter: 'blur(2px)',
      display: 'flex',
      alignItems: drawer ? 'stretch' : sheet ? 'flex-end' : 'center',
      justifyContent: drawer ? 'flex-end' : 'center',
      padding: drawer || sheet ? 0 : 20,
      animation: 'cmFade var(--dur-base) var(--ease-standard)'
    }
  }, /*#__PURE__*/React.createElement("style", null, '@keyframes cmFade{from{opacity:0}to{opacity:1}}@keyframes cmRise{from{opacity:0;transform:translateY(14px)}to{opacity:1;transform:none}}@keyframes cmSlide{from{transform:translateX(24px);opacity:0}to{transform:none;opacity:1}}@keyframes cmSheet{from{transform:translateY(40px);opacity:0}to{transform:none;opacity:1}}'), /*#__PURE__*/React.createElement("div", {
    "data-cm-panel": "",
    onClick: e => e.stopPropagation(),
    style: {
      background: 'var(--surface-raised)',
      borderRadius: drawer ? 'var(--radius-lg) 0 0 var(--radius-lg)' : sheet ? 'var(--radius-xl) var(--radius-xl) 0 0' : 'var(--radius-lg)',
      width: drawer ? Math.min(w, 560) : '100%',
      maxWidth: drawer || sheet ? undefined : w,
      maxHeight: drawer ? '100%' : sheet ? '86vh' : '88vh',
      display: 'flex',
      flexDirection: 'column',
      boxShadow: 'var(--shadow-lg)',
      overflow: 'hidden',
      animation: (drawer ? 'cmSlide' : sheet ? 'cmSheet' : 'cmRise') + ' var(--dur-base) var(--ease-entrance)'
    }
  }, sheet && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": true,
    style: {
      width: 40,
      height: 4,
      borderRadius: 2,
      background: 'var(--ivory-400)',
      margin: '10px auto 0',
      flex: '0 0 auto'
    }
  }), /*#__PURE__*/React.createElement("header", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      gap: 20,
      padding: '24px 28px 18px',
      borderBottom: '1px solid var(--line-hairline)'
    }
  }, /*#__PURE__*/React.createElement("div", null, eyebrow && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-eyebrow-size)',
      fontWeight: 600,
      letterSpacing: 'var(--tracking-eyebrow)',
      textTransform: 'uppercase',
      color: 'var(--text-eyebrow)',
      marginBottom: 7
    }
  }, eyebrow), title && /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-title-lg)',
      lineHeight: 1.2,
      margin: 0,
      color: 'var(--text-display)'
    }
  }, title)), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onClose,
    "aria-label": "Cerrar",
    style: {
      background: 'none',
      border: '1px solid var(--line-hairline)',
      borderRadius: '50%',
      width: 32,
      height: 32,
      flex: '0 0 32px',
      cursor: 'pointer',
      color: 'var(--text-muted)',
      fontSize: 15,
      lineHeight: 1
    }
  }, "\xD7")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '24px 28px',
      overflowY: 'auto',
      flex: 1
    }
  }, children), footer && /*#__PURE__*/React.createElement("footer", {
    style: {
      padding: '18px 28px',
      borderTop: '1px solid var(--line-hairline)',
      background: 'var(--surface-page)',
      display: 'flex',
      justifyContent: 'flex-end',
      gap: 10
    }
  }, footer)));
}
Object.assign(__ds_scope, { Modal });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/patterns/Modal.jsx", error: String((e && e.message) || e) }); }

// components/patterns/SpecialtyCard.jsx
try { (() => {
function SpecialtyCard({
  name,
  icon = null,
  description,
  onClick,
  style
}) {
  const [h, setH] = React.useState(false);
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onClick,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 14,
      textAlign: 'center',
      aspectRatio: '1 / 1',
      width: '100%',
      minWidth: 0,
      padding: '20px 14px',
      cursor: 'pointer',
      fontFamily: 'var(--font-sans)',
      background: h ? 'var(--surface-card)' : 'var(--surface-sunken)',
      border: '1px solid ' + (h ? 'var(--gold-300)' : 'transparent'),
      borderRadius: 'var(--radius-md)',
      boxShadow: h ? 'var(--shadow-md)' : 'none',
      transform: h ? 'translateY(-2px)' : 'none',
      transition: 'all var(--dur-base) var(--ease-standard)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--gold-600)',
      display: 'flex'
    }
  }, icon), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-body-sm)',
      fontWeight: 600,
      lineHeight: 1.35,
      color: 'var(--text-heading)',
      overflowWrap: 'anywhere',
      hyphens: 'auto'
    },
    lang: "es"
  }, name), description && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: 'var(--text-muted)',
      lineHeight: 1.4
    }
  }, description));
}
Object.assign(__ds_scope, { SpecialtyCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/patterns/SpecialtyCard.jsx", error: String((e && e.message) || e) }); }

// components/patterns/StatBlock.jsx
try { (() => {
function StatBlock({
  value,
  label,
  icon = null,
  inverse = true,
  align = 'left',
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      justifyContent: align === 'center' ? 'center' : 'flex-start',
      ...style
    }
  }, icon && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--gold-500)',
      display: 'flex'
    }
  }, icon), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-display-sm)',
      lineHeight: 1,
      color: inverse ? 'var(--ivory-100)' : 'var(--text-display)'
    }
  }, value), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      marginTop: 7,
      color: inverse ? 'var(--text-on-inverse-muted)' : 'var(--text-muted)'
    }
  }, label)));
}
Object.assign(__ds_scope, { StatBlock });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/patterns/StatBlock.jsx", error: String((e && e.message) || e) }); }

// components/patterns/StepIndicator.jsx
try { (() => {
function StepIndicator({
  steps = [],
  current = 0,
  compact = false,
  style
}) {
  return /*#__PURE__*/React.createElement("ol", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: compact ? 8 : 12,
      listStyle: 'none',
      margin: 0,
      padding: 0,
      ...style
    }
  }, steps.map((s, i) => {
    const done = i < current,
      now = i === current;
    return /*#__PURE__*/React.createElement("li", {
      key: i,
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: compact ? 8 : 12,
        flex: i === steps.length - 1 ? '0 0 auto' : 1
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 9
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 24,
        height: 24,
        flex: '0 0 24px',
        borderRadius: '50%',
        display: 'grid',
        placeItems: 'center',
        fontSize: 11.5,
        fontWeight: 600,
        background: done ? 'var(--green-800)' : now ? 'var(--gold-600)' : 'var(--ivory-300)',
        color: done || now ? 'var(--ivory-100)' : 'var(--text-muted)',
        transition: 'all var(--dur-base) var(--ease-standard)'
      }
    }, done ? '✓' : i + 1), !compact && /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12.5,
        fontWeight: now ? 600 : 400,
        color: now ? 'var(--text-heading)' : 'var(--text-muted)',
        whiteSpace: 'nowrap'
      }
    }, s)), i < steps.length - 1 && /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1,
        height: 1,
        background: done ? 'var(--green-300)' : 'var(--line-hairline)',
        minWidth: 16
      }
    }));
  }));
}
Object.assign(__ds_scope, { StepIndicator });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/patterns/StepIndicator.jsx", error: String((e && e.message) || e) }); }

// components/patterns/TimeSlotPicker.jsx
try { (() => {
function TimeSlotPicker({
  slots = [],
  value,
  onChange,
  columns = 4,
  emptyLabel = 'Sin horarios disponibles para este día.',
  style
}) {
  if (!slots.length) return /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-body-sm)',
      color: 'var(--text-muted)',
      margin: 0,
      ...style
    }
  }, emptyLabel);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: `repeat(${columns},minmax(0,1fr))`,
      gap: 9,
      ...style
    }
  }, slots.map(s => {
    const t = typeof s === 'string' ? s : s.time,
      dis = typeof s === 'object' && s.disabled,
      sel = value === t;
    return /*#__PURE__*/React.createElement("button", {
      key: t,
      type: "button",
      disabled: dis,
      onClick: () => onChange && onChange(t),
      "aria-pressed": sel,
      style: {
        fontFamily: 'var(--font-sans)',
        fontSize: 13,
        fontWeight: sel ? 600 : 500,
        padding: '11px 6px',
        cursor: dis ? 'not-allowed' : 'pointer',
        borderRadius: 'var(--radius-sm)',
        opacity: dis ? .35 : 1,
        background: sel ? 'var(--green-800)' : 'var(--surface-raised)',
        color: sel ? 'var(--ivory-100)' : 'var(--text-body)',
        border: '1px solid ' + (sel ? 'var(--green-800)' : 'var(--line-strong)'),
        transition: 'all var(--dur-fast) var(--ease-standard)'
      }
    }, t);
  }));
}
Object.assign(__ds_scope, { TimeSlotPicker });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/patterns/TimeSlotPicker.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Booking.jsx
try { (() => {
const {
  Button,
  Badge,
  Card,
  Modal,
  StepIndicator,
  TimeSlotPicker,
  RadioGroup,
  Field,
  Input,
  Select,
  Eyebrow,
  Chip
} = window.ClinicaMextasDesignSystem_d4abcf;
const D = window.CM_DATA;
const STEPS = ['Motivo', 'Especialidad', 'Médico', 'Sede', 'Fecha', 'Horario', 'Datos', 'Resumen'];
const MOTIVOS = [{
  value: 'consulta',
  label: 'Consulta médica',
  description: 'Atención con un especialista'
}, {
  value: 'primera',
  label: 'Primera valoración',
  description: 'Es tu primera visita con nosotros'
}, {
  value: 'seguimiento',
  label: 'Seguimiento',
  description: 'Continuidad de un tratamiento'
}, {
  value: 'estudios',
  label: 'Estudios / laboratorio',
  description: 'Análisis clínicos o imagenología'
}, {
  value: 'nutricion',
  label: 'Consulta nutricional',
  description: 'Valoración y plan alimenticio'
}];
function Calendar({
  value,
  onChange
}) {
  const days = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];
  const base = new Date(2026, 8, 1);
  const offset = 1; // 1 sep 2026 = martes
  const cells = [...Array(offset).fill(null), ...Array(30).fill(0).map((_, i) => i + 1)];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Mes anterior",
    style: {
      background: 'none',
      border: '1px solid var(--line-hairline)',
      borderRadius: '50%',
      width: 30,
      height: 30,
      cursor: 'pointer'
    }
  }, "\u2039"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 17,
      color: 'var(--text-heading)'
    }
  }, "Septiembre 2026"), /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Mes siguiente",
    style: {
      background: 'none',
      border: '1px solid var(--line-hairline)',
      borderRadius: '50%',
      width: 30,
      height: 30,
      cursor: 'pointer'
    }
  }, "\u203A")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(7,1fr)',
      gap: 5
    }
  }, days.map((d, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      textAlign: 'center',
      fontSize: 11,
      fontWeight: 600,
      color: 'var(--text-muted)',
      paddingBottom: 6
    }
  }, d)), cells.map((n, i) => {
    if (!n) return /*#__PURE__*/React.createElement("div", {
      key: i
    });
    const dow = i % 7,
      weekend = dow === 6,
      past = n < 22,
      sel = value === n;
    const dis = weekend || past;
    return /*#__PURE__*/React.createElement("button", {
      key: i,
      type: "button",
      disabled: dis,
      onClick: () => onChange(n),
      style: {
        aspectRatio: '1/1',
        borderRadius: 'var(--radius-sm)',
        cursor: dis ? 'not-allowed' : 'pointer',
        fontFamily: 'var(--font-sans)',
        fontSize: 13,
        border: '1px solid ' + (sel ? 'var(--green-800)' : 'transparent'),
        background: sel ? 'var(--green-800)' : dis ? 'transparent' : 'var(--ivory-200)',
        color: sel ? 'var(--ivory-100)' : dis ? 'var(--ink-200)' : 'var(--text-body)',
        transition: 'all var(--dur-fast) var(--ease-standard)'
      }
    }, n);
  })), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 12,
      color: 'var(--text-muted)',
      marginTop: 14
    }
  }, "Disponibilidad de demostraci\xF3n. Recepci\xF3n confirma la fecha definitiva."));
}
function Summary({
  s
}) {
  const rows = [['Motivo', (MOTIVOS.find(m => m.value === s.motivo) || {}).label], ['Especialidad', s.specialty], ['Médico', s.doctor], ['Sede', s.location], ['Fecha', s.date ? s.date + ' de septiembre de 2026' : null], ['Hora', s.time]];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 0
    }
  }, rows.filter(r => r[1]).map(([k, v]) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      gap: 20,
      padding: '13px 0',
      borderBottom: '1px solid var(--line-hairline)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      fontWeight: 600,
      letterSpacing: '.06em',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, k), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14.5,
      color: 'var(--text-heading)',
      fontWeight: 500,
      textAlign: 'right'
    }
  }, v))));
}
function BookingWizard({
  open,
  onClose,
  preset
}) {
  const [step, setStep] = React.useState(0);
  const [s, setS] = React.useState({
    motivo: 'consulta',
    specialty: '',
    doctor: '',
    location: '',
    date: null,
    time: '',
    name: '',
    phone: '',
    email: '',
    note: ''
  });
  const [done, setDone] = React.useState(false);
  React.useEffect(() => {
    if (open) {
      setStep(0);
      setDone(false);
      setS(x => ({
        ...x,
        ...(preset || {})
      }));
    }
  }, [open, preset]);
  const set = (k, v) => setS(x => ({
    ...x,
    [k]: v
  }));
  const docs = D.doctors.filter(d => !s.specialty || d.specialty === s.specialty);
  const valid = [!!s.motivo, !!s.specialty, !!s.doctor, !!s.location, !!s.date, !!s.time, s.name && s.phone && s.email, true][step];
  if (done) return /*#__PURE__*/React.createElement(Modal, {
    open: open,
    onClose: onClose,
    size: "md",
    eyebrow: "Solicitud recibida",
    title: "Tu solicitud de cita fue registrada"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 60,
      height: 60,
      borderRadius: '50%',
      background: 'var(--green-100)',
      display: 'grid',
      placeItems: 'center',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 28,
    color: "var(--green-800)"
  })), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14.5,
      color: 'var(--text-muted)',
      marginTop: 16,
      lineHeight: 1.65,
      maxWidth: 420,
      marginInline: 'auto'
    }
  }, "Recepci\xF3n confirmar\xE1 la disponibilidad por tel\xE9fono o correo. Esta es una ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: 'var(--text-heading)'
    }
  }, "solicitud"), ", no una reserva confirmada."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      gap: 9,
      alignItems: 'center',
      marginTop: 16,
      background: 'var(--surface-accent-soft)',
      borderRadius: 'var(--radius-pill)',
      padding: '7px 16px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: 'var(--gold-700)',
      fontWeight: 600,
      letterSpacing: '.06em'
    }
  }, "FOLIO CM-2026-004821"))), /*#__PURE__*/React.createElement(Summary, {
    s: s
  }), /*#__PURE__*/React.createElement("div", {
    className: "cm-confirm",
    style: {
      display: 'flex',
      gap: 10,
      marginTop: 24,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "calendar-plus",
      size: 15
    })
  }, "Agregar al calendario"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "phone",
      size: 15
    })
  }, "Contactar a recepci\xF3n"), /*#__PURE__*/React.createElement(Button, {
    onClick: onClose,
    style: {
      marginLeft: 'auto'
    }
  }, "Volver al inicio")));
  return /*#__PURE__*/React.createElement(Modal, {
    open: open,
    onClose: onClose,
    size: "lg",
    eyebrow: "Agendar cita",
    title: ['¿Qué necesitas?', 'Selecciona una especialidad', 'Elige a tu médico', '¿En qué sede?', 'Selecciona una fecha', 'Horarios disponibles', 'Tus datos', 'Revisa tu solicitud'][step],
    footer: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      onClick: () => step ? setStep(step - 1) : onClose()
    }, step ? 'Atrás' : 'Cancelar'), /*#__PURE__*/React.createElement(Button, {
      disabled: !valid,
      onClick: () => step === 7 ? setDone(true) : setStep(step + 1)
    }, step === 7 ? 'Solicitar cita' : 'Continuar'))
  }, /*#__PURE__*/React.createElement(StepIndicator, {
    steps: STEPS,
    current: step,
    compact: true,
    style: {
      marginBottom: 24
    }
  }), step === 0 && /*#__PURE__*/React.createElement(RadioGroup, {
    name: "motivo",
    value: s.motivo,
    onChange: v => set('motivo', v),
    columns: 2,
    options: MOTIVOS
  }), step === 1 && /*#__PURE__*/React.createElement("div", {
    className: "cm-wz3",
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 10
    }
  }, D.specialties.map(sp => /*#__PURE__*/React.createElement("button", {
    key: sp.slug,
    type: "button",
    onClick: () => {
      set('specialty', sp.name);
      set('doctor', '');
    },
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 11,
      padding: '14px 16px',
      cursor: 'pointer',
      textAlign: 'left',
      fontFamily: 'var(--font-sans)',
      fontSize: 13.5,
      borderRadius: 'var(--radius-sm)',
      background: s.specialty === sp.name ? 'var(--ivory-200)' : 'var(--surface-raised)',
      border: '1px solid ' + (s.specialty === sp.name ? 'var(--green-600)' : 'var(--line-hairline)'),
      color: 'var(--text-body)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: sp.icon,
    size: 19,
    color: "var(--gold-600)"
  }), sp.name))), step === 2 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, docs.length ? docs.map(d => /*#__PURE__*/React.createElement("button", {
    key: d.id,
    type: "button",
    onClick: () => set('doctor', d.name),
    style: {
      display: 'flex',
      gap: 14,
      alignItems: 'center',
      padding: 12,
      cursor: 'pointer',
      textAlign: 'left',
      borderRadius: 'var(--radius-sm)',
      background: s.doctor === d.name ? 'var(--ivory-200)' : 'var(--surface-raised)',
      border: '1px solid ' + (s.doctor === d.name ? 'var(--green-600)' : 'var(--line-hairline)')
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: d.photo,
    alt: "",
    style: {
      width: 52,
      height: 52,
      borderRadius: '50%',
      objectFit: 'cover',
      objectPosition: 'top'
    }
  }), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontSize: 15,
      fontWeight: 600,
      color: 'var(--text-heading)'
    }
  }, d.name), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontSize: 13,
      color: 'var(--text-muted)',
      marginTop: 2
    }
  }, d.sub, " \xB7 Sede ", d.location, " \xB7 ", d.years, " a\xF1os de experiencia")))) : /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14,
      color: 'var(--text-muted)'
    }
  }, "No hay m\xE9dicos de demostraci\xF3n cargados para esta especialidad. Recepci\xF3n puede asignarte un especialista disponible.")), step === 3 && /*#__PURE__*/React.createElement("div", {
    className: "cm-wz2",
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 10
    }
  }, D.locations.map(l => /*#__PURE__*/React.createElement("button", {
    key: l.id,
    type: "button",
    onClick: () => set('location', l.name),
    style: {
      padding: '16px 18px',
      cursor: 'pointer',
      textAlign: 'left',
      borderRadius: 'var(--radius-sm)',
      background: s.location === l.name ? 'var(--ivory-200)' : 'var(--surface-raised)',
      border: '1px solid ' + (s.location === l.name ? 'var(--green-600)' : 'var(--line-hairline)')
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontSize: 14.5,
      fontWeight: 600,
      color: 'var(--text-heading)'
    }
  }, l.name), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontSize: 12.5,
      color: 'var(--text-muted)',
      marginTop: 4
    }
  }, l.address), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontSize: 12,
      color: 'var(--text-accent)',
      marginTop: 8
    }
  }, l.specialties, " especialidades disponibles")))), step === 4 && /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 380,
      marginInline: 'auto'
    }
  }, /*#__PURE__*/React.createElement(Calendar, {
    value: s.date,
    onChange: v => {
      set('date', v);
      set('time', '');
    }
  })), step === 5 && /*#__PURE__*/React.createElement("div", {
    className: "cm-slots"
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 13.5,
      color: 'var(--text-muted)',
      marginBottom: 16
    }
  }, "Horarios para el ", s.date, " de septiembre en ", s.location, "."), /*#__PURE__*/React.createElement(TimeSlotPicker, {
    columns: 5,
    value: s.time,
    onChange: v => set('time', v),
    slots: ['09:00 AM', '09:30 AM', {
      time: '10:00 AM',
      disabled: true
    }, '10:30 AM', '12:00 PM', '01:00 PM', {
      time: '03:30 PM',
      disabled: true
    }, '04:00 PM', '04:30 PM', '05:30 PM']
  })), step === 6 && /*#__PURE__*/React.createElement("div", {
    className: "cm-wz2",
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Field, {
    label: "Nombre completo",
    required: true,
    htmlFor: "b1"
  }, /*#__PURE__*/React.createElement(Input, {
    id: "b1",
    value: s.name,
    onChange: e => set('name', e.target.value),
    placeholder: "Mar\xEDa Fernanda Ruiz"
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Tel\xE9fono",
    required: true,
    htmlFor: "b2"
  }, /*#__PURE__*/React.createElement(Input, {
    id: "b2",
    value: s.phone,
    onChange: e => set('phone', e.target.value),
    placeholder: "(81) 1234 5678"
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Correo",
    required: true,
    htmlFor: "b3"
  }, /*#__PURE__*/React.createElement(Input, {
    id: "b3",
    value: s.email,
    onChange: e => set('email', e.target.value),
    placeholder: "tucorreo@ejemplo.mx"
  })), /*#__PURE__*/React.createElement(Field, {
    label: "\xBFPrimera visita?",
    htmlFor: "b4"
  }, /*#__PURE__*/React.createElement(Select, {
    id: "b4",
    options: ['Sí, es mi primera visita', 'No, ya soy paciente']
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: '1 / -1'
    }
  }, /*#__PURE__*/React.createElement(Field, {
    label: "Motivo general de consulta",
    hint: "No incluyas informaci\xF3n m\xE9dica sensible.",
    htmlFor: "b5"
  }, /*#__PURE__*/React.createElement(Input, {
    id: "b5",
    multiline: true,
    rows: 3,
    value: s.note,
    onChange: e => set('note', e.target.value),
    placeholder: "Describe brevemente el motivo de tu consulta"
  })))), step === 7 && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Summary, {
    s: s
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 12.5,
      color: 'var(--text-muted)',
      marginTop: 18,
      lineHeight: 1.6
    }
  }, "Al continuar env\xEDas una ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: 'var(--text-heading)'
    }
  }, "solicitud de cita"), ". Recepci\xF3n confirmar\xE1 la disponibilidad antes de que quede agendada.")));
}
Object.assign(window, {
  BookingWizard,
  Calendar
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Booking.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Chrome.jsx
try { (() => {
/* Header, footer, iconos y utilidades compartidas del sitio de ClinicaMextas. */
const {
  Button,
  Badge,
  Eyebrow
} = window.ClinicaMextasDesignSystem_d4abcf;
function Icon({
  name,
  size = 20,
  color = 'currentColor',
  stroke = 1.5
}) {
  const r = React.useRef(null);
  React.useEffect(() => {
    if (!r.current) return;
    r.current.innerHTML = '';
    const e = document.createElement('i');
    e.setAttribute('data-lucide', name);
    r.current.appendChild(e);
    window.lucide && window.lucide.createIcons({
      attrs: {
        width: size,
        height: size,
        'stroke-width': stroke
      }
    });
  }, [name, size]);
  return /*#__PURE__*/React.createElement("span", {
    ref: r,
    style: {
      display: 'inline-flex',
      color,
      lineHeight: 0
    }
  });
}
function Wordmark({
  inverse = false,
  size = 20
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      lineHeight: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: size,
      letterSpacing: '.12em',
      color: inverse ? 'var(--ivory-100)' : 'var(--green-800)'
    }
  }, "CLINICAMEXTAS"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: size * 0.33,
      letterSpacing: '.34em',
      color: inverse ? 'var(--green-300)' : 'var(--text-muted)',
      marginTop: 3
    }
  }, "CL\xCDNICA PRIVADA"));
}
const NAV = [['inicio', 'Inicio'], ['nosotros', 'Nosotros'], ['especialidades', 'Especialidades'], ['servicios', 'Servicios'], ['medicos', 'Médicos'], ['instalaciones', 'Instalaciones'], ['sedes', 'Sedes'], ['blog', 'Blog'], ['contacto', 'Contacto']];
const FOOT_ROUTES = {
  'Nosotros': 'nosotros',
  'Especialidades': 'especialidades',
  'Médicos': 'medicos',
  'Instalaciones': 'instalaciones',
  'Sedes': 'sedes',
  'Horarios': 'pacientes:horarios',
  'Primera visita': 'pacientes:primera',
  'Urgencias': 'urgencias',
  'Check-ups': 'checkups',
  'Preguntas frecuentes': 'pacientes:faq',
  'Preparación para estudios': 'pacientes:estudios',
  'Métodos de pago': 'pacientes:pagos',
  'Seguros y convenios': 'pacientes:seguros',
  'Blog': 'blog',
  'Información médica': 'blog',
  'Tecnología médica': 'tecnologia',
  'Aviso de privacidad': 'legal:privacidad',
  'Términos y condiciones': 'legal:terminos',
  'Política de cookies': 'legal:cookies',
  'Accesibilidad': 'legal:accesibilidad'
};
function Header({
  page,
  go,
  onBook,
  onSearch,
  scrolled
}) {
  const [menu, setMenu] = React.useState(false);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 40,
      background: 'rgba(249,246,240,.92)',
      backdropFilter: 'blur(12px)',
      borderBottom: '1px solid var(--line-hairline)',
      transition: 'padding var(--dur-base) var(--ease-standard)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: scrolled ? '12px var(--gutter)' : '18px var(--gutter)',
      display: 'flex',
      alignItems: 'center',
      gap: 28,
      transition: 'padding var(--dur-base) var(--ease-standard)'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      go('inicio');
    },
    style: {
      flex: '0 0 auto'
    }
  }, /*#__PURE__*/React.createElement(Wordmark, {
    size: scrolled ? 17 : 19
  })), /*#__PURE__*/React.createElement("nav", {
    className: "cm-desktop cm-nav",
    style: {
      display: 'flex',
      gap: 22,
      marginLeft: 'auto',
      minWidth: 0
    }
  }, NAV.map(([k, l]) => /*#__PURE__*/React.createElement("a", {
    key: k,
    href: '#' + k,
    onClick: e => {
      e.preventDefault();
      go(k);
    },
    style: {
      fontSize: 13.5,
      fontWeight: page === k ? 600 : 400,
      color: page === k ? 'var(--green-800)' : 'var(--text-body)',
      paddingBottom: 4,
      borderBottom: '2px solid ' + (page === k ? 'var(--gold-600)' : 'transparent')
    }
  }, l))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      marginLeft: 'auto',
      flex: '0 0 auto'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onSearch,
    "aria-label": "Buscar en el sitio",
    style: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      color: 'var(--text-body)',
      display: 'flex',
      padding: 6
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "search",
    size: 18
  })), /*#__PURE__*/React.createElement("a", {
    href: "tel:+528112345678",
    className: "cm-desktop cm-phone",
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      fontSize: 13.5,
      color: 'var(--text-body)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "phone",
    size: 15,
    color: "var(--gold-600)"
  }), "(81) 1234 5678"), /*#__PURE__*/React.createElement("span", {
    className: "cm-hdr-cta"
  }, /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    onClick: onBook,
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "calendar-days",
      size: 15
    })
  }, "Agendar cita")), /*#__PURE__*/React.createElement("button", {
    className: "cm-mobile",
    onClick: () => setMenu(true),
    "aria-label": "Abrir men\xFA",
    style: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      display: 'none',
      padding: 6,
      color: 'var(--green-800)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "menu",
    size: 22
  }))))), menu && /*#__PURE__*/React.createElement("div", {
    onClick: () => setMenu(false),
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 90,
      background: 'var(--surface-page)',
      padding: '22px var(--gutter)',
      overflowY: 'auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Wordmark, null), /*#__PURE__*/React.createElement("button", {
    onClick: () => setMenu(false),
    "aria-label": "Cerrar men\xFA",
    style: {
      background: 'none',
      border: '1px solid var(--line-hairline)',
      borderRadius: '50%',
      width: 36,
      height: 36,
      cursor: 'pointer'
    }
  }, "\xD7")), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      marginTop: 28
    }
  }, NAV.map(([k, l]) => /*#__PURE__*/React.createElement("a", {
    key: k,
    href: '#' + k,
    onClick: e => {
      e.preventDefault();
      go(k);
      setMenu(false);
    },
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 26,
      padding: '14px 0',
      borderBottom: '1px solid var(--line-hairline)',
      color: 'var(--green-800)'
    }
  }, l))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 26
    }
  }, /*#__PURE__*/React.createElement(Button, {
    fullWidth: true,
    size: "lg",
    onClick: () => {
      setMenu(false);
      onBook();
    }
  }, "Agendar cita"))));
}
function Footer({
  go,
  onBook
}) {
  const nav = l => e => {
    e.preventDefault();
    if (l === 'Agendar cita') return onBook && onBook();
    FOOT_ROUTES[l] && go(FOOT_ROUTES[l]);
  };
  const cols = [['ClinicaMextas', ['Nosotros', 'Especialidades', 'Médicos', 'Instalaciones', 'Sedes']], ['Atención', ['Agendar cita', 'Horarios', 'Primera visita', 'Urgencias', 'Check-ups']], ['Pacientes', ['Preguntas frecuentes', 'Preparación para estudios', 'Métodos de pago', 'Seguros y convenios']], ['Recursos', ['Blog', 'Información médica', 'Tecnología médica']]];
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--surface-inverse)',
      color: 'var(--text-on-inverse-muted)',
      paddingTop: 'var(--space-10)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '0 var(--gutter)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "cm-footer-grid",
    style: {
      display: 'grid',
      gridTemplateColumns: '1.4fr repeat(4,1fr)',
      gap: 40
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Wordmark, {
    inverse: true
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 13.5,
      lineHeight: 1.7,
      marginTop: 18,
      maxWidth: 280
    }
  }, "Atenci\xF3n m\xE9dica especializada con un enfoque integral, humano y personalizado."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 9,
      marginTop: 20,
      fontSize: 13.5
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      gap: 10,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "phone",
    size: 15,
    color: "var(--gold-500)"
  }), "(81) 1234 5678"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      gap: 10,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "message-circle",
    size: 15,
    color: "var(--gold-500)"
  }), "WhatsApp"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      gap: 10,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "mail",
    size: 15,
    color: "var(--gold-500)"
  }), "hola@clinicamextas.mx"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      gap: 10,
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "map-pin",
    size: 15,
    color: "var(--gold-500)"
  }), "Av. San Pedro 123, Col. Del Valle,", /*#__PURE__*/React.createElement("br", null), "San Pedro Garza Garc\xEDa, N.L."))), cols.map(([t, items]) => /*#__PURE__*/React.createElement("div", {
    key: t
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11.5,
      fontWeight: 600,
      letterSpacing: '.16em',
      textTransform: 'uppercase',
      color: 'var(--gold-500)',
      marginBottom: 16
    }
  }, t), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 11
    }
  }, items.map(i => /*#__PURE__*/React.createElement("a", {
    key: i,
    href: "#",
    onClick: nav(i),
    style: {
      fontSize: 13.5,
      color: 'var(--text-on-inverse-muted)'
    }
  }, i)))))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-9)',
      paddingTop: 24,
      paddingBottom: 32,
      borderTop: '1px solid var(--line-inverse)',
      display: 'flex',
      flexWrap: 'wrap',
      gap: 16,
      justifyContent: 'space-between',
      fontSize: 12.5
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 ClinicaMextas. Todos los derechos reservados. \xB7 Sitio demostrativo desarrollado por Mextas."), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '10px 20px'
    }
  }, ['Aviso de privacidad', 'Términos y condiciones', 'Política de cookies', 'Accesibilidad'].map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    onClick: nav(l),
    style: {
      color: 'var(--text-on-inverse-muted)'
    }
  }, l))))));
}
function Section({
  id,
  tone = 'page',
  children,
  py = 'var(--section-y)'
}) {
  const bg = {
    page: 'var(--surface-page)',
    raised: 'var(--surface-raised)',
    sunken: 'var(--surface-sunken)',
    inverse: 'var(--surface-inverse)'
  }[tone];
  return /*#__PURE__*/React.createElement("section", {
    id: id,
    style: {
      background: bg,
      padding: py + ' 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '0 var(--gutter)'
    }
  }, children));
}
function Reveal({
  children,
  delay = 0,
  style
}) {
  const r = React.useRef(null),
    [v, setV] = React.useState(false);
  React.useEffect(() => {
    const o = new IntersectionObserver(e => {
      if (e[0].isIntersecting) {
        setV(true);
        o.disconnect();
      }
    }, {
      threshold: .12
    });
    r.current && o.observe(r.current);
    return () => o.disconnect();
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    ref: r,
    style: {
      opacity: v ? 1 : 0,
      transform: v ? 'none' : 'translateY(16px)',
      transition: `opacity var(--dur-reveal) var(--ease-entrance) ${delay}ms, transform var(--dur-reveal) var(--ease-entrance) ${delay}ms`,
      ...style
    }
  }, children);
}
function Counter({
  to,
  suffix = ''
}) {
  const [n, setN] = React.useState(0),
    r = React.useRef(null);
  React.useEffect(() => {
    const o = new IntersectionObserver(e => {
      if (!e[0].isIntersecting) return;
      o.disconnect();
      const t0 = performance.now();
      const tick = t => {
        const p = Math.min((t - t0) / 1200, 1);
        setN(Math.round(to * (1 - Math.pow(1 - p, 3))));
        p < 1 && requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    }, {
      threshold: .4
    });
    r.current && o.observe(r.current);
    return () => o.disconnect();
  }, [to]);
  return /*#__PURE__*/React.createElement("span", {
    ref: r
  }, n, suffix);
}
function Crumbs({
  go,
  items
}) {
  return /*#__PURE__*/React.createElement("nav", {
    "aria-label": "Ruta",
    style: {
      display: 'flex',
      gap: 9,
      flexWrap: 'wrap',
      fontSize: 12.5,
      color: 'var(--text-muted)',
      marginBottom: 22
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      go('inicio');
    }
  }, "Inicio"), items.map(([l, r], i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: i
  }, /*#__PURE__*/React.createElement("span", null, "/"), r ? /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      go(r);
    }
  }, l) : /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-heading)'
    }
  }, l))));
}
function PhotoSlot({
  name,
  icon = 'image',
  dark = false,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 10,
      background: dark ? 'var(--green-700)' : 'var(--ivory-200)',
      ...style
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 30,
    color: dark ? 'var(--green-300)' : 'var(--ink-200)'
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      letterSpacing: '.12em',
      textTransform: 'uppercase',
      color: dark ? 'var(--green-300)' : 'var(--ink-300)'
    }
  }, "Fotograf\xEDa por agregar"));
}
Object.assign(window, {
  Icon,
  Wordmark,
  Header,
  Footer,
  Section,
  Reveal,
  Counter,
  NAV,
  Crumbs,
  PhotoSlot
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Chrome.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Directory.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  Button,
  Badge,
  Chip,
  Card,
  Input,
  Select,
  Field,
  Modal,
  DoctorCard,
  TimeSlotPicker,
  Accordion,
  SectionHeading,
  Eyebrow,
  SpecialtyCard
} = window.ClinicaMextasDesignSystem_d4abcf;
const D = window.CM_DATA;
function DoctorProfile({
  doctor,
  onClose,
  onBook
}) {
  if (!doctor) return null;
  const d = doctor;
  return /*#__PURE__*/React.createElement(Modal, {
    open: !!d,
    onClose: onClose,
    size: "lg",
    eyebrow: d.specialty,
    title: d.name
  }, /*#__PURE__*/React.createElement("div", {
    className: "cm-prof",
    style: {
      display: 'grid',
      gridTemplateColumns: '190px 1fr',
      gap: 26,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: d.photo,
    alt: d.name,
    style: {
      width: '100%',
      borderRadius: 'var(--radius-md)',
      objectFit: 'cover',
      objectPosition: 'top',
      aspectRatio: '3/4'
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "green"
  }, d.mode), /*#__PURE__*/React.createElement(Badge, {
    tone: "neutral"
  }, "Sede ", d.location), /*#__PURE__*/React.createElement(Badge, {
    tone: "outline"
  }, d.years, " a\xF1os de experiencia")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14.5,
      lineHeight: 1.7,
      color: 'var(--text-body)',
      marginTop: 16
    }
  }, d.sub, ". Atiende valoraci\xF3n inicial, seguimiento y estudios relacionados con su especialidad, con un enfoque preventivo y explicativo en cada consulta."), /*#__PURE__*/React.createElement("div", {
    className: "cm-wz2",
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '14px 24px',
      marginTop: 20
    }
  }, [['Cédula profesional', 'Céd. Prof. ' + d.license], ['Idiomas', d.languages.join(', ')], ['Modalidad', d.mode], ['Formación', 'Universidad Autónoma de Nuevo León · Especialidad en Hospital Universitario']].map(([k, v]) => /*#__PURE__*/React.createElement("div", {
    key: k
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 600,
      letterSpacing: '.08em',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, k), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13.5,
      color: 'var(--text-body)',
      marginTop: 4,
      lineHeight: 1.5
    }
  }, v)))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 24,
      paddingTop: 20,
      borderTop: '1px solid var(--line-hairline)'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Pr\xF3ximos horarios disponibles"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 24,
      marginTop: 14,
      flexWrap: 'wrap'
    }
  }, Object.entries(d.slots).map(([day, times]) => /*#__PURE__*/React.createElement("div", {
    key: day,
    style: {
      minWidth: 180,
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 600,
      color: 'var(--text-heading)',
      marginBottom: 9
    }
  }, day), /*#__PURE__*/React.createElement(TimeSlotPicker, {
    columns: 3,
    slots: times
  })))), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 12,
      color: 'var(--text-muted)',
      marginTop: 14
    }
  }, "Horarios de demostraci\xF3n. Pueden variar seg\xFAn especialidad y disponibilidad.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      marginTop: 22
    }
  }, /*#__PURE__*/React.createElement(Button, {
    onClick: () => onBook(d)
  }, "Solicitar cita"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    onClick: onClose
  }, "Volver al directorio")))));
}
function DirectoryPage({
  onBook,
  go
}) {
  const [q, setQ] = React.useState(''),
    [spec, setSpec] = React.useState('Todas'),
    [loc, setLoc] = React.useState('Todas'),
    [mode, setMode] = React.useState('Todas'),
    [sel, setSel] = React.useState(null),
    [sheet, setSheet] = React.useState(false);
  const active = [spec, loc, mode].filter(x => x !== 'Todas').length;
  const specs = ['Todas', ...new Set(D.doctors.map(d => d.specialty))];
  const locs = ['Todas', ...new Set(D.doctors.map(d => d.location))];
  const list = D.doctors.filter(d => (spec === 'Todas' || d.specialty === spec) && (loc === 'Todas' || d.location === loc) && (mode === 'Todas' || d.mode.includes(mode)) && (!q || (d.name + d.specialty + d.sub).toLowerCase().includes(q.toLowerCase())));
  return /*#__PURE__*/React.createElement(Section, {
    id: "medicos"
  }, /*#__PURE__*/React.createElement("nav", {
    "aria-label": "Ruta",
    style: {
      display: 'flex',
      gap: 9,
      fontSize: 12.5,
      color: 'var(--text-muted)',
      marginBottom: 22
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      go('inicio');
    }
  }, "Inicio"), /*#__PURE__*/React.createElement("span", null, "/"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-heading)'
    }
  }, "M\xE9dicos")), /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Directorio m\xE9dico",
    title: "Encuentra a tu especialista",
    description: "Filtra por especialidad, sede y modalidad de atenci\xF3n."
  }), /*#__PURE__*/React.createElement("div", {
    className: "cm-mfilter",
    style: {
      display: 'none',
      gap: 10,
      marginTop: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement(Input, {
    value: q,
    onChange: e => setQ(e.target.value),
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "search",
      size: 16
    }),
    placeholder: "Buscar especialista",
    "aria-label": "Buscar especialista"
  })), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    onClick: () => setSheet(true),
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "sliders-horizontal",
      size: 16
    })
  }, "Filtros", active ? ' (' + active + ')' : '')), /*#__PURE__*/React.createElement(Modal, {
    open: sheet,
    onClose: () => setSheet(false),
    variant: "sheet",
    eyebrow: "Directorio",
    title: "Filtrar especialistas",
    footer: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      onClick: () => {
        setSpec('Todas');
        setLoc('Todas');
        setMode('Todas');
      }
    }, "Limpiar"), /*#__PURE__*/React.createElement(Button, {
      onClick: () => setSheet(false)
    }, "Ver ", list.length, " resultados"))
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 20
    }
  }, [['Especialidad', specs, spec, setSpec], ['Sede', locs, loc, setLoc], ['Modalidad', ['Todas', 'Presencial', 'virtual'], mode, setMode]].map(([t, opts, v, fn]) => /*#__PURE__*/React.createElement("div", {
    key: t
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      fontWeight: 600,
      letterSpacing: '.06em',
      textTransform: 'uppercase',
      color: 'var(--text-muted)',
      marginBottom: 10
    }
  }, t), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      flexWrap: 'wrap'
    }
  }, opts.map(o => /*#__PURE__*/React.createElement(Chip, {
    key: o,
    selected: v === o,
    onClick: () => fn(o)
  }, o === 'virtual' ? 'Virtual' : o))))))), /*#__PURE__*/React.createElement(Card, {
    padding: 20,
    style: {
      marginTop: 28
    },
    className: "cm-filter-card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cm-filters",
    style: {
      display: 'grid',
      gridTemplateColumns: '2fr 1fr 1fr 1fr',
      gap: 12,
      alignItems: 'end'
    }
  }, /*#__PURE__*/React.createElement(Field, {
    label: "B\xFAsqueda",
    htmlFor: "q"
  }, /*#__PURE__*/React.createElement(Input, {
    id: "q",
    value: q,
    onChange: e => setQ(e.target.value),
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "search",
      size: 16
    }),
    placeholder: "\xBFQu\xE9 especialista est\xE1s buscando?"
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Especialidad",
    htmlFor: "fs"
  }, /*#__PURE__*/React.createElement(Select, {
    id: "fs",
    value: spec,
    onChange: e => setSpec(e.target.value),
    placeholder: "Todas",
    options: specs.slice(1)
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Sede",
    htmlFor: "fl"
  }, /*#__PURE__*/React.createElement(Select, {
    id: "fl",
    value: loc,
    onChange: e => setLoc(e.target.value),
    placeholder: "Todas",
    options: locs.slice(1)
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Modalidad",
    htmlFor: "fm"
  }, /*#__PURE__*/React.createElement(Select, {
    id: "fm",
    value: mode,
    onChange: e => setMode(e.target.value),
    placeholder: "Todas",
    options: ['Presencial', 'virtual']
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      marginTop: 16,
      flexWrap: 'wrap',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12.5,
      color: 'var(--text-muted)'
    }
  }, "Accesos r\xE1pidos:"), ['Cardiología', 'Pediatría', 'Ginecología', 'Traumatología'].map(x => /*#__PURE__*/React.createElement(Chip, {
    key: x,
    selected: spec === x,
    onClick: () => setSpec(spec === x ? 'Todas' : x)
  }, x)))), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 13,
      color: 'var(--text-muted)',
      marginTop: 22
    }
  }, list.length, " ", list.length === 1 ? 'especialista' : 'especialistas', " ", list.length !== D.doctors.length && '· ', list.length !== D.doctors.length && /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      setQ('');
      setSpec('Todas');
      setLoc('Todas');
      setMode('Todas');
    }
  }, "Limpiar filtros")), /*#__PURE__*/React.createElement("div", {
    className: "cm-dir-grid",
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 16,
      marginTop: 14
    }
  }, list.map(d => /*#__PURE__*/React.createElement(DoctorCard, _extends({
    key: d.id
  }, d, {
    subspecialty: d.sub,
    location: 'Sede ' + d.location,
    layout: "row",
    style: {
      minHeight: 150
    },
    actions: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      variant: "secondary",
      onClick: () => setSel(d)
    }, "Ver perfil"), /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      onClick: () => onBook(d)
    }, "Solicitar cita"))
  }))), !list.length && /*#__PURE__*/React.createElement(Card, {
    padding: 40,
    style: {
      gridColumn: '1/-1',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "user-search",
    size: 28,
    color: "var(--ink-200)"
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 15,
      color: 'var(--text-heading)',
      marginTop: 12
    }
  }, "No encontramos especialistas con esos filtros."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 13.5,
      color: 'var(--text-muted)',
      marginTop: 6
    }
  }, "Prueba con otra especialidad o contacta a recepci\xF3n al (81) 1234 5678."))), /*#__PURE__*/React.createElement(DoctorProfile, {
    doctor: sel,
    onClose: () => setSel(null),
    onBook: d => {
      setSel(null);
      onBook(d);
    }
  }));
}
function SpecialtyPage({
  slug,
  onBook,
  go
}) {
  const sp = D.specialties.find(x => x.slug === slug) || D.specialties[3];
  const docs = D.doctors.filter(d => d.specialty === sp.name);
  const atiende = {
    'Cardiología': ['Hipertensión arterial', 'Colesterol elevado', 'Evaluación cardiovascular', 'Prevención cardiovascular', 'Seguimiento cardiológico'],
    'Pediatría': ['Control del niño sano', 'Vacunación por edad', 'Infecciones frecuentes', 'Desarrollo y crecimiento', 'Orientación a madres y padres']
  }[sp.name] || ['Valoración inicial', 'Diagnóstico y estudios', 'Tratamiento y seguimiento', 'Prevención', 'Segunda opinión'];
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement("nav", {
    "aria-label": "Ruta",
    style: {
      display: 'flex',
      gap: 9,
      fontSize: 12.5,
      color: 'var(--text-muted)',
      marginBottom: 22
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      go('inicio');
    }
  }, "Inicio"), /*#__PURE__*/React.createElement("span", null, "/"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      go('especialidades-todas');
    }
  }, "Especialidades"), /*#__PURE__*/React.createElement("span", null, "/"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-heading)'
    }
  }, sp.name)), /*#__PURE__*/React.createElement("div", {
    className: "cm-spec-hero",
    style: {
      display: 'grid',
      gridTemplateColumns: '1.2fr 1fr',
      gap: 48,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Icon, {
    name: sp.icon,
    size: 38,
    color: "var(--gold-600)"
  }), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 'var(--text-display-md)',
      marginTop: 18
    }
  }, sp.name), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-body-lg)',
      lineHeight: 1.7,
      color: 'var(--text-muted)',
      marginTop: 16,
      maxWidth: 520
    }
  }, "Evaluaci\xF3n, prevenci\xF3n y seguimiento integral con un equipo que te explica cada paso del proceso."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      marginTop: 26
    }
  }, /*#__PURE__*/React.createElement(Button, {
    onClick: () => onBook({
      specialty: sp.name
    })
  }, "Solicitar cita"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    onClick: () => go('medicos')
  }, "Ver especialistas"))), /*#__PURE__*/React.createElement(Card, {
    padding: 26,
    tone: "sunken"
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "\xBFCu\xE1ndo acudir?"), /*#__PURE__*/React.createElement("ul", {
    style: {
      margin: '14px 0 0',
      padding: 0,
      listStyle: 'none',
      display: 'flex',
      flexDirection: 'column',
      gap: 11
    }
  }, ['Si tu médico general te refirió a esta especialidad', 'Si tienes estudios previos que requieren interpretación', 'Si necesitas seguimiento de un tratamiento en curso', 'Si buscas una evaluación preventiva'].map(x => /*#__PURE__*/React.createElement("li", {
    key: x,
    style: {
      display: 'flex',
      gap: 10,
      fontSize: 13.5,
      lineHeight: 1.55,
      color: 'var(--text-body)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 15,
    color: "var(--gold-600)"
  }), x))), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 12,
      color: 'var(--text-muted)',
      marginTop: 16
    }
  }, "Esta informaci\xF3n es orientativa y no sustituye una valoraci\xF3n m\xE9dica.")))), /*#__PURE__*/React.createElement(Section, {
    tone: "raised"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cm-two",
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 48
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "\xBFQu\xE9 atendemos?",
    title: "Motivos de consulta frecuentes",
    size: "sm"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 10,
      marginTop: 22
    }
  }, atiende.map(x => /*#__PURE__*/React.createElement("div", {
    key: x,
    style: {
      display: 'flex',
      gap: 12,
      alignItems: 'center',
      padding: '14px 16px',
      background: 'var(--surface-page)',
      borderRadius: 'var(--radius-sm)',
      border: '1px solid var(--line-hairline)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "activity",
    size: 17,
    color: "var(--gold-600)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      color: 'var(--text-body)'
    }
  }, x))))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Servicios relacionados",
    title: "Estudios y procedimientos",
    size: "sm"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 10,
      marginTop: 22
    }
  }, D.services.slice(0, 4).map(s => /*#__PURE__*/React.createElement("div", {
    key: s.name,
    style: {
      display: 'flex',
      gap: 12,
      alignItems: 'center',
      padding: '14px 16px',
      background: 'var(--surface-page)',
      borderRadius: 'var(--radius-sm)',
      border: '1px solid var(--line-hairline)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: s.icon,
    size: 17,
    color: "var(--gold-600)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      color: 'var(--text-body)'
    }
  }, s.name)))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 26
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Sedes donde se ofrece"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      flexWrap: 'wrap',
      marginTop: 12
    }
  }, D.locations.map(l => /*#__PURE__*/React.createElement(Badge, {
    key: l.id,
    tone: "neutral"
  }, l.name))))))), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement(SectionHeading, {
    align: "center",
    eyebrow: "Conoce a nuestros especialistas",
    title: 'Médicos de ' + sp.name
  }), /*#__PURE__*/React.createElement("div", {
    className: "cm-doc-grid",
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 16,
      marginTop: 36
    }
  }, (docs.length ? docs : D.doctors.slice(0, 4)).map(d => /*#__PURE__*/React.createElement(DoctorCard, _extends({
    key: d.id
  }, d, {
    subspecialty: undefined,
    location: 'Sede ' + d.location,
    actions: /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      onClick: () => onBook(d)
    }, "Solicitar cita")
  }))))), /*#__PURE__*/React.createElement(Section, {
    tone: "raised"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 820,
      marginInline: 'auto'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    align: "center",
    eyebrow: "Preguntas frecuentes",
    title: 'Sobre ' + sp.name.toLowerCase()
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 30
    }
  }, /*#__PURE__*/React.createElement(Accordion, {
    defaultOpen: [0],
    items: [{
      question: '¿Necesito referencia para agendar?',
      answer: 'No es necesaria. Puedes solicitar cita directamente desde el sitio y recepción confirmará la disponibilidad.'
    }, {
      question: '¿Debo llevar estudios previos?',
      answer: 'Si cuentas con estudios recientes, llévalos. Ayudan al especialista a tener un panorama completo.'
    }, {
      question: '¿Cuánto dura la consulta?',
      answer: 'Una primera valoración suele durar entre 30 y 45 minutos; el seguimiento, alrededor de 20 minutos.'
    }]
  })))));
}
function AllSpecialties({
  go
}) {
  const [q, setQ] = React.useState('');
  const list = D.specialties.filter(s => s.name.toLowerCase().includes(q.toLowerCase()));
  return /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement("nav", {
    "aria-label": "Ruta",
    style: {
      display: 'flex',
      gap: 9,
      fontSize: 12.5,
      color: 'var(--text-muted)',
      marginBottom: 22
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      go('inicio');
    }
  }, "Inicio"), /*#__PURE__*/React.createElement("span", null, "/"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-heading)'
    }
  }, "Especialidades")), /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Todas las especialidades",
    title: "Doce \xE1reas m\xE9dicas, un mismo est\xE1ndar",
    description: "Cada especialidad cuenta con m\xE9dicos certificados y acceso a laboratorio e imagenolog\xEDa."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 380,
      marginTop: 26
    }
  }, /*#__PURE__*/React.createElement(Input, {
    value: q,
    onChange: e => setQ(e.target.value),
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "search",
      size: 16
    }),
    placeholder: "Buscar especialidad"
  })), /*#__PURE__*/React.createElement("div", {
    className: "cm-spec-grid",
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(6,1fr)',
      gap: 14,
      marginTop: 26
    }
  }, list.map(s => /*#__PURE__*/React.createElement(SpecialtyCard, {
    key: s.slug,
    name: s.name,
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: s.icon,
      size: 28,
      color: "var(--gold-600)"
    }),
    onClick: () => go('especialidad:' + s.slug)
  }))));
}
function LocationsPage({
  onBook,
  go
}) {
  const [sel, setSel] = React.useState(D.locations[0].id);
  const l = D.locations.find(x => x.id === sel);
  return /*#__PURE__*/React.createElement(Section, {
    id: "sedes"
  }, /*#__PURE__*/React.createElement("nav", {
    "aria-label": "Ruta",
    style: {
      display: 'flex',
      gap: 9,
      fontSize: 12.5,
      color: 'var(--text-muted)',
      marginBottom: 22
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      go('inicio');
    }
  }, "Inicio"), /*#__PURE__*/React.createElement("span", null, "/"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-heading)'
    }
  }, "Sedes")), /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Nuestras sedes",
    title: "Cinco ubicaciones, la misma atenci\xF3n",
    description: "Selecciona una sede para ver su informaci\xF3n, especialidades y servicios disponibles."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 9,
      marginTop: 26,
      flexWrap: 'wrap'
    }
  }, D.locations.map(x => /*#__PURE__*/React.createElement(Chip, {
    key: x.id,
    selected: sel === x.id,
    onClick: () => setSel(x.id)
  }, x.name))), /*#__PURE__*/React.createElement("div", {
    className: "cm-loc",
    style: {
      display: 'grid',
      gridTemplateColumns: '1.15fr 1fr',
      gap: 32,
      marginTop: 26,
      alignItems: 'stretch'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    padding: 0,
    style: {
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/photos/recepcion.png",
    alt: l.name,
    style: {
      width: '100%',
      height: 260,
      objectFit: 'cover',
      display: 'block'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 26
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-title-lg)',
      color: 'var(--text-heading)'
    }
  }, l.name), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 11,
      marginTop: 16,
      fontSize: 13.5,
      color: 'var(--text-body)'
    }
  }, [['map-pin', l.address + ' · ' + l.city], ['phone', l.phone], ['clock', 'Lun – Vie 7:00 am – 8:00 pm · Sáb 8:00 am – 2:00 pm'], ['car', l.parking], ['accessibility', l.access]].map(([i, t]) => /*#__PURE__*/React.createElement("span", {
    key: t,
    style: {
      display: 'flex',
      gap: 11,
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: i,
    size: 16,
    color: "var(--gold-600)"
  }), t))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      marginTop: 22,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: "secondary",
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "navigation",
      size: 14
    })
  }, "C\xF3mo llegar"), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: "secondary",
    onClick: () => go('medicos')
  }, "Ver m\xE9dicos"), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    onClick: () => onBook({
      location: l.name
    })
  }, "Solicitar cita")))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Card, {
    padding: 24,
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Especialidades disponibles"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      flexWrap: 'wrap',
      marginTop: 14
    }
  }, D.specialties.slice(0, l.specialties).map(s => /*#__PURE__*/React.createElement(Badge, {
    key: s.slug,
    tone: "neutral"
  }, s.name)))), /*#__PURE__*/React.createElement(Card, {
    padding: 24,
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Servicios en esta sede"), /*#__PURE__*/React.createElement("div", {
    className: "cm-wz2",
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 12,
      marginTop: 14
    }
  }, D.services.map(s => /*#__PURE__*/React.createElement("span", {
    key: s.name,
    style: {
      display: 'flex',
      gap: 9,
      alignItems: 'center',
      fontSize: 13,
      color: 'var(--text-body)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: s.icon,
    size: 15,
    color: "var(--gold-600)"
  }), s.name)))))));
}
Object.assign(window, {
  DirectoryPage,
  DoctorProfile,
  SpecialtyPage,
  AllSpecialties,
  LocationsPage
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Directory.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Home.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  Button,
  Badge,
  Chip,
  Card,
  Eyebrow,
  SectionHeading,
  SpecialtyCard,
  DoctorCard,
  StatBlock,
  Accordion,
  Input,
  Field,
  Select,
  Checkbox
} = window.ClinicaMextasDesignSystem_d4abcf;
const D = window.CM_DATA;
function Hero({
  onBook,
  go
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-page)',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "cm-hero",
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '0 0 0 var(--gutter)',
      display: 'grid',
      gridTemplateColumns: 'minmax(0,1fr) minmax(0,1.15fr)',
      gap: 56,
      alignItems: 'center',
      minHeight: 520
    }
  }, /*#__PURE__*/React.createElement(Reveal, {
    style: {
      paddingBlock: 'var(--space-9)'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Tu salud, nuestra prioridad"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 'var(--text-display-lg)',
      marginTop: 18,
      maxWidth: 520
    }
  }, "Cuidado m\xE9dico que te acompa\xF1a en cada etapa."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-body-lg)',
      lineHeight: 1.7,
      color: 'var(--text-muted)',
      marginTop: 20,
      maxWidth: 440
    }
  }, "En ClinicaMextas combinamos experiencia m\xE9dica, tecnolog\xEDa y atenci\xF3n humana para ofrecer una experiencia de salud dise\xF1ada alrededor de cada paciente."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      marginTop: 30,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    onClick: onBook,
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "calendar-days",
      size: 17
    })
  }, "Agendar cita"), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "secondary",
    onClick: () => go('especialidades')
  }, "Conocer nuestras especialidades"))), /*#__PURE__*/React.createElement(Reveal, {
    delay: 120,
    style: {
      alignSelf: 'stretch',
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/photos/recepcion.png",
    alt: "Recepci\xF3n de ClinicaMextas",
    style: {
      width: '100%',
      height: '100%',
      minHeight: 520,
      objectFit: 'cover',
      borderRadius: 'var(--radius-xl) 0 0 var(--radius-xl)'
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--line-hairline)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "cm-trust",
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '22px var(--gutter)',
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 28
    }
  }, D.trust.map(([t, s], i) => /*#__PURE__*/React.createElement(Reveal, {
    key: t,
    delay: i * 70,
    style: {
      display: 'flex',
      gap: 13,
      alignItems: 'center',
      borderLeft: i ? '1px solid var(--line-hairline)' : 'none',
      paddingLeft: i ? 28 : 0
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: ['heart-handshake', 'badge-check', 'cpu', 'building-2'][i],
    size: 26,
    color: "var(--gold-600)"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13.5,
      fontWeight: 600,
      color: 'var(--text-heading)'
    }
  }, t), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      color: 'var(--text-muted)',
      marginTop: 2
    }
  }, s)))))));
}
function QuickActions({
  onBook,
  go
}) {
  const acts = [['calendar-days', 'Agendar cita', () => onBook()], ['user-search', 'Encontrar un especialista', () => go('medicos')], ['layout-grid', 'Ver especialidades', () => go('especialidades')], ['map-pin', 'Ver sedes', () => go('sedes')], ['phone', 'Llamar a la clínica', () => {}]];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-raised)',
      borderBlock: '1px solid var(--line-hairline)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "cm-quick",
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '0 var(--gutter)',
      display: 'grid',
      gridTemplateColumns: 'repeat(5,1fr)'
    }
  }, acts.map(([i, l, fn], k) => /*#__PURE__*/React.createElement("button", {
    key: l,
    onClick: fn,
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 11,
      padding: '22px 12px',
      background: 'none',
      border: 'none',
      borderLeft: k ? '1px solid var(--line-hairline)' : 'none',
      cursor: 'pointer',
      fontFamily: 'var(--font-sans)',
      fontSize: 13.5,
      fontWeight: 500,
      color: 'var(--text-body)',
      transition: 'background var(--dur-fast) var(--ease-standard)'
    },
    onMouseEnter: e => e.currentTarget.style.background = 'var(--ivory-100)',
    onMouseLeave: e => e.currentTarget.style.background = 'none'
  }, /*#__PURE__*/React.createElement(Icon, {
    name: i,
    size: 18,
    color: "var(--gold-600)"
  }), l))));
}
function Specialties({
  go
}) {
  const list = D.specialties.slice(0, 7);
  return /*#__PURE__*/React.createElement(Section, {
    id: "especialidades",
    tone: "raised"
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(SectionHeading, {
    align: "center",
    eyebrow: "Nuestras especialidades",
    title: "Especialistas en tu bienestar",
    description: "Doce \xE1reas m\xE9dicas trabajando de forma coordinada alrededor de cada paciente."
  })), /*#__PURE__*/React.createElement("div", {
    className: "cm-spec-grid",
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(8,1fr)',
      gap: 14,
      marginTop: 44
    }
  }, list.map((s, i) => /*#__PURE__*/React.createElement(Reveal, {
    key: s.slug,
    delay: i * 60
  }, /*#__PURE__*/React.createElement(SpecialtyCard, {
    name: s.name,
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: s.icon,
      size: 28,
      color: "var(--gold-600)"
    }),
    onClick: () => go('especialidad:' + s.slug)
  }))), /*#__PURE__*/React.createElement(Reveal, {
    delay: 7 * 60
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => go('especialidades-todas'),
    style: {
      width: '100%',
      aspectRatio: '1/1',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 12,
      background: 'var(--surface-inverse)',
      border: 'none',
      borderRadius: 'var(--radius-md)',
      cursor: 'pointer',
      color: 'var(--ivory-100)',
      fontFamily: 'var(--font-sans)',
      fontSize: 13,
      fontWeight: 600,
      lineHeight: 1.35,
      padding: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 34,
      height: 34,
      borderRadius: '50%',
      border: '1px solid var(--gold-500)',
      display: 'grid',
      placeItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "plus",
    size: 16,
    color: "var(--gold-500)"
  })), "Ver todas las especialidades"))));
}
function Doctors({
  go,
  onBook
}) {
  return /*#__PURE__*/React.createElement(Section, {
    id: "medicos"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cm-doc-split",
    style: {
      display: 'grid',
      gridTemplateColumns: '0.85fr 2fr',
      gap: 48,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Nuestro equipo",
    title: "M\xE9dicos especialistas cerca de ti",
    description: "Contamos con un equipo altamente capacitado y comprometido con tu salud y la de tu familia.",
    actions: /*#__PURE__*/React.createElement(Button, {
      onClick: () => go('medicos')
    }, "Conoce a nuestros m\xE9dicos")
  })), /*#__PURE__*/React.createElement("div", {
    className: "cm-doc-grid",
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 16
    }
  }, D.doctors.map((d, i) => /*#__PURE__*/React.createElement(Reveal, {
    key: d.id,
    delay: i * 80
  }, /*#__PURE__*/React.createElement(DoctorCard, _extends({}, d, {
    subspecialty: undefined,
    license: d.license,
    location: 'Sede ' + d.location,
    onClick: () => go('medico:' + d.id)
  })))))));
}
function Services({
  onOpen
}) {
  return /*#__PURE__*/React.createElement(Section, {
    tone: "raised",
    id: "servicios"
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(SectionHeading, {
    align: "center",
    eyebrow: "Servicios",
    title: "Atenci\xF3n integral para tu salud",
    description: "Estudios, prevenci\xF3n y seguimiento en un mismo lugar."
  })), /*#__PURE__*/React.createElement("div", {
    className: "cm-serv-grid",
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 16,
      marginTop: 44
    }
  }, D.services.map((s, i) => /*#__PURE__*/React.createElement(Reveal, {
    key: s.name,
    delay: i * 60
  }, /*#__PURE__*/React.createElement(Card, {
    interactive: true,
    padding: 26,
    onClick: () => onOpen(s),
    style: {
      height: '100%'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: s.icon,
    size: 28,
    color: "var(--gold-600)"
  }), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-title-sm)',
      fontWeight: 600,
      marginTop: 16,
      color: 'var(--text-heading)'
    }
  }, s.name), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 13.5,
      color: 'var(--text-muted)',
      marginTop: 7,
      lineHeight: 1.6
    }
  }, s.desc), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 7,
      fontSize: 12.5,
      fontWeight: 600,
      color: 'var(--gold-600)',
      marginTop: 16
    }
  }, "M\xE1s informaci\xF3n ", /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-right",
    size: 14
  })))))));
}
function Stats() {
  const [i, setI] = React.useState(0);
  React.useEffect(() => {
    const t = setInterval(() => setI(x => (x + 1) % D.testimonials.length), 6000);
    return () => clearInterval(t);
  }, []);
  const t = D.testimonials[i];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-inverse)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "cm-stats",
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: 'var(--space-8) var(--gutter)',
      display: 'grid',
      gridTemplateColumns: '1.6fr 1fr',
      gap: 48,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 24
    }
  }, D.stats.map(([v, l], k) => /*#__PURE__*/React.createElement(StatBlock, {
    key: l,
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: ['award', 'users', 'stethoscope', 'map-pin'][k],
      size: 22
    }),
    value: k === 0 ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Counter, {
      to: 10
    }), "+") : k === 1 ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Counter, {
      to: 25
    }), "K+") : k === 2 ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Counter, {
      to: 30
    }), "+") : /*#__PURE__*/React.createElement(Counter, {
      to: 5
    }),
    label: l
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderLeft: '1px solid var(--line-inverse)',
      paddingLeft: 40
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 3,
      color: 'var(--gold-500)'
    }
  }, [0, 1, 2, 3, 4].map(n => /*#__PURE__*/React.createElement(Icon, {
    key: n,
    name: "star",
    size: 13
  }))), /*#__PURE__*/React.createElement("p", {
    key: i,
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 19,
      lineHeight: 1.5,
      color: 'var(--ivory-100)',
      marginTop: 14,
      animation: 'cmRise var(--dur-slow) var(--ease-entrance)'
    }
  }, "\u201C", t.quote, "\u201D"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 13,
      color: 'var(--text-on-inverse-muted)',
      marginTop: 12
    }
  }, "\u2014 ", t.author), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 7,
      marginTop: 18
    }
  }, D.testimonials.map((_, k) => /*#__PURE__*/React.createElement("button", {
    key: k,
    onClick: () => setI(k),
    "aria-label": 'Testimonio ' + (k + 1),
    style: {
      width: 7,
      height: 7,
      borderRadius: '50%',
      border: 'none',
      cursor: 'pointer',
      padding: 0,
      background: k === i ? 'var(--gold-500)' : 'rgba(255,255,255,.28)'
    }
  }))))));
}
function Emergency({
  go
}) {
  return /*#__PURE__*/React.createElement(Section, {
    tone: "page",
    py: "var(--space-8)"
  }, /*#__PURE__*/React.createElement(Card, {
    padding: 30,
    style: {
      borderColor: 'rgba(140,58,46,.28)',
      background: 'var(--status-danger-soft)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "cm-emg",
    style: {
      display: 'grid',
      gridTemplateColumns: 'auto 1fr auto',
      gap: 24,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "siren",
    size: 30,
    color: "var(--status-danger)"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-title-md)',
      color: 'var(--status-danger)'
    }
  }, "\xBFEs una emergencia m\xE9dica?"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14,
      lineHeight: 1.65,
      color: 'var(--ink-700)',
      marginTop: 7,
      maxWidth: 640
    }
  }, "Si presentas una emergencia m\xE9dica o una situaci\xF3n que pueda poner en riesgo tu vida, llama al servicio de emergencias de tu localidad o acude al servicio de urgencias m\xE1s cercano.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    onClick: () => go && go('urgencias')
  }, "Ver informaci\xF3n de urgencias"), /*#__PURE__*/React.createElement(Button, {
    style: {
      background: 'var(--status-danger)'
    },
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "phone",
      size: 15
    })
  }, "Llamar a emergencias")))));
}
function Faq() {
  return /*#__PURE__*/React.createElement(Section, {
    tone: "raised"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cm-faq",
    style: {
      display: 'grid',
      gridTemplateColumns: '0.8fr 1.4fr',
      gap: 56,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Preguntas frecuentes",
    title: "Resolvemos tus dudas",
    description: "Y si no encuentras lo que buscas, recepci\xF3n puede ayudarte por tel\xE9fono o WhatsApp.",
    size: "sm"
  })), /*#__PURE__*/React.createElement(Reveal, {
    delay: 100
  }, /*#__PURE__*/React.createElement(Accordion, {
    items: D.faqs,
    defaultOpen: [0]
  }))));
}
function Blog({
  go
}) {
  const cats = ['Todos', 'Prevención', 'Cardiología', 'Pediatría', 'Nutrición', 'Dermatología', 'Bienestar'];
  const [c, setC] = React.useState('Todos');
  const list = c === 'Todos' ? D.articles : D.articles.filter(a => a.cat === c);
  return /*#__PURE__*/React.createElement(Section, {
    id: "blog"
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Informaci\xF3n m\xE9dica",
    title: "Contenido para cuidarte mejor",
    description: "Art\xEDculos educativos escritos por nuestro equipo cl\xEDnico. No sustituyen una consulta m\xE9dica."
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 9,
      marginTop: 26,
      flexWrap: 'wrap'
    }
  }, cats.map(x => /*#__PURE__*/React.createElement(Chip, {
    key: x,
    selected: c === x,
    onClick: () => setC(x)
  }, x))), /*#__PURE__*/React.createElement("div", {
    className: "cm-blog-grid",
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 16,
      marginTop: 26
    }
  }, list.map((a, i) => /*#__PURE__*/React.createElement(Card, {
    key: a.title,
    interactive: true,
    padding: 0,
    onClick: () => go('articulo:' + D.articles.indexOf(a)),
    style: {
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 150,
      background: 'var(--ivory-200)',
      overflow: 'hidden'
    }
  }, a.photo ? /*#__PURE__*/React.createElement("img", {
    src: a.photo,
    alt: "",
    loading: "lazy",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block'
    }
  }) : /*#__PURE__*/React.createElement(PhotoSlot, null)), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 20,
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      flex: 1
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "gold",
    size: "sm"
  }, a.cat), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 18,
      lineHeight: 1.3,
      color: 'var(--text-heading)'
    }
  }, a.title), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: 'var(--text-muted)',
      marginTop: 'auto'
    }
  }, a.read, " de lectura"))))));
}
function ContactBlock() {
  const [sent, setSent] = React.useState(false),
    [ok, setOk] = React.useState(false);
  return /*#__PURE__*/React.createElement(Section, {
    id: "contacto",
    tone: "raised"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cm-contact",
    style: {
      display: 'grid',
      gridTemplateColumns: '0.9fr 1fr 1fr',
      gap: 40,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, null, "Vis\xEDtanos"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 'var(--text-display-sm)',
      marginTop: 16
    }
  }, "Estamos para ayudarte"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14.5,
      color: 'var(--text-muted)',
      marginTop: 14,
      lineHeight: 1.7
    }
  }, "Cont\xE1ctanos o vis\xEDtanos en cualquiera de nuestras sedes."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 13,
      marginTop: 24,
      fontSize: 13.5,
      color: 'var(--text-body)'
    }
  }, [['phone', D.clinic.phone], ['mail', D.clinic.email], ['clock', 'Lun – Vie: 7:00 am – 8:00 pm · Sáb: 8:00 am – 2:00 pm'], ['map-pin', D.clinic.address]].map(([i, t]) => /*#__PURE__*/React.createElement("span", {
    key: t,
    style: {
      display: 'flex',
      gap: 11,
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: i,
    size: 16,
    color: "var(--gold-600)"
  }), t)))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--ivory-200)',
      borderRadius: 'var(--radius-md)',
      height: 340,
      position: 'relative',
      overflow: 'hidden',
      border: '1px solid var(--line-hairline)'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "100%",
    height: "100%",
    viewBox: "0 0 400 340",
    "aria-label": "Mapa estilizado de la sede principal"
  }, /*#__PURE__*/React.createElement("rect", {
    width: "400",
    height: "340",
    fill: "#F3EFE7"
  }), [40, 100, 160, 220, 280].map(y => /*#__PURE__*/React.createElement("line", {
    key: y,
    x1: "0",
    y1: y,
    x2: "400",
    y2: y,
    stroke: "#E4DDD0",
    strokeWidth: "6"
  })), [60, 150, 250, 340].map(x => /*#__PURE__*/React.createElement("line", {
    key: x,
    x1: x,
    y1: "0",
    x2: x,
    y2: "340",
    stroke: "#E4DDD0",
    strokeWidth: "6"
  })), /*#__PURE__*/React.createElement("line", {
    x1: "0",
    y1: "160",
    x2: "400",
    y2: "160",
    stroke: "#DCD3C2",
    strokeWidth: "14"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: '42%',
      left: '50%',
      transform: 'translate(-50%,-50%)',
      background: '#fff',
      borderRadius: 'var(--radius-md)',
      padding: '14px 18px',
      boxShadow: 'var(--shadow-md)',
      minWidth: 180
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 9,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "map-pin",
    size: 16,
    color: "var(--gold-600)"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 600,
      color: 'var(--text-heading)'
    }
  }, "Sede San Pedro"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11.5,
      color: 'var(--text-muted)'
    }
  }, "Av. San Pedro 123"))), /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => e.preventDefault(),
    style: {
      fontSize: 12,
      fontWeight: 600,
      color: 'var(--gold-600)',
      marginTop: 10,
      display: 'inline-block'
    }
  }, "C\xF3mo llegar"))), /*#__PURE__*/React.createElement(Card, {
    padding: 26
  }, sent ? /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      padding: '34px 6px',
      animation: 'cmRise var(--dur-slow) var(--ease-entrance)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 52,
      height: 52,
      borderRadius: '50%',
      background: 'var(--green-100)',
      display: 'grid',
      placeItems: 'center',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 24,
    color: "var(--green-800)"
  })), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 22,
      marginTop: 18
    }
  }, "Mensaje enviado"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 13.5,
      color: 'var(--text-muted)',
      marginTop: 10,
      lineHeight: 1.6
    }
  }, "Gracias por escribirnos. Recepci\xF3n te contactar\xE1 dentro del siguiente d\xEDa h\xE1bil."), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "sm",
    style: {
      marginTop: 20
    },
    onClick: () => setSent(false)
  }, "Enviar otro mensaje")) : /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      setSent(true);
    },
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Escr\xEDbenos"), /*#__PURE__*/React.createElement(Field, {
    label: "Nombre",
    required: true,
    htmlFor: "cf1"
  }, /*#__PURE__*/React.createElement(Input, {
    id: "cf1",
    required: true,
    placeholder: "Nombre completo"
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Correo",
    required: true,
    htmlFor: "cf2"
  }, /*#__PURE__*/React.createElement(Input, {
    id: "cf2",
    type: "email",
    required: true,
    placeholder: "tucorreo@ejemplo.mx"
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Tel\xE9fono",
    htmlFor: "cf3"
  }, /*#__PURE__*/React.createElement(Input, {
    id: "cf3",
    placeholder: "(81) 1234 5678"
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Motivo de contacto",
    htmlFor: "cf4"
  }, /*#__PURE__*/React.createElement(Select, {
    id: "cf4",
    options: ['Información general', 'Agendar cita', 'Estudios y laboratorio', 'Facturación', 'Otro']
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Mensaje",
    hint: "No incluyas informaci\xF3n m\xE9dica sensible.",
    htmlFor: "cf5"
  }, /*#__PURE__*/React.createElement(Input, {
    id: "cf5",
    multiline: true,
    rows: 3,
    placeholder: "\xBFEn qu\xE9 podemos ayudarte?"
  })), /*#__PURE__*/React.createElement(Checkbox, {
    checked: ok,
    onChange: setOk,
    label: "Al enviar este formulario acepto el aviso de privacidad."
  }), /*#__PURE__*/React.createElement(Button, {
    type: "submit",
    fullWidth: true,
    disabled: !ok
  }, "Enviar mensaje")))));
}
Object.assign(window, {
  Hero,
  QuickActions,
  Specialties,
  Doctors,
  Services,
  Stats,
  Emergency,
  Faq,
  Blog,
  ContactBlock
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Home.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Pages.jsx
try { (() => {
/* Instalaciones + lightbox, Tecnología, Check-ups y teasers de la home. */
const {
  Button,
  Badge,
  Chip,
  Card,
  Eyebrow,
  SectionHeading,
  Modal,
  Field,
  Input,
  Select,
  Checkbox
} = window.ClinicaMextasDesignSystem_d4abcf;
const D = window.CM_DATA;
function Lightbox({
  items,
  index,
  onClose,
  onNav
}) {
  const tx = React.useRef(0);
  React.useEffect(() => {
    if (index == null) return;
    const k = e => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNav(1);
      if (e.key === 'ArrowLeft') onNav(-1);
    };
    window.addEventListener('keydown', k);
    return () => window.removeEventListener('keydown', k);
  }, [index]);
  if (index == null) return null;
  const it = items[index];
  const nb = {
    width: 46,
    height: 46,
    borderRadius: '50%',
    border: '1px solid rgba(255,255,255,.25)',
    background: 'transparent',
    cursor: 'pointer',
    display: 'grid',
    placeItems: 'center'
  };
  return /*#__PURE__*/React.createElement("div", {
    role: "dialog",
    "aria-modal": "true",
    "aria-label": it.name,
    onClick: onClose,
    onTouchStart: e => tx.current = e.touches[0].clientX,
    onTouchEnd: e => {
      const d = e.changedTouches[0].clientX - tx.current;
      if (Math.abs(d) > 50) onNav(d < 0 ? 1 : -1);
    },
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 96,
      background: 'rgba(12,26,20,.94)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 24,
      animation: 'cmRise var(--dur-base) var(--ease-standard)'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    "aria-label": "Cerrar galer\xEDa",
    style: {
      ...nb,
      position: 'absolute',
      top: 20,
      right: 20
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "x",
    size: 18,
    color: "var(--ivory-100)"
  })), /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      width: 'min(1080px,100%)',
      display: 'flex',
      flexDirection: 'column',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    key: index,
    style: {
      aspectRatio: '16/9',
      maxHeight: '66vh',
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden',
      animation: 'cmRise var(--dur-slow) var(--ease-entrance)'
    }
  }, it.photo ? /*#__PURE__*/React.createElement("img", {
    src: it.photo,
    alt: it.name,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block'
    }
  }) : /*#__PURE__*/React.createElement(PhotoSlot, {
    name: it.name,
    icon: it.icon,
    dark: true
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      gap: 24,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 640
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "inverse"
  }, String(index + 1).padStart(2, '0'), " / ", String(items.length).padStart(2, '0')), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 'var(--text-display-sm)',
      color: 'var(--ivory-100)',
      marginTop: 10
    }
  }, it.name), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 15,
      lineHeight: 1.65,
      color: 'var(--green-300)',
      marginTop: 10
    }
  }, it.desc)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => onNav(-1),
    "aria-label": "Anterior",
    style: nb
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-left",
    size: 18,
    color: "var(--ivory-100)"
  })), /*#__PURE__*/React.createElement("button", {
    onClick: () => onNav(1),
    "aria-label": "Siguiente",
    style: nb
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-right",
    size: 18,
    color: "var(--ivory-100)"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      justifyContent: 'center'
    }
  }, items.map((_, k) => /*#__PURE__*/React.createElement("span", {
    key: k,
    style: {
      width: k === index ? 22 : 6,
      height: 6,
      borderRadius: 3,
      background: k === index ? 'var(--gold-500)' : 'rgba(255,255,255,.25)',
      transition: 'width var(--dur-base) var(--ease-standard)'
    }
  })))));
}
function Gallery({
  items
}) {
  const [i, setI] = React.useState(null);
  const nav = d => setI(x => (x + d + items.length) % items.length);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "cm-gallery",
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gridAutoRows: 220,
      gap: 14
    }
  }, items.map((it, k) => /*#__PURE__*/React.createElement(Reveal, {
    key: it.name,
    delay: k * 50,
    style: {
      gridColumn: k === 0 ? 'span 2' : undefined,
      gridRow: k === 0 ? 'span 2' : undefined
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setI(k),
    "aria-label": 'Ver ' + it.name,
    className: "cm-gtile",
    style: {
      position: 'relative',
      width: '100%',
      height: '100%',
      padding: 0,
      border: 'none',
      borderRadius: 'var(--radius-md)',
      overflow: 'hidden',
      cursor: 'zoom-in',
      display: 'block'
    }
  }, it.photo ? /*#__PURE__*/React.createElement("img", {
    src: it.photo,
    alt: "",
    loading: "lazy",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block',
      transition: 'transform var(--dur-slow) var(--ease-standard)'
    }
  }) : /*#__PURE__*/React.createElement(PhotoSlot, {
    name: it.name,
    icon: it.icon
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      padding: '40px 18px 16px',
      textAlign: 'left',
      background: 'linear-gradient(to top,rgba(18,39,31,.72),rgba(18,39,31,0))',
      color: 'var(--ivory-100)',
      fontFamily: 'var(--font-display)',
      fontSize: k === 0 ? 24 : 17
    }
  }, it.name))))), /*#__PURE__*/React.createElement(Lightbox, {
    items: items,
    index: i,
    onClose: () => setI(null),
    onNav: nav
  }));
}
function TechnologyGrid() {
  return /*#__PURE__*/React.createElement("div", {
    className: "cm-serv-grid",
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 16,
      marginTop: 40
    }
  }, D.technology.map(([ic, t, d], k) => /*#__PURE__*/React.createElement(Reveal, {
    key: t,
    delay: k * 60
  }, /*#__PURE__*/React.createElement(Card, {
    padding: 28,
    style: {
      height: '100%'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: ic,
    size: 28,
    color: "var(--gold-600)"
  }), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-title-sm)',
      fontWeight: 600,
      marginTop: 16
    }
  }, t), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14,
      lineHeight: 1.65,
      color: 'var(--text-muted)',
      marginTop: 8
    }
  }, d)))));
}
function FacilitiesPage({
  go
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement(Crumbs, {
    go: go,
    items: [['Instalaciones']]
  }), /*#__PURE__*/React.createElement("div", {
    className: "cm-doc-split",
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr auto',
      gap: 32,
      alignItems: 'end',
      marginBottom: 36
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Instalaciones",
    title: "Espacios pensados para tu tranquilidad",
    description: "Luz natural, materiales c\xE1lidos y circulaci\xF3n clara. Selecciona un espacio para recorrerlo."
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 12.5,
      color: 'var(--text-muted)',
      display: 'flex',
      gap: 8,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "mouse-pointer-click",
    size: 15,
    color: "var(--gold-600)"
  }), "Usa \u2190 \u2192 para navegar la galer\xEDa")), /*#__PURE__*/React.createElement(Gallery, {
    items: D.facilities
  })), /*#__PURE__*/React.createElement(Section, {
    tone: "raised",
    id: "tecnologia"
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    align: "center",
    eyebrow: "Tecnolog\xEDa m\xE9dica",
    title: "Herramientas al servicio del criterio m\xE9dico",
    description: "La tecnolog\xEDa apoya el diagn\xF3stico; las decisiones las toma siempre tu m\xE9dico contigo."
  }), /*#__PURE__*/React.createElement(TechnologyGrid, null)));
}
function TechnologyPage({
  go
}) {
  return /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement(Crumbs, {
    go: go,
    items: [['Instalaciones', 'instalaciones'], ['Tecnología médica']]
  }), /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Tecnolog\xEDa m\xE9dica",
    title: "Herramientas al servicio del criterio m\xE9dico",
    description: "Diagn\xF3stico, laboratorio, imagenolog\xEDa y seguimiento digital, integrados en un mismo expediente."
  }), /*#__PURE__*/React.createElement(TechnologyGrid, null), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 40,
      display: 'flex',
      gap: 12,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    onClick: () => go('instalaciones')
  }, "Recorrer instalaciones"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    onClick: () => go('checkups')
  }, "Ver check-ups")));
}
function InfoRequest({
  pkg,
  onClose
}) {
  const [st, setSt] = React.useState('idle'),
    [ok, setOk] = React.useState(false);
  React.useEffect(() => {
    if (pkg) setSt('idle');
  }, [pkg]);
  const submit = e => {
    e.preventDefault();
    setSt('loading');
    setTimeout(() => setSt('done'), 1100);
  };
  return /*#__PURE__*/React.createElement(Modal, {
    open: !!pkg,
    onClose: onClose,
    size: "sm",
    eyebrow: "Solicitar informaci\xF3n",
    title: pkg && pkg.name
  }, st === 'done' ? /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      padding: '12px 0 6px',
      animation: 'cmRise var(--dur-slow) var(--ease-entrance)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 54,
      height: 54,
      borderRadius: '50%',
      background: 'var(--green-100)',
      display: 'grid',
      placeItems: 'center',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 24,
    color: "var(--green-800)"
  })), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 22,
      marginTop: 16
    }
  }, "Solicitud enviada"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14,
      color: 'var(--text-muted)',
      marginTop: 10,
      lineHeight: 1.6
    }
  }, "Un coordinador de check-ups te contactar\xE1 para explicarte el paquete y resolver tus dudas."), /*#__PURE__*/React.createElement(Button, {
    style: {
      marginTop: 22
    },
    onClick: onClose
  }, "Entendido")) : /*#__PURE__*/React.createElement("form", {
    onSubmit: submit,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(Field, {
    label: "Nombre",
    required: true,
    htmlFor: "ir1"
  }, /*#__PURE__*/React.createElement(Input, {
    id: "ir1",
    required: true,
    placeholder: "Nombre completo"
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Tel\xE9fono",
    required: true,
    htmlFor: "ir2"
  }, /*#__PURE__*/React.createElement(Input, {
    id: "ir2",
    required: true,
    placeholder: "(81) 1234 5678"
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Correo",
    htmlFor: "ir3"
  }, /*#__PURE__*/React.createElement(Input, {
    id: "ir3",
    type: "email",
    placeholder: "tucorreo@ejemplo.mx"
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Sede de preferencia",
    htmlFor: "ir4"
  }, /*#__PURE__*/React.createElement(Select, {
    id: "ir4",
    options: D.locations.map(l => l.name)
  })), /*#__PURE__*/React.createElement(Checkbox, {
    checked: ok,
    onChange: setOk,
    label: "Acepto el aviso de privacidad."
  }), /*#__PURE__*/React.createElement(Button, {
    type: "submit",
    fullWidth: true,
    disabled: !ok || st === 'loading'
  }, st === 'loading' ? 'Enviando…' : 'Solicitar información')));
}
function CheckupsPage({
  go
}) {
  const [pkg, setPkg] = React.useState(null);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement(Crumbs, {
    go: go,
    items: [['Servicios', 'servicios'], ['Check-ups']]
  }), /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Check-ups preventivos",
    title: "Conoce tu salud cuando te sientes bien",
    description: "Tres paquetes con estudios coordinados y una consulta para explicarte los resultados."
  }), /*#__PURE__*/React.createElement("div", {
    className: "cm-serv-grid",
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 18,
      marginTop: 40,
      alignItems: 'stretch'
    }
  }, D.checkups.map((c, k) => /*#__PURE__*/React.createElement(Reveal, {
    key: c.id,
    delay: k * 90
  }, /*#__PURE__*/React.createElement(Card, {
    padding: 0,
    style: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden',
      borderColor: k === 1 ? 'var(--gold-300)' : undefined
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '28px 28px 22px',
      background: k === 2 ? 'var(--surface-inverse)' : k === 1 ? 'var(--surface-accent-soft)' : 'var(--surface-card)',
      borderBottom: '1px solid ' + (k === 2 ? 'var(--line-inverse)' : 'var(--line-hairline)')
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: k === 2 ? 'inverse' : 'gold'
  }, ['01', '02', '03'][k]), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 26,
      marginTop: 10,
      color: k === 2 ? 'var(--ivory-100)' : undefined
    }
  }, c.name), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14,
      marginTop: 8,
      color: k === 2 ? 'var(--green-300)' : 'var(--text-muted)'
    }
  }, c.tag), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      alignItems: 'center',
      marginTop: 16,
      fontSize: 13,
      color: k === 2 ? 'var(--ivory-100)' : 'var(--text-body)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "clock",
    size: 15,
    color: "var(--gold-600)"
  }), c.duration)), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '22px 28px 28px',
      display: 'flex',
      flexDirection: 'column',
      gap: 18,
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11.5,
      fontWeight: 600,
      letterSpacing: '.08em',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, "Para qui\xE9n"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14,
      lineHeight: 1.6,
      marginTop: 6
    }
  }, c.for)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11.5,
      fontWeight: 600,
      letterSpacing: '.08em',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, "Qu\xE9 incluye"), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      padding: 0,
      margin: '10px 0 0',
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, c.includes.map(x => /*#__PURE__*/React.createElement("li", {
    key: x,
    style: {
      display: 'flex',
      gap: 9,
      fontSize: 13.5,
      lineHeight: 1.5
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 15,
    color: "var(--gold-600)"
  }), x)))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-sunken)',
      borderRadius: 'var(--radius-sm)',
      padding: '14px 16px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11.5,
      fontWeight: 600,
      letterSpacing: '.08em',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, "Preparaci\xF3n general"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 13,
      lineHeight: 1.6,
      marginTop: 6,
      color: 'var(--text-body)'
    }
  }, c.prep.join(' · '))), /*#__PURE__*/React.createElement(Button, {
    fullWidth: true,
    variant: k === 1 ? 'primary' : 'secondary',
    onClick: () => setPkg(c),
    style: {
      marginTop: 'auto'
    }
  }, "Solicitar informaci\xF3n")))))), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 12.5,
      color: 'var(--text-muted)',
      marginTop: 24,
      textAlign: 'center'
    }
  }, "Contenido demostrativo. Tu m\xE9dico puede ajustar los estudios seg\xFAn tu historial cl\xEDnico.")), /*#__PURE__*/React.createElement(InfoRequest, {
    pkg: pkg,
    onClose: () => setPkg(null)
  }));
}
function CheckupTeaser({
  go
}) {
  return /*#__PURE__*/React.createElement(Section, {
    tone: "sunken",
    py: "var(--space-9)"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cm-doc-split",
    style: {
      display: 'grid',
      gridTemplateColumns: '0.9fr 1.6fr',
      gap: 48,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Check-ups",
    title: "Prevenci\xF3n en una sola visita",
    description: "Paquetes con estudios coordinados y consulta de resultados.",
    size: "sm",
    actions: /*#__PURE__*/React.createElement(Button, {
      onClick: () => go('checkups')
    }, "Ver paquetes")
  })), /*#__PURE__*/React.createElement("div", {
    className: "cm-serv-grid",
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 14
    }
  }, D.checkups.map((c, k) => /*#__PURE__*/React.createElement(Reveal, {
    key: c.id,
    delay: k * 80
  }, /*#__PURE__*/React.createElement(Card, {
    interactive: true,
    padding: 22,
    onClick: () => go('checkups'),
    style: {
      height: '100%'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 20
    }
  }, c.name.replace('Check-up ', '')), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 13,
      color: 'var(--text-muted)',
      marginTop: 8,
      lineHeight: 1.5
    }
  }, c.tag), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 7,
      alignItems: 'center',
      marginTop: 16,
      fontSize: 12.5,
      color: 'var(--text-accent)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "clock",
    size: 14
  }), c.duration)))))));
}
function FacilitiesTeaser({
  go
}) {
  const f = D.facilities;
  return /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement("div", {
    className: "cm-doc-split",
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr auto',
      gap: 24,
      alignItems: 'end',
      marginBottom: 32
    }
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Instalaciones",
    title: "Espacios de primer nivel, con calidez"
  })), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    onClick: () => go('instalaciones'),
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 15
    })
  }, "Recorrer instalaciones")), /*#__PURE__*/React.createElement("div", {
    className: "cm-fac-teaser",
    style: {
      display: 'grid',
      gridTemplateColumns: '2fr 1fr 1fr',
      gridTemplateRows: '200px 200px',
      gap: 14
    }
  }, [0, 1, 3, 4, 6].map((k, i) => /*#__PURE__*/React.createElement("button", {
    key: k,
    onClick: () => go('instalaciones'),
    style: {
      gridRow: i === 0 ? 'span 2' : undefined,
      position: 'relative',
      padding: 0,
      border: 'none',
      borderRadius: 'var(--radius-md)',
      overflow: 'hidden',
      cursor: 'pointer'
    }
  }, f[k].photo ? /*#__PURE__*/React.createElement("img", {
    src: f[k].photo,
    alt: f[k].name,
    loading: "lazy",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block'
    }
  }) : /*#__PURE__*/React.createElement(PhotoSlot, {
    icon: f[k].icon
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: 14,
      bottom: 12,
      background: 'rgba(249,246,240,.94)',
      borderRadius: 'var(--radius-pill)',
      padding: '5px 12px',
      fontSize: 12,
      fontWeight: 600,
      color: 'var(--green-800)'
    }
  }, f[k].name)))));
}
function FirstVisit({
  go
}) {
  const steps = [['calendar-check', 'Antes de tu cita', 'Recibirás la confirmación de tu solicitud y qué llevar: identificación, estudios previos y lista de medicamentos.'], ['door-open', 'Al llegar', 'Preséntate en recepción 15 minutos antes. Registramos tus datos y te acompañamos a la sala de espera.'], ['stethoscope', 'Durante la consulta', 'Tu médico te escucha, revisa tus antecedentes y te explica con claridad los siguientes pasos.'], ['repeat', 'Después', 'Recibes indicaciones por escrito y, si aplica, programamos estudios o tu consulta de seguimiento.']];
  return /*#__PURE__*/React.createElement(Section, {
    tone: "raised"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cm-faq",
    style: {
      display: 'grid',
      gridTemplateColumns: '1.7fr 1fr',
      gap: 48,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Pacientes nuevos",
    title: "\xBFEs tu primera visita?",
    description: "As\xED es el proceso, de principio a fin.",
    size: "sm"
  })), /*#__PURE__*/React.createElement("div", {
    className: "cm-steps",
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 0,
      marginTop: 32,
      borderTop: '1px solid var(--line-hairline)'
    }
  }, steps.map(([ic, t, d], k) => /*#__PURE__*/React.createElement(Reveal, {
    key: t,
    delay: k * 80,
    style: {
      padding: '22px 18px 0 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 22,
      color: 'var(--gold-600)'
    }
  }, "0", k + 1), /*#__PURE__*/React.createElement(Icon, {
    name: ic,
    size: 18,
    color: "var(--green-500)"
  })), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 15,
      fontWeight: 600,
      marginTop: 12
    }
  }, t), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 13,
      lineHeight: 1.6,
      color: 'var(--text-muted)',
      marginTop: 7
    }
  }, d)))), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    style: {
      marginTop: 22,
      paddingInline: 0
    },
    onClick: () => go('pacientes:primera'),
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 15
    })
  }, "Gu\xEDa completa para tu primera visita")), /*#__PURE__*/React.createElement(Reveal, {
    delay: 120
  }, /*#__PURE__*/React.createElement(Card, {
    padding: 28,
    id: "horarios"
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Horarios"), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 24,
      marginTop: 10
    }
  }, "Atenci\xF3n general"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 16
    }
  }, D.clinic.hours.map(([d, h]) => /*#__PURE__*/React.createElement("div", {
    key: d,
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      gap: 12,
      padding: '12px 0',
      borderBottom: '1px solid var(--line-hairline)',
      fontSize: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-body)'
    }
  }, d), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 600,
      color: h === 'Cerrado' ? 'var(--text-muted)' : 'var(--text-heading)'
    }
  }, h)))), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 12.5,
      color: 'var(--text-muted)',
      marginTop: 14,
      lineHeight: 1.55
    }
  }, "Los horarios pueden variar seg\xFAn especialidad y disponibilidad."), /*#__PURE__*/React.createElement(Button, {
    fullWidth: true,
    variant: "secondary",
    style: {
      marginTop: 18
    },
    onClick: () => go('medicos')
  }, "Consulta los horarios de cada especialista")))));
}
Object.assign(window, {
  Lightbox,
  Gallery,
  FacilitiesPage,
  TechnologyPage,
  CheckupsPage,
  CheckupTeaser,
  FacilitiesTeaser,
  FirstVisit
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Pages.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Patients.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Información para pacientes, artículo, urgencias y páginas legales. */
const {
  Button,
  Badge,
  Chip,
  Card,
  Eyebrow,
  SectionHeading,
  Accordion,
  DoctorCard,
  SpecialtyCard
} = window.ClinicaMextasDesignSystem_d4abcf;
const D = window.CM_DATA;
const PT_TABS = [['primera', 'Primera visita', 'footprints'], ['estudios', 'Preparación para estudios', 'flask-conical'], ['faq', 'Preguntas frecuentes', 'circle-help'], ['pagos', 'Métodos de pago', 'credit-card'], ['seguros', 'Seguros y convenios', 'shield-check'], ['horarios', 'Horarios', 'clock'], ['ubicaciones', 'Ubicaciones', 'map-pin'], ['cancelacion', 'Políticas de cancelación', 'calendar-x'], ['recomendaciones', 'Recomendaciones generales', 'heart-pulse']];
function PtList({
  items
}) {
  return /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      padding: 0,
      margin: '18px 0 0',
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, items.map(([ic, t, d]) => /*#__PURE__*/React.createElement("li", {
    key: t,
    style: {
      display: 'flex',
      gap: 14,
      padding: '16px 18px',
      background: 'var(--surface-card)',
      border: '1px solid var(--line-hairline)',
      borderRadius: 'var(--radius-sm)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: ic,
    size: 19,
    color: "var(--gold-600)"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14.5,
      fontWeight: 600,
      color: 'var(--text-heading)'
    }
  }, t), d && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13.5,
      lineHeight: 1.6,
      color: 'var(--text-muted)',
      marginTop: 4
    }
  }, d)))));
}
function PtHead({
  t,
  d
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 'var(--text-display-sm)'
    }
  }, t), d && /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 15,
      lineHeight: 1.7,
      color: 'var(--text-muted)',
      marginTop: 10,
      maxWidth: 620
    }
  }, d));
}
function PatientsTab({
  id,
  go
}) {
  if (id === 'primera') return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PtHead, {
    t: "Tu primera visita",
    d: "Todo lo que necesitas saber para llegar tranquilo a tu consulta."
  }), /*#__PURE__*/React.createElement(PtList, {
    items: [['calendar-check', 'Antes de tu cita', 'Revisa el correo de confirmación de tu solicitud. Prepara identificación oficial, estudios previos y la lista de medicamentos que tomas.'], ['door-open', 'Al llegar', 'Llega 15 minutos antes. En recepción registramos tus datos generales y te indicamos la sala de espera.'], ['stethoscope', 'Durante la consulta', 'Tu médico revisa tus antecedentes, realiza una exploración y te explica los siguientes pasos. Pregunta todo lo que necesites.'], ['repeat', 'Después', 'Recibes indicaciones por escrito. Si se requieren estudios o seguimiento, recepción te ayuda a programarlos.']]
  }));
  if (id === 'estudios') return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PtHead, {
    t: "Preparaci\xF3n para estudios",
    d: "Indicaciones generales. Tu m\xE9dico o el laboratorio te dar\xE1n instrucciones espec\xEDficas para cada estudio."
  }), /*#__PURE__*/React.createElement(PtList, {
    items: [['moon', 'Estudios de sangre', 'Generalmente requieren ayuno de 8 a 12 horas. Puedes tomar agua natural.'], ['glass-water', 'Ultrasonido abdominal', 'Suele requerir ayuno de 6 a 8 horas. Algunos ultrasonidos requieren vejiga llena.'], ['shirt', 'Rayos X', 'Usa ropa cómoda sin elementos metálicos. Informa si existe posibilidad de embarazo.'], ['pill', 'Medicamentos', 'No suspendas ningún medicamento sin indicación de tu médico.']]
  }));
  if (id === 'faq') return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PtHead, {
    t: "Preguntas frecuentes"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 18
    }
  }, /*#__PURE__*/React.createElement(Accordion, {
    items: D.faqs,
    defaultOpen: [0]
  })));
  if (id === 'pagos') return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PtHead, {
    t: "Formas de pago",
    d: "Aceptamos distintos m\xE9todos para tu comodidad. El pago se realiza en recepci\xF3n al finalizar tu consulta."
  }), /*#__PURE__*/React.createElement("div", {
    className: "cm-serv-grid",
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 14,
      marginTop: 18
    }
  }, [['credit-card', 'Tarjeta', 'Crédito y débito, principales emisores.'], ['arrow-left-right', 'Transferencia', 'Te compartimos los datos en recepción.'], ['banknote', 'Efectivo', 'En moneda nacional.']].map(([ic, t, d]) => /*#__PURE__*/React.createElement(Card, {
    key: t,
    padding: 22
  }, /*#__PURE__*/React.createElement(Icon, {
    name: ic,
    size: 24,
    color: "var(--gold-600)"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      fontWeight: 600,
      marginTop: 12,
      color: 'var(--text-heading)'
    }
  }, t), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--text-muted)',
      marginTop: 5,
      lineHeight: 1.5
    }
  }, d)))), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 13,
      color: 'var(--text-muted)',
      marginTop: 16
    }
  }, "Emitimos factura electr\xF3nica. Solic\xEDtala en recepci\xF3n el mismo d\xEDa de tu consulta."));
  if (id === 'seguros') return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PtHead, {
    t: "Seguros y convenios",
    d: "Trabajamos con aseguradoras y convenios empresariales. Los nombres mostrados son ejemplos demostrativos."
  }), /*#__PURE__*/React.createElement("div", {
    className: "cm-serv-grid",
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 12,
      marginTop: 18
    }
  }, D.insurers.map(n => /*#__PURE__*/React.createElement(Card, {
    key: n,
    padding: 20,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 34,
      height: 34,
      borderRadius: '50%',
      background: 'var(--ivory-200)',
      display: 'grid',
      placeItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "shield",
    size: 16,
    color: "var(--green-500)"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      fontWeight: 600,
      color: 'var(--text-heading)'
    }
  }, n)), /*#__PURE__*/React.createElement(Badge, {
    tone: "gold",
    size: "sm",
    style: {
      alignSelf: 'flex-start'
    }
  }, "Ejemplo de convenio")))), /*#__PURE__*/React.createElement(Card, {
    padding: 18,
    tone: "sunken",
    style: {
      marginTop: 16,
      display: 'flex',
      gap: 12,
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "info",
    size: 17,
    color: "var(--gold-600)"
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 13,
      lineHeight: 1.6,
      color: 'var(--text-body)'
    }
  }, "Antes de tu consulta, verifica con tu aseguradora la cobertura y los requisitos. Recepci\xF3n puede orientarte con el tr\xE1mite.")));
  if (id === 'horarios') return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PtHead, {
    t: "Horarios",
    d: "Los horarios pueden variar seg\xFAn especialidad y disponibilidad."
  }), /*#__PURE__*/React.createElement(Card, {
    padding: 24,
    style: {
      marginTop: 18,
      maxWidth: 520
    }
  }, D.clinic.hours.map(([d, h]) => /*#__PURE__*/React.createElement("div", {
    key: d,
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      padding: '13px 0',
      borderBottom: '1px solid var(--line-hairline)',
      fontSize: 14.5
    }
  }, /*#__PURE__*/React.createElement("span", null, d), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 600,
      color: h === 'Cerrado' ? 'var(--text-muted)' : 'var(--text-heading)'
    }
  }, h)))), /*#__PURE__*/React.createElement(Button, {
    style: {
      marginTop: 18
    },
    onClick: () => go('medicos')
  }, "Consulta los horarios de cada especialista"));
  if (id === 'ubicaciones') return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PtHead, {
    t: "Ubicaciones"
  }), /*#__PURE__*/React.createElement("div", {
    className: "cm-dir-grid",
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 12,
      marginTop: 18
    }
  }, D.locations.map(l => /*#__PURE__*/React.createElement(Card, {
    key: l.id,
    interactive: true,
    padding: 20,
    onClick: () => go('sedes')
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      fontWeight: 600,
      color: 'var(--text-heading)'
    }
  }, l.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--text-muted)',
      marginTop: 5
    }
  }, l.address, " \xB7 ", l.city), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--text-accent)',
      marginTop: 10,
      display: 'flex',
      gap: 7,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "phone",
    size: 14
  }), l.phone)))));
  if (id === 'cancelacion') return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PtHead, {
    t: "Pol\xEDticas de cancelaci\xF3n",
    d: "Texto demostrativo. Ajusta estas pol\xEDticas a la operaci\xF3n real de la cl\xEDnica."
  }), /*#__PURE__*/React.createElement(PtList, {
    items: [['calendar-clock', 'Cambios y cancelaciones', 'Puedes cambiar o cancelar tu cita contactando a recepción con al menos 12 horas de anticipación.'], ['clock', 'Tolerancia', 'Contamos con 15 minutos de tolerancia. Después de ese tiempo, recepción te ofrecerá el siguiente horario disponible.'], ['bell', 'Recordatorios', 'Te enviamos un recordatorio por correo 24 horas antes de tu cita.']]
  }));
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PtHead, {
    t: "Recomendaciones generales",
    d: "Consejos pr\xE1cticos para aprovechar mejor tu atenci\xF3n."
  }), /*#__PURE__*/React.createElement(PtList, {
    items: [['file-text', 'Lleva tus estudios', 'Los estudios recientes ayudan a tu médico a tener un panorama completo.'], ['message-square-text', 'Anota tus dudas', 'Escribe tus preguntas antes de la consulta para no olvidar ninguna.'], ['users', 'Acompañamiento', 'Puedes asistir acompañado de un familiar o persona de confianza.'], ['accessibility', 'Accesibilidad', 'Si requieres apoyo de movilidad, avísanos al solicitar tu cita.']]
  }));
}
function PatientsPage({
  tab,
  go
}) {
  const [t, setT] = React.useState(tab || 'primera');
  React.useEffect(() => {
    if (tab) setT(tab);
  }, [tab]);
  return /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement(Crumbs, {
    go: go,
    items: [['Información para pacientes']]
  }), /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Pacientes",
    title: "Informaci\xF3n para pacientes",
    description: "Gu\xEDas pr\xE1cticas, pol\xEDticas y respuestas para que tu experiencia sea clara desde el primer contacto."
  }), /*#__PURE__*/React.createElement("div", {
    className: "cm-pat",
    style: {
      display: 'grid',
      gridTemplateColumns: '260px minmax(0,1fr)',
      gap: 44,
      marginTop: 40,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("nav", {
    className: "cm-pat-nav",
    role: "tablist",
    "aria-label": "Categor\xEDas",
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 2,
      position: 'sticky',
      top: 96
    }
  }, PT_TABS.map(([id, l, ic]) => /*#__PURE__*/React.createElement("button", {
    key: id,
    role: "tab",
    "aria-selected": t === id,
    onClick: () => setT(id),
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 11,
      padding: '12px 14px',
      border: 'none',
      borderRadius: 'var(--radius-sm)',
      cursor: 'pointer',
      textAlign: 'left',
      whiteSpace: 'nowrap',
      fontFamily: 'var(--font-sans)',
      fontSize: 13.5,
      fontWeight: t === id ? 600 : 400,
      background: t === id ? 'var(--surface-card)' : 'transparent',
      color: t === id ? 'var(--green-800)' : 'var(--text-body)',
      boxShadow: t === id ? 'var(--shadow-xs)' : 'none',
      transition: 'all var(--dur-fast) var(--ease-standard)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: ic,
    size: 16,
    color: t === id ? 'var(--gold-600)' : 'var(--ink-300)'
  }), l))), /*#__PURE__*/React.createElement("div", {
    key: t,
    role: "tabpanel",
    style: {
      animation: 'cmRise var(--dur-slow) var(--ease-entrance)',
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement(PatientsTab, {
    id: t,
    go: go
  }))));
}
function ArticlePage({
  idx,
  go,
  onBook
}) {
  const a = D.articles[idx] || D.articles[0],
    b = D.articleBodies[idx] || D.articleBodies[0];
  const sp = D.specialties.find(s => s.slug === b.spec);
  const doc = b.doc ? D.doctors.find(d => d.id === b.doc) : null;
  const related = D.articles.map((x, i) => ({
    ...x,
    i
  })).filter(x => x.i !== idx).slice(0, 3);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement(Crumbs, {
    go: go,
    items: [['Blog', 'blog'], [a.title]]
  }), /*#__PURE__*/React.createElement("div", {
    className: "cm-article",
    style: {
      display: 'grid',
      gridTemplateColumns: 'minmax(0,1fr) 320px',
      gap: 56,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("article", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "gold"
  }, a.cat), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12.5,
      color: 'var(--text-muted)'
    }
  }, a.read, " de lectura \xB7 Equipo m\xE9dico ClinicaMextas")), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 'var(--text-display-md)',
      marginTop: 18,
      maxWidth: 720
    }
  }, a.title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 19,
      lineHeight: 1.65,
      color: 'var(--text-muted)',
      marginTop: 18,
      fontFamily: 'var(--font-display)'
    }
  }, b.intro), /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: '12/5',
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden',
      marginTop: 32,
      background: 'var(--ivory-200)'
    }
  }, a.photo ? /*#__PURE__*/React.createElement("img", {
    src: a.photo,
    alt: a.title,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block'
    }
  }) : /*#__PURE__*/React.createElement(PhotoSlot, null)), b.sections.map(([h, p]) => /*#__PURE__*/React.createElement("section", {
    key: h,
    style: {
      marginTop: 34
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 26
    }
  }, h), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 16,
      lineHeight: 1.8,
      color: 'var(--text-body)',
      marginTop: 12
    }
  }, p))), /*#__PURE__*/React.createElement(Card, {
    padding: 20,
    tone: "sunken",
    style: {
      marginTop: 40,
      display: 'flex',
      gap: 12,
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "info",
    size: 18,
    color: "var(--gold-600)"
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 13.5,
      lineHeight: 1.6
    }
  }, "Este contenido es informativo y no sustituye una consulta m\xE9dica. Si tienes dudas sobre tu salud, agenda una valoraci\xF3n con un especialista."))), /*#__PURE__*/React.createElement("aside", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      position: 'sticky',
      top: 96
    }
  }, sp && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Eyebrow, null, "Especialidad relacionada"), /*#__PURE__*/React.createElement(SpecialtyCard, {
    name: sp.name,
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: sp.icon,
      size: 28,
      color: "var(--gold-600)"
    }),
    description: "Ver especialidad",
    onClick: () => go('especialidad:' + sp.slug),
    style: {
      aspectRatio: 'auto',
      padding: 24
    }
  })), doc ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Eyebrow, {
    style: {
      marginTop: 8
    }
  }, "Especialista"), /*#__PURE__*/React.createElement(DoctorCard, _extends({}, doc, {
    layout: "row",
    subspecialty: undefined,
    location: 'Sede ' + doc.location,
    actions: /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      onClick: () => onBook(doc)
    }, "Solicitar cita")
  }))) : /*#__PURE__*/React.createElement(Card, {
    padding: 22
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14,
      lineHeight: 1.6
    }
  }, "\xBFQuieres hablar con un especialista sobre este tema?"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      marginTop: 14,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    onClick: () => onBook(sp ? {
      specialty: sp.name
    } : {})
  }, "Solicitar cita"), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: "secondary",
    onClick: () => go('medicos')
  }, "Ver m\xE9dicos")))))), /*#__PURE__*/React.createElement(Section, {
    tone: "raised",
    py: "var(--space-9)"
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Sigue leyendo",
    title: "Art\xEDculos relacionados",
    size: "sm"
  }), /*#__PURE__*/React.createElement("div", {
    className: "cm-serv-grid",
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 16,
      marginTop: 28
    }
  }, related.map(r => /*#__PURE__*/React.createElement(Card, {
    key: r.i,
    interactive: true,
    padding: 0,
    onClick: () => go('articulo:' + r.i),
    style: {
      overflow: 'hidden'
    }
  }, r.photo && /*#__PURE__*/React.createElement("img", {
    src: r.photo,
    alt: "",
    loading: "lazy",
    style: {
      width: '100%',
      height: 150,
      objectFit: 'cover',
      display: 'block'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 22
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "gold",
    size: "sm"
  }, r.cat), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 19,
      lineHeight: 1.3,
      marginTop: 12
    }
  }, r.title), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: 'var(--text-muted)',
      display: 'block',
      marginTop: 12
    }
  }, r.read, " de lectura")))))));
}
function UrgenciasPage({
  go
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement(Crumbs, {
    go: go,
    items: [['Urgencias']]
  }), /*#__PURE__*/React.createElement(Card, {
    padding: 40,
    style: {
      background: 'var(--status-danger-soft)',
      borderColor: 'rgba(140,58,46,.28)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "cm-emg",
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr auto',
      gap: 32,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "siren",
    size: 22,
    color: "var(--status-danger)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      fontWeight: 600,
      letterSpacing: '.16em',
      color: 'var(--status-danger)'
    }
  }, "EMERGENCIAS")), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 'var(--text-display-md)',
      color: 'var(--status-danger)',
      marginTop: 14
    }
  }, "\xBFEs una emergencia m\xE9dica?"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 16,
      lineHeight: 1.7,
      color: 'var(--ink-700)',
      marginTop: 14,
      maxWidth: 640
    }
  }, "Si presentas una emergencia m\xE9dica o una situaci\xF3n que pueda poner en riesgo tu vida, llama al servicio de emergencias de tu localidad o acude al servicio de urgencias m\xE1s cercano.")), /*#__PURE__*/React.createElement("a", {
    href: "tel:911",
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      background: 'var(--status-danger)',
      color: '#fff',
      padding: '18px 30px',
      borderRadius: 'var(--radius-sm)',
      fontSize: 17,
      fontWeight: 600
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "phone",
    size: 19
  }), "Llamar al 911")))), /*#__PURE__*/React.createElement(Section, {
    tone: "raised"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cm-faq",
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 48
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Urgencias en ClinicaMextas",
    title: "Atenci\xF3n el mismo d\xEDa",
    size: "sm",
    description: "Nuestro servicio de urgencias atiende situaciones que requieren valoraci\xF3n m\xE9dica pronta y no ponen en riesgo la vida."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 24
    }
  }, [['Sede San Pedro', 'Abierto 24 horas'], ['Sede Polanco', 'Lunes a domingo · 7:00 AM – 11:00 PM'], ['Sede Monterrey Centro', 'Lunes a sábado · 7:00 AM – 9:00 PM']].map(([s, h]) => /*#__PURE__*/React.createElement("div", {
    key: s,
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      gap: 16,
      padding: '14px 0',
      borderBottom: '1px solid var(--line-hairline)',
      fontSize: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 600,
      color: 'var(--text-heading)'
    }
  }, s), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-muted)',
      textAlign: 'right'
    }
  }, h)))), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 12.5,
      color: 'var(--text-muted)',
      marginTop: 14
    }
  }, "Horarios demostrativos.")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Si acudes a urgencias",
    title: "Qu\xE9 llevar",
    size: "sm"
  }), /*#__PURE__*/React.createElement(PtList, {
    items: [['contact', 'Identificación oficial', null], ['pill', 'Lista de medicamentos actuales', null], ['file-text', 'Estudios recientes, si los tienes', null], ['shield-check', 'Póliza de seguro, si aplica', null]]
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    style: {
      marginTop: 20
    },
    onClick: () => go('sedes')
  }, "Ver ubicaciones")))));
}
const LEGAL = {
  privacidad: ['Aviso de privacidad', [['Responsable del tratamiento', 'ClinicaMextas, con domicilio en Av. San Pedro 123, Col. Del Valle, San Pedro Garza García, N.L., es responsable del uso y protección de los datos personales que nos proporcionas.'], ['Datos que recabamos', 'Datos de identificación y contacto: nombre, teléfono y correo electrónico, así como el motivo general de consulta que decidas compartir en nuestros formularios.'], ['Finalidad', 'Gestionar solicitudes de cita, responder mensajes de contacto, enviar recordatorios y mejorar la experiencia del sitio.'], ['Derechos del usuario', 'Puedes solicitar el acceso, rectificación, cancelación u oposición al uso de tus datos, así como revocar tu consentimiento.'], ['Contacto', 'Para ejercer tus derechos escribe a privacidad@clinicamextas.mx indicando tu nombre y la solicitud.'], ['Cookies', 'Este sitio utiliza cookies necesarias, analíticas y de preferencias. Puedes configurarlas desde el banner de cookies.'], ['Actualización', 'Este aviso puede modificarse. La versión vigente estará siempre disponible en esta página. Última actualización: septiembre 2026.']]],
  terminos: ['Términos y condiciones', [['Uso del sitio', 'El contenido de este sitio es informativo y no sustituye una consulta médica.'], ['Solicitudes de cita', 'Las solicitudes enviadas en línea no constituyen una cita confirmada hasta que recepción la confirme.'], ['Propiedad', 'Textos, imágenes y marca son propiedad de ClinicaMextas.']]],
  cookies: ['Política de cookies', [['Necesarias', 'Permiten el funcionamiento básico del sitio y no pueden desactivarse.'], ['Analíticas', 'Nos ayudan a entender cómo se usa el sitio de forma agregada.'], ['Preferencias', 'Recuerdan tus ajustes, como la sede seleccionada.']]],
  accesibilidad: ['Accesibilidad', [['Compromiso', 'Diseñamos este sitio para que pueda usarse con teclado, lectores de pantalla y distintos tamaños de texto.'], ['Movimiento', 'Si tu sistema tiene activada la reducción de movimiento, las animaciones se desactivan.'], ['Contacto', 'Si encuentras una barrera de accesibilidad, escríbenos a hola@clinicamextas.mx.']]]
};
function LegalPage({
  kind,
  go
}) {
  const [title, secs] = LEGAL[kind] || LEGAL.privacidad;
  return /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement(Crumbs, {
    go: go,
    items: [['Legal'], [title]]
  }), /*#__PURE__*/React.createElement("div", {
    className: "cm-article",
    style: {
      display: 'grid',
      gridTemplateColumns: '240px minmax(0,1fr)',
      gap: 56,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("nav", {
    "aria-label": "Contenido",
    style: {
      position: 'sticky',
      top: 96,
      display: 'flex',
      flexDirection: 'column',
      gap: 4
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    style: {
      marginBottom: 10
    }
  }, "Legal"), Object.entries(LEGAL).map(([k, [t]]) => /*#__PURE__*/React.createElement("a", {
    key: k,
    href: "#",
    onClick: e => {
      e.preventDefault();
      go('legal:' + k);
    },
    style: {
      fontSize: 13.5,
      padding: '8px 0',
      color: k === (kind || 'privacidad') ? 'var(--green-800)' : 'var(--text-muted)',
      fontWeight: k === (kind || 'privacidad') ? 600 : 400
    }
  }, t))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 760
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 'var(--text-display-md)'
    }
  }, title), /*#__PURE__*/React.createElement(Card, {
    padding: 16,
    tone: "accent",
    style: {
      marginTop: 20,
      display: 'flex',
      gap: 10,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "info",
    size: 16,
    color: "var(--gold-700)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: 'var(--gold-700)'
    }
  }, "Documento demostrativo y editable. No constituye un texto legal vigente.")), secs.map(([h, p], k) => /*#__PURE__*/React.createElement("section", {
    key: h,
    style: {
      marginTop: 32,
      paddingTop: 28,
      borderTop: k ? '1px solid var(--line-hairline)' : 'none'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 22
    }
  }, h), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 15.5,
      lineHeight: 1.8,
      marginTop: 10
    }
  }, p))))));
}
Object.assign(window, {
  PatientsPage,
  ArticlePage,
  UrgenciasPage,
  LegalPage
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Patients.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/data.js
try { (() => {
// Datos de demostración de ClinicaMextas. Reemplazables por una API real sin tocar la UI.
window.CM_DATA = {
  clinic: {
    name: 'ClinicaMextas',
    tagline: 'Clínica privada',
    phone: '(81) 1234 5678',
    email: 'hola@clinicamextas.mx',
    address: 'Av. San Pedro 123, Col. Del Valle, San Pedro Garza García, N.L.',
    hours: [['Lunes — Viernes', '7:00 AM — 8:00 PM'], ['Sábado', '8:00 AM — 2:00 PM'], ['Domingo', 'Cerrado']]
  },
  trust: [['Atención personalizada', 'Cada paciente es único'], ['Especialistas certificados', 'Calidad y confianza'], ['Tecnología de vanguardia', 'Diagnósticos más precisos'], ['Instalaciones de primer nivel', 'Espacios pensados para ti']],
  stats: [['10+', 'Años de experiencia'], ['25K+', 'Pacientes atendidos'], ['30+', 'Especialidades'], ['5', 'Sedes en el país']],
  specialties: [{
    slug: 'medicina-general',
    name: 'Medicina General',
    icon: 'stethoscope'
  }, {
    slug: 'pediatria',
    name: 'Pediatría',
    icon: 'baby'
  }, {
    slug: 'ginecologia',
    name: 'Ginecología',
    icon: 'person-standing'
  }, {
    slug: 'cardiologia',
    name: 'Cardiología',
    icon: 'heart-pulse'
  }, {
    slug: 'dermatologia',
    name: 'Dermatología',
    icon: 'scan-face'
  }, {
    slug: 'traumatologia',
    name: 'Traumatología',
    icon: 'bone'
  }, {
    slug: 'nutricion',
    name: 'Nutrición',
    icon: 'apple'
  }, {
    slug: 'neurologia',
    name: 'Neurología',
    icon: 'brain'
  }, {
    slug: 'oftalmologia',
    name: 'Oftalmología',
    icon: 'eye'
  }, {
    slug: 'endocrinologia',
    name: 'Endocrinología',
    icon: 'activity'
  }, {
    slug: 'medicina-interna',
    name: 'Medicina Interna',
    icon: 'clipboard-plus'
  }, {
    slug: 'otorrinolaringologia',
    name: 'Otorrinolaringología',
    icon: 'ear'
  }],
  doctors: [{
    id: 'garza',
    name: 'Dr. Alejandro Garza',
    specialty: 'Cardiología',
    sub: 'Cardiología preventiva',
    license: '1234567',
    years: 16,
    photo: '../../assets/photos/doctor-cardiologia.png',
    location: 'San Pedro',
    languages: ['Español', 'Inglés'],
    mode: 'Presencial y virtual',
    slots: {
      Lunes: ['10:30 AM', '12:00 PM', '4:30 PM'],
      Martes: ['9:00 AM', '11:30 AM']
    }
  }, {
    id: 'lopez',
    name: 'Dra. Mariana López',
    specialty: 'Ginecología',
    sub: 'Ginecología y obstetricia',
    license: '2345678',
    years: 12,
    photo: '../../assets/photos/doctora-ginecologia.png',
    location: 'Monterrey',
    languages: ['Español'],
    mode: 'Presencial',
    slots: {
      Lunes: ['9:00 AM', '1:00 PM'],
      Miércoles: ['10:00 AM', '11:00 AM', '5:00 PM']
    }
  }, {
    id: 'herrera',
    name: 'Dr. Daniel Herrera',
    specialty: 'Traumatología',
    sub: 'Ortopedia deportiva',
    license: '3456789',
    years: 9,
    photo: '../../assets/photos/doctor-traumatologia.png',
    location: 'San Pedro',
    languages: ['Español', 'Inglés'],
    mode: 'Presencial',
    slots: {
      Martes: ['8:30 AM', '12:30 PM'],
      Jueves: ['9:30 AM', '4:00 PM']
    }
  }, {
    id: 'martinez',
    name: 'Dra. Sofía Martínez',
    specialty: 'Pediatría',
    sub: 'Pediatría del desarrollo',
    license: '4567890',
    years: 11,
    photo: '../../assets/photos/doctora-pediatria.png',
    location: 'Guadalajara',
    languages: ['Español'],
    mode: 'Presencial y virtual',
    slots: {
      Miércoles: ['8:00 AM', '10:30 AM'],
      Viernes: ['11:00 AM', '3:30 PM', '5:00 PM']
    }
  }],
  services: [{
    name: 'Laboratorio clínico',
    icon: 'flask-conical',
    photo: '../../assets/photos/laboratorio.png',
    desc: 'Resultados rápidos y confiables',
    detail: 'Química sanguínea, biometría, perfiles hormonales y estudios de seguimiento con entrega digital.'
  }, {
    name: 'Imagenología',
    icon: 'scan',
    photo: '../../assets/photos/imagenologia.png',
    desc: 'Tecnología avanzada en diagnóstico',
    detail: 'Ultrasonido, rayos X y densitometría interpretados por médicos radiólogos.'
  }, {
    name: 'Chequeos preventivos',
    icon: 'shield-check',
    desc: 'Detectamos a tiempo, cuidamos tu salud',
    detail: 'Paquetes Esencial, Integral y Ejecutivo con seguimiento posterior.'
  }, {
    name: 'Urgencias',
    icon: 'siren',
    desc: 'Atención cuando más lo necesitas',
    detail: 'Servicio de urgencias con valoración inmediata. Si es una emergencia, llama al 911.'
  }, {
    name: 'Vacunación',
    icon: 'syringe',
    desc: 'Protección para ti y tu familia',
    detail: 'Esquemas infantiles y de adulto con cartilla digital.'
  }, {
    name: 'Atención domiciliaria',
    icon: 'house-plus',
    desc: 'Cuidado profesional en tu hogar',
    detail: 'Visita médica programada dentro del área metropolitana.'
  }],
  locations: [{
    id: 'sanpedro',
    name: 'Sede San Pedro',
    city: 'San Pedro Garza García, N.L.',
    address: 'Av. San Pedro 123, Col. Del Valle',
    phone: '(81) 1234 5678',
    specialties: 12,
    parking: 'Estacionamiento con valet',
    access: 'Acceso para silla de ruedas'
  }, {
    id: 'monterrey',
    name: 'Sede Monterrey Centro',
    city: 'Monterrey, N.L.',
    address: 'Av. Constitución 840, Centro',
    phone: '(81) 2345 6789',
    specialties: 9,
    parking: 'Estacionamiento propio',
    access: 'Acceso para silla de ruedas'
  }, {
    id: 'cdmx',
    name: 'Sede Polanco',
    city: 'Ciudad de México',
    address: 'Av. Presidente Masaryk 210, Polanco',
    phone: '(55) 3456 7890',
    specialties: 11,
    parking: 'Estacionamiento con valet',
    access: 'Elevadores y rampas'
  }, {
    id: 'gdl',
    name: 'Sede Providencia',
    city: 'Guadalajara, Jal.',
    address: 'Av. Pablo Neruda 2916, Providencia',
    phone: '(33) 4567 8901',
    specialties: 8,
    parking: 'Estacionamiento propio',
    access: 'Acceso para silla de ruedas'
  }],
  faqs: [{
    question: '¿Cómo puedo agendar una cita?',
    answer: 'Desde el botón “Agendar cita” del encabezado. Completas los pasos y recepción confirma la disponibilidad por teléfono o correo.'
  }, {
    question: '¿Puedo elegir médico?',
    answer: 'Sí. En el directorio médico puedes filtrar por especialidad y sede, y solicitar cita directamente con el especialista que prefieras.'
  }, {
    question: '¿Atienden pacientes nuevos?',
    answer: 'Sí. Si es tu primera visita, te recomendamos revisar la sección “Primera visita” para saber qué llevar.'
  }, {
    question: '¿Qué debo llevar a mi primera consulta?',
    answer: 'Identificación oficial, estudios previos si los tienes y la lista de medicamentos que tomas actualmente.'
  }, {
    question: '¿Puedo cancelar o cambiar mi cita?',
    answer: 'Sí, contactando a recepción con al menos 12 horas de anticipación.'
  }, {
    question: '¿Qué métodos de pago aceptan?',
    answer: 'Tarjeta de crédito y débito, transferencia y efectivo. La información de convenios es demostrativa.'
  }, {
    question: '¿Atienden urgencias?',
    answer: 'Contamos con servicio de urgencias en sedes seleccionadas. Ante una emergencia que ponga en riesgo la vida, llama al 911.'
  }],
  testimonials: [{
    quote: 'Desde recepción hasta la consulta, todo el proceso fue muy claro y amable.',
    author: 'Laura M.'
  }, {
    quote: 'Me explicaron cada paso con calma y sin prisa. Salí entendiendo mi seguimiento.',
    author: 'Ricardo T.'
  }, {
    quote: 'Las instalaciones son impecables y la atención fue puntual.',
    author: 'Ana Sofía R.'
  }],
  articles: [{
    title: '¿Por qué son importantes los chequeos preventivos?',
    cat: 'Prevención',
    read: '4 min',
    photo: '../../assets/photos/blog-chequeos.png'
  }, {
    title: '¿Cuándo acudir con un cardiólogo?',
    cat: 'Cardiología',
    read: '5 min',
    photo: '../../assets/photos/blog-cardiologo.png'
  }, {
    title: 'Salud infantil: revisiones importantes por edad',
    cat: 'Pediatría',
    read: '6 min',
    photo: '../../assets/photos/blog-salud-infantil.png'
  }, {
    title: 'Alimentación y bienestar: hábitos sostenibles',
    cat: 'Nutrición',
    read: '4 min',
    photo: '../../assets/photos/blog-alimentacion.png'
  }]
};
// ---- Datos ampliados (instalaciones, tecnología, check-ups, convenios, artículos) ----
window.CM_DATA.articles.push({
  title: 'Cuidados preventivos para adultos',
  cat: 'Prevención',
  read: '5 min',
  photo: '../../assets/photos/blog-adultos.png'
}, {
  title: 'Salud de la piel: hábitos de cuidado diario',
  cat: 'Dermatología',
  read: '4 min',
  photo: '../../assets/photos/blog-piel.png'
}, {
  title: '¿Qué esperar de una primera consulta?',
  cat: 'Bienestar',
  read: '3 min',
  photo: '../../assets/photos/blog-primera-consulta.png'
});
Object.assign(window.CM_DATA, {
  facilities: [{
    name: 'Recepción',
    icon: 'door-open',
    photo: '../../assets/photos/recepcion.png',
    desc: 'Un espacio luminoso donde te recibimos, confirmamos tu cita y resolvemos cualquier duda antes de pasar a consulta.'
  }, {
    name: 'Consultorios',
    icon: 'stethoscope',
    photo: '../../assets/photos/consultorios.png',
    desc: 'Consultorios amplios y privados, equipados para valoración clínica y pensados para conversar sin prisa.'
  }, {
    name: 'Sala de espera',
    icon: 'armchair',
    desc: 'Mobiliario cómodo, luz natural y pantallas con el orden de atención para que sepas cuánto falta.'
  }, {
    name: 'Laboratorio clínico',
    icon: 'flask-conical',
    photo: '../../assets/photos/laboratorio.png',
    desc: 'Toma de muestras en cubículos individuales y procesamiento con control de calidad interno.'
  }, {
    name: 'Imagenología',
    icon: 'scan',
    photo: '../../assets/photos/imagenologia.png',
    desc: 'Salas de ultrasonido, rayos X y densitometría con vestidores privados.'
  }, {
    name: 'Áreas de recuperación',
    icon: 'bed',
    desc: 'Espacios tranquilos para observación posterior a estudios o procedimientos ambulatorios.'
  }, {
    name: 'Espacio infantil',
    icon: 'toy-brick',
    photo: '../../assets/photos/espacio-infantil.png',
    desc: 'Un rincón pensado para que niñas y niños esperen con calma junto a sus familias.'
  }, {
    name: 'Fachada',
    icon: 'building-2',
    desc: 'Sede San Pedro: acceso a nivel de calle, estacionamiento con valet y señalización clara.'
  }, {
    name: 'Tecnología médica',
    icon: 'cpu',
    desc: 'Equipos de diagnóstico con mantenimiento programado y registro digital de resultados.'
  }],
  technology: [['microscope', 'Diagnóstico clínico', 'Consultorios equipados para exploración física completa, toma de signos vitales y electrocardiograma en consulta.'], ['flask-conical', 'Laboratorio', 'Análisis clínicos de rutina y especializados, con resultados disponibles en formato digital y explicados por tu médico.'], ['scan', 'Imagenología', 'Ultrasonido, rayos X digital y densitometría ósea, interpretados por médicos radiólogos.'], ['activity', 'Monitoreo', 'Monitoreo de signos vitales durante estudios y en áreas de recuperación, supervisado por personal de enfermería.'], ['monitor-smartphone', 'Herramientas digitales', 'Solicitud de citas en línea, recordatorios por correo y acceso a resultados desde cualquier dispositivo.'], ['folder-heart', 'Expediente y seguimiento', 'Expediente clínico electrónico compartido entre especialistas para dar continuidad a tu atención.']],
  checkups: [{
    id: 'esencial',
    name: 'Check-up Esencial',
    tag: 'Para evaluación preventiva general.',
    duration: '2 horas aprox.',
    for: 'Adultos que buscan una revisión anual de su estado general de salud.',
    includes: ['Consulta de medicina general', 'Biometría hemática', 'Química sanguínea de 6 elementos', 'Examen general de orina', 'Signos vitales y medidas corporales', 'Entrega de resultados con explicación médica'],
    prep: ['Ayuno de 8 a 10 horas', 'Identificación oficial', 'Lista de medicamentos actuales']
  }, {
    id: 'integral',
    name: 'Check-up Integral',
    tag: 'Evaluación más amplia.',
    duration: '3 a 4 horas aprox.',
    for: 'Adultos a partir de 40 años o con antecedentes familiares que requieren una revisión más completa.',
    includes: ['Todo lo incluido en Esencial', 'Perfil de lípidos', 'Perfil tiroideo', 'Electrocardiograma', 'Radiografía de tórax', 'Valoración nutricional', 'Consulta de seguimiento'],
    prep: ['Ayuno de 10 a 12 horas', 'Ropa cómoda', 'Estudios previos, si los tienes']
  }, {
    id: 'ejecutivo',
    name: 'Check-up Ejecutivo',
    tag: 'Evaluación integral en una sola visita.',
    duration: 'Una mañana (5 horas aprox.)',
    for: 'Pacientes que requieren una evaluación integral coordinada en una sola visita.',
    includes: ['Todo lo incluido en Integral', 'Valoración cardiológica', 'Prueba de esfuerzo, según indicación médica', 'Ultrasonido abdominal', 'Valoración oftalmológica', 'Coordinador de visita y área de espera privada'],
    prep: ['Ayuno de 12 horas', 'Ropa y calzado deportivo', 'Agendar con 48 horas de anticipación']
  }],
  insurers: ['Aseguradora Horizonte', 'Seguros Alba', 'Grupo Vital', 'Protección Norte', 'MedPlus Seguros', 'Confía Salud'],
  articleBodies: [{
    spec: 'medicina-general',
    doc: 'garza',
    intro: 'Un chequeo preventivo permite conocer tu estado de salud cuando te sientes bien, no solo cuando algo te preocupa. Es una oportunidad para conversar con tu médico y planear tu cuidado.',
    sections: [['Qué es un chequeo preventivo', 'Es una evaluación programada que combina consulta, exploración física y estudios básicos. Su objetivo es identificar factores de riesgo y darte recomendaciones personalizadas.'], ['Con qué frecuencia hacerlo', 'La frecuencia depende de tu edad, tus antecedentes y tu estilo de vida. Tu médico te indicará qué estudios son adecuados para ti y cada cuánto repetirlos.'], ['Cómo prepararte', 'Pregunta si requieres ayuno, lleva tus estudios previos y anota tus dudas. Una consulta preparada aprovecha mejor el tiempo.']]
  }, {
    spec: 'cardiologia',
    doc: 'garza',
    intro: 'La cardiología se ocupa de la salud del corazón y los vasos sanguíneos. Muchas personas acuden por prevención, por indicación de su médico general o para dar seguimiento a un tratamiento.',
    sections: [['Cuándo considerar una valoración', 'Si tu médico te lo recomienda, si tienes antecedentes familiares de enfermedad cardiovascular o si deseas una evaluación preventiva, una consulta con cardiología puede orientarte.'], ['Qué sucede en la consulta', 'El especialista revisa tu historia clínica, realiza una exploración y puede solicitar estudios como electrocardiograma o perfil de lípidos.'], ['Importante', 'Si presentas un síntoma repentino o intenso, no esperes una cita: llama al servicio de emergencias de tu localidad.']]
  }, {
    spec: 'pediatria',
    doc: 'martinez',
    intro: 'Las revisiones pediátricas acompañan el crecimiento y desarrollo de niñas y niños. Son también un espacio para resolver dudas de madres, padres y cuidadores.',
    sections: [['Revisiones del niño sano', 'Durante los primeros años, las consultas periódicas permiten seguir peso, talla y desarrollo, y mantener al día el esquema de vacunación.'], ['Qué llevar', 'La cartilla de vacunación, estudios previos y una lista de preguntas. Anotar observaciones de casa ayuda mucho al pediatra.'], ['Un espacio para preguntar', 'No hay preguntas menores. La consulta es el momento adecuado para hablar de alimentación, sueño o hábitos.']]
  }, {
    spec: 'nutricion',
    doc: null,
    intro: 'La alimentación influye en cómo te sientes cada día. Un acompañamiento nutricional busca hábitos sostenibles, no soluciones rápidas.',
    sections: [['Hábitos antes que dietas', 'Los cambios pequeños y constantes suelen ser más fáciles de mantener que los planes restrictivos.'], ['La consulta nutricional', 'Incluye una valoración de tus hábitos, medidas corporales y objetivos, para construir un plan adaptado a tu rutina.'], ['Seguimiento', 'Las consultas de seguimiento permiten ajustar el plan según tu evolución y tus necesidades.']]
  }, {
    spec: 'medicina-interna',
    doc: null,
    intro: 'En la vida adulta, la prevención ayuda a mantener la salud a largo plazo. Conocer tus factores de riesgo es el primer paso.',
    sections: [['Revisiones periódicas', 'Tu médico puede recomendarte estudios según tu edad y antecedentes, como perfil de lípidos o glucosa.'], ['Estilo de vida', 'Actividad física regular, descanso suficiente y alimentación equilibrada forman parte de cualquier plan preventivo.'], ['Continuidad', 'Tener un médico de cabecera facilita el seguimiento y la coordinación con otros especialistas.']]
  }, {
    spec: 'dermatologia',
    doc: null,
    intro: 'La piel cambia con la edad, el clima y los hábitos. Un cuidado diario sencillo ayuda a mantenerla en buen estado.',
    sections: [['Protección solar', 'Usar protector solar a diario, incluso en días nublados, es uno de los hábitos más recomendados por dermatología.'], ['Rutina básica', 'Limpieza suave, hidratación y protección. No es necesario usar muchos productos.'], ['Cuándo consultar', 'Si notas cambios en un lunar o en tu piel que te preocupan, agenda una valoración con un especialista.']]
  }, {
    spec: 'medicina-general',
    doc: null,
    intro: 'Tu primera consulta en ClinicaMextas empieza antes de llegar: te ayudamos a prepararla para que sea clara y sin contratiempos.',
    sections: [['Antes', 'Recibirás un correo con la confirmación de tu solicitud y recomendaciones según tu especialidad.'], ['Durante', 'Tu médico dedicará tiempo a escucharte, revisar tus antecedentes y explicarte los siguientes pasos.'], ['Después', 'Recibirás indicaciones por escrito y, si aplica, la programación de estudios o de tu siguiente consulta.']]
  }]
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/data.js", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Chip = __ds_scope.Chip;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.SectionHeading = __ds_scope.SectionHeading;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Field = __ds_scope.Field;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.RadioGroup = __ds_scope.RadioGroup;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Accordion = __ds_scope.Accordion;

__ds_ns.DoctorCard = __ds_scope.DoctorCard;

__ds_ns.Modal = __ds_scope.Modal;

__ds_ns.SpecialtyCard = __ds_scope.SpecialtyCard;

__ds_ns.StatBlock = __ds_scope.StatBlock;

__ds_ns.StepIndicator = __ds_scope.StepIndicator;

__ds_ns.TimeSlotPicker = __ds_scope.TimeSlotPicker;

})();
